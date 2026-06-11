const TP_C02 = {

  // METADATA
  id             : 'tp-c02',
  nomor          : 2,
  kelas          : 5,
  nama           : 'Describing People I Know',
  tema           : 'Diri yang Lebih Lengkap',
  kluster        : 'A — Diri yang Lebih Lengkap',
  jenis          : 'Biasa',
  text_anchor    : 'My father is tall. He has short hair. He is kind and funny.',
  connector_aktif: 'and + but — exposure only; fokus produksi di TP-07',
  recycle_fase_b : [
    'She/He has... (TP-02 Fase B)',
    'is [adjective] (Fase A/B)',
    'I like... (TP-13 Fase B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat mendeskripsikan seseorang yang dikenal dalam minimal tiga kalimat menggunakan pola [Name] is... / He/She has... / He/She is... and...',
    'Peserta didik dapat menggunakan connector and (konfirmasi) dan but (exposure) dalam kalimat deskripsi.',
    'Peserta didik dapat menggali informasi deskripsi pasangan melalui pertanyaan lisan dan menuliskannya di Comparison Table.',
  ],
  vocab     : ['tall', 'short', 'kind', 'funny', 'patient', 'quiet', 'loud', 'hair'],
  persiapan : [
    'My Person Card satu per siswa, berisi baris isian "Who? (lingkari satu): father, mother, sibling, friend, teacher, other ___. [Name] is ___. He or she has ___. He or she is ___ and ___.", dicetak sebelum kelas dimulai, di meja guru sebelum dibagikan, untuk Layar 4. Pada awal Layar 6 kartu ini diletakkan tertutup menghadap bawah di meja siswa.',
    'Comparison Table satu per siswa, tabel dua kolom My Person dan My Partner\'s Person dengan tiga baris Relationship, Physical, dan Personality, kolom My Partner\'s Person kosong, dicetak sebelum kelas dimulai, dibagikan tepat sebelum Layar 6.',
    'Text-anchor "My father is tall. He has short hair. He is kind and funny." ditulis di papan tulis sebelum siswa masuk, tetap tampil dari Layar 2 sampai akhir Layar 7, dihapus atau ditutup sebelum Layar 8.',
    'Papan tulis dan spidol untuk menulis baris isian dan jawaban demo tabel di Layar 4 dan Layar 6.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Profil TP-01', tujuan: 'Guru mengaktifkan kembali pola kalimat profil dari TP-01.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Topik dan Framing Inklusif', tujuan: 'Guru memperkenalkan text-anchor dan pilihan figur bebas.' },
    { layar:  3, judul: 'Inti · INPUT · Model Guru', tujuan: 'Guru memodelkan deskripsi dan memajankan connector but.' },
    { layar:  4, judul: 'Inti · My Person Card', tujuan: 'Guru memandu siswa memilih figur dan mengisi kartu.' },
    { layar:  5, judul: 'Inti · Drill Cepat Describe and Guess', tujuan: 'Guru melatih ritme deskripsi dan tebakan.' },
    { layar:  6, judul: 'Inti · INTERACT · Comparison Table Exchange', tujuan: 'Guru memandu siswa mengisi tabel pasangan lewat bertanya.' },
    { layar:  7, judul: 'Inti · Mini-Share Satu Kesamaan', tujuan: 'Guru memandu siswa membandingkan figur.' },
    { layar:  8, judul: 'Inti · OUTPUT · Write My Person', tujuan: 'Guru memandu siswa menulis deskripsi figur sendiri.' },
    { layar:  9, judul: 'Inti · Check and Extend', tujuan: 'Guru memandu siswa memeriksa dan menambah kalimat.' },
    { layar: 10, judul: 'Penutup · Sharing ke Kelas', tujuan: 'Guru memandu siswa membagikan deskripsi ke semua siswa.' },
    { layar: 11, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-03.' },
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
UCAP: "Today we describe someone special."`,
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
UCAP: "Last time, you wrote about yourself. In English."
AKSI: Jeda 2 detik.
UCAP: "Who remembers one sentence from their profile?"
AKSI: Tunggu dua sampai tiga siswa menyebut kalimat dari tulisan mereka.
UCAP: "Good. Today, we don't describe ourselves."
AKSI: Jeda 1 detik.
UCAP: "We describe someone we know."`,
          bantuan     : 'Jika tidak ada yang merespons dalam 5 detik: ucapkan contoh "My name is Rina. I live in Bandung.", lalu tanya "Who has a sentence like this about yourself?".',
          cue         : 'Reactivation cukup dua sampai tiga kalimat dari siswa yang berbeda.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk text-anchor di papan tulis.
UCAP: "Look at the board. This is a description of someone."
👂 LISTEN FIRST
AKSI: Baca text-anchor perlahan sambil menunjuk tiap baris.
UCAP: "My father is tall."
UCAP: "He has short hair."
UCAP: "He is kind and funny."
UCAP: "This is about a father. But today, you can describe anyone."
AKSI: Jeda 2 detik.
UCAP: "A friend. A parent. A sibling. A teacher. Anyone you know well."`,
          bantuan     : 'Jika siswa bertanya boleh siapa saja: angguk, ucapkan "Yes, a friend, a teacher, anyone you know.".',
          cue         : 'Text-anchor adalah satu contoh, bukan satu-satunya pilihan. Kalimat "you can describe anyone" adalah undangan terbuka, bukan aturan.',
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
UCAP: "Now, my turn. I will describe two people I know."
UCAP: "My mother is tall."
UCAP: "She has long hair."
UCAP: "She is patient and kind."
AKSI: Jeda 1 detik.
UCAP: "My father is not tall."
UCAP: "But my father is funny."
UCAP: "But. It shows something different."
AKSI: Tunjuk text-anchor di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa membaca text-anchor bersama.
UCAP: "Read with me. Ready?"
UCAP: "Say it with me!"
AKSI: Tunggu semua siswa membaca text-anchor bersama.`,
          bantuan     : 'Jika siswa tidak ikut membaca bersama: tunjuk baris demi baris di papan tulis sambil membaca.',
          cue         : 'Connector "but" dimodelkan lewat dua kalimat pendek terpisah, exposure only. Jangan gunakan satu kalimat majemuk panjang.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan My Person Card, satu per siswa.
AKSI: Tulis baris isian di papan tulis di bawah text-anchor: "Who? ___. [Name] is ___. He or she has ___. He or she is ___ and ___.".
UCAP: "Choose one person you know well."
UCAP: "A friend. A parent. A sibling. A teacher. Anyone."
UCAP: "Write three things about them. Three minutes. Go."
AKSI: Beri waktu tiga menit untuk memilih dan menulis.
AKSI: Tunjuk dua sampai tiga siswa secara acak.
UCAP: "Read one sentence about your person. Go."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika siswa ragu memilih figur: bisikkan "You can describe a teacher or a friend, anyone is fine.". Jika siswa tidak tahu adjective yang dibutuhkan: tunjuk papan tulis, ucapkan "tall, short, kind, funny, patient, quiet", biarkan siswa memilih.',
          cue         : 'Setiap siswa memilih figur dan mengisi minimal dua baris sebelum Layar 6. Kartu ini dipakai lagi di blok INTERACT.',
          darurat     : 'Jika ada siswa belum memilih figur setelah tiga menit → dekati, tunjuk baris "Who?", bantu isi satu kata di baris pertama.',
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau berdiri.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "Describe your person, but don't say who they are. Just describe."
UCAP: "Everyone, listen and guess. Who is this person?"
AKSI: Minta siswa mendeskripsikan orangnya dua sampai tiga kalimat tanpa menyebut hubungan.
AKSI: Minta semua siswa menebak siapa orang itu.
AKSI: Tunggu siswa di depan mengonfirmasi.
AKSI: Ulangi dengan satu siswa lain dari barisan berbeda.`,
          bantuan     : 'Jika siswa yang berdiri tidak tahu harus mulai dari mana: ucapkan "Start with: My person is...", tunggu siswa melanjutkan.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 10 menit sebelum blok INTERACT.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan Comparison Table, satu per siswa, kolom My Partner's Person kosong.
UCAP: "Fill in your column first. My Person. Use your card."
AKSI: Beri waktu satu menit untuk mengisi kolom My Person.
UCAP: "Your partner's column is empty. You need to ask."
👂 LISTEN FIRST
AKSI: Peragakan tanya jawab dengan satu siswa di depan.
UCAP: "Who is your person?"
AKSI: Tunggu jawaban siswa.
AKSI: Tulis jawaban di baris Relationship pada tabel contoh.
UCAP: "What does he or she look like?"
AKSI: Tunggu jawaban siswa.
UCAP: "What is he or she like?"
AKSI: Tunggu jawaban siswa.
UCAP: "Now your turn."
AKSI: Minta siswa duduk berpasangan.
AKSI: Minta siswa meletakkan My Person Card tertutup menghadap bawah di meja.
AKSI: Minta siswa A bertanya ke siswa B.
AKSI: Minta siswa A mengisi kolom My Partner's Person berdasarkan jawaban siswa B.
AKSI: Minta siswa B bertanya ke siswa A.
AKSI: Minta siswa B mengisi kolom My Partner's Person berdasarkan jawaban siswa A.
UCAP: "Is there anything the same between your person and your partner's person?"
AKSI: Beri waktu lima sampai enam menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang dan pojok kelas.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika pasangan tidak tahu harus bertanya apa: tunjuk baris "Relationship", ucapkan "Who is your person?", tunggu siswa meniru. Jika siswa mengisi kolom My Partner tanpa bertanya: tutup tabel dengan tangan, ucapkan "Ask first. Then write.".',
          cue         : 'Kolom My Person terisi sebelum pair work dimulai. Kolom My Partner\'s Person dibagikan dalam keadaan kosong.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, demo ulang dengan guru sebagai pasangan, sederhanakan ke dua pertanyaan, lalu restart selama 60 detik.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk dua sampai tiga pasangan.
UCAP: "Did you find anything the same between your person and your partner's person?"
AKSI: Tunggu jawaban tiap pasangan yang ditunjuk.
UCAP: "Interesting. What is different?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa tidak bisa menjawab pertanyaan kesamaan: ucapkan "OK, what is different?", jawaban kontras sama validnya.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 12 menit. Pertanyaan "What is different?" dipakai sebagai fallback jika tidak ada kesamaan.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Hapus atau tutup text-anchor dari papan tulis.
UCAP: "Now, write about your person. Not the father from the board. Your person."
UCAP: "At least three sentences. You can use your Person Card to start."
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan sampai sepuluh menit.
AKSI: Setelah menit kedua, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa memegang pensil tapi tidak menulis: ucapkan kalimat pertama dengan figur yang siswa pilih, tunggu siswa menulis satu kalimat, lalu tinggalkan.',
          cue         : 'Text-anchor sudah diturunkan sebelum layar ini. Tiap deskripsi berbeda karena tiap siswa memilih figur yang berbeda.',
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
          bantuan     : 'Jika siswa selesai tapi hanya menulis dua kalimat: tanyakan "What does he or she like to do?", tunggu siswa menulis kalimat tambahan sendiri.',
          cue         : 'Yang diperiksa adalah apakah deskripsi mencerminkan orang nyata, bukan kelengkapan grammar.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati dan ucapkan kalimat pertama dengan figur siswa, lalu biarkan mereka melanjutkan.',
            sudahBisa   : 'Minta tambah satu kalimat kontras dengan but, "My sister is quiet, but my brother is loud.".',
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
          teks        : `AKSI: Tanyakan siapa yang mau membacakan satu sampai dua kalimat dari deskripsinya.
UCAP: "Who wants to share? One or two sentences, from your seat is fine."
AKSI: Tunjuk satu sampai tiga siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Who described a friend? Who described a teacher?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk siswa yang paling aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Pertanyaan tentang teman atau guru lebih aman daripada tentang figur keluarga.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today you described someone you know. In English."
AKSI: Jeda 2 detik.
UCAP: "Tall or short. Kind or funny. Patient or loud."
AKSI: Jeda 2 detik.
UCAP: "That is a description. Keep it."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time, we describe a place."
AKSI: Jeda 1 detik.
UCAP: "Your home. Your neighborhood. What is around you."
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

export default TP_C02;
