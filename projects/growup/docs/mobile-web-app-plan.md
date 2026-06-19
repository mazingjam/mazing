# GrowUp Mobile Web App Plan

Updated: 2026-06-18

## Objective

Build a mobile-first web prototype that proves the GrowUp companion app concept.

The app should be useful enough to stand on its own as a baby tracker, but its strategic purpose is to increase conversion and retention for the GrowUp babybox subscription.

Core positioning:

- Napper-like utility for sleep, feeding, diaper and trend tracking.
- Stronger child profile and personalization layer.
- Direct connection to custom books, clothes, toys and monthly box selections.

## What The Napper Screens Show

The attached screenshots show a product with strong mobile execution:

- Dark, calm, sleep-oriented visual system.
- Circular 24-hour rhythm view for sleep/wake events.
- Persistent bottom navigation.
- A prominent central add button.
- Fast bottom-sheet logging.
- Timeline/list view for detailed event history.
- Statistics and trend views.
- Running sleep session controls.
- Event-type icons with clear colors.

This is the right interaction model for us to borrow conceptually. The implementation should be our own and should serve GrowUp's subscription loop.

## Product Strategy

Napper's center of gravity is sleep.

GrowUp's center of gravity should be:

1. Baby rhythm: sleep, feeding, diapers, routines.
2. Baby identity: appearance, family, preferences, favorite animals, songs, words.
3. Babybox journey: upcoming box, product choices, personalized book/shirt/toy inputs.

The app should collect useful personalization data as a natural part of tracking, not as a long form.

Example:

- When logging sleep: ask if a song helped.
- When logging solids: capture favorite food colors/flavors later for book content.
- When selecting month 2: favorite animal becomes both snutte choice and book character.
- When logging milestones: store them for the 12-month memory book.

## Recommended MVP Scope

### MVP Must Include

- Mobile-only responsive web app.
- Onboarding child profile.
- Visual baby avatar/profile card.
- Home/rhythm view.
- Fast add sheet.
- Sleep timer.
- Manual event logging.
- Timeline view.
- Day summary.
- Basic sleep prediction.
- Box journey view.
- Personalization profile view.

### MVP Should Exclude

- Native app code.
- ML-based sleep prediction.
- Push notification infrastructure unless using PWA notifications after prototype.
- Account/subscription billing integration.
- Real medical recommendations.
- Complex family sharing.

## Architecture Recommendation

Use a modern web stack that can later become a PWA.

Recommended:

- Vite + React + TypeScript.
- Local-first state for prototype.
- `localStorage` or IndexedDB for prototype persistence.
- CSS modules or plain CSS variables for speed.
- Charting with SVG/Recharts only where useful.
- No backend for first visual prototype.

Why:

- Fast to build and iterate.
- Good mobile web performance.
- Easy to host as landing-page companion demo.
- Can later be wrapped into Capacitor/React Native if needed.

## Information Architecture

Use five bottom tabs:

1. **Home**
   - Current sleep/wake state.
   - Circular day rhythm.
   - Next predicted nap.
   - Current running timer.
   - Upcoming box prompt.

2. **Sounds**
   - White noise, lullabies, book audio.
   - Later: personalized lullabies or book narration.

3. **Add**
   - Central action.
   - Opens bottom sheet with event types.

4. **Insights**
   - Sleep summary.
   - Food summary.
   - Trends.
   - Age-based expectations.

5. **Profile**
   - Baby avatar.
   - Child details.
   - Preferences.
   - Family.
   - Subscription/box settings.

## Key Screens

### 1. Onboarding

Purpose:

- Convert a website visitor into a personalized app demo.
- Collect only what is needed to make the first screen feel personal.

Fields:

- Baby name.
- Birth date or expected birth date.
- Premature/corrected age optional.
- Skin tone.
- Hair amount/style.
- Clothing color preference.
- Parent mode: own baby or gift.

Output:

- Baby profile.
- Month 1 book preview.
- First home dashboard.

### 2. Home / Rhythm

Purpose:

- Equivalent of Napper's main circular sleep dashboard, but with GrowUp-specific prompts.

Components:

- Top baby profile button.
- Baby age and current day.
- Circular 24-hour rhythm ring.
- Current status: asleep, awake, next nap, bedtime.
- Sleep prediction card.
- Running session card when timer is active.
- Upcoming GrowUp box prompt.

Example copy:

- "Likely nap window: 13:10-13:45"
- "Based on Alma's last 7 days and current wake time"
- "Month 2: choose Alma's snutte animal"

### 3. Add Sheet

Purpose:

- Fast logging. This must be the smoothest part of the prototype.

Events:

- Wake up.
- Nap.
- Bedtime.
- Night waking.
- Nursing.
- Bottle feeding.
- Pumping.
- Solids.
- Diaper change.
- Temperature.
- Medicine.
- Milestone.
- Preference.

GrowUp-specific addition:

- "Favorite today" event, for capturing animals, songs, colors, foods or words.

### 4. Event Detail Sheet

Purpose:

- Start timer or log manual event.

For nap:

- Start time.
- Optional end time.
- Settling state: easy, long time, upset.
- How: crib, stroller, held, nursing, bottle, carrier, next to me.
- Optional note.

For feeding:

- Type.
- Amount or duration.
- Side for nursing.
- Reaction.

For diaper:

- Wet, dirty, both.
- Note.

For preference:

- Favorite animal.
- Favorite song.
- Favorite object.
- Favorite color.
- New word/sound.

### 5. Timeline

Purpose:

- Detailed day history.

Layout:

- Date selector.
- Event cards grouped by day.
- Automatic contextual lines:
  - "End of 3h 58m wake window"
  - "End of 48m sleep session"

### 6. Insights

Purpose:

- Show value after a few days.

MVP charts:

- Total sleep per day.
- Nap count.
- Daytime sleep.
- Night sleep.
- Feeding count/amount.
- Diaper count.

GrowUp additions:

- "Personalization completeness" score.
- "Book inputs ready" checklist.
- "Next box choice ready" status.

### 7. Baby Profile

Purpose:

- This is where we diverge from Napper.

Sections:

- Baby basics.
- Avatar builder.
- Family members.
- Favorite animals.
- Favorite songs.
- Favorite objects.
- Favorite colors.
- Clothing sizes.
- Product sensitivities/allergies.
- Book personalization details.

This data should map directly to products:

- Book character.
- Snutte animal.
- Clothing print.
- Family book.
- First words book.
- Birthday memory book.

### 8. Box Journey

Purpose:

- Convert tracker engagement into subscription retention.

Components:

- Current box.
- Next box.
- Decision deadline.
- Selection card.
- Locked future boxes.
- Personalization checklist.

Example:

- "Month 2 ships in 8 days"
- "Choose Alma's snutte animal"
- "This choice may also appear in future books"

## Visual Direction

Use Napper's calm mobile interaction ideas, but not its exact styling.

Recommended GrowUp direction:

- Dark bedtime mode as default for sleep views.
- Lighter warm mode for profile and box journey.
- Circular rhythm view.
- Soft product-like icons.
- More visible baby avatar/profile than Napper.
- Fewer neon effects.
- Premium baby brand rather than pure sleep-tech.

Color system:

- Deep night: `#111029`
- Panel: `#211f45`
- Lavender action: `#9b8cff`
- Mint feeding: `#67e2bd`
- Coral waking/alert: `#ff7f72`
- Sunrise: `#f5bd63`
- Warm paper: `#fff7ea`
- Sage: `#8fa99a`

## Data Model

Prototype entities:

```ts
type ChildProfile = {
  id: string;
  name: string;
  birthDate: string;
  correctedBirthDate?: string;
  avatar: BabyAvatar;
  preferences: BabyPreferences;
  clothing: ClothingProfile;
  family: FamilyMember[];
};

type BabyAvatar = {
  skinTone: string;
  hairStyle: string;
  hairColor?: string;
  eyeColor?: string;
  outfitColor?: string;
};

type BabyPreferences = {
  animals: string[];
  songs: string[];
  colors: string[];
  objects: string[];
  foods: string[];
  words: string[];
};

type BabyEvent = {
  id: string;
  childId: string;
  type:
    | "wake"
    | "nap"
    | "bedtime"
    | "nightWaking"
    | "nursing"
    | "bottle"
    | "pumping"
    | "solids"
    | "diaper"
    | "temperature"
    | "medicine"
    | "milestone"
    | "preference";
  startTime: string;
  endTime?: string;
  metadata: Record<string, unknown>;
};

type BoxState = {
  currentMonth: number;
  nextShipmentDate: string;
  pendingChoices: BoxChoice[];
  completedInputs: string[];
};
```

## Sleep Prediction In Prototype

Use the rule-based model from `docs/napper-companion-app-research.md`.

Minimum implementation:

- Calculate age in days/months.
- Pick age-based wake window.
- Find last wake event.
- Count naps today.
- Adjust using last 7 days if data exists.
- Show earliest/target/latest sleep window.
- Show confidence.

Do not hide the reasoning.

User-facing explanation:

- "Based on age + today's wake time"
- "Will get smarter after 3 logged days"
- "Adjusted because the last nap was short"

## Conversion Strategy

The app should create subscription intent in three places:

1. Onboarding:
   - Show "your first book" preview after profile creation.

2. Home:
   - Show next monthly box as a useful upcoming task, not an ad.

3. Profile:
   - Show which personalization inputs unlock which products.

Example:

- Favorite animal unlocks Month 2 snutte.
- Family profile unlocks Month 4 family book.
- Favorite songs unlock Month 8 song cards.
- Milestones unlock Month 12 memory book.

## Prototype Build Phases

### Phase 1: Clickable Mobile Web Shell

Deliver:

- Mobile app layout.
- Bottom navigation.
- Home rhythm view.
- Add sheet.
- Timeline.
- Insights.
- Profile.
- Box journey.

No persistence required except mock state.

### Phase 2: Functional Local Prototype

Deliver:

- Add/edit events.
- Sleep timer.
- localStorage persistence.
- Basic sleep prediction.
- Generated timeline.
- Generated summary cards.

### Phase 3: GrowUp Personalization Layer

Deliver:

- Avatar builder.
- Preference capture.
- Product-input checklist.
- Box choice flow.
- Book preview integration.

### Phase 4: PWA Readiness

Deliver:

- Installable PWA.
- Offline state.
- Local notifications where browser-supported.
- Export/import test data.

## Recommended First Build

Build Phase 1 and Phase 2 together as a single prototype.

Target screens:

1. Home rhythm screen.
2. Add sheet.
3. Nap detail sheet.
4. Timeline screen.
5. Insights screen.
6. Profile and avatar screen.
7. Box journey screen.

Target behavior:

- Add nap/feeding/diaper events.
- Start/stop sleep timer.
- Update day ring.
- Update timeline.
- Update basic stats.
- Update next-nap prediction.
- Store everything locally.

## Acceptance Criteria

- Works well at 390 x 844 mobile viewport.
- No horizontal overflow.
- Bottom nav is reachable with thumb.
- Add sheet opens in under 200 ms in normal browser conditions.
- Sleep timer continues while navigating inside the app.
- Timeline updates after logging an event.
- Prediction changes after adding a sleep event.
- Profile changes update product personalization checklist.
- App can be tested without backend.

## Risks

- A circular timeline can become expensive if overbuilt. Use SVG/CSS first, not canvas unless needed.
- Sleep prediction can sound medical. Keep wording conservative.
- Too much profile collection upfront will hurt conversion. Collect basics first, preferences gradually.
- Dark UI can harm readability. Use strong contrast and large text.
- Web push/local notifications vary by browser and OS. Do not make them MVP-critical.

## Immediate Next Step

Create a separate `app-prototype/` web app rather than expanding the marketing page.

Recommended structure:

```text
app-prototype/
  index.html
  package.json
  src/
    App.tsx
    main.tsx
    data/mockData.ts
    domain/sleepPrediction.ts
    domain/stats.ts
    components/
    screens/
    styles/
```

If speed is more important than framework setup, start with static HTML/CSS/JS, then migrate to React once screen flow is validated.

Recommendation: use React + TypeScript now. The state interactions are complex enough that plain JS will become slower after the first few screens.

