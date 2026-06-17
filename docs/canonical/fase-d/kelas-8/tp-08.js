export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-08.js",
    pattern_id: "PAT-8-08",
    title: "Exercise and Heart Rate: Connecting Facts",
    short_title: "Heart Rate",
    grade: 8,
    genre: "Report",
    cluster: "B",
    topic: "Exercise and Heart Rate",
    context: "Students observe simple data and pictures showing how the body responds during physical activity and discuss factual relationships.",
    context_id: "Siswa mengamati data dan gambar sederhana yang menunjukkan respons tubuh selama aktivitas fisik serta mendiskusikan hubungan faktualnya.",
    communicative_goal: "connect observable facts with simple causes and effects",
    communicative_goal_id: "menghubungkan fakta yang teramati dengan sebab dan akibat sederhana",
    vocabulary_domain: ["exercise", "heart", "body", "energy"],
    input_anchor: "data chart",
    output_anchor: "fact explanation card",
    prerequisite_patterns: ["PAT-8-07"],
    reusable_in: ["PAT-8-09", "PAT-8-11", "PAT-9-13"],
    complexity_level: "Expand",
    notes: "TP kedelapan Kelas 8, GENRE CLOSER REPORT Kelas 8. target_pattern PAT-8-08 = 'This happens because ... / This helps ... to ...' (menghubungkan fakta ke alasan/efek; kali pertama 'because' muncul di Report Kelas 8). Reaktivasi PAT-8-07 (WAJIB, VR-1): '[Benda] has [fitur] which [fungsi]' -> 'This happens because.../This helps...to...'. forbidden_overlap (process with ordered stages, argumentation, personal reflection): SATU hubungan fakta->alasan/efek -- BUKAN 'First,...Next,...' (itu PAT-8-10, JANGAN dipakai dulu), BUKAN 'I believe.../Therefore...' (PAT-8-13+), BUKAN 'I learned...' (PAT-7-16/24). PENTING -- TOPIK 'Exercise and Heart Rate' SAMA dengan TP-33 (PAT-8-09): TP ini membangun FAKTA SPESIFIK ('During exercise, the heart beats faster. This happens because the muscles need more oxygen.') yang akan DIGENERALISASI jadi pola kausal kondisional di TP-33 ('When people exercise, their heart rate increases because ...'). vocabulary_domain (exercise, heart, body, energy) muncul di bahasa target. Ekstensi opsional menautkan alasan dan efek ('This happens because ... and this helps ... to ...') -- menjaga head hubungan-fakta, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Alright, class. Let's get into science mode today." },
      { type: "AKSI", text: "Kondisikan kelas agar siap mengamati data." },
      // HOOK
      { type: "UCAP", text: "What happens to your heart when you run or do exercise? Can you feel it?" },
      { type: "AKSI", text: "Tampilkan grafik data sederhana: detak jantung sebelum dan selama olahraga (istirahat vs aktif)." },
      { type: "UCAP", text: "Look at this chart. What do you notice about heart rate during exercise versus at rest?" },
    ],

    active_vocabulary: [
      "This happens because",
      "This helps",
      "to",
      "exercise",
      "heart",
      "body",
      "energy",
      "oxygen"
    ],

    model_sentences: [
      { id: "model_1", text: "The heart has strong muscles which pump blood." },
      { id: "model_2", text: "During exercise, the heart beats faster. This happens because the muscles need more oxygen." },
      { id: "model_3", text: "Exercise makes the body warm. This helps the body to use energy." },
      { id: "model_4", text: "The lungs breathe quickly. This happens because the body needs more air." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A simple data chart showing heart rate before and during exercise (resting vs active).", description_id: "Grafik data sederhana yang menunjukkan detak jantung sebelum dan selama olahraga (istirahat vs aktif).", asset_id: null },
      { id: "visual_2", description: "Fact-to-reason cards: a fact picture linked by an arrow to 'This happens because ...' / 'This helps ... to ...'.", description_id: "Kartu fakta-ke-alasan: gambar fakta dihubungkan dengan tanda panah ke 'This happens because ...' / 'This helps ... to ...'.", asset_id: null },
      { id: "visual_3", description: "Body icons: a heart beating, lungs breathing, muscles using energy during exercise.", description_id: "Ikon tubuh: jantung berdetak, paru-paru bernapas, otot menggunakan energi selama olahraga.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher states a fact, then points back to its cause while saying 'This happens because ...'.", description_id: "Guru menyatakan suatu fakta, lalu menunjuk kembali ke sebabnya sambil mengucapkan 'This happens because ...'." },
      { id: "gesture_2", description: "Teacher shows one thing leading to a helpful result while saying 'This helps ... to ...'.", description_id: "Guru menunjukkan satu hal yang mengarah ke hasil yang bermanfaat sambil mengucapkan 'This helps ... to ...'." },
      { id: "gesture_3", description: "Teacher taps the data chart to anchor each fact before giving the reason or effect.", description_id: "Guru menepuk grafik data untuk menjangkarkan setiap fakta sebelum memberikan alasan atau dampaknya." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher connect an observed fact to a simple reason or effect with 'This happens because ...' and 'This helps ... to ...', after stating a feature.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-07"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the fact-to-reason sentences ('This happens because ...' / 'This helps ... to ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Connect a fact about the body during exercise to a reason or effect.",
      prompt: "Use the patterns 'This happens because [reason].' and 'This helps [something] to [result].' Connect a fact from the chart (exercise, heart, body, energy). Use one fact and one reason or effect -- not a step-by-step process ('First, ...'), not 'I believe ...', not 'I learned ...'.",
      change_target: ["fact + reason (This happens because ...)", "fact + effect (This helps ... to ...)"],
      differentiation: {
        easy: { task: "State a fact and complete: 'This happens because ___.' or 'This helps ___ to ___.'" },
        standard: { task: "Write two fact links: one with 'This happens because ...' and one with 'This helps ... to ...'." },
        challenge: { task: "Start with a feature ('The heart has ... which ...'), then connect a fact to a reason and an effect." }
      },
      support: { pattern_support: ["PAT-8-07"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Connect facts to reasons and effects with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: state a fact from the chart and connect it ('This happens because ...' / 'This helps ... to ...'). Your partner checks the link makes sense. Then swap.",
      differentiation: {
        easy: { task: "State one fact and connect it (you may read); your partner checks the link. Then swap." },
        standard: { task: "Connect two facts without reading, one with 'because' and one with 'helps ... to'. Then swap." },
        challenge: { task: "Give a feature, then connect a fact to a reason and an effect; your partner adds one more linked fact. Then swap." }
      },
      support: { pattern_support: ["PAT-8-07"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present a fact explanation card to a new group (fact explanation card).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting a fact explanation card ('This happens because ...' / 'This helps ... to ...').",
      differentiation: {
        easy: { task: "Present one fact link to the new group. You may read it." },
        standard: { task: "Present two fact links (because / helps ... to) without reading." },
        challenge: { task: "Present a feature and two linked facts, then answer one question about a fact." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students connect a fact to a reason or effect with 'This happens because ...' and 'This helps ... to ...'",
        "students keep it one fact + one reason/effect, not an ordered process or an argument",
        "students still use 'First,/Next,' stages, 'I believe ... / Therefore ...', or 'I learned ...' instead of a single fact link"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to link a reason and an effect in one explanation.",
        needs_model: "Repeat the MODEL step, emphasizing one fact connected to one reason ('because') or effect ('helps ... to').",
        needs_repeat: "Do one more round of REPEAT (choral) on the fact-to-reason sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "lists an ordered process or gives an argument/reflection instead of one fact link",
        "relies only on the written card and cannot connect a fact without reading",
        "connects facts to reasons and effects with 'This happens because ...' / 'This helps ... to ...' accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling one fact connected to one reason or effect",
        "model one more fact link on a different topic to show the same pattern still works",
        "for a student who is ready, model ONE explanation that links a reason and an effect first -- 'The heart beats faster. This happens because the muscles need oxygen, and this helps the body to keep moving.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the single fact-link head, with no ordered stages or argument"
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
