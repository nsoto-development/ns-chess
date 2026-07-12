import { useCallback, useEffect, useMemo, useState } from 'react';
import type { BoardPiece } from '../engine';
import type { GameState } from '../gameReducer';
import type { MoveInput } from '../types';
import { Square } from './Square';

type BoardProps = {
  state: GameState;
  disabled?: boolean;
  onMove: (move: MoveInput) => void;
  onPromotionRequest: (from: string, to: string) => void;
};

function toAlgebraic(rank: number, file: number): string {
  return `${String.fromCharCode(97 + file)}${8 - rank}`;
}

function pieceAt(board: BoardPiece[][], square: string): BoardPiece {
  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
      if (toAlgebraic(rank, file) === square) {
        return board[rank][file];
      }
    }
  }
  return null;
}

function needsPromotion(piece: BoardPiece, toSquare: string): boolean {
  if (!piece || piece.type !== 'p') {
    return false;
  }

  const rank = toSquare[1];
  return rank === '8' || rank === '1';
}

export function Board({ state, disabled = false, onMove, onPromotionRequest }: BoardProps) {
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const board = state.engine.board();

  const legalTargets = useMemo(() => {
    if (!selectedSquare || disabled) {
      return new Set<string>();
    }

    return new Set(
      state.engine.legalMoves(selectedSquare).map((move) => move.to),
    );
  }, [disabled, selectedSquare, state.engine, state.fen]);

  useEffect(() => {
    setSelectedSquare(null);
  }, [state.fen, state.pendingPromotion]);

  const handleSquareClick = useCallback(
    (square: string, piece: BoardPiece) => {
      if (disabled) {
        return;
      }

      if (selectedSquare === square) {
        setSelectedSquare(null);
        return;
      }

      if (selectedSquare && legalTargets.has(square)) {
        const movingPiece = pieceAt(board, selectedSquare);
        if (needsPromotion(movingPiece, square)) {
          onPromotionRequest(selectedSquare, square);
        } else {
          onMove({ from: selectedSquare, to: square });
        }
        setSelectedSquare(null);
        return;
      }

      if (piece && piece.color === state.turn) {
        setSelectedSquare(square);
        return;
      }

      setSelectedSquare(null);
    },
    [board, disabled, legalTargets, onMove, onPromotionRequest, selectedSquare, state.turn],
  );

  return (
    <div
      className="grid w-full max-w-lg grid-cols-8"
      style={{
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: 'var(--gray-700)',
      }}
    >
      {Array.from({ length: 8 }, (_, displayRank) => 7 - displayRank).flatMap(
        (rank) =>
          Array.from({ length: 8 }, (_, file) => {
            const square = toAlgebraic(rank, file);
            const squarePiece = board[rank][file];
            const isLight = (rank + file) % 2 === 1;

            return (
              <Square
                key={square}
                square={square}
                piece={squarePiece}
                isLight={isLight}
                isSelected={selectedSquare === square}
                isLegalTarget={legalTargets.has(square)}
                disabled={disabled}
                onClick={() => handleSquareClick(square, squarePiece)}
              />
            );
          }),
      )}
    </div>
  );
}
