const TP_B13 = {

  // METADATA
  id     : 'tp-b13',
  nomor  : 13,
  kelas  : 4,
  nama   : 'Food, Culture, and Choices',
  tema   : 'Mendeskripsikan makanan favorit dan budaya kuliner menggunakan ekspresi preferensi',
  kluster: 'D — Komunitas, Budaya, dan Dunia',
  jenis  : 'Biasa',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menggunakan adjektif rasa (spicy, sweet, salty) untuk mendeskripsikan makanan.',
    'Peserta didik dapat menggunakan pola "I like... because..." untuk menyatakan preferensi makanan dan alasannya.',
    'Peserta didik dapat menulis deskripsi makanan favorit lengkap termasuk nama, rasa, dan alasan menyukainya.',
  ],
  vocab     : ['rice', 'noodle', 'apple', 'banana', 'happy', 'hungry', 'rendang', 'spicy', 'sweet', 'salty', 'I like... because...'],
  persiapan : [
    'Gambar rendang, disiapkan sebelum kelas dimulai, untuk Layar 3.',
    'Gambar dua makanan lain seperti sate dan nasi goreng, disiapkan sebelum kelas dimulai, untuk Layar 2 dan Layar 3.',
    'Lembar kerja siswa satu per siswa, berisi template preferensi makanan dengan baris nama makanan, jenis, adjektif rasa, I like because, I usually eat it with, dan satu makanan kedua, di meja guru sebelum dibagikan.',
    'Papan tulis dan spidol untuk menulis adjektif rasa dan pola I like because di Layar 3, Layar 5, dan Layar 6.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [
    { file: 'tp-b13-gado-gado.png',                   label: 'Gado Gado' },
    { file: 'tp-b13-my-favorite-food-worksheet.png',  label: 'My Favorite Food Worksheet' },
    { file: 'tp-b13-nasi-goreng.png',                 label: 'Nasi Goreng' },
    { file: 'tp-b13-rendang.png',                     label: 'Rendang' },
    { file: 'tp-b13-sate.png',                        label: 'Sate' },
    { file: 'tp-b13-soto.png',                        label: 'Soto' },
    { file: 'tp-b13-tempeh.png',                      label: 'Tempeh' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi', tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi TP-12 dan Chant Makanan', tujuan: 'Guru menghubungkan TP-12 dan menyalakan energi lewat chant makanan.' },
    { layar:  2, judul: 'Pembuka · Reactivation Food dan Feelings', tujuan: 'Guru meninjau nama makanan dan perasaan.' },
    { layar:  3, judul: 'Inti · Introduksi Rendang dan Spicy', tujuan: 'Guru memperkenalkan rendang dan tiga adjektif rasa.' },
    { layar:  4, judul: 'Inti · Drill Adjektif Rasa', tujuan: 'Guru memimpin drill adjektif rasa.' },
    { layar:  5, judul: 'Inti · Introduksi I Like Because', tujuan: 'Guru menyambungkan I like dengan because.' },
    { layar:  6, judul: 'Inti · Modeling Kalimat Preferensi Lengkap', tujuan: 'Guru memodelkan deskripsi makanan favorit lengkap.' },
    { layar:  7, judul: 'Inti · Pair Practice Ceritakan Makanan Favorit', tujuan: 'Guru memandu latihan bercerita makanan favorit berpasangan.' },
    { layar:  8, judul: 'Inti · Writing Individual Makanan Favoritku', tujuan: 'Guru memandu siswa menulis makanan favorit.' },
    { layar:  9, judul: 'Inti · Berkeliling dan Review Tulisan', tujuan: 'Guru meninjau hasil tulisan dan menguatkan pola preferensi.' },
    { layar: 10, judul: 'Penutup · Review dan Hapus Papan', tujuan: 'Guru mengonsolidasi adjektif rasa dan pola lalu menghapus papan tulis.' },
    { layar: 11, judul: 'Penutup · Closure Emosional dan Teaser TP-14', tujuan: 'Guru menutup sesi dengan refleksi dan teaser TP-14.' },
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
UCAP: "Last time, we talked about jobs. Doctors, farmers."
UCAP: "A farmer grows food. What food does a farmer grow?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Today, we talk about that food. What we eat. What we love. And why."
👂 LISTEN FIRST
AKSI: Ucapkan chant dengan ritme ketukan meja.
UCAP: "Rice, noodle, bread, let's eat, go!"
UCAP: "Spicy, sweet, salty, yum, go!"
UCAP: "I like rendang because it's good, go!"
UCAP: "Food and culture, let's go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "Rice, noodle, bread, let's eat, go!"
UCAP: "Spicy, sweet, salty, yum, go!"
UCAP: "I like rendang because it's good, go!"
UCAP: "Food and culture, let's go!"`,
          bantuan     : 'Jika siswa tidak hafal chant: tunjukkan gestur fisik — tunjuk mulut untuk eat, kibaskan tangan di muka untuk spicy, usap perut untuk yum. Tiga gestur yang menyenangkan.',
          cue         : 'Ucapkan jembatan ke TP-12 sebelum chant dimulai, bukan sesudahnya.',
          darurat     : 'Jika kelas masih gaduh setelah chant selesai → tepuk tangan sekali, ucapkan "Freeze. Sit down. Listen.", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Name a food you like. Any food."
AKSI: Tunjuk tiga sampai empat siswa.
AKSI: Tulis nama makanan yang disebut di papan tulis.
UCAP: "Rice. Do you like rice?"
AKSI: Tunggu respons semua siswa.
UCAP: "Noodle?"
AKSI: Tunggu respons semua siswa.
UCAP: "Banana?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Now, feelings. When you are hungry, how do you feel?"
AKSI: Tunggu respons semua siswa.
UCAP: "When you eat your favorite food, how do you feel?"
AKSI: Tunggu respons semua siswa.
UCAP: "And when you eat something you don't like?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Food makes us feel things. Today, we talk about the food we love and why."`,
          bantuan     : 'Jika kelas tidak merespons pertanyaan feelings: ucapkan sambil buat ekspresi muka — wajah lapar untuk hungry, senyum lebar untuk happy, wajah cemberut untuk sad. Ekspresi fisik lebih cepat daripada penjelasan verbal.',
          cue         : 'Pertahankan nama makanan yang ditulis di papan tulis sampai Layar 8 selesai.',
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
AKSI: Tempel gambar rendang di papan tulis.
AKSI: Tunjuk gambar rendang.
UCAP: "Look at this."
UCAP: "This is rendang."
AKSI: Ucapkan "rendang" perlahan per suku kata.
AKSI: Jeda 3 detik.
UCAP: "Rendang is a traditional Indonesian food. It is made with meat and spices."
UCAP: "Rendang is spicy."
AKSI: Ucapkan "spicy" perlahan per suku kata.
AKSI: Tulis "SPICY" di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Beri penjelasan bahwa "spicy" berarti pedas, membuat mulut terasa panas.
UCAP: "Food can also be sweet."
AKSI: Tulis "SWEET" di papan tulis.
UCAP: "Or salty."
AKSI: Tulis "SALTY" di papan tulis.
AKSI: Tunjuk tulisan "SPICY", "SWEET", dan "SALTY" satu per satu.
UCAP: "Rendang, spicy. Cake, sweet. Chips, salty."
AKSI: Tunjuk salah satu nama makanan yang ditulis di papan tulis.
UCAP: "This one. Spicy, sweet, or salty?"
AKSI: Tunggu respons semua siswa.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan "SPICY" di papan tulis.
UCAP: "Say it with me!"
UCAP: "Spicy."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "SWEET" di papan tulis.
UCAP: "Sweet."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "SALTY" di papan tulis.
UCAP: "Salty."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa bingung membedakan spicy dan salty: buat gestur kibaskan tangan di muka untuk spicy, lalu tepuk bibir untuk salty. Dua gestur yang berbeda secara fisik.',
          cue         : 'Pertahankan ketiga adjektif rasa di papan tulis sampai Layar 8 selesai.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
UCAP: "Rendang. Spicy, sweet, or salty?"
AKSI: Tunggu respons semua siswa.
UCAP: "Ice cream?"
AKSI: Tunggu respons semua siswa.
UCAP: "Potato chips?"
AKSI: Tunggu respons semua siswa.
UCAP: "Candy?"
AKSI: Tunggu respons semua siswa.
UCAP: "Sambal?"
AKSI: Tunggu respons semua siswa.
AKSI: Sebut lima sampai enam makanan lain secara acak.
AKSI: Tunggu respons semua siswa setiap kali.
AKSI: Sebut adjektif rasa, minta semua siswa menyebut contoh makanannya.
UCAP: "Give me a spicy food."
AKSI: Tunggu respons semua siswa.
UCAP: "A sweet food."
AKSI: Tunggu respons semua siswa.
UCAP: "A salty food."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk satu siswa.
UCAP: "Your favorite food. Spicy, sweet, or salty?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi pertanyaan individual untuk satu sampai dua siswa lain.`,
          bantuan     : 'Jika siswa tidak bisa mengkategorikan makanan yang mereka sebut: terima jawabannya, lalu tanya "Is it hot in your mouth? Then spicy. Is it sweet? Then sweet.". Gunakan pengalaman rasa sebagai referensi.',
          cue         : null,
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima satu kata, "spicy" atau "sweet", tanpa kalimat penuh.',
            sudahBisa   : 'Minta kalimat, "Rendang is spicy and delicious.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Turunkan volume suara.
AKSI: Jeda 2 detik.
👂 LISTEN FIRST
UCAP: "Now, I like. Do you remember this from before?"
AKSI: Jeda 1 detik.
AKSI: Biarkan dua sampai tiga siswa menjawab dalam Bahasa apa pun.
UCAP: "Yes. I like reading. I like swimming. From Fase A."
UCAP: "Today, we use I like with food. And we add because."
UCAP: "I like rendang."
AKSI: Tulis "I like rendang." di papan tulis.
UCAP: "I like rendang because it is spicy."
AKSI: Tulis "I like rendang because it is spicy." di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Tunjuk tulisan "because" di papan tulis.
AKSI: Tunjuk tulisan "it is spicy" di papan tulis.
UCAP: "I like rice."
AKSI: Tulis "I like rice." di papan tulis.
UCAP: "I like rice because it makes me full."
AKSI: Tulis "I like rice because it makes me full." di papan tulis.
UCAP: "Now, your turn. What food do you like?"
AKSI: Tunjuk dua sampai tiga siswa secara acak.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan "I like rendang because it is spicy." di papan tulis.
UCAP: "Say it with me!"
UCAP: "I like rendang because it is spicy."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa kesulitan menemukan alasan because: tanya lebih spesifik "Is it spicy? Is it sweet? Does it make you happy?", setelah mereka memilih bantu bentuk "So, because it is spicy.".',
          cue         : '"I like" adalah frasa yang sudah dikenal dari Fase A, bukan kosakata baru di layar ini.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
UCAP: "Now, let's write about food we love. Listen."
UCAP: "My favorite food is rendang."
AKSI: Tulis "My favorite food is rendang." di papan tulis.
UCAP: "Rendang is a traditional Indonesian food."
AKSI: Tulis "Rendang is a traditional Indonesian food." di papan tulis di bawahnya.
UCAP: "It is spicy and delicious."
AKSI: Tulis "It is spicy and delicious." di papan tulis di bawahnya.
UCAP: "I like rendang because it reminds me of home."
AKSI: Tulis "I like rendang because it reminds me of home." di papan tulis di bawahnya.
UCAP: "I eat rendang with rice."
AKSI: Tulis "I eat rendang with rice." di papan tulis di bawahnya.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat pertama di papan tulis.
UCAP: "Say it with me!"
AKSI: Tunjuk tiap kalimat satu per satu, tunggu semua siswa membaca bersama.
AKSI: Ulangi sekali, tunjuk tiap kalimat sambil semua siswa membaca sendiri.
UCAP: "Good. Now, you will describe your own favorite food."`,
          bantuan     : 'Jika kelas membaca tidak sinkron: biarkan. Lima kalimat dengan because yang bermakna lebih penting daripada sinkronisasi.',
          cue         : 'Pertahankan lima kalimat preferensi di papan tulis sampai Layar 8 selesai.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Tell your partner about your favorite food."
UCAP: "Use: My favorite food is rendang. I like it because it is spicy. It is delicious."
AKSI: Tanyakan siapa yang mau menjadi contoh.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "What is your favorite food?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Is it spicy, sweet, or salty?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Good. Now say it with I like and because."
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Perfect. Now, your turn with your partner."
AKSI: Beri waktu empat menit, masing-masing dua menit per arah.
AKSI: Berkeliling dan dengarkan tanpa menyela.`,
          bantuan     : 'Jika satu pasang tidak bisa memulai: tunjuk daftar makanan di papan tulis, ucapkan "Choose one food. Which one do you like?", setelah mereka memilih arahkan "Now say: I like it because.".',
          cue         : null,
          darurat     : [
            'Jika waktu tersisa kurang dari 18 menit, atau energi kelas rendah → lewati layar ini, langsung ke Layar 8.',
            'Jika pair practice menjadi gaduh dalam satu menit → ucapkan "Okay. Take your pencil. Let\'s write.", langsung ke Layar 8.',
          ],
          diferensiasi: {
            perluSupport: 'Terima dua kalimat, "My favorite food is rice. I like it because it makes me full.".',
            sudahBisa   : 'Minta tambah konteks budaya, "It is a traditional Indonesian food.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Okay. Take your pencil. Let's write."
AKSI: Jeda 3 detik.
AKSI: Bagikan lembar kerja, satu per siswa.
UCAP: "Write about your favorite food. Your real food, not random."
UCAP: "Use the board and your own ideas."
👂 LISTEN FIRST
AKSI: Tulis contoh di papan tulis: "My favorite food is nasi goreng. It is a popular Indonesian food. It is salty and delicious. I like it because it is healthy and makes me happy."
UCAP: "Watch me. My favorite food is nasi goreng. It is a popular Indonesian food. It is salty and delicious."
UCAP: "I like it because it is healthy and makes me happy."
UCAP: "Now, your turn."
AKSI: Pantau penulisan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa menulis nama makanan dalam Bahasa Indonesia: terima, tulis nama Inggrisnya di pojok papan tulis jika diminta, jangan paksa terjemahan.',
          cue         : 'Terima makanan apa pun yang dipilih siswa selama struktur "I like ___ because ___" dipakai.',
          darurat     : 'Jika waktu tersisa 8 menit atau kurang saat layar ini dimulai → minta siswa hanya mengisi tiga baris pertama, nama makanan, adjektif rasa, dan karena, langsung ke Layar 10 tanpa melalui Layar 9.',
          diferensiasi: {
            perluSupport: 'Izinkan mengisi hanya empat baris pertama.',
            sudahBisa   : 'Setelah semua baris terisi, minta tambah satu kalimat, "This food is part of my culture because ___.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tulisan semua siswa.
AKSI: Pilih dua hasil tulisan siswa — satu yang menggunakan alasan because yang personal, satu yang menulis tentang makanan dengan konteks budaya.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good. Let's hear from two friends."
AKSI: Minta siswa pertama membacakan tulisannya tentang makanan favorit ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What food was that?"
AKSI: Tunggu respons semua siswa.
UCAP: "And why do they like it?"
AKSI: Tunggu respons semua siswa.
UCAP: "Is that food spicy, sweet, or salty?"
AKSI: Tunggu respons semua siswa.
AKSI: Minta siswa kedua membacakan tulisannya tentang makanan favorit ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What food was that?"
AKSI: Tunggu respons semua siswa.
UCAP: "And why do they like it?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa yang diminta membaca menolak: ucapkan "That\'s okay.", lalu tunjuk siswa lain tanpa komentar tambahan.',
          cue         : 'Pilih siswa yang berbeda dari peserta Layar 4.',
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
UCAP: "What is rendang?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "pedas".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "manis".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "asin".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
UCAP: "And how do we say we like something and give a reason?"
AKSI: Tunggu respons semua siswa.
UCAP: "Give me one sentence about your favorite food."
AKSI: Tunggu respons semua siswa.
AKSI: Hapus kalimat because dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan kalimat because.
AKSI: Hapus tulisan "I like rendang" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "I like rendang".
AKSI: Hapus tulisan "SPICY", "SWEET", dan "SALTY" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan tiap adjektif yang dihapus.
AKSI: Lepaskan gambar rendang dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "rendang".`,
          bantuan     : null,
          cue         : 'Hapus kalimat because sebelum adjektif dan nama makanan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, one question."
UCAP: "What food makes you feel most at home? The food that reminds you of family?"
AKSI: Tunjuk satu sampai dua siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Jeda 3 detik.
UCAP: "Food is culture. Food is memory. Food is family."
UCAP: "Now you can say that in English."
UCAP: "Next time, we talk about celebrations. Eid. Traditions. The special days when family comes together, and food is always part of it."
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

export default TP_B13;
