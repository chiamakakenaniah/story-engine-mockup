/**
 * STORY ENGINE · 故事引擎 — Mock Outline Generator
 * ----------------------------------------------------
 * A purely client-side, hardcoded outline-tree generator that consumes a
 * sealed StoryPattern + the user's 6 parameter bindings and emits a
 * plausible candidate outline tree (OutlineNode[]).
 *
 * This is NOT real generation. The point is to make the vision mockup feel
 * real: each chapter is one-to-one with a pattern stage, each chapter's
 * `patternSlotId` is the stage's `slotId`, and the prose interpolates the
 * bindings the user typed (or curated defaults) so the output reads as
 * evocative, specific, bilingual EN+ZH.
 *
 * Volume grouping: chapters are grouped into 1–3 volumes by stage count.
 *   - ≤5 stages → 1 volume
 *   - 6–8 stages → 2 volumes (split in half)
 *   - 9+ stages → 3 volumes (split in thirds)
 *
 * The chapter-copy templates are family-aware (Save-the-Cat vs Hero's-Journey
 * vs Kishōtenketsu vs webnovel-system etc. each have their own voice), but the
 * binding interpolation is shared.
 */

import type { OutlineNode, PatternStageSlot, StoryPattern } from '@/lib/story-engine-data'

/* -------------------------------------------------------------------------- */
/*  TYPES + DEFAULTS                                                          */
/* -------------------------------------------------------------------------- */

export type BindingKey =
  | 'setting'
  | 'protagonist'
  | 'antagonist'
  | 'centralConflict'
  | 'stakes'
  | 'theme'

export type ParameterBindings = Partial<Record<BindingKey, string>>

/** Curated example bindings — used when the user clicks "Fill with example". */
export const EXAMPLE_BINDINGS: Record<BindingKey, string> = {
  setting:
    'the siege city of Alençon in the third winter of the blockade, where every clock has been seized by the Magistrate to enforce a single common time',
  protagonist:
    'Mira, a clockmaker who has stopped winding her own clocks since her apprentice was conscripted',
  antagonist:
    'the Magistrate of Hours, who measures civic loyalty in hinges and hours and has not slept in nine days',
  centralConflict:
    'Mira must forge a false almanac that retrodates the blockade by one season, before the Magistrate convenes the tribunal that will conscript the city’s children',
  stakes:
    'if the almanac is detected, Mira’s remaining apprentice — her niece — is taken into the Magistrate’s clockwork army and never returned',
  theme:
    'precision is a form of love, and love a form of treason; the question is which the city will choose to punish',
}

const ZH_NUMERALS = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']

/** Merge user bindings with curated defaults (empty values fall back). */
function resolveBindings(b: ParameterBindings): Record<BindingKey, string> {
  const out = { ...EXAMPLE_BINDINGS }
  ;(Object.keys(out) as BindingKey[]).forEach((k) => {
    const v = b[k]
    if (v && v.trim().length > 0) out[k] = v
  })
  return out
}

/* -------------------------------------------------------------------------- */
/*  CHAPTER COPY — family-aware templates                                     */
/* -------------------------------------------------------------------------- */

type ChapterCopy = {
  title: { en: string; zh: string }
  summary: { en: string; zh: string }
}

type B = Record<BindingKey, string>

/**
 * Build a chapter title + summary for a given stage. Switches on
 * familyKey so each family gets a distinct voice. All output is bilingual.
 */
function buildChapterCopy(
  pattern: StoryPattern,
  stage: PatternStageSlot,
  chapterNum: number,
  b: B,
): ChapterCopy {
  const num = String(chapterNum).padStart(2, '0')
  const zhNum = ZH_NUMERALS[chapterNum - 1] ?? String(chapterNum)

  // Strip leading "1. ", "起·", etc. for cleaner chapter-title reuse.
  const stageEn = stage.label.en
  const stageZh = stage.label.zh

  switch (pattern.familyKey) {
    /* ------------------------------------------------------------------- */
    case 'beatsheet': {
      const map: Record<string, ChapterCopy> = {
        'beat-01-opening-image': {
          title: { en: `${num}. The Lie She Lives`, zh: `第${zhNum}章·她所活之谎言` },
          summary: {
            en: `In ${b.setting}, ${b.protagonist} opens the day the same way she has for a year — but the camera holds on the unwound clock she will not touch.`,
            zh: `于${b.setting}，${b.protagonist}以一年来同一方式开始一日——然镜头停留于她不愿触碰之未上弦之钟。`,
          },
        },
        'beat-02-theme-stated': {
          title: { en: `${num}. What the Apprentice Said`, zh: `第${zhNum}章·学徒所说` },
          summary: {
            en: `Her niece says, half-laughing: "${b.theme}." Mira does not yet hear it.`,
            zh: `其侄女半笑言：「${b.theme}」。米拉尚未闻之。`,
          },
        },
        'beat-03-set-up': {
          title: { en: `${num}. Three Faces of the Siege`, zh: `第${zhNum}章·围城之三面` },
          summary: {
            en: `Three scenes: want (a calendar of conscription), flaw (a forged signature), false mastery (the Magistrate's compliment). ${b.antagonist} appears for the first time.`,
            zh: `三场：欲（征兵日历）、缺陷（伪造签名）、伪熟（长官之赞）。${b.antagonist}首次出现。`,
          },
        },
        'beat-04-catalyst': {
          title: { en: `${num}. The Summons at the Door`, zh: `第${zhNum}章·门口之传唤` },
          summary: {
            en: `A letter arrives: ${b.centralConflict}. Mira says no, then yes, in the same breath.`,
            zh: `一信至：${b.centralConflict}。米拉以同一呼吸先说不再说「是」。`,
          },
        },
        'beat-05-debate': {
          title: { en: `${num}. The Shop She Cannot Re-Open`, zh: `第${zhNum}章·她无法重开之铺` },
          summary: {
            en: `Mira tries to return to the routine of gears. The bench, the lacquer, the quiet — none of it holds. A second summons, sharper, arrives.`,
            zh: `米拉试返齿轮之日常。工作台、漆、寂静——皆不持。第二次传唤，更锐，至。`,
          },
        },
        'beat-06-break-into-two': {
          title: { en: `${num}. The Tribunal Door`, zh: `第${zhNum}章·法庭之门` },
          summary: {
            en: `Mira crosses the threshold of the Magistrate's court. The "before" of her year ends; she names the new world aloud: "I am here to lie."`,
            zh: `米拉越长官法庭之阈。一年之「前」结束；她出声命名新世界：「我在此为谎言。」`,
          },
        },
        'beat-07-b-story': {
          title: { en: `${num}. The Counter-Clavierist`, zh: `第${zhNum}章·对位之琴师` },
          summary: {
            en: `Mira meets, by accident, the B-story character — a former tribunal clerk who hums the phrase her niece had spoken. The theme reframes itself.`,
            zh: `米拉偶然遇见 B 故事之角色——前法庭书记，哼其侄女所言之句。主题自我重塑。`,
          },
        },
        'beat-08-fun-games': {
          title: { en: `${num}. Three Forgeries`, zh: `第${zhNum}章·三伪` },
          summary: {
            en: `Three set-pieces: the almanac page, the ink recipe, the witness ledger. The third fails — ${b.antagonist} notices the date.`,
            zh: `三场：历法一页、墨配方、见证账。第三失败——${b.antagonist}注意到日期。`,
          },
        },
        'beat-09-midpoint': {
          title: { en: `${num}. The False Acquittal`, zh: `第${zhNum}章·伪判无罪` },
          summary: {
            en: `News arrives: the tribunal acquits the first accused. Mira's want is exposed — she wanted to win, not to lie. The wrong want.`,
            zh: `消息至：法庭判首位被告无罪。米拉之欲被揭——她所欲为胜，而非伪。错之欲。`,
          },
        },
        'beat-10-bad-guys-close-in': {
          title: { en: `${num}. The Apprentice Is Followed`, zh: `第${zhNum}章·学徒被跟踪` },
          summary: {
            en: `${b.antagonist}'s agents follow Mira's niece. The B-story clerk warns her; the warning arrives too late. The ledger Mira was given is taken.`,
            zh: `${b.antagonist}之探子跟踪米拉之侄女。B 故事之书记警告之；警告迟到。米拉所得之账被取。`,
          },
        },
        'beat-11-all-is-lost': {
          title: { en: `${num}. The Whiff of Death`, zh: `第${zhNum}章·死之气息` },
          summary: {
            en: `The B-story clerk is found hanged in the tribunal antechamber. Mira is the cause — her ledger was the evidence. ${b.stakes}.`,
            zh: `B 故事之书记被发现吊死于法庭前厅。米拉为因——其账为证。${b.stakes}。`,
          },
        },
        'beat-12-dark-night': {
          title: { en: `${num}. The Bench at Night`, zh: `第${zhNum}章·夜之工作台` },
          summary: {
            en: `Mira sits alone at the clerk's bench. She says the theme phrase as a question — "${b.theme}?" — then as a statement.`,
            zh: `米拉独坐书记之工作台。她以疑问说出主题短语——「${b.theme}？」——再以陈述。`,
          },
        },
        'beat-13-break-into-three': {
          title: { en: `${num}. The Tools Assembled`, zh: `第${zhNum}章·工具集结` },
          summary: {
            en: `Mira names the new plan aloud: not to forge the almanac, but to publish the true one. She is interrupted before the second sentence.`,
            zh: `米拉出声命名新计划：非伪历法，乃刊真历。第二句未完即被打断。`,
          },
        },
        'beat-14-finale': {
          title: { en: `${num}. The Synthesis`, zh: `第${zhNum}章·综合` },
          summary: {
            en: `The Magistrate's plan is revealed as Mira's original plan gone wrong. Mira lands the final blow with the clerk's last gift — a folded page — not her own skill.`,
            zh: `长官之计划被揭为米拉原计划之走偏版本。米拉以书记最后之赠物——一折页——而非自身之技，落最后一击。`,
          },
        },
        'beat-15-final-image': {
          title: { en: `${num}. The Same Bench, A Different Light`, zh: `第${zhNum}章·同一工作台，异光` },
          summary: {
            en: `The camera holds the same composition as Beat 01 — bench, window, unwound clock — but the clock is wound now, and Mira's face is unreadable.`,
            zh: `镜头持与第 01 拍同一构图——工作台、窗、未上弦之钟——然钟今已上弦，且米拉之面容不可判读。`,
          },
        },
      }
      return (
        map[stage.slotId] ?? {
          title: { en: `${num}. ${stageEn}`, zh: `第${zhNum}章·${stageZh}` },
          summary: {
            en: `In ${b.setting}, ${b.protagonist} meets the demands of ${stageEn.toLowerCase()} — the pattern stage that asks "${stage.triggerConstraint.en}". The chapter pays off: ${stage.payoffConstraint.en}.`,
            zh: `于${b.setting}，${b.protagonist}应${stageZh}之求——此阶段要求「${stage.triggerConstraint.zh}」。本章闭合：${stage.payoffConstraint.zh}。`,
          },
        }
      )
    }

    /* ------------------------------------------------------------------- */
    case 'hero-journey': {
      const map: Record<string, ChapterCopy> = {
        'hj-01-ordinary-world': {
          title: { en: `${num}. The Ordinary World`, zh: `第${zhNum}章·常世` },
          summary: {
            en: `In ${b.setting}, ${b.protagonist} performs the daily ritual that hides the wound. The chapter closes on a threshold she will not yet look at.`,
            zh: `于${b.setting}，${b.protagonist}行掩盖伤口之日常。章节以她尚未直视之阈作结。`,
          },
        },
        'hj-02-call': {
          title: { en: `${num}. The Call`, zh: `第${zhNum}章·召唤` },
          summary: {
            en: `An unbidden summons: ${b.centralConflict}. ${b.protagonist} states the cost of acceptance aloud, to no one.`,
            zh: `一不请之传唤：${b.centralConflict}。${b.protagonist}向空出声陈述接受之代价。`,
          },
        },
        'hj-03-refusal': {
          title: { en: `${num}. The Refusal`, zh: `第${zhNum}章·拒召` },
          summary: {
            en: `${b.protagonist} says no — citing ${b.stakes}. A secondary crisis follows that the refusal caused.`,
            zh: `${b.protagonist}说不——援引${b.stakes}。继之有一由拒绝所致之次生危机。`,
          },
        },
        'hj-04-mentor': {
          title: { en: `${num}. The Mentor`, zh: `第${zhNum}章·导师` },
          summary: {
            en: `A guide appears — offers a gift ${b.protagonist} did not ask for and does not understand — and names one flaw she has hidden from herself.`,
            zh: `一引导者出现——赠一${b.protagonist}未求且未解之礼物——并点破其自瞒之一缺陷。`,
          },
        },
        'hj-05-threshold': {
          title: { en: `${num}. Crossing the Threshold`, zh: `第${zhNum}章·越阈` },
          summary: {
            en: `A visible boundary — a wall, a river, a doorway — is crossed. The guardian speaks one sentence ${b.protagonist} will repeat at the climax.`,
            zh: `一可见之界——墙、河、门——被越。守者说一句${b.protagonist}将于高潮复述之句。`,
          },
        },
        'hj-06-tests': {
          title: { en: `${num}. Tests, Allies, Enemies`, zh: `第${zhNum}章·试炼·盟友·敌者` },
          summary: {
            en: `A scene of social density — a bar, a market, a contest. ${b.protagonist} assembles her team; one ally betrays her by chapter's end.`,
            zh: `一场人群密集之场景——酒馆、集市、比试。${b.protagonist}集结队伍；一盟友于章末背叛之。`,
          },
        },
        'hj-07-cave': {
          title: { en: `${num}. Approach to the Inmost Cave`, zh: `第${zhNum}章·近最内之穴` },
          summary: {
            en: `Deliberate preparation — weapons sharpened, plans rehearsed. ${b.protagonist} speaks a private truth to an ally before descending.`,
            zh: `刻意准备——磨利武器、排练计划。${b.protagonist}于下行前向一盟友说出一句私下之真。`,
          },
        },
        'hj-08-ordeal': {
          title: { en: `${num}. The Ordeal`, zh: `第${zhNum}章·考验` },
          summary: {
            en: `${b.protagonist} meets ${b.antagonist} at the structural center. She survives by surrendering a piece of herself; emerges marked — a wound, a white lock, a limp.`,
            zh: `${b.protagonist}于结构中心遇${b.antagonist}。其以舍弃自身之一片段而存；带印记而出——一伤、一白发、一跛。`,
          },
        },
        'hj-09-reward': {
          title: { en: `${num}. Seizing the Sword`, zh: `第${zhNum}章·夺剑` },
          summary: {
            en: `${b.protagonist} claims the elixir — the knowledge that "${b.theme}". The pattern permits the only rest scene in the book; ${b.protagonist} misreads the reward as final.`,
            zh: `${b.protagonist}取得灵药——「${b.theme}」之知。模式容许全书唯一休憩场景；${b.protagonist}误读奖赏为终局。`,
          },
        },
        'hj-10-road-back': {
          title: { en: `${num}. The Road Back`, zh: `第${zhNum}章·归途` },
          summary: {
            en: `${b.antagonist} rallies. ${b.protagonist} must choose between the elixir for herself and the elixir for the world. An ally falls so she may continue.`,
            zh: `${b.antagonist}重整。${b.protagonist}须在为己之灵药与为世之灵药间抉择。一盟友倒下使其得以继续。`,
          },
        },
        'hj-11-resurrection': {
          title: { en: `${num}. The Resurrection`, zh: `第${zhNum}章·复活` },
          summary: {
            en: `At the same threshold as stage 5, ${b.protagonist} dies a second time — by choice. She refuses ${b.antagonist}'s offer of shared power, out loud.`,
            zh: `于第 5 阶段同一阈，${b.protagonist}再死一次——以择。她出声拒绝${b.antagonist}所予之共享权力。`,
          },
        },
        'hj-12-elixir': {
          title: { en: `${num}. Return with the Elixir`, zh: `第${zhNum}章·携灵药而归` },
          summary: {
            en: `${b.protagonist} returns. The elixir — "${b.theme}" — is shared. The Ordinary World echoes stage 1, one element inverted. She refuses to stay.`,
            zh: `${b.protagonist}归来。灵药——「${b.theme}」——被共享。常世呼应第 1 阶段，一元素已反。她拒绝留。`,
          },
        },
      }
      return (
        map[stage.slotId] ?? {
          title: { en: `${num}. ${stageEn}`, zh: `第${zhNum}章·${stageZh}` },
          summary: {
            en: `${b.protagonist} enters the stage of "${stageEn}" — the trigger is "${stage.triggerConstraint.en}". The chapter pays off: ${stage.payoffConstraint.en}.`,
            zh: `${b.protagonist}入「${stageZh}」之阶段——触发为「${stage.triggerConstraint.zh}」。本章闭合：${stage.payoffConstraint.zh}。`,
          },
        }
      )
    }

    /* ------------------------------------------------------------------- */
    case 'circle': {
      // Harmon Story Circle — 8 numbered steps
      const map: Record<string, ChapterCopy> = {
        'hc-01-you': {
          title: { en: `${num}. You · The Comfort Cage`, zh: `第${zhNum}章·尔·舒适之笼` },
          summary: {
            en: `${b.protagonist} performs the routine without thinking. The scene includes one object she will destroy at step 8.`,
            zh: `${b.protagonist}无思而为之日常。场景含她将于第 8 步摧毁之一物件。`,
          },
        },
        'hc-02-need': {
          title: { en: `${num}. Need · The Wrong Want`, zh: `第${zhNum}章·需·错之欲` },
          summary: {
            en: `${b.protagonist} articulates the want: to defeat ${b.antagonist}. The counterpart briefly doubts, then recants.`,
            zh: `${b.protagonist}陈述欲：击败${b.antagonist}。对位者短暂疑，再撤回。`,
          },
        },
        'hc-03-go': {
          title: { en: `${num}. Go · The Unfamiliar`, zh: `第${zhNum}章·行·陌生` },
          summary: {
            en: `${b.protagonist} enters ${b.setting}'s underside — wrong clothes, wrong language, wrong currency. She accepts an invitation step 1 would have refused.`,
            zh: `${b.protagonist}入${b.setting}之底——衣错、语错、币错。她接受一第 1 步将拒之邀请。`,
          },
        },
        'hc-04-search': {
          title: { en: `${num}. Search · The First Success`, zh: `第${zhNum}章·寻·首次成功` },
          summary: {
            en: `${b.protagonist} succeeds by the new rules. The success is ambivalent — pride and unease in the same gesture.`,
            zh: `${b.protagonist}以新规则成功。成功矛盾——同一动作既骄傲亦不安。`,
          },
        },
        'hc-05-find': {
          title: { en: `${num}. Find · The Silent Midpoint`, zh: `第${zhNum}章·得·无声中点` },
          summary: {
            en: `She gets what she wanted — a key to ${b.antagonist}'s archive. The moment is silent; no dialogue, no celebration. She performs one small kindness in the same beat.`,
            zh: `她得其所欲——${b.antagonist}档案之钥。所得之刻无声；无对话、无欢庆。她于同一拍行一小善。`,
          },
        },
        'hc-06-take': {
          title: { en: `${num}. Take · The Public Loss`, zh: `第${zhNum}章·付·公开之失` },
          summary: {
            en: `The price: ${b.stakes}. The counterpart witnesses and does not intervene. The comfort-self is shed in full.`,
            zh: `代价：${b.stakes}。对位者见证而未介入。舒适自我全脱。`,
          },
        },
        'hc-07-return': {
          title: { en: `${num}. Return · The Same Room`, zh: `第${zhNum}章·归·同一室` },
          summary: {
            en: `${b.protagonist} returns to the same room as step 1, same object present. She breaks the routine she performed then.`,
            zh: `${b.protagonist}返第 1 步之同一室，同一物件在。她破除彼时所行之日常。`,
          },
        },
        'hc-08-change': {
          title: { en: `${num}. Change · The Inversion`, zh: `第${zhNum}章·变·反转` },
          summary: {
            en: `The change is a gesture, not a declaration. ${b.protagonist} destroys the object from step 1. The circle closes at step 1's coordinates, inverted.`,
            zh: `变为动作，非宣告。${b.protagonist}摧毁第 1 步之物件。圈于第 1 步之坐标闭合，已反转。`,
          },
        },
      }
      return (
        map[stage.slotId] ?? {
          title: { en: `${num}. ${stageEn}`, zh: `第${zhNum}章·${stageZh}` },
          summary: {
            en: `${b.protagonist} at the step "${stageEn}". The trigger: ${stage.triggerConstraint.en}. The payoff: ${stage.payoffConstraint.en}.`,
            zh: `${b.protagonist}于「${stageZh}」之步。触发：${stage.triggerConstraint.zh}。闭合：${stage.payoffConstraint.zh}。`,
          },
        }
      )
    }

    /* ------------------------------------------------------------------- */
    case 'dramatica': {
      const map: Record<string, ChapterCopy> = {
        'dr-1-overall': {
          title: { en: `${num}. The "They" — Public Story`, zh: `第${zhNum}章·「他们」·公开故事` },
          summary: {
            en: `The Overall Story opens on a public event — a meeting, a battle, a verdict — that names the contested object: ${b.centralConflict}.`,
            zh: `总故事线以一公开事件开场——会议、战斗、宣判——命名所争之物：${b.centralConflict}。`,
          },
        },
        'dr-2-main-char': {
          title: { en: `${num}. The "I" — ${b.protagonist}'s Ritual`, zh: `第${zhNum}章·「我」·${b.protagonist}之仪轨` },
          summary: {
            en: `${b.protagonist} performs a small ritual that reveals the flaw: she cannot bring herself to want the right thing. The story's question is named.`,
            zh: `${b.protagonist}行一揭示缺陷之小仪轨：她无法使自己欲正确之物。故事之问被命名。`,
          },
        },
        'dr-3-obstacle': {
          title: { en: `${num}. The "You" — ${b.antagonist} Arrives`, zh: `第${zhNum}章·「你」·${b.antagonist}至` },
          summary: {
            en: `${b.antagonist} arrives with a different doctrine: ${b.theme} is wrong, the doctrine says. ${b.protagonist} must now test her own answer.`,
            zh: `${b.antagonist}携一不同之信条至：${b.theme}为错，信条言。${b.protagonist}今须自测其答。`,
          },
        },
        'dr-4-relationship': {
          title: { en: `${num}. The "We" — Private Scene`, zh: `第${zhNum}章·「我们」·私下场景` },
          summary: {
            en: `${b.protagonist} and ${b.antagonist} meet alone. No witnesses, no plot. The bond transforms; ${b.stakes}.`,
            zh: `${b.protagonist}与${b.antagonist}独见。无见证、无情节。羁绊转化；${b.stakes}。`,
          },
        },
      }
      return map[stage.slotId] ?? {
        title: { en: `${num}. ${stageEn}`, zh: `第${zhNum}章·${stageZh}` },
        summary: {
          en: `The ${stageEn} throughline advances: "${stage.triggerConstraint.en}" → "${stage.payoffConstraint.en}".`,
          zh: `${stageZh}线推进：「${stage.triggerConstraint.zh}」→「${stage.payoffConstraint.zh}」。`,
        },
      }
    }

    /* ------------------------------------------------------------------- */
    case 'truby': {
      const map: Record<string, ChapterCopy> = {
        'tr-1-need': {
          title: { en: `${num}. Need · The Hidden Wound`, zh: `第${zhNum}章·需·隐之伤` },
          summary: {
            en: `${b.protagonist} fails at something she should be able to do. The need is the cure she would refuse if offered: ${b.theme}.`,
            zh: `${b.protagonist}于一应能之事失败。需为其若被提供亦将拒之疗愈：${b.theme}。`,
          },
        },
        'tr-2-desire': {
          title: { en: `${num}. Desire · The Wrong Object`, zh: `第${zhNum}章·欲·错之对象` },
          summary: {
            en: `${b.protagonist} voices the desire: ${b.centralConflict}. The object is obtainable; the want is wrong.`,
            zh: `${b.protagonist}出声言欲：${b.centralConflict}。对象可得；欲为错。`,
          },
        },
        'tr-3-opponent': {
          title: { en: `${num}. Opponent · The Mirror`, zh: `第${zhNum}章·对手·镜` },
          summary: {
            en: `${b.antagonist} arrives with information ${b.protagonist} lacks — and offers an alliance she wrongly refuses. The opponent is better at her flaw, worse at her need.`,
            zh: `${b.antagonist}携${b.protagonist}所缺之信息至——并提出她错误拒绝之联盟。对手于其缺陷更胜，于其需更劣。`,
          },
        },
        'tr-4-plan': {
          title: { en: `${num}. Plan · The Flawed Strategy`, zh: `第${zhNum}章·计·缺陷之策略` },
          summary: {
            en: `${b.protagonist} rehearses the plan aloud. It includes one step she cannot actually execute — the flaw is now structural, not psychological.`,
            zh: `${b.protagonist}出声排练计划。其含一步她实际不能执行——缺陷今为结构，非心理。`,
          },
        },
        'tr-5-battle': {
          title: { en: `${num}. Battle · At the Site of Failure`, zh: `第${zhNum}章·战·于失败之处` },
          summary: {
            en: `At the site of her original failure, ${b.protagonist} meets ${b.antagonist}. The desire is lost; the need becomes audible.`,
            zh: `于其原始失败之处，${b.protagonist}遇${b.antagonist}。欲失；需可闻。`,
          },
        },
        'tr-6-self-revelation': {
          title: { en: `${num}. Self-Revelation · The Need Seen`, zh: `第${zhNum}章·自省·需之见` },
          summary: {
            en: `Triggered by an external act, ${b.protagonist} sees the need for the first time. She speaks it aloud, briefly, without ornament: "${b.theme}."`,
            zh: `由一外在行动触发，${b.protagonist}首次见需。她简短、无饰地说出之：「${b.theme}。」`,
          },
        },
        'tr-7-new-equilibrium': {
          title: { en: `${num}. New Equilibrium · Rest, Unfamiliar`, zh: `第${zhNum}章·新平衡·静，不熟` },
          summary: {
            en: `In a familiar location now occupied differently — moved furniture, changed light. A gesture signals the need is now being acted on, not merely known.`,
            zh: `于一熟悉地点然以不同方式占据——家具已移、光已变。一动作示意需今为所行而非仅所知。`,
          },
        },
        'tr-8-final-image': {
          title: { en: `${num}. Final Image · The Hand`, zh: `第${zhNum}章·终场镜像·手` },
          summary: {
            en: `A tableau inverts the opening. One object from stage 1, repurposed. End on ${b.protagonist}'s hand, not her face.`,
            zh: `一画面反转开篇。一第 1 阶段之物件，已改用。以${b.protagonist}之手作结，非其面。`,
          },
        },
      }
      return map[stage.slotId] ?? {
        title: { en: `${num}. ${stageEn}`, zh: `第${zhNum}章·${stageZh}` },
        summary: {
          en: `${b.protagonist} at the block "${stageEn}". Trigger: ${stage.triggerConstraint.en}. Payoff: ${stage.payoffConstraint.en}.`,
          zh: `${b.protagonist}于「${stageZh}」块。触发：${stage.triggerConstraint.zh}。闭合：${stage.payoffConstraint.zh}。`,
        },
      }
    }

    /* ------------------------------------------------------------------- */
    case 'kishotenketsu': {
      const map: Record<string, ChapterCopy> = {
        'ki-1-ki': {
          title: { en: `${num}. Ki · Introduction`, zh: `第${zhNum}章·起·引入` },
          summary: {
            en: `In ${b.setting}, ${b.protagonist} and her foil perform the same routine in proximity. Nothing is contested. The scene ends on an object whose significance will not be clear until Ketsu.`,
            zh: `于${b.setting}，${b.protagonist}与其对照者于近处行同一日常。无所争。场景以一物件作结，其义至合方明。`,
          },
        },
        'ki-2-sho': {
          title: { en: `${num}. Shō · Development`, zh: `第${zhNum}章·承·发展` },
          summary: {
            en: `Same location, one element shifted — season, light, mood. A second character arrives: ${b.antagonist}, not present in Ki.`,
            zh: `同一地点，一元素已变——季节、光、心境。一第二角色至：${b.antagonist}，未在起中出现。`,
          },
        },
        'ki-3-ten': {
          title: { en: `${num}. Ten · The Pivot`, zh: `第${zhNum}章·转·轴` },
          summary: {
            en: `A surprising shift of perspective arrives via ${b.antagonist}, previously minor. What was background becomes figure. The pivot re-frames Shō without contradicting it.`,
            zh: `一意外之视角转换经由原为次要之${b.antagonist}而至。原为背景者转为主题。轴重构承而不逆之。`,
          },
        },
        'ki-4-ketsu': {
          title: { en: `${num}. Ketsu · Conclusion`, zh: `第${zhNum}章·合·收束` },
          summary: {
            en: `${b.protagonist} and her foil return to the same room. The object from Ki is touched in a way its original context did not predict. The story unifies: "${b.theme}."`,
            zh: `${b.protagonist}与其对照者返同一室。起之物件以一种其原始语境未预期之方式被触及。故事统一：「${b.theme}。」`,
          },
        },
      }
      return map[stage.slotId] ?? {
        title: { en: `${num}. ${stageEn}`, zh: `第${zhNum}章·${stageZh}` },
        summary: {
          en: `The ${stageEn} movement. ${b.protagonist} in ${b.setting}.`,
          zh: `${stageZh}之乐章。${b.protagonist}于${b.setting}。`,
        },
      }
    }

    /* ------------------------------------------------------------------- */
    case 'jo-ha-kyu': {
      const map: Record<string, ChapterCopy> = {
        'jhk-1-jo': {
          title: { en: `${num}. Jo · The Held Image`, zh: `第${zhNum}章·序·持之像` },
          summary: {
            en: `A still scene held longer than is comfortable. ${b.setting}. ${b.protagonist}'s wound is named by what she does not do. The Jo ends on a sound that breaks the stillness — a footstep, a bell, a bird.`,
            zh: `一被保持至不适之静景。${b.setting}。${b.protagonist}之伤口由其所不行而名。序以一破静之音作结——足音、铃、鸟。`,
          },
        },
        'jhk-2-ha': {
          title: { en: `${num}. Ha · The Breaking`, zh: `第${zhNum}章·破·破` },
          summary: {
            en: `Tempo accelerates. Cuts shorten. ${b.antagonist} reveals a second wound, complicating the first. ${b.protagonist}'s companion speaks; the speech precipitates the Kyū.`,
            zh: `节奏加速。切换缩短。${b.antagonist}揭第二伤口，使首复杂化。${b.protagonist}之伴发言；其言催急。`,
          },
        },
        'jhk-3-kyu': {
          title: { en: `${num}. Kyū · The Abrupt`, zh: `第${zhNum}章·急·骤` },
          summary: {
            en: `A single sustained gesture compresses what Jo took slow time to build. ${b.protagonist} acts. The Kyū ends on silence, not on resolution — the reader finishes the gesture.`,
            zh: `一持续之动作压缩序所缓建者。${b.protagonist}行。急于沉默收，非于解决——读者完成动作。`,
          },
        },
      }
      return map[stage.slotId] ?? {
        title: { en: `${num}. ${stageEn}`, zh: `第${zhNum}章·${stageZh}` },
        summary: {
          en: `The ${stageEn} movement. ${b.protagonist} in ${b.setting}.`,
          zh: `${stageZh}之乐章。${b.protagonist}于${b.setting}。`,
        },
      }
    }

    /* ------------------------------------------------------------------- */
    case 'webnovel-system': {
      const map: Record<string, ChapterCopy> = {
        'ws-1-awakening': {
          title: { en: `${num}. Awakening · 觉醒`, zh: `第${zhNum}章·觉醒系统` },
          summary: {
            en: `At ${b.protagonist}'s lowest moment — humiliated, beaten — the System overlay flickers on. The welcome message arrives in monospace. She accepts by failing to refuse. [SYSTEM: contract bound.]`,
            zh: `于${b.protagonist}最低之刻——受辱、被殴——系统浮层闪烁开启。欢迎信息以等宽到达。她以未能拒绝之方式接受。【系统：契约已绑。】`,
          },
        },
        'ws-2-tutorial': {
          title: { en: `${num}. Tutorial · 新手任务`, zh: `第${zhNum}章·新手任务` },
          summary: {
            en: `The first quest panel appears: [OBJECTIVE: eliminate the informer] [REWARD: 1 rank]. ${b.protagonist} crosses the line in a single unhesitating motion. [SYSTEM: line-crossing logged.]`,
            zh: `首任务面板出现：【任务：清除告密者】【奖励：1 阶】。${b.protagonist}以一毫不犹豫之动作跨线。【系统：跨线已记。】`,
          },
        },
        'ws-3-rankup': {
          title: { en: `${num}. Rank Up · 升阶`, zh: `第${zhNum}章·系统升级` },
          summary: {
            en: `[SYSTEM: rank-up T1 → T2.] Fanfare transcribed. The first rival-holder appears; the regional leaderboard is named. ${b.protagonist} uses a system-granted ability in a way the System did not intend.`,
            zh: `【系统：升阶 T1 → T2。】乐声转写。首位对手持有者出现；区域排行榜被命名。${b.protagonist}以系统未预期之方式使用系统所赐之能力。`,
          },
        },
        'ws-4-first-blood': {
          title: { en: `${num}. First Blood · 第一战`, zh: `第${zhNum}章·第一战` },
          summary: {
            en: `Split-screen: physical combat and system log. ${b.protagonist} defeats ${b.antagonist}'s proxy; the regional leaderboard settles. She spares the rival-holder, against system advice. [SYSTEM: deviation flag set.]`,
            zh: `分屏：物理战斗与系统日志。${b.protagonist}击败${b.antagonist}之代理；区域排行榜定。她违系统之建议而饶过对手持有者。【系统：偏差标记设。】`,
          },
        },
        'ws-5-system-reveal': {
          title: { en: `${num}. The Hidden Cost · 隐之代价`, zh: `第${zhNum}章·系统真相` },
          summary: {
            en: `A retroactive system log appears — deductions ${b.protagonist} never authorized. [SYSTEM: extracted — emotionalRange (3%); futureMemories (1%); rightToBeNamed (-).] She briefly considers destroying the System; the System briefly considers replacing her.`,
            zh: `一追溯之系统日志现——${b.protagonist}从未授权之扣减。【系统：已取——情感范围（3%）；未来记忆（1%）；被以名记忆之权（-）。】她短暂考虑毁掉系统；系统短暂考虑替换她。`,
          },
        },
        'ws-6-apex': {
          title: { en: `${num}. Apex · 终极`, zh: `第${zhNum}章·终极形态` },
          summary: {
            en: `${b.protagonist} exceeds the System's design range. The final blow lands with a deprecated ability: [ABILITY: 'recall-wound' (deprecated, marked for removal v2.3)]. The System offers the final choice — merge, succeed, release. She answers in writing.`,
            zh: `${b.protagonist}超越系统之设计范围。最后一击以一弃用之能力完成：【能力：「唤伤」（弃用，标记移除 v2.3）】。系统提供最终选择——合、继、释。她以书面答之。`,
          },
        },
      }
      return map[stage.slotId] ?? {
        title: { en: `${num}. ${stageEn}`, zh: `第${zhNum}章·${stageZh}` },
        summary: {
          en: `${b.protagonist} advances the System arc: "${stage.triggerConstraint.en}". ${b.stakes}.`,
          zh: `${b.protagonist}推进系统弧线：「${stage.triggerConstraint.zh}」。${b.stakes}。`,
        },
      }
    }

    /* ------------------------------------------------------------------- */
    case 'webnovel-rebirth': {
      const map: Record<string, ChapterCopy> = {
        'wr-1-death-rebirth': {
          title: { en: `${num}. Death & Rebirth · 死与重生`, zh: `第${zhNum}章·死亡重生` },
          summary: {
            en: `${b.protagonist} dies the original ending — ${b.stakes} — and wakes in her past body, memory intact. She checks a calendar, a mirror, a scar. The rebirth is confirmed.`,
            zh: `${b.protagonist}以原结局而亡——${b.stakes}——于其过去之身中醒，记忆完整。她查验日历、镜、疤。重生确认。`,
          },
        },
        'wr-2-butterfly': {
          title: { en: `${num}. Butterfly · 蝶蝶`, zh: `第${zhNum}章·蝶蝶效应` },
          summary: {
            en: `${b.protagonist} saves someone the original timeline lost. The saved is not what they seemed. A second loss — different from the original death — occurs as a side-effect.`,
            zh: `${b.protagonist}救原时间线所失之人。所救非其所示。一异于原死之第二失去作为副作用而发生。`,
          },
        },
        'wr-3-revenge-setup': {
          title: { en: `${num}. Revenge Setup · 复仇布局`, zh: `第${zhNum}章·复仇布局` },
          summary: {
            en: `${b.protagonist} meets ${b.antagonist} in a context the betrayer does not yet know is hostile. The setup is methodical. She spares the betrayer once, deliberately, to keep them useful.`,
            zh: `${b.protagonist}于一背叛者尚不知其为敌之语境中见${b.antagonist}。布局有条理。她刻意饶过背叛者一次，以保其有用。`,
          },
        },
        'wr-4-truth': {
          title: { en: `${num}. Truth · 真相`, zh: `第${zhNum}章·真相揭穿` },
          summary: {
            en: `At the breakfast table — the safest context — the reveal arrives: ${b.protagonist} is not the only one who knows. The second traveler wants a different ending.`,
            zh: `于早餐桌——最安全之语境——揭示至：${b.protagonist}非唯一知者。第二旅行者欲一不同之结局。`,
          },
        },
        'wr-5-new-ending': {
          title: { en: `${num}. New Ending · 新结局`, zh: `第${zhNum}章·新结局` },
          summary: {
            en: `On the same calendar date as the original death, ${b.protagonist} reaches a new ending. She lets one element of the original ending stand — chosen, not failed. The rebirth loop closes. The story's theme: "${b.theme}."`,
            zh: `于原死之同一日历日，${b.protagonist}至一新的结局。她让原结局之一元素留下——所选，非所败。重生之环闭。故事主题：「${b.theme}。」`,
          },
        },
      }
      return map[stage.slotId] ?? {
        title: { en: `${num}. ${stageEn}`, zh: `第${zhNum}章·${stageZh}` },
        summary: {
          en: `${b.protagonist} in the rebirth arc at "${stageEn}". ${b.stakes}.`,
          zh: `${b.protagonist}于重生弧线之「${stageZh}」。${b.stakes}。`,
        },
      }
    }

    /* ------------------------------------------------------------------- */
    default: {
      // Distilled + aggregated patterns (e.g., family-saga, comedy-of-manners,
      // hard-scifi-contact, literary-mood, system-stream). Use stage label
      // directly and interpolate bindings in the summary.
      return {
        title: { en: `${num}. ${stageEn}`, zh: `第${zhNum}章·${stageZh}` },
        summary: {
          en: `In ${b.setting}, ${b.protagonist} navigates "${stageEn}". ${stage.triggerConstraint.en}. The chapter pays off: ${stage.payoffConstraint.en}.`,
          zh: `于${b.setting}，${b.protagonist}行「${stageZh}」。${stage.triggerConstraint.zh}。本章闭合：${stage.payoffConstraint.zh}。`,
        },
      }
    }
  }
}

/* -------------------------------------------------------------------------- */
/*  VOLUME GROUPING + TITLE                                                   */
/* -------------------------------------------------------------------------- */

function roman(n: number): string {
  return ['I', 'II', 'III', 'IV', 'V'][n - 1] ?? String(n)
}

const VOLUME_TITLES: Record<string, (n: number, b: B) => { en: string; zh: string }> = {
  beatsheet: (n, b) => ({
    en: n === 1 ? `Act I · The Lie` : n === 2 ? `Act II · The Wrong Want` : `Act III · The Synthesis`,
    zh: n === 1 ? `第一幕·谎言` : n === 2 ? `第二幕·错之欲` : `第三幕·综合`,
  }),
  'hero-journey': (n, _b) => ({
    en: n === 1 ? `Descent · ${b.descentName(_b)}` : n === 2 ? `Ordeal · ${b.ordealName(_b)}` : `Return · ${b.returnName(_b)}`,
    zh: n === 1 ? `下行卷` : n === 2 ? `考验卷` : `归卷`,
  }),
  circle: (n, _b) => ({
    en: n === 1 ? `Loop · The First Half` : n === 2 ? `Loop · The Second Half` : `Loop · The Closing`,
    zh: n === 1 ? `环·上半` : n === 2 ? `环·下半` : `环·闭合`,
  }),
  // Fallback generator (used by truby, kishotenketsu, jo-ha-kyu, webnovel-*,
  // and the distilled/aggregated patterns):
  default: (n, _b) => ({
    en: `Volume ${roman(n)}`,
    zh: `第${ZH_NUMERALS[n - 1] ?? n}卷`,
  }),
}

// Tiny helpers because TS in object literals doesn't see forward refs well —
// we just collapse them to plain strings.
const b = {
  descentName: (_b: B) => 'Crossing',
  ordealName: (_b: B) => 'The Ordeal',
  returnName: (_b: B) => 'Elixir',
}

/* -------------------------------------------------------------------------- */
/*  PUBLIC: generateMockOutline                                                */
/* -------------------------------------------------------------------------- */

/**
 * Generate a mock outline tree from a sealed pattern + parameter bindings.
 *
 * - One chapter per stage, in stage order.
 * - Chapters are grouped into 1–3 volumes based on stage count.
 * - Each chapter's `patternSlotId` is the stage's `slotId`.
 * - Chapter titles + summaries are bilingual EN+ZH, family-aware, and
 *   interpolate the parameter bindings (or curated example defaults).
 */
export function generateMockOutline(
  pattern: StoryPattern,
  bindings: ParameterBindings,
): OutlineNode[] {
  const b = resolveBindings(bindings)
  const stageCount = pattern.stages.length
  if (stageCount === 0) return []

  const volumeCount = stageCount <= 5 ? 1 : stageCount <= 8 ? 2 : 3
  const perVolume = Math.ceil(stageCount / volumeCount)

  const nodes: OutlineNode[] = []
  const volumeTitleFn = VOLUME_TITLES[pattern.familyKey] ?? VOLUME_TITLES.default

  for (let v = 0; v < volumeCount; v++) {
    const volumeNum = v + 1
    const volumeId = `node-vol-${volumeNum}`
    const startIdx = v * perVolume
    const endIdx = Math.min(startIdx + perVolume, stageCount)
    const volStages = pattern.stages.slice(startIdx, endIdx)
    if (volStages.length === 0) break

    const volTitle = volumeTitleFn(volumeNum, b)
    const firstStage = volStages[0]
    const lastStage = volStages[volStages.length - 1]

    nodes.push({
      id: volumeId,
      parentId: null,
      type: 'volume',
      title: volTitle,
      summary: {
        en: `Chapters ${startIdx + 1}–${endIdx} · ${volStages.length} stages · ${firstStage.label.en} through ${lastStage.label.en}`,
        zh: `第${startIdx + 1}–${endIdx}章 · ${volStages.length} 阶段 · ${firstStage.label.zh} 至 ${lastStage.label.zh}`,
      },
      order: volumeNum,
    })

    for (let i = 0; i < volStages.length; i++) {
      const stage = volStages[i]
      const chapterNum = startIdx + i + 1
      const copy = buildChapterCopy(pattern, stage, chapterNum, b)
      nodes.push({
        id: `node-chapter-${chapterNum}`,
        parentId: volumeId,
        type: 'chapter',
        title: copy.title,
        summary: copy.summary,
        order: chapterNum,
        patternSlotId: stage.slotId,
      })
    }
  }

  return nodes
}

/**
 * Resolve the user's bindings (or curated defaults) — exposed so the
 * MultiProductSection can pull the same effective bindings for its mockups.
 */
export function resolveExampleBindings(bindings: ParameterBindings): Record<BindingKey, string> {
  return resolveBindings(bindings)
}
