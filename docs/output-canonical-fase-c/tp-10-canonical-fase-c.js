const TP_C10 = {

  // METADATA
  id             : 'tp-c10',
  nomor          : 10,
  kelas          : 5,
  nama           : 'Weather and What We Wear',
  tema           : 'Dunia di Luar Rumah',
  kluster        : 'C — Dunia di Luar Rumah',
  jenis          : 'Biasa',
  text_anchor    : 'When it is rainy, I wear a raincoat. So I stay dry. I also bring an umbrella.',
  connector_aktif: 'when + so — exposure pasangan kondisi dan akibat; when fokus produksi di TP-14, so di TP-17',
  recycle_fase_b : [
    'When it..., I... (TP-10 Fase B)',
    'I also... (Fase A/B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat mendeskripsikan dua situasi cuaca dan respons yang sesuai dalam minimal tiga kalimat menggunakan pola When it is [weather], I wear... / So I stay...',
    'Peserta didik dapat menggunakan pasangan connector when...so sebagai kondisi→akibat (exposure pertama).',
    'Peserta didik dapat menggali informasi kebiasaan cuaca pasangan melalui pertanyaan lisan dan menuliskannya di Partner\'s Weather Card.',
  ],
  vocab     : ['rainy', 'hot', 'windy', 'cloudy', 'raincoat', 'umbrella', 'jacket', 't-shirt', 'dry', 'cool', 'warm'],
  persiapan : [
    'My Weather Card satu per siswa, dua kolom Weather dan "I wear... / I bring..." dengan dua baris untuk dua situasi cuaca, dicetak sebelum kelas dimulai, di meja guru sebelum dibagikan, untuk Layar 4. Pada awal Layar 6 kartu ini diletakkan tertutup menghadap bawah di meja siswa.',
    'Partner\'s Weather Card satu per siswa, format kolom yang sama dengan dua baris semua kosong, dicetak sebelum kelas dimulai, dibagikan tepat sebelum Layar 6.',
    'Text-anchor "When it is rainy, I wear a raincoat. So I stay dry. I also bring an umbrella." ditulis di papan tulis sebelum siswa masuk, tetap tampil dari Layar 2 sampai akhir Layar 7, dihapus atau ditutup sebelum Layar 8.',
    'Papan tulis dan spidol untuk menulis daftar kata dan jawaban demo kartu di Layar 4 dan Layar 6.',
  ],
  media     : [],
  printables: [
    { file: 'tp-c10-rainy.png', label: 'Rainy' },
    { file: 'tp-c10-hot.png', label: 'Hot' },
    { file: 'tp-c10-windy.png', label: 'Windy' },
    { file: 'tp-c10-cloudy.png', label: 'Cloudy' },
    { file: 'tp-c10-raincoat.png', label: 'Raincoat' },
    { file: 'tp-c10-umbrella.png', label: 'Umbrella' },
    { file: 'tp-c10-jacket.png', label: 'Jacket' },
    { file: 'tp-c10-t-shirt.png', label: 'T-Shirt' },
    { file: 'tp-c10-weather-card.png', label: 'My Weather Card' },
    { file: 'tp-c10-partner-card.png', label: "Partner's Weather Card" },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Tulisan TP-09', tujuan: 'Guru mengaktifkan kembali deskripsi tempat dari TP-09.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Text-anchor dan Framing Inklusif', tujuan: 'Guru memperkenalkan text-anchor dan pilihan cuaca bebas.' },
    { layar:  3, judul: 'Inti · INPUT · Model Guru', tujuan: 'Guru memodelkan dua situasi cuaca dengan when dan so.' },
    { layar:  4, judul: 'Inti · My Weather Card', tujuan: 'Guru memandu siswa mengisi kartu cuaca sendiri.' },
    { layar:  5, judul: 'Inti · Drill Cepat Weather Call-and-Response', tujuan: 'Guru melatih pasangan when dan respons.' },
    { layar:  6, judul: 'Inti · INTERACT · Partner\'s Weather Card Exchange', tujuan: 'Guru memandu siswa mengisi kartu pasangan lewat bertanya.' },
    { layar:  7, judul: 'Inti · Mini-Share Cuaca Sama Pilihan Berbeda', tujuan: 'Guru memandu siswa membandingkan pilihan cuaca.' },
    { layar:  8, judul: 'Inti · OUTPUT · Write When the Weather Changes', tujuan: 'Guru memandu siswa menulis cuaca sendiri.' },
    { layar:  9, judul: 'Inti · Check and Extend', tujuan: 'Guru memandu siswa memeriksa dan menambah kalimat.' },
    { layar: 10, judul: 'Penutup · Sharing ke Kelas', tujuan: 'Guru memandu siswa membagikan tulisan ke semua siswa.' },
    { layar: 11, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-11.' },
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
UCAP: "Today, the weather."`,
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
UCAP: "Last time, you described a place near your house or school."
AKSI: Jeda 2 detik.
UCAP: "Who remembers one sentence from that writing?"
AKSI: Tunggu dua sampai tiga siswa menyebut kalimat dari tulisan TP-09 mereka.
UCAP: "Good. Today, the place is the same."
AKSI: Jeda 1 detik.
UCAP: "But the sky is different."`,
          bantuan     : 'Jika tidak ada yang merespons dalam 5 detik: ucapkan contoh "There is a market near my house. It is big and busy.", lalu tanya "Who has a sentence like this from last time?".',
          cue         : 'Bridge "the place is the same, but the sky is different" menghubungkan TP-09 ke TP-10.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk text-anchor di papan tulis.
UCAP: "Look at the board. This is about weather, and what we do."
👂 LISTEN FIRST
AKSI: Baca text-anchor perlahan sambil menunjuk tiap baris.
UCAP: "When it is rainy, I wear a raincoat."
UCAP: "So I stay dry."
UCAP: "I also bring an umbrella."
UCAP: "This is about rain. But today, you describe your weather."
AKSI: Jeda 2 detik.
UCAP: "Rainy, hot, windy, cloudy, or any weather near you."
UCAP: "Any weather is valid. Your weather."`,
          bantuan     : 'Jika siswa bertanya boleh cuaca apa saja: angguk, ucapkan "Yes, hot, rainy, windy, any weather you know.".',
          cue         : 'Framing "any weather near you" mencakup cuaca dengan variasi terbatas. Hot dan cloudy sama validnya dengan rainy.',
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
UCAP: "Now, my turn. Two weather situations."
UCAP: "When it is rainy, I wear a raincoat."
UCAP: "So I stay dry."
UCAP: "I also bring an umbrella."
AKSI: Jeda 1 detik.
UCAP: "When it is hot, I wear a t-shirt."
UCAP: "So I feel cool."
UCAP: "I also drink a lot of water."
AKSI: Jeda 1 detik.
UCAP: "When, so. One situation, one result."
AKSI: Tunjuk text-anchor di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa membaca text-anchor bersama.
UCAP: "Read with me. Ready?"
UCAP: "Say it with me!"
AKSI: Tunggu semua siswa membaca text-anchor bersama.`,
          bantuan     : 'Jika siswa tidak ikut membaca bersama: tunjuk baris demi baris di papan tulis sambil membaca.',
          cue         : 'when dan so muncul sebagai pasangan kondisi dan akibat, dimodelkan dua kali. Satu noticing saja, tidak lebih.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan My Weather Card, satu per siswa.
AKSI: Tulis daftar kata di pojok papan tulis: "raincoat, umbrella, jacket, t-shirt, hat".
UCAP: "Fill in your card. Two weather situations near you."
UCAP: "What weather do you know? What do you wear or bring?"
UCAP: "Rainy, hot, windy, any weather. Two minutes. Go."
AKSI: Beri waktu dua menit untuk mengisi kartu.
AKSI: Tunjuk dua sampai tiga siswa secara acak.
UCAP: "Read one row. What weather, and what do you wear?"
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika siswa tidak tahu cuaca apa yang ditulis: ucapkan "What is the weather like near your house? Hot? Rainy?", tunggu siswa menyebut satu kata. Jika siswa tidak tahu kata benda perlengkapan: tunjuk daftar di pojok papan tulis, biarkan siswa memilih.',
          cue         : 'Setiap siswa mengisi minimal satu baris, termasuk kolom "I wear / I bring", sebelum Layar 6. Kartu ini dipakai lagi di blok INTERACT.',
          darurat     : 'Jika ada siswa masih kosong setelah dua menit → dekati, tunjuk baris pertama kolom "Weather", bantu isi satu kata.',
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Ucapkan "When it is rainy" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Ucapkan "When it is hot" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Ucapkan "When it is windy" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Ulangi dengan satu starter lagi dari barisan berbeda secara cepat.`,
          bantuan     : 'Jika semua siswa tidak merespons starter pertama: ucapkan respons sendiri "I wear a raincoat", lalu ulangi starter yang sama dan tunjuk satu siswa.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 10 menit sebelum blok INTERACT.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan Partner's Weather Card, satu per siswa, semua kolom kosong.
UCAP: "This card is empty. You cannot fill it alone."
UCAP: "You need to ask your partner."
👂 LISTEN FIRST
AKSI: Peragakan tanya jawab dengan satu siswa di depan.
UCAP: "What do you wear when it is rainy?"
AKSI: Tunggu jawaban siswa.
AKSI: Tulis jawaban di baris pertama kolom kanan pada kartu contoh.
UCAP: "What else do you bring?"
AKSI: Tunggu jawaban siswa.
UCAP: "What about hot weather, what do you wear?"
AKSI: Tunggu jawaban siswa.
UCAP: "Now your turn. Ask your partner, fill in the card."
AKSI: Minta siswa duduk berpasangan.
AKSI: Minta siswa meletakkan My Weather Card tertutup menghadap bawah di meja.
AKSI: Minta siswa A bertanya ke siswa B.
AKSI: Minta siswa A mengisi Partner's Weather Card berdasarkan jawaban siswa B.
AKSI: Minta siswa B bertanya ke siswa A.
AKSI: Minta siswa B mengisi Partner's Weather Card berdasarkan jawaban siswa A.
UCAP: "Do we do the same thing in the same weather?"
AKSI: Beri waktu lima sampai enam menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika pasangan tidak tahu harus bertanya apa: tunjuk baris pertama kartu, ucapkan "What do you wear when it is rainy?", tunggu siswa meniru. Jika siswa mengisi kartu tanpa bertanya: tutup kartu dengan tangan, ucapkan "Ask first. Don\'t guess.".',
          cue         : 'Partner\'s Weather Card dibagikan dalam keadaan kosong. My Weather Card tetap tertutup selama pair work.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, demo ulang dengan guru sebagai pasangan, sederhanakan ke satu pertanyaan, lalu restart selama 60 detik.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk dua sampai tiga pasangan.
UCAP: "Did you find anything different? Same weather, different choices?"
AKSI: Tunggu jawaban tiap pasangan yang ditunjuk.
UCAP: "Interesting. Why different?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa tidak bisa menjawab apakah ada perbedaan: ucapkan "Just read one row. What does your partner wear?", siswa membacakan fakta.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 12 menit. Jika semua pasangan sama, cukup angguk dan lanjut.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Hapus atau tutup text-anchor dari papan tulis.
UCAP: "Now, write about your weather. Use your card."
UCAP: "At least three sentences. When it is a certain weather, you do something. What happens? What else do you bring?"
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan sampai sepuluh menit.
AKSI: Setelah menit kedua, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa memegang pensil tapi tidak menulis: tunjuk kartu mereka di baris pertama, ucapkan "Start here. When it is rainy, I...", tunggu siswa menulis satu kalimat, lalu tinggalkan.',
          cue         : 'Tidak ada pattern reminder di papan tulis. Kalimat tanpa "so" tetap valid di TP-10.',
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
          bantuan     : 'Jika siswa selesai tapi hanya menulis dua kalimat: tanyakan "What else do you bring when it rains?", tunggu siswa menulis kalimat tambahan sendiri.',
          cue         : 'Connector "so" tidak dipaksakan. Ini exposure, fokus produksi baru di TP-17.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati, tunjuk baris kedua di kartu, tanyakan "What about this weather? When it is the other weather, what do you do?".',
            sudahBisa   : 'Minta tambah satu kalimat dengan so atau because, "When it is windy, I wear a jacket. So I feel warm.".',
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
UCAP: "Who wants to share? One sentence, when and what you wear. From your seat is fine."
AKSI: Tunjuk satu sampai tiga siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Who does the same thing when it rains?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk siswa yang paling aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Pertanyaan "who does the same thing" membangun komunitas.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today you described weather. What you wear. What you bring."
AKSI: Jeda 2 detik.
UCAP: "When it changes, you know what to do."
AKSI: Jeda 2 detik.
UCAP: "Keep it."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time, animals."
AKSI: Jeda 1 detik.
UCAP: "Cats. Birds. Cows. What they do. Where they live."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : '"When it changes, you know what to do." adalah validasi fungsional, bukan recap materi.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C10;
