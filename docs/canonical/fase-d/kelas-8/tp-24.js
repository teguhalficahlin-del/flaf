export default {

  metadata: {
    tp_id: "docs/fase-d/kelas-8/tp-24.js",
    pattern_id: "PAT-8-24",
    title: "Community Book Swap: Organizing Public Information",
    short_title: "Book Swap",
    grade: 8,
    genre: "Functional",
    cluster: "B",
    topic: "Community Book Swap",
    context: "Students organize information from a reading event into a clear public information layout containing title, key details, contact, action, and additional notes.",
    context_id: "Siswa menyusun informasi dari acara membaca menjadi tata letak informasi publik yang jelas, berisi judul, detail penting, kontak, ajakan bertindak, dan catatan tambahan.",
    communicative_goal: "organize multiple pieces of public information into one coherent text",
    communicative_goal_id: "menyusun berbagai informasi publik menjadi satu teks yang koheren",
    vocabulary_domain: ["books", "library", "exchange", "community"],
    input_anchor: "event information cards",
    output_anchor: "information board",
    prerequisite_patterns: ["PAT-8-23"],
    reusable_in: ["PAT-9-10", "PAT-9-11", "PAT-9-12"],
    complexity_level: "Expand",
    notes: "TP ke-24 Kelas 8, *** GENRE CLOSER FUNCTIONAL K8, KELAS 8 COMPLETE 24/24 ***. genre Functional B 'Organizing Public Information' (cluster B). SINGLE PREREQ: PAT-8-23. target_pattern PAT-8-24 = 'Title + key information + contact/action + additional note' (STRUKTURAL/FORMAT FLYER -- PERTAMA KALI di seluruh 66 pattern; BUKAN pola kalimat-konektor). extends_to PAT-9-10 (JEMBATAN KE KELAS 9). CEFR B1-. Reaktivasi PAT-8-23 (WAJIB, VR-1): PROSA PROMOSI TP-47 ('Join us.../Don\\'t miss.../You can...because...') DIKONDENSASI menjadi LAYOUT TERSTRUKTUR (separator '|') -- model_1 mendemonstrasi TRANSFORMASI ini secara eksplisit. Karena target_pattern STRUKTURAL, model_sentences = BEBERAPA CONTOH FLYER LENGKAP (bukan variasi kalimat tunggal). model_3 merealisasikan SEMUA vocabulary_domain (books, library, exchange, community). forbidden_overlap (presentation speech, argumentative exposition, narrative summary). SHARE-challenge: present flyer + answer question tentang info di dalamnya (preseden P1/PAT-8-15+). BOOST extension: tambah KATEGORI INFORMASI BARU pada flyer (transport note / cost note) -- bukan mengulang flyer yang sama secara verbatim.",
    session_version: "1.0"
  },

  resources: {

    classroom_setup: [
      // SETTLING
      { type: "UCAP", text: "Good morning. We are wrapping up Kelas 8 with something practical." },
      { type: "AKSI", text: "Berikan orientasi singkat bahwa ini adalah sesi penutup untuk Kelas 8." },
      // HOOK
      { type: "UCAP", text: "Think about school events you know — festivals, book swaps, fairs. How is that information usually organized?" },
      { type: "AKSI", text: "Tampilkan kartu informasi acara terpisah: nama acara, kapan dan di mana, apa yang harus dibawa, catatan untuk semua." },
      { type: "UCAP", text: "Look at these information cards. How would you put them together into one clear announcement?" },
    ],

    active_vocabulary: [
      "books",
      "library",
      "exchange",
      "community"
    ],

    model_sentences: [
      { id: "model_1", text: "After-School Club Festival | This Friday, 3 p.m., School Hall | Sign up at the club table | Try music, art, and sports clubs." },
      { id: "model_2", text: "School Recycling Drive | Saturday, 8 a.m. | Register at Room 5 | Bring reusable bags." },
      { id: "model_3", text: "Community Book Swap | Saturday, 9 a.m., School Library | Bring at least one book to exchange | Open to all students and the local community." },
      { id: "model_4", text: "Reading Week at the School Library | Every day this week, 3 p.m. | Exchange a book and take a new one home | All books welcome from the community." }
    ],

    visual_cues: [
      { id: "visual_1", description: "Event information cards: separate cards showing (1) event name, (2) when and where, (3) what to do or bring, (4) a note for everyone -- ready to be arranged into one flyer.", description_id: "Kartu informasi acara: kartu-kartu terpisah yang menunjukkan (1) nama acara, (2) kapan dan di mana, (3) apa yang harus dilakukan atau dibawa, (4) catatan untuk semua orang -- siap disusun menjadi satu pamflet.", asset_id: null },
      { id: "visual_2", description: "A flyer layout template with four labeled sections separated by '|': Title | Key Information | Contact/Action | Additional Note.", description_id: "Templat tata letak pamflet dengan empat bagian berlabel dipisahkan oleh '|': Title | Key Information | Contact/Action | Additional Note.", asset_id: null },
      { id: "visual_3", description: "The transformation diagram: the Club Festival promotional post from TP-47 ('Join us ... / Don\\'t miss ... / You can ... because ...') condensed into a flyer layout ('After-School Club Festival | This Friday ... | Sign up ... | Try ...').", description_id: "Diagram transformasi: unggahan promosi Club Festival dari TP-47 ('Join us ... / Don't miss ... / You can ... because ...') dipadatkan menjadi tata letak pamflet ('After-School Club Festival | This Friday ... | Sign up ... | Try ...').", asset_id: null }
    ],

    gesture_cues: [
      { id: "gesture_1", description: "Teacher draws four boxes in the air connected by vertical lines while explaining the flyer structure: Title | Key Info | Action | Note.", description_id: "Guru menggambar empat kotak di udara terhubung garis vertikal sambil menjelaskan struktur pamflet: Title | Key Info | Action | Note." },
      { id: "gesture_2", description: "Teacher moves a hand horizontally from left to right while reading each section of a flyer, pausing at each '|' separator.", description_id: "Guru menggerakkan tangan horizontal dari kiri ke kanan sambil membaca setiap bagian pamflet, berhenti sejenak di setiap pemisah '|'." },
      { id: "gesture_3", description: "Teacher holds up four fingers and counts each section while presenting: 'Title -- one. When and where -- two. What to do -- three. Extra note -- four.'", description_id: "Guru mengangkat empat jari dan menghitung setiap bagian sambil mempresentasikan: 'Title -- one. When and where -- two. What to do -- three. Extra note -- four.'" },
      { id: "gesture_4", description: "When reading each model flyer aloud, point to or color-code each of the four parts separately on the board -- Title / Key Info / Action / Note -- so students see FOUR SEPARATE BLOCKS, not one long sentence; this is the biggest representational shift in this TP (from sentence-connector pattern to layout structure).", description_id: "Saat membaca setiap pamflet model dengan suara nyaring, tunjuk atau beri kode warna pada setiap dari empat bagian secara terpisah di papan tulis -- Title / Key Info / Action / Note -- sehingga siswa melihat EMPAT BLOK TERPISAH, bukan satu kalimat panjang; ini adalah perubahan representasional terbesar di TP ini (dari pola penghubung kalimat ke struktur tata letak)." }
    ]
  },

  runtime: [

    {
      id: "model_1",
      type: "MODEL",
      duration: 6,
      objective: "Observe the teacher organize public event information into a four-part flyer layout: Title | Key Information | Contact/Action | Additional Note -- a structural format, not a sentence-connector pattern.",
      board_suggestion: "optional",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      visual_refs: ["visual_1", "visual_2", "visual_3"],
      gesture_refs: ["gesture_1", "gesture_2", "gesture_3", "gesture_4"],
      support: { pattern_support: ["PAT-8-23"] }
    },

    {
      id: "repeat_1",
      type: "REPEAT",
      duration: 5,
      objective: "Practice reading the model flyers aloud as a class, pausing at each '|' separator to recognize the four sections.",
      sentence_refs: ["model_1", "model_2", "model_3", "model_4"],
      repeat_mode: "choral"
    },

    {
      id: "change_1",
      type: "CHANGE",
      duration: 8,
      objective: "Organize event information cards into your own four-part information flyer.",
      prompt: "Use the event information cards to build one flyer: [Title] | [When and where] | [What to do or bring] | [An extra note]. Write about the Community Book Swap and include: books, library, exchange, community. Keep the information short and clear in each section -- not a full paragraph, not a personal invitation, and not a narrative summary.",
      change_target: ["title (event name)", "key information (when and where)", "contact/action (what to do or bring)", "additional note (extra details)"],
      differentiation: {
        easy: { task: "Arrange the given information cards into the four-section template. You may look at the model flyers." },
        standard: { task: "Write your own Community Book Swap flyer with all four sections without reading." },
        challenge: { task: "Write a flyer for the Community Book Swap and a different school event, showing the same four-section format for both." }
      },
      support: { pattern_support: ["PAT-8-23"] }
    },

    {
      id: "interact_1",
      type: "INTERACT",
      duration: 12,
      objective: "Exchange information flyers with a group and check that all four sections are present and clear.",
      interaction_mode: "small_group",
      task: "In a group of 3-4, pass your flyers around the group. For each flyer, check: Is the title clear? Is there when and where? Is there an action to take? Is there an extra note? Give one piece of feedback to the writer.",
      differentiation: {
        easy: { task: "Look at one flyer in your group and point to each of the four sections." },
        standard: { task: "Check all flyers in the group and say which section is most clear in each one." },
        challenge: { task: "Check all flyers and tell each writer: 'Your clearest section is ___ because ___. You could improve ___ by ___.' " }
      },
      support: { pattern_support: ["PAT-8-23"] }
    },

    {
      id: "share_1",
      type: "SHARE",
      duration: 8,
      objective: "Present your information board to a new group (information board).",
      share_mode: "mini_presentation",
      task: "Form a new group of 4 with classmates from other groups. Take turns presenting your flyer by reading each section aloud: 'The event is ___ . It is on ___ at ___. You need to ___. Also, ___.'",
      differentiation: {
        easy: { task: "Read your flyer section by section to the new group." },
        standard: { task: "Present your flyer without reading and the group checks for all four sections." },
        challenge: { task: "Present your flyer, then answer one question from the group about the key details (e.g. 'What do we need to bring?' or 'Where exactly is this?')." }
      }
    },

    {
      id: "check_1",
      type: "CHECK",
      duration: 4,
      observe: [
        "students organize event information into a four-section flyer: Title | Key Information | Contact/Action | Additional Note",
        "students keep each section short and specific -- not a paragraph, not a personal story, not a promotional post",
        "students write only one or two sections (e.g. only title and date) or merge all information into one paragraph"
      ],
      teacher_next_action: {
        ready: "Move to BOOST: invite a ready student to add a new category of information to their flyer.",
        needs_model: "Repeat the MODEL step, showing the four-section structure side by side with the information cards to make the mapping visible.",
        needs_repeat: "Do one more round of REPEAT (choral) on the model flyers, pausing at each '|' to reinforce the four sections."
      }
    },

    {
      id: "boost_1",
      type: "BOOST",
      duration: 5,
      trigger: [
        "writes information in one paragraph without the four-section structure, or fills only two sections",
        "organizes all four sections but cannot present the flyer clearly without reading",
        "organizes all four sections of the flyer accurately and confidently"
      ],
      action: [
        "recast the flyer slowly, pointing to each '|' separator and naming each section aloud: 'Title here -- separator -- when and where -- separator -- what to bring -- separator -- extra note'",
        "model one more flyer for a different school event (e.g. a school art exhibition) to show the same four-section format still works with different content",
        "for a student who is ready, model ONE flyer with an added fifth section for a transport or cost note first -- 'Community Book Swap | Saturday, 9 a.m., School Library | Bring at least one book to exchange | Open to all | Free entry, no transport needed.' -- then invite that student to add one new information category to their own flyer; this is an optional individual extension that always starts with the teacher's example, not a whole-class activity, and it expands the flyer with a new category rather than rewriting existing sections"
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
