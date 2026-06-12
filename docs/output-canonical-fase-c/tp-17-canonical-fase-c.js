const TP_C17 = {

  // METADATA
  id             : 'tp-c17',
  nomor          : 17,
  kelas          : 6,
  nama           : 'Giving My Opinion',
  tema           : 'Memproduksi untuk Orang Lain',
  kluster        : 'E — Memproduksi untuk Orang Lain',
  jenis          : 'Biasa',
  text_anchor    : 'I think football is fun because it is good for our health. But I also like reading.',
  connector_aktif: 'because (fokus produksi, kembali aktif setelah TP-07) · but (fokus produksi, kembali aktif setelah TP-07) · so (fokus produksi pertama kali — exposure sejak TP-10); because dan but ada di text-anchor; so ditanam di model guru',
  recycle_fase_b : [
    'I like... (TP-13 Fase B)',
    'I like... because... (TP-06/07 Fase C)',
    'I can... (TP-16 Fase B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat mengungkapkan pendapat tentang satu topik dalam minimal tiga kalimat menggunakan pola I think... because... / But... / So...',
    'Peserta didik dapat menggunakan connector because dan but (fokus produksi kembali aktif) serta so (fokus produksi pertama kali).',
    'Peserta didik dapat merespons pendapat pasangan dengan agree/disagree + alasan menggunakan connector.',
  ],
  vocab     : ['opinion', 'think', 'agree', 'disagree', 'prefer', 'because', 'interesting', 'boring'],
  persiapan : [
    'Text-anchor "I think football is fun because it is good for our health. But I also like reading." ditulis di papan tulis sebelum siswa masuk, tetap tampil selama sesi.',
    'Empat topik ditulis di pojok papan tulis sebelum Layar 5, tetap tampil sampai Layar 10: "Football · Reading · Cooking · Swimming".',
    'Papan tulis dan spidol untuk text-anchor dan empat kata topik. Tidak perlu media cetak atau kartu.',
  ],
  media     : [],
  printables: [
    { file: 'tp-c17-agree.png', label: 'Agree' },
    { file: 'tp-c17-disagree.png', label: 'Disagree' },
    { file: 'tp-c17-interesting.png', label: 'Interesting' },
    { file: 'tp-c17-boring.png', label: 'Boring' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Tulisan TP-16', tujuan: 'Guru mengaktifkan pola I think because dari tulisan TP-16.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Text-anchor', tujuan: 'Guru memperkenalkan opini dan memvalidasi perbedaan pendapat.' },
    { layar:  3, judul: 'Inti · INPUT · Model Opini Tiga Connector', tujuan: 'Guru memodelkan because, but, dan so dalam aksi.' },
    { layar:  4, judul: 'Inti · Drill Cepat Agree or Disagree', tujuan: 'Guru melatih respons setuju dan tidak setuju.' },
    { layar:  5, judul: 'Inti · Siswa Tulis Satu Kalimat Opini', tujuan: 'Guru memandu siswa menulis satu opini dengan because.' },
    { layar:  6, judul: 'Inti · INTERACT · Opinion Gap Pair Sharing', tujuan: 'Guru memandu siswa berbagi dan merespons opini.' },
    { layar:  7, judul: 'Inti · Kelas Dua Opini Berbagi', tujuan: 'Guru memandu dua siswa berbagi opini ke semua siswa.' },
    { layar:  8, judul: 'Inti · OUTPUT · Individual Writing Opini Tertulis', tujuan: 'Guru memandu siswa menulis opini lebih panjang.' },
    { layar:  9, judul: 'Inti · Revisi dan Connector Check', tujuan: 'Guru memandu siswa memeriksa connector dan menambah kalimat.' },
    { layar: 10, judul: 'Penutup · Share Satu Kalimat', tujuan: 'Guru memandu siswa membagikan satu opini ke semua siswa.' },
    { layar: 11, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-18.' },
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
UCAP: "Today, your opinion."
AKSI: Tunjuk text-anchor di papan tulis.`,
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
          teks        : `AKSI: Berdiri di depan kelas tanpa menunjukkan teks baru.
UCAP: "Last time, you responded to a text."
AKSI: Jeda 2 detik.
UCAP: "Who remembers one sentence from their response?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk satu siswa.
AKSI: Tunggu satu siswa menyebut kalimat dari tulisan TP-16 mereka.
AKSI: Angguk dan terima.
UCAP: "Today, not responding to someone else's text."
AKSI: Jeda 1 detik.
UCAP: "Your own opinion."
AKSI: Tunjuk text-anchor di papan tulis.`,
          bantuan     : 'Jika tidak ada yang merespons dalam 20 detik: ucapkan "Last time you wrote, I think, or I choose. Who remembers one word after because?", tunggu satu kata, lalu lanjut.',
          cue         : 'Reactivation di layar ini berasal dari tulisan siswa sendiri di TP-16, bukan dari text-anchor baru. Satu kalimat dari siswa cukup.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk text-anchor di papan tulis.
UCAP: "Listen. This is an opinion."
👂 LISTEN FIRST
AKSI: Baca text-anchor perlahan sambil menunjuk tiap kata kunci.
UCAP: "I think football is fun because it is good for our health."
UCAP: "But I also like reading."
UCAP: "What do I think about football?"
AKSI: Tunggu siswa menjawab dari teks.
AKSI: Angguk.
UCAP: "What else do I like?"
AKSI: Tunggu siswa menjawab dari teks.
AKSI: Angguk.
UCAP: "This is my opinion. My thoughts. My choice."
AKSI: Jeda 1 detik.
UCAP: "Not everyone agrees. Some of you may think football is boring."
AKSI: Jeda 2 detik.
UCAP: "That is also an opinion."`,
          bantuan     : 'Jika siswa tidak merespons pertanyaan tentang football: tunjuk kata "fun" di text-anchor, ucapkan "Fun, I think it is?", tunggu siswa melanjutkan.',
          cue         : '"Not everyone agrees." memvalidasi opini yang berbeda dari text-anchor dan menyiapkan siswa bahwa disagreement di INTERACT adalah normal.',
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
          teks        : `AKSI: Tunjuk kata "because" lalu kata "but" di text-anchor.
UCAP: "Look. Because. But."
UCAP: "One more."
AKSI: Beri satu kalimat baru tanpa menuliskannya di papan tulis.
UCAP: "I don't like running in hot weather, so I prefer swimming."
AKSI: Jeda 1 detik.
UCAP: "Because, why. But, something different. So, the result."
AKSI: Tunjuk text-anchor saat menyebut because dan but.
AKSI: Tunjuk ke udara saat menyebut so.
UCAP: "What do you think? About anything. One sentence."
AKSI: Tunjuk dua sampai tiga siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Angguk setiap respons.`,
          bantuan     : 'Jika siswa tidak bisa mengucapkan satu kalimat saat ditanya: ucapkan "I like, then a topic?", tunggu satu kata respons, lalu lanjut.',
          cue         : 'Tiga connector, tiga fungsi, tiga kalimat. Noticing so hanya jika momen natural muncul. Stop setelah tiga kalimat.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `UCAP: "Fast. I say an opinion. You say, agree or disagree."
UCAP: "Football is the best sport."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk satu siswa yang terlihat tidak setuju.
UCAP: "Why?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Spicy food is delicious."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk satu siswa yang merespons paling antusias.
UCAP: "Why?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Reading is boring."
AKSI: Tunggu respons semua siswa.
UCAP: "Good. You have opinions. Now, write one."`,
          bantuan     : 'Jika semua siswa diam: ucapkan opini sendiri lalu jawab sendiri "I agree.", lalu ulangi satu opini dan tunjuk satu siswa.',
          cue         : 'Layar ini FLEX — lewati jika kelas sudah spontan memproduksi opini dengan connector di Layar 3. Disagree adalah respons yang diinginkan.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Tulis empat topik di pojok papan tulis jika belum ada: "Football · Reading · Cooking · Swimming".
UCAP: "Choose one topic."
AKSI: Tunjuk pojok papan tulis.
UCAP: "Write one sentence. Your opinion. Use because."
UCAP: "Don't talk yet."
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu dua sampai tiga menit.
AKSI: Diam tanpa berkeliling dulu.`,
          bantuan     : 'Jika siswa tidak bisa menulis satu kalimat: ucapkan "Write, I think, then a topic, then is, then one word.", satu kata dulu, kalimat lengkap dibentuk di Layar 8.',
          cue         : '"Don\'t talk yet." membuat siswa berkomitmen sendiri sebelum mendengar opini pasangan. Topik di luar daftar papan diperbolehkan.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk berpasangan, satu siswa A dengan satu siswa B.
👂 LISTEN FIRST
AKSI: Bicara ke satu siswa di depan.
UCAP: "I think swimming is fun because I like water."
UCAP: "What do you think about swimming?"
AKSI: Tunggu siswa menjawab dari perspektif sendiri.
UCAP: "Do you agree with me?"
AKSI: Tunggu siswa menjawab agree atau disagree.
UCAP: "Good. Now say why. Because, but, or so."
AKSI: Tunggu siswa mencoba satu kalimat respons.
UCAP: "That is opinion gap. Now, with your partner."
AKSI: Minta siswa A membacakan kalimat opini ke siswa B.
AKSI: Minta siswa B merespons dengan agree atau disagree dan satu alasan menggunakan connector.
AKSI: Minta siswa bergantian peran.
AKSI: Beri waktu lima sampai enam menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa B tidak tahu cara merespons: ucapkan "Say, I agree because, or But I think.", tunggu siswa memilih satu dan melanjutkan.',
          cue         : 'Opini siswa A ditulis sendiri sebelum siswa B mendengarnya. Untuk pasangan yang selalu setuju: ucapkan "Disagree a little? Why?".',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, demo ulang dengan guru sebagai siswa B, sederhanakan ke "Just say agree or disagree. One word. Then why, one word.", lalu restart selama 60 detik per arah.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau berbagi opininya.
AKSI: Tunjuk dua siswa yang mengangkat tangan.
UCAP: "Your opinion, one sentence."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Agree or disagree?"
AKSI: Tunggu respons spontan semua siswa setiap kali.
UCAP: "Good opinions. Now, write."`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk satu sampai dua siswa yang tadi aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 18 menit sebelum akhir sesi.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Biarkan text-anchor dan empat topik tetap tampil di papan tulis.
UCAP: "Now, write your opinion. More sentences."
UCAP: "Start from your sentence. Add more."
UCAP: "Use because. Use but. Try to use so."
UCAP: "Three sentences minimum. Your opinion."
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan menit.
AKSI: Setelah menit ketiga, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Untuk siswa yang menyalin text-anchor verbatim, catat nama untuk Layar 9 tanpa menginterupsi alur menulis.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa freeze: tunjuk kalimat yang mereka tulis di Layar 5, ucapkan "Start from this sentence. Write it again. Then add one more.", tunggu satu kalimat, lalu tinggalkan.',
          cue         : 'Circulate dimulai setelah tiga menit, barisan belakang diprioritaskan. Topik di luar daftar papan tetap valid.',
          darurat     : 'Jika waktu tersisa 5 menit atau kurang dan sebagian besar siswa baru menulis satu kalimat → ucapkan "Two sentences, enough. One opinion with because. That is done.", turunkan target tanpa menghentikan writing.',
          diferensiasi: null,
          blok        : 'OUTPUT',
        },

        {
          id          : 'l9',
          tipe        : 'instruksi',
          teks        : `AKSI: Beri sinyal untuk berhenti menulis.
UCAP: "Two more minutes. Read your opinion."
AKSI: Beri waktu siswa membaca tulisannya sendiri.
UCAP: "Did you use because? Did you use but?"
UCAP: "Can you add so? The result of your opinion."
UCAP: "If you have three sentences, add one more."
UCAP: "If you have fewer, finish one more sentence first."
AKSI: Untuk siswa yang menyalin text-anchor di Layar 8, dekati, bisikkan "Is this your opinion? Change one thing, your own words.".
AKSI: Pantau hasil tulisan semua siswa, prioritaskan barisan tengah yang belum tersentuh di Layar 8.`,
          bantuan     : 'Jika siswa tidak bisa menambah so: jangan paksa, because dan but sudah cukup untuk TP-17.',
          cue         : 'so adalah connector yang pertama kali jadi fokus produksi di TP-17. so adalah bonus, bukan kewajiban di sesi ini.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Tunjuk kalimat opini tanpa connector, ucapkan "Why? Add, because.", tunggu siswa melanjutkan dengan satu alasan personal.',
            sudahBisa   : 'Bisikkan "Add one more, use so. I don\'t like something, so I prefer something.".',
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
          teks        : `AKSI: Tanyakan siapa yang mau membacakan satu kalimat dari opininya.
AKSI: Tunjuk dua sampai tiga siswa yang mengangkat tangan.
UCAP: "One sentence from your opinion. From your seat."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Agree or disagree?"
AKSI: Tunggu respons spontan semua siswa setiap kali.`,
          bantuan     : 'Jika tidak ada yang mau: panggil nama satu sampai dua siswa yang tadi aktif di blok INTERACT, ucapkan "Can you share your opinion? One sentence.".',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Tidak ada evaluasi dari guru.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today, you said what you think."
AKSI: Jeda 1 detik.
UCAP: "In English."
AKSI: Jeda 1 detik.
UCAP: "You used because, to explain."
AKSI: Jeda 1 detik.
UCAP: "You used but, to say something different."
AKSI: Jeda 1 detik.
UCAP: "Some of you used so, the result."
AKSI: Jeda 1 detik.
UCAP: "That is giving your opinion. Keep what you wrote."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time, not what you think."
AKSI: Jeda 1 detik.
UCAP: "What happened. Something you remember."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : '"Not what you think. What happened. Something you remember." membuka narasi pengalaman tanpa menyebut grammar.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C17;
