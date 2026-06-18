# Prototype Data Model

This is an implementation-neutral model for the first playable prototype.

## Hero

```json
{
  "id": "hero_run_001",
  "name": "Ragnar",
  "classId": "warrior",
  "level": 1,
  "xp": 0,
  "traits": ["stubborn"],
  "skills": ["shield_slam"],
  "equipment": [],
  "relics": [],
  "stats": {
    "maxHealth": 120,
    "health": 120,
    "armor": 10,
    "power": 8,
    "speed": 1.0
  },
  "runStats": {
    "kills": 0,
    "damageDealt": 0,
    "damageTaken": 0,
    "healingDone": 0,
    "alliesSaved": 0
  }
}
```

## Hero Class

```json
{
  "id": "warrior",
  "name": "Warrior",
  "startingSkill": "shield_slam",
  "classMechanic": "rage",
  "skillTreeBranches": ["berserker", "guardian", "warlord"],
  "tags": ["frontline", "armor", "retaliation"]
}
```

## Skill

```json
{
  "id": "fireball",
  "name": "Fireball",
  "tags": ["spell", "fire", "projectile"],
  "baseCooldown": 3.0,
  "baseEffect": {
    "type": "damage",
    "amount": 18
  },
  "allowedModifiers": ["chain", "burn", "split", "giant", "echo"]
}
```

## Skill Instance

```json
{
  "id": "skill_instance_001",
  "baseSkillId": "fireball",
  "level": 2,
  "modifiers": ["chain", "burn"],
  "history": {
    "createdAtNode": "act1_combat_03",
    "kills": 14,
    "damageDealt": 420
  }
}
```

## Modifier

```json
{
  "id": "chain",
  "name": "Chain",
  "tagsAdded": ["multi_target"],
  "rules": [
    {
      "effect": "chain_to_nearby_enemy",
      "value": 2
    },
    {
      "effect": "damage_multiplier",
      "value": 0.75
    }
  ]
}
```

## Eternal Soul

```json
{
  "id": "soul_001",
  "name": "Ragnar",
  "title": "the Stubborn",
  "classId": "warrior",
  "originRun": 3,
  "levelAtDeath": 8,
  "cause": "fell_against_act2_boss",
  "definingTrait": "stubborn",
  "legacyTraitId": "unyielding_armor",
  "memoryLine": "Ragnar held the bridge long after his shield broke.",
  "finalBuild": {
    "skills": ["shield_slam", "taunting_roar", "iron_vow"],
    "modifiers": ["giant", "echo"],
    "relics": ["cracked_banner"]
  },
  "lifetimeStats": {
    "kills": 97,
    "damageDealt": 3040,
    "damageTaken": 5510,
    "alliesSaved": 6
  },
  "status": "remembered",
  "returnForms": ["companion", "mentor", "event"],
  "relationships": []
}
```

## Legacy Trait

```json
{
  "id": "unyielding_armor",
  "name": "Unyielding Armor",
  "sourcePattern": "high_damage_taken_survived_lethal",
  "mentorEffect": {
    "type": "start_combat_barrier",
    "value": 12
  },
  "companionEffect": {
    "type": "protect_lowest_health_ally",
    "cooldown": 8
  },
  "eventHooks": ["old_shield", "bridge_memory"]
}
```

## Run State

```json
{
  "runId": "run_004",
  "runNumber": 4,
  "activeHeroId": "hero_run_004",
  "act": 1,
  "nodeIndex": 0,
  "gold": 50,
  "mapSeed": "abc123",
  "currentPath": [],
  "availableSouls": ["soul_001"],
  "mentorSoulId": "soul_001",
  "companions": [],
  "flags": {}
}
```

## Save Profile

```json
{
  "profileId": "profile_001",
  "runCount": 4,
  "unlockedHeroClasses": ["warrior", "necromancer", "alchemist"],
  "unlockedSkills": ["shield_slam", "fireball", "raise_skeleton"],
  "unlockedModifiers": ["chain", "burn", "giant"],
  "eternalSouls": ["soul_001"],
  "pantheon": [],
  "eventUnlocks": ["old_shield"]
}
```

