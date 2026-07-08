import { describe, expect, it } from 'vitest';
import {
  createInitialState,
  gameReducer,
  STARTING_FEN,
} from './gameReducer';

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
});
