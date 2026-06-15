export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-14.js",
    pattern_id: "PAT-8-14",
    title: "After-School Clubs: Building Arguments",
    short_title: "School Clubs",
    grade: 8,
    genre: "Exposition",
    cluster: "A",
    topic: "After-School Clubs",
    context: "Students give multiple reasons for joining an extracurricular club.",
    communicative_goal: "support one position using more than one reason",
    vocabulary_domain: ["clubs", "skills", "friends", "experience"],
    input_anchor: "student profiles",
    output_anchor: "reason map",
    prerequisite_patterns: ["PAT-8-13"],
    reusable_in: ["PAT-9-01", "PAT-9-03"],
    complexity_level: "Expand",
    notes: "TP keempat belas Kelas 8, Exposition (cluster A -- Building Arguments). target_pattern PAT-8-14 = 'One reason is ... Another reason is ...' (mengorganisasi beberapa alasan pendukung untuk SATU klaim). Reaktivasi PAT-8-13 (WAJIB, VR-1): 'I believe [join a club] because [satu alasan]. For example, [bukti].' -> 'One reason is that [X]. Another reason is that [Y].' (ekspansi dari SATU alasan ke BEBERAPA alasan paralel untuk POSISI yang sama). forbidden_overlap (listing factual characteristics, chronological explanation, narrative sequencing): 'One reason.../Another reason...' BUKAN 'Most.../Some...' (PAT-8-06 report), BUKAN 'First,.../Next,...' (PAT-8-10 process), BUKAN 'One day.../Then...' (narasi). 'that' = complementizer ('One reason is that ...'), fungsi gramatikal dasar. vocabulary_domain (clubs, skills, friends, experience) muncul di bahasa target. Ekstensi opsional menambah alasan ketiga ('A third reason is that ...') -- menjaga head argumen multi-alasan, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "One reason is",
      "Another reason is",
      "that",
      "clubs",
      "skills",
      "friends",
      "experience",
      "students"
    ],

    model_sentences: [
      { id: "model_1", text: "I believe joining a club is useful because it helps students grow. For example, they learn new things." },
      { id: "model_2", text: "One reason is that clubs build new skills. Another reason is that they help students make friends." },
      { id: "model_3", text: "One reason is that members gain experience. Another reason is that they enjoy teamwork." },
      { id: "model_4", text: "One reason is that clubs are fun. Another reason is that they prepare students for the future." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Student profiles showing different reasons for joining clubs: learning skills, making friends, gaining experience.", asset_id: null },
      { id: "visual_2", description: "A reason map: one position in the center with branches 'One reason is that ...' and 'Another reason is that ...'.", asset_id: null },
      { id: "visual_3", description: "Icons: a skill badge, a group of friends, an experience certificate, a club sign.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher holds up one finger while saying 'One reason is that ...'." },
      { id: "gesture_2", description: "Teacher holds up a second finger while saying 'Another reason is that ...'." },
      { id: "gesture_3", description: "Teacher draws both reasons back to one central position to show they support the same claim." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher expand a single-reason position into several parallel reasons with 'One reason is that ... Another reason is that ...'.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-13"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the multi-reason sentences ('One reason is that ... Another reason is that ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Support a position about joining a club with more than one reason.",
      prompt: "Use the pattern 'One reason is that [reason 1]. Another reason is that [reason 2].' Give two reasons for joining a club (clubs, skills, friends, experience). Both reasons support the SAME position -- not 'Most ...' (report), not 'First, ...' (process), not 'One day ...' (story).",
      change_target: ["first reason (One reason is that ...)", "second reason (Another reason is that ...)"],
      differentiation: {
        easy: { task: "Use a student profile and complete: 'One reason is that ___. Another reason is that ___.'" },
        standard: { task: "Write two parallel reasons for joining a club ('One reason is that ... Another reason is that ...')." },
        challenge: { task: "Start with your position ('I believe joining a club is useful because ...'), then give two reasons with 'One reason is that ... Another reason is that ...'." }
      },
      support: { pattern_support: ["PAT-8-13"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Build a reason map together in a small group (reason map).",
      interaction_mode: "small_group",
      task: "In a group of 3-4, choose one position about clubs. Take turns adding a reason ('One reason is that ... / Another reason is that ...') so the group builds a reason map supporting that position.",
      differentiation: {
        easy: { task: "Add one reason to the group's map ('One reason is that ___.'). You may read." },
        standard: { task: "Add two reasons without reading, both supporting the same position." },
        challenge: { task: "State the position, then add two reasons, and check the group's reasons all support the same claim." }
      },
      support: { pattern_support: ["PAT-8-13"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your reason map to a new group (reason map).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting a position and its reasons ('One reason is that ... Another reason is that ...').",
      differentiation: {
        easy: { task: "Present two reasons to the new group. You may read them." },
        standard: { task: "Present your position and two reasons without reading." },
        challenge: { task: "Present your position and reasons, then answer one question about a reason from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students give more than one reason for one position with 'One reason is that ... Another reason is that ...'",
        "students keep the reasons parallel and supporting the same claim",
        "students still list characteristics ('Most ... / Some ...'), sequence steps ('First, ... Next, ...'), or tell a story ('One day ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a third reason.",
        needs_model: "Repeat the MODEL step, emphasizing 'One reason is that ...' and 'Another reason is that ...' supporting one position.",
        needs_repeat: "Do one more round of REPEAT (choral) on the multi-reason sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives only one reason, or lists characteristics/steps/story events instead of parallel reasons",
        "relies only on the written reasons and cannot present without reading",
        "supports one position with several reasons ('One reason is that ... Another reason is that ...') accurately and confidently"
      ],
      action: [
        "recast the reasons slowly, modeling 'One reason is that ...' and 'Another reason is that ...' for one position",
        "model one more two-reason argument on a different topic to show the same pattern still works",
        "for a student who is ready, model ONE argument with a third reason first -- 'One reason is that clubs build skills. Another reason is that they make friends. A third reason is that they give real experience.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the multi-reason head, not a list, a process, or a story"
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
