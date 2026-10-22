// @generated — DO NOT EDIT. Regenerate via `python3 scripts/build_corpus.py`.

import type { CorpusData, CorpusStats, StoryRecord, VariantInstance } from '@/lib/corpus-types'
import { MANJU_STORIES, MANJU_VARIANTS } from './manju'
import { BRANCH_DRAMA_STORIES, BRANCH_DRAMA_VARIANTS } from './branch-drama'
import { VIRAL_SCENE_STORIES, VIRAL_SCENE_VARIANTS } from './viral-scene'

export { MANJU_STORIES, MANJU_VARIANTS, BRANCH_DRAMA_STORIES, BRANCH_DRAMA_VARIANTS, VIRAL_SCENE_STORIES, VIRAL_SCENE_VARIANTS }

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

export const CORPUS_STATS: CorpusStats = {
  "totalStories": 259,
  "totalVariants": 1136,
  "byStoryType": {
    "manju": 121,
    "viral-scene": 118,
    "branch-drama": 20
  },
  "byBranchingType": {
    "rigid-tree": 121,
    "linear": 118,
    "multi-lane": 20
  },
  "byFamily": {
    "other": 120,
    "modern-rich": 18,
    "xianxia": 18,
    "suspense": 17,
    "time-travel": 17,
    "rebirth-revenge": 16,
    "sweet-pet": 16,
    "republican": 15,
    "house-intrigue": 14,
    "survival": 2,
    "deep-sea-adventure": 1,
    "escape-room": 1,
    "extreme-delivery": 1,
    "identity-flip": 1,
    "monster-apocalypse": 1,
    "palace-intrigue": 1
  },
  "byAntagonistType": {
    "character": 135,
    "situational": 118,
    "environmental": 5,
    "none": 1
  },
  "byClimaxMode": {
    "per-path": 121,
    "single": 95,
    "absent": 23,
    "per-lane": 20
  },
  "topFingerprints": [
    {
      "fingerprint": "rigid-tree|3|6|4cp-8e-144p",
      "count": 119
    },
    {
      "fingerprint": "linear|3|1|linear",
      "count": 95
    },
    {
      "fingerprint": "linear|1|1|linear",
      "count": 20
    },
    {
      "fingerprint": "multi-lane|2|3|3lane",
      "count": 13
    },
    {
      "fingerprint": "multi-lane|2|2|3lane",
      "count": 4
    },
    {
      "fingerprint": "linear|2|1|linear",
      "count": 3
    },
    {
      "fingerprint": "multi-lane|2|1|3lane",
      "count": 2
    },
    {
      "fingerprint": "multi-lane|5|3|3lane",
      "count": 1
    },
    {
      "fingerprint": "rigid-tree|3|5|4cp-3e-54p",
      "count": 1
    },
    {
      "fingerprint": "rigid-tree|3|6|4cp-3e-54p",
      "count": 1
    }
  ],
  "invariantPassAll": 223,
  "invariantPartial": 36,
  "invariantFailAll": 0,
  "invariantPassRate": "223/259 (86%)"
} as const

export const CORPUS_DATA: CorpusData = {
  stories: CORPUS_STORIES,
  variants: CORPUS_VARIANTS,
  stats: CORPUS_STATS,
} as const satisfies CorpusData
