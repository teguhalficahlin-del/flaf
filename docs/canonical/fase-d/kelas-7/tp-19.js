export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-19.js",
    pattern_id: "PAT-7-19",
    title: "Library Membership: Completing Forms",
    short_title: "Library Form",
    grade: 7,
    genre: "Functional",
    cluster: "B",
    topic: "Library Membership",
    context: "Students complete and exchange simple membership forms before borrowing books.",
    context_id: "Siswa mengisi dan menukar formulir keanggotaan sederhana sebelum meminjam buku.",
    communicative_goal: "fill in and understand basic personal information forms",
    communicative_goal_id: "mengisi dan memahami formulir informasi pribadi dasar",
    vocabulary_domain: ["name", "address", "class", "membership"],
    input_anchor: "membership form",
    output_anchor: "completed form",
    prerequisite_patterns: ["PAT-7-18"],
    reusable_in: ["PAT-8-21", "PAT-8-24"],
    complexity_level: "Acquire",
    notes: "TP kesembilan belas Fase D, Functional. target_pattern PAT-7-19 = 'Name: ... / Class: ... / Number: ... / Choice: ...' -- FORMAT FORMULIR 'Label: [isi]' (lanjutan register fragmen dari PAT-7-18). DISTINGSI PENTING dari forbidden_overlap 'self-introduction': ini FORMAT FIELD FORMULIR ('Name: [X]'), BUKAN kalimat personal 'I am [X]' / 'My name is [X]' (PAT-7-01). JANGAN paragraf deskriptif, JANGAN tulisan naratif. PAT-7-18 ('Time/Date+event+place') sebagai support: satu field formulir yang memuat info jadwal ('Visit Time: Monday, 3 p.m.'). vocabulary_domain (name, address, class, membership) muncul di bahasa target sebagai label field. 'Choice:' direalisasikan via field pilihan konkret ('Favorite Club:'). Ekstensi opsional menambah satu field relevan ('Email: ...') dengan format 'Label: [isi]' yang sama -- menjaga head format formulir, bukan kalimat perkenalan -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning! I have some paperwork for us today — in English." },
      { type: "AKSI", text: "Bagi setiap siswa formulir kosong atau gambar formulir sebelum memulai." },
      // HOOK
      { type: "UCAP", text: "Have you ever filled in a form before — maybe for a library, a competition, or a school event?" },
      { type: "AKSI", text: "Tampilkan formulir keanggotaan perpustakaan kosong dengan kolom berlabel: Name, Class, Address." },
      { type: "UCAP", text: "Look at this membership form. What information do you need to fill in?" },
    ],

    active_vocabulary: [
      "Name:",
      "Class:",
      "Number:",
      "Address:",
      "Membership:",
      "Favorite Club:"
    ],

    model_sentences: [
      { id: "model_1", text: "Name: Andi Saputra" },
      { id: "model_2", text: "Class: 7A. Number: 12" },
      { id: "model_3", text: "Address: Jalan Melati No. 5" },
      { id: "model_4", text: "Membership: New Member. Favorite Club: Science Club. Visit Time: Monday, 3 p.m." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A blank library membership form with labeled fields: Name, Class, Number, Address, Membership, Favorite Club.", description_id: "Formulir keanggotaan perpustakaan kosong dengan kolom berlabel: Name, Class, Number, Address, Membership, Favorite Club.", asset_id: null },
      { id: "visual_2", description: "A sample completed form showing the 'Label: value' format for each field.", description_id: "Contoh formulir terisi yang menunjukkan format 'Label: value' untuk setiap kolom.", asset_id: null },
      { id: "visual_3", description: "A library borrowing context: a membership card and a stack of books at the desk.", description_id: "Konteks peminjaman perpustakaan: kartu anggota dan tumpukan buku di meja.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to each form label in turn while reading 'Name: ... Class: ... Number: ...'.", description_id: "Guru menunjuk setiap label formulir secara bergantian sambil membaca 'Name: ... Class: ... Number: ...'." },
      { id: "gesture_2", description: "Teacher mimes writing the value in the blank space after a label.", description_id: "Guru memperagakan menulis nilai di ruang kosong setelah sebuah label." },
      { id: "gesture_3", description: "Teacher points to the field that carries schedule information ('Visit Time: Monday, 3 p.m.').", description_id: "Guru menunjuk kolom yang membawa informasi jadwal ('Visit Time: Monday, 3 p.m.')." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher complete a library membership form in 'Label: value' format, including one field that carries schedule information.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-18"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice reading the form fields ('Name: ... / Class: ... / ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Fill in your own membership form by completing each field in 'Label: value' format.",
      prompt: "Complete each field as 'Label: value', e.g. 'Name: ___', 'Class: ___', 'Number: ___', 'Favorite Club: ___'. Write only the field and its value -- do not write 'I am ...' or full sentences.",
      change_target: ["field values (Name / Class / Number / Address / Membership / Favorite Club)"],
      differentiation: {
        easy: { task: "Complete three fields: 'Name: ___ Class: ___ Number: ___.'" },
        standard: { task: "Complete the whole form: Name, Class, Number, Address, Membership, Favorite Club." },
        challenge: { task: "Complete the form and add a field that carries schedule information: 'Visit Time: [day], [time].'" }
      },
      support: { pattern_support: ["PAT-7-18"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Exchange forms with a partner and read each other's information.",
      interaction_mode: "pair",
      task: "Find a partner. Swap your completed forms. Take turns reading your partner's fields aloud ('Name: ... Class: ... Favorite Club: ...'). Check that each field has a value.",
      differentiation: {
        easy: { task: "Read three of your partner's fields aloud ('Name: ... Class: ... Number: ...')." },
        standard: { task: "Read all of your partner's fields aloud, then tell the group one fact from the form (e.g. their favorite club)." },
        challenge: { task: "Read your partner's full form, including the schedule field, and check no field is empty." }
      },
      support: { pattern_support: ["PAT-7-18"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present a completed form to a new group (completed form).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting a completed form by reading its fields ('Label: value'). The group checks that all the fields are filled in.",
      differentiation: {
        easy: { task: "Read three fields of a completed form to the new group." },
        standard: { task: "Read all the fields of a completed form to the group." },
        challenge: { task: "Read the full form including the schedule field, and answer one question from the group about a field." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students complete each field in 'Label: value' format",
        "students keep it as form fields, not as 'I am ...' / 'My name is ...' sentences or a descriptive paragraph",
        "students still rewrite the fields as full self-introduction sentences"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add one more relevant field in the same format.",
        needs_model: "Repeat the MODEL step, emphasizing the 'Label: value' format of each field.",
        needs_repeat: "Do one more round of REPEAT (choral) reading the form fields before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "rewrites a field as a full sentence ('I am ...', 'My name is ...') or a paragraph",
        "relies only on the written form and cannot read the fields without reading word-by-word",
        "completes and reads form fields in 'Label: value' format accurately and confidently"
      ],
      action: [
        "recast the field slowly, modeling 'Label: value' (e.g. 'Name: ...') instead of a full sentence",
        "model one more form field to show the same format still works",
        "for a student who is ready, model ONE extra relevant field first -- 'Email: andi@email.com' -- then invite that student to add one field of their own; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the 'Label: value' form format, not a self-introduction sentence"
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
