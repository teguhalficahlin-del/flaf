export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-16.js",
    pattern_id: "PAT-9-16",
    title: "Creating Positive Change: Personal Reflection",
    short_title: "Learning from Change",
    grade: 9,
    genre: "Reflection",
    cluster: "A",
    topic: "Learning from Creating Positive Change",
    context: "Students reflect on their experience of analyzing evidence, identifying a school problem, and proposing solutions to improve student wellbeing, constructing personal meaning from the learning process.",
    context_id: "Siswa merefleksikan pengalaman mereka menganalisis bukti, mengidentifikasi masalah sekolah, dan mengusulkan solusi untuk meningkatkan kesejahteraan siswa, serta membangun makna pribadi dari proses belajar tersebut.",
    communicative_goal: "reflect on learning experiences and construct personal meaning from them",
    communicative_goal_id: "merefleksikan pengalaman belajar dan membangun makna pribadi darinya",
    vocabulary_domain: ["reflection", "learning process", "evidence", "personal growth"],
    input_anchor: "integrated problem-solution evaluation",
    output_anchor: "personal learning reflection",
    prerequisite_patterns: ["PAT-7-16", "PAT-7-15", "PAT-9-15"],
    reusable_in: ["PAT-9-17", "PAT-9-18"],
    complexity_level: "Integrate",
    notes: "TP keenambelas Kelas 9, genre Reflection (cluster A -- opener Cluster 6). TRIPLE PREREQ: PAT-7-16, PAT-7-15, PAT-9-15. target_pattern PAT-9-16 = 'I learned... because... From this experience, I realized...' (tiga langkah: pernyataan pembelajaran -> alasan -> realisasi bermakna). CROSS-CLUSTER BRIDGE: PAT-9-15 (closer Cluster 5) menjadi titik tolak refleksi -- pengalaman problem-solving (menganalisis bukti, mengidentifikasi masalah, mengusulkan solusi) adalah MATERIAL refleksi, bukan konten yang diulang. runtime tidak memuat ulang konten PAT-9-13/14/15 -- hanya merujuk pengalaman konkret yang telah dilalui siswa sebagai landasan 'I learned...'. Reaktivasi PAT-9-15 (WAJIB, VR-1): KAPASITAS evaluasi terintegrasi (5 komponen problem-solution) direaktivasi sebagai MATERI REFLEKSI -- pengalaman melakukan evaluasi inilah yang kini menjadi objek refleksi personal. Yang direaktivasi adalah KAPASITAS memandang keseluruhan proses sebagai satu unit bermakna. Reaktivasi PAT-7-16 (WAJIB, VR-1): 'At the end,... / I learned...' (K7, recount ending) direaktivasi sebagai KOMPONEN CLOSURE + PEMBELAJARAN PERSONAL lintas-Kelas. Realisasi: 'I learned...' di target pattern -- naik level dari recount ending (K7, tentang peristiwa) ke refleksi evaluatif berbasis pengalaman autentik (K9, tentang makna belajar). Reaktivasi PAT-7-15 (WAJIB, VR-1): 'It was + adj + because...' (K7, penilaian personal berbasis alasan) direaktivasi sebagai KAPASITAS KAUSALITAS EVALUATIF. Realisasi: 'because...' dalam 'I learned...because...' mengisi alasan mengapa pembelajaran itu bermakna -- naik dari evaluasi kejadian (K7) ke refleksi makna belajar (K9). forbidden_overlap (recount of events only, narrative resolution, argumentative conclusion): 'I learned...' harus diikuti dengan MENGAPA itu bermakna ('because...') dan REALISASI baru ('From this experience, I realized...') -- bukan sekadar rangkaian kejadian, bukan resolusi narasi, bukan rekomendasi argumentatif. vocabulary_domain: reflection ✓ model_3, learning process ✓ model_2/4, evidence ✓ model_1/4, personal growth ✓ model_3/4. BOOST extension: tambah 'What I will carry with me from this experience is...' sebagai forward-looking move yang mengubah refleksi menjadi niat -- tidak mengulang model verbatim.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. Today we turn inward — to reflect on our own learning." },
      { type: "AKSI", text: "Berikan waktu tenang sejenak sebelum memulai refleksi." },
      // HOOK
      { type: "UCAP", text: "Think back to when we analyzed evidence, identified a problem, and proposed a solution. What did you actually learn?" },
      { type: "AKSI", text: "Tampilkan kartu alur refleksi: 'Learning process' → 'Key moment' → 'What I realized'." },
      { type: "UCAP", text: "Look at this reflection arc. Where did you experience the biggest shift in your thinking?" },
    ],

    active_vocabulary: [
      "I learned",
      "because",
      "From this experience, I realized",
      "reflection",
      "learning process",
      "evidence",
      "personal growth"
    ],

    model_sentences: [
      { id: "model_1", text: "I learned that finding evidence is not always straightforward because different sources do not always say the same thing, and deciding which to trust takes careful thinking." },
      { id: "model_2", text: "I learned that the learning process takes patience because each step -- analyzing, evaluating, presenting -- builds on the one before, and skipping a step makes the next one harder." },
      { id: "model_3", text: "From this experience, I realized that personal growth often happens when something is difficult at first but becomes clearer through practice and honest reflection." },
      { id: "model_4", text: "I learned that combining evidence from different sources helps me understand a problem more deeply because no single source tells the complete story. From this experience, I realized that my learning process has changed -- I now think more carefully before drawing conclusions, and this kind of personal growth was something I did not expect." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A reflection arc card with three connected stages: 'Learning process' (what we did across Cluster 4 and 5) → 'Key moment' (when something became clear or difficult) → 'What I realized' (the personal meaning that emerged).", description_id: "Kartu alur refleksi dengan tiga tahap terhubung: 'Learning process' (apa yang kita lakukan sepanjang Cluster 4 dan 5) → 'Key moment' (saat sesuatu menjadi jelas atau sulit) → 'What I realized' (makna pribadi yang muncul).", asset_id: null },
      { id: "visual_2", description: "A reflection frame with three labelled slots: 'I learned...' (state the learning) / 'because...' (explain why it matters) / 'From this experience, I realized...' (a new personal insight, not a summary of events).", description_id: "Kerangka refleksi dengan tiga slot berlabel: 'I learned...' (menyatakan pembelajarannya) / 'because...' (menjelaskan mengapa itu penting) / 'From this experience, I realized...' (wawasan pribadi baru, bukan ringkasan peristiwa).", asset_id: null },
      { id: "visual_3", description: "Icons: a journal with an open page (reflection), a magnifying glass over layered source documents (evidence and learning process), and a figure with an upward arrow (personal growth).", description_id: "Ikon: jurnal dengan halaman terbuka (refleksi), kaca pembesar di atas dokumen sumber berlapis (bukti dan proses belajar), dan figur dengan tanda panah ke atas (pertumbuhan pribadi).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher places a hand on chest while saying 'I learned...' -- to signal taking personal ownership of the learning, not describing what happened from the outside.", description_id: "Guru meletakkan tangan di dada sambil mengucapkan 'I learned...' -- untuk menandai mengambil kepemilikan pribadi atas pembelajarannya, bukan mendeskripsikan apa yang terjadi dari luar." },
      { id: "gesture_2", description: "Teacher traces a causal arrow between two cards while saying 'because...' -- to signal that the reason must explain WHY it mattered personally, not just what happened next.", description_id: "Guru menyusuri tanda panah kausal di antara dua kartu sambil mengucapkan 'because...' -- untuk menandai bahwa alasannya harus menjelaskan MENGAPA itu penting secara pribadi, bukan hanya apa yang terjadi selanjutnya." },
      { id: "gesture_3", description: "Teacher opens an open hand outward while saying 'From this experience, I realized...' -- to signal a moment of genuine new insight, distinct from the first 'I learned...' and not a repetition of events.", description_id: "Guru membuka satu telapak tangan ke luar sambil mengucapkan 'From this experience, I realized...' -- untuk menandai momen wawasan baru yang sejati, berbeda dari 'I learned...' yang pertama dan bukan pengulangan peristiwa." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher construct a personal learning reflection using three steps: 'I learned...' (state what was learned) + 'because...' (explain why it is meaningful) + 'From this experience, I realized...' (a new personal insight) -- not a recount of events ('First we did... then we did...'), not a narrative resolution, and not an argumentative conclusion.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-16", "PAT-7-15", "PAT-9-15"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the reflection sentences ('I learned...' / 'because...' / 'From this experience, I realized...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own personal learning reflection about the experience of analyzing evidence, identifying problems, and proposing solutions.",
      prompt: "Think about your experience in the last two clusters (Cluster 4: reading sources; Cluster 5: problem and solution). Write: 'I learned that ___.' (something specific you understood about yourself, evidence, or the learning process), 'because ___.' (WHY this matters to you personally -- not just what happened), 'From this experience, I realized ___ .' (a new insight -- something you now understand that you did not before). Use: reflection, learning process, evidence, or personal growth. Keep the three steps distinct: 'I learned' is different from 'I realized' -- the realization should add something new.",
      change_target: ["learning statement (I learned that ...)", "personal reason (because ...)", "new insight (From this experience, I realized ...)"],
      differentiation: {
        easy: { task: "Use the three-slot reflection frame. For 'I learned', think of one moment from the last two clusters when something clicked for you." },
        standard: { task: "Write your own reflection without reading the frame. Make sure the 'because' explains WHY you find it meaningful, not just WHAT happened." },
        challenge: { task: "Write the reflection and make 'From this experience, I realized...' say something that goes beyond 'I learned...' -- a deeper insight about yourself as a learner, not just about the topic." }
      },
      support: { pattern_support: ["PAT-7-16", "PAT-7-15", "PAT-9-15"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share personal learning reflections with a partner and check whether all three steps are distinct.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your reflection ('I learned...' / 'because...' / 'From this experience, I realized...'). Your partner checks: Is the 'because' a personal reason, not just a retelling of what happened? Does 'From this experience, I realized...' add something new beyond 'I learned...'? Give one piece of genuine feedback. Then swap.",
      differentiation: {
        easy: { task: "Read your reflection to your partner. Your partner points to 'I learned', 'because', and 'I realized' in your text and says one thing they found interesting." },
        standard: { task: "Share your reflection without reading. Your partner checks whether all three steps are distinct and whether the 'because' is personal, not just descriptive." },
        challenge: { task: "Share your reflection and your partner asks 'What would you do differently now, knowing what you realized?' -- you answer with one specific change." }
      },
      support: { pattern_support: ["PAT-7-16", "PAT-7-15", "PAT-9-15"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your personal learning reflection to a new group (personal learning reflection).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns sharing your reflection ('I learned...' / 'because...' / 'From this experience, I realized...'). After each person, one group member says which 'realization' surprised them most.",
      differentiation: {
        easy: { task: "Share your reflection to the group using your written notes." },
        standard: { task: "Share your reflection without reading." },
        challenge: { task: "Share your reflection, then answer one question from the group: 'Is what you realized specific to this project, or does it apply to how you learn in general?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students produce all three steps: 'I learned...' (a specific learning) → 'because...' (a personal reason, not a retelling) → 'From this experience, I realized...' (a new insight that adds to 'I learned')",
        "students distinguish between describing events ('First we read sources, then we identified problems') and reflecting on meaning ('I learned that combining sources helps because...')",
        "students retell events rather than reflect ('I learned that we read two sources and wrote syntheses because we needed to do the task') or use 'I realized' as a repetition of 'I learned' without adding a new insight"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add 'What I will carry with me from this experience is...' as a forward-looking move.",
        needs_model: "Repeat the MODEL step, using the reflection arc card -- point to the difference between 'what happened' (event) and 'what I understood' (learning) and 'what I now see differently' (realization).",
        needs_repeat: "Do one more round of REPEAT (choral) with pauses naming each component before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "retells events instead of reflecting ('I learned that we compared two sources. From this experience, I realized that sources are useful.') or uses 'I realized' as a repetition of 'I learned' without new insight",
        "produces all three steps correctly but cannot share without reading",
        "reflects with all three distinct steps -- a specific learning, a personal reason, and a genuine new insight -- accurately and confidently"
      ],
      action: [
        "recast the reflection slowly, showing the difference between event and meaning: 'I learned that... -- this is WHAT I understood, not what happened. Because... -- this is WHY it matters to ME personally. I realized... -- this is something new I see about myself or learning that I didn't see before. These are three different moves.'",
        "model one more reflection on a different learning experience (e.g. the first time presenting to a group) to show the same three-step structure still works for any meaningful experience",
        "for a student who is ready, model ONE forward-looking sentence first -- 'What I will carry with me from this experience is the habit of asking for evidence before I accept an argument, because I now understand that personal growth starts with careful thinking.' -- then invite that student to add 'What I will carry with me from this experience is...' after their own 'I realized...' to turn the reflection into an intention; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it opens the door to the forward-looking reflection arc in TP-17 and TP-18"
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
