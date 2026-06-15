export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-11.js",
    pattern_id: "PAT-8-11",
    title: "Saving Money: Connecting Conditions and Results",
    short_title: "Saving Money",
    grade: 8,
    genre: "Explanation",
    cluster: "B",
    topic: "Personal Saving Habits",
    context: "Students explore how everyday financial choices lead to different outcomes through simple conditional relationships.",
    communicative_goal: "connect conditions with logical results using if...so... patterns",
    vocabulary_domain: ["money", "saving", "goal", "budget"],
    input_anchor: "scenario cards",
    output_anchor: "condition-result chart",
    prerequisite_patterns: ["PAT-8-10"],
    reusable_in: ["PAT-9-14", "PAT-9-15"],
    complexity_level: "Expand",
    notes: "TP kesebelas Kelas 8, Explanation, cluster B (Connecting Conditions and Results). target_pattern PAT-8-11 = 'If ... , ... so ...' (penjelasan kondisional faktual umum). DISTINGSI dari PAT-7-12 Kelas 7 ('If you want to..., Verb...to...', goal->tool, cenderung saran/imperatif): PAT-8-11 = 'If [kondisi], [hasil] so [konsekuensi]' tentang sebab-akibat umum -- BUKAN saran ke pendengar ('If you want X, you should...'). PAT-7-12 bukan prerequisite, disebut hanya untuk kejelasan. forbidden_overlap (giving advice, hypothetical opinions, procedural directions): subjek GENERIK ('a person'/'people'/'someone'), present tense -- BUKAN 'you should...', BUKAN 'I think if...', BUKAN 'First, do ...'. Reaktivasi PAT-8-10 (WAJIB, VR-1): 'First,...Next,...' (proses bertahap, subjek generik) -> REFRAME salah satu tahap/hasil proses menjadi hubungan kondisional 'If [kondisi], [hasil] so [konsekuensi]'. 'so' di sini = hasil/konsekuensi (beda konteks dari 'so'=tujuan PAT-8-04, tidak perlu dibedakan eksplisit). vocabulary_domain (money, saving, goal, budget) muncul di bahasa target. Ekstensi opsional kondisi ganda ('If a person saves regularly and avoids waste, ... so ...') -- menjaga head kondisional, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "If",
      "so",
      "money",
      "save",
      "savings",
      "goal",
      "budget",
      "spend"
    ],

    model_sentences: [
      { id: "model_1", text: "First, a person earns money. Next, they spend some and save some." },
      { id: "model_2", text: "If a person saves money every week, the savings grow so they can reach a goal." },
      { id: "model_3", text: "If people follow a budget, they spend less so they have more money." },
      { id: "model_4", text: "If someone wastes money, the budget runs out so they cannot buy what they need." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Scenario cards showing money choices: saving each week, following a budget, wasting money, reaching a goal.", asset_id: null },
      { id: "visual_2", description: "Condition-result cards: 'If [condition], [result] so [consequence]' with arrows.", asset_id: null },
      { id: "visual_3", description: "Icons: a coin jar (savings), a budget list, a goal flag, an empty wallet.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher marks a condition with one hand ('If ...'), then shows the result with the other." },
      { id: "gesture_2", description: "Teacher moves the result hand forward to a consequence while saying 'so ...'." },
      { id: "gesture_3", description: "Teacher points to a generic 'a person' figure (not themselves) to keep the subject general." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher reframe a step of a process into a conditional explanation with 'If ... , ... so ...', using a generic subject in present tense.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-10"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the condition-result sentences ('If ... , ... so ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Explain a condition and its result by replacing the situation.",
      prompt: "Use the pattern 'If [condition], [result] so [consequence].' Explain how a money choice leads to an outcome (money, saving, goal, budget). Use a generic subject ('a person', 'people') in present tense -- not 'you should ...', not 'I think if ...', and not 'First, do ...'.",
      change_target: ["condition (If ...)", "result", "consequence (so ...)"],
      differentiation: {
        easy: { task: "Use a scenario card and complete: 'If ___, ___ so ___.'" },
        standard: { task: "Write two condition-result sentences about money choices ('If ... , ... so ...')." },
        challenge: { task: "Start with a step of the process ('First, a person earns money. Next, they save some.'), then reframe it as 'If ... , ... so ...'." }
      },
      support: { pattern_support: ["PAT-8-10"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Build a condition-result chart with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: read a condition-result explanation ('If ... , ... so ...') from a scenario card while your partner notes the condition, result, and consequence. Then swap.",
      differentiation: {
        easy: { task: "Explain one condition-result (you may read); your partner finds the consequence. Then swap." },
        standard: { task: "Explain two condition-result chains without reading; your partner checks each has a result and a consequence. Then swap." },
        challenge: { task: "Reframe a process step as 'If ... , ... so ...'; your partner explains a different scenario. Then swap." }
      },
      support: { pattern_support: ["PAT-8-10"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present a condition-result chart to a new group (condition-result chart).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting a condition-result chart ('If ... , ... so ...').",
      differentiation: {
        easy: { task: "Present one condition-result to the new group. You may read it." },
        standard: { task: "Present two condition-result chains without reading." },
        challenge: { task: "Present your condition-result chains, then answer one question about a consequence from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students connect a condition to a result and consequence with 'If ... , ... so ...'",
        "students use a generic subject ('a person', 'people') in present tense, explaining a general relationship",
        "students still give advice ('you should ...'), a hypothetical opinion ('I think if ...'), or a direction ('First, do ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a second condition.",
        needs_model: "Repeat the MODEL step, emphasizing a generic subject and 'If [condition], [result] so [consequence]'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the condition-result sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives advice ('you should ...') or a direction instead of a factual condition-result",
        "relies only on the written sentences and cannot explain without reading",
        "connects conditions and results with 'If ... , ... so ...' accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling a generic subject with 'If [condition], [result] so [consequence]'",
        "model one more condition-result from everyday life to show the same pattern still works",
        "for a student who is ready, model ONE explanation with two conditions first -- 'If a person saves regularly and avoids waste, the savings grow quickly so they reach the goal sooner.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the conditional head, not advice or a direction"
      ]
    }
  ],

  constraints: {
    single_productive_pattern: true,
    requires_student_output: true,
    check_without_score: true,
    boost_without_label: true,
    tts_optional_backup: true,
    self_contained: true
  }
}
