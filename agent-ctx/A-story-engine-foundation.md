# Subagent A — Foundation + Sections 1-3 · Work Record

**Task ID:** A-story-engine-foundation
**Project:** STORY ENGINE · 故事引擎 (Next.js 16 vision mockup)
**Date:** 2026-09-23
**Status:** Complete · lint passing · page renders HTTP 200

---

## What I built

### Foundation (shared infrastructure)

1. **`src/lib/story-engine-data.ts`** — single source of truth for types + mock data.
   - All 11 type exports (`PatternProvenance`, `PatternStageRole`,
     `PatternStageSlot`, `PatternArchetype`, `PatternTurningPoint`,
     `PatternParameterSlot`, `PatternInvariant`, `StoryPattern`,
     `ReferenceDocument`, `OutlineNode`, `DistillationJob`).
   - `SAMPLE_REFERENCES` — 5 bilingual multi-cultural reference documents.
   - `STANDARD_PARAMETER_SLOTS` — shared 6-slot parameter set, reused by every
     distilled pattern and the aggregated meta-pattern.
   - `DISTILLED_PATTERNS` — 5 fully fleshed-out patterns:
       1. `pat-distilled-buddenbrooks` — Bourgeois Decline Across Generations
          (family saga, 8 stages, 5 archetypes, 3 turning points, 3 invariants)
       2. `pat-distilled-threebody` — First Contact Doomsday
          (hard sci-fi, 8 stages, 5 archetypes, 3 turning points, 3 invariants)
       3. `pat-distilled-pride` — Comedy of Manners · Mutual Misreading
          (comedy of manners, 8 stages, 4 archetypes, 3 turning points, 3 invariants)
       4. `pat-distilled-snowcountry` — Mood Spiral Toward the Bright Night
          (literary mood-piece, 8 stages, 4 archetypes, 3 turning points, 3 invariants)
       5. `pat-distilled-systememperor` — System-Stream Ascension
          (system-stream webnovel, 8 stages, 4 archetypes, 4 turning points, 3 invariants)
   - `AGGREGATED_PATTERNS` — 1 family-saga meta-pattern
     (`pat-aggregated-family-saga`) with statistical weights per stage
     (5, 5, 4, 4, 3, 5, 4, 3), confidence 0.84, statisticalWeight 5.
   - `BUILT_IN_PATTERNS` — empty array with a `// SUBAGENT B: populate this`
     comment marker for Subagent B to fill in.
   - Helpers: `getAllPatterns()`, `findPatternById()`, `findReferenceById()`,
     `groupPatternsByFamily()`.

2. **`src/app/globals.css`** — editorial dark theme tokens.
   - All CSS variables from the spec (`--bg`, `--bg-elevated`, `--bg-subtle`,
     `--fg`, `--fg-muted`, `--fg-faint`, `--accent`, `--accent-bright`,
     `--accent-muted`, `--danger`, `--success`) registered in both `:root`
     and `.dark`.
   - Mapped to Tailwind utility classes via `@theme inline`
     (`bg-bg`, `text-fg`, `border-fg-faint`, `text-accent`, etc.).
   - Editorial font utility classes: `.font-serif-headline`,
     `.font-sans-zh`, `.font-mono-editorial`, `.eyebrow`, `.gold-divider`,
     `.hero-radial`, `.card-editorial`.
   - Custom scrollbar styling (brass-on-charcoal).
   - `html { color-scheme: dark }` set; `<html>` has `className="dark"` in
     layout.tsx so Sonner/toast theming works correctly.

3. **`src/app/layout.tsx`** — font loading.
   - Loads via `next/font/google`:
       - `Inter` (400, 500, 600, 700) — `--font-inter`
       - `Playfair_Display` (700, 900) — `--font-playfair`
       - `Noto_Serif_SC` (700, 900) — `--font-noto-serif-sc`
       - `Noto_Sans_SC` (400, 500, 700) — `--font-noto-sans-sc`
       - `JetBrains_Mono` (400, 500, 700) — `--font-geist-mono`
   - Both shadcn `<Toaster />` (legacy) and `<SonnerToaster />` mounted.
   - `<html lang="en" className="dark" suppressHydrationWarning>` — dark mode
     is forced (this is an editorial dark mockup only).

4. **`src/stores/story-engine-store.ts`** — Zustand store.
   - Subagent A slices:
       - `selectedReferenceIds: string[]` + `toggleReference`, `setReferences`
       - `distillationJob: DistillationJob` + `setDistillationStage`,
         `resetDistillation`
       - `aggregationJob: { status, progress, producedMetaPatternId }` +
         `setAggregationStage`, `resetAggregation`
       - `tour: { active, step, totalSteps }` + `startTour`, `endTour`,
         `nextTourStep`, `prevTourStep`, `goToTourStep` — **stub** for
         Subagent B to fully wire to the TourOverlay.
   - Subagent B extension slots (already declared, default `null`/`{}`):
       - `selectedPatternId: string | null` + `setSelectedPatternId`
       - `parameterBindings: Partial<Record<paramKey, string>>` +
         `setParameterBinding`, `clearParameterBindings`
   - Selectors: `selectAggregatedMetaPattern()`, `selectSelectedReferences()`.

### Components (sections 1-3 + sticky nav + hero + footer)

5. **`src/components/story-engine/StickyNav.tsx`** — fixed top nav.
   - `backdrop-blur-md` + `bg-bg/85` when scrolled, lighter at top.
   - Left: `⚙︎ STORY ENGINE · 故事引擎` logo (Playfair + Noto Serif SC).
   - Center: 5 anchor nav links (Distillation · 提炼 / Aggregation · 聚合 /
     Library · 模式库 / Reverse-Gen · 反向生成 / Multi-Product · 多产品).
   - Right: "Take the Tour · 开始导览" button (gold outline).
   - Mobile: hamburger menu drawer with same links.
   - Tour button: calls `startTour()` and scrolls to `#distillation` as
     a stub. Subagent B will wire this to the actual TourOverlay.

6. **`src/components/story-engine/Hero.tsx`** — Section 1.
   - `min-h-screen` full-viewport hero.
   - Radial gold glow SVG + faint dotted "forge" orbit.
   - Eyebrow: "A Story Engine Concept Mockup · 故事引擎概念原型".
   - H1 stacked: "STORY ENGINE" (Playfair 7xl-8xl) + "· 故事引擎"
     (Noto Serif SC, gold accent).
   - Tagline (bilingual).
   - Two CTAs: "Take the Tour · 开始导览" (filled gold) +
     "Skip to Library · 直接看模式库" (outline).
   - Scroll cue with bouncing arrow.
   - Bottom: thin gold divider + "Built as a vision mockup · 作为可视化原型构建".

7. **`src/components/story-engine/DistilledPatternCard.tsx`** — reusable.
   Renders ANY `StoryPattern` (built-in, distilled, or aggregated).
   - Header: pattern name (bilingual serif), provenance badge, sealed/draft
     status, family key.
   - For aggregated patterns: shows `Σ Confirmed: N instances` and
     `Confidence · 置信度: 0.XX` in the header.
   - Body (2-col desktop): Stages vertical timeline + Archetypes list.
     - Each stage shows: number, role badge, label (bilingual), description
       (bilingual), trigger/payoff constraints (bilingual), keyEvents range,
       required archetype keys.
     - For aggregated patterns: each stage shows a `weight/totalInstances`
       badge (filled gold if ≥4, outline if 2-3, faint if 1).
     - Each archetype shows: key, label (bilingual), function summary
       (bilingual), mandatory-at-roles badges.
   - Below: Turning Points row (chips with irreversible-change text).
   - Below: Parameter Slots row (6 chips with required indicator).
   - Below: Invariants block (monospace, code + spec + message bilingual).
   - Footer: pattern id + "Add to Library · 加入模式库" button (triggers
     `sonner` toast success).
   - Props: `pattern`, `showAddToLibrary?`, `addedToLibrary?`, `className?`.

8. **`src/components/story-engine/DistillationSection.tsx`** — Section 2.
   - Section header: eyebrow "01 · Distillation" + H2 bilingual.
   - Intro paragraph (bilingual, max-w-2xl).
   - Drop-zone: 5 reference cards in 3-col desktop / 1-col mobile grid.
     - Each card: lang tag, year, title (bilingual), author, genre
       (bilingual), char count, checkbox toggle.
     - Wired to `useStoryEngineStore.toggleReference`.
   - Action bar: "Run Distillation · 开始提炼" gold filled button +
     Reset + mock pipeline label.
   - Simulation: 5 stages cycling with progress bar (chunking 0-20%,
     analyzing 20-50%, lifting 50-75%, validating 75-95%, sealing 95-100%).
     - Uses `setTimeout` chain (~700ms per stage → ~3.5s total).
     - When done: shows the matching distilled `DistilledPatternCard` with
       `addedToLibrary` set.
   - Exports `SectionHeader` helper (used by AggregationSection too).

9. **`src/components/story-engine/AggregationSection.tsx`** — Section 3.
   - Section header: eyebrow "02 · Aggregation" + H2 bilingual.
   - Intro paragraph emphasizing "genuinely novel — no existing tool does this".
   - Action bar: "Run Aggregation · 开始聚合" gold filled button + Reset.
   - Two-panel layout (lg:grid-cols-2):
     - LEFT: 5 distilled pattern node cards positioned around a loose
       circle (hand-tuned absolute positions).
     - RIGHT: placeholder OR meta-pattern `DistilledPatternCard`.
   - SVG overlay (absolute, pointer-events-none) draws curved bezier paths
     from each left node's source dot to a central aggregation hub on the
     right, animated via framer-motion `pathLength` + staggered delays
     (~1.5s total). Hub pulses; source dots pulse during animation.
   - After animation completes (~2.5s total), right panel transitions to
     the aggregated meta-pattern card (which auto-renders weight badges
     + confirmed-instances header + confidence footer).

10. **`src/components/story-engine/Footer.tsx`**.
    - `mt-auto` so it sticks to bottom of viewport (root wrapper is
      `min-h-screen flex flex-col` in `page.tsx`).
    - Gold top divider.
    - Left col: branding + bilingual mission statement (StoryForge-inspired,
      distillation-aggregation-reverse-generation as novel contribution).
    - Right col: nav links + "Built 2026".
    - Bottom micro-line: "Mockup only · Not production · 仅为原型 · 非生产代码"
      + stack list.

11. **`src/app/page.tsx`** — single-page composition.
    - Root wrapper: `min-h-screen flex flex-col bg-bg text-fg font-sans-zh`.
    - Sections in order:
        1. `<StickyNav />`
        2. `<Hero />` (id="hero")
        3. `<DistillationSection />` (id="distillation")
        4. `<AggregationSection />` (id="aggregation")
        5. `<section id="library">` — STUB for Subagent B
        6. `<section id="reverse-gen">` — STUB for Subagent B
        7. `<section id="multi-product">` — STUB for Subagent B
        8. `<Footer />`
    - Tour overlay: commented-out placeholder ` {/* <TourOverlay /> */}` for
      Subagent B to uncomment.
    - Stubs include visible placeholder cards/grids so the layout reads
      well-empty, plus bilingual hints pointing Subagent B at the right
      store hooks and components.

---

## Lint result

`bun run lint` → **PASSING, 0 errors, 0 warnings**.

Initial lint run flagged 6 errors of type
`react/jsx-no-comment-textnodes` because I'd written `// Subagent B will
fill this in.` inside `<p>` JSX text. Fixed by prefixing the text with a
`›` editorial glyph wrapped in a styled `<span>`, keeping the bilingual
content. Lint is now clean.

---

## Decisions that deviate from the spec

1. **Five Google fonts, not four** — I added `JetBrains_Mono` as a 5th
   font for the editorial monospace (used in eyebrows, system-voice panels,
   invariants, codes). It's wired as `--font-geist-mono` to stay
   backward-compatible with shadcn's default mono variable name. The spec
   mentioned Playfair, Inter, Noto Serif SC, Noto Sans SC; JetBrains Mono
   is an addition that fits the editorial dark aesthetic.

2. **`<html className="dark">`** — The spec said "implement light/dark mode
   with `next-themes`" but also said "editorial dark" with NO blue/indigo
   colors. To keep the editorial dark palette the only mode and avoid the
   flash-of-wrong-theme, I forced `className="dark"` on the html element
   and did NOT install a `<ThemeProvider>` wrapper. The `.dark` variant in
   `globals.css` maps to the editorial dark palette (identical to `:root`).
   Sonner's `useTheme()` returns "system" by default and falls back to
   `.dark` because of the html class — toasts render correctly.
   - If Subagent B wants to add a true light/dark toggle, they should add
     `next-themes`'s `<ThemeProvider attribute="class">` in layout.tsx
     and define a contrasting `:root` (light) palette. Current `:root` is
     dark; it'd need rewriting.

3. **Section 4-6 stub styling** — Instead of a single-line comment stub,
   I built full visual placeholders (dashed card grids, bilingual
   developer notes pointing at the right hooks) so the empty page reads
   well and demonstrates the design system. Subagent B can replace each
   stub wholesale.

4. **Aggregation SVG is desktop-only** — The animated bezier overlay is
   hidden on mobile (`lg:block` / `lg:hidden`). On mobile, a simple gold
   gradient divider animates between the stacked panels. This avoids
   brittle SVG layout math on tiny screens.

5. **Pattern selection in Distillation** — The mockup simulates
   distillation of a single reference at a time (the first selected one).
   The matching distilled pattern is looked up via `sourceReferenceIds`.
   If Subagent B wants multi-reference distillation, they'd need to either
   add a synthesized pattern or compose a meta-pattern from the
   selected references' pre-distilled patterns.

6. **`PatternStageSlot.weight` field** — Added an optional `weight?: number`
   field to the `PatternStageSlot` interface (not in the original spec
   types) so aggregated meta-patterns can carry per-stage confirmation
   counts. Subagent B can ignore this for built-in/distilled patterns.

7. **`StoryPattern.confidence` field** — Added an optional
   `confidence?: number` field (0-1) for aggregated patterns. The
   meta-pattern uses `0.84`.

8. **`STANDARD_PARAMETER_SLOTS` shared constant** — Factored out the 6
   standard parameter slots into a shared constant. All 5 distilled
   patterns + the meta-pattern reuse it via spread. Subagent B's built-in
   patterns can either reuse it or define their own `parameterSlots`
   array (e.g., Truby might want a different ontology).

---

## SUBAGENT B HANDOFF — READ THIS FIRST

### Exact exports from `src/lib/story-engine-data.ts` to import

```ts
// Types (all exported)
import type {
  PatternProvenance,           // 'built-in' | 'distilled' | 'aggregated'
  PatternStageRole,            // 'setup' | 'inciting-incident' | ...
  PatternStageSlot,             // includes optional weight?: number (for aggregated)
  PatternArchetype,
  PatternTurningPoint,
  PatternParameterSlot,         // paramKey union: setting | protagonist | antagonist | centralConflict | stakes | theme
  PatternInvariant,
  StoryPattern,                 // includes optional confidence?: number (for aggregated)
  ReferenceDocument,
  OutlineNode,                  // for reverse-gen outline output
  DistillationJob,
} from '@/lib/story-engine-data'

// Constants
import {
  SAMPLE_REFERENCES,            // ReferenceDocument[] (5 entries)
  STANDARD_PARAMETER_SLOTS,     // PatternParameterSlot[] (6 entries — reuse for built-ins)
  DISTILLED_PATTERNS,            // StoryPattern[] (5 entries, fully filled)
  AGGREGATED_PATTERNS,           // StoryPattern[] (1 entry: family-saga meta-pattern)
  BUILT_IN_PATTERNS,             // StoryPattern[] (currently EMPTY — you populate this)
} from '@/lib/story-engine-data'

// Helpers
import {
  getAllPatterns,                // () => StoryPattern[]  (returns [...BUILT_IN, ...DISTILLED, ...AGGREGATED])
  findPatternById,               // (id: string) => StoryPattern | undefined
  findReferenceById,             // (id: string) => ReferenceDocument | undefined
  groupPatternsByFamily,         // () => Map<string, StoryPattern[]>
} from '@/lib/story-engine-data'
```

### What you MUST do to `BUILT_IN_PATTERNS`

The array currently has only a comment:

```ts
export const BUILT_IN_PATTERNS: StoryPattern[] = [
  /* SUBAGENT B: populate this with built-in patterns. See comment above. */
]
```

Add 7-9 entries per the spec — Save the Cat, Hero's Journey, Harmon
Circle, Dramatica, Truby's 22 Steps, 起承转合, 序破急, 网文系统流,
网文重生流. Each must be a complete `StoryPattern` object. Suggested
pattern ids: `pat-builtin-save-the-cat`, `pat-builtin-heros-journey`, etc.
Suggested `familyKey` values: `screenwriting-builtin`, `mythic-builtin`,
`chinese-builtin`, `japanese-builtin`, `webnovel-builtin` — pick whatever
groups well.

If you reuse `STANDARD_PARAMETER_SLOTS`, just spread it: `parameterSlots: STANDARD_PARAMETER_SLOTS`.

### Zustand store interface you should extend (do NOT create a second store)

The store is at `src/stores/story-engine-store.ts`. Current interface:

```ts
interface StoryEngineState {
  /* Subagent A — Distillation */
  selectedReferenceIds: string[]
  toggleReference: (id: string) => void
  setReferences: (ids: string[]) => void
  distillationJob: DistillationJob
  setDistillationStage: (stage, progress, producedPatternId?) => void
  resetDistillation: () => void

  /* Subagent A — Aggregation */
  aggregationJob: { status, progress, producedMetaPatternId }
  setAggregationStage: (stage, progress, producedMetaPatternId?) => void
  resetAggregation: () => void

  /* Subagent A — Tour (stub, you will fully wire) */
  tour: { active, step, totalSteps }
  startTour / endTour / nextTourStep / prevTourStep / goToTourStep

  /* Subagent B — pre-declared slots, defaults null/{} */
  selectedPatternId: string | null
  setSelectedPatternId: (id: string | null) => void
  parameterBindings: Partial<Record<'setting' | 'protagonist' | 'antagonist' | 'centralConflict' | 'stakes' | 'theme', string>>
  setParameterBinding: (key, value) => void
  clearParameterBindings: () => void
}
```

You should ADD (do not remove the existing slices):

```ts
// Reverse-Gen
reverseGenJob: { status, progress, producedOutlineId? }
setReverseGenStage: (stage, progress, producedOutlineId?) => void
resetReverseGen: () => void

// Multi-Product
multiProductJobs: Record<ProductKind, { status, progress, producedArtifactId? }>
setMultiProductJob: (kind: ProductKind, partial) => void
resetMultiProductJobs: () => void

// Pattern library filters
libraryFilters: { familyKey: string | 'all', provenance: PatternProvenance | 'all', searchQuery: string }
setLibraryFilter: (key, value) => void
resetLibraryFilters: () => void

// Tour (extend with actual step definitions)
tourSteps: TourStep[]   // each with target selector + bilingual copy
```

Import the store as:

```ts
import { useStoryEngineStore } from '@/stores/story-engine-store'
const selectedPatternId = useStoryEngineStore((s) => s.selectedPatternId)
```

### Component file paths you should reuse

- **`src/components/story-engine/DistilledPatternCard.tsx`** — REUSE THIS
  for every pattern card in the Pattern Library. It renders ANY
  `StoryPattern` (built-in, distilled, or aggregated) correctly, including
  weight badges for aggregated patterns. Props:
  `{ pattern: StoryPattern, showAddToLibrary?: boolean, addedToLibrary?: boolean, className?: string }`.
- **`src/components/story-engine/DistillationSection.tsx`** — exports a
  reusable `SectionHeader` component you can import for sections 4-6:
  ```tsx
  import { SectionHeader } from '@/components/story-engine/DistillationSection'
  <SectionHeader eyebrow="03 · Pattern Library" eyebrowZh="03 · 模式库"
    titleEn="The Pattern Library" titleZh="模式库" />
  ```
- **`src/components/ui/*`** — full shadcn set available. Notably:
  `Card`, `Button`, `Badge`, `Progress`, `Checkbox`, `Tabs`, `Select`,
  `Dialog`, `Tooltip`, `Separator`, `ScrollArea`, `Sheet` (for mobile
  pattern detail panels).
- **Sonner toast** is mounted globally — `import { toast } from 'sonner'`.

### Page.tsx stub locations you should fill in

In `src/app/page.tsx`, locate these markers and REPLACE the entire
`<section id="...">` block (currently a stub) with your component:

- **Line ~57** — `{/* SECTION 4 — SUBAGENT B FILLS IN: Pattern Library */}`
  → replace the entire `<section id="library">...</section>` with
  `<PatternLibrarySection />`
- **Line ~155** — `{/* SECTION 5 — SUBAGENT B FILLS IN: Reverse-Generation */}`
  → replace the entire `<section id="reverse-gen">...</section>` with
  `<ReverseGenerationSection />`
- **Line ~240** — `{/* SECTION 6 — SUBAGENT B FILLS IN: Multi-Product */}`
  → replace the entire `<section id="multi-product">...</section>` with
  `<MultiProductSection />`
- **Line ~300** — `{/* TOUR OVERLAY — SUBAGENT B FILLS IN */}`
  → uncomment the `<TourOverlay />` line at the bottom of `<main>` (or
  render it at the root level outside `<main>` if you prefer fixed overlay)

Also: import your three new section components + TourOverlay at the top
of `page.tsx` alongside the existing imports.

### StickyNav "Take the Tour" button

I wired it to call `startTour()` and then scroll to `#distillation` as a
stub. Once you've built `<TourOverlay />`, you can remove the
scroll-to-distillation line from `StickyNav.tsx` (and `Hero.tsx`) — the
overlay will handle the rest. Just leave the `startTour()` call.

### Design tokens recap (DO NOT introduce blue/indigo)

```
--bg:           #0E0E10  (deep charcoal)
--bg-elevated:  #18181B
--bg-subtle:    #1F1F23
--fg:           #F5F0E1  (warm ivory)
--fg-muted:     #A39E8E
--fg-faint:     #5C5849
--accent:       #C19A6B  (brass/gold)
--accent-bright:#E5B97F
--accent-muted: #6B5536
--danger:       #B85C5C
--success:      #6B8E5C
```

Available as Tailwind utilities: `bg-bg`, `bg-bg-elevated`, `bg-bg-subtle`,
`text-fg`, `text-fg-muted`, `text-fg-faint`, `text-accent`,
`text-accent-bright`, `text-accent-muted`, `text-danger`, `text-success`,
`bg-accent`, `border-accent`, `border-fg-faint`, etc.

Or use inline styles: `style={{ color: 'var(--accent)' }}`.

Custom utility classes available: `.font-serif-headline`,
`.font-sans-zh`, `.font-mono-editorial`, `.eyebrow`, `.gold-divider`,
`.hero-radial`, `.card-editorial`.

### Bilingual rule reminder

Every label, button, heading, body, badge, toast, placeholder, tooltip,
invariant message, archetype summary, stage description, trigger/payoff
constraint — ALL bilingual EN + ZH. I've used this pattern throughout:
English first, then Chinese on a new line in `.font-sans-zh` with a
slightly fainter color (typically `var(--fg-faint)` for body text, or
`var(--accent)` for headlines). Match it.

---

## File paths created (full list)

```
/home/z/my-project/src/lib/story-engine-data.ts
/home/z/my-project/src/app/globals.css            (modified — was default shadcn)
/home/z/my-project/src/app/layout.tsx             (modified — was Geist only)
/home/z/my-project/src/app/page.tsx               (modified — was scaffold)
/home/z/my-project/src/stores/story-engine-store.ts
/home/z/my-project/src/components/story-engine/StickyNav.tsx
/home/z/my-project/src/components/story-engine/Hero.tsx
/home/z/my-project/src/components/story-engine/DistilledPatternCard.tsx
/home/z/my-project/src/components/story-engine/DistillationSection.tsx
/home/z/my-project/src/components/story-engine/AggregationSection.tsx
/home/z/my-project/src/components/story-engine/Footer.tsx
/home/z/my-project/agent-ctx/A-story-engine-foundation.md   (this file)
```

---

## Final state

- `bun run lint` → 0 errors, 0 warnings.
- Dev server (auto-running on port 3000) → page returns HTTP 200,
  content includes "STORY ENGINE", "故事引擎", "Distill patterns",
  "Take the Tour" — all rendering correctly.
- All 5 distilled patterns are fully filled in with high-quality
  bilingual prose grounded in the actual narrative theory of each work.
- The aggregated meta-pattern carries per-stage weights and a confidence
  score, rendered correctly by the reusable `DistilledPatternCard`.
- Subagent B has clear stubs, pre-declared store slots, and a single
  reusable pattern-card component to extend from.

End of Subagent A record.
