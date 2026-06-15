export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-15.js",
    pattern_id: "PAT-8-15",
    title: "Homework Policy: Responding to Different Views",
    short_title: "Homework Debate",
    grade: 8,
    genre: "Exposition",
    cluster: "B",
    topic: "Homework Policy",
    context: "Students compare different opinions about homework and respond with their own position.",
    communicative_goal: "acknowledge another viewpoint before presenting a different opinion",
    vocabulary_domain: ["homework", "study", "time", "learning"],
    input_anchor: "opinion cards",
    output_anchor: "paired mini debate",
    prerequisite_patterns: ["PAT-8-14"],
    reusable_in: ["PAT-9-02", "PAT-9-03"],
    complexity_level: "Expand",
    notes: "TP kelima belas Kelas 8, Exposition (cluster B -- Responding to Different Views), dan LOMPATAN CEFR ke B1- (PERTAMA di Kelas 8). target_pattern PAT-8-15 = 'Some people think ... However, I think ... because ...'. Realisasi A2+ -> B1-: 'Some people think ...' (rujukan pihak ketiga impersonal/umum, BUKAN 'my partner said') + 'However,' (konektor kontras FORMAL, lebih formal dari 'but'). CEFR naik via STRUKTUR WACANA lebih formal, bukan vocab lebih sulit. forbidden_overlap (debate rebuttal, argumentative refutation, interpersonal disagreement only): 'Some people think X. However, I think Y because Z.' BUKAN menyerang/membantah 'some people' (rebuttal), dan BUKAN sekadar 'I don't agree' santai (PAT-8-01 territory) -- tetap MENGAKUI pandangan lain sebagai valid sebelum menyatakan posisi sendiri. Reaktivasi PAT-8-14 (WAJIB, VR-1): 'One reason is.../Another reason is...' (beberapa alasan untuk satu posisi) -> 'Some people think [posisi lain]. However, I think [posisi sendiri] because [alasan].' CATATAN (kekayaan notes): pola ini sekeluarga pragmatik dengan 'I agree, but I think...' (PAT-8-01, acknowledge->qualify->own view) -- versi B1-/formal/eksposisi; PAT-8-01 bukan prerequisite. vocabulary_domain (homework, study, time, learning) muncul di bahasa target. Ekstensi opsional memperkuat posisi dengan dua alasan ('However, I think ... because ... and ...') -- menjaga head acknowledge->position, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "Some people think",
      "However,",
      "I think",
      "because",
      "homework",
      "study",
      "time",
      "learning"
    ],

    model_sentences: [
      { id: "model_1", text: "One reason is that homework helps students review. Another reason is that it builds good habits." },
      { id: "model_2", text: "Some people think homework is unnecessary. However, I think it helps students learn because they review the lesson at home." },
      { id: "model_3", text: "Some people think homework takes too much time. However, I think a little homework is useful because it improves study skills." },
      { id: "model_4", text: "Some people think homework is boring. However, I think it supports learning because practice makes ideas clear." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Opinion cards with two sides of the homework debate: 'homework is unnecessary' versus 'homework helps learning'.", asset_id: null },
      { id: "visual_2", description: "A response frame: 'Some people think ___. However, I think ___ because ___.'", asset_id: null },
      { id: "visual_3", description: "Icons: a homework book, a clock (time), a brain (learning), a study desk.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher gestures to one side (out there, general) while saying 'Some people think ...'." },
      { id: "gesture_2", description: "Teacher raises a hand to mark a turn while saying 'However,' then points to self for 'I think ...'." },
      { id: "gesture_3", description: "Teacher opens a hand for the reason while saying 'because ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher acknowledge another viewpoint and then present a supported position with 'Some people think ... However, I think ... because ...'.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-14"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the acknowledge-then-position sentences ('Some people think ... However, I think ... because ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Acknowledge another view, then present your own position with a reason.",
      prompt: "Use the pattern 'Some people think [other view]. However, I think [your view] because [reason].' Make it about homework (homework, study, time, learning). Acknowledge the other view as valid -- do not attack it, and do not only say 'I don't agree'.",
      change_target: ["other view (Some people think ...)", "own position (However, I think ...)", "reason (because ...)"],
      differentiation: {
        easy: { task: "Use an opinion card and complete: 'Some people think ___. However, I think ___ because ___.'" },
        standard: { task: "Write your own acknowledge-then-position about homework ('Some people think ... However, I think ... because ...')." },
        challenge: { task: "Build the other view with a reason first (as in 'One reason is that ...'), then respond with 'However, I think ... because ...'." }
      },
      support: { pattern_support: ["PAT-8-14"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Hold a paired mini debate, each partner taking a different position (paired mini debate).",
      interaction_mode: "pair",
      task: "Find a partner and take different sides on homework. Take turns: acknowledge the other view, then present your own ('Some people think ... However, I think ... because ...'). Listen respectfully before you respond.",
      differentiation: {
        easy: { task: "Acknowledge the other view and give your position (you may read). Your partner does the same with the other side." },
        standard: { task: "Acknowledge and respond without reading; both partners present a position with a reason." },
        challenge: { task: "Acknowledge the other view with its reason, then present your position with a reason; your partner responds in the same way." }
      },
      support: { pattern_support: ["PAT-8-14"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Share your acknowledge-then-position with a new group.",
      share_mode: "short_dialogue",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting 'Some people think ... However, I think ... because ...' about homework.",
      differentiation: {
        easy: { task: "Present your acknowledge-then-position to the group. You may read it." },
        standard: { task: "Present your acknowledge-then-position without reading." },
        challenge: { task: "Present your acknowledge-then-position, then answer one question about your reason from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students acknowledge another view and then present their own with 'Some people think ... However, I think ... because ...'",
        "students refer to the other view impersonally ('Some people think ...') and use 'However,' before their own position",
        "students still attack the other view (rebuttal) or only say 'I don't agree' without acknowledging it"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to support the position with two reasons.",
        needs_model: "Repeat the MODEL step, emphasizing acknowledging the other view before 'However, I think ... because ...'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the acknowledge-then-position sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "attacks the other view or only disagrees without acknowledging it",
        "relies only on the written sentences and cannot present without reading",
        "acknowledges another view and presents a supported position accurately and confidently"
      ],
      action: [
        "recast the response slowly, modeling 'Some people think ...' (acknowledge) before 'However, I think ... because ...'",
        "model one more acknowledge-then-position on a different school topic to show the same pattern still works",
        "for a student who is ready, model ONE position with two reasons first -- 'Some people think homework is unnecessary. However, I think it helps students learn because they review the lesson and practice new skills.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the acknowledge-then-position head, not a rebuttal"
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
