# Mechanics

## Candidate Mechanics

Add rough mechanic ideas here before they become formal rules text.

### Gold Counters

Gold counters are the central resource/theme of the set.

Current model:

- Gold counters are placed on permanents.
- The set tracks the total number of gold counters among permanents you control.
- Gold counters fuel or enable `Wealth`.
- Gold counters themselves are simply counters with no intrinsic rules meaning.
- Many cards can refer to gold counters directly.
- Gold counters can be removed from permanents you control to pay gold costs.

Open question:

- What should the gold cost symbol look like in text files and rendered cards?

### Gold Costs

A new cost resource exists, represented for now as `{Gold}`.

Working definition:

> To pay `{Gold}`, remove a gold counter from a permanent you control.

Design role:

- Gold can appear as an additional cost on spells.
- Gold can appear in activated ability costs.
- Example creature cost: `{1}{B}{Gold}`.
- Gold costs turn accumulated board resources into spell/ability access.

Rules assumption:

- Removing a gold counter to pay a gold cost does not target the permanent.

### Wealth N

Working definition:

> Wealth N means "if permanents you control have N or more gold counters among them."

Design role:

- Threshold mechanic tied to the set's gold counter economy.
- Can reward accumulating and protecting gold counters across multiple permanents.
- Can create different archetype incentives depending on which colors make, move, spend, or exploit gold counters.

Template candidates:

> Wealth 3 -- As long as permanents you control have three or more gold counters among them, [effect].

> Wealth 5 -- If permanents you control have five or more gold counters among them, [effect].

Current recommendation: use `Wealth N` as an ability word first unless it needs formal rules beyond checking the threshold.

### Building Activation Mechanic: TBD

Many Buildings may have abilities activated by tapping a number of creatures.

Current design space:

- Repeated cost pattern: `Tap X untapped creatures you control: [effect].`
- Possible ability word: `Staff N` or `Operate N`.
- This should probably be an ability word if it only labels a repeated cost pattern.
- It should become a keyword only if the mechanic needs rules baggage beyond the activation cost.

Example ability-word version:

> Staff 2 -- Tap two untapped creatures you control: Draw a card.

Example keyword-ish version:

> Operate 2 -- Tap two untapped creatures you control: Activate this ability only as a sorcery.

Current recommendation: start as an ability word, probably `Staff`, until the mechanic proves it needs formal rules.

### Doom

Working definition:

> Doom -- When this card is put into a graveyard from anywhere, [effect].

Design role:

- Graveyard-trigger mechanic.
- Can reward sacrifice, trading in combat, milling, discarding, or attrition.
- Likely fits black strongly, but may support cross-color archetypes.

Open question:

- Should most Doom cards include "Then exile this card" to prevent loops?

Template candidates:

> Doom -- When this card is put into a graveyard from anywhere, [effect].

Safer default template:

> Doom -- When this card is put into a graveyard from anywhere, [effect]. Then exile it.

### Bribe X

Working definition:

> Bribe [cost] means "Any opponent may pay [cost] to interfere with the listed action or effect."

Design role:

- Opponent-facing interaction mechanic.
- Represents corruption, negotiation, extortion, bureaucracy, or unreliable loyalty.
- Can appear on permanents, spells, and abilities.
- The bribe cost can be mana, `{Gold}`, sacrificing a permanent, or another defined cost.

Important: Bribe should not use "any action" in final templating. Each card should state what the bribe affects or what happens if the bribe is paid.

Possible shorthand model:

> Bribe [cost]: [bribe outcome].

Meaning:

> Any opponent may pay [cost] at the relevant time. If a player does, [bribe outcome].

Template candidates:

> Bribe `{2}` -- Whenever CARDNAME attacks, any opponent may pay `{2}`. If a player does, remove CARDNAME from combat.

> Bribe `{Gold}`: When CARDNAME attacks, tap it instead.

> Bribe `{Gold}` -- When this ability triggers, any opponent may pay `{Gold}`. If a player does, counter this ability.

> Bribe `{1}` -- Draw two cards unless an opponent pays `{1}`.

> Bribe `{Gold}` -- CARDNAME deals 3 damage to any target. If an opponent paid the bribe cost, it deals 1 damage instead.

Current recommendation:

- Bribe can be a keyword-like shorthand if it only standardizes the opponent payment permission.
- The card still needs explicit text for what happens when the bribe is paid.
- Avoid making Bribe responsible for all "fizzle" logic globally.

## New Card Types

- `Building`: new card type. Current model: a defensive permanent that mixes creature-like stats with planeswalker-like attackability. Buildings have power and durability, where durability is persistent damage/toughness. They can be attacked directly, cannot attack, can block any attacking creature as though they were creatures, and deal combat damage. Buildings are often also artifacts or enchantments, but this is not required. Buildings can be targeted by `any target`, `target permanent`, or `target Building` wording.
- Second new card type: TBD.

Building rate/design constraints:

- Creature removal does not target Buildings unless the Building is also a creature.
- Buildings almost always interact with gold counters, gold costs, or Staff.
- Buildings should be relatively weak on raw rate.
- Baseline: 2-cost artifact Building around 0/4.

## Mechanical Pillars

- Draft-first faction structure.
- Three-color guild/faction lanes that exclude green.
- Green-supported dual-color themes plus a mono-green path.
- Buildings as a major set component.

## Color Pie Notes

- White: TBD
- Blue: TBD
- Black: TBD
- Red: TBD
- Green: structurally special; supports dual-color themes and has a mono-color path outside the main three-color guild/faction model.

## Faction Mechanical Notes

### WBU: Old Money + Government

- Primary mechanics: `Wealth`, gold counter interaction.
- Permanent type emphasis: enchantment Buildings.
- Building exception: WBU can use Buildings with `cannot block`, especially when the Building represents an institution, office, law, estate, or social structure rather than a physical fortification.
- Likely play pattern: accumulate gold counters, reach Wealth thresholds, convert institutional permanents into steady advantage.

### RWU: Individualism + Military + Progress

- Primary theme: permanents with gold counters on them become better.
- Uses a mix of the new mechanics rather than owning only one.
- Gold counters on individual objects matter, not just total gold count.
- Likely play pattern: place gold counters on key creatures, Buildings, or artifacts to upgrade them and unlock bonuses.
- Possible template space:
  - "As long as CARDNAME has a gold counter on it, [bonus]."
  - "Permanents you control with gold counters on them have [ability]."
  - "Whenever you put one or more gold counters on a permanent, [effect]."
  - "Remove a gold counter from CARDNAME: [effect]."

### RBU: Bribe

- Primary mechanic: `Bribe`.
- Likely cares about whether bribe costs are paid.
- Can create forked outcomes: opponents pay and get a reduced/redirected effect, or decline and suffer the full effect.
- Likely uses `{Gold}` as one common bribe cost, but should not be limited to gold-only bribes.
- Needs flavor identity before assigning creature types, Building types, and removal style.

### WBR: Human Citizens

- Current anchor: Human Citizen tokens.
- Theme is not locked.
- Mechanical candidates:
  - Create Citizen tokens as board material.
  - Sacrifice Citizens for value.
  - Tap Citizens to Staff Buildings.
  - Put gold counters on Citizens as wages, debts, favors, or marks of loyalty.
  - Use Doom on cheap cards or sacrifice fodder.
  - Use Bribe to represent paid loyalty, coercion, or public pressure.
- Debt is not a separate counter type; represent it with gold counters and card text.

### Green Archetypes

- Primary green lanes: GR, GU, and mono-green.
- Natural three-color convergence: RGU.
- Green is structurally outside the main non-green civilization faction model.
- These archetypes need to contrast with civilization's gold/institution systems.
- Red and blue also carry nature themes in this set.
- Black should primarily stay attached to civilization factions, even if GB exists as an outlier Doom lane.

Outlier lanes:

- GW: tries to unite humanity and nature.
- GB: pushes hard on `Doom`.

### WB: Humanity

- WB primarily handles humanity.
- Likely overlaps with Human Citizen tokens, public order, mortality, social systems, or survival.
