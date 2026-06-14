const TP_B22 = {

  // METADATA
  id     : 'tp-b22',
  nomor  : 22,
  kelas  : 4,
  nama   : 'Integrative Project: My World Story',
  tema   : 'Membuat teks multimodal yang mencerminkan dunia pribadi siswa menggunakan seluruh kosakata Fase A dan Fase B',
  kluster: 'Capstone',
  jenis  : 'Capstone',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat memproduksi teks multimodal orisinal (minimal dua bagian) yang mencerminkan dunia pribadi mereka menggunakan kosakata dari lintas kluster Fase A dan Fase B.',
    'Peserta didik dapat mengintegrasikan kosakata dari minimal dua kluster yang berbeda dalam satu halaman "My World Story" yang koheren.',
    'Peserta didik dapat membacakan atau menunjukkan satu bagian dari karya mereka kepada kelas dengan percaya diri.',
  ],
  vocab     : ['school', 'family', 'friends', 'food', 'healthy', 'exercise', 'sleep', 'always', 'sometimes', 'went', 'ate', 'played', 'yesterday', 'first', 'then', 'after that', 'because', 'I like', 'I can', 'celebration', 'Indonesia', 'schedule'],
  persiapan : [
    'Lembar produksi siswa satu per siswa, berupa kertas A4 kosong tanpa template, di meja guru sebelum dibagikan, untuk Layar 3 sampai Layar 6.',
    'Lembar contoh "My World Story" guru pada kertas A4 yang sudah dibagi tiga bagian My Sport, My Food, dan My Yesterday dengan kalimat dan kotak gambar, disiapkan sebelum kelas dimulai, untuk Layar 4.',
    'Hasil Panen TP-04, TP-08, TP-15, dan TP-20 jika masih tersimpan, dipajang di depan kelas sebagai referensi visual.',
    'Pensil warna atau spidol untuk siswa yang menggambar, di meja guru.',
  ],
  media     : [],
  printables: [
    { file: 'tp-b22-planning-guide-card.png',      label: 'Planning Guide Card' },
    { file: 'tp-b22-project-poster-template.png',  label: 'Project Poster Template' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi', tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Reconnect Semua Panen Fase B', tujuan: 'Guru membangkitkan memori semua Panen Fase B lewat chant.' },
    { layar:  2, judul: 'Pembuka · Orientasi TP-22 Apa My World Story', tujuan: 'Guru menjelaskan target membuat cerita dunia pribadi.' },
    { layar:  3, judul: 'Inti · Brainstorm Siswa Identifikasi Tiga Dunia', tujuan: 'Guru memandu siswa memilih tiga bagian dunia mereka.' },
    { layar:  4, judul: 'Inti · Modeling Guru Demo My World Story', tujuan: 'Guru memodelkan lembar contoh dan strukturnya.' },
    { layar:  5, judul: 'Inti · Planning Mandiri Tata Letak Halaman', tujuan: 'Guru memandu siswa merancang tata letak halaman.' },
    { layar:  6, judul: 'Inti · Produksi Tulis dan Gambar My World Story', tujuan: 'Guru memandu siswa memproduksi cerita dunia mereka.' },
    { layar:  7, judul: 'Inti · Berkeliling dan Penilaian Formatif', tujuan: 'Guru berkeliling menilai dan mendampingi produksi.' },
    { layar:  8, judul: 'Inti · Silent Reread Pilih Satu Kalimat Terbaik', tujuan: 'Guru memandu siswa membaca ulang dan menandai kalimat terbaik.' },
    { layar:  9, judul: 'Inti · Peer Sharing Baca Satu Bagian ke Partner', tujuan: 'Guru memandu siswa membagikan satu bagian ke partner.' },
    { layar: 10, judul: 'Penutup · Gallery Walk Lihat Karya Teman', tujuan: 'Guru memandu siswa melihat karya teman.' },
    { layar: 11, judul: 'Penutup · Dua Suara Baca ke Kelas', tujuan: 'Guru memandu dua siswa membagikan satu bagian dunia mereka.' },
    { layar: 12, judul: 'Penutup · Ritual Kepemilikan', tujuan: 'Guru memandu siswa menandai kepemilikan karya.' },
    { layar: 13, judul: 'Penutup · Closure Akhir Fase B', tujuan: 'Guru menutup seluruh perjalanan Fase B.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Tunggu sampai semua siswa duduk dan tenang.
UCAP: "Good morning, everyone."
AKSI: Tunggu respons semua siswa.
UCAP: "Sit down, please."
UCAP: "Listen."
AKSI: Jeda 5 detik.
UCAP: "Today, we finish Fase B together."`,
    bantuan: 'Jika ada siswa yang masih gaduh: jeda 3 detik dalam diam, pandang bagian kelas yang paling ramai, lanjut hanya setelah mereka berhenti.',
    cue    : 'Jangan terburu-buru dari Layar 0.',
    darurat: null,
  },

  // SKENARIO
  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,
      langkah: [

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tepuk tangan dua kali untuk menarik perhatian.
UCAP: "Let's go back. All the way."
UCAP: "TP04, you wrote about who you are and where you live."
UCAP: "TP08, you wrote about your week. Every day."
UCAP: "TP15, you wrote about your country. Indonesia."
UCAP: "TP20, you wrote about your yesterday. Your story."
UCAP: "TP21, you read posters and schedules. You made your own."
AKSI: Jeda 1 detik.
UCAP: "Today, you put it all together. One page. Your world."
👂 LISTEN FIRST
AKSI: Ucapkan chant dengan ritme ketukan meja.
UCAP: "Who am I, where do I live, go!"
UCAP: "What's my week, what's my country, go!"
UCAP: "Yesterday I went, I played, I ate, go!"
UCAP: "My world story, let's make it, go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua lebih pelan lagi.
UCAP: "Say it with me!"
UCAP: "Who am I, where do I live, go!"
UCAP: "What's my week, what's my country, go!"
UCAP: "Yesterday I went, I played, I ate, go!"
UCAP: "My world story, let's make it, go!"`,
          bantuan     : 'Jika siswa tidak hafal semua kata: itu normal, tujuan chant adalah reconnect emosional, bukan akurasi.',
          cue         : 'Putaran kedua chant lebih pelan, bukan lebih cepat. Perlambatan tempo adalah sinyal penutup.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri kembali di depan kelas.
AKSI: Turunkan volume suara.
UCAP: "Today, one project. One page. Your world."
AKSI: Jeda 1 detik.
UCAP: "What is your world? Your job? Your food? Your family? Your sport?"
UCAP: "Your daily routine? Your neighborhood? Your celebration?"
AKSI: Tulis "MY WORLD STORY" di papan tulis.
AKSI: Tulis "Choose three parts of your world" di bawahnya di papan tulis.
AKSI: Tulis "Write and draw, your way" di bawahnya di papan tulis.
AKSI: Tulis "No two stories will be the same" di bawahnya di papan tulis.
UCAP: "Three parts, minimum. As many as you want, maximum."
UCAP: "You choose. You decide. This is your Fase B, your way."`,
          bantuan     : null,
          cue         : 'Keragaman output adalah tujuan layar ini. Tidak ada dua cerita yang sama.',
          darurat     : null,
          diferensiasi: null,
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,
      langkah: [

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan kertas A4 kosong, satu per siswa.
UCAP: "Before you write, think. What are the three most important parts of your world?"
UCAP: "Close your eyes for ten seconds. Think."
AKSI: Jeda 10 detik.
UCAP: "Open. What came to mind?"
AKSI: Tunjuk tiga sampai empat siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Good. Write those three words on the corner of your paper. Not yet a story, just three words."
AKSI: Beri waktu 1 menit.
UCAP: "Look at what you wrote. That is the beginning of your world story."`,
          bantuan     : 'Jika siswa mengatakan tidak tahu harus menulis apa: tunjuk papan tulis, tanyakan "Do you play a sport? Do you celebrate Eid? What did you eat yesterday?", lalu minta mereka menulis salah satu jawaban.',
          cue         : 'Jeda sepuluh detik sebelum brainstorm tidak diisi guru. Ruang berpikir ini menghasilkan cerita yang lebih dalam.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjukkan lembar contoh "My World Story" guru yang sudah disiapkan ke semua siswa.
AKSI: Tempel lembar contoh "My World Story" di papan tulis.
UCAP: "Look at my World Story. Three parts. Sport, food, yesterday."
UCAP: "Each part, a few sentences. A small drawing if you want."
UCAP: "Is this the only way? No. You can choose different parts."
UCAP: "Family? Celebration? Neighborhood? Your choice."
UCAP: "Now, yours."`,
          bantuan     : 'Jika siswa tampak kewalahan: tunjuk hanya bagian pertama, ucapkan "Cukup satu bagian dulu. Selesaikan itu, baru tambah bagian lain.".',
          cue         : 'Lembar contoh guru sudah disiapkan sebelum kelas. Lembar ini memakai kosakata dari tiga kluster berbeda.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, look at your three words. Plan your page."
UCAP: "How will you divide your paper? Three boxes? Three columns? Top and bottom?"
UCAP: "You decide."
AKSI: Beri waktu dua menit untuk membagi kertas.
UCAP: "Write a title for each part. Just the title, not yet the story."`,
          bantuan     : 'Jika siswa bingung membagi kertas: tunjuk lembar contoh guru di papan tulis, ucapkan "You can divide like mine, three parts. Or different.".',
          cue         : 'Tata letak halaman adalah bagian sah dari produksi teks multimodal.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, create. Write your world. Use everything you know."
AKSI: Beri penjelasan bahwa siswa boleh memakai Bahasa Indonesia untuk kata yang belum diketahui.
UCAP: "Your story, your language, your way."
AKSI: Tulis "Part 1: title - write sentences and draw if you want" di papan tulis.
AKSI: Tulis "Part 2: title - write sentences and draw if you want" di papan tulis.
AKSI: Tulis "Part 3: title - write sentences and draw if you want" di papan tulis.
AKSI: Mundur dari depan kelas.
AKSI: Pantau pekerjaan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa mencampur Bahasa Indonesia: terima, tulis versi Inggrisnya di pojok papan tulis tanpa komentar jika diminta.',
          cue         : 'Yang dinilai bukan akurasi bahasa, melainkan keberanian menceritakan dunia sendiri. Siswa yang belum selesai boleh melanjutkan saat Layar 7.',
          darurat     : 'Jika setelah 5 menit lebih dari separuh kelas belum menulis kalimat pertama → tunjuk lembar contoh guru, minta semua siswa menyalin satu kalimat dari bagian yang mereka sukai sebagai titik awal.',
          diferensiasi: {
            perluSupport: 'Cukup dua bagian dengan dua kalimat masing-masing.',
            sudahBisa   : 'Buat tiga bagian atau lebih, variasikan kosakata lintas kluster, lalu tambah kalimat opini "I think something because something.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Lanjutkan memantau pekerjaan semua siswa dari Layar 6.
UCAP: "Keep writing. I will come to you."
AKSI: Kunjungi tiap meja siswa.
AKSI: Baca dua sampai tiga kalimat tiap siswa dalam diam.
AKSI: Lanjutkan penilaian formatif untuk siswa yang belum dinilai.
AKSI: Untuk siswa yang sudah punya minimal satu kalimat Bahasa Inggris, angguk, ucapkan pelan "Good, keep going.".
AKSI: Untuk siswa yang halamannya masih kosong, tunjuk tiga kata brainstorm di sudut kertas, ucapkan pelan "Start with your first word. Write one sentence.".`,
          bantuan     : 'Jika menemukan siswa yang hanya menggambar tanpa menulis: duduk di sebelahnya, tunjuk gambar mereka, tanyakan "What is this?", setelah mereka menjawab lisan ucapkan "Write that word here.".',
          cue         : 'Cek satu hal saja: apakah siswa memproduksi sesuatu yang mencerminkan dunia mereka dalam Bahasa Inggris. Panjang, grammar, dan kerapian tidak dinilai.',
          darurat     : 'Jika menit ke-56 tercapai sebelum Layar 7 selesai → hentikan berkeliling, lewati Layar 8, Layar 9, dan Layar 10, langsung ke Layar 11.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Stop. Put your pen down."
AKSI: Jeda 3 detik.
AKSI: Tunggu semua pena diletakkan.
UCAP: "Read your World Story from the beginning. Just for yourself."
AKSI: Jeda 30 detik.
UCAP: "Find one sentence, the one you are most proud of. Underline it."
AKSI: Jeda 20 detik.
UCAP: "That sentence is the heart of your world."`,
          bantuan     : 'Jika siswa tampak bingung: bisikkan pelan "Kalimat mana yang paling kamu banggakan? Garis bawahi itu.".',
          cue         : 'Kalimat terbaik boleh Bahasa Inggris atau campuran. Ini momen privat.',
          darurat     : 'Jika waktu tersisa kurang dari 15 menit → lewati layar ini, langsung ke Layar 9.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Show your partner your World Story. Read one part, or show one drawing."
UCAP: "Partner, say: I like your world because you love football."
AKSI: Beri waktu tiga menit, masing-masing 90 detik per arah.
AKSI: Berkeliling dan dengarkan tanpa menyela.
UCAP: "Good. You can add one more thing if you want."
AKSI: Beri waktu 1 menit untuk tambahan.`,
          bantuan     : 'Jika partner tidak tahu harus berkata apa: berikan contoh, ucapkan "You can say: I like your world because you love football, or because your food is delicious.".',
          cue         : 'Menunjukkan satu gambar setara dengan membacakan satu bagian.',
          darurat     : [
            'Jika waktu tersisa kurang dari 10 menit → lewati layar ini, langsung ke Layar 10.',
            'Jika peer sharing menjadi gaduh dalam satu menit → ucapkan "Okay. Back to your own paper.", langsung ke Layar 10.',
          ],
          diferensiasi: null,
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,
      langkah: [

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Put your World Story on your desk."
UCAP: "Walk around. Look at two classmates' stories."
UCAP: "Find one part of their world that is different from yours."
AKSI: Beri waktu tiga menit untuk gallery walk.
UCAP: "Come back to your seat. What world did you find?"
AKSI: Tunjuk dua siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika ruang kelas tidak memungkinkan siswa bergerak: minta siswa menunjukkan karya ke teman di sebelahnya.',
          cue         : 'Mencari bagian yang berbeda memperkuat keunikan cerita tiap siswa.',
          darurat     : 'Jika waktu tersisa kurang dari 10 menit → lewati layar ini, langsung ke Layar 11.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta semua siswa meletakkan pena.
AKSI: Berdiri kembali di depan kelas.
UCAP: "I want to hear two worlds today."
UCAP: "Who wants to share one part of their story?"
AKSI: Tunggu sukarelawan selama 5 detik.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
AKSI: Minta siswa itu membacakan atau menunjukkan satu bagian ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What part of their world was that?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk siswa lain yang dunianya berbeda dari siswa pertama.
AKSI: Minta siswa itu membacakan atau menunjukkan satu bagian ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "And this world, what is special about it?"
AKSI: Tunggu respons semua siswa.
UCAP: "Two different worlds. Both are real. Both are beautiful."`,
          bantuan     : 'Jika tidak ada sukarelawan setelah 10 detik: panggil nama satu siswa yang menulis dengan baik dari observasi Layar 7, ucapkan dengan hangat "I read your world story. Can you share one part?".',
          cue         : 'Beri jeda setelah kata "beautiful". Pilih siswa kedua yang dunianya berbeda dari siswa pertama.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa memegang lembar "My World Story" mereka.
UCAP: "Write your name, big, at the top of your page."
AKSI: Beri waktu 30 detik.
UCAP: "This story, this is yours."
UCAP: "Nobody else has the same world."
AKSI: Jeda 5 detik.
UCAP: "Nobody else has your family, your food, your sport, your yesterday."
UCAP: "Nobody else has written exactly this."`,
          bantuan     : null,
          cue         : 'Kalimat "Nobody else has the same world." merangkum seluruh Fase B dalam satu kalimat.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa menyimpan lembar kerja di dalam tas.
AKSI: Turunkan volume suara.
UCAP: "You started Fase B with Good morning, and library, and canteen."
UCAP: "Now, you can describe your neighborhood."
UCAP: "You can talk about your schedule, your food, your celebrations."
UCAP: "You can give directions. You can tell stories about yesterday."
UCAP: "And today, you wrote your world story. In English."
AKSI: Jeda 5 detik.
UCAP: "That is not a small thing."
UCAP: "That is everything."
AKSI: Jeda 3 detik.
UCAP: "Goodbye, everyone."
AKSI: Tunggu semua siswa menjawab salam.`,
          bantuan     : null,
          cue         : 'TP-22 adalah TP terakhir Fase B. Penutup ini terasa seperti selesai, bukan transisi, dan tidak ada teaser TP berikutnya.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → biarkan siswa merapikan meja dalam keheningan, jangan tambahkan aktivitas apa pun.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B22;
