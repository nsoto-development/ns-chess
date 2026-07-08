import type { Color, PromotionPiece } from '../types';
import { Piece } from './Piece';

const PROMOTION_OPTIONS: PromotionPiece[] = ['q', 'r', 'b', 'n'];

const PIECE_LABELS: Record<PromotionPiece, string> = {
  q: 'Queen',
  r: 'Rook',
  b: 'Bishop',
  n: 'Knight',
};

type PromotionModalProps = {
  color: Color;
  onSelect: (piece: PromotionPiece) => void;
};

export function PromotionModal({ color, onSelect }: PromotionModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Choose promotion piece"
    >
      <div className="w-full max-w-sm rounded-lg border border-stone-600 bg-stone-800 p-6 shadow-xl">
        <h2 className="mb-4 text-center text-lg font-semibold text-stone-100">
          Promote pawn
        </h2>
        <div className="grid grid-cols-4 gap-2">
          {PROMOTION_OPTIONS.map((piece) => (
            <button
              key={piece}
              type="button"
              className="flex flex-col items-center gap-1 rounded border border-stone-600 bg-stone-700 px-2 py-3 transition hover:border-amber-400 hover:bg-stone-600"
              aria-label={PIECE_LABELS[piece]}
              onClick={() => onSelect(piece)}
            >
              <Piece type={piece} color={color} />
              <span className="text-xs text-stone-300">{PIECE_LABELS[piece]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
