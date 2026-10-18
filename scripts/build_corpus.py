#!/usr/bin/env python3
"""Combined StoryPatternInstanceV1 extraction + variant explosion for the full 259-story corpus.

Single script that handles all 3 story types (manju, branch-drama, viral-scene),
extracts the pattern per the protocol, explodes into variants (1 story → N variants
based on endings/lanes), and writes:
  - /home/z/my-project/story-ledger/consolidated.jsonl (259 entries, full extraction)
  - /home/z/my-project/public/corpus-summary.json (trimmed summary + variants, for the UI)
"""
import json, re
from collections import Counter
from pathlib import Path

AIZHUIGUANG_DIR = Path("/home/z/my-project/aizhuiguang-main")
LEDGER_DIR = Path("/home/z/my-project/story-ledger")
PUBLIC_DIR = Path("/home/z/my-project/public")
CONSOLIDATED = LEDGER_DIR / "consolidated.jsonl"
CORPUS_SUMMARY = PUBLIC_DIR / "corpus-summary.json"

FAMILY_RULES = [
    ("穿越", ("穿越", "time-travel")),
    ("重生", ("重生", "rebirth-revenge")),
    ("宅斗", ("宅斗", "house-intrigue")),
    ("豪门", ("豪门", "modern-rich")),
    ("现代豪门", ("豪门", "modern-rich")),
    ("霸总", ("豪门", "modern-rich")),
    ("古言仙侠", ("仙侠", "xianxia")),
    ("修仙", ("仙侠", "xianxia")),
    ("仙侠", ("仙侠", "xianxia")),
    ("甜宠", ("甜宠", "sweet-pet")),
    ("悬疑", ("悬疑", "suspense")),
    ("民国", ("民国", "republican")),
    ("末世", ("末日求生", "survival")),
    ("末日", ("末日求生", "survival")),
    ("无限流", ("悬疑", "suspense")),
    ("规则怪谈", ("悬疑", "suspense")),
    ("靁异", ("悬疑", "suspense")),
    ("灵异", ("悬疑", "suspense")),
    ("密室", ("密室逃脱", "escape-room")),
    ("深海", ("深海探险", "deep-sea-adventure")),
    ("极限", ("极限送达", "extreme-delivery")),
    ("搞笑", ("搞笑沙雕", "comedy-meme")),
    ("古装宫斗", ("宫斗", "palace-intrigue")),
    ("冷宫", ("宫斗", "palace-intrigue")),
    ("妖怪", ("仙侠治愈", "xianxia-healing")),
    ("怪兽", ("怪兽末路", "monster-apocalypse")),
    ("科幻", ("科幻末世", "sci-fi-apocalypse")),
    ("职场", ("职业高光", "workplace-hero")),
    ("职业", ("职业高光", "workplace-hero")),
    ("情感", ("情感泪点", "family-emotion")),
    ("萌宠", ("萌宠治愈", "pet-rescue")),
    ("国风", ("国风名场面", "national-style")),
    ("脱秀", ("脱口秀段子", "comedy-punchline")),
    ("哲理", ("人生哲理", "life-philosophy")),
    ("生活", ("人生哲理", "life-philosophy")),
    ("反转", ("反转结局", "identity-flip")),
    ("热血", ("热血逆袭", "underdog-triumph")),
    ("悬念", ("悬念惊悚", "suspense-horror")),
    ("复仇", ("重生", "rebirth-revenge")),
]

def classify_family(genre, category_key="", scene_name=""):
    for source in (genre, category_key, scene_name):
        if not source: continue
        for kw, fam in FAMILY_RULES:
            if kw in source: return fam
    return ("其他", "other")

def map_support_archetype(role_text, desc_text=""):
    text = (role_text or "") + " " + (desc_text or "")
    if any(kw in text for kw in ["师父", "师尊", "前辈", "老者", "长者", "先生"]): return "mentor"
    if any(kw in text for kw in ["门卫", "守门", "护院", "护卫", "禁军", "侍卫长", "守关"]): return "threshold-guardian"
    if any(kw in text for kw in ["信使", "传令", "报信", "通报", "使者"]): return "herald"
    if any(kw in text for kw in ["变化", "伪装", "卧底", "双面", "间谍", "密探"]): return "shapeshifter"
    if any(kw in text for kw in ["滑头", "骗子", "戏弄", "狡黠", "机灵鬼"]): return "trickster"
    return "ally"

def extract_manju(d):
    title = d.get("title", ["", ""])
    title_zh = title[0] if isinstance(title, list) and title else (title if isinstance(title, str) else "")
    title_en = title[1] if isinstance(title, list) and len(title) > 1 else ""
    genre = d.get("genre", "")
    family_zh, family_key = classify_family(genre)
    tree = d.get("tree", {})
    segment_count = sum(1 for n in tree.values() if isinstance(n, dict) and n.get("type") == "segment")
    choice_count = sum(1 for n in tree.values() if isinstance(n, dict) and n.get("type") == "choice")
    ending_count = sum(1 for n in tree.values() if isinstance(n, dict) and n.get("type") == "ending")
    total_paths = 1
    for n in tree.values():
        if isinstance(n, dict) and n.get("type") == "choice" and isinstance(n.get("options"), list):
            total_paths *= len(n["options"])
    if total_paths == 1: total_paths = 0
    synopsis = d.get("synopsis", [])
    stages = []
    synopsis_phase_to_role = {"起": "setup", "分支": "rising-action", "结局": "resolution"}
    for phase in synopsis:
        phase_label = phase.get("phase", "").replace("【", "").replace("】", "")
        role = synopsis_phase_to_role.get(phase_label, "custom")
        text = phase.get("text", "")
        stages.append({
            "slotId": f"S{len(stages)+1}-{phase_label or 'phase'}",
            "role": role,
            "label_zh": phase_label,
            "label_en": {"起": "Setup", "分支": "Branch", "结局": "Resolution"}.get(phase_label, phase_label),
            "triggerConstraint_zh": (text[:80] + "…") if len(text) > 80 else text,
            "payoffConstraint_zh": "",
            "requiredArchetypeKeys": [],
            "keyEvents": [],
        })
    archetypes = []
    chars = d.get("characters", [])
    for c in chars:
        tag = c.get("tag", "")
        role_text = c.get("role", "")
        desc = c.get("desc", "")
        name = c.get("name", "")
        if tag == "hero": arch_key = "protagonist"
        elif tag == "heroine": arch_key = "love-interest"
        elif tag == "villain": arch_key = "antagonist"
        elif tag == "cyan": arch_key = map_support_archetype(role_text, desc)
        else: arch_key = "ally"
        archetypes.append({
            "archetypeKey": arch_key,
            "label_zh": f"{name} ({role_text})",
            "functionSummary_zh": desc[:120],
            "mandatoryAtRoles": [],
        })
    turning_points = []
    for i, phase in enumerate(synopsis[1:], 1):
        phase_label = phase.get("phase", "").replace("【", "").replace("】", "")
        turning_points.append({
            "pointKey": f"TP-{i}",
            "label_zh": phase_label,
            "slotId": f"S{i+1}-{phase_label}",
            "irreversibleChange_zh": (phase.get("text", "")[:80] + "…") if len(phase.get("text", "")) > 80 else phase.get("text", ""),
        })
    setting_text = ""
    for c in chars:
        if c.get("visual"):
            setting_text = c["visual"][:100]; break
    if not setting_text and synopsis:
        setting_text = synopsis[0].get("text", "")[:100]
    protagonist = "; ".join([f"{c['name']} ({c['role']})" for c in chars if c.get("tag") == "hero"]) or "INFERRED: no hero-tagged character"
    antagonist = "; ".join([f"{c['name']} ({c['role']})" for c in chars if c.get("tag") == "villain"]) or "NONE"
    central_conflict = d.get("tagline", "")[:200] or (synopsis[0].get("text", "")[:200] if synopsis else "")
    stakes = synopsis[2].get("text", "")[:200] if len(synopsis) > 2 else "INFERRED: no 结局 phase"
    slots = {"setting": setting_text, "protagonist": protagonist, "antagonist": antagonist,
             "centralConflict": central_conflict, "stakes": stakes,
             "theme": f"INFERRED: {family_zh} family thematic pattern"}
    has_protag = any(a["archetypeKey"] == "protagonist" for a in archetypes)
    has_antag = any(a["archetypeKey"] == "antagonist" for a in archetypes)
    invariants = [
        {"code": "stages-length-range", "spec": "{min:2,max:12}", "actualLength": len(stages), "passed": 2 <= len(stages) <= 12},
        {"code": "turningPoint-slot-coverage", "passed": all(tp["slotId"] in [s["slotId"] for s in stages] for tp in turning_points), "orphanTurningPoints": []},
        {"code": "mandatory-roles-present", "spec": "≥1 protagonist + ≥1 antagonist", "passed": has_protag and has_antag, "missingRoles": []},
    ]
    gaps = []
    if ending_count > 1: gaps.append(f"story has {ending_count} endings — framework expects 1 resolution, explodes to {ending_count} variants")
    if total_paths > len(stages): gaps.append(f"tree has {total_paths} reachable paths but framework counts only {len(stages)} stages — branching depth invisible at synopsis level")
    if not any(s["role"] == "climax" for s in stages): gaps.append("no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)")
    if "INFERRED" in stakes: gaps.append("parameter slot 'stakes' is INFERRED because story lists multiple alternative endings")
    if family_key in ("time-travel", "rebirth-revenge"):
        if not any(a["archetypeKey"] == "mentor" for a in archetypes):
            gaps.append(f"no mentor archetype — {family_zh} family expects one (but rebirth-revenge is structurally self-mentored)")
    return {
        "id": d.get("id"), "storyType": "manju", "title_zh": title_zh, "title_en": title_en,
        "genre": genre, "tagline": d.get("tagline", "")[:200],
        "branchingType": "rigid-tree",
        "branchingDetail": f"{choice_count} choice points × N options → {total_paths} paths → {ending_count} endings",
        "totalEpisodes": d.get("totalEpisodes"), "characterCount": len(chars),
        "treeStats": {"segmentCount": segment_count, "choiceCount": choice_count, "endingCount": ending_count, "totalPaths": total_paths},
        "synopsis": synopsis,
        "extractedPattern": {"family": family_zh, "familyKey": family_key, "stages": stages, "archetypes": archetypes, "turningPoints": turning_points, "parameterSlotsFilled": slots, "invariants": invariants},
        "gaps": gaps,
        "frameworkNotes": f"rigid-tree branching with {ending_count} endings; framework flattens to 3 synopsis stages; stakes slot is multi-valued.",
    }

def extract_branch_drama(d):
    title = d.get("title", "")
    genre = d.get("genre", "")
    family_zh, family_key = classify_family(genre)
    lanes = d.get("lanes", {})
    lane_count = len(lanes)
    scenes = d.get("scenes", [])
    stages = []
    scene_role_map = {0: "setup", 1: "rising-action", 2: "midpoint", 3: "crisis", 4: "resolution"}
    for i, sc in enumerate(scenes):
        role = scene_role_map.get(i, "custom" if i >= len(scene_role_map) else "rising-action")
        stages.append({
            "slotId": f"S{i+1}-scene-{i+1}", "role": role,
            "label_zh": sc.get("n", ""), "label_en": "",
            "triggerConstraint_zh": sc.get("d", "")[:80], "payoffConstraint_zh": "",
            "requiredArchetypeKeys": [], "keyEvents": sc.get("k", [])[:3],
        })
    archetypes = []
    chars = d.get("chars", [])
    for i, c in enumerate(chars):
        n = c.get("n", ""); desc = c.get("d", "")
        if i == 0: arch_key = "protagonist"
        elif i == 1 and len(chars) >= 2:
            if family_key in ("survival", "deep-sea-adventure", "extreme-delivery", "escape-room"): arch_key = "ally"
            else: arch_key = "love-interest"
        elif "反派" in desc or "黑皮手套" in desc or "villain" in desc.lower(): arch_key = "antagonist"
        else: arch_key = map_support_archetype(desc, desc)
        archetypes.append({"archetypeKey": arch_key, "label_zh": n, "functionSummary_zh": desc[:120], "mandatoryAtRoles": []})
    choices_bc = d.get("choicesBC", {})
    tps = []
    if isinstance(choices_bc, dict):
        all_keys = set()
        for sub in choices_bc.values():
            if isinstance(sub, dict): all_keys.update(sub.keys())
        for i, k in enumerate(sorted(all_keys, key=lambda x: int(x) if str(x).isdigit() else 999)):
            slot_id = f"S{min(len(stages), 1 + (int(k) // 4) if str(k).isdigit() and len(stages) >= 2 else 1)}-scene-{min(len(stages), 1 + (int(k) // 4) if str(k).isdigit() and len(stages) >= 2 else 1)}"
            tps.append({"pointKey": f"TP-{i+1}", "label_zh": f"choice@{k}", "slotId": slot_id, "irreversibleChange_zh": ""})
    logline = d.get("logline", "")
    setting = d.get("tone", "") or d.get("vid", "")
    protagonist = "; ".join([c.get("n", "") for c in chars[:1]]) or "INFERRED"
    antag_chars = [c for c in chars if "反派" in c.get("d", "") or "黑皮手套" in c.get("d", "")]
    if antag_chars: antagonist = "; ".join([c.get("n", "") for c in antag_chars])
    elif family_key in ("survival", "monster-apocalypse", "escape-room", "deep-sea-adventure", "extreme-delivery", "suspense-horror"): antagonist = "ENVIRONMENTAL"
    elif family_key in ("sweet-pet", "comedy-meme", "comedy-punchline", "xianxia-healing", "life-philosophy"): antagonist = "NONE"
    else: antagonist = "INFERRED"
    slots = {"setting": setting[:200], "protagonist": protagonist, "antagonist": antagonist,
             "centralConflict": logline[:200], "stakes": logline[:200],
             "theme": f"INFERRED: {family_zh} family"}
    has_protag = any(a["archetypeKey"] == "protagonist" for a in archetypes)
    has_antag_char = any(a["archetypeKey"] == "antagonist" for a in archetypes)
    has_env_antag = antagonist == "ENVIRONMENTAL"
    mandatory_pass = has_protag and (has_antag_char or has_env_antag)
    invariants = [
        {"code": "stages-length-range", "spec": "{min:2,max:12}", "actualLength": len(stages), "passed": 2 <= len(stages) <= 12},
        {"code": "turningPoint-slot-coverage", "passed": all(tp["slotId"] in [s["slotId"] for s in stages] for tp in tps), "orphanTurningPoints": []},
        {"code": "mandatory-roles-present", "spec": "≥1 protagonist + (antagonist OR environmental)", "passed": mandatory_pass, "missingRoles": []},
    ]
    gaps = [
        "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
        f"{lane_count} lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
    ]
    if not has_antag_char:
        if antagonist == "NONE": gaps.append("no traditional antagonist — sweet-pet/slice-of-life genre has no opposing force")
        elif antagonist == "ENVIRONMENTAL": gaps.append("no traditional antagonist character — environmental threat (storm/monster/time-pressure)")
    if any(c.get("v") for c in chars): gaps.append("voice profiles (v field) have no framework slot — branch-dramas are video-content specs")
    return {
        "id": d.get("key"), "storyType": "branch-drama", "title_zh": title, "title_en": "",
        "genre": genre, "tagline": logline[:200],
        "branchingType": "multi-lane",
        "branchingDetail": f"{lane_count} lanes: {','.join(lanes.keys())} — alternative playthroughs of same skeleton",
        "laneCount": lane_count, "lanes": lanes, "sceneCount": len(scenes), "characterCount": len(chars),
        "extractedPattern": {"family": family_zh, "familyKey": family_key, "stages": stages, "archetypes": archetypes, "turningPoints": tps, "parameterSlotsFilled": slots, "invariants": invariants},
        "gaps": gaps,
        "frameworkNotes": f"multi-lane branching with {lane_count} lanes; framework has no 'alternative playthrough' primitive; visual/voice fields invisible.",
    }

def extract_viral_scene(d):
    scene_name = d.get("sceneName", "")
    cat_key = d.get("categoryKey", "")
    cat_name = d.get("categoryName", "")
    family_zh, family_key = classify_family("", cat_key, scene_name)
    pro = d.get("pro")
    stages = []
    if pro and isinstance(pro, dict):
        for phase_key, role in [("open", "setup"), ("dev", "rising-action"), ("climax", "climax")]:
            phase = pro.get(phase_key, {})
            if isinstance(phase, dict):
                stages.append({
                    "slotId": f"S{len(stages)+1}-{phase_key}", "role": role,
                    "label_zh": {"open": "开场", "dev": "发展", "climax": "爆点"}.get(phase_key, phase_key),
                    "label_en": phase_key.capitalize(),
                    "triggerConstraint_zh": phase.get("action", "")[:80],
                    "payoffConstraint_zh": phase.get("expr", "")[:80],
                    "requiredArchetypeKeys": ["protagonist"],
                    "keyEvents": [phase.get("action", "")[:60]] if phase.get("action") else [],
                })
    act_template = d.get("act", "")
    pro_was_null = False
    if not stages and act_template:
        pro_was_null = True
        clauses = [c.strip() for c in act_template.split("。") if c.strip()]
        for i, clause in enumerate(clauses[:3]):
            role = ["setup", "rising-action", "climax"][i] if i < 3 else "custom"
            stages.append({
                "slotId": f"S{i+1}-synth-{i+1}", "role": role,
                "label_zh": ["开场", "发展", "爆点"][i] if i < 3 else f"Phase {i+1}",
                "label_en": ["Setup", "Dev", "Climax"][i] if i < 3 else f"Phase {i+1}",
                "triggerConstraint_zh": clause[:80], "payoffConstraint_zh": "",
                "requiredArchetypeKeys": ["protagonist"], "keyEvents": [],
                "synthesizedFromTemplate": True,
            })
    example = d.get("example", {})
    hero = example.get("h", "")
    archetypes = [{"archetypeKey": "protagonist", "label_zh": hero, "functionSummary_zh": d.get("why", "")[:120], "mandatoryAtRoles": ["setup", "rising-action", "climax"]}]
    tps = []
    if len(stages) >= 3:
        tps.append({"pointKey": "TP-1", "label_zh": "dev→climax transition", "slotId": stages[1]["slotId"] if len(stages) > 1 else stages[0]["slotId"], "irreversibleChange_zh": (stages[2].get("triggerConstraint_zh", "") if len(stages) > 2 else "")[:80]})
    conflict = example.get("c", "")
    if family_key in ("family-emotion", "pet-rescue", "national-style", "comedy-punchline", "life-philosophy"): antagonist = "NONE"
    elif family_key in ("workplace-hero", "suspense-horror"): antagonist = "ENVIRONMENTAL"
    elif conflict: antagonist = f"SITUATIONAL: {conflict}"
    else: antagonist = "NONE"
    slots = {"setting": example.get("p", ""), "protagonist": hero, "antagonist": antagonist,
             "centralConflict": conflict, "stakes": d.get("why", "")[:200],
             "theme": f"INFERRED: {family_zh} family"}
    has_protag = any(a["archetypeKey"] == "protagonist" for a in archetypes)
    has_antag_char = any(a["archetypeKey"] == "antagonist" for a in archetypes)
    mandatory_pass = has_protag and (has_antag_char or antagonist.startswith("ENVIRONMENTAL") or antagonist.startswith("SITUATIONAL") or antagonist == "NONE")
    invariants = [
        {"code": "stages-length-range", "spec": "{min:2,max:12}", "actualLength": len(stages), "passed": 2 <= len(stages) <= 12},
        {"code": "turningPoint-slot-coverage", "passed": all(tp["slotId"] in [s["slotId"] for s in stages] for tp in tps), "orphanTurningPoints": []},
        {"code": "mandatory-roles-present", "spec": "≥1 protagonist + (antagonist OR environmental OR situational OR none)", "passed": mandatory_pass, "missingRoles": []},
    ]
    gaps = [
        "branchingType=linear is NOT yet a standard framework value",
        "only 1 archetype present (the hero from example.h) — framework expects multiple",
        "15-second runtime constraint has no framework slot",
        "'why' field (1-sentence rationale) has no framework slot",
    ]
    if pro_was_null: gaps.append("pro field is null — 3-phase breakdown SYNTHESIZED from act template")
    if antagonist == "NONE": gaps.append("no traditional central conflict — pure heartwarming/aesthetic/emotional beat")
    return {
        "id": f"{cat_key}:{scene_name}", "storyType": "viral-scene",
        "title_zh": scene_name, "title_en": "",
        "categoryKey": cat_key, "categoryName": cat_name, "categoryEmoji": d.get("categoryEmoji", ""),
        "why": d.get("why", "")[:200], "act": act_template[:200],
        "branchingType": "linear",
        "branchingDetail": "linear 15-second single-shot — no choices, no lanes, no branches",
        "phaseCount": len(stages),
        "plotLineCount": len(d.get("plotLines", [])) if isinstance(d.get("plotLines"), list) else 0,
        "proWasNull": pro_was_null,
        "extractedPattern": {"family": family_zh, "familyKey": family_key, "stages": stages, "archetypes": archetypes, "turningPoints": tps, "parameterSlotsFilled": slots, "invariants": invariants},
        "gaps": gaps,
        "frameworkNotes": f"linear 15-second single-shot; 3-phase pro breakdown fits cleanly; cinematic/why fields invisible.",
    }

def derive_variants(entry):
    story_type = entry.get("storyType")
    variants = []
    if story_type == "manju":
        endings_text = ""
        for phase in entry.get("synopsis", []):
            if "结局" in phase.get("phase", ""):
                endings_text = phase.get("text", ""); break
        ending_count = entry.get("treeStats", {}).get("endingCount", 1)
        ending_names = []
        if endings_text:
            m = re.search(r"(\d+)\s*种结局[：:]\s*(.+)", endings_text)
            if m:
                rest = m.group(2)
                parts = re.split(r"[／/；;，,。]", rest)
                ending_names = [p.strip() for p in parts if p.strip() and len(p.strip()) > 2][:ending_count]
        if len(ending_names) < ending_count:
            for i in range(len(ending_names), ending_count):
                ending_names.append(f"Ending {i+1}")
        for i, name in enumerate(ending_names):
            variants.append({"variantId": f"{entry['id']}#ending-{i+1}", "storyId": entry["id"], "variantType": "ending", "variantIndex": i + 1, "variantLabel_zh": name})
    elif story_type == "branch-drama":
        lanes = entry.get("lanes", {})
        if not lanes: lanes = {"hard": "强攻线", "bear": "潜行线", "ally": "同心线"}
        for i, (lane_key, lane_label) in enumerate(lanes.items()):
            variants.append({"variantId": f"{entry['id']}#lane-{lane_key}", "storyId": entry["id"], "variantType": "lane", "variantIndex": i + 1, "variantLabel_zh": lane_label, "laneKey": lane_key})
    elif story_type == "viral-scene":
        variants.append({"variantId": f"{entry['id']}#linear", "storyId": entry["id"], "variantType": "linear", "variantIndex": 1, "variantLabel_zh": entry.get("title_zh") or ""})
    return variants

def trim_for_ui(entry):
    pattern = entry.get("extractedPattern", {})
    invariants = pattern.get("invariants", [])
    inv_summary = {i.get("code"): i.get("passed") for i in invariants}
    inv_pass_count = sum(1 for v in inv_summary.values() if v is True)
    stage_roles = [s.get("role") for s in pattern.get("stages", [])]
    archetype_keys = [a.get("archetypeKey") for a in pattern.get("archetypes", [])]
    raw_slots = pattern.get("parameterSlotsFilled", {})
    slots = {}
    for k in ("setting", "protagonist", "antagonist", "centralConflict", "stakes", "theme"):
        v = (raw_slots.get(k) or "").strip()
        if len(v) > 200: v = v[:200] + "…"
        slots[k] = v
    antag = slots.get("antagonist", "")
    if antag.startswith("ENVIRONMENTAL"): antagonist_type = "environmental"
    elif antag == "NONE" or antag.startswith("NONE"): antagonist_type = "none"
    elif "SITUATIONAL" in antag.upper(): antagonist_type = "situational"
    elif antag: antagonist_type = "character"
    else: antagonist_type = "unknown"
    has_climax = "climax" in stage_roles
    if entry.get("branchingType") == "rigid-tree": climax_mode = "per-path"
    elif entry.get("branchingType") == "multi-lane": climax_mode = "per-lane"
    elif has_climax: climax_mode = "single"
    else: climax_mode = "absent"
    branching_info = {"type": entry.get("branchingType", "unknown"), "detail": entry.get("branchingDetail", "")[:200]}
    if entry.get("storyType") == "manju":
        ts = entry.get("treeStats", {})
        branching_info.update({"choicePointCount": ts.get("choiceCount"), "endingCount": ts.get("endingCount"), "totalPaths": ts.get("totalPaths"), "segmentCount": ts.get("segmentCount")})
    elif entry.get("storyType") == "branch-drama":
        branching_info["laneCount"] = entry.get("laneCount", 3)
    fingerprint_parts = [entry.get("branchingType", "?"), str(len(pattern.get("stages", []))), str(len(pattern.get("archetypes", [])))]
    if entry.get("storyType") == "manju":
        ts = entry.get("treeStats", {})
        fingerprint_parts.append(f"{ts.get('choiceCount', 0)}cp-{ts.get('endingCount', 0)}e-{ts.get('totalPaths', 0)}p")
    elif entry.get("storyType") == "branch-drama":
        fingerprint_parts.append(f"{entry.get('laneCount', 3)}lane")
    elif entry.get("storyType") == "viral-scene":
        fingerprint_parts.append("linear")
    fingerprint = "|".join(fingerprint_parts)
    gaps = entry.get("gaps", [])
    top_gap = gaps[0][:200] if gaps else ""
    return {
        "id": entry.get("id"), "storyType": entry.get("storyType"),
        "title_zh": entry.get("title_zh") or "", "title_en": entry.get("title_en") or "",
        "genre": entry.get("genre", ""), "tagline": entry.get("tagline") or "",
        "categoryKey": entry.get("categoryKey", ""), "categoryName": entry.get("categoryName", ""), "categoryEmoji": entry.get("categoryEmoji", ""),
        "family": pattern.get("family", ""), "familyKey": pattern.get("familyKey", ""),
        "branchingInfo": branching_info,
        "stageCount": len(pattern.get("stages", [])), "archetypeCount": len(pattern.get("archetypes", [])), "characterCount": entry.get("characterCount"),
        "stageRoles": stage_roles, "archetypeKeys": archetype_keys,
        "stages": [{"slotId": s.get("slotId"), "role": s.get("role"), "label_zh": s.get("label_zh"), "triggerConstraint_zh": s.get("triggerConstraint_zh", "")[:120]} for s in pattern.get("stages", [])],
        "archetypes": [{"archetypeKey": a.get("archetypeKey"), "label_zh": a.get("label_zh"), "functionSummary_zh": a.get("functionSummary_zh", "")[:120]} for a in pattern.get("archetypes", [])],
        "parameterSlotsFilled": slots, "antagonistType": antagonist_type, "climaxMode": climax_mode,
        "invariantSummary": {"stagesLengthRange": inv_summary.get("stages-length-range"), "turningPointSlotCoverage": inv_summary.get("turningPoint-slot-coverage"), "mandatoryRolesPresent": inv_summary.get("mandatory-roles-present")},
        "invariantPassCount": inv_pass_count, "invariantTotal": 3,
        "gapCount": len(gaps), "topGap": top_gap, "allGaps": gaps[:6],
        "patternFingerprint": fingerprint,
    }

def main():
    LEDGER_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    all_entries = []
    manju_path = AIZHUIGUANG_DIR / "data/generators/manju.dramas.jsonl"
    with open(manju_path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line: continue
            all_entries.append(extract_manju(json.loads(line)))
    print(f"Extracted {len(all_entries)} manju entries")
    n_before = len(all_entries)
    bd_path = AIZHUIGUANG_DIR / "data/generators/branch-drama.dramas.jsonl"
    with open(bd_path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line: continue
            all_entries.append(extract_branch_drama(json.loads(line)))
    print(f"Extracted {len(all_entries) - n_before} branch-drama entries")
    n_before = len(all_entries)
    vs_path = AIZHUIGUANG_DIR / "data/generators/viral-scene.scenes.jsonl"
    with open(vs_path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line: continue
            all_entries.append(extract_viral_scene(json.loads(line)))
    print(f"Extracted {len(all_entries) - n_before} viral-scene entries")
    print(f"Total: {len(all_entries)} entries")
    with open(CONSOLIDATED, "w", encoding="utf-8") as f:
        for e in all_entries: f.write(json.dumps(e, ensure_ascii=False) + "\n")
    print(f"Wrote {CONSOLIDATED}")
    all_variants = []
    for e in all_entries: all_variants.extend(derive_variants(e))
    print(f"Total variants: {len(all_variants)}")
    stories = [trim_for_ui(e) for e in all_entries]
    for i, s in enumerate(stories):
        s["variantCount"] = sum(1 for v in all_variants if v["storyId"] == s["id"])
    by_type = Counter(s["storyType"] for s in stories)
    by_branching = Counter(s["branchingInfo"]["type"] for s in stories)
    by_family = Counter(s["familyKey"] for s in stories)
    by_antag = Counter(s["antagonistType"] for s in stories)
    by_climax = Counter(s["climaxMode"] for s in stories)
    by_fingerprint = Counter(s["patternFingerprint"] for s in stories)
    inv_pass = sum(1 for s in stories if s["invariantPassCount"] == 3)
    inv_partial = sum(1 for s in stories if 0 < s["invariantPassCount"] < 3)
    inv_fail = sum(1 for s in stories if s["invariantPassCount"] == 0)
    stats = {
        "totalStories": len(stories), "totalVariants": len(all_variants),
        "byStoryType": dict(by_type), "byBranchingType": dict(by_branching),
        "byFamily": dict(by_family.most_common()), "byAntagonistType": dict(by_antag),
        "byClimaxMode": dict(by_climax),
        "topFingerprints": [{"fingerprint": fp, "count": n} for fp, n in by_fingerprint.most_common(10)],
        "invariantPassAll": inv_pass, "invariantPartial": inv_partial, "invariantFailAll": inv_fail,
        "invariantPassRate": f"{inv_pass}/{len(stories)} ({100*inv_pass//len(stories)}%)",
    }
    with open(CORPUS_SUMMARY, "w", encoding="utf-8") as f:
        json.dump({"stories": stories, "variants": all_variants, "stats": stats}, f, ensure_ascii=False, indent=2)
    size_kb = CORPUS_SUMMARY.stat().st_size // 1024
    print(f"Wrote {CORPUS_SUMMARY} ({size_kb} KB)")
    print(f"\n--- STATS ---\nStories: {stats['totalStories']}\nVariants: {stats['totalVariants']}\nBy story type: {stats['byStoryType']}\nBy branching: {stats['byBranchingType']}\nBy antagonist: {stats['byAntagonistType']}\nBy climax mode: {stats['byClimaxMode']}\nInvariant pass rate: {stats['invariantPassRate']}")

if __name__ == "__main__": main()
