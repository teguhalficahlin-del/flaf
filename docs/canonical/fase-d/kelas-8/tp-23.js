export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-23.js",
    pattern_id: "PAT-8-23",
    title: "After-School Club Festival: Public Communication",
    short_title: "Club Festival",
    grade: 8,
    genre: "Functional",
    cluster: "B",
    topic: "After-School Club Festival",
    context: "Students create promotional posts inviting friends to visit and join different school clubs during a festival.",
    context_id: "Siswa membuat unggahan promosi yang mengundang teman-teman mengunjungi dan bergabung dengan berbagai klub sekolah saat festival.",
    communicative_goal: "produce persuasive public communication for a school event",
    communicative_goal_id: "membuat komunikasi publik yang persuasif untuk acara sekolah",
    vocabulary_domain: ["club", "festival", "activities", "members"],
    input_anchor: "event poster samples",
    output_anchor: "promotional post",
    prerequisite_patterns: ["PAT-8-22"],
    reusable_in: ["PAT-9-07", "PAT-9-10"],
    complexity_level: "Expand",
    notes: "TP ke-23 Kelas 8, genre Functional B 'Public Communication' (cluster B). SINGLE PREREQ: PAT-8-22. target_pattern PAT-8-23 = 'Join us ... / Don\\'t miss ... / You can ... because ...' (AJAKAN PUBLIK/BROADCAST). CEFR B1- via REGISTER PUBLIK (bukan vocabulary) -- yang naik adalah REGISTER BARU (teks publik persuasif untuk audiens umum, bukan instruksi bernomor untuk satu pengguna). Reaktivasi PAT-8-22 (WAJIB, VR-1): OPSIONAL RINGAN -- nuansa instruksi singkat boleh menyelip dalam post ('Don\\'t miss the registration table'), TAPI fokus utama tetap register publik-persuasif, bukan format instruksi bernomor. forbidden_overlap (exposition recommendation, interpersonal invitation, commercial advertisement): AJAKAN PUBLIK/BROADCAST (poster/pengumuman ke audiens umum) -- BEDA dari PAT-7-03 'Let\\'s.../Shall we?' (ajakan personal antar-teman) dan dari PAT-8-16 'Therefore, I recommend...' (rekomendasi personal beralasan). vocabulary_domain (club, festival, activities, members) semua terealisasi di model_sentences. BOOST extension: tambah kalimat penutup ajakan yang lebih kuat ('We can\\'t wait to see you there!') -- melampaui tiga kalimat utama, memperkuat persuasi tanpa mengulang model verbatim.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning, everyone. We have a festival to promote today." },
      { type: "AKSI", text: "Bangun semangat dan antusias di awal sesi." },
      // HOOK
      { type: "UCAP", text: "Have you ever seen a poster that made you really want to join an event? What made it effective?" },
      { type: "AKSI", text: "Tampilkan contoh poster festival klub: warna-warni dengan nama klub, frasa undangan, dan ikon kegiatan." },
      { type: "UCAP", text: "Look at these event posters. What makes them inviting? What would YOU add?" },
    ],

    active_vocabulary: [
      "Join us",
      "Don't miss",
      "You can",
      "because",
      "club",
      "festival",
      "activities",
      "members"
    ],

    model_sentences: [
      { id: "model_1", text: "Join us at the After-School Club Festival this Friday!" },
      { id: "model_2", text: "Don't miss the chance to try fun activities from every club." },
      { id: "model_3", text: "You can join the music club because members perform together every week." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Event poster samples for an After-School Club Festival: colorful posters with club names, invitation phrases, and illustrative icons for music, art, sports, and drama.", description_id: "Contoh poster acara untuk Festival Klub Sepulang Sekolah: poster berwarna-warni dengan nama klub, frasa undangan, dan ikon ilustratif untuk musik, seni, olahraga, dan drama.", asset_id: null },
      { id: "visual_2", description: "A promotional post frame with three labeled slots: 'Join us ...' / 'Don\\'t miss ...' / 'You can ... because ...'", description_id: "Kerangka unggahan promosi dengan tiga slot berlabel: 'Join us ...' / 'Don't miss ...' / 'You can ... because ...'", asset_id: null },
      { id: "visual_3", description: "Icons: a group of club members together, a festival banner, activity icons (guitar, paintbrush, ball, book), a speech bubble with an exclamation mark.", description_id: "Ikon: sekelompok anggota klub bersama, spanduk festival, ikon kegiatan (gitar, kuas, bola, buku), balon bicara dengan tanda seru.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher opens arms wide in a welcoming gesture while saying 'Join us ...' -- to signal a public invitation to everyone.", description_id: "Guru membuka kedua lengan lebar-lebar dengan gestur menyambut sambil mengucapkan 'Join us ...' -- untuk menandai undangan publik untuk semua orang." },
      { id: "gesture_2", description: "Teacher wags a finger urgently while saying 'Don\\'t miss ...' -- to signal excitement and urgency.", description_id: "Guru menggoyangkan jari dengan urgensi sambil mengucapkan 'Don't miss ...' -- untuk menandai kegembiraan dan urgensi." },
      { id: "gesture_3", description: "Teacher points to an imaginary audience while saying 'You can ...' and then opens a hand for the reason while saying 'because ...'.", description_id: "Guru menunjuk ke khayalan audiens sambil mengucapkan 'You can ...' lalu membuka tangan untuk alasannya sambil mengucapkan 'because ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher produce a persuasive public post with 'Join us ...', 'Don't miss ...', and 'You can ... because ...' -- broadcast language for a wide audience, not a personal invitation or a numbered instruction.",
      sentence_refs: ["model_1", "model_2", "model_3"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-22"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the promotional sentences ('Join us ...' / 'Don't miss ...' / 'You can ... because ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Create your own promotional post for a school club or event.",
      prompt: "Write three sentences for a school event or club: 'Join us ...' (invite), 'Don\\'t miss ...' (build excitement), 'You can ... because ...' (give a reason). Include: club, festival, activities, or members. Write for a wide audience (everyone at school) -- not a personal invitation ('Shall we go?'), not a numbered step guide, and not a formal recommendation ('Therefore, I recommend ...').",
      change_target: ["public invitation (Join us ...)", "excitement (Don't miss ...)", "reason (You can ... because ...)"],
      differentiation: {
        easy: { task: "Use the post frame and complete each slot. You may look at the poster samples." },
        standard: { task: "Write all three promotional sentences without reading." },
        challenge: { task: "Write all three promotional sentences and add one more sentence that names a specific club activity to make the invitation more persuasive." }
      },
      support: { pattern_support: ["PAT-8-22"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share promotional posts in a small group and check for the three invitation elements.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, take turns reading your promotional post aloud. The group checks: Is there 'Join us'? 'Don't miss'? 'You can ... because ...'? Then the group votes on which post is most persuasive and explains why.",
      differentiation: {
        easy: { task: "Read your promotional post to the group. Others point to 'Join us', 'Don't miss', and 'because' in your post." },
        standard: { task: "Read your post without reading, and the group checks all three elements." },
        challenge: { task: "Read your post and the group asks 'Why should we join this club?' -- you give one more reason." }
      },
      support: { pattern_support: ["PAT-8-22"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your promotional post to a new group (promotional post).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting your promotional post ('Join us ...' / 'Don't miss ...' / 'You can ... because ...').",
      differentiation: {
        easy: { task: "Read your promotional post to the new group." },
        standard: { task: "Present your post without reading." },
        challenge: { task: "Present your post, then answer one question from the group: 'What club activities can we try?' or 'Why should we come?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students produce a public promotional post with 'Join us ...', 'Don't miss ...', and 'You can ... because ...'",
        "students use broadcast language for a wide audience, not a personal invitation ('Shall we go, Dito?') or a numbered guide",
        "students write a personal invitation or slide into a formal recommendation ('Therefore, I recommend joining the music club because ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a strong closing invitation sentence.",
        needs_model: "Repeat the MODEL step, emphasizing the difference between broadcast public language ('Join us!') and personal or formal language.",
        needs_repeat: "Do one more round of REPEAT (choral) on the promotional sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "writes a personal invitation ('Let's go to the festival together!') or a formal recommendation instead of broadcast public language",
        "writes all three promotional sentences but cannot present without reading",
        "produces a persuasive public post with 'Join us ...', 'Don't miss ...', and 'You can ... because ...' accurately and confidently"
      ],
      action: [
        "recast one sentence slowly, modeling the difference: 'Let's go!' (personal, between friends) vs. 'Join us at the festival!' (public broadcast for everyone) -- pointing to the poster audience",
        "model one more promotional post for a different school event (e.g. a science fair) to show the same three-sentence pattern still works",
        "for a student who is ready, model ONE strong closing sentence first -- 'We can\\'t wait to see you there -- come and show your school spirit!' -- then invite that student to add one closing sentence to their own post that makes the invitation feel more exciting and personal; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it extends the post beyond the three core sentences without replacing them"
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
