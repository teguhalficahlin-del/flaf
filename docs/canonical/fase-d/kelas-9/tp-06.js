export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-06.js",
    pattern_id: "PAT-9-06",
    title: "Class Charity Project: Review and Recommendation",
    short_title: "Charity Project Review",
    grade: 9,
    genre: "Review",
    cluster: "B",
    topic: "Class Charity Project",
    context: "Students review a class charity project by describing it, evaluating its strengths and limitations, and concluding with a recommendation.",
    communicative_goal: "produce a complete review integrating description, evaluation, balanced judgment, and recommendation",
    vocabulary_domain: ["charity", "community service", "participation", "evaluation"],
    input_anchor: "project summary cards",
    output_anchor: "complete project review",
    prerequisite_patterns: ["PAT-7-06", "PAT-8-13", "PAT-8-15", "PAT-8-16", "PAT-9-05"],
    reusable_in: ["PAT-9-07"],
    complexity_level: "Integrate",
    notes: "TP keenam Kelas 9, genre Review (cluster B -- CLOSER CLUSTER 2, integrasi struktur review terlengkap). QUINT PREREQ: PAT-7-06, PAT-8-13, PAT-8-15, PAT-8-16, PAT-9-05. target_pattern PAT-9-06 = 'It is...I believe...because...One strength is...However,...Therefore, I recommend...' (6 komponen: description + claim + reason + strength + limitation + recommendation). PERFORMA REVIEW TERLENGKAP di cluster ini -- meminta siswa menggabungkan seluruh komponen Review dari TP-04 (describe+evaluate) dan TP-05 (strength+However) menjadi performa utuh dengan recommendation sebagai penutup. Reaktivasi PAT-7-06 (WAJIB, VR-1): 'It is...and...' (deskripsi K7) direaktivasi sebagai KOMPONEN DESKRIPTIF pembuka review -- fungsi sama (menggabungkan dua ciri), konteks bergeser dari benda/tempat netral ke proyek yang akan dievaluasi. Reaktivasi PAT-8-13 (WAJIB, VR-1): 'I believe...because...' (claim+reason K8 argumentatif) direaktivasi sebagai evaluative claim dalam review -- lebih personal dari report, kurang advokasi dari argumen publik. Reaktivasi PAT-8-15 (WAJIB, VR-1): acknowledge-counter K8 direaktivasi sebagai BALANCED EVALUATION -- 'However,' kini penanda limitation dalam review, bukan counter-argumen. Reaktivasi PAT-8-16 (WAJIB, VR-1): 'Therefore, I recommend...' (konektor formal K8) menjadi KOMPONEN PENUTUP review -- rekomendasi berdasarkan evaluasi seimbang, bukan rekomendasi standalone. Reaktivasi PAT-9-05 (WAJIB, VR-1): balanced review 'One strength is...However,...' (TP-05) terintegrasi sebagai sub-struktur dalam TP-06 -- bukan diulang verbatim melainkan diperluas dengan komponen deskripsi (It is...) dan recommendation (Therefore, I recommend...). forbidden_overlap (argumentative essay on public issues, neutral report, promotional advertisement): 'It is...' bukan pure description (report) -- harus diikuti evaluasi. 'Therefore, I recommend...' bukan standalone advocacy (argument) -- harus muncul setelah balanced evaluation. BOOST extension: tambah 'Based on this evaluation,...I am confident that...' sebelum recommendation -- framing evaluatif lebih sophisticated.",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "It is",
      "I believe",
      "because",
      "One strength is",
      "However,",
      "Therefore, I recommend",
      "charity",
      "community service",
      "participation",
      "evaluation"
    ],

    model_sentences: [
      { id: "model_1", text: "It is a charity project where students collect books for children in the local community, and it runs every term." },
      { id: "model_2", text: "I believe this project is valuable because it builds real community service skills and gives participants a sense of purpose." },
      { id: "model_3", text: "One strength is the high level of student participation across all classes. However, the project needs clearer evaluation criteria to measure its real impact." },
      { id: "model_4", text: "Therefore, I recommend continuing the charity project with a simple evaluation plan so students can see the results of their community service and feel proud of their participation." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Project summary cards showing three charity project options: a book collection drive, a school clean-up day, and a community food bank contribution -- each with a brief description and participation numbers.", asset_id: null },
      { id: "visual_2", description: "A complete review structure frame with six labelled slots: DESCRIBE (It is...) / CLAIM (I believe... because...) / STRENGTH (One strength is...) / LIMITATION (However,...) / RECOMMENDATION (Therefore, I recommend...).", asset_id: null },
      { id: "visual_3", description: "Icons: a charity box, a community service group, a participation checklist, and an evaluation rubric star -- matching vocabulary_domain items.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to the project card while saying 'It is ...' -- to signal opening with description before evaluation begins." },
      { id: "gesture_2", description: "Teacher alternates one hand up (strength) and one hand tilted (however/limitation) to show the balance move in the middle of the review." },
      { id: "gesture_3", description: "Teacher brings both hands forward together while saying 'Therefore, I recommend ...' -- to signal that the recommendation follows from the full evaluation, not just from one side." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher produce a complete six-component review: describe ('It is ...'), evaluate ('I believe ... because ...'), identify a strength ('One strength is ...'), identify a limitation ('However, ...'), and conclude with a recommendation ('Therefore, I recommend ...') -- a complete review, not an argument and not a neutral report.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-06", "PAT-8-13", "PAT-8-15", "PAT-8-16", "PAT-9-05"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the complete review sentences ('It is ...' / 'I believe ... because ...' / 'One strength is ...' / 'However, ...' / 'Therefore, I recommend ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own complete review of a class charity project.",
      prompt: "Write a full review using all five components: 'It is ___ ...' (describe the project), 'I believe ___ because ___.' (your overall evaluation), 'One strength is ___.' (a positive), 'However, ___.' (a limitation), 'Therefore, I recommend ___.' (recommendation based on your evaluation). Use: charity, community service, participation, or evaluation. Keep all five components -- the recommendation must follow from your balanced evaluation, not appear on its own.",
      change_target: ["description (It is ...)", "evaluative claim (I believe ... because ...)", "strength (One strength is ...)", "limitation (However, ...)", "recommendation (Therefore, I recommend ...)"],
      differentiation: {
        easy: { task: "Use the review structure frame and fill in each slot in order. You may look at the project summary cards." },
        standard: { task: "Write your own complete review without reading the frame." },
        challenge: { task: "Write the complete review and add a second strength or limitation to make the evaluation more thorough before the recommendation." }
      },
      support: { pattern_support: ["PAT-7-06", "PAT-8-13", "PAT-8-15", "PAT-8-16", "PAT-9-05"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share complete reviews in a small group and check for all five components.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, take turns presenting your complete charity project review. The group checks: description? evaluative claim with reason? strength? limitation? recommendation? After each review, one group member names the most convincing part and explains why.",
      differentiation: {
        easy: { task: "Read your review to the group. Others tick each component on the frame as they hear it." },
        standard: { task: "Present your review without reading. The group checks all five components." },
        challenge: { task: "Present your review and the group asks 'Does your recommendation follow logically from your evaluation?' -- you explain the connection." }
      },
      support: { pattern_support: ["PAT-7-06", "PAT-8-13", "PAT-8-15", "PAT-8-16", "PAT-9-05"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your complete project review to a new group (complete project review).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting your complete review ('It is ...' / 'I believe ...' / 'One strength is ...' / 'However, ...' / 'Therefore, I recommend ...').",
      differentiation: {
        easy: { task: "Present your review to the new group using your written notes." },
        standard: { task: "Present your complete review without reading." },
        challenge: { task: "Present your complete review, then answer one question from the group: 'Why does your recommendation follow from the limitation you identified?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students produce all five review components: description, evaluative claim, strength, limitation, and recommendation that follows from the evaluation",
        "students keep 'Therefore, I recommend ...' grounded in the balanced evaluation -- not a standalone persuasive call",
        "students skip the limitation ('However, ...') and make a purely positive review, or jump straight to a recommendation without any evaluation"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a 'Based on this evaluation,...' framing before their recommendation.",
        needs_model: "Repeat the MODEL step, walking through the review structure frame component by component.",
        needs_repeat: "Do one more round of REPEAT (choral) on the complete review sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "skips the limitation or gives a recommendation without any prior evaluation (straight to 'Therefore, I recommend ...')",
        "produces all five components but cannot present without reading",
        "integrates all five review components into one coherent complete review accurately and confidently"
      ],
      action: [
        "recast the review slowly, pointing to the structure frame: describe -- evaluate -- strength -- limitation -- recommend; show that the recommendation is the last step, not the first",
        "model one more complete review on a different class project (e.g. a school garden project) to show the same five-component structure still works",
        "for a student who is ready, model ONE evaluative framing phrase before the recommendation first -- 'Based on this evaluation, I am confident that a stronger charity project with regular participation would bring lasting benefits to the whole community.' -- then invite that student to add 'Based on this evaluation,...' before their own 'Therefore, I recommend ...' to signal that the recommendation follows from their full review; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it strengthens the review-to-recommendation link without replacing any component"
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
