# ns-chess

Browser chess built as a portfolio piece — hand-crafted UI on top of proven rule logic, with room to grow into a Stockfish opponent later.

**Status:** M3 complete — local 2-player MVP ships move list / PGN, game status, undo, new game, and promotion modal (Q/R/B/N).

Planned live URL: [chess.nsoto.dev](https://chess.nsoto.dev) (P2)

## About

A two player full rules-legal game on one screen — hot-seat, client-side, no backend. The interesting part for this repo is the **frontend**: a custom board with click-to-move, legal-move highlighting, and game state — not a drop-in component like `react-chessboard`.

Rule logic lives in a thin [`chess.js`](https://github.com/jhlywa/chess.js) wrapper (`src/engine.ts`). Components talk to a reducer hook, never to `chess.js` directly.

## Features

### Shipped — M1

- Vite + React + TypeScript (strict) + Tailwind + Vitest scaffold
- `src/engine.ts` — chess.js wrapper with colocated rule tests
- `src/gameReducer.ts` + `src/hooks/useGame.ts` — minimal state (`NEW_GAME`, `MOVE_MADE`)
- `npm test` and `npm run build` pass

### Shipped — M2

- `src/components/Board.tsx`, `Square.tsx`, `Piece.tsx` — click-to-move, legal-move highlighting, Unicode pieces
- Wired into `App.tsx`; white on bottom
- `MOVE_MADE` uses a fresh engine from FEN (pure reducer; React Strict Mode safe)

### Shipped — M3

- `MoveList` — SAN move list and PGN display
- `GameStatus` — check, checkmate, stalemate, draw banner
- `PromotionModal` — Q/R/B/N picker (replaces M2 auto-queen)
- Undo and new game (`UNDO`, `PROMOTION_PENDING` reducer actions)
- Sidebar layout in `App.tsx`; board disabled when game over or promotion pending
- Reducer edge-case tests (undo, promotion, checkmate, stalemate, castling, en passant)

### Later

| Priority | Feature |
|----------|---------|
| P1 | Vs-AI opponent (Stockfish in a Web Worker) |
| P1 | Drag-and-drop moves |
| P2 | Deploy to `chess.nsoto.dev` |

See [`docs/roadmap.md`](docs/roadmap.md) for the full backlog.

## Tech stack

- **Runtime:** React 19, TypeScript (strict)
- **Build:** Vite 7
- **Styling:** Tailwind CSS v4
- **Rules:** chess.js 1.4 (wrapped in `src/engine.ts`, not reimplemented)
- **Tests:** Vitest
- **Tooling:** Node 22 (pinned via [Volta](https://volta.sh) in `package.json`)
- **AI (planned):** Stockfish.js via Web Worker + UCI layer

## Architecture

```
src/
├── engine.ts          # chess.js wrapper — rules only
├── gameReducer.ts     # game state and actions
├── hooks/useGame.ts   # React hook for components
├── types.ts           # GameMode, MoveInput, …
├── components/        # Board, Square, Piece, MoveList, GameStatus, PromotionModal
└── App.tsx
```

AI moves (when added) will use the same `MOVE_MADE` reducer path as human moves — no duplicate state logic.

Details: [`docs/features/local-2-player.md`](docs/features/local-2-player.md)

## Getting started

Requires **Node 22.23.1** (see `"volta"` in [`package.json`](package.json)). With [Volta](https://volta.sh) installed, the version is selected automatically when you enter this directory; otherwise use Node **≥ 22.12**.

```bash
git clone https://github.com/nsoto-development/ns-chess.git
cd ns-chess
npm install
npm run dev
```

```bash
npm test        # Vitest — engine + reducer tests
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
