const TP_C03 = {

  // METADATA
  id             : 'tp-c03',
  nomor          : 3,
  kelas          : 5,
  nama           : 'My Home and Neighborhood',
  tema           : 'Diri yang Lebih Lengkap',
  kluster        : 'A — Diri yang Lebih Lengkap',
  jenis          : 'Biasa',
  text_anchor    : 'My house is near a mosque. There is a garden next to it. It is quiet and clean.',
  connector_aktif: 'and — reinforcement; fokus produksi di TP-04',
  recycle_fase_b : [
    'There is / There are... (TP-03 Fase B)',
    'next to / across from (TP-03 Fase B)',
    'is [adjective] (Fase A/B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat mendeskripsikan lingkungan sekitar rumah dalam minimal tiga kalimat menggunakan pola My house is near... / There is... / It is... and...',
    'Peserta didik dapat menggunakan connector and untuk menghubungkan dua kata sifat dalam kalimat deskripsi tempat (reinforcement).',
    'Peserta didik dapat menggali informasi lingkungan pasangan melalui pertanyaan lisan dan menuliskannya di Comparison Table.',
  ],
  vocab     : ['mosque', 'market', 'school', 'garden', 'rice field', 'river', 'quiet', 'busy', 'clean', 'green', 'noisy'],
  persiapan : [
    'My Neighborhood Card satu per siswa, berisi tiga baris isian "Near my house: ___. Next to it: ___. It is: ___.", dicetak sebelum kelas dimulai, di meja guru sebelum dibagikan, untuk Layar 4. Pada awal Layar 6 kartu ini diletakkan tertutup menghadap bawah di meja siswa.',
    'Comparison Table satu per siswa, tabel dua kolom My Neighborhood dan My Partner\'s Neighborhood dengan tiga baris Near my house, Next to it, dan It is, kolom My Partner\'s Neighborhood kosong, dicetak sebelum kelas dimulai, dibagikan tepat sebelum Layar 6.',
    'Text-anchor "My house is near a mosque. There is a garden next to it. It is quiet and clean." ditulis di papan tulis sebelum siswa masuk, tetap tampil dari Layar 2 sampai akhir Layar 7, dihapus atau ditutup sebelum Layar 8.',
    'Papan tulis dan spidol untuk menulis baris isian, daftar kata sifat, dan jawaban demo tabel di Layar 4 dan Layar 6.',
  ],
  media     : [],
  printables: [
    { file: 'tp-c03-mosque.png', label: 'Mosque' },
    { file: 'tp-c03-market.png', label: 'Market' },
    { file: 'tp-c03-school.png', label: 'School' },
    { file: 'tp-c03-garden.png', label: 'Garden' },
    { file: 'tp-c03-rice-field.png', label: 'Rice Field' },
    { file: 'tp-c03-river.png', label: 'River' },
    { file: 'tp-c03-neighborhood-card.png', label: 'My Neighborhood Card' },
    { file: 'tp-c03-comparison-table.png', label: 'Comparison Table' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Deskripsi TP-02', tujuan: 'Guru mengaktifkan kembali pola deskripsi dari TP-02.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Text-Anchor dan Framing Inklusif', tujuan: 'Guru memperkenalkan text-anchor dan pilihan lingkungan bebas.' },
    { layar:  3, judul: 'Inti · INPUT · Model Guru', tujuan: 'Guru memodelkan deskripsi lingkungan dan memperkuat connector and.' },
    { layar:  4, judul: 'Inti · My Neighborhood Card', tujuan: 'Guru memandu siswa mengisi kartu lingkungan sendiri.' },
    { layar:  5, judul: 'Inti · Drill Cepat What\'s Near Your House', tujuan: 'Guru melatih ritme pertanyaan tentang tempat.' },
    { layar:  6, judul: 'Inti · INTERACT · Neighborhood Comparison Table Exchange', tujuan: 'Guru memandu siswa mengisi tabel pasangan lewat bertanya.' },
    { layar:  7, judul: 'Inti · Mini-Share Sama atau Berbeda', tujuan: 'Guru memandu siswa membandingkan lingkungan.' },
    { layar:  8, judul: 'Inti · OUTPUT · Write My Neighborhood', tujuan: 'Guru memandu siswa menulis deskripsi lingkungan sendiri.' },
    { layar:  9, judul: 'Inti · Check and Extend', tujuan: 'Guru memandu siswa memeriksa dan menambah kalimat.' },
    { layar: 10, judul: 'Penutup · Sharing ke Kelas', tujuan: 'Guru memandu siswa membagikan deskripsi ke semua siswa.' },
    { layar: 11, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-04.' },
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
UCAP: "Today we talk about where we live."`,
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
UCAP: "Last time, you described someone you know."
AKSI: Jeda 2 detik.
UCAP: "Who remembers one sentence from their description?"
AKSI: Tunggu dua sampai tiga siswa menyebut kalimat dari tulisan mereka.
UCAP: "Good. Today, not a person. A place."
AKSI: Jeda 1 detik.
UCAP: "Your home. And what is around it."`,
          bantuan     : 'Jika tidak ada yang merespons dalam 5 detik: ucapkan contoh "My father is tall. He is kind and funny.", lalu tanya "Who has a sentence like this about your person?".',
          cue         : 'Reactivation cukup dua sampai tiga kalimat dari siswa yang berbeda.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk text-anchor di papan tulis.
UCAP: "Look at the board. This is a description of a place."
👂 LISTEN FIRST
AKSI: Baca text-anchor perlahan sambil menunjuk tiap baris.
UCAP: "My house is near a mosque."
UCAP: "There is a garden next to it."
UCAP: "It is quiet and clean."
UCAP: "This is one example. One neighborhood."
AKSI: Jeda 2 detik.
UCAP: "Your neighborhood might be different, and that is fine."
UCAP: "Near a market. Near a school. Near rice fields. Near a river. Whatever is near your home."`,
          bantuan     : 'Jika siswa bertanya boleh berbeda: angguk, ucapkan "That is fine. What is near your house?".',
          cue         : 'Text-anchor adalah satu contoh, bukan satu-satunya template. Kalimat "your neighborhood might be different" adalah undangan terbuka, bukan koreksi.',
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
UCAP: "Now, my turn. I will describe my neighborhood."
UCAP: "My house is near a school."
UCAP: "There is a small shop next to it."
UCAP: "It is quiet and green."
AKSI: Tunjuk baris "It is quiet and clean." di text-anchor papan tulis.
UCAP: "And. It connects two things. Quiet and clean. Quiet and green."
🗣 TOGETHER
AKSI: Ajak semua siswa membaca text-anchor bersama.
UCAP: "Read with me. Ready?"
UCAP: "Say it with me!"
AKSI: Tunggu semua siswa membaca text-anchor bersama.`,
          bantuan     : 'Jika siswa tidak ikut membaca bersama: tunjuk baris demi baris di papan tulis sambil membaca.',
          cue         : 'Model guru tentang lingkungan nyata guru. Connector "and" adalah reinforcement, bukan grammar baru.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan My Neighborhood Card, satu per siswa.
AKSI: Tulis baris isian di papan tulis di bawah text-anchor: "Near my house: ___. Next to it: ___. It is: ___.".
AKSI: Tulis daftar kata sifat di pojok papan tulis: "quiet, busy, clean, green, noisy".
UCAP: "Think about your home. What is near it?"
UCAP: "Write three things. Use your neighborhood, not the example on the board."
UCAP: "Three minutes. Go."
AKSI: Beri waktu tiga menit untuk berpikir dan menulis.
AKSI: Tunjuk dua sampai tiga siswa secara acak.
UCAP: "Read one thing. What is near your house?"
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika siswa tidak tahu kata Inggris untuk tempat di sekitar rumah: ucapkan opsi "mosque, market, school, rice field, river", minta siswa pilih yang paling dekat. Jika siswa tidak tahu kata sifat: tunjuk daftar di pojok papan tulis, biarkan siswa memilih.',
          cue         : 'Setiap siswa mengisi minimal baris pertama sebelum Layar 6. Kartu ini dipakai lagi di blok INTERACT.',
          darurat     : 'Jika ada siswa belum mengisi apa pun setelah tiga menit → dekati, tunjuk baris "Near my house", bantu isi satu kata di baris pertama.',
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau berdiri.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "Tell us, what is near your house? One sentence."
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Is there anything next to it?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi dengan tiga sampai empat siswa dari barisan berbeda secara cepat.
UCAP: "Is anyone's neighborhood similar? Raise your hand."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika tidak ada yang mau berdiri: tunjuk siswa yang paling aktif merespons di Layar 4.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 10 menit sebelum blok INTERACT.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan Comparison Table, satu per siswa, kolom My Partner's Neighborhood kosong.
UCAP: "Fill in your column first. My Neighborhood. Use your card."
AKSI: Beri waktu satu menit untuk mengisi kolom My Neighborhood.
UCAP: "Your partner's column is empty. You need to ask."
👂 LISTEN FIRST
AKSI: Peragakan tanya jawab dengan satu siswa di depan.
UCAP: "What is near your house?"
AKSI: Tunggu jawaban siswa.
AKSI: Tulis jawaban di baris Near my house pada kolom My Partner di tabel contoh.
UCAP: "What is next to it?"
AKSI: Tunggu jawaban siswa.
UCAP: "What is it like? Is it quiet or busy?"
AKSI: Tunggu jawaban siswa.
UCAP: "Now your turn."
AKSI: Minta siswa duduk berpasangan.
AKSI: Minta siswa meletakkan My Neighborhood Card tertutup menghadap bawah di meja.
AKSI: Minta siswa A bertanya ke siswa B.
AKSI: Minta siswa A mengisi kolom My Partner's Neighborhood berdasarkan jawaban siswa B.
AKSI: Minta siswa B bertanya ke siswa A.
AKSI: Minta siswa B mengisi kolom My Partner's Neighborhood berdasarkan jawaban siswa A.
UCAP: "Is your neighborhood similar or different?"
AKSI: Beri waktu lima sampai enam menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang dan pojok kelas.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika pasangan tidak tahu harus bertanya apa: tunjuk baris "Near my house", ucapkan "What is near your house?", tunggu siswa meniru. Jika siswa mengisi kolom My Partner tanpa bertanya: tutup tabel dengan tangan, ucapkan "Ask first. Then write.".',
          cue         : 'Kolom My Neighborhood terisi sebelum pair work dimulai. Kolom My Partner\'s Neighborhood dibagikan dalam keadaan kosong.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, demo ulang dengan guru sebagai pasangan, sederhanakan ke dua pertanyaan, lalu restart selama 60 detik.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk dua sampai tiga pasangan.
UCAP: "Is your neighborhood similar to your partner's? Or different?"
AKSI: Tunggu jawaban tiap pasangan yang ditunjuk.
UCAP: "Interesting. Who lives near something different from everyone else?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa tidak bisa menjawab: tunjuk tabel mereka, ucapkan "Look. This row, Near my house. Is it the same?", minta bandingkan satu baris dulu.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 12 menit. Pertanyaan "similar or different?" dipakai sebagai entri jawaban.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Hapus atau tutup text-anchor dari papan tulis.
UCAP: "Now, write about your home and neighborhood."
UCAP: "Not the example from the board. Your home. Your neighborhood."
UCAP: "At least three sentences. You can use your Neighborhood Card to start."
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan sampai sepuluh menit.
AKSI: Setelah menit kedua, pantau penulisan semua siswa, prioritaskan barisan belakang dan pojok kelas.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa memegang pensil tapi tidak menulis: ucapkan "What is near your house? Write: My house is near...", tunggu siswa menulis satu kalimat, lalu tinggalkan.',
          cue         : 'Text-anchor sudah diturunkan sebelum layar ini. Tiap deskripsi berbeda karena tiap siswa punya lingkungan yang berbeda.',
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
          bantuan     : 'Jika siswa selesai tapi hanya menulis dua kalimat: tanyakan "What is it like? Is it quiet? Is it clean?", tunggu siswa menulis kalimat tambahan sendiri.',
          cue         : 'Yang diperiksa adalah apakah deskripsi mencerminkan lingkungan nyata siswa, bukan kelengkapan grammar.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati dan ucapkan kalimat pertama dengan informasi siswa, lalu biarkan mereka melanjutkan.',
            sudahBisa   : 'Minta tambah satu kalimat dengan and yang menghubungkan dua hal, "It is quiet and cool.".',
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
UCAP: "Who also lives near the same place? Raise your hand."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk siswa yang paling aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Pertanyaan "who also lives near..." inklusif dan tidak memaksa.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today you described where you live. In English."
AKSI: Jeda 2 detik.
UCAP: "What is near your house. What is next to it. What it is like."
AKSI: Jeda 2 detik.
UCAP: "That is your neighborhood. Keep it."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time, you will write about yourself."
AKSI: Jeda 1 detik.
UCAP: "Your name. Your home. Your neighborhood. Everything together."
AKSI: Jeda 1 detik.
UCAP: "One piece of writing. About you."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : 'Kalimat terakhir adalah penutup sesi, bukan pengumuman tugas.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C03;
