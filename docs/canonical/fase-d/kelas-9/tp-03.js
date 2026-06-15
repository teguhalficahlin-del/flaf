export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-03.js",
    pattern_id: "PAT-9-03",
    title: "Teamwork in School Clubs: Integrating Arguments",
    short_title: "Teamwork Arguments",
    grade: 9,
    genre: "Argumentative Communication",
    cluster: "B",
    topic: "Teamwork in After-School Clubs and Projects",
    context: "Students construct a full argumentative performance that integrates a claim, two reasons, a counter-argument, an example, and a recommendation.",
    communicative_goal: "construct an integrated argumentative performance combining claim, multiple reasons, counter-argument, evidence, and recommendation",
    vocabulary_domain: ["teamwork", "clubs", "projects", "cooperation"],
    input_anchor: "teamwork scenario cards",
    output_anchor: "full argument performance",
    prerequisite_patterns: ["PAT-8-13", "PAT-8-14", "PAT-8-15", "PAT-8-16", "PAT-8-04"],
    reusable_in: ["PAT-9-04", "PAT-9-06", "PAT-9-07"],
    complexity_level: "Integrate",
    notes: "TP ketiga Kelas 9, genre Argumentative Communication (cluster B -- CLOSER CLUSTER, integrasi struktur terlengkap di cluster ini). QUINT PREREQ: PAT-8-13, PAT-8-14, PAT-8-15, PAT-8-16, PAT-8-04. target_pattern PAT-9-03 = 'I believe...because...One reason is...Another reason is...Some people think...However,...For example,...Therefore, I recommend...' (integrasi 6 komponen retoris: claim, two reasons, acknowledge, counter, example, recommendation). CEFR B1. PERFORMA ARGUMENTATIF TERLENGKAP di cluster ini -- meminta siswa menggabungkan seluruh komponen dari PAT-9-01 (4 komponen) dan PAT-9-02 (5 komponen) menjadi 6 komponen terintegrasi dalam satu performa. Reaktivasi PAT-8-13 (WAJIB, VR-1): 'I believe...because...' (claim + reason dasar) menjadi OPENER argumen 6-komponen. Reaktivasi PAT-8-14 (WAJIB, VR-1): 'Another reason is...' menjadi realisasi MULTI-REASON -- di K8 digunakan untuk menimbang opsi lain, di K9 menjadi second reason eksplisit dalam satu argumen terpadu. Reaktivasi PAT-8-15 (WAJIB, VR-1): 'Some people think...However,...' (acknowledge-counter) terintegrasi ke dalam tubuh argumen sebagai komponen kelima -- bukan berdiri sendiri seperti di K8. Reaktivasi PAT-8-16 (WAJIB, VR-1): 'Therefore, I recommend...' menjadi penutup formal setelah 5 komponen sebelumnya. Reaktivasi PAT-8-04 (WAJIB, VR-1): proposal 'should...' / 'we should...' menjadi REPRESENTASI MENTAL -- desain argumen berbasis kepentingan bersama berakar dari register proposal K7. extends_to PAT-9-04 (JEMBATAN ke cluster Review -- PAT-9-04 builds_on PAT-9-03; kemampuan evaluatif 'I believe X is better because...' + 'However,...' yang dibangun di sini menjadi landasan PAT-9-04 'This review argues...' meski topik berbeda -- Healthy Canteen Menu). forbidden_overlap (exposition linear, review text, analytical essay): TIDAK butuh evidence eksternal -- argumen berbasis observasi dan reasoning personal yang terstruktur. BOOST extension: tambah CLOSING CALL-TO-ACTION 'If we want...we need to...' yang memperkuat recommendation -- bukan mengulang model verbatim.",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "I believe",
      "because",
      "One reason is",
      "Another reason is",
      "Some people think",
      "However,",
      "For example,",
      "Therefore, I recommend",
      "teamwork",
      "clubs",
      "projects",
      "cooperation"
    ],

    model_sentences: [
      { id: "model_1", text: "I believe teamwork makes school projects better because students can share ideas and learn from each other." },
      { id: "model_2", text: "One reason is that working in clubs teaches cooperation. Another reason is that students finish projects faster when they work as a team." },
      { id: "model_3", text: "Some people think group work is unfair because not everyone contributes equally. However, I believe that with clear roles, every team member can cooperate effectively." },
      { id: "model_4", text: "For example, our school science club finished their project early because every member took a role. Therefore, I recommend that all students join at least one school club to practise teamwork and cooperation." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A group of four students working together on a school project, each holding a different material -- showing clear roles and active cooperation, with a club banner visible in the background.", asset_id: null },
      { id: "visual_2", description: "A full argument map with six labelled nodes connected by arrows: 'I believe ... because ...' → 'One reason is ...' + 'Another reason is ...' → 'Some people think ... However, ...' → 'For example, ...' → 'Therefore, I recommend ...'", asset_id: null },
      { id: "visual_3", description: "Icons: two hands cooperating (teamwork/cooperation), a club banner, project materials on a table, and a recommendation badge -- matching vocabulary_domain items.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to own chest for 'I believe ...' then raises two fingers in sequence for 'One reason is ... / Another reason is ...' -- to signal a claim followed by dual support." },
      { id: "gesture_2", description: "Teacher nods for 'Some people think ...' then turns with a calm counter-gesture for 'However, ...' -- to model the acknowledge-then-counter move embedded within the argument." },
      { id: "gesture_3", description: "Teacher brings all fingers together slowly while saying 'Therefore, I recommend ...' -- to signal integration of all six components into one conclusion." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher construct a full six-component argument: claim ('I believe ... because ...'), two reasons ('One reason is ...' / 'Another reason is ...'), acknowledge-counter ('Some people think ... / However, ...'), example ('For example, ...'), and recommendation ('Therefore, I recommend ...') -- all integrated into one coherent performance.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-13", "PAT-8-14", "PAT-8-15", "PAT-8-16", "PAT-8-04"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the six-component argument together as a class, pausing at each component marker to name it: claim / reason-1 / reason-2 / acknowledge / counter / example / recommendation.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own six-component argument about teamwork in school clubs.",
      prompt: "Write a complete argument using all six components: 'I believe ___ because ___.' (claim), 'One reason is ___.' / 'Another reason is ___.' (two reasons), 'Some people think ___. However, ___.' (acknowledge + counter), 'For example, ___.' (example), 'Therefore, I recommend ___.' (recommendation). Use: teamwork, clubs, projects, or cooperation. Keep all six components -- not just two or three, and not a factual description of what clubs do.",
      change_target: ["claim (I believe ... because ...)", "two reasons (One reason is ... / Another reason is ...)", "acknowledge + counter (Some people think ... / However, ...)", "example (For example, ...)", "recommendation (Therefore, I recommend ...)"],
      differentiation: {
        easy: { task: "Use the argument map and fill in each node in order. You may look at the scenario cards." },
        standard: { task: "Write your own six-component argument without reading the map." },
        challenge: { task: "Write the six-component argument and make your example a specific school event or project result (not a general statement)." }
      },
      support: { pattern_support: ["PAT-8-13", "PAT-8-14", "PAT-8-15", "PAT-8-16", "PAT-8-04"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Present full argumentative performances in a small group and check for all six components.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, take turns presenting your full six-component argument. The group checks: claim? two reasons? acknowledge + counter? example? recommendation? After each presentation, one group member names the component they found most convincing and explains why.",
      differentiation: {
        easy: { task: "Present your argument using your written notes. The group ticks each of the six components as they hear it." },
        standard: { task: "Present your argument without reading. The group checks all six components." },
        challenge: { task: "Present your argument and the group asks 'What would you say to someone who still thinks group work is unfair?' -- you give one more response." }
      },
      support: { pattern_support: ["PAT-8-13", "PAT-8-14", "PAT-8-15", "PAT-8-16", "PAT-8-04"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your full argument performance to a new group (full argument performance).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting your full six-component argument ('I believe ...' / 'One reason is ...' / 'Another reason is ...' / 'Some people think ...' / 'However, ...' / 'For example, ...' / 'Therefore, I recommend ...').",
      differentiation: {
        easy: { task: "Present your argument to the new group using your written notes." },
        standard: { task: "Present your full argument without reading." },
        challenge: { task: "Present your full argument, then answer one question from the group: 'Can you give another example of teamwork in clubs?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students integrate all six components into one coherent argument: claim, two reasons, acknowledge-counter, example, recommendation",
        "students place the acknowledge-counter ('Some people think ... / However, ...') inside the argument rather than as a standalone opener",
        "students produce only three or four components (e.g. skip the second reason or the acknowledge-counter), or present the six components as disconnected sentences rather than one flowing argument"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a closing call-to-action after 'Therefore, I recommend ...'.",
        needs_model: "Repeat the MODEL step, walking through the argument map node by node -- name each component aloud before reading the matching sentence.",
        needs_repeat: "Do one more round of REPEAT (choral) on the six-component argument, pausing at each component marker, before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "produces only four components (skipping the second reason or the acknowledge-counter) or presents them as disconnected sentences",
        "produces all six components but cannot flow through the argument without reading",
        "integrates all six components into one coherent argument performance accurately and confidently"
      ],
      action: [
        "recast the argument slowly, walking through the map: 'Claim -- two reasons -- acknowledge -- counter -- example -- recommendation' -- pointing to each node before each sentence, so the structure is visible",
        "model one more six-component argument on a different topic (e.g. physical education in the school schedule) to show the same structure still works",
        "for a student who is ready, model ONE closing call-to-action sentence first -- 'If we want our school to produce confident, responsible students, we need to make teamwork through clubs a regular part of learning -- not just an optional activity.' -- then invite that student to add their own closing call-to-action after 'Therefore, I recommend ...' to give their argument a stronger finish; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it extends the recommendation without replacing any of the six core components"
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
