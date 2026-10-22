# Corpus extraction protocol (StoryPatternInstanceV1)

The deterministic extraction protocol used by `scripts/build_corpus.py` to convert raw aizhuiguang-scrape stories into `StoryRecord` entries committed to `src/lib/corpus-data/*.ts`.

## Input data shapes

Three story types, each with a different JSON shape:

### Manju drama (`data/generators/manju.dramas.jsonl`, 121 entries)

```jsonc
{
  "id": "slug",
  "title": ["zh", "EN"],            // bilingual
  "genre": "穿越爽剧 · 古装喜剧",
  "tagline": "one-line description",
  "totalEpisodes": 20,
  "durationSec": 15,
  "characters": [
    { "name": "...", "role": "男主·骑手本体", "tag": "hero|heroine|villain|cyan", "desc": "...", "visual": "..." }
  ],
  "synopsis": [
    { "phase": "【起】", "text": "..." },
    { "phase": "【分支】", "text": "..." },
    { "phase": "【结局】", "text": "N 种结局：A / B / C" }
  ],
  "tree": {
    "nodeId": { "type": "segment|choice|ending", "name": "...", "eps": [...], "options": [...], "next": "..." }
  },
  "episodes": { ... }
}
```

### Branch-drama (`data/generators/branch-drama.dramas.jsonl`, 20 entries)

```jsonc
{
  "key": "slug",
  "title": "...",
  "genre": "末日求生 · 双人逃亡",
  "logline": "...",
  "lanes": { "hard": "强攻线", "bear": "潜行线", "ally": "同心线" },
  "chars": [{ "n": "name", "d": "desc", "v": "voice profile" }],
  "scenes": [{ "n": "...", "d": "...", "k": ["keyword"] }],
  "choicesBC": { ... }
}
```

### Viral-scene (`data/generators/viral-scene.scenes.jsonl`, 118 entries)

```jsonc
{
  "categoryKey": "pro|tear|philo|...",
  "categoryName": "职业高光",
  "categoryEmoji": "🚒",
  "sceneName": "消防员火场救人",
  "why": "why it goes viral...",
  "act": "template with {hero}/{place}/{conflict}/{twist}/{line} placeholders",
  "pro": {                          // can be null for ~53/59 philo scenes
    "open":  { "shot": "...", "action": "...", "expr": "...", "line": "..." },
    "dev":   { ... },
    "climax": { ... },
    "lens": "...",
    "perform": "..."
  },
  "example": { "c": "conflict", "t": "twist", "h": "hero", "p": "place" },
  "plotLines": ["alternative line 1", "alternative line 2", ...]
}
```

## Extraction rules per type

### Manju → StoryRecord

- `family` + `familyKey`: from `genre` via `FAMILY_RULES` keyword classifier
- `subCluster`: from title+genre+tagline via `SUBCLUSTER_RULES` (5 families: life-philosophy / time-travel / rebirth-revenge / modern-rich / sweet-pet)
- `branchingType`: `'rigid-tree'`
- `branchingInfo`: `{ type, detail, choicePointCount, endingCount, totalPaths, segmentCount }` from `tree`
- `stages`: from `synopsis[]` (3 phases: 起→setup, 分支→rising-action, 结局→resolution)
- `archetypes`: from `characters[]` (tag → archetype: hero→protagonist, heroine→love-interest, villain→antagonist, cyan→map_support_archetype)
- `parameterSlotsFilled`: setting from chars[0].visual, protagonist from hero-tagged chars, antagonist from villain-tagged chars, centralConflict from tagline, stakes from synopsis[2].text, theme as INFERRED
- `climaxMode`: `'per-path'` (branching dramas have path-dependent climaxes)
- `invariants`: stages-length-range (2-12), turningPoint-slot-coverage, mandatory-roles-present (≥1 protag + ≥1 antag)

### Branch-drama → StoryRecord

- `branchingType`: `'multi-lane'`
- `branchingInfo`: `{ type, detail, laneCount }` (no choicePointCount — lanes are parallel, not nested)
- `stages`: from `scenes[]` (role by index: 0→setup, 1→rising-action, 2→midpoint, 3→crisis, 4→resolution)
- `archetypes`: from `chars[]` (index 0 → protagonist, index 1 → love-interest or ally depending on family, villain keyword → antagonist, else map_support_archetype)
- `parameterSlotsFilled.antagonist`: ENVIRONMENTAL for survival families, NONE for sweet-pet/comedy/healing, INFERRED otherwise
- `climaxMode`: `'per-lane'`

### Viral-scene → StoryRecord

- `family` + `familyKey`: from `categoryKey` (more reliable than genre for viral-scene)
- `branchingType`: `'linear'`
- `stages`: from `pro.{open,dev,climax}` if `pro` is populated; ELSE synthesized from `act` template split on `。` with `synthesizedFromTemplate: true` flag
- `archetypes`: only 1 (the hero from `example.h`)
- `parameterSlotsFilled.antagonist`: NONE for emotional categories (tear/pet/guofeng/comedy/philo), ENVIRONMENTAL for workplace/thriller, SITUATIONAL for everything else
- `climaxMode`: `'single'` if pro populated with climax phase, else `'absent'`
- `proWasNull`: true if `pro` was null
- `synthesizedStageCount`: count of stages with `synthesizedFromTemplate: true`

## Variant explosion rules

1 story → N variants:

- **Manju**: 1 variant per ending. Parse `synopsis[2].text` for "N 种结局：A / B / C" pattern; split on `[/;。,]` to get ending names. Fall back to "Ending N" if parsing fails. Each variant: `{ variantId: '{storyId}#ending-{N}', variantType: 'ending', variantLabel_zh: name, variantResolution_zh: name }`. Total: ~958 variants from 121 stories.

- **Branch-drama**: 1 variant per lane. Each variant: `{ variantId: '{storyId}#lane-{laneKey}', variantType: 'lane', variantLabel_zh: laneLabel, laneKey }`. Total: 60 variants from 20 stories.

- **Viral-scene**: 1 variant (linear, no explosion). Each variant: `{ variantId: '{storyId}#linear', variantType: 'linear', variantLabel_zh: title_zh }`. Total: 118 variants from 118 stories.

**Total: 1136 variants from 259 stories.**

## Determinism (for clean git diffs)

Sort all output:
- Stories by `id` (ascending string sort)
- Variants by `variantId` (ascending string sort)
- Counters (`byFamily`, `byAntagonistType`, etc.) by `(-count, key)` — descending count, then ascending key

Without sorting, upstream corpus reorders cascade into noisy TS diffs even when no semantic change.

## Edge cases

- **Manju with `total_paths == 1`** (no choice nodes): fingerprint becomes `rigid-tree|3|N|1cp-1e-1p` (NOT `0cp-0e-0p`). Don't collapse `total_paths = 1` to `0` — preserve the structural accuracy.
- **Manju with `synopsis` shorter than 3 phases**: `stakes` becomes `INFERRED: no 结局 phase`. Display this verbatim with ⚠ visual marker.
- **Branch-drama with `chars: []`**: produces empty `archetypes` and `protagonist = "INFERRED"`. `mandatory-roles-present` invariant fails.
- **Branch-drama with dual co-leads** (e.g. survival stories): second char becomes `ally` (not `love-interest`). Schema gap: no `coProtagonists` field — second lead is silently demoted.
- **Viral-scene with `pro: null`** (~53/59 philo scenes): synthesize 3 stages from `act` template. Set `synthesizedFromTemplate: true` on each stage, `proWasNull: true` + `synthesizedStageCount: 3` on the StoryRecord.
- **Viral-scene emotional categories with no antagonist**: `antagonist = "NONE"`. `mandatory-roles-present` invariant passes (per relaxed rule that allows NONE for non-conflict-driven stories).

## File emission pattern

Per story type, emit a TS file:

```typescript
// @generated — DO NOT EDIT. Regenerate via `python3 scripts/build_corpus.py`.

import type { StoryRecord, VariantInstance } from '@/lib/corpus-types'

export const MANJU_STORIES: StoryRecord[] = [
  { ... },
  ...
] as const

export const MANJU_VARIANTS: VariantInstance[] = [
  { ... },
  ...
] as const
```

Aggregator (`index.ts`):

```typescript
import type { CorpusData, CorpusStats, StoryRecord, VariantInstance } from '@/lib/corpus-types'
import { MANJU_STORIES, MANJU_VARIANTS } from './manju'
import { BRANCH_DRAMA_STORIES, BRANCH_DRAMA_VARIANTS } from './branch-drama'
import { VIRAL_SCENE_STORIES, VIRAL_SCENE_VARIANTS } from './viral-scene'

export const CORPUS_STORIES: StoryRecord[] = [
  ...MANJU_STORIES,
  ...BRANCH_DRAMA_STORIES,
  ...VIRAL_SCENE_STORIES,
] as const

export const CORPUS_VARIANTS: VariantInstance[] = [
  ...MANJU_VARIANTS,
  ...BRANCH_DRAMA_VARIANTS,
  ...VIRAL_SCENE_VARIANTS,
] as const

export const CORPUS_STATS: CorpusStats = { ... } as const

export const CORPUS_DATA: CorpusData = {
  stories: CORPUS_STORIES,
  variants: CORPUS_VARIANTS,
  stats: CORPUS_STATS,
} as const satisfies CorpusData
```

## See also

- `scripts/build_corpus.py` — the actual extractor
- `src/lib/corpus-types.ts` — the types
- `src/lib/corpus-data/*.ts` — the generated output (4 files, ~1.3MB total)
- `docs/decisions/2026-10-corpus-lab-static-redesign.md` — design decision + peer-review critique
