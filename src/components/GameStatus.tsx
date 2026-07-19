import type { ChessEngine } from '../engine';
import { Badge } from './ui/Badge';

type GameStatusProps = {
  engine: ChessEngine;
  turn: 'w' | 'b';
  /** Minimal M1 busy hint — full thinking chrome is M2. */
  aiBusy?: boolean;
};

function statusMessage(
  engine: ChessEngine,
  turn: 'w' | 'b',
  aiBusy: boolean,
): string {
  if (engine.isCheckmate()) {
    const winner = turn === 'w' ? 'Black' : 'White';
    return `Checkmate — ${winner} wins`;
  }

  if (engine.isStalemate()) {
    return 'Stalemate — Draw';
  }

  if (engine.isDraw()) {
    return 'Draw';
  }

  if (aiBusy) {
    return 'Engine thinking…';
  }

  if (engine.isCheck()) {
    return 'Check';
  }

  return turn === 'w' ? 'White to move' : 'Black to move';
}

function statusTone(
  engine: ChessEngine,
): 'brand' | 'neutral' | 'success' | 'warning' | 'danger' {
  if (engine.isCheckmate()) {
    return 'danger';
  }

  if (engine.isGameOver()) {
    return 'warning';
  }

  if (engine.isCheck()) {
    return 'warning';
  }

  return 'brand';
}

export function GameStatus({ engine, turn, aiBusy = false }: GameStatusProps) {
  const message = statusMessage(engine, turn, aiBusy);
  const tone = aiBusy && !engine.isGameOver() ? 'neutral' : statusTone(engine);
  const showDot = engine.isCheck() || engine.isCheckmate();

  return (
    <div
      role="status"
      aria-live="polite"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <Badge
        tone={tone}
        dot={showDot}
        style={{
          width: '100%',
          justifyContent: 'center',
          padding: '12px 16px',
          fontSize: 'var(--text-sm)',
          textTransform: 'none',
          letterSpacing: 'var(--tracking-normal)',
        }}
      >
        {message}
      </Badge>
    </div>
  );
}
