export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-05.js",
    pattern_id: "PAT-7-05",
    title: "My Pet: Describing Basic Characteristics",
    short_title: "Describing a Pet",
    grade: 7,
    genre: "Descriptive",
    cluster: "A",
    topic: "Pets",
    context: "Students introduce and describe their favorite pet or an animal from picture cards.",
    context_id: "Siswa memperkenalkan dan mendeskripsikan hewan peliharaan favorit mereka atau hewan dari kartu bergambar.",
    communicative_goal: "describe basic characteristics using simple adjectives and noun phrases",
    communicative_goal_id: "mendeskripsikan ciri-ciri dasar menggunakan kata sifat dan frasa benda sederhana",
    vocabulary_domain: ["animals", "colors", "size", "appearance"],
    input_anchor: "animal picture cards",
    output_anchor: "show and tell",
    prerequisite_patterns: ["PAT-7-01", "PAT-7-04"],
    reusable_in: ["PAT-8-05"],
    complexity_level: "Acquire",
    notes: "TP kelima Fase D dan TP DESCRIPTIVE PERTAMA. Fokus bergeser dari pertukaran interpersonal ke MENDESKRIPSIKAN entitas pihak ketiga dengan subjek 'It': target_pattern PAT-7-05 = 'It is / It has / It looks + adjective/noun phrase'. Ketiga bentuk ini adalah TARGET (bukan ekstensi), maka dimodelkan sejak MODEL. Catatan tension: forbidden_overlap PAT-7-05 (introducing self, expressing opinions, giving instructions) justru menyentuh kedua prerequisite-nya (PAT-7-01 = introducing self; PAT-7-04 = expressing opinions). Resolusi: keduanya muncul HANYA sebagai support singkat/transisi, bukan fokus aktivitas. PAT-7-01 = LEAD-IN satu baris sebelum deskripsi ('I have a pet rabbit. I like my pet. It is small and white.'); PAT-7-04 = RESPONS PENDENGAR yang reaktif terhadap deskripsi siswa lain ('I think it looks friendly because it has long ears. That's true!'), bukan opini yang dikembangkan sebagai topik baru. OUTPUT WAJIB setiap siswa di CHANGE/INTERACT/SHARE tetap deskripsi 'It is/has/looks...'; lead-in dan respons hanya pelengkap singkat. Ekstensi opsional 'They are.../They have...' (number-shift jamak di luar target 'It') ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2). Comparison ('bigger than') sengaja TIDAK disentuh -- itu wilayah PAT-7-06 (NS-12).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning, class! Find your seat and get ready." },
      { type: "AKSI", text: "Tunggu kelas tenang, sapa beberapa siswa dengan nada hangat." },
      // HOOK
      { type: "UCAP", text: "Quick question — does anyone here have a pet at home?" },
      { type: "AKSI", text: "Biarkan beberapa siswa menjawab bebas. Respons singkat: 'Oh, a cat! Nice.'" },
      { type: "AKSI", text: "Tunjukkan kartu bergambar hewan peliharaan (kelinci, kucing, anjing, ikan) kepada kelas." },
      { type: "UCAP", text: "Look at these animals. Can you tell me something about them?" },
    ],

    active_vocabulary: [
      "It is",
      "It has",
      "It looks",
      "pet",
      "rabbit",
      "small",
      "white",
      "long ears",
      "soft fur",
      "friendly",
      "cute"
    ],

    model_sentences: [
      { id: "model_1", text: "I have a pet rabbit. I like my pet. It is small and white." },
      { id: "model_2", text: "It has long ears and soft fur." },
      { id: "model_3", text: "It looks friendly and cute." },
      { id: "model_4", text: "I think it looks friendly because it has long ears. That's true!" }
    ],

    visual_cues: [
      { id: "visual_1", description: "Animal picture cards showing different pets (a rabbit, a cat, a dog, a fish) with clear colors and sizes, for describing 'It is ...'.", description_id: "Kartu bergambar hewan yang menunjukkan berbagai hewan peliharaan (kelinci, kucing, anjing, ikan) dengan warna dan ukuran yang jelas, untuk mendeskripsikan 'It is ...'.", asset_id: null },
      { id: "visual_2", description: "Feature icons for 'It has ...': long ears, short ears, soft fur, a long tail, big eyes.", description_id: "Ikon ciri-ciri untuk 'It has ...': telinga panjang, telinga pendek, bulu lembut, ekor panjang, mata besar.", asset_id: null },
      { id: "visual_3", description: "Appearance cards for 'It looks ...': a friendly-looking animal, a cute animal, a sleepy animal.", description_id: "Kartu penampilan untuk 'It looks ...': hewan yang terlihat ramah, hewan yang lucu, hewan yang mengantuk.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher holds up a picture card and points to the whole animal while saying 'It is ...'.", description_id: "Guru mengangkat kartu bergambar dan menunjuk ke seluruh tubuh hewan sambil mengucapkan 'It is ...'." },
      { id: "gesture_2", description: "Teacher points to specific features (the ears, the fur) on the card while saying 'It has ...'.", description_id: "Guru menunjuk ciri-ciri tertentu (telinga, bulu) pada kartu sambil mengucapkan 'It has ...'." },
      { id: "gesture_3", description: "Teacher frames their own face with both hands and mimics the animal's expression while saying 'It looks ...'.", description_id: "Guru membingkai wajahnya dengan kedua tangan dan menirukan ekspresi hewan tersebut sambil mengucapkan 'It looks ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher describe an animal's basic characteristics using 'It is ...', 'It has ...', and 'It looks ...', after a one-line 'I have/I like' lead-in.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-01", "PAT-7-04"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the description sentences ('It is/has/looks ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Describe your own pet or an animal card by replacing the characteristics (color, size, features, look).",
      prompt: "Use the pattern 'It is [size/color]. It has [feature]. It looks [adjective].' Replace the words with the characteristics of your pet or an animal card (small/big, white/brown/black, long ears/soft fur, friendly/cute/sleepy).",
      change_target: ["size/color (It is ...)", "feature (It has ...)", "look (It looks ...)"],
      differentiation: {
        easy: { task: "Choose an animal card and complete: 'It is ___. It has ___. It looks ___.' using words from the cues." },
        standard: { task: "Write three sentences describing your animal: one 'It is ...', one 'It has ...', and one 'It looks ...'." },
        challenge: { task: "Write your three description sentences, and add a one-line lead-in before them: 'I have a pet. I like my pet.' Keep the description ('It is/has/looks ...') as the main part." }
      },
      support: { pattern_support: ["PAT-7-01"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Describe your animal to a partner and respond briefly to your partner's description.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns describing your animal ('It is ... It has ... It looks ...'). After listening, respond with a short opinion ('I think it looks ... because it has ...', 'That's true.', or 'I agree.').",
      differentiation: {
        easy: { task: "Describe your animal using your three sentences from CHANGE (you may read). Your partner responds with a response card ('I agree.' or 'That's true.')." },
        standard: { task: "Describe your animal without reading. Your partner responds with 'I think it looks ... because it has ...'." },
        challenge: { task: "Describe your animal with the one-line lead-in first, then your partner gives an opinion with a reason ('I think it looks ... because ...'), and you respond with 'That's true.'" }
      },
      support: { pattern_support: ["PAT-7-01", "PAT-7-04"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Show your animal card to a new group and describe it (show and tell).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns: hold up your animal card and describe it to the group ('It is ... It has ... It looks ...'). The group listens and may respond briefly.",
      differentiation: {
        easy: { task: "Show your card and say your three description sentences ('It is/has/looks ...'). You may read them." },
        standard: { task: "Show your card and describe it to the group without reading." },
        challenge: { task: "Show your card and describe it, then respond to one classmate's description with 'I think it looks ... because ...' or 'That's true.'" }
      },
      support: { pattern_support: ["PAT-7-04"] }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students describe an animal using 'It is ...', 'It has ...', and 'It looks ...'",
        "students use simple adjectives and noun phrases for color, size, and appearance",
        "students still describe with single words only, or slip back into 'I am / I like' instead of describing the animal with 'It ...'"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to try describing two animals with 'They are/They have ...'.",
        needs_model: "Repeat the MODEL step, emphasizing 'It is ...', 'It has ...', 'It looks ...' as full sentences.",
        needs_repeat: "Do one more round of REPEAT (choral) on the description sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "describes with single words only (e.g. 'small', 'brown') instead of full 'It is/has/looks' sentences",
        "relies only on the written description and cannot describe without reading it",
        "describes the animal with 'It is/has/looks' accurately and confidently"
      ],
      action: [
        "recast the description slowly as full sentences, modeling 'It is ...', 'It has ...', 'It looks ...'",
        "model one more description with a different animal card to show the same pattern still works",
        "for a student who is ready, model ONE plural description first -- for a card with two animals, 'They are small. They have soft fur.' -- then invite that student to try it once; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity"
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
