import { createEngine, type ChessEngine } from './engine';
import type { Color, GameMode, MoveInput } from './types';

export const STARTING_FEN =
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

export type GameState = {
  mode: GameMode;
  fen: string;
  turn: Color;
  moveHistory: string[];
  engine: ChessEngine;
};

export type GameAction =
  | { type: 'NEW_GAME' }
  | { type: 'MOVE_MADE'; move: MoveInput };

function syncFromEngine(engine: ChessEngine, mode: GameMode = 'local'): GameState {
  return {
    mode,
    fen: engine.fen(),
    turn: engine.turn(),
    moveHistory: engine.history(),
    engine,
  };
}

export function createInitialState(): GameState {
  return syncFromEngine(createEngine());
}

// M3 will add UNDO and pendingPromotion actions.
export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'NEW_GAME':
      return syncFromEngine(createEngine());
    case 'MOVE_MADE': {
      const engine = createEngine(state.fen);
      const result = engine.move(action.move);
      if (!result) {
        return state;
      }

      return syncFromEngine(engine, state.mode);
    }
  }
}
