export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-23.js",
    pattern_id: "PAT-7-23",
    title: "The Lost Firefly: Solving the Story",
    short_title: "Firefly Solution",
    grade: 7,
    genre: "Narrative",
    cluster: "B",
    topic: "The Lost Firefly",
    context: "Other small animals work together to help the firefly return home before sunrise.",
    communicative_goal: "connect events to build a simple resolution",
    vocabulary_domain: ["help", "rabbit", "bird", "home"],
    input_anchor: "story board",
    output_anchor: "group storytelling",
    prerequisite_patterns: ["PAT-7-22"],
    reusable_in: ["PAT-8-19", "PAT-9-17"],
    complexity_level: "Acquire",
    notes: "TP kedua puluh tiga Fase D, Narrative. Babak 3 (RESOLUSI) dari cerita berkelanjutan 'The Lost Firefly'. target_pattern PAT-7-23 = 'So, ... / Then, ... and ... / Finally, ...' (past tense). Babak 3 (sesuai alur): 'So, ...' = rabbit & bird mendengar firefly tersesat lalu MEMBANTU (respons terhadap konflik TP-22); 'Then, ... and ...' = rabbit menunjukkan jalan DAN bird terbang memandu (dua aksi resolusi terhubung); 'Finally, ...' = firefly menemukan jalan pulang sebelum matahari terbit. DISTINGSI KRITIS (overlap permukaan): 'Then,/Finally,' di sini BERPERMUKAAN SAMA dengan PAT-7-09, TAPI (a) PAT-7-09 = present-tense IMPERATIF (instruksi untuk diikuti), sedangkan PAT-7-23 = PAST-TENSE NARATIF dengan subjek eksplisit ('Then, the rabbit showed ... and the bird flew ...') yang SPESIFIK MERESOLUSI konflik TP-22; (b) BUKAN PAT-7-14 ('and/then' recount TANPA konflik) -- di sini 'and' menghubungkan aksi-aksi RESOLUSI yang merespons konflik, bukan urutan kegiatan netral. Distingsi ini ditegaskan di CHECK. PAT-7-22 ('One day,...but.../Suddenly,...') sebagai support: recap konflik singkat sebelum resolusi ('The firefly was lost in the dark forest. So, ...'). vocabulary_domain (help, rabbit, bird, home) muncul di bahasa target. Ekstensi opsional menggabungkan tiga aksi resolusi dalam 'Then, ... , ... and ...' -- menjaga head konektor resolusi, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "So,",
      "Then,",
      "Finally,",
      "and",
      "helped",
      "rabbit",
      "bird",
      "home"
    ],

    model_sentences: [
      { id: "model_1", text: "The firefly was lost in the dark forest." },
      { id: "model_2", text: "So, a rabbit and a bird helped the little firefly." },
      { id: "model_3", text: "Then, the rabbit showed the way and the bird flew ahead." },
      { id: "model_4", text: "Finally, the firefly found the way home before sunrise." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A story board of the resolution: a rabbit and a bird finding the lost firefly, the rabbit showing the way, the bird flying ahead, and the firefly reaching home at dawn.", asset_id: null },
      { id: "visual_2", description: "Resolution connector cards: 'So,' (problem leads to help), 'Then, ... and ...' (two helping actions), 'Finally,' (home).", asset_id: null },
      { id: "visual_3", description: "The characters helping together: rabbit, bird, and firefly heading home before sunrise.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher leads one hand into the other (a 'this led to that' motion) while saying 'So, ...'." },
      { id: "gesture_2", description: "Teacher shows two linked helping actions (rabbit showing the way, bird flying) while saying 'Then, ... and ...'." },
      { id: "gesture_3", description: "Teacher brings both hands to a resolved close while saying 'Finally, ...' (home)." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher resolve the story problem with 'So, ... / Then, ... and ... / Finally, ...' in past tense, with characters helping the firefly.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-22"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the resolution sentences ('So, ... / Then, ... and ... / Finally, ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Build your own resolution using 'So, ... / Then, ... and ... / Finally, ...'.",
      prompt: "Use the patterns 'So, [characters helped].', 'Then, [action] and [action].', and 'Finally, [the problem is solved].' Resolve the firefly's problem (help, rabbit, bird, home). Use past tense with characters (the rabbit, the bird) -- this is a story, not an instruction to follow.",
      change_target: ["help response (So, ...)", "connected actions (Then, ... and ...)", "ending (Finally, ...)"],
      differentiation: {
        easy: { task: "Complete: 'So, the ___ helped the firefly. Finally, the firefly ___.'" },
        standard: { task: "Write a resolution: 'So, ... Then, ... and ... Finally, ...' in past tense, with characters helping." },
        challenge: { task: "Recap the problem ('The firefly was lost in the dark forest.'), then write your full resolution." }
      },
      support: { pattern_support: ["PAT-7-22"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Build the resolution of the story together in a small group (group storytelling).",
      interaction_mode: "small_group",
      task: "In a group of 3-4, build the resolution together. Take turns adding one part: 'So, ...', then 'Then, ... and ...', then 'Finally, ...' Listen so the events connect and solve the firefly's problem.",
      differentiation: {
        easy: { task: "Add one resolution sentence to the group's story (you may read), e.g. 'So, the rabbit helped the firefly.'" },
        standard: { task: "Add two connected resolution sentences without reading, so they solve the problem." },
        challenge: { task: "Recap the problem, then build the full resolution with your group, checking that each event responds to the problem." }
      },
      support: { pattern_support: ["PAT-7-22"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Tell the resolution of the story to a new group (group storytelling).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns telling the resolution using 'So, ... / Then, ... and ... / Finally, ...'.",
      differentiation: {
        easy: { task: "Tell the new group two resolution sentences. You may read them." },
        standard: { task: "Tell the resolution without reading, so the events connect and solve the problem." },
        challenge: { task: "Tell the problem and the full resolution, then check that a classmate's resolution answers the problem." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students resolve the problem with 'So, ... / Then, ... and ... / Finally, ...' in past tense, with explicit characters",
        "students use these as past-tense story events that respond to the conflict, not present-tense instructions to follow (procedure)",
        "students still tell a neutral list of activities without solving the problem (recount without conflict), or switch to imperatives"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to connect three helping actions in one 'Then, ...' sentence.",
        needs_model: "Repeat the MODEL step, emphasizing past-tense events with characters that solve the problem (not instructions).",
        needs_repeat: "Do one more round of REPEAT (choral) on the resolution sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "turns the resolution into present-tense instructions, or lists neutral activities that do not solve the problem",
        "relies only on the written resolution and cannot tell it without reading",
        "resolves the problem with 'So, ... / Then, ... and ... / Finally, ...' accurately and confidently"
      ],
      action: [
        "recast the events slowly as past-tense story actions with characters that solve the problem",
        "model one more resolution for a different story to show the same pattern still works",
        "for a student who is ready, model ONE sentence connecting three helping actions first -- 'Then, the rabbit showed the way, the bird flew ahead, and they all glowed together.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the past-tense resolution head, not a procedure"
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
