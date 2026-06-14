const TP_B02 = {

  // METADATA
  id     : 'tp-b02',
  nomor  : 2,
  kelas  : 3,
  nama   : 'Describing People',
  tema   : 'Mendeskripsikan penampilan dan sifat orang',
  kluster: 'A — Diri, Sekolah, dan Komunitas',
  jenis  : 'Biasa',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebutkan ciri penampilan seseorang (jenis rambut: curly/straight, warna rambut) dalam kalimat sederhana bahasa Inggris.',
    'Peserta didik dapat menggunakan struktur "She has..." untuk mendeskripsikan penampilan orang lain secara lisan.',
    'Peserta didik dapat menulis kalimat deskripsi sederhana tentang seseorang menggunakan struktur "She has..." dan kata sifat karakter "kind".',
  ],
  vocab     : ['curly', 'straight', 'kind', 'She has...', 'mother', 'father', 'eyes',
               'hands', 'red', 'black', 'brown', 'happy'],
  persiapan : [
    'Gambar atau foto anggota keluarga yang netral (ibu dan ayah), bukan foto siswa, disiapkan untuk Layar 2.',
    'Dua gambar kepala sederhana digambar di papan tulis saat Layar 3, satu berambut keriting dan satu berambut lurus.',
    'Lembar kerja siswa satu per siswa, berisi template kalimat deskripsi, di meja guru sebelum dibagikan.',
    'Papan tulis dan spidol untuk demo guru di Layar 3, Layar 6, dan Layar 8.',
    'Spidol warna hitam dan cokelat untuk Layar 4.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [
    { file: 'tp-b02-curly.png',                  label: 'Curly' },
    { file: 'tp-b02-describe-me-worksheet.png',  label: 'Describe Me Worksheet' },
    { file: 'tp-b02-funny.png',                  label: 'Funny' },
    { file: 'tp-b02-kind.png',                   label: 'Kind' },
    { file: 'tp-b02-long-hair.png',              label: 'Long Hair' },
    { file: 'tp-b02-short-hair.png',             label: 'Short Hair' },
    { file: 'tp-b02-short.png',                  label: 'Short' },
    { file: 'tp-b02-smart.png',                  label: 'Smart' },
    { file: 'tp-b02-straight.png',               label: 'Straight' },
    { file: 'tp-b02-tall.png',                   label: 'Tall' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi',              tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi TP-01 dan Chant Warna',          tujuan: 'Guru menghubungkan pelajaran lalu dan menyalakan energi lewat chant.' },
    { layar:  2, judul: 'Pembuka · Reactivation Family dan Body Parts',     tujuan: 'Guru meninjau kosakata keluarga, anggota tubuh, dan warna.' },
    { layar:  3, judul: 'Inti · Introduksi Curly dan Straight',             tujuan: 'Guru memperkenalkan dua jenis rambut.' },
    { layar:  4, judul: 'Inti · Drill Curly, Straight, dan Warna Rambut',   tujuan: 'Guru memimpin drill jenis dan warna rambut.' },
    { layar:  5, judul: 'Inti · Introduksi Kind',                           tujuan: 'Guru memperkenalkan sifat kind.' },
    { layar:  6, judul: 'Inti · Modeling Kalimat She Has',                  tujuan: 'Guru memodelkan kalimat deskripsi orang.' },
    { layar:  7, judul: 'Inti · Latihan Berpasangan Deskripsi Teman',       tujuan: 'Guru memandu latihan deskripsi berpasangan.' },
    { layar:  8, judul: 'Inti · Menulis Kalimat Deskripsi',                 tujuan: 'Guru memandu siswa menulis kalimat deskripsi.' },
    { layar:  9, judul: 'Inti · Berkeliling dan Review Tulisan',            tujuan: 'Guru meninjau hasil tulisan dan pola She has.' },
    { layar: 10, judul: 'Penutup · Review Cepat',                           tujuan: 'Guru mengonsolidasi kosakata inti.' },
    { layar: 11, judul: 'Penutup · Closure Emosional',                      tujuan: 'Guru menutup sesi dengan refleksi dan teaser TP-03.' },
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
    cue    : 'Jangan mulai Layar 1 sebelum minimal 80 persen siswa menatap ke depan. Ucapkan "Sit down" dan "Listen" dengan nada rutin, bukan instruksi baru.',
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
UCAP: "Last time, do you remember?"
UCAP: "We talked about our school."
UCAP: "Where do we read books?"
AKSI: Tunggu respons semua siswa.
UCAP: "Where do we eat?"
AKSI: Tunggu respons semua siswa.
UCAP: "And when you want to answer, what do you do?"
AKSI: Tunggu respons semua siswa.
UCAP: "Perfect."
UCAP: "Today, we talk about people."
UCAP: "Our friends and our family."
👂 LISTEN FIRST
AKSI: Ucapkan chant warna dengan ritme ketukan meja.
UCAP: "Red hair, black hair, brown hair, go!"
UCAP: "Big eyes, small eyes, kind heart, go!"
UCAP: "This is my friend, let's go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "Red hair, black hair, brown hair, go!"
UCAP: "Big eyes, small eyes, kind heart, go!"
UCAP: "This is my friend, let's go!"`,
          bantuan     : 'Jika siswa tidak hafal chant di putaran pertama: turunkan tempo, tunjuk diri sendiri saat mengucapkan "my friend".',
          cue         : 'Biarkan energi kelas naik selama chant.',
          darurat     : 'Jika kelas masih gaduh setelah chant selesai → tepuk tangan sekali, ucapkan "Freeze. Sit down. Listen.", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk gambar ibu.
UCAP: "Who is this?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar ayah.
UCAP: "And this?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Now, body parts."
AKSI: Tunjuk mata sendiri.
UCAP: "What are these?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tangan sendiri.
UCAP: "And these?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk benda berwarna merah di kelas.
UCAP: "What color is this?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk benda berwarna hitam di kelas.
UCAP: "And this?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika semua siswa tidak merespons "mother": tunjuk diri sendiri, ucapkan "My mother.", sebutkan padanan "ibu saya" satu kali, lalu ucapkan "Mother." dan tunggu echo.',
          cue         : 'Jangan berhenti di satu item lebih dari 5 detik. Jika siswa lupa sebuah kata, ucapkan sendiri lalu lanjut.',
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
AKSI: Buat gambar dua kepala sederhana di papan tulis.
AKSI: Buat gambar garis bergelombang di atas kepala pertama untuk rambut keriting.
AKSI: Buat gambar garis lurus di atas kepala kedua untuk rambut lurus.
AKSI: Tulis label "curly" di bawah kepala pertama.
AKSI: Tulis label "straight" di bawah kepala kedua.
AKSI: Tunjuk gambar rambut keriting.
UCAP: "Look at this."
UCAP: "This hair is curly."
UCAP: "Cur-ly."
AKSI: Jeda 3 detik.
AKSI: Tunjuk gambar rambut lurus.
UCAP: "And this one."
UCAP: "This hair is straight."
UCAP: "Straight."
AKSI: Jeda 3 detik.
AKSI: Tunjuk rambut sendiri.
UCAP: "My hair, is it curly or straight?"
AKSI: Tunggu respons semua siswa.
UCAP: "Now look at your own hair."
UCAP: "Is it curly or straight?"
AKSI: Jeda 3 detik.`,
          bantuan     : 'Jika siswa bingung membedakan curly dan straight: gambar spiral kecil di sebelah tulisan "curly" dan garis lurus horizontal di sebelah tulisan "straight".',
          cue         : 'Jangan tunjuk rambut siswa tertentu tanpa izin. Pakai rambut guru sendiri sebagai contoh utama.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk gambar rambut keriting.
UCAP: "This hair?"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar rambut lurus.
UCAP: "This hair?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar rambut keriting dan rambut lurus bergantian empat sampai lima kali.
AKSI: Warnai gambar rambut keriting dengan warna hitam.
AKSI: Warnai gambar rambut lurus dengan warna cokelat.
AKSI: Tunjuk gambar rambut keriting.
UCAP: "Curly, and what color?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar rambut lurus.
UCAP: "Straight, what color?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk satu siswa.
UCAP: "Your hair, curly or straight?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi pertanyaan individual untuk dua sampai tiga siswa secara acak.`,
          bantuan     : 'Jika siswa yang ditunjuk diam lebih dari 5 detik: tunjuk gambar rambut keriting lalu gambar rambut lurus, ucapkan "Like this, or like this?".',
          cue         : 'Bolak-balik dua gambar tanpa jeda panjang.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima jawaban satu kata "curly" atau "straight".',
            sudahBisa   : 'Minta kalimat "My hair is straight." atau "My hair is curly and black.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Tunjuk diri sendiri.
AKSI: Senyum lebar.
UCAP: "I help my students."
UCAP: "I listen to them."
UCAP: "I care about them."
AKSI: Jeda 3 detik.
AKSI: Tepuk dada sendiri.
UCAP: "I am kind."
AKSI: Jeda 3 detik.
UCAP: "Kind."
UCAP: "K-I-N-D."
UCAP: "Kind."
UCAP: "If someone drops their pencil, and you pick it up, you are kind."
UCAP: "If someone is sad, and you ask if they are okay, you are kind."
UCAP: "Is your friend kind?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good."
UCAP: "Our friends are kind."
AKSI: Tunjuk senyum di wajah sendiri.
UCAP: "Kind people make us happy."`,
          bantuan     : 'Jika siswa bingung dengan "kind": sebutkan padanan "baik hati" satu kali, lalu kembali ke Bahasa Inggris.',
          cue         : 'Ucapkan dua contoh konkret kind dengan jelas sebelum lanjut.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Buat gambar satu karakter perempuan di papan tulis.
AKSI: Tulis nama "Maya" di bawah gambar karakter.
UCAP: "This is Maya."
UCAP: "Good. Now, let's put it all together."
UCAP: "Listen."
UCAP: "I will describe Maya."
UCAP: "She has curly hair."
AKSI: Tulis "She has curly hair." di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Tunjuk tulisan di papan tulis.
AKSI: Tunjuk gambar karakter.
UCAP: "She has black hair."
AKSI: Tulis "She has black hair." di papan tulis.
UCAP: "She has big eyes."
AKSI: Tulis "She has big eyes." di papan tulis.
UCAP: "She is kind."
AKSI: Tulis "She is kind." di papan tulis.
AKSI: Baca keempat kalimat di papan tulis sekali.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Now, let's read together."
AKSI: Tunjuk keempat kalimat di papan tulis satu per satu.
UCAP: "Say it with me!"
AKSI: Tunggu respons semua siswa.
UCAP: "Good."
AKSI: Beri penjelasan bahwa "She has" dipakai untuk orang perempuan.
UCAP: "She has curly hair."
UCAP: "She has black eyes."
UCAP: "She has a kind heart."`,
          bantuan     : 'Jika semua siswa membaca tidak sinkron: turunkan tempo, tunjuk kata per kata di papan tulis dengan spidol sebagai metronom.',
          cue         : 'Pertahankan keempat kalimat di papan tulis sampai Layar 8 selesai. Jangan hapus sebelum semua siswa selesai menulis.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Look at your partner."
UCAP: "Look at their hair."
AKSI: Jeda 3 detik.
UCAP: "Now, say one sentence."
UCAP: "Use She has, or He has."
AKSI: Tanyakan siapa yang mau berdiri sebagai contoh.
AKSI: Minta siswa itu berdiri.
UCAP: "Can you stand up for a second?"
UCAP: "Everyone, look at your friend."
UCAP: "What can we say?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good."
UCAP: "Now, you try with your partner."
AKSI: Beri waktu tiga menit untuk latihan berpasangan.
AKSI: Berkeliling membentuk huruf U.
AKSI: Dengarkan tanpa menyela kecuali ada kekeliruan konsep besar.`,
          bantuan     : 'Jika satu pasang tidak tahu harus mulai: dekati, tunjuk rambut salah satu siswa, ucapkan "She has what kind of hair?", tunggu salah satu siswa melanjutkan.',
          cue         : null,
          darurat     : [
            'Jika waktu tersisa kurang dari 18 menit → lewati layar ini, langsung ke Layar 8.',
            'Jika latihan berpasangan menjadi gaduh dalam satu menit → tepuk tangan sekali, ucapkan "Freeze. Sit down.", langsung ke Layar 8.',
          ],
          diferensiasi: {
            perluSupport: 'Terima satu kalimat "She has curly hair.".',
            sudahBisa   : 'Minta dua kalimat atau lebih, termasuk "She is kind.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan lembar kerja, satu per siswa.
UCAP: "Write about one person."
UCAP: "Your friend, your mother, your sister, you choose."
UCAP: "Use the words on the board."
UCAP: "You can also use your own ideas."
👂 LISTEN FIRST
UCAP: "Watch me."
AKSI: Tulis "This is Maya." di papan tulis di atas keempat kalimat scaffold.
AKSI: Tunjuk kalimat "This is Maya." lalu keempat kalimat scaffold satu per satu.
UCAP: "This is Maya."
UCAP: "She has curly hair."
UCAP: "She has big eyes."
UCAP: "She is kind."
UCAP: "Now, you write about your person."
UCAP: "You have time."
AKSI: Berkeliling di antara meja siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa ragu memilih orang: bisikkan "Choose your mother, your friend, or a character from a book.", lalu lanjut.',
          cue         : 'Siswa boleh menulis tentang karakter fiksi atau tokoh buku, tidak harus teman sekelas. Jangan paksa siswa menulis tentang orang tertentu.',
          darurat     : [
            'Jika datang langsung dari Layar 6 → sebelum membagikan lembar kerja, ucapkan "Okay, let\'s take a breath. Good job, everyone.", lalu jeda 3 detik.',
            'Jika waktu tersisa 8 menit atau kurang saat layar dimulai → minta siswa hanya mengisi baris satu dan dua, langsung ke Layar 10.',
          ],
          diferensiasi: {
            perluSupport: 'Izinkan menyalin struktur dari papan tulis dan hanya mengganti nama dan satu adjektif.',
            sudahBisa   : 'Minta menambahkan satu kalimat bebas seperti "She likes reading." atau "She is my friend." setelah template selesai.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tulisan semua siswa.
AKSI: Pilih dua hasil tulisan siswa.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good."
UCAP: "Let's hear from two friends."
AKSI: Minta dua siswa membacakan kalimat mereka ke semua siswa.
UCAP: "Nice."
AKSI: Tulis kalimat yang baru dibacakan siswa di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Let's say it together."
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk pola "She has" di papan tulis.
AKSI: Jelaskan bahwa "She has" adalah dua kata yang selalu bersama, dan untuk "she" dipakai "has", bukan "have".
UCAP: "She has hair."
UCAP: "She has eyes."`,
          bantuan     : 'Jika siswa yang diminta membaca menolak: ucapkan "That\'s okay.", lalu tunjuk siswa lain tanpa komentar tambahan.',
          cue         : 'Jangan koreksi she dan he di depan kelas. Beri catatan lembut di kertas siswa.',
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
UCAP: "Good work today, everyone."
UCAP: "Let's remember."
AKSI: Tunjuk gambar rambut keriting di papan tulis.
UCAP: "How do we describe hair?"
AKSI: Tunggu respons semua siswa.
UCAP: "And how do we say it in a sentence?"
AKSI: Tunggu respons semua siswa.
UCAP: "And if someone is good and caring, what do we call them?"
AKSI: Tunggu respons semua siswa.
AKSI: Hapus tulisan di papan tulis satu per satu dengan urutan "curly", "straight", "kind", lalu "She has".
AKSI: Tunggu semua siswa mengucapkan setiap kata yang dihapus.`,
          bantuan     : null,
          cue         : 'Jaga ritme tetap tenang di layar ini. Ini konsolidasi, bukan drill.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, I want to say something."
UCAP: "Today you described people."
UCAP: "Your friends and your family."
UCAP: "That takes courage."
UCAP: "Good job."
AKSI: Jeda 5 detik.
UCAP: "One question, who did you write about today?"
AKSI: Tunjuk satu sampai dua siswa yang mau berbagi.
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Next time, we will talk about places."
UCAP: "Where do you live?"
UCAP: "What is near your house?"
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

export default TP_B02;
