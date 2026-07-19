import type { MoveInput, PromotionPiece } from './types';

const WORKER_URL = '/engine/stockfish-18-lite-single.js';

/** Fixed search depth for M1 (difficulty presets land in M2). */
export const VS_AI_M1_DEPTH = 10;

const PROMOTION_PIECES = new Set<PromotionPiece>(['q', 'r', 'b', 'n']);

export type StockfishClient = {
  ready: Promise<void>;
  getBestMove: (fen: string, depth?: number) => Promise<string | null>;
  stop: () => void;
  terminate: () => void;
};

/**
 * Parse a UCI bestmove token (`e2e4`, `e7e8q`) into a MoveInput.
 * Returns null for missing / none / invalid tokens.
 */
export function parseUciMove(uci: string | null | undefined): MoveInput | null {
  if (!uci || uci === '(none)') {
    return null;
  }

  if (!/^[a-h][1-8][a-h][1-8][qrbn]?$/.test(uci)) {
    return null;
  }

  const move: MoveInput = {
    from: uci.slice(0, 2),
    to: uci.slice(2, 4),
  };

  if (uci.length === 5) {
    const promotion = uci[4] as PromotionPiece;
    if (!PROMOTION_PIECES.has(promotion)) {
      return null;
    }
    move.promotion = promotion;
  }

  return move;
}

function extractBestMove(line: string): string | null {
  if (!line.startsWith('bestmove ')) {
    return null;
  }

  const token = line.split(/\s+/)[1];
  return token ?? null;
}

export function createStockfishClient(
  workerUrl: string = WORKER_URL,
): StockfishClient {
  const worker = new Worker(workerUrl);
  let disposed = false;
  let chain: Promise<void> = Promise.resolve();

  const listeners = new Set<(line: string) => void>();

  worker.onmessage = (event: MessageEvent<unknown>) => {
    const line = typeof event.data === 'string' ? event.data : String(event.data);
    for (const listener of listeners) {
      listener(line);
    }
  };

  function post(command: string): void {
    if (!disposed) {
      worker.postMessage(command);
    }
  }

  function waitFor(
    predicate: (line: string) => boolean,
    timeoutMs = 30_000,
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      if (disposed) {
        reject(new Error('Stockfish worker is terminated'));
        return;
      }

      const timer = window.setTimeout(() => {
        listeners.delete(onLine);
        reject(new Error('Stockfish response timed out'));
      }, timeoutMs);

      function onLine(line: string): void {
        if (!predicate(line)) {
          return;
        }

        window.clearTimeout(timer);
        listeners.delete(onLine);
        resolve(line);
      }

      listeners.add(onLine);
    });
  }

  function enqueue<T>(task: () => Promise<T>): Promise<T> {
    const run = chain.then(task, task);
    chain = run.then(
      () => undefined,
      () => undefined,
    );
    return run;
  }

  const ready = enqueue(async () => {
    post('uci');
    await waitFor((line) => line === 'uciok');
    post('isready');
    await waitFor((line) => line === 'readyok');
  });

  return {
    ready,
    getBestMove(fen, depth = VS_AI_M1_DEPTH) {
      return enqueue(async () => {
        await ready;
        if (disposed) {
          return null;
        }

        post('ucinewgame');
        post('isready');
        await waitFor((line) => line === 'readyok');
        post(`position fen ${fen}`);
        post(`go depth ${depth}`);

        const line = await waitFor((message) => message.startsWith('bestmove '));
        return extractBestMove(line);
      });
    },
    stop() {
      post('stop');
    },
    terminate() {
      disposed = true;
      listeners.clear();
      try {
        post('quit');
      } catch {
        // Worker may already be gone.
      }
      worker.terminate();
    },
  };
}
