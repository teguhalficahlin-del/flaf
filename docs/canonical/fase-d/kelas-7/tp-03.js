export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-03.js",
    pattern_id: "PAT-7-03",
    title: "Weekend Plans: Making Simple Invitations",
    short_title: "Making Invitations",
    grade: 7,
    genre: "Interpersonal",
    cluster: "B",
    topic: "Weekend Activities",
    context: "Friends plan an activity after school or on the weekend.",
    context_id: "Teman-teman merencanakan kegiatan setelah sekolah atau di akhir pekan.",
    communicative_goal: "invite, accept, and refuse politely",
    communicative_goal_id: "mengundang, menerima, dan menolak dengan sopan",
    vocabulary_domain: ["park", "library", "cycling", "games"],
    input_anchor: "activity pictures",
    output_anchor: "role play",
    prerequisite_patterns: ["PAT-7-01", "PAT-7-02"],
    reusable_in: ["PAT-8-03"],
    complexity_level: "Acquire",
    notes: "TP ketiga Fase D, target pattern PAT-7-03 (membuat/menerima/menolak ajakan: 'Let's... / Shall we...? / Sure. / Sorry, I can't.'). Dua prerequisite direaktivasi sebagai support: PAT-7-02 ('Do you like...? Yes, I do.') sebagai LEAD-IN sebelum mengajak, dan PAT-7-01 ('I like...') sebagai respons natural setelah menerima. 'Sorry, I can't.' (menolak) sengaja meng-echo 'No, I can't.' dari PAT-7-02. Sesuai forbidden_overlap: TIDAK ada instruksi langkah-demi-langkah (First..., then... -- itu genre Procedure), TIDAK ada permintaan IZIN ('May I.../Can I...'), dan saat menolak TIDAK diberi ALASAN ('because...') -- 'Sorry, I can't.' berdiri sendiri (alasan/justifikasi adalah wilayah PAT-7-04 berikutnya, NS-12). Seluruh bentuk wajib di INTERACT/SHARE (Let's.../Shall we...?/Sure./Sorry, I can't.) sudah dimodelkan di MODEL/REPEAT/CHANGE (Checklist D). Ekstensi penghalus opsional 'Maybe next time.' (di luar empat bentuk target, bukan alasan) ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan satu contoh dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning! Let's get the day started." },
      { type: "AKSI", text: "Sapa beberapa siswa dan cek apakah mereka sudah siap." },
      // HOOK
      { type: "UCAP", text: "Quick question — what do you like to do on weekends?" },
      { type: "AKSI", text: "Tampilkan gambar kegiatan akhir pekan: bersepeda, taman, perpustakaan, permainan papan." },
      { type: "UCAP", text: "Imagine a friend invites you to go cycling after school. What would you say?" },
    ],

    active_vocabulary: [
      "Let's",
      "Shall we",
      "Sure.",
      "Sorry, I can't.",
      "cycling",
      "park",
      "library",
      "games",
      "after school",
      "this weekend"
    ],

    model_sentences: [
      { id: "model_1", text: "Do you like cycling? Yes, I do. Let's go cycling this weekend!" },
      { id: "model_2", text: "Shall we go to the park? Sure! I like the park." },
      { id: "model_3", text: "Let's study at the library after school. Sorry, I can't." },
      { id: "model_4", text: "Shall we play games? Sure!" }
    ],

    visual_cues: [
      { id: "visual_1", description: "Activity pictures showing four weekend options: a bicycle on a path (cycling), a park with trees, a library with bookshelves, and a board game.", description_id: "Gambar kegiatan yang menunjukkan empat pilihan akhir pekan: sepeda di jalur (bersepeda), taman dengan pepohonan, perpustakaan dengan rak buku, dan permainan papan.", asset_id: null },
      { id: "visual_2", description: "Two response faces: a smiling face nodding with a thumbs-up (accept = 'Sure!'), and an apologetic face with one hand raised (decline = 'Sorry, I can't.').", description_id: "Dua wajah respons: wajah tersenyum sambil mengangguk dengan jempol ke atas (menerima = 'Sure!'), dan wajah meminta maaf dengan satu tangan terangkat (menolak = 'Sorry, I can't.').", asset_id: null },
      { id: "visual_3", description: "A small time card showing 'after school' (a clock at the end of the day) and 'this weekend' (a calendar with Saturday and Sunday marked).", description_id: "Kartu waktu kecil yang menunjukkan 'after school' (jam di akhir hari) dan 'this weekend' (kalender dengan Sabtu dan Minggu ditandai).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher beckons with an open hand toward themselves and a partner while saying 'Let's...' / 'Shall we...?' to show an invitation.", description_id: "Guru melambaikan tangan terbuka ke arah dirinya dan seorang teman sambil mengucapkan 'Let's...' / 'Shall we...?' untuk menunjukkan undangan." },
      { id: "gesture_2", description: "Teacher gives an enthusiastic thumbs-up and nods while saying 'Sure!'", description_id: "Guru memberi jempol ke atas dengan antusias dan mengangguk sambil mengucapkan 'Sure!'" },
      { id: "gesture_3", description: "Teacher places one hand on their chest with an apologetic shrug while saying 'Sorry, I can't.'", description_id: "Guru meletakkan satu tangan di dada dengan bahasa tubuh meminta maaf sambil mengucapkan 'Sorry, I can't.'" }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher invite a friend to a weekend activity, then accept ('Sure!') or politely decline ('Sorry, I can't.'), starting from a 'Do you like...?' lead-in.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-01", "PAT-7-02"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the invitations and the matching responses together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Make your own invitations and responses by replacing the weekend activity.",
      prompt: "Use the patterns 'Let's [activity].' / 'Shall we [activity]?' and the responses 'Sure!' or 'Sorry, I can't.' Replace the activity with another one from the pictures (cycling, the park, the library, games, ...).",
      change_target: ["activity (Let's ... / Shall we ...?)"],
      differentiation: {
        easy: { task: "Choose one activity and write one invitation with one response: 'Let's ___.' (or 'Shall we ___?') -- 'Sure!' (or 'Sorry, I can't.')." },
        standard: { task: "Write two short exchanges -- one that is accepted ('Sure!') and one that is declined ('Sorry, I can't.'). Use 'Let's...' in one and 'Shall we...?' in the other." },
        challenge: { task: "Write two exchanges, and start each one with a 'Do you like...?' lead-in before inviting, e.g. 'Do you like cycling? Yes, I do. Let's go cycling this weekend!' After an accepted invitation, add one 'I like...' sentence. Include one accepted and one declined exchange." }
      },
      support: { pattern_support: ["PAT-7-01", "PAT-7-02"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Role play planning a weekend activity with a partner -- one invites, the other accepts or politely declines -- then swap roles.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns: Partner A invites with 'Let's...' or 'Shall we...?', and Partner B responds with 'Sure!' or 'Sorry, I can't.' Then swap roles so both of you invite and respond.",
      differentiation: {
        easy: { task: "Use your exchange from CHANGE as a script. Partner A invites, Partner B responds, then swap. You may read from your script." },
        standard: { task: "Role play without reading. Do at least two exchanges each, so both partners get an accepted ('Sure!') and a declined ('Sorry, I can't.') response." },
        challenge: { task: "Start each role play with a 'Do you like...?' lead-in, then invite; after an accepted invitation, add 'I like...'. Swap roles and make sure one exchange is declined with 'Sorry, I can't.'" }
      },
      support: { pattern_support: ["PAT-7-01", "PAT-7-02"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Perform your weekend-plan role play again for a new group of classmates.",
      share_mode: "short_dialogue",
      task: "Form a group of 4 with another pair (someone other than your INTERACT partner). Take turns performing your invitation role play for the new group -- invite with 'Let's...' or 'Shall we...?', then accept ('Sure!') or decline ('Sorry, I can't.').",
      differentiation: {
        easy: { task: "Perform your role play from INTERACT for the new group. You may read your script." },
        standard: { task: "Perform your role play for the new group without reading." },
        challenge: { task: "Perform your role play, then do one more exchange with a different activity, including one accepted ('Sure!') and one declined ('Sorry, I can't.') response. Keep to the same forms." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students invite using 'Let's...' and 'Shall we...?' clearly",
        "students respond with 'Sure!' to accept and 'Sorry, I can't.' to decline, matching the invitation",
        "students still mix up inviting and responding, or add an explanation ('because...') that is not needed at this stage"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to try adding a polite softener after declining.",
        needs_model: "Repeat the MODEL step, emphasizing the invitation forms ('Let's...' / 'Shall we...?') and their matching responses.",
        needs_repeat: "Do one more round of REPEAT (choral) on the invitations and responses before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "hesitates when choosing between 'Let's...' and 'Shall we...?'",
        "relies only on the written script and cannot invite or respond without reading it",
        "invites and responds accurately and confidently across several exchanges"
      ],
      action: [
        "recast the invitation slowly, stressing 'Let's...' versus 'Shall we...?' and the matching response",
        "model one more invitation on a different activity to show the same pattern still works",
        "for a student who is ready, model ONE polite softener after declining first -- 'Sorry, I can't. Maybe next time.' -- then invite that student to try it once; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it adds no reason ('because...')"
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
