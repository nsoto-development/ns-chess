# Design system integration — ns-chess

Cross-cutting notes for consuming the published **nsoto.dev** packages:

- [`@nsoto/portfolio-tokens`](https://www.npmjs.com/package/@nsoto/portfolio-tokens) — CSS foundations + brand assets
- [`@nsoto/portfolio-ui`](https://www.npmjs.com/package/@nsoto/portfolio-ui) — React UI primitives

Execution history (Phase B cutover): canonical design-system repo `guidelines/migration-to-portfolio-packages.md`.

## Import conventions

### Global styles

Import token foundations **before** Tailwind so utilities can override where needed:

```css
@import '@nsoto/portfolio-tokens/styles.css';
@import 'tailwindcss';
```

(`src/index.css` — do not reorder without a visual regression pass.)

### Component wrappers

| Layer | Imports from | Example |
|-------|----------------|---------|
| `src/components/ui/*` | `@nsoto/portfolio-ui` or `@nsoto/portfolio-tokens/assets/...` | `Button.tsx` wraps package exports; `brandAssets.ts` exports logo URLs |
| Everything else in `src/` | `./ui/*` or `../ui/*` | `App.tsx` → `./components/ui/Button` |

Add new DS primitives by creating a thin wrapper under `src/components/ui/` first, then import the wrapper from domain code.

**Do not:**

- Import `@nsoto/portfolio-ui` or `@nsoto/portfolio-tokens` outside `src/components/ui/` (except the CSS entry in `index.css`).
- Edit published package sources from this app — bump the dependency when the kit changes.

### Styling domain UI

- Prefer `var(--*)` tokens and inline `style` for chess-specific surfaces (board, squares, pieces).
- Avoid prototype palette utilities (`stone-*`, `amber-*`) on public-facing UI.
- Reach for DS components (`Button`, `Dialog`, `Badge`, `Card`) for shared chrome before building one-offs.

### Enforcement

`npm run lint` runs [oxlint](https://oxc.rs/docs/guide/usage/linter.html) with `no-restricted-imports` — package imports are allowed only in `src/components/ui/**`.

## Surface map

| App surface | DS piece | Notes |
|-------------|----------|-------|
| Page shell | `styles.css` + `--bg-canvas` | Fonts via `--font-body` / `--font-heading` |
| Title chrome | `nsoto-mark-cyan.png` + tokens | `AppHeader` / `BrandLink` — mark + caption → [nsoto.dev](https://nsoto.dev/); `ns-chess` → GitHub repo; responsive at `lg:` |
| Undo / New game | `Button` | `secondary` / `ghost` via wrapper |
| Game status | `Badge` + `--status-*` | `brand` active turn; `warning` check/draw; `danger` checkmate |
| Move list / PGN | `Card` + `--font-code` | Mono PGN |
| Promotion modal | `Dialog` + `Button` | Piece picker stays domain UI |
| Board / Square / Piece | *(tokens only)* | Square colors, rings; Cburnett SVGs via `Piece.tsx` |

## Smoke checklist

Manual pass after DS-touching changes (`npm test`, `npm run build`, `npm run lint`, then `npm run dev`):

- [ ] **Shell** — true-black canvas, body sans + heading mono; title readable on `--bg-canvas`.
- [ ] **Brand chrome** — cyan mark + `nsoto.dev` link; `ns-chess` links to repo; scales up at `lg:`; game block stays centered on mobile.
- [ ] **Controls** — Undo / New game use DS button chrome; disabled Undo looks inactive.
- [ ] **Status** — Badge reflects turn, check, checkmate, stalemate/draw with expected variant colors.
- [ ] **Move list** — Card border/background; PGN in mono (`--font-code`).
- [ ] **Board** — Light/dark squares use gray tokens; selection ring uses `--focus-ring`; legal targets show brand tint; Cburnett pieces crisp at 1x/2x.
- [ ] **Promotion** — Dialog opens on pawn promotion; piece choices dismiss modal and complete move.
- [ ] **Playthrough** — Full game: moves, capture, castle, en passant if exercised, undo, new game reset.
- [ ] **No regressions** — No `stone-*` / `amber-*` on public surfaces; no raw `@nsoto/*` imports outside `ui/` wrappers / `index.css`.
