export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-18.js",
    pattern_id: "PAT-8-18",
    title: "The Old Storage Room: Developing the Mystery",
    short_title: "Storage Room Mystery",
    grade: 8,
    genre: "Narrative",
    cluster: "A",
    topic: "The Old Storage Room Mystery",
    context: "Students continue the story as unexpected sounds and a hidden key create new problems for the characters.",
    context_id: "Siswa melanjutkan cerita saat suara tak terduga dan kunci tersembunyi menimbulkan masalah baru bagi para tokoh.",
    communicative_goal: "develop a narrative conflict through connected events and unexpected changes",
    communicative_goal_id: "mengembangkan konflik cerita melalui peristiwa yang berkaitan dan perubahan tak terduga",
    vocabulary_domain: ["key", "door", "footsteps", "flashlight"],
    input_anchor: "story sequence cards",
    output_anchor: "conflict retelling",
    prerequisite_patterns: ["PAT-8-17"],
    reusable_in: ["PAT-9-05", "PAT-9-17"],
    complexity_level: "Expand",
    notes: "TP ke-18 Kelas 8, genre Narrative A 'Developing Conflict' (cluster A). SINGLE PREREQ: PAT-8-17. target_pattern PAT-8-18 = 'Suddenly ... so ... but ...' (SATU KALIMAT TERINTEGRASI -- 3 konektor dalam 1 kalimat, bukan dua kalimat terpisah). Reaktivasi PAT-8-17 (WAJIB, VR-1): orientasi naratif TP-41 (tokoh Dito & Wulan, latar gudang tua) menjadi konteks yang melatari konflik -- 'Suddenly [peristiwa di gudang] so [respons karakter] but [komplikasi tambahan]'. forbidden_overlap (explanation cause-effect, procedure sequence, factual chronology): 'so' di sini adalah KONSEKUENSI NARATIF PERISTIWA SPESIFIK (lampau, karakter), BUKAN 'happens because' (PAT-8-09, eksplanasi umum), BUKAN 'If...,...so...' (PAT-8-11, kondisional), BUKAN dua kalimat terpisah ala PAT-7-22 ('One day,...but.../Suddenly,...'). vocabulary_domain (key, door, footsteps, flashlight) semua terealisasi di model_sentences. BOOST extension: tambah REAKSI EMOSIONAL atau detail sensoris setelah 'but' -- memperpanjang kalimat tanpa merusak struktur 3-konektor.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Welcome back. The story continues — and things are about to change." },
      { type: "AKSI", text: "Minta siswa mengingat tokoh dan latar yang sudah diperkenalkan." },
      // HOOK
      { type: "UCAP", text: "Last time, Dito found out about the old storage room. What do you think he did next?" },
      { type: "AKSI", text: "Tampilkan kartu urutan cerita: tokoh mendengarkan di pintu, pintu terbuka dalam kegelapan, senter menemukan kunci di lantai." },
      { type: "UCAP", text: "Look at these story cards. What unexpected things happened when he got closer to the door?" },
    ],

    active_vocabulary: [
      "Suddenly,",
      "so",
      "but",
      "key",
      "door",
      "footsteps",
      "flashlight"
    ],

    model_sentences: [
      { id: "model_1", text: "Suddenly, Dito heard footsteps behind the storage room door, so he turned on his flashlight, but the footsteps immediately stopped." },
      { id: "model_2", text: "Suddenly, the old door creaked open by itself, so Wulan jumped back, but nothing came out." },
      { id: "model_3", text: "Suddenly, Dito's flashlight found an old key on the floor, so he picked it up, but the key felt strangely cold." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Story sequence cards showing three conflict moments: (1) a character listening at a door with wide eyes, (2) a door opening unexpectedly in darkness, (3) a flashlight beam landing on an old key on a dusty floor.", description_id: "Kartu urutan cerita yang menunjukkan tiga momen konflik: (1) seorang tokoh mendengarkan di pintu dengan mata terbelalak, (2) pintu terbuka tak terduga dalam kegelapan, (3) sorot senter jatuh pada kunci tua di lantai berdebu.", asset_id: null },
      { id: "visual_2", description: "A connector strip: 'Suddenly, ___ so ___, but ___.' with three color-coded slots (orange / green / red) and arrows showing one integrated sentence.", description_id: "Potongan penghubung: 'Suddenly, ___ so ___, but ___.' dengan tiga slot berkode warna (oranye / hijau / merah) dan tanda panah menunjukkan satu kalimat terpadu.", asset_id: null },
      { id: "visual_3", description: "Icons for vocabulary: an old key, a creaking door, footstep marks, a flashlight beam.", description_id: "Ikon kosakata: kunci tua, pintu berderak, jejak langkah kaki, sorot senter.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher makes a sudden open-palm gesture while saying 'Suddenly,' -- to signal an unexpected event.", description_id: "Guru membuat gestur telapak terbuka tiba-tiba sambil mengucapkan 'Suddenly,' -- untuk menandai peristiwa tak terduga." },
      { id: "gesture_2", description: "Teacher moves a hand forward for the consequence while saying 'so ...'.", description_id: "Guru menggerakkan tangan ke depan untuk konsekuensinya sambil mengucapkan 'so ...'." },
      { id: "gesture_3", description: "Teacher raises a flat hand as a stop signal while saying 'but ...' -- to mark the complication.", description_id: "Guru mengangkat telapak tangan rata sebagai tanda berhenti sambil mengucapkan 'but ...' -- untuk menandai komplikasinya." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher develop a story conflict in ONE integrated sentence with 'Suddenly ... so ... but ...' -- three connectors in one sentence, not two separate sentences.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-8-17"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the conflict sentences ('Suddenly ... so ... but ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Create your own story conflict sentence with 'Suddenly ... so ... but ...'.",
      prompt: "Write ONE sentence: 'Suddenly, [event] so [character response], but [complication].' The event must happen in or near the storage room and involve: key, door, footsteps, or flashlight. Keep it one integrated sentence -- not two separate sentences, and not a general explanation of why something happens.",
      change_target: ["sudden event (Suddenly, ...)", "consequence (so ...)", "complication (but ...)"],
      differentiation: {
        easy: { task: "Use the connector strip and complete: 'Suddenly, ___ so ___, but ___.' You may look at the sequence cards." },
        standard: { task: "Write your own conflict sentence: 'Suddenly, ... so ..., but ...' without reading." },
        challenge: { task: "Write two conflict sentences, each with 'Suddenly ... so ... but ...', showing a different character reaction each time." }
      },
      support: { pattern_support: ["PAT-8-17"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share conflict sentences with a partner and check the three-part structure.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your conflict sentence ('Suddenly ... so ... but ...'). Your partner checks: Is it one sentence? Is there a sudden event, a consequence, and a complication? Then swap.",
      differentiation: {
        easy: { task: "Read your sentence to your partner. Your partner points to 'so' and 'but' in your sentence." },
        standard: { task: "Share your sentence without reading. Your partner checks for all three connectors." },
        challenge: { task: "Share two conflict sentences and your partner asks 'What happened after the complication?' -- you give one more sentence." }
      },
      support: { pattern_support: ["PAT-8-17"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your conflict retelling to a new group (conflict retelling).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your story conflict sentence ('Suddenly ... so ... but ...').",
      differentiation: {
        easy: { task: "Read your conflict sentence to the group." },
        standard: { task: "Present your conflict sentence without reading." },
        challenge: { task: "Present your conflict sentence, then answer one question from the group about the complication." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students produce one integrated sentence with 'Suddenly ... so ... but ...' (three connectors)",
        "students use 'so' as a narrative consequence of a specific event, not as a general explanation",
        "students split the sentence into two parts ('Suddenly ... Wulan was scared. But ...') or use 'so' to explain a general process"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a feeling or sensory detail after 'but'.",
        needs_model: "Repeat the MODEL step, emphasizing that 'Suddenly ... so ... but ...' is ONE connected sentence with three slots, not two.",
        needs_repeat: "Do one more round of REPEAT (choral) on the conflict sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "splits the sentence into two parts or uses 'so' as a general cause ('so that means ...')",
        "produces the sentence structure but cannot retell it without reading",
        "produces 'Suddenly ... so ... but ...' as one integrated sentence accurately and confidently"
      ],
      action: [
        "recast the sentence slowly, modeling 'Suddenly ... so ... but ...' as one connected narrative event -- not two sentences and not a general explanation",
        "model one more conflict on a different story moment (e.g. Wulan's flashlight going out) to show the same pattern still works",
        "for a student who is ready, model ONE conflict sentence with an added sensory detail first -- 'Suddenly, Dito's flashlight found an old key on the floor, so he picked it up carefully, but the key felt strangely cold and his heart started to beat faster.' -- then invite that student to add one feeling or sensory detail after 'but' in their own sentence; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the 'Suddenly...so...but' structure intact"
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
