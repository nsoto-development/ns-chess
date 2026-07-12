import { pieceSvgUrl } from '../assets/pieces';
import type { Color } from '../types';

/** Muted edge accent for black pieces — softer than original #ececec highlights. */
const PIECE_ACCENT = '#9aa8af';

const PIECE_NAMES: Record<string, string> = {
  k: 'king',
  q: 'queen',
  r: 'rook',
  b: 'bishop',
  n: 'knight',
  p: 'pawn',
};

type PieceProps = {
  type: string;
  color: Color;
  /** Board square tone — improves black-piece contrast on dark squares. */
  squareTone?: 'light' | 'dark';
};

function pieceImageFilter(color: Color, squareTone?: 'light' | 'dark'): string {
  if (color === 'w') {
    return 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.65))';
  }

  const edge = `drop-shadow(0 0 0.45px ${PIECE_ACCENT})`;

  if (squareTone === 'dark') {
    return `brightness(1.12) contrast(1.04) ${edge}`;
  }

  return edge;
}

export function Piece({ type, color, squareTone }: PieceProps) {
  const src = pieceSvgUrl(color, type);
  const name = PIECE_NAMES[type] ?? 'piece';
  const isWhite = color === 'w';
  const label = `${isWhite ? 'white' : 'black'} ${name}`;

  if (!src) {
    return (
      <span
        className="pointer-events-none block select-none text-center leading-none"
        style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}
        aria-label={label}
      >
        ?
      </span>
    );
  }

  return (
    <span className="pointer-events-none flex h-[85%] w-[85%] select-none items-center justify-center" role="img" aria-label={label}>
      <img
        src={src}
        alt=""
        className="h-full w-full object-contain"
        style={{ filter: pieceImageFilter(color, squareTone) }}
        draggable={false}
      />
    </span>
  );
}
