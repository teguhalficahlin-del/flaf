export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-02.js",
    pattern_id: "PAT-8-02",
    title: "After-School Activities: Expressing Preferences",
    short_title: "After-School Choices",
    grade: 8,
    genre: "Interpersonal",
    cluster: "A",
    topic: "After-School Activities",
    context: "Students compare different activities and explain which one they prefer and why.",
    communicative_goal: "express preferences and compare alternatives with reasons",
    vocabulary_domain: ["sports", "music", "coding", "volunteering"],
    input_anchor: "activity cards",
    output_anchor: "preference interview",
    prerequisite_patterns: ["PAT-8-01"],
    reusable_in: ["PAT-8-14", "PAT-9-03"],
    complexity_level: "Expand",
    notes: "TP kedua Kelas 8, Interpersonal, Expand. target_pattern PAT-8-02 = 'I prefer ... because ... / I'd rather ... than ...'. STRUKTUR BARU: 'I'd rather [verb] than [verb]' = modal 'would rather' + bare infinitive + 'than' + bare infinitive (DUA verba paralel) -- karena vocabulary_domain berbentuk nomina/domain (sports, music, coding, volunteering), model_sentences memakai verba yang sesuai (play sports, make music, do volunteering) agar gramatikal. forbidden_overlap (descriptive comparison, factual classification, formal evaluation): perbandingan WAJIB tetap PREFERENSI PRIBADI ('I'd rather play sports than make music' = pilihan personal), BUKAN perbandingan OBJEKTIF/FAKTUAL ('Sports are more popular than music'). Reaktivasi PAT-8-01 (WAJIB, VR-1): 'I think...because...but...' sebagai LEAD-IN sebelum preferensi ('I think both are fun, but I prefer ...'), dan 'What do you think?' dipakai ulang sebagai undangan dalam interview. Ekstensi opsional menambah alasan pada 'I'd rather ... than ... because ...' -- menjaga head preferensi, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "I prefer",
      "because",
      "I'd rather",
      "than",
      "sports",
      "music",
      "coding",
      "volunteering"
    ],

    model_sentences: [
      { id: "model_1", text: "I think both are fun, but I prefer music because it helps me relax." },
      { id: "model_2", text: "I prefer coding because I like solving problems." },
      { id: "model_3", text: "I'd rather play sports than make music." },
      { id: "model_4", text: "I'd rather do volunteering than play games. What do you think?" }
    ],

    visual_cues: [
      { id: "visual_1", description: "Activity cards for after-school choices: playing sports, making music, coding, and volunteering.", asset_id: null },
      { id: "visual_2", description: "A preference-frame card: 'I prefer ___ because ___' and 'I'd rather ___ than ___'.", asset_id: null },
      { id: "visual_3", description: "A two-choice scale (this vs that) with a heart on the personally preferred option.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher places a hand on the chest, then points to a preferred card, while saying 'I prefer ... because ...'." },
      { id: "gesture_2", description: "Teacher weighs two hands and tips toward one side while saying 'I'd rather ... than ...'." },
      { id: "gesture_3", description: "Teacher opens both hands toward a partner while asking 'What do you think?'" }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher express personal preferences with 'I prefer ... because ...' and 'I'd rather ... than ...', after a balanced lead-in, and invite a reply.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-01"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the preference sentences ('I prefer ... because ...' / 'I'd rather ... than ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Express your own preferences by replacing the activities and reasons.",
      prompt: "Use the patterns 'I prefer [activity] because [reason].' and 'I'd rather [verb] than [verb].' Make it a personal choice about after-school activities (play sports, make music, learn coding, do volunteering) -- your preference, not which one is more popular.",
      change_target: ["preference (I prefer ...)", "reason (because ...)", "alternative (I'd rather ... than ...)"],
      differentiation: {
        easy: { task: "Choose two activity cards and complete one sentence: 'I prefer ___ because ___.' or 'I'd rather ___ than ___.'" },
        standard: { task: "Write one 'I prefer ... because ...' sentence and one 'I'd rather ... than ...' sentence about after-school activities." },
        challenge: { task: "Start with a balanced lead-in ('I think both are fun, but ...'), then state your preference with a reason and an 'I'd rather ... than ...' choice." }
      },
      support: { pattern_support: ["PAT-8-01"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Interview a partner about their after-school preferences (preference interview).",
      interaction_mode: "pair",
      task: "Find a partner. Take turns interviewing each other: ask 'Which do you prefer ...? What do you think?' Your partner answers with 'I prefer ... because ...' or 'I'd rather ... than ...'. Then swap roles.",
      differentiation: {
        easy: { task: "Ask your partner one preference question; your partner answers with 'I prefer ... because ...'. Then swap." },
        standard: { task: "Interview your partner about two activities without reading; your partner uses both 'I prefer ... because ...' and 'I'd rather ... than ...'. Then swap." },
        challenge: { task: "Interview your partner, and after each answer give your own preference with a balanced lead-in ('I think both are fun, but I'd rather ...'). Then swap." }
      },
      support: { pattern_support: ["PAT-8-01"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Share your after-school preferences with a new group.",
      share_mode: "short_dialogue",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns sharing your own preferences ('I prefer ... because ...' / 'I'd rather ... than ...') and ask 'What do you think?' so others share theirs.",
      differentiation: {
        easy: { task: "Share one preference with the group and ask 'What do you think?'" },
        standard: { task: "Share two preferences (one 'I prefer ...', one 'I'd rather ... than ...') without reading." },
        challenge: { task: "Share your preferences with a balanced lead-in, then invite and respond to two classmates' preferences." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students express a personal preference with 'I prefer ... because ...' and 'I'd rather ... than ...'",
        "students keep it a personal choice (not a factual claim like 'X is more popular than Y') and use two parallel verbs after 'I'd rather ... than ...'",
        "students still leave out the reason, or compare the options objectively instead of choosing"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a reason after 'I'd rather ... than ...'.",
        needs_model: "Repeat the MODEL step, emphasizing 'I prefer ... because ...' and 'I'd rather [verb] than [verb]'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the preference sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "leaves out the reason, or makes an objective comparison instead of a personal choice",
        "relies only on the written sentences and cannot share a preference without reading",
        "expresses preferences with 'I prefer ... because ...' and 'I'd rather ... than ...' accurately and confidently"
      ],
      action: [
        "recast the preference slowly, modeling 'I prefer ... because ...' and 'I'd rather [verb] than [verb]'",
        "model one more preference on a different choice to show the same pattern still works",
        "for a student who is ready, model ONE 'I'd rather ... than ...' with a reason first -- 'I'd rather do volunteering than play games because it helps people.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the preference head, not an objective comparison"
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
