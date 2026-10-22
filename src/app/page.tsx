'use client'

import dynamic from 'next/dynamic'
import { StickyNav } from '@/components/story-engine/StickyNav'
import { Hero } from '@/components/story-engine/Hero'
import { DistillationSection } from '@/components/story-engine/DistillationSection'
import { AggregationSection } from '@/components/story-engine/AggregationSection'
import { PatternLibrarySection } from '@/components/story-engine/PatternLibrarySection'
import { ReverseGenerationSection } from '@/components/story-engine/ReverseGenerationSection'
import { MultiProductSection } from '@/components/story-engine/MultiProductSection'
import { Footer } from '@/components/story-engine/Footer'
import { TourOverlay } from '@/components/story-engine/TourOverlay'

// Defer the 1.5MB Corpus Lab chunk out of the initial homepage bundle.
// Sections 1-6 render instantly; section 7 streams in as user scrolls.
const CorpusLabSection = dynamic(() => import('@/components/story-engine/CorpusLabSection').then(m => m.CorpusLabSection), {
  ssr: false,
  loading: () => (
    <section id="corpus-lab" className="py-24 scroll-mt-16 border-t" style={{ borderColor: 'color-mix(in oklab, var(--fg-faint) 25%, transparent)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-mono-editorial text-sm" style={{ color: 'var(--fg-muted, #A39E8E)' }}>
          Loading Corpus Lab… · 加载语料实验室中…
        </p>
      </div>
    </section>
  ),
})

/**
 * STORY ENGINE · 故事引擎 — Single Page Composition
 * ---------------------------------------------------
 * Sections:
 *   1. Hero                    — full-viewport title + tagline + tour CTA
 *   2. DistillationSection     — corpus drop-zone → 5-stage distillation simulation
 *   3. AggregationSection      — 5 pattern nodes → meta-pattern clustering
 *   4. PatternLibrarySection   — built-in + distilled + aggregated pattern grid
 *   5. ReverseGenerationSection — pattern selector + parameter form + outline tree
 *   6. MultiProductSection     — same pattern → 6 different product outputs
 *   7. CorpusLabSection        — 259 stories + 1136 variants, mass-scale pattern
 *                                application, framework stress-test
 *   +  TourOverlay             — spotlight tour (7 steps)
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
        <PatternLibrarySection />
        <ReverseGenerationSection />
        <MultiProductSection />
        <CorpusLabSection />
      </main>

      <Footer />

      <TourOverlay />
    </div>
  )
}
