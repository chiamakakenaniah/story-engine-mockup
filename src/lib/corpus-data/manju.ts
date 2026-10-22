// @generated — DO NOT EDIT. Regenerate via `python3 scripts/build_corpus.py`.

import type { StoryRecord, VariantInstance } from '@/lib/corpus-types'

export const MANJU_STORIES: StoryRecord[] = [
  {
    "id": "baowen_jinshu",
    "storyType": "manju",
    "title_zh": "豪门暗战：江家少奶奶",
    "title_en": "WAR IN THE MANSION",
    "genre": "民国乱世 · 豪门暗战",
    "tagline": "为家族联姻，沈锦书嫁进上海滩第一豪门江家 · 丈夫冷淡疏离、妯娌争斗不休，这桩婚事貌合神离 · 而江家光鲜的背后，藏着一桩惊天秘密 · 温婉的她，要在尔虞我诈的深宅里，斗出一片天",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "family-feud",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "为了家族的生意，书香门第之女沈锦书嫁进了上海滩第一豪门江家，成了江家三少奶奶。丈夫江泽川冷淡疏离，妯娌明争暗斗，这桩婚事从一开始便貌合神离。而沈锦书渐渐察觉，江…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在深宅立足、怎样在并肩中靠近、到江家大厦将倾的共渡抉择，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：豪门暗战 / 当家主母 / 比翼双飞 / 岁月静好 / 双向救赎 / 两家同荣 / 德泽一方 / 自在相伴……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈锦书 (女主)",
        "functionSummary_zh": "书香门第之女 · 温婉而有风骨、外柔内刚 · 嫁入豪门、以智周旋"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "江泽川 (男主)",
        "functionSummary_zh": "江家三少 · 冷淡疏离、身负家国秘密 · 唯独为她卸下所有冷漠"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "大少奶奶 (反派)",
        "functionSummary_zh": "江家大少奶奶 · 争权夺利、刁难新妇"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "江世昌 (反派)",
        "functionSummary_zh": "觊觎江家产业的政敌 · 勾结内鬼、设局掀翻江家"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "翠儿 (配角)",
        "functionSummary_zh": "沈锦书的贴身丫鬟 · 忠心机灵、患难相随"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "江母 (配角)",
        "functionSummary_zh": "江泽川的母亲 · 起初冷淡、后被锦书打动"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "端庄温婉 · 素雅旗袍 · 一双沉静聪慧的眼 · 笑里藏着锋芒",
      "protagonist": "江泽川 (男主)",
      "antagonist": "大少奶奶 (反派); 江世昌 (反派)",
      "centralConflict": "为家族联姻，沈锦书嫁进上海滩第一豪门江家 · 丈夫冷淡疏离、妯娌争斗不休，这桩婚事貌合神离 · 而江家光鲜的背后，藏着一桩惊天秘密 · 温婉的她，要在尔虞我诈的深宅里，斗出一片天",
      "stakes": "8 种结局：豪门暗战 / 当家主母 / 比翼双飞 / 岁月静好 / 双向救赎 / 两家同荣 / 德泽一方 / 自在相伴……结局，由你来选。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "bazong_nuelian",
    "storyType": "manju",
    "title_zh": "霸总的偏执囚爱",
    "title_en": "BILLIONAIRES OBSESSION",
    "genre": "现代豪门 · 霸总虐恋",
    "tagline": "被迫嫁给偏执霸总,她以为是冷漠的政治联姻,却没想到 · 这个男人,用最强势的方式,把她囚进了一场偏执到骨子里的虐爱",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "许家落难,许念被父亲当作筹码,嫁给了传闻冷血的商界霸总封琛。她以为这是一场冷漠的政治联姻,却没料到这个男人,把她锁进了一场偏执到骨子里的囚爱——他对她极尽宠溺与…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何面对偏执霸总、怎样应对白月光的挑拨、到这段虐恋如何收场,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：相爱相伤 / 救赎彼此 / 决绝离开 / 撕碎心机……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "许念 (女主)",
        "functionSummary_zh": "家族落难被迫联姻 · 倔强清冷、不肯低头"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "封琛 (男主)",
        "functionSummary_zh": "偏执到病态的商界霸总 · 占有欲爆棚 · 越虐越深爱"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白月光 (反派)",
        "functionSummary_zh": "封琛的前未婚妻 · 处处挑拨、想拆散两人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "恶毒父亲 (反派)",
        "functionSummary_zh": "女主的父亲 · 把她当筹码 · 卖给霸总"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "忠诚助理 (配角)",
        "functionSummary_zh": "封琛的贴身助理 · 暗中相助女主"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "闺蜜 (配角)",
        "functionSummary_zh": "女主的死党 · 一路力挺"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素雅清丽 · 一双不屈的清冷眼睛 · 风骨内敛",
      "protagonist": "封琛 (男主)",
      "antagonist": "白月光 (反派); 恶毒父亲 (反派)",
      "centralConflict": "被迫嫁给偏执霸总,她以为是冷漠的政治联姻,却没想到 · 这个男人,用最强势的方式,把她囚进了一场偏执到骨子里的虐爱",
      "stakes": "8 种结局：相爱相伤 / 救赎彼此 / 决绝离开 / 撕碎心机……命运由你书写。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "cefei_shangwei",
    "storyType": "manju",
    "title_zh": "侧妃上位",
    "title_en": "Rise of the Concubine",
    "genre": "古装宅斗 · 侧妃上位",
    "tagline": "清贫官家女以侧妃之位入靖王府,寄人篱下、屈居正妃之下 · 苏锦绣以隐忍与智谋步步为营,固宠、揽权、结贵人,在正妃的步步紧逼中绝地反击,从侧门小轿一路登上,王府主母之位",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "宅斗",
    "familyKey": "house-intrigue",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "清贫官家女苏锦绣,被指婚给靖王为侧妃,一顶小轿从侧门抬进靖王府。没有正妃的十里红妆,只有寄人篱下的清冷——正妃柳氏跋扈、靖王冷淡,她不过是一枚低人一等的棋子。可…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "是固宠承欢叩开帝心、是揽权理事掌中馈,还是攀附老王妃寻靠山?是智斗正妃见招拆招、是诞子固位母凭子贵,还是揭穿正妃累累恶行?面对正妃孤注一掷的嫁祸毒计,是将计就计…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局:母仪王府贤名远播 / 夫妻情深白首同心 / 严惩仇敌恶有恶报 / 执掌中馈当家主母 / 母凭子贵麟儿承业 / 看淡浮华守一份安宁 / 铁腕主母权倾后…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏锦绣 (女主)",
        "functionSummary_zh": "清贫官家女,以侧妃之位入靖王府 · 出身寒微、屈居侧位,却心志坚韧、深谙人心,以隐忍智谋步步为营,固宠揽权、绝地反击,终从侧妃登上正妃之位"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "靖王 (男主)",
        "functionSummary_zh": "当朝靖亲王 · 初时冷淡疏离,后渐为苏锦绣的聪慧贤德所动、倚重相付,从看轻到深情,与之冰释隔阂"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "柳氏 (反派 1)",
        "functionSummary_zh": "靖王府正妃,出身高门、跋扈善妒 · 把持中馈、苛待下人,膝下无子却容不下侧妃,构陷栽赃、暗害子嗣,无所不用其极"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "柳氏娘家 (反派 2)",
        "functionSummary_zh": "正妃柳氏的母族 · 为保女儿正妻之位、保家族在王府的权势,与柳氏合谋构陷嫁祸,是反扑毒计的幕后推手"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老王妃 (配角)",
        "functionSummary_zh": "靖王生母、王府最有分量的长辈 · 笃信礼佛、明辨是非,因苏锦绣的孝心贤德而青眼相加,是她上位最有力的靠山"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "翠云 (配角)",
        "functionSummary_zh": "苏锦绣贴身丫鬟 · 主仆情深、忠心不二,陪她从侧门小轿一路走到主母之位,是最得力的臂助"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素雅侧妃服饰难掩绝色 · 眉眼温婉柔顺 · 垂眸下藏着不甘与锋芒",
      "protagonist": "靖王 (男主)",
      "antagonist": "柳氏 (反派 1); 柳氏娘家 (反派 2)",
      "centralConflict": "清贫官家女以侧妃之位入靖王府,寄人篱下、屈居正妃之下 · 苏锦绣以隐忍与智谋步步为营,固宠、揽权、结贵人,在正妃的步步紧逼中绝地反击,从侧门小轿一路登上,王府主母之位",
      "stakes": "8 种结局:母仪王府贤名远播 / 夫妻情深白首同心 / 严惩仇敌恶有恶报 / 执掌中馈当家主母 / 母凭子贵麟儿承业 / 看淡浮华守一份安宁 / 铁腕主母权倾后宅 / 放下释怀向阳新生……这场侧妃上位的步步登顶,由你执笔。",
      "theme": "INFERRED: 宅斗 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "chabie_cuowei",
    "storyType": "manju",
    "title_zh": "错位的婚约",
    "title_en": "MISTAKEN LOVE",
    "genre": "现代豪门 · 豪门错爱",
    "tagline": "姐姐临阵逃婚,她替嫁进豪门 · 冷酷的霍氏继承人,却只把她当成白月光的替身 · 她偏不做谁的影子,要把这场错位的婚约,焐成一份独一无二的真爱",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "姐姐临阵逃婚,普通女孩苏念被迫替嫁,嫁进了霍氏豪门。冷酷的继承人霍司珩,却只把她当成自己白月光林晚的替身。苏念不卑不亢——她敬重这桩婚约,却绝不做任何人的影子。…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何面对「替身」的处境、怎样在朝夕相处中错爱成真、到如何应对白月光归来,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局:真爱上位 / 官宣正名 / 契约转真 / 离开重生(他来追妻) / 双向救赎 / 高调宠妻 / 白月光出局 / 平淡相守……结局,由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏念 (女主)",
        "functionSummary_zh": "替姐姐代嫁进豪门的普通女孩 · 不卑不亢、清醒坚韧 · 偏不做谁的替身"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "霍司珩 (男主)",
        "functionSummary_zh": "冷酷的霍氏继承人 · 起初只当她是白月光替身 · 渐渐为她沦陷"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "林晚 (反派)",
        "functionSummary_zh": "霍司珩的白月光 · 消失后又归来 · 觊觎霍家、想夺回位置"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "顾莹 (反派)",
        "functionSummary_zh": "觊觎霍司珩的名媛 · 处处给苏念使绊"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿May (配角)",
        "functionSummary_zh": "苏念的好友 · 头一个为她抱不平的人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "福伯 (配角)",
        "functionSummary_zh": "霍家老管家 · 一眼看出苏念的好"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素雅得体的连衣裙 · 一双清亮坚定的眼 · 温婉里藏着风骨",
      "protagonist": "霍司珩 (男主)",
      "antagonist": "林晚 (反派); 顾莹 (反派)",
      "centralConflict": "姐姐临阵逃婚,她替嫁进豪门 · 冷酷的霍氏继承人,却只把她当成白月光的替身 · 她偏不做谁的影子,要把这场错位的婚约,焐成一份独一无二的真爱",
      "stakes": "8 种结局:真爱上位 / 官宣正名 / 契约转真 / 离开重生(他来追妻) / 双向救赎 / 高调宠妻 / 白月光出局 / 平淡相守……结局,由你来选。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "changgong_zhuzai",
    "storyType": "manju",
    "title_zh": "长公主",
    "title_en": "The Grand Princess",
    "genre": "古装宅斗 · 长公主",
    "tagline": "先帝骤崩、幼弟十岁继位,权臣专政、藩王逼宫 · 镇国长公主萧明华临危辅政,以一身权谋韬略,结朝臣、掌兵权、肃权臣、平藩王,替幼弟守住摇摇欲坠的江山,权倾天下",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "宅斗",
    "familyKey": "house-intrigue",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "ally",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "先帝在一场急病中骤崩,留下十岁的幼弟太子,与一个权臣专政、藩王逼宫的危局。镇国长公主萧明华——这位自幼随父皇议政、通晓权谋的金枝玉叶,临危而立。先帝临终将幼弟与…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "是结纳忠良、暗夺禁军兵权,还是收拢民心士林占住大义?是雷霆肃清专权的权臣、是削藩平定谋反的藩王,还是亲授帝王之术教养幼主?面对权臣藩王孤注一掷的宫变,是禁军勤王…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局:还政明君功成身退 / 摄政长公主凤掌乾坤 / 严惩逆党血债血偿 / 急流勇退江湖之远 / 姐弟情深相依为命 / 巾帼宰辅辅佐贤君 / 铁腕女主乾纲独…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "萧明华 (女主)",
        "functionSummary_zh": "先帝长女、镇国长公主 · 自幼随父皇议政、通晓权谋韬略 · 先帝骤崩后临危辅政,以智略与铁腕扫平权臣藩王,长姐如母护幼弟、稳江山,权倾天下"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "萧承稷 (萌宝)",
        "functionSummary_zh": "先帝幼子、十岁继位的小皇帝 · 怯弱稚嫩,在长姐教养下渐通帝王之术、明辨忠奸,小小年纪已有人君之姿,是长公主誓死守护的根本"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "摄政王 (反派 1)",
        "functionSummary_zh": "先帝胞弟、封地藩王 · 觊觎龙椅、窥伺神器,暗中囤兵谋反、逼宫废帝,是长公主最大的对手之一"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "权臣 (反派 2)",
        "functionSummary_zh": "当朝首辅、辅政重臣 · 把持朝政、架空幼帝,结党营私、暗通边镇,与藩王合流逼宫,专权乱政的祸首"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "赵骁 (男配)",
        "functionSummary_zh": "禁军副统领、先帝旧部 · 忠勇刚直却被藩王打压,得长公主知遇而效死,掌禁军兵权、护卫圣驾、勤王平叛"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老御史 (配角)",
        "functionSummary_zh": "三朝老御史、清流领袖 · 被权臣排挤多年,因长公主主持公道而归附,在朝堂为其奔走、共扶幼主"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "绛紫凤纹宫装 · 绝美而凌厉 · 端坐如执棋的女主,目光锐利如刀",
      "protagonist": "INFERRED: no hero-tagged character",
      "antagonist": "摄政王 (反派 1); 权臣 (反派 2)",
      "centralConflict": "先帝骤崩、幼弟十岁继位,权臣专政、藩王逼宫 · 镇国长公主萧明华临危辅政,以一身权谋韬略,结朝臣、掌兵权、肃权臣、平藩王,替幼弟守住摇摇欲坠的江山,权倾天下",
      "stakes": "8 种结局:还政明君功成身退 / 摄政长公主凤掌乾坤 / 严惩逆党血债血偿 / 急流勇退江湖之远 / 姐弟情深相依为命 / 巾帼宰辅辅佐贤君 / 铁腕女主乾纲独断 / 放下释怀向阳而生……这位权倾天下的长公主,命运由你执笔。",
      "theme": "INFERRED: 宅斗 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "chongsheng_chushen",
    "storyType": "manju",
    "title_zh": "厨神重生",
    "title_en": "REBORN CHEF",
    "genre": "重生复仇 · 重生厨神",
    "tagline": "被黑心合伙人偷走祖传配方、夺走餐厅、害死恩师的天才厨师 · 重生归来，她要凭两世厨艺东山再起，让窃据她一切的人血债血偿",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "天才厨师林知味被黑心合伙人孙磊设局，偷走祖传配方、夺走餐厅、害死恩师，最终一无所有、郁郁而终。再睁眼，她重生回到合伙开店前——这一世，她带着两世厨艺与记忆，要把…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何东山再起、怎样抢先护住配方与师父、到选择哪种方式让仇人付出代价，每一个关键抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种截然不同的结局：登顶米其林餐饮帝国 / 与默默护她的真爱携手 / 黑心合伙人法网难逃 / 归隐田园开一间小馆 / 双向救赎彼此治愈 / 用一餐一饭温暖更多…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "林知味 (女主)",
        "functionSummary_zh": "重生前: 被合伙人夺走一切、郁郁而终的天才厨师 / 重生后: 回到合伙开店前"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "江沉 (男主)",
        "functionSummary_zh": "名动业界的美食评论家 · 上一世默默替她澄清正名的人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "孙磊 (反派)",
        "functionSummary_zh": "黑心合伙人 · 上一世偷配方、夺餐厅、害死她恩师"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "餐饮大亨 (反派)",
        "functionSummary_zh": "孙磊背后的黑心餐饮大亨 · 偷工减料、操盘吞并"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "师父 (配角)",
        "functionSummary_zh": "女主恩师 · 上一世被夺餐厅后含冤而终"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小工阿福 (配角)",
        "functionSummary_zh": "小店的伙计 · 死心塌地跟着她"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "利落的厨娘装扮 · 一双沉静锐利的眼 · 周身藏着重生者的清醒与韧劲",
      "protagonist": "江沉 (男主)",
      "antagonist": "孙磊 (反派); 餐饮大亨 (反派)",
      "centralConflict": "被黑心合伙人偷走祖传配方、夺走餐厅、害死恩师的天才厨师 · 重生归来，她要凭两世厨艺东山再起，让窃据她一切的人血债血偿",
      "stakes": "8 种截然不同的结局：登顶米其林餐饮帝国 / 与默默护她的真爱携手 / 黑心合伙人法网难逃 / 归隐田园开一间小馆 / 双向救赎彼此治愈 / 用一餐一饭温暖更多人……命运由你的选择书写。",
      "theme": "INFERRED: 重生 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 重生 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "chongsheng_junsao",
    "storyType": "manju",
    "title_zh": "重生军嫂",
    "title_en": "THE SOLDIER'S WIFE REBORN",
    "genre": "重生复仇 · 重生军嫂",
    "tagline": "丈夫被构陷“违纪”前途尽毁、自己在婆家邻里间被苛待磋磨含恨而终的军嫂 · 重生归来，她要护住丈夫清白、撑起这个家，让搬弄是非、构陷栽赃的人付出代价",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "军嫂苏茵的丈夫陆向北被赵主任构陷“违纪”、前途尽毁，她在婆家与邻里间被苛待磋磨，含恨而终。再睁眼，她重生回到丈夫还在、一切未发生前——这一世，她带着两世记忆，要…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在家属院立足、怎样抢先护住家人与丈夫的前程、到选择哪种方式还原真相、惩治小人，每一个关键抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种截然不同的结局：创业事业有成 / 与铁血丈夫相守一生 / 构陷者诬告者受到惩处 / 守着家人平淡是福 / 双向救赎彼此治愈 / 带动家属院的拥军楷模……命…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏茵 (女主)",
        "functionSummary_zh": "重生前: 被磋磨苛待、含恨而终的军嫂 / 重生后: 回到丈夫还在、悲剧未发生前"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆向北 (男主)",
        "functionSummary_zh": "铁血军人 · 上一世被构陷前途尽毁，这一世在她助力下守住清白与前程"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "刘巧云 (反派)",
        "functionSummary_zh": "爱搬弄是非的邻居 · 上一世挑唆构陷、苛待她的帮凶"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "赵主任 (反派)",
        "functionSummary_zh": "构陷丈夫“违纪”的小人 · 为吞名额、谋私利不择手段"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "婆婆 (配角)",
        "functionSummary_zh": "丈夫的母亲 · 前期有些糊涂、后被她的真心打动"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "战友 (配角)",
        "functionSummary_zh": "丈夫的战友 · 仗义可靠 · 关键时为他们作证"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "朴素利落的家常衣裙 · 一双温柔却坚定的眼 · 褪去了前世的隐忍",
      "protagonist": "陆向北 (男主)",
      "antagonist": "刘巧云 (反派); 赵主任 (反派)",
      "centralConflict": "丈夫被构陷“违纪”前途尽毁、自己在婆家邻里间被苛待磋磨含恨而终的军嫂 · 重生归来，她要护住丈夫清白、撑起这个家，让搬弄是非、构陷栽赃的人付出代价",
      "stakes": "8 种截然不同的结局：创业事业有成 / 与铁血丈夫相守一生 / 构陷者诬告者受到惩处 / 守着家人平淡是福 / 双向救赎彼此治愈 / 带动家属院的拥军楷模……命运由你的选择书写。",
      "theme": "INFERRED: 重生 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 重生 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "chongsheng_mingxing",
    "storyType": "manju",
    "title_zh": "重生影后",
    "title_en": "THE COMEBACK QUEEN",
    "genre": "重生复仇 · 重生明星",
    "tagline": "被塑料姐妹顶替番位、被黑心资本联手雪藏网暴致死的过气艺人 · 重生归来，她手握两世记忆，要逆袭封后、打脸塑料圈，让窃据她人生的人血债血偿",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "曾被全网期待的乔薇，被塑料姐妹林菲菲顶替番位、被黑心经纪人与资本联手雪藏、网暴致死，连家人都被牵连。再睁眼，她重生回到出道前那一年——这一世，她带着两世记忆，要…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何杀回这个圈子、怎样抢先护住家人、到选择哪种方式让塑料姐妹与黑心资本付出代价，每一个关键抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种截然不同的结局：登顶国际影后 / 与默默护她的真爱携手 / 塑料姐妹黑心资本全部塌房 / 急流勇退过自由人生 / 双向救赎彼此治愈 / 用流量做公益照亮他…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "乔薇 (女主)",
        "functionSummary_zh": "重生前: 被雪藏、网暴致死的过气艺人 / 重生后: 回到出道前那一年"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "裴时影 (男主)",
        "functionSummary_zh": "低调内敛的影帝 · 上一世默默替她澄清正名的人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "林菲菲 (反派)",
        "functionSummary_zh": "塑料姐妹 · 上一世顶替她番位、联手资本害她的人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周岸 (反派)",
        "functionSummary_zh": "黑心经纪人 · 与资本勾结、卖掉她的资源"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "乔母 (配角)",
        "functionSummary_zh": "女主母亲 · 上一世受牵连、遭骚扰气病"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小鹿 (配角)",
        "functionSummary_zh": "忠心助理 · 两世都对她不离不弃"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清爽明艳的素颜 · 一双清醒锐利的眼 · 镜头前光芒万丈",
      "protagonist": "裴时影 (男主)",
      "antagonist": "林菲菲 (反派); 周岸 (反派)",
      "centralConflict": "被塑料姐妹顶替番位、被黑心资本联手雪藏网暴致死的过气艺人 · 重生归来，她手握两世记忆，要逆袭封后、打脸塑料圈，让窃据她人生的人血债血偿",
      "stakes": "8 种截然不同的结局：登顶国际影后 / 与默默护她的真爱携手 / 塑料姐妹黑心资本全部塌房 / 急流勇退过自由人生 / 双向救赎彼此治愈 / 用流量做公益照亮他人……命运由你的选择书写。",
      "theme": "INFERRED: 重生 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 重生 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "chongsheng_muqin",
    "storyType": "manju",
    "title_zh": "重生为母",
    "title_en": "REBORN AS A MOTHER",
    "genre": "重生复仇 · 重生为母",
    "tagline": "被渣前夫与小三联手算计、失去孩子抚养权、眼睁睁看着孩子受苦含恨而终的母亲 · 重生归来，她要拼尽全力护住孩子、夺回抚养权，让算计母女的人付出代价",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "苏晴被渣前夫陈某与小三周楠联手算计，失去孩子抚养权，眼睁睁看着女儿朵朵在对方家受苦、还出了意外，自己含恨而终。再睁眼，她重生回到孩子还在身边、悲剧未发生前——这…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何抢先护住孩子、怎样攥住渣男的把柄、到选择哪种方式夺回抚养权、惩治渣男小三，要不要接受正直律师的援手，每一个关键抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种截然不同的结局：拿回抚养权母子团圆 / 与暖心律师收获真爱 / 渣男小三全部伏法 / 带孩子自由新生 / 双向救赎彼此治愈 / 帮助更多母亲用爱回馈……命…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏晴 (女主)",
        "functionSummary_zh": "重生前: 失去孩子、含恨而终的母亲 / 重生后: 回到孩子还在身边、悲剧未发生前"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾铭 (男主)",
        "functionSummary_zh": "正直暖心的律师 · 一路为她维权、守护这对母女"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "陈某 (反派)",
        "functionSummary_zh": "渣前夫 · 上一世与小三联手算计、夺走孩子的主谋"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周楠 (反派)",
        "functionSummary_zh": "小三 · 伪装善良、觊觎家产、苛待孩子"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "朵朵 (配角)",
        "functionSummary_zh": "女主的女儿 · 天真可爱 · 是女主拼命要护住的一切"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "苏母 (配角)",
        "functionSummary_zh": "女主母亲 · 慈爱坚强 · 母女俩最坚实的后盾"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "温婉坚韧的现代女性 · 一双为母则刚的眼 · 护起孩子时眼神如刀",
      "protagonist": "顾铭 (男主)",
      "antagonist": "陈某 (反派); 周楠 (反派)",
      "centralConflict": "被渣前夫与小三联手算计、失去孩子抚养权、眼睁睁看着孩子受苦含恨而终的母亲 · 重生归来，她要拼尽全力护住孩子、夺回抚养权，让算计母女的人付出代价",
      "stakes": "8 种截然不同的结局：拿回抚养权母子团圆 / 与暖心律师收获真爱 / 渣男小三全部伏法 / 带孩子自由新生 / 双向救赎彼此治愈 / 帮助更多母亲用爱回馈……命运由你的选择书写。",
      "theme": "INFERRED: 重生 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 重生 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "chongsheng_nanzhu",
    "storyType": "manju",
    "title_zh": "男主重生",
    "title_en": "HIS SECOND CHANCE",
    "genre": "重生复仇 · 男主重生",
    "tagline": "被结拜兄弟与黑心合伙人联手背叛、夺产、害得众叛亲离惨死的商业天才 · 重生归来，他要护住前世为他挡刀而死的挚爱，夺回一切、血债血偿",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "商业天才顾沉舟被结拜兄弟陆铮与黑心合伙人联手设局，夺走公司、众叛亲离，挚爱沈微为护他中刀身亡，他最终惨死收场。再睁眼，他重生回到背叛尚未发生前——这一世，他带着…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何抢先布局反制兄弟、怎样护住前世为他而死的挚爱、到选择哪种方式让背叛者付出代价，每一个关键抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种截然不同的结局：登顶商业帝国 / 与前世为他而死的挚爱白头偕老 / 背叛者法网难逃 / 退隐相守一生 / 双向救赎彼此治愈 / 化恨为爱回馈社会……命运由…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾沉舟 (男主)",
        "functionSummary_zh": "重生前: 被结拜兄弟背叛、众叛亲离惨死的商业天才 / 重生后: 回到背叛尚未发生前"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈微 (女主)",
        "functionSummary_zh": "顾沉舟的挚爱 · 上一世默默爱他、为护他而中刀身亡"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "陆铮 (反派)",
        "functionSummary_zh": "结拜兄弟 · 上一世背叛他、夺产、雇凶的主谋"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "黑心合伙人 (反派)",
        "functionSummary_zh": "陆铮背后的黑心资本 · 操盘吞并顾氏"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老周 (配角)",
        "functionSummary_zh": "顾沉舟的心腹副手 · 忠心耿耿、助他布局反杀"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "沈母 (配角)",
        "functionSummary_zh": "沈微的母亲 · 慈爱开明、待顾沉舟如亲子"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "剪裁利落的深色西装 · 矜贵冷峻 · 眼神锐利如刀却独独为她温柔",
      "protagonist": "顾沉舟 (男主)",
      "antagonist": "陆铮 (反派); 黑心合伙人 (反派)",
      "centralConflict": "被结拜兄弟与黑心合伙人联手背叛、夺产、害得众叛亲离惨死的商业天才 · 重生归来，他要护住前世为他挡刀而死的挚爱，夺回一切、血债血偿",
      "stakes": "8 种截然不同的结局：登顶商业帝国 / 与前世为他而死的挚爱白头偕老 / 背叛者法网难逃 / 退隐相守一生 / 双向救赎彼此治愈 / 化恨为爱回馈社会……命运由你的选择书写。",
      "theme": "INFERRED: 重生 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 重生 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "chongsheng_shenyi",
    "storyType": "manju",
    "title_zh": "神医重生",
    "title_en": "REBORN HEALER",
    "genre": "重生复仇 · 重生神医",
    "tagline": "被嫉妒她的副院长与黑心药代联手做局、背锅惨死的天才医生 · 重生归来，她要凭两世医术悬壶济世，让拿病人性命牟利的人血债血偿",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "天才医生程念被嫉妒她的副院长李振和黑心药代联手做局，背下一场“医疗事故”的黑锅、被吊销执照、最终被医闹围殴致死。再睁眼，她重生回到事故发生前——这一世，她带着两…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在医院立足、怎样抢先护住病人与家人、到选择哪种方式让黑心者付出代价，每一个关键抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种截然不同的结局：医术封神成为传奇 / 与默默护她的真爱携手 / 黑心者法网难逃 / 悬壶远行救死扶伤 / 双向救赎彼此治愈 / 建免费医院大爱无疆……命运…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "程念 (女主)",
        "functionSummary_zh": "重生前: 被陷害背锅、被医闹害死的天才医生 / 重生后: 回到事故发生前"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "霍珩 (男主)",
        "functionSummary_zh": "集团总裁 · 曾被她救活的病人，上一世暗中替她查冤案的人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "李振 (反派)",
        "functionSummary_zh": "副院长 · 上一世嫉妒她、设局陷害的主谋"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "黑心药代 (反派)",
        "functionSummary_zh": "倒卖劣药的药品代表 · 与副院长勾结牟利"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "程母 (配角)",
        "functionSummary_zh": "女主母亲 · 上一世受牵连、气病惨死"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "护士长 (配角)",
        "functionSummary_zh": "被卷入局中、后良心未泯的护士长 · 终为女主作证"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "利落的马尾 · 白大褂下一双沉静锐利的眼 · 周身藏着重生者的清醒",
      "protagonist": "霍珩 (男主)",
      "antagonist": "李振 (反派); 黑心药代 (反派)",
      "centralConflict": "被嫉妒她的副院长与黑心药代联手做局、背锅惨死的天才医生 · 重生归来，她要凭两世医术悬壶济世，让拿病人性命牟利的人血债血偿",
      "stakes": "8 种截然不同的结局：医术封神成为传奇 / 与默默护她的真爱携手 / 黑心者法网难逃 / 悬壶远行救死扶伤 / 双向救赎彼此治愈 / 建免费医院大爱无疆……命运由你的选择书写。",
      "theme": "INFERRED: 重生 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 重生 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "chongsheng_weihou",
    "storyType": "manju",
    "title_zh": "重生为后",
    "title_en": "REBORN AS EMPRESS",
    "genre": "重生复仇 · 重生为后",
    "tagline": "贤良一生却被奸妃构陷成“妒后”、打入冷宫毒杀的废后 · 重生回到初入宫那年，她要步步为营，重坐凤位、昭雪冤屈、护住所爱",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "贤良一生的苏锦，被慕容贵妃与太后联手构陷成“善妒毒后”，打入冷宫、一杯毒酒赐死，连兄长都被牵连流放。再睁眼，她重生回到初入宫为妃那年——这一世，她带着两世记忆，…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在深宫立足、怎样抢先护住兄长、到选择哪种方式昭雪冤屈、惩治奸妃，每一个关键抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种截然不同的结局：重坐凤位母仪天下 / 与看清真相的帝王一生一世 / 奸妃太后法网难逃 / 离宫归隐放下一切 / 双向救赎彼此治愈 / 开创盛世贤后千古………",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏锦 (女主)",
        "functionSummary_zh": "重生前: 被构陷毒杀的废后 / 重生后: 回到初入宫为妃那年"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "萧承煜 (男主)",
        "functionSummary_zh": "当朝帝王 · 上一世被谗言蒙蔽、悔恨终生，这一世护她周全"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "慕容贵妃 (反派)",
        "functionSummary_zh": "笑面蛇蝎 · 上一世构陷她“妒后”的主谋"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "太后 (反派)",
        "functionSummary_zh": "把持朝政的太后 · 构陷案幕后的真正黑手"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "苏景 (配角)",
        "functionSummary_zh": "女主兄长 · 上一世被牵连流放、客死他乡"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "翠儿 (配角)",
        "functionSummary_zh": "贴身宫女 · 两世都对她忠心不二"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素白宫装下藏着凤仪之姿 · 一双沉静却锋利的眼 · 眉心一点朱砂",
      "protagonist": "萧承煜 (男主)",
      "antagonist": "慕容贵妃 (反派); 太后 (反派)",
      "centralConflict": "贤良一生却被奸妃构陷成“妒后”、打入冷宫毒杀的废后 · 重生回到初入宫那年，她要步步为营，重坐凤位、昭雪冤屈、护住所爱",
      "stakes": "8 种截然不同的结局：重坐凤位母仪天下 / 与看清真相的帝王一生一世 / 奸妃太后法网难逃 / 离宫归隐放下一切 / 双向救赎彼此治愈 / 开创盛世贤后千古……命运由你的选择书写。",
      "theme": "INFERRED: 重生 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 重生 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "chongsheng_xueba",
    "storyType": "manju",
    "title_zh": "重生之学霸归来",
    "title_en": "GENIUS REBORN",
    "genre": "重生复仇 · 逆袭学霸",
    "tagline": "前世被同窗陷害、埋没才华、郁郁而终的学渣 · 重生回到高中,带着记忆与远见,从垫底差生逆袭成无人能及的天才学霸",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "前世,夏晚晴本有过人天赋,却被同窗白曼陷害、被势利老师打压,才华埋没,郁郁而终。重生回到高中时代,她带着前世的记忆与远见,誓要洗刷冤屈、逆袭学业,从垫底差生,活…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何逆袭成绩、怎样应对陷害、到选择实现理想的方式,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：成为顶尖学霸 / 与学神携手 / 揭穿陷害 / 实现理想……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "夏晚晴 (女主)",
        "functionSummary_zh": "重生前: 被陷害埋没的普通人 / 重生后: 回到高中时代"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾屿衡 (男主)",
        "functionSummary_zh": "清冷的校草学神 · 唯独欣赏她的才华与韧劲"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白曼 (反派)",
        "functionSummary_zh": "前世陷害她的同窗 · 表面优等生、实则心机深"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "势利班主任 (反派)",
        "functionSummary_zh": "偏心捧高踩低的老师 · 前世打压女主"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "好友小桃 (配角)",
        "functionSummary_zh": "女主的同桌挚友 · 一路力挺"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "恩师 (配角)",
        "functionSummary_zh": "慧眼识才的老教师 · 暗中栽培女主"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清秀的校服少女 · 一双重生后透着睿智与坚定的眼睛",
      "protagonist": "顾屿衡 (男主)",
      "antagonist": "白曼 (反派); 势利班主任 (反派)",
      "centralConflict": "前世被同窗陷害、埋没才华、郁郁而终的学渣 · 重生回到高中,带着记忆与远见,从垫底差生逆袭成无人能及的天才学霸",
      "stakes": "8 种结局：成为顶尖学霸 / 与学神携手 / 揭穿陷害 / 实现理想……命运由你书写。",
      "theme": "INFERRED: 重生 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 重生 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "chuanshu_nixi",
    "storyType": "manju",
    "title_zh": "穿书之炮灰逆袭",
    "title_en": "REWRITE MY FATE",
    "genre": "穿越 · 穿书改命",
    "tagline": "一觉醒来穿成虐文里三集就领便当的恶毒女配 · 她手握原著剧情，誓要改写炮灰的既定结局，活出自己的主角光环",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "网文编辑苏轻晚熬夜改稿猝死，再睁眼竟穿进自己编的虐文里，成了开篇三章就因陷害女主而被赐死的恶毒女配。手握原著剧情的她，决定不再按剧本送死——既然知道结局，那就改…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何避开既定的死亡剧情、怎样应对原著主角、到选择改写命运的方式，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：成为真正的女主 / 与反派BOSS携手 / 跳出剧情自由 / 反转碾压白莲花……命运由你改写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏轻晚 (女主)",
        "functionSummary_zh": "穿书前: 资深网文编辑 / 穿书后: 三章便领盒饭的恶毒女配"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "萧决 (男主)",
        "functionSummary_zh": "原著里冷酷的反派BOSS · 本该黑化身死"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白莲花女主 (反派)",
        "functionSummary_zh": "原著的\"白月光\"女主 · 实则心机绿茶"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "原配太子 (反派)",
        "functionSummary_zh": "原著男主 · 渣得理直气壮"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小桃 (配角)",
        "functionSummary_zh": "女配的贴身丫鬟 · 唯一的忠仆"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "系统 (配角)",
        "functionSummary_zh": "绑定女主的剧情系统 · 时常掉链子"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "华丽宫装下一张明艳的脸 · 眼神却透着现代人的清醒与狡黠",
      "protagonist": "萧决 (男主)",
      "antagonist": "白莲花女主 (反派); 原配太子 (反派)",
      "centralConflict": "一觉醒来穿成虐文里三集就领便当的恶毒女配 · 她手握原著剧情，誓要改写炮灰的既定结局，活出自己的主角光环",
      "stakes": "8 种结局：成为真正的女主 / 与反派BOSS携手 / 跳出剧情自由 / 反转碾压白莲花……命运由你改写。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "chunai_chongqi",
    "storyType": "manju",
    "title_zh": "宠妻无度：总裁的契约新娘",
    "title_en": "SPOILED BY THE CEO",
    "genre": "甜宠日常 · 宠妻无度",
    "tagline": "为还父亲的债，温软签下契约嫁给传闻冷血的霍氏总裁 · 本以为是一场煎熬，谁知这位冰山丈夫却把她宠到防不胜防 · 那纸冰冷契约的背后，竟藏着一个男人跨越十年的深情奔赴",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "ally",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "为了还清父亲的债，走投无路的温软签下一纸契约，嫁给了传闻中冷血无情的霍氏总裁霍沉舟。本以为是一年的煎熬，谁知这位冰山丈夫却反常地，把她照顾得无微不至、宠到防不胜…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何面对这份反常的宠爱、怎样在朝夕相处里靠近、到身世真相揭开后的去留抉择，每个选择都通向不同的甜蜜结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：宠妻无度 / 比翼双飞 / 一生不负 / 双向救赎 / 平凡是福 / 自在相伴 / 阖家温暖 / 苦尽甘来……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "温软 (女主)",
        "functionSummary_zh": "为父还债的普通女孩 · 善良坚韧、被宠到沦陷 · 不知自己是丈夫藏了十年的人"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "霍沉舟 (男主)",
        "functionSummary_zh": "霍氏集团总裁 · 传闻冷血、实则傲娇 · 为寻她寻了十年、宠她宠到无度"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白安 (反派)",
        "functionSummary_zh": "霍沉舟传闻中的白月光 · 归来想搅局复合"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "霍母 (配角)",
        "functionSummary_zh": "霍沉舟的母亲 · 起初不满契约、后被温软打动"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小棠 (配角)",
        "functionSummary_zh": "温软的闺蜜 · 仗义直爽 · 恋爱观察员"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老管家 (配角)",
        "functionSummary_zh": "霍宅老管家 · 看着霍沉舟长大、暗中助攻"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "温婉柔美 · 简单素净的穿搭 · 笑起来眉眼弯弯 · 惹人怜爱",
      "protagonist": "霍沉舟 (男主)",
      "antagonist": "白安 (反派)",
      "centralConflict": "为还父亲的债，温软签下契约嫁给传闻冷血的霍氏总裁 · 本以为是一场煎熬，谁知这位冰山丈夫却把她宠到防不胜防 · 那纸冰冷契约的背后，竟藏着一个男人跨越十年的深情奔赴",
      "stakes": "8 种结局：宠妻无度 / 比翼双飞 / 一生不负 / 双向救赎 / 平凡是福 / 自在相伴 / 阖家温暖 / 苦尽甘来……结局，由你来选。",
      "theme": "INFERRED: 甜宠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "daiqiu_shiyi",
    "storyType": "manju",
    "title_zh": "失忆带球",
    "title_en": "THE SECRET HEIR",
    "genre": "现代豪门 · 失忆带球",
    "tagline": "她带着身孕从他身边消失,五年后携天才萌娃强势归来 · 一边是不肯认账的冰山总裁爹地,一边是机灵护妈的小奶包,这场重逢,鸡飞狗跳又甜到牙疼",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "五年前,设计师林晚在一场车祸中失去记忆,从霍庭州的世界里彻底消失。五年后,她带着一个粉雕玉琢、智商高得吓人的小奶包「小核桃」强势归来,成了炙手可热的设计大师。命…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "重逢之后,林晚面临一次次抉择:要不要相信这个陌生又熟悉的男人、要不要找回失去的记忆、要不要让孩子认这个爹。每一步,都让真相离她更近,也让那个冷峻的男人,一步步沦…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "当五年前车祸的真相揭开、霍庭州为护她们母子挡下致命危机,八种结局,由这位独立坚强的妈妈,亲手抉择。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "林晚 (女主)",
        "functionSummary_zh": "顶尖设计师 · 五年前失忆离开 / 独自养育萌娃"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "霍庭州 (男主)",
        "functionSummary_zh": "霍氏集团总裁 · 冷峻矜贵 · 苦寻她五年"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "苏曼 (反派 1)",
        "functionSummary_zh": "霍庭州未婚妻人选 · 当年设计林晚出车祸"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "霍朝阳 (反派 2)",
        "functionSummary_zh": "霍氏二房 · 觊觎家产"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小核桃 (配角)",
        "functionSummary_zh": "林晚与霍庭州的五岁萌娃 · 高智商护妈"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿May (配角)",
        "functionSummary_zh": "林晚的经纪人兼好友 · 毒舌护主"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "干练优雅 · 笑起来温柔 · 护崽如虎",
      "protagonist": "霍庭州 (男主)",
      "antagonist": "苏曼 (反派 1); 霍朝阳 (反派 2)",
      "centralConflict": "她带着身孕从他身边消失,五年后携天才萌娃强势归来 · 一边是不肯认账的冰山总裁爹地,一边是机灵护妈的小奶包,这场重逢,鸡飞狗跳又甜到牙疼",
      "stakes": "当五年前车祸的真相揭开、霍庭州为护她们母子挡下致命危机,八种结局,由这位独立坚强的妈妈,亲手抉择。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "dinv_chongsheng",
    "storyType": "manju",
    "title_zh": "嫡女重生录",
    "title_en": "THE NOBLE REBORN",
    "genre": "重生复仇 · 嫡女重生",
    "tagline": "前世被庶妹陷害、嫁错郎君、惨死灭门的相府嫡女 · 重生回到豆蔻年华,带着前世的血泪记忆,誓要把所有亏欠,连本带利讨回来",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "family-ruin-revenge",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "前世,相府嫡女凌玉昭被庶妹陷害、嫁给了表面温文实则贪婪虚伪的伪君子,最终落得家破人亡、惨死灭门的下场。重生回到豆蔻年华,她带着前世的血泪记忆,誓要避开所有陷阱,…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何避开前世悲剧、怎样揭穿庶妹的算计、到选择新的人生方向,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：相府重立 / 与王爷携手 / 灭门复仇 / 改写命运……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "凌玉昭 (女主)",
        "functionSummary_zh": "重生前: 被陷害灭门的相府嫡女 / 重生后: 回到豆蔻年华"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "裴砚 (男主)",
        "functionSummary_zh": "前世救她于水火的少年王爷 · 这一世,她绝不再错过"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "庶妹凌妙妙 (反派)",
        "functionSummary_zh": "前世陷害嫡姐的庶妹 · 一脸柔弱、暗藏毒辣"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "前世负心夫 (反派)",
        "functionSummary_zh": "前世骗婚负心的伪君子 · 实则贪婪虚伪"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "贴身丫鬟 (配角)",
        "functionSummary_zh": "与女主同生共死的忠仆"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "外祖大将军 (配角)",
        "functionSummary_zh": "女主的外祖、镇国大将军"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "淡青色嫡女襦裙 · 一双带着前世血泪的清冷眼眸 · 风华内敛",
      "protagonist": "裴砚 (男主)",
      "antagonist": "庶妹凌妙妙 (反派); 前世负心夫 (反派)",
      "centralConflict": "前世被庶妹陷害、嫁错郎君、惨死灭门的相府嫡女 · 重生回到豆蔻年华,带着前世的血泪记忆,誓要把所有亏欠,连本带利讨回来",
      "stakes": "8 种结局：相府重立 / 与王爷携手 / 灭门复仇 / 改写命运……命运由你书写。",
      "theme": "INFERRED: 重生 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 重生 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "dinv_guilai",
    "storyType": "manju",
    "title_zh": "嫡女归来",
    "title_en": "THE NOBLE DAUGHTER",
    "genre": "古装宅斗 · 嫡女复仇",
    "tagline": "被庶妹毒杀、母族蒙冤的将门遗孤，一朝重生回到十年前未遭陷害的少女时代 · 这一世她步步为营，要夺回身份、复仇雪恨、护住所爱",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "宅斗",
    "familyKey": "house-intrigue",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "将门遗孤沈清辞被抱养入沈府，却被庶妹沈月柔与王姨娘联手设计，毒害嫡母、污её名声，最终一碗毒药结束了她的性命。再睁眼，她重生回到十年前——这一次，她要带着记忆，…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何对付伪善的庶妹、怎样揭开自己的身世之谜、到选择哪种方式复仇，每一个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：凤冠加身母仪天下 / 与靖王世子互许终身 / 仇敌满门覆灭 / 归隐山林 / 彼此疗愈 / 化恨为善……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈清辞 (女主)",
        "functionSummary_zh": "重生前: 被庶妹毒杀的沈府嫡女 / 重生后: 回到十年前的少女时代（真实身份为将门遗孤）"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "裴砚之 (男主)",
        "functionSummary_zh": "靖王世子 · 上一世为护她而死的人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "沈月柔 (反派)",
        "functionSummary_zh": "庶妹 · 上一世笑里藏刀、亲手在她药中下毒"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "王姨娘 (反派)",
        "functionSummary_zh": "庶妹生母 · 阴狠毒辣、觊觎主母之位"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "沈母 (配角)",
        "functionSummary_zh": "女主嫡母 · 上一世被姨娘母女联手害死"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "春桃 (配角)",
        "functionSummary_zh": "贴身丫鬟 · 两世都对她忠心不二"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "月白绣兰罗裙 · 清冷绝色 · 眉眼温婉却藏着重生者的锋芒",
      "protagonist": "裴砚之 (男主)",
      "antagonist": "沈月柔 (反派); 王姨娘 (反派)",
      "centralConflict": "被庶妹毒杀、母族蒙冤的将门遗孤，一朝重生回到十年前未遭陷害的少女时代 · 这一世她步步为营，要夺回身份、复仇雪恨、护住所爱",
      "stakes": "8 种结局：凤冠加身母仪天下 / 与靖王世子互许终身 / 仇敌满门覆灭 / 归隐山林 / 彼此疗愈 / 化恨为善……命运由你书写。",
      "theme": "INFERRED: 宅斗 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "duimen_yingdi",
    "storyType": "manju",
    "title_zh": "对门那位影帝",
    "title_en": "THE STAR NEXT DOOR",
    "genre": "甜宠日常 · 对门影帝",
    "tagline": "社恐插画师搬进老破小，对门住进个戴口罩深居简出的「怪邻居」 · 半夜总有黑车来接——她以为是社会人，其实是为躲狗仔化名租住的顶流影帝",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "林小满搬进城中村老破小那天，对门搬来个从头捂到脚的「怪邻居」——戴口罩，少说话，半夜总有黑色商务车来接。她暗自贴了标签：社会人，惹不起，躲着走。直到一只爱串门的…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从第一次冲突怎么处理、撞破身份时如何反应、到身份曝光后是守护还是退缩，每个选择都通向不同甜度的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：对门到对桌 / 双向奔赴 / 隐婚日常 / 先婚后爱乌龙 / 错过 / 守护者 / 双向暗恋 / 全网吃瓜……糖度由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "林小满 (女主)",
        "functionSummary_zh": "自由插画师 · 社恐宅女 · 刚搬进老破小"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆时衍 (男主)",
        "functionSummary_zh": "顶流影帝 · 化名「陆叔」租住对门 · 深居简出"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "苏曼 (反派)",
        "functionSummary_zh": "陆时衍合作女星 · 绯闻对象 · 常制造误会(并无恶意)"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "狗仔阿K (反派)",
        "functionSummary_zh": "娱乐八卦记者 · 蹲点跟拍 · 一心想拍大新闻"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老周 (配角)",
        "functionSummary_zh": "房东大爷 · 话痨牵线人 · 自封红娘"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿May (配角)",
        "functionSummary_zh": "女主闺蜜 · 毒舌助攻 · 恋爱军师"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "齐刘海中长发 · 宽大卫衣加睡裤 · 常戴猫耳发箍 · 鼻尖爱皱",
      "protagonist": "陆时衍 (男主)",
      "antagonist": "苏曼 (反派); 狗仔阿K (反派)",
      "centralConflict": "社恐插画师搬进老破小，对门住进个戴口罩深居简出的「怪邻居」 · 半夜总有黑车来接——她以为是社会人，其实是为躲狗仔化名租住的顶流影帝",
      "stakes": "8 种结局：对门到对桌 / 双向奔赴 / 隐婚日常 / 先婚后爱乌龙 / 错过 / 守护者 / 双向暗恋 / 全网吃瓜……糖度由你书写。",
      "theme": "INFERRED: 甜宠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "dujie_feisheng",
    "storyType": "manju",
    "title_zh": "渡劫飞升",
    "title_en": "ASCENSION",
    "genre": "古言仙侠 · 渡劫飞升",
    "tagline": "苦修千年的散修女子,终于迎来飞升天劫 · 可九重天劫的最后一重,竟是斩断她与心上人的情劫；飞升,还是坠落?",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "散修凌霜,无门无派,苦修千年,终于迎来飞升的九重天劫。就在她准备渡劫之时,一个失忆的男子从天而降——他是上界仙君应渊,为了她,甘愿下界历一场情劫。凌霜不知道,这…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "渡劫之路上,师妹觊觎机缘、心魔蛊惑道心、上界催她飞升。凌霜与应渊在一次次生死劫中互生情愫。她要在「飞升大道」与「人间情劫」之间,一重一重,做出抉择。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "当九重天劫尽数揭开、应渊为护她道心甘愿魂消,最后一重情劫摆在面前,八种结局,由这颗千年道心,亲手抉择。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "凌霜 (女主)",
        "functionSummary_zh": "千年散修 · 清冷孤傲 / 飞升在即"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "应渊 (男主)",
        "functionSummary_zh": "上界仙君 · 为她下界历情劫 · 失忆"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "云璃 (反派 1)",
        "functionSummary_zh": "凌霜同门师妹 · 觊觎她的机缘"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "天劫魔 (反派 2)",
        "functionSummary_zh": "寄生天劫的心魔 · 专食道心"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小灵 (配角)",
        "functionSummary_zh": "凌霜的灵宠雪貂 · 通人性"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "守劫人 (配角)",
        "functionSummary_zh": "历代渡劫的引路者 · 神秘莫测"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "银白法袍 · 眉心霜痕 · 周身寒气",
      "protagonist": "应渊 (男主)",
      "antagonist": "云璃 (反派 1); 天劫魔 (反派 2)",
      "centralConflict": "苦修千年的散修女子,终于迎来飞升天劫 · 可九重天劫的最后一重,竟是斩断她与心上人的情劫；飞升,还是坠落?",
      "stakes": "当九重天劫尽数揭开、应渊为护她道心甘愿魂消,最后一重情劫摆在面前,八种结局,由这颗千年道心,亲手抉择。",
      "theme": "INFERRED: 仙侠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "dujun_aiqing",
    "storyType": "manju",
    "title_zh": "督军的金丝雀",
    "title_en": "THE GENERAL LOVE",
    "genre": "民国乱世 · 督军爱情",
    "tagline": "她是落难的旧式闺秀,他是叱咤一方的铁血督军 · 一道强娶的命令,把她锁进了督军府这座精美的牢笼,却也锁出了一段乱世里最浓烈的爱",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "民国",
    "familyKey": "republican",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "宋家落难,父亲被人构陷下狱。叱咤一方的铁血督军陆征,以救她父亲为条件,强娶了她。她以为这是一场冷漠的政治联姻,却没料到,这个杀伐果断的男人,把她锁进督军府,却也…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何面对铁血督军、怎样应对姨太太陷害、到这段感情如何升温,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：乱世真情 / 与君携手 / 守护爱人 / 救父雪冤……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "宋婉 (女主)",
        "functionSummary_zh": "家道中落的旧式闺秀 · 温婉外表下藏着不肯低头的傲骨"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆征 (男主)",
        "functionSummary_zh": "叱咤一方的铁血督军 · 杀伐果断 · 唯独对她破例"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "姨太太 (反派)",
        "functionSummary_zh": "督军府的姨太太 · 处处算计这位\"夫人\""
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "政敌军阀 (反派)",
        "functionSummary_zh": "与督军作对的对手 · 觊觎女主"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "忠诚副官 (配角)",
        "functionSummary_zh": "督军最忠诚的副官 · 暗中守护这对夫妻"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "闺中密友 (配角)",
        "functionSummary_zh": "女主的手帕交 · 患难与共"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素色旗袍 · 一双清亮坚定的眼睛 · 温婉里带着风骨",
      "protagonist": "陆征 (男主)",
      "antagonist": "姨太太 (反派); 政敌军阀 (反派)",
      "centralConflict": "她是落难的旧式闺秀,他是叱咤一方的铁血督军 · 一道强娶的命令,把她锁进了督军府这座精美的牢笼,却也锁出了一段乱世里最浓烈的爱",
      "stakes": "8 种结局：乱世真情 / 与君携手 / 守护爱人 / 救父雪冤……命运由你书写。",
      "theme": "INFERRED: 民国 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "fanpai_nipei",
    "storyType": "manju",
    "title_zh": "反派女配不退场",
    "title_en": "THE VILLAINESS WON'T QUIT",
    "genre": "穿越 · 反派女配",
    "tagline": "金牌编剧穿成古早虐文里满门抄斩的恶毒女配 · 她偏不按剧本陷害女主，转身靠真本事自救 · 却发现那个柔柔弱弱的女主，才是真正的蛇蝎",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "金牌编剧苏锦绣加班猝死，睁眼竟穿进自己骂了千遍的古早虐文，成了那个处处陷害柔弱女主、最终被太子下令满门抄斩的恶毒女配。她手握原著剧情，决定不再按剧本送死——这一…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何摆脱「恶毒女配」的人设、怎样识破柔弱女主的真面目、到选择改命的方式，每一个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：洗白上位 / 与摄政王携手 / 假女主身败名裂 / 护住苏家满门 / 双向救赎 / 救下全员配角 / 远走逍遥 / 笑看风云……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏锦绣 (女主)",
        "functionSummary_zh": "穿书前: 金牌编剧 / 穿书后: 注定满门抄斩的恶毒女配、丞相府嫡女"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "裴煜 (男主)",
        "functionSummary_zh": "冷面摄政王 · 原著里被女配死缠烂打、其实从未负她的人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "林微雨 (反派)",
        "functionSummary_zh": "原著「柔弱白月光」女主 · 楚楚可怜的皮囊下藏着蛇蝎心肠"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "萧承泽 (反派)",
        "functionSummary_zh": "原著男主太子 · 自诩深情、实则薄情的伪君子"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "翠儿 (配角)",
        "functionSummary_zh": "苏锦绣的贴身丫鬟 · 第一个相信小姐变了的人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "苏明轩 (配角)",
        "functionSummary_zh": "苏锦绣的嫡兄 · 镇守边关的少年将军"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "明艳张扬的宫装 · 一双带笑的桃花眼 · 眼底却是现代人的清醒与凌厉",
      "protagonist": "裴煜 (男主)",
      "antagonist": "林微雨 (反派); 萧承泽 (反派)",
      "centralConflict": "金牌编剧穿成古早虐文里满门抄斩的恶毒女配 · 她偏不按剧本陷害女主，转身靠真本事自救 · 却发现那个柔柔弱弱的女主，才是真正的蛇蝎",
      "stakes": "8 种结局：洗白上位 / 与摄政王携手 / 假女主身败名裂 / 护住苏家满门 / 双向救赎 / 救下全员配角 / 远走逍遥 / 笑看风云……命运由你书写。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "fayi_tanan",
    "storyType": "manju",
    "title_zh": "暗夜追凶",
    "title_en": "NIGHT FORENSICS",
    "genre": "悬疑复仇 · 法医探案",
    "tagline": "天才法医联手冷峻刑警 · 在层层叠叠的离奇命案中,以解剖刀为笔,在死者的身上,写下沉冤昭雪的最终判词",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "城市接连发生离奇命案,死者死状诡异、现场毫无痕迹。天才女法医江清与刑警队长霍司寒联手,从一具具尸体里寻找真相。随着调查深入,他们渐渐发现,这些案子,竟指向一桩尘…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何切入案件、怎样追查真凶、到最终如何破局,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：真凶落网 / 患难真情 / 守护正义 / 揪出内鬼……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "江清 (女主)",
        "functionSummary_zh": "天才女法医 · 心思缜密、能让尸体\"开口说话\""
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "霍司寒 (男主)",
        "functionSummary_zh": "冷峻刑警队长 · 与女主并肩追凶"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "连环凶手 (反派)",
        "functionSummary_zh": "潜伏多年的连环杀手 · 高智商伪装"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "警队内鬼 (反派)",
        "functionSummary_zh": "潜伏警队的内应 · 为凶手通风报信"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "法医助手 (配角)",
        "functionSummary_zh": "女主的助手 · 细心可靠"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老队长 (配角)",
        "functionSummary_zh": "刑警队老队长 · 经验丰富、暗中指点"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "白大褂下一双冷静锐利的眼睛 · 干练沉静",
      "protagonist": "霍司寒 (男主)",
      "antagonist": "连环凶手 (反派); 警队内鬼 (反派)",
      "centralConflict": "天才法医联手冷峻刑警 · 在层层叠叠的离奇命案中,以解剖刀为笔,在死者的身上,写下沉冤昭雪的最终判词",
      "stakes": "8 种结局：真凶落网 / 患难真情 / 守护正义 / 揪出内鬼……命运由你书写。",
      "theme": "INFERRED: 悬疑 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "feicai_nixi",
    "storyType": "manju",
    "title_zh": "废材逆天",
    "title_en": "THE WORTHLESS GENIUS",
    "genre": "穿越 · 修仙废材",
    "tagline": "灵根尽废、被退婚逐出的修仙废材 · 一朝觉醒上古传承 · 从人人嘲笑的草包，一路逆袭成震动修仙界的绝世天才",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "现代医学学霸叶轻寒，穿成修仙界一个灵根尽废、被退婚逐出、人人嘲笑的废材少女。就在她跌入谷底之际，体内一缕上古传承悄然觉醒——从此，那个被踩进尘埃的废材，要一路逆…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从靠什么逆袭起步、如何一鸣惊人地崛起、到怎样掀翻看不起她的强敌，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：飞升成仙 / 携手剑尊 / 打脸封神 / 重立宗门 / 双向救赎 / 悬壶济世 / 渣男伏诛 / 逍遥红尘……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "叶轻寒 (女主)",
        "functionSummary_zh": "穿越前: 现代医学学霸 / 穿越后: 灵根尽废、被退婚的修仙废材"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "君无极 (男主)",
        "functionSummary_zh": "清冷剑尊 · 一眼看出废材身上的惊世造化"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "萧承 (反派)",
        "functionSummary_zh": "退婚的天才未婚夫 · 嫌弃废材、转身另攀高枝"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "林妙音 (反派)",
        "functionSummary_zh": "嚣张跋扈的天才师姐 · 处处打压踩低"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小灵 (配角)",
        "functionSummary_zh": "觉醒的上古传承之灵 · 古灵精怪、嘴欠却有用"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "药尊 (配角)",
        "functionSummary_zh": "隐世的炼丹老前辈 · 慧眼识珠、收她为徒"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素白道袍 · 清冷绝色 · 一双沉静的眼里 · 藏着废材不该有的锋芒",
      "protagonist": "君无极 (男主)",
      "antagonist": "萧承 (反派); 林妙音 (反派)",
      "centralConflict": "灵根尽废、被退婚逐出的修仙废材 · 一朝觉醒上古传承 · 从人人嘲笑的草包，一路逆袭成震动修仙界的绝世天才",
      "stakes": "8 种结局：飞升成仙 / 携手剑尊 / 打脸封神 / 重立宗门 / 双向救赎 / 悬壶济世 / 渣男伏诛 / 逍遥红尘……命运由你书写。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "fenghuanchao",
    "storyType": "manju",
    "title_zh": "重生之凤还巢",
    "title_en": "PHOENIX RETURNS",
    "genre": "重生复仇 · 虐渣打脸",
    "tagline": "被渣夫和伪闺蜜联手害死、家破人亡的豪门长女，重生回到一切悲剧的起点 · 这一世她步步为营，要让所有人血债血偿",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "family-ruin-revenge",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "沈氏长女沈知意被渣夫顾承宇和伪闺蜜林梦溪联手设局，背上骂名、害死母亲、吞并家产，最终惨死。再睁眼，她重生回到与顾承宇订婚的那一天——这一世，她带着前世记忆，要把…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何摆脱渣男婚约、怎样抢先保护体弱的母亲、到选择哪种方式让仇人付出代价，每一个关键抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种截然不同的结局：登顶商业帝国 / 与默默守护的真爱携手 / 渣男渣女法网难逃 / 远走高飞放下一切 / 双向救赎彼此治愈 / 化恨为爱回馈社会……命运由你…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈知意 (女主)",
        "functionSummary_zh": "重生前: 被害身亡、家破人亡的沈氏长女 / 重生后: 回到 25 岁订婚当天"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆景琛 (男主)",
        "functionSummary_zh": "京圈隐形大佬 · 上一世默默守护她十年的人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "顾承宇 (反派)",
        "functionSummary_zh": "渣前夫 · 上一世为吞并沈氏亲手害死她"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "林梦溪 (反派)",
        "functionSummary_zh": "伪闺蜜 · 上一世假意姐妹、暗中夺走她的一切"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "沈母 (配角)",
        "functionSummary_zh": "女主母亲 · 上一世被气病、含恨而终"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "陈律师 (配角)",
        "functionSummary_zh": "女主的法律顾问 · 上一世唯一为她奔走的人"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "一袭月白长裙 · 清冷眉眼 · 眼底藏着重生者的狠厉与清醒",
      "protagonist": "陆景琛 (男主)",
      "antagonist": "顾承宇 (反派); 林梦溪 (反派)",
      "centralConflict": "被渣夫和伪闺蜜联手害死、家破人亡的豪门长女，重生回到一切悲剧的起点 · 这一世她步步为营，要让所有人血债血偿",
      "stakes": "8 种截然不同的结局：登顶商业帝国 / 与默默守护的真爱携手 / 渣男渣女法网难逃 / 远走高飞放下一切 / 双向救赎彼此治愈 / 化恨为爱回馈社会……命运由你的选择书写。",
      "theme": "INFERRED: 重生 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 重生 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "fenghuang_niepan",
    "storyType": "manju",
    "title_zh": "凤凰涅槃",
    "title_en": "Phoenix Reborn",
    "genre": "古言仙侠 · 凤凰涅槃",
    "tagline": "丹霞宗满门被屠、身负凤凰血脉的宗主之女坠下深渊 · 灵根尽废却浴火重生的苏离火,以凤凰涅槃之火踏上修真之路,查灭门真凶、破苍生阴谋、焚尽仇敌,从灭门遗孤涅槃成令天下景仰的凤血传人",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "千年仙门丹霞宗一夜之间被滔天魔焰屠灭满门,身负凤凰血脉的宗主之女苏离火,被蒙面人一掌震下万丈深渊。本该粉身碎骨的她,却在谷底烈火中,被沉睡的凤凰血脉生生唤醒——…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "是隐姓拜入仙门韬光养晦、是追查那灭门蒙面人的踪迹,还是循血脉指引寻上古凤凰传承?是闯荡魔域以命淬火、是结盟正道同道撕破仇敌画皮,还是探查出玄天子献祭释魔神的惊天…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局:渡劫飞升位列仙班 / 仙侣情深携手双修 / 血仇尽雪重建宗门 / 守护苍生镇守天地 / 凤血传承开宗立派 / 看破红尘逍遥天地 / 凤主天下执掌修真…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏离火 (女主)",
        "functionSummary_zh": "丹霞宗宗主之女、凤凰血脉最后的传人 · 满门被屠、坠崖灵根尽废,却被凤血唤醒、浴火重生 · 以凤凰涅槃之火修行复仇、破阴谋、护苍生,从灭门遗孤涅槃成凤血传人"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "道侣/同道 (男主)",
        "functionSummary_zh": "与苏离火并肩历劫的同道知己 · 一路相护、生死与共,欣赏她的坚韧与道心,终成携手双修的仙侣"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "玄天子 (反派 1)",
        "functionSummary_zh": "天罡门门主、灭门真凶 · 表面名门正派,实则屠戮宗门、搜罗上古血脉,欲献祭释放魔神以求长生,是屠灭丹霞宗满门的幕后黑手"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "天罡门长老 (反派 2)",
        "functionSummary_zh": "玄天子心腹爪牙 · 助纣为虐、追杀凤血传人,为虎作伥执行屠门夺脉之事"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "凤凰虚影 (配角)",
        "functionSummary_zh": "上古凤凰一族残存的意志 · 于凤凰冢认苏离火为主,授其凤凰传承与使命,指引她走上证道之路"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "正道盟友 (配角)",
        "functionSummary_zh": "同受天罡门所害的正道修士 · 因苏离火揭破恶行而聚于其麾下,并肩讨伐天罡门、共抗邪魔"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "赤金凤纹劲装 · 绝美凌厉 · 眸如烈焰、周身缭绕灼目凤焰",
      "protagonist": "道侣/同道 (男主)",
      "antagonist": "玄天子 (反派 1); 天罡门长老 (反派 2)",
      "centralConflict": "丹霞宗满门被屠、身负凤凰血脉的宗主之女坠下深渊 · 灵根尽废却浴火重生的苏离火,以凤凰涅槃之火踏上修真之路,查灭门真凶、破苍生阴谋、焚尽仇敌,从灭门遗孤涅槃成令天下景仰的凤血传人",
      "stakes": "8 种结局:渡劫飞升位列仙班 / 仙侣情深携手双修 / 血仇尽雪重建宗门 / 守护苍生镇守天地 / 凤血传承开宗立派 / 看破红尘逍遥天地 / 凤主天下执掌修真界 / 放下执念浴火新生……这位涅槃重生的凤血传人,命运由你执笔。",
      "theme": "INFERRED: 仙侠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "fuchou_nvwang",
    "storyType": "manju",
    "title_zh": "复仇女王的猎杀",
    "title_en": "THE AVENGER QUEEN",
    "genre": "悬疑复仇 · 隐秘复仇",
    "tagline": "姐姐被伪装成自杀惨死，她隐姓埋名卧底仇敌公司，与冷面刑警联手追凶 · 一步步揭开一个庞大犯罪集团的惊天黑幕",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "江筱然的姐姐被伪装成\"自杀\"坠楼身亡，警方草草结案。她不信，循着姐姐留下的半截照片深入调查，化名应聘进入嫌疑最大的锦上集团卧底，并与同样背负血仇的刑警陆沉，结成…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何接近真相、如何深挖黑幕、到最终如何收网，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：沉冤得雪真凶伏法 / 患难与共相知相守 / 成为刑警守护正义 / 重获新生……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "江筱然 (女主)",
        "functionSummary_zh": "为姐复仇、卧底查案的勇敢女子 · 外柔内刚、心思缜密"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆沉 (男主)",
        "functionSummary_zh": "冷峻刑警 · 同样背负着血仇、与她殊途同归"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "真凶董事长 (反派)",
        "functionSummary_zh": "锦上集团董事长 · 犯罪集团的幕后头目"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "女总监 (反派)",
        "functionSummary_zh": "真凶的得力帮凶 · 阴险毒辣"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "关键证人 (配角)",
        "functionSummary_zh": "目击真相的人 · 终于良心未泯"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老警官 (配角)",
        "functionSummary_zh": "陆沉的师父 · 暗中给予支持"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "干练的及肩短发 · 一双锐利的眼睛 · 平静的外表下藏着复仇的火",
      "protagonist": "陆沉 (男主)",
      "antagonist": "真凶董事长 (反派); 女总监 (反派)",
      "centralConflict": "姐姐被伪装成自杀惨死，她隐姓埋名卧底仇敌公司，与冷面刑警联手追凶 · 一步步揭开一个庞大犯罪集团的惊天黑幕",
      "stakes": "8 种结局：沉冤得雪真凶伏法 / 患难与共相知相守 / 成为刑警守护正义 / 重获新生……命运由你书写。",
      "theme": "INFERRED: 悬疑 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "fuguo_weiyang",
    "storyType": "manju",
    "title_zh": "复国谍影：将门遗孤",
    "title_en": "SHADOW OF VENGEANCE",
    "genre": "民国乱世 · 复国谍影",
    "tagline": "将门一夜被灭，唯一的遗孤顾未央死里逃生，背负血海深仇 · 她改头换面潜入敌占区，伺机复仇复国 · 一位身份成谜的同志救了她、接上了暗线 · 在刀尖上，她要查清通敌卖国的局，为满门忠烈昭雪",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "民国",
    "familyKey": "republican",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "将门一夜被政敌勾结外敌满门屠尽，唯一的遗孤顾未央从尸堆里死里逃生，背负起血海深仇。她改头换面，潜入敌占区，伺机复仇、复国。危急时刻，一位身份成谜的男子君亦寒救了…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何潜伏敌营、怎样在刀尖上靠近、到身份险些暴露的生死抉择，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：复国谍影 / 大仇得报 / 门楣重光 / 岁月静好 / 双向救赎 / 山河重定 / 忠义两全 / 自在相伴……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "顾未央 (女主)",
        "functionSummary_zh": "将门唯一的遗孤 · 背负满门血仇、隐姓潜入敌营 · 智勇双全、刀尖行走"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "君亦寒 (男主)",
        "functionSummary_zh": "潜伏敌营的神秘同志 · 受顾父救命之恩、为顾家昭雪潜伏至今 · 唯独为她涉险"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "特务头子 (反派)",
        "functionSummary_zh": "敌方反间谍头目 · 阴鸷多疑、步步紧逼"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周敬堂 (反派)",
        "functionSummary_zh": "屠戮顾家的叛徒 · 通敌卖国、位高权重"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老吴 (配角)",
        "functionSummary_zh": "顾家幸存的老旧部 · 忠心耿耿、誓死追随"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿月 (配角)",
        "functionSummary_zh": "忠诚的交通员 · 顾未央最信任的下线"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清冷决绝 · 朴素旗袍下藏着锋芒 · 一双淬着仇恨与坚定的眼",
      "protagonist": "君亦寒 (男主)",
      "antagonist": "特务头子 (反派); 周敬堂 (反派)",
      "centralConflict": "将门一夜被灭，唯一的遗孤顾未央死里逃生，背负血海深仇 · 她改头换面潜入敌占区，伺机复仇复国 · 一位身份成谜的同志救了她、接上了暗线 · 在刀尖上，她要查清通敌卖国的局，为满门忠烈昭雪",
      "stakes": "8 种结局：复国谍影 / 大仇得报 / 门楣重光 / 岁月静好 / 双向救赎 / 山河重定 / 忠义两全 / 自在相伴……结局，由你来选。",
      "theme": "INFERRED: 民国 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "gaiming_chongsheng",
    "storyType": "manju",
    "title_zh": "改命重生",
    "title_en": "REWRITE DESTINY",
    "genre": "重生复仇 · 重生改命",
    "tagline": "被渣未婚夫与伪闺蜜联手害死、家破人亡的寒门女孩 · 重生归来，她要凭着对未来的全部记忆，改写卑微的命运，让窃据她人生的人血债血偿",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "family-ruin-revenge",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "寒门女孩苏晚被渣未婚夫陆庭骁和伪闺蜜顾盼联手设局，顶替工作、窃走父亲的专利、害得家破人亡，最终死于一场“意外”。再睁眼，她重生回到大学毕业前——这一世，她带着对…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何改写命运的起点、怎样抢先护住父亲与专利、到选择哪种方式让仇人付出代价，每一个关键抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种截然不同的结局：登顶科技帝国 / 与默默守护的真爱携手 / 渣男渣女法网难逃 / 远走高飞放下一切 / 双向救赎彼此治愈 / 化恨为爱回馈社会……命运由你…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏晚 (女主)",
        "functionSummary_zh": "重生前: 被害身亡、家破人亡的寒门女孩 / 重生后: 回到大学毕业前"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "时砚 (男主)",
        "functionSummary_zh": "低调的科技投资人 · 上一世默默守护她三年的人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "陆庭骁 (反派)",
        "functionSummary_zh": "渣未婚夫 · 上一世为窃取专利亲手害死她"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "顾盼 (反派)",
        "functionSummary_zh": "伪闺蜜 · 上一世假意姐妹、暗中夺走她的一切"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "苏父 (配角)",
        "functionSummary_zh": "女主父亲 · 上一世被夺走专利、含冤而终"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "陈律师 (配角)",
        "functionSummary_zh": "女主的法律顾问 · 助她布局反杀"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清爽利落的短发 · 清醒锐利的眼神 · 周身藏着重生者的从容与狠厉",
      "protagonist": "时砚 (男主)",
      "antagonist": "陆庭骁 (反派); 顾盼 (反派)",
      "centralConflict": "被渣未婚夫与伪闺蜜联手害死、家破人亡的寒门女孩 · 重生归来，她要凭着对未来的全部记忆，改写卑微的命运，让窃据她人生的人血债血偿",
      "stakes": "8 种截然不同的结局：登顶科技帝国 / 与默默守护的真爱携手 / 渣男渣女法网难逃 / 远走高飞放下一切 / 双向救赎彼此治愈 / 化恨为爱回馈社会……命运由你的选择书写。",
      "theme": "INFERRED: 重生 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 重生 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "guize_dishisan",
    "storyType": "manju",
    "title_zh": "规则怪谈：第十三层",
    "title_en": "THE RULES",
    "genre": "悬疑复仇 · 规则怪谈",
    "tagline": "深夜回家的普通设计师，收到一张吃人的「住户须知」 · 在一栋走不出去的诡楼里，唯有严守怪诞规则才能活命 · 她要揭开规则背后的吃人游戏，让操控者血债血偿",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "深夜回家的设计师林夏，在门缝里收到一张泛黄的《住户须知》。当晚 22 点，门被敲响——按规则不开门，她逃过一劫。她这才发现，自己被困进了一栋走不出去的诡楼「第十…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在规则中求生、怎样揭开规则背后的真相、到如何对抗操控游戏的管理员，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：摧毁吃人游戏 / 患难真情 / 守护新人 / 逃出生天 / 双向救赎 / 揭穿幕后主宰 / 重定规则 / 放下释怀……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "林夏 (女主)",
        "functionSummary_zh": "普通设计师 · 被卷入规则怪谈 · 冷静、敢拼，从瑟瑟发抖到掌控全局"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾迟 (男主)",
        "functionSummary_zh": "同被困的资深通关者 · 冷峻强大、似知内情 · 唯独为她破例"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "管理员 (反派)",
        "functionSummary_zh": "操控这栋诡楼的规则管理员 · 以人命取乐"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "幕后主宰 (反派)",
        "functionSummary_zh": "管理员之上的真正主宰 · 把死亡当成一场观赏游戏"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小满 (配角)",
        "functionSummary_zh": "被林夏护着的年轻幸存者 · 第一个信她的人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿031 (配角)",
        "functionSummary_zh": "上一位幸存者留下的规则笔记主人 · 暗中为她引路"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "普通的都市装扮 · 一双从惊恐到坚定的眼 · 手里永远攥着规则纸条",
      "protagonist": "顾迟 (男主)",
      "antagonist": "管理员 (反派); 幕后主宰 (反派)",
      "centralConflict": "深夜回家的普通设计师，收到一张吃人的「住户须知」 · 在一栋走不出去的诡楼里，唯有严守怪诞规则才能活命 · 她要揭开规则背后的吃人游戏，让操控者血债血偿",
      "stakes": "8 种结局：摧毁吃人游戏 / 患难真情 / 守护新人 / 逃出生天 / 双向救赎 / 揭穿幕后主宰 / 重定规则 / 放下释怀……结局，由你来选。",
      "theme": "INFERRED: 悬疑 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "haomen_fuchou",
    "storyType": "manju",
    "title_zh": "豪门千金的复仇",
    "title_en": "THE HEIRESS REVENGE",
    "genre": "重生复仇 · 豪门复仇",
    "tagline": "被继母和异母妹妹联手赶出家门、害得身败名裂的豪门千金 · 重生归来，她要夺回属于自己的一切，让窃据她人生的人血债血偿",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "豪门千金顾微澜被继母与异母妹妹设计，夺走家产、害死生母、最终凄惨死去。重生回到一切尚未发生的那天，她带着记忆归来，誓要夺回一切、复仇雪恨。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何揭穿继母伪善、怎样夺回家族企业、到选择复仇的方式，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：执掌家族企业 / 与真心人携手 / 仇人锒铛入狱 / 远走重生……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "顾微澜 (女主)",
        "functionSummary_zh": "重生前: 被继母害死的豪门千金 / 重生后: 回到夺产阴谋开始前"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "傅司爵 (男主)",
        "functionSummary_zh": "商界巨擘 · 上一世暗中护她、为她复仇的人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "继母 (反派)",
        "functionSummary_zh": "笑面虎继母 · 上一世夺产害命的主谋"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "异母妹妹 (反派)",
        "functionSummary_zh": "伪善的妹妹 · 上一世抢走她的一切"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "生母 (配角)",
        "functionSummary_zh": "女主生母 · 上一世被继母害死"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老管家 (配角)",
        "functionSummary_zh": "看着女主长大的老管家 · 忠心耿耿"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清冷的高定套装 · 一双看透人心的眼睛 · 周身是重生者的从容",
      "protagonist": "傅司爵 (男主)",
      "antagonist": "继母 (反派); 异母妹妹 (反派)",
      "centralConflict": "被继母和异母妹妹联手赶出家门、害得身败名裂的豪门千金 · 重生归来，她要夺回属于自己的一切，让窃据她人生的人血债血偿",
      "stakes": "8 种结局：执掌家族企业 / 与真心人携手 / 仇人锒铛入狱 / 远走重生……命运由你书写。",
      "theme": "INFERRED: 重生 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 重生 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "heli_chongsheng",
    "storyType": "manju",
    "title_zh": "和离重生",
    "title_en": "A Fresh Start",
    "genre": "古装宅斗 · 和离再嫁",
    "tagline": "嫁入侯府三年,尝尽冷情磋磨 · 苏锦书不哭不闹,主动递上一纸和离书,挣脱镀金的牢笼 · 顶住满城流言,重拾才情、自立生计,在成长与治愈里,为自己重新选择一种人生",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "宅斗",
    "familyKey": "house-intrigue",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "书香门第的苏锦书,三年前风光嫁入人人艳羡的定远侯府,迎来的却是丈夫的冷淡、婆母的刁难、妾室的算计——这桩婚事,是一座精致的冷牢。一次家宴当众受辱,她心中那根弦终…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "是重拾搁置的才情笔墨、是凭巧手经营自立生计,还是把心力投入济世行善?面对前夫的悔意纠缠,是决绝拒绝、是邂逅良人重启心扉,还是专注成就自我?面对突起的恶意流言,是…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局:觅得良缘再嫁如意 / 才女风华名动京华 / 事业鼎盛女中翘楚 / 自在逍遥游历山河 / 破镜重圆浪子回头 / 良人同心比翼齐飞 / 兴学育人泽被女子…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏锦书 (女主)",
        "functionSummary_zh": "书香门第之女,曾嫁入定远侯府 · 受尽丈夫冷淡、婆母刁难、妾室算计,主动和离归家 · 顶住流言,重拾才情、自立门户,活出全新的自己"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "裴行之 (男主)",
        "functionSummary_zh": "清正温润的青年才俊 · 不嫌苏锦书和离之身,欣赏其才情与独立,以平等真诚之心相待,是治愈她的良人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "萧某 (反派 1)",
        "functionSummary_zh": "定远侯府公子、苏锦书前夫 · 婚中冷情自负、对她不闻不问;和离后(因变故)悔意渐生,几番纠缠欲复合"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "萧母 (反派 2)",
        "functionSummary_zh": "定远侯府老夫人、苏锦书前婆母 · 苛待磋磨儿媳、当众折辱,是逼苏锦书决意和离的推手之一"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "苏父 (配角)",
        "functionSummary_zh": "苏锦书之父、开明慈爱的读书人 · 不顾世俗流言,坚定接纳和离归家的女儿,是她最温暖的依靠"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "苏母 (配角)",
        "functionSummary_zh": "苏锦书生母 · 温柔体贴,心疼女儿在侯府所受的苦,归家后给她无尽的温暖与支持"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素净衣裙难掩清丽 · 眉眼舒展从容 · 卸下枷锁后愈发明亮的神采",
      "protagonist": "裴行之 (男主)",
      "antagonist": "萧某 (反派 1); 萧母 (反派 2)",
      "centralConflict": "嫁入侯府三年,尝尽冷情磋磨 · 苏锦书不哭不闹,主动递上一纸和离书,挣脱镀金的牢笼 · 顶住满城流言,重拾才情、自立生计,在成长与治愈里,为自己重新选择一种人生",
      "stakes": "8 种结局:觅得良缘再嫁如意 / 才女风华名动京华 / 事业鼎盛女中翘楚 / 自在逍遥游历山河 / 破镜重圆浪子回头 / 良人同心比翼齐飞 / 兴学育人泽被女子 / 放下释怀向阳而生……这场和离再嫁的重生路,由你执笔。",
      "theme": "INFERRED: 宅斗 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "heqin_gongzhu",
    "storyType": "manju",
    "title_zh": "和亲长公主",
    "title_en": "THE PEACE PRINCESS",
    "genre": "古装宅斗 · 和亲公主",
    "tagline": "为家国远嫁敌国的长公主，本是一枚弃子 · 她却在异国的步步杀机中,凭智慧与胆识,从和亲棋子,逆袭成左右两国命运的传奇",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "宅斗",
    "familyKey": "house-intrigue",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "两国交恶，长公主萧昭宁被父皇当作弃子，远嫁敌国和亲。异国宫廷步步杀机，她从一枚任人摆布的棋子，凭着过人的智慧与胆识，一步步在敌国站稳脚跟，最终成为左右两国命运的…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在敌国立足、怎样化解后宫倾轧、到选择左右大局的方式，每个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：执掌凤印母仪敌国 / 与摄政王携手 / 促成两国太平 / 归国重权……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "萧昭宁 (女主)",
        "functionSummary_zh": "被迫和亲的长公主 · 表面柔弱、实则智勇双全"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "慕容烈 (男主)",
        "functionSummary_zh": "敌国摄政王 · 冷峻多疑，却被她的智慧与胆识折服"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "敌国皇后 (反派)",
        "functionSummary_zh": "把持后宫的皇后 · 视和亲公主为眼中钉"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "二皇子 (反派)",
        "functionSummary_zh": "觊觎皇位的皇子 · 欲借公主生事"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "侍女青禾 (配角)",
        "functionSummary_zh": "随公主和亲的贴身侍女 · 忠心耿耿"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老太傅 (配角)",
        "functionSummary_zh": "敌国三朝老臣 · 敬重公主的才德"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "华贵的公主嫁衣 · 端庄秀美 · 眼底藏着不输男儿的胆识",
      "protagonist": "慕容烈 (男主)",
      "antagonist": "敌国皇后 (反派); 二皇子 (反派)",
      "centralConflict": "为家国远嫁敌国的长公主，本是一枚弃子 · 她却在异国的步步杀机中,凭智慧与胆识,从和亲棋子,逆袭成左右两国命运的传奇",
      "stakes": "8 种结局：执掌凤印母仪敌国 / 与摄政王携手 / 促成两国太平 / 归国重权……命运由你书写。",
      "theme": "INFERRED: 宅斗 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "hongbang_fengyun",
    "storyType": "manju",
    "title_zh": "洪帮风云",
    "title_en": "THE BROTHERHOOD",
    "genre": "民国乱世 · 洪帮风云",
    "tagline": "乱世上海滩，义薄云天的老帮主一夜遇害，洪帮群龙无首 · 一袭素衣的义女临危挑起重担 · 她要揪出内鬼、击退外敌，在这刀光剑影的江湖里，护一方华人的尊严",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "民国",
    "familyKey": "republican",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "乱世上海滩，洪帮是华人最大的靠山。义薄云天的老帮主，却在一夜之间惨遭暗算，洪帮群龙无首、群雄并起。一袭素衣的义女柳如烟临危挑起重担，与回归的少帮主龙九联手，誓要…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在帮中立足、怎样并肩整顿帮务查清真相、到如何应对外敌来犯，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：执掌洪帮 / 江湖真情 / 清除叛徒 / 携手归隐 / 双向救赎 / 帮派一统 / 击退外敌 / 江湖逍遥……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "柳如烟 (女主)",
        "functionSummary_zh": "老帮主义女 · 义薄云天、智勇双全 · 临危执掌洪帮"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "龙九 (男主)",
        "functionSummary_zh": "老帮主之子、洪帮少帮主 · 一身好刀法 · 唯独为她，倾尽所有"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "钱通 (反派)",
        "functionSummary_zh": "叛出的香主 · 勾结黑龙会、谋害帮主、抢夺帮位"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "黑龙会头目 (反派)",
        "functionSummary_zh": "觊觎上海滩的外敌势力 · 欺压华人、嗜血凶残"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿炳 (配角)",
        "functionSummary_zh": "忠心耿耿的小弟 · 第一个追随柳如烟的人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老周 (配角)",
        "functionSummary_zh": "洪帮的老堂主 · 德高望重、暗中扶持"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "利落的旗袍外搭风衣 · 一双不输男儿的眼 · 飒爽中藏着江湖义气",
      "protagonist": "龙九 (男主)",
      "antagonist": "钱通 (反派); 黑龙会头目 (反派)",
      "centralConflict": "乱世上海滩，义薄云天的老帮主一夜遇害，洪帮群龙无首 · 一袭素衣的义女临危挑起重担 · 她要揪出内鬼、击退外敌，在这刀光剑影的江湖里，护一方华人的尊严",
      "stakes": "8 种结局：执掌洪帮 / 江湖真情 / 清除叛徒 / 携手归隐 / 双向救赎 / 帮派一统 / 击退外敌 / 江湖逍遥……结局，由你来选。",
      "theme": "INFERRED: 民国 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "huakui_mingjue",
    "storyType": "manju",
    "title_zh": "花魁不卖身",
    "title_en": "THE UNBOUGHT BEAUTY",
    "genre": "穿越 · 青楼花魁",
    "tagline": "现代古典文学才女一朝穿成醉仙楼的清倌人 · 卖艺不卖身、以才情立身 · 这一世她要在烟花之地，活出一身傲骨",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "现代古典文学才女苏卿一觉醒来，竟穿成了醉仙楼里被逼接客的清倌人。她以一手惊艳的琴艺与满腹才情，立下「卖艺不卖身」的规矩，在这烟花之地，护住了一身清白与傲骨。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在青楼立足、怎样应对老鸨与盐商、到选择何种方式赎身脱困，每个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：嫁入王府母仪一方 / 才名动天下的自由才女 / 赎身归隐 / 魂归现代重逢 / 双向救赎 / 兴办女学 / 恶人伏法 / 自在人生……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏卿 (女主)",
        "functionSummary_zh": "穿越前: 现代古典文学才女 / 穿越后: 醉仙楼卖艺不卖身的清倌人"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾衍 (男主)",
        "functionSummary_zh": "微服私访的靖安王 · 清贵矜冷，独为她破例"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周妈妈 (反派)",
        "functionSummary_zh": "醉仙楼老鸨 · 唯利是图，逼她接客卖身"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "钱万贯 (反派)",
        "functionSummary_zh": "富甲一方的盐商 · 重金欲强买强占"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小蝶 (配角)",
        "functionSummary_zh": "醉仙楼侍女 · 第一个真心待她的人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "柳伯 (配角)",
        "functionSummary_zh": "醉仙楼老琴师 · 暗中点拨、护她周全"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "月白罗裙 · 素手抚琴 · 清丽脱俗 · 眼神清醒不染风尘",
      "protagonist": "顾衍 (男主)",
      "antagonist": "周妈妈 (反派); 钱万贯 (反派)",
      "centralConflict": "现代古典文学才女一朝穿成醉仙楼的清倌人 · 卖艺不卖身、以才情立身 · 这一世她要在烟花之地，活出一身傲骨",
      "stakes": "8 种结局：嫁入王府母仪一方 / 才名动天下的自由才女 / 赎身归隐 / 魂归现代重逢 / 双向救赎 / 兴办女学 / 恶人伏法 / 自在人生……命运由你书写。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "huanxi_yuanjia",
    "storyType": "manju",
    "title_zh": "冤家宜结不宜解",
    "title_en": "LOVE AND WAR",
    "genre": "甜宠日常 · 欢喜冤家",
    "tagline": "从校园斗到职场的死对头,见面就掐、互相看不顺眼 · 却在一次次斗气拌嘴中,把满满的火药味,酿成了藏不住的心动",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "ally",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "乔一一和裴宴是从校园斗到职场的死对头,见面就掐、互相看不顺眼。命运偏偏爱捉弄人,两人不仅成了同事,还被领导分到了同一个项目组。在一次次斗气、拌嘴、互坑中,满满的…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何相爱相杀、怎样面对突如其来的心动、到这段感情如何升温,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：冤家变情侣 / 职场搭档 / 高调撒糖 / 击退情敌……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "乔一一 (女主)",
        "functionSummary_zh": "伶牙俐齿的职场新人 · 跟死对头斗了多年"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "裴宴 (男主)",
        "functionSummary_zh": "毒舌精英 · 跟女主针锋相对的死对头"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白若 (反派)",
        "functionSummary_zh": "倒追男主的白富美 · 处处针对女主"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "暖男同事 (男配)",
        "functionSummary_zh": "追求女主的温柔同事 · 衬托死对头的醋意"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "毒舌闺蜜 (配角)",
        "functionSummary_zh": "女主死党 · 看热闹不嫌事大"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "和事佬领导 (配角)",
        "functionSummary_zh": "公司领导 · 总把两人凑一组"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "明媚张扬的都市女孩 · 一双爱较劲的灵动眼睛",
      "protagonist": "裴宴 (男主)",
      "antagonist": "白若 (反派)",
      "centralConflict": "从校园斗到职场的死对头,见面就掐、互相看不顺眼 · 却在一次次斗气拌嘴中,把满满的火药味,酿成了藏不住的心动",
      "stakes": "8 种结局：冤家变情侣 / 职场搭档 / 高调撒糖 / 击退情敌……命运由你书写。",
      "theme": "INFERRED: 甜宠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "huyao_baoen",
    "storyType": "manju",
    "title_zh": "狐妖报恩",
    "title_en": "THE FOX SPIRIT REPAYS",
    "genre": "古言仙侠 · 狐妖报恩",
    "tagline": "一只九尾狐妖,被她要报恩的降妖师追杀了三百年 · 一边躲他的桃木剑,一边暗中护他周全,这恩,报得心惊肉跳又情根深种",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "三百年前,一只受伤的小狐狸,被一个小道士所救。三百年后,小狐狸修成了千年九尾,而当年的小道士,成了天师府最厉害的降妖师裴砚——他这一生的志向,就是降尽天下妖。哭…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "报恩路上,苏小狐屡屡暗中相助,却次次被裴砚当成妖孽追杀。误会、试探、心动,真妖作乱时,两人不得不并肩。苏小狐要在「降妖师的剑」与「报恩的心」之间,一次次抉择。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "当妖王之乱平息、裴砚得知她真身并为她挡下诛妖之雷,人妖殊途的难题摆在眼前,八种结局,由这份阴差阳错的情,亲手抉择。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏小狐 (女主)",
        "functionSummary_zh": "千年九尾狐妖 · 古灵精怪 / 知恩图报"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "裴砚 (男主)",
        "functionSummary_zh": "天师府降妖师 · 一身正气 · 偏偏要降她"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白薇 (反派 1)",
        "functionSummary_zh": "白蛇妖 · 嫉妒苏小狐道行"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "血鸦 (反派 2)",
        "functionSummary_zh": "吞噬妖丹的妖王 · 真正的恶妖"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿黄 (配角)",
        "functionSummary_zh": "苏小狐的黄鼠狼小弟 · 怂萌"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小道童 (配角)",
        "functionSummary_zh": "裴砚的徒弟 · 单纯善良"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "绯红狐裘 · 眼尾一点红 · 笑时藏狐尾",
      "protagonist": "裴砚 (男主)",
      "antagonist": "白薇 (反派 1); 血鸦 (反派 2)",
      "centralConflict": "一只九尾狐妖,被她要报恩的降妖师追杀了三百年 · 一边躲他的桃木剑,一边暗中护他周全,这恩,报得心惊肉跳又情根深种",
      "stakes": "当妖王之乱平息、裴砚得知她真身并为她挡下诛妖之雷,人妖殊途的难题摆在眼前,八种结局,由这份阴差阳错的情,亲手抉择。",
      "theme": "INFERRED: 仙侠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "jiagu_changying",
    "storyType": "manju",
    "title_zh": "将军魂穿打工人",
    "title_en": "THE GENERAL IN A CUBICLE",
    "genre": "穿越 · 古人穿现代",
    "tagline": "古代镇北女将军马革裹尸，一缕忠魂穿到现代，成了被退婚、负债、受气的同名小职员 · 这一次，她要用沙场上的胆识谋略，在钢铁森林里，杀出一条青云路",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "镇北大将军苏长缨力战殉国，再睁眼，竟成了现代一个被未婚夫退婚、背着债、在公司受尽白眼的同名小职员。一身的胆识谋略无处施展，她决定——在这没有刀剑的战场上，照样打…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在职场立足、怎样应对渣前任与刻薄上司、到选择何种方式登顶，每个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：执掌商业帝国 / 与转世旧识携手 / 打脸所有人 / 衣锦还乡 / 双向救赎 / 创业带众人翻身 / 扳倒职场恶人 / 魂归古代……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏长缨 (女主)",
        "functionSummary_zh": "穿越前: 古代镇北大将军 / 穿越后: 被退婚负债的现代小职员"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆衡 (男主)",
        "functionSummary_zh": "现代商业巨擘 · 古代旧识转世，独独识得她的锋芒"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周岩 (反派)",
        "functionSummary_zh": "势利的渣前任 · 退婚后见她翻身又来纠缠"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "钱多多 (反派)",
        "functionSummary_zh": "刻薄的部门主管 · 处处打压、抢功诬陷"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "林悦 (配角)",
        "functionSummary_zh": "苏长缨的同事兼室友 · 头一个相信她的人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老周 (配角)",
        "functionSummary_zh": "公司老门卫 · 古代副将转世，冥冥中护着她"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "利落的现代职业装下，是一双睥睨沙场的眼 · 站如松、行如风",
      "protagonist": "陆衡 (男主)",
      "antagonist": "周岩 (反派); 钱多多 (反派)",
      "centralConflict": "古代镇北女将军马革裹尸，一缕忠魂穿到现代，成了被退婚、负债、受气的同名小职员 · 这一次，她要用沙场上的胆识谋略，在钢铁森林里，杀出一条青云路",
      "stakes": "8 种结局：执掌商业帝国 / 与转世旧识携手 / 打脸所有人 / 衣锦还乡 / 双向救赎 / 创业带众人翻身 / 扳倒职场恶人 / 魂归古代……命运由你书写。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "jiangmen_duhou",
    "storyType": "manju",
    "title_zh": "将门毒后",
    "title_en": "THE GENERAL EMPRESS",
    "genre": "古装宅斗 · 将门毒后",
    "tagline": "将门虎女披甲征战,却被夫君亲手送上断头台 · 一缕怨魂重回为后那年,她要披战甲、握权柄,把所有亏欠她的人,毒辣偿还",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "宅斗",
    "familyKey": "house-intrigue",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "将门虎女萧瑶光,既是大将军的嫡孙女,又是当朝皇后。她为夫君披甲征战、扫平边患,却被那负心的帝王构陷,以\"通敌\"之罪,送上了断头台。一缕怨魂归来,她重回为后那年,…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何提防负心夫、怎样应对妖妃陷害、到选择重新执掌权柄的方式,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：废帝立新 / 与战神携手 / 毒后掌权 / 灭门复仇……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "萧瑶光 (女主)",
        "functionSummary_zh": "将门虎女、铁血皇后 · 心狠手辣、智计无双"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "萧战北 (男主)",
        "functionSummary_zh": "女主的青梅竹马、北疆战神 · 死心塌地护她"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "负心皇帝 (反派)",
        "functionSummary_zh": "女主前世的负心夫君 · 多疑狠辣"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "妖妃 (反派)",
        "functionSummary_zh": "勾引皇帝、构陷皇后的妖妃 · 工于心计"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "贴身嬷嬷 (配角)",
        "functionSummary_zh": "女主从将军府带来的忠仆"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "萧老将军 (配角)",
        "functionSummary_zh": "女主的祖父、镇国大将军"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "银色软甲外罩凤袍 · 一双历经沙场的锐利眼睛 · 凤眸凌厉",
      "protagonist": "萧战北 (男主)",
      "antagonist": "负心皇帝 (反派); 妖妃 (反派)",
      "centralConflict": "将门虎女披甲征战,却被夫君亲手送上断头台 · 一缕怨魂重回为后那年,她要披战甲、握权柄,把所有亏欠她的人,毒辣偿还",
      "stakes": "8 种结局：废帝立新 / 与战神携手 / 毒后掌权 / 灭门复仇……命运由你书写。",
      "theme": "INFERRED: 宅斗 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "jiangmen_huonv",
    "storyType": "manju",
    "title_zh": "将门虎女",
    "title_en": "Daughter of the General",
    "genre": "古装宅斗 · 将门虎女",
    "tagline": "镇北将军一夜战死蒙冤、将门倾覆 · 戍边归来的虎女霍青鸾,要在内宅蛇蝎与朝堂黑手之间,查冤案、夺兵符、守将门、护幼弟",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "宅斗",
    "familyKey": "house-intrigue",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "镇北将军霍勇在北境一役以『通敌叛国』之名战死,将门一夜倾覆。戍边的嫡女霍青鸾奔丧归来,却见继母柳氏把持中馈、幼弟念安命悬一线、父亲死因疑点重重——那是一支从背后…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何面对把持内宅的蛇蝎继母(雷霆夺权 / 隐锋蛰伏 / 联外借力),到是查父冤、夺兵符还是护幼弟,再到沙场雪冤还是朝堂揭局——每一个抉择,都通向不同的命运。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局:执掌帅印镇北疆 / 与萧决并肩白首 / 仇敌伏诛血债血偿 / 归隐边塞 / 卸甲疗愈 / 安边大义 / 连根拔起 / 放下释怀……将门虎女的命运,由…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "霍青鸾 (女主)",
        "functionSummary_zh": "镇北将军霍勇嫡女,自幼随父戍边,能开三石弓、通晓兵法,人称『霍家小虎』· 父亲蒙冤战死后,奔丧归门,誓查冤、守门、护弟"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "萧决 (男主)",
        "functionSummary_zh": "靖北王世子,年轻主帅,霍家世交 · 自幼与青鸾相识,暗中替霍家挡下朝堂风雨,亦敌亦友,并肩查案"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "柳氏 (反派 1)",
        "functionSummary_zh": "将军续弦,柳家女 · 实为政敌安插入霍家的细作,把持中馈、谋害嫡子、勾结外敌,蛇蝎美人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "赵崇 (反派 2)",
        "functionSummary_zh": "兵部侍郎 · 贪墨军饷多年,为掩罪行篡改军令、构陷霍勇通敌、设局灭口,是冤案幕后真凶"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "霍念安 (萌宝)",
        "functionSummary_zh": "霍家嫡子、将军独子,年仅七岁 · 体弱多病(实为柳氏长期下毒),霍家正统承嗣人,被青鸾拼死护住"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "周山 (配角)",
        "functionSummary_zh": "霍家老亲兵,跟随霍勇三十年的忠仆 · 知晓内情、誓死护主,是青鸾最得力的臂助"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "银甲红缨 · 英气逼人 · 眉眼凌厉藏着杀伐果决",
      "protagonist": "萧决 (男主)",
      "antagonist": "柳氏 (反派 1); 赵崇 (反派 2)",
      "centralConflict": "镇北将军一夜战死蒙冤、将门倾覆 · 戍边归来的虎女霍青鸾,要在内宅蛇蝎与朝堂黑手之间,查冤案、夺兵符、守将门、护幼弟",
      "stakes": "8 种结局:执掌帅印镇北疆 / 与萧决并肩白首 / 仇敌伏诛血债血偿 / 归隐边塞 / 卸甲疗愈 / 安边大义 / 连根拔起 / 放下释怀……将门虎女的命运,由你执笔。",
      "theme": "INFERRED: 宅斗 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "jianxian_wendao",
    "storyType": "manju",
    "title_zh": "剑仙问道",
    "title_en": "THE SWORD SEEKER",
    "genre": "古言仙侠 · 剑仙问道",
    "tagline": "一柄断剑,一个被全宗轻视的杂役少女 · 她以剑问道,一剑一剑,劈开通天之路,也劈开了剑尊冰封的心",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "剑宗杂役叶知秋,日日扫剑、擦剑,却被全宗轻视。无人知道,她每夜借着月光偷偷练剑,更无人知道,她手中那柄无人要的断剑里,沉睡着一缕上古剑灵。一场宗门大比,她一剑惊…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "一鸣惊人后,叶知秋的剑道之路正式开启。拜师抉择、情之所向、魔道来袭,每一次抉择都让她的剑更利、道更明,也让她与那位冷面剑尊的距离,越来越近。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "当魔道屠宗的血仇真相揭开、寒霄为护她剑断人伤,叶知秋立于剑道之巅,八种结局,由她一剑,亲手斩出。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "叶知秋 (女主)",
        "functionSummary_zh": "剑宗杂役弟子 · 被轻视的扫剑人 / 剑道奇才"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "寒霄 (男主)",
        "functionSummary_zh": "剑宗剑尊 · 冷面无情 · 万年剑心为她破"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "云裳 (反派 1)",
        "functionSummary_zh": "剑宗首席 · 嫉妒叶知秋天赋"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "血手人屠 (反派 2)",
        "functionSummary_zh": "魔道剑魔 · 屠尽一宗的仇敌"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小石头 (配角)",
        "functionSummary_zh": "叶知秋唯一的师弟 · 死心塌地"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "剑灵 (配角)",
        "functionSummary_zh": "断剑中沉睡的上古剑灵"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "灰布弟子服 · 眉目清冷 · 握剑时眼含锋芒",
      "protagonist": "寒霄 (男主)",
      "antagonist": "云裳 (反派 1); 血手人屠 (反派 2)",
      "centralConflict": "一柄断剑,一个被全宗轻视的杂役少女 · 她以剑问道,一剑一剑,劈开通天之路,也劈开了剑尊冰封的心",
      "stakes": "当魔道屠宗的血仇真相揭开、寒霄为护她剑断人伤,叶知秋立于剑道之巅,八种结局,由她一剑,亲手斩出。",
      "theme": "INFERRED: 仙侠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "jiaoyu_qinghuan",
    "storyType": "manju",
    "title_zh": "教育救国：先生不退",
    "title_en": "TEACHERS OF DAWN",
    "genre": "民国乱世 · 教育救国",
    "tagline": "留洋归来的林清欢，怀揣教育救国的理想，踏上满目疮痍的故土 · 一位志同道合的青年校长，与她并肩办学 · 面对守旧势力与军阀的阻挠，她要为乱世的孩子，点亮一盏，永不熄灭的灯",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "民国",
    "familyKey": "republican",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "留洋归来的女学者林清欢，怀揣教育救国的理想，踏上了满目疮痍的故土。她想办一所学堂，却处处碰壁。危难之际，一位志同道合的青年校长沈砚秋向她伸出援手，两人同心协力，…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何办学育人、怎样在并肩中靠近、到学堂将被查封的存亡抉择，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：教育救国 / 兴学典范 / 薪火相传 / 岁月静好 / 双向奔赴 / 栋梁满门 / 巾帼之光 / 星火燎原……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "林清欢 (女主)",
        "functionSummary_zh": "留洋归来的女学者 · 满怀教育救国的理想 · 倔强坚韧、为孩子寸步不让"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈砚秋 (男主)",
        "functionSummary_zh": "志同道合的青年校长 · 儒雅而坚毅 · 与她并肩办学、生死与共"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周乡绅 (反派)",
        "functionSummary_zh": "守旧顽固的乡绅 · 容不下新学、处处阻挠"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "马团长 (反派)",
        "functionSummary_zh": "蛮横的地方军阀 · 威逼利诱、查封学堂"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿秀 (配角)",
        "functionSummary_zh": "学堂的第一个学生 · 聪慧好学、视林清欢如母"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "陈商会 (配角)",
        "functionSummary_zh": "开明的商会会长 · 慷慨助学、暗中支持"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "知性清丽 · 简约学者装扮 · 一双明亮坚定的眼 · 笑里有炽热的光",
      "protagonist": "沈砚秋 (男主)",
      "antagonist": "周乡绅 (反派); 马团长 (反派)",
      "centralConflict": "留洋归来的林清欢，怀揣教育救国的理想，踏上满目疮痍的故土 · 一位志同道合的青年校长，与她并肩办学 · 面对守旧势力与军阀的阻挠，她要为乱世的孩子，点亮一盏，永不熄灭的灯",
      "stakes": "8 种结局：教育救国 / 兴学典范 / 薪火相传 / 岁月静好 / 双向奔赴 / 栋梁满门 / 巾帼之光 / 星火燎原……结局，由你来选。",
      "theme": "INFERRED: 民国 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "jiehun_houai",
    "storyType": "manju",
    "title_zh": "先婚后爱",
    "title_en": "MARRIED FIRST, LOVED LATER",
    "genre": "甜宠日常 · 先婚后爱",
    "tagline": "为完成奶奶遗愿，普通女孩闪婚高冷霸总 · 一纸婚书在前，心动在后 · 从客客气气的合约夫妻，到藏不住的宠妻日常",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "marriage-first",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "开小花店的林夏，为完成临终奶奶「找个可靠人成家」的遗愿，糊里糊涂地，和素未谋面的沈氏总裁沈聿，领了证。一个高冷疏离，一个笨拙真诚——这桩先领证、后相处的婚姻，从…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从用什么方式和这个高冷丈夫破冰、怎样应对突然回归的初恋情敌、到选择哪种方式收获圆满，每一个甜甜的抉择，都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：婚后被宠成全世界 / 双向奔赴互许真心 / 情敌彻底出局 / 赢得全家真心接纳 / 双向救赎彼此治愈 / 婚姻事业双丰收 / 拜金长辈算计败露 / …",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "林夏 (女主)",
        "functionSummary_zh": "开小花店的普通女孩 · 为完成奶奶遗愿，与从未谋面的总裁闪婚"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈聿 (男主)",
        "functionSummary_zh": "沈氏集团总裁 · 表面高冷疏离，婚后一颗心却越焐越软"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "苏曼 (反派)",
        "functionSummary_zh": "沈聿的青梅初恋 · 高调回归，处处横插一脚"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "沈姑妈 (反派)",
        "functionSummary_zh": "沈家拜金长辈 · 嫌林夏出身，百般刁难拆台"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小桃 (配角)",
        "functionSummary_zh": "林夏的闺蜜兼花店帮手 · 头一个为她撑腰的人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "福伯 (配角)",
        "functionSummary_zh": "沈家老管家 · 暗中疼这个真心的少夫人"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "暖系的针织开衫 · 一双弯弯的笑眼 · 笨拙却真诚",
      "protagonist": "沈聿 (男主)",
      "antagonist": "苏曼 (反派); 沈姑妈 (反派)",
      "centralConflict": "为完成奶奶遗愿，普通女孩闪婚高冷霸总 · 一纸婚书在前，心动在后 · 从客客气气的合约夫妻，到藏不住的宠妻日常",
      "stakes": "8 种结局：婚后被宠成全世界 / 双向奔赴互许真心 / 情敌彻底出局 / 赢得全家真心接纳 / 双向救赎彼此治愈 / 婚姻事业双丰收 / 拜金长辈算计败露 / 归于柴米油盐的小确幸……结局由你的选择书写。",
      "theme": "INFERRED: 甜宠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "jingong_yingdi",
    "storyType": "manju",
    "title_zh": "近水楼台：对门住了个影帝",
    "title_en": "THE STAR NEXT DOOR",
    "genre": "甜宠日常 · 近水楼台",
    "tagline": "平凡打工人林小满，对门搬来个戴口罩墨镜的神秘男人 · 一碗深夜泡面之缘，才发现他竟是顶流影帝 · 朝夕相处、近水楼台，冰山影帝的心，悄悄沦陷在了对门",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "ally",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "平凡的出版社小编辑林小满，对门搬来个大热天戴口罩墨镜的神秘男人。一碗深夜泡面之缘后，她惊觉这个借泡面的怪邻居，竟是顶流影帝顾时舟。答应替他保密的她，从此和影帝做…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何面对这个影帝邻居、怎样走进彼此的世界、到如何应对身份曝光与绯闻风波，每个选择都通向不同的甜蜜结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：近水楼台 / 灯火可亲 / 并肩发光 / 平凡是福 / 双向救赎 / 喜结连理 / 事业双收 / 自在相伴……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "林小满 (女主)",
        "functionSummary_zh": "出版社小编辑 · 平凡乐天、烟火气十足 · 用家常菜治愈了影帝"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾时舟 (男主)",
        "functionSummary_zh": "顶流影帝 · 表面冰山、生活白痴 · 唯独在她面前卸下所有伪装"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "经纪人 (配角)",
        "functionSummary_zh": "顾时舟的金牌经纪人 · 操碎心、反对恋情又真心为他好"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白薇 (反派)",
        "functionSummary_zh": "绯闻女星 · 觊觎顾时舟、制造绯闻"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿乐 (配角)",
        "functionSummary_zh": "林小满的损友兼同事 · 八卦担当、神助攻"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "周姨 (配角)",
        "functionSummary_zh": "公寓热心邻居 · 爱操心、爱牵线"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "娃娃脸 · 慵懒家居服 · 笑起来有梨涡 · 邻家女孩感",
      "protagonist": "顾时舟 (男主)",
      "antagonist": "白薇 (反派)",
      "centralConflict": "平凡打工人林小满，对门搬来个戴口罩墨镜的神秘男人 · 一碗深夜泡面之缘，才发现他竟是顶流影帝 · 朝夕相处、近水楼台，冰山影帝的心，悄悄沦陷在了对门",
      "stakes": "8 种结局：近水楼台 / 灯火可亲 / 并肩发光 / 平凡是福 / 双向救赎 / 喜结连理 / 事业双收 / 自在相伴……结局，由你来选。",
      "theme": "INFERRED: 甜宠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "jisheng_dingti",
    "storyType": "manju",
    "title_zh": "顶替者",
    "title_en": "THE IMPOSTER",
    "genre": "悬疑复仇 · 寄生顶替",
    "tagline": "她的人生被人偷走、身份被人顶替,连父母都认了别人做女儿 · 多年后她带着证据归来,要把被夺走的一切,连本带利讨回",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "乔安本该是豪门千金,却在出生时被人调包,流落乡下、吃尽苦头,而顶替者却鸠占鹊巢,享尽了本该属于她的荣华。多年后,乔安掌握了被顶替的证据,带着冷峻的律师裴决,归来…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何揭开顶替真相、怎样应对顶替者、到揪出幕后黑手,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：夺回人生 / 与律师携手 / 真凶伏法 / 亲情回归……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "乔安 (女主)",
        "functionSummary_zh": "被顶替了人生的女孩 · 隐忍坚韧、步步为营"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "裴决 (男主)",
        "functionSummary_zh": "冷峻的律师 · 帮她揭开顶替真相、并肩追凶"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "顶替者 (反派)",
        "functionSummary_zh": "偷走女主人生的人 · 心机深沉、外表光鲜"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "幕后黑手 (反派)",
        "functionSummary_zh": "操纵顶替阴谋的真凶 · 阴险狠毒"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "知情人 (配角)",
        "functionSummary_zh": "当年的目击者 · 良心未泯、愿作证"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "养母 (配角)",
        "functionSummary_zh": "女主乡下的养母 · 含辛茹苦养大她"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清冷干练 · 一双藏着隐忍与锋芒的眼睛",
      "protagonist": "裴决 (男主)",
      "antagonist": "顶替者 (反派); 幕后黑手 (反派)",
      "centralConflict": "她的人生被人偷走、身份被人顶替,连父母都认了别人做女儿 · 多年后她带着证据归来,要把被夺走的一切,连本带利讨回",
      "stakes": "8 种结局：夺回人生 / 与律师携手 / 真凶伏法 / 亲情回归……命运由你书写。",
      "theme": "INFERRED: 悬疑 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "jiyi_miju",
    "storyType": "manju",
    "title_zh": "记忆碎片",
    "title_en": "MEMORY MAZE",
    "genre": "悬疑复仇 · 记忆迷局",
    "tagline": "一场车祸夺走了她的全部记忆,她以为忘了往事,却没料到——失忆的背后,藏着一桩被精心掩盖的惊天阴谋",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "一场离奇车祸,夺走了沈临渊全部的记忆。醒来后,身边的\"闺蜜\"温柔体贴,丈夫却已不知所踪。在心理医生裴聿白的帮助下,她一点点找回记忆碎片,却发现失忆的背后,藏着一…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何寻回记忆、怎样揭开真相、到揪出操纵迷局的真凶,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：揪出真凶 / 完美复仇 / 与医生携手 / 真相大白……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈临渊 (女主)",
        "functionSummary_zh": "失忆的女主 · 沉静敏锐 · 一片片找回真相"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "裴聿白 (男主)",
        "functionSummary_zh": "冷峻的心理医生 · 帮她寻回记忆 · 暗中相护"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "伪闺蜜 (反派)",
        "functionSummary_zh": "女主失忆后的\"闺蜜\" · 实则陷害的元凶"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "幕后黑手 (反派)",
        "functionSummary_zh": "操纵这场迷局的真凶 · 阴险狠毒"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老医生 (配角)",
        "functionSummary_zh": "见证多年的家庭医生 · 暗藏旧案线索"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "忠诚律师 (配角)",
        "functionSummary_zh": "女主的律师 · 暗中相助"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清丽脱俗 · 一双带着茫然却敏锐的眼睛",
      "protagonist": "裴聿白 (男主)",
      "antagonist": "伪闺蜜 (反派); 幕后黑手 (反派)",
      "centralConflict": "一场车祸夺走了她的全部记忆,她以为忘了往事,却没料到——失忆的背后,藏着一桩被精心掩盖的惊天阴谋",
      "stakes": "8 种结局：揪出真凶 / 完美复仇 / 与医生携手 / 真相大白……命运由你书写。",
      "theme": "INFERRED: 悬疑 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "junfa_qianjin",
    "storyType": "manju",
    "title_zh": "将门千金不低头",
    "title_en": "THE WARLORD'S DAUGHTER",
    "genre": "民国乱世 · 军阀千金",
    "tagline": "叱咤一方的沈大帅一夜暴毙，留下唯一的女儿与群狼环伺的将门 · 飒爽千金一身缟素、临危接掌 · 她要查清父亲死因、守住基业，在这乱世里，活成不低头的铿锵玫瑰",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "民国",
    "familyKey": "republican",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "叱咤一方的沈大帅，在政敌的酒宴上「暴毙」，留下唯一的女儿沈鸢，和一个群狼环伺的将门。飒爽果决的沈鸢一身缟素、临危接掌，誓要查清父亲的死因、守住父亲留下的基业与百…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何接掌将门、怎样并肩查清真相与守土安民、到如何应对政敌来犯，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：乱世真情 / 父仇得报 / 守护一方 / 携手归隐 / 双向救赎 / 扫清外敌 / 肃清内患 / 自在人生……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈鸢 (女主)",
        "functionSummary_zh": "沈大帅唯一的女儿 · 飒爽果决、巾帼不让须眉 · 临危接掌将门"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆铮 (男主)",
        "functionSummary_zh": "深藏身份的神秘副官 · 身手谋略过人 · 唯独为她，背离使命"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周督军 (反派)",
        "functionSummary_zh": "觊觎沈家地盘的政敌 · 勾结外敌、谋害沈帅"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "林氏 (反派)",
        "functionSummary_zh": "沈家继母 · 暗通政敌、谋夺家产"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿桃 (配角)",
        "functionSummary_zh": "沈鸢的贴身丫鬟 · 忠心耿耿"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老赵 (配角)",
        "functionSummary_zh": "沈帅的忠诚老副官 · 死忠护主"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "一身合体戎装 · 长发束起 · 一双锐利坚定的眼 · 英气逼人",
      "protagonist": "陆铮 (男主)",
      "antagonist": "周督军 (反派); 林氏 (反派)",
      "centralConflict": "叱咤一方的沈大帅一夜暴毙，留下唯一的女儿与群狼环伺的将门 · 飒爽千金一身缟素、临危接掌 · 她要查清父亲死因、守住基业，在这乱世里，活成不低头的铿锵玫瑰",
      "stakes": "8 种结局：乱世真情 / 父仇得报 / 守护一方 / 携手归隐 / 双向救赎 / 扫清外敌 / 肃清内患 / 自在人生……结局，由你来选。",
      "theme": "INFERRED: 民国 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "lenggong_feihou",
    "storyType": "manju",
    "title_zh": "冷宫废后逆袭录",
    "title_en": "THE FALLEN EMPRESS",
    "genre": "穿越 · 冷宫废后",
    "tagline": "一朝穿越成被打入冷宫的废后,人人喊打、墙倒众人推 · 她却凭一身现代智慧与铁血手腕,从冷宫一步步翻身,夺回属于自己的凤位",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "苏挽颜一朝穿越,成了被打入冷宫的废后。原主因被人设计陷害,落得众叛亲离的下场。她带着现代的智慧与一身铁血手腕,誓要在这吃人的冷宫里翻身,洗刷冤屈、夺回凤位,让所…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在冷宫自保、怎样翻身洗冤、到选择重夺凤位的方式,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：重夺凤位 / 与帝携手 / 母仪天下 / 揪出真凶……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏挽颜 (女主)",
        "functionSummary_zh": "穿越成被废的皇后 · 沉着冷静、心思缜密"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "萧景珩 (男主)",
        "functionSummary_zh": "冷峻多疑的当今圣上 · 曾以为她有罪 · 后悔莫及"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "宠妃 (反派)",
        "functionSummary_zh": "设计陷害原主的宠妃 · 心狠手辣"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "权臣 (反派)",
        "functionSummary_zh": "与宠妃勾结的朝中权臣 · 野心勃勃"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "冷宫嬷嬷 (配角)",
        "functionSummary_zh": "冷宫里照顾原主的老嬷嬷 · 忠心耿耿"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "摄政皇叔 (配角)",
        "functionSummary_zh": "皇帝的皇叔 · 慧眼识珠、暗中相助"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素衣布钗 · 一双在冷宫淬炼出的锐利眼睛 · 落难中不失贵气",
      "protagonist": "萧景珩 (男主)",
      "antagonist": "宠妃 (反派); 权臣 (反派)",
      "centralConflict": "一朝穿越成被打入冷宫的废后,人人喊打、墙倒众人推 · 她却凭一身现代智慧与铁血手腕,从冷宫一步步翻身,夺回属于自己的凤位",
      "stakes": "8 种结局：重夺凤位 / 与帝携手 / 母仪天下 / 揪出真凶……命运由你书写。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "lenggong_fengming",
    "storyType": "manju",
    "title_zh": "冷宫凤鸣",
    "title_en": "Phoenix Rising from the Cold Palace",
    "genre": "古装宅斗 · 冷宫翻身",
    "tagline": "盛宠妃嫔被伪造的巫蛊罪证构陷、打入冷宫 · 在断瓦颓垣的绝境里,苏婉绝地反击,查冤案、收人心、重获圣心,一步步从冷宫泥泞,走回后宫之巅",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "宅斗",
    "familyKey": "house-intrigue",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "盛宠正浓的苏婕妤,被一桩伪造的『巫蛊诅咒皇嗣』罪证构陷,一夕之间打入冷宫。断瓦颓垣、例银克扣、炭火断绝——昔日宠妃跌入泥泞。可她拭去泪痕、对镜束发,在最绝望的废…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "是以技立足、博取太后青眼,是装疯卖傻、暗查巫蛊伪案,还是御道抚琴、重获圣心?是彻底翻案雪冤、是广结人脉后宫立足,还是深挖出夺嫡乱政的幕后黑手?面对仇敌一次次的灭…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局:凤临天下册封后位 / 帝后情深破镜重圆 / 血债血偿仇敌伏诛 / 掌权后宫执掌凤印 / 看破红尘自请出宫 / 携手明君共治盛世 / 连根拔起肃清后患…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏婉 (女主)",
        "functionSummary_zh": "原储秀宫苏婕妤,盛宠正浓时被伪造巫蛊罪证构陷、打入冷宫 · 于绝境中沉静自救,查冤、结援、复宠,一步步绝地翻身"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "皇帝 (男主)",
        "functionSummary_zh": "当朝天子 · 曾因偏听谗言将苏婉打入冷宫,后旧情重燃、识其贤德,为其昭雪、与之重续情深(或成知己良佐)"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "贵妃 (反派 1)",
        "functionSummary_zh": "后宫之主、苏婉宿敌 · 嫉恨苏婉得宠,伪造巫蛊木偶构陷其入冷宫,更两度设毒计欲置其于死地,蛇蝎心肠"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "二皇子母族 (反派 2)",
        "functionSummary_zh": "贵妃背后的真正黑手 · 为争储位,合谋害苏婉小产、栽其巫蛊,借后宫之争行夺嫡乱政之实"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "翠儿 (配角)",
        "functionSummary_zh": "苏婉贴身宫女 · 主仆情深,冷宫绝境中不离不弃,是苏婉最忠心的臂助与陪伴"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "太后 (配角)",
        "functionSummary_zh": "当朝太后、后宫定海神针 · 因苏婉香技与品性而暗中相助,厌恶外戚干政,终出手助其除根雪冤"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素衣布裙难掩绝色 · 眉眼温婉 · 冷宫磨砺出的沉静与锋芒",
      "protagonist": "皇帝 (男主)",
      "antagonist": "贵妃 (反派 1); 二皇子母族 (反派 2)",
      "centralConflict": "盛宠妃嫔被伪造的巫蛊罪证构陷、打入冷宫 · 在断瓦颓垣的绝境里,苏婉绝地反击,查冤案、收人心、重获圣心,一步步从冷宫泥泞,走回后宫之巅",
      "stakes": "8 种结局:凤临天下册封后位 / 帝后情深破镜重圆 / 血债血偿仇敌伏诛 / 掌权后宫执掌凤印 / 看破红尘自请出宫 / 携手明君共治盛世 / 连根拔起肃清后患 / 放下释怀向阳新生……这场冷宫翻身的命运,由你执笔。",
      "theme": "INFERRED: 宅斗 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "lihun_xiansheng",
    "storyType": "manju",
    "title_zh": "离婚先生",
    "title_en": "THE DIVORCE LAWYER",
    "genre": "现代豪门 · 离婚先生",
    "tagline": "顶级离婚律师，自己却也是婚姻里的弃子 · 接手豪门总裁的世纪离婚案 · 两个被婚姻伤透的人，在拆解别人的婚姻里，悄悄拆掉了自己的心墙",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "金牌离婚律师苏沫，三年前被丈夫周枭背叛、净身出户，从此只信证据、不信感情。一桩世纪豪门离婚案找上门——顾氏总裁顾沉，正被算计成性的前妻林婉拖入分产夺女的泥潭。当…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从用什么方式打赢这场官司、怎样在情与局之间抉择、到选择哪种方式让算计者付出代价，每一个关键抉择，都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：自创顶级律所事业封神 / 与顾沉携手真爱 / 渣人一并伏法 / 争得抚养守护小满 / 双向救赎彼此治愈 / 创立法律援助回馈社会 / 全面反杀连根拔…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏沫 (女主)",
        "functionSummary_zh": "金牌离婚律师 · 曾被丈夫背叛、净身出户，从此只信证据不信情"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾沉 (男主)",
        "functionSummary_zh": "顾氏集团总裁 · 深陷一场算计重重的豪门离婚，唯独在她面前会卸下防备"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "林婉 (反派)",
        "functionSummary_zh": "顾沉的算计前妻 · 为分走豪门家产、争夺孩子，步步设局"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周枭 (反派)",
        "functionSummary_zh": "苏沫的渣前夫 · 当年净身出户害她，如今与林婉勾结夺产"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "陈姐 (配角)",
        "functionSummary_zh": "苏沫的助理兼挚友 · 第一个挺她到底的人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小满 (配角)",
        "functionSummary_zh": "顾沉的女儿 · 夹在父母离婚拉锯里、渴望被爱的小女孩"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "利落的职业套装 · 一双看透人心的眼 · 冷静理性下藏着旧伤",
      "protagonist": "顾沉 (男主)",
      "antagonist": "林婉 (反派); 周枭 (反派)",
      "centralConflict": "顶级离婚律师，自己却也是婚姻里的弃子 · 接手豪门总裁的世纪离婚案 · 两个被婚姻伤透的人，在拆解别人的婚姻里，悄悄拆掉了自己的心墙",
      "stakes": "8 种结局：自创顶级律所事业封神 / 与顾沉携手真爱 / 渣人一并伏法 / 争得抚养守护小满 / 双向救赎彼此治愈 / 创立法律援助回馈社会 / 全面反杀连根拔起 / 放下得失活得通透……结局由你的选择书写。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "linggen_juexing",
    "storyType": "manju",
    "title_zh": "灵根觉醒",
    "title_en": "THE AWAKENED ROOT",
    "genre": "古言仙侠 · 灵根觉醒",
    "tagline": "天生废灵根的相府嫡女被退婚弃如敝履，一朝五行灵根觉醒，逆天改命 · 御剑诛邪、问鼎仙途，让所有看轻她的人高攀不起",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "相府嫡女苏挽天生废灵根，被未婚夫当众退婚、庶妹羞辱。订婚宴当夜，她体内沉睡的五行灵根骤然觉醒，灵气暴涨，一鸣惊人。从被弃的废物，到惊动整个修真界的天才，她要让所…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "灵根觉醒后，苏挽面临修行之路的三次抉择：先拜入哪宗、如何对待旧情、如何应对魔教步步紧逼。每一步都将她推向更高的仙途，也更接近那个藏在暗处的真相。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "当魔教圣女的阴谋揭开、裴照为护她身受重伤，苏挽站在仙途的顶点，八种结局，由她亲手抉择——是登顶仙尊，还是了却尘缘？",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏挽 (女主)",
        "functionSummary_zh": "相府嫡女 · 天生废灵根被退婚 / 觉醒五行灵根后惊才绝艳"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "裴照 (男主)",
        "functionSummary_zh": "天玄宗少宗主 · 清冷剑修 · 唯独为她破例"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "苏蔓 (反派 1)",
        "functionSummary_zh": "庶妹 · 假灵根真心机 · 抢她未婚夫"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "柳七娘 (反派 2)",
        "functionSummary_zh": "魔教圣女 · 真正的幕后黑手"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿青 (配角)",
        "functionSummary_zh": "苏挽随身剑灵 · 毒舌护主"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "云栖 (配角)",
        "functionSummary_zh": "天玄宗师姐 · 第一个相信苏挽的人"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素白罗裙 · 眉心一点朱砂 · 觉醒后瞳含星河",
      "protagonist": "裴照 (男主)",
      "antagonist": "苏蔓 (反派 1); 柳七娘 (反派 2)",
      "centralConflict": "天生废灵根的相府嫡女被退婚弃如敝履，一朝五行灵根觉醒，逆天改命 · 御剑诛邪、问鼎仙途，让所有看轻她的人高攀不起",
      "stakes": "当魔教圣女的阴谋揭开、裴照为护她身受重伤，苏挽站在仙途的顶点，八种结局，由她亲手抉择——是登顶仙尊，还是了却尘缘？",
      "theme": "INFERRED: 仙侠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "linghun_huhuan",
    "storyType": "manju",
    "title_zh": "古今换魂记",
    "title_en": "SOUL SWAP",
    "genre": "穿越 · 灵魂互换",
    "tagline": "一面古镜，让现代社畜与古代将军府嫡女灵魂互换 · 一个在古代斗内宅、退赐婚，一个在现代反职场、治渣男 · 隔着千年，她们联手改写彼此的命",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "现代编剧苏星加班后对镜出神，再睁眼竟成了古代将军府待嫁嫡女萧月——而真正的萧月，灵魂去了苏星的现代身体。两个隔着千年的女子，借一面古镜彼此通话，约定联手：苏星在…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在古代立足破局、怎样古今联手互助、到如何掀翻共同的敌人，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：换回各归 / 留古相守 / 古今双圆 / 共守将门 / 太子伏诛 / 跨时之约 / 改写双命 / 镜缘永续……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏星 (女主)",
        "functionSummary_zh": "现代编剧 · 因古镜灵魂互换，进了古代将军府嫡女萧月的身体"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈砚 (男主)",
        "functionSummary_zh": "靖王世子 · 一眼看出「萧月」变了，却愈发为她着迷"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "太子 (反派)",
        "functionSummary_zh": "暴戾储君 · 强求赐婚萧月、卷其入夺嫡漩涡"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周侧妃 (反派)",
        "functionSummary_zh": "将军府继室 · 谋夺家产、加害嫡女"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "萧月 (配角)",
        "functionSummary_zh": "真·将军府嫡女 · 灵魂进了现代苏星的身体 · 隔空与苏星协作"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "镜灵 (配角)",
        "functionSummary_zh": "古镜之灵 · 知晓换魂之秘、时不时掉链子的引路者"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "一身华贵宫装 · 眉眼是萧月的清丽 · 神情却是现代人的飒爽机敏",
      "protagonist": "沈砚 (男主)",
      "antagonist": "太子 (反派); 周侧妃 (反派)",
      "centralConflict": "一面古镜，让现代社畜与古代将军府嫡女灵魂互换 · 一个在古代斗内宅、退赐婚，一个在现代反职场、治渣男 · 隔着千年，她们联手改写彼此的命",
      "stakes": "8 种结局：换回各归 / 留古相守 / 古今双圆 / 共守将门 / 太子伏诛 / 跨时之约 / 改写双命 / 镜缘永续……命运由你书写。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "lingyi_tanan",
    "storyType": "manju",
    "title_zh": "灵异探案录",
    "title_en": "THE SPIRIT CASEBOOK",
    "genre": "悬疑复仇 · 灵异探案",
    "tagline": "民国年间，一双能见亡魂的异瞳，让她替死者开口 · 一桩桩离奇命案，一个个不肯瞑目的冤魂 · 她与铁面捕头阴阳并查，揪出借邪术杀人的黑手，替冤魂,讨回公道",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "民国年间，苏陌生有一双能见亡魂的异瞳。一缕缕死得不明不白的冤魂飘到她面前，泣诉冤情。一桩桩离奇命案疑点重重，铁面捕头裴决虽不信鬼神，却被她屡破奇案的本事折服，两…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何查案、怎样并肩追查真凶守护无辜、到如何对抗借邪术杀人的真凶，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：沉冤得雪 / 阴阳真情 / 守护一方 / 携手归隐 / 双向救赎 / 揪出真凶 / 永镇邪祟 / 人间值得……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏陌 (女主)",
        "functionSummary_zh": "生有通灵异瞳的女子 · 能见亡魂、替死者伸冤 · 善良坚韧、不惧邪祟"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "裴决 (男主)",
        "functionSummary_zh": "铁面无私的捕头 · 本不信鬼神、理智务实 · 唯独为她，信了人间未了的冤"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "鬼面 (反派)",
        "functionSummary_zh": "借邪术杀人的邪术师 · 镇压亡魂、草菅人命"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周判官 (反派)",
        "functionSummary_zh": "藏在邪术师背后的幕后真凶 · 道貌岸然、心狠手辣"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿飘 (配角)",
        "functionSummary_zh": "追随苏陌的孩童亡魂 · 暗中通风报信"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老捕头 (配角)",
        "functionSummary_zh": "裴决的师父 · 明辨是非、暗中扶持"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素雅的民国旗袍 · 一双能见亡魂的清冷异瞳 · 温婉中藏着勇毅",
      "protagonist": "裴决 (男主)",
      "antagonist": "鬼面 (反派); 周判官 (反派)",
      "centralConflict": "民国年间，一双能见亡魂的异瞳，让她替死者开口 · 一桩桩离奇命案，一个个不肯瞑目的冤魂 · 她与铁面捕头阴阳并查，揪出借邪术杀人的黑手，替冤魂,讨回公道",
      "stakes": "8 种结局：沉冤得雪 / 阴阳真情 / 守护一方 / 携手归隐 / 双向救赎 / 揪出真凶 / 永镇邪祟 / 人间值得……结局，由你来选。",
      "theme": "INFERRED: 悬疑 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "linju_chengye",
    "storyType": "manju",
    "title_zh": "暖心邻居：楼下花店的他",
    "title_en": "THE FLORIST DOWNSTAIRS",
    "genre": "甜宠日常 · 暖心邻居",
    "tagline": "被高压工作和一场背叛掏空的苏念，逃到一条安静老街疗伤 · 楼下是一家治愈的花店，和一个温暖的老板程野 · 一束滞销的雏菊、一盏深夜的灯，悄悄把她，从灰暗里，牵了出来",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "ally",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "被高压工作和一场背叛掏空的苏念，逃也似的搬到一条安静的老街疗伤。楼下是一家暖黄灯光的小花店，和一个温暖的老板程野。一束滞销的雏菊、一盏深夜的灯、一句不动声色的关…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何回报这份温暖、怎样走进彼此的内心、到花店面临困境的存亡抉择，每个选择都通向不同的甜蜜结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：暖心相伴 / 双向救赎 / 喜结连理 / 事业有成 / 花开天涯 / 一花一生 / 暖意流芳 / 阖家温暖……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏念 (女主)",
        "functionSummary_zh": "被工作和背叛掏空的都市女孩 · 逃来老街疗伤、又在花香里重生 · 反过来治愈了花店老板"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "程野 (男主)",
        "functionSummary_zh": "楼下花店老板 · 温暖治愈、藏着旧伤 · 用一束束花治愈他人、唯独不肯放过自己"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "林溪 (配角)",
        "functionSummary_zh": "程野的故人旧友 · 登门还物、引发小小误会"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "陈昊 (反派)",
        "functionSummary_zh": "背叛苏念的前男友 · 失去后又想纠缠"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "王婶 (配角)",
        "functionSummary_zh": "老街热心街坊 · 爱操心、爱牵线"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "橘子 (配角)",
        "functionSummary_zh": "花店的橘猫 · 治愈担当、神助攻"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清秀疲惫 · 简约棉麻穿搭 · 眼里曾有伤、后又有光 · 笑容渐渐明媚",
      "protagonist": "程野 (男主)",
      "antagonist": "陈昊 (反派)",
      "centralConflict": "被高压工作和一场背叛掏空的苏念，逃到一条安静老街疗伤 · 楼下是一家治愈的花店，和一个温暖的老板程野 · 一束滞销的雏菊、一盏深夜的灯，悄悄把她，从灰暗里，牵了出来",
      "stakes": "8 种结局：暖心相伴 / 双向救赎 / 喜结连理 / 事业有成 / 花开天涯 / 一花一生 / 暖意流芳 / 阖家温暖……结局，由你来选。",
      "theme": "INFERRED: 甜宠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "longnv_chuanshuo",
    "storyType": "manju",
    "title_zh": "龙女传说",
    "title_en": "THE DRAGON PRINCESS",
    "genre": "古言仙侠 · 龙女传说",
    "tagline": "东海龙女为报一滴救命之恩,化身凡女入红尘 · 一场跨越人妖的旷世奇恋,搅动东海风云、人间江山",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "东海龙王幺女龙清漪,贪玩出海,误入渔网,命悬一线。是赶考的寒门书生沈砚之,放走了这条「怪鱼」。为报这一滴救命之恩,高傲的龙女化身凡间女子,来到人间寻他。一场跨越…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "入凡报恩的龙清漪,以龙族之力助沈砚之青云直上。报恩途中,龙宫郡主追来、蛟魔觊觎龙珠、人妖之恋遭天规阻拦。龙清漪要在恩情、爱情与族责之间,做出一次次抉择。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "当蛟魔之乱平息、沈砚之得知她真身并为她挡下天劫,人妖之恋走到尽头,八种结局,由这份情,亲手抉择。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "龙清漪 (女主)",
        "functionSummary_zh": "东海龙王幺女 · 高傲娇憨 / 入凡报恩"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈砚之 (男主)",
        "functionSummary_zh": "寒门状元 · 一身风骨 · 曾救龙女一命"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "珠仙 (反派 1)",
        "functionSummary_zh": "龙宫郡主 · 嫉妒龙清漪得宠"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "黑蛟 (反派 2)",
        "functionSummary_zh": "东海蛟魔 · 觊觎龙族龙珠"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "虾兵阿浪 (配角)",
        "functionSummary_zh": "龙清漪贴身护卫 · 忠厚老实"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "书童墨竹 (配角)",
        "functionSummary_zh": "沈砚之书童 · 机灵嘴碎"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "月白纱裙 · 鬓边一枚龙鳞 · 眸如深海",
      "protagonist": "沈砚之 (男主)",
      "antagonist": "珠仙 (反派 1); 黑蛟 (反派 2)",
      "centralConflict": "东海龙女为报一滴救命之恩,化身凡女入红尘 · 一场跨越人妖的旷世奇恋,搅动东海风云、人间江山",
      "stakes": "当蛟魔之乱平息、沈砚之得知她真身并为她挡下天劫,人妖之恋走到尽头,八种结局,由这份情,亲手抉择。",
      "theme": "INFERRED: 仙侠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "luanshi_jiaren",
    "storyType": "manju",
    "title_zh": "烽火佳人",
    "title_en": "BEAUTY IN WARTIME",
    "genre": "民国乱世 · 乱世佳人",
    "tagline": "烽火乱世,她是家国动荡里的一枝倔强红梅 · 在战火、爱情与家国之间艰难抉择,以一介女子之身,书写下不输男儿的传奇",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "民国",
    "familyKey": "republican",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "烽火连天,家国动荡。家道中落的大家闺秀顾婉舒,在乱世里艰难求生。一次偶遇,让她与救国军青年将领萧策结识,从此卷入了一场关乎爱情、家国与生死的乱世洪流。她以一介女…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在乱世自保、怎样守护家国、到选择爱情与信仰的方式,每个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：烽火真情 / 家国情怀 / 守护故园 / 携手抗敌……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "顾婉舒 (女主)",
        "functionSummary_zh": "家道中落的大家闺秀 · 知性坚韧、心怀家国"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "萧策 (男主)",
        "functionSummary_zh": "救国军青年将领 · 心怀家国、为她出生入死"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "敌伪军官 (反派)",
        "functionSummary_zh": "勾结外敌的军阀 · 阴险残暴"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "汉奸表哥 (反派)",
        "functionSummary_zh": "变节投敌的远房表哥 · 觊觎女主"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "青梅丫鬟 (配角)",
        "functionSummary_zh": "女主的贴身丫鬟 · 患难与共"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "恩师老先生 (配角)",
        "functionSummary_zh": "女主的恩师 · 暗中支持义士"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素雅旗袍 · 一双兼具书卷气与坚韧的眼睛",
      "protagonist": "萧策 (男主)",
      "antagonist": "敌伪军官 (反派); 汉奸表哥 (反派)",
      "centralConflict": "烽火乱世,她是家国动荡里的一枝倔强红梅 · 在战火、爱情与家国之间艰难抉择,以一介女子之身,书写下不输男儿的传奇",
      "stakes": "8 种结局：烽火真情 / 家国情怀 / 守护故园 / 携手抗敌……命运由你书写。",
      "theme": "INFERRED: 民国 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "luanshi_zhixia",
    "storyType": "manju",
    "title_zh": "乱世成长：孤女不认命",
    "title_en": "RISE OF AN ORPHAN",
    "genre": "民国乱世 · 乱世成长",
    "tagline": "战火纷飞的年代，失去双亲的孤女叶知夏在夹缝里求生 · 一位儒雅青年的雪中送炭，点醒了她——乱世里，本事才是立身之本 · 从受尽欺凌的孤女，到独当一面的掌柜，她要在这乱世里，活成自己的光",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "民国",
    "familyKey": "republican",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "战火纷飞的年代，失去双亲的孤女叶知夏，靠替人缝补浆洗，在乱世的夹缝里艰难求生，受尽东家的欺凌克扣。危难之际，一位儒雅青年陆沉舟的雪中送炭，点醒了她——乱世里，本…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何自强立身、怎样在并肩中靠近、到产业被查封的共担抉择，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：乱世成长 / 自强典范 / 家国情怀 / 岁月静好 / 双向救赎 / 桃李芬芳 / 善意流芳 / 自在人生……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "叶知夏 (女主)",
        "functionSummary_zh": "战火中失去双亲的孤女 · 倔强自强、不肯认命 · 凭手艺与求知改写命运"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆沉舟 (男主)",
        "functionSummary_zh": "身负家国使命的儒雅青年 · 雪中送炭、敬重她的自强 · 唯独为她卸下伪装"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "东家 (反派)",
        "functionSummary_zh": "裁缝铺的刻薄东家 · 苛待克扣、欺凌孤女"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "柳如月 (反派)",
        "functionSummary_zh": "娇俏名媛 · 觊觎陆沉舟、屡屡刁难"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿桂 (配角)",
        "functionSummary_zh": "叶知夏的同乡姐妹 · 忠厚善良、患难相扶"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "周老板 (配角)",
        "functionSummary_zh": "绸缎庄的老板 · 慧眼识珠、提携叶知夏"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清瘦坚毅 · 朴素的粗布衣裙 · 一双不服输的眼 · 由怯懦渐露锋芒",
      "protagonist": "陆沉舟 (男主)",
      "antagonist": "东家 (反派); 柳如月 (反派)",
      "centralConflict": "战火纷飞的年代，失去双亲的孤女叶知夏在夹缝里求生 · 一位儒雅青年的雪中送炭，点醒了她——乱世里，本事才是立身之本 · 从受尽欺凌的孤女，到独当一面的掌柜，她要在这乱世里，活成自己的光",
      "stakes": "8 种结局：乱世成长 / 自强典范 / 家国情怀 / 岁月静好 / 双向救赎 / 桃李芬芳 / 善意流芳 / 自在人生……结局，由你来选。",
      "theme": "INFERRED: 民国 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "luonan_qianjin",
    "storyType": "manju",
    "title_zh": "落难千金",
    "title_en": "THE FALLEN HEIRESS",
    "genre": "现代豪门 · 落难千金",
    "tagline": "一夜之间,豪门千金沦为身无分文的落难者 · 当所有人等着看她笑话,她却凭一身真本事,从泥里爬起,把丢掉的一切,连本带利夺回来",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "沈氏集团一夜倾覆,千金沈清欢从云端跌落泥里——父亲入狱、家产被夺、未婚夫退婚,连相伴长大的养妹都踩着她上位。所有人都等着看这位娇生惯养的千金的笑话。可他们忘了,…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "触底反弹的路上,沈清欢面临一次次抉择:东山再起的方式、面对陆沉的情、对仇人的反击。每一步,都让她离夺回沈氏更近一步,也让那个高高在上的男人,越陷越深。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "当沈氏背后的惊天阴谋揭开、陆沉为护她不惜与家族决裂,八种结局,由这个浴火重生的女子,亲手抉择。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈清欢 (女主)",
        "functionSummary_zh": "原沈氏集团千金 / 一夜破产沦为落难者"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆沉 (男主)",
        "functionSummary_zh": "商业帝国总裁 · 唯独为她破例的冰山"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "沈梦娇 (反派 1)",
        "functionSummary_zh": "沈家养女 · 鸠占鹊巢的伪白莲"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "赵世康 (反派 2)",
        "functionSummary_zh": "吞并沈氏的幕后黑手"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小满 (配角)",
        "functionSummary_zh": "沈清欢的助理兼闺蜜 · 不离不弃"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "管家老周 (配角)",
        "functionSummary_zh": "沈家旧仆 · 始终忠心"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "气质清冷 · 落难仍脊背挺直 · 眼里有光",
      "protagonist": "陆沉 (男主)",
      "antagonist": "沈梦娇 (反派 1); 赵世康 (反派 2)",
      "centralConflict": "一夜之间,豪门千金沦为身无分文的落难者 · 当所有人等着看她笑话,她却凭一身真本事,从泥里爬起,把丢掉的一切,连本带利夺回来",
      "stakes": "当沈氏背后的惊天阴谋揭开、陆沉为护她不惜与家族决裂,八种结局,由这个浴火重生的女子,亲手抉择。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "mengbao_zhugong",
    "storyType": "manju",
    "title_zh": "天降萌宝当红娘",
    "title_en": "MY LITTLE MATCHMAKER",
    "genre": "甜宠日常 · 萌宝助攻",
    "tagline": "五年前一夜情缘，她带球跑路；五年后，机灵萌宝偷偷认爹、暗中牵线 · 一场鸡飞狗跳又甜到齁的复合大作战，就此上演",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "ally",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "五年前，夏沐与霍北辰有过一夜情缘，怀孕后她悄然离开，独自生下并抚养萌宝。五年后两人重逢，机灵的萌宝一眼认出\"和自己长得像\"的男人，决定偷偷认爹、撮合父母复合。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从萌宝如何认爹、母子如何融入他的生活、到面对情敌的阻挠，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：一家三口团圆 / 二胎登门 / 盛大婚礼 / 甜蜜日常……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "夏沐 (女主)",
        "functionSummary_zh": "独自抚养萌宝五年的单亲妈妈 · 坚强独立、不愿再纠缠"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "霍北辰 (男主)",
        "functionSummary_zh": "霸道总裁 · 五年前的一夜情缘对象、萌宝的亲爹"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小奶包 (萌宝)",
        "functionSummary_zh": "机灵古怪的五岁萌宝 · 暗中认爹、撮合父母"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "女总裁 (反派)",
        "functionSummary_zh": "觊觎男主的名媛 · 处处与女主作对"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "闺蜜 (配角)",
        "functionSummary_zh": "女主死党 · 帮忙带娃、撮合两人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "爷爷 (配角)",
        "functionSummary_zh": "霍家老爷子 · 抱孙心切、力挺女主"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "温柔干练的轻熟女 · 一双疲惫却温暖的眼睛 · 笑起来很美",
      "protagonist": "霍北辰 (男主)",
      "antagonist": "女总裁 (反派)",
      "centralConflict": "五年前一夜情缘，她带球跑路；五年后，机灵萌宝偷偷认爹、暗中牵线 · 一场鸡飞狗跳又甜到齁的复合大作战，就此上演",
      "stakes": "8 种结局：一家三口团圆 / 二胎登门 / 盛大婚礼 / 甜蜜日常……命运由你书写。",
      "theme": "INFERRED: 甜宠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "miaojiang_gufei",
    "storyType": "manju",
    "title_zh": "蛊妃",
    "title_en": "THE GU PRIESTESS",
    "genre": "古言仙侠 · 苗疆蛊术",
    "tagline": "苗疆最后的蛊神血脉，被族人当作祭品献祭 · 觉醒上古蛊神之力后，她要让背叛者血债血偿，让看轻苗疆的中原，仰望这片蛊雾深山",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "ally",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "苗疆深山，蛊雾千年不散。蓝玦自幼被大巫桑骨收养，却不知自己是被当作\"献给蛊神的祭品\"养大。中原视苗疆蛊术为邪祟，玄甲卫世子顾衍奉七皇子之命入山剿蛊。献祭之夜，蓝…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在养父的算计中破局、怎样揭开蛊神血脉与中原苗疆百年血仇之谜、到选择与仇敌对决的方式，每一个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：执掌苗疆成一代蛊神 / 与顾衍双宿双飞 / 仇敌伏诛血债血偿 / 归隐蛊谷逍遥 / 双向救赎彼此疗愈 / 化解两族百年血仇 / 以身封印蛊神护苍生 …",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "蓝玦 (女主)",
        "functionSummary_zh": "苗疆最后的蛊神血脉 / 被大巫当作祭品献祭，绝境中觉醒上古蛊神之力"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾衍 (男主)",
        "functionSummary_zh": "中原玄甲卫世子·降蛊司统领 / 奉命入苗疆剿灭蛊术，却为她一次次破例"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "桑骨 (大巫)",
        "functionSummary_zh": "苗疆大巫·蓝玦养父 / 欲夺蛊神之心逆天改命，把养女养成祭品"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "蛊七娘 (师姐)",
        "functionSummary_zh": "蓝玦师姐 / 因嫉妒与不甘，一次次出卖她，最终自食其蛊"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "萧冽 (七皇子)",
        "functionSummary_zh": "中原七皇子·剿蛊主使 / 视苗疆为心腹大患，城府深沉"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "蛊母 (上古蛊神残魂)",
        "functionSummary_zh": "蓝玦体内上古蛊神残识 / 亦师亦母，引她一步步觉醒真正的血脉"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "苗银头饰层叠 · 赤足踏蛊雾 · 眼瞳觉醒时浮现金色蛊纹",
      "protagonist": "顾衍 (男主)",
      "antagonist": "桑骨 (大巫)",
      "centralConflict": "苗疆最后的蛊神血脉，被族人当作祭品献祭 · 觉醒上古蛊神之力后，她要让背叛者血债血偿，让看轻苗疆的中原，仰望这片蛊雾深山",
      "stakes": "8 种结局：执掌苗疆成一代蛊神 / 与顾衍双宿双飞 / 仇敌伏诛血债血偿 / 归隐蛊谷逍遥 / 双向救赎彼此疗愈 / 化解两族百年血仇 / 以身封印蛊神护苍生 / 远走江湖看淡恩仇……命运由你书写。",
      "theme": "INFERRED: 仙侠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "minguo_diezhan",
    "storyType": "manju",
    "title_zh": "暗影玫瑰",
    "title_en": "SHADOW ROSE",
    "genre": "民国乱世 · 谍战传奇",
    "tagline": "乱世孤城，她是潜伏敌营的红色女特工 · 在刀尖上行走、在虎穴中周旋，与神秘的上级并肩，谱写一曲惊心动魄的谍战传奇",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "民国",
    "familyKey": "republican",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "乱世孤城，敌伪盘踞。红色女特工苏锦书以名媛身份为掩护，潜伏进敌方核心，与神秘的情报上级沈亦舟单线联系，在敌人的眼皮底下，传递着一份份关乎无数生命的绝密情报。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何获取情报、怎样应对怀疑、到最终如何完成绝命任务，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：完成使命迎来曙光 / 与战友携手 / 功成身退 / 揪出叛徒……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏锦书 (女主)",
        "functionSummary_zh": "潜伏敌营的红色女特工 · 智勇双全、临危不乱"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈亦舟 (男主)",
        "functionSummary_zh": "神秘的情报上级 · 冷静睿智、与她生死相托"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "敌特务头子 (反派)",
        "functionSummary_zh": "敌方情报机关的头目 · 阴险狡诈、心狠手辣"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "叛徒 (反派)",
        "functionSummary_zh": "潜伏的叛徒 · 出卖同志、贪生怕死"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "交通员 (配角)",
        "functionSummary_zh": "忠诚的地下交通员 · 传递情报"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老掌柜 (配角)",
        "functionSummary_zh": "地下联络站的掌柜 · 老练沉稳"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "一袭旗袍明艳动人 · 笑靥如花的外表下 · 是钢铁般的意志",
      "protagonist": "沈亦舟 (男主)",
      "antagonist": "敌特务头子 (反派); 叛徒 (反派)",
      "centralConflict": "乱世孤城，她是潜伏敌营的红色女特工 · 在刀尖上行走、在虎穴中周旋，与神秘的上级并肩，谱写一曲惊心动魄的谍战传奇",
      "stakes": "8 种结局：完成使命迎来曙光 / 与战友携手 / 功成身退 / 揪出叛徒……命运由你书写。",
      "theme": "INFERRED: 民国 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "mingxing_yinghou",
    "storyType": "manju",
    "title_zh": "娱乐影后",
    "title_en": "THE QUEEN OF SCREEN",
    "genre": "现代豪门 · 娱乐影后",
    "tagline": "被资本雪藏、被对家陷害、被全网黑的过气女星,凭一身真演技强势翻红 · 这一次,她要从十八线杀回影后宝座,把欠她的,全要回来",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "江月,一个有着封神演技的实力派女星,却因不肯潜规则、得罪资本,被雪藏、被陷害、被全网黑,从当红一线跌成无人问津的十八线。所有人都以为她的演艺生涯就此终结。可她们…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "翻红之路上,江月面临一次次抉择:是隐忍蓄力还是正面硬刚、是接受沈砚之还是专注事业、是妥协还是揭穿黑幕。每一步,都让她离影后更近,也让那个低调的男人,越陷越深。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "当娱乐圈黑幕的真相揭开、沈砚之为护她不惜与资本撕破脸,八种结局,由这位浴火重生的影后,亲手抉择。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "江月 (女主)",
        "functionSummary_zh": "被雪藏陷害的实力派女星 · 演技封神"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈砚之 (男主)",
        "functionSummary_zh": "金牌经纪兼影视大佬 · 慧眼力捧她"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白露 (反派 1)",
        "functionSummary_zh": "顶流花旦 · 抢角抹黑江月的对家"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "马天成 (反派 2)",
        "functionSummary_zh": "黑心资本兼潜规则导演"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小七 (配角)",
        "functionSummary_zh": "江月的助理兼死忠粉 · 不离不弃"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "陈导 (配角)",
        "functionSummary_zh": "德高望重的老导演 · 识才惜才"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清冷疏离 · 镜头前千变万化 · 眼里有戏",
      "protagonist": "沈砚之 (男主)",
      "antagonist": "白露 (反派 1); 马天成 (反派 2)",
      "centralConflict": "被资本雪藏、被对家陷害、被全网黑的过气女星,凭一身真演技强势翻红 · 这一次,她要从十八线杀回影后宝座,把欠她的,全要回来",
      "stakes": "当娱乐圈黑幕的真相揭开、沈砚之为护她不惜与资本撕破脸,八种结局,由这位浴火重生的影后,亲手抉择。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "mingyuan_chuanqi",
    "storyType": "manju",
    "title_zh": "上海名媛",
    "title_en": "SHANGHAI LADY",
    "genre": "民国乱世 · 名媛传奇",
    "tagline": "十里洋场,她从落魄千金一步步成为名动上海滩的传奇名媛 · 在纸醉金迷与刀光剑影间,凭智慧与风骨,书写属于自己的乱世传奇",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "民国",
    "familyKey": "republican",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "家道中落的千金苏曼卿,流落上海滩。在这十里洋场,她凭着过人的智慧与不屈的风骨,从落魄千金,一步步成为名动上海的传奇名媛。而在这纸醉金迷的背后,是乱世的刀光剑影与…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在上海滩立足、怎样应对名媛圈的争锋、到周旋于乱世的各方势力,每个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：名动上海滩 / 与巨子携手 / 实业救国 / 急流勇退……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏曼卿 (女主)",
        "functionSummary_zh": "落魄千金 · 智慧与风骨并存,一步步成为名媛传奇"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈慕廷 (男主)",
        "functionSummary_zh": "上海滩实业巨子 · 亦正亦邪,与她相知相惜"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "交际花 (反派)",
        "functionSummary_zh": "红极一时的交际花 · 处处与女主争锋"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "青帮大佬 (反派)",
        "functionSummary_zh": "盘踞上海滩的青帮头目 · 阴狠狡诈"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "闺中密友 (配角)",
        "functionSummary_zh": "女主的手帕交 · 患难与共"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老报人 (配角)",
        "functionSummary_zh": "正直的报社主笔 · 仗义执言"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "一袭考究旗袍 · 风华绝代 · 眉眼间是不输乱世的傲骨",
      "protagonist": "沈慕廷 (男主)",
      "antagonist": "交际花 (反派); 青帮大佬 (反派)",
      "centralConflict": "十里洋场,她从落魄千金一步步成为名动上海滩的传奇名媛 · 在纸醉金迷与刀光剑影间,凭智慧与风骨,书写属于自己的乱世传奇",
      "stakes": "8 种结局：名动上海滩 / 与巨子携手 / 实业救国 / 急流勇退……命运由你书写。",
      "theme": "INFERRED: 民国 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "misitu_zhiming",
    "storyType": "manju",
    "title_zh": "密室逃脱：致命游戏",
    "title_en": "THE ESCAPE GAME",
    "genre": "悬疑复仇 · 密室逃脱",
    "tagline": "一觉醒来，被困进一座会要命的密室 · 解开谜题方能通往下一间，失败者出局 · 她要破解机关、揭穿这场为权贵直播取乐的吃人游戏，让操控者,反噬其身",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "一觉醒来，夏沐被困进一座会要命的密室，门上闪着血红的倒计时。解开谜题方能通往下一间，失败者出局。她遇到同样被困的江野，渐渐察觉——这是一场为权贵直播取乐的、吃人…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何破解致命机关、怎样并肩揭穿游戏黑幕、到如何对抗操控游戏的主持人，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：摧毁游戏 / 患难真情 / 守护弱者 / 逃出生天 / 双向救赎 / 揭穿金主 / 绳之以法 / 放下释怀……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "夏沐 (女主)",
        "functionSummary_zh": "被困密室的玩家 · 过人的冷静与智慧 · 从瑟瑟发抖到掌控全局"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "江野 (男主)",
        "functionSummary_zh": "同被困的资深玩家 · 冷峻强大、似知内情 · 唯独为她，一再涉险"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "主持人 (反派)",
        "functionSummary_zh": "操控密室游戏的神秘主持人 · 拿人命为权贵取乐"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "马强 (反派)",
        "functionSummary_zh": "自私狠毒的玩家 · 为独活不惜害人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小林 (配角)",
        "functionSummary_zh": "胆小却善良的玩家 · 被夏沐护着"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿七 (配角)",
        "functionSummary_zh": "神秘的资深求生者 · 暗中留下线索"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "普通的都市装扮 · 一双沉静锐利的眼 · 危局中冷静如冰",
      "protagonist": "江野 (男主)",
      "antagonist": "主持人 (反派); 马强 (反派)",
      "centralConflict": "一觉醒来，被困进一座会要命的密室 · 解开谜题方能通往下一间，失败者出局 · 她要破解机关、揭穿这场为权贵直播取乐的吃人游戏，让操控者,反噬其身",
      "stakes": "8 种结局：摧毁游戏 / 患难真情 / 守护弱者 / 逃出生天 / 双向救赎 / 揭穿金主 / 绳之以法 / 放下释怀……结局，由你来选。",
      "theme": "INFERRED: 悬疑 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "momg_bilan",
    "storyType": "manju",
    "title_zh": "末日避难所",
    "title_en": "THE LAST SHELTER",
    "genre": "悬疑复仇 · 末世求生",
    "tagline": "灾变一夜降临，文明崩塌 · 普通女人攥着妹妹的遗物，在废土上杀出一条生路 · 她要建起避难所、揪出制造末日的黑手，在人心比丧尸更毒的末世，护住最后的光",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "灾变一夜降临，文明崩塌，活下来的人比死去的更绝望。普通女人苏晚攥着妹妹的遗物，在废土上杀出生路，绝境中被退伍军人陆衍所救。她渐渐发现，这场末日并非天灾，而是有人…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在末世求生、怎样并肩建立家园查清真相、到如何应对掠夺者来犯，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：守护家园 / 末世真情 / 守护弱者 / 寻得净土 / 双向救赎 / 揭穿黑手 / 肃清恶徒 / 平淡求生……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏晚 (女主)",
        "functionSummary_zh": "灾变幸存者 · 普通女人 · 从独行到领袖，沉着果决、心怀大义"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆衍 (男主)",
        "functionSummary_zh": "灾变前的退伍军人 · 冷峻强大、身手了得 · 唯独为她，重信人间"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "赵彪 (反派)",
        "functionSummary_zh": "凶悍的掠夺者头目 · 草菅人命、烧杀抢掠"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周慎 (反派)",
        "functionSummary_zh": "伪善的避难所管理者 · 表面救世，暗里操控"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "朵朵 (配角)",
        "functionSummary_zh": "苏晚护在身边的小女孩 · 营地的希望"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老张 (配角)",
        "functionSummary_zh": "经验丰富的老幸存者 · 死心塌地追随"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "耐磨的战术外套 · 一双从绝望到坚定的眼 · 风霜里透着不灭的光",
      "protagonist": "陆衍 (男主)",
      "antagonist": "赵彪 (反派); 周慎 (反派)",
      "centralConflict": "灾变一夜降临，文明崩塌 · 普通女人攥着妹妹的遗物，在废土上杀出一条生路 · 她要建起避难所、揪出制造末日的黑手，在人心比丧尸更毒的末世，护住最后的光",
      "stakes": "8 种结局：守护家园 / 末世真情 / 守护弱者 / 寻得净土 / 双向救赎 / 揭穿黑手 / 肃清恶徒 / 平淡求生……结局，由你来选。",
      "theme": "INFERRED: 悬疑 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "monv_lianlian",
    "storyType": "manju",
    "title_zh": "魔女不为后",
    "title_en": "THE DEMON EMPRESS",
    "genre": "古言仙侠 · 魔女虐恋",
    "tagline": "她是人人喊打的魔界圣女,他是正道之首的清冷仙尊 · 一场跨越正邪的虐恋,在三界的偏见与误解中,缠绵入骨、生死纠葛",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "墨千绝是魔界圣女,生来背负\"祸世魔女\"的骂名,被三界正道喊打。一次正邪交锋,她与正道之首的清冷仙尊颜慎相遇。本是不共戴天的立场,却在一次次纠葛中,生出了跨越正邪…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何面对正邪之恋、怎样化解三界的偏见、到守护这份感情的方式,每个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：正邪终成眷属 / 洗清魔女骂名 / 携手归隐 / 化解三界恩怨……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "墨千绝 (女主)",
        "functionSummary_zh": "背负骂名的魔界圣女 · 外冷内热、痴情决绝"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "颜慎 (男主)",
        "functionSummary_zh": "正道之首的清冷仙尊 · 恪守正邪之别,却为她动了心"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "正道长老 (反派)",
        "functionSummary_zh": "极端排魔的正道长老 · 欲除魔女而后快"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "魔界叛徒 (反派)",
        "functionSummary_zh": "觊觎魔界之主的叛徒 · 阴险毒辣"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "魔界侍女 (配角)",
        "functionSummary_zh": "魔女的贴身侍女 · 忠心不二"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "仙尊师弟 (配角)",
        "functionSummary_zh": "仙尊的师弟 · 通情达理、暗中相助"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "一袭暗红魔衣 · 凌厉清冷 · 眼底藏着不为人知的孤独与深情",
      "protagonist": "颜慎 (男主)",
      "antagonist": "正道长老 (反派); 魔界叛徒 (反派)",
      "centralConflict": "她是人人喊打的魔界圣女,他是正道之首的清冷仙尊 · 一场跨越正邪的虐恋,在三界的偏见与误解中,缠绵入骨、生死纠葛",
      "stakes": "8 种结局：正邪终成眷属 / 洗清魔女骂名 / 携手归隐 / 化解三界恩怨……命运由你书写。",
      "theme": "INFERRED: 仙侠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "moshi_chuanyue",
    "storyType": "manju",
    "title_zh": "末世重生之囤货女王",
    "title_en": "APOCALYPSE QUEEN",
    "genre": "穿越 · 末世重生",
    "tagline": "重生回到末世爆发前三天,她带着前世记忆疯狂囤货、觉醒异能 · 在丧尸横行的末世,从猎物逆袭成手握资源与异能的女王",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "普通女孩林夏在末世里护着妹妹苦苦挣扎,最终惨死。重生回到末世爆发前三天,她带着前世记忆,疯狂囤积物资、提前布局,更意外觉醒了异能。这一世,她要带着妹妹,在丧尸横…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何囤货备战、怎样觉醒异能、到选择末世生存的方式,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：建立末世王国 / 与军官携手 / 寻得净土 / 终结末世……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "林夏 (女主)",
        "functionSummary_zh": "重生前: 末世惨死的普通人 / 重生后: 回到末世爆发前三天"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆沉舟 (男主)",
        "functionSummary_zh": "强大的异能军官 · 冷峻可靠,与她并肩对抗末世"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "反派幸存者 (反派)",
        "functionSummary_zh": "抢夺物资的恶徒头目 · 自私残忍"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "变异体 (反派)",
        "functionSummary_zh": "高阶变异丧尸 · 末世最大的威胁"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "妹妹 (配角)",
        "functionSummary_zh": "女主拼死守护的妹妹 · 前世惨死"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老队长 (配角)",
        "functionSummary_zh": "幸存者基地的老队长 · 经验丰富"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "利落的战术装束 · 一双历经末世淬炼的冷静眼眸 · 身手矫健",
      "protagonist": "陆沉舟 (男主)",
      "antagonist": "反派幸存者 (反派); 变异体 (反派)",
      "centralConflict": "重生回到末世爆发前三天,她带着前世记忆疯狂囤货、觉醒异能 · 在丧尸横行的末世,从猎物逆袭成手握资源与异能的女王",
      "stakes": "8 种结局：建立末世王国 / 与军官携手 / 寻得净土 / 终结末世……命运由你书写。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "mozun_jiaoqi",
    "storyType": "manju",
    "title_zh": "魔尊的小娇妻",
    "title_en": "THE DEMON LORD'S BRIDE",
    "genre": "古言仙侠 · 魔尊宠妻",
    "tagline": "凡间小医仙误闯幽冥魔域，被冷血魔尊扣作\"灵药\" · 却在朝夕相处中，揭开了两人跨越上古、生死轮回的前世情缘",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "ally",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "凡间医仙苏挽月上山采药，失足跌入传说中的幽冥魔域，被冷血魔尊墨渊扣下——只因她体内藏着失传已久的上古灵脉。她拼命想逃回人间，却在一次次相处中发现，这个万年无情的…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从魔尊的情愫如何萌动、灵脉与前世之谜如何揭开、到强敌妖姬如何应对，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：魔尊之后共掌魔域 / 归隐凡间共度此生 / 携手逆天改命 / 普渡苍生……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏挽月 (女主)",
        "functionSummary_zh": "凡间杏林医仙 · 身负失传的上古灵脉，是封印魔界之钥"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "墨渊 (男主)",
        "functionSummary_zh": "幽冥魔尊 · 万年来冷血无情，却独独为她破了所有规矩"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "妖姬 (反派)",
        "functionSummary_zh": "魔尊昔日旧识 · 一心觊觎魔尊之位与魔尊其人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "魔将 (配角)",
        "functionSummary_zh": "魔尊麾下第一大将 · 对魔尊忠心不二"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "药童 (配角)",
        "functionSummary_zh": "苏挽月收的小徒弟 · 古灵精怪"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "神女虚影 (配角)",
        "functionSummary_zh": "上古神女的一缕残念 · 在关键时刻指引女主"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素白医袍 · 灵气逼人 · 颈间一点月牙形朱砂胎记 · 笑眼弯弯",
      "protagonist": "墨渊 (男主)",
      "antagonist": "妖姬 (反派)",
      "centralConflict": "凡间小医仙误闯幽冥魔域，被冷血魔尊扣作\"灵药\" · 却在朝夕相处中，揭开了两人跨越上古、生死轮回的前世情缘",
      "stakes": "8 种结局：魔尊之后共掌魔域 / 归隐凡间共度此生 / 携手逆天改命 / 普渡苍生……命运由你书写。",
      "theme": "INFERRED: 仙侠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "nanzhuang_qingyun",
    "storyType": "manju",
    "title_zh": "女官青云志",
    "title_en": "HER PATH TO POWER",
    "genre": "穿越 · 女扮男装",
    "tagline": "现代法医穿越，女扮男装代兄入大理寺 · 凭一手验尸断案的本事，在男人的官场上步步青云 · 这一世，她要查清冤案、坐上女子从未坐过的位置",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "现代金牌法医苏瑾穿越异世，恰逢兄长苏怀安被构陷、重病缠身。为保全家族、查清冤案，她女扮男装，顶替兄长之名入了大理寺，凭一手出神入化的验尸断案本事，在男人把持的官…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在大理寺立足、怎样隐藏女儿身、到选择何种方式扳倒幕后黑手，每个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：身份大白破格封女官 / 与大理寺卿相守 / 兄长沉冤昭雪 / 功成归隐 / 双向救赎 / 为女子开仕途 / 权相满门覆灭 / 重归现代……命运由你书…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏瑾 (女主)",
        "functionSummary_zh": "穿越前: 现代金牌法医 / 穿越后: 女扮男装代兄入仕的大理寺新吏"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "谢承 (男主)",
        "functionSummary_zh": "年轻的大理寺卿 · 明察秋毫，独独看穿了她的秘密"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "赵崇 (反派)",
        "functionSummary_zh": "权倾朝野的当朝丞相 · 一桩桩冤案的幕后黑手"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "钱钰 (反派)",
        "functionSummary_zh": "赵崇党羽的御史 · 处处刁难、欲揭穿她的身份"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿福 (配角)",
        "functionSummary_zh": "苏瑾的书童 · 忠心又机灵，替她遮掩女儿身"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "苏怀安 (配角)",
        "functionSummary_zh": "苏瑾的兄长 · 蒙冤体弱，被她顶替入仕"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "一袭青色官袍 · 眉目清隽 · 束发作男装 · 验尸时冷静如冰",
      "protagonist": "谢承 (男主)",
      "antagonist": "赵崇 (反派); 钱钰 (反派)",
      "centralConflict": "现代法医穿越，女扮男装代兄入大理寺 · 凭一手验尸断案的本事，在男人的官场上步步青云 · 这一世，她要查清冤案、坐上女子从未坐过的位置",
      "stakes": "8 种结局：身份大白破格封女官 / 与大理寺卿相守 / 兄长沉冤昭雪 / 功成归隐 / 双向救赎 / 为女子开仕途 / 权相满门覆灭 / 重归现代……命运由你书写。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "nongjia_chouqi",
    "storyType": "manju",
    "title_zh": "丑妻当家",
    "title_en": "THE FARMER'S BRIDE",
    "genre": "穿越 · 农家丑妻",
    "tagline": "农科高材生穿成穷山沟里被全村嫌弃的「丑媳妇」 · 夫君是寡言木讷的猎户 · 她偏要靠一双手，种出富贵、护住小家、活成人人羡慕的女当家",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "农科高材生沈青禾一觉醒来，成了穷山沟里那个脸带胎记、被退过婚、被全村嫌弃的「丑媳妇」。家徒四壁、极品环伺，唯有寡言的猎户夫君顾山，默默护着她。她攥紧拳头：既来之…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从靠什么起步立足、如何带富乡邻又治服极品、到怎样对付欺人的村霸，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：富甲一方 / 夫荣妻贵 / 恶人伏法 / 带乡共富 / 双向救赎 / 悬壶济世 / 田园美满 / 容颜昭雪……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈青禾 (女主)",
        "functionSummary_zh": "穿越前: 农科与中医双修的研究生 / 穿越后: 脸带胎记、被退过婚的「丑媳妇」"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾山 (男主)",
        "functionSummary_zh": "沉默寡言的猎户夫君 · 话不多，却把她护得密不透风"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "王翠花 (反派)",
        "functionSummary_zh": "嫌贫爱富的极品大嫂 · 处处磋磨、眼红使绊"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "钱地主 (反派)",
        "functionSummary_zh": "霸占田地、欺压乡邻的村霸地主"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "顾阿奶 (配角)",
        "functionSummary_zh": "顾山的奶奶 · 全家唯一真心疼她的人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小石头 (配角)",
        "functionSummary_zh": "村里的机灵娃 · 第一个跟着青禾干的小帮手"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "粗布衣裙 · 半边脸有淡淡胎记 · 一双眼睛却亮得惊人 · 笑起来满是生气",
      "protagonist": "顾山 (男主)",
      "antagonist": "王翠花 (反派); 钱地主 (反派)",
      "centralConflict": "农科高材生穿成穷山沟里被全村嫌弃的「丑媳妇」 · 夫君是寡言木讷的猎户 · 她偏要靠一双手，种出富贵、护住小家、活成人人羡慕的女当家",
      "stakes": "8 种结局：富甲一方 / 夫荣妻贵 / 恶人伏法 / 带乡共富 / 双向救赎 / 悬壶济世 / 田园美满 / 容颜昭雪……命运由你书写。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "nvdi_dengji",
    "storyType": "manju",
    "title_zh": "凤主天下",
    "title_en": "HER MAJESTY",
    "genre": "古装宅斗 · 女帝登基",
    "tagline": "亡国公主忍辱负重、步步为营 · 从阶下囚到垂帘听政，最终打破男尊女卑的桎梏，登临帝位、凤主天下",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "宅斗",
    "familyKey": "house-intrigue",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "故国覆灭，公主萧凤鸣沦为新朝的质子，受尽欺凌。她隐藏锋芒、忍辱负重，暗中积蓄力量，誓要在这个男尊女卑的世道，夺回属于自己的一切。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在宫廷立足、怎样获得朝臣支持、到选择登顶之路，每个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：登基称帝凤主天下 / 与摄政王共治 / 还政归隐 / 一统江山……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "萧凤鸣 (女主)",
        "functionSummary_zh": "亡国公主 · 隐忍多年、谋略过人，誓要夺回属于自己的江山"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "裴临渊 (男主)",
        "functionSummary_zh": "权倾朝野的摄政王 · 亦敌亦友、最终甘为她铺路"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "太后 (反派)",
        "functionSummary_zh": "垂帘多年的太后 · 把持朝政、视她为眼中钉"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "三皇子 (反派)",
        "functionSummary_zh": "太后之子 · 草包却狠毒、觊觎帝位"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "女官沈瑶 (配角)",
        "functionSummary_zh": "女主的心腹谋士 · 才智过人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老臣 (配角)",
        "functionSummary_zh": "三朝元老 · 暗中支持女主匡扶社稷"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素白宫装下藏着帝王之相 · 一双沉静却锋利的眼睛",
      "protagonist": "裴临渊 (男主)",
      "antagonist": "太后 (反派); 三皇子 (反派)",
      "centralConflict": "亡国公主忍辱负重、步步为营 · 从阶下囚到垂帘听政，最终打破男尊女卑的桎梏，登临帝位、凤主天下",
      "stakes": "8 种结局：登基称帝凤主天下 / 与摄政王共治 / 还政归隐 / 一统江山……命运由你书写。",
      "theme": "INFERRED: 宅斗 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "pochan_dagong",
    "storyType": "manju",
    "title_zh": "破产总裁给我打工",
    "title_en": "THE CEO WORKS FOR ME",
    "genre": "现代豪门 · 身份倒置",
    "tagline": "一夜破产的冷面总裁,流落夜市被烤串摊主“月薪三千”收留 · 他不知道,这个笑嘻嘻的摊主,才是暗中吃下他公司股份的隐形大佬 · 4 个分支点 · 3 种结局",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 54 paths → 3 endings",
      "choicePointCount": 4,
      "endingCount": 3,
      "totalPaths": 54,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "新品发布会上,顾沉舟被亲叔叔当众夺权,账户冻结、净身出户。暴雨夜,他在夜市烤串摊被摊主沈小满一句“月薪三千,包烤串”收留。他用管五百强的方式管烧烤摊,处处水土不…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从落魄总裁如何在夜市初露锋芒、马甲如何揭开、到反攻大戏怎么打,每个选择都通向不同的爽点与结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "3 种结局:并肩商海 / 归隐夜市 / 双线人生——白天他是重回巅峰的顾总,凌晨的夜市,永远给她留一手烤串。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾沉舟 (男主)",
        "functionSummary_zh": "被亲叔叔夺权、一夜净身出户的前集团总裁 · 商业素养顶级 · 落魄不落志"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈小满 (女主)",
        "functionSummary_zh": "明面是夜市烤串摊主,实为隐形资本大佬 · 三年前被顾沉舟裁掉的实习生 · 深藏不露"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "顾天雄 (反派)",
        "functionSummary_zh": "顾沉舟的亲叔叔 · 篡夺集团的幕后黑手 · 笑里藏刀赶尽杀绝"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周慧 (反派)",
        "functionSummary_zh": "顾天雄的心腹特助 · 手握脏账 · 精致利己"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "王大爷 (配角)",
        "functionSummary_zh": "夜市邻摊修表匠 · 看破不说破的人间清醒 · 关键时刻递情报"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿飞 (配角)",
        "functionSummary_zh": "来收保护费的小混混 · 被顾沉舟折服后成了忠心小弟"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "188 冷白皮 · 剑眉薄唇眼神锐利 · 前期深灰三件套西装一丝不苟 · 落魄后白衬衫挽袖+黑色摊主围裙 · 头发微乱仍腰杆笔直",
      "protagonist": "顾沉舟 (男主)",
      "antagonist": "顾天雄 (反派); 周慧 (反派)",
      "centralConflict": "一夜破产的冷面总裁,流落夜市被烤串摊主“月薪三千”收留 · 他不知道,这个笑嘻嘻的摊主,才是暗中吃下他公司股份的隐形大佬 · 4 个分支点 · 3 种结局",
      "stakes": "3 种结局:并肩商海 / 归隐夜市 / 双线人生——白天他是重回巅峰的顾总,凌晨的夜市,永远给她留一手烤串。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 3 endings — framework expects 1 resolution, explodes to 3 variants",
    "allGaps": [
      "story has 3 endings — framework expects 1 resolution, explodes to 3 variants",
      "tree has 54 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-3e-54p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "qifu_fanshen",
    "storyType": "manju",
    "title_zh": "弃妇翻身",
    "title_en": "The Cast-Off Wife's Triumph",
    "genre": "古装宅斗 · 弃妇翻身",
    "tagline": "操持夫家三年、变卖嫁妆为夫还债,换来的却是一纸休书与『善妒无德』的污名 · 被休归家、万人唾弃的沈清欢,凭一手经商理财之能绝地翻身,查构陷、洗污名、夺家产,让休弃她的人,跪着求她原谅",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "宅斗",
    "familyKey": "house-intrigue",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "沈清欢嫁入顾家三年,变卖嫁妆替夫还债、操持上下,熬白了双鬓。可丈夫顾廷之一朝高中,递给她的却是一纸休书与『善妒无德』的污名。被休归家、万人唾弃,连娘家庶母都嫌她…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "是经商立业富甲一方、是暗查那桩构陷夺产的阴谋,还是结交贵人寻得靠山?是商战碾压顾家、是公堂雪冤夺产,还是回头清算落井下石的庶母?面对仇敌孤注一掷的栽赃毒计,是将…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局:富甲天下商界女王 / 觅得良缘再许真心 / 血债血偿仇敌尽诛 / 独立自强不嫁不依 / 衣锦还乡光耀门楣 / 行善济世扶助弱女 / 连根拔起肃清祸根…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈清欢 (女主)",
        "functionSummary_zh": "沈府嫡女,嫁入顾家三年、操持家业为夫还债 · 丈夫高中后被骗休夺产、扣上『善妒』污名 · 被休归家后凭经商之能绝地翻身,查构陷、洗污名、夺家产、雪己耻"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈清欢的良人 (男主)",
        "functionSummary_zh": "敬重沈清欢的青年 · 看中的是她历经背叛仍挺直的脊梁,而非家财 · 以平等真诚之心相待,治愈她被弃的伤"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "顾廷之 (反派 1)",
        "functionSummary_zh": "沈清欢前夫 · 寒微时靠妻子变卖嫁妆还债、操持家业,高中后忘恩负义,为攀附高门骗休糟糠、夺其家产"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "贵女 (反派 2)",
        "functionSummary_zh": "顾廷之攀附的高门贵女、新妻 · 与沈氏庶妹合谋,伪造假证栽沈清欢『善妒』、骗休夺产,是构陷阴谋的主谋"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "庶母 (配角)",
        "functionSummary_zh": "沈府庶母 · 势利刻薄,沈清欢被休时落井下石、嫌其丢人,克扣嫡支、私吞家财,后被沈清欢清算(转为推动剧情的对照人物)"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿福 (配角)",
        "functionSummary_zh": "沈清欢旧仆 · 落难时不离不弃,死心塌地相随,是她经商翻身、查冤雪耻最得力的臂助"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素衣布裙难掩清丽 · 眉眼坚毅 · 历尽磨难仍挺直的傲骨与锋芒",
      "protagonist": "沈清欢的良人 (男主)",
      "antagonist": "顾廷之 (反派 1); 贵女 (反派 2)",
      "centralConflict": "操持夫家三年、变卖嫁妆为夫还债,换来的却是一纸休书与『善妒无德』的污名 · 被休归家、万人唾弃的沈清欢,凭一手经商理财之能绝地翻身,查构陷、洗污名、夺家产,让休弃她的人,跪着求她原谅",
      "stakes": "8 种结局:富甲天下商界女王 / 觅得良缘再许真心 / 血债血偿仇敌尽诛 / 独立自强不嫁不依 / 衣锦还乡光耀门楣 / 行善济世扶助弱女 / 连根拔起肃清祸根 / 放下释怀向阳新生……这场弃妇翻身的雪耻路,由你执笔。",
      "theme": "INFERRED: 宅斗 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "qige_zhengren",
    "storyType": "manju",
    "title_zh": "第七个证人",
    "title_en": "THE SEVENTH WITNESS",
    "genre": "悬疑复仇 · 法证追凶",
    "tagline": "妹妹三年前「坠楼自杀」，法医姐姐坚信是谋杀 · 循着监控里那个多出来的、从未露面的「第七个身影」，一步步逼近真凶",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "一段电梯监控，一次坠楼，一句「自杀」结案。三年来，姐姐苏晚把那段录像看了上千遍——画面角落里，分明多出过一个身影。她调入重启此案的部门，要把那个被抹去的「第七个…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何取证、指向谁、到要不要信任当年草草结案的检察官裴决，每个选择都通向不同的真相与结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：水落石出 / 迟来的判决 / 以血还血 / 反杀 / 沉冤 / 赎罪 / 真凶另有其人 / 未结之案……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏晚 (女主)",
        "functionSummary_zh": "痕迹检验法医 · 理性到冷的偏执追凶者"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "裴决 (男主)",
        "functionSummary_zh": "冷面检察官 · 当年草草结案 · 如今想赎罪"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周明远 (反派)",
        "functionSummary_zh": "明远集团董事长 · 受害者生前实习公司老板"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "林姿 (反派)",
        "functionSummary_zh": "周的私人助理 · 受害者闺蜜 · 知情的帮凶"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老吴 (配角)",
        "functionSummary_zh": "老刑警 · 亦师亦友 · 一身江湖气"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "苏宁 (配角)",
        "functionSummary_zh": "苏晚的妹妹 · 受害者 · 明亮爱笑(回忆/录像中出现)"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "利落齐肩黑发束起 · 白大褂 · 细框眼镜 · 左手腕一根妹妹留下的旧手链",
      "protagonist": "裴决 (男主)",
      "antagonist": "周明远 (反派); 林姿 (反派)",
      "centralConflict": "妹妹三年前「坠楼自杀」，法医姐姐坚信是谋杀 · 循着监控里那个多出来的、从未露面的「第七个身影」，一步步逼近真凶",
      "stakes": "8 种结局：水落石出 / 迟来的判决 / 以血还血 / 反杀 / 沉冤 / 赎罪 / 真凶另有其人 / 未结之案……命运由你书写。",
      "theme": "INFERRED: 悬疑 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "qingbao_yexing",
    "storyType": "manju",
    "title_zh": "暗线·夜莺",
    "title_en": "THE NIGHTINGALE",
    "genre": "民国乱世 · 情报暗线",
    "tagline": "代号「夜莺」的王牌情报员，孤身潜入敌占区，刀尖起舞 · 她的上线，竟是一身敌军制服的同志 · 在生死一线间传递情报、揪出叛徒，只为换来,一缕黎明的光",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "民国",
    "familyKey": "republican",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "代号「夜莺」的王牌情报员苏锦，孤身潜入敌占区，以洋行职员的身份做掩护，在刀尖上传递情报。接上线时她才发现，自己的上线沈墨，竟是一身敌军制服、潜伏敌营的同志。一次…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何潜伏立足、怎样并肩传递情报揪出叛徒、到如何应对身份暴露的危机，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：迎来黎明 / 与子同袍 / 锄尽叛徒 / 功成身退 / 双向救赎 / 守护暗网 / 反间制敌 / 黎明重逢……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏锦 (女主)",
        "functionSummary_zh": "王牌情报员 · 代号「夜莺」 · 柔弱皮囊下一颗钢铁的心 · 刀尖行走、滴水不漏"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈墨 (男主)",
        "functionSummary_zh": "潜伏敌营的同志 · 表面是敌军军官，实为她的上线 · 唯独为她，一再涉险"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "钱处长 (反派)",
        "functionSummary_zh": "敌方反间谍头目 · 阴鸷多疑、嗅觉敏锐"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "赵奎 (反派)",
        "functionSummary_zh": "潜伏在内部的叛徒 · 出卖同志、通敌求荣"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿春 (配角)",
        "functionSummary_zh": "忠诚的交通员 · 苏锦最信任的下线"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老周 (配角)",
        "functionSummary_zh": "经验老到的情报前辈 · 暗中扶持"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素雅的洋行职员装 · 一双沉静锐利的眼 · 温婉里藏着杀伐决断",
      "protagonist": "沈墨 (男主)",
      "antagonist": "钱处长 (反派); 赵奎 (反派)",
      "centralConflict": "代号「夜莺」的王牌情报员，孤身潜入敌占区，刀尖起舞 · 她的上线，竟是一身敌军制服的同志 · 在生死一线间传递情报、揪出叛徒，只为换来,一缕黎明的光",
      "stakes": "8 种结局：迎来黎明 / 与子同袍 / 锄尽叛徒 / 功成身退 / 双向救赎 / 守护暗网 / 反间制敌 / 黎明重逢……结局，由你来选。",
      "theme": "INFERRED: 民国 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "qingmei_zhuma",
    "storyType": "manju",
    "title_zh": "竹马别太甜",
    "title_en": "SWEET CHILDHOOD LOVE",
    "genre": "甜宠日常 · 青梅竹马",
    "tagline": "从穿一条开裆裤长大的青梅竹马,到藏了十几年的暗恋 · 一场迟来的告白,把多年的兄妹情,酿成了甜到掉牙的恋爱",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "childhood-sweetheart",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "ally",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "温暖和顾屿是穿一条开裆裤长大的青梅竹马,温暖一直把顾屿当哥哥,浑然不觉这个竹马,已经暗恋了她十几年。一场契机,让顾屿决定不再隐藏,把这份藏了多年的心意,捅破窗户…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从竹马如何告白、怎样面对情敌、到这段感情如何升温,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：青梅竹马终成眷属 / 校园甜恋 / 异地坚守 / 携手未来……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "温暖 (女主)",
        "functionSummary_zh": "迟钝可爱的女孩 · 把竹马当哥哥,浑然不觉对方的心意"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾屿 (男主)",
        "functionSummary_zh": "暗恋青梅十几年的竹马 · 表面淡定、内心炽热"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "校花 (反派)",
        "functionSummary_zh": "倒追顾屿的校花 · 处处与女主作对"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "高冷学长 (男配)",
        "functionSummary_zh": "追求女主的优秀学长 · 衬托竹马的醋意"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "闺蜜 (配角)",
        "functionSummary_zh": "女主死党 · 一眼看穿竹马的心意"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "双方父母 (配角)",
        "functionSummary_zh": "两家的父母 · 早就盼着两人在一起"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清甜活泼 · 一双笑眼弯弯 · 邻家女孩般温暖",
      "protagonist": "顾屿 (男主)",
      "antagonist": "校花 (反派)",
      "centralConflict": "从穿一条开裆裤长大的青梅竹马,到藏了十几年的暗恋 · 一场迟来的告白,把多年的兄妹情,酿成了甜到掉牙的恋爱",
      "stakes": "8 种结局：青梅竹马终成眷属 / 校园甜恋 / 异地坚守 / 携手未来……命运由你书写。",
      "theme": "INFERRED: 甜宠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "qiyue_xinniang",
    "storyType": "manju",
    "title_zh": "契约新娘",
    "title_en": "THE CONTRACT BRIDE",
    "genre": "现代豪门 · 契约婚约",
    "tagline": "为救重病的母亲，灰姑娘签下一纸百天契约，嫁入豪门做\"假妻子\" · 却不知这场冷冰冰的交易背后，藏着一个男人十年的深情守候",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "ally",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "母亲重病、父亲背债躲藏，走投无路的林晚晚，签下了霍亭琛递来的一纸契约——做满一百天\"完美妻子\"，换五百万救命钱。她以为这只是一场冷冰冰的交易，却不知，这个男人为…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从契约下的感情如何升温、契约背后的秘密如何揭开、到真假未婚妻的危机如何化解，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：假戏真做契约成真 / 携手创业商界双骄 / 父亲冤屈真相昭雪 / 远走高飞自由人生……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "林晚晚 (女主)",
        "functionSummary_zh": "为救母亲签下百天契约婚的善良女孩 · 外柔内韧"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "霍亭琛 (男主)",
        "functionSummary_zh": "凯撒集团冷面总裁 · 为一个十年前的承诺设下这场契约"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白薇 (反派)",
        "functionSummary_zh": "觊觎霍亭琛的名媛 · 自称是他指腹为婚的未婚妻"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "林父 (配角)",
        "functionSummary_zh": "女主父亲 · 因被合伙人陷害背债而被迫躲债"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "林母 (配角)",
        "functionSummary_zh": "女主母亲 · 重病缠身、命悬一线"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老管家 (配角)",
        "functionSummary_zh": "霍家老管家 · 看着霍亭琛长大、暗中撮合两人"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清新淡雅的连衣裙 · 一双灵动的大眼睛 · 笑起来有温暖的梨涡",
      "protagonist": "霍亭琛 (男主)",
      "antagonist": "白薇 (反派)",
      "centralConflict": "为救重病的母亲，灰姑娘签下一纸百天契约，嫁入豪门做\"假妻子\" · 却不知这场冷冰冰的交易背后，藏着一个男人十年的深情守候",
      "stakes": "8 种结局：假戏真做契约成真 / 携手创业商界双骄 / 父亲冤屈真相昭雪 / 远走高飞自由人生……命运由你书写。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "quanyuan_eren",
    "storyType": "manju",
    "title_zh": "全员恶人",
    "title_en": "NO ONE INNOCENT",
    "genre": "悬疑复仇 · 全员恶人",
    "tagline": "一张天真无害的脸，走进一间全是恶人的会所 · 三年灭门之仇，让她亲手走进狼窝 · 在这满盘皆恶、人人戴面的局里，最毒的，才能,笑到最后",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "带着一张天真无害的脸，灭门惨案的唯一幸存者沈知意，走进了一间全是恶人的顶级会所。三年前的血海深仇，让她亲手走进狼窝。这里人人戴着精心打磨的假面，坐在主位的，正是…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在恶人堆里布局、怎样步步揭恶反杀、到如何与仇人正面摊牌，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：血仇得雪 / 恶人真情 / 全员落网 / 功成身退 / 双向救赎 / 揭穿主谋 / 以恶制恶 / 放下释怀……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈知意 (女主)",
        "functionSummary_zh": "灭门惨案唯一幸存者 · 一张无害的脸下藏着满口毒牙 · 步步为营、深不可测"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾衍 (男主)",
        "functionSummary_zh": "同样深不可测的局中人 · 与她棋逢对手 · 唯独为她，重拾真心"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "钱坤 (反派)",
        "functionSummary_zh": "道貌岸然的灭门仇人 · 双手沾血、伪善至极"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周磊 (反派)",
        "functionSummary_zh": "笑面虎 · 见人说人话、背后捅刀"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿K (配角)",
        "functionSummary_zh": "沈知意唯一信得过的旧识 · 暗中相助"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "林姐 (配角)",
        "functionSummary_zh": "表面盟友 · 各有算计的局中人"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清纯无害的外表 · 一双暗藏锋芒的眼 · 笑意之下是杀伐",
      "protagonist": "顾衍 (男主)",
      "antagonist": "钱坤 (反派); 周磊 (反派)",
      "centralConflict": "一张天真无害的脸，走进一间全是恶人的会所 · 三年灭门之仇，让她亲手走进狼窝 · 在这满盘皆恶、人人戴面的局里，最毒的，才能,笑到最后",
      "stakes": "8 种结局：血仇得雪 / 恶人真情 / 全员落网 / 功成身退 / 双向救赎 / 揭穿主谋 / 以恶制恶 / 放下释怀……结局，由你来选。",
      "theme": "INFERRED: 悬疑 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "sansheng_jie",
    "storyType": "manju",
    "title_zh": "三生劫",
    "title_en": "THREE LIVES OF LOVE",
    "genre": "古言仙侠 · 上神虐恋",
    "tagline": "三生三世的纠缠，一次次的相遇与别离 · 高高在上的战神上神，与历劫的凡间女子，渡尽情劫，方知此生挚爱",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "三界战神墨衍，本是清冷无情的上神。一次下界，他遇见了历劫的仙子凤璇玑，命运的红线就此缠绕。三生三世，他们一次次相遇、相爱、别离，渡尽情劫。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何相认前缘、怎样冲破天规阻挠、到选择渡劫的方式，每个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：终成眷属共掌三界 / 归隐凡尘 / 以身渡劫 / 厮守永生……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "凤璇玑 (女主)",
        "functionSummary_zh": "下界历劫的仙子 · 三生轮回、记忆缺失，与上神情缘纠缠"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "墨衍 (男主)",
        "functionSummary_zh": "三界战神上神 · 清冷孤高，却为她甘愿堕入轮回"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "魔尊 (反派)",
        "functionSummary_zh": "觊觎女主的魔界之主 · 痴恋成执"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "仙后 (反派)",
        "functionSummary_zh": "阻挠两人的天界仙后 · 维护天规"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "侍女青鸾 (配角)",
        "functionSummary_zh": "女主的贴身侍女 · 三生相随"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "月老 (配角)",
        "functionSummary_zh": "掌管姻缘的老神仙 · 暗中牵线"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "一袭红衣明艳动人 · 眉心一点朱砂 · 灵动中藏着前世的哀愁",
      "protagonist": "墨衍 (男主)",
      "antagonist": "魔尊 (反派); 仙后 (反派)",
      "centralConflict": "三生三世的纠缠，一次次的相遇与别离 · 高高在上的战神上神，与历劫的凡间女子，渡尽情劫，方知此生挚爱",
      "stakes": "8 种结局：终成眷属共掌三界 / 归隐凡尘 / 以身渡劫 / 厮守永生……命运由你书写。",
      "theme": "INFERRED: 仙侠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shanghai_fengyun",
    "storyType": "manju",
    "title_zh": "上海滩风云",
    "title_en": "SHANGHAI BUND",
    "genre": "民国乱世 · 上海滩",
    "tagline": "乱世上海滩，落魄名门之女为父报仇闯荡十里洋场 · 歌舞升平之下，是刀光剑影的暗涌 · 她要在这吃人的滩头，查清真相、护住所爱",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "民国",
    "familyKey": "republican",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "二十年代的上海滩，纸醉金迷，暗流汹涌。名门之女苏念，父亲被人害死、家道中落，她隐姓埋名混入十里洋场的舞厅，要在这吃人的滩头，查清父亲被害的真相、为家族讨回公道。…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从用什么方式在滩头立足、怎样在情与仇之间抉择、到选择哪种方式掀翻盘踞的仇敌，每一个抉择，都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：称霸滩头成传奇 / 与霍廷舟乱世真情 / 仇敌一并伏诛 / 为父沉冤昭雪 / 双向救赎彼此治愈 / 以实业护一方百姓 / 连根拔起整个黑帮 / 放下…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏念 (女主)",
        "functionSummary_zh": "落魄名门之女 · 父亲被害、家道中落，她隐入舞厅，查真相报父仇"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "霍廷舟 (男主)",
        "functionSummary_zh": "亦正亦邪的青帮少帮主、实业家 · 起初利用她，渐为她破例"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "赵九爷 (反派)",
        "functionSummary_zh": "盘踞滩头的黑帮大佬 · 害死她父亲的真凶"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "钱买办 (反派)",
        "functionSummary_zh": "卖国求荣的洋行买办 · 与赵九爷勾结夺产"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿香 (配角)",
        "functionSummary_zh": "舞厅头牌姐妹 · 第一个真心待她的人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "周叔 (配角)",
        "functionSummary_zh": "父亲的旧部老仆 · 暗中替她引路"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "旗袍裹身、风情万种的皮囊下 · 一双沉静凌厉、暗藏杀机的眼",
      "protagonist": "霍廷舟 (男主)",
      "antagonist": "赵九爷 (反派); 钱买办 (反派)",
      "centralConflict": "乱世上海滩，落魄名门之女为父报仇闯荡十里洋场 · 歌舞升平之下，是刀光剑影的暗涌 · 她要在这吃人的滩头，查清真相、护住所爱",
      "stakes": "8 种结局：称霸滩头成传奇 / 与霍廷舟乱世真情 / 仇敌一并伏诛 / 为父沉冤昭雪 / 双向救赎彼此治愈 / 以实业护一方百姓 / 连根拔起整个黑帮 / 放下恩怨远走他乡……结局由你的选择书写。",
      "theme": "INFERRED: 民国 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shangmen_jinxiu",
    "storyType": "manju",
    "title_zh": "商门锦绣",
    "title_en": "The Merchant's Daughter",
    "genre": "古装宅斗 · 经商嫡女",
    "tagline": "江南首富暴毙、庶母族叔伪造遗书侵吞家业 · 经商嫡女沈知绣不靠夫家、不依权贵,凭一手过人的经营才智,从市集小铺到夺回沈记,在宅斗与商战的双线里,亲手把家业从虎口夺回",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "宅斗",
    "familyKey": "house-intrigue",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "江南最大绸缎商行『沈记』东家沈万通一夜暴毙,庶母柳姨娘与族叔沈广拿出一纸伪造的遗书,侵吞了嫡女沈知绣的万贯家业。母女被赶进破院、月例克扣、寄人篱下。可这位自幼随…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "是另起炉灶白手起家、是隐忍查证握住铁证,还是借力商会结盟巨贾?是正面商战夺产、是公堂揭穿伪证,还是回头清算内宅?面对族叔庶母的栽赃毒计,是智计反杀还是借商道之势…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局:富甲天下商业帝国 / 商道良缘喜结连理 / 沉冤得雪真相大白 / 执掌商会一言九鼎 / 急流勇退寄情山水 / 兴商济民泽被乡里 / 重振门楣光耀沈家…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈知绣 (女主)",
        "functionSummary_zh": "江南首富沈万通嫡女,自幼随父打理生意、一手经营算账之能满府无人能及 · 父亡后家业被夺,凭商才白手起家、商战夺产,从孤女走成江南商界翘楚"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾衍 (男主)",
        "functionSummary_zh": "江南漕运巨贾顾家少东家 · 与沈知绣商道相知、并肩商战,亦敌亦友、互利结盟,终成知己良缘"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "沈广 (反派 1)",
        "functionSummary_zh": "沈知绣族叔 · 伪造遗书侵吞沈记、贪墨掏空家业,更暗藏害兄夺产之毒,是夺产案的主谋"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "柳姨娘 (反派 2)",
        "functionSummary_zh": "沈万通庶室 · 与族叔里应外合,克扣磋磨嫡女母女、安插眼线、私吞公中,是内宅的蛀虫"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿桃 (配角)",
        "functionSummary_zh": "沈知绣贴身丫鬟 · 主仆情深、不离不弃,落难时仍死心塌地相随,是沈知绣最忠心的臂助"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "沈母 (配角)",
        "functionSummary_zh": "沈知绣生母、沈万通正室 · 体弱温婉,落难中是女儿心底最软的牵挂与最坚定的支撑"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素雅锦裙难掩精明 · 眉眼清亮 · 算盘在手便气场十足",
      "protagonist": "顾衍 (男主)",
      "antagonist": "沈广 (反派 1); 柳姨娘 (反派 2)",
      "centralConflict": "江南首富暴毙、庶母族叔伪造遗书侵吞家业 · 经商嫡女沈知绣不靠夫家、不依权贵,凭一手过人的经营才智,从市集小铺到夺回沈记,在宅斗与商战的双线里,亲手把家业从虎口夺回",
      "stakes": "8 种结局:富甲天下商业帝国 / 商道良缘喜结连理 / 沉冤得雪真相大白 / 执掌商会一言九鼎 / 急流勇退寄情山水 / 兴商济民泽被乡里 / 重振门楣光耀沈家 / 放下释怀向阳新生……这场经商嫡女的翻身路,由你执笔。",
      "theme": "INFERRED: 宅斗 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shangzhan_chongsheng",
    "storyType": "manju",
    "title_zh": "重生之商业帝国",
    "title_en": "REBORN TYCOON",
    "genre": "重生复仇 · 商战重生",
    "tagline": "前世被合伙人背叛、企业被吞、家破人亡的商界女强人 · 重生回到创业之初，这一世她要带着记忆，亲手缔造一个无人能撼的商业帝国",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "family-ruin-revenge",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "商界女强人江晚一手创办的企业，被最信任的合伙人背叛吞并，落得家破人亡、含恨而终。重生回到创业之初，她带着前世的记忆与商业嗅觉，誓要避开所有陷阱，亲手打造一个无人…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何避开背叛、怎样积累第一桶金、到选择商战的方式，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：缔造商业帝国 / 与霍宴携手 / 复仇雪恨 / 急流勇退……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "江晚 (女主)",
        "functionSummary_zh": "重生前: 被合伙人背叛吞并的企业家 / 重生后: 回到创业起点"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "霍宴 (男主)",
        "functionSummary_zh": "商界巨擘 · 前世暗中相助、今生愿与她并肩的人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "前世合伙人 (反派)",
        "functionSummary_zh": "背信弃义的合伙人 · 前世吞并她的一切"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "商界对手 (反派)",
        "functionSummary_zh": "步步紧逼的竞争对手 · 不择手段"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "助理小敏 (配角)",
        "functionSummary_zh": "女主的得力助理 · 忠诚能干"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "恩师 (配角)",
        "functionSummary_zh": "女主的商业导师 · 暗中指点"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "干练利落的职业套装 · 一双洞悉商海的锐利眼睛 · 从容笃定",
      "protagonist": "霍宴 (男主)",
      "antagonist": "前世合伙人 (反派); 商界对手 (反派)",
      "centralConflict": "前世被合伙人背叛、企业被吞、家破人亡的商界女强人 · 重生回到创业之初，这一世她要带着记忆，亲手缔造一个无人能撼的商业帝国",
      "stakes": "8 种结局：缔造商业帝国 / 与霍宴携手 / 复仇雪恨 / 急流勇退……命运由你书写。",
      "theme": "INFERRED: 重生 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 重生 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shanhun_dalao",
    "storyType": "manju",
    "title_zh": "闪婚老公是大佬",
    "title_en": "MY FLASH MARRIAGE",
    "genre": "甜宠日常 · 闪婚甜宠",
    "tagline": "撞见未婚夫劈腿，她转身拉住身边陌生男人闪婚 · 婚后才发现，这个低调老公竟是隐形大佬，还是失散多年的青梅竹马",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "childhood-sweetheart",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "订婚宴上撞见未婚夫与闺蜜劈腿，苏甜一怒之下，转身拉住身边一个陌生男人就去领了证。她以为这只是赌气，婚后却发现，这个深藏不露的老公顾时琛，竟是隐形大佬，更是她儿时…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从闪婚后的感情如何升温、两人的过往如何揭开、到白月光来袭如何化解，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：甜蜜永远 / 比翼齐飞 / 幸福满满 / 逍遥人生 / 灵魂伴侣……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏甜 (女主)",
        "functionSummary_zh": "被渣男劈腿后赌气闪婚的服装设计师 · 外甜内韧"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾时琛 (男主)",
        "functionSummary_zh": "隐形富豪 · 苏甜失散多年的青梅竹马 · 宠妻狂魔"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白月光 (反派)",
        "functionSummary_zh": "顾时琛的旧识 · 处心积虑想拆散两人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "前未婚夫 (反派)",
        "functionSummary_zh": "劈腿的渣男 · 见苏甜飞上枝头便不甘纠缠"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "婆婆 (配角)",
        "functionSummary_zh": "顾时琛的母亲 · 慈爱开明、一眼就喜欢苏甜"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "闺蜜 (配角)",
        "functionSummary_zh": "苏甜的死党 · 鬼马精灵、永远力挺她"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清爽利落的短发 · 一双笑起来会弯的眼睛 · 甜美又有股不服输的劲",
      "protagonist": "顾时琛 (男主)",
      "antagonist": "白月光 (反派); 前未婚夫 (反派)",
      "centralConflict": "撞见未婚夫劈腿，她转身拉住身边陌生男人闪婚 · 婚后才发现，这个低调老公竟是隐形大佬，还是失散多年的青梅竹马",
      "stakes": "8 种结局：甜蜜永远 / 比翼齐飞 / 幸福满满 / 逍遥人生 / 灵魂伴侣……命运由你书写。",
      "theme": "INFERRED: 甜宠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shanhun_shoufu",
    "storyType": "manju",
    "title_zh": "闪婚老公竟是隐形首富",
    "title_en": "MARRIED A HIDDEN TYCOON",
    "genre": "现代豪门 · 闪婚老公",
    "tagline": "酒后乌龙领证，她嫁给了城中最神秘的大佬 · 契约夫妻假戏真做，他宠她入骨，却步步藏着惊天身世",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "ally",
      "antagonist",
      "ally",
      "antagonist"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "珠宝设计师苏晚被老板陈骁窃取作品、反诬陷盗窃，一夜之间身败名裂。借酒消愁的她，竟在民政局乌龙领证，嫁给了陌生男人——城中最神秘的大佬霍沉舟。一纸契约婚姻，谁知假…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在霍家立足、怎样揭开陈骁的窃案、到面对霍沉舟深藏的身世秘密，每一个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：洗清冤屈事业重生 / 与霍沉舟真心相许 / 揭穿白绫陈骁阴谋 / 守护霍家家业…… 命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏晚 (女主)",
        "functionSummary_zh": "被前老板窃取作品、反诬陷盗窃的落魄珠宝设计师 · 倔强要强、外冷内热"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "霍沉舟 (男主)",
        "functionSummary_zh": "霍氏集团掌权人，城中神秘大佬 · 冷峻克制、宠妻无声"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "林然 (配角)",
        "functionSummary_zh": "苏晚大学学长，温润心内科医生，默默守护"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白绫 (反派)",
        "functionSummary_zh": "名媛，自诩霍沉舟未婚妻，处处刁难苏晚"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "霍敬堂 (配角)",
        "functionSummary_zh": "霍家老爷子，表面严苛实则护短，暗中考验苏晚"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "陈骁 (反派)",
        "functionSummary_zh": "苏晚前公司老板，窃取她设计、陷害她，与白绫勾结"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "简约干练 · 眼神清亮倔强 · 素色风衣",
      "protagonist": "霍沉舟 (男主)",
      "antagonist": "白绫 (反派); 陈骁 (反派)",
      "centralConflict": "酒后乌龙领证，她嫁给了城中最神秘的大佬 · 契约夫妻假戏真做，他宠她入骨，却步步藏着惊天身世",
      "stakes": "8 种结局：洗清冤屈事业重生 / 与霍沉舟真心相许 / 揭穿白绫陈骁阴谋 / 守护霍家家业…… 命运由你书写。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shaoshuai_furen",
    "storyType": "manju",
    "title_zh": "少帅的金丝雀",
    "title_en": "THE MARSHAL'S WIFE",
    "genre": "民国乱世 · 少帅夫人",
    "tagline": "乱世之中，她被家族当作棋子，嫁给杀伐果断的铁血少帅 · 从一桩冰冷的政治联姻，到生死相依的家国之恋，谱写一曲烽火中的乱世传奇",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "民国",
    "familyKey": "republican",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "军阀混战的乱世，沈家为求自保，将温婉的沈知夏，嫁给了手握重兵、杀伐果断的少帅傅景珩。她以为这只是一桩用来交易的政治联姻，却在朝夕相处与谍影重重之间，与这个铁血男…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从少帅的情愫如何萌动、谍战危机如何智斗、到家国决战如何破局，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：执手天下共定河山 / 乱世真情相守一生 / 保家卫国名垂青史 / 归隐田园岁月静好……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈知夏 (女主)",
        "functionSummary_zh": "为保家族被迫联姻的名门闺秀 · 智勇双全、外柔内刚"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "傅景珩 (男主)",
        "functionSummary_zh": "铁血少帅 · 战场上杀伐果断，却唯独为她卸下铠甲"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "敌国特使 (反派)",
        "functionSummary_zh": "敌国间谍头目 · 阴险狡诈、步步设局"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "姨太太 (反派)",
        "functionSummary_zh": "少帅府姨太太 · 善妒狠毒、屡屡加害"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "副官 (配角)",
        "functionSummary_zh": "少帅的心腹副官 · 忠勇可靠"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "丫鬟 (配角)",
        "functionSummary_zh": "沈知夏的贴身丫鬟 · 机灵忠心"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素雅的真丝旗袍 · 温婉端庄 · 一双沉静的眼睛里藏着不输男儿的胆识",
      "protagonist": "傅景珩 (男主)",
      "antagonist": "敌国特使 (反派); 姨太太 (反派)",
      "centralConflict": "乱世之中，她被家族当作棋子，嫁给杀伐果断的铁血少帅 · 从一桩冰冷的政治联姻，到生死相依的家国之恋，谱写一曲烽火中的乱世传奇",
      "stakes": "8 种结局：执手天下共定河山 / 乱世真情相守一生 / 保家卫国名垂青史 / 归隐田园岁月静好……命运由你书写。",
      "theme": "INFERRED: 民国 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shenfen_diaobao",
    "storyType": "manju",
    "title_zh": "调包的人生",
    "title_en": "SWAPPED",
    "genre": "悬疑复仇 · 身份调包",
    "tagline": "一份旧档案，揭开她被调包的人生 · 本该属于她的豪门一切，正被顶替者安然享受 · 她要夺回被偷走的二十年，揪出蓄意调包的幕后黑手",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "一份泛黄的旧档案，让林微发现自己的人生从一出生就被调了包——真正的豪门千金是她，而非如今风光的赵雅。更惊人的是，这场调包并非意外，而是有人蓄意为之。一个看穿真相…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何夺回身份、怎样并肩揭露真相、到如何与幕后真凶正面摊牌，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：夺回人生 / 患难真情 / 真相大白 / 自在人生 / 双向救赎 / 揪出同谋 / 既往不咎 / 平淡是真……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "林微 (女主)",
        "functionSummary_zh": "被调包的真千金 · 隐忍坚韧、智计过人 · 从孤女到夺回人生的归来者"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆沉 (男主)",
        "functionSummary_zh": "看穿真相的律师 · 沉稳强大、暗中相助 · 从讨公道到守护她这个人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "赵雅 (反派)",
        "functionSummary_zh": "顶替她身份的假千金 · 鸠占鹊巢，亦是棋子"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "赵母 (反派)",
        "functionSummary_zh": "蓄意调包的幕后真凶 · 慈祥面孔下的蛇蝎心肠"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "春婶 (配角)",
        "functionSummary_zh": "知情的老仆 · 良心难安、暗中相助"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "苏苏 (配角)",
        "functionSummary_zh": "林微的闺蜜 · 唯一的依靠"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "朴素干练的装扮 · 一双隐忍坚定的眼 · 温婉下藏着锋芒",
      "protagonist": "陆沉 (男主)",
      "antagonist": "赵雅 (反派); 赵母 (反派)",
      "centralConflict": "一份旧档案，揭开她被调包的人生 · 本该属于她的豪门一切，正被顶替者安然享受 · 她要夺回被偷走的二十年，揪出蓄意调包的幕后黑手",
      "stakes": "8 种结局：夺回人生 / 患难真情 / 真相大白 / 自在人生 / 双向救赎 / 揪出同谋 / 既往不咎 / 平淡是真……结局，由你来选。",
      "theme": "INFERRED: 悬疑 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shengnv_wushuang",
    "storyType": "manju",
    "title_zh": "神女不是祭品",
    "title_en": "NOT A SACRIFICE",
    "genre": "穿越 · 穿成神女",
    "tagline": "现代女子穿成南疆部族世代供奉的「神女」 · 却发现神女竟是要献祭给神明的活祭 · 她要以现代知识破除巫蛊迷信，把自己，活成真正护佑万民的神女",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "现代医农双修的才女苏窈，一觉醒来成了南疆部族世代供奉的「神女」。荣光之下，却藏着一个血淋淋的真相——所谓神女，不过是要被献祭给「神明」的活祭。她决定，用现代的科…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何破除迷信立威、怎样查清神女献祭的真相、到选择何种方式破局，每个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：真神护族万民敬仰 / 与战神少主相守 / 废除活祭恶俗 / 携手归隐 / 双向救赎 / 教化部族开蒙 / 揪出祭司真凶 / 魂归现代……命运由你书写…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏窈 (女主)",
        "functionSummary_zh": "穿越前: 现代医学与农学双修的才女 / 穿越后: 被供奉待祭的南疆神女"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "墨夜 (男主)",
        "functionSummary_zh": "南疆部族战神少主 · 唯一不信她该死的人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "蛊婆 (反派)",
        "functionSummary_zh": "部族大祭司 · 以神明之名操控部族、欲献祭神女"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "巫桑 (反派)",
        "functionSummary_zh": "觊觎祭司之位的二祭司 · 阴狠善妒"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿青 (配角)",
        "functionSummary_zh": "伺候神女的小祭司 · 头一个真心待她的人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老药师 (配角)",
        "functionSummary_zh": "部族老药师 · 通晓草药、暗中相助"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素白神女祭袍 · 眉心一点神纹 · 清丽之中藏着不信鬼神的清醒",
      "protagonist": "墨夜 (男主)",
      "antagonist": "蛊婆 (反派); 巫桑 (反派)",
      "centralConflict": "现代女子穿成南疆部族世代供奉的「神女」 · 却发现神女竟是要献祭给神明的活祭 · 她要以现代知识破除巫蛊迷信，把自己，活成真正护佑万民的神女",
      "stakes": "8 种结局：真神护族万民敬仰 / 与战神少主相守 / 废除活祭恶俗 / 携手归隐 / 双向救赎 / 教化部族开蒙 / 揪出祭司真凶 / 魂归现代……命运由你书写。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shenmo_zhilian",
    "storyType": "manju",
    "title_zh": "神魔劫",
    "title_en": "GOD AND DEMON",
    "genre": "古言仙侠 · 神魔之恋",
    "tagline": "她是上古魔神之女,他是三界至高神尊 · 一个生而为魔,一个生而为神,跨越万年神魔大忌的爱恋,纠缠了三生三世",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "冥薇是上古魔神之女,昭明君是三界至高神尊。神魔不两立,他们却在一次次劫难中,生出了不该有的情愫。这场跨越万年神魔大忌的爱恋,在天界的偏见、魔界的阴谋、三生三世的…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何面对神魔禁忌、怎样化解三界的偏见、到守护这份感情的方式,每个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：神魔结契 / 三生相守 / 化解神魔 / 同归于尽……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "冥薇 (女主)",
        "functionSummary_zh": "上古魔神之女 · 风华绝代、桀骜不驯"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "昭明君 (男主)",
        "functionSummary_zh": "三界至高神尊 · 清冷出尘 · 守护三界亿万生灵"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "天界长老 (反派)",
        "functionSummary_zh": "极端排魔的天界长老 · 视神魔之恋为大忌"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "魔界叛王 (反派)",
        "functionSummary_zh": "觊觎女主之位的魔界叛王 · 阴险毒辣"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "魔界仙鹤 (配角)",
        "functionSummary_zh": "女主的灵兽伙伴 · 化形为白衣少年"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "神尊师弟 (配角)",
        "functionSummary_zh": "男主的师弟 · 暗中相助两人"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "一袭暗紫魔袍 · 妖冶绝美 · 一双蕴含魔气却深情的眼眸",
      "protagonist": "昭明君 (男主)",
      "antagonist": "天界长老 (反派); 魔界叛王 (反派)",
      "centralConflict": "她是上古魔神之女,他是三界至高神尊 · 一个生而为魔,一个生而为神,跨越万年神魔大忌的爱恋,纠缠了三生三世",
      "stakes": "8 种结局：神魔结契 / 三生相守 / 化解神魔 / 同归于尽……命运由你书写。",
      "theme": "INFERRED: 仙侠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shenyi_dinv",
    "storyType": "manju",
    "title_zh": "神医嫡女",
    "title_en": "The Divine Physician",
    "genre": "古装宅斗 · 神医嫡女",
    "tagline": "太医世家嫡女医术超群,却被庶妹与庸医联手诬陷『医死人命』、夺医籍逐出家门 · 落难陋巷的林清梧悬壶济世,以一身仁心仁术,验毒案、揭真凶,一步步洗清冤屈、重登杏林之巅",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "宅斗",
    "familyKey": "house-intrigue",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "太医世家嫡女林清梧,医术京中无双,却在为一位贵人施针后,被庶妹林清菡与庸医王济联手诬陷『医死人命』。庶母趁机发难,她被夺去医籍、逐出家门,跌入最深的低谷。落难陋…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "是以妙手回春扬名立身、是以医验毒暗查真凶,还是结交贵人借势翻盘?是临危控疫以救民之功正名、是御前验毒翻案雪冤,还是回头清算把持内宅的庶母?面对藏在庶妹背后、牵涉…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局:杏林之巅执掌太医院 / 医道良缘喜结连理 / 血债血偿真凶伏诛 / 悬壶济世医者仁心 / 重振医门杏林世家 / 医济天下广设医坊 / 连根拔起肃清朝…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "林清梧 (女主)",
        "functionSummary_zh": "太医院世家嫡女,自幼随祖父习医,医术京中无双 · 被诬『医死人命』、夺医籍逐出家门后,落难陋巷悬壶济世,以医道验毒揭凶、绝地翻身"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "萧珩 (男主)",
        "functionSummary_zh": "靖王世子,权倾朝野 · 重病被林清梧救回一命,感念其医术胆识,暗中相护、并肩查冤,是她最稳的靠山与知己"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "林清菡 (反派 1)",
        "functionSummary_zh": "林府庶女、林清梧庶妹 · 嫉恨嫡姐医名,受人指使买通庸医对贵人下毒、再栽赃于姐,是栽赃案的明面凶手"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "王济 (反派 2)",
        "functionSummary_zh": "庸医,行医数十年却德行败坏 · 受林清菡买通,助其下毒、当众诬陷林清梧『庸医害命』,是构陷案的帮凶"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "林父 (配角)",
        "functionSummary_zh": "林清梧之父、太医世家家主 · 性情懦弱,被庶母把持内宅,曾在压力下逐走嫡女,后悔悟弥补"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "林母 (配角)",
        "functionSummary_zh": "林清梧生母、林府正室 · 温柔体弱,被庶母苛待多年,是女儿心底最软的牵挂与坚定的支撑"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素衣布裙难掩清丽 · 眉眼沉静 · 执银针时自有一股从容的锋芒",
      "protagonist": "萧珩 (男主)",
      "antagonist": "林清菡 (反派 1); 王济 (反派 2)",
      "centralConflict": "太医世家嫡女医术超群,却被庶妹与庸医联手诬陷『医死人命』、夺医籍逐出家门 · 落难陋巷的林清梧悬壶济世,以一身仁心仁术,验毒案、揭真凶,一步步洗清冤屈、重登杏林之巅",
      "stakes": "8 种结局:杏林之巅执掌太医院 / 医道良缘喜结连理 / 血债血偿真凶伏诛 / 悬壶济世医者仁心 / 重振医门杏林世家 / 医济天下广设医坊 / 连根拔起肃清朝蠹 / 放下释怀向阳新生……这场神医嫡女的翻身路,由你执笔。",
      "theme": "INFERRED: 宅斗 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shifu_wenxu",
    "storyType": "manju",
    "title_zh": "温柔师傅别太撩",
    "title_en": "MY GENTLE MASTER",
    "genre": "甜宠日常 · 温柔师傅",
    "tagline": "失业又失恋、人生跌到谷底的江晚，误闯一家老茶馆 · 一杯温热的茶、一位温润的制茶师傅，照进了她灰暗的世界 · 留下学茶的她，渐渐发现这位温柔师傅，把最深的心意，藏进了一杯茶里",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "ally",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "失业又失恋、人生跌到谷底的江晚，误打误撞闯进一条老巷尽头的茶馆。一杯温热的茶、一位温润的制茶师傅温叙，照进了她灰暗的世界。走投无路的她留下学茶，渐渐发现，这位总…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在茶馆扎根、怎样靠近师傅的内心、到老茶馆面临拆迁的存亡抉择，每个选择都通向不同的甜蜜结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：温柔以待 / 薪火相传 / 喜结连理 / 双向救赎 / 事业有成 / 茶香天涯 / 一茶一生 / 茶韵流芳……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "江晚 (女主)",
        "functionSummary_zh": "失业失恋的都市女孩 · 跌入谷底却倔强不认输 · 被一杯茶治愈、又反过来治愈师傅"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "温叙 (男主)",
        "functionSummary_zh": "老茶馆的制茶师傅 · 温润如玉、藏着旧伤 · 用温柔治愈他人、唯独不会照顾自己"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "苏晴 (配角)",
        "functionSummary_zh": "故人之女 · 登门道谢、引发小小误会"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "前男友 (反派)",
        "functionSummary_zh": "劈腿的前男友 · 失去后又想纠缠"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老陈 (配角)",
        "functionSummary_zh": "老街坊兼老茶客 · 热心仗义 · 关键时刻挺身护茶馆"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小满 (配角)",
        "functionSummary_zh": "江晚的闺蜜 · 古道热肠 · 恋爱观察员"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清秀温婉 · 素色棉麻裙 · 眼里曾有伤、后又有光",
      "protagonist": "温叙 (男主)",
      "antagonist": "前男友 (反派)",
      "centralConflict": "失业又失恋、人生跌到谷底的江晚，误闯一家老茶馆 · 一杯温热的茶、一位温润的制茶师傅，照进了她灰暗的世界 · 留下学茶的她，渐渐发现这位温柔师傅，把最深的心意，藏进了一杯茶里",
      "stakes": "8 种结局：温柔以待 / 薪火相传 / 喜结连理 / 双向救赎 / 事业有成 / 茶香天涯 / 一茶一生 / 茶韵流芳……结局，由你来选。",
      "theme": "INFERRED: 甜宠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shijian_xunhuan",
    "storyType": "manju",
    "title_zh": "循环之夜",
    "title_en": "THE LOOPING NIGHT",
    "genre": "悬疑复仇 · 时间循环",
    "tagline": "她一次次重活妹妹遇害的那个雨夜 · 每一轮循环都逼近真相，唯有揪出凶手、救回妹妹，才能逃出这无尽轮回",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "ally",
      "antagonist",
      "antagonist",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "妹妹林晚在一个雨夜惨遭杀害，姐姐林夏悲痛欲绝。可一觉醒来，她竟回到了妹妹出事当天的傍晚——她被困在了这一夜的无尽循环里。每一轮，她都带着上一轮的记忆，一步步逼近…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何查案、锁定嫌疑、到在护妹与抓凶间抉择，每一个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：打破循环救回妹妹 / 与刑警并肩余生 / 真凶帮凶伏法 / 以身相代 / 揭穿连环旧案…… 命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "林夏 (女主)",
        "functionSummary_zh": "困在时间循环里的姐姐，为救妹妹一次次重来 · 冷静坚韧、记忆贯通每一轮"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈彦 (男主)",
        "functionSummary_zh": "冷静的刑警，唯一渐渐相信\"循环\"的人，与她并肩查案"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "林晚 (配角)",
        "functionSummary_zh": "林夏的妹妹，循环中反复遇害的人，单纯善良"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "陈律 (反派)",
        "functionSummary_zh": "林晚温文尔雅的私教老师，因求而不得而起杀心的真凶"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周明 (反派)",
        "functionSummary_zh": "热心过头的房东，被陈律抓住把柄、替他盯梢掩护的帮凶"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "许蕊 (配角)",
        "functionSummary_zh": "林晚的闺蜜，知道她近来害怕一个人，为破案提供关键线索"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "湿透的风衣 · 眼神疲惫而执着",
      "protagonist": "沈彦 (男主)",
      "antagonist": "陈律 (反派); 周明 (反派)",
      "centralConflict": "她一次次重活妹妹遇害的那个雨夜 · 每一轮循环都逼近真相，唯有揪出凶手、救回妹妹，才能逃出这无尽轮回",
      "stakes": "8 种结局：打破循环救回妹妹 / 与刑警并肩余生 / 真凶帮凶伏法 / 以身相代 / 揭穿连环旧案…… 命运由你书写。",
      "theme": "INFERRED: 悬疑 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shitu_jinlian",
    "storyType": "manju",
    "title_zh": "师尊请自重",
    "title_en": "FORBIDDEN MASTER",
    "genre": "古言仙侠 · 师徒禁恋",
    "tagline": "她是天赋绝顶的小师妹,他是清冷出尘的师尊 · 一场跨越师徒名分的禁忌之恋,在仙门规矩与生死劫难中,艰难绽放",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "天赋绝顶的少女苏念,拜入仙门,师从清冷出尘的师尊墨宸。朝夕相处间,她对这位高高在上的师尊,渐生了不该有的情愫。而师尊面对这份跨越师徒名分的情感,在仙门戒律与凡心…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何面对禁忌之情、怎样冲破门规束缚、到选择守护这份感情的方式,每个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：师徒终成眷属 / 双修飞升 / 携手归隐 / 共抗魔教……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏念 (女主)",
        "functionSummary_zh": "天赋绝顶的小师妹 · 灵动率真,偏偏爱上了清冷的师尊"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "墨宸 (男主)",
        "functionSummary_zh": "清冷出尘的师尊 · 恪守仙门戒律,却对她动了凡心"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "同门师姐 (反派)",
        "functionSummary_zh": "嫉妒女主的师姐 · 同样倾慕师尊"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "魔教教主 (反派)",
        "functionSummary_zh": "觊觎女主天赋的魔教之主 · 阴险狡诈"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "掌门师伯 (配角)",
        "functionSummary_zh": "仙门掌门 · 恪守门规却也通情理"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小师弟 (配角)",
        "functionSummary_zh": "女主的小师弟 · 古灵精怪、暗中助攻"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "一袭浅碧弟子服 · 灵动俏皮 · 眉眼间满是不服输的倔强",
      "protagonist": "墨宸 (男主)",
      "antagonist": "同门师姐 (反派); 魔教教主 (反派)",
      "centralConflict": "她是天赋绝顶的小师妹,他是清冷出尘的师尊 · 一场跨越师徒名分的禁忌之恋,在仙门规矩与生死劫难中,艰难绽放",
      "stakes": "8 种结局：师徒终成眷属 / 双修飞升 / 携手归隐 / 共抗魔教……命运由你书写。",
      "theme": "INFERRED: 仙侠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shoushi_cixing",
    "storyType": "manju",
    "title_zh": "兽世娇宠",
    "title_en": "BEAST WORLD BRIDE",
    "genre": "穿越 · 兽世雌性",
    "tagline": "一朝穿越到雌性稀缺的兽人世界，她成了万兽求娶的香饽饽 · 却唯独被冷峻的兽王盯上，从此开启被娇宠的甜蜜逃生记",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "现代女孩苏暖一觉醒来，穿越到了雌性稀缺的兽人世界。在这里，女性是万兽争抢的珍宝。她凭着现代知识努力立足，却被强大冷峻的黑豹兽王墨夜一眼盯上。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在兽世自保、怎样应对兽王的追求、到面对强敌的争抢，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：成为兽王之妻 / 部落女神 / 携手归隐 / 智斗群兽……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏暖 (女主)",
        "functionSummary_zh": "穿越到兽世的现代女孩 · 机灵聪慧，凭现代知识在兽世立足"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "墨夜 (男主)",
        "functionSummary_zh": "黑豹一族兽王 · 冷峻强大，唯独对她露出柔软"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "红狐妖 (反派)",
        "functionSummary_zh": "觊觎兽王的狐族雌性 · 善妒狠毒"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "毒蛇族长 (反派)",
        "functionSummary_zh": "想强抢女主的蛇族首领 · 阴冷残忍"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小奶虎 (配角)",
        "functionSummary_zh": "女主收养的奶虎崽 · 软萌黏人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "兽医长老 (配角)",
        "functionSummary_zh": "部落的老者 · 帮助女主立足"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "柔软的兽皮裙 · 灵动大眼 · 在一众高大兽人中娇小可人",
      "protagonist": "墨夜 (男主)",
      "antagonist": "红狐妖 (反派); 毒蛇族长 (反派)",
      "centralConflict": "一朝穿越到雌性稀缺的兽人世界，她成了万兽求娶的香饽饽 · 却唯独被冷峻的兽王盯上，从此开启被娇宠的甜蜜逃生记",
      "stakes": "8 种结局：成为兽王之妻 / 部落女神 / 携手归隐 / 智斗群兽……命运由你书写。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shuangchong",
    "storyType": "manju",
    "title_zh": "双重生",
    "title_en": "TWICE REBORN",
    "genre": "重生复仇 · 双重生",
    "tagline": "前世被丈夫误信白月光、含冤惨死的她重生归来 · 却惊觉那个负她的男人也带着记忆重来——这一世，她要为自己而活，更要让算计她的人血债血偿",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "苏念前世掏心掏肺爱着丈夫顾承，却被他误信白月光沈梦，一步步被算计致死，连弟弟都被牵连。再睁眼，她重生回到悲剧发生前——更惊觉那个负她的男人，竟也带着前世记忆重来…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何抽身自救、怎样护住家人、到选择哪种方式让白月光与背后家族付出代价、要不要再信同样重生的顾承，每一个关键抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种截然不同的结局：凭真本事事业封神 / 与同样重生的顾承破镜重圆 / 白月光及家族全部伏法 / 转身离开自由新生 / 双向救赎彼此治愈 / 化恨为爱回馈社会…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏念 (女主)",
        "functionSummary_zh": "重生前: 被丈夫辜负、含冤惨死的妻子 / 重生后: 回到悲剧发生前，誓为自己而活"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾承 (男主)",
        "functionSummary_zh": "苏念的丈夫 · 同样带着前世记忆重生 · 这一世拼命挽回、护她周全"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "沈梦 (反派)",
        "functionSummary_zh": "白月光 · 上一世挑拨离间、算计害死女主的主谋"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "沈梦家族 (反派)",
        "functionSummary_zh": "沈梦背后的家族 · 借联姻渗透、图谋顾氏家业"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "苏念弟弟 (配角)",
        "functionSummary_zh": "女主弟弟 · 上一世受牵连前途尽毁"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "知心闺蜜 (配角)",
        "functionSummary_zh": "女主挚友 · 两世都对她不离不弃"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "利落干练的现代职业装 · 一双清醒锐利的眼 · 褪去了前世的隐忍",
      "protagonist": "顾承 (男主)",
      "antagonist": "沈梦 (反派); 沈梦家族 (反派)",
      "centralConflict": "前世被丈夫误信白月光、含冤惨死的她重生归来 · 却惊觉那个负她的男人也带着记忆重来——这一世，她要为自己而活，更要让算计她的人血债血偿",
      "stakes": "8 种截然不同的结局：凭真本事事业封神 / 与同样重生的顾承破镜重圆 / 白月光及家族全部伏法 / 转身离开自由新生 / 双向救赎彼此治愈 / 化恨为爱回馈社会……命运由你的选择书写。",
      "theme": "INFERRED: 重生 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 重生 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shuangmian_rensheng",
    "storyType": "manju",
    "title_zh": "双面人生",
    "title_en": "DOUBLE LIFE",
    "genre": "悬疑复仇 · 双面人生",
    "tagline": "平凡白领意外发现，自己有个失踪的双胞胎姐姐 · 她顶替姐姐的身份潜入豪门 · 一面是真实的自己，一面是姐姐的人生，步步惊心查真相",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "平凡的小白领江岚，在母亲的遗物里，意外发现自己有个素未谋面的双胞胎姐姐江澜。而江澜，在卷入一桩豪门命案后离奇失踪、被宣告死亡。为查清真相，江岚顶替姐姐的身份，潜…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从用什么方式在豪门站稳脚跟、怎样在情与真相之间抉择、到选择哪种方式让黑手付出代价，每一个惊险的抉择，都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：姐姐沉冤得雪 / 与顾时坦诚相守 / 幕后黑手入狱 / 失踪的姐姐竟还活着 / 双向救赎彼此治愈 / 卸下伪装做回自己 / 连根拔起整个黑幕 / 真…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "江岚 (女主)",
        "functionSummary_zh": "平凡的小白领 · 为查双胞胎姐姐的失踪，顶替姐姐身份潜入豪门"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾时 (男主)",
        "functionSummary_zh": "集团继承人、姐姐的未婚夫 · 似乎也在暗中追查真相"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "沈鹤 (反派)",
        "functionSummary_zh": "集团副总 · 害姐姐灭口、伪造命案的幕后黑手"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白助理 (反派)",
        "functionSummary_zh": "沈鹤的心腹帮凶 · 一手抹平所有痕迹"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老陈 (配角)",
        "functionSummary_zh": "退休老刑警 · 暗中协助她查案"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿May (配角)",
        "functionSummary_zh": "江岚的闺蜜 · 唯一知道她秘密的人"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素净的通勤装 · 一双沉静却暗藏锋芒的眼 · 在两副面孔间步步惊心",
      "protagonist": "顾时 (男主)",
      "antagonist": "沈鹤 (反派); 白助理 (反派)",
      "centralConflict": "平凡白领意外发现，自己有个失踪的双胞胎姐姐 · 她顶替姐姐的身份潜入豪门 · 一面是真实的自己，一面是姐姐的人生，步步惊心查真相",
      "stakes": "8 种结局：姐姐沉冤得雪 / 与顾时坦诚相守 / 幕后黑手入狱 / 失踪的姐姐竟还活着 / 双向救赎彼此治愈 / 卸下伪装做回自己 / 连根拔起整个黑幕 / 真相之后释然前行……结局由你的选择书写。",
      "theme": "INFERRED: 悬疑 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shuangqiang_qifeng",
    "storyType": "manju",
    "title_zh": "棋逢对手",
    "title_en": "EVENLY MATCHED",
    "genre": "甜宠日常 · 双强势均",
    "tagline": "从未败诉的金牌刑辩律师 × 同样未尝败绩的对家王牌 · 法庭上针锋相对、棋逢对手 · 这场旗鼓相当的较量，怎么就，较量成了一生的爱",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "金牌刑辩律师顾微从未输过一场官司，直到她遇上同样未尝败绩的对家王牌傅深。法庭上唇枪舌剑、棋逢对手，谁也奈何不了谁。偏偏冤家路窄，两人成了同楼对家——针锋相对的较…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何应对这个旗鼓相当的对手、怎样在并肩与对决中假戏真做、到如何应对旧爱搅局，每个选择都通向不同的甜蜜结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种甜宠结局：携手登顶最强组合 / 高调官宣 / 闪婚领证 / 合伙开所 / 双向救赎 / 高调宠妻 / 情敌出局 / 平淡是真……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "顾微 (女主)",
        "functionSummary_zh": "金牌刑辩律师 · 凌厉果决、未尝败绩 · 唯一的对手，成了唯一的心动"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "傅深 (男主)",
        "functionSummary_zh": "对家王牌律师兼合伙人 · 沉稳腹黑、滴水不漏 · 唯独输给她，心甘情愿"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周扬 (反派)",
        "functionSummary_zh": "惯用阴招的对方律师 · 作弊构陷、输不起"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "苏曼 (反派)",
        "functionSummary_zh": "傅深的旧识名媛律师 · 觊觎傅深、处处挑衅"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小桃 (配角)",
        "functionSummary_zh": "顾微的助理 · 头号嗑CP选手"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老郑 (配角)",
        "functionSummary_zh": "傅深的师父 · 一眼看穿小年轻的心思"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "利落的西装套裙 · 干练长发束起 · 一双锐利又会笑的眼 · 庭上气场全开",
      "protagonist": "傅深 (男主)",
      "antagonist": "周扬 (反派); 苏曼 (反派)",
      "centralConflict": "从未败诉的金牌刑辩律师 × 同样未尝败绩的对家王牌 · 法庭上针锋相对、棋逢对手 · 这场旗鼓相当的较量，怎么就，较量成了一生的爱",
      "stakes": "8 种甜宠结局：携手登顶最强组合 / 高调官宣 / 闪婚领证 / 合伙开所 / 双向救赎 / 高调宠妻 / 情敌出局 / 平淡是真……结局，由你来选。",
      "theme": "INFERRED: 甜宠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "shunv_nixi",
    "storyType": "manju",
    "title_zh": "庶女惊华",
    "title_en": "THE CONCUBINE DAUGHTER",
    "genre": "古装宅斗 · 庶女逆袭",
    "tagline": "生母早逝、备受嫡母苛待的卑微庶女 · 凭着隐忍智慧与一身傲骨,在吃人的深宅大院里步步逆袭,从任人践踏的庶女,惊华成名动京城的传奇",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "宅斗",
    "familyKey": "house-intrigue",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "苏锦绣是相府的庶女,生母早逝,自幼备受嫡母与嫡姐的苛待,在吃人的深宅大院里如履薄冰。然而,卑微的外表下,藏着她过人的智慧与一身傲骨。她隐忍蛰伏,誓要在这深宅里,…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在深宅自保、怎样应对嫡母嫡姐的打压、到选择逆袭的方式,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：执掌相府 / 与王爷携手 / 嫡庶翻转 / 自立门户……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏锦绣 (女主)",
        "functionSummary_zh": "备受苛待的庶女 · 表面柔弱、实则智计无双"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "萧珩 (男主)",
        "functionSummary_zh": "权倾朝野的冷面王爷 · 慧眼识珠、暗中相护"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "嫡母 (反派)",
        "functionSummary_zh": "苛待庶女的当家主母 · 阴狠善妒"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "嫡姐 (反派)",
        "functionSummary_zh": "骄纵跋扈的嫡出小姐 · 处处打压庶妹"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "贴身丫鬟 (配角)",
        "functionSummary_zh": "女主的忠仆 · 患难与共"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "外祖 (配角)",
        "functionSummary_zh": "女主的外祖、朝中老臣 · 暗中相助"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素净的庶女衣裙 · 一双藏着隐忍与锋芒的眼睛 · 卑微外表下是傲骨",
      "protagonist": "萧珩 (男主)",
      "antagonist": "嫡母 (反派); 嫡姐 (反派)",
      "centralConflict": "生母早逝、备受嫡母苛待的卑微庶女 · 凭着隐忍智慧与一身傲骨,在吃人的深宅大院里步步逆袭,从任人践踏的庶女,惊华成名动京城的传奇",
      "stakes": "8 种结局：执掌相府 / 与王爷携手 / 嫡庶翻转 / 自立门户……命运由你书写。",
      "theme": "INFERRED: 宅斗 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "taihou_chuilian",
    "storyType": "manju",
    "title_zh": "垂帘太后",
    "title_en": "The Regent Empress",
    "genre": "古装宅斗 · 垂帘太后",
    "tagline": "先帝骤崩、六岁幼帝继位 · 出身寒微的沈太后,在权臣专权、宗室窥伺、母族孱弱的死局中,垂帘听政、扫平奸佞,以一介女子之身,替幼子守住萧家江山",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "宅斗",
    "familyKey": "house-intrigue",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "antagonist",
      "antagonist",
      "ally",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "先帝暴毙,六岁幼帝萧承佑仓促继位,出身寒微的沈昭仪一夜之间成了孤立无援的太后。外有首辅裴敬之专权架空、内有睿王窥伺龙椅、母族沈家孱弱无依,连幼帝的性命都险些断送…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "是结清流、扶母族还是暗夺兵权?是整顿吏治、掌控禁军还是教养幼帝?面对权臣逼宫,是雷霆平叛还是谋定后动?每一个抉择,都通向不同的命运。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局:还政明君功成身退 / 太后摄政凤掌乾坤 / 严惩逆党血债血偿 / 急流勇退撤帘归隐 / 母子情深相依为命 / 仁政安邦泽被苍生 / 铁腕女主乾纲独断…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈太后 (女主)",
        "functionSummary_zh": "先帝沈昭仪,幼帝生母 · 出身寒微、母族单薄,先帝骤崩后晋为太后 · 于孤立无援中垂帘听政,以智略与铁腕,扫权臣、护幼帝、稳江山"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "裴敬之 (反派 1)",
        "functionSummary_zh": "当朝首辅、先帝钦命辅政大臣 · 手握朝政、架空孤儿寡母,暗中私通西北边镇、图谋专权,是太后最大的对手"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "睿王 (反派 2)",
        "functionSummary_zh": "先帝胞弟,封睿王 · 觊觎龙椅、窥伺神器,暗害幼帝、勾结首辅,终至逼宫篡位"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "萧承佑 (萌宝)",
        "functionSummary_zh": "先帝幼子,六岁继位的小皇帝 · 在母亲教养下渐通明断,小小年纪已有人君之姿,是太后誓死守护的根本"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "顾烈 (男配)",
        "functionSummary_zh": "禁军副统领、先帝旧部 · 忠勇刚直却被裴党打压,得太后知遇而效死,掌禁军兵权、护卫圣驾、勤王平叛"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "沈砚 (配角)",
        "functionSummary_zh": "沈太后胞兄 · 清正干练却不得志的小官,经太后扶持渐成清流中坚,在朝堂为太后里应外合、肃贪除奸"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素色凤袍 · 端庄清冷 · 柔美眉眼下藏着深谋与锋芒",
      "protagonist": "INFERRED: no hero-tagged character",
      "antagonist": "裴敬之 (反派 1); 睿王 (反派 2)",
      "centralConflict": "先帝骤崩、六岁幼帝继位 · 出身寒微的沈太后,在权臣专权、宗室窥伺、母族孱弱的死局中,垂帘听政、扫平奸佞,以一介女子之身,替幼子守住萧家江山",
      "stakes": "8 种结局:还政明君功成身退 / 太后摄政凤掌乾坤 / 严惩逆党血债血偿 / 急流勇退撤帘归隐 / 母子情深相依为命 / 仁政安邦泽被苍生 / 铁腕女主乾纲独断 / 放下释怀向阳而生……这位垂帘太后的命运,由你执笔。",
      "theme": "INFERRED: 宅斗 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "tishen_qingren",
    "storyType": "manju",
    "title_zh": "替身情人",
    "title_en": "THE SUBSTITUTE",
    "genre": "现代豪门 · 替身情人",
    "tagline": "她被迫成为豪门总裁的「替身」,演一个早已离世的白月光 · 可当她想抽身离开,那个冷心的男人却红了眼:这一次,我爱的是你,不是她",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "落魄画师夏栀,因为一张与某人七分相似的脸,被傅氏总裁傅景琛带回家,逼着扮演一个早已离世的白月光。她活在别人的影子里,穿她的衣、住她的房、被当作她来对待。可夏栀终…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "扮演的过程中,夏栀面临一次次抉择:配合还是反抗、动心还是抽离、做影子还是做自己。每一步,都让傅景琛对她的心意越来越清晰,也让她在这场情感拉锯里,找回真正的自己。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "当白月光之死的真相揭开、傅景琛为护夏栀与过去彻底决裂,八种结局,由这个不愿做替身的女子,亲手抉择。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "夏栀 (女主)",
        "functionSummary_zh": "落魄画师 · 被迫扮演总裁的白月光替身"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "傅景琛 (男主)",
        "functionSummary_zh": "傅氏集团总裁 · 困在旧情里的孤狼"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白甜 (反派 1)",
        "functionSummary_zh": "傅景琛表妹 · 觊觎傅氏家产"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "沈墨 (反派 2)",
        "functionSummary_zh": "夏栀的青梅 · 偏执掌控欲"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿福 (配角)",
        "functionSummary_zh": "傅家管家 · 看穿一切的老好人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "乐乐 (配角)",
        "functionSummary_zh": "夏栀的画室小助手 · 鬼马"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清丽脱俗 · 与那人有七分相似 · 骨子里倔强",
      "protagonist": "傅景琛 (男主)",
      "antagonist": "白甜 (反派 1); 沈墨 (反派 2)",
      "centralConflict": "她被迫成为豪门总裁的「替身」,演一个早已离世的白月光 · 可当她想抽身离开,那个冷心的男人却红了眼:这一次,我爱的是你,不是她",
      "stakes": "当白月光之死的真相揭开、傅景琛为护夏栀与过去彻底决裂,八种结局,由这个不愿做替身的女子,亲手抉择。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "tongzhuo_luchi",
    "storyType": "manju",
    "title_zh": "同桌冤家：重逢还是冤家",
    "title_en": "DESKMATE REUNION",
    "genre": "甜宠日常 · 同桌冤家",
    "tagline": "职场新人夏小鹿，第一天上班就撞见高中那个死对头同桌陆驰 · 昔日冤家成了顶头上司，旧怨一触即燃 · 可那张被珍藏十年的旧书签背后，藏着一个少年笨拙又执着的喜欢",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "reunion",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "ally",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "初入职场的夏小鹿，第一天上班就在电梯里，撞见了高中那个处处和她作对的死对头同桌陆驰。昔日的同桌冤家，如今成了上司和下属，旧怨一触即燃。可在一次次针锋相对里，夏小…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何面对这个冤家上司、怎样在斗嘴里靠近、到暗恋真相揭开后的回应抉择，每个选择都通向不同的甜蜜结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：同桌情深 / 比翼齐飞 / 一生不负 / 终成眷属 / 双向救赎 / 事业有成 / 岁月静好 / 自在相伴……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "夏小鹿 (女主)",
        "functionSummary_zh": "初入职场的新人 · 古灵精怪、不服输 · 和死对头同桌职场重逢"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆驰 (男主)",
        "functionSummary_zh": "她的顶头上司 · 毒舌高冷、外刚内柔 · 藏了她整整十年的暗恋"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "许念 (反派)",
        "functionSummary_zh": "高中校花、陆驰的旧相识 · 归来想叙旧搅局"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小胖 (配角)",
        "functionSummary_zh": "夏小鹿的高中同学兼同事 · 憨厚仗义、神助攻"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "周姐 (配角)",
        "functionSummary_zh": "夏小鹿的职场前辈 · 毒舌又暖心 · 恋爱军师"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老张 (配角)",
        "functionSummary_zh": "公司部门主管 · 睁只眼闭只眼的老好人"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "马尾元气少女 · 利落职场穿搭 · 眼神倔强又灵动 · 笑起来有股冲劲",
      "protagonist": "陆驰 (男主)",
      "antagonist": "许念 (反派)",
      "centralConflict": "职场新人夏小鹿，第一天上班就撞见高中那个死对头同桌陆驰 · 昔日冤家成了顶头上司，旧怨一触即燃 · 可那张被珍藏十年的旧书签背后，藏着一个少年笨拙又执着的喜欢",
      "stakes": "8 种结局：同桌情深 / 比翼齐飞 / 一生不负 / 终成眷属 / 双向救赎 / 事业有成 / 岁月静好 / 自在相伴……结局，由你来选。",
      "theme": "INFERRED: 甜宠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "weihun_tongju",
    "storyType": "manju",
    "title_zh": "未婚同居：契约室友变真心",
    "title_en": "ACCIDENTAL ROOMMATES",
    "genre": "甜宠日常 · 未婚同居",
    "tagline": "刚毕业的设计师苏甜，租下的梦想公寓竟被租重了 · 还多了个冷面室友——建筑界大神陆景行 · 一条胶带划开”楚河汉界“，被迫同居的两人，却在鸡飞狗跳里，把界线撕成了红线",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "ally",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "刚毕业的设计师苏甜，省吃俭用租下梦想公寓，推开门却发现房子被租重了——还住进来一个冷面男人陆景行。两份合同、一套房子，谁也不肯走，两人只好贴上一条胶带、被迫同居…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何面对大佬室友、怎样在朝夕相处里靠近、到房子要没了的去留抉择，每个选择都通向不同的甜蜜结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：未婚同居 / 比翼齐飞 / 终成眷属 / 双向救赎 / 岁月静好 / 浪迹天涯 / 事业有成 / 梦想之家……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏甜 (女主)",
        "functionSummary_zh": "刚毕业的设计师 · 古灵精怪、嘴硬心软 · 偏不向大佬服软"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆景行 (男主)",
        "functionSummary_zh": "建筑界顶尖大师 · 外冷内热、毒舌强迫症 · 唯独把她放在心上"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "林楚 (反派)",
        "functionSummary_zh": "陆景行的前女友 · 不甘心、想复合搅局"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "大壮 (配角)",
        "functionSummary_zh": "苏甜的发小兼工友 · 憨厚仗义、神助攻"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "周姐 (配角)",
        "functionSummary_zh": "苏甜的职场前辈 · 毒舌又暖心 · 恋爱军师"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "王中介 (配角)",
        "functionSummary_zh": "闯祸的中介 · 租重房子的始作俑者"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "利落短发 · 一身设计感穿搭 · 鬼马灵动 · 笑起来有股冲劲",
      "protagonist": "陆景行 (男主)",
      "antagonist": "林楚 (反派)",
      "centralConflict": "刚毕业的设计师苏甜，租下的梦想公寓竟被租重了 · 还多了个冷面室友——建筑界大神陆景行 · 一条胶带划开”楚河汉界“，被迫同居的两人，却在鸡飞狗跳里，把界线撕成了红线",
      "stakes": "8 种结局：未婚同居 / 比翼齐飞 / 终成眷属 / 双向救赎 / 岁月静好 / 浪迹天涯 / 事业有成 / 梦想之家……结局，由你来选。",
      "theme": "INFERRED: 甜宠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "wuxian_qiusheng",
    "storyType": "manju",
    "title_zh": "无限轮回:第七副本",
    "title_en": "INFINITE LOOP",
    "genre": "悬疑复仇 · 无限流",
    "tagline": "被拉入诡异\"无限游戏\"的普通女孩，在一个个死亡副本里通关求生 · 一边躲避吃人的规则怪物，一边步步揭开游戏背后操纵者的惊天阴谋",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "普通上班族沈夜，某夜被一道蓝光拉入诡异的\"无限游戏\"——在一个个死亡副本里通关，失败者，永远留在副本中。她从瑟瑟发抖的新手，一步步成长为冷静强悍的通关者，也渐渐…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在副本中求生、怎样揭开游戏真相、到最终如何对抗主宰，每一个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：摧毁游戏重获自由 / 与队友患难真情 / 成为守护者救人 / 揭穿主宰阴谋……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈夜 (女主)",
        "functionSummary_zh": "被卷入无限游戏的普通上班族 · 冷静缜密、越战越强"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆深 (男主)",
        "functionSummary_zh": "游戏里的资深玩家 · 实力强悍、暗中护她周全"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "幕后主宰 (反派)",
        "functionSummary_zh": "无限游戏的设计者 · 视玩家为棋子、玩弄人心"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "叛徒玩家 (反派)",
        "functionSummary_zh": "为求生出卖队友的玩家 · 阴狠自私"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "萌新小满 (配角)",
        "functionSummary_zh": "沈夜在副本里救下的新手玩家 · 单纯忠诚"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "系统残影 (配角)",
        "functionSummary_zh": "游戏系统中一缕觉醒的自我意识 · 暗中相助"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "利落马尾 · 一双观察入微的眼睛 · 临危不乱",
      "protagonist": "陆深 (男主)",
      "antagonist": "幕后主宰 (反派); 叛徒玩家 (反派)",
      "centralConflict": "被拉入诡异\"无限游戏\"的普通女孩，在一个个死亡副本里通关求生 · 一边躲避吃人的规则怪物，一边步步揭开游戏背后操纵者的惊天阴谋",
      "stakes": "8 种结局：摧毁游戏重获自由 / 与队友患难真情 / 成为守护者救人 / 揭穿主宰阴谋……命运由你书写。",
      "theme": "INFERRED: 悬疑 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "xianzun_xiafan",
    "storyType": "manju",
    "title_zh": "仙尊下凡",
    "title_en": "THE IMMORTAL DESCENDS",
    "genre": "古言仙侠 · 仙尊下凡",
    "tagline": "高高在上的九重天仙尊，为查三界灵气枯竭之谜下凡历练 · 却被一个市井小辣椒拐走了千年不动的道心",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "三界灵气莫名枯竭，九重天仙尊青冥亲自下凡查探。一身仙气却两袖清风的他，落难在市井小镇，被泼辣却善良的摊主林小满收留。千年不染尘埃的仙尊，第一次尝到了人间烟火，也…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "查案路上，青冥与林小满渐生情愫。可仙凡有别、富家女搅局、幕后黑手步步紧逼。青冥要在仙尊之责与凡间之情间抉择，也渐渐发现林小满身世背后，藏着惊天秘密。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "当灵气枯竭的真相揭开、青冥为护林小满耗尽仙力，仙凡之恋走到尽头，八种结局，由情之所至，亲手抉择。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "林小满 (女主)",
        "functionSummary_zh": "市井小镇泼辣摊主 · 古道热肠 · 暗藏奇缘"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "青冥 (男主)",
        "functionSummary_zh": "九重天仙尊 · 清冷无情 / 下凡后渐通人情"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "柳烟 (反派 1)",
        "functionSummary_zh": "镇上富商之女 · 觊觎青冥仙缘"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "幽冥君 (反派 2)",
        "functionSummary_zh": "偷取三界灵气的幕后黑手"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "胖虎 (配角)",
        "functionSummary_zh": "林小满隔壁屠夫 · 仗义热心"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "鹤童 (配角)",
        "functionSummary_zh": "青冥仙界小童 · 偷偷跟下凡"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "杏色短打 · 利落马尾 · 笑起来眼弯弯",
      "protagonist": "青冥 (男主)",
      "antagonist": "柳烟 (反派 1); 幽冥君 (反派 2)",
      "centralConflict": "高高在上的九重天仙尊，为查三界灵气枯竭之谜下凡历练 · 却被一个市井小辣椒拐走了千年不动的道心",
      "stakes": "当灵气枯竭的真相揭开、青冥为护林小满耗尽仙力，仙凡之恋走到尽头，八种结局，由情之所至，亲手抉择。",
      "theme": "INFERRED: 仙侠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "xiaojiao_jiangtang",
    "storyType": "manju",
    "title_zh": "小娇妻：傅总的心尖宠",
    "title_en": "THE CEO'S SWEET WIFE",
    "genre": "现代豪门 · 小娇妻",
    "tagline": "一纸娃娃亲，软萌甜品师江小糖嫁给了冷面总裁傅司年 · 本以为攻略冰山老公难如登天，谁知他书房里，竟收着她从小到大的照片 · 原来这块冰山，早为他的小娇妻，悄悄融化",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "ceo-romance",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "ally",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "一纸两家老人定下的娃娃亲，让软萌可爱的甜品师江小糖，嫁进了傅家，成了冷面总裁傅司年的小娇妻。本以为攻略这位冰山老公难如登天，江小糖却用一道道美食、一次次软萌撒娇…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何攻略冰山老公、怎样在甜蜜日常里靠近、到家族危机的共担抉择，每个选择都通向不同的甜蜜结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：心尖独宠 / 比翼双飞 / 阖家欢乐 / 双向救赎 / 平凡是福 / 事业有成 / 阖家温暖 / 自在相伴……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "江小糖 (女主)",
        "functionSummary_zh": "软萌可爱的甜品师 · 爱笑爱吃、古灵精怪 · 用美食与真心焐热冰山老公"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "傅司年 (男主)",
        "functionSummary_zh": "傅氏集团总裁 · 表面冷血禁欲、实则闷骚宠妻 · 为她求来娃娃亲、宠她到骨子里"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "苏曼 (反派)",
        "functionSummary_zh": "门当户对的白富美 · 觊觎傅司年、看不起小娇妻"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "傅母 (配角)",
        "functionSummary_zh": "傅司年的母亲 · 起初嫌她出身普通、后被她焐热"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小桃 (配角)",
        "functionSummary_zh": "江小糖的闺蜜兼甜品店搭档 · 八卦活泼、神助攻"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老管家 (配角)",
        "functionSummary_zh": "傅宅老管家 · 看着傅司年长大、乐见小娇妻治家"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "娃娃脸 · 软萌甜系穿搭 · 笑起来两个梨涡 · 像只黏人的小奶猫",
      "protagonist": "傅司年 (男主)",
      "antagonist": "苏曼 (反派)",
      "centralConflict": "一纸娃娃亲，软萌甜品师江小糖嫁给了冷面总裁傅司年 · 本以为攻略冰山老公难如登天，谁知他书房里，竟收着她从小到大的照片 · 原来这块冰山，早为他的小娇妻，悄悄融化",
      "stakes": "8 种结局：心尖独宠 / 比翼双飞 / 阖家欢乐 / 双向救赎 / 平凡是福 / 事业有成 / 阖家温暖 / 自在相伴……结局，由你来选。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "xiaoyuan_chulian",
    "storyType": "manju",
    "title_zh": "最青涩的喜欢",
    "title_en": "FIRST LOVE",
    "genre": "甜宠日常 · 校园初恋",
    "tagline": "夏蝉、白衬衫、操场边的少年 · 一场最青涩的暗恋,在阳光与晚自习的微光里,慢慢长成了刻骨铭心的初恋",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "ally",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "江夏从高一起,就偷偷喜欢上了同班的顾时雨,这份心思藏了整整两年。一次偶然,她发现顾时雨好像也在偷偷看她……一份青涩的初恋,在夏蝉、白衬衫与晚自习的微光里,悄然萌…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何捅破窗户纸、怎样面对情敌、到这段初恋如何升温,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：青涩初恋 / 携手考学 / 异地坚守 / 校园甜恋……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "江夏 (女主)",
        "functionSummary_zh": "乖巧学霸 · 暗恋同桌许多年"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾时雨 (男主)",
        "functionSummary_zh": "清隽校草 · 暗中守护着女主的暗恋"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "校花 (反派)",
        "functionSummary_zh": "倒追男主的校花 · 处处针对女主"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "体育生 (男配)",
        "functionSummary_zh": "喜欢女主的阳光体育生 · 衬托男主的醋意"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "毒舌闺蜜 (配角)",
        "functionSummary_zh": "女主的同桌死党 · 一眼看穿暗恋"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "班主任 (配角)",
        "functionSummary_zh": "同情这对小情侣的班主任"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "马尾辫校服 · 一双干净明亮的眼睛 · 笑起来眼睛弯弯",
      "protagonist": "顾时雨 (男主)",
      "antagonist": "校花 (反派)",
      "centralConflict": "夏蝉、白衬衫、操场边的少年 · 一场最青涩的暗恋,在阳光与晚自习的微光里,慢慢长成了刻骨铭心的初恋",
      "stakes": "8 种结局：青涩初恋 / 携手考学 / 异地坚守 / 校园甜恋……命运由你书写。",
      "theme": "INFERRED: 甜宠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "xingzhen_poan",
    "storyType": "manju",
    "title_zh": "暗夜追凶",
    "title_en": "NIGHT HUNTER",
    "genre": "悬疑破案 · 刑侦追凶",
    "tagline": "天才法医与铁血刑警联手 · 一桩桩离奇命案背后，牵出一个潜藏多年的连环杀手，与一段尘封的旧案真相",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "城市接连发生离奇命案，手法诡异、毫无头绪。天才女法医林夙与重案组刑警秦野联手，从一具具尸体里寻找蛛丝马迹，逐渐发现这些案子，竟指向一个潜藏多年的连环杀手，和一桩…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何切入案件、怎样追查真凶、到最终如何破局，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：真凶落网 / 患难真情 / 守护正义 / 揪出内鬼……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "林夙 (女主)",
        "functionSummary_zh": "天才女法医 · 心思缜密、过目不忘，能让尸体\"开口说话\""
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "秦野 (男主)",
        "functionSummary_zh": "重案组铁血刑警 · 雷厉风行、嫉恶如仇"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "连环凶手 (反派)",
        "functionSummary_zh": "隐藏极深的高智商杀手 · 与一桩旧案有关"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "内鬼 (反派)",
        "functionSummary_zh": "潜伏在警队内部的内应 · 为凶手通风报信"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "法医助手 (配角)",
        "functionSummary_zh": "林夙的得力助手 · 细心可靠"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老队长 (配角)",
        "functionSummary_zh": "重案组老队长 · 经验丰富、暗中指点"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "白大褂下一双冷静锐利的眼 · 干练利落 · 面对命案从容不迫",
      "protagonist": "秦野 (男主)",
      "antagonist": "连环凶手 (反派); 内鬼 (反派)",
      "centralConflict": "天才法医与铁血刑警联手 · 一桩桩离奇命案背后，牵出一个潜藏多年的连环杀手，与一段尘封的旧案真相",
      "stakes": "8 种结局：真凶落网 / 患难真情 / 守护正义 / 揪出内鬼……命运由你书写。",
      "theme": "INFERRED: 悬疑 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "xiuxian_nixi",
    "storyType": "manju",
    "title_zh": "废灵根逆天",
    "title_en": "RISE OF THE OUTCAST",
    "genre": "古言仙侠 · 修仙逆袭",
    "tagline": "天生废灵根、被退婚、被逐出宗门的少女，意外觉醒上古第一灵脉 · 从人人嘲笑的废柴，一步步逆袭成名动三界的绝世天骄",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "云栀天生被测为\"废灵根\"，遭未婚夫当众退婚、被宗门扫地出门。万念俱灰之际，她在后山误入一处上古洞府，觉醒了失传已久的混沌灵脉——从此，那个被所有人踩在脚下的废柴…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在宗门重新立足、怎样揭开灵脉与身世之谜、到选择对决仇敌的方式，每一个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：登顶仙路成就大道 / 与剑修携手双宿双飞 / 仇敌伏诛沉冤得雪 / 归隐山林逍遥自在……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "云栀 (女主)",
        "functionSummary_zh": "天生\"废灵根\"被退婚逐出宗门 / 觉醒上古混沌灵脉后惊才绝艳"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "墨寒渊 (男主)",
        "functionSummary_zh": "剑宗最年轻的剑修大能 · 唯独看出她的不凡、暗中护她"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白凝霜 (反派)",
        "functionSummary_zh": "宗门第一天才 · 嫉妒云栀的崛起、屡屡构陷打压"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "宗主之子 (反派)",
        "functionSummary_zh": "当众退婚云栀的渣修 · 见她翻身又不甘纠缠"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "灵宠墨团 (配角)",
        "functionSummary_zh": "云栀在秘境收的上古小灵兽 · 通人性、关键时刻护主"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "传承长老 (配角)",
        "functionSummary_zh": "上古灵脉认主时显现的一缕残念 · 指引云栀修行"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素青修士裙 · 眉眼清冷倔强 · 觉醒后周身流转五色灵光",
      "protagonist": "墨寒渊 (男主)",
      "antagonist": "白凝霜 (反派); 宗主之子 (反派)",
      "centralConflict": "天生废灵根、被退婚、被逐出宗门的少女，意外觉醒上古第一灵脉 · 从人人嘲笑的废柴，一步步逆袭成名动三界的绝世天骄",
      "stakes": "8 种结局：登顶仙路成就大道 / 与剑修携手双宿双飞 / 仇敌伏诛沉冤得雪 / 归隐山林逍遥自在……命运由你书写。",
      "theme": "INFERRED: 仙侠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "yeshanghai_guyan",
    "storyType": "manju",
    "title_zh": "夜上海·孤雁",
    "title_en": "LONE WILD GOOSE",
    "genre": "民国乱世 · 歌女谍影",
    "tagline": "孤岛上海，百乐门头牌歌女是地下电台的报务员 · 一夜之间，她要在叛徒供出安全屋之前，把最后的潜伏者名单送出生天",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "民国",
    "familyKey": "republican",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "孤岛上海，霓虹与铁蹄并存。百乐门夜夜笙歌，没人知道头牌宁小姐指尖敲的不是钢琴键，是发往延安的密电。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何送出名单、怎样转移情报、到是否信任旧情人程慎之，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：雁过留声 / 孤雁北归 / 玉石俱焚 / 暗度陈仓 / 折翼 / 雾散 / 误判 / 长夜未央……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈芷宁 (女主)",
        "functionSummary_zh": "地下电台报务员 · 公开身份百乐门头牌歌女"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "程慎之 (男主)",
        "functionSummary_zh": "军统行动队长 · 亦正亦邪 · 与芷宁有旧情"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "黑木一郎 (反派)",
        "functionSummary_zh": "日军特高课课长 · 冷静残忍有洁癖"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "林督察 (反派)",
        "functionSummary_zh": "巡捕房督察 · 被日方收买的叛徒"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老陈 (配角)",
        "functionSummary_zh": "钟表铺老板 · 地下交通员 · 沉默如钟"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿菊 (配角)",
        "functionSummary_zh": "百乐门更衣室小妹 · 单纯仗义的线人"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "齐耳手推波纹卷发 · 猩红唇 · 墨绿丝绒高领旗袍 · 珍珠耳坠 · 外表娇媚内心冷硬",
      "protagonist": "程慎之 (男主)",
      "antagonist": "黑木一郎 (反派); 林督察 (反派)",
      "centralConflict": "孤岛上海，百乐门头牌歌女是地下电台的报务员 · 一夜之间，她要在叛徒供出安全屋之前，把最后的潜伏者名单送出生天",
      "stakes": "8 种结局：雁过留声 / 孤雁北归 / 玉石俱焚 / 暗度陈仓 / 折翼 / 雾散 / 误判 / 长夜未央……命运由你书写。",
      "theme": "INFERRED: 民国 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "yinhun_zongcai",
    "storyType": "manju",
    "title_zh": "隐婚总裁宠妻入骨",
    "title_en": "SECRET MARRIAGE",
    "genre": "现代豪门 · 隐婚甜宠",
    "tagline": "一纸隐婚契约,她嫁给了传闻冷血无情的总裁 · 本以为是各取所需,却不料这个男人,把对她的宠爱,藏进了每一个不为人知的细节里",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "ceo-romance",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "为偿还家族债务,设计师温宁与传闻冷血无情的商界霸主霍景琛,签下了一纸隐婚契约。本以为只是各取所需的交易,可婚后她却发现,这个外人眼中冷酷的男人,竟把对她的宠爱,…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何面对这段契约婚姻、怎样应对白月光的挑拨、到这段感情如何升温,每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：隐婚转真爱 / 携手事业 / 甜蜜公开 / 揭穿白月光……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "温宁 (女主)",
        "functionSummary_zh": "为还家族债务签下隐婚契约的设计师 · 独立坚韧"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "霍景琛 (男主)",
        "functionSummary_zh": "传闻冷血的商界霸主 · 实则把妻子宠到骨子里"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白月光 (反派)",
        "functionSummary_zh": "霍景琛的青梅 · 处处挑拨、想拆散两人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "恶毒小姑 (反派)",
        "functionSummary_zh": "霍家的小姑 · 看不起女主出身"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "闺蜜 (配角)",
        "functionSummary_zh": "女主的死党 · 一路力挺"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "霍家爷爷 (配角)",
        "functionSummary_zh": "霍景琛的爷爷 · 一眼相中女主"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清丽知性的职业女性 · 一双温柔却有主见的眼睛",
      "protagonist": "霍景琛 (男主)",
      "antagonist": "白月光 (反派); 恶毒小姑 (反派)",
      "centralConflict": "一纸隐婚契约,她嫁给了传闻冷血无情的总裁 · 本以为是各取所需,却不料这个男人,把对她的宠爱,藏进了每一个不为人知的细节里",
      "stakes": "8 种结局：隐婚转真爱 / 携手事业 / 甜蜜公开 / 揭穿白月光……命运由你书写。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "yipin_branch",
    "storyType": "manju",
    "title_zh": "一品诰命",
    "title_en": "THE GENERAL'S WIFE",
    "genre": "穿越霸总 · 分支版",
    "tagline": "现代女总裁穿越成北凉国战神弃妇 · 4 个分支点 · 8 种结局 · 你的每个选择都改写命运",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "现代女总裁苏念念穿越成北凉国战神傅沉舟刚被休的弃妇。她当众撕休书反扣男主——「要离，也是我休你。」",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从立足之道、情感考验、对决之策到终局抉择，4 个关键节点，每个选择都通向不同的故事走向。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种截然不同的结局：封诰命、回现代、归隐江湖、登顶权力、重生复仇、揭穿天命……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏念念 (女主)",
        "functionSummary_zh": "穿越前: 现代凯撒集团 28 岁女总裁 / 穿越后: 镇国将军府弃妇"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "傅沉舟 (男主)",
        "functionSummary_zh": "北凉国镇国大将军 · 27 岁 · 三朝战神"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "柳如烟 (反派 1)",
        "functionSummary_zh": "傅沉舟青梅 · 太傅嫡女 · 替身白月光"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "苏婉柔 (反派 2)",
        "functionSummary_zh": "原身嫡妹 · 当朝侧妃 · 真凶"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "沈砚 (配角)",
        "functionSummary_zh": "将军府幕僚 · 苏念念的左膀右臂"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小翠 (配角)",
        "functionSummary_zh": "将军府贴身丫鬟 · 死忠"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "深红嫁衣 · 红绫缠腕 · 凤眸如焰 · 笑起来嘴角带刀",
      "protagonist": "傅沉舟 (男主)",
      "antagonist": "柳如烟 (反派 1); 苏婉柔 (反派 2)",
      "centralConflict": "现代女总裁穿越成北凉国战神弃妇 · 4 个分支点 · 8 种结局 · 你的每个选择都改写命运",
      "stakes": "8 种截然不同的结局：封诰命、回现代、归隐江湖、登顶权力、重生复仇、揭穿天命……命运由你书写。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "yisheng_tiancai",
    "storyType": "manju",
    "title_zh": "天才医生",
    "title_en": "THE GENIUS DOCTOR",
    "genre": "现代豪门 · 天才医生",
    "tagline": "一双能起死回生的妙手,一个被全院排挤的天才女医 · 当她在手术台上力挽狂澜,那个高高在上的院长继承人,终于看清了她的光",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "苏野,一个有着起死回生妙手的天才外科医生,却因不懂逢迎、屡屡揭穿医疗黑幕,被全院排挤,贬到最冷清的科室。所有人都等着看这个「刺头」的笑话。可当一台所有名医都束手…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "崭露头角后,苏野面临一次次抉择:是揭黑幕还是保自身、是接受霍珩还是专注医术、是妥协还是硬刚。每一步,都让她离医道之巅更近,也让那个清冷的男人,一步步沦陷。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "当医疗黑幕的真相揭开、霍珩为护她不惜与资本决裂,八种结局,由这位仁心仁术的天才医生,亲手抉择。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏野 (女主)",
        "functionSummary_zh": "天才外科医生 · 医术封神却遭排挤"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "霍珩 (男主)",
        "functionSummary_zh": "医疗集团继承人兼名医 · 外冷内热"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "林雅 (反派 1)",
        "functionSummary_zh": "外科主任 · 嫉妒苏野天赋"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "赵国栋 (反派 2)",
        "functionSummary_zh": "医药商人 · 草菅人命的黑心资本"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小护士甜甜 (配角)",
        "functionSummary_zh": "苏野的小迷妹 · 唯一的盟友"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "陈老 (配角)",
        "functionSummary_zh": "医院德高望重的老院长 · 慧眼识珠"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "利落短发 · 手术服 · 眼神沉稳如山",
      "protagonist": "霍珩 (男主)",
      "antagonist": "林雅 (反派 1); 赵国栋 (反派 2)",
      "centralConflict": "一双能起死回生的妙手,一个被全院排挤的天才女医 · 当她在手术台上力挽狂澜,那个高高在上的院长继承人,终于看清了她的光",
      "stakes": "当医疗黑幕的真相揭开、霍珩为护她不惜与资本决裂,八种结局,由这位仁心仁术的天才医生,亲手抉择。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "yixiang_suzhi",
    "storyType": "manju",
    "title_zh": "医香乱世：乱世女医",
    "title_en": "THE HEALER IN WAR",
    "genre": "民国乱世 · 医香乱世",
    "tagline": "出身中医世家的苏芷，在战火纷飞的乱世，撑起父亲留下的医馆 · 一位身负重任的负伤军官，被秘密送进医馆 · 妙手回春的她，要在缺医少药的乱世里，护一城苍生、守一段深情",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "民国",
    "familyKey": "republican",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "出身中医世家的苏芷，在战火纷飞的乱世，撑起了父亲留下的医馆，缺医少药却仁心不改。一个深夜，一位身负重伤的神秘军官顾承霖被秘密送进医馆，苏芷一双妙手，将他从鬼门关…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何悬壶济世、怎样在并肩中靠近、到医馆被毁的存亡抉择，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：医香乱世 / 仁医典范 / 薪火相传 / 岁月静好 / 双向救赎 / 医典传世 / 大医精诚 / 自在相伴……结局，由你来选。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏芷 (女主)",
        "functionSummary_zh": "中医世家之女 · 医术精湛、仁心仁术 · 乱世里独撑医馆、悬壶济世"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾承霖 (男主)",
        "functionSummary_zh": "身负重任的军官 · 铁血而重情义 · 被她救回一命、为她筹药护周全"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白小姐 (反派)",
        "functionSummary_zh": "名门千金 · 对顾承霖芳心暗许、屡屡刁难苏芷"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "赵管事 (反派)",
        "functionSummary_zh": "囤积药材的奸商 · 哄抬药价、发国难财"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿莲 (配角)",
        "functionSummary_zh": "苏芷的徒弟兼帮手 · 勤勉忠厚、视她如母"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老周 (配角)",
        "functionSummary_zh": "医馆的老药工 · 跟随苏家多年、忠心耿耿"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清丽端庄 · 素色长衫加药囊 · 一双沉静温柔的眼 · 施针时专注笃定",
      "protagonist": "顾承霖 (男主)",
      "antagonist": "白小姐 (反派); 赵管事 (反派)",
      "centralConflict": "出身中医世家的苏芷，在战火纷飞的乱世，撑起父亲留下的医馆 · 一位身负重任的负伤军官，被秘密送进医馆 · 妙手回春的她，要在缺医少药的乱世里，护一城苍生、守一段深情",
      "stakes": "8 种结局：医香乱世 / 仁医典范 / 薪火相传 / 岁月静好 / 双向救赎 / 医典传世 / 大医精诚 / 自在相伴……结局，由你来选。",
      "theme": "INFERRED: 民国 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "yiyu_heyuan",
    "storyType": "manju",
    "title_zh": "和亲王妃不好惹",
    "title_en": "THE ENVOY BRIDE",
    "genre": "穿越 · 异域和亲",
    "tagline": "现代金牌谈判专家穿成被迫远嫁西域的中原郡主 · 嫁给桀骜的西域之王 · 她要以三寸不烂之舌与商贸奇谋，在异邦立足、化解两国战祸",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "现代金牌谈判专家苏鸢一觉醒来，竟成了被迫远嫁西域、用来换取和平的中原郡主。等待她的，是桀骜冷漠的西域之王、虎视眈眈的王弟，与一触即发的两国战火。她决定，用现代的…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在异域立足、怎样化解两国危机、到选择何种方式破局，每个抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：执掌王庭母仪西域 / 与西域王相守 / 两国通好 / 携手归隐 / 双向救赎 / 兴商富民 / 平定叛乱 / 魂归现代……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏鸢 (女主)",
        "functionSummary_zh": "穿越前: 现代金牌谈判专家 / 穿越后: 远嫁西域的中原郡主"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "阿史那隼 (男主)",
        "functionSummary_zh": "桀骜的西域之王 · 起初视她为人质，渐为她折服"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "阿史那狼 (反派)",
        "functionSummary_zh": "西域王弟 · 觊觎王位、主战嗜杀"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "钱审 (反派)",
        "functionSummary_zh": "中原随行使臣 · 暗通敌国、误国求荣"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿罗 (配角)",
        "functionSummary_zh": "西域侍女 · 头一个真心待苏鸢的人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "巴图 (配角)",
        "functionSummary_zh": "西域老相 · 老成持重、暗中扶持"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "中原宫装混着西域风情 · 笑意盈盈 · 一双眼睛里全是机锋",
      "protagonist": "阿史那隼 (男主)",
      "antagonist": "阿史那狼 (反派); 钱审 (反派)",
      "centralConflict": "现代金牌谈判专家穿成被迫远嫁西域的中原郡主 · 嫁给桀骜的西域之王 · 她要以三寸不烂之舌与商贸奇谋，在异邦立足、化解两国战祸",
      "stakes": "8 种结局：执掌王庭母仪西域 / 与西域王相守 / 两国通好 / 携手归隐 / 双向救赎 / 兴商富民 / 平定叛乱 / 魂归现代……命运由你书写。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "yujie_zongcai",
    "storyType": "manju",
    "title_zh": "御姐总裁",
    "title_en": "THE LADY BOSS",
    "genre": "现代豪门 · 御姐总裁",
    "tagline": "30岁雷厉风行的女总裁,人前是商界女王,人后被小奶狗总裁缠得没脾气 · 一场势均力敌的爱情,谁先心动谁就输",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "云氏集团女总裁,30岁,雷厉风行,商场上无人敢撄其锋,是所有人眼里的商界女王。可这位铁娘子怎么也想不到,自己有朝一日会被一个比她小三岁、表面禁欲实则黏人的小奶狗…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "博弈之中,女总裁面临一次次抉择:是公私分明还是顺势而为、是强势主导还是偶尔示弱、是对手还是爱人。每一步,都让这场较量更精彩,也让两颗骄傲的心,越靠越近。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "当商战阴谋揭开、顾时年为护她不惜押上全部身家,八种结局,由这位独当一面的女总裁,亲手抉择。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "云笙 (女主)",
        "functionSummary_zh": "云氏集团女总裁 · 30岁 · 商界铁娘子"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾时年 (男主)",
        "functionSummary_zh": "新锐科技总裁 · 27岁 · 表面禁欲实则黏人"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "安琪 (反派 1)",
        "functionSummary_zh": "云氏副总 · 觊觎总裁之位"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "钱进 (反派 2)",
        "functionSummary_zh": "商业对手 · 不择手段"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小林 (配角)",
        "functionSummary_zh": "云氏的金牌秘书 · 八卦担当"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老陈 (配角)",
        "functionSummary_zh": "云氏元老 · 亦师亦友"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "干练御姐 · 红唇高跟 · 气场两米八",
      "protagonist": "顾时年 (男主)",
      "antagonist": "安琪 (反派 1); 钱进 (反派 2)",
      "centralConflict": "30岁雷厉风行的女总裁,人前是商界女王,人后被小奶狗总裁缠得没脾气 · 一场势均力敌的爱情,谁先心动谁就输",
      "stakes": "当商战阴谋揭开、顾时年为护她不惜押上全部身家,八种结局,由这位独当一面的女总裁,亲手抉择。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "zhaidou_chongsheng",
    "storyType": "manju",
    "title_zh": "宅斗复仇",
    "title_en": "REBORN IN THE MANOR",
    "genre": "重生复仇 · 宅斗复仇",
    "tagline": "嫁入侯府却被继婆婆与妯娌联手构陷成“妒妇”、害得小产失子郁郁而终的宗妇 · 重生回到新婚入府那日，她要步步为营，护住子嗣、洗清冤屈、扳倒蛇蝎",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "嫁入靖远侯府的沈黛，被继婆婆周氏与妯娌柳氏联手构陷成“善妒无德”，又害她小产失子，最终郁郁而终。再睁眼，她重生回到新婚入府那日——这一世，她带着两世记忆，要把命…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在侯府立足、怎样抢先护住子嗣、到选择哪种方式昭雪冤屈、惩治恶人，每一个关键抉择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种截然不同的结局：执掌侯府当家主母 / 与悔悟的世子一生一世 / 继婆婆妯娌受到惩处 / 带妆和离归隐 / 双向救赎彼此治愈 / 以德服人贤名远扬……命运由…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈黛 (女主)",
        "functionSummary_zh": "重生前: 被构陷小产失子、郁郁而终的世子妃 / 重生后: 回到新婚入府那日"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "裴砚 (男主)",
        "functionSummary_zh": "靖远侯世子 · 上一世误信谗言冷落她、悔恨终生，这一世护她周全"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "周氏 (反派)",
        "functionSummary_zh": "继婆婆 · 掌家二夫人 · 上一世构陷她“妒妇”、暗害子嗣的主谋"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "柳氏 (反派)",
        "functionSummary_zh": "二房妯娌 · 与继婆婆联手谋夺家业"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "春嬷嬷 (配角)",
        "functionSummary_zh": "陪嫁嬷嬷 · 两世都对她忠心不二"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老侯爷 (配角)",
        "functionSummary_zh": "公爹 · 明事理、重宗法 · 终为她主持公道"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素雅宗妇装扮下藏着主母之姿 · 一双沉静却锋利的眼 · 鬓边一支白玉簪",
      "protagonist": "裴砚 (男主)",
      "antagonist": "周氏 (反派); 柳氏 (反派)",
      "centralConflict": "嫁入侯府却被继婆婆与妯娌联手构陷成“妒妇”、害得小产失子郁郁而终的宗妇 · 重生回到新婚入府那日，她要步步为营，护住子嗣、洗清冤屈、扳倒蛇蝎",
      "stakes": "8 种截然不同的结局：执掌侯府当家主母 / 与悔悟的世子一生一世 / 继婆婆妯娌受到惩处 / 带妆和离归隐 / 双向救赎彼此治愈 / 以德服人贤名远扬……命运由你的选择书写。",
      "theme": "INFERRED: 重生 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 重生 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "zhedan_zhenqinsong",
    "storyType": "manju",
    "title_zh": "这单朕亲自送",
    "title_en": "THE EMPEROR DELIVERS",
    "genre": "穿越爽剧 · 古装喜剧",
    "tagline": "2026 骑手一道天雷穿成开国皇帝 · 用打工/平台思维治国：政务超时扣俸、百姓差评罢官、边关粮草抢单制 · 4 个分支点 · 3 种结局",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 54 paths → 3 endings",
      "choicePointCount": 4,
      "endingCount": 3,
      "totalPaths": 54,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 5,
    "characterCount": 5,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "protagonist",
      "protagonist",
      "love-interest",
      "antagonist",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "2026 年暴雨夜，金牌外卖骑手朱三多冒雨送最后一单，一道天雷把他劈进了大苍开国太祖苍高祖的身体里。龙袍加身、满朝跪拜，他却以为自己在玩沉浸式剧本杀。掂着玉玺一…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从初登大宝如何亮獠牙立威、先帝身世疑云怎么查、到柳党逼宫这一仗怎么打——4 个分支点，每个选择都通向不同的爽点与打法。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "3 种结局：帝御同心并肩治国 / 微服人间归隐市井 / 一骑双城白日理朝凌晨送单（含下季钩子）。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "朱三多 (男主·骑手本体)",
        "functionSummary_zh": "27岁金牌外卖骑手 · 机灵、嘴碎、认死理'没有送不到的单' · 穿越前的现代形象"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "苍高祖 (男主·龙袍帝身)",
        "functionSummary_zh": "朱三多穿越后的开国太祖之身 · 同一张脸同一双机灵眼 · 用打工/平台思维治国的骑手皇帝"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏御史 (女主·女监察御史)",
        "functionSummary_zh": "28岁女监察御史 · 全朝唯一跟得上皇帝脑回路的人 · 精明、飒、藏笑 · 父亲因先帝旧案被灭口"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "柳丞相 (大反派·开国权相)",
        "functionSummary_zh": "55岁开国第一老狐狸 · 毒害先帝、通敌北境、欲行废立架空新君的隐形黑手"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小福子 (配角·贴身太监)",
        "functionSummary_zh": "贴身太监·人工客服 · 从惊恐到真香 · 专把皇帝的现代黑话翻译成圣旨"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "短寸头，精瘦，眉眼机灵。虚构品牌'闪送'藏青+明黄拼色骑手服、同色头盔、方形保温箱。左手腕一只运动手环（贯穿全片的一致性锚点）",
      "protagonist": "朱三多 (男主·骑手本体); 苍高祖 (男主·龙袍帝身)",
      "antagonist": "柳丞相 (大反派·开国权相)",
      "centralConflict": "2026 骑手一道天雷穿成开国皇帝 · 用打工/平台思维治国：政务超时扣俸、百姓差评罢官、边关粮草抢单制 · 4 个分支点 · 3 种结局",
      "stakes": "3 种结局：帝御同心并肩治国 / 微服人间归隐市井 / 一骑双城白日理朝凌晨送单（含下季钩子）。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 3 endings — framework expects 1 resolution, explodes to 3 variants",
    "allGaps": [
      "story has 3 endings — framework expects 1 resolution, explodes to 3 variants",
      "tree has 54 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|5|4cp-3e-54p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "zhenjia_qianjin",
    "storyType": "manju",
    "title_zh": "真假千金",
    "title_en": "THE REAL HEIRESS",
    "genre": "现代豪门 · 真假千金",
    "tagline": "被抱错的真千金回归豪门,却处处被假千金打压排挤 · 她不争不抢,凭真本事打脸所有人,活成了无可替代的传奇",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "一场抱错认亲，让在乡下长大的真千金沈知微回归豪门,而占着她位置长大的假千金林佳佳,却处处打压排挤她。沈知微不争不抢,凭着真才实学与隐藏的本事,一步步活成了无可替…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何面对豪门冷遇、怎样应对假千金、到选择立足的方式，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：真千金归位 / 与陆庭深携手 / 事业封神 / 揭穿假千金……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈知微 (女主)",
        "functionSummary_zh": "被抱错养在乡下的真千金 · 低调内敛、深藏不露"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆庭深 (男主)",
        "functionSummary_zh": "商界巨子 · 一眼识出她的不凡、暗中相护"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "林佳佳 (反派)",
        "functionSummary_zh": "占了真千金位置的假千金 · 善妒心机"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "养母 (反派)",
        "functionSummary_zh": "偏心假千金的沈家主母 · 势利刻薄"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "生父 (配角)",
        "functionSummary_zh": "沈家家主 · 后来识得真千金的好"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "好友苏苏 (配角)",
        "functionSummary_zh": "女主的闺蜜 · 一路力挺她"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "朴素清丽 · 一双澄澈通透的眼睛 · 不施粉黛却气质出尘",
      "protagonist": "陆庭深 (男主)",
      "antagonist": "林佳佳 (反派); 养母 (反派)",
      "centralConflict": "被抱错的真千金回归豪门,却处处被假千金打压排挤 · 她不争不抢,凭真本事打脸所有人,活成了无可替代的传奇",
      "stakes": "8 种结局：真千金归位 / 与陆庭深携手 / 事业封神 / 揭穿假千金……命运由你书写。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "zhichang_zuoxi",
    "storyType": "manju",
    "title_zh": "假戏成真，总监他动心了",
    "title_en": "OFFICE SWEETHEART",
    "genre": "甜宠日常 · 职场恋爱",
    "tagline": "雷厉风行的金牌策划 × 高冷毒舌的创意总监 · 一纸「假扮情侣」的协议，把两个职场强人锁进同一场心动 · 假戏，怎么就，做成了真的",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "金牌策划乔安被家里逼着相亲、又被同事造谣「想攀高枝」；高冷总监顾屿则被大客户千金林菲死缠、家里催着联姻。两个焦头烂额的职场强人，一拍即合，签下一纸「假扮情侣」的…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何拿捏假扮情侣的分寸、怎样在并肩工作中假戏真做、到如何应对情敌搅局与协议曝光，每一个选择都通向不同的甜蜜结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种甜宠结局：携手登顶事业爱情双收 / 高调官宣甜蜜恋情 / 闪婚领证 / 辞职一起创业 / 双向救赎彼此治愈 / 婚后高调宠妻 / 击退情敌真相大白 / 回…",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "乔安 (女主)",
        "functionSummary_zh": "广告公司金牌策划 · 雷厉风行、嘴甜心硬 · 业务能力一流，唯独躲不开总监的「专宠」"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "顾屿 (男主)",
        "functionSummary_zh": "创意总监兼合伙人 · 对外高冷毒舌、油盐不进 · 唯独对她，破例到没了原则"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "林菲 (反派)",
        "functionSummary_zh": "大客户千金 · 觊觎顾屿、处处给乔安使绊子"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "赵奕 (反派)",
        "functionSummary_zh": "同部门的抢功同事 · 惯于摘桃子、背后捅刀"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "苏糖 (配角)",
        "functionSummary_zh": "乔安的闺蜜兼同事 · 头号嗑CP选手"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老陈 (配角)",
        "functionSummary_zh": "创意部老前辈 · 暗中护着乔安、撮合两人"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "利落的职业西装 · 干练短发 · 一双笑起来会弯的眼睛 · 提案时气场全开",
      "protagonist": "顾屿 (男主)",
      "antagonist": "林菲 (反派); 赵奕 (反派)",
      "centralConflict": "雷厉风行的金牌策划 × 高冷毒舌的创意总监 · 一纸「假扮情侣」的协议，把两个职场强人锁进同一场心动 · 假戏，怎么就，做成了真的",
      "stakes": "8 种甜宠结局：携手登顶事业爱情双收 / 高调官宣甜蜜恋情 / 闪婚领证 / 辞职一起创业 / 双向救赎彼此治愈 / 婚后高调宠妻 / 击退情敌真相大白 / 回归平淡细水长流……结局，由你来选。",
      "theme": "INFERRED: 甜宠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "zhizi_huangnv",
    "storyType": "manju",
    "title_zh": "质子皇女",
    "title_en": "THE HOSTAGE PRINCESS",
    "genre": "穿越 · 质子皇女",
    "tagline": "被父皇当弃子、送去敌国为质的亡国公主 · 在吃人的敌国宫廷里步步为营 · 从任人欺凌的质子，到搅动两国风云的棋手",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "南楚九公主姜微，被父皇与继后当作弃子，送往强敌北燕为质。质子营里受尽欺凌、命如草芥。穿越而来的金牌谈判专家姜微，却不肯做任人宰割的弃子——这敌国的棋局，她偏要落…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何在敌国立足、怎样周旋于两国之间、到如何掀翻磋磨她的强敌，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：凤归故国 / 留燕为后 / 两国止戈 / 弃子翻身 / 双向救赎 / 凤主格局 / 太子伏诛 / 逍遥江湖……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "姜微 (女主)",
        "functionSummary_zh": "穿越前: 现代金牌谈判专家 / 穿越后: 被送去北燕为质的南楚九公主"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "慕容璟 (男主)",
        "functionSummary_zh": "北燕摄政王 · 奉命看管质子，却为她一再破例"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "慕容烈 (反派)",
        "functionSummary_zh": "北燕太子 · 残暴乖戾，以折磨质子为乐"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "沈太后 (反派)",
        "functionSummary_zh": "南楚继后 · 当初把她送去当弃子，还要斩草除根"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "青鸾 (配角)",
        "functionSummary_zh": "随质的贴身侍女 · 唯一陪她漂泊敌国的人"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "周内监 (配角)",
        "functionSummary_zh": "质子营的老内监 · 暗中给她引路"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "素色质子服下挺直的脊背 · 一双沉静锐利的眼 · 柔弱皮囊藏着杀伐决断",
      "protagonist": "慕容璟 (男主)",
      "antagonist": "慕容烈 (反派); 沈太后 (反派)",
      "centralConflict": "被父皇当弃子、送去敌国为质的亡国公主 · 在吃人的敌国宫廷里步步为营 · 从任人欺凌的质子，到搅动两国风云的棋手",
      "stakes": "8 种结局：凤归故国 / 留燕为后 / 两国止戈 / 弃子翻身 / 双向救赎 / 凤主格局 / 太子伏诛 / 逍遥江湖……命运由你书写。",
      "theme": "INFERRED: 穿越 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)",
      "no mentor archetype — 穿越 family expects one (but rebirth-revenge is structurally self-mentored)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "zhuanshi_chongfeng",
    "storyType": "manju",
    "title_zh": "转世重逢",
    "title_en": "REBORN TO FIND YOU",
    "genre": "古言仙侠 · 转世重逢",
    "tagline": "三生石上刻着她的名字 · 仙界战神苦等千年，只为与转世为凡人的爱人重逢；可她忘了前世，他却记得每一个细节",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "antagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "凡间小镇，药铺少女白薇总做着同一个梦——梦里有个黑甲男子，唤她的名字。她不知道，自己是仙界陨落的第一神女转世，而那个在梦里千百次出现的男子，是苦守三世、寻她千年…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "墨渊以凡人身份接近白薇，唤醒她沉睡的记忆。但前世的恩怨、师妹的算计、魔尊的复仇，都在阻挠这场跨越三生的重逢。白薇要在一次次抉择中，找回自己，也找回那段被遗忘的深…",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "当前世真相尽数揭开、墨渊为护白薇魂飞魄散之际，三生石前，八种结局由她抉择——是续写仙缘，还是斩断情丝？",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "白薇 (女主)",
        "functionSummary_zh": "凡间药铺少女 / 前世为仙界第一神女 · 转世失忆"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "墨渊 (男主)",
        "functionSummary_zh": "仙界战神 · 苦守三世的痴情上神"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "苏锦 (反派 1)",
        "functionSummary_zh": "白薇前世师妹 · 觊觎墨渊千年"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "魔尊 (反派 2)",
        "functionSummary_zh": "与墨渊有血海深仇的魔界之主"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "阿术 (配角)",
        "functionSummary_zh": "白薇药铺学徒 · 古灵精怪"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "青鸾 (配角)",
        "functionSummary_zh": "墨渊坐骑灵鸟 · 化形侍女"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "藕荷衣裙 · 眉眼温软 · 笑起来有梨涡",
      "protagonist": "墨渊 (男主)",
      "antagonist": "苏锦 (反派 1); 魔尊 (反派 2)",
      "centralConflict": "三生石上刻着她的名字 · 仙界战神苦等千年，只为与转世为凡人的爱人重逢；可她忘了前世，他却记得每一个细节",
      "stakes": "当前世真相尽数揭开、墨渊为护白薇魂飞魄散之际，三生石前，八种结局由她抉择——是续写仙缘，还是斩断情丝？",
      "theme": "INFERRED: 仙侠 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  },
  {
    "id": "zhuiqi_huozang",
    "storyType": "manju",
    "title_zh": "迟来的深情",
    "title_en": "TOO LATE TO LOVE",
    "genre": "现代豪门 · 追妻火葬场",
    "tagline": "他冷落她三年、为白月光伤她至深 · 直到她心灰意冷转身离开，他才惊觉，原来早已爱她入骨——可她，再也不会回头了",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "general",
    "branchingInfo": {
      "type": "rigid-tree",
      "detail": "4 choice points × N options → 144 paths → 8 endings",
      "choicePointCount": 4,
      "endingCount": 8,
      "totalPaths": 144,
      "segmentCount": 12
    },
    "stageCount": 3,
    "archetypeCount": 6,
    "characterCount": 6,
    "stageRoles": [
      "setup",
      "rising-action",
      "resolution"
    ],
    "archetypeKeys": [
      "love-interest",
      "protagonist",
      "antagonist",
      "ally",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-起",
        "role": "setup",
        "label_zh": "起",
        "triggerConstraint_zh": "许暖嫁给陆沉舟三年，掏心掏肺，却换来他为白月光一次次的冷落与伤害。心如死灰的她，终于决定签下离婚协议，转身离开。可当她真的走了，陆沉舟才惊觉，自己早已爱她入骨。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-分支",
        "role": "rising-action",
        "label_zh": "分支",
        "triggerConstraint_zh": "从如何决绝离开、怎样开始新生活、到面对男主的疯狂追悔，每个选择都通向不同的结局。",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-结局",
        "role": "resolution",
        "label_zh": "结局",
        "triggerConstraint_zh": "8 种结局：破镜重圆 / 转身遇真爱 / 事业封神 / 自由人生……命运由你书写。",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "love-interest",
        "label_zh": "许暖 (女主)",
        "functionSummary_zh": "被丈夫冷落三年、心灰意冷的妻子 · 决心为自己而活"
      },
      {
        "archetypeKey": "protagonist",
        "label_zh": "陆沉舟 (男主)",
        "functionSummary_zh": "霸道总裁 · 错把深情当理所当然，失去后追悔莫及"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "白心言 (反派)",
        "functionSummary_zh": "男主的白月光 · 心机绿茶、刻意挑拨"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "顾景行 (男配)",
        "functionSummary_zh": "温柔的钻石单身汉 · 真心欣赏女主"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "闺蜜 (配角)",
        "functionSummary_zh": "女主死党 · 一路力挺她重新开始"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "婆婆 (配角)",
        "functionSummary_zh": "男主母亲 · 后悔错怪了好儿媳"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "清丽温婉 · 一双盛满失望的眼睛 · 离开后愈发明艳动人",
      "protagonist": "陆沉舟 (男主)",
      "antagonist": "白心言 (反派)",
      "centralConflict": "他冷落她三年、为白月光伤她至深 · 直到她心灰意冷转身离开，他才惊觉，原来早已爱她入骨——可她，再也不会回头了",
      "stakes": "8 种结局：破镜重圆 / 转身遇真爱 / 事业封神 / 自由人生……命运由你书写。",
      "theme": "INFERRED: 豪门 family thematic pattern"
    },
    "antagonistType": "character",
    "climaxMode": "per-path",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
    "allGaps": [
      "story has 8 endings — framework expects 1 resolution, explodes to 8 variants",
      "tree has 144 reachable paths but framework counts only 3 stages — branching depth invisible at synopsis level",
      "no explicit climax stage — framework's climax slot is collapsed into 'resolution' (path-dependent for branching dramas)"
    ],
    "patternFingerprint": "rigid-tree|3|6|4cp-8e-144p",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 8
  }
] as const

export const MANJU_VARIANTS: VariantInstance[] = [
  {
    "variantId": "baowen_jinshu#ending-1",
    "storyId": "baowen_jinshu",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "豪门暗战",
    "variantResolution_zh": "豪门暗战"
  },
  {
    "variantId": "baowen_jinshu#ending-2",
    "storyId": "baowen_jinshu",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "当家主母",
    "variantResolution_zh": "当家主母"
  },
  {
    "variantId": "baowen_jinshu#ending-3",
    "storyId": "baowen_jinshu",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "比翼双飞",
    "variantResolution_zh": "比翼双飞"
  },
  {
    "variantId": "baowen_jinshu#ending-4",
    "storyId": "baowen_jinshu",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "岁月静好",
    "variantResolution_zh": "岁月静好"
  },
  {
    "variantId": "baowen_jinshu#ending-5",
    "storyId": "baowen_jinshu",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "baowen_jinshu#ending-6",
    "storyId": "baowen_jinshu",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "两家同荣",
    "variantResolution_zh": "两家同荣"
  },
  {
    "variantId": "baowen_jinshu#ending-7",
    "storyId": "baowen_jinshu",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "德泽一方",
    "variantResolution_zh": "德泽一方"
  },
  {
    "variantId": "baowen_jinshu#ending-8",
    "storyId": "baowen_jinshu",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "自在相伴……结局",
    "variantResolution_zh": "自在相伴……结局"
  },
  {
    "variantId": "bazong_nuelian#ending-1",
    "storyId": "bazong_nuelian",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "相爱相伤",
    "variantResolution_zh": "相爱相伤"
  },
  {
    "variantId": "bazong_nuelian#ending-2",
    "storyId": "bazong_nuelian",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "救赎彼此",
    "variantResolution_zh": "救赎彼此"
  },
  {
    "variantId": "bazong_nuelian#ending-3",
    "storyId": "bazong_nuelian",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "决绝离开",
    "variantResolution_zh": "决绝离开"
  },
  {
    "variantId": "bazong_nuelian#ending-4",
    "storyId": "bazong_nuelian",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "撕碎心机……命运由你书写",
    "variantResolution_zh": "撕碎心机……命运由你书写"
  },
  {
    "variantId": "bazong_nuelian#ending-5",
    "storyId": "bazong_nuelian",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "bazong_nuelian#ending-6",
    "storyId": "bazong_nuelian",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "bazong_nuelian#ending-7",
    "storyId": "bazong_nuelian",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "bazong_nuelian#ending-8",
    "storyId": "bazong_nuelian",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "cefei_shangwei#ending-1",
    "storyId": "cefei_shangwei",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "母仪王府贤名远播",
    "variantResolution_zh": "母仪王府贤名远播"
  },
  {
    "variantId": "cefei_shangwei#ending-2",
    "storyId": "cefei_shangwei",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "夫妻情深白首同心",
    "variantResolution_zh": "夫妻情深白首同心"
  },
  {
    "variantId": "cefei_shangwei#ending-3",
    "storyId": "cefei_shangwei",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "严惩仇敌恶有恶报",
    "variantResolution_zh": "严惩仇敌恶有恶报"
  },
  {
    "variantId": "cefei_shangwei#ending-4",
    "storyId": "cefei_shangwei",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "执掌中馈当家主母",
    "variantResolution_zh": "执掌中馈当家主母"
  },
  {
    "variantId": "cefei_shangwei#ending-5",
    "storyId": "cefei_shangwei",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "母凭子贵麟儿承业",
    "variantResolution_zh": "母凭子贵麟儿承业"
  },
  {
    "variantId": "cefei_shangwei#ending-6",
    "storyId": "cefei_shangwei",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "看淡浮华守一份安宁",
    "variantResolution_zh": "看淡浮华守一份安宁"
  },
  {
    "variantId": "cefei_shangwei#ending-7",
    "storyId": "cefei_shangwei",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "铁腕主母权倾后宅",
    "variantResolution_zh": "铁腕主母权倾后宅"
  },
  {
    "variantId": "cefei_shangwei#ending-8",
    "storyId": "cefei_shangwei",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "放下释怀向阳新生……这场侧妃上位的步步登顶",
    "variantResolution_zh": "放下释怀向阳新生……这场侧妃上位的步步登顶"
  },
  {
    "variantId": "chabie_cuowei#ending-1",
    "storyId": "chabie_cuowei",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "真爱上位",
    "variantResolution_zh": "真爱上位"
  },
  {
    "variantId": "chabie_cuowei#ending-2",
    "storyId": "chabie_cuowei",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "官宣正名",
    "variantResolution_zh": "官宣正名"
  },
  {
    "variantId": "chabie_cuowei#ending-3",
    "storyId": "chabie_cuowei",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "契约转真",
    "variantResolution_zh": "契约转真"
  },
  {
    "variantId": "chabie_cuowei#ending-4",
    "storyId": "chabie_cuowei",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "离开重生(他来追妻)",
    "variantResolution_zh": "离开重生(他来追妻)"
  },
  {
    "variantId": "chabie_cuowei#ending-5",
    "storyId": "chabie_cuowei",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "chabie_cuowei#ending-6",
    "storyId": "chabie_cuowei",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "高调宠妻",
    "variantResolution_zh": "高调宠妻"
  },
  {
    "variantId": "chabie_cuowei#ending-7",
    "storyId": "chabie_cuowei",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "白月光出局",
    "variantResolution_zh": "白月光出局"
  },
  {
    "variantId": "chabie_cuowei#ending-8",
    "storyId": "chabie_cuowei",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "平淡相守……结局",
    "variantResolution_zh": "平淡相守……结局"
  },
  {
    "variantId": "changgong_zhuzai#ending-1",
    "storyId": "changgong_zhuzai",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "还政明君功成身退",
    "variantResolution_zh": "还政明君功成身退"
  },
  {
    "variantId": "changgong_zhuzai#ending-2",
    "storyId": "changgong_zhuzai",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "摄政长公主凤掌乾坤",
    "variantResolution_zh": "摄政长公主凤掌乾坤"
  },
  {
    "variantId": "changgong_zhuzai#ending-3",
    "storyId": "changgong_zhuzai",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "严惩逆党血债血偿",
    "variantResolution_zh": "严惩逆党血债血偿"
  },
  {
    "variantId": "changgong_zhuzai#ending-4",
    "storyId": "changgong_zhuzai",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "急流勇退江湖之远",
    "variantResolution_zh": "急流勇退江湖之远"
  },
  {
    "variantId": "changgong_zhuzai#ending-5",
    "storyId": "changgong_zhuzai",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "姐弟情深相依为命",
    "variantResolution_zh": "姐弟情深相依为命"
  },
  {
    "variantId": "changgong_zhuzai#ending-6",
    "storyId": "changgong_zhuzai",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "巾帼宰辅辅佐贤君",
    "variantResolution_zh": "巾帼宰辅辅佐贤君"
  },
  {
    "variantId": "changgong_zhuzai#ending-7",
    "storyId": "changgong_zhuzai",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "铁腕女主乾纲独断",
    "variantResolution_zh": "铁腕女主乾纲独断"
  },
  {
    "variantId": "changgong_zhuzai#ending-8",
    "storyId": "changgong_zhuzai",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "放下释怀向阳而生……这位权倾天下的长公主",
    "variantResolution_zh": "放下释怀向阳而生……这位权倾天下的长公主"
  },
  {
    "variantId": "chongsheng_chushen#ending-1",
    "storyId": "chongsheng_chushen",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "chongsheng_chushen#ending-2",
    "storyId": "chongsheng_chushen",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "chongsheng_chushen#ending-3",
    "storyId": "chongsheng_chushen",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "chongsheng_chushen#ending-4",
    "storyId": "chongsheng_chushen",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "chongsheng_chushen#ending-5",
    "storyId": "chongsheng_chushen",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "chongsheng_chushen#ending-6",
    "storyId": "chongsheng_chushen",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "chongsheng_chushen#ending-7",
    "storyId": "chongsheng_chushen",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "chongsheng_chushen#ending-8",
    "storyId": "chongsheng_chushen",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "chongsheng_junsao#ending-1",
    "storyId": "chongsheng_junsao",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "chongsheng_junsao#ending-2",
    "storyId": "chongsheng_junsao",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "chongsheng_junsao#ending-3",
    "storyId": "chongsheng_junsao",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "chongsheng_junsao#ending-4",
    "storyId": "chongsheng_junsao",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "chongsheng_junsao#ending-5",
    "storyId": "chongsheng_junsao",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "chongsheng_junsao#ending-6",
    "storyId": "chongsheng_junsao",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "chongsheng_junsao#ending-7",
    "storyId": "chongsheng_junsao",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "chongsheng_junsao#ending-8",
    "storyId": "chongsheng_junsao",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "chongsheng_mingxing#ending-1",
    "storyId": "chongsheng_mingxing",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "chongsheng_mingxing#ending-2",
    "storyId": "chongsheng_mingxing",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "chongsheng_mingxing#ending-3",
    "storyId": "chongsheng_mingxing",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "chongsheng_mingxing#ending-4",
    "storyId": "chongsheng_mingxing",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "chongsheng_mingxing#ending-5",
    "storyId": "chongsheng_mingxing",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "chongsheng_mingxing#ending-6",
    "storyId": "chongsheng_mingxing",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "chongsheng_mingxing#ending-7",
    "storyId": "chongsheng_mingxing",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "chongsheng_mingxing#ending-8",
    "storyId": "chongsheng_mingxing",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "chongsheng_muqin#ending-1",
    "storyId": "chongsheng_muqin",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "chongsheng_muqin#ending-2",
    "storyId": "chongsheng_muqin",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "chongsheng_muqin#ending-3",
    "storyId": "chongsheng_muqin",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "chongsheng_muqin#ending-4",
    "storyId": "chongsheng_muqin",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "chongsheng_muqin#ending-5",
    "storyId": "chongsheng_muqin",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "chongsheng_muqin#ending-6",
    "storyId": "chongsheng_muqin",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "chongsheng_muqin#ending-7",
    "storyId": "chongsheng_muqin",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "chongsheng_muqin#ending-8",
    "storyId": "chongsheng_muqin",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "chongsheng_nanzhu#ending-1",
    "storyId": "chongsheng_nanzhu",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "chongsheng_nanzhu#ending-2",
    "storyId": "chongsheng_nanzhu",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "chongsheng_nanzhu#ending-3",
    "storyId": "chongsheng_nanzhu",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "chongsheng_nanzhu#ending-4",
    "storyId": "chongsheng_nanzhu",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "chongsheng_nanzhu#ending-5",
    "storyId": "chongsheng_nanzhu",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "chongsheng_nanzhu#ending-6",
    "storyId": "chongsheng_nanzhu",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "chongsheng_nanzhu#ending-7",
    "storyId": "chongsheng_nanzhu",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "chongsheng_nanzhu#ending-8",
    "storyId": "chongsheng_nanzhu",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "chongsheng_shenyi#ending-1",
    "storyId": "chongsheng_shenyi",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "chongsheng_shenyi#ending-2",
    "storyId": "chongsheng_shenyi",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "chongsheng_shenyi#ending-3",
    "storyId": "chongsheng_shenyi",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "chongsheng_shenyi#ending-4",
    "storyId": "chongsheng_shenyi",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "chongsheng_shenyi#ending-5",
    "storyId": "chongsheng_shenyi",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "chongsheng_shenyi#ending-6",
    "storyId": "chongsheng_shenyi",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "chongsheng_shenyi#ending-7",
    "storyId": "chongsheng_shenyi",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "chongsheng_shenyi#ending-8",
    "storyId": "chongsheng_shenyi",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "chongsheng_weihou#ending-1",
    "storyId": "chongsheng_weihou",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "chongsheng_weihou#ending-2",
    "storyId": "chongsheng_weihou",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "chongsheng_weihou#ending-3",
    "storyId": "chongsheng_weihou",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "chongsheng_weihou#ending-4",
    "storyId": "chongsheng_weihou",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "chongsheng_weihou#ending-5",
    "storyId": "chongsheng_weihou",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "chongsheng_weihou#ending-6",
    "storyId": "chongsheng_weihou",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "chongsheng_weihou#ending-7",
    "storyId": "chongsheng_weihou",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "chongsheng_weihou#ending-8",
    "storyId": "chongsheng_weihou",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "chongsheng_xueba#ending-1",
    "storyId": "chongsheng_xueba",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "成为顶尖学霸",
    "variantResolution_zh": "成为顶尖学霸"
  },
  {
    "variantId": "chongsheng_xueba#ending-2",
    "storyId": "chongsheng_xueba",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与学神携手",
    "variantResolution_zh": "与学神携手"
  },
  {
    "variantId": "chongsheng_xueba#ending-3",
    "storyId": "chongsheng_xueba",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "揭穿陷害",
    "variantResolution_zh": "揭穿陷害"
  },
  {
    "variantId": "chongsheng_xueba#ending-4",
    "storyId": "chongsheng_xueba",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "实现理想……命运由你书写",
    "variantResolution_zh": "实现理想……命运由你书写"
  },
  {
    "variantId": "chongsheng_xueba#ending-5",
    "storyId": "chongsheng_xueba",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "chongsheng_xueba#ending-6",
    "storyId": "chongsheng_xueba",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "chongsheng_xueba#ending-7",
    "storyId": "chongsheng_xueba",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "chongsheng_xueba#ending-8",
    "storyId": "chongsheng_xueba",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "chuanshu_nixi#ending-1",
    "storyId": "chuanshu_nixi",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "成为真正的女主",
    "variantResolution_zh": "成为真正的女主"
  },
  {
    "variantId": "chuanshu_nixi#ending-2",
    "storyId": "chuanshu_nixi",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与反派BOSS携手",
    "variantResolution_zh": "与反派BOSS携手"
  },
  {
    "variantId": "chuanshu_nixi#ending-3",
    "storyId": "chuanshu_nixi",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "跳出剧情自由",
    "variantResolution_zh": "跳出剧情自由"
  },
  {
    "variantId": "chuanshu_nixi#ending-4",
    "storyId": "chuanshu_nixi",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "反转碾压白莲花……命运由你改写",
    "variantResolution_zh": "反转碾压白莲花……命运由你改写"
  },
  {
    "variantId": "chuanshu_nixi#ending-5",
    "storyId": "chuanshu_nixi",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "chuanshu_nixi#ending-6",
    "storyId": "chuanshu_nixi",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "chuanshu_nixi#ending-7",
    "storyId": "chuanshu_nixi",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "chuanshu_nixi#ending-8",
    "storyId": "chuanshu_nixi",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "chunai_chongqi#ending-1",
    "storyId": "chunai_chongqi",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "宠妻无度",
    "variantResolution_zh": "宠妻无度"
  },
  {
    "variantId": "chunai_chongqi#ending-2",
    "storyId": "chunai_chongqi",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "比翼双飞",
    "variantResolution_zh": "比翼双飞"
  },
  {
    "variantId": "chunai_chongqi#ending-3",
    "storyId": "chunai_chongqi",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "一生不负",
    "variantResolution_zh": "一生不负"
  },
  {
    "variantId": "chunai_chongqi#ending-4",
    "storyId": "chunai_chongqi",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "chunai_chongqi#ending-5",
    "storyId": "chunai_chongqi",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "平凡是福",
    "variantResolution_zh": "平凡是福"
  },
  {
    "variantId": "chunai_chongqi#ending-6",
    "storyId": "chunai_chongqi",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "自在相伴",
    "variantResolution_zh": "自在相伴"
  },
  {
    "variantId": "chunai_chongqi#ending-7",
    "storyId": "chunai_chongqi",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "阖家温暖",
    "variantResolution_zh": "阖家温暖"
  },
  {
    "variantId": "chunai_chongqi#ending-8",
    "storyId": "chunai_chongqi",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "苦尽甘来……结局",
    "variantResolution_zh": "苦尽甘来……结局"
  },
  {
    "variantId": "daiqiu_shiyi#ending-1",
    "storyId": "daiqiu_shiyi",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "daiqiu_shiyi#ending-2",
    "storyId": "daiqiu_shiyi",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "daiqiu_shiyi#ending-3",
    "storyId": "daiqiu_shiyi",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "daiqiu_shiyi#ending-4",
    "storyId": "daiqiu_shiyi",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "daiqiu_shiyi#ending-5",
    "storyId": "daiqiu_shiyi",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "daiqiu_shiyi#ending-6",
    "storyId": "daiqiu_shiyi",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "daiqiu_shiyi#ending-7",
    "storyId": "daiqiu_shiyi",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "daiqiu_shiyi#ending-8",
    "storyId": "daiqiu_shiyi",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "dinv_chongsheng#ending-1",
    "storyId": "dinv_chongsheng",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "相府重立",
    "variantResolution_zh": "相府重立"
  },
  {
    "variantId": "dinv_chongsheng#ending-2",
    "storyId": "dinv_chongsheng",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与王爷携手",
    "variantResolution_zh": "与王爷携手"
  },
  {
    "variantId": "dinv_chongsheng#ending-3",
    "storyId": "dinv_chongsheng",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "灭门复仇",
    "variantResolution_zh": "灭门复仇"
  },
  {
    "variantId": "dinv_chongsheng#ending-4",
    "storyId": "dinv_chongsheng",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "改写命运……命运由你书写",
    "variantResolution_zh": "改写命运……命运由你书写"
  },
  {
    "variantId": "dinv_chongsheng#ending-5",
    "storyId": "dinv_chongsheng",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "dinv_chongsheng#ending-6",
    "storyId": "dinv_chongsheng",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "dinv_chongsheng#ending-7",
    "storyId": "dinv_chongsheng",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "dinv_chongsheng#ending-8",
    "storyId": "dinv_chongsheng",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "dinv_guilai#ending-1",
    "storyId": "dinv_guilai",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "凤冠加身母仪天下",
    "variantResolution_zh": "凤冠加身母仪天下"
  },
  {
    "variantId": "dinv_guilai#ending-2",
    "storyId": "dinv_guilai",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与靖王世子互许终身",
    "variantResolution_zh": "与靖王世子互许终身"
  },
  {
    "variantId": "dinv_guilai#ending-3",
    "storyId": "dinv_guilai",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "仇敌满门覆灭",
    "variantResolution_zh": "仇敌满门覆灭"
  },
  {
    "variantId": "dinv_guilai#ending-4",
    "storyId": "dinv_guilai",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "归隐山林",
    "variantResolution_zh": "归隐山林"
  },
  {
    "variantId": "dinv_guilai#ending-5",
    "storyId": "dinv_guilai",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "彼此疗愈",
    "variantResolution_zh": "彼此疗愈"
  },
  {
    "variantId": "dinv_guilai#ending-6",
    "storyId": "dinv_guilai",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "化恨为善……命运由你书写",
    "variantResolution_zh": "化恨为善……命运由你书写"
  },
  {
    "variantId": "dinv_guilai#ending-7",
    "storyId": "dinv_guilai",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "dinv_guilai#ending-8",
    "storyId": "dinv_guilai",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "duimen_yingdi#ending-1",
    "storyId": "duimen_yingdi",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "对门到对桌",
    "variantResolution_zh": "对门到对桌"
  },
  {
    "variantId": "duimen_yingdi#ending-2",
    "storyId": "duimen_yingdi",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "双向奔赴",
    "variantResolution_zh": "双向奔赴"
  },
  {
    "variantId": "duimen_yingdi#ending-3",
    "storyId": "duimen_yingdi",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "隐婚日常",
    "variantResolution_zh": "隐婚日常"
  },
  {
    "variantId": "duimen_yingdi#ending-4",
    "storyId": "duimen_yingdi",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "先婚后爱乌龙",
    "variantResolution_zh": "先婚后爱乌龙"
  },
  {
    "variantId": "duimen_yingdi#ending-5",
    "storyId": "duimen_yingdi",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "守护者",
    "variantResolution_zh": "守护者"
  },
  {
    "variantId": "duimen_yingdi#ending-6",
    "storyId": "duimen_yingdi",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "双向暗恋",
    "variantResolution_zh": "双向暗恋"
  },
  {
    "variantId": "duimen_yingdi#ending-7",
    "storyId": "duimen_yingdi",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "全网吃瓜……糖度由你书写",
    "variantResolution_zh": "全网吃瓜……糖度由你书写"
  },
  {
    "variantId": "duimen_yingdi#ending-8",
    "storyId": "duimen_yingdi",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "dujie_feisheng#ending-1",
    "storyId": "dujie_feisheng",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "dujie_feisheng#ending-2",
    "storyId": "dujie_feisheng",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "dujie_feisheng#ending-3",
    "storyId": "dujie_feisheng",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "dujie_feisheng#ending-4",
    "storyId": "dujie_feisheng",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "dujie_feisheng#ending-5",
    "storyId": "dujie_feisheng",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "dujie_feisheng#ending-6",
    "storyId": "dujie_feisheng",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "dujie_feisheng#ending-7",
    "storyId": "dujie_feisheng",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "dujie_feisheng#ending-8",
    "storyId": "dujie_feisheng",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "dujun_aiqing#ending-1",
    "storyId": "dujun_aiqing",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "乱世真情",
    "variantResolution_zh": "乱世真情"
  },
  {
    "variantId": "dujun_aiqing#ending-2",
    "storyId": "dujun_aiqing",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与君携手",
    "variantResolution_zh": "与君携手"
  },
  {
    "variantId": "dujun_aiqing#ending-3",
    "storyId": "dujun_aiqing",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "守护爱人",
    "variantResolution_zh": "守护爱人"
  },
  {
    "variantId": "dujun_aiqing#ending-4",
    "storyId": "dujun_aiqing",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "救父雪冤……命运由你书写",
    "variantResolution_zh": "救父雪冤……命运由你书写"
  },
  {
    "variantId": "dujun_aiqing#ending-5",
    "storyId": "dujun_aiqing",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "dujun_aiqing#ending-6",
    "storyId": "dujun_aiqing",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "dujun_aiqing#ending-7",
    "storyId": "dujun_aiqing",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "dujun_aiqing#ending-8",
    "storyId": "dujun_aiqing",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "fanpai_nipei#ending-1",
    "storyId": "fanpai_nipei",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "洗白上位",
    "variantResolution_zh": "洗白上位"
  },
  {
    "variantId": "fanpai_nipei#ending-2",
    "storyId": "fanpai_nipei",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与摄政王携手",
    "variantResolution_zh": "与摄政王携手"
  },
  {
    "variantId": "fanpai_nipei#ending-3",
    "storyId": "fanpai_nipei",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "假女主身败名裂",
    "variantResolution_zh": "假女主身败名裂"
  },
  {
    "variantId": "fanpai_nipei#ending-4",
    "storyId": "fanpai_nipei",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "护住苏家满门",
    "variantResolution_zh": "护住苏家满门"
  },
  {
    "variantId": "fanpai_nipei#ending-5",
    "storyId": "fanpai_nipei",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "fanpai_nipei#ending-6",
    "storyId": "fanpai_nipei",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "救下全员配角",
    "variantResolution_zh": "救下全员配角"
  },
  {
    "variantId": "fanpai_nipei#ending-7",
    "storyId": "fanpai_nipei",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "远走逍遥",
    "variantResolution_zh": "远走逍遥"
  },
  {
    "variantId": "fanpai_nipei#ending-8",
    "storyId": "fanpai_nipei",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "笑看风云……命运由你书写",
    "variantResolution_zh": "笑看风云……命运由你书写"
  },
  {
    "variantId": "fayi_tanan#ending-1",
    "storyId": "fayi_tanan",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "真凶落网",
    "variantResolution_zh": "真凶落网"
  },
  {
    "variantId": "fayi_tanan#ending-2",
    "storyId": "fayi_tanan",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "患难真情",
    "variantResolution_zh": "患难真情"
  },
  {
    "variantId": "fayi_tanan#ending-3",
    "storyId": "fayi_tanan",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "守护正义",
    "variantResolution_zh": "守护正义"
  },
  {
    "variantId": "fayi_tanan#ending-4",
    "storyId": "fayi_tanan",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "揪出内鬼……命运由你书写",
    "variantResolution_zh": "揪出内鬼……命运由你书写"
  },
  {
    "variantId": "fayi_tanan#ending-5",
    "storyId": "fayi_tanan",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "fayi_tanan#ending-6",
    "storyId": "fayi_tanan",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "fayi_tanan#ending-7",
    "storyId": "fayi_tanan",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "fayi_tanan#ending-8",
    "storyId": "fayi_tanan",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "feicai_nixi#ending-1",
    "storyId": "feicai_nixi",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "飞升成仙",
    "variantResolution_zh": "飞升成仙"
  },
  {
    "variantId": "feicai_nixi#ending-2",
    "storyId": "feicai_nixi",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "携手剑尊",
    "variantResolution_zh": "携手剑尊"
  },
  {
    "variantId": "feicai_nixi#ending-3",
    "storyId": "feicai_nixi",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "打脸封神",
    "variantResolution_zh": "打脸封神"
  },
  {
    "variantId": "feicai_nixi#ending-4",
    "storyId": "feicai_nixi",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "重立宗门",
    "variantResolution_zh": "重立宗门"
  },
  {
    "variantId": "feicai_nixi#ending-5",
    "storyId": "feicai_nixi",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "feicai_nixi#ending-6",
    "storyId": "feicai_nixi",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "悬壶济世",
    "variantResolution_zh": "悬壶济世"
  },
  {
    "variantId": "feicai_nixi#ending-7",
    "storyId": "feicai_nixi",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "渣男伏诛",
    "variantResolution_zh": "渣男伏诛"
  },
  {
    "variantId": "feicai_nixi#ending-8",
    "storyId": "feicai_nixi",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "逍遥红尘……命运由你书写",
    "variantResolution_zh": "逍遥红尘……命运由你书写"
  },
  {
    "variantId": "fenghuanchao#ending-1",
    "storyId": "fenghuanchao",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "fenghuanchao#ending-2",
    "storyId": "fenghuanchao",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "fenghuanchao#ending-3",
    "storyId": "fenghuanchao",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "fenghuanchao#ending-4",
    "storyId": "fenghuanchao",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "fenghuanchao#ending-5",
    "storyId": "fenghuanchao",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "fenghuanchao#ending-6",
    "storyId": "fenghuanchao",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "fenghuanchao#ending-7",
    "storyId": "fenghuanchao",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "fenghuanchao#ending-8",
    "storyId": "fenghuanchao",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "fenghuang_niepan#ending-1",
    "storyId": "fenghuang_niepan",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "渡劫飞升位列仙班",
    "variantResolution_zh": "渡劫飞升位列仙班"
  },
  {
    "variantId": "fenghuang_niepan#ending-2",
    "storyId": "fenghuang_niepan",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "仙侣情深携手双修",
    "variantResolution_zh": "仙侣情深携手双修"
  },
  {
    "variantId": "fenghuang_niepan#ending-3",
    "storyId": "fenghuang_niepan",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "血仇尽雪重建宗门",
    "variantResolution_zh": "血仇尽雪重建宗门"
  },
  {
    "variantId": "fenghuang_niepan#ending-4",
    "storyId": "fenghuang_niepan",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "守护苍生镇守天地",
    "variantResolution_zh": "守护苍生镇守天地"
  },
  {
    "variantId": "fenghuang_niepan#ending-5",
    "storyId": "fenghuang_niepan",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "凤血传承开宗立派",
    "variantResolution_zh": "凤血传承开宗立派"
  },
  {
    "variantId": "fenghuang_niepan#ending-6",
    "storyId": "fenghuang_niepan",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "看破红尘逍遥天地",
    "variantResolution_zh": "看破红尘逍遥天地"
  },
  {
    "variantId": "fenghuang_niepan#ending-7",
    "storyId": "fenghuang_niepan",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "凤主天下执掌修真界",
    "variantResolution_zh": "凤主天下执掌修真界"
  },
  {
    "variantId": "fenghuang_niepan#ending-8",
    "storyId": "fenghuang_niepan",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "放下执念浴火新生……这位涅槃重生的凤血传人",
    "variantResolution_zh": "放下执念浴火新生……这位涅槃重生的凤血传人"
  },
  {
    "variantId": "fuchou_nvwang#ending-1",
    "storyId": "fuchou_nvwang",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "沉冤得雪真凶伏法",
    "variantResolution_zh": "沉冤得雪真凶伏法"
  },
  {
    "variantId": "fuchou_nvwang#ending-2",
    "storyId": "fuchou_nvwang",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "患难与共相知相守",
    "variantResolution_zh": "患难与共相知相守"
  },
  {
    "variantId": "fuchou_nvwang#ending-3",
    "storyId": "fuchou_nvwang",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "成为刑警守护正义",
    "variantResolution_zh": "成为刑警守护正义"
  },
  {
    "variantId": "fuchou_nvwang#ending-4",
    "storyId": "fuchou_nvwang",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "重获新生……命运由你书写",
    "variantResolution_zh": "重获新生……命运由你书写"
  },
  {
    "variantId": "fuchou_nvwang#ending-5",
    "storyId": "fuchou_nvwang",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "fuchou_nvwang#ending-6",
    "storyId": "fuchou_nvwang",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "fuchou_nvwang#ending-7",
    "storyId": "fuchou_nvwang",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "fuchou_nvwang#ending-8",
    "storyId": "fuchou_nvwang",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "fuguo_weiyang#ending-1",
    "storyId": "fuguo_weiyang",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "复国谍影",
    "variantResolution_zh": "复国谍影"
  },
  {
    "variantId": "fuguo_weiyang#ending-2",
    "storyId": "fuguo_weiyang",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "大仇得报",
    "variantResolution_zh": "大仇得报"
  },
  {
    "variantId": "fuguo_weiyang#ending-3",
    "storyId": "fuguo_weiyang",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "门楣重光",
    "variantResolution_zh": "门楣重光"
  },
  {
    "variantId": "fuguo_weiyang#ending-4",
    "storyId": "fuguo_weiyang",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "岁月静好",
    "variantResolution_zh": "岁月静好"
  },
  {
    "variantId": "fuguo_weiyang#ending-5",
    "storyId": "fuguo_weiyang",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "fuguo_weiyang#ending-6",
    "storyId": "fuguo_weiyang",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "山河重定",
    "variantResolution_zh": "山河重定"
  },
  {
    "variantId": "fuguo_weiyang#ending-7",
    "storyId": "fuguo_weiyang",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "忠义两全",
    "variantResolution_zh": "忠义两全"
  },
  {
    "variantId": "fuguo_weiyang#ending-8",
    "storyId": "fuguo_weiyang",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "自在相伴……结局",
    "variantResolution_zh": "自在相伴……结局"
  },
  {
    "variantId": "gaiming_chongsheng#ending-1",
    "storyId": "gaiming_chongsheng",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "gaiming_chongsheng#ending-2",
    "storyId": "gaiming_chongsheng",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "gaiming_chongsheng#ending-3",
    "storyId": "gaiming_chongsheng",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "gaiming_chongsheng#ending-4",
    "storyId": "gaiming_chongsheng",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "gaiming_chongsheng#ending-5",
    "storyId": "gaiming_chongsheng",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "gaiming_chongsheng#ending-6",
    "storyId": "gaiming_chongsheng",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "gaiming_chongsheng#ending-7",
    "storyId": "gaiming_chongsheng",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "gaiming_chongsheng#ending-8",
    "storyId": "gaiming_chongsheng",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "guize_dishisan#ending-1",
    "storyId": "guize_dishisan",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "摧毁吃人游戏",
    "variantResolution_zh": "摧毁吃人游戏"
  },
  {
    "variantId": "guize_dishisan#ending-2",
    "storyId": "guize_dishisan",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "患难真情",
    "variantResolution_zh": "患难真情"
  },
  {
    "variantId": "guize_dishisan#ending-3",
    "storyId": "guize_dishisan",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "守护新人",
    "variantResolution_zh": "守护新人"
  },
  {
    "variantId": "guize_dishisan#ending-4",
    "storyId": "guize_dishisan",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "逃出生天",
    "variantResolution_zh": "逃出生天"
  },
  {
    "variantId": "guize_dishisan#ending-5",
    "storyId": "guize_dishisan",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "guize_dishisan#ending-6",
    "storyId": "guize_dishisan",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "揭穿幕后主宰",
    "variantResolution_zh": "揭穿幕后主宰"
  },
  {
    "variantId": "guize_dishisan#ending-7",
    "storyId": "guize_dishisan",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "重定规则",
    "variantResolution_zh": "重定规则"
  },
  {
    "variantId": "guize_dishisan#ending-8",
    "storyId": "guize_dishisan",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "放下释怀……结局",
    "variantResolution_zh": "放下释怀……结局"
  },
  {
    "variantId": "haomen_fuchou#ending-1",
    "storyId": "haomen_fuchou",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "执掌家族企业",
    "variantResolution_zh": "执掌家族企业"
  },
  {
    "variantId": "haomen_fuchou#ending-2",
    "storyId": "haomen_fuchou",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与真心人携手",
    "variantResolution_zh": "与真心人携手"
  },
  {
    "variantId": "haomen_fuchou#ending-3",
    "storyId": "haomen_fuchou",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "仇人锒铛入狱",
    "variantResolution_zh": "仇人锒铛入狱"
  },
  {
    "variantId": "haomen_fuchou#ending-4",
    "storyId": "haomen_fuchou",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "远走重生……命运由你书写",
    "variantResolution_zh": "远走重生……命运由你书写"
  },
  {
    "variantId": "haomen_fuchou#ending-5",
    "storyId": "haomen_fuchou",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "haomen_fuchou#ending-6",
    "storyId": "haomen_fuchou",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "haomen_fuchou#ending-7",
    "storyId": "haomen_fuchou",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "haomen_fuchou#ending-8",
    "storyId": "haomen_fuchou",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "heli_chongsheng#ending-1",
    "storyId": "heli_chongsheng",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "觅得良缘再嫁如意",
    "variantResolution_zh": "觅得良缘再嫁如意"
  },
  {
    "variantId": "heli_chongsheng#ending-2",
    "storyId": "heli_chongsheng",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "才女风华名动京华",
    "variantResolution_zh": "才女风华名动京华"
  },
  {
    "variantId": "heli_chongsheng#ending-3",
    "storyId": "heli_chongsheng",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "事业鼎盛女中翘楚",
    "variantResolution_zh": "事业鼎盛女中翘楚"
  },
  {
    "variantId": "heli_chongsheng#ending-4",
    "storyId": "heli_chongsheng",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "自在逍遥游历山河",
    "variantResolution_zh": "自在逍遥游历山河"
  },
  {
    "variantId": "heli_chongsheng#ending-5",
    "storyId": "heli_chongsheng",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "破镜重圆浪子回头",
    "variantResolution_zh": "破镜重圆浪子回头"
  },
  {
    "variantId": "heli_chongsheng#ending-6",
    "storyId": "heli_chongsheng",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "良人同心比翼齐飞",
    "variantResolution_zh": "良人同心比翼齐飞"
  },
  {
    "variantId": "heli_chongsheng#ending-7",
    "storyId": "heli_chongsheng",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "兴学育人泽被女子",
    "variantResolution_zh": "兴学育人泽被女子"
  },
  {
    "variantId": "heli_chongsheng#ending-8",
    "storyId": "heli_chongsheng",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "放下释怀向阳而生……这场和离再嫁的重生路",
    "variantResolution_zh": "放下释怀向阳而生……这场和离再嫁的重生路"
  },
  {
    "variantId": "heqin_gongzhu#ending-1",
    "storyId": "heqin_gongzhu",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "执掌凤印母仪敌国",
    "variantResolution_zh": "执掌凤印母仪敌国"
  },
  {
    "variantId": "heqin_gongzhu#ending-2",
    "storyId": "heqin_gongzhu",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与摄政王携手",
    "variantResolution_zh": "与摄政王携手"
  },
  {
    "variantId": "heqin_gongzhu#ending-3",
    "storyId": "heqin_gongzhu",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "促成两国太平",
    "variantResolution_zh": "促成两国太平"
  },
  {
    "variantId": "heqin_gongzhu#ending-4",
    "storyId": "heqin_gongzhu",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "归国重权……命运由你书写",
    "variantResolution_zh": "归国重权……命运由你书写"
  },
  {
    "variantId": "heqin_gongzhu#ending-5",
    "storyId": "heqin_gongzhu",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "heqin_gongzhu#ending-6",
    "storyId": "heqin_gongzhu",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "heqin_gongzhu#ending-7",
    "storyId": "heqin_gongzhu",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "heqin_gongzhu#ending-8",
    "storyId": "heqin_gongzhu",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "hongbang_fengyun#ending-1",
    "storyId": "hongbang_fengyun",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "执掌洪帮",
    "variantResolution_zh": "执掌洪帮"
  },
  {
    "variantId": "hongbang_fengyun#ending-2",
    "storyId": "hongbang_fengyun",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "江湖真情",
    "variantResolution_zh": "江湖真情"
  },
  {
    "variantId": "hongbang_fengyun#ending-3",
    "storyId": "hongbang_fengyun",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "清除叛徒",
    "variantResolution_zh": "清除叛徒"
  },
  {
    "variantId": "hongbang_fengyun#ending-4",
    "storyId": "hongbang_fengyun",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "携手归隐",
    "variantResolution_zh": "携手归隐"
  },
  {
    "variantId": "hongbang_fengyun#ending-5",
    "storyId": "hongbang_fengyun",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "hongbang_fengyun#ending-6",
    "storyId": "hongbang_fengyun",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "帮派一统",
    "variantResolution_zh": "帮派一统"
  },
  {
    "variantId": "hongbang_fengyun#ending-7",
    "storyId": "hongbang_fengyun",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "击退外敌",
    "variantResolution_zh": "击退外敌"
  },
  {
    "variantId": "hongbang_fengyun#ending-8",
    "storyId": "hongbang_fengyun",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "江湖逍遥……结局",
    "variantResolution_zh": "江湖逍遥……结局"
  },
  {
    "variantId": "huakui_mingjue#ending-1",
    "storyId": "huakui_mingjue",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "嫁入王府母仪一方",
    "variantResolution_zh": "嫁入王府母仪一方"
  },
  {
    "variantId": "huakui_mingjue#ending-2",
    "storyId": "huakui_mingjue",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "才名动天下的自由才女",
    "variantResolution_zh": "才名动天下的自由才女"
  },
  {
    "variantId": "huakui_mingjue#ending-3",
    "storyId": "huakui_mingjue",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "赎身归隐",
    "variantResolution_zh": "赎身归隐"
  },
  {
    "variantId": "huakui_mingjue#ending-4",
    "storyId": "huakui_mingjue",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "魂归现代重逢",
    "variantResolution_zh": "魂归现代重逢"
  },
  {
    "variantId": "huakui_mingjue#ending-5",
    "storyId": "huakui_mingjue",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "huakui_mingjue#ending-6",
    "storyId": "huakui_mingjue",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "兴办女学",
    "variantResolution_zh": "兴办女学"
  },
  {
    "variantId": "huakui_mingjue#ending-7",
    "storyId": "huakui_mingjue",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "恶人伏法",
    "variantResolution_zh": "恶人伏法"
  },
  {
    "variantId": "huakui_mingjue#ending-8",
    "storyId": "huakui_mingjue",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "自在人生……命运由你书写",
    "variantResolution_zh": "自在人生……命运由你书写"
  },
  {
    "variantId": "huanxi_yuanjia#ending-1",
    "storyId": "huanxi_yuanjia",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "冤家变情侣",
    "variantResolution_zh": "冤家变情侣"
  },
  {
    "variantId": "huanxi_yuanjia#ending-2",
    "storyId": "huanxi_yuanjia",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "职场搭档",
    "variantResolution_zh": "职场搭档"
  },
  {
    "variantId": "huanxi_yuanjia#ending-3",
    "storyId": "huanxi_yuanjia",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "高调撒糖",
    "variantResolution_zh": "高调撒糖"
  },
  {
    "variantId": "huanxi_yuanjia#ending-4",
    "storyId": "huanxi_yuanjia",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "击退情敌……命运由你书写",
    "variantResolution_zh": "击退情敌……命运由你书写"
  },
  {
    "variantId": "huanxi_yuanjia#ending-5",
    "storyId": "huanxi_yuanjia",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "huanxi_yuanjia#ending-6",
    "storyId": "huanxi_yuanjia",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "huanxi_yuanjia#ending-7",
    "storyId": "huanxi_yuanjia",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "huanxi_yuanjia#ending-8",
    "storyId": "huanxi_yuanjia",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "huyao_baoen#ending-1",
    "storyId": "huyao_baoen",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "huyao_baoen#ending-2",
    "storyId": "huyao_baoen",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "huyao_baoen#ending-3",
    "storyId": "huyao_baoen",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "huyao_baoen#ending-4",
    "storyId": "huyao_baoen",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "huyao_baoen#ending-5",
    "storyId": "huyao_baoen",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "huyao_baoen#ending-6",
    "storyId": "huyao_baoen",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "huyao_baoen#ending-7",
    "storyId": "huyao_baoen",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "huyao_baoen#ending-8",
    "storyId": "huyao_baoen",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "jiagu_changying#ending-1",
    "storyId": "jiagu_changying",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "执掌商业帝国",
    "variantResolution_zh": "执掌商业帝国"
  },
  {
    "variantId": "jiagu_changying#ending-2",
    "storyId": "jiagu_changying",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与转世旧识携手",
    "variantResolution_zh": "与转世旧识携手"
  },
  {
    "variantId": "jiagu_changying#ending-3",
    "storyId": "jiagu_changying",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "打脸所有人",
    "variantResolution_zh": "打脸所有人"
  },
  {
    "variantId": "jiagu_changying#ending-4",
    "storyId": "jiagu_changying",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "衣锦还乡",
    "variantResolution_zh": "衣锦还乡"
  },
  {
    "variantId": "jiagu_changying#ending-5",
    "storyId": "jiagu_changying",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "jiagu_changying#ending-6",
    "storyId": "jiagu_changying",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "创业带众人翻身",
    "variantResolution_zh": "创业带众人翻身"
  },
  {
    "variantId": "jiagu_changying#ending-7",
    "storyId": "jiagu_changying",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "扳倒职场恶人",
    "variantResolution_zh": "扳倒职场恶人"
  },
  {
    "variantId": "jiagu_changying#ending-8",
    "storyId": "jiagu_changying",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "魂归古代……命运由你书写",
    "variantResolution_zh": "魂归古代……命运由你书写"
  },
  {
    "variantId": "jiangmen_duhou#ending-1",
    "storyId": "jiangmen_duhou",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "废帝立新",
    "variantResolution_zh": "废帝立新"
  },
  {
    "variantId": "jiangmen_duhou#ending-2",
    "storyId": "jiangmen_duhou",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与战神携手",
    "variantResolution_zh": "与战神携手"
  },
  {
    "variantId": "jiangmen_duhou#ending-3",
    "storyId": "jiangmen_duhou",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "毒后掌权",
    "variantResolution_zh": "毒后掌权"
  },
  {
    "variantId": "jiangmen_duhou#ending-4",
    "storyId": "jiangmen_duhou",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "灭门复仇……命运由你书写",
    "variantResolution_zh": "灭门复仇……命运由你书写"
  },
  {
    "variantId": "jiangmen_duhou#ending-5",
    "storyId": "jiangmen_duhou",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "jiangmen_duhou#ending-6",
    "storyId": "jiangmen_duhou",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "jiangmen_duhou#ending-7",
    "storyId": "jiangmen_duhou",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "jiangmen_duhou#ending-8",
    "storyId": "jiangmen_duhou",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "jiangmen_huonv#ending-1",
    "storyId": "jiangmen_huonv",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "执掌帅印镇北疆",
    "variantResolution_zh": "执掌帅印镇北疆"
  },
  {
    "variantId": "jiangmen_huonv#ending-2",
    "storyId": "jiangmen_huonv",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与萧决并肩白首",
    "variantResolution_zh": "与萧决并肩白首"
  },
  {
    "variantId": "jiangmen_huonv#ending-3",
    "storyId": "jiangmen_huonv",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "仇敌伏诛血债血偿",
    "variantResolution_zh": "仇敌伏诛血债血偿"
  },
  {
    "variantId": "jiangmen_huonv#ending-4",
    "storyId": "jiangmen_huonv",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "归隐边塞",
    "variantResolution_zh": "归隐边塞"
  },
  {
    "variantId": "jiangmen_huonv#ending-5",
    "storyId": "jiangmen_huonv",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "卸甲疗愈",
    "variantResolution_zh": "卸甲疗愈"
  },
  {
    "variantId": "jiangmen_huonv#ending-6",
    "storyId": "jiangmen_huonv",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "安边大义",
    "variantResolution_zh": "安边大义"
  },
  {
    "variantId": "jiangmen_huonv#ending-7",
    "storyId": "jiangmen_huonv",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "连根拔起",
    "variantResolution_zh": "连根拔起"
  },
  {
    "variantId": "jiangmen_huonv#ending-8",
    "storyId": "jiangmen_huonv",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "放下释怀……将门虎女的命运",
    "variantResolution_zh": "放下释怀……将门虎女的命运"
  },
  {
    "variantId": "jianxian_wendao#ending-1",
    "storyId": "jianxian_wendao",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "jianxian_wendao#ending-2",
    "storyId": "jianxian_wendao",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "jianxian_wendao#ending-3",
    "storyId": "jianxian_wendao",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "jianxian_wendao#ending-4",
    "storyId": "jianxian_wendao",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "jianxian_wendao#ending-5",
    "storyId": "jianxian_wendao",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "jianxian_wendao#ending-6",
    "storyId": "jianxian_wendao",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "jianxian_wendao#ending-7",
    "storyId": "jianxian_wendao",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "jianxian_wendao#ending-8",
    "storyId": "jianxian_wendao",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "jiaoyu_qinghuan#ending-1",
    "storyId": "jiaoyu_qinghuan",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "教育救国",
    "variantResolution_zh": "教育救国"
  },
  {
    "variantId": "jiaoyu_qinghuan#ending-2",
    "storyId": "jiaoyu_qinghuan",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "兴学典范",
    "variantResolution_zh": "兴学典范"
  },
  {
    "variantId": "jiaoyu_qinghuan#ending-3",
    "storyId": "jiaoyu_qinghuan",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "薪火相传",
    "variantResolution_zh": "薪火相传"
  },
  {
    "variantId": "jiaoyu_qinghuan#ending-4",
    "storyId": "jiaoyu_qinghuan",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "岁月静好",
    "variantResolution_zh": "岁月静好"
  },
  {
    "variantId": "jiaoyu_qinghuan#ending-5",
    "storyId": "jiaoyu_qinghuan",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向奔赴",
    "variantResolution_zh": "双向奔赴"
  },
  {
    "variantId": "jiaoyu_qinghuan#ending-6",
    "storyId": "jiaoyu_qinghuan",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "栋梁满门",
    "variantResolution_zh": "栋梁满门"
  },
  {
    "variantId": "jiaoyu_qinghuan#ending-7",
    "storyId": "jiaoyu_qinghuan",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "巾帼之光",
    "variantResolution_zh": "巾帼之光"
  },
  {
    "variantId": "jiaoyu_qinghuan#ending-8",
    "storyId": "jiaoyu_qinghuan",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "星火燎原……结局",
    "variantResolution_zh": "星火燎原……结局"
  },
  {
    "variantId": "jiehun_houai#ending-1",
    "storyId": "jiehun_houai",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "婚后被宠成全世界",
    "variantResolution_zh": "婚后被宠成全世界"
  },
  {
    "variantId": "jiehun_houai#ending-2",
    "storyId": "jiehun_houai",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "双向奔赴互许真心",
    "variantResolution_zh": "双向奔赴互许真心"
  },
  {
    "variantId": "jiehun_houai#ending-3",
    "storyId": "jiehun_houai",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "情敌彻底出局",
    "variantResolution_zh": "情敌彻底出局"
  },
  {
    "variantId": "jiehun_houai#ending-4",
    "storyId": "jiehun_houai",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "赢得全家真心接纳",
    "variantResolution_zh": "赢得全家真心接纳"
  },
  {
    "variantId": "jiehun_houai#ending-5",
    "storyId": "jiehun_houai",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎彼此治愈",
    "variantResolution_zh": "双向救赎彼此治愈"
  },
  {
    "variantId": "jiehun_houai#ending-6",
    "storyId": "jiehun_houai",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "婚姻事业双丰收",
    "variantResolution_zh": "婚姻事业双丰收"
  },
  {
    "variantId": "jiehun_houai#ending-7",
    "storyId": "jiehun_houai",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "拜金长辈算计败露",
    "variantResolution_zh": "拜金长辈算计败露"
  },
  {
    "variantId": "jiehun_houai#ending-8",
    "storyId": "jiehun_houai",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "归于柴米油盐的小确幸……结局由你的选择书写",
    "variantResolution_zh": "归于柴米油盐的小确幸……结局由你的选择书写"
  },
  {
    "variantId": "jingong_yingdi#ending-1",
    "storyId": "jingong_yingdi",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "近水楼台",
    "variantResolution_zh": "近水楼台"
  },
  {
    "variantId": "jingong_yingdi#ending-2",
    "storyId": "jingong_yingdi",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "灯火可亲",
    "variantResolution_zh": "灯火可亲"
  },
  {
    "variantId": "jingong_yingdi#ending-3",
    "storyId": "jingong_yingdi",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "并肩发光",
    "variantResolution_zh": "并肩发光"
  },
  {
    "variantId": "jingong_yingdi#ending-4",
    "storyId": "jingong_yingdi",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "平凡是福",
    "variantResolution_zh": "平凡是福"
  },
  {
    "variantId": "jingong_yingdi#ending-5",
    "storyId": "jingong_yingdi",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "jingong_yingdi#ending-6",
    "storyId": "jingong_yingdi",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "喜结连理",
    "variantResolution_zh": "喜结连理"
  },
  {
    "variantId": "jingong_yingdi#ending-7",
    "storyId": "jingong_yingdi",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "事业双收",
    "variantResolution_zh": "事业双收"
  },
  {
    "variantId": "jingong_yingdi#ending-8",
    "storyId": "jingong_yingdi",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "自在相伴……结局",
    "variantResolution_zh": "自在相伴……结局"
  },
  {
    "variantId": "jisheng_dingti#ending-1",
    "storyId": "jisheng_dingti",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "夺回人生",
    "variantResolution_zh": "夺回人生"
  },
  {
    "variantId": "jisheng_dingti#ending-2",
    "storyId": "jisheng_dingti",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与律师携手",
    "variantResolution_zh": "与律师携手"
  },
  {
    "variantId": "jisheng_dingti#ending-3",
    "storyId": "jisheng_dingti",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "真凶伏法",
    "variantResolution_zh": "真凶伏法"
  },
  {
    "variantId": "jisheng_dingti#ending-4",
    "storyId": "jisheng_dingti",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "亲情回归……命运由你书写",
    "variantResolution_zh": "亲情回归……命运由你书写"
  },
  {
    "variantId": "jisheng_dingti#ending-5",
    "storyId": "jisheng_dingti",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "jisheng_dingti#ending-6",
    "storyId": "jisheng_dingti",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "jisheng_dingti#ending-7",
    "storyId": "jisheng_dingti",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "jisheng_dingti#ending-8",
    "storyId": "jisheng_dingti",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "jiyi_miju#ending-1",
    "storyId": "jiyi_miju",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "揪出真凶",
    "variantResolution_zh": "揪出真凶"
  },
  {
    "variantId": "jiyi_miju#ending-2",
    "storyId": "jiyi_miju",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "完美复仇",
    "variantResolution_zh": "完美复仇"
  },
  {
    "variantId": "jiyi_miju#ending-3",
    "storyId": "jiyi_miju",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "与医生携手",
    "variantResolution_zh": "与医生携手"
  },
  {
    "variantId": "jiyi_miju#ending-4",
    "storyId": "jiyi_miju",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "真相大白……命运由你书写",
    "variantResolution_zh": "真相大白……命运由你书写"
  },
  {
    "variantId": "jiyi_miju#ending-5",
    "storyId": "jiyi_miju",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "jiyi_miju#ending-6",
    "storyId": "jiyi_miju",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "jiyi_miju#ending-7",
    "storyId": "jiyi_miju",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "jiyi_miju#ending-8",
    "storyId": "jiyi_miju",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "junfa_qianjin#ending-1",
    "storyId": "junfa_qianjin",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "乱世真情",
    "variantResolution_zh": "乱世真情"
  },
  {
    "variantId": "junfa_qianjin#ending-2",
    "storyId": "junfa_qianjin",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "父仇得报",
    "variantResolution_zh": "父仇得报"
  },
  {
    "variantId": "junfa_qianjin#ending-3",
    "storyId": "junfa_qianjin",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "守护一方",
    "variantResolution_zh": "守护一方"
  },
  {
    "variantId": "junfa_qianjin#ending-4",
    "storyId": "junfa_qianjin",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "携手归隐",
    "variantResolution_zh": "携手归隐"
  },
  {
    "variantId": "junfa_qianjin#ending-5",
    "storyId": "junfa_qianjin",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "junfa_qianjin#ending-6",
    "storyId": "junfa_qianjin",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "扫清外敌",
    "variantResolution_zh": "扫清外敌"
  },
  {
    "variantId": "junfa_qianjin#ending-7",
    "storyId": "junfa_qianjin",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "肃清内患",
    "variantResolution_zh": "肃清内患"
  },
  {
    "variantId": "junfa_qianjin#ending-8",
    "storyId": "junfa_qianjin",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "自在人生……结局",
    "variantResolution_zh": "自在人生……结局"
  },
  {
    "variantId": "lenggong_feihou#ending-1",
    "storyId": "lenggong_feihou",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "重夺凤位",
    "variantResolution_zh": "重夺凤位"
  },
  {
    "variantId": "lenggong_feihou#ending-2",
    "storyId": "lenggong_feihou",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与帝携手",
    "variantResolution_zh": "与帝携手"
  },
  {
    "variantId": "lenggong_feihou#ending-3",
    "storyId": "lenggong_feihou",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "母仪天下",
    "variantResolution_zh": "母仪天下"
  },
  {
    "variantId": "lenggong_feihou#ending-4",
    "storyId": "lenggong_feihou",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "揪出真凶……命运由你书写",
    "variantResolution_zh": "揪出真凶……命运由你书写"
  },
  {
    "variantId": "lenggong_feihou#ending-5",
    "storyId": "lenggong_feihou",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "lenggong_feihou#ending-6",
    "storyId": "lenggong_feihou",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "lenggong_feihou#ending-7",
    "storyId": "lenggong_feihou",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "lenggong_feihou#ending-8",
    "storyId": "lenggong_feihou",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "lenggong_fengming#ending-1",
    "storyId": "lenggong_fengming",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "凤临天下册封后位",
    "variantResolution_zh": "凤临天下册封后位"
  },
  {
    "variantId": "lenggong_fengming#ending-2",
    "storyId": "lenggong_fengming",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "帝后情深破镜重圆",
    "variantResolution_zh": "帝后情深破镜重圆"
  },
  {
    "variantId": "lenggong_fengming#ending-3",
    "storyId": "lenggong_fengming",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "血债血偿仇敌伏诛",
    "variantResolution_zh": "血债血偿仇敌伏诛"
  },
  {
    "variantId": "lenggong_fengming#ending-4",
    "storyId": "lenggong_fengming",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "掌权后宫执掌凤印",
    "variantResolution_zh": "掌权后宫执掌凤印"
  },
  {
    "variantId": "lenggong_fengming#ending-5",
    "storyId": "lenggong_fengming",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "看破红尘自请出宫",
    "variantResolution_zh": "看破红尘自请出宫"
  },
  {
    "variantId": "lenggong_fengming#ending-6",
    "storyId": "lenggong_fengming",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "携手明君共治盛世",
    "variantResolution_zh": "携手明君共治盛世"
  },
  {
    "variantId": "lenggong_fengming#ending-7",
    "storyId": "lenggong_fengming",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "连根拔起肃清后患",
    "variantResolution_zh": "连根拔起肃清后患"
  },
  {
    "variantId": "lenggong_fengming#ending-8",
    "storyId": "lenggong_fengming",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "放下释怀向阳新生……这场冷宫翻身的命运",
    "variantResolution_zh": "放下释怀向阳新生……这场冷宫翻身的命运"
  },
  {
    "variantId": "lihun_xiansheng#ending-1",
    "storyId": "lihun_xiansheng",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "自创顶级律所事业封神",
    "variantResolution_zh": "自创顶级律所事业封神"
  },
  {
    "variantId": "lihun_xiansheng#ending-2",
    "storyId": "lihun_xiansheng",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与顾沉携手真爱",
    "variantResolution_zh": "与顾沉携手真爱"
  },
  {
    "variantId": "lihun_xiansheng#ending-3",
    "storyId": "lihun_xiansheng",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "渣人一并伏法",
    "variantResolution_zh": "渣人一并伏法"
  },
  {
    "variantId": "lihun_xiansheng#ending-4",
    "storyId": "lihun_xiansheng",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "争得抚养守护小满",
    "variantResolution_zh": "争得抚养守护小满"
  },
  {
    "variantId": "lihun_xiansheng#ending-5",
    "storyId": "lihun_xiansheng",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎彼此治愈",
    "variantResolution_zh": "双向救赎彼此治愈"
  },
  {
    "variantId": "lihun_xiansheng#ending-6",
    "storyId": "lihun_xiansheng",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "创立法律援助回馈社会",
    "variantResolution_zh": "创立法律援助回馈社会"
  },
  {
    "variantId": "lihun_xiansheng#ending-7",
    "storyId": "lihun_xiansheng",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "全面反杀连根拔起",
    "variantResolution_zh": "全面反杀连根拔起"
  },
  {
    "variantId": "lihun_xiansheng#ending-8",
    "storyId": "lihun_xiansheng",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "放下得失活得通透……结局由你的选择书写",
    "variantResolution_zh": "放下得失活得通透……结局由你的选择书写"
  },
  {
    "variantId": "linggen_juexing#ending-1",
    "storyId": "linggen_juexing",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "linggen_juexing#ending-2",
    "storyId": "linggen_juexing",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "linggen_juexing#ending-3",
    "storyId": "linggen_juexing",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "linggen_juexing#ending-4",
    "storyId": "linggen_juexing",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "linggen_juexing#ending-5",
    "storyId": "linggen_juexing",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "linggen_juexing#ending-6",
    "storyId": "linggen_juexing",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "linggen_juexing#ending-7",
    "storyId": "linggen_juexing",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "linggen_juexing#ending-8",
    "storyId": "linggen_juexing",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "linghun_huhuan#ending-1",
    "storyId": "linghun_huhuan",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "换回各归",
    "variantResolution_zh": "换回各归"
  },
  {
    "variantId": "linghun_huhuan#ending-2",
    "storyId": "linghun_huhuan",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "留古相守",
    "variantResolution_zh": "留古相守"
  },
  {
    "variantId": "linghun_huhuan#ending-3",
    "storyId": "linghun_huhuan",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "古今双圆",
    "variantResolution_zh": "古今双圆"
  },
  {
    "variantId": "linghun_huhuan#ending-4",
    "storyId": "linghun_huhuan",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "共守将门",
    "variantResolution_zh": "共守将门"
  },
  {
    "variantId": "linghun_huhuan#ending-5",
    "storyId": "linghun_huhuan",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "太子伏诛",
    "variantResolution_zh": "太子伏诛"
  },
  {
    "variantId": "linghun_huhuan#ending-6",
    "storyId": "linghun_huhuan",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "跨时之约",
    "variantResolution_zh": "跨时之约"
  },
  {
    "variantId": "linghun_huhuan#ending-7",
    "storyId": "linghun_huhuan",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "改写双命",
    "variantResolution_zh": "改写双命"
  },
  {
    "variantId": "linghun_huhuan#ending-8",
    "storyId": "linghun_huhuan",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "镜缘永续……命运由你书写",
    "variantResolution_zh": "镜缘永续……命运由你书写"
  },
  {
    "variantId": "lingyi_tanan#ending-1",
    "storyId": "lingyi_tanan",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "沉冤得雪",
    "variantResolution_zh": "沉冤得雪"
  },
  {
    "variantId": "lingyi_tanan#ending-2",
    "storyId": "lingyi_tanan",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "阴阳真情",
    "variantResolution_zh": "阴阳真情"
  },
  {
    "variantId": "lingyi_tanan#ending-3",
    "storyId": "lingyi_tanan",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "守护一方",
    "variantResolution_zh": "守护一方"
  },
  {
    "variantId": "lingyi_tanan#ending-4",
    "storyId": "lingyi_tanan",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "携手归隐",
    "variantResolution_zh": "携手归隐"
  },
  {
    "variantId": "lingyi_tanan#ending-5",
    "storyId": "lingyi_tanan",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "lingyi_tanan#ending-6",
    "storyId": "lingyi_tanan",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "揪出真凶",
    "variantResolution_zh": "揪出真凶"
  },
  {
    "variantId": "lingyi_tanan#ending-7",
    "storyId": "lingyi_tanan",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "永镇邪祟",
    "variantResolution_zh": "永镇邪祟"
  },
  {
    "variantId": "lingyi_tanan#ending-8",
    "storyId": "lingyi_tanan",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "人间值得……结局",
    "variantResolution_zh": "人间值得……结局"
  },
  {
    "variantId": "linju_chengye#ending-1",
    "storyId": "linju_chengye",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "暖心相伴",
    "variantResolution_zh": "暖心相伴"
  },
  {
    "variantId": "linju_chengye#ending-2",
    "storyId": "linju_chengye",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "linju_chengye#ending-3",
    "storyId": "linju_chengye",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "喜结连理",
    "variantResolution_zh": "喜结连理"
  },
  {
    "variantId": "linju_chengye#ending-4",
    "storyId": "linju_chengye",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "事业有成",
    "variantResolution_zh": "事业有成"
  },
  {
    "variantId": "linju_chengye#ending-5",
    "storyId": "linju_chengye",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "花开天涯",
    "variantResolution_zh": "花开天涯"
  },
  {
    "variantId": "linju_chengye#ending-6",
    "storyId": "linju_chengye",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "一花一生",
    "variantResolution_zh": "一花一生"
  },
  {
    "variantId": "linju_chengye#ending-7",
    "storyId": "linju_chengye",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "暖意流芳",
    "variantResolution_zh": "暖意流芳"
  },
  {
    "variantId": "linju_chengye#ending-8",
    "storyId": "linju_chengye",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "阖家温暖……结局",
    "variantResolution_zh": "阖家温暖……结局"
  },
  {
    "variantId": "longnv_chuanshuo#ending-1",
    "storyId": "longnv_chuanshuo",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "longnv_chuanshuo#ending-2",
    "storyId": "longnv_chuanshuo",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "longnv_chuanshuo#ending-3",
    "storyId": "longnv_chuanshuo",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "longnv_chuanshuo#ending-4",
    "storyId": "longnv_chuanshuo",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "longnv_chuanshuo#ending-5",
    "storyId": "longnv_chuanshuo",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "longnv_chuanshuo#ending-6",
    "storyId": "longnv_chuanshuo",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "longnv_chuanshuo#ending-7",
    "storyId": "longnv_chuanshuo",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "longnv_chuanshuo#ending-8",
    "storyId": "longnv_chuanshuo",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "luanshi_jiaren#ending-1",
    "storyId": "luanshi_jiaren",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "烽火真情",
    "variantResolution_zh": "烽火真情"
  },
  {
    "variantId": "luanshi_jiaren#ending-2",
    "storyId": "luanshi_jiaren",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "家国情怀",
    "variantResolution_zh": "家国情怀"
  },
  {
    "variantId": "luanshi_jiaren#ending-3",
    "storyId": "luanshi_jiaren",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "守护故园",
    "variantResolution_zh": "守护故园"
  },
  {
    "variantId": "luanshi_jiaren#ending-4",
    "storyId": "luanshi_jiaren",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "携手抗敌……命运由你书写",
    "variantResolution_zh": "携手抗敌……命运由你书写"
  },
  {
    "variantId": "luanshi_jiaren#ending-5",
    "storyId": "luanshi_jiaren",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "luanshi_jiaren#ending-6",
    "storyId": "luanshi_jiaren",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "luanshi_jiaren#ending-7",
    "storyId": "luanshi_jiaren",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "luanshi_jiaren#ending-8",
    "storyId": "luanshi_jiaren",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "luanshi_zhixia#ending-1",
    "storyId": "luanshi_zhixia",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "乱世成长",
    "variantResolution_zh": "乱世成长"
  },
  {
    "variantId": "luanshi_zhixia#ending-2",
    "storyId": "luanshi_zhixia",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "自强典范",
    "variantResolution_zh": "自强典范"
  },
  {
    "variantId": "luanshi_zhixia#ending-3",
    "storyId": "luanshi_zhixia",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "家国情怀",
    "variantResolution_zh": "家国情怀"
  },
  {
    "variantId": "luanshi_zhixia#ending-4",
    "storyId": "luanshi_zhixia",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "岁月静好",
    "variantResolution_zh": "岁月静好"
  },
  {
    "variantId": "luanshi_zhixia#ending-5",
    "storyId": "luanshi_zhixia",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "luanshi_zhixia#ending-6",
    "storyId": "luanshi_zhixia",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "桃李芬芳",
    "variantResolution_zh": "桃李芬芳"
  },
  {
    "variantId": "luanshi_zhixia#ending-7",
    "storyId": "luanshi_zhixia",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "善意流芳",
    "variantResolution_zh": "善意流芳"
  },
  {
    "variantId": "luanshi_zhixia#ending-8",
    "storyId": "luanshi_zhixia",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "自在人生……结局",
    "variantResolution_zh": "自在人生……结局"
  },
  {
    "variantId": "luonan_qianjin#ending-1",
    "storyId": "luonan_qianjin",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "luonan_qianjin#ending-2",
    "storyId": "luonan_qianjin",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "luonan_qianjin#ending-3",
    "storyId": "luonan_qianjin",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "luonan_qianjin#ending-4",
    "storyId": "luonan_qianjin",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "luonan_qianjin#ending-5",
    "storyId": "luonan_qianjin",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "luonan_qianjin#ending-6",
    "storyId": "luonan_qianjin",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "luonan_qianjin#ending-7",
    "storyId": "luonan_qianjin",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "luonan_qianjin#ending-8",
    "storyId": "luonan_qianjin",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "mengbao_zhugong#ending-1",
    "storyId": "mengbao_zhugong",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "一家三口团圆",
    "variantResolution_zh": "一家三口团圆"
  },
  {
    "variantId": "mengbao_zhugong#ending-2",
    "storyId": "mengbao_zhugong",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "二胎登门",
    "variantResolution_zh": "二胎登门"
  },
  {
    "variantId": "mengbao_zhugong#ending-3",
    "storyId": "mengbao_zhugong",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "盛大婚礼",
    "variantResolution_zh": "盛大婚礼"
  },
  {
    "variantId": "mengbao_zhugong#ending-4",
    "storyId": "mengbao_zhugong",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "甜蜜日常……命运由你书写",
    "variantResolution_zh": "甜蜜日常……命运由你书写"
  },
  {
    "variantId": "mengbao_zhugong#ending-5",
    "storyId": "mengbao_zhugong",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "mengbao_zhugong#ending-6",
    "storyId": "mengbao_zhugong",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "mengbao_zhugong#ending-7",
    "storyId": "mengbao_zhugong",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "mengbao_zhugong#ending-8",
    "storyId": "mengbao_zhugong",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "miaojiang_gufei#ending-1",
    "storyId": "miaojiang_gufei",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "执掌苗疆成一代蛊神",
    "variantResolution_zh": "执掌苗疆成一代蛊神"
  },
  {
    "variantId": "miaojiang_gufei#ending-2",
    "storyId": "miaojiang_gufei",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与顾衍双宿双飞",
    "variantResolution_zh": "与顾衍双宿双飞"
  },
  {
    "variantId": "miaojiang_gufei#ending-3",
    "storyId": "miaojiang_gufei",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "仇敌伏诛血债血偿",
    "variantResolution_zh": "仇敌伏诛血债血偿"
  },
  {
    "variantId": "miaojiang_gufei#ending-4",
    "storyId": "miaojiang_gufei",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "归隐蛊谷逍遥",
    "variantResolution_zh": "归隐蛊谷逍遥"
  },
  {
    "variantId": "miaojiang_gufei#ending-5",
    "storyId": "miaojiang_gufei",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎彼此疗愈",
    "variantResolution_zh": "双向救赎彼此疗愈"
  },
  {
    "variantId": "miaojiang_gufei#ending-6",
    "storyId": "miaojiang_gufei",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "化解两族百年血仇",
    "variantResolution_zh": "化解两族百年血仇"
  },
  {
    "variantId": "miaojiang_gufei#ending-7",
    "storyId": "miaojiang_gufei",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "以身封印蛊神护苍生",
    "variantResolution_zh": "以身封印蛊神护苍生"
  },
  {
    "variantId": "miaojiang_gufei#ending-8",
    "storyId": "miaojiang_gufei",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "远走江湖看淡恩仇……命运由你书写",
    "variantResolution_zh": "远走江湖看淡恩仇……命运由你书写"
  },
  {
    "variantId": "minguo_diezhan#ending-1",
    "storyId": "minguo_diezhan",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "完成使命迎来曙光",
    "variantResolution_zh": "完成使命迎来曙光"
  },
  {
    "variantId": "minguo_diezhan#ending-2",
    "storyId": "minguo_diezhan",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与战友携手",
    "variantResolution_zh": "与战友携手"
  },
  {
    "variantId": "minguo_diezhan#ending-3",
    "storyId": "minguo_diezhan",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "功成身退",
    "variantResolution_zh": "功成身退"
  },
  {
    "variantId": "minguo_diezhan#ending-4",
    "storyId": "minguo_diezhan",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "揪出叛徒……命运由你书写",
    "variantResolution_zh": "揪出叛徒……命运由你书写"
  },
  {
    "variantId": "minguo_diezhan#ending-5",
    "storyId": "minguo_diezhan",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "minguo_diezhan#ending-6",
    "storyId": "minguo_diezhan",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "minguo_diezhan#ending-7",
    "storyId": "minguo_diezhan",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "minguo_diezhan#ending-8",
    "storyId": "minguo_diezhan",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "mingxing_yinghou#ending-1",
    "storyId": "mingxing_yinghou",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "mingxing_yinghou#ending-2",
    "storyId": "mingxing_yinghou",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "mingxing_yinghou#ending-3",
    "storyId": "mingxing_yinghou",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "mingxing_yinghou#ending-4",
    "storyId": "mingxing_yinghou",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "mingxing_yinghou#ending-5",
    "storyId": "mingxing_yinghou",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "mingxing_yinghou#ending-6",
    "storyId": "mingxing_yinghou",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "mingxing_yinghou#ending-7",
    "storyId": "mingxing_yinghou",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "mingxing_yinghou#ending-8",
    "storyId": "mingxing_yinghou",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "mingyuan_chuanqi#ending-1",
    "storyId": "mingyuan_chuanqi",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "名动上海滩",
    "variantResolution_zh": "名动上海滩"
  },
  {
    "variantId": "mingyuan_chuanqi#ending-2",
    "storyId": "mingyuan_chuanqi",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与巨子携手",
    "variantResolution_zh": "与巨子携手"
  },
  {
    "variantId": "mingyuan_chuanqi#ending-3",
    "storyId": "mingyuan_chuanqi",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "实业救国",
    "variantResolution_zh": "实业救国"
  },
  {
    "variantId": "mingyuan_chuanqi#ending-4",
    "storyId": "mingyuan_chuanqi",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "急流勇退……命运由你书写",
    "variantResolution_zh": "急流勇退……命运由你书写"
  },
  {
    "variantId": "mingyuan_chuanqi#ending-5",
    "storyId": "mingyuan_chuanqi",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "mingyuan_chuanqi#ending-6",
    "storyId": "mingyuan_chuanqi",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "mingyuan_chuanqi#ending-7",
    "storyId": "mingyuan_chuanqi",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "mingyuan_chuanqi#ending-8",
    "storyId": "mingyuan_chuanqi",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "misitu_zhiming#ending-1",
    "storyId": "misitu_zhiming",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "摧毁游戏",
    "variantResolution_zh": "摧毁游戏"
  },
  {
    "variantId": "misitu_zhiming#ending-2",
    "storyId": "misitu_zhiming",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "患难真情",
    "variantResolution_zh": "患难真情"
  },
  {
    "variantId": "misitu_zhiming#ending-3",
    "storyId": "misitu_zhiming",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "守护弱者",
    "variantResolution_zh": "守护弱者"
  },
  {
    "variantId": "misitu_zhiming#ending-4",
    "storyId": "misitu_zhiming",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "逃出生天",
    "variantResolution_zh": "逃出生天"
  },
  {
    "variantId": "misitu_zhiming#ending-5",
    "storyId": "misitu_zhiming",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "misitu_zhiming#ending-6",
    "storyId": "misitu_zhiming",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "揭穿金主",
    "variantResolution_zh": "揭穿金主"
  },
  {
    "variantId": "misitu_zhiming#ending-7",
    "storyId": "misitu_zhiming",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "绳之以法",
    "variantResolution_zh": "绳之以法"
  },
  {
    "variantId": "misitu_zhiming#ending-8",
    "storyId": "misitu_zhiming",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "放下释怀……结局",
    "variantResolution_zh": "放下释怀……结局"
  },
  {
    "variantId": "momg_bilan#ending-1",
    "storyId": "momg_bilan",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "守护家园",
    "variantResolution_zh": "守护家园"
  },
  {
    "variantId": "momg_bilan#ending-2",
    "storyId": "momg_bilan",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "末世真情",
    "variantResolution_zh": "末世真情"
  },
  {
    "variantId": "momg_bilan#ending-3",
    "storyId": "momg_bilan",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "守护弱者",
    "variantResolution_zh": "守护弱者"
  },
  {
    "variantId": "momg_bilan#ending-4",
    "storyId": "momg_bilan",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "寻得净土",
    "variantResolution_zh": "寻得净土"
  },
  {
    "variantId": "momg_bilan#ending-5",
    "storyId": "momg_bilan",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "momg_bilan#ending-6",
    "storyId": "momg_bilan",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "揭穿黑手",
    "variantResolution_zh": "揭穿黑手"
  },
  {
    "variantId": "momg_bilan#ending-7",
    "storyId": "momg_bilan",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "肃清恶徒",
    "variantResolution_zh": "肃清恶徒"
  },
  {
    "variantId": "momg_bilan#ending-8",
    "storyId": "momg_bilan",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "平淡求生……结局",
    "variantResolution_zh": "平淡求生……结局"
  },
  {
    "variantId": "monv_lianlian#ending-1",
    "storyId": "monv_lianlian",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "正邪终成眷属",
    "variantResolution_zh": "正邪终成眷属"
  },
  {
    "variantId": "monv_lianlian#ending-2",
    "storyId": "monv_lianlian",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "洗清魔女骂名",
    "variantResolution_zh": "洗清魔女骂名"
  },
  {
    "variantId": "monv_lianlian#ending-3",
    "storyId": "monv_lianlian",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "携手归隐",
    "variantResolution_zh": "携手归隐"
  },
  {
    "variantId": "monv_lianlian#ending-4",
    "storyId": "monv_lianlian",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "化解三界恩怨……命运由你书写",
    "variantResolution_zh": "化解三界恩怨……命运由你书写"
  },
  {
    "variantId": "monv_lianlian#ending-5",
    "storyId": "monv_lianlian",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "monv_lianlian#ending-6",
    "storyId": "monv_lianlian",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "monv_lianlian#ending-7",
    "storyId": "monv_lianlian",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "monv_lianlian#ending-8",
    "storyId": "monv_lianlian",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "moshi_chuanyue#ending-1",
    "storyId": "moshi_chuanyue",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "建立末世王国",
    "variantResolution_zh": "建立末世王国"
  },
  {
    "variantId": "moshi_chuanyue#ending-2",
    "storyId": "moshi_chuanyue",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与军官携手",
    "variantResolution_zh": "与军官携手"
  },
  {
    "variantId": "moshi_chuanyue#ending-3",
    "storyId": "moshi_chuanyue",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "寻得净土",
    "variantResolution_zh": "寻得净土"
  },
  {
    "variantId": "moshi_chuanyue#ending-4",
    "storyId": "moshi_chuanyue",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "终结末世……命运由你书写",
    "variantResolution_zh": "终结末世……命运由你书写"
  },
  {
    "variantId": "moshi_chuanyue#ending-5",
    "storyId": "moshi_chuanyue",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "moshi_chuanyue#ending-6",
    "storyId": "moshi_chuanyue",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "moshi_chuanyue#ending-7",
    "storyId": "moshi_chuanyue",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "moshi_chuanyue#ending-8",
    "storyId": "moshi_chuanyue",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "mozun_jiaoqi#ending-1",
    "storyId": "mozun_jiaoqi",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "魔尊之后共掌魔域",
    "variantResolution_zh": "魔尊之后共掌魔域"
  },
  {
    "variantId": "mozun_jiaoqi#ending-2",
    "storyId": "mozun_jiaoqi",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "归隐凡间共度此生",
    "variantResolution_zh": "归隐凡间共度此生"
  },
  {
    "variantId": "mozun_jiaoqi#ending-3",
    "storyId": "mozun_jiaoqi",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "携手逆天改命",
    "variantResolution_zh": "携手逆天改命"
  },
  {
    "variantId": "mozun_jiaoqi#ending-4",
    "storyId": "mozun_jiaoqi",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "普渡苍生……命运由你书写",
    "variantResolution_zh": "普渡苍生……命运由你书写"
  },
  {
    "variantId": "mozun_jiaoqi#ending-5",
    "storyId": "mozun_jiaoqi",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "mozun_jiaoqi#ending-6",
    "storyId": "mozun_jiaoqi",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "mozun_jiaoqi#ending-7",
    "storyId": "mozun_jiaoqi",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "mozun_jiaoqi#ending-8",
    "storyId": "mozun_jiaoqi",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "nanzhuang_qingyun#ending-1",
    "storyId": "nanzhuang_qingyun",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "身份大白破格封女官",
    "variantResolution_zh": "身份大白破格封女官"
  },
  {
    "variantId": "nanzhuang_qingyun#ending-2",
    "storyId": "nanzhuang_qingyun",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与大理寺卿相守",
    "variantResolution_zh": "与大理寺卿相守"
  },
  {
    "variantId": "nanzhuang_qingyun#ending-3",
    "storyId": "nanzhuang_qingyun",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "兄长沉冤昭雪",
    "variantResolution_zh": "兄长沉冤昭雪"
  },
  {
    "variantId": "nanzhuang_qingyun#ending-4",
    "storyId": "nanzhuang_qingyun",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "功成归隐",
    "variantResolution_zh": "功成归隐"
  },
  {
    "variantId": "nanzhuang_qingyun#ending-5",
    "storyId": "nanzhuang_qingyun",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "nanzhuang_qingyun#ending-6",
    "storyId": "nanzhuang_qingyun",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "为女子开仕途",
    "variantResolution_zh": "为女子开仕途"
  },
  {
    "variantId": "nanzhuang_qingyun#ending-7",
    "storyId": "nanzhuang_qingyun",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "权相满门覆灭",
    "variantResolution_zh": "权相满门覆灭"
  },
  {
    "variantId": "nanzhuang_qingyun#ending-8",
    "storyId": "nanzhuang_qingyun",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "重归现代……命运由你书写",
    "variantResolution_zh": "重归现代……命运由你书写"
  },
  {
    "variantId": "nongjia_chouqi#ending-1",
    "storyId": "nongjia_chouqi",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "富甲一方",
    "variantResolution_zh": "富甲一方"
  },
  {
    "variantId": "nongjia_chouqi#ending-2",
    "storyId": "nongjia_chouqi",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "夫荣妻贵",
    "variantResolution_zh": "夫荣妻贵"
  },
  {
    "variantId": "nongjia_chouqi#ending-3",
    "storyId": "nongjia_chouqi",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "恶人伏法",
    "variantResolution_zh": "恶人伏法"
  },
  {
    "variantId": "nongjia_chouqi#ending-4",
    "storyId": "nongjia_chouqi",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "带乡共富",
    "variantResolution_zh": "带乡共富"
  },
  {
    "variantId": "nongjia_chouqi#ending-5",
    "storyId": "nongjia_chouqi",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "nongjia_chouqi#ending-6",
    "storyId": "nongjia_chouqi",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "悬壶济世",
    "variantResolution_zh": "悬壶济世"
  },
  {
    "variantId": "nongjia_chouqi#ending-7",
    "storyId": "nongjia_chouqi",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "田园美满",
    "variantResolution_zh": "田园美满"
  },
  {
    "variantId": "nongjia_chouqi#ending-8",
    "storyId": "nongjia_chouqi",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "容颜昭雪……命运由你书写",
    "variantResolution_zh": "容颜昭雪……命运由你书写"
  },
  {
    "variantId": "nvdi_dengji#ending-1",
    "storyId": "nvdi_dengji",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "登基称帝凤主天下",
    "variantResolution_zh": "登基称帝凤主天下"
  },
  {
    "variantId": "nvdi_dengji#ending-2",
    "storyId": "nvdi_dengji",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与摄政王共治",
    "variantResolution_zh": "与摄政王共治"
  },
  {
    "variantId": "nvdi_dengji#ending-3",
    "storyId": "nvdi_dengji",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "还政归隐",
    "variantResolution_zh": "还政归隐"
  },
  {
    "variantId": "nvdi_dengji#ending-4",
    "storyId": "nvdi_dengji",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "一统江山……命运由你书写",
    "variantResolution_zh": "一统江山……命运由你书写"
  },
  {
    "variantId": "nvdi_dengji#ending-5",
    "storyId": "nvdi_dengji",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "nvdi_dengji#ending-6",
    "storyId": "nvdi_dengji",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "nvdi_dengji#ending-7",
    "storyId": "nvdi_dengji",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "nvdi_dengji#ending-8",
    "storyId": "nvdi_dengji",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "pochan_dagong#ending-1",
    "storyId": "pochan_dagong",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "并肩商海",
    "variantResolution_zh": "并肩商海"
  },
  {
    "variantId": "pochan_dagong#ending-2",
    "storyId": "pochan_dagong",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "归隐夜市",
    "variantResolution_zh": "归隐夜市"
  },
  {
    "variantId": "pochan_dagong#ending-3",
    "storyId": "pochan_dagong",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "双线人生——白天他是重回巅峰的顾总",
    "variantResolution_zh": "双线人生——白天他是重回巅峰的顾总"
  },
  {
    "variantId": "qifu_fanshen#ending-1",
    "storyId": "qifu_fanshen",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "富甲天下商界女王",
    "variantResolution_zh": "富甲天下商界女王"
  },
  {
    "variantId": "qifu_fanshen#ending-2",
    "storyId": "qifu_fanshen",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "觅得良缘再许真心",
    "variantResolution_zh": "觅得良缘再许真心"
  },
  {
    "variantId": "qifu_fanshen#ending-3",
    "storyId": "qifu_fanshen",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "血债血偿仇敌尽诛",
    "variantResolution_zh": "血债血偿仇敌尽诛"
  },
  {
    "variantId": "qifu_fanshen#ending-4",
    "storyId": "qifu_fanshen",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "独立自强不嫁不依",
    "variantResolution_zh": "独立自强不嫁不依"
  },
  {
    "variantId": "qifu_fanshen#ending-5",
    "storyId": "qifu_fanshen",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "衣锦还乡光耀门楣",
    "variantResolution_zh": "衣锦还乡光耀门楣"
  },
  {
    "variantId": "qifu_fanshen#ending-6",
    "storyId": "qifu_fanshen",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "行善济世扶助弱女",
    "variantResolution_zh": "行善济世扶助弱女"
  },
  {
    "variantId": "qifu_fanshen#ending-7",
    "storyId": "qifu_fanshen",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "连根拔起肃清祸根",
    "variantResolution_zh": "连根拔起肃清祸根"
  },
  {
    "variantId": "qifu_fanshen#ending-8",
    "storyId": "qifu_fanshen",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "放下释怀向阳新生……这场弃妇翻身的雪耻路",
    "variantResolution_zh": "放下释怀向阳新生……这场弃妇翻身的雪耻路"
  },
  {
    "variantId": "qige_zhengren#ending-1",
    "storyId": "qige_zhengren",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "水落石出",
    "variantResolution_zh": "水落石出"
  },
  {
    "variantId": "qige_zhengren#ending-2",
    "storyId": "qige_zhengren",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "迟来的判决",
    "variantResolution_zh": "迟来的判决"
  },
  {
    "variantId": "qige_zhengren#ending-3",
    "storyId": "qige_zhengren",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "以血还血",
    "variantResolution_zh": "以血还血"
  },
  {
    "variantId": "qige_zhengren#ending-4",
    "storyId": "qige_zhengren",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "真凶另有其人",
    "variantResolution_zh": "真凶另有其人"
  },
  {
    "variantId": "qige_zhengren#ending-5",
    "storyId": "qige_zhengren",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "未结之案……命运由你书写",
    "variantResolution_zh": "未结之案……命运由你书写"
  },
  {
    "variantId": "qige_zhengren#ending-6",
    "storyId": "qige_zhengren",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "qige_zhengren#ending-7",
    "storyId": "qige_zhengren",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "qige_zhengren#ending-8",
    "storyId": "qige_zhengren",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "qingbao_yexing#ending-1",
    "storyId": "qingbao_yexing",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "迎来黎明",
    "variantResolution_zh": "迎来黎明"
  },
  {
    "variantId": "qingbao_yexing#ending-2",
    "storyId": "qingbao_yexing",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与子同袍",
    "variantResolution_zh": "与子同袍"
  },
  {
    "variantId": "qingbao_yexing#ending-3",
    "storyId": "qingbao_yexing",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "锄尽叛徒",
    "variantResolution_zh": "锄尽叛徒"
  },
  {
    "variantId": "qingbao_yexing#ending-4",
    "storyId": "qingbao_yexing",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "功成身退",
    "variantResolution_zh": "功成身退"
  },
  {
    "variantId": "qingbao_yexing#ending-5",
    "storyId": "qingbao_yexing",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "qingbao_yexing#ending-6",
    "storyId": "qingbao_yexing",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "守护暗网",
    "variantResolution_zh": "守护暗网"
  },
  {
    "variantId": "qingbao_yexing#ending-7",
    "storyId": "qingbao_yexing",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "反间制敌",
    "variantResolution_zh": "反间制敌"
  },
  {
    "variantId": "qingbao_yexing#ending-8",
    "storyId": "qingbao_yexing",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "黎明重逢……结局",
    "variantResolution_zh": "黎明重逢……结局"
  },
  {
    "variantId": "qingmei_zhuma#ending-1",
    "storyId": "qingmei_zhuma",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "青梅竹马终成眷属",
    "variantResolution_zh": "青梅竹马终成眷属"
  },
  {
    "variantId": "qingmei_zhuma#ending-2",
    "storyId": "qingmei_zhuma",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "校园甜恋",
    "variantResolution_zh": "校园甜恋"
  },
  {
    "variantId": "qingmei_zhuma#ending-3",
    "storyId": "qingmei_zhuma",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "异地坚守",
    "variantResolution_zh": "异地坚守"
  },
  {
    "variantId": "qingmei_zhuma#ending-4",
    "storyId": "qingmei_zhuma",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "携手未来……命运由你书写",
    "variantResolution_zh": "携手未来……命运由你书写"
  },
  {
    "variantId": "qingmei_zhuma#ending-5",
    "storyId": "qingmei_zhuma",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "qingmei_zhuma#ending-6",
    "storyId": "qingmei_zhuma",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "qingmei_zhuma#ending-7",
    "storyId": "qingmei_zhuma",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "qingmei_zhuma#ending-8",
    "storyId": "qingmei_zhuma",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "qiyue_xinniang#ending-1",
    "storyId": "qiyue_xinniang",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "假戏真做契约成真",
    "variantResolution_zh": "假戏真做契约成真"
  },
  {
    "variantId": "qiyue_xinniang#ending-2",
    "storyId": "qiyue_xinniang",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "携手创业商界双骄",
    "variantResolution_zh": "携手创业商界双骄"
  },
  {
    "variantId": "qiyue_xinniang#ending-3",
    "storyId": "qiyue_xinniang",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "父亲冤屈真相昭雪",
    "variantResolution_zh": "父亲冤屈真相昭雪"
  },
  {
    "variantId": "qiyue_xinniang#ending-4",
    "storyId": "qiyue_xinniang",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "远走高飞自由人生……命运由你书写",
    "variantResolution_zh": "远走高飞自由人生……命运由你书写"
  },
  {
    "variantId": "qiyue_xinniang#ending-5",
    "storyId": "qiyue_xinniang",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "qiyue_xinniang#ending-6",
    "storyId": "qiyue_xinniang",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "qiyue_xinniang#ending-7",
    "storyId": "qiyue_xinniang",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "qiyue_xinniang#ending-8",
    "storyId": "qiyue_xinniang",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "quanyuan_eren#ending-1",
    "storyId": "quanyuan_eren",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "血仇得雪",
    "variantResolution_zh": "血仇得雪"
  },
  {
    "variantId": "quanyuan_eren#ending-2",
    "storyId": "quanyuan_eren",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "恶人真情",
    "variantResolution_zh": "恶人真情"
  },
  {
    "variantId": "quanyuan_eren#ending-3",
    "storyId": "quanyuan_eren",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "全员落网",
    "variantResolution_zh": "全员落网"
  },
  {
    "variantId": "quanyuan_eren#ending-4",
    "storyId": "quanyuan_eren",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "功成身退",
    "variantResolution_zh": "功成身退"
  },
  {
    "variantId": "quanyuan_eren#ending-5",
    "storyId": "quanyuan_eren",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "quanyuan_eren#ending-6",
    "storyId": "quanyuan_eren",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "揭穿主谋",
    "variantResolution_zh": "揭穿主谋"
  },
  {
    "variantId": "quanyuan_eren#ending-7",
    "storyId": "quanyuan_eren",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "以恶制恶",
    "variantResolution_zh": "以恶制恶"
  },
  {
    "variantId": "quanyuan_eren#ending-8",
    "storyId": "quanyuan_eren",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "放下释怀……结局",
    "variantResolution_zh": "放下释怀……结局"
  },
  {
    "variantId": "sansheng_jie#ending-1",
    "storyId": "sansheng_jie",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "终成眷属共掌三界",
    "variantResolution_zh": "终成眷属共掌三界"
  },
  {
    "variantId": "sansheng_jie#ending-2",
    "storyId": "sansheng_jie",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "归隐凡尘",
    "variantResolution_zh": "归隐凡尘"
  },
  {
    "variantId": "sansheng_jie#ending-3",
    "storyId": "sansheng_jie",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "以身渡劫",
    "variantResolution_zh": "以身渡劫"
  },
  {
    "variantId": "sansheng_jie#ending-4",
    "storyId": "sansheng_jie",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "厮守永生……命运由你书写",
    "variantResolution_zh": "厮守永生……命运由你书写"
  },
  {
    "variantId": "sansheng_jie#ending-5",
    "storyId": "sansheng_jie",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "sansheng_jie#ending-6",
    "storyId": "sansheng_jie",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "sansheng_jie#ending-7",
    "storyId": "sansheng_jie",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "sansheng_jie#ending-8",
    "storyId": "sansheng_jie",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "shanghai_fengyun#ending-1",
    "storyId": "shanghai_fengyun",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "称霸滩头成传奇",
    "variantResolution_zh": "称霸滩头成传奇"
  },
  {
    "variantId": "shanghai_fengyun#ending-2",
    "storyId": "shanghai_fengyun",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与霍廷舟乱世真情",
    "variantResolution_zh": "与霍廷舟乱世真情"
  },
  {
    "variantId": "shanghai_fengyun#ending-3",
    "storyId": "shanghai_fengyun",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "仇敌一并伏诛",
    "variantResolution_zh": "仇敌一并伏诛"
  },
  {
    "variantId": "shanghai_fengyun#ending-4",
    "storyId": "shanghai_fengyun",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "为父沉冤昭雪",
    "variantResolution_zh": "为父沉冤昭雪"
  },
  {
    "variantId": "shanghai_fengyun#ending-5",
    "storyId": "shanghai_fengyun",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎彼此治愈",
    "variantResolution_zh": "双向救赎彼此治愈"
  },
  {
    "variantId": "shanghai_fengyun#ending-6",
    "storyId": "shanghai_fengyun",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "以实业护一方百姓",
    "variantResolution_zh": "以实业护一方百姓"
  },
  {
    "variantId": "shanghai_fengyun#ending-7",
    "storyId": "shanghai_fengyun",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "连根拔起整个黑帮",
    "variantResolution_zh": "连根拔起整个黑帮"
  },
  {
    "variantId": "shanghai_fengyun#ending-8",
    "storyId": "shanghai_fengyun",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "放下恩怨远走他乡……结局由你的选择书写",
    "variantResolution_zh": "放下恩怨远走他乡……结局由你的选择书写"
  },
  {
    "variantId": "shangmen_jinxiu#ending-1",
    "storyId": "shangmen_jinxiu",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "富甲天下商业帝国",
    "variantResolution_zh": "富甲天下商业帝国"
  },
  {
    "variantId": "shangmen_jinxiu#ending-2",
    "storyId": "shangmen_jinxiu",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "商道良缘喜结连理",
    "variantResolution_zh": "商道良缘喜结连理"
  },
  {
    "variantId": "shangmen_jinxiu#ending-3",
    "storyId": "shangmen_jinxiu",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "沉冤得雪真相大白",
    "variantResolution_zh": "沉冤得雪真相大白"
  },
  {
    "variantId": "shangmen_jinxiu#ending-4",
    "storyId": "shangmen_jinxiu",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "执掌商会一言九鼎",
    "variantResolution_zh": "执掌商会一言九鼎"
  },
  {
    "variantId": "shangmen_jinxiu#ending-5",
    "storyId": "shangmen_jinxiu",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "急流勇退寄情山水",
    "variantResolution_zh": "急流勇退寄情山水"
  },
  {
    "variantId": "shangmen_jinxiu#ending-6",
    "storyId": "shangmen_jinxiu",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "兴商济民泽被乡里",
    "variantResolution_zh": "兴商济民泽被乡里"
  },
  {
    "variantId": "shangmen_jinxiu#ending-7",
    "storyId": "shangmen_jinxiu",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "重振门楣光耀沈家",
    "variantResolution_zh": "重振门楣光耀沈家"
  },
  {
    "variantId": "shangmen_jinxiu#ending-8",
    "storyId": "shangmen_jinxiu",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "放下释怀向阳新生……这场经商嫡女的翻身路",
    "variantResolution_zh": "放下释怀向阳新生……这场经商嫡女的翻身路"
  },
  {
    "variantId": "shangzhan_chongsheng#ending-1",
    "storyId": "shangzhan_chongsheng",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "缔造商业帝国",
    "variantResolution_zh": "缔造商业帝国"
  },
  {
    "variantId": "shangzhan_chongsheng#ending-2",
    "storyId": "shangzhan_chongsheng",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与霍宴携手",
    "variantResolution_zh": "与霍宴携手"
  },
  {
    "variantId": "shangzhan_chongsheng#ending-3",
    "storyId": "shangzhan_chongsheng",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "复仇雪恨",
    "variantResolution_zh": "复仇雪恨"
  },
  {
    "variantId": "shangzhan_chongsheng#ending-4",
    "storyId": "shangzhan_chongsheng",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "急流勇退……命运由你书写",
    "variantResolution_zh": "急流勇退……命运由你书写"
  },
  {
    "variantId": "shangzhan_chongsheng#ending-5",
    "storyId": "shangzhan_chongsheng",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "shangzhan_chongsheng#ending-6",
    "storyId": "shangzhan_chongsheng",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "shangzhan_chongsheng#ending-7",
    "storyId": "shangzhan_chongsheng",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "shangzhan_chongsheng#ending-8",
    "storyId": "shangzhan_chongsheng",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "shanhun_dalao#ending-1",
    "storyId": "shanhun_dalao",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "甜蜜永远",
    "variantResolution_zh": "甜蜜永远"
  },
  {
    "variantId": "shanhun_dalao#ending-2",
    "storyId": "shanhun_dalao",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "比翼齐飞",
    "variantResolution_zh": "比翼齐飞"
  },
  {
    "variantId": "shanhun_dalao#ending-3",
    "storyId": "shanhun_dalao",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "幸福满满",
    "variantResolution_zh": "幸福满满"
  },
  {
    "variantId": "shanhun_dalao#ending-4",
    "storyId": "shanhun_dalao",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "逍遥人生",
    "variantResolution_zh": "逍遥人生"
  },
  {
    "variantId": "shanhun_dalao#ending-5",
    "storyId": "shanhun_dalao",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "灵魂伴侣……命运由你书写",
    "variantResolution_zh": "灵魂伴侣……命运由你书写"
  },
  {
    "variantId": "shanhun_dalao#ending-6",
    "storyId": "shanhun_dalao",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "shanhun_dalao#ending-7",
    "storyId": "shanhun_dalao",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "shanhun_dalao#ending-8",
    "storyId": "shanhun_dalao",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "shanhun_shoufu#ending-1",
    "storyId": "shanhun_shoufu",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "洗清冤屈事业重生",
    "variantResolution_zh": "洗清冤屈事业重生"
  },
  {
    "variantId": "shanhun_shoufu#ending-2",
    "storyId": "shanhun_shoufu",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与霍沉舟真心相许",
    "variantResolution_zh": "与霍沉舟真心相许"
  },
  {
    "variantId": "shanhun_shoufu#ending-3",
    "storyId": "shanhun_shoufu",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "揭穿白绫陈骁阴谋",
    "variantResolution_zh": "揭穿白绫陈骁阴谋"
  },
  {
    "variantId": "shanhun_shoufu#ending-4",
    "storyId": "shanhun_shoufu",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "守护霍家家业…… 命运由你书写",
    "variantResolution_zh": "守护霍家家业…… 命运由你书写"
  },
  {
    "variantId": "shanhun_shoufu#ending-5",
    "storyId": "shanhun_shoufu",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "shanhun_shoufu#ending-6",
    "storyId": "shanhun_shoufu",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "shanhun_shoufu#ending-7",
    "storyId": "shanhun_shoufu",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "shanhun_shoufu#ending-8",
    "storyId": "shanhun_shoufu",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "shaoshuai_furen#ending-1",
    "storyId": "shaoshuai_furen",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "执手天下共定河山",
    "variantResolution_zh": "执手天下共定河山"
  },
  {
    "variantId": "shaoshuai_furen#ending-2",
    "storyId": "shaoshuai_furen",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "乱世真情相守一生",
    "variantResolution_zh": "乱世真情相守一生"
  },
  {
    "variantId": "shaoshuai_furen#ending-3",
    "storyId": "shaoshuai_furen",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "保家卫国名垂青史",
    "variantResolution_zh": "保家卫国名垂青史"
  },
  {
    "variantId": "shaoshuai_furen#ending-4",
    "storyId": "shaoshuai_furen",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "归隐田园岁月静好……命运由你书写",
    "variantResolution_zh": "归隐田园岁月静好……命运由你书写"
  },
  {
    "variantId": "shaoshuai_furen#ending-5",
    "storyId": "shaoshuai_furen",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "shaoshuai_furen#ending-6",
    "storyId": "shaoshuai_furen",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "shaoshuai_furen#ending-7",
    "storyId": "shaoshuai_furen",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "shaoshuai_furen#ending-8",
    "storyId": "shaoshuai_furen",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "shenfen_diaobao#ending-1",
    "storyId": "shenfen_diaobao",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "夺回人生",
    "variantResolution_zh": "夺回人生"
  },
  {
    "variantId": "shenfen_diaobao#ending-2",
    "storyId": "shenfen_diaobao",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "患难真情",
    "variantResolution_zh": "患难真情"
  },
  {
    "variantId": "shenfen_diaobao#ending-3",
    "storyId": "shenfen_diaobao",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "真相大白",
    "variantResolution_zh": "真相大白"
  },
  {
    "variantId": "shenfen_diaobao#ending-4",
    "storyId": "shenfen_diaobao",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "自在人生",
    "variantResolution_zh": "自在人生"
  },
  {
    "variantId": "shenfen_diaobao#ending-5",
    "storyId": "shenfen_diaobao",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "shenfen_diaobao#ending-6",
    "storyId": "shenfen_diaobao",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "揪出同谋",
    "variantResolution_zh": "揪出同谋"
  },
  {
    "variantId": "shenfen_diaobao#ending-7",
    "storyId": "shenfen_diaobao",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "既往不咎",
    "variantResolution_zh": "既往不咎"
  },
  {
    "variantId": "shenfen_diaobao#ending-8",
    "storyId": "shenfen_diaobao",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "平淡是真……结局",
    "variantResolution_zh": "平淡是真……结局"
  },
  {
    "variantId": "shengnv_wushuang#ending-1",
    "storyId": "shengnv_wushuang",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "真神护族万民敬仰",
    "variantResolution_zh": "真神护族万民敬仰"
  },
  {
    "variantId": "shengnv_wushuang#ending-2",
    "storyId": "shengnv_wushuang",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与战神少主相守",
    "variantResolution_zh": "与战神少主相守"
  },
  {
    "variantId": "shengnv_wushuang#ending-3",
    "storyId": "shengnv_wushuang",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "废除活祭恶俗",
    "variantResolution_zh": "废除活祭恶俗"
  },
  {
    "variantId": "shengnv_wushuang#ending-4",
    "storyId": "shengnv_wushuang",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "携手归隐",
    "variantResolution_zh": "携手归隐"
  },
  {
    "variantId": "shengnv_wushuang#ending-5",
    "storyId": "shengnv_wushuang",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "shengnv_wushuang#ending-6",
    "storyId": "shengnv_wushuang",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "教化部族开蒙",
    "variantResolution_zh": "教化部族开蒙"
  },
  {
    "variantId": "shengnv_wushuang#ending-7",
    "storyId": "shengnv_wushuang",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "揪出祭司真凶",
    "variantResolution_zh": "揪出祭司真凶"
  },
  {
    "variantId": "shengnv_wushuang#ending-8",
    "storyId": "shengnv_wushuang",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "魂归现代……命运由你书写",
    "variantResolution_zh": "魂归现代……命运由你书写"
  },
  {
    "variantId": "shenmo_zhilian#ending-1",
    "storyId": "shenmo_zhilian",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "神魔结契",
    "variantResolution_zh": "神魔结契"
  },
  {
    "variantId": "shenmo_zhilian#ending-2",
    "storyId": "shenmo_zhilian",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "三生相守",
    "variantResolution_zh": "三生相守"
  },
  {
    "variantId": "shenmo_zhilian#ending-3",
    "storyId": "shenmo_zhilian",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "化解神魔",
    "variantResolution_zh": "化解神魔"
  },
  {
    "variantId": "shenmo_zhilian#ending-4",
    "storyId": "shenmo_zhilian",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "同归于尽……命运由你书写",
    "variantResolution_zh": "同归于尽……命运由你书写"
  },
  {
    "variantId": "shenmo_zhilian#ending-5",
    "storyId": "shenmo_zhilian",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "shenmo_zhilian#ending-6",
    "storyId": "shenmo_zhilian",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "shenmo_zhilian#ending-7",
    "storyId": "shenmo_zhilian",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "shenmo_zhilian#ending-8",
    "storyId": "shenmo_zhilian",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "shenyi_dinv#ending-1",
    "storyId": "shenyi_dinv",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "杏林之巅执掌太医院",
    "variantResolution_zh": "杏林之巅执掌太医院"
  },
  {
    "variantId": "shenyi_dinv#ending-2",
    "storyId": "shenyi_dinv",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "医道良缘喜结连理",
    "variantResolution_zh": "医道良缘喜结连理"
  },
  {
    "variantId": "shenyi_dinv#ending-3",
    "storyId": "shenyi_dinv",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "血债血偿真凶伏诛",
    "variantResolution_zh": "血债血偿真凶伏诛"
  },
  {
    "variantId": "shenyi_dinv#ending-4",
    "storyId": "shenyi_dinv",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "悬壶济世医者仁心",
    "variantResolution_zh": "悬壶济世医者仁心"
  },
  {
    "variantId": "shenyi_dinv#ending-5",
    "storyId": "shenyi_dinv",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "重振医门杏林世家",
    "variantResolution_zh": "重振医门杏林世家"
  },
  {
    "variantId": "shenyi_dinv#ending-6",
    "storyId": "shenyi_dinv",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "医济天下广设医坊",
    "variantResolution_zh": "医济天下广设医坊"
  },
  {
    "variantId": "shenyi_dinv#ending-7",
    "storyId": "shenyi_dinv",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "连根拔起肃清朝蠹",
    "variantResolution_zh": "连根拔起肃清朝蠹"
  },
  {
    "variantId": "shenyi_dinv#ending-8",
    "storyId": "shenyi_dinv",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "放下释怀向阳新生……这场神医嫡女的翻身路",
    "variantResolution_zh": "放下释怀向阳新生……这场神医嫡女的翻身路"
  },
  {
    "variantId": "shifu_wenxu#ending-1",
    "storyId": "shifu_wenxu",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "温柔以待",
    "variantResolution_zh": "温柔以待"
  },
  {
    "variantId": "shifu_wenxu#ending-2",
    "storyId": "shifu_wenxu",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "薪火相传",
    "variantResolution_zh": "薪火相传"
  },
  {
    "variantId": "shifu_wenxu#ending-3",
    "storyId": "shifu_wenxu",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "喜结连理",
    "variantResolution_zh": "喜结连理"
  },
  {
    "variantId": "shifu_wenxu#ending-4",
    "storyId": "shifu_wenxu",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "shifu_wenxu#ending-5",
    "storyId": "shifu_wenxu",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "事业有成",
    "variantResolution_zh": "事业有成"
  },
  {
    "variantId": "shifu_wenxu#ending-6",
    "storyId": "shifu_wenxu",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "茶香天涯",
    "variantResolution_zh": "茶香天涯"
  },
  {
    "variantId": "shifu_wenxu#ending-7",
    "storyId": "shifu_wenxu",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "一茶一生",
    "variantResolution_zh": "一茶一生"
  },
  {
    "variantId": "shifu_wenxu#ending-8",
    "storyId": "shifu_wenxu",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "茶韵流芳……结局",
    "variantResolution_zh": "茶韵流芳……结局"
  },
  {
    "variantId": "shijian_xunhuan#ending-1",
    "storyId": "shijian_xunhuan",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "打破循环救回妹妹",
    "variantResolution_zh": "打破循环救回妹妹"
  },
  {
    "variantId": "shijian_xunhuan#ending-2",
    "storyId": "shijian_xunhuan",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与刑警并肩余生",
    "variantResolution_zh": "与刑警并肩余生"
  },
  {
    "variantId": "shijian_xunhuan#ending-3",
    "storyId": "shijian_xunhuan",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "真凶帮凶伏法",
    "variantResolution_zh": "真凶帮凶伏法"
  },
  {
    "variantId": "shijian_xunhuan#ending-4",
    "storyId": "shijian_xunhuan",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "以身相代",
    "variantResolution_zh": "以身相代"
  },
  {
    "variantId": "shijian_xunhuan#ending-5",
    "storyId": "shijian_xunhuan",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "揭穿连环旧案…… 命运由你书写",
    "variantResolution_zh": "揭穿连环旧案…… 命运由你书写"
  },
  {
    "variantId": "shijian_xunhuan#ending-6",
    "storyId": "shijian_xunhuan",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "shijian_xunhuan#ending-7",
    "storyId": "shijian_xunhuan",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "shijian_xunhuan#ending-8",
    "storyId": "shijian_xunhuan",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "shitu_jinlian#ending-1",
    "storyId": "shitu_jinlian",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "师徒终成眷属",
    "variantResolution_zh": "师徒终成眷属"
  },
  {
    "variantId": "shitu_jinlian#ending-2",
    "storyId": "shitu_jinlian",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "双修飞升",
    "variantResolution_zh": "双修飞升"
  },
  {
    "variantId": "shitu_jinlian#ending-3",
    "storyId": "shitu_jinlian",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "携手归隐",
    "variantResolution_zh": "携手归隐"
  },
  {
    "variantId": "shitu_jinlian#ending-4",
    "storyId": "shitu_jinlian",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "共抗魔教……命运由你书写",
    "variantResolution_zh": "共抗魔教……命运由你书写"
  },
  {
    "variantId": "shitu_jinlian#ending-5",
    "storyId": "shitu_jinlian",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "shitu_jinlian#ending-6",
    "storyId": "shitu_jinlian",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "shitu_jinlian#ending-7",
    "storyId": "shitu_jinlian",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "shitu_jinlian#ending-8",
    "storyId": "shitu_jinlian",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "shoushi_cixing#ending-1",
    "storyId": "shoushi_cixing",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "成为兽王之妻",
    "variantResolution_zh": "成为兽王之妻"
  },
  {
    "variantId": "shoushi_cixing#ending-2",
    "storyId": "shoushi_cixing",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "部落女神",
    "variantResolution_zh": "部落女神"
  },
  {
    "variantId": "shoushi_cixing#ending-3",
    "storyId": "shoushi_cixing",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "携手归隐",
    "variantResolution_zh": "携手归隐"
  },
  {
    "variantId": "shoushi_cixing#ending-4",
    "storyId": "shoushi_cixing",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "智斗群兽……命运由你书写",
    "variantResolution_zh": "智斗群兽……命运由你书写"
  },
  {
    "variantId": "shoushi_cixing#ending-5",
    "storyId": "shoushi_cixing",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "shoushi_cixing#ending-6",
    "storyId": "shoushi_cixing",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "shoushi_cixing#ending-7",
    "storyId": "shoushi_cixing",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "shoushi_cixing#ending-8",
    "storyId": "shoushi_cixing",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "shuangchong#ending-1",
    "storyId": "shuangchong",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "shuangchong#ending-2",
    "storyId": "shuangchong",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "shuangchong#ending-3",
    "storyId": "shuangchong",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "shuangchong#ending-4",
    "storyId": "shuangchong",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "shuangchong#ending-5",
    "storyId": "shuangchong",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "shuangchong#ending-6",
    "storyId": "shuangchong",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "shuangchong#ending-7",
    "storyId": "shuangchong",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "shuangchong#ending-8",
    "storyId": "shuangchong",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "shuangmian_rensheng#ending-1",
    "storyId": "shuangmian_rensheng",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "姐姐沉冤得雪",
    "variantResolution_zh": "姐姐沉冤得雪"
  },
  {
    "variantId": "shuangmian_rensheng#ending-2",
    "storyId": "shuangmian_rensheng",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与顾时坦诚相守",
    "variantResolution_zh": "与顾时坦诚相守"
  },
  {
    "variantId": "shuangmian_rensheng#ending-3",
    "storyId": "shuangmian_rensheng",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "幕后黑手入狱",
    "variantResolution_zh": "幕后黑手入狱"
  },
  {
    "variantId": "shuangmian_rensheng#ending-4",
    "storyId": "shuangmian_rensheng",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "失踪的姐姐竟还活着",
    "variantResolution_zh": "失踪的姐姐竟还活着"
  },
  {
    "variantId": "shuangmian_rensheng#ending-5",
    "storyId": "shuangmian_rensheng",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎彼此治愈",
    "variantResolution_zh": "双向救赎彼此治愈"
  },
  {
    "variantId": "shuangmian_rensheng#ending-6",
    "storyId": "shuangmian_rensheng",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "卸下伪装做回自己",
    "variantResolution_zh": "卸下伪装做回自己"
  },
  {
    "variantId": "shuangmian_rensheng#ending-7",
    "storyId": "shuangmian_rensheng",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "连根拔起整个黑幕",
    "variantResolution_zh": "连根拔起整个黑幕"
  },
  {
    "variantId": "shuangmian_rensheng#ending-8",
    "storyId": "shuangmian_rensheng",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "真相之后释然前行……结局由你的选择书写",
    "variantResolution_zh": "真相之后释然前行……结局由你的选择书写"
  },
  {
    "variantId": "shuangqiang_qifeng#ending-1",
    "storyId": "shuangqiang_qifeng",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "shuangqiang_qifeng#ending-2",
    "storyId": "shuangqiang_qifeng",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "shuangqiang_qifeng#ending-3",
    "storyId": "shuangqiang_qifeng",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "shuangqiang_qifeng#ending-4",
    "storyId": "shuangqiang_qifeng",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "shuangqiang_qifeng#ending-5",
    "storyId": "shuangqiang_qifeng",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "shuangqiang_qifeng#ending-6",
    "storyId": "shuangqiang_qifeng",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "shuangqiang_qifeng#ending-7",
    "storyId": "shuangqiang_qifeng",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "shuangqiang_qifeng#ending-8",
    "storyId": "shuangqiang_qifeng",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "shunv_nixi#ending-1",
    "storyId": "shunv_nixi",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "执掌相府",
    "variantResolution_zh": "执掌相府"
  },
  {
    "variantId": "shunv_nixi#ending-2",
    "storyId": "shunv_nixi",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与王爷携手",
    "variantResolution_zh": "与王爷携手"
  },
  {
    "variantId": "shunv_nixi#ending-3",
    "storyId": "shunv_nixi",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "嫡庶翻转",
    "variantResolution_zh": "嫡庶翻转"
  },
  {
    "variantId": "shunv_nixi#ending-4",
    "storyId": "shunv_nixi",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "自立门户……命运由你书写",
    "variantResolution_zh": "自立门户……命运由你书写"
  },
  {
    "variantId": "shunv_nixi#ending-5",
    "storyId": "shunv_nixi",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "shunv_nixi#ending-6",
    "storyId": "shunv_nixi",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "shunv_nixi#ending-7",
    "storyId": "shunv_nixi",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "shunv_nixi#ending-8",
    "storyId": "shunv_nixi",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "taihou_chuilian#ending-1",
    "storyId": "taihou_chuilian",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "还政明君功成身退",
    "variantResolution_zh": "还政明君功成身退"
  },
  {
    "variantId": "taihou_chuilian#ending-2",
    "storyId": "taihou_chuilian",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "太后摄政凤掌乾坤",
    "variantResolution_zh": "太后摄政凤掌乾坤"
  },
  {
    "variantId": "taihou_chuilian#ending-3",
    "storyId": "taihou_chuilian",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "严惩逆党血债血偿",
    "variantResolution_zh": "严惩逆党血债血偿"
  },
  {
    "variantId": "taihou_chuilian#ending-4",
    "storyId": "taihou_chuilian",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "急流勇退撤帘归隐",
    "variantResolution_zh": "急流勇退撤帘归隐"
  },
  {
    "variantId": "taihou_chuilian#ending-5",
    "storyId": "taihou_chuilian",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "母子情深相依为命",
    "variantResolution_zh": "母子情深相依为命"
  },
  {
    "variantId": "taihou_chuilian#ending-6",
    "storyId": "taihou_chuilian",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "仁政安邦泽被苍生",
    "variantResolution_zh": "仁政安邦泽被苍生"
  },
  {
    "variantId": "taihou_chuilian#ending-7",
    "storyId": "taihou_chuilian",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "铁腕女主乾纲独断",
    "variantResolution_zh": "铁腕女主乾纲独断"
  },
  {
    "variantId": "taihou_chuilian#ending-8",
    "storyId": "taihou_chuilian",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "放下释怀向阳而生……这位垂帘太后的命运",
    "variantResolution_zh": "放下释怀向阳而生……这位垂帘太后的命运"
  },
  {
    "variantId": "tishen_qingren#ending-1",
    "storyId": "tishen_qingren",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "tishen_qingren#ending-2",
    "storyId": "tishen_qingren",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "tishen_qingren#ending-3",
    "storyId": "tishen_qingren",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "tishen_qingren#ending-4",
    "storyId": "tishen_qingren",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "tishen_qingren#ending-5",
    "storyId": "tishen_qingren",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "tishen_qingren#ending-6",
    "storyId": "tishen_qingren",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "tishen_qingren#ending-7",
    "storyId": "tishen_qingren",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "tishen_qingren#ending-8",
    "storyId": "tishen_qingren",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "tongzhuo_luchi#ending-1",
    "storyId": "tongzhuo_luchi",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "同桌情深",
    "variantResolution_zh": "同桌情深"
  },
  {
    "variantId": "tongzhuo_luchi#ending-2",
    "storyId": "tongzhuo_luchi",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "比翼齐飞",
    "variantResolution_zh": "比翼齐飞"
  },
  {
    "variantId": "tongzhuo_luchi#ending-3",
    "storyId": "tongzhuo_luchi",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "一生不负",
    "variantResolution_zh": "一生不负"
  },
  {
    "variantId": "tongzhuo_luchi#ending-4",
    "storyId": "tongzhuo_luchi",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "终成眷属",
    "variantResolution_zh": "终成眷属"
  },
  {
    "variantId": "tongzhuo_luchi#ending-5",
    "storyId": "tongzhuo_luchi",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "tongzhuo_luchi#ending-6",
    "storyId": "tongzhuo_luchi",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "事业有成",
    "variantResolution_zh": "事业有成"
  },
  {
    "variantId": "tongzhuo_luchi#ending-7",
    "storyId": "tongzhuo_luchi",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "岁月静好",
    "variantResolution_zh": "岁月静好"
  },
  {
    "variantId": "tongzhuo_luchi#ending-8",
    "storyId": "tongzhuo_luchi",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "自在相伴……结局",
    "variantResolution_zh": "自在相伴……结局"
  },
  {
    "variantId": "weihun_tongju#ending-1",
    "storyId": "weihun_tongju",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "未婚同居",
    "variantResolution_zh": "未婚同居"
  },
  {
    "variantId": "weihun_tongju#ending-2",
    "storyId": "weihun_tongju",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "比翼齐飞",
    "variantResolution_zh": "比翼齐飞"
  },
  {
    "variantId": "weihun_tongju#ending-3",
    "storyId": "weihun_tongju",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "终成眷属",
    "variantResolution_zh": "终成眷属"
  },
  {
    "variantId": "weihun_tongju#ending-4",
    "storyId": "weihun_tongju",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "weihun_tongju#ending-5",
    "storyId": "weihun_tongju",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "岁月静好",
    "variantResolution_zh": "岁月静好"
  },
  {
    "variantId": "weihun_tongju#ending-6",
    "storyId": "weihun_tongju",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "浪迹天涯",
    "variantResolution_zh": "浪迹天涯"
  },
  {
    "variantId": "weihun_tongju#ending-7",
    "storyId": "weihun_tongju",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "事业有成",
    "variantResolution_zh": "事业有成"
  },
  {
    "variantId": "weihun_tongju#ending-8",
    "storyId": "weihun_tongju",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "梦想之家……结局",
    "variantResolution_zh": "梦想之家……结局"
  },
  {
    "variantId": "wuxian_qiusheng#ending-1",
    "storyId": "wuxian_qiusheng",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "摧毁游戏重获自由",
    "variantResolution_zh": "摧毁游戏重获自由"
  },
  {
    "variantId": "wuxian_qiusheng#ending-2",
    "storyId": "wuxian_qiusheng",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与队友患难真情",
    "variantResolution_zh": "与队友患难真情"
  },
  {
    "variantId": "wuxian_qiusheng#ending-3",
    "storyId": "wuxian_qiusheng",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "成为守护者救人",
    "variantResolution_zh": "成为守护者救人"
  },
  {
    "variantId": "wuxian_qiusheng#ending-4",
    "storyId": "wuxian_qiusheng",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "揭穿主宰阴谋……命运由你书写",
    "variantResolution_zh": "揭穿主宰阴谋……命运由你书写"
  },
  {
    "variantId": "wuxian_qiusheng#ending-5",
    "storyId": "wuxian_qiusheng",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "wuxian_qiusheng#ending-6",
    "storyId": "wuxian_qiusheng",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "wuxian_qiusheng#ending-7",
    "storyId": "wuxian_qiusheng",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "wuxian_qiusheng#ending-8",
    "storyId": "wuxian_qiusheng",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "xianzun_xiafan#ending-1",
    "storyId": "xianzun_xiafan",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "xianzun_xiafan#ending-2",
    "storyId": "xianzun_xiafan",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "xianzun_xiafan#ending-3",
    "storyId": "xianzun_xiafan",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "xianzun_xiafan#ending-4",
    "storyId": "xianzun_xiafan",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "xianzun_xiafan#ending-5",
    "storyId": "xianzun_xiafan",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "xianzun_xiafan#ending-6",
    "storyId": "xianzun_xiafan",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "xianzun_xiafan#ending-7",
    "storyId": "xianzun_xiafan",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "xianzun_xiafan#ending-8",
    "storyId": "xianzun_xiafan",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "xiaojiao_jiangtang#ending-1",
    "storyId": "xiaojiao_jiangtang",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "心尖独宠",
    "variantResolution_zh": "心尖独宠"
  },
  {
    "variantId": "xiaojiao_jiangtang#ending-2",
    "storyId": "xiaojiao_jiangtang",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "比翼双飞",
    "variantResolution_zh": "比翼双飞"
  },
  {
    "variantId": "xiaojiao_jiangtang#ending-3",
    "storyId": "xiaojiao_jiangtang",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "阖家欢乐",
    "variantResolution_zh": "阖家欢乐"
  },
  {
    "variantId": "xiaojiao_jiangtang#ending-4",
    "storyId": "xiaojiao_jiangtang",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "xiaojiao_jiangtang#ending-5",
    "storyId": "xiaojiao_jiangtang",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "平凡是福",
    "variantResolution_zh": "平凡是福"
  },
  {
    "variantId": "xiaojiao_jiangtang#ending-6",
    "storyId": "xiaojiao_jiangtang",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "事业有成",
    "variantResolution_zh": "事业有成"
  },
  {
    "variantId": "xiaojiao_jiangtang#ending-7",
    "storyId": "xiaojiao_jiangtang",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "阖家温暖",
    "variantResolution_zh": "阖家温暖"
  },
  {
    "variantId": "xiaojiao_jiangtang#ending-8",
    "storyId": "xiaojiao_jiangtang",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "自在相伴……结局",
    "variantResolution_zh": "自在相伴……结局"
  },
  {
    "variantId": "xiaoyuan_chulian#ending-1",
    "storyId": "xiaoyuan_chulian",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "青涩初恋",
    "variantResolution_zh": "青涩初恋"
  },
  {
    "variantId": "xiaoyuan_chulian#ending-2",
    "storyId": "xiaoyuan_chulian",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "携手考学",
    "variantResolution_zh": "携手考学"
  },
  {
    "variantId": "xiaoyuan_chulian#ending-3",
    "storyId": "xiaoyuan_chulian",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "异地坚守",
    "variantResolution_zh": "异地坚守"
  },
  {
    "variantId": "xiaoyuan_chulian#ending-4",
    "storyId": "xiaoyuan_chulian",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "校园甜恋……命运由你书写",
    "variantResolution_zh": "校园甜恋……命运由你书写"
  },
  {
    "variantId": "xiaoyuan_chulian#ending-5",
    "storyId": "xiaoyuan_chulian",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "xiaoyuan_chulian#ending-6",
    "storyId": "xiaoyuan_chulian",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "xiaoyuan_chulian#ending-7",
    "storyId": "xiaoyuan_chulian",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "xiaoyuan_chulian#ending-8",
    "storyId": "xiaoyuan_chulian",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "xingzhen_poan#ending-1",
    "storyId": "xingzhen_poan",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "真凶落网",
    "variantResolution_zh": "真凶落网"
  },
  {
    "variantId": "xingzhen_poan#ending-2",
    "storyId": "xingzhen_poan",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "患难真情",
    "variantResolution_zh": "患难真情"
  },
  {
    "variantId": "xingzhen_poan#ending-3",
    "storyId": "xingzhen_poan",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "守护正义",
    "variantResolution_zh": "守护正义"
  },
  {
    "variantId": "xingzhen_poan#ending-4",
    "storyId": "xingzhen_poan",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "揪出内鬼……命运由你书写",
    "variantResolution_zh": "揪出内鬼……命运由你书写"
  },
  {
    "variantId": "xingzhen_poan#ending-5",
    "storyId": "xingzhen_poan",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "xingzhen_poan#ending-6",
    "storyId": "xingzhen_poan",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "xingzhen_poan#ending-7",
    "storyId": "xingzhen_poan",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "xingzhen_poan#ending-8",
    "storyId": "xingzhen_poan",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "xiuxian_nixi#ending-1",
    "storyId": "xiuxian_nixi",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "登顶仙路成就大道",
    "variantResolution_zh": "登顶仙路成就大道"
  },
  {
    "variantId": "xiuxian_nixi#ending-2",
    "storyId": "xiuxian_nixi",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与剑修携手双宿双飞",
    "variantResolution_zh": "与剑修携手双宿双飞"
  },
  {
    "variantId": "xiuxian_nixi#ending-3",
    "storyId": "xiuxian_nixi",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "仇敌伏诛沉冤得雪",
    "variantResolution_zh": "仇敌伏诛沉冤得雪"
  },
  {
    "variantId": "xiuxian_nixi#ending-4",
    "storyId": "xiuxian_nixi",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "归隐山林逍遥自在……命运由你书写",
    "variantResolution_zh": "归隐山林逍遥自在……命运由你书写"
  },
  {
    "variantId": "xiuxian_nixi#ending-5",
    "storyId": "xiuxian_nixi",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "xiuxian_nixi#ending-6",
    "storyId": "xiuxian_nixi",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "xiuxian_nixi#ending-7",
    "storyId": "xiuxian_nixi",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "xiuxian_nixi#ending-8",
    "storyId": "xiuxian_nixi",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "yeshanghai_guyan#ending-1",
    "storyId": "yeshanghai_guyan",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "雁过留声",
    "variantResolution_zh": "雁过留声"
  },
  {
    "variantId": "yeshanghai_guyan#ending-2",
    "storyId": "yeshanghai_guyan",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "孤雁北归",
    "variantResolution_zh": "孤雁北归"
  },
  {
    "variantId": "yeshanghai_guyan#ending-3",
    "storyId": "yeshanghai_guyan",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "玉石俱焚",
    "variantResolution_zh": "玉石俱焚"
  },
  {
    "variantId": "yeshanghai_guyan#ending-4",
    "storyId": "yeshanghai_guyan",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "暗度陈仓",
    "variantResolution_zh": "暗度陈仓"
  },
  {
    "variantId": "yeshanghai_guyan#ending-5",
    "storyId": "yeshanghai_guyan",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "长夜未央……命运由你书写",
    "variantResolution_zh": "长夜未央……命运由你书写"
  },
  {
    "variantId": "yeshanghai_guyan#ending-6",
    "storyId": "yeshanghai_guyan",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "yeshanghai_guyan#ending-7",
    "storyId": "yeshanghai_guyan",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "yeshanghai_guyan#ending-8",
    "storyId": "yeshanghai_guyan",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "yinhun_zongcai#ending-1",
    "storyId": "yinhun_zongcai",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "隐婚转真爱",
    "variantResolution_zh": "隐婚转真爱"
  },
  {
    "variantId": "yinhun_zongcai#ending-2",
    "storyId": "yinhun_zongcai",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "携手事业",
    "variantResolution_zh": "携手事业"
  },
  {
    "variantId": "yinhun_zongcai#ending-3",
    "storyId": "yinhun_zongcai",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "甜蜜公开",
    "variantResolution_zh": "甜蜜公开"
  },
  {
    "variantId": "yinhun_zongcai#ending-4",
    "storyId": "yinhun_zongcai",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "揭穿白月光……命运由你书写",
    "variantResolution_zh": "揭穿白月光……命运由你书写"
  },
  {
    "variantId": "yinhun_zongcai#ending-5",
    "storyId": "yinhun_zongcai",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "yinhun_zongcai#ending-6",
    "storyId": "yinhun_zongcai",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "yinhun_zongcai#ending-7",
    "storyId": "yinhun_zongcai",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "yinhun_zongcai#ending-8",
    "storyId": "yinhun_zongcai",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "yipin_branch#ending-1",
    "storyId": "yipin_branch",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "yipin_branch#ending-2",
    "storyId": "yipin_branch",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "yipin_branch#ending-3",
    "storyId": "yipin_branch",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "yipin_branch#ending-4",
    "storyId": "yipin_branch",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "yipin_branch#ending-5",
    "storyId": "yipin_branch",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "yipin_branch#ending-6",
    "storyId": "yipin_branch",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "yipin_branch#ending-7",
    "storyId": "yipin_branch",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "yipin_branch#ending-8",
    "storyId": "yipin_branch",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "yisheng_tiancai#ending-1",
    "storyId": "yisheng_tiancai",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "yisheng_tiancai#ending-2",
    "storyId": "yisheng_tiancai",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "yisheng_tiancai#ending-3",
    "storyId": "yisheng_tiancai",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "yisheng_tiancai#ending-4",
    "storyId": "yisheng_tiancai",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "yisheng_tiancai#ending-5",
    "storyId": "yisheng_tiancai",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "yisheng_tiancai#ending-6",
    "storyId": "yisheng_tiancai",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "yisheng_tiancai#ending-7",
    "storyId": "yisheng_tiancai",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "yisheng_tiancai#ending-8",
    "storyId": "yisheng_tiancai",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "yixiang_suzhi#ending-1",
    "storyId": "yixiang_suzhi",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "医香乱世",
    "variantResolution_zh": "医香乱世"
  },
  {
    "variantId": "yixiang_suzhi#ending-2",
    "storyId": "yixiang_suzhi",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "仁医典范",
    "variantResolution_zh": "仁医典范"
  },
  {
    "variantId": "yixiang_suzhi#ending-3",
    "storyId": "yixiang_suzhi",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "薪火相传",
    "variantResolution_zh": "薪火相传"
  },
  {
    "variantId": "yixiang_suzhi#ending-4",
    "storyId": "yixiang_suzhi",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "岁月静好",
    "variantResolution_zh": "岁月静好"
  },
  {
    "variantId": "yixiang_suzhi#ending-5",
    "storyId": "yixiang_suzhi",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "yixiang_suzhi#ending-6",
    "storyId": "yixiang_suzhi",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "医典传世",
    "variantResolution_zh": "医典传世"
  },
  {
    "variantId": "yixiang_suzhi#ending-7",
    "storyId": "yixiang_suzhi",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "大医精诚",
    "variantResolution_zh": "大医精诚"
  },
  {
    "variantId": "yixiang_suzhi#ending-8",
    "storyId": "yixiang_suzhi",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "自在相伴……结局",
    "variantResolution_zh": "自在相伴……结局"
  },
  {
    "variantId": "yiyu_heyuan#ending-1",
    "storyId": "yiyu_heyuan",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "执掌王庭母仪西域",
    "variantResolution_zh": "执掌王庭母仪西域"
  },
  {
    "variantId": "yiyu_heyuan#ending-2",
    "storyId": "yiyu_heyuan",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与西域王相守",
    "variantResolution_zh": "与西域王相守"
  },
  {
    "variantId": "yiyu_heyuan#ending-3",
    "storyId": "yiyu_heyuan",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "两国通好",
    "variantResolution_zh": "两国通好"
  },
  {
    "variantId": "yiyu_heyuan#ending-4",
    "storyId": "yiyu_heyuan",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "携手归隐",
    "variantResolution_zh": "携手归隐"
  },
  {
    "variantId": "yiyu_heyuan#ending-5",
    "storyId": "yiyu_heyuan",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "yiyu_heyuan#ending-6",
    "storyId": "yiyu_heyuan",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "兴商富民",
    "variantResolution_zh": "兴商富民"
  },
  {
    "variantId": "yiyu_heyuan#ending-7",
    "storyId": "yiyu_heyuan",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "平定叛乱",
    "variantResolution_zh": "平定叛乱"
  },
  {
    "variantId": "yiyu_heyuan#ending-8",
    "storyId": "yiyu_heyuan",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "魂归现代……命运由你书写",
    "variantResolution_zh": "魂归现代……命运由你书写"
  },
  {
    "variantId": "yujie_zongcai#ending-1",
    "storyId": "yujie_zongcai",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "yujie_zongcai#ending-2",
    "storyId": "yujie_zongcai",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "yujie_zongcai#ending-3",
    "storyId": "yujie_zongcai",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "yujie_zongcai#ending-4",
    "storyId": "yujie_zongcai",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "yujie_zongcai#ending-5",
    "storyId": "yujie_zongcai",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "yujie_zongcai#ending-6",
    "storyId": "yujie_zongcai",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "yujie_zongcai#ending-7",
    "storyId": "yujie_zongcai",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "yujie_zongcai#ending-8",
    "storyId": "yujie_zongcai",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "zhaidou_chongsheng#ending-1",
    "storyId": "zhaidou_chongsheng",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "zhaidou_chongsheng#ending-2",
    "storyId": "zhaidou_chongsheng",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "zhaidou_chongsheng#ending-3",
    "storyId": "zhaidou_chongsheng",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "zhaidou_chongsheng#ending-4",
    "storyId": "zhaidou_chongsheng",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "zhaidou_chongsheng#ending-5",
    "storyId": "zhaidou_chongsheng",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "zhaidou_chongsheng#ending-6",
    "storyId": "zhaidou_chongsheng",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "zhaidou_chongsheng#ending-7",
    "storyId": "zhaidou_chongsheng",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "zhaidou_chongsheng#ending-8",
    "storyId": "zhaidou_chongsheng",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "zhedan_zhenqinsong#ending-1",
    "storyId": "zhedan_zhenqinsong",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "帝御同心并肩治国",
    "variantResolution_zh": "帝御同心并肩治国"
  },
  {
    "variantId": "zhedan_zhenqinsong#ending-2",
    "storyId": "zhedan_zhenqinsong",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "微服人间归隐市井",
    "variantResolution_zh": "微服人间归隐市井"
  },
  {
    "variantId": "zhedan_zhenqinsong#ending-3",
    "storyId": "zhedan_zhenqinsong",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "一骑双城白日理朝凌晨送单（含下季钩子）",
    "variantResolution_zh": "一骑双城白日理朝凌晨送单（含下季钩子）"
  },
  {
    "variantId": "zhenjia_qianjin#ending-1",
    "storyId": "zhenjia_qianjin",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "真千金归位",
    "variantResolution_zh": "真千金归位"
  },
  {
    "variantId": "zhenjia_qianjin#ending-2",
    "storyId": "zhenjia_qianjin",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "与陆庭深携手",
    "variantResolution_zh": "与陆庭深携手"
  },
  {
    "variantId": "zhenjia_qianjin#ending-3",
    "storyId": "zhenjia_qianjin",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "事业封神",
    "variantResolution_zh": "事业封神"
  },
  {
    "variantId": "zhenjia_qianjin#ending-4",
    "storyId": "zhenjia_qianjin",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "揭穿假千金……命运由你书写",
    "variantResolution_zh": "揭穿假千金……命运由你书写"
  },
  {
    "variantId": "zhenjia_qianjin#ending-5",
    "storyId": "zhenjia_qianjin",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "zhenjia_qianjin#ending-6",
    "storyId": "zhenjia_qianjin",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "zhenjia_qianjin#ending-7",
    "storyId": "zhenjia_qianjin",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "zhenjia_qianjin#ending-8",
    "storyId": "zhenjia_qianjin",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "zhichang_zuoxi#ending-1",
    "storyId": "zhichang_zuoxi",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "zhichang_zuoxi#ending-2",
    "storyId": "zhichang_zuoxi",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "zhichang_zuoxi#ending-3",
    "storyId": "zhichang_zuoxi",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "zhichang_zuoxi#ending-4",
    "storyId": "zhichang_zuoxi",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "zhichang_zuoxi#ending-5",
    "storyId": "zhichang_zuoxi",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "zhichang_zuoxi#ending-6",
    "storyId": "zhichang_zuoxi",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "zhichang_zuoxi#ending-7",
    "storyId": "zhichang_zuoxi",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "zhichang_zuoxi#ending-8",
    "storyId": "zhichang_zuoxi",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "zhizi_huangnv#ending-1",
    "storyId": "zhizi_huangnv",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "凤归故国",
    "variantResolution_zh": "凤归故国"
  },
  {
    "variantId": "zhizi_huangnv#ending-2",
    "storyId": "zhizi_huangnv",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "留燕为后",
    "variantResolution_zh": "留燕为后"
  },
  {
    "variantId": "zhizi_huangnv#ending-3",
    "storyId": "zhizi_huangnv",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "两国止戈",
    "variantResolution_zh": "两国止戈"
  },
  {
    "variantId": "zhizi_huangnv#ending-4",
    "storyId": "zhizi_huangnv",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "弃子翻身",
    "variantResolution_zh": "弃子翻身"
  },
  {
    "variantId": "zhizi_huangnv#ending-5",
    "storyId": "zhizi_huangnv",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "双向救赎",
    "variantResolution_zh": "双向救赎"
  },
  {
    "variantId": "zhizi_huangnv#ending-6",
    "storyId": "zhizi_huangnv",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "凤主格局",
    "variantResolution_zh": "凤主格局"
  },
  {
    "variantId": "zhizi_huangnv#ending-7",
    "storyId": "zhizi_huangnv",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "太子伏诛",
    "variantResolution_zh": "太子伏诛"
  },
  {
    "variantId": "zhizi_huangnv#ending-8",
    "storyId": "zhizi_huangnv",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "逍遥江湖……命运由你书写",
    "variantResolution_zh": "逍遥江湖……命运由你书写"
  },
  {
    "variantId": "zhuanshi_chongfeng#ending-1",
    "storyId": "zhuanshi_chongfeng",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "Ending 1",
    "variantResolution_zh": "Ending 1"
  },
  {
    "variantId": "zhuanshi_chongfeng#ending-2",
    "storyId": "zhuanshi_chongfeng",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "Ending 2",
    "variantResolution_zh": "Ending 2"
  },
  {
    "variantId": "zhuanshi_chongfeng#ending-3",
    "storyId": "zhuanshi_chongfeng",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "Ending 3",
    "variantResolution_zh": "Ending 3"
  },
  {
    "variantId": "zhuanshi_chongfeng#ending-4",
    "storyId": "zhuanshi_chongfeng",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "Ending 4",
    "variantResolution_zh": "Ending 4"
  },
  {
    "variantId": "zhuanshi_chongfeng#ending-5",
    "storyId": "zhuanshi_chongfeng",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "zhuanshi_chongfeng#ending-6",
    "storyId": "zhuanshi_chongfeng",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "zhuanshi_chongfeng#ending-7",
    "storyId": "zhuanshi_chongfeng",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "zhuanshi_chongfeng#ending-8",
    "storyId": "zhuanshi_chongfeng",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  },
  {
    "variantId": "zhuiqi_huozang#ending-1",
    "storyId": "zhuiqi_huozang",
    "variantType": "ending",
    "variantIndex": 1,
    "variantLabel_zh": "破镜重圆",
    "variantResolution_zh": "破镜重圆"
  },
  {
    "variantId": "zhuiqi_huozang#ending-2",
    "storyId": "zhuiqi_huozang",
    "variantType": "ending",
    "variantIndex": 2,
    "variantLabel_zh": "转身遇真爱",
    "variantResolution_zh": "转身遇真爱"
  },
  {
    "variantId": "zhuiqi_huozang#ending-3",
    "storyId": "zhuiqi_huozang",
    "variantType": "ending",
    "variantIndex": 3,
    "variantLabel_zh": "事业封神",
    "variantResolution_zh": "事业封神"
  },
  {
    "variantId": "zhuiqi_huozang#ending-4",
    "storyId": "zhuiqi_huozang",
    "variantType": "ending",
    "variantIndex": 4,
    "variantLabel_zh": "自由人生……命运由你书写",
    "variantResolution_zh": "自由人生……命运由你书写"
  },
  {
    "variantId": "zhuiqi_huozang#ending-5",
    "storyId": "zhuiqi_huozang",
    "variantType": "ending",
    "variantIndex": 5,
    "variantLabel_zh": "Ending 5",
    "variantResolution_zh": "Ending 5"
  },
  {
    "variantId": "zhuiqi_huozang#ending-6",
    "storyId": "zhuiqi_huozang",
    "variantType": "ending",
    "variantIndex": 6,
    "variantLabel_zh": "Ending 6",
    "variantResolution_zh": "Ending 6"
  },
  {
    "variantId": "zhuiqi_huozang#ending-7",
    "storyId": "zhuiqi_huozang",
    "variantType": "ending",
    "variantIndex": 7,
    "variantLabel_zh": "Ending 7",
    "variantResolution_zh": "Ending 7"
  },
  {
    "variantId": "zhuiqi_huozang#ending-8",
    "storyId": "zhuiqi_huozang",
    "variantType": "ending",
    "variantIndex": 8,
    "variantLabel_zh": "Ending 8",
    "variantResolution_zh": "Ending 8"
  }
] as const
