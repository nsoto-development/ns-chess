import { Board } from './components/Board';
import { GameStatus } from './components/GameStatus';
import { MoveList } from './components/MoveList';
import { PromotionModal } from './components/PromotionModal';
import { Button } from './components/ui/Button';
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
            <Button
              variant="secondary"
              size="md"
              disabled={!canUndo}
              onClick={undo}
              style={{ flex: 1 }}
            >
              Undo
            </Button>
            <Button
              variant="ghost"
              size="md"
              onClick={newGame}
              style={{ flex: 1 }}
            >
              New game
            </Button>
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
