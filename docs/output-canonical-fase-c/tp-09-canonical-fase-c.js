const TP_C09 = {

  // METADATA
  id             : 'tp-c09',
  nomor          : 9,
  kelas          : 5,
  nama           : 'Places in My Town',
  tema           : 'Dunia di Luar Rumah',
  kluster        : 'C — Dunia di Luar Rumah',
  jenis          : 'Biasa',
  text_anchor    : 'There is a market near my school. It is big and busy. I go there with my mother.',
  connector_aktif: 'and — konfirmasi; tidak ada connector baru di TP-09',
  recycle_fase_b : [
    'There is / There are... (TP-03 Fase B)',
    'next to / across from (TP-03 Fase B)',
    'I go there with... (Fase A/B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat mendeskripsikan satu tempat di lingkungan sekitar dalam minimal tiga kalimat menggunakan pola There is... / It is [adj] and [adj] / I go there with...',
    'Peserta didik dapat menggunakan connector and untuk menggabungkan dua kata sifat dalam deskripsi tempat (konfirmasi).',
    'Peserta didik dapat menggali informasi tempat pasangan melalui pertanyaan lisan dan menuliskannya di Partner\'s Town Card.',
  ],
  vocab     : ['market', 'mosque', 'park', 'river', 'rice field', 'school', 'near', 'next to', 'big', 'busy', 'quiet', 'green'],
  persiapan : [
    'My Town Card satu per siswa, berisi tiga kolom Place, Location (near atau next to ___), dan What is it like (___ and ___) untuk tiga tempat, dicetak sebelum kelas dimulai, di meja guru sebelum dibagikan, untuk Layar 4. Pada awal Layar 6 kartu ini diletakkan tertutup menghadap bawah di meja siswa.',
    'Partner\'s Town Card satu per siswa, kartu dengan format kolom yang sama tetapi semua kolom kosong, dicetak sebelum kelas dimulai, dibagikan tepat sebelum Layar 6.',
    'Text-anchor "There is a market near my school. It is big and busy. I go there with my mother." ditulis di papan tulis sebelum siswa masuk, tetap tampil dari Layar 2 sampai akhir Layar 7, dihapus atau ditutup sebelum Layar 8.',
    'Pattern reminder "There is ___ near ___. It is ___ and ___. I go there with ___." ditulis di papan tulis tepat sebelum Layar 8, setelah text-anchor diturunkan.',
    'Papan tulis dan spidol untuk menulis daftar kata sifat dan jawaban demo kartu di Layar 4 dan Layar 6.',
  ],
  media     : [],
  printables: [
    { file: 'tp-c09-market.png', label: 'Market' },
    { file: 'tp-c09-mosque.png', label: 'Mosque' },
    { file: 'tp-c09-park.png', label: 'Park' },
    { file: 'tp-c09-river.png', label: 'River' },
    { file: 'tp-c09-rice-field.png', label: 'Rice Field' },
    { file: 'tp-c09-school.png', label: 'School' },
    { file: 'tp-c09-town-card.png', label: 'My Town Card' },
    { file: 'tp-c09-partner-card.png', label: "Partner's Town Card" },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Tulisan TP-08', tujuan: 'Guru mengaktifkan kembali tulisan minggu dari TP-08.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Teks dan Framing Inklusif', tujuan: 'Guru memperkenalkan text-anchor dan pilihan tempat bebas.' },
    { layar:  3, judul: 'Inti · INPUT · Model Guru', tujuan: 'Guru memodelkan dua tempat dan pola adjective and adjective.' },
    { layar:  4, judul: 'Inti · My Town Card', tujuan: 'Guru memandu siswa mengisi kartu tempat sendiri.' },
    { layar:  5, judul: 'Inti · Drill Cepat Where Is It', tujuan: 'Guru melatih pola lokasi near dan next to.' },
    { layar:  6, judul: 'Inti · INTERACT · Partner\'s Town Card Exchange', tujuan: 'Guru memandu siswa mengisi kartu pasangan lewat bertanya.' },
    { layar:  7, judul: 'Inti · Mini-Share Satu Tempat Menarik', tujuan: 'Guru memandu siswa membagikan tempat pasangan.' },
    { layar:  8, judul: 'Inti · OUTPUT · Write About a Place', tujuan: 'Guru memandu siswa menulis deskripsi tempat sendiri.' },
    { layar:  9, judul: 'Inti · Check and Extend', tujuan: 'Guru memandu siswa memeriksa dan menambah kalimat.' },
    { layar: 10, judul: 'Penutup · Sharing ke Kelas', tujuan: 'Guru memandu siswa membagikan tulisan ke semua siswa.' },
    { layar: 11, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-10.' },
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
UCAP: "Today we talk about places."`,
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
UCAP: "Last time you wrote about your week, everything."
AKSI: Jeda 2 detik.
UCAP: "Who remembers one sentence from that writing?"
AKSI: Tunggu dua sampai tiga siswa menyebut kalimat dari tulisan TP-08 mereka.
UCAP: "Good. Today, we don't write about what we do."
AKSI: Jeda 1 detik.
UCAP: "We write about where we go."`,
          bantuan     : 'Jika tidak ada yang merespons dalam 5 detik: ucapkan contoh "I like playing football because it is fun.", lalu tanya "Who has a sentence like this from their writing?".',
          cue         : 'Reactivation mengaktifkan tulisan TP-08, jembatan dari Kluster B ke Kluster C.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk text-anchor di papan tulis.
UCAP: "Look at the board. This is about a place."
👂 LISTEN FIRST
AKSI: Baca text-anchor perlahan sambil menunjuk tiap baris.
UCAP: "There is a market near my school."
UCAP: "It is big and busy."
UCAP: "I go there with my mother."
UCAP: "This is about a market. But today, you can describe any place."
AKSI: Jeda 2 detik.
UCAP: "A market, a mosque, a park, a river, a rice field, a school, any place near you."
UCAP: "Whatever you see on the way to school or near your house."`,
          bantuan     : 'Jika siswa bertanya boleh tempat apa saja: angguk, ucapkan "Yes, any place. Even a rice field or a river.".',
          cue         : 'Framing inklusif mencakup tempat non-urban secara eksplisit sebelum siswa mengisi kartu.',
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
UCAP: "Now, my turn. Two places I know."
UCAP: "There is a mosque near my house."
UCAP: "It is big and quiet."
UCAP: "I go there with my family."
AKSI: Jeda 1 detik.
UCAP: "There is a rice field near my village."
UCAP: "It is green and peaceful."
UCAP: "I go there with my grandfather."
UCAP: "Two places. Both are valid."
AKSI: Tunjuk baris "It is big and busy." di text-anchor papan tulis.
UCAP: "Big and busy. Two words. And."
UCAP: "Big and quiet. Green and peaceful. Two words, connected with and."
AKSI: Tunjuk text-anchor di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa membaca text-anchor bersama.
UCAP: "Read with me. Ready?"
UCAP: "Say it with me!"
AKSI: Tunggu semua siswa membaca text-anchor bersama.`,
          bantuan     : 'Jika siswa tidak ikut membaca bersama: tunjuk baris demi baris di papan tulis sambil membaca.',
          cue         : 'Model guru mencakup satu tempat non-urban. Pola "[adjective] and [adjective]" dimodelkan dua kali, tidak lebih.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan My Town Card, satu per siswa.
AKSI: Tulis daftar kata sifat di pojok papan tulis: "big, small, quiet, busy, green, old, new".
UCAP: "Fill in three places near your house or school."
UCAP: "Any place, market, mosque, river, rice field, school. Whatever is near you."
UCAP: "Three minutes. Go."
AKSI: Beri waktu tiga menit untuk mengisi kartu.
AKSI: Tunjuk dua sampai tiga siswa secara acak.
UCAP: "Read one place. Just the name and where it is."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika siswa tidak tahu tempat apa yang ditulis: bisikkan "What do you see on the way to school? Write its name.". Jika siswa tidak tahu dua kata sifat: tunjuk daftar di pojok papan tulis, biarkan siswa memilih.',
          cue         : 'Setiap siswa mengisi minimal dua baris sebelum Layar 6, termasuk kolom "What is it like?". Kartu ini dipakai lagi di blok INTERACT.',
          darurat     : 'Jika ada siswa masih kosong setelah tiga menit → dekati, tunjuk baris "Place", bantu isi nama tempat.',
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk satu siswa secara acak.
UCAP: "Where is your place? Near what? Next to what?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi dengan empat sampai lima siswa dari barisan berbeda secara cepat.`,
          bantuan     : 'Jika siswa tidak bisa menjawab: tunjuk My Town Card mereka di kolom Location, ucapkan "Read from your card.", tunggu siswa membaca.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 10 menit sebelum blok INTERACT.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan Partner's Town Card, satu per siswa, semua kolom kosong.
UCAP: "This card is empty. You cannot fill it alone."
UCAP: "You need to ask your partner."
👂 LISTEN FIRST
AKSI: Peragakan tanya jawab dengan satu siswa di depan.
UCAP: "Is there a market near your house?"
AKSI: Tunggu jawaban siswa.
AKSI: Tulis jawaban di kolom Place pada kartu contoh.
UCAP: "Where exactly? Near what?"
AKSI: Tunggu jawaban siswa.
UCAP: "What is it like? Two words."
AKSI: Tunggu jawaban siswa.
UCAP: "Now your turn. Ask your partner, fill in the card."
AKSI: Minta siswa duduk berpasangan.
AKSI: Minta siswa meletakkan My Town Card tertutup menghadap bawah di meja.
AKSI: Minta siswa A bertanya ke siswa B.
AKSI: Minta siswa A mengisi Partner's Town Card berdasarkan jawaban siswa B.
AKSI: Minta siswa B bertanya ke siswa A.
AKSI: Minta siswa B mengisi Partner's Town Card berdasarkan jawaban siswa A.
UCAP: "Do you have the same places?"
AKSI: Beri waktu lima sampai enam menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika pasangan tidak tahu harus bertanya apa: tunjuk kolom pertama, ucapkan "Is there a market near your house?", tunggu siswa meniru. Jika siswa mengisi kartu tanpa bertanya: tutup kartu dengan tangan, ucapkan "Ask first. Don\'t guess.".',
          cue         : 'Partner\'s Town Card dibagikan dalam keadaan kosong. My Town Card tetap tertutup selama pair work.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, demo ulang dengan guru sebagai pasangan, sederhanakan ke satu pertanyaan, lalu restart selama 60 detik.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk dua sampai tiga pasangan.
UCAP: "Tell me one interesting place from your partner's card. One sentence."
AKSI: Tunggu jawaban tiap pasangan yang ditunjuk.
UCAP: "Who has a rice field near their house? Who has a market?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa bingung memulai: ucapkan "There is a...", tunjuk kartu pasangan mereka, tunggu siswa melanjutkan.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 12 menit. Tempat rural dan urban disebut sejajar.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Hapus atau tutup text-anchor dari papan tulis.
AKSI: Tulis pattern reminder di papan tulis: "There is ___ near ___. It is ___ and ___. I go there with ___.".
UCAP: "Choose one place from your card. Write three sentences about it."
UCAP: "Use your card, and the pattern on the board if you need it."
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan sampai sepuluh menit.
AKSI: Setelah menit kedua, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa memegang pensil tapi tidak menulis: tunjuk kartu mereka di baris pertama, ucapkan "Start here. There is a place near...", tunggu siswa menulis satu kalimat, lalu tinggalkan.',
          cue         : 'Pattern reminder adalah petunjuk struktur, bukan template. Isi tiap tulisan berasal dari kartu siswa sendiri.',
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
          bantuan     : 'Jika siswa selesai tapi hanya menulis dua kalimat: tanyakan "Where do you go with your friends? Write: I go there with...", tunggu siswa menulis sendiri.',
          cue         : 'Connector "and" sudah cukup untuk TP-09. Connector lain yang muncul spontan diterima tanpa koreksi.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati, tunjuk baris kartu yang belum dipakai, tanyakan "What is this place like? Write: It is...".',
            sudahBisa   : 'Minta tambah satu kalimat dengan pola Kluster B, "I usually go there on Sunday with my friend.".',
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
          teks        : `AKSI: Tanyakan siapa yang mau membacakan satu sampai dua kalimat dari deskripsi tempatnya.
UCAP: "Who wants to share? One or two sentences, from your seat is fine."
AKSI: Tunjuk satu sampai tiga siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Who has a place like this near their house?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk siswa yang paling aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Pertanyaan "who has a place like this" inklusif.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today you described a place. In English."
AKSI: Jeda 2 detik.
UCAP: "Near your school. Near your house. Your place."
AKSI: Jeda 2 detik.
UCAP: "That is your town. Keep it."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time, the sky."
AKSI: Jeda 1 detik.
UCAP: "Rain. Sun. What you wear. What you do."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : 'Validasi "your place" penting untuk siswa yang mendeskripsikan tempat non-urban.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C09;
