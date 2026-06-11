const TP_C13 = {

  // METADATA
  id             : 'tp-c13',
  nomor          : 13,
  kelas          : 6,
  nama           : 'Reading an Announcement',
  tema           : 'Membaca Dunia',
  kluster        : 'D — Membaca Dunia',
  jenis          : 'Biasa',
  text_anchor    : '(visual poster) + "School Book Fair is on Thursday, 20 March. It is in the school hall from 8.00 to 12.00. All students can come. Please bring money if you want to buy a book."',
  connector_aktif: '— (tidak ada connector baru; tidak didorong; `if` dalam text-anchor adalah bagian fungsional teks, bukan target pembelajaran)',
  recycle_fase_b : [
    '[event] is on [day] — adaptasi On [day] I... (TP-07 Fase B)',
    'All students can come (TP-16 Fase B)',
    'I like... because... (TP-13 Fase B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat mengekstrak lima jenis informasi dari teks pengumuman: event, kapan, di mana, waktu, dan apa yang harus dibawa.',
    'Peserta didik dapat membuat keputusan tentang informasi mana yang paling penting dari teks dan menjelaskan alasannya.',
    'Peserta didik dapat menulis respons terhadap teks pengumuman menggunakan kalimat sendiri, termasuk rencana atau pendapat personal.',
  ],
  vocab     : ['announcement', 'event', 'hall', 'bring', 'fair', 'Thursday', 'money'],
  persiapan : [
    'Teks pengumuman berupa visual poster berjudul "SCHOOL BOOK FAIR" dengan border, disertai teks di bawahnya: "School Book Fair is on Thursday, 20 March. It is in the school hall from 8.00 to 12.00. All students can come. Please bring money if you want to buy a book." Tanggal, waktu, dan tempat ditulis lebih tebal jika memungkinkan. Ditulis atau ditempel di papan tulis sebelum siswa masuk, tetap tampil sepanjang sesi termasuk saat OUTPUT.',
    'Choice Sheet satu per siswa, secarik kertas kecil atau sticky note kosong. Dibagikan pada awal Layar 6, siswa menulis satu informasi paling penting sebelum berbagi ke pasangan.',
    'Lima label kategori untuk Layar 3: event, when, where, time, what to bring. Ditulis sebagai label singkat di samping teks pengumuman di papan tulis.',
    'Papan tulis dan spidol untuk menulis label kategori dan pilihan demo di Layar 3 dan Layar 6.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Bridge Membaca', tujuan: 'Guru menjembatani membaca menu TP-12 ke membaca pengumuman.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Visual dan Text-anchor', tujuan: 'Guru memperkenalkan poster dan dua fungsi pengumuman.' },
    { layar:  3, judul: 'Inti · INPUT · Ekstraksi Informasi Lima Kategori', tujuan: 'Guru memandu siswa menemukan lima kategori informasi.' },
    { layar:  4, judul: 'Inti · Guided Reading Tanya-Jawab dari Teks', tujuan: 'Guru memandu siswa menjawab dengan membaca teks.' },
    { layar:  5, judul: 'Inti · Drill Membaca What Does It Tell You', tujuan: 'Guru melatih pertanyaan interpretasi dari teks.' },
    { layar:  6, judul: 'Inti · INTERACT · Choice Gap Informasi Paling Penting', tujuan: 'Guru memandu siswa memilih dan berbagi pilihan lewat Choice Sheet.' },
    { layar:  7, judul: 'Inti · Mini-Share Pilihan Sama atau Berbeda', tujuan: 'Guru memandu siswa membandingkan distribusi pilihan.' },
    { layar:  8, judul: 'Inti · OUTPUT · Write What Does This Announcement Say', tujuan: 'Guru memandu siswa menulis respons dengan kalimat sendiri.' },
    { layar:  9, judul: 'Inti · Check and Extend', tujuan: 'Guru memandu siswa memeriksa informasi utama dan menambah kalimat.' },
    { layar: 10, judul: 'Penutup · Sharing Respons', tujuan: 'Guru memandu siswa membagikan respons ke semua siswa.' },
    { layar: 11, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-14.' },
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
UCAP: "Today, we read an announcement."`,
    bantuan: 'Jika tidak ada respons: angkat tangan, tunggu siswa ikut menjawab.',
    cue    : 'Visual poster pengumuman sudah tampil di papan tulis sebelum siswa masuk.',
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
UCAP: "Last time you read a menu."
AKSI: Jeda 2 detik.
UCAP: "One sentence. Who remembers from the menu?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk satu siswa.
AKSI: Tunggu satu siswa menyebut kalimat dari TP-12 mereka.
AKSI: Angguk dan terima.
UCAP: "Good. Today, we read something different."
UCAP: "An announcement. We look for different things."`,
          bantuan     : 'Jika tidak ada yang merespons dalam 20 detik: ucapkan contoh "It costs Rp 15.000.", lalu lanjut ke Layar 2.',
          cue         : 'Reactivation di layar ini berasal dari tulisan siswa sendiri di TP-12, bukan dari text-anchor baru. Satu respons cukup.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk visual poster di papan tulis tanpa langsung membacakannya.
UCAP: "Look at the board. What can you see?"
AKSI: Beri waktu 15 detik untuk siswa melihat.
AKSI: Terima satu sampai dua respons spontan.
👂 LISTEN FIRST
AKSI: Baca text-anchor perlahan sambil menunjuk tiap kalimat.
UCAP: "School Book Fair is on Thursday, 20 March."
UCAP: "It is in the school hall from 8.00 to 12.00."
UCAP: "All students can come."
UCAP: "Please bring money if you want to buy a book."
UCAP: "This is an announcement. It gives information."
UCAP: "And it tells you what to do."`,
          bantuan     : 'Jika siswa bertanya tentang "if you want to buy a book": ucapkan "It means, for students who want to buy.", tidak ada penjelasan lebih panjang.',
          cue         : 'Dua fungsi pengumuman, memberi informasi dan menyuruh melakukan sesuatu, disebut sebelum siswa mengekstrak informasi. `if` tidak dijelaskan sebagai grammar.',
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
          teks        : `AKSI: Tunjuk teks pengumuman di papan tulis.
UCAP: "Let's find the information. I ask, you find the answer in the text."
UCAP: "What is the event?"
AKSI: Tunjuk kalimat 1.
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "When?"
AKSI: Tunjuk kalimat 1.
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "Where?"
AKSI: Tunjuk kalimat 2.
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "What time?"
AKSI: Tunjuk kalimat 2.
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "What to bring?"
AKSI: Tunjuk kalimat 4.
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "Five things. Event, when, where, time, what to bring."
AKSI: Tulis lima label singkat di samping teks pengumuman di papan tulis: "event, when, where, time, what to bring.".`,
          bantuan     : 'Jika siswa menjawab dalam Bahasa Indonesia: terima dan angguk, lanjutkan ke kategori berikutnya.',
          cue         : 'Lima kategori ditulis sebagai label singkat saja, bukan kalimat. Tujuannya menemukan informasi, bukan memproduksi kalimat sempurna.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk teks pengumuman di papan tulis.
UCAP: "I ask again. Find the answer. Read the text."
UCAP: "When is the Book Fair?"
AKSI: Tunggu siswa membaca dan menjawab dari teks.
UCAP: "What time does it start?"
AKSI: Tunggu siswa membaca dan menjawab dari teks.
UCAP: "Can all students come?"
AKSI: Tunggu siswa membaca dan menjawab dari teks.
UCAP: "What do you need if you want to buy a book?"
AKSI: Tunggu siswa membaca dan menjawab dari teks.
AKSI: Tunjuk dua sampai tiga siswa secara individual untuk menjawab pertanyaan yang sama.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika siswa menjawab tanpa melihat teks: ucapkan "Show me where in the text.", tunggu siswa menemukan jawabannya sendiri.',
          cue         : '"Find the answer, read the text." diucapkan setiap kali. Siswa membaca untuk informasi spesifik, bukan menebak atau mengingat.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk teks pengumuman di papan tulis.
UCAP: "This announcement tells you to do something. What is it?"
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "If you forget to bring money, can you still come?"
AKSI: Tunggu siswa membaca dan menjawab dari teks.
UCAP: "Who is this announcement for?"
AKSI: Tunggu siswa menjawab dari teks.
AKSI: Ulangi satu pertanyaan interpretasi lagi secara cepat, siswa selalu merujuk ke teks.`,
          bantuan     : 'Jika siswa tidak bisa menjawab pertanyaan interpretasi: turunkan ke pertanyaan faktual "What does the announcement say about money?", lalu naikkan kembali "So what should you do?".',
          cue         : 'Layar ini FLEX — lewati jika kelas sudah menjawab dengan lancar di Layar 4. Siswa perlu mengerti fungsi tiap informasi, bukan hanya isinya.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan Choice Sheet, satu per siswa.
UCAP: "Look at the announcement again. Five pieces of information."
UCAP: "Which one is the most important for a student? Choose."
UCAP: "Write your choice first, before you talk."
👂 LISTEN FIRST
AKSI: Tulis pilihan sendiri di kertas demo: "date".
UCAP: "I choose the date. For me, if I don't know when, I might miss it."
AKSI: Tunjuk tulisan demo ke satu siswa.
UCAP: "What did you choose?"
AKSI: Tunggu siswa menjawab dari Choice Sheet mereka.
UCAP: "Do you agree with my reason? Or do you have a different reason?"
AKSI: Tunggu siswa merespons.
UCAP: "Now, do the same with your partner."
AKSI: Minta siswa duduk berpasangan.
AKSI: Minta siswa menulis pilihan di Choice Sheet.
AKSI: Minta siswa menunjukkan Choice Sheet ke pasangan.
AKSI: Minta siswa menjelaskan pilihan dan satu alasan singkat.
AKSI: Minta pasangan merespons dengan posisi sendiri.
UCAP: "Is there information you both agree is most important?"
AKSI: Beri waktu lima sampai enam menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa langsung setuju dengan pasangan tanpa membaca Choice Sheet sendiri: tunjuk kertas mereka, ucapkan "What did you write? Read it first.", pastikan siswa menyampaikan pilihan sendiri dulu.',
          cue         : 'Urutan wajib, tulis pilihan dulu baru berbagi. Choice Sheet mengunci komitmen pilihan sebelum pair work dimulai.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, tunjukkan Choice Sheet tertulis dan ucapkan pilihan plus alasan singkat, sederhanakan ke "Just tell your partner what you wrote.", lalu restart selama 60 detik.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `UCAP: "Who chose the same thing as their partner? Raise your hand."
AKSI: Tunggu respons semua siswa.
UCAP: "Who chose something different?"
AKSI: Tunggu respons semua siswa.
UCAP: "Who chose the date? The time? The place? What to bring?"
AKSI: Tunggu respons semua siswa per kategori.`,
          bantuan     : 'Jika tidak ada yang mau mengangkat tangan: tunjuk dua pasangan secara langsung, ucapkan "What did you choose?", cukup satu jawaban per pasangan.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 12 menit. Tidak ada jawaban benar tunggal, teks yang sama bisa dibaca dengan prioritas berbeda.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Biarkan teks pengumuman tetap tampil di papan tulis.
UCAP: "Now, write in your own sentences. What is this announcement about?"
UCAP: "And then, will you go? What will you do?"
UCAP: "Three questions to answer in your writing."
UCAP: "What is the event?"
UCAP: "When and where?"
UCAP: "Will you go? What will you do?"
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan sampai sepuluh menit.
AKSI: Setelah menit ketiga, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa menyalin teks kata per kata: tepuk bahu, ucapkan "Write it your way, not the same words.", tunggu siswa menulis ulang dengan kalimat sendiri.',
          cue         : 'Teks pengumuman tetap di papan tulis selama OUTPUT. Yang dilarang hanya menyalin verbatim, siswa boleh merujuk teks untuk akurasi informasi.',
          darurat     : 'Jika waktu tersisa 5 menit atau kurang dan sebagian besar siswa baru menulis satu kalimat → ucapkan "Two sentences. One about the event, one about what you will do.", lalu lanjut ke Layar 9.',
          diferensiasi: null,
          blok        : 'OUTPUT',
        },

        {
          id          : 'l9',
          tipe        : 'instruksi',
          teks        : `AKSI: Setelah delapan menit, beri sinyal tanpa menghentikan siswa yang masih menulis.
UCAP: "Two more minutes. Read your sentences. Did you include the most important information?"
AKSI: Pantau hasil tulisan semua siswa tanpa mengoreksi grammar.`,
          bantuan     : 'Jika siswa sudah menulis tiga kalimat tapi semuanya faktual: tanyakan "Will you go? Write one sentence.", tunggu siswa menambahkan respons personal.',
          cue         : 'Connector yang muncul spontan diterima, tetapi tidak ada connector yang didorong di TP-13.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati, tunjuk Choice Sheet siswa, tanyakan "Did you write about this? Add one sentence.".',
            sudahBisa   : 'Minta tambah satu kalimat rencana atau alasan personal, "I want to go because I like reading.".',
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
AKSI: Tunjuk satu sampai tiga siswa yang mengangkat tangan.
UCAP: "What did you write? From your seat is fine."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Will you go to the Book Fair? Yes or no?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk satu sampai dua siswa yang tadi aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Pertanyaan "Will you go?" dijawab yes atau no tanpa alasan.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today you read an announcement."
AKSI: Jeda 2 detik.
UCAP: "You found the information. When. Where. What to do."
AKSI: Jeda 2 detik.
UCAP: "And you made a choice. What matters most."
AKSI: Jeda 1 detik.
UCAP: "Keep it."
AKSI: Tunjuk Choice Sheet dan tulisan siswa di atas meja mereka.
UCAP: "Next time, we read instructions."
AKSI: Jeda 1 detik.
UCAP: "How to make something. Step by step."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : '"And you made a choice. What matters most." merangkum membaca pengumuman, memilih informasi yang paling penting dari teks.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C13;
