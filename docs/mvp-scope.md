# MVP scope — ns-chess

## Context

- **MVP** = what a **shipped v1** means for this product (launch bar), not execution order.
- **Roadmap / backlog:** [`docs/roadmap.md`](roadmap.md) — priority tiers, work items, and P0 delivery map.
- **Features:** `docs/features/` — SSOT for product capabilities (usually tied to `[feature]` work items).
- **Milestones:** shippable slices — in a feature doc when delivery is large.

## Progress (not the launch bar)

M3 is **shipped** — local 2-player MVP is complete: move list / PGN, game status, undo, new game, and promotion modal (Q/R/B/N). Board interaction is drag-and-drop (see [`features/drag-and-drop.md`](features/drag-and-drop.md)).

**After MVP:** P1 #2 vs-AI **M1** (playable Stockfish) is **shipped** — see [`features/vs-ai.md`](features/vs-ai.md). Not part of the MVP launch bar.

## MVP bar (v1 target)

**Local 2-player chess runs locally via `npm run dev`** — two humans play a full rules-legal game on one device in the browser. No deploy required for MVP.

Full behavior, milestones, code paths, and tests: **[`docs/features/local-2-player.md`](features/local-2-player.md)**.

At a glance:

- Hand-built board UI with drag-and-drop and legal-move highlighting
- Pawn promotion via piece-picker modal (Q/R/B/N)
- Move list / PGN, game status (check, checkmate, stalemate, draw), undo, and new game
- Chess rule logic in `src/engine.ts` only; `npm test` and `npm run build` pass

## Non-goals (MVP)

- Vs-AI / Stockfish (P1; see [`features/vs-ai.md`](features/vs-ai.md))
- Deploy, CI, subdomain, analytics, auth, accounts, online multiplayer
- Move clocks, puzzles, analysis board, opening book, FEN import UI, game persistence
- Mobile-first polish beyond responsive basics

## When to update this doc

- MVP bar or non-goals change.
- Something shipped that **changes the launch bar** (tighten wording to match reality).
