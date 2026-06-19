# Decisions

Major design and tooling decisions go here.

## 2026-06-15

- Use a local-first workspace.
- Keep card data in editable files before introducing any database.
- Start with JSON for the full card list because it is easy for a local app to read.
- Use a draft-first design target for the custom set.
- Establish the early structure as a Ravnica-inspired three-color faction/guild set where the main factions exclude green, while green has its own dual-color and mono-color paths.
- Introduce `Building` as one of two new card types.
- Define the first Building model as an attackable permanent with power and persistent toughness/durability.
- Buildings cannot attack, can block, and deal combat damage.
- Building durability works more like persistent damage than loyalty.
- Buildings are often also artifacts or enchantments, but this is optional.
- Buildings can block any attacking creature as though they were creatures.
- Buildings can be targeted by `any target`, `target permanent`, and `target Building` wording.
- Gold counters are the central set theme/resource.
- `Wealth N` checks the total number of gold counters among permanents you control.
- Gold counters have no intrinsic rules meaning by themselves.
- Gold costs can appear on spells and abilities.
- To pay one gold cost, remove one gold counter from a permanent you control.
- `Bribe` is an opponent-facing mechanic where any opponent may pay a defined bribe cost to interfere with a specified action or effect.
- WBU is the old money + government faction, focused on Wealth, gold counter interaction, and enchantment Buildings.
- WBU can use enchantment Buildings with `cannot block`.
- RWU is the individualism + military + progress faction, internally labeled "America."
- RWU's clear mechanical theme is that permanents with gold counters on them become better.
- RBU is the Bribe-focused faction.
- WBR is the final civilization faction. Current candidate anchor: Human Citizen tokens.
- Debt is not a separate counter/resource. In WBR, debt is represented by gold counters and card text.
- Green's primary archetypes are GR, GU, and mono-green.
- RGU is the natural three-color convergence for green/nature.
- Red and blue are also nature colors in this set.
- Black primarily stays with civilization factions.
- GW is an outlier that tries to unite humanity and nature.
- GB is an outlier that pushes hard on Doom.
- WB primarily handles humanity.
- Creature removal does not target Buildings unless the Building is also a creature.
- Buildings almost always interact with gold counters, gold costs, or Staff.
- Buildings should be weak on raw stats; baseline 2-cost artifact Building is around 0/4.
- Each civilization faction has a tapped tri-land with a gold counter interaction.

## Candidate, Not Yet Decided

- Many Buildings may have abilities activated by tapping X creatures.
- Current naming candidates: `Staff` or `Operate`.
- Current recommendation: use an ability word first, then promote to keyword only if it needs formal rules.
- `Wealth N` may be an ability word first unless it needs formal rules.
- Final notation for gold costs is not decided. Current working notation: `{Gold}`.
- `Doom` is a candidate graveyard-trigger mechanic that triggers from anywhere.
- Current Doom safety recommendation: most Doom cards should exile themselves after resolving unless repeatability is intentional.
- `Bribe` should likely start as an ability word/templating family rather than a rigid keyword because it can affect attacks, blocks, abilities, and spell effects differently.
- Revised Bribe direction: it may work as keyword-like shorthand for opponent payment, using `Bribe [cost]: [outcome]`, as long as the bribe outcome remains explicit.
- WBR theme is not locked. Current candidates: mass politics/populism, church/public order, or labor/debt/exploitation.
