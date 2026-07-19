# Feature: Vs-AI opponent

## Purpose

Adds a computer opponent so a single user can play against Stockfish at a selectable difficulty, without needing a second human or a backend. P1 work — **separate commits/PRs** from P0 local 2-player.

## Roadmap

Tracks **[feature] work item P1 #2** on [`docs/roadmap.md`](../roadmap.md). Depends on the board, engine wrapper, and reducer shipped in P0 — see [`local-2-player.md`](local-2-player.md).

## v1 scope (agreed)

- Stockfish.js (WASM build) running in a Web Worker so engine search never blocks the UI thread
- UCI protocol communication layer (`src/stockfish.ts`)
- Mode toggle: Local 2-player ↔ vs-AI
- AI moves dispatch through the same `gameReducer` action path as human moves (`MOVE_MADE` — see future hooks in [`local-2-player.md`](local-2-player.md))
- `GameMode` wired to `'vsAI'` when this feature is active
- Selectable difficulty via search depth / time caps (M2)
- "Thinking" indicator while the engine calculates a move (M2)

## v1 defaults

| Decision | Choice |
|----------|--------|
| Colors | Human plays **White**; AI plays **Black** |
| AI promotion | Auto-queen (`promotion: 'q'` in `MoveInput`) |
| Undo | One ply (same as local); no human+AI pair undo |
| Engine package | Stockfish.js WASM, pinned in `package.json`, loaded via Vite worker |

## Non-goals (v1)

- No analysis mode / eval bar
- No custom opening book beyond what Stockfish provides by default
- No cloud/server-side engine — everything runs client-side
- No choosing to play Black (v1)

## Future hooks

- The Web Worker interface should be swappable for a server-side engine later if online multiplayer or shared-analysis features are ever added.

## Code paths

| Area | Location |
|------|----------|
| Engine worker + UCI | `src/stockfish.ts` |
| AI move request after human turn | `src/hooks/useGame.ts` (and/or `App.tsx`) |
| Mode / thinking / difficulty state | `src/gameReducer.ts`, `src/hooks/useGame.ts` |
| Mode toggle + thinking UI | `src/App.tsx`, `src/components/GameStatus.tsx` |
| Board lock on AI turn | `src/hooks/useGame.ts` → `Board` `disabled` |

## Milestones

| # | Milestone | Status | Deliverables |
|---|-----------|--------|--------------|
| M1 | Playable vs-AI | Done | Stockfish in a Web Worker + UCI in `src/stockfish.ts`; Local / vs-AI mode toggle; after a human move, AI replies via `MOVE_MADE`; board disabled on AI turn / while waiting; fixed depth or short movetime (no difficulty UI yet); ignore stale replies on New game / mode switch |
| M2 | Difficulty + thinking | Planned | Easy / Medium / Hard presets (depth or movetime); “Thinking…” indicator; polish loading/engine-ready messaging if needed |

**Quick gate:** each implementation thread names **one milestone**, not the whole work item. Prefer branches `feature/vs-ai-m1` then `feature/vs-ai-m2`.

## Tests / verify

Automated (where cheap):

- Reducer / mode / thinking-state unit tests when those fields land
- `npm test`, `npm run build`, `npm run lint`

Manual:

- Start vs-AI; play a legal move; confirm AI replies without freezing the UI
- Confirm AI moves are legal and appear in the move list / PGN
- New game / switch to Local mid-search: no stale AI move applied
- AI promotion to last rank auto-queens
- Board stays locked while AI is thinking and on Black’s turn
- (M2) Difficulty presets change search strength; thinking indicator shows during search
