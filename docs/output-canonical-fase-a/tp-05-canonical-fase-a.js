const TP_05 = {

  // METADATA
  id    : 'tp-05',
  nomor : 5,
  kelas : 1,
  nama  : 'Colours',
  tema  : 'Dunia di Sekitar Kita',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebut nama 8 warna dasar (red, blue, green, yellow, orange, purple, black, white) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan warna benda menggunakan struktur "The ... is ..." atau "It is ..." dalam aktivitas show and tell.',
    'Peserta didik dapat merespons pertanyaan "What colour is it?" dan "What is your favourite colour?" dengan kalimat lengkap.',
  ],
  vocab     : ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink',
               'black', 'white', 'brown', 'colour', 'favourite', 'what colour'],
  persiapan : [
    'Kartu warna x8: red, blue, green, yellow, orange, purple, black, white.',
    'Kartu pink kecil (opsional).',
    'Benda berwarna di meja guru, disiapkan sebelum kelas.',
    'Benda dari dalam tas masing-masing siswa, untuk show and tell.',
  ],
  media     : [],
  printables: [
    { file: 'tp05-black.png',  label: 'Black' },
    { file: 'tp05-blue.png',   label: 'Blue' },
    { file: 'tp05-green.png',  label: 'Green' },
    { file: 'tp05-orange.png', label: 'Orange' },
    { file: 'tp05-pink.png',   label: 'Pink' },
    { file: 'tp05-purple.png', label: 'Purple' },
    { file: 'tp05-red.png',    label: 'Red' },
    { file: 'tp05-white.png',  label: 'White' },
    { file: 'tp05-yellow.png', label: 'Yellow' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Pembuka Kelas',                  tujuan: 'Guru mengunci perhatian siswa sebelum aktivitas dimulai.' },
    { layar:  1, judul: 'Pembuka · Warna Pertama',                      tujuan: 'Guru memperkenalkan dua warna pertama dengan kartu.' },
    { layar:  2, judul: 'Pembuka · Semua 8 Warna',                      tujuan: 'Guru memperkenalkan delapan warna dalam dua gelombang.' },
    { layar:  3, judul: 'Pembuka · Jembatan ke Inti',                   tujuan: 'Guru menguji warna lewat kartu acak.' },
    { layar:  4, judul: 'Inti · Drill Warna + Pola Kalimat',            tujuan: 'Guru memimpin drill warna dengan pola "It is...".' },
    { layar:  5, judul: 'Inti · Reset + Aturan Sentuh Warna',           tujuan: 'Guru menjelaskan aturan permainan sentuh warna.' },
    { layar:  6, judul: 'Inti · Sentuh Warna',                          tujuan: 'Guru memimpin permainan sentuh warna.' },
    { layar:  7, judul: 'Inti · Cooldown + Modeling Show and Tell',     tujuan: 'Guru memodelkan kalimat show and tell.' },
    { layar:  8, judul: 'Inti · Show and Tell',                         tujuan: 'Guru memandu siswa tampil show and tell.' },
    { layar:  9, judul: 'Inti · Diferensiasi',                          tujuan: 'Guru memberi latihan berpasangan sesuai kemampuan.' },
    { layar: 10, judul: 'Penutup · Warna Favorit',                      tujuan: 'Guru menanyakan warna favorit siswa.' },
    { layar: 11, judul: 'Penutup · Lagu "I Can Sing a Rainbow"',        tujuan: 'Guru memimpin lagu penutup warna.' },
    { layar: 12, judul: 'Penutup · Penutup Kelas',                      tujuan: 'Guru menutup kelas dengan salam perpisahan bersama.' },
    { layar: 13, judul: 'Penutup Sesi · Selesai',                       tujuan: 'Guru membereskan media dan mencatat observasi siswa.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Simpan kartu warna di meja tanpa menunjukkannya.
AKSI: Tunggu sampai semua siswa duduk tenang.
UCAP: "Good morning, everyone!"
UCAP: "How are you today?"
AKSI: Tunggu respons siswa.
UCAP: "I'm fine, thank you!"
UCAP: "Today is a very colourful day!"
UCAP: "Are you ready?"
AKSI: Tunggu respons siswa.`,
    bantuan: 'Jika kelas belum fokus: berdiri diam, ucapkan "Are you ready?" sekali lagi.',
    cue    : 'Layar ini tidak boleh dilewati.',
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
UCAP: "Colourful day today!"
AKSI: Ambil satu kartu warna.
AKSI: Tunjukkan kartu warna ke semua siswa.
UCAP: "Look first."
AKSI: Tunggu 3 detik.
UCAP: "What colour is this?"
AKSI: Tunggu 2 detik.
UCAP: "Red!"
UCAP: "This is red."
AKSI: Tunjukkan kartu warna kedua ke semua siswa.
UCAP: "And this one?"
AKSI: Tunggu 2 detik.
UCAP: "Blue!"
UCAP: "This is blue."`,
          bantuan     : null,
          cue         : 'Jangan ucapkan nama warna sebelum siswa diberi waktu mengamati.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Tunjukkan kartu gelombang pertama satu per satu ke semua siswa.
UCAP: "Red."
UCAP: "Blue."
UCAP: "Green."
UCAP: "Yellow."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
→ Siswa: "Red! Blue! Green! Yellow!"
UCAP: "Good!"
UCAP: "Now four more colours."
👂 LISTEN FIRST
AKSI: Tunjukkan kartu gelombang kedua satu per satu ke semua siswa.
UCAP: "Orange."
UCAP: "Purple."
UCAP: "Black."
UCAP: "White."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
→ Siswa: "Orange! Purple! Black! White!"
🗣 TOGETHER
AKSI: Tunjukkan kedelapan kartu warna satu per satu ke semua siswa.
UCAP: "Say it together!"
→ Siswa: "Red! Blue! Green! Yellow! Orange! Purple! Black! White!"
🔁 Putaran kedua dengan whisper voice.`,
          bantuan     : [
            'Jika diam: tunjuk kartu, ucapkan "Red..." menggantung.',
            'Jika pelan: dekatkan tangan ke telinga.',
          ],
          cue         : null,
          darurat     : 'Jika kelas sudah mengenal warna → lewati putaran whisper voice.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tempel kedelapan kartu warna di papan tulis berurutan dari kiri ke kanan.
AKSI: Tunjuk kartu dari kiri ke kanan satu putaran.
UCAP: "What colour?"
→ Siswa: menjawab warna bersama.
UCAP: "Now, surprise cards!"
AKSI: Tunjuk 3–4 kartu di papan tulis secara acak.
→ Siswa: menjawab warna bersama.`,
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
          teks        : `AKSI: Tunjuk kartu di papan tulis satu per satu sesuai urutan red, blue, green, yellow, orange, purple, black, white.
UCAP: "What colour?"
→ Siswa: menjawab nama warna.
AKSI: Modelkan kalimat lengkap sesuai kartu yang ditunjuk, misalnya kartu merah → ucapkan "It is red."
UCAP: "Fast voice!"`,
          bantuan     : [
            'Jika diam: ucapkan huruf pertama nama warna, lalu tunggu.',
            'Jika menjawab dalam Bahasa Indonesia: ucapkan nama warna dalam Bahasa Inggris, ajak siswa mengulang.',
          ],
          cue         : 'Gunakan "Fast voice!" hanya untuk red, blue, green, dan black. Pertahankan tempo normal untuk yellow, orange, dan purple.',
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
UCAP: "Walk, don't run."
UCAP: "Only touch near you."
AKSI: Peragakan tanda berhenti dengan tepuk tangan dua kali.
AKSI: Kembali ke tempat.
AKSI: Diam di tempat.
AKSI: Tunjuk lantai dekat tempat duduk.
UCAP: "Come back."
UCAP: "Freeze!"
UCAP: "Clap twice, come back and freeze."
AKSI: Peragakan urutan lengkap sentuh, kembali, lalu diam.
UCAP: "Watch."
UCAP: "Touch, come back, freeze."
UCAP: "Ready?"`,
          bantuan     : null,
          cue         : 'Ucapkan "Come back" sebelum "Freeze". Pilih benda yang dekat untuk demo.',
          darurat     : 'Jika waktu ≤10 menit → lewati sentuh warna, langsung ke Layar 7.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Mulai aktivitas sentuh warna.
🔁 5–6 warna · urutan red, blue, green, yellow.
UCAP: "Touch something red in the room!"
AKSI: Tunggu sampai semua siswa kembali ke tempat.
AKSI: Tepuk tangan dua kali.
AKSI: Tunggu sampai semua siswa diam.
UCAP: "What colour?"
→ Siswa: "Red!"
AKSI: Pada ronde akhir, tambahkan satu variasi mikro.
UCAP: "Touch something blue, quietly!"`,
          bantuan     : [
            'Jika ada siswa berlari: tepuk tangan dua kali, ucapkan "Walk!".',
            'Jika tidak ada benda yang cocok: ucapkan "Good try! Next colour.".',
          ],
          cue         : 'Setiap ronde harus diakhiri freeze sebelum lanjut.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tepuk tangan dua kali.
UCAP: "Sit down."
UCAP: "Hands in lap."
AKSI: Tunggu 15 detik dalam keadaan diam.
UCAP: "Watch me."
AKSI: Ambil satu benda milik guru.
AKSI: Modelkan kalimat pertama sesuai benda, misalnya pensil → ucapkan "This is my pencil."
AKSI: Tunggu sampai semua siswa menirukan.
AKSI: Modelkan kalimat kedua sesuai warna benda, misalnya merah → ucapkan "It is red."
AKSI: Tunggu sampai semua siswa menirukan.
AKSI: Gabungkan kedua kalimat, misalnya ucapkan "This is my pencil. It is red."
AKSI: Tunggu sampai semua siswa menirukan bersama.
AKSI: Ulangi modeling dengan benda kedua milik guru.
UCAP: "Open bag slowly."
UCAP: "Take one thing."
UCAP: "Close the bag."
UCAP: "Bag down."
AKSI: Modelkan sekali lagi kalimat gabungan dengan benda yang baru diambil.`,
          bantuan     : null,
          cue         : 'Tas harus tertutup dan diletakkan sebelum siswa tampil show and tell.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ajak 4–5 siswa maju satu per satu.
🔁 4–5 siswa · 15 detik per siswa.
UCAP: "Face the class."
UCAP: "Ready?"
AKSI: Tunggu 1 detik untuk siswa pemalu.
AKSI: Ucapkan kalimat berikut kepada semua siswa dengan suara pelan.
UCAP: "When your friend finishes, say 'Good job!'"
→ Siswa: "This is my [benda]. It is [warna]."`,
          bantuan     : [
            'Jika diam: bisikkan "This is my...".',
            'Jika lupa warna: tunjuk kartu di papan tulis.',
            'Jika hanya menyebut warna: terima jawaban, modelkan kalimat penuh.',
          ],
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ajak semua siswa menghadap pasangannya.
UCAP: "Turn to your partner."
AKSI: Modelkan ucapan berikut dengan suara kecil.
UCAP: "Small voice, like this."
UCAP: "Show one thing."
UCAP: "Say the colour."
UCAP: "Then switch."
UCAP: "Three, two, one."
UCAP: "Eyes here."`,
          bantuan     : null,
          cue         : 'Batasi aktivitas ini pada 30–45 detik.',
          darurat     : 'Jika waktu mepet → lewati Layar 9, langsung ke Layar 10.',
          diferensiasi: {
            perluSupport: 'Dekati mereka dan tunjuk kartu warna di papan tulis, izinkan menjawab satu kata.',
            sudahBisa   : 'Minta mereka mengucapkan kalimat penuh dan bertanya "What colour?" kepada pasangan.',
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
          teks        : `AKSI: Tunjuk semua kartu warna di papan tulis.
UCAP: "Look at all these colours!"
AKSI: Modelkan warna favorit guru, misalnya ucapkan "My favourite colour is blue!"
UCAP: "Point high, your favourite!"
UCAP: "Now say your favourite colour!"
→ Siswa: "My favourite colour is [warna]!"
🔁 4–5 siswa.`,
          bantuan     : 'Jika diam: tunjuk dua kartu, ucapkan "This? Or this?".',
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, a song!"
AKSI: Peragakan gestur pelangi dengan kedua tangan.
UCAP: "Rainbow colours!"
UCAP: "Listen first."
AKSI: Nyanyikan lagu satu putaran.
UCAP: "Red and yellow and pink and green,"
UCAP: "orange and purple and blue."
UCAP: "I can sing a rainbow, sing a rainbow,"
UCAP: "sing a rainbow too!"
UCAP: "Say it together!"`,
          bantuan     : null,
          cue         : 'Gunakan gestur pelangi yang besar, tidak perlu menunjuk setiap kartu dengan tepat.',
          darurat     : 'Jika tersedia kartu pink → tempel kartu pink di papan tulis saat lagu. Jika kelas antusias → ulangi lagu satu putaran lagi.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Hands down."
UCAP: "Quiet voice."
UCAP: "Wonderful!"
UCAP: "You know your colours."
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
          teks        : `AKSI: Kumpulkan kartu warna.
AKSI: Ajak siswa menutup tasnya.
AKSI: Catat siswa yang kesulitan warna tertentu, seperti orange, purple, dan green.
AKSI: Catat siswa yang tidak mau tampil show and tell.
AKSI: Catat siswa yang tidak ikut menyanyi.
AKSI: Catat siswa yang sulit kembali freeze setelah aktivitas gerak.`,
          bantuan     : null,
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_05;
