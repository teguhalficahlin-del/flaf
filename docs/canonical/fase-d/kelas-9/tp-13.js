export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-13.js",
    pattern_id: "PAT-9-13",
    title: "Student Physical Activity at School: Identifying the Problem",
    short_title: "Problem Identification",
    grade: 9,
    genre: "Problem & Solution",
    cluster: "A",
    topic: "Student Physical Activity at School",
    context: "Students identify and articulate a problem about low student physical activity during the school day, explaining why it happens and what it leads to.",
    context_id: "Siswa mengidentifikasi dan merumuskan masalah rendahnya aktivitas fisik siswa selama hari sekolah, menjelaskan mengapa hal itu terjadi dan apa akibatnya.",
    communicative_goal: "articulate a problem by naming it, explaining its cause, and describing its consequence",
    communicative_goal_id: "merumuskan masalah dengan menyebutkannya, menjelaskan sebabnya, dan mendeskripsikan akibatnya",
    vocabulary_domain: ["student wellbeing", "physical activity", "school routine", "healthy habits"],
    input_anchor: "evidence-based conclusion",
    output_anchor: "problem statement",
    prerequisite_patterns: ["PAT-9-12", "PAT-8-09", "PAT-8-08"],
    reusable_in: ["PAT-9-14", "PAT-9-15"],
    complexity_level: "Integrate",
    notes: "TP ketigabelas Kelas 9, genre Problem & Solution (cluster A -- opener Cluster 5). TRIPLE PREREQ: PAT-9-12, PAT-8-09, PAT-8-08. target_pattern PAT-9-13 = 'The problem is... because... As a result,...' (tiga langkah: nama masalah -> penyebab -> akibat). CROSS-CLUSTER BRIDGE: input_anchor = 'evidence-based conclusion' dari PAT-9-12 -- siswa menggunakan kesimpulan dari Cluster 4 (apa yang disarankan data tentang lingkungan sehat) sebagai titik awal untuk mengidentifikasi masalah konkret di Cluster 5. Reaktivasi PAT-9-12 (WAJIB, VR-1): 'Based on these sources,...This suggests...' (K9, Information Synthesis) direaktivasi sebagai KAPASITAS ANALISIS BUKTI -- siswa kini mengaplikasikan insights dari multi-sumber ke identifikasi masalah konkret; yang direaktivasi bukan topik healthy school environment tapi KAPASITAS menggunakan evidence sebagai landasan klaim. Reaktivasi PAT-8-09 (WAJIB, VR-1): 'because...' / causal connector (K8) direaktivasi sebagai KAPASITAS KAUSALITAS dalam konteks problem discourse -- 'The problem is... because...' memperluas kausalitas dari penjelasan faktual (K8) ke identifikasi masalah (K9). Reaktivasi PAT-8-08 (WAJIB, VR-1): 'As a result,...' / consequence marker (K8) direaktivasi sebagai KOMPONEN KETIGA identifikasi masalah -- konsekuensi masalah, sama dengan di K8 tapi kini dalam struktur problem discourse yang lebih formal. forbidden_overlap (evaluation/review without problem framing, argumentative claim, news report): 'The problem is...' harus diikuti dengan penyebab ('because...') DAN konsekuensi ('As a result,...') -- bukan hanya pernyataan masalah, bukan argumen tanpa problem framing, bukan laporan fakta murni tanpa implikasi. vocabulary_domain: student wellbeing ✓ model_3/4, physical activity ✓ model_1/4, school routine ✓ model_2/4, healthy habits ✓ model_3/4. BOOST extension: tambah 'Not only that, but...' sebagai escalation move yang menambah konsekuensi kedua.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. We shift focus today to identifying a real problem." },
      { type: "AKSI", text: "Minta siswa menyiapkan kesimpulan berbasis bukti dari sesi sebelumnya." },
      // HOOK
      { type: "UCAP", text: "Based on what we analyzed, what is one clear problem about student physical activity during the school day?" },
      { type: "AKSI", text: "Tampilkan kartu identifikasi masalah: jadwal sekolah mingguan dengan waktu gerak sangat sedikit disorot." },
      { type: "UCAP", text: "Look at this school schedule. What problem does this visual reveal about students' daily routines?" },
    ],

    active_vocabulary: [
      "The problem is",
      "because",
      "As a result,",
      "student wellbeing",
      "physical activity",
      "school routine",
      "healthy habits"
    ],

    model_sentences: [
      { id: "model_1", text: "The problem is that most students do not get enough physical activity during the school day." },
      { id: "model_2", text: "This happens because the school routine leaves very little time for movement between lessons, and most activities are sedentary." },
      { id: "model_3", text: "As a result, many students feel tired and less focused in the afternoon, which affects both their performance and their overall student wellbeing, making it harder to build healthy habits at school." },
      { id: "model_4", text: "The problem is that student wellbeing is declining because the current school routine does not include regular physical activity. As a result, students are not building the healthy habits they need for long-term health and concentration." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A 'problem identification' card showing a weekly school schedule with very little movement time highlighted -- most blocks are seated lessons.", description_id: "Kartu 'identifikasi masalah' yang menunjukkan jadwal sekolah mingguan dengan waktu gerak yang sangat sedikit disorot -- sebagian besar blok adalah pelajaran duduk.", asset_id: null },
      { id: "visual_2", description: "A problem-statement frame with three labelled slots: 'The problem is...' (name the problem) / 'because...' (explain the cause) / 'As a result,...' (describe the consequence).", description_id: "Kerangka pernyataan masalah dengan tiga slot berlabel: 'The problem is...' (menyebutkan masalahnya) / 'because...' (menjelaskan sebabnya) / 'As a result,...' (mendeskripsikan akibatnya).", asset_id: null },
      { id: "visual_3", description: "Icons: a student sitting at a desk with a drooping posture (student wellbeing), an activity figure (physical activity), a school timetable (school routine), and a habits loop showing a gap (healthy habits not forming).", description_id: "Ikon: siswa duduk di meja dengan postur membungkuk (kesejahteraan siswa), figur beraktivitas (aktivitas fisik), jadwal sekolah (rutinitas sekolah), dan lingkaran kebiasaan yang menunjukkan celah (kebiasaan sehat yang tidak terbentuk).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to a problem card on the board while saying 'The problem is...' -- to signal naming a specific, identifiable problem, not a vague complaint.", description_id: "Guru menunjuk kartu masalah di papan sambil mengucapkan 'The problem is...' -- untuk menandai menyebutkan masalah yang spesifik dan dapat diidentifikasi, bukan keluhan yang kabur." },
      { id: "gesture_2", description: "Teacher traces an arrow from the problem card to a cause card while saying 'because...' -- to signal showing the reason behind the problem.", description_id: "Guru menyusuri tanda panah dari kartu masalah ke kartu sebab sambil mengucapkan 'because...' -- untuk menandai menunjukkan alasan di balik masalahnya." },
      { id: "gesture_3", description: "Teacher sweeps a hand outward while saying 'As a result,...' -- to signal showing the impact or consequence that follows from the problem and its cause.", description_id: "Guru menyapukan tangan ke luar sambil mengucapkan 'As a result,...' -- untuk menandai menunjukkan dampak atau akibat yang muncul dari masalah dan sebabnya." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher identify a problem using three steps: 'The problem is...' (name the problem) + 'because...' (explain the cause) + 'As a result,...' (describe the consequence) -- not a general complaint, not an argumentative claim, and not a factual report without cause and consequence.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-9-12", "PAT-8-09", "PAT-8-08"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the problem-identification sentences ('The problem is...' / 'because...' / 'As a result,...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own problem statement about student physical activity at school using all three components.",
      prompt: "Write a problem statement: 'The problem is that ___.' (name a specific problem about student physical activity at school), 'This happens because ___.' (explain why it happens), 'As a result, ___.' (describe what it leads to). Use: student wellbeing, physical activity, school routine, or healthy habits. Keep all three components: naming the problem is not the same as explaining its cause, and explaining its cause is not the same as describing its consequence.",
      change_target: ["problem name (The problem is that ...)", "cause (because ...)", "consequence (As a result, ...)"],
      differentiation: {
        easy: { task: "Use the three-slot problem frame and fill in each slot using the schedule card and your evidence from TP-12." },
        standard: { task: "Write your own problem statement without reading the frame." },
        challenge: { task: "Write the problem statement and make 'As a result,...' describe a long-term consequence for student wellbeing, not just an immediate feeling." }
      },
      support: { pattern_support: ["PAT-9-12", "PAT-8-09", "PAT-8-08"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share problem statements with a partner and check for all three components.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your problem statement ('The problem is...' / 'because...' / 'As a result,...'). Your partner checks: Is there a clear problem? Is the cause explained? Is there a consequence? Then swap. Give one piece of feedback: is the consequence (As a result,...) specific enough to understand the impact?",
      differentiation: {
        easy: { task: "Read your problem statement to your partner. Your partner points to each of the three components in your text." },
        standard: { task: "Share your problem statement without reading. Your partner checks all three components and whether the consequence is specific." },
        challenge: { task: "Share your problem statement and your partner asks 'Who is most affected by this consequence?' -- you explain the impact on student wellbeing specifically." }
      },
      support: { pattern_support: ["PAT-9-12", "PAT-8-09", "PAT-8-08"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your problem statement to a new group (problem statement).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your problem statement ('The problem is...' / 'because...' / 'As a result,...').",
      differentiation: {
        easy: { task: "Present your problem statement to the group using your written notes." },
        standard: { task: "Present your problem statement without reading." },
        challenge: { task: "Present your problem statement, then answer one question from the group: 'What evidence from the sources in TP-12 supports your problem statement?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students name the problem ('The problem is...'), explain its cause ('because...'), and describe its consequence ('As a result,...') as three distinct steps in a problem statement",
        "students distinguish between naming a problem and explaining why it happens -- 'The problem is that students are tired' is not the same as 'The problem is that students don't move enough because the routine is sedentary'",
        "students write a general complaint without cause or consequence ('The problem is that school is too long') or skip 'As a result,...' and end with the cause"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add 'Not only that, but...' after 'As a result,...' to add a second consequence.",
        needs_model: "Repeat the MODEL step, pointing to each arrow on the frame -- The problem is → because → As a result -- naming the function of each step aloud before each model sentence.",
        needs_repeat: "Do one more round of REPEAT (choral) with pauses at each component before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "names the problem but omits the cause or consequence ('The problem is that students are tired. As a result, they can't study.') or gives a general complaint without problem-discourse structure",
        "produces all three components correctly but cannot present without reading",
        "identifies a specific problem with all three components -- clear naming, specific cause, and a meaningful consequence for student wellbeing -- accurately and confidently"
      ],
      action: [
        "recast the problem statement slowly, modelling each component with a clear example: 'The problem is that -- I name what is wrong. Because -- I explain why it happens. As a result -- I show what it leads to. These are three different moves, not one idea in three sentences.'",
        "model one more problem statement on a different school issue (e.g. lack of clean drinking water at school) to show the same three-component structure still works",
        "for a student who is ready, model ONE escalation sentence first -- 'As a result, students feel tired in the afternoon. Not only that, but students who do not move regularly during school hours are also less likely to exercise after school, which harms their long-term healthy habits.' -- then invite that student to add 'Not only that, but...' after their own 'As a result,...' to introduce a second consequence; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it deepens the consequence without replacing the original three-component structure"
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
