# Feature specifications

This folder holds **feature specs** — the single source of truth for each product capability in ns-chess: agreed scope, non-goals, milestones, code paths, and how to verify.

## Why these docs are here

ns-chess was built with **NUDL** (**Nu Unified Dev Loop**) — a human-in-the-loop (HITL), AI-assisted development process I configured for myself in Cursor. NUDL is not a code generator; it is a **discipline layer**: roadmap alignment, milestone scoping, explicit non-goals, and verify-before-ship habits that keep agent-assisted work from drifting.

The files in this directory are **one example of the documentation that process produces**. Each feature spec is written (and updated) as work ships, so intent stays legible to future me, to reviewers, and to the agents I pair with on later milestones.

I include them in this portfolio repo to show how I work with modern AI-forward tooling: tight scope, traceable decisions, and specs that outlive any single chat session — not as a substitute for the code.

## How to read them

| Doc | Capability |
|-----|------------|
| [`local-2-player.md`](local-2-player.md) | Hot-seat chess — board, moves, status, promotion (P0) |
| [`vs-ai.md`](vs-ai.md) | Stockfish opponent in a Web Worker (P1) |

Broader context:

- [`docs/roadmap.md`](../roadmap.md) — backlog and priority tiers
- [`docs/mvp-scope.md`](../mvp-scope.md) — v1 launch bar and non-goals

## What a feature spec contains

Specs follow a consistent shape (see `_template.md` in-repo when bootstrapping new features):

- **Purpose** — what the feature does and why it exists
- **v1 scope / non-goals** — agreed boundaries before implementation
- **Milestones** — shippable slices (M1, M2, …) with clear done definitions
- **Future hooks** — cheap seams for later work without scope creep
- **Code paths & tests** — where behavior lives and how to verify it

That structure is deliberate: it makes each milestone a reviewable unit and gives agents (and humans) enough context to implement without re-deriving product intent from diffs alone.
