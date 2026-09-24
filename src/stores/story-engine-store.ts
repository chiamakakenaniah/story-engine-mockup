/**
 * STORY ENGINE · 故事引擎 — Client State Store (Zustand)
 * --------------------------------------------------------
 * Subagent A owns the foundational state for sections 1-3:
 *   - selectedReferenceIds  (DistillationSection)
 *   - distillationJob       (DistillationSection)
 *   - aggregationJob        (AggregationSection)
 *   - tourActive / tourStep (tour stub; Subagent B extends)
 *
 * Subagent B owns the rest:
 *   - selectedPatternId + parameterBindings   (Pattern Library + Reverse-Gen)
 *   - reverseGenJob + producedOutline           (Reverse-Generation)
 *   - multiProductJobs                          (Multi-Product)
 *   - libraryFilters                            (Pattern Library)
 *   - tourSteps + TOUR_STEPS                    (Tour overlay wiring)
 *
 * Add new slices here rather than creating a second store.
 * Keep all state serializable (no functions, no class instances).
 */

'use client'

import { create } from 'zustand'
import type {
  DistillationJob,
  OutlineNode,
  PatternProvenance,
  ReferenceDocument,
} from '@/lib/story-engine-data'
import {
  BUILT_IN_PATTERNS,
  DISTILLED_PATTERNS,
  AGGREGATED_PATTERNS,
  SAMPLE_REFERENCES,
} from '@/lib/story-engine-data'

/* -------------------------------------------------------------------------- */
/*  TYPES                                                                     */
/* -------------------------------------------------------------------------- */

export type DistillationStage =
  | 'idle'
  | 'chunking'
  | 'analyzing'
  | 'lifting'
  | 'validating'
  | 'sealing'
  | 'done'

export type AggregationStage =
  | 'idle'
  | 'drawing-lines'
  | 'building-meta'
  | 'done'

export type ReverseGenStage =
  | 'idle'
  | 'resolving-stages'
  | 'generating-nodes'
  | 'tagging-slot-ids'
  | 'done'

export type ProductKind =
  | 'novel'
  | 'short-novel'
  | 'screenplay'
  | 'comic'
  | 'motion-drama'
  | 'ttrpg'

export const ALL_PRODUCT_KINDS: ProductKind[] = [
  'novel',
  'short-novel',
  'screenplay',
  'comic',
  'motion-drama',
  'ttrpg',
]

export type LibraryProvenanceFilter = PatternProvenance | 'all'

export interface LibraryFilters {
  familyKey: string | 'all'
  provenance: LibraryProvenanceFilter
  searchQuery: string
}

export interface TourState {
  active: boolean
  step: number
  totalSteps: number
}

/** One tour step — target section id + bilingual copy. */
export interface TourStep {
  targetId: string
  titleEn: string
  titleZh: string
  bodyEn: string
  bodyZh: string
}

/* -------------------------------------------------------------------------- */
/*  TOUR STEP DEFINITIONS  (Subagent B — wired to TourOverlay)               */
/* -------------------------------------------------------------------------- */

export const TOUR_STEPS: TourStep[] = [
  {
    targetId: 'hero',
    titleEn: 'Welcome',
    titleZh: '欢迎',
    bodyEn:
      'This is a vision mockup of a Story Engine. Click Next to walk the flow.',
    bodyZh: '这是故事引擎的概念原型。点击下一步走过整个流程。',
  },
  {
    targetId: 'distillation',
    titleEn: 'Distillation',
    titleZh: '提炼',
    bodyEn:
      'Drop a finished novel here. The engine distills it into a parametrized pattern template.',
    bodyZh: '在此拖入一部已完成的小说。引擎将其提炼为参数化的模式模板。',
  },
  {
    targetId: 'aggregation',
    titleEn: 'Aggregation',
    titleZh: '聚合',
    bodyEn:
      'Cluster N distilled patterns to surface recurring stages as a meta-pattern with statistical weights.',
    bodyZh: '将 N 个提炼模式聚类，浮现复现阶段为带统计权重的元模式。',
  },
  {
    targetId: 'library',
    titleEn: 'Pattern Library',
    titleZh: '模式库',
    bodyEn:
      "Built-in canon (Save the Cat, Hero's Journey, 起承转合) + your distilled + your aggregated.",
    bodyZh: '内置经典（救猫咪、英雄之旅、起承转合）+ 你的提炼 + 你的聚合。',
  },
  {
    targetId: 'reverse-gen',
    titleEn: 'Reverse-Generation',
    titleZh: '反向生成',
    bodyEn:
      'Pick a pattern, fill 6 parameter slots, get a tagged outline tree.',
    bodyZh: '选择模式，填写 6 个参数槽，得到带标签的大纲树。',
  },
  {
    targetId: 'multi-product',
    titleEn: 'Multi-Product',
    titleZh: '多产品',
    bodyEn:
      'Same pattern + bindings drives 6 different product outputs.',
    bodyZh: '同一模式加绑定驱动 6 种不同产品输出。',
  },
]

/* -------------------------------------------------------------------------- */
/*  STORE INTERFACE                                                           */
/* -------------------------------------------------------------------------- */

interface StoryEngineState {
  /* ----- Distillation (Section 2) ----- */
  selectedReferenceIds: string[]
  toggleReference: (id: string) => void
  setReferences: (ids: string[]) => void
  distillationJob: DistillationJob
  setDistillationStage: (
    stage: DistillationStage,
    progress: number,
    producedPatternId?: string,
  ) => void
  resetDistillation: () => void

  /* ----- Aggregation (Section 3) ----- */
  aggregationJob: {
    status: AggregationStage
    progress: number
    producedMetaPatternId: string | null
  }
  setAggregationStage: (
    stage: AggregationStage,
    progress: number,
    producedMetaPatternId?: string,
  ) => void
  resetAggregation: () => void

  /* ----- Tour (Subagent B — fully wired to TourOverlay) ----- */
  tour: TourState
  tourSteps: TourStep[]
  startTour: () => void
  endTour: () => void
  nextTourStep: () => void
  prevTourStep: () => void
  goToTourStep: (step: number) => void

  /* ----- Subagent B extension slots (Pattern Library + Reverse-Gen + Multi-Product) ----- */
  selectedPatternId: string | null
  setSelectedPatternId: (id: string | null) => void
  parameterBindings: Partial<
    Record<
      'setting' | 'protagonist' | 'antagonist' | 'centralConflict' | 'stakes' | 'theme',
      string
    >
  >
  setParameterBinding: (
    key: keyof NonNullable<StoryEngineState['parameterBindings']>,
    value: string,
  ) => void
  clearParameterBindings: () => void

  /* ----- Reverse-Generation (Section 5) ----- */
  reverseGenJob: {
    status: ReverseGenStage
    progress: number
    producedOutlineId: string | null
  }
  producedOutline: OutlineNode[]
  adoptedOutlineId: string | null
  setReverseGenStage: (
    stage: ReverseGenStage,
    progress: number,
    producedOutlineId?: string,
  ) => void
  setProducedOutline: (nodes: OutlineNode[]) => void
  adoptOutline: (id: string) => void
  resetReverseGen: () => void

  /* ----- Multi-Product (Section 6) ----- */
  multiProductJobs: Record<
    ProductKind,
    { status: 'idle' | 'running' | 'done'; progress: number; producedArtifactId: string | null }
  >
  setMultiProductJob: (
    kind: ProductKind,
    partial: {
      status?: 'idle' | 'running' | 'done'
      progress?: number
      producedArtifactId?: string | null
    },
  ) => void
  resetMultiProductJobs: () => void

  /* ----- Pattern Library filters (Section 4) ----- */
  libraryFilters: LibraryFilters
  setLibraryFilter: <K extends keyof LibraryFilters>(
    key: K,
    value: LibraryFilters[K],
  ) => void
  resetLibraryFilters: () => void
}

/* -------------------------------------------------------------------------- */
/*  INITIAL VALUES                                                            */
/* -------------------------------------------------------------------------- */

const DEFAULT_SELECTED_IDS = DISTILLED_PATTERNS.map((p) => p.sourceReferenceIds?.[0]).filter(
  Boolean,
) as string[]

const DEFAULT_DISTILLATION_JOB: DistillationJob = {
  id: 'job-distill-default',
  referenceIds: DEFAULT_SELECTED_IDS,
  status: 'idle',
  progress: 0,
}

const DEFAULT_AGGREGATION_JOB = {
  status: 'idle' as AggregationStage,
  progress: 0,
  producedMetaPatternId: null as string | null,
}

const DEFAULT_TOUR: TourState = {
  active: false,
  step: 0,
  totalSteps: TOUR_STEPS.length,
}

// Default selected pattern — Save the Cat — so Reverse-Gen + Multi-Product
// always have something to render on first paint.
const DEFAULT_SELECTED_PATTERN_ID = BUILT_IN_PATTERNS[0]?.id ?? null

const DEFAULT_REVERSE_GEN_JOB = {
  status: 'idle' as ReverseGenStage,
  progress: 0,
  producedOutlineId: null as string | null,
}

const DEFAULT_MULTI_PRODUCT_JOBS: Record<
  ProductKind,
  { status: 'idle' | 'running' | 'done'; progress: number; producedArtifactId: string | null }
> = ALL_PRODUCT_KINDS.reduce(
  (acc, kind) => {
    acc[kind] = { status: 'idle', progress: 0, producedArtifactId: null }
    return acc
  },
  {} as Record<
    ProductKind,
    { status: 'idle' | 'running' | 'done'; progress: number; producedArtifactId: string | null }
  >,
)

const DEFAULT_LIBRARY_FILTERS: LibraryFilters = {
  familyKey: 'all',
  provenance: 'all',
  searchQuery: '',
}

/* -------------------------------------------------------------------------- */
/*  STORE IMPL                                                                */
/* -------------------------------------------------------------------------- */

export const useStoryEngineStore = create<StoryEngineState>((set) => ({
  /* ----- Distillation ----- */
  selectedReferenceIds: DEFAULT_SELECTED_IDS,
  toggleReference: (id) =>
    set((state) => {
      const isSelected = state.selectedReferenceIds.includes(id)
      const next = isSelected
        ? state.selectedReferenceIds.filter((x) => x !== id)
        : [...state.selectedReferenceIds, id]
      return {
        selectedReferenceIds: next,
        distillationJob: {
          ...state.distillationJob,
          referenceIds: next,
        },
      }
    }),
  setReferences: (ids) =>
    set((state) => ({
      selectedReferenceIds: ids,
      distillationJob: { ...state.distillationJob, referenceIds: ids },
    })),

  distillationJob: DEFAULT_DISTILLATION_JOB,
  setDistillationStage: (stage, progress, producedPatternId) =>
    set((state) => ({
      distillationJob: {
        ...state.distillationJob,
        status: stage,
        progress,
        producedPatternId: producedPatternId ?? state.distillationJob.producedPatternId,
      },
    })),
  resetDistillation: () =>
    set((state) => ({
      distillationJob: {
        ...DEFAULT_DISTILLATION_JOB,
        referenceIds: state.selectedReferenceIds,
      },
    })),

  /* ----- Aggregation ----- */
  aggregationJob: DEFAULT_AGGREGATION_JOB,
  setAggregationStage: (stage, progress, producedMetaPatternId) =>
    set((state) => ({
      aggregationJob: {
        status: stage,
        progress,
        producedMetaPatternId:
          producedMetaPatternId ?? state.aggregationJob.producedMetaPatternId,
      },
    })),
  resetAggregation: () =>
    set({
      aggregationJob: { ...DEFAULT_AGGREGATION_JOB },
    }),

  /* ----- Tour (fully wired) ----- */
  tour: DEFAULT_TOUR,
  tourSteps: TOUR_STEPS,
  startTour: () => set((state) => ({ tour: { ...state.tour, active: true, step: 0 } })),
  endTour: () => set((state) => ({ tour: { ...state.tour, active: false } })),
  nextTourStep: () =>
    set((state) => ({
      tour: {
        ...state.tour,
        step: Math.min(state.tour.step + 1, state.tour.totalSteps - 1),
      },
    })),
  prevTourStep: () =>
    set((state) => ({
      tour: { ...state.tour, step: Math.max(state.tour.step - 1, 0) },
    })),
  goToTourStep: (step) =>
    set((state) => ({
      tour: {
        ...state.tour,
        step: Math.max(0, Math.min(step, state.tour.totalSteps - 1)),
      },
    })),

  /* ----- Subagent B extension slots ----- */
  selectedPatternId: DEFAULT_SELECTED_PATTERN_ID,
  setSelectedPatternId: (id) => set({ selectedPatternId: id }),
  parameterBindings: {},
  setParameterBinding: (key, value) =>
    set((state) => ({
      parameterBindings: { ...state.parameterBindings, [key]: value },
    })),
  clearParameterBindings: () => set({ parameterBindings: {} }),

  /* ----- Reverse-Generation ----- */
  reverseGenJob: DEFAULT_REVERSE_GEN_JOB,
  producedOutline: [],
  adoptedOutlineId: null,
  setReverseGenStage: (stage, progress, producedOutlineId) =>
    set((state) => ({
      reverseGenJob: {
        status: stage,
        progress,
        producedOutlineId: producedOutlineId ?? state.reverseGenJob.producedOutlineId,
      },
    })),
  setProducedOutline: (nodes) => set({ producedOutline: nodes }),
  adoptOutline: (id) => set({ adoptedOutlineId: id }),
  resetReverseGen: () =>
    set({
      reverseGenJob: { ...DEFAULT_REVERSE_GEN_JOB },
      producedOutline: [],
    }),

  /* ----- Multi-Product ----- */
  multiProductJobs: DEFAULT_MULTI_PRODUCT_JOBS,
  setMultiProductJob: (kind, partial) =>
    set((state) => ({
      multiProductJobs: {
        ...state.multiProductJobs,
        [kind]: { ...state.multiProductJobs[kind], ...partial },
      },
    })),
  resetMultiProductJobs: () =>
    set({
      multiProductJobs: {
        ...ALL_PRODUCT_KINDS.reduce(
          (acc, kind) => {
            acc[kind] = { status: 'idle', progress: 0, producedArtifactId: null }
            return acc
          },
          {} as Record<
            ProductKind,
            { status: 'idle' | 'running' | 'done'; progress: number; producedArtifactId: string | null }
          >,
        ),
      },
    }),

  /* ----- Pattern Library filters ----- */
  libraryFilters: DEFAULT_LIBRARY_FILTERS,
  setLibraryFilter: (key, value) =>
    set((state) => ({
      libraryFilters: { ...state.libraryFilters, [key]: value },
    })),
  resetLibraryFilters: () =>
    set({
      libraryFilters: { ...DEFAULT_LIBRARY_FILTERS },
    }),
}))

/* -------------------------------------------------------------------------- */
/*  SELECTORS                                                                 */
/* -------------------------------------------------------------------------- */

/** Convenience selector: get the meta-pattern produced by aggregation. */
export function selectAggregatedMetaPattern() {
  return AGGREGATED_PATTERNS[0] ?? null
}

/** Convenience selector: get the currently selected references as objects. */
export function selectSelectedReferences(state: StoryEngineState): ReferenceDocument[] {
  return SAMPLE_REFERENCES.filter((r) => state.selectedReferenceIds.includes(r.id))
}

/** Convenience selector: get the currently selected pattern object. */
export function selectSelectedPattern(state: StoryEngineState) {
  if (!state.selectedPatternId) return null
  return (
    BUILT_IN_PATTERNS.find((p) => p.id === state.selectedPatternId) ??
    DISTILLED_PATTERNS.find((p) => p.id === state.selectedPatternId) ??
    AGGREGATED_PATTERNS.find((p) => p.id === state.selectedPatternId) ??
    null
  )
}
