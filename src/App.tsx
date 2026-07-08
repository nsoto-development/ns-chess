import { useGame } from './hooks/useGame';

// P1 vs-AI: mount Stockfish Web Worker here (see docs/features/vs-ai.md).
function App() {
  const { state } = useGame();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-stone-900 p-8 text-stone-100">
      <h1 className="text-2xl font-semibold tracking-tight">ns-chess</h1>
      <p className="text-sm text-stone-400">
        M1 scaffold — board UI arrives in M2.
      </p>
      <dl className="rounded-lg border border-stone-700 bg-stone-800 px-4 py-3 text-sm">
        <div className="flex gap-2">
          <dt className="text-stone-400">Turn</dt>
          <dd>{state.turn === 'w' ? 'White' : 'Black'}</dd>
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <dt className="text-stone-400">FEN</dt>
          <dd className="break-all font-mono text-xs">{state.fen}</dd>
        </div>
      </dl>
    </main>
  );
}

export default App;
