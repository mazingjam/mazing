# Workflow

## Source Of Truth

Use a hybrid model:

- `docs/dictation/` stores raw long-form dictation and brainstorming.
- `docs/` stores refined set vision, mechanics, rules, worldbuilding, and decisions.
- `cards/draft/` stores one file per real card once an idea becomes concrete.
- `data/cards.json` can be generated or kept as a compact app-friendly index.

This keeps brainstorming loose while making individual cards easy to review, diff, tag, and print later.

## Dictation Flow

1. Capture the user's raw dictation in a dated file under `docs/dictation/`.
2. Extract themes into `docs/set-vision.md` and `docs/world.md`.
3. Extract mechanics into `docs/mechanics.md` and `docs/rules.md`.
4. Promote concrete card concepts into `cards/draft/`.
5. Update reports when enough cards exist to make counts useful.

## Card Status

- `idea`: loose concept.
- `design`: playable first version.
- `templated`: rules text reviewed.
- `balanced`: rough power-level reviewed.
- `playtested`: tested in games.
- `print_ready`: ready for proxy printing.

