export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-7/tp-16.js",
    pattern_id: "PAT-7-16",
    title: "Community Clean-Up: Reflecting on Helping Others",
    short_title: "Community Clean-Up",
    grade: 7,
    genre: "Recount",
    cluster: "B",
    topic: "Community Clean-Up Day",
    context: "Students recount a real community service activity and reflect on what they learned from working together.",
    communicative_goal: "close a recount by expressing personal learning and social value",
    vocabulary_domain: ["community", "teamwork", "cleanliness", "responsibility"],
    input_anchor: "community activity photos",
    output_anchor: "reflection circle",
    prerequisite_patterns: ["PAT-7-15"],
    reusable_in: ["PAT-8-13", "PAT-8-16", "PAT-9-01", "PAT-9-16"],
    complexity_level: "Acquire",
    notes: "TP keenam belas Fase D, Recount, menutup genre Recount Kelas 7. target_pattern PAT-7-16 = 'At the end, ... / After that, ... / I learned ...' -- tiga sub-bentuk penutup recount. 'At the end, [past event].' dan 'After that, [past event].' adalah penutup naratif lampau; 'I learned [hal konkret/singkat]' HARUS hasil KONKRET DAN SINGKAT (mis. 'I learned to work as a team and take responsibility.') -- BUKAN esai pesan moral panjang, refleksi formal, atau kesimpulan argumentatif (forbidden_overlap). PAT-7-15 ('It was+adj because+event') sebagai support: respons emosi sebelum penutup ('It was tiring because we worked hard. At the end, the park was clean. I learned to work as a team.'). vocabulary_domain (community, teamwork, cleanliness, responsibility) muncul di bahasa target (teamwork direalisasikan via 'team', cleanliness via 'clean'/'cleaned'). Ekstensi opsional 'I learned' dengan dua hal konkret yang digabung ('I learned to clean up and to help others.') -- menjaga head 'I learned ...' tetap singkat/konkret -- ditempatkan di BOOST: opsional, individual/reaktif, guru memodelkan dulu (Schema JS Bagian 9.2).",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "At the end,",
      "After that,",
      "I learned",
      "community",
      "team",
      "responsibility",
      "cleaned",
      "clean"
    ],

    model_sentences: [
      { id: "model_1", text: "It was tiring because we worked hard as a team." },
      { id: "model_2", text: "After that, our community cleaned the park together." },
      { id: "model_3", text: "At the end, the park was clean and tidy." },
      { id: "model_4", text: "I learned to take responsibility." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Community activity photos: students and neighbors cleaning a park together, collecting trash into bags, and the clean park at the end.", asset_id: null },
      { id: "visual_2", description: "Closing-word cards: 'After that,' (a next-event arrow), 'At the end,' (a finish flag), 'I learned' (a lightbulb).", asset_id: null },
      { id: "visual_3", description: "Theme icons: joined hands (team), a clean park (cleanliness), a community group, and a helping hand (responsibility).", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher gestures onward with one hand while saying 'After that, ...' to show the next event." },
      { id: "gesture_2", description: "Teacher brings both hands together to a close while saying 'At the end, ...'." },
      { id: "gesture_3", description: "Teacher taps their temple while saying 'I learned ...' to show a short, concrete realization." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher close a recount using 'After that, ...', 'At the end, ...', and a short, concrete 'I learned ...', after a feeling response.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-15"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the closing sentences ('After that, ... / At the end, ... / I learned ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Close your own recount by replacing the closing events and your short learning.",
      prompt: "Use the patterns 'After that, [past event].', 'At the end, [past event].', and 'I learned [something short and concrete].' Replace the words with your real community clean-up (community, team, cleaned, clean, responsibility). Keep 'I learned ...' short -- one concrete thing, not a long message.",
      change_target: ["closing event (After that / At the end)", "learning (I learned ...)"],
      differentiation: {
        easy: { task: "Complete the closers: 'After that, ___. At the end, ___. I learned ___.' (keep each one short)." },
        standard: { task: "Write two closing sentences ('After that, ...' and 'At the end, ...') plus one short 'I learned ...'." },
        challenge: { task: "Start with a feeling response ('It was tiring because we worked hard.'), then add your closers and one short 'I learned ...'." }
      },
      support: { pattern_support: ["PAT-7-15"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share the closing of your recount in a small reflection circle.",
      interaction_mode: "small_group",
      task: "Sit in a small group of 3-4 (a reflection circle). Take turns giving the closing of your community clean-up recount: 'After that, ... At the end, ... I learned ...' Listen to each classmate's short learning.",
      differentiation: {
        easy: { task: "Give your closers from CHANGE to the circle (you may read), ending with one short 'I learned ...'." },
        standard: { task: "Give your closing without reading, ending with a short 'I learned ...'. Listen to your classmates' learnings." },
        challenge: { task: "Add a feeling response first, then your closers and learning. Listen and remember one classmate's learning." }
      },
      support: { pattern_support: ["PAT-7-15"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Share your recount closing with a new reflection circle.",
      share_mode: "oral_response",
      task: "Form a new circle of 4 with classmates from other groups. Take turns sharing your recount closing: 'After that, ... At the end, ... I learned ...'",
      differentiation: {
        easy: { task: "Share your two closers and one short 'I learned ...' with the new circle. You may read." },
        standard: { task: "Share your closing without reading." },
        challenge: { task: "Share a feeling response, your closers, and your short learning, then respond to one classmate's learning with 'That's true.' or 'I agree.'" }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students close the recount with 'After that, ...', 'At the end, ...', and 'I learned ...'",
        "students keep 'I learned ...' short and concrete (one thing learned)",
        "students still stretch 'I learned ...' into a long moral message or an argumentative conclusion"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to name two concrete things in one 'I learned ...'.",
        needs_model: "Repeat the MODEL step, emphasizing the closers and a short, concrete 'I learned ...'.",
        needs_repeat: "Do one more round of REPEAT (choral) on the closing sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "stretches 'I learned ...' into a long message or leaves out a closer",
        "relies only on the written closing and cannot share it without reading",
        "closes the recount with 'After that, ... / At the end, ... / I learned ...' accurately and confidently"
      ],
      action: [
        "recast the closing slowly, modeling 'After that, ...', 'At the end, ...', and a short 'I learned ...'",
        "model one more closing about a different activity to show the same pattern still works",
        "for a student who is ready, model ONE 'I learned ...' with two concrete things first -- 'I learned to clean up and to help others.' -- then invite that student to try one; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps 'I learned ...' short and concrete, not a long moral message"
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
