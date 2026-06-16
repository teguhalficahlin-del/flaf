export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-16.js",
    pattern_id: "PAT-8-16",
    title: "Class Charity Project: Making Recommendations",
    short_title: "Charity Project",
    grade: 8,
    genre: "Exposition",
    cluster: "B",
    topic: "Class Charity Project",
    context: "Students evaluate several community service ideas and recommend one with supporting reasons.",
    context_id: "Siswa mengevaluasi beberapa ide bakti sosial dan merekomendasikan salah satunya dengan alasan pendukung.",
    communicative_goal: "make a recommendation based on reasons and shared benefits",
    communicative_goal_id: "membuat rekomendasi berdasarkan alasan dan manfaat bersama",
    vocabulary_domain: ["charity", "community", "volunteers", "donation"],
    input_anchor: "project proposal cards",
    output_anchor: "recommendation presentation",
    prerequisite_patterns: ["PAT-8-15", "PAT-8-03"],
    reusable_in: ["PAT-9-01", "PAT-9-15", "PAT-9-16"],
    complexity_level: "Expand",
    notes: "TP keenam belas Kelas 8, GENRE CLOSER EXPOSITION dan GENRE KE-4 Kelas 8 yang selesai (Interpersonal/Report/Explanation/Exposition). cluster B -- Making Recommendations, CEFR B1-. DUAL PREREQ. target_pattern PAT-8-16 = 'Therefore, I recommend ... because ...'. 'Therefore,' = konektor kesimpulan FORMAL (sentence-initial), PALING FORMAL dalam progresi register 'So,' (PAT-7-23) -> 'As a result,' (PAT-8-12, TP-36) -> 'Therefore,' (di sini), sesuai posisi penutup Exposition. Reaktivasi PAT-8-03 (WAJIB, VR-1; topik SAMA dengan TP-27 'Class Charity Project'): negosiasi BELUM TUNTAS TP-27 ('How about a book sale for charity? We could sell snacks. That's a good idea, but we need more helpers.') -> setelah dipertimbangkan (gaya PAT-8-15), AKHIRNYA jadi REKOMENDASI FORMAL: 'Therefore, I recommend a book sale because ...'. Reaktivasi PAT-8-15 (WAJIB, VR-1): 'Some people think...However, I think...because...' (mengakui pandangan lain + posisi) -> 'Therefore, I recommend...because...' (kesimpulan/tindak lanjut dari pertimbangan); model_1 = recap gaya PAT-8-15 tentang opsi charity, model_3/4 = target. forbidden_overlap (procedural instructions, narrative moral, explanation summary): 'Therefore, I recommend X because Y' BUKAN 'First, do X...' (PAT-7-09/8-10), BUKAN 'I/the character learned...' (PAT-7-16/24), BUKAN ringkasan proses (PAT-8-12). vocabulary_domain (charity, community, volunteers, donation) muncul di bahasa target. extends_to PAT-9-01 (Kelas 9) -- dicatat untuk konteks masa depan. Ekstensi opsional rekomendasi dengan dua alasan ('Therefore, I recommend ... because ... and ...') -- menjaga head rekomendasi, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. Let's close a chapter today — with a recommendation." },
      { type: "AKSI", text: "Minta siswa mengingat sesi negosiasi proyek bakti sosial sebelumnya." },
      // HOOK
      { type: "UCAP", text: "We discussed several charity project ideas before. Have you decided which one you recommend?" },
      { type: "AKSI", text: "Tampilkan kartu usulan proyek: jualan buku, jualan jajanan, cuci mobil, penggalangan donasi." },
      { type: "UCAP", text: "Look at these project proposals again. Which one would you recommend — and can you say why?" },
    ],

    active_vocabulary: [
      "Therefore,",
      "I recommend",
      "because",
      "charity",
      "community",
      "volunteers",
      "donation"
    ],

    model_sentences: [
      { id: "model_1", text: "Some people think a car wash is best. However, I think a book sale is better because more students can help." },
      { id: "model_2", text: "How about a book sale for charity? We could ask volunteers to help." },
      { id: "model_3", text: "Therefore, I recommend a book sale because it raises money easily and everyone can help." },
      { id: "model_4", text: "Therefore, I recommend asking for donations because the community can support our project." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Project proposal cards for a class charity: a book sale, a snack sale, a car wash, a donation drive.", description_id: "Kartu usulan proyek untuk bakti sosial kelas: jualan buku, jualan jajanan, cuci mobil, penggalangan donasi.", asset_id: null },
      { id: "visual_2", description: "A recommendation frame: 'Therefore, I recommend ___ because ___.'", description_id: "Kerangka rekomendasi: 'Therefore, I recommend ___ because ___.'", asset_id: null },
      { id: "visual_3", description: "Icons: a stack of books, a community group, volunteers, a donation box.", description_id: "Ikon: tumpukan buku, kelompok komunitas, relawan, kotak donasi.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher draws the hands together to a conclusion while saying 'Therefore, ...'.", description_id: "Guru menyatukan kedua tangan sebagai kesimpulan sambil mengucapkan 'Therefore, ...'." },
      { id: "gesture_2", description: "Teacher points forward to the chosen option while saying 'I recommend ...'.", description_id: "Guru menunjuk ke depan ke arah opsi yang dipilih sambil mengucapkan 'I recommend ...'." },
      { id: "gesture_3", description: "Teacher opens a hand for the supporting reason while saying 'because ...'.", description_id: "Guru membuka tangan untuk alasan pendukungnya sambil mengucapkan 'because ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher weigh charity options and conclude with a supported recommendation: 'Therefore, I recommend ... because ...'.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-15", "PAT-8-03"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the recommendation sentences ('Therefore, I recommend ... because ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Make your own recommendation for the charity project with a supporting reason.",
      prompt: "Use the pattern 'Therefore, I recommend [option] because [reason].' Recommend one charity idea (charity, community, volunteers, donation). Give a recommendation with a reason -- not a step-by-step instruction ('First, ...'), not 'I learned ...', and not a process summary.",
      change_target: ["recommendation (Therefore, I recommend ...)", "reason (because ...)"],
      differentiation: {
        easy: { task: "Use a proposal card and complete: 'Therefore, I recommend ___ because ___.'" },
        standard: { task: "Write your recommendation with a supporting reason ('Therefore, I recommend ... because ...')." },
        challenge: { task: "Weigh the options first ('Some people think ... However, I think ...'), then conclude with 'Therefore, I recommend ... because ...'." }
      },
      support: { pattern_support: ["PAT-8-15", "PAT-8-03"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Evaluate proposal cards and recommend one in a small group.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, look at the proposal cards. Take turns weighing options and concluding with a recommendation ('Therefore, I recommend ... because ...'). Work toward one recommendation the group supports.",
      differentiation: {
        easy: { task: "Recommend one option with a reason ('Therefore, I recommend ... because ...'). You may read." },
        standard: { task: "Weigh two options, then recommend one with a reason, without reading." },
        challenge: { task: "Acknowledge another option ('Some people think ... However, ...'), then conclude with 'Therefore, I recommend ... because ...'." }
      },
      support: { pattern_support: ["PAT-8-15", "PAT-8-03"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your recommendation to a new group (recommendation presentation).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting your recommendation ('Therefore, I recommend ... because ...') for the class charity project.",
      differentiation: {
        easy: { task: "Present your recommendation with a reason. You may read it." },
        standard: { task: "Present your recommendation with a reason without reading." },
        challenge: { task: "Present your recommendation, then answer one question about your reason from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students conclude with a supported recommendation: 'Therefore, I recommend ... because ...'",
        "students give a recommendation with a reason (a conclusion), not a set of instructions or a lesson learned",
        "students still give steps ('First, do ...'), a moral ('I learned ...'), or a process summary instead of a recommendation"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to support the recommendation with two reasons.",
        needs_model: "Repeat the MODEL step, emphasizing 'Therefore, I recommend ... because ...' as a supported conclusion.",
        needs_repeat: "Do one more round of REPEAT (choral) on the recommendation sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives instructions or a lesson learned instead of a supported recommendation",
        "relies only on the written recommendation and cannot present without reading",
        "concludes with 'Therefore, I recommend ... because ...' accurately and confidently"
      ],
      action: [
        "recast the recommendation slowly, modeling 'Therefore, I recommend ... because ...' as a supported conclusion",
        "model one more recommendation on a different school topic to show the same pattern still works",
        "for a student who is ready, model ONE recommendation with two reasons first -- 'Therefore, I recommend asking for donations because the community can support our project and students learn about helping others.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the recommendation head, not instructions, a moral, or a summary"
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
