# Design Decision: Corpus Lab — fully static, no Python runtime

## Problem

The current Corpus Lab section fetches `/corpus-summary.json` at runtime. This file is gitignored as "regeneratable via `python3 scripts/build_corpus.py`", which means:

1. **Sandbox resets wipe the file** — every time the sandbox restarts, `public/corpus-summary.json` is gone.
2. **The user sees "Loading corpus…" forever** — fetch returns 404, no fallback.
3. **Python script depends on the aizhuiguang-scrape clone** — which also gets wiped on reset.
4. **Re-cloning + re-running the script is fragile** — multiple failure points (token expired, network, sparse-checkout config, script path drift).

The user explicitly said: "completely redo the corpus lab to just host static content no backend py calling that will not work in this environment."

## Goal

Make the Corpus Lab **fully self-contained static content** that ships with the code, survives sandbox resets, requires no Python at runtime, and is type-safe.

## Constraints

- The data is 1.2 MB (259 stories + 1136 variants + stats). Must not bloat the JS bundle to the point of breaking Turbopack dev compile times.
- Must survive sandbox resets (committed to git).
- Must be type-safe (typed against `corpus-types.ts`).
- The build_corpus.py script can still exist for REGENERATION when the upstream corpus changes — but it must NOT be required at runtime.
- Must preserve all current UX: stats dashboard, filters, expandable rows, detail sheet, 1136 variants.
- Should also fix audit gaps from the prior round:
  - **A2**: `subCluster` field exists in types but extractor never populates it (notably `life-philosophy` family has 5+ sub-clusters: money / parental / romance / workplace / interpersonal).
  - **A3**: Pattern→stories reverse mapping is invisible. Currently the stats dashboard shows "Top Fingerprints" as counts but you can't click to see which stories share a fingerprint.
  - **A4**: Variant chips are not interactive — clicking a variant doesn't open anything.

## Options considered

### Option A: Commit the existing `public/corpus-summary.json` (un-gitignore it)

**Pros**: minimal change — just `git rm --cached`, un-gitignore, commit. Existing fetch-based component keeps working.

**Cons**:
- Still requires runtime fetch + async loading state. The user's word "redo" suggests they want a more substantial change.
- No type safety — the JSON is untyped; if the schema drifts from `corpus-types.ts`, TypeScript won't catch it.
- 1.2 MB JSON file is awkward to diff in PRs.
- In Next.js 16 with Turbopack, fetching large public/ files in dev mode can be slow.

### Option B: Inline the data as a single TS module

`src/lib/corpus-data.ts` exports `CORPUS_DATA: CorpusData = {...}`.

**Pros**:
- Fully static, no fetch, no async.
- Type-safe — TypeScript checks the shape against `corpus-types.ts`.
- Survives sandbox resets (committed).

**Cons**:
- 1.5 MB+ TS file (1.2 MB JSON + type annotations) → slow Turbopack compile + slow HMR on every save.
- Awkward to review in PRs (huge diff).
- Single file = no lazy loading.

### Option C: Inline the data split per story type (RECOMMENDED)

Three data files + one aggregator:
- `src/lib/corpus-data/manju.ts` — 121 stories + ~968 variants (~400 KB)
- `src/lib/corpus-data/branch-drama.ts` — 20 stories + 60 variants (~60 KB)
- `src/lib/corpus-data/viral-scene.ts` — 118 stories + 118 variants (~250 KB)
- `src/lib/corpus-data/index.ts` — combines all three + computes stats

**Pros**:
- Each file ≤ 400 KB → fast Turbopack compile, fast HMR.
- Type-safe.
- No async, no fetch.
- Survives sandbox resets.
- Per-type lazy loading is possible later if needed.
- Clean architecture: data layer separated from component.

**Cons**:
- Bigger initial change (4 new files vs 1).
- Need to regenerate all 4 files when the corpus source changes (but `build_corpus.py` can be extended to emit these files instead of one big JSON).

### Option D: Combination — small inline TS module with stats + per-type lazy JSON files

Stats inline (small, ~1 KB). Per-type data as static JSON in `public/corpus-data/{type}.json`, lazy-fetched on filter change.

**Pros**:
- Initial bundle tiny (just stats).
- Per-type fetch only when filter selects that type.
- Survives resets (committed).

**Cons**:
- Async loading reintroduced (per-type fetch).
- More complex code path (fetch + cache + loading state per type).
- Doesn't fully eliminate the fetch pattern — just defers it.

## Decision: Option C

**Why**: Best balance of static-content-no-runtime-Python, type-safety, dev experience (fast Turbopack compile), and clean architecture. Aligns with the user's "redo" framing — it's a real redesign, not a patch.

**Implementation sketch**:

1. Extend `scripts/build_corpus.py` to emit 4 TS files instead of 1 JSON:
   - `src/lib/corpus-data/manju.ts` — exports `MANJU_STORIES: StoryRecord[]` + `MANJU_VARIANTS: VariantInstance[]`
   - `src/lib/corpus-data/branch-drama.ts` — exports `BRANCH_DRAMA_STORIES` + `BRANCH_DRAMA_VARIANTS`
   - `src/lib/corpus-data/viral-scene.ts` — exports `VIRAL_SCENE_STORIES` + `VIRAL_SCENE_VARIANTS`
   - `src/lib/corpus-data/index.ts` — combines all + computes `CORPUS_STATS` + exports `CORPUS_DATA: CorpusData`

2. Update `CorpusLabSection.tsx`:
   - Replace `fetch(CORPUS_URL)` with `import { CORPUS_DATA } from '@/lib/corpus-data'`
   - Remove the `Loader2` loading state + error state (no async)
   - The `useEffect` fetch goes away; just use the imported constant directly

3. Audit fixes applied during regeneration:
   - **A2**: extend the extractor with sub-cluster heuristics for `life-philosophy` family
     - money: 借钱/谈钱/救急不救穷/钱能解决/免费的最贵/别露富/兜里有钱
     - parental: 父母/空碗/我不饿/来处/沉默/角色互换/家里都好
     - romance: 喜欢/舍得让你等/被爱有恃无恐/失望攒够了
     - workplace: 画的饼/离职见人品/情绪稳定/能力之外/沉默的大多数/会哭的孩子
     - interpersonal: 借钱/群里/删人/锦上添花/人走茶凉
   - **A3**: add a new "Top Fingerprints" panel above the story list — each fingerprint is a clickable chip that applies a "fingerprint" filter
   - **A4**: make variant chips in the detail sheet clickable — clicking shows a tooltip / inline expand with variant-specific info (the variant's ending/lane applied to the pattern)

4. Un-gitignore `src/lib/corpus-data/` (commit the data). Keep `public/corpus-summary.json` gitignored (legacy, no longer used).

5. Update `README.md` to document the new structure.

## Verification

- Agent Browser end-to-end:
  - Section renders without "Loading corpus…" state
  - Stats dashboard populated (259 / 1136 / etc.)
  - All 3 filter groups work
  - Search works
  - Expand chevron shows variants
  - Click story → detail sheet opens
  - Click fingerprint chip → filters stories by fingerprint
  - Click variant chip → shows variant detail
  - Tour step 7 still targets `#corpus-lab`

- Lint clean
- Dev server healthy on port 3000

## Rollback plan

If Option C turns out to bloat the bundle too much (compile times > 5s):
- Fall back to Option A (commit JSON to public/) — single git revert of the TS data files + restore the fetch-based component.

If sub-agent critique surfaces a better option I missed:
- Revise this decision doc + re-implement.
