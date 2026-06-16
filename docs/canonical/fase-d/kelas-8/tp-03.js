export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-03.js",
    pattern_id: "PAT-8-03",
    title: "Class Charity Project: Negotiating Plans",
    short_title: "Charity Project",
    grade: 8,
    genre: "Interpersonal",
    cluster: "B",
    topic: "Class Charity Project",
    context: "Students discuss different ideas for a class charity activity and negotiate a shared plan.",
    context_id: "Siswa mendiskusikan berbagai ide untuk kegiatan bakti sosial kelas dan menegosiasikan rencana bersama.",
    communicative_goal: "propose, modify, and negotiate ideas collaboratively",
    communicative_goal_id: "mengusulkan, mengubah, dan menegosiasikan ide secara kolaboratif",
    vocabulary_domain: ["charity", "fundraising", "community", "planning"],
    input_anchor: "planning board",
    output_anchor: "group negotiation",
    prerequisite_patterns: ["PAT-8-02"],
    reusable_in: ["PAT-8-16", "PAT-9-15"],
    complexity_level: "Expand",
    notes: "TP ketiga Kelas 8, Interpersonal, cluster BARU (B -- Negotiating Plans), Expand. target_pattern PAT-8-03 = 'How about ...? / We could ... / That's a good idea, but ...' (tiga sub-bentuk: saran-pertanyaan, saran-pernyataan, respons mengakui + caveat). Reaktivasi PAT-8-02 (WAJIB, VR-1): 'I prefer.../I'd rather...than...' di-reframe dari preferensi pribadi menjadi USULAN ke kelompok ('I'd rather do a book sale than a car wash. How about a book sale for charity?'). BONUS reaktivasi (non-wajib VR-1): 'That's a good idea, but ...' sejajar dengan 'That's true.' (PAT-7-04, bahasa kelas reusable, precedent TP-16/24/25) -- kata sifat berbeda ('good idea' vs 'true'). forbidden_overlap (giving procedures, direct commands, argumentative persuasion): saran WAJIB tetap NEGOSIASI KOLABORATIF (terbuka dimodifikasi/ditolak dengan caveat) -- BUKAN instruksi tahap-demi-tahap (PAT-7-09/PAT-8-10 'First,/Then,'), BUKAN imperatif langsung (PAT-7-11/17 'Don't.../Please...'), BUKAN persuasi formal (wilayah PAT-8-13). vocabulary_domain (charity, fundraising, community, planning) muncul di bahasa target (planning via 'plan'). Ekstensi opsional merantai respons menjadi usulan-tandingan ('That's a good idea, but how about ...?') -- menjaga head negosiasi, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. I need your full attention today." },
      { type: "AKSI", text: "Tanya kelas apakah sudah siap berdiskusi." },
      // HOOK
      { type: "UCAP", text: "Imagine your class wants to do something good for the community. What idea comes to mind?" },
      { type: "AKSI", text: "Tampilkan papan rencana dengan ide bakti sosial di kertas tempel: jualan buku, jajanan, poster." },
      { type: "UCAP", text: "Look at this planning board. Which of these charity ideas do you think is best?" },
    ],

    active_vocabulary: [
      "How about",
      "We could",
      "That's a good idea, but",
      "charity",
      "fundraising",
      "community",
      "plan"
    ],

    model_sentences: [
      { id: "model_1", text: "I'd rather do a book sale than a car wash. How about a book sale for charity?" },
      { id: "model_2", text: "We could sell snacks for fundraising." },
      { id: "model_3", text: "That's a good idea, but we need more helpers." },
      { id: "model_4", text: "How about asking the community to join? We could plan it together." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A planning board with class charity ideas (book sale, snack sale, posters) on sticky notes.", description_id: "Papan rencana dengan ide bakti sosial kelas (jualan buku, jualan jajanan, poster) di kertas tempel.", asset_id: null },
      { id: "visual_2", description: "Negotiation cards: 'How about ...?', 'We could ...', 'That's a good idea, but ...'.", description_id: "Kartu negosiasi: 'How about ...?', 'We could ...', 'That's a good idea, but ...'.", asset_id: null },
      { id: "visual_3", description: "Charity and community icons: a fundraising jar, helpers, and posters.", description_id: "Ikon bakti sosial dan komunitas: toples penggalangan dana, relawan, dan poster.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher opens a hand in an offering gesture while saying 'How about ...?' / 'We could ...' to suggest an idea.", description_id: "Guru membuka tangan dalam gestur menawarkan sambil mengucapkan 'How about ...?' / 'We could ...' untuk mengusulkan ide." },
      { id: "gesture_2", description: "Teacher nods (good idea), then raises one finger (but) while saying 'That's a good idea, but ...'.", description_id: "Guru mengangguk (ide bagus), lalu mengangkat satu jari (tetapi) sambil mengucapkan 'That's a good idea, but ...'." },
      { id: "gesture_3", description: "Teacher gestures to the whole group and the board to show collaborative planning.", description_id: "Guru memberi gestur ke seluruh kelompok dan papan untuk menunjukkan perencanaan kolaboratif." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher propose ideas for a charity plan with 'How about ...?' and 'We could ...', and respond to an idea with 'That's a good idea, but ...', turning a preference into a proposal.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-02"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the negotiation sentences ('How about ...?' / 'We could ...' / 'That's a good idea, but ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Make and respond to your own charity-plan suggestions.",
      prompt: "Use the patterns 'How about [idea]?', 'We could [idea].', and 'That's a good idea, but [caveat].' Suggest ideas for the class charity project (charity, fundraising, community, plan). Keep it open and collaborative -- a suggestion, not a command or a step-by-step procedure.",
      change_target: ["suggestion (How about ...? / We could ...)", "response (That's a good idea, but ...)"],
      differentiation: {
        easy: { task: "Choose a charity idea and complete one suggestion: 'How about ___?' or 'We could ___.'" },
        standard: { task: "Write two suggestions (one 'How about ...?', one 'We could ...') and one response 'That's a good idea, but ...'." },
        challenge: { task: "Turn a preference into a proposal ('I'd rather do X than Y. How about X?'), then respond to a classmate's idea with 'That's a good idea, but ...'." }
      },
      support: { pattern_support: ["PAT-8-02"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Negotiate a charity plan together in a small group (group negotiation).",
      interaction_mode: "small_group",
      task: "In a group of 3-4, take turns suggesting charity ideas ('How about ...?' / 'We could ...'). Respond to each idea with 'That's a good idea, but ...' and try to improve the plan together.",
      differentiation: {
        easy: { task: "Make one suggestion to the group ('How about ...?' / 'We could ...'); a classmate responds with 'That's a good idea, but ...'." },
        standard: { task: "Suggest and respond without reading, so the group improves the plan with at least two ideas." },
        challenge: { task: "Turn your preference into a proposal, respond to others with 'That's a good idea, but ...', and help shape one shared plan." }
      },
      support: { pattern_support: ["PAT-8-02"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Negotiate a charity plan with a new group (group negotiation).",
      share_mode: "short_dialogue",
      task: "Form a new group of 4 with classmates from other groups. Take turns suggesting and responding ('How about ...?' / 'We could ...' / 'That's a good idea, but ...') to negotiate a charity plan.",
      differentiation: {
        easy: { task: "Make one suggestion to the new group; a classmate responds with 'That's a good idea, but ...'." },
        standard: { task: "Suggest and respond without reading to shape a plan with the new group." },
        challenge: { task: "Lead a short negotiation: make a proposal, respond to two ideas with caveats, and suggest one improved plan." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students make suggestions with 'How about ...?' and 'We could ...' and respond with 'That's a good idea, but ...'",
        "students keep suggestions open and collaborative (able to be changed), not commands or step-by-step procedures",
        "students still give direct commands ('Do this'), use 'First,/Then,' procedures, or try to persuade formally"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to answer a caveat with a counter-suggestion.",
        needs_model: "Repeat the MODEL step, emphasizing 'How about ...?' / 'We could ...' as open suggestions and 'That's a good idea, but ...' as a response.",
        needs_repeat: "Do one more round of REPEAT (choral) on the negotiation sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "turns a suggestion into a command or a step-by-step procedure, or only states a preference without proposing",
        "relies only on the written sentences and cannot negotiate without reading",
        "suggests and responds collaboratively with 'How about ...? / We could ... / That's a good idea, but ...' accurately and confidently"
      ],
      action: [
        "recast the suggestion slowly, modeling 'How about ...?' / 'We could ...' as open ideas the group can change",
        "model one more suggestion for a different plan to show the same pattern still works",
        "for a student who is ready, model ONE response that adds a counter-suggestion first -- 'That's a good idea, but how about a snack sale instead?' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the collaborative negotiation head, not a command or a procedure"
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
