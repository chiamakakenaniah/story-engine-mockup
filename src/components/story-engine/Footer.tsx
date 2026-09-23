'use client'

import { motion } from 'framer-motion'

/**
 * Footer — sticks to bottom of viewport via mt-auto on a min-h-screen flex
 * flex-col root wrapper (set up in page.tsx).
 */
export function Footer() {
  const year = new Date().getFullYear()
  const navLinks = [
    { href: '#distillation', en: 'Distillation', zh: '提炼' },
    { href: '#aggregation', en: 'Aggregation', zh: '聚合' },
    { href: '#library', en: 'Pattern Library', zh: '模式库' },
    { href: '#reverse-gen', en: 'Reverse-Gen', zh: '反向生成' },
    { href: '#multi-product', en: 'Multi-Product', zh: '多产品' },
  ]

  return (
    <footer
      className="mt-auto pt-12 pb-8 border-t"
      style={{
        borderColor: 'color-mix(in oklab, var(--fg-faint) 30%, transparent)',
        background:
          'linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--accent-muted) 5%, transparent) 100%)',
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="gold-divider mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* LEFT — branding + mission statement */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-baseline gap-2">
              <span
                className="font-serif-headline text-lg font-bold"
                style={{ color: 'var(--accent)' }}
              >
                ⚙︎
              </span>
              <h3
                className="font-serif-headline text-xl font-bold"
                style={{ color: 'var(--fg)' }}
              >
                STORY ENGINE
              </h3>
              <span style={{ color: 'var(--fg-faint)' }}>·</span>
              <span
                className="font-serif-headline text-xl font-bold"
                style={{ color: 'var(--accent)' }}
              >
                故事引擎
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-md"
              style={{ color: 'var(--fg-muted)' }}
            >
              A vision mockup for the Story Engine concept. Inspired by
              StoryForge&apos;s substrate; the distillation-aggregation-reverse-generation
              layer is the proposed novel contribution.
            </p>
            <p
              className="font-sans-zh text-sm leading-relaxed max-w-md"
              style={{ color: 'var(--fg-faint)' }}
            >
              故事引擎概念原型。受 StoryForge 底座启发；提炼-聚合-反向生成层为提议之全新贡献。
            </p>
          </motion.div>

          {/* RIGHT — nav links + built stamp */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col md:items-end gap-4"
          >
            <nav aria-label="Footer · 页脚导航">
              <ul className="flex flex-col md:items-end gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-baseline gap-2 text-sm hover:text-accent transition-colors"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      <span>{link.en}</span>
                      <span
                        className="font-sans-zh text-xs"
                        style={{ color: 'var(--fg-faint)' }}
                      >
                        · {link.zh}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div
              className="mt-2 flex items-center gap-2 font-mono-editorial text-[11px]"
              style={{ color: 'var(--fg-faint)' }}
            >
              <span>Built {year}</span>
              <span>·</span>
              <span className="font-sans-zh">构建于 {year}</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom micro-line */}
        <div className="mt-10 pt-4 border-t flex items-center justify-between gap-4 flex-wrap"
          style={{
            borderColor: 'color-mix(in oklab, var(--fg-faint) 20%, transparent)',
          }}
        >
          <p
            className="font-mono-editorial text-[10px] uppercase tracking-wider"
            style={{ color: 'var(--fg-faint)' }}
          >
            Mockup only · Not production · 仅为原型 · 非生产代码
          </p>
          <p
            className="font-mono-editorial text-[10px]"
            style={{ color: 'var(--fg-faint)' }}
          >
            typescript · next.js 16 · tailwind 4 · shadcn/ui · zustand · framer-motion
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
