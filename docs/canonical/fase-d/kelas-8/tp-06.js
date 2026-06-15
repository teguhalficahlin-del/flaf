export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-06.js",
    pattern_id: "PAT-8-06",
    title: "City Trees: Describing General Characteristics",
    short_title: "City Trees",
    grade: 8,
    genre: "Report",
    cluster: "A",
    topic: "City Trees",
    context: "Students compare several common trees found in parks and streets and identify their shared characteristics.",
    communicative_goal: "describe general characteristics using most, some, and usually",
    vocabulary_domain: ["trees", "leaves", "shade", "parks"],
    input_anchor: "comparison chart",
    output_anchor: "group report",
    prerequisite_patterns: ["PAT-8-05"],
    reusable_in: ["PAT-8-12", "PAT-9-10"],
    complexity_level: "Expand",
    notes: "TP keenam Kelas 8, Report. target_pattern PAT-8-06 = 'Most ... / Some ... / They usually ...' (generalisasi sederhana). Reaktivasi PAT-8-05 (WAJIB, VR-1): 'It is a kind of [X]. It usually [Y].' (klasifikasi SATU jenis pohon) -> 'Most/Some [pohon jenis lain] ... They usually ...' (GENERALISASI ke BANYAK jenis/kelompok). Progresi: SATU kategori (8-05) -> BEBERAPA kategori dibandingkan (8-06). SUBJEK WAJIB PLURAL/GENERIK (trees, leaves), bukan satu pohon spesifik. forbidden_overlap (specific event recount, personal preference, fictional narrative): TIDAK ada 'Yesterday I saw...', TIDAK ada 'I prefer this tree because...', TIDAK ada cerita pohon. vocabulary_domain (trees, leaves, shade, parks) muncul di bahasa target. Ekstensi opsional generalisasi berkontras ('Most trees have green leaves, but some have red leaves.') -- menjaga head generalisasi, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "Most",
      "Some",
      "They usually",
      "trees",
      "leaves",
      "shade",
      "parks",
      "sunlight"
    ],

    model_sentences: [
      { id: "model_1", text: "A maple is a kind of tree. It usually has wide leaves." },
      { id: "model_2", text: "Most trees have green leaves." },
      { id: "model_3", text: "Some trees grow in parks and give shade." },
      { id: "model_4", text: "They usually need water and sunlight." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A comparison chart of several common city trees (maple, banyan, palm) with columns for leaves, shade, and where they grow.", asset_id: null },
      { id: "visual_2", description: "Generalization cards: 'Most ___', 'Some ___', 'They usually ___'.", asset_id: null },
      { id: "visual_3", description: "Icons: green leaves, a shady tree in a park, sun and water for what trees usually need.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher sweeps a hand across many trees while saying 'Most ...' to show a large group." },
      { id: "gesture_2", description: "Teacher points to a smaller part of the group while saying 'Some ...'." },
      { id: "gesture_3", description: "Teacher makes a steady, general gesture while saying 'They usually ...' for a shared characteristic." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher move from classifying one tree to generalizing across many trees with 'Most ... / Some ... / They usually ...'.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-05"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the generalization sentences ('Most ... / Some ... / They usually ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Describe general characteristics of trees by replacing the shared features.",
      prompt: "Use the patterns 'Most [plural] ...', 'Some [plural] ...', and 'They usually ...' Describe shared characteristics of city trees (trees, leaves, shade, parks). Keep the subject plural and general -- not one specific tree, and not 'Yesterday I saw ...'.",
      change_target: ["most (Most ...)", "some (Some ...)", "usual characteristic (They usually ...)"],
      differentiation: {
        easy: { task: "Use the comparison chart and complete: 'Most trees ___.' and 'Some trees ___.'" },
        standard: { task: "Write three general sentences: one 'Most ...', one 'Some ...', and one 'They usually ...'." },
        challenge: { task: "Start by classifying one tree ('A ___ is a kind of tree.'), then generalize with 'Most ... / Some ... / They usually ...'." }
      },
      support: { pattern_support: ["PAT-8-05"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Build a group report of shared tree characteristics together (group report).",
      interaction_mode: "small_group",
      task: "In a group of 3-4, use the comparison chart. Take turns adding a general sentence ('Most ... / Some ... / They usually ...') so the group builds a short report of what city trees share.",
      differentiation: {
        easy: { task: "Add one general sentence to the group's report ('Most trees ___.'). You may read." },
        standard: { task: "Add two general sentences (one 'Most/Some', one 'They usually') without reading." },
        challenge: { task: "Classify one tree, then add two generalizations, and check the group's report uses plural, general subjects." }
      },
      support: { pattern_support: ["PAT-8-05"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your group report to a new group (group report).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting general characteristics of city trees ('Most ... / Some ... / They usually ...').",
      differentiation: {
        easy: { task: "Present two general sentences to the new group. You may read them." },
        standard: { task: "Present three general sentences (Most / Some / They usually) without reading." },
        challenge: { task: "Present your generalizations, then answer one question about the characteristics from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students generalize with 'Most ... / Some ... / They usually ...'",
        "students keep the subject plural and general (trees, leaves), not one specific tree",
        "students still recount a specific event ('Yesterday I saw ...'), give a preference ('I prefer ...'), or tell a story"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a contrast generalization ('Most ... but some ...').",
        needs_model: "Repeat the MODEL step, emphasizing plural, general subjects with 'Most / Some / They usually'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the generalization sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "uses a singular/specific subject or recounts a personal event instead of generalizing",
        "relies only on the written sentences and cannot report without reading",
        "generalizes with 'Most / Some / They usually' and plural subjects accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling a plural, general subject with 'Most / Some / They usually'",
        "model one more generalization about a different group of living things to show the same pattern still works",
        "for a student who is ready, model ONE contrast generalization first -- 'Most trees have green leaves, but some have red leaves.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the general-report head, with no personal recount or preference"
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
