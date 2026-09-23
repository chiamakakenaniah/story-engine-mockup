'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GitBranch, Loader2, Play, RotateCcw, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import {
  AGGREGATED_PATTERNS,
  DISTILLED_PATTERNS,
  findPatternById,
} from '@/lib/story-engine-data'
import type { StoryPattern } from '@/lib/story-engine-data'
import { DistilledPatternCard } from './DistilledPatternCard'
import { SectionHeader } from './DistillationSection'
import { useStoryEngineStore, type AggregationStage } from '@/stores/story-engine-store'

/* -------------------------------------------------------------------------- */
/*  5 distilled pattern nodes — arranged around a loose circle.             */
/*  Coordinates are hand-tuned for a ~480px tall left panel on desktop.      */
/*  The aggregation SVG draws bezier curves from each node's right edge to   */
/*  a central aggregation hub on the right column.                           */
/* -------------------------------------------------------------------------- */

interface NodePosition {
  patternId: string
  /** x,y in percentages of the left panel's relative container (0-100 each) */
  x: number
  y: number
}

const NODE_POSITIONS: NodePosition[] = DISTILLED_PATTERNS.map((p, i) => {
  // Place 5 nodes around an ellipse, offset slightly so they don't overlap.
  // i in [0..4], angles spread around the left half of an ellipse.
  const positions: Array<{ x: number; y: number }> = [
    { x: 6, y: 8 }, // top-left
    { x: 38, y: 4 }, // top-right of left
    { x: 4, y: 50 }, // middle-left
    { x: 36, y: 56 }, // middle-right of left
    { x: 14, y: 86 }, // bottom-left
  ]
  return { patternId: p.id, ...positions[i] }
})

/* -------------------------------------------------------------------------- */
/*  Pattern node card (left panel item)                                       */
/* -------------------------------------------------------------------------- */

function PatternNodeCard({
  pattern,
  active,
}: {
  pattern: StoryPattern
  active: boolean
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: active ? 1.05 : 1,
      }}
      transition={{ duration: 0.4 }}
      className="absolute w-[200px] max-w-[60%] rounded-md p-2.5"
      style={{
        left: `${NODE_POSITIONS.find((n) => n.patternId === pattern.id)!.x}%`,
        top: `${NODE_POSITIONS.find((n) => n.patternId === pattern.id)!.y}%`,
        transform: 'translate(-25%, -50%)',
        backgroundColor: active ? 'var(--bg-subtle)' : 'var(--bg-elevated)',
        border: `1px solid ${
          active
            ? 'color-mix(in oklab, var(--accent) 60%, transparent)'
            : 'color-mix(in oklab, var(--fg-faint) 35%, transparent)'
        }`,
        boxShadow: active
          ? '0 0 0 1px color-mix(in oklab, var(--accent) 40%, transparent), 0 8px 24px -8px color-mix(in oklab, var(--accent) 30%, transparent)'
          : 'none',
      }}
    >
      <div
        className="font-mono-editorial text-[9px] uppercase tracking-wider"
        style={{ color: 'var(--accent)' }}
      >
        {pattern.patternKey}
      </div>
      <div
        className="font-serif-headline text-xs font-bold leading-tight"
        style={{ color: 'var(--fg)' }}
      >
        {pattern.name.en}
      </div>
      <div
        className="font-sans-zh text-[11px] leading-tight mt-0.5"
        style={{ color: 'var(--fg-muted)' }}
      >
        {pattern.name.zh}
      </div>
      <div
        className="mt-1.5 text-[10px] font-mono-editorial flex items-center gap-1"
        style={{ color: 'var(--fg-faint)' }}
      >
        <span style={{ color: 'var(--accent-muted)' }}>family · 族:</span>
        <span className="font-sans-zh">{pattern.family.zh}</span>
      </div>
      <div
        className="mt-1 font-mono-editorial text-[9px]"
        style={{ color: 'var(--fg-faint)' }}
      >
        stages: {pattern.stages.length} · archetypes: {pattern.archetypes.length}
      </div>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  SVG overlay — bezier lines from each left node to the right hub          */
/* -------------------------------------------------------------------------- */

interface LineOverlayProps {
  active: boolean
  totalLines: number
}

function LineOverlay({ active, totalLines }: LineOverlayProps) {
  // SVG covers the whole two-column section.
  // Source coordinates are percent-based (in viewBox units of 1000x600).
  // Destination is on the right edge — the aggregation hub.
  // Each source is positioned to roughly match each node's right edge.

  const SOURCES = NODE_POSITIONS.map((n) => ({
    x: (n.x / 100) * 500 + 200, // map [0..50]% to viewBox space
    y: (n.y / 100) * 580 + 10,
  }))
  const DEST = { x: 720, y: 300 } // aggregation hub on right side

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      width="100%"
      height="100%"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="agg-line-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent-muted)" stopOpacity="0.4" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent-bright)" stopOpacity="1" />
        </linearGradient>
        <radialGradient id="agg-hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent-bright)" stopOpacity="0.85" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Hub glow */}
      <motion.circle
        cx={DEST.x}
        cy={DEST.y}
        r="60"
        fill="url(#agg-hub-glow)"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: active ? 1 : 0,
          scale: active ? [0.8, 1, 0.9] : 0,
        }}
        transition={{ duration: 1.4, ease: 'easeInOut' }}
        style={{ transformOrigin: `${DEST.x}px ${DEST.y}px` }}
      />

      {/* Connecting lines */}
      {SOURCES.map((src, i) => {
        const ctrl1x = src.x + (DEST.x - src.x) * 0.4
        const ctrl1y = src.y
        const ctrl2x = src.x + (DEST.x - src.x) * 0.6
        const ctrl2y = DEST.y
        const path = `M ${src.x} ${src.y} C ${ctrl1x} ${ctrl1y}, ${ctrl2x} ${ctrl2y}, ${DEST.x} ${DEST.y}`
        return (
          <motion.path
            key={i}
            d={path}
            stroke="url(#agg-line-grad)"
            strokeWidth={1.6}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: active ? 1 : 0,
              opacity: active ? 0.85 : 0,
            }}
            transition={{
              pathLength: { duration: 1.2, delay: i * 0.12, ease: 'easeInOut' },
              opacity: { duration: 0.2, delay: i * 0.12 },
            }}
          />
        )
      })}

      {/* Source dots */}
      {SOURCES.map((src, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={src.x}
          cy={src.y}
          r={4}
          fill={active ? 'var(--accent-bright)' : 'var(--accent-muted)'}
          initial={{ opacity: 0.6 }}
          animate={{
            opacity: active ? 1 : 0.6,
            scale: active ? [1, 1.4, 1] : 1,
          }}
          transition={{
            duration: 0.6,
            delay: active ? i * 0.12 + 0.3 : 0,
            repeat: active ? Infinity : 0,
            repeatType: 'mirror',
          }}
          style={{ transformOrigin: `${src.x}px ${src.y}px` }}
        />
      ))}

      {/* Destination hub */}
      <motion.circle
        cx={DEST.x}
        cy={DEST.y}
        r={9}
        fill="var(--accent-bright)"
        stroke="var(--bg)"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: active ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 1.0 }}
        style={{ transformOrigin: `${DEST.x}px ${DEST.y}px` }}
      />
      <text
        x={DEST.x}
        y={DEST.y + 32}
        textAnchor="middle"
        className="font-mono-editorial"
        style={{
          fontSize: 11,
          fill: 'var(--accent)',
          opacity: active ? 1 : 0,
          transition: 'opacity 0.4s ease 1.2s',
        }}
      >
        Σ aggregation
      </text>
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/*  Empty placeholder for right panel                                         */
/* -------------------------------------------------------------------------- */

function RightPlaceholder() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full min-h-[300px] rounded-lg border-2 border-dashed flex flex-col items-center justify-center gap-3 text-center p-8"
      style={{
        borderColor: 'color-mix(in oklab, var(--fg-faint) 35%, transparent)',
        backgroundColor: 'color-mix(in oklab, var(--bg-elevated) 50%, transparent)',
      }}
    >
      <GitBranch
        className="size-8"
        style={{ color: 'var(--fg-faint)' }}
      />
      <div>
        <p
          className="font-serif-headline text-base font-bold"
          style={{ color: 'var(--fg-muted)' }}
        >
          Meta-pattern will appear here
        </p>
        <p
          className="font-sans-zh text-sm mt-1"
          style={{ color: 'var(--fg-faint)' }}
        >
          元模式将显示于此
        </p>
      </div>
      <p
        className="text-xs max-w-xs"
        style={{ color: 'var(--fg-faint)' }}
      >
        Run aggregation to cluster the 5 distilled patterns by structural
        fingerprint and extract recurring stages as a meta-pattern.
      </p>
      <p
        className="font-sans-zh text-xs max-w-xs"
        style={{ color: 'var(--fg-faint)' }}
      >
        运行聚合以按结构指纹聚类 5 个提炼模式，提取复现阶段为元模式。
      </p>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Aggregation progress strip                                                */
/* -------------------------------------------------------------------------- */

function AggregationProgress({
  status,
}: {
  status: AggregationStage
}) {
  const map: Record<
    Exclude<AggregationStage, 'idle' | 'done'>,
    { en: string; zh: string }
  > = {
    'drawing-lines': {
      en: 'Drawing structural fingerprints…',
      zh: '绘制结构指纹中…',
    },
    'building-meta': {
      en: 'Lifting recurring stages into meta-pattern…',
      zh: '将复现阶段提炼为元模式…',
    },
  }
  const label = status === 'idle' || status === 'done' ? null : map[status]
  if (!label) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center gap-2 text-sm font-mono-editorial"
      style={{ color: 'var(--accent)' }}
    >
      <Loader2 className="size-4 animate-spin" />
      {label.en}
      <span className="font-sans-zh" style={{ color: 'var(--fg-muted)' }}>
        · {label.zh}
      </span>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  MAIN — AggregationSection                                                 */
/* -------------------------------------------------------------------------- */

export function AggregationSection() {
  const aggregationJob = useStoryEngineStore((s) => s.aggregationJob)
  const setAggregationStage = useStoryEngineStore((s) => s.setAggregationStage)
  const resetAggregation = useStoryEngineStore((s) => s.resetAggregation)

  const metaPattern = AGGREGATED_PATTERNS[0]!
  const [producedId, setProducedId] = useState<string | null>(null)
  const [active, setActive] = useState(false)
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((t) => clearTimeout(t))
    }
  }, [])

  const runAggregation = useCallback(() => {
    timeoutsRef.current.forEach((t) => clearTimeout(t))
    timeoutsRef.current = []
    setProducedId(null)
    setActive(true)
    setAggregationStage('drawing-lines', 25)

    // 1.5s — lines drawing
    const t1 = setTimeout(() => {
      setAggregationStage('building-meta', 65)
    }, 1500)
    timeoutsRef.current.push(t1)

    // 2.5s — meta-pattern emerges
    const t2 = setTimeout(() => {
      setAggregationStage('done', 100, metaPattern.id)
      setProducedId(metaPattern.id)
      toast.success('Meta-pattern sealed · 元模式封存', {
        description: `${metaPattern.name.en} · ${metaPattern.name.zh}`,
        duration: 4000,
      })
    }, 2500)
    timeoutsRef.current.push(t2)
  }, [metaPattern.id, metaPattern.name.en, metaPattern.name.zh, setAggregationStage])

  const reset = useCallback(() => {
    timeoutsRef.current.forEach((t) => clearTimeout(t))
    timeoutsRef.current = []
    setActive(false)
    setProducedId(null)
    resetAggregation()
  }, [resetAggregation])

  const isRunning =
    aggregationJob.status !== 'idle' && aggregationJob.status !== 'done'
  const isDone = aggregationJob.status === 'done' && producedId
  const resultPattern = producedId ? findPatternById(producedId) : null

  return (
    <section
      id="aggregation"
      className="relative py-20 sm:py-28 scroll-mt-16 border-t"
      style={{
        borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
      }}
      aria-labelledby="aggregation-heading"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="02 · Aggregation"
          eyebrowZh="02 · 聚合"
          titleEn="Aggregate into meta-patterns"
          titleZh="聚合为元模式"
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base leading-relaxed font-sans-zh"
          style={{ color: 'var(--fg-muted)' }}
        >
          When <em>N</em> distilled patterns are clustered by structural
          fingerprint, the recurring stages emerge as a meta-pattern. Each
          stage carries a statistical weight: how many instances confirmed it.
          This is the genuinely novel piece — no existing tool does this.
          <span className="block mt-2" style={{ color: 'var(--fg-faint)' }}>
            当 N 个提炼模式按结构指纹聚类，复现阶段便浮现为元模式。每个阶段附带统计权重：有多少实例确认它。
            这是真正全新的部分——尚无任何工具做此事。
          </span>
        </motion.p>

        {/* ACTION BAR */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <Button
            onClick={runAggregation}
            disabled={isRunning}
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
                Aggregating… · 聚合中…
              </>
            ) : (
              <>
                <Play className="size-4" />
                Run Aggregation · 开始聚合
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
          <div className="ml-auto">
            <AggregationProgress status={aggregationJob.status} />
          </div>
        </div>

        {/* TWO-PANEL LAYOUT + SVG OVERLAY */}
        <div className="mt-10 relative">
          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch">
            {/* LEFT — distilled pattern cluster */}
            <div className="relative">
              <div className="flex items-baseline gap-2 mb-3">
                <span
                  className="font-mono-editorial text-xs uppercase tracking-wider"
                  style={{ color: 'var(--accent)' }}
                >
                  Input · 输入
                </span>
                <span
                  className="font-mono-editorial text-[11px]"
                  style={{ color: 'var(--fg-faint)' }}
                >
                  5 distilled patterns · 5 个提炼模式
                </span>
              </div>

              <div
                className="relative rounded-lg border p-4"
                style={{
                  borderColor:
                    'color-mix(in oklab, var(--fg-faint) 30%, transparent)',
                  backgroundColor:
                    'color-mix(in oklab, var(--bg-elevated) 40%, transparent)',
                  minHeight: '480px',
                  height: '100%',
                }}
              >
                {/* Section title */}
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles
                    className="size-3.5"
                    style={{ color: 'var(--accent)' }}
                  />
                  <span
                    className="font-serif-headline text-sm font-bold"
                    style={{ color: 'var(--fg)' }}
                  >
                    Distilled patterns in your library
                  </span>
                  <span
                    className="font-sans-zh text-xs ml-1"
                    style={{ color: 'var(--fg-faint)' }}
                  >
                    · 模式库内提炼模式
                  </span>
                </div>

                {/* Nodes positioned around a loose circle */}
                <div className="relative w-full h-[420px]">
                  {DISTILLED_PATTERNS.map((p) => (
                    <PatternNodeCard
                      key={p.id}
                      pattern={p}
                      active={isRunning || isDone}
                    />
                  ))}
                </div>

                {/* SVG overlay across the whole two-column row */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none">
                  <LineOverlay active={active} totalLines={DISTILLED_PATTERNS.length} />
                </div>
              </div>
            </div>

            {/* RIGHT — meta-pattern output */}
            <div className="relative">
              <div className="flex items-baseline gap-2 mb-3">
                <span
                  className="font-mono-editorial text-xs uppercase tracking-wider"
                  style={{ color: 'var(--accent)' }}
                >
                  Output · 输出
                </span>
                <span
                  className="font-mono-editorial text-[11px]"
                  style={{ color: 'var(--fg-faint)' }}
                >
                  1 aggregated meta-pattern · 1 个聚合元模式
                </span>
              </div>

              <div className="relative min-h-[300px]">
                <AnimatePresence mode="wait">
                  {!isDone ? (
                    <RightPlaceholder key="placeholder" />
                  ) : resultPattern ? (
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
                          className="font-mono-editorial text-[10px] uppercase tracking-wider gap-1"
                          style={{
                            color: 'var(--accent-bright)',
                            borderColor:
                              'color-mix(in oklab, var(--accent-bright) 50%, transparent)',
                          }}
                        >
                          <Sparkles className="size-3" />
                          Aggregated · 聚合完成
                        </Badge>
                      </div>
                      <DistilledPatternCard
                        pattern={resultPattern}
                        addedToLibrary
                      />
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile-only SVG line (very simple, drawn between stacked panels) */}
          {active && (
            <div
              className="lg:hidden mt-4 flex items-center justify-center"
              aria-hidden
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2 }}
                className="h-px"
                style={{
                  background:
                    'linear-gradient(to right, transparent, var(--accent), transparent)',
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AggregationSection
