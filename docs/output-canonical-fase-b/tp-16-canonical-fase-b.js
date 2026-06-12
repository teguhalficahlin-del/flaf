const TP_B16 = {

  // METADATA
  id     : 'tp-b16',
  nomor  : 16,
  kelas  : 4,
  nama   : 'Sports and Physical Activities',
  tema   : 'Mendeskripsikan olahraga dan aktivitas fisik menggunakan ekspresi kemampuan dan frekuensi',
  kluster: 'E — Aksi, Arah, dan Cerita',
  jenis  : 'Biasa',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menggunakan "always" dan "sometimes" untuk mendeskripsikan frekuensi aktivitas fisik dalam kalimat sederhana.',
    'Peserta didik dapat menggunakan pola "I can..." untuk mengekspresikan kemampuan fisik yang dimiliki.',
    'Peserta didik dapat menulis deskripsi olahraga favorit yang mencakup nama olahraga, frekuensi, kemampuan, dan alasan menyukainya.',
  ],
  vocab     : ['football', 'badminton', 'swimming', 'always', 'sometimes', 'I can...', 'legs', 'feet', 'arms', 'hands', 'healthy', 'exercise'],
  persiapan : [
    'Gambar football, disiapkan sebelum kelas dimulai, untuk Layar 3.',
    'Gambar badminton, disiapkan sebelum kelas dimulai, untuk Layar 3.',
    'Gambar renang, disiapkan sebelum kelas dimulai, untuk Layar 3.',
    'Lembar kerja siswa satu per siswa, berisi template deskripsi olahraga dengan baris nama olahraga, frekuensi, I like because, I can, bagian tubuh, dan satu olahraga kedua, di meja guru sebelum dibagikan.',
    'Papan tulis dan spidol untuk menulis always, sometimes, dan pola I can di Layar 4 dan Layar 6.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [
    { file: 'tp-b16-badminton.png',               label: 'Badminton' },
    { file: 'tp-b16-cycling.png',                 label: 'Cycling' },
    { file: 'tp-b16-football.png',                label: 'Football' },
    { file: 'tp-b16-martial-arts.png',            label: 'Martial Arts' },
    { file: 'tp-b16-running.png',                 label: 'Running' },
    { file: 'tp-b16-sports-survey-worksheet.png', label: 'Sports Survey Worksheet' },
    { file: 'tp-b16-swimming.png',                label: 'Swimming' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi', tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi TP-15 dan Chant Olahraga', tujuan: 'Guru menghubungkan TP-15 dan menyalakan energi lewat chant olahraga.' },
    { layar:  2, judul: 'Pembuka · Reactivation Hobbies dan Body Parts', tujuan: 'Guru meninjau hobi dan bagian tubuh.' },
    { layar:  3, judul: 'Inti · Introduksi Football dan Olahraga Lain', tujuan: 'Guru memperkenalkan tiga olahraga.' },
    { layar:  4, judul: 'Inti · Introduksi Always dan Sometimes', tujuan: 'Guru memperkenalkan dua kata frekuensi.' },
    { layar:  5, judul: 'Inti · Drill Frekuensi Olahraga', tujuan: 'Guru memimpin drill frekuensi aktivitas.' },
    { layar:  6, judul: 'Inti · Introduksi I Can', tujuan: 'Guru memperkenalkan ekspresi kemampuan I can.' },
    { layar:  7, judul: 'Inti · Modeling Kalimat Lengkap dan Baca Bersama', tujuan: 'Guru memodelkan deskripsi olahraga lengkap.' },
    { layar:  8, judul: 'Inti · Pair Practice Ceritakan Olahraga Favorit', tujuan: 'Guru memandu latihan bercerita olahraga berpasangan.' },
    { layar:  9, judul: 'Inti · Writing Individual Olahragaku', tujuan: 'Guru memandu siswa menulis olahraga favorit.' },
    { layar: 10, judul: 'Inti · Berkeliling dan Review Tulisan', tujuan: 'Guru meninjau hasil tulisan dan menguatkan pola I can.' },
    { layar: 11, judul: 'Penutup · Review dan Hapus Papan', tujuan: 'Guru mengonsolidasi kosakata dan pola lalu menghapus papan tulis.' },
    { layar: 12, judul: 'Penutup · Closure Emosional dan Teaser TP-17', tujuan: 'Guru menutup sesi dengan refleksi dan teaser TP-17.' },
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
UCAP: "Last time, we wrote about our country. Jobs, food, celebrations."
UCAP: "We talked about being healthy. Exercise is healthy, remember?"
AKSI: Jeda 1 detik.
UCAP: "Today, we talk about sports. What sports do you play? What can you do?"
👂 LISTEN FIRST
AKSI: Ucapkan chant dengan ritme ketukan meja.
UCAP: "Football, swimming, let's play, go!"
UCAP: "Always, sometimes, every day, go!"
UCAP: "I can run, I can jump, I can play, go!"
UCAP: "Sports and bodies, let's go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "Football, swimming, let's play, go!"
UCAP: "Always, sometimes, every day, go!"
UCAP: "I can run, I can jump, I can play, go!"
UCAP: "Sports and bodies, let's go!"`,
          bantuan     : 'Jika siswa tidak hafal chant: tunjukkan gestur fisik — kaki menendang untuk football, tangan mengayuh untuk swimming, loncat kecil untuk jump. Tiga gestur yang menyenangkan.',
          cue         : 'Ucapkan jembatan ke TP-15 sebelum chant dimulai, bukan sesudahnya.',
          darurat     : 'Jika kelas masih gaduh setelah chant selesai → tepuk tangan sekali, ucapkan "Freeze. Sit down. Listen.", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Hobbies. What do you like to do?"
AKSI: Tunjuk tiga sampai empat siswa.
AKSI: Tulis hobi yang disebut di papan tulis.
UCAP: "Reading. Do you like reading?"
AKSI: Tunggu respons semua siswa.
UCAP: "Swimming?"
AKSI: Tunggu respons semua siswa.
UCAP: "Playing. Playing what?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Now, body parts. Sports use the body."
AKSI: Tunjuk kaki sendiri.
UCAP: "What do you use to run?"
AKSI: Tunggu respons semua siswa.
AKSI: Buat gestur tangan mengayuh.
UCAP: "To swim?"
AKSI: Tunggu respons semua siswa.
UCAP: "To kick a ball?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Sports need the whole body. Today, we talk about sports we love and what we can do."`,
          bantuan     : 'Jika kelas tidak menyebut olahraga apa pun: buat gestur olahraga sederhana, menendang, berlari, melompat, lalu tanyakan "What sport is this?".',
          cue         : 'Pertahankan nama olahraga yang ditulis di papan tulis sampai Layar 9 selesai.',
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
AKSI: Tempel gambar football di papan tulis.
AKSI: Tunjuk gambar football.
UCAP: "Look at this sport."
UCAP: "This is football."
AKSI: Ucapkan "football" perlahan per suku kata.
AKSI: Jeda 3 detik.
UCAP: "In football, you kick a ball with your feet and legs."
UCAP: "Football is a popular sport in Indonesia and around the world."
AKSI: Tempel gambar badminton di papan tulis.
AKSI: Tunjuk gambar badminton.
UCAP: "And this, badminton."
AKSI: Ucapkan "badminton" perlahan per suku kata.
AKSI: Jeda 3 detik.
UCAP: "In badminton, you use your arms and hands to hit a shuttlecock."
AKSI: Tempel gambar renang di papan tulis.
AKSI: Tunjuk gambar renang.
UCAP: "And swimming. You use your arms, legs, and whole body."
AKSI: Tunjuk ketiga gambar secara bergantian.
UCAP: "Football, legs and feet. Badminton, arms and hands. Swimming, whole body."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk gambar football.
UCAP: "Say it with me!"
UCAP: "Football."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar badminton.
UCAP: "Badminton."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar renang.
UCAP: "Swimming."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa tidak familiar dengan badminton: buat gestur memukul shuttlecock dengan raket imajiner. Gestur ini cukup sebagai jangkar.',
          cue         : 'Kaitan ketiga olahraga dengan bagian tubuh dari Layar 2 perlu muncul di layar ini.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
UCAP: "Now, how often do you do sports?"
UCAP: "I play football every day. Always."
AKSI: Tulis "ALWAYS" di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Beri penjelasan bahwa "always" berarti selalu, setiap hari atau hampir setiap hari.
UCAP: "But swimming, only on weekends. Sometimes."
AKSI: Tulis "SOMETIMES" di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Beri penjelasan bahwa "sometimes" berarti kadang-kadang, tidak setiap hari.
AKSI: Tunjuk tulisan "ALWAYS" di papan tulis.
UCAP: "I always eat breakfast."
AKSI: Tulis "I always eat breakfast." di papan tulis.
AKSI: Tunjuk tulisan "SOMETIMES" di papan tulis.
UCAP: "I sometimes play football."
AKSI: Tulis "I sometimes play football." di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan "I always eat breakfast." di papan tulis.
UCAP: "Say it with me!"
UCAP: "I always eat breakfast."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "I sometimes play football." di papan tulis.
UCAP: "I sometimes play football."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk satu siswa.
UCAP: "Football. Always or sometimes for you?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi pertanyaan individual untuk satu sampai dua siswa lain.`,
          bantuan     : 'Jika siswa bingung membedakan always dan sometimes: tunjuk dua jari untuk always setiap hari, satu jari untuk sometimes kadang-kadang. Gestur sederhana yang membedakan frekuensi secara visual.',
          cue         : 'Contoh "I always eat breakfast" memakai rutinitas harian yang familiar sebelum diaplikasikan ke olahraga.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Good. Now, let's practice together. Fast."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
UCAP: "Eating breakfast. Always or sometimes?"
AKSI: Tunggu respons semua siswa.
UCAP: "Playing football. Always or sometimes?"
AKSI: Tunggu respons semua siswa.
UCAP: "Swimming. Always or sometimes?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk satu siswa.
UCAP: "Swimming. Always or sometimes for you?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Say the full sentence."
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi pertanyaan individual untuk dua siswa lain secara acak.
AKSI: Sebut frekuensi, minta semua siswa menyebut aktivitasnya.
UCAP: "Tell me something you always do."
AKSI: Tunggu respons semua siswa.
UCAP: "Tell me something you sometimes do."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa menjawab "always" untuk semua aktivitas: terima, lalu tanya dengan senyum "Really? Every day?", lanjut ke siswa berikutnya tanpa koreksi.',
          cue         : null,
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima satu kata, "always" atau "sometimes", tanpa kalimat penuh.',
            sudahBisa   : 'Minta kalimat penuh dan alasan, "I sometimes play football because I love it.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Turunkan volume suara.
AKSI: Jeda 2 detik.
👂 LISTEN FIRST
UCAP: "Now, one more thing. What can you do?"
AKSI: Buat gestur berenang.
UCAP: "I can swim."
AKSI: Tulis "I can swim." di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Beri penjelasan bahwa "I can" berarti saya bisa, kemampuan yang kamu punya.
AKSI: Buat gestur berlari.
UCAP: "I can run fast."
AKSI: Tulis "I can run fast." di papan tulis.
AKSI: Buat gestur menendang.
UCAP: "I can kick a ball."
AKSI: Tulis "I can kick a ball." di papan tulis.
UCAP: "Now, what can you do? Tell me."
AKSI: Tunjuk dua sampai tiga siswa secara acak.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan "I can swim." di papan tulis.
UCAP: "Say it with me!"
UCAP: "I can swim."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "I can run fast." di papan tulis.
UCAP: "I can run fast."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa mengucapkan "I can to swim" dengan to: jangan koreksi keras. Ucapkan kembali kalimat yang benar "I can swim", lalu lanjut.',
          cue         : '"I can" disampaikan sebagai ekspresi kemampuan yang konkret, bukan diurai secara grammar.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
UCAP: "Now, let's put it all together. Listen."
UCAP: "My favorite sport is football."
AKSI: Tulis "My favorite sport is football." di papan tulis.
UCAP: "I sometimes play football with my friends."
AKSI: Tulis "I sometimes play football with my friends." di papan tulis di bawahnya.
UCAP: "I like football because it is fun and exciting."
AKSI: Tulis "I like football because it is fun and exciting." di papan tulis di bawahnya.
UCAP: "I can kick a ball and run fast."
AKSI: Tulis "I can kick a ball and run fast." di papan tulis di bawahnya.
UCAP: "Football is good for my legs and my health."
AKSI: Tulis "Football is good for my legs and my health." di papan tulis di bawahnya.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat pertama di papan tulis.
UCAP: "Say it with me!"
AKSI: Tunjuk tiap kalimat satu per satu, tunggu semua siswa membaca bersama.
AKSI: Ulangi sekali, tunjuk tiap kalimat sambil semua siswa membaca sendiri.
UCAP: "Good. Now, you will write about your own favorite sport."`,
          bantuan     : 'Jika kelas membaca tidak sinkron: biarkan. Familiarisasi dengan lima kalimat lebih penting daripada sinkronisasi.',
          cue         : 'Pertahankan lima kalimat di papan tulis sampai Layar 9 selesai. Kaitan dengan TP-11 bahwa olahraga membuat tubuh sehat perlu muncul di layar ini.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Tell your partner about your favorite sport."
UCAP: "Use: My favorite sport is football. I sometimes play it. I can kick a ball. I like it because it is fun."
AKSI: Tanyakan siapa yang mau menjadi contoh.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "What is your favorite sport?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Always or sometimes?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "And what can you do?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Perfect. Now, your turn with your partner."
AKSI: Beri waktu empat menit, masing-masing dua menit per arah.
AKSI: Berkeliling dan dengarkan tanpa menyela.`,
          bantuan     : 'Jika satu pasang tidak bisa memulai: tunjuk scaffold di papan tulis, ucapkan kalimat pertama "My favorite sport is", tunggu mereka melengkapi.',
          cue         : null,
          darurat     : [
            'Jika waktu tersisa kurang dari 18 menit, atau energi kelas rendah → lewati layar ini, langsung ke Layar 9.',
            'Jika pair practice menjadi gaduh dalam satu menit → ucapkan "Okay. Take your pencil. Let\'s write.", langsung ke Layar 9.',
          ],
          diferensiasi: {
            perluSupport: 'Terima dua kalimat, "My favorite sport is football. I sometimes play it.".',
            sudahBisa   : 'Minta tambah kalimat because dan bagian tubuh, "I like it because it makes my legs strong.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Okay. Take your pencil. Let's write."
AKSI: Jeda 3 detik.
AKSI: Bagikan lembar kerja, satu per siswa.
UCAP: "Write about your favorite sport. Use always or sometimes. Use I can."
UCAP: "Your real sport, not random."
👂 LISTEN FIRST
AKSI: Tulis contoh di papan tulis: "My favorite sport is badminton. I sometimes play badminton with my family. I can hit the shuttlecock. It is good for my arms."
UCAP: "Watch me. My favorite sport is badminton. I sometimes play badminton with my family."
UCAP: "I can hit the shuttlecock. It is good for my arms."
UCAP: "For the second sentence, write how often you play your sport. Use always or sometimes."
UCAP: "Now, your turn."
AKSI: Pantau penulisan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa tidak suka olahraga apa pun: arahkan ke aktivitas fisik lain, berjalan kaki, menari, atau membantu di dapur, lalu minta mereka menulis tentang itu.',
          cue         : 'Terima olahraga atau aktivitas fisik apa pun yang dipilih siswa.',
          darurat     : 'Jika waktu tersisa 8 menit atau kurang saat layar ini dimulai → minta siswa hanya mengisi tiga baris pertama, nama olahraga, frekuensi, dan because, langsung ke Layar 11 tanpa melalui Layar 10.',
          diferensiasi: {
            perluSupport: 'Izinkan mengisi hanya empat baris pertama.',
            sudahBisa   : 'Setelah semua baris terisi, minta tambah satu kalimat, "I want to learn ___ because ___.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tulisan semua siswa.
AKSI: Pilih dua hasil tulisan siswa — satu yang menggunakan I can dengan kemampuan menarik, satu yang memilih olahraga tidak umum.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good. Let's hear from two friends."
AKSI: Minta siswa pertama membacakan tulisannya tentang olahraga favorit ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What sport was that?"
AKSI: Tunggu respons semua siswa.
UCAP: "What can they do?"
AKSI: Tunggu respons semua siswa.
AKSI: Minta siswa kedua membacakan tulisannya tentang olahraga favorit ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What sport was that?"
AKSI: Tunggu respons semua siswa.
UCAP: "What can they do?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa yang diminta membaca menolak: ucapkan "That\'s okay.", lalu tunjuk siswa lain tanpa komentar tambahan.',
          cue         : 'Pilih siswa yang berbeda dari peserta Layar 5.',
          darurat     : 'Jika waktu tersisa kurang dari 10 menit → lewati layar ini, langsung ke Layar 11.',
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
AKSI: Tanyakan padanan Inggris dari "selalu".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "kadang-kadang".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "saya bisa".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
UCAP: "Give me one sentence. I always or sometimes do something, and I can do something."
AKSI: Tunggu respons semua siswa.
AKSI: Hapus tulisan "I can kick a ball" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "I can kick a ball".
AKSI: Hapus tulisan "I sometimes play football" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "I sometimes play football".
AKSI: Hapus tulisan "SOMETIMES" dan "ALWAYS" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "sometimes" dan "always".
AKSI: Lepaskan gambar football, badminton, dan renang dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan tiap olahraga yang dilepas.`,
          bantuan     : null,
          cue         : 'Hapus kalimat I can sebelum kalimat I sometimes atau always.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, one question."
UCAP: "What sport or activity makes you feel the most alive?"
AKSI: Tunjuk satu sampai dua siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Jeda 3 detik.
UCAP: "Sports are not just exercise. They are part of who you are."
UCAP: "Next time, we talk about getting around. Directions. How to go from one place to another."
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

export default TP_B16;
