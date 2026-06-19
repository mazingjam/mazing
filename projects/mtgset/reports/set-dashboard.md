# Set Dashboard

This report is a placeholder until the set has enough structured cards to summarize.

## Current State

- Source files: `cards/draft/`
- Raw brainstorming: `docs/dictation/`
- App-friendly index: `data/cards.json`
- Design target: draft-first.
- Current foundation: Ravnica-inspired three-color non-green factions/guilds, green as special dual-color/mono-color path.
- Central set resource: gold counters.
- Core threshold mechanic: `Wealth N`, based on total gold counters among permanents you control.
- Core cost mechanic: gold costs, currently written `{Gold}`, paid by removing gold counters from permanents you control.
- New card types: `Building` plus one TBD.
- Building model: attackable defensive permanent with power and persistent damage/durability. Buildings cannot attack, can block any attacking creature as though they were creatures, and deal combat damage. They are often artifacts or enchantments, but not always. They can be targeted by `any target`, `target permanent`, and `target Building`.
- Candidate Building mechanic: abilities activated by tapping X creatures. Current naming candidates: `Staff` / `Operate`.
- Candidate graveyard mechanic: `Doom`, triggering when the card is put into a graveyard from anywhere. Current safety recommendation: most Doom cards exile themselves after resolving.
- Candidate opponent-interaction mechanic: `Bribe`, allowing opponents to pay a defined cost to interfere with specified actions or effects.

## Known Factions

- WBU: old money + government. Focuses on `Wealth`, gold counter interaction, and enchantment Buildings, including some Buildings with `cannot block`.
- RWU: individualism + military + progress. Mixed mechanics, with a clear theme that permanents with gold counters on them become better.
- RBU: Bribe-focused faction. Flavor identity TBD.
- WBR: final civilization faction. Candidate anchor: Human Citizen tokens. Debt is represented through gold counters/card text, not a new resource.
- Green lanes: GR, GU, mono-green, with RGU as natural three-color convergence.
- Green outliers: GW unites humanity/nature; GB pushes hard on Doom.
- WB: humanity.

## Current Generation Plan

- Generate archetype staples before a full skeleton.
- Target per archetype: 3 commons, 3 uncommons, 3 rares.
- Creature removal does not target Buildings.
- Baseline 2-cost artifact Building: around 0/4, with value from gold/Staff.
- Civ factions each get a tapped tri-land with gold counter interaction.

Generated artifact:

- `cards/draft/archetype-staples-v1.md`: 99 first-pass staple cards across 11 archetypes.

## Useful Future Views

- Card counts by color and rarity.
- Creature and noncreature ratios.
- Mana curve by color.
- Cards missing art prompts.
- Cards needing templating review.
- Draft archetype support.
