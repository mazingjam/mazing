# Rules Notes

Use this file for templating decisions, keyword definitions, reminder text, and rules questions.

## Templating Preferences

- Prefer official-style MTG rules text.
- Keep reminder text on commons and early playtest cards.

## New Card Type: Building

Status: first working model.

Working definition:

- A Building is a permanent.
- A Building has power and durability.
- Durability is persistent damage/toughness; exact rules term is not final.
- A Building can be attacked directly.
- A Building cannot attack.
- A Building can block any attacking creature as though it were a creature.
- A Building deals combat damage.
- A Building is often also an artifact or enchantment, but does not have to be.
- A Building can be targeted by spells and abilities that target `any target`, `target permanent`, or `target Building`.
- Buildings are conceptually between creatures and planeswalkers.

Open rules questions:

- Are Buildings closer to artifacts, enchantments, lands, battles, dungeons, or something entirely new?
- What card frames, subtypes, and interaction hooks should Buildings use?
- What existing removal should answer Buildings?
- Are Buildings creatures for any rules purposes, or only creature-like permanents?
- Does `target creature` hit Buildings? Current assumption: no, unless the Building is also a creature.
- Does damage marked on Buildings clear through repair effects only, or also at specific turn/phase boundaries?

Removal decision:

- Creature removal does not target Buildings unless a Building is also a creature.
- Building interaction should come through combat, permanent removal, artifact/enchantment removal where applicable, and explicit `target Building` text.

### Building Exceptions

Some Buildings can have `CARDNAME can't block.`

Current faction use:

- WBU uses enchantment Buildings with `cannot block`, representing institutions or systems that generate value but do not function as defensive bodies.

### Baseline Building Rate

Buildings are generally underpowered on raw stats and get their value from gold or Staff interactions.

Baseline:

> A 2-cost artifact Building can be approximately 0/4.

## Candidate Building Ability: Staff / Operate

Status: candidate.

Many Buildings may use abilities activated by tapping creatures.

Possible baseline template:

> Staff N -- Tap N untapped creatures you control: [effect].

Rules considerations:

- If `Staff` is only a label for the cost, it can be an ability word.
- If `Staff` creates special timing, targeting, memory, or interaction rules, it should become a keyword.
- Need to decide whether these abilities are instant-speed by default or restricted to sorcery speed.
- Need to decide whether creatures with summoning sickness can be tapped this way. Current MTG precedent generally allows tapping untapped creatures you control for costs unless the ability uses the tap symbol on those creatures.

## Gold Counters

Status: core set resource.

Working model:

- Gold counters are counters on permanents.
- The total number of gold counters among permanents you control matters.
- Gold counters have no intrinsic rules meaning unless a card says otherwise.
- Many cards can refer to gold counters.
- Gold counters can be removed from permanents you control to pay gold costs.

Open rules questions:

- Can players have gold counters, or only permanents?
- Can gold counters be moved between permanents?
- Do gold counters remain on Buildings through damage/repair loops?

## Gold Costs

Status: core set resource/cost system.

Working notation:

> `{Gold}`

Working definition:

> To pay `{Gold}`, remove a gold counter from a permanent you control.

Examples:

> A creature spell may cost `{1}{B}{Gold}`.

> An activated ability may cost `{2}, {T}, {Gold}: [effect].`

Rules assumptions:

- A spell or ability with a gold cost cannot be paid unless you control a permanent with a gold counter that can be removed.
- Removing a gold counter to pay a gold cost does not target the permanent.
- One permanent can pay multiple gold costs if it has enough gold counters, unless another rule says otherwise.

Open rules questions:

- Should the final rendered symbol be `{Gold}`, `{Gd}`, a coin icon, or another notation?
- Can cost reduction effects reduce gold costs, or only mana costs?
- Can alternate costs include gold costs?
- Can additional costs add gold costs?

## Wealth N

Status: candidate keyword/ability word.

Working definition:

> Wealth N means "permanents you control have N or more gold counters among them."

Template candidates:

> Wealth 3 -- As long as permanents you control have three or more gold counters among them, [static effect].

> Wealth 3 -- When [event], if permanents you control have three or more gold counters among them, [triggered effect].

> Wealth 3 -- If permanents you control have three or more gold counters among them, [spell/ability effect].

Rules considerations:

- Need to decide whether `Wealth N` is a keyword ability or an ability word.
- If it only labels threshold conditions, ability word is cleaner.
- If it creates a defined game term used across multiple templates, keyword/action-word may be justified.

## Doom

Status: candidate mechanic.

Working definition:

> Doom -- When this card is put into a graveyard from anywhere, [effect].

Template options:

> Doom -- When this card is put into a graveyard from anywhere, [effect].

Safer default template:

> Doom -- When this card is put into a graveyard from anywhere, [effect]. Then exile it.

Rules considerations:

- Doom triggers from anywhere.
- Because Doom triggers from anywhere, it has high loop potential with self-mill, discard, sacrifice, and recursion.
- Default safety recommendation: include "Then exile it" on most Doom cards unless repeatability is intentional and costed.
- If Doom is only a label for a trigger, it should probably be an ability word.

## Bribe

Status: candidate mechanic.

Working definition:

> Bribe [cost] creates an opportunity for any opponent to pay [cost] to interfere with a specified action or effect from the card with Bribe.

Possible shorthand:

> Bribe [cost]: [bribe outcome].

Meaning:

> Any opponent may pay [cost] at the relevant time. If a player does, [bribe outcome].

Bribe costs may include:

- Mana costs.
- Gold costs, such as `{Gold}`.
- Sacrificing permanents.
- Other card-defined costs.

Current templating principle:

- Bribe should specify the affected action or effect directly.
- Avoid final rules text that says "any action" because it is too broad for clean play.
- A keyword-like shorthand is acceptable if the outcome remains explicit on the card.
- A bribe payment does not target by default.

Template patterns:

> Bribe `{2}` -- Whenever CARDNAME attacks, any opponent may pay `{2}`. If a player does, remove CARDNAME from combat.

> Bribe `{Gold}`: When CARDNAME attacks, tap it instead.

> Bribe `{2}` -- Whenever CARDNAME blocks, any opponent may pay `{2}`. If a player does, remove CARDNAME from combat.

> Bribe `{Gold}` -- When this ability triggers, any opponent may pay `{Gold}`. If a player does, counter this ability.

> Bribe `{1}` -- Draw two cards unless an opponent pays `{1}`.

> Bribe `{Gold}` -- CARDNAME deals 3 damage to any target. If an opponent paid the bribe cost, it deals 1 damage instead.

Rules questions:

- For multiplayer, which opponent chooses first whether to pay?
- Can more than one opponent pay the same bribe? Current recommended answer: no, the first paid bribe satisfies it.
- Is Bribe paid during resolution, as a triggered ability, or through a special action? This may vary by template unless standardized.
- Can a bribe cost be paid with resources controlled by a teammate in team formats?
- Does "counter this ability" work for all relevant Bribe cases, or should some use "ignore that effect" / replacement wording?
- Exact grammar for `Bribe [cost]: [outcome]` needs testing against real card examples.
