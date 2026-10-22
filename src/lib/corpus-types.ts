/**
 * Refined StoryPattern schema (v2) — applied from the 259-story stress test.
 */

export type StoryType = 'manju' | 'branch-drama' | 'viral-scene'
export type BranchingType = 'rigid-tree' | 'multi-lane' | 'linear'
export type AntagonistType = 'character' | 'environmental' | 'situational' | 'societal' | 'internal' | 'none' | 'unknown'
export type ClimaxMode = 'single' | 'per-path' | 'per-lane' | 'absent'
export type StageRole = 'setup' | 'inciting-incident' | 'rising-action' | 'midpoint' | 'crisis' | 'climax' | 'falling-action' | 'resolution' | 'epilogue' | 'custom'

export interface BranchingInfo {
  type: BranchingType
  detail: string
  choicePointCount?: number
  endingCount?: number
  totalPaths?: number
  segmentCount?: number
  optionsPerChoice?: number[]
  laneCount?: number
  laneLabels?: { laneKey: string; laneLabel: string }[]
  sharedSkeleton?: boolean
  phaseCount?: number
  runtimeSec?: number
}

export interface PatternStageSlotV2 {
  slotId: string
  role: StageRole
  label_zh: string
  label_en?: string
  triggerConstraint_zh?: string
  payoffConstraint_zh?: string
  requiredArchetypeKeys?: string[]
  keyEvents?: string[]
  climaxMode?: ClimaxMode
  synthesizedFromTemplate?: boolean
}

export interface PatternArchetypeV2 {
  archetypeKey: string
  label_zh: string
  functionSummary_zh?: string
  mandatoryAtRoles?: StageRole[]
  selfMentored?: boolean
}

export interface PatternTurningPointV2 {
  pointKey: string
  label_zh: string
  slotId: string
  irreversibleChange_zh?: string
}

export interface ParameterSlotsFilledV2 {
  setting: string
  protagonist: string
  antagonist: string
  centralConflict: string
  stakes: string
  theme: string
}

export interface InvariantResult {
  code: string
  spec?: string
  actualLength?: number
  passed: boolean
  missingRoles?: string[]
  orphanTurningPoints?: string[]
}

export interface StoryRecord {
  id: string
  storyType: StoryType
  title_zh: string
  title_en: string
  genre: string
  tagline: string
  categoryKey?: string
  categoryName?: string
  categoryEmoji?: string
  family: string
  familyKey: string
  subCluster?: string
  branchingInfo: BranchingInfo
  stageCount: number
  archetypeCount: number
  characterCount?: number
  stageRoles: StageRole[]
  archetypeKeys: string[]
  stages: {
    slotId: string
    role: StageRole
    label_zh: string
    triggerConstraint_zh?: string
    synthesizedFromTemplate?: boolean  // A12: was this stage synthesized from act template?
  }[]
  archetypes: { archetypeKey: string; label_zh: string; functionSummary_zh?: string }[]
  parameterSlotsFilled: ParameterSlotsFilledV2
  antagonistType: AntagonistType
  climaxMode: ClimaxMode
  invariantSummary: {
    stagesLengthRange: boolean | null
    turningPointSlotCoverage: boolean | null
    mandatoryRolesPresent: boolean | null
  }
  invariantPassCount: number
  invariantTotal: number
  gapCount: number
  topGap: string
  allGaps: string[]
  patternFingerprint: string
  variantCount: number
  proWasNull?: boolean  // A12: viral-scene stories where pro field was null (stages synthesized from act)
  synthesizedStageCount?: number  // A12: count of stages synthesized from act template
}

export type VariantType = 'ending' | 'lane' | 'linear'

export interface VariantInstance {
  variantId: string
  storyId: string
  variantType: VariantType
  variantIndex: number
  variantLabel_zh: string
  variantLabel_en?: string
  laneKey?: string
  variantResolution_zh?: string  // A4: ending-specific resolution text (manju)
  variantLaneScenes?: { slotId: string; label_zh: string }[]  // A4: lane-specific scene labels (branch-drama)
}

export interface CorpusStats {
  totalStories: number
  totalVariants: number
  byStoryType: Record<StoryType, number>
  byBranchingType: Record<BranchingType, number>
  byFamily: Record<string, number>
  byAntagonistType: Record<AntagonistType, number>
  byClimaxMode: Record<ClimaxMode, number>
  topFingerprints: { fingerprint: string; count: number }[]
  invariantPassAll: number
  invariantPartial: number
  invariantFailAll: number
  invariantPassRate: string
}

export interface CorpusData {
  stories: StoryRecord[]
  variants: VariantInstance[]
  stats: CorpusStats
}
