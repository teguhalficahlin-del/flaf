export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-18.js",
    pattern_id: "PAT-7-18",
    title: "Club Events: Reading Schedules",
    short_title: "Club Events",
    grade: 7,
    genre: "Functional",
    cluster: "A",
    topic: "School Club Schedule",
    context: "Students read and create simple schedules for different extracurricular activities.",
    context_id: "Siswa membaca dan membuat jadwal sederhana untuk berbagai kegiatan ekstrakurikuler.",
    communicative_goal: "share event information using time, date, and place expressions",
    communicative_goal_id: "membagikan informasi acara menggunakan ungkapan waktu, tanggal, dan tempat",
    vocabulary_domain: ["calendar", "club", "time", "location"],
    input_anchor: "event calendar",
    output_anchor: "schedule card",
    prerequisite_patterns: ["PAT-7-17"],
    reusable_in: ["PAT-8-21", "PAT-8-23"],
    complexity_level: "Acquire",
    notes: "TP kedelapan belas Fase D, Functional. target_pattern PAT-7-18 = 'Time/Date + event + place'. FORMAT FRAGMEN: ini adalah fragmen TANPA subjek/verba utama (mis. 'Monday, 8 a.m. English Club in Room 3.' -- BUKAN 'The English Club meets on Monday...'). Ini FITUR REGISTER OTENTIK teks jadwal/pengumuman (seperti jadwal bus atau poster acara), BUKAN kesalahan grammar; dijelaskan di CHECK. Distingsi dari pattern berpermukaan mirip: (a) BUKAN recount 'Yesterday,/Last...,... + past event' (PAT-7-13, past tense naratif) -- PAT-7-18 adalah jadwal kini/akan datang ('Monday, 8 a.m. ...', bukan 'Last Monday, ...'); (b) BUKAN 'There is/are ... [place]' (PAT-7-07, eksistensial) -- fragmen event+place tanpa 'There is/are'; (c) BUKAN 'First,/Then,/Finally,' (PAT-7-09, procedural). PAT-7-17 ('Please.../Please don't...') sebagai support: satu pesan sopan pendamping jadwal ('Please arrive on time.'). vocabulary_domain (calendar, club, time, location) muncul di bahasa target: hari/tanggal (Monday/Friday/July 10 = calendar), club, a.m./p.m. (time), Room/hall/field (location). Ekstensi opsional menambah rentang waktu pada satu entri ('Monday, 8-9 a.m. English Club in Room 3.') -- menjaga head fragmen jadwal -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Hello, class! Let's check the clock — are we ready to begin?" },
      { type: "AKSI", text: "Pastikan siswa duduk dan fokus ke depan." },
      // HOOK
      { type: "UCAP", text: "Do you know when your school clubs meet? Which day and what time?" },
      { type: "AKSI", text: "Tampilkan kalender acara atau kisi-kisi jadwal klub dengan hari, waktu, dan ruangan." },
      { type: "UCAP", text: "Look at this club schedule. What information can you find here?" },
    ],

    active_vocabulary: [
      "Monday",
      "Friday",
      "a.m.",
      "p.m.",
      "club",
      "Room",
      "hall",
      "field"
    ],

    model_sentences: [
      { id: "model_1", text: "Monday, 8 a.m. English Club in Room 3." },
      { id: "model_2", text: "Friday, 2 p.m. Art Club in the hall." },
      { id: "model_3", text: "July 10, Sports Day on the school field." },
      { id: "model_4", text: "Please arrive on time. Wednesday, 3 p.m. Music Club in Room 5." }
    ],

    visual_cues: [
      { id: "visual_1", description: "An event calendar / timetable grid showing club activities with day, time, and room for each entry.", description_id: "Kalender acara / kisi-kisi jadwal yang menunjukkan kegiatan klub dengan hari, waktu, dan ruangan untuk setiap entri.", asset_id: null },
      { id: "visual_2", description: "Schedule fragment cards in 'Day, Time + Event + Place' format (short labels, not full sentences).", description_id: "Kartu potongan jadwal dalam format 'Day, Time + Event + Place' (label singkat, bukan kalimat lengkap).", asset_id: null },
      { id: "visual_3", description: "Icons for the three chunks: a clock (time, a.m./p.m.), a calendar page (date), and a room/hall/field sign (location).", description_id: "Ikon untuk tiga bagian: jam (waktu, a.m./p.m.), halaman kalender (tanggal), dan tanda ruangan/aula/lapangan (lokasi).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to a day and time on the calendar while reading the time/date chunk.", description_id: "Guru menunjuk hari dan waktu di kalender sambil membaca bagian waktu/tanggalnya." },
      { id: "gesture_2", description: "Teacher points to the event name, then to the place, showing the two remaining chunks.", description_id: "Guru menunjuk nama acara, lalu ke tempatnya, menunjukkan dua bagian yang tersisa." },
      { id: "gesture_3", description: "Teacher taps each chunk in turn (time, event, place) to show the schedule fragment format, not a full sentence.", description_id: "Guru menepuk setiap bagian secara bergantian (waktu, acara, tempat) untuk menunjukkan format potongan jadwal, bukan kalimat lengkap." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher read club schedule entries in the 'Time/Date + event + place' fragment format used on real schedules and notices.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-17"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice reading the schedule entries ('Time/Date + event + place') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Make your own schedule entries by replacing the time/date, event, and place.",
      prompt: "Use the schedule format 'Time/Date + event + place', e.g. '[Day], [time] [Club] in [place].' Replace the words with club activities from the calendar (club names, a.m./p.m., Room/hall/field). Keep it as a short schedule fragment -- do not write a full sentence or a past story.",
      change_target: ["time/date", "event", "place"],
      differentiation: {
        easy: { task: "Complete one schedule entry: '[Day], [time] ___ Club in ___.'" },
        standard: { task: "Write two schedule entries in fragment format (day/time + event + place)." },
        challenge: { task: "Make a small schedule card with two or three entries, and add a polite reminder ('Please arrive on time.')." }
      },
      support: { pattern_support: ["PAT-7-17"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Read and check schedule entries with a partner.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: read one of your schedule entries ('Time/Date + event + place'), and your partner points to (or writes) the matching day, time, and place. Then swap.",
      differentiation: {
        easy: { task: "Read one schedule entry; your partner points to the day, time, and place on the calendar. Then swap." },
        standard: { task: "Read two entries without reading word-by-word; your partner notes the time and place of each. Then swap." },
        challenge: { task: "Read your whole schedule card, and your partner checks every entry has a time/date, an event, and a place. Then swap." }
      },
      support: { pattern_support: ["PAT-7-17"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your schedule card to a new group (schedule card).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns presenting your schedule card, reading each entry as 'Time/Date + event + place'.",
      differentiation: {
        easy: { task: "Present one or two schedule entries to the new group. You may read them." },
        standard: { task: "Present your schedule card (two or three entries) without reading word-by-word." },
        challenge: { task: "Present your schedule card with a polite reminder, and check a classmate's card has all three chunks in each entry." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students write schedule entries with all three chunks: time/date + event + place",
        "students use the short fragment format on purpose (this is the authentic register of schedules and notices, not a grammar error)",
        "students still turn the entry into a past recount ('Last Monday, ...'), a 'There is ...' description, or a 'First,/Then,' procedure"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a time range to one entry.",
        needs_model: "Repeat the MODEL step, emphasizing the three chunks (time/date + event + place) in fragment format.",
        needs_repeat: "Do one more round of REPEAT (choral) on the schedule entries before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "leaves out a chunk (time/date, event, or place), or rewrites the entry as a full past/descriptive sentence",
        "relies only on the written entries and cannot read the schedule without reading word-by-word",
        "writes schedule entries with all three chunks in fragment format accurately and confidently"
      ],
      action: [
        "recast the entry slowly, pointing to each chunk: time/date, event, place",
        "model one more schedule entry for a different club to show the same format still works",
        "for a student who is ready, model ONE entry with a time range first -- 'Monday, 8-9 a.m. English Club in Room 3.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the schedule fragment format, not a sentence, story, or description"
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
