# Feature specifications

This folder holds **feature specs** — the single source of truth for each product capability in ns-chess: agreed scope, non-goals, milestones, code paths, and how to verify.

## Why these docs are here

ns-chess was built with **NUDL** (**Nu Unified Dev Loop**) — a human-in-the-loop (HITL), AI-assisted development process I configured for myself in Cursor based on my professional and personal software engineering experiences. 

NUDL is not a code generator; it is a **discipline layer**: roadmap alignment, milestone scoping, explicit non-goals, and verify-before-ship habits that keep agent-assisted work from drifting. In a nutshell, it assists tremendously with the chores teams usually never have time for. And generally neither do solo-devs. 

I include these to ideally demonstrate what AI doesn't currently replicate: sounds engineering decisions founded by experience.

I include them in this portfolio repo to show what I strive to have for documentation in the pre-AI era as well as how I now work with modern AI-forward tooling: tight scope, traceable decisions, and specs that outlive any single chat session — not as a substitute for the code.

## How to read them


| Doc                                      | Capability                                                            |
| ---------------------------------------- | --------------------------------------------------------------------- |
| `[local-2-player.md](local-2-player.md)` | Hot-seat chess — board, moves, status, promotion (P0; **M3 shipped**) |
| `[vs-ai.md](vs-ai.md)`                   | Stockfish opponent in a Web Worker (P1)                               |
| `[drag-and-drop.md](drag-and-drop.md)`   | Mouse and touch piece dragging layered on click-to-move (P1)          |


Broader context:

- `[docs/roadmap.md](../roadmap.md)` — backlog and priority tiers
- `[docs/mvp-scope.md](../mvp-scope.md)` — v1 launch bar and non-goals

