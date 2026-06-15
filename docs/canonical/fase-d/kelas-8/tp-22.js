export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-22.js",
    pattern_id: "PAT-8-22",
    title: "School Learning App: Creating Guided Instructions",
    short_title: "Learning App Guide",
    grade: 8,
    genre: "Functional",
    cluster: "A",
    topic: "Using a School Learning Application",
    context: "Students create simple guided instructions to help new users access assignments and submit their work.",
    communicative_goal: "write clear guided instructions with ordered actions and reminders",
    vocabulary_domain: ["application", "login", "assignment", "submit"],
    input_anchor: "app interface cards",
    output_anchor: "instruction guide",
    prerequisite_patterns: ["PAT-8-21"],
    reusable_in: ["PAT-9-08", "PAT-9-10"],
    complexity_level: "Expand",
    notes: "TP ke-22 Kelas 8, genre Functional A 'Guided Instructions' (cluster A). SINGLE PREREQ: PAT-8-21. target_pattern PAT-8-22 = 'Step 1: ... / Before ..., ... / After ..., ... / Remember to ...' (petunjuk praktis bernomor + marker temporal). Reaktivasi PAT-8-21 (WAJIB, VR-1): TEMATIK (sama-sama teks fungsional digital untuk konteks sekolah) -- bukan reaktivasi struktur kalimat literal, melainkan TRANSISI FORMAT: dari email (4 bagian: Subject/Hi/body/closing) ke petunjuk bernomor dengan marker temporal (Step/Before/After/Remember to). Fokus pada FORMAT BARU yang berbeda total dari PAT-8-21. forbidden_overlap (explanation of natural processes, procedure as generic genre, recount chronology): format PETUNJUK NYATA bernomor + marker Before/After/Remember to, IMPERATIF kepada pembaca ('you'), KHUSUS app sekolah -- BUKAN 'First,/Then,/Finally,' generik ala PAT-7-09, BUKAN deskripsi proses orang ketiga ala PAT-8-10 ('the customer searches...'). vocabulary_domain (application, login, assignment, submit) semua terealisasi di model_sentences. BOOST extension: tambah instruksi untuk situasi masalah/error -- merupakan KATEGORI BARU (troubleshooting) yang tidak muncul di model_sentences utama.",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "Step 1:",
      "Before",
      "After",
      "Remember to",
      "application",
      "login",
      "assignment",
      "submit"
    ],

    model_sentences: [
      { id: "model_1", text: "Step 1: Open the school learning application and log in with your username and password." },
      { id: "model_2", text: "Before you start an assignment, check the due date on the screen." },
      { id: "model_3", text: "After you finish your work, click the submit button." },
      { id: "model_4", text: "Remember to save your work before you close the application." }
    ],

    visual_cues: [
      { id: "visual_1", description: "App interface cards showing four screens in sequence: login screen, assignment list, assignment page, and submit confirmation.", asset_id: null },
      { id: "visual_2", description: "A guided instruction frame with four labeled slots: 'Step 1: ___' / 'Before ___, ___.' / 'After ___, ___.' / 'Remember to ___.'", asset_id: null },
      { id: "visual_3", description: "Icons: a login screen, a checklist (assignment), a send/submit button, a save icon -- matching vocabulary_domain items.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher raises one finger while saying 'Step 1:' -- to signal a numbered, ordered action." },
      { id: "gesture_2", description: "Teacher holds a hand up before the action while saying 'Before ...' -- to signal a prior check." },
      { id: "gesture_3", description: "Teacher moves a hand forward to the result while saying 'After ...' -- to signal a completed action leading to the next step." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher write practical guided instructions with 'Step 1:', 'Before', 'After', and 'Remember to' -- numbered actions + temporal markers directed at the reader, not a general explanation.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-21"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the guided instruction sentences ('Step 1:' / 'Before ...' / 'After ...' / 'Remember to ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own guided instruction guide for using the school learning application.",
      prompt: "Write one instruction for each marker: 'Step 1: ...' (the first action), 'Before ..., ...' (a check before starting), 'After ..., ...' (what to do after finishing), 'Remember to ...' (a reminder). Use: application, login, assignment, or submit. Direct your instructions to the reader ('you') -- not 'students log in' (third person), and not 'First, / Then, / Finally,' (generic steps).",
      change_target: ["numbered step (Step 1: ...)", "prior check (Before ..., ...)", "follow-up action (After ..., ...)", "reminder (Remember to ...)"],
      differentiation: {
        easy: { task: "Use the instruction frame and complete each slot. You may look at the interface cards." },
        standard: { task: "Write all four guided instructions without reading." },
        challenge: { task: "Write all four instructions and add 'Step 2:' for a second numbered action in the guide." }
      },
      support: { pattern_support: ["PAT-8-21"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Exchange instruction guides with a partner and check for all four markers.",
      interaction_mode: "pair",
      task: "Find a partner. Exchange your instruction guides. Read your partner's guide and check: Is there 'Step 1:'? 'Before'? 'After'? 'Remember to'? Point to each one. Then swap roles and give feedback.",
      differentiation: {
        easy: { task: "Read your partner's guide and circle each marker (Step 1, Before, After, Remember to)." },
        standard: { task: "Read your partner's guide, check all four markers, and say which one is clearest." },
        challenge: { task: "Read your partner's guide and ask: 'What happens if I forget the step before submitting?' -- your partner answers in one more instruction." }
      },
      support: { pattern_support: ["PAT-8-21"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your instruction guide to a new group (instruction guide).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your instruction guide ('Step 1:' / 'Before ...' / 'After ...' / 'Remember to ...').",
      differentiation: {
        easy: { task: "Read your instruction guide to the group." },
        standard: { task: "Present your instruction guide without reading." },
        challenge: { task: "Present your instruction guide, then answer one question from the group about what to do in a specific step." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students write practical instructions using 'Step 1:', 'Before', 'After', and 'Remember to' directed at the reader",
        "students use imperative verbs ('Open', 'Check', 'Click', 'Save') aimed at the reader, not third-person descriptions",
        "students write generic steps ('First, then, finally') or a third-person process ('students log in and then submit')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a troubleshooting instruction.",
        needs_model: "Repeat the MODEL step, emphasizing the four markers and imperative verbs ('Open', 'Click') directed at the reader.",
        needs_repeat: "Do one more round of REPEAT (choral) on the instruction sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "writes generic steps ('First, you do ... Then, you do ...') or describes the process in third person ('the student clicks ...')",
        "writes all four markers but cannot present the guide without reading",
        "writes 'Step 1:', 'Before', 'After', and 'Remember to' with correct imperative verbs accurately and confidently"
      ],
      action: [
        "recast one instruction slowly, modeling the imperative form ('Open the application' not 'The student opens the application') directed at the reader",
        "model one more instruction guide on a different digital tool (e.g. a school video call) to show the same four markers still work",
        "for a student who is ready, model ONE troubleshooting instruction first -- 'If you cannot log in to the application, ask your teacher for help and try again.' -- then invite that student to add one troubleshooting instruction to the end of their own guide; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it adds a new instruction category (problem-solving) without repeating the existing steps"
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
