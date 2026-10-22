# StoryForge v4.0.2 Plugin Workshop SDK notes

> Notes for Bucket 5 implementation (packaging `pattern.distill` + `pattern.instantiate` + `pattern.aggregate` + `pattern.verify` as a StoryForge Plugin Workshop package).
> Sourced from `docs/roadmap/PLUGIN-WORKSHOP-V1.md` in the upstream `yuanbw2025/storyforge` repo at v4.0.2.

## What changed in v4.0.2 vs v3.9.1

Three significant additions since the v3.9.1 analysis from the prior session:

| Added in | Feature | Why it matters for our pattern work |
|---|---|---|
| **v4.0.0** | **Plugin Workshop (插件工坊)** — full plugin system: ESM factory, scoped instances, versioned SDK, 5 new DB tables (schema v10→v11), official MCP integration. Plugins can ship UI, processing logic, AI workflows, external connections as standalone packages. | This is the right vehicle for the `pattern.distill` subsystem. Instead of forking StoryForge's core, ship `pattern.distill` + `pattern.instantiate` + `pattern.verify` as a Plugin Workshop package. Reuses three registries, durable Harness, Context Gateway — no host code changes. |
| **v4.0.0** | **Codex local subscription provider** — `codex app-server` JSON-RPC adapter; reuse ChatGPT login without API key. Strict isolation (no MCP/skills/plugins/memories/search/sub-agent). Conservative 32K context + 8K output. | Could lower the cost barrier for batch-distillation runs across a 259-story corpus. Each `pattern.distill` call is short-context (chunk analysis + JSON envelope), well within Codex's 32K budget. |
| **v4.0.1** | Text-adventure recovery, manuscript image revision (保图修订), independent web export | Tangential, but the "independent web export" could package distilled patterns as standalone pattern-library sites. |

## Plugin Workshop architectural boundaries (from `docs/roadmap/PLUGIN-WORKSHOP-V1.md`)

- **Plugins depend on the public SDK**, not on private host modules (no Dexie, no Zustand imports).
- **Host React is provided by factory parameters** — no npm install at runtime, no CDN loading.
- **Plugin identity** is `(id, version, SHA-256)`. Same-version-different-bytes is rejected.
- **Configuration locks the exact package**; enable by dependency topological sort; circular/missing/incompatible/duplicate-replacement is rejected.
- **Native UI plugins are trusted local code** — the permission declaration is NOT a security sandbox. Error boundaries cannot terminate the main thread in a death loop. Safe-start mode skips all plugins before module evaluation.
- **Core fields go through existing domain interfaces**; AI via registered sources, durable Harness, CreativeArtifact, and author adoption. Plugins only write to their own namespace, with schema, revision, and generation constraints.
- **Three registries remain the only sources of truth.** Physical tables are derived from `PROJECT_TABLES` for backup, delete, remap; dynamic declarations cannot redefine core owner or field semantics.
- **Upgrade data writes to new generation**, atomically switched after verification. Old data preserved; post-upgrade edits cannot be blindly rolled back to overwrite.

## P0-P9 work packages

The plugin workshop implementation is broken into 10 work packages (P0-P9). For our pattern plugin, we'd be consumers of P0/P1/P2/P3/P4 (the foundation):

- **P0/P1**: Independent ESM factory, shared React, bounded schema, scoped instances, exact dependencies, failure fallback, safe-start, reverse cleanup
- **P2**: Five new registry tables, backup 14→15 strict conversion, reference remap, CAS concurrency check, data generation migration/recovery, uninstall preserve
- **P3**: Complex history UI, calendar service composition, story progress replacement, self-owned data — twelve independent packages
- **P4**: Custom task output schema, immutable registration snapshot, formal AI Skill/Harness, author edit/adopt, refresh history
- **P5**: World semantics through explicit confirmation into existing Codex/WorldRelease; TTRPG RulePack through formal production into ProductRelease
- **P6**: Official MCP new protocol and explicit legacy connection, independent Tasks negotiation, original task query/cancel; optional local stdio bridge
- **P7**: Local file installation, static directory, exact dependencies, management and recovery, SDK scaffolding/check/pack; community contributions via directory PR, no upload account server
- **P8**: Long-form/node existing slots, plus world and other author product common workbench entries; no injecting unfrozen plugins into formal player runtime pages
- **P9**: Package, lifecycle, migration failure, concurrency, AI/world/product/tool closed-loop, isolated browser, production CSP/PWA and no-plugin performance comparison

## What our pattern plugin would ship

- **UI contribution**: A "Pattern Library" workspace panel + "Distill Pattern" button in the Reference Analysis tab + "Reverse-Generate from Pattern" panel (mirroring the mockup's Corpus Lab UX)
- **Processing logic**: `pattern.distill`, `pattern.instantiate`, `pattern.aggregate`, `pattern.verify` Skills — all registered via the host's `AgentSkillDefinitionV1` + `FIELD_REGISTRY` + `AdoptionSchema`
- **AI workflows**: Each Skill calls the LLM via the host's `chat()` / `streamChat()` (or the new Codex local subscription provider for cost-sensitive batch runs)
- **External connections**: None for v1
- **Plugin data**: New tables `storyPatterns`, `patternInstances`, `reverseGenerationJobs` (registered via `PROJECT_TABLES` + `FIELD_REGISTRY` + `ADOPTION_EXTENSIONS`)

## Schema impact

Plugin Workshop adds 5 new tables to the schema (v10 → v11):
- Backup format bumps 14 → 15
- The three registries (`CONTEXT_SOURCES`, `FIELD_REGISTRY`/`AdoptionSchema`, `PROJECT_TABLES`) add plugin data + restricted AI write policy
- Formal AI adds a registered Skill
- Harness allows strict zero-model, zero-context/writeback deterministic tool runs
- Existing TTRPG rule library adds immutable version write option
- Each product adds a disable-able extension entry

## Implementation order (for Bucket 5)

1. **Audit StoryForge v4.0.2 plugin SDK** — read `docs/roadmap/PLUGIN-WORKSHOP-V1.md` carefully, plus the SDK scaffolding scripts in `scripts/` of the storyforge repo
2. **Bootstrap a plugin package skeleton** using the official SDK scaffolding
3. **Register 3 new tables** via `PROJECT_TABLES` extension: `storyPatterns`, `patternInstances`, `reverseGenerationJobs`
4. **Register new fields** via `FIELD_REGISTRY` + `AdoptionSchema` extensions
5. **Register 4 new Skills** via `AGENT_SKILLS` extension: `pattern.distill`, `pattern.instantiate`, `pattern.aggregate`, `pattern.verify`
6. **Register new CONTEXT_SOURCES** for the pattern library reads
7. **Ship the UI** — port `CorpusLabSection.tsx` from the mockup as the plugin's UI contribution
8. **Plugin manifest** — `id: 'story-engine-patterns'`, `version: '0.1.0'`, dependencies on host SDK v1.0

## See also

- `docs/decisions/2026-10-corpus-lab-static-redesign.md` — design rationale for the mockup's pattern work (which the plugin would port)
- `src/lib/corpus-types.ts` — the refined StoryPattern v2 types (which the plugin would reuse)
- `src/lib/corpus-data/` — the committed static corpus data (which the plugin could bundle as a seed pattern library)
- `scripts/build_corpus.py` — the deterministic extractor (which could be ported to a plugin Skill)
