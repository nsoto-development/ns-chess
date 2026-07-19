import { AppHeader } from './components/AppHeader';
import { Board } from './components/Board';
import { GameStatus } from './components/GameStatus';
import { MoveList } from './components/MoveList';
import { PromotionModal } from './components/PromotionModal';
import { Button } from './components/ui/Button';
import { useGame } from './hooks/useGame';
import type { GameMode } from './types';

function App() {
  const {
    state,
    makeMove,
    requestPromotion,
    completePromotion,
    newGame,
    setMode,
    undo,
    canUndo,
    isInteractive,
    aiBusy,
  } = useGame();

  const modeLabel = (mode: GameMode) =>
    mode === 'vsAI' ? 'Vs AI' : 'Local';

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-6 p-8"
      style={{
        backgroundColor: 'var(--bg-canvas)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <AppHeader />

      <div className="flex w-full max-w-4xl flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
        <section
          className="flex w-full max-w-lg flex-col items-center gap-2"
          aria-describedby="board-move-hint"
        >
          <Board
            state={state}
            disabled={!isInteractive}
            onMove={makeMove}
            onPromotionRequest={requestPromotion}
          />
          <p
            id="board-move-hint"
            className="m-0 max-w-lg text-center text-[length:var(--text-xs)] leading-snug text-[var(--text-tertiary)]"
          >
            {state.mode === 'vsAI'
              ? 'You play White. Drag or click to move; the engine replies as Black.'
              : 'Drag a piece to a highlighted square, or click a piece and then its destination.'}
          </p>
        </section>

        <aside className="flex w-full min-w-0 max-w-md flex-col gap-4 lg:w-80">
          <div
            className="flex gap-2"
            role="group"
            aria-label="Game mode"
          >
            {(['local', 'vsAI'] as const).map((mode) => (
              <Button
                key={mode}
                variant={state.mode === mode ? 'primary' : 'secondary'}
                size="md"
                onClick={() => setMode(mode)}
                aria-pressed={state.mode === mode}
                style={{ flex: 1 }}
              >
                {modeLabel(mode)}
              </Button>
            ))}
          </div>

          <GameStatus
            engine={state.engine}
            turn={state.turn}
            aiBusy={state.mode === 'vsAI' && aiBusy}
          />

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
