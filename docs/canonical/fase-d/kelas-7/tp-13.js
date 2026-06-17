export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-13.js",
    pattern_id: "PAT-7-13",
    title: "Family Picnic: Recalling Past Events",
    short_title: "Family Picnic",
    grade: 7,
    genre: "Recount",
    cluster: "A",
    topic: "Family Picnic",
    context: "Students share a real family outing that happened last weekend.",
    context_id: "Siswa menceritakan kegiatan keluarga nyata yang terjadi pada akhir pekan lalu.",
    communicative_goal: "introduce a past experience using simple time expressions",
    communicative_goal_id: "memperkenalkan pengalaman masa lalu menggunakan ungkapan waktu sederhana",
    vocabulary_domain: ["family", "park", "weekend", "activities"],
    input_anchor: "photo sequence",
    output_anchor: "pair storytelling",
    prerequisite_patterns: ["PAT-7-09"],
    reusable_in: ["PAT-8-17"],
    complexity_level: "Acquire",
    notes: "TP ketiga belas Fase D dan TP RECOUNT PERTAMA -- memperkenalkan PAST TENSE untuk pertama kalinya di Kelas 7. target_pattern PAT-7-13 = 'Yesterday, ... / Last ..., ... + past event'. Semua kalimat target memakai verba lampau; pengenalan awal MEMPRIORITASKAN verba REGULER -ed (visited, played, enjoyed, cooked, walked) agar pola morfologis jelas, dengan hanya satu verba irregular umum (had) untuk kewajaran konteks. Tension forbidden_overlap vs prerequisite: PAT-7-09 ('First,...Then,...Finally,...') vs 'giving procedures' -> connector words direaktivasi HANYA dalam MODE NARASI LAMPAU DEKLARATIF (menceritakan apa yang SUDAH terjadi, past tense: 'First, we walked to the park. Then, we had a picnic.') -- bukan instruksi imperatif present tense untuk diikuti orang lain; dipakai secukupnya (1-2 kalimat support), fokus utama tetap 'Yesterday,/Last...,... + past event'. forbidden_overlap lain: TIDAK ada 'It is/has/looks' present tense (describing present characteristics), TIDAK ada 'will/going to' (future plans). vocabulary_domain (family, park, weekend, activities) muncul di bahasa target. Ekstensi opsional satu verba irregular umum tambahan ('We went to the beach.') -- menjaga head recount 'time expression + past event' -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning! How was your weekend, everyone?" },
      { type: "AKSI", text: "Biarkan satu atau dua siswa menjawab singkat sebelum melanjutkan." },
      // HOOK
      { type: "UCAP", text: "Has your family ever gone somewhere together last weekend? Where did you go?" },
      { type: "AKSI", text: "Tampilkan urutan foto piknik keluarga: tiba di taman, makan piknik di atas tikar, bermain." },
      { type: "UCAP", text: "Look at these family photos. What happened here, do you think?" },
    ],

    active_vocabulary: [
      "Yesterday,",
      "Last weekend",
      "Last Sunday",
      "visited",
      "played",
      "enjoyed",
      "cooked",
      "family",
      "park",
      "picnic",
      "games"
    ],

    model_sentences: [
      { id: "model_1", text: "Last weekend, my family visited the park." },
      { id: "model_2", text: "Yesterday, we played games and enjoyed a picnic." },
      { id: "model_3", text: "First, we walked to the park. Then, we had a picnic." },
      { id: "model_4", text: "Last Sunday, my family cooked food together." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A photo sequence of a family picnic last weekend: the family arriving at the park, eating a picnic on a mat, and playing games.", description_id: "Urutan foto piknik keluarga akhir pekan lalu: keluarga tiba di taman, makan piknik di atas tikar, dan bermain.", asset_id: null },
      { id: "visual_2", description: "Time-expression cards with a calendar pointing to past days: 'Yesterday,', 'Last weekend', 'Last Sunday'.", description_id: "Kartu ungkapan waktu dengan kalender menunjuk hari-hari lampau: 'Yesterday,', 'Last weekend', 'Last Sunday'.", asset_id: null },
      { id: "visual_3", description: "Past-action icons labeled with -ed: visited (footprints to a park), played (a ball), cooked (a pot of food).", description_id: "Ikon tindakan lampau berlabel -ed: visited (jejak kaki ke taman), played (bola), cooked (panci berisi makanan).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points back over one shoulder (a 'past / before now' gesture) while saying 'Yesterday, ... / Last weekend, ...'.", description_id: "Guru menunjuk ke belakang melewati bahu (gestur 'masa lalu / sebelum sekarang') sambil mengucapkan 'Yesterday, ... / Last weekend, ...'." },
      { id: "gesture_2", description: "Teacher mimes the past action (walking, playing, cooking) while saying the past-tense verb.", description_id: "Guru memperagakan tindakan lampaunya (berjalan, bermain, memasak) sambil mengucapkan kata kerja bentuk lampaunya." },
      { id: "gesture_3", description: "Teacher shows order with fingers for the short narrative recap 'First, ... Then, ...' (telling what happened, not giving orders).", description_id: "Guru menunjukkan urutan dengan jari untuk rangkuman cerita singkat 'First, ... Then, ...' (menceritakan apa yang terjadi, bukan memberi perintah)." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher introduce a past family outing using time expressions ('Yesterday, ... / Last ..., ...') and past-tense verbs, with a short past-tense narrative recap.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-09"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the past-event sentences ('Yesterday, ... / Last ..., ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Introduce your own past outing by replacing the time expression and the past event.",
      prompt: "Use the pattern 'Yesterday, ... + past event' or 'Last [weekend/Sunday], ... + past event.' Replace the words with a real outing of your own, using past-tense verbs (visited, played, enjoyed, cooked, walked). Do not use present tense or future ('will').",
      change_target: ["time expression", "past event (past verb + details)"],
      differentiation: {
        easy: { task: "Choose a photo and complete: 'Last weekend, I ___ (visited / played / cooked) ___.'" },
        standard: { task: "Write two sentences about a real past outing, each starting with a time expression ('Yesterday,' / 'Last ...,') and using a past-tense verb." },
        challenge: { task: "Write your two time-expression sentences, then add a short past-tense recap: 'First, we walked ... Then, we had ...' Keep the 'Yesterday,/Last ...,' sentences as the main part." }
      },
      support: { pattern_support: ["PAT-7-09"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Tell a partner about a past outing using time expressions and past-tense verbs (pair storytelling).",
      interaction_mode: "pair",
      task: "Find a partner. Take turns telling about a real past outing ('Yesterday, ... / Last ..., ... + past event'). Listen to your partner and remember one thing they did.",
      differentiation: {
        easy: { task: "Tell your partner one past-outing sentence using your sentence from CHANGE (you may read). Listen to your partner's sentence." },
        standard: { task: "Tell your partner two past-outing sentences without reading. Listen and remember one thing your partner did." },
        challenge: { task: "Tell your outing with a short past-tense recap ('First, we walked ... Then, we had ...'). Your partner does the same." }
      },
      support: { pattern_support: ["PAT-7-09"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Tell your past outing to a new group (pair storytelling).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns telling about your past outing using 'Yesterday, ... / Last ..., ... + past event'.",
      differentiation: {
        easy: { task: "Tell the new group one or two past-outing sentences. You may read them." },
        standard: { task: "Tell the new group about your outing without reading." },
        challenge: { task: "Tell your outing with a short past-tense recap, then listen and remember one thing each classmate did." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students introduce a past event with a time expression ('Yesterday,' / 'Last ...,')",
        "students use past-tense verbs consistently (mostly regular -ed forms)",
        "students still slip into present tense ('I visit') or use future ('I will visit')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to use one common irregular past verb (e.g. 'went').",
        needs_model: "Repeat the MODEL step, emphasizing the time expression and the -ed past-tense verbs.",
        needs_repeat: "Do one more round of REPEAT (choral) on the past-event sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "slips into present tense or future when telling a past event",
        "relies only on the written sentences and cannot tell the outing without reading",
        "introduces past events with time expressions and past-tense verbs accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, emphasizing the time expression and the past-tense verb",
        "model one more past-event sentence about a different outing to show the same pattern still works",
        "for a student who is ready, model ONE sentence with a common irregular past verb first -- 'Last weekend, we went to the beach.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the recount head (time expression + past event), not a procedure or a future plan"
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
