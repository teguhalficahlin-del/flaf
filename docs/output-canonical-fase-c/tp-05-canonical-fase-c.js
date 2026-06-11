const TP_C05 = {

  // METADATA
  id             : 'tp-c05',
  nomor          : 5,
  kelas          : 5,
  nama           : 'My Week: Routines and Plans',
  tema           : 'Dunia Sehari-hari',
  kluster        : 'B — Dunia Sehari-hari',
  jenis          : 'Biasa',
  text_anchor    : 'On Monday I go to school. Last Monday I went to school early.',
  connector_aktif: 'then — exposure only; fokus produksi di TP-14. Past tense exposure pertama lewat text-anchor dan satu kalimat model guru',
  recycle_fase_b : [
    'On [day] I... (TP-07 Fase B)',
    'I usually... / first, then, after that (TP-06 Fase B)',
    'Yesterday I... / Last week I... (TP-05 Fase B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat mendeskripsikan rutinitas mingguan dalam minimal tiga kalimat menggunakan pola On [day] I... / Then I...',
    'Peserta didik dapat menggunakan connector then untuk menghubungkan dua kegiatan berurutan (exposure).',
    'Peserta didik dapat menggali informasi rutinitas pasangan melalui pertanyaan lisan dan menuliskannya di My Week Comparison Table.',
  ],
  vocab     : ['go to school', 'help', 'cook', 'play', 'study', 'wake up', 'early', 'late'],
  persiapan : [
    'My Routine Card satu per siswa, berisi dua bagian "This week: On ___ I ___. Then I ___." dan "Last week: Last ___ I ___.", dicetak sebelum kelas dimulai, di meja guru sebelum dibagikan, untuk Layar 4. Pada awal Layar 6 kartu ini diletakkan tertutup menghadap bawah di meja siswa.',
    'My Week Comparison Table satu per siswa, tabel dua kolom My Week dan My Partner\'s Week dengan dua baris This week dan Last week, kolom My Partner\'s Week kosong, dicetak sebelum kelas dimulai, dibagikan tepat sebelum Layar 6.',
    'Text-anchor "On Monday I go to school. Last Monday I went to school early." ditulis di papan tulis sebelum siswa masuk, tetap tampil dari Layar 2 sampai akhir Layar 7, dihapus atau ditutup sebelum Layar 8.',
    'Papan tulis dan spidol untuk menulis baris isian, daftar kata kerja, dan jawaban demo tabel di Layar 4 dan Layar 6.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Tulisan TP-04', tujuan: 'Guru mengaktifkan kembali kalimat dari tulisan This Is Me.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Text-Anchor', tujuan: 'Guru memperkenalkan kontras rutinitas dan minggu lalu.' },
    { layar:  3, judul: 'Inti · INPUT · Model Guru', tujuan: 'Guru memodelkan rutinitas dan memajankan connector then.' },
    { layar:  4, judul: 'Inti · My Routine Card', tujuan: 'Guru memandu siswa mengisi kartu rutinitas sendiri.' },
    { layar:  5, judul: 'Inti · Drill Cepat What Do You Do on Monday', tujuan: 'Guru melatih pola On day I dan Then I.' },
    { layar:  6, judul: 'Inti · INTERACT · My Week Comparison Table Exchange', tujuan: 'Guru memandu siswa mengisi tabel pasangan lewat bertanya.' },
    { layar:  7, judul: 'Inti · Mini-Share Sama atau Berbeda', tujuan: 'Guru memandu siswa membandingkan minggu mereka.' },
    { layar:  8, judul: 'Inti · OUTPUT · Write My Week', tujuan: 'Guru memandu siswa menulis rutinitas sendiri.' },
    { layar:  9, judul: 'Inti · Check and Extend', tujuan: 'Guru memandu siswa memeriksa dan menambah kalimat.' },
    { layar: 10, judul: 'Penutup · Sharing ke Kelas', tujuan: 'Guru memandu siswa membagikan tulisan ke semua siswa.' },
    { layar: 11, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-06.' },
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
UCAP: "Today we talk about your week."`,
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
UCAP: "Last time you wrote about yourself, everything together."
AKSI: Jeda 2 detik.
UCAP: "Who remembers one sentence from that writing?"
AKSI: Tunggu dua sampai tiga siswa menyebut kalimat dari tulisan This Is Me mereka.
UCAP: "Good. Today, not what you are. What you do."
AKSI: Jeda 1 detik.
UCAP: "Your week. What happens every day. What happened last week."`,
          bantuan     : 'Jika tidak ada yang merespons dalam 5 detik: ucapkan satu contoh kalimat profil, lalu tanya "Who wrote something like this?".',
          cue         : 'Reactivation mengaktifkan kalimat milik siswa sendiri dari tulisan TP-04.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk text-anchor di papan tulis.
UCAP: "Look at the board. Two sentences about one week."
👂 LISTEN FIRST
AKSI: Baca text-anchor perlahan sambil menunjuk tiap baris.
UCAP: "On Monday I go to school."
UCAP: "Last Monday I went to school early."
UCAP: "Two sentences. Same day, Monday. But different time."
AKSI: Tunjuk baris pertama di papan tulis.
UCAP: "This one, every week. Every Monday."
AKSI: Tunjuk baris kedua di papan tulis.
UCAP: "This one, last week. One Monday that already happened."`,
          bantuan     : 'Jika siswa bingung dengan kalimat kedua: ucapkan "Last Monday, it already happened. It is finished.".',
          cue         : 'Perbedaan ditunjukkan sebagai perbedaan waktu, bukan bentuk kata kerja. Jangan sebut "past tense".',
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
UCAP: "Now, my turn. This is my week."
UCAP: "On Monday I go to school."
UCAP: "Then I correct student work at home."
UCAP: "On Saturday I go to the market."
UCAP: "Then I cook for my family."
AKSI: Jeda 1 detik.
UCAP: "Last Monday I helped my mother cook dinner."
AKSI: Tunjuk text-anchor di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa membaca text-anchor bersama.
UCAP: "Read with me. Ready?"
UCAP: "Say it with me!"
AKSI: Tunggu semua siswa membaca text-anchor bersama.`,
          bantuan     : 'Jika siswa tidak ikut membaca bersama: tunjuk baris demi baris di papan tulis sambil membaca.',
          cue         : 'Connector "then" muncul natural di model guru, exposure only. Kalimat past tense diucapkan sekali tanpa ditunjuk atau diulang.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan My Routine Card, satu per siswa.
AKSI: Tulis baris isian di papan tulis di bawah text-anchor: "This week: On ___ I ___. Then I ___. Last week: Last ___ I ___.".
AKSI: Tulis daftar kata kerja di pojok papan tulis: "go to school, help at home, play, study, cook, sleep early".
UCAP: "Think about your week. Choose one day."
UCAP: "What do you do on that day? Then what?"
UCAP: "And one thing from last week, something that happened."
UCAP: "Three minutes. Go."
AKSI: Beri waktu tiga menit untuk berpikir dan menulis.
AKSI: Tunjuk dua sampai tiga siswa secara acak.
UCAP: "Read one sentence. What do you do on your day?"
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika siswa tidak tahu hari apa yang ingin ditulis: ucapkan "Monday, Tuesday, Wednesday, pick one. Any day.". Jika siswa tidak tahu kata kerja: tunjuk daftar di pojok papan tulis, biarkan siswa memilih.',
          cue         : 'Setiap siswa mengisi minimal bagian This week sebelum Layar 6. Kartu ini dipakai lagi di blok INTERACT.',
          darurat     : 'Jika ada siswa belum mengisi apa pun setelah tiga menit → dekati, tunjuk baris "On ___ I ___", bantu isi satu kata di baris pertama.',
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau berdiri.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "What do you do on Monday? One sentence."
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Then what?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi dengan tiga sampai empat siswa dari barisan berbeda secara cepat.
UCAP: "Who does the same thing on Monday? Raise your hand."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa yang berdiri berhenti setelah kalimat pertama: tanyakan "Then what?" sambil angguk.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 10 menit sebelum blok INTERACT.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan My Week Comparison Table, satu per siswa, kolom My Partner's Week kosong.
UCAP: "Fill in your column first. My Week. Use your card."
AKSI: Beri waktu satu menit untuk mengisi kolom My Week.
UCAP: "Your partner's column is empty. You need to ask."
👂 LISTEN FIRST
AKSI: Peragakan tanya jawab dengan satu siswa di depan.
UCAP: "What do you do this week? Pick one day."
AKSI: Tunggu jawaban siswa.
AKSI: Tulis jawaban di baris This week pada kolom My Partner di tabel contoh.
UCAP: "And last week, what happened?"
AKSI: Tunggu jawaban siswa.
UCAP: "Now your turn."
AKSI: Minta siswa duduk berpasangan.
AKSI: Minta siswa meletakkan My Routine Card tertutup menghadap bawah di meja.
AKSI: Minta siswa A bertanya ke siswa B.
AKSI: Minta siswa A mengisi kolom My Partner's Week berdasarkan jawaban siswa B.
AKSI: Minta siswa B bertanya ke siswa A.
AKSI: Minta siswa B mengisi kolom My Partner's Week berdasarkan jawaban siswa A.
UCAP: "Is your week similar or different?"
AKSI: Beri waktu lima sampai enam menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang dan pojok kelas.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika pasangan tidak tahu harus bertanya apa: tunjuk baris "This week", ucapkan "What do you do this week?", tunggu siswa meniru. Jika siswa mengisi kolom My Partner tanpa bertanya: tutup tabel dengan tangan, ucapkan "Ask first. Then write.".',
          cue         : 'Kolom My Week terisi sebelum pair work dimulai. Kolom My Partner\'s Week dibagikan dalam keadaan kosong.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, demo ulang dengan guru sebagai pasangan, sederhanakan ke dua pertanyaan, lalu restart selama 60 detik.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk dua sampai tiga pasangan.
UCAP: "Is your week similar to your partner's? Or different?"
AKSI: Tunggu jawaban tiap pasangan yang ditunjuk.
UCAP: "Interesting. Did anyone do something unusual last week?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa tidak bisa menjawab: tunjuk tabel mereka, ucapkan "Look. This week, same or different?", minta bandingkan satu baris dulu.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 12 menit. Bentuk past tense yang tidak sempurna diterima tanpa koreksi.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Hapus atau tutup text-anchor dari papan tulis.
UCAP: "Now, write about your week."
UCAP: "Not the example from the board. Your week."
UCAP: "At least three sentences. You can use your Routine Card to start."
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan sampai sepuluh menit.
AKSI: Setelah menit kedua, pantau penulisan semua siswa, prioritaskan barisan belakang dan pojok kelas.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa memegang pensil tapi tidak menulis: ucapkan "What day do you go to school? Write: On Monday I go to school.", tunggu siswa menulis satu kalimat, lalu tinggalkan.',
          cue         : 'Text-anchor sudah diturunkan sebelum layar ini. Tiap tulisan berbeda karena tiap siswa punya rutinitas yang berbeda.',
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
          bantuan     : 'Jika siswa selesai tapi hanya menulis dua kalimat: tanyakan "What do you do after school? Can you write: Then I...?", tunggu siswa menulis kalimat tambahan sendiri.',
          cue         : 'Yang diperiksa adalah apakah tulisan mencerminkan minggu nyata siswa, bukan kelengkapan grammar.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati dan ucapkan panduan konkret, "You wrote about Monday. What about another day?".',
            sudahBisa   : 'Minta tambah kalimat dengan then atau satu kalimat tentang minggu lalu, "On Monday I go to school. Then I study at home.".',
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
UCAP: "Who also does that on the same day? Raise your hand."
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk siswa yang paling aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Pertanyaan "who also does that..." inklusif dan tidak memaksa.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today you talked about your week. In English."
AKSI: Jeda 2 detik.
UCAP: "What you do every day. What happened last week."
AKSI: Jeda 2 detik.
UCAP: "That is your routine. Keep it."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time, not just what you do."
AKSI: Jeda 1 detik.
UCAP: "Why you do it."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : 'Pratinjau "Why you do it" adalah undangan ke TP-06, bukan penugasan.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C05;
