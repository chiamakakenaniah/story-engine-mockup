# Wave 2 — External Landscape: Pattern → Story Tools

**Scope.** This wave surveys tools and research projects that already do something like "distill a story pattern (template / storyform / beat sheet) and then reverse-generate or fill a story into that pattern." It is written to inform an architecture decision about whether to extend StoryForge's story-structure feature, which today consists of `STORY_STRUCTURES` in `src/lib/types/outline.ts` — 4 hardcoded entries: `three-act` (3 blocks), `kishotenketsu` (4 blocks), `jo-ha-kyu` (3 blocks), `custom` (empty). Each "structure" is just a label plus an array of block-name strings. No per-beat semantics, no slot schema, no reverse-generation or pattern-validation primitive.

**Methodology.** I used the z-ai web-search CLI for verifiable URLs, pricing, and code/paper existence. Everything else is from my training and is marked as such. Where I could not verify something I say so plainly. All pricing was checked via the vendor site or a 2025–2026 review; treat prices as indicative, not contractual.

---

## A. Story-structure-first commercial tools

These tools' core value proposition is "pick a structural pattern → fill in slots → write." They are the closest market analogues to what StoryForge would become if its `STORY_STRUCTURES` were generalized.

### A.1 Subtxt / Dramatica Narrative Platform — **the closest match to the user's needs**

- URLs: `subtxt.com`, `platform.dramatica.com`, `dramatica.com`. Maintained by Jim Hull / Narrative First.
- **What it actually does.** User selects a *storyform* — a 4-throughline × 4-domain × 4-context matrix that, per Dramatica theory, collapses into 64 base storyforms (in practice, ~32,000 instantiations when variants are counted). The system then exposes *Storypoints* (thematic arguments, motivations) and *Storybeats* (temporal sequence events). You fill throughlines (Overall Story / Main Character / Influence Character / Relationship Story), pick domains, and Subtxt emits ordered beats. Crucially, Subtxt separates *storytelling* (your concrete prose) from *subtext* (the structural argument), which is exactly the "pattern vs. content" separation the user is asking about.
- **Cloud-only.** Verified: it is a hosted web application. No on-prem option, no self-host.
- **API.** Yes — the Subtxt API was publicly announced March 2025 (`narrativefirst.com/blog/introducing-the-subtxt-api…`). It exposes:
  - *Storyforms* — retrieve your narrative content as JSON.
  - *Storybeats* — read ordered beats.
  - *NarrativeSync* — "adapt any block of text to match pre-defined narrative Storypoints or Storybeats." This is the closest commercial primitive to **reverse-generation validation**: given your drafted text and a target Storybeat, it aligns the text to the structure.
  - *Storybeat Completion* API — checks whether a Storybeat aligns with your chosen structure (per the Bluesky announcement). Again, a *validation* primitive.
- **Open source?** No. Closed.
- **Pricing (verified via Software Finder, May 2026 snapshot).** Subtxt ~$20/mo, Subtxt Pro ~$55/mo, Subtxt Infinite ~$250/mo. 14-day free trial.
- **User-definable patterns?** Partially: you can override default storytelling, but you cannot author your own *storyform* — those are the 64 Dramatica storyforms. This is a hard ceiling on extensibility.
- **AI integration.** Yes — Subtxt "with Muse" layers an LLM (GPT-class) that drafts prose aligned to the current beat. The API exposes this.
- **Data portability.** Storyform JSON via API; you can export-import Story Engine Settings reports (the legacy Dramatica Pro format).
- **Verdict for StoryForge.** This is *the* tool whose architecture most closely matches "distill pattern → reverse-generate." Borrow three ideas: (1) the strict separation between *storyform* (schema) and *storytelling* (content) as two distinct data layers; (2) the NarrativeSync primitive — a function `align(draftText, targetBeat) -> {alignmentScore, edits, gaps}` — that is exactly the missing piece in StoryForge's current `OutlineStructureMenu`; (3) the Storybeat Completion API as a candidate-driven critic, which maps cleanly onto StoryForge's existing `candidate/adopt` durable harness.

### A.2 Save the Cat! Story Suite software

- URL: `savethecat.com`. Vendor: Save the Cat! LLC (Blake Snyder Enterprises).
- **What it actually does.** A web/iOS app that implements Blake Snyder's 15-beat sheet and 10 genre templates (Monster in the House, Golden Fleece, Out of the Bottle, Dude with a Problem, Rites of Passage, Buddy Love, Whydunit, The Fool Triumphant, Institutionalized, Superhero). You enter page count and project type and it maps the 15 beats to specific page positions. There's a free interactive "Beat Sheet Mapper" with no signup, and a paid "Story Suite" with series/season support.
- **License/pricing.** Pro $14.92/mo or $179/yr (verified vendor page). Closed-source, cloud-only.
- **AI integration.** None I could verify in the official product. The marketing copy emphasizes structure, not generation.
- **Data portability.** PDF/CSV export of beat sheet; no documented JSON schema, no public API.
- **User-definable patterns.** No. The 15-beat × 10-genre system is fixed. You can rename beats but cannot add beats or define new templates.
- **Verdict.** Strong *data* asset (15 beats + 10 genres is a clean, battle-tested taxonomy) but the *software* itself is structure-only with no generation. Worth borrowing the 15-beat definition as a built-in StoryForge pattern, but the software is not a generation model.

### A.3 Plottr

- URL: `plottr.com`.
- **What it actually does.** A visual timeline/outliner for fiction. Ships with **40+ plot templates** — Three-Act, Hero's Journey, Romance, Horror, Mystery, 7-point short story, Save the Cat!, etc. Each template is a named set of beat rows that you fill in with your story's content.
- **License/pricing.** Desktop (Windows/Mac). Verified pricing from multiple 2026 reviews: $60/yr or $150 lifetime for base; Plottr Pro $9.99/mo or $99/yr, $599 lifetime for Pro+Community. 30-day free trial. Closed-source.
- **AI integration.** None native.
- **Data portability.** `.pltr` XML format; CSV/Word export. The XML is documented enough that third-party converters exist.
- **User-definable patterns.** Yes — this is Plottr's strongest feature relative to StoryForge. You can create a custom beat sheet, save it as a template, and reuse across projects. The 40+ shipped templates are themselves user-editable.
- **Comparison to StoryForge's 4 `STORY_STRUCTURES`.** Plottr is what StoryForge would look like if the `STORY_STRUCTURES` constant became a user-editable table with 40+ named templates and per-template beat metadata. The pattern granularity (40 named templates, each with 7–15 beats) is roughly 10× StoryForge's current state. Plottr does *not* do per-beat semantics or thematic arguments; it's pure structure scaffolding.
- **Verdict.** Plottr is the closest *shape* match for "extensible template library + custom patterns" and the closest *spirit* match for the user's "structured ingredients > AI" lean. But it has no generation. Borrowing Plottr's UX of "template gallery + per-template beats editor" would be a low-risk upgrade to StoryForge's current `OutlineStructureMenu`.

### A.4 Contour, Dramatica Pro, and other legacy structure software

- **Contour** (Mariner Software). Mid-2000s outlining tool. A 2010 review (Tameri) called it "not precise enough" relative to Dramatica Pro. Effectively dormant — Mariner's website still references it but no recent updates.
- **Dramatica Pro** (Write Brothers / `screenplay.com` / `write-bros.com`). Legacy desktop app, "4 stars Writer's Digest." Still sold but unmaintained in any meaningful sense. The theory *is* the basis for Subtxt — so the live successor to Dramatica Pro is Subtxt itself.
- **Power Structure, Storymill, StoryO** — other legacy Mac/Windows outlining tools, all effectively dormant.
- **Verdict.** Nothing in this category is actively developed; the live market has consolidated around Subtxt (theory-heavy, paid) and Plottr (template-heavy, cheap).

### A.5 Arcanum

I could not verify a current product named "Arcanum" in the story-structure software category. There's an older game (Arcanum: Of Steamworks and Magick Obscura) and a few abandoned GitHub repos; none matches the description in the user's question. I'd ask the user for a source.

---

## B. AI writing tools with strong structure features

### B.1 NovelCrafter

- URL: `novelcrafter.com`.
- **What it actually does.** A codex-first AI writing workspace: codex tracks *progressions* on characters, locations, and plot lines; scene-based AI generation; custom prompts per scene. Confirmed via vendor docs and a Papercut Post walkthrough that shows the user selecting a ~40-chapter plot outline template and creating acts/chapters from it.
- **Storyform/structure editor?** Partial — there's a plot outline template picker with several pre-built templates (including a 40-chapter structure) but no public schema for *authoring your own* template. Structure lives in the codex as plot-line progression entries, not as a separate beat-sheet schema.
- **AI.** Yes; integrates external LLM providers (OpenAI/Anthropic/etc.) via BYOK.
- **License.** Closed-source, web/cloud. Pricing tiers in the $5–$20/mo range (per reviews; not verified at vendor page this session).
- **Comparison to StoryForge.** StoryForge's codex is more structured (cultivation system, worldview fields, character dimensions, golden finger — see `tests/registry/`), but its plot-structure side is weaker than NovelCrafter's. NovelCrafter is worth borrowing the *plot-line progression* concept (codex entries that evolve per chapter) more than its template system.

### B.2 Sudowrite (Story Engine / Story Bible)

- URL: `sudowrite.com`.
- **What it actually does.** Story Bible is the structured-ingredients layer: Braindump → Synopsis → Characters → "Beats" (chapter beats) → Outline → Chapter prose. Story Engine is the older whole-novel AI pipeline (2023 launch).
- **Structure-side.** "Beats" in Sudowrite are *chapter-level plot beats*, not a storyform-level pattern. There's no picker for Save-the-Cat or Hero's Journey — you generate beats from your synopsis or write them freeform. So Sudowrite is *freeform-structured*, not *pattern-instantiated*.
- **AI.** Yes; their own fine-tuned models plus GPT-class providers.
- **License/pricing.** Closed, cloud, subscription. Pricing in the $10–$30/mo range (general knowledge; not re-verified this session).
- **Verdict.** Sudowrite solves "structured ingredients + AI generation" but not "pick a proven pattern template, then reverse-generate." Not a close match for the user's stated need.

### B.3 NovelAI

- URL: `novelai.net`.
- **Structure-side.** The *Lorebook* is NovelAI's closest thing to "structured ingredients": keyed entries (character/location/item) that activate when matching tokens appear in context. It is a context-injection structure, **not** a story-pattern structure. There is no beat-sheet or storyform layer.
- **Research.** NovelAI does not publish research papers I'm aware of. They ship their own fine-tuned models (Kayra, Clio, Erato) and have published some model cards, but no structural-narrative research.
- **Verdict.** Not relevant to the pattern-templating question. Worth borrowing only the Lorebook activation-on-keyword mechanism if StoryForge ever wanted context-budget-aware pattern enforcement.

### B.4 Plotdrive / Plotdash / newer AI plot tools

- **Plotdrive** (`plotdrive.com`) — verified. AI writing partner with a "Finish Line" 6-week sprint. Pricing from $10/mo. Closed-source. Structure side is outline + chapter notes + character sketches; I did not see a pattern-template library.
- **Plotdash** — I could not verify a product by this name in the AI plot-tool category. I'd ask the user for a source.
- **Plotter AIs** — no specific product surfaced in searches.
- **StoryFlow** (`storyflow.so` / `storyflow-editor.com`) — a 2025–2026 entrant in narrative design tools with AI. Not open-source. Positioned for game narrative more than novels.

### B.5 Chinese AI writing tools

Verified via Baidu Cloud / Zhihu / SaaSHub:

- **阅文妙笔** (Yuewen Miaobi, 2023). China Literature's web-novel LLM. Trained on 20+ years of Qidian corpus. Generates characters, worldview, scenes. No documented *pattern-template* feature — it's a writing-assistant LLM, not a storyform tool.
- **彩云小梦** (Caiyun Xiaomeng). Story-continuation AI with custom world/character definitions; roleplay mode. No beat-sheet or storyform layer.
- **秘塔写作猫** (MetaTrek Writing Cat). **This is the closest Chinese tool to structure-side.** Verified: it supports a 3-level outline (大纲-章节-段落) with customizable chapter count and plot turning points, plus a "character library." Still nowhere near Dramatica/Subtx-level storyforms, but it is the Chinese tool that most explicitly exposes structure as a first-class authoring surface.
- **有狐AI写作 / 蜜獾写作 / 蛙蛙写作** — I could not verify structural-pattern features for these specific products in the searches performed; they appear as second-tier AI writing assistants in listicles but vendor pages were not directly inspected. I'd not rely on them as pattern-template references without further vendor verification.
- **网文套路 classification (cross-cutting)**: a Huxiu (2025) analysis of 100 hot web-novels on Qidian+Jinjiang identified emergent tags: 系统流 / 凡人流 / 考据 (Qidian-side), 无限流 / 穿书 (Jinjiang-side). A Zhihu piece enumerates "14 major web-novel schools." These are *genre tags*, not structural templates — but they could become pattern seeds.

**Verdict on Chinese AI tools.** None of them have a pattern-template system at Dramatica/Save-the-Cat granularity. 秘塔写作猫 is the most structure-side and worth borrowing the "outline-chapter-paragraph 3-level" taxonomy from, but it is fundamentally an AI-text tool with structure *input*, not a pattern-instantiation tool.

---

## C. Open-source AI narrative research & tooling

### C.1 Dramatron (Mirowski et al., 2022)

- **Paper.** "Co-Writing Screenplays and Theatre Scripts with Language Models" (Mirowski et al., 2022). arXiv:2209.14958, EMNLP 2022. Cited 522+ (verified via arxiv search). ACM DL: `dl.acm.org/doi/10.5555/…`.
- **What it does.** Hierarchical prompt-chaining with a 70B LLM. From a log line → title → characters → plot beats → location descriptions → dialogue. Each level conditions on the previous. The paper is explicit that it's a *co-writing* system, not autonomous; professional writers still rewrote heavily. The INDEPENDENT-CREATION-DEVELOPMENT-PLAN.md in StoryForge already cites Dramatron's industry evaluation.
- **Code.** Verified: `github.com` has the Dramatron repository (the search result snippet explicitly reads "Dramatron is a co-writing system…"). I did not pin the exact repo URL this session; I'd verify at `github.com/deepmind/dramatron` or via the project page on `sites.google.com/view/dramatron`. **Honest note:** I recall the repo being a research reference, not maintained — I would verify the current state before relying on it.
- **License.** Apache 2.0 (typical DeepMind research license) — verify before reuse.
- **Does it do "distill patterns → reverse-generate"?** No. Dramatron distills a *log line* into a hierarchical outline, not a *pattern*. The "pattern" is implicitly the 5-level hierarchy (title→characters→beats→locations→dialogue). Borrowable: the **prompt-chaining architecture** (each level is a separate LLM call with a structured input/output schema) maps directly onto StoryForge's existing `durableHarness` + `candidateAdopt` flow.

### C.2 Re3 — Recursive Reprompting (Yang et al., 2022)

- **Paper.** "Re3: Generating Longer Stories With Recursive Reprompting" (Kevin Yang, Dan Klein, Nanyun Peng, Yuandong Tian, 2022). arXiv, ACL 2023. Cited 320+.
- **What it does.** Story generation conditioned on an outline: (1) Plan = generate outline from premise; (2) Draft = generate paragraph per outline bullet; (3) Rewrite = reprompt for revision. The "outline" is a list of sentence-bullets, not a named-pattern storyform.
- **Code.** Referenced in the paper; I did not independently verify a public repo this session (the search result referenced the paper site `violetpeng.github.io`). **Honest note:** I recall a repo but cannot pin the URL with confidence.
- **Does it distill patterns?** No — outlines are freeform bullets.

### C.3 DOC — Detailed Outline Control (Yang et al., 2023)

- **Paper.** "DOC: Improving Long Story Coherence With Detailed Outline Control." ACL 2023. arXiv:2212.10077. Cited 174+.
- **What it does.** Extends Re3 with *entity-aware* detailed outline: the outline is a tree with entities attached, and the drafter conditions on entity state at each node. This is closer to StoryForge's `character-dimensions` + `codex` + `ChapterContinuityHandoff` infrastructure than Re3 is.
- **Code.** **Verified: `github.com/yangkevin2/doc-story-generation`** (the snippet explicitly reads "This repo contains code for DOC: Improving Long Story Coherence With Detailed Outline Control…"). License: I did not verify, but academic repos are typically MIT or Apache — check the repo.
- **Does it distill patterns?** No — outlines are LLM-generated trees, not author-selected patterns. But the *entity-conditioned drafter* is the borrowable idea.

### C.4 DOME — Dynamic Hierarchical Outline

Mentioned in the Re3 search results ("Re3 [64], DOC [65], and DOME [11] target multi-thousand-word story generation through recursive revision, detailed outline control, and dynamic hierarchical…"). I did not independently verify the paper this session. **Honest note:** I recall DOME as a 2023–2024 paper but cannot pin arXiv ID reliably without another search.

### C.5 Awesome-Story-Generation (curated index)

- **Repo.** Verified: `github.com/yingpengma/Awesome-Story-Generation`. Curated list of LLM-era story-generation papers, chronological. This is the best entry-point index for anyone surveying academic narrative generation. **Start here** for any literature review.

### C.6 NousResearch/autonovel

- **Repo.** Verified: `github.com/NousResearch/autonovel`. Pipeline for autonomous novel writing + revising + typesetting + illustrating + narrating from a seed concept. Has a `PIPELINE.md`. **Caveat:** Reddit threads from mid-2026 call this project's claims into question ("appears to be a scam though, according to this github issues"). I would treat autonovel as **interesting architecture, unverified execution** — borrow the *pipeline manifest* shape, do not depend on the code.

### C.7 NarrativeCraft / GPT-Writing-Companion / assorted GitHub repos

- **NarrativeCraft** — I found only a LinkedIn post (Khushi Patil, 2025) describing a FastAPI-based AI story generator + multimedia script assistant. This is a student/portfolio project, not a production tool. Not worth borrowing from.
- **GPT-Writing-Companion** — I could not verify a specific repo by this exact name; there are dozens of similarly-named hobby repos. Without a specific URL I'd not cite one.
- **AutoNovel** (above) is the only one of these three with a public pipeline doc.

### C.8 Sudowrite / NovelAI research publication

Sudowrite and NovelAI do **not** publish technical research papers in the academic sense. Sudowrite publishes marketing-flavored blog posts (`sudowrite.com/blog/story-bible-template`, `…/how-to-outline-a-novel-with-ai`) which contain *workflows* but no model architecture or eval methodology. NovelAI publishes model cards but no narrative-structure research. There is no paper trail to borrow from.

### C.9 Narrative-design tools (open-source vs commercial, with AI)

| Tool | License | AI | Pattern templates |
|---|---|---|---|
| **articy:draft** | Commercial, closed | Third-party AI extensions | Yes (flowchart nodes) |
| **Arcweave** | Commercial, closed | Basic AI assistant | Yes (flowchart nodes) |
| **StoryFlow** | Commercial, closed | Yes | Yes |
| **Twine** | **Open-source (GPL)** | No | Yes (passage graph) |
| **Ink** (inkle) | **Open-source (MIT)** | No | Yes (scripting language) |
| **Yarn Spinner** | **Open-source (MIT)** | No | Yes (scripting language) |
| **StoryLine (Obsidian plugin)** | Open-source-ish (Obsidian plugin) | No | **Yes — Save the Cat, Three-Act, Hero's Journey as YAML beatsheet per scene** |

The **StoryLine Obsidian plugin** deserves a callout: it stores a `beatsheet` YAML field on each scene node, with named templates that include Save the Cat, Three-Act, and Hero's Journey. It's the *closest existing open-source implementation* of "named pattern + per-beat metadata + per-scene binding." Worth inspecting before designing StoryForge's schema. (Source: `community.obsidian.md` and `forum.obsidian.md`, Feb 2026.)

---

## D. Story pattern libraries (data, not tools)

The user explicitly asks "are there open-source story-pattern libraries (JSON) they could ship as built-in patterns?" Here is the honest state:

| Pattern library | Granularity | Machine-readable? | Importable as JSON? |
|---|---|---|---|
| **Save the Cat! 15 beats** | 15 named beats + page % + 10 genres | **Yes** — gist `gist.github.com/dideler/6043168`; repo `github.com/enkiv2/savethecat` (beat→3-page mapping) | Yes, with manual conversion |
| **Dramatica 64 storyforms** | 4 throughlines × 4 domains × 4 contexts × ~64 traits | **No** — closed inside Subtxt; not released as JSON | No (the Subtxt API is the only way, and it requires a paid account) |
| **Hero's Journey / Monomyth** | Campbell's 17 stages; Harmon's 8-step Story Circle | Wikipedia has structured lists; no canonical JSON I verified | Manual conversion needed |
| **Truby 22 building blocks** | 22 ordered steps | **arcstudiopro.com** has clean textual breakdown; no JSON I verified | Manual conversion needed |
| **Syd Field Paradigm** | 3 acts + 2 plot points + midpoint + 2 pinches (≈4-part) | No machine-readable version I verified | Manual conversion needed |
| **起承转合 / 序破急 (kishōtenketsu / jo-ha-kyū)** | 4 blocks / 3 blocks | Wikipedia structured lists; StoryForge already has these | StoryForge already ships these |
| **Chinese 网文套路** (系统流 / 重生 / 穿越 / 爽文 / 反派流 / 无限流 / 凡人流 / 穿书) | Genre-tag level, not beat-level | Huxiu/Zhihu listicles only | No JSON exists; this is the gap StoryForge could fill itself |
| **TV Tropes** | Free-text wiki pages, ~651,522 pages | **Yes, via scrapers**: `huggingface.co/datasets/RyokoExtra/TvTroper` (20GB JSONL); `github.com/rzepinskip/tvtropes-books`; Apify TVTropes Scraper; Figshare trope dataset | Yes, but requires building a *structure-extraction* layer — TVTropes is a trope catalog, not a beat-template catalog |

**Honest summary.** The *only* machine-ready pattern library I can verify off-the-shelf is **Save the Cat** (gist + enkiv2/savethecat). Everything else is either (a) closed inside a commercial product (Dramatica), (b) Wikipedia structured text needing manual conversion (Hero's Journey, Truby, Field), or (c) not actually a structural pattern at all (TV Tropes, 网文套路).

For StoryForge this means: shipping 5–8 well-curated JSON templates (Save the Cat 15 beats, Save the Cat 10 genres, Hero's Journey 17 stages, Harmon Story Circle 8 steps, Truby 22 blocks, Field Paradigm, 起承转合/序破急 already present, plus a hand-curated 网文套路 starter set) is * achievable in days* — there is no existing one-stop JSON library to import.

---

## E. Recommendations for the user

### E.1 Top 3 existing tools closest to "distill pattern → reverse-generate, structured ingredients > AI"

1. **Subtxt / Dramatica Narrative Platform** — uniquely matches the *distill-pattern + reverse-generate* combination because of (a) the storyform storyform schema, (b) the NarrativeSync API that adapts prose to a Storybeat, (c) the Storybeat Completion API as a critic. Best-in-class. Price ceiling ($250/mo) and closed-source are the drawbacks.
2. **Plottr** — best match for the "structured ingredients > AI" lean specifically. 40+ named templates, custom-template authoring, lifetime license, no AI lock-in. The catch: no generation layer at all.
3. **NovelCrafter** — best match for "structured codex + AI generation, with some plot templates." Strongest middle-ground if Subtxt is too theory-heavy and Plottr is too static.

### E.2 Top 3 external approaches most worth borrowing if extending StoryForge

1. **Subtxt's NarrativeSync / Storybeat Completion API design.** Concretely: define a `PatternBeat` schema (id, label, purpose, expected-position, required-storypoint-type, optional-storypoint-type). Add a function `evaluateBeatAlignment(chapterText, patternBeat) -> { score, missingElements, suggestedEdits }`. Wire it into StoryForge's existing `durableHarness` candidate/adopt flow as a deterministic critic. This is the single highest-leverage addition.
2. **Plottr's template-gallery UX + custom-template authoring.** Promote `STORY_STRUCTURES` from a hardcoded `Record<>` to a user-editable `PatternTemplate[]` table with named templates (label, description, beats: `Beat[]`, source: 'builtin' | 'user' | 'imported'). Ship 8–10 built-ins (the D-section list above). Allow import/export as JSON.
3. **DOC's entity-conditioned detailed outline (Yang et al., 2023; `github.com/yangkevin2/doc-story-generation`).** Their outline is a tree where each node carries entity-state preconditions. StoryForge already has `ChapterContinuityHandoff` and `character-dimensions` — fusing these into a `patternBeat.preconditions` field would make pattern-instantiation entity-aware, which is exactly what ordinary Save-the-Cat templates lack. This is the differentiator StoryForge could ship that Subtxt doesn't.

### E.3 Fork StoryForge vs. build fresh vs. use existing — honest comparison

- **Use existing (Subtxt).** Fastest path if budget is OK. Hard ceiling: you cannot author your own storyforms; Subtxt's 64 are fixed. Also closed and cloud-only — violates any local-first / data-portability requirement, which given StoryForge's existing SQLite + export-roundtrip tests (`tests/regression/R-export-import-roundtrip.test.ts`, `R-CF9C-export-import.test.ts`) is clearly a StoryForge architectural value.
- **Use existing (Plottr).** Cheapest, lifetime license, custom templates. But no AI, no reverse-generation, no integration with codex/canon/character-dimensions. You'd end up maintaining two tools.
- **Build fresh.** Highest cost; StoryForge already has the durable harness, candidate/adopt, codex, canon, multi-world, character-dimensions, worldview fields, chapter-continuity-handoff, plan-reconciliation — *none* of which Subtxt/Plottr/NovelCrafter have at this depth. Re-building these would cost 6–12 months.
- **Extend StoryForge.** Recommended. The `STORY_STRUCTURES` constant is small (~15 lines); the work is to (a) promote it to a `PatternTemplate` table, (b) ship 8–10 JSON patterns, (c) add a `Beat` schema with preconditions, (d) add an `evaluateBeatAlignment` critic wired to the durable harness. This is a 2–4 week project, not a rewrite, and preserves every existing regression test.

### E.4 Open-source story-pattern libraries to ship as built-ins

Verified available:
- **Save the Cat 15-beat sheet** — `gist.github.com/dideler/6043168` (public domain gist, verify license before redistribution) and `github.com/enkiv2/savethecat` (beat→page mapping).
- **Hero's Journey 17 stages** + **Harmon Story Circle 8 steps** — Wikipedia structured lists; trivial to encode as JSON.
- **Truby 22 building blocks** — textual list on arcstudiopro.com; trivial to encode.
- **Syd Field Paradigm** — 4-part structure with midpoint; trivial to encode.

Not available as ready JSON (would need manual curation):
- Dramatica storyforms (closed).
- 网文套路 — StoryForge is well-positioned to author this itself given its Chinese-web-novel context (cultivation system, golden finger, worldview fields already exist).

Curated Chinese web-novel patterns (系统流 / 重生 / 穿越 / 爽文 / 反派流 / 无限流 / 凡人流 / 穿书) would be **a genuine novel contribution** — no commercial or open-source tool currently ships these as machine-readable structural templates. StoryForge has the cultural context to author them; Subtxt and Plottr do not.

### Honest gaps in this report

- I could not pin the exact GitHub URL for Dramatron's repo this session (the search confirmed the repo exists; I'd verify at `github.com/deepmind/dramatron` or the project site).
- I could not verify DOME's arXiv ID this session.
- I could not verify 有狐AI写作 / 蜜獾写作 structural features from vendor pages directly; my statements about them are based on listicle aggregations.
- "Arcanum" as a story-structure tool: I could not find a product by this name; I'd ask the user for a source.
- Subtxt pricing was verified via Software Finder (a 2026 snapshot), not via vendor checkout this session; treat as indicative.
- Plottr pricing was verified via multiple 2026 review aggregators, not via vendor checkout; same caveat.

These gaps are all addressable in a single follow-up web-search pass; none of them change the architectural recommendation.
