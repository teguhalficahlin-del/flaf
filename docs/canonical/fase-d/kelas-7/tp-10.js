export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-10.js",
    pattern_id: "PAT-7-10",
    title: "Cooking Together: Giving Simple Instructions",
    short_title: "Cooking Together",
    grade: 7,
    genre: "Procedure",
    cluster: "A",
    topic: "Simple Cooking",
    context: "Students guide a friend through preparing a simple snack using short action commands.",
    context_id: "Siswa membimbing seorang teman menyiapkan jajanan sederhana menggunakan perintah tindakan singkat.",
    communicative_goal: "give action instructions with object and place/time information",
    communicative_goal_id: "memberikan instruksi tindakan dengan informasi objek serta tempat/waktu",
    vocabulary_domain: ["kitchen", "ingredients", "utensils", "actions"],
    input_anchor: "recipe picture cards",
    output_anchor: "pair instruction game",
    prerequisite_patterns: ["PAT-7-09", "PAT-7-06"],
    reusable_in: ["PAT-8-10", "PAT-9-08"],
    complexity_level: "Acquire",
    notes: "TP kesepuluh Fase D, Procedure. target_pattern PAT-7-10 = 'Verb + object + place / time expression' -- instruksi aksi yang jelas dengan informasi konteks. PAT-7-09 ('First,...Then,...Finally,...') sebagai support: bingkai sequencing untuk merangkai beberapa instruksi. PAT-7-06 ('It is+adj and/but adj') sebagai support: deskripsi singkat satu bahan/alat ('The bread is soft and fresh.'). Sesuai forbidden_overlap: TIDAK ada 'Let's...' (invitations -- PAT-7-03 bukan target di sini), TIDAK ada 'I think/I like' (opinions), dan place expression WAJIB menempel pada AKSI imperatif (Verb+object+PLACE, mis. 'Put the bread on the plate.') -- BUKAN kalimat eksistensial 'There is...[place]' (describing locations -- PAT-7-07 bukan target di sini). vocabulary_domain (kitchen, ingredients, utensils, actions) muncul di bahasa target: kitchen, bread/butter (ingredients), plate/knife (utensils), put/spread/cut (actions). Ekstensi opsional menambah DUA detail (place + time) pada satu instruksi ('Cut the bread on the board before lunch.') -- menjaga head pattern imperatif Verb+object -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning! Let's get cooking — well, almost." },
      { type: "AKSI", text: "Pastikan meja bersih dan siswa siap memulai." },
      // HOOK
      { type: "UCAP", text: "Has anyone ever helped make a snack at home? What did you do?" },
      { type: "AKSI", text: "Tunjukkan kartu bergambar resep sandwich: roti, mentega, piring, dan pisau." },
      { type: "UCAP", text: "Look at these recipe cards. What do you think we are going to make today?" },
    ],

    active_vocabulary: [
      "Put",
      "Spread",
      "Cut",
      "on",
      "in",
      "before",
      "bread",
      "butter",
      "plate",
      "knife",
      "kitchen"
    ],

    model_sentences: [
      { id: "model_1", text: "The bread is soft and fresh." },
      { id: "model_2", text: "Put the bread on the plate." },
      { id: "model_3", text: "Spread the butter on the bread." },
      { id: "model_4", text: "First, wash the knife in the kitchen. Then, cut the bread before lunch." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Recipe picture cards showing the steps to make a simple snack (a sandwich): bread, butter, a plate, and a knife.", description_id: "Kartu bergambar resep yang menunjukkan langkah membuat jajanan sederhana (sandwich): roti, mentega, piring, dan pisau.", asset_id: null },
      { id: "visual_2", description: "Action icons with arrows to objects: put, spread, cut, wash.", description_id: "Ikon tindakan dengan tanda panah ke benda: put, spread, cut, wash.", asset_id: null },
      { id: "visual_3", description: "Place and time cards: 'on the plate', 'in the kitchen', 'before lunch'.", description_id: "Kartu tempat dan waktu: 'on the plate', 'in the kitchen', 'before lunch'.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher mimes the action (putting, spreading, cutting) while saying the imperative verb.", description_id: "Guru memperagakan tindakannya (meletakkan, mengoleskan, memotong) sambil mengucapkan kata kerja imperatifnya." },
      { id: "gesture_2", description: "Teacher points to the place (the plate, the kitchen) while saying the place expression.", description_id: "Guru menunjuk tempatnya (piring, dapur) sambil mengucapkan ungkapan tempatnya." },
      { id: "gesture_3", description: "Teacher taps a clock or points to a time card while saying the time expression ('before lunch').", description_id: "Guru menepuk jam atau menunjuk kartu waktu sambil mengucapkan ungkapan waktunya ('before lunch')." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher give clear cooking instructions with 'Verb + object + place/time', after a short description of an ingredient and within a simple sequence.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-09", "PAT-7-06"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the action instructions ('Verb + object + place/time') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Give your own cooking instructions by replacing the verb, object, and place/time.",
      prompt: "Use the pattern 'Verb + object + place/time', e.g. 'Put the [object] on the [place].' or 'Cut the [object] before [time].' Replace the words with items from the recipe cards (bread, butter, plate, knife, kitchen).",
      change_target: ["action verb", "object", "place/time expression"],
      differentiation: {
        easy: { task: "Choose a recipe card and complete one instruction: '[Verb] the ___ on/in the ___.'" },
        standard: { task: "Write two instructions, each with an action verb, an object, and a place or time ('Put the bread on the plate.', 'Cut the bread before lunch.')." },
        challenge: { task: "Write a short three-step recipe with 'First, ... Then, ... Finally, ...' (each step a 'Verb + object + place/time' instruction), and add one description: 'The [ingredient] is [adjective] and [adjective].'" }
      },
      support: { pattern_support: ["PAT-7-09", "PAT-7-06"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Play a pair instruction game: give instructions and follow your partner's instructions.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: one gives an instruction ('Verb + object + place/time'), and the other acts it out or points to the right card. Then swap roles.",
      differentiation: {
        easy: { task: "Give one instruction; your partner points to the right recipe card. Then swap." },
        standard: { task: "Give three instructions in order ('First, ... Then, ... Finally, ...'); your partner acts them out in order. Then swap." },
        challenge: { task: "Give your full mini-recipe (sequence of instructions plus one description); your partner follows and points to each card. Then swap." }
      },
      support: { pattern_support: ["PAT-7-09", "PAT-7-06"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Give your mini-recipe instructions to a new group for them to follow.",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns: give your instructions ('Verb + object + place/time') while the group mimes or points to the cards in order.",
      differentiation: {
        easy: { task: "Give two instructions; the group points to the matching cards. You may read." },
        standard: { task: "Give your three-step recipe ('First, ... Then, ... Finally, ...') without reading; the group acts it out." },
        challenge: { task: "Give your full mini-recipe with one description, and check that the group follows each step correctly." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students give instructions with 'Verb + object + place/time'",
        "students attach the place/time to the action (e.g. 'on the plate', 'before lunch'), not as a separate 'There is ...' sentence",
        "students still leave out the object or the place/time, or use 'Let's ...' or 'I think ...' instead of an instruction"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add both a place and a time to one instruction.",
        needs_model: "Repeat the MODEL step, emphasizing 'Verb + object + place/time' as one instruction.",
        needs_repeat: "Do one more round of REPEAT (choral) on the instructions before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "leaves out the object or the place/time in an instruction",
        "relies only on the written instructions and cannot give them without reading",
        "gives 'Verb + object + place/time' instructions accurately and confidently"
      ],
      action: [
        "recast the instruction slowly, modeling 'Verb + object + place/time' as one clear command",
        "model one more instruction with a different object to show the same pattern still works",
        "for a student who is ready, model ONE instruction with both a place and a time first -- 'Cut the bread on the board before lunch.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the imperative head (Verb + object), with no 'Let's' or opinion"
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
