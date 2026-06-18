# Eternal Soul System

The Eternal Soul system is the heart of the game.

The design goal is simple:

> Death should create story, not delete progress.

## Soul Creation

When a hero dies, retires, or ascends, generate an Eternal Soul.

The soul should preserve factual history and convert it into future gameplay.

Stored facts:

- Hero name
- Class
- Level
- Run number
- Death or ascension cause
- Final build
- Main skills
- Main modifiers
- Equipment highlights
- Kills
- Bosses defeated
- Damage dealt
- Healing done
- Allies saved
- Defining trait

Generated legacy:

- Title
- Legacy trait
- Memory line
- Return hooks
- Relationship hooks

## Titles

Titles should be generated from behavior, not random flavor alone.

Examples:

- Ragnar the Stubborn: survived lethal damage multiple times.
- Selene the Merciful: healed allies more than she dealt damage.
- Veyra Ash-Tongue: killed many enemies with burn effects.
- Orin Lastguard: died while protecting companions.
- Maela Twice-Born: was resurrected during the run.

## Legacy Traits

Legacy traits should be flavorful and build-relevant, but avoid raw permanent power creep.

Good examples:

- Allies start with a small barrier if this soul is your mentor.
- Fire skills have a chance to apply Ash Mark during this run.
- First companion recruited this run gains the Loyal trait.
- Merchants may offer one extra cursed item.
- Shrine events can contain a special memory option.

Avoid:

- +2% damage forever
- +1% max health forever
- Permanent account-wide stat ladders

## Return Forms

An Eternal Soul can return as:

1. Companion
   - Fights alongside the current hero in a limited role.
2. Mentor
   - Grants one run-specific passive or modifies reward pools.
3. Event figure
   - Appears in story decisions, shrines, dreams, or bargains.
4. Rival
   - Challenges the current hero or contests a reward.
5. Boss
   - A corrupted or transformed version appears as a major fight.
6. Legend
   - Becomes a pantheon figure with rare, campaign-level impact.

MVP should implement companion, mentor, and event figure first.

## Soul Growth

Souls can gain status across future runs:

1. Remembered
2. Honored
3. Renowned
4. Legendary
5. Ascended

Status should come from meaningful interactions, not grind alone.

Examples:

- Recruit a soul and win a boss fight.
- Use a soul mentor to complete a run.
- Resolve a soul's unfinished event.
- Defeat a corrupted version of the soul.

## Soul Encounter Examples

### The Old Shield

You find the cracked shield of Ragnar the Stubborn.

Choices:

- Carry it: gain barrier at combat start this run.
- Repair it: unlock Ragnar as a possible companion.
- Bury it: gain a shrine blessing and increase Ragnar's honor.

### A Familiar Voice

Selene the Merciful appears in a dream before an elite fight.

Choices:

- Accept her guidance: healing rewards are more likely this act.
- Ask for courage: start the next combat with regeneration.
- Refuse the memory: gain gold, but Selene becomes distant.

## Design Rule

Every Eternal Soul interaction should answer at least one question:

- Who was this hero?
- What did they do?
- Why do they matter now?

