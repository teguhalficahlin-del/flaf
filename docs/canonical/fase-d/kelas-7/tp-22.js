export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-22.js",
    pattern_id: "PAT-7-22",
    title: "The Lost Firefly: Creating Conflict",
    short_title: "Firefly Conflict",
    grade: 7,
    genre: "Narrative",
    cluster: "A",
    topic: "The Lost Firefly",
    context: "The little firefly loses its way when the forest becomes dark and suddenly cannot find its friends.",
    context_id: "Kunang-kunang kecil itu tersesat ketika hutan menjadi gelap dan tiba-tiba tidak bisa menemukan teman-temannya.",
    communicative_goal: "develop a simple conflict using sequence and contrast",
    communicative_goal_id: "mengembangkan konflik sederhana menggunakan urutan dan kontras",
    vocabulary_domain: ["night", "forest", "lost", "light"],
    input_anchor: "story sequence cards",
    output_anchor: "story continuation",
    prerequisite_patterns: ["PAT-7-21"],
    reusable_in: ["PAT-8-18"],
    complexity_level: "Acquire",
    notes: "TP kedua puluh dua Fase D, Narrative. Babak 2 (KONFLIK) dari cerita berkelanjutan 'The Lost Firefly'. target_pattern PAT-7-22 = 'One day, ... but ... / Suddenly, ...' (past tense). Babak 2 (sesuai alur): firefly terbang ke hutan; 'One day, ... but ...' = hutan menjadi gelap (kontras dengan harapan); 'Suddenly, ...' = tiba-tiba tidak bisa menemukan teman-temannya / tersesat. DISTINGSI forbidden_overlap: 'but' di sini menandai KONFLIK/KONTRAS (BUKAN 'and/then' sequencing netral PAT-7-14); 'Suddenly, ...' = kejadian TAK TERDUGA (BUKAN 'First,/Then,/Finally,' procedure PAT-7-09; BUKAN 'because' explanation PAT-7-04/15). PAT-7-21 ('Once there was.../There was...+character+place') sebagai support: recap pembuka singkat sebelum konflik ('There was a small firefly near a quiet pond. One day, ...'). vocabulary_domain (night, forest, lost, light) muncul di bahasa target. Ekstensi opsional penanda kejutan alternatif ('All of a sudden, ...') -- menjaga head kejadian tak terduga, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Welcome back! Our story continues today." },
      { type: "AKSI", text: "Recap singkat cerita sebelumnya bersama kelas dalam 1-2 kalimat." },
      // HOOK
      { type: "UCAP", text: "Do you remember the little firefly? What was it dreaming of?" },
      { type: "AKSI", text: "Tunjukkan urutan gambar cerita: kunang-kunang terbang ke hutan, hutan menjadi gelap, kunang-kunang sendirian." },
      { type: "UCAP", text: "Look at what happened next. What went wrong for the little firefly?" },
    ],

    active_vocabulary: [
      "One day,",
      "but",
      "Suddenly,",
      "forest",
      "dark",
      "lost",
      "light",
      "night"
    ],

    model_sentences: [
      { id: "model_1", text: "There was a small firefly near a quiet pond." },
      { id: "model_2", text: "One day, the firefly flew into the forest, but the forest became dark." },
      { id: "model_3", text: "Suddenly, the firefly could not find its friends." },
      { id: "model_4", text: "The little light was lost in the dark night." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Story sequence cards: the firefly flying into the forest, the forest turning dark, and the firefly alone, unable to find its friends.", description_id: "Urutan gambar cerita: kunang-kunang terbang masuk hutan, hutan menjadi gelap, dan kunang-kunang sendirian, tidak dapat menemukan teman-temannya.", asset_id: null },
      { id: "visual_2", description: "Conflict cards: 'One day ... but ...' (a bright hope turning to a dark forest) and a 'Suddenly!' surprise burst.", description_id: "Kartu konflik: 'One day ... but ...' (harapan cerah berubah menjadi hutan gelap) dan letupan kejutan 'Suddenly!'", asset_id: null },
      { id: "visual_3", description: "A dark night forest scene with one small lost light.", description_id: "Pemandangan hutan malam yang gelap dengan satu cahaya kecil yang tersesat.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher gestures forward, then flips the palm over while saying 'but' to show the turn to a problem.", description_id: "Guru memberi gestur ke depan, lalu membalik telapak tangan sambil mengucapkan 'but' untuk menunjukkan perubahan menjadi masalah." },
      { id: "gesture_2", description: "Teacher opens both hands quickly in a surprise motion while saying 'Suddenly, ...'.", description_id: "Guru membuka kedua tangan dengan cepat dalam gerakan kejutan sambil mengucapkan 'Suddenly, ...'." },
      { id: "gesture_3", description: "Teacher mimes looking around, lost, with a dimming light, while saying 'lost in the dark'.", description_id: "Guru memperagakan melihat sekeliling, tersesat, dengan cahaya yang meredup, sambil mengucapkan 'lost in the dark'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher create a story problem with 'One day, ... but ...' (a contrast) and 'Suddenly, ...' (an unexpected event), after a short opening recap, in past tense.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-21"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the conflict sentences ('One day, ... but ...' / 'Suddenly, ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Create your own story problem using 'One day, ... but ...' and 'Suddenly, ...'.",
      prompt: "Use the patterns 'One day, [event], but [problem].' and 'Suddenly, [unexpected event].' Make a problem for the firefly's story (night, forest, lost, light). Use 'but' to show the problem and 'Suddenly,' for the surprise -- not 'First,/Then,' and not 'because'.",
      change_target: ["event + contrast (One day, ... but ...)", "unexpected event (Suddenly, ...)"],
      differentiation: {
        easy: { task: "Complete one conflict sentence: 'One day, the firefly ___, but ___.'" },
        standard: { task: "Write a problem: one 'One day, ... but ...' sentence and one 'Suddenly, ...' sentence." },
        challenge: { task: "Recap the opening ('There was a small firefly near a quiet pond.'), then add your 'One day, ... but ...' and 'Suddenly, ...' problem." }
      },
      support: { pattern_support: ["PAT-7-21"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Continue the story from the opening to the conflict with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns continuing the story: start with a short opening, then add the problem ('One day, ... but ...' / 'Suddenly, ...'). Listen and find your partner's problem.",
      differentiation: {
        easy: { task: "Tell your partner one conflict sentence from CHANGE (you may read). Listen to your partner's sentence." },
        standard: { task: "Continue the story with your two conflict sentences without reading. Your partner does the same." },
        challenge: { task: "Recap the opening, then tell the conflict. Your partner does the same and names the problem." }
      },
      support: { pattern_support: ["PAT-7-21"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Continue the story to a new group (story continuation).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns telling the story from the opening to the conflict using 'One day, ... but ...' and 'Suddenly, ...'.",
      differentiation: {
        easy: { task: "Tell the new group your conflict sentences. You may read them." },
        standard: { task: "Tell the new group the opening and the conflict without reading." },
        challenge: { task: "Tell the opening and the conflict, then listen and name the problem in one classmate's story." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students create a problem with 'One day, ... but ...' and 'Suddenly, ...' in past tense",
        "students use 'but' to mark a conflict/contrast (not a neutral 'and/then' list) and 'Suddenly,' for an unexpected event",
        "students still use 'First,/Then,' (procedure) or add 'because' (explanation) instead of a story conflict"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to use a different surprise marker ('All of a sudden, ...').",
        needs_model: "Repeat the MODEL step, emphasizing 'but' for the problem and 'Suddenly,' for the surprise, in past tense.",
        needs_repeat: "Do one more round of REPEAT (choral) on the conflict sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "uses a neutral 'and/then' list or a 'First,/Then,' procedure instead of a conflict, or adds 'because'",
        "relies only on the written sentences and cannot tell the conflict without reading",
        "creates a problem with 'One day, ... but ...' and 'Suddenly, ...' accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, emphasizing 'but' for the problem and 'Suddenly,' for the surprise",
        "model one more conflict for a different story to show the same pattern still works",
        "for a student who is ready, model ONE surprise with a different marker first -- 'All of a sudden, the light went out.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the unexpected-event head, not a procedure or an explanation"
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
