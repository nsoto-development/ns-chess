import { Board } from './components/Board';
import { useGame } from './hooks/useGame';

// P1 vs-AI: mount Stockfish Web Worker here (see docs/features/vs-ai.md).
function App() {
  const { state, makeMove } = useGame();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-stone-900 p-8 text-stone-100">
      <h1 className="text-2xl font-semibold tracking-tight">ns-chess</h1>
      <p className="text-sm text-stone-400">
        {state.turn === 'w' ? "White" : "Black"} to move
      </p>
      <Board state={state} onMove={makeMove} />
    </main>
  );
}

export default App;
