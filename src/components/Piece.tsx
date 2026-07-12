import type { Color } from '../types';

const WHITE_GLYPHS: Record<string, string> = {
  k: '♔',
  q: '♕',
  r: '♖',
  b: '♗',
  n: '♘',
  p: '♙',
};

const BLACK_GLYPHS: Record<string, string> = {
  k: '♚',
  q: '♛',
  r: '♜',
  b: '♝',
  n: '♞',
  p: '♟',
};

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
};

export function Piece({ type, color }: PieceProps) {
  const glyphs = color === 'w' ? WHITE_GLYPHS : BLACK_GLYPHS;
  const glyph = glyphs[type] ?? '?';
  const name = PIECE_NAMES[type] ?? 'piece';
  const isWhite = color === 'w';

  return (
    <span
      className="pointer-events-none block select-none leading-none"
      style={{
        fontSize: '2.25rem',
        lineHeight: 'var(--leading-tight)',
        color: isWhite ? 'var(--white)' : 'var(--gray-950)',
        textShadow: isWhite
          ? '0 1px 2px rgba(0, 0, 0, 0.85)'
          : '0 0 3px rgba(247, 250, 251, 0.4)',
      }}
      aria-label={`${isWhite ? 'white' : 'black'} ${name}`}
    >
      {glyph}
    </span>
  );
}
