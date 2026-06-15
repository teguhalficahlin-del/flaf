export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-12.js",
    pattern_id: "PAT-8-12",
    title: "Trees and Clean Air: Explaining Environmental Systems",
    short_title: "Trees and Clean Air",
    grade: 8,
    genre: "Explanation",
    cluster: "B",
    topic: "Trees and Air Quality",
    context: "Students connect information about trees and air quality to explain how an environmental system works and why it benefits people.",
    communicative_goal: "integrate process, cause, and result into a coherent system explanation",
    vocabulary_domain: ["trees", "carbon dioxide", "oxygen", "air quality"],
    input_anchor: "environment infographic",
    output_anchor: "system explanation poster",
    prerequisite_patterns: ["PAT-8-11", "PAT-8-06"],
    reusable_in: ["PAT-8-13", "PAT-9-10", "PAT-9-13"],
    complexity_level: "Expand",
    notes: "TP kedua belas Kelas 8, GENRE CLOSER EXPLANATION Kelas 8 (cluster B -- Explaining Systems). DUAL PREREQ. target_pattern PAT-8-12 = 'This process ... because ... As a result, ...' (mengintegrasikan proses + sebab + hasil jadi satu penjelasan koheren). Reaktivasi PAT-8-06 (WAJIB, VR-1; topik SAMA dengan TP-30 'City Trees'): 'Most trees have green leaves. They usually need sunlight.' (recap generalisasi Report) sebagai jembatan. forbidden_overlap 'report classification' = BOUNDARY EKSPLISIT vs PAT-8-06 -- TP-36 BUKAN lagi 'Most.../They usually...', harus proses+sebab+hasil terintegrasi. Reaktivasi PAT-8-11 (WAJIB, VR-1): 'If..., ... so...' (hubungan kondisional tunggal) -> 'This process...because...As a result,...' (sintesis dari hubungan kondisional individual menjadi penjelasan sistem koheren). 'As a result,' = konektor wacana hasil (sentence-initial), register lebih formal dari 'So,' (PAT-7-23, K7 naratif) -- progresi register: So, -> As a result, -> Therefore, (PAT-8-16); beda kelas/tense/genre sudah cukup memisahkan. forbidden_overlap lain: BUKAN argumentative exposition (PAT-8-13+), BUKAN procedural instruction. vocabulary_domain (trees, carbon dioxide, oxygen, air quality) muncul di bahasa target. Ekstensi opsional menambah hasil kedua ('As a result, ... and this also ...') -- menjaga head sistem, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "This process",
      "because",
      "As a result,",
      "trees",
      "carbon dioxide",
      "oxygen",
      "air quality",
      "leaves"
    ],

    model_sentences: [
      { id: "model_1", text: "Most trees have green leaves. They usually need sunlight." },
      { id: "model_2", text: "This process keeps the air clean because trees absorb carbon dioxide and release oxygen. As a result, the air quality improves." },
      { id: "model_3", text: "If a city has many trees, the air becomes cleaner so people stay healthier." },
      { id: "model_4", text: "This process works because leaves take in sunlight. As a result, trees make oxygen for everyone." }
    ],

    visual_cues: [
      { id: "visual_1", description: "An environment infographic showing trees absorbing carbon dioxide and releasing oxygen, with cleaner air around a city.", asset_id: null },
      { id: "visual_2", description: "System cards: 'This process ... because ...' linked by an arrow to 'As a result, ...'.", asset_id: null },
      { id: "visual_3", description: "Icons: a tree, a carbon dioxide molecule, an oxygen molecule, a clean-air city skyline.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher traces the whole cycle on the infographic while saying 'This process ...'." },
      { id: "gesture_2", description: "Teacher points back to the cause while saying 'because ...'." },
      { id: "gesture_3", description: "Teacher moves a hand forward to the outcome while saying 'As a result, ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher integrate process, cause, and result into one coherent system explanation with 'This process ... because ... As a result, ...', moving beyond a simple generalization.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-11", "PAT-8-06"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the system-explanation sentences ('This process ... because ... As a result, ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Explain an environmental system by replacing the process, cause, and result.",
      prompt: "Use the pattern 'This process [does something] because [cause]. As a result, [outcome].' Explain how trees help the air (trees, carbon dioxide, oxygen, air quality). Integrate process + cause + result -- not just 'Most trees ...' (a classification), and not a step-by-step instruction.",
      change_target: ["process (This process ...)", "cause (because ...)", "result (As a result, ...)"],
      differentiation: {
        easy: { task: "Use the infographic and complete: 'This process ___ because ___. As a result, ___.'" },
        standard: { task: "Write a system explanation: 'This process ... because ... As a result, ...'." },
        challenge: { task: "Start with a generalization ('Most trees ... They usually ...'), then explain the system with 'This process ... because ... As a result, ...'." }
      },
      support: { pattern_support: ["PAT-8-11", "PAT-8-06"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Explain the tree-and-air system to a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns explaining the system ('This process ... because ... As a result, ...') using the infographic. Your partner checks there is a process, a cause, and a result. Then swap.",
      differentiation: {
        easy: { task: "Explain one system sentence (you may read); your partner finds the result. Then swap." },
        standard: { task: "Explain the system without reading; your partner checks process + cause + result. Then swap." },
        challenge: { task: "Start with a generalization, then explain the full system; your partner explains a different system. Then swap." }
      },
      support: { pattern_support: ["PAT-8-11", "PAT-8-06"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present a system explanation poster to a new group (system explanation poster).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting your system explanation poster ('This process ... because ... As a result, ...').",
      differentiation: {
        easy: { task: "Present one system sentence from your poster. You may read it." },
        standard: { task: "Present your full system explanation without reading." },
        challenge: { task: "Present your system explanation, then answer one question about the result from the group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students integrate process, cause, and result with 'This process ... because ... As a result, ...'",
        "students explain a connected system, not just a classification ('Most ... / They usually ...')",
        "students still only classify ('Most trees ...'), argue ('I believe ...'), or give instructions ('First, ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a second result.",
        needs_model: "Repeat the MODEL step, emphasizing process + cause + result integrated into one explanation.",
        needs_repeat: "Do one more round of REPEAT (choral) on the system-explanation sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "only classifies ('Most ... / They usually ...') instead of explaining a connected system",
        "relies only on the written poster and cannot explain without reading",
        "integrates process, cause, and result with 'This process ... because ... As a result, ...' accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling 'This process ... because ... As a result, ...' as one connected explanation",
        "model one more system (e.g. how clouds form) to show the same pattern still works",
        "for a student who is ready, model ONE explanation with a second result first -- 'This process keeps the air clean because trees absorb carbon dioxide. As a result, the air quality improves, and this also keeps the city cooler.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the system head, not a classification or an argument"
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
