export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-04.js",
    pattern_id: "PAT-7-04",
    title: "Clean School: Sharing Simple Opinions",
    short_title: "Sharing Opinions",
    grade: 7,
    genre: "Interpersonal",
    cluster: "B",
    topic: "School Environment",
    context: "Students discuss ideas for keeping the classroom clean.",
    context_id: "Siswa mendiskusikan ide-ide untuk menjaga kebersihan kelas.",
    communicative_goal: "express and respond to simple opinions with reasons",
    communicative_goal_id: "menyampaikan dan menanggapi pendapat sederhana dengan alasan",
    vocabulary_domain: ["clean", "recycle", "teamwork", "rules"],
    input_anchor: "classroom photo",
    output_anchor: "small-group discussion",
    prerequisite_patterns: ["PAT-7-01", "PAT-7-02", "PAT-7-03"],
    reusable_in: ["PAT-8-01", "PAT-8-13", "PAT-9-01"],
    complexity_level: "Acquire",
    notes: "TP keempat Fase D dan TP PERTAMA yang menarget 'because'/alasan. target_pattern PAT-7-04 punya 4 sub-bentuk: (a) 'I think [X] because [Y]' (opini + alasan -- inti baru), (b) 'That's true.', (c) 'I agree.', (d) 'I don't think so.' (tiga bentuk respons). Keempatnya dimodelkan di model_sentences sebelum dipakai di INTERACT/SHARE (Checklist D). Tiga prerequisite direaktivasi sebagai support: PAT-7-03 ('Let's...!') sebagai LEAD-IN sebelum opini, PAT-7-02 ('Can you help...? Yes, I can.') terkait teamwork, dan PAT-7-01 ('I like...') sebagai BAGIAN DARI alasan ('...because I like a clean classroom.'). Sesuai forbidden_overlap, 'because [Y]' WAJIB tetap sangat sederhana (satu klausa A2, mis. 'because everyone helps') -- TIDAK ada argumentasi formal, eksposisi multi-kalimat, persuasi panjang, atau diskusi analitis ('on the other hand', dst). Ekstensi turn-taking opsional 'What about you?' (di luar empat sub-bentuk target, sekadar mengoper giliran -- bukan argumentasi) ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan satu contoh dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Morning, class! Find your seat quickly." },
      { type: "AKSI", text: "Tunggu sebentar hingga kelas kondusif." },
      // HOOK
      { type: "UCAP", text: "Take a look at this photo — which side of the classroom looks better to you?" },
      { type: "AKSI", text: "Tunjukkan foto kelas yang dibagi dua: satu sisi kotor, satu sisi bersih dan rapi." },
      { type: "UCAP", text: "What do you think we should do to keep our classroom clean?" },
    ],

    active_vocabulary: [
      "I think",
      "because",
      "That's true.",
      "I agree.",
      "I don't think so.",
      "clean",
      "recycle",
      "teamwork",
      "rules",
      "help"
    ],

    model_sentences: [
      { id: "model_1", text: "Let's keep our classroom clean! I think that's a good idea because I like a clean classroom." },
      { id: "model_2", text: "I think we should recycle paper because it helps the school. I agree." },
      { id: "model_3", text: "Can you help with classroom jobs? Yes, I can. I think teamwork is important because everyone helps. That's true." },
      { id: "model_4", text: "I think we need many rules. I don't think so." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A classroom photo split in two: one side untidy (litter on the floor, messy desks) and one side clean and tidy, to spark a discussion about keeping the classroom clean.", description_id: "Foto kelas yang dibagi dua: satu sisi tidak rapi (sampah di lantai, meja berantakan) dan satu sisi bersih dan rapi, untuk memicu diskusi tentang menjaga kebersihan kelas.", asset_id: null },
      { id: "visual_2", description: "Topic icons for the discussion: a broom (clean), a recycling bin with paper (recycle), several hands joined together (teamwork), and a class-rules poster (rules).", description_id: "Ikon topik untuk diskusi: sapu (bersih), tempat sampah daur ulang berisi kertas (daur ulang), beberapa tangan bergandengan (kerja sama), dan poster peraturan kelas (peraturan).", asset_id: null },
      { id: "visual_3", description: "Response cards: a nodding face for 'I agree. / That's true.' and a face shaking its head for 'I don't think so.'", description_id: "Kartu respons: wajah mengangguk untuk 'I agree. / That's true.' dan wajah menggeleng untuk 'I don't think so.'", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher taps their temple while saying 'I think...', then opens a hand forward while saying 'because...' to link the opinion to its reason.", description_id: "Guru menepuk pelipisnya sambil mengucapkan 'I think...', lalu membuka tangan ke depan sambil mengucapkan 'because...' untuk menghubungkan pendapat dengan alasannya." },
      { id: "gesture_2", description: "Teacher nods firmly with a thumbs-up while saying 'I agree. / That's true.'", description_id: "Guru mengangguk mantap dengan jempol ke atas sambil mengucapkan 'I agree. / That's true.'" },
      { id: "gesture_3", description: "Teacher waves a hand gently from side to side and shakes their head while saying 'I don't think so.'", description_id: "Guru melambaikan tangan pelan dari sisi ke sisi dan menggelengkan kepala sambil mengucapkan 'I don't think so.'" }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher give a simple opinion with a reason ('I think ... because ...') and respond to others with 'That's true.', 'I agree.', or 'I don't think so.'",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-01", "PAT-7-02", "PAT-7-03"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the opinions with reasons and the matching responses together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Make your own opinion with a simple reason about keeping the classroom clean, and choose how to respond to a classmate.",
      prompt: "Use the pattern 'I think [idea] because [reason].' with a short, simple reason. Replace the idea with one about keeping the classroom clean (clean, recycle, teamwork, rules). To respond to a classmate, use 'That's true.', 'I agree.', or 'I don't think so.'",
      change_target: ["idea (I think ...)", "reason (because ...)"],
      differentiation: {
        easy: { task: "Complete one opinion: 'I think ___ because ___.' using a short reason from the cues (e.g. 'because everyone helps'). Then choose one response card to reply to a classmate." },
        standard: { task: "Write one opinion 'I think ___ because ___.', and write two different responses you could give to classmates ('I agree.', 'That's true.', or 'I don't think so.')." },
        challenge: { task: "Write two opinions with reasons. Start one with a 'Let's...!' lead-in (e.g. 'Let's keep our classroom clean! I think that's a good idea because ...') and put 'I like...' inside one reason. Prepare one agreeing response and one 'I don't think so.' response." }
      },
      support: { pattern_support: ["PAT-7-01", "PAT-7-03"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Discuss ideas for keeping the classroom clean in a small group, giving opinions with reasons and responding to each other.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, take turns. One person gives an opinion ('I think ... because ...'); the others respond with 'I agree.', 'That's true.', or 'I don't think so.' Keep going until everyone has given at least one opinion and one response.",
      differentiation: {
        easy: { task: "Say your opinion from CHANGE to your group (you may read it), then respond to one classmate using a response card ('I agree.', 'That's true.', or 'I don't think so.')." },
        standard: { task: "Give your opinion without reading, then respond to at least two classmates using different responses." },
        challenge: { task: "Start with a 'Let's...!' lead-in, give your opinion with a reason that includes 'I like...', and use a 'Can you help...? Yes, I can.' exchange about teamwork in your discussion. Respond to others, including one 'I don't think so.'" }
      },
      support: { pattern_support: ["PAT-7-01", "PAT-7-02", "PAT-7-03"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Share your main opinion with a new group and respond to theirs.",
      share_mode: "oral_response",
      task: "Form a group of 4 with classmates from other groups (not your INTERACT group). Take turns saying your main opinion ('I think ... because ...') and listen to the others, responding with 'I agree.', 'That's true.', or 'I don't think so.'",
      differentiation: {
        easy: { task: "Say your 'I think ... because ...' opinion to the new group (you may read it), and respond to one classmate with a response card." },
        standard: { task: "Say your opinion without reading, and respond to at least two classmates with different responses." },
        challenge: { task: "Say your opinion with a 'Let's...!' lead-in and a reason that includes 'I like...', then respond to others, including one 'I don't think so.'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students give an opinion with a simple reason: 'I think ... because ...'",
        "students respond appropriately with 'I agree.', 'That's true.', or 'I don't think so.'",
        "students still give an opinion without a reason, or stretch the reason into a long, complex explanation beyond this stage"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to try a turn-taking question after giving an opinion.",
        needs_model: "Repeat the MODEL step, emphasizing 'I think ... because ...' as one smooth sentence and the three response forms.",
        needs_repeat: "Do one more round of REPEAT (choral) on the opinions and responses before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "hesitates to add a reason after 'I think...'",
        "relies only on the written opinion and cannot respond without reading it",
        "gives opinions with reasons and responds to others accurately and confidently"
      ],
      action: [
        "recast the opinion slowly, modeling 'I think ... because ...' as one smooth sentence with a short reason",
        "model one more opinion on a different classroom idea to show the same pattern still works",
        "for a student who is ready, model ONE turn-taking question first -- after giving an opinion, add 'What about you?' to invite a classmate's opinion -- then invite that student to try it once; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the talk a short exchange, not a long argument"
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
