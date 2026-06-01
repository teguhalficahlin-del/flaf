/**
 * =============================================================
 * FLAF — TP B22 (Integrative Project: My World Story)
 * File: docs/output-v5-faseb/tp-22-v5.js
 * Format: v5.0
 * Fase: B (Kelas 4)
 * Jenis: Capstone
 * Source: flaf-skenario-tp22-v2.txt (Fase B)
 * =============================================================
 */

const TP_B22 = {

  id       : 'tp-b22',
  nomor    : 22,
  kelas    : 4,
  nama     : 'Integrative Project: My World Story',
  tema     : 'Membuat teks multimodal yang mencerminkan dunia pribadi siswa menggunakan seluruh kosakata Fase A dan Fase B',
  kluster  : 'Capstone',
  jenis    : 'Capstone',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat memproduksi teks multimodal orisinal (minimal dua bagian) yang mencerminkan dunia pribadi mereka menggunakan kosakata dari lintas kluster Fase A dan Fase B.',
    'Peserta didik dapat mengintegrasikan kosakata dari minimal dua kluster yang berbeda dalam satu halaman "My World Story" yang koheren.',
    'Peserta didik dapat membacakan atau menunjukkan satu bagian dari karya mereka kepada kelas dengan percaya diri.',
  ],

  vocab    : ['school', 'family', 'friends', 'food', 'healthy', 'exercise', 'sleep', 'always', 'sometimes', 'went', 'ate', 'played', 'yesterday', 'first', 'then', 'after that', 'because', 'I like', 'I can', 'celebration', 'Indonesia', 'schedule'],

  persiapan: [
    'Lembar produksi siswa: 1 per siswa — kertas A4 kosong, tidak ada template. Siswa membagi dan mengisi sendiri',
    'Contoh "My World Story" guru — sudah disiapkan sebelum kelas (satu halaman A4 dibagi tiga bagian, lihat L4)',
    'Semua hasil Panen TP04, TP08, TP15, TP20 jika masih tersimpan — ditampilkan di depan kelas sebagai referensi visual (opsional)',
    'Pensil warna atau spidol opsional',
  ],

  checklist: [
    'Lembar "My World Story" guru sudah disiapkan sebelum kelas — A4 dibagi tiga bagian, bukan template tercetak',
    'Kertas A4 kosong sudah disiapkan untuk semua siswa',
    'Hasil Panen TP04/TP08/TP15/TP20 dipajang jika tersedia — sebagai referensi visual perjalanan',
    'Penilaian formatif sudah dibuka di L6 atau L7 — minimal 4 siswa sudah dinilai (Capstone)',
    'Breakpoint Alami sudah disampaikan ke siswa jika sesi terpotong',
    'Guru tidak mendominasi lebih dari 40% layar — L3 sampai L10 adalah layar siswa',
    'Tidak ada template wajib — siswa membagi dan mengisi halaman sendiri',
    'Tidak ada dua siswa yang membuat cerita identik',
    'Kalimat "Nobody else has the same world" diucapkan di L12',
    'L13 tidak berisi teaser TP berikutnya — TP22 adalah yang terakhir',
    'Tidak ada kosakata baru diperkenalkan di manapun dalam skenario ini',
  ],

  printables: [
    { file: 'tp-b22-planning-guide-card.png',      label: 'Planning Guide Card' },
    { file: 'tp-b22-project-poster-template.png',  label: 'Project Poster Template' },
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🟠',
    'L2 🔵',
    'L3 🟡',
    'L4 🔵',
    'L5 🟡',
    'L6 🔵',
    'L7 🔵',
    'L8 🔵',
    'L9 🟡',
    'L10 🟡',
    'L11 🟡',
    'L12 🔵',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'Budget 70 menit adalah batas absolut — tidak ada margin. L8, L9, L10 adalah tiga FLEX yang menjadi buffer kritis. Jika L6 memakan 12 menit penuh dan L7 7 menit, waktu tersisa adalah 17 menit untuk L8–L13. Cukup bahkan jika hanya satu FLEX yang dilewati.',
      'L6 adalah layar terpenting dan terpanjang di seluruh Fase B. Jangan potong di bawah 10 menit. Siswa yang menulis lambat perlu minimal 10 menit untuk menghasilkan satu bagian yang bermakna.',
      'L3 (brainstorm + 10 detik diam): jangan potong keheningan ini. Siswa yang diberi ruang untuk berpikir akan menulis lebih dalam. Tahan diri dari mengisi keheningan ini.',
      'Breakpoint Alami berada di menit ke-20 — sangat awal untuk pemisahan antar sesi. Jika harus dipisah antar dua sesi, sesi kedua harus dimulai dengan re-display contoh guru (L4) sebelum masuk ke L5.',
    ],
    autonomy: [
      'Lembar contoh guru di L4 menggunakan tiga kluster: TP16 (sport), TP13 (food), TP18 (past). Guru boleh menggunakan kluster berbeda — yang penting tiga bagian dari tiga aspek kehidupan yang berbeda.',
      '"English — Bahasa Indonesia jika ada kata yang tidak tahu" adalah instruksi yang paling inklusif di seluruh Fase B. Ini bukan kompromi — ini pengakuan bahwa produksi autentik lebih penting dari akurasi linguistik di TP terakhir.',
      'Jika ada siswa yang sudah selesai sebelum L6 berakhir: minta mereka menambah bagian keempat, atau menggambar lebih detail, atau menulis satu kalimat opini ("I think my world is ___ because ___"). Jangan biarkan mereka idle.',
      'TP22 tidak memiliki skenario "jika kelas tidak bisa sama sekali" yang sangat serius — karena pada TP22, siswa yang sudah menyelesaikan TP01–21 sudah punya cukup bekal. Kepercayaan pada proses ini adalah bagian dari filosofi Capstone.',
    ],
  },

  breakpoint: {
    posisi    : 'Setelah L4, sebelum L5',
    instruksi : `Jika waktu tidak cukup: hentikan di sini. Sesi berikutnya mulai dari Layar 5. Siswa simpan kertas dengan tiga kata brainstorm di sudut — ini adalah planning mereka. Di awal sesi kedua: minta siswa buka kertas, baca tiga kata, lalu tunjukkan kembali contoh guru sebelum mulai L5.`,
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen."
→ Jeda 5 detik. Biarkan ketenangan terasa.
UCAP: "Today — we finish Fase B together."`,
    bantuan: 'Jika ada siswa yang masih gaduh — jeda 3 detik diam, lanjutkan hanya setelah mereka berhenti.',
    cue    : 'Jangan terburu-buru dari L0. Kalimat "today we finish Fase B together" perlu ruang untuk dirasakan. Ini bukan hari biasa — dan siswa tahu itu.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 8,

      langkah: [

        // L1 — Reconnect — Semua Panen Fase B
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali.

UCAP: "Let's go back. All the way."

UCAP: "TP04 — you wrote about WHO you are and WHERE you live."
UCAP: "TP08 — you wrote about your WEEK. Every day."
UCAP: "TP15 — you wrote about your COUNTRY. Indonesia."
UCAP: "TP20 — you wrote about your YESTERDAY. Your story."
UCAP: "TP21 — you read posters and schedules. You made your own."

→ Jeda.
UCAP: "Today — you put it ALL together. One page. Your world."

AKSI: Chant penutup Fase B.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"Who am I — where do I live — GO!
What's my week — what's my country — GO!
Yesterday I went — I played — I ate — GO!
My world story — let's make it — GO!"

🗣 TOGETHER — 2 putaran. Putaran kedua lebih pelan, bukan lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal semua kata: itu normal. Tujuan chant adalah reconnect emosional, bukan akurasi.',
          cue    : 'Putaran kedua chant lebih PELAN — bukan lebih cepat. TP22 bukan tentang energi cepat; tentang kesadaran bahwa ini adalah penutup. Perlambatan tempo chant adalah sinyal emosional yang disengaja.',
          darurat: null,
          energi : '🟠',
        },

        // L2 — Orientasi TP22 — Apa "My World Story"
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kembali ke depan kelas. Suara paling pelan sejauh ini.

UCAP: "Today — one project. One page. Your world."
→ Jeda.
UCAP: "What is YOUR world? Your job? Your food? Your family? Your sport?"
UCAP: "Your daily routine? Your neighborhood? Your celebration?"

AKSI: Tulis di papan:
  MY WORLD STORY
  → Choose THREE parts of your world
  → Write and draw — your way
  → No two stories will be the same

UCAP: "Three parts — minimum. As many as you want — maximum."
UCAP: "You choose. You decide. This is your Fase B, your way."`,
          bantuan: null,
          cue    : '"No two stories will be the same" adalah prinsip yang harus dirasakan siswa sebelum mereka mulai. Di TP22, keragaman output bukan hanya diterima — itu adalah tujuan. Jika semua siswa menulis hal yang sama, TP22 gagal sebagai Capstone.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 50,

      langkah: [

        // L3 — Brainstorm — Siswa Identifikasi Tiga Dunia
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Before you write — think. What are the THREE most important parts of your world?"
UCAP: "Close your eyes for ten seconds. Think."
→ Beri waktu 10 detik diam.

UCAP: "Open. What came to mind?"
→ Tunjuk 3–4 siswa untuk menjawab. Terima semua tanpa komentar.

UCAP: "Good. Write those three words on the corner of your paper — not yet a story, just three words."
→ Beri waktu 1 menit.

UCAP: "Look at what you wrote. That is the beginning of your world story."`,
          bantuan: 'Jika siswa mengatakan tidak tahu harus menulis apa: tunjuk papan, tanya — "Do you play a sport? Write that. Do you celebrate Eid? Write that. What did you eat yesterday? Write that." Tiga pertanyaan konkret yang masing-masing mengarah ke satu aspek dunia mereka.',
          cue    : 'Sepuluh detik diam sebelum brainstorm bukan waktu yang terbuang — ini adalah momen terpenting di TP22 sebelum produksi. Tahan diri dari mengisi keheningan ini.',
          darurat: null,
          energi : '🟡',
        },

        // L4 — Modeling — Guru Demo "My World Story"
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjukkan lembar "My World Story" guru — kertas A4 yang sudah dibagi tiga bagian sebelum kelas.

  Bagian 1 — MY SPORT:
  "I always play badminton on Saturday.
   I can play badminton well.
   I like it because it makes me happy."
  [kotak kecil gambar raket]

  Bagian 2 — MY FOOD:
  "My favorite food is rendang.
   Rendang is spicy and delicious.
   I like it because it reminds me of home."
  [kotak kecil gambar makanan]

  Bagian 3 — MY YESTERDAY:
  "Yesterday was [hari].
   First, I woke up at six.
   Then, I went to school and played with my friends."
  [kotak kecil gambar sekolah]

UCAP: "Look at my World Story. Three parts — sport, food, yesterday."
UCAP: "Each part — a few sentences. A small drawing if you want."

UCAP: "Is this the only way? No. You can choose different parts."
UCAP: "Family? Celebration? Neighborhood? Your choice."

UCAP: "Now — yours."`,
          bantuan: 'Jika siswa tampak kewalahan: tunjuk hanya bagian pertama — "Cukup satu bagian dulu. Selesaikan itu, baru tambah bagian lain."',
          cue    : 'Cerita guru menggunakan kosakata dari tiga kluster berbeda: TP16 (sport), TP13 (food), TP18 (past tense). Tunjuk ini secara eksplisit jika ada waktu: "My sport — from Kluster E. My food — from Kluster D. My yesterday — also Kluster E." Ini menunjukkan bahwa "My World Story" adalah integrasi lintas kluster.',
          darurat: null,
          energi : '🔵',
        },

        // L5 — Planning Mandiri — Tata Letak Halaman
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Now — look at your three words. Plan your page."
UCAP: "How will you divide your paper? Three boxes? Three columns? Top and bottom?"
UCAP: "You decide."

AKSI: Beri waktu 2 menit — siswa membagi kertas mereka sesuai pilihan.

UCAP: "Write a title for each part. Just the title — not yet the story."`,
          bantuan: 'Jika siswa bingung membagi kertas: tunjuk contoh guru di papan — "You can divide like mine — three parts. Or different." Izinkan mereka meniru format guru sebagai titik awal.',
          cue    : 'Tata letak adalah bagian dari produksi teks multimodal. Siswa yang memilih tiga kotak akan menghasilkan halaman yang berbeda secara visual dari siswa yang memilih satu kolom panjang. Ini adalah keputusan desain yang sah — bukan sekadar estetika.',
          darurat: null,
          energi : '🟡',
        },

        // L6 — Produksi — Tulis dan Gambar "My World Story"
        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Now — create. Write your world. Use everything you know."
UCAP: "English — Bahasa Indonesia jika ada kata yang tidak tahu. Your story, your language, your way."

AKSI: Tulis pengingat minimal di papan:
  Part 1: _______ [title]  → write sentences + draw if you want
  Part 2: _______ [title]  → write sentences + draw if you want
  Part 3: _______ [title]  → write sentences + draw if you want

AKSI: Mundur dari depan kelas. Circulate sangat pelan.`,
          diferensiasi: {
            perluSupport: 'cukup dua bagian dengan dua kalimat masing-masing.',
            sudahBisa   : 'tiga atau lebih bagian, variasikan kosakata dari kluster berbeda, tambahkan kalimat opini ("I think… because…").',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai. Selama L6, guru tidak mengajar. "English — Bahasa Indonesia jika ada kata yang tidak tahu" adalah instruksi yang paling inklusif di seluruh Fase B — yang dinilai bukan akurasi bahasa, tapi keberanian untuk menceritakan dunia sendiri. Siswa yang belum selesai saat L6 berakhir dapat melanjutkan selama L7 — produksi yang berlanjut ke L7 adalah valid.',
          darurat: 'Jika setelah 5 menit lebih dari separuh kelas belum menulis kalimat pertama: hentikan semua, tunjuk contoh guru, minta semua siswa salin satu kalimat dari bagian manapun yang mereka sukai sebagai titik awal. Satu kalimat disalin lebih baik dari halaman kosong.',
          energi : '🔵',
        },

        // L7 — Circulation + Penilaian Formatif
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Teruskan circulate dari L6. Fokus bergeser ke penilaian.

UCAP: "Keep writing. I will come to you."

AKSI: Kunjungi tiap meja:
→ Baca 2–3 kalimat diam-diam.
→ Jika ada minimal satu kalimat bahasa Inggris dari kosakata Fase A atau B: angguk, ucap pelan "Good — keep going."
→ Jika halaman masih kosong: tunjuk tiga kata brainstorm di sudut kertas, ucap pelan "Start with your first word. Write one sentence."
→ Jangan tulis ulang karya mereka.`,
          bantuan: 'Jika menemukan siswa yang hanya menggambar tanpa menulis: duduk sebentar, tunjuk gambar mereka, tanya — "What is this?" — setelah mereka menjawab lisan, ucap — "Write that word here." Satu kata sudah cukup sebagai awal.',
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif jika belum dibuka di L6. Di Capstone akhir, satu-satunya hal yang guru cek adalah apakah siswa memproduksi sesuatu yang mencerminkan dunia mereka dalam Bahasa Inggris. Panjang teks, akurasi grammar, dan kerapian tidak dinilai di sini.',
          darurat: 'Jika menit ke-56 sudah tercapai sebelum L7 selesai: hentikan circulate, lanjut ke L11 (Dua Suara) langsung. Lewati L8, L9, dan L10.',
          energi : '🔵',
        },

        // L8 — Silent Reread — Pilih Satu Kalimat Terbaik [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Stop. Put your pen down."
→ Jeda 3 detik.
UCAP: "Read your World Story — from the beginning. Just for yourself."
→ Jeda 30 detik.

UCAP: "Find one sentence — the one you are most proud of. Underline it."
→ Beri waktu 20 detik.

UCAP: "That sentence — that is the heart of your world."`,
          bantuan: 'Jika siswa tampak bingung: bisikkan pelan — "Kalimat mana yang paling kamu suka? Yang paling terasa seperti kamu?"',
          cue    : 'Di TP22, "kalimat terbaik" bisa dalam Bahasa Inggris atau campuran. Yang penting adalah siswa merasakan bahwa mereka sudah menghasilkan sesuatu yang bermakna — apapun bahasanya.',
          darurat: '[FLEX — lewati jika waktu tersisa < 15 menit]',
          energi : '🔵',
        },

        // L9 — Peer Sharing — Baca Satu Bagian ke Partner [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk menghadap partner.

UCAP: "Show your partner your World Story. Read one part — or show one drawing."
UCAP: "Partner — say: 'I like your world because ___'"

AKSI: Beri waktu 3 menit — masing-masing 90 detik.

UCAP: "Good. You can add one more thing if you want."
→ Beri 1 menit.`,
          bantuan: `Jika partner tidak tahu harus berkata apa: "You can say: 'I like your world because you love football' atau 'because your food is delicious.'"`,
          cue    : '"Show one drawing" adalah opsi yang setara dengan "read one part" — mengakui bahwa gambar adalah bagian sah dari teks multimodal. Siswa yang menggambar lebih banyak dari menulis tidak lebih rendah dari yang menulis panjang.',
          darurat: '[FLEX — lewati jika waktu tersisa < 10 menit] Jika peer sharing gaduh: hentikan. Lanjut ke L10.',
          energi : '🟡',
        },

        // L10 — Gallery Walk — Lihat Karya Teman [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Put your World Story on your desk."
UCAP: "Walk around — look at TWO classmates' stories."
UCAP: "Find one part of their world that is different from yours."

AKSI: Beri waktu 3 menit.

UCAP: "Come back. What world did you find?"
→ Tunjuk 2 siswa untuk berbagi.`,
          bantuan: 'Jika ruang kelas tidak memungkinkan siswa bergerak: ganti dengan "show your neighbor" — minta siswa melihat karya partner di sebelah mereka.',
          cue    : '"Find one part that is DIFFERENT from yours" mendorong siswa memperhatikan keunikan cerita teman, bukan mencari yang mirip. Ini memperkuat nilai Capstone: tidak ada dua dunia yang sama.',
          darurat: '[FLEX — lewati jika waktu tersisa < 10 menit]',
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 12,

      langkah: [

        // L11 — Dua Suara — Baca ke Kelas
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta semua siswa meletakkan pena. Kembali ke depan kelas.

UCAP: "I want to hear two worlds today."
UCAP: "Who wants to share one part of their story?"
→ Tunggu sukarelawan. Jika tidak ada dalam 5 detik, tunjuk siswa yang dari observasi L7 sudah menulis dengan baik.

AKSI: Siswa pertama membacakan atau menunjukkan satu bagian.
→ Guru: "What part of their world was that?"
→ Kelas menjawab singkat.

AKSI: Siswa kedua — pilih yang dunianya berbeda dari siswa pertama.
→ Guru: "And this world — what is special about it?"
→ Kelas menjawab.

UCAP: "Two different worlds. Both are real. Both are beautiful."`,
          bantuan: 'Jika tidak ada sukarelawan: gunakan observasi L7 — "I read your story — it\'s very interesting. Can you share one sentence?"',
          cue    : '"Both are beautiful" bukan basa-basi — ini pernyataan yang tulus tentang nilai setiap cerita. Ucap dengan tenang dan beri jeda setelah kata "beautiful." Ini adalah salah satu kalimat terakhir yang diucapkan guru dalam keseluruhan sesi Fase B.',
          darurat: null,
          energi : '🟡',
        },

        // L12 — Ritual Kepemilikan
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa memegang lembar "My World Story" mereka.

UCAP: "Write your name — big — at the top of your page."
→ Beri waktu 30 detik.

UCAP: "This story — this is yours."
UCAP: "Nobody else has the same world."

→ Jeda 5 detik.

UCAP: "Nobody else has your family, your food, your sport, your yesterday."
UCAP: "Nobody else has written exactly this."`,
          bantuan: null,
          cue    : '"Nobody else has the same world" adalah versi TP22 dari ritual penutup seluruh Fase B — lebih besar dari "nobody else has the same Indonesia" (TP15) atau "nobody else has the same yesterday" (TP20). Ini merangkum seluruh Fase B dalam satu kalimat.',
          darurat: null,
          energi : '🔵',
        },

        // L13 — Closure Akhir Fase B
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Siswa simpan lembar kerja. Suara guru paling pelan dalam seluruh Fase B.

UCAP: "You started Fase B with 'Good morning' and 'library' and 'canteen.'"
UCAP: "Now — you can describe your neighborhood."
UCAP: "You can talk about your schedule, your food, your celebrations."
UCAP: "You can give directions. You can tell stories about yesterday."
UCAP: "And today — you wrote your world story. In English."

→ Jeda 5 detik. Biarkan ini terasa.

UCAP: "That is not a small thing."
UCAP: "That is everything."

→ Jeda 3 detik.

UCAP: "Goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu: biarkan siswa merapikan meja dalam keheningan. Jangan isi dengan aktivitas apapun.`,
          bantuan: null,
          cue    : 'Tidak ada teaser TP selanjutnya — karena TP22 adalah TP terakhir Fase B. Penutup ini harus terasa seperti selesai, bukan seperti transisi. "That is everything" adalah kalimat terakhir guru sebelum goodbye.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B22;
