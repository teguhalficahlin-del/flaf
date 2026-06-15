export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-01.js",
    pattern_id: "PAT-9-01",
    title: "Recycling for Our Community: Building an Argument",
    short_title: "Community Recycling",
    grade: 9,
    genre: "Argumentative Communication",
    cluster: "A",
    topic: "Community Recycling Program",
    context: "Students evaluate a community recycling proposal and construct a complete supported argument with claim, reason, example, and recommendation.",
    communicative_goal: "present a complete position supported by organized reasons, examples, and a recommendation",
    vocabulary_domain: ["recycling", "community", "environment", "responsibility"],
    input_anchor: "recycling scenario cards",
    output_anchor: "argument presentation",
    prerequisite_patterns: ["PAT-8-16", "PAT-8-13", "PAT-8-14", "PAT-8-04"],
    reusable_in: ["PAT-9-02", "PAT-9-04", "PAT-9-07"],
    complexity_level: "Integrate",
    notes: "TP pertama Kelas 9, genre Argumentative Communication (cluster A -- opener cluster). QUAD PREREQ: PAT-8-16, PAT-8-13, PAT-8-14, PAT-8-04. target_pattern PAT-9-01 = 'I believe...because...One reason is...For example,...Therefore, I recommend...' (integrasi 4 komponen retoris: claim, reason, example, recommendation). CEFR A2+→B1 dicapai via INTEGRASI STRUKTUR DISKURSUS (4 komponen terintegrasi), BUKAN vocabulary baru -- vocabulary familiar dari K7-8. Reaktivasi PAT-8-13 (WAJIB, VR-1): 'I believe...because...' (claim + reason, dasar) menjadi KOMPONEN PERTAMA dari struktur 4-komponen yang lebih utuh -- di K8 ini berdiri sendiri, di K9 menjadi opener dari rantai retoris. Reaktivasi PAT-8-14 (WAJIB, VR-1): kesadaran multi-reason dan pendukung argumen menjadi landasan 'One reason is...For example,...' -- di K8 bersifat alternatif pandangan, di K9 menjadi sub-struktur dukungan eksplisit. Reaktivasi PAT-8-16 (WAJIB, VR-1): 'Therefore, I recommend...' (konektor kesimpulan FORMAL) menjadi KOMPONEN KEEMPAT yang menutup argumen -- di K8 berdiri sendiri sebagai rekomendasi, di K9 menjadi penutup logis dari rantai claim→reason→example. Reaktivasi PAT-8-04 (WAJIB, VR-1): proposal 'should...' menjadi REPRESENTASI MENTAL untuk desain argumen 'I recommend... + shared benefit' -- register proposal K7 terintegrasi ke dalam recommendation slot K9. forbidden_overlap (exposition satu reason saja, factual report, process explanation): 4 komponen WAJIB terintegrasi dalam satu argumen utuh -- bukan hanya claim, bukan hanya recommendation, bukan penjelasan proses recycling. extends_to PAT-9-02 (menambah counterpoint acknowledge-counter). BOOST extension: tambah 'This shows that...' setelah contoh untuk mengeksplisitkan hubungan evidence→claim, tanpa mengulang model verbatim.",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "I believe",
      "because",
      "One reason is",
      "For example,",
      "Therefore, I recommend",
      "recycling",
      "community",
      "environment",
      "responsibility"
    ],

    model_sentences: [
      { id: "model_1", text: "I believe our school needs a community recycling program because it protects our environment." },
      { id: "model_2", text: "One reason is that recycling reduces plastic waste in our area. For example, students can collect bottles every week and bring them to the recycling centre." },
      { id: "model_3", text: "Therefore, I recommend that every student takes responsibility for sorting waste at school." },
      { id: "model_4", text: "I believe recycling helps our community because it teaches responsibility. One reason is that less waste means a cleaner environment for everyone. For example, neighbourhoods with recycling programs have less litter. Therefore, I recommend starting with one recycling station in the school canteen." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A community recycling scenario: students sorting waste into colour-coded bins near the school gate, with a banner showing a recycling symbol and 'Our Environment Matters'.", asset_id: null },
      { id: "visual_2", description: "An argument structure frame with four labelled slots: 'I believe ___ because ___.' / 'One reason is ___. For example, ___.' / 'Therefore, I recommend ___.'", asset_id: null },
      { id: "visual_3", description: "Icons: a recycling symbol, a community group circle, a leaf (environment), and a pledge ribbon (responsibility).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to own chest while saying 'I believe ...' -- to signal a personal position being staked." },
      { id: "gesture_2", description: "Teacher raises one finger while saying 'One reason is ...' -- to signal organized, numbered support for the claim." },
      { id: "gesture_3", description: "Teacher opens a hand toward the audience while saying 'Therefore, I recommend ...' -- to signal a conclusion and call to shared action." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher construct a complete argument with all four components integrated: claim ('I believe ... because ...'), reason ('One reason is ...'), example ('For example, ...'), and recommendation ('Therefore, I recommend ...') -- not just one component in isolation.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-16", "PAT-8-13", "PAT-8-14", "PAT-8-04"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the four-component argument ('I believe ... because ...' / 'One reason is ...' / 'For example, ...' / 'Therefore, I recommend ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Build your own four-component argument about the community recycling program.",
      prompt: "Write a complete argument using all four components: 'I believe ___ because ___.' (claim), 'One reason is ___. For example, ___.' (reason + example), 'Therefore, I recommend ___.' (recommendation). Use: recycling, community, environment, or responsibility. Keep all four components -- not just a claim alone, not just a recommendation, and not a step-by-step explanation of how recycling works.",
      change_target: ["claim (I believe ... because ...)", "reason (One reason is ...)", "example (For example, ...)", "recommendation (Therefore, I recommend ...)"],
      differentiation: {
        easy: { task: "Use the argument frame and fill in all four slots. You may look at the scenario cards." },
        standard: { task: "Write your own four-component argument without reading the frame." },
        challenge: { task: "Write the four-component argument and vary your reason -- use a different reason from the model (not 'recycling reduces plastic waste')." }
      },
      support: { pattern_support: ["PAT-8-16", "PAT-8-13", "PAT-8-14", "PAT-8-04"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share four-component arguments with a partner and check for all components.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns presenting your argument ('I believe ... because ...' / 'One reason is ...' / 'For example, ...' / 'Therefore, I recommend ...'). Your partner checks: Is there a claim? A reason? An example? A recommendation? Then swap.",
      differentiation: {
        easy: { task: "Read your argument to your partner. Your partner ticks each component on the frame: claim, reason, example, recommendation." },
        standard: { task: "Present your argument without reading. Your partner checks all four components." },
        challenge: { task: "Present your argument and your partner asks 'Why do you recommend that specifically?' -- you give one more sentence to strengthen your recommendation." }
      },
      support: { pattern_support: ["PAT-8-16", "PAT-8-13", "PAT-8-14", "PAT-8-04"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your argument to a new group (argument presentation).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your full argument ('I believe ... because ...' / 'One reason is ...' / 'For example, ...' / 'Therefore, I recommend ...').",
      differentiation: {
        easy: { task: "Present your argument to the group using your written notes." },
        standard: { task: "Present your argument without reading." },
        challenge: { task: "Present your argument, then answer one question from the group: 'What is your reason for that recommendation?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students produce all four components: claim (I believe ... because ...), reason (One reason is ...), example (For example, ...), recommendation (Therefore, I recommend ...)",
        "students integrate the four components into one connected argument, not four isolated sentences",
        "students produce only a claim and recommendation (skipping reason and example) or give a process explanation ('First, you collect ... Then, you sort ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add 'This shows that ...' after their example to explicitly link evidence to the claim.",
        needs_model: "Repeat the MODEL step, showing model_4 as the integrated example and pointing to each component in order.",
        needs_repeat: "Do one more round of REPEAT (choral) on the four-component argument before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "produces only a claim and recommendation without a reason or example, or gives a process explanation instead of a supported argument",
        "produces all four components but cannot present them without reading",
        "integrates all four components ('I believe ... because ...' / 'One reason is ...' / 'For example, ...' / 'Therefore, I recommend ...') accurately and confidently"
      ],
      action: [
        "recast the argument slowly, pointing to the frame: 'Here is the claim -- here is the reason -- here is the example -- here is the recommendation' -- show how each component connects to the next",
        "model one more argument on a different community topic (e.g. planting trees near the school) to show the same four-component structure still works",
        "for a student who is ready, model ONE argument with a linking phrase after the example first -- 'For example, neighbourhoods with recycling programs have less litter -- and this shows that community recycling protects the environment we all share.' -- then invite that student to add 'This shows that ...' after their own example; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the four-component structure intact while making the evidence link explicit"
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
