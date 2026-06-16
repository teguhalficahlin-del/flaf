export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-01.js",
    pattern_id: "PAT-8-01",
    title: "Phone-Free Break Time: Exchanging Views",
    short_title: "Phone-Free Break",
    grade: 8,
    genre: "Interpersonal",
    cluster: "A",
    topic: "Phone-Free Break Time",
    context: "Students discuss whether break time should be used without mobile phones and respond to different opinions.",
    context_id: "Siswa mendiskusikan apakah waktu istirahat sebaiknya digunakan tanpa ponsel dan menanggapi pendapat yang berbeda.",
    communicative_goal: "exchange and respond to opinions with reasons and contrasting ideas",
    communicative_goal_id: "bertukar dan menanggapi pendapat dengan alasan serta gagasan yang berlawanan",
    vocabulary_domain: ["phones", "break time", "friends", "communication"],
    input_anchor: "discussion cards",
    output_anchor: "paired opinion exchange",
    prerequisite_patterns: ["PAT-7-04", "PAT-7-24"],
    reusable_in: ["PAT-8-13", "PAT-9-01"],
    complexity_level: "Expand",
    notes: "TP PERTAMA Kelas 8 dan TP pertama tingkat EXPAND (transisi dari Acquire Kelas 7). target_pattern PAT-8-01 = 'I think ... because ... but ... / What do you think?' -- ekstensi LANGSUNG dari 'I think...because...' PAT-7-04 (bagian inti ini secara inheren mereaktivasi PAT-7-04 di kalimat target sendiri). DUA elemen BARU yang dibedakan eksplisit: (1) 'but [caveat]' = KUALIFIKASI/CAVEAT terhadap OPINI SENDIRI (opini seimbang/nuanced, mis. 'I think X is good because Y, but I prefer Z') -- BUKAN kontras dua-adjektiva PAT-7-06 ('big but light'), BUKAN konflik naratif PAT-7-22 ('but the forest became dark'); (2) 'What do you think?' = pertanyaan OPINI TERBUKA yang mengundang 'I think...' -- BUKAN pertanyaan Yes/No PAT-7-02 ('Do you/Can you...'); respons yang diharapkan adalah OPINI ('I think.../I agree.../I don't think so.'), bukan 'Yes/No'. Reaktivasi prerequisite: PAT-7-04 -- forms respons ('I agree.'/'I don't think so.'/'That's true.') dipakai sebagai lead-in respons sebelum opini sendiri (mis. 'I agree, but I think...because...'); PAT-7-24 -- sub-bentuk 'Everyone felt...because...' (past tense) dipakai sebagai HOOK pembuka topik tentang kejadian baru-baru ini di sekolah ('Yesterday, everyone felt surprised because the school announced a phone-free break time.'), support BUKAN target. forbidden_overlap (formal argumentation, analytical exposition, debate claims) KRUSIAL karena PAT-8-01 reusable_in PAT-8-13 (Exposition 'I believe...because...For example...', jauh lebih formal): PAT-8-01 WAJIB tetap register interpersonal/santai (obrolan antar teman), SATU alasan + SATU caveat -- TIDAK ada 'For example...', bukti terstruktur, atau struktur debat pro/kontra. Ekstensi opsional menambah satu alasan pendukung dengan 'and' di dalam 'I think...because... and ..., but...' -- menjaga head opini seimbang, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning, class. Please take your seats." },
      { type: "AKSI", text: "Pastikan semua siswa duduk dan perhatian ke depan." },
      // HOOK
      { type: "UCAP", text: "Quick show of hands — who uses their phone during school break time?" },
      { type: "AKSI", text: "Tampilkan kartu diskusi: 'No phones at break time' versus 'Phones allowed at break time'." },
      { type: "UCAP", text: "The school is thinking about a phone-free break. What do you think about that idea?" },
    ],

    active_vocabulary: [
      "I think",
      "because",
      "but",
      "What do you think?",
      "I agree",
      "phones",
      "break time",
      "friends",
      "communication"
    ],

    model_sentences: [
      { id: "model_1", text: "Yesterday, everyone felt surprised because the school announced a phone-free break time." },
      { id: "model_2", text: "I think a phone-free break is good because we can talk to our friends, but I miss my games. What do you think?" },
      { id: "model_3", text: "I think break time is better with phones because we can relax, but we talk less. What do you think?" },
      { id: "model_4", text: "I agree, but I think phones help communication because we can chat with friends. What do you think?" }
    ],

    visual_cues: [
      { id: "visual_1", description: "Discussion cards with two contrasting statements: 'No phones at break time' and 'Phones allowed at break time', to trigger opinions.", description_id: "Kartu diskusi dengan dua pernyataan yang berlawanan: 'No phones at break time' dan 'Phones allowed at break time', untuk memicu pendapat.", asset_id: null },
      { id: "visual_2", description: "An opinion-frame card: 'I think ___ because ___, but ___. What do you think?'", description_id: "Kartu kerangka pendapat: 'I think ___ because ___, but ___. What do you think?'", asset_id: null },
      { id: "visual_3", description: "Icons for the topic: a mobile phone, friends talking face to face, a break-time clock, and chat bubbles (communication).", description_id: "Ikon untuk topiknya: ponsel, teman-teman mengobrol langsung, jam waktu istirahat, dan balon chat (komunikasi).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher taps the temple for 'I think', opens a hand for 'because', then tips the hand to the other side for 'but' to show a balanced caveat.", description_id: "Guru menepuk pelipis untuk 'I think', membuka tangan untuk 'because', lalu memiringkan tangan ke sisi lain untuk 'but' untuk menunjukkan catatan penyeimbang." },
      { id: "gesture_2", description: "Teacher opens both hands toward a partner while asking 'What do you think?' to invite an opinion.", description_id: "Guru membuka kedua tangan ke arah teman sambil bertanya 'What do you think?' untuk mengundang pendapat." },
      { id: "gesture_3", description: "Teacher nods for 'I agree' and shakes the head for 'I don't think so' to show response forms.", description_id: "Guru mengangguk untuk 'I agree' dan menggeleng untuk 'I don't think so' untuk menunjukkan bentuk responsnya." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher give a balanced opinion ('I think ... because ... but ...') and invite another ('What do you think?'), opening from a recent-event hook and showing a short response form.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-04", "PAT-7-24"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the balanced-opinion sentences ('I think ... because ... but ... What do you think?') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Build your own balanced opinion with a reason and a caveat, and invite a reply.",
      prompt: "Use the pattern 'I think [opinion] because [one reason], but [one caveat]. What do you think?' Make it about phone-free break time (phones, break time, friends, communication). Keep it casual -- one reason and one caveat, not a formal argument and no 'For example'.",
      change_target: ["opinion (I think ...)", "reason (because ...)", "caveat (but ...)"],
      differentiation: {
        easy: { task: "Use a discussion card and complete: 'I think ___ because ___, but ___. What do you think?'" },
        standard: { task: "Write your own balanced opinion about phone-free break time ('I think ... because ... but ...') and end with 'What do you think?'" },
        challenge: { task: "Write your balanced opinion, and also write a reply you could give to a classmate ('I agree, but I think ... because ...' or 'I don't think so. I think ... because ...')." }
      },
      support: { pattern_support: ["PAT-7-04"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Exchange opinions about phone-free break time with a partner, responding before giving your own view.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: give your balanced opinion ('I think ... because ... but ...') and ask 'What do you think?' Your partner responds with an opinion form ('I agree, but I think ...' / 'I don't think so. I think ...'), then asks back. You may open with the hook: 'Everyone felt surprised because of the phone-free break time.'",
      differentiation: {
        easy: { task: "Give your opinion from CHANGE and ask 'What do you think?' Your partner answers with 'I agree.' or 'I don't think so.' and one reason." },
        standard: { task: "Exchange opinions without reading. Respond with 'I agree, but I think ...' or 'I don't think so. I think ...', then ask back." },
        challenge: { task: "Keep the exchange going for two rounds. Each time, add a caveat ('but ...') and invite your partner with 'What do you think?'" }
      },
      support: { pattern_support: ["PAT-7-04", "PAT-7-24"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Exchange opinions about the topic with a new group (paired opinion exchange).",
      share_mode: "short_dialogue",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns: give your balanced opinion ('I think ... because ... but ...') and ask 'What do you think?' The others respond with an opinion form before adding their own view.",
      differentiation: {
        easy: { task: "Give your opinion to the group and ask 'What do you think?' One classmate replies with an opinion form." },
        standard: { task: "Exchange opinions with the group without reading, responding with 'I agree, but ...' / 'I don't think so. I think ...'." },
        challenge: { task: "Lead a short exchange: give your balanced opinion, invite two classmates, and respond to each with an opinion form before re-stating your view." }
      },
      support: { pattern_support: ["PAT-7-04"] }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students give a balanced opinion with one reason and one caveat ('I think ... because ... but ...') and invite a reply ('What do you think?')",
        "students use 'but' as a caveat on their own opinion (not a two-adjective contrast or a story conflict), and respond to 'What do you think?' with an opinion ('I think ... / I agree / I don't think so'), not 'Yes/No'",
        "students still turn it into a formal argument or add 'For example ...', instead of a short, casual opinion"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a second reason with 'and' while keeping one caveat.",
        needs_model: "Repeat the MODEL step, emphasizing 'I think ... because ... but ...' and 'What do you think?' as a casual exchange.",
        needs_repeat: "Do one more round of REPEAT (choral) on the balanced-opinion sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives an opinion without a caveat, or answers 'What do you think?' with 'Yes/No', or turns it into a formal argument",
        "relies only on the written opinion and cannot exchange without reading",
        "gives a balanced opinion and invites and responds to others accurately and confidently"
      ],
      action: [
        "recast the opinion slowly, modeling 'I think ... because ... but ...' as one casual, balanced sentence",
        "model one more balanced opinion on a different school topic to show the same pattern still works",
        "for a student who is ready, model ONE opinion with a second supporting reason joined by 'and' first -- 'I think a phone-free break is good because we talk more and we rest our eyes, but I miss my games. What do you think?' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the balanced-opinion head, with no 'For example' or formal argument"
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
