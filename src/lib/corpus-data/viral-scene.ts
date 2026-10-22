// @generated — DO NOT EDIT. Regenerate via `python3 scripts/build_corpus.py`.

import type { StoryRecord, VariantInstance } from '@/lib/corpus-types'

export const VIRAL_SCENE_STORIES: StoryRecord[] = [
  {
    "id": "comedy:单口抖包袱",
    "storyType": "viral-scene",
    "title_zh": "单口抖包袱",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "comedy",
    "categoryName": "脱口秀段子",
    "categoryEmoji": "🎤",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{hero}手握话筒站定，不紧不慢地开口，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他继续铺垫细节，把故事讲得越来越像那么回事，台下安静聆听",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；他甩出最后一句反转包袱，自己面不改色，台下瞬间炸场",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "脱口秀演员，松弛幽默",
        "functionSummary_zh": "节奏是命——前 10 秒一本正经地铺垫，最后 3 秒一个意料之外的反转包袱，笑点全靠这一下。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "深夜的脱口秀小剧场",
      "protagonist": "脱口秀演员，松弛幽默",
      "antagonist": "SITUATIONAL: 他一本正经讲一个看似平常的经历",
      "centralConflict": "他一本正经讲一个看似平常的经历",
      "stakes": "节奏是命——前 10 秒一本正经地铺垫，最后 3 秒一个意料之外的反转包袱，笑点全靠这一下。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "comedy:反差人设段子",
    "storyType": "viral-scene",
    "title_zh": "反差人设段子",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "comedy",
    "categoryName": "脱口秀段子",
    "categoryEmoji": "🎤",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 2,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}以一个反差人设登场，{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "镜头记录他的迷惑行为，{twist}，反差拉满，沙雕又上头",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "外表凶悍的反差人设",
        "functionSummary_zh": "反差萌制造笑点——人设和行为强烈反差，越一本正经做沙雕事越好笑。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "深夜的脱口秀小剧场",
      "protagonist": "外表凶悍的反差人设",
      "antagonist": "SITUATIONAL: 凶神恶煞的外表，做的却是极其反差的小事",
      "centralConflict": "凶神恶煞的外表，做的却是极其反差的小事",
      "stakes": "反差萌制造笑点——人设和行为强烈反差，越一本正经做沙雕事越好笑。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|2|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 2,
    "variantCount": 1
  },
  {
    "id": "comedy:吐槽打工人日常",
    "storyType": "viral-scene",
    "title_zh": "吐槽打工人日常",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "comedy",
    "categoryName": "脱口秀段子",
    "categoryEmoji": "🎤",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 2,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}对着镜头吐槽，{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "表情从无奈到崩溃，{twist}，一句犀利金句总结，扎心又好笑",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "打工人，黑眼圈，无奈",
        "functionSummary_zh": "\"人间真实\"最容易引发共鸣转发——把打工、相亲、催婚的痛点用犀利金句戳破，观众边笑边认同。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "深夜的脱口秀小剧场",
      "protagonist": "打工人，黑眼圈，无奈",
      "antagonist": "SITUATIONAL: 他对着镜头吐槽加班、催婚、月底没钱",
      "centralConflict": "他对着镜头吐槽加班、催婚、月底没钱",
      "stakes": "\"人间真实\"最容易引发共鸣转发——把打工、相亲、催婚的痛点用犀利金句戳破，观众边笑边认同。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|2|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 2,
    "variantCount": 1
  },
  {
    "id": "comedy:谐音梗冷笑话",
    "storyType": "viral-scene",
    "title_zh": "谐音梗冷笑话",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "comedy",
    "categoryName": "脱口秀段子",
    "categoryEmoji": "🎤",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 2,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{hero}煞有介事地说着，{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "镜头停在他得意的表情上，{twist}，一个谐音梗甩出来，对面先愣后笑",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "脱口秀演员，一脸得意",
        "functionSummary_zh": "\"先愣后笑\"是谐音梗的魅力——观众反应过来的那 0.5 秒空白，正是笑点引爆点。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "深夜的脱口秀小剧场",
      "protagonist": "脱口秀演员，一脸得意",
      "antagonist": "SITUATIONAL: 他得意地抛出一个梗，对面一脸懵",
      "centralConflict": "他得意地抛出一个梗，对面一脸懵",
      "stakes": "\"先愣后笑\"是谐音梗的魅力——观众反应过来的那 0.5 秒空白，正是笑点引爆点。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|2|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 2,
    "variantCount": 1
  },
  {
    "id": "guofeng:战甲披风出征",
    "storyType": "viral-scene",
    "title_zh": "战甲披风出征",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "guofeng",
    "categoryName": "国风名场面",
    "categoryEmoji": "🏮",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}披甲执剑即将出征，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "披甲执剑的年轻将军",
        "functionSummary_zh": "银甲红披、转身出征的那一下，热血与国风叠满——天生的高燃名场面。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "旌旗猎猎的点将台",
      "protagonist": "披甲执剑的年轻将军",
      "antagonist": "SITUATIONAL: 大军压境，他银甲红披、执剑立于阵前",
      "centralConflict": "大军压境，他银甲红披、执剑立于阵前",
      "stakes": "银甲红披、转身出征的那一下，热血与国风叠满——天生的高燃名场面。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "guofeng:拔剑出鞘",
    "storyType": "viral-scene",
    "title_zh": "拔剑出鞘",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "guofeng",
    "categoryName": "国风名场面",
    "categoryEmoji": "🏮",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}负剑而立，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "负剑而立的清冷剑客",
        "functionSummary_zh": "剑客负剑而立，寒光出鞘的那一瞬——侠气与国风兼具，干净利落的爆点。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "落叶纷飞的竹林/古道",
      "protagonist": "负剑而立的清冷剑客",
      "antagonist": "SITUATIONAL: 他负剑而立，气氛凝滞，似有大战将至",
      "centralConflict": "他负剑而立，气氛凝滞，似有大战将至",
      "stakes": "剑客负剑而立，寒光出鞘的那一瞬——侠气与国风兼具，干净利落的爆点。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "guofeng:提灯夜行",
    "storyType": "viral-scene",
    "title_zh": "提灯夜行",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "guofeng",
    "categoryName": "国风名场面",
    "categoryEmoji": "🏮",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}提一盏灯独行夜色，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "提灯独行的古装女子",
        "functionSummary_zh": "一盏宫灯、一袭长衣穿过幽深长廊——氛围感拉满的国风高光，自带故事。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "幽深寂静的古宅长廊",
      "protagonist": "提灯独行的古装女子",
      "antagonist": "SITUATIONAL: 夜色深沉，她提一盏宫灯独自走过幽深长廊",
      "centralConflict": "夜色深沉，她提一盏宫灯独自走过幽深长廊",
      "stakes": "一盏宫灯、一袭长衣穿过幽深长廊——氛围感拉满的国风高光，自带故事。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "guofeng:水袖独舞",
    "storyType": "viral-scene",
    "title_zh": "水袖独舞",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "guofeng",
    "categoryName": "国风名场面",
    "categoryEmoji": "🏮",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}起舞，水袖翻飞，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "身姿曼妙的古装舞者",
        "functionSummary_zh": "一段水袖翩跹，刚柔并济——国风之美在流动的衣袖里一镜到底，极具传播力。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "空旷华美的古殿",
      "protagonist": "身姿曼妙的古装舞者",
      "antagonist": "SITUATIONAL: 空旷的殿堂里，她水袖轻扬，缓缓起舞",
      "centralConflict": "空旷的殿堂里，她水袖轻扬，缓缓起舞",
      "stakes": "一段水袖翩跹，刚柔并济——国风之美在流动的衣袖里一镜到底，极具传播力。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "guofeng:烟雨撑伞",
    "storyType": "viral-scene",
    "title_zh": "烟雨撑伞",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "guofeng",
    "categoryName": "国风名场面",
    "categoryEmoji": "🏮",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，烟雨中{hero}撑伞而立，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "撑油纸伞的青衫人",
        "functionSummary_zh": "青石巷、油纸伞、烟雨朦胧——东方含蓄美学的代表画面，唯美又出片。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "烟雨朦胧的青石小巷",
      "protagonist": "撑油纸伞的青衫人",
      "antagonist": "SITUATIONAL: 青石小巷烟雨朦胧，他撑一柄油纸伞静静伫立",
      "centralConflict": "青石小巷烟雨朦胧，他撑一柄油纸伞静静伫立",
      "stakes": "青石巷、油纸伞、烟雨朦胧——东方含蓄美学的代表画面，唯美又出片。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "guofeng:红衣回眸",
    "storyType": "viral-scene",
    "title_zh": "红衣回眸",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "guofeng",
    "categoryName": "国风名场面",
    "categoryEmoji": "🏮",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}一袭红衣背对镜头独立于天地间，{conflict}，衣摆与发丝随风翻飞",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "风骤起，红衣翻卷如焰，{hero}缓缓抬手抚过衣袖，似有万千心绪",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；{hero}倏然回眸，眼波流转，红衣与漫天风雪/落花在身后定格成画",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一袭红衣的清冷女子",
        "functionSummary_zh": "一袭红衣立于风雪/花海，那一个回眸定格——极简却极有氛围，是国风最出圈的视觉符号。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "风雪漫天的山巅/落英缤纷的花海",
      "protagonist": "一袭红衣的清冷女子",
      "antagonist": "SITUATIONAL: 她一袭红衣独立于漫天风雪/落花之中，背影清冷孤绝",
      "centralConflict": "她一袭红衣独立于漫天风雪/落花之中，背影清冷孤绝",
      "stakes": "一袭红衣立于风雪/花海，那一个回眸定格——极简却极有氛围，是国风最出圈的视觉符号。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "inspire:受尽嘲讽后证明自己",
    "storyType": "viral-scene",
    "title_zh": "受尽嘲讽后证明自己",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "inspire",
    "categoryName": "热血逆袭",
    "categoryEmoji": "🔥",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}一直被嘲讽看轻，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "被长期看轻的普通人，眼神隐忍",
        "functionSummary_zh": "把所有看不起攒成动力，用实力狠狠回击——\"打脸\"逆袭百看不厌。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "众目睽睽的现场",
      "protagonist": "被长期看轻的普通人，眼神隐忍",
      "antagonist": "SITUATIONAL: 他一直被人当面嘲讽看轻，咽下了所有委屈",
      "centralConflict": "他一直被人当面嘲讽看轻，咽下了所有委屈",
      "stakes": "把所有看不起攒成动力，用实力狠狠回击——\"打脸\"逆袭百看不厌。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "inspire:替补绝杀",
    "storyType": "viral-scene",
    "title_zh": "替补绝杀",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "inspire",
    "categoryName": "热血逆袭",
    "categoryEmoji": "🔥",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}作为替补在场边枯坐，{conflict}，没人指望他",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "比分落后、时间将尽，他被推上场，全场和对手都不当回事",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；他抓住最后一秒完成绝杀，看台瞬间炸开",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一直被忽视的替补队员，眼神不甘",
        "functionSummary_zh": "坐了整场冷板凳的替补，最后一秒被推上场——所有的不被看好，都成了绝杀那一下的燃料，爽感直接拉满。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "灯火通明、座无虚席的球场",
      "protagonist": "一直被忽视的替补队员，眼神不甘",
      "antagonist": "SITUATIONAL: 坐了整场冷板凳，落后一球、只剩最后十秒，他被推上场",
      "centralConflict": "坐了整场冷板凳，落后一球、只剩最后十秒，他被推上场",
      "stakes": "坐了整场冷板凳的替补，最后一秒被推上场——所有的不被看好，都成了绝杀那一下的燃料，爽感直接拉满。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "inspire:濒临破产再翻盘",
    "storyType": "viral-scene",
    "title_zh": "濒临破产再翻盘",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "inspire",
    "categoryName": "热血逆袭",
    "categoryEmoji": "🔥",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}的事业濒临崩盘，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "濒临破产的创业者，眼里布满血丝",
        "functionSummary_zh": "一夜跌到谷底又靠一口气拼回来——\"绝地反击\"的商战爽感最上头。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "深夜灯火通明的办公室",
      "protagonist": "濒临破产的创业者，眼里布满血丝",
      "antagonist": "SITUATIONAL: 公司一夜跌到谷底，所有人都劝他放弃",
      "centralConflict": "公司一夜跌到谷底，所有人都劝他放弃",
      "stakes": "一夜跌到谷底又靠一口气拼回来——\"绝地反击\"的商战爽感最上头。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "inspire:病床上重新站起",
    "storyType": "viral-scene",
    "title_zh": "病床上重新站起",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "inspire",
    "categoryName": "热血逆袭",
    "categoryEmoji": "🔥",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}被断言再也站不起来，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "重伤康复中的人，额头沁汗",
        "functionSummary_zh": "被宣判站不起来的人，咬着牙一步步重新走路——生命的韧劲比任何台词都震撼。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "安静的康复训练室",
      "protagonist": "重伤康复中的人，额头沁汗",
      "antagonist": "SITUATIONAL: 医生断言他再也站不起来，他偏不信",
      "centralConflict": "医生断言他再也站不起来，他偏不信",
      "stakes": "被宣判站不起来的人，咬着牙一步步重新走路——生命的韧劲比任何台词都震撼。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "inspire:草根选手封神",
    "storyType": "viral-scene",
    "title_zh": "草根选手封神",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "inspire",
    "categoryName": "热血逆袭",
    "categoryEmoji": "🔥",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}作为无名草根登场被人轻视，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "其貌不扬的草根选手",
        "functionSummary_zh": "无名小卒站上大舞台，一开口/一出手就镇住全场——草根逆袭的反差最解气。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "灯光璀璨的比赛舞台",
      "protagonist": "其貌不扬的草根选手",
      "antagonist": "SITUATIONAL: 无名小卒站上大舞台，台下一片轻视的窃笑",
      "centralConflict": "无名小卒站上大舞台，台下一片轻视的窃笑",
      "stakes": "无名小卒站上大舞台，一开口/一出手就镇住全场——草根逆袭的反差最解气。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "inspire:落榜生逆袭",
    "storyType": "viral-scene",
    "title_zh": "落榜生逆袭",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "inspire",
    "categoryName": "热血逆袭",
    "categoryEmoji": "🔥",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}曾被所有人断定不行，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "被看轻的考生，黑眼圈却眼神倔强",
        "functionSummary_zh": "被判定\"没希望\"的人闷头苦熬，放榜那一刻一举翻盘——最戳所有不服输的普通人。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "贴满榜单的公告栏前",
      "protagonist": "被看轻的考生，黑眼圈却眼神倔强",
      "antagonist": "SITUATIONAL: 所有人都断定他这次必落榜，连他自己都快撑不住",
      "centralConflict": "所有人都断定他这次必落榜，连他自己都快撑不住",
      "stakes": "被判定\"没希望\"的人闷头苦熬，放榜那一刻一举翻盘——最戳所有不服输的普通人。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "pet:小奶猫第一次睁眼",
    "storyType": "viral-scene",
    "title_zh": "小奶猫第一次睁眼",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pet",
    "categoryName": "萌宠治愈",
    "categoryEmoji": "🐾",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}守着一窝刚出生的小奶猫，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "守在猫窝边的铲屎官",
        "functionSummary_zh": "毛茸茸的小家伙第一次睁开眼看世界——纯粹的萌点，零负担的快乐。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "铺着软垫的温暖猫窝",
      "protagonist": "守在猫窝边的铲屎官",
      "antagonist": "SITUATIONAL: 刚出生几天的小奶猫眼睛还没睁开，软乎乎挤成一团",
      "centralConflict": "刚出生几天的小奶猫眼睛还没睁开，软乎乎挤成一团",
      "stakes": "毛茸茸的小家伙第一次睁开眼看世界——纯粹的萌点，零负担的快乐。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "pet:流浪猫被收养",
    "storyType": "viral-scene",
    "title_zh": "流浪猫被收养",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pet",
    "categoryName": "萌宠治愈",
    "categoryEmoji": "🐾",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，一只瘦弱的流浪猫缩在角落浑身戒备，{hero}缓缓蹲下，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "{hero}不催不抢，把食物放在手心静静等着，一寸一寸靠近",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；猫终于卸下防备，把脑袋蹭进他掌心，呼噜声响起",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "蹲下身、耐心温柔的爱心人士",
        "functionSummary_zh": "从警惕缩在角落到主动蹭手心的那一下转变，把\"被爱融化\"演到了每个人心里，治愈感拉满。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "阴雨天的小区角落",
      "protagonist": "蹲下身、耐心温柔的爱心人士",
      "antagonist": "SITUATIONAL: 一只警惕瘦弱的流浪猫缩在角落，对靠近的人又怕又抗拒",
      "centralConflict": "一只警惕瘦弱的流浪猫缩在角落，对靠近的人又怕又抗拒",
      "stakes": "从警惕缩在角落到主动蹭手心的那一下转变，把\"被爱融化\"演到了每个人心里，治愈感拉满。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "pet:狗狗护主",
    "storyType": "viral-scene",
    "title_zh": "狗狗护主",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pet",
    "categoryName": "萌宠治愈",
    "categoryEmoji": "🐾",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，险情突至，{hero}的狗狗{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "忠诚护主的狗狗与受惊的主人",
        "functionSummary_zh": "危险来临时小小的身体死死挡在主人身前——动物的忠诚比什么都戳人。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "突发险情的街头",
      "protagonist": "忠诚护主的狗狗与受惊的主人",
      "antagonist": "SITUATIONAL: 危险突然逼近主人，小小的狗狗毫不犹豫扑上前",
      "centralConflict": "危险突然逼近主人，小小的狗狗毫不犹豫扑上前",
      "stakes": "危险来临时小小的身体死死挡在主人身前——动物的忠诚比什么都戳人。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "pet:老狗最后的告别",
    "storyType": "viral-scene",
    "title_zh": "老狗最后的告别",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pet",
    "categoryName": "萌宠治愈",
    "categoryEmoji": "🐾",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，年迈的狗狗时日无多，{hero}守在身边，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "守在身边红了眼的主人",
        "functionSummary_zh": "陪伴了一生的老狗用尽力气舔一下主人的手——\"它陪你长大，你陪它变老\"直接破防。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "洒着暖光的家中客厅",
      "protagonist": "守在身边红了眼的主人",
      "antagonist": "SITUATIONAL: 陪了一家人十几年的老狗已时日无多，气息微弱",
      "centralConflict": "陪了一家人十几年的老狗已时日无多，气息微弱",
      "stakes": "陪伴了一生的老狗用尽力气舔一下主人的手——\"它陪你长大，你陪它变老\"直接破防。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "pet:重伤动物奇迹康复",
    "storyType": "viral-scene",
    "title_zh": "重伤动物奇迹康复",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pet",
    "categoryName": "萌宠治愈",
    "categoryEmoji": "🐾",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，一只重伤的动物被{hero}救起，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "悉心照料的救助者",
        "functionSummary_zh": "从奄奄一息到重新撒欢奔跑——生命的顽强加治愈，正能量满分。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "温馨的动物救助站",
      "protagonist": "悉心照料的救助者",
      "antagonist": "SITUATIONAL: 一只重伤奄奄一息的动物被救起，谁都不确定它能否挺过来",
      "centralConflict": "一只重伤奄奄一息的动物被救起，谁都不确定它能否挺过来",
      "stakes": "从奄奄一息到重新撒欢奔跑——生命的顽强加治愈，正能量满分。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "pet:雨夜救回小奶猫",
    "storyType": "viral-scene",
    "title_zh": "雨夜救回小奶猫",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pet",
    "categoryName": "萌宠治愈",
    "categoryEmoji": "🐾",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "暴雨中的{place}，{hero}听见微弱的猫叫，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "冒雨循声而来的好心人",
        "functionSummary_zh": "雨里那声微弱的喵和捧进怀里的那一刻——救一条小生命的暖，谁看谁化。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "暴雨倾盆的街边",
      "protagonist": "冒雨循声而来的好心人",
      "antagonist": "SITUATIONAL: 暴雨里传来微弱的猫叫，纸箱里是一只冻得发抖的小奶猫",
      "centralConflict": "暴雨里传来微弱的猫叫，纸箱里是一只冻得发抖的小奶猫",
      "stakes": "雨里那声微弱的喵和捧进怀里的那一刻——救一条小生命的暖，谁看谁化。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "philo:一开口就是借钱",
    "storyType": "viral-scene",
    "title_zh": "一开口就是借钱",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个被久违消息打扰的人",
        "functionSummary_zh": "多年不联系，一上来就借钱——把你当工具的人，别浪费感情。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "被一条消息打断的日常",
      "protagonist": "一个被久违消息打扰的人",
      "antagonist": "SITUATIONAL: 多年没联系的人突然热情地发来消息",
      "centralConflict": "多年没联系的人突然热情地发来消息",
      "stakes": "多年不联系，一上来就借钱——把你当工具的人，别浪费感情。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:不联系是不想",
    "storyType": "viral-scene",
    "title_zh": "不联系是不想",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个为对方找借口的人",
        "functionSummary_zh": "成年人不联系不是忙，是没那么想你——再忙也挤得出一句\"在吗\"。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "久未收到消息的时刻",
      "protagonist": "一个为对方找借口的人",
      "antagonist": "SITUATIONAL: 对方总说太忙没空，渐渐不再主动联系",
      "centralConflict": "对方总说太忙没空，渐渐不再主动联系",
      "stakes": "成年人不联系不是忙，是没那么想你——再忙也挤得出一句\"在吗\"。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:中年男人的车",
    "storyType": "viral-scene",
    "title_zh": "中年男人的车",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个下班到家却不进门的中年人",
        "functionSummary_zh": "熄了火却不进门，在车里坐一会儿——那方寸车厢，是中年男人最后的喘息之地。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "楼下停着的车里",
      "protagonist": "一个下班到家却不进门的中年人",
      "antagonist": "SITUATIONAL: 车停到楼下，熄了火，却迟迟没下车",
      "centralConflict": "车停到楼下，熄了火，却迟迟没下车",
      "stakes": "熄了火却不进门，在车里坐一会儿——那方寸车厢，是中年男人最后的喘息之地。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:人生尚有来处",
    "storyType": "viral-scene",
    "title_zh": "人生尚有来处",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个珍惜眼前的子女",
        "functionSummary_zh": "父母在，人生尚有来处；父母去，此生只剩归途——这是最朴素也最重的道理。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "与父母同处一室的时刻",
      "protagonist": "一个珍惜眼前的子女",
      "antagonist": "SITUATIONAL: 看着父母还在身边，忽然懂得这份\"还在\"有多珍贵",
      "centralConflict": "看着父母还在身边，忽然懂得这份\"还在\"有多珍贵",
      "stakes": "父母在，人生尚有来处；父母去，此生只剩归途——这是最朴素也最重的道理。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:人走茶凉",
    "storyType": "viral-scene",
    "title_zh": "人走茶凉",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个尝过世态炎凉的人",
        "functionSummary_zh": "你穷时说话像放屁，你富了放屁都是真理——这世界，捧的是你的位置，不是你的人。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "今昔对照的场景",
      "protagonist": "一个尝过世态炎凉的人",
      "antagonist": "SITUATIONAL: 回想自己落魄时无人理睬，得势后众人逢迎",
      "centralConflict": "回想自己落魄时无人理睬，得势后众人逢迎",
      "stakes": "你穷时说话像放屁，你富了放屁都是真理——这世界，捧的是你的位置，不是你的人。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:从不让你为难",
    "storyType": "viral-scene",
    "title_zh": "从不让你为难",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个被默默体谅的人",
        "functionSummary_zh": "真正的朋友，从不开口让你为难——他先替你想，把难处咽下去。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "寻常的相处里",
      "protagonist": "一个被默默体谅的人",
      "antagonist": "SITUATIONAL: 有件事本可以麻烦朋友，朋友却抢先把难处揽了过去",
      "centralConflict": "有件事本可以麻烦朋友，朋友却抢先把难处揽了过去",
      "stakes": "真正的朋友，从不开口让你为难——他先替你想，把难处咽下去。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:会哭的孩子有奶吃",
    "storyType": "viral-scene",
    "title_zh": "会哭的孩子有奶吃",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}默默把活干完，功劳却被别人领走，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "看着会表达的同事拿到资源和认可，心里五味杂陈",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；这一次，他主动开口、清晰地表达了诉求",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个埋头苦干却被忽视的职场人",
        "functionSummary_zh": "闷头苦干没人疼，适时表达诉求才有回报——职场不是只靠埋头干活。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "办公室或工位",
      "protagonist": "一个埋头苦干却被忽视的职场人",
      "antagonist": "SITUATIONAL: 活干了最多，功劳和资源却总轮不到自己",
      "centralConflict": "活干了最多，功劳和资源却总轮不到自己",
      "stakes": "闷头苦干没人疼，适时表达诉求才有回报——职场不是只靠埋头干活。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "philo:你出事那天",
    "storyType": "viral-scene",
    "title_zh": "你出事那天",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个刚经历变故的人",
        "functionSummary_zh": "你出事那天，平时点赞的人全消失了——患难，是最狠的筛子。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "变故突来的时刻",
      "protagonist": "一个刚经历变故的人",
      "antagonist": "SITUATIONAL: 出了事，发了条求助，平日热闹的朋友圈一片沉默",
      "centralConflict": "出了事，发了条求助，平日热闹的朋友圈一片沉默",
      "stakes": "你出事那天，平时点赞的人全消失了——患难，是最狠的筛子。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:你受的苦没人替",
    "storyType": "viral-scene",
    "title_zh": "你受的苦没人替",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个在苦里熬本事的人",
        "functionSummary_zh": "你受的苦没人替你受，但你熬出的本事，谁也抢不走——苦尽，自有甘来。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "独自承受的日子里",
      "protagonist": "一个在苦里熬本事的人",
      "antagonist": "SITUATIONAL: 独自咽下没人能分担的苦",
      "centralConflict": "独自咽下没人能分担的苦",
      "stakes": "你受的苦没人替你受，但你熬出的本事，谁也抢不走——苦尽，自有甘来。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:你的底气",
    "storyType": "viral-scene",
    "title_zh": "你的底气",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个靠自己站稳的人",
        "functionSummary_zh": "兜里有钱，腰板才硬——经济独立，是成年人最大的体面。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "独当一面的时刻",
      "protagonist": "一个靠自己站稳的人",
      "antagonist": "SITUATIONAL: 手里有了底，说话办事都有了分量",
      "centralConflict": "手里有了底，说话办事都有了分量",
      "stakes": "兜里有钱，腰板才硬——经济独立，是成年人最大的体面。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:你的顶点别人的起点",
    "storyType": "viral-scene",
    "title_zh": "你的顶点别人的起点",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个刚触到天花板的人",
        "functionSummary_zh": "你拼尽全力到达的顶点，可能只是别人的起点——认清差距，但别停下脚步。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "攀爬到一定高度后的醒悟",
      "protagonist": "一个刚触到天花板的人",
      "antagonist": "SITUATIONAL: 好不容易爬到自以为的高处",
      "centralConflict": "好不容易爬到自以为的高处",
      "stakes": "你拼尽全力到达的顶点，可能只是别人的起点——认清差距，但别停下脚步。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:借钱见人心",
    "storyType": "viral-scene",
    "title_zh": "借钱见人心",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个开口求助的普通人",
        "functionSummary_zh": "开口借钱那一刻，关系的成色就验出来了——肯不肯、问不问归期，全是人心。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "安静的咖啡馆角落",
      "protagonist": "一个开口求助的普通人",
      "antagonist": "SITUATIONAL: 鼓起勇气向相熟的人开口借一笔钱",
      "centralConflict": "鼓起勇气向相熟的人开口借一笔钱",
      "stakes": "开口借钱那一刻，关系的成色就验出来了——肯不肯、问不问归期，全是人心。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:免费的最贵",
    "storyType": "viral-scene",
    "title_zh": "免费的最贵",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个差点被\"免费\"诱惑的人",
        "functionSummary_zh": "免费的往往最贵——所有不要钱的好处，都在暗处标好了价。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "面对诱惑的时刻",
      "protagonist": "一个差点被\"免费\"诱惑的人",
      "antagonist": "SITUATIONAL: 面对一个看起来不要钱的好处",
      "centralConflict": "面对一个看起来不要钱的好处",
      "stakes": "免费的往往最贵——所有不要钱的好处，都在暗处标好了价。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:分寸感",
    "storyType": "viral-scene",
    "title_zh": "分寸感",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个懂得拿捏分寸的人",
        "functionSummary_zh": "熟不逾矩、亲不越界——再近的关系，懂分寸的人才走得长。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "日常相处的场景",
      "protagonist": "一个懂得拿捏分寸的人",
      "antagonist": "SITUATIONAL: 面对关系很近的人，依然守着该有的界限",
      "centralConflict": "面对关系很近的人，依然守着该有的界限",
      "stakes": "熟不逾矩、亲不越界——再近的关系，懂分寸的人才走得长。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:删人比拉黑更狠",
    "storyType": "viral-scene",
    "title_zh": "删人比拉黑更狠",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个发现自己被删除的人",
        "functionSummary_zh": "不吵不闹、悄无声息地把你从生活里抹掉——成年人的告别，往往一声不响。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "独自看着手机的时刻",
      "protagonist": "一个发现自己被删除的人",
      "antagonist": "SITUATIONAL: 某天想起某人，点开对话框，发现早已不是好友",
      "centralConflict": "某天想起某人，点开对话框，发现早已不是好友",
      "stakes": "不吵不闹、悄无声息地把你从生活里抹掉——成年人的告别，往往一声不响。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:别交底的代价",
    "storyType": "viral-scene",
    "title_zh": "别交底的代价",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个曾经掏心掏肺的人",
        "functionSummary_zh": "关系再好也别把底交干净——你今天的软肋，迟早变成别人手里的把柄。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "独处时的安静角落",
      "protagonist": "一个曾经掏心掏肺的人",
      "antagonist": "SITUATIONAL: 想起自己曾把所有秘密、软肋都交给了某个人",
      "centralConflict": "想起自己曾把所有秘密、软肋都交给了某个人",
      "stakes": "关系再好也别把底交干净——你今天的软肋，迟早变成别人手里的把柄。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:别把同事当朋友",
    "storyType": "viral-scene",
    "title_zh": "别把同事当朋友",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个吃过交浅言深亏的人",
        "functionSummary_zh": "同事先是利益关系，再谈交情——交浅言深，迟早吃亏。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "办公室的相处里",
      "protagonist": "一个吃过交浅言深亏的人",
      "antagonist": "SITUATIONAL: 曾把同事当知心朋友，掏心掏肺",
      "centralConflict": "曾把同事当知心朋友，掏心掏肺",
      "stakes": "同事先是利益关系，再谈交情——交浅言深，迟早吃亏。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:别露富",
    "storyType": "viral-scene",
    "title_zh": "别露富",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个懂得低调的人",
        "functionSummary_zh": "财不外露——在人前显摆，往往招来的不是羡慕，是麻烦。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "容易被攀比打探的场合",
      "protagonist": "一个懂得低调的人",
      "antagonist": "SITUATIONAL: 有了点积蓄，身边人开始打探、攀比",
      "centralConflict": "有了点积蓄，身边人开始打探、攀比",
      "stakes": "财不外露——在人前显摆，往往招来的不是羡慕，是麻烦。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:努力要被看见",
    "storyType": "viral-scene",
    "title_zh": "努力要被看见",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个只干活不汇报的人",
        "functionSummary_zh": "埋头苦干不如让努力被看见——做了还要会\"汇报\"，否则功劳容易旁落。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "工位或汇报的场合",
      "protagonist": "一个只干活不汇报的人",
      "antagonist": "SITUATIONAL: 活干得漂亮，却从不主动让领导知道",
      "centralConflict": "活干得漂亮，却从不主动让领导知道",
      "stakes": "埋头苦干不如让努力被看见——做了还要会\"汇报\"，否则功劳容易旁落。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:合适比喜欢长久",
    "storyType": "viral-scene",
    "title_zh": "合适比喜欢长久",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个在心动与现实间权衡的人",
        "functionSummary_zh": "怦然心动会过去，合不合适才决定能走多远。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "感情趋于平静的阶段",
      "protagonist": "一个在心动与现实间权衡的人",
      "antagonist": "SITUATIONAL: 在一段关系里，激情褪去后开始审视",
      "centralConflict": "在一段关系里，激情褪去后开始审视",
      "stakes": "怦然心动会过去，合不合适才决定能走多远。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:喜欢很贵",
    "storyType": "viral-scene",
    "title_zh": "喜欢很贵",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个被认真对待的人",
        "functionSummary_zh": "成年人的喜欢很贵——时间、精力、耐心，肯为你花的，都是真心。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "被用心对待的瞬间",
      "protagonist": "一个被认真对待的人",
      "antagonist": "SITUATIONAL: 对方愿意为自己花时间、花心思",
      "centralConflict": "对方愿意为自己花时间、花心思",
      "stakes": "成年人的喜欢很贵——时间、精力、耐心，肯为你花的，都是真心。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:喜欢藏不住",
    "storyType": "viral-scene",
    "title_zh": "喜欢藏不住",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}盯着手机，反复猜对方的心思，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "对方的回复忽冷忽热、若即若离",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；放下手机，神情忽然平静下来",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个在感情里观察对方的人",
        "functionSummary_zh": "喜欢藏不住，不喜欢装不出——别为难自己去揣摩，态度早就写在细节里。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "等消息、看态度的时刻",
      "protagonist": "一个在感情里观察对方的人",
      "antagonist": "SITUATIONAL: 反复揣摩对方到底喜不喜欢自己",
      "centralConflict": "反复揣摩对方到底喜不喜欢自己",
      "stakes": "喜欢藏不住，不喜欢装不出——别为难自己去揣摩，态度早就写在细节里。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "philo:失望攒够了",
    "storyType": "viral-scene",
    "title_zh": "失望攒够了",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个终于决定离开的人",
        "functionSummary_zh": "离开往往不是因为一件大事，是失望攒够了——压垮关系的是最后一根稻草。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "决定离开的那一刻",
      "protagonist": "一个终于决定离开的人",
      "antagonist": "SITUATIONAL: 一次次失望累积，终于到了临界点",
      "centralConflict": "一次次失望累积，终于到了临界点",
      "stakes": "离开往往不是因为一件大事，是失望攒够了——压垮关系的是最后一根稻草。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:好脾气给错了人",
    "storyType": "viral-scene",
    "title_zh": "好脾气给错了人",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个把温柔给错对象的人",
        "functionSummary_zh": "你把耐心和好脾气都给了不爱的人，却对最亲的人发了脾气——别等失去才后悔。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "与亲近的人起摩擦后",
      "protagonist": "一个把温柔给错对象的人",
      "antagonist": "SITUATIONAL: 对外人客客气气，对最亲近的人却失了耐心",
      "centralConflict": "对外人客客气气，对最亲近的人却失了耐心",
      "stakes": "你把耐心和好脾气都给了不爱的人，却对最亲的人发了脾气——别等失去才后悔。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:妈妈说我不饿",
    "storyType": "viral-scene",
    "title_zh": "妈妈说我不饿",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个长大后才懂的子女",
        "functionSummary_zh": "\"我不饿、我不爱吃\"——妈妈这句话，骗了你二十年。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "回忆里的饭桌",
      "protagonist": "一个长大后才懂的子女",
      "antagonist": "SITUATIONAL: 想起小时候妈妈总把好吃的留给自己，说自己不爱吃",
      "centralConflict": "想起小时候妈妈总把好吃的留给自己，说自己不爱吃",
      "stakes": "\"我不饿、我不爱吃\"——妈妈这句话，骗了你二十年。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:家里都好",
    "storyType": "viral-scene",
    "title_zh": "家里都好",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个常听父母说\"都好\"的人",
        "functionSummary_zh": "那个总在电话里说\"家里都好\"的人，其实最盼你回家。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "回家后的发现",
      "protagonist": "一个常听父母说\"都好\"的人",
      "antagonist": "SITUATIONAL: 每次打电话，父母都说家里一切都好、别惦记",
      "centralConflict": "每次打电话，父母都说家里一切都好、别惦记",
      "stakes": "那个总在电话里说\"家里都好\"的人，其实最盼你回家。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:崩溃是静音的",
    "storyType": "viral-scene",
    "title_zh": "崩溃是静音的",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个独自消化压力的成年人",
        "functionSummary_zh": "成年人的崩溃都是静音的——在车里、在深夜、在厕所，哭完擦干继续扮演没事。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "车里、深夜、或独处的角落",
      "protagonist": "一个独自消化压力的成年人",
      "antagonist": "SITUATIONAL: 撑了一整天，终于一个人待着",
      "centralConflict": "撑了一整天，终于一个人待着",
      "stakes": "成年人的崩溃都是静音的——在车里、在深夜、在厕所，哭完擦干继续扮演没事。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:建议听三分",
    "storyType": "viral-scene",
    "title_zh": "建议听三分",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个被七嘴八舌包围的人",
        "functionSummary_zh": "别人的建议听三分就够了——日子是你过的，路得你自己选。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "被各种建议包围的场合",
      "protagonist": "一个被七嘴八舌包围的人",
      "antagonist": "SITUATIONAL: 做个决定，身边人各执一词、争相支招",
      "centralConflict": "做个决定，身边人各执一词、争相支招",
      "stakes": "别人的建议听三分就够了——日子是你过的，路得你自己选。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:情绪稳定是本事",
    "storyType": "viral-scene",
    "title_zh": "情绪稳定是本事",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个修炼情绪的职场人",
        "functionSummary_zh": "职场里，情绪稳定是顶级竞争力——遇事不慌、稳得住，比能力更稀缺。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "压力骤增的工作现场",
      "protagonist": "一个修炼情绪的职场人",
      "antagonist": "SITUATIONAL: 面对突发状况和压力，身边人乱作一团",
      "centralConflict": "面对突发状况和压力，身边人乱作一团",
      "stakes": "职场里，情绪稳定是顶级竞争力——遇事不慌、稳得住，比能力更稀缺。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:成年人的体面",
    "storyType": "viral-scene",
    "title_zh": "成年人的体面",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个心里通透的成年人",
        "functionSummary_zh": "看破不说破、心知不戳穿——给彼此留一步台阶，是成年人最后的体面。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "寻常的相处场景",
      "protagonist": "一个心里通透的成年人",
      "antagonist": "SITUATIONAL: 明明看穿了对方的小心思、小谎言",
      "centralConflict": "明明看穿了对方的小心思、小谎言",
      "stakes": "看破不说破、心知不戳穿——给彼此留一步台阶，是成年人最后的体面。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:报喜不报忧",
    "storyType": "viral-scene",
    "title_zh": "报喜不报忧",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个和父母互相隐瞒的人",
        "functionSummary_zh": "你对父母报喜不报忧，父母对你也是——这场双向的隐瞒，全是爱。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "一通寻常的电话",
      "protagonist": "一个和父母互相隐瞒的人",
      "antagonist": "SITUATIONAL: 电话里和父母互道\"一切都好\"",
      "centralConflict": "电话里和父母互道\"一切都好\"",
      "stakes": "你对父母报喜不报忧，父母对你也是——这场双向的隐瞒，全是爱。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:救急不救穷",
    "storyType": "viral-scene",
    "title_zh": "救急不救穷",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个想帮又怕被拖垮的人",
        "functionSummary_zh": "帮人救急可以，救穷不行——填不满的窟窿，只会把善意拖垮。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "纠结要不要继续帮的时刻",
      "protagonist": "一个想帮又怕被拖垮的人",
      "antagonist": "SITUATIONAL: 面对一个反复求助、却扶不起来的人",
      "centralConflict": "面对一个反复求助、却扶不起来的人",
      "stakes": "帮人救急可以，救穷不行——填不满的窟窿，只会把善意拖垮。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:来不及最痛",
    "storyType": "viral-scene",
    "title_zh": "来不及最痛",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个被遗憾击中的人",
        "functionSummary_zh": "人生最痛的不是失败，是\"来不及\"——别等失去，才懂得珍惜。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "某个怅然的瞬间",
      "protagonist": "一个被遗憾击中的人",
      "antagonist": "SITUATIONAL: 想起某件还没来得及做、某句还没来得及说的事",
      "centralConflict": "想起某件还没来得及做、某句还没来得及说的事",
      "stakes": "人生最痛的不是失败，是\"来不及\"——别等失去，才懂得珍惜。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:沉默的反击",
    "storyType": "viral-scene",
    "title_zh": "沉默的反击",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个被当众为难的人",
        "functionSummary_zh": "被当众羞辱却一个字不解释——沉默才是成年人最高级、最有力的反击。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "众目睽睽的场合",
      "protagonist": "一个被当众为难的人",
      "antagonist": "SITUATIONAL: 被人当众奚落、下不来台，所有目光都聚过来",
      "centralConflict": "被人当众奚落、下不来台，所有目光都聚过来",
      "stakes": "被当众羞辱却一个字不解释——沉默才是成年人最高级、最有力的反击。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:沉默的大多数",
    "storyType": "viral-scene",
    "title_zh": "沉默的大多数",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个学会观察的职场人",
        "functionSummary_zh": "会上不发声、不表态的人，往往最难琢磨——职场里，沉默也是一种策略。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "会议室",
      "protagonist": "一个学会观察的职场人",
      "antagonist": "SITUATIONAL: 开会时，总有人一言不发、不露立场",
      "centralConflict": "开会时，总有人一言不发、不露立场",
      "stakes": "会上不发声、不表态的人，往往最难琢磨——职场里，沉默也是一种策略。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:熬过去是故事",
    "storyType": "viral-scene",
    "title_zh": "熬过去是故事",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个正咬牙硬撑的人",
        "functionSummary_zh": "熬过去是故事，熬不过是事故——所有难关的意义，都在你撑住之后才显现。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "某段难熬的日子",
      "protagonist": "一个正咬牙硬撑的人",
      "antagonist": "SITUATIONAL: 卡在一个看不到头的难关里",
      "centralConflict": "卡在一个看不到头的难关里",
      "stakes": "熬过去是故事，熬不过是事故——所有难关的意义，都在你撑住之后才显现。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:父亲的沉默",
    "storyType": "viral-scene",
    "title_zh": "父亲的沉默",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个读懂父亲的子女",
        "functionSummary_zh": "父亲的爱藏在沉默里——不会说，只会默默把最好的留给你。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "与父亲相处的寻常时刻",
      "protagonist": "一个读懂父亲的子女",
      "antagonist": "SITUATIONAL: 父亲一如既往地不善言辞、板着脸",
      "centralConflict": "父亲一如既往地不善言辞、板着脸",
      "stakes": "父亲的爱藏在沉默里——不会说，只会默默把最好的留给你。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:父母是那堵墙",
    "storyType": "viral-scene",
    "title_zh": "父母是那堵墙",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}看着父母佝偻忙碌的背影，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "父母的白发、迟缓的动作、含糊的叮嘱，一一落进眼里",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；镜头定格在那个苍老却安心的背影上",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个人到中年的子女",
        "functionSummary_zh": "三十岁才懂——父母是挡在你和死神之间的那堵墙，墙塌了，你才直面苍老。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "与父母相处的寻常时刻",
      "protagonist": "一个人到中年的子女",
      "antagonist": "SITUATIONAL: 某个瞬间忽然意识到父母正在老去",
      "centralConflict": "某个瞬间忽然意识到父母正在老去",
      "stakes": "三十岁才懂——父母是挡在你和死神之间的那堵墙，墙塌了，你才直面苍老。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "philo:画的饼别当饭",
    "storyType": "viral-scene",
    "title_zh": "画的饼别当饭",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个差点被空头承诺哄住的人",
        "functionSummary_zh": "老板画的饼好看不能吃——落到合同和钱上的，才作数。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "谈话或开会的场合",
      "protagonist": "一个差点被空头承诺哄住的人",
      "antagonist": "SITUATIONAL: 听着领导描绘前景、许下各种承诺",
      "centralConflict": "听着领导描绘前景、许下各种承诺",
      "stakes": "老板画的饼好看不能吃——落到合同和钱上的，才作数。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:看他怎么对服务员",
    "storyType": "viral-scene",
    "title_zh": "看他怎么对服务员",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}和人吃饭，服务员上前点单，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "对方或颐指气使、或随手刁难，也或一句轻轻的\"谢谢\"",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；镜头定格在那个细节上",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个安静观察的人",
        "functionSummary_zh": "一顿饭就能看透一个人——他怎么对端盘子的、扫地的，就是他骨子里的教养。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "普通的餐厅",
      "protagonist": "一个安静观察的人",
      "antagonist": "SITUATIONAL: 和某人吃饭，看他怎么和服务员说话",
      "centralConflict": "和某人吃饭，看他怎么和服务员说话",
      "stakes": "一顿饭就能看透一个人——他怎么对端盘子的、扫地的，就是他骨子里的教养。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "philo:真朋友借钱不问归期",
    "storyType": "viral-scene",
    "title_zh": "真朋友借钱不问归期",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个曾被人接住过的人",
        "functionSummary_zh": "借你钱却不催不问的，是真把你当朋友——肯接住你窘迫的人，最珍贵。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "某个艰难的时刻",
      "protagonist": "一个曾被人接住过的人",
      "antagonist": "SITUATIONAL: 最难的时候开口借钱，对方二话不说就转了过来",
      "centralConflict": "最难的时候开口借钱，对方二话不说就转了过来",
      "stakes": "借你钱却不催不问的，是真把你当朋友——肯接住你窘迫的人，最珍贵。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:知道何时放手",
    "storyType": "viral-scene",
    "title_zh": "知道何时放手",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个在死磕中的人",
        "functionSummary_zh": "最难的不是坚持，是知道什么时候该放手——会止损的人，才走得远。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "纠结放不放手的时刻",
      "protagonist": "一个在死磕中的人",
      "antagonist": "SITUATIONAL: 死死攥着一段消耗自己的关系或目标不肯放",
      "centralConflict": "死死攥着一段消耗自己的关系或目标不肯放",
      "stakes": "最难的不是坚持，是知道什么时候该放手——会止损的人，才走得远。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:离职见人品",
    "storyType": "viral-scene",
    "title_zh": "离职见人品",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个观察公司做派的职场人",
        "functionSummary_zh": "看一家公司值不值得待，就看它怎么对离职的人——好聚好散，才是格局。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "有人离职的办公室",
      "protagonist": "一个观察公司做派的职场人",
      "antagonist": "SITUATIONAL: 看着同事提离职，公司的态度立刻变了脸",
      "centralConflict": "看着同事提离职，公司的态度立刻变了脸",
      "stakes": "看一家公司值不值得待，就看它怎么对离职的人——好聚好散，才是格局。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:站错了赛道",
    "storyType": "viral-scene",
    "title_zh": "站错了赛道",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个埋头苦干却没结果的人",
        "functionSummary_zh": "你不是不努力，是站错了赛道——方向错了，越使劲越远。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "反复碰壁后的沉思时刻",
      "protagonist": "一个埋头苦干却没结果的人",
      "antagonist": "SITUATIONAL: 拼了命努力，却始终不见起色",
      "centralConflict": "拼了命努力，却始终不见起色",
      "stakes": "你不是不努力，是站错了赛道——方向错了，越使劲越远。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:群里见冷暖",
    "storyType": "viral-scene",
    "title_zh": "群里见冷暖",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个发完消息等回复的人",
        "functionSummary_zh": "你混得好不好，朋友圈和群里就知道——同一句话，秒回还是已读不回，藏着真实的位置。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "深夜亮着屏幕的房间",
      "protagonist": "一个发完消息等回复的人",
      "antagonist": "SITUATIONAL: 在群里发了条消息，盯着屏幕等回应",
      "centralConflict": "在群里发了条消息，盯着屏幕等回应",
      "stakes": "你混得好不好，朋友圈和群里就知道——同一句话，秒回还是已读不回，藏着真实的位置。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:背后议论你的人",
    "storyType": "viral-scene",
    "title_zh": "背后议论你的人",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个被议论却不在意的人",
        "functionSummary_zh": "越没本事的人，越爱在背后嚼舌根——他们的嘴，丈量不了你的人生。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "流言传来的场景",
      "protagonist": "一个被议论却不在意的人",
      "antagonist": "SITUATIONAL: 听说有人在背后议论自己、说三道四",
      "centralConflict": "听说有人在背后议论自己、说三道四",
      "stakes": "越没本事的人，越爱在背后嚼舌根——他们的嘴，丈量不了你的人生。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:能力之外是关系",
    "storyType": "viral-scene",
    "title_zh": "能力之外是关系",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个只埋头钻业务的人",
        "functionSummary_zh": "能力是入场券，关系才是加速器——实力之外，别忽视人脉的分量。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "职场晋升的对照里",
      "protagonist": "一个只埋头钻业务的人",
      "antagonist": "SITUATIONAL: 专业过硬却升迁缓慢，看着会处关系的人步步高升",
      "centralConflict": "专业过硬却升迁缓慢，看着会处关系的人步步高升",
      "stakes": "能力是入场券，关系才是加速器——实力之外，别忽视人脉的分量。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:舍不得让你等",
    "storyType": "viral-scene",
    "title_zh": "舍不得让你等",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个曾被晾着等待的人",
        "functionSummary_zh": "真正爱你的人，舍不得让你等、让你哭、让你患得患失。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "等待中的醒悟",
      "protagonist": "一个曾被晾着等待的人",
      "antagonist": "SITUATIONAL: 回想总在等对方回消息、等对方有空",
      "centralConflict": "回想总在等对方回消息、等对方有空",
      "stakes": "真正爱你的人，舍不得让你等、让你哭、让你患得患失。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:落难见真情",
    "storyType": "viral-scene",
    "title_zh": "落难见真情",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个跌过谷底的人",
        "functionSummary_zh": "你站在高处时身边全是人，跌到谷底才看清谁愿意伸手——落难是最准的人心试金石。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "从喧嚣到冷清的转折",
      "protagonist": "一个跌过谷底的人",
      "antagonist": "SITUATIONAL: 从高处摔下来，热闹散尽，只剩冷清",
      "centralConflict": "从高处摔下来，热闹散尽，只剩冷清",
      "stakes": "你站在高处时身边全是人，跌到谷底才看清谁愿意伸手——落难是最准的人心试金石。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:被爱有恃无恐",
    "storyType": "viral-scene",
    "title_zh": "被爱有恃无恐",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个付出更多的人",
        "functionSummary_zh": "被偏爱的总有恃无恐——付出多的那个，往往最先低头、最易心软。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "一次冷战或矛盾里",
      "protagonist": "一个付出更多的人",
      "antagonist": "SITUATIONAL: 在关系里总是主动、总是先低头的那一方",
      "centralConflict": "在关系里总是主动、总是先低头的那一方",
      "stakes": "被偏爱的总有恃无恐——付出多的那个，往往最先低头、最易心软。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:角色互换",
    "storyType": "viral-scene",
    "title_zh": "角色互换",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个开始照顾父母的子女",
        "functionSummary_zh": "当年他牵你过马路，如今你扶他过马路——长大，就是和父母悄悄换了位置。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "马路边、或教父母用手机的场景",
      "protagonist": "一个开始照顾父母的子女",
      "antagonist": "SITUATIONAL: 搀着年迈的父母过马路、教他们用手机",
      "centralConflict": "搀着年迈的父母过马路、教他们用手机",
      "stakes": "当年他牵你过马路，如今你扶他过马路——长大，就是和父母悄悄换了位置。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:谁先敬你",
    "storyType": "viral-scene",
    "title_zh": "谁先敬你",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个在饭局里被敬酒的人",
        "functionSummary_zh": "酒桌上谁先放下手机、起身敬你——细节里藏着你在人心里的位置。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "微妙的饭桌",
      "protagonist": "一个在饭局里被敬酒的人",
      "antagonist": "SITUATIONAL: 一桌人各自低头玩手机，气氛微妙",
      "centralConflict": "一桌人各自低头玩手机，气氛微妙",
      "stakes": "酒桌上谁先放下手机、起身敬你——细节里藏着你在人心里的位置。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:谈钱才是深情",
    "storyType": "viral-scene",
    "title_zh": "谈钱才是深情",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}和对方面对一笔要分清的钱，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他主动把每一笔都摊开算明白，一码归一码",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；两人相视一笑，关系更稳了",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个把账算清的明白人",
        "functionSummary_zh": "谈钱不伤感情，含糊才伤——把账算清的关系，反而走得最久。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "谈合作或分账的场合",
      "protagonist": "一个把账算清的明白人",
      "antagonist": "SITUATIONAL: 和合伙人或朋友面对一笔需要分清的钱",
      "centralConflict": "和合伙人或朋友面对一笔需要分清的钱",
      "stakes": "谈钱不伤感情，含糊才伤——把账算清的关系，反而走得最久。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "philo:谈钱要趁早",
    "storyType": "viral-scene",
    "title_zh": "谈钱要趁早",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个吃过亏后学乖的人",
        "functionSummary_zh": "合作、人情，把钱谈在前头——丑话说在前面，比事后翻脸强一百倍。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "合作或托付之前",
      "protagonist": "一个吃过亏后学乖的人",
      "antagonist": "SITUATIONAL: 回想从前因不好意思谈钱而吃的亏",
      "centralConflict": "回想从前因不好意思谈钱而吃的亏",
      "stakes": "合作、人情，把钱谈在前头——丑话说在前面，比事后翻脸强一百倍。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:越大方越被当应该",
    "storyType": "viral-scene",
    "title_zh": "越大方越被当应该",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个习惯付出的老好人",
        "functionSummary_zh": "你越大方，别人越觉得理所当然——一旦停手，反成了你的不是。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "付出与被苛责的对照",
      "protagonist": "一个习惯付出的老好人",
      "antagonist": "SITUATIONAL: 长期对人慷慨，渐渐被当成了理所当然",
      "centralConflict": "长期对人慷慨，渐渐被当成了理所当然",
      "stakes": "你越大方，别人越觉得理所当然——一旦停手，反成了你的不是。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:那只空碗",
    "storyType": "viral-scene",
    "title_zh": "那只空碗",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}盛好饭，习惯性地多摆了一副碗筷，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "摆好才猛地想起，那个位置已经空了很久",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；镜头缓缓推近那只空碗",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个失去至亲的子女",
        "functionSummary_zh": "子欲养而亲不待——多出来的那副碗筷、空着的那个位置，是最痛的告别。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "家里的饭桌",
      "protagonist": "一个失去至亲的子女",
      "antagonist": "SITUATIONAL: 吃饭时，习惯性地多摆了一副碗筷",
      "centralConflict": "吃饭时，习惯性地多摆了一副碗筷",
      "stakes": "子欲养而亲不待——多出来的那副碗筷、空着的那个位置，是最痛的告别。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "philo:酒后吐真言",
    "storyType": "viral-scene",
    "title_zh": "酒后吐真言",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个清醒看着众人微醺的人",
        "functionSummary_zh": "酒过三巡，谁先放下手机敬你、谁说的话掏心窝——醉态里藏着最真的态度。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "酒过三巡的饭桌",
      "protagonist": "一个清醒看着众人微醺的人",
      "antagonist": "SITUATIONAL: 饭局到了尾声，几杯酒下肚，有人开始说真心话",
      "centralConflict": "饭局到了尾声，几杯酒下肚，有人开始说真心话",
      "stakes": "酒过三巡，谁先放下手机敬你、谁说的话掏心窝——醉态里藏着最真的态度。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:钱能解决的是小事",
    "storyType": "viral-scene",
    "title_zh": "钱能解决的是小事",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个被琐事困住后释然的人",
        "functionSummary_zh": "钱能解决的，都是小事——真正难的，是钱买不来的那些。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "焦头烂额后的释然",
      "protagonist": "一个被琐事困住后释然的人",
      "antagonist": "SITUATIONAL: 被一堆麻烦缠身，焦头烂额",
      "centralConflict": "被一堆麻烦缠身，焦头烂额",
      "stakes": "钱能解决的，都是小事——真正难的，是钱买不来的那些。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:锦上添花易",
    "storyType": "viral-scene",
    "title_zh": "锦上添花易",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "一个生活化的小瞬间：{place}，{hero}{conflict}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S2-synth-2",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "不用复杂运镜，镜头缓缓推近人物的神情，{twist}",
        "synthesizedFromTemplate": true
      },
      {
        "slotId": "S3-synth-3",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "结尾留白定格，打出或轻轻说出那句点透人心的话：「{line}」",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个经历过起落的人",
        "functionSummary_zh": "锦上添花的人挤破头，雪中送炭的没几个——落难时才看得清谁是真心。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "人来人往又骤然冷清的地方",
      "protagonist": "一个经历过起落的人",
      "antagonist": "SITUATIONAL: 风光时身边围满了人，落难时一个个悄悄退场",
      "centralConflict": "风光时身边围满了人，落难时一个个悄悄退场",
      "stakes": "锦上添花的人挤破头，雪中送炭的没几个——落难时才看得清谁是真心。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 3,
    "variantCount": 1
  },
  {
    "id": "philo:饭局见人品",
    "storyType": "viral-scene",
    "title_zh": "饭局见人品",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "philo",
    "categoryName": "人生哲理",
    "categoryEmoji": "🧠",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}坐在推杯换盏的饭局里，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "有人忙着敬领导、有人只顾自己夹菜，也有人默默给长辈添了茶",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；镜头最后停在那个安静添茶的人身上",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一个冷眼旁观的成年人",
        "functionSummary_zh": "酒桌是照妖镜——谁给你倒酒、谁等你伺候，人品高下一目了然。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "喧闹的饭局包间",
      "protagonist": "一个冷眼旁观的成年人",
      "antagonist": "SITUATIONAL: 坐在一桌推杯换盏的饭局上，看着众人敬酒、夹菜、说场面话",
      "centralConflict": "坐在一桌推杯换盏的饭局上，看着众人敬酒、夹菜、说场面话",
      "stakes": "酒桌是照妖镜——谁给你倒酒、谁等你伺候，人品高下一目了然。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "pro:军人归乡敬礼",
    "storyType": "viral-scene",
    "title_zh": "军人归乡敬礼",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pro",
    "categoryName": "职业高光",
    "categoryEmoji": "🚒",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}背着行囊风尘仆仆地走来，在门口停下脚步，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他整了整衣领站直身体，对着家的方向缓缓抬手，敬了一个标准而郑重的军礼",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；放下敬礼的手，他再也绷不住，几步冲上去把迎出来的家人紧紧抱住",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "退伍军人，旧军装，风尘仆仆",
        "functionSummary_zh": "克制的情绪最催泪——一个标准的敬礼、一个转身的拥抱，多年的思念全在那一个动作里。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "老旧小区的家门口",
      "protagonist": "退伍军人，旧军装，风尘仆仆",
      "antagonist": "SITUATIONAL: 三年未归，母亲不知道他今天退伍回家",
      "centralConflict": "三年未归，母亲不知道他今天退伍回家",
      "stakes": "克制的情绪最催泪——一个标准的敬礼、一个转身的拥抱，多年的思念全在那一个动作里。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "pro:医生急诊抢救",
    "storyType": "viral-scene",
    "title_zh": "医生急诊抢救",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pro",
    "categoryName": "职业高光",
    "categoryEmoji": "🚒",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{hero}冲进{place}扑到病床前开始胸外按压，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他一下一下用力按压，口中报着节奏，护士递来设备，全室屏息",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；他僵在原地盯着屏幕，等到那声规律的\"嘀——\"才缓缓直起身",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "40岁急诊医生，白大褂，神情专注",
        "functionSummary_zh": "\"心跳归零又被拉回来\"是天然的情绪过山车——仪器的滴声、按压的节奏、所有人屏息，最后那一下恢复的心跳就是爆点。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "灯光惨白的急诊抢救室",
      "protagonist": "40岁急诊医生，白大褂，神情专注",
      "antagonist": "SITUATIONAL: 病人心跳骤停，家属在门外崩溃",
      "centralConflict": "病人心跳骤停，家属在门外崩溃",
      "stakes": "\"心跳归零又被拉回来\"是天然的情绪过山车——仪器的滴声、按压的节奏、所有人屏息，最后那一下恢复的心跳就是爆点。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "pro:悬崖高空救援",
    "storyType": "viral-scene",
    "title_zh": "悬崖高空救援",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pro",
    "categoryName": "职业高光",
    "categoryEmoji": "🚒",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}系着绳索从崖顶速降，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他在峭壁上一点点接近被困者，伸手去够，狂风把两人吹得摇晃",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；他一把抓住被困者的手，用尽全力把人拉进怀里，绳索绷直缓缓升起",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "山地救援队员，橙色救援服，身姿矫健",
        "functionSummary_zh": "悬在半空、命悬一线的救援——把镜头吊在最危险的高度，每一秒都揪着观众的心。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "狂风呼啸的陡峭悬崖",
      "protagonist": "山地救援队员，橙色救援服，身姿矫健",
      "antagonist": "SITUATIONAL: 一名登山者被困在悬崖半壁，体力将尽随时可能坠落",
      "centralConflict": "一名登山者被困在悬崖半壁，体力将尽随时可能坠落",
      "stakes": "悬在半空、命悬一线的救援——把镜头吊在最危险的高度，每一秒都揪着观众的心。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "pro:护士夜班守护",
    "storyType": "viral-scene",
    "title_zh": "护士夜班守护",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pro",
    "categoryName": "职业高光",
    "categoryEmoji": "🚒",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "万籁俱寂的{place}，{hero}独自值守，借着微光逐床查看，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "她俯身为病人掖好被角，把哭闹的患儿抱在怀里轻轻摇晃",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；孩子终于在她怀里睡熟，她小心放回床上，直起酸痛的腰，窗外已蒙蒙亮",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "30岁夜班护士，浅蓝护士服，眼带倦意",
        "functionSummary_zh": "深夜病房里无人看见的温柔最戳人——别人都睡着时，是她在守着每一条生命体征。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "深夜只剩仪器微光的住院部病房",
      "protagonist": "30岁夜班护士，浅蓝护士服，眼带倦意",
      "antagonist": "SITUATIONAL: 一个患儿在深夜哭闹不止，整层病房只有她一个夜班护士",
      "centralConflict": "一个患儿在深夜哭闹不止，整层病房只有她一个夜班护士",
      "stakes": "深夜病房里无人看见的温柔最戳人——别人都睡着时，是她在守着每一条生命体征。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "pro:教师护学生",
    "storyType": "viral-scene",
    "title_zh": "教师护学生",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pro",
    "categoryName": "职业高光",
    "categoryEmoji": "🚒",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}里{hero}正在上课，突然地动山摇，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他大喊着指挥学生躲到桌下，自己张开双臂把最近的几个孩子死死护在身后",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；震动停止，尘土弥漫中他回头清点，发现孩子们都安然无恙",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "40岁中学老师，衬衫沾满灰尘",
        "functionSummary_zh": "危险来临时下意识把学生护在身后的那一下——师者的本能比任何说教都有力量。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "正在上课、突然摇晃的教室",
      "protagonist": "40岁中学老师，衬衫沾满灰尘",
      "antagonist": "SITUATIONAL: 上课时突发地震，天花板开始往下掉东西，学生惊慌失措",
      "centralConflict": "上课时突发地震，天花板开始往下掉东西，学生惊慌失措",
      "stakes": "危险来临时下意识把学生护在身后的那一下——师者的本能比任何说教都有力量。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "pro:暴雨送达",
    "storyType": "viral-scene",
    "title_zh": "暴雨送达",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pro",
    "categoryName": "职业高光",
    "categoryEmoji": "🚒",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "瓢泼大雨里，{hero}在{place}深一脚浅一脚地狂奔，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他一只手死死护住怀里的东西，另一只手抹了把脸，跳过一摊摊积水",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；他把还热乎、干干净净的东西递出去，自己浑身湿透往下滴水",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "28岁外卖骑手，雨衣湿透",
        "functionSummary_zh": "狼狈与坚持的反差最戳打工人——浑身湿透还护着餐箱准点送达，平凡里的拼命让人破防。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "瓢泼大雨的城市街头",
      "protagonist": "28岁外卖骑手，雨衣湿透",
      "antagonist": "SITUATIONAL: 暴雨倾盆，眼看就要超时，怀里还护着客人的餐",
      "centralConflict": "暴雨倾盆，眼看就要超时，怀里还护着客人的餐",
      "stakes": "狼狈与坚持的反差最戳打工人——浑身湿透还护着餐箱准点送达，平凡里的拼命让人破防。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "pro:机长紧急备降",
    "storyType": "viral-scene",
    "title_zh": "机长紧急备降",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pro",
    "categoryName": "职业高光",
    "categoryEmoji": "🚒",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，突发险情警报刺耳，{hero}双手紧握操纵杆，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他沉稳地下达每一道指令，一边安抚机组一边全力修正航向，机舱剧烈颠簸",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；机轮重重触地、稳稳滑行，机舱里爆发出劫后余生的掌声与哭声",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "机长，笔挺制服，沉稳威严",
        "functionSummary_zh": "万米高空命悬一线、靠一双手把所有人带回地面——驾驶舱里的沉稳就是最大的安全感。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "红灯频闪、警报大作的客机驾驶舱",
      "protagonist": "机长，笔挺制服，沉稳威严",
      "antagonist": "SITUATIONAL: 飞机突发故障警报大作，机舱剧烈颠簸，乘客一片惊慌",
      "centralConflict": "飞机突发故障警报大作，机舱剧烈颠簸，乘客一片惊慌",
      "stakes": "万米高空命悬一线、靠一双手把所有人带回地面——驾驶舱里的沉稳就是最大的安全感。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "pro:消防员火场救人",
    "storyType": "viral-scene",
    "title_zh": "消防员火场救人",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pro",
    "categoryName": "职业高光",
    "categoryEmoji": "🚒",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{hero}逆着撤离人流冲向{place}，浓烟翻涌、火光在身后跳动",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他俯身穿过浓烟，{conflict}；用湿毛巾捂住口鼻，一边摸索一边嘶吼搜寻",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；他用整个身体护住怀里的人，最后一步踉跄冲出火场，身后轰然炸开",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "35岁消防员，满身烟灰，眼神坚毅",
        "functionSummary_zh": "观众看的就是\"冲出火海那一秒\"的揪心——前因不用交代，把镜头怼在最危险的临界点，生死一线的张力自动拉满。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "浓烟弥漫的居民楼楼道",
      "protagonist": "35岁消防员，满身烟灰，眼神坚毅",
      "antagonist": "SITUATIONAL: 楼里还有一个被困的孩子，火势越来越猛",
      "centralConflict": "楼里还有一个被困的孩子，火势越来越猛",
      "stakes": "观众看的就是\"冲出火海那一秒\"的揪心——前因不用交代，把镜头怼在最危险的临界点，生死一线的张力自动拉满。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "pro:缉毒警收网",
    "storyType": "viral-scene",
    "title_zh": "缉毒警收网",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pro",
    "categoryName": "职业高光",
    "categoryEmoji": "🚒",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "昏暗的{place}，{hero}伪装成买家与毒贩接头，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他不动声色地拖延时间、确认证据，余光扫向埋伏的同伴等待信号",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；他猛地亮出警徽大喝一声，四面同伴破门而入，毒贩措手不及被擒",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "便衣缉毒警，痞气伪装下眼神锐利",
        "functionSummary_zh": "卧底多年、收网一刻的紧绷与释然——把镜头压在亮证那一秒，多年隐忍全在那一下爆发。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "昏暗压抑的废弃仓库交易点",
      "protagonist": "便衣缉毒警，痞气伪装下眼神锐利",
      "antagonist": "SITUATIONAL: 他伪装成买家与毒贩当面交易，身上没带枪，全靠拖延等收网信号",
      "centralConflict": "他伪装成买家与毒贩当面交易，身上没带枪，全靠拖延等收网信号",
      "stakes": "卧底多年、收网一刻的紧绷与释然——把镜头压在亮证那一秒，多年隐忍全在那一下爆发。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "pro:警察解救人质",
    "storyType": "viral-scene",
    "title_zh": "警察解救人质",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "pro",
    "categoryName": "职业高光",
    "categoryEmoji": "🚒",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}举枪贴墙与挟持人质的歹徒紧张对峙，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他一边低声谈判稳住对方，一边用眼角余光锁定破绽，肌肉绷成一根弦",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；他抓住破绽一个箭步上前，干净利落将歹徒按倒在地，人质瘫坐获救",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "30岁刑警，便装，沉稳锐利",
        "functionSummary_zh": "对峙到制服的临界点是最紧张的几秒——观众的心提到嗓子眼，制服的瞬间一秒释放。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "紧张对峙的事发现场",
      "protagonist": "30岁刑警，便装，沉稳锐利",
      "antagonist": "SITUATIONAL: 歹徒挟持人质情绪失控，僵持不下",
      "centralConflict": "歹徒挟持人质情绪失控，僵持不下",
      "stakes": "对峙到制服的临界点是最紧张的几秒——观众的心提到嗓子眼，制服的瞬间一秒释放。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "tear:久别重逢的拥抱",
    "storyType": "viral-scene",
    "title_zh": "久别重逢的拥抱",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "tear",
    "categoryName": "情感泪点",
    "categoryEmoji": "😢",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}站在人群中翘首等待，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他在涌动的人群里一遍遍搜寻，几次把别人错认成要等的人",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；那个朝思暮想的身影终于出现，他不顾一切奔过去紧紧抱住",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "翘首等待的年轻女子",
        "functionSummary_zh": "压抑后的释放最动人——等待越久，重逢那一下的拥抱越有冲击力。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "黄昏的火车站站台",
      "protagonist": "翘首等待的年轻女子",
      "antagonist": "SITUATIONAL: 在车站苦等多年未见的人",
      "centralConflict": "在车站苦等多年未见的人",
      "stakes": "压抑后的释放最动人——等待越久，重逢那一下的拥抱越有冲击力。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "tear:失散多年的重逢",
    "storyType": "viral-scene",
    "title_zh": "失散多年的重逢",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "tear",
    "categoryName": "情感泪点",
    "categoryEmoji": "😢",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}与一个面孔似曾相识的人远远相望，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他们一步步靠近，借着旧物、胎记或一句乳名小心翼翼地确认身份",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；确认彼此的刹那，多年的寻找有了答案，两人抱头痛哭",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "寻亲多年的中年人",
        "functionSummary_zh": "\"找了一辈子、终于相认\"的重逢最催泪——血缘的牵绊跨越时光，相拥那刻全是泪。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "人潮涌动的车站广场",
      "protagonist": "寻亲多年的中年人",
      "antagonist": "SITUATIONAL: 他和一个似曾相识的人远远相望，不敢确认那是失散多年的亲人",
      "centralConflict": "他和一个似曾相识的人远远相望，不敢确认那是失散多年的亲人",
      "stakes": "\"找了一辈子、终于相认\"的重逢最催泪——血缘的牵绊跨越时光，相拥那刻全是泪。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "tear:孩子第一次叫妈妈",
    "storyType": "viral-scene",
    "title_zh": "孩子第一次叫妈妈",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "tear",
    "categoryName": "情感泪点",
    "categoryEmoji": "😢",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}逗着怀里的孩子，{conflict}，一遍遍教着发音",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "她一次次重复着那两个字，孩子只是咿咿呀呀、含糊不清，她也不气馁",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；孩子忽然清晰地喊出那一声，她整个人怔住，随即泪如雨下",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "年轻妈妈，温柔疲惫",
        "functionSummary_zh": "成长的瞬间最珍贵——平凡却唯一，父母听到那一声时的破涕为笑直击人心。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "洒满阳光的婴儿房",
      "protagonist": "年轻妈妈，温柔疲惫",
      "antagonist": "SITUATIONAL: 年轻妈妈一遍遍教孩子说话，始终没回应",
      "centralConflict": "年轻妈妈一遍遍教孩子说话，始终没回应",
      "stakes": "成长的瞬间最珍贵——平凡却唯一，父母听到那一声时的破涕为笑直击人心。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "tear:宠物等主人回家",
    "storyType": "viral-scene",
    "title_zh": "宠物等主人回家",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "tear",
    "categoryName": "情感泪点",
    "categoryEmoji": "😢",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，一只宠物趴在门口，{conflict}，日复一日地守候",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "风吹雨打、日升日落，它始终守在那个位置，听到脚步声就抬头，又一次次失望趴下",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；那个熟悉的脚步声终于响起，它瞬间弹起来，疯狂摇尾飞奔扑进怀里",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "一只忠诚的金毛犬",
        "functionSummary_zh": "动物的忠诚最戳人——不懂离别却日日守候，重逢瞬间扑上来让人瞬间泪目。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "老旧小区的家门口",
      "protagonist": "一只忠诚的金毛犬",
      "antagonist": "SITUATIONAL: 狗狗每天守在门口，主人出差许久未归",
      "centralConflict": "狗狗每天守在门口，主人出差许久未归",
      "stakes": "动物的忠诚最戳人——不懂离别却日日守候，重逢瞬间扑上来让人瞬间泪目。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "tear:康复出院那一天",
    "storyType": "viral-scene",
    "title_zh": "康复出院那一天",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "tear",
    "categoryName": "情感泪点",
    "categoryEmoji": "😢",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}慢慢收拾着行李准备出院，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "在家人的搀扶下，他一步一步缓慢却坚定地走向医院大门，阳光越来越近",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；他终于踏出医院大门，阳光洒满全身，深深吸了一口外面的空气",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "大病初愈的人，虚弱却挺直身子",
        "functionSummary_zh": "\"挺过最难的时刻、重见阳光\"的释然最暖——走出医院门的那一步，是对所有坚持的回报。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "阳光照进的医院大厅",
      "protagonist": "大病初愈的人，虚弱却挺直身子",
      "antagonist": "SITUATIONAL: 他在家人搀扶下虚弱却坚定地走向医院大门，挺过了最难的日子",
      "centralConflict": "他在家人搀扶下虚弱却坚定地走向医院大门，挺过了最难的日子",
      "stakes": "\"挺过最难的时刻、重见阳光\"的释然最暖——走出医院门的那一步，是对所有坚持的回报。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "tear:机场车站送别",
    "storyType": "viral-scene",
    "title_zh": "机场车站送别",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "tear",
    "categoryName": "情感泪点",
    "categoryEmoji": "😢",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}和亲人即将分别，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "到了该走的时候，他们拥抱、拍肩，互相说着保重，手却迟迟不愿松开",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；走过闸口的那一刻他回头望了一眼，两人的眼泪同时决堤",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "背着行囊的年轻人",
        "functionSummary_zh": "离别的克制最催泪——不用台词，一个回头、一次挥手，所有不舍都在那个动作里。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "人来人往的机场到达口",
      "protagonist": "背着行囊的年轻人",
      "antagonist": "SITUATIONAL: 他要远行多年，亲人强忍不舍",
      "centralConflict": "他要远行多年，亲人强忍不舍",
      "stakes": "离别的克制最催泪——不用台词，一个回头、一次挥手，所有不舍都在那个动作里。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "tear:毕业那天的不舍",
    "storyType": "viral-scene",
    "title_zh": "毕业那天的不舍",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "tear",
    "categoryName": "情感泪点",
    "categoryEmoji": "😢",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}和同窗们穿着学位服，{conflict}，强笑着说着再见",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他们抛起学位帽、互相在衣服上签名、用力拥抱，假装这只是普通的一天",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；最后一张合影定格的瞬间，所有人都红了眼，青春就此散场",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "毕业生，学位服，笑里带泪",
        "functionSummary_zh": "\"青春散场\"的集体不舍最戳人——一个拥抱、一次合影，就把整段青春定格成永远。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "阳光明媚的大学校园",
      "protagonist": "毕业生，学位服，笑里带泪",
      "antagonist": "SITUATIONAL: 穿着学位服的他们强笑着道别，假装这只是普通的一天",
      "centralConflict": "穿着学位服的他们强笑着道别，假装这只是普通的一天",
      "stakes": "\"青春散场\"的集体不舍最戳人——一个拥抱、一次合影，就把整段青春定格成永远。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "tear:病房最后的告别",
    "storyType": "viral-scene",
    "title_zh": "病房最后的告别",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "tear",
    "categoryName": "情感泪点",
    "categoryEmoji": "😢",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "安静的{place}，{hero}守在病床边握着亲人的手，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他凑近轻声说着话，把想说的、没来得及说的，一句句说给对方听",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；那只手缓缓失去力气，他再也撑不住，伏在床边失声痛哭",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "守在床边的中年子女",
        "functionSummary_zh": "\"来不及\"是最痛的情绪——握住的手、说不出口的话，把遗憾推到顶点。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "安静的医院病房",
      "protagonist": "守在床边的中年子女",
      "antagonist": "SITUATIONAL: 老人时日无多，子女守在床边说不出话",
      "centralConflict": "老人时日无多，子女守在床边说不出话",
      "stakes": "\"来不及\"是最痛的情绪——握住的手、说不出口的话，把遗憾推到顶点。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "tear:空巢父母的饭桌",
    "storyType": "viral-scene",
    "title_zh": "空巢父母的饭桌",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "tear",
    "categoryName": "情感泪点",
    "categoryEmoji": "😢",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，年迈的{hero}系着围裙忙活，{conflict}，做了满满一桌子菜",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他细心摆好碗筷，一次次走到门口张望、看手机，菜渐渐凉了",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；就在他默默收拾时，门铃突然响起，子女风尘仆仆赶了回来",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "年迈的父亲/母亲，系着围裙",
        "functionSummary_zh": "\"为一个人做一桌菜\"的孤独最戳心——子女不在身边，那桌饭和那个等待的身影让人破防。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "暖黄灯光的老房子厨房",
      "protagonist": "年迈的父亲/母亲，系着围裙",
      "antagonist": "SITUATIONAL: 他做了满满一桌菜，一次次走到门口张望，子女却迟迟没回来",
      "centralConflict": "他做了满满一桌菜，一次次走到门口张望，子女却迟迟没回来",
      "stakes": "\"为一个人做一桌菜\"的孤独最戳心——子女不在身边，那桌饭和那个等待的身影让人破防。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "tear:老兵的旧照片",
    "storyType": "viral-scene",
    "title_zh": "老兵的旧照片",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "tear",
    "categoryName": "情感泪点",
    "categoryEmoji": "😢",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，年迈的{hero}颤巍巍地捧着一张泛黄的旧照片，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他用粗糙的手指一遍遍摩挲照片上的面孔，嘴里念叨着只有自己懂的名字",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；他缓缓站起，对着照片举起颤抖的手，敬了一个迟到了几十年的军礼",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "白发苍苍的老兵，神情恍惚",
        "functionSummary_zh": "\"一张旧照、一段被时间封存的情\"最催泪——白发苍苍时的一个敬礼，胜过千言万语。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "洒进暖光的老屋客厅",
      "protagonist": "白发苍苍的老兵，神情恍惚",
      "antagonist": "SITUATIONAL: 年迈的他独自捧着一张泛黄旧照，凝视着早已离去的战友",
      "centralConflict": "年迈的他独自捧着一张泛黄旧照，凝视着早已离去的战友",
      "stakes": "\"一张旧照、一段被时间封存的情\"最催泪——白发苍苍时的一个敬礼，胜过千言万语。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "thrill:收到自己发的消息",
    "storyType": "viral-scene",
    "title_zh": "收到自己发的消息",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "thrill",
    "categoryName": "悬念惊悚",
    "categoryEmoji": "👻",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}收到一条诡异的消息，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "盯着手机发懵的年轻人",
        "functionSummary_zh": "手机里收到一条\"自己\"发来、却毫无印象的消息——身份错位的细思极恐。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "安静房间里、唯有屏幕亮着",
      "protagonist": "盯着手机发懵的年轻人",
      "antagonist": "SITUATIONAL: 他的手机收到一条消息，发件人竟是\"自己\"",
      "centralConflict": "他的手机收到一条消息，发件人竟是\"自己\"",
      "stakes": "手机里收到一条\"自己\"发来、却毫无印象的消息——身份错位的细思极恐。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "thrill:深夜的敲门声",
    "storyType": "viral-scene",
    "title_zh": "深夜的敲门声",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "thrill",
    "categoryName": "悬念惊悚",
    "categoryEmoji": "👻",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "深夜的{place}，独自在家的{hero}，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "独居在家的年轻人",
        "functionSummary_zh": "明明独居，深夜门外却传来敲门声和熟悉的呼唤——最日常的场景藏最深的恐惧。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "深夜寂静的出租屋",
      "protagonist": "独居在家的年轻人",
      "antagonist": "SITUATIONAL: 独居的他深夜听见门外传来敲门声和熟悉的呼唤",
      "centralConflict": "独居的他深夜听见门外传来敲门声和熟悉的呼唤",
      "stakes": "明明独居，深夜门外却传来敲门声和熟悉的呼唤——最日常的场景藏最深的恐惧。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "thrill:照片里的异样",
    "storyType": "viral-scene",
    "title_zh": "照片里的异样",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "thrill",
    "categoryName": "悬念惊悚",
    "categoryEmoji": "👻",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}翻看一张旧照片，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "端详旧照的年轻人",
        "functionSummary_zh": "一张普通合影，越看越觉得哪里不对——\"二刷找细节\"的悬念玩法，传播力极强。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "昏黄台灯下的书桌前",
      "protagonist": "端详旧照的年轻人",
      "antagonist": "SITUATIONAL: 他翻看一张普通的旧合影，总觉得哪里说不出地不对",
      "centralConflict": "他翻看一张普通的旧合影，总觉得哪里说不出地不对",
      "stakes": "一张普通合影，越看越觉得哪里不对——\"二刷找细节\"的悬念玩法，传播力极强。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "thrill:电梯停了却不开门",
    "storyType": "viral-scene",
    "title_zh": "电梯停了却不开门",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "thrill",
    "categoryName": "悬念惊悚",
    "categoryEmoji": "👻",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "深夜，{hero}独自乘电梯，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "深夜独自乘梯的人",
        "functionSummary_zh": "深夜电梯停在某一层，门却迟迟不开，门缝外似乎有什么——封闭空间的窒息感拉满。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "深夜空荡的写字楼电梯",
      "protagonist": "深夜独自乘梯的人",
      "antagonist": "SITUATIONAL: 深夜独自乘电梯，电梯停在某一层，门却迟迟不开",
      "centralConflict": "深夜独自乘电梯，电梯停在某一层，门却迟迟不开",
      "stakes": "深夜电梯停在某一层，门却迟迟不开，门缝外似乎有什么——封闭空间的窒息感拉满。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "thrill:监控里的多余身影",
    "storyType": "viral-scene",
    "title_zh": "监控里的多余身影",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "thrill",
    "categoryName": "悬念惊悚",
    "categoryEmoji": "👻",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 1,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-synth-1",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}回看监控录像，{conflict}，{twist}",
        "synthesizedFromTemplate": true
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "回看监控的住户",
        "functionSummary_zh": "回看监控，画面角落出现一个本不该存在的影子——以为安全的地方藏着不安。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "深夜的家中、屏幕幽光映脸",
      "protagonist": "回看监控的住户",
      "antagonist": "SITUATIONAL: 他回看家中监控，画面里本该空无一人",
      "centralConflict": "他回看家中监控，画面里本该空无一人",
      "stakes": "回看监控，画面角落出现一个本不该存在的影子——以为安全的地方藏着不安。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "absent",
    "invariantSummary": {
      "stagesLengthRange": false,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 5,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot",
      "pro field is null — 3-phase breakdown SYNTHESIZED from act template"
    ],
    "patternFingerprint": "linear|1|1|linear",
    "proWasNull": true,
    "synthesizedStageCount": 1,
    "variantCount": 1
  },
  {
    "id": "thrill:镜中多了一个人",
    "storyType": "viral-scene",
    "title_zh": "镜中多了一个人",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "thrill",
    "categoryName": "悬念惊悚",
    "categoryEmoji": "👻",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}对着镜子做着再平常不过的事，{conflict}，一切看起来毫无异样",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "画面继续维持日常感，镜头不动声色地、一点点逼近镜中的影像",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；镜子里，本该只有他一个人的画面，背后悄然多出一个模糊身影",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "浑然不觉的普通人",
        "functionSummary_zh": "日常画面里，镜子里悄悄多出一个不该有的身影——\"细思极恐\"的经典玩法，看完忍不住倒回去找。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "再平常不过的家中卫生间/卧室",
      "protagonist": "浑然不觉的普通人",
      "antagonist": "SITUATIONAL: 他对着镜子做着平常的事，一切看起来毫无异样",
      "centralConflict": "他对着镜子做着平常的事，一切看起来毫无异样",
      "stakes": "日常画面里，镜子里悄悄多出一个不该有的身影——\"细思极恐\"的经典玩法，看完忍不住倒回去找。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "twist:丑小鸭惊艳登场",
    "storyType": "viral-scene",
    "title_zh": "丑小鸭惊艳登场",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "twist",
    "categoryName": "反转结局",
    "categoryEmoji": "🔄",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}打扮朴素地待在角落，{conflict}，没人多看一眼",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "有人当面轻视或看不起他，他没有反驳，只是默默做着准备",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；他焕然一新地登场，光彩照人，全场的目光齐刷刷被吸过来",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "起初朴素低调的年轻人",
        "functionSummary_zh": "\"之前被无视、之后惊艳全场\"的蜕变反转最解气——落差越大，登场那一刻越炸。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "灯光璀璨的活动现场",
      "protagonist": "起初朴素低调的年轻人",
      "antagonist": "SITUATIONAL: 他打扮朴素地待在角落，被人轻视、没人多看一眼",
      "centralConflict": "他打扮朴素地待在角落，被人轻视、没人多看一眼",
      "stakes": "\"之前被无视、之后惊艳全场\"的蜕变反转最解气——落差越大，登场那一刻越炸。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "twist:乞丐其实是富豪",
    "storyType": "viral-scene",
    "title_zh": "乞丐其实是富豪",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "twist",
    "categoryName": "反转结局",
    "categoryEmoji": "🔄",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}衣着寒酸地站在人群里，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "店员皱眉驱赶他，路人投来轻视的目光，他默默退到一边",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；他不慌不忙掏出那样东西，所有刚才轻视他的人当场愣住",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "衣着寒酸的男子，深藏不露",
        "functionSummary_zh": "身份落差越大越爽——前面所有人的轻视，都成了结尾反转的铺垫，最后一秒的反差让人想转发。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "灯火通明的高档商场",
      "protagonist": "衣着寒酸的男子，深藏不露",
      "antagonist": "SITUATIONAL: 他衣衫褴褛被店员驱赶，旁人投来鄙夷",
      "centralConflict": "他衣衫褴褛被店员驱赶，旁人投来鄙夷",
      "stakes": "身份落差越大越爽——前面所有人的轻视，都成了结尾反转的铺垫，最后一秒的反差让人想转发。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "twist:其实一直在身边",
    "storyType": "viral-scene",
    "title_zh": "其实一直在身边",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "twist",
    "categoryName": "反转结局",
    "categoryEmoji": "🔄",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}焦急地四处寻找，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他跑遍各处一无所获，渐渐失望，停下脚步喘着气",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；他蓦然回头，发现要找的人或答案一直就在最近、最熟悉的地方",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "焦急寻找的年轻人",
        "functionSummary_zh": "\"苦苦寻找、原来近在咫尺\"的反转最戳——绕了一大圈，答案一直在最熟悉的地方。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "华灯初上的街角",
      "protagonist": "焦急寻找的年轻人",
      "antagonist": "SITUATIONAL: 他焦急地四处寻找某个人，跑遍各处一无所获",
      "centralConflict": "他焦急地四处寻找某个人，跑遍各处一无所获",
      "stakes": "\"苦苦寻找、原来近在咫尺\"的反转最戳——绕了一大圈，答案一直在最熟悉的地方。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "twist:冷漠路人的反转",
    "storyType": "viral-scene",
    "title_zh": "冷漠路人的反转",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "twist",
    "categoryName": "反转结局",
    "categoryEmoji": "🔄",
    "family": "反转结局",
    "familyKey": "identity-flip",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}遇到困难，{conflict}，路人匆匆而过无人停留",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "一个个人从他身边走过、视而不见，他低下头几乎要放弃",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；一个最不起眼的人默默蹲下来帮他，原来善意一直都在",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "遇到困难的普通人，神情无助",
        "functionSummary_zh": "\"以为没人帮、其实有人默默做\"的反转最暖——前面凉透人心，结尾一下焐热。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "人潮匆匆的城市街头",
      "protagonist": "遇到困难的普通人，神情无助",
      "antagonist": "SITUATIONAL: 他在街头遇到困难，路人一个个匆匆走过、视而不见",
      "centralConflict": "他在街头遇到困难，路人一个个匆匆走过、视而不见",
      "stakes": "\"以为没人帮、其实有人默默做\"的反转最暖——前面凉透人心，结尾一下焐热。",
      "theme": "INFERRED: 反转结局 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "twist:卧底揭面",
    "storyType": "viral-scene",
    "title_zh": "卧底揭面",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "twist",
    "categoryName": "反转结局",
    "categoryEmoji": "🔄",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，紧张对峙中，{conflict}，所有人都以为{hero}是敌方一员",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "局势剑拔弩张，他缓缓抬头，与某个方向交换了一个极隐蔽的眼神",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；他亮出证件或信物，所有人才惊觉他的真实立场，局势瞬间逆转",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "冷峻的黑衣男子，眼神深沉",
        "functionSummary_zh": "身份反转 + 紧张感双重叠加——一直以为是自己人，揭面瞬间剧情彻底翻转。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "昏暗紧张的仓库",
      "protagonist": "冷峻的黑衣男子，眼神深沉",
      "antagonist": "SITUATIONAL: 对峙到最紧张处，所有人都以为他是敌方",
      "centralConflict": "对峙到最紧张处，所有人都以为他是敌方",
      "stakes": "身份反转 + 紧张感双重叠加——一直以为是自己人，揭面瞬间剧情彻底翻转。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "twist:看似严厉其实深爱",
    "storyType": "viral-scene",
    "title_zh": "看似严厉其实深爱",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "twist",
    "categoryName": "反转结局",
    "categoryEmoji": "🔄",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{hero}板着脸，{conflict}，语气生硬不近人情",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他甩下几句严厉的话转身离开，留下对方红着眼眶愣在原地",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；镜头揭开他背地里默默做的一切，原来那些冷脸全是藏起来的爱",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "不苟言笑的中年父亲",
        "functionSummary_zh": "\"刀子嘴豆腐心\"永远戳人——前面的冷脸是误导，结尾的温柔反转直接破防。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "昏黄灯光的老房子客厅",
      "protagonist": "不苟言笑的中年父亲",
      "antagonist": "SITUATIONAL: 他一路板着脸训斥，让人以为冷漠无情",
      "centralConflict": "他一路板着脸训斥，让人以为冷漠无情",
      "stakes": "\"刀子嘴豆腐心\"永远戳人——前面的冷脸是误导，结尾的温柔反转直接破防。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "twist:遗物里的真相",
    "storyType": "viral-scene",
    "title_zh": "遗物里的真相",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "twist",
    "categoryName": "反转结局",
    "categoryEmoji": "🔄",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}默默整理着逝去亲人的遗物，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "他翻出一叠旧信、旧照片或攒下的东西，动作慢慢停了下来",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；原来那些年的严厉与疏远背后，藏着从未说出口的牵挂与爱",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "中年子女，神情沉静",
        "functionSummary_zh": "\"斯人已逝、真相方明\"的反转最催泪——误会了一辈子，最后在遗物里读懂了爱。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "洒进夕光的老房子",
      "protagonist": "中年子女，神情沉静",
      "antagonist": "SITUATIONAL: 他整理逝去亲人的遗物，心里还存着多年的隔阂与怨",
      "centralConflict": "他整理逝去亲人的遗物，心里还存着多年的隔阂与怨",
      "stakes": "\"斯人已逝、真相方明\"的反转最催泪——误会了一辈子，最后在遗物里读懂了爱。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "twist:错怪好人后真相大白",
    "storyType": "viral-scene",
    "title_zh": "错怪好人后真相大白",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "twist",
    "categoryName": "反转结局",
    "categoryEmoji": "🔄",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}被众人误解指责，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "众人你一言我一语地数落，他始终低头沉默，没有为自己争辩一句",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；监控或证据还原真相，原来他一直在默默帮人，指责的人纷纷羞愧低头",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "沉默的年轻男子，神情坦然",
        "functionSummary_zh": "愧疚感是强情绪——观众跟着一起错怪，真相揭开时的反转和歉意一起涌上来。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "人来人往的便利店门口",
      "protagonist": "沉默的年轻男子，神情坦然",
      "antagonist": "SITUATIONAL: 众人一口咬定是他偷的，他沉默不辩",
      "centralConflict": "众人一口咬定是他偷的，他沉默不辩",
      "stakes": "愧疚感是强情绪——观众跟着一起错怪，真相揭开时的反转和歉意一起涌上来。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "twist:错认的双胞胎",
    "storyType": "viral-scene",
    "title_zh": "错认的双胞胎",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "twist",
    "categoryName": "反转结局",
    "categoryEmoji": "🔄",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，有人热情地认出{hero}并攀谈，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "对方越说越亲热，他越听越懵，两人鸡同鸭讲却谁都没察觉不对",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；和他长得一模一样的另一个人出现，所有人才反应过来认错了人",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "普通青年，一脸茫然",
        "functionSummary_zh": "\"以为是A其实是B\"的身份错位最妙——观众和剧中人一起被骗，揭穿瞬间恍然大悟。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "人来人往的商场中庭",
      "protagonist": "普通青年，一脸茫然",
      "antagonist": "SITUATIONAL: 一个陌生人热情地认出他、拉着他叙旧，他却完全不认识对方",
      "centralConflict": "一个陌生人热情地认出他、拉着他叙旧，他却完全不认识对方",
      "stakes": "\"以为是A其实是B\"的身份错位最妙——观众和剧中人一起被骗，揭穿瞬间恍然大悟。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  },
  {
    "id": "twist:隐藏大佬露真身",
    "storyType": "viral-scene",
    "title_zh": "隐藏大佬露真身",
    "title_en": "",
    "genre": "",
    "tagline": "",
    "categoryKey": "twist",
    "categoryName": "反转结局",
    "categoryEmoji": "🔄",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "linear",
      "detail": "linear 15-second single-shot — no choices, no lanes, no branches"
    },
    "stageCount": 3,
    "archetypeCount": 1,
    "characterCount": null,
    "stageRoles": [
      "setup",
      "rising-action",
      "climax"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-open",
        "role": "setup",
        "label_zh": "开场",
        "triggerConstraint_zh": "{place}，{hero}看起来平平无奇甚至被轻视，{conflict}",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-dev",
        "role": "rising-action",
        "label_zh": "发展",
        "triggerConstraint_zh": "局面陷入僵局或有人嚣张挑衅，他不动声色地看着，仿佛一切尽在预料",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-climax",
        "role": "climax",
        "label_zh": "爆点",
        "triggerConstraint_zh": "{twist}；关键时刻他一句话或一个动作定乾坤，真实身份曝光，全场震惊",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "低调的中年男子，不起眼",
        "functionSummary_zh": "\"扫地僧\"式反转最爽——越低调越平凡，揭面那一刻的反差冲击越强。"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "气派的公司会议室",
      "protagonist": "低调的中年男子，不起眼",
      "antagonist": "SITUATIONAL: 他被当成打杂的处处被使唤",
      "centralConflict": "他被当成打杂的处处被使唤",
      "stakes": "\"扫地僧\"式反转最爽——越低调越平凡，揭面那一刻的反差冲击越强。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "situational",
    "climaxMode": "single",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=linear is NOT yet a standard framework value",
    "allGaps": [
      "branchingType=linear is NOT yet a standard framework value",
      "only 1 archetype present (the hero from example.h) — framework expects multiple",
      "15-second runtime constraint has no framework slot",
      "'why' field (1-sentence rationale) has no framework slot"
    ],
    "patternFingerprint": "linear|3|1|linear",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 1
  }
] as const

export const VIRAL_SCENE_VARIANTS: VariantInstance[] = [
  {
    "variantId": "comedy:单口抖包袱#linear",
    "storyId": "comedy:单口抖包袱",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "单口抖包袱"
  },
  {
    "variantId": "comedy:反差人设段子#linear",
    "storyId": "comedy:反差人设段子",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "反差人设段子"
  },
  {
    "variantId": "comedy:吐槽打工人日常#linear",
    "storyId": "comedy:吐槽打工人日常",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "吐槽打工人日常"
  },
  {
    "variantId": "comedy:谐音梗冷笑话#linear",
    "storyId": "comedy:谐音梗冷笑话",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "谐音梗冷笑话"
  },
  {
    "variantId": "guofeng:战甲披风出征#linear",
    "storyId": "guofeng:战甲披风出征",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "战甲披风出征"
  },
  {
    "variantId": "guofeng:拔剑出鞘#linear",
    "storyId": "guofeng:拔剑出鞘",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "拔剑出鞘"
  },
  {
    "variantId": "guofeng:提灯夜行#linear",
    "storyId": "guofeng:提灯夜行",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "提灯夜行"
  },
  {
    "variantId": "guofeng:水袖独舞#linear",
    "storyId": "guofeng:水袖独舞",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "水袖独舞"
  },
  {
    "variantId": "guofeng:烟雨撑伞#linear",
    "storyId": "guofeng:烟雨撑伞",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "烟雨撑伞"
  },
  {
    "variantId": "guofeng:红衣回眸#linear",
    "storyId": "guofeng:红衣回眸",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "红衣回眸"
  },
  {
    "variantId": "inspire:受尽嘲讽后证明自己#linear",
    "storyId": "inspire:受尽嘲讽后证明自己",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "受尽嘲讽后证明自己"
  },
  {
    "variantId": "inspire:替补绝杀#linear",
    "storyId": "inspire:替补绝杀",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "替补绝杀"
  },
  {
    "variantId": "inspire:濒临破产再翻盘#linear",
    "storyId": "inspire:濒临破产再翻盘",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "濒临破产再翻盘"
  },
  {
    "variantId": "inspire:病床上重新站起#linear",
    "storyId": "inspire:病床上重新站起",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "病床上重新站起"
  },
  {
    "variantId": "inspire:草根选手封神#linear",
    "storyId": "inspire:草根选手封神",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "草根选手封神"
  },
  {
    "variantId": "inspire:落榜生逆袭#linear",
    "storyId": "inspire:落榜生逆袭",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "落榜生逆袭"
  },
  {
    "variantId": "pet:小奶猫第一次睁眼#linear",
    "storyId": "pet:小奶猫第一次睁眼",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "小奶猫第一次睁眼"
  },
  {
    "variantId": "pet:流浪猫被收养#linear",
    "storyId": "pet:流浪猫被收养",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "流浪猫被收养"
  },
  {
    "variantId": "pet:狗狗护主#linear",
    "storyId": "pet:狗狗护主",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "狗狗护主"
  },
  {
    "variantId": "pet:老狗最后的告别#linear",
    "storyId": "pet:老狗最后的告别",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "老狗最后的告别"
  },
  {
    "variantId": "pet:重伤动物奇迹康复#linear",
    "storyId": "pet:重伤动物奇迹康复",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "重伤动物奇迹康复"
  },
  {
    "variantId": "pet:雨夜救回小奶猫#linear",
    "storyId": "pet:雨夜救回小奶猫",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "雨夜救回小奶猫"
  },
  {
    "variantId": "philo:一开口就是借钱#linear",
    "storyId": "philo:一开口就是借钱",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "一开口就是借钱"
  },
  {
    "variantId": "philo:不联系是不想#linear",
    "storyId": "philo:不联系是不想",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "不联系是不想"
  },
  {
    "variantId": "philo:中年男人的车#linear",
    "storyId": "philo:中年男人的车",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "中年男人的车"
  },
  {
    "variantId": "philo:人生尚有来处#linear",
    "storyId": "philo:人生尚有来处",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "人生尚有来处"
  },
  {
    "variantId": "philo:人走茶凉#linear",
    "storyId": "philo:人走茶凉",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "人走茶凉"
  },
  {
    "variantId": "philo:从不让你为难#linear",
    "storyId": "philo:从不让你为难",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "从不让你为难"
  },
  {
    "variantId": "philo:会哭的孩子有奶吃#linear",
    "storyId": "philo:会哭的孩子有奶吃",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "会哭的孩子有奶吃"
  },
  {
    "variantId": "philo:你出事那天#linear",
    "storyId": "philo:你出事那天",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "你出事那天"
  },
  {
    "variantId": "philo:你受的苦没人替#linear",
    "storyId": "philo:你受的苦没人替",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "你受的苦没人替"
  },
  {
    "variantId": "philo:你的底气#linear",
    "storyId": "philo:你的底气",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "你的底气"
  },
  {
    "variantId": "philo:你的顶点别人的起点#linear",
    "storyId": "philo:你的顶点别人的起点",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "你的顶点别人的起点"
  },
  {
    "variantId": "philo:借钱见人心#linear",
    "storyId": "philo:借钱见人心",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "借钱见人心"
  },
  {
    "variantId": "philo:免费的最贵#linear",
    "storyId": "philo:免费的最贵",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "免费的最贵"
  },
  {
    "variantId": "philo:分寸感#linear",
    "storyId": "philo:分寸感",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "分寸感"
  },
  {
    "variantId": "philo:删人比拉黑更狠#linear",
    "storyId": "philo:删人比拉黑更狠",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "删人比拉黑更狠"
  },
  {
    "variantId": "philo:别交底的代价#linear",
    "storyId": "philo:别交底的代价",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "别交底的代价"
  },
  {
    "variantId": "philo:别把同事当朋友#linear",
    "storyId": "philo:别把同事当朋友",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "别把同事当朋友"
  },
  {
    "variantId": "philo:别露富#linear",
    "storyId": "philo:别露富",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "别露富"
  },
  {
    "variantId": "philo:努力要被看见#linear",
    "storyId": "philo:努力要被看见",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "努力要被看见"
  },
  {
    "variantId": "philo:合适比喜欢长久#linear",
    "storyId": "philo:合适比喜欢长久",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "合适比喜欢长久"
  },
  {
    "variantId": "philo:喜欢很贵#linear",
    "storyId": "philo:喜欢很贵",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "喜欢很贵"
  },
  {
    "variantId": "philo:喜欢藏不住#linear",
    "storyId": "philo:喜欢藏不住",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "喜欢藏不住"
  },
  {
    "variantId": "philo:失望攒够了#linear",
    "storyId": "philo:失望攒够了",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "失望攒够了"
  },
  {
    "variantId": "philo:好脾气给错了人#linear",
    "storyId": "philo:好脾气给错了人",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "好脾气给错了人"
  },
  {
    "variantId": "philo:妈妈说我不饿#linear",
    "storyId": "philo:妈妈说我不饿",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "妈妈说我不饿"
  },
  {
    "variantId": "philo:家里都好#linear",
    "storyId": "philo:家里都好",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "家里都好"
  },
  {
    "variantId": "philo:崩溃是静音的#linear",
    "storyId": "philo:崩溃是静音的",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "崩溃是静音的"
  },
  {
    "variantId": "philo:建议听三分#linear",
    "storyId": "philo:建议听三分",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "建议听三分"
  },
  {
    "variantId": "philo:情绪稳定是本事#linear",
    "storyId": "philo:情绪稳定是本事",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "情绪稳定是本事"
  },
  {
    "variantId": "philo:成年人的体面#linear",
    "storyId": "philo:成年人的体面",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "成年人的体面"
  },
  {
    "variantId": "philo:报喜不报忧#linear",
    "storyId": "philo:报喜不报忧",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "报喜不报忧"
  },
  {
    "variantId": "philo:救急不救穷#linear",
    "storyId": "philo:救急不救穷",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "救急不救穷"
  },
  {
    "variantId": "philo:来不及最痛#linear",
    "storyId": "philo:来不及最痛",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "来不及最痛"
  },
  {
    "variantId": "philo:沉默的反击#linear",
    "storyId": "philo:沉默的反击",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "沉默的反击"
  },
  {
    "variantId": "philo:沉默的大多数#linear",
    "storyId": "philo:沉默的大多数",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "沉默的大多数"
  },
  {
    "variantId": "philo:熬过去是故事#linear",
    "storyId": "philo:熬过去是故事",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "熬过去是故事"
  },
  {
    "variantId": "philo:父亲的沉默#linear",
    "storyId": "philo:父亲的沉默",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "父亲的沉默"
  },
  {
    "variantId": "philo:父母是那堵墙#linear",
    "storyId": "philo:父母是那堵墙",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "父母是那堵墙"
  },
  {
    "variantId": "philo:画的饼别当饭#linear",
    "storyId": "philo:画的饼别当饭",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "画的饼别当饭"
  },
  {
    "variantId": "philo:看他怎么对服务员#linear",
    "storyId": "philo:看他怎么对服务员",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "看他怎么对服务员"
  },
  {
    "variantId": "philo:真朋友借钱不问归期#linear",
    "storyId": "philo:真朋友借钱不问归期",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "真朋友借钱不问归期"
  },
  {
    "variantId": "philo:知道何时放手#linear",
    "storyId": "philo:知道何时放手",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "知道何时放手"
  },
  {
    "variantId": "philo:离职见人品#linear",
    "storyId": "philo:离职见人品",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "离职见人品"
  },
  {
    "variantId": "philo:站错了赛道#linear",
    "storyId": "philo:站错了赛道",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "站错了赛道"
  },
  {
    "variantId": "philo:群里见冷暖#linear",
    "storyId": "philo:群里见冷暖",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "群里见冷暖"
  },
  {
    "variantId": "philo:背后议论你的人#linear",
    "storyId": "philo:背后议论你的人",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "背后议论你的人"
  },
  {
    "variantId": "philo:能力之外是关系#linear",
    "storyId": "philo:能力之外是关系",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "能力之外是关系"
  },
  {
    "variantId": "philo:舍不得让你等#linear",
    "storyId": "philo:舍不得让你等",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "舍不得让你等"
  },
  {
    "variantId": "philo:落难见真情#linear",
    "storyId": "philo:落难见真情",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "落难见真情"
  },
  {
    "variantId": "philo:被爱有恃无恐#linear",
    "storyId": "philo:被爱有恃无恐",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "被爱有恃无恐"
  },
  {
    "variantId": "philo:角色互换#linear",
    "storyId": "philo:角色互换",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "角色互换"
  },
  {
    "variantId": "philo:谁先敬你#linear",
    "storyId": "philo:谁先敬你",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "谁先敬你"
  },
  {
    "variantId": "philo:谈钱才是深情#linear",
    "storyId": "philo:谈钱才是深情",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "谈钱才是深情"
  },
  {
    "variantId": "philo:谈钱要趁早#linear",
    "storyId": "philo:谈钱要趁早",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "谈钱要趁早"
  },
  {
    "variantId": "philo:越大方越被当应该#linear",
    "storyId": "philo:越大方越被当应该",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "越大方越被当应该"
  },
  {
    "variantId": "philo:那只空碗#linear",
    "storyId": "philo:那只空碗",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "那只空碗"
  },
  {
    "variantId": "philo:酒后吐真言#linear",
    "storyId": "philo:酒后吐真言",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "酒后吐真言"
  },
  {
    "variantId": "philo:钱能解决的是小事#linear",
    "storyId": "philo:钱能解决的是小事",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "钱能解决的是小事"
  },
  {
    "variantId": "philo:锦上添花易#linear",
    "storyId": "philo:锦上添花易",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "锦上添花易"
  },
  {
    "variantId": "philo:饭局见人品#linear",
    "storyId": "philo:饭局见人品",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "饭局见人品"
  },
  {
    "variantId": "pro:军人归乡敬礼#linear",
    "storyId": "pro:军人归乡敬礼",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "军人归乡敬礼"
  },
  {
    "variantId": "pro:医生急诊抢救#linear",
    "storyId": "pro:医生急诊抢救",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "医生急诊抢救"
  },
  {
    "variantId": "pro:悬崖高空救援#linear",
    "storyId": "pro:悬崖高空救援",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "悬崖高空救援"
  },
  {
    "variantId": "pro:护士夜班守护#linear",
    "storyId": "pro:护士夜班守护",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "护士夜班守护"
  },
  {
    "variantId": "pro:教师护学生#linear",
    "storyId": "pro:教师护学生",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "教师护学生"
  },
  {
    "variantId": "pro:暴雨送达#linear",
    "storyId": "pro:暴雨送达",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "暴雨送达"
  },
  {
    "variantId": "pro:机长紧急备降#linear",
    "storyId": "pro:机长紧急备降",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "机长紧急备降"
  },
  {
    "variantId": "pro:消防员火场救人#linear",
    "storyId": "pro:消防员火场救人",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "消防员火场救人"
  },
  {
    "variantId": "pro:缉毒警收网#linear",
    "storyId": "pro:缉毒警收网",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "缉毒警收网"
  },
  {
    "variantId": "pro:警察解救人质#linear",
    "storyId": "pro:警察解救人质",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "警察解救人质"
  },
  {
    "variantId": "tear:久别重逢的拥抱#linear",
    "storyId": "tear:久别重逢的拥抱",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "久别重逢的拥抱"
  },
  {
    "variantId": "tear:失散多年的重逢#linear",
    "storyId": "tear:失散多年的重逢",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "失散多年的重逢"
  },
  {
    "variantId": "tear:孩子第一次叫妈妈#linear",
    "storyId": "tear:孩子第一次叫妈妈",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "孩子第一次叫妈妈"
  },
  {
    "variantId": "tear:宠物等主人回家#linear",
    "storyId": "tear:宠物等主人回家",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "宠物等主人回家"
  },
  {
    "variantId": "tear:康复出院那一天#linear",
    "storyId": "tear:康复出院那一天",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "康复出院那一天"
  },
  {
    "variantId": "tear:机场车站送别#linear",
    "storyId": "tear:机场车站送别",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "机场车站送别"
  },
  {
    "variantId": "tear:毕业那天的不舍#linear",
    "storyId": "tear:毕业那天的不舍",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "毕业那天的不舍"
  },
  {
    "variantId": "tear:病房最后的告别#linear",
    "storyId": "tear:病房最后的告别",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "病房最后的告别"
  },
  {
    "variantId": "tear:空巢父母的饭桌#linear",
    "storyId": "tear:空巢父母的饭桌",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "空巢父母的饭桌"
  },
  {
    "variantId": "tear:老兵的旧照片#linear",
    "storyId": "tear:老兵的旧照片",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "老兵的旧照片"
  },
  {
    "variantId": "thrill:收到自己发的消息#linear",
    "storyId": "thrill:收到自己发的消息",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "收到自己发的消息"
  },
  {
    "variantId": "thrill:深夜的敲门声#linear",
    "storyId": "thrill:深夜的敲门声",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "深夜的敲门声"
  },
  {
    "variantId": "thrill:照片里的异样#linear",
    "storyId": "thrill:照片里的异样",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "照片里的异样"
  },
  {
    "variantId": "thrill:电梯停了却不开门#linear",
    "storyId": "thrill:电梯停了却不开门",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "电梯停了却不开门"
  },
  {
    "variantId": "thrill:监控里的多余身影#linear",
    "storyId": "thrill:监控里的多余身影",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "监控里的多余身影"
  },
  {
    "variantId": "thrill:镜中多了一个人#linear",
    "storyId": "thrill:镜中多了一个人",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "镜中多了一个人"
  },
  {
    "variantId": "twist:丑小鸭惊艳登场#linear",
    "storyId": "twist:丑小鸭惊艳登场",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "丑小鸭惊艳登场"
  },
  {
    "variantId": "twist:乞丐其实是富豪#linear",
    "storyId": "twist:乞丐其实是富豪",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "乞丐其实是富豪"
  },
  {
    "variantId": "twist:其实一直在身边#linear",
    "storyId": "twist:其实一直在身边",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "其实一直在身边"
  },
  {
    "variantId": "twist:冷漠路人的反转#linear",
    "storyId": "twist:冷漠路人的反转",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "冷漠路人的反转"
  },
  {
    "variantId": "twist:卧底揭面#linear",
    "storyId": "twist:卧底揭面",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "卧底揭面"
  },
  {
    "variantId": "twist:看似严厉其实深爱#linear",
    "storyId": "twist:看似严厉其实深爱",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "看似严厉其实深爱"
  },
  {
    "variantId": "twist:遗物里的真相#linear",
    "storyId": "twist:遗物里的真相",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "遗物里的真相"
  },
  {
    "variantId": "twist:错怪好人后真相大白#linear",
    "storyId": "twist:错怪好人后真相大白",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "错怪好人后真相大白"
  },
  {
    "variantId": "twist:错认的双胞胎#linear",
    "storyId": "twist:错认的双胞胎",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "错认的双胞胎"
  },
  {
    "variantId": "twist:隐藏大佬露真身#linear",
    "storyId": "twist:隐藏大佬露真身",
    "variantType": "linear",
    "variantIndex": 1,
    "variantLabel_zh": "隐藏大佬露真身"
  }
] as const
