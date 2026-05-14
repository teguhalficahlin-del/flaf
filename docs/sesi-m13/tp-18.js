/**
 * =============================================================
 * FLAF — TP 18 (Integrative Project — My World)
 * File: docs/sesi-m13/tp-18.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Sesi M13 — Mei 2026
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[17] (v3)
 *
 * KARAKTER KHAS TP 18:
 *   - Tipe CAPSTONE — penutup Fase A, integrative project + culminating assessment.
 *   - Desain: mandatory presentation (semua siswa) + guru support untuk pemalu
 *     (bukan forced, tapi encouraged dengan bantuan konkret).
 *   - Media: template poster standardized (in-class creation, 10 menit).
 *   - Assessment: portfolio-based — presentasi adalah satu-satunya bukti belajar
 *     (tidak ada tes tambahan).
 *   - Tone: CELEBRATORY — ini hari terakhir Fase A, "You finished Phase A!"
 *   - Closure: Refleksi + applause + goodbye (emotional closure untuk phase).
 *
 * SCOPE DESIGN:
 *   - Poster content: nama → keluarga → rumah → hobi (recycle dari TP 01–17)
 *   - Speaking target: 2–5 kalimat integration dari TP 01–17
 *   - Assessment: Listening (merespons Q&A), Speaking (presentasi clarity),
 *     Reading (baca poster sendiri)
 *
 * PENERAPAN PATTERN INKLUSIVITAS (CONTEXT.md):
 *   - Pattern 1: Scripted calm tone — guru set expectation aman ("tidak ada salah").
 *   - Pattern 2: Mandatory BUT supported — semua siswa harus present, tapi guru
 *     assist pemalu (no forced shame, supportive environment).
 *   - Pattern 5: Fallback sensitif — guru boleh start kalimat, adjust vocabulary,
 *     give time if nervous.
 *   - CELEBRATION: Final emotional closure untuk Fase A — semua berdiri, applause,
 *     reflect, goodbye ritual.
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - docs/sesi-m12/tp-17.js (format reference — last TP)
 *   - CONTEXT.md §Pattern Inklusivitas
 */

const TP_18 = {

  id       : 'tp-18',
  nomor    : 18,
  kelas    : 2,
  nama     : 'Integrative Project — My World',
  tema     : 'Proyek Integratif',
  deskripsi: `TP penutup Fase A. Peserta didik mengintegrasikan seluruh kemampuan
    dari TP 01–17 dalam proyek "My World" yang mencakup presentasi personal
    dengan dukungan guru penuh. Format: in-class poster creation + mandatory
    presentation (guru assist untuk pemalu) + celebration + portfolio assessment.`,

  indikator: [
    'Peserta didik dapat membuat poster sederhana yang menampilkan informasi diri (nama, usia), keluarga, rumah, dan hobi menggunakan kalimat-kalimat dari TP 1–17.',
    'Peserta didik dapat mempresentasikan "My World" dalam 2–5 kalimat dengan lafal yang jelas dan dengan dukungan guru jika diperlukan.',
    'Peserta didik dapat merespons pertanyaan sederhana dari guru tentang isi presentasi mereka, serta mendengarkan dan mengapresiasi presentasi teman-teman.',
  ],

  vocab: ['my world', 'this is me', 'my family', 'my house', 'I like', 'every day', 'my hobby', 'present', 'poster', 'project'],

  persiapan: ['Template poster standardized (A4 folded atau kartu pre-printed)', 'Spidol/pensil warna untuk decoration'],

  media: [
    {
      id                 : 'media-poster-template',
      nama               : 'Template Poster "My World" (Standardized)',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'tp-18-template-v1.pdf',
      pdf_halaman        : 1,
      reusable_lintas_tp : false,
      keterangan         : 'Template poster A4 folded (atau kartu A5) dengan sections: "My name", "My family", "My house", "My hobby" + space untuk drawing. Pre-printed untuk semua siswa (standardized, fair).',
    },
    {
      id                 : 'media-reference-sentences',
      nama               : 'Reference Sentences — Presentation Support',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'tp-18-support-v1.pdf',
      pdf_halaman        : 2,
      reusable_lintas_tp : false,
      keterangan         : 'Kartu support: "Hello! My name is ___. I am ___ years old. I have a ___ family. I live in a house. I like ___ because it is ___." (untuk guru assist jika siswa lupa).',
    },
  ],

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp18-pembuka-meaningful',
          tipe  : 'meaningful_link',
          judul : 'Set Calm Tone — Fase A Celebration Begins',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa understand: hari ini special (last day Fase A), presentasi adalah celebrate, bukan test. Guru set expectation aman.',
          vocab_target      : [],

          durasi_target_detik : 300,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Hello everyone! Today is a very special day. This is the LAST day of Phase A English!"',
            selama  : `Guru ceritakan dengan calm, warm tone:
"Today, you will share your 'My World' project with the class.
Your project shows everything you learned in Phase A.
Your name, your family, your house, your hobbies.

I want to say something important:
There is NO wrong answer today.
There is NO test today.
Today is CELEBRATION.
You learned SO MUCH. You spoke English. You listened. You made friends.
That is AMAZING.

When you present, you might be nervous. That is OK.
Your heart might beat fast. That is OK.
You might forget a word. That is OK.
I will help you. You can start, and I will help you finish.

Everyone will clap for you. Because you tried. Because you were brave.

So today, we celebrate YOU. All of you. Together.
Are you ready?"

[pause, wait for nod/response]`,
            penutup : '"Let us begin! First, we make your poster. Then, we celebrate!"',
          },

          audio_cue: {
            contoh_guru  : 'This is the LAST day of Phase A! Today is celebration. You will share your My World project. There is no test, no wrong answer. You will all be AMAZING!',
            contoh_siswa : '',
            target_vocab : [],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Guru cerita lebih pendek, dengan more gesture & visual support (smile, thumbs up, open arms).',
              panjang_speaking: 'Tidak perlu speaking di tahap ini. Listen & feel calm saja.',
            },
            normal: {
              bantuan: 'Guru cerita full script dengan warm tone, eye contact semua siswa.',
              panjang_speaking: 'Optional nod/say "yes" atau smile. Engagement via presence, bukan verbal.',
            },
            tantangan: {
              bantuan: 'Guru bisa invite reflection: "How are you feeling today?" — siswa bisa verbalize.',
              panjang_speaking: 'Share feeling atau enthusiasm ("I am excited!" / "I am a little nervous but OK").',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_terlihat_nervous : 'Guru dekati, eye contact gentle, hand on shoulder (if appropriate). "You will do great. I will help you."',
            kelas_energy_down : 'Tambah clap/cheer ke diri sendiri dulu ("Let us clap for ourselves for learning so much!"). Energy boost.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp18-pembuka-show-template',
          tipe  : 'modeling',
          judul : 'Show Poster Template + Example',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa understand struktur poster & what to fill in (konkret, visual).',
          vocab_target      : [],

          durasi_target_detik : 180,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Look at this! This is the template for your My World poster!"',
            selama  : `Guru tunjuk/display template poster:
[Section 1: "My Name"] → Guru point: "You write your name here"
[Section 2: "My Family"] → "You write about your family"
[Section 3: "My House"] → "You write about your house"
[Section 4: "My Hobby"] → "You write about your hobby"

Guru model contoh ringkas (5 kalimat):
"Hello! My name is [teacher name]. I am [age] years old.
I have a big family. We live in a house.
I like reading because it is fun!"

Guru: "See? Simple. You know all these words from Phases A lessons!
Your poster is YOUR story. YOUR world.
Draw pictures. Write sentences. Make it beautiful or simple — it does not matter.
What matters is YOU share YOUR world. That is what makes it special."`,
            penutup : '"Now, let us make YOUR poster! You have 10 minutes with my help!"',
          },

          audio_cue: {
            contoh_guru  : 'This is the template. My name — my family — my house — my hobby. Hello! My name is... I am... I have a... I like...',
            contoh_siswa : '',
            target_vocab : [],
          },

          media_dipakai : ['media-poster-template'],

          mode: {
            mudah: {
              bantuan: 'Guru point tiap section + explain simple ("nama di sini, keluarga di sini"). Draw contoh atau show picture.',
              panjang_speaking: 'Dengarkan & look at template. No speaking required.',
            },
            normal: {
              bantuan: 'Guru show template & model example. Siswa understand struktur via visual + example.',
              panjang_speaking: 'Optional ask "Do you understand?" — siswa nod or say "yes".',
            },
            tantangan: {
              bantuan: 'Guru tanya: "What will you write about your family?" — invite preview.',
              panjang_speaking: 'Share idea tentang apa yang mau ditulis di poster.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_confused : 'Guru show example poster lebih konkret atau demonstrate live dengan spidol. Visual > verbal explanation.',
            waktu_mepet : 'Cukup tunjuk template & bilang "You have 10 minutes to fill this" — direct, jelas.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Set calm tone: "Today is special — last day of Phase A! This is celebration, not a test. You will all be amazing. I will help you."' },
        { tipe: 'audio',     teks: 'This is the LAST day of Phase A! There is no test, no wrong answer. You will share your My World project. You are amazing!' },
        { tipe: 'instruksi', teks: 'Tunjuk poster template: "My name — my family — my house — my hobby." Model contoh ringkas (5 kalimat guru bicara sendiri).' },
        { tipe: 'audio',     teks: 'Hello! My name is... I am... years old. I have a... family. I live in a house. I like... because it is fun!' },
      ],
    },

    {
      fase  : 'Inti',
      durasi: 45,

      aktivitas: [
        {
          id    : 'tp18-inti-creation',
          tipe  : 'meaningful_link',
          judul : 'In-Class Poster Creation (10 minutes)',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa create poster sederhana di kelas dengan guru assist (standardized template, fair untuk semua).',
          vocab_target      : [],

          durasi_target_detik : 300,
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : '"Now, let us make your poster! You have 10 minutes. I will walk around and help!"',
            selama  : `FASE 1 — DISTRIBUTE & START (1 menit):
Guru bagi template poster + spidol warna ke semua siswa.
"Write your name in Section 1. Go!"

FASE 2 — SISWA CREATE, GURU ASSIST (9 menit):
Siswa isi poster (nama → keluarga → rumah → hobi).
Guru walk around:
- Siswa yang cepat: "Draw pictures! Make it beautiful!"
- Siswa yang stuck: "What is your family? Tell me. I help you write."
- Siswa yang nervous: "You are doing great. Take your time."
- Siswa yang blank: "Think of your hobby. You like playing? drawing? singing? Let us write it."

PENTING:
- Spelling bukan priority — focus pada confidence & expression
- Drawing + writing BOTH OK — mixed media oke
- Guru facilitate, bukan judge
- Semua siswa selesai sebelum presentation (guru bantu yang belum selesai)`,
            penutup : '"Time! Your posters are beautiful! Now, we present!"',
          },

          audio_cue: {
            contoh_guru  : 'Write your name! What is your family? Tell me. I help you write. You are doing great!',
            contoh_siswa : 'My name is... / I have a... family / I like...',
            target_vocab : [],
          },

          media_dipakai : ['media-poster-template'],

          mode: {
            mudah: {
              bantuan: 'Guru assist step-by-step: "Write name first. Then family. What is your family? I write for you." Tidak perlu siswa tulis sendiri — guru scribe OK.',
              panjang_speaking: 'Siswa bicara (tell guru), guru write. Fokus pada expressing idea, bukan writing mechanics.',
            },
            normal: {
              bantuan: 'Guru assist per section: "What is your hobby? How do you say it in English?" Siswa write dengan minimal prompt.',
              panjang_speaking: 'Siswa write & draw sendiri. Guru assist vocabulary atau spelling jika perlu.',
            },
            tantangan: {
              bantuan: 'Siswa create poster sendiri (guru available untuk Q&A). Bisa add decoration atau extra sentences.',
              panjang_speaking: 'Write sentences full sendiri atau add elaboration (panjang speaking tidak required di fase ini).',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_belum_selesai_saat_waktu_habis : 'OK. Lanjut presentation dengan poster yang ada. Guru bisa complete during presentation jika perlu.',
            siswa_panik_tidak_tahu_tulis : 'Guru scribe — siswa bicara, guru tulis. "Tell me your name. I write." Confidence > mechanics.',
            energi_turun : 'Play soft music atau encourage peer help ("Ask your friend for idea"). Keep mood light.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp18-inti-presentation',
          tipe  : 'pair_work',
          judul : 'Mandatory Presentation — Semua Siswa Present (Dengan Guru Support)',
          pm    : 'joyful',

          tujuan_komunikasi : 'Setiap siswa present "My World" (2–5 kalimat) dengan guru assist jika diperlukan. Celebrate each student.',
          vocab_target      : [],

          durasi_target_detik : 1200,
          durasi_min_detik    : 900,

          micro_script: {
            pembuka : '"Now, EVERYONE will present their My World! Who wants to go first?"',
            selama  : `FASE 1 — GURU MODEL (1 menit):
Guru present sendiri dulu (role model):
"Hello! My name is [teacher]. I am [age]. I have a big family.
We live in a house. I like reading because it is fun!"

FASE 2 — PRESENT CYCLE (banyak menit):
Guru: "Who wants to go first? Or I will call on you." [tunggu volunteer atau randomly select]

Siswa maju (berdiri di depan atau dari tempat duduk — fleksibel):
Siswa present poster + read/speak 2–5 kalimat.

Jika siswa berhenti/gugup:
Guru NOT repeat. Guru ENCOURAGE: "You are doing great! What is next?" [gesture ke poster]
Guru juga HELP: "Your family... tell us about them?"
Guru support sentence starter jika perlu (dari media-reference-sentences).

Setelah selesai:
Guru: "Thank you! Class, clap your hands!" [semua tepuk]
Guru ALSO: "You were so brave! That was wonderful!"

FASE 3 — ROTATION:
Lanjut siswa berikutnya. Guru panggil sambil assist yang gugup.
TARGET: Semua siswa dapat giliran (ada 20-30 siswa, ~2-3 menit per siswa).

KEY:
- Zero judgment. Zero counting for grade per se.
- Focus pada courage & attempt, bukan perfection.
- Guru ACTIVELY assist pemalu (start sentence, give vocab, give time).
- Applause AFTER setiap siswa (ritual respect).`,
            penutup : '"Everyone presented! You are ALL amazing!"',
          },

          audio_cue: {
            contoh_guru  : 'Hello! My name is... I have a... family. I like... because it is fun! / You are doing great! Tell us about your family.',
            contoh_siswa : 'Hello! My name is... / I have a... family / I live in a house / I like...',
            target_vocab : [],
          },

          media_dipakai : ['media-poster-template', 'media-reference-sentences'],

          mode: {
            mudah: {
              bantuan: 'Guru assist heavily — start kalimat, give vocabulary, give time jika nervous. Bisa read dari poster atau guru help read. Clap meriah setelah selesai (positive reinforcement).',
              panjang_speaking: '2 kalimat atau fragment OK (nama + hobi). Guru assist finish kalimat. No pressure untuk panjang.',
            },
            normal: {
              bantuan: 'Guru assist minimal — give prompt atau tanya "What is next?" jika stuck. Siswa present 3-4 kalimat dengan guide.',
              panjang_speaking: 'Ucapkan 3-4 kalimat dengan struktur dari template (mungkin lihat poster atau card reference).',
            },
            tantangan: {
              bantuan: 'Siswa present 4-5 kalimat spontan (minimal prompt). Guru tanya follow-up Q&A jika ada waktu.',
              panjang_speaking: 'Kalimat panjang spontan atau answer follow-up question: "Why do you like drawing?" → "Because it is fun!"',
            },
          },

          observation: { aktif: true, n_siswa: null, indikator: ['confidence', 'response', 'participation'], rotasi_priority: 'all_students', tag_set: 'standar' },

          fallback: {
            siswa_sangat_nervous : 'Guru jadi front person: "This is Budi. Budi likes drawing. Budi has a big family." Siswa bisa cukup nod/point. Still counts sebagai participation.',
            siswa_blank : 'Guru ask simple Q&A: "What is your name?" → "What do you like?" → Siswa answer. Guru announce: "He likes swimming!" — count sebagai presented.',
            waktu_tidak_cukup_semua : 'OK. Present sebanyak bisa. Siswa yang belum, guru bilang: "You will present at break time or next day. You will get your turn. I promise." No siswa ditinggal.',
            kelas_mulai_bosan : 'Accelerate pace: "Quick presentations! 1 kalimat OK today!" atau take short break sebelum lanjut.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'In-class creation (10 menit): Bagi template poster. Siswa isi 4 sections (nama/keluarga/rumah/hobi). Guru walk around assist. Semua selesai sebelum presentation.' },
        { tipe: 'audio',     teks: 'Write your name! What is your family? Tell me. I help you write. You are doing great!' },
        { tipe: 'instruksi', teks: 'Guru model presentation dulu. Kemudian setiap siswa present My World poster (2–5 kalimat). Guru assist jika perlu. Kelas tepuk setelah setiap siswa.' },
        { tipe: 'audio',     teks: 'Hello! My name is... I have a... family. I like... because... / Thank you! Class, clap your hands!' },
      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp18-penutup-celebration',
          tipe  : 'reflection',
          judul : 'Celebration & Reflection — Phase A Complete',
          pm    : 'joyful',

          tujuan_komunikasi : 'Emotional closure untuk Fase A. Siswa celebrate achievement & reflect learning journey.',
          vocab_target      : [],

          durasi_target_detik : 300,
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : '"Everyone, stand up! This is a special moment!"',
            selama  : `Guru lead celebration (FULL ENERGY):
"You all presented your worlds!
You were BRAVE. You were PROUD.
And you learned SO MUCH in Phase A!

From Greetings to Hobbies — you learned EVERYTHING!
You can say your name. You can talk about your family.
You can describe your house. You can tell your hobbies.
You can understand instructions. You can tell stories.
You can share feelings. You can present projects.

THAT IS AMAZING!

Now, let me ask you one question:
What is ONE thing you will REMEMBER about English class in Phase A?
Just think in your heart. You do NOT have to say out loud.

Maybe you remember a song? A game? A friend?
Maybe you remember learning 'happy' or 'cat' or 'swimming'?
Maybe you remember how your teacher said 'wonderful'?
Keep that memory in your heart. That is your treasure from Phase A.

Now, everybody — let us CLAP for OURSELVES!"

[Lead clap — semua siswa clap untuk diri sendiri]

Guru: "You did it! You FINISHED Phase A English!
Congratulations! You are amazing! I am so proud of you!"

[More claps, cheers, celebration energy]

CLOSURE RITUAL:
Guru: "Before we finish, let us say goodbye to Phase A together.
Repeat after me:
Thank you, Phase A!
I learned, I tried, I was brave!
I will keep speaking English!
Goodbye, Phase A!
See you, Phase B!
Let us clap one more time!"`,
            penutup : '"You are future English speakers! I believe in you!"',
          },

          audio_cue: {
            contoh_guru  : 'You were so BRAVE! You finished Phase A! Congratulations! I am SO PROUD OF YOU! / Thank you Phase A! I learned, I tried, I was brave! / Goodbye, Phase A! See you, Phase B!',
            contoh_siswa : '(reflection quiet) / (clapping + cheering) / (repeat ritual phrases if invited)',
            target_vocab : [],
          },

          media_dipakai : [],
          mode         : null,
          observation  : { aktif: false },

          fallback: {
            siswa_tired : 'Keep celebration short. Skip reflection if perlu. Focus pada applause ritual — that is the important part.',
            emotional_overflow : 'Normal (some kids cry happy). Guru normalize: "It is OK to feel happy. You did great. I am proud of you." Hug OK if appropriate.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp18-penutup-closure',
          tipe  : 'closure_reinforcement',
          judul : 'Goodbye Ritual — Phase A Ends, Next Adventure Begins',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Final emotional & cognitive closure. Jembatan ke future (Phase B atau next year).',
          vocab_target      : [],

          durasi_target_detik : 180,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Now, let us say goodbye to Phase A properly!"',
            selama  : `Guru dengan calm, warm tone:
"You all started Phase A as beginners.
Today, you FINISH Phase A as English speakers.

In Phase A, you learned:
- How to greet & say goodbye
- How to introduce yourself
- How to talk about colors, numbers, animals, food
- How to describe house, family, hobbies
- How to tell your feelings & dreams
- How to listen, speak, read, write in English

You learned from each other. You helped friends.
You were kind. You were brave.
That is what learning is about.

Now, Phase A ends. But your English DOES NOT END.
You will keep speaking English.
At home, in the playground, with friends — keep practicing!

And next, Phase B will come. More adventures in English!
New words, new stories, new friends.
But remember Phase A. Remember your courage.
Because THAT is who you are — English learners! Brave learners!

Thank you for learning with me. Thank you for being amazing.
I will never forget your faces, your voices, your hearts.

Goodbye, Phase A! Thank you!
Hello, Phase B!
Keep speaking English!
Goodbye, everyone! I love you all!"`,
            penutup : '"See you next time! Bye!"',
          },

          audio_cue: {
            contoh_guru  : 'You learned SO MUCH in Phase A! From greetings to hobbies! You are English speakers now! / Keep speaking English! Phase B comes next! Goodbye, Phase A! Thank you! / I love you all! Goodbye!',
            contoh_siswa : 'Goodbye, teacher! Thank you! / We will keep speaking English!',
            target_vocab : ['goodbye', 'thank you'],
          },

          media_dipakai : [],
          mode         : null,
          observation  : { aktif: false },
          fallback     : {},
          advance      : { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Semua siswa berdiri. Guru lead celebration: "You were brave! You finished Phase A! Congratulations!" Semua clap untuk diri sendiri. Guru: "I am so proud of you!"' },
        { tipe: 'audio',     teks: 'You were SO BRAVE! You finished Phase A! Congratulations! I am SO PROUD OF YOU!' },
        { tipe: 'instruksi', teks: 'Reflection ritual: Guru tanya "1 hal yang paling ingat dari Phase A?" (silent reflection — no hand up). Guru lead closure: "Thank you, Phase A! I learned, I tried, I was brave!"' },
        { tipe: 'audio',     teks: 'Thank you, Phase A! / I learned, I tried, I was brave! / Goodbye, Phase A! / See you, Phase B! / Keep speaking English!' },
      ],
    },

    {
      fase  : 'Penilaian',
      durasi: 6,

      aktivitas: [
        {
          id    : 'tp18-penilaian-portfolio',
          tipe  : 'observation_validation',
          judul : 'Portfolio Assessment — Presentation as Evidence',
          pm    : null,

          tujuan_komunikasi : 'Assess berdasarkan presentation yang telah terjadi. Portfolio-based: presentasi = bukti belajar tunggal.',
          vocab_target      : [],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Assessment terjadi DURING presentation (embedded assessment), bukan terpisah.',
            selama  : `Guru OBSERVE sambil siswa present:

1. SPEAKING CLARITY:
   - Can siswa say nama + usia dengan jelas?
   - Can siswa describe family, house, hobby dengan benar (tata bahasa basic)?
   - Pronunciation clear enough untuk dipahami?

2. INTEGRATION DARI TP 01–17:
   - Ada evidence dari TP 01 (greetings)?
   - Ada evidence dari TP 02 (introduce self)?
   - Ada evidence dari TP 10 (food), TP 11 (routines), TP 15 (feelings), TP 17 (hobbies)?

3. CONFIDENCE & PARTICIPATION:
   - Siswa attempt despite nervousness?
   - Siswa complete presentation (dengan/tanpa guru help)?
   - Siswa respond to feedback (Q&A dari guru)?

RUBRIK SIMPLE:
- Emerging (1): Guru assist heavily, 1-2 kalimat, incomplete
- Developing (2): Some guru assist, 3-4 kalimat, mostly clear
- Proficient (3): Minimal guru assist, 4-5 kalimat, clear & complete
- Advanced (4): No guru assist, 5+ kalimat, fluent & elaborate

NOTE: Grade bukan punitive — fokus pada growth & effort, bukan perfection.
Semua siswa yang present = passing (mereka sudah brave enough).`,
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'What is your name? / How many people in your family? / Why do you like drawing?',
            contoh_siswa : 'My name is... / I have a... family / Because it is fun!',
            target_vocab : [],
          },

          media_dipakai : [],
          mode         : null,

          observation: {
            aktif           : true,
            n_siswa         : null,
            indikator       : ['participation', 'confidence', 'vocab_use'],
            rotasi_priority : 'all_students',
            tag_set         : 'standar',
          },

          fallback: {
            siswa_yang_gugup : 'Give credit untuk attempt. Guru assist = still counts. Courage > perfection.',
            tidak_semua_sempat_present : 'Present sebanyak bisa di kelas. Siswa yang belum, guru note untuk makeup presentation (bisa 1-on-1 atau next day).',
            kesulitan_menilai : 'Focus pada 3 kriteria simple: could speak (yes/no), could integrate past lessons (yes/no), tried their best (yes/no). Bukan overthinking.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Assessment embedded dalam presentation (bukan tes terpisah). Guru observe: speaking clarity, integration TP 01–17, confidence & participation. Rubrik simple: Emerging/Developing/Proficient/Advanced.' },
        { tipe: 'instruksi', teks: 'Nilai berdasarkan presentasi yang sudah berlangsung. Semua siswa yang present = passing. Fokus pada growth & effort, bukan perfection.' },
        { tipe: 'instruksi', teks: 'Catatan akhir Fase A: tulis satu frasa positif per siswa (character strength, learning achievement, growth). Gunakan untuk report/feedback ke parents.' },
      ],
    },

  ],

};

export default TP_18;
