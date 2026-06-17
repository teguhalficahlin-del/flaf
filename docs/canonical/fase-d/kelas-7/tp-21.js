export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-21.js",
    pattern_id: "PAT-7-21",
    title: "The Lost Firefly: Building Story World",
    short_title: "The Lost Firefly",
    grade: 7,
    genre: "Narrative",
    cluster: "A",
    topic: "The Lost Firefly",
    context: "Students meet a small firefly who lives near a quiet pond and dreams of finding bright friends.",
    context_id: "Siswa berkenalan dengan seekor kunang-kunang kecil yang tinggal di dekat kolam yang tenang dan bermimpi menemukan teman-teman yang bersinar.",
    communicative_goal: "introduce characters and setting in a simple story world",
    communicative_goal_id: "memperkenalkan tokoh dan latar dalam dunia cerita sederhana",
    vocabulary_domain: ["animals", "forest", "pond", "friends"],
    input_anchor: "story picture cards",
    output_anchor: "story opening",
    prerequisite_patterns: ["PAT-7-05"],
    reusable_in: ["PAT-8-17"],
    complexity_level: "Acquire",
    notes: "TP kedua puluh satu Fase D dan TP NARRATIVE PERTAMA. Babak 1 dari satu cerita berkelanjutan 'The Lost Firefly' (TP-21 s.d. TP-24). Cerita fiksi PIHAK KETIGA, past tense ('there WAS', bukan 'there is'); karakter = 'a small firefly' (bukan 'I/we' -- forbidden: personal recount/self-introduction). target_pattern PAT-7-21 = 'Once there was ... / There was ... + character + place'. Tension forbidden_overlap vs prerequisite: PAT-7-05 ('It is/has/looks', present-tense factual description) vs 'factual description' -> direaktivasi sebagai DESKRIPSI KARAKTER dalam cerita yang DI-TENSE-SHIFT ke PAST ('It was tiny and bright.' -- bukan 'It is...'); ini elaborasi singkat (1 kalimat support) tentang karakter yang baru diperkenalkan, bukan deskripsi faktual berdiri sendiri. Elemen Babak 1 (sesuai alur): firefly kecil di dekat kolam tenang, kecil dan bersinar, BERMIMPI menemukan teman-teman yang bersinar -- setup 'bermimpi menemukan teman' ini PENTING sebagai dasar konflik TP-22 (kehilangan teman) dan resolusi TP-23/penutup TP-24 (menemukan teman). vocabulary_domain (animals, forest, pond, friends) muncul di bahasa target. Ekstensi opsional pembuka naratif waktu ('Long ago, ...') -- menjaga head pembuka cerita -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning, storytellers! Get comfortable — we have a story to enter today." },
      { type: "AKSI", text: "Minta siswa duduk nyaman dan siap mendengarkan." },
      // HOOK
      { type: "UCAP", text: "Have you ever seen a firefly glow in the dark? What was it like?" },
      { type: "AKSI", text: "Tunjukkan kartu bergambar cerita: kunang-kunang kecil bersinar di dekat kolam yang tenang di hutan malam hari." },
      { type: "UCAP", text: "Look at this picture. What do you think the little firefly is thinking?" },
    ],

    active_vocabulary: [
      "Once there was",
      "There was",
      "firefly",
      "pond",
      "forest",
      "bright",
      "friends",
      "dreamed"
    ],

    model_sentences: [
      { id: "model_1", text: "Once there was a small firefly near a quiet pond." },
      { id: "model_2", text: "There was a little forest around the pond." },
      { id: "model_3", text: "It was tiny and bright." },
      { id: "model_4", text: "The firefly dreamed of finding bright friends." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Story picture cards: a small glowing firefly near a calm pond in a little forest at night.", description_id: "Kartu bergambar cerita: kunang-kunang kecil yang bersinar di dekat kolam yang tenang di hutan kecil pada malam hari.", asset_id: null },
      { id: "visual_2", description: "A character card: the tiny, bright firefly with a thought bubble showing it dreaming of other glowing fireflies (bright friends).", description_id: "Kartu tokoh: kunang-kunang kecil yang bersinar dengan balon pikiran menunjukkan ia bermimpi tentang kunang-kunang lain yang bersinar (teman-teman yang bersinar).", asset_id: null },
      { id: "visual_3", description: "A setting card: the quiet pond with the little forest around it.", description_id: "Kartu latar: kolam yang tenang dengan hutan kecil di sekitarnya.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher opens both hands like opening a storybook while saying 'Once there was ... / There was ...'.", description_id: "Guru membuka kedua tangan seperti membuka buku cerita sambil mengucapkan 'Once there was ... / There was ...'." },
      { id: "gesture_2", description: "Teacher makes a small twinkling motion with the fingers while describing the tiny, bright firefly.", description_id: "Guru membuat gerakan berkilau kecil dengan jari-jari sambil mendeskripsikan kunang-kunang kecil yang bersinar." },
      { id: "gesture_3", description: "Teacher places a hand near the temple (dreaming) while saying 'dreamed of finding bright friends'.", description_id: "Guru meletakkan tangan dekat pelipis (bermimpi) sambil mengucapkan 'dreamed of finding bright friends'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher open a story by introducing a character and a setting with 'Once there was ... / There was ...' in past tense, with a short past-tense description of the character.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-05"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the story-opening sentences ('Once there was ... / There was ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Open your own story by replacing the character and the place.",
      prompt: "Use the patterns 'Once there was [character] [place].' and 'There was [setting].' Use a story character (an animal) and a place (forest, pond). Use past tense ('there was', 'it was') -- this is a story, not 'I am ...' and not 'There is ...'.",
      change_target: ["character (Once there was ...)", "place"],
      differentiation: {
        easy: { task: "Choose a character card and a place card and complete: 'Once there was a ___ near a ___.'" },
        standard: { task: "Write a two-sentence story opening: 'Once there was [character] [place]. There was [setting].'" },
        challenge: { task: "Write your opening, add one past-tense description ('It was [adjective] and [adjective].'), and a dream ('It dreamed of ...')." }
      },
      support: { pattern_support: ["PAT-7-05"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Tell your story opening to a partner and listen to your partner's opening.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns telling your story opening ('Once there was ... / There was ...'). Listen and remember your partner's character and place.",
      differentiation: {
        easy: { task: "Tell your partner one opening sentence from CHANGE (you may read). Listen to your partner's sentence." },
        standard: { task: "Tell your two-sentence opening without reading. Your partner does the same." },
        challenge: { task: "Tell your opening with a description and a dream. Your partner does the same, then names your character and place." }
      },
      support: { pattern_support: ["PAT-7-05"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Tell your story opening to a new group (story opening).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates you did not work with in INTERACT. Take turns telling your story opening using 'Once there was ... / There was ...'.",
      differentiation: {
        easy: { task: "Tell the new group your opening sentence. You may read it." },
        standard: { task: "Tell the new group your two-sentence opening without reading." },
        challenge: { task: "Tell your opening with a description and a dream, then listen and remember each classmate's character." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students open a story with 'Once there was ... / There was ...' and a character and place",
        "students use past tense for the story ('there was', 'it was'), not present tense",
        "students still slip into 'There is ...' (present) or 'I am ...' (self-introduction) instead of a story opening"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a narrative time opener ('Long ago, ...').",
        needs_model: "Repeat the MODEL step, emphasizing 'Once there was ... / There was ...' with a character and place in past tense.",
        needs_repeat: "Do one more round of REPEAT (choral) on the story-opening sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "opens with present tense ('There is ...') or with self-introduction ('I am ...')",
        "relies only on the written opening and cannot tell it without reading",
        "opens a story with 'Once there was ... / There was ...' in past tense accurately and confidently"
      ],
      action: [
        "recast the opening slowly, emphasizing 'Once there was ... / There was ...' and past tense",
        "model one more story opening with a different character to show the same pattern still works",
        "for a student who is ready, model ONE opening with a narrative time opener first -- 'Long ago, there was a small firefly near a quiet pond.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the story-opening head, not a present-tense description or self-introduction"
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
