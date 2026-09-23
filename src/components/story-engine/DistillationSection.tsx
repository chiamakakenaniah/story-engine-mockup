'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BookText, CheckCircle2, Loader2, Play, RotateCcw } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { toast } from 'sonner'
import {
  DISTILLED_PATTERNS,
  SAMPLE_REFERENCES,
  findPatternById,
  findReferenceById,
} from '@/lib/story-engine-data'
import type { DistillationJob } from '@/lib/story-engine-data'
import { DistilledPatternCard } from './DistilledPatternCard'
import {
  useStoryEngineStore,
  type DistillationStage,
} from '@/stores/story-engine-store'

/* -------------------------------------------------------------------------- */
/*  5-stage distillation pipeline                                             */
/* -------------------------------------------------------------------------- */

const STAGES: Array<{
  key: DistillationStage
  labelEn: string
  labelZh: string
  range: [number, number]
}> = [
  {
    key: 'chunking',
    labelEn: 'Chunking chapters…',
    labelZh: '分章节切分中…',
    range: [0, 20],
  },
  {
    key: 'analyzing',
    labelEn: 'Running 13-dim analysis…',
    labelZh: '13 维分析中…',
    range: [20, 50],
  },
  {
    key: 'lifting',
    labelEn: 'Lifting observations to template…',
    labelZh: '提炼为模板中…',
    range: [50, 75],
  },
  {
    key: 'validating',
    labelEn: 'Validating invariants…',
    labelZh: '校验不变量中…',
    range: [75, 95],
  },
  {
    key: 'sealing',
    labelEn: 'Sealing pattern…',
    labelZh: '封存模式中…',
    range: [95, 100],
  },
]

/* -------------------------------------------------------------------------- */
/*  Reference card — drop-zone item                                           */
/* -------------------------------------------------------------------------- */

function ReferenceCard({
  referenceId,
  selected,
  onToggle,
}: {
  referenceId: string
  selected: boolean
  onToggle: () => void
}) {
  const ref = findReferenceById(referenceId)
  if (!ref) return null

  const langLabel: Record<typeof ref.lang, string> = {
    en: 'EN',
    zh: '中',
    ja: '日',
    de: 'DE',
  }

  return (
    <motion.label
      htmlFor={`ref-${ref.id}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18 }}
      className={[
        'group relative cursor-pointer rounded-lg p-4 transition-colors',
        'flex flex-col gap-2',
        selected
          ? 'bg-bg-subtle border-accent/60'
          : 'bg-bg-elevated border-fg-faint/30 hover:border-accent/40',
      ].join(' ')}
      style={{
        backgroundColor: selected ? 'var(--bg-subtle)' : 'var(--bg-elevated)',
        border: `1px solid ${
          selected
            ? 'color-mix(in oklab, var(--accent) 55%, transparent)'
            : 'color-mix(in oklab, var(--fg-faint) 30%, transparent)'
        }`,
      }}
    >
      {/* Selection checkbox */}
      <div className="absolute top-3 right-3 flex items-center gap-2">
        <Checkbox
          id={`ref-${ref.id}`}
          checked={selected}
          onCheckedChange={onToggle}
          aria-label={`Select ${ref.title.en}`}
        />
      </div>

      {/* Lang tag */}
      <div className="flex items-center gap-1.5">
        <span
          className="font-mono-editorial text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded"
          style={{
            color: 'var(--accent)',
            backgroundColor: 'color-mix(in oklab, var(--accent-muted) 35%, transparent)',
          }}
        >
          {langLabel[ref.lang]}
        </span>
        <span
          className="font-mono-editorial text-[10px]"
          style={{ color: 'var(--fg-faint)' }}
        >
          {ref.year}
        </span>
      </div>

      {/* Title */}
      <h4
        className="font-serif-headline text-base font-bold leading-tight pr-7"
        style={{ color: 'var(--fg)' }}
      >
        {ref.title.en}
      </h4>
      <p
        className="font-sans-zh text-sm"
        style={{ color: 'var(--accent)' }}
      >
        {ref.title.zh}
      </p>

      {/* Author / genre */}
      <div
        className="text-[11px] leading-snug"
        style={{ color: 'var(--fg-muted)' }}
      >
        <p>{ref.author}</p>
        <p className="font-sans-zh">
          {ref.genre.en} · {ref.genre.zh}
        </p>
      </div>

      {/* Footer: char count */}
      <div
        className="mt-1 pt-2 border-t flex items-center justify-between text-[10px] font-mono-editorial"
        style={{
          borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
          color: 'var(--fg-faint)',
        }}
      >
        <span>{ref.totalChars.toLocaleString()} chars · 字</span>
        {selected && (
          <CheckCircle2
            className="size-3.5"
            style={{ color: 'var(--accent)' }}
          />
        )}
      </div>
    </motion.label>
  )
}

/* -------------------------------------------------------------------------- */
/*  Distillation progress card                                                */
/* -------------------------------------------------------------------------- */

function DistillationProgress({
  job,
  currentStageIdx,
}: {
  job: DistillationJob
  currentStageIdx: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="card-editorial p-5 sm:p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <Loader2
          className="size-4 animate-spin"
          style={{ color: 'var(--accent)' }}
        />
        <span
          className="font-mono-editorial text-xs uppercase tracking-wider"
          style={{ color: 'var(--accent)' }}
        >
          Distilling · 提炼中
        </span>
        <span
          className="font-mono-editorial text-xs ml-auto"
          style={{ color: 'var(--fg-muted)' }}
        >
          {Math.round(job.progress)}%
        </span>
      </div>

      <Progress
        value={job.progress}
        className="h-2"
        style={{
          backgroundColor: 'var(--bg-subtle)',
        }}
      />

      <ul className="mt-4 space-y-2">
        {STAGES.map((stage, idx) => {
          const isDone = idx < currentStageIdx
          const isActive = idx === currentStageIdx
          const isPending = idx > currentStageIdx
          return (
            <li
              key={stage.key}
              className="flex items-center gap-3 text-sm"
              style={{
                opacity: isPending ? 0.4 : 1,
              }}
            >
              <span
                className="size-5 rounded-full flex items-center justify-center shrink-0"
                style={{
                  border: `1px solid ${
                    isDone
                      ? 'var(--success)'
                      : isActive
                        ? 'var(--accent)'
                        : 'var(--fg-faint)'
                  }`,
                  backgroundColor: isDone
                    ? 'var(--success)'
                    : 'transparent',
                }}
              >
                {isDone ? (
                  <CheckCircle2
                    className="size-3"
                    style={{ color: 'var(--bg)' }}
                  />
                ) : isActive ? (
                  <Loader2
                    className="size-3 animate-spin"
                    style={{ color: 'var(--accent)' }}
                  />
                ) : (
                  <span
                    className="size-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--fg-faint)' }}
                  />
                )}
              </span>
              <span
                className="font-sans-zh"
                style={{
                  color: isActive
                    ? 'var(--fg)'
                    : isDone
                      ? 'var(--fg-muted)'
                      : 'var(--fg-faint)',
                }}
              >
                {stage.labelEn}
              </span>
              <span
                className="font-sans-zh text-xs"
                style={{ color: 'var(--fg-faint)' }}
              >
                {stage.labelZh}
              </span>
              <span
                className="ml-auto font-mono-editorial text-[10px]"
                style={{ color: 'var(--fg-faint)' }}
              >
                {stage.range[0]}–{stage.range[1]}%
              </span>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  MAIN — DistillationSection                                                */
/* -------------------------------------------------------------------------- */

export function DistillationSection() {
  const selectedReferenceIds = useStoryEngineStore((s) => s.selectedReferenceIds)
  const toggleReference = useStoryEngineStore((s) => s.toggleReference)
  const distillationJob = useStoryEngineStore((s) => s.distillationJob)
  const setDistillationStage = useStoryEngineStore((s) => s.setDistillationStage)
  const resetDistillation = useStoryEngineStore((s) => s.resetDistillation)

  const [currentStageIdx, setCurrentStageIdx] = useState<number>(-1)
  const [resultPatternId, setResultPatternId] = useState<string | null>(null)
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    return () => {
      // Cleanup any pending timeouts when unmounting
      timeoutsRef.current.forEach((t) => clearTimeout(t))
    }
  }, [])

  // Pick the distilled pattern that corresponds to the first selected reference.
  // (Mockup behavior: distillation of any single reference yields its
  //  pre-distilled pattern.)
  const pickPatternForSelection = useCallback((): string | null => {
    if (selectedReferenceIds.length === 0) return null
    // Use first selected reference
    const refId = selectedReferenceIds[0]
    const match = DISTILLED_PATTERNS.find((p) =>
      p.sourceReferenceIds?.includes(refId),
    )
    return match?.id ?? null
  }, [selectedReferenceIds])

  const runDistillation = useCallback(() => {
    if (selectedReferenceIds.length === 0) {
      toast.error('Select at least one reference · 请至少选择一个源作品', {
        duration: 3000,
      })
      return
    }

    const producedId = pickPatternForSelection()
    if (!producedId) {
      toast.error('No matching pre-distilled pattern in mockup · 模拟无对应预提炼模式', {
        duration: 3000,
      })
      return
    }

    // Clear any prior timeouts
    timeoutsRef.current.forEach((t) => clearTimeout(t))
    timeoutsRef.current = []
    setResultPatternId(null)

    const STEP_MS = 700 // ~700ms per stage → ~3.5s total
    let progress = 0

    STAGES.forEach((stage, idx) => {
      // Stage start
      const startT = setTimeout(() => {
        setCurrentStageIdx(idx)
        setDistillationStage(stage.key, stage.range[0], producedId)
      }, idx * STEP_MS)
      timeoutsRef.current.push(startT)

      // Stage end (advance progress to range end)
      const endT = setTimeout(() => {
        setDistillationStage(stage.key, stage.range[1], producedId)
      }, idx * STEP_MS + STEP_MS * 0.85)
      timeoutsRef.current.push(endT)
    })

    // Done
    const doneT = setTimeout(() => {
      setDistillationStage('done', 100, producedId)
      setCurrentStageIdx(STAGES.length)
      setResultPatternId(producedId)
      toast.success('Pattern sealed · 模式封存', {
        description: findPatternById(producedId)?.name.en,
        duration: 4000,
      })
    }, STAGES.length * STEP_MS + 100)
    timeoutsRef.current.push(doneT)
  }, [pickPatternForSelection, selectedReferenceIds.length, setDistillationStage])

  const reset = useCallback(() => {
    timeoutsRef.current.forEach((t) => clearTimeout(t))
    timeoutsRef.current = []
    setCurrentStageIdx(-1)
    setResultPatternId(null)
    resetDistillation()
  }, [resetDistillation])

  const isRunning =
    distillationJob.status !== 'idle' && distillationJob.status !== 'done'
  const isDone = distillationJob.status === 'done' && resultPatternId
  const resultPattern = resultPatternId ? findPatternById(resultPatternId) : null

  return (
    <section
      id="distillation"
      className="relative py-20 sm:py-28 scroll-mt-16"
      aria-labelledby="distillation-heading"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="01 · Distillation"
          eyebrowZh="01 · 提炼"
          titleEn="Distill patterns from a corpus"
          titleZh="从作品集提炼模式"
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base leading-relaxed font-sans-zh"
          style={{ color: 'var(--fg-muted)' }}
        >
          Drop a finished novel, screenplay, or webnovel. The engine chunks it
          chapter-aware, runs a 13-dimension per-chunk analysis, then lifts the
          observations into a parametrized <em>StoryPatternV1</em> — stages,
          archetypes, turning points, parameter slots, invariants. The author
          seals the candidate; it joins your pattern library.
          <span className="block mt-2" style={{ color: 'var(--fg-faint)' }}>
            投入一部完成的小说、剧本或网文。引擎按章节切分，对每章进行 13 维分析，再将观察提炼为参数化的 StoryPatternV1 ——
            阶段、原型、转折点、参数槽位、不变量。作者封存候选；它进入你的模式库。
          </span>
        </motion.p>

        {/* DROP-ZONE GRID */}
        <div className="mt-10">
          <div className="flex items-center gap-2 mb-3">
            <BookText
              className="size-4"
              style={{ color: 'var(--accent)' }}
            />
            <span
              className="font-mono-editorial text-xs uppercase tracking-wider"
              style={{ color: 'var(--accent)' }}
            >
              Drop-zone · 投放区
            </span>
            <span
              className="font-mono-editorial text-[11px]"
              style={{ color: 'var(--fg-faint)' }}
            >
              {selectedReferenceIds.length}/{SAMPLE_REFERENCES.length} selected · 已选
            </span>
          </div>

          <div
            className="rounded-xl p-4 sm:p-5 border-2 border-dashed"
            style={{
              borderColor: 'color-mix(in oklab, var(--fg-faint) 35%, transparent)',
              backgroundColor: 'color-mix(in oklab, var(--bg-elevated) 60%, transparent)',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {SAMPLE_REFERENCES.map((ref) => (
                <ReferenceCard
                  key={ref.id}
                  referenceId={ref.id}
                  selected={selectedReferenceIds.includes(ref.id)}
                  onToggle={() => toggleReference(ref.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ACTION BAR */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <Button
            onClick={runDistillation}
            disabled={isRunning || selectedReferenceIds.length === 0}
            size="lg"
            className="bg-accent text-bg hover:bg-accent-bright font-semibold h-12 px-6"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--bg)',
            }}
          >
            {isRunning ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Distilling… · 提炼中…
              </>
            ) : (
              <>
                <Play className="size-4" />
                Run Distillation · 开始提炼
              </>
            )}
          </Button>
          {(isRunning || isDone) && (
            <Button
              onClick={reset}
              variant="ghost"
              size="lg"
              className="text-fg-muted hover:text-fg"
              style={{ color: 'var(--fg-muted)' }}
            >
              <RotateCcw className="size-4" />
              Reset · 重置
            </Button>
          )}
          <div
            className="ml-auto font-mono-editorial text-[11px]"
            style={{ color: 'var(--fg-faint)' }}
          >
            Mock pipeline · 5 stages · ~3.5s · 模拟管线 · 5 阶段
          </div>
        </div>

        {/* RESULT / PROGRESS */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {isRunning && (
              <DistillationProgress
                key="progress"
                job={distillationJob}
                currentStageIdx={currentStageIdx}
              />
            )}
            {isDone && resultPattern && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-4 flex items-center gap-2 flex-wrap">
                  <Badge
                    variant="outline"
                    className="font-mono-editorial text-[10px] uppercase tracking-wider"
                    style={{
                      color: 'var(--success)',
                      borderColor:
                        'color-mix(in oklab, var(--success) 50%, transparent)',
                    }}
                  >
                    <CheckCircle2 className="size-3" /> Distilled · 提炼完成
                  </Badge>
                  <span
                    className="font-mono-editorial text-[11px]"
                    style={{ color: 'var(--fg-faint)' }}
                  >
                    produced pattern: {resultPattern.id}
                  </span>
                </div>
                <DistilledPatternCard pattern={resultPattern} addedToLibrary />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section header (reusable)                                                  */
/* -------------------------------------------------------------------------- */

export function SectionHeader({
  eyebrow,
  eyebrowZh,
  titleEn,
  titleZh,
}: {
  eyebrow: string
  eyebrowZh: string
  titleEn: string
  titleZh: string
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-2"
    >
      <div className="flex items-baseline gap-3">
        <span className="eyebrow">{eyebrow}</span>
        <span
          className="font-sans-zh text-xs"
          style={{ color: 'var(--fg-faint)' }}
        >
          {eyebrowZh}
        </span>
      </div>
      <h2
        id={`${eyebrow.split(' ')[1].toLowerCase()}-heading`}
        className="font-serif-headline text-4xl sm:text-5xl md:text-6xl font-black leading-tight"
        style={{ color: 'var(--fg)' }}
      >
        {titleEn}
      </h2>
      <p
        className="font-sans-zh text-2xl sm:text-3xl md:text-4xl font-bold"
        style={{ color: 'var(--accent)' }}
      >
        · {titleZh}
      </p>
    </motion.header>
  )
}

export default DistillationSection
