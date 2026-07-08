# Feature: Vs-AI opponent

## Purpose

Adds a computer opponent so a single user can play against Stockfish at a selectable difficulty, without needing a second human or a backend. P1 work — **separate commits/PRs** from P0 local 2-player.

## Roadmap

Tracks **[feature] work item P1 #1** on [`docs/roadmap.md`](../roadmap.md). Depends on the board, engine wrapper, and reducer shipped in P0 — see [`local-2-player.md`](local-2-player.md).

## v1 scope (agreed)

- Stockfish.js (WASM build) running in a Web Worker so engine search never blocks the UI thread
- UCI protocol communication layer (`src/stockfish.ts`)
- Selectable difficulty via search depth / time caps
- "Thinking" indicator while the engine calculates a move
- AI moves dispatch through the same `gameReducer` action path as human moves (`MOVE_MADE` — see future hooks in [`local-2-player.md`](local-2-player.md))
- `GameMode` wired to `'vsAI'` when this feature is active

## Non-goals (v1)

- No analysis mode / eval bar
- No custom opening book beyond what Stockfish provides by default
- No cloud/server-side engine — everything runs client-side

## Future hooks

- The Web Worker interface should be swappable for a server-side engine later if online multiplayer or shared-analysis features are ever added.

## Code paths

| Area | Location |
|------|----------|
| Engine worker + UCI | `src/stockfish.ts` |
| Difficulty / thinking state | wired into `src/gameReducer.ts`, `src/hooks/useGame.ts` |
| Mode toggle | `src/App.tsx` (uses `GameMode` stub from local 2-player) |

## Milestones

| # | Milestone | Status | Deliverables |
|---|-----------|--------|--------------|
| M1 | Worker setup + basic move request/response | Planned | Stockfish runs in a Web Worker; UCI request/response round-trip works for a single hardcoded position |
| M2 | Difficulty levels + thinking indicator | Planned | Depth/time-capped difficulty presets; UI shows "thinking" state while waiting on engine reply |

**Quick gate:** each implementation thread names **one milestone**, not the whole work item.

## Tests / verify

- Manual verification checklist for engine move legality and worker responsiveness (hard to unit-test a WASM engine meaningfully)
- Confirm UI never freezes during engine search
- AI moves must pass through the same reducer path as human moves — no duplicate state logic
