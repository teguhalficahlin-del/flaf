export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-15.js",
    pattern_id: "PAT-7-15",
    title: "My First Library Visit: Expressing Experience",
    short_title: "Library Visit",
    grade: 7,
    genre: "Recount",
    cluster: "B",
    topic: "Library Visit",
    context: "Students describe how they felt after a real visit to a library or reading corner.",
    context_id: "Siswa mendeskripsikan perasaan mereka setelah mengunjungi perpustakaan atau pojok baca.",
    communicative_goal: "express personal responses to a past experience with simple reasons",
    communicative_goal_id: "menyampaikan tanggapan pribadi terhadap pengalaman masa lalu dengan alasan sederhana",
    vocabulary_domain: ["books", "reading", "library", "feelings"],
    input_anchor: "experience photos",
    output_anchor: "experience sharing",
    prerequisite_patterns: ["PAT-7-14"],
    reusable_in: ["PAT-8-13", "PAT-9-04"],
    complexity_level: "Acquire",
    notes: "TP kelima belas Fase D, Recount. target_pattern PAT-7-15 = 'It was + adjective + because + simple event'. DISTINGSI PENTING: 'because' di sini SPESIFIK untuk respons emosional terhadap SATU pengalaman lampau tertentu ('It was [adj] because [event yang terjadi]') -- BUKAN opini topik UMUM seperti PAT-7-04 ('I think [topik umum] because [alasan umum]'). 'because [event]' harus EVENT KONKRET yang sudah diceritakan, bukan alasan abstrak/argumentatif. 'It was' = past tense (lanjutan dimensi lampau Recount). PAT-7-14 ('Subject + past action + and/then + past action') sebagai support: rangkaian kejadian sebelum respons emosi ('I found a book and read it. It was fun because the reading was interesting.'). forbidden_overlap lain: TIDAK ada opini topik umum, TIDAK ada argumentasi, TIDAK ada teks eksplanasi panjang. vocabulary_domain (books, reading, library, feelings) muncul di bahasa target. Ekstensi opsional menggabungkan dua perasaan ('It was fun and exciting because ...') -- menjaga head 'It was ... because ...' -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Hello, friends! Ready to share some experiences today?" },
      { type: "AKSI", text: "Kondisikan kelas dengan tenang sebelum memulai." },
      // HOOK
      { type: "UCAP", text: "Has anyone visited the school library or a reading corner recently? How did it feel?" },
      { type: "AKSI", text: "Tampilkan foto pengalaman perpustakaan: mencari buku, membaca di meja, pojok baca tenang." },
      { type: "UCAP", text: "Look at these library photos. What feeling do you get when you see them?" },
    ],

    active_vocabulary: [
      "It was",
      "because",
      "fun",
      "quiet",
      "exciting",
      "books",
      "reading",
      "library"
    ],

    model_sentences: [
      { id: "model_1", text: "I found a book and read it at the library." },
      { id: "model_2", text: "It was fun because the reading was interesting." },
      { id: "model_3", text: "It was quiet because everyone read together." },
      { id: "model_4", text: "It was exciting because I learned new things from the books." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Experience photos of a library visit: a student finding a book, reading at a table, and a quiet reading corner.", description_id: "Foto pengalaman kunjungan perpustakaan: siswa mencari buku, membaca di meja, dan pojok baca yang tenang.", asset_id: null },
      { id: "visual_2", description: "Feeling cards: a happy face (fun), a calm face (quiet), and an excited face (exciting).", description_id: "Kartu perasaan: wajah senang (fun), wajah tenang (quiet), dan wajah antusias (exciting).", asset_id: null },
      { id: "visual_3", description: "A sentence-frame card linking a feeling face to an event picture: 'It was [feeling] because [what happened].'", description_id: "Kartu kerangka kalimat yang menghubungkan wajah perasaan dengan gambar peristiwa: 'It was [feeling] because [what happened].'", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher places a hand on their chest showing a feeling while saying 'It was [adjective] ...'.", description_id: "Guru meletakkan tangan di dada menunjukkan perasaan sambil mengucapkan 'It was [adjective] ...'." },
      { id: "gesture_2", description: "Teacher opens a hand toward an event picture while saying 'because [event] ...'.", description_id: "Guru membuka tangan ke arah gambar peristiwa sambil mengucapkan 'because [event] ...'." },
      { id: "gesture_3", description: "Teacher mimes finding and reading a book (the past actions) before giving the feeling.", description_id: "Guru memperagakan mencari dan membaca buku (tindakan lampau) sebelum menyampaikan perasaannya." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher express a personal feeling about a past library visit using 'It was [adjective] because [event that happened]'.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-14"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the feeling-and-reason sentences ('It was ... because ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Express your own feeling about a past experience by replacing the adjective and the event.",
      prompt: "Use the pattern 'It was [adjective] because [event].' Replace the adjective with a feeling (fun, quiet, exciting) and the reason with a concrete event that really happened. Keep the reason a real event, not a general opinion.",
      change_target: ["feeling (It was ...)", "event (because ...)"],
      differentiation: {
        easy: { task: "Choose a feeling card and complete: 'It was ___ because ___ (something that happened).'" },
        standard: { task: "Write two feeling responses about your library experience, each 'It was [adjective] because [event].'" },
        challenge: { task: "Start with a connected-action recap ('I found a book and read it.'), then give your 'It was [adjective] because [event].' response." }
      },
      support: { pattern_support: ["PAT-7-14"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share your library experience and your feeling about it with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your library experience and how you felt: 'It was [adjective] because [event].' Listen to your partner and notice the feeling and the event.",
      differentiation: {
        easy: { task: "Share one 'It was ... because ...' sentence using your sentence from CHANGE (you may read). Listen to your partner's sentence." },
        standard: { task: "Share two feeling responses without reading. Listen and remember your partner's feeling and event." },
        challenge: { task: "Recap your actions ('I found a book and read it.'), then give your feeling response. Your partner does the same." }
      },
      support: { pattern_support: ["PAT-7-14"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Share your experience and feeling with a new group (experience sharing).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns sharing your library experience and feeling: 'It was [adjective] because [event].'",
      differentiation: {
        easy: { task: "Share one feeling response with the new group. You may read it." },
        standard: { task: "Share two feeling responses without reading." },
        challenge: { task: "Recap your actions, then share your feeling response, and listen and respond to one classmate's experience." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students express a feeling about a past experience with 'It was [adjective] because [event]'",
        "students tie 'because' to a concrete event that happened, not a general or abstract reason",
        "students still drop the reason, or turn it into a general-topic opinion or a long explanation"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to combine two feelings in one response.",
        needs_model: "Repeat the MODEL step, emphasizing 'It was [adjective] because [event that happened]'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the feeling-and-reason sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "drops the reason, or gives a general opinion instead of a concrete event",
        "relies only on the written response and cannot share it without reading",
        "expresses a feeling with 'It was ... because [event]' accurately and confidently"
      ],
      action: [
        "recast the response slowly, modeling 'It was [adjective] because [concrete event]'",
        "model one more feeling response about a different experience to show the same pattern still works",
        "for a student who is ready, model ONE response with two feelings first -- 'It was fun and exciting because we read together.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the 'It was ... because [event]' head, with no general opinion or argument"
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
