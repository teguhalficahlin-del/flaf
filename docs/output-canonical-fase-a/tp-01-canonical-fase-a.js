const TP_01 = {

  // METADATA
  id    : 'tp-01',
  nomor : 1,
  kelas : 1,
  nama  : 'Greetings & Farewells',
  tema  : 'Interaksi Sosial Dasar',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat mengucapkan salam (hello, good morning, good afternoon, good evening) dan perpisahan (goodbye, bye, see you) dengan benar sesuai waktu.',
    'Peserta didik dapat merespons salam dan perpisahan dari guru atau teman dengan ekspresi dan gestur yang tepat.',
    'Peserta didik dapat menggunakan salam dan perpisahan secara spontan dalam rutinitas kelas sehari-hari.',
  ],
  vocab     : ['hello', 'hi', 'goodbye', 'bye', 'see you', 'good morning',
               'good afternoon', 'good evening', 'good night'],
  persiapan : [
    'Kartu salam x4: "good morning", "good afternoon", "good evening", "good night".',
    'Kartu waktu x4: pagi, siang, sore, malam.',
    'Kartu perpisahan x3: "goodbye", "bye", "see you".',
    'Dua boneka tangan: Kiki dan Momo (wajib).',
  ],
  media     : [],
  printables: [
    { file: 'tp01-afternoon.png',      label: 'Afternoon' },
    { file: 'tp01-evening.png',        label: 'Evening' },
    { file: 'tp01-good-afternoon.png', label: 'Good Afternoon' },
    { file: 'tp01-good-evening.png',   label: 'Good Evening' },
    { file: 'tp01-good-morning.png',   label: 'Good Morning' },
    { file: 'tp01-good-night.png',     label: 'Good Night' },
    { file: 'tp01-morning.png',        label: 'Morning' },
    { file: 'tp01-night.png',          label: 'Night' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Door Greeting', tujuan: 'Guru menyambut siswa satu per satu di pintu dengan boneka Kiki.' },
    { layar:  1, judul: 'Pembuka · Demo Boneka',       tujuan: 'Guru memperagakan dialog salam pagi dengan Kiki dan Momo.' },
    { layar:  2, judul: 'Pembuka · Interaksi Kelas',   tujuan: 'Guru mengajak semua siswa membalas sapaan bersama.' },
    { layar:  3, judul: 'Pembuka · Kartu Waktu',       tujuan: 'Guru memperkenalkan tiga waktu lewat kartu waktu.' },
    { layar:  4, judul: 'Inti · Demo 4 Salam',         tujuan: 'Guru memperagakan empat salam dengan Kiki dan Momo.' },
    { layar:  5, judul: 'Inti · Drill',                tujuan: 'Guru memimpin pengulangan empat salam bersama semua siswa.' },
    { layar:  6, judul: 'Inti · Chant Demo',           tujuan: 'Guru memperagakan chant salam satu putaran penuh.' },
    { layar:  7, judul: 'Inti · Chant Bersama',        tujuan: 'Guru memimpin chant bersama semua siswa.' },
    { layar:  8, judul: 'Inti · Reset + Game',         tujuan: 'Guru menenangkan kelas dan menjelaskan aturan game.' },
    { layar:  9, judul: 'Inti · Game',                 tujuan: 'Guru memimpin game salam berebut poin.' },
    { layar: 10, judul: 'Inti · Real Life',            tujuan: 'Guru menghubungkan salam dengan situasi di rumah.' },
    { layar: 11, judul: 'Inti · Farewell Intro',       tujuan: 'Guru memperkenalkan ungkapan perpisahan.' },
    { layar: 12, judul: 'Inti · Farewell Drill',       tujuan: 'Guru memimpin pengulangan ungkapan perpisahan.' },
    { layar: 13, judul: 'Inti · Diferensiasi',         tujuan: 'Guru memberi pilihan latihan dengan atau tanpa kartu.' },
    { layar: 14, judul: 'Penutup · Review',            tujuan: 'Guru menguji ingatan siswa lewat kartu waktu.' },
    { layar: 15, judul: 'Penutup · Refleksi',          tujuan: 'Guru menanyakan salam favorit setiap siswa.' },
    { layar: 16, judul: 'Penutup · Penutup Kelas',     tujuan: 'Guru menutup kelas dengan salam perpisahan bersama.' },
    { layar: 17, judul: 'Penutup Sesi · Selesai',      tujuan: 'Guru membereskan media dan mencatat observasi siswa.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di pintu.
AKSI: Pegang Kiki di tangan kiri.
AKSI: Sambut siswa satu per satu saat masuk.
AKSI: Lambaikan Kiki ke setiap siswa yang masuk.
UCAP: "Good morning!"
UCAP: "Come in, come in!"`,
    bantuan: null,
    cue    : 'Boneka Kiki wajib ada di tangan sepanjang layar ini. Layar ini tidak boleh dilewati.',
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
          teks        : `AKSI: Ajak semua siswa duduk.
AKSI: Pegang Kiki di tangan kiri.
AKSI: Pegang Momo di tangan kanan.
AKSI: Peragakan dialog salam pagi Kiki dan Momo.
UCAP: "Good morning, Momo!"
UCAP: "How are you today?"
UCAP: "Good morning, Kiki!"
UCAP: "I am fine, thank you!"`,
          bantuan     : null,
          cue         : 'Demo boneka hanya sekali. Jangan ulang demo boneka.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Turunkan boneka.
AKSI: Tunjuk diri sendiri.
AKSI: Tunjuk ke semua siswa.
UCAP: "Good morning, everyone!"
UCAP: "How are you today?"
UCAP: "I am fine, thank you!"
UCAP: "Say it with me!"
→ Siswa: "Good morning, teacher! I am fine, thank you!"`,
          bantuan     : 'Jika diam: condongkan badan, alis naik, ucapkan "I am fi-ne..." menggantung.',
          cue         : 'Langsung modelkan jawaban tanpa jeda setelah ucapkan "Say it with me!".',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ambil kartu waktu.
AKSI: Tunjukkan kartu waktu ke semua siswa satu per satu.
UCAP: "Look! Morning, afternoon, evening."
UCAP: "Each time has its own greeting!"
UCAP: "This is morning."
UCAP: "This is afternoon."
UCAP: "This is evening."
UCAP: "Now, what time is this?"
→ Siswa: "Morning!" atau "Good morning!"`,
          bantuan     : [
            'Jika diam: tunjuk dua kartu waktu bergantian, ucapkan "Morning or afternoon?".',
            'Jika diam: tunjuk gambar matahari, ucapkan "mor-ning..." menggantung.',
            'Jika benar: angkat jempol, angguk.',
          ],
          cue         : 'Condongkan badan dan naikkan alis setelah ucapkan "Now, what time is this?". Tunggu respons sebelum lanjut.',
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
          teks        : `AKSI: Tempel empat kartu salam di papan tulis satu per satu.
UCAP: "We know morning, afternoon, and evening."
UCAP: "Now one more, good night!"
UCAP: "See? Four greetings, one for each time."
UCAP: "Let's learn them all!"
AKSI: Pegang Kiki di tangan kiri.
AKSI: Pegang Momo di tangan kanan.
AKSI: Peragakan dialog Kiki dan Momo dengan empat salam.
UCAP: "Good morning, Momo!"
UCAP: "Good morning, Kiki!"
UCAP: "Good afternoon, Momo!"
UCAP: "Good afternoon, Kiki!"
UCAP: "Good evening, Momo!"
UCAP: "Good evening, Kiki!"
UCAP: "Good night, Momo!"
UCAP: "Good night, Kiki!"`,
          bantuan     : null,
          cue         : 'Gerakkan tangan seperti orang tidur saat ucapkan "Good night".',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Turunkan boneka.
AKSI: Tunjuk kartu salam di papan tulis satu per satu.
👂 LISTEN FIRST
UCAP: "Good morning."
UCAP: "Good afternoon."
UCAP: "Good evening."
UCAP: "Good night."
🗣 TOGETHER
UCAP: "Say it with me!"
→ Siswa: "Good morning! Good afternoon! Good evening! Good night!"`,
          bantuan     : [
            'Jika diam: tunjuk kartu pertama, ucapkan "Good mor-ning..." menggantung.',
            'Jika pelan: dekatkan tangan ke telinga, angguk semangat.',
          ],
          cue         : null,
          darurat     : 'Jika kelas sudah mengenal keempat salam → persingkat drill, langsung ke Layar 6.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tepuk tangan sekali.
UCAP: "Good!"
UCAP: "Now, let's say it with a chant."
UCAP: "Watch me first!"
AKSI: Tunjuk telinga sendiri.
AKSI: Tunjuk mata sendiri.
👂 LISTEN FIRST
AKSI: Peragakan chant satu putaran penuh sambil duduk.
UCAP: "Hel-lo hel-lo."
AKSI: Tepuk tangan 4 kali.
UCAP: "How are you?"
AKSI: Ketuk lutut 3 kali.
UCAP: "I am fine."
AKSI: Tepuk tangan 3 kali.
UCAP: "Thank you!"
AKSI: Angkat kedua tangan.`,
          bantuan     : null,
          cue         : 'Peragakan chant sambil duduk. Demo satu putaran penuh, siswa belum ikut.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa melakukan chant dua putaran.
UCAP: "Say it together!"
→ Siswa: "Hello hello, how are you? I am fine, thank you!"`,
          bantuan     : 'Jika tidak ikut: perlambat tempo, tunjuk lutut saat bagian ketuk lutut.',
          cue         : 'Putaran kedua lebih cepat dari putaran pertama, siswa tetap duduk selama chant. Berhenti saat energi masih tinggi.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Angkat tangan untuk meminta perhatian kelas.
AKSI: Tunggu sampai semua siswa diam dan menatap guru.
UCAP: "Hands down."
UCAP: "Eyes on me."
AKSI: Pegang Kiki.
AKSI: Gerakkan Kiki berdiri sebagai contoh.
UCAP: "Now a game!"
UCAP: "I show a card."
UCAP: "Stand up fast."
UCAP: "Say it right."
UCAP: "Get a point!"`,
          bantuan     : null,
          cue         : 'Tunggu sampai kelas benar-benar diam sebelum menjelaskan aturan game.',
          darurat     : 'Jika waktu ≤10 menit → lewati game, langsung ke Layar 10.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Angkat satu kartu salam ke semua siswa.
AKSI: Beri poin kepada siswa yang pertama berdiri dan menjawab benar.
🔁 5–6 putaran.`,
          bantuan     : 'Jika tidak ada yang menjawab: dekatkan kartu, ucapkan "Good mor-..." menggantung.',
          cue         : 'Batasi game 5–6 putaran. Berhenti sebelum energi turun.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Ajak semua siswa duduk.
UCAP: "Nice!"
UCAP: "Do you say these greetings at home too?"
AKSI: Peragakan dialog Kiki dan ibu dalam konteks di rumah.
UCAP: "Good morning, Mom!"
UCAP: "Good morning, Kiki!"
AKSI: Turunkan boneka.
AKSI: Condongkan badan ke arah siswa.
AKSI: Naikkan alis.
UCAP: "What do you say to your parents in the morning at home?"
→ Siswa: "Good morning, Mom! Good morning, Dad!"`,
          bantuan     : 'Jika diam: tunjuk siswa bergantian, ucapkan "Good mor-ning, Mom..." menggantung.',
          cue         : 'Tunjuk ke luar jendela ke arah rumah saat membuka konteks ini.',
          darurat     : 'Jika waktu mepet → batasi konteks rumah pada 1–2 contoh.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Angguk dan tersenyum ke semua siswa.
AKSI: Tunggu respons siswa.
UCAP: "And when you leave?"
UCAP: "What do you say then?"
AKSI: Sambut jawaban siswa.
UCAP: "Yes! We can say goodbye."
AKSI: Tempel kartu perpisahan di papan tulis.
UCAP: "Look at these!"
AKSI: Peragakan dialog perpisahan Kiki dan Momo.
UCAP: "Goodbye, Momo! See you!"
UCAP: "Goodbye, Kiki! Bye!"
👂 LISTEN FIRST
AKSI: Turunkan boneka.
AKSI: Tunjuk kartu perpisahan di papan tulis satu per satu.
UCAP: "Goodbye!"
UCAP: "Bye!"
UCAP: "See you!"`,
          bantuan     : null,
          cue         : 'Gerakkan tangan seperti melambai pergi saat ucapkan "And when you leave?".',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengikuti ucapan perpisahan.
UCAP: "Say it with me!"
→ Siswa: "Goodbye! Bye! See you!"
🔁 2 putaran.`,
          bantuan     : [
            'Jika diam: gerakkan tangan melambai, ucapkan "Good-bye..." menggantung.',
            'Jika pelan: dekatkan tangan ke telinga, angguk semangat.',
          ],
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tepuk tangan sekali.
AKSI: Tunjuk kartu salam di papan tulis.
UCAP: "Now let's practice."
UCAP: "If you need help, look at the cards."
UCAP: "If you are ready, try without the cards."`,
          bantuan     : null,
          cue         : 'Diferensiasi dilakukan setelah semua siswa mengikuti latihan bersama.',
          darurat     : 'Jika waktu sangat mepet → lewati diferensiasi, langsung ke Layar 14.',
          diferensiasi: {
            perluSupport: 'Dekati mereka dan ajak berdialog salam sambil melihat kartu.',
            sudahBisa   : 'Minta mereka membuat dialog salam sendiri tanpa melihat kartu.',
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
          teks        : `AKSI: Ambil kartu waktu.
AKSI: Tunjukkan kartu waktu ke semua siswa.
🔁 3–4 kartu berbeda.
UCAP: "Remember these?"
UCAP: "Let's see what you know."
UCAP: "What greeting do we use in the morning?"
→ Siswa: "Good morning!"`,
          bantuan     : [
            'Jika diam: dekatkan kartu, ucapkan "Good mor-..." menggantung.',
            'Jika benar: angkat jempol, lanjut ke siswa berikutnya.',
          ],
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pegang Kiki.
AKSI: Peragakan jawaban dengan Kiki.
UCAP: "I like good morning!"
AKSI: Turunkan Kiki.
UCAP: "Very good!"
UCAP: "Now tell me, which greeting do you like best?"
→ Siswa: menyebut satu salam favorit.`,
          bantuan     : [
            'Jika diam: tunjuk kartu satu per satu, siswa boleh menunjuk kartu.',
            'Jika menjawab dalam Bahasa Indonesia: tunjuk kartu, bantu siswa mengucapkannya dalam Bahasa Inggris.',
          ],
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pegang Kiki di tangan kiri.
AKSI: Pegang Momo di tangan kanan.
AKSI: Peragakan dialog perpisahan Kiki dan Momo.
UCAP: "Goodbye, everyone! See you next time!"
UCAP: "Goodbye! See you!"
🗣 TOGETHER
AKSI: Turunkan boneka.
AKSI: Lambaikan tangan ke semua siswa.
UCAP: "See you next time!"
UCAP: "Goodbye, everyone!"`,
          bantuan     : 'Jika diam: lambaikan tangan, ucapkan "Good-bye..." menggantung.',
          cue         : 'Demo boneka hanya sekali. Langsung pindah ke ucapan bersama setelah demo selesai.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Kumpulkan kartu waktu dan kartu salam.
AKSI: Kumpulkan kartu perpisahan.
AKSI: Simpan Kiki dan Momo di meja guru.
AKSI: Catat siswa yang diam sepanjang sesi.
AKSI: Catat siswa yang salah salam berulang.
AKSI: Catat siswa yang masih membutuhkan kartu terus-menerus.`,
          bantuan     : null,
          cue         : null,
          darurat     : null,
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_01;
