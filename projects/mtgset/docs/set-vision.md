# Set Vision

## Working Premise

Draft-first custom MTG set with an unusual color/faction structure:

- The main faction/guild structure is three-color.
- The faction model is Ravnica-inspired, but not a normal two-color guild structure.
- The main guilds/factions exclude green.
- Green has a special role outside that structure, with dual-color themes across the other colors and a mono-green path.
- The set introduces at least two new card types, one of which is `Building`.
- Gold counters are the central set theme/resource.
- `Wealth N` is a threshold mechanic based on the total number of gold counters among permanents you control.
- Gold costs are a new cost resource paid by removing gold counters from permanents you control.
- `Bribe` is an opponent-facing mechanic where opponents may pay a defined cost to interfere with actions or effects.

## Design Goals

- Make the set easy to browse, edit, and print locally.
- Keep card ideas structured enough for balancing and playtesting.
- Support art prompts and generated/reference images per card.

## Questions

- What is the world/theme?
- What emotions should each color pair express?
- Is this a draftable set, a cube-like set, commander-focused, or something else?
- How close should it stay to official Magic templating and power level?
- What exactly are the three-color guilds/factions?
- Why is green outside the main faction structure?
- How should green drafters function: splash color, open lane, anti-faction path, or environmental engine?

## Factions

### WBU: Old Money + Government

Esper-colored faction built around entrenched institutions, inherited wealth, bureaucracy, and formal authority.

Mechanical focus:

- `Wealth` rewards.
- Gold counter interaction.
- Enchantment Buildings.
- Some enchantment Buildings with `cannot block`, representing institutions that generate influence/value rather than physically defending.

### RWU: Individualism + Military + Progress

Jeskai-colored faction with an internal "America" design label: individualism, military identity, progress, ambition, and civic mythmaking.

Mechanical focus:

- Mixed use of the set's new mechanics.
- Permanents with gold counters become better.
- Gold counters represent upgrades, medals, funding, rank, patents, investment, or civic recognition.

### RBU: Bribe

Grixis-colored faction with `Bribe` as its primary mechanical identity.

Mechanical focus:

- Rewards or exploits `Bribe`.
- Can use gold costs and gold counters as bribe fuel.
- Needs flavor definition.

### WBR: Human Citizens

Mardu-colored civilization faction. Theme is still open.

Current candidate anchor:

- Human Citizen tokens.

Possible directions:

- Mass politics / populism.
- Church, public order, moral authority.
- Labor, debt, exploitation.

Mechanical focus candidates:

- Create Human Citizen tokens.
- Sacrifice or tap Citizens for value.
- Use Citizens to Staff Buildings.
- Connect Citizens to gold counters, Bribe, and Doom.

Debt is not currently a separate counter or resource. In WBR, debt is represented through gold counters and card text.

## Green Archetypes

Green exists outside the main non-green civilization faction structure.

Primary green lanes:

- GR.
- GU.
- Mono-green.

Natural three-color convergence:

- RGU.

Outlier lanes:

- GW tries to unite humanity and nature.
- GB goes hard on `Doom`.

Black should primarily remain tied to civilization factions, even though it can support Doom outliers.

## WB: Humanity

WB primarily handles humanity as a theme.

## Draft Generation Target

Initial generation target:

- Three common staples per archetype.
- Three uncommon staples per archetype.
- Three rare staples per archetype.

This is archetype-staple driven before filling a full set skeleton.

## Civ-Faction Lands

Each civilization faction has a tri-land.

Shared model:

- Enters tapped.
- Produces the faction's three colors.
- Has a gold counter interaction.
