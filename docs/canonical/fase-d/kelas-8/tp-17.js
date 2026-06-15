export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-17.js",
    pattern_id: "PAT-8-17",
    title: "The Old Storage Room: Building a Rich Story World",
    short_title: "Old Storage Room",
    grade: 8,
    genre: "Narrative",
    cluster: "A",
    topic: "The Old Storage Room Mystery",
    context: "Students enter the story of an old locked storage room that everyone at school believes hides a forgotten secret.",
    communicative_goal: "build a richer story world with characters, setting, and shared beliefs",
    vocabulary_domain: ["storage room", "school", "secret", "old objects"],
    input_anchor: "story illustration",
    output_anchor: "story opening",
    prerequisite_patterns: ["PAT-7-24", "PAT-7-20"],
    reusable_in: ["PAT-9-05"],
    complexity_level: "Expand",
    notes: "TP ke-17 Kelas 8, genre Narrative A 'Building Rich Story Worlds' (cluster A -- Opener arc baru 'The Old Storage Room Mystery'). DUAL PREREQ lintas kelas: PAT-7-24 + PAT-7-20. target_pattern = 'Once ..., ... was ... who ... / Everyone believed ...' (orientasi naratif lebih rinci: tokoh, latar, keyakinan kolektif). Reaktivasi PAT-7-20 (WAJIB, VR-1): papan tanda 'Notice: Keep this door locked.' sebagai OBJEK DIEGETIK dalam cerita -- struktur fungsional PAT-7-20 direaktivasi dengan FUNGSI NARATIF berbeda (bukan instruksi kepada pembaca, melainkan pemicu cerita). Reaktivasi PAT-7-24 (WAJIB, VR-1): 'Everyone believed...' menggunakan struktur 'Everyone [verb]...' sama dengan PAT-7-24 'Everyone felt...because...', TAPI fungsi berbalik: dulu refleksi emosional penutup cerita Firefly, sekarang keyakinan kolektif PEMBUKA misteri baru. forbidden_overlap (factual report, descriptive classification, personal recount): fiksi orang ketiga -- bukan 'It is a kind of...' (report), bukan 'It has...which...' (klasifikasi), bukan 'I remember...' (recount). ARC: Dito & Wulan konsisten TP-41 s.d. TP-45. 'old objects' terealisasi di CHANGE prompt (runtime). BOOST extension: orientasi diperluas dengan karakter kedua Wulan dan kepercayaan lebih spesifik tentang old objects tersembunyi.",
    session_version: "1.0"
  },

  resources: {

    active_vocabulary: [
      "Once,",
      "there was",
      "who",
      "Everyone believed",
      "storage room",
      "school",
      "secret",
      "old objects"
    ],

    model_sentences: [
      { id: "model_1", text: "Once, there was a curious student named Dito who loved exploring old places." },
      { id: "model_2", text: "Behind the school, there was an old storage room full of dusty boxes and broken chairs." },
      { id: "model_3", text: "On the storage room door, there was a sign that said, 'Notice: Keep this door locked.'" },
      { id: "model_4", text: "Everyone believed the storage room hid an old secret." }
    ],

    visual_cues: [
      { id: "visual_1", description: "A story illustration showing a school building with a mysterious old storage room visible at the back, door slightly ajar behind overgrown plants.", asset_id: null },
      { id: "visual_2", description: "A close-up of a wooden door with a handwritten sign: 'Notice: Keep this door locked.' and dusty old objects barely visible through a gap.", asset_id: null },
      { id: "visual_3", description: "Story frames: 'Once, there was ... who ...' linked by an arrow to 'Everyone believed ...' -- showing character introduction leading to shared belief.", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher sweeps a hand slowly to open the scene while saying 'Once, there was ...' -- as if turning the page of a storybook." },
      { id: "gesture_2", description: "Teacher points outward to indicate location while saying 'Behind the school, there was ...'." },
      { id: "gesture_3", description: "Teacher opens arms wide to represent the whole community while saying 'Everyone believed ...'." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher build a rich story world with a character, setting, and shared belief: 'Once ..., ... was ... who ...' and 'Everyone believed ...'.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3"],
      support: { pattern_support: ["PAT-7-24", "PAT-7-20"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice saying the story-opening sentences ('Once, there was ... who ...' and 'Everyone believed ...') together as a class.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Build your own story world opening with a character, a setting, and a shared belief.",
      prompt: "Use 'Once, there was ... who ...' to introduce a character in a school setting. Then add 'Everyone believed ...' to create a shared mystery. Include words from: storage room, school, secret, old objects. Keep it third-person fiction -- not 'It is a kind of ...' (a report), and not 'I remember ...' (your own memory).",
      change_target: ["character (Once, there was ... who ...)", "shared belief (Everyone believed ...)"],
      differentiation: {
        easy: { task: "Use the story frames and complete: 'Once, there was ___ who ___. Everyone believed ___.' You may use the illustration." },
        standard: { task: "Write your own story opening: 'Once, there was ... who ...' and 'Everyone believed ...' without reading." },
        challenge: { task: "Write two setting sentences (one for the school location, one for the old objects inside) then 'Everyone believed ...' to build a fuller story world." }
      },
      support: { pattern_support: ["PAT-7-24", "PAT-7-20"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Share story openings with a partner and check for character, setting, and shared belief.",
      interaction_mode: "pair",
      task: "Find a partner. Take turns sharing your story opening ('Once, there was ... who ...' and 'Everyone believed ...'). Your partner checks: Is there a character? A setting? A shared belief? Then swap and give feedback.",
      differentiation: {
        easy: { task: "Read your story opening to your partner. Your partner points to the character and the belief." },
        standard: { task: "Share your story opening without reading. Your partner checks character, setting, and belief." },
        challenge: { task: "Share your story opening and add one more detail about the old objects; your partner asks 'What exactly did everyone believe?' and you answer." }
      },
      support: { pattern_support: ["PAT-7-24", "PAT-7-20"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your story opening to a new group (story opening).",
      share_mode: "mini_presentation",
      task: "Form a group of 4 with classmates from other pairs. Take turns presenting your story opening ('Once, there was ... who ...' and 'Everyone believed ...').",
      differentiation: {
        easy: { task: "Read your story opening to the group." },
        standard: { task: "Present your story opening without reading." },
        challenge: { task: "Present your story opening, then answer one question from the group about your setting or the shared belief." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students open a story with a character ('Once, there was ... who ...') and a shared belief ('Everyone believed ...')",
        "students keep the story in third-person fiction, not a factual report or personal recount",
        "students only describe a place without introducing a character, or slip into first person ('I ...')"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to expand the story world with a second character.",
        needs_model: "Repeat the MODEL step, emphasizing 'Once, there was ... who ...' as character introduction and 'Everyone believed ...' as shared story belief.",
        needs_repeat: "Do one more round of REPEAT (choral) on the story-opening sentences before INTERACT."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "writes a factual description ('It is a storage room that has ...') or personal recount ('I remember the room ...') instead of third-person fiction",
        "introduces a character but forgets to add a shared belief ('Everyone believed ...')",
        "builds the story opening with character, setting, and shared belief accurately and confidently"
      ],
      action: [
        "recast the opening slowly, modeling 'Once, there was ... who ...' as third-person fiction introducing a character, not a factual description or personal memory",
        "model one more story opening on a different school location to show the same pattern still works",
        "for a student who is ready, model ONE expanded story world with a second character first -- 'Once, there was a curious student named Dito who loved exploring old places at school, and his friend Wulan believed the storage room held many old objects no one remembered.' -- then invite that student to add a second character to their own story opening; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it keeps the third-person fiction frame, not a personal account or a report"
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
