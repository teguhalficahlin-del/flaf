export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-13.js",
    pattern_id: "PAT-8-13",
    title: "Healthy School Canteen: Stating a Position",
    short_title: "Healthy Canteen",
    grade: 8,
    genre: "Exposition",
    cluster: "A",
    topic: "Healthy School Canteen",
    context: "Students express a position about improving the school canteen and support it with a simple example.",
    communicative_goal: "state a position with a reason and one supporting example",
    vocabulary_domain: ["canteen", "healthy food", "students", "choices"],
    input_anchor: "photo comparison",
    output_anchor: "opinion card",
    prerequisite_patterns: ["PAT-8-04", "PAT-8-12"],
    reusable_in: ["PAT-9-01", "PAT-9-04"],
    complexity_level: "Expand",
    notes: "TP ketiga belas Kelas 8 dan GENRE OPENER EXPOSITION Kelas 8 (cluster A -- Stating a Position). KONVERGENSI BESAR (dual prereq lintas-genre + topik berlanjut). target_pattern PAT-8-13 = 'I believe ... because ... For example, ...'. 'For example,' = ELEMEN BARU UTAMA (bukti/ilustrasi konkret untuk klaim) -- TIDAK ada di PAT-8-04 maupun PAT-8-12. forbidden_overlap (interpersonal opinion exchange, factual report, process explanation) = BOUNDARY terhadap KETIGA GENRE sebelumnya SEKALIGUS: BUKAN 'What do you think?' (Interpersonal PAT-8-01), BUKAN 'Most.../It has...' (Report), BUKAN 'This process.../First,...' (Explanation). Reaktivasi PAT-8-04 (WAJIB, VR-1; topik SAMA dengan TP-28 'Healthy School Canteen'): konsensus KELOMPOK TP-28 ('I agree that the canteen should sell more fruit because it is healthy.') DIANGKAT jadi POSISI PERSONAL BERBUKTI ('I believe the canteen should sell more healthy food because it helps students stay healthy. For example, ...'); model_1 = recap dekat-literal TP-28. Reaktivasi PAT-8-12 (WAJIB, VR-1): penalaran sistem/proses ('This process...because...As a result,...') mewarnai DASAR LOGIS klausa 'because' (opini berbasis sistem, bukan sekadar preferensi). STRATEGI: model_1 = recap PAT-8-04; model_3 = dukungan bergaya PAT-8-12; model_2/4 = target PAT-8-13 dengan 'For example,' sebagai elemen baru. vocabulary_domain (canteen, healthy food, students, choices) muncul di bahasa target. Ekstensi opsional menambah contoh kedua ('Another example is ...') -- menjaga head klaim, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "I believe",
      "because",
      "For example,",
      "canteen",
      "healthy food",
      "students",
      "choices",
      "fruit"
    ],

    model_sentences: [
      { id: "model_1", text: "I agree that the canteen should sell more fruit because it is healthy." },
      { id: "model_2", text: "I believe the canteen should sell more healthy food because it helps students stay healthy. For example, fresh fruit gives them energy for afternoon classes." },
      { id: "model_3", text: "Selling fruit also reduces waste because fruit needs less plastic. As a result, the school produces less trash." },
      { id: "model_4", text: "I believe students should have more healthy choices because good food improves learning. For example, a salad bar offers many options." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A photo comparison of two canteen options: sugary snacks versus fresh fruit and healthy meals.", asset_id: null },
      { id: "visual_2", description: "An opinion card: 'I believe ___ because ___. For example, ___.'", asset_id: null },
      { id: "visual_3", description: "Icons: a fruit basket, healthy meal choices, students with energy in class.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher places a hand firmly on the chest while saying 'I believe ...' to show a position." },
      { id: "gesture_2", description: "Teacher opens a hand for the reason while saying 'because ...'." },
      { id: "gesture_3", description: "Teacher holds up one finger to introduce a concrete case while saying 'For example, ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher turn a group consensus into a personal position supported by a reason and a concrete example: 'I believe ... because ... For example, ...'.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-04", "PAT-8-12"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the position sentences ('I believe ... because ... For example, ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "State your own position about the canteen with a reason and one example.",
      prompt: "Use the pattern 'I believe [position] because [reason]. For example, [concrete case].' Make it about the school canteen (canteen, healthy food, students, choices). State a position with one reason and one example -- not 'What do you think?' (exchange), not 'Most ...' (report), not 'First, ...' (process).",
      change_target: ["position (I believe ...)", "reason (because ...)", "example (For example, ...)"],
      differentiation: {
        easy: { task: "Use the photo comparison and complete: 'I believe ___ because ___. For example, ___.'" },
        standard: { task: "Write your own position with a reason and one example ('I believe ... because ... For example, ...')." },
        challenge: { task: "Start by recalling the group's idea ('I agree that the canteen should ...'), then state your own position with a reason and a 'For example, ...'." }
      },
      support: { pattern_support: ["PAT-8-04"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Compare opinion cards about the canteen with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns presenting your position ('I believe ... because ... For example, ...'). Your partner checks the card has a position, a reason, and an example. Then swap.",
      differentiation: {
        easy: { task: "Present your position with a reason (you may read); your partner adds 'For example, ...' is present. Then swap." },
        standard: { task: "Present your full position with an example without reading; your partner names the example. Then swap." },
        challenge: { task: "Recall the group's idea, then state your position with a reason and example; your partner does the same. Then swap." }
      },
      support: { pattern_support: ["PAT-8-04", "PAT-8-12"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your opinion card to a new group (opinion card).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting your opinion card ('I believe ... because ... For example, ...').",
      differentiation: {
        easy: { task: "Present your position and reason to the new group. You may read." },
        standard: { task: "Present your full position with an example without reading." },
        challenge: { task: "Present your position, then answer one question about your reason or example from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students state a position with a reason and one example: 'I believe ... because ... For example, ...'",
        "students include a concrete example ('For example, ...') to support the claim",
        "students still drift into an exchange ('What do you think?'), a report ('Most ...'), or a process ('First, ...') instead of stating and supporting a position"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a second example.",
        needs_model: "Repeat the MODEL step, emphasizing 'I believe ... because ...' followed by a concrete 'For example, ...'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the position sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "states a position without an example, or drifts into exchange/report/process",
        "relies only on the written card and cannot present the position without reading",
        "states a position with a reason and a concrete example accurately and confidently"
      ],
      action: [
        "recast the position slowly, modeling 'I believe ... because ...' with a concrete 'For example, ...'",
        "model one more position on a different school topic to show the same pattern still works",
        "for a student who is ready, model ONE position with a second example first -- 'I believe the canteen should sell more healthy food because it helps students stay healthy. For example, fresh fruit gives energy. Another example is that yogurt helps digestion.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the position head, not an exchange, report, or process"
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
