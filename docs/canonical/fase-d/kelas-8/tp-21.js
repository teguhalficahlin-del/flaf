export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-21.js",
    pattern_id: "PAT-8-21",
    title: "The Old Storage Room: Sharing the Discovery",
    short_title: "Storage Room Message",
    grade: 8,
    genre: "Functional",
    cluster: "A",
    topic: "Writing a Digital Message about a School Discovery",
    context: "After finding old letters in the storage room, students write an email or message to share the discovery with teachers and classmates.",
    communicative_goal: "write a structured digital message with subject, greeting, purpose, and closing",
    vocabulary_domain: ["email", "discovery", "school", "message"],
    input_anchor: "story reflection and message draft",
    output_anchor: "digital message",
    prerequisite_patterns: ["PAT-8-20"],
    reusable_in: ["PAT-9-07", "PAT-9-10"],
    complexity_level: "Expand",
    notes: "TP ke-21 Kelas 8, genre Functional A 'Digital Communication' (cluster A). PENUTUP ARC 'The Old Storage Room Mystery' (5 TP, lintas 2 genre). SINGLE PREREQ: PAT-8-20. target_pattern PAT-8-21 = 'Subject: ... / Hi ... / I\\'m writing to ... / See you soon.' (FORMAT PESAN DIGITAL LENGKAP PERTAMA di korpus). Reaktivasi PAT-8-20 (WAJIB, VR-1): ISI pesan adalah RECAP/PARAFRASE dari resolusi TP-44 (museum sekolah & makna penemuan) -- jembatan konten naratif -> fungsional via kontinuitas input_anchor/output_anchor ('story reflection and message draft' dari TP-44 menjadi input_anchor di sini). 'email' terealisasi di CHANGE prompt dan INTERACT task (runtime). 'message' terealisasi di model_3. forbidden_overlap (interpersonal conversation, narrative dialogue, exposition paragraph): format SURAT/EMAIL UTUH (4 bagian: Subject/Hi/I\\'m writing to/See you soon), BUKAN obrolan kasual (PAT-8-01), BUKAN kutipan dialog cerita (PAT-8-19), BUKAN paragraf argumentatif 'I believe...because...' (PAT-8-13+). model_sentences 1-4 membentuk SATU EMAIL UTUH -- berbeda dari TP lain di mana setiap model adalah variasi independen. BOOST extension: tambah satu kalimat body email tentang ajakan mengunjungi museum kecil -- bukan mengulang model_3 verbatim.",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "Subject:",
      "Hi",
      "I'm writing to",
      "See you soon,",
      "email",
      "discovery",
      "school",
      "message"
    ],

    model_sentences: [
      { id: "model_1", text: "Subject: A Surprising School Discovery" },
      { id: "model_2", text: "Hi everyone," },
      { id: "model_3", text: "I'm writing to share a message about something amazing we found in the old storage room -- old letters and photos full of school memories!" },
      { id: "model_4", text: "See you soon, Dito and Wulan" }
    ],

    visual_cues: [
      { id: "visual_1", description: "A digital message template on a screen, four labeled sections highlighted: Subject line, greeting (Hi ...), body (I'm writing to ...), and closing (See you soon,).", asset_id: null },
      { id: "visual_2", description: "A split screen: on the left, the story reflection from TP-44 ('The story shows that a small discovery ...'); on the right, the opening of the email being drafted -- showing content flowing from narrative to message.", asset_id: null },
      { id: "visual_3", description: "The complete model email displayed on a school computer screen: Subject / Hi everyone, / I'm writing to ... / See you soon, Dito and Wulan.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher types an imaginary subject line in the air while saying 'Subject: ...'." },
      { id: "gesture_2", description: "Teacher waves a greeting to the class while saying 'Hi everyone,'." },
      { id: "gesture_3", description: "Teacher points forward purposefully while saying 'I\\'m writing to ...' -- to signal a stated purpose." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher write one complete digital message with all four parts: Subject, Hi, I'm writing to, See you soon -- using the story discovery as the content.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-20"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice reading the complete email aloud together as a class, part by part.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own complete digital email about a school discovery.",
      prompt: "Write an email with all four parts: Subject: ___ / Hi ___, / I'm writing to ___ / See you soon, ___. The body ('I'm writing to ...') should share something from the story -- a discovery, old letters, or school memories. Imagine you are sending this email to your school. Keep it a formal digital message -- not a casual chat ('Hey!'), not a story dialogue ('said Dito'), and not a recommendation paragraph.",
      change_target: ["subject line (Subject: ...)", "greeting (Hi ...)", "purpose (I'm writing to ...)", "closing (See you soon,)"],
      differentiation: {
        easy: { task: "Use the email template and complete all four parts. You may look at the model email on the screen." },
        standard: { task: "Write your complete email (all four parts) without looking at the model." },
        challenge: { task: "Write a complete email and add one more sentence in the body sharing what students can do with the discovery." }
      },
      support: { pattern_support: ["PAT-8-20"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Read your email message to a partner and check for all four parts.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns reading your email aloud. Your partner checks: Is there a Subject? A greeting (Hi ...)? A purpose (I'm writing to ...)? A closing (See you soon,)? Then swap.",
      differentiation: {
        easy: { task: "Read your email to your partner. Your partner points to each of the four parts." },
        standard: { task: "Read your email without the template. Your partner checks all four parts." },
        challenge: { task: "Read your email and your partner asks one question about the discovery in your message -- you answer in one sentence." }
      },
      support: { pattern_support: ["PAT-8-20"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your digital message to a new group (digital message).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your email ('Subject: ... / Hi ... / I'm writing to ... / See you soon,').",
      differentiation: {
        easy: { task: "Read your email to the group." },
        standard: { task: "Present your email without reading." },
        challenge: { task: "Present your email, then answer one question from the group about the discovery or the purpose of your message." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students write a complete digital message with Subject, Hi, I'm writing to, and See you soon",
        "students use 'I'm writing to ...' to state a clear purpose, not just to chat or tell a story",
        "students omit one or more parts (no subject, no closing) or write a casual chat instead of a structured email"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a second sentence to the email body.",
        needs_model: "Repeat the MODEL step, emphasizing that a digital message always has all four parts and 'I'm writing to ...' states the purpose.",
        needs_repeat: "Do one more round of REPEAT (choral) on the four-part email structure before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "writes only a greeting and message body without a subject line or closing",
        "writes all four parts but cannot present the email without reading",
        "writes a complete four-part digital message with a clear purpose accurately and confidently"
      ],
      action: [
        "recast the email structure slowly, modeling each of the four parts in order -- Subject / Hi / I'm writing to / See you soon -- and pointing to the template",
        "model one more short email on a different school topic (e.g. a school event) to show the same four-part format still works",
        "for a student who is ready, model ONE additional body sentence first -- 'You are all welcome to visit the storage room -- it is now our school's small memory room.' -- then invite that student to add one more sentence to the body of their own email inviting readers to visit or learn more; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the email format intact (not a story or an argument)"
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
