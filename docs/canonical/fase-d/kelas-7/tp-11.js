export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-11.js",
    pattern_id: "PAT-7-11",
    title: "Online Safety: Giving Rules and Tips",
    short_title: "Online Safety",
    grade: 7,
    genre: "Procedure",
    cluster: "B",
    topic: "Safe Internet Use",
    context: "Students create simple digital safety reminders for friends.",
    context_id: "Siswa membuat pengingat keamanan digital sederhana untuk teman-teman.",
    communicative_goal: "give rules, warnings, and helpful tips",
    communicative_goal_id: "memberikan aturan, peringatan, dan tips yang bermanfaat",
    vocabulary_domain: ["password", "account", "privacy", "internet"],
    input_anchor: "digital poster",
    output_anchor: "class safety poster",
    prerequisite_patterns: ["PAT-7-10", "PAT-7-04"],
    reusable_in: ["PAT-8-21", "PAT-8-23"],
    complexity_level: "Acquire",
    notes: "TP kesebelas Fase D, Procedure. target_pattern PAT-7-11 = 'Don't ... / Be ... / Always ...' (tiga sub-bentuk: larangan, peringatan, anjuran). Tension forbidden_overlap vs prerequisite: PAT-7-04 vs 'expressing prohibition AS opinion' -> PAT-7-04 dipakai HANYA bentuk RESPONS pendek ('That's true.'/'I agree.') sebagai pengakuan pendengar terhadap sebuah rule ('Don't share your password. That's true!'); rule itu sendiri TIDAK dijadikan opini ('I think you shouldn't...'), dan 'I think...because...' TIDAK dipakai sama sekali. PAT-7-10 ('Verb+object+place/time') sebagai support: satu instruksi biasa berdampingan dengan rule ('Put your password in a safe place.'). Sesuai forbidden_overlap 'explanation of consequences': rule berdiri MANDIRI -- TIDAK diikuti 'because someone might...' (penjelasan akibat) atau argumentasi. vocabulary_domain (password, account, privacy, internet) muncul di bahasa target. Ekstensi opsional 'Never ...' (varian larangan yang menjaga head pattern aturan imperatif) ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Hello, class! Settle down and listen up." },
      { type: "AKSI", text: "Tunggu seluruh siswa fokus sebelum memulai." },
      // HOOK
      { type: "UCAP", text: "Quick check — do you have a password on your phone or tablet?" },
      { type: "AKSI", text: "Tampilkan poster keamanan digital dengan ikon: gembok, kartu profil, perisai, dan globe wifi." },
      { type: "UCAP", text: "Look at this digital safety poster. What things should we protect online?" },
    ],

    active_vocabulary: [
      "Don't",
      "Be",
      "Always",
      "share",
      "careful",
      "protect",
      "password",
      "account",
      "privacy",
      "internet"
    ],

    model_sentences: [
      { id: "model_1", text: "Don't share your password with anyone." },
      { id: "model_2", text: "Be careful with your account on the internet." },
      { id: "model_3", text: "Always protect your privacy." },
      { id: "model_4", text: "Put your password in a safe place. That's true!" }
    ],

    visual_cues: [
      { id: "visual_1", description: "A digital safety poster with icons: a padlock (password), a profile card (account), a shield (privacy), and a globe with wifi (internet).", description_id: "Poster keamanan digital dengan ikon: gembok (kata sandi), kartu profil (akun), perisai (privasi), dan globe dengan wifi (internet).", asset_id: null },
      { id: "visual_2", description: "Rule cards: a crossed circle for 'Don't', a warning sign for 'Be careful', and a checkmark for 'Always'.", description_id: "Kartu aturan: lingkaran disilang untuk 'Don't', tanda peringatan untuk 'Be careful', dan tanda centang untuk 'Always'.", asset_id: null },
      { id: "visual_3", description: "Scenario icons: sharing a password (crossed out), logging out of an account, choosing a strong password.", description_id: "Ikon skenario: membagikan kata sandi (disilang), keluar dari akun, memilih kata sandi yang kuat.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher crosses both hands in an X while saying 'Don't ...'.", description_id: "Guru menyilangkan kedua tangan membentuk X sambil mengucapkan 'Don't ...'." },
      { id: "gesture_2", description: "Teacher holds up an open palm in a cautious 'stop and check' gesture while saying 'Be careful ...'.", description_id: "Guru mengangkat telapak tangan terbuka dengan gestur hati-hati 'berhenti dan periksa' sambil mengucapkan 'Be careful ...'." },
      { id: "gesture_3", description: "Teacher makes a firm repeated nod (a checkmark in the air) while saying 'Always ...'.", description_id: "Guru mengangguk tegas berulang (tanda centang di udara) sambil mengucapkan 'Always ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher give simple online-safety rules with 'Don't ...', 'Be ...', and 'Always ...', alongside one normal instruction and a short listener response.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-10", "PAT-7-04"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the safety rules ('Don't ... / Be ... / Always ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own online-safety rules using 'Don't ...', 'Be ...', and 'Always ...'.",
      prompt: "Use the patterns 'Don't [action].', 'Be [adjective].', and 'Always [action].' Make rules about online safety (password, account, privacy, internet). Keep each rule on its own -- do not add 'because'.",
      change_target: ["rule type (Don't / Be / Always)", "safety action or object"],
      differentiation: {
        easy: { task: "Choose a safety icon and complete one rule: 'Don't ___.', 'Be ___.', or 'Always ___.'" },
        standard: { task: "Write three rules -- one 'Don't ...', one 'Be ...', and one 'Always ...' -- about online safety." },
        challenge: { task: "Write three rules, and pair one of them with a normal instruction: 'Put your password in a safe place. Don't share it with anyone.'" }
      },
      support: { pattern_support: ["PAT-7-10"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share online-safety rules in a small group and collect the best ones for a poster.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, take turns giving a safety rule ('Don't ... / Be ... / Always ...'). After each rule, the others respond with a short reaction ('That's true.' or 'I agree.'). Write down the rules your group likes best for a class safety poster.",
      differentiation: {
        easy: { task: "Say one rule to your group; the others respond with a response card ('That's true.' or 'I agree.')." },
        standard: { task: "Say two rules of different types without reading, and respond to your classmates' rules." },
        challenge: { task: "Give a rule paired with a normal instruction, respond to others, and help choose the best rules for the poster." }
      },
      support: { pattern_support: ["PAT-7-10", "PAT-7-04"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your group's safety rules for the class safety poster.",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other groups. Take turns presenting your safety rules ('Don't ... / Be ... / Always ...') as contributions to the class safety poster.",
      differentiation: {
        easy: { task: "Present two of your rules for the poster. You may read them." },
        standard: { task: "Present three rules of different types without reading." },
        challenge: { task: "Present your rules, then respond to a classmate's rule with 'That's true.' or 'I agree.' and suggest which rules belong on the poster." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students give rules with 'Don't ...', 'Be ...', and 'Always ...'",
        "students keep each rule as a standalone command, without turning it into an opinion ('I think you shouldn't ...')",
        "students still add a consequence ('because someone might ...') or explain at length instead of giving a clear rule"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to give a strong prohibition with 'Never ...'.",
        needs_model: "Repeat the MODEL step, emphasizing 'Don't ...', 'Be ...', 'Always ...' as short, clear rules.",
        needs_repeat: "Do one more round of REPEAT (choral) on the rules before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "turns a rule into an opinion or adds a consequence explanation",
        "relies only on the written rules and cannot give them without reading",
        "gives 'Don't / Be / Always' rules accurately and confidently"
      ],
      action: [
        "recast the rule slowly as a short, clear command ('Don't ...', 'Be ...', 'Always ...')",
        "model one more rule about a different safety topic to show the same pattern still works",
        "for a student who is ready, model ONE strong prohibition with 'Never ...' first -- 'Never give your password to a stranger.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the rule on its own, with no 'because' or consequence explanation"
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
