# Design system integration — ns-chess

Cross-cutting notes for consuming the vendored **nsoto.dev** kit at [`design-system/`](../../design-system/). The kit is **read-only** in this repo; see [`.cursor/rules/design-system-readonly.mdc`](../../.cursor/rules/design-system-readonly.mdc).

Token and component SSOT: [`design-system/readme.md`](../../design-system/readme.md).

## Import conventions

### Global styles

Import DS foundations **before** Tailwind so utilities can override where needed:

```css
@import '../design-system/styles.css';
@import 'tailwindcss';
```

(`src/index.css` — do not reorder without a visual regression pass.)

### Vite alias

[`vite.config.ts`](../../vite.config.ts) maps `@ds` → `design-system/`. Use **`@ds` only inside `src/components/ui/`** — never in feature components, hooks, or tests.

### Component wrappers

| Layer | Imports from | Example |
|-------|----------------|---------|
| `src/components/ui/*` | `@ds/components/...` | `Button.tsx` re-exports or wraps DS `.jsx` |
| Everything else in `src/` | `./ui/*` or `../ui/*` | `App.tsx` → `./components/ui/Button` |

Add new DS primitives by creating a thin wrapper under `src/components/ui/` first, then import the wrapper from domain code.

**Do not:**

- Import `design-system/` via relative paths from `src/` (except the CSS entry in `index.css`).
- Import `@ds/*` outside `src/components/ui/`.
- Edit files under `design-system/` from adoption or feature work (kit-maintenance threads only).

### Styling domain UI

- Prefer `var(--*)` tokens and inline `style` for chess-specific surfaces (board, squares, pieces).
- Avoid prototype palette utilities (`stone-*`, `amber-*`) on public-facing UI.
- Reach for DS components (`Button`, `Dialog`, `Badge`, `Card`) for shared chrome before building one-offs.

### Enforcement

`npm run lint` runs [oxlint](https://oxc.rs/docs/guide/usage/linter.html) with `no-restricted-imports` — DS paths are allowed only in `src/components/ui/**`.

## Surface map

| App surface | DS piece | Notes |
|-------------|----------|-------|
| Page shell | `styles.css` + `--bg-canvas` | Fonts via `--font-body` / `--font-heading` |
| Undo / New game | `Button` | `secondary` / `ghost` via wrapper |
| Game status | `Badge` + `--status-*` | `brand` active turn; `warning` check/draw; `danger` checkmate |
| Move list / PGN | `Card` + `--font-code` | Mono PGN |
| Promotion modal | `Dialog` + `Button` | Piece picker stays domain UI |
| Board / Square / Piece | *(tokens only)* | Square colors, rings, Unicode pieces |

## Smoke checklist

Manual pass after DS-touching changes (`npm test`, `npm run build`, `npm run lint`, then `npm run dev`):

- [ ] **Shell** — true-black canvas, body sans + heading mono; title readable on `--bg-canvas`.
- [ ] **Controls** — Undo / New game use DS button chrome; disabled Undo looks inactive.
- [ ] **Status** — Badge reflects turn, check, checkmate, stalemate/draw with expected variant colors.
- [ ] **Move list** — Card border/background; PGN in mono (`--font-code`).
- [ ] **Board** — Light/dark squares use gray tokens; selection ring uses `--focus-ring`; legal targets show brand tint.
- [ ] **Promotion** — Dialog opens on pawn promotion; piece choices dismiss modal and complete move.
- [ ] **Playthrough** — Full game: moves, capture, castle, en passant if exercised, undo, new game reset.
- [ ] **No regressions** — No `stone-*` / `amber-*` on public surfaces; no raw `design-system` imports outside `ui/` wrappers.
