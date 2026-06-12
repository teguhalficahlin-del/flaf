const TP_B21 = {

  // METADATA
  id     : 'tp-b21',
  nomor  : 21,
  kelas  : 4,
  nama   : 'Reading: Multimodal Texts',
  tema   : 'Membaca dan memahami teks yang menggabungkan tulisan, gambar, dan tabel; memproduksi teks multimodal sederhana',
  kluster: 'Capstone',
  jenis  : 'Capstone',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat membaca dan memahami dua teks multimodal (poster kesehatan dan tabel jadwal mingguan) menggunakan strategi scanning dan skimming.',
    'Peserta didik dapat memproduksi teks multimodal sederhana — poster, jadwal, atau keduanya — menggunakan kosakata dari seluruh Fase B.',
    'Peserta didik dapat mengidentifikasi perbedaan format antara teks berbasis ikon (poster) dan teks berbasis tabel (jadwal) serta menjelaskan pilihan produksi mereka.',
  ],
  vocab     : ['healthy', 'exercise', 'food', 'sleep', 'football', 'always', 'went', 'ate', 'played', 'school', 'market', 'Monday', 'Wednesday', 'Saturday', 'first', 'then', 'after that', 'because', 'I like', 'I can', 'family', 'friends'],
  persiapan : [
    'Teks A "Stay Healthy!" format poster pada kertas besar, disiapkan sebelum kelas dimulai, berisi judul dan empat poin dengan ikon: olahraga dengan kalimat "I always play football with my friends", makanan sehat dengan kalimat "I eat rice and egg every day", tidur pukul sembilan dengan kalimat "My body needs rest", dan minum delapan gelas air dengan kalimat "It keeps you healthy", untuk Layar 4.',
    'Teks B "Budi\'s Week" format tabel pada kertas besar, disiapkan sebelum kelas dimulai, berisi kolom Day, Activity, dan Time dengan tujuh baris Monday sampai Sunday, termasuk Monday went to school pukul 7:00, Wednesday went to the market pukul 9:00, Saturday played football pukul 3:00, dan Sunday went to sleep early pukul 8:00, untuk Layar 7.',
    'Lembar produksi siswa satu per siswa, berupa kertas A4 kosong atau buku gambar tanpa template tercetak, di meja guru sebelum dibagikan, untuk Layar 9 dan Layar 10.',
    'Pensil warna atau spidol untuk siswa yang membuat poster, di meja guru.',
  ],
  media     : [],
  printables: [
    { file: 'tp-b21-budis-week-table.png',    label: 'Budis Week Table' },
    { file: 'tp-b21-stay-healthy-poster.png', label: 'Stay Healthy Poster' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi', tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Reconnect Seluruh Perjalanan Fase B', tujuan: 'Guru membangkitkan memori seluruh perjalanan Fase B lewat chant.' },
    { layar:  2, judul: 'Pembuka · Orientasi Capstone', tujuan: 'Guru menjelaskan dua teks dan pilihan produksi.' },
    { layar:  3, judul: 'Inti · Pre-Reading Teks A Prediksi Poster', tujuan: 'Guru membuka Teks A dengan prediksi.' },
    { layar:  4, judul: 'Inti · Read Teks A Poster Kesehatan', tujuan: 'Guru membaca poster kesehatan bersama kelas.' },
    { layar:  5, judul: 'Inti · Comprehension dan Strategi Scanning', tujuan: 'Guru memandu scanning poster untuk informasi spesifik.' },
    { layar:  6, judul: 'Inti · Pre-Reading Teks B Prediksi Jadwal', tujuan: 'Guru membuka Teks B dengan prediksi.' },
    { layar:  7, judul: 'Inti · Read Teks B Jadwal Mingguan Budi', tujuan: 'Guru membaca tabel jadwal bersama kelas.' },
    { layar:  8, judul: 'Inti · Comprehension dan Koneksi Teks-Tabel', tujuan: 'Guru membandingkan poster dan tabel lalu memandu pilihan.' },
    { layar:  9, judul: 'Inti · Pemilihan Proyek dan Planning Mandiri', tujuan: 'Guru memandu siswa memilih proyek dan merancang sendiri.' },
    { layar: 10, judul: 'Inti · Produksi Siswa Buat Teks Multimodal', tujuan: 'Guru memandu siswa memproduksi teks multimodal.' },
    { layar: 11, judul: 'Inti · Berkeliling dan Penilaian Formatif', tujuan: 'Guru berkeliling menilai dan mendampingi produksi.' },
    { layar: 12, judul: 'Inti · Gallery Walk Display dan Baca Karya Teman', tujuan: 'Guru memandu siswa melihat karya teman.' },
    { layar: 13, judul: 'Penutup · Refleksi Strategi Membaca', tujuan: 'Guru menamai strategi scanning dan skimming.' },
    { layar: 14, judul: 'Penutup · Closure Capstone dan Teaser TP-22', tujuan: 'Guru menutup sesi dengan refleksi dan teaser TP-22.' },
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
UCAP: "Today is different, and special."`,
    bantuan: 'Jika ada siswa yang masih gaduh: jeda 3 detik dalam diam, pandang bagian kelas yang paling ramai, lanjut hanya setelah mereka berhenti.',
    cue    : 'Jangan mulai Layar 1 sebelum minimal 80 persen siswa menatap ke depan.',
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
UCAP: "Let's remember. Everything."
UCAP: "TP01, my school. TP08, my weekly schedule. TP15, my country. TP20, my story."
UCAP: "Today, we use all of it."
👂 LISTEN FIRST
AKSI: Ucapkan chant dengan ritme ketukan meja.
UCAP: "I go to school, I eat healthy food, go!"
UCAP: "I play football, I went, I played, go!"
UCAP: "My schedule, my story, my country, go!"
UCAP: "All together, my world, let's go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "I go to school, I eat healthy food, go!"
UCAP: "I play football, I went, I played, go!"
UCAP: "My schedule, my story, my country, go!"
UCAP: "All together, my world, let's go!"`,
          bantuan     : 'Jika siswa tidak hafal semua kata: ulangi baris terakhir "All together, my world, let\'s go" jika perlu.',
          cue         : 'Chant ini membangkitkan rasa sudah jauh berjalan. Tiap baris mewakili satu kluster Fase B.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri kembali di depan kelas.
AKSI: Turunkan volume suara.
UCAP: "Today, two texts. Two different types."
UCAP: "Text one, a poster. It has pictures and words."
UCAP: "Text two, a schedule. It has a table and words."
UCAP: "After we read, you choose what to make."
AKSI: Tulis "TODAY:" di papan tulis.
AKSI: Tulis "1. Read two texts" di bawahnya di papan tulis.
AKSI: Tulis "2. Choose: Poster, Schedule, or Both" di bawahnya di papan tulis.
AKSI: Tulis "3. Make your own" di bawahnya di papan tulis.
UCAP: "No one tells you which one. You decide."`,
          bantuan     : null,
          cue         : 'Pilihan datang setelah membaca, bukan sebelum. Eksposur dulu, pilihan kemudian.',
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
          teks        : `AKSI: Tulis "STAY HEALTHY!" di papan tulis.
UCAP: "Look at this title. Text one is called Stay Healthy."
UCAP: "What do you think it talks about?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk dua sampai tiga siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "What words do you expect to see?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Let's find out."`,
          bantuan     : 'Jika siswa tidak bisa menebak isi teks: tunjuk judul, ucapkan "Stay Healthy. What makes you healthy? Food? Sleep? Exercise?".',
          cue         : 'Pre-reading prediksi cukup dua pertanyaan dan satu menit.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tempel Teks A "Stay Healthy!" di papan tulis.
👂 LISTEN FIRST
UCAP: "Listen. I will read the poster."
AKSI: Baca tiap baris poster dengan penekanan pada tiap kalimat kutipan.
🗣 TOGETHER
AKSI: Ajak semua siswa membaca bersama.
AKSI: Tunjuk poster di papan tulis.
UCAP: "Read it together with me."
UCAP: "Say it with me!"
AKSI: Tunggu semua siswa membaca bersama.
UCAP: "What is this poster about? One word?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : null,
          cue         : 'Poster menggabungkan instruksi singkat dan kalimat kutipan personal. Keduanya sudah dikenal dari TP-11 dan TP-16.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, I have a question. Don't read the whole poster. Just scan. Find the answer fast."
UCAP: "What time should you sleep? Scan."
AKSI: Tunggu respons semua siswa.
UCAP: "What sport is mentioned? Scan."
AKSI: Tunggu respons semua siswa.
UCAP: "How many glasses of water? Scan."
AKSI: Tunggu respons semua siswa.
UCAP: "That is called scanning. Reading quickly to find specific information. You already know how to do this."
UCAP: "Now, what is your favorite part of this poster? Why?"
AKSI: Tunjuk dua sampai tiga siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika siswa tidak bisa scan dengan cepat: izinkan mereka membaca kalimat yang relevan dulu, lalu jawab.',
          cue         : 'Strategi scanning dinamai dengan satu kalimat definisi, tidak lebih.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tulis "BUDI'S WEEK" di papan tulis.
UCAP: "Text two is different. It has a table."
UCAP: "Look at the title. Budi's Week. What do you think you will find?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk dua sampai tiga siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Good. Let's read."`,
          bantuan     : 'Jika siswa tidak bisa menebak isi tabel: tunjuk judul, ucapkan "Budi\'s Week. A week has days. What days do you know?".',
          cue         : 'Format tabel sudah dikenal dari TP-07 dan TP-08. Teks ini membangun kepercayaan diri.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tempel Teks B "Budi's Week" di papan tulis.
👂 LISTEN FIRST
UCAP: "On Monday, Budi went to school at seven."
AKSI: Tunjuk baris Monday di tabel.
UCAP: "On Tuesday, he played badminton at four."
AKSI: Tunjuk baris Tuesday di tabel.
UCAP: "And so on."
AKSI: Baca sisa baris tabel satu per satu sambil menunjuk tiap baris.
🗣 TOGETHER
AKSI: Ajak semua siswa membaca bersama.
AKSI: Tunjuk tabel di papan tulis.
UCAP: "Read the table together."
UCAP: "Say it together!"
AKSI: Tunggu semua siswa membaca baris tabel bergantian.`,
          bantuan     : 'Jika kelas membaca tidak sinkron: tunjuk satu baris, beri waktu, lalu pindah ke baris berikutnya.',
          cue         : 'Tabel memakai past tense dari TP-18 dan nama hari dari TP-07.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, questions about Budi's Week."
UCAP: "What did Budi do on Saturday?"
AKSI: Tunggu respons semua siswa.
UCAP: "What time did he go to sleep on Sunday?"
AKSI: Tunggu respons semua siswa.
UCAP: "Which day did he go to the market?"
AKSI: Tunggu respons semua siswa.
UCAP: "Now, compare. Poster and table. What is different?"
AKSI: Tunjuk dua sampai tiga siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Yes. Two different ways to share information. Both use English. Both you can read."
UCAP: "Now, which one do you want to make?"
AKSI: Jeda 3 detik.`,
          bantuan     : null,
          cue         : 'Jeda setelah pertanyaan pilihan adalah untuk berpikir, bukan untuk jawaban lisan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, you choose."
UCAP: "Choice A. Make a health poster, like Stay Healthy, but your version."
UCAP: "Choice B. Make a weekly schedule, like Budi's Week, but your week."
UCAP: "Choice C. Make both. A small poster and a small schedule."
UCAP: "Take one minute. Decide."
AKSI: Bagikan kertas A4 kosong, satu per siswa.
UCAP: "Write your name. Write your choice. Then plan. What will you put in it?"
AKSI: Beri waktu tiga menit untuk planning dan setup.`,
          bantuan     : 'Jika siswa bingung harus pilih apa: tunjuk Teks A di papan tulis, ucapkan "Do you like this? Make yours.", atau tunjuk Teks B, ucapkan "Do you like this? Make yours.".',
          cue         : 'Tidak ada dua siswa yang harus membuat hal yang sama. Keragaman output adalah tanda Capstone berhasil.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Tanyakan "Kamu mau gambar atau tabel?", lalu bantu mereka setup di atas kertas.',
            sudahBisa   : 'Pilih Choice C atau tambah elemen ketiga, misalnya narasi singkat di bawah tabel.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, create. Use English. Use everything you know."
UCAP: "Poster: write four or five short sentences. Add a title. Draw icons if you want."
UCAP: "Schedule: write five to seven days. For each day, one activity and one time."
AKSI: Tulis "POSTER: title and four to five short sentences" di papan tulis.
AKSI: Tulis "SCHEDULE: Day, Activity in past tense, Time" di papan tulis.
AKSI: Mundur dari depan kelas.
AKSI: Pantau pekerjaan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa mencampur Bahasa Indonesia: tulis versi Inggrisnya di pojok papan tulis tanpa komentar.',
          cue         : 'Selama layar ini guru tidak mengajar. Kata yang tidak diketahui ditulis di pojok papan tulis tanpa komentar.',
          darurat     : 'Jika setelah 5 menit lebih dari separuh kelas masih belum mulai → tunjuk Teks A dan Teks B di papan tulis, minta semua siswa menyalin satu baris dari teks yang mereka pilih sebagai titik awal.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Lanjutkan memantau pekerjaan semua siswa dari Layar 10.
UCAP: "Keep working. I will come to you."
AKSI: Kunjungi tiap meja siswa.
AKSI: Lihat apa yang sudah dibuat tiap siswa.
AKSI: Lanjutkan penilaian formatif untuk siswa yang belum dinilai.
AKSI: Untuk siswa yang sudah punya minimal satu kalimat Bahasa Inggris, angguk, ucapkan pelan "Good, keep going.".
AKSI: Untuk siswa yang masih kosong, tunjuk pilihan mereka, ucapkan pelan "You chose poster. Write one sentence about health.".`,
          bantuan     : 'Jika menemukan siswa yang hanya menyalin teks kata per kata: duduk di sebelahnya, tunjuk satu poin teks, tanyakan "What about you? Do you exercise? Write that.".',
          cue         : 'Satu kalimat bermakna lebih bernilai dari sepuluh kalimat yang disalin persis.',
          darurat     : 'Jika waktu tersisa kurang dari 12 menit → lewati layar ini, langsung ke Layar 12.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Put your work on your desk, or hold it up."
UCAP: "Walk around. Look at two or three classmates' work."
UCAP: "Find one thing you like. Remember it."
AKSI: Beri waktu tiga menit untuk gallery walk.
UCAP: "Come back to your seat."
UCAP: "Who found something interesting? What did you see?"
AKSI: Tunjuk dua sampai tiga siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika ruang kelas tidak memungkinkan siswa bergerak: minta siswa menunjukkan karya ke teman di sebelahnya.',
          cue         : 'Gallery walk menunjukkan keragaman output. Tidak ada dua karya yang sama.',
          darurat     : 'Jika waktu tersisa kurang dari 10 menit → lewati layar ini, langsung ke Layar 13.',
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
          teks        : `AKSI: Minta siswa meletakkan karya di meja.
AKSI: Berdiri kembali di depan kelas.
UCAP: "Before we close, I want to ask about reading."
UCAP: "When I asked you to find the sleep time in the poster, you didn't read everything. You just looked for the answer. That is called scanning."
AKSI: Tulis "SCANNING - find specific information quickly" di papan tulis.
UCAP: "And when you looked at Budi's Week and understood the whole table in one minute, that is called skimming."
AKSI: Tulis "SKIMMING - understand the main idea quickly" di papan tulis.
UCAP: "You did both today. Without knowing the names."
UCAP: "These are reading skills. You will use them for the rest of your life."`,
          bantuan     : null,
          cue         : 'Layar ini memberi nama pada strategi yang sudah dilakukan siswa, bukan teori membaca baru.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa memegang karya mereka.
AKSI: Turunkan volume suara.
UCAP: "Look at what you made today."
AKSI: Jeda 5 detik.
UCAP: "You read a poster, and understood it."
UCAP: "You read a table, and understood it."
UCAP: "You made your own. Poster, schedule, or both."
UCAP: "Using English. Using everything from Fase B."
AKSI: Jeda 3 detik.
UCAP: "This is not a small thing."
UCAP: "Next time, one last project. The biggest one."
UCAP: "You will tell your whole world story. Everything you know, everything you are."
UCAP: "For now, goodbye, everyone."
AKSI: Tunggu semua siswa menjawab salam.`,
          bantuan     : null,
          cue         : 'Teaser TP-22 terdengar seperti undangan, bukan tugas. Akhiri sesi dengan ritual goodbye, bukan instruksi administratif.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → minta siswa merapikan meja dan menyimpan karya mereka, jangan tambahkan aktivitas baru.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B21;
