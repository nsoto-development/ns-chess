# Feature: Local 2-player chess

## Purpose

Local hot-seat chess for a portfolio demo: two players share one screen and play a full rules-legal game in the browser. No server, no accounts — runs entirely client-side via `npm run dev`.

**Portfolio rationale:** `chess.js` handles rules (a solved problem, not worth reimplementing), but the board — rendering, interaction, highlighting — is hand-built rather than pulled from a library like react-chessboard. That gives the project real, demonstrable frontend engineering.

## Roadmap

Tracks **[feature] work items P0 #2 and P0 #3** on [`docs/roadmap.md`](../roadmap.md). Work item #1 (scaffold) is a `[chore]` prerequisite for M1. **M4** (piece SVGs) tracks **[chore] P1 #4** on the same feature doc — board UI extension, not a new capability. This file is the **SSOT** for the feature once shipped.

## v1 scope (agreed)

- Vite + React + TypeScript (strict) + Tailwind
- `src/engine.ts` — thin typed wrapper over `chess.js` (fen, legal moves, move, undo, game-over, promotion)
- `src/gameReducer.ts` + `src/hooks/useGame.ts` — components never touch `chess.js` directly
- Custom `Board` / `Square` / `Piece` — click-to-move, white on bottom; **Cburnett SVG pieces** (M4)
- Legal-move highlighting when a piece is selected
- `MoveList` — move list and PGN display
- `GameStatus` — check, checkmate, stalemate, draw (all draw types `chess.js` reports)
- `PromotionModal` — Q/R/B/N picker when a pawn promotes
- Undo move and new game
- Colocated Vitest tests for `engine.ts` and `gameReducer.ts`

## Non-goals (v1)

- Vs-AI / Stockfish (P1 — see [`vs-ai.md`](vs-ai.md))
- Deploy, online play, clocks, puzzles, FEN import UI, persistence
- Custom brand-aligned stroke piece art, multiple themes, piece animations (optional P2 polish)

**Sibling (shipped):** drag-and-drop polish lives in [`drag-and-drop.md`](drag-and-drop.md) (P1 #3) — layered on this feature’s click-to-move `Board`; not part of local-2-player v1 scope.

## Piece graphics (M4)

**Decision:** vend the **[Cburnett](https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces)** set from Wikimedia Commons — classic filled silhouettes, proven readability at small sizes. Not custom nsoto.dev stroke illustrations in this pass.

| Item | Choice |
|------|--------|
| **Source** | Cburnett SVGs (Wikimedia Commons) |
| **License** | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) — attribute Colin M. L. Burnett in repo credits |
| **Layout** | `src/assets/pieces/{w\|b}/{k,q,r,b,n,p}.svg` (12 files) |
| **Render** | `Piece.tsx` only — `Square` and `PromotionModal` keep existing props |
| **Sizing** | ~85% of square cell; verify board + promotion modal at mobile width |

**M4 non-goals:** user-selectable sets, AI-generated art. (Floating drag preview shipped later in [`drag-and-drop.md`](drag-and-drop.md).)


**Future hook:** swap asset directory or `Piece` implementation for a custom stroke set without touching board interaction code.

## Future hooks

Implemented in M1 where noted; remainder land in later milestones.

- **`GameMode` type stub:** `'local' | 'vsAI'` in `src/types.ts` — **Done** (M1)
- **Move-source abstraction:** `Board` accepts moves from human input or engine without rework — vs-AI drives the same path — **Done** (M2)
- **Engine-agnostic reducer actions:** dispatch `MOVE_MADE`, not `HUMAN_MOVED` — **Done** (M1)
- **Worker mount point** in `App.tsx` reserved for Stockfish (comment only until P1 vs-AI) — **Done** (M1)
- **Piece render swap seam:** `Piece.tsx` + `src/assets/pieces/` centralize assets — **Done** (M4)
- **Pointer drag overlay:** same `onMove` / `onPromotionRequest` path as click-to-move — **Done** (P1 #3; see [`drag-and-drop.md`](drag-and-drop.md))

## Code paths

Flat `src/` layout — no nested `chess/` or `state/` folders at this scope.

| Area | Location |
|------|----------|
| Engine | `src/engine.ts` |
| State | `src/gameReducer.ts`, `src/hooks/useGame.ts` |
| Board UI | `src/components/Board.tsx`, `Square.tsx`, `Piece.tsx` |
| Piece assets | `src/assets/pieces/` — Cburnett SVGs (M4) |
| Sidebar UI | `src/components/MoveList.tsx`, `GameStatus.tsx`, `PromotionModal.tsx` |
| App shell | `src/App.tsx` |

## Milestones

| # | Milestone | Status | Deliverables |
|---|-----------|--------|--------------|
| M1 | Scaffold + engine + reducer | Done | P0 #1 + #2: Vite/React/TS/Tailwind/Vitest; `engine.ts` + tests; `gameReducer` skeleton + `useGame`; `npm test` / `npm run build` |
| M2 | Board click-to-move | Done | P0 #3 partial: `Board`, `Square`, `Piece`; selection + legal highlights; Unicode pieces v1 |
| M3 | Complete MVP | Done | P0 #3 complete: `MoveList`, `GameStatus`, undo, new game, `PromotionModal` (Q/R/B/N); edge-case tests |
| M4 | Cburnett SVG pieces | Done | P1 #4: 12 SVGs under `src/assets/pieces/`; `Piece.tsx` renders images; board + promotion sizing; CC BY-SA attribution |

**Quick gate:** each implementation thread names **one milestone** (e.g. “M1 only”), not the whole P-tier.

**M1 reducer scope (shipped):** `NEW_GAME` and `MOVE_MADE` only; state holds `fen`, `turn`, `mode`, `moveHistory`. `UNDO` and `pendingPromotion` actions arrive in M3.

**M2 board scope (shipped):** selection state lives in `Board` (local `useState`); `onMove` prop drives `makeMove`. Pawn promotion auto-queens until M3 `PromotionModal`. `MOVE_MADE` rebuilds the engine from `state.fen` before applying a move so the reducer stays pure under React Strict Mode.

**M3 scope (shipped):** `UNDO`, `PROMOTION_PENDING`, and `pendingPromotion` in reducer state; `MoveList`, `GameStatus`, `PromotionModal`; sidebar layout in `App.tsx` with undo/new-game controls; board disabled when game over or promotion pending; reducer edge-case tests.

**M4 scope (shipped):** Cburnett SVGs vendored under `src/assets/pieces/{w,b}/`; `pieceSvgUrl` helper; `Piece.tsx` renders `<img>` at 85% square; attribution in `src/assets/pieces/ATTRIBUTION.md` and README credits; Unicode glyphs removed.

## Tests / verify

- `src/engine.test.ts` — rules, promotion, castling, en passant, game-over
- `src/gameReducer.test.ts` — `NEW_GAME`, `MOVE_MADE`, `UNDO` (including vs-AI pair undo), `PROMOTION_PENDING`, illegal-move guard, Strict Mode regression, promotion flow, checkmate, stalemate, castling, en passant
- `npm test`, `npm run build`
