# Napper Research And GrowUp Companion App Direction

Updated: 2026-06-17

## Executive Summary

Napper appears to be strongest in three areas:

1. Predictive sleep scheduling based on logged sleep and age.
2. Low-friction baby diary for sleep, breastfeeding, bottle feeding, diapers and related routines.
3. Parent-facing insight layer: trends, statistics, sleep sounds and educational content.

The exact Napper algorithm is not public. We should not try to copy it. The practical target is to build a transparent, explainable model that performs well enough in early use, then improves through logged data.

GrowUp can compete by combining Napper-like tracking with product/subscription context:

- Sleep, feeding and diaper tracking.
- Predictive nap windows.
- Age-based expectations and warnings.
- Box-linked tasks: choose next product, unlock book/audio/content, log milestones.
- A personalized child profile that becomes useful beyond sleep.

## Current Napper Metadata

Source: Apple iTunes Search API, Sweden, queried 2026-06-17.

- App name: `Napper: Sömnschema & dagbok`
- Seller: `Napper AB`
- Version: `6.52.1`
- Latest listed release date: `2026-05-22`
- Swedish App Store rating in API result: approximately `4.88`
- Rating count in API result: `5,782`
- App Store URL: https://apps.apple.com/se/app/napper-s%C3%B6mnschema-dagbok/id1491340863

Napper's app description claims:

- Personalized sleep schedule based on the baby's natural sleep pattern and child sleep research.
- The schedule adapts as the baby grows and sleep changes.
- Diary for sleep, breastfeeding, bottle feeding, diapers and more.
- Shared child/subscription access for multiple caregivers.
- Sleep sounds such as white noise, lullabies and nature sounds.
- Science-grounded article/course content about sleep routines.
- Trends and statistics such as average sleep, night wakes and breastfeeding duration.

## What Napper Probably Does

This is an inference from the public feature description, user-facing category and common baby sleep app patterns.

Napper likely combines:

- Child age.
- Recent wake time.
- Recent sleep duration.
- Typical wake windows for the child's age.
- Number of naps expected for the current age/stage.
- User-specific history: how long the child usually tolerates being awake, when naps usually happen, bedtime consistency, night waking.
- Feedback loop: if the child falls asleep earlier/later than predicted, adjust future predictions.

The key UX is not "exact science". The key UX is a confidence-building prediction: "next likely sleep window starts around 13:10".

## Evidence Base We Can Safely Use

### Sleep Duration

The American Academy of Sleep Medicine consensus statement recommends:

- 4-12 months: 12-16 hours per 24 hours, including naps.
- 1-2 years: 11-14 hours per 24 hours, including naps.
- 3-5 years: 10-13 hours per 24 hours.

The same statement explicitly excludes infants younger than 4 months because normal sleep duration and patterns vary widely and evidence is insufficient.

Product implication:

- For 0-3 months, avoid precise normative claims.
- For 4+ months, show ranges and trends, not hard pass/fail labels.

Source: https://aasm.org/resources/pdf/pediatricsleepdurationconsensus.pdf

### Safe Sleep

AAP safe sleep guidance emphasizes:

- Back sleeping.
- Own sleep space.
- Firm, flat mattress with fitted sheet.
- No loose blankets, pillows, stuffed toys, bumpers or soft items in the sleep space.
- Avoid couch/armchair/seating-device sleep except car seat use while riding.

Product implication:

- App sleep content must include safety guardrails.
- Generated images and product photography must not show unsafe newborn sleep setups.
- App should not imply that a device, product or algorithm prevents SIDS.

Source: https://www.aap.org/en/patient-care/safe-sleep/

### Feeding

CDC breastfeeding guidance says:

- In first days, babies may want to eat every 1-3 hours.
- In first weeks/months, exclusively breastfed babies commonly feed every 2-4 hours, sometimes hourly during cluster feeding.
- Babies typically breastfeed about 8-12 times in 24 hours.
- At first, babies need to eat every 2-4 hours and may need waking to feed.

Product implication:

- Feeding tracker must support breast, bottle, formula, expressed milk, mixed feeding and cluster feeding.
- It must not over-alert parents based only on averages.
- Concerns should route to healthcare provider guidance.

Source: https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/how-much-and-how-often.html

### Solids

CDC and AAP guidance says foods other than breast milk or formula are recommended at about 6 months, not before 4 months. Readiness signs include sitting with support, head/neck control, opening mouth for food, swallowing instead of pushing food out and bringing objects to mouth.

Product implication:

- Solid-food tracking should unlock around 6 months, with readiness checks.
- Food allergy, choking and texture guidance must be conservative and sourced.

Source: https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/when-what-and-how-to-introduce-solid-foods.html

## GrowUp Sleep Prediction Model

### MVP Rule-Based Model

Use a transparent model first. It is easier to test, explain and tune.

Inputs:

- Child birth date and corrected age if premature.
- Last wake time.
- Last nap start/end.
- Last night's sleep start/end.
- Number of naps today.
- Recent 7-day averages:
  - wake window before nap 1, 2, 3, etc.
  - nap length by nap index.
  - bedtime.
  - total sleep per 24 hours.
  - night wakes.
- Optional: parent-reported sleepy cues.
- Optional: feeding recency for newborns.

Outputs:

- Next sleep window start.
- Latest recommended start before likely overtiredness.
- Confidence level.
- Explanation: "Based on age, last wake time and Alma's last 7 days."

### Base Wake Window Table

Use this as a starting point only. Tune from logged data quickly.

| Age | Typical Nap Count | Wake Window Start Range |
|---|---:|---|
| 0-6 weeks | variable | 35-75 min |
| 6-12 weeks | variable | 60-90 min |
| 3-4 months | 4-5 | 75-120 min |
| 5-6 months | 3-4 | 2-3 h |
| 7-8 months | 2-3 | 2.5-3.5 h |
| 9-12 months | 2 | 3-4 h |
| 13-18 months | 1-2 | 3.5-5 h |
| 18-24 months | 1 | 5-6 h |

Do not present this table directly to users as medical truth. Use it internally as a prior.

### Prediction Formula

For a given nap index:

```text
base_window = age_prior[age_band][nap_index]
personal_window = median(user.last_7_valid_wake_windows[nap_index])
sleep_debt_adjustment = f(last_24h_sleep_vs_expected_range)
nap_quality_adjustment = f(last_nap_duration)
cue_adjustment = f(parent_sleepy_cue)

target_window = weighted_average(base_window, personal_window)
next_sleep_start = last_wake_time + target_window + adjustments
```

Initial weights:

- 0-3 logged days: 80% age prior, 20% user history.
- 4-10 logged days: 55% age prior, 45% user history.
- 11+ logged days: 30% age prior, 70% user history.

Confidence:

- High: consistent recent data, low variance, no missing key logs.
- Medium: enough logs but variable sleep.
- Low: newborn, sparse logs, sickness/travel/timezone change, abnormal day.

### Adjustment Rules

Short nap:

- If previous nap was under 35 minutes, reduce next wake window by 10-20%.

Long nap:

- If previous nap was long and child woke happy, allow normal or slightly longer window.

Poor night:

- If last night sleep is materially below child's 7-day average, shorten first wake window.

Late day:

- Avoid scheduling late naps that push bedtime too far unless child is under 4 months or clearly still on variable naps.

Newborn:

- Prioritize feed/sleep rhythm and sleepy cues.
- Avoid deterministic "schedule" language.

### Pseudocode

```ts
type SleepPrediction = {
  earliest: Date;
  target: Date;
  latest: Date;
  confidence: "low" | "medium" | "high";
  reasons: string[];
};

function predictNextSleepWindow(child, logs, now): SleepPrediction {
  const age = correctedAgeInDays(child, now);
  const lastWake = findLastWake(logs);
  const napIndex = napsToday(logs) + 1;
  const prior = wakeWindowPrior(age, napIndex);
  const history = medianWakeWindow(logs, napIndex, 7);
  const historyWeight = getHistoryWeight(logs);
  const base = blend(prior.target, history ?? prior.target, historyWeight);

  let targetMinutes = base;
  targetMinutes *= previousNapAdjustment(logs);
  targetMinutes *= sleepDebtAdjustment(child, logs);
  targetMinutes *= sleepyCueAdjustment(logs);

  return {
    earliest: addMinutes(lastWake, targetMinutes - prior.spread),
    target: addMinutes(lastWake, targetMinutes),
    latest: addMinutes(lastWake, targetMinutes + prior.spread),
    confidence: confidenceLevel(child, logs),
    reasons: buildReasons(child, logs, history)
  };
}
```

## Data Model For MVP

### Core Entities

`Child`

- id
- name
- birthDate
- correctedBirthDate optional
- avatar fields
- timezone

`Caregiver`

- id
- name
- role
- permissions

`Event`

- id
- childId
- type: sleep, feed, diaper, pump, solidFood, medicine, milestone, note
- startTime
- endTime optional
- source: manual, timer, imported, inferred
- metadata

`SleepEvent.metadata`

- sleepType: nap, night
- location optional
- settledBy optional
- wakeReason optional
- quality optional

`FeedEvent.metadata`

- feedType: breast, bottle, formula, expressedMilk, solids
- side: left, right, both optional
- amountMl optional
- duration optional
- foodItems optional

`Insight`

- type
- generatedAt
- validUntil
- confidence
- content
- sourceEvents

## UX Requirements To Match Or Beat Napper

### Must Have

- One-tap sleep timer.
- Manual sleep correction.
- Breastfeeding timer with side tracking.
- Bottle amount.
- Diaper wet/dirty/both.
- 24-hour timeline.
- Next nap prediction card.
- Today summary.
- 7-day trends.
- Multiple caregivers.
- Push notification before predicted sleep window.
- Safe sleep content surfaced at relevant moments.

### Should Have

- Sleep sounds.
- Age-based articles.
- Growth/milestone notes.
- Export/share summary for pediatric visit.
- Product box integration.
- Next box choice prompts.

### Differentiators For GrowUp

- The app is not only "track your baby"; it prepares the next physical product.
- The child profile affects both app content and books/products.
- Monthly box creates retention loops:
  - Month 2 snutte selection based on favorite animal.
  - Month 4 family book based on family profile.
  - Month 8 song cards based on logged favorite songs.
  - Month 12 memory book based on milestones.

## Safety, Compliance And Product Language

Do:

- "Predicted sleep window"
- "Typical for many babies this age"
- "Based on your recent logs"
- "If you are worried, contact your child's healthcare provider"

Avoid:

- "Your baby should sleep now"
- "Guaranteed better sleep"
- "Prevents SIDS"
- "Medical recommendation"
- "Normal/abnormal" without context

## MVP Build Plan

### Phase 1: Tracking Foundation

- Child profile.
- Shared caregivers.
- Event timeline.
- Sleep, feed, diaper logs.
- Basic daily summary.
- Local notifications.

### Phase 2: Prediction Engine

- Age-based wake window prior.
- 7-day personalization.
- Confidence scoring.
- "Why this prediction?" explanation.
- Parent feedback: too early, just right, too late.

### Phase 3: Subscription Integration

- Monthly product unlock.
- Next box selection.
- Book/audio content.
- Milestone capture for future personalized products.

### Phase 4: Insight Layer

- Sleep trend charts.
- Feeding trend charts.
- Night wakes and nap consistency.
- Pediatric export.
- Content recommendations based on age and patterns.

## Recommendation

Build the first version as a rules-plus-personalization model, not machine learning.

Reasons:

- Users need trust and explanations.
- We will not have enough clean data at launch.
- Medical-adjacent claims require restraint.
- A simple model can be tuned quickly from beta families.

After 1,000+ active children with consistent logs, evaluate statistical/ML improvements:

- Personalized wake-window regression.
- Nap transition detection.
- Anomaly detection for travel, sickness and growth spurts.
- Cohort comparison by age band.

