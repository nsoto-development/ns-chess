import type { GameState } from '../gameReducer';
import { Card } from './ui/Card';

type MoveListProps = {
  state: GameState;
};

function formatMovePairs(history: string[]): string[] {
  const rows: string[] = [];
  for (let i = 0; i < history.length; i += 2) {
    const moveNumber = Math.floor(i / 2) + 1;
    const white = history[i];
    const black = history[i + 1];
    rows.push(black ? `${moveNumber}. ${white} ${black}` : `${moveNumber}. ${white}`);
  }
  return rows;
}

const sectionHeadingStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-xs)',
  fontWeight: 'var(--weight-medium)' as const,
  letterSpacing: 'var(--tracking-wide)',
  textTransform: 'uppercase' as const,
  color: 'var(--text-tertiary)',
};

export function MoveList({ state }: MoveListProps) {
  const rows = formatMovePairs(state.moveHistory);
  const pgn = state.engine.pgn();

  return (
    <section className="flex min-h-0 flex-1 flex-col gap-3">
      <h2 style={sectionHeadingStyle}>Moves</h2>
      <Card padding="var(--space-3)">
        <ol
          style={{
            maxHeight: '12rem',
            overflowY: 'auto',
            fontSize: 'var(--text-sm)',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            margin: 0,
            paddingLeft: '1.25rem',
          }}
        >
          {rows.length === 0 ? (
            <li style={{ listStyle: 'none', marginLeft: '-1.25rem', color: 'var(--text-tertiary)' }}>
              No moves yet
            </li>
          ) : (
            rows.map((row, index) => <li key={index}>{row}</li>)
          )}
        </ol>
      </Card>

      <h2 style={sectionHeadingStyle}>PGN</h2>
      <Card padding="var(--space-3)">
        <pre
          style={{
            maxHeight: '8rem',
            overflow: 'auto',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontFamily: 'var(--font-code)',
            fontSize: 'var(--text-xs)',
            color: 'var(--text-secondary)',
            margin: 0,
          }}
        >
          {pgn || '—'}
        </pre>
      </Card>
    </section>
  );
}
