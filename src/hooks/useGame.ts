import { useCallback, useReducer } from 'react';
import {
  createInitialState,
  gameReducer,
  type GameAction,
  type GameState,
} from '../gameReducer';
import type { MoveInput, PromotionPiece } from '../types';

export function useGame() {
  const [state, dispatch] = useReducer(
    gameReducer,
    undefined,
    createInitialState,
  );

  const newGame = useCallback(() => {
    dispatch({ type: 'NEW_GAME' });
  }, []);

  const makeMove = useCallback((move: MoveInput) => {
    dispatch({ type: 'MOVE_MADE', move });
  }, []);

  const requestPromotion = useCallback((from: string, to: string) => {
    dispatch({ type: 'PROMOTION_PENDING', from, to });
  }, []);

  const completePromotion = useCallback(
    (promotion: PromotionPiece) => {
      if (!state.pendingPromotion) {
        return;
      }

      dispatch({
        type: 'MOVE_MADE',
        move: {
          from: state.pendingPromotion.from,
          to: state.pendingPromotion.to,
          promotion,
        },
      });
    },
    [state.pendingPromotion],
  );

  const undo = useCallback(() => {
    dispatch({ type: 'UNDO' });
  }, []);

  const canUndo =
    state.pendingPromotion !== null || state.moveHistory.length > 0;

  const isInteractive =
    !state.pendingPromotion && !state.engine.isGameOver();

  return {
    state,
    dispatch,
    newGame,
    makeMove,
    requestPromotion,
    completePromotion,
    undo,
    canUndo,
    isInteractive,
  };
}

export type { GameAction, GameState };
