const TP_08 = {

  // METADATA
  id    : 'tp-08',
  nomor : 8,
  kelas : 1,
  nama  : 'My House',
  tema  : 'Keluarga dan Rumah',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebut nama ruangan utama (bedroom, kitchen, bathroom, living room) dengan lafal yang benar.',
    'Peserta didik dapat menyebut benda-benda umum dalam setiap ruangan menggunakan "There is a ... in the ...".',
    'Peserta didik dapat mendeskripsikan rumah mereka dalam 3–4 kalimat sederhana.',
  ],
  vocab     : ['bedroom', 'kitchen', 'bathroom', 'living room', 'bed', 'table', 'chair', 'sofa', 'there is', 'in the'],
  persiapan : [
    'Kartu printable ruangan x4: bedroom, kitchen, bathroom, living room.',
    'Kartu printable bonus x2: garage, floor plan (denah rumah).',
    'Selotip atau magnet untuk menempel kartu di papan tulis.',
    'Kartu denah dan kartu ruangan disimpan di meja guru, belum ditempel saat kelas masuk.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Pembuka Kelas',         tujuan: 'Guru mengunci perhatian siswa dengan tenang sebelum aktivitas dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi Awal',              tujuan: 'Guru membuka koneksi tentang ruangan di rumah.' },
    { layar:  2, judul: 'Pembuka · Model Guru + Denah',        tujuan: 'Guru memperkenalkan ruangan lewat kartu denah.' },
    { layar:  3, judul: 'Inti · Echo Ruangan',                 tujuan: 'Guru memimpin echo empat nama ruangan.' },
    { layar:  4, judul: 'Inti · Retrieval Ruangan',            tujuan: 'Guru menguji ingatan nama ruangan tanpa label.' },
    { layar:  5, judul: 'Inti · Reset + Transisi ke Benda',    tujuan: 'Guru menenangkan kelas dan mengaitkan ruangan dengan benda.' },
    { layar:  6, judul: 'Inti · Echo Benda per Ruangan',       tujuan: 'Guru memperkenalkan benda di setiap ruangan.' },
    { layar:  7, judul: 'Inti · Demo Kalimat',                 tujuan: 'Guru memodelkan pola "There is a ... in the ...".' },
    { layar:  8, judul: 'Inti · Demo Partner',                 tujuan: 'Guru mendemokan cara menyebut kalimat dengan kartu.' },
    { layar:  9, judul: 'Inti · Partner Practice',             tujuan: 'Guru memandu latihan berpasangan dengan kartu.' },
    { layar: 10, judul: 'Inti · Diferensiasi',                 tujuan: 'Guru memberi tingkat produksi sesuai kemampuan.' },
    { layar: 11, judul: 'Inti · Presentasi ke Kelas',          tujuan: 'Guru memandu siswa tampil di depan kelas.' },
    { layar: 12, judul: 'Penutup · Exit Ticket',               tujuan: 'Guru mengecek ruangan dan kalimat akhir.' },
    { layar: 13, judul: 'Penutup · Closure + Transfer',        tujuan: 'Guru menutup kelas dan memberi tugas transfer ke rumah.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di tengah kelas.
AKSI: Kosongkan kedua tangan.
AKSI: Simpan kartu denah dan kartu ruangan di meja tanpa menunjukkannya.
AKSI: Tunggu sampai semua siswa duduk tenang.
AKSI: Buat kontak mata dengan siswa sebelum bicara.
UCAP: "Good morning, everyone!"
UCAP: "How are you today?"
AKSI: Tunggu respons siswa.
UCAP: "I'm fine, thank you!"
UCAP: "Today, we talk about your house."
UCAP: "Are you ready?"
AKSI: Tunggu respons siswa.`,
    bantuan: 'Jika kelas belum fokus: berdiri diam, ucapkan "Are you ready?" sekali lagi.',
    cue    : 'Jangan tunjukkan kartu denah sebelum Layar 2. Jaga nada tenang sepanjang layar ini.',
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
          teks        : `AKSI: Berdiri di tengah kelas.
AKSI: Kosongkan kedua tangan.
UCAP: "Today, we talk about your house."
UCAP: "What rooms do you have at home?"
→ Siswa: menyebut ruangan di rumah secara spontan.
AKSI: Angguk sebagai respons jawaban siswa.
UCAP: "Bedroom, yes!"
UCAP: "Kitchen, good!"`,
          bantuan     : 'Jika ada siswa yang diam atau bingung: tunjuk satu jari lalu jari lainnya, ucapkan "Bedroom? Kitchen? Which one?".',
          cue         : 'Terima setiap jawaban sebagai jawaban yang valid. Jangan menilai besar atau kecilnya rumah siswa.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ambil kartu floor plan dari meja.
AKSI: Tunjukkan kartu floor plan ke semua siswa dengan dua tangan.
UCAP: "Look, this is a house."
UCAP: "It has rooms."
👂 LISTEN FIRST
AKSI: Tunjuk setiap kotak ruangan di denah satu per satu.
UCAP: "Bedroom."
UCAP: "Kitchen."
AKSI: Jeda 3 detik.
UCAP: "Bathroom."
AKSI: Gerakkan kedua tangan membuka lebar.
UCAP: "Living room."
→ Siswa: menyimak, belum diminta mengulang.`,
          bantuan     : null,
          cue         : 'Lakukan gestur "living room" bersamaan dengan menyebut katanya.',
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
          teks        : `AKSI: Tempel kartu bedroom di papan tulis.
AKSI: Tempel kartu kitchen di papan tulis.
AKSI: Tempel kartu bathroom di papan tulis.
AKSI: Tempel kartu living room di papan tulis.
👂 LISTEN FIRST
AKSI: Tunjuk kartu bedroom.
UCAP: "Bedroom."
AKSI: Tunjuk kartu kitchen.
UCAP: "Kitchen."
AKSI: Tunjuk kartu bathroom.
UCAP: "Bathroom."
AKSI: Tunjuk kartu living room.
UCAP: "Living room."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Tunjuk setiap kartu satu per satu.
→ Siswa: "Bedroom! Kitchen! Bathroom! Living room!"
AKSI: Tunjuk kartu bedroom.
UCAP: "Bed-room."
AKSI: Tunjuk kartu bathroom.
UCAP: "Bath-room."
→ Siswa: mengulang kedua kata dengan pelan.
🔁 Putaran acak — tunjuk kartu, siswa sebutkan.`,
          bantuan     : 'Jika bathroom dan bedroom masih tertukar: tunjuk dua kartu berdampingan, ucapkan "Bath-room. Bed-room. Different!".',
          cue         : 'Putaran pertama lebih lambat dari putaran kedua.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tutup label setiap kartu.
AKSI: Tunjuk gambar kartu secara acak.
UCAP: "What room is this?"
→ Siswa: menyebutkan nama ruangan serentak.
🔁 2–3 putaran acak.
UCAP: "Hands down."
UCAP: "Eyes on me."
AKSI: Tunjuk kartu.
UCAP: "Wait."
AKSI: Jeda 1 detik.
UCAP: "Look."
AKSI: Jeda 1 detik.
UCAP: "Answer!"
UCAP: "Fast round, go!"
AKSI: Tahan kartu 1 detik sebelum tunjuk kartu berikutnya.
AKSI: Tunjuk kartu bedroom, lalu bathroom, lalu bedroom secara berurutan.`,
          bantuan     : 'Jika masih tertukar: ulangi contrast check, ucapkan "Bath-room. Bed-room.", lalu lanjut speed round.',
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Good."
UCAP: "Hands down."
UCAP: "Take a breath."
AKSI: Tarik napas bersama semua siswa.
UCAP: "Now, what is inside the rooms?"
UCAP: "Watch."
AKSI: Tunjuk satu kotak ruangan di kartu denah.
AKSI: Tunjuk gambar benda di dalam ruangan itu.`,
          bantuan     : null,
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk kartu bedroom.
UCAP: "Bedroom, bed."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
→ Siswa: "Bed!"
AKSI: Tunjuk kartu kitchen.
UCAP: "Kitchen, table."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
→ Siswa: "Table!"
AKSI: Tunjuk kartu living room.
AKSI: Peragakan gestur duduk santai.
UCAP: "Living room, sofa."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
→ Siswa: "Sofa!"
AKSI: Tunjuk kartu bathroom.
AKSI: Peragakan gestur mandi.
UCAP: "Bathroom, shower."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
→ Siswa: "Shower."`,
          bantuan     : null,
          cue         : 'Lakukan gestur "sofa" dan "shower" bersamaan dengan menyebut katanya. Lakukan mini echo satu kali saja per benda.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk kartu bedroom.
UCAP: "Bedroom."
→ Siswa: "Bedroom."
UCAP: "Bed."
→ Siswa: "Bed."
AKSI: Tunjuk gambar kasur.
UCAP: "There is a bed."
AKSI: Tunjuk kartu bedroom.
UCAP: "In the bedroom."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
→ Siswa: "There is a bed in the bedroom."
UCAP: "Good."
AKSI: Jeda 2 detik.
AKSI: Ganti dengan kartu kitchen.
AKSI: Tunjuk gambar meja.
UCAP: "There is a table."
AKSI: Tunjuk kartu kitchen.
UCAP: "In the kitchen."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
→ Siswa: "There is a table in the kitchen."`,
          bantuan     : null,
          cue         : 'Tunjuk benda dulu, lalu tunjuk ruangan saat membangun kalimat.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ambil kartu living room.
AKSI: Pegang kartu living room.
UCAP: "There is a sofa in the living room."
AKSI: Berikan kartu bathroom ke satu siswa sukarela.
UCAP: "Listen first."
UCAP: "Loud enough for your friends."
UCAP: "Say: There is a shower in the bathroom."
→ Siswa: "There is a shower in the bathroom."
AKSI: Saat siswa berbicara, tunjuk benda lalu tunjuk ruangan.
UCAP: "Two claps for your friend!"
AKSI: Tepuk tangan dua kali.`,
          bantuan     : null,
          cue         : 'Pilihkan benda secara eksplisit, jangan beri pilihan terbuka. Buat demo hanya tiga langkah: pegang, tunjuk, ucap.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Hands still."
UCAP: "Wait."
AKSI: Bagikan 2 kartu ruangan acak ke setiap pasangan.
AKSI: Tunggu sampai semua pasangan menerima kartu.
UCAP: "Partner A, point to a room."
AKSI: Ucapkan pola "There is a... in the..." agar siswa melengkapi kalimat.
UCAP: "Partner B, listen."
UCAP: "Then switch."
UCAP: "Two cards each."
AKSI: Peragakan contoh yang salah dengan suara keras.
AKSI: Peragakan contoh yang salah dengan suara pelan.
AKSI: Peragakan partner voice sebagai contoh yang benar.
UCAP: "But partner voice."
UCAP: "Go!"
UCAP: "Finished? Do it again, faster!"
UCAP: "Change voice!"
UCAP: "Robot voice!"
UCAP: "Slow voice!"
UCAP: "Tiny voice!"
AKSI: Pantau latihan berpasangan dengan berkeliling kelas.
AKSI: Tepuk tangan sekali sebagai tanda berhenti.
UCAP: "Hands down."
UCAP: "Eyes on me."`,
          bantuan     : 'Jika pasangan diam: pegang kartu, ucapkan "There is a...", tunggu 2–3 detik, lalu biarkan siswa melengkapi.',
          cue         : 'Bagikan kartu dalam diam dulu, beri instruksi setelahnya. Terima jawaban seperti "Bed, bedroom" dan modelkan ulang saat berkeliling tanpa menghentikan latihan.',
          darurat     : 'Jika waktu ≤12 menit → langsung ke Layar 11.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Untuk siswa yang butuh bantuan, dekati mereka dan tunjuk kartu ruangan, izinkan menyebut nama ruangan saja.
AKSI: Untuk siswa yang sudah bisa, minta mereka mengucapkan kalimat penuh "There is a bed in the bedroom.".`,
          bantuan     : null,
          cue         : 'Diferensiasi dilakukan setelah semua siswa mengikuti latihan berpasangan.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati mereka dan tunjuk kartu ruangan, izinkan menyebut nama ruangan saja.',
            sudahBisa   : 'Minta mereka mengucapkan kalimat penuh "There is a bed in the bedroom.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Cards down."
AKSI: Jeda 2 detik.
AKSI: Tunjuk langsung 2–3 siswa.
UCAP: "You, you."
UCAP: "Show your card."
UCAP: "Tell us one sentence."
→ Siswa: "There is a bed in the bedroom."
UCAP: "Thumbs up for your friend!"
AKSI: Setelah presentasi terakhir, mulai reset.
UCAP: "Hands down."
UCAP: "Take a breath."
UCAP: "Sit nicely."
AKSI: Tunggu 5 detik.`,
          bantuan     : [
            'Jika siswa diam di depan: bisikkan "There is a...", lalu biarkan siswa melanjutkan.',
            'Jika tidak ada siswa yang siap: tunjuk dua siswa sekaligus untuk presentasi serentak.',
          ],
          cue         : 'Jangan membuka sesi tanya siapa yang mau maju. Sesekali pilih siswa dengan kepercayaan diri sedang.',
          darurat     : null,
          diferensiasi: null,
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,
      langkah: [

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk kartu ruangan di papan tulis dengan label tertutup.
UCAP: "What room?"
→ Siswa: menyebutkan nama ruangan serentak.
UCAP: "Good job."
AKSI: Tersenyum ke semua siswa.
AKSI: Jeda 2 detik.
AKSI: Tunjuk satu kartu saja.
UCAP: "One sentence."
AKSI: Ucapkan pola "There is a... in the..." agar siswa melengkapi kalimat.
UCAP: "Go!"
→ Siswa: mengucapkan satu kalimat untuk kartu yang sama serentak.`,
          bantuan     : null,
          cue         : null,
          darurat     : 'Jika kelas masih segar → lakukan 4 kartu retrieval dan satu kalimat bebas. Jika kelas lelah → cukup 2 kartu retrieval, lalu lakukan choral teacher-led satu kali.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Tonight, walk around your house."
UCAP: "Point to each room."
UCAP: "Say: This is the bedroom."
UCAP: "Say: This is the kitchen."
UCAP: "Can you do that?"
→ Siswa: "Yes!"
UCAP: "Wonderful!"
UCAP: "You can talk about your house in English now."
UCAP: "Goodbye, everyone!"
UCAP: "See you next time!"
🗣 TOGETHER
→ Siswa: "Goodbye, teacher! See you!"
AKSI: Kumpulkan semua kartu printable.
AKSI: Catat siswa yang masih tertukar bedroom dan bathroom setelah contrast check berulang.
AKSI: Catat siswa yang belum bisa memproduksi pola "There is a... in the...".
AKSI: Catat siswa yang hanya bisa menyebut nama ruangan tanpa kalimat.`,
          bantuan     : null,
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_08;
