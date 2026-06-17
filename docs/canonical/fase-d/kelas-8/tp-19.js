export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-19.js",
    pattern_id: "PAT-8-19",
    title: "The Old Storage Room: Character Dialogue",
    short_title: "Storage Room Dialogue",
    grade: 8,
    genre: "Narrative",
    cluster: "B",
    topic: "The Old Storage Room Mystery",
    context: "Students bring the story to life by creating conversations as friends decide whether to open the mysterious room.",
    context_id: "Siswa menghidupkan cerita dengan membuat percakapan saat teman-teman memutuskan apakah akan membuka ruangan misterius itu.",
    communicative_goal: "express character responses and advance the story through dialogue",
    communicative_goal_id: "menyampaikan tanggapan tokoh dan mengembangkan cerita melalui dialog",
    vocabulary_domain: ["friends", "voice", "question", "decision"],
    input_anchor: "dialogue comic",
    output_anchor: "role play",
    prerequisite_patterns: ["PAT-8-18"],
    reusable_in: ["PAT-9-07", "PAT-9-09"],
    complexity_level: "Expand",
    notes: "TP ke-19 Kelas 8, genre Narrative B 'Character Response and Dialogue' (cluster B). SINGLE PREREQ: PAT-8-18. target_pattern PAT-8-19 = '\"...\" said ... / \"...,\" replied ... / [Name] decided to ...' (FIRST direct quoted dialogue di seluruh korpus). CEFR B1- via MEKANISME DISKURSUS (bukan vocabulary) -- preseden TP-39 (PAT-8-15): yang naik adalah FITUR DISKURSUS BARU (kutipan langsung + verba pelapor + keputusan tokoh orang-ketiga), bukan kosakata sulit. Reaktivasi PAT-8-18 (WAJIB, VR-1): konflik 'Suddenly...so...but...' (kunci ditemukan di lantai, langkah kaki berhenti) menjadi PEMICU dialog -- tokoh Dito & Wulan bereaksi terhadap penemuan kunci. '[Name] decided to...' merealisasikan target dengan NAMA TOKOH nyata (Dito/Wulan), BUKAN kata literal 'character'. forbidden_overlap (interpersonal conversation, drama script, personal opinion): tetap PROSA NARATIF ORANG KETIGA dengan kutipan + verba pelapor -- bukan format skrip 'NAMA: dialog', bukan 'I think...because...' literal di dalam kutipan. vocabulary_domain (friends, voice, question, decision) semua terealisasi di model_sentences. BOOST extension: tambah satu pertukaran dialog ketiga dengan verba pelapor baru ('whispered') -- tidak mengulang model_1 atau model_2 verbatim.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. We are going to bring our story to life today." },
      { type: "AKSI", text: "Persiapkan suasana kelas seperti sesi storytelling." },
      // HOOK
      { type: "UCAP", text: "Dito found a key. Wulan heard a strange sound. What do you think they said to each other?" },
      { type: "AKSI", text: "Tampilkan strip komik dialog: Dito dan Wulan berdiri di luar pintu gudang, dengan balon kata dan kotak narator." },
      { type: "UCAP", text: "Look at this comic strip. Can you read what they are saying to each other?" },
    ],

    active_vocabulary: [
      "said",
      "replied",
      "decided to",
      "friends",
      "voice",
      "question",
      "decision"
    ],

    model_sentences: [
      { id: "model_1", text: "\"Did you hear that voice?\" said Wulan softly." },
      { id: "model_2", text: "\"I have a question,\" replied Dito. \"Should we open the door now?\"" },
      { id: "model_3", text: "As good friends, Dito and Wulan made a decision together." },
      { id: "model_4", text: "Dito decided to turn the key in the lock." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A dialogue comic strip showing Dito and Wulan standing outside the storage room door, with speech bubbles and a third-person narrator box below each panel.", description_id: "Strip komik dialog yang menunjukkan Dito dan Wulan berdiri di luar pintu gudang, dengan balon kata dan kotak narator orang ketiga di bawah setiap panel.", asset_id: null },
      { id: "visual_2", description: "A dialogue prose frame: '\"___\" said [name]. / \"___,\" replied [name]. / [Name] decided to ___.' -- showing third-person narrative structure, not a drama script.", description_id: "Kerangka prosa dialog: '\"___\" said [name]. / \"___,\" replied [name]. / [Name] decided to ___.' -- menunjukkan struktur naratif orang ketiga, bukan skrip drama.", asset_id: null },
      { id: "visual_3", description: "Reporting verb cards: said, replied, whispered, asked -- with arrows pointing into quotation marks to show the said/replied pattern.", description_id: "Kartu kata kerja pelapor: said, replied, whispered, asked -- dengan tanda panah menunjuk ke tanda kutip untuk menunjukkan pola said/replied.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher raises two fingers to form quotation marks in the air before reading each dialogue line.", description_id: "Guru mengangkat dua jari membentuk tanda kutip di udara sebelum membaca setiap baris dialog." },
      { id: "gesture_2", description: "Teacher alternates pointing left and right to represent two speakers (said / replied).", description_id: "Guru bergantian menunjuk kiri dan kanan untuk mewakili dua pembicara (said / replied)." },
      { id: "gesture_3", description: "Teacher makes a decisive forward-pointing gesture while saying 'decided to ...'.", description_id: "Guru membuat gestur menunjuk ke depan yang tegas sambil mengucapkan 'decided to ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher write narrative dialogue in third-person prose with '\"...\" said ...' / '\"...,\" replied ...' / '[Name] decided to ...' -- not a drama script, not a personal conversation.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-18"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice reading the dialogue sentences in third-person prose together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write a short narrative dialogue exchange using '\"...\" said ...' / '\"...,\" replied ...' and '[Name] decided to ...'.",
      prompt: "Write a 2-3 sentence dialogue between Dito and Wulan about opening the storage room door. Use '\"...\" said [name]' and '\"...,\" replied [name]'. End with '[Name] decided to ...'. Keep it third-person prose -- not a drama script ('NAME: ...'), and not a personal conversation. Include: friends, voice, question, or decision.",
      change_target: ["quoted speech ('\"...\" said ...')", "reported reply ('\"...,\" replied ...')", "character decision ('[Name] decided to ...')"],
      differentiation: {
        easy: { task: "Use the dialogue frame and fill in: '\"___\" said ___. \"___,\" replied ___. ___ decided to ___.' You may look at the comic." },
        standard: { task: "Write a dialogue exchange (said / replied) and end with '[Name] decided to ...' without reading." },
        challenge: { task: "Write three dialogue lines using said, replied, and one more reporting verb (e.g. whispered), then add '[Name] decided to ...'." }
      },
      support: { pattern_support: ["PAT-8-18"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Perform a short role play from the dialogue, then present the third-person prose version.",
      interaction_mode: "pair",
      task: "Find a partner. Role play the dialogue (one as Dito, one as Wulan) using your written sentences. Then swap: one person reads the third-person prose version aloud while the other checks: Is there 'said'? 'replied'? 'decided to'?",
      differentiation: {
        easy: { task: "Role play the dialogue with a partner using the frame. Your partner checks that 'said' and 'replied' are included." },
        standard: { task: "Role play and then read the prose version aloud. Your partner checks for 'said', 'replied', and 'decided to'." },
        challenge: { task: "Role play, read the prose version, and add a third line using a new reporting verb. Your partner asks 'What did the character decide?' and you answer." }
      },
      support: { pattern_support: ["PAT-8-18"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your narrative role play to a new group (role play).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Perform your role play, then read the third-person prose version. The group listens and checks: said, replied, decided to.",
      differentiation: {
        easy: { task: "Read your prose dialogue to the group using the frame." },
        standard: { task: "Perform the role play and read the prose version without the frame." },
        challenge: { task: "Perform the role play and read the prose version, then answer one question from the group: 'What did the character decide?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students write third-person narrative dialogue with '\"...\" said ...' / '\"...,\" replied ...' and '[Name] decided to ...'",
        "students keep the prose frame -- not a drama script ('WULAN: ...')",
        "students write only the spoken words without a reporting verb, or slip into first person ('I said ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a third dialogue line with a new reporting verb.",
        needs_model: "Repeat the MODEL step, emphasizing that narrative dialogue is always third-person prose with a reporting verb, not a drama script.",
        needs_repeat: "Do one more round of REPEAT (choral) on the dialogue sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "writes a drama script ('WULAN: Did you hear that?') instead of third-person prose with reporting verbs",
        "writes the dialogue but cannot present it without reading",
        "writes third-person narrative dialogue with said / replied and 'decided to' accurately and confidently"
      ],
      action: [
        "recast one line slowly, modeling the difference: 'WULAN: Did you hear that?' (drama script) vs. '\"Did you hear that voice?\" said Wulan softly.' (third-person prose with reporting verb)",
        "model one more dialogue exchange on a different story moment (e.g. just after finding the key) to show the same said / replied structure still works",
        "for a student who is ready, model ONE additional dialogue line with a new reporting verb first -- '\"We should not open it alone,\" whispered Wulan, stepping back from the door.' -- then invite that student to add a third dialogue line using a new reporting verb (whispered / asked) to their own exchange; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the third-person prose frame, not a drama script"
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
