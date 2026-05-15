/**
 * =============================================================
 * FLAF — TP 18 (Integrative Project — My World)
 * File: docs/sesi-m13/tp-18.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: UPDATED — langkah[] ditambah field mode (Fase 9)
 *
 * KARAKTER KHAS TP 18:
 *   - Tipe CAPSTONE — penutup Fase A, integrative project + culminating assessment.
 *   - Desain: mandatory presentation (semua siswa) + guru support untuk pemalu.
 *   - Media: template poster standardized (in-class creation, 10 menit).
 *   - Assessment: portfolio-based — presentasi adalah satu-satunya bukti belajar.
 *   - Tone: CELEBRATORY — ini hari terakhir Fase A.
 *   - Closure: Refleksi + applause + goodbye (emotional closure untuk phase).
 *
 * SCOPE DESIGN:
 *   - Poster content: nama → keluarga → rumah → hobi (recycle dari TP 01–17)
 *   - Speaking target: 2–5 kalimat integration dari TP 01–17
 *   - Assessment: Listening, Speaking, Reading (baca poster sendiri)
 *
 * PENERAPAN PATTERN INKLUSIVITAS (CONTEXT.md):
 *   - Pattern 1: Scripted calm tone — guru set expectation aman.
 *   - Pattern 2: Mandatory BUT supported — semua siswa present, guru assist pemalu.
 *   - Pattern 5: Fallback sensitif — guru boleh start kalimat, adjust vocabulary.
 *   - CELEBRATION: Final emotional closure untuk Fase A.
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - docs/sesi-m12/tp-17.js (format reference)
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
There is NO wrong answer today. There is NO test today.
Today is CELEBRATION.

When you present, you might be nervous. That is OK.
You might forget a word. That is OK.
I will help you.

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
            siswa_terlihat_nervous : 'Guru dekati, eye contact gentle. "You will do great. I will help you."',
            kelas_energy_down : 'Tambah clap/cheer ke diri sendiri dulu. Energy boost.',
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

Guru: "See? Simple. You know all these words from Phase A lessons!
Your poster is YOUR story. YOUR world."`,
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
        {
          tipe: 'instruksi',
          teks: 'Set calm tone: "Today is special — last day of Phase A! This is celebration, not a test. You will all be amazing. I will help you."',
          mode: {
            mudah:     { bantuan: 'Guru cerita lebih pendek, dengan more gesture & visual support (smile, thumbs up, open arms).' },
            normal:    { bantuan: 'Guru cerita full script dengan warm tone, eye contact semua siswa.' },
            tantangan: { bantuan: 'Guru bisa invite reflection: "How are you feeling today?" — siswa bisa verbalize.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'This is the LAST day of Phase A! There is no test, no wrong answer. You will share your My World project. You are amazing!',
          mode: {
            mudah:     { bantuan: 'Ucapkan hangat dan pelan. Siswa cukup dengarkan dan rasakan pesan positif.' },
            normal:    { bantuan: 'Ucapkan dengan enthusiasm natural.' },
            tantangan: { bantuan: 'Ucapkan + tanya "How are you feeling right now?" — siswa respond.' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Tunjuk poster template: "My name — my family — my house — my hobby." Model contoh ringkas (5 kalimat guru bicara sendiri).',
          mode: {
            mudah:     { bantuan: 'Guru point tiap section + explain simple ("nama di sini, keluarga di sini"). Draw contoh atau show picture.' },
            normal:    { bantuan: 'Guru show template & model example. Siswa understand struktur via visual + example.' },
            tantangan: { bantuan: 'Guru tanya: "What will you write about your family?" — invite preview.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Hello! My name is... I am... years old. I have a... family. I live in a house. I like... because it is fun!',
          mode: {
            mudah:     { bantuan: 'Ucapkan perlahan per kalimat, tunjuk section poster.' },
            normal:    { bantuan: 'Ucapkan natural sebagai model.' },
            tantangan: { bantuan: 'Siswa bisa try preview kalimat mereka sendiri.' },
          },
        },
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
- Siswa yang blank: "Think of your hobby. You like playing? drawing? Let us write it."

PENTING:
- Spelling bukan priority
- Drawing + writing BOTH OK
- Guru facilitate, bukan judge`,
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
              panjang_speaking: 'Write sentences full sendiri atau add elaboration.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_belum_selesai_saat_waktu_habis : 'OK. Lanjut presentation dengan poster yang ada. Guru bisa complete during presentation jika perlu.',
            siswa_panik_tidak_tahu_tulis : 'Guru scribe — siswa bicara, guru tulis. "Tell me your name. I write." Confidence > mechanics.',
            energi_turun : 'Play soft music atau encourage peer help. Keep mood light.',
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

FASE 2 — PRESENT CYCLE:
Guru: "Who wants to go first? Or I will call on you."
Siswa maju (berdiri di depan atau dari tempat duduk — fleksibel).
Siswa present poster + read/speak 2–5 kalimat.

Jika siswa gugup:
Guru ENCOURAGE: "You are doing great! What is next?" [gesture ke poster]
Guru support sentence starter jika perlu.

Setelah selesai:
Guru: "Thank you! Class, clap your hands!"

FASE 3 — ROTATION:
Lanjut siswa berikutnya. TARGET: Semua siswa dapat giliran.

KEY:
- Zero judgment. Focus pada courage & attempt, bukan perfection.
- Guru ACTIVELY assist pemalu.
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
              panjang_speaking: 'Ucapkan 3-4 kalimat dengan struktur dari template.',
            },
            tantangan: {
              bantuan: 'Siswa present 4-5 kalimat spontan (minimal prompt). Guru tanya follow-up Q&A jika ada waktu.',
              panjang_speaking: 'Kalimat panjang spontan atau answer follow-up question: "Why do you like drawing?" → "Because it is fun!"',
            },
          },

          observation: { aktif: true, n_siswa: null, indikator: ['confidence', 'response', 'participation'], rotasi_priority: 'all_students', tag_set: 'standar' },

          fallback: {
            siswa_sangat_nervous : 'Guru jadi front person: "This is Budi. Budi likes drawing." Siswa bisa cukup nod/point. Still counts sebagai participation.',
            siswa_blank : 'Guru ask simple Q&A: "What is your name?" → "What do you like?" Guru announce hasil — count sebagai presented.',
            waktu_tidak_cukup_semua : 'OK. Siswa yang belum, guru bilang: "You will present at break time or next day. I promise." No siswa ditinggal.',
            kelas_mulai_bosan : 'Accelerate pace: "Quick presentations! 1 kalimat OK today!"',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        {
          tipe: 'instruksi',
          teks: 'In-class creation (10 menit): Bagi template poster. Siswa isi 4 sections (nama/keluarga/rumah/hobi). Guru walk around assist. Semua selesai sebelum presentation.',
          mode: {
            mudah:     { bantuan: 'Guru assist step-by-step: "Write name first. Then family. What is your family? I write for you." Tidak perlu siswa tulis sendiri — guru scribe OK.' },
            normal:    { bantuan: 'Guru assist per section: "What is your hobby? How do you say it in English?" Siswa write dengan minimal prompt.' },
            tantangan: { bantuan: 'Siswa create poster sendiri (guru available untuk Q&A). Bisa add decoration atau extra sentences.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Write your name! What is your family? Tell me. I help you write. You are doing great!',
          mode: {
            mudah:     { bantuan: 'Ucapkan sambil bantu siswa satu per satu. Guru scribe jika perlu.' },
            normal:    { bantuan: 'Walk around, encourage. Ucapkan ke kelas secara umum.' },
            tantangan: { bantuan: 'Ucapkan ke siswa yang perlu motivasi saja. Biarkan yang lain mandiri.' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Guru model presentation dulu. Kemudian setiap siswa present My World poster (2–5 kalimat). Guru assist jika perlu. Kelas tepuk setelah setiap siswa.',
          mode: {
            mudah:     { bantuan: 'Guru assist heavily — start kalimat, give vocabulary, give time jika nervous. Bisa read dari poster atau guru help read. Clap meriah setelah selesai.' },
            normal:    { bantuan: 'Guru assist minimal — give prompt atau tanya "What is next?" jika stuck. Siswa present 3-4 kalimat dengan guide.' },
            tantangan: { bantuan: 'Siswa present 4-5 kalimat spontan (minimal prompt). Guru tanya follow-up Q&A jika ada waktu.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Hello! My name is... I have a... family. I like... because... / Thank you! Class, clap your hands!',
          mode: {
            mudah:     { bantuan: 'Guru bisa ucapkan kalimat, siswa repeat/nod. Clap meriah setelah setiap siswa.' },
            normal:    { bantuan: 'Ucapkan setelah setiap siswa selesai sebagai encouragement.' },
            tantangan: { bantuan: 'Siswa ucapkan sendiri. Guru ucapkan sebagai affirmation.' },
          },
        },
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
THAT IS AMAZING!

Now, let me ask you one question:
What is ONE thing you will REMEMBER about English class in Phase A?
Just think in your heart. You do NOT have to say out loud.

Now, everybody — let us CLAP for OURSELVES!"
[Lead clap]

Guru: "You did it! You FINISHED Phase A English!
Congratulations! You are amazing! I am so proud of you!"

CLOSURE RITUAL:
"Repeat after me:
Thank you, Phase A!
I learned, I tried, I was brave!
Goodbye, Phase A! See you, Phase B!"`,
            penutup : '"You are future English speakers! I believe in you!"',
          },

          audio_cue: {
            contoh_guru  : 'You were so BRAVE! You finished Phase A! Congratulations! / Thank you Phase A! I learned, I tried, I was brave! / Goodbye, Phase A! See you, Phase B!',
            contoh_siswa : '(reflection quiet) / (clapping + cheering) / (repeat ritual phrases)',
            target_vocab : [],
          },

          media_dipakai : [],
          mode         : null,
          observation  : { aktif: false },

          fallback: {
            siswa_tired : 'Keep celebration short. Skip reflection if perlu. Focus pada applause ritual.',
            emotional_overflow : 'Normal (some kids cry happy). Guru normalize: "It is OK to feel happy. You did great." Hug OK if appropriate.',
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

In Phase A, you learned greetings, self introduction, colors, numbers, animals, food,
house, family, hobbies, feelings — EVERYTHING!

Now, Phase A ends. But your English DOES NOT END.
You will keep speaking English.
And next, Phase B will come. More adventures!

Thank you for learning with me. Thank you for being amazing.
Goodbye, Phase A! Thank you!
Hello, Phase B!
Keep speaking English!
Goodbye, everyone! I love you all!"`,
            penutup : '"See you next time! Bye!"',
          },

          audio_cue: {
            contoh_guru  : 'You learned SO MUCH in Phase A! You are English speakers now! Keep speaking English! Phase B comes next! Goodbye, Phase A!',
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
        {
          tipe: 'instruksi',
          teks: 'Semua siswa berdiri. Guru lead celebration: "You were brave! You finished Phase A! Congratulations!" Semua clap untuk diri sendiri. Guru: "I am so proud of you!"',
          mode: {
            mudah:     { bantuan: 'Guru lead dengan gesture meriah. Semua siswa ikut clap — tidak ada yang perlu verbal respond.' },
            normal:    { bantuan: 'Guru lead celebration natural. Semua siswa participate dengan clap.' },
            tantangan: { bantuan: 'Siswa boleh lead yell atau chant sendiri ("We did it!").' },
          },
        },
        {
          tipe: 'audio',
          teks: 'You were SO BRAVE! You finished Phase A! Congratulations! I am SO PROUD OF YOU!',
          mode: {
            mudah:     { bantuan: 'Ucapkan hangat, pelan, dengan eye contact ke semua siswa.' },
            normal:    { bantuan: 'Ucapkan dengan genuine enthusiasm.' },
            tantangan: { bantuan: 'Kelas bisa join chant: "We did it! Phase A done!"' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Reflection ritual: Guru tanya "1 hal yang paling ingat dari Phase A?" (silent reflection — no hand up). Guru lead closure: "Thank you, Phase A! I learned, I tried, I was brave!"',
          mode: {
            mudah:     { bantuan: 'Skip silent reflection jika kelas masih energik. Langsung ke closure chant.' },
            normal:    { bantuan: 'Guru lead 30 detik silent reflection, lalu closure chant bersama.' },
            tantangan: { bantuan: '1-2 siswa voluntary share ingatan Phase A sebelum closure chant.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Thank you, Phase A! / I learned, I tried, I was brave! / Goodbye, Phase A! / See you, Phase B! / Keep speaking English!',
          mode: null,
        },
      ],
    },

  ],

};

export default TP_18;
