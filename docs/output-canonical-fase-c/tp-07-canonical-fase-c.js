const TP_C07 = {

  // METADATA
  id             : 'tp-c07',
  nomor          : 7,
  kelas          : 5,
  nama           : 'Food I Eat and Why',
  tema           : 'Dunia Sehari-hari',
  kluster        : 'B — Dunia Sehari-hari',
  jenis          : 'Biasa',
  text_anchor    : 'I eat rice every day because it gives me energy. But I also like noodles.',
  connector_aktif: 'because + but — fokus produksi pertama; because tampil sebelum but di text-anchor dan model guru',
  recycle_fase_b : [
    'They eat... / I eat... (TP-09 Fase B)',
    'I like... (TP-13 Fase B)',
    'every day / always / usually (TP-06 Fase B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat mendeskripsikan makanan sehari-hari dalam minimal tiga kalimat menggunakan pola I eat... because... / But I also like...',
    'Peserta didik dapat menggunakan connector because (fokus produksi pertama) dan but (fokus produksi pertama) dalam kalimat tentang makanan.',
    'Peserta didik dapat menggali informasi makanan pasangan melalui pertanyaan lisan dan menuliskannya di Food Exchange Table.',
  ],
  vocab     : ['rice', 'noodles', 'corn', 'bread', 'vegetables', 'fish', 'chicken', 'energy', 'delicious', 'spicy', 'sweet'],
  persiapan : [
    'My Food Card satu per siswa, berisi dua bagian "I eat ___ every day because ___." dan "But I also like ___.", dicetak sebelum kelas dimulai, di meja guru sebelum dibagikan, untuk Layar 4. Pada awal Layar 6 kartu ini diletakkan tertutup menghadap bawah di meja siswa.',
    'Food Exchange Table satu per siswa, tabel dua kolom My Food dan My Partner\'s Food dengan tiga baris What they eat, Why, dan But also like, kolom My Partner\'s Food kosong, dicetak sebelum kelas dimulai, dibagikan tepat sebelum Layar 6.',
    'Text-anchor "I eat rice every day because it gives me energy. But I also like noodles." ditulis di papan tulis sebelum siswa masuk, tetap tampil dari Layar 2 sampai akhir Layar 7, dihapus atau ditutup sebelum Layar 8.',
    'Papan tulis dan spidol untuk menulis baris isian, daftar makanan, dan jawaban demo tabel di Layar 4 dan Layar 6.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Hobi TP-06', tujuan: 'Guru mengaktifkan kembali pola I like because dari TP-06.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Text-Anchor dan Framing Inklusif', tujuan: 'Guru memperkenalkan text-anchor dan pilihan makanan bebas.' },
    { layar:  3, judul: 'Inti · INPUT · Model Guru', tujuan: 'Guru memodelkan makanan dan memajankan because lalu but.' },
    { layar:  4, judul: 'Inti · My Food Card', tujuan: 'Guru memandu siswa mengisi kartu makanan sendiri.' },
    { layar:  5, judul: 'Inti · Drill Cepat What Do You Eat Every Day', tujuan: 'Guru melatih pola I eat dan kontras but.' },
    { layar:  6, judul: 'Inti · INTERACT · Food Exchange Table', tujuan: 'Guru memandu siswa mengisi tabel pasangan lewat bertanya.' },
    { layar:  7, judul: 'Inti · Mini-Share Kontras Paling Menarik', tujuan: 'Guru memandu siswa membandingkan makanan.' },
    { layar:  8, judul: 'Inti · OUTPUT · Write About My Food', tujuan: 'Guru memandu siswa menulis makanan sendiri.' },
    { layar:  9, judul: 'Inti · Check and Extend', tujuan: 'Guru memandu siswa memeriksa dan menambah kalimat.' },
    { layar: 10, judul: 'Penutup · Sharing ke Kelas', tujuan: 'Guru memandu siswa membagikan tulisan ke semua siswa.' },
    { layar: 11, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-08.' },
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
UCAP: "Today we talk about food."`,
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
UCAP: "Last time, your hobbies. What you like to do in your free time."
AKSI: Jeda 2 detik.
UCAP: "Who remembers one sentence about their hobby?"
AKSI: Tunggu dua sampai tiga siswa menyebut kalimat dari tulisan atau text-anchor TP-06.
UCAP: "Good. Today, something different."
AKSI: Jeda 1 detik.
UCAP: "Not what you do in your free time. What you eat."
UCAP: "Every day, what is on your plate?"`,
          bantuan     : 'Jika tidak ada yang merespons dalam 5 detik: ucapkan contoh "I like playing football because it is fun.", lalu tanya "Who has a sentence like this about their hobby?".',
          cue         : 'Reactivation di layar ini berasal dari tulisan siswa sendiri di TP-06, bukan dari text-anchor baru.',
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
UCAP: "I eat rice every day because it gives me energy."
UCAP: "But I also like noodles."
UCAP: "This is one person's food. Rice. And noodles."
AKSI: Jeda 2 detik.
UCAP: "But today, I want to know your food. Not rice and noodles. Yours."
UCAP: "Whatever you eat, rice, corn, bread, noodles, anything, that is your food."
UCAP: "No food is wrong here."`,
          bantuan     : 'Jika siswa bertanya boleh makanan apa saja: angguk, ucapkan "Yes, anything you eat. Whatever is on your plate at home.".',
          cue         : 'Framing inklusif hadir sebelum siswa mengisi kartu. Tidak ada makanan yang salah di layar ini.',
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
UCAP: "Now, my turn. I will tell you about what I eat."
UCAP: "I eat rice every day because it is easy to cook."
AKSI: Jeda 1 detik.
UCAP: "But I also like bakso. I eat bakso on weekends."
AKSI: Jeda 1 detik.
UCAP: "Sometimes I eat bread because it is fast."
UCAP: "But my favorite is still rice with tempeh."
AKSI: Tunjuk text-anchor di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa membaca text-anchor bersama.
UCAP: "Read with me. Ready?"
UCAP: "Say it with me!"
AKSI: Tunggu semua siswa membaca text-anchor bersama.`,
          bantuan     : 'Jika siswa tidak ikut membaca bersama: tunjuk baris demi baris di papan tulis sambil membaca.',
          cue         : 'Connector "because" muncul sebelum "but" di model guru, keduanya dalam kalimat terpisah. Jangan beri komentar tentang kedua connector.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan My Food Card, satu per siswa.
AKSI: Tulis baris isian di papan tulis di bawah text-anchor: "I eat ___ every day because ___. But I also like ___.".
AKSI: Tulis daftar makanan di pojok papan tulis: "rice, corn, bread, noodles, fish, vegetables, chicken".
UCAP: "Think about your food. What do you eat most days?"
UCAP: "And what else do you like, even if you don't eat it every day?"
UCAP: "Remember, any food counts. Whatever you eat at home."
UCAP: "Three minutes. Go."
AKSI: Beri waktu tiga menit untuk berpikir dan menulis.
AKSI: Tunjuk dua sampai tiga siswa secara acak.
UCAP: "Read one sentence. What do you eat?"
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika siswa tidak tahu nama makanan dalam Bahasa Inggris: tunjuk daftar di pojok papan tulis, minta siswa pilih, ucapkan "Just write the name. If it sounds the same, that is fine.". Jika siswa tidak tahu alasannya: ucapkan opsi "because it is delicious, because it is easy, because my mother cooks it", biarkan siswa memilih.',
          cue         : 'Setiap siswa mengisi minimal bagian "I eat ___" sebelum Layar 6. Kartu ini dipakai lagi di blok INTERACT.',
          darurat     : 'Jika ada siswa belum mengisi apa pun setelah tiga menit → dekati, tunjuk bagian "I eat ___", bantu isi satu kata.',
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau berdiri.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "What do you eat every day? One sentence."
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "But what else do you like?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi dengan tiga sampai empat siswa dari barisan berbeda secara cepat.
UCAP: "Who also eats that? Raise your hand."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa yang berdiri hanya menyebut makanan pertama tanpa lanjutan: tanyakan "But what else?" sambil angguk.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 10 menit sebelum blok INTERACT.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan Food Exchange Table, satu per siswa, kolom My Partner's Food kosong.
UCAP: "Fill in your column first. My Food. Use your card."
AKSI: Beri waktu satu menit untuk mengisi kolom My Food.
UCAP: "Your partner's column is empty. You need to ask."
👂 LISTEN FIRST
AKSI: Peragakan tanya jawab dengan satu siswa di depan.
UCAP: "What do you eat every day?"
AKSI: Tunggu jawaban siswa.
AKSI: Tulis jawaban di baris What they eat pada kolom My Partner di tabel contoh.
UCAP: "Why?"
AKSI: Tunggu jawaban siswa.
UCAP: "But what else do you like?"
AKSI: Tunggu jawaban siswa.
UCAP: "Three questions. Now your turn."
AKSI: Minta siswa duduk berpasangan.
AKSI: Minta siswa meletakkan My Food Card tertutup menghadap bawah di meja.
AKSI: Minta siswa A bertanya ke siswa B.
AKSI: Minta siswa A mengisi kolom My Partner's Food berdasarkan jawaban siswa B.
AKSI: Minta siswa B bertanya ke siswa A.
AKSI: Minta siswa B mengisi kolom My Partner's Food berdasarkan jawaban siswa A.
UCAP: "Is your food similar or different?"
AKSI: Beri waktu lima sampai enam menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang dan pojok kelas.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika pasangan tidak tahu harus bertanya apa: tunjuk baris "What they eat", ucapkan "What do you eat every day?", tunggu siswa meniru. Jika siswa mengisi kolom My Partner tanpa bertanya: tutup tabel dengan tangan, ucapkan "Ask first. Then write.".',
          cue         : 'Kolom My Food terisi sebelum pair work dimulai. Kolom My Partner\'s Food dibagikan dalam keadaan kosong.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, demo ulang dengan guru sebagai pasangan, sederhanakan ke dua pertanyaan, lalu restart selama 60 detik.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk dua sampai tiga pasangan.
UCAP: "What is the most interesting difference between your food and your partner's?"
AKSI: Tunggu jawaban tiap pasangan yang ditunjuk.
UCAP: "Interesting. Did anyone find a food they had never heard of?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa tidak bisa merangkum: tunjuk tabel mereka, ucapkan "Your food and your partner\'s, is this the same?", minta bandingkan baris pertama dulu.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 12 menit. Makanan yang tidak biasa dihargai setara dengan makanan umum.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Hapus atau tutup text-anchor dari papan tulis.
UCAP: "Now, write about your food."
UCAP: "Not the rice and noodles from the board. Your food."
UCAP: "At least three sentences. You can use your Food Card to start."
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan sampai sepuluh menit.
AKSI: Setelah menit kedua, pantau penulisan semua siswa, prioritaskan barisan belakang dan pojok kelas.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa memegang pensil tapi tidak menulis: ucapkan "What do you eat? Write: I eat...", tunggu siswa menulis satu kalimat, lalu tinggalkan.',
          cue         : 'Text-anchor sudah diturunkan sebelum layar ini. Bentuk "because" atau "but" yang tidak sempurna diterima tanpa koreksi.',
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
          bantuan     : 'Jika siswa selesai tapi hanya menulis dua kalimat: tanyakan "What else do you like? Can you write: But I also like...?", tunggu siswa menulis kalimat tambahan sendiri.',
          cue         : 'Bentuk "because" atau "but" tidak sempurna tidak dikoreksi. Ini produksi mandiri pertama kedua connector di Fase C.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati dan ucapkan panduan konkret, "You wrote what you eat. Can you write why? I eat rice because it is filling.".',
            sudahBisa   : 'Minta tambah satu kalimat kontras dengan but, "But I don\'t like vegetables.".',
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
UCAP: "Who also eats the same food? Raise your hand."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk siswa yang paling aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Makanan biasa dan tidak biasa diterima dengan nada yang sama.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today you talked about your food. In English."
AKSI: Jeda 2 detik.
UCAP: "What you eat. Why. And what else you like."
AKSI: Jeda 2 detik.
UCAP: "That is your food story. Keep it."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time, you will write about your days."
AKSI: Jeda 1 detik.
UCAP: "Your routines, your hobbies, your food. Everything together."
AKSI: Jeda 1 detik.
UCAP: "One piece of writing. About everything."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : 'Pratinjau adalah undangan ke TP-08, bukan pengumuman tugas.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C07;
