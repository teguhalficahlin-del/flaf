export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-05.js",
    pattern_id: "PAT-8-05",
    title: "Butterflies Around Us: Classifying Living Things",
    short_title: "Butterflies",
    grade: 8,
    genre: "Report",
    cluster: "A",
    topic: "Butterflies Around Us",
    context: "Students observe photographs of butterflies and classify them as insects while describing their common characteristics.",
    context_id: "Siswa mengamati foto kupu-kupu dan mengklasifikasikannya sebagai serangga sambil mendeskripsikan ciri-ciri umumnya.",
    communicative_goal: "classify living things using kind, use, and usual characteristics",
    communicative_goal_id: "mengklasifikasikan makhluk hidup berdasarkan jenis, kegunaan, dan ciri umum",
    vocabulary_domain: ["butterflies", "insects", "wings", "habitat"],
    input_anchor: "nature photo cards",
    output_anchor: "classification card",
    prerequisite_patterns: ["PAT-7-08"],
    reusable_in: ["PAT-8-09", "PAT-9-10"],
    complexity_level: "Expand",
    notes: "TP kelima Kelas 8 dan GENRE OPENER REPORT Kelas 8. PERGESERAN REGISTER ke FAKTUAL/OBJEKTIF/GENERALISASI (kebalikan dari Interpersonal TP-25-28). target_pattern PAT-8-05 = 'It is a kind of ... / It is used for ... / It usually ...'. DISTINGSI dari prerequisite PAT-7-08 ('It is + adj + for/to', SPESIFIK tentang 1 makhluk/benda, mis. 'It is small and busy, helpful for carrying food'): PAT-8-05 = KLASIFIKASI ke KATEGORI + fungsi/karakteristik UMUM kategori ('A butterfly is a kind of insect. It usually has colorful wings.'). Reaktivasi PAT-7-08 (WAJIB, VR-1): deskripsi SPESIFIK ala PAT-7-08 sebagai HOOK/support ('It is small and colorful.' tentang SATU kupu-kupu), lalu TRANSISI ke klasifikasi umum target. forbidden_overlap (personal description, opinion, narrative introduction): TIDAK ada 'I think/I have a pet/I like', TIDAK ada 'Once there was a butterfly...' -- murni faktual tentang KATEGORI; subjek generic ('A butterfly...', 'It usually...'). vocabulary_domain (butterflies, insects, wings, habitat) muncul di bahasa target (habitat via garden/forest). Ekstensi opsional menambah contoh anggota kategori ('It is a kind of insect, like bees and ants.') -- menjaga head klasifikasi, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. Let's begin today with something from nature." },
      { type: "AKSI", text: "Minta siswa menyimpan buku lain dan fokus ke depan." },
      // HOOK
      { type: "UCAP", text: "Have you ever seen a butterfly up close? How would you describe it?" },
      { type: "AKSI", text: "Tampilkan kartu foto alam berbagai kupu-kupu, ditambah serangga lain (lebah, semut)." },
      { type: "UCAP", text: "Look at these nature photos. What do all these creatures have in common?" },
    ],

    active_vocabulary: [
      "is a kind of",
      "is used for",
      "usually",
      "butterfly",
      "insect",
      "wings",
      "garden",
      "forest"
    ],

    model_sentences: [
      { id: "model_1", text: "It is small and colorful. It is helpful for the garden." },
      { id: "model_2", text: "A butterfly is a kind of insect. It usually has colorful wings." },
      { id: "model_3", text: "Its wings are used for flying." },
      { id: "model_4", text: "It usually lives in gardens and forests." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Nature photo cards of different butterflies, plus other insects (bees, ants) for the category 'insect'.", description_id: "Kartu foto alam berbagai kupu-kupu, ditambah serangga lain (lebah, semut) untuk kategori 'serangga'.", asset_id: null },
      { id: "visual_2", description: "A classification card with three slots: 'is a kind of ___', 'is used for ___', 'usually ___'.", description_id: "Kartu klasifikasi dengan tiga slot: 'is a kind of ___', 'is used for ___', 'usually ___'.", asset_id: null },
      { id: "visual_3", description: "Habitat icons: a garden and a forest where butterflies usually live.", description_id: "Ikon habitat: taman dan hutan tempat kupu-kupu biasanya hidup.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to one butterfly photo, then sweeps to a group of insects, to show classifying into a category ('is a kind of').", description_id: "Guru menunjuk satu foto kupu-kupu, lalu menyapu ke sekelompok serangga, untuk menunjukkan pengklasifikasian ke dalam kategori ('is a kind of')." },
      { id: "gesture_2", description: "Teacher mimes the use of a feature (wings flapping for flying) while saying 'is used for ...'.", description_id: "Guru memperagakan penggunaan suatu ciri (sayap mengepak untuk terbang) sambil mengucapkan 'is used for ...'." },
      { id: "gesture_3", description: "Teacher makes a wide, general sweep while saying 'It usually ...' to show a typical characteristic.", description_id: "Guru membuat gerakan menyapu yang luas dan umum sambil mengucapkan 'It usually ...' untuk menunjukkan ciri khas." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher move from a specific description of one butterfly to a general classification ('It is a kind of ... / It is used for ... / It usually ...').",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-08"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the classification sentences ('It is a kind of ... / It is used for ... / It usually ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Classify a living thing by replacing the category, use, and usual characteristic.",
      prompt: "Use the patterns 'A [thing] is a kind of [category].', 'Its [part] is used for [function].', and 'It usually [general characteristic].' Classify a butterfly or another animal from the cards. Keep it factual about the category -- no 'I think', no 'I have a pet', no story.",
      change_target: ["category (is a kind of ...)", "use (is used for ...)", "usual characteristic (usually ...)"],
      differentiation: {
        easy: { task: "Choose a nature card and complete: 'A ___ is a kind of ___. It usually ___.'" },
        standard: { task: "Write three classification sentences about your animal: one 'is a kind of', one 'is used for', one 'usually'." },
        challenge: { task: "Start with a one-line specific description ('It is small and colorful.'), then give your three general classification sentences." }
      },
      support: { pattern_support: ["PAT-7-08"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Compare classification cards with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns reading your classification ('It is a kind of ... It usually ...') while your partner checks the card has a category, a use, and a usual characteristic. Then swap.",
      differentiation: {
        easy: { task: "Read two classification sentences to your partner; your partner names the category. Then swap." },
        standard: { task: "Read your three classification sentences without reading word-by-word; your partner checks all three slots. Then swap." },
        challenge: { task: "Give a specific description first, then your classification; your partner adds one more usual characteristic. Then swap." }
      },
      support: { pattern_support: ["PAT-7-08"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your classification card to a new group (classification card).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting your classification card ('It is a kind of ... It is used for ... It usually ...').",
      differentiation: {
        easy: { task: "Present two classification sentences to the new group. You may read them." },
        standard: { task: "Present your full classification (category, use, usual characteristic) without reading." },
        challenge: { task: "Present your classification, then answer one question about the category from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students classify with 'It is a kind of ...', 'It is used for ...', and 'It usually ...'",
        "students keep it factual about the category (general 'It usually ...'), not a personal or story statement",
        "students still slip into 'I think ... / I have a ... / Once there was ...' instead of a factual classification"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add an example of another member of the category.",
        needs_model: "Repeat the MODEL step, emphasizing 'is a kind of', 'is used for', and 'usually' as factual category language.",
        needs_repeat: "Do one more round of REPEAT (choral) on the classification sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "describes only one specific thing or slips into 'I think / I have / Once there was'",
        "relies only on the written card and cannot classify without reading",
        "classifies with 'is a kind of / is used for / usually' accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling the move from a specific thing to a general category ('is a kind of ... usually ...')",
        "model one more classification of a different living thing to show the same pattern still works",
        "for a student who is ready, model ONE classification that adds category examples first -- 'A butterfly is a kind of insect, like bees and ants.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the factual classification head, with no opinion or story"
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
