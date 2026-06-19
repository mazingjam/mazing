# DEVLOG

## 2026-06-15

- Created the initial local-first project structure.
- Added starter docs and a JSON card list.
- Current direction: files are the source of truth; a local web app can be added once the data shape feels stable.
- Added a hybrid workflow: raw dictation, refined docs, one file per concrete card, and an app-friendly JSON index.
- Captured first set-foundation dictation: draft-first, three-color non-green factions/guilds, green as special path, and `Building` as a new card type.
- Corrected RAM to Ravnica and captured first working rules model for Buildings.
- Updated Building rules: cannot attack, can block, deals combat damage, durability is persistent damage, and artifact/enchantment typing is optional.
- Updated Building rules: Buildings can block any attacking creature as though they were creatures, and can be targeted by any-target, permanent-target, or Building-target wording.
- Added candidate Building activation mechanic: abilities activated by tapping X creatures, with `Staff` / `Operate` as naming candidates.
- Added gold counters as the central set resource and `Wealth N` as a threshold mechanic based on gold counters among permanents you control.
- Split gold counters from gold costs: gold counters are ordinary counters, while `{Gold}` costs are paid by removing gold counters from permanents you control.
- Added `Doom` as a candidate mechanic that triggers when a card is put into a graveyard.
- Locked Doom to trigger from anywhere and added self-exile as the default safety recommendation.
- Added `Bribe` as an opponent-facing mechanic where opponents can pay card-defined costs to interfere with specified actions or effects.
- Refined Bribe toward a shorthand model: `Bribe [cost]: [outcome]`, where the keyword standardizes opponent payment but the card states the consequence.
- Added WBU faction profile: old money + government, focused on Wealth, gold counter interaction, and enchantment Buildings with optional `cannot block`.
- Added RWU faction profile: individualism + military + progress, with permanents upgraded by having gold counters.
- Added RBU faction profile with Bribe as its primary mechanical identity.
- Added WBR faction candidate profile with Human Citizen tokens as the current anchor and several possible theme directions.
- Decided not to add Debt as a separate resource; WBR debt uses gold counters and card text.
- Added green lane structure: GR, GU, and mono-green. Added WB as the humanity theme.
- Refined green structure: RGU is the natural three-color convergence; red and blue can be nature colors; black remains primarily civilization; GW and GB are outliers.
- Added pre-skeleton constraints: generate common/uncommon/rare staples per archetype, creature removal misses Buildings, Buildings are weak raw-rate gold/Staff engines, and civ factions have tapped gold-interaction tri-lands.
- Generated `cards/draft/archetype-staples-v1.md` with 99 first-pass staple cards: 3 commons, 3 uncommons, and 3 rares across 11 archetypes.
- Added a static mobile-friendly card browser in `app/` that reads `cards/draft/archetype-staples-v1.md`.
- Added local review marking to the card browser: cards can be toggled as "Needs rethink" and filtered by review state using browser localStorage.
- Added a persistent Node static server script for the mobile viewer: `app/server.mjs` and `app/start-mobile-server.ps1`.
- Added local inline editing and review export to the mobile card browser. Edits remain in browser localStorage until exported/applied.
- Added `docs/factions.md` with short lore and concept-art prompt direction for each current faction/archetype.
- Generated and saved faction concept art under `images/factions/`, and added a mobile faction gallery at `app/factions.html`.

## Next

- Define set theme, color identities, and mechanical pillars.
- Add 10-20 rough card concepts.
- Use `cards/draft/` for individual card files as ideas become concrete.
