export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-12.js",
    pattern_id: "PAT-7-12",
    title: "Study Habits: Choosing Helpful Strategies",
    short_title: "Study Habits",
    grade: 7,
    genre: "Procedure",
    cluster: "B",
    topic: "Effective Study Habits",
    context: "Students discuss simple goals and choose appropriate tools or actions to study better.",
    context_id: "Siswa mendiskusikan tujuan sederhana dan memilih alat atau tindakan yang sesuai untuk belajar lebih baik.",
    communicative_goal: "connect goals with appropriate actions or tools",
    communicative_goal_id: "menghubungkan tujuan dengan tindakan atau alat yang sesuai",
    vocabulary_domain: ["study", "dictionary", "notes", "practice"],
    input_anchor: "study scenario cards",
    output_anchor: "goal-action matching dialogue",
    prerequisite_patterns: ["PAT-7-09", "PAT-7-10", "PAT-7-11"],
    reusable_in: ["PAT-8-09", "PAT-8-11", "PAT-9-14"],
    complexity_level: "Acquire",
    notes: "TP kedua belas Fase D, Procedure, menutup genre Procedure Kelas 7. target_pattern PAT-7-12 = 'If you want to ..., Verb ... / Use ... to ...' -- memetakan tujuan ke tindakan/alat yang tepat. DISTINGSI PENTING: meskipun target memuat 'If you want to...', forbidden_overlap melarang 'conditional problem solving'. 'If you want to [GOAL], [Verb.../Use...to...]' di sini adalah PEMETAAN GOAL->TOOL/AKSI yang FORMULAIK (satu pasangan tujuan-tindakan tetap), BUKAN penalaran hipotetis if-then tentang konsekuensi ('if X happens, then Y will result', 'what if...', menimbang outcome). TIDAK ada 'because' (cause-effect/giving reasons). Tiga prerequisite dari genre Procedure di-chain alami: PAT-7-09 ('First,...Then,...Finally,...'), PAT-7-10 ('Verb+object+place/time'), PAT-7-11 ('Always ...') -- dipakai sebagai support setelah pemetaan goal->action. vocabulary_domain (study, dictionary, notes, practice) muncul di bahasa target. Ekstensi opsional menawarkan dua alternatif untuk satu goal ('If you want to learn new words, use a dictionary or ask your teacher.') -- menjaga head pattern 'If you want to...' -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning, everyone! I hope you studied last night." },
      { type: "AKSI", text: "Tanya siswa apakah ada yang memiliki pertanyaan sebelum memulai." },
      // HOOK
      { type: "UCAP", text: "What do you do when you want to remember something important from class?" },
      { type: "AKSI", text: "Tampilkan kartu skenario belajar: belajar kata baru, mengingat pelajaran, belajar untuk ujian." },
      { type: "UCAP", text: "Look at these study goals. Which one do you need the most help with?" },
    ],

    active_vocabulary: [
      "If you want to",
      "Use",
      "to",
      "study",
      "dictionary",
      "notes",
      "practice",
      "learn",
      "remember"
    ],

    model_sentences: [
      { id: "model_1", text: "If you want to learn new words, use a dictionary." },
      { id: "model_2", text: "Use your notes to remember the lesson." },
      { id: "model_3", text: "If you want to study well, practice every day. Always check your spelling." },
      { id: "model_4", text: "First, open your dictionary. Then, find the word. Put it in your notes." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Study scenario cards showing goals: learning new words, remembering a lesson, and studying for a test.", description_id: "Kartu skenario belajar yang menunjukkan tujuan: mempelajari kata baru, mengingat pelajaran, dan belajar untuk ujian.", asset_id: null },
      { id: "visual_2", description: "Tool and action icons: a dictionary, a notebook (notes), and a student practicing (repeating/writing).", description_id: "Ikon alat dan tindakan: kamus, buku catatan (catatan), dan siswa berlatih (mengulang/menulis).", asset_id: null },
      { id: "visual_3", description: "Goal-to-action arrow cards matching 'If you want to [goal]' with 'use [tool] / [action]'.", description_id: "Kartu panah tujuan-ke-tindakan yang memasangkan 'If you want to [goal]' dengan 'use [tool] / [action]'.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points ahead ('the goal') while saying 'If you want to ...', then gestures to a tool while saying 'use ...'.", description_id: "Guru menunjuk ke depan ('tujuan') sambil mengucapkan 'If you want to ...', lalu mengarahkan ke alat sambil mengucapkan 'use ...'." },
      { id: "gesture_2", description: "Teacher mimes using the tool (opening a dictionary, writing notes) while saying 'Use ... to ...'.", description_id: "Guru memperagakan penggunaan alatnya (membuka kamus, menulis catatan) sambil mengucapkan 'Use ... to ...'." },
      { id: "gesture_3", description: "Teacher links the two hands together to show the goal and the action belong as one pair.", description_id: "Guru menyatukan kedua tangan untuk menunjukkan bahwa tujuan dan tindakan adalah satu pasangan." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher connect a study goal with a helpful tool or action using 'If you want to ..., Verb ...' and 'Use ... to ...', supported by a simple procedure and rule.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-09", "PAT-7-10", "PAT-7-11"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the goal-action sentences ('If you want to ..., Verb ...' / 'Use ... to ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Connect your own study goal with a helpful tool or action.",
      prompt: "Use the patterns 'If you want to [goal], [verb] ...' and 'Use [tool] to [goal].' Replace the goal and the tool/action with study ideas (study, dictionary, notes, practice). Do not add 'because'.",
      change_target: ["goal (If you want to ...)", "tool/action (Use ... / Verb ...)"],
      differentiation: {
        easy: { task: "Match a goal card with a tool and complete: 'If you want to ___, use ___.'" },
        standard: { task: "Write two goal-action pairs: one 'If you want to ..., [verb] ...' and one 'Use ... to ...'." },
        challenge: { task: "Write one goal-action pair, then support it with a short procedure ('First, ... Then, ...'), one instruction ('Put ...'), and one rule ('Always ...')." }
      },
      support: { pattern_support: ["PAT-7-09", "PAT-7-10", "PAT-7-11"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Play a goal-action matching dialogue with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: one says a study goal ('If you want to ...'), and the other answers with a helpful tool or action ('use ...' / a verb). Then swap roles.",
      differentiation: {
        easy: { task: "Say a goal; your partner answers with a tool ('use a dictionary'). Then swap." },
        standard: { task: "Take turns matching goals and actions without reading, at least two each, using both 'If you want to ..., [verb] ...' and 'Use ... to ...'." },
        challenge: { task: "After matching a goal and action, add a short procedure or rule to your answer ('First, ... Then, ...' / 'Always ...'). Then swap." }
      },
      support: { pattern_support: ["PAT-7-09", "PAT-7-10", "PAT-7-11"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Perform your goal-action matching dialogue for a new group.",
      share_mode: "short_dialogue",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns performing your goal-action matching dialogues -- one says a study goal, the partner answers with a tool or action.",
      differentiation: {
        easy: { task: "Perform one goal-action match for the new group. You may read it." },
        standard: { task: "Perform two goal-action matches without reading, using both patterns." },
        challenge: { task: "Perform your matches and add a short procedure or rule to one answer, then listen and respond to a classmate's match." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students connect a goal with a tool or action using 'If you want to ..., [verb] ...' or 'Use ... to ...'",
        "students keep it as a fixed goal-action pairing, without hypothetical reasoning ('what if ...') or 'because'",
        "students still give an action without a goal, or add a cause-effect explanation"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to offer two alternative actions for one goal.",
        needs_model: "Repeat the MODEL step, emphasizing the goal-action pairing 'If you want to ..., [verb] ...' / 'Use ... to ...'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the goal-action sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives an action without naming the goal, or adds a cause-effect explanation",
        "relies only on the written pairs and cannot match without reading",
        "connects goals with tools/actions accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling the goal-action pairing 'If you want to ..., [verb] ...' / 'Use ... to ...'",
        "model one more goal-action pair on a different study goal to show the same pattern still works",
        "for a student who is ready, model ONE pair with two alternative actions first -- 'If you want to learn new words, use a dictionary or ask your teacher.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the 'If you want to ...' head, with no 'because' or hypothetical reasoning"
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
