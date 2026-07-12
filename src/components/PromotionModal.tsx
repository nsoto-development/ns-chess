import type { Color, PromotionPiece } from '../types';
import { Piece } from './Piece';
import { Button } from './ui/Button';
import { Dialog } from './ui/Dialog';

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
    <Dialog open title="Promote pawn" onClose={() => {}}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: 'var(--space-2)',
        }}
      >
        {PROMOTION_OPTIONS.map((piece) => (
          <Button
            key={piece}
            variant="secondary"
            size="sm"
            aria-label={PIECE_LABELS[piece]}
            onClick={() => onSelect(piece)}
            style={{
              flexDirection: 'column',
              height: 'auto',
              padding: 'var(--space-3) var(--space-2)',
            }}
          >
            <Piece type={piece} color={color} />
            <span
              style={{
                fontSize: 'var(--text-2xs)',
                color: 'var(--text-tertiary)',
                marginTop: 'var(--space-1)',
              }}
            >
              {PIECE_LABELS[piece]}
            </span>
          </Button>
        ))}
      </div>
    </Dialog>
  );
}
