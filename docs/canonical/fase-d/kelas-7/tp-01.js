export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-01.js",
    pattern_id: "PAT-7-01",
    title: "Getting to Know Friends: Introducing Yourself",
    short_title: "Introducing Yourself",
    grade: 7,
    genre: "Interpersonal",
    cluster: "A",
    topic: "Personal Identity",
    context: "Students meet new classmates on the first day of school.",
    context_id: "Siswa bertemu teman-teman baru di hari pertama sekolah.",
    communicative_goal: "share basic personal information",
    communicative_goal_id: "berbagi informasi pribadi dasar",
    vocabulary_domain: ["name", "age", "hobbies", "abilities"],
    input_anchor: "picture cards",
    output_anchor: "pair conversation",
    prerequisite_patterns: [],
    reusable_in: ["PAT-8-01"],
    complexity_level: "Acquire",
    notes: "TP pembuka Fase D, menetapkan pattern dasar PAT-7-01 (I am / I like / I can). MODEL, REPEAT, CHANGE, INTERACT, dan SHARE seluruhnya berfokus pada pattern orang pertama ini (NS-2) dan mengikuti anchor Listen->Say->Change->Use. Ekstensi ke He/She is / likes / can (memperkenalkan orang lain) ditempatkan di BOOST sebagai extension opsional untuk siswa yang sudah siap: guru memodelkan langsung (Listen) sebelum siswa mencoba (Say), sehingga tidak ada bentuk bahasa yang diminta 'Use' tanpa pernah dimodelkan.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Hello, everyone! Welcome to our class." },
      { type: "AKSI", text: "Tunggu semua siswa duduk dan tenang sebelum memulai." },
      // HOOK
      { type: "UCAP", text: "Look at this name tag card — what information can you see on it?" },
      { type: "AKSI", text: "Tunjukkan kartu bergambar papan nama 'Dito, 12 tahun' ke seluruh kelas." },
      { type: "UCAP", text: "Today is your first day here. Who would like to share their name with the class?" },
    ],

    active_vocabulary: [
      "years old", "like", "can", "can't",
      "playing badminton", "reading comics",
      "ride a bicycle", "swim",
      "every weekend", "very well"
    ],

    model_sentences: [
      { id: "model_1", text: "I am Dito. I am twelve years old." },
      { id: "model_2", text: "I like reading comics and playing badminton." },
      { id: "model_3", text: "I can ride a bicycle, but I can't swim yet." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A name tag picture card showing a name and an age, e.g. 'Dito, 12 years old'.", description_id: "Kartu bergambar papan nama yang menunjukkan nama dan usia, contohnya 'Dito, 12 tahun'.", asset_id: null },
      { id: "visual_2", description: "Picture cards showing hobby icons: a comic book and a badminton racket.", description_id: "Kartu bergambar yang menunjukkan ikon hobi: buku komik dan raket bulu tangkis.", asset_id: null },
      { id: "visual_3", description: "Picture cards showing ability icons: a bicycle (can) and a swimming pool with a cross mark (can't).", description_id: "Kartu bergambar yang menunjukkan ikon kemampuan: sepeda (can) dan kolam renang dengan tanda silang (can't).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher taps their own chest while saying 'I am...' and holds up fingers to show age while saying 'I am ... years old.'", description_id: "Guru menepuk dadanya sendiri sambil mengucapkan 'I am...' dan mengangkat jari untuk menunjukkan usia sambil mengucapkan 'I am ... years old.'" },
      { id: "gesture_2", description: "Teacher mimes flipping pages of a book and swinging a badminton racket while saying 'I like...'", description_id: "Guru memperagakan membalik halaman buku dan mengayunkan raket bulu tangkis sambil mengucapkan 'I like...'" },
      { id: "gesture_3", description: "Teacher mimes pedaling a bicycle for 'I can...' and shakes their head with crossed arms for 'I can't...'", description_id: "Guru memperagakan mengayuh sepeda untuk 'I can...' dan menggelengkan kepala sambil menyilangkan tangan untuk 'I can't...'" }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 5,
      objective: "Observe the teacher demonstrate how to introduce yourself using name, age, hobbies, and abilities.",
      sentence_refs: ["model_1", "model_2", "model_3"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"]
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the introduction pattern together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Replace the example information with your own personal information.",
      prompt: "Use the pattern 'I am [name]. I am [age] years old. I like [hobby]. I can [ability], but I can't [ability].' Replace the words in brackets with information about yourself.",
      change_target: ["name", "age", "hobby", "ability"],
      differentiation: {
        easy: { task: "Choose your name, age, one hobby, and one ability from the picture cards, then complete: 'I am ___. I am ___ years old. I like ___. I can ___.'" },
        standard: { task: "Write your own sentences: 'I am [name]. I am [age] years old. I like [hobby]. I can [ability], but I can't [ability].'" },
        challenge: { task: "Write your own sentences and add one extra detail to each, e.g. 'I like [hobby] every weekend' or 'I can [ability] very well.'" }
      }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 10,
      objective: "Introduce yourself to a partner using your own sentences and listen to your partner's introduction.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns introducing yourselves using the sentences from the CHANGE step. Listen carefully to your partner's introduction.",
      differentiation: {
        easy: { task: "Use your sentences from CHANGE as a script. Read them to your partner, then listen to your partner read theirs." },
        standard: { task: "Say your sentences from CHANGE to your partner without reading. Listen to your partner and remember one fact about them." },
        challenge: { task: "Say your sentences to your partner, then say them again adding one extra detail to one sentence, e.g. 'I like reading comics, especially on weekends.' Ask your partner to do the same." }
      }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Introduce yourself again to a new group of classmates using your sentences.",
      share_mode: "oral_response",
      task: "Form a group of 4 with another pair (someone other than your INTERACT partner). Take turns introducing yourselves to the new group using your sentences from CHANGE.",
      differentiation: {
        easy: { task: "Read your sentences from CHANGE to the new group." },
        standard: { task: "Say your sentences from CHANGE to the new group without reading." },
        challenge: { task: "Say your sentences to the new group, then try to remember one fact (name, age, hobby, or ability) about each person after everyone has shared." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students produce 'I am / I like / I can' sentences with their own information",
        "students can repeat their sentences fluently to a new group without re-reading",
        "students still rely on picture cards or sentence frames to complete sentences"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a few students to try the partner-introduction extension with the whole class.",
        needs_model: "Repeat the MODEL step with the same sentences before continuing.",
        needs_repeat: "Do one more round of REPEAT (choral) before CHANGE."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "hesitates when forming 'I am / I like / I can' sentences",
        "relies only on picture cards without attempting own words",
        "produces all three sentences accurately and confidently across multiple groups"
      ],
      action: [
        "recast the sentence slowly, emphasizing the pattern",
        "model one more example using a different topic (e.g., favorite food) to show the pattern still works",
        "for students who are ready for extra practice, model ONE example introducing another person -- 'This is [name]. He/She is... He/She likes... He/She can...' -- and invite that student to try; this is an optional individual extension, not a whole-class activity"
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
