import type { ChessEngine } from '../engine';

type GameStatusProps = {
  engine: ChessEngine;
  turn: 'w' | 'b';
};

function statusMessage(engine: ChessEngine, turn: 'w' | 'b'): string {
  if (engine.isCheckmate()) {
    const winner = turn === 'w' ? 'Black' : 'White';
    return `Checkmate — ${winner} wins`;
  }

  if (engine.isStalemate()) {
    return 'Stalemate — Draw';
  }

  if (engine.isDraw()) {
    return 'Draw';
  }

  if (engine.isCheck()) {
    return 'Check';
  }

  return turn === 'w' ? 'White to move' : 'Black to move';
}

function statusTone(engine: ChessEngine): string {
  if (engine.isCheckmate()) {
    return 'border-rose-500/60 bg-rose-950/50 text-rose-200';
  }

  if (engine.isGameOver()) {
    return 'border-amber-500/60 bg-amber-950/50 text-amber-200';
  }

  if (engine.isCheck()) {
    return 'border-orange-500/60 bg-orange-950/50 text-orange-200';
  }

  return 'border-stone-600 bg-stone-800/50 text-stone-200';
}

export function GameStatus({ engine, turn }: GameStatusProps) {
  const message = statusMessage(engine, turn);
  const tone = statusTone(engine);

  return (
    <div
      className={`rounded border px-4 py-3 text-center text-sm font-medium ${tone}`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
