export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-17.js",
    pattern_id: "PAT-7-17",
    title: "Class Chat: Writing Polite Messages",
    short_title: "Class Chat",
    grade: 7,
    genre: "Functional",
    cluster: "A",
    topic: "Class Group Messages",
    context: "Students write short polite messages for a class chat about borrowing or returning school items.",
    communicative_goal: "use polite requests and reminders in everyday messages",
    vocabulary_domain: ["chat", "friends", "books", "stationery"],
    input_anchor: "chat screenshot cards",
    output_anchor: "mini chat messages",
    prerequisite_patterns: ["PAT-7-11"],
    reusable_in: ["PAT-8-21", "PAT-9-07"],
    complexity_level: "Acquire",
    notes: "TP ketujuh belas Fase D dan TP FUNCTIONAL PERTAMA. target_pattern PAT-7-17 = 'Please ... / Please don't ...' -- permintaan dan pengingat sopan dalam pesan sehari-hari. PAT-7-11 ('Don't.../Be.../Always...') sebagai support: 'Please' ditunjukkan sebagai PENANDA KESOPANAN pada imperatif yang sudah dikenal -- rule blunt ('Don't lose my pen.') vs versi sopan dengan struktur sama + Please ('Please don't lose my pen.'). Sesuai forbidden_overlap: TIDAK ada sequencing 'First,/Then,/Finally,' (PAT-7-09), TIDAK ada 'Let's...' (PAT-7-03, invitations), TIDAK ada 'I think/I like' (PAT-7-04, opinions). 'Please.../Please don't...' berdiri sebagai pesan singkat mandiri. vocabulary_domain (chat, friends, books, stationery) muncul di bahasa target: chat/friends (model class chat), book (books), pencil case/pen (stationery). Ekstensi opsional menambah penutup sopan 'Thank you.' setelah permintaan -- menjaga head 'Please ...' dan bukan duplikasi MODEL -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "Please",
      "Please don't",
      "bring",
      "reply",
      "chat",
      "friends",
      "book",
      "pencil case",
      "pen"
    ],

    model_sentences: [
      { id: "model_1", text: "Please bring my English book tomorrow." },
      { id: "model_2", text: "Please don't forget your pencil case." },
      { id: "model_3", text: "Don't lose my pen. Please don't lose my pen." },
      { id: "model_4", text: "Please reply to my friends in the class chat." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Chat screenshot cards showing a class group chat with short polite messages about borrowing and returning books and stationery.", asset_id: null },
      { id: "visual_2", description: "A politeness card showing a blunt rule ('Don't lose my book') next to the polite version ('Please don't lose my book') to show how 'Please' softens an imperative.", asset_id: null },
      { id: "visual_3", description: "Item icons for things friends borrow and return: a book, a pencil case, a pen.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher holds out an open, friendly hand while saying 'Please ...' to show a polite request." },
      { id: "gesture_2", description: "Teacher makes a gentle 'no' gesture with one hand while saying 'Please don't ...' for a polite reminder." },
      { id: "gesture_3", description: "Teacher mimes typing a message on a phone while saying the chat message." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher write short polite messages with 'Please ...' and 'Please don't ...', showing how 'Please' softens a known rule.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-11"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the polite messages ('Please ...' / 'Please don't ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own polite messages using 'Please ...' and 'Please don't ...'.",
      prompt: "Use the patterns 'Please [action].' for a request and 'Please don't [action].' for a polite reminder. Write messages about borrowing or returning school items (book, pencil case, pen) in the class chat.",
      change_target: ["request (Please ...)", "reminder (Please don't ...)"],
      differentiation: {
        easy: { task: "Choose an item icon and complete one message: 'Please ___ my ___.' or 'Please don't ___ my ___.'" },
        standard: { task: "Write two messages -- one 'Please ...' request and one 'Please don't ...' reminder." },
        challenge: { task: "Take a blunt rule ('Don't lose my pen.') and rewrite it politely ('Please don't lose my pen.'), then add one 'Please ...' request." }
      },
      support: { pattern_support: ["PAT-7-11"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Exchange polite chat messages with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: send a polite chat message ('Please ...' / 'Please don't ...') about a school item, and your partner replies with a polite message. Then swap.",
      differentiation: {
        easy: { task: "Send one message from CHANGE to your partner (you may read). Your partner replies politely." },
        standard: { task: "Exchange two messages each without reading -- one request and one reminder." },
        challenge: { task: "Send a polite reminder and a request, and reply politely to your partner's messages in the chat." }
      },
      support: { pattern_support: ["PAT-7-11"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Write and exchange mini chat messages with a new group.",
      share_mode: "short_writing",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Write your polite messages ('Please ...' / 'Please don't ...') on cards, then pass them around the group and read each other's messages.",
      differentiation: {
        easy: { task: "Write one polite message card and read it to the group. You may copy from CHANGE." },
        standard: { task: "Write two message cards (a request and a reminder) and exchange them with the group." },
        challenge: { task: "Write messages for two situations, exchange them, and reply politely to one classmate's message." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students write polite messages with 'Please ...' and 'Please don't ...'",
        "students keep each message short and standalone (a request or a reminder)",
        "students still add sequencing ('First,/Then,'), an invitation ('Let's ...'), or an opinion ('I think ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a polite closer ('Thank you.') after a request.",
        needs_model: "Repeat the MODEL step, emphasizing 'Please ...' (request) and 'Please don't ...' (reminder) as short messages.",
        needs_repeat: "Do one more round of REPEAT (choral) on the polite messages before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "writes a blunt rule without 'Please', or adds sequencing/invitation/opinion",
        "relies only on the written messages and cannot send one without reading",
        "writes polite 'Please ...' / 'Please don't ...' messages accurately and confidently"
      ],
      action: [
        "recast the message slowly, adding 'Please' to soften the imperative",
        "model one more polite message about a different item to show the same pattern still works",
        "for a student who is ready, model ONE request with a polite closer first -- 'Please bring my book. Thank you.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the 'Please ...' head, with no sequencing, invitation, or opinion"
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
