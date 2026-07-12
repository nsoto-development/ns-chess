# nsoto.dev Design System

A dark-mode, code-forward design system for **nsoto.dev** — the personal portfolio site of a solo software/web developer. The site's job is to introduce the developer, show shipped work, and make it easy to get in touch. Products will live on subdomains (e.g. `app.nsoto.dev`); this system covers the shared foundations and the general landing page.

## Sources

- `logo/` — a locally mounted folder containing the brand logo pack: one primary lockup (`07657924-....png`) with the real tagline "SOLO DEV. ENGINEERING.", plus a "coming soon" splash set in 8 color variants (`nsoto-coming-soon*.png`, `62b9ff8d-....png` / `nsoto-panel.png` — same 8-up contact sheet).
- `uploads/Nelson Soto Resume 7-5-26 B.pdf` — real career content (20 years, full-stack/systems/cloud engineering) powering the Experience, Skills, and About copy in the portfolio UI kit.
- Profile links: `github.com/nsoto-development`, `linkedin.com/in/nsoto-development`, `nsoto.development@gmail.com`.
- No codebase or Figma file was attached. There is no existing product UI to recreate — this system's tokens/components/UI-kit visuals are originated from the logo pack plus the answers below; the portfolio's *content* (experience, skills, bio) is real, pulled from the resume.
- User-provided direction: portfolio site for an SWE/web dev; **cyan** as the primary UI accent (from the cyan "coming soon" lockup); **dark-only** theme; **mono for accents/headings, sans for body**; icons decided by us (Lucide-style, substituted — see Iconography).

**Caveat:** because there's no real product to clone, the components and portfolio UI kit below are *originated*, not recreated. Treat them as a strong, opinionated starting point — flag anything that should change to match the developer's actual taste/work.

## Index

- `styles.css` — root stylesheet, import this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`.
- `assets/logo/` — logo lockups (primary + cyan + solid-blue + padded + full variant sheet) plus `nsoto-mark-cyan.png`, an icon-only crop of the hex glyph with the black background keyed to transparency (for use on any surface — nav, footer, hero accent).
- `guidelines/` — foundation specimen cards: `colors/`, `type/`, `spacing/`, `brand/`.
- `components/core/` — Button, IconButton, Badge, Tag, Card, Avatar.
- `components/forms/` — Input, Textarea, Select, Checkbox.
- `components/feedback/` — Tooltip, Dialog, Toast.
- `components/navigation/` — Tabs, NavLink.
- `ui_kits/portfolio/` — full click-through landing page (Nav, Hero, Projects, About, Contact, Footer).
- `SKILL.md` — portable skill file for using this system from Claude Code.

## Content fundamentals

**Voice:** first person, direct, low-ceremony. The logo tagline is literally three words — *"Solo Dev. Engineering."* — full stops, no connective filler. Carry that terseness through: short declarative sentences, no marketing adjectives ("revolutionary", "seamless"), no exclamation points.

**Casing:** the wordmark itself is lowercase (`nsoto.dev`) — keep the lowercase mark as-is, but sentence-case normal prose (don't force everything lowercase). Section eyebrows and labels are set in mono, uppercase, with wide tracking (`</ WORK >`, `</ CONTACT >`) — a nod to the `<` `/` `>` glyphs already in the tagline.

**Person:** mix of I/you is fine for a personal site — "I build web apps end to end" (I) paired with direct address in CTAs ("Get in touch", not "Contact us").

**Emoji:** none. The brand's only decorative glyphs are code-punctuation (`<` `/` `>` `_`), not emoji.

**Vibe:** engineer-to-engineer. Confident but understated — let shipped work speak instead of adjectives. Terminal/code aesthetic (monospace, `$` prompts, blinking cursor) used as texture, not gimmick — it should read like a developer's tool, not a "hacker" costume.

## Visual foundations

**Color:** dark-only, true-black canvas (`--bg-canvas: #000`), matching the logo's background. One brand accent (`--brand`, `#0a9efa`) — a vivid azure/sky blue re-sampled directly from the cyan logo lockup's gradient (hue ~203°; despite the file being named "cyan" it reads as blue, not teal). Used for links, primary buttons, focus rings, and glow accents. Violet exists as a rare secondary/gradient partner, mirroring the primary lockup's blue→purple gradient — kept rare, never a second UI color. Status colors (green/amber/red) are muted, low-saturation washes, not solid fills.

**Type:** two families. `JetBrains Mono` for the wordmark, headings, labels, buttons, and code — echoes the logo's monospace wordmark and the `>_` cursor glyph. `Space Grotesk` (geometric sans) for body copy and long-form text, where mono would hurt readability. Both are Google Fonts substitutions (see Fonts section below) — no brand font files were supplied.

**Spacing:** 4px base grid, precise and technical rather than loose — fits a developer-tool feel.

**Backgrounds:** flat true-black, no photography, no full-bleed imagery, no hand-drawn illustration. The only "texture" allowed is code/terminal chrome — a `$` prompt block, a blinking text cursor, faint mono grid labels. No gradients as backgrounds; gradients are reserved for the logo mark itself and small accent uses (button glow, one hero underline).

**Animation:** quick and purposeful, never bouncy. `120–340ms`, `cubic-bezier(0.16,1,0.3,1)` ease-out. Fades + small slide-ins (8–12px) for modals/toasts. A blinking terminal cursor (`_`) is the one bespoke motion motif, used sparingly (e.g. end of a hero headline).

**Hover states:** primary buttons lighten one step + intensify the cyan glow; secondary/ghost surfaces get a subtle lighter-surface background; nav links get an animated underline sliding in from the left; interactive cards lift 2px and gain a cyan border + soft glow. Never a color-only hover with no other signal — always paired with a shadow/border/transform change.

**Press states:** buttons scale to 0.97 on mousedown — a small, snappy shrink, not an opacity change.

**Borders:** hairline, low-opacity white (`rgba(255,255,255,.08–.14)`) on dark surfaces; brand-cyan border (`rgba(34,211,238,.5)`) only on focus/hover of interactive elements, never as a static decoration.

**Shadows:** minimal by default (dark UIs don't need much separation). Cards get a faint inset top highlight + soft outer shadow (`--shadow-card`). The one deliberate elevation flourish is the cyan glow (`--glow-brand-*`) reserved for primary CTAs and focus rings — never used decoratively on static content.

**Radius:** small and precise — 4/6/8/12px scale, pill (`--radius-full`) reserved for tags/badges/avatars, not buttons or cards. Nothing oversized/bubbly.

**Transparency & blur:** used only functionally — modal backdrops (`rgba(0,0,0,.7)` + blur) and glass-like raised surfaces on hover. Not used decoratively on flat backgrounds.

**Imagery color vibe:** none supplied. If/when project screenshots or photos are added, keep them cool-toned and high-contrast against the black canvas — avoid warm/golden grades that would clash with cyan.

**Layout:** centered content column (`max-width: 1120px`), generous vertical rhythm between sections (64–160px), sticky top nav with a subtle bottom border once scrolled.

**Cards:** flat hairline-bordered rectangle by default; on hover (if interactive) lifts, brightens border to cyan, gains glow shadow. No colored left-border accent, no default drop shadow at rest.

## Iconography

No icon assets were provided. **Substitution:** using [Lucide](https://lucide.dev) icons via CDN (`lucide-static` or inline SVG copies of individual glyphs) — clean 2px-stroke line icons, closest match to the code-forward, precise aesthetic of the logo mark. Document any Lucide glyph used inline in a component/screen (GitHub, arrow, mail, external-link, X/close). No emoji, no unicode-glyph icons except the brand's own `<` `/` `>` `_` punctuation, which is set in text (mono font), not as an icon system.

## Fonts — flagged substitution

**No font files were supplied with the logo pack.** The wordmark's letterforms are a geometric/monospace style; nearest Google Fonts matches were chosen: **JetBrains Mono** (mono role) and **Space Grotesk** (sans role), loaded via `tokens/fonts.css`. If there are real brand font files (the ones used to actually set the wordmark), please share them and this file will be swapped to `@font-face` with the real files.

## Intentional additions

No existing component library or product UI was provided, so the components below are a standard, from-scratch set sized to a portfolio site's needs (not reverse-engineered): `Button`, `IconButton`, `Badge`, `Tag`, `Card`, `Avatar`, `Input`, `Textarea`, `Select`, `Checkbox`, `Tooltip`, `Dialog`, `Toast`, `Tabs`, `NavLink`.
