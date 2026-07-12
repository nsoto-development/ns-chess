# Epic: Design system adoption

> **Ephemeral execution SSOT** — multi-slice chore only. **Delete** when P1 #1 is Done. Lasting integration notes may move to `docs/design/` at closeout; this is **not** a feature capability doc.

## Purpose

Replace prototype UI (Tailwind stone/amber, system fonts) with the vendored **nsoto.dev** design system so public-facing surfaces match brand before deploy and vs-AI.

## Roadmap

Tracks **`[chore] Design system adoption`** — **P1 #1** on [`docs/roadmap.md`](../roadmap.md).

## Scope (this effort)

- Import `design-system/styles.css`; retheme page shell, shared chrome (buttons, status, move list, promotion modal), and chess board domain surfaces with DS tokens/components.
- Consume components from `design-system/components/` via thin TS wrappers in `src/components/ui/` (DS-M2).

## Non-goals

- IA redesign; portfolio UI kit; vs-AI chrome; drag-and-drop; deploy.
- Forking or editing DS tokens under `design-system/` (read-only).
- Feature doc for this chore.

## Milestones

Each row = one `/nudl-start-milestone` pass and one conventional commit after verify (`npm test` && `npm run build`).

| # | Milestone | Status | Deliverables |
|---|-----------|--------|--------------|
| DS-M1 | Foundations | Done | `index.css` imports DS `styles.css` before Tailwind; shell on `--bg-canvas`/fonts |
| DS-M2 | Chrome | Done | `Button`, `Dialog`, `Badge`/`Card`; TS import path via `src/components/ui/` wrappers |
| DS-M3 | Product UI | Done | Board/Square/Piece on DS tokens; no stone/amber palette |
| DS-M4 | Hardening (opt) | Done | [`docs/design/system-integration.md`](../design/system-integration.md); oxlint `no-restricted-imports`; smoke checklist |

## Integration notes

Lasting conventions and smoke checklist: [`docs/design/system-integration.md`](../design/system-integration.md).

| App surface | DS piece | Notes |
|-------------|----------|-------|
| Page shell | `styles.css` + `--bg-canvas` | Replace `bg-stone-900` shell |
| Title chrome | `nsoto-mark-cyan.png` + tokens | `AppHeader` / `BrandLink`; links to nsoto.dev + GitHub repo |
| Undo / New game | `Button` | `secondary` / `ghost` |
| Game status | `Badge` + `--status-*` | `brand` active turn; `warning` check/draw; `danger` checkmate |
| Move list / PGN | `Card` + `--font-code` | Mono PGN |
| Promotion modal | `Dialog` + `Button` | Piece picker = domain UI |
| Board / Square / Piece | *(none)* | Token colors/rings; Unicode pieces v1 (interim — superseded by [local-2-player M4](../features/local-2-player.md)) |

### Technical decisions

- **`design-system/` read-only** — consume only; app changes in `src/`; wrap or copy into `src/components/ui/` if a primitive almost fits.
- **CSS import order (DS-M1):** import `design-system/styles.css` **before** `@import 'tailwindcss'` in `index.css` so Tailwind utilities can override where needed.
- **DS `.jsx` in strict TS (DS-M2):** `tsconfig.app.json` only includes `src`. **Resolved:** Vite alias `@ds` → `design-system/` + thin **TS re-export wrappers** in `src/components/ui/` (`Button`, `Dialog`, `Badge`, `Card`).
- **Tailwind + DS:** prefer `var(--*)` and DS inline styles on domain UI; avoid parallel `@theme` unless board squares need it.
- **Brand color:** `design-system/tokens/colors.css` is SSOT (`#0a9efa`).

## Risks / open questions

- `tsc -b` may fail on raw `design-system/*.jsx` imports until DS-M2 wiring is decided.
- DS components use `import React` — fine with Vite; wrappers may be cleaner for strict TS.
- Tailwind preflight vs DS body reset — import order + spot-check in DS-M1.

## Touch areas

| Area | Notes |
|------|--------|
| `src/index.css` | DS `styles.css` import order |
| `src/App.tsx` | Page shell; centered mobile game layout |
| `src/components/` | Board, Square, Piece, GameStatus, MoveList, PromotionModal, AppHeader, BrandLink |
| `src/components/ui/` | DS wrappers + `brandAssets.ts` (logo URLs via `@ds`) |
| `design-system/` | Vendored kit — **read-only** |

## Lifecycle

When all milestones ship:

1. Mark **P1 #1** Done on the roadmap.
2. **Delete this epic** (not living product documentation).
3. Optionally extract non-trivial integration notes to `docs/design/system-integration.md`.
