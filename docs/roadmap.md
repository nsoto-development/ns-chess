# ns-chess — product roadmap

Ordered **backlog**: **priority tiers** (P0/P1/P2) group **numbered work items**. Large features split into **milestones** (M1, M2, …) in `docs/features/`.

**Work item kinds** (optional tags): `[feature]`, `[bugfix]`, `[chore]`, `[debt]`. A `[feature]` work item usually pairs with a feature doc; other kinds often do not.

---

## Status (where we are)

- **Last shipped:** M4 — Cburnett SVG chess pieces (P1 #4)
- **Current focus:** P1 backlog (vs-AI, drag-and-drop)
- **Pre-launch / MVP:** see `[mvp-scope.md](mvp-scope.md)`

---

## Priority framework

**P-tiers are importance bands — not work units.** A large `[feature]` work item may take several milestones (M1, M2, …) in `docs/features/<topic>.md`.


| Tier   | Meaning                                        |
| ------ | ---------------------------------------------- |
| **P0** | Must have — product is not viable without this |
| **P1** | Strong improvements after P0                   |
| **P2** | Differentiation / scale — after P1 sticks      |


---



## P0 delivery map

Local 2-player MVP spans three work items and three milestones. **Milestones are the execution unit** — do not conflate with P-tier.


| Milestone | Work items                   | Outcome                                                                                                                        |
| --------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **M1**    | #1 scaffold + #2 engine      | **Done** — Vite/React/TS/Tailwind/Vitest; `engine.ts` + tests; `gameReducer` skeleton + `useGame`; `npm test`, `npm run build` |
| **M2**    | #3 local 2-player (partial)  | **Done** — `Board` / `Square` / `Piece`; click-to-move; legal-move highlighting; Unicode pieces v1                             |
| **M3**    | #3 local 2-player (complete) | **Done** — `MoveList` / PGN, `GameStatus`, undo, new game, `PromotionModal` (Q/R/B/N); edge-case tests                         |


Full SSOT for behavior, code paths, and tests: `[docs/features/local-2-player.md](features/local-2-player.md)`.

---



## P0

1. `[chore]` **App scaffold** — Vite, React, TypeScript strict, Tailwind, Vitest; `npm test` and `npm run build` pass — **Done** (M1)
2. `[feature]` **Chess engine layer** — `src/engine.ts` thin wrapper over `chess.js` + colocated tests (no UI) — **Done** (M1)
3. `[feature]` **Local 2-player game** — board UI, moves, status, undo, promotion, new game (see `[features/local-2-player.md](features/local-2-player.md)`) — **Done** (M3)

---



## P1

1. `[chore]` **Design system adoption** — nsoto.dev DS wired into public UI (see [epics/design-system-adoption.md](epics/design-system-adoption.md)) — **Done** (DS-M4)
2. `[feature]` **Vs-AI** — Stockfish Web Worker, UCI layer, difficulty levels, thinking state (P1; see `[features/vs-ai.md](features/vs-ai.md)`)
3. `[feature]` **Drag-and-drop moves** — UX polish layered on click-to-move (non-goal for MVP)
4. `[chore]` **Chess piece SVGs** — replace Unicode v1 with vendored [Cburnett](https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces) set; `Piece.tsx` + board/promotion sizing; attribution (see [local-2-player.md](features/local-2-player.md) M4) — **Done** (M4)

---



## P2

1. `[chore]` **Deploy** to `chess.nsoto.dev`

---



## When to update

- **Ship a milestone** → update status in the feature doc; mark a **work item** **Done** only when all milestones for that item are complete (or the whole item was one milestone).
- **Reprioritize** → move work items between P-tiers or reorder the backlog.

