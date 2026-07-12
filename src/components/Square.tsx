import type { CSSProperties } from 'react';
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
  const squareStyle: CSSProperties = {
    backgroundColor: isLight ? 'var(--gray-700)' : 'var(--gray-900)',
    ...(isSelected && { boxShadow: 'inset 0 0 0 2px var(--focus-ring)' }),
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
      onClick={onClick}
    >
      {piece && <Piece type={piece.type} color={piece.color} />}
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
