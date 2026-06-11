const TP_B12 = {

  // METADATA
  id     : 'tp-b12',
  nomor  : 12,
  kelas  : 4,
  nama   : 'Jobs and Community Helpers',
  tema   : 'Mengenal profesi anggota komunitas dan mendeskripsikan pekerjaan mereka',
  kluster: 'D — Komunitas, Budaya, dan Dunia',
  jenis  : 'Biasa',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebutkan nama dua profesi (doctor dan farmer) dan tempat kerja masing-masing.',
    'Peserta didik dapat menggunakan pola "She works at..." untuk mendeskripsikan tempat kerja seseorang.',
    'Peserta didik dapat menulis deskripsi lengkap satu profesi menggunakan struktur She is/works/helps/has... dan kalimat "because."',
  ],
  vocab     : ['mother', 'father', 'eyes', 'hands', 'feet', 'healthy', 'doctor', 'farmer', 'She works at...', 'because'],
  persiapan : [
    'Gambar dokter di klinik atau rumah sakit, disiapkan sebelum kelas dimulai, untuk Layar 3, Layar 4, dan Layar 5.',
    'Gambar petani di sawah atau ladang, disiapkan sebelum kelas dimulai, untuk Layar 3, Layar 4, dan Layar 5.',
    'Lembar kerja siswa satu per siswa, berisi template deskripsi profesi dengan baris nama, profesi, tempat kerja, She helps, She uses, dan kalimat because, di meja guru sebelum dibagikan.',
    'Papan tulis dan spidol untuk menulis pola She works at dan kalimat deskripsi di Layar 4 dan Layar 6.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi', tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi TP-11 dan Chant Profesi', tujuan: 'Guru menghubungkan TP-11 dan menyalakan energi lewat chant profesi.' },
    { layar:  2, judul: 'Pembuka · Reactivation Family dan Body Parts', tujuan: 'Guru meninjau anggota keluarga dan bagian tubuh.' },
    { layar:  3, judul: 'Inti · Introduksi Doctor dan Farmer', tujuan: 'Guru memperkenalkan dua profesi.' },
    { layar:  4, judul: 'Inti · Introduksi She Works At', tujuan: 'Guru memperkenalkan pola She works at.' },
    { layar:  5, judul: 'Inti · Drill Profesi dan Tempat Kerja', tujuan: 'Guru memimpin drill profesi dan tempat kerja.' },
    { layar:  6, judul: 'Inti · Modeling Kalimat Deskripsi Profesi Lengkap', tujuan: 'Guru memodelkan deskripsi profesi lengkap.' },
    { layar:  7, judul: 'Inti · Pair Practice Deskripsikan Satu Profesi', tujuan: 'Guru memandu latihan mendeskripsikan profesi berpasangan.' },
    { layar:  8, judul: 'Inti · Writing Individual Profesi yang Saya Kagumi', tujuan: 'Guru memandu siswa menulis tentang satu profesi.' },
    { layar:  9, judul: 'Inti · Berkeliling dan Review Tulisan', tujuan: 'Guru meninjau hasil tulisan dan menguatkan pola because.' },
    { layar: 10, judul: 'Penutup · Review dan Hapus Papan', tujuan: 'Guru mengonsolidasi profesi dan pola lalu menghapus papan tulis.' },
    { layar: 11, judul: 'Penutup · Closure Emosional dan Teaser TP-13', tujuan: 'Guru menutup sesi dengan refleksi dan teaser TP-13.' },
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
UCAP: "We start now."`,
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
UCAP: "Last time, we talked about healthy habits. I eat vegetables because they are healthy. I exercise because it makes me strong."
UCAP: "Who helps us stay healthy when we are sick?"
AKSI: Tunggu respons semua siswa.
UCAP: "A doctor. And who grows the healthy food we eat, the rice, the vegetables?"
AKSI: Tunggu respons semua siswa.
UCAP: "Today, we learn about people in our community. The jobs they do. The places they work."
👂 LISTEN FIRST
AKSI: Ucapkan chant dengan ritme ketukan meja.
UCAP: "Doctor, farmer, they help us, go!"
UCAP: "She works hard, every day, go!"
UCAP: "Community helpers, all around, go!"
UCAP: "Let's learn their jobs, let's go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "Doctor, farmer, they help us, go!"
UCAP: "She works hard, every day, go!"
UCAP: "Community helpers, all around, go!"
UCAP: "Let's learn their jobs, let's go!"`,
          bantuan     : 'Jika siswa tidak hafal chant: tunjukkan gestur fisik — tangan di dada untuk doctor, tangan menggemburkan tanah untuk farmer. Dua gestur konkret.',
          cue         : 'Ucapkan dua pertanyaan jembatan ke TP-11 sebelum chant dimulai, bukan sesudahnya.',
          darurat     : 'Jika kelas masih gaduh setelah chant selesai → tepuk tangan sekali, ucapkan "Freeze. Sit down. Listen.", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Family. Who is in your family?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "ibu" dengan ucapkan "How do we say 'ibu' in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "ayah" dengan ucapkan "How do we say 'ayah' in English?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Now, body parts. Doctors work with the body. Let's remember."
AKSI: Tunjuk mata sendiri.
UCAP: "What are these?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tangan sendiri.
UCAP: "These?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk kaki sendiri.
UCAP: "And these?"
AKSI: Tunggu respons semua siswa.
UCAP: "A doctor uses their eyes to look at patients."
UCAP: "A doctor uses their hands to help and heal."
UCAP: "That's a doctor's job. Today, we learn more."`,
          bantuan     : 'Jika kelas tidak merespons nama anggota tubuh: tunjuk bagian tubuh sendiri dan tunggu kelas menjawab secara spontan, beri waktu 3 detik per item.',
          cue         : null,
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
          teks        : `👂 LISTEN FIRST
AKSI: Tempel gambar dokter di papan tulis.
AKSI: Tunjuk gambar dokter.
UCAP: "Look at this person."
UCAP: "She is a doctor."
AKSI: Ucapkan "doctor" perlahan per suku kata.
AKSI: Jeda 3 detik.
UCAP: "A doctor helps sick people. She works at a hospital or a clinic."
UCAP: "She uses her hands and her eyes to help patients."
AKSI: Tempel gambar petani di papan tulis.
AKSI: Tunjuk gambar petani.
UCAP: "And this person."
UCAP: "She is a farmer."
AKSI: Ucapkan "farmer" perlahan per suku kata.
AKSI: Jeda 3 detik.
UCAP: "A farmer grows food. She works on a farm or in the fields."
UCAP: "She uses her hands to plant rice and vegetables."
AKSI: Tunjuk gambar dokter lalu gambar petani secara bergantian.
UCAP: "Doctor, she helps sick people. Farmer, she grows our food."
UCAP: "Both are important. Both help our community."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk gambar dokter.
UCAP: "Say it with me!"
UCAP: "She is a doctor."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar petani.
UCAP: "She is a farmer."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa bingung antara doctor dan farmer: tunjuk gambar dan ucapkan kontras singkat, doctor di rumah sakit, farmer di sawah. Dua kata per profesi cukup sebagai jangkar.',
          cue         : 'Kaitan dengan TP-11 perlu muncul di layar ini — petani menanam sayuran sehat yang kita makan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
UCAP: "Now, let's talk about where they work."
UCAP: "The doctor. She works at a hospital."
AKSI: Tulis "She works at a hospital." di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Tunjuk tulisan "She" di papan tulis.
AKSI: Tunjuk gambar dokter.
AKSI: Beri penjelasan bahwa "she" berarti dia perempuan, satu orang.
UCAP: "Not They work. That's many people. She works. One person."
UCAP: "The farmer. She works on a farm."
AKSI: Tulis "She works on a farm." di papan tulis.
UCAP: "And your mother. Where does she work?"
AKSI: Tunjuk dua sampai tiga siswa secara acak.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk gambar dokter.
UCAP: "Say it with me!"
UCAP: "The doctor. She works at a hospital."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar petani.
UCAP: "The farmer. She works on a farm."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika jawaban siswa belum berbentuk kalimat, ucapkan "She works at" dan ajak mereka melanjutkan. Jika siswa mengucapkan "She work" tanpa s, model kalimat yang benar lalu lanjut tanpa koreksi keras.',
          cue         : 'Tunjuk subjek "She" setiap kali "She works" diucapkan. Tegaskan perbedaan She works dan They work satu kali saja.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk gambar dokter.
UCAP: "Say it together!"
UCAP: "Doctor. Where does she work?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar petani.
UCAP: "Farmer. Where does she work?"
AKSI: Tunggu respons semua siswa.
UCAP: "Teacher. Where does she work?"
AKSI: Tunggu respons semua siswa.
AKSI: Sebut "hospital".
UCAP: "At a hospital. What job?"
AKSI: Tunggu respons semua siswa.
AKSI: Sebut "farm".
UCAP: "On a farm. What job?"
AKSI: Tunggu respons semua siswa.
AKSI: Sebut "school".
UCAP: "At a school. What job?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk satu siswa.
UCAP: "Where does a farmer work?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi pertanyaan individual untuk satu sampai dua siswa lain secara acak.`,
          bantuan     : 'Jika siswa diam lebih dari 5 detik: tunjuk gambar yang relevan, ucapkan "She works at a", tunggu siswa melengkapi.',
          cue         : null,
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima nama profesi atau tempat tanpa kalimat penuh.',
            sudahBisa   : 'Minta kalimat penuh dan satu detail, "She works at a hospital. She helps sick people.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Turunkan volume suara.
AKSI: Jeda 2 detik.
👂 LISTEN FIRST
UCAP: "Now, let's describe a person's job completely. Listen."
UCAP: "Her name is Sari."
AKSI: Tulis "Her name is Sari." di papan tulis.
UCAP: "She is a doctor."
AKSI: Tulis "She is a doctor." di papan tulis di bawahnya.
UCAP: "She works at a hospital."
AKSI: Tulis "She works at a hospital." di papan tulis di bawahnya.
UCAP: "She helps sick people."
AKSI: Tulis "She helps sick people." di papan tulis di bawahnya.
UCAP: "She uses her hands and her eyes."
AKSI: Tulis "She uses her hands and her eyes." di papan tulis di bawahnya.
UCAP: "She has kind eyes and strong hands."
AKSI: Tulis "She has kind eyes and strong hands." di papan tulis di bawahnya.
UCAP: "Her job is important because she keeps us healthy."
AKSI: Tulis "Her job is important because she keeps us healthy." di papan tulis di bawahnya.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat pertama di papan tulis.
UCAP: "Say it with me!"
AKSI: Tunjuk tiap kalimat satu per satu, tunggu semua siswa membaca bersama.
AKSI: Ulangi sekali, tunjuk tiap kalimat sambil semua siswa membaca sendiri.
UCAP: "Good. Now, you will write about one person's job."`,
          bantuan     : 'Jika kelas membaca tidak sinkron di putaran kedua: biarkan. Familiarisasi dengan tujuh kalimat deskripsi lebih penting daripada sinkronisasi.',
          cue         : 'Pertahankan tujuh kalimat deskripsi di papan tulis sampai Layar 8 selesai.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Describe one person's job to your partner. Use the structure on the board."
UCAP: "It can be a doctor, a farmer, a teacher, or anyone you know."
AKSI: Tanyakan siapa yang mau menjadi contoh.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "Describe a farmer. Start with: She is a farmer."
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Good. Can you add because?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Perfect. Now, your turn with your partner."
AKSI: Beri waktu empat menit, masing-masing dua menit per arah.
AKSI: Berkeliling dan dengarkan tanpa menyela.`,
          bantuan     : 'Jika satu pasang tidak bisa memulai: tunjuk scaffold di papan tulis, ucapkan kalimat pertama "She is a", tunggu mereka melengkapi.',
          cue         : null,
          darurat     : [
            'Jika waktu tersisa kurang dari 18 menit, atau energi kelas rendah → lewati layar ini, langsung ke Layar 8.',
            'Jika pair practice menjadi gaduh dalam satu menit → ucapkan "Okay. Take your pencil. Let\'s write.", langsung ke Layar 8.',
          ],
          diferensiasi: {
            perluSupport: 'Terima dua kalimat, "She is a doctor. She works at a hospital.".',
            sudahBisa   : 'Minta tambah kalimat because, "Her job is important because she keeps us healthy.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Okay. Take your pencil. Let's write."
AKSI: Jeda 3 detik.
AKSI: Bagikan lembar kerja, satu per siswa.
UCAP: "Write about one person. A real person. Your mother, your doctor, anyone you know."
UCAP: "Or write about a job you think is important."
👂 LISTEN FIRST
AKSI: Tulis contoh deskripsi di papan tulis: "Her name is Ani. She is a farmer. She works on a farm. She grows rice for our family."
UCAP: "Watch me. Her name is Ani. She is a farmer. She works on a farm. She grows rice for our family."
UCAP: "For a farmer: She uses her hands and her feet."
UCAP: "Now, your turn."
AKSI: Pantau penulisan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa bingung kapan memakai She atau He: ucapkan "She untuk perempuan, He untuk laki-laki", biarkan mereka memilih sesuai orang yang ditulis.',
          cue         : 'Template menyediakan pilihan She dan He. Siswa boleh menulis tentang laki-laki atau perempuan.',
          darurat     : 'Jika waktu tersisa 8 menit atau kurang saat layar ini dimulai → minta siswa hanya mengisi tiga baris pertama, nama, profesi, dan tempat kerja, langsung ke Layar 10 tanpa melalui Layar 9.',
          diferensiasi: {
            perluSupport: 'Izinkan mengisi hanya empat baris pertama.',
            sudahBisa   : 'Setelah template selesai, minta tambah satu kalimat bebas tentang cita-cita.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tulisan semua siswa.
AKSI: Pilih dua hasil tulisan siswa — satu yang menggunakan because dengan alasan kuat, satu yang memilih profesi tidak umum.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good. Let's hear from two friends."
AKSI: Minta siswa pertama membacakan deskripsi profesinya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What job did they write about?"
AKSI: Tunggu respons semua siswa.
UCAP: "Why is that job important?"
AKSI: Tunggu respons semua siswa.
AKSI: Tulis kalimat because dari deskripsi siswa pertama di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Minta siswa kedua membacakan deskripsi profesinya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What job did they write about?"
AKSI: Tunggu respons semua siswa.
UCAP: "Why is that job important?"
AKSI: Tunggu respons semua siswa.
AKSI: Tulis kalimat because dari deskripsi siswa kedua di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa yang diminta membaca menolak: ucapkan "That\'s okay.", lalu tunjuk siswa lain tanpa komentar tambahan.',
          cue         : 'Pilih siswa yang berbeda dari peserta Layar 5.',
          darurat     : 'Jika waktu tersisa kurang dari 10 menit → lewati layar ini, langsung ke Layar 10.',
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
          teks        : `AKSI: Minta siswa menyimpan lembar kerja di dalam tas.
AKSI: Berdiri kembali di depan kelas.
UCAP: "Good work today. Let's remember."
AKSI: Tanyakan padanan Inggris dari "dokter" dengan ucapkan "How do we say 'dokter' in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "petani" dengan ucapkan "How do we say 'petani' in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "dia bekerja di" dengan ucapkan "How do we say 'dia bekerja di' in English?"
AKSI: Tunggu respons semua siswa.
UCAP: "Give me two sentences about a doctor. Use She works and because."
AKSI: Tunggu respons semua siswa.
AKSI: Hapus kalimat because dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan kalimat because.
AKSI: Hapus tulisan "She works at a hospital" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "She works at a hospital".
AKSI: Hapus tulisan "She is a doctor" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "She is a doctor".
AKSI: Lepaskan gambar dokter dan gambar petani dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "doctor" dan "farmer".`,
          bantuan     : null,
          cue         : 'Hapus kalimat because sebelum kalimat deskripsi.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, one question."
UCAP: "Who is one person in your community that helps you or your family?"
AKSI: Tunjuk satu sampai dua siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Jeda 3 detik.
UCAP: "Every community needs helpers. Doctors. Farmers. Teachers. And many more."
UCAP: "Now you can talk about them in English."
UCAP: "Next time, we talk about food and culture. The food we love. The food that makes us who we are."
UCAP: "For now, goodbye, everyone."
AKSI: Tunggu semua siswa menjawab salam.`,
          bantuan     : null,
          cue         : 'Akhiri sesi dengan ritual goodbye, bukan instruksi administratif.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → biarkan siswa merapikan meja, jangan tambahkan aktivitas baru.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B12;
