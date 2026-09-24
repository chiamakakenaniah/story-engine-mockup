'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Hash, Lock, Plus, Sigma } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import type {
  PatternArchetype,
  PatternInvariant,
  PatternParameterSlot,
  PatternProvenance,
  PatternStageSlot,
  PatternTurningPoint,
  StoryPattern,
} from '@/lib/story-engine-data'
import { findReferenceById } from '@/lib/story-engine-data'

/* -------------------------------------------------------------------------- */
/*  Provenance badge                                                          */
/* -------------------------------------------------------------------------- */

function ProvenanceBadge({ provenance }: { provenance: PatternProvenance }) {
  const map: Record<
    PatternProvenance,
    { en: string; zh: string; color: string; Icon: typeof Sigma }
  > = {
    'built-in': {
      en: 'Built-in',
      zh: '内置',
      color: 'var(--fg-muted)',
      Icon: Hash,
    },
    distilled: {
      en: 'Distilled',
      zh: '提炼',
      color: 'var(--accent)',
      Icon: Sigma,
    },
    aggregated: {
      en: 'Aggregated',
      zh: '聚合',
      color: 'var(--accent-bright)',
      Icon: Sigma,
    },
  }
  const v = map[provenance]
  const Icon = v.Icon
  return (
    <Badge
      variant="outline"
      className="font-mono-editorial text-[10px] uppercase tracking-wider gap-1"
      style={{
        color: v.color,
        borderColor: `color-mix(in oklab, ${v.color} 50%, transparent)`,
      }}
    >
      <Icon className="size-3" />
      {v.en} · {v.zh}
    </Badge>
  )
}

/* -------------------------------------------------------------------------- */
/*  Weight badge (for aggregated meta-pattern stages)                         */
/* -------------------------------------------------------------------------- */

function WeightBadge({ weight, total }: { weight: number; total: number }) {
  let color = 'var(--fg-muted)'
  let bg = 'transparent'
  if (weight >= 4) {
    color = 'var(--bg)'
    bg = 'var(--accent)'
  } else if (weight >= 2) {
    color = 'var(--accent)'
    bg = 'transparent'
  } else if (weight === 1) {
    color = 'var(--fg-faint)'
    bg = 'transparent'
  }
  return (
    <span
      className="font-mono-editorial text-[10px] px-1.5 py-0.5 rounded-sm border"
      style={{
        color,
        backgroundColor: bg,
        borderColor: `color-mix(in oklab, ${color} 35%, transparent)`,
      }}
      title={`Confirmed in ${weight} of ${total} distilled instances · 于 ${total} 个实例中确认 ${weight} 次`}
    >
      {weight}/{total}
    </span>
  )
}

/* -------------------------------------------------------------------------- */
/*  Stage list (left column of the pattern body)                              */
/* -------------------------------------------------------------------------- */

function StageList({
  stages,
  isAggregated,
  totalInstances,
}: {
  stages: PatternStageSlot[]
  isAggregated: boolean
  totalInstances: number
}) {
  return (
    <div className="space-y-3">
      <SectionLabel en="Stages" zh="阶段" count={stages.length} />
      <ol className="space-y-3">
        {stages.map((stage, idx) => {
          const num = String(idx + 1).padStart(2, '0')
          return (
            <motion.li
              key={stage.slotId}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="relative pl-7"
            >
              {/* Timeline node */}
              <span
                className="absolute left-0 top-1 size-5 rounded-full flex items-center justify-center font-mono-editorial text-[9px] font-bold"
                style={{
                  color: 'var(--accent-bright)',
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--accent-muted)',
                }}
              >
                {num}
              </span>
              {/* Connector */}
              {idx < stages.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[9px] top-6 bottom-[-1rem] w-px"
                  style={{
                    background:
                      'linear-gradient(to bottom, var(--accent-muted), transparent)',
                  }}
                />
              )}

              <div className="flex items-start justify-between gap-2 flex-wrap">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="font-serif-headline text-sm font-bold"
                      style={{ color: 'var(--fg)' }}
                    >
                      {stage.label.en}
                    </span>
                    <span
                      className="font-sans-zh text-sm"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      {stage.label.zh}
                    </span>
                  </div>
                  <span
                    className="font-mono-editorial text-[10px] uppercase tracking-wider"
                    style={{ color: 'var(--accent)' }}
                  >
                    {stage.role.replace('-', ' ')} · {stage.slotId}
                  </span>
                </div>
                {isAggregated && typeof stage.weight === 'number' && (
                  <WeightBadge weight={stage.weight} total={totalInstances} />
                )}
              </div>

              <p
                className="mt-1.5 text-xs leading-relaxed"
                style={{ color: 'var(--fg-muted)' }}
              >
                {stage.description.en}
                <span className="block mt-0.5 font-sans-zh" style={{ color: 'var(--fg-faint)' }}>
                  {stage.description.zh}
                </span>
              </p>

              {/* Trigger / Payoff */}
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                <div
                  className="rounded-sm border-l-2 pl-2 py-1"
                  style={{ borderColor: 'var(--accent-muted)' }}
                >
                  <div
                    className="font-mono-editorial uppercase tracking-wider text-[9px] mb-0.5"
                    style={{ color: 'var(--accent)' }}
                  >
                    Trigger · 触发
                  </div>
                  <p style={{ color: 'var(--fg-muted)' }}>{stage.triggerConstraint.en}</p>
                  <p className="font-sans-zh mt-0.5" style={{ color: 'var(--fg-faint)' }}>
                    {stage.triggerConstraint.zh}
                  </p>
                </div>
                <div
                  className="rounded-sm border-l-2 pl-2 py-1"
                  style={{ borderColor: 'var(--accent-muted)' }}
                >
                  <div
                    className="font-mono-editorial uppercase tracking-wider text-[9px] mb-0.5"
                    style={{ color: 'var(--accent)' }}
                  >
                    Payoff · 闭合
                  </div>
                  <p style={{ color: 'var(--fg-muted)' }}>{stage.payoffConstraint.en}</p>
                  <p className="font-sans-zh mt-0.5" style={{ color: 'var(--fg-faint)' }}>
                    {stage.payoffConstraint.zh}
                  </p>
                </div>
              </div>

              {(stage.keyEventsMin !== undefined || stage.keyEventsMax !== undefined) && (
                <div
                  className="mt-1.5 font-mono-editorial text-[10px]"
                  style={{ color: 'var(--fg-faint)' }}
                >
                  keyEvents: {stage.keyEventsMin ?? '?'}–{stage.keyEventsMax ?? '?'}
                  {stage.requiredArchetypeKeys && stage.requiredArchetypeKeys.length > 0 && (
                    <span className="ml-2">
                      · archetypes: {stage.requiredArchetypeKeys.join(', ')}
                    </span>
                  )}
                </div>
              )}
            </motion.li>
          )
        })}
      </ol>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Archetype list                                                            */
/* -------------------------------------------------------------------------- */

function ArchetypeList({ archetypes }: { archetypes: PatternArchetype[] }) {
  return (
    <div className="space-y-3">
      <SectionLabel en="Archetypes" zh="原型" count={archetypes.length} />
      <ul className="space-y-2.5">
        {archetypes.map((arc) => (
          <motion.li
            key={arc.archetypeKey}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.3 }}
            className="rounded-md p-2.5"
            style={{
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid color-mix(in oklab, var(--fg-faint) 30%, transparent)',
            }}
          >
            <div className="flex items-baseline gap-2 flex-wrap">
              <span
                className="font-mono-editorial text-[10px] font-bold"
                style={{ color: 'var(--accent)' }}
              >
                {arc.archetypeKey}
              </span>
              <span
                className="font-serif-headline text-sm font-bold"
                style={{ color: 'var(--fg)' }}
              >
                {arc.label.en}
              </span>
              <span
                className="font-sans-zh text-sm"
                style={{ color: 'var(--fg-muted)' }}
              >
                {arc.label.zh}
              </span>
            </div>
            <p
              className="mt-1 text-[11px] leading-relaxed"
              style={{ color: 'var(--fg-muted)' }}
            >
              {arc.functionSummary.en}
              <span className="block font-sans-zh mt-0.5" style={{ color: 'var(--fg-faint)' }}>
                {arc.functionSummary.zh}
              </span>
            </p>
            {arc.mandatoryAtRoles.length > 0 && (
              <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                <span
                  className="font-mono-editorial text-[9px] uppercase tracking-wider"
                  style={{ color: 'var(--fg-faint)' }}
                >
                  Mandatory at · 必现于:
                </span>
                {arc.mandatoryAtRoles.map((role) => (
                  <span
                    key={role}
                    className="font-mono-editorial text-[9px] px-1.5 py-0.5 rounded"
                    style={{
                      color: 'var(--accent-bright)',
                      backgroundColor: 'color-mix(in oklab, var(--accent-muted) 30%, transparent)',
                    }}
                  >
                    {role.replace('-', ' ')}
                  </span>
                ))}
              </div>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Turning points                                                            */
/* -------------------------------------------------------------------------- */

function TurningPointsRow({
  turningPoints,
}: {
  turningPoints: PatternTurningPoint[]
}) {
  if (turningPoints.length === 0) return null
  return (
    <div className="space-y-2">
      <SectionLabel en="Turning Points" zh="转折点" count={turningPoints.length} />
      <div className="flex flex-wrap gap-2">
        {turningPoints.map((tp) => (
          <div
            key={tp.pointKey}
            className="rounded-md px-2.5 py-1.5 max-w-xs"
            style={{
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid color-mix(in oklab, var(--accent-muted) 40%, transparent)',
            }}
          >
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span
                className="font-mono-editorial text-[9px] font-bold"
                style={{ color: 'var(--accent)' }}
              >
                {tp.pointKey}
              </span>
              <span
                className="font-serif-headline text-xs font-bold"
                style={{ color: 'var(--fg)' }}
              >
                {tp.label.en}
              </span>
              <span
                className="font-sans-zh text-xs"
                style={{ color: 'var(--fg-muted)' }}
              >
                {tp.label.zh}
              </span>
            </div>
            <p
              className="mt-1 text-[10px] leading-snug"
              style={{ color: 'var(--fg-muted)' }}
            >
              ↳ {tp.irreversibleChange.en}
              <span className="block font-sans-zh mt-0.5" style={{ color: 'var(--fg-faint)' }}>
                ↳ {tp.irreversibleChange.zh}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Parameter slots                                                           */
/* -------------------------------------------------------------------------- */

function ParameterSlotsRow({
  slots,
}: {
  slots: PatternParameterSlot[]
}) {
  if (slots.length === 0) return null
  return (
    <div className="space-y-2">
      <SectionLabel en="Parameter Slots" zh="参数槽位" count={slots.length} />
      <div className="flex flex-wrap gap-2">
        {slots.map((slot) => (
          <span
            key={slot.paramKey}
            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1"
            style={{
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid color-mix(in oklab, var(--fg-faint) 40%, transparent)',
            }}
          >
            {slot.required ? (
              <CheckCircle2
                className="size-3"
                style={{ color: 'var(--accent)' }}
              />
            ) : (
              <span
                className="size-3 inline-block rounded-full"
                style={{
                  border: '1px solid var(--fg-faint)',
                }}
                aria-label="optional · 可选"
              />
            )}
            <span
              className="font-mono-editorial text-[10px] font-bold"
              style={{ color: 'var(--accent)' }}
            >
              {slot.paramKey}
            </span>
            <span
              className="text-xs"
              style={{ color: 'var(--fg-muted)' }}
            >
              {slot.label.en}
            </span>
            <span
              className="font-sans-zh text-xs"
              style={{ color: 'var(--fg-faint)' }}
            >
              {slot.label.zh}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Invariants                                                                */
/* -------------------------------------------------------------------------- */

function InvariantsBlock({
  invariants,
}: {
  invariants: PatternInvariant[]
}) {
  if (invariants.length === 0) return null
  return (
    <div className="space-y-2">
      <SectionLabel en="Invariants" zh="不变量" count={invariants.length} />
      <div
        className="rounded-md p-3 font-mono-editorial text-[11px] leading-relaxed"
        style={{
          backgroundColor: 'var(--bg)',
          border: '1px solid color-mix(in oklab, var(--fg-faint) 40%, transparent)',
          color: 'var(--fg-muted)',
        }}
      >
        {invariants.map((inv) => (
          <div key={inv.code} className="mb-2 last:mb-0">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span style={{ color: 'var(--accent-bright)' }}>{inv.code}</span>
              <span style={{ color: 'var(--fg-faint)' }}>›</span>
              <span style={{ color: 'var(--accent)' }}>{inv.spec}</span>
            </div>
            <p className="mt-0.5" style={{ color: 'var(--fg-muted)' }}>
              ✓ {inv.message.en}
            </p>
            <p className="font-sans-zh" style={{ color: 'var(--fg-faint)' }}>
              ✓ {inv.message.zh}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section label (reusable)                                                  */
/* -------------------------------------------------------------------------- */

function SectionLabel({
  en,
  zh,
  count,
}: {
  en: string
  zh: string
  count?: number
}) {
  return (
    <div className="flex items-baseline gap-2 flex-wrap">
      <span
        className="font-mono-editorial text-[10px] uppercase tracking-[0.2em]"
        style={{ color: 'var(--accent)' }}
      >
        {en}
      </span>
      <span
        className="font-sans-zh text-[10px]"
        style={{ color: 'var(--fg-faint)' }}
      >
        {zh}
      </span>
      {typeof count === 'number' && (
        <span
          className="font-mono-editorial text-[10px]"
          style={{ color: 'var(--fg-faint)' }}
        >
          ({count})
        </span>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  MAIN COMPONENT — DistilledPatternCard                                     */
/*  Reusable across Distillation result, Aggregation meta-pattern, and        */
/*  Subagent B's PatternLibrarySection. Renders ANY StoryPattern.             */
/* -------------------------------------------------------------------------- */

export interface DistilledPatternCardProps {
  pattern: StoryPattern
  /** When true, show "Add to Library · 加入模式库" button at the foot. */
  showAddToLibrary?: boolean
  /** Override the "added" state — useful for aggregated meta-pattern demo. */
  addedToLibrary?: boolean
  /** Optional className passthrough. */
  className?: string
}

export function DistilledPatternCard({
  pattern,
  showAddToLibrary = true,
  addedToLibrary = false,
  className,
}: DistilledPatternCardProps) {
  const isAggregated = pattern.provenance === 'aggregated'
  const totalInstances = pattern.statisticalWeight ?? 1

  const sourceRef =
    pattern.sourceReferenceIds && pattern.sourceReferenceIds.length > 0
      ? findReferenceById(pattern.sourceReferenceIds[0])
      : undefined

  const onAdd = () => {
    toast.success('Added to Library · 已加入模式库', {
      description: `${pattern.name.en} · ${pattern.name.zh}`,
      duration: 3500,
    })
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={['card-editorial overflow-hidden', className].filter(Boolean).join(' ')}
      aria-label={`Story pattern: ${pattern.name.en} · ${pattern.name.zh}`}
    >
      {/* HEADER --------------------------------------------------------- */}
      <header
        className="px-5 sm:px-6 pt-5 pb-4 border-b"
        style={{
          borderColor: 'color-mix(in oklab, var(--fg-faint) 35%, transparent)',
          background:
            'linear-gradient(180deg, color-mix(in oklab, var(--accent) 7%, transparent) 0%, transparent 100%)',
        }}
      >
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <ProvenanceBadge provenance={pattern.provenance} />
              {pattern.status === 'sealed' && (
                <span
                  className="inline-flex items-center gap-1 font-mono-editorial text-[10px] uppercase tracking-wider"
                  style={{ color: 'var(--success)' }}
                >
                  <Lock className="size-3" /> Sealed · 封存
                </span>
              )}
              {pattern.status === 'draft' && (
                <span
                  className="inline-flex items-center gap-1 font-mono-editorial text-[10px] uppercase tracking-wider"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  Draft · 草稿
                </span>
              )}
            </div>
            <h3
              className="font-serif-headline text-2xl sm:text-3xl font-black leading-tight"
              style={{ color: 'var(--fg)' }}
            >
              {pattern.name.en}
            </h3>
            <p
              className="font-sans-zh text-lg font-bold"
              style={{ color: 'var(--accent)' }}
            >
              {pattern.name.zh}
            </p>
            <div
              className="flex items-center gap-2 flex-wrap font-mono-editorial text-[11px]"
              style={{ color: 'var(--fg-muted)' }}
            >
              <span style={{ color: 'var(--accent)' }}>{pattern.patternKey}</span>
              <span style={{ color: 'var(--fg-faint)' }}>·</span>
              <span>{pattern.family.en}</span>
              <span style={{ color: 'var(--fg-faint)' }}>·</span>
              <span className="font-sans-zh">{pattern.family.zh}</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 text-right">
            {isAggregated && (
              <>
                <div
                  className="flex items-center gap-1.5 font-mono-editorial text-[11px]"
                  style={{ color: 'var(--accent-bright)' }}
                >
                  <Sigma className="size-3.5" />
                  Confirmed: {pattern.statisticalWeight} instances
                </div>
                {typeof pattern.confidence === 'number' && (
                  <div
                    className="font-mono-editorial text-[11px]"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    Confidence · 置信度:{' '}
                    <span style={{ color: 'var(--accent)' }}>
                      {pattern.confidence.toFixed(2)}
                    </span>
                  </div>
                )}
              </>
            )}
            {sourceRef && (
              <div
                className="font-mono-editorial text-[10px]"
                style={{ color: 'var(--fg-faint)' }}
              >
                source · 源: {sourceRef.title.en} ({sourceRef.year})
              </div>
            )}
          </div>
        </div>

        <p
          className="mt-3 text-sm leading-relaxed max-w-3xl"
          style={{ color: 'var(--fg-muted)' }}
        >
          {pattern.description.en}
          <span className="block mt-1 font-sans-zh" style={{ color: 'var(--fg-faint)' }}>
            {pattern.description.zh}
          </span>
        </p>
      </header>

      {/* BODY — two columns on desktop, stacked on mobile ------------------ */}
      <div className="px-5 sm:px-6 py-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StageList
          stages={pattern.stages}
          isAggregated={isAggregated}
          totalInstances={totalInstances}
        />
        <ArchetypeList archetypes={pattern.archetypes} />
      </div>

      {/* BELOW — turning points, parameters, invariants ------------------ */}
      <div
        className="px-5 sm:px-6 py-5 space-y-5 border-t"
        style={{
          borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
          backgroundColor: 'color-mix(in oklab, var(--bg-subtle) 40%, transparent)',
        }}
      >
        <TurningPointsRow turningPoints={pattern.turningPoints} />
        <ParameterSlotsRow slots={pattern.parameterSlots} />
        <InvariantsBlock invariants={pattern.invariants} />
      </div>

      {/* FOOTER — Add to Library ---------------------------------------- */}
      {showAddToLibrary && (
        <footer
          className="px-5 sm:px-6 py-4 border-t flex items-center justify-between gap-3 flex-wrap"
          style={{
            borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
          }}
        >
          <div
            className="font-mono-editorial text-[11px]"
            style={{ color: 'var(--fg-faint)' }}
          >
            id: {pattern.id}
          </div>
          <Button
            onClick={onAdd}
            variant="outline"
            size="sm"
            disabled={addedToLibrary}
            className="border-accent/60 text-accent hover:bg-accent hover:text-bg font-semibold"
            style={{
              borderColor: 'color-mix(in oklab, var(--accent) 60%, transparent)',
              color: 'var(--accent-bright)',
            }}
          >
            <Plus className="size-3.5" />
            {addedToLibrary
              ? 'In Library · 已在库中'
              : 'Add to Library · 加入模式库'}
          </Button>
        </footer>
      )}
    </motion.article>
  )
}

export default DistilledPatternCard
