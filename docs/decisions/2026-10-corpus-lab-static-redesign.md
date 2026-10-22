# Design Decision: Corpus Lab — fully static, no Python runtime (v2, post-critique)

## Problem

The current Corpus Lab section fetches `/corpus-summary.json` at runtime. This file is gitignored as "regeneratable via `python3 scripts/build_corpus.py`", which means:

1. **Sandbox resets wipe the file** — every time the sandbox restarts, `public/corpus-summary.json` is gone.
2. **The user sees "Loading corpus…" forever** — fetch returns 404, no fallback. (Confirmed: `public/` currently has only `logo.svg` + `robots.txt`; the section is **broken right now**.)
3. **Python script depends on the aizhuiguang-scrape clone** — which also gets wiped on reset.
4. **Re-cloning + re-running the script is fragile** — multiple failure points.

The user explicitly said: "completely redo the corpus lab to just host static content no backend py calling that will not work in this environment."

## Goal

Make the Corpus Lab **fully self-contained static content** that ships with the code, survives sandbox resets, requires no Python at runtime, and is type-safe. Plus address all audit gaps surfaced in the prior round.

## Constraints

- The data is 1.2 MB (259 stories + 1136 variants + stats). Must ship with the code.
- Must survive sandbox resets (committed to git).
- Must be type-safe (typed against `corpus-types.ts`).
- The build_corpus.py script can still exist for REGENERATION when the upstream corpus changes — but it must NOT be required at runtime.
- Must preserve all current UX: stats dashboard, filters, expandable rows, detail sheet, 1136 variants.
- Plus fix all audit gaps listed below.

## Options considered (post-critique)

### Option A: Commit `public/corpus-summary.json` (un-gitignore it)

**Pros**: minimal change.
**Cons**: no type safety; git-diff unreadable; doesn't address user's "redo" framing.

### Option B: Inline as a single 1.5 MB TS module

**Pros**: type-safe; no fetch; survives resets.
**Cons**: large single file; harder to review in PRs.

### ~~Option C (original): per-type TS files for compile speed~~ — REVISED

Original rationale claimed "1.5 MB TS file → slow Turbopack compile + slow HMR on every save". **Peer review confirmed this is false** for Next.js 16 + Turbopack — SWC transpiles a 1.5 MB data-only module in ~100-400ms one-time, and HMR on a data file with no internal logic is sub-second. Existing precedent: `src/lib/story-engine-data.ts` is already 197 KB with no documented compile complaints.

### Option C (revised, RECOMMENDED): per-type TS files for architecture + future lazy-loading

Keep per-type file split, but for the RIGHT reasons:
- **Architectural separation** per story-type → clean boundaries
- **Future per-type lazy-loading** optionality via `next/dynamic`
- **Smaller per-file git diffs** in PRs (manju regen doesn't touch viral-scene file)
- **Per-file reviewable** in chunks

PLUS add the ACTUAL bundle win that the original doc was reaching for:
- **Wrap `CorpusLabSection` in `next/dynamic({ ssr: false })`** in `page.tsx` → defers 1.5 MB + 33 KB component chunk out of initial homepage bundle. Sections 1-6 render instantly, section 7 streams in on scroll.

### Option D: combination — small inline stats + per-type lazy JSON

**Pros**: tiny initial bundle.
**Cons**: reintroduces async; complex code path.

## Decision: Option C (revised) + next/dynamic wrapper

### Audit gaps (post-critique, expanded from 3 to 11)

The prior round's audit identified A2/A3/A4. Peer review surfaced **6 more substantive gaps** that more directly answer the user's actual ask:

| ID | Priority | Gap | Status in prior round |
|---|---|---|---|
| **A2** | medium | `subCluster` field exists but extractor never populates it | identified, deferred |
| **A3** | medium | Pattern→stories reverse mapping invisible (fingerprint chips not clickable) | identified, deferred |
| **A4** | medium | Variant chips in detail sheet not clickable | identified, deferred |
| **A5** | HIGH | Variants aren't first-class browsable entities — user wants "8 stories" not "1 story with 8 chips" | MISSED |
| **A6** | HIGH | No "apply pattern at mass scale" workflow — the user's stated PURPOSE for this corpus | MISSED |
| **A7** | HIGH | No mapping from corpus story → Pattern Library (section 4) — "where do they land" unanswered | MISSED |
| **A8** | medium | `byFamily` (16 families, most semantically-rich axis) has no filter chips | MISSED |
| **A9** | medium | `byClimaxMode` computed but never displayed; no climax filter | MISSED |
| **A10** | medium | `invariantPassCount` shown as badge but not filterable | MISSED |
| **A11** | low | `categoryEmoji` extracted but never surfaced in viral-scene rows | MISSED |
| **A12** | medium | `proWasNull` / `synthesizedStageCount` provenance computed but dropped in `trim_for_ui` | MISSED |

A5/A6/A7 are the ones that most directly respond to what the user asked for. A2/A3/A4 are surface polish by comparison.

### Concrete refinements per gap

**A2 (subCluster taxonomy)** — populate for 5 families with concrete keyword heuristics:
- `life-philosophy`: money / parental / romance / workplace / interpersonal / self-growth / friendship / aging-mortality
- `time-travel`: modern-to-historical / historical-to-modern / parallel-world / rebirth-as-self / system-bound
- `rebirth-revenge`: betrayer-revenge / family-ruin-revenge / career-revenge / regret-reversal
- `modern-rich`: ceo-romance / family-feud / hidden-identity
- `sweet-pet`: childhood-sweetheart / reunion / marriage-first

**A3 (fingerprint matrix)** — expand `topFingerprints` from top-10 to ALL distinct; add "Fingerprints" view tab with matrix (rows = fingerprints, cols = story types, cells = counts); decode the opaque `rigid-tree|3|4|3cp-4e-12p` into readable form; color chips by story type.

**A4 (variant detail sheet)** — extend `derive_variants` to store variant-specific content:
- manju: `variantResolution_zh` (the ending-specific text from `synopsis[2].text`)
- branch-drama: `variantLaneScenes: {slotId, label_zh}[]` per lane
- viral-scene: only 1 variant — chip is decorative
Click variant chip → opens `VariantDetailSheet` showing parent's stages + variant-specific resolution overlaid.

**A5 (variants as first-class rows)** — add "view: stories | variants" toggle in FilterBar. Variants view flattens to all 1136 variants as rows.

**A6 (apply-at-scale workflow)** — add checkbox column to each `StoryRow`; add "Batch: apply pattern →" button in FilterBar; opens sheet showing count + pattern picker + run button. Run computes a "fits / forces / breaks" heuristic per story × pattern based on `branchingType` + `invariantPassCount` + `familyKey`.

**A7 (corpus → Pattern Library mapping)** — in `StoryDetailSheet`, add "Closest Pattern Library matches" section. Compute match score per library pattern (15 patterns) based on familyKey + branchingType + stageCount + archetypeCount proximity. Show top 3 as clickable cards; click → cross-navigate to section 4.

**A8 (family filter)** — add 4th filter row "Family · 家族" with 16 chips sorted by count desc.

**A9 (climax mode filter + chart)** — add 5th filter row "Climax · 爆点模式" with 4 chips; add `byClimaxMode` mini-chart in StatsDashboard.

**A10 (invariant filter)** — add 6th filter row "Invariant · 校验" with 3 chips (all-pass / partial / fail).

**A11 (emoji surface)** — prepend `categoryEmoji` to viral-scene StoryRow titles.

**A12 (synthesized stage provenance)** — propagate `proWasNull` from `extract_viral_scene` through `trim_for_ui` to `StoryRecord`; add `synthesizedStageCount?: number`; show "⚙ synthesized from act template" badge on synthesized stages in detail sheet.

### Other refinements from critique

- Use `as const satisfies CorpusData` on the aggregator export (preserves literals + catches shape drift)
- Add `// @generated — do not edit` + `// eslint-disable max-lines` headers to each generated TS file
- Make `build_corpus.py` sort output deterministically (stories by `id`, variants by `variantId`, counters by `(-count, key)`)
- Mark INFERRED placeholder strings visually (italic + "⚠ inferred" badge) in detail sheet
- Handle dual-protagonist schema gap (add `coProtagonists?: string[]` OR document as known limitation)
- Fix `totalPaths == 1` → `0` edge case (should be `1cp-1e-1p` not `0cp-0e-0p`)

## Implementation order (post-critique, 6 commits each verifiable)

1. **Commit 1 — Data-layer migration, zero behavior change.** Extend `build_corpus.py` to emit 4 TS files; update `CorpusLabSection.tsx` to `import { CORPUS_DATA }`. Removes Python runtime dependency. Fixes user's actual pain (broken-on-reset). **This is the priority fix.**
2. **Commit 2 — Determinism + `satisfies` + `next/dynamic`.** Add `// @generated` header + sort output; switch export to `satisfies CorpusData`; wrap `CorpusLabSection` in `next/dynamic({ ssr: false })`.
3. **Commit 3 — A2 + A12 + A8/A9/A10/A11 (extraction + filter expansion).**
4. **Commit 4 — A3 fingerprint matrix.**
5. **Commit 5 — A4 + A5 variant-as-first-class.**
6. **Commit 6 — A6 + A7 apply-at-scale + Pattern Library mapping.**

Each commit is reviewable in isolation, each has a verification gate. User gets working Corpus Lab after Commit 1.

## Tests to add

- **Snapshot test**: `tests/corpus-data-snapshot.sh` — run `python3 scripts/build_corpus.py`, `git diff --exit-code src/lib/corpus-data/`. Catches upstream corpus drift.
- **Type guard test**: `tests/corpus-types.test.ts` — assert `CORPUS_DATA.stories.length === 259`, `variants.length === 1136`, etc.
- **UI smoke test (Playwright/agent-browser)**: navigate to `/#corpus-lab`, assert 259 rows present, no Loader2 spinner, expand first row, click story, assert detail sheet opens.

## Verification gates per commit

- Commit 1: Agent Browser → `#corpus-lab` renders without "Loading corpus…" state; stats dashboard populated; first 3 stories visible.
- Commit 2: `bun run lint` clean; `git diff --stat HEAD~1` shows TS data file unchanged after re-running build_corpus.py (determinism check).
- Commit 3: Family filter visible with 16 chips; climax-mode filter visible with 4 chips; invariant filter visible with 3 chips; emoji visible on viral-scene rows; "⚙ synthesized" badge visible on philo stories.
- Commit 4: "Fingerprints" tab visible; matrix renders; click fingerprint → filters stories.
- Commit 5: "view: stories | variants" toggle visible; switch to variants → 1136 rows; click variant chip → VariantDetailSheet opens with variant-specific content.
- Commit 6: Checkbox column visible; select 3 stories; "Batch: apply pattern" button enabled; click → opens sheet; select pattern; run → results table shows "fits/forces/breaks" per story.

## Rollback plan

If Commit 1's TS data files break the build:
- Revert to JSON-fetch approach + commit `public/corpus-summary.json` (Option A) as a fallback.

If Commit 2's `next/dynamic` wrapper breaks the tour:
- Revert the wrapper; keep the static import.

If sub-agent critique surfaces a better option:
- Revise + re-implement.
