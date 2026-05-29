/**
 * =============================================================
 * FLAF — TP B21 (Reading: Multimodal Texts)
 * File: docs/output-v5-faseb/tp-21-v5.js
 * Format: v5.0
 * Fase: B (Kelas 4)
 * Jenis: Capstone
 * Source: flaf-skenario-tp21-v2.txt (Fase B)
 * =============================================================
 */

const TP_B21 = {

  id       : 'tp-b21',
  nomor    : 21,
  kelas    : 4,
  nama     : 'Reading: Multimodal Texts',
  tema     : 'Membaca dan memahami teks yang menggabungkan tulisan, gambar, dan tabel; memproduksi teks multimodal sederhana',
  kluster  : 'Capstone',
  jenis    : 'Capstone',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat membaca dan memahami dua teks multimodal (poster kesehatan dan tabel jadwal mingguan) menggunakan strategi scanning dan skimming.',
    'Peserta didik dapat memproduksi teks multimodal sederhana — poster, jadwal, atau keduanya — menggunakan kosakata dari seluruh Fase B.',
    'Peserta didik dapat mengidentifikasi perbedaan format antara teks berbasis ikon (poster) dan teks berbasis tabel (jadwal) serta menjelaskan pilihan produksi mereka.',
  ],

  vocab    : ['healthy', 'exercise', 'food', 'sleep', 'football', 'always', 'went', 'ate', 'played', 'school', 'market', 'Monday', 'Wednesday', 'Saturday', 'first', 'then', 'after that', 'because', 'I like', 'I can', 'family', 'friends'],

  persiapan: [
    'Teks A "Stay Healthy!" — dicetak atau ditulis di papan sebelum kelas (poster format: ikon + teks pendek, lihat L4)',
    'Teks B "Budi\'s Week" — dicetak atau ditulis di papan sebelum kelas (tabel format, lihat L7)',
    'Lembar produksi siswa: 1 per siswa — kertas A4 kosong atau buku gambar. Bukan template tercetak — siswa membuat layout sendiri (lihat L10)',
    'Pensil warna atau spidol opsional — untuk siswa yang membuat poster',
  ],

  checklist: [
    'Teks A "Stay Healthy!" dan Teks B "Budi\'s Week" sudah disiapkan sebelum kelas — di papan atau dicetak',
    'Kertas A4 kosong sudah disiapkan — satu per siswa, tidak ada template tercetak',
    'Penilaian formatif sudah dibuka di L10 atau L11 — minimal 4 siswa sudah dinilai (Capstone)',
    'Breakpoint Alami sudah disampaikan ke siswa jika sesi terpotong',
    'Guru tidak mendominasi lebih dari 40% layar — L9 sampai L12 adalah layar siswa',
    'Tidak ada template wajib di L10 — siswa memutuskan layout sendiri',
    'Setiap siswa membuat karya yang berbeda — tidak ada dua output yang identik',
    'Strategi scanning dan skimming disebutkan dengan nama di L13 — setelah siswa melakukannya',
    'Tidak ada kosakata baru diperkenalkan di manapun dalam skenario ini',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🟠',
    'L2 🔵',
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
    'L14 🔵',
  ],

  catatan: {
    risiko: [
      'Budget 69 menit adalah yang terketat dalam seluruh Fase B — margin hanya 1 menit dari batas 70 menit. Jika guru merasakan sesi mulai melambat sebelum L9, segera aktifkan FLEX plan: lewati L11 dan L12 tanpa pengumuman.',
      'L10: Capstone membutuhkan lebih banyak waktu berpikir dari Panen biasa — siswa membuat keputusan layout, bukan hanya mengisi template. Berikan 10 menit minimum. Jangan potong di bawah 8 menit.',
      'L9: Tiga menit untuk planning setelah pilihan dibuat adalah minimum. Jika siswa tampak kebingungan dengan pilihan, perpanjang satu menit — lebih baik terlambat mulai produksi dari tidak tahu harus membuat apa.',
      'Breakpoint Alami: jika digunakan, pastikan Teks A dan B masih terlihat di awal sesi kedua sebelum L9.',
    ],
    autonomy: [
      'Teks A "Stay Healthy!" dan Teks B "Budi\'s Week" boleh disesuaikan dengan konteks lokal — misalnya ganti "football" dengan "badminton" atau "pencak silat", ganti nama "Budi" dengan nama lokal yang lebih familiar.',
      'Siswa yang memilih Choice C (poster + jadwal) membutuhkan lebih banyak waktu — beri mereka prioritas di L11 untuk memastikan setidaknya satu dari dua format sudah selesai.',
      'Gallery walk di L12 bisa diganti dengan "show your neighbor" jika ruang kelas tidak memungkinkan siswa bergerak. Hasilnya sama — siswa melihat keragaman output.',
      'L13 adalah satu-satunya layar di Fase B yang secara eksplisit menamai strategi membaca. Jangan skip ini — ini adalah momen metalinguistik yang penting untuk persiapan membaca teks akademis di kelas yang lebih tinggi.',
    ],
  },

  breakpoint: {
    posisi    : 'Setelah L8, sebelum L9',
    instruksi : `Jika waktu tidak cukup: hentikan di sini. Sesi berikutnya mulai dari Layar 9. Siswa simpan catatan apa yang mereka pilih (Poster / Schedule / Both). Di awal sesi kedua: tunjukkan kembali Teks A dan Teks B sebagai referensi sebelum siswa mulai produksi.`,
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. Today is different — and special."`,
    bantuan: 'Jika ada siswa yang masih gaduh — jeda 3 detik diam, lanjutkan hanya setelah mereka berhenti.',
    cue    : '"Today is different" bukan kalimat biasa — ini adalah sinyal bahwa hari ini bukan sesi seperti biasanya. TP21 adalah Capstone: tidak ada kosakata baru, tidak ada template wajib, siswa memimpin produksi mereka sendiri.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 7,

      langkah: [

        // L1 — Reconnect — Seluruh Perjalanan Fase B
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali.

UCAP: "Let's remember. Everything."
UCAP: "TP01 — my school. TP08 — my weekly schedule. TP15 — my country. TP20 — my story."
UCAP: "Today — we use ALL of it."

AKSI: Chant singkat.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"I go to school — I eat healthy food — GO!
I play football — I went — I played — GO!
My schedule — my story — my country — GO!
All together — my world — let's GO!"

🗣 TOGETHER — 2 putaran.`,
          bantuan: null,
          cue    : 'Chant ini tidak dirancang untuk dihafalkan sempurna — tujuannya adalah membangkitkan rasa "sudah jauh berjalan." Setiap baris mewakili satu kluster Fase B.',
          darurat: null,
          energi : '🟠',
        },

        // L2 — Orientasi Capstone
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kembali ke depan kelas. Suara pelan.

UCAP: "Today — two texts. Two different types."
UCAP: "Text one — a poster. Has pictures and words."
UCAP: "Text two — a schedule. Has a table and words."
UCAP: "After we read — you choose what to make."

AKSI: Tulis di papan:
  TODAY:
  1. Read two texts
  2. Choose: Poster OR Schedule OR Both
  3. Make your own

UCAP: "No one tells you which one. You decide."`,
          bantuan: null,
          cue    : '"You decide" adalah kalimat terpenting di TP21. Ini adalah Capstone — siswa memimpin. Tapi keputusan ini datang setelah membaca, bukan sebelum. Urutan ini penting: eksposur dulu, pilihan kemudian.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 55,

      langkah: [

        // L3 — Pre-Reading Teks A: Prediksi Poster
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Look at this." [tunjuk judul atau ikon-ikon Teks A yang sudah ada di papan]
UCAP: "Text one is called 'Stay Healthy!' — what do you think it talks about?"
→ Biarkan 2–3 siswa menebak.
UCAP: "What words do you expect to see?"
→ Siswa menyebut: "healthy! exercise! food! sleep!"
UCAP: "Good. Let's find out."`,
          bantuan: 'Jika siswa tidak bisa menebak: berikan petunjuk — "Stay Healthy — apa artinya dalam Bahasa Indonesia?" — setelah tahu artinya, mereka akan bisa menebak isinya.',
          cue    : 'Pre-reading prediksi adalah strategi membaca yang sudah diperkenalkan di TP19. Siswa kelas 4 yang sudah sampai di Capstone sudah familiar — ini bukan teknik baru. Cukup dua pertanyaan, satu menit, lanjut.',
          darurat: null,
          energi : '🔵',
        },

        // L4 — Read Teks A: Poster Kesehatan
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjukkan atau tampilkan Teks A:

  STAY HEALTHY!

  🏃 Exercise every day.
     "I always play football with my friends."

  🥗 Eat healthy food.
     "I eat rice and egg every day."

  💤 Sleep at nine o'clock.
     "My body needs rest."

  💧 Drink water.
     "Drink water every day. It keeps you healthy."

👂 LISTEN FIRST — guru membaca seluruh poster dengan ekspresif.

UCAP: "Listen. I will read the poster."
→ Baca tiap baris dengan penekanan pada ikon dan kalimat kutipan.

UCAP: "Now — read it together with me."
🗣 TOGETHER — baca satu putaran.

UCAP: "What is this poster about — one word?"
→ Kelas: "Health!" atau "Healthy!"`,
          bantuan: 'Jika siswa tidak mengenal satu kata: baca terus tanpa berhenti — konteks ikon dan kalimat sudah cukup memberikan makna.',
          cue    : 'Poster ini sengaja menggabungkan dua format: instruksi singkat (imperative) dan kalimat kutipan personal ("I always play football"). Kedua format sudah dikenal dari TP11 dan TP16. Ini adalah integrasi, bukan hal baru.',
          darurat: null,
          energi : '🔵',
        },

        // L5 — Comprehension + Strategi Scanning
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Now — I have a question. Don't read the whole poster. Just SCAN — find the answer fast."
UCAP: "What time should you sleep? Scan."
→ Siswa scan teks, jawab cepat: "Nine o'clock!"
UCAP: "What sport is mentioned? Scan."
→ Kelas: "Football!"
UCAP: "How many glasses of water? Scan."
→ Kelas: "Every day!"

UCAP: "That is called SCANNING — reading quickly to find specific information. You already know how to do this."

UCAP: "Now — what is your favorite part of this poster? Why?"
→ Tunjuk 2–3 siswa. Terima semua jawaban.`,
          bantuan: 'Jika siswa tidak bisa scan dengan cepat: izinkan mereka membaca kalimat yang relevan dulu, lalu jawab. Scanning adalah keterampilan yang butuh latihan — tidak perlu sempurna di TP21.',
          cue    : 'Namai strategi "scanning" secara eksplisit — tapi jangan jelaskan terlalu panjang. Satu kalimat definisi ("reading quickly to find specific information") cukup. Siswa sudah melakukannya — mereka hanya belum tahu namanya.',
          darurat: null,
          energi : '🟡',
        },

        // L6 — Pre-Reading Teks B: Prediksi Jadwal
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Text two is different. It has a table."
UCAP: "Look at the title: 'Budi's Week.' What do you think you will find?"
→ Siswa menebak: "Days! Activities! Times!"
UCAP: "Good. Let's read."`,
          bantuan: 'Jika siswa tidak bisa menebak: tunjuk kolom header tabel yang terlihat — "Look — Day, Activity, Time. What do you think this is about?"',
          cue    : 'Siswa sudah sangat familiar dengan format jadwal — dari TP07 dan TP08. "Budi\'s Week" akan terasa sangat mudah dibaca karena formatnya sudah dikenal. Ini disengaja — Capstone membangun kepercayaan diri, bukan menguji dengan teks yang sulit.',
          darurat: null,
          energi : '🔵',
        },

        // L7 — Read Teks B: Jadwal Mingguan Budi
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjukkan atau tampilkan Teks B:

  BUDI'S WEEK

  | Day       | Activity               | Time  |
  |-----------|------------------------|-------|
  | Monday    | Went to school         | 7:00  |
  | Tuesday   | Played badminton       | 4:00  |
  | Wednesday | Went to the market     | 9:00  |
  | Thursday  | Ate rice with family   | 12:00 |
  | Friday    | Went to school         | 7:00  |
  | Saturday  | Played football        | 3:00  |
  | Sunday    | Went to sleep early    | 8:00  |

👂 LISTEN FIRST — guru membaca tabel baris per baris.

UCAP: "On Monday — Budi went to school at seven."
→ Tunjuk baris Monday.
UCAP: "On Tuesday — he played badminton at four."
→ Tunjuk baris Tuesday.
UCAP: "And so on."

UCAP: "Now — read the table together."
🗣 TOGETHER — kelas membaca satu baris per gantian.`,
          bantuan: 'Jika kelas kesulitan membaca tabel bersama: guru baca kalimat, kelas echo. Tidak perlu membaca persis format tabel — ucapkan isi tiap baris sebagai kalimat.',
          cue    : 'Tabel "Budi\'s Week" menggunakan past tense (went, played, ate) dari TP18 dan nama hari dari TP07. Siswa yang membaca tabel ini sedang menggunakan hampir semua kosakata Kluster B dan E sekaligus.',
          darurat: null,
          energi : '🔵',
        },

        // L8 — Comprehension + Koneksi Teks-Tabel
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Now — questions about Budi's Week."
UCAP: "What did Budi do on Saturday?"
→ Kelas: "He played football!"
UCAP: "What time did he go to sleep on Sunday?"
→ Kelas: "Eight o'clock!"
UCAP: "Which day did he go to the market?"
→ Kelas: "Wednesday!"

UCAP: "Now — compare. Poster vs Table. What is different?"
→ Biarkan 2–3 siswa menjawab: "Poster has pictures. Table has days and times."
UCAP: "Yes — two different ways to share information. Both use English. Both you can read."

UCAP: "Now — which one do you want to MAKE?"
→ Jeda. Biarkan siswa berpikir.`,
          bantuan: 'Jika kelas tidak bisa menjawab pertanyaan comprehension: tunjuk baris tabel yang relevan — "Look — Saturday. What does it say?" Biarkan mereka membaca sendiri.',
          cue    : 'Pertanyaan "which one do you want to make?" adalah transisi ke L9. Beri jeda setelah pertanyaan ini — bukan untuk jawaban verbal, tapi untuk proses berpikir internal.',
          darurat: null,
          energi : '🟡',
        },

        // L9 — Pemilihan Proyek + Planning Mandiri
        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Now — you choose."
UCAP: "Choice A: Make a health poster — like 'Stay Healthy!' but YOUR version."
UCAP: "Choice B: Make a weekly schedule — like 'Budi's Week' but YOUR week."
UCAP: "Choice C: Make both — a small poster AND a small schedule."

UCAP: "Take one minute — decide. Then write your choice on the top of your paper."

AKSI: Bagikan kertas A4 kosong (atau buku gambar) — 1 per siswa.

UCAP: "Write your name. Write your choice. Then — plan. What will you put in it?"
→ Beri waktu 3 menit untuk planning dan setup (menulis judul, membuat grid tabel, atau membuat kotak-kotak untuk poster).`,
          diferensiasi: {
            perluSupport: 'pilihkan untuk mereka — tanyakan langsung "kamu mau gambar atau tabel?" — dan bantu mereka setup di atas kertas.',
            sudahBisa   : 'pilih Choice C atau tambahkan elemen ketiga yang kreatif — misalnya narasi singkat di bawah tabel atau kalimat pengantar di atas poster.',
          },
          bantuan: 'Jika siswa bingung harus pilih apa: tunjuk Teks A di papan — "Do you like this? Make yours." Atau tunjuk Teks B — "Do you like this? Make yours." Satu pertanyaan biner, satu keputusan.',
          cue    : 'Tidak ada satu pun siswa yang harus membuat hal yang sama. Siswa yang memilih poster akan menghasilkan sesuatu yang berbeda dari yang memilih jadwal. Keragaman output adalah tanda Capstone yang berhasil.',
          darurat: null,
          energi : '🟡',
        },

        // L10 — Produksi — Siswa Buat Teks Multimodal
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Now — create. Use English. Use everything you know."
UCAP: "Poster: write four or five short sentences. Add a title. Draw icons or pictures if you want."
UCAP: "Schedule: write five to seven days. For each day — one activity and one time."

AKSI: Tulis pengingat di papan:
  POSTER: Title + 4–5 short sentences (healthy, food, sleep, exercise...)
  SCHEDULE: Day | Activity (past tense) | Time

AKSI: Mundur dari depan kelas. Circulate pelan.`,
          bantuan: 'Jika siswa tidak tahu harus mulai dari mana: minta mereka copy satu baris dari Teks A atau B sebagai titik awal. Satu baris yang disalin sudah cukup untuk memulai.',
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai. Selama L10, guru tidak mengajar. Jika ada kata yang tidak diketahui siswa: tulis di pojok papan tanpa komentar. Jika ada siswa yang mencampur Bahasa Indonesia: terima, tulis versi Inggris di pojok papan jika diminta.',
          darurat: 'Jika setelah 5 menit lebih dari separuh kelas masih belum mulai: hentikan semua, tunjuk Teks A dan B di papan, minta semua siswa copy satu baris dari teks yang mereka pilih sebagai titik awal. Satu baris yang disalin sudah cukup untuk memulai.',
          energi : '🔵',
        },

        // L11 — Circulation + Penilaian Formatif [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Teruskan circulate dari L10. Fokus sekarang ke penilaian.

UCAP: "Keep working. I will come to you."

AKSI: Kunjungi tiap meja. Untuk setiap siswa:
→ Baca atau lihat apa yang sudah dibuat.
→ Jika sudah ada minimal satu kalimat dalam Bahasa Inggris: angguk, ucap pelan "Good — keep going."
→ Jika masih kosong: tunjuk pilihan mereka, ucap pelan "You chose poster — write one sentence about health."
→ Jangan tulis ulang karya mereka.`,
          bantuan: 'Jika menemukan siswa yang hanya menyalin Teks A atau B kata per kata: duduk sebentar, tunjuk satu poin dari teks, tanya — "What about YOU? Do YOU exercise? Write that." Dorong personalisasi minimal satu kalimat.',
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif jika belum dibuka di L10. Di Capstone, guru menilai satu hal: apakah siswa memproduksi sesuatu dalam Bahasa Inggris yang mencerminkan pemahaman mereka tentang topik yang dipilih? Satu kalimat bermakna lebih bernilai dari sepuluh kalimat yang disalin persis.',
          darurat: '[FLEX — lewati jika waktu tersisa < 12 menit]',
          energi : '🔵',
        },

        // L12 — Gallery Walk — Display dan Baca Karya Teman [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Put your work on your desk — or hold it up."
UCAP: "Walk around — look at two or three classmates' work."
UCAP: "Find one thing you like. Remember it."

AKSI: Beri waktu 3 menit untuk gallery walk.

UCAP: "Come back to your seat."
UCAP: "Who found something interesting? What did you see?"
→ Tunjuk 2–3 siswa untuk berbagi apa yang mereka temukan.`,
          bantuan: 'Jika ruang kelas tidak memungkinkan siswa bergerak: ganti dengan "show your neighbor" — minta siswa melihat karya partner di sebelah mereka.',
          cue    : 'Gallery walk singkat lebih bermakna dari gallery sharing formal — siswa bergerak, melihat keragaman output, dan merasakan bahwa tidak ada dua karya yang sama. Ini adalah konfirmasi visual dari nilai Capstone.',
          darurat: '[FLEX — lewati jika waktu tersisa < 10 menit]',
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 7,

      langkah: [

        // L13 — Refleksi Strategi Membaca
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Siswa simpan karya. Guru kembali ke depan kelas.

UCAP: "Before we close — I want to ask about reading."
UCAP: "When I asked you to find the sleep time in the poster — you didn't read everything. You just looked for the answer. That is called — scanning."
→ Tulis di papan: SCANNING — find specific information quickly

UCAP: "And when you looked at 'Budi's Week' and understood the whole table in one minute — that is called skimming."
→ Tulis: SKIMMING — understand the main idea quickly

UCAP: "You did both today. Without knowing the names."

UCAP: "These are reading skills. You will use them for the rest of your life."`,
          bantuan: null,
          cue    : 'Tujuan L13 bukan mengajarkan reading theory — tapi memberi nama pada sesuatu yang sudah dilakukan siswa. "You did this already — it has a name" adalah cara yang paling bermartabat untuk mengajarkan metalanguage kepada kelas 4.',
          darurat: null,
          energi : '🔵',
        },

        // L14 — Closure Capstone + Teaser TP22
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa memegang karya mereka. Suara guru pelan.

UCAP: "Look at what you made today."
→ Jeda 5 detik.

UCAP: "You read a poster — and understood it."
UCAP: "You read a table — and understood it."
UCAP: "You made your own — poster, schedule, or both."
UCAP: "Using English. Using everything from Fase B."

→ Jeda 3 detik.

UCAP: "This is not a small thing."

UCAP: "Next time — one last project. The biggest one."
UCAP: "You will tell your whole world story — everything you know, everything you are."
[Teaser TP22 — Integrative Project: My World Story]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu: minta siswa merapikan meja dan menyimpan karya mereka dengan nama yang sudah ditulis.`,
          bantuan: null,
          cue    : 'Teaser TP22 ("your whole world story") harus diucapkan dengan nada yang terasa seperti undangan, bukan tugas. Ini adalah TP terakhir Fase B — siswa yang sudah sampai di sini perlu merasakan bahwa mereka sudah siap.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B21;
