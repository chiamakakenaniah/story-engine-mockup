'use client'

import { StickyNav } from '@/components/story-engine/StickyNav'
import { Hero } from '@/components/story-engine/Hero'
import { DistillationSection } from '@/components/story-engine/DistillationSection'
import { AggregationSection } from '@/components/story-engine/AggregationSection'
import { Footer } from '@/components/story-engine/Footer'

/**
 * STORY ENGINE · 故事引擎 — Single Page Composition
 * ---------------------------------------------------
 * Subagent A built:
 *   <StickyNav />
 *   <Hero />                     (section 1)
 *   <DistillationSection />      (section 2)
 *   <AggregationSection />       (section 3)
 *   <Footer />
 *
 * Subagent B will fill in (currently stubs):
 *   <section id="library">       (section 4 — Pattern Library)
 *   <section id="reverse-gen">   (section 5 — Reverse-Generation)
 *   <section id="multi-product"> (section 6 — Multi-Product)
 *   <TourOverlay />              (overlay)
 *
 * The root wrapper uses `min-h-screen flex flex-col` so the Footer sticks
 * to the bottom of the viewport when content is shorter than one screen.
 */
export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-bg text-fg font-sans-zh">
      <StickyNav />

      <main className="flex-1">
        <Hero />
        <DistillationSection />
        <AggregationSection />

        {/* SECTION 4 — SUBAGENT B FILLS IN: Pattern Library */}
        <section
          id="library"
          className="py-24 scroll-mt-16 border-t"
          style={{
            borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
          }}
          aria-labelledby="library-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="eyebrow">03 · Pattern Library</span>
              <span
                className="font-sans-zh text-xs"
                style={{ color: 'var(--fg-faint)' }}
              >
                · 模式库
              </span>
            </div>
            <h2
              id="library-heading"
              className="font-serif-headline text-4xl sm:text-5xl md:text-6xl font-black leading-tight"
              style={{ color: 'var(--fg)' }}
            >
              The Pattern Library
            </h2>
            <p
              className="font-sans-zh text-2xl sm:text-3xl md:text-4xl font-bold mt-1"
              style={{ color: 'var(--accent)' }}
            >
              · 模式库
            </p>
            <p
              className="mt-6 max-w-2xl text-sm"
              style={{ color: 'var(--fg-faint)' }}
            >
              <span className="font-mono-editorial" style={{ color: 'var(--accent)' }}>
                ›
              </span>{' '}
              Subagent B will fill this in. The library will use the
              <code
                className="font-mono-editorial mx-1"
                style={{ color: 'var(--accent)' }}
              >
                DistilledPatternCard
              </code>
              component for every pattern returned by
              <code
                className="font-mono-editorial mx-1"
                style={{ color: 'var(--accent)' }}
              >
                getAllPatterns()
              </code>
              . Filter and group by
              <code
                className="font-mono-editorial mx-1"
                style={{ color: 'var(--accent)' }}
              >
                familyKey
              </code>
              and
              <code
                className="font-mono-editorial mx-1"
                style={{ color: 'var(--accent)' }}
              >
                provenance
              </code>
              .
            </p>
            <p
              className="font-sans-zh mt-2 max-w-2xl text-sm"
              style={{ color: 'var(--fg-faint)' }}
            >
              <span className="font-mono-editorial" style={{ color: 'var(--accent)' }}>
                ›
              </span>{' '}
              由 Subagent B 填充。库内将使用 DistilledPatternCard 组件呈现
              getAllPatterns() 返回的所有模式。可按 familyKey 与 provenance 分组筛选。
            </p>
            {/* Visible placeholder card grid so the layout reads well empty */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 opacity-40">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-48 rounded-lg border border-dashed flex items-center justify-center"
                  style={{
                    borderColor:
                      'color-mix(in oklab, var(--fg-faint) 40%, transparent)',
                  }}
                >
                  <span
                    className="font-mono-editorial text-xs"
                    style={{ color: 'var(--fg-faint)' }}
                  >
                    pattern card {i + 1} · 模式卡片 {i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — SUBAGENT B FILLS IN: Reverse-Generation */}
        <section
          id="reverse-gen"
          className="py-24 scroll-mt-16 border-t"
          style={{
            borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
          }}
          aria-labelledby="reverse-gen-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="eyebrow">04 · Reverse-Generation</span>
              <span
                className="font-sans-zh text-xs"
                style={{ color: 'var(--fg-faint)' }}
              >
                · 反向生成
              </span>
            </div>
            <h2
              id="reverse-gen-heading"
              className="font-serif-headline text-4xl sm:text-5xl md:text-6xl font-black leading-tight"
              style={{ color: 'var(--fg)' }}
            >
              Reverse-generate any story
            </h2>
            <p
              className="font-sans-zh text-2xl sm:text-3xl md:text-4xl font-bold mt-1"
              style={{ color: 'var(--accent)' }}
            >
              · 反向生成任何故事
            </p>
            <p
              className="mt-6 max-w-2xl text-sm"
              style={{ color: 'var(--fg-faint)' }}
            >
              <span className="font-mono-editorial" style={{ color: 'var(--accent)' }}>
                ›
              </span>{' '}
              Subagent B will fill this in. Select a pattern from the library,
              bind the 6 standard parameter slots, then run the outline
              generator. Should use
              <code
                className="font-mono-editorial mx-1"
                style={{ color: 'var(--accent)' }}
              >
                useStoryEngineStore: selectedPatternId, parameterBindings,
                reverseGenJob
              </code>
              (the slot signatures are already declared in the Zustand store).
            </p>
            <p
              className="font-sans-zh mt-2 max-w-2xl text-sm"
              style={{ color: 'var(--fg-faint)' }}
            >
              <span className="font-mono-editorial" style={{ color: 'var(--accent)' }}>
                ›
              </span>{' '}
              由 Subagent B 填充。从库中选择一个模式，绑定 6 个标准参数槽位，
              再运行大纲生成器。应使用 useStoryEngineStore 中已声明的 selectedPatternId、
              parameterBindings、reverseGenJob 状态槽。
            </p>
            <div
              className="mt-10 h-64 rounded-lg border border-dashed flex items-center justify-center"
              style={{
                borderColor:
                  'color-mix(in oklab, var(--fg-faint) 40%, transparent)',
              }}
            >
              <span
                className="font-mono-editorial text-sm"
                style={{ color: 'var(--fg-faint)' }}
              >
                reverse-gen workspace · 反向生成工作台
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 6 — SUBAGENT B FILLS IN: Multi-Product */}
        <section
          id="multi-product"
          className="py-24 scroll-mt-16 border-t"
          style={{
            borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)',
          }}
          aria-labelledby="multi-product-heading"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="eyebrow">05 · Multi-Product</span>
              <span
                className="font-sans-zh text-xs"
                style={{ color: 'var(--fg-faint)' }}
              >
                · 多产品
              </span>
            </div>
            <h2
              id="multi-product-heading"
              className="font-serif-headline text-4xl sm:text-5xl md:text-6xl font-black leading-tight"
              style={{ color: 'var(--fg)' }}
            >
              One pattern · many products
            </h2>
            <p
              className="font-sans-zh text-2xl sm:text-3xl md:text-4xl font-bold mt-1"
              style={{ color: 'var(--accent)' }}
            >
              · 一模式 · 多产品
            </p>
            <p
              className="mt-6 max-w-2xl text-sm"
              style={{ color: 'var(--fg-faint)' }}
            >
              <span className="font-mono-editorial" style={{ color: 'var(--accent)' }}>
                ›
              </span>{' '}
              Subagent B will fill this in. Given a bound pattern, fan out into:
              novel outline · screenplay beats · webnovel chapter beats ·
              graphic-novel panel beats · game-quest arc · serial-podcast
              episode beats. Each fan-out is a separate productKind.
            </p>
            <p
              className="font-sans-zh mt-2 max-w-2xl text-sm"
              style={{ color: 'var(--fg-faint)' }}
            >
              <span className="font-mono-editorial" style={{ color: 'var(--accent)' }}>
                ›
              </span>{' '}
              由 Subagent B 填充。给定一个已绑定的模式，扇出为：小说大纲 ·
              剧本节拍 · 网文章节节拍 · 漫画分镜节拍 · 游戏任务弧 · 播客分集节拍。
              每一扇出为独立的 productKind。
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 opacity-40">
              {[
                'Novel · 小说',
                'Screenplay · 剧本',
                'Webnovel · 网文',
                'Graphic Novel · 漫画',
                'Game Quest · 游戏任务',
                'Podcast · 播客',
              ].map((label) => (
                <div
                  key={label}
                  className="h-32 rounded-lg border border-dashed flex items-center justify-center"
                  style={{
                    borderColor:
                      'color-mix(in oklab, var(--fg-faint) 40%, transparent)',
                  }}
                >
                  <span
                    className="font-mono-editorial text-xs"
                    style={{ color: 'var(--fg-faint)' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOUR OVERLAY — SUBAGENT B FILLS IN */}
        {/* Subagent B: import TourOverlay and render here. The store's
            tour slice ({ active, step, totalSteps }) and tour actions
            (startTour, endTour, nextTourStep, prevTourStep,
            goToTourStep) are already declared in src/stores/story-engine-store.ts. */}
        {/* <TourOverlay /> */}
      </main>

      <Footer />
    </div>
  )
}
