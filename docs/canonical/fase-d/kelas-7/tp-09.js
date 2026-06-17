export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-09.js",
    pattern_id: "PAT-7-09",
    title: "Morning Routine: Sequencing Daily Actions",
    short_title: "Morning Routine",
    grade: 7,
    genre: "Procedure",
    cluster: "A",
    topic: "Morning Routine",
    context: "Students arrange and describe simple daily activities before going to school.",
    context_id: "Siswa menyusun dan mendeskripsikan kegiatan harian sederhana sebelum berangkat sekolah.",
    communicative_goal: "sequence actions using first, then, and finally",
    communicative_goal_id: "mengurutkan kegiatan menggunakan first, then, dan finally",
    vocabulary_domain: ["wake up", "breakfast", "school", "daily routine"],
    input_anchor: "picture sequence",
    output_anchor: "ordered oral retelling",
    prerequisite_patterns: ["PAT-7-08", "PAT-7-01", "PAT-7-04"],
    reusable_in: ["PAT-8-10"],
    complexity_level: "Acquire",
    notes: "TP kesembilan Fase D dan TP PROCEDURE PERTAMA. Mood bergeser dari deskriptif/deklaratif ke IMPERATIF + SEQUENCING. target_pattern PAT-7-09 = 'First, ... Then, ... Finally, ...' di mana tiap klausa setelah penanda urutan adalah AKSI IMPERATIF present tense (mis. 'First, wake up early.') -- BUKAN past tense (forbidden: recounting past events; HINDARI 'woke up', 'ate'). Tension ganda forbidden_overlap vs prerequisite (tiga prereq): (1) PAT-7-08 ('It is+adj+for/to') vs 'describing characteristics' -> dipakai HANYA satu baris framing/motivasi sebelum sequence ('It is important to have a good start.'), bukan fokus; (2) PAT-7-04 vs 'explaining causes' -> dipakai HANYA bentuk RESPONS pendek ('That's true.'/'I agree.') sebagai reaksi pendengar; sub-bentuk 'I think...because...' TIDAK dipakai sama sekali di TP ini; (3) PAT-7-01 ('I like...') sebagai lead-in personal singkat. Output WAJIB di CHANGE/INTERACT/SHARE tetap 'First,...Then,...Finally,...'; ketiga prereq hanya pelengkap 1 kalimat. Ekstensi opsional penanda urutan tambahan 'Next,' (menjaga head pattern sequencing, sekadar menambah langkah) ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Rise and shine, everyone! Let's start our morning." },
      { type: "AKSI", text: "Sapa siswa dengan semangat dan cek kesiapan kelas." },
      // HOOK
      { type: "UCAP", text: "What do you do first when you wake up in the morning?" },
      { type: "AKSI", text: "Tampilkan urutan gambar bernomor (1-2-3): anak bangun, sarapan, dan berjalan ke sekolah." },
      { type: "UCAP", text: "Look at this picture sequence. Does this morning routine look familiar to you?" },
    ],

    active_vocabulary: [
      "First,",
      "Then,",
      "Finally,",
      "wake up",
      "breakfast",
      "go to school",
      "morning routine",
      "early"
    ],

    model_sentences: [
      { id: "model_1", text: "I like my morning routine. It is important to have a good start." },
      { id: "model_2", text: "First, wake up early. Then, eat breakfast." },
      { id: "model_3", text: "Finally, go to school." },
      { id: "model_4", text: "That's true! I agree." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A numbered picture sequence (1-2-3) of a morning routine: a child waking up, eating breakfast, and walking to school.", description_id: "Urutan gambar bernomor (1-2-3) dari rutinitas pagi: anak bangun, sarapan, dan berjalan ke sekolah.", asset_id: null },
      { id: "visual_2", description: "Order-word cards with arrows: 'First,', 'Then,', 'Finally,' showing the sequence direction.", description_id: "Kartu kata urutan dengan tanda panah: 'First,', 'Then,', 'Finally,' yang menunjukkan arah urutan.", asset_id: null },
      { id: "visual_3", description: "Action icons: an alarm clock (wake up early), a breakfast plate, and a school bag.", description_id: "Ikon tindakan: jam alarm (bangun pagi), piring sarapan, dan tas sekolah.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher holds up one finger for 'First,', two fingers for 'Then,', and three fingers for 'Finally,' to show the order.", description_id: "Guru mengangkat satu jari untuk 'First,', dua jari untuk 'Then,', dan tiga jari untuk 'Finally,' untuk menunjukkan urutannya." },
      { id: "gesture_2", description: "Teacher mimes each action (stretching awake, eating, walking) while saying the imperative verb.", description_id: "Guru memperagakan setiap tindakan (menggeliat bangun, makan, berjalan) sambil mengucapkan kata kerja imperatifnya." },
      { id: "gesture_3", description: "Teacher nods with a thumbs-up while saying the short response 'That's true! / I agree.'", description_id: "Guru mengangguk dengan jempol ke atas sambil mengucapkan respons singkat 'That's true! / I agree.'" }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher sequence three morning actions with 'First, ... Then, ... Finally, ...', after a one-line personal lead-in and motivation, and hear a short listener response.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-08", "PAT-7-01", "PAT-7-04"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the ordered steps ('First, ... Then, ... Finally, ...') and the short response together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Sequence your own three morning actions using 'First, ... Then, ... Finally, ...'.",
      prompt: "Use the pattern 'First, [action]. Then, [action]. Finally, [action].' Replace the actions with your own morning steps (wake up, brush your teeth, eat breakfast, get dressed, go to school). Use present-tense action words, not past tense.",
      change_target: ["first action", "then action", "finally action"],
      differentiation: {
        easy: { task: "Put three picture cards in order and complete: 'First, ___. Then, ___. Finally, ___.'" },
        standard: { task: "Write your own three-step morning routine using 'First, ... Then, ... Finally, ...' with present-tense actions." },
        challenge: { task: "Write your three-step routine, and add a one-line lead-in and motivation before it: 'I like my morning routine. It is important to have a good start.' Keep the sequence as the main part." }
      },
      support: { pattern_support: ["PAT-7-08", "PAT-7-01"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Tell your morning routine in order to a partner and respond briefly to your partner's routine.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns telling your morning routine ('First, ... Then, ... Finally, ...'). After listening, respond with a short reaction ('That's true.' or 'I agree.').",
      differentiation: {
        easy: { task: "Tell your routine using your sentences from CHANGE (you may read). Your partner responds with a response card ('That's true.' or 'I agree.')." },
        standard: { task: "Tell your routine without reading. Your partner responds, then tells their own routine." },
        challenge: { task: "Add the one-line lead-in and motivation first, then your three-step routine. Your partner responds and tells their own." }
      },
      support: { pattern_support: ["PAT-7-08", "PAT-7-01", "PAT-7-04"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Retell your morning routine in order to a new group (ordered oral retelling).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns retelling your morning routine to the group using 'First, ... Then, ... Finally, ...'.",
      differentiation: {
        easy: { task: "Retell your three-step routine to the new group. You may read your sentences." },
        standard: { task: "Retell your routine to the group without reading." },
        challenge: { task: "Retell your routine with the one-line lead-in and motivation, then listen and respond to one classmate's routine with 'That's true.' or 'I agree.'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students sequence three actions in order using 'First, ... Then, ... Finally, ...'",
        "students use present-tense action words (imperatives), not past-tense forms",
        "students still leave out an order word, or slip into past tense ('I woke up', 'I ate')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add one more step with 'Next, ...'.",
        needs_model: "Repeat the MODEL step, emphasizing the order words 'First, ... Then, ... Finally, ...' with present-tense actions.",
        needs_repeat: "Do one more round of REPEAT (choral) on the ordered steps before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "leaves out an order word or puts the steps in the wrong order",
        "relies only on the written steps and cannot retell without reading",
        "sequences the three steps with 'First, ... Then, ... Finally, ...' accurately and confidently"
      ],
      action: [
        "recast the steps slowly, emphasizing 'First, ... Then, ... Finally, ...' and present-tense actions",
        "model one more three-step routine on a different topic (e.g. getting ready for bed) to show the same pattern still works",
        "for a student who is ready, model ONE four-step version first by adding 'Next, ...' between 'Then,' and 'Finally,' -- 'First, wake up. Then, eat breakfast. Next, pack your bag. Finally, go to school.' -- then invite that student to try it; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps present-tense actions, not past events"
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
