/**
 * =============================================================
 * FLAF — TP B19 (Reading: Short Narrative Texts)
 * File: docs/output-v5-faseb/tp-19-v5.js
 * Format: v5.0
 * Fase: B (Kelas 4)
 * Jenis: Kompleks — Kluster E
 * Source: flaf-skenario-tp19-v2.txt (Fase B)
 * =============================================================
 */

const TP_B19 = {

  id       : 'tp-b19',
  nomor    : 19,
  kelas    : 4,
  nama     : 'Reading: Short Narrative Texts',
  tema     : 'Membaca dan memahami teks naratif pendek menggunakan kosakata past tense',
  kluster  : 'E',
  jenis    : 'Kompleks',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat membaca teks naratif pendek "Budi\'s Day" dan menjawab pertanyaan pemahaman literal tentang isi cerita.',
    'Peserta didik dapat mengenali kata kerja bentuk lampau (went, ate, played, woke up) dalam konteks cerita dan membedakan pola "he went" dari "I went."',
    'Peserta didik dapat menceritakan kembali urutan kejadian dalam teks secara lisan dan tulisan menggunakan kata penghubung "first, then, after that."',
  ],

  vocab    : ['went', 'ate', 'played', 'Yesterday, I...', 'once upon a time', 'then', 'after that', 'the end', 'first', 'wake up', 'eat breakfast', 'go to school', 'sleep', 'school', 'friends'],

  persiapan: [
    'Teks "Budi\'s Day" — ditulis di papan atau dicetak satu lembar per siswa SEBELUM kelas dimulai (teks ada di L4)',
    'Kartu urutan kejadian: 6 kartu — satu kejadian per kartu, disiapkan dalam amplop per kelompok SEBELUM kelas dimulai (lihat L8):\n    Kartu 1: "woke up at six o\'clock"\n    Kartu 2: "ate breakfast — rice and egg"\n    Kartu 3: "went to school"\n    Kartu 4: "played football with friends"\n    Kartu 5: "went home and ate rice"\n    Kartu 6: "went to sleep"',
    'Lembar kerja siswa (opsional): 1 per siswa — berisi tabel retelling (lihat L10)',
    'Papan tulis + spidol untuk judul dan prediksi di L3, kontras I went → He went di L7 — teks "Budi\'s Day" tidak dihapus sampai L10 selesai',
  ],

  checklist: [
    'Teks "Budi\'s Day" sudah ditulis di papan atau dicetak sebelum kelas',
    'Kartu urutan kejadian (6 kartu) sudah disiapkan dalam amplop per kelompok sebelum kelas',
    'Teks tetap terlihat di papan selama L4–L10 — jangan hapus sebelum L10 selesai',
    'Penilaian formatif sudah dibuka di L10 — minimal 3 siswa sudah dinilai (TP Kompleks)',
    'Referensi ke TP18 ("we wrote about what WE did — today we read about someone ELSE\'S yesterday") sudah disampaikan di L1',
    'Koneksi "I went → He went" sudah dibuat eksplisit di L7',
    'Dua baris opini di L10 ("my favorite part" dan "I think Budi felt") tidak dikoreksi — semua jawaban valid',
    'Teaser TP20 diucapkan dengan antusias — "you write YOUR story"',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔴',
    'L2 🟡',
    'L3 🔵',
    'L4 🔵',
    'L5 🟡',
    'L6 🔵',
    'L7 🔵',
    'L8 🟡',
    'L9 🟡',
    'L10 🔵',
    'L11 🔵',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L4: Baca ekspresif — jangan berhenti untuk menjelaskan kosakata. Pemahaman datang dari konteks, bukan definisi kata per kata. Jika ada siswa yang bertanya arti kata saat guru membaca: ucap "I\'ll explain after — just listen for now."',
      'L6: Second read bersama bisa terasa lambat jika kelas tidak tahu cara membaca ekspresif. Beri contoh tempo yang tepat: tidak terlalu cepat (mesin), tidak terlalu lambat (ejaan). Tempo natural mendongeng adalah yang paling tepat.',
      'L8: Kartu urutan harus sudah dalam amplop per kelompok sebelum kelas. Membagikan kartu lepas di tengah sesi akan memakan 2 menit yang tidak ada dalam budget.',
      'TP19 tidak memiliki layar writing panjang (L10 hanya 7–8 menit) — ini membuat budget lebih aman dari TP18. Risiko terbesar adalah L4 yang bisa memakan waktu jika guru terlalu sering berhenti untuk menjelaskan kata-kata.',
    ],
    autonomy: [
      'Teks "Budi\'s Day" menggunakan nama yang familiar di Indonesia. Jika guru ingin mengganti dengan nama yang lebih relevan untuk konteks lokal (Adi, Sari, Ahmad), silakan — yang penting past tense dan vocabulary-nya sama.',
      'L7 memperkenalkan "he/his/friends" sebagai kontras dengan "I/my." Ini sengaja minimal — tidak perlu masuk ke pronoun chart lengkap. Siswa yang penasaran bisa didorong untuk eksplorasi sendiri di luar kelas.',
      'Dua baris opini di L10 ("my favorite part" dan "I think Budi felt...") adalah entry point ke critical reading. Siswa yang menjawab dengan alasan yang kuat perlu diapresiasi di L11 — ini memberi sinyal bahwa opini mereka dihargai.',
      'Jika kelas terlihat sangat familiar dengan cerita setelah L6, guru boleh menantang dengan pertanyaan: "What do you think happened AFTER Budi went to sleep?" Ini adalah extension yang membuka kreativitas menuju TP20.',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — jeda 3 detik diam, lanjutkan hanya setelah mereka berhenti.',
    cue    : 'TP19 adalah TP Reading pertama yang namanya eksplisit "Reading" dalam Fase B. Tidak ada kosakata baru — fokus hari ini adalah memahami cerita orang lain. Settling yang tenang memberi ruang untuk membaca yang fokus.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Koneksi TP18 + Chant Cerita
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali. Tanya kelas.

UCAP: "Last time — we talked about YESTERDAY. We wrote about what WE did."
UCAP: "Yesterday I went. Yesterday I ate. Yesterday I played."
→ Jeda.
UCAP: "Today — we read about someone ELSE'S yesterday. Someone else's story."
UCAP: "His name is Budi. And yesterday — Budi had a day."

AKSI: Langsung masuk ke chant dengan ketukan meja.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"Once upon a time — there was a day — GO!
First this — then that — after that — GO!
He went — he ate — he played — GO!
Read the story — let's GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal chant: baris ketiga "He went — he ate — he played" adalah yang paling penting — ulangi baris ini dua kali jika perlu.',
          cue    : 'Jembatan ke TP18 ("we wrote about what WE did — today we read about someone ELSE\'S yesterday") adalah pergeseran dari first-person ke third-person yang paling natural: siswa yang sudah memproduksi "Yesterday I went" akan langsung mengenali "Yesterday he went" sebagai variasi yang familiar.',
          darurat: 'Jika kelas masih gaduh setelah chant selesai: tepuk satu kali keras, ucap "Freeze — sit down — listen." Lanjut ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation — Past Tense dan Story Retelling
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tanya kelas dengan ritme cepat.

UCAP: "Past tense — quick review. 'Go' — yesterday?"
→ Kelas: "Went!"
UCAP: "Eat — yesterday?"
→ Kelas: "Ate!"
UCAP: "Play — yesterday?"
→ Kelas: "Played!"

UCAP: "Good. And story words — do you remember?"
UCAP: "How do stories begin in English?"
→ Kelas: "Once upon a time!"
UCAP: "And how do they end?"
→ Kelas: "The end!"
UCAP: "In the middle — first, then, after that."
→ Kelas echo: "First — then — after that!"

UCAP: "Good. Today — we read a story. A short story. About a boy named Budi."`,
          bantuan: 'Jika kelas tidak ingat "once upon a time": ucap dengan nada mendongeng — serendah dan sedramatik mungkin. "Once — upon — a time..." — kelas biasanya langsung tahu konteksnya.',
          cue    : '"Once upon a time" dan "The end" dari Fase A Story Retelling inventory muncul kembali di sini sebagai marker awal dan akhir cerita. Ini mempersiapkan siswa untuk memahami bahwa teks "Budi\'s Day" adalah narasi, bukan daftar fakta.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 45,

      langkah: [

        // L3 — Pre-Reading: Orientasi Teks
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tulis atau tunjukkan judul teks di papan: BUDI'S DAY

UCAP: "Look at this title. 'Budi's Day.'"
UCAP: "Budi is a boy — like many of you. And this story is about one day in his life."

UCAP: "Before we read — I have two questions. Think about them."
UCAP: "Question one: What do you think Budi did yesterday?"
→ Biarkan 2–3 siswa menebak. Terima semua jawaban.
UCAP: "Question two: What words do you think will appear in this story?"
→ Biarkan siswa menyebut kata-kata (went, ate, school, football, dll.) Tulis di pojok papan.

UCAP: "Now — let's read and find out."`,
          bantuan: 'Jika siswa tidak bisa menebak isi cerita: berikan petunjuk visual — "Look at the title: \'Budi\'s DAY.\' What happens in a day? Morning? Afternoon? Evening?"',
          cue    : 'Dua pertanyaan pre-reading ini adalah teknik prediksi — siswa yang memprediksi sebelum membaca akan lebih aktif memverifikasi saat membaca. Ini adalah strategi membaca dasar yang tidak memerlukan penjelasan teknis — cukup tanya dan biarkan mereka menebak.',
          darurat: null,
          energi : '🔵',
        },

        // L4 — First Read: Guru Membaca Keras
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjukkan teks "Budi's Day" di papan atau bagikan lembaran teks.

Teks:

  BUDI'S DAY

  Yesterday was Monday. Budi woke up at six o'clock.
  First, he ate breakfast. He ate rice and egg.
  After that, he went to school.
  At school, he played football with his friends.
  Then, he went home.
  He ate rice and went to sleep.
  It was a good day.

👂 LISTEN FIRST — siswa hanya mendengar, tidak membaca bersama dulu.

UCAP: "Listen. I will read the story first. Just listen."
→ Baca seluruh teks dengan pelan, jelas, dan ekspresif.
→ Beri sedikit jeda di antara kalimat.
→ Beri penekanan pada kata past tense: "woke UP," "ATE," "WENT," "PLAYED."

UCAP (setelah selesai): "Good. Now — what did you understand?"
→ Biarkan 2–3 siswa berbagi apa yang mereka tangkap. Tidak perlu lengkap.`,
          bantuan: 'Jika tidak ada siswa yang bisa berbagi setelah first read: itu normal. Lanjut ke L5 langsung — second read bersama di L6 akan membangun pemahaman yang first read tidak bisa paksakan.',
          cue    : 'Membaca ekspresif dengan penekanan pada kata past tense membantu siswa mengenali pola yang sudah mereka pelajari di TP18. Mereka tidak sedang belajar kata baru — mereka sedang memverifikasi pengetahuan yang sudah ada.',
          darurat: null,
          energi : '🔵',
        },

        // L5 — Comprehension Check: Pertanyaan Pemahaman
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tanya kelas pertanyaan pemahaman setelah first read.

UCAP: "Let me ask a few questions about Budi."

UCAP: "What day was yesterday for Budi?"
→ Kelas: "Monday!"
UCAP: "What time did Budi wake up?"
→ Kelas: "Six o'clock!"
UCAP: "What did he eat for breakfast?"
→ Kelas: "Rice and egg!"
UCAP: "Where did Budi go after breakfast?"
→ Kelas: "School!"
UCAP: "What did he play at school?"
→ Kelas: "Football!"
UCAP: "Was it a good day?"
→ Kelas: "Yes!"

UCAP: "Good — you understood the story. Now let's read it together."`,
          bantuan: 'Jika kelas tidak bisa menjawab pertanyaan: tunjuk kalimat yang relevan di teks, baca ulang kalimat itu, tunggu jawaban. Jangan beri jawaban langsung — beri scaffolding minimal.',
          cue    : 'Enam pertanyaan ini adalah comprehension check yang juga berfungsi sebagai pengulangan isi cerita. Jawaban semua ada di teks — ini bukan inferensi tapi verifikasi literal. Siswa yang belum menjawab di sini akan termotivasi untuk membaca lebih cermat di L6.',
          darurat: null,
          energi : '🟡',
        },

        // L6 — Second Read: Baca Bersama
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER

UCAP: "Now — let's read together. I will point — you read."

AKSI: Tunjuk kata per kata atau kalimat per kalimat di papan/lembaran.
→ Kelas membaca bersama guru. Pertama pelan, lalu lebih lancar di kalimat berikutnya.

AKSI: Ulangi sekali lagi — kelas membaca sendiri tanpa panduan guru:
UCAP: "Your turn — read from the beginning."
→ Kelas membaca bersama tanpa guru memimpin.

UCAP: "Good. Now — you know this story."`,
          bantuan: 'Jika kelas membaca tidak sinkron: perlambat tempo di kalimat pertama, tunjuk kata dengan jelas. Sinkronisasi bukan tujuan — familiarisasi dengan teks adalah tujuannya.',
          cue    : 'Second read bersama adalah momen di mana siswa merasakan bahwa mereka BISA membaca teks Bahasa Inggris. Ini adalah momen kepercayaan diri yang penting — terutama untuk siswa yang selama ini merasa membaca Bahasa Inggris adalah hal yang menakutkan. Biarkan kelas membaca dengan kecepatan mereka sendiri.',
          darurat: null,
          energi : '🔵',
        },

        // L7 — Perkenalan "He/His/Friends"
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "One thing you noticed — we use 'he' not 'I' in this story."
UCAP: "In TP18 — 'Yesterday I went.' Now — 'Yesterday HE went.'"
→ Tulis di papan: I went → He went
→ Jeda 3 detik.
UCAP: "Same word 'went' — but different person."

UCAP: "And 'his' — 'his friends', 'his school.'"
UCAP: "'His' — artinya miliknya. Like 'my' but for a boy."
→ Tulis: my → his

UCAP: "And 'friends' — teman. Budi played football with his FRIENDS."
→ Tulis: friends = teman

🗣 TOGETHER — echo cepat:
UCAP: "I went — he — ?"
→ Kelas: "He went!"
UCAP: "I ate — he — ?"
→ Kelas: "He ate!"
UCAP: "My school — his — ?"
→ Kelas: "His school!"`,
          bantuan: 'Jika siswa bingung dengan "his": berikan analogi langsung — "Budi\'s school = his school. Your school = my school." Kontras personal lebih mudah dipahami dari definisi abstrak.',
          cue    : '"he", "his", "friends" bukan kosakata yang perlu didrill panjang — mereka sudah ada dalam teks yang baru saja dibaca. Yang perlu adalah satu penjelasan kontras (I vs he, my vs his) dan echo singkat. Jangan memperluas ke "she/her" atau "they/their" — itu di luar scope TP19.',
          darurat: null,
          energi : '🔵',
        },

        // L8 — Kartu Urutan: Siswa Susun Ulang Kejadian
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Bagikan kartu urutan — satu set per pasang atau kelompok 3. Kartu berisi kejadian dalam urutan acak.

Kartu:
  "woke up at six o'clock"
  "ate breakfast — rice and egg"
  "went to school"
  "played football with friends"
  "went home and ate rice"
  "went to sleep"

UCAP: "Look at the cards. These are things Budi did — but they are mixed up."
UCAP: "Put them in the correct order. Use the story on the board to help."

AKSI: Beri waktu 2 menit untuk menyusun.

UCAP: "Now — say the story in order. Use 'first, then, after that.'"
→ Tunjuk 2–3 kelompok untuk mengucapkan satu kejadian per giliran.

UCAP: "Does the order match the story? Let's check."
→ Bandingkan urutan kelompok dengan teks di papan.`,
          bantuan: 'Jika kelompok tidak bisa menyusun: tunjuk satu kalimat di teks, minta mereka mencari kartu yang sesuai. Satu kalimat → satu kartu. Matching lebih mudah dari sorting murni.',
          cue    : 'Kartu diurutkan acak — bukan terbalik total. Ini mendorong siswa untuk membaca teks secara aktif, bukan sekadar menebak urutan logis berdasarkan akal sehat. Jika kartu diberikan dalam urutan terbalik sempurna, siswa cenderung hanya membalik tanpa membaca.',
          darurat: null,
          energi : '🟡',
        },

        // L9 — Pair Retelling: Ceritakan Kembali ke Partner [FLEX]
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa menyimpan kartu. Duduk menghadap partner.

UCAP: "Tell your partner Budi's story. In your own words."
UCAP: "You don't need to use the exact same words. Just tell what happened."
UCAP: "Start with: 'Yesterday was Monday. Budi woke up...'"

AKSI: Demo singkat:
UCAP: "Watch me. Yesterday was Monday. Budi woke up at six. First, he ate breakfast. After that, he went to school and played football."
UCAP: "Short — simple — in your own words. Now — your turn."

AKSI: Beri waktu 4 menit — masing-masing 2 menit per arah. Circulate.`,
          diferensiasi: {
            perluSupport: 'cukup menyebut tiga kejadian dari teks — tidak perlu semua.',
            sudahBisa   : 'ceritakan ulang dengan tambahan detail — "I think Budi was happy because he played football."',
          },
          bantuan: 'Jika satu pasang tidak bisa memulai: tunjuk kartu urutan yang ada di meja, ucap — "Look at the cards. Start with the first card." — dan biarkan mereka melanjutkan dari sana.',
          cue    : null,
          darurat: '[FLEX — lewati jika waktu tersisa < 18 menit atau energi kelas di bawah 🟡] Jika pair retelling gaduh dalam 1 menit: hentikan. Ucap "Okay — let\'s write instead." Lanjut ke L10.',
          energi : '🟡',
        },

        // L10 — Guided Writing: Tabel Retelling
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L8 (L9 dilewati) — ucap: "Okay. Take your pencil. Let's write." Jeda 3 detik. Bagikan lembar kerja.
AKSI: Bagikan lembar kerja (jika tersedia) atau minta siswa membuka buku tulis.

Tabel retelling:

  BUDI'S STORY

  1. First, Budi _________________________.
  2. Then, he _________________________.
  3. After that, he _________________________.
  4. He also _________________________.
  5. In the end, he _________________________.

  My favorite part: _________________________.
  I think Budi felt _________________________ because _________________________.

UCAP: "Fill in the table. Use the story to help."
UCAP: "For the last two lines — your opinion. No right or wrong answer."

👂 LISTEN FIRST — guru demo satu baris:
UCAP: "Watch me. Line one — 'First, Budi woke up at six o'clock.'" [tulis]
UCAP: "Now — your turn."

AKSI: Circulate. Bergerak ke meja siswa — jangan berdiri di depan.`,
          diferensiasi: {
            perluSupport: 'cukup isi tiga baris pertama dari tabel. Baris opini opsional.',
            sudahBisa   : 'setelah tabel selesai, tambah satu kalimat: "If I were Budi, I would also ___."',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai. Dua baris terakhir ("my favorite part" dan "I think Budi felt...") adalah opini — tidak ada jawaban yang salah. Ini adalah momen pertama dalam Fase B di mana siswa diminta memberikan pendapat tentang teks, bukan hanya menceritakan kembali.',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai: minta siswa hanya mengisi tiga baris pertama. Langsung ke L12 tanpa melalui L11.',
          energi : '🔵',
        },

        // L11 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil tabel siswa. Pilih 2 hasil — satu yang mengisi tabel dengan lengkap, satu yang memiliki jawaban opini yang menarik di baris terakhir.

UCAP: "Good. Let's hear from two friends."
→ Minta 2 siswa membacakan tabel mereka.
→ Kelas mendengarkan.

UCAP (setelah tiap siswa membacakan): "What did Budi do first — in their version?"
→ Kelas menjawab.
UCAP: "And how did they say Budi felt?"
→ Kelas menjawab baris opini.`,
          bantuan: 'Jika siswa yang diminta membaca menolak: ucap "That\'s okay" dan tunjuk siswa lain.',
          cue    : 'Pertanyaan kedua ("how did they say Budi felt?") mengakui bahwa baris opini adalah valid dan menarik — bukan sekadar tugas tambahan. Ini mendorong siswa lain untuk mengisi baris opini dengan lebih serius.',
          darurat: '[FLEX — lewati jika waktu tersisa < 10 menit]',
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 8,

      langkah: [

        // L12 — Review + Hapus Papan
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Siswa simpan lembar kerja. Guru kembali ke depan kelas.

UCAP: "Good work today. Let's remember."
UCAP: "What was the story about?"
→ Kelas: "Budi!" atau "Budi's day!"
UCAP: "What did Budi do first?"
→ Kelas: "He woke up!"
UCAP: "What sport did he play?"
→ Kelas: "Football!"
UCAP: "And — who is the word 'he' for?"
→ Kelas: "Budi! A boy!"

UCAP: "Today — you READ a story in English. And you understood it."

AKSI: Hapus teks dari papan satu kalimat per satu. Kelas ucapkan kalimat yang dihapus.
Urutan hapus: It was a good day → He ate rice and went to sleep → Then, he went home → He played football with his friends → After that, he went to school → First, he ate breakfast → Budi woke up at six → Yesterday was Monday`,
          bantuan: null,
          cue    : 'Menghapus teks dari akhir ke awal (urutan terbalik) memperkuat memori cerita dalam urutan yang berbeda. Siswa "melihat" cerita runtuh dari belakang — momen yang membantu konsolidasi.',
          darurat: null,
          energi : '🟡',
        },

        // L13 — Closure Emosional + Teaser TP20
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan.

UCAP: "Before we finish — I want to ask."
UCAP: "What is one thing from Budi's day that is the same as YOUR day?"
→ Tunjuk 1–2 siswa yang mau berbagi. Jawaban dalam Bahasa apapun diterima.
→ Bantu framing: "So — 'I also ___. Just like Budi.'"

→ Jeda 3 detik.

UCAP: "Budi's story is simple. But it is real — it is a day, just like yours."
UCAP: "The difference? Budi's story is written. And now — you can read it."

UCAP: "Next time — you write YOUR story. Your own adventure. In English."
[Teaser TP20 — Writing: My Story — Panen]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : '"Budi\'s story is written — and now you can READ it" adalah kalimat yang mengakui pencapaian hari ini. Teaser TP20 ("you write YOUR story") harus diucapkan dengan antusias — ini adalah momen yang akan membuat siswa penasaran dan siap untuk Panen.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B19;
