const TP_02 = {

  // METADATA
  id    : 'tp-02',
  nomor : 2,
  kelas : 1,
  nama  : 'Introducing Myself',
  tema  : 'Interaksi Sosial Dasar',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebutkan nama diri sendiri menggunakan struktur "My name is ..." atau "I am ..." dengan lafal yang jelas.',
    'Peserta didik dapat menyebutkan usia menggunakan struktur "I am ... years old" dan merespons pertanyaan "How old are you?"',
    'Peserta didik dapat memperkenalkan diri lengkap (nama + usia) kepada teman dan guru dalam situasi bermain peran.',
  ],
  vocab     : ['name', 'my name is', 'I am', 'years old', 'how old',
               'nice to meet you', 'what is your name'],
  persiapan : [
    'Papan tulis dan spidol.',
    'Kertas name tag kosong (name tag pre-printed disiapkan sebagai cadangan).',
    'Dua boneka tangan: Kiki dan Momo (wajib).',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Door Greeting',           tujuan: 'Guru menyambut siswa di depan kelas tanpa boneka.' },
    { layar:  1, judul: 'Pembuka · Guru Memperkenalkan Diri',    tujuan: 'Guru memperkenalkan namanya dan menuliskannya di papan tulis.' },
    { layar:  2, judul: 'Pembuka · Siswa Menjawab Sapaan',       tujuan: 'Guru mengajak semua siswa menyebut nama guru.' },
    { layar:  3, judul: 'Pembuka · Jembatan ke Inti',            tujuan: 'Guru menjembatani ke perkenalan nama siswa.' },
    { layar:  4, judul: 'Inti · Pola "My Name Is"',              tujuan: 'Guru memperkenalkan pola kalimat "My name is".' },
    { layar:  5, judul: 'Inti · Name Tag',                       tujuan: 'Guru membagikan dan memandu pengisian name tag.' },
    { layar:  6, judul: 'Inti · Jembatan ke Usia',               tujuan: 'Guru menjembatani dari nama ke usia.' },
    { layar:  7, judul: 'Inti · Pola Usia',                      tujuan: 'Guru memperkenalkan pola kalimat usia.' },
    { layar:  8, judul: 'Inti · Demo Walk and Talk',             tujuan: 'Guru memperagakan walk and talk dengan Kiki dan Momo.' },
    { layar:  9, judul: 'Inti · Reset + Aturan Walk and Talk',   tujuan: 'Guru menenangkan kelas dan menjelaskan aturan walk and talk.' },
    { layar: 10, judul: 'Inti · Walk and Talk',                  tujuan: 'Guru memimpin walk and talk bersama semua siswa.' },
    { layar: 11, judul: 'Inti · Diferensiasi',                   tujuan: 'Guru memberi pilihan latihan dengan atau tanpa papan tulis.' },
    { layar: 12, judul: 'Penutup · Transisi + Demo Guru',        tujuan: 'Guru memperagakan ulang perkenalan diri sebelum sesi tampil.' },
    { layar: 13, judul: 'Penutup · Tampil di Depan',             tujuan: 'Guru memandu 2–3 siswa tampil memperkenalkan diri.' },
    { layar: 14, judul: 'Penutup · Refleksi',                    tujuan: 'Guru menanyakan satu nama teman yang siswa kenal.' },
    { layar: 15, judul: 'Penutup · Penutup Kelas',               tujuan: 'Guru menutup kelas dengan salam perpisahan bersama.' },
    { layar: 16, judul: 'Penutup Sesi · Selesai',                tujuan: 'Guru membereskan media dan mencatat observasi siswa.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Sambut siswa satu per satu saat masuk.
AKSI: Tersenyum ke setiap siswa yang masuk.
AKSI: Angguk ke setiap siswa yang masuk.
UCAP: "Good morning!"
UCAP: "Come in, come in!"`,
    bantuan: null,
    cue    : 'Lakukan layar ini tanpa boneka. Layar ini tidak boleh dilewati.',
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
          teks        : `AKSI: Ajak semua siswa duduk.
AKSI: Tulis nama guru di papan tulis.
UCAP: "Hello, everyone!"
AKSI: Ucapkan "My name is" diikuti nama guru sendiri.
AKSI: Ucapkan "My name is" diikuti nama guru sendiri.
UCAP: "Nice to meet you!"`,
          bantuan     : null,
          cue         : 'Tunjuk nama di papan tulis saat mengucapkannya.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk diri sendiri.
AKSI: Tunjuk ke semua siswa.
UCAP: "What is my name?"
AKSI: Ucapkan "Your name is" diikuti nama guru sendiri.
UCAP: "Say it with me!"
→ Siswa: "Your name is [nama guru]!"`,
          bantuan     : [
            'Jika diam: tunjuk nama di papan tulis, ucapkan "Your name is..." menggantung.',
            'Jika menjawab dalam Bahasa Indonesia: angguk, ucapkan jawaban dalam Bahasa Inggris, ajak siswa mengikuti.',
          ],
          cue         : 'Tunggu 2 detik setelah ucapkan "What is my name?" sebelum modelkan jawaban.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk diri sendiri.
AKSI: Tunjuk ke semua siswa.
UCAP: "Now I know your teacher's name."
UCAP: "But I don't know your names yet!"
UCAP: "Let's learn how to introduce ourselves!"`,
          bantuan     : null,
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
          teks        : `AKSI: Tulis kalimat "My name is ___." di papan tulis.
AKSI: Tunjuk kalimat di papan tulis.
👂 LISTEN FIRST
UCAP: "My name is Budi."
UCAP: "My name is Sari."
UCAP: "My name is Andi."
🗣 TOGETHER
AKSI: Tunjuk satu siswa.
AKSI: Gerakkan tangan mengajak semua siswa.
UCAP: "Your turn!"
AKSI: Ucapkan "My name is..." agar siswa melengkapi kalimat.
→ Siswa: "My name is [nama sendiri]."`,
          bantuan     : [
            'Jika diam: tunjuk kalimat di papan tulis, ucapkan "My name is..." menggantung, lalu tunjuk siswa.',
            'Jika menjawab dalam Bahasa Indonesia: angguk, ucapkan "My name is..." diikuti nama siswa, ajak siswa mengulang.',
          ],
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan kertas name tag ke semua siswa.
UCAP: "Write your name here."
UCAP: "My name is ___."
AKSI: Untuk siswa yang sudah selesai, ajak mereka menebalkan tulisan namanya lagi sampai semua siswa siap.
🔁 Ulang sampai semua siswa siap.`,
          bantuan     : 'Jika belum bisa menulis: tulis nama siswa di name tag, lalu ajak siswa menempelkannya sendiri.',
          cue         : 'Keliling kelas dan bantu siswa satu per satu. Tunjuk garis kosong di name tag saat mengucapkan instruksi.',
          darurat     : 'Jika ada siswa belum bisa menulis nama → gunakan name tag pre-printed sebagai cadangan.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunggu sampai semua siswa memakai name tag.
AKSI: Tunjuk name tag sendiri.
AKSI: Tunjuk name tag siswa.
UCAP: "Great!"
UCAP: "Now I know your names."
UCAP: "But how old are you?"
UCAP: "Let's find out!"`,
          bantuan     : null,
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk diri sendiri.
👂 LISTEN FIRST
UCAP: "How old are you?"
UCAP: "I am six years old."
AKSI: Angkat 6 jari.
UCAP: "I am seven years old."
AKSI: Angkat 7 jari.
AKSI: Tunjuk satu siswa.
UCAP: "How old are you?"
AKSI: Ucapkan "I am..." agar siswa melengkapi kalimat.
AKSI: Tunggu sampai siswa melengkapi kalimat.
→ Siswa: "I am [usia] years old!"`,
          bantuan     : [
            'Jika diam: angkat jari sebanyak usia siswa, ucapkan "I am..." menggantung, lalu tunggu.',
            'Jika hanya menjawab angka usia: angguk, ucapkan "I am six years old!", ajak siswa mengulang.',
          ],
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pegang Kiki di tangan kiri.
AKSI: Pegang Momo di tangan kanan.
AKSI: Peragakan dialog perkenalan Kiki dan Momo.
UCAP: "Hello!"
UCAP: "My name is Kiki."
UCAP: "I am six years old."
UCAP: "Hi!"
UCAP: "My name is Momo."
UCAP: "I am seven years old."
AKSI: Turunkan boneka.
AKSI: Tunjuk kalimat di papan tulis.
UCAP: "That is what you will say to your friends."
UCAP: "Let's practise!"`,
          bantuan     : null,
          cue         : 'Demo boneka hanya sekali.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Angkat tangan untuk meminta perhatian kelas.
AKSI: Tunggu sampai semua siswa diam dan menatap guru.
UCAP: "Hands down."
UCAP: "Eyes on me."
AKSI: Tunjuk mata sendiri.
UCAP: "Stand up."
UCAP: "Walk."
UCAP: "Find a friend."
UCAP: "Say hello and introduce yourself."
UCAP: "Then find another friend."
UCAP: "Three friends total!"
AKSI: Peragakan tanda berhenti dengan tepuk tangan dua kali.
AKSI: Ajak semua siswa berlatih tanda berhenti itu satu kali.`,
          bantuan     : null,
          cue         : null,
          darurat     : 'Jika waktu ≤10 menit → batalkan walk and talk, ajak siswa memperkenalkan diri ke teman di sebelah sambil duduk di tempat.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ajak semua siswa memulai walk and talk.
AKSI: Pantau semua siswa selama walk and talk berlangsung.
🔁 2 menit · 3 teman berbeda.`,
          bantuan     : [
            'Jika siswa diam saat bertemu teman: dekati siswa, bisikkan "Say: Hello! My name is...".',
            'Jika kelas terlalu ramai: tepuk tangan dua kali, ucapkan "Hands down.", ucapkan "Eyes on me.", lalu lanjutkan walk and talk.',
          ],
          cue         : 'Tepuk tangan dua kali untuk menghentikan walk and talk saat waktu habis.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ajak semua siswa duduk kembali.
AKSI: Tepuk tangan sekali untuk menandai pergantian aktivitas.
UCAP: "Well done!"
UCAP: "Now practise with your partner."
UCAP: "If you need help, look at the board."
UCAP: "If you are ready, try without looking!"`,
          bantuan     : null,
          cue         : 'Diferensiasi dilakukan setelah semua siswa mengikuti walk and talk.',
          darurat     : 'Jika waktu mepet → batasi latihan berpasangan pada 2 menit.',
          diferensiasi: {
            perluSupport: 'Duduk di dekat pasangan mereka dan tunjuk papan tulis saat mereka menyebut nama dan usia.',
            sudahBisa   : 'Minta mereka berbicara tanpa melihat papan tulis dan menambah pertanyaan balik "And you?".',
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
          teks        : `AKSI: Tepuk tangan sekali.
AKSI: Ajak semua siswa menghadap ke depan.
UCAP: "Great practice!"
UCAP: "Now, who wants to introduce themselves to the class?"
UCAP: "Watch first."
UCAP: "I will show you."
AKSI: Peragakan perkenalan diri sekali lagi.
UCAP: "Hello!"
AKSI: Ucapkan "My name is" diikuti nama guru sendiri.
UCAP: "Nice to meet you all!"
AKSI: Tunjuk ke semua siswa setelah demo selesai.
AKSI: Ajak semua siswa bertepuk tangan.`,
          bantuan     : null,
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau maju ke depan.
AKSI: Tunjuk 2–3 siswa yang mengangkat tangan.
AKSI: Ajak semua siswa bertepuk tangan sebelum siswa mulai.
🔁 2–3 siswa saja.
UCAP: "Come to the front!"
UCAP: "Introduce yourself!"
→ Siswa: "Hello! My name is ... I am ... years old. Nice to meet you!"`,
          bantuan     : [
            'Jika diam di depan: bisikkan "Say: Hello! My name is...", lalu beri waktu.',
            'Jika hanya menyebut nama: angguk, ucapkan "My name is [nama siswa]!" bersama semua siswa, lalu ajak bertepuk tangan.',
          ],
          cue         : 'Jaga setiap giliran tetap pendek.',
          darurat     : 'Jika tidak ada siswa sukarela → tunjuk 2 siswa sekaligus.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk name tag tiga sampai empat siswa secara acak.
UCAP: "Excellent!"
AKSI: Tunjuk satu siswa.
AKSI: Gerakkan tangan mengajak semua siswa.
UCAP: "Now, tell me one friend's name you learned today."
→ Siswa: menyebut satu nama teman yang baru dikenal.`,
          bantuan     : [
            'Jika diam: tunjuk name tag teman di sebelah, ucapkan "His name is..." menggantung.',
            'Jika menjawab dalam Bahasa Indonesia: angguk, ucapkan jawaban dalam Bahasa Inggris, ajak siswa mengulang.',
          ],
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
AKSI: Lambaikan tangan ke semua siswa.
UCAP: "Great job, everyone!"
UCAP: "You can introduce yourselves in English!"
UCAP: "See you next time."
UCAP: "Goodbye!"
🗣 TOGETHER
→ Siswa: "Goodbye, teacher! See you!"`,
          bantuan     : 'Jika diam: lambaikan tangan, ucapkan "Good-bye..." menggantung.',
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Kumpulkan kertas name tag.
AKSI: Simpan kertas name tag di meja guru untuk referensi nama siswa.
AKSI: Hapus tulisan di papan tulis.
AKSI: Catat siswa yang diam saat walk and talk.
AKSI: Catat siswa yang hanya bisa menyebut nama dan belum bisa kalimat lengkap.
AKSI: Catat siswa yang perlu bantuan menulis name tag.`,
          bantuan     : null,
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_02;
