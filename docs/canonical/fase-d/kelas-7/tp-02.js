export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-02.js",
    pattern_id: "PAT-7-02",
    title: "School Clubs: Asking About Preferences",
    short_title: "Asking Preferences",
    grade: 7,
    genre: "Interpersonal",
    cluster: "A",
    topic: "School Clubs",
    context: "Students ask classmates about interests before joining clubs.",
    context_id: "Siswa bertanya kepada teman sekelas tentang minat mereka sebelum bergabung dengan klub.",
    communicative_goal: "ask and answer simple preference questions",
    communicative_goal_id: "bertanya dan menjawab pertanyaan sederhana tentang preferensi",
    vocabulary_domain: ["clubs", "sports", "music", "arts"],
    input_anchor: "club posters",
    output_anchor: "class survey",
    prerequisite_patterns: ["PAT-7-01"],
    reusable_in: ["PAT-8-02"],
    complexity_level: "Acquire",
    notes: "TP kedua Fase D, target pattern PAT-7-02 (Yes/No questions 'Do you like...?' / 'Can you play...?' dengan jawaban pendek 'Yes, I do./No, I don't./Yes, I can./No, I can't.'). prerequisite_patterns berisi PAT-7-01 ('I am/I like/I can'), yang direaktivasi sebagai support di MODEL (guru membuka dengan 'I like music' sebelum bertanya) dan di INTERACT challenge (siswa menambahkan 'I like.../I can...' setelah menjawab). Sesuai forbidden_overlap, TP ini HANYA memakai Yes/No questions -- tidak ada WH-question, tidak ada permintaan alasan ('because...'), tidak ada opini terbuka. SHARE (titik kebocoran yang ditemukan di PILOT TP-01) melaporkan hasil survei HANYA dengan bentuk yang sudah dimodelkan, atau dengan subjek jamak yang TIDAK mengubah konjugasi ('Two friends like...', 'Most friends can play...' -- 'like'/'can' identik dengan 'I like'/'I can'); tidak ada orang ketiga tunggal (likes/-s) maupun bentuk lampau di level diferensiasi manapun. Pelaporan orang ketiga tunggal ('She likes.../He can...') ditempatkan sebagai ekstensi opsional di BOOST (guru memodelkan satu contoh dulu, individual/reaktif) sesuai Schema JS Bagian 9.2.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning, everyone! Please take your seats." },
      { type: "AKSI", text: "Pastikan semua siswa sudah duduk dan perhatian ke depan." },
      // HOOK
      { type: "UCAP", text: "Look at these posters on the board — what clubs do you see?" },
      { type: "AKSI", text: "Arahkan perhatian siswa ke poster Klub Musik, Klub Seni, dan Klub Olahraga." },
      { type: "UCAP", text: "Which club would you like to join this semester? Raise your hand!" },
    ],

    active_vocabulary: [
      "like", "play",
      "can", "can't",
      "Yes, I do.", "No, I don't.",
      "Yes, I can.", "No, I can't.",
      "music", "singing",
      "drawing",
      "badminton", "chess"
    ],

    model_sentences: [
      { id: "model_1", text: "I like music. Do you like singing? Yes, I do." },
      { id: "model_2", text: "Do you like drawing? No, I don't." },
      { id: "model_3", text: "Can you play badminton? Yes, I can." },
      { id: "model_4", text: "Can you play chess? No, I can't." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Club posters on a board, e.g. a Music Club poster (microphone icon), an Art Club poster (paintbrush icon), and a Sports Club poster (badminton racket icon).", description_id: "Poster klub di papan, misalnya poster Klub Musik (ikon mikrofon), poster Klub Seni (ikon kuas), dan poster Klub Olahraga (ikon raket bulu tangkis).", asset_id: null },
      { id: "visual_2", description: "Picture cards showing club activities: a person singing, a hand drawing, a badminton racket and shuttlecock, a chess board.", description_id: "Kartu bergambar yang menunjukkan kegiatan klub: seseorang bernyanyi, tangan menggambar, raket dan kok bulu tangkis, papan catur.", asset_id: null },
      { id: "visual_3", description: "Two answer cards: a green card with a thumbs-up for 'Yes', and a red card with a thumbs-down for 'No'.", description_id: "Dua kartu jawaban: kartu hijau dengan jempol ke atas untuk 'Yes', dan kartu merah dengan jempol ke bawah untuk 'No'.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher opens one palm toward a student and raises eyebrows while asking 'Do you like...?' / 'Can you play...?' to show it is a question.", description_id: "Guru membuka satu telapak tangan ke arah siswa dan mengangkat alis sambil bertanya 'Do you like...?' / 'Can you play...?' untuk menunjukkan bahwa itu pertanyaan." },
      { id: "gesture_2", description: "Teacher mimes the activity while asking 'Can you play...?' -- swinging a racket for badminton, moving a chess piece for chess.", description_id: "Guru memperagakan kegiatannya sambil bertanya 'Can you play...?' -- mengayunkan raket untuk bulu tangkis, menggerakkan bidak untuk catur." },
      { id: "gesture_3", description: "Teacher nods with a thumbs-up for 'Yes, I do. / Yes, I can.' and shakes their head with a thumbs-down for 'No, I don't. / No, I can't.'", description_id: "Guru mengangguk dengan jempol ke atas untuk 'Yes, I do. / Yes, I can.' dan menggelengkan kepala dengan jempol ke bawah untuk 'No, I don't. / No, I can't.'" }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher ask and answer simple Yes/No questions about club activities, starting from 'I like...' and moving to 'Do you like...?' and 'Can you play...?'.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-01"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the questions and the matching short answers together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Make your own Yes/No questions and short answers by replacing the club activity.",
      prompt: "Use the patterns 'Do you like [activity]? Yes, I do. / No, I don't.' and 'Can you play [activity]? Yes, I can. / No, I can't.' Replace the activity with another one from the club posters (singing, drawing, badminton, chess, ...).",
      change_target: ["activity (Do you like ...?)", "activity (Can you play ...?)"],
      differentiation: {
        easy: { task: "Choose one activity from the posters and write one question with its answer: 'Do you like ___? Yes, I do.' (or 'No, I don't.')." },
        standard: { task: "Write two questions with their short answers -- one 'Do you like ___?' question and one 'Can you play ___?' question. Make sure each answer matches its question (do/don't for 'Do you', can/can't for 'Can you')." },
        challenge: { task: "Write three questions with their short answers, mixing 'Do you like...?' and 'Can you play...?'. For ONE sport, ask both forms about the same activity, e.g. 'Do you like badminton? Can you play badminton?'" }
      }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Ask several classmates your Yes/No questions and record their answers as a class survey.",
      interaction_mode: "walk_around",
      task: "Walk around the class with your questions and a simple tally sheet (activity name + two columns: Yes / No). Ask classmates your 'Do you like...?' and 'Can you play...?' questions, and put a mark in the Yes or No column for each answer.",
      differentiation: {
        easy: { task: "Ask 2 classmates your one 'Do you like ___?' question from CHANGE. Mark each answer (Yes / No) on your tally sheet. You may read your question from your CHANGE script." },
        standard: { task: "Ask 3 classmates both of your questions ('Do you like...?' and 'Can you play...?') without reading. Mark every answer on your tally sheet." },
        challenge: { task: "Ask 4 classmates your questions. After a classmate answers, add your own information using 'I like...' or 'I can...', e.g. 'Do you like chess? -- Yes, I do. -- I like chess too. I can play chess.' Mark every answer on your tally sheet." }
      },
      support: { pattern_support: ["PAT-7-01"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Report the results of your class survey using simple sentences about your classmates.",
      share_mode: "short_writing",
      task: "Form a group of 4 with nearby classmates. Look at your tally sheet and write a few report sentences using the frames 'A: [number] friends like [activity].' and 'B: [number] friends can play [activity].' You may also use 'Most friends like/can play [activity].' Then take turns reading your report sentences to your group and compare your survey results. (The frame words 'like' and 'can play' stay the same as in 'I like / I can' -- you do not change them.)",
      differentiation: {
        easy: { task: "Write one report sentence with the frame: '___ friends like ___.' (for example, 'Two friends like drawing.'). Read it to your group." },
        standard: { task: "Write two report sentences -- one with 'like' and one with 'can play': '___ friends like ___.' and '___ friends can play ___.' Read them to your group." },
        challenge: { task: "Write a report sentence for each question you asked, using '[number] friends like/can play ___' or 'Most friends like/can play ___'. Read your whole report to your group." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students ask 'Do you like...?' and 'Can you play...?' questions clearly, with rising intonation",
        "students answer with the matching short form (Yes, I do. / No, I don't. for 'Do you'; Yes, I can. / No, I can't. for 'Can you')",
        "students still mix up 'Do you' and 'Can you', or give a short answer that does not match the question type"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to try reporting one survey result about a classmate.",
        needs_model: "Repeat the MODEL step, emphasizing the difference between 'Do you LIKE...?' and 'Can you PLAY...?' and their matching answers.",
        needs_repeat: "Do one more round of REPEAT (choral) on the questions and short answers before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "hesitates when choosing between 'Do you like...?' and 'Can you play...?'",
        "relies only on the written script and cannot ask a question without reading it",
        "asks and answers both question types accurately and confidently with several classmates"
      ],
      action: [
        "recast the question slowly, stressing the key word -- 'Do you LIKE...?' versus 'Can you PLAY...?' -- and the matching short answer",
        "model one more pair of questions on a different topic (e.g. a school subject) to show the same pattern still works",
        "for a student who is ready, model ONE third-person report about a classmate first -- '[Name] likes drawing. He/She can play badminton.' -- then invite that student to report ONE of their own survey results the same way; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity"
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
