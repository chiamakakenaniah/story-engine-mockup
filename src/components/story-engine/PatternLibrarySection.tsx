'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Hash,
  Layers,
  Search,
  Sigma,
  Sparkles,
  Users,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  getAllPatterns,
  groupPatternsByFamily,
} from '@/lib/story-engine-data'
import type { PatternProvenance, StoryPattern } from '@/lib/story-engine-data'
import { useStoryEngineStore } from '@/stores/story-engine-store'
import { DistilledPatternCard } from '@/components/story-engine/DistilledPatternCard'
import { SectionHeader } from '@/components/story-engine/DistillationSection'

/* -------------------------------------------------------------------------- */
/*  Family labels — derived from the patterns themselves so any new family     */
/*  added to the data file is automatically picked up.                         */
/* -------------------------------------------------------------------------- */

const FAMILY_ORDER = [
  'three-act',
  'circle',
  'hero-journey',
  'beatsheet',
  'dramatica',
  'truby',
  'kishotenketsu',
  'jo-ha-kyu',
  'webnovel-system',
  'webnovel-rebirth',
  'family-saga',
  'hard-scifi-contact',
  'comedy-of-manners',
  'literary-mood',
  'system-stream',
] as const

/** Build a stable, sorted list of families present in the library. */
function useFamilyList() {
  return useMemo(() => {
    const groups = groupPatternsByFamily()
    const present = Array.from(groups.keys())
    // Sort by FAMILY_ORDER where defined; unknown families go last, sorted alpha.
    const sorted = present.sort((a, b) => {
      const ia = FAMILY_ORDER.indexOf(a as (typeof FAMILY_ORDER)[number])
      const ib = FAMILY_ORDER.indexOf(b as (typeof FAMILY_ORDER)[number])
      if (ia !== -1 && ib !== -1) return ia - ib
      if (ia !== -1) return -1
      if (ib !== -1) return 1
      return a.localeCompare(b)
    })
    return sorted.map((key) => {
      const list = groups.get(key) ?? []
      const sample = list[0]
      return {
        key,
        en: sample?.family.en ?? key,
        zh: sample?.family.zh ?? key,
        count: list.length,
      }
    })
  }, [])
}

/* -------------------------------------------------------------------------- */
/*  Provenance badge styling                                                  */
/* -------------------------------------------------------------------------- */

function ProvenanceChip({ provenance }: { provenance: PatternProvenance }) {
  const map: Record<
    PatternProvenance,
    { en: string; zh: string; color: string; fill: boolean }
  > = {
    'built-in': {
      en: 'Built-in',
      zh: '内置',
      color: 'var(--fg-muted)',
      fill: false,
    },
    distilled: {
      en: 'Distilled',
      zh: '提炼',
      color: 'var(--accent)',
      fill: true,
    },
    aggregated: {
      en: 'Aggregated',
      zh: '聚合',
      color: 'var(--accent-bright)',
      fill: true,
    },
  }
  const v = map[provenance]
  return (
    <span
      className="font-mono-editorial text-[10px] uppercase tracking-wider px-2 py-0.5 rounded inline-flex items-center gap-1"
      style={{
        color: v.fill ? 'var(--bg)' : v.color,
        backgroundColor: v.fill ? v.color : 'transparent',
        border: `1px solid color-mix(in oklab, ${v.color} ${v.fill ? '100%' : '50%'}, transparent)`,
      }}
    >
      {v.en} · {v.zh}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  Pattern card (compact summary in the grid)                               */
/* -------------------------------------------------------------------------- */

function PatternLibraryCard({
  pattern,
  onView,
  onApply,
}: {
  pattern: StoryPattern
  onView: () => void
  onApply: () => void
}) {
  const isAggregated = pattern.provenance === 'aggregated'

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className="card-editorial h-full flex flex-col"
    >
      <div className="px-4 sm:px-5 pt-4 pb-3 border-b" style={{
        borderColor: 'color-mix(in oklab, var(--fg-faint) 30%, transparent)',
      }}>
        {/* Header line — provenance + family */}
        <div className="flex items-center gap-2 flex-wrap mb-2">
          <ProvenanceChip provenance={pattern.provenance} />
          {isAggregated && typeof pattern.statisticalWeight === 'number' && (
            <span
              className="font-mono-editorial text-[10px] px-1.5 py-0.5 rounded"
              style={{
                color: 'var(--accent-bright)',
                backgroundColor: 'color-mix(in oklab, var(--accent-muted) 40%, transparent)',
                border: '1px solid color-mix(in oklab, var(--accent) 50%, transparent)',
              }}
              title="Statistical weight — number of distilled instances that contributed"
            >
              weight: {pattern.statisticalWeight}
            </span>
          )}
          <span
            className="font-mono-editorial text-[10px] px-1.5 py-0.5 rounded"
            style={{
              color: 'var(--accent)',
              border: '1px solid color-mix(in oklab, var(--accent-muted) 60%, transparent)',
            }}
          >
            {pattern.family.en} · {pattern.family.zh}
          </span>
        </div>

        {/* Name */}
        <h3
          className="font-serif-headline text-xl font-black leading-tight"
          style={{ color: 'var(--fg)' }}
        >
          {pattern.name.en}
        </h3>
        <p
          className="font-sans-zh text-base font-bold mt-0.5"
          style={{ color: 'var(--accent)' }}
        >
          {pattern.name.zh}
        </p>
      </div>

      {/* Counts row */}
      <div className="px-4 sm:px-5 py-2.5 flex items-center gap-2 flex-wrap border-b"
        style={{
          borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
          backgroundColor: 'color-mix(in oklab, var(--bg-subtle) 30%, transparent)',
        }}>
        <Badge
          variant="outline"
          className="font-mono-editorial text-[10px] gap-1"
          style={{
            color: 'var(--fg-muted)',
            borderColor: 'color-mix(in oklab, var(--fg-faint) 40%, transparent)',
          }}
        >
          <Layers className="size-3" />
          {pattern.stages.length} stages · {pattern.stages.length} 阶段
        </Badge>
        <Badge
          variant="outline"
          className="font-mono-editorial text-[10px] gap-1"
          style={{
            color: 'var(--fg-muted)',
            borderColor: 'color-mix(in oklab, var(--fg-faint) 40%, transparent)',
          }}
        >
          <Users className="size-3" />
          {pattern.archetypes.length} archetypes · {pattern.archetypes.length} 原型
        </Badge>
        {pattern.turningPoints.length > 0 && (
          <Badge
            variant="outline"
            className="font-mono-editorial text-[10px] gap-1"
            style={{
              color: 'var(--fg-muted)',
              borderColor: 'color-mix(in oklab, var(--fg-faint) 40%, transparent)',
            }}
          >
            <Sigma className="size-3" />
            {pattern.turningPoints.length} turning · {pattern.turningPoints.length} 转折
          </Badge>
        )}
      </div>

      {/* Description */}
      <div className="px-4 sm:px-5 py-3 flex-1">
        <p
          className="text-xs leading-relaxed line-clamp-3"
          style={{ color: 'var(--fg-muted)' }}
        >
          {pattern.description.en}
        </p>
        <p
          className="font-sans-zh text-xs leading-relaxed mt-1 line-clamp-2"
          style={{ color: 'var(--fg-faint)' }}
        >
          {pattern.description.zh}
        </p>
      </div>

      {/* Footer actions */}
      <div
        className="px-4 sm:px-5 py-3 border-t flex items-center justify-between gap-2 flex-wrap"
        style={{
          borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
        }}
      >
        <button
          type="button"
          onClick={onView}
          className="text-xs font-medium font-mono-editorial uppercase tracking-wider transition-colors hover:underline"
          style={{ color: 'var(--accent)' }}
        >
          View details · 查看详情 →
        </button>
        <Button
          type="button"
          onClick={onApply}
          size="sm"
          variant="outline"
          className="font-mono-editorial text-[11px] uppercase tracking-wider"
          style={{
            borderColor: 'color-mix(in oklab, var(--accent) 60%, transparent)',
            color: 'var(--accent-bright)',
          }}
        >
          <ArrowRight className="size-3" />
          Apply · 用于反向生成
        </Button>
      </div>
    </motion.article>
  )
}

/* -------------------------------------------------------------------------- */
/*  Provenance filter chips                                                    */
/* -------------------------------------------------------------------------- */

const PROVENANCE_FILTERS: { value: 'all' | PatternProvenance; en: string; zh: string }[] = [
  { value: 'all', en: 'All', zh: '全部' },
  { value: 'built-in', en: 'Built-in', zh: '内置' },
  { value: 'distilled', en: 'Distilled', zh: '提炼' },
  { value: 'aggregated', en: 'Aggregated', zh: '聚合' },
]

/* -------------------------------------------------------------------------- */
/*  MAIN COMPONENT                                                            */
/* -------------------------------------------------------------------------- */

export function PatternLibrarySection() {
  const allPatterns = useMemo(() => getAllPatterns(), [])
  const families = useFamilyList()

  const libraryFilters = useStoryEngineStore((s) => s.libraryFilters)
  const setLibraryFilter = useStoryEngineStore((s) => s.setLibraryFilter)
  const resetLibraryFilters = useStoryEngineStore((s) => s.resetLibraryFilters)
  const setSelectedPatternId = useStoryEngineStore((s) => s.setSelectedPatternId)

  // Local UI state — which pattern is open in the Sheet detail panel.
  const [sheetPatternId, setSheetPatternId] = useState<string | null>(null)
  const sheetPattern = useMemo(
    () => allPatterns.find((p) => p.id === sheetPatternId) ?? null,
    [allPatterns, sheetPatternId],
  )

  // Apply family + provenance + search filters.
  const filtered = useMemo(() => {
    return allPatterns.filter((p) => {
      if (
        libraryFilters.familyKey !== 'all' &&
        p.familyKey !== libraryFilters.familyKey
      )
        return false
      if (
        libraryFilters.provenance !== 'all' &&
        p.provenance !== libraryFilters.provenance
      )
        return false
      if (libraryFilters.searchQuery.trim().length > 0) {
        const q = libraryFilters.searchQuery.trim().toLowerCase()
        const hay = [
          p.name.en,
          p.name.zh,
          p.family.en,
          p.family.zh,
          p.patternKey,
          p.description.en,
          p.description.zh,
        ]
          .join(' ')
          .toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [allPatterns, libraryFilters])

  // Counts per family for the chip badges
  const countForFamily = (key: string) =>
    allPatterns.filter((p) => p.familyKey === key).length

  const handleApply = (pattern: StoryPattern) => {
    setSelectedPatternId(pattern.id)
    const el = document.getElementById('reverse-gen')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="library"
      className="py-24 scroll-mt-16 border-t"
      style={{
        borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
      }}
      aria-labelledby="library-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionHeader
          eyebrow="03 · PATTERN LIBRARY"
          eyebrowZh="03 · 模式库"
          titleEn="Pattern Library"
          titleZh="模式库"
        />

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base leading-relaxed"
          style={{ color: 'var(--fg-muted)' }}
        >
          Built-in canonical patterns from Western and East Asian narrative
          theory, plus your distilled patterns and aggregated meta-patterns.
          Each pattern is a parametrized structural template — stages with
          roles, archetypes with mandatory-on-roles, turning points, parameter
          slots, and machine-checkable invariants.
          <span className="block mt-2 font-sans-zh" style={{ color: 'var(--fg-faint)' }}>
            内置西方与东亚叙事理论的经典模式，加上你提炼的模式与聚合元模式。每个模式都是参数化结构模板——带角色标签的阶段、必填角色原型的原型、转折点、参数槽与机器可校验的不变量。
          </span>
        </motion.p>

        {/* Stats line */}
        <div className="mt-6 flex items-baseline gap-4 flex-wrap font-mono-editorial text-xs">
          <span style={{ color: 'var(--accent)' }}>
            <span style={{ color: 'var(--fg-faint)' }}>library:</span>{' '}
            {allPatterns.length} patterns
          </span>
          <span style={{ color: 'var(--fg-faint)' }}>·</span>
          <span style={{ color: 'var(--fg-muted)' }}>
            {allPatterns.filter((p) => p.provenance === 'built-in').length} built-in
          </span>
          <span style={{ color: 'var(--fg-muted)' }}>
            {allPatterns.filter((p) => p.provenance === 'distilled').length} distilled
          </span>
          <span style={{ color: 'var(--fg-muted)' }}>
            {allPatterns.filter((p) => p.provenance === 'aggregated').length} aggregated
          </span>
        </div>

        {/* Filter bar — sticky within section */}
        <div
          className="mt-8 sticky top-16 z-30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 border-y backdrop-blur-md"
          style={{
            backgroundColor: 'color-mix(in oklab, var(--bg) 88%, transparent)',
            borderColor: 'color-mix(in oklab, var(--fg-faint) 30%, transparent)',
          }}
        >
          {/* Family chips */}
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="font-mono-editorial text-[10px] uppercase tracking-wider mr-1 shrink-0"
              style={{ color: 'var(--accent)' }}
            >
              Family · 家族
            </span>
            <button
              type="button"
              onClick={() => setLibraryFilter('familyKey', 'all')}
              className="font-mono-editorial text-[11px] px-2.5 py-1 rounded-full transition-colors"
              style={
                libraryFilters.familyKey === 'all'
                  ? {
                      color: 'var(--bg)',
                      backgroundColor: 'var(--accent)',
                    }
                  : {
                      color: 'var(--fg-muted)',
                      border: '1px solid color-mix(in oklab, var(--fg-faint) 40%, transparent)',
                    }
              }
            >
              All · 全部 ({allPatterns.length})
            </button>
            {families.map((f) => {
              const active = libraryFilters.familyKey === f.key
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setLibraryFilter('familyKey', f.key)}
                  className="font-mono-editorial text-[11px] px-2.5 py-1 rounded-full transition-colors inline-flex items-baseline gap-1.5"
                  style={
                    active
                      ? {
                          color: 'var(--bg)',
                          backgroundColor: 'var(--accent)',
                        }
                      : {
                          color: 'var(--fg-muted)',
                          border: '1px solid color-mix(in oklab, var(--fg-faint) 40%, transparent)',
                        }
                  }
                >
                  <span>{f.en}</span>
                  <span className="font-sans-zh">{f.zh}</span>
                  <span style={{ color: active ? 'var(--bg)' : 'var(--fg-faint)' }}>
                    ({countForFamily(f.key)})
                  </span>
                </button>
              )
            })}
          </div>

          {/* Provenance + search row */}
          <div className="mt-2 flex items-center gap-3 flex-wrap">
            <span
              className="font-mono-editorial text-[10px] uppercase tracking-wider mr-1 shrink-0"
              style={{ color: 'var(--accent)' }}
            >
              Provenance · 来源
            </span>
            {PROVENANCE_FILTERS.map((p) => {
              const active = libraryFilters.provenance === p.value
              return (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setLibraryFilter('provenance', p.value)}
                  className="font-mono-editorial text-[11px] px-2.5 py-1 rounded-full transition-colors inline-flex items-baseline gap-1.5"
                  style={
                    active
                      ? {
                          color: 'var(--bg)',
                          backgroundColor: 'var(--accent-bright)',
                        }
                      : {
                          color: 'var(--fg-muted)',
                          border: '1px solid color-mix(in oklab, var(--fg-faint) 40%, transparent)',
                        }
                  }
                >
                  {p.en} · {p.zh}
                </button>
              )
            })}

            <div className="relative ml-auto">
              <Search
                className="absolute left-2 top-1/2 -translate-y-1/2 size-3.5"
                style={{ color: 'var(--fg-faint)' }}
              />
              <Input
                type="search"
                placeholder="Search patterns · 搜索模式…"
                value={libraryFilters.searchQuery}
                onChange={(e) =>
                  setLibraryFilter('searchQuery', e.target.value)
                }
                className="pl-8 h-8 text-xs font-sans-zh bg-bg-subtle border-fg-faint/40 focus-visible:border-accent"
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  borderColor: 'color-mix(in oklab, var(--fg-faint) 40%, transparent)',
                  color: 'var(--fg)',
                  minWidth: '12rem',
                }}
              />
            </div>

            <button
              type="button"
              onClick={resetLibraryFilters}
              className="font-mono-editorial text-[10px] uppercase tracking-wider px-2 py-1 rounded transition-colors hover:bg-bg-subtle"
              style={{ color: 'var(--fg-faint)' }}
            >
              Reset · 重置
            </button>
          </div>
        </div>

        {/* Result count */}
        <div
          className="mt-6 font-mono-editorial text-xs"
          style={{ color: 'var(--fg-muted)' }}
        >
          {filtered.length} of {allPatterns.length} patterns shown ·{' '}
          <span className="font-sans-zh">
            显示 {filtered.length} / {allPatterns.length}
          </span>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div
            className="mt-8 rounded-lg border border-dashed p-12 text-center"
            style={{
              borderColor: 'color-mix(in oklab, var(--fg-faint) 40%, transparent)',
            }}
          >
            <Hash
              className="size-8 mx-auto mb-3"
              style={{ color: 'var(--fg-faint)' }}
            />
            <p
              className="font-mono-editorial text-sm"
              style={{ color: 'var(--fg-muted)' }}
            >
              No patterns match these filters.
            </p>
            <p
              className="font-sans-zh text-sm mt-1"
              style={{ color: 'var(--fg-faint)' }}
            >
              无模式匹配当前筛选条件。
            </p>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <PatternLibraryCard
                key={p.id}
                pattern={p}
                onView={() => setSheetPatternId(p.id)}
                onApply={() => handleApply(p)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Detail sheet — full pattern body via reusable DistilledPatternCard */}
      <Sheet
        open={sheetPatternId !== null}
        onOpenChange={(open) => {
          if (!open) setSheetPatternId(null)
        }}
      >
        <SheetContent
          side="right"
          className="w-full sm:max-w-2xl lg:max-w-3xl p-0 overflow-y-auto"
          style={{
            backgroundColor: 'var(--bg)',
            borderLeft: '1px solid color-mix(in oklab, var(--accent-muted) 50%, transparent)',
          }}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>
              {sheetPattern ? sheetPattern.name.en : 'Pattern detail'} ·{' '}
              {sheetPattern ? sheetPattern.name.zh : '模式详情'}
            </SheetTitle>
            <SheetDescription>
              Full pattern detail · 模式详情
            </SheetDescription>
          </SheetHeader>
          {sheetPattern && (
            <ScrollArea className="h-full">
              <DistilledPatternCard
                pattern={sheetPattern}
                showAddToLibrary
                className="rounded-none border-0"
              />
              <div
                className="px-5 sm:px-6 py-4 border-t flex items-center justify-between gap-3 flex-wrap sticky bottom-0"
                style={{
                  backgroundColor: 'color-mix(in oklab, var(--bg) 95%, transparent)',
                  borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span
                  className="font-mono-editorial text-[11px]"
                  style={{ color: 'var(--fg-faint)' }}
                >
                  id: {sheetPattern.id}
                </span>
                <Button
                  onClick={() => {
                    handleApply(sheetPattern)
                    setSheetPatternId(null)
                  }}
                  className="bg-accent text-bg hover:bg-accent-bright font-semibold"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: 'var(--bg)',
                  }}
                >
                  <Sparkles className="size-3.5" />
                  Apply for reverse-gen · 用于反向生成 →
                </Button>
              </div>
            </ScrollArea>
          )}
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default PatternLibrarySection
