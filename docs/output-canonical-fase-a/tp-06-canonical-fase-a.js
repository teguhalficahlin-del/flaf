const TP_06 = {

  // METADATA
  id    : 'tp-06',
  nomor : 6,
  kelas : 1,
  nama  : 'Shapes',
  tema  : 'Dunia di Sekitar Kita',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebut nama bentuk dasar (circle, square, triangle, rectangle, star, heart) dengan lafal yang benar.',
    'Peserta didik dapat mengidentifikasi bentuk dalam gambar dan benda nyata serta menyatakan "This is a ..." atau "I see a ...".',
    'Peserta didik dapat mendeskripsikan benda menggunakan kombinasi warna dan bentuk: "The circle is red", "I have a blue square".',
  ],
  vocab     : ['circle', 'square', 'triangle', 'rectangle', 'star', 'heart',
               'shape', 'this is', 'I see'],
  persiapan : [
    'Kartu bentuk berwarna x6: circle, square, triangle, rectangle, star, heart.',
    'Bentuk yang sudah ada di kelas: papan tulis (rectangle), jam dinding (circle), pintu (rectangle).',
    'Benda dari dalam tas masing-masing siswa, untuk cari bentuk di Layar 8.',
  ],
  media     : [],
  printables: [
    { file: 'tp06-circle.png',    label: 'Circle' },
    { file: 'tp06-heart.png',     label: 'Heart' },
    { file: 'tp06-rectangle.png', label: 'Rectangle' },
    { file: 'tp06-square.png',    label: 'Square' },
    { file: 'tp06-star.png',      label: 'Star' },
    { file: 'tp06-triangle.png',  label: 'Triangle' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Pembuka Kelas',           tujuan: 'Guru mengunci perhatian siswa sebelum aktivitas dimulai.' },
    { layar:  1, judul: 'Pembuka · Bentuk di Sekitar Kelas',     tujuan: 'Guru menunjukkan bentuk pada benda di kelas.' },
    { layar:  2, judul: 'Pembuka · Jembatan ke Inti',            tujuan: 'Guru menjembatani ke pengenalan enam bentuk dengan kartu.' },
    { layar:  3, judul: 'Inti · Kartu Bentuk',                   tujuan: 'Guru memperkenalkan enam bentuk dalam dua batch.' },
    { layar:  4, judul: 'Inti · Drill + Surprise Cards',         tujuan: 'Guru memimpin drill bentuk dengan kartu acak.' },
    { layar:  5, judul: 'Inti · Reset + Aturan Tebak Gambar',    tujuan: 'Guru menjelaskan aturan permainan tebak gambar.' },
    { layar:  6, judul: 'Inti · Tebak Gambar',                   tujuan: 'Guru memimpin permainan tebak gambar.' },
    { layar:  7, judul: 'Inti · Warna + Bentuk',                 tujuan: 'Guru menggabungkan warna dan bentuk.' },
    { layar:  8, judul: 'Inti · Cari Bentuk di Tas',             tujuan: 'Guru mengajak siswa menyebut bentuk benda dari tas.' },
    { layar:  9, judul: 'Inti · Diferensiasi',                   tujuan: 'Guru memberi latihan berpasangan sesuai kemampuan.' },
    { layar: 10, judul: 'Penutup · Review Bentuk di Kelas',      tujuan: 'Guru meninjau bentuk pada benda di kelas.' },
    { layar: 11, judul: 'Penutup · Refleksi',                    tujuan: 'Guru menanyakan bentuk favorit siswa.' },
    { layar: 12, judul: 'Penutup · Penutup Kelas',               tujuan: 'Guru menutup kelas dengan salam perpisahan bersama.' },
    { layar: 13, judul: 'Penutup Sesi · Selesai',                tujuan: 'Guru membereskan media dan mencatat observasi siswa.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Simpan kartu bentuk tanpa menunjukkannya.
AKSI: Tunggu sampai semua siswa duduk tenang.
UCAP: "Good morning, everyone!"
UCAP: "How are you today?"
AKSI: Tunggu respons siswa.
UCAP: "I'm fine, thank you!"
UCAP: "Today shapes are everywhere!"
UCAP: "Are you ready?"
AKSI: Tunggu respons siswa.`,
    bantuan: 'Jika kelas belum fokus: berdiri diam, ucapkan "Are you ready?" sekali lagi.',
    cue    : 'Jangan menunjuk benda bentuk di kelas sebelum Layar 1.',
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
          teks        : `AKSI: Tunggu sampai semua siswa duduk tenang.
UCAP: "Good morning!"
UCAP: "Shapes are everywhere!"
AKSI: Tunjuk papan tulis.
AKSI: Gerakkan tangan membentuk persegi panjang di udara.
UCAP: "Look, the board."
UCAP: "Rectangle!"
AKSI: Tunjuk jam dinding.
AKSI: Gerakkan tangan membentuk lingkaran di udara.
UCAP: "The clock."
UCAP: "Circle!"
AKSI: Tunjuk pintu.
UCAP: "The door, what shape?"
UCAP: "Show me with your hands!"
AKSI: Tunggu sampai siswa membentuk tangan.
→ Siswa: membentuk tangan menjadi persegi panjang.
UCAP: "Yes, rectangle!"`,
          bantuan     : null,
          cue         : 'Lakukan gestur tangan bentuk bersamaan dengan menyebut namanya, sebelum kartu dikeluarkan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ambil kartu bentuk pertama.
AKSI: Tunjukkan kartu bentuk ke semua siswa.
UCAP: "Today, six shapes!"
UCAP: "Let's see them all."`,
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
          teks        : `AKSI: Tempel tiga kartu bentuk batch pertama di papan tulis.
👂 LISTEN FIRST
AKSI: Bentuk tangan menjadi lingkaran.
UCAP: "Circle."
AKSI: Tunggu 1 detik.
AKSI: Bentuk tangan menjadi kotak.
UCAP: "Square."
AKSI: Tunggu 1 detik.
AKSI: Bentuk tangan menjadi segitiga.
UCAP: "Triangle."
AKSI: Tunggu 1 detik.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
→ Siswa: "Circle! Square! Triangle!"
UCAP: "Hands down."
UCAP: "Look."
AKSI: Tunggu 3 detik dalam keadaan diam.
AKSI: Tempel tiga kartu bentuk batch kedua di papan tulis.
👂 LISTEN FIRST
AKSI: Bentuk tangan menjadi persegi panjang.
UCAP: "Rectangle."
AKSI: Tunggu 1 detik.
AKSI: Bentuk tangan menjadi bintang.
UCAP: "Star."
AKSI: Tunggu 1 detik.
AKSI: Bentuk tangan menjadi hati.
UCAP: "Heart."
AKSI: Tunggu 1 detik.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
→ Siswa: "Rectangle! Star! Heart!"
🗣 TOGETHER
UCAP: "Say it together!"
→ Siswa: "Circle! Square! Triangle! Rectangle! Star! Heart!"
🔁 Putaran kedua dengan slow voice.`,
          bantuan     : [
            'Jika diam: bentuk tangan, ucapkan "Cir-..." menggantung, lalu tunggu.',
            'Jika salah: bentuk tangan lebih jelas, modelkan ulang.',
          ],
          cue         : null,
          darurat     : 'Jika kelas sudah mengenal bentuk → lewati putaran slow voice.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk kartu di papan tulis dari kiri ke kanan satu putaran.
UCAP: "What shape?"
→ Siswa: menjawab bentuk bersama.
UCAP: "Hands on knees."
UCAP: "Eyes ready."
AKSI: Tunggu 3 detik.
UCAP: "Now, surprise cards!"
AKSI: Tunjuk 4–5 kartu di papan tulis secara acak.
→ Siswa: menjawab bentuk bersama.
🔁 Sesekali putar kartu atau ubah ketinggian kartu saat menunjuk.`,
          bantuan     : 'Jika diam: bentuk tangan, ucapkan suku kata pertama, lalu tunggu.',
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tepuk tangan sekali.
AKSI: Angkat tangan untuk meminta perhatian kelas.
AKSI: Tunggu sampai semua siswa diam dan menatap guru.
UCAP: "Hands down."
UCAP: "Eyes on me."
AKSI: Gambar bentuk di udara sebagai gestur visual.
UCAP: "Now, a guessing game!"
UCAP: "I draw slowly."
UCAP: "You guess."
UCAP: "Hands up."
UCAP: "Mouth closed."
AKSI: Peragakan aturan dengan mengangkat tangan sambil menutup mulut.
UCAP: "Like this."
AKSI: Peragakan permainan dengan menggambar lingkaran satu garis per detik.
AKSI: Tunggu siswa mengangkat tangan tanpa bersuara.
AKSI: Pilih satu siswa untuk menjawab.
UCAP: "Ready?"`,
          bantuan     : null,
          cue         : null,
          darurat     : 'Jika waktu ≤10 menit → lewati tebak gambar, langsung ke Layar 7.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Gambar bentuk satu garis per detik.
🔁 4–5 bentuk.
UCAP: "What is it?"
AKSI: Tunggu siswa mengangkat tangan.
→ Siswa: mengangkat tangan lalu menjawab nama bentuk.
AKSI: Sesekali berhenti menggambar.
AKSI: Lihat ke semua siswa.
AKSI: Pilih satu siswa.
AKSI: Lanjutkan menggambar.
AKSI: Setelah selesai, mulai reset.
UCAP: "Stand still."
UCAP: "Deep breath."
UCAP: "Sit nicely."
AKSI: Tunggu 5 detik.`,
          bantuan     : [
            'Jika tidak ada yang menjawab: selesaikan gambar, bentuk tangan, lalu tunggu.',
            'Jika kelas kacau: ucapkan "Hands up.", ucapkan "Mouth closed.", lalu lanjutkan.',
          ],
          cue         : 'Utamakan circle, triangle, dan square. Gunakan heart hanya jika kelas masih terkendali.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk kartu bentuk berwarna di papan tulis.
UCAP: "Now, colour and shape!"
AKSI: Tunjuk kartu lingkaran merah.
UCAP: "Red circle."
→ Siswa: "Red circle!"
AKSI: Modelkan kalimat penuh, ucapkan "I see a red circle."
AKSI: Tunjuk kartu kotak biru.
UCAP: "Blue square."
→ Siswa: "Blue square!"
AKSI: Modelkan kalimat penuh, ucapkan "I see a blue square."
AKSI: Tunjuk kartu ketiga dan keempat.
UCAP: "Yellow triangle?"
→ Siswa: melengkapi nama warna dan bentuk sendiri.`,
          bantuan     : 'Jika diam: tunjuk warna, ucapkan "Red...", tunjuk bentuk, ucapkan "Circle...", lalu sambungkan.',
          cue         : 'Kurangi bantuan secara bertahap pada kartu ketiga dan keempat. Targetkan dua kata, warna dan bentuk, terima jawaban yang belum lengkap.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Open bag slowly."
UCAP: "One thing only."
UCAP: "No talking."
UCAP: "Close the bag."
UCAP: "Freeze."
UCAP: "Bag down."
AKSI: Peragakan contoh dengan benda milik guru, misalnya penghapus → ucapkan "My eraser, rectangle!"
UCAP: "What shape is it?"
UCAP: "Best shape, closest shape."
→ Siswa: menyebut satu nama bentuk.`,
          bantuan     : [
            'Jika diam: tunjuk benda siswa, bentuk tangan, ucapkan suku kata pertama, lalu tunggu.',
            'Jika tidak tahu: tunjuk kartu yang mirip di papan tulis, ajak siswa memilih.',
          ],
          cue         : 'Tas harus tertutup dan diletakkan sebelum siswa lanjut. Terima bentuk paling mendekati untuk benda ambigu.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Show me your empty hands."
UCAP: "Eyes here."
UCAP: "Turn to your partner."
AKSI: Modelkan ucapan berikut dengan suara kecil.
UCAP: "Small voice."
AKSI: Peragakan pergantian giliran selama 10 detik.
UCAP: "Switch."
UCAP: "One turn each only."
UCAP: "Show one thing."
UCAP: "Say the shape."
UCAP: "Switch."
UCAP: "Three, two, one."
UCAP: "Eyes here."`,
          bantuan     : null,
          cue         : 'Batasi aktivitas ini pada 30–45 detik.',
          darurat     : 'Jika waktu terbatas → lewati Layar 9, langsung ke Layar 10.',
          diferensiasi: {
            perluSupport: 'Dekati mereka dan tunjuk kartu bentuk di papan tulis, izinkan menjawab satu kata.',
            sudahBisa   : 'Minta mereka mengucapkan kalimat penuh dan bertanya "What shape is it?" kepada pasangan.',
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
          teks        : `AKSI: Tunjuk benda di kelas satu per satu.
🔁 5–6 benda.
UCAP: "What shape?"
→ Siswa: menjawab bentuk secara lisan.
UCAP: "Find rectangle!"
→ Siswa: menunjuk benda berbentuk persegi panjang.
AKSI: Tunggu 2 detik.
UCAP: "Show me circle!"
→ Siswa: menunjuk benda berbentuk lingkaran.`,
          bantuan     : 'Jika diam: bentuk tangan, ucapkan suku kata pertama, lalu tunggu.',
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk kartu bentuk di papan tulis.
UCAP: "Which shape do you like best?"
UCAP: "Point to a card!"
AKSI: Tunjuk kartu bintang sebagai contoh.
UCAP: "I like the star."
→ Siswa: menunjuk satu kartu bentuk favorit.`,
          bantuan     : 'Jika bingung: tunjuk dua kartu, ucapkan "This one? Or this one?".',
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Hands down."
UCAP: "Quiet voice."
AKSI: Lambaikan tangan ke semua siswa.
UCAP: "Excellent!"
UCAP: "You know your shapes!"
UCAP: "Goodbye, everyone!"
UCAP: "See you next time!"
🗣 TOGETHER
→ Siswa: "Goodbye, teacher! See you!"`,
          bantuan     : 'Jika diam: lambaikan tangan, ucapkan "Good-bye..." menggantung.',
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Kumpulkan kartu bentuk.
AKSI: Ajak siswa menutup tasnya.
AKSI: Catat siswa yang kesulitan bentuk tertentu, seperti triangle dan rectangle yang sering tertukar.
AKSI: Catat siswa yang tidak bisa mengidentifikasi bentuk pada benda nyata.
AKSI: Catat siswa yang belum bisa menggabungkan warna dan bentuk.`,
          bantuan     : null,
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_06;
