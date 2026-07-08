import { describe, expect, it } from 'vitest';
import { createEngine } from './engine';

const STARTING_FEN =
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

describe('createEngine', () => {
  it('starts from the standard position', () => {
    const engine = createEngine();

    expect(engine.fen()).toBe(STARTING_FEN);
    expect(engine.turn()).toBe('w');
  });

  it('loads a custom FEN', () => {
    const fen = '8/8/8/8/4P3/8/8/4K2k b - - 0 1';
    const engine = createEngine(fen);

    expect(engine.fen()).toBe(fen);
    expect(engine.turn()).toBe('b');
  });

  it('applies legal moves and rejects illegal ones', () => {
    const engine = createEngine();

    expect(engine.move({ from: 'e2', to: 'e4' })).toMatchObject({
      san: 'e4',
      from: 'e2',
      to: 'e4',
    });
    expect(engine.turn()).toBe('b');
    expect(engine.history()).toEqual(['e4']);

    expect(engine.move({ from: 'e2', to: 'e5' })).toBeNull();
  });

  it('lists legal moves for a square', () => {
    const engine = createEngine();
    const moves = engine.legalMoves('e2');

    expect(moves.some((move) => move.to === 'e4')).toBe(true);
    expect(moves.some((move) => move.to === 'e3')).toBe(true);
  });

  it('promotes a pawn', () => {
    const engine = createEngine('8/4P3/8/8/8/8/8/4K2k w - - 0 1');

    expect(
      engine.move({ from: 'e7', to: 'e8', promotion: 'q' }),
    ).toMatchObject({
      san: 'e8=Q',
    });
    expect(engine.fen()).toContain('4Q3');
  });

  it('allows kingside castling when paths are clear', () => {
    const engine = createEngine('r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1');

    expect(engine.move({ from: 'e1', to: 'g1' })).toMatchObject({ san: 'O-O' });
    expect(engine.fen()).toContain('R4RK1');
  });

  it('captures en passant', () => {
    const engine = createEngine('8/8/8/3PpP2/8/8/8/4K2k w - e6 0 1');

    expect(engine.move({ from: 'f5', to: 'e6' })).toMatchObject({ san: 'fxe6' });
    expect(engine.board()[4][4]).toBeNull();
  });

  it('detects check', () => {
    const engine = createEngine('4k3/8/8/8/8/8/8/r3K3 w - - 0 1');

    expect(engine.isCheck()).toBe(true);
    expect(engine.isGameOver()).toBe(false);
  });

  it('detects checkmate', () => {
    const engine = createEngine('rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 1 3');

    expect(engine.isCheckmate()).toBe(true);
    expect(engine.isGameOver()).toBe(true);
  });

  it('detects stalemate', () => {
    const engine = createEngine('7k/5Q2/6K1/8/8/8/8/8 b - - 0 1');

    expect(engine.isStalemate()).toBe(true);
    expect(engine.isDraw()).toBe(true);
    expect(engine.isGameOver()).toBe(true);
  });

  it('undoes the last move', () => {
    const engine = createEngine();

    engine.move({ from: 'e2', to: 'e4' });
    expect(engine.history()).toEqual(['e4']);

    expect(engine.undo()).toMatchObject({ san: 'e4' });
    expect(engine.fen()).toBe(STARTING_FEN);
  });

  it('exports pgn after moves', () => {
    const engine = createEngine();

    engine.move({ from: 'e2', to: 'e4' });
    engine.move({ from: 'e7', to: 'e5' });

    expect(engine.pgn()).toContain('1. e4 e5');
  });
});
