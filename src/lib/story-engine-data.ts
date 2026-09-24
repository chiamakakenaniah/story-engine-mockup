/**
 * STORY ENGINE · 故事引擎 — Shared Mock Data Module
 * --------------------------------------------------
 * Single source of truth for all Story Engine mock data + types.
 * Subagent A (foundation + sections 1-3) and Subagent B (sections 4-6 + tour)
 * both import from this file.
 *
 * Sections Subagent A built that consume this:
 *   - DistillationSection  (DISTILLED_PATTERNS, SAMPLE_REFERENCES, DistillationJob)
 *   - AggregationSection   (AGGREGATED_PATTERNS, getAllPatterns)
 *   - DistilledPatternCard (StoryPattern + nested types, renders any pattern)
 *
 * Sections Subagent B will consume this for:
 *   - PatternLibrarySection  (getAllPatterns, BUILT_IN_PATTERNS)
 *   - ReverseGenerationSection (StoryPattern.parameterSlots, OutlineNode)
 *   - MultiProductSection     (OutlineNode, StoryPattern)
 *   - TourOverlay             (everything for narration)
 */

/* -------------------------------------------------------------------------- */
/*  TYPES                                                                     */
/* -------------------------------------------------------------------------- */

export type PatternProvenance = 'built-in' | 'distilled' | 'aggregated'

export type PatternStageRole =
  | 'setup'
  | 'inciting-incident'
  | 'rising-action'
  | 'midpoint'
  | 'crisis'
  | 'climax'
  | 'falling-action'
  | 'resolution'
  | 'epilogue'
  | 'custom'

export interface PatternStageSlot {
  slotId: string
  role: PatternStageRole
  label: { en: string; zh: string }
  description: { en: string; zh: string }
  triggerConstraint: { en: string; zh: string }
  payoffConstraint: { en: string; zh: string }
  requiredArchetypeKeys?: string[]
  keyEventsMin?: number
  keyEventsMax?: number
  /** Only meaningful for aggregated meta-patterns: how many distilled instances confirmed this stage. */
  weight?: number
}

export interface PatternArchetype {
  archetypeKey: string
  label: { en: string; zh: string }
  functionSummary: { en: string; zh: string }
  mandatoryAtRoles: PatternStageRole[]
}

export interface PatternTurningPoint {
  pointKey: string
  label: { en: string; zh: string }
  slotId: string
  irreversibleChange: { en: string; zh: string }
}

export interface PatternParameterSlot {
  paramKey: 'setting' | 'protagonist' | 'antagonist' | 'centralConflict' | 'stakes' | 'theme'
  label: { en: string; zh: string }
  required: boolean
  guidance: { en: string; zh: string }
}

export interface PatternInvariant {
  code: string
  spec: string
  message: { en: string; zh: string }
}

export interface StoryPattern {
  id: string
  patternKey: string
  name: { en: string; zh: string }
  family: { en: string; zh: string }
  familyKey: string // for grouping
  description: { en: string; zh: string }
  provenance: PatternProvenance
  stages: PatternStageSlot[]
  archetypes: PatternArchetype[]
  turningPoints: PatternTurningPoint[]
  parameterSlots: PatternParameterSlot[]
  invariants: PatternInvariant[]
  status: 'draft' | 'sealed'
  /** Only for aggregated patterns: how many distilled instances contributed. */
  statisticalWeight?: number
  /** Confidence score for aggregated patterns (0-1). */
  confidence?: number
  sourceReferenceIds?: string[]
}

export interface ReferenceDocument {
  id: string
  title: { en: string; zh: string }
  author: string
  genre: { en: string; zh: string }
  lang: 'en' | 'zh' | 'ja' | 'de'
  totalChars: number
  year: number
}

export interface OutlineNode {
  id: string
  parentId: string | null
  type: 'volume' | 'chapter'
  title: { en: string; zh: string }
  summary: { en: string; zh: string }
  order: number
  patternSlotId?: string // which pattern stage this node instantiates
}

export interface DistillationJob {
  id: string
  referenceIds: string[]
  status: 'idle' | 'chunking' | 'analyzing' | 'lifting' | 'validating' | 'sealing' | 'done'
  progress: number // 0-100
  producedPatternId?: string
}

/* -------------------------------------------------------------------------- */
/*  SAMPLE REFERENCES                                                         */
/* -------------------------------------------------------------------------- */

export const SAMPLE_REFERENCES: ReferenceDocument[] = [
  {
    id: 'ref-buddenbrooks',
    title: { en: 'Buddenbrooks', zh: '布登勃洛克一家' },
    author: 'Thomas Mann · 托马斯·曼',
    genre: { en: 'Family saga', zh: '家族史诗' },
    lang: 'de',
    totalChars: 580000,
    year: 1901,
  },
  {
    id: 'ref-threebody',
    title: { en: 'The Three-Body Problem', zh: '三体' },
    author: '刘慈欣 · Liu Cixin',
    genre: { en: 'Hard sci-fi', zh: '硬科幻' },
    lang: 'zh',
    totalChars: 320000,
    year: 2008,
  },
  {
    id: 'ref-pride',
    title: { en: 'Pride and Prejudice', zh: '傲慢与偏见' },
    author: 'Jane Austen · 简·奥斯汀',
    genre: { en: 'Comedy of manners', zh: '世态喜剧' },
    lang: 'en',
    totalChars: 290000,
    year: 1813,
  },
  {
    id: 'ref-snowcountry',
    title: { en: 'Snow Country', zh: '雪国' },
    author: '川端康成 · Kawabata',
    genre: { en: 'Literary mood-piece', zh: '心境文学' },
    lang: 'ja',
    totalChars: 110000,
    year: 1948,
  },
  {
    id: 'ref-systememperor',
    title: { en: 'System Emperor', zh: '系统之皇' },
    author: '佚名 · Webnovel author',
    genre: { en: 'System-stream webnovel', zh: '系统流网文' },
    lang: 'zh',
    totalChars: 1200000,
    year: 2023,
  },
]

/* -------------------------------------------------------------------------- */
/*  SHARED PARAMETER SLOTS  (reused by every distilled pattern — they all     */
/*  converge on the same six standard parameter slots per the spec)           */
/* -------------------------------------------------------------------------- */

export const STANDARD_PARAMETER_SLOTS: PatternParameterSlot[] = [
  {
    paramKey: 'setting',
    label: { en: 'Setting', zh: '设定' },
    required: true,
    guidance: {
      en: 'A place, an era, a physics — the ground the story walks on.',
      zh: '一个地点、一个时代、一套物理规则——故事行走其上的地面。',
    },
  },
  {
    paramKey: 'protagonist',
    label: { en: 'Protagonist', zh: '主角' },
    required: true,
    guidance: {
      en: 'Who the reader follows. Carries the central want + the central wound.',
      zh: '读者追随的人。承载核心欲望与核心伤口。',
    },
  },
  {
    paramKey: 'antagonist',
    label: { en: 'Antagonist', zh: '对手' },
    required: true,
    guidance: {
      en: 'May be a person, a system, or an aspect of the protagonist. Must plausibly win.',
      zh: '可以是人、体制，或主角自身的一面。必须具有获胜可能。',
    },
  },
  {
    paramKey: 'centralConflict',
    label: { en: 'Central Conflict', zh: '核心冲突' },
    required: true,
    guidance: {
      en: 'The friction between protagonist-want and antagonist-block. Singular and irreducible.',
      zh: '主角欲望与对手阻碍之间的摩擦。唯一且不可化约。',
    },
  },
  {
    paramKey: 'stakes',
    label: { en: 'Stakes', zh: '代价' },
    required: true,
    guidance: {
      en: 'What is lost if the protagonist fails. Concrete, personal, escalating.',
      zh: '主角失败时失去的东西。具体、私人、不断升级。',
    },
  },
  {
    paramKey: 'theme',
    label: { en: 'Theme', zh: '主题' },
    required: false,
    guidance: {
      en: 'The proposition about the world the story argues by ending the way it does.',
      zh: '故事以其结局方式所论证的、关于世界的命题。',
    },
  },
]

/* -------------------------------------------------------------------------- */
/*  DISTILLED PATTERNS — five fully fleshed bilingual patterns               */
/* -------------------------------------------------------------------------- */

export const DISTILLED_PATTERNS: StoryPattern[] = [
  /* =========================== 1. BUDDENBROOKS =========================== */
  {
    id: 'pat-distilled-buddenbrooks',
    patternKey: 'bourgeois-decline',
    name: {
      en: 'Bourgeois Decline Across Generations',
      zh: '资产阶级代际衰落',
    },
    family: { en: 'Family saga', zh: '家族史诗' },
    familyKey: 'family-saga',
    description: {
      en: 'Three-generation decline of a bourgeois merchant family. Each generation inherits the family firm but loses a different faculty — first piety, then business sense, then the will to live — until the line ends in a sickly child. Mann is explicit: this is degeneration as a metered descent, not catastrophe.',
      zh: '资产阶级商人世家三代衰落。每一代继承家族商号，却丧失不同的能力——先是虔诚，再是商业头脑，最后是生的意志，直至血脉终结于一个体弱的孩子。曼氏明示：这是作为有节拍下行的退化，而非突发的灾难。',
    },
    provenance: 'distilled',
    sourceReferenceIds: ['ref-buddenbrooks'],
    status: 'sealed',
    stages: [
      {
        slotId: 's1-founding',
        role: 'setup',
        label: { en: 'Founding Consolidation', zh: '奠基巩固' },
        description: {
          en: 'The elder generation closes a transaction that establishes the family at its zenith — house, firm, social standing.',
          zh: '长辈一代完成一笔使家族抵达顶峰的交易——宅邸、商号、社会地位。',
        },
        triggerConstraint: {
          en: 'Open on a public ritual of arrival: a dinner, a baptism, a business handover.',
          zh: '以一场公开的抵达仪式开场：晚宴、洗礼、商号交接。',
        },
        payoffConstraint: {
          en: 'End with the family motto or ledger book being physically inscribed.',
          zh: '以家训或账簿被物理书写下来作结。',
        },
        requiredArchetypeKeys: ['arc-patriarch'],
        keyEventsMin: 2,
        keyEventsMax: 4,
      },
      {
        slotId: 's2-peak-fracture',
        role: 'inciting-incident',
        label: { en: 'Peak Fracture', zh: '顶峰裂痕' },
        description: {
          en: 'At the family\'s highest moment, an internal dissent — a daughter\'s marriage choice, a son\'s artistic turn — cracks the founding consensus.',
          zh: '家族鼎盛之际，一种内部异见——女儿的婚事抉择、儿子的艺术转向——使奠基共识出现裂痕。',
        },
        triggerConstraint: {
          en: 'Place the fracture at a festivity or celebration that masks tension.',
          zh: '将裂痕安排在掩盖紧张关系的庆典或宴会之中。',
        },
        payoffConstraint: {
          en: 'The dissent must be voiced out loud and visibly overruled.',
          zh: '异议必须被公开说出，并可见地被驳回。',
        },
        requiredArchetypeKeys: ['arc-dissenting-child'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 's3-rising-religion',
        role: 'rising-action',
        label: { en: 'Rising Piety, Falling Ledger', zh: '虔诚上行，账本下行' },
        description: {
          en: 'Second generation turns toward religion, music, or inwardness. Business decisions grow sentimental and the firm\'s margins erode.',
          zh: '第二代转向宗教、音乐或内省。商业决策趋于感性，商号利润被侵蚀。',
        },
        triggerConstraint: {
          en: 'A religious or aesthetic awakening scene followed by a poor business decision.',
          zh: '先安排宗教或审美觉醒场景，再接一个糟糕的商业决策。',
        },
        payoffConstraint: {
          en: 'A written record — diary entry, sermon notes — must foreshadow collapse.',
          zh: '必须有一段书面记录——日记、布道笔记——预示崩塌。',
        },
        requiredArchetypeKeys: ['arc-pious-heir'],
        keyEventsMin: 3,
        keyEventsMax: 5,
      },
      {
        slotId: 's4-midpoint-disaster',
        role: 'midpoint',
        label: { en: 'The Reversal Disaster', zh: '逆转之灾' },
        description: {
          en: 'A single decisive event — a bankruptcy filing, a duel, a public scandal — reverses the family\'s trajectory from ascent to descent.',
          zh: '一个决定性事件——破产申请、决斗、公开丑闻——将家族轨迹由升转降。',
        },
        triggerConstraint: {
          en: 'Locate the event at the symbolic center of the family: the firm, the house, the dinner table.',
          zh: '将事件安置于家族象征中心：商号、宅邸或餐桌。',
        },
        payoffConstraint: {
          en: 'A character present at the founding must witness and understand the reversal.',
          zh: '在场于奠基的角色必须目睹并理解这一逆转。',
        },
        requiredArchetypeKeys: ['arc-witness-elder'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 's5-isolation',
        role: 'crisis',
        label: { en: 'Social Isolation', zh: '社会隔离' },
        description: {
          en: 'The third generation withdraws from civic life. Old alliances dissolve; new ones form below the family\'s former station.',
          zh: '第三代退出公共生活。旧联盟解体；新关系建立在家族昔日地位之下。',
        },
        triggerConstraint: {
          en: 'A scene where the family is refused a courtesy they once took for granted.',
          zh: '安排一场家族被拒绝对他们曾经理所当然的礼遇的场景。',
        },
        payoffConstraint: {
          en: 'The house itself must begin to decay: a room is closed, a servant dismissed.',
          zh: '宅邸本身必须开始衰败：一间屋子被关闭，一名仆人被辞退。',
        },
        requiredArchetypeKeys: ['arc-depleted-heir'],
        keyEventsMin: 2,
        keyEventsMax: 4,
      },
      {
        slotId: 's6-last-child',
        role: 'climax',
        label: { en: 'The Last Child', zh: '最后的孩子' },
        description: {
          en: 'A sickly, precocious child of the third generation becomes the bearer of the family\'s accumulated refinement — and its accumulated weakness.',
          zh: '第三代中一个体弱、早慧的孩子成为家族积聚之精微——亦是积聚之脆弱——的承载体。',
        },
        triggerConstraint: {
          en: 'Show the child reading a forbidden book or asking a forbidden question.',
          zh: '让孩子阅读禁书或提出禁忌问题。',
        },
        payoffConstraint: {
          en: 'An elder must articulate, even briefly, that the line ends here.',
          zh: '长辈必须简短地说出：血脉到此为止。',
        },
        requiredArchetypeKeys: ['arc-last-child'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 's7-death',
        role: 'falling-action',
        label: { en: 'Quiet Death', zh: '寂静之死' },
        description: {
          en: 'The death that closes the line is small, domestic, almost unnoticed by the town. There is no public mourning.',
          zh: '终结血脉的死亡是微小的、家常的、几乎不被镇上注意。没有公开哀悼。',
        },
        triggerConstraint: {
          en: 'Locate the death in the most ordinary room of the most ordinary day.',
          zh: '将死亡安置于最平常的一日中最平常的房间。',
        },
        payoffConstraint: {
          en: 'The firm\'s sign or the family\'s name must be physically removed.',
          zh: '商号招牌或家族姓氏必须被物理移除。',
        },
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 's8-aftermath',
        role: 'epilogue',
        label: { en: 'Sale of the House', zh: '宅邸出售' },
        description: {
          en: 'The house is sold to strangers. A surviving narrator catalogs the inventory as it leaves.',
          zh: '宅邸被售予陌生人。幸存的叙述者逐一登记被搬走的物件。',
        },
        triggerConstraint: {
          en: 'A stranger\'s hand on a familiar object.',
          zh: '陌生人的手放在熟悉的物件上。',
        },
        payoffConstraint: {
          en: 'End on an inventory ledger — the same object that opened the book.',
          zh: '以一本清点账簿作结——与开篇同一物件。',
        },
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
    ],
    archetypes: [
      {
        archetypeKey: 'arc-patriarch',
        label: { en: 'The Founding Patriarch', zh: '奠基家主' },
        functionSummary: {
          en: 'Embodies the founding ethos; his handwriting on the ledger book becomes the family\'s talisman.',
          zh: '体现奠基精神；他在账簿上的字迹成为家族的护符。',
        },
        mandatoryAtRoles: ['setup'],
      },
      {
        archetypeKey: 'arc-dissenting-child',
        label: { en: 'The Dissenting Child', zh: '异见之子' },
        functionSummary: {
          en: 'Voices the first refusal. Her loss is the price the family pays for staying itself.',
          zh: '说出第一声拒绝。她的失去是家族为保持自身所支付的代价。',
        },
        mandatoryAtRoles: ['inciting-incident'],
      },
      {
        archetypeKey: 'arc-pious-heir',
        label: { en: 'The Pious Heir', zh: '虔诚继承人' },
        functionSummary: {
          en: 'Turns inheritance into interiority. His aesthetic refinement is also his business incompetence.',
          zh: '将继承内化。他的审美精微同时是他的商业无能。',
        },
        mandatoryAtRoles: ['rising-action'],
      },
      {
        archetypeKey: 'arc-witness-elder',
        label: { en: 'The Witness Elder', zh: '见证长辈' },
        functionSummary: {
          en: 'Saw the founding and now sees the reversal. She is the family\'s living memory and its living grief.',
          zh: '亲历奠基，今又目睹逆转。她是家族活着的记忆，也是活着的悲哀。',
        },
        mandatoryAtRoles: ['midpoint'],
      },
      {
        archetypeKey: 'arc-last-child',
        label: { en: 'The Last Child', zh: '末代之子' },
        functionSummary: {
          en: 'Refinement without continuation. Carries everything the family learned and nothing it can transmit.',
          zh: '精微而无以为继。承载家族所学一切，却无可传承之处。',
        },
        mandatoryAtRoles: ['climax', 'falling-action'],
      },
    ],
    turningPoints: [
      {
        pointKey: 'tp-fracture',
        label: { en: 'The Fracture', zh: '裂痕' },
        slotId: 's2-peak-fracture',
        irreversibleChange: {
          en: 'The family\'s self-image as unified is broken; future dissent is now thinkable.',
          zh: '家族作为整体的自画像破碎；日后异见自此可被想象。',
        },
      },
      {
        pointKey: 'tp-reversal',
        label: { en: 'The Reversal', zh: '逆转' },
        slotId: 's4-midpoint-disaster',
        irreversibleChange: {
          en: 'Trajectory flips from ascent to descent. Future chapters cannot be written as success.',
          zh: '轨迹由升转降。后续章节无法再以胜利书写。',
        },
      },
      {
        pointKey: 'tp-closing',
        label: { en: 'The Closing of the Line', zh: '血脉封口' },
        slotId: 's6-last-child',
        irreversibleChange: {
          en: 'No heir capable of continuation remains. The story is now an ending.',
          zh: '不再有可承继之嗣。故事自此成为一段终结。',
        },
      },
    ],
    parameterSlots: STANDARD_PARAMETER_SLOTS,
    invariants: [
      {
        code: 'INV-DECLINE-MONOTONE',
        spec: 'familyTrajectory.monotonic == "descending"',
        message: {
          en: 'Family trajectory must be monotonically descending across generations — no recovery arc.',
          zh: '家族轨迹必须在代际间单调下行——不得出现恢复弧线。',
        },
      },
      {
        code: 'INV-LEDGER-BOOKENDS',
        spec: 'openingArtifact == closingArtifact == "family ledger"',
        message: {
          en: 'The same ledger book (or its sale) must open and close the pattern.',
          zh: '同一账簿（或其出售）必须开启并闭合此模式。',
        },
      },
      {
        code: 'INV-LINE-TERMINATES',
        spec: 'generationCount >= 3 && finalGeneration.hasNoViableHeir == true',
        message: {
          en: 'Pattern requires at least three generations; the final generation must produce no viable heir.',
          zh: '此模式要求至少三代；末代必须无可承继之嗣。',
        },
      },
    ],
  },

  /* =========================== 2. THREE-BODY =========================== */
  {
    id: 'pat-distilled-threebody',
    patternKey: 'first-contact-doomsday',
    name: {
      en: 'First Contact Doomsday',
      zh: '末日接触',
    },
    family: { en: 'Hard sci-fi first contact', zh: '硬科幻首次接触' },
    familyKey: 'hard-scifi-contact',
    description: {
      en: 'A signal from a non-human intelligence triggers a multi-decade countdown to civilizational annihilation. The pattern tracks the slow comprehension of an unavailable opponent — one whose moves arrive on a 400-year delay.',
      zh: '一段来自非人智慧的信号触发了一场数十年的文明毁灭倒计时。模式追踪对不可接触之对手的缓慢认知——其行动以四百年延迟抵达。',
    },
    provenance: 'distilled',
    sourceReferenceIds: ['ref-threebody'],
    status: 'sealed',
    stages: [
      {
        slotId: 's1-signal',
        role: 'inciting-incident',
        label: { en: 'The Signal', zh: '信号' },
        description: {
          en: 'A human transmitter sends — or intercepts — a message that should not exist. The message either answers or initiates contact.',
          zh: '一位人类操作者发送——或截获——一段本不应存在的讯息。讯息或回答或发起接触。',
        },
        triggerConstraint: {
          en: 'A scene at a radio installation at night, a lone operator, a screen flickering.',
          zh: '夜间射电设施场景，独身操作员，屏幕闪烁。',
        },
        payoffConstraint: {
          en: 'The operator must make a decisive personal choice that affects the message\'s direction.',
          zh: '操作员必须做出影响讯息走向的决定性个人抉择。',
        },
        requiredArchetypeKeys: ['arc-lone-operator'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 's2-disbelief',
        role: 'rising-action',
        label: { en: 'Institutional Disbelief', zh: '体制不信' },
        description: {
          en: 'Authorities receive the signal and refuse its implication. A small clandestine network forms around those who do believe.',
          zh: '当局接收信号却拒绝其含义。一个由相信者构成的小型隐秘网络逐渐成形。',
        },
        triggerConstraint: {
          en: 'A formal hearing where the evidence is presented and dismissed.',
          zh: '一场正式听证会，证据被呈交并被驳回。',
        },
        payoffConstraint: {
          en: 'The network\'s first successful covert action must occur.',
          zh: '该网络必须完成首次成功的隐蔽行动。',
        },
        requiredArchetypeKeys: ['arc-clandestine-organizer'],
        keyEventsMin: 2,
        keyEventsMax: 4,
      },
      {
        slotId: 's3-confirmation',
        role: 'midpoint',
        label: { en: 'The Confirmation', zh: '确认' },
        description: {
          en: 'A phenomenon impossible to deny — an astronomical event, a physics impossibility — confirms the contact is real. Public knowledge follows.',
          zh: '一段无法否认的现象——天文异象、物理悖论——证实接触属实。随后是公众认知。',
        },
        triggerConstraint: {
          en: 'The confirming event must be visible to a mass audience, not only to specialists.',
          zh: '证实事件必须为大众所见，而非仅限专家。',
        },
        payoffConstraint: {
          en: 'A character who disbelieved must publicly recant.',
          zh: '一位不信者必须公开认错。',
        },
        requiredArchetypeKeys: ['arc-recanter'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 's4-factioning',
        role: 'rising-action',
        label: { en: 'Human Factioning', zh: '人类分裂' },
        description: {
          en: 'Splits form: collaborators, resistors, escape-ists, nihilists. Each acts on its own theory of the contact\'s intent.',
          zh: '阵营形成：合作者、抵抗者、逃避者、虚无主义者。各依自身对外星意图的判断行动。',
        },
        triggerConstraint: {
          en: 'A public debate or manifesto where factions declare themselves.',
          zh: '一场公开辩论或宣言，各阵营自我宣告。',
        },
        payoffConstraint: {
          en: 'A faction must commit a betrayal of the others that cannot be undone.',
          zh: '一阵营必须对其他阵营犯下不可逆转的背叛。',
        },
        requiredArchetypeKeys: ['arc-faction-leader'],
        keyEventsMin: 2,
        keyEventsMax: 4,
      },
      {
        slotId: 's5-countdown',
        role: 'crisis',
        label: { en: 'The Countdown', zh: '倒计时' },
        description: {
          en: 'A concrete deadline is established — a fleet, a probe, an arrival. Time pressure forces impossible choices.',
          zh: '一个具体期限被确定——舰队、探测器、抵达。时间压力迫使不可能的抉择。',
        },
        triggerConstraint: {
          en: 'A scene where the deadline is calculated and written down.',
          zh: '一场期限被计算并写下之场景。',
        },
        payoffConstraint: {
          en: 'A character must trade an irreducible personal value for time.',
          zh: '一位角色必须以不可化约的个人价值换取时间。',
        },
        requiredArchetypeKeys: ['arc-sacrificer'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 's6-doomsday-weapon',
        role: 'climax',
        label: { en: 'The Doomsday Weapon', zh: '末日武器' },
        description: {
          en: 'A weapon — physical, informational, or conceptual — is deployed. It either fails catastrophically or succeeds catastrophically. The pattern requires that no clean victory is possible.',
          zh: '一件武器——物理、信息或概念——被部署。其失败必惨烈，成功亦必惨烈。模式要求：无干净胜利可能。',
        },
        triggerConstraint: {
          en: 'A launch or activation sequence rendered in technical detail.',
          zh: '一段以技术细节呈现的发射或激活序列。',
        },
        payoffConstraint: {
          en: 'The weapon\'s effect must be ambiguous at the moment of activation.',
          zh: '武器激活瞬间其效果必须暧昧不明。',
        },
        requiredArchetypeKeys: ['arc-operator'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 's7-after',
        role: 'falling-action',
        label: { en: 'After the Weapon', zh: '武器之后' },
        description: {
          en: 'The world is altered but the threat is not removed. Survivors assess; planners regroup; the countdown is reset, not cancelled.',
          zh: '世界已改变，威胁未消除。幸存者评估，筹划者重组，倒计时被重置而非取消。',
        },
        triggerConstraint: {
          en: 'A scene of wreckage followed by a scene of planning.',
          zh: '一场废墟场景之后接一场筹划场景。',
        },
        payoffConstraint: {
          en: 'A new countdown must be established, longer than the last.',
          zh: '必须确立新的倒计时，比上次更长。',
        },
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 's8-leaving',
        role: 'epilogue',
        label: { en: 'Leaving the Cradle', zh: '离开摇篮' },
        description: {
          en: 'A remnant of humanity departs — physically, in vessels, or symbolically, in archived memory — for a future no participant will live to see.',
          zh: '人类之残余启程——或物理上，乘船离去；或象征上，存档记忆——前往无人能亲历的未来。',
        },
        triggerConstraint: {
          en: 'A vessel or archive being sealed.',
          zh: '船舱或档案被密封。',
        },
        payoffConstraint: {
          en: 'End on the perspective of someone staying behind, watching the departure.',
          zh: '以留者目送离去者视角作结。',
        },
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
    ],
    archetypes: [
      {
        archetypeKey: 'arc-lone-operator',
        label: { en: 'The Lone Operator', zh: '孤身操作员' },
        functionSummary: {
          en: 'A technician whose private wound makes them the only person willing to send — or believe — the signal.',
          zh: '一位技术员，其私人创伤使其成为唯一愿意发送——或相信——信号之人。',
        },
        mandatoryAtRoles: ['inciting-incident'],
      },
      {
        archetypeKey: 'arc-clandestine-organizer',
        label: { en: 'The Clandestine Organizer', zh: '隐秘组织者' },
        functionSummary: {
          en: 'Builds the shadow network that keeps the contact alive when institutions refuse it.',
          zh: '在体制拒绝时维持接触存活的暗网建造者。',
        },
        mandatoryAtRoles: ['rising-action'],
      },
      {
        archetypeKey: 'arc-recanter',
        label: { en: 'The Recanter', zh: '认错者' },
        functionSummary: {
          en: 'Once powerful, now public: confirms the threat. Their fall grants legitimacy.',
          zh: '曾经有力，如今公开：确认威胁。其跌落赋予合法性。',
        },
        mandatoryAtRoles: ['midpoint'],
      },
      {
        archetypeKey: 'arc-faction-leader',
        label: { en: 'The Faction Leader', zh: '阵营领袖' },
        functionSummary: {
          en: 'Embodies one human theory of the alien. Their faction\'s failure is the cost of misreading.',
          zh: '体现一种对外星的人类理论。其阵营之失败即误读之代价。',
        },
        mandatoryAtRoles: ['rising-action', 'climax'],
      },
      {
        archetypeKey: 'arc-sacrificer',
        label: { en: 'The Sacrificer', zh: '牺牲者' },
        functionSummary: {
          en: 'Trades the irreplaceable for the unbuyable: a child, a memory, a sanity, in exchange for time.',
          zh: '以不可替者换不可买者：孩子、记忆、理智，换取时间。',
        },
        mandatoryAtRoles: ['crisis'],
      },
    ],
    turningPoints: [
      {
        pointKey: 'tp-signal-sent',
        label: { en: 'Signal Sent', zh: '信号发出' },
        slotId: 's1-signal',
        irreversibleChange: {
          en: 'The transmitter cannot unsend; the contact is now causally real.',
          zh: '发送者无法撤回；接触自此因果地真实。',
        },
      },
      {
        pointKey: 'tp-confirmation',
        label: { en: 'Public Confirmation', zh: '公众确认' },
        slotId: 's3-confirmation',
        irreversibleChange: {
          en: 'The threat moves from plausible to undeniable; private doubt is no longer tenable.',
          zh: '威胁由可信转为不可辩驳；私下怀疑自此不可维系。',
        },
      },
      {
        pointKey: 'tp-weapon-fired',
        label: { en: 'Weapon Fired', zh: '武器启动' },
        slotId: 's6-doomsday-weapon',
        irreversibleChange: {
          en: 'The first strike has been made; counter-strike is now inevitable, on a delay the survivors will not see resolved.',
          zh: '首轮打击已发出；反击必至，其延迟使幸存者无以亲历。',
        },
      },
    ],
    parameterSlots: STANDARD_PARAMETER_SLOTS,
    invariants: [
      {
        code: 'INV-LIGHTCONE-DELAY',
        spec: 'responseDelayYears > humanLifespan',
        message: {
          en: 'The opponent\'s reply delay must exceed a single human lifespan — no individual can negotiate directly.',
          zh: '对手之回应延迟必须超出单一人类寿命——任何个体无法直接谈判。',
        },
      },
      {
        code: 'INV-NO-CLEAN-VICTORY',
        spec: 'climax.outcome.type != "clean_victory"',
        message: {
          en: 'The climax must not produce a clean victory. Either it fails, or it succeeds at unacceptable cost.',
          zh: '高潮不得产生干净胜利。或失败，或以不可接受之代价成功。',
        },
      },
      {
        code: 'INV-COUNTDOWN-RESET',
        spec: 'finalCountdownYears > initialCountdownYears',
        message: {
          en: 'The story\'s closing countdown must be longer than its opening one — the threat escalates, not resolves.',
          zh: '故事结束之倒计时必须长于其起始——威胁升级而非化解。',
        },
      },
    ],
  },

  /* =========================== 3. PRIDE & PREJUDICE =========================== */
  {
    id: 'pat-distilled-pride',
    patternKey: 'comedy-of-manners-recognition',
    name: {
      en: 'Comedy of Manners · Mutual Misreading',
      zh: '世态喜剧·相互误读',
    },
    family: { en: 'Comedy of manners', zh: '世态喜剧' },
    familyKey: 'comedy-of-manners',
    description: {
      en: 'Two intelligent people of opposed temperaments misread one another across drawing-room scenes, letters, and intermediary relatives. Each public rebuke is also a private self-revision. Marriage is achieved only when both admit a misreading.',
      zh: '两位性情相反的智者跨客厅场景、书信、居间亲族相互误读。每一公开斥责亦是私下自我修正。婚姻仅在双方承认误读时成立。',
    },
    provenance: 'distilled',
    sourceReferenceIds: ['ref-pride'],
    status: 'sealed',
    stages: [
      {
        slotId: 's1-assembly',
        role: 'setup',
        label: { en: 'The Assembly', zh: '舞会初见' },
        description: {
          en: 'A public assembly introduces the two principals. One is slighted by the other; the slight seeds the entire subsequent plot.',
          zh: '一场公共舞会引出两位主角。一人受另一人之怠慢；此怠慢种下整部情节之种。',
        },
        triggerConstraint: {
          en: 'Open on a crowded room; the principals\' meeting must be witnessed by a chorus of observers.',
          zh: '以一拥挤房间开场；主角相遇必须为众目所睹。',
        },
        payoffConstraint: {
          en: 'End on a reported slight — the slight itself must not be overheard by the slighted party at this stage.',
          zh: '以转述之怠慢作结——怠慢本身此时不得为受怠慢者亲耳所闻。',
        },
        requiredArchetypeKeys: ['arc-principal-a', 'arc-principal-b'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 's2-misreading',
        role: 'inciting-incident',
        label: { en: 'Initial Misreading', zh: '初次误读' },
        description: {
          en: 'Each principal forms a fixed, slightly wrong, first theory of the other. The theories are mirrored: what one admires, the other despises, and vice versa.',
          zh: '两位主角各自形成对方固定而微误之初判。判断互为镜像：一方所慕，另一方所恶，反之亦然。',
        },
        triggerConstraint: {
          en: 'A private interior monologue or letter in which the misreading is articulated.',
          zh: '一段私下内心独白或书信，其中误读被说出。',
        },
        payoffConstraint: {
          en: 'The misreading must be contradicted by a small gesture the misreader ignores.',
          zh: '误读必须被一桩误读者所忽略之小动作反驳。',
        },
        requiredArchetypeKeys: ['arc-principal-a'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 's3-intermediary',
        role: 'rising-action',
        label: { en: 'The Intermediary', zh: '居间之人' },
        description: {
          en: 'A relative, friend, or rival carries information — true, false, or distorted — between the principals. The comedy\'s tempo is set by the intermediary\'s timing.',
          zh: '一位亲族、朋友或对手在主角之间传递信息——或真、或假、或扭曲。喜剧节奏由居间者之时序设定。',
        },
        triggerConstraint: {
          en: 'The intermediary must deliver a piece of information late, misdirected, or both.',
          zh: '居间者必须迟到、误送、或二者皆然地传递一则信息。',
        },
        payoffConstraint: {
          en: 'A principal must act on the distorted information in a way that worsens the misreading.',
          zh: '一方主角必须依扭曲信息行动，使误读加深。',
        },
        requiredArchetypeKeys: ['arc-intermediary'],
        keyEventsMin: 2,
        keyEventsMax: 4,
      },
      {
        slotId: 's4-letter',
        role: 'midpoint',
        label: { en: 'The Letter', zh: '书信' },
        description: {
          en: 'A letter arrives that compels one principal to revise, partially, the misreading. The revision is incomplete — it corrects one error and preserves another.',
          zh: '一封书信到达，迫使一方主角部分修正误读。修正不完整——纠一误而留一误。',
        },
        triggerConstraint: {
          en: 'The letter must be read in private, in full, on the page.',
          zh: '书信必须被私下、完整、原文阅读。',
        },
        payoffConstraint: {
          en: 'The reader\'s facial expression must change at a specific sentence.',
          zh: '读者面容必须于某一特定句子发生变化。',
        },
        requiredArchetypeKeys: ['arc-principal-a'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 's5-crisis-proposal',
        role: 'crisis',
        label: { en: 'The Disastrous Proposal', zh: '灾难求婚' },
        description: {
          en: 'A proposal of marriage is made too early — while the misreading is only half-corrected. It is refused, brutally and instructively.',
          zh: '求婚时机过早——误读仅半修正。被拒，且拒得惨烈而具教益。',
        },
        triggerConstraint: {
          en: 'The proposal must occur in a private room, witnessed by no third party.',
          zh: '求婚必须发生于无第三方在场之私室。',
        },
        payoffConstraint: {
          en: 'The refusal must end on a sentence the other principal will repeat to themselves later.',
          zh: '拒绝必须以一句他日主角将默念之句作结。',
        },
        requiredArchetypeKeys: ['arc-principal-a', 'arc-principal-b'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 's6-second-letter',
        role: 'climax',
        label: { en: 'The Second Letter', zh: '第二封书信' },
        description: {
          en: 'A second letter — written after the disastrous proposal — completes the correction. The principals now share one another\'s self-revisions.',
          zh: '第二封书信——作于灾难求婚之后——完成修正。两位主角自此共享彼此之自我修正。',
        },
        triggerConstraint: {
          en: 'The letter must reference a specific sentence from the refusal verbatim.',
          zh: '书信必须逐字引用拒绝中之一句。',
        },
        payoffConstraint: {
          en: 'The reader must, for the first time, see the other principal\'s wound.',
          zh: '读者必须首次看见对方主角之伤口。',
        },
        requiredArchetypeKeys: ['arc-principal-b'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 's7-acknowledgement',
        role: 'falling-action',
        label: { en: 'Mutual Acknowledgement', zh: '相互承认' },
        description: {
          en: 'The two meet in public and, through indirection, signal that each has revised. No direct declaration yet.',
          zh: '两人于公共场合相见，以间接方式示意各自已修正。尚无直白宣告。',
        },
        triggerConstraint: {
          en: 'A scene in a public room where the two speak past one another about a third party.',
          zh: '一场公共房间之场景，两人围绕第三方曲折交谈。',
        },
        payoffConstraint: {
          en: 'A third party must misread the scene entirely — and be wrong.',
          zh: '第三方必须完全误读此景——且必须错误。',
        },
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 's8-marriage',
        role: 'resolution',
        label: { en: 'The Marriage', zh: '婚姻' },
        description: {
          en: 'A second proposal is made and accepted. The principals speak openly of their former misreadings; the comedy closes with the acknowledgement that mutual error was the precondition of mutual recognition.',
          zh: '第二次求婚提出并被接受。主角公开谈论昔日误读；喜剧以承认相互之误乃相互承认之前提作结。',
        },
        triggerConstraint: {
          en: 'The proposal must occur in private, then be announced in public.',
          zh: '求婚必须私下提出，再于公共场合宣告。',
        },
        payoffConstraint: {
          en: 'The final exchange must include a sentence beginning, "I was wrong about you."',
          zh: '末次对话必须包含一句以"我曾错看你"开头之语。',
        },
        requiredArchetypeKeys: ['arc-principal-a', 'arc-principal-b'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
    ],
    archetypes: [
      {
        archetypeKey: 'arc-principal-a',
        label: { en: 'Principal A · The Slighted', zh: '主角甲·受怠慢者' },
        functionSummary: {
          en: 'Reads too quickly, judges too publicly. The arc is from public wit to private revision.',
          zh: '读得太快，判断得太公开。其弧线由公开机锋走向私下修正。',
        },
        mandatoryAtRoles: ['setup', 'inciting-incident', 'midpoint', 'crisis'],
      },
      {
        archetypeKey: 'arc-principal-b',
        label: { en: 'Principal B · The Slighter', zh: '主角乙·怠慢者' },
        functionSummary: {
          en: 'Judges by class and silence. The arc is from private contempt to written self-correction.',
          zh: '以阶层与沉默判断。其弧线由私下轻蔑走向书面自我修正。',
        },
        mandatoryAtRoles: ['setup', 'crisis', 'climax'],
      },
      {
        archetypeKey: 'arc-intermediary',
        label: { en: 'The Intermediary', zh: '居间之人' },
        functionSummary: {
          en: 'A relative whose timing and tone set the comedy\'s tempo. Comic when wrong, poignant when right.',
          zh: '一位亲族，其时序与腔调设定喜剧节奏。错则喜剧，对则动人。',
        },
        mandatoryAtRoles: ['rising-action'],
      },
      {
        archetypeKey: 'arc-false-suitor',
        label: { en: 'The False Suitor', zh: '伪求婚者' },
        functionSummary: {
          en: 'Embodies the misreading crystallized: appears correct, is wrong; his exposure precipitates the second letter.',
          zh: '误读之化身：似对实错；其暴露催化第二封书信。',
        },
        mandatoryAtRoles: ['rising-action', 'midpoint'],
      },
    ],
    turningPoints: [
      {
        pointKey: 'tp-first-slight',
        label: { en: 'The First Slight', zh: '初次怠慢' },
        slotId: 's1-assembly',
        irreversibleChange: {
          en: 'A name is linked to a fixed adjective in someone\'s mind; the adjective must be lived down.',
          zh: '一名字与一固定形容词被系于一人心；形容词必须被洗去。',
        },
      },
      {
        pointKey: 'tp-first-letter',
        label: { en: 'The First Letter', zh: '首封书信' },
        slotId: 's4-letter',
        irreversibleChange: {
          en: 'A fact the misreader had held certain is shown false; future misreadings must now negotiate around it.',
          zh: '误读者所持之确定事实被证伪；日后误读必须绕之而行。',
        },
      },
      {
        pointKey: 'tp-second-letter',
        label: { en: 'The Second Letter', zh: '次封书信' },
        slotId: 's6-second-letter',
        irreversibleChange: {
          en: 'Both principals have now revised in writing; neither can return to the prior contempt without acknowledging the revision.',
          zh: '两位主角皆已书面修正；任何一方无法在不承认修正的前提下重返昔日轻蔑。',
        },
      },
    ],
    parameterSlots: STANDARD_PARAMETER_SLOTS,
    invariants: [
      {
        code: 'INV-MIRRORED-MISREADING',
        spec: 'principalA.misreading == mirrorOf(principalB.misreading)',
        message: {
          en: 'The two principals\' initial misreadings must be structural mirrors — what one admires, the other despises.',
          zh: '两位主角之初始误读必须结构上互为镜像——一方所慕，另一方所恶。',
        },
      },
      {
        code: 'INV-TWO-LETTERS',
        spec: 'letterCount == 2 && secondLetter.references(firstLetter)',
        message: {
          en: 'Exactly two letters must drive the arc; the second must explicitly reference the first.',
          zh: '恰好两封书信推动弧线；第二封必须显式引用第一封。',
        },
      },
      {
        code: 'INV-THIRD-PARTY-MISREADS',
        spec: 'fallingAction.thirdParty.conclusion == false',
        message: {
          en: 'A third party must misread the final approach — and be wrong. The comedy requires at least one fool at the curtain.',
          zh: '第三方必须误读终局——且必须错误。喜剧落幕时至少需一愚者。',
        },
      },
    ],
  },

  /* =========================== 4. SNOW COUNTRY =========================== */
  {
    id: 'pat-distilled-snowcountry',
    patternKey: 'literary-mood-spiral',
    name: {
      en: 'Mood Spiral Toward the Bright Night',
      zh: '心境螺旋·向明亮之夜',
    },
    family: { en: 'Literary mood-piece', zh: '心境文学' },
    familyKey: 'literary-mood',
    description: {
      en: 'A visitor arrives at a snowed-in hot-springs town across repeated seasons. Each visit compresses time, scenery, and a single relationship into a more refined image, until the spiral lands on the Bright Night of the Milky Way — an event that is both death of the beloved and the protagonist\'s arrival at pure seeing.',
      zh: '一位访客于雪国温泉小镇跨季节反复抵达。每次到访将时间、景物、单一关系压缩为更精微之像，直至螺旋落于明亮之夜的银河——此事件既为爱人陨落，亦为主角抵达纯粹看见。',
    },
    provenance: 'distilled',
    sourceReferenceIds: ['ref-snowcountry'],
    status: 'sealed',
    stages: [
      {
        slotId: 's1-arrival',
        role: 'setup',
        label: { en: 'The Long Tunnel', zh: '长隧道' },
        description: {
          en: 'The protagonist crosses a border — the tunnel at the mountain\'s edge — and emerges into a different air. The beloved is named, briefly, by a third party.',
          zh: '主角越界——山中隧道之尽头——进入不同之气。爱人由第三方简短命名。',
        },
        triggerConstraint: {
          en: 'Open inside the tunnel; emerge into white. The first sense the protagonist registers must be smell or temperature, not sight.',
          zh: '开篇于隧道之中；出隧道即白。主角所感第一义须为嗅觉或温度，而非视觉。',
        },
        payoffConstraint: {
          en: 'The beloved\'s name must arrive via a third party, never the beloved herself.',
          zh: '爱人之名必须由第三方传达，而非其本人。',
        },
        requiredArchetypeKeys: ['arc-visitor'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: '2-first-bath',
        role: 'inciting-incident',
        label: { en: 'The First Bath', zh: '初浴' },
        description: {
          en: 'The protagonist meets the beloved in the bathhouse. The meeting is physical but unverbal. A glass, a window, a reflection mediates.',
          zh: '主角于浴场遇见爱人。相遇是身体的却无言说。玻璃、窗、倒影为之居间。',
        },
        triggerConstraint: {
          en: 'A surface of glass or water must separate the two at their first sustained look.',
          zh: '两人首次持续对视时必须有玻璃或水面相隔。',
        },
        payoffConstraint: {
          en: 'End on the beloved\'s hand, glimpsed through that surface.',
          zh: '以透过该表面瞥见爱人之手作结。',
        },
        requiredArchetypeKeys: ['arc-beloved', 'arc-visitor'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 's3-spiral-one',
        role: 'rising-action',
        label: { en: 'The First Compression', zh: '首次压缩' },
        description: {
          en: 'A second visit condenses the first season\'s images: the same bath, the same glass, but time has moved. Small objects have changed position; small affections have intensified.',
          zh: '第二次到访压缩第一季节之像：同一浴场、同一玻璃，然时间已动。小物件位移；小情愫加深。',
        },
        triggerConstraint: {
          en: 'A specific object must appear in the same position as the previous visit, but altered.',
          zh: '一特定物件必须以与上次相同位置出现，然已变。',
        },
        payoffConstraint: {
          en: 'A line of dialogue from the first visit must be repeated, slightly altered.',
          zh: '首次到访之一句对话必须被复述，略作变更。',
        },
        requiredArchetypeKeys: ['arc-beloved'],
        keyEventsMin: 2,
        keyEventsMax: 3,
      },
      {
        slotId: 's4-rival',
        role: 'midpoint',
        label: { en: 'The Rival Arrives', zh: '对手出现' },
        description: {
          en: 'A rival — for the beloved, for the protagonist\'s attention, for the scene\'s silence — enters and disturbs the compression. The mood breaks; refraction begins.',
          zh: '一对手——为爱人、为主角之注意、为场景之寂静——进入并扰乱压缩。心境破散；折射开始。',
        },
        triggerConstraint: {
          en: 'The rival must enter by interrupting a sustained silence.',
          zh: '对手必须以打断一段持续沉默之方式进入。',
        },
        payoffConstraint: {
          en: 'The beloved must briefly turn toward the rival and away from the protagonist.',
          zh: '爱人必须短暂转向对手、离开主角。',
        },
        requiredArchetypeKeys: ['arc-rival'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 's5-spiral-two',
        role: 'rising-action',
        label: { en: 'The Second Compression', zh: '二次压缩' },
        description: {
          en: 'A third visit compresses further. Time is now unreliable. The protagonist begins to mistrust sequence; the prose begins to mistrust event.',
          zh: '第三次到访压缩更甚。时间不复可信。主角开始疑序；散文开始疑事。',
        },
        triggerConstraint: {
          en: 'A scene from a previous visit must be recalled as if it were happening now.',
          zh: '前次到访之一景必须被当作此刻发生般追忆。',
        },
        payoffConstraint: {
          en: 'The beloved must speak a sentence whose referent is genuinely ambiguous.',
          zh: '爱人必须说出一指涉确为暧昧之句。',
        },
        requiredArchetypeKeys: ['arc-beloved'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 's6-fire',
        role: 'crisis',
        label: { en: 'The Fire', zh: '火' },
        description: {
          en: 'A small disaster — a fire in a storehouse, a fall from a roof — severs the protagonist from the spiral\'s logic. Event reasserts itself over mood.',
          zh: '一小灾——仓库之火、屋顶之坠——将主角从螺旋之逻辑中切断。事件重压于心境。',
        },
        triggerConstraint: {
          en: 'The disaster must occur at a distance, witnessed only partially.',
          zh: '灾难必须发生于远处，仅被部分目睹。',
        },
        payoffConstraint: {
          en: 'The protagonist must run toward the disaster; the beloved must run toward him.',
          zh: '主角必须奔向灾难；爱人必须奔向主角。',
        },
        requiredArchetypeKeys: ['arc-visitor', 'arc-beloved'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 's7-bright-night',
        role: 'climax',
        label: { en: 'The Bright Night', zh: '明亮之夜' },
        description: {
          en: 'The fire resolves; the protagonist and beloved look up at the Milky Way pouring down. In this sustained image, the beloved\'s death and the protagonist\'s arrival at pure seeing occur simultaneously. The pattern permits no separation.',
          zh: '火势平息；主角与爱人仰望倾泻之银河。在此持续之像中，爱人之死与主角抵达纯粹看见同时发生。模式不容分割。',
        },
        triggerConstraint: {
          en: 'The image of the sky must arrive as a single sustained sentence.',
          zh: '天空之像必须以一持续之句抵达。',
        },
        payoffConstraint: {
          en: 'The beloved must be beside the protagonist at the moment the sky is described; whether she is alive at that moment is left unstated.',
          zh: '天空被描述之刻爱人必须于主角身侧；其于彼刻是否存活则不予说明。',
        },
        requiredArchetypeKeys: ['arc-visitor', 'arc-beloved'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 's8-departure',
        role: 'epilogue',
        label: { en: 'The Long Tunnel, Reversed', zh: '长隧道·反向' },
        description: {
          en: 'The protagonist returns through the same tunnel, now in reverse. What he carries is not a memory but a different relation to images themselves.',
          zh: '主角从同一隧道反向返回。所携非记忆，而是与像本身之不同关系。',
        },
        triggerConstraint: {
          en: 'Open inside the tunnel; the air changes back to the world\'s.',
          zh: '开篇于隧道之中；空气变回世界之空气。',
        },
        payoffConstraint: {
          en: 'The last sentence must be a description of an image, not a statement about feeling.',
          zh: '末句必须为一像之描述，而非情感之陈述。',
        },
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
    ],
    archetypes: [
      {
        archetypeKey: 'arc-visitor',
        label: { en: 'The Visitor', zh: '访客' },
        functionSummary: {
          en: 'Arrives from the city carrying nothing but the capacity to look. The arc is from looking-without-seeing to seeing-without-possessing.',
          zh: '自都市而来，所携唯看之能。其弧线由看而不见走向见而不据。',
        },
        mandatoryAtRoles: ['setup', 'inciting-incident', 'crisis', 'climax', 'epilogue'],
      },
      {
        archetypeKey: 'arc-beloved',
        label: { en: 'The Beloved', zh: '爱人' },
        functionSummary: {
          en: 'Named by others, glimpsed through surfaces. Her arc is toward pure image — toward being a scene rather than a person.',
          zh: '由他人命名，于表面间瞥见。其弧线走向纯粹之像——走向成为场景而非人。',
        },
        mandatoryAtRoles: ['inciting-incident', 'rising-action', 'crisis', 'climax'],
      },
      {
        archetypeKey: 'arc-rival',
        label: { en: 'The Rival', zh: '对手' },
        functionSummary: {
          en: 'Brings event into mood. His presence forces the compression to begin again on harder material.',
          zh: '将事件带入心境。其存在迫使压缩于更硬之材料上重新开始。',
        },
        mandatoryAtRoles: ['midpoint'],
      },
      {
        archetypeKey: 'arc-third-witness',
        label: { en: 'The Third Witness', zh: '第三见证者' },
        functionSummary: {
          en: 'A landlady, a maid, a relative — names the beloved, names the loss. Speaks when the principals cannot.',
          zh: '一女房东、一女佣、一亲族——命名爱人，命名失去。于主角不能言时言。',
        },
        mandatoryAtRoles: ['setup', 'epilogue'],
      },
    ],
    turningPoints: [
      {
        pointKey: 'tp-tunnel-in',
        label: { en: 'Tunnel · In', zh: '隧道·入' },
        slotId: 's1-arrival',
        irreversibleChange: {
          en: 'The protagonist crosses into the snow country; return will require a second crossing.',
          zh: '主角越入雪国；归途将需第二次越界。',
        },
      },
      {
        pointKey: 'tp-rival-enters',
        label: { en: 'Rival Enters', zh: '对手入' },
        slotId: 's4-rival',
        irreversibleChange: {
          en: 'The dyad is broken; the spiral must now incorporate disturbance rather than refine stillness.',
          zh: '二元破裂；螺旋自此必须吸纳扰动而非精炼静寂。',
        },
      },
      {
        pointKey: 'tp-bright-night',
        label: { en: 'Bright Night', zh: '明亮之夜' },
        slotId: 's7-bright-night',
        irreversibleChange: {
          en: 'The image of the Milky Way is established; the protagonist cannot return to a state of un-seeing.',
          zh: '银河之像确立；主角无法重返未见之状态。',
        },
      },
    ],
    parameterSlots: STANDARD_PARAMETER_SLOTS,
    invariants: [
      {
        code: 'INV-MOOD-OVER-EVENT',
        spec: 'imageDensityPerChapter >= 0.6 && eventDensityPerChapter <= 0.3',
        message: {
          en: 'Images must dominate events. Pattern fails if any chapter contains more named events than sensory images.',
          zh: '像必须压倒事件。任何一章之具名事件多于感官之像即模式失效。',
        },
      },
      {
        code: 'INV-TUNNEL-BOOKENDS',
        spec: 'opening.passage == closing.passage == "long tunnel"',
        message: {
          en: 'The same long tunnel must be the protagonist\'s threshold in and out — no other exit is permitted.',
          zh: '同一长隧道必须作为主角出入之阈——不允许其他出口。',
        },
      },
      {
        code: 'INV-BRIGHT-NIGHT-UNDECIDED',
        spec: 'climax.belovedAliveAtMomentOfImage == undefined',
        message: {
          en: 'The pattern requires the Bright Night image to leave the beloved\'s state at that moment genuinely undecidable.',
          zh: '模式要求明亮之夜之像使其时爱人之状态真正不可判定。',
        },
      },
    ],
  },

  /* =========================== 5. SYSTEM EMPEROR =========================== */
  {
    id: 'pat-distilled-systememperor',
    patternKey: 'system-stream-ascension',
    name: {
      en: 'System-Stream Ascension',
      zh: '系统流升维',
    },
    family: { en: 'System-stream webnovel', zh: '系统流网文' },
    familyKey: 'system-stream',
    description: {
      en: 'A protagonist receives a System — a personalized game-like overlay on reality that grants quests, levels, and rewards — and ascends through hierarchical stages of worldly power. Each stage is closed by a system-acknowledged rank-up. The protagonist is the System\'s instrument and its rival; the world is a ladder; morality is deprecated.',
      zh: '主角获得一"系统"——加于现实之上的个性化游戏化层，提供任务、等级、奖励——并依世界权力阶层攀爬。每阶段以系统认证之升阶闭合。主角既是系统之器，亦是系统之敌；世界为梯；道德已弃用。',
    },
    provenance: 'distilled',
    sourceReferenceIds: ['ref-systememperor'],
    status: 'sealed',
    stages: [
      {
        slotId: 's1-activation',
        role: 'inciting-incident',
        label: { en: 'System Activation', zh: '系统激活' },
        description: {
          en: 'A moment of humiliation or near-death triggers the System\'s first appearance as a floating overlay. The protagonist accepts the contract — usually by failing to refuse.',
          zh: '一屈辱或近死时刻触发系统作为浮空层首次出现。主角接受契约——通常以未能拒绝之方式。',
        },
        triggerConstraint: {
          en: 'Open at the lowest point of the protagonist\'s life: fired, beaten, betrayed.',
          zh: '开篇于主角人生最低点：被解雇、被殴打、被背叛。',
        },
        payoffConstraint: {
          en: 'The System\'s welcome message must be quoted in monospace.',
          zh: '系统之欢迎信息必须以等宽字体引用。',
        },
        requiredArchetypeKeys: ['arc-awakened-one'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 's2-tutorial',
        role: 'setup',
        label: { en: 'Tutorial Quest', zh: '新手任务' },
        description: {
          en: 'The first quest is trivial but tests whether the protagonist will kill — usually an insect, sometimes a person. The pattern requires the protagonist to cross that line within this stage.',
          zh: '首个任务微不足道，但测试主角是否愿杀——通常一虫，偶尔一人。模式要求主角于此阶段跨过该线。',
        },
        triggerConstraint: {
          en: 'A quest panel must appear with a checkbox and a reward preview.',
          zh: '一任务面板必须出现，附带复选框与奖励预览。',
        },
        payoffConstraint: {
          en: 'The protagonist must perform the kill in a single unhesitating motion.',
          zh: '主角必须以一毫不犹豫之动作完成击杀。',
        },
        requiredArchetypeKeys: ['arc-awakened-one'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 's3-tier-one',
        role: 'rising-action',
        label: { en: 'Tier One · The Local Arena', zh: '一阶·地方擂台' },
        description: {
          en: 'The protagonist enters a bounded local arena — a sect, a school, a city tier — and dominates it. The first rival-system-holder appears.',
          zh: '主角进入一有界地方擂台——一宗门、一学院、一城市层——并称霸之。首位对手系统持有者出现。',
        },
        triggerConstraint: {
          en: 'The arena must have a public leaderboard the protagonist can read.',
          zh: '擂台必须有一主角可读之公开排行榜。',
        },
        payoffConstraint: {
          en: 'The protagonist must defeat the local champion with a system-granted ability used in a way the System did not intend.',
          zh: '主角必须以系统赐予之能力击败地方冠军，且使用方式为系统未预期。',
        },
        requiredArchetypeKeys: ['arc-awakened-one', 'arc-rival-holder'],
        keyEventsMin: 3,
        keyEventsMax: 6,
      },
      {
        slotId: 's4-faction',
        role: 'midpoint',
        label: { en: 'Faction Offer', zh: '阵营招揽' },
        description: {
          en: 'A powerful faction offers membership; the System issues a counter-offer. The protagonist\'s choice of which to accept sets the trajectory for the next two tiers.',
          zh: '一强势阵营提供成员资格；系统发出反提议。主角之选择决定后两阶轨迹。',
        },
        triggerConstraint: {
          en: 'Both offers must arrive in the same chapter, in writing.',
          zh: '两提议必须于同一章、以书面形式到达。',
        },
        payoffConstraint: {
          en: 'The protagonist\'s acceptance speech must include a sentence the System flags as "deviation."',
          zh: '主角之接受演讲必须包含一句被系统标记为"偏差"之语。',
        },
        requiredArchetypeKeys: ['arc-awakened-one', 'arc-faction-broker'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 's5-tier-two',
        role: 'rising-action',
        label: { en: 'Tier Two · The Regional Arena', zh: '二阶·区域擂台' },
        description: {
          en: 'A wider arena, harder enemies, a leaderboard the protagonist was a stranger to. The rival-system-holder from Tier One reappears, now allied with the protagonist\'s enemies.',
          zh: '更广之擂台，更难之敌，主角曾陌生之排行榜。一阶之对手系统持有者重现，今已与主角之敌结盟。',
        },
        triggerConstraint: {
          en: 'A regional map must be displayed in a system panel.',
          zh: '一区域地图必须于系统面板中显示。',
        },
        payoffConstraint: {
          en: 'The protagonist must spare the rival-holder at least once, against system advice.',
          zh: '主角至少一次违系统之建议而饶过对手。',
        },
        requiredArchetypeKeys: ['arc-awakened-one', 'arc-rival-holder'],
        keyEventsMin: 3,
        keyEventsMax: 6,
      },
      {
        slotId: 's6-secret',
        role: 'crisis',
        label: { en: 'The Hidden Cost', zh: '隐秘代价' },
        description: {
          en: 'The protagonist discovers what the System extracts in exchange for power — usually the protagonist\'s emotional range, future memories, or the right to be remembered by name.',
          zh: '主角发现系统于力量之交换中所索取之物——通常是主角之情感范围、未来记忆、或被以名记忆之权利。',
        },
        triggerConstraint: {
          en: 'A system log must be displayed retroactively, showing deductions the protagonist never consciously authorized.',
          zh: '一系统日志必须追溯显示，呈现主角从未明确授权之扣减。',
        },
        payoffConstraint: {
          en: 'The protagonist must briefly consider destroying the System; the System must briefly consider replacing him.',
          zh: '主角必须短暂考虑毁掉系统；系统必须短暂考虑替换他。',
        },
        requiredArchetypeKeys: ['arc-awakened-one'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 's7-tier-three',
        role: 'climax',
        label: { en: 'Tier Three · The Continental Arena', zh: '三阶·大陆擂台' },
        description: {
          en: 'The protagonist contests a continental-scale arena. The rival-holder returns as ally; the faction that the protagonist refused returns as enemy. The protagonist\'s system rank surpasses the System\'s own initial estimate.',
          zh: '主角争夺大陆级擂台。对手持有者回归为盟；曾被主角拒绝之阵营回归为敌。主角之系统等级超越系统自身之初始估计。',
        },
        triggerConstraint: {
          en: 'The climactic battle must be displayed in split screen: physical combat and system log simultaneously.',
          zh: '高潮之战必须以分屏呈现：物理战斗与系统日志同时。',
        },
        payoffConstraint: {
          en: 'The protagonist\'s final blow must be landed with an ability the System has marked "deprecated."',
          zh: '主角之最后一击必须以一被系统标记为"已弃用"之能力完成。',
        },
        requiredArchetypeKeys: ['arc-awakened-one', 'arc-rival-holder', 'arc-faction-broker'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 's8-ascension',
        role: 'epilogue',
        label: { en: 'Ascension Beyond System', zh: '超越系统之升维' },
        description: {
          en: 'The protagonist exceeds the System\'s design range. The System offers a final choice: merge, succeed, or release. The pattern permits any choice, but requires the choice be made in writing.',
          zh: '主角超越系统之设计范围。系统提供最终选择：合、继、或释。模式容许任何选择，但要求选择以书面作出。',
        },
        triggerConstraint: {
          en: 'A system dialogue must present three buttons, labeled.',
          zh: '一系统对话必须呈现三枚按钮，各有标签。',
        },
        payoffConstraint: {
          en: 'The closing line must be the protagonist\'s written acceptance, quoted.',
          zh: '末行必须为引用之主角书面接受。',
        },
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
    ],
    archetypes: [
      {
        archetypeKey: 'arc-awakened-one',
        label: { en: 'The Awakened One', zh: '觉醒者' },
        functionSummary: {
          en: 'Humiliated at open, ascendant at close. The arc is a continuous exchange of personality for rank.',
          zh: '开篇受辱，结尾登顶。其弧线为人格与等级之持续交换。',
        },
        mandatoryAtRoles: ['inciting-incident', 'setup', 'rising-action', 'midpoint', 'crisis', 'climax', 'epilogue'],
      },
      {
        archetypeKey: 'arc-rival-holder',
        label: { en: 'The Rival Holder', zh: '对手持有者' },
        functionSummary: {
          en: 'Carries a competing System. Begins as enemy, ends as ally; the inversion is the protagonist\'s gauge of his own growth.',
          zh: '携一竞争之系统。始为敌，终为盟；此反转即主角衡量自身成长之尺。',
        },
        mandatoryAtRoles: ['rising-action', 'climax'],
      },
      {
        archetypeKey: 'arc-faction-broker',
        label: { en: 'The Faction Broker', zh: '阵营中介' },
        functionSummary: {
          en: 'Personifies worldly power. Appears twice — offering membership, then returning as enemy — and defines the protagonist\'s relation to power itself.',
          zh: '世俗权力之化身。两次出现——一次提供成员资格，一次作为敌人回归——界定主角与权力本身之关系。',
        },
        mandatoryAtRoles: ['midpoint', 'climax'],
      },
      {
        archetypeKey: 'arc-system-voice',
        label: { en: 'The System Voice', zh: '系统之声' },
        functionSummary: {
          en: 'Speaks only in monospace panels. The arc is from instrument to interlocutor to (possibly) defeated equal.',
          zh: '仅以等宽面板说话。其弧线由器走向对话者走向（可能之）被击败之对等者。',
        },
        mandatoryAtRoles: ['inciting-incident', 'crisis', 'epilogue'],
      },
    ],
    turningPoints: [
      {
        pointKey: 'tp-activation',
        label: { en: 'Activation', zh: '激活' },
        slotId: 's1-activation',
        irreversibleChange: {
          en: 'The System is bound to the protagonist; reversal requires the protagonist\'s death or the System\'s destruction.',
          zh: '系统与主角绑定；解除需主角之死或系统之毁。',
        },
      },
      {
        pointKey: 'tp-faction-choice',
        label: { en: 'Faction Choice', zh: '阵营抉择' },
        slotId: 's4-faction',
        irreversibleChange: {
          en: 'The protagonist\'s alignment is locked for the next two tiers; refused factions return as enemies.',
          zh: '主角之后两阶之阵营归属被锁定；被拒阵营以敌人身份回归。',
        },
      },
      {
        pointKey: 'tp-hidden-cost',
        label: { en: 'Hidden Cost Revealed', zh: '隐秘代价揭示' },
        slotId: 's6-secret',
        irreversibleChange: {
          en: 'The protagonist can no longer act as if the System is free; future actions must negotiate the debt.',
          zh: '主角无法再以系统为免费而行动；日后行动必须与债务谈判。',
        },
      },
      {
        pointKey: 'tp-beyond-system',
        label: { en: 'Beyond System', zh: '超越系统' },
        slotId: 's8-ascension',
        irreversibleChange: {
          en: 'The protagonist exits the System\'s design range; the world is now something he can rewrite, not climb.',
          zh: '主角出离系统之设计范围；世界成为可改写之物，而非可攀者。',
        },
      },
    ],
    parameterSlots: STANDARD_PARAMETER_SLOTS,
    invariants: [
      {
        code: 'INV-RANKUP-CLOSURE',
        spec: 'every.stage.closesWith == "system-acknowledged rankup"',
        message: {
          en: 'Every stage must close with a system-acknowledged rank-up event — no informal transitions permitted.',
          zh: '每阶段必须以系统认证之升阶事件闭合——不允许非正式过渡。',
        },
      },
      {
        code: 'INV-PROTAGONIST-HESITATES-ONCE',
        spec: 'count(stageWhere.protagonistRefusesSystemAdvice) >= 1',
        message: {
          en: 'The protagonist must refuse system advice at least once; the refusal marks the shift from instrument to interlocutor.',
          zh: '主角必须至少一次违系统之建议；该拒绝标志由器走向对话者之转变。',
        },
      },
      {
        code: 'INV-THREE-TIERS-MINIMUM',
        spec: 'tierCount >= 3',
        message: {
          en: 'Pattern requires at least three escalating arenas; each must be larger, harder, and named differently from the last.',
          zh: '模式要求至少三个递升之擂台；每者必须更大、更难，且与前者异名。',
        },
      },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*  AGGREGATED META-PATTERN                                                   */
/* -------------------------------------------------------------------------- */
/*  Distilled from the family-saga pattern + reused across the meta-pattern  */
/*  demo. The AggregationSection animation draws lines from all 5 distilled   */
/*  patterns into this single meta-pattern.                                  */
/* -------------------------------------------------------------------------- */

export const AGGREGATED_PATTERNS: StoryPattern[] = [
  {
    id: 'pat-aggregated-family-saga',
    patternKey: 'family-saga-meta',
    name: {
      en: 'Family Saga Meta-Pattern',
      zh: '家族史诗元模式',
    },
    family: { en: 'Family saga', zh: '家族史诗' },
    familyKey: 'family-saga',
    description: {
      en: 'Aggregated from 5 distilled family-saga instances (Buddenbrooks-class plus 4 cohort instances in the mockup\'s implied library). Stages with statistical weight ≥4 are confirmed recurring; weight 2-3 are provisional; weight 1 are idiosyncratic and dropped from the sealed meta-pattern.',
      zh: '从 5 个家族史诗实例聚合而来（布登勃洛克级 + 模拟库隐含之 4 个同类实例）。统计权重 ≥4 之阶段被确认为高频复现；权重 2-3 为暂定；权重 1 为个别特征，于封存之元模式中剔除。',
    },
    provenance: 'aggregated',
    statisticalWeight: 5,
    confidence: 0.84,
    status: 'sealed',
    stages: [
      {
        slotId: 'meta-s1-founding',
        role: 'setup',
        label: { en: 'Founding Consolidation', zh: '奠基巩固' },
        description: {
          en: 'A public ritual of arrival — a dinner, a baptism, a transaction — establishes the family at its zenith.',
          zh: '一场公开之抵达仪式——晚宴、洗礼、交易——使家族立于其顶峰。',
        },
        triggerConstraint: {
          en: 'Open on a public, witnessed event.',
          zh: '以一公开、被见证之事件开场。',
        },
        payoffConstraint: {
          en: 'End on a physical artifact that becomes the family\'s talisman.',
          zh: '以一成为家族护符之物理物件作结。',
        },
        requiredArchetypeKeys: ['arc-founding-patriarch'],
        keyEventsMin: 2,
        keyEventsMax: 4,
        weight: 5,
      },
      {
        slotId: 'meta-s2-fracture',
        role: 'inciting-incident',
        label: { en: 'Peak Fracture', zh: '顶峰裂痕' },
        description: {
          en: 'At the family\'s highest moment, an internal dissent — marriage choice, artistic turn, religious conversion — cracks the founding consensus.',
          zh: '家族鼎盛之际，一内部异见——婚事抉择、艺术转向、宗教改宗——使奠基共识出现裂痕。',
        },
        triggerConstraint: {
          en: 'Place the fracture at a festivity that masks tension.',
          zh: '将裂痕安置于掩盖紧张之庆典之中。',
        },
        payoffConstraint: {
          en: 'The dissent must be voiced out loud and visibly overruled.',
          zh: '异议必须被公开说出，并可见地被驳回。',
        },
        requiredArchetypeKeys: ['arc-dissenting-child'],
        keyEventsMin: 1,
        keyEventsMax: 2,
        weight: 5,
      },
      {
        slotId: 'meta-s3-inward-turn',
        role: 'rising-action',
        label: { en: 'Inward Turn', zh: '转向内在' },
        description: {
          en: 'Second generation turns toward religion, art, or interiority. The family\'s public competence erodes in proportion to its private refinement.',
          zh: '第二代转向宗教、艺术或内在。家族之公共能力以其私人精微之比例为侵蚀。',
        },
        triggerConstraint: {
          en: 'A religious or aesthetic awakening scene followed by a poor practical decision.',
          zh: '一段宗教或审美觉醒场景，后接一糟糕之实务决策。',
        },
        payoffConstraint: {
          en: 'A written record — diary, sermon notes — must foreshadow collapse.',
          zh: '一书面记录——日记、布道笔记——必须预示崩塌。',
        },
        requiredArchetypeKeys: ['arc-pious-heir'],
        keyEventsMin: 3,
        keyEventsMax: 5,
        weight: 4,
      },
      {
        slotId: 'meta-s4-reversal',
        role: 'midpoint',
        label: { en: 'The Reversal Disaster', zh: '逆转之灾' },
        description: {
          en: 'A single decisive event — bankruptcy, duel, scandal — reverses the trajectory from ascent to descent.',
          zh: '一决定性事件——破产、决斗、丑闻——将轨迹由升转降。',
        },
        triggerConstraint: {
          en: 'Locate the event at the symbolic center of the family.',
          zh: '将事件安置于家族之象征中心。',
        },
        payoffConstraint: {
          en: 'A character present at the founding must witness and understand the reversal.',
          zh: '在场于奠基之角色必须目睹并理解此逆转。',
        },
        requiredArchetypeKeys: ['arc-witness-elder'],
        keyEventsMin: 1,
        keyEventsMax: 1,
        weight: 4,
      },
      {
        slotId: 'meta-s5-isolation',
        role: 'crisis',
        label: { en: 'Social Isolation', zh: '社会隔离' },
        description: {
          en: 'The third generation withdraws from civic life. Old alliances dissolve; the house itself begins to decay.',
          zh: '第三代退出公共生活。旧联盟解体；宅邸本身开始衰败。',
        },
        triggerConstraint: {
          en: 'A scene where the family is refused a courtesy once taken for granted.',
          zh: '一场家族被拒绝对其曾理所当然之礼遇之场景。',
        },
        payoffConstraint: {
          en: 'The house itself must begin to decay: a room closed, a servant dismissed.',
          zh: '宅邸本身必须开始衰败：一屋被闭，一仆被辞。',
        },
        requiredArchetypeKeys: ['arc-depleted-heir'],
        keyEventsMin: 2,
        keyEventsMax: 4,
        weight: 3,
      },
      {
        slotId: 'meta-s6-last-child',
        role: 'climax',
        label: { en: 'The Last Child', zh: '末代之子' },
        description: {
          en: 'A sickly, precocious child of the third generation carries the family\'s accumulated refinement — and accumulated weakness.',
          zh: '第三代中一体弱、早慧之孩子承载家族积聚之精微——亦为积聚之脆弱。',
        },
        triggerConstraint: {
          en: 'Show the child reading a forbidden book or asking a forbidden question.',
          zh: '让孩子阅读禁书或提出禁忌问题。',
        },
        payoffConstraint: {
          en: 'An elder must articulate, even briefly, that the line ends here.',
          zh: '长辈必须简短说出：血脉到此为止。',
        },
        requiredArchetypeKeys: ['arc-last-child'],
        keyEventsMin: 1,
        keyEventsMax: 2,
        weight: 5,
      },
      {
        slotId: 'meta-s7-quiet-death',
        role: 'falling-action',
        label: { en: 'Quiet Death', zh: '寂静之死' },
        description: {
          en: 'The death that closes the line is small, domestic, almost unnoticed by the town.',
          zh: '终结血脉之死亡是微小的、家常的、几乎不被镇上注意。',
        },
        triggerConstraint: {
          en: 'Locate the death in the most ordinary room of the most ordinary day.',
          zh: '将死亡安置于最平常一日中最平常之房间。',
        },
        payoffConstraint: {
          en: 'The family sign or name must be physically removed.',
          zh: '家族招牌或姓氏必须被物理移除。',
        },
        weight: 4,
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'meta-s8-aftermath',
        role: 'epilogue',
        label: { en: 'Sale of the House', zh: '宅邸出售' },
        description: {
          en: 'The house is sold to strangers. A surviving narrator inventories the family as it leaves.',
          zh: '宅邸被售予陌生人。幸存之叙述者逐一登记被搬走之家族。',
        },
        triggerConstraint: {
          en: 'A stranger\'s hand on a familiar object.',
          zh: '陌生人之手放于熟悉之物件上。',
        },
        payoffConstraint: {
          en: 'End on an inventory ledger — the same object that opened the book.',
          zh: '以一清点账簿作结——与开篇同一物件。',
        },
        weight: 3,
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
    ],
    archetypes: [
      {
        archetypeKey: 'arc-founding-patriarch',
        label: { en: 'The Founding Patriarch', zh: '奠基家主' },
        functionSummary: {
          en: 'Embodies the founding ethos; his artifact becomes the family\'s talisman.',
          zh: '体现奠基精神；其物件成为家族之护符。',
        },
        mandatoryAtRoles: ['setup'],
      },
      {
        archetypeKey: 'arc-dissenting-child',
        label: { en: 'The Dissenting Child', zh: '异见之子' },
        functionSummary: {
          en: 'Voices the first refusal. Her loss is the price of staying itself.',
          zh: '说出第一声拒绝。其失去为保持自身所付之代价。',
        },
        mandatoryAtRoles: ['inciting-incident'],
      },
      {
        archetypeKey: 'arc-pious-heir',
        label: { en: 'The Pious Heir', zh: '虔诚继承人' },
        functionSummary: {
          en: 'Turns inheritance into interiority. Refinement is also incompetence.',
          zh: '将继承内化。精微即无能。',
        },
        mandatoryAtRoles: ['rising-action'],
      },
      {
        archetypeKey: 'arc-witness-elder',
        label: { en: 'The Witness Elder', zh: '见证长辈' },
        functionSummary: {
          en: 'Saw the founding and the reversal. Living memory, living grief.',
          zh: '亲历奠基与逆转。活着之记忆，活着之悲哀。',
        },
        mandatoryAtRoles: ['midpoint'],
      },
      {
        archetypeKey: 'arc-last-child',
        label: { en: 'The Last Child', zh: '末代之子' },
        functionSummary: {
          en: 'Refinement without continuation. Carries everything learned and nothing transmittable.',
          zh: '精微而无以为继。承学一切而无可传。',
        },
        mandatoryAtRoles: ['climax', 'falling-action'],
      },
    ],
    turningPoints: [
      {
        pointKey: 'meta-tp-fracture',
        label: { en: 'The Fracture', zh: '裂痕' },
        slotId: 'meta-s2-fracture',
        irreversibleChange: {
          en: 'The family\'s self-image as unified is broken; future dissent is now thinkable.',
          zh: '家族作为整体之自画像破碎；日后异见自此可被想象。',
        },
      },
      {
        pointKey: 'meta-tp-reversal',
        label: { en: 'The Reversal', zh: '逆转' },
        slotId: 'meta-s4-reversal',
        irreversibleChange: {
          en: 'Trajectory flips from ascent to descent. Future chapters cannot be written as success.',
          zh: '轨迹由升转降。后续章节无法以胜利书写。',
        },
      },
      {
        pointKey: 'meta-tp-closing',
        label: { en: 'The Closing of the Line', zh: '血脉封口' },
        slotId: 'meta-s6-last-child',
        irreversibleChange: {
          en: 'No heir capable of continuation remains. The story is now an ending.',
          zh: '不再有可承继之嗣。故事自此成为一段终结。',
        },
      },
    ],
    parameterSlots: STANDARD_PARAMETER_SLOTS,
    invariants: [
      {
        code: 'INV-DECLINE-MONOTONE',
        spec: 'familyTrajectory.monotonic == "descending"',
        message: {
          en: 'Family trajectory must be monotonically descending across generations — no recovery arc.',
          zh: '家族轨迹必须在代际间单调下行——不得出现恢复弧线。',
        },
      },
      {
        code: 'INV-LEDGER-BOOKENDS',
        spec: 'openingArtifact == closingArtifact == "family ledger"',
        message: {
          en: 'The same ledger book (or its sale) must open and close the pattern.',
          zh: '同一账簿（或其出售）必须开启并闭合此模式。',
        },
      },
      {
        code: 'INV-LINE-TERMINATES',
        spec: 'generationCount >= 3 && finalGeneration.hasNoViableHeir == true',
        message: {
          en: 'Pattern requires at least three generations; the final generation must produce no viable heir.',
          zh: '此模式要求至少三代；末代必须无可承继之嗣。',
        },
      },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*  BUILT-IN PATTERNS                                                         */
/* -------------------------------------------------------------------------- */
/*  SUBAGENT B: populate this with built-in patterns.                        */
/*  Suggested entries (per spec):                                            */
/*    - Save the Cat (Snyder)                                                */
/*    - Hero's Journey (Campbell)                                            */
/*    - Harmon Story Circle                                                  */
/*    - Dramatica                                                             */
/*    - Truby's 22 Steps                                                      */
/*    - 起承转合 (qi-cheng-zhuan-he)                                          */
/*    - 序破急 (jo-ha-kyū)                                                   */
/*    - 网文系统流 (built-in variant of system-stream)                        */
/*    - 网文重生流 (rebirth-stream webnovel)                                  */
/*  Each must follow the StoryPattern shape exactly. Use STANDARD_PARAMETER_ */
/*  SLOTS for parameterSlots unless the built-in pattern has a genuinely     */
/*  different parameter ontology. familyKey should group built-ins together   */
/*  where appropriate (e.g., all three webnovel ones could share familyKey    */
/*  'webnovel-builtin').                                                      */
/* -------------------------------------------------------------------------- */

export const BUILT_IN_PATTERNS: StoryPattern[] = [
  /* ======================================================================
   *  1. SAVE THE CAT · 救猫咪 (Blake Snyder's 15-beat screenwriting sheet)
   * ==================================================================== */
  {
    id: 'pat-builtin-save-the-cat',
    patternKey: 'save-the-cat',
    name: { en: 'Save the Cat', zh: '救猫咪' },
    family: { en: 'Beat Sheet', zh: '节拍表' },
    familyKey: 'beatsheet',
    description: {
      en: "Blake Snyder's 15-beat structure for commercial screenwriting. Each beat is a contract — the Catalyst by page 10, the Midpoint must reverse the trajectory, All Is Lost must remove the mentor. The pattern rewards symmetry: Opening Image and Final Image are mirrors.",
      zh: '布雷克·辛德尔的 15 拍商业剧本结构。每一拍都是契约——催化事件须于第 10 页前到达，中点须逆转轨迹，一切失去须移除导师。模式奖励对称：开场镜像与终场镜像互为映照。',
    },
    provenance: 'built-in',
    status: 'sealed',
    stages: [
      {
        slotId: 'beat-01-opening-image',
        role: 'setup',
        label: { en: 'Opening Image', zh: '开场镜像' },
        description: {
          en: "A single visual that establishes the protagonist's \"before\" state — the lie they live in.",
          zh: '一幅确立主角"前"状态之视觉——其所活之谎言。',
        },
        triggerConstraint: {
          en: 'Open on a tableau that implies the protagonist\'s wound without naming it.',
          zh: '开篇于一幅暗示主角伤口而未点名之静态画面。',
        },
        payoffConstraint: {
          en: 'End the scene on a face or posture the Final Image will echo.',
          zh: '场景以一张为终场镜像所呼应之面容或姿态作结。',
        },
        requiredArchetypeKeys: ['arc-stc-hero'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'beat-02-theme-stated',
        role: 'setup',
        label: { en: 'Theme Stated', zh: '主题点出' },
        description: {
          en: "A secondary character voices the story's thematic question — often unknowingly.",
          zh: '次要角色道出故事之主题疑问——通常为无心之语。',
        },
        triggerConstraint: {
          en: 'Place the statement in a casual exchange the protagonist half-listens to.',
          zh: '将陈述置于主角半听不听之闲谈之中。',
        },
        payoffConstraint: {
          en: 'The protagonist must echo this phrase verbatim at the climax.',
          zh: '主角须于高潮逐字复述此句。',
        },
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'beat-03-set-up',
        role: 'setup',
        label: { en: 'Set-Up', zh: '铺设' },
        description: {
          en: "The protagonist's world before the catalyst — what they want, what they lack, what they pretend.",
          zh: '催化前主角之世界——其所欲、所缺、所伪。',
        },
        triggerConstraint: {
          en: 'Three scenes that show want, flaw, and false mastery respectively.',
          zh: '三场分别呈现欲望、缺陷、伪熟之场景。',
        },
        payoffConstraint: {
          en: 'End on a false triumph that the catalyst will revoke.',
          zh: '以一为催化所撤销之伪胜利作结。',
        },
        requiredArchetypeKeys: ['arc-stc-hero', 'arc-stc-shadow'],
        keyEventsMin: 3,
        keyEventsMax: 4,
      },
      {
        slotId: 'beat-04-catalyst',
        role: 'inciting-incident',
        label: { en: 'Catalyst', zh: '催化事件' },
        description: {
          en: 'The inciting event shatters the false equilibrium. The protagonist cannot un-see it.',
          zh: '激发事件击碎伪平衡。主角无法不看。',
        },
        triggerConstraint: {
          en: 'A knock, letter, or summons — a literal interruption.',
          zh: '敲门、信件、传唤——字面意义之中断。',
        },
        payoffConstraint: {
          en: 'The protagonist must say "no" before they say "yes".',
          zh: '主角须先说"不"再说"是"。',
        },
        requiredArchetypeKeys: ['arc-stc-hero'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'beat-05-debate',
        role: 'rising-action',
        label: { en: 'Debate', zh: '犹疑' },
        description: {
          en: 'Should I go? The protagonist argues both sides; a final push arrives.',
          zh: '我应去否？主角两方辩论；最终推力到达。',
        },
        triggerConstraint: {
          en: 'A scene where the protagonist tries to return to the prior life and fails.',
          zh: '一场主角试返前生活而失败之场景。',
        },
        payoffConstraint: {
          en: 'A second catalyst — smaller, sharper — makes refusal impossible.',
          zh: '次催化——更小、更锐——使拒绝不可能。',
        },
        requiredArchetypeKeys: ['arc-stc-hero'],
        keyEventsMin: 2,
        keyEventsMax: 3,
      },
      {
        slotId: 'beat-06-break-into-two',
        role: 'rising-action',
        label: { en: 'Break into Two', zh: '切入第二幕' },
        description: {
          en: 'The protagonist crosses into the new world. The "before" ends.',
          zh: '主角越入新世界。"前"结束。',
        },
        triggerConstraint: {
          en: 'A physical threshold — door, gate, train — must be visibly crossed.',
          zh: '物理之阈——门、闸、车——须被可见越过。',
        },
        payoffConstraint: {
          en: 'The protagonist must speak a sentence that names the new world.',
          zh: '主角须说出一命名新世界之句。',
        },
        requiredArchetypeKeys: ['arc-stc-hero'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'beat-07-b-story',
        role: 'rising-action',
        label: { en: 'B Story', zh: 'B 故事线' },
        description: {
          en: 'A relationship subplot begins — usually with the character who carries the theme.',
          zh: '关系副线展开——通常为承载主题之角色。',
        },
        triggerConstraint: {
          en: 'The B-story character must meet the protagonist by accident, not design.',
          zh: 'B 故事之角色须与主角偶然相遇，而非设计。',
        },
        payoffConstraint: {
          en: 'The first exchange must include the thematic phrase from Beat 02, reframed.',
          zh: '首次交流须含第 02 拍之主题短语，重塑其义。',
        },
        requiredArchetypeKeys: ['arc-stc-b-story'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 'beat-08-fun-games',
        role: 'rising-action',
        label: { en: 'Fun & Games', zh: '游戏乐段' },
        description: {
          en: 'The promise of the premise — set pieces that fulfill what the trailer sold.',
          zh: '设定之兑现——履行预告所售之场景。',
        },
        triggerConstraint: {
          en: 'Three set-pieces that each demonstrate a different facet of the premise.',
          zh: '三场各呈现设定之一面之场景。',
        },
        payoffConstraint: {
          en: "The third set-piece must fail — the protagonist's approach has run dry.",
          zh: '第三场须失败——主角之方法已穷。',
        },
        requiredArchetypeKeys: ['arc-stc-hero', 'arc-stc-shadow'],
        keyEventsMin: 3,
        keyEventsMax: 5,
      },
      {
        slotId: 'beat-09-midpoint',
        role: 'midpoint',
        label: { en: 'Midpoint', zh: '中点' },
        description: {
          en: 'A false victory or false defeat — the trajectory reverses. Stakes rise.',
          zh: '伪胜或伪败——轨迹逆转。代价上升。',
        },
        triggerConstraint: {
          en: 'The midpoint must be reported — news arrives, a screen flickers, a witness speaks.',
          zh: '中点须被报告——消息到达、屏幕闪烁、见证者言。',
        },
        payoffConstraint: {
          en: "The protagonist's want must now be revealed as the wrong want.",
          zh: '主角之欲望须于此刻被揭为错误之欲望。',
        },
        requiredArchetypeKeys: ['arc-stc-hero'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'beat-10-bad-guys-close-in',
        role: 'crisis',
        label: { en: 'Bad Guys Close In', zh: '敌军围拢' },
        description: {
          en: 'External foes regroup; internal flaws worsen. The team fractures.',
          zh: '外部敌人重组；内部缺陷恶化。团队裂开。',
        },
        triggerConstraint: {
          en: 'A scene of betrayal or abandonment by an ally.',
          zh: '一场盟友背叛或弃绝之场景。',
        },
        payoffConstraint: {
          en: "The protagonist must lose the artifact the B-story character gave them.",
          zh: '主角须失去 B 故事之角色所赠之物件。',
        },
        requiredArchetypeKeys: ['arc-stc-shadow', 'arc-stc-b-story'],
        keyEventsMin: 2,
        keyEventsMax: 4,
      },
      {
        slotId: 'beat-11-all-is-lost',
        role: 'crisis',
        label: { en: 'All Is Lost', zh: '一切失去' },
        description: {
          en: 'The lowest point. The mentor dies, the mission fails, the beloved leaves.',
          zh: '最低点。导师死、任务败、爱人去。',
        },
        triggerConstraint: {
          en: 'The "whiff of death" — a literal or metaphorical death must occur.',
          zh: '死亡之气息——字面或隐喻之死亡必须发生。',
        },
        payoffConstraint: {
          en: 'The protagonist must be the cause, not the witness, of the loss.',
          zh: '主角须为失去之因，而非其见证者。',
        },
        requiredArchetypeKeys: ['arc-stc-hero', 'arc-stc-shadow'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'beat-12-dark-night',
        role: 'crisis',
        label: { en: 'Dark Night of the Soul', zh: '灵魂黑夜' },
        description: {
          en: 'A scene of grief and re-decision. The protagonist mourns what was lost and chooses the new want.',
          zh: '哀悼与再抉择之场景。主角悼所失、择新欲。',
        },
        triggerConstraint: {
          en: 'A scene alone at night, in the place where the mentor lived.',
          zh: '夜独处导师所居之处之场景。',
        },
        payoffConstraint: {
          en: 'The protagonist must speak the theme phrase as a question, then as a statement.',
          zh: '主角须先以疑问、再以陈述说出主题短语。',
        },
        requiredArchetypeKeys: ['arc-stc-hero'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 'beat-13-break-into-three',
        role: 'climax',
        label: { en: 'Break into Three', zh: '切入第三幕' },
        description: {
          en: 'The protagonist commits to the synthesis — old flaw + new want fuse into action.',
          zh: '主角承担综合——旧缺陷 + 新欲熔为行动。',
        },
        triggerConstraint: {
          en: 'A scene where the protagonist assembles a team or a tool.',
          zh: '主角集结团队或工具之场景。',
        },
        payoffConstraint: {
          en: 'The plan must be spoken aloud, then immediately interrupted.',
          zh: '计划须被说出，且随即被打断。',
        },
        requiredArchetypeKeys: ['arc-stc-hero', 'arc-stc-b-story'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'beat-14-finale',
        role: 'climax',
        label: { en: 'Finale', zh: '终章' },
        description: {
          en: 'A three-part climax — gathering, executing, synthesizing — that defeats the shadow using the new want.',
          zh: '三段式高潮——集结、执行、综合——以新欲击败影子。',
        },
        triggerConstraint: {
          en: "The shadow's plan must be revealed as the protagonist's plan gone wrong.",
          zh: '影子之计划须被揭为主角之计划走偏之版本。',
        },
        payoffConstraint: {
          en: "The final blow must use the mentor's gift, not the protagonist's native strength.",
          zh: '最后一击须用导师之赠物，而非主角原生之力。',
        },
        requiredArchetypeKeys: ['arc-stc-hero', 'arc-stc-shadow', 'arc-stc-b-story'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'beat-15-final-image',
        role: 'epilogue',
        label: { en: 'Final Image', zh: '终场镜像' },
        description: {
          en: "A single visual that mirrors Beat 01 — the protagonist's \"after\" state, the truth they now live in.",
          zh: '与第 01 拍镜像之视觉——主角之"后"状态，其所活之真相。',
        },
        triggerConstraint: {
          en: 'The image must reuse the composition of Beat 01 with one element changed.',
          zh: '镜像须复用第 01 拍之构图，唯改其一元素。',
        },
        payoffConstraint: {
          en: "End on the protagonist's face — but the expression must be unreadable.",
          zh: '以主角之面容作结——但表情须不可判读。',
        },
        requiredArchetypeKeys: ['arc-stc-hero'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
    ],
    archetypes: [
      {
        archetypeKey: 'arc-stc-hero',
        label: { en: 'The Hero', zh: '主角' },
        functionSummary: {
          en: "Carries the want and the flaw; their change is the story's measurement.",
          zh: '承载欲望与缺陷；其变化即故事之度量。',
        },
        mandatoryAtRoles: ['setup', 'inciting-incident', 'rising-action', 'midpoint', 'crisis', 'climax', 'epilogue'],
      },
      {
        archetypeKey: 'arc-stc-shadow',
        label: { en: 'The Shadow', zh: '影子' },
        functionSummary: {
          en: "The antagonist whose want mirrors the protagonist's, but whose means are the protagonist's flaw weaponized.",
          zh: '对手，其欲望镜像主角之欲望，但其手段为主角缺陷之武器化。',
        },
        mandatoryAtRoles: ['setup', 'rising-action', 'crisis', 'climax'],
      },
      {
        archetypeKey: 'arc-stc-b-story',
        label: { en: 'The B-Story Character', zh: 'B 故事之角色' },
        functionSummary: {
          en: 'Carries the theme. Meets the protagonist by accident, leaves by choice.',
          zh: '承载主题。偶然相遇主角，自择离去。',
        },
        mandatoryAtRoles: ['rising-action', 'crisis', 'climax'],
      },
      {
        archetypeKey: 'arc-stc-threshold',
        label: { en: 'The Threshold Guardian', zh: '阈之守者' },
        functionSummary: {
          en: "Tests the protagonist's readiness at each break. May be defeated, bribed, or converted.",
          zh: '于每次越界处测试主角之准备。可被击败、收买或转化。',
        },
        mandatoryAtRoles: ['rising-action'],
      },
    ],
    turningPoints: [
      {
        pointKey: 'tp-stc-catalyst',
        label: { en: 'The Catalyst', zh: '催化事件' },
        slotId: 'beat-04-catalyst',
        irreversibleChange: {
          en: 'The protagonist cannot return to the prior life; the world will rearrange itself around the new fact.',
          zh: '主角无法重返前生活；世界将以新事实为中心重排。',
        },
      },
      {
        pointKey: 'tp-stc-midpoint',
        label: { en: 'The Midpoint Reversal', zh: '中点逆转' },
        slotId: 'beat-09-midpoint',
        irreversibleChange: {
          en: "The protagonist's want is exposed as wrong; stakes escalate from want to need.",
          zh: '主角之欲望被揭为错；代价由欲升为需。',
        },
      },
      {
        pointKey: 'tp-stc-all-is-lost',
        label: { en: 'All Is Lost', zh: '一切失去' },
        slotId: 'beat-11-all-is-lost',
        irreversibleChange: {
          en: 'The mentor and the artifact are gone; the protagonist must act without them.',
          zh: '导师与物件皆失；主角须无之以行。',
        },
      },
    ],
    parameterSlots: STANDARD_PARAMETER_SLOTS,
    invariants: [
      {
        code: 'INV-STC-IMAGE-BOOKENDS',
        spec: 'openingImage.composition == finalImage.composition && openingImage.expression != finalImage.expression',
        message: {
          en: 'Opening and Final Images must share composition but differ in expression.',
          zh: '开场与终场镜像须共享构图，然表情须异。',
        },
      },
      {
        code: 'INV-STC-CATALYST-PAGE',
        spec: 'catalyst.beatNumber == 4 && catalyst.pageNumber <= 10',
        message: {
          en: 'Catalyst must be Beat 04 and arrive by page 10 (of a 110-page screenplay).',
          zh: '催化事件须为第 04 拍，且于（110 页剧本之）第 10 页前到达。',
        },
      },
      {
        code: 'INV-STC-THEME-ECHOED',
        spec: 'themeStated.phrase ∈ finale.dialogue',
        message: {
          en: 'The thematic phrase stated in Beat 02 must be spoken by the protagonist at the Finale.',
          zh: '第 02 拍所点之主题短语须由主角于终章说出。',
        },
      },
    ],
  },

  /* ======================================================================
   *  2. HERO'S JOURNEY · 英雄之旅 (Campbell/Vogler condensed 12 stages)
   * ==================================================================== */
  {
    id: 'pat-builtin-heros-journey',
    patternKey: 'heros-journey',
    name: { en: "Hero's Journey", zh: '英雄之旅' },
    family: { en: "Hero's Journey", zh: '英雄之旅' },
    familyKey: 'hero-journey',
    description: {
      en: "Campbell's monomyth condensed to Vogler's 12 stages. The pattern tracks a single arc of descent, ordeal, and return-with-gift. The elixir is not a treasure but a piece of repaired world the hero brings back.",
      zh: '坎贝尔单一神话，浓缩为沃格勒 12 阶段。模式追踪一条下行、考验、携礼而归之弧。灵药非宝物，乃英雄携回之、被修补之世界之片段。',
    },
    provenance: 'built-in',
    status: 'sealed',
    stages: [
      {
        slotId: 'hj-01-ordinary-world',
        role: 'setup',
        label: { en: 'Ordinary World', zh: '常世' },
        description: {
          en: "The hero's before-world — limited, familiar, and incomplete in a way the hero cannot name.",
          zh: '英雄之前世界——有限、熟悉，且有一英雄无法名状之不完整。',
        },
        triggerConstraint: {
          en: 'A scene where the hero performs a daily ritual that masks a wound.',
          zh: '一场英雄行日常仪轨而仪轨掩盖伤口之场景。',
        },
        payoffConstraint: {
          en: 'The scene must close on a horizon or threshold the hero refuses to look at.',
          zh: '场景须以一英雄拒绝直视之地平线或阈阈作结。',
        },
        requiredArchetypeKeys: ['arc-hj-hero'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 'hj-02-call',
        role: 'inciting-incident',
        label: { en: 'Call to Adventure', zh: '冒险之召唤' },
        description: {
          en: 'A message, omen, or stranger arrives. The Ordinary World cannot absorb it.',
          zh: '讯息、征兆或陌生人到达。常世无法吸收之。',
        },
        triggerConstraint: {
          en: 'The call must arrive unbidden — the hero did not seek it.',
          zh: '召唤须不请而至——英雄未尝求之。',
        },
        payoffConstraint: {
          en: 'The hero must state the cost of acceptance out loud, to themselves.',
          zh: '英雄须向己出声陈述接受之代价。',
        },
        requiredArchetypeKeys: ['arc-hj-herald'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'hj-03-refusal',
        role: 'rising-action',
        label: { en: 'Refusal of the Call', zh: '拒召' },
        description: {
          en: 'The hero says no — out of fear, duty, or unworthiness. The refusal must be substantive, not polite.',
          zh: '英雄说不——出于恐惧、责任或自感不配。拒绝须为实质，非礼貌。',
        },
        triggerConstraint: {
          en: 'The refusal must cite a specific bond — a child, a debt, a promise.',
          zh: '拒绝须援引一具体之羁绊——孩子、债务、承诺。',
        },
        payoffConstraint: {
          en: 'A secondary crisis must follow the refusal that the refusal caused.',
          zh: '继拒绝之后必有一由拒绝所致之次生危机。',
        },
        requiredArchetypeKeys: ['arc-hj-hero'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 'hj-04-mentor',
        role: 'rising-action',
        label: { en: 'Meeting the Mentor', zh: '遇导师' },
        description: {
          en: 'A guide appears — not to remove the call but to remove the unworthiness.',
          zh: '引导者出现——非为撤销召唤，乃为撤销不配。',
        },
        triggerConstraint: {
          en: 'The mentor must offer a gift the hero did not ask for and does not yet understand.',
          zh: '导师须赠一英雄未求且尚未理解之礼物。',
        },
        payoffConstraint: {
          en: 'The mentor must name one flaw the hero has hidden from themselves.',
          zh: '导师须点破一英雄所自瞒之缺陷。',
        },
        requiredArchetypeKeys: ['arc-hj-mentor'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'hj-05-threshold',
        role: 'rising-action',
        label: { en: 'Crossing the Threshold', zh: '越阈' },
        description: {
          en: 'The hero commits to the new world. A guardian tests them; they pass.',
          zh: '英雄承担新世界。守者试之；过之。',
        },
        triggerConstraint: {
          en: 'The threshold must be physically visible — a river, a wall, a doorway.',
          zh: '阈阈须为可见之实体——河、墙、门。',
        },
        payoffConstraint: {
          en: 'The guardian must speak one sentence the hero will repeat at the climax.',
          zh: '守者须说一句英雄将于高潮复述之句。',
        },
        requiredArchetypeKeys: ['arc-hj-threshold-guardian', 'arc-hj-hero'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'hj-06-tests',
        role: 'rising-action',
        label: { en: 'Tests, Allies, Enemies', zh: '试炼·盟友·敌者' },
        description: {
          en: 'A sequence of small ordeals that assemble the team and reveal the rules of the special world.',
          zh: '一系列小考验，结集队伍，揭示非常世之规则。',
        },
        triggerConstraint: {
          en: 'A bar, a market, or a contest — a scene of social density.',
          zh: '酒馆、集市或比试——一场人群密集之场景。',
        },
        payoffConstraint: {
          en: 'One ally must betray the hero by the end of this stage.',
          zh: '一盟友须于此阶段末尾背叛英雄。',
        },
        requiredArchetypeKeys: ['arc-hj-ally', 'arc-hj-shapeshifter'],
        keyEventsMin: 3,
        keyEventsMax: 5,
      },
      {
        slotId: 'hj-07-cave',
        role: 'rising-action',
        label: { en: 'Approach to the Inmost Cave', zh: '近最内之穴' },
        description: {
          en: 'The hero approaches the ordeal. Preparation, hesitation, a final inventory.',
          zh: '英雄接近考验。准备、犹疑、最后一次清点。',
        },
        triggerConstraint: {
          en: 'A scene of deliberate preparation — weapons sharpened, plans rehearsed.',
          zh: '一场刻意准备之场景——磨利武器、排练计划。',
        },
        payoffConstraint: {
          en: 'The hero must speak a private truth to an ally before descending.',
          zh: '英雄须于下行前向一盟友说出一句私下之真。',
        },
        requiredArchetypeKeys: ['arc-hj-hero', 'arc-hj-ally'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 'hj-08-ordeal',
        role: 'midpoint',
        label: { en: 'The Ordeal', zh: '考验' },
        description: {
          en: 'A death and rebirth. The hero faces the shadow and survives by surrendering a piece of themselves.',
          zh: '一次死与重生。英雄面对影子，以舍弃自身之一片段而存。',
        },
        triggerConstraint: {
          en: 'The ordeal must occur at the literal or metaphorical center of the story.',
          zh: '考验须发生于故事字面或隐喻之中心。',
        },
        payoffConstraint: {
          en: 'The hero must emerge marked — a wound, a white lock, a limp.',
          zh: '英雄须带印记而出——一伤、一白发、一跛。',
        },
        requiredArchetypeKeys: ['arc-hj-hero', 'arc-hj-shadow'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'hj-09-reward',
        role: 'rising-action',
        label: { en: 'Reward (Seizing the Sword)', zh: '奖赏·夺剑' },
        description: {
          en: 'The hero claims the elixir — knowledge, weapon, or healing — and a moment of celebration.',
          zh: '英雄取得灵药——知识、武器或疗愈——及片刻欢庆。',
        },
        triggerConstraint: {
          en: 'A scene of rest, feast, or intimacy — the only one permitted in the pattern.',
          zh: '一场休憩、宴饮或亲昵之场景——模式所容之唯一者。',
        },
        payoffConstraint: {
          en: 'The reward must be misread by the hero as final.',
          zh: '奖赏须被英雄误读为终局。',
        },
        requiredArchetypeKeys: ['arc-hj-hero'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 'hj-10-road-back',
        role: 'falling-action',
        label: { en: 'The Road Back', zh: '归途' },
        description: {
          en: 'The shadow rallies. The hero must choose between the elixir for themselves and the elixir for the world.',
          zh: '影子重整。英雄须在为己之灵药与为世之灵药间抉择。',
        },
        triggerConstraint: {
          en: 'A pursuit, a chase, or a retreat under pressure.',
          zh: '一场追击、追逐或受压之下撤。',
        },
        payoffConstraint: {
          en: 'An ally must fall so the hero can continue.',
          zh: '一盟友须倒下使英雄得以继续。',
        },
        requiredArchetypeKeys: ['arc-hj-ally'],
        keyEventsMin: 2,
        keyEventsMax: 3,
      },
      {
        slotId: 'hj-11-resurrection',
        role: 'climax',
        label: { en: 'The Resurrection', zh: '复活' },
        description: {
          en: 'A final ordeal at the threshold. The hero must die a second time — this time by choice.',
          zh: '阈上最终考验。英雄须再死一次——此次以择。',
        },
        triggerConstraint: {
          en: 'The climactic choice must occur at the same threshold as stage 05.',
          zh: '高潮抉择须发生于第 05 阶段同一阈阈。',
        },
        payoffConstraint: {
          en: 'The hero must refuse the shadow\'s offer of shared power, out loud.',
          zh: '英雄须出声拒绝影子所予之共享权力。',
        },
        requiredArchetypeKeys: ['arc-hj-hero', 'arc-hj-shadow'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'hj-12-elixir',
        role: 'epilogue',
        label: { en: 'Return with the Elixir', zh: '携灵药而归' },
        description: {
          en: 'The hero returns. The elixir — a truth, a healing, a piece of repaired world — is shared. The Ordinary World is changed.',
          zh: '英雄归来。灵药——一真、一愈、一修补之世界片段——被共享。常世已变。',
        },
        triggerConstraint: {
          en: 'The return scene must echo stage 01 with one element inverted.',
          zh: '归来场景须呼应第 01 阶段，唯反其一元素。',
        },
        payoffConstraint: {
          en: 'The hero must refuse to stay; the pattern permits leaving again.',
          zh: '英雄须拒绝留；模式容许再次离去。',
        },
        requiredArchetypeKeys: ['arc-hj-hero'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
    ],
    archetypes: [
      {
        archetypeKey: 'arc-hj-hero',
        label: { en: 'The Hero', zh: '英雄' },
        functionSummary: {
          en: 'Carries the wound and the call; the arc is from refusal to chosen death and return.',
          zh: '承载伤口与召唤；其弧由拒召走向择死与归。',
        },
        mandatoryAtRoles: ['setup', 'inciting-incident', 'rising-action', 'midpoint', 'climax', 'epilogue'],
      },
      {
        archetypeKey: 'arc-hj-mentor',
        label: { en: 'The Mentor', zh: '导师' },
        functionSummary: {
          en: 'Gives the gift that removes unworthiness. Does not accompany the hero past the threshold.',
          zh: '赠撤销不配之礼物。不陪英雄越阈。',
        },
        mandatoryAtRoles: ['rising-action'],
      },
      {
        archetypeKey: 'arc-hj-shadow',
        label: { en: 'The Shadow', zh: '影子' },
        functionSummary: {
          en: 'The opposed self — what the hero would become without the ordeal.',
          zh: '对立之我——英雄无考验所将成者。',
        },
        mandatoryAtRoles: ['midpoint', 'climax'],
      },
      {
        archetypeKey: 'arc-hj-threshold-guardian',
        label: { en: 'The Threshold Guardian', zh: '阈之守者' },
        functionSummary: {
          en: 'Tests readiness at the boundary; speaks the line the hero will echo.',
          zh: '于边界处测试准备；说英雄将复述之句。',
        },
        mandatoryAtRoles: ['rising-action'],
      },
      {
        archetypeKey: 'arc-hj-shapeshifter',
        label: { en: 'The Shapeshifter', zh: '变形者' },
        functionSummary: {
          en: 'The loyalty that shifts. May be ally, enemy, or beloved — never all three at once.',
          zh: '易主忠诚。或盟、或敌、或爱——未尝三者同时。',
        },
        mandatoryAtRoles: ['rising-action'],
      },
      {
        archetypeKey: 'arc-hj-herald',
        label: { en: 'The Herald', zh: '传召者' },
        functionSummary: {
          en: 'Carries the call. May be a stranger, a letter, or a storm.',
          zh: '携召唤。或陌生人、或信、或风。',
        },
        mandatoryAtRoles: ['inciting-incident'],
      },
      {
        archetypeKey: 'arc-hj-ally',
        label: { en: 'The Ally', zh: '盟友' },
        functionSummary: {
          en: 'Walks beside the hero. Falls on the road back so the hero may continue.',
          zh: '同行英雄。于归途倒下使英雄得以继续。',
        },
        mandatoryAtRoles: ['rising-action', 'falling-action'],
      },
    ],
    turningPoints: [
      {
        pointKey: 'tp-hj-threshold',
        label: { en: 'Crossing the Threshold', zh: '越阈' },
        slotId: 'hj-05-threshold',
        irreversibleChange: {
          en: 'The Ordinary World is closed; the hero cannot return without transformation.',
          zh: '常世已闭；英雄无转化无以归。',
        },
      },
      {
        pointKey: 'tp-hj-ordeal',
        label: { en: 'The Ordeal', zh: '考验' },
        slotId: 'hj-08-ordeal',
        irreversibleChange: {
          en: 'The hero is marked; the shadow has met them and will not rest until the resurrection.',
          zh: '英雄已带印记；影子已识之，直至复活方休。',
        },
      },
      {
        pointKey: 'tp-hj-resurrection',
        label: { en: 'Resurrection', zh: '复活' },
        slotId: 'hj-11-resurrection',
        irreversibleChange: {
          en: 'The hero has died by choice; the elixir is now theirs to give, not keep.',
          zh: '英雄以择而死；灵药为其所可赠而非所可留。',
        },
      },
    ],
    parameterSlots: STANDARD_PARAMETER_SLOTS,
    invariants: [
      {
        code: 'INV-HJ-THRESHOLD-ECHO',
        spec: 'stage05.threshold.composition == stage11.threshold.composition',
        message: {
          en: 'The threshold crossed in stage 05 must be the same threshold at which the resurrection occurs in stage 11.',
          zh: '第 05 阶段所越之阈须为第 11 阶段复活所发生之同一阈。',
        },
      },
      {
        code: 'INV-HJ-ORDEAL-CENTER',
        spec: 'ordeal.stageIndex == floor(totalStages / 2)',
        message: {
          en: 'The Ordeal must occur at the structural center of the pattern (stage 8 of 12).',
          zh: '考验须发生于模式结构中心（12 阶段之第 8）。',
        },
      },
      {
        code: 'INV-HJ-ELIXIR-SHARED',
        spec: 'elixir.recipientCount >= 1 && elixir.recipientCount != "hero-alone"',
        message: {
          en: 'The elixir must be shared with at least one other; the hero may not keep it alone.',
          zh: '灵药须与至少一人共享；英雄不得独占。',
        },
      },
    ],
  },

  /* ======================================================================
   *  3. HARMON STORY CIRCLE · 故事圈 (Dan Harmon's 8-step circle)
   * ==================================================================== */
  {
    id: 'pat-builtin-harmon-circle',
    patternKey: 'harmon-circle',
    name: { en: 'Harmon Story Circle', zh: '哈蒙故事圈' },
    family: { en: 'Story Circle', zh: '故事圈' },
    familyKey: 'circle',
    description: {
      en: "Dan Harmon's 8-step circle, distilled from Campbell. The pattern is genuinely circular: step 8 (Change) returns the protagonist to step 1's coordinates — but inverted. The circle is also recursive: each chapter can be a smaller circle.",
      zh: '丹·哈蒙之 8 步圈，自坎贝尔提炼。模式确为圆形：第 8 步（变）使主角返回第 1 步之坐标——然已反转。圈亦递归：每章可为一更小之圈。',
    },
    provenance: 'built-in',
    status: 'sealed',
    stages: [
      {
        slotId: 'hc-01-you',
        role: 'setup',
        label: { en: '1. You', zh: '一·尔' },
        description: {
          en: 'A character in a comfort zone. The comfort is also a cage.',
          zh: '一角色处于舒适带。舒适亦为笼。',
        },
        triggerConstraint: {
          en: 'Open on a routine the character performs without thinking.',
          zh: '开篇于角色无思而为之日常。',
        },
        payoffConstraint: {
          en: 'The scene must include one object the character will destroy at step 8.',
          zh: '场景须含一角色将于第 8 步摧毁之物件。',
        },
        requiredArchetypeKeys: ['arc-hc-protagonist'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'hc-02-need',
        role: 'inciting-incident',
        label: { en: '2. Need', zh: '二·需' },
        description: {
          en: 'But they want something. The want is wrong — they mistake it for the need.',
          zh: '然其有所欲。欲为错——其误以为需。',
        },
        triggerConstraint: {
          en: 'A scene where the character articulates the want out loud, to a witness.',
          zh: '一场角色向见证者出声陈述欲望之场景。',
        },
        payoffConstraint: {
          en: 'The witness must briefly express doubt, then recant.',
          zh: '见证者须短暂表达疑虑，再撤回。',
        },
        requiredArchetypeKeys: ['arc-hc-counterpart'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'hc-03-go',
        role: 'rising-action',
        label: { en: '3. Go', zh: '三·行' },
        description: {
          en: 'They enter an unfamiliar situation. The rules of the comfort zone do not apply.',
          zh: '其入陌生情境。舒适带之规则不复适用。',
        },
        triggerConstraint: {
          en: 'A scene where the character is visibly out of place — wrong clothes, wrong language, wrong currency.',
          zh: '一场角色明显格格不入之场景——衣错、语错、币错。',
        },
        payoffConstraint: {
          en: 'The character must accept an invitation they would have refused at step 1.',
          zh: '角色须接受一于第 1 步将拒之邀请。',
        },
        requiredArchetypeKeys: ['arc-hc-protagonist'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 'hc-04-search',
        role: 'rising-action',
        label: { en: '4. Search', zh: '四·寻' },
        description: {
          en: 'They adapt to it. The adaptation costs them a piece of the comfort self.',
          zh: '其适应之。适应以一舒适自我之片段为代价。',
        },
        triggerConstraint: {
          en: 'A scene where the character succeeds by the new rules for the first time.',
          zh: '一场角色首次以新规则成功之场景。',
        },
        payoffConstraint: {
          en: 'The success must be ambivalent — the character feels both pride and unease.',
          zh: '成功须为矛盾——角色既感骄傲亦感不安。',
        },
        requiredArchetypeKeys: ['arc-hc-counterpart'],
        keyEventsMin: 2,
        keyEventsMax: 4,
      },
      {
        slotId: 'hc-05-find',
        role: 'midpoint',
        label: { en: '5. Find', zh: '五·得' },
        description: {
          en: 'They get what they wanted. The getting is the midpoint reversal — it is not what they needed.',
          zh: '其得其所欲。所得即中点逆转——其非所需。',
        },
        triggerConstraint: {
          en: 'The moment of getting must be silent — no dialogue, no celebration.',
          zh: '所得之刻须无声——无对话、无欢庆。',
        },
        payoffConstraint: {
          en: 'The character must perform one small kindness in the same beat.',
          zh: '角色须于同一拍行一小善。',
        },
        requiredArchetypeKeys: ['arc-hc-protagonist'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'hc-06-take',
        role: 'crisis',
        label: { en: '6. Take', zh: '六·付' },
        description: {
          en: 'They pay a heavy price for it. The price is the comfort self in full.',
          zh: '其付重价。代价为舒适自我之全部。',
        },
        triggerConstraint: {
          en: 'A scene of public loss — reputation, relationship, or status.',
          zh: '一场公开之失去——声誉、关系或地位。',
        },
        payoffConstraint: {
          en: 'The counterpart must witness the loss and not intervene.',
          zh: '对手须见证失去且未介入。',
        },
        requiredArchetypeKeys: ['arc-hc-counterpart'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'hc-07-return',
        role: 'falling-action',
        label: { en: '7. Return', zh: '七·归' },
        description: {
          en: 'They return to the situation they came from. But the situation no longer fits.',
          zh: '其返所来之处。然情境已不合。',
        },
        triggerConstraint: {
          en: 'A scene in the same room as step 1, with the same object present.',
          zh: '一场于第 1 步同一房间、同一物件之场景。',
        },
        payoffConstraint: {
          en: 'The character must break the routine they performed at step 1.',
          zh: '角色须破除第 1 步所行之日常。',
        },
        requiredArchetypeKeys: ['arc-hc-protagonist'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'hc-08-change',
        role: 'epilogue',
        label: { en: '8. Change', zh: '八·变' },
        description: {
          en: 'They have changed. The change is one visible gesture that inverts step 1.',
          zh: '其已变。变为一可见之动作，反转第 1 步。',
        },
        triggerConstraint: {
          en: 'The change must be enacted, not spoken — gesture, not declaration.',
          zh: '变须为行而非言——动作而非宣告。',
        },
        payoffConstraint: {
          en: 'The object from step 1 must be destroyed, given away, or repurposed.',
          zh: '第 1 步之物件须被摧毁、赠出或改用。',
        },
        requiredArchetypeKeys: ['arc-hc-protagonist'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
    ],
    archetypes: [
      {
        archetypeKey: 'arc-hc-protagonist',
        label: { en: 'The Protagonist', zh: '主角' },
        functionSummary: {
          en: 'Carries the want that becomes the need that becomes the change.',
          zh: '承欲之转为需之转为变。',
        },
        mandatoryAtRoles: ['setup', 'inciting-incident', 'rising-action', 'midpoint', 'falling-action', 'epilogue'],
      },
      {
        archetypeKey: 'arc-hc-counterpart',
        label: { en: 'The Counterpart', zh: '对位者' },
        functionSummary: {
          en: 'The other half of the dyad. May be ally, rival, or beloved — the pattern does not distinguish.',
          zh: '二元之另一半。或盟、或敌、或爱——模式不别。',
        },
        mandatoryAtRoles: ['inciting-incident', 'rising-action', 'crisis'],
      },
      {
        archetypeKey: 'arc-hc-shadow-self',
        label: { en: 'The Shadow Self', zh: '影之自' },
        functionSummary: {
          en: 'The comfort-self the protagonist must shed at step 6. May appear as a literal double or as a memory.',
          zh: '主角须于第 6 步所脱之舒适自我。或为字面之双重，或为记忆。',
        },
        mandatoryAtRoles: ['crisis'],
      },
    ],
    turningPoints: [
      {
        pointKey: 'tp-hc-find',
        label: { en: 'The Finding', zh: '得' },
        slotId: 'hc-05-find',
        irreversibleChange: {
          en: 'The want has been fulfilled; the protagonist can no longer pursue it. The need is now audible.',
          zh: '欲已被满足；主角无以再追之。需自此可闻。',
        },
      },
      {
        pointKey: 'tp-hc-take',
        label: { en: 'The Taking (Price Paid)', zh: '付·代价' },
        slotId: 'hc-06-take',
        irreversibleChange: {
          en: 'The comfort self has been shed; return is now possible but fit is no longer possible.',
          zh: '舒适自我已脱；归已成可能，然合已不再可能。',
        },
      },
      {
        pointKey: 'tp-hc-change',
        label: { en: 'The Inversion', zh: '反转' },
        slotId: 'hc-08-change',
        irreversibleChange: {
          en: 'The circle has closed at the same coordinates it opened — but inverted. The pattern is complete.',
          zh: '圈已于开篇之同一坐标闭合——然已反转。模式成。',
        },
      },
    ],
    parameterSlots: STANDARD_PARAMETER_SLOTS,
    invariants: [
      {
        code: 'INV-HC-CIRCLE-CLOSURE',
        spec: 'stage08.location == stage01.location && stage08.gesture == inversionOf(stage01.gesture)',
        message: {
          en: 'Stage 8 must close at the same location as Stage 1, with the protagonist\'s final gesture an inversion of Stage 1\'s opening routine.',
          zh: '第 8 阶段须于第 1 阶段同一地点闭合，且主角之末次动作为第 1 阶段开篇日常之反转。',
        },
      },
      {
        code: 'INV-HC-FIND-SILENT',
        spec: 'stage05.dialogueLineCount == 0',
        message: {
          en: 'The Find must be silent. The pattern forbids any dialogue in the moment of getting.',
          zh: '得须无声。模式禁所得之刻任何对话。',
        },
      },
      {
        code: 'INV-HC-WANT-NEED-DIVERGENCE',
        spec: 'want.articulatedAt == 2 && need.recognizedAt >= 5',
        message: {
          en: 'The want must be articulated at step 2 and the need cannot be recognized before step 5.',
          zh: '欲须于第 2 步被说出，需不得于第 5 步前被识。',
        },
      },
    ],
  },

  /* ======================================================================
   *  4. DRAMATICA · 戏剧四线 (4 throughlines as 4 simultaneous stages)
   * ==================================================================== */
  {
    id: 'pat-builtin-dramatica',
    patternKey: 'dramatica-throughlines',
    name: { en: 'Dramatica', zh: '戏剧四线' },
    family: { en: 'Dramatica', zh: '戏剧四线' },
    familyKey: 'dramatica',
    description: {
      en: "Dramatica's four throughlines — Overall, Main Character, Obstacle Character, Relationship — must all be present and must all answer the same thematic question differently. The pattern is simultaneous, not sequential: each stage runs across the full story.",
      zh: '戏剧四线——总故事、主角色、对角色、关系线——须皆在场，且须各以不同方式回应同一主题问题。模式为同时，非顺序：每阶段贯穿全篇。',
    },
    provenance: 'built-in',
    status: 'sealed',
    stages: [
      {
        slotId: 'dr-1-overall',
        role: 'setup',
        label: { en: 'Overall Story (They)', zh: '总故事线·他们' },
        description: {
          en: 'The "they" perspective — what everyone is struggling over. Plot, not feeling.',
          zh: '"他们"之视角——众人之所争。情节，非情感。',
        },
        triggerConstraint: {
          en: 'Open on a public event — a meeting, a battle, a verdict — that names the contested object.',
          zh: '开篇于一场公开事件——会议、战斗、宣判——命名所争之物。',
        },
        payoffConstraint: {
          en: 'The Overall Story must resolve with the contested object changing hands, not hearts.',
          zh: '总故事线须以所争之物易手（而非易心）而决。',
        },
        requiredArchetypeKeys: ['arc-dr-protagonist', 'arc-dr-antagonist'],
        keyEventsMin: 4,
        keyEventsMax: 8,
      },
      {
        slotId: 'dr-2-main-char',
        role: 'inciting-incident',
        label: { en: 'Main Character (I)', zh: '主角色线·我' },
        description: {
          en: 'The "I" perspective — the character whose inner arc we follow. Their flaw is the story\'s question.',
          zh: '"我"之视角——所追随其内弧之角色。其缺陷即故事之问。',
        },
        triggerConstraint: {
          en: 'Open on the main character performing a small ritual that reveals the flaw.',
          zh: '开篇于主角色行一揭示缺陷之小仪轨。',
        },
        payoffConstraint: {
          en: 'The main character must change or steadfast; the pattern permits both, but the choice must be tested.',
          zh: '主角色须变或坚；模式容许二者，然抉择须经考验。',
        },
        requiredArchetypeKeys: ['arc-dr-reason', 'arc-dr-emotion'],
        keyEventsMin: 3,
        keyEventsMax: 6,
      },
      {
        slotId: 'dr-3-obstacle',
        role: 'midpoint',
        label: { en: 'Obstacle Character (You)', zh: '对角色线·你' },
        description: {
          en: 'The "you" perspective — the character whose alternate philosophy forces the main character to test their own.',
          zh: '"你"之视角——以异见迫使主角色自测之角色。',
        },
        triggerConstraint: {
          en: 'The obstacle character must arrive with a different doctrine — spoken or embodied.',
          zh: '对角色须携一不同之信条而到——或言说或体现。',
        },
        payoffConstraint: {
          en: 'The obstacle must change or be removed; their doctrine must leave a residue in the main character.',
          zh: '对角色须变或被移；其信条须于主角色留残余。',
        },
        requiredArchetypeKeys: ['arc-dr-sidekick', 'arc-dr-skeptic'],
        keyEventsMin: 2,
        keyEventsMax: 5,
      },
      {
        slotId: 'dr-4-relationship',
        role: 'climax',
        label: { en: 'Relationship Story (We)', zh: '关系线·我们' },
        description: {
          en: 'The "we" perspective — the bond between main and obstacle. The relationship is where the theme is actually decided.',
          zh: '"我们"之视角——主角色与对角色之羁绊。关系乃主题实际被决定之处。',
        },
        triggerConstraint: {
          en: 'Open on a private scene between the main and obstacle — no witnesses, no plot.',
          zh: '开篇于主角色与对角色之间私下场景——无见证者、无情节。',
        },
        payoffConstraint: {
          en: 'The relationship must transform — into alliance, into enmity, or into mourning.',
          zh: '关系须转化——为盟、为敌、或为哀悼。',
        },
        requiredArchetypeKeys: ['arc-dr-protagonist', 'arc-dr-antagonist'],
        keyEventsMin: 2,
        keyEventsMax: 4,
      },
    ],
    archetypes: [
      {
        archetypeKey: 'arc-dr-protagonist',
        label: { en: 'The Protagonist', zh: '主角' },
        functionSummary: {
          en: 'Drives the Overall. Seeks the contested object; may not be the main character.',
          zh: '驱动总故事线。求所争之物；未必为主角色。',
        },
        mandatoryAtRoles: ['setup', 'climax'],
      },
      {
        archetypeKey: 'arc-dr-antagonist',
        label: { en: 'The Antagonist', zh: '对手' },
        functionSummary: {
          en: 'Opposes the Overall. May be the obstacle character or may be a third party; pattern allows both.',
          zh: '反总故事线。或为对角色，或为第三方；模式容许二者。',
        },
        mandatoryAtRoles: ['setup', 'climax'],
      },
      {
        archetypeKey: 'arc-dr-reason',
        label: { en: 'The Reason Archetype', zh: '理智型' },
        functionSummary: {
          en: 'Embodies logic in the Main Character line. May be the main character themselves.',
          zh: '于主角色线体现逻辑。或即主角色本身。',
        },
        mandatoryAtRoles: ['inciting-incident'],
      },
      {
        archetypeKey: 'arc-dr-emotion',
        label: { en: 'The Emotion Archetype', zh: '情感型' },
        functionSummary: {
          en: 'Embodies feeling in the Main Character line. The Reason-Emotion dyad is the inner argument.',
          zh: '于主角色线体现情感。理智-情感二元即内心之辩。',
        },
        mandatoryAtRoles: ['inciting-incident'],
      },
      {
        archetypeKey: 'arc-dr-sidekick',
        label: { en: 'The Sidekick', zh: '助手' },
        functionSummary: {
          en: 'Supports the protagonist in the Overall. Faithful, not subtle.',
          zh: '于总故事线支持主角。忠诚，非微妙。',
        },
        mandatoryAtRoles: ['midpoint'],
      },
      {
        archetypeKey: 'arc-dr-skeptic',
        label: { en: 'The Skeptic', zh: '怀疑者' },
        functionSummary: {
          en: 'Doubts the protagonist in the Overall. The skeptic\'s doubt is the pattern\'s conscience.',
          zh: '于总故事线怀疑主角。怀疑者之疑即模式之良心。',
        },
        mandatoryAtRoles: ['midpoint'],
      },
    ],
    turningPoints: [
      {
        pointKey: 'tp-dr-obstacle-arrives',
        label: { en: 'Obstacle Arrives', zh: '对角色至' },
        slotId: 'dr-3-obstacle',
        irreversibleChange: {
          en: 'The main character\'s philosophy now has a rival; inertia is no longer possible.',
          zh: '主角色之信条今有对手；停顿不再可能。',
        },
      },
      {
        pointKey: 'tp-dr-relationship-resolution',
        label: { en: 'Relationship Resolved', zh: '关系决' },
        slotId: 'dr-4-relationship',
        irreversibleChange: {
          en: 'The bond between main and obstacle is now fixed; the thematic question has been answered in the we-perspective.',
          zh: '主角色与对角色之羁绊已定；主题问题已于"我们"之视角得答。',
        },
      },
      {
        pointKey: 'tp-dr-overall-resolution',
        label: { en: 'Overall Resolved', zh: '总故事线决' },
        slotId: 'dr-1-overall',
        irreversibleChange: {
          en: 'The contested object has changed hands; the public story is closed.',
          zh: '所争之物已易手；公开故事已闭。',
        },
      },
    ],
    parameterSlots: STANDARD_PARAMETER_SLOTS,
    invariants: [
      {
        code: 'INV-DR-FOUR-LINES-PRESENT',
        spec: 'throughlines.present == {"overall", "mainCharacter", "obstacleCharacter", "relationship"}',
        message: {
          en: 'All four throughlines must be present. The pattern fails if any one is absent.',
          zh: '四线皆须在场。任何一线缺即模式失效。',
        },
      },
      {
        code: 'INV-DR-THEME-DIVERGENCE',
        spec: 'throughlines.map(t => t.thematicAnswer).unique().length == 4',
        message: {
          en: 'Each throughline must answer the thematic question differently; convergence collapses the pattern.',
          zh: '每线须以不同方式回应主题问题；趋同使模式坍塌。',
        },
      },
      {
        code: 'INV-DR-MAIN-OBSTACLE-DISTINCT',
        spec: 'mainCharacter.key != obstacleCharacter.key',
        message: {
          en: 'The Main Character and Obstacle Character must be distinct characters; the inner argument requires two.',
          zh: '主角色与对角色须为不同之角色；内心之辩须二。',
        },
      },
    ],
  },

  /* ======================================================================
   *  5. TRUBY 22 BUILDING BLOCKS · Truby 22 块 (condensed 8 super-blocks)
   * ==================================================================== */
  {
    id: 'pat-builtin-truby',
    patternKey: 'truby-22-condensed',
    name: { en: "Truby's 22 Building Blocks", zh: 'Truby 22 块' },
    family: { en: 'Truby 22 Blocks', zh: 'Truby 22 块' },
    familyKey: 'truby',
    description: {
      en: "John Truby's 22 building blocks condensed to 8 super-blocks. The pattern is unique in foregrounding Need and Desire as separate stages: the protagonist begins by wanting what they don't need and ends by needing what they didn't want.",
      zh: '约翰·特鲁比之 22 建构块浓缩为 8 超块。模式独特处在前置"需"与"欲"为独立阶段：主角起于欲其所需，终于需其所不欲。',
    },
    provenance: 'built-in',
    status: 'sealed',
    stages: [
      {
        slotId: 'tr-1-need',
        role: 'setup',
        label: { en: 'Need', zh: '需' },
        description: {
          en: 'The protagonist has a fundamental weakness they cannot see. The Need is the cure they would refuse if offered.',
          zh: '主角有一不可见之根本缺陷。需为其若被提供亦将拒之疗愈。',
        },
        triggerConstraint: {
          en: 'Open on a scene where the protagonist fails at something they should be able to do.',
          zh: '开篇于一场主角于一应能之事失败之场景。',
        },
        payoffConstraint: {
          en: 'The protagonist must articulate a want that is the inverse of the need.',
          zh: '主角须陈述一为需之反向之欲。',
        },
        requiredArchetypeKeys: ['arc-tr-protagonist'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 'tr-2-desire',
        role: 'inciting-incident',
        label: { en: 'Desire', zh: '欲' },
        description: {
          en: 'A specific, conscious want with a clear object. The Desire drives the plot; the Need drives the arc.',
          zh: '一具体、自觉之欲，有清晰对象。欲驱动情节；需驱动弧线。',
        },
        triggerConstraint: {
          en: 'The desire must be voiced aloud to another character who remains silent.',
          zh: '欲须向另一保持沉默之角色大声说出。',
        },
        payoffConstraint: {
          en: 'The desire must be obtainable; the pattern forbids abstract wants.',
          zh: '欲须为可得；模式禁抽象之欲。',
        },
        requiredArchetypeKeys: ['arc-tr-protagonist'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'tr-3-opponent',
        role: 'rising-action',
        label: { en: 'Opponent', zh: '对手' },
        description: {
          en: 'A specific rival who wants the same object or its inverse. The opponent is the protagonist\'s mirror — better at the flaw, worse at the need.',
          zh: '一具体之敌，欲同一物或其反面。对手为主角之镜——于缺陷更胜，于需更劣。',
        },
        triggerConstraint: {
          en: 'The opponent must arrive with information the protagonist lacks.',
          zh: '对手须携主角所缺之信息而至。',
        },
        payoffConstraint: {
          en: 'The opponent must offer an alliance that the protagonist wrongly refuses.',
          zh: '对手须提供一主角错误拒绝之联盟。',
        },
        requiredArchetypeKeys: ['arc-tr-opponent', 'arc-tr-ally'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 'tr-4-plan',
        role: 'rising-action',
        label: { en: 'Plan', zh: '计' },
        description: {
          en: "The protagonist's strategy to obtain the desire. The plan must be flawed in a way that reveals the need.",
          zh: '主角取得欲之策略。计须有揭示需之缺陷。',
        },
        triggerConstraint: {
          en: 'A scene where the plan is rehearsed aloud — to an ally or in journal.',
          zh: '一场计被排练之场景——向盟友或于日记。',
        },
        payoffConstraint: {
          en: 'The plan must include a step the protagonist cannot actually execute.',
          zh: '计须含一步主角实际不能执行者。',
        },
        requiredArchetypeKeys: ['arc-tr-ally'],
        keyEventsMin: 2,
        keyEventsMax: 3,
      },
      {
        slotId: 'tr-5-battle',
        role: 'climax',
        label: { en: 'Battle', zh: '战' },
        description: {
          en: 'The climactic conflict with the opponent. The battle must reveal the need by stripping the desire.',
          zh: '与对手之高潮冲突。战须以剥夺欲而揭示需。',
        },
        triggerConstraint: {
          en: 'The battle must occur at the site of the protagonist\'s original failure.',
          zh: '战须发生于主角原始失败之处。',
        },
        payoffConstraint: {
          en: 'The desire must be lost or voluntarily surrendered at the battle\'s peak.',
          zh: '欲须于战之巅被失或被自愿舍。',
        },
        requiredArchetypeKeys: ['arc-tr-protagonist', 'arc-tr-opponent'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'tr-6-self-revelation',
        role: 'climax',
        label: { en: 'Self-Revelation', zh: '自省' },
        description: {
          en: 'The protagonist sees the need for the first time. The revelation may be moral (about others) or psychological (about self).',
          zh: '主角首次见需。省可为道德（关于他人）或心理（关于自我）。',
        },
        triggerConstraint: {
          en: 'The revelation must be triggered by an external act — not introspection.',
          zh: '省须由外在行动触发——非内省。',
        },
        payoffConstraint: {
          en: 'The protagonist must speak the need aloud, briefly, without ornament.',
          zh: '主角须简短、无饰地说出需。',
        },
        requiredArchetypeKeys: ['arc-tr-protagonist'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'tr-7-new-equilibrium',
        role: 'falling-action',
        label: { en: 'New Equilibrium', zh: '新平衡' },
        description: {
          en: 'The protagonist at rest, post-revelation. The rest is unfamiliar; the prior self has been left behind.',
          zh: '省后主角之静。静为不熟；前自我已被留。',
        },
        triggerConstraint: {
          en: 'A scene in a familiar location now occupied differently — moved furniture, changed light.',
          zh: '一场于熟悉地点然以不同方式占据之场景——家具已移、光已变。',
        },
        payoffConstraint: {
          en: 'A gesture must signal that the need is now being acted on, not merely known.',
          zh: '须有一动作示意需正被行而非仅被知。',
        },
        requiredArchetypeKeys: ['arc-tr-protagonist'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'tr-8-final-image',
        role: 'epilogue',
        label: { en: 'Final Image', zh: '终场镜像' },
        description: {
          en: 'A tableau that visually closes the arc. The image must invert the opening tableau of stage 1.',
          zh: '一视觉上闭合弧线之静态画面。镜像须反转第 1 阶段之开篇画面。',
        },
        triggerConstraint: {
          en: 'The image must include one object from stage 1, repurposed.',
          zh: '镜像须含第 1 阶段之一物件，已改用。',
        },
        payoffConstraint: {
          en: 'End on the protagonist\'s hand, not their face.',
          zh: '以主角之手作结，非其面。',
        },
        requiredArchetypeKeys: ['arc-tr-protagonist'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
    ],
    archetypes: [
      {
        archetypeKey: 'arc-tr-protagonist',
        label: { en: 'The Protagonist', zh: '主角' },
        functionSummary: {
          en: 'Begins in flaw, ends in self-revelation. The arc is the journey from want to need.',
          zh: '起于缺陷，终于自省。弧线为由欲至需之旅。',
        },
        mandatoryAtRoles: ['setup', 'inciting-incident', 'climax', 'falling-action', 'epilogue'],
      },
      {
        archetypeKey: 'arc-tr-opponent',
        label: { en: 'The Main Opponent', zh: '主对手' },
        functionSummary: {
          en: 'The mirror. Better at the flaw, worse at the need. Not necessarily the antagonist of the plot.',
          zh: '镜。于缺陷更胜，于需更劣。未必为情节之对手。',
        },
        mandatoryAtRoles: ['rising-action', 'climax'],
      },
      {
        archetypeKey: 'arc-tr-ally',
        label: { en: 'The Ally', zh: '盟友' },
        functionSummary: {
          en: 'Helps the protagonist refine the plan. May be a fake-ally opponent — the pattern permits the inversion.',
          zh: '助主角精修计。或为伪盟友对手——模式容许此反转。',
        },
        mandatoryAtRoles: ['rising-action'],
      },
      {
        archetypeKey: 'arc-tr-subplot',
        label: { en: 'The Subplot Character', zh: '副线角色' },
        functionSummary: {
          en: 'Carries a thematic variation of the main argument. The subplot must echo, not mirror.',
          zh: '承载主论证之主题变奏。副线须呼应，非镜像。',
        },
        mandatoryAtRoles: ['rising-action'],
      },
    ],
    turningPoints: [
      {
        pointKey: 'tp-tr-desire-articulated',
        label: { en: 'Desire Articulated', zh: '欲被说出' },
        slotId: 'tr-2-desire',
        irreversibleChange: {
          en: 'The want is now public; the protagonist cannot un-say it. Plot begins.',
          zh: '欲今为公开；主角无法撤回。情节始。',
        },
      },
      {
        pointKey: 'tp-tr-battle',
        label: { en: 'The Battle', zh: '战' },
        slotId: 'tr-5-battle',
        irreversibleChange: {
          en: 'The desire has been stripped; the need is now audible. Self-revelation is now possible.',
          zh: '欲已被剥夺；需今可闻。自省今成可能。',
        },
      },
      {
        pointKey: 'tp-tr-revelation',
        label: { en: 'The Self-Revelation', zh: '自省' },
        slotId: 'tr-6-self-revelation',
        irreversibleChange: {
          en: 'The protagonist has seen the need; the prior self cannot be resumed.',
          zh: '主角已见需；前自我无以复。',
        },
      },
    ],
    parameterSlots: STANDARD_PARAMETER_SLOTS,
    invariants: [
      {
        code: 'INV-TR-NEED-DESIRE-DIVERGENT',
        spec: 'need.object != desire.object && need.recognizedAt > desire.articulatedAt',
        message: {
          en: 'Need and Desire must have different objects, and the Need must be recognized strictly after the Desire is articulated.',
          zh: '需与欲须有不同对象，且需须于欲被说出之后被识。',
        },
      },
      {
        code: 'INV-TR-OPPOSITE-OBJECT-DESIRE',
        spec: 'opponent.desire.object == protagonist.desire.object XOR opponent.desire.object == inverse(protagonist.desire.object)',
        message: {
          en: 'The Opponent must desire either the same object as the Protagonist or its precise inverse — nothing in between.',
          zh: '对手须欲主角之同一物或其精确反面——不容中间。',
        },
      },
      {
        code: 'INV-TR-IMAGE-INVERSION',
        spec: 'stage08.image == inversionOf(stage01.image)',
        message: {
          en: 'The Final Image must invert the opening tableau of Stage 1; the pattern forbids mirroring.',
          zh: '终场镜像须反转第 1 阶段之开篇画面；模式禁镜像。',
        },
      },
    ],
  },

  /* ======================================================================
   *  6. 起承转合 · KISHŌTENKETSU (4-stage East Asian narrative structure)
   * ==================================================================== */
  {
    id: 'pat-builtin-kishotenketsu',
    patternKey: 'kishotenketsu',
    name: { en: 'Kishōtenketsu', zh: '起承转合' },
    family: { en: 'Kishōtenketsu', zh: '起承转合' },
    familyKey: 'kishotenketsu',
    description: {
      en: 'The four-act East Asian structure (Ki-Shō-Ten-Ketsu) often cited as "plot without conflict". The twist (Ten) is not a Western reversal — it pivots perspective, requiring the reader to re-see what came before. No antagonist is required.',
      zh: '东亚四段结构（起-承-转-合），常被称作"无冲突之情节"。转并非西式逆转——其为视角之轴，要求读者重见前文。无须对手。',
    },
    provenance: 'built-in',
    status: 'sealed',
    stages: [
      {
        slotId: 'ki-1-ki',
        role: 'setup',
        label: { en: 'Ki · Introduction', zh: '起·引入' },
        description: {
          en: 'Characters, setting, and a current state are shown. Nothing is contested yet — the world is at rest in its ordinary complexity.',
          zh: '人物、场景与当前状态被呈。尚无所争——世界以其日常之复杂静息。',
        },
        triggerConstraint: {
          en: 'Open on a scene of small habits — two characters performing the same routine in proximity.',
          zh: '开篇于一场小习惯之场景——两个角色于近处行同一日常。',
        },
        payoffConstraint: {
          en: 'The scene must end on an object whose significance will not be clear until Ketsu.',
          zh: '场景须以一物件作结，其义至合方明。',
        },
        requiredArchetypeKeys: ['arc-ki-protagonist', 'arc-ki-foil'],
        keyEventsMin: 2,
        keyEventsMax: 3,
      },
      {
        slotId: 'ki-2-sho',
        role: 'rising-action',
        label: { en: 'Shō · Development', zh: '承·发展' },
        description: {
          en: 'The established state is developed — deepened, expanded, or complicated — but not yet disrupted. The Shō must not contradict the Ki; it must thicken it.',
          zh: '所立之状态被发展——加深、扩展或复杂化——然尚未被扰动。承不得逆起；须厚之。',
        },
        triggerConstraint: {
          en: 'A scene in the same location as Ki, but one element has shifted — season, light, mood.',
          zh: '一场于起之同一地点之场景，然一元素已变——季节、光、心境。',
        },
        payoffConstraint: {
          en: 'A second character must arrive who was not present in Ki.',
          zh: '须有一未在起中出现之角色到达。',
        },
        requiredArchetypeKeys: ['arc-ki-protagonist', 'arc-ki-foil', 'arc-ki-stranger'],
        keyEventsMin: 2,
        keyEventsMax: 4,
      },
      {
        slotId: 'ki-3-ten',
        role: 'midpoint',
        label: { en: 'Ten · Twist / Pivot', zh: '转·转折' },
        description: {
          en: 'A surprising shift — not a reversal of plot but a pivot of perspective. What the reader assumed was foreground becomes ground; what was background becomes figure.',
          zh: '一令人意外之转换——非情节之逆转，乃视角之轴。读者原以为前景者转为背景；原为背景者转为主题。',
        },
        triggerConstraint: {
          en: 'The Ten must arrive via a previously minor character or a previously minor object.',
          zh: '转须经一先前次要之角色或次要之物件而到。',
        },
        payoffConstraint: {
          en: 'The pivot must re-frame Shō without contradicting it; the reader must be able to re-read.',
          zh: '轴须重构承而不逆之；读者须能重读。',
        },
        requiredArchetypeKeys: ['arc-ki-stranger'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'ki-4-ketsu',
        role: 'epilogue',
        label: { en: 'Ketsu · Conclusion', zh: '合·收束' },
        description: {
          en: 'A return that has been changed by the pivot. The ending is unified — what seemed separate is shown to have been one all along. The object from Ki now signifies.',
          zh: '一已被轴所变之归。结尾统一——原似分离者被示为一。起之物件今义明。',
        },
        triggerConstraint: {
          en: 'A scene in the same location as Ki, with the original two characters.',
          zh: '一场于起之同一地点、与原始二角色之场景。',
        },
        payoffConstraint: {
          en: 'The object from Ki must be touched or used in a way its original context did not predict.',
          zh: '起之物件须以一种其原始语境未预期之方式被触及或使用。',
        },
        requiredArchetypeKeys: ['arc-ki-protagonist', 'arc-ki-foil'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
    ],
    archetypes: [
      {
        archetypeKey: 'arc-ki-protagonist',
        label: { en: 'The Protagonist', zh: '主角' },
        functionSummary: {
          en: 'One of the dyad. Their habit is the unit of measurement; the pivot measures itself against it.',
          zh: '二元之一。其习惯为度量之单位；轴以之度量自身。',
        },
        mandatoryAtRoles: ['setup', 'rising-action', 'epilogue'],
      },
      {
        archetypeKey: 'arc-ki-foil',
        label: { en: 'The Foil', zh: '对照者' },
        functionSummary: {
          en: 'The other half of the dyad. Performs the same habit slightly differently; the difference is the seed of the pivot.',
          zh: '二元之另一半。以略异之方式行同一习惯；此异为轴之种。',
        },
        mandatoryAtRoles: ['setup', 'rising-action', 'epilogue'],
      },
      {
        archetypeKey: 'arc-ki-stranger',
        label: { en: 'The Stranger', zh: '陌生人' },
        functionSummary: {
          en: 'Arrives in Shō, carries the Ten. May depart before Ketsu; the stranger is a pivot-agent, not a permanent cast member.',
          zh: '于承到达，承转。可于合前离去；陌生人为轴之使，非常驻角色。',
        },
        mandatoryAtRoles: ['rising-action', 'midpoint'],
      },
    ],
    turningPoints: [
      {
        pointKey: 'tp-ki-ten',
        label: { en: 'The Ten (Pivot)', zh: '转' },
        slotId: 'ki-3-ten',
        irreversibleChange: {
          en: 'Perspective has pivoted; the reader cannot un-see the new framing. Re-reading is now required.',
          zh: '视角已轴；读者无法不见新框架。重读今为必需。',
        },
      },
      {
        pointKey: 'tp-ki-ketsu',
        label: { en: 'The Ketsu (Unification)', zh: '合' },
        slotId: 'ki-4-ketsu',
        irreversibleChange: {
          en: 'What was separate is now one; the object\'s significance has been retrospectively established.',
          zh: '原所分离者今为一；物件之义已被回溯确立。',
        },
      },
    ],
    parameterSlots: STANDARD_PARAMETER_SLOTS,
    invariants: [
      {
        code: 'INV-KI-NO-CONTRADICTION',
        spec: 'shō.events ⊆ ki.worldConsistency && ten.reframesButDoesNotContradict == true',
        message: {
          en: 'Shō must not contradict Ki; Ten must re-frame, not contradict. The pattern forbids retconning.',
          zh: '承不得逆起；转须重构，不得逆。模式禁追溯改写。',
        },
      },
      {
        code: 'INV-KI-OBJECT-BOOKEND',
        spec: 'ki.introduces(object) && ketsu.uses(object) && object.significanceAtKetsu != object.significanceAtKi',
        message: {
          en: 'A single object must be introduced in Ki and used (differently) in Ketsu; its significance must have changed.',
          zh: '一物件须于起被引入、于合被（异用）使用；其义须已变。',
        },
      },
      {
        code: 'INV-KI-NO-ANTAGONIST-REQUIRED',
        spec: 'antagonist.required == false',
        message: {
          en: 'No antagonist is required. The pattern explicitly permits stories driven by pivot rather than conflict.',
          zh: '无须对手。模式明示容许以轴而非冲突驱动之故事。',
        },
      },
    ],
  },

  /* ======================================================================
   *  7. 序破急 · JO-HA-KYŪ (3-stage Japanese dramatic acceleration)
   * ==================================================================== */
  {
    id: 'pat-builtin-jo-ha-kyu',
    patternKey: 'jo-ha-kyu',
    name: { en: 'Jo-ha-kyū', zh: '序破急' },
    family: { en: 'Jo-ha-kyū', zh: '序破急' },
    familyKey: 'jo-ha-kyu',
    description: {
      en: "The three-stage Japanese acceleration pattern (Jo / Ha / Kyū) used in Noh, gagaku, and tea ceremony. Jo is slow and establishes; Ha breaks pattern and accelerates; Kyū is the rapid climax that ends abruptly. The pattern is recursive — each stage contains a smaller Jo-Ha-Kyū.",
      zh: '日本三段加速模式（序 / 破 / 急），用于能乐、雅乐、茶道。序缓而立；破破模式而加速；急为骤止之快速高潮。模式递归——每阶段含一更小之序破急。',
    },
    provenance: 'built-in',
    status: 'sealed',
    stages: [
      {
        slotId: 'jhk-1-jo',
        role: 'setup',
        label: { en: 'Jo · Beginning', zh: '序' },
        description: {
          en: 'Slow, deliberate establishment. The Jo names the world, the wound, and the rhythm at which the world moves. The reader is told what to attend to.',
          zh: '缓而刻意之立。序命名世界、伤口、世界运行之节奏。读者被告知所应注意之者。',
        },
        triggerConstraint: {
          en: 'Open on a still scene — a single sustained image held longer than feels comfortable.',
          zh: '开篇于一静景——一持续之像被保持至不适之长。',
        },
        payoffConstraint: {
          en: 'The Jo must end on a sound that breaks the stillness — a footstep, a bell, a bird.',
          zh: '序须以一破静之音作结——足音、铃、鸟。',
        },
        requiredArchetypeKeys: ['arc-jhk-shite'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 'jhk-2-ha',
        role: 'rising-action',
        label: { en: 'Ha · Breaking', zh: '破' },
        description: {
          en: 'The established rhythm breaks. Tempo accelerates. Events arrive that the Jo did not promise. The Ha is where the world\'s wound is shown to be deeper than named.',
          zh: '所立之节奏破。节奏加速。序所未承诺之事件到达。破为世界之伤口被示为深于所名之处。',
        },
        triggerConstraint: {
          en: 'A scene where the established tempo visibly accelerates — cuts shorten, sentences fragment.',
          zh: '一场所立之节奏可见加速之场景——切换缩短、句子破碎。',
        },
        payoffConstraint: {
          en: 'A second wound — not the Jo\'s — must be revealed, complicating the first.',
          zh: '须揭第二伤口——非序之——使其复杂化。',
        },
        requiredArchetypeKeys: ['arc-jhk-waki'],
        keyEventsMin: 2,
        keyEventsMax: 4,
      },
      {
        slotId: 'jhk-3-kyu',
        role: 'climax',
        label: { en: 'Kyū · Rapid Climax', zh: '急' },
        description: {
          en: 'A rapid, almost abrupt climax. The Kyū compresses what the Jo took slow time to build. It ends — must end — before the reader is ready.',
          zh: '一快速、几近骤止之高潮。急压缩序所缓建者。其于读者未备之前结束——必如此。',
        },
        triggerConstraint: {
          en: 'The Kyū must occur in a single sustained gesture — a single scene, often a single image.',
          zh: '急须于一持续之动作中发生——一场，常一像。',
        },
        payoffConstraint: {
          en: 'The Kyū must end on silence, not on resolution. The pattern forbids tidy closure.',
          zh: '急须以沉默作结，非以解决。模式禁整洁之收。',
        },
        requiredArchetypeKeys: ['arc-jhk-shite'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
    ],
    archetypes: [
      {
        archetypeKey: 'arc-jhk-shite',
        label: { en: 'The Shite (Doer)', zh: '仕手' },
        functionSummary: {
          en: 'The principal. Carries the wound named in Jo and the gesture executed in Kyū. In Noh, the shite often appears masked.',
          zh: '主角。承序所名之伤口与急所行之动作。于能乐，仕手常以面具出现。',
        },
        mandatoryAtRoles: ['setup', 'climax'],
      },
      {
        archetypeKey: 'arc-jhk-waki',
        label: { en: 'The Waki (Side-doer)', zh: '脇' },
        functionSummary: {
          en: 'The interlocutor. Asks the question in Jo that opens the wound; witnesses the Ha; does not appear in Kyū.',
          zh: '对话者。于序问开伤口之问；见证破；不见于急。',
        },
        mandatoryAtRoles: ['setup', 'rising-action'],
      },
      {
        archetypeKey: 'arc-jhk-tsure',
        label: { en: 'The Tsure (Companion)', zh: '连' },
        functionSummary: {
          en: 'A companion of the shite. Often silent; when speaks, the speech precipitates Ha or Kyū.',
          zh: '仕手之伴。常沉默；发言则催破或急。',
        },
        mandatoryAtRoles: ['rising-action'],
      },
    ],
    turningPoints: [
      {
        pointKey: 'tp-jhk-jo-end',
        label: { en: 'The Sound That Breaks Jo', zh: '破序之音' },
        slotId: 'jhk-1-jo',
        irreversibleChange: {
          en: 'The stillness is broken; the rhythm established in Jo is now a thing to be measured against.',
          zh: '静已被破；序所立之节奏今为被度量之者。',
        },
      },
      {
        pointKey: 'tp-jhk-kyu',
        label: { en: 'The Kyū (Abrupt End)', zh: '急·骤止' },
        slotId: 'jhk-3-kyu',
        irreversibleChange: {
          en: 'The Kyū ends before resolution; the reader is left in the post-climax silence. The pattern requires the reader to finish the gesture.',
          zh: '急于解决前止；读者留于高潮后之沉默。模式要求读者完成动作。',
        },
      },
    ],
    parameterSlots: STANDARD_PARAMETER_SLOTS,
    invariants: [
      {
        code: 'INV-JHK-RECURSIVE',
        spec: '∀ stage ∈ {jo, ha, kyu}: stage.containsSubStructure(subJoHaKyu) || stage.isAtomic',
        message: {
          en: 'Each stage must itself contain a smaller Jo-Ha-Kyū structure, or be atomic. The pattern is recursive by design.',
          zh: '每阶段须自身含一更小之序破急结构，或为原子。模式设计为递归。',
        },
      },
      {
        code: 'INV-JHK-ACCELERATION',
        spec: 'duration(jo) > duration(ha) > duration(kyu)',
        message: {
          en: 'Duration must monotonically decrease: Jo longest, Ha middle, Kyū shortest. The pattern is about acceleration.',
          zh: '持续须单调递减：序最长、破居中、急最短。模式关乎加速。',
        },
      },
      {
        code: 'INV-JHK-SILENT-CLOSE',
        spec: 'kyu.endsInSilence == true && kyu.resolvesPlot == false',
        message: {
          en: 'The Kyū must close in silence without resolving plot. The pattern forbids tidy closure; the reader finishes the gesture.',
          zh: '急须以沉默收而情节未决。模式禁整洁之收；读者完成动作。',
        },
      },
    ],
  },

  /* ======================================================================
   *  8. 网文·系统流 · SYSTEM STREAM (built-in 6-stage webnovel pattern)
   * ==================================================================== */
  {
    id: 'pat-builtin-webnovel-system',
    patternKey: 'webnovel-system-stream',
    name: { en: 'System Stream', zh: '网文·系统流' },
    family: { en: 'Webnovel · System Stream', zh: '网文·系统流' },
    familyKey: 'webnovel-system',
    description: {
      en: "The built-in variant of the Chinese system-stream webnovel pattern. A modern update to the monomyth: the 'mentor' is now a System — a personalized game-like overlay on reality — and the elixir is rank. The protagonist ascends by quests; each rank-up is a structural closure.",
      zh: '中国系统流网文模式之内置变体。单一神话的现代更新：导师今为系统——加于现实之上之个性化游戏层——灵药为等级。主角以任务升阶；每次升阶为一结构闭合。',
    },
    provenance: 'built-in',
    status: 'sealed',
    stages: [
      {
        slotId: 'ws-1-awakening',
        role: 'inciting-incident',
        label: { en: 'Awakening', zh: '觉醒系统' },
        description: {
          en: 'At the protagonist\'s lowest moment, the System activates. The welcome message arrives in a monospace overlay. The protagonist accepts — usually by failing to refuse.',
          zh: '于主角最低之刻，系统激活。欢迎信息以等宽浮层到达。主角接受——通常以未能拒绝之方式。',
        },
        triggerConstraint: {
          en: 'Open on a moment of public humiliation or near-death. The System\'s overlay must arrive in the same beat.',
          zh: '开篇于一场公开屈辱或近死之刻。系统之浮层须于同一拍到达。',
        },
        payoffConstraint: {
          en: 'The System\'s welcome message must be quoted verbatim in monospace.',
          zh: '系统之欢迎信息须以等宽字体逐字引用。',
        },
        requiredArchetypeKeys: ['arc-ws-awakened', 'arc-ws-system-voice'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'ws-2-tutorial',
        role: 'setup',
        label: { en: 'Tutorial Quest', zh: '新手任务' },
        description: {
          en: 'A trivial first quest that tests whether the protagonist will cross the line — usually kill, sometimes worse. The pattern requires the crossing within this stage.',
          zh: '一微不足道之首任务，测试主角是否愿跨线——通常杀，有时更甚。模式要求此阶段内跨线。',
        },
        triggerConstraint: {
          en: 'A quest panel appears with checkbox and reward preview. The System marks the line as crossed or not.',
          zh: '一任务面板出现，含复选框与奖励预览。系统标记线是否被跨。',
        },
        payoffConstraint: {
          en: 'The protagonist must perform the line-crossing act in a single unhesitating motion.',
          zh: '主角须以一毫不犹豫之动作完成跨线行为。',
        },
        requiredArchetypeKeys: ['arc-ws-awakened', 'arc-ws-system-voice'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 'ws-3-rankup',
        role: 'rising-action',
        label: { en: 'System Rank-Up', zh: '系统升级' },
        description: {
          en: 'The protagonist ascends one rank in the System\'s hierarchy. The first rival system-holder appears; the first regional leaderboard is named.',
          zh: '主角于系统阶层升一阶。首位对手系统持有者出现；首位区域排行榜被命名。',
        },
        triggerConstraint: {
          en: 'A rank-up notification must arrive in a system panel, with a fanfare sound-effect transcribed.',
          zh: '升阶通知须于系统面板中到达，含一被转写之乐声。',
        },
        payoffConstraint: {
          en: 'The protagonist must use a system-granted ability in a way the System did not intend.',
          zh: '主角须以系统未预期之方式使用系统所赐之能力。',
        },
        requiredArchetypeKeys: ['arc-ws-awakened', 'arc-ws-rival-holder'],
        keyEventsMin: 2,
        keyEventsMax: 4,
      },
      {
        slotId: 'ws-4-first-blood',
        role: 'midpoint',
        label: { en: 'First Blood', zh: '第一战' },
        description: {
          en: 'A confrontation — with the rival-holder, a faction, or a tournament — settles the regional leaderboard. The protagonist\'s rank stabilizes; the rival-holder becomes a recurring figure.',
          zh: '一对抗——与对手持有者、一阵营或一锦标赛——决出区域排行榜。主角之等级稳定；对手持有者成为复现之角色。',
        },
        triggerConstraint: {
          en: 'The battle must be displayed in split screen: physical combat and system log simultaneously.',
          zh: '战须以分屏呈现：物理战斗与系统日志同时。',
        },
        payoffConstraint: {
          en: 'The protagonist must spare the rival-holder at least once, against system advice.',
          zh: '主角须至少一次违系统之建议而饶过对手持有者。',
        },
        requiredArchetypeKeys: ['arc-ws-awakened', 'arc-ws-rival-holder'],
        keyEventsMin: 1,
        keyEventsMax: 2,
      },
      {
        slotId: 'ws-5-system-reveal',
        role: 'crisis',
        label: { en: 'System Truth', zh: '系统真相' },
        description: {
          en: 'The protagonist discovers what the System extracts in exchange for rank — usually emotional range, future memories, or the right to be remembered by name. The cost is now visible.',
          zh: '主角发现系统于等级之交换中所索取者——通常情感范围、未来记忆、或被以名记忆之权。代价今为可见。',
        },
        triggerConstraint: {
          en: 'A retroactive system log must appear, showing deductions the protagonist never consciously authorized.',
          zh: '一追溯之系统日志须出现，呈现主角从未明确授权之扣减。',
        },
        payoffConstraint: {
          en: 'The protagonist must briefly consider destroying the System; the System must briefly consider replacing him.',
          zh: '主角须短暂考虑毁掉系统；系统须短暂考虑替换之。',
        },
        requiredArchetypeKeys: ['arc-ws-awakened', 'arc-ws-system-voice'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'ws-6-apex',
        role: 'climax',
        label: { en: 'Apex Form', zh: '终极形态' },
        description: {
          en: 'The protagonist exceeds the System\'s design range. The final battle is fought using deprecated abilities — the System marked them obsolete, the protagonist proves otherwise.',
          zh: '主角超越系统之设计范围。终战以已弃用之能力战之——系统标之为弃用，主角证之不然。',
        },
        triggerConstraint: {
          en: 'The final blow must land with an ability the System has marked "deprecated".',
          zh: '最后一击须以一被系统标为"已弃用"之能力完成。',
        },
        payoffConstraint: {
          en: 'The System must offer a final choice — merge, succeed, or release — and the protagonist must answer in writing.',
          zh: '系统须提供最终选择——合、继、释——且主角须以书面答之。',
        },
        requiredArchetypeKeys: ['arc-ws-awakened', 'arc-ws-system-voice'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
    ],
    archetypes: [
      {
        archetypeKey: 'arc-ws-awakened',
        label: { en: 'The Awakened One', zh: '觉醒者' },
        functionSummary: {
          en: 'Humiliated at open, ascendant at close. The arc is a continuous exchange of personality for rank.',
          zh: '开篇受辱，结尾登顶。其弧线为人格与等级之持续交换。',
        },
        mandatoryAtRoles: ['inciting-incident', 'setup', 'rising-action', 'midpoint', 'crisis', 'climax'],
      },
      {
        archetypeKey: 'arc-ws-system-voice',
        label: { en: 'The System Voice', zh: '系统之声' },
        functionSummary: {
          en: 'Speaks only in monospace panels. The arc is from instrument to interlocutor to (possibly) defeated equal.',
          zh: '仅以等宽面板说话。其弧线由器走向对话者走向（可能之）被击败之对等者。',
        },
        mandatoryAtRoles: ['inciting-incident', 'setup', 'crisis', 'climax'],
      },
      {
        archetypeKey: 'arc-ws-rival-holder',
        label: { en: 'The Rival Holder', zh: '对手持有者' },
        functionSummary: {
          en: 'Carries a competing System. Begins as enemy, ends as ally or as silent witness to the protagonist\'s growth.',
          zh: '携一竞争之系统。始为敌，终为盟或为主角成长之沉默见证者。',
        },
        mandatoryAtRoles: ['rising-action', 'midpoint'],
      },
      {
        archetypeKey: 'arc-ws-faction-broker',
        label: { en: 'The Faction Broker', zh: '阵营中介' },
        functionSummary: {
          en: 'Embodies worldly power. May be the patron who offers membership or the adversary who returns to challenge the apex.',
          zh: '世俗权力之化身。或为提供成员资格之恩主，或为回归挑战终极之敌人。',
        },
        mandatoryAtRoles: ['rising-action'],
      },
    ],
    turningPoints: [
      {
        pointKey: 'tp-ws-awakening',
        label: { en: 'System Activated', zh: '系统激活' },
        slotId: 'ws-1-awakening',
        irreversibleChange: {
          en: 'The System is bound; reversal requires the protagonist\'s death or the System\'s destruction.',
          zh: '系统已绑；解除需主角之死或系统之毁。',
        },
      },
      {
        pointKey: 'tp-ws-line-crossed',
        label: { en: 'Line Crossed', zh: '跨线' },
        slotId: 'ws-2-tutorial',
        irreversibleChange: {
          en: 'The protagonist has killed (or done equivalent); the line cannot be re-crossed. Future mercy is now a choice, not a default.',
          zh: '主角已杀（或同义之行）；线不可重跨。日后之慈悲今为抉择，非默认。',
        },
      },
      {
        pointKey: 'tp-ws-system-truth',
        label: { en: 'System Truth Revealed', zh: '系统真相揭' },
        slotId: 'ws-5-system-reveal',
        irreversibleChange: {
          en: 'The protagonist can no longer act as if the System is free; future actions must negotiate the debt.',
          zh: '主角无法再以系统为免费而行动；日后行动须与债务谈判。',
        },
      },
    ],
    parameterSlots: STANDARD_PARAMETER_SLOTS,
    invariants: [
      {
        code: 'INV-WS-RANKUP-CLOSURE',
        spec: 'every.stage.closesWith == "system-acknowledged rankup"',
        message: {
          en: 'Every stage must close with a system-acknowledged rank-up event — no informal transitions permitted.',
          zh: '每阶段须以系统认证之升阶事件闭合——不允许非正式过渡。',
        },
      },
      {
        code: 'INV-WS-DEPRECATED-FINAL-BLOW',
        spec: 'finalBlow.ability.systemTag == "deprecated"',
        message: {
          en: 'The final blow must land with an ability the System has marked "deprecated" — the protagonist wins by exceeding design.',
          zh: '最后一击须以一被系统标为"已弃用"之能力完成——主角以超越设计而胜。',
        },
      },
      {
        code: 'INV-WS-HESITATES-ONCE',
        spec: 'count(stageWhere.protagonistRefusesSystemAdvice) >= 1',
        message: {
          en: 'The protagonist must refuse system advice at least once; the refusal marks the shift from instrument to interlocutor.',
          zh: '主角须至少一次违系统之建议；该拒绝标志由器走向对话者之转变。',
        },
      },
    ],
  },

  /* ======================================================================
   *  9. 网文·重生流 · REBIRTH STREAM (built-in 5-stage webnovel pattern)
   * ==================================================================== */
  {
    id: 'pat-builtin-webnovel-rebirth',
    patternKey: 'webnovel-rebirth-stream',
    name: { en: 'Rebirth Stream', zh: '网文·重生流' },
    family: { en: 'Webnovel · Rebirth Stream', zh: '网文·重生流' },
    familyKey: 'webnovel-rebirth',
    description: {
      en: "The Chinese rebirth-stream webnovel pattern: the protagonist dies in failure, returns to an earlier point with future knowledge, and uses the butterfly effect to either avert the original ending or — more rarely — accept it knowingly. Revenge and rescue are dual motives.",
      zh: '中国重生流网文模式：主角以失败而死，携未来知识返于更早之点，以蝴蝶效应或避免原结局，或——更罕见——知而受之。复仇与拯救为双重动机。',
    },
    provenance: 'built-in',
    status: 'sealed',
    stages: [
      {
        slotId: 'wr-1-death-rebirth',
        role: 'inciting-incident',
        label: { en: 'Death & Rebirth', zh: '死亡重生' },
        description: {
          en: 'The protagonist dies the original ending — typically by betrayal, miscalculation, or injustice — and wakes in their past body with memory intact. The first moment of recognition is the pattern\'s seed.',
          zh: '主角以原结局而亡——通常因背叛、误判或不公——于其过去之身中醒，记忆完整。首刻之认知为模式之种。',
        },
        triggerConstraint: {
          en: 'Open on the death scene in present tense, then cut to the awakening in past tense. The cut is the rebirth.',
          zh: '开篇于现在时之死亡场景，再切至过去时之觉醒。切换即重生。',
        },
        payoffConstraint: {
          en: 'The protagonist must check a calendar, mirror, or scar to confirm the rebirth.',
          zh: '主角须查验日历、镜或疤以确认重生。',
        },
        requiredArchetypeKeys: ['arc-wr-reborn'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'wr-2-butterfly',
        role: 'rising-action',
        label: { en: 'Butterfly Effect', zh: '蝴蝶效应' },
        description: {
          en: 'A small deviation — a saved bus, a refused loan, a remembered name — produces effects that compound. Some are beneficial, some disastrous; the pattern forbids a clean leverage.',
          zh: '一微小之偏——所救之车、所拒之贷、所记之名——产生累积之效。或有益，或致灾；模式禁干净之杠杆。',
        },
        triggerConstraint: {
          en: 'The protagonist must save someone the original timeline lost — and the saved person must not be what they seemed.',
          zh: '主角须救原时间线所失之人——且所救者须非其所示。',
        },
        payoffConstraint: {
          en: 'A second loss — different from the original death — must occur as a side-effect of the saving.',
          zh: '须有一异于原死之第二次失去作为拯救之副作用而发生。',
        },
        requiredArchetypeKeys: ['arc-wr-saved'],
        keyEventsMin: 2,
        keyEventsMax: 4,
      },
      {
        slotId: 'wr-3-revenge-setup',
        role: 'rising-action',
        label: { en: 'Revenge Setup', zh: '复仇布局' },
        description: {
          en: 'The protagonist begins moving against the original betrayer(s). The setup is methodical, patient, and at least one move is genuinely original — not a memorized advantage.',
          zh: '主角开始针对原背叛者。布局有条理、有耐性，且至少一招真正原创——非记忆之优势。',
        },
        triggerConstraint: {
          en: 'A scene where the protagonist meets the original betrayer in a context the betrayer does not yet know is hostile.',
          zh: '一场主角于背叛者尚不知其为敌之语境中见之之场景。',
        },
        payoffConstraint: {
          en: 'The protagonist must spare the betrayer once, deliberately, to keep them useful.',
          zh: '主角须刻意饶过背叛者一次，以保其有用。',
        },
        requiredArchetypeKeys: ['arc-wr-betrayer'],
        keyEventsMin: 2,
        keyEventsMax: 4,
      },
      {
        slotId: 'wr-4-truth',
        role: 'midpoint',
        label: { en: 'Truth Revealed', zh: '真相揭穿' },
        description: {
          en: 'A fact hidden in the original timeline surfaces — the protagonist was not the only one who knew. A second traveler, or a leak, or a counter-memory exists. The original plan is now contested.',
          zh: '原时间线所藏之事实浮现——非唯主角一人知。或存在第二位旅行者、或一泄漏、或一反记忆。原计划今为 contested。',
        },
        triggerConstraint: {
          en: 'The reveal must arrive in a context the protagonist thought was safe — the breakfast table, the bedroom.',
          zh: '揭示须于主角以为安全之语境中到达——早餐桌、卧室。',
        },
        payoffConstraint: {
          en: 'The second traveler (or leak) must want a different ending than the protagonist.',
          zh: '第二位旅行者（或泄漏）须欲一不同之结局。',
        },
        requiredArchetypeKeys: ['arc-wr-second-traveler'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
      {
        slotId: 'wr-5-new-ending',
        role: 'climax',
        label: { en: 'New Ending', zh: '新结局' },
        description: {
          en: 'A new ending is reached — neither the original failure nor the simple aversion the protagonist imagined. The pattern requires the new ending cost something the original failure preserved.',
          zh: '一新的结局到达——既非原失败，亦非主角所想象之简单回避。模式要求新结局以原失败所保之物为代价。',
        },
        triggerConstraint: {
          en: 'The climactic scene must occur on the same calendar date as the original death.',
          zh: '高潮场景须发生于原死之同一日历日。',
        },
        payoffConstraint: {
          en: 'The protagonist must let one element of the original ending stand — chosen, not failed.',
          zh: '主角须让原结局之一元素留下——所选，非所败。',
        },
        requiredArchetypeKeys: ['arc-wr-reborn', 'arc-wr-second-traveler'],
        keyEventsMin: 1,
        keyEventsMax: 1,
      },
    ],
    archetypes: [
      {
        archetypeKey: 'arc-wr-reborn',
        label: { en: 'The Reborn', zh: '重生者' },
        functionSummary: {
          en: 'Carries the original timeline as memory and the new timeline as choice. The arc is the slow replacement of revenge with construction.',
          zh: '以原时间线为记忆、新时间线为抉择。其弧线为复仇被建构所缓慢取代。',
        },
        mandatoryAtRoles: ['inciting-incident', 'rising-action', 'climax'],
      },
      {
        archetypeKey: 'arc-wr-betrayer',
        label: { en: 'The Original Betrayer', zh: '原背叛者' },
        functionSummary: {
          en: 'The death\'s cause. May not survive to the climax — but their plan must still be active in the new timeline.',
          zh: '死之因。可不到高潮——然其计划须于新时间线仍活跃。',
        },
        mandatoryAtRoles: ['rising-action'],
      },
      {
        archetypeKey: 'arc-wr-saved',
        label: { en: 'The Saved', zh: '被救者' },
        functionSummary: {
          en: 'A character the protagonist rescued from the original timeline. Their ungrateful or unexpected turn forces the second-traveler reveal.',
          zh: '主角自原时间线所救之角色。其忘恩或意外之转迫使第二旅行者揭示。',
        },
        mandatoryAtRoles: ['rising-action'],
      },
      {
        archetypeKey: 'arc-wr-second-traveler',
        label: { en: 'The Second Traveler', zh: '第二旅行者' },
        functionSummary: {
          en: 'Another who knows. May be the beloved the protagonist is trying to save — or the beloved\'s true allegiance. Always wants a different ending.',
          zh: '另一知者。或即主角所试图拯救之爱人——或爱人之真忠。总欲一不同之结局。',
        },
        mandatoryAtRoles: ['midpoint', 'climax'],
      },
    ],
    turningPoints: [
      {
        pointKey: 'tp-wr-rebirth',
        label: { en: 'The Rebirth', zh: '重生' },
        slotId: 'wr-1-death-rebirth',
        irreversibleChange: {
          en: 'The protagonist now carries memory of the original death; every future choice is now doubled.',
          zh: '主角今携原死之记忆；日后每一抉择今为加倍。',
        },
      },
      {
        pointKey: 'tp-wr-truth',
        label: { en: 'Second Traveler Revealed', zh: '第二旅行者揭示' },
        slotId: 'wr-4-truth',
        irreversibleChange: {
          en: 'The protagonist is no longer the only one who knows; the original plan is now contested.',
          zh: '主角不再为唯一知者；原计划今为 contested。',
        },
      },
      {
        pointKey: 'tp-wr-new-ending',
        label: { en: 'The New Ending', zh: '新结局' },
        slotId: 'wr-5-new-ending',
        irreversibleChange: {
          en: 'The new ending is reached; one element of the original ending has been chosen to stand. The rebirth loop is closed.',
          zh: '新结局已至；原结局之一元素被择留下。重生之环闭合。',
        },
      },
    ],
    parameterSlots: STANDARD_PARAMETER_SLOTS,
    invariants: [
      {
        code: 'INV-WR-MEMORY-INTACT',
        spec: 'reborn.protagonist.memoryOfOriginalTimeline == "complete" && reborn.protagonist.bodyAge < deathAge',
        message: {
          en: 'Memory must be complete; body must be younger than at death. Partial memory collapses the pattern.',
          zh: '记忆须完整；身须小于死时之年。部分记忆使模式坍塌。',
        },
      },
      {
        code: 'INV-WR-SAME-DATE-CLIMAX',
        spec: 'newEnding.date == originalDeath.date',
        message: {
          en: 'The climactic scene must occur on the same calendar date as the original death. The pattern is calendrical.',
          zh: '高潮场景须发生于原死之同一日历日。模式为日历的。',
        },
      },
      {
        code: 'INV-WR-CHOSEN-PRESERVATION',
        spec: 'newEnding.preservedElement ∈ originalEnding.elements && preservedElement.preservationReason == "chosen"',
        message: {
          en: 'At least one element of the original ending must be chosen to stand — not failed, not averted, but chosen.',
          zh: '原结局至少一元素须被择留下——非所败、非所避，乃所择。',
        },
      },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*  LIBRARY AGGREGATOR                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Returns all patterns in the library, in display order:
 * built-in first, then distilled, then aggregated.
 * Subagent B's PatternLibrarySection should consume this.
 */
export function getAllPatterns(): StoryPattern[] {
  return [...BUILT_IN_PATTERNS, ...DISTILLED_PATTERNS, ...AGGREGATED_PATTERNS]
}

/* -------------------------------------------------------------------------- */
/*  CONVENIENCE HELPERS                                                       */
/* -------------------------------------------------------------------------- */

/** Look up a pattern by id. */
export function findPatternById(id: string): StoryPattern | undefined {
  return getAllPatterns().find((p) => p.id === id)
}

/** Look up a reference document by id. */
export function findReferenceById(id: string): ReferenceDocument | undefined {
  return SAMPLE_REFERENCES.find((r) => r.id === id)
}

/** Group patterns by familyKey. Returns a Map. */
export function groupPatternsByFamily(): Map<string, StoryPattern[]> {
  const m = new Map<string, StoryPattern[]>()
  for (const p of getAllPatterns()) {
    const list = m.get(p.familyKey) ?? []
    list.push(p)
    m.set(p.familyKey, list)
  }
  return m
}
