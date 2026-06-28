# Card System

This document defines the first working assumptions for Sunder cards.

## Card Roles

Possible card roles:

- Attack
- Skill
- Spell
- Item
- Weapon
- Companion
- Form
- Reaction
- Curse
- Encounter
- Reward

The old card archive already contains several useful role names. These should be treated as reference, not locked terminology.

## Costs

Cards may cost colored energy.

Examples:

- `Red`: direct attack.
- `Blue`: spell or trick.
- `Green`: support or companion.
- `Red Blue`: aggressive spellblade action.
- `Green White`: broad support action.
- `Black`: forbidden effect.

White energy can pay any colored cost. Black costs require black.

## Hero Energy And Cards

Heroes provide base energy each turn. Cards may:

- Spend energy.
- Generate energy.
- Convert one color to another.
- Store energy.
- Reward specific color patterns.

## Old Prototype Signals

The old cards suggest several existing ideas worth preserving or re-evaluating:

- Hero cards with health and flip thresholds.
- Items and weapons that grant repeatable actions.
- Companions with health.
- Forms that modify hero behavior.
- Reactions that respond to enemy or ally actions.
- Crystals/rings as energy or stat sources.
- Red, green, and blue resource icons already present in some form.

## First Card Template

Working template:

```text
Name
Type / Tags
Cost
Effect
Upgrade or alternate effect
Notes
```

