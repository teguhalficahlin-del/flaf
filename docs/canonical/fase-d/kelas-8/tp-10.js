export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-10.js",
    pattern_id: "PAT-8-10",
    title: "Online Shopping: Explaining a Digital Process",
    short_title: "Online Shopping",
    grade: 8,
    genre: "Explanation",
    cluster: "A",
    topic: "Online Shopping Process",
    context: "Students explain the sequence of buying an item through an online marketplace from choosing a product to receiving it.",
    communicative_goal: "describe a multi-step process using clear sequencing language",
    vocabulary_domain: ["online store", "payment", "delivery", "order"],
    input_anchor: "process diagram",
    output_anchor: "process explanation",
    prerequisite_patterns: ["PAT-8-09"],
    reusable_in: ["PAT-9-08", "PAT-9-10"],
    complexity_level: "Expand",
    notes: "TP kesepuluh Kelas 8, Explanation (Explaining Processes). target_pattern PAT-8-10 = 'First, ... Next, ... Then, ... Finally, ...' (process explanation). TITIK PALING RAWAN: permukaan SAMA dengan (a) PAT-7-09 ('First,/Then,/Finally,' PROCEDURE, present-tense IMPERATIF, 'First, open the book'); (b) PAT-7-23 ('So,/Then,...and.../Finally,' NARRATIVE RESOLUSI, PAST tense, subjek karakter); (c) recount chronology (PAT-7-13/14, 'Yesterday, First I...'). PAT-8-10 WAJIB: PRESENT TENSE + SUBJEK GENERIK/IMPERSONAL ('the customer'/'they'/PASSIVE -- bukan 'I'/'you', bukan nama tokoh) + menjelaskan PROSES/SISTEM YANG BERULANG (bagaimana proses ini BIASANYA berjalan) -- BUKAN instruksi langsung ke pendengar ('First, click here'), BUKAN pengalaman pribadi lampau ('Yesterday I ordered...'), BUKAN cerita bertokoh ('First, the boy clicked...'). Reaktivasi PAT-8-09 (WAJIB, VR-1): pola kausal TUNGGAL 'When [trigger], ... happens because [reason]' (TP-33) -> PAT-8-10 merangkai BEBERAPA TAHAP BERURUTAN menjadi satu PROSES UTUH; model_1 = jembatan kausal ('When a customer orders online, the process happens because several steps are needed.') menuju 'First, ...'. CHECK menegaskan present tense + subjek generik + proses berulang (distingsi eksplisit dari PAT-7-09 imperatif & PAT-7-23 past naratif). vocabulary_domain (online store, payment, delivery, order) muncul di bahasa target (delivery via 'delivered'). Ekstensi opsional menambah satu tahap dengan 'After that, ...' (subjek generik, present) -- menjaga head proses, bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "First,",
      "Next,",
      "Then,",
      "Finally,",
      "online store",
      "payment",
      "order",
      "delivered"
    ],

    model_sentences: [
      { id: "model_1", text: "When a customer orders online, the order goes through several steps because each step has a different purpose." },
      { id: "model_2", text: "First, the customer searches for a product in an online store. Next, they add it to the cart and choose a payment method." },
      { id: "model_3", text: "Then, the order is processed and packed." },
      { id: "model_4", text: "Finally, the package is delivered to the customer's address." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A process diagram of online shopping: search -> cart and payment -> processing and packing -> delivery.", asset_id: null },
      { id: "visual_2", description: "Sequence cards: 'First, ...', 'Next, ...', 'Then, ...', 'Finally, ...' along an arrow.", asset_id: null },
      { id: "visual_3", description: "Icons: an online store page, a payment method, a packed box, a delivery to an address.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher counts the stages on the diagram (one, two, three, four) while saying 'First, ... Next, ... Then, ... Finally, ...'." },
      { id: "gesture_2", description: "Teacher points to a generic 'customer' figure on the diagram (not themselves) to show an impersonal subject." },
      { id: "gesture_3", description: "Teacher draws a repeating loop in the air to show this is how the process usually works, every time." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher explain how an online order is usually processed, in present tense with a generic subject, using 'First, ... Next, ... Then, ... Finally, ...'.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-09"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the process-explanation sentences ('First, ... Next, ... Then, ... Finally, ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Explain the online shopping process by replacing the stages, in present tense with a generic subject.",
      prompt: "Use the pattern 'First, ... Next, ... Then, ... Finally, ...' to explain how an online order usually works (online store, payment, order, delivery). Use present tense and a generic subject ('the customer', 'they', or passive 'the order is ...') -- not 'I'/'you', not a past story, and not a command ('click here').",
      change_target: ["stages (First / Next / Then / Finally)", "process details"],
      differentiation: {
        easy: { task: "Put the diagram steps in order: 'First, ___. Next, ___. Finally, ___.' (use 'the customer' / 'the order')." },
        standard: { task: "Explain the process in four stages ('First, ... Next, ... Then, ... Finally, ...'), present tense, generic subject." },
        challenge: { task: "Start with the causal bridge ('When a customer orders online, the order goes through several steps because each step has a different purpose.'), then explain the full process in stages." }
      },
      support: { pattern_support: ["PAT-8-09"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Explain the process and check the stages together in a small group.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, use the process diagram. Take turns adding one stage ('First, ... / Next, ... / Then, ... / Finally, ...') so the group explains the whole process. Keep present tense and a generic subject.",
      differentiation: {
        easy: { task: "Add one stage to the group's explanation (you may read), using 'the customer' or 'the order'." },
        standard: { task: "Add two stages without reading, keeping present tense and a generic subject." },
        challenge: { task: "Give the causal bridge, then explain the full process; the group checks no stage uses 'I' or past tense." }
      },
      support: { pattern_support: ["PAT-8-09"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present the online shopping process to a new group (process explanation).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns explaining how online shopping usually works ('First, ... Next, ... Then, ... Finally, ...'), present tense and generic subject.",
      differentiation: {
        easy: { task: "Present three stages of the process to the new group. You may read them." },
        standard: { task: "Present the full four-stage process without reading." },
        challenge: { task: "Present the process and answer one question about a stage, keeping present tense and generic subject." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students explain a repeating process with 'First, ... Next, ... Then, ... Finally, ...' in present tense",
        "students use a generic/impersonal subject ('the customer', 'they', passive 'the order is ...'), not 'I'/'you' and not a character's name",
        "students still give direct commands ('First, click here'), tell a past personal experience ('Yesterday I ordered ...'), or tell a story with a character"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add one more stage with 'After that, ...'.",
        needs_model: "Repeat the MODEL step, emphasizing present tense + generic subject + a process that happens every time (not a command or a past story).",
        needs_repeat: "Do one more round of REPEAT (choral) on the process-explanation sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "switches to commands ('click here'), to past personal experience ('Yesterday I ...'), or to a story with a character",
        "relies only on the written stages and cannot explain the process without reading",
        "explains the process in present tense with a generic subject and clear stages accurately and confidently"
      ],
      action: [
        "recast the stage slowly, modeling present tense and a generic subject ('the customer searches ...', 'the order is packed ...')",
        "model one more process (e.g. how a library loan works) to show the same pattern still works",
        "for a student who is ready, model ONE extra stage with 'After that, ...' first -- 'After that, the customer receives a message.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the present-tense, generic-subject process head, not a command or a past story"
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
