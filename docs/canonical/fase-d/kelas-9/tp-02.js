export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-02.js",
    pattern_id: "PAT-9-02",
    title: "Homework Policy: Responding to Different Opinions",
    short_title: "Homework Policy",
    grade: 9,
    genre: "Argumentative Communication",
    cluster: "A",
    topic: "Homework Policy",
    context: "Students acknowledge an alternative view about homework policy and defend their own supported position with reasons and examples.",
    communicative_goal: "acknowledge an alternative position while defending a supported personal stance",
    vocabulary_domain: ["homework", "learning", "time", "balance"],
    input_anchor: "opinion cards",
    output_anchor: "position defence",
    prerequisite_patterns: ["PAT-8-15", "PAT-8-14", "PAT-8-16", "PAT-8-01"],
    reusable_in: ["PAT-9-03", "PAT-9-05"],
    complexity_level: "Integrate",
    notes: "TP kedua Kelas 9, genre Argumentative Communication (cluster A). QUAD PREREQ: PAT-8-15, PAT-8-14, PAT-8-16, PAT-8-01. target_pattern PAT-9-02 = 'Some people think...However, I believe...because...One reason is...For example,...Therefore...' (integrasi 4 komponen: acknowledge + defend + reason + example, plus conclusion). CEFR B1. Reaktivasi PAT-8-15 (WAJIB, VR-1): 'Some people think...However, I think...' (acknowledge-counter, K8) menjadi PEMBUKA 4-komponen TP-02 -- fungsi sama, skala bertambah (dilanjutkan reason+example+conclusion). Reaktivasi PAT-8-14 (WAJIB, VR-1): multi-reason awareness menjadi landasan 'One reason is...' di dalam defend-section -- di K8 digunakan untuk menimbang opsi, di K9 menjadi dukungan eksplisit posisi sendiri. Reaktivasi PAT-8-16 (WAJIB, VR-1): 'Therefore, I recommend...' / 'Therefore,...' (konektor kesimpulan FORMAL) menjadi KOMPONEN PENUTUP -- kini setelah full acknowledge+defend+reason+example, bukan standalone. Reaktivasi PAT-8-01 (WAJIB, VR-1): register opinion-exchange 'I think...but...' (K8 interpersonal) menjadi REPRESENTASI MENTAL untuk nada acknowledge -- bukan rebuttal agresif, tetap nuanced dan sopan. forbidden_overlap (interpersonal disagreement, exposition tanpa counterpoint, debate rebuttal): nada ACKNOWLEDGE-THEN-DEFEND, BUKAN konfrontasi langsung -- siswa mengakui pandangan lain sebelum membela posisi sendiri. BOOST extension: perkuat acknowledge dengan 'While it is true that...However, I still believe...' -- lebih nuanced dari 'Some people think...However,...', tidak mengulang model verbatim.",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "Some people think",
      "However, I believe",
      "because",
      "One reason is",
      "For example,",
      "Therefore,",
      "homework",
      "learning",
      "time",
      "balance"
    ],

    model_sentences: [
      { id: "model_1", text: "Some people think homework wastes students' time. However, I believe homework helps learning because it gives students time to practise on their own." },
      { id: "model_2", text: "One reason is that homework builds good study habits. For example, students who spend thirty minutes reviewing notes at home usually do better in tests." },
      { id: "model_3", text: "Some people think too much homework upsets the balance between school and family life. However, I believe the right amount of homework makes learning more effective." },
      { id: "model_4", text: "Therefore, homework should be given with care -- enough to support learning, but not so much that it takes all a student's time and breaks the balance of their day." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Two students with opposing speech bubbles: 'I think homework wastes our time.' (left) and 'I think homework helps our learning.' (right) -- showing the acknowledge-counter setup.", asset_id: null },
      { id: "visual_2", description: "An argument frame split into two columns: 'Some people think ...' (left, greyed) and 'However, I believe ... because ...' (right, highlighted), then 'One reason is ... For example, ...' below both.", asset_id: null },
      { id: "visual_3", description: "Icons: a homework notebook, an open book (learning), a clock (time), and a balance scale (balance).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher nods respectfully while saying 'Some people think ...' -- to model acknowledging the other view without dismissing it." },
      { id: "gesture_2", description: "Teacher turns slightly and raises a flat hand while saying 'However, I believe ...' -- to signal a counter-position without aggression." },
      { id: "gesture_3", description: "Teacher raises one finger for 'One reason is ...' and gestures forward while saying 'For example, ...' -- to signal organized support following the counter." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher acknowledge a different opinion and then defend a supported position: 'Some people think ... However, I believe ... because ...' / 'One reason is ...' / 'For example, ...' / 'Therefore, ...' -- an acknowledge-then-defend move, not a dismissal or an aggressive rebuttal.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-15", "PAT-8-14", "PAT-8-16", "PAT-8-01"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the acknowledge-defend argument ('Some people think ...' / 'However, I believe ... because ...' / 'One reason is ...' / 'For example, ...' / 'Therefore, ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own acknowledge-defend argument about the homework policy.",
      prompt: "Write an argument using the acknowledge-defend structure: 'Some people think ...' (acknowledge the other view), 'However, I believe ... because ...' (defend your position), 'One reason is ...' (give a reason), 'For example, ...' (give an example), 'Therefore, ...' (conclude). Use: homework, learning, time, or balance. Keep the tone acknowledge-then-defend -- not a dismissal ('That is wrong!') and not a simple opinion without support.",
      change_target: ["acknowledgment (Some people think ...)", "counter (However, I believe ... because ...)", "reason (One reason is ...)", "example (For example, ...)", "conclusion (Therefore, ...)"],
      differentiation: {
        easy: { task: "Use the argument frame and fill in: 'Some people think ___. However, I believe ___ because ___. One reason is ___. For example, ___. Therefore, ___.' You may look at the opinion cards." },
        standard: { task: "Write your own acknowledge-defend argument without reading the frame." },
        challenge: { task: "Write the full argument and use a different topic angle (e.g. weekend homework vs weekday homework) to show the same pattern still works." }
      },
      support: { pattern_support: ["PAT-8-15", "PAT-8-14", "PAT-8-16", "PAT-8-01"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Practise the acknowledge-defend exchange with a partner, each taking an opposing starting point.",
      interaction_mode: "pair",
      task: "Find a partner. Partner A presents an argument defending homework ('I believe homework helps learning ...'). Partner B acknowledges A's view and defends the opposite ('Some people think homework helps. However, I believe ...'). Then swap roles. Each person checks that the other uses all five components.",
      differentiation: {
        easy: { task: "Read your argument to your partner. Your partner checks: acknowledge, counter, reason, example, conclusion." },
        standard: { task: "Present your argument without reading. Your partner checks all five components." },
        challenge: { task: "Present your argument and your partner asks 'Can you give another reason?' -- you add one more sentence in response." }
      },
      support: { pattern_support: ["PAT-8-15", "PAT-8-14", "PAT-8-16", "PAT-8-01"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your position defence to a new group (position defence).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your acknowledge-defend argument ('Some people think ...' / 'However, I believe ...' / 'One reason is ...' / 'For example, ...' / 'Therefore, ...').",
      differentiation: {
        easy: { task: "Present your argument to the group using your written notes." },
        standard: { task: "Present your argument without reading." },
        challenge: { task: "Present your argument, then answer one question from the group: 'What would you say to someone who still disagrees?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students acknowledge an alternative view ('Some people think ...') and then defend their position ('However, I believe ... because ...') with a reason and example",
        "students keep the tone acknowledge-then-defend -- not aggressive rebuttal ('That is completely wrong!') and not a simple agreement",
        "students skip the acknowledgment and go straight to their own opinion ('I think homework is good because ...') or only acknowledge without defending ('Some people think ... and I agree that ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to upgrade their acknowledgment with a more nuanced 'While it is true that ...' opening.",
        needs_model: "Repeat the MODEL step, emphasising the nod-then-counter move -- 'Some people think ... (nod) However, I believe ...' -- to make the acknowledge-defend structure visible.",
        needs_repeat: "Do one more round of REPEAT (choral) on the acknowledge-defend sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "skips the acknowledgment or turns it into an aggressive dismissal ('Some people think that, but they are wrong')",
        "produces all five components but cannot present without reading",
        "acknowledges the other view and defends a supported position with reason, example, and conclusion accurately and confidently"
      ],
      action: [
        "recast the acknowledge-defend move slowly, modelling the respectful nod before the counter: 'Some people think ... (pause, nod) However, I believe ...' -- not a dismissal, not an agreement",
        "model one more acknowledge-defend argument on a different school topic (e.g. school uniforms) to show the same five-component structure still works",
        "for a student who is ready, model ONE more nuanced acknowledgment first -- 'While it is true that homework can take too much time, I still believe a balanced homework policy helps learning more than it hurts.' -- then invite that student to replace their own 'Some people think ...' opener with 'While it is true that ...' for a more nuanced concession; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the acknowledge-defend structure intact"
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
