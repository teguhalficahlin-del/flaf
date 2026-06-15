export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-07.js",
    pattern_id: "PAT-9-07",
    title: "The Old Storage Room Discovery: Opening a Presentation",
    short_title: "Presentation Opening",
    grade: 9,
    genre: "Presentation",
    cluster: "A",
    topic: "The Old Storage Room Discovery",
    context: "Students open a formal presentation about the old storage room discovery, greeting the audience, introducing themselves, and stating the presentation purpose.",
    communicative_goal: "open a presentation by greeting the audience, introducing the speaker, and establishing a clear presentation purpose",
    vocabulary_domain: ["presentation expressions", "school facilities", "historical objects", "discovery"],
    input_anchor: "presentation scenario",
    output_anchor: "presentation opening",
    prerequisite_patterns: ["PAT-7-01", "PAT-8-21"],
    reusable_in: ["PAT-9-08", "PAT-9-09"],
    complexity_level: "Integrate",
    notes: "TP ketujuh Kelas 9, genre Presentation (cluster A -- opener Cluster 3). DUAL PREREQ: PAT-7-01, PAT-8-21. target_pattern PAT-9-07 = 'Good morning...My name is...Today I would like to present...The purpose of this presentation is...' (FORMAT PRESENTASI FORMAL PERTAMA di seluruh 66 pattern). ARC: topik 'The Old Storage Room Discovery' mengaktifkan kembali arc narasi K8 PAT-8-17-20 (tokoh Dito & Wulan) yang berakhir di jembatan naratif->fungsional PAT-8-21 (email). Di K9, arc ini DIELEVASI ke register PRESENTASI FORMAL untuk audiens lebih luas. Reaktivasi PAT-7-01 (WAJIB, VR-1): self-introduction 'My name is...' / 'I am...' (K7, register kasual-personal) direaktivasi sebagai komponen presentasi formal -- struktur sama ('My name is...'), TAPI konteks bergeser dari perkenalan personal ke pembukaan presentasi di depan audiens. Reaktivasi PAT-8-21 (WAJIB, VR-1): structured opener dengan tujuan 'I\\'m writing to...' (K8, email) direaktivasi sebagai 'The purpose of this presentation is...' -- PARALLEL STRUCTURE antara pembuka email dan pembuka presentasi; register NAIK dari tulisan digital informal ke presentasi lisan formal. PENTING: hasil harus terasa REGISTER PRESENTASI FORMAL -- bukan email (PAT-8-21 asli), bukan perkenalan personal kasual (PAT-7-01 asli). TIGA TP (TP-07-09) = TIGA BAGIAN SATU PRESENTASI UTUH. forbidden_overlap (interpersonal self-introduction, email opening, casual greeting): 'My name is...' di sini adalah komponen presentasi publik formal, BUKAN perkenalan di kelas (K7) atau kalimat pembuka chat. Vocabulary_domain: discovery ✓ model_2/3/4, historical objects ✓ model_3, school ✓ model_1/2/3. 'presentation expressions' = pola itu sendiri (Good morning / My name is / Today I would like to present / The purpose of this presentation is). BOOST extension: tambah preview/roadmap 'In this presentation, I will cover...' yang menjembatani ke body TP-08.",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "Good morning,",
      "My name is",
      "Today I would like to present",
      "The purpose of this presentation is",
      "discovery",
      "historical objects",
      "school"
    ],

    model_sentences: [
      { id: "model_1", text: "Good morning, everyone. My name is Dito, and I am a student at this school." },
      { id: "model_2", text: "Today I would like to present our discovery in the old storage room behind the school building." },
      { id: "model_3", text: "The purpose of this presentation is to share the historical objects we found and explain why they matter to our school community." },
      { id: "model_4", text: "Good morning. My name is Wulan. Today I would like to present something extraordinary we discovered at school. The purpose of this presentation is to show how a simple discovery can reveal a part of our school's history that many people have forgotten." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A presentation scenario setup: two students (Dito and Wulan) standing at the front of a classroom with a screen behind them, facing an audience of classmates and a teacher.", asset_id: null },
      { id: "visual_2", description: "A presentation opening frame with four labelled slots: GREET ('Good morning,...') / INTRODUCE ('My name is...') / TOPIC ('Today I would like to present...') / PURPOSE ('The purpose of this presentation is...').", asset_id: null },
      { id: "visual_3", description: "A side-by-side comparison of register: an email opening ('Hi everyone, I\\'m writing to share...') next to a presentation opening ('Good morning. My name is... The purpose of this presentation is...') -- showing the same communicative move in two different registers.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher nods to the audience while saying 'Good morning, everyone.' -- to model addressing the whole room, not just one person." },
      { id: "gesture_2", description: "Teacher places a hand on chest while saying 'My name is ...' -- to signal formal self-introduction to an audience, not a casual personal greeting." },
      { id: "gesture_3", description: "Teacher holds an open hand forward while saying 'The purpose of this presentation is ...' -- to signal stating a clear purpose for the audience, equivalent to 'I\\'m writing to ...' in an email but now spoken formally." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher open a formal presentation with all four components: greet ('Good morning,...'), introduce ('My name is...'), announce the topic ('Today I would like to present...'), and state the purpose ('The purpose of this presentation is...') -- formal register, not a casual greeting or an email opening.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-01", "PAT-8-21"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the four-component presentation opening ('Good morning,...' / 'My name is...' / 'Today I would like to present...' / 'The purpose of this presentation is...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write and practise your own formal presentation opening about the storage room discovery.",
      prompt: "Write a four-component presentation opening: 'Good morning, ___.' (greet), 'My name is ___.' (introduce), 'Today I would like to present ___.' (announce the topic), 'The purpose of this presentation is ___.' (state the purpose). Use: discovery, historical objects, or school. Keep the register formal -- not an email ('Hi everyone, I\\'m writing to...') and not a personal greeting ('Hey, I\\'m Dito, and I want to tell you about...').",
      change_target: ["greeting (Good morning, ...)", "introduction (My name is ...)", "topic (Today I would like to present ...)", "purpose (The purpose of this presentation is ...)"],
      differentiation: {
        easy: { task: "Use the opening frame and fill in all four slots. You may look at the scenario setup." },
        standard: { task: "Write and practise your presentation opening without reading the frame." },
        challenge: { task: "Write the four-component opening and vary the purpose statement -- make it specific to one aspect of the discovery (e.g. 'The purpose of this presentation is to show why these historical objects should be displayed in our school.')." }
      },
      support: { pattern_support: ["PAT-7-01", "PAT-8-21"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Deliver your presentation opening to a partner and check the register and all four components.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns delivering your presentation opening standing up, addressing your partner as the audience. Your partner checks: formal greeting? self-introduction? topic announced? purpose stated? Then swap. Give one piece of feedback on the register -- does it sound like a presentation or a casual chat?",
      differentiation: {
        easy: { task: "Read your opening to your partner. Your partner ticks each of the four components on the frame." },
        standard: { task: "Deliver your opening without reading. Your partner checks all four components and the formal register." },
        challenge: { task: "Deliver your opening and your partner asks 'What exactly will you cover in this presentation?' -- you give one more sentence previewing the main points." }
      },
      support: { pattern_support: ["PAT-7-01", "PAT-8-21"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Deliver your presentation opening to a new group (presentation opening).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns delivering your presentation opening standing up, addressing the group as the audience.",
      differentiation: {
        easy: { task: "Deliver your opening to the group using your written notes." },
        standard: { task: "Deliver your opening without reading." },
        challenge: { task: "Deliver your opening, then answer one question from the group: 'What is the main thing you want us to understand from your presentation?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students deliver all four components in the correct order: greet / introduce / topic / purpose -- in formal presentation register",
        "students maintain formal register throughout: 'Good morning' not 'Hey', 'My name is' not 'I\\'m just', 'The purpose of this presentation is' not 'I\\'m here to'",
        "students slip into casual register ('Hi everyone, today I\\'m going to talk about...') or skip the purpose statement and jump straight to the topic content"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a preview/roadmap sentence after the purpose statement.",
        needs_model: "Repeat the MODEL step, using the register comparison visual -- email opening vs presentation opening -- to make the formal register visible.",
        needs_repeat: "Do one more round of REPEAT (choral) on the four-component opening before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "uses casual register ('Hey everyone / Hi, I\\'m going to talk about...') instead of formal presentation language",
        "delivers all four components but cannot present without reading",
        "delivers all four components in formal register accurately and confidently"
      ],
      action: [
        "recast the opening slowly, pointing to the register comparison visual: 'This is the email version -- this is the presentation version. Same purpose, different register.'",
        "model one more formal presentation opening on a different school topic (e.g. a school science project) to show the same four-component format still works",
        "for a student who is ready, model ONE roadmap sentence after the purpose statement first -- 'In this presentation, I will cover three main points: the discovery we made, the historical objects we found, and our recommendation for the school.' -- then invite that student to add one roadmap sentence to their own opening; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it bridges naturally to the presentation body in the next lesson"
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
