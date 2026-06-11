const TP_B01 = {

  // METADATA
  id     : 'tp-b01',
  nomor  : 1,
  kelas  : 3,
  nama   : 'My School Life',
  tema   : 'Mengenal tempat dan aturan di sekolah',
  kluster: 'A — Diri, Sekolah, dan Komunitas',
  jenis  : 'Biasa',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebutkan nama dan fungsi tempat di sekolah (library dan canteen) dalam kalimat sederhana bahasa Inggris.',
    'Peserta didik dapat menggunakan prosedur "raise your hand" secara konsisten saat ingin menjawab pertanyaan di kelas.',
    'Peserta didik dapat menulis kalimat sederhana tentang tempat di sekolah menggunakan kosakata library, canteen, dan raise your hand.',
  ],
  vocab     : ['library', 'canteen', 'raise your hand', 'pencil', 'book', 'sit down',
               'listen', 'write', 'read', 'open', 'bag'],
  persiapan : [
    'Gambar atau foto dua tempat, library dan canteen, terlihat jelas dari semua sudut kelas, disiapkan sebelum kelas masuk.',
    'Lembar kerja siswa satu per siswa, berisi tiga kalimat rumpang, di meja guru sebelum dibagikan.',
    'Papan tulis dan spidol untuk demo guru di Layar 2, Layar 3, Layar 8, dan Layar 9.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi',          tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Chant Reactivation',                 tujuan: 'Guru menyalakan energi lewat chant kosakata Fase A.' },
    { layar:  2, judul: 'Pembuka · Reactivation Tanya-Jawab',           tujuan: 'Guru meninjau kosakata lama lewat tanya jawab cepat.' },
    { layar:  3, judul: 'Inti · Introduksi Library dan Canteen',        tujuan: 'Guru memperkenalkan dua tempat baru di sekolah.' },
    { layar:  4, judul: 'Inti · Drill Kosakata Tempat',                 tujuan: 'Guru memimpin drill nama tempat di sekolah.' },
    { layar:  5, judul: 'Inti · Introduksi Raise Your Hand',            tujuan: 'Guru memperkenalkan prosedur mengangkat tangan.' },
    { layar:  6, judul: 'Inti · Praktik Raise Your Hand dalam Konteks', tujuan: 'Guru melatih raise your hand lewat tanya jawab.' },
    { layar:  7, judul: 'Inti · Reset dan Latihan Berpasangan',         tujuan: 'Guru memandu latihan tanya jawab berpasangan.' },
    { layar:  8, judul: 'Inti · Menulis Kalimat Sederhana',             tujuan: 'Guru memandu siswa mengisi tiga kalimat rumpang.' },
    { layar:  9, judul: 'Inti · Berkeliling dan Review Tulisan',        tujuan: 'Guru meninjau hasil tulisan dan mengeja kata sulit.' },
    { layar: 10, judul: 'Penutup · Review Cepat',                       tujuan: 'Guru mengonsolidasi tiga kosakata inti.' },
    { layar: 11, judul: 'Penutup · Closure Emosional',                  tujuan: 'Guru menutup sesi dengan refleksi singkat.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Tunggu sampai semua siswa duduk dan tenang.
UCAP: "Good morning, everyone."
AKSI: Tunggu respons semua siswa.
UCAP: "Sit down, please."
UCAP: "Eyes on me."
UCAP: "We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh: jeda 3 detik dalam diam, pandang bagian kelas yang paling ramai, lanjut hanya setelah mereka berhenti.',
    cue    : 'Jangan mulai Layar 1 sebelum minimal 80 persen kelas menatap ke depan.',
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
          teks        : `👂 LISTEN FIRST
AKSI: Tepuk tangan dua kali untuk menarik perhatian.
AKSI: Ucapkan chant dengan ritme ketukan meja.
UCAP: "Pencil, book, bag, let's go!"
UCAP: "Listen, write, read, let's go!"
UCAP: "We are in school, let's go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
AKSI: Ucapkan chant putaran pertama dengan tempo lambat.
UCAP: "Pencil, book, bag, let's go!"
UCAP: "Listen, write, read, let's go!"
UCAP: "We are in school, let's go!"
AKSI: Ucapkan chant putaran kedua dengan tempo cepat.
AKSI: Biarkan siswa ikut mengetuk meja.`,
          bantuan     : 'Jika siswa tidak mau ikut di putaran pertama: ucapkan chant sendiri dengan suara besar dan ketukan meja kuat sampai dua sampai tiga siswa tertawa dan ikut.',
          cue         : 'Biarkan energi kelas naik selama chant. Turunkan energi di Layar 2.',
          darurat     : 'Jika kelas gaduh sebelum chant selesai → hentikan chant, tepuk tangan sekali, ucapkan "Freeze", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk pensil.
UCAP: "What is this?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk buku.
UCAP: "Good. What is this?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tas salah satu siswa.
UCAP: "And this one?"
AKSI: Tunggu respons semua siswa.
AKSI: Letakkan tangan di telinga.
UCAP: "Okay. Now, listen."
AKSI: Tulis "SCHOOL" besar di papan tulis.
AKSI: Tunjuk tulisan "SCHOOL" di papan tulis.
UCAP: "Read."
AKSI: Tunjuk salah satu siswa untuk membaca.`,
          bantuan     : 'Jika kelas tidak merespons "pencil": angkat pensil, ketuk ke meja dua kali, ucapkan "pen-cil", tunggu echo dari kelas.',
          cue         : 'Jangan berhenti di satu kata lebih dari 5 detik. Jika siswa lupa sebuah kata, ucapkan sendiri lalu lanjut.',
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
AKSI: Tunjukkan gambar library ke semua siswa.
UCAP: "Look at this."
UCAP: "This is the library."
AKSI: Jeda 3 detik.
UCAP: "Library."
UCAP: "Li-bra-ry."
AKSI: Jeda 3 detik.
UCAP: "In the library, we read books."
UCAP: "We use pencils."
UCAP: "We are quiet."
AKSI: Tunjukkan gambar canteen ke semua siswa.
UCAP: "And this."
UCAP: "This is the canteen."
AKSI: Jeda 3 detik.
UCAP: "Can-teen."
AKSI: Jeda 3 detik.
UCAP: "In the canteen, we eat."
UCAP: "We drink water."
UCAP: "We open our lunch bag."
AKSI: Tulis "library — we read books" di papan tulis.
AKSI: Tulis "canteen — we eat and drink" di papan tulis.`,
          bantuan     : 'Jika siswa bingung membedakan keduanya: tunjuk gambar library, letakkan jari di bibir, ucapkan "Quiet."; tunjuk gambar canteen, gerakkan tangan ke mulut, ucapkan "We eat here.".',
          cue         : 'Pastikan kedua gambar terlihat jelas dari semua sudut kelas sebelum mulai bicara. Jika tidak ada gambar, gambar kotak berlabel besar di papan tulis.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk gambar library.
UCAP: "What is this?"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar canteen.
UCAP: "And this?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar library dan canteen bergantian empat sampai lima kali.
AKSI: Balik urutan tanpa pola tetap.
AKSI: Tunjuk papan tulis di kelas.
UCAP: "Is this a library?"
AKSI: Tunggu respons semua siswa.
UCAP: "Is this a canteen?"
AKSI: Tunggu respons semua siswa.
UCAP: "Yes! This is our classroom."
AKSI: Panggil nama satu siswa.
AKSI: Tunjuk salah satu gambar.
UCAP: "What place is this?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi pertanyaan individual untuk dua sampai tiga siswa secara acak.`,
          bantuan     : [
            'Jika siswa yang ditunjuk diam lebih dari 5 detik: ucapkan suku awal "li" lalu tunggu.',
            'Jika siswa masih diam: ucapkan "library" bersama kelas, lalu lanjut ke siswa berikutnya tanpa komentar.',
          ],
          cue         : 'Bolak-balik dua gambar tanpa jeda panjang. Munculkan urutan yang tidak terduga.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima jawaban satu kata "library" atau "canteen".',
            sudahBisa   : 'Minta kalimat penuh "This is the library." atau "This is the canteen.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Angkat tangan sendiri dengan siku lurus dan tangan setinggi kepala.
UCAP: "This is raise your hand."
AKSI: Jeda 3 detik.
AKSI: Angkat tangan sendiri sekali lagi.
UCAP: "Raise. Your. Hand."
UCAP: "Everybody, raise your hand!"
AKSI: Tunggu semua siswa mengangkat tangan.
UCAP: "Good."
UCAP: "Hands down."
AKSI: Tunggu tangan turun.
UCAP: "Again, raise your hand!"
AKSI: Ulangi dua kali dengan tempo cepat.
AKSI: Angkat tangan sendiri sekali lagi.
UCAP: "In this class, when you want to answer, raise your hand."
UCAP: "When you want to ask, raise your hand."
UCAP: "Don't shout."
UCAP: "Raise your hand."`,
          bantuan     : 'Jika ada siswa yang tidak mengangkat tangan: dekati, angkat tangan siswa itu dengan lembut, ucapkan "Raise your hand. Like this.", lalu senyum.',
          cue         : 'Pastikan seluruh kelas dapat melakukan gerakan raise your hand dengan benar sebelum lanjut ke Layar 6.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "I have a question."
UCAP: "If you know the answer, raise your hand."
AKSI: Jeda 2 detik.
UCAP: "Question one: where do we read books at school?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk salah satu siswa.
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Question two: where do we eat at school?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk siswa yang berbeda dari yang pertama.
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Question three: what do we use to write?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk salah satu siswa.
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Question four: what do we do in the library?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk salah satu siswa.
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : [
            'Jika tidak ada siswa yang mengangkat tangan: panggil nama siswa yang paling percaya diri, ucapkan "Can you raise your hand and answer?".',
            'Jika siswa menjawab tanpa mengangkat tangan: senyum, ucapkan "Good answer! But raise your hand first. Try again.".',
          ],
          cue         : 'Prioritaskan siswa yang belum pernah dinilai di TP ini. Jangan berhenti pada satu siswa lebih dari 5 detik.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima jawaban satu kata.',
            sudahBisa   : 'Ucapkan "Can you say a full sentence?" setelah mereka menjawab.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak.
AKSI: Peragakan gerakan menarik napas.
UCAP: "Breathe in."
AKSI: Peragakan gerakan membuang napas.
UCAP: "And out."
UCAP: "Good."
UCAP: "Now, work with your partner."
UCAP: "Ask your partner."
UCAP: "Where do we read books?"
AKSI: Tunggu pasangan saling menjawab.
UCAP: "Now ask: where do we eat?"
AKSI: Tunggu pasangan saling menjawab.
UCAP: "And one more: what do we do when we want to answer?"
AKSI: Tunggu pasangan saling menjawab.
AKSI: Beri waktu tiga menit untuk latihan berpasangan.
AKSI: Pantau latihan berpasangan semua siswa.
AKSI: Dengarkan tanpa menyela kecuali ada kekeliruan konsep besar.`,
          bantuan     : 'Jika satu pasang diam dan tidak tahu harus mulai: dekati, ucapkan "Where do we read books?" kepada salah satu siswa, setelah dia menjawab arahkan ke pasangannya, ucapkan "Good. Now you ask.".',
          cue         : null,
          darurat     : [
            'Jika waktu tersisa kurang dari 18 menit → lewati layar ini, langsung ke Layar 8.',
            'Jika latihan berpasangan menjadi gaduh dalam satu menit → tepuk tangan sekali, minta semua siswa duduk, langsung ke Layar 8.',
          ],
          diferensiasi: {
            perluSupport: 'Pasangkan dengan siswa yang lebih percaya diri dan terima jawaban satu kata.',
            sudahBisa   : 'Minta pasangan menukar peran penanya dan penjawab.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan lembar kerja, satu per siswa.
AKSI: Tulis "I go to the ___ to read books." di papan tulis.
AKSI: Tulis "I go to the ___ to eat lunch." di papan tulis.
AKSI: Tulis "When I want to answer, I ___." di papan tulis.
👂 LISTEN FIRST
UCAP: "Look at the board."
UCAP: "Number one: I go to the blank to read books."
AKSI: Tunjuk bagian rumpang pada kalimat pertama.
UCAP: "What word goes here?"
AKSI: Tunggu respons semua siswa.
UCAP: "Yes."
AKSI: Tulis "library" pada rumpang pertama di papan tulis.
UCAP: "Write library."
UCAP: "Number two, you try."
UCAP: "Write it on your paper."
AKSI: Beri waktu dua menit untuk kalimat dua dan tiga.
AKSI: Berkeliling di antara meja siswa.`,
          bantuan     : 'Jika siswa berhenti dan bingung: dekati, bisikkan "What place do you go to read books?", tunjuk tulisan di papan tulis.',
          cue         : 'Jangan koreksi ejaan saat siswa menulis. Fokus pada kebenaran konsep kata, bukan ejaan.',
          darurat     : [
            'Jika datang langsung dari Layar 6 → sebelum membagikan lembar kerja, ucapkan "Okay, let\'s take a breath. Good job, everyone.", lalu jeda 3 detik.',
            'Jika waktu tersisa 8 menit atau kurang saat layar dimulai → lewati kalimat ketiga, fokus pada kalimat satu dan dua, langsung ke Layar 10.',
          ],
          diferensiasi: {
            perluSupport: 'Izinkan melihat tulisan di papan tulis dan menggambar tangan terangkat untuk kalimat ketiga.',
            sudahBisa   : 'Minta menambahkan satu kalimat bebas tentang sekolah setelah tiga kalimat selesai.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tulisan semua siswa.
AKSI: Pilih dua sampai tiga hasil tulisan siswa.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good."
UCAP: "Let's see some answers."
AKSI: Minta dua siswa membacakan kalimat mereka ke kelas.
UCAP: "Nice work."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Tulis "L-I-B-R-A-R-Y" di papan tulis.
UCAP: "Library is a tricky word."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Let's spell it together."
UCAP: "Say it together!"
AKSI: Tunjuk huruf di papan tulis satu per satu.
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa yang diminta membaca menolak atau malu: jangan paksa, ucapkan "That\'s okay. Maybe next time.", lalu tunjuk siswa lain.',
          cue         : 'Pilih siswa yang berbeda dari peserta Layar 6.',
          darurat     : 'Jika waktu tersisa kurang dari 10 menit → lewati layar ini, langsung ke Layar 10.',
          diferensiasi: {
            perluSupport: 'Minta menyalin ejaan "library" dari papan tulis.',
            sudahBisa   : 'Minta mengeja "canteen" tanpa melihat papan tulis.',
          },
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
UCAP: "Let's remember what we learned."
UCAP: "What is this?"
AKSI: Tunjuk gambar library.
AKSI: Ucapkan "this is the" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk gambar canteen.
UCAP: "And this?"
AKSI: Tunggu respons semua siswa.
UCAP: "And when you want to answer, what do you do?"
AKSI: Tunggu siswa mengangkat tangan sambil menjawab.
UCAP: "Perfect."
UCAP: "Library, canteen, raise your hand."
UCAP: "Remember these three."
AKSI: Tunjuk kata-kata di papan tulis sekali lagi.
AKSI: Hapus kata-kata di papan tulis satu per satu.
AKSI: Tunggu kelas mengucapkan setiap kata yang dihapus.`,
          bantuan     : null,
          cue         : 'Jaga ritme tetap tenang di layar ini. Ini konsolidasi, bukan drill.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, I want to ask you something."
UCAP: "Today, what was your favorite part?"
AKSI: Jeda 5 detik.
AKSI: Tunjuk satu sampai dua siswa yang mau berbagi.
AKSI: Tunggu jawaban siswa.
UCAP: "Good."
UCAP: "I'm happy you're here today."
UCAP: "Next time, we will talk about our friends."
UCAP: "What do they look like?"
UCAP: "What are their names?"
UCAP: "For now, goodbye, everyone."
AKSI: Tunggu kelas menjawab salam.`,
          bantuan     : null,
          cue         : 'Kalimat terakhir guru harus terasa seperti penutup, bukan pengumuman administratif.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → biarkan siswa merapikan meja untuk pelajaran berikutnya, jangan tambahkan aktivitas baru.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B01;
