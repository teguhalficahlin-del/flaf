const TP_C08 = {

  // METADATA
  id             : 'tp-c08',
  nomor          : 8,
  kelas          : 5,
  nama           : 'Writing: My Typical Day',
  tema           : 'Dunia Sehari-hari',
  kluster        : 'B — Dunia Sehari-hari',
  jenis          : 'Panen',
  text_anchor    : null,
  connector_aktif: 'and · then · because · but — semua connector Kluster B tersedia untuk produksi bebas',
  recycle_fase_b : [
    'I usually... / first, then, after that (TP-06 Fase B)',
    'On [day] I... (TP-07 Fase B)',
    'I like... / I like... because... (TP-13 Fase B)',
    'Yesterday I... (TP-05 Fase B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat mengintegrasikan topik rutinitas, hobi, dan makanan dari TP05–07 ke dalam satu tulisan mandiri.',
    'Peserta didik dapat menggunakan minimal dua dari empat connector (and, then, because, but) dalam tulisan mandiri tanpa template.',
    'Peserta didik dapat memproduksi tulisan minimal tiga kalimat yang mencerminkan kehidupan nyata mereka sendiri.',
  ],
  vocab     : [],
  persiapan : [
    'Writing Plan Sheet satu per siswa, kertas kecil untuk planning dengan tiga baris My routine, My hobby, dan My food, dicetak atau ditulis siswa sendiri, di meja guru sebelum dibagikan, untuk Layar 4 dan Layar 6.',
    'Writing Paper satu lembar per siswa, kertas tulis bersih tanpa baris isian atau kolom, untuk Stage 1 di Layar 7 sampai Layar 8 dan dilanjutkan Stage 2 di Layar 9.',
    'Brief tiga baris di papan tulis, ditulis sebelum sesi dimulai: "Write about your week." pada baris pertama, "What you do. What you like. What you eat." pada baris kedua, "Use: and, then, because, but" pada baris ketiga. Tetap tampil dari Layar 2 sampai akhir sesi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka hari menulis.' },
    { layar:  1, judul: 'Pembuka · Reactivation Tulisan TP-07', tujuan: 'Guru mengaktifkan kembali pola because dan but dari TP-07.' },
    { layar:  2, judul: 'Pembuka · Brief Panen', tujuan: 'Guru menjelaskan target tulisan satu minggu.' },
    { layar:  3, judul: 'Inti · INPUT · Model Guru Lisan', tujuan: 'Guru memodelkan tulisan minggu secara lisan.' },
    { layar:  4, judul: 'Inti · Writing Plan', tujuan: 'Guru memandu siswa menyusun catatan tiga topik.' },
    { layar:  5, judul: 'Inti · Connector Activation', tujuan: 'Guru memancing connector lewat starter kalimat.' },
    { layar:  6, judul: 'Inti · INTERACT · Choice Gap Curiosity Exchange', tujuan: 'Guru memandu pertukaran plan dan pilihan pasangan.' },
    { layar:  7, judul: 'Inti · OUTPUT · Writing Stage 1 Rutinitas dan Hobi', tujuan: 'Guru memandu siswa menulis bagian rutinitas dan hobi.' },
    { layar:  8, judul: 'Inti · Check and Continue', tujuan: 'Guru memandu siswa membaca ulang tulisan Stage 1.' },
    { layar:  9, judul: 'Inti · Writing Stage 2 Makanan dan Connector', tujuan: 'Guru memandu siswa menambah bagian makanan.' },
    { layar: 10, judul: 'Inti · Polish dan Extend', tujuan: 'Guru memandu siswa menyambungkan dua bagian tulisan.' },
    { layar: 11, judul: 'Inti · Peer Review Read and Respond', tujuan: 'Guru memandu siswa bertukar pertanyaan tulisan.' },
    { layar: 12, judul: 'Penutup · Share Satu Kalimat', tujuan: 'Guru memandu siswa membagikan kalimat favorit.' },
    { layar: 13, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi sebagai panen yang selesai.' },
  ],

  // BREAKPOINTS
  breakpoints: [
    { id: 'bp-1', after_langkah_id: 'l8', resume_at: 'l9' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Tunggu sampai kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
AKSI: Tunggu respons semua siswa.
UCAP: "Today, we write."`,
    bantuan: 'Jika tidak ada respons: angkat tangan, tunggu siswa ikut menjawab.',
    cue    : 'Brief tiga baris sudah tertulis di papan tulis sebelum siswa masuk.',
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
UCAP: "Last time, you wrote about food. What you eat and why."
AKSI: Jeda 2 detik.
UCAP: "Who remembers one sentence from their writing? With because or but."
AKSI: Tunggu dua sampai tiga siswa menyebut kalimat dari tulisan TP-07 mereka.
UCAP: "Good. Today, we write about more than food."
UCAP: "Your whole week."`,
          bantuan     : 'Jika tidak ada yang merespons dalam 5 detik: ucapkan contoh "I eat rice because it gives me energy.", lalu tanya "Who has a sentence like this?".',
          cue         : 'Reactivation merujuk tulisan siswa sendiri dari TP-07 dan mengaktifkan pola because dan but.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk brief di papan tulis.
UCAP: "Look at the board. Three things."
AKSI: Tunjuk baris pertama brief di papan tulis.
AKSI: Tunjuk baris kedua brief di papan tulis.
AKSI: Tunjuk baris ketiga brief di papan tulis.
UCAP: "Write about your week, what you do, what you like, and what you eat because it matters to you."
AKSI: Jeda 1 detik.
UCAP: "Maybe you have a routine you like, but also one you don't."
AKSI: Jeda 1 detik.
UCAP: "This is your text. Your week is different from everyone else."`,
          bantuan     : 'Jika siswa bertanya berapa kalimat: ucapkan "At least three. More is better.".',
          cue         : 'Connector because dan but ada dalam kalimat instruksi guru, bukan model yang disalin. Jangan elaborasi lebih dari brief.',
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
UCAP: "Let me show you what I mean. My week."
UCAP: "On Monday I go to school early. I like Monday because the class is quiet."
UCAP: "But on Friday I feel tired. Then I go home and rest."
UCAP: "I eat rice for lunch because it gives me energy. But I also like noodles sometimes."
AKSI: Jeda 1 detik.
UCAP: "That is my week. Yours will be different."`,
          bantuan     : 'Jika siswa meminta model ditulis di papan tulis: ucapkan "That is mine. Yours will be different.", tetap jangan tulis di papan tulis.',
          cue         : 'Model guru diucapkan lisan, tidak ditulis di papan tulis agar siswa tidak menyalin. Tidak ada choral repeat atau drill di layar ini.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan Writing Plan Sheet, satu per siswa.
UCAP: "Before you write, make a plan."
UCAP: "Three things: your routine, your hobby, your food. Just notes, not sentences yet."
UCAP: "Two minutes. Go."
AKSI: Beri waktu dua menit untuk menulis catatan singkat.
AKSI: Pantau pengisian plan semua siswa, prioritaskan barisan belakang.`,
          bantuan     : 'Jika siswa tidak tahu apa yang ditulis di plan: ucapkan "What do you do on a school day? Just one word, that is your routine.", biarkan siswa menulis satu kata.',
          cue         : 'Writing Plan Sheet adalah catatan kerja siswa, tidak dikumpulkan. Plan ini dipakai lagi di Layar 6 dan saat menulis.',
          darurat     : 'Jika ada siswa masih kosong setelah dua menit → dekati, tunjuk baris "My routine", bantu isi satu kata.',
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Ucapkan "I like football" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Ucapkan "I eat rice every day" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Ucapkan "My routine is good" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Ucapkan "On Monday I go to school, then" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Ulangi dengan satu starter lagi secara cepat.`,
          bantuan     : 'Jika semua siswa tidak merespons starter pertama: ucapkan respons sendiri "because it is fun", lalu ulangi starter yang sama dan tunjuk siswa lain.',
          cue         : 'Layar ini FLEX — lewati jika kelas sudah dalam mode fokus sejak Layar 3 dan Layar 4.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Tunjukkan plan guru sendiri secara lisan.
UCAP: "My routine: school early. My hobby: reading. My food: rice."
AKSI: Tunjuk satu siswa.
UCAP: "Choose one. Which do you want to know more about?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "OK, I will write more about that. That section will be the longest."
UCAP: "Now, your turn. Share your plan. Let your partner choose."
AKSI: Minta siswa duduk berpasangan.
AKSI: Minta siswa A membacakan plan tiga hal ke siswa B.
AKSI: Minta siswa B memilih satu hal yang ingin diketahui lebih lanjut.
AKSI: Minta siswa A merespons "OK, I will write more about that.".
AKSI: Minta siswa bergantian peran.
AKSI: Beri waktu empat sampai lima menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa tidak bisa memilih dari plan pasangan: ucapkan "Pick one word. Which is most interesting?". Jika siswa A tidak tahu cara merespons: ucapkan contoh "OK, I will write more about that.", minta siswa mengulanginya.',
          cue         : 'Demo mencakup tiga langkah: bagikan plan, pasangan memilih, penulis merespons. Ketiganya hadir sebelum pair work.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → hentikan kelas, demo ulang tiga langkah dengan pasangan baru di depan, sederhanakan ke langkah memilih satu kata, lalu restart selama 60 detik.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan Writing Paper kosong, satu per siswa.
UCAP: "Now, write. Start with your routine and your hobby."
UCAP: "Use your plan. Use the board."
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan sampai sepuluh menit.
AKSI: Setelah menit ketiga, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Untuk siswa yang terlihat menyalin catatan TP-05 sampai TP-06, bisikkan "Why do you like that?", tunggu siswa menulis jawaban.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa memegang pensil tapi tidak menulis: bisikkan "What do you do on a school day? Write that first.", tunggu satu kalimat, lalu tinggalkan.',
          cue         : 'Writing Paper adalah kertas kosong tanpa template. Brief di papan tulis adalah satu-satunya scaffold.',
          darurat     : 'Jika waktu tersisa 5 menit atau kurang dan sebagian besar siswa baru menulis satu kalimat → ucapkan "Three sentences. That is Stage 1.", lalu lanjut ke Layar 8.',
          diferensiasi: null,
          blok        : 'OUTPUT',
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Setelah delapan sampai sepuluh menit, beri sinyal tanpa menghentikan seluruh kelas.
UCAP: "Read what you have. Does it sound like you?"
UCAP: "One more minute, then we pause."
AKSI: Beri waktu satu menit untuk membaca dan menyesuaikan tulisan.
AKSI: Pantau hasil tulisan semua siswa.`,
          bantuan     : null,
          cue         : 'Pertanyaan "Does it sound like you?" menilai makna tulisan, bukan kebenaran struktur.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l9',
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, add your food. What you eat, and why, or what you like, but also what you don't."
UCAP: "Add to your text. Don't start over."
AKSI: Beri waktu tujuh sampai delapan menit.
AKSI: Pantau penulisan semua siswa tanpa mengoreksi grammar.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa tidak tahu harus menambahkan apa setelah Stage 1: bisikkan "What do you eat every day? Write that.".',
          cue         : '"Add to your text. Don\'t start over." menjaga siswa tidak memulai dari awal.',
          darurat     : 'Jika ada siswa belum melanjutkan setelah dua menit → dekati, tunjuk tulisan Stage 1, bisikkan "What do you eat?", tunggu satu kalimat.',
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l10',
          tipe        : 'instruksi',
          teks        : `AKSI: Setelah tujuh menit, beri sinyal.
UCAP: "Two more minutes. Read everything. Can you add one sentence that connects two parts?"
AKSI: Pantau hasil tulisan semua siswa tanpa mengoreksi.`,
          bantuan     : null,
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit setelah Stage 2.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati dan tanyakan "What do you eat on weekends?", tunggu siswa menulis satu kalimat.',
            sudahBisa   : 'Minta tambah satu kalimat yang menyambungkan dua bagian, "I like playing football, but I always eat rice first because I need energy.".',
          },
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa menukar tulisan dengan pasangan.
UCAP: "Read your partner's text. Then write one question in the corner of the paper, something you want to know more about."
AKSI: Beri waktu dua menit untuk membaca dan menulis pertanyaan.
AKSI: Minta siswa mengembalikan tulisan ke pemiliknya.
UCAP: "Can you answer that question? Add one sentence if you can."
AKSI: Beri waktu satu sampai dua menit untuk menambah kalimat jawaban.`,
          bantuan     : 'Jika siswa tidak tahu pertanyaan apa yang ditulis: bisikkan "What part do you want to know more about?", arahkan ke satu bagian teks pasangan.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 8 menit. Siswa menulis pertanyaan, bukan koreksi.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,
      langkah: [

        {
          id          : 'l12',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau membacakan satu kalimat favorit dari tulisannya.
UCAP: "Who wants to share? One sentence, your best sentence. From your seat is fine."
AKSI: Tunjuk dua sampai tiga siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Did anyone use because today? Did anyone use but?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk siswa yang paling aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. "Your best sentence" memberi siswa pilihan.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l13',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today you wrote about your week."
AKSI: Jeda 2 detik.
UCAP: "Your routines. Your hobbies. Your food."
AKSI: Jeda 2 detik.
UCAP: "That is three topics. In one text. In English."
AKSI: Jeda 2 detik.
UCAP: "Keep it."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time, we go outside."
AKSI: Jeda 1 detik.
UCAP: "Places. Towns. What is around you."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : '"Keep it" adalah validasi panen. Penutup adalah nada selesai, bukan menyuruh.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C08;
