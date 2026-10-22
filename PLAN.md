# PLAN — Story Engine Mockup (long-horizon tracker)

> Last updated: 2026-10-22
> Repo: [chiamakakenaniah/story-engine-mockup](https://github.com/chiamakakenaniah/story-engine-mockup)

## Project mission

Build a vision mockup for a **story engine** — a system that:
1. Distills reusable structural patterns from any corpus (novels, screenplays, webnovels, micro-dramas)
2. Aggregates N distilled patterns into meta-patterns with statistical weight
3. Reverse-generates stories from chosen patterns + parameter bindings
4. Materializes the same pattern across multiple products (novel / screenplay / comic / motion-drama / TTRPG / AVG)
5. Applies patterns at mass scale to real corpora — stress-tests the framework

This is a **mockup** (no real LLM calls, all data is mock), but the architecture + UX must be production-quality. The eventual goal is to ship `pattern.distill` + `pattern.instantiate` + `pattern.verify` as a **StoryForge v4.0.2 Plugin Workshop package** (see `docs/decisions/2026-10-corpus-lab-static-redesign.md`).

## Current state (2026-10-22)

### Done

- [x] 6 interactive sections (Hero / Distillation / Aggregation / Pattern Library / Reverse-Generation / Multi-Product)
- [x] Section 7: Corpus Lab (initial implementation — Python-runtime-dependent)
- [x] **Corpus Lab v2 redesign** — fully static, no Python runtime, all 11 audit fixes (A2-A12) applied
  - Data layer: 4 inline TS files (manju.ts / branch-drama.ts / viral-scene.ts / index.ts), ~1.3 MB total
  - 3 view modes: Stories (259 rows) / Variants (1136 rows) / Fingerprints (matrix)
  - 6 filter groups: story type / branching / antagonist / climax / invariant / family
  - Detail sheet with: identity / branching / stages (with synth badges) / archetypes / parameter slots / framework v2 refinements / invariants / variants (clickable → VariantDetailSheet) / closest Pattern Library matches (A7) / framework gaps
  - Batch-apply workflow (A6): checkbox column + apply button + verdict heuristic (fits/forces/breaks)
  - next/dynamic({ ssr: false }) on CorpusLabSection for bundle deferral
- [x] Framework v2 refinements in `src/lib/corpus-types.ts`:
  - branchingType enum: rigid-tree / multi-lane / linear
  - antagonistType enum: character / environmental / situational / societal / internal / none
  - climaxMode enum: single / per-path / per-lane / absent
  - patternFingerprint hash for clustering
  - subCluster field (now populated for 5 families)
  - proWasNull + synthesizedStageCount + per-stage synthesizedFromTemplate flag
- [x] 7-step embedded tour (TourOverlay) — final step targets #corpus-lab
- [x] Bilingual EN+ZH throughout; editorial dark visual style
- [x] Sticky nav with all 7 section links
- [x] Design decision doc with peer-review critique: `docs/decisions/2026-10-corpus-lab-static-redesign.md`
- [x] Build script `scripts/build_corpus.py` (deterministic, emits TS files, in-place regeneratable)
- [x] GitHub backup at `chiamakakenaniah/story-engine-mockup`

### Open / known gaps

- [ ] **GitLab backup** — PAT provided by user is invalid/revoked (`Token was revoked` error). Cannot add GitLab remote. User needs to provide a new PAT or manually configure.
- [ ] **StoryForge v4.0.2 Plugin Workshop package** — the actual `pattern.distill` + `pattern.instantiate` + `pattern.verify` skills, packaged as a StoryForge plugin. Not started. The mockup is the design vision; the plugin is the implementation.
- [ ] **Tests** — no automated tests. Need: snapshot test (corpus-data drift), type-guard test (CORPUS_DATA shape), Playwright smoke test (Corpus Lab end-to-end).
- [ ] **StoryForge upstream sync** — StoryForge v4.0.2 added Plugin Workshop + Codex provider. The mockup's design is based on v3.9.1 analysis; should re-audit against v4.0.2 to ensure plugin SDK compatibility.
- [ ] **Variant-specific content for branch-drama lanes** — A4 has `variantLaneScenes` typed but not populated by the extractor. Currently the lane variant detail sheet shows "same skeleton, different playthrough emphasis" — needs per-lane scene-level diff.
- [ ] **A11 (categoryEmoji)** — surfaced as row prefix but not in detail sheet title.
- [ ] **Sub-cluster for more families** — only 5 families have sub-cluster heuristics (life-philosophy / time-travel / rebirth-revenge / modern-rich / sweet-pet). Other big families (suspense, xianxia, suspense-horror) don't have sub-clusters.
- [ ] **Tour step 7 wording** — currently says "259 stories × 1136 variants" but doesn't mention the new Variants/Fingerprints tabs or batch-apply workflow.

## Long-horizon work buckets

### Bucket 1: Mockup polish (small, ongoing)

- [ ] Add a "Pattern Library matches" badge count on each StoryRow (so user sees "this story matches 2 patterns" without opening the detail)
- [ ] Add a visual graph view of story ↔ pattern ↔ variant relationships (currently list-based)
- [ ] Add per-variant deep-dive: clicking a manju ending variant shows the ending-specific stage text inline (not just label)
- [ ] Mobile-responsive audit: Corpus Lab is wide; on mobile, the filter chips wrap awkwardly
- [ ] Sub-cluster filter chip row (when sub-clusters are populated for more families)

### Bucket 2: Real pattern.distill pipeline (medium, deferred)

The mockup's Distillation section is a 5-stage simulation. Real implementation needs:

- [ ] A `pattern.distill` Skill that takes a `ReferenceAnalysisRun` + applies LLM-based lifting to produce a `StoryPatternV1` candidate
- [ ] Strict JSON output contract for the distilled pattern (stages / archetypes / turning points / parameter slots / invariants)
- [ ] Verification receipt (5 verifier-set criteria)
- [ ] Adoption into `storyPatterns` table via FIELD_REGISTRY + AdoptionSchema
- [ ] UI: Distillation section replaced with real LLM call (or Codex local subscription provider from StoryForge v4.0.2)

### Bucket 3: Real pattern.instantiate pipeline (medium, deferred)

The mockup's Reverse-Generation section is also a simulation. Real implementation needs:

- [ ] A `pattern.instantiate` Skill that takes a sealed `StoryPatternV1` + author parameter bindings → produces a tagged outline tree
- [ ] Each chapter tagged with `metadata.patternSlotId` (visible in mockup data, but real pipeline needs to enforce it)
- [ ] Multi-target adoption (outline + storyCore + storyArc + patternInstances + reverseGenerationJobs)
- [ ] UI: Reverse-Generation section replaced with real LLM call

### Bucket 4: Real pattern.aggregate pipeline (hard, deferred)

- [ ] A `pattern.aggregate` Skill that clusters N distilled patterns into family-level meta-patterns
- [ ] Statistical weight per stage (how many instances confirmed)
- [ ] Confidence score (0-1)
- [ ] UI: Aggregation section's "SVG bezier clustering" replaced with real clustering algorithm

### Bucket 5: StoryForge v4.0.2 Plugin Workshop package (large, deferred)

- [ ] Audit StoryForge v4.0.2 Plugin Workshop SDK (schema v11, plugin tables, ESM factory)
- [ ] Package `pattern.distill` + `pattern.instantiate` + `pattern.aggregate` + `pattern.verify` as a single plugin
- [ ] Plugin provides UI (Corpus Lab), processing logic (Skills), AI workflows (Codex), external connections (none for now)
- [ ] Plugin data: `storyPatterns` + `patternInstances` + `reverseGenerationJobs` tables (registered via PROJECT_TABLES)
- [ ] Plugin adoption: via FIELD_REGISTRY + AdoptionSchema extensions

## Process notes (long-horizon)

- **GIT IS THE DISK** — push on every micro step. Never force push. Watchdog force-checks-out `/home/z/my-project` to main every ~20s; commit often so changes survive.
- **Design decisions**: write decision doc in `docs/decisions/`, send to sub-agent for critique, iterate, then implement.
- **Sub-agents**: use for parallel deep-dives (research, code review, multi-file analysis). They have their own tool call infra separate from main agent.
- **Bilingual**: every UI label in EN + ZH. The StoryForge upstream is Chinese-first; the mockup targets global audience.
- **Editorial dark**: deep charcoal `#0E0E10` + warm ivory `#F5F0E1` + brass/gold `#C19A6B`. No blue/indigo.
- **Mockup discipline**: no real LLM calls in the mockup; all data is mock or committed static.

## Key files (entry points for next session)

```
src/
├── app/page.tsx                                  # 7-section composition, CorpusLabSection wrapped in next/dynamic
├── components/story-engine/
│   ├── CorpusLabSection.tsx                      # Section 7 (rebuilt v2)
│   ├── DistilledPatternCard.tsx                  # Reusable pattern card (used by Library + detail sheets)
│   ├── StickyNav.tsx                              # 7 nav links
│   └── ... (5 other sections + tour overlay)
├── lib/
│   ├── corpus-types.ts                           # StoryPattern v2 types (refined)
│   ├── corpus-data/                              # Generated TS data (regeneratable via scripts/build_corpus.py)
│   │   ├── manju.ts (796 KB, 121 stories + 958 variants)
│   │   ├── branch-drama.ts (90 KB, 20 stories + 60 variants)
│   │   ├── viral-scene.ts (364 KB, 118 stories + 118 variants)
│   │   └── index.ts (2 KB aggregator)
│   ├── story-engine-data.ts                      # Mock data for sections 1-6 (15 patterns, 5 references, etc.)
│   └── mock-outline-generator.ts                # Generates outline trees for Reverse-Gen
├── stores/story-engine-store.ts                  # Zustand store with 7 tour steps
scripts/
└── build_corpus.py                               # Deterministic extractor + variant exploder → emits src/lib/corpus-data/*.ts
docs/decisions/
└── 2026-10-corpus-lab-static-redesign.md        # Design decision doc (post peer-review)
```

## Key external repos (not committed)

- `wesisad5/aizhuiguang-scrape` — the 259-story corpus source (re-cloned each session via sparse checkout)
- `yuanbw2025/storyforge` — upstream StoryForge v4.0.2 (the eventual plugin host)

## Glossary

- **StoryPatternV1** — the structural pattern artifact (stages / archetypes / turning points / parameter slots / invariants)
- **StoryPatternInstanceV1** — a pattern bound to a specific work (with parameter values filled)
- **ReverseGenerationJobV1** — a request to generate a story from a chosen pattern + parameters
- **Pattern Fingerprint** — hash of `branchingType + stageCount + archetypeCount + branching-specific-fields`, used for clustering templated stories
- **Variant Explosion** — 1 story → N variants based on endings (manju) / lanes (branch-drama) / linear (viral-scene)
