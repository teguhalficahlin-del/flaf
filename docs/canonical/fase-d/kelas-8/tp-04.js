export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-04.js",
    pattern_id: "PAT-8-04",
    title: "Healthy School Canteen: Building Shared Decisions",
    short_title: "Healthy Canteen",
    grade: 8,
    genre: "Interpersonal",
    cluster: "B",
    topic: "Healthy School Canteen",
    context: "Students evaluate several canteen improvement ideas and work toward a shared recommendation for healthier food choices.",
    context_id: "Siswa mengevaluasi beberapa ide perbaikan kantin dan menyusun rekomendasi bersama untuk pilihan makanan yang lebih sehat.",
    communicative_goal: "build agreement and formulate shared decisions supported by reasons",
    communicative_goal_id: "membangun kesepakatan dan merumuskan keputusan bersama yang didukung alasan",
    vocabulary_domain: ["canteen", "healthy food", "choices", "school policy"],
    input_anchor: "proposal cards",
    output_anchor: "consensus discussion",
    prerequisite_patterns: ["PAT-8-03"],
    reusable_in: ["PAT-8-13", "PAT-8-16", "PAT-9-01"],
    complexity_level: "Expand",
    notes: "TP keempat Kelas 8, Interpersonal, GENRE CLOSER Interpersonal Kelas 8 (cluster B -- Building Shared Decisions), Expand. target_pattern PAT-8-04 = 'I agree that ... because ... / Maybe we should ... so ...'. extends_to PAT-8-13 (Exposition, genre opener Kelas 8) -- pola genre-closer -> genre-opener (sama seperti TP-04/TP-24 Kelas 7 -> PAT-8-01). forbidden_overlap (exposition with multiple arguments, formal recommendation, problem-solution exposition) KRUSIAL: PAT-8-04 = SATU keputusan bersama + SATU alasan ('I agree that...because...') + SATU usulan tindak lanjut ('Maybe we should...so...') -- BUKAN ringkasan multi-argumen (wilayah PAT-8-14 'One reason is...Another reason is...'), BUKAN rekomendasi formal (wilayah PAT-8-16 'Therefore, I recommend...because...'), TIDAK ada 'For example...'. CATATAN 'so': 'Maybe we should...so...' -> 'so' = penghubung TUJUAN di TENGAH kalimat ('so that / in order that'); berbeda dari 'So,...' (PAT-7-23, penghubung wacana di AWAL kalimat = 'as a result/therefore') -- PAT-7-23 bukan prerequisite, disebut hanya untuk kejelasan. Reaktivasi PAT-8-03 (WAJIB, VR-1): 'How about...?/We could.../That's a good idea, but...' (usulan/negosiasi yang BELUM disepakati) -> di sini usulan AKHIRNYA DISEPAKATI ('I agree that...because...') TANPA caveat 'but' lagi (caveat dari TP-25/27 RESOLVED jadi konsensus). vocabulary_domain (canteen, healthy food, choices, school policy) muncul di bahasa target. Ekstensi opsional menautkan kesepakatan langsung ke tindakan ('I agree that X because Y, so maybe we should Z.') -- menjaga head keputusan bersama, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Let's get started, class. Focus, please." },
      { type: "AKSI", text: "Kondisikan kelas agar siap berdiskusi secara serius." },
      // HOOK
      { type: "UCAP", text: "Think about our school canteen — is the food healthy enough for you?" },
      { type: "AKSI", text: "Tampilkan kartu usulan perbaikan kantin: lebih banyak buah, hari salad, kurangi minuman bergula." },
      { type: "UCAP", text: "Look at these canteen improvement ideas. Which one would you agree to start with?" },
    ],

    active_vocabulary: [
      "I agree that",
      "because",
      "Maybe we should",
      "so",
      "canteen",
      "healthy food",
      "choices",
      "school policy"
    ],

    model_sentences: [
      { id: "model_1", text: "We could sell more fruit in the canteen. I agree that this is a good choice because it is healthy." },
      { id: "model_2", text: "I agree that we should offer healthy food because students need energy." },
      { id: "model_3", text: "Maybe we should start a salad day so everyone can try it." },
      { id: "model_4", text: "Maybe we should change the school policy so the canteen has more choices." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Proposal cards for canteen improvements: more fruit, a salad day, fewer sugary drinks, a new policy.", description_id: "Kartu usulan perbaikan kantin: lebih banyak buah, hari salad, kurangi minuman bergula, kebijakan baru.", asset_id: null },
      { id: "visual_2", description: "A decision-frame card: 'I agree that ___ because ___' and 'Maybe we should ___ so ___'.", description_id: "Kartu kerangka keputusan: 'I agree that ___ because ___' dan 'Maybe we should ___ so ___'.", asset_id: null },
      { id: "visual_3", description: "Healthy canteen icons: fruit, a salad, healthy food choices, and a school-policy poster.", description_id: "Ikon kantin sehat: buah, salad, pilihan makanan sehat, dan poster kebijakan sekolah.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher nods firmly for 'I agree that ...', then opens a hand for 'because ...'.", description_id: "Guru mengangguk mantap untuk 'I agree that ...', lalu membuka tangan untuk 'because ...'." },
      { id: "gesture_2", description: "Teacher tilts a hand (maybe), then points forward to a goal, while saying 'Maybe we should ... so ...'.", description_id: "Guru memiringkan tangan (mungkin), lalu menunjuk ke depan ke arah tujuan, sambil mengucapkan 'Maybe we should ... so ...'." },
      { id: "gesture_3", description: "Teacher draws both hands together to show the group reaching a shared decision.", description_id: "Guru menyatukan kedua tangan untuk menunjukkan kelompok mencapai keputusan bersama." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher build a shared decision with 'I agree that ... because ...' and propose a follow-up with 'Maybe we should ... so ...', turning an earlier suggestion into agreement.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-03"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the shared-decision sentences ('I agree that ... because ...' / 'Maybe we should ... so ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Build your own shared decision with a reason and a follow-up action.",
      prompt: "Use the patterns 'I agree that [decision] because [reason].' and 'Maybe we should [action] so [purpose].' Make it about the canteen (canteen, healthy food, choices, school policy). Keep it to one decision, one reason, and one follow-up -- not a list of many arguments and no 'For example'.",
      change_target: ["agreement (I agree that ... because ...)", "action (Maybe we should ... so ...)"],
      differentiation: {
        easy: { task: "Complete one sentence: 'I agree that ___ because ___.' or 'Maybe we should ___ so ___.'" },
        standard: { task: "Write one 'I agree that ... because ...' sentence and one 'Maybe we should ... so ...' sentence about the canteen." },
        challenge: { task: "Take a suggestion ('We could ...') and turn it into a shared decision ('I agree that ... because ...') plus a follow-up ('Maybe we should ... so ...')." }
      },
      support: { pattern_support: ["PAT-8-03"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Reach a shared decision about the canteen in a small group (consensus discussion).",
      interaction_mode: "small_group",
      task: "In a group of 3-4, look at the proposal cards. Take turns agreeing on one improvement ('I agree that ... because ...') and proposing a follow-up ('Maybe we should ... so ...'). Work toward one shared decision.",
      differentiation: {
        easy: { task: "Agree with one proposal ('I agree that ... because ...') and add one follow-up ('Maybe we should ... so ...'). You may read." },
        standard: { task: "Agree and propose without reading, so the group settles on one shared decision." },
        challenge: { task: "Turn a classmate's suggestion into a shared decision with a reason, then propose a follow-up action with 'so'." }
      },
      support: { pattern_support: ["PAT-8-03"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Share your group's shared decision with a new group (consensus discussion).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting your group's shared decision ('I agree that ... because ...') and follow-up ('Maybe we should ... so ...').",
      differentiation: {
        easy: { task: "Present your shared decision in one sentence ('I agree that ... because ...'). You may read it." },
        standard: { task: "Present your shared decision and one follow-up without reading." },
        challenge: { task: "Present your shared decision and follow-up, then listen and agree with one other group's decision ('I agree that ... because ...')." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students build a shared decision with 'I agree that ... because ...' and a follow-up with 'Maybe we should ... so ...'",
        "students keep it to one decision, one reason, and one follow-up (using 'so' for purpose), not a list of many arguments",
        "students still give a formal recommendation or add 'For example ...' / multiple arguments instead of a simple shared decision"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to link the agreement directly to the action with 'so'.",
        needs_model: "Repeat the MODEL step, emphasizing 'I agree that ... because ...' and 'Maybe we should ... so ...' as one simple shared decision.",
        needs_repeat: "Do one more round of REPEAT (choral) on the shared-decision sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "lists several arguments or gives a formal recommendation instead of one shared decision",
        "relies only on the written sentences and cannot share the decision without reading",
        "builds a shared decision and a follow-up with 'I agree that ... because ...' / 'Maybe we should ... so ...' accurately and confidently"
      ],
      action: [
        "recast the decision slowly, modeling 'I agree that ... because ...' and 'Maybe we should ... so ...' as one simple, shared decision",
        "model one more shared decision on a different school topic to show the same pattern still works",
        "for a student who is ready, model ONE sentence linking the agreement straight to the action first -- 'I agree that we should sell more fruit because it is healthy, so maybe we should start next week.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the shared-decision head, with no 'For example' or multiple arguments"
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
