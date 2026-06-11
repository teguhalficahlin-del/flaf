const TP_C11 = {

  // METADATA
  id             : 'tp-c11',
  nomor          : 11,
  kelas          : 5,
  nama           : 'Animals Around Us',
  tema           : 'Dunia di Luar Rumah',
  kluster        : 'C — Dunia di Luar Rumah',
  jenis          : 'Biasa',
  text_anchor    : 'Cats eat fish. Birds can fly. Cows live on farms.',
  connector_aktif: '— (tidak ada connector baru; connector yang sudah aktif tersedia jika muncul natural)',
  recycle_fase_b : [
    'They live in... / They eat... (TP-09 Fase B)',
    'I can... menjadi [animal] can... (TP-16 Fase B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat mendeskripsikan satu hewan yang dikenal dalam minimal tiga kalimat menggunakan pola [Animal] eats... / It lives... / It can...',
    'Peserta didik dapat menggunakan pergeseran subjek dari "I" ke nama hewan dalam pola kalimat yang sudah dikenal.',
    'Peserta didik dapat menggali informasi hewan pasangan melalui pertanyaan lisan dan menuliskannya di Partner\'s Animal Card.',
  ],
  vocab     : ['cat', 'chicken', 'goat', 'fish', 'cow', 'bird', 'dog', 'rabbit'],
  persiapan : [
    'My Animal Card satu per siswa, empat baris Animal, It eats, It lives in/on, dan It can, dicetak sebelum kelas dimulai, di meja guru sebelum dibagikan, untuk Layar 4. Pada awal Layar 6 kartu ini diletakkan tertutup menghadap bawah di meja siswa.',
    'Partner\'s Animal Card satu per siswa, format baris yang sama dengan semua baris kosong, dicetak sebelum kelas dimulai, dibagikan tepat sebelum Layar 6.',
    'Text-anchor "Cats eat fish. Birds can fly. Cows live on farms." ditulis di papan tulis sebelum siswa masuk, tetap tampil dari Layar 2 sampai akhir Layar 7, dihapus atau ditutup sebelum Layar 8.',
    'Pattern reminder "[Animal name] eats ___. It lives in or on ___. It can ___." ditulis di papan tulis tepat sebelum Layar 8, setelah text-anchor diturunkan.',
    'Papan tulis dan spidol untuk menulis daftar kata kerja dan jawaban demo kartu di Layar 4 dan Layar 6.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Tulisan TP-10', tujuan: 'Guru mengaktifkan kembali tulisan cuaca dari TP-10.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Text-anchor dan Framing Inklusif', tujuan: 'Guru memperkenalkan fakta hewan dan pilihan hewan keseharian.' },
    { layar:  3, judul: 'Inti · INPUT · Model Guru', tujuan: 'Guru memodelkan pergeseran subjek dari I ke nama hewan.' },
    { layar:  4, judul: 'Inti · My Animal Card', tujuan: 'Guru memandu siswa mengisi kartu hewan sendiri.' },
    { layar:  5, judul: 'Inti · Drill Cepat Animal Facts', tujuan: 'Guru melatih pola It eats, It lives, It can.' },
    { layar:  6, judul: 'Inti · INTERACT · Partner\'s Animal Card Exchange', tujuan: 'Guru memandu siswa mengisi kartu pasangan lewat bertanya.' },
    { layar:  7, judul: 'Inti · Mini-Share Satu Fakta Menarik', tujuan: 'Guru memandu siswa membagikan fakta hewan pasangan.' },
    { layar:  8, judul: 'Inti · OUTPUT · Write About an Animal', tujuan: 'Guru memandu siswa menulis fakta hewan sendiri.' },
    { layar:  9, judul: 'Inti · Check and Extend', tujuan: 'Guru memandu siswa memeriksa dan menambah kalimat.' },
    { layar: 10, judul: 'Penutup · Sharing ke Kelas', tujuan: 'Guru memandu siswa membagikan tulisan ke semua siswa.' },
    { layar: 11, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-12.' },
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
UCAP: "Today, animals."`,
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
UCAP: "Last time, you wrote about weather. What you wear. What you bring."
AKSI: Jeda 2 detik.
UCAP: "Who remembers one sentence from that writing?"
AKSI: Tunggu dua sampai tiga siswa menyebut kalimat dari tulisan TP-10 mereka.
UCAP: "Good. Today, not the sky."
AKSI: Jeda 1 detik.
UCAP: "The ground. The animals around us."`,
          bantuan     : 'Jika tidak ada yang merespons dalam 5 detik: ucapkan contoh "When it is rainy, I wear a raincoat.", lalu tanya "Who has a sentence like this from last time?".',
          cue         : 'Bridge "not the sky, the ground" menghubungkan TP-10 ke TP-11.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk text-anchor di papan tulis.
UCAP: "Look at the board. These are facts about animals."
👂 LISTEN FIRST
AKSI: Baca text-anchor perlahan sambil menunjuk tiap kalimat.
UCAP: "Cats eat fish."
UCAP: "Birds can fly."
UCAP: "Cows live on farms."
UCAP: "Three animals. Three facts. Simple."
UCAP: "Today, you write facts about an animal you know."
AKSI: Jeda 2 detik.
UCAP: "A cat, a chicken, a goat, a fish, a cow, a bird, any animal you know from your daily life."
UCAP: "An animal you have seen. Near your house. Or near your school."`,
          bantuan     : 'Jika siswa bertanya boleh hewan apa saja: angguk, ucapkan "Any animal you really know, that you have seen before.".',
          cue         : 'Framing "any animal you know" mendorong pilihan spesifik dan personal, bukan hewan eksotis.',
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
UCAP: "Watch. Same pattern. Different subject."
UCAP: "I eat rice."
UCAP: "Cats eat fish."
AKSI: Jeda 1 detik.
UCAP: "I live in [kota guru]."
UCAP: "Cows live on farms."
AKSI: Jeda 1 detik.
UCAP: "I can read."
UCAP: "Birds can fly."
AKSI: Jeda 1 detik.
UCAP: "Same pattern. Different subject."
AKSI: Tunjuk text-anchor di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa membaca text-anchor bersama.
UCAP: "Read with me. Ready?"
UCAP: "Say it with me!"
AKSI: Tunggu semua siswa membaca text-anchor bersama.`,
          bantuan     : 'Jika siswa tidak ikut membaca bersama: tunjuk kalimat demi kalimat di papan tulis sambil membaca.',
          cue         : 'Tiga pasangan paralel menunjukkan pergeseran subjek dari I ke nama hewan. Jangan tambahkan contoh keempat atau penjelasan.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan My Animal Card, satu per siswa.
AKSI: Tulis daftar kata kerja di pojok papan tulis: "fly, run, swim, climb, bark, meow".
UCAP: "Choose one animal you know well."
UCAP: "A cat, a chicken, a goat, a fish, any animal you have seen."
UCAP: "Fill in your card. Three minutes. Go."
AKSI: Beri waktu tiga menit untuk memilih dan mengisi kartu.
AKSI: Tunjuk dua sampai tiga siswa secara acak.
UCAP: "Tell me your animal and one fact. Go."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika siswa memilih hewan yang faktanya tidak diketahui: bisikkan "Do you know what it eats? Maybe choose a cat or a chicken, you know them better.". Jika siswa tidak tahu mengisi baris "It can": tunjuk daftar di pojok papan tulis, biarkan siswa memilih.',
          cue         : 'Setiap siswa memilih satu hewan spesifik dan mengisi baris "It can" sebelum Layar 6. Kartu ini dipakai lagi di blok INTERACT.',
          darurat     : 'Jika ada siswa masih kosong setelah tiga menit → dekati, tunjuk baris "Animal", bantu isi nama hewan.',
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `UCAP: "Cat."
AKSI: Tunggu siswa menyebut satu fakta.
UCAP: "Bird."
AKSI: Tunggu siswa menyebut satu fakta.
UCAP: "Goat."
AKSI: Tunggu siswa menyebut satu fakta.
AKSI: Ulangi dengan satu hewan lagi dari barisan berbeda secara cepat.`,
          bantuan     : 'Jika semua siswa tidak merespons: ucapkan jawaban sendiri "It eats fish", lalu ulangi nama hewan dan tunjuk satu siswa.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 10 menit sebelum blok INTERACT.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan Partner's Animal Card, satu per siswa, semua baris kosong.
UCAP: "This card is empty. You cannot fill it alone."
UCAP: "You need to ask your partner."
👂 LISTEN FIRST
AKSI: Peragakan tanya jawab dengan satu siswa di depan.
UCAP: "What is your animal?"
AKSI: Tunggu jawaban siswa.
AKSI: Tulis jawaban di baris Animal pada kartu contoh.
UCAP: "What does it eat?"
AKSI: Tunggu jawaban siswa.
UCAP: "Where does it live?"
AKSI: Tunggu jawaban siswa.
UCAP: "What can it do?"
AKSI: Tunggu jawaban siswa.
UCAP: "Now your turn. Ask your partner, fill in the card."
AKSI: Minta siswa duduk berpasangan.
AKSI: Minta siswa meletakkan My Animal Card tertutup menghadap bawah di meja.
AKSI: Minta siswa A bertanya ke siswa B.
AKSI: Minta siswa A mengisi Partner's Animal Card berdasarkan jawaban siswa B.
AKSI: Minta siswa B bertanya ke siswa A.
AKSI: Minta siswa B mengisi Partner's Animal Card berdasarkan jawaban siswa A.
UCAP: "Is your animal big or small?"
AKSI: Beri waktu lima sampai enam menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika pasangan tidak tahu harus bertanya apa: tunjuk baris pertama, ucapkan "What is your animal?", tunggu siswa meniru. Jika siswa mengisi kartu tanpa bertanya: tutup kartu dengan tangan, ucapkan "Ask first. Don\'t guess.".',
          cue         : 'Partner\'s Animal Card dibagikan dalam keadaan kosong. My Animal Card tetap tertutup selama pair work.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, demo ulang dengan guru sebagai pasangan, sederhanakan ke dua pertanyaan, lalu restart selama 60 detik.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk dua sampai tiga pasangan.
UCAP: "Tell me one interesting fact about your partner's animal. One sentence."
AKSI: Tunggu jawaban tiap pasangan yang ditunjuk.
UCAP: "Who has the same animal as their partner?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa bingung memulai: ucapkan "Her animal is a...", tunjuk baris pertama kartu pasangan, tunggu siswa melanjutkan.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 12 menit. Cukup satu fakta per pasangan.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Hapus atau tutup text-anchor dari papan tulis.
AKSI: Tulis pattern reminder di papan tulis: "[Animal name] eats ___. It lives in or on ___. It can ___.".
UCAP: "Choose one animal from your card. Write three sentences about it."
UCAP: "Use your card, and the pattern on the board if you need it."
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan sampai sepuluh menit.
AKSI: Setelah menit kedua, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa memegang pensil tapi tidak menulis: tunjuk baris pertama kartu mereka, ucapkan "Your animal is your choice. Write: It eats...", tunggu siswa menulis satu kalimat, lalu tinggalkan.',
          cue         : 'Pattern reminder adalah petunjuk struktur, bukan template isi. Isi tiap tulisan berasal dari kartu siswa sendiri.',
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
          bantuan     : 'Jika siswa selesai tapi hanya menulis dua kalimat: tanyakan "Does your animal have a name or a special color?", tunggu siswa menulis kalimat tambahan sendiri.',
          cue         : 'Connector yang muncul spontan diterima, tetapi tidak ada connector yang didorong di TP-11.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati, tunjuk baris kartu yang belum dipakai, tanyakan "What about this? Where does it live? Write: It lives in...".',
            sudahBisa   : 'Minta tambah satu kalimat yang menghubungkan hewan dengan pengalaman personal, "I like cats because they are quiet and soft.".',
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
UCAP: "Who has the same animal?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk siswa yang paling aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Pertanyaan "who has the same animal" sederhana dan inklusif.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today you wrote about animals. Facts. What they eat. Where they live. What they can do."
AKSI: Jeda 2 detik.
UCAP: "Not about yourself. About the world around you."
AKSI: Jeda 2 detik.
UCAP: "Keep it."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
AKSI: Jeda 1 detik.
UCAP: "Next time, we read."
AKSI: Jeda 1 detik.
UCAP: "A menu. Real words, real food, real prices."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : '"Not about yourself. About the world around you." merangkum pergeseran dari diri sendiri ke fakta tentang dunia.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C11;
