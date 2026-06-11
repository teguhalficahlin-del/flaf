const TP_04 = {

  // METADATA
  id    : 'tp-04',
  nomor : 4,
  kelas : 1,
  nama  : 'Numbers 1–20',
  tema  : 'Dunia di Sekitar Kita',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebut dan mengurutkan angka 1–10 dengan lafal yang benar dalam aktivitas menghitung bersama.',
    'Peserta didik dapat menyebut angka 11–20 dan mengenali pola pembentukan angka belasan dalam bahasa Inggris.',
    'Peserta didik dapat menggunakan angka dalam konteks nyata: menghitung benda, menjawab "how many?", dan menyebut usia.',
  ],
  vocab     : ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
               'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
               'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'how many'],
  persiapan : [
    'Kartu angka 1–20.',
    'Benda untuk dihitung, disiapkan di meja guru dalam jangkauan tangan sebelum kelas mulai.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Pembuka Kelas',               tujuan: 'Guru mengunci perhatian siswa sebelum aktivitas dimulai.' },
    { layar:  1, judul: 'Pembuka · Clap and Count',                  tujuan: 'Guru memimpin hitungan 1–10 dengan tepukan.' },
    { layar:  2, judul: 'Pembuka · Jembatan ke Inti',                tujuan: 'Guru menjembatani ke pengenalan angka dengan kartu.' },
    { layar:  3, judul: 'Inti · Kartu 1–10',                         tujuan: 'Guru memperkenalkan angka 1–10 dengan kartu.' },
    { layar:  4, judul: 'Inti · Jembatan ke 11–20',                  tujuan: 'Guru menjembatani ke angka 11–20.' },
    { layar:  5, judul: 'Inti · Kartu 11–20',                        tujuan: 'Guru memperkenalkan angka 11–20 dengan kartu.' },
    { layar:  6, judul: 'Inti · Reset + Aturan Permainan Angka',     tujuan: 'Guru menenangkan kelas dan menjelaskan aturan permainan.' },
    { layar:  7, judul: 'Inti · Permainan Tunjuk Angka',             tujuan: 'Guru memimpin permainan menebak angka.' },
    { layar:  8, judul: 'Inti · Hitung Benda Nyata',                 tujuan: 'Guru mengajak siswa menghitung benda nyata.' },
    { layar:  9, judul: 'Inti · Diferensiasi',                       tujuan: 'Guru memberi pilihan latihan berpasangan sesuai kemampuan.' },
    { layar: 10, judul: 'Penutup · Demo + Aturan Hitung Mundur',     tujuan: 'Guru membentuk kelompok dan mendemokan hitung mundur.' },
    { layar: 11, judul: 'Penutup · Hitung Mundur Blast Off',         tujuan: 'Guru memimpin hitung mundur blast off.' },
    { layar: 12, judul: 'Penutup · Refleksi',                        tujuan: 'Guru menanyakan angka tersulit bagi siswa.' },
    { layar: 13, judul: 'Penutup · Penutup Kelas',                   tujuan: 'Guru menutup kelas dengan salam perpisahan bersama.' },
    { layar: 14, judul: 'Penutup Sesi · Selesai',                    tujuan: 'Guru membereskan media dan mencatat observasi siswa.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Pastikan benda hitung sudah berada di meja guru dalam jangkauan tangan.
AKSI: Tunggu sampai semua siswa duduk tenang.
UCAP: "Good morning, everyone!"
UCAP: "How are you today?"
AKSI: Tunggu respons siswa.
UCAP: "I'm fine, thank you!"
UCAP: "Today we count in English!"
UCAP: "Are you ready?"
AKSI: Tunggu respons siswa.`,
    bantuan: 'Jika kelas belum fokus: berdiri diam, ucapkan "Are you ready?" sekali lagi.',
    cue    : 'Jangan mulai Layar 1 sebelum kelas benar-benar tenang.',
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
          teks        : `AKSI: Berdiri di depan kelas.
AKSI: Tunggu sampai semua siswa duduk tenang.
UCAP: "Good morning, everyone!"
UCAP: "Today we are going to count!"
AKSI: Tunjuk satu jari ke udara.
UCAP: "One."
AKSI: Tunjuk dua jari ke udara.
UCAP: "Two."
AKSI: Tunjuk tiga jari ke udara.
UCAP: "Three."
AKSI: Tunjuk ke semua siswa.
UCAP: "You continue!"
UCAP: "What comes next?"
AKSI: Tunggu 2 detik.
UCAP: "Four!"
UCAP: "Five!"
UCAP: "Let's count together!"
AKSI: Angkat tangan sebagai aba-aba.
UCAP: "Ready to clap?"
AKSI: Hitung dari satu sampai sepuluh sambil bertepuk tangan setiap angka.
UCAP: "One!"
UCAP: "Two!"
UCAP: "Three!"
UCAP: "Four!"
UCAP: "Five!"
UCAP: "Six!"
UCAP: "Seven!"
UCAP: "Eight!"
UCAP: "Nine!"
UCAP: "Ten!"
UCAP: "Now together!"
UCAP: "Slow first."
UCAP: "Ready?"
→ Siswa: "One! Two! Three! Four! Five! Six! Seven! Eight! Nine! Ten!"
AKSI: Tunggu sampai putaran pelan stabil.
UCAP: "Now faster!"`,
          bantuan     : 'Jika siswa tidak ikut: tunjuk jari satu per satu, ajak siswa ikut menghitung.',
          cue         : null,
          darurat     : 'Jika kelas sudah lancar menghitung 1–10 → persingkat Layar 3, fokus ke angka 11–20.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk ke papan tulis.
UCAP: "Great! You can count to ten!"
UCAP: "Now let's learn the numbers properly, with cards!"`,
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
          teks        : `AKSI: Tempel kartu 1–10 di papan tulis satu per satu.
👂 LISTEN FIRST
UCAP: "One."
UCAP: "Two."
UCAP: "Three."
UCAP: "Four."
UCAP: "Five."
UCAP: "Six."
UCAP: "Seven."
UCAP: "Eight."
UCAP: "Nine."
UCAP: "Ten."
🗣 TOGETHER
AKSI: Tunjuk kartu satu per satu.
UCAP: "Say it with me!"
→ Siswa: "One! Two! Three! Four! Five! Six! Seven! Eight! Nine! Ten!"
AKSI: Mulai putaran kedua.
UCAP: "Whisper voice!"
→ Siswa: mengucapkan semua angka dengan suara bisik.`,
          bantuan     : [
            'Jika siswa diam: tunjuk kartu, ucapkan "One..." menggantung, lalu tunggu siswa melanjutkan.',
            'Jika suara pelan: dekatkan tangan ke telinga, angguk semangat.',
          ],
          cue         : 'Lakukan putaran whisper voice hanya satu putaran.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk kartu 10 di papan tulis.
UCAP: "Ten!"
UCAP: "Good."
UCAP: "Now what comes after ten?"
UCAP: "These numbers sound different."
UCAP: "Just listen first, no need to repeat yet."
AKSI: Tempel kartu 11–20 di papan tulis satu per satu.`,
          bantuan     : null,
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Tunjuk kartu 11 sampai 15 satu per satu.
UCAP: "Eleven."
UCAP: "Twelve."
UCAP: "Thirteen."
UCAP: "Fourteen."
UCAP: "Fifteen."
UCAP: "Good listening!"
👂 LISTEN FIRST
AKSI: Tunjuk kartu 16 sampai 20 satu per satu.
UCAP: "Sixteen."
UCAP: "Seventeen."
UCAP: "Eighteen."
UCAP: "Nineteen."
UCAP: "Twenty."
🗣 TOGETHER
AKSI: Ucapkan satu angka, lalu tunggu siswa mengikuti.
UCAP: "Eleven."
UCAP: "Twelve."
UCAP: "Thirteen."
UCAP: "Fourteen."
UCAP: "Fifteen."
UCAP: "Sixteen."
UCAP: "Seventeen."
UCAP: "Eighteen."
UCAP: "Nineteen."
UCAP: "Twenty."
→ Siswa: mengikuti setiap angka yang diucapkan guru.
🔁 Ulangi sekali lagi sebagai satu chunk penuh.`,
          bantuan     : 'Jika siswa diam: ucapkan angka bersama siswa, tanpa koreksi individual.',
          cue         : 'Ucapkan eleven sampai fifteen dengan tempo pelan. Jangan berlama-lama di semi-echo.',
          darurat     : 'Jika kelas kuat → lewati semi-echo, langsung ke chunk penuh.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tepuk tangan sekali.
AKSI: Angkat tangan untuk meminta perhatian kelas.
AKSI: Tunggu sampai semua siswa diam dan menatap papan tulis.
UCAP: "Hands down."
UCAP: "Eyes on the board."
UCAP: "Now a game!"
UCAP: "I point to a number, you say it!"
UCAP: "Hands up if you know!"
UCAP: "First hand up, say it!"
AKSI: Peragakan aturan dengan contoh yang salah.
AKSI: Teriak tanpa mengangkat tangan sebagai contoh yang salah.
UCAP: "Oh no!"
AKSI: Peragakan aturan dengan contoh yang benar.
AKSI: Angkat tangan tanpa bersuara.
UCAP: "Like this."
UCAP: "Hand up first, then say it."`,
          bantuan     : null,
          cue         : null,
          darurat     : 'Jika waktu ≤10 menit → lewati permainan, langsung ke Layar 8.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk kartu angka secara acak.
🔁 6–8 angka.
AKSI: Saat menunjuk angka 1–10, ucapkan pertanyaan berikut.
UCAP: "What number?"
UCAP: "Fast!"
AKSI: Saat menunjuk angka 11–20, ucapkan pertanyaan berikut.
UCAP: "Look carefully."
UCAP: "What number?"
AKSI: Selipkan 1–2 ronde jawaban serentak seluruh kelas.
UCAP: "Say it together!"
UCAP: "What number?"
→ Siswa: angkat tangan lalu ucapkan angka, atau ucapkan angka serentak pada ronde seluruh kelas.`,
          bantuan     : [
            'Jika tidak ada yang menjawab: ucapkan suku kata pertama "Thir-..." menggantung, lalu tunggu.',
            'Jika kelas kacau: ucapkan "Freeze.", ucapkan "Hands down.", ucapkan "Eyes here.", lalu lanjutkan.',
          ],
          cue         : 'Jangan gunakan "Fast!" untuk angka 11–20. Berhenti saat energi masih tinggi.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Now let's count real things!"
UCAP: "How many books?"
UCAP: "Let's count together!"
AKSI: Letakkan benda satu per satu sambil menghitung bersama semua siswa.
UCAP: "One, two, three."
UCAP: "How many?"
→ Siswa: menjawab jumlah benda.
AKSI: Modelkan kalimat lengkap sesuai benda yang baru dihitung, misalnya lima buku → ucapkan "Yes! There are five books."
AKSI: Ulangi penghitungan dengan 2–3 benda berbeda.`,
          bantuan     : 'Jika siswa diam: tunjuk benda, ucapkan angkanya, lalu ajak semua siswa mengulang.',
          cue         : 'Variasikan jumlah benda, jangan selalu sepuluh. Angka adalah target utama, kalimat "There are..." hanya model guru.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tepuk tangan sekali untuk menandai pergantian aktivitas.
UCAP: "Partner voice."
UCAP: "Now practise with your partner."
UCAP: "Count things on your table."
UCAP: "Stay in your seat."
UCAP: "Partner A counts first."
UCAP: "Partner B listens."
UCAP: "Then switch."`,
          bantuan     : null,
          cue         : 'Ucapkan "Partner voice" sebelum latihan dimulai.',
          darurat     : 'Jika waktu terbatas → batasi latihan berpasangan pada 2 menit.',
          diferensiasi: {
            perluSupport: 'Dekati mereka dan hitung benda di meja bersama-sama, batasi pada angka 1–10.',
            sudahBisa   : 'Minta mereka menghitung benda sampai angka 11–20 dengan kalimat "There are [n] [benda]".',
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
          teks        : `AKSI: Ajak semua siswa berdiri.
UCAP: "Everyone stand up!"
AKSI: Berjalan ke area kiri kelas.
AKSI: Tunjuk siswa di area kiri.
UCAP: "Group 1, here."
AKSI: Berjalan ke area tengah kelas.
AKSI: Tunjuk siswa di area tengah.
UCAP: "Group 2, here."
AKSI: Berjalan ke area kanan kelas.
AKSI: Tunjuk siswa di area kanan.
UCAP: "Group 3, here."
UCAP: "I count down from ten."
UCAP: "When I call your group, sit down!"
AKSI: Peragakan aturan dengan demo.
UCAP: "Watch."
UCAP: "Group 1, ten!"
AKSI: Tunggu kelompok 1 duduk.
UCAP: "Good, like that."
UCAP: "Everyone stand again!"`,
          bantuan     : null,
          cue         : null,
          darurat     : 'Jika kelas besar → tambah subkelompok sebelum mulai hitung mundur.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pastikan semua siswa berdiri.
AKSI: Mulai hitung mundur dari sepuluh sampai satu.
AKSI: Panggil satu kelompok duduk pada setiap angka.
🔁 Satu kelompok duduk per angka sampai "One!".
UCAP: "Ten!"
UCAP: "Nine!"
UCAP: "Eight!"
UCAP: "Seven!"
UCAP: "Six!"
UCAP: "Five!"
UCAP: "Four!"
UCAP: "Three!"
UCAP: "Two!"
UCAP: "One!"
AKSI: Tunggu semua siswa duduk.
UCAP: "Blast off!"
AKSI: Ajak semua siswa mengangkat tangan sambil tetap duduk.`,
          bantuan     : null,
          cue         : 'Jaga ritme hitung mundur tetap berjalan sampai "One!".',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk kartu-kartu angka di papan tulis.
UCAP: "Well done!"
UCAP: "Look at all these numbers."
UCAP: "Think first."
AKSI: Tunggu 3 detik.
UCAP: "Which number is hardest to say?"
UCAP: "Point to it!"
→ Siswa: menunjuk satu kartu angka yang terasa paling sulit.`,
          bantuan     : 'Jika siswa bingung: tunjuk angka belasan, ucapkan "Thirteen? Fifteen? Hard?".',
          cue         : null,
          darurat     : 'Jika waktu sangat mepet → lewati Layar 12, langsung ke Layar 13.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
AKSI: Lambaikan tangan ke semua siswa.
UCAP: "Great work today!"
UCAP: "You can count to twenty in English!"
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
          teks        : `AKSI: Kumpulkan kartu angka 1–20.
AKSI: Simpan benda yang dipakai untuk menghitung di meja guru.
AKSI: Catat siswa yang kesulitan angka 11–19.
AKSI: Catat siswa yang tidak bisa menjawab "How many?".
AKSI: Catat siswa yang tidak ikut clap and count.`,
          bantuan     : null,
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_04;
