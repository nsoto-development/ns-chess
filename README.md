# ns-chess

Browser chess built as a portfolio piece — hand-crafted UI on top of proven rule logic, with room to grow into a Stockfish opponent later.

**Status:** In development (product docs and planning complete; app scaffold not started yet)

Planned live URL: [chess.nsoto.dev](https://chess.nsoto.dev) (P2)

## About

A two player full rules-legal game on one screen — hot-seat, client-side, no backend. The interesting part for this repo is the **frontend**: a custom board with click-to-move, legal-move highlighting, and game state — not a drop-in component like `react-chessboard`.

Rule logic lives in a thin [`chess.js`](https://github.com/jhlywa/chess.js) wrapper (`src/engine.ts`). Components talk to a reducer hook, never to `chess.js` directly.

## Planned features

### v1 — local 2-player (P0)

- Custom `Board` / `Square` / `Piece` with Unicode pieces
- Click-to-move and legal-move highlighting
- Pawn promotion modal (Q/R/B/N)
- Move list / PGN, game status (check, checkmate, stalemate, draw)
- Undo and new game
- Vitest coverage for engine and reducer

### Later

| Priority | Feature |
|----------|---------|
| P1 | Vs-AI opponent (Stockfish in a Web Worker) |
| P1 | Drag-and-drop moves |
| P2 | Deploy to `chess.nsoto.dev` |

See [`docs/roadmap.md`](docs/roadmap.md) for the full backlog.

## Tech stack

- **Runtime:** React 18, TypeScript (strict)
- **Build:** Vite
- **Styling:** Tailwind CSS
- **Rules:** chess.js (wrapped, not reimplemented)
- **Tests:** Vitest
- **AI (planned):** Stockfish.js via Web Worker + UCI layer

## Architecture

```
src/
├── engine.ts          # chess.js wrapper — rules only
├── gameReducer.ts     # game state and actions
├── hooks/useGame.ts   # React hook for components
├── components/        # Board, MoveList, GameStatus, PromotionModal, …
└── App.tsx
```

AI moves (when added) will use the same `MOVE_MADE` reducer path as human moves — no duplicate state logic.

Details: [`docs/features/local-2-player.md`](docs/features/local-2-player.md)

## Getting started

> App scaffold (M1) is the next implementation milestone. Commands below apply once that lands.

```bash
git clone https://github.com/nsoto-development/ns-chess.git
cd ns-chess
npm install
npm run dev
```

```bash
npm test        # Vitest
npm run build   # production build
```

## Project docs

| Doc | Purpose |
|-----|---------|
| [`docs/mvp-scope.md`](docs/mvp-scope.md) | v1 launch bar and non-goals |
| [`docs/roadmap.md`](docs/roadmap.md) | Priority tiers and work items |
| [`docs/features/`](docs/features/) | Feature specs |

## License

Not yet specified.
