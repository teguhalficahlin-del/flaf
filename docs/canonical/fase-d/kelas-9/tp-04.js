export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-9/tp-04.js",
    pattern_id: "PAT-9-04",
    title: "Healthy Canteen Menu: Giving a Simple Review",
    short_title: "Canteen Menu Review",
    grade: 9,
    genre: "Review",
    cluster: "A",
    topic: "Healthy Canteen Menu",
    context: "Students sample or observe healthy dishes from the school canteen and give a simple evaluative response combining description and opinion.",
    context_id: "Siswa mencicipi atau mengamati hidangan sehat dari kantin sekolah dan memberikan tanggapan evaluatif sederhana yang menggabungkan deskripsi dan opini.",
    communicative_goal: "describe an object or experience and give an initial evaluative response",
    communicative_goal_id: "mendeskripsikan suatu objek atau pengalaman dan memberikan tanggapan evaluatif awal",
    vocabulary_domain: ["healthy food", "school canteen", "nutrition", "taste and price"],
    input_anchor: "canteen menu cards",
    output_anchor: "simple review",
    prerequisite_patterns: ["PAT-9-03", "PAT-7-06", "PAT-8-13"],
    reusable_in: ["PAT-9-05", "PAT-9-06"],
    complexity_level: "Integrate",
    notes: "TP keempat Kelas 9, genre Review (cluster A -- opener cluster Review). TRIPLE PREREQ. target_pattern PAT-9-04 = 'It is...and...I think...because...' (deskripsi + evaluasi awal, format review paling sederhana di cluster). Reaktivasi PAT-7-06 (WAJIB, VR-1): deskripsi gabungan 'It is...and...' (K7, menggabungkan dua ciri objek) direaktivasi sebagai BAGIAN DESKRIPTIF review -- struktur sama, konteks bergeser dari deskripsi benda/tempat netral ke deskripsi evaluatif canteen menu. Reaktivasi PAT-8-13 (WAJIB, VR-1): 'I believe...because...' (K8, claim+reason argumentatif) menjadi 'I think...because...' sebagai KOMPONEN EVALUATIF review -- register sedikit lebih kasual ('I think' vs 'I believe') sesuai genre review informal. Reaktivasi PAT-9-03 (WAJIB, VR-1): kapasitas argumen utuh dari Cluster 1 direaktivasi sebagai REPRESENTASI MENTAL -- di sini DIREDUKSI ke bentuk review paling sederhana (2 komponen: describe+evaluate), BUKAN argumen 6-komponen. Jembatan struktural: PAT-9-03 membuktikan siswa SUDAH BISA argumen penuh; TP-04 mengajak mereka menerapkan kapasitas itu dalam format genre baru (review). forbidden_overlap (descriptive report tanpa evaluasi, personal recount tanpa judgment, argumentative persuasion): WAJIB ada komponen evaluatif 'I think...because...' -- bukan hanya deskripsi 'It is...and...' (itu report/recount), bukan argumen publik penuh (peran TP-06). Vocabulary_domain: canteen ✓ model_1, healthy ✓ model_1, nutrition ✓ model_3/4, taste ✓ model_4, price ✓ model_2. BOOST extension: tambah rekomendasi-lite 'For anyone looking for...this is worth trying' -- melampaui simple review tanpa menjadi argumen 4-komponen TP-01/TP-06.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. We begin today with something from the school canteen." },
      { type: "AKSI", text: "Kondisikan kelas agar siap memberikan penilaian evaluatif." },
      // HOOK
      { type: "UCAP", text: "When you eat at the canteen, do you think about the food's nutrition and value? What matters most to you?" },
      { type: "AKSI", text: "Tampilkan kartu menu kantin: sup sayur, ikan bakar, nasi campur, salad buah — dengan harga dan bahan." },
      { type: "UCAP", text: "Look at these menu cards. If you were going to review one dish, what would you say about it?" },
    ],

    active_vocabulary: [
      "It is",
      "and",
      "I think",
      "because",
      "canteen",
      "healthy",
      "nutrition",
      "taste",
      "price"
    ],

    model_sentences: [
      { id: "model_1", text: "The school canteen serves healthy food every day, and the portions are always generous." },
      { id: "model_2", text: "It is fresh and colourful, and the price is very reasonable for students." },
      { id: "model_3", text: "I think the vegetable soup is the best dish because it has great nutrition and keeps you full all morning." },
      { id: "model_4", text: "It is warm and filling, and I think the canteen menu is good because it balances nutrition with taste at a fair price." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Canteen menu cards showing four healthy dishes with name, price, and a short ingredient list: vegetable soup, grilled fish, mixed rice, and a fruit salad.", description_id: "Kartu menu kantin yang menunjukkan empat hidangan sehat dengan nama, harga, dan daftar bahan singkat: sup sayur, ikan bakar, nasi campur, dan salad buah.", asset_id: null },
      { id: "visual_2", description: "A simple review frame: 'It is ___ and ___.' / 'I think ___ because ___.' with two labelled slots: DESCRIBE and EVALUATE.", description_id: "Kerangka ulasan sederhana: 'It is ___ and ___.' / 'I think ___ because ___.' dengan dua slot berlabel: DESCRIBE dan EVALUATE.", asset_id: null },
      { id: "visual_3", description: "Icons: a healthy food bowl, a school building (canteen context), a nutrition label, a flavour star (taste), and a price tag.", description_id: "Ikon: mangkuk makanan sehat, gedung sekolah (konteks kantin), label nutrisi, bintang rasa (rasa), dan label harga.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher points to the menu card while saying 'It is ...' -- to signal describing what is in front of you.", description_id: "Guru menunjuk kartu menu sambil mengucapkan 'It is ...' -- untuk menandai mendeskripsikan apa yang ada di depan kita." },
      { id: "gesture_2", description: "Teacher links two fingers together while saying '... and ...' -- to signal combining two descriptive details.", description_id: "Guru mengaitkan dua jari sambil mengucapkan '... and ...' -- untuk menandai menggabungkan dua detail deskriptif." },
      { id: "gesture_3", description: "Teacher points to own chest while saying 'I think ...' -- to signal shifting from description to personal evaluation.", description_id: "Guru menunjuk dadanya sendiri sambil mengucapkan 'I think ...' -- untuk menandai pergeseran dari deskripsi ke evaluasi pribadi." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher describe a canteen dish and then give an evaluative response: 'It is ... and ...' (description) + 'I think ... because ...' (evaluation) -- a simple review, not a full argument and not a neutral report.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-9-03", "PAT-7-06", "PAT-8-13"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the simple review sentences ('It is ... and ...' / 'I think ... because ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Write your own simple review of one canteen dish.",
      prompt: "Choose one dish from the menu cards and write a review using: 'It is ___ and ___.' (describe two features), 'I think ___ because ___.' (give your evaluation with a reason). Include: canteen, healthy, nutrition, taste, or price. Keep it a simple review -- not just a description without an opinion ('It is...and...'), and not a full argument about the canteen ('I recommend... because... One reason is...').",
      change_target: ["description (It is ... and ...)", "evaluation (I think ... because ...)"],
      differentiation: {
        easy: { task: "Use the review frame and complete: 'It is ___ and ___. I think ___ because ___.' You may look at the menu cards." },
        standard: { task: "Write your own simple review of a canteen dish without reading the frame." },
        challenge: { task: "Write the simple review and add one more evaluative sentence using a different feature (e.g. price or portion size)." }
      },
      support: { pattern_support: ["PAT-9-03", "PAT-7-06", "PAT-8-13"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share simple reviews with a partner and check for description and evaluation.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your canteen review ('It is ... and ...' / 'I think ... because ...'). Your partner checks: Is there a description with two details? Is there an evaluation with a reason? Then swap.",
      differentiation: {
        easy: { task: "Read your review to your partner. Your partner points to the description and the evaluation in your text." },
        standard: { task: "Share your review without reading. Your partner checks for both components." },
        challenge: { task: "Share your review and your partner asks 'What would you change about this dish?' -- you add one evaluative sentence in response." }
      },
      support: { pattern_support: ["PAT-9-03", "PAT-7-06", "PAT-8-13"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your simple review to a new group (simple review).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your canteen review ('It is ... and ...' / 'I think ... because ...').",
      differentiation: {
        easy: { task: "Read your review to the group." },
        standard: { task: "Present your review without reading." },
        challenge: { task: "Present your review, then answer one question from the group: 'What is the main strength of that dish?'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students describe a dish with two features ('It is ... and ...') and then evaluate it with a reason ('I think ... because ...')",
        "students distinguish description (what it is) from evaluation (what they think of it)",
        "students only describe ('It is ... and ...') without an evaluative opinion, or jump straight to a full argument ('I recommend the canteen because...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a light recommendation sentence to their review.",
        needs_model: "Repeat the MODEL step, pointing to the review frame and naming each slot: DESCRIBE ('It is...and...') then EVALUATE ('I think...because...').",
        needs_repeat: "Do one more round of REPEAT (choral) on the review sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "gives only a description without an evaluative opinion, or makes a full argument ('I recommend...because...One reason is...') instead of a simple review",
        "produces the description and evaluation but cannot present without reading",
        "writes a clear simple review with description and evaluation accurately and confidently"
      ],
      action: [
        "recast the review slowly, modelling the two-step move: describe what you see ('It is...and...') then shift to your evaluation ('I think...because...') -- not just a neutral report",
        "model one more simple review on a different canteen item (e.g. the fruit salad) to show the same describe-then-evaluate move still works",
        "for a student who is ready, model ONE light recommendation sentence first -- 'For anyone looking for a healthy and affordable meal, this canteen dish is really worth trying -- good nutrition at a fair price.' -- then invite that student to add one recommendation sentence after their evaluation; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it adds a light recommendation without turning the review into a full argument"
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
