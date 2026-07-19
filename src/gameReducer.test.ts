import { describe, expect, it } from 'vitest';
import { createEngine } from './engine';
import {
  createInitialState,
  gameReducer,
  STARTING_FEN,
  type GameState,
} from './gameReducer';

function playMoves(
  state: GameState,
  moves: Array<{ from: string; to: string; promotion?: 'q' | 'r' | 'b' | 'n' }>,
): GameState {
  return moves.reduce(
    (current, move) =>
      gameReducer(current, { type: 'MOVE_MADE', move }),
    state,
  );
}

function stateFromFen(fen: string): GameState {
  const engine = createEngine(fen);
  return {
    mode: 'local',
    fen: engine.fen(),
    turn: engine.turn(),
    moveHistory: engine.history(),
    pendingPromotion: null,
    engine,
  };
}

describe('gameReducer', () => {
  it('resets state on NEW_GAME', () => {
    const state = createInitialState();
    const afterMove = gameReducer(state, {
      type: 'MOVE_MADE',
      move: { from: 'e2', to: 'e4' },
    });
    const reset = gameReducer(afterMove, { type: 'NEW_GAME' });

    expect(reset.fen).toBe(STARTING_FEN);
    expect(reset.turn).toBe('w');
    expect(reset.moveHistory).toEqual([]);
    expect(reset.mode).toBe('local');
    expect(reset.pendingPromotion).toBeNull();
  });

  it('applies a legal MOVE_MADE', () => {
    const state = createInitialState();
    const next = gameReducer(state, {
      type: 'MOVE_MADE',
      move: { from: 'e2', to: 'e4' },
    });

    expect(next.fen).not.toBe(STARTING_FEN);
    expect(next.turn).toBe('b');
    expect(next.moveHistory).toEqual(['e4']);
    expect(next.engine.pgn()).toContain('1. e4');
    expect(next.pendingPromotion).toBeNull();
  });

  it('accumulates move history and PGN across multiple moves', () => {
    const state = playMoves(createInitialState(), [
      { from: 'e2', to: 'e4' },
      { from: 'e7', to: 'e5' },
      { from: 'g1', to: 'f3' },
    ]);

    expect(state.moveHistory).toEqual(['e4', 'e5', 'Nf3']);
    expect(state.engine.pgn()).toContain('1. e4 e5');
    expect(state.engine.pgn()).toContain('Nf3');
  });

  it('ignores an illegal MOVE_MADE', () => {
    const state = createInitialState();
    const next = gameReducer(state, {
      type: 'MOVE_MADE',
      move: { from: 'e2', to: 'e5' },
    });

    expect(next).toBe(state);
    expect(next.fen).toBe(STARTING_FEN);
    expect(next.moveHistory).toEqual([]);
  });

  it('stays consistent when reducer runs twice (Strict Mode)', () => {
    const state = createInitialState();
    const action = { type: 'MOVE_MADE' as const, move: { from: 'e2', to: 'e4' } };

    gameReducer(state, action);
    const next = gameReducer(state, action);

    expect(next.turn).toBe('b');
    expect(next.moveHistory).toEqual(['e4']);
    expect(next.engine.board()[4][4]).toMatchObject({ type: 'p', color: 'w' });
  });

  it('undoes the last move', () => {
    const state = createInitialState();
    const afterMoves = playMoves(state, [
      { from: 'e2', to: 'e4' },
      { from: 'e7', to: 'e5' },
    ]);
    const undone = gameReducer(afterMoves, { type: 'UNDO' });

    expect(undone.fen).not.toBe(STARTING_FEN);
    expect(undone.moveHistory).toEqual(['e4']);
    expect(undone.turn).toBe('b');
    expect(undone.engine.pgn()).toContain('1. e4');
    expect(undone.engine.pgn()).not.toContain('e5');
  });

  it('undoes back to the starting position', () => {
    const state = createInitialState();
    const afterMove = gameReducer(state, {
      type: 'MOVE_MADE',
      move: { from: 'e2', to: 'e4' },
    });
    const undone = gameReducer(afterMove, { type: 'UNDO' });

    expect(undone.fen).toBe(STARTING_FEN);
    expect(undone.moveHistory).toEqual([]);
    expect(undone.turn).toBe('w');
  });

  it('clears pending promotion on UNDO without changing the board', () => {
    const state = stateFromFen('8/4P3/8/8/8/8/8/4K2k w - - 0 1');
    const pending = gameReducer(state, {
      type: 'PROMOTION_PENDING',
      from: 'e7',
      to: 'e8',
    });
    const cleared = gameReducer(pending, { type: 'UNDO' });

    expect(cleared.pendingPromotion).toBeNull();
    expect(cleared.fen).toBe(state.fen);
    expect(cleared.moveHistory).toEqual([]);
  });

  it('sets pending promotion for a legal pawn advance', () => {
    const state = stateFromFen('8/4P3/8/8/8/8/8/4K2k w - - 0 1');
    const pending = gameReducer(state, {
      type: 'PROMOTION_PENDING',
      from: 'e7',
      to: 'e8',
    });

    expect(pending.pendingPromotion).toEqual({ from: 'e7', to: 'e8' });
    expect(pending.fen).toBe(state.fen);
    expect(pending.moveHistory).toEqual([]);
  });

  it('ignores illegal promotion requests', () => {
    const state = createInitialState();
    const pending = gameReducer(state, {
      type: 'PROMOTION_PENDING',
      from: 'e2',
      to: 'e8',
    });

    expect(pending).toBe(state);
    expect(pending.pendingPromotion).toBeNull();
  });

  it('completes promotion via MOVE_MADE with chosen piece', () => {
    const state = stateFromFen('8/4P3/8/8/8/8/8/4K2k w - - 0 1');
    const pending = gameReducer(state, {
      type: 'PROMOTION_PENDING',
      from: 'e7',
      to: 'e8',
    });
    const promoted = gameReducer(pending, {
      type: 'MOVE_MADE',
      move: { from: 'e7', to: 'e8', promotion: 'n' },
    });

    expect(promoted.pendingPromotion).toBeNull();
    expect(promoted.moveHistory).toEqual(['e8=N']);
    expect(promoted.fen).toContain('4N3');
  });

  it('detects checkmate through the reducer', () => {
    const state = createInitialState();
    const checkmate = playMoves(state, [
      { from: 'f2', to: 'f3' },
      { from: 'e7', to: 'e5' },
      { from: 'g2', to: 'g4' },
      { from: 'd8', to: 'h4' },
    ]);

    expect(checkmate.engine.isCheckmate()).toBe(true);
    expect(checkmate.engine.isGameOver()).toBe(true);
  });

  it('detects stalemate through the reducer', () => {
    const stalemate = stateFromFen('7k/5Q2/6K1/8/8/8/8/8 b - - 0 1');

    expect(stalemate.engine.isStalemate()).toBe(true);
    expect(stalemate.engine.isDraw()).toBe(true);
  });

  it('applies kingside castling through the reducer', () => {
    const state = createInitialState();
    const castled = playMoves(state, [
      { from: 'e2', to: 'e4' },
      { from: 'a7', to: 'a6' },
      { from: 'f1', to: 'c4' },
      { from: 'a6', to: 'a5' },
      { from: 'g1', to: 'f3' },
      { from: 'a5', to: 'a4' },
      { from: 'e1', to: 'g1' },
    ]);

    expect(castled.moveHistory.at(-1)).toBe('O-O');
    expect(castled.fen).toContain('RNBQ1RK1');
  });

  it('captures en passant through the reducer', () => {
    const state = createInitialState();
    const afterSetup = playMoves(state, [
      { from: 'e2', to: 'e4' },
      { from: 'a7', to: 'a6' },
      { from: 'e4', to: 'e5' },
      { from: 'f7', to: 'f5' },
    ]);
    const captured = gameReducer(afterSetup, {
      type: 'MOVE_MADE',
      move: { from: 'e5', to: 'f6' },
    });

    expect(captured.moveHistory.at(-1)).toBe('exf6');
    expect(captured.engine.board()[3][5]).toBeNull();
  });

  it('preserves mode on NEW_GAME', () => {
    const vsAi = gameReducer(createInitialState(), {
      type: 'SET_MODE',
      mode: 'vsAI',
    });
    const afterMove = gameReducer(vsAi, {
      type: 'MOVE_MADE',
      move: { from: 'e2', to: 'e4' },
    });
    const reset = gameReducer(afterMove, { type: 'NEW_GAME' });

    expect(reset.mode).toBe('vsAI');
    expect(reset.fen).toBe(STARTING_FEN);
    expect(reset.moveHistory).toEqual([]);
  });

  it('SET_MODE starts a fresh game in that mode', () => {
    const afterMove = gameReducer(createInitialState(), {
      type: 'MOVE_MADE',
      move: { from: 'e2', to: 'e4' },
    });
    const switched = gameReducer(afterMove, {
      type: 'SET_MODE',
      mode: 'vsAI',
    });

    expect(switched.mode).toBe('vsAI');
    expect(switched.fen).toBe(STARTING_FEN);
    expect(switched.turn).toBe('w');
    expect(switched.moveHistory).toEqual([]);
  });
});
