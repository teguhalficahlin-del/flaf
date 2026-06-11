const TP_07 = {

  // METADATA
  id    : 'tp-07',
  nomor : 7,
  kelas : 1,
  nama  : 'My Family',
  tema  : 'Keluarga dan Rumah',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebut anggota keluarga inti (mother, father, sister, brother, grandmother, grandfather) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan anggota keluarga menggunakan "This is my ..." dalam konteks foto atau gambar.',
    'Peserta didik dapat memperkenalkan keluarga inti dalam 3–4 kalimat sederhana.',
  ],
  vocab     : ['mother', 'father', 'sister', 'brother', 'grandmother', 'grandfather', 'family', 'this is my'],
  persiapan : [
    'Kartu printable keluarga x6: mother, father, sister, brother, grandmother, grandfather.',
    'Selotip atau magnet untuk menempel kartu di papan tulis.',
    'Semua kartu disimpan di meja guru, belum ditempel saat kelas masuk.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Pembuka Kelas',     tujuan: 'Guru mengunci perhatian siswa dengan tenang sebelum aktivitas dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi Awal',          tujuan: 'Guru membuka koneksi personal tentang keluarga.' },
    { layar:  2, judul: 'Pembuka · Model Guru',            tujuan: 'Guru memodelkan dua kartu keluarga.' },
    { layar:  3, judul: 'Inti · Echo Gelombang 1',         tujuan: 'Guru memperkenalkan empat anggota keluarga pertama.' },
    { layar:  4, judul: 'Inti · Echo Gelombang 2',         tujuan: 'Guru memperkenalkan grandmother dan grandfather.' },
    { layar:  5, judul: 'Inti · Retrieval Cepat',          tujuan: 'Guru menguji ingatan kosakata tanpa label.' },
    { layar:  6, judul: 'Inti · Reset + Transisi',         tujuan: 'Guru menenangkan kelas sebelum produksi kalimat.' },
    { layar:  7, judul: 'Inti · Demo Kalimat',             tujuan: 'Guru memodelkan pola kalimat "This is my...".' },
    { layar:  8, judul: 'Inti · Demo Partner',             tujuan: 'Guru mendemokan cara memegang dan menyebut kartu.' },
    { layar:  9, judul: 'Inti · Partner Practice',         tujuan: 'Guru memandu latihan berpasangan dengan kartu.' },
    { layar: 10, judul: 'Inti · Diferensiasi',             tujuan: 'Guru memberi tingkat produksi sesuai kemampuan.' },
    { layar: 11, judul: 'Inti · Presentasi ke Kelas',      tujuan: 'Guru memandu siswa tampil di depan kelas.' },
    { layar: 12, judul: 'Penutup · Exit Ticket',           tujuan: 'Guru mengecek kosakata dan kalimat akhir.' },
    { layar: 13, judul: 'Penutup · Closure + Transfer',    tujuan: 'Guru menutup kelas dan memberi tugas transfer ke rumah.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di tengah kelas.
AKSI: Kosongkan kedua tangan.
AKSI: Simpan kartu di meja tanpa menunjukkannya.
AKSI: Tunggu sampai semua siswa duduk tenang.
AKSI: Buat kontak mata dengan siswa sebelum bicara.
UCAP: "Good morning, everyone!"
UCAP: "How are you today?"
AKSI: Tunggu respons siswa.
UCAP: "I'm fine, thank you!"
UCAP: "Today is a special day."
UCAP: "Are you ready?"
AKSI: Tunggu respons siswa.`,
    bantuan: 'Jika kelas belum fokus: berdiri diam, ucapkan "Are you ready?" sekali lagi.',
    cue    : 'Jaga nada tenang sepanjang layar ini.',
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
UCAP: "Today, we talk about family."
UCAP: "Who is at home with you?"
→ Siswa: menyebut anggota keluarga secara spontan.
AKSI: Terima semua jawaban siswa.
AKSI: Angguk lalu lanjut.`,
          bantuan     : 'Jika ada siswa yang diam atau tampak tidak nyaman: jangan memaksa, ucapkan "That\'s okay, we will learn together.".',
          cue         : 'Jangan menunggu jawaban serentak. Jangan memeriksa struktur keluarga siswa.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ambil kartu mother dari meja.
AKSI: Tunjukkan kartu mother ke semua siswa.
👂 LISTEN FIRST
UCAP: "Look."
UCAP: "This is my mother."
AKSI: Ambil kartu father.
AKSI: Tunjukkan kartu father ke semua siswa.
UCAP: "This is my father."
UCAP: "I love my family!"`,
          bantuan     : null,
          cue         : 'Jangan tempel kartu di layar ini. Jangan minta siswa mengulang dulu.',
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
          teks        : `AKSI: Tempel kartu mother di papan tulis.
AKSI: Tempel kartu father di papan tulis.
AKSI: Tempel kartu sister di papan tulis.
AKSI: Tempel kartu brother di papan tulis.
👂 LISTEN FIRST
UCAP: "Mother."
UCAP: "Father."
⚡ MICRO-FREEZE
UCAP: "Hands down."
UCAP: "Look."
AKSI: Tunggu 3 detik.
UCAP: "Sister."
UCAP: "Brother."
UCAP: "Ready?"
UCAP: "Say it together!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
AKSI: Tunjuk setiap kartu satu per satu.
→ Siswa: mengucapkan nama setiap kartu yang ditunjuk.`,
          bantuan     : 'Jika sister dan brother tertukar: tunjuk kartu sister, ucapkan "Sister, girl.", tunjuk kartu brother, ucapkan "Brother, boy.".',
          cue         : 'Perdengarkan keempat kata sebelum meminta siswa meniru.',
          darurat     : 'Jika kelas sudah mengenal kosakata keluarga → persingkat Layar 3 dan Layar 4.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tempel kartu grandmother di papan tulis.
AKSI: Tempel kartu grandfather di papan tulis.
👂 LISTEN FIRST
UCAP: "Listen first."
UCAP: "Grandmother."
AKSI: Tunggu 2 detik.
UCAP: "Grandfather."
🗣 TOGETHER
AKSI: Ucapkan "Grand..." agar siswa melengkapi kata.
→ Siswa: "...mother!"
AKSI: Ucapkan "Grand..." agar siswa melengkapi kata.
→ Siswa: "...father!"
AKSI: Tunjuk kartu grandmother.
UCAP: "Grandmother?"
AKSI: Tunjuk kartu grandfather.
UCAP: "Grandfather?"
AKSI: Tunjuk siswa di sisi kiri kelas.
UCAP: "Grandmother."
AKSI: Tunjuk siswa di sisi kanan kelas.
UCAP: "Grandfather."
AKSI: Tunjuk keenam kartu secara acak.
→ Siswa: menyebutkan nama kartu bersama dua putaran.`,
          bantuan     : 'Jika masih tertukar: ulangi semi-echo "Grand..." sekali lagi sebelum lanjut.',
          cue         : 'Lakukan semi-echo dan discrimination check sebelum lanjut ke Layar 5.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tutup label setiap kartu.
AKSI: Tunjuk gambar kartu secara acak.
UCAP: "What is this?"
→ Siswa: menyebutkan nama kartu serentak.
UCAP: "Hands on knees."
UCAP: "Eyes ready."
AKSI: Tunjuk mata sendiri.
AKSI: Tunjuk kartu.
UCAP: "Wait."
AKSI: Jeda 1 detik.
UCAP: "Look."
AKSI: Jeda 1 detik.
UCAP: "Answer!"
UCAP: "Fast!"`,
          bantuan     : 'Jika diam: buka setengah label, biarkan kelas membantu, tutup lagi, lalu coba ulang.',
          cue         : 'Acak urutan kartu, jangan ikuti urutan tempel.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Okay."
UCAP: "Hands down."
UCAP: "Take a breath."
AKSI: Tarik napas bersama semua siswa.
UCAP: "Now, we make sentences."
UCAP: "Watch me first."
AKSI: Tunggu 15 detik sebelum lanjut.`,
          bantuan     : null,
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ambil kartu mother.
UCAP: "Mother."
→ Siswa: "Mother."
UCAP: "This is my mother."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
→ Siswa: "This is my mother."
AKSI: Ganti dengan kartu father.
UCAP: "Father."
→ Siswa: "Father."
UCAP: "This is my father."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
→ Siswa: "This is my father."`,
          bantuan     : null,
          cue         : 'Modelkan kosakata dulu sebelum kalimat penuh.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ambil kartu grandfather.
AKSI: Pegang kartu grandfather.
UCAP: "This is my grandfather."
AKSI: Berikan kartu grandfather ke satu siswa sukarela.
UCAP: "Hold."
UCAP: "Show."
UCAP: "Say it."
→ Siswa: "This is my grandfather."
UCAP: "Two claps for your friend!"
AKSI: Tepuk tangan dua kali.`,
          bantuan     : null,
          cue         : 'Buat demo hanya tiga langkah: pegang, tunjuk, ucap. Jangan perpanjang demo.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Hands still."
UCAP: "Wait."
AKSI: Bagikan 2–3 kartu keluarga acak ke setiap pasangan.
AKSI: Tunggu sampai semua pasangan menerima kartu.
UCAP: "Partner A, pick one card."
UCAP: "Show."
AKSI: Ucapkan "This is my..." agar siswa melengkapi kalimat.
UCAP: "Partner B, listen."
UCAP: "Then switch."
UCAP: "Three cards each."
UCAP: "Go!"
UCAP: "Finished? Do it again, faster!"
AKSI: Peragakan contoh yang salah dengan suara keras.
AKSI: Peragakan contoh yang salah dengan suara pelan.
AKSI: Peragakan partner voice sebagai contoh yang benar.
AKSI: Pantau latihan berpasangan dengan berkeliling kelas.
AKSI: Koreksi hanya jika kosakata salah total.
AKSI: Tepuk tangan sekali sebagai tanda berhenti.
UCAP: "Hands down."
UCAP: "Eyes on me."`,
          bantuan     : 'Jika pasangan diam: pegang kartu, modelkan ke salah satu siswa, lalu biarkan siswa satunya meniru.',
          cue         : 'Bagikan kartu dalam diam dulu, beri instruksi setelahnya. Semua siswa memakai kartu printable dari guru.',
          darurat     : 'Jika kelas besar → bagikan kartu ke setiap baris atau kelompok secara bergilir.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Untuk siswa yang butuh bantuan, ajak mereka menyebutkan kosakata saja sambil menunjuk kartu tanpa kalimat.
AKSI: Untuk siswa yang sudah bisa, ajak mereka mengucapkan "This is my mother. This is my father."`,
          bantuan     : null,
          cue         : null,
          darurat     : 'Jika waktu ≤12 menit → langsung ke Layar 12.',
          diferensiasi: {
            perluSupport: 'Ajak mereka menyebutkan kosakata saja sambil menunjuk kartu tanpa kalimat.',
            sudahBisa   : 'Ajak mereka mengucapkan "This is my mother. This is my father."',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Cards down."
UCAP: "Eyes on me."
AKSI: Tanyakan siapa yang mau maju ke depan.
AKSI: Tunjuk 2–3 siswa yang mengangkat tangan.
AKSI: Ajak setiap siswa memegang kartu pilihannya.
UCAP: "Show the card."
AKSI: Ucapkan "This is my..." agar siswa melengkapi kalimat.
→ Siswa: "This is my mother."
UCAP: "Everyone, thumbs up for your friend!"
AKSI: Setelah presentasi terakhir, mulai reset.
UCAP: "Hands down."
UCAP: "Take a breath."
UCAP: "Sit nicely."
AKSI: Tunggu 5 detik.`,
          bantuan     : 'Jika tidak ada siswa sukarela: tunjuk dua siswa sekaligus untuk presentasi serentak.',
          cue         : 'Pastikan kartu diletakkan sebelum siswa sukarela maju.',
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
          teks        : `AKSI: Tempel kembali keenam kartu di papan tulis.
AKSI: Tutup label setiap kartu.
UCAP: "Last check."
UCAP: "I point, you say."
UCAP: "Ready?"
AKSI: Tunjuk keenam kartu secara acak.
→ Siswa: menyebutkan nama kartu serentak.
UCAP: "Good."
AKSI: Tunggu 2 detik.
AKSI: Tunjuk satu kartu saja.
UCAP: "One sentence."
AKSI: Ucapkan "This is my..." agar siswa melengkapi kalimat.
UCAP: "Go!"
→ Siswa: mengucapkan satu kalimat untuk kartu itu serentak.`,
          bantuan     : null,
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Tonight, if you see your family at home, point to them."
UCAP: "Say: This is my mother."
UCAP: "Say: This is my father."
UCAP: "You can also point to a photo or a picture of anyone you love."
UCAP: "Can you try that?"
→ Siswa: "Yes!"
UCAP: "Excellent!"
UCAP: "You can talk about your family in English now."
UCAP: "Goodbye, everyone!"
UCAP: "See you next time!"
🗣 TOGETHER
→ Siswa: "Goodbye, teacher! See you!"
AKSI: Kumpulkan semua kartu printable.
AKSI: Catat siswa yang belum bisa membedakan sister dan brother.
AKSI: Catat siswa yang belum bisa membedakan grandmother dan grandfather.
AKSI: Catat siswa yang belum bisa memproduksi pola "This is my...".`,
          bantuan     : null,
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_07;
