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
  | { type: 'NEW_GAME'; mode?: GameMode }
  | { type: 'SET_MODE'; mode: GameMode }
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

function engineFromHistory(history: string[]): ChessEngine {
  const engine = createEngine();

  for (const san of history) {
    if (!engine.moveSan(san)) {
      throw new Error(`Invalid SAN in history: ${san}`);
    }
  }

  return engine;
}

function engineForMove(state: GameState): ChessEngine {
  return state.moveHistory.length === 0
    ? createEngine(state.fen)
    : engineFromHistory(state.moveHistory);
}

export function createInitialState(): GameState {
  return syncFromEngine(createEngine());
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'NEW_GAME':
      return syncFromEngine(createEngine(), action.mode ?? state.mode);

    case 'SET_MODE':
      return syncFromEngine(createEngine(), action.mode);

    case 'PROMOTION_PENDING': {
      const engine = createEngine(state.fen);
      const legal = engine.legalMoves(action.from).some((m) => m.to === action.to);
      if (!legal) {
        return state;
      }

      return { ...state, pendingPromotion: { from: action.from, to: action.to } };
    }

    case 'MOVE_MADE': {
      const engine = engineForMove(state);
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

      // In vs-AI the human is White; undo back to their turn so the AI does not
      // immediately replay. Drop the AI reply + the human move when the last ply
      // was the AI's (even history length), otherwise just the human's move.
      const plies =
        state.mode === 'vsAI' && state.moveHistory.length % 2 === 0 ? 2 : 1;
      const engine = engineFromHistory(state.moveHistory.slice(0, -plies));
      return syncFromEngine(engine, state.mode);
    }
  }
}
