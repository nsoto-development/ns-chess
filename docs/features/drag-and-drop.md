# Feature: Drag-and-drop moves

## Purpose

Add direct manipulation to the chessboard so mouse and touch users can drag a piece to a legal destination. Drag-and-drop is additive polish: click-to-move remains the accessible fallback and both interactions use the same move pipeline.

## Roadmap

Tracks **[feature] work item P1 #3** on [`docs/roadmap.md`](../roadmap.md).

## Scope

- Pointer Events support for mouse and touch input
- A floating piece preview follows the pointer after a small movement threshold
- The source piece is visually muted while dragging
- Legal destinations use the existing move highlighting
- Legal drops call the existing `onMove` or `onPromotionRequest` callback
- Illegal drops and pointer cancellation leave the position unchanged
- Click-to-move continues to work

## Non-goals

- Changes to chess rules, engine state, or reducer contracts
- Move animations, sounds, pre-moves, board flipping, or alternate piece sets
- HTML Drag and Drop or a third-party drag library
- Vs-AI behavior

## Interaction decisions

- Dragging begins only for a piece belonging to the side to move.
- A short movement threshold distinguishes a drag from a click.
- The board captures the active pointer so releasing outside the board cancels cleanly.
- Touch gestures that begin on the board are reserved for moving pieces; page scrolling remains available outside the board.
- Click-to-move remains the keyboard-compatible interaction path.

## Code paths

| Area | Location |
|---|---|
| Drag state, pointer handling, move dispatch | `src/components/Board.tsx` |
| Drop target metadata and source styling | `src/components/Square.tsx` |
| Floating piece preview | `src/components/Piece.tsx` reused by `Board.tsx` |
| Interaction hint | `src/App.tsx` |

## Milestones

| # | Milestone | Status | Deliverables |
|---|---|---|---|
| M1 | Pointer drag-and-drop | Done | Mouse/touch dragging, floating preview, legal-drop and promotion routing, click-to-move compatibility |

## Verification

Automated:

- `npm test`
- `npm run build`
- `npm run lint`

Manual:

- Drag a legal move with a mouse and with touch input.
- Confirm legal targets appear only after the drag threshold.
- Drop on an illegal square and outside the board; confirm no move occurs.
- Click a piece and then a legal target; confirm click-to-move still works.
- Drag a pawn to the last rank; confirm the promotion picker opens.
- Confirm dragging is unavailable while the board is disabled.
