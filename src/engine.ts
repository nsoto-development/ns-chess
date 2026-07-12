import { Chess, type Square as ChessSquare } from 'chess.js';
import type { Color, MoveInput } from './types';

export type BoardPiece = {
  type: string;
  color: Color;
} | null;

export type Board = BoardPiece[][];

export type MoveResult = {
  san: string;
  from: string;
  to: string;
};

export type LegalMove = {
  from: string;
  to: string;
  san: string;
};

export class ChessEngine {
  private chess: Chess;

  constructor(fen?: string) {
    this.chess = new Chess(fen);
  }

  fen(): string {
    return this.chess.fen();
  }

  turn(): Color {
    return this.chess.turn();
  }

  board(): Board {
    return this.chess.board().map((row) =>
      row.map((piece) =>
        piece ? { type: piece.type, color: piece.color as Color } : null,
      ),
    );
  }

  legalMoves(square?: string): LegalMove[] {
    const moves = square
      ? this.chess.moves({ square: square as ChessSquare, verbose: true })
      : this.chess.moves({ verbose: true });

    return moves.map((move) => ({
      from: move.from,
      to: move.to,
      san: move.san,
    }));
  }

  move(input: MoveInput): MoveResult | null {
    try {
      const result = this.chess.move({
        from: input.from as ChessSquare,
        to: input.to as ChessSquare,
        promotion: input.promotion,
      });

      if (result === null) {
        return null;
      }

      return { san: result.san, from: result.from, to: result.to };
    } catch {
      return null;
    }
  }

  moveSan(san: string): MoveResult | null {
    try {
      const result = this.chess.move(san);

      if (result === null) {
        return null;
      }

      return { san: result.san, from: result.from, to: result.to };
    } catch {
      return null;
    }
  }

  undo(): MoveResult | null {
    const result = this.chess.undo();
    if (!result) {
      return null;
    }

    return { san: result.san, from: result.from, to: result.to };
  }

  isGameOver(): boolean {
    return this.chess.isGameOver();
  }

  isCheck(): boolean {
    return this.chess.isCheck();
  }

  isCheckmate(): boolean {
    return this.chess.isCheckmate();
  }

  isStalemate(): boolean {
    return this.chess.isStalemate();
  }

  isDraw(): boolean {
    return this.chess.isDraw();
  }

  history(): string[] {
    return this.chess.history();
  }

  pgn(): string {
    return this.chess.pgn();
  }

  setHeader(key: string, value: string): void {
    this.chess.header(key, value);
  }

  loadPgn(pgn: string): boolean {
    try {
      this.chess.loadPgn(pgn);
      return true;
    } catch {
      return false;
    }
  }
}

export function createEngine(fen?: string): ChessEngine {
  return new ChessEngine(fen);
}

function formatPgnDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

function pgnResult(engine: ChessEngine): string {
  if (!engine.isGameOver()) {
    return '*';
  }

  if (engine.isDraw()) {
    return '1/2-1/2';
  }

  if (engine.isCheckmate()) {
    return engine.turn() === 'w' ? '0-1' : '1-0';
  }

  return '*';
}

function applyPgnHeaders(engine: ChessEngine, playedAt: Date): void {
  engine.setHeader('Event', 'Casual game');
  engine.setHeader('Site', 'ns-chess');
  engine.setHeader('Date', formatPgnDate(playedAt));
  engine.setHeader('Round', '1');
  engine.setHeader('White', 'White');
  engine.setHeader('Black', 'Black');
  engine.setHeader('Result', pgnResult(engine));
}

export function pgnFromHistory(history: string[], playedAt: Date = new Date()): string {
  if (history.length === 0) {
    return '';
  }

  const engine = createEngine();

  for (const san of history) {
    if (!engine.moveSan(san)) {
      return '';
    }
  }

  applyPgnHeaders(engine, playedAt);
  return engine.pgn();
}
