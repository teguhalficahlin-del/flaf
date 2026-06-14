const TP_C01 = {

  // METADATA
  id             : 'tp-c01',
  nomor          : 1,
  kelas          : 5,
  nama           : 'My Extended Profile',
  tema           : 'Diri yang Lebih Lengkap',
  kluster        : 'A — Diri yang Lebih Lengkap',
  jenis          : 'Biasa',
  text_anchor    : 'My name is Rina. I am 11. I live in Bandung. I like reading.',
  connector_aktif: 'and — exposure only; fokus produksi di TP-04',
  recycle_fase_b : [
    'I like... (TP-13 Fase B)',
    'My name is... / I am... (Fase A/B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menuliskan profil diri sendiri dalam minimal tiga kalimat menggunakan pola My name is... / I am... / I live in... / I like...',
    'Peserta didik dapat menggunakan connector and untuk menggabungkan dua kegiatan dalam satu kalimat (exposure).',
    'Peserta didik dapat menggali informasi profil pasangan melalui pertanyaan lisan dan menuliskannya di My Partner\'s Profile Card.',
  ],
  vocab     : ['name', 'age', 'live', 'like'],
  persiapan : [
    'My Profile Note satu per siswa, berisi baris isian "My name is ___. I am ___ years old. I live in ___. I like ___.", dicetak sebelum kelas dimulai, di meja guru sebelum dibagikan, untuk Layar 4. Pada awal Layar 6 catatan ini diletakkan tertutup menghadap bawah di meja siswa.',
    'My Partner\'s Profile Card satu per siswa, berisi kolom kosong Name, Age, City, dan I like, dicetak sebelum kelas dimulai, dibagikan tepat sebelum Layar 6.',
    'Text-anchor "My name is Rina. I am 11. I live in Bandung. I like reading." ditulis di papan tulis sebelum siswa masuk, tetap tampil dari Layar 2 sampai akhir Layar 7, dihapus atau ditutup sebelum Layar 8.',
    'Papan tulis dan spidol untuk menulis baris isian profil dan jawaban demo kartu di Layar 4 dan Layar 6.',
  ],
  media     : [],
  printables: [
    { file: 'tp-c01-profile-note.png', label: 'My Profile Note' },
    { file: 'tp-c01-partner-card.png', label: "My Partner's Profile Card" },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Warm-Up Who Are You', tujuan: 'Guru memancing siswa masuk ke mode berbahasa Inggris.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Rina', tujuan: 'Guru memperkenalkan text-anchor profil Rina.' },
    { layar:  3, judul: 'Inti · INPUT · Model Guru', tujuan: 'Guru memodelkan profil sendiri dan memajankan connector and.' },
    { layar:  4, judul: 'Inti · My Profile Note', tujuan: 'Guru memandu siswa mengisi catatan profil sendiri.' },
    { layar:  5, judul: 'Inti · Drill Cepat Guess My Profile', tujuan: 'Guru melatih ritme tanya jawab profil.' },
    { layar:  6, judul: 'Inti · INTERACT · Partner Profile Card', tujuan: 'Guru memandu siswa mengisi kartu profil pasangan lewat bertanya.' },
    { layar:  7, judul: 'Inti · Mini-Share Tell Me About Your Partner', tujuan: 'Guru memandu siswa membagikan profil pasangan.' },
    { layar:  8, judul: 'Inti · OUTPUT · Write My Profile', tujuan: 'Guru memandu siswa menulis profil sendiri.' },
    { layar:  9, judul: 'Inti · Check and Extend', tujuan: 'Guru memandu siswa memeriksa dan menambah kalimat.' },
    { layar: 10, judul: 'Penutup · Sharing ke Kelas', tujuan: 'Guru memandu siswa membagikan profil ke semua siswa.' },
    { layar: 11, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-02.' },
  ],

  // BREAKPOINTS
  breakpoints: [],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Tunggu sampai sebagian besar siswa duduk dan tenang.
UCAP: "Good morning, everyone."
AKSI: Tunggu respons semua siswa.
UCAP: "Today we talk about ourselves. In English."`,
    bantuan: 'Jika tidak ada respons: angkat tangan, tunggu siswa ikut menjawab.',
    cue    : 'Text-anchor Rina sudah tertulis di papan tulis sebelum siswa masuk.',
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
UCAP: "I have one question. One question only."
AKSI: Jeda 3 detik.
UCAP: "Who are you?"
AKSI: Jeda 3 detik.
UCAP: "Not just your name. Who are you? What do you like? Where do you live?"
AKSI: Tunjuk satu siswa di baris pertama.
UCAP: "Quick. Your name. In English. Go."
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Good. What do you like?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi dengan dua sampai tiga siswa lain secara cepat.`,
          bantuan     : 'Jika siswa yang ditunjuk diam lebih dari 5 detik: tunjuk diri sendiri, ucapkan "My name is...", terima jawaban siswa, lalu lanjut ke siswa berikutnya.',
          cue         : 'Warm-up adalah aktivasi, bukan penilaian. Guru tidak mengoreksi jawaban.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk text-anchor di papan tulis tanpa membacakannya dulu.
UCAP: "Look at the board. There is someone here."
AKSI: Tunjuk kalimat "My name is Rina." di papan tulis.
UCAP: "Her name is Rina. She will help us today."
👂 LISTEN FIRST
AKSI: Baca text-anchor satu kalimat per kalimat sambil menunjuk tiap baris.
UCAP: "My name is Rina."
UCAP: "I am 11."
UCAP: "I live in Bandung."
UCAP: "I like reading."
UCAP: "Four sentences. That is Rina's profile."`,
          bantuan     : 'Jika siswa tidak memperhatikan papan tulis: ketuk papan tulis dua kali sebelum membaca kalimat berikutnya.',
          cue         : 'Kosakata Rina sudah dikenal dari Fase B, tidak ada kosakata baru. Jangan tanyakan pemahaman, lanjutkan saja.',
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
UCAP: "Now, my turn."
UCAP: "My name is [nama guru]."
AKSI: Jeda 1 detik.
UCAP: "I am [usia guru] years old."
AKSI: Jeda 1 detik.
UCAP: "I live in [kota guru]."
AKSI: Jeda 1 detik.
UCAP: "I like [aktivitas guru 1] and [aktivitas guru 2]."
AKSI: Tunjuk baris "I like reading." di text-anchor papan tulis.
UCAP: "Rina says: I like reading."
AKSI: Tunjuk diri sendiri.
UCAP: "I say: I like reading and teaching."
UCAP: "And. It connects two things."
🗣 TOGETHER
AKSI: Ajak semua siswa membaca text-anchor bersama.
UCAP: "Read with me. Ready?"
UCAP: "Say it with me!"
AKSI: Tunggu semua siswa membaca text-anchor bersama.`,
          bantuan     : 'Jika siswa tidak ikut membaca bersama: tunjuk baris demi baris di papan tulis sambil membaca.',
          cue         : 'Connector "and" dimodelkan sekali di kalimat guru, exposure only. Jangan minta siswa mengulang kalimat itu secara terpisah.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan My Profile Note, satu per siswa.
AKSI: Tulis baris isian profil di papan tulis di bawah text-anchor: "My name is ___. I am ___ years old. I live in ___. I like ___.".
UCAP: "Fill in your profile. Use Rina as a model, but write about yourself, not Rina."
UCAP: "Three minutes. Go."
AKSI: Beri waktu tiga menit untuk menulis.
AKSI: Tunjuk dua sampai tiga siswa secara acak.
UCAP: "Read one sentence. Any sentence. Go."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika siswa tidak tahu nama kotanya dalam Bahasa Inggris: ucapkan "Just write the name. Bandung, Jakarta, Surabaya. Same in English.".',
          cue         : 'Setiap siswa mengisi My Profile Note sebelum Layar 6. Catatan ini dipakai lagi di blok INTERACT.',
          darurat     : 'Jika ada siswa belum menulis apa pun setelah tiga menit → dekati, tunjuk baris pertama, bantu isi baris pertama saja.',
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk satu siswa untuk maju ke depan.
AKSI: Minta siswa itu berdiri di depan tanpa menunjukkan My Profile Note.
UCAP: "Everyone, ask them. Who are they?"
AKSI: Minta semua siswa bertanya empat pertanyaan: nama, usia, kota, dan kesukaan.
AKSI: Tunggu siswa di depan menjawab tiap pertanyaan.
AKSI: Ulangi dengan satu siswa lain dari barisan berbeda.`,
          bantuan     : 'Jika semua siswa tidak mau bertanya: ajukan pertanyaan pertama "What is your name?", lalu tunjuk satu siswa untuk melanjutkan pertanyaan berikutnya.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 10 menit sebelum blok INTERACT.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan My Partner's Profile Card, satu per siswa, semua kolom kosong.
UCAP: "This card is empty. You cannot fill it alone."
UCAP: "You need to ask your partner."
👂 LISTEN FIRST
AKSI: Peragakan tanya jawab dengan satu siswa di depan.
UCAP: "What is your name?"
AKSI: Tunggu jawaban siswa.
AKSI: Tulis jawaban di kolom Name pada kartu contoh.
UCAP: "How old are you?"
AKSI: Tunggu jawaban siswa.
UCAP: "Where do you live?"
AKSI: Tunggu jawaban siswa.
UCAP: "What do you like?"
AKSI: Tunggu jawaban siswa.
UCAP: "Now your turn. Ask your partner, fill in the card."
AKSI: Minta siswa duduk berpasangan.
AKSI: Minta siswa meletakkan My Profile Note tertutup menghadap bawah di meja.
AKSI: Minta siswa A bertanya ke siswa B.
AKSI: Minta siswa A mengisi kartu untuk B berdasarkan jawaban siswa B.
AKSI: Minta siswa B bertanya ke siswa A.
AKSI: Minta siswa B mengisi kartu untuk A berdasarkan jawaban siswa A.
AKSI: Beri waktu lima sampai enam menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang dan pojok kelas.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika pasangan diam setelah kartu dibagikan: tunjuk kolom Name, ucapkan "What is your name?", tunggu siswa meniru pertanyaan ke pasangannya. Jika siswa mengintip Profile Note pasangan: tepuk bahu lembut, ucapkan "Ask. Don\'t look.".',
          cue         : 'Kartu dibagikan dalam keadaan kosong. My Profile Note pasangan tetap tertutup selama bertanya.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, demo ulang dengan guru sebagai pasangan, sederhanakan ke dua pertanyaan, lalu restart selama 60 detik.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk dua sampai tiga pasangan.
UCAP: "Tell me one thing about your partner. One sentence."
AKSI: Tunggu jawaban tiap pasangan yang ditunjuk.
UCAP: "Interesting. Does anyone live in the same city?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa bingung memulai: ucapkan "Her name is..." atau "His name is...", tunjuk kartu mereka, tunggu siswa melanjutkan.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 12 menit. Cukup satu kalimat per siswa, maksimal tiga pasangan.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Hapus atau tutup text-anchor dari papan tulis.
UCAP: "Now, write your own profile. Not Rina's. Yours."
UCAP: "At least three sentences. You can use your Profile Note to start."
AKSI: Minta siswa menulis profil secara individual.
AKSI: Beri waktu delapan sampai sepuluh menit.
AKSI: Setelah menit kedua, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa memegang pensil tapi tidak menulis: ucapkan "Your name in English. Write: My name is...", tunggu siswa menulis satu kalimat, lalu tinggalkan.',
          cue         : 'Text-anchor sudah diturunkan sebelum layar ini. Setiap profil mencerminkan siswa sendiri, bukan salinan kalimat Rina.',
          darurat     : 'Jika waktu tersisa 5 menit atau kurang dan sebagian besar siswa baru menulis satu kalimat → ucapkan "Two sentences. That is enough for today.", lalu lanjut ke Layar 9.',
          diferensiasi: null,
          blok        : 'OUTPUT',
        },

        {
          id          : 'l9',
          tipe        : 'instruksi',
          teks        : `AKSI: Setelah delapan menit, beri sinyal tanpa menghentikan siswa yang masih menulis.
UCAP: "Two more minutes. Read your sentences. Can you add one more?"
AKSI: Pantau hasil tulisan semua siswa tanpa mengoreksi.`,
          bantuan     : 'Jika siswa selesai tapi hanya menulis dua kalimat: arahkan dengan pertanyaan, "What can you do? Can you write: I can...?", tunggu siswa menulis sendiri.',
          cue         : 'Yang diperiksa adalah apakah profil mencerminkan siswa sendiri, bukan kelengkapan grammar.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati dan ucapkan kalimat pertama dengan nama siswa, lalu biarkan mereka melanjutkan.',
            sudahBisa   : 'Minta tulis satu kalimat tambahan yang menyambungkan dua hal dengan and, "I like football and swimming.".',
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
          teks        : `AKSI: Tanyakan siapa yang mau membacakan satu sampai dua kalimat dari profilnya.
UCAP: "Who wants to share? One or two sentences. That is enough."
AKSI: Tunjuk satu sampai tiga siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Does anyone live in the same city?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk siswa yang paling aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Cukup satu atau dua kalimat dari tempat duduk.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today you wrote about yourself. In English."
AKSI: Jeda 2 detik.
UCAP: "Your name. Your age. Your city. What you like."
AKSI: Jeda 2 detik.
UCAP: "That is your profile. Keep it."
AKSI: Tunjuk profil yang sudah ditulis siswa.
UCAP: "Next time, we describe someone we know."
AKSI: Jeda 1 detik.
UCAP: "A friend. A parent. Maybe a teacher."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : 'Kalimat terakhir adalah penutup sesi, bukan pengingat tugas.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C01;
