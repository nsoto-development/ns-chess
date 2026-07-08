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

  return (
    <span
      className="pointer-events-none block select-none text-4xl leading-none"
      aria-label={`${color === 'w' ? 'white' : 'black'} ${name}`}
    >
      {glyph}
    </span>
  );
}
