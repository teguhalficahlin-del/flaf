export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-09.js",
    pattern_id: "PAT-8-09",
    title: "Exercise and Heart Rate: Understanding Cause and Effect",
    short_title: "Heart Rate Process",
    grade: 8,
    genre: "Explanation",
    cluster: "A",
    topic: "Exercise and Heart Rate",
    context: "Students observe simple activity data and explain why the heart beats faster during physical exercise.",
    communicative_goal: "explain natural cause-and-effect relationships using when...because... patterns",
    vocabulary_domain: ["exercise", "heart", "oxygen", "body"],
    input_anchor: "activity infographic",
    output_anchor: "cause-effect explanation",
    prerequisite_patterns: ["PAT-8-08"],
    reusable_in: ["PAT-8-12", "PAT-9-13"],
    complexity_level: "Expand",
    notes: "TP kesembilan Kelas 8 dan GENRE OPENER EXPLANATION Kelas 8. target_pattern PAT-8-09 = 'When ... , ... happens because ...' (pola kausal kondisional umum). TOPIK SAMA dengan TP-32 (PAT-8-08) -- transisi genre Report->Explanation. Reaktivasi PAT-8-08 (WAJIB, VR-1): FAKTA SPESIFIK TP-32 ('During exercise, the heart beats faster. This happens because the muscles need more oxygen.') DIGENERALISASI jadi POLA KAUSAL KONDISIONAL ('When people exercise, their heart rate increases because their muscles need more oxygen.') -- progresi FAKTA TUNGGAL (Report) -> POLA UMUM/PRINSIP (Explanation); model_1 = recap fakta TP-32, model_2-4 = generalisasi 'When...,...because...'. forbidden_overlap (giving instructions, reporting characteristics, expressing opinions): 'reporting characteristics' adalah BOUNDARY terhadap genre Report (TP-29-32) yang baru selesai -- PAT-8-09 BUKAN lagi 'It has.../Most...', melainkan POLA KAUSAL 'When X, ... because Y'; BUKAN 'First, do X' (instruksi), BUKAN 'I think ...'. Perbedaan genre (notes): Report = FAKTA STATIS tentang kategori/benda; Explanation = POLA DINAMIS/MEKANISME (bagaimana & mengapa sesuatu TERJADI). vocabulary_domain (exercise, heart, oxygen, body) muncul di bahasa target. Ekstensi opsional pola kausal dengan dua kondisi ('When people exercise and the weather is hot, ... because ...') -- menjaga head kausal kondisional, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "When",
      "because",
      "heart rate",
      "exercise",
      "oxygen",
      "body",
      "increases",
      "rest"
    ],

    model_sentences: [
      { id: "model_1", text: "During exercise, the heart beats faster. This happens because the muscles need more oxygen." },
      { id: "model_2", text: "When people exercise, their heart rate increases because their muscles need more oxygen." },
      { id: "model_3", text: "When the body works hard, it breathes faster because it needs more air." },
      { id: "model_4", text: "When people rest, their heart rate goes down because the body needs less oxygen." }
    ],

    visual_cues: [
      { id: "visual_1", description: "An activity infographic showing heart rate rising during exercise and falling during rest, with arrows for cause and effect.", asset_id: null },
      { id: "visual_2", description: "Cause-effect cards: 'When [condition], [result] happens because [reason]'.", asset_id: null },
      { id: "visual_3", description: "Icons: a running person, a beating heart, lungs taking in oxygen, a resting person.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher marks a condition with one hand ('When ...'), then the result with the other, to show the link." },
      { id: "gesture_2", description: "Teacher points back to the reason while saying 'because ...'." },
      { id: "gesture_3", description: "Teacher traces the infographic arrow from condition to result to reason." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher generalize a specific fact into a cause-and-effect pattern with 'When ... , ... happens because ...'.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-08"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the cause-effect sentences ('When ... , ... because ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Explain a cause-and-effect pattern by replacing the condition, result, and reason.",
      prompt: "Use the pattern 'When [condition], [result] because [reason].' Explain why the body changes during exercise or rest (exercise, heart rate, oxygen, body). Make it a general pattern (how it usually works) -- not an instruction ('First, ...'), not just a characteristic ('It has ...'), and not 'I think ...'.",
      change_target: ["condition (When ...)", "result", "reason (because ...)"],
      differentiation: {
        easy: { task: "Complete one cause-effect sentence: 'When ___, ___ because ___.'" },
        standard: { task: "Write two cause-effect patterns about exercise and the body ('When ... , ... because ...')." },
        challenge: { task: "Recap the specific fact ('During exercise, the heart beats faster.'), then generalize it into a 'When ... , ... because ...' pattern." }
      },
      support: { pattern_support: ["PAT-8-08"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Explain cause-and-effect patterns to a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns explaining a pattern ('When ... , ... because ...') using the infographic. Your partner checks there is a condition, a result, and a reason. Then swap.",
      differentiation: {
        easy: { task: "Explain one 'When ... , ... because ...' pattern (you may read); your partner finds the reason. Then swap." },
        standard: { task: "Explain two patterns without reading; your partner checks each has a condition, result, and reason. Then swap." },
        challenge: { task: "Recap the fact, then generalize it into a pattern; your partner explains a different pattern. Then swap." }
      },
      support: { pattern_support: ["PAT-8-08"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present a cause-effect explanation to a new group (cause-effect explanation).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting a cause-effect pattern ('When ... , ... because ...').",
      differentiation: {
        easy: { task: "Present one 'When ... , ... because ...' pattern. You may read it." },
        standard: { task: "Present two cause-effect patterns without reading." },
        challenge: { task: "Present your patterns and answer one 'why does this happen?' question from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students explain a general pattern with 'When ... , ... because ...' (condition + result + reason), in present tense",
        "students explain HOW/WHY something happens (a dynamic pattern), not just report a static characteristic ('It has ... / Most ...')",
        "students still give instructions ('First, do ...'), only report characteristics, or give an opinion ('I think ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a second condition to the pattern.",
        needs_model: "Repeat the MODEL step, emphasizing 'When [condition], [result] because [reason]' as a general pattern, not a characteristic.",
        needs_repeat: "Do one more round of REPEAT (choral) on the cause-effect sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "reports a static characteristic or gives an instruction instead of a cause-effect pattern",
        "relies only on the written sentences and cannot explain without reading",
        "explains 'When ... , ... because ...' patterns accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling 'When [condition], [result] because [reason]' as a general pattern",
        "model one more cause-effect pattern from nature (e.g. ice melting) to show the same pattern still works",
        "for a student who is ready, model ONE pattern with two conditions first -- 'When people exercise and the weather is hot, they sweat more because the body needs to cool down.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the cause-effect head, not an instruction or a characteristic"
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
