// @generated — DO NOT EDIT. Regenerate via `python3 scripts/build_corpus.py`.

import type { StoryRecord, VariantInstance } from '@/lib/corpus-types'

export const BRANCH_DRAMA_STORIES: StoryRecord[] = [
  {
    "id": "beast",
    "storyType": "branch-drama",
    "title_zh": "第七声钟响",
    "title_en": "",
    "genre": "怪兽末路 · 独身猎杀",
    "tagline": "守钟人沈砚困在废弃钟楼里，楼下是一头认声辨位的巨兽。铜钟、钟绳、信号枪，是他仅有的三样东西——最后一声钟响时，只能活一个。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "怪兽末路",
    "familyKey": "monster-apocalypse",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 2,
    "characterCount": 2,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "废弃钟楼顶层钟室",
        "triggerConstraint_zh": "方形砖砌塔室，正中木钟架吊着一口两人高的铜钟，四面各开一个无窗框的方形窗洞，头顶纵横三根粗横梁，其中一根从榫头处裂开，木楼板缝隙里积着厚厚的灰，一侧是通往下层的",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "钟楼前碎石广场",
        "triggerConstraint_zh": "塔基外一片铺满碎石的开阔空地，中央立着两座残缺的方形石墩，一侧是塌了半截的砖砌断墙，地面嵌着一块被压裂的界碑，碎石堆间散着断裂的铁皮与椽木，尽头是几条窄巷的入口",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈砚",
        "functionSummary_zh": "二十七岁男性守钟人，短硬寸发额角一道旧疤，穿磨白的深灰工装外套与护腕，肩背绷得很直，腰后别着一支铜壳信号枪，右手虎口有一层常年拉绳磨出的厚茧"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "巨兽",
        "functionSummary_zh": "四足巨兽，体长逾十米，灰黑皮革状厚皮上覆满石痂与旧裂痕，脊背隆起两排骨刺，前肢粗过磨盘，面部只有一只独眼，眼窝周围一圈焦黑的旧伤"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "高光比影调，铁灰石色与铜锈暖褐为底，暗部沉实，高光不过曝，光线在画面内自然过渡，整体色调统一",
      "protagonist": "沈砚",
      "antagonist": "ENVIRONMENTAL",
      "centralConflict": "守钟人沈砚困在废弃钟楼里，楼下是一头认声辨位的巨兽。铜钟、钟绳、信号枪，是他仅有的三样东西——最后一声钟响时，只能活一个。",
      "stakes": "守钟人沈砚困在废弃钟楼里，楼下是一头认声辨位的巨兽。铜钟、钟绳、信号枪，是他仅有的三样东西——最后一声钟响时，只能活一个。",
      "theme": "INFERRED: 怪兽末路 family"
    },
    "antagonistType": "environmental",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "no traditional antagonist character — environmental threat (storm/monster/time-pressure)",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|2|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "bus7",
    "storyType": "branch-drama",
    "title_zh": "第七个乘客",
    "title_en": "",
    "genre": "悬疑惊悚 · 循环末班车",
    "tagline": "末班车上六个人，后视镜里却是七个。陈望一次次坐上同一班车，想弄清那个红围巾女子是谁。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 3,
    "characterCount": 3,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "末班巴士",
        "triggerConstraint_zh": "一辆十二米长的旧公交车厢内部，塑胶地板贴着防滑条，两侧各排十二个磨破的深蓝皮座椅，车顶一排拉环挂在横杆上，前部投币箱贴着卷边票价表，后排椅缝塞着揉皱的报纸与空瓶",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "永安桥雨夜街道",
        "triggerConstraint_zh": "一条双向四车道的老城街道，沥青路面积着大片雨水，两侧人行道铺方砖，沿街店铺全拉下卷帘门，门口堆着扎捆的纸箱，电线杆钉着层层小广告，街口立着一块掉漆站牌，尽头的桥",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "陈望",
        "functionSummary_zh": "四十岁男司机，寸头微乱，深蓝制服领口磨白，眼下一圈浓重黑眼圈，胸前别着歪斜工牌，右手虎口一道旧疤"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "红围巾女子",
        "functionSummary_zh": "三十岁女性，湿发一缕缕贴着脸颊，颈上绕两圈深红羊毛围巾，藏青长裙下摆一直滴水，脚踩一双泡胀的旧皮鞋"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老刑警",
        "functionSummary_zh": "五十五岁男性，花白寸头，灰风衣满是褶皱，指间夹一支没点着的烟，眼袋深重，手背布满老年斑"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "高光比影调，暗部沉实，高光不过曝，车厢灯管冷调与街面雨光暖调分层过渡，整体色调统一偏冷",
      "protagonist": "陈望",
      "antagonist": "INFERRED",
      "centralConflict": "末班车上六个人，后视镜里却是七个。陈望一次次坐上同一班车，想弄清那个红围巾女子是谁。",
      "stakes": "末班车上六个人，后视镜里却是七个。陈望一次次坐上同一班车，想弄清那个红围巾女子是谁。",
      "theme": "INFERRED: 悬疑 family"
    },
    "antagonistType": "character",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|3|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "cultivate",
    "storyType": "branch-drama",
    "title_zh": "社畜修仙记",
    "title_en": "",
    "genre": "搞笑沙雕 · 办公室修仙",
    "tagline": "他在工位上突破了金丹期，然后被扣了全勤。张总喊他去天台谈话，他一口气分出六个身外化身，工资还是一份。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 3,
    "characterCount": 3,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "格子间办公室",
        "triggerConstraint_zh": "三百平开放办公区，铺灰色方块地毯，一米二高的浅灰隔板把工位切成密集格子，每格一张桌、一台显示器、一把网布转椅和一副泛黄机械键盘，过道尽头是打印机、打卡机和贴着姓",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "公司天台",
        "triggerConstraint_zh": "写字楼二十六层的天台，水泥地面，四周一圈金属护栏，中央两列空调外机架在铁架上，机组之间拉一根晾衣绳挂着三件衬衫，角落堆着卷起的旧地毯和两把叠起的塑料椅，出口一扇",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "王小明",
        "functionSummary_zh": "27岁男性，头发凌乱翘起，黑框眼镜滑到鼻尖，皱巴巴蓝格子衬衫袖口卷到小臂，眼下两团青黑"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "张总",
        "functionSummary_zh": "45岁男性，油亮背头一丝不乱，粗大金链垂在敞口衬衫外，肚子微凸顶起皮带，左腕一只巨大金表"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "秦小美",
        "functionSummary_zh": "26岁女性，齐肩黑发别在耳后，藏青职业套装配丝巾，妆容精致，右手常年夹着一叠单据"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "高光比影调，暗部沉实，高光不过曝，办公区冷白日光灯与周身金光的暖调分层过渡，整体色调统一",
      "protagonist": "王小明",
      "antagonist": "INFERRED",
      "centralConflict": "他在工位上突破了金丹期，然后被扣了全勤。张总喊他去天台谈话，他一口气分出六个身外化身，工资还是一份。",
      "stakes": "他在工位上突破了金丹期，然后被扣了全勤。张总喊他去天台谈话，他一口气分出六个身外化身，工资还是一份。",
      "theme": "INFERRED: 仙侠 family"
    },
    "antagonistType": "character",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|3|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "dinv",
    "storyType": "branch-drama",
    "title_zh": "嫡女归来",
    "title_en": "",
    "genre": "古装宅斗 · 重生复仇",
    "tagline": "大火里睁眼，她回到了一切开始的那一年。这一次，宴席上该跪的人换了。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "重生",
    "familyKey": "rebirth-revenge",
    "subCluster": "general",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 3,
    "characterCount": 3,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "沈府正厅",
        "triggerConstraint_zh": "三开间的府邸厅堂，抬梁木构架直通屋顶，六根朱漆立柱，地面墁着大方砖，正中屏门前一张紫檀条案与两把太师椅，两侧各排四把圈椅夹着茶几，条案上供着青铜香炉、一对锡烛台",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "后院池塘",
        "triggerConstraint_zh": "府邸后头一方半亩见方的水池，四周砌着青石栏杆，栏板刻缠枝纹，池中残荷折断，水面浮着枯叶与浮萍，池边卵石小径绕向月洞门，岸上立一座六角凉亭，亭内石桌上留着未收的棋",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈昭宁",
        "functionSummary_zh": "18岁少女，正红绣金襦裙，乌发半绾一支素银簪，眉眼清冷凌厉，脊背笔直步履极稳，左腕常戴一只白玉镯"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "沈明玉",
        "functionSummary_zh": "17岁少女，素白棉裙外罩淡青比甲，垂鬟分肖髻，眼角一颗泪痣，肩背单薄，说话前惯性低头咬唇绞袖口"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "崔氏",
        "functionSummary_zh": "六十余岁老妇，深紫团寿褙子配抹额，银灰发髻插一支金钗，眼窝深陷嘴角下垂，右手拄一根乌木拐杖"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "高光比影调，暗部沉实，高光不过曝，堂内烛火暖调与池边水色冷调分层过渡，整体色调统一",
      "protagonist": "沈昭宁",
      "antagonist": "INFERRED",
      "centralConflict": "大火里睁眼，她回到了一切开始的那一年。这一次，宴席上该跪的人换了。",
      "stakes": "大火里睁眼，她回到了一切开始的那一年。这一次，宴席上该跪的人换了。",
      "theme": "INFERRED: 重生 family"
    },
    "antagonistType": "character",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|3|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "dive",
    "storyType": "branch-drama",
    "title_zh": "沉船第三层",
    "title_en": "",
    "genre": "深海探险 · 独潜寻物",
    "tagline": "打捞员沈渡独自下潜到沉船第三层，为找一块怀表。氧气只够一个来回，倾斜的走廊和宴会厅里，十二年前的东西还留在原地。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "深海探险",
    "familyKey": "deep-sea-adventure",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 1,
    "characterCount": 1,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "沉船第三层倾斜走廊",
        "triggerConstraint_zh": "长约三十米的双侧客舱通道，地板向左倾斜二十度，两侧是编号舱门与断裂的黄铜扶手，天花板垂着脱落的管线，地面积着半尺厚的淤泥和散开的行李箱",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "沉船第三层宴会厅",
        "triggerConstraint_zh": "两层挑高的圆形大厅，整体侧倾，翻倒的三角钢琴卡在舞台边，成排餐桌餐椅叠在低处一侧，顶棚中央悬着水晶吊灯，环墙一圈舷窗，靠海面的一扇已经裂开",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈渡",
        "functionSummary_zh": "三十四岁男性打捞员，黑色干式潜水服配橙色背带，背双气瓶，戴全脸面镜与二级头调节器，脚穿长脚蹼，寸头，右眉骨一道旧疤，右手小指少半截"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "光比大，主光只有手持灯与舷窗透下的天光，光束穿过浑水形成可见光柱，暗部沉实，高光不过曝，整体青灰色调统一，光线在画面内自然过渡",
      "protagonist": "沈渡",
      "antagonist": "ENVIRONMENTAL",
      "centralConflict": "打捞员沈渡独自下潜到沉船第三层，为找一块怀表。氧气只够一个来回，倾斜的走廊和宴会厅里，十二年前的东西还留在原地。",
      "stakes": "打捞员沈渡独自下潜到沉船第三层，为找一块怀表。氧气只够一个来回，倾斜的走廊和宴会厅里，十二年前的东西还留在原地。",
      "theme": "INFERRED: 深海探险 family"
    },
    "antagonistType": "environmental",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "no traditional antagonist character — environmental threat (storm/monster/time-pressure)",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|1|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "escape",
    "storyType": "branch-drama",
    "title_zh": "第九号房间",
    "title_en": "",
    "genre": "密室逃脱 · 独自解谜",
    "tagline": "沈迟在第九号房间醒来，不记得自己怎么进来的。墙上刻满正字，喇叭每隔一阵播一次规则。门开了，未必就是出去了。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "密室逃脱",
    "familyKey": "escape-room",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 1,
    "characterCount": 1,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "第九号房间",
        "triggerConstraint_zh": "边长约四米的方形水泥房，四壁无窗，一扇厚铁门嵌在东墙，门旁装着一块数字键盘，天花板角落挂着一只铁皮喇叭，墙面高处开着一扇积灰的通风口，墙角堆着碎水泥和一把铁凳",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "通风井尽头配电室",
        "triggerConstraint_zh": "长条形水泥小屋，一整面墙立着六台配电柜，柜门上装着拨码轮与黄铜旋钮，靠里放一张断腿木桌和几只倒扣的水桶，尽头是一扇厚重铁门，头顶开着一格方形通风管口",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈迟",
        "functionSummary_zh": "二十九岁男性，寸头略长盖住耳尖，穿深灰连帽卫衣与磨破膝盖的牛仔裤，赤脚，身形偏瘦但肩背绷得很紧，右手虎口有一道陈年旧疤"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "高光比影调，青灰水泥与铁锈褐为底，暗部沉实，高光不过曝，光线在画面内自然过渡，整体色调统一",
      "protagonist": "沈迟",
      "antagonist": "ENVIRONMENTAL",
      "centralConflict": "沈迟在第九号房间醒来，不记得自己怎么进来的。墙上刻满正字，喇叭每隔一阵播一次规则。门开了，未必就是出去了。",
      "stakes": "沈迟在第九号房间醒来，不记得自己怎么进来的。墙上刻满正字，喇叭每隔一阵播一次规则。门开了，未必就是出去了。",
      "theme": "INFERRED: 密室逃脱 family"
    },
    "antagonistType": "environmental",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "no traditional antagonist character — environmental threat (storm/monster/time-pressure)",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|1|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "heir",
    "storyType": "branch-drama",
    "title_zh": "继承人游戏",
    "title_en": "",
    "genre": "现代豪门 · 契约继承",
    "tagline": "一纸遗嘱把整个傅氏交给一个陌生女人。林知夏拿着那份少了一页的文件走进顶层办公室，对面坐着傅承烨。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "豪门",
    "familyKey": "modern-rich",
    "subCluster": "general",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 2,
    "characterCount": 2,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "傅氏顶层办公室",
        "triggerConstraint_zh": "八十平的顶层空间，两面玻璃幕墙外是密集楼群，地面深灰水磨石，正中一张四米长的岩板长桌，两侧各排八把黑色皮椅，背后整墙胡桃木书柜与一块投影幕布，桌角摆着黄铜镇纸、",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "傅家老宅书房",
        "triggerConstraint_zh": "二十平的老式房间，四米层高，墙面包着柚木护墙板，地上铺暗红几何纹地毯，北墙一排到顶的檀木书架塞满线装书，最底层留着一格暗格，居中一张宽大红木书案，案上摊着家谱、",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "林知夏",
        "functionSummary_zh": "26岁女性，黑长直发及腰，米色西装套裙配平底皮鞋，身形清瘦肩背笔直，左手腕一条细银链，手边总拎着一只旧行李箱"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "傅承烨",
        "functionSummary_zh": "32岁男性，利落寸头，黑色三件套西装白衬衫，身形挺拔下颌线锋利，左腕一只银色机械表，右手虎口一层薄茧"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "高光比影调，暗部沉实，高光不过曝，玻璃幕墙冷调与老宅木色暖调分层过渡，整体色调统一",
      "protagonist": "林知夏",
      "antagonist": "INFERRED",
      "centralConflict": "一纸遗嘱把整个傅氏交给一个陌生女人。林知夏拿着那份少了一页的文件走进顶层办公室，对面坐着傅承烨。",
      "stakes": "一纸遗嘱把整个傅氏交给一个陌生女人。林知夏拿着那份少了一页的文件走进顶层办公室，对面坐着傅承烨。",
      "theme": "INFERRED: 豪门 family"
    },
    "antagonistType": "character",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|2|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "memory",
    "storyType": "branch-drama",
    "title_zh": "记忆商店",
    "title_en": "",
    "genre": "科幻末世 · 记忆买卖",
    "tagline": "这里回收记忆，一段十块，好的另议。有人来卖，有人来买，也有人来找回自己卖掉的那段。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "末日求生",
    "familyKey": "survival",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 3,
    "characterCount": 3,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "ally",
      "antagonist"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "记忆商店地下铺",
        "triggerConstraint_zh": "地下室改成的店铺，混凝土墙面裸露，三面铁架从地到顶排满玻璃罐，居中一张旧木柜台，台上摆着黄铜秤、放大镜和翻烂的账册，左墙角一把带线束的金属躺椅，椅子上方吊着一组",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "废墟主街路口",
        "triggerConstraint_zh": "被摧毁的城市主街交叉口，两侧高楼拦腰折断，钢筋从断面翻卷出来，塌落的混凝土块堆到二层高，一辆锈死的公交车横在路中央，楼体上挂着断了半截的霓虹招牌，路边散落着变形",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "周砚",
        "functionSummary_zh": "40岁男性，花白寸头，深灰厚布工装外套，右眼是泛蓝光的机械义眼，左脸一道旧疤，指节粗大"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "林小满",
        "functionSummary_zh": "17岁少女，破旧灰连帽衫兜帽压到眉，齐肩碎发脏乱，身形单薄锁骨凸出，右腕系一根褪色红绳"
      },
      {
        "archetypeKey": "antagonist",
        "label_zh": "霍时安",
        "functionSummary_zh": "40岁男子，黑色三件套西装一丝不苟，双手戴黑皮手套，领口别一枚素银别针，鬓角剃得极短"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "高光比影调，暗部沉实，高光不过曝，玻璃罐蓝光与地下铺暖黄工作灯分层过渡，整体色调统一",
      "protagonist": "周砚",
      "antagonist": "霍时安",
      "centralConflict": "这里回收记忆，一段十块，好的另议。有人来卖，有人来买，也有人来找回自己卖掉的那段。",
      "stakes": "这里回收记忆，一段十块，好的另议。有人来卖，有人来买，也有人来找回自己卖掉的那段。",
      "theme": "INFERRED: 末日求生 family"
    },
    "antagonistType": "character",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|3|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "mirror",
    "storyType": "branch-drama",
    "title_zh": "镜中人",
    "title_en": "",
    "genre": "悬疑心理 · 镜像人格",
    "tagline": "镜子里的她，比她早眨了一下眼。林澈开始分不清哪一边才是自己站着的地方。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "悬疑",
    "familyKey": "suspense",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 3,
    "characterCount": 3,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "林澈的单身公寓",
        "triggerConstraint_zh": "一间十五平的单间公寓，白墙泛黄，地上铺灰色仿木地板，靠窗一张单人床，被褥揉成一团，床尾正对一面一人高的落地穿衣镜，右侧折叠书桌上堆着药盒、半瓶水和摊开的笔记本，",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "心理诊疗室",
        "triggerConstraint_zh": "一间三十平的心理诊疗室，米白墙面，地面是浅灰地胶，靠墙一张深棕皮质长椅铺着薄毯，对面一把扶手椅和一张玻璃矮几，几上摆着抽纸盒、一只沙漏和两杯没动过的水，右侧书架",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "林澈",
        "functionSummary_zh": "二十九岁女性，齐肩黑直发发缝偏左，白衬衫束进牛仔裤，眼下一圈淡青，右眉尾光洁无痕，指甲剪得极短"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "林砚",
        "functionSummary_zh": "二十九岁女性，与林澈同一张脸，齐肩黑直发发缝偏右，右眉尾一道白色旧疤，唇涂正红，黑丝质衬衫领口松开两颗扣"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "陈立德",
        "functionSummary_zh": "四十五岁男性精神科医生，鬓角灰白梳向脑后，金丝细框眼镜，白大褂内衬藏青衬衫，胸袋别一支银色钢笔"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "高光比影调，暗部沉实，高光不过曝，公寓的偏冷灰调与诊疗室的米白暖调分层过渡，整体色调统一",
      "protagonist": "林澈",
      "antagonist": "INFERRED",
      "centralConflict": "镜子里的她，比她早眨了一下眼。林澈开始分不清哪一边才是自己站着的地方。",
      "stakes": "镜子里的她，比她早眨了一下眼。林澈开始分不清哪一边才是自己站着的地方。",
      "theme": "INFERRED: 悬疑 family"
    },
    "antagonistType": "character",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|3|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "mission",
    "storyType": "branch-drama",
    "title_zh": "最后一件包裹",
    "title_en": "",
    "genre": "极限送达 · 暴雨山路",
    "tagline": "暴雨夜，落云岭最后一单没人接。骑手江野一个人往山顶开，塌方、断路、车坏，包裹里那盘旧磁带在等一个听得懂的人。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "极限送达",
    "familyKey": "extreme-delivery",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 2,
    "characterCount": 2,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "落云岭盘山公路",
        "triggerConstraint_zh": "双向单车道沿山体一圈圈盘绕，内侧是刷白漆的水泥护栏，外侧是碎石陡坡，路面每隔百米开一道排水沟，转弯处立着反光柱和限速铁牌，路肩堆着未清运的碎石与断枝",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "黑云顶气象观测站",
        "triggerConstraint_zh": "山顶一栋两层水泥小楼，楼顶架着风速仪和百叶箱，一层值班室摆着铁皮工作台、老式收报机和一排搪瓷杯，墙上挂着值班表，门外一条钢索通向山下的物资吊篮",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "江野",
        "functionSummary_zh": "二十七岁男性骑手，寸头略长贴在额前，橙黑相间的骑行雨衣外套，护膝磨得发白，身形精瘦，左眉骨一道旧疤"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "于素秋",
        "functionSummary_zh": "六十八岁女性守站员，花白短发用铁夹别在耳后，深蓝色旧工装棉袄，脚踩高帮雨靴，背略驼，胸前挂一枚褪色的观测员工牌"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "光比大，主光只有车灯与头盔灯，暗部沉实，高光不过曝，雨幕里的橙与冷灰在画面内自然过渡，整体色调统一",
      "protagonist": "江野",
      "antagonist": "ENVIRONMENTAL",
      "centralConflict": "暴雨夜，落云岭最后一单没人接。骑手江野一个人往山顶开，塌方、断路、车坏，包裹里那盘旧磁带在等一个听得懂的人。",
      "stakes": "暴雨夜，落云岭最后一单没人接。骑手江野一个人往山顶开，塌方、断路、车坏，包裹里那盘旧磁带在等一个听得懂的人。",
      "theme": "INFERRED: 极限送达 family"
    },
    "antagonistType": "environmental",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "no traditional antagonist character — environmental threat (storm/monster/time-pressure)",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|2|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "queen",
    "storyType": "branch-drama",
    "title_zh": "冷宫第九年",
    "title_en": "",
    "genre": "古装宫斗 · 冷宫翻身",
    "tagline": "第九年，冷宫的门第一次从外面被推开。苏沉璧掸了掸旧棋盘上的灰，起身走了出去。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "宫斗",
    "familyKey": "palace-intrigue",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 3,
    "characterCount": 3,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "冷宫院落",
        "triggerConstraint_zh": "一进废弃宫院，青砖院墙裂开几道缝，墙皮成片剥落露出夯土，正房五间的木格窗糊纸破损，院中荒草没膝，石板缝里钻出蒿子，东墙下一株老梅斜出，树旁一口青石水缸盛着雨水与",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "紫宸殿御书房",
        "triggerConstraint_zh": "进深五间的御用书房，金砖墁地，四周垂着层层锦缎帷幔，居中一张宽大紫檀御案，案后立一架十二扇云母屏风，案上摊着奏折、一方端砚与山形笔架，两侧各立一座三层铜烛台，靠",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "苏沉璧",
        "functionSummary_zh": "二十八岁女子，褪色靛青宫装浆洗发白，长发松挽只插一根旧木簪，眉目清淡脊背笔直，指节生着薄茧"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "萧决",
        "functionSummary_zh": "三十二岁帝王，玄色龙纹常服束玉带，长发高束嵌金冠，眉骨高鼻梁挺，肩背宽阔，拇指戴一枚墨玉扳指"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "小满",
        "functionSummary_zh": "十五岁小宫女，粗布青灰短打衣裙，双丫髻系两根旧布条，圆脸颊冻得发红，双手背冻疮结痂，脚踩磨破麻鞋"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "高光比影调，暗部沉实，高光不过曝，院中天光冷调与殿内烛火暖调分层过渡，整体色调统一",
      "protagonist": "苏沉璧",
      "antagonist": "INFERRED",
      "centralConflict": "第九年，冷宫的门第一次从外面被推开。苏沉璧掸了掸旧棋盘上的灰，起身走了出去。",
      "stakes": "第九年，冷宫的门第一次从外面被推开。苏沉璧掸了掸旧棋盘上的灰，起身走了出去。",
      "theme": "INFERRED: 宫斗 family"
    },
    "antagonistType": "character",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|3|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "rider",
    "storyType": "branch-drama",
    "title_zh": "外卖骑手的第七单",
    "title_en": "",
    "genre": "现代都市 · 草根逆袭",
    "tagline": "那个总点最便宜套餐的老人，最后一单没人接。陈默抱着保温箱爬上六楼，门垫上摆着一只洗干净的白瓷碗。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 3,
    "characterCount": 3,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "老旧居民楼六楼楼道",
        "triggerConstraint_zh": "六层老居民楼的顶层楼道，水泥台阶磨出凹坑，扶手是刷绿漆的铁管，墙面石灰剥落露出红砖，两户铁门对开，门上贴着旧春联和挂着的信箱，转角堆着废纸箱与几只空油桶，半层高",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "城中村巷口",
        "triggerConstraint_zh": "城中村里两米宽的巷口，两侧七层握手楼几乎贴在一起，外墙贴白瓷砖，头顶横七竖八架着晾衣杆与成束电线，巷口一间卷帘门半开的杂货铺，门前堆着饮料箱和红色塑料凳，墙边挤",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "陈默",
        "functionSummary_zh": "二十八岁男性，寸头被汗黏在额前，亮黄色骑手服拉链到顶，磨白头盔挂在臂弯，身形精瘦，右手虎口一道旧疤"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "周教授",
        "functionSummary_zh": "七十五岁男性，花白头发稀疏，深灰旧毛衣袖口起球，胸前挂一副黑框老花镜，背微驼，十指枯瘦关节肿大"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "站长",
        "functionSummary_zh": "三十五岁男性，板寸头，蓝色工装外套敞着怀，脖子上挂一枚塑封工牌，肩背厚实，右手常攥一只掉漆对讲机"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "高光比影调，暗部沉实，高光不过曝，楼道声控灯暖调与雨夜街面冷调分层过渡，整体色调统一",
      "protagonist": "陈默",
      "antagonist": "INFERRED",
      "centralConflict": "那个总点最便宜套餐的老人，最后一单没人接。陈默抱着保温箱爬上六楼，门垫上摆着一只洗干净的白瓷碗。",
      "stakes": "那个总点最便宜套餐的老人，最后一单没人接。陈默抱着保温箱爬上六楼，门垫上摆着一只洗干净的白瓷碗。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "character",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|3|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "shanhai",
    "storyType": "branch-drama",
    "title_zh": "山海食铺",
    "title_en": "",
    "genre": "仙侠治愈 · 妖怪食堂",
    "tagline": "这间铺子只在子时开门，客人都不是人。阿食守着灶，来一个煮一碗，听一段故事。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 3,
    "characterCount": 3,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest",
      "mentor"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "山海食铺",
        "triggerConstraint_zh": "一间不足二十平的木构小铺，四面是发黑的杉木板墙，柜台是一整块厚榆木板，堂中摆三张方桌配长条木凳，桌上放着粗陶碗与竹筷筒，靠里一座砌到腰高的柴火灶台坐着一口铜锅，",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "门外长街",
        "triggerConstraint_zh": "铺门外一条丈余宽的青石长街，石板磨得凹凸不平，两侧是低矮的木板铺面，门板都上着栓，檐下挂着熄灭的纸灯笼与褪色酒旗，街边一口老井围着石圈，墙根堆着捆好的柴禾和几只",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "阿食",
        "functionSummary_zh": "三十岁男掌柜，墨发半束，靛蓝短打外系深灰围裙，袖口挽至小臂，右腕缠一圈旧红绳，脚下不生影子"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "小九",
        "functionSummary_zh": "九岁女童模样的狐妖，双丫髻系红绳，一身朱红短袄赤脚，身后九条蓬松白狐尾，笑起来露一对尖虎牙"
      },
      {
        "archetypeKey": "mentor",
        "label_zh": "老龙",
        "functionSummary_zh": "白发老者，霜白长眉垂过颧骨，青灰宽袖长袍，手背覆一层细密青鳞，指甲长而微弯，腰悬一只酒葫芦"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "中高光比影调，暗部沉实，灶火与灯笼的暖调和街面夜色的冷调自然过渡，高光不过曝，整体色调统一",
      "protagonist": "阿食",
      "antagonist": "INFERRED",
      "centralConflict": "这间铺子只在子时开门，客人都不是人。阿食守着灶，来一个煮一碗，听一段故事。",
      "stakes": "这间铺子只在子时开门，客人都不是人。阿食守着灶，来一个煮一碗，听一段故事。",
      "theme": "INFERRED: 仙侠 family"
    },
    "antagonistType": "character",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|3|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "sword",
    "storyType": "branch-drama",
    "title_zh": "剑冢守墓人",
    "title_en": "",
    "genre": "古言仙侠 · 断剑封神",
    "tagline": "万柄断剑同时鸣响那夜，守墓人睁开了眼。剑冢底下埋的不是剑，是他自己。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "仙侠",
    "familyKey": "xianxia",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 3,
    "characterCount": 3,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest",
      "mentor"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "万剑冢荒原",
        "triggerConstraint_zh": "一片开阔的赤褐荒原，龟裂土地上倒插着数以万计的断剑残戟，剑身锈蚀卷刃，近处几柄丈许巨剑深插进岩层，剑柄缠着朽烂布条，地上散落碎裂护手与半埋的头盔，远处黑石孤峰下",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "深渊裂口",
        "triggerConstraint_zh": "大地被撕开一道数里长的巨型裂口，断面露出层层黑褐岩层与倒垂的枯树根，边缘岩石碎成尖锐台阶，一条铁索桥横跨两岸，铁索锈断了几股，桥头立着两根刻满符文的石柱，柱脚散",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "楚绝",
        "functionSummary_zh": "四十岁男子，身形清瘦挺直，墨发披散未束，白衣沾尘赤足行走，眉心一道旧疤，背负一柄齐断的断剑"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏雪衣",
        "functionSummary_zh": "二十岁女修，青衣束腰，高马尾系一条长发带，身形利落肩背绷直，虎口结着一层厚茧，腰间悬一柄长剑"
      },
      {
        "archetypeKey": "mentor",
        "label_zh": "无面",
        "functionSummary_zh": "身形颀长者，及地黑袍兜帽压低，面覆一张无五官的白瓷面具，衣袖空垂不见双手，腰间系一串黑色骨珠"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "高光比影调，暗部沉实，高光不过曝，赤褐荒原暖调与紫黑雾气冷调分层过渡，整体色调统一偏沉",
      "protagonist": "楚绝",
      "antagonist": "INFERRED",
      "centralConflict": "万柄断剑同时鸣响那夜，守墓人睁开了眼。剑冢底下埋的不是剑，是他自己。",
      "stakes": "万柄断剑同时鸣响那夜，守墓人睁开了眼。剑冢底下埋的不是剑，是他自己。",
      "theme": "INFERRED: 仙侠 family"
    },
    "antagonistType": "character",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|3|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "telegram",
    "storyType": "branch-drama",
    "title_zh": "最后一封电报",
    "title_en": "",
    "genre": "民国乱世 · 谍影暗涌",
    "tagline": "那串没人能破译的密码，用的是父亲留下的私码。沈知微在电台前坐了一夜，窗外是戒严的旧上海。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "民国",
    "familyKey": "republican",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 3,
    "characterCount": 3,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "阁楼电报房",
        "triggerConstraint_zh": "十来平的斜顶阁楼小室，开着一扇老虎窗，靠窗一张厚重橡木长桌，桌上摆着黄铜电键、绿罩台灯和一沓电码本，桌角摞着写满数字的稿纸与一只搪瓷缸，墙上钉满线路与接线盒，墙",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "上海弄堂",
        "triggerConstraint_zh": "两排三层石库门夹出的狭长弄堂，青石板路面泛着水渍，砖墙斑驳，门楣是雕花门头，各家门口摆着煤球炉与木脚盆，头顶横过四五道晾衣绳，墙根一台木壳收音机，尽头一扇铁栅门",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈知微",
        "functionSummary_zh": "24岁女译电员，藏青素面旗袍外罩灰针织开衫，齐耳短发，黑框圆眼镜，指尖常年沾着一层墨，身形清瘦"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "顾长风",
        "functionSummary_zh": "30岁男军官，深灰呢制军装扣至领口，短发利落，黑色长筒马靴，左眉骨一道浅疤，肩背挺直"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "老周",
        "functionSummary_zh": "50岁男报务员，褪色靛蓝马褂，棉帽压至眉际，花白胡茬，背微驼，走路拖着脚，右手虎口一层旧茧"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "高光比影调，暗部沉实，高光不过曝，阁楼绿罩台灯的冷绿与弄堂路灯的暖黄在画面内自然过渡，整体色调统一",
      "protagonist": "沈知微",
      "antagonist": "INFERRED",
      "centralConflict": "那串没人能破译的密码，用的是父亲留下的私码。沈知微在电台前坐了一夜，窗外是戒严的旧上海。",
      "stakes": "那串没人能破译的密码，用的是父亲留下的私码。沈知微在电台前坐了一夜，窗外是戒严的旧上海。",
      "theme": "INFERRED: 民国 family"
    },
    "antagonistType": "character",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|3|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "timecross",
    "storyType": "branch-drama",
    "title_zh": "外卖送到大乾朝",
    "title_en": "",
    "genre": "搞笑穿越 · 外卖奇遇",
    "tagline": "外卖骑手雷小满连人带保温箱摔进大乾朝的长街，被当成妖人押进县衙。手机只剩三格电，这一单还得送到。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "穿越",
    "familyKey": "time-travel",
    "subCluster": "modern-to-historical",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 2,
    "characterCount": 2,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "大乾县衙前青石长街",
        "triggerConstraint_zh": "南北走向的青石板长街，两侧是两层木楼，挑出的木招牌一路排开，街口立着一座石牌坊，牌坊下有拴马桩与半人高的石狮，路面中央一道被车辙磨出的浅沟",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "大乾县衙正堂公审厅",
        "triggerConstraint_zh": "三开间的公堂，正中一张漆黑公案，案上摆惊堂木与签筒，案后是一面绘着海水江崖的屏风，屏上悬一块横匾，堂下青砖地嵌着一块跪石，两侧各立一排水火棍架",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "雷小满",
        "functionSummary_zh": "二十五岁男性，短寸头压在歪掉的黄色头盔下，穿荧光黄骑手外套配束脚裤，个子不高身板结实，左手腕上套着三根皮筋"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "卜方正",
        "functionSummary_zh": "四十多岁男性，山羊胡打理得整齐，头戴乌纱帽身穿深青色圆领官袍，腰系革带肚子微凸，右手常年攥着一块惊堂木"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "光比适中，暗部沉实，高光不过曝，整体色调统一偏暖",
      "protagonist": "雷小满",
      "antagonist": "INFERRED",
      "centralConflict": "外卖骑手雷小满连人带保温箱摔进大乾朝的长街，被当成妖人押进县衙。手机只剩三格电，这一单还得送到。",
      "stakes": "外卖骑手雷小满连人带保温箱摔进大乾朝的长街，被当成妖人押进县衙。手机只剩三格电，这一单还得送到。",
      "theme": "INFERRED: 穿越 family"
    },
    "antagonistType": "character",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|2|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "window",
    "storyType": "branch-drama",
    "title_zh": "隔壁那扇窗",
    "title_en": "",
    "genre": "甜宠日常 · 对窗恋人",
    "tagline": "她抬头，对面窗里那个人正举着一块纸板。两扇窗、几张纸板，把话一句句递过去。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "甜宠",
    "familyKey": "sweet-pet",
    "subCluster": "general",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 3,
    "characterCount": 3,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "老公寓对窗",
        "triggerConstraint_zh": "两栋六层老公寓相距五米，砖红外墙爬着几缕爬山虎，两扇木框窗正对着，窗台外挑出铁艺花架摆着三四盆绿萝与多肉，窗沿放一只小喷壶和贝壳形烟灰缸，窗内是白纱帘与一角书桌",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "公寓天台",
        "triggerConstraint_zh": "老公寓楼顶三百平的天台，水泥地面裂着几道缝，边缘一圈一米高的女儿墙，中间拉着四道晾衣绳晾满床单与衬衫，角落一座方形水塔架在铁支腿上，旁边堆着一把断了扶手的藤椅和",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "江晚",
        "functionSummary_zh": "25岁女插画师，松散高马尾用铅笔别住，米色宽松毛衣配牛仔裤，指尖常年沾着颜料，右颊一枚酒窝"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "陆时安",
        "functionSummary_zh": "28岁男兽医，短碎发，细框银边眼镜，白大褂里穿浅灰衬衫，袖口卷到手肘，肩上总沾着一层橘色猫毛"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "何婆婆",
        "functionSummary_zh": "72岁老太太，银白短卷发，藏青碎花衫外罩灰开衫，手拎一只红色塑料菜篮，走路时左手一直扶着腰"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "中低光比影调，暗部通透，高光不过曝，室内暖黄灯与窗外天光在画面内自然过渡，整体色调统一",
      "protagonist": "江晚",
      "antagonist": "NONE",
      "centralConflict": "她抬头，对面窗里那个人正举着一块纸板。两扇窗、几张纸板，把话一句句递过去。",
      "stakes": "她抬头，对面窗里那个人正举着一块纸板。两扇窗、几张纸板，把话一句句递过去。",
      "theme": "INFERRED: 甜宠 family"
    },
    "antagonistType": "none",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "no traditional antagonist — sweet-pet/slice-of-life genre has no opposing force",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|3|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "zhenbei",
    "storyType": "branch-drama",
    "title_zh": "镇北王归京",
    "title_en": "",
    "genre": "古装逆袭 · 弃子归来",
    "tagline": "十年前他被逐出京城，十年后他带着二十万铁骑回来。宫门开时，当年赶他走的人还站在原处。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 3,
    "characterCount": 3,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "侯府正堂",
        "triggerConstraint_zh": "侯府三开间的正堂，黑木高梁架起两丈层高，六根抱柱漆成栗色，地面墁着大块青砖，正面神龛里排着先祖牌位与铜香炉，龛下一张黑漆条案摆着一对锡烛台，堂中一张八仙桌配两把",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "皇城金銮殿",
        "triggerConstraint_zh": "大殿深阔九间，九级白玉台阶通向丹陛，六根蟠龙金柱直抵殿顶，地面铺着打磨过的金砖，正中一座髹金龙椅，椅后立五扇雕龙屏风，两侧摆着掐丝珐琅仙鹤香炉与铜鹤烛台，殿门外",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "萧决",
        "functionSummary_zh": "三十岁男性，长发以玄铁冠束起，玄色劲装外罩深青大氅，肩背挺直，左眉尾一道旧疤，右腿走路慢半拍"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "萧承业",
        "functionSummary_zh": "二十九岁男性，油亮发髻插一支银簪，宝蓝锦袍束白玉带，面白微胖，眼神游移，惯提一把折扇"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "萧崇山",
        "functionSummary_zh": "六十八岁男性，花白发髻用玉簪别住，暗红侯服罩深色比甲，背驼，眼窝深陷，两只手常发抖"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "高光比影调，暗部沉实，高光不过曝，烛火暖调与雪地冷调分层过渡，整体色调统一偏沉",
      "protagonist": "萧决",
      "antagonist": "INFERRED",
      "centralConflict": "十年前他被逐出京城，十年后他带着二十万铁骑回来。宫门开时，当年赶他走的人还站在原处。",
      "stakes": "十年前他被逐出京城，十年后他带着二十万铁骑回来。宫门开时，当年赶他走的人还站在原处。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "character",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|3|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "zhuixu",
    "storyType": "branch-drama",
    "title_zh": "赘婿的第九年",
    "title_en": "",
    "genre": "都市逆袭 · 隐藏身份",
    "tagline": "他被苏家笑了九年。第九年，他接了一个电话，饭桌上的空盘、门外的泼漆、桌上的并购合同，一件件换了位置。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "其他",
    "familyKey": "other",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 2,
    "archetypeCount": 3,
    "characterCount": 3,
    "stageRoles": [
      "setup",
      "rising-action"
    ],
    "archetypeKeys": [
      "protagonist",
      "love-interest",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "苏家老宅客厅",
        "triggerConstraint_zh": "一百二十平的中式挑高客厅，深色实木地板铺着大幅暗纹地毯，靠墙一组红木沙发配云石茶几，沙发对面墙上挂着一台大型液晶电视，正中一张八座位长餐桌配高背木椅，桌上摆着骨",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "苏氏集团顶层会议室",
        "triggerConstraint_zh": "顶层一间八十平的会议室，两面玻璃幕墙外是密集楼群，深灰地毯满铺，正中一张椭圆环形长桌围着二十把黑色皮质高背椅，一端整面墙是拼接投影屏，另一端立着定制矮柜与咖啡机",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "沈砚舟",
        "functionSummary_zh": "三十二岁男性，黑色短寸，洗旧灰蓝衬衫挽到小臂，深色长裤配一双旧皮鞋，肩背挺直，右手虎口有一层薄茧"
      },
      {
        "archetypeKey": "love-interest",
        "label_zh": "苏晚",
        "functionSummary_zh": "二十八岁女性，长直黑发松松挽在脑后，米白针织衫配浅色长裙，身形单薄，左腕戴一只细银镯，眼下带淡青"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "何丽芬",
        "functionSummary_zh": "五十五岁女性，栗色短卷发，深紫真丝旗袍外搭羊绒披肩，体态微丰，右腕一只翡翠镯，嘴角习惯性下垂"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "高光比影调，暗部沉实，高光不过曝，冷白室内光与暖木色分层过渡，整体色调统一偏青灰",
      "protagonist": "沈砚舟",
      "antagonist": "INFERRED",
      "centralConflict": "他被苏家笑了九年。第九年，他接了一个电话，饭桌上的空盘、门外的泼漆、桌上的并购合同，一件件换了位置。",
      "stakes": "他被苏家笑了九年。第九年，他接了一个电话，饭桌上的空盘、门外的泼漆、桌上的并购合同，一件件换了位置。",
      "theme": "INFERRED: 其他 family"
    },
    "antagonistType": "character",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": false
    },
    "invariantPassCount": 2,
    "invariantTotal": 3,
    "gapCount": 3,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|2|3|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  },
  {
    "id": "zomb",
    "storyType": "branch-drama",
    "title_zh": "七号病房",
    "title_en": "",
    "genre": "末日求生 · 双人逃亡",
    "tagline": "程野和林芷在七号病房醒来，整座医院空无一人，电视雪花里断续播着封城通告。两人一路杀出走廊、街道，抢下一辆救护车冲出城去。",
    "categoryKey": "",
    "categoryName": "",
    "categoryEmoji": "",
    "family": "末日求生",
    "familyKey": "survival",
    "subCluster": "",
    "branchingInfo": {
      "type": "multi-lane",
      "detail": "3 lanes: hard,bear,ally — alternative playthroughs of same skeleton",
      "laneCount": 3
    },
    "stageCount": 5,
    "archetypeCount": 3,
    "characterCount": 3,
    "stageRoles": [
      "setup",
      "rising-action",
      "midpoint",
      "crisis",
      "resolution"
    ],
    "archetypeKeys": [
      "protagonist",
      "ally",
      "ally"
    ],
    "stages": [
      {
        "slotId": "S1-scene-1",
        "role": "setup",
        "label_zh": "七号病房",
        "triggerConstraint_zh": "医院三层尽头的双人病房，两张铁架病床各配一根铁质输液架，床单发黄掀乱，床头柜上倒着药瓶和水杯，墙皮大片剥落露出灰底，门侧墙角高处的金属支架上挂着一台壁挂显像管电",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S2-scene-2",
        "role": "rising-action",
        "label_zh": "医院走廊",
        "triggerConstraint_zh": "三层的直通长走廊，两侧病房门半开半合，一辆翻倒的轮床横在中段，地面散落病历纸和玻璃碴，墙面挂着歪斜的科室指示牌，墙裙布满深色污渍和成排抓痕，尽头一扇绿色安全门虚",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S3-scene-3",
        "role": "midpoint",
        "label_zh": "医院安全楼梯间",
        "triggerConstraint_zh": "医院侧翼的封闭楼梯间，水泥台阶盘旋而下，墨绿铁扶手锈迹斑斑，每层平台墙上漆着褪色楼层数字，二层平台斜靠着一副空担架，墙角立着一只玻璃碎裂的消防栓箱，箱门半开",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S4-scene-4",
        "role": "crisis",
        "label_zh": "出城高架公路",
        "triggerConstraint_zh": "医院街区外的出城高架引道，双向四车道上散落弃车与行李箱，一座收费站横跨路面，闸杆断成两截垂着，站亭玻璃碎裂，一排隔离路障歪斜拦在闸口前，引道尽头是开阔的城郊大路",
        "synthesizedFromTemplate": false
      },
      {
        "slotId": "S5-scene-5",
        "role": "resolution",
        "label_zh": "医院门前街道",
        "triggerConstraint_zh": "医院正门外的双向街道，玻璃大门裂成蛛网纹，门前一辆救护车斜跨路沿车门大敞，路面散落轮椅、报纸和翻倒的隔离路障，沿街商铺卷闸半落，几辆轿车歪停在路中，远处楼群窗户",
        "synthesizedFromTemplate": false
      }
    ],
    "archetypes": [
      {
        "archetypeKey": "protagonist",
        "label_zh": "程野",
        "functionSummary_zh": "二十九岁男性，黑色短发汗湿贴额，浅蓝条纹病号服外披一件深灰开衫，左前臂贴着输液胶布，身形精瘦结实，眼窝深，下颌带青色胡茬"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "林芷",
        "functionSummary_zh": "二十六岁女性，深棕长发散乱披肩，浅蓝条纹病号服，腕上系着白色住院腕带，眉眼清丽，唇色发白，锁骨处有一小块纱布贴"
      },
      {
        "archetypeKey": "ally",
        "label_zh": "感染者",
        "functionSummary_zh": "皮肤灰白泛青的成年感染者，双眼浑浊布满血丝，下颌与颈侧沾着深色血渍，身上是撕裂脏污的衬衫，站姿歪斜佝偻，十指指甲开裂发黑"
      }
    ],
    "parameterSlotsFilled": {
      "setting": "高光比影调，惨白冷绿底色与病气暖黄零星并存，暗部沉实，高光不过曝，整体色调统一",
      "protagonist": "程野",
      "antagonist": "ENVIRONMENTAL",
      "centralConflict": "程野和林芷在七号病房醒来，整座医院空无一人，电视雪花里断续播着封城通告。两人一路杀出走廊、街道，抢下一辆救护车冲出城去。",
      "stakes": "程野和林芷在七号病房醒来，整座医院空无一人，电视雪花里断续播着封城通告。两人一路杀出走廊、街道，抢下一辆救护车冲出城去。",
      "theme": "INFERRED: 末日求生 family"
    },
    "antagonistType": "environmental",
    "climaxMode": "per-lane",
    "invariantSummary": {
      "stagesLengthRange": true,
      "turningPointSlotCoverage": true,
      "mandatoryRolesPresent": true
    },
    "invariantPassCount": 3,
    "invariantTotal": 3,
    "gapCount": 4,
    "topGap": "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
    "allGaps": [
      "branchingType=multi-lane is NOT yet a standard framework value (manju uses rigid-tree, viral-scene uses linear)",
      "3 lanes share same skeleton — framework has no way to express 'alternative playthrough' relationship",
      "no traditional antagonist character — environmental threat (storm/monster/time-pressure)",
      "voice profiles (v field) have no framework slot — branch-dramas are video-content specs"
    ],
    "patternFingerprint": "multi-lane|5|3|3lane",
    "proWasNull": false,
    "synthesizedStageCount": 0,
    "variantCount": 3
  }
] as const

export const BRANCH_DRAMA_VARIANTS: VariantInstance[] = [
  {
    "variantId": "beast#lane-ally",
    "storyId": "beast",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "陷阱线",
    "laneKey": "ally"
  },
  {
    "variantId": "beast#lane-bear",
    "storyId": "beast",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "诱敌线",
    "laneKey": "bear"
  },
  {
    "variantId": "beast#lane-hard",
    "storyId": "beast",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "硬碰线",
    "laneKey": "hard"
  },
  {
    "variantId": "bus7#lane-ally",
    "storyId": "bus7",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "同行线",
    "laneKey": "ally"
  },
  {
    "variantId": "bus7#lane-bear",
    "storyId": "bus7",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "旁观线",
    "laneKey": "bear"
  },
  {
    "variantId": "bus7#lane-hard",
    "storyId": "bus7",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "追问线",
    "laneKey": "hard"
  },
  {
    "variantId": "cultivate#lane-ally",
    "storyId": "cultivate",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "带飞线",
    "laneKey": "ally"
  },
  {
    "variantId": "cultivate#lane-bear",
    "storyId": "cultivate",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "摸鱼线",
    "laneKey": "bear"
  },
  {
    "variantId": "cultivate#lane-hard",
    "storyId": "cultivate",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "莽穿线",
    "laneKey": "hard"
  },
  {
    "variantId": "dinv#lane-ally",
    "storyId": "dinv",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "借力线",
    "laneKey": "ally"
  },
  {
    "variantId": "dinv#lane-bear",
    "storyId": "dinv",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "蛰伏线",
    "laneKey": "bear"
  },
  {
    "variantId": "dinv#lane-hard",
    "storyId": "dinv",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "锋芒线",
    "laneKey": "hard"
  },
  {
    "variantId": "dive#lane-ally",
    "storyId": "dive",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "直觉线",
    "laneKey": "ally"
  },
  {
    "variantId": "dive#lane-bear",
    "storyId": "dive",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "谨慎线",
    "laneKey": "bear"
  },
  {
    "variantId": "dive#lane-hard",
    "storyId": "dive",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "冒进线",
    "laneKey": "hard"
  },
  {
    "variantId": "escape#lane-ally",
    "storyId": "escape",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "直觉线",
    "laneKey": "ally"
  },
  {
    "variantId": "escape#lane-bear",
    "storyId": "escape",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "推理线",
    "laneKey": "bear"
  },
  {
    "variantId": "escape#lane-hard",
    "storyId": "escape",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "暴力线",
    "laneKey": "hard"
  },
  {
    "variantId": "heir#lane-ally",
    "storyId": "heir",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "联手线",
    "laneKey": "ally"
  },
  {
    "variantId": "heir#lane-bear",
    "storyId": "heir",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "隐忍线",
    "laneKey": "bear"
  },
  {
    "variantId": "heir#lane-hard",
    "storyId": "heir",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "硬刚线",
    "laneKey": "hard"
  },
  {
    "variantId": "memory#lane-ally",
    "storyId": "memory",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "交换线",
    "laneKey": "ally"
  },
  {
    "variantId": "memory#lane-bear",
    "storyId": "memory",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "留白线",
    "laneKey": "bear"
  },
  {
    "variantId": "memory#lane-hard",
    "storyId": "memory",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "买断线",
    "laneKey": "hard"
  },
  {
    "variantId": "mirror#lane-ally",
    "storyId": "mirror",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "融合线",
    "laneKey": "ally"
  },
  {
    "variantId": "mirror#lane-bear",
    "storyId": "mirror",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "退让线",
    "laneKey": "bear"
  },
  {
    "variantId": "mirror#lane-hard",
    "storyId": "mirror",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "对峙线",
    "laneKey": "hard"
  },
  {
    "variantId": "mission#lane-ally",
    "storyId": "mission",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "托付线",
    "laneKey": "ally"
  },
  {
    "variantId": "mission#lane-bear",
    "storyId": "mission",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "绕路线",
    "laneKey": "bear"
  },
  {
    "variantId": "mission#lane-hard",
    "storyId": "mission",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "拼命线",
    "laneKey": "hard"
  },
  {
    "variantId": "queen#lane-ally",
    "storyId": "queen",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "结盟线",
    "laneKey": "ally"
  },
  {
    "variantId": "queen#lane-bear",
    "storyId": "queen",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "蛰伏线",
    "laneKey": "bear"
  },
  {
    "variantId": "queen#lane-hard",
    "storyId": "queen",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "翻脸线",
    "laneKey": "hard"
  },
  {
    "variantId": "rider#lane-ally",
    "storyId": "rider",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "搭手线",
    "laneKey": "ally"
  },
  {
    "variantId": "rider#lane-bear",
    "storyId": "rider",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "绕路线",
    "laneKey": "bear"
  },
  {
    "variantId": "rider#lane-hard",
    "storyId": "rider",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "硬扛线",
    "laneKey": "hard"
  },
  {
    "variantId": "shanhai#lane-ally",
    "storyId": "shanhai",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "结缘线",
    "laneKey": "ally"
  },
  {
    "variantId": "shanhai#lane-bear",
    "storyId": "shanhai",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "守灶线",
    "laneKey": "bear"
  },
  {
    "variantId": "shanhai#lane-hard",
    "storyId": "shanhai",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "掌勺线",
    "laneKey": "hard"
  },
  {
    "variantId": "sword#lane-ally",
    "storyId": "sword",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "共鸣线",
    "laneKey": "ally"
  },
  {
    "variantId": "sword#lane-bear",
    "storyId": "sword",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "守拙线",
    "laneKey": "bear"
  },
  {
    "variantId": "sword#lane-hard",
    "storyId": "sword",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "斩断线",
    "laneKey": "hard"
  },
  {
    "variantId": "telegram#lane-ally",
    "storyId": "telegram",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "托付线",
    "laneKey": "ally"
  },
  {
    "variantId": "telegram#lane-bear",
    "storyId": "telegram",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "潜伏线",
    "laneKey": "bear"
  },
  {
    "variantId": "telegram#lane-hard",
    "storyId": "telegram",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "强攻线",
    "laneKey": "hard"
  },
  {
    "variantId": "timecross#lane-ally",
    "storyId": "timecross",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "沙雕线",
    "laneKey": "ally"
  },
  {
    "variantId": "timecross#lane-bear",
    "storyId": "timecross",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "摆烂线",
    "laneKey": "bear"
  },
  {
    "variantId": "timecross#lane-hard",
    "storyId": "timecross",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "装逼线",
    "laneKey": "hard"
  },
  {
    "variantId": "window#lane-ally",
    "storyId": "window",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "并肩线",
    "laneKey": "ally"
  },
  {
    "variantId": "window#lane-bear",
    "storyId": "window",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "慢热线",
    "laneKey": "bear"
  },
  {
    "variantId": "window#lane-hard",
    "storyId": "window",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "直球线",
    "laneKey": "hard"
  },
  {
    "variantId": "zhenbei#lane-ally",
    "storyId": "zhenbei",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "并肩线",
    "laneKey": "ally"
  },
  {
    "variantId": "zhenbei#lane-bear",
    "storyId": "zhenbei",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "蛰伏线",
    "laneKey": "bear"
  },
  {
    "variantId": "zhenbei#lane-hard",
    "storyId": "zhenbei",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "铁血线",
    "laneKey": "hard"
  },
  {
    "variantId": "zhuixu#lane-ally",
    "storyId": "zhuixu",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "联手线",
    "laneKey": "ally"
  },
  {
    "variantId": "zhuixu#lane-bear",
    "storyId": "zhuixu",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "隐忍线",
    "laneKey": "bear"
  },
  {
    "variantId": "zhuixu#lane-hard",
    "storyId": "zhuixu",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "硬刚线",
    "laneKey": "hard"
  },
  {
    "variantId": "zomb#lane-ally",
    "storyId": "zomb",
    "variantType": "lane",
    "variantIndex": 3,
    "variantLabel_zh": "同心线",
    "laneKey": "ally"
  },
  {
    "variantId": "zomb#lane-bear",
    "storyId": "zomb",
    "variantType": "lane",
    "variantIndex": 2,
    "variantLabel_zh": "潜行线",
    "laneKey": "bear"
  },
  {
    "variantId": "zomb#lane-hard",
    "storyId": "zomb",
    "variantType": "lane",
    "variantIndex": 1,
    "variantLabel_zh": "强攻线",
    "laneKey": "hard"
  }
] as const
