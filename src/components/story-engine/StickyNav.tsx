'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useStoryEngineStore } from '@/stores/story-engine-store'

interface NavItem {
  href: string
  labelEn: string
  labelZh: string
}

const NAV_ITEMS: NavItem[] = [
  { href: '#distillation', labelEn: 'Distillation', labelZh: '提炼' },
  { href: '#aggregation', labelEn: 'Aggregation', labelZh: '聚合' },
  { href: '#library', labelEn: 'Library', labelZh: '模式库' },
  { href: '#reverse-gen', labelEn: 'Reverse-Gen', labelZh: '反向生成' },
  { href: '#multi-product', labelEn: 'Multi-Product', labelZh: '多产品' },
]

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const startTour = useStoryEngineStore((s) => s.startTour)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleTour = () => {
    // Subagent B will wire this to the TourOverlay. For now, start the
    // tour state and scroll to the distillation section as a stub.
    startTour()
    const el = document.getElementById('distillation')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'fixed top-0 inset-x-0 z-50',
        'backdrop-blur-md',
        'border-b',
        'transition-colors duration-300',
        scrolled
          ? 'bg-bg/85 border-fg-faint/40'
          : 'bg-bg/60 border-fg-faint/15',
      ].join(' ')}
      style={{
        backgroundColor: scrolled
          ? 'color-mix(in oklab, var(--bg) 85%, transparent)'
          : 'color-mix(in oklab, var(--bg) 55%, transparent)',
      }}
    >
      <nav
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Story Engine primary · 故事引擎主导航"
      >
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2 shrink-0"
            aria-label="Story Engine home · 故事引擎首页"
          >
            <span
              className="font-serif-headline text-xl md:text-2xl font-bold"
              style={{ color: 'var(--accent)' }}
            >
              ⚙︎
            </span>
            <span className="font-serif-headline text-base md:text-lg font-bold leading-tight">
              <span style={{ color: 'var(--fg)' }}>STORY ENGINE</span>
              <span className="mx-1.5" style={{ color: 'var(--fg-faint)' }}>
                ·
              </span>
              <span style={{ color: 'var(--accent)' }}>故事引擎</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group flex flex-col items-center px-3 py-2 rounded-md transition-colors hover:bg-bg-subtle/60"
                >
                  <span
                    className="text-xs font-medium"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    {item.labelEn}
                  </span>
                  <span
                    className="text-[10px] font-sans-zh"
                    style={{ color: 'var(--fg-faint)' }}
                  >
                    {item.labelZh}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handleTour}
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex border-accent/60 text-accent hover:bg-accent hover:text-bg"
              style={{
                borderColor: 'color-mix(in oklab, var(--accent) 60%, transparent)',
                color: 'var(--accent-bright)',
              }}
            >
              Take the Tour · 开始导览
            </Button>
            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-md hover:bg-bg-subtle"
              aria-label={mobileOpen ? 'Close menu · 关闭菜单' : 'Open menu · 打开菜单'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="size-5" style={{ color: 'var(--accent)' }} />
              ) : (
                <Menu className="size-5" style={{ color: 'var(--accent)' }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav drawer */}
        {mobileOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden flex flex-col gap-1 pb-4 border-t border-fg-faint/20"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-md hover:bg-bg-subtle/60"
                >
                  <span
                    className="text-sm font-medium"
                    style={{ color: 'var(--fg)' }}
                  >
                    {item.labelEn}
                  </span>
                  <span
                    className="text-xs font-sans-zh"
                    style={{ color: 'var(--fg-faint)' }}
                  >
                    {item.labelZh}
                  </span>
                </a>
              </li>
            ))}
            <li className="px-3 pt-2">
              <Button
                onClick={() => {
                  setMobileOpen(false)
                  handleTour()
                }}
                variant="outline"
                size="sm"
                className="w-full border-accent/60 text-accent"
                style={{ borderColor: 'color-mix(in oklab, var(--accent) 60%, transparent)' }}
              >
                Take the Tour · 开始导览
              </Button>
            </li>
          </motion.ul>
        )}
      </nav>
    </motion.header>
  )
}
