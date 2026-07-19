import type { CSSProperties } from 'react';
import type { BoardPiece } from '../engine';
import { Piece } from './Piece';

type SquareProps = {
  square: string;
  piece: BoardPiece;
  isLight: boolean;
  isSelected: boolean;
  isLegalTarget: boolean;
  isDragging?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export function Square({
  square,
  piece,
  isLight,
  isSelected,
  isLegalTarget,
  isDragging = false,
  disabled = false,
  onClick,
}: SquareProps) {
  const squareStyle: CSSProperties = {
    backgroundColor: isLight ? 'var(--gray-700)' : 'var(--gray-900)',
    ...(isSelected && { boxShadow: 'inset 0 0 0 2px var(--focus-ring)' }),
    ...(piece && !disabled && { cursor: isDragging ? 'grabbing' : 'grab' }),
    ...(disabled && { cursor: 'not-allowed', opacity: 0.8 }),
  };

  const legalTargetStyle: CSSProperties = piece
    ? {
        inset: 'var(--space-1)',
        borderRadius: '9999px',
        boxShadow: 'inset 0 0 0 4px color-mix(in srgb, var(--brand) 70%, transparent)',
      }
    : {
        height: '0.75rem',
        width: '0.75rem',
        borderRadius: '9999px',
        backgroundColor: 'color-mix(in srgb, var(--brand) 60%, transparent)',
      };

  return (
    <button
      type="button"
      className="relative flex aspect-square items-center justify-center"
      style={squareStyle}
      aria-label={square}
      disabled={disabled}
      data-square={square}
      onClick={onClick}
    >
      {piece && (
        <span
          className="flex h-full w-full items-center justify-center"
          style={{ opacity: isDragging ? 0.25 : 1 }}
        >
          <Piece type={piece.type} color={piece.color} squareTone={isLight ? 'light' : 'dark'} />
        </span>
      )}
      {isLegalTarget && (
        <span
          className="pointer-events-none absolute"
          style={legalTargetStyle}
          aria-hidden
        />
      )}
    </button>
  );
}
