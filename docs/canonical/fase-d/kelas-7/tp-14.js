export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-14.js",
    pattern_id: "PAT-7-14",
    title: "Sports Day: Connecting Past Events",
    short_title: "Sports Day",
    grade: 7,
    genre: "Recount",
    cluster: "A",
    topic: "School Sports Day",
    context: "Students retell a sequence of real activities during a school sports event.",
    communicative_goal: "connect past actions into a simple chronological recount",
    vocabulary_domain: ["sports", "games", "friends", "competition"],
    input_anchor: "event photo cards",
    output_anchor: "timeline retelling",
    prerequisite_patterns: ["PAT-7-13"],
    reusable_in: ["PAT-8-17", "PAT-8-18"],
    complexity_level: "Acquire",
    notes: "TP keempat belas Fase D, Recount. target_pattern PAT-7-14 = 'Subject + past action + and / then + past action'. DISTINGSI PENTING: 'and'/'then' di sini adalah KONEKTOR NARATIF MID-SENTENCE yang menghubungkan dua verba lampau di bawah SATU subjek (mis. 'We ran and jumped.', 'I cheered and then clapped.') -- BUKAN penanda sentence-initial 'First,/Then,/Finally,' bergaya prosedural (PAT-7-09, procedure sequencing, forbidden di sini). Distingsi ini ditegaskan di CHECK. PAT-7-13 ('Yesterday,/Last...,... + past event') sebagai support: kalimat pembuka pemberi waktu ('Last Friday, we had Sports Day. We ran and jumped.'). forbidden_overlap lain: TIDAK ada 'because' (cause-effect -- PAT-7-15 bukan target di sini), TIDAK ada elemen konflik naratif ('but then something went wrong'). vocabulary_domain (sports, games, friends, competition) muncul di bahasa target. Ekstensi opsional menggabungkan TIGA aksi lampau dalam satu kalimat ('We ran, jumped, and cheered.') -- menjaga head konektor naratif -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "and",
      "then",
      "ran",
      "jumped",
      "played",
      "won",
      "cheered",
      "sports",
      "games",
      "friends",
      "competition"
    ],

    model_sentences: [
      { id: "model_1", text: "Last Friday, we had Sports Day." },
      { id: "model_2", text: "We ran and jumped in the games." },
      { id: "model_3", text: "My friends played football and won the competition." },
      { id: "model_4", text: "I cheered and then clapped for my team." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Event photo cards from a school sports day: a running race, a jumping event, a football game, and a cheering crowd.", asset_id: null },
      { id: "visual_2", description: "Connector cards joining two action icons: 'and' (run + jump) and 'and then' (cheer + clap).", asset_id: null },
      { id: "visual_3", description: "Past-action icons: ran, jumped, played, won, cheered.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher links two hands together while saying 'and / and then' to show two actions joined in one sentence." },
      { id: "gesture_2", description: "Teacher mimes the two past actions one after the other (running, then jumping)." },
      { id: "gesture_3", description: "Teacher points back over one shoulder while giving the past time-expression opener." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher connect two past actions under one subject using mid-sentence 'and' / 'and then', after a past time-expression opener.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-13"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the connected-action sentences ('... and ...', '... and then ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Connect two of your own past actions with 'and' or 'and then'.",
      prompt: "Use the pattern 'Subject + past action + and/then + past action', e.g. 'We ran and jumped.' Replace the actions with what you really did at a sports event (ran, jumped, played, won, cheered). Join the two actions inside one sentence -- do not start with 'First,/Then,/Finally,'.",
      change_target: ["first past action", "second past action (and / and then)"],
      differentiation: {
        easy: { task: "Choose two action cards and join them: 'We ___ and ___.' (past verbs)." },
        standard: { task: "Write two sentences, each joining two past actions with 'and' or 'and then' under one subject." },
        challenge: { task: "Start with a past time-expression opener ('Last Friday, we had Sports Day.'), then write two connected-action sentences." }
      },
      support: { pattern_support: ["PAT-7-13"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Retell the order of events at a sports day to a partner using connected past actions.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns retelling what happened at a sports event, joining two actions in each sentence ('We ran and jumped.'). Listen and put your partner's events in order.",
      differentiation: {
        easy: { task: "Tell your partner one connected-action sentence from CHANGE (you may read). Listen to your partner's sentence." },
        standard: { task: "Retell two or three connected-action sentences without reading. Your partner does the same." },
        challenge: { task: "Open with a past time expression, then retell several connected-action sentences in order. Your partner does the same." }
      },
      support: { pattern_support: ["PAT-7-13"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Retell your sports-day timeline to a new group (timeline retelling).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns retelling your sports-day events in order, joining two actions in each sentence ('... and ...', '... and then ...').",
      differentiation: {
        easy: { task: "Retell two connected-action sentences to the new group. You may read them." },
        standard: { task: "Retell your events in order without reading." },
        challenge: { task: "Open with a past time expression and retell your full timeline, then listen and order one classmate's events." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students join two past actions in one sentence with mid-sentence 'and' or 'and then'",
        "students keep it as a narrative recount, not a sentence-initial 'First,/Then,/Finally,' procedure",
        "students still add 'because' (cause-effect) or a conflict twist ('but then something went wrong')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to join three past actions in one sentence.",
        needs_model: "Repeat the MODEL step, emphasizing 'and' / 'and then' joining two past actions inside one sentence.",
        needs_repeat: "Do one more round of REPEAT (choral) on the connected-action sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "joins actions with a procedural 'First,/Then,/Finally,' style instead of mid-sentence 'and/then', or adds 'because'",
        "relies only on the written sentences and cannot retell without reading",
        "joins two past actions with 'and / and then' accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling two past actions joined with 'and' or 'and then' under one subject",
        "model one more connected-action sentence about a different event to show the same pattern still works",
        "for a student who is ready, model ONE sentence joining three past actions first -- 'We ran, jumped, and cheered.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the narrative connector head, with no 'because' or conflict twist"
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
