import type { BoardPiece } from '../engine';
import { Piece } from './Piece';

type SquareProps = {
  square: string;
  piece: BoardPiece;
  isLight: boolean;
  isSelected: boolean;
  isLegalTarget: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export function Square({
  square,
  piece,
  isLight,
  isSelected,
  isLegalTarget,
  disabled = false,
  onClick,
}: SquareProps) {
  const baseColor = isLight ? 'bg-stone-300' : 'bg-stone-600';
  const selectedClass = isSelected ? 'ring-2 ring-inset ring-amber-400' : '';
  const disabledClass = disabled ? 'cursor-not-allowed opacity-80' : '';

  return (
    <button
      type="button"
      className={`relative flex aspect-square items-center justify-center ${baseColor} ${selectedClass} ${disabledClass}`}
      aria-label={square}
      disabled={disabled}
      onClick={onClick}
    >
      {piece && <Piece type={piece.type} color={piece.color} />}
      {isLegalTarget && (
        <span
          className={`pointer-events-none absolute ${
            piece
              ? 'inset-1 rounded-full ring-4 ring-amber-400/70 ring-inset'
              : 'h-3 w-3 rounded-full bg-amber-500/60'
          }`}
          aria-hidden
        />
      )}
    </button>
  );
}
