'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  AlertCircle, CheckCircle2, ChevronDown, ChevronRight, Database, Filter,
  GitBranch, Layers, Loader2, Search, Sparkles, XCircle,
} from 'lucide-react'
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle,
} from '@/components/ui/sheet'
import { SectionHeader } from '@/components/story-engine/DistillationSection'
import type {
  AntagonistType, BranchingType, CorpusData, StoryRecord, VariantInstance,
} from '@/lib/corpus-types'

const CORPUS_URL = '/corpus-summary.json'

const ANTAGONIST_LABEL: Record<AntagonistType, { en: string; zh: string; color: string }> = {
  character: { en: 'Character', zh: '人物反派', color: '#B85C5C' },
  environmental: { en: 'Environmental', zh: '环境威胁', color: '#6B8E5C' },
  situational: { en: 'Situational', zh: '情境压力', color: '#C19A6B' },
  societal: { en: 'Societal', zh: '社会结构', color: '#8B7355' },
  internal: { en: 'Internal', zh: '内在冲突', color: '#A39E8E' },
  none: { en: 'None', zh: '无反派', color: '#5C5849' },
  unknown: { en: 'Unknown', zh: '未知', color: '#5C5849' },
}

const BRANCHING_LABEL: Record<BranchingType, { en: string; zh: string }> = {
  'rigid-tree': { en: 'Rigid Tree', zh: '刚性树' },
  'multi-lane': { en: 'Multi-Lane', zh: '多线路' },
  'linear': { en: 'Linear', zh: '线性' },
}

const STORY_TYPE_LABEL = {
  manju: { en: 'Manju', zh: '漫剧' },
  'branch-drama': { en: 'Branch Drama', zh: '分支剧' },
  'viral-scene': { en: 'Viral Scene', zh: '病毒场景' },
} as const

export function CorpusLabSection() {
  const sectionId = 'corpus-lab'
  return (
    <section
      id={sectionId}
      className="py-24 scroll-mt-16 border-t"
      style={{ borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)' }}
      aria-labelledby="corpus-lab-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="06 · Corpus Lab"
          eyebrowZh="语料实验室"
          titleEn="Apply patterns at mass scale"
          titleZh="· 大规模套用模式"
          introEn="Browse 259 stories from aizhuiguang-scrape, each exploded into N variants (1 story → many variant instances based on endings / lanes / linear). Stress-test the framework against real corpus shapes: rigid-tree branching, multi-lane alternative playthroughs, linear 15-second viral scenes. See where the framework fits, where it forces, where it breaks."
          introZh="浏览来自 aizhuiguang-scrape 的 259 个故事，每个展开为 N 个变体（1 个故事 → 多个变体实例，基于结局 / 线路 / 线性）。以真实语料形态压力测试框架：刚性树状分支、多线路平行演绎、线性 15 秒病毒场景。看框架在哪里贴合、哪里勉强、哪里破。"
        />
        <CorpusLabContent />
      </div>
    </section>
  )
}

type StoryTypeFilter = 'all' | 'manju' | 'branch-drama' | 'viral-scene'
type BranchingFilter = 'all' | BranchingType
type AntagonistFilter = 'all' | AntagonistType

function CorpusLabContent() {
  const [data, setData] = useState<CorpusData | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [storyTypeFilter, setStoryTypeFilter] = useState<StoryTypeFilter>('all')
  const [branchingFilter, setBranchingFilter] = useState<BranchingFilter>('all')
  const [antagonistFilter, setAntagonistFilter] = useState<AntagonistFilter>('all')
  const [search, setSearch] = useState('')
  const [expandedStoryIds, setExpandedStoryIds] = useState<Set<string>>(new Set())
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(CORPUS_URL)
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() })
      .then((d: CorpusData) => { if (!cancelled) setData(d) })
      .catch(e => { if (!cancelled) setLoadError(e.message) })
    return () => { cancelled = true }
  }, [])

  const filteredStories = useMemo(() => {
    if (!data) return []
    const q = search.trim().toLowerCase()
    return data.stories.filter(s => {
      if (storyTypeFilter !== 'all' && s.storyType !== storyTypeFilter) return false
      if (branchingFilter !== 'all' && s.branchingInfo.type !== branchingFilter) return false
      if (antagonistFilter !== 'all' && s.antagonistType !== antagonistFilter) return false
      if (q) {
        const hay = [s.title_zh, s.title_en, s.genre, s.tagline, s.family, s.id].join(' ').toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [data, storyTypeFilter, branchingFilter, antagonistFilter, search])

  const visibleVariants = useMemo(() => {
    if (!data) return new Map<string, VariantInstance[]>()
    const m = new Map<string, VariantInstance[]>()
    for (const v of data.variants) {
      if (!m.has(v.storyId)) m.set(v.storyId, [])
      m.get(v.storyId)!.push(v)
    }
    return m
  }, [data])

  const selectedStory = useMemo(() => {
    if (!data || !selectedStoryId) return null
    return data.stories.find(s => s.id === selectedStoryId) || null
  }, [data, selectedStoryId])

  const selectedVariants = useMemo(() => {
    if (!data || !selectedStoryId) return []
    return data.variants.filter(v => v.storyId === selectedStoryId)
  }, [data, selectedStoryId])

  function toggleExpanded(id: string) {
    setExpandedStoryIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id); else next.add(id)
      return next
    })
  }

  if (loadError) {
    return (
      <Card className="mt-8 max-w-2xl" style={{ borderColor: 'color-mix(in oklab, var(--danger, #B85C5C) 40%, transparent)' }}>
        <CardHeader>
          <CardTitle style={{ color: 'var(--danger, #B85C5C)' }}>Failed to load corpus</CardTitle>
          <CardDescription>{loadError}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
            Run <code className="font-mono-editorial" style={{ color: 'var(--accent, #C19A6B)' }}>python3 /home/z/my-project/build_corpus.py</code> to regenerate.
          </p>
        </CardContent>
      </Card>
    )
  }

  if (!data) {
    return (
      <div className="mt-12 flex items-center justify-center py-12">
        <Loader2 className="animate-spin" style={{ color: 'var(--accent, #C19A6B)' }} size={24} />
        <span className="ml-3 text-sm" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
          Loading corpus · 加载语料中…
        </span>
      </div>
    )
  }

  return (
    <div className="mt-12">
      <StatsDashboard stats={data.stats} />
      <FilterBar
        storyTypeFilter={storyTypeFilter} setStoryTypeFilter={setStoryTypeFilter}
        branchingFilter={branchingFilter} setBranchingFilter={setBranchingFilter}
        antagonistFilter={antagonistFilter} setAntagonistFilter={setAntagonistFilter}
        search={search} setSearch={setSearch}
        storyTypeCounts={data.stats.byStoryType}
        branchingCounts={data.stats.byBranchingType}
        antagonistCounts={data.stats.byAntagonistType}
        resultCount={filteredStories.length}
      />
      <div className="mt-6 space-y-2">
        {filteredStories.length === 0 ? (
          <div className="text-center py-12 text-sm" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
            No stories match these filters · 没有匹配筛选条件的故事
          </div>
        ) : (
          filteredStories.slice(0, 200).map((s, i) => (
            <StoryRow
              key={s.id} story={s}
              variants={visibleVariants.get(s.id) || []}
              expanded={expandedStoryIds.has(s.id)}
              onToggle={() => toggleExpanded(s.id)}
              onSelect={() => setSelectedStoryId(s.id)}
              index={i}
            />
          ))
        )}
        {filteredStories.length > 200 && (
          <div className="text-center py-4 text-xs" style={{ color: 'var(--fg-faint, #5C5849)' }}>
            Showing first 200 of {filteredStories.length} matching stories · 显示前 200 个（共 {filteredStories.length} 个匹配）
          </div>
        )}
      </div>
      <StoryDetailSheet
        story={selectedStory} variants={selectedVariants}
        open={!!selectedStory}
        onOpenChange={(o) => !o && setSelectedStoryId(null)}
      />
    </div>
  )
}

function StatsDashboard({ stats }: { stats: CorpusData['stats'] }) {
  const items = [
    { label: 'Stories · 故事', value: stats.totalStories, icon: Database, color: 'var(--accent, #C19A6B)' },
    { label: 'Variants · 变体', value: stats.totalVariants, icon: Layers, color: 'var(--accent-bright, #E5B97F)' },
    { label: 'Branching Types · 分支类型', value: Object.keys(stats.byBranchingType).length, icon: GitBranch, color: '#8B7355' },
    { label: 'Families · 家族', value: Object.keys(stats.byFamily).length, icon: Sparkles, color: '#A39E8E' },
    { label: 'Invariant Pass · 校验通过', value: stats.invariantPassAll, total: stats.totalStories, icon: CheckCircle2, color: 'var(--success, #6B8E5C)' },
    { label: 'Invariant Fail · 校验失败', value: stats.invariantFailAll, total: stats.totalStories, icon: XCircle, color: 'var(--danger, #B85C5C)' },
  ]
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {items.map((it, i) => (
        <motion.div key={it.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
          <Card className="h-full"
            style={{
              backgroundColor: 'color-mix(in oklab, var(--bg-elevated, #18181B) 70%, transparent)',
              borderColor: 'color-mix(in oklab, var(--fg-faint, #5C5849) 30%, transparent)',
            }}>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <it.icon size={14} style={{ color: it.color }} />
                <span className="font-mono-editorial text-[10px] tracking-wider uppercase" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
                  {it.label.split(' · ')[0]}
                </span>
              </div>
              <div className="font-serif-headline text-2xl font-bold" style={{ color: it.color }}>
                {it.value}
                {it.total ? <span className="text-sm ml-1" style={{ color: 'var(--fg-faint, #5C5849)' }}>/ {it.total}</span> : null}
              </div>
              <div className="font-sans-zh text-[11px] mt-1" style={{ color: 'var(--fg-faint, #5C5849)' }}>
                {it.label.split(' · ')[1] || ''}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

interface FilterBarProps {
  storyTypeFilter: StoryTypeFilter
  setStoryTypeFilter: (v: StoryTypeFilter) => void
  branchingFilter: BranchingFilter
  setBranchingFilter: (v: BranchingFilter) => void
  antagonistFilter: AntagonistFilter
  setAntagonistFilter: (v: AntagonistFilter) => void
  search: string
  setSearch: (v: string) => void
  storyTypeCounts: Record<string, number>
  branchingCounts: Record<string, number>
  antagonistCounts: Record<string, number>
  resultCount: number
}

function FilterBar(props: FilterBarProps) {
  const chipClass = (active: boolean) => ({
    backgroundColor: active ? 'color-mix(in oklab, var(--accent, #C19A6B) 22%, transparent)' : 'color-mix(in oklab, var(--bg-elevated, #18181B) 70%, transparent)',
    color: active ? 'var(--accent-bright, #E5B97F)' : 'var(--fg-muted, #A39E8E)',
    border: `1px solid color-mix(in oklab, var(--accent, #C19A6B) ${active ? 60 : 30}%, transparent)`,
  } as const)

  const storyTypes: { key: StoryTypeFilter; label: string; count?: number }[] = [
    { key: 'all', label: 'All · 全部' },
    { key: 'manju', label: 'Manju · 漫剧', count: props.storyTypeCounts.manju },
    { key: 'branch-drama', label: 'Branch · 分支', count: props.storyTypeCounts['branch-drama'] },
    { key: 'viral-scene', label: 'Viral · 病毒', count: props.storyTypeCounts['viral-scene'] },
  ]
  const branchings: { key: BranchingFilter; label: string; count?: number }[] = [
    { key: 'all', label: 'All · 全部' },
    { key: 'rigid-tree', label: 'Rigid Tree · 刚性树', count: props.branchingCounts['rigid-tree'] },
    { key: 'multi-lane', label: 'Multi-Lane · 多线路', count: props.branchingCounts['multi-lane'] },
    { key: 'linear', label: 'Linear · 线性', count: props.branchingCounts.linear },
  ]
  const antagonists: { key: AntagonistFilter; label: string; count?: number }[] = [
    { key: 'all', label: 'All · 全部' },
    { key: 'character', label: 'Character · 人物', count: props.antagonistCounts.character },
    { key: 'environmental', label: 'Environ · 环境', count: props.antagonistCounts.environmental },
    { key: 'situational', label: 'Situat · 情境', count: props.antagonistCounts.situational },
    { key: 'none', label: 'None · 无', count: props.antagonistCounts.none },
  ]
  return (
    <div className="mt-6 space-y-3">
      <div className="space-y-2">
        <FilterRow label="Story Type · 类型" items={storyTypes} active={props.storyTypeFilter} onSelect={props.setStoryTypeFilter} chipClass={chipClass} />
        <FilterRow label="Branching · 分支" items={branchings} active={props.branchingFilter} onSelect={props.setBranchingFilter} chipClass={chipClass} />
        <FilterRow label="Antagonist · 反派" items={antagonists} active={props.antagonistFilter} onSelect={props.setAntagonistFilter} chipClass={chipClass} />
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--fg-faint, #5C5849)' }} />
          <Input
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
            placeholder="Search stories, titles, genres, families… · 搜索故事、标题、流派、家族…"
            className="pl-9"
            style={{
              backgroundColor: 'color-mix(in oklab, var(--bg-elevated, #18181B) 70%, transparent)',
              borderColor: 'color-mix(in oklab, var(--fg-faint, #5C5849) 30%, transparent)',
              color: 'var(--fg, #F5F0E1)',
            }}
          />
        </div>
        <Badge variant="outline" className="font-mono-editorial" style={{ color: 'var(--accent, #C19A6B)', borderColor: 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' }}>
          <Filter size={10} className="mr-1" />
          {props.resultCount} result{props.resultCount !== 1 ? 's' : ''} · {props.resultCount} 结果
        </Badge>
      </div>
    </div>
  )
}

function FilterRow<T extends string>({ label, items, active, onSelect, chipClass }: {
  label: string
  items: { key: T; label: string; count?: number }[]
  active: T
  onSelect: (v: T) => void
  chipClass: (active: boolean) => object
}) {
  return (
    <div className="flex items-start gap-2 flex-wrap">
      <span className="font-mono-editorial text-[10px] tracking-wider uppercase pt-1.5 min-w-[110px]" style={{ color: 'var(--fg-faint, #5C5849)' }}>
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {items.map(item => (
          <button
            key={item.key}
            onClick={() => onSelect(item.key)}
            className="px-2.5 py-1 rounded-full text-[11px] font-mono-editorial transition-all hover:scale-[1.02]"
            style={chipClass(active === item.key)}
          >
            {item.label}
            {item.count !== undefined && <span className="ml-1.5 text-[10px]" style={{ opacity: 0.6 }}>{item.count}</span>}
          </button>
        ))}
      </div>
    </div>
  )
}

function StoryRow({ story, variants, expanded, onToggle, onSelect, index }: {
  story: StoryRecord
  variants: VariantInstance[]
  expanded: boolean
  onToggle: () => void
  onSelect: () => void
  index: number
}) {
  const branchingLabel = BRANCHING_LABEL[story.branchingInfo.type]
  const antagInfo = ANTAGONIST_LABEL[story.antagonistType]
  const invColor = story.invariantPassCount === 3 ? 'var(--success, #6B8E5C)' : story.invariantPassCount > 0 ? 'var(--accent, #C19A6B)' : 'var(--danger, #B85C5C)'
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.01, 0.3) }}
      style={{
        backgroundColor: 'color-mix(in oklab, var(--bg-elevated, #18181B) 50%, transparent)',
        border: '1px solid color-mix(in oklab, var(--fg-faint, #5C5849) 25%, transparent)',
        borderRadius: '8px',
      }}
      className="overflow-hidden"
    >
      <div className="flex items-center gap-3 p-3">
        <button onClick={onToggle} className="flex-shrink-0 p-1 rounded" style={{ color: 'var(--fg-muted, #A39E8E)' }} aria-label={expanded ? 'Collapse' : 'Expand'}>
          {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        <div className="flex-1 min-w-0 cursor-pointer" onClick={onSelect}>
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-serif-headline text-sm font-bold truncate" style={{ color: 'var(--fg, #F5F0E1)' }}>
              {story.title_zh}
            </span>
            {story.title_en && (
              <span className="text-xs" style={{ color: 'var(--fg-faint, #5C5849)' }}>/ {story.title_en}</span>
            )}
          </div>
          <div className="flex items-center gap-2 flex-wrap mt-0.5 text-[11px]" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
            <span className="font-mono-editorial">{story.id}</span>
            <span>·</span>
            <span>{story.genre}</span>
            {story.family && <><span>·</span><span style={{ color: 'var(--accent, #C19A6B)' }}>{story.family}</span></>}
          </div>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap justify-end">
          <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: 'var(--accent, #C19A6B)', borderColor: 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' }}>
            <GitBranch size={9} className="mr-1" />{branchingLabel.en}
          </Badge>
          <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: antagInfo.color, borderColor: `color-mix(in oklab, ${antagInfo.color} 40%, transparent)` }}>
            {antagInfo.en}
          </Badge>
          <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: 'var(--fg-muted, #A39E8E)', borderColor: 'color-mix(in oklab, var(--fg-faint, #5C5849) 40%, transparent)' }}>
            <Layers size={9} className="mr-1" />{story.variantCount} variants
          </Badge>
          <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: invColor, borderColor: `color-mix(in oklab, ${invColor} 40%, transparent)` }}>
            {story.invariantPassCount}/{story.invariantTotal}
          </Badge>
        </div>
      </div>
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="border-t"
          style={{ borderColor: 'color-mix(in oklab, var(--fg-faint, #5C5849) 20%, transparent)' }}
        >
          <div className="p-3 space-y-2">
            <div className="text-[11px] font-mono-editorial" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
              <span style={{ color: 'var(--accent, #C19A6B)' }}>branching:</span> {story.branchingInfo.detail}
            </div>
            <div className="text-[11px] font-mono-editorial" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
              <span style={{ color: 'var(--accent, #C19A6B)' }}>fingerprint:</span> {story.patternFingerprint}
            </div>
            {story.topGap && (
              <div className="text-[11px] flex items-start gap-2" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
                <AlertCircle size={11} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--danger, #B85C5C)' }} />
                <span>{story.topGap}</span>
              </div>
            )}
            <div className="mt-2">
              <div className="text-[10px] font-mono-editorial tracking-wider uppercase mb-1.5" style={{ color: 'var(--fg-faint, #5C5849)' }}>
                Variants ({variants.length}) · 变体实例
              </div>
              <div className="flex flex-wrap gap-1">
                {variants.slice(0, 24).map(v => (
                  <span key={v.variantId}
                    className="px-1.5 py-0.5 rounded text-[10px]"
                    style={{
                      backgroundColor: 'color-mix(in oklab, var(--accent, #C19A6B) 12%, transparent)',
                      color: 'var(--accent-bright, #E5B97F)',
                      border: '1px solid color-mix(in oklab, var(--accent, #C19A6B) 25%, transparent)',
                    }}>
                    <span className="font-mono-editorial">#{v.variantIndex}</span> {v.variantLabel_zh}
                  </span>
                ))}
                {variants.length > 24 && (
                  <span className="px-1.5 py-0.5 text-[10px]" style={{ color: 'var(--fg-faint, #5C5849)' }}>+ {variants.length - 24} more</span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

function StoryDetailSheet({ story, variants, open, onOpenChange }: {
  story: StoryRecord | null
  variants: VariantInstance[]
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!story) return null
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        className="w-full sm:max-w-2xl overflow-y-auto"
        style={{
          backgroundColor: 'var(--bg, #0E0E10)',
          color: 'var(--fg, #F5F0E1)',
          borderLeft: '1px solid color-mix(in oklab, var(--accent, #C19A6B) 30%, transparent)',
        }}
      >
        <SheetHeader>
          <SheetTitle className="font-serif-headline text-2xl" style={{ color: 'var(--fg, #F5F0E1)' }}>
            {story.title_zh}
          </SheetTitle>
          {story.title_en && (
            <SheetDescription className="text-base" style={{ color: 'var(--accent, #C19A6B)' }}>{story.title_en}</SheetDescription>
          )}
          <div className="flex items-center gap-2 flex-wrap mt-2">
            <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: 'var(--accent, #C19A6B)', borderColor: 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' }}>
              {STORY_TYPE_LABEL[story.storyType].en} · {STORY_TYPE_LABEL[story.storyType].zh}
            </Badge>
            <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: 'var(--accent, #C19A6B)', borderColor: 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' }}>
              {BRANCHING_LABEL[story.branchingInfo.type].en}
            </Badge>
            <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: ANTAGONIST_LABEL[story.antagonistType].color, borderColor: `color-mix(in oklab, ${ANTAGONIST_LABEL[story.antagonistType].color} 40%, transparent)` }}>
              {ANTAGONIST_LABEL[story.antagonistType].en}
            </Badge>
          </div>
        </SheetHeader>
        <div className="px-4 pb-6 space-y-6 mt-4">
          <Section title="Identity · 身份" mono>
            <Field label="ID" value={story.id} />
            <Field label="Genre" value={story.genre} />
            <Field label="Family" value={`${story.family} · ${story.familyKey}`} accent />
            {story.tagline && <Field label="Tagline" value={story.tagline} multiline />}
          </Section>
          <Section title="Branching · 分支结构" mono>
            <Field label="Type" value={`${BRANCHING_LABEL[story.branchingInfo.type].en} · ${BRANCHING_LABEL[story.branchingInfo.type].zh}`} accent />
            <Field label="Detail" value={story.branchingInfo.detail} multiline />
            <Field label="Fingerprint" value={story.patternFingerprint} mono />
            {story.branchingInfo.choicePointCount !== undefined && <Field label="Choice points" value={String(story.branchingInfo.choicePointCount)} />}
            {story.branchingInfo.endingCount !== undefined && <Field label="Endings" value={String(story.branchingInfo.endingCount)} />}
            {story.branchingInfo.totalPaths !== undefined && <Field label="Total paths" value={String(story.branchingInfo.totalPaths)} />}
            {story.branchingInfo.laneCount !== undefined && <Field label="Lanes" value={String(story.branchingInfo.laneCount)} />}
          </Section>
          <Section title={`Stages (${story.stages.length}) · 阶段`}>
            <div className="space-y-2">
              {story.stages.map((s, i) => (
                <div key={s.slotId} className="p-2 rounded"
                  style={{
                    backgroundColor: 'color-mix(in oklab, var(--bg-subtle, #1F1F23) 50%, transparent)',
                    border: '1px solid color-mix(in oklab, var(--fg-faint, #5C5849) 20%, transparent)',
                  }}>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono-editorial text-[10px]" style={{ color: 'var(--accent, #C19A6B)' }}>{String(i+1).padStart(2,'0')}</span>
                    <span className="font-mono-editorial text-[10px]" style={{ color: 'var(--fg-muted, #A39E8E)' }}>{s.slotId}</span>
                    <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: 'var(--accent-bright, #E5B97F)', borderColor: 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' }}>{s.role}</Badge>
                    <span className="text-sm flex-1" style={{ color: 'var(--fg, #F5F0E1)' }}>{s.label_zh}</span>
                  </div>
                  {s.triggerConstraint_zh && (
                    <div className="mt-1 text-[11px] pl-7" style={{ color: 'var(--fg-muted, #A39E8E)' }}>{s.triggerConstraint_zh}</div>
                  )}
                </div>
              ))}
            </div>
          </Section>
          <Section title={`Archetypes (${story.archetypes.length}) · 原型`}>
            <div className="flex flex-wrap gap-1.5">
              {story.archetypes.map((a, i) => (
                <span key={i} className="px-2 py-1 rounded text-[11px]"
                  style={{
                    backgroundColor: 'color-mix(in oklab, var(--accent, #C19A6B) 12%, transparent)',
                    color: 'var(--accent-bright, #E5B97F)',
                    border: '1px solid color-mix(in oklab, var(--accent, #C19A6B) 25%, transparent)',
                  }}>
                  <span className="font-mono-editorial">{a.archetypeKey}</span>
                  <span className="ml-1.5" style={{ color: 'var(--fg, #F5F0E1)' }}>{a.label_zh}</span>
                </span>
              ))}
            </div>
          </Section>
          <Section title="Parameter Slots · 参数槽" mono>
            <Field label="setting · 场景" value={story.parameterSlotsFilled.setting} multiline />
            <Field label="protagonist · 主角" value={story.parameterSlotsFilled.protagonist} multiline />
            <Field label="antagonist · 反派" value={story.parameterSlotsFilled.antagonist} multiline accent />
            <Field label="centralConflict · 核心冲突" value={story.parameterSlotsFilled.centralConflict} multiline />
            <Field label="stakes · 代价" value={story.parameterSlotsFilled.stakes} multiline />
            <Field label="theme · 主题" value={story.parameterSlotsFilled.theme} multiline />
          </Section>
          <Section title="Framework v2 Refinements · 框架 v2 改进" mono>
            <Field label="antagonistType" value={story.antagonistType} accent />
            <Field label="climaxMode" value={story.climaxMode} accent />
          </Section>
          <Section title="Invariants · 不变量校验">
            <div className="space-y-1.5">
              <InvariantRow label="stages-length-range" passed={story.invariantSummary.stagesLengthRange} />
              <InvariantRow label="turningPoint-slot-coverage" passed={story.invariantSummary.turningPointSlotCoverage} />
              <InvariantRow label="mandatory-roles-present" passed={story.invariantSummary.mandatoryRolesPresent} />
            </div>
            <div className="mt-2 text-[11px] font-mono-editorial" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
              Pass: {story.invariantPassCount}/{story.invariantTotal}
            </div>
          </Section>
          <Section title={`Variants (${variants.length}) · 变体实例（1:many 展开）`}>
            <p className="text-[11px] mb-2" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
              Each story is NOT atomic — it explodes to N variants based on its endings/lanes/linear shape.
              <br />
              <span className="font-sans-zh">每个故事不是原子单元——根据结局/线路/线性形态展开为 N 个变体。</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-96 overflow-y-auto">
              {variants.map(v => (
                <div key={v.variantId} className="p-2 rounded text-[11px]"
                  style={{
                    backgroundColor: 'color-mix(in oklab, var(--bg-subtle, #1F1F23) 50%, transparent)',
                    border: '1px solid color-mix(in oklab, var(--fg-faint, #5C5849) 20%, transparent)',
                  }}>
                  <div className="font-mono-editorial text-[10px]" style={{ color: 'var(--accent, #C19A6B)' }}>
                    #{v.variantIndex} · {v.variantType}
                  </div>
                  <div style={{ color: 'var(--fg, #F5F0E1)' }}>{v.variantLabel_zh}</div>
                  {v.laneKey && (
                    <div className="font-mono-editorial text-[10px] mt-0.5" style={{ color: 'var(--fg-faint, #5C5849)' }}>lane: {v.laneKey}</div>
                  )}
                </div>
              ))}
            </div>
          </Section>
          <Section title={`Framework Gaps (${story.gapCount}) · 框架缺口`}>
            <ul className="space-y-1.5">
              {story.allGaps.map((g, i) => (
                <li key={i} className="flex items-start gap-2 text-[11px]" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
                  <AlertCircle size={11} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--danger, #B85C5C)' }} />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function Section({ title, mono, children }: { title: string; mono?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <h3 className={`${mono ? 'font-mono-editorial' : 'font-serif-headline'} text-sm tracking-wide mb-2`} style={{ color: 'var(--accent, #C19A6B)' }}>
        {title}
      </h3>
      <div>{children}</div>
    </div>
  )
}

function Field({ label, value, multiline, accent, mono }: { label: string; value: string; multiline?: boolean; accent?: boolean; mono?: boolean }) {
  const display = value || '(empty · 空)'
  return (
    <div className="flex gap-2 py-1" style={{ flexDirection: multiline ? 'column' : 'row' }}>
      <span className={`${mono ? 'font-mono-editorial' : ''} text-[10px] uppercase tracking-wider flex-shrink-0`} style={{ color: 'var(--fg-faint, #5C5849)', minWidth: multiline ? undefined : '120px' }}>
        {label}
      </span>
      <span className={`${mono ? 'font-mono-editorial' : ''} text-[12px] flex-1`} style={{ color: accent ? 'var(--accent-bright, #E5B97F)' : 'var(--fg, #F5F0E1)' }}>
        {display}
      </span>
    </div>
  )
}

function InvariantRow({ label, passed }: { label: string; passed: boolean | null }) {
  if (passed === null) {
    return (
      <div className="flex items-center gap-2 text-[11px]" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
        <span className="font-mono-editorial" style={{ color: 'var(--fg-faint, #5C5849)' }}>—</span>
        <span>{label}</span>
      </div>
    )
  }
  return (
    <div className="flex items-center gap-2 text-[11px]" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
      {passed ? <CheckCircle2 size={12} style={{ color: 'var(--success, #6B8E5C)' }} /> : <XCircle size={12} style={{ color: 'var(--danger, #B85C5C)' }} />}
      <span>{label}</span>
    </div>
  )
}
