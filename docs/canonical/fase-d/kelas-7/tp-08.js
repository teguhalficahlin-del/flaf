export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-08.js",
    pattern_id: "PAT-7-08",
    title: "Amazing Insects: Describing Function",
    short_title: "Amazing Insects",
    grade: 7,
    genre: "Descriptive",
    cluster: "B",
    topic: "Insects Around Us",
    context: "Students observe pictures of common insects and describe their characteristics and simple functions.",
    context_id: "Siswa mengamati gambar serangga umum dan mendeskripsikan ciri-ciri serta fungsi sederhananya.",
    communicative_goal: "connect characteristics with simple functions using for/to expressions",
    communicative_goal_id: "menghubungkan ciri-ciri dengan fungsi sederhana menggunakan ungkapan for/to",
    vocabulary_domain: ["insects", "body parts", "habitats", "functions"],
    input_anchor: "nature photo cards",
    output_anchor: "mini description card",
    prerequisite_patterns: ["PAT-7-05", "PAT-7-06", "PAT-7-07"],
    reusable_in: ["PAT-8-05", "PAT-8-07"],
    complexity_level: "Acquire",
    notes: "TP kedelapan Fase D, Descriptive, menutup genre Descriptive Kelas 7. target_pattern PAT-7-08 = 'It is + adjective + for + noun / to + verb' -- menggabungkan sifat dengan fungsi/tujuan sederhana. Tiga prerequisite (PAT-7-05/06/07) di-chain secara alami: 'There is a/an [insect] in the [habitat] (07). It is [adj] and [adj] (05+06). It is useful/helpful for/to [function] (08, BARU).' Sesuai forbidden_overlap 'explanation of cause-effect': klausa 'for [noun] / to [verb]' WAJIB berdiri sebagai PERNYATAAN FUNGSI/TUJUAN MANDIRI -- TIDAK diikuti 'because' (akan menggeser ke cause-effect/wilayah PAT-7-04). TIDAK ada langkah prosedural, TIDAK ada argumentasi. vocabulary_domain (insects, body parts, habitats, functions) muncul di bahasa target: ant/bee (insects), legs (body parts), garden (habitats), serta fungsi carrying food/make honey (functions). Ekstensi opsional 'It has [body part] to [verb]' (fungsi yang dikaitkan ke bagian tubuh, mis. 'It has wings to fly.') -- di luar frame 'It is + adj' target -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning! Eyes up front, please." },
      { type: "AKSI", text: "Tunggu kelas tenang dan perhatian terfokus ke depan." },
      // HOOK
      { type: "UCAP", text: "Can you name any small animals that live near flowers or in gardens?" },
      { type: "AKSI", text: "Tunjukkan kartu foto alam serangga: semut, lebah, kupu-kupu, kepik di habitatnya." },
      { type: "UCAP", text: "Look at these insects. Do you know what they are good for?" },
    ],

    active_vocabulary: [
      "It is",
      "for",
      "to",
      "useful",
      "helpful",
      "important",
      "ant",
      "bee",
      "legs",
      "garden",
      "honey"
    ],

    model_sentences: [
      { id: "model_1", text: "There is an ant in the garden. It is small and busy." },
      { id: "model_2", text: "It has strong legs. It is helpful for carrying food." },
      { id: "model_3", text: "There is a bee on the flower. It is useful for the garden." },
      { id: "model_4", text: "It is important to make honey." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Nature photo cards of common insects in their habitats: an ant in the garden, a bee on a flower, a butterfly on a leaf, a ladybug on a plant.", description_id: "Kartu foto alam serangga umum di habitatnya: semut di taman, lebah di bunga, kupu-kupu di daun, kepik di tanaman.", asset_id: null },
      { id: "visual_2", description: "Body-part icons (legs, wings, antennae) and habitat icons (garden, flower, leaf) for describing the insects.", description_id: "Ikon bagian tubuh (kaki, sayap, antena) dan ikon habitat (taman, bunga, daun) untuk mendeskripsikan serangga.", asset_id: null },
      { id: "visual_3", description: "Function cards: an ant carrying food, a bee making honey, showing 'helpful for ... / important to ...'.", description_id: "Kartu fungsi: semut membawa makanan, lebah membuat madu, menunjukkan 'helpful for ... / important to ...'.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to an insect photo while saying the adjective in 'It is ...'.", description_id: "Guru menunjuk foto serangga sambil mengucapkan kata sifat dalam 'It is ...'." },
      { id: "gesture_2", description: "Teacher mimes the function (walking fingers for carrying food, a circling hand for making honey) while saying 'for ... / to ...'.", description_id: "Guru memperagakan fungsinya (jari berjalan untuk membawa makanan, tangan berputar untuk membuat madu) sambil mengucapkan 'for ... / to ...'." },
      { id: "gesture_3", description: "Teacher points to a body part on the card while saying 'It has ...' as support before the function.", description_id: "Guru menunjuk bagian tubuh pada kartu sambil mengucapkan 'It has ...' sebagai pendukung sebelum fungsinya." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher describe an insect's characteristics and then its simple function with 'It is [adjective] for [noun] / to [verb]'.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-05", "PAT-7-06", "PAT-7-07"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the function sentences ('It is ... for ... / to ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Describe an insect's function by replacing the adjective and the function (for + noun / to + verb).",
      prompt: "Use the pattern 'It is [adjective] for [noun].' or 'It is [adjective] to [verb].' Replace the adjective with useful, helpful, or important, and add a simple function (for the garden, for carrying food, to make honey). Do not add 'because'.",
      change_target: ["adjective", "function (for + noun / to + verb)"],
      differentiation: {
        easy: { task: "Choose an insect card and complete one sentence: 'It is ___ for ___.' or 'It is ___ to ___.' using words from the cues." },
        standard: { task: "Write two sentences about your insect: one 'It is [adjective] for [noun].' and one 'It is [adjective] to [verb].'" },
        challenge: { task: "Write a short chain: 'There is a/an [insect] in the [habitat]. It is [adjective] and [adjective]. It is useful/helpful for [noun] / to [verb].' Keep the function sentence as the main new part." }
      },
      support: { pattern_support: ["PAT-7-05", "PAT-7-06", "PAT-7-07"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Describe your insect's characteristics and function to a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns describing your insect, ending with its function: 'It is [adjective] for [noun] / to [verb].' Listen to your partner and notice the function they describe.",
      differentiation: {
        easy: { task: "Describe your insect using your function sentence from CHANGE (you may read). Your partner describes their insect's function too." },
        standard: { task: "Describe your insect without reading, using one 'for [noun]' function and one 'to [verb]' function. Your partner does the same." },
        challenge: { task: "Give the short chain ('There is a/an [insect] in the [habitat]. It is [adjective] and [adjective]. It is useful/helpful for/to [function].'). Your partner does the same." }
      },
      support: { pattern_support: ["PAT-7-05", "PAT-7-06", "PAT-7-07"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Make a mini description card for one insect and share it with a new group.",
      share_mode: "mini_presentation",
      task: "Make a mini description card for one insect (a small card with your sentences). Form a group of 4 with classmates you did not work with in INTERACT, and take turns showing your card and reading it, ending with the function ('It is [adjective] for [noun] / to [verb].').",
      differentiation: {
        easy: { task: "Make a card with one function sentence ('It is ___ for/to ___.') and read it to the group. You may include a small drawing." },
        standard: { task: "Make a card with two or three sentences about your insect, ending with a function sentence, and read it to the group without re-reading every word." },
        challenge: { task: "Make a card with the short chain (exist -> describe -> function) and present it to the group, then listen and point to the function on a classmate's card." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students describe an insect's function with 'It is [adjective] for [noun] / to [verb]'",
        "students keep the function as a simple statement of purpose, without adding 'because'",
        "students still give only an adjective without a function, or attach a long explanation"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to link a body part to a function ('It has wings to fly.').",
        needs_model: "Repeat the MODEL step, emphasizing 'It is [adjective] for [noun] / to [verb]' as one purpose statement.",
        needs_repeat: "Do one more round of REPEAT (choral) on the function sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives only an adjective without a function",
        "relies only on the written card and cannot describe the function without reading it",
        "describes characteristics and function with 'It is ... for/to ...' accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling 'It is [adjective] for [noun] / to [verb]' as one purpose statement",
        "model one more function with a different insect to show the same pattern still works",
        "for a student who is ready, model ONE body-part-to-function sentence first -- 'It has wings to fly. It has legs to climb.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it stays a purpose statement, with no 'because' or cause-effect explanation"
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
