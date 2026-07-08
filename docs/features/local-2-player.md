# Feature: Local 2-player chess

## Purpose

Local hot-seat chess for a portfolio demo: two players share one screen and play a full rules-legal game in the browser. No server, no accounts — runs entirely client-side via `npm run dev`.

**Portfolio rationale:** `chess.js` handles rules (a solved problem, not worth reimplementing), but the board — rendering, interaction, highlighting — is hand-built rather than pulled from a library like react-chessboard. That gives the project real, demonstrable frontend engineering.

## Roadmap

Tracks **[feature] work items P0 #2 and P0 #3** on [`docs/roadmap.md`](../roadmap.md). Work item #1 (scaffold) is a `[chore]` prerequisite for M1. This file is the **SSOT** for the feature once shipped.

## v1 scope (agreed)

- Vite + React + TypeScript (strict) + Tailwind
- `src/engine.ts` — thin typed wrapper over `chess.js` (fen, legal moves, move, undo, game-over, promotion)
- `src/gameReducer.ts` + `src/hooks/useGame.ts` — components never touch `chess.js` directly
- Custom `Board` / `Square` / `Piece` — click-to-move, white on bottom, **Unicode pieces v1**
- Legal-move highlighting when a piece is selected
- `MoveList` — move list and PGN display
- `GameStatus` — check, checkmate, stalemate, draw (all draw types `chess.js` reports)
- `PromotionModal` — Q/R/B/N picker when a pawn promotes
- Undo move and new game
- Colocated Vitest tests for `engine.ts` and `gameReducer.ts`

## Non-goals (v1)

- Vs-AI / Stockfish (P1 — see [`vs-ai.md`](vs-ai.md))
- Drag-and-drop (P1 polish — click-to-move is the v1 interaction model)
- Deploy, online play, clocks, puzzles, FEN import UI, persistence

## Future hooks

- **`GameMode` type stub:** `'local' | 'vsAI'` in shared types (vs-AI milestone uses it later)
- **Move-source abstraction:** `Board` accepts moves from human input or engine without rework — vs-AI drives the same path
- **Engine-agnostic reducer actions:** dispatch `MOVE_MADE`, not `HUMAN_MOVED`, so AI-originated moves use the same action
- **Worker mount point** in `App.tsx` reserved for Stockfish (comment only until P1 vs-AI)

## Code paths

Flat `src/` layout — no nested `chess/` or `state/` folders at this scope.

| Area | Location |
|------|----------|
| Engine | `src/engine.ts` |
| State | `src/gameReducer.ts`, `src/hooks/useGame.ts` |
| Board UI | `src/components/Board.tsx`, `Square.tsx`, `Piece.tsx` |
| Sidebar UI | `src/components/MoveList.tsx`, `GameStatus.tsx`, `PromotionModal.tsx` |
| App shell | `src/App.tsx` |

## Milestones

| # | Milestone | Status | Deliverables |
|---|-----------|--------|--------------|
| M1 | Scaffold + engine + reducer | Planned | P0 #1 + #2: Vite/React/TS/Tailwind/Vitest; `engine.ts` + tests; `gameReducer` skeleton + `useGame`; `npm test` / `npm run build` |
| M2 | Board click-to-move | Planned | P0 #3 partial: `Board`, `Square`, `Piece`; selection + legal highlights; Unicode pieces v1 |
| M3 | Complete MVP | Planned | P0 #3 complete: `MoveList`, `GameStatus`, undo, new game, `PromotionModal` (Q/R/B/N); edge-case tests |

**Quick gate:** each implementation thread names **one milestone** (e.g. “M1 only”), not the whole P-tier.

## Tests / verify

- `src/engine.test.ts` — rules, promotion, castling, en passant, game-over
- `src/gameReducer.test.ts` — actions, undo, promotion flow
- `npm test`, `npm run build`
