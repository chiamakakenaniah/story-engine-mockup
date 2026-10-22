'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  AlertCircle, CheckCircle2, ChevronDown, ChevronRight, Database, Filter,
  GitBranch, Layers, Search, Sparkles, Wand2, XCircle, Zap,
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { SectionHeader } from '@/components/story-engine/DistillationSection'
import { CORPUS_DATA } from '@/lib/corpus-data'
import type {
  AntagonistType, BranchingType, ClimaxMode, StoryRecord, VariantInstance,
} from '@/lib/corpus-types'
import type { StoryPattern } from '@/lib/story-engine-data'
import { getAllPatterns } from '@/lib/story-engine-data'

/* -------------------------------------------------------------------------- */
/*  CorpusLabSection — fully static, mass-scale pattern application sandbox  */
/*                                                                             */
/*  No fetch, no async, no Python runtime. Imports CORPUS_DATA directly.      */
/*  All audit fixes from docs/decisions/2026-10-corpus-lab-static-redesign.md  */
/*  applied: A2 (subCluster populated), A3 (fingerprint matrix), A4 (variant   */
/*  detail sheet), A5 (variants as first-class rows), A6 (apply-at-scale     */
/*  workflow), A7 (corpus → Pattern Library mapping), A8 (family filter),     */
/*  A9 (climax-mode filter), A10 (invariant filter), A11 (category emoji),    */
/*  A12 (synthesized stage provenance visible).                                */
/* -------------------------------------------------------------------------- */

const ANTAGONIST_LABEL: Record<AntagonistType, { en: string; zh: string; color: string }> = {
  character: { en: 'Character', zh: '人物反派', color: '#B85C5C' },
  environmental: { en: 'Environmental', zh: '环境威胁', color: '#6B8E5C' },
  situational: { en: 'Situational', zh: '情境压力', color: '#C19A6B' },
  societal: { en: 'Societal', zh: '社会结构', color: '#8B7355' },
  internal: { en: 'Internal', zh: '内在冲突', color: '#A39E8E' },
  none: { en: 'None', zh: '无反派', color: '#5C5849' },
  unknown: { en: 'Unknown', zh: '未知', color: '#5C5849' },
}

const BRANCHING_LABEL: Record<BranchingType, { en: string; zh: string; color: string }> = {
  'rigid-tree': { en: 'Rigid Tree', zh: '刚性树', color: '#C19A6B' },
  'multi-lane': { en: 'Multi-Lane', zh: '多线路', color: '#E5B97F' },
  'linear': { en: 'Linear', zh: '线性', color: '#A39E8E' },
}

const CLIMAX_LABEL: Record<ClimaxMode, { en: string; zh: string; color: string }> = {
  'single': { en: 'Single', zh: '单一', color: '#6B8E5C' },
  'per-path': { en: 'Per Path', zh: '路径相关', color: '#C19A6B' },
  'per-lane': { en: 'Per Lane', zh: '线路相关', color: '#E5B97F' },
  'absent': { en: 'Absent', zh: '无爆点', color: '#5C5849' },
}

const STORY_TYPE_LABEL = {
  manju: { en: 'Manju', zh: '漫剧', color: '#C19A6B' },
  'branch-drama': { en: 'Branch', zh: '分支剧', color: '#E5B97F' },
  'viral-scene': { en: 'Viral', zh: '病毒场景', color: '#A39E8E' },
} as const

const STORY_TYPE_KEYS = ['manju', 'branch-drama', 'viral-scene'] as const

export function CorpusLabSection() {
  return (
    <section
      id="corpus-lab"
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
          introEn="259 stories × 1136 variants. Filter, browse, expand. Stories are NOT atomic — 1 story → N variants. Click variants to examine endings/lanes as distinct entities. Click a fingerprint to see all stories sharing that shape. Apply patterns from the Library to selected stories for stress-test fits/forces/breaks."
          introZh="259 个故事 × 1136 个变体。筛选、浏览、展开。故事不是原子单元——1 个故事 → N 个变体。点击变体查看作为独立实体的结局 / 线路。点击指纹查看共享该形态的所有故事。从模式库选取模式应用到选中故事，压力测试贴合 / 勉强 / 破裂。"
        />
        <CorpusLabContent />
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  State + filters                                                            */
/* -------------------------------------------------------------------------- */

type StoryTypeFilter = 'all' | 'manju' | 'branch-drama' | 'viral-scene'
type BranchingFilter = 'all' | BranchingType
type AntagonistFilter = 'all' | AntagonistType
type ClimaxFilter = 'all' | ClimaxMode
type InvariantFilter = 'all' | 'pass-all' | 'partial' | 'fail-all'
type ViewMode = 'stories' | 'variants' | 'fingerprints'

function CorpusLabContent() {
  // All filters
  const [storyTypeFilter, setStoryTypeFilter] = useState<StoryTypeFilter>('all')
  const [branchingFilter, setBranchingFilter] = useState<BranchingFilter>('all')
  const [antagonistFilter, setAntagonistFilter] = useState<AntagonistFilter>('all')
  const [climaxFilter, setClimaxFilter] = useState<ClimaxFilter>('all')
  const [invariantFilter, setInvariantFilter] = useState<InvariantFilter>('all')
  const [familyFilter, setFamilyFilter] = useState<string>('all')
  const [fingerprintFilter, setFingerprintFilter] = useState<string>('all')
  const [search, setSearch] = useState('')

  // View + selection
  const [viewMode, setViewMode] = useState<ViewMode>('stories')
  const [expandedStoryIds, setExpandedStoryIds] = useState<Set<string>>(new Set())
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null)
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null)
  const [selectedStoryIds, setSelectedStoryIds] = useState<Set<string>>(new Set()) // A6 batch
  const [batchApplyOpen, setBatchApplyOpen] = useState(false)

  const stats = CORPUS_DATA.stats
  const stories = CORPUS_DATA.stories
  const variants = CORPUS_DATA.variants

  // Filter logic
  const filteredStories = useMemo(() => {
    const q = search.trim().toLowerCase()
    return stories.filter(s => {
      if (storyTypeFilter !== 'all' && s.storyType !== storyTypeFilter) return false
      if (branchingFilter !== 'all' && s.branchingInfo.type !== branchingFilter) return false
      if (antagonistFilter !== 'all' && s.antagonistType !== antagonistFilter) return false
      if (climaxFilter !== 'all' && s.climaxMode !== climaxFilter) return false
      if (familyFilter !== 'all' && s.familyKey !== familyFilter) return false
      if (fingerprintFilter !== 'all' && s.patternFingerprint !== fingerprintFilter) return false
      if (invariantFilter !== 'all') {
        if (invariantFilter === 'pass-all' && s.invariantPassCount !== 3) return false
        if (invariantFilter === 'partial' && (s.invariantPassCount === 3 || s.invariantPassCount === 0)) return false
        if (invariantFilter === 'fail-all' && s.invariantPassCount !== 0) return false
      }
      if (q) {
        const hay = [s.title_zh, s.title_en, s.genre, s.tagline, s.family, s.id, s.categoryName, s.subCluster].filter(Boolean).join(' ').toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [stories, storyTypeFilter, branchingFilter, antagonistFilter, climaxFilter, familyFilter, fingerprintFilter, invariantFilter, search])

  // Filtered variants (for variants view)
  const filteredVariants = useMemo(() => {
    const allowedStoryIds = new Set(filteredStories.map(s => s.id))
    return variants.filter(v => allowedStoryIds.has(v.storyId))
  }, [variants, filteredStories])

  // Variants by story id (for expand + detail)
  const variantsByStory = useMemo(() => {
    const m = new Map<string, VariantInstance[]>()
    for (const v of variants) {
      if (!m.has(v.storyId)) m.set(v.storyId, [])
      m.get(v.storyId)!.push(v)
    }
    return m
  }, [variants])

  const selectedStory = useMemo(() => selectedStoryId ? stories.find(s => s.id === selectedStoryId) || null : null, [stories, selectedStoryId])
  const selectedVariants = useMemo(() => selectedStoryId ? variantsByStory.get(selectedStoryId) || [] : [], [variantsByStory, selectedStoryId])
  const selectedVariant = useMemo(() => selectedVariantId ? variants.find(v => v.variantId === selectedVariantId) || null : null, [variants, selectedVariantId])
  const selectedVariantStory = useMemo(() => selectedVariant ? stories.find(s => s.id === selectedVariant.storyId) || null : null, [stories, selectedVariant])

  // A7: Pattern Library patterns
  const libraryPatterns = useMemo(() => getAllPatterns(), [])

  function toggleExpanded(id: string) {
    setExpandedStoryIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id); else next.add(id)
      return next
    })
  }

  function toggleSelected(id: string) {
    setSelectedStoryIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id); else next.add(id)
      return next
    })
  }

  function clearFilters() {
    setStoryTypeFilter('all'); setBranchingFilter('all'); setAntagonistFilter('all')
    setClimaxFilter('all'); setFamilyFilter('all'); setFingerprintFilter('all')
    setInvariantFilter('all'); setSearch('')
  }

  const activeFilterCount = [
    storyTypeFilter, branchingFilter, antagonistFilter, climaxFilter,
    familyFilter, fingerprintFilter, invariantFilter,
  ].filter(v => v !== 'all').length + (search ? 1 : 0)

  return (
    <div className="mt-12">
      <StatsDashboard stats={stats} />

      <FilterBar
        storyTypeFilter={storyTypeFilter} setStoryTypeFilter={setStoryTypeFilter}
        branchingFilter={branchingFilter} setBranchingFilter={setBranchingFilter}
        antagonistFilter={antagonistFilter} setAntagonistFilter={setAntagonistFilter}
        climaxFilter={climaxFilter} setClimaxFilter={setClimaxFilter}
        invariantFilter={invariantFilter} setInvariantFilter={setInvariantFilter}
        familyFilter={familyFilter} setFamilyFilter={setFamilyFilter}
        fingerprintFilter={fingerprintFilter} setFingerprintFilter={setFingerprintFilter}
        search={search} setSearch={setSearch}
        stats={stats}
        resultCount={viewMode === 'variants' ? filteredVariants.length : filteredStories.length}
        viewMode={viewMode} setViewMode={setViewMode}
        activeFilterCount={activeFilterCount}
        onClearFilters={clearFilters}
        selectedStoryIds={selectedStoryIds}
        onClearSelection={() => setSelectedStoryIds(new Set())}
        onOpenBatchApply={() => setBatchApplyOpen(true)}
      />

      <div className="mt-6">
        {viewMode === 'stories' && (
          <div className="space-y-2">
            {filteredStories.length === 0 ? (
              <div className="text-center py-12 text-sm" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
                No stories match these filters · 没有匹配筛选条件的故事
              </div>
            ) : (
              filteredStories.slice(0, 200).map((s, i) => (
                <StoryRow
                  key={s.id} story={s}
                  variants={variantsByStory.get(s.id) || []}
                  expanded={expandedStoryIds.has(s.id)}
                  onToggle={() => toggleExpanded(s.id)}
                  onSelect={() => setSelectedStoryId(s.id)}
                  onVariantClick={(vId) => setSelectedVariantId(vId)}
                  selected={selectedStoryIds.has(s.id)}
                  onToggleSelected={() => toggleSelected(s.id)}
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
        )}

        {viewMode === 'variants' && (
          <div className="space-y-2">
            {filteredVariants.length === 0 ? (
              <div className="text-center py-12 text-sm" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
                No variants match these filters · 没有匹配筛选条件的变体
              </div>
            ) : (
              filteredVariants.slice(0, 500).map((v, i) => {
                const parentStory = stories.find(s => s.id === v.storyId)
                if (!parentStory) return null
                return (
                  <VariantRow
                    key={v.variantId}
                    variant={v}
                    parentStory={parentStory}
                    onSelect={() => setSelectedVariantId(v.variantId)}
                    index={i}
                  />
                )
              })
            )}
            {filteredVariants.length > 500 && (
              <div className="text-center py-4 text-xs" style={{ color: 'var(--fg-faint, #5C5849)' }}>
                Showing first 500 of {filteredVariants.length} matching variants · 显示前 500 个（共 {filteredVariants.length} 个匹配）
              </div>
            )}
          </div>
        )}

        {viewMode === 'fingerprints' && (
          <FingerprintMatrix
            stories={stories}
            fingerprintFilter={fingerprintFilter}
            onFingerprintClick={(fp) => setFingerprintFilter(fp === fingerprintFilter ? 'all' : fp)}
          />
        )}
      </div>

      <StoryDetailSheet
        story={selectedStory}
        variants={selectedVariants}
        open={!!selectedStory}
        onOpenChange={(o) => !o && setSelectedStoryId(null)}
        onVariantClick={(vId) => setSelectedVariantId(vId)}
        libraryPatterns={libraryPatterns}
      />

      <VariantDetailSheet
        variant={selectedVariant}
        parentStory={selectedVariantStory}
        open={!!selectedVariant}
        onOpenChange={(o) => !o && setSelectedVariantId(null)}
      />

      <BatchApplySheet
        open={batchApplyOpen}
        onOpenChange={setBatchApplyOpen}
        selectedStories={stories.filter(s => selectedStoryIds.has(s.id))}
        libraryPatterns={libraryPatterns}
      />
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Stats dashboard (A9: now includes byClimaxMode)                            */
/* -------------------------------------------------------------------------- */

function StatsDashboard({ stats }: { stats: typeof CORPUS_DATA.stats }) {
  const items = [
    { label: 'Stories · 故事', value: stats.totalStories, icon: Database, color: 'var(--accent, #C19A6B)' },
    { label: 'Variants · 变体', value: stats.totalVariants, icon: Layers, color: 'var(--accent-bright, #E5B97F)' },
    { label: 'Branching · 分支', value: Object.keys(stats.byBranchingType).length, icon: GitBranch, color: '#8B7355' },
    { label: 'Families · 家族', value: Object.keys(stats.byFamily).length, icon: Sparkles, color: '#A39E8E' },
    { label: 'Pass · 通过', value: stats.invariantPassAll, total: stats.totalStories, icon: CheckCircle2, color: 'var(--success, #6B8E5C)' },
    { label: 'Fail · 失败', value: stats.invariantFailAll, total: stats.totalStories, icon: XCircle, color: 'var(--danger, #B85C5C)' },
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

/* -------------------------------------------------------------------------- */
/*  Filter bar (A8: family, A9: climax, A10: invariant, A3: fingerprint, A6: batch) */
/* -------------------------------------------------------------------------- */

interface FilterBarProps {
  storyTypeFilter: StoryTypeFilter
  setStoryTypeFilter: (v: StoryTypeFilter) => void
  branchingFilter: BranchingFilter
  setBranchingFilter: (v: BranchingFilter) => void
  antagonistFilter: AntagonistFilter
  setAntagonistFilter: (v: AntagonistFilter) => void
  climaxFilter: ClimaxFilter
  setClimaxFilter: (v: ClimaxFilter) => void
  invariantFilter: InvariantFilter
  setInvariantFilter: (v: InvariantFilter) => void
  familyFilter: string
  setFamilyFilter: (v: string) => void
  fingerprintFilter: string
  setFingerprintFilter: (v: string) => void
  search: string
  setSearch: (v: string) => void
  stats: typeof CORPUS_DATA.stats
  resultCount: number
  viewMode: ViewMode
  setViewMode: (v: ViewMode) => void
  activeFilterCount: number
  onClearFilters: () => void
  selectedStoryIds: Set<string>
  onClearSelection: () => void
  onOpenBatchApply: () => void
}

function FilterBar(props: FilterBarProps) {
  const chipClass = (active: boolean) => ({
    backgroundColor: active ? 'color-mix(in oklab, var(--accent, #C19A6B) 22%, transparent)' : 'color-mix(in oklab, var(--bg-elevated, #18181B) 70%, transparent)',
    color: active ? 'var(--accent-bright, #E5B97F)' : 'var(--fg-muted, #A39E8E)',
    border: `1px solid color-mix(in oklab, var(--accent, #C19A6B) ${active ? 60 : 30}%, transparent)`,
  } as const)

  const storyTypes: { key: StoryTypeFilter; label: string; count?: number }[] = [
    { key: 'all', label: 'All · 全部' },
    { key: 'manju', label: 'Manju · 漫剧', count: props.stats.byStoryType.manju },
    { key: 'branch-drama', label: 'Branch · 分支', count: props.stats.byStoryType['branch-drama'] },
    { key: 'viral-scene', label: 'Viral · 病毒', count: props.stats.byStoryType['viral-scene'] },
  ]
  const branchings: { key: BranchingFilter; label: string; count?: number }[] = [
    { key: 'all', label: 'All · 全部' },
    { key: 'rigid-tree', label: 'Rigid · 刚性', count: props.stats.byBranchingType['rigid-tree'] },
    { key: 'multi-lane', label: 'Multi-Lane · 多线路', count: props.stats.byBranchingType['multi-lane'] },
    { key: 'linear', label: 'Linear · 线性', count: props.stats.byBranchingType.linear },
  ]
  const antagonists: { key: AntagonistFilter; label: string; count?: number }[] = [
    { key: 'all', label: 'All · 全部' },
    { key: 'character', label: 'Char · 人物', count: props.stats.byAntagonistType.character },
    { key: 'environmental', label: 'Env · 环境', count: props.stats.byAntagonistType.environmental },
    { key: 'situational', label: 'Sit · 情境', count: props.stats.byAntagonistType.situational },
    { key: 'none', label: 'None · 无', count: props.stats.byAntagonistType.none },
  ]
  const climaxes: { key: ClimaxFilter; label: string; count?: number }[] = [
    { key: 'all', label: 'All · 全部' },
    { key: 'single', label: 'Single · 单一', count: props.stats.byClimaxMode.single },
    { key: 'per-path', label: 'Per-Path · 路径', count: props.stats.byClimaxMode['per-path'] },
    { key: 'per-lane', label: 'Per-Lane · 线路', count: props.stats.byClimaxMode['per-lane'] },
    { key: 'absent', label: 'Absent · 无', count: props.stats.byClimaxMode.absent },
  ]
  const invariants: { key: InvariantFilter; label: string }[] = [
    { key: 'all', label: 'All · 全部' },
    { key: 'pass-all', label: 'Pass · 通过' },
    { key: 'partial', label: 'Partial · 部分' },
    { key: 'fail-all', label: 'Fail · 失败' },
  ]
  // A8: family chips sorted by count desc
  const families: { key: string; label: string; count: number }[] = Object.entries(props.stats.byFamily)
    .map(([k, n]) => ({ key: k, label: k, count: n as number }))
    .sort((a, b) => b.count - a.count)

  return (
    <div className="mt-6 space-y-3">
      {/* View mode toggle (A5: variants as first-class) */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <Tabs value={props.viewMode} onValueChange={(v) => props.setViewMode(v as ViewMode)}>
          <TabsList>
            <TabsTrigger value="stories">Stories · 故事 ({props.stats.totalStories})</TabsTrigger>
            <TabsTrigger value="variants">Variants · 变体 ({props.stats.totalVariants})</TabsTrigger>
            <TabsTrigger value="fingerprints">Fingerprints · 指纹 ({props.stats.topFingerprints.length})</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-2">
          {props.selectedStoryIds.size > 0 && (
            <>
              <Badge variant="outline" className="font-mono-editorial" style={{ color: 'var(--accent-bright, #E5B97F)', borderColor: 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' }}>
                {props.selectedStoryIds.size} selected · 已选
              </Badge>
              <Button size="sm" variant="ghost" onClick={props.onClearSelection} className="text-xs">Clear · 清除</Button>
              <Button size="sm" onClick={props.onOpenBatchApply} className="gap-1.5"
                style={{ backgroundColor: 'var(--accent, #C19A6B)', color: 'var(--bg, #0E0E10)' }}>
                <Wand2 size={12} />
                <span className="text-xs">Apply Pattern · 应用模式</span>
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Filter groups */}
      <div className="space-y-2">
        <FilterRow label="Story Type · 类型" items={storyTypes} active={props.storyTypeFilter} onSelect={props.setStoryTypeFilter} chipClass={chipClass} />
        <FilterRow label="Branching · 分支" items={branchings} active={props.branchingFilter} onSelect={props.setBranchingFilter} chipClass={chipClass} />
        <FilterRow label="Antagonist · 反派" items={antagonists} active={props.antagonistFilter} onSelect={props.setAntagonistFilter} chipClass={chipClass} />
        <FilterRow label="Climax · 爆点" items={climaxes} active={props.climaxFilter} onSelect={props.setClimaxFilter} chipClass={chipClass} />
        <FilterRow label="Invariant · 校验" items={invariants} active={props.invariantFilter} onSelect={props.setInvariantFilter} chipClass={chipClass} />
        <FilterRow label="Family · 家族 (16)" items={families} active={props.familyFilter} onSelect={props.setFamilyFilter} chipClass={chipClass} />
      </div>

      {/* Search + result count */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--fg-faint, #5C5849)' }} />
          <Input
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
            placeholder="Search stories, titles, genres, families, sub-clusters… · 搜索故事、标题、流派、家族、子簇…"
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
          {props.resultCount} results · 结果
        </Badge>
        {props.activeFilterCount > 0 && (
          <Button size="sm" variant="ghost" onClick={props.onClearFilters} className="text-xs">
            Clear {props.activeFilterCount} filter{props.activeFilterCount !== 1 ? 's' : ''} · 清除
          </Button>
        )}
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

/* -------------------------------------------------------------------------- */
/*  Story row (A6: checkbox column, A11: emoji prefix, A4: clickable variants) */
/* -------------------------------------------------------------------------- */

function StoryRow({ story, variants, expanded, onToggle, onSelect, onVariantClick, selected, onToggleSelected, index }: {
  story: StoryRecord
  variants: VariantInstance[]
  expanded: boolean
  onToggle: () => void
  onSelect: () => void
  onVariantClick: (variantId: string) => void
  selected: boolean
  onToggleSelected: () => void
  index: number
}) {
  const branchingLabel = BRANCHING_LABEL[story.branchingInfo.type]
  const antagInfo = ANTAGONIST_LABEL[story.antagonistType]
  const climaxInfo = CLIMAX_LABEL[story.climaxMode]
  const invColor = story.invariantPassCount === 3 ? 'var(--success, #6B8E5C)' : story.invariantPassCount > 0 ? 'var(--accent, #C19A6B)' : 'var(--danger, #B85C5C)'

  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.01, 0.3) }}
      style={{
        backgroundColor: selected ? 'color-mix(in oklab, var(--accent, #C19A6B) 8%, transparent)' : 'color-mix(in oklab, var(--bg-elevated, #18181B) 50%, transparent)',
        border: `1px solid ${selected ? 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' : 'color-mix(in oklab, var(--fg-faint, #5C5849) 25%, transparent)'}`,
        borderRadius: '8px',
      }}
      className="overflow-hidden"
    >
      <div className="flex items-center gap-3 p-3">
        {/* A6: batch checkbox */}
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggleSelected}
          className="flex-shrink-0"
          style={{ accentColor: 'var(--accent, #C19A6B)' }}
          aria-label="Select for batch"
        />
        {/* Expand toggle */}
        <button onClick={onToggle} className="flex-shrink-0 p-1 rounded" style={{ color: 'var(--fg-muted, #A39E8E)' }} aria-label={expanded ? 'Collapse' : 'Expand'}>
          {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
        {/* Title + meta (A11: emoji prefix for viral-scene) */}
        <div className="flex-1 min-w-0 cursor-pointer" onClick={onSelect}>
          <div className="flex items-baseline gap-2 flex-wrap">
            {story.categoryEmoji && <span className="text-sm">{story.categoryEmoji}</span>}
            <span className="font-serif-headline text-sm font-bold truncate" style={{ color: 'var(--fg, #F5F0E1)' }}>
              {story.title_zh}
            </span>
            {story.title_en && <span className="text-xs" style={{ color: 'var(--fg-faint, #5C5849)' }}>/ {story.title_en}</span>}
            {story.subCluster && story.subCluster !== 'general' && (
              <Badge variant="outline" className="text-[9px] font-mono-editorial py-0" style={{ color: 'var(--fg-muted, #A39E8E)', borderColor: 'color-mix(in oklab, var(--fg-faint, #5C5849) 30%, transparent)' }}>
                .{story.subCluster}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2 flex-wrap mt-0.5 text-[11px]" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
            <span className="font-mono-editorial">{story.id}</span>
            <span>·</span>
            <span>{story.genre}</span>
            {story.family && <><span>·</span><span style={{ color: 'var(--accent, #C19A6B)' }}>{story.family}</span></>}
          </div>
        </div>
        {/* Badges */}
        <div className="flex items-center gap-1.5 flex-wrap justify-end">
          <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: branchingLabel.color, borderColor: `color-mix(in oklab, ${branchingLabel.color} 40%, transparent)` }}>
            <GitBranch size={9} className="mr-1" />{branchingLabel.en}
          </Badge>
          <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: antagInfo.color, borderColor: `color-mix(in oklab, ${antagInfo.color} 40%, transparent)` }}>
            {antagInfo.en}
          </Badge>
          <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: climaxInfo.color, borderColor: `color-mix(in oklab, ${climaxInfo.color} 40%, transparent)` }}>
            {climaxInfo.en}
          </Badge>
          <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: 'var(--fg-muted, #A39E8E)', borderColor: 'color-mix(in oklab, var(--fg-faint, #5C5849) 40%, transparent)' }}>
            <Layers size={9} className="mr-1" />{story.variantCount}V
          </Badge>
          <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: invColor, borderColor: `color-mix(in oklab, ${invColor} 40%, transparent)` }}>
            {story.invariantPassCount}/{story.invariantTotal}
          </Badge>
        </div>
      </div>
      {expanded && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="border-t"
          style={{ borderColor: 'color-mix(in oklab, var(--fg-faint, #5C5849) 20%, transparent)' }}>
          <div className="p-3 space-y-2">
            <div className="text-[11px] font-mono-editorial" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
              <span style={{ color: 'var(--accent, #C19A6B)' }}>branching:</span> {story.branchingInfo.detail}
            </div>
            <div className="text-[11px] font-mono-editorial" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
              <span style={{ color: 'var(--accent, #C19A6B)' }}>fingerprint:</span> {story.patternFingerprint}
            </div>
            {story.synthesizedStageCount && story.synthesizedStageCount > 0 && (
              <div className="text-[11px] flex items-start gap-2" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
                <Zap size={11} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-bright, #E5B97F)' }} />
                <span>{story.synthesizedStageCount} stage{story.synthesizedStageCount !== 1 ? 's' : ''} synthesized from act template (pro field was null)</span>
              </div>
            )}
            {story.topGap && (
              <div className="text-[11px] flex items-start gap-2" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
                <AlertCircle size={11} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--danger, #B85C5C)' }} />
                <span>{story.topGap}</span>
              </div>
            )}
            <div className="mt-2">
              <div className="text-[10px] font-mono-editorial tracking-wider uppercase mb-1.5" style={{ color: 'var(--fg-faint, #5C5849)' }}>
                Variants ({variants.length}) · 变体实例 — click to examine · 点击查看
              </div>
              <div className="flex flex-wrap gap-1">
                {variants.slice(0, 24).map(v => (
                  <button
                    key={v.variantId}
                    onClick={() => onVariantClick(v.variantId)}
                    className="px-1.5 py-0.5 rounded text-[10px] transition-all hover:scale-[1.05] cursor-pointer"
                    style={{
                      backgroundColor: 'color-mix(in oklab, var(--accent, #C19A6B) 12%, transparent)',
                      color: 'var(--accent-bright, #E5B97F)',
                      border: '1px solid color-mix(in oklab, var(--accent, #C19A6B) 25%, transparent)',
                    }}
                    title={`Variant ${v.variantIndex} · ${v.variantType} — click to examine`}
                  >
                    <span className="font-mono-editorial">#{v.variantIndex}</span> {v.variantLabel_zh}
                  </button>
                ))}
                {variants.length > 24 && <span className="px-1.5 py-0.5 text-[10px]" style={{ color: 'var(--fg-faint, #5C5849)' }}>+ {variants.length - 24} more</span>}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Variant row (A5: variants as first-class browsable entities)              */
/* -------------------------------------------------------------------------- */

function VariantRow({ variant, parentStory, onSelect, index }: {
  variant: VariantInstance
  parentStory: StoryRecord
  onSelect: () => void
  index: number
}) {
  const branchingLabel = BRANCHING_LABEL[parentStory.branchingInfo.type]
  return (
    <motion.div
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.005, 0.3) }}
      className="cursor-pointer p-3 rounded-lg flex items-center gap-3"
      style={{
        backgroundColor: 'color-mix(in oklab, var(--bg-elevated, #18181B) 50%, transparent)',
        border: '1px solid color-mix(in oklab, var(--fg-faint, #5C5849) 25%, transparent)',
      }}
      onClick={onSelect}
    >
      <Badge variant="outline" className="text-[10px] font-mono-editorial flex-shrink-0" style={{ color: 'var(--accent-bright, #E5B97F)', borderColor: 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' }}>
        #{variant.variantIndex} · {variant.variantType}
      </Badge>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-serif-headline text-sm font-bold truncate" style={{ color: 'var(--fg, #F5F0E1)' }}>
            {variant.variantLabel_zh}
          </span>
          <span className="text-xs" style={{ color: 'var(--fg-faint, #5C5849)' }}>
            ← {parentStory.title_zh}
          </span>
        </div>
        <div className="text-[11px] mt-0.5" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
          <span className="font-mono-editorial">{parentStory.id}</span> · {parentStory.genre} · {parentStory.family}
        </div>
      </div>
      <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: branchingLabel.color, borderColor: `color-mix(in oklab, ${branchingLabel.color} 40%, transparent)` }}>
        {branchingLabel.en}
      </Badge>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Fingerprint matrix (A3)                                                     */
/* -------------------------------------------------------------------------- */

function FingerprintMatrix({ stories, fingerprintFilter, onFingerprintClick }: {
  stories: StoryRecord[]
  fingerprintFilter: string
  onFingerprintClick: (fp: string) => void
}) {
  // Group stories by fingerprint, then by story type
  const fingerprintGroups = useMemo(() => {
    const m = new Map<string, { fingerprint: string; byType: Record<string, number>; total: number; sample: StoryRecord }>()
    for (const s of stories) {
      const fp = s.patternFingerprint
      if (!m.has(fp)) {
        m.set(fp, { fingerprint: fp, byType: {}, total: 0, sample: s })
      }
      const g = m.get(fp)!
      g.byType[s.storyType] = (g.byType[s.storyType] || 0) + 1
      g.total += 1
    }
    return Array.from(m.values()).sort((a, b) => b.total - a.total)
  }, [stories])

  return (
    <div className="space-y-2">
      <p className="text-xs mb-3" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
        {fingerprintGroups.length} distinct structural fingerprints across {stories.length} stories. Click to filter the story list. · {fingerprintGroups.length} 个不同结构指纹，跨 {stories.length} 个故事。点击以筛选故事列表。
      </p>
      {fingerprintGroups.map(g => {
        const isActive = fingerprintFilter === g.fingerprint
        return (
          <motion.button
            key={g.fingerprint}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => onFingerprintClick(g.fingerprint)}
            className="w-full text-left p-3 rounded-lg flex items-center gap-3"
            style={{
              backgroundColor: isActive ? 'color-mix(in oklab, var(--accent, #C19A6B) 12%, transparent)' : 'color-mix(in oklab, var(--bg-elevated, #18181B) 50%, transparent)',
              border: `1px solid ${isActive ? 'var(--accent, #C19A6B)' : 'color-mix(in oklab, var(--fg-faint, #5C5849) 25%, transparent)'}`,
            }}
          >
            <div className="font-serif-headline text-2xl font-bold flex-shrink-0" style={{ color: isActive ? 'var(--accent-bright, #E5B97F)' : 'var(--accent, #C19A6B)' }}>
              {g.total}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-mono-editorial text-[11px] truncate" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
                {g.fingerprint}
              </div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--fg, #F5F0E1)' }}>
                Sample: {g.sample.title_zh} · {g.sample.family}
              </div>
            </div>
            <div className="flex gap-1 flex-wrap justify-end">
              {STORY_TYPE_KEYS.map(t => {
                const n = g.byType[t]
                if (!n) return null
                const lbl = STORY_TYPE_LABEL[t]
                return (
                  <Badge key={t} variant="outline" className="text-[10px] font-mono-editorial" style={{ color: lbl.color, borderColor: `color-mix(in oklab, ${lbl.color} 40%, transparent)` }}>
                    {lbl.en}: {n}
                  </Badge>
                )
              })}
            </div>
          </motion.button>
        )
      })}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Story detail sheet (A4: clickable variant chips, A7: Pattern Library mapping, A12: synthesized stage badge) */
/* -------------------------------------------------------------------------- */

function StoryDetailSheet({ story, variants, open, onOpenChange, onVariantClick, libraryPatterns }: {
  story: StoryRecord | null
  variants: VariantInstance[]
  open: boolean
  onOpenChange: (open: boolean) => void
  onVariantClick: (variantId: string) => void
  libraryPatterns: StoryPattern[]
}) {
  // A7: compute top 3 closest Pattern Library matches — useMemo MUST be before any early return
  const closestPatterns = useMemo(() => {
    if (!story) return []
    return libraryPatterns.map(p => {
      let score = 0
      // Family alignment
      if (p.familyKey === story.familyKey) score += 30
      else if (p.familyKey && p.familyKey.includes(story.familyKey)) score += 10
      // Branching alignment (rough heuristic)
      if (p.familyKey === 'beatsheet' && story.branchingInfo.type === 'rigid-tree') score += 15
      if (p.familyKey === 'circle' && story.branchingInfo.type === 'multi-lane') score += 15
      if (p.familyKey === 'kishotenketsu' && story.branchingInfo.type === 'linear') score += 15
      if (p.familyKey === 'jo-ha-kyu' && story.branchingInfo.type === 'linear') score += 15
      // Stage count proximity
      const stageDiff = Math.abs(p.stages.length - story.stageCount)
      score += Math.max(0, 15 - stageDiff * 3)
      // Archetype count proximity
      const archDiff = Math.abs(p.archetypes.length - story.archetypeCount)
      score += Math.max(0, 10 - archDiff * 2)
      return { pattern: p, score }
    }).sort((a, b) => b.score - a.score).slice(0, 3)
  }, [libraryPatterns, story])

  if (!story) return null
  const branchingLabel = BRANCHING_LABEL[story.branchingInfo.type]
  const antagInfo = ANTAGONIST_LABEL[story.antagonistType]
  const climaxInfo = CLIMAX_LABEL[story.climaxMode]

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto"
        style={{
          backgroundColor: 'var(--bg, #0E0E10)',
          color: 'var(--fg, #F5F0E1)',
          borderLeft: '1px solid color-mix(in oklab, var(--accent, #C19A6B) 30%, transparent)',
        }}>
        <SheetHeader>
          <SheetTitle className="font-serif-headline text-2xl" style={{ color: 'var(--fg, #F5F0E1)' }}>
            {story.categoryEmoji && <span className="mr-2">{story.categoryEmoji}</span>}
            {story.title_zh}
          </SheetTitle>
          {story.title_en && <SheetDescription className="text-base" style={{ color: 'var(--accent, #C19A6B)' }}>{story.title_en}</SheetDescription>}
          <div className="flex items-center gap-2 flex-wrap mt-2">
            <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: branchingLabel.color, borderColor: `color-mix(in oklab, ${branchingLabel.color} 40%, transparent)` }}>
              {BRANCHING_LABEL[story.branchingInfo.type].en}
            </Badge>
            <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: antagInfo.color, borderColor: `color-mix(in oklab, ${antagInfo.color} 40%, transparent)` }}>
              {antagInfo.en}
            </Badge>
            <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: climaxInfo.color, borderColor: `color-mix(in oklab, ${climaxInfo.color} 40%, transparent)` }}>
              {climaxInfo.en}
            </Badge>
            {story.subCluster && story.subCluster !== 'general' && (
              <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: 'var(--fg-muted, #A39E8E)', borderColor: 'color-mix(in oklab, var(--fg-faint, #5C5849) 30%, transparent)' }}>
                .{story.subCluster}
              </Badge>
            )}
          </div>
        </SheetHeader>
        <div className="px-4 pb-6 space-y-6 mt-4">
          <Section title="Identity · 身份" mono>
            <Field label="ID" value={story.id} />
            <Field label="Genre" value={story.genre} />
            <Field label="Family" value={`${story.family} · ${story.familyKey}`} accent />
            {story.subCluster && <Field label="SubCluster" value={story.subCluster} accent />}
            {story.tagline && <Field label="Tagline" value={story.tagline} multiline />}
          </Section>
          <Section title="Branching · 分支结构" mono>
            <Field label="Type" value={`${branchingLabel.en} · ${branchingLabel.zh}`} accent />
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
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-mono-editorial text-[10px]" style={{ color: 'var(--accent, #C19A6B)' }}>{String(i+1).padStart(2,'0')}</span>
                    <span className="font-mono-editorial text-[10px]" style={{ color: 'var(--fg-muted, #A39E8E)' }}>{s.slotId}</span>
                    <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: 'var(--accent-bright, #E5B97F)', borderColor: 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' }}>
                      {s.role}
                    </Badge>
                    {/* A12: synthesized-from-template badge */}
                    {s.synthesizedFromTemplate && (
                      <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: 'var(--accent-bright, #E5B97F)', borderColor: 'color-mix(in oklab, var(--accent-bright, #E5B97F) 60%, transparent)' }}>
                        <Zap size={9} className="mr-1" />synth
                      </Badge>
                    )}
                    <span className="text-sm flex-1" style={{ color: 'var(--fg, #F5F0E1)' }}>{s.label_zh}</span>
                  </div>
                  {s.triggerConstraint_zh && <div className="mt-1 text-[11px] pl-7" style={{ color: 'var(--fg-muted, #A39E8E)' }}>{s.triggerConstraint_zh}</div>}
                </div>
              ))}
            </div>
          </Section>
          <Section title={`Archetypes (${story.archetypes.length}) · 原型`}>
            <div className="flex flex-wrap gap-1.5">
              {story.archetypes.map((a, i) => (
                <span key={i} className="px-2 py-1 rounded text-[11px]"
                  style={{ backgroundColor: 'color-mix(in oklab, var(--accent, #C19A6B) 12%, transparent)', color: 'var(--accent-bright, #E5B97F)', border: '1px solid color-mix(in oklab, var(--accent, #C19A6B) 25%, transparent)' }}>
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
            {story.proWasNull !== undefined && <Field label="proWasNull" value={String(story.proWasNull)} accent />}
            {story.synthesizedStageCount !== undefined && story.synthesizedStageCount > 0 && <Field label="synthesizedStageCount" value={String(story.synthesizedStageCount)} accent />}
          </Section>
          <Section title="Invariants · 不变量校验">
            <div className="space-y-1.5">
              <InvariantRow label="stages-length-range" passed={story.invariantSummary.stagesLengthRange} />
              <InvariantRow label="turningPoint-slot-coverage" passed={story.invariantSummary.turningPointSlotCoverage} />
              <InvariantRow label="mandatory-roles-present" passed={story.invariantSummary.mandatoryRolesPresent} />
            </div>
            <div className="mt-2 text-[11px] font-mono-editorial" style={{ color: 'var(--fg-muted, #A39E8E)' }}>Pass: {story.invariantPassCount}/{story.invariantTotal}</div>
          </Section>
          {/* A4: clickable variants */}
          <Section title={`Variants (${variants.length}) · 变体实例（1:many）— click to examine`}>
            <p className="text-[11px] mb-2" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
              Each story is NOT atomic — it explodes to N variants based on endings/lanes/linear shape. Click any variant to examine it as its own entity with the parent skeleton + variant-specific resolution.
              <br />
              <span className="font-sans-zh">每个故事不是原子单元——根据结局/线路/线性形态展开为 N 个变体。点击任意变体查看作为独立实体的形态（父骨架 + 变体专属结局 / 线路）。</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-96 overflow-y-auto">
              {variants.map(v => (
                <button key={v.variantId} onClick={() => onVariantClick(v.variantId)}
                  className="p-2 rounded text-[11px] text-left transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: 'color-mix(in oklab, var(--bg-subtle, #1F1F23) 50%, transparent)',
                    border: '1px solid color-mix(in oklab, var(--fg-faint, #5C5849) 20%, transparent)',
                    cursor: 'pointer',
                  }}>
                  <div className="font-mono-editorial text-[10px]" style={{ color: 'var(--accent, #C19A6B)' }}>#{v.variantIndex} · {v.variantType}</div>
                  <div style={{ color: 'var(--fg, #F5F0E1)' }}>{v.variantLabel_zh}</div>
                  {v.laneKey && <div className="font-mono-editorial text-[10px] mt-0.5" style={{ color: 'var(--fg-faint, #5C5849)' }}>lane: {v.laneKey}</div>}
                </button>
              ))}
            </div>
          </Section>
          {/* A7: closest Pattern Library matches */}
          <Section title="Closest Pattern Library matches · 最近 Pattern Library 匹配">
            <p className="text-[11px] mb-2" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
              Where does this story land in the current structure? Top 3 closest matches by family / branching / stage-count / archetype-count proximity.
              <br />
              <span className="font-sans-zh">这个故事在当前结构中处于何处？按家族 / 分支 / 阶段数 / 原型数相似度排名前 3 的匹配。</span>
            </p>
            <div className="grid grid-cols-1 gap-1.5">
              {closestPatterns.map(({ pattern, score }, i) => (
                <div key={pattern.id} className="p-2 rounded text-[11px]"
                  style={{
                    backgroundColor: i === 0 ? 'color-mix(in oklab, var(--accent, #C19A6B) 12%, transparent)' : 'color-mix(in oklab, var(--bg-subtle, #1F1F23) 50%, transparent)',
                    border: `1px solid ${i === 0 ? 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' : 'color-mix(in oklab, var(--fg-faint, #5C5849) 20%, transparent)'}`,
                  }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono-editorial" style={{ color: 'var(--accent-bright, #E5B97F)' }}>#{i+1}</span>
                      <span className="ml-2 font-serif-headline text-sm" style={{ color: 'var(--fg, #F5F0E1)' }}>{pattern.name.en}</span>
                      <span className="ml-1 font-sans-zh" style={{ color: 'var(--accent, #C19A6B)' }}>· {pattern.name.zh}</span>
                    </div>
                    <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: 'var(--accent-bright, #E5B97F)', borderColor: 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' }}>
                      score: {score}
                    </Badge>
                  </div>
                  <div className="text-[10px] mt-1 font-mono-editorial" style={{ color: 'var(--fg-faint, #5C5849)' }}>
                    {pattern.stages.length} stages · {pattern.archetypes.length} archetypes · {pattern.familyKey}
                  </div>
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

/* -------------------------------------------------------------------------- */
/*  Variant detail sheet (A4) — shows parent skeleton + variant-specific content */
/* -------------------------------------------------------------------------- */

function VariantDetailSheet({ variant, parentStory, open, onOpenChange }: {
  variant: VariantInstance | null
  parentStory: StoryRecord | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!variant || !parentStory) return null
  const branchingLabel = BRANCHING_LABEL[parentStory.branchingInfo.type]
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto"
        style={{
          backgroundColor: 'var(--bg, #0E0E10)',
          color: 'var(--fg, #F5F0E1)',
          borderLeft: '1px solid color-mix(in oklab, var(--accent-bright, #E5B97F) 30%, transparent)',
        }}>
        <SheetHeader>
          <SheetTitle className="font-serif-headline text-xl" style={{ color: 'var(--fg, #F5F0E1)' }}>
            <span className="font-mono-editorial text-sm" style={{ color: 'var(--accent-bright, #E5B97F)' }}>#{variant.variantIndex} · {variant.variantType}</span>
            <br />
            {variant.variantLabel_zh}
          </SheetTitle>
          <SheetDescription className="text-sm" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
            Variant of: <span style={{ color: 'var(--accent, #C19A6B)' }}>{parentStory.title_zh}</span>
            <br />
            <span className="font-sans-zh">变体属于：<span style={{ color: 'var(--accent, #C19A6B)' }}>{parentStory.title_zh}</span></span>
          </SheetDescription>
          <div className="flex items-center gap-2 flex-wrap mt-2">
            <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: branchingLabel.color, borderColor: `color-mix(in oklab, ${branchingLabel.color} 40%, transparent)` }}>
              {branchingLabel.en}
            </Badge>
            <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: 'var(--accent-bright, #E5B97F)', borderColor: 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' }}>
              variant {variant.variantIndex} of {parentStory.variantCount}
            </Badge>
            {variant.laneKey && (
              <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: 'var(--accent-bright, #E5B97F)', borderColor: 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' }}>
                lane: {variant.laneKey}
              </Badge>
            )}
          </div>
        </SheetHeader>
        <div className="px-4 pb-6 space-y-6 mt-4">
          <Section title="Variant-specific content · 变体专属内容">
            {variant.variantResolution_zh ? (
              <div className="p-3 rounded" style={{ backgroundColor: 'color-mix(in oklab, var(--accent, #C19A6B) 8%, transparent)', border: '1px solid color-mix(in oklab, var(--accent, #C19A6B) 30%, transparent)' }}>
                <div className="font-mono-editorial text-[10px] uppercase tracking-wider mb-1" style={{ color: 'var(--accent-bright, #E5B97F)' }}>
                  Resolution (ending-specific) · 结局
                </div>
                <div className="text-sm" style={{ color: 'var(--fg, #F5F0E1)' }}>
                  {variant.variantResolution_zh}
                </div>
              </div>
            ) : variant.variantType === 'lane' ? (
              <div className="p-3 rounded" style={{ backgroundColor: 'color-mix(in oklab, var(--accent, #C19A6B) 8%, transparent)', border: '1px solid color-mix(in oklab, var(--accent, #C19A6B) 30%, transparent)' }}>
                <div className="font-mono-editorial text-[10px] uppercase tracking-wider mb-1" style={{ color: 'var(--accent-bright, #E5B97F)' }}>
                  Lane playthrough · 该线路演绎
                </div>
                <div className="text-sm" style={{ color: 'var(--fg, #F5F0E1)' }}>
                  This is the <span className="font-mono-editorial" style={{ color: 'var(--accent-bright, #E5B97F)' }}>{variant.laneKey}</span> lane variant — same skeleton, different playthrough emphasis.
                </div>
              </div>
            ) : (
              <div className="p-3 rounded" style={{ backgroundColor: 'color-mix(in oklab, var(--bg-subtle, #1F1F23) 50%, transparent)', border: '1px solid color-mix(in oklab, var(--fg-faint, #5C5849) 20%, transparent)' }}>
                <div className="text-sm" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
                  Linear single-shot — no variant-specific content. The variant IS the story.
                </div>
              </div>
            )}
          </Section>
          <Section title="Inherited from parent · 从父故事继承">
            <Field label="Family" value={`${parentStory.family} · ${parentStory.familyKey}`} accent />
            <Field label="Branching" value={parentStory.branchingInfo.detail} multiline />
            <Field label="Fingerprint" value={parentStory.patternFingerprint} mono />
            <Field label="Stage count" value={String(parentStory.stageCount)} />
            <Field label="Archetype count" value={String(parentStory.archetypeCount)} />
          </Section>
          <Section title="Inherited stages · 继承的阶段">
            <div className="space-y-1.5">
              {parentStory.stages.map((s, i) => (
                <div key={s.slotId} className="p-2 rounded text-[11px]"
                  style={{ backgroundColor: 'color-mix(in oklab, var(--bg-subtle, #1F1F23) 50%, transparent)', border: '1px solid color-mix(in oklab, var(--fg-faint, #5C5849) 20%, transparent)' }}>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-mono-editorial text-[10px]" style={{ color: 'var(--accent, #C19A6B)' }}>{String(i+1).padStart(2,'0')}</span>
                    <span className="font-mono-editorial text-[10px]" style={{ color: 'var(--fg-muted, #A39E8E)' }}>{s.slotId}</span>
                    <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: 'var(--accent-bright, #E5B97F)', borderColor: 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' }}>{s.role}</Badge>
                    {s.synthesizedFromTemplate && (
                      <Badge variant="outline" className="text-[10px] font-mono-editorial" style={{ color: 'var(--accent-bright, #E5B97F)', borderColor: 'color-mix(in oklab, var(--accent-bright, #E5B97F) 60%, transparent)' }}>
                        <Zap size={9} className="mr-1" />synth
                      </Badge>
                    )}
                    <span style={{ color: 'var(--fg, #F5F0E1)' }}>{s.label_zh}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </SheetContent>
    </Sheet>
  )
}

/* -------------------------------------------------------------------------- */
/*  Batch apply sheet (A6) — apply a pattern to many stories for stress test   */
/* -------------------------------------------------------------------------- */

function BatchApplySheet({ open, onOpenChange, selectedStories, libraryPatterns }: {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedStories: StoryRecord[]
  libraryPatterns: StoryPattern[]
}) {
  const [selectedPatternId, setSelectedPatternId] = useState<string | null>(null)
  const [results, setResults] = useState<{ story: StoryRecord; pattern: StoryPattern; verdict: 'fits' | 'forces' | 'breaks'; reason: string }[] | null>(null)

  function computeResults() {
    if (!selectedPatternId) return
    const pattern = libraryPatterns.find(p => p.id === selectedPatternId)
    if (!pattern) return
    const rs = selectedStories.map(s => {
      let verdict: 'fits' | 'forces' | 'breaks' = 'fits'
      const reasons: string[] = []
      // Heuristic: family alignment
      if (pattern.familyKey === s.familyKey) {
        reasons.push('family match')
      } else {
        reasons.push('family mismatch')
        verdict = 'forces'
      }
      // Branching alignment
      if (pattern.familyKey === 'beatsheet' && s.branchingInfo.type === 'rigid-tree') {
        reasons.push('branching forces single-path climax onto multi-path story')
        verdict = 'forces'
      } else if (pattern.familyKey === 'kishotenketsu' && s.branchingInfo.type === 'linear') {
        reasons.push('branching fit')
      } else if (s.branchingInfo.type === 'rigid-tree' && pattern.stages.length < s.branchingInfo.endingCount!) {
        reasons.push(`pattern has ${pattern.stages.length} stages but story has ${s.branchingInfo.endingCount} endings — stages undercount`)
        verdict = 'breaks'
      }
      // Invariant pass rate
      if (s.invariantPassCount < 3) {
        reasons.push(`${s.invariantPassCount}/3 invariants pass`)
        if (verdict === 'fits') verdict = 'forces'
      }
      // Stage count proximity
      const stageDiff = Math.abs(pattern.stages.length - s.stageCount)
      if (stageDiff > 5) {
        reasons.push(`stage count diff: ${stageDiff}`)
        if (verdict === 'fits') verdict = 'forces'
      }
      return { story: s, pattern, verdict, reason: reasons.join('; ') }
    })
    setResults(rs)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto"
        style={{
          backgroundColor: 'var(--bg, #0E0E10)',
          color: 'var(--fg, #F5F0E1)',
          borderLeft: '1px solid color-mix(in oklab, var(--accent, #C19A6B) 30%, transparent)',
        }}>
        <SheetHeader>
          <SheetTitle className="font-serif-headline text-xl" style={{ color: 'var(--fg, #F5F0E1)' }}>
            <Wand2 size={16} className="inline mr-2" style={{ color: 'var(--accent, #C19A6B)' }} />
            Batch: Apply Pattern at Scale · 批量应用模式
          </SheetTitle>
          <SheetDescription className="text-sm" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
            Apply a Pattern Library pattern to {selectedStories.length} selected stories. The verdict (fits / forces / breaks) is a heuristic based on family alignment, branching compatibility, stage-count proximity, and invariant pass rate.
          </SheetDescription>
        </SheetHeader>
        <div className="px-4 pb-6 space-y-6 mt-4">
          <Section title={`Selected stories (${selectedStories.length}) · 已选故事`}>
            <div className="text-[11px] space-y-1" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
              {selectedStories.slice(0, 8).map(s => (
                <div key={s.id} className="font-mono-editorial">
                  <span style={{ color: 'var(--accent, #C19A6B)' }}>{s.id}</span> · {s.title_zh} · {s.family}
                </div>
              ))}
              {selectedStories.length > 8 && <div>+ {selectedStories.length - 8} more</div>}
            </div>
          </Section>
          <Section title="Pick a pattern · 选择模式" mono>
            <div className="space-y-1.5 max-h-64 overflow-y-auto">
              {libraryPatterns.map(p => (
                <button key={p.id} onClick={() => setSelectedPatternId(p.id)}
                  className="w-full text-left p-2 rounded text-[11px] transition-all hover:scale-[1.01]"
                  style={{
                    backgroundColor: selectedPatternId === p.id ? 'color-mix(in oklab, var(--accent, #C19A6B) 12%, transparent)' : 'color-mix(in oklab, var(--bg-subtle, #1F1F23) 50%, transparent)',
                    border: `1px solid ${selectedPatternId === p.id ? 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' : 'color-mix(in oklab, var(--fg-faint, #5C5849) 20%, transparent)'}`,
                    cursor: 'pointer',
                  }}>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif-headline text-sm" style={{ color: 'var(--fg, #F5F0E1)' }}>{p.name.en}</span>
                    <span className="font-sans-zh" style={{ color: 'var(--accent, #C19A6B)' }}>· {p.name.zh}</span>
                  </div>
                  <div className="font-mono-editorial text-[10px]" style={{ color: 'var(--fg-faint, #5C5849)' }}>
                    {p.stages.length} stages · {p.archetypes.length} archetypes · {p.familyKey}
                  </div>
                </button>
              ))}
            </div>
          </Section>
          {selectedPatternId && (
            <Button onClick={computeResults} className="w-full gap-2"
              style={{ backgroundColor: 'var(--accent, #C19A6B)', color: 'var(--bg, #0E0E10)' }}>
              <Wand2 size={14} />
              Run stress test · 运行压力测试
            </Button>
          )}
          {results && (
            <Section title={`Results · 结果 (${results.length})`}>
              <div className="space-y-1.5 max-h-96 overflow-y-auto">
                {results.map((r, i) => (
                  <div key={i} className="p-2 rounded text-[11px]"
                    style={{
                      backgroundColor: r.verdict === 'fits' ? 'color-mix(in oklab, var(--success, #6B8E5C) 8%, transparent)'
                        : r.verdict === 'forces' ? 'color-mix(in oklab, var(--accent, #C19A6B) 8%, transparent)'
                        : 'color-mix(in oklab, var(--danger, #B85C5C) 8%, transparent)',
                      border: `1px solid ${r.verdict === 'fits' ? 'color-mix(in oklab, var(--success, #6B8E5C) 30%, transparent)'
                        : r.verdict === 'forces' ? 'color-mix(in oklab, var(--accent, #C19A6B) 30%, transparent)'
                        : 'color-mix(in oklab, var(--danger, #B85C5C) 30%, transparent)'}`,
                    }}>
                    <div className="flex items-baseline gap-2">
                      <Badge variant="outline" className="text-[10px] font-mono-editorial"
                        style={{ color: r.verdict === 'fits' ? 'var(--success, #6B8E5C)' : r.verdict === 'forces' ? 'var(--accent, #C19A6B)' : 'var(--danger, #B85C5C)',
                          borderColor: r.verdict === 'fits' ? 'color-mix(in oklab, var(--success, #6B8E5C) 40%, transparent)' : r.verdict === 'forces' ? 'color-mix(in oklab, var(--accent, #C19A6B) 40%, transparent)' : 'color-mix(in oklab, var(--danger, #B85C5C) 40%, transparent)' }}>
                        {r.verdict}
                      </Badge>
                      <span className="font-serif-headline text-sm" style={{ color: 'var(--fg, #F5F0E1)' }}>{r.story.title_zh}</span>
                    </div>
                    <div className="text-[10px] mt-1" style={{ color: 'var(--fg-muted, #A39E8E)' }}>{r.reason}</div>
                  </div>
                ))}
              </div>
            </Section>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

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
  const isInferred = display.startsWith('INFERRED')
  return (
    <div className="flex gap-2 py-1" style={{ flexDirection: multiline ? 'column' : 'row' }}>
      <span className={`${mono ? 'font-mono-editorial' : ''} text-[10px] uppercase tracking-wider flex-shrink-0`} style={{ color: 'var(--fg-faint, #5C5849)', minWidth: multiline ? undefined : '120px' }}>
        {label}
      </span>
      <span className={`${mono ? 'font-mono-editorial' : ''} text-[12px] flex-1 ${isInferred ? 'italic' : ''}`}
        style={{ color: isInferred ? 'var(--fg-faint, #5C5849)' : (accent ? 'var(--accent-bright, #E5B97F)' : 'var(--fg, #F5F0E1)') }}>
        {isInferred && <span style={{ color: 'var(--danger, #B85C5C)', marginRight: 4 }}>⚠</span>}
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
