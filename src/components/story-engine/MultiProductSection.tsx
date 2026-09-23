'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen,
  Clapperboard,
  Dices,
  FileText,
  Film,
  PanelsTopLeft,
  ScrollText,
  Sparkles,
  Wand2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getAllPatterns } from '@/lib/story-engine-data'
import type { StoryPattern } from '@/lib/story-engine-data'
import { resolveExampleBindings } from '@/lib/mock-outline-generator'
import { useStoryEngineStore } from '@/stores/story-engine-store'
import { SectionHeader } from '@/components/story-engine/DistillationSection'

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

type B = Record<
  'setting' | 'protagonist' | 'antagonist' | 'centralConflict' | 'stakes' | 'theme',
  string
>

function PatternFooter({ pattern }: { pattern: StoryPattern }) {
  return (
    <div
      className="px-4 sm:px-5 py-3 border-t flex items-center justify-between gap-2 flex-wrap text-[11px]"
      style={{
        borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
        backgroundColor: 'color-mix(in oklab, var(--bg-subtle) 30%, transparent)',
      }}
    >
      <span
        className="font-mono-editorial"
        style={{ color: 'var(--fg-faint)' }}
      >
        Pattern:{' '}
        <span style={{ color: 'var(--accent)' }}>{pattern.name.en}</span>
        <span style={{ color: 'var(--fg-faint)' }}> · </span>
        <span style={{ color: 'var(--fg-muted)' }}>{pattern.family.en}</span>
        <span style={{ color: 'var(--fg-faint)' }}> · </span>
        {pattern.stages.length} stages, {pattern.archetypes.length} archetypes
      </span>
    </div>
  )
}

/* Card title bar — shared by all 6 product cards */
function CardHeader({
  icon: Icon,
  index,
  titleEn,
  titleZh,
  subtitleEn,
  subtitleZh,
}: {
  icon: typeof BookOpen
  index: number
  titleEn: string
  titleZh: string
  subtitleEn: string
  subtitleZh: string
}) {
  return (
    <header
      className="px-4 sm:px-5 pt-4 pb-3 border-b"
      style={{
        borderColor: 'color-mix(in oklab, var(--fg-faint) 30%, transparent)',
        background:
          'linear-gradient(180deg, color-mix(in oklab, var(--accent) 7%, transparent) 0%, transparent 100%)',
      }}
    >
      <div className="flex items-center gap-2 mb-1">
        <Icon
          className="size-4"
          style={{ color: 'var(--accent)' }}
        />
        <span
          className="font-mono-editorial text-[10px] uppercase tracking-wider"
          style={{ color: 'var(--accent)' }}
        >
          Product {index} / 6
        </span>
      </div>
      <h3
        className="font-serif-headline text-xl font-black leading-tight"
        style={{ color: 'var(--fg)' }}
      >
        {titleEn}
      </h3>
      <p
        className="font-sans-zh text-base font-bold mt-0.5"
        style={{ color: 'var(--accent)' }}
      >
        {titleZh}
      </p>
      <p
        className="font-mono-editorial text-[11px] mt-1"
        style={{ color: 'var(--fg-muted)' }}
      >
        {subtitleEn}
      </p>
      <p
        className="font-sans-zh text-[11px]"
        style={{ color: 'var(--fg-faint)' }}
      >
        {subtitleZh}
      </p>
    </header>
  )
}

/* -------------------------------------------------------------------------- */
/*  1. LONG-FORM NOVEL                                                        */
/* -------------------------------------------------------------------------- */

function LongFormNovelCard({ pattern, b }: { pattern: StoryPattern; b: B }) {
  // Pull first 3 stages → first 3 chapters
  const stages = pattern.stages.slice(0, 3)
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className="card-editorial h-full flex flex-col"
    >
      <CardHeader
        icon={BookOpen}
        index={1}
        titleEn="Long-form Novel"
        titleZh="长篇小说"
        subtitleEn="Volume → chapter tree, prose-styled with first-paragraph teasers."
        subtitleZh="卷 → 章节树，散文化呈现，附首段节选。"
      />
      <div className="px-4 sm:px-5 py-4 space-y-5 flex-1">
        {stages.map((stage, idx) => {
          const num = String(idx + 1).padStart(2, '0')
          return (
            <article key={stage.slotId} className="border-l-2 pl-3"
              style={{
                borderColor: 'color-mix(in oklab, var(--accent-muted) 80%, transparent)',
              }}
            >
              <div className="flex items-baseline gap-2 flex-wrap">
                <span
                  className="font-mono-editorial text-[10px] font-bold"
                  style={{ color: 'var(--accent)' }}
                >
                  Chapter {num}
                </span>
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
                  · {stage.label.zh}
                </span>
              </div>
              <p
                className="mt-1.5 text-[12px] leading-relaxed italic font-serif-headline"
                style={{ color: 'var(--fg-muted)' }}
              >
                In {b.setting}, {b.protagonist}{' '}
                {idx === 0
                  ? 'opens a year she does not yet know will be the last untroubled one — the chapter holds her small habits until the third morning, when a footfall at the door interrupts the lacquer-drying.'
                  : idx === 1
                    ? `meets the first claim of ${b.centralConflict}; the prose shifts from third-person past into a single sentence of present tense — the engine marks this stage as the ${stage.role.replace(/-/g, ' ')} slot, and the slotId ${stage.slotId} controls the scene's temporal hinge.`
                    : `confronts the first rehearsal of ${b.stakes}; the chapter closes on an image the Finale will invert — the same bench, the same window, the clock unwound. The author receives this chapter as a candidate; the harness waits for adoption.`}
              </p>
              <p
                className="font-sans-zh text-[11px] leading-relaxed mt-1"
                style={{ color: 'var(--fg-faint)' }}
              >
                {idx === 0
                  ? `于${b.setting}，${b.protagonist}开启她尚不知其为最后一年之清平——本章留其小习，直至第三日之晨，一阵足音打断漆干。`
                  : idx === 1
                    ? `遭遇${b.centralConflict}之首度提出；散文由第三人称过去时转为一句现在时——引擎将此阶段标为「${stage.role.replace(/-/g, ' ')}」槽，且 slotId ${stage.slotId} 控场景之时序铰链。`
                    : `面对${b.stakes}之首次预演；本章以一为终场所反转之像作结——同一工作台、同一窗、钟未上弦。作者收此章为候选；运行链等待采纳。`}
              </p>
            </article>
          )
        })}
      </div>
      <PatternFooter pattern={pattern} />
    </motion.article>
  )
}

/* -------------------------------------------------------------------------- */
/*  2. SHORT NOVEL                                                            */
/* -------------------------------------------------------------------------- */

function ShortNovelCard({ pattern, b }: { pattern: StoryPattern; b: B }) {
  // 5 chapters — pick stages spaced across the pattern
  const total = pattern.stages.length
  const indices = [0, Math.floor(total * 0.25), Math.floor(total * 0.5), Math.floor(total * 0.75), total - 1]
    .map((i) => Math.min(i, total - 1))
  const stages = indices.map((i) => pattern.stages[i])

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className="card-editorial h-full flex flex-col"
    >
      <CardHeader
        icon={FileText}
        index={2}
        titleEn="Short Novel"
        titleZh="短篇小说"
        subtitleEn="Five-chapter compact structure, ~50-word chapter summaries."
        subtitleZh="五章紧凑结构，约 50 字章节摘要。"
      />
      <div className="px-4 sm:px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
        {stages.map((stage, idx) => {
          const num = String(idx + 1).padStart(2, '0')
          return (
            <div
              key={stage.slotId}
              className="rounded-md p-2.5"
              style={{
                backgroundColor: 'color-mix(in oklab, var(--bg-subtle) 50%, transparent)',
                border: '1px solid color-mix(in oklab, var(--fg-faint) 25%, transparent)',
              }}
            >
              <div
                className="font-mono-editorial text-[9px] font-bold mb-0.5"
                style={{ color: 'var(--accent)' }}
              >
                Ch {num} · {stage.role.replace(/-/g, ' ')}
              </div>
              <div
                className="font-serif-headline text-xs font-bold"
                style={{ color: 'var(--fg)' }}
              >
                {stage.label.en}
              </div>
              <div
                className="font-sans-zh text-xs"
                style={{ color: 'var(--fg-muted)' }}
              >
                {stage.label.zh}
              </div>
              <p
                className="mt-1 text-[10px] leading-snug"
                style={{ color: 'var(--fg-muted)' }}
              >
                {idx === 0
                  ? `${b.protagonist} at rest, in ${b.setting}; a routine masks the wound.`
                  : idx === 1
                    ? `The first claim of "${b.centralConflict}" arrives; ${b.protagonist} says no, then yes.`
                    : idx === 2
                      ? `${b.antagonist} enters; ${b.protagonist} crosses a line — the slotId ${stage.slotId} is logged.`
                      : idx === 3
                        ? `${b.stakes} crystallizes; ${b.protagonist} faces the cost aloud.`
                        : `${b.theme} resolved (or refused); ${b.protagonist} leaves a different person.`}
              </p>
              <p
                className="font-sans-zh text-[10px] leading-snug mt-0.5"
                style={{ color: 'var(--fg-faint)' }}
              >
                {idx === 0
                  ? `${b.protagonist}于${b.setting}之静；日常掩盖伤口。`
                  : idx === 1
                    ? `「${b.centralConflict}」之首度提出至；${b.protagonist}先不，再是。`
                    : idx === 2
                      ? `${b.antagonist}入；${b.protagonist}跨线——slotId ${stage.slotId} 已记。`
                      : idx === 3
                        ? `${b.stakes}成形；${b.protagonist}出声面对代价。`
                        : `${b.theme}决（或拒）；${b.protagonist}离为另一人。`}
              </p>
            </div>
          )
        })}
      </div>
      <PatternFooter pattern={pattern} />
    </motion.article>
  )
}

/* -------------------------------------------------------------------------- */
/*  3. NOVEL → SCREENPLAY (Fountain AST scenes)                               */
/* -------------------------------------------------------------------------- */

function ScreenplayCard({ pattern, b }: { pattern: StoryPattern; b: B }) {
  const scenes = [
    {
      slugEn: `INT. ${slugify(b.setting)} — DAY`,
      slugZh: `内景·${b.setting}·日`,
      action: `MIRA sits at her bench, the clock before her unwound. The MAGISTRATE's letter lies where she dropped it, unopened.`,
      actionZh: `米拉坐于工作台，面前之钟未上弦。长官之信落于其所掷之处，未启。`,
      character: 'MIRA',
      dialogue: `I have a year of not winding this clock. That is the alibi I was looking for.`,
      dialogueZh: `我有一年未上此钟之弦。这是我在找的不在场证明。`,
      slotId: pattern.stages[0]?.slotId,
    },
    {
      slugEn: `EXT. TRIBUNAL SQUARE — NIGHT`,
      slugZh: `外景·法庭广场·夜`,
      action: `Snow. The Magistrate's bell rings twelve. MIRA crosses the square, head down, ledger hidden.`,
      actionZh: `雪。长官之钟鸣十二。米拉越广场，低头，账簿藏于衣。`,
      character: 'MAGISTRATE',
      dialogue: `You are the clockmaker's niece. I have been waiting for you to lie.`,
      dialogueZh: `你是钟匠之侄。我等你来撒谎，已等了一年。`,
      slotId: pattern.stages[Math.min(3, pattern.stages.length - 1)]?.slotId,
    },
    {
      slugEn: `INT. CLERK'S ROOM — DAWN`,
      slugZh: `内景·书记室·晨曦`,
      action: `The B-STORY CLERK is found hanged. MIRA enters. The ledger she was given is gone from the table.`,
      actionZh: `B 故事之书记被发现吊死。米拉入。她所得之账已不在桌上。`,
      character: 'MIRA',
      dialogue: `I was the evidence. I did not know that until now.`,
      dialogueZh: `我即是证据。我至今方知。`,
      slotId: pattern.stages[Math.min(10, pattern.stages.length - 1)]?.slotId,
    },
    {
      slugEn: `INT. TRIBUNAL — DAY (CONTINUOUS)`,
      slugZh: `内景·法庭·日（接续）`,
      action: `MIRA unfolds the clerk's last page — the gift — and reads the date aloud. The Magistrate's plan is revealed as her own.`,
      actionZh: `米拉展开书记之末页——其赠物——并出声读其日期。长官之计划被揭为其自身之版本。`,
      character: 'MIRA',
      dialogue: `"${b.theme}" — I said it once as a question. I say it now as a verdict.`,
      dialogueZh: `「${b.theme}」——我曾以疑问说出。今我以判决说出。`,
      slotId: pattern.stages[pattern.stages.length - 1]?.slotId,
    },
  ]
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className="card-editorial h-full flex flex-col"
    >
      <CardHeader
        icon={Film}
        index={3}
        titleEn="Novel → Screenplay"
        titleZh="小说转剧本"
        subtitleEn="Fountain AST scene list — sluglines, action lines, character cues, dialogue."
        subtitleZh="Fountain AST 场次列表——镜头头、动作行、角色名、对话。"
      />
      <div className="px-4 sm:px-5 py-4 font-mono-editorial text-[11px] space-y-3 flex-1">
        {scenes.map((sc, i) => (
          <div
            key={i}
            className="rounded-md p-2.5"
            style={{
              backgroundColor: 'var(--bg)',
              border: '1px solid color-mix(in oklab, var(--fg-faint) 30%, transparent)',
            }}
          >
            <div
              className="uppercase tracking-wider font-bold"
              style={{ color: 'var(--accent-bright)' }}
            >
              {sc.slugEn}
            </div>
            <div
              className="uppercase tracking-wider text-[10px]"
              style={{ color: 'var(--fg-faint)' }}
            >
              {sc.slugZh}
            </div>
            <p className="mt-1.5 leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
              {sc.action}
            </p>
            <p className="font-sans-zh leading-relaxed" style={{ color: 'var(--fg-faint)' }}>
              {sc.actionZh}
            </p>
            <div className="mt-2 pl-12">
              <div
                className="uppercase tracking-wider font-bold"
                style={{ color: 'var(--accent)' }}
              >
                {sc.character}
              </div>
              <p className="leading-relaxed pl-2" style={{ color: 'var(--fg)' }}>
                {sc.dialogue}
              </p>
              <p className="font-sans-zh leading-relaxed pl-2" style={{ color: 'var(--fg-muted)' }}>
                {sc.dialogueZh}
              </p>
            </div>
            {sc.slotId && (
              <div
                className="mt-1.5 text-[9px]"
                style={{ color: 'var(--fg-faint)' }}
              >
                ↳ slotId: <span style={{ color: 'var(--accent)' }}>{sc.slotId}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <PatternFooter pattern={pattern} />
    </motion.article>
  )
}

function slugify(s: string): string {
  // Crude slugify for Fountain sluglines — first ~24 chars uppercased, no spaces→underscores.
  const trimmed = s.split(',')[0].trim().slice(0, 28)
  return trimmed.toUpperCase().replace(/\s+/g, '_').replace(/[^A-Z_]/g, '')
}

/* -------------------------------------------------------------------------- */
/*  4. NOVEL → COMIC (page/panel layout)                                       */
/* -------------------------------------------------------------------------- */

function ComicCard({ pattern, b }: { pattern: StoryPattern; b: B }) {
  const pages: {
    num: number
    titleEn: string
    titleZh: string
    panels: {
      num: number
      shotEn: string
      shotZh: string
      descEn: string
      descZh: string
      color: string
    }[]
  }[] = [
    {
      num: 1,
      titleEn: 'Page 1 · The Bench',
      titleZh: '第一页·工作台',
      panels: [
        {
          num: 1,
          shotEn: 'WIDE',
          shotZh: '全景',
          descEn: `Establishing: ${b.setting}. ${b.protagonist} at the bench, head bent.`,
          descZh: `确立：${b.setting}。${b.protagonist}于工作台前，俯首。`,
          color: 'var(--accent-muted)',
        },
        {
          num: 2,
          shotEn: 'CLOSEUP',
          shotZh: '特写',
          descEn: 'The unwound clock — pendulum still.',
          descZh: '未上弦之钟——摆锤静止。',
          color: 'var(--accent)',
        },
        {
          num: 3,
          shotEn: 'OVER-SHOULDER',
          shotZh: '过肩',
          descEn: 'Over her shoulder: the Magistrate\'s letter on the floor, unopened.',
          descZh: '过其肩：长官之信于地，未启。',
          color: 'var(--accent-muted)',
        },
        {
          num: 4,
          shotEn: 'INSERT',
          shotZh: '插入',
          descEn: 'Insert: her hand on the lacquer brush — not moving.',
          descZh: '插入：其手于漆刷——不动。',
          color: 'var(--accent)',
        },
        {
          num: 5,
          shotEn: 'MEDIUM',
          shotZh: '中景',
          descEn: `${b.protagonist} looks toward the door — sound of a footfall, off-panel.`,
          descZh: `${b.protagonist}望门——画外足音。`,
          color: 'var(--accent-muted)',
        },
      ],
    },
    {
      num: 2,
      titleEn: 'Page 2 · The Tribunal',
      titleZh: '第二页·法庭',
      panels: [
        {
          num: 1,
          shotEn: 'WIDE',
          shotZh: '全景',
          descEn: `Establishing: ${b.antagonist} at the tribunal bench, gavel raised.`,
          descZh: `确立：${b.antagonist}于法庭工作台，举槌。`,
          color: 'var(--accent-muted)',
        },
        {
          num: 2,
          shotEn: 'CLOSEUP',
          shotZh: '特写',
          descEn: 'The Magistrate\'s eyes — measuring.',
          descZh: '长官之眼——度量。',
          color: 'var(--accent)',
        },
        {
          num: 3,
          shotEn: 'TWO-SHOT',
          shotZh: '双人景',
          descEn: `${b.protagonist} and ${b.antagonist} — facing, the ledger between them on the table.`,
          descZh: `${b.protagonist}与${b.antagonist}——相向，账于二者之间。`,
          color: 'var(--accent-bright)',
        },
        {
          num: 4,
          shotEn: 'DUTCH ANGLE',
          shotZh: '斜角',
          descEn: `${b.protagonist}'s hand opens the folded page — the clerk's gift.`,
          descZh: `${b.protagonist}之手展开折页——书记之赠物。`,
          color: 'var(--accent)',
        },
        {
          num: 5,
          shotEn: 'INSERT',
          shotZh: '插入',
          descEn: `Insert: the date — the original death's calendar date.`,
          descZh: '插入：日期——原死之同一日历日。',
          color: 'var(--accent-bright)',
        },
        {
          num: 6,
          shotEn: 'CLOSEUP',
          shotZh: '特写',
          descEn: `${b.protagonist}'s face — unreadable.`,
          descZh: `${b.protagonist}之面——不可判读。`,
          color: 'var(--accent-muted)',
        },
      ],
    },
  ]

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className="card-editorial h-full flex flex-col"
    >
      <CardHeader
        icon={PanelsTopLeft}
        index={4}
        titleEn="Novel → Comic"
        titleZh="小说转漫画"
        subtitleEn="Page/panel layout with shot-type labels and 1-line descriptions."
        subtitleZh="分页分镜，附景别标签与一句描述。"
      />
      <div className="px-4 sm:px-5 py-4 space-y-4 flex-1">
        {pages.map((page) => (
          <div key={page.num}>
            <div
              className="font-mono-editorial text-[10px] uppercase tracking-wider mb-2"
              style={{ color: 'var(--accent)' }}
            >
              {page.titleEn} ·{' '}
              <span className="font-sans-zh" style={{ color: 'var(--fg-muted)' }}>
                {page.titleZh}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {page.panels.map((p) => (
                <div
                  key={p.num}
                  className="rounded-md overflow-hidden"
                  style={{
                    border: '1px solid color-mix(in oklab, var(--fg-faint) 30%, transparent)',
                    backgroundColor: 'var(--bg-subtle)',
                  }}
                >
                  <div
                    className="aspect-[4/3] flex items-center justify-center"
                    style={{
                      backgroundColor: `color-mix(in oklab, ${p.color} 22%, transparent)`,
                      backgroundImage: `repeating-linear-gradient(45deg, transparent 0 6px, color-mix(in oklab, ${p.color} 8%, transparent) 6px 12px)`,
                    }}
                  >
                    <span
                      className="font-mono-editorial text-2xl font-bold"
                      style={{ color: 'var(--accent-bright)' }}
                    >
                      {p.num}
                    </span>
                  </div>
                  <div className="p-1.5">
                    <div
                      className="font-mono-editorial text-[9px] uppercase tracking-wider font-bold"
                      style={{ color: 'var(--accent)' }}
                    >
                      {p.shotEn} · {p.shotZh}
                    </div>
                    <p
                      className="mt-0.5 text-[10px] leading-snug"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      {p.descEn}
                    </p>
                    <p
                      className="font-sans-zh text-[10px] leading-snug"
                      style={{ color: 'var(--fg-faint)' }}
                    >
                      {p.descZh}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <PatternFooter pattern={pattern} />
    </motion.article>
  )
}

/* -------------------------------------------------------------------------- */
/*  5. MOTION-DRAMA SHOT LIST                                                  */
/* -------------------------------------------------------------------------- */

function MotionDramaCard({ pattern, b }: { pattern: StoryPattern; b: B }) {
  const shots: {
    num: number
    duration: string
    shotEn: string
    shotZh: string
    actionEn: string
    actionZh: string
    prompt: string
    slotId?: string
  }[] = [
    {
      num: 1,
      duration: '4s',
      shotEn: 'WIDE',
      shotZh: '全景',
      actionEn: `Establishing: ${b.setting}. ${b.protagonist} at the bench, snow outside the window.`,
      actionZh: `确立：${b.setting}。${b.protagonist}于工作台，窗外雪。`,
      prompt: 'golden hour, snow, clockmaker-bench, slow-pan-right, 35mm',
      slotId: pattern.stages[0]?.slotId,
    },
    {
      num: 2,
      duration: '3s',
      shotEn: 'CLOSEUP',
      shotZh: '特写',
      actionEn: 'The unwound clock — pendulum absolutely still.',
      actionZh: '未上弦之钟——摆锤绝对静止。',
      prompt: 'macro, brass-pendulum, no-motion, shallow-dof, 85mm',
    },
    {
      num: 3,
      duration: '5s',
      shotEn: 'MEDIUM',
      shotZh: '中景',
      actionEn: `${b.protagonist}'s hand reaches for the Magistrate's letter on the floor; hesitates; withdraws.`,
      actionZh: `${b.protagonist}之手伸向地上长官之信；犹豫；收回。`,
      prompt: 'hand-closeup, letter-on-stone-floor, hesitation-cue, 50mm',
      slotId: pattern.stages[Math.min(3, pattern.stages.length - 1)]?.slotId,
    },
    {
      num: 4,
      duration: '2s',
      shotEn: 'INSERT',
      shotZh: '插入',
      actionEn: 'Footstep in snow — booted, official. SFX muffled by snow.',
      actionZh: '雪中之足音——靴，官式。音效被雪闷。',
      prompt: 'insert-foot, snow-crunch-sfx, magistrate-boot, 24mm',
    },
    {
      num: 5,
      duration: '6s',
      shotEn: 'TWO-SHOT',
      shotZh: '双人景',
      actionEn: `${b.protagonist} and ${b.antagonist} in the tribunal antechamber. The ledger lies between them on the table.`,
      actionZh: `${b.protagonist}与${b.antagonist}于法庭前厅。账于二者之间。`,
      prompt: 'two-shot, tribunal-antechamber, ledger-between, low-key-light, 35mm',
      slotId: pattern.stages[Math.min(10, pattern.stages.length - 1)]?.slotId,
    },
    {
      num: 6,
      duration: '3s',
      shotEn: 'CLOSEUP',
      shotZh: '特写',
      actionEn: `${b.protagonist}'s hand unfolds the clerk's last page — the gift.`,
      actionZh: `${b.protagonist}之手展开书记之末页——赠物。`,
      prompt: 'macro, folded-page, paper-fold-creak, warm-tungsten, 85mm',
    },
    {
      num: 7,
      duration: '4s',
      shotEn: 'WIDE',
      shotZh: '全景',
      actionEn: `${b.protagonist} looks up at ${b.antagonist}. The clock on the wall is wound. The expression is unreadable.`,
      actionZh: `${b.protagonist}仰视${b.antagonist}。墙上之钟已上弦。表情不可判读。`,
      prompt: 'wide-low-angle, wound-clock-on-wall, unreadable-expression, slow-zoom-in, 24mm',
      slotId: pattern.stages[pattern.stages.length - 1]?.slotId,
    },
  ]

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className="card-editorial h-full flex flex-col"
    >
      <CardHeader
        icon={Clapperboard}
        index={5}
        titleEn="Motion-Drama Shot List"
        titleZh="漫剧镜头表"
        subtitleEn="Shot list table — duration, shot type, bilingual action, prompt fragment."
        subtitleZh="镜头列表——时长、景别、双语动作、提示词。"
      />
      <div className="px-4 sm:px-5 py-3 flex-1 overflow-x-auto">
        <table className="w-full text-[11px] font-mono-editorial border-collapse">
          <thead>
            <tr
              className="border-b"
              style={{
                borderColor: 'color-mix(in oklab, var(--accent-muted) 60%, transparent)',
                color: 'var(--accent)',
              }}
            >
              <th className="text-left py-1.5 pr-2 font-bold uppercase tracking-wider text-[9px]">#</th>
              <th className="text-left py-1.5 pr-2 font-bold uppercase tracking-wider text-[9px]">dur</th>
              <th className="text-left py-1.5 pr-2 font-bold uppercase tracking-wider text-[9px]">shot</th>
              <th className="text-left py-1.5 pr-2 font-bold uppercase tracking-wider text-[9px]">action</th>
              <th className="text-left py-1.5 pr-2 font-bold uppercase tracking-wider text-[9px]">prompt</th>
            </tr>
          </thead>
          <tbody>
            {shots.map((s) => (
              <tr
                key={s.num}
                className="border-b align-top"
                style={{
                  borderColor: 'color-mix(in oklab, var(--fg-faint) 20%, transparent)',
                }}
              >
                <td className="py-2 pr-2 font-bold" style={{ color: 'var(--accent-bright)' }}>
                  {s.num}
                </td>
                <td className="py-2 pr-2" style={{ color: 'var(--fg-muted)' }}>
                  {s.duration}
                </td>
                <td className="py-2 pr-2 whitespace-nowrap" style={{ color: 'var(--accent)' }}>
                  {s.shotEn}
                  <span className="font-sans-zh" style={{ color: 'var(--fg-faint)' }}>
                    {' '}
                    · {s.shotZh}
                  </span>
                </td>
                <td className="py-2 pr-2" style={{ color: 'var(--fg-muted)' }}>
                  {s.actionEn}
                  <span className="block font-sans-zh" style={{ color: 'var(--fg-faint)' }}>
                    {s.actionZh}
                  </span>
                  {s.slotId && (
                    <span
                      className="mt-0.5 inline-block text-[9px] px-1 py-0.5 rounded"
                      style={{
                        color: 'var(--accent-bright)',
                        backgroundColor:
                          'color-mix(in oklab, var(--accent-muted) 30%, transparent)',
                      }}
                    >
                      {s.slotId}
                    </span>
                  )}
                </td>
                <td className="py-2 pr-2 text-[10px]" style={{ color: 'var(--fg-faint)' }}>
                  <code>{s.prompt}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PatternFooter pattern={pattern} />
    </motion.article>
  )
}

/* -------------------------------------------------------------------------- */
/*  6. TTRPG CAMPAIGN                                                          */
/* -------------------------------------------------------------------------- */

function TTRPGCard({ pattern, b }: { pattern: StoryPattern; b: B }) {
  const beats: {
    nameEn: string
    nameZh: string
    typeEn: string
    typeZh: string
    promptEn: string
    promptZh: string
    secretEn?: string
    secretZh?: string
    slotId?: string
  }[] = [
    {
      nameEn: 'The Unwound Clock',
      nameZh: '未上弦之钟',
      typeEn: 'Hook',
      typeZh: '钩子',
      promptEn: `The GM describes ${b.setting}. The players arrive at ${b.protagonist}'s bench. The clock on the wall has not been wound for a year.`,
      promptZh: `GM 描述${b.setting}。玩家抵达${b.protagonist}之工作台。墙上之钟已一年未上弦。`,
      secretEn: `The Magistrate has been sending a letter a week. ${b.protagonist} has burned every one — until this morning's.`,
      secretZh: `长官每周送一封信。${b.protagonist}已尽焚之——直至今晨之信。`,
      slotId: pattern.stages[0]?.slotId,
    },
    {
      nameEn: 'The Letter at the Door',
      nameZh: '门口之信',
      typeEn: 'Discovery',
      typeZh: '发现',
      promptEn: `The players open the letter: ${b.centralConflict}. ${b.protagonist} asks the players to choose whether to help her.`,
      promptZh: `玩家启信：${b.centralConflict}。${b.protagonist}请玩家选择是否助她。`,
      secretEn: 'The letter was not sent by the Magistrate — it was sent by the B-story clerk.',
      secretZh: '信非长官所发——乃 B 故事之书记所发。',
      slotId: pattern.stages[Math.min(3, pattern.stages.length - 1)]?.slotId,
    },
    {
      nameEn: 'The Tribunal Antechamber',
      nameZh: '法庭前厅',
      typeEn: 'Complication',
      typeZh: '复杂化',
      promptEn: `${b.antagonist} summons the players individually. Each is offered a different version of ${b.stakes}.`,
      promptZh: `${b.antagonist}分别传唤玩家。每者获不同版本之${b.stakes}。`,
      secretEn: 'One of the offers is true. The GM rolls secretly to determine which.',
      secretZh: '其中一报价为真。GM 秘掷以定何者。',
      slotId: pattern.stages[Math.floor(pattern.stages.length / 2)]?.slotId,
    },
    {
      nameEn: 'The Clerk\'s Last Page',
      nameZh: '书记之末页',
      typeEn: 'Climax',
      typeZh: '高潮',
      promptEn: `The players find the B-story clerk dead. On his desk: a folded page addressed to ${b.protagonist}. They must decide whether to deliver it.`,
      promptZh: `玩家发现 B 故事之书记已亡。其桌：一封致${b.protagonist}之折页。须决是否送达。`,
      secretEn: 'If delivered, the Finale\'s slotId resolves as chosen-preservation. If withheld, as failure.',
      secretZh: '若送达，终局之 slotId 以所选之留解。若藏，以失败解。',
      slotId: pattern.stages[pattern.stages.length - 1]?.slotId,
    },
    {
      nameEn: 'The Wound Clock',
      nameZh: '伤之钟',
      typeEn: 'Resolution',
      typeZh: '收束',
      promptEn: `${b.protagonist} reads the page aloud: ${b.theme}. The clock on the wall begins to wind itself.`,
      promptZh: `${b.protagonist}出声读页：${b.theme}。墙上之钟自上弦。`,
      slotId: pattern.stages[pattern.stages.length - 1]?.slotId,
    },
  ]

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className="card-editorial h-full flex flex-col"
    >
      <CardHeader
        icon={Dices}
        index={6}
        titleEn="TTRPG Campaign"
        titleZh="跑团战役"
        subtitleEn="Campaign beat sheet — beats with GM prompts and optional secrets."
        subtitleZh="战役节拍——含 GM 提示词与可选秘密。"
      />
      <div className="px-4 sm:px-5 py-4 space-y-2.5 flex-1">
        {beats.map((beat, i) => (
          <div
            key={i}
            className="rounded-md p-2.5"
            style={{
              backgroundColor: 'color-mix(in oklab, var(--bg-subtle) 50%, transparent)',
              border: '1px solid color-mix(in oklab, var(--fg-faint) 25%, transparent)',
            }}
          >
            <div className="flex items-baseline gap-2 flex-wrap">
              <span
                className="font-mono-editorial text-[10px] font-bold px-1.5 py-0.5 rounded"
                style={{
                  color: 'var(--bg)',
                  backgroundColor: 'var(--accent)',
                }}
              >
                Beat {i + 1}
              </span>
              <span
                className="font-serif-headline text-xs font-bold"
                style={{ color: 'var(--fg)' }}
              >
                {beat.nameEn}
              </span>
              <span
                className="font-sans-zh text-xs"
                style={{ color: 'var(--accent)' }}
              >
                {beat.nameZh}
              </span>
              <span
                className="font-mono-editorial text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded ml-auto"
                style={{
                  color: 'var(--accent-bright)',
                  border: '1px solid color-mix(in oklab, var(--accent) 50%, transparent)',
                }}
              >
                {beat.typeEn} · {beat.typeZh}
              </span>
            </div>
            <p
              className="mt-1.5 text-[11px] leading-relaxed"
              style={{ color: 'var(--fg-muted)' }}
            >
              <span style={{ color: 'var(--accent)' }}>GM:</span> {beat.promptEn}
            </p>
            <p
              className="font-sans-zh text-[11px] leading-relaxed"
              style={{ color: 'var(--fg-faint)' }}
            >
              <span style={{ color: 'var(--accent)' }}>GM：</span> {beat.promptZh}
            </p>
            {beat.secretEn && (
              <div
                className="mt-1.5 rounded p-2 text-[10px] leading-relaxed"
                style={{
                  backgroundColor: 'color-mix(in oklab, var(--danger) 12%, transparent)',
                  border: '1px dashed color-mix(in oklab, var(--danger) 60%, transparent)',
                }}
              >
                <div
                  className="font-mono-editorial uppercase tracking-wider font-bold mb-0.5"
                  style={{ color: 'var(--danger)' }}
                >
                  GM Secret · GM 秘
                </div>
                <p style={{ color: 'var(--fg-muted)' }}>{beat.secretEn}</p>
                <p className="font-sans-zh" style={{ color: 'var(--fg-faint)' }}>
                  {beat.secretZh}
                </p>
              </div>
            )}
            {beat.slotId && (
              <div
                className="mt-1 font-mono-editorial text-[9px]"
                style={{ color: 'var(--fg-faint)' }}
              >
                ↳ pattern slotId:{' '}
                <span style={{ color: 'var(--accent)' }}>{beat.slotId}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <PatternFooter pattern={pattern} />
    </motion.article>
  )
}

/* -------------------------------------------------------------------------- */
/*  MAIN SECTION                                                              */
/* -------------------------------------------------------------------------- */

export function MultiProductSection() {
  const selectedPatternId = useStoryEngineStore((s) => s.selectedPatternId)
  const parameterBindings = useStoryEngineStore((s) => s.parameterBindings)
  const producedOutline = useStoryEngineStore((s) => s.producedOutline)
  const reverseGenStatus = useStoryEngineStore((s) => s.reverseGenJob.status)

  const allPatterns = useMemo(() => getAllPatterns(), [])
  const selectedPattern = useMemo(
    () => allPatterns.find((p) => p.id === selectedPatternId) ?? null,
    [allPatterns, selectedPatternId],
  )

  // Effective bindings — fall back to curated example defaults so the product
  // mockups always read with evocative, specific copy.
  const b = useMemo<B>(
    () => resolveExampleBindings(parameterBindings) as B,
    [parameterBindings],
  )

  // Has the user reverse-generated an outline?
  const hasOutline =
    producedOutline.length > 0 && reverseGenStatus === 'done'

  if (!selectedPattern) {
    return null // should never happen — store has a default — but be safe.
  }

  return (
    <section
      id="multi-product"
      className="py-24 scroll-mt-16 border-t"
      style={{
        borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
      }}
      aria-labelledby="multi-product-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="05 · MULTI-PRODUCT"
          eyebrowZh="05 · 多产品"
          titleEn="One pattern, many products"
          titleZh="一种模式 · 多种产品"
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base leading-relaxed"
          style={{ color: 'var(--fg-muted)' }}
        >
          The same sealed pattern + parameter bindings can drive multiple product
          pipelines: long-form novel, short-novel, novel→screenplay,
          novel→comic, motion-drama shot list, TTRPG campaign. Each product
          consumes the pattern differently — the novel gets chapter outlines,
          the screenplay gets a Fountain AST scene list, the comic gets
          page/panel layout, the motion-drama gets shot prompts, the TTRPG
          gets campaign beats.
          <span className="block mt-2 font-sans-zh" style={{ color: 'var(--fg-faint)' }}>
            同一个已封存模式加参数绑定可驱动多条产品线：长篇小说、短篇、小说转剧本、小说转漫画、漫剧镜头表、跑团战役。每种产品以不同方式消费同一个模式——长篇得到章节大纲，剧本得到 Fountain AST 场次列表，漫画得到分页分镜，漫剧得到镜头提示词，跑团得到战役节拍。
          </span>
        </motion.p>

        {/* CTA — if no outline has been reverse-generated yet */}
        {!hasOutline && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-8 rounded-lg border border-dashed p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{
              borderColor: 'color-mix(in oklab, var(--accent-muted) 50%, transparent)',
              backgroundColor: 'color-mix(in oklab, var(--bg-subtle) 30%, transparent)',
            }}
          >
            <Wand2
              className="size-6 shrink-0"
              style={{ color: 'var(--accent)' }}
            />
            <div className="flex-1">
              <p
                className="font-serif-headline text-base font-bold"
                style={{ color: 'var(--fg)' }}
              >
                Reverse-generate an outline first to see it materialize across
                products.
              </p>
              <p
                className="font-sans-zh text-sm mt-1"
                style={{ color: 'var(--fg-muted)' }}
              >
                先反向生成一份大纲，再查看它如何物化为多种产品。
              </p>
              <p
                className="font-mono-editorial text-[11px] mt-2"
                style={{ color: 'var(--fg-faint)' }}
              >
                Currently showing mocks based on the selected pattern:{' '}
                <span style={{ color: 'var(--accent)' }}>
                  {selectedPattern.name.en}
                </span>{' '}
                ·{' '}
                <span className="font-sans-zh" style={{ color: 'var(--accent)' }}>
                  {selectedPattern.name.zh}
                </span>
              </p>
            </div>
            <Button
              onClick={() => {
                const el = document.getElementById('reverse-gen')
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="bg-accent text-bg hover:bg-accent-bright font-semibold shrink-0"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'var(--bg)',
              }}
            >
              <Sparkles className="size-4" />
              Go to reverse-gen · 去反向生成
            </Button>
          </motion.div>
        )}

        {/* 6 product cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <LongFormNovelCard pattern={selectedPattern} b={b} />
          <ShortNovelCard pattern={selectedPattern} b={b} />
          <ScreenplayCard pattern={selectedPattern} b={b} />
          <ComicCard pattern={selectedPattern} b={b} />
          <MotionDramaCard pattern={selectedPattern} b={b} />
          <TTRPGCard pattern={selectedPattern} b={b} />
        </div>

        {/* Tiny status footer */}
        <div
          className="mt-6 font-mono-editorial text-[11px] flex items-baseline gap-3 flex-wrap"
          style={{ color: 'var(--fg-muted)' }}
        >
          <ScrollText className="size-3.5" style={{ color: 'var(--accent)' }} />
          <span>
            Output across 6 product kinds · 跨 6 种产品之输出
            <span style={{ color: 'var(--fg-faint)' }}> · </span>
            <span style={{ color: 'var(--accent)' }}>
              {hasOutline
                ? `linked to outline · ${producedOutline.filter((n) => n.type === 'volume').length} volumes, ${producedOutline.filter((n) => n.type === 'chapter').length} chapters`
                : 'no outline adopted — showing pattern-driven mocks · 未采纳大纲——展示模式驱动之 mock'}
            </span>
          </span>
        </div>
      </div>
    </section>
  )
}

export default MultiProductSection
