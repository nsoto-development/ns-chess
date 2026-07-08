import type { GameState } from '../gameReducer';

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

export function MoveList({ state }: MoveListProps) {
  const rows = formatMovePairs(state.moveHistory);
  const pgn = state.engine.pgn();

  return (
    <section className="flex min-h-0 flex-1 flex-col gap-3">
      <h2 className="text-sm font-medium uppercase tracking-wide text-stone-400">
        Moves
      </h2>
      <ol className="max-h-48 overflow-y-auto rounded border border-stone-700 bg-stone-800/50 p-3 text-sm leading-relaxed">
        {rows.length === 0 ? (
          <li className="text-stone-500">No moves yet</li>
        ) : (
          rows.map((row, index) => (
            <li key={index}>{row}</li>
          ))
        )}
      </ol>
      <h2 className="text-sm font-medium uppercase tracking-wide text-stone-400">
        PGN
      </h2>
      <pre className="max-h-32 overflow-auto whitespace-pre-wrap break-words rounded border border-stone-700 bg-stone-800/50 p-3 font-mono text-xs text-stone-300">
        {pgn || '—'}
      </pre>
    </section>
  );
}
