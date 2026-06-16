export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-11.js",
    pattern_id: "PAT-9-11",
    title: "Green Spaces and Physical Activity: Comparing Sources",
    short_title: "Comparing Sources",
    grade: 9,
    genre: "Information Synthesis",
    cluster: "A",
    topic: "Green Spaces and Physical Activity",
    context: "Students compare two sources -- one about the benefits of green spaces (Source A) and one about the benefits of physical activity (Source B) -- and draw a conclusion that uses both.",
    context_id: "Siswa membandingkan dua sumber — satu tentang manfaat ruang hijau (Sumber A) dan satu tentang manfaat aktivitas fisik (Sumber B) — lalu menarik kesimpulan yang menggunakan keduanya.",
    communicative_goal: "compare two sources explicitly, identify what they agree and disagree on, and draw a conclusion from the comparison",
    communicative_goal_id: "membandingkan dua sumber secara eksplisit, mengidentifikasi kesamaan dan perbedaannya, serta menarik kesimpulan dari perbandingan tersebut",
    vocabulary_domain: ["green spaces", "physical activity", "public health", "comparison"],
    input_anchor: "two source documents",
    output_anchor: "source comparison",
    prerequisite_patterns: ["PAT-9-10", "PAT-8-06", "PAT-8-08"],
    reusable_in: ["PAT-9-12"],
    complexity_level: "Integrate",
    notes: "TP kesebelas Kelas 9, genre Information Synthesis (cluster A -- development Cluster 4). TRIPLE PREREQ: PAT-9-10, PAT-8-06, PAT-8-08. target_pattern PAT-9-11 = 'Both sources... However, Source A... while Source B... Therefore,...' (perbandingan dua sumber: persamaan -> perbedaan -> kesimpulan). Reaktivasi PAT-9-10 (WAJIB, VR-1): 'Source A says... Source B says... Together, they show...' (K9, Information Synthesis) direaktivasi sebagai KAPASITAS DASAR sintesis dua sumber -- PAT-9-11 memperluas dengan menambahkan DUA DIMENSI BARU: (1) 'However, Source A... while Source B...' yang mengidentifikasi perbedaan fokus antar sumber (tidak ada di PAT-9-10 yang hanya mensintesis persamaan), (2) 'Therefore,...' sebagai kesimpulan evaluatif dari perbandingan. Reaktivasi PAT-8-06 (WAJIB, VR-1): 'On the other hand,...' / contrastive discourse (K8) direaktivasi sebagai KAPASITAS KONTRAS -- 'However, Source A... while Source B...' adalah perluasan register dari kontras interpersonal ke kontras antar-sumber. Reaktivasi PAT-8-08 (WAJIB, VR-1): 'Both... and...' / similarity marker (K8) direaktivasi sebagai KAPASITAS KESAMAAN -- 'Both sources...' adalah versi sintesis-level dari 'Both... and...' yang pertama muncul di K8. forbidden_overlap (reporting only from each source separately, listing similarities only, narrative contrast): WAJIB punya komponen 'Therefore,...' yang menarik kesimpulan dari perbandingan -- bukan daftar persamaan-perbedaan tanpa implikasi. vocabulary_domain: green spaces ✓ model_1/3/4, physical activity ✓ model_1/3/4, public health ✓ model_1/3/4, comparison ✓ model_3/4. BOOST extension: tambah 'This is significant because...' setelah 'Therefore,...' untuk mengeksplisitkan implikasi dari kesimpulan.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. We are comparing two sources today — carefully." },
      { type: "AKSI", text: "Minta siswa mempersiapkan kedua dokumen sumber sebelum memulai." },
      // HOOK
      { type: "UCAP", text: "Consider two topics: green spaces and physical activity. Are they related, or completely separate?" },
      { type: "AKSI", text: "Tampilkan dua dokumen sumber berdampingan: laporan ruang hijau perkotaan dan laporan kesehatan aktivitas fisik." },
      { type: "UCAP", text: "Look at both sources. What do they agree on — and where do their focuses differ?" },
    ],

    active_vocabulary: [
      "Both sources",
      "However,",
      "Source A",
      "while Source B",
      "Therefore,",
      "green spaces",
      "physical activity",
      "public health",
      "comparison"
    ],

    model_sentences: [
      { id: "model_1", text: "Both sources suggest that green spaces and physical activity are closely connected to better public health." },
      { id: "model_2", text: "However, Source A focuses on how trees and parks improve air quality in urban environments, while Source B focuses on how regular exercise directly improves heart rate, energy levels, and concentration." },
      { id: "model_3", text: "Therefore, a comparison of both sources shows that improving public health requires both access to green spaces and regular physical activity -- they support each other." },
      { id: "model_4", text: "Both sources agree that outdoor environments support better student health. However, Source A emphasizes the benefits of clean air from green spaces, while Source B emphasizes the direct physical benefits of movement and exercise. Therefore, the comparison suggests that schools should provide both green spaces and structured time for physical activity in their daily routine." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Two source documents side by side: Source A -- a report about urban green spaces with data about air quality and mood; Source B -- a health report about physical activity with data about exercise frequency and student concentration.", description_id: "Dua dokumen sumber berdampingan: Sumber A -- laporan tentang ruang hijau perkotaan dengan data kualitas udara dan suasana hati; Sumber B -- laporan kesehatan tentang aktivitas fisik dengan data frekuensi olahraga dan konsentrasi siswa.", asset_id: null },
      { id: "visual_2", description: "A comparison frame with four labelled slots: 'Both sources...' (agreement) / 'However, Source A...' (what A focuses on) / 'while Source B...' (what B focuses on) / 'Therefore,...' (conclusion from the comparison).", description_id: "Kerangka perbandingan dengan empat slot berlabel: 'Both sources...' (kesepakatan) / 'However, Source A...' (fokus A) / 'while Source B...' (fokus B) / 'Therefore,...' (kesimpulan dari perbandingan).", asset_id: null },
      { id: "visual_3", description: "Icons: a tree in a park (green spaces), a student running (physical activity), a heart with a healthy pulse (public health), and weighing scales (comparison).", description_id: "Ikon: pohon di taman (ruang hijau), siswa berlari (aktivitas fisik), hati dengan detak sehat (kesehatan masyarakat), dan timbangan (perbandingan).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher places both hands flat while saying 'Both sources...' -- to signal that both sources agree on the same point.", description_id: "Guru meletakkan kedua tangan rata sambil mengucapkan 'Both sources...' -- untuk menandai bahwa kedua sumber sepakat pada poin yang sama." },
      { id: "gesture_2", description: "Teacher tilts one hand up for Source A and the other hand up in a different direction for Source B while saying 'However, Source A... while Source B...' -- to show they are looking at the same issue from different angles.", description_id: "Guru memiringkan satu tangan ke atas untuk Sumber A dan tangan lain ke arah berbeda untuk Sumber B sambil mengucapkan 'However, Source A... while Source B...' -- untuk menunjukkan keduanya melihat isu yang sama dari sudut berbeda." },
      { id: "gesture_3", description: "Teacher brings hands forward together while saying 'Therefore,...' -- to signal that the conclusion comes from combining the full comparison, not just one source.", description_id: "Guru menyatukan kedua tangan ke depan sambil mengucapkan 'Therefore,...' -- untuk menandai bahwa kesimpulan muncul dari memadukan keseluruhan perbandingan, bukan hanya satu sumber." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher compare two sources using the full pattern: 'Both sources...' (shared point) + 'However, Source A... while Source B...' (different focus) + 'Therefore,...' (conclusion from comparison) -- not a list of similarities and differences, and not a report from only one source.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-9-10", "PAT-8-06", "PAT-8-08"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the comparison sentences ('Both sources...' / 'However, Source A... while Source B...' / 'Therefore,...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own source comparison using the full four-component pattern.",
      prompt: "Read Source A (green spaces) and Source B (physical activity), then write: 'Both sources...' (what both agree on), 'However, Source A... while Source B...' (what each focuses on differently), 'Therefore,...' (your conclusion from the comparison). Include: green spaces, physical activity, public health, or comparison. Keep the 'Therefore,...' as a conclusion that uses the comparison -- not a summary of only one source, and not a list of differences without any conclusion.",
      change_target: ["shared point (Both sources ...)", "difference in focus (However, Source A ... while Source B ...)", "conclusion from comparison (Therefore, ...)"],
      differentiation: {
        easy: { task: "Use the comparison frame and fill in each slot using the two source documents." },
        standard: { task: "Write your own source comparison without reading the frame." },
        challenge: { task: "Write the comparison and make 'Therefore,...' explain why the difference in focus actually strengthens the conclusion rather than weakening it." }
      },
      support: { pattern_support: ["PAT-9-10", "PAT-8-06", "PAT-8-08"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share source comparisons with a partner and check for all four components.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your comparison ('Both sources...' / 'However, Source A... while Source B...' / 'Therefore,...'). Your partner checks: Is there a shared point? Is there a clear difference between A and B? Does 'Therefore,...' draw a conclusion from the comparison? Then swap.",
      differentiation: {
        easy: { task: "Read your comparison to your partner. Your partner points to 'Both', 'However', 'while', and 'Therefore' in your text." },
        standard: { task: "Share your comparison without reading. Your partner checks all four components and whether 'Therefore' adds a new conclusion." },
        challenge: { task: "Share your comparison and your partner asks 'Would you reach the same conclusion if you only read one source?' -- you explain why both are necessary." }
      },
      support: { pattern_support: ["PAT-9-10", "PAT-8-06", "PAT-8-08"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your source comparison to a new group (source comparison).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your comparison ('Both sources...' / 'However, Source A... while Source B...' / 'Therefore,...').",
      differentiation: {
        easy: { task: "Present your comparison to the group using your written notes." },
        standard: { task: "Present your comparison without reading." },
        challenge: { task: "Present your comparison, then answer one question from the group: 'What would we lose if we only read one source instead of both?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students identify a shared point ('Both sources...'), name what each source focuses on differently ('However, Source A... while Source B...'), and draw a conclusion ('Therefore,...') that emerges from the comparison",
        "students use 'Therefore,...' as a genuine conclusion from the contrast -- not just a summary of the last source mentioned",
        "students list similarities and differences separately without a conclusion ('Source A says... Source B says... They are different because...') or omit the 'Both sources' agreement entirely"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add 'This is significant because...' after 'Therefore,...' to make the implication of the comparison explicit.",
        needs_model: "Repeat the MODEL step, pointing to the conclusion slot on the frame -- 'Therefore,...' must come from the comparison of BOTH sources, not from one source alone.",
        needs_repeat: "Do one more round of REPEAT (choral) with pauses naming each component's function before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "lists similarities and differences without drawing a conclusion ('Both sources talk about health. Source A focuses on green spaces. Source B focuses on exercise. They are both important.') or leaves out 'Therefore,...'",
        "produces all four components correctly but cannot present without reading",
        "compares both sources with all four components and draws a clear evidence-based conclusion with 'Therefore,...' accurately and confidently"
      ],
      action: [
        "recast the pattern slowly, naming each component's function aloud: 'Both sources = what they agree on. However / while = where they differ in FOCUS. Therefore = what this difference tells us together -- not a summary of one source, a conclusion about both.'",
        "model one more comparison on different sources (e.g. two articles about school nutrition vs. exercise) to show the same four-component pattern still works",
        "for a student who is ready, model ONE significance sentence first -- 'Therefore, schools should invest in both green spaces and physical activity programs. This is significant because public health research shows neither alone is enough -- students need both.' -- then invite that student to add 'This is significant because...' after their own 'Therefore,...' to make the implication explicit; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it upgrades the conclusion from a summary to an evaluative insight"
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
