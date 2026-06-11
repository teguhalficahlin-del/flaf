const TP_C06 = {

  // METADATA
  id             : 'tp-c06',
  nomor          : 6,
  kelas          : 5,
  nama           : 'Hobbies and Free Time',
  tema           : 'Dunia Sehari-hari',
  kluster        : 'B — Dunia Sehari-hari',
  jenis          : 'Biasa',
  text_anchor    : 'I like playing football because it is fun. I always play with my friends.',
  connector_aktif: 'because — exposure only; fokus produksi di TP-07 dan TP-17',
  recycle_fase_b : [
    'I like... / I like... because... (TP-13 Fase B)',
    'I usually... / always (TP-06 Fase B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat mendeskripsikan hobi dan waktu luang dalam minimal tiga kalimat menggunakan pola I like... because...',
    'Peserta didik dapat menggunakan connector because untuk menjelaskan alasan (exposure pertama Fase C).',
    'Peserta didik dapat menggali informasi hobi pasangan melalui pertanyaan lisan dan menuliskannya di Hobby Exchange Table.',
  ],
  vocab     : ['hobby', 'free time', 'fun', 'boring', 'tired', 'always', 'usually', 'play', 'read', 'cook', 'watch', 'help'],
  persiapan : [
    'My Hobby Card satu per siswa, berisi satu baris isian "I like ___ because ___.", dicetak sebelum kelas dimulai, di meja guru sebelum dibagikan, untuk Layar 4. Pada awal Layar 6 kartu ini diletakkan tertutup menghadap bawah di meja siswa.',
    'Hobby Exchange Table satu per siswa, tabel dua kolom My Hobby dan My Partner\'s Hobby dengan dua baris What I like dan Why, kolom My Partner\'s Hobby kosong, dicetak sebelum kelas dimulai, dibagikan tepat sebelum Layar 6.',
    'Text-anchor "I like playing football because it is fun. I always play with my friends." ditulis di papan tulis sebelum siswa masuk, tetap tampil dari Layar 2 sampai akhir Layar 7, dihapus atau ditutup sebelum Layar 8.',
    'Papan tulis dan spidol untuk menulis baris isian, daftar kata kerja, dan jawaban demo tabel di Layar 4 dan Layar 6.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Rutinitas TP-05', tujuan: 'Guru mengaktifkan kembali pola rutinitas dari TP-05.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Text-Anchor dan Framing Inklusif', tujuan: 'Guru memperkenalkan text-anchor dan pilihan hobi bebas.' },
    { layar:  3, judul: 'Inti · INPUT · Model Guru', tujuan: 'Guru memodelkan hobi dan memajankan connector because.' },
    { layar:  4, judul: 'Inti · My Hobby Card', tujuan: 'Guru memandu siswa mengisi kartu hobi sendiri.' },
    { layar:  5, judul: 'Inti · Drill Cepat What\'s Your Hobby', tujuan: 'Guru melatih pola I like dan alasan.' },
    { layar:  6, judul: 'Inti · INTERACT · Hobby Exchange Table', tujuan: 'Guru memandu siswa mengisi tabel pasangan lewat bertanya.' },
    { layar:  7, judul: 'Inti · Mini-Share Hobi Paling Unik', tujuan: 'Guru memandu siswa membandingkan hobi.' },
    { layar:  8, judul: 'Inti · OUTPUT · Write About My Hobby', tujuan: 'Guru memandu siswa menulis hobi sendiri.' },
    { layar:  9, judul: 'Inti · Check and Extend', tujuan: 'Guru memandu siswa memeriksa dan menambah kalimat.' },
    { layar: 10, judul: 'Penutup · Sharing ke Kelas', tujuan: 'Guru memandu siswa membagikan tulisan ke semua siswa.' },
    { layar: 11, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-07.' },
  ],

  // BREAKPOINTS
  breakpoints: [],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Tunggu sampai kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
AKSI: Tunggu respons semua siswa.
UCAP: "Today we talk about what you love to do."`,
    bantuan: 'Jika tidak ada respons: angkat tangan, tunggu siswa ikut menjawab.',
    cue    : 'Text-anchor sudah tertulis di papan tulis sebelum siswa masuk.',
    darurat: null,
  },

  // SKENARIO
  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,
      langkah: [

        {
          id          : 'l1',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Last time, your week. Your routines."
AKSI: Jeda 2 detik.
UCAP: "Who remembers one sentence about what they do every day?"
AKSI: Tunggu dua sampai tiga siswa menyebut kalimat dari tulisan rutinitas yang mereka buat di TP-05.
UCAP: "Good. Those are your routines, things you do every week."
AKSI: Jeda 1 detik.
UCAP: "Today, something different. Not your schedule. Your free time."
UCAP: "What do you like to do when school is over?"`,
          bantuan     : 'Jika tidak ada yang merespons dalam 5 detik: ucapkan contoh "On Monday I go to school.", lalu tanya "Who has a sentence like this?".',
          cue         : 'Reactivation di layar ini berasal dari tulisan siswa sendiri di TP-05, bukan dari text-anchor baru.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk text-anchor di papan tulis.
UCAP: "Look at the board."
👂 LISTEN FIRST
AKSI: Baca text-anchor perlahan sambil menunjuk tiap baris.
UCAP: "I like playing football because it is fun."
UCAP: "I always play with my friends."
UCAP: "This is one person's hobby. Football."
AKSI: Jeda 2 detik.
UCAP: "But today, I want to know your hobby. Not football. Yours."
UCAP: "A hobby is something you like to do in your free time."
UCAP: "Helping at home, watching TV, playing outside, anything counts."
UCAP: "Whatever you enjoy, that is a hobby."`,
          bantuan     : 'Jika siswa bertanya boleh hobi apa saja: angguk, ucapkan "Yes, anything you enjoy in your free time.".',
          cue         : 'Framing inklusif hadir sebelum siswa mengisi kartu. Hobi apa pun valid, bukan hanya olahraga.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,
      langkah: [

        {
          id          : 'l3',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Now, my turn. I will tell you about my hobbies."
UCAP: "I like reading because it is relaxing."
AKSI: Jeda 1 detik.
UCAP: "I always read before I sleep."
UCAP: "I also like cooking because I like making food for my family."
AKSI: Jeda 1 detik.
AKSI: Tunjuk text-anchor di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa membaca text-anchor bersama.
UCAP: "Read with me. Ready?"
UCAP: "Say it with me!"
AKSI: Tunggu semua siswa membaca text-anchor bersama.`,
          bantuan     : 'Jika siswa tidak ikut membaca bersama: tunjuk baris demi baris di papan tulis sambil membaca.',
          cue         : 'Connector "because" muncul dua kali di model guru, exposure only. Jangan sebut kata itu secara terpisah atau beri komentar tentang fungsinya.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan My Hobby Card, satu per siswa.
AKSI: Tulis baris isian di papan tulis di bawah text-anchor: "I like ___ because ___.".
AKSI: Tulis daftar kata kerja di pojok papan tulis: "reading, playing, cooking, watching, helping, drawing, singing".
UCAP: "Think about your free time. What do you like to do?"
UCAP: "Write one sentence, what you like and why."
UCAP: "Remember, any hobby counts. Helping at home, watching TV, reading, playing."
UCAP: "Three minutes. Go."
AKSI: Beri waktu tiga menit untuk berpikir dan menulis.
AKSI: Tunjuk dua sampai tiga siswa secara acak.
UCAP: "Read your sentence. What do you like?"
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika siswa tidak tahu kata Inggris untuk hobinya: ucapkan opsi "reading, playing, cooking, watching, helping, drawing, singing", minta siswa pilih. Jika siswa tidak tahu alasannya: ucapkan opsi "because it is fun, because it is relaxing, because it makes me happy", biarkan siswa memilih.',
          cue         : 'Setiap siswa mengisi minimal bagian "I like ___" sebelum Layar 6. Bagian "because ___" boleh dilengkapi saat Layar 6.',
          darurat     : 'Jika ada siswa belum mengisi apa pun setelah tiga menit → dekati, tunjuk bagian "I like ___", bantu isi satu kata.',
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau berdiri.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "What do you like to do in your free time? One sentence."
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Why? Tell us."
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi dengan tiga sampai empat siswa dari barisan berbeda secara cepat.
UCAP: "Who also likes that? Raise your hand."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa yang berdiri hanya menyebut hobi tanpa alasan: tanyakan "Why do you like it?" sambil angguk.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 10 menit sebelum blok INTERACT.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan Hobby Exchange Table, satu per siswa, kolom My Partner's Hobby kosong.
UCAP: "Fill in your column first. My Hobby. Use your card."
AKSI: Beri waktu satu menit untuk mengisi kolom My Hobby.
UCAP: "Your partner's column is empty. You need to ask."
👂 LISTEN FIRST
AKSI: Peragakan tanya jawab dengan satu siswa di depan.
UCAP: "What do you like to do in your free time?"
AKSI: Tunggu jawaban siswa.
AKSI: Tulis jawaban di baris What I like pada kolom My Partner di tabel contoh.
UCAP: "Why do you like it?"
AKSI: Tunggu jawaban siswa.
UCAP: "Now your turn."
AKSI: Minta siswa duduk berpasangan.
AKSI: Minta siswa meletakkan My Hobby Card tertutup menghadap bawah di meja.
AKSI: Minta siswa A bertanya ke siswa B.
AKSI: Minta siswa A mengisi kolom My Partner's Hobby berdasarkan jawaban siswa B.
AKSI: Minta siswa B bertanya ke siswa A.
AKSI: Minta siswa B mengisi kolom My Partner's Hobby berdasarkan jawaban siswa A.
UCAP: "Do you have a similar hobby, or completely different?"
AKSI: Beri waktu lima sampai enam menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang dan pojok kelas.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika pasangan tidak tahu harus bertanya apa: tunjuk baris "What I like", ucapkan "What do you like to do?", tunggu siswa meniru. Jika siswa mengisi kolom My Partner tanpa bertanya: tutup tabel dengan tangan, ucapkan "Ask first. Then write.".',
          cue         : 'Kolom My Hobby terisi sebelum pair work dimulai. Kolom My Partner\'s Hobby dibagikan dalam keadaan kosong.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, demo ulang dengan guru sebagai pasangan, sederhanakan ke dua pertanyaan, lalu restart selama 60 detik.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk dua sampai tiga pasangan.
UCAP: "What is your partner's hobby? Is it similar to yours or different?"
AKSI: Tunggu jawaban tiap pasangan yang ditunjuk.
UCAP: "Did anyone find a hobby they have never heard of before?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa tidak bisa merangkum: tunjuk tabel mereka, ucapkan "Your partner, what do they like? Just read from the table.", minta baca baris pertama dulu.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 12 menit. Hobi yang tidak biasa dihargai setara dengan hobi umum.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Hapus atau tutup text-anchor dari papan tulis.
UCAP: "Now, write about your hobby."
UCAP: "Not the football from the board. Your hobby."
UCAP: "At least three sentences. You can use your Hobby Card to start."
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan sampai sepuluh menit.
AKSI: Setelah menit kedua, pantau penulisan semua siswa, prioritaskan barisan belakang dan pojok kelas.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa memegang pensil tapi tidak menulis: ucapkan "What do you like? Write: I like...", tunggu siswa menulis satu kalimat, lalu tinggalkan.',
          cue         : 'Text-anchor sudah diturunkan sebelum layar ini. Bentuk "because" yang tidak sempurna diterima tanpa koreksi.',
          darurat     : 'Jika waktu tersisa 5 menit atau kurang dan sebagian besar siswa baru menulis satu kalimat → ucapkan "Two sentences. That is enough for today.", lalu lanjut ke Layar 9.',
          diferensiasi: null,
          blok        : 'OUTPUT',
        },

        {
          id          : 'l9',
          tipe        : 'instruksi',
          teks        : `AKSI: Setelah delapan menit, beri sinyal tanpa menghentikan siswa yang masih menulis.
UCAP: "Two more minutes. Read your sentences. Can you add one more?"
AKSI: Pantau hasil tulisan semua siswa tanpa mengoreksi grammar.`,
          bantuan     : 'Jika siswa selesai tapi hanya menulis dua kalimat: tanyakan "Who do you usually do this with? Can you write: I always do it with...?", tunggu siswa menulis kalimat tambahan sendiri.',
          cue         : 'Bentuk "because" tidak sempurna seperti "because fun" tidak dikoreksi. Ini exposure pertama "because" di Fase C.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati dan ucapkan panduan konkret, "You wrote what you like. Can you write when you do it? I always read at night.".',
            sudahBisa   : 'Minta tambah satu kalimat dengan because untuk alasan berbeda, "I also like drawing because it is fun.".',
          },
          blok        : null,
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,
      langkah: [

        {
          id          : 'l10',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau membacakan satu sampai dua kalimat dari tulisannya.
UCAP: "Who wants to share? One or two sentences, from your seat is fine."
AKSI: Tunjuk satu sampai tiga siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Who also likes the same hobby? Raise your hand."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk siswa yang paling aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Hobi biasa dan tidak biasa diterima dengan nada yang sama.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today you talked about what you love to do. In English."
AKSI: Jeda 2 detik.
UCAP: "What you like. Why you like it. Who you do it with."
AKSI: Jeda 2 detik.
UCAP: "That is your hobby. Keep it."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time, we talk about food."
AKSI: Jeda 1 detik.
UCAP: "What you eat. And why."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : 'Pratinjau "What you eat. And why." adalah undangan ke TP-07, bukan pengumuman materi.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C06;
