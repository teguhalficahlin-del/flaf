export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-07.js",
    pattern_id: "PAT-7-07",
    title: "Neighborhood Park: Describing Places",
    short_title: "Neighborhood Park",
    grade: 7,
    genre: "Descriptive",
    cluster: "B",
    topic: "Neighborhood Park",
    context: "Students explore a simple map or picture and describe what exists in the park.",
    context_id: "Siswa menjelajahi peta atau gambar sederhana dan mendeskripsikan apa yang ada di taman.",
    communicative_goal: "describe locations using there is/there are expressions",
    communicative_goal_id: "mendeskripsikan lokasi menggunakan ungkapan there is/there are",
    vocabulary_domain: ["park", "trees", "playground", "facilities"],
    input_anchor: "park map",
    output_anchor: "map description",
    prerequisite_patterns: ["PAT-7-05", "PAT-7-06"],
    reusable_in: ["PAT-8-05", "PAT-8-24"],
    complexity_level: "Acquire",
    notes: "TP ketujuh Fase D, Descriptive. target_pattern PAT-7-07 = 'There is / There are + noun + place expression'. PENTING: 'There is' DAN 'There are' KEDUANYA adalah target (bukan salah satu di BOOST) -- keduanya dimodelkan sejak MODEL, dilatih di REPEAT, diproduksi di CHANGE, dipakai di INTERACT/SHARE pada level manapun. 'There is' untuk satu benda, 'There are' untuk lebih dari satu. PAT-7-05/06 sebagai support: setelah menyebut eksistensi+lokasi, benda yang sama boleh diberi deskripsi singkat 'It is [adj] and [adj]' (pola 'introduce lalu describe', mis. 'There is a pond in the park. It is clean and quiet.'). Sesuai forbidden_overlap: TIDAK ada arah ('turn left', 'go straight' -- giving directions), TIDAK ada langkah prosedural ('first/then'), TIDAK ada narasi lampau. vocabulary_domain (park, trees, playground, facilities) muncul di bahasa target: park, trees, playground, dan facilities direalisasikan via benches/toilets/pond. Ekstensi opsional eksistensi negatif ('There isn't / There aren't') -- di luar empat bentuk afirmatif target -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Hello, everyone! Great to see you all here." },
      { type: "AKSI", text: "Minta siswa menyimpan benda-benda di meja agar fokus." },
      // HOOK
      { type: "UCAP", text: "Have you ever been to a park? What did you see there?" },
      { type: "AKSI", text: "Tampilkan peta taman sederhana dengan area bermain, pohon, kolam, bangku, dan toilet." },
      { type: "UCAP", text: "Look at this park map. What can you find in this park?" },
    ],

    active_vocabulary: [
      "There is",
      "There are",
      "in",
      "near",
      "park",
      "playground",
      "trees",
      "pond",
      "benches",
      "toilets"
    ],

    model_sentences: [
      { id: "model_1", text: "There is a playground in the park." },
      { id: "model_2", text: "There are tall trees near the playground." },
      { id: "model_3", text: "There is a pond in the park. It is clean and quiet." },
      { id: "model_4", text: "There are benches and toilets in the park." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A simple park map showing a playground, several trees, a pond, benches, and toilets, each marked with a small labeled icon.", description_id: "Peta taman sederhana yang menunjukkan area bermain, beberapa pohon, kolam, bangku, dan toilet, masing-masing ditandai dengan ikon kecil berlabel.", asset_id: null },
      { id: "visual_2", description: "Place-expression cards with arrows: 'in the park', 'near the playground', 'next to the pond'.", description_id: "Kartu ungkapan tempat dengan tanda panah: 'in the park', 'near the playground', 'next to the pond'.", asset_id: null },
      { id: "visual_3", description: "A one-versus-many card: one bench (for 'There is') and three benches (for 'There are').", description_id: "Kartu satu-versus-banyak: satu bangku (untuk 'There is') dan tiga bangku (untuk 'There are').", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to a single item on the map with one finger while saying 'There is ...'.", description_id: "Guru menunjuk satu benda di peta dengan satu jari sambil mengucapkan 'There is ...'." },
      { id: "gesture_2", description: "Teacher sweeps an open hand across several items on the map while saying 'There are ...'.", description_id: "Guru menyapukan tangan terbuka melintasi beberapa benda di peta sambil mengucapkan 'There are ...'." },
      { id: "gesture_3", description: "Teacher taps the location on the map while saying the place expression ('in the park', 'near the playground').", description_id: "Guru menepuk lokasi di peta sambil mengucapkan ungkapan tempatnya ('in the park', 'near the playground')." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher describe what exists in a park using 'There is ...' for one thing and 'There are ...' for more than one, each with a place expression.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-05", "PAT-7-06"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the 'There is ...' and 'There are ...' sentences with place expressions together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Describe the park map by replacing the things and their places, choosing 'There is' or 'There are'.",
      prompt: "Use 'There is [one thing] [place expression].' for a single thing, or 'There are [things] [place expression].' for more than one. Replace the things with what you see on the park map (playground, trees, pond, benches, toilets) and the place with 'in the park' or 'near the playground'.",
      change_target: ["thing (There is / There are ...)", "place expression"],
      differentiation: {
        easy: { task: "Choose one thing on the map and complete: 'There is ___ in the park.' or 'There are ___ in the park.'" },
        standard: { task: "Write two sentences -- one 'There is ...' (a single thing) and one 'There are ...' (more than one thing) -- each with a place expression." },
        challenge: { task: "Write two existence sentences, then add a short description of one thing: 'There is a pond in the park. It is clean and quiet.'" }
      },
      support: { pattern_support: ["PAT-7-05", "PAT-7-06"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Describe the park map to a partner using 'There is / There are' and place expressions.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns describing what is in the park ('There is ... / There are ... [place]'). Listen to your partner and point to each thing on the map as they describe it.",
      differentiation: {
        easy: { task: "Describe two things using your sentences from CHANGE (you may read). Your partner points to each thing on the map." },
        standard: { task: "Describe at least three things without reading, using both 'There is' and 'There are' with place expressions." },
        challenge: { task: "Describe the park, and for one thing add a short description ('There is a pond in the park. It is clean and quiet.'). Your partner does the same." }
      },
      support: { pattern_support: ["PAT-7-05", "PAT-7-06"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Describe your park map to a new group (map description).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns: show the park map and describe it to the group using 'There is ... / There are ... [place]'.",
      differentiation: {
        easy: { task: "Show the map and say two existence sentences ('There is/are ... in the park.'). You may read them." },
        standard: { task: "Show the map and describe at least three things without reading, using both 'There is' and 'There are'." },
        challenge: { task: "Show the map, describe several things, and add a short description ('It is clean and quiet.') for one of them." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students use 'There is ...' for one thing and 'There are ...' for more than one",
        "students add a place expression ('in the park', 'near the playground') to each sentence",
        "students still use 'There is' for plural things, or leave out the place expression"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to try a negative existence sentence ('There isn't / There aren't ...').",
        needs_model: "Repeat the MODEL step, emphasizing 'There is' (one) versus 'There are' (more than one) and the place expression.",
        needs_repeat: "Do one more round of REPEAT (choral) on the 'There is/are' sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "uses 'There is' for plural things or leaves out the place expression",
        "relies only on the written sentences and cannot describe the map without reading",
        "uses both 'There is' and 'There are' with place expressions accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling 'There is ...' (one) versus 'There are ...' (more than one) with the place expression",
        "model one more existence sentence about a different place to show the same pattern still works",
        "for a student who is ready, model ONE negative existence sentence first -- 'There isn't a swimming pool in the park. There aren't any shops near the playground.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it adds no directions ('turn left') or steps ('first/then')"
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
