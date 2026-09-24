'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useStoryEngineStore } from '@/stores/story-engine-store'

/* -------------------------------------------------------------------------- */
/*  TourOverlay — 6-step spotlight tour walking the engine flow.               */
/*                                                                             */
/*  • Reads `tour.active`, `tour.step`, `tourSteps` from the store.            */
/*  • Each step targets a section id (hero / distillation / aggregation /     */
/*    library / reverse-gen / multi-product).                                  */
/*  • Renders a full-viewport overlay with a spotlight hole (CSS box-shadow    */
/*    trick) and a tooltip card positioned near the target.                    */
/*  • Auto-scrolls the target into view on step change.                        */
/*  • Next / Prev / Skip / Finish controls.                                    */
/* -------------------------------------------------------------------------- */

interface TargetRect {
  top: number
  left: number
  width: number
  height: number
}

const PADDING = 12 // px around the spotlighted element

export function TourOverlay() {
  const tour = useStoryEngineStore((s) => s.tour)
  const tourSteps = useStoryEngineStore((s) => s.tourSteps)
  const nextTourStep = useStoryEngineStore((s) => s.nextTourStep)
  const prevTourStep = useStoryEngineStore((s) => s.prevTourStep)
  const endTour = useStoryEngineStore((s) => s.endTour)

  const [targetRect, setTargetRect] = useState<TargetRect | null>(null)
  const [tooltipPos, setTooltipPos] = useState<{
    top: number
    left: number
    side: 'right' | 'left' | 'bottom'
  } | null>(null)

  const currentStep = tourSteps[tour.step]

  // Scroll target into view + measure its rect whenever step changes or tour
  // becomes active. The measuring itself is an external-system sync (DOM
  // measurement), so the setState calls are deferred inside rAF to avoid
  // cascading renders.
  useEffect(() => {
    if (!tour.active || !currentStep) {
      return
    }

    const target = document.getElementById(currentStep.targetId)
    if (!target) {
      return
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'center' })

    // Wait one frame for scroll to settle before measuring. The setState
    // calls happen inside the rAF callback, which is asynchronous — this
    // keeps the effect body free of synchronous setState.
    const rafId = requestAnimationFrame(() => {
      const r = target.getBoundingClientRect()
      const rect: TargetRect = {
        top: r.top - PADDING,
        left: r.left - PADDING,
        width: r.width + PADDING * 2,
        height: r.height + PADDING * 2,
      }
      setTargetRect(rect)

      // Position the tooltip — prefer right side, fall back to bottom, then left.
      const tooltipWidth = 360
      const tooltipHeight = 220 // approximate
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      let side: 'right' | 'left' | 'bottom' = 'right'
      let top = rect.top + rect.height / 2 - tooltipHeight / 2
      let left = rect.left + rect.width + 16

      if (left + tooltipWidth > viewportWidth - 16) {
        side = 'left'
        left = rect.left - tooltipWidth - 16
      }

      if (left < 16) {
        side = 'bottom'
        left = Math.max(
          16,
          Math.min(
            rect.left + rect.width / 2 - tooltipWidth / 2,
            viewportWidth - tooltipWidth - 16,
          ),
        )
        top = rect.top + rect.height + 16
      }

      if (side !== 'bottom') {
        top = Math.max(16, Math.min(top, viewportHeight - tooltipHeight - 16))
      } else {
        top = Math.min(top, viewportHeight - tooltipHeight - 16)
      }

      setTooltipPos({ top, left, side })
    })

    return () => cancelAnimationFrame(rafId)
  }, [tour.active, tour.step, currentStep])

  // Reset rect state when tour closes — separate effect to keep the
  // measuring effect body free of synchronous setState.
  useEffect(() => {
    if (!tour.active) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- legitimate reset of DOM-measured local state when the source prop (tour.active) flips false; the values are stale and would briefly misrender if retained through the next tour session's first frame.
      setTargetRect(null)
      setTooltipPos(null)
    }
  }, [tour.active])

  // Re-measure on viewport resize while tour is active.
  useEffect(() => {
    if (!tour.active || !currentStep) return
    const onResize = () => {
      const target = document.getElementById(currentStep.targetId)
      if (!target) return
      const r = target.getBoundingClientRect()
      const rect: TargetRect = {
        top: r.top - PADDING,
        left: r.left - PADDING,
        width: r.width + PADDING * 2,
        height: r.height + PADDING * 2,
      }
      setTargetRect(rect)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [tour.active, currentStep])

  // Lock body scroll while tour is active.
  useEffect(() => {
    if (tour.active) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [tour.active])

  // Keyboard shortcuts: Esc to skip, ArrowRight for next, ArrowLeft for prev.
  useEffect(() => {
    if (!tour.active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') endTour()
      else if (e.key === 'ArrowRight') nextTourStep()
      else if (e.key === 'ArrowLeft') prevTourStep()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [tour.active, endTour, nextTourStep, prevTourStep])

  if (!tour.active || !currentStep || !targetRect || !tooltipPos) {
    return null
  }

  const isLast = tour.step === tour.totalSteps - 1

  // Spotlight rect — used both for the "hole" and the gold ring.
  const hole = {
    top: targetRect.top,
    left: targetRect.left,
    width: targetRect.width,
    height: targetRect.height,
  }

  return (
    <AnimatePresence>
      <motion.div
        key="tour-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tour-title"
      >
        {/* Spotlight overlay: full dark, but with a transparent hole over the target */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.78)',
            // Box-shadow trick: huge spread creates the dark mask; the inner
            // rect is fully transparent because the spotlight div itself has
            // no background.
            boxShadow: `0 0 0 9999px rgba(0, 0, 0, 0.78)`,
            pointerEvents: 'auto',
          }}
          onClick={(e) => {
            // Clicking outside the tooltip closes the tour.
            if (e.target === e.currentTarget) endTour()
          }}
        />

        {/* Gold spotlight ring around the target */}
        <motion.div
          initial={false}
          animate={hole}
          transition={{ type: 'spring', stiffness: 220, damping: 28 }}
          className="absolute rounded-lg pointer-events-none"
          style={{
            border: `1.5px solid var(--accent-bright, #E5B97F)`,
            boxShadow: `0 0 0 4px rgba(193, 154, 107, 0.18), 0 0 32px rgba(193, 154, 107, 0.35)`,
          }}
        />

        {/* Tooltip card */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.05 }}
          className="absolute z-[101] w-[340px] sm:w-[380px] rounded-xl backdrop-blur-md"
          style={{
            top: tooltipPos.top,
            left: tooltipPos.left,
            backgroundColor: 'color-mix(in oklab, var(--bg-elevated, #18181B) 92%, transparent)',
            border: `1px solid color-mix(in oklab, var(--accent, #C19A6B) 50%, transparent)`,
            boxShadow:
              '0 12px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(193, 154, 107, 0.15)',
          }}
        >
          {/* Header: step indicator + close */}
          <div
            className="flex items-center justify-between px-4 py-2.5 border-b"
            style={{
              borderColor:
                'color-mix(in oklab, var(--fg-faint, #5C5849) 30%, transparent)',
            }}
          >
            <span
              className="font-mono-editorial text-[11px] tracking-widest uppercase"
              style={{ color: 'var(--accent, #C19A6B)' }}
            >
              Tour · 导览
            </span>
            <div className="flex items-center gap-2">
              <span
                className="font-mono-editorial text-[11px]"
                style={{ color: 'var(--fg-muted, #A39E8E)' }}
              >
                {tour.step + 1} / {tour.totalSteps}
              </span>
              <button
                onClick={endTour}
                aria-label="Close tour · 关闭导览"
                className="rounded p-1 transition-colors"
                style={{ color: 'var(--fg-muted, #A39E8E)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--fg, #F5F0E1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--fg-muted, #A39E8E)'
                }}
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Body: title + body text bilingual */}
          <div className="px-4 py-4 space-y-3">
            <div>
              <h3
                id="tour-title"
                className="font-serif-headline text-2xl leading-tight"
                style={{ color: 'var(--fg, #F5F0E1)' }}
              >
                {currentStep.titleEn}
              </h3>
              <p
                className="font-sans-zh text-base font-bold mt-0.5"
                style={{ color: 'var(--accent, #C19A6B)' }}
              >
                · {currentStep.titleZh}
              </p>
            </div>

            <p
              className="text-[13px] leading-relaxed"
              style={{ color: 'var(--fg-muted, #A39E8E)' }}
            >
              {currentStep.bodyEn}
            </p>
            <p
              className="font-sans-zh text-[13px] leading-relaxed"
              style={{ color: 'var(--fg-faint, #A39E8E)' }}
            >
              {currentStep.bodyZh}
            </p>
          </div>

          {/* Progress dots */}
          <div
            className="flex items-center justify-center gap-1.5 py-2 border-t"
            style={{
              borderColor:
                'color-mix(in oklab, var(--fg-faint, #5C5849) 25%, transparent)',
            }}
          >
            {tourSteps.map((_, i) => (
              <button
                key={i}
                onClick={() =>
                  useStoryEngineStore.getState().goToTourStep(i)
                }
                aria-label={`Go to step ${i + 1}`}
                className="rounded-full transition-all"
                style={{
                  width: i === tour.step ? 18 : 6,
                  height: 6,
                  backgroundColor:
                    i === tour.step
                      ? 'var(--accent-bright, #E5B97F)'
                      : i < tour.step
                        ? 'var(--accent, #C19A6B)'
                        : 'color-mix(in oklab, var(--fg-faint, #5C5849) 60%, transparent)',
                }}
              />
            ))}
          </div>

          {/* Footer: Prev / Next / Finish */}
          <div
            className="flex items-center justify-between gap-2 px-4 py-3 border-t"
            style={{
              borderColor:
                'color-mix(in oklab, var(--fg-faint, #5C5849) 25%, transparent)',
            }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={prevTourStep}
              disabled={tour.step === 0}
              className="gap-1"
              style={{ color: 'var(--fg-muted, #A39E8E)' }}
            >
              <ChevronLeft size={14} />
              <span className="text-xs">Prev · 上一步</span>
            </Button>

            {isLast ? (
              <Button
                size="sm"
                onClick={endTour}
                className="gap-1 font-semibold"
                style={{
                  backgroundColor: 'var(--accent, #C19A6B)',
                  color: 'var(--bg, #0E0E10)',
                }}
              >
                <span className="text-xs">Finish · 完成</span>
                <ChevronRight size={14} />
              </Button>
            ) : (
              <Button
                size="sm"
                onClick={nextTourStep}
                className="gap-1 font-semibold"
                style={{
                  backgroundColor: 'var(--accent, #C19A6B)',
                  color: 'var(--bg, #0E0E10)',
                }}
              >
                <span className="text-xs">Next · 下一步</span>
                <ChevronRight size={14} />
              </Button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
