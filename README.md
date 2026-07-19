# ns-chess

Browser chess built as a portfolio piece — hand-crafted UI on top of proven rule logic, with room to grow into a Stockfish opponent later.

**Status:** Local 2-player MVP complete; drag-and-drop and vs-AI M1 (playable Stockfish) shipped. Next: vs-AI difficulty / thinking (M2).

Planned live URL: [chess.nsoto.dev](https://chess.nsoto.dev) (P2)

## About

A two player full rules-legal game on one screen — hot-seat, client-side, no backend. The interesting part for this repo is the **frontend**: a custom board with click-to-move and drag-and-drop, legal-move highlighting, and game state — not a drop-in component like `react-chessboard`.

Rule logic lives in a thin [`chess.js`](https://github.com/jhlywa/chess.js) wrapper (`src/engine.ts`). Components talk to a reducer hook, never to `chess.js` directly.

## Features

### Shipped — M1

- Vite + React + TypeScript (strict) + Tailwind + Vitest scaffold
- `src/engine.ts` — chess.js wrapper with colocated rule tests
- `src/gameReducer.ts` + `src/hooks/useGame.ts` — minimal state (`NEW_GAME`, `MOVE_MADE`)
- `npm test` and `npm run build` pass

### Shipped — M2

- `src/components/Board.tsx`, `Square.tsx`, `Piece.tsx` — click-to-move, legal-move highlighting, Cburnett SVG pieces
- Wired into `App.tsx`; white on bottom
- `MOVE_MADE` uses a fresh engine from FEN (pure reducer; React Strict Mode safe)

### Shipped — M3

- `MoveList` — SAN move list and PGN display
- `GameStatus` — check, checkmate, stalemate, draw banner
- `PromotionModal` — Q/R/B/N picker (replaces M2 auto-queen)
- Undo and new game (`UNDO`, `PROMOTION_PENDING` reducer actions)
- Sidebar layout in `App.tsx`; board disabled when game over or promotion pending
- Reducer edge-case tests (undo, promotion, checkmate, stalemate, castling, en passant)

### Shipped — M4

- Cburnett SVG chess pieces (`src/assets/pieces/`); `Piece.tsx` image render at 85% square
- CC BY-SA attribution in `src/assets/pieces/ATTRIBUTION.md`

### Shipped — P1 #3 drag-and-drop

- Pointer Events drag (mouse + touch) with floating piece preview
- Legal-drop and promotion routing reuse the click-to-move move path
- Click-to-move remains the accessible fallback
- Spec: [`docs/features/drag-and-drop.md`](docs/features/drag-and-drop.md)

### Shipped — P1 #2 vs-AI M1

- Stockfish 18 lite (single-threaded WASM) in a Web Worker + UCI wrapper (`src/stockfish.ts`)
- Local / Vs AI mode toggle; human plays White; AI replies via `MOVE_MADE`
- Spec: [`docs/features/vs-ai.md`](docs/features/vs-ai.md)

### Later

| Priority | Feature |
|----------|---------|
| P1 | Vs-AI M2 — difficulty presets + thinking polish |
| P2 | Deploy to `chess.nsoto.dev` |

See [`docs/roadmap.md`](docs/roadmap.md) for the full backlog.

## Tech stack

- **Runtime:** React 19, TypeScript (strict)
- **Build:** Vite 7
- **Styling:** Tailwind CSS v4
- **Rules:** chess.js 1.4 (wrapped in `src/engine.ts`, not reimplemented)
- **Engine (vs-AI):** Stockfish.js WASM via Web Worker (`public/engine/`)
- **Tests:** Vitest
- **Tooling:** Node 22 (pinned via [Volta](https://volta.sh) in `package.json`)

## Architecture

```
src/
├── engine.ts          # chess.js wrapper — rules only
├── stockfish.ts       # Stockfish Web Worker + UCI client
├── gameReducer.ts     # game state and actions
├── hooks/useGame.ts   # React hook for components
├── types.ts           # GameMode, MoveInput, …
├── components/        # Board, Square, Piece, MoveList, GameStatus, PromotionModal
└── App.tsx
```

AI moves use the same `MOVE_MADE` reducer path as human moves — no duplicate state logic.

Details: [`docs/features/local-2-player.md`](docs/features/local-2-player.md), [`docs/features/vs-ai.md`](docs/features/vs-ai.md)

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
| [Releases](https://github.com/nsoto-development/ns-chess/releases) | Versioned tags (e.g. [v0.1.0](https://github.com/nsoto-development/ns-chess/releases/tag/v0.1.0)) |

## Releases

Ship work through a PR into `main` (branch prefix from work-item kind — see [`docs/process/cursor-workflow.md`](docs/process/cursor-workflow.md) §2.2). For a tagged GitHub release:

1. Open a PR that bumps `"version"` in [`package.json`](package.json) (and README status/links if they should match). Prefer a `[chore]` branch such as `chore/release-vX.Y.Z`.
2. Merge that PR to `main`.
3. Create the GitHub release / tag (`vX.Y.Z`) from the merge commit on `main` — release notes should cite the product PRs that make up the ship.

Do **not** push version bumps or tags straight to `main` outside that PR path.

## Credits

Chess piece SVGs: **Cburnett** set by Colin M. L. Burnett ([CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)). See [`src/assets/pieces/ATTRIBUTION.md`](src/assets/pieces/ATTRIBUTION.md).

Stockfish.js WASM engine: Nathan Rugg / Chess.com ([GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.html)). Bundled under [`public/engine/`](public/engine/); see [`public/engine/Copying.txt`](public/engine/Copying.txt).

## License

Not yet specified.
