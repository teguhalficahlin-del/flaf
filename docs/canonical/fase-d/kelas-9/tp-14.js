export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-14.js",
    pattern_id: "PAT-9-14",
    title: "Active Break Program: Proposing a Solution",
    short_title: "Solution Proposal",
    grade: 9,
    genre: "Problem & Solution",
    cluster: "A",
    topic: "Active Break Program",
    context: "Students propose a concrete solution to the problem of low student physical activity at school, explaining how it works and why it will help.",
    communicative_goal: "propose a solution by naming the action, showing its conditional logic, and explaining the benefit",
    vocabulary_domain: ["daily routines", "healthy habits", "school programs", "action plans"],
    input_anchor: "problem statement",
    output_anchor: "solution proposal",
    prerequisite_patterns: ["PAT-7-12", "PAT-8-11", "PAT-9-13"],
    reusable_in: ["PAT-9-15"],
    complexity_level: "Integrate",
    notes: "TP keempatbelas Kelas 9, genre Problem & Solution (cluster A -- development Cluster 5). TRIPLE PREREQ: PAT-7-12, PAT-8-11, PAT-9-13. target_pattern PAT-9-14 = 'To solve this problem,... If...,... so... This will help...' (empat komponen: nama solusi -> conditional -> consequence -> benefit). CROSS-GRADE PREREQ: PAT-7-12 (Kelas 7) berasal dari K7, bukan K8 atau K9 -- ini lintas-grade yang bermakna karena PAT-7-12 adalah KAPASITAS CONDITIONAL 'If... you can...' yang menjadi fondasi 'If...,... so...' di K9. Reaktivasi PAT-7-12 (WAJIB, VR-1): 'If you want to..., use...' (K7, conditional advice) direaktivasi sebagai FONDASI CONDITIONAL -- 'If...,... so...' di TP-14 adalah elevasi dari conditional satu-langkah (K7) ke conditional dengan akibat ('so...') dan manfaat ('This will help...'). Reaktivasi PAT-8-11 (WAJIB, VR-1): 'The best way to... is to...' (K8, recommendation register) direaktivasi sebagai KAPASITAS MEREKOMENDASIKAN TINDAKAN -- 'To solve this problem,...' adalah elevasi register dari rekomendasi umum ke solusi spesifik untuk problem yang diidentifikasi. Reaktivasi PAT-9-13 (WAJIB, VR-1): 'The problem is... because... As a result,...' (K9, problem identification) direaktivasi sebagai INPUT untuk solusi -- TP-14 adalah respons langsung terhadap TP-13; yang direaktivasi bukan konten problem tapi KAPASITAS memahami struktur problem sebagai landasan untuk proposal solusi. forbidden_overlap (argumentative recommendation only, general advice, narrative description of a program): 'To solve this problem,...' WAJIB diikuti conditional 'If..., so...' yang menunjukkan mekanisme solusi dan 'This will help...' yang menunjukkan manfaat -- bukan rekomendasi tanpa logika kondisional, bukan penjelasan narasi program. vocabulary_domain: daily routines ✓ model_2/3/4, healthy habits ✓ model_3/4, school programs ✓ model_1/4, action plans ✓ model_4. BOOST extension: tambah 'Another way to implement this solution is...' untuk memperluas proposal dengan cara implementasi alternatif.",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "To solve this problem,",
      "If",
      "so",
      "This will help",
      "daily routines",
      "healthy habits",
      "school programs",
      "action plans"
    ],

    model_sentences: [
      { id: "model_1", text: "To solve this problem, the school could introduce a five-minute active break after every two lessons as part of its regular school programs." },
      { id: "model_2", text: "If students follow this active break schedule every day, their energy levels will improve and they will concentrate better in the afternoon, so the whole class benefits from better daily routines." },
      { id: "model_3", text: "This will help students develop healthy habits by making regular movement a normal part of their school day and daily routines." },
      { id: "model_4", text: "To solve this problem, the school needs a clear action plan with active breaks built into daily routines across all year groups. If students move for at least ten minutes between lessons, their concentration improves and absences due to fatigue decrease, so the entire school community benefits from better health through these school programs. This will help students build healthy habits that last beyond the classroom." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A proposed school timetable card showing five-minute active break slots inserted between every two lessons -- highlighted in green alongside the existing lesson blocks.", asset_id: null },
      { id: "visual_2", description: "A solution-proposal frame with four labelled slots: 'To solve this problem,...' (name the solution) / 'If..., so...' (conditional logic and result) / 'This will help...' (benefit for students).", asset_id: null },
      { id: "visual_3", description: "Icons: a daily schedule with active breaks marked (daily routines), a student stretching with a smile (healthy habits), a school event poster (school programs), and a checklist with action items (action plans).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points forward purposefully while saying 'To solve this problem,...' -- to signal proposing a specific, actionable solution, not a general wish." },
      { id: "gesture_2", description: "Teacher shows one raised finger (IF) then sweeps hand to a consequence (SO) while saying 'If..., so...' -- to signal conditional logic: the solution works IF the condition is met, with a specific result." },
      { id: "gesture_3", description: "Teacher opens both hands toward the students while saying 'This will help...' -- to signal that the benefit of the solution is directed specifically at the students in the room." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher propose a solution using four components: 'To solve this problem,...' (name the solution) + 'If...,... so...' (conditional logic with consequence) + 'This will help...' (benefit) -- not a general wish, not a recommendation without conditional logic, and not a narrative description of a program.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-12", "PAT-8-11", "PAT-9-13"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the solution-proposal sentences ('To solve this problem,...' / 'If..., so...' / 'This will help...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own solution proposal for the problem of low student physical activity at school.",
      prompt: "Write a solution proposal: 'To solve this problem, ___.' (name a specific solution -- what the school or students will do), 'If ___, ___, so ___.' (IF the solution is implemented, THEN something improves, SO there is a clear benefit), 'This will help ___.' (explain the specific benefit for students). Use: daily routines, healthy habits, school programs, or action plans. Keep all four components -- name, conditional logic, consequence, and benefit -- as distinct steps.",
      change_target: ["solution name (To solve this problem, ...)", "conditional and consequence (If ..., so ...)", "benefit (This will help ...)"],
      differentiation: {
        easy: { task: "Use the solution frame and fill in each slot based on the active break timetable card." },
        standard: { task: "Write your own solution proposal without reading the frame." },
        challenge: { task: "Write the proposal and make 'If..., so...' show a chain of two consequences: the immediate benefit and a longer-term impact on healthy habits or daily routines." }
      },
      support: { pattern_support: ["PAT-7-12", "PAT-8-11", "PAT-9-13"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share solution proposals with a partner and evaluate the conditional logic.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your solution proposal ('To solve this problem,...' / 'If..., so...' / 'This will help...'). Your partner checks: Is the solution specific? Does the IF-SO logic make sense? Is the benefit clear? Then swap. Give one piece of feedback: does the 'If..., so...' show a realistic connection between the condition and the result?",
      differentiation: {
        easy: { task: "Read your proposal to your partner. Your partner points to 'To solve', 'If', 'so', and 'This will help' in your text." },
        standard: { task: "Share your proposal without reading. Your partner checks all four components and the IF-SO logic." },
        challenge: { task: "Share your proposal and your partner asks 'What would happen if the school only did the solution for one week?' -- you explain why the solution needs to be in the daily routine consistently." }
      },
      support: { pattern_support: ["PAT-7-12", "PAT-8-11", "PAT-9-13"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your solution proposal to a new group (solution proposal).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your solution proposal ('To solve this problem,...' / 'If..., so...' / 'This will help...').",
      differentiation: {
        easy: { task: "Present your proposal to the group using your written notes." },
        standard: { task: "Present your proposal without reading." },
        challenge: { task: "Present your proposal, then answer one question from the group: 'How would you turn this into a realistic school action plan?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students name a specific solution ('To solve this problem,...'), show conditional logic ('If..., so...'), and explain the benefit ('This will help...')",
        "students use 'If..., so...' to show a logical connection between the condition and the result -- not just 'If we do this, it is good' but a specific consequence",
        "students propose a solution but skip the conditional logic ('To solve this, students should exercise more. This will help.') or use 'This will help' as a repetition of 'To solve this' rather than a new benefit"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a second implementation idea using 'Another way to implement this solution is...'",
        needs_model: "Repeat the MODEL step, pointing to the IF-SO arrow on the frame -- 'If..., so...' must show a specific condition followed by a logical result, not a general statement.",
        needs_repeat: "Do one more round of REPEAT (choral) with pauses naming the function of each component before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "proposes a solution but the IF-SO logic is circular ('If students exercise, they will exercise more') or gives a benefit without explaining the conditional mechanism",
        "produces all four components correctly but cannot present without reading",
        "proposes a specific solution with clear conditional logic and a meaningful benefit that connects to the problem from TP-13, accurately and confidently"
      ],
      action: [
        "recast the proposal slowly, modelling the IF-SO move explicitly: 'IF = the condition you need. SO = the result that follows. They must be logically connected -- not the same idea twice. Example: IF students get a break to move, their brain chemistry improves, SO concentration returns after the break.'",
        "model one more solution proposal on a different school problem (e.g. lack of green spaces) to show the same four-component structure still works",
        "for a student who is ready, model ONE alternative implementation idea first -- 'To solve this problem, schools can introduce an active break program. Another way to implement this solution is to train two student volunteers in each class to lead a two-minute stretching activity between lessons -- no equipment needed, and students take ownership of their daily routines.' -- then invite that student to add 'Another way to implement this solution is...' after their own proposal; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it expands the solution proposal into a second implementation approach"
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
