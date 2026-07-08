import { useCallback, useReducer } from 'react';
import {
  createInitialState,
  gameReducer,
  type GameAction,
  type GameState,
} from '../gameReducer';
import type { MoveInput } from '../types';

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

  return { state, dispatch, newGame, makeMove };
}

export type { GameAction, GameState };
