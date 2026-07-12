import { pieceSvgUrl } from '../assets/pieces';
import type { Color } from '../types';

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
      <img src={src} alt="" className="h-full w-full object-contain" draggable={false} />
    </span>
  );
}
