export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-05.js",
    pattern_id: "PAT-9-05",
    title: "Homework Policy: Writing a Balanced Review",
    short_title: "Homework Policy Review",
    grade: 9,
    genre: "Review",
    cluster: "A",
    topic: "Homework Policy",
    context: "Students evaluate the school homework policy by identifying a strength and a limitation, maintaining a balanced evaluative stance.",
    context_id: "Siswa mengevaluasi kebijakan pekerjaan rumah sekolah dengan mengidentifikasi satu kelebihan dan satu kekurangan, mempertahankan sikap evaluatif yang berimbang.",
    communicative_goal: "evaluate strengths and limitations while maintaining a balanced judgment",
    communicative_goal_id: "mengevaluasi kelebihan dan kekurangan sambil mempertahankan penilaian yang berimbang",
    vocabulary_domain: ["homework", "study habits", "time management", "school rules"],
    input_anchor: "policy summary cards",
    output_anchor: "balanced review",
    prerequisite_patterns: ["PAT-8-13", "PAT-8-15", "PAT-7-15"],
    reusable_in: ["PAT-9-06"],
    complexity_level: "Integrate",
    notes: "TP kelima Kelas 9, genre Review (cluster A). TRIPLE PREREQ: PAT-8-13, PAT-8-15, PAT-7-15. target_pattern PAT-9-05 = 'I believe...because...One strength is...However,...' (claim+reason evaluatif + balanced evaluation: strength + limitation). TITIK KRITIS PEMBEDA DARI PAT-9-02: TOPIK SAMA (homework policy), TAPI TUJUAN KOMUNIKATIF BERBEDA TOTAL. PAT-9-02 = defend a position against a counterpoint (argumentative, persuasif, advokasi publik). PAT-9-05 = evaluate strengths AND weaknesses in a balanced way (evaluatif, tidak memihak, mengakui dua sisi tanpa memenangkan salah satu). Reaktivasi PAT-8-13 (WAJIB, VR-1): 'I believe...because...' (claim+reason K8 argumentatif) direaktivasi dengan REGISTER EVALUATIF -- di sini 'I believe' bukan untuk mengadvokasi posisi publik melainkan untuk menyatakan penilaian umum ('I believe this policy has merits and limitations'). Reaktivasi PAT-8-15 (WAJIB, VR-1): 'Some people think...However,...' (acknowledge-counter K8) direaktivasi sebagai STRUKTUR BALANCED EVALUATION -- 'However,' kini bukan penanda counter-argumen melainkan penanda balanced turn ('One strength is...However,...' = evaluasi dua sisi). Reaktivasi PAT-7-15 (WAJIB, VR-1): personal response to experience 'It was...because...' (K7) menjadi fondasi untuk nada evaluatif personal -- review bukan sekadar fakta objektif, melainkan pengalaman/opini dinilai secara seimbang. forbidden_overlap (exposition defending a public issue, factual report, narrative reflection): nada harus EVALUATIF SEIMBANG -- bukan 'I believe homework is good therefore you should support it' (persuasif), bukan 'Homework is assigned every day and students do it after school' (factual report), bukan 'I remember when homework was difficult' (personal recount). BOOST extension: tambah 'On balance,...which suggests...' sebagai closing evaluatif lebih sophisticated -- tidak mengulang model verbatim.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. Today we evaluate something that affects all of us." },
      { type: "AKSI", text: "Minta siswa mempersiapkan diri untuk berpikir secara seimbang, bukan hanya memihak satu sisi." },
      // HOOK
      { type: "UCAP", text: "Think honestly: is the homework policy at this school working well? What is one strength and one problem?" },
      { type: "AKSI", text: "Tampilkan kartu ringkasan kebijakan PR: berapa banyak mata pelajaran, perkiraan waktu, dan aturan sekolah." },
      { type: "UCAP", text: "Look at this policy summary. What do you think are its strengths and limitations?" },
    ],

    active_vocabulary: [
      "I believe",
      "because",
      "One strength is",
      "However,",
      "homework",
      "study habits",
      "time management",
      "school rules"
    ],

    model_sentences: [
      { id: "model_1", text: "I believe the current homework policy has real value because it helps students develop regular study habits." },
      { id: "model_2", text: "One strength is that homework gives students time to review and strengthen what they learned in class." },
      { id: "model_3", text: "However, poor time management becomes a serious problem when homework assignments pile up near exam periods." },
      { id: "model_4", text: "I believe the homework policy follows school rules that most students understand. One strength is that it builds consistent habits. However, adjustments to the amount given could help students balance their time better." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Policy summary cards showing the school homework policy: how many subjects assign homework per day, approximate time expected, and the school rule about completion.", description_id: "Kartu ringkasan kebijakan yang menunjukkan kebijakan pekerjaan rumah sekolah: berapa banyak mata pelajaran yang memberi pekerjaan rumah per hari, perkiraan waktu yang diharapkan, dan aturan sekolah tentang penyelesaiannya.", asset_id: null },
      { id: "visual_2", description: "A balanced review frame with two clearly labelled sides: STRENGTH ('One strength is ...') and LIMITATION ('However, ...'), connected by a scale icon showing balance.", description_id: "Kerangka ulasan berimbang dengan dua sisi berlabel jelas: STRENGTH ('One strength is ...') dan LIMITATION ('However, ...'), dihubungkan dengan ikon timbangan yang menunjukkan keseimbangan.", asset_id: null },
      { id: "visual_3", description: "Icons: a homework notebook, a study timetable (study habits), a clock (time management), and a school rulebook (school rules).", description_id: "Ikon: buku catatan pekerjaan rumah, jadwal belajar (kebiasaan belajar), jam (manajemen waktu), dan buku peraturan sekolah (aturan sekolah).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher raises one hand while saying 'One strength is ...' -- to signal a positive finding in the evaluation.", description_id: "Guru mengangkat satu tangan sambil mengucapkan 'One strength is ...' -- untuk menandai temuan positif dalam evaluasi." },
      { id: "gesture_2", description: "Teacher slowly tilts the hand to the other side while saying 'However, ...' -- to signal a balancing move toward a limitation, not a rebuttal.", description_id: "Guru perlahan memiringkan tangan ke sisi lain sambil mengucapkan 'However, ...' -- untuk menandai gerakan penyeimbang ke arah kekurangan, bukan sanggahan." },
      { id: "gesture_3", description: "Teacher holds both hands flat and level while summing up -- to signal that both sides are given equal weight, not one winning.", description_id: "Guru memegang kedua tangan rata dan setara sambil menyimpulkan -- untuk menandai bahwa kedua sisi diberi bobot yang sama, bukan salah satu yang menang." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher give a balanced evaluation of the homework policy: 'I believe ... because ...' (evaluative claim) + 'One strength is ...' (positive) + 'However, ...' (limitation) -- not a persuasive argument defending homework, and not a neutral factual report.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-13", "PAT-8-15", "PAT-7-15"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the balanced review sentences ('I believe ... because ...' / 'One strength is ...' / 'However, ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own balanced review of the homework policy.",
      prompt: "Write a balanced review using: 'I believe ___ because ___.' (your overall evaluation), 'One strength is ___.' (a positive point), 'However, ___.' (a limitation). Use: homework, study habits, time management, or school rules. Keep the tone balanced -- not persuasive advocacy ('Therefore, you must support homework!') and not a neutral description ('Homework is given every day.').",
      change_target: ["evaluative claim (I believe ... because ...)", "strength (One strength is ...)", "limitation (However, ...)"],
      differentiation: {
        easy: { task: "Use the balanced review frame and complete each slot. You may look at the policy summary cards." },
        standard: { task: "Write your own balanced review without reading the frame." },
        challenge: { task: "Write the balanced review and add a second strength or a second limitation to make the evaluation more complete." }
      },
      support: { pattern_support: ["PAT-8-13", "PAT-8-15", "PAT-7-15"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share balanced reviews with a partner and check for the evaluative claim, strength, and limitation.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your balanced review ('I believe ... because ...' / 'One strength is ...' / 'However, ...'). Your partner checks: Is there a claim with a reason? A strength? A limitation? Then swap. Together, discuss: are both sides given equal attention?",
      differentiation: {
        easy: { task: "Read your balanced review to your partner. Your partner circles 'One strength is' and 'However,' in your text." },
        standard: { task: "Share your review without reading. Your partner checks all three components." },
        challenge: { task: "Share your review and your partner asks 'Is this a balanced review or does it lean more to one side?' -- discuss together." }
      },
      support: { pattern_support: ["PAT-8-13", "PAT-8-15", "PAT-7-15"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your balanced review to a new group (balanced review).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your balanced review ('I believe ... because ...' / 'One strength is ...' / 'However, ...').",
      differentiation: {
        easy: { task: "Read your balanced review to the group." },
        standard: { task: "Present your balanced review without reading." },
        challenge: { task: "Present your balanced review, then answer one question from the group: 'Do you think the strength outweighs the limitation?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students give a balanced evaluation: evaluative claim ('I believe ... because ...'), a strength ('One strength is ...'), and a limitation ('However, ...')",
        "students maintain an evaluative (not persuasive) tone -- 'However,' signals a limitation, not a counterpoint to be defeated",
        "students tip the balance too far (e.g. give three strengths and no limitation) or write a persuasive argument instead of a balanced review"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add an 'On balance,...' closing sentence.",
        needs_model: "Repeat the MODEL step, pointing to the balance-scale visual and emphasising that 'However,' shows the other side -- not a rebuttal, a second perspective.",
        needs_repeat: "Do one more round of REPEAT (choral) on the balanced review sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "tips the evaluation too far one way (all strengths or all limitations) or slides into persuasive advocacy ('Therefore, I recommend changing the policy immediately')",
        "produces all three components but cannot present without reading",
        "produces a genuinely balanced review with evaluative claim, strength, and limitation accurately and confidently"
      ],
      action: [
        "recast the review slowly, pointing to the scale visual: 'This side is the strength -- this side is the limitation -- a balanced review gives weight to both'",
        "model one more balanced review on a different school policy (e.g. the uniform policy) to show the same evaluate-both-sides move still works",
        "for a student who is ready, model ONE closing sentence with 'On balance,...' first -- 'On balance, the homework policy has more strengths than limitations, which suggests it is working but could be improved with small adjustments to the weekly amount.' -- then invite that student to add an 'On balance,...which suggests...' closing to their own review; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it adds a sophisticated summary without tipping the balance toward persuasion"
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
