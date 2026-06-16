export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-12.js",
    pattern_id: "PAT-9-12",
    title: "Healthy School Environment: Drawing Evidence-Based Conclusions",
    short_title: "Evidence Conclusions",
    grade: 9,
    genre: "Information Synthesis",
    cluster: "B",
    topic: "Healthy School Environment",
    context: "Students draw an integrated evidence-based conclusion about what multiple sources together suggest about creating a healthy school environment, covering air quality, green spaces, and physical activity.",
    context_id: "Siswa menarik kesimpulan terpadu berbasis bukti tentang apa yang disarankan beberapa sumber secara bersama-sama mengenai penciptaan lingkungan sekolah yang sehat, meliputi kualitas udara, ruang hijau, dan aktivitas fisik.",
    communicative_goal: "draw an evidence-based conclusion by explicitly citing multiple sources and showing what they collectively suggest",
    communicative_goal_id: "menarik kesimpulan berbasis bukti dengan mengutip beberapa sumber secara eksplisit dan menunjukkan apa yang disarankan secara kolektif",
    vocabulary_domain: ["air quality", "physical activity", "healthy habits", "evidence-based conclusions"],
    input_anchor: "multiple source syntheses",
    output_anchor: "evidence-based conclusion",
    prerequisite_patterns: ["PAT-9-10", "PAT-9-11", "PAT-8-12"],
    reusable_in: ["PAT-9-13"],
    complexity_level: "Integrate",
    notes: "TP keduabelas Kelas 9, genre Information Synthesis (cluster B -- CLOSER CLUSTER 4). TRIPLE PREREQ: PAT-9-10, PAT-9-11, PAT-8-12. target_pattern PAT-9-12 = 'Based on these sources,... This suggests... Therefore,...' (tiga langkah: kutip sumber -> inferensi -> kesimpulan). PAT-8-24 (K8 structural flyer) SENGAJA TIDAK DIMASUKKAN sebagai prereq di sini -- sudah direaktivasi di TP-10 (Cluster 4 opener); memasukkan lagi di TP-12 akan memberikan beban kognitif ganda tanpa penambahan makna (lihat catatan TP Mapping TG-1). Reaktivasi PAT-9-10 (WAJIB, VR-1): 'Together, they show...' (K9, sintesis dua sumber) direaktivasi sebagai KAPASITAS SINTESIS dasar -- 'Based on these sources,...' adalah versi yang telah diperluas: bukan hanya dua sumber, tetapi MULTIPLE SOURCES sekaligus. Reaktivasi PAT-9-11 (WAJIB, VR-1): 'Both sources... Therefore,...' (K9, perbandingan sumber) direaktivasi sebagai KAPASITAS MENARIK KESIMPULAN dari komparasi -- 'This suggests...' dan 'Therefore,...' di TP-12 memperluas satu kesimpulan TP-11 menjadi rangkaian: inferensi ('This suggests...') lalu kesimpulan ('Therefore,...'). Reaktivasi PAT-8-12 (WAJIB, VR-1): 'Based on the results,...' (K8, science report) direaktivasi sebagai KAPASITAS REFERENSI BUKTI -- 'Based on these sources,...' adalah elevasi register dari laporan sains ke sintesis informasi multi-sumber. extends_to PAT-9-13 (jembatan ke Cluster 5 Problem & Solution -- evidence-based conclusion dari TP-12 menjadi fondasi identifikasi masalah di TP-13). forbidden_overlap (single-source report, presentation conclusion, summary without inference): WAJIB ada tiga komponen berurutan: 'Based on these sources,...' (kutip multi-sumber) -> 'This suggests...' (inferensi) -> 'Therefore,...' (kesimpulan) -- bukan rangkuman satu sumber, bukan kesimpulan presentasi (PAT-9-09), bukan daftar fakta tanpa implikasi. vocabulary_domain: air quality ✓ model_1/3/4, physical activity ✓ model_2/3/4, healthy habits ✓ model_2/4, evidence-based conclusions ✓ model_4 (literal). BOOST extension: tambah 'What all these sources share is...' sebagai sintesis-emphasis opener alternatif.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Welcome. Today we draw evidence-based conclusions from multiple sources." },
      { type: "AKSI", text: "Kondisikan kelas untuk sesi sintesis yang memerlukan konsentrasi tinggi." },
      // HOOK
      { type: "UCAP", text: "You have read about air quality, physical activity, and green spaces. What do all three suggest together?" },
      { type: "AKSI", text: "Tampilkan kumpulan tiga kartu sumber tersusun segitiga, semua menunjuk ke tanda panah pusat 'Based on these sources...'." },
      { type: "UCAP", text: "Look at these three source cards. What conclusion can you draw from all of them combined?" },
    ],

    active_vocabulary: [
      "Based on these sources,",
      "This suggests",
      "Therefore,",
      "air quality",
      "physical activity",
      "healthy habits",
      "evidence-based conclusions"
    ],

    model_sentences: [
      { id: "model_1", text: "Based on these sources, schools with better air quality and access to green outdoor spaces tend to support student wellbeing more effectively." },
      { id: "model_2", text: "This suggests that regular physical activity and a healthy school environment work together to build healthy habits in students over time." },
      { id: "model_3", text: "Therefore, any plan to improve the school environment should include evidence-based measures targeting both air quality and daily physical activity." },
      { id: "model_4", text: "Based on these sources about trees, exercise, and student wellbeing, this suggests that green spaces and active routines support each other in building healthy habits. Therefore, evidence-based conclusions about school health must consider the environment and daily physical activity together, not separately." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A cluster of three source cards arranged in a triangle: Source A (air quality report), Source B (physical activity study), Source C (green spaces and wellbeing data) -- all pointing into a central 'Based on these sources...' arrow.", description_id: "Kumpulan tiga kartu sumber tersusun segitiga: Sumber A (laporan kualitas udara), Sumber B (studi aktivitas fisik), Sumber C (data ruang hijau dan kesejahteraan) -- semuanya menunjuk ke tanda panah pusat 'Based on these sources...'.", asset_id: null },
      { id: "visual_2", description: "A three-step evidence-conclusion frame: Step 1 'Based on these sources,...' (cite multiple sources) → Step 2 'This suggests...' (inference) → Step 3 'Therefore,...' (evidence-based conclusion).", description_id: "Kerangka kesimpulan-bukti tiga langkah: Langkah 1 'Based on these sources,...' (mengutip beberapa sumber) → Langkah 2 'This suggests...' (inferensi) → Langkah 3 'Therefore,...' (kesimpulan berbasis bukti).", asset_id: null },
      { id: "visual_3", description: "A progression diagram showing cluster escalation: TP-10 ('Together, they show...' = two sources) → TP-11 ('Both sources... Therefore,...' = comparison) → TP-12 ('Based on these sources... This suggests... Therefore,...' = multiple sources, inference, conclusion).", description_id: "Diagram perkembangan menunjukkan eskalasi kelompok: TP-10 ('Together, they show...' = dua sumber) → TP-11 ('Both sources... Therefore,...' = perbandingan) → TP-12 ('Based on these sources... This suggests... Therefore,...' = banyak sumber, inferensi, kesimpulan).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher sweeps an open hand across all three source cards while saying 'Based on these sources,...' -- to signal drawing from multiple sources simultaneously, not just one.", description_id: "Guru menyapukan tangan terbuka melintasi ketiga kartu sumber sambil mengucapkan 'Based on these sources,...' -- untuk menandai mengambil dari beberapa sumber secara bersamaan, bukan hanya satu." },
      { id: "gesture_2", description: "Teacher taps temple while saying 'This suggests...' -- to signal that an inference is being drawn from the evidence, not stated directly in any one source.", description_id: "Guru menepuk pelipis sambil mengucapkan 'This suggests...' -- untuk menandai bahwa sebuah inferensi sedang ditarik dari bukti, bukan dinyatakan langsung di salah satu sumber." },
      { id: "gesture_3", description: "Teacher brings both hands slowly to a point while saying 'Therefore,...' -- to signal the final conclusion drawn from all evidence combined.", description_id: "Guru menyatukan kedua tangan perlahan ke satu titik sambil mengucapkan 'Therefore,...' -- untuk menandai kesimpulan akhir yang ditarik dari semua bukti yang dipadukan." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher draw an evidence-based conclusion using three steps: 'Based on these sources,...' (cite multiple sources) + 'This suggests...' (inference from the evidence) + 'Therefore,...' (conclusion) -- not a single-source report, not a presentation closing, and not a list of facts without an inference.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-9-10", "PAT-9-11", "PAT-8-12"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the three-step evidence conclusion ('Based on these sources,...' / 'This suggests...' / 'Therefore,...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own evidence-based conclusion about the healthy school environment using all three steps.",
      prompt: "Read your source syntheses from TP-10 and TP-11, then write: 'Based on these sources,...' (what the sources collectively show -- cite at least two), 'This suggests...' (the inference you draw from the evidence -- something the sources imply but do not state directly), 'Therefore,...' (your evidence-based conclusion). Include: air quality, physical activity, healthy habits, or evidence-based conclusions. Keep the three steps distinct: citing sources is not the same as inferring, and inferring is not the same as concluding.",
      change_target: ["source citation (Based on these sources, ...)", "inference (This suggests ...)", "evidence-based conclusion (Therefore, ...)"],
      differentiation: {
        easy: { task: "Use the three-step frame and fill in each slot. You may use your TP-10 and TP-11 written syntheses." },
        standard: { task: "Write your own three-step evidence conclusion without reading the frame." },
        challenge: { task: "Write the conclusion and make 'This suggests...' an inference that goes BEYOND what any single source states -- something only visible when you read them together." }
      },
      support: { pattern_support: ["PAT-9-10", "PAT-9-11", "PAT-8-12"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share evidence-based conclusions with a small group and evaluate whether each step is distinct.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, take turns sharing your conclusion ('Based on these sources,...' / 'This suggests...' / 'Therefore,...'). After each turn, the group checks: Does 'Based on these sources' reference more than one source? Does 'This suggests' say something not directly in any source? Does 'Therefore,...' follow logically? Each member rates whether the three steps feel distinct.",
      differentiation: {
        easy: { task: "Read your three-step conclusion to the group. Others tick each step as they hear it." },
        standard: { task: "Share your conclusion without reading. The group checks whether all three steps are distinct." },
        challenge: { task: "Share your conclusion and the group asks 'Is your inference in This suggests actually in the sources, or did you add it?' -- you explain your reasoning." }
      },
      support: { pattern_support: ["PAT-9-10", "PAT-9-11", "PAT-8-12"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your evidence-based conclusion to a new group (evidence-based conclusion).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting your three-step evidence conclusion ('Based on these sources,...' / 'This suggests...' / 'Therefore,...').",
      differentiation: {
        easy: { task: "Present your conclusion to the new group using your written notes." },
        standard: { task: "Present your conclusion without reading." },
        challenge: { task: "Present your conclusion, then answer one question from the group: 'What would you need to know to be more confident in your Therefore conclusion?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students produce all three steps in order: 'Based on these sources,...' (cites multiple sources) → 'This suggests...' (draws an inference not explicitly stated in any source) → 'Therefore,...' (states an evidence-based conclusion)",
        "students distinguish between citing ('Based on these sources,...'), inferring ('This suggests...'), and concluding ('Therefore,...') as three different moves",
        "students collapse all three steps into one ('Based on these sources we can see that therefore...') or use 'This suggests' as a repetition of 'Based on these sources' rather than as a new inference"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to replace 'Based on these sources,...' with 'What all these sources share is...' as an alternative synthesis opener.",
        needs_model: "Repeat the MODEL step using the three-step frame -- point to the difference: 'Based on these sources' = what exists in the data; 'This suggests' = what the data implies; 'Therefore' = what follows from that implication.",
        needs_repeat: "Do one more round of REPEAT (choral) with pauses naming each step before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "collapses the three steps ('The sources suggest therefore...') or repeats the same idea in all three steps without distinguishing citation, inference, and conclusion",
        "produces all three steps correctly but cannot present without reading",
        "produces all three distinct steps with a genuine inference in 'This suggests...' that goes beyond any single source, accurately and confidently"
      ],
      action: [
        "recast the three steps slowly, naming each move: 'Based on these sources = I am reading multiple sources. This suggests = I am adding something they do not say directly. Therefore = this is my conclusion from combining both.' -- repeat with a simple example: three cards about eating, sleeping, and exercise, then infer and conclude.",
        "model one more three-step evidence conclusion on a different multi-source topic (e.g. screen time, water intake, and student concentration) to show the same three-step structure still works",
        "for a student who is ready, model ONE alternative opener first -- 'What all these sources share is a concern for the daily school environment. This suggests that healthy habits cannot be built through one change alone. Therefore, schools need a coordinated approach that addresses both air quality and physical activity together.' -- then invite that student to rewrite their 'Based on these sources,...' using 'What all these sources share is...' instead; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it expands the student's repertoire of evidence-based opening moves"
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
