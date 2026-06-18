# Core Run Loop

The game should move quickly: decision, combat, reward, decision, combat.

## Run Start

The player is offered 3 random heroes from the unlocked pool.

Each hero card shows:

- Name
- Class
- Starting skill
- Class mechanic
- One visible build hook
- One personality trait

The player chooses 1 hero.

## Preparation

The player receives starting gold and can make 1-3 initial decisions:

- Buy a skill
- Buy equipment
- Buy a relic
- Upgrade a starting skill
- Hire a low-tier companion if available

Preparation should take less than 60 seconds.

## Map

The run uses a branching map inspired by Slay the Spire.

Node types:

- Combat
- Elite
- Boss
- Merchant
- Treasure
- Event
- Eternal Soul Encounter
- Shrine

## Combat

Combat is automatic and short.

Target duration:

- Normal combat: 5-12 seconds
- Elite combat: 10-20 seconds
- Boss combat: 20-35 seconds

The player does not manually move or aim. The strategic weight sits in builds, positioning decisions before battle, and reward choices after battle.

## Reward Choice

After combat, the player chooses 1 of 3 rewards.

Reward types:

- New skill
- Skill modifier
- Gold
- Relic
- Temporary blessing
- Heal
- Companion upgrade
- Eternal Soul interaction

## Decision Pacing

Small decision every 10-20 seconds:

- Pick loot
- Choose buff
- Upgrade skill
- Spend resource

Medium decision every 1-2 minutes:

- Shop purchase
- New skill package
- Companion choice
- Relic choice

Major decision every 5-10 minutes:

- Boss reward
- Hero evolution
- New companion slot
- Skilltree branch
- Eternal Soul destiny choice

## Run End

A run ends through:

- Hero death
- Boss victory
- Voluntary retirement after a milestone

Every run should produce at least one permanent history object:

- Eternal Soul
- Legacy trait
- Relationship
- Unlocked event
- New soul title

