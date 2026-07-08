export type GameMode = 'local' | 'vsAI';

export type Color = 'w' | 'b';

export type Square = string;

export type PromotionPiece = 'q' | 'r' | 'b' | 'n';

export type MoveInput = {
  from: Square;
  to: Square;
  promotion?: PromotionPiece;
};
