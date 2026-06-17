export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-20.js",
    pattern_id: "PAT-7-20",
    title: "The Old Storage Room: Reading Mysterious Notices",
    short_title: "Old Storage Room",
    grade: 7,
    genre: "Functional",
    cluster: "B",
    topic: "Mysterious School Notices",
    context: "Students observe warning signs and public notices placed near an old unused room and imagine why they exist.",
    context_id: "Siswa mengamati tanda peringatan dan pengumuman publik di dekat ruangan tua yang tidak terpakai dan membayangkan alasan keberadaannya.",
    communicative_goal: "interpret public notices and infer simple contextual meaning",
    communicative_goal_id: "menafsirkan pengumuman publik dan menyimpulkan makna kontekstual sederhana",
    vocabulary_domain: ["notice", "warning", "door", "secret"],
    input_anchor: "notice and sign cards",
    output_anchor: "notice interpretation",
    prerequisite_patterns: ["PAT-7-19"],
    reusable_in: ["PAT-8-17", "PAT-8-18", "PAT-8-20"],
    complexity_level: "Acquire",
    notes: "TP kedua puluh Fase D, Functional, menutup blok Functional Kelas 7. target_pattern PAT-7-20 = 'Notice: ... / No ... / Keep ... / Use ...' -- FORMAT NOTICE/SIGN (lanjutan register fragmen). Topik 'mysterious'/'secret' (ruang penyimpanan tua) adalah HOOK MOTIVASI lewat input_anchor (kartu notice/sign) dan output_anchor 'notice interpretation' (menafsirkan makna/konteks notice). TAPI output bahasa WAJIB tetap FORMAT NOTICE (Notice:/No.../Keep.../Use...) -- JANGAN bergeser jadi CERITA NARATIF lampau (itu wilayah Genre Narrative PAT-7-21+, bukan batch ini). 'Interpret' di sini = mencocokkan notice dengan makna/tindakan (menunjuk gambar), BUKAN opini ('I think...'). forbidden_overlap lain: TIDAK ada penjelasan prosedural panjang, TIDAK ada label deskriptif murni, TIDAK ada pesan argumentatif. PAT-7-19 ('Name:/Class:/Choice:...') sebagai support: satu field formulir NETRAL terkait ('Choice: Storage Room.' -- bukan 'Choice: I think...'). vocabulary_domain (notice, warning, door, secret) muncul di bahasa target. Ekstensi opsional notice publik yang sopan ('Please keep out.') -- menggabungkan kesopanan dengan head notice, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Morning! I have something mysterious to show you today." },
      { type: "AKSI", text: "Buat suasana penasaran — berbicara perlahan dan dengan nada misterius." },
      // HOOK
      { type: "UCAP", text: "Have you ever noticed old signs or warning notices around this school?" },
      { type: "AKSI", text: "Tampilkan kartu pengumuman dan tanda dekat gudang tua: 'Keep Out', 'No Entry', 'Notice:', pintu tertutup." },
      { type: "UCAP", text: "Look at these signs near an old storage room. What do you think is behind that door?" },
    ],

    active_vocabulary: [
      "Notice:",
      "No",
      "Keep",
      "Use",
      "Warning:",
      "door",
      "secret"
    ],

    model_sentences: [
      { id: "model_1", text: "Notice: Keep this door closed." },
      { id: "model_2", text: "No entry to the secret room." },
      { id: "model_3", text: "Keep out. Use the side door only." },
      { id: "model_4", text: "Warning: Do not open. Choice: Storage Room." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Notice and sign cards near an old storage room: 'Keep Out', 'No Entry', a 'Notice:' sign, and a mysterious closed door.", description_id: "Kartu pengumuman dan tanda dekat gudang tua: 'Keep Out', 'No Entry', tanda 'Notice:', dan pintu tertutup yang misterius.", asset_id: null },
      { id: "visual_2", description: "Sign-format cards showing the four notice types: 'Notice: ...', 'No ...', 'Keep ...', 'Use ...'.", description_id: "Kartu format tanda yang menunjukkan empat jenis pengumuman: 'Notice: ...', 'No ...', 'Keep ...', 'Use ...'.", asset_id: null },
      { id: "visual_3", description: "A scene of the old, unused storage room with a closed door and a warning sign, as a motivating hook.", description_id: "Pemandangan gudang tua yang tidak terpakai dengan pintu tertutup dan tanda peringatan, sebagai pemicu motivasi.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points firmly to a posted sign while reading 'Notice: ...' / 'Warning: ...'.", description_id: "Guru menunjuk tegas ke tanda yang terpasang sambil membaca 'Notice: ...' / 'Warning: ...'." },
      { id: "gesture_2", description: "Teacher makes an X / stop gesture while reading 'No ...'.", description_id: "Guru membuat gestur X / berhenti sambil membaca 'No ...'." },
      { id: "gesture_3", description: "Teacher points to the correct door while reading 'Keep ...' / 'Use ...'.", description_id: "Guru menunjuk pintu yang benar sambil membaca 'Keep ...' / 'Use ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher read short public notices and signs in the 'Notice: ... / No ... / Keep ... / Use ...' format and match each to what it means.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-19"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice reading the notices ('Notice: ... / No ... / Keep ... / Use ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Create your own notices for the old storage room using the notice format.",
      prompt: "Use the notice formats 'Notice: [message]', 'No [thing]', 'Keep [short instruction]', and 'Use [short instruction]'. Write signs for the old storage room (notice, warning, door, secret). Keep them as short signs -- do not write a story.",
      change_target: ["notice type (Notice / No / Keep / Use)", "message"],
      differentiation: {
        easy: { task: "Choose a sign icon and complete one notice: 'No ___.', 'Keep ___.', or 'Use ___.'" },
        standard: { task: "Write two notices of different types for the old storage room." },
        challenge: { task: "Write three notices (Notice:/No.../Keep.../Use...), and add a neutral form field about the room ('Choice: Storage Room.')." }
      },
      support: { pattern_support: ["PAT-7-19"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Interpret the mysterious notices and create notices with a small group.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, look at the mysterious notice cards near the old storage room. Read each notice and match it to what it means by pointing to the right picture or action. Then write your own notices for the room using 'Notice: / No ... / Keep ... / Use ...'.",
      differentiation: {
        easy: { task: "Read one notice card and point to what it means. Then copy or complete one notice of your own." },
        standard: { task: "Match two or three notice cards to their meanings, then write two notices of your own." },
        challenge: { task: "Match all the notice cards to their meanings, then write three notices and a neutral form field about the room." }
      },
      support: { pattern_support: ["PAT-7-19"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Post and read notices for the old storage room (notice interpretation).",
      share_mode: "gallery_share",
      task: "Post your notices for the old storage room on the class wall. Walk around and read other groups' notices, matching each one to what it means.",
      differentiation: {
        easy: { task: "Post one notice and read two notices from other groups, pointing to what each means." },
        standard: { task: "Post two notices and read several others, matching each to its meaning." },
        challenge: { task: "Post your set of notices, read other groups' notices, and find one notice that matches each meaning on the wall." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students write notices in the 'Notice: ... / No ... / Keep ... / Use ...' format",
        "students keep them as short signs, not a past story or a long procedural explanation",
        "students still write a descriptive label only, or an argumentative message, instead of a notice"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to write a polite public notice ('Please keep out.').",
        needs_model: "Repeat the MODEL step, emphasizing the four notice forms (Notice: / No ... / Keep ... / Use ...).",
        needs_repeat: "Do one more round of REPEAT (choral) on the notices before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "writes a story or a long explanation instead of a short notice",
        "relies only on the written notices and cannot read a sign without reading word-by-word",
        "writes notices in the 'Notice: / No ... / Keep ... / Use ...' format accurately and confidently"
      ],
      action: [
        "recast the message slowly as a short notice ('Notice: ...', 'No ...', 'Keep ...', 'Use ...')",
        "model one more notice for a different place to show the same format still works",
        "for a student who is ready, model ONE polite public notice first -- 'Please keep out.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the notice head, not a story or an argument"
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
