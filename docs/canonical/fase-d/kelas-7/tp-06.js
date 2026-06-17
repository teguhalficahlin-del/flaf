export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-06.js",
    pattern_id: "PAT-7-06",
    title: "Healthy Snacks: Comparing Characteristics",
    short_title: "Healthy Snacks",
    grade: 7,
    genre: "Descriptive",
    cluster: "A",
    topic: "Healthy Snacks",
    context: "Students describe different snacks using connected adjectives.",
    context_id: "Siswa mendeskripsikan berbagai jajanan menggunakan kata sifat yang dihubungkan.",
    communicative_goal: "combine descriptive features with and/but",
    communicative_goal_id: "menggabungkan ciri-ciri deskriptif menggunakan and/but",
    vocabulary_domain: ["food", "taste", "texture", "health"],
    input_anchor: "food photos",
    output_anchor: "pair description",
    prerequisite_patterns: ["PAT-7-05"],
    reusable_in: ["PAT-8-06"],
    complexity_level: "Acquire",
    notes: "TP keenam Fase D, Descriptive. target_pattern PAT-7-06 = 'It is + adjective + and/but + adjective' -- ekstensi LANGSUNG dari sub-bentuk 'It is + adj' PAT-7-05 menjadi penggabungan dua sifat. model_sentences menunjukkan progresi: recap singkat PAT-7-05 ('It is an apple. It looks fresh.') sebagai support, lalu target baru 'It is [adj] and [adj]' / 'It is [adj] but [adj]'. 'and' untuk sifat yang searah, 'but' untuk kontras. Sesuai forbidden_overlap: TIDAK ada comparison ('bigger/smaller than'), TIDAK ada reasons ('because'), TIDAK ada sequencing ('first/then/finally'). vocabulary_domain (food, taste, texture, health) muncul di bahasa target: apple/snack (food), sweet/tasty (taste), crunchy (texture), healthy/fresh (health). Ekstensi opsional daftar tiga sifat ('It is fresh, sweet, and crunchy.') -- perluasan ringan di luar pola biner adj+and/but+adj -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning, friends! Are you ready to learn today?" },
      { type: "AKSI", text: "Atur kelas agar siswa fokus ke depan." },
      // HOOK
      { type: "UCAP", text: "Look at these snacks — an apple, a banana, carrot sticks, and yogurt." },
      { type: "AKSI", text: "Tunjukkan foto jajanan sehat: apel, pisang, stik wortel, dan yogurt." },
      { type: "UCAP", text: "What words can you use to describe them? Sweet? Crunchy? Fresh?" },
    ],

    active_vocabulary: [
      "It is",
      "It looks",
      "and",
      "but",
      "apple",
      "snack",
      "sweet",
      "crunchy",
      "healthy",
      "fresh",
      "tasty",
      "small"
    ],

    model_sentences: [
      { id: "model_1", text: "It is an apple. It looks fresh." },
      { id: "model_2", text: "It is sweet and crunchy." },
      { id: "model_3", text: "It is healthy but small." },
      { id: "model_4", text: "It is a snack. It is fresh and tasty." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Food photos of healthy snacks: an apple, a banana, carrot sticks, and a cup of yogurt, all looking fresh.", description_id: "Foto makanan jajanan sehat: apel, pisang, stik wortel, dan segelas yogurt, semuanya terlihat segar.", asset_id: null },
      { id: "visual_2", description: "Taste and texture icons: a sugar cube (sweet), a cracker (crunchy), a leaf (healthy/fresh), a smiling mouth (tasty).", description_id: "Ikon rasa dan tekstur: kubus gula (manis), biskuit kering (renyah), daun (sehat/segar), mulut tersenyum (lezat).", asset_id: null },
      { id: "visual_3", description: "Connector cards: an 'and' card joining two matching adjectives (sweet + crunchy), and a 'but' card joining two contrasting adjectives (healthy + small).", description_id: "Kartu penghubung: kartu 'and' yang menggabungkan dua kata sifat yang serasi (manis + renyah), dan kartu 'but' yang menggabungkan dua kata sifat yang kontras (sehat + kecil).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher holds up a food photo and points to it while saying 'It is ...'.", description_id: "Guru mengangkat foto makanan dan menunjuknya sambil mengucapkan 'It is ...'." },
      { id: "gesture_2", description: "Teacher links the fingers of both hands together while saying 'and' to join two matching features.", description_id: "Guru mengaitkan jari kedua tangan sambil mengucapkan 'and' untuk menggabungkan dua ciri yang serasi." },
      { id: "gesture_3", description: "Teacher tips one hand up and the other down (a small contrast gesture) while saying 'but' to join two contrasting features.", description_id: "Guru memiringkan satu tangan ke atas dan tangan lainnya ke bawah (gestur kontras kecil) sambil mengucapkan 'but' untuk menggabungkan dua ciri yang kontras." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher describe a snack by combining two features in one sentence with 'and' (matching features) or 'but' (contrasting features).",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-05"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the combined-feature sentences ('It is ... and/but ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Describe your own snack by combining two features with 'and' or 'but'.",
      prompt: "Use the pattern 'It is [adjective] and [adjective].' for matching features, or 'It is [adjective] but [adjective].' for contrasting features. Replace the adjectives with the features of a snack from the photos (sweet, crunchy, healthy, fresh, tasty, small).",
      change_target: ["adjective 1", "adjective 2", "connector (and/but)"],
      differentiation: {
        easy: { task: "Choose a snack photo and complete one sentence: 'It is ___ and ___.' using two adjectives from the cues." },
        standard: { task: "Write two sentences about snacks: one using 'and' ('It is ___ and ___.') and one using 'but' ('It is ___ but ___.')." },
        challenge: { task: "Write two combined-feature sentences, and add a one-line recap before them: 'It is a/an [snack]. It looks [adjective].' Keep the combined description ('It is ... and/but ...') as the main part." }
      },
      support: { pattern_support: ["PAT-7-05"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Describe your snack to a partner using combined features, and listen to your partner's description.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns describing your snack with 'It is [adjective] and/but [adjective].' Listen to your partner and notice which features they combine.",
      differentiation: {
        easy: { task: "Describe your snack using your sentence from CHANGE (you may read). Then listen to your partner's one combined-feature sentence." },
        standard: { task: "Describe your snack without reading, using one 'and' sentence and one 'but' sentence. Your partner does the same." },
        challenge: { task: "Recap first ('It is a/an [snack]. It looks [adjective].'), then give two combined-feature sentences. Your partner does the same." }
      },
      support: { pattern_support: ["PAT-7-05"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Describe your snack to a new pair using combined features.",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with another pair (not your INTERACT partner). Take turns: hold up your snack photo and describe it to the new group with 'It is [adjective] and/but [adjective].'",
      differentiation: {
        easy: { task: "Show your snack photo and say one combined-feature sentence ('It is ___ and/but ___.'). You may read it." },
        standard: { task: "Show your snack photo and describe it without reading, using one 'and' and one 'but' sentence." },
        challenge: { task: "Show your snack photo, recap with 'It is a/an [snack]. It looks [adjective].', then give two combined-feature sentences." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students combine two features in one sentence using 'It is ... and/but ...'",
        "students use 'and' for matching features and 'but' for contrasting features",
        "students still describe with one adjective only, or join features without 'and'/'but'"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to try listing three features in one sentence.",
        needs_model: "Repeat the MODEL step, emphasizing 'and' (matching) versus 'but' (contrast) as the joining words.",
        needs_repeat: "Do one more round of REPEAT (choral) on the combined-feature sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "describes with one adjective only and does not join features",
        "relies only on the written sentence and cannot describe without reading it",
        "combines two features with 'and'/'but' accurately and confidently"
      ],
      action: [
        "recast the description slowly, modeling 'It is [adjective] and/but [adjective].' as one smooth sentence",
        "model one more combined description with a different snack to show the same pattern still works",
        "for a student who is ready, model ONE three-feature list first -- 'It is fresh, sweet, and crunchy.' -- then invite that student to try it once; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it adds no comparison ('than') or reason ('because')"
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
