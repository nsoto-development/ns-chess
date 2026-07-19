import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import type { BoardPiece } from '../engine';
import type { GameState } from '../gameReducer';
import type { MoveInput } from '../types';
import { Piece } from './Piece';
import { Square } from './Square';

type BoardProps = {
  state: GameState;
  disabled?: boolean;
  onMove: (move: MoveInput) => void;
  onPromotionRequest: (from: string, to: string) => void;
};

type DragState = {
  pointerId: number;
  from: string;
  piece: NonNullable<BoardPiece>;
  startX: number;
  startY: number;
  x: number;
  y: number;
  size: number;
  hasMoved: boolean;
};

const DRAG_THRESHOLD_PX = 4;

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

function squareTone(square: string): 'light' | 'dark' {
  const file = square.charCodeAt(0) - 97;
  const rank = 8 - Number(square[1]);
  return (rank + file) % 2 === 1 ? 'light' : 'dark';
}

export function Board({ state, disabled = false, onMove, onPromotionRequest }: BoardProps) {
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [drag, setDrag] = useState<DragState | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const suppressClicksUntilRef = useRef(0);
  const board = state.engine.board();

  const legalTargets = useMemo(() => {
    if (!selectedSquare || disabled) {
      return new Set<string>();
    }

    return new Set(
      state.engine.legalMoves(selectedSquare).map((move) => move.to),
    );
  }, [disabled, selectedSquare, state.engine]);

  useEffect(() => {
    setSelectedSquare(null);
    setDrag(null);
    dragRef.current = null;
  }, [disabled, state.fen, state.pendingPromotion]);

  const makeBoardMove = useCallback(
    (from: string, to: string) => {
      const movingPiece = pieceAt(board, from);
      if (needsPromotion(movingPiece, to)) {
        onPromotionRequest(from, to);
      } else {
        onMove({ from, to });
      }
    },
    [board, onMove, onPromotionRequest],
  );

  const handleSquareClick = useCallback(
    (square: string, piece: BoardPiece) => {
      if (disabled || Date.now() < suppressClicksUntilRef.current) {
        return;
      }

      if (selectedSquare === square) {
        setSelectedSquare(null);
        return;
      }

      if (selectedSquare && legalTargets.has(square)) {
        makeBoardMove(selectedSquare, square);
        setSelectedSquare(null);
        return;
      }

      if (piece && piece.color === state.turn) {
        setSelectedSquare(square);
        return;
      }

      setSelectedSquare(null);
    },
    [disabled, legalTargets, makeBoardMove, selectedSquare, state.turn],
  );

  const finishDrag = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>, cancelled = false) => {
      const activeDrag = dragRef.current;
      if (!activeDrag || activeDrag.pointerId !== event.pointerId) {
        return;
      }

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      dragRef.current = null;
      setDrag(null);

      if (!activeDrag.hasMoved) {
        // Selection already set on pointerdown; suppress the follow-up click so it
        // does not immediately toggle the piece off.
        suppressClicksUntilRef.current = Date.now() + 250;
        return;
      }

      suppressClicksUntilRef.current = Date.now() + 250;
      setSelectedSquare(null);

      if (cancelled) {
        return;
      }

      const target = document.elementFromPoint(event.clientX, event.clientY);
      const targetSquare = target?.closest<HTMLElement>('[data-square]')?.dataset.square;
      if (
        !target
        || !targetSquare
        || !boardRef.current?.contains(target)
        || !state.engine.legalMoves(activeDrag.from).some((move) => move.to === targetSquare)
      ) {
        return;
      }

      makeBoardMove(activeDrag.from, targetSquare);
    },
    [makeBoardMove, state.engine],
  );

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (disabled || !event.isPrimary || event.button !== 0) {
        return;
      }

      const target = (event.target as Element).closest<HTMLElement>('[data-square]');
      const from = target?.dataset.square;
      const piece = from ? pieceAt(board, from) : null;
      if (!target || !from || !piece || piece.color !== state.turn) {
        return;
      }

      // Re-pressing the selected piece clears selection (click-to-move affordance).
      if (selectedSquare === from) {
        setSelectedSquare(null);
        return;
      }

      // Show legal targets immediately — same as classic click-to-move.
      setSelectedSquare(from);

      const bounds = target.getBoundingClientRect();
      const nextDrag: DragState = {
        pointerId: event.pointerId,
        from,
        piece,
        startX: event.clientX,
        startY: event.clientY,
        x: event.clientX,
        y: event.clientY,
        size: bounds.width,
        hasMoved: false,
      };

      event.currentTarget.setPointerCapture(event.pointerId);
      dragRef.current = nextDrag;
      setDrag(nextDrag);
    },
    [board, disabled, selectedSquare, state.turn],
  );

  const handlePointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const activeDrag = dragRef.current;
    if (!activeDrag || activeDrag.pointerId !== event.pointerId) {
      return;
    }

    const distance = Math.hypot(
      event.clientX - activeDrag.startX,
      event.clientY - activeDrag.startY,
    );
    const nextDrag = {
      ...activeDrag,
      x: event.clientX,
      y: event.clientY,
      hasMoved: activeDrag.hasMoved || distance >= DRAG_THRESHOLD_PX,
    };

    dragRef.current = nextDrag;
    setDrag(nextDrag);
  }, []);

  return (
    <>
      <div
        ref={boardRef}
        className="grid w-full max-w-lg grid-cols-8"
        style={{
          borderWidth: 4,
          borderStyle: 'solid',
          borderColor: 'var(--gray-700)',
          touchAction: 'none',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={(event) => finishDrag(event)}
        onPointerCancel={(event) => finishDrag(event, true)}
      >
        {Array.from({ length: 8 }, (_, rank) => rank).flatMap(
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
                  isDragging={drag?.hasMoved === true && drag.from === square}
                  disabled={disabled}
                  onClick={() => handleSquareClick(square, squarePiece)}
                />
              );
            }),
        )}
      </div>

      {drag?.hasMoved && (
        <div
          className="pointer-events-none fixed z-50 flex items-center justify-center"
          style={{
            left: drag.x,
            top: drag.y,
            width: drag.size,
            height: drag.size,
            transform: 'translate(-50%, -50%)',
          }}
          aria-hidden
        >
          <Piece
            type={drag.piece.type}
            color={drag.piece.color}
            squareTone={squareTone(drag.from)}
          />
        </div>
      )}
    </>
  );
}
