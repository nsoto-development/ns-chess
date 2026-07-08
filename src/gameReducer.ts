import { createEngine, type ChessEngine } from './engine';
import type { Color, GameMode, MoveInput } from './types';

export const STARTING_FEN =
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

export type PendingPromotion = {
  from: string;
  to: string;
};

export type GameState = {
  mode: GameMode;
  fen: string;
  turn: Color;
  moveHistory: string[];
  pendingPromotion: PendingPromotion | null;
  engine: ChessEngine;
};

export type GameAction =
  | { type: 'NEW_GAME' }
  | { type: 'MOVE_MADE'; move: MoveInput }
  | { type: 'PROMOTION_PENDING'; from: string; to: string }
  | { type: 'UNDO' };

function syncFromEngine(
  engine: ChessEngine,
  mode: GameMode = 'local',
  pendingPromotion: PendingPromotion | null = null,
): GameState {
  return {
    mode,
    fen: engine.fen(),
    turn: engine.turn(),
    moveHistory: engine.history(),
    pendingPromotion,
    engine,
  };
}

export function createInitialState(): GameState {
  return syncFromEngine(createEngine());
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'NEW_GAME':
      return syncFromEngine(createEngine());

    case 'PROMOTION_PENDING': {
      const engine = createEngine(state.fen);
      const legal = engine.legalMoves(action.from).some((m) => m.to === action.to);
      if (!legal) {
        return state;
      }

      return { ...state, pendingPromotion: { from: action.from, to: action.to } };
    }

    case 'MOVE_MADE': {
      const engine = createEngine(state.fen);
      const result = engine.move(action.move);
      if (!result) {
        return state;
      }

      return syncFromEngine(engine, state.mode);
    }

    case 'UNDO': {
      if (state.pendingPromotion) {
        return { ...state, pendingPromotion: null };
      }

      if (state.moveHistory.length === 0) {
        return state;
      }

      const pgn = state.engine.pgn();
      const engine = createEngine();
      if (!pgn || !engine.loadPgn(pgn)) {
        return state;
      }

      const undone = engine.undo();
      if (!undone) {
        return state;
      }

      return syncFromEngine(engine, state.mode);
    }
  }
}
