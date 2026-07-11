import { Board } from './components/Board';
import { GameStatus } from './components/GameStatus';
import { MoveList } from './components/MoveList';
import { PromotionModal } from './components/PromotionModal';
import { useGame } from './hooks/useGame';

// P1 vs-AI: mount Stockfish Web Worker here (see docs/features/vs-ai.md).
function App() {
  const {
    state,
    makeMove,
    requestPromotion,
    completePromotion,
    newGame,
    undo,
    canUndo,
    isInteractive,
  } = useGame();

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-6 p-8"
      style={{
        backgroundColor: 'var(--bg-canvas)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'var(--text-2xl)',
          fontWeight: 'var(--weight-semibold)',
          letterSpacing: 'var(--tracking-tight)',
          color: 'var(--text-primary)',
        }}
      >
        ns-chess
      </h1>

      <div className="flex w-full max-w-4xl flex-col items-start gap-8 lg:flex-row lg:items-start lg:justify-center">
        <Board
          state={state}
          disabled={!isInteractive}
          onMove={makeMove}
          onPromotionRequest={requestPromotion}
        />

        <aside className="flex w-full min-w-0 max-w-md flex-col gap-4 lg:w-80">
          <GameStatus engine={state.engine} turn={state.turn} />

          <div className="flex gap-2">
            <button
              type="button"
              className="flex-1 rounded border border-stone-600 bg-stone-800 px-4 py-2 text-sm font-medium transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!canUndo}
              onClick={undo}
            >
              Undo
            </button>
            <button
              type="button"
              className="flex-1 rounded border border-stone-600 bg-stone-800 px-4 py-2 text-sm font-medium transition hover:bg-stone-700"
              onClick={newGame}
            >
              New game
            </button>
          </div>

          <MoveList state={state} />
        </aside>
      </div>

      {state.pendingPromotion && (
        <PromotionModal color={state.turn} onSelect={completePromotion} />
      )}
    </main>
  );
}

export default App;
