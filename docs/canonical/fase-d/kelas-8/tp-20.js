export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-20.js",
    pattern_id: "PAT-8-20",
    title: "The Old Storage Room: Resolution and Reflection",
    short_title: "Storage Room Ending",
    grade: 8,
    genre: "Narrative",
    cluster: "B",
    topic: "The Old Storage Room Mystery",
    context: "Students discover that the room contains old letters and school memories, then decide to write a message to share their discovery with others.",
    context_id: "Siswa menemukan bahwa ruangan itu berisi surat-surat lama dan kenangan sekolah, lalu memutuskan untuk menulis pesan guna membagikan penemuan mereka kepada orang lain.",
    communicative_goal: "resolve a narrative, express its message, and create a natural transition to written communication",
    communicative_goal_id: "menyelesaikan cerita, menyampaikan pesannya, dan membuat transisi alami ke komunikasi tulis",
    vocabulary_domain: ["letters", "memories", "message", "discovery"],
    input_anchor: "ending storyboard",
    output_anchor: "story reflection and message draft",
    prerequisite_patterns: ["PAT-8-19"],
    reusable_in: ["PAT-8-21", "PAT-9-16"],
    complexity_level: "Expand",
    notes: "TP ke-20 Kelas 8, genre Narrative B 'Resolution and Reflection' (cluster B). GENRE CLOSER NARRATIVE K8. SINGLE PREREQ: PAT-8-19. target_pattern PAT-8-20 = 'In the end ... because ... / From that day on ... / The story shows ...' (resolusi + dampak + tema eksplisit, LEBIH UTUH dari PAT-7-24). CEFR B1-. Reaktivasi PAT-8-19 (WAJIB, VR-1): keputusan dialog Dito & Wulan ('Dito decided to turn the key') menjadi jembatan ke 'In the end...because...' (resolusi langsung dari keputusan itu). Catatan vs PAT-7-24 ('In the end,...'): PAT-7-24 tanpa 'because' dan tanpa 'From that day on'/'The story shows' -- PAT-8-20 adalah versi LEBIH UTUH. 'The story shows...' = STATEMENT META-NARATIF ORANG KETIGA tentang TEMA, BUKAN 'I learned...' (PAT-7-16), BUKAN 'I believe...' (PAT-8-13+), BUKAN 'Therefore, I recommend...' (PAT-8-16). TRANSISI KE TP-45 (extends_to PAT-8-21): 'message' terealisasi di BOOST action sebagai draf benih pesan digital ('Dito and Wulan decided to write a message to share their discovery with the whole school.') dan di CHANGE prompt -- output_anchor 'story reflection and message draft' menjadi input_anchor PAT-8-21. BOOST extension: siswa menambah satu kalimat jembatan berupa benih pesan yang akan dikembangkan menjadi email di TP-45.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. Today we find out what was inside the storage room." },
      { type: "AKSI", text: "Minta siswa mengingat peristiwa terakhir dari sesi sebelumnya." },
      // HOOK
      { type: "UCAP", text: "Dito turned the key. The door opened. What do you think they found inside?" },
      { type: "AKSI", text: "Tampilkan papan cerita penutup: 4 panel — Dito memutar kunci, pintu terbuka, benda lama, siswa tersenyum." },
      { type: "UCAP", text: "Look at this ending storyboard. What does the discovery mean for the whole school?" },
    ],

    active_vocabulary: [
      "In the end,",
      "because",
      "From that day on,",
      "The story shows",
      "letters",
      "memories",
      "message",
      "discovery"
    ],

    model_sentences: [
      { id: "model_1", text: "In the end, Dito and Wulan opened the door because they wanted to solve the mystery." },
      { id: "model_2", text: "Inside, they found old letters and photographs full of school memories." },
      { id: "model_3", text: "From that day on, the storage room became a small museum for the whole school." },
      { id: "model_4", text: "The story shows that a small discovery can bring back many memories." }
    ],

    visual_cues: [
      { id: "visual_1", description: "An ending storyboard: four panels showing (1) Dito turning the key, (2) the door opening to reveal old letters and photographs, (3) the room displayed as a small museum, (4) students smiling at the memories.", description_id: "Papan cerita penutup: empat panel menunjukkan (1) Dito memutar kunci, (2) pintu terbuka memperlihatkan surat dan foto lama, (3) ruangan ditampilkan sebagai museum kecil, (4) siswa tersenyum menatap kenangan.", asset_id: null },
      { id: "visual_2", description: "Resolution frames: 'In the end, ___ because ___.' / 'From that day on, ___.' / 'The story shows that ___.' with fill-in lines.", description_id: "Kerangka penyelesaian: 'In the end, ___ because ___.' / 'From that day on, ___.' / 'The story shows that ___.' dengan baris isian.", asset_id: null },
      { id: "visual_3", description: "Icons: old letters tied with ribbon, school photographs, a glowing light bulb (for 'The story shows ...'), and a small museum display.", description_id: "Ikon: surat-surat lama diikat pita, foto-foto sekolah, lampu bohlam menyala (untuk 'The story shows ...'), dan tampilan museum kecil.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher brings hands together to signal a conclusion while saying 'In the end, ...'.", description_id: "Guru menyatukan kedua tangan untuk menandai kesimpulan sambil mengucapkan 'In the end, ...'." },
      { id: "gesture_2", description: "Teacher sweeps a hand forward across time while saying 'From that day on, ...'.", description_id: "Guru menyapukan tangan ke depan melintasi waktu sambil mengucapkan 'From that day on, ...'." },
      { id: "gesture_3", description: "Teacher taps the side of the head while saying 'The story shows ...' -- to signal a theme or insight about the whole story.", description_id: "Guru menepuk sisi kepala sambil mengucapkan 'The story shows ...' -- untuk menandai tema atau wawasan tentang keseluruhan cerita." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher resolve the story with 'In the end ... because ...' (resolution), 'From that day on ...' (lasting change), and 'The story shows ...' (theme) -- a fuller ending than 'In the end ...' alone.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-19"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the resolution sentences ('In the end ... because ...' / 'From that day on ...' / 'The story shows ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write a story resolution and reflection using the three-part ending.",
      prompt: "Write a story ending using: 'In the end, ___ because ___.' (resolution), 'From that day on, ___.' (lasting change), and 'The story shows that ___.' (theme). Write about the discovery in the storage room and include: letters, memories, message, or discovery. Keep 'The story shows ...' as a theme statement about the whole story -- not 'I learned ...' or 'I believe ...'.",
      change_target: ["resolution (In the end, ... because ...)", "lasting change (From that day on, ...)", "theme (The story shows ...)"],
      differentiation: {
        easy: { task: "Use the resolution frames and complete: 'In the end, ___ because ___. From that day on, ___. The story shows that ___.' You may use the storyboard." },
        standard: { task: "Write all three resolution sentences without reading." },
        challenge: { task: "Write the three resolution sentences and add one sentence about the message the characters wanted to share with others." }
      },
      support: { pattern_support: ["PAT-8-19"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share story resolutions with a partner and check the three-part structure.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your story ending ('In the end ... because ...' / 'From that day on ...' / 'The story shows ...'). Your partner checks: Is there a resolution with a reason? A lasting change? A theme statement? Then swap.",
      differentiation: {
        easy: { task: "Read your resolution to your partner. Your partner points to 'In the end', 'From that day on', and 'The story shows' in your text." },
        standard: { task: "Share your resolution without reading. Your partner checks all three parts." },
        challenge: { task: "Share your resolution and your partner asks 'What message did the characters want to share?' -- you answer in one more sentence." }
      },
      support: { pattern_support: ["PAT-8-19"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your story reflection and message draft to a new group (story reflection and message draft).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your story ending ('In the end ... because ...' / 'From that day on ...' / 'The story shows ...').",
      differentiation: {
        easy: { task: "Read your story ending to the group." },
        standard: { task: "Present your story ending without reading." },
        challenge: { task: "Present your story ending, then answer one question from the group about the theme or the lasting change." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students resolve the story with 'In the end ... because ...', add lasting change with 'From that day on ...', and state a theme with 'The story shows ...'",
        "students keep 'The story shows ...' as a third-person meta-statement about the story's theme, not 'I learned ...' or 'I believe ...'",
        "students end with only 'In the end ...' (no reason, no theme) or slide into personal reflection ('I think the discovery was important')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to draft a one-sentence message from the characters as a bridge to the next lesson.",
        needs_model: "Repeat the MODEL step, emphasizing that 'The story shows ...' is a theme statement about the whole story, not a personal opinion.",
        needs_repeat: "Do one more round of REPEAT (choral) on the resolution sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "ends with only 'In the end ...' without a reason or theme, or writes a personal opinion ('I believe the discovery was important')",
        "writes all three parts but cannot present without reading",
        "writes 'In the end ... because ...', 'From that day on ...', and 'The story shows ...' accurately and confidently"
      ],
      action: [
        "recast the ending slowly, modeling 'In the end ... because ...', 'From that day on ...', and 'The story shows ...' as three connected layers of a story close",
        "model one more resolution on a different story (e.g. the Firefly story) to show the same three-part pattern still works",
        "for a student who is ready, model ONE seed sentence that bridges to a digital message first -- 'Dito and Wulan decided to write a message to share their discovery with the whole school.' -- then invite that student to add their own seed sentence after 'The story shows ...' as a bridge to what the characters did next; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it sets up the digital message in the next lesson"
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
