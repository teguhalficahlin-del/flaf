export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-24.js",
    pattern_id: "PAT-7-24",
    title: "The Lost Firefly: Reflecting on the Story",
    short_title: "Firefly Reflection",
    grade: 7,
    genre: "Narrative",
    cluster: "B",
    topic: "The Lost Firefly",
    context: "Students discuss the ending of the story and the lesson about helping others and asking for help.",
    context_id: "Siswa mendiskusikan akhir cerita dan pelajaran tentang menolong orang lain serta meminta bantuan.",
    communicative_goal: "close a narrative by expressing the lesson learned and preparing personal responses",
    communicative_goal_id: "menutup cerita dengan menyampaikan pelajaran yang dipetik dan menyiapkan tanggapan pribadi",
    vocabulary_domain: ["kindness", "friendship", "help", "choices"],
    input_anchor: "ending illustration",
    output_anchor: "story reflection discussion",
    prerequisite_patterns: ["PAT-7-23"],
    reusable_in: ["PAT-8-01", "PAT-8-13", "PAT-9-01", "PAT-9-16"],
    complexity_level: "Acquire",
    notes: "TP kedua puluh empat Fase D, Narrative, GENRE CLOSER yang MENUTUP KELAS 7 (24/24). Babak 4 (PENUTUP) dari cerita berkelanjutan 'The Lost Firefly'. target_pattern PAT-7-24 = 'In the end, ... / The character learned ... / Everyone felt ... because ...' (past tense). Babak 4 (sesuai alur): 'In the end, ...' = firefly menemukan teman-temannya di rumah -- menutup setup 'bermimpi menemukan teman' dari TP-21; 'The character learned ...' = firefly belajar meminta bantuan saat tersesat, THIRD-PERSON ('The firefly learned...', BUKAN 'I learned...' PAT-7-16 first-person -- forbidden: personal recount reflection); 'Everyone felt ... because ...' = emosi KOLEKTIF tokoh, past tense ('felt'). PAT-7-23 ('So,.../Then,...and.../Finally,...') sebagai support: recap resolusi singkat sebelum penutup ('The rabbit and the bird helped the firefly get home. In the end, ...'). communicative_goal menyebut 'preparing personal responses': setelah closing THIRD-PERSON (target wajib) BOLEH ditambah RESPONS PRIBADI SINGKAT (PAT-7-04: 'I think.../That's true./I agree.') tentang pelajaran cerita -- ini bahasa kelas umum reusable (precedent TP-16 P2, TIDAK perlu prerequisite formal), sebagai PELENGKAP setelah target wajib, bukan pengganti. vocabulary_domain (kindness, friendship, help, choices) muncul di bahasa target. Ekstensi opsional satu baris penutup naratif yang menautkan ke awal cerita ('The firefly never felt lonely again.') -- menjaga head penutup third-person, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Morning, class! Today we close our firefly story together." },
      { type: "AKSI", text: "Beri siswa waktu sebentar untuk mengingat kembali isi cerita." },
      // HOOK
      { type: "UCAP", text: "What do you think happened in the end for the firefly and its new friends?" },
      { type: "AKSI", text: "Tampilkan ilustrasi penutup: kunang-kunang berkumpul kembali dengan kelinci, burung, dan kunang-kunang lain yang bersinar." },
      { type: "UCAP", text: "Look at this ending illustration. What did the firefly learn from its journey?" },
    ],

    active_vocabulary: [
      "In the end,",
      "learned",
      "Everyone felt",
      "because",
      "help",
      "kindness",
      "friendship",
      "choice"
    ],

    model_sentences: [
      { id: "model_1", text: "The rabbit and the bird helped the firefly get home." },
      { id: "model_2", text: "In the end, the firefly made a good choice and found its friends." },
      { id: "model_3", text: "The firefly learned to ask for help." },
      { id: "model_4", text: "Everyone felt happy because they shared kindness and friendship." }
    ],

    visual_cues: [
      { id: "visual_1", description: "An ending illustration: the firefly happily reunited with the rabbit, the bird, and other glowing fireflies (friends) at home at dawn.", description_id: "Ilustrasi penutup: kunang-kunang bahagia berkumpul kembali dengan kelinci, burung, dan kunang-kunang lain yang bersinar (teman-teman) di rumah saat subuh.", asset_id: null },
      { id: "visual_2", description: "Closing cards: 'In the end, ...', 'The firefly learned ...', 'Everyone felt ... because ...'.", description_id: "Kartu penutup: 'In the end, ...', 'The firefly learned ...', 'Everyone felt ... because ...'.", asset_id: null },
      { id: "visual_3", description: "Theme icons: joined hands (kindness/help), glowing friends together (friendship), and a signpost with two paths (choices).", description_id: "Ikon tema: tangan bergandengan (kebaikan/tolong-menolong), teman-teman yang bersinar bersama (persahabatan), dan tanda penunjuk dengan dua jalur (pilihan).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher brings both hands to a warm, final close while saying 'In the end, ...'.", description_id: "Guru menyatukan kedua tangan sebagai penutup hangat dan final sambil mengucapkan 'In the end, ...'." },
      { id: "gesture_2", description: "Teacher taps the temple, then the heart, while saying 'The firefly learned ...'.", description_id: "Guru menepuk pelipis, lalu dada, sambil mengucapkan 'The firefly learned ...'." },
      { id: "gesture_3", description: "Teacher gestures around the whole group while saying 'Everyone felt ... because ...'.", description_id: "Guru memberi gestur ke seluruh kelompok sambil mengucapkan 'Everyone felt ... because ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher close the story with 'In the end, ...', 'The character learned ...' (third person), and 'Everyone felt ... because ...', after a short resolution recap.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-23"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the closing sentences ('In the end, ... / The character learned ... / Everyone felt ... because ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Close the story by replacing the ending, the lesson, and the feeling.",
      prompt: "Use the patterns 'In the end, [past event].', 'The character learned [something].', and 'Everyone felt [feeling] because [event].' Use third person ('The firefly learned ...'), not 'I learned ...'. Theme words: kindness, friendship, help, choices.",
      change_target: ["ending (In the end, ...)", "lesson (The character learned ...)", "feeling (Everyone felt ... because ...)"],
      differentiation: {
        easy: { task: "Complete: 'In the end, the firefly ___. The firefly learned ___. Everyone felt ___ because ___.'" },
        standard: { task: "Write the three closing sentences (In the end / The character learned / Everyone felt ... because ...) in third person." },
        challenge: { task: "Recap the resolution ('The rabbit and the bird helped the firefly get home.'), write your three closing sentences, then add a short personal response about the lesson ('I think that's a good lesson. I agree!')." }
      },
      support: { pattern_support: ["PAT-7-23"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Discuss the story ending and its lesson in a small reflection circle.",
      interaction_mode: "small_group",
      task: "Sit in a small group of 3-4 (a reflection circle). Take turns giving the story closing ('In the end, ... The firefly learned ... Everyone felt ... because ...'). Then you may add a short personal response ('I think ... / That's true. / I agree.').",
      differentiation: {
        easy: { task: "Give your closing from CHANGE to the circle (you may read), ending with 'The firefly learned ...'." },
        standard: { task: "Give the three closing sentences without reading, then listen to your classmates." },
        challenge: { task: "Give your closing, then add a short personal response about the lesson and respond to one classmate's response." }
      },
      support: { pattern_support: ["PAT-7-23"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Share the story closing and the lesson with a new reflection circle (story reflection discussion).",
      share_mode: "oral_response",
      task: "Form a new circle of 4 with classmates from other groups. Take turns sharing the story closing ('In the end, ... The firefly learned ... Everyone felt ... because ...'), then a short personal response if you wish.",
      differentiation: {
        easy: { task: "Share your closing sentences with the new circle. You may read them." },
        standard: { task: "Share your closing without reading, in third person." },
        challenge: { task: "Share your closing and a short personal response, then respond to one classmate's response with 'That's true.' or 'I agree.'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students close the story with 'In the end, ...', 'The character learned ...', and 'Everyone felt ... because ...' in past tense",
        "students keep the lesson in third person ('The firefly learned ...'), not first person ('I learned ...')",
        "students still switch to a personal recount ('I learned ...') as the main closing, or give an argument or a plain summary"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a final closing line that ties back to the start of the story.",
        needs_model: "Repeat the MODEL step, emphasizing third-person closing ('The character learned ...') and 'Everyone felt ... because ...'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the closing sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "uses first-person 'I learned ...' as the main closing, or gives an argument or a plain summary",
        "relies only on the written closing and cannot share it without reading",
        "closes the story in third person with 'In the end, ... / The character learned ... / Everyone felt ... because ...' accurately and confidently"
      ],
      action: [
        "recast the closing slowly, modeling third-person 'The character learned ...' and 'Everyone felt ... because ...'",
        "model one more story closing for a different story to show the same pattern still works",
        "for a student who is ready, model ONE final closing line that ties back to the start first -- 'The firefly never felt lonely again.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the third-person story-closing head, not a personal recount or an argument"
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
