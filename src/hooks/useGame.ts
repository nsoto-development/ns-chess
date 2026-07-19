import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import {
  createInitialState,
  gameReducer,
  type GameAction,
  type GameState,
} from '../gameReducer';
import {
  createStockfishClient,
  parseUciMove,
  type StockfishClient,
} from '../stockfish';
import type { GameMode, MoveInput, PromotionPiece } from '../types';

export function useGame() {
  const [state, dispatch] = useReducer(
    gameReducer,
    undefined,
    createInitialState,
  );
  const [aiBusy, setAiBusy] = useState(false);
  const stockfishRef = useRef<StockfishClient | null>(null);
  const requestIdRef = useRef(0);
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    return () => {
      requestIdRef.current += 1;
      stockfishRef.current?.terminate();
      stockfishRef.current = null;
    };
  }, []);

  const ensureStockfish = useCallback((): StockfishClient => {
    if (!stockfishRef.current) {
      stockfishRef.current = createStockfishClient();
    }
    return stockfishRef.current;
  }, []);

  const invalidateAiRequests = useCallback(() => {
    requestIdRef.current += 1;
    stockfishRef.current?.stop();
    setAiBusy(false);
  }, []);

  const newGame = useCallback(() => {
    invalidateAiRequests();
    dispatch({ type: 'NEW_GAME' });
  }, [invalidateAiRequests]);

  const setMode = useCallback(
    (mode: GameMode) => {
      invalidateAiRequests();
      dispatch({ type: 'SET_MODE', mode });
    },
    [invalidateAiRequests],
  );

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
    invalidateAiRequests();
    dispatch({ type: 'UNDO' });
  }, [invalidateAiRequests]);

  useEffect(() => {
    if (state.mode !== 'vsAI') {
      return;
    }

    if (
      state.turn !== 'b'
      || state.pendingPromotion
      || state.engine.isGameOver()
    ) {
      return;
    }

    const client = ensureStockfish();
    const requestId = ++requestIdRef.current;
    const fen = state.fen;
    let cancelled = false;

    setAiBusy(true);

    void (async () => {
      try {
        const uci = await client.getBestMove(fen);
        if (cancelled || requestId !== requestIdRef.current) {
          return;
        }

        const current = stateRef.current;
        if (
          current.mode !== 'vsAI'
          || current.fen !== fen
          || current.turn !== 'b'
          || current.pendingPromotion
          || current.engine.isGameOver()
        ) {
          return;
        }

        const move = parseUciMove(uci);
        if (!move) {
          return;
        }

        dispatch({ type: 'MOVE_MADE', move });
      } catch {
        // Leave AI turn unlocked only after busy clears; user can undo / new game.
      } finally {
        if (requestId === requestIdRef.current) {
          setAiBusy(false);
        }
      }
    })();

    return () => {
      cancelled = true;
      client.stop();
    };
  }, [
    ensureStockfish,
    state.engine,
    state.fen,
    state.mode,
    state.pendingPromotion,
    state.turn,
  ]);

  const canUndo =
    state.pendingPromotion !== null || state.moveHistory.length > 0;

  const isAiTurn = state.mode === 'vsAI' && state.turn === 'b';
  const isInteractive =
    !state.pendingPromotion
    && !state.engine.isGameOver()
    && !isAiTurn
    && !aiBusy;

  return {
    state,
    dispatch,
    newGame,
    setMode,
    makeMove,
    requestPromotion,
    completePromotion,
    undo,
    canUndo,
    isInteractive,
    aiBusy,
  };
}

export type { GameAction, GameState };
