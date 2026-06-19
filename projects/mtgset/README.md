# MTGSet

Local-first workspace for a custom Magic: The Gathering set.

## Working Model

- `docs/` holds set vision, mechanics, rules notes, and worldbuilding.
- `docs/dictation/` holds raw long-form brainstorming.
- `cards/draft/` holds one file per card once an idea becomes concrete.
- `data/cards.json` is an app-friendly card index while the local browser/editor is being developed.
- `images/` holds generated or reference card art.
- `print/` holds printable sheets and exports.
- `app/` is reserved for a local card browser/editor.

## Workflow

1. Capture rough ideas in `docs/inbox.md`.
2. Capture long dictation in `docs/dictation/`.
3. Promote usable card ideas into `cards/draft/`.
4. Keep `data/cards.json` synced as a compact index for app/reporting use.
5. Track major design decisions in `docs/decisions.md`.
6. Use `DEVLOG.md` for implemented changes and next steps.

See `docs/workflow.md` for the full working model.
