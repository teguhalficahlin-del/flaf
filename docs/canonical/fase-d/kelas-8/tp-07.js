export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-07.js",
    pattern_id: "PAT-8-07",
    title: "Sports Equipment: Explaining Features and Functions",
    short_title: "Sports Equipment",
    grade: 8,
    genre: "Report",
    cluster: "B",
    topic: "Sports Equipment",
    context: "Students examine everyday sports equipment and explain how different features support their functions.",
    communicative_goal: "connect physical features with practical functions",
    vocabulary_domain: ["ball", "helmet", "racket", "protection"],
    input_anchor: "real objects",
    output_anchor: "feature-function presentation",
    prerequisite_patterns: ["PAT-8-06"],
    reusable_in: ["PAT-8-09", "PAT-9-10"],
    complexity_level: "Expand",
    notes: "TP ketujuh Kelas 8, Report, cluster BARU (B -- Explaining Features and Functions). target_pattern PAT-8-07 = 'It has ... which ... / It can ... to ...' (klausa relatif 'which' + infinitive-of-purpose 'to'). Reaktivasi PAT-8-06 (WAJIB, VR-1): 'Most [equipment] have [fitur umum].' (generalisasi) -> 'It has [fitur] which [fungsi]. It can [aksi] to [tujuan].' (menghubungkan fitur SPESIFIK ke fungsinya). forbidden_overlap (procedural instructions, causal explanation, descriptive opinion): BUKAN 'First, put on the helmet...' (PAT-7-09/PAT-8-10), BUKAN 'This happens because...' (itu PAT-8-08, TP BERIKUTNYA -- JANGAN dipakai dulu di sini), BUKAN 'I like this racket because...'. vocabulary_domain (ball, helmet, racket, protection) muncul di bahasa target (protection via 'protects'). Ekstensi opsional merantai dua fitur ('It has X which ..., and it has Y which ...') -- menjaga head fitur-fungsi, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "which",
      "can",
      "to",
      "protects",
      "ball",
      "helmet",
      "racket",
      "shell"
    ],

    model_sentences: [
      { id: "model_1", text: "Most helmets have a hard shell." },
      { id: "model_2", text: "A helmet has a hard shell which protects the head." },
      { id: "model_3", text: "A racket can hit the ball to score points." },
      { id: "model_4", text: "A ball has a smooth surface which helps it roll." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Real sports objects or photos: a ball, a helmet, a racket, with their key features visible.", asset_id: null },
      { id: "visual_2", description: "Feature-function cards: 'It has ___ which ___' and 'It can ___ to ___'.", asset_id: null },
      { id: "visual_3", description: "Icons showing functions: a shell protecting a head, a racket hitting a ball, a ball rolling.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to a feature on the object while saying 'It has ... which ...'." },
      { id: "gesture_2", description: "Teacher mimes the action (hitting, protecting) while saying 'It can ... to ...'." },
      { id: "gesture_3", description: "Teacher links a feature to its function by joining two hands while saying 'which' / 'to'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher connect a feature to its function with 'It has ... which ...' and 'It can ... to ...', after a general statement about the equipment.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-06"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the feature-function sentences ('It has ... which ...' / 'It can ... to ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Connect a feature of sports equipment to its function.",
      prompt: "Use the patterns 'It has [feature] which [function].' and 'It can [action] to [purpose].' Describe a ball, helmet, or racket. Connect the feature to what it does -- do not give instructions ('First, ...'), do not use 'because', and do not say 'I like ...'.",
      change_target: ["feature (It has ... which ...)", "function (It can ... to ...)"],
      differentiation: {
        easy: { task: "Choose an object and complete: 'It has ___ which ___.' or 'It can ___ to ___.'" },
        standard: { task: "Write two feature-function sentences about your object, one with 'which' and one with 'can ... to'." },
        challenge: { task: "Start with a general statement ('Most helmets have ...'), then connect a feature to its function with 'which' and 'can ... to'." }
      },
      support: { pattern_support: ["PAT-8-06"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Explain features and functions of equipment with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: hold up an object and explain one feature and its function ('It has ... which ...' / 'It can ... to ...'). Your partner points to the feature. Then swap.",
      differentiation: {
        easy: { task: "Explain one feature-function of your object (you may read); your partner points to the feature. Then swap." },
        standard: { task: "Explain two features and functions without reading; your partner checks each links a feature to a function. Then swap." },
        challenge: { task: "Give a general statement, then two feature-function sentences; your partner adds one more feature. Then swap." }
      },
      support: { pattern_support: ["PAT-8-06"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present features and functions of an object to a new group (feature-function presentation).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting one object's features and functions ('It has ... which ...' / 'It can ... to ...').",
      differentiation: {
        easy: { task: "Present one feature-function of your object. You may read it." },
        standard: { task: "Present two feature-function sentences without reading." },
        challenge: { task: "Present a general statement and two feature-function sentences, then answer one question about the object." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students connect a feature to a function with 'It has ... which ...' and 'It can ... to ...'",
        "students keep it a factual feature-function link, not an instruction, a 'because' explanation, or an opinion",
        "students still say 'First, do ...', add 'because ...', or say 'I like ...' instead of linking feature and function"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to chain two features in one explanation.",
        needs_model: "Repeat the MODEL step, emphasizing 'which' (relative clause) and 'can ... to' (purpose) to link feature and function.",
        needs_repeat: "Do one more round of REPEAT (choral) on the feature-function sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives an instruction or an opinion instead of linking a feature to a function",
        "relies only on the written sentences and cannot explain without reading",
        "connects features and functions with 'which' and 'can ... to' accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling 'It has [feature] which [function]' and 'It can [action] to [purpose]'",
        "model one more feature-function for a different object to show the same pattern still works",
        "for a student who is ready, model ONE explanation that chains two features first -- 'A helmet has a hard shell which protects the head, and it has soft padding which keeps it comfortable.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the feature-function head, with no instruction, 'because', or opinion"
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
