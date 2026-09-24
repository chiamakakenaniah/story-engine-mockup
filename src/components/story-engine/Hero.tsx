'use client'

import { motion } from 'framer-motion'
import { ArrowDown, BookOpen, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useStoryEngineStore } from '@/stores/story-engine-store'

/**
 * Hero — Section 1
 * Full viewport height, centered content, radial gold glow + a thin gold line.
 */
export function Hero() {
  const startTour = useStoryEngineStore((s) => s.startTour)

  const onTakeTour = () => {
    // Subagent B will wire this to the actual TourOverlay.
    // Stub: start tour state + scroll to distillation section.
    startTour()
    const el = document.getElementById('distillation')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const onSkipToLibrary = () => {
    const el = document.getElementById('library')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-radial pt-24 pb-16"
      aria-labelledby="hero-heading"
    >
      {/* Background ornament — a faint thin gold line + radial dot */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <svg
          width="1200"
          height="800"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-30"
        >
          <defs>
            <radialGradient id="hero-radial-glow" cx="50%" cy="42%" r="38%">
              <stop
                offset="0%"
                stopColor="var(--accent-bright)"
                stopOpacity="0.18"
              />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--accent-muted)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="var(--accent-muted)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect
            x="0"
            y="0"
            width="1200"
            height="800"
            fill="url(#hero-radial-glow)"
          />
          <line
            x1="120"
            y1="640"
            x2="1080"
            y2="640"
            stroke="url(#hero-line)"
            strokeWidth="1"
          />
          {/* Faint forge symbol — gear / orbit */}
          <circle
            cx="600"
            cy="320"
            r="180"
            fill="none"
            stroke="var(--accent-muted)"
            strokeOpacity="0.25"
            strokeWidth="0.7"
            strokeDasharray="3 5"
          />
          <circle
            cx="600"
            cy="320"
            r="120"
            fill="none"
            stroke="var(--accent-muted)"
            strokeOpacity="0.18"
            strokeWidth="0.7"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl px-6 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="eyebrow mb-6"
        >
          A Story Engine Concept Mockup · 故事引擎概念原型
        </motion.p>

        {/* H1 — bilingual stacked */}
        <motion.h1
          id="hero-heading"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif-headline font-black leading-[0.95]"
          style={{ color: 'var(--fg)' }}
        >
          <span className="block text-6xl sm:text-7xl md:text-8xl tracking-tight">
            STORY ENGINE
          </span>
          <span
            className="block mt-2 md:mt-4 text-4xl sm:text-5xl md:text-6xl font-bold"
            style={{ color: 'var(--accent)' }}
          >
            · 故事引擎
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 max-w-3xl text-base sm:text-lg md:text-xl font-sans-zh leading-relaxed"
          style={{ color: 'var(--fg-muted)' }}
        >
          Distill patterns from any corpus. Reverse-generate any story.
          <br />
          <span style={{ color: 'var(--fg-faint)' }}>
            从任何作品提炼模式 · 反向生成任何故事
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            onClick={onTakeTour}
            size="lg"
            className="bg-accent text-bg hover:bg-accent-bright font-semibold px-7 h-12 text-base"
            style={{
              backgroundColor: 'var(--accent)',
              color: 'var(--bg)',
            }}
          >
            <Sparkles className="size-4" />
            Take the Tour · 开始导览
          </Button>
          <Button
            onClick={onSkipToLibrary}
            size="lg"
            variant="outline"
            className="border-accent/60 text-fg hover:bg-accent hover:text-bg font-semibold px-7 h-12 text-base"
            style={{
              borderColor: 'color-mix(in oklab, var(--accent) 60%, transparent)',
              color: 'var(--fg)',
            }}
          >
            <BookOpen className="size-4" />
            Skip to Library · 直接看模式库
          </Button>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span
            className="text-[10px] eyebrow"
            style={{ color: 'var(--fg-faint)' }}
          >
            Scroll · 向下滚动
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown
              className="size-4"
              style={{ color: 'var(--accent)' }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gold divider + tiny caption */}
      <div className="absolute bottom-0 inset-x-0 z-10 px-6 pb-5">
        <div className="max-w-3xl mx-auto">
          <div className="gold-divider mb-3" />
          <p
            className="text-center text-[10px] eyebrow"
            style={{ color: 'var(--fg-faint)' }}
          >
            Built as a vision mockup · 作为可视化原型构建
          </p>
        </div>
      </div>
    </section>
  )
}
