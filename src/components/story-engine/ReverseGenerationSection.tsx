'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  AlertCircle,
  BookOpen,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Loader2,
  Lock,
  Wand2,
} from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Textarea } from '@/components/ui/textarea'
import { getAllPatterns } from '@/lib/story-engine-data'
import type {
  OutlineNode,
  PatternParameterSlot,
  StoryPattern,
} from '@/lib/story-engine-data'
import {
  EXAMPLE_BINDINGS,
  generateMockOutline,
} from '@/lib/mock-outline-generator'
import { useStoryEngineStore } from '@/stores/story-engine-store'
import { SectionHeader } from '@/components/story-engine/DistillationSection'

/* -------------------------------------------------------------------------- */
/*  Pattern picker sheet (used by the "Change" button)                        */
/* -------------------------------------------------------------------------- */

function PatternPickerSheet({
  open,
  onOpenChange,
  onPick,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onPick: (id: string) => void
}) {
  const allPatterns = useMemo(() => getAllPatterns(), [])
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md p-0 flex flex-col"
        style={{
          backgroundColor: 'var(--bg)',
          borderLeft: '1px solid color-mix(in oklab, var(--accent-muted) 50%, transparent)',
        }}
      >
        <SheetHeader className="px-5 pt-5 pb-3 border-b"
          style={{
            borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
          }}
        >
          <SheetTitle
            className="font-serif-headline text-lg"
            style={{ color: 'var(--fg)' }}
          >
            Choose a sealed pattern · 选择一个已封存模式
          </SheetTitle>
          <SheetDescription
            className="font-sans-zh"
            style={{ color: 'var(--fg-muted)' }}
          >
            内置、提炼、聚合三类模式皆可用于反向生成。
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1">
          <ul className="py-2">
            {allPatterns.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => {
                    onPick(p.id)
                    onOpenChange(false)
                  }}
                  className="w-full text-left px-5 py-3 hover:bg-bg-subtle/60 transition-colors border-b"
                  style={{
                    borderColor: 'color-mix(in oklab, var(--fg-faint) 20%, transparent)',
                  }}
                >
                  <div className="flex items-baseline justify-between gap-2 flex-wrap">
                    <span
                      className="font-serif-headline text-sm font-bold"
                      style={{ color: 'var(--fg)' }}
                    >
                      {p.name.en}
                    </span>
                    <span
                      className="font-sans-zh text-xs"
                      style={{ color: 'var(--accent)' }}
                    >
                      {p.name.zh}
                    </span>
                  </div>
                  <div
                    className="font-mono-editorial text-[10px] uppercase tracking-wider mt-1 flex items-center gap-1.5 flex-wrap"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    <span style={{ color: 'var(--accent)' }}>{p.provenance}</span>
                    <span style={{ color: 'var(--fg-faint)' }}>·</span>
                    <span>{p.family.en}</span>
                    <span style={{ color: 'var(--fg-faint)' }}>·</span>
                    <span className="font-sans-zh">{p.family.zh}</span>
                    <span style={{ color: 'var(--fg-faint)' }}>·</span>
                    <span>{p.stages.length} stages · {p.stages.length} 阶段</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

/* -------------------------------------------------------------------------- */
/*  Parameter binding field                                                   */
/* -------------------------------------------------------------------------- */

function ParameterField({
  slot,
  value,
  onChange,
}: {
  slot: PatternParameterSlot
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div>
      <div className="flex items-baseline gap-2 flex-wrap mb-1.5">
        <span
          className="size-1.5 rounded-full"
          style={{
            backgroundColor: slot.required ? 'var(--accent-bright)' : 'transparent',
            border: slot.required ? 'none' : '1px solid var(--fg-faint)',
          }}
          aria-hidden
        />
        <label
          htmlFor={`slot-${slot.paramKey}`}
          className="font-serif-headline text-sm font-bold"
          style={{ color: 'var(--fg)' }}
        >
          {slot.label.en}
        </label>
        <span
          className="font-sans-zh text-sm"
          style={{ color: 'var(--accent)' }}
        >
          · {slot.label.zh}
        </span>
        {slot.required ? (
          <span
            className="font-mono-editorial text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded"
            style={{
              color: 'var(--accent)',
              backgroundColor: 'color-mix(in oklab, var(--accent-muted) 30%, transparent)',
            }}
          >
            required · 必填
          </span>
        ) : (
          <span
            className="font-mono-editorial text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded"
            style={{
              color: 'var(--fg-muted)',
              border: '1px solid color-mix(in oklab, var(--fg-faint) 50%, transparent)',
            }}
          >
            optional · 可选
          </span>
        )}
      </div>
      <Textarea
        id={`slot-${slot.paramKey}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={2}
        placeholder={`${slot.label.en}…`}
        className="font-sans-zh text-sm resize-y min-h-[3.5rem] bg-bg-subtle border-fg-faint/40 focus-visible:border-accent"
        style={{
          backgroundColor: 'var(--bg-subtle)',
          borderColor: 'color-mix(in oklab, var(--fg-faint) 40%, transparent)',
          color: 'var(--fg)',
        }}
      />
      <p
        className="mt-1 text-[11px] leading-relaxed"
        style={{ color: 'var(--fg-faint)' }}
      >
        {slot.guidance.en}
        <span className="block font-sans-zh mt-0.5">{slot.guidance.zh}</span>
      </p>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Stages list (sub-left, after generation)                                  */
/* -------------------------------------------------------------------------- */

function StagesList({
  pattern,
  hoveredSlotId,
  onStageHover,
  onStageLeave,
}: {
  pattern: StoryPattern
  hoveredSlotId: string | null
  onStageHover: (slotId: string) => void
  onStageLeave: () => void
}) {
  return (
    <div>
      <div
        className="font-mono-editorial text-[10px] uppercase tracking-wider mb-3"
        style={{ color: 'var(--accent)' }}
      >
        Pattern stages · 模式阶段
      </div>
      <ol className="space-y-2 max-h-[28rem] overflow-y-auto pr-1">
        {pattern.stages.map((stage, idx) => {
          const active = hoveredSlotId === stage.slotId
          return (
            <li
              key={stage.slotId}
              onMouseEnter={() => onStageHover(stage.slotId)}
              onMouseLeave={onStageLeave}
              className="rounded-md px-2.5 py-2 cursor-help transition-colors"
              style={{
                backgroundColor: active
                  ? 'color-mix(in oklab, var(--accent) 22%, transparent)'
                  : 'color-mix(in oklab, var(--bg-subtle) 40%, transparent)',
                border: `1px solid ${
                  active
                    ? 'color-mix(in oklab, var(--accent) 70%, transparent)'
                    : 'color-mix(in oklab, var(--fg-faint) 25%, transparent)'
                }`,
              }}
            >
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span
                  className="font-mono-editorial text-[9px] font-bold"
                  style={{ color: 'var(--accent)' }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span
                  className="font-serif-headline text-xs font-bold"
                  style={{ color: 'var(--fg)' }}
                >
                  {stage.label.en}
                </span>
                <span
                  className="font-sans-zh text-xs"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  {stage.label.zh}
                </span>
              </div>
              <div
                className="font-mono-editorial text-[9px] mt-0.5"
                style={{ color: active ? 'var(--accent-bright)' : 'var(--fg-faint)' }}
              >
                {stage.role.replace(/-/g, ' ')} · {stage.slotId}
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Generated outline tree (sub-right, after generation)                      */
/* -------------------------------------------------------------------------- */

function OutlineTree({
  nodes,
  hoveredSlotId,
  onChapterHover,
  onChapterLeave,
}: {
  nodes: OutlineNode[]
  hoveredSlotId: string | null
  onChapterHover: (slotId: string) => void
  onChapterLeave: () => void
}) {
  const volumes = nodes.filter((n) => n.type === 'volume')
  return (
    <div className="space-y-4">
      <div
        className="font-mono-editorial text-[10px] uppercase tracking-wider"
        style={{ color: 'var(--accent)' }}
      >
        Generated outline tree · 生成大纲树
        <span
          className="ml-2 font-sans-zh"
          style={{ color: 'var(--fg-faint)' }}
        >
          {volumes.length} {volumes.length === 1 ? 'volume' : 'volumes'} ·{' '}
          {nodes.filter((n) => n.type === 'chapter').length} chapters
        </span>
      </div>
      {volumes.map((vol) => {
        const chapters = nodes.filter(
          (n) => n.type === 'chapter' && n.parentId === vol.id,
        )
        return (
          <CollapsibleInPlace
            key={vol.id}
            volume={vol}
            chapters={chapters}
            hoveredSlotId={hoveredSlotId}
            onChapterHover={onChapterHover}
            onChapterLeave={onChapterLeave}
          />
        )
      })}
    </div>
  )
}

function CollapsibleInPlace({
  volume,
  chapters,
  hoveredSlotId,
  onChapterHover,
  onChapterLeave,
}: {
  volume: OutlineNode
  chapters: OutlineNode[]
  hoveredSlotId: string | null
  onChapterHover: (slotId: string) => void
  onChapterLeave: () => void
}) {
  const [open, setOpen] = useState(true)
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div
        className="rounded-lg overflow-hidden"
        style={{
          border: '1px solid color-mix(in oklab, var(--fg-faint) 30%, transparent)',
          backgroundColor: 'color-mix(in oklab, var(--bg-elevated) 80%, transparent)',
        }}
      >
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="w-full text-left px-3 py-2.5 flex items-center gap-2 hover:bg-bg-subtle/50 transition-colors"
          >
            <CollapsibleTriggerIcon open={open} />
            <div className="flex items-baseline gap-2 flex-wrap flex-1">
              <span
                className="font-serif-headline text-sm font-black"
                style={{ color: 'var(--fg)' }}
              >
                {volume.title.en}
              </span>
              <span
                className="font-sans-zh text-sm"
                style={{ color: 'var(--accent)' }}
              >
                {volume.title.zh}
              </span>
            </div>
            <span
              className="font-mono-editorial text-[10px]"
              style={{ color: 'var(--fg-faint)' }}
            >
              {chapters.length} ch
            </span>
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ol
            className="border-t"
            style={{
              borderColor:
                'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
            }}
          >
            {chapters.map((ch) => {
              const active =
                hoveredSlotId !== null &&
                ch.patternSlotId === hoveredSlotId
              return (
                <li
                  key={ch.id}
                  onMouseEnter={() =>
                    ch.patternSlotId && onChapterHover(ch.patternSlotId)
                  }
                  onMouseLeave={onChapterLeave}
                  className="px-3 py-2.5 border-b last:border-b-0 transition-colors cursor-help"
                  style={{
                    backgroundColor: active
                      ? 'color-mix(in oklab, var(--accent) 18%, transparent)'
                      : 'transparent',
                    borderColor: active
                      ? 'color-mix(in oklab, var(--accent) 40%, transparent)'
                      : 'color-mix(in oklab, var(--fg-faint) 18%, transparent)',
                  }}
                >
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span
                      className="font-mono-editorial text-[10px] font-bold"
                      style={{ color: 'var(--accent)' }}
                    >
                      ch {String(ch.order).padStart(2, '0')}
                    </span>
                    <span
                      className="font-serif-headline text-xs font-bold"
                      style={{ color: 'var(--fg)' }}
                    >
                      {ch.title.en}
                    </span>
                    <span
                      className="font-sans-zh text-xs"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      {ch.title.zh}
                    </span>
                    {ch.patternSlotId && (
                      <span
                        className="font-mono-editorial text-[9px] px-1.5 py-0.5 rounded ml-auto"
                        style={{
                          color: 'var(--accent-bright)',
                          backgroundColor:
                            'color-mix(in oklab, var(--accent-muted) 30%, transparent)',
                          border: '1px solid color-mix(in oklab, var(--accent) 50%, transparent)',
                        }}
                        title={`Pattern slotId: ${ch.patternSlotId}`}
                      >
                        slotId: {ch.patternSlotId}
                      </span>
                    )}
                  </div>
                  <p
                    className="mt-1 text-[11px] leading-relaxed line-clamp-2"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    {ch.summary.en}
                  </p>
                  <p
                    className="font-sans-zh text-[11px] leading-relaxed mt-0.5 line-clamp-1"
                    style={{ color: 'var(--fg-faint)' }}
                  >
                    {ch.summary.zh}
                  </p>
                </li>
              )
            })}
          </ol>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}

function CollapsibleTriggerIcon({ open }: { open: boolean }) {
  return open ? (
    <ChevronDown
      className="size-3.5 shrink-0"
      style={{ color: 'var(--accent)' }}
    />
  ) : (
    <ChevronRight
      className="size-3.5 shrink-0"
      style={{ color: 'var(--accent)' }}
    />
  )
}

/* -------------------------------------------------------------------------- */
/*  Reverse-gen progress card                                                 */
/* -------------------------------------------------------------------------- */

const GEN_STAGES: { en: string; zh: string; range: [number, number] }[] = [
  {
    en: 'Resolving pattern stages…',
    zh: '解析模式阶段中…',
    range: [0, 33],
  },
  {
    en: 'Generating outline nodes…',
    zh: '生成大纲节点中…',
    range: [33, 66],
  },
  {
    en: 'Tagging slotIds…',
    zh: '标注 slotId 中…',
    range: [66, 100],
  },
]

function ProgressCard({ progress }: { progress: number }) {
  const currentIdx =
    progress >= 100
      ? GEN_STAGES.length - 1
      : Math.min(
          Math.floor(progress / 33.34),
          GEN_STAGES.length - 1,
        )
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="card-editorial p-6 max-w-md mx-auto"
    >
      <div className="flex items-center gap-3 mb-4">
        <Loader2
          className="size-5 animate-spin"
          style={{ color: 'var(--accent)' }}
        />
        <div>
          <div
            className="font-mono-editorial text-[10px] uppercase tracking-wider"
            style={{ color: 'var(--accent)' }}
          >
            Generating · 生成中
          </div>
          <div
            className="font-serif-headline text-base font-bold"
            style={{ color: 'var(--fg)' }}
          >
            {GEN_STAGES[currentIdx].en}
          </div>
          <div
            className="font-sans-zh text-sm"
            style={{ color: 'var(--fg-muted)' }}
          >
            {GEN_STAGES[currentIdx].zh}
          </div>
        </div>
        <div
          className="ml-auto font-mono-editorial text-2xl font-bold"
          style={{ color: 'var(--accent-bright)' }}
        >
          {Math.round(progress)}%
        </div>
      </div>
      <div
        className="h-1 rounded-full overflow-hidden"
        style={{ backgroundColor: 'var(--bg-subtle)' }}
      >
        <motion.div
          className="h-full"
          style={{
            background:
              'linear-gradient(to right, var(--accent-muted), var(--accent), var(--accent-bright))',
          }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.25 }}
        />
      </div>
      <ol className="mt-4 space-y-1.5">
        {GEN_STAGES.map((s, i) => {
          const done = progress >= s.range[1]
          const current = i === currentIdx && !done
          return (
            <li
              key={s.en}
              className="flex items-center gap-2 text-xs"
              style={{
                color: done
                  ? 'var(--success)'
                  : current
                    ? 'var(--accent)'
                    : 'var(--fg-faint)',
              }}
            >
              {done ? (
                <CheckCircle2 className="size-3.5" />
              ) : current ? (
                <Loader2 className="size-3.5 animate-spin" />
              ) : (
                <span className="size-3.5 inline-block rounded-full border"
                  style={{
                    borderColor: 'color-mix(in oklab, var(--fg-faint) 50%, transparent)',
                  }}
                />
              )}
              <span className="font-mono-editorial">{s.en}</span>
              <span className="font-sans-zh">· {s.zh}</span>
            </li>
          )
        })}
      </ol>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Empty state                                                               */
/* -------------------------------------------------------------------------- */

function EmptyState() {
  return (
    <div
      className="h-full min-h-[24rem] rounded-lg border-2 border-dashed flex flex-col items-center justify-center text-center p-8"
      style={{
        borderColor: 'color-mix(in oklab, var(--accent-muted) 50%, transparent)',
        backgroundColor: 'color-mix(in oklab, var(--bg-subtle) 30%, transparent)',
      }}
    >
      <BookOpen
        className="size-8 mb-3"
        style={{ color: 'var(--accent)' }}
      />
      <p
        className="font-serif-headline text-base font-bold"
        style={{ color: 'var(--fg)' }}
      >
        Your generated outline will appear here
      </p>
      <p
        className="font-sans-zh text-sm mt-1"
        style={{ color: 'var(--fg-muted)' }}
      >
        你生成的大纲将出现在这里
      </p>
      <p
        className="font-mono-editorial text-[11px] mt-4 max-w-sm leading-relaxed"
        style={{ color: 'var(--fg-faint)' }}
      >
        Fill the parameter slots on the left, then run reverse-generation.
        The engine emits a candidate outline tagged with pattern slotIds.
      </p>
      <p
        className="font-sans-zh text-[11px] mt-1 max-w-sm leading-relaxed"
        style={{ color: 'var(--fg-faint)' }}
      >
        填好左侧参数槽，再运行反向生成。引擎输出带模式 slotId 标签的候选大纲。
      </p>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  MAIN SECTION                                                              */
/* -------------------------------------------------------------------------- */

export function ReverseGenerationSection() {
  const selectedPatternId = useStoryEngineStore((s) => s.selectedPatternId)
  const setSelectedPatternId = useStoryEngineStore((s) => s.setSelectedPatternId)
  const parameterBindings = useStoryEngineStore((s) => s.parameterBindings)
  const setParameterBinding = useStoryEngineStore((s) => s.setParameterBinding)
  const clearParameterBindings = useStoryEngineStore((s) => s.clearParameterBindings)
  const reverseGenJob = useStoryEngineStore((s) => s.reverseGenJob)
  const setReverseGenStage = useStoryEngineStore((s) => s.setReverseGenStage)
  const setProducedOutline = useStoryEngineStore((s) => s.setProducedOutline)
  const producedOutline = useStoryEngineStore((s) => s.producedOutline)
  const adoptOutline = useStoryEngineStore((s) => s.adoptOutline)
  const resetReverseGen = useStoryEngineStore((s) => s.resetReverseGen)

  const [pickerOpen, setPickerOpen] = useState(false)
  const [hoveredSlotId, setHoveredSlotId] = useState<string | null>(null)

  const allPatterns = useMemo(() => getAllPatterns(), [])
  const selectedPattern = useMemo(
    () => allPatterns.find((p) => p.id === selectedPatternId) ?? null,
    [allPatterns, selectedPatternId],
  )

  // Reset any in-flight generation if the user picks a new pattern.
  const prevPatternRef = useRef<string | null>(selectedPatternId)
  useEffect(() => {
    if (prevPatternRef.current !== selectedPatternId) {
      prevPatternRef.current = selectedPatternId
      resetReverseGen()
      setProducedOutline([])
    }
  }, [selectedPatternId, resetReverseGen, setProducedOutline])

  // Required slots validation
  const requiredSlots = useMemo(
    () => (selectedPattern ? selectedPattern.parameterSlots.filter((s) => s.required) : []),
    [selectedPattern],
  )
  const requiredSlotsFilled = requiredSlots.every(
    (s) => (parameterBindings[s.paramKey] ?? '').trim().length > 0,
  )

  const handleRun = () => {
    if (!selectedPattern || !requiredSlotsFilled) return
    // Reset any prior output
    resetReverseGen()
    setProducedOutline([])

    // 3-stage progress, ~600ms each
    setReverseGenStage('resolving-stages', 5)
    const t1 = window.setTimeout(() => {
      setReverseGenStage('generating-nodes', 40)
    }, 600)
    const t2 = window.setTimeout(() => {
      setReverseGenStage('tagging-slot-ids', 75)
    }, 1200)
    const t3 = window.setTimeout(() => {
      const nodes = generateMockOutline(selectedPattern, parameterBindings)
      setProducedOutline(nodes)
      const id = `outline-${Date.now()}`
      setReverseGenStage('done', 100, id)
    }, 1800)

    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(t3)
    }
  }

  const handleFillExample = () => {
    if (!selectedPattern) return
    // Use the example bindings straight from the generator module —
    // they're already pattern-agnostic and bilingual.
    ;(Object.keys(EXAMPLE_BINDINGS) as (keyof typeof EXAMPLE_BINDINGS)[]).forEach((k) => {
      setParameterBinding(k, EXAMPLE_BINDINGS[k])
    })
    toast.success('Example bindings filled · 已填入示例', {
      description: '6 parameter slots populated with a curated example',
      duration: 2500,
    })
  }

  const handleAdopt = () => {
    if (!producedOutline.length) return
    const id = reverseGenJob.producedOutlineId ?? `outline-${Date.now()}`
    adoptOutline(id)
    toast.success('Outline adopted into project · 大纲已采纳进项目', {
      description: `${producedOutline.length} nodes attached to the durable harness`,
      duration: 3500,
    })
  }

  if (!selectedPattern) {
    return (
      <section
        id="reverse-gen"
        className="py-24 scroll-mt-16 border-t"
        style={{
          borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
        }}
        aria-labelledby="reverse-gen-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="04 · REVERSE-GENERATION"
            eyebrowZh="04 · 反向生成"
            titleEn="Reverse-generate from a pattern"
            titleZh="从模式反向生成"
          />
          <div
            className="mt-12 rounded-lg border border-dashed p-12 text-center"
            style={{
              borderColor: 'color-mix(in oklab, var(--fg-faint) 40%, transparent)',
            }}
          >
            <AlertCircle
              className="size-8 mx-auto mb-3"
              style={{ color: 'var(--accent)' }}
            />
            <p
              className="font-serif-headline text-base font-bold"
              style={{ color: 'var(--fg)' }}
            >
              Pick a pattern from the library to begin.
            </p>
            <p
              className="font-sans-zh text-sm mt-1"
              style={{ color: 'var(--fg-muted)' }}
            >
              从模式库选择一个模式以开始。
            </p>
            <Button
              onClick={() => {
                const el = document.getElementById('library')
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              variant="outline"
              className="mt-4 border-accent/60 text-accent"
              style={{
                borderColor: 'color-mix(in oklab, var(--accent) 60%, transparent)',
                color: 'var(--accent-bright)',
              }}
            >
              <BookOpen className="size-4" />
              Go to library · 去模式库
            </Button>
          </div>
        </div>
      </section>
    )
  }

  const isRunning =
    reverseGenJob.status !== 'idle' && reverseGenJob.status !== 'done'

  return (
    <section
      id="reverse-gen"
      className="py-24 scroll-mt-16 border-t"
      style={{
        borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
      }}
      aria-labelledby="reverse-gen-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="04 · REVERSE-GENERATION"
          eyebrowZh="04 · 反向生成"
          titleEn="Reverse-generate from a pattern"
          titleZh="从模式反向生成"
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base leading-relaxed"
          style={{ color: 'var(--fg-muted)' }}
        >
          Pick a sealed pattern from the library. Fill the parameter slots —
          setting, protagonist, antagonist, central conflict, stakes, theme.
          The engine emits a candidate outline tree where every volume and
          chapter is tagged with its pattern stage slotId. Author reviews,
          then adopts via the durable harness.
          <span className="block mt-2 font-sans-zh" style={{ color: 'var(--fg-faint)' }}>
            从模式库选择一个已封存的模式。填写参数槽——场景、主角、反派、核心冲突、代价、主题。引擎输出一棵候选大纲树，每个卷与章节都标注其对应的模式阶段 slotId。作者审阅后通过持久化运行链采纳。
          </span>
        </motion.p>

        {/* 2-column layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* LEFT — Pattern selector + parameter binding form (40%) */}
          <div className="lg:col-span-2 space-y-5">
            {/* Pattern selector header */}
            <div
              className="card-editorial p-4"
            >
              <div className="flex items-center gap-2 flex-wrap mb-2">
                <Lock
                  className="size-3.5"
                  style={{ color: 'var(--success)' }}
                />
                <span
                  className="font-mono-editorial text-[10px] uppercase tracking-wider"
                  style={{ color: 'var(--success)' }}
                >
                  Sealed pattern · 已封存模式
                </span>
              </div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span
                  className="font-serif-headline text-lg font-black"
                  style={{ color: 'var(--fg)' }}
                >
                  {selectedPattern.name.en}
                </span>
                <span
                  className="font-sans-zh text-base font-bold"
                  style={{ color: 'var(--accent)' }}
                >
                  {selectedPattern.name.zh}
                </span>
              </div>
              <div
                className="font-mono-editorial text-[11px] mt-1"
                style={{ color: 'var(--fg-muted)' }}
              >
                {selectedPattern.family.en} · {selectedPattern.family.zh}
                <span style={{ color: 'var(--fg-faint)' }}> · </span>
                {selectedPattern.stages.length} stages ·{' '}
                {selectedPattern.stages.length} 阶段
                <span style={{ color: 'var(--fg-faint)' }}> · </span>
                {selectedPattern.archetypes.length} archetypes ·{' '}
                {selectedPattern.archetypes.length} 原型
              </div>
              <Button
                onClick={() => setPickerOpen(true)}
                variant="outline"
                size="sm"
                className="mt-3 font-mono-editorial text-[11px] uppercase tracking-wider"
                style={{
                  borderColor: 'color-mix(in oklab, var(--accent) 60%, transparent)',
                  color: 'var(--accent-bright)',
                }}
              >
                Change · 更换
              </Button>
            </div>

            {/* Parameter binding form */}
            <div
              className="card-editorial p-4 sm:p-5"
            >
              <div className="flex items-baseline justify-between gap-2 mb-3 flex-wrap">
                <h3
                  className="font-serif-headline text-base font-bold"
                  style={{ color: 'var(--fg)' }}
                >
                  Parameter bindings
                </h3>
                <span
                  className="font-sans-zh text-sm"
                  style={{ color: 'var(--accent)' }}
                >
                  参数绑定
                </span>
              </div>
              <div className="space-y-4">
                {selectedPattern.parameterSlots.map((slot) => (
                  <ParameterField
                    key={slot.paramKey}
                    slot={slot}
                    value={parameterBindings[slot.paramKey] ?? ''}
                    onChange={(v) => setParameterBinding(slot.paramKey, v)}
                  />
                ))}
              </div>

              {/* Action buttons */}
              <div className="mt-5 flex flex-col gap-2">
                <Button
                  onClick={handleFillExample}
                  variant="outline"
                  size="sm"
                  className="w-full font-mono-editorial text-[11px] uppercase tracking-wider"
                  style={{
                    borderColor: 'color-mix(in oklab, var(--accent) 60%, transparent)',
                    color: 'var(--accent-bright)',
                  }}
                >
                  Fill with example · 填入示例
                </Button>
                <Button
                  onClick={handleRun}
                  disabled={!requiredSlotsFilled || isRunning}
                  size="lg"
                  className="w-full h-12 text-base font-semibold"
                  style={{
                    backgroundColor: requiredSlotsFilled && !isRunning
                      ? 'var(--accent)'
                      : 'var(--bg-subtle)',
                    color: requiredSlotsFilled && !isRunning
                      ? 'var(--bg)'
                      : 'var(--fg-faint)',
                    border: `1px solid ${requiredSlotsFilled && !isRunning ? 'var(--accent)' : 'color-mix(in oklab, var(--fg-faint) 40%, transparent)'}`,
                  }}
                >
                  {isRunning ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Wand2 className="size-4" />
                  )}
                  {isRunning
                    ? 'Generating… · 生成中…'
                    : 'Reverse-Generate Outline · 反向生成大纲'}
                </Button>
                {!requiredSlotsFilled && (
                  <p
                    className="font-mono-editorial text-[10px] text-center"
                    style={{ color: 'var(--danger)' }}
                  >
                    All required slots must be filled · 所有必填槽位须填妥
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT — Generated outline preview (60%) */}
          <div className="lg:col-span-3">
            {reverseGenJob.status === 'idle' && producedOutline.length === 0 ? (
              <EmptyState />
            ) : isRunning ? (
              <div className="h-full flex items-center justify-center py-8">
                <ProgressCard progress={reverseGenJob.progress} />
              </div>
            ) : producedOutline.length > 0 ? (
              <div className="space-y-4">
                {/* Sub-layout: stages list + outline tree */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="md:col-span-2">
                    <StagesList
                      pattern={selectedPattern}
                      hoveredSlotId={hoveredSlotId}
                      onStageHover={setHoveredSlotId}
                      onStageLeave={() => setHoveredSlotId(null)}
                    />
                  </div>
                  <div className="md:col-span-3">
                    <OutlineTree
                      nodes={producedOutline}
                      hoveredSlotId={hoveredSlotId}
                      onChapterHover={setHoveredSlotId}
                      onChapterLeave={() => setHoveredSlotId(null)}
                    />
                  </div>
                </div>

                {/* Footer — Adopt outline */}
                <div
                  className="card-editorial p-4 flex items-center justify-between gap-3 flex-wrap"
                >
                  <div>
                    <div
                      className="font-mono-editorial text-[10px] uppercase tracking-wider"
                      style={{ color: 'var(--accent)' }}
                    >
                      Candidate outline · 候选大纲
                    </div>
                    <div
                      className="font-serif-headline text-sm font-bold"
                      style={{ color: 'var(--fg)' }}
                    >
                      {producedOutline.filter((n) => n.type === 'volume').length} volumes ·{' '}
                      {producedOutline.filter((n) => n.type === 'chapter').length} chapters ·{' '}
                      every chapter tagged with slotId
                    </div>
                    <div
                      className="font-sans-zh text-xs mt-0.5"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      每章皆带 slotId 标签
                    </div>
                  </div>
                  <Button
                    onClick={handleAdopt}
                    size="lg"
                    className="bg-accent text-bg hover:bg-accent-bright font-semibold"
                    style={{
                      backgroundColor: 'var(--accent)',
                      color: 'var(--bg)',
                    }}
                  >
                    <CheckCircle2 className="size-4" />
                    Adopt outline · 采纳大纲
                  </Button>
                </div>
              </div>
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>

      {/* Pattern picker sheet */}
      <PatternPickerSheet
        open={pickerOpen}
        onOpenChange={setPickerOpen}
        onPick={(id) => {
          setSelectedPatternId(id)
          clearParameterBindings()
        }}
      />

      {/* tiny badge preview at top right of section header — pattern summary */}
      <div className="sr-only">
        Pattern selected: {selectedPattern.name.en} · {selectedPattern.name.zh} —
        run reverse-generation to emit an outline tree tagged with pattern slotIds.
      </div>
    </section>
  )
}

export default ReverseGenerationSection
