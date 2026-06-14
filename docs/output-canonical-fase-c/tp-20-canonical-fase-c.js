const TP_C20 = {

  // METADATA
  id             : 'tp-c20',
  nomor          : 20,
  kelas          : 6,
  nama           : 'Writing: My Experience',
  tema           : 'Memproduksi untuk Orang Lain',
  kluster        : 'E — Memproduksi untuk Orang Lain',
  jenis          : 'Panen',
  text_anchor    : null,
  connector_aktif: 'and · but · because · so · when · then — semua tersedia; tidak ada connector baru; because dan but tertanam natural dalam brief di papan',
  recycle_fase_b : [
    'I think... because... (TP-17/TP-06)',
    'Last week I... (TP-05 Fase B)',
    'It has... / It is... (TP-02 Fase B)',
    'There is... (TP-03 Fase B)',
    'first, then, after that (TP-06 Fase B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat memproduksi teks tulis dalam minimal satu register (opini, cerita, atau deskripsi) menggunakan kosakata Fase C tanpa scaffold template.',
    'Peserta didik dapat menggunakan minimal satu connector (because, but, and, so) yang terintegrasi natural dalam tulisan mandiri.',
    'Peserta didik dapat menjelaskan pilihan topik dan register mereka secara lisan kepada pasangan dalam 1–2 kalimat.',
  ],
  vocab     : [],
  persiapan : [
    'Brief tiga baris ditulis di papan tulis sebelum siswa masuk, tetap tampil selama sesi: "Write about something you know — because only you can write this. But it must be yours."',
    'Tiga register ditulis di pojok papan tulis sebelum siswa masuk, tetap tampil selama sesi: "Opinion · Story · Description".',
    'Kertas atau buku tulis siswa untuk commitment di Layar 5 dan writing di Layar 7 sampai Layar 9.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Tulisan TP-19', tujuan: 'Guru mengaktifkan kembali deskripsi siswa TP-19.' },
    { layar:  2, judul: 'Pembuka · Brief Panen', tujuan: 'Guru memperkenalkan tugas menulis bebas tiga register.' },
    { layar:  3, judul: 'Inti · INPUT · Portfolio Micro-Review', tujuan: 'Guru mengaktifkan tiga register dari TP-17, TP-18, TP-19.' },
    { layar:  4, judul: 'Inti · Demo Guru Tiga Register Satu Tulisan', tujuan: 'Guru memodelkan tiga register dalam satu tulisan.' },
    { layar:  5, judul: 'Inti · Commitment Topik Register Satu Kalimat', tujuan: 'Guru memandu siswa menulis komitmen tulisan.' },
    { layar:  6, judul: 'Inti · INTERACT · Choice Gap Pair Sharing Komitmen', tujuan: 'Guru memandu siswa berbagi komitmen dengan pasangan.' },
    { layar:  7, judul: 'Inti · OUTPUT · Individual Writing Blok Pertama', tujuan: 'Guru memandu siswa menulis blok pertama.' },
    { layar:  8, judul: 'Inti · Continuation Blok Kedua', tujuan: 'Guru memandu siswa menambah tulisan dan register kedua.' },
    { layar:  9, judul: 'Inti · Revisi dan Connector Check', tujuan: 'Guru memandu siswa memeriksa connector dan menambah kalimat.' },
    { layar: 10, judul: 'Inti · Peer Quick Read', tujuan: 'Guru memandu siswa membaca dan merespons tulisan pasangan.' },
    { layar: 11, judul: 'Penutup · Share Satu Kalimat', tujuan: 'Guru memandu siswa membagikan satu kalimat ke semua siswa.' },
    { layar: 12, judul: 'Penutup · Circulate Akhir', tujuan: 'Guru memeriksa tulisan barisan yang belum dikunjungi.' },
    { layar: 13, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-21.' },
  ],

  // BREAKPOINTS
  breakpoints: [
    { id: 'bp-1', after_langkah_id: 'l7', resume_at: 'l9' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Tunggu sampai kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
AKSI: Tunggu respons semua siswa.
UCAP: "Today, you write. About yourself. About your world."
AKSI: Tunjuk brief di papan tulis.`,
    bantuan: 'Jika tidak ada respons: angkat tangan, tunggu siswa ikut menjawab.',
    cue    : 'Brief tiga baris dan tiga register sudah tampil di papan tulis sebelum siswa masuk.',
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
UCAP: "Last time, you described a place."
AKSI: Jeda 2 detik.
UCAP: "Who remembers one sentence from their description?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk satu siswa.
AKSI: Tunggu satu siswa menyebut kalimat dari tulisan TP-19 mereka.
AKSI: Angguk dan terima.
UCAP: "Today, everything you know."
AKSI: Jeda 1 detik.
UCAP: "You choose what to write."
AKSI: Tunjuk brief dan tiga register di papan tulis.`,
          bantuan     : 'Jika tidak ada yang merespons dalam 20 detik: ucapkan "Last time you wrote, The place is. Who remembers one word?", tunggu satu kata, lalu lanjut.',
          cue         : 'Reactivation di layar ini berasal dari tulisan siswa sendiri di TP-19, bukan dari text-anchor baru. Satu kalimat cukup.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk brief tiga baris di papan tulis.
UCAP: "Read this with me."
🗣 TOGETHER
AKSI: Ajak semua siswa membaca brief bersama.
UCAP: "Read with me. Ready?"
UCAP: "Say it with me!"
AKSI: Tunggu semua siswa membaca brief bersama.
UCAP: "And look at the corner."
AKSI: Tunjuk pojok papan tulis dengan tiga register.
UCAP: "You can use one, or more than one."
UCAP: "Your topic. Your choice."
UCAP: "Today, you write everything you know."`,
          bantuan     : null,
          cue         : '"because only you can write this." dan "But it must be yours." menanam dua connector natural dalam instruksi. Tiga register tidak perlu dijelaskan.',
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
          teks        : `UCAP: "Before you write, remember."
AKSI: Tunjuk pojok papan tulis dengan tiga register.
UCAP: "Opinion, TP17. What topic did you write about? Football? Cooking?"
AKSI: Tunjuk satu sampai dua siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Story, TP18. What happened? One sentence."
AKSI: Tunjuk satu sampai dua siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Description, TP19. What place did you describe?"
AKSI: Tunjuk satu sampai dua siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "All of these, available today. Use any of them. Or something new."
AKSI: Jeda 1 detik.
UCAP: "What do you want to write?"
AKSI: Jeda 5 detik tanpa meminta jawaban.`,
          bantuan     : 'Jika tidak ada yang merespons satu pertanyaan: angguk dan lanjut ke pertanyaan berikutnya.',
          cue         : 'Review ini activating memory, bukan re-teaching. Total tidak lebih dari empat menit. "Or something new." memvalidasi topik di luar tulisan lama.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `UCAP: "Watch me. Three sentences. Three registers. One piece of writing."
👂 LISTEN FIRST
UCAP: "Last Saturday I went to the market near my house."
AKSI: Jeda 1 detik.
UCAP: "It is always busy and full of colors."
AKSI: Jeda 1 detik.
UCAP: "I like it because it reminds me of my grandmother."
AKSI: Jeda 1 detik.
UCAP: "Three sentences."
AKSI: Angkat tiga jari satu per satu.
UCAP: "Story. Description. Opinion."
UCAP: "You don't have to use all three. But you can."`,
          bantuan     : 'Jika siswa bertanya boleh satu register saja: jawab "Yes, one is enough.", satu kalimat lalu lanjut.',
          cue         : 'Layar ini FLEX — lewati jika kelas sudah jelas arahnya setelah Layar 3. Demo lisan saja, tidak ditulis di papan tulis.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, write your commitment. Three things."
UCAP: "One, your topic."
UCAP: "Two, your register. Opinion, story, description, or mix."
UCAP: "Three, your first sentence."
UCAP: "Don't talk yet. Write first."
AKSI: Minta siswa menulis commitment secara individual.
AKSI: Beri waktu tiga sampai empat menit.
AKSI: Diam tanpa berkeliling dulu.`,
          bantuan     : 'Jika siswa tidak bisa memilih topik: ucapkan "What did you write about in TP17? Use that topic. Or try something new.", satu kalimat lalu tinggalkan.',
          cue         : '"Don\'t talk yet. Write first." mencegah pengaruh pasangan sebelum komitmen personal terbentuk. Tiga elemen adalah fondasi INTERACT.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk berpasangan, satu siswa A dengan satu siswa B.
👂 LISTEN FIRST
AKSI: Pegang commitment contoh dan bicara ke satu siswa di depan.
UCAP: "I will write a story about the market, with description and opinion."
UCAP: "My first sentence, Last Saturday I went to the market near my house."
UCAP: "What will you write?"
AKSI: Tunggu siswa menjawab dari commitment mereka.
UCAP: "Interesting. Why that topic?"
AKSI: Tunggu siswa menjawab satu kalimat.
UCAP: "Now, with your partner."
AKSI: Minta siswa A membacakan tiga elemen komitmen ke siswa B.
AKSI: Minta siswa B mengajukan satu pertanyaan tentang komitmen A.
AKSI: Minta siswa A menjawab.
AKSI: Minta siswa bergantian peran.
AKSI: Beri waktu empat sampai lima menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika pasangan tidak tahu harus bertanya apa: ucapkan "Ask, why did you choose that topic?", tunggu jawaban.',
          cue         : 'Setiap siswa memiliki kombinasi topik dan register berbeda. Pair sharing memverifikasi arah sebelum OUTPUT.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, minta satu siswa membaca tiga elemen komitmen keras-keras, sederhanakan ke "Just read your three things to your partner.", lalu restart selama 60 detik per arah.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Biarkan brief dan tiga register tetap tampil di papan tulis.
UCAP: "Now, write. Start from your first sentence."
UCAP: "Your topic. Your register. Your words."
UCAP: "Write."
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu sepuluh menit.
AKSI: Setelah menit keempat, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Untuk siswa yang menyalin dari TP-17, TP-18, atau TP-19, bisikkan "Same topic, new words? Or try a different angle.", lalu tinggalkan.
AKSI: Untuk siswa yang sudah selesai sebelum sepuluh menit, bisikkan "Can you add a second register? Look at the corner.".
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa freeze: tunjuk commitment Layar 5 mereka, ucapkan "Write your first sentence, just that one.", tunggu satu kalimat, lalu tinggalkan.',
          cue         : 'Circulate dimulai setelah empat menit, barisan belakang diprioritaskan. Flow menulis harus terbentuk sendiri tanpa intervensi dini.',
          darurat     : 'Jika waktu tersisa 5 menit atau kurang dan sebagian besar siswa baru menulis satu kalimat → ucapkan "Write three sentences. One opinion. One story. One description.", turunkan target tanpa menghentikan writing.',
          diferensiasi: null,
          blok        : 'OUTPUT',
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `UCAP: "Continue. Add more, or start adding connectors."
UCAP: "Can you add a second register? Look at the corner."
AKSI: Tunjuk pojok papan tulis.
AKSI: Minta siswa melanjutkan menulis.
AKSI: Beri waktu empat sampai lima menit.
AKSI: Pantau siswa yang belum menggunakan dua register atau belum punya empat kalimat.`,
          bantuan     : 'Jika siswa tidak tahu register kedua apa yang ditambah: tunjuk pojok papan tulis, ucapkan "Add one opinion, I like it because.", lalu tinggalkan.',
          cue         : 'Layar ini FLEX — lewati jika Breakpoint diaktifkan atau waktu tersisa kurang dari 10 menit.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l9',
          tipe        : 'instruksi',
          teks        : `AKSI: Beri sinyal untuk berhenti menulis.
UCAP: "Two more minutes. Read your writing."
AKSI: Beri waktu siswa membaca tulisannya sendiri.
UCAP: "Did you use because? And? But? Or so?"
UCAP: "Add one connector between two sentences that don't have one yet."
AKSI: Pantau hasil tulisan semua siswa, prioritaskan barisan tengah yang belum tersentuh di Layar 7.`,
          bantuan     : 'Jika siswa sudah punya connector di setiap kalimat: ucapkan "Good. Read it once more. Is there anything you want to change?", lalu tinggalkan.',
          cue         : 'Cukup satu connector per siswa, bukan audit seluruh tulisan. Satu connector genuine lebih bermakna dari semua connector yang dipaksa.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Tunjuk dua kalimat yang berdampingan, bisikkan "Connect these. Use and or because.", tunggu siswa menambahkan satu connector.',
            sudahBisa   : 'Bisikkan "Can you add how you feel about this topic, one sentence? I love it because.".',
          },
          blok        : null,
        },

        {
          id          : 'l10',
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa bertukar kertas dengan pasangan.
UCAP: "Read your partner's writing. One minute. Silent."
AKSI: Beri waktu satu menit untuk membaca tulisan pasangan.
UCAP: "Tell your partner one thing you want to know more about."
AKSI: Minta siswa menyampaikan satu kalimat lisan ke pasangan.
AKSI: Minta siswa bergantian peran.
AKSI: Beri waktu 30 detik per arah.`,
          bantuan     : 'Jika siswa tidak tahu harus bilang apa: ucapkan "Say, I want to know more about.", tunjuk satu bagian tulisan pasangan, lalu tinggalkan.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 8 menit. Peer response berfokus pada isi, bukan koreksi grammar.',
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
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau membacakan satu kalimat dari tulisannya.
AKSI: Tunjuk dua sampai tiga siswa yang mengangkat tangan.
UCAP: "One sentence from your writing. From your seat."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Tunjuk pojok papan tulis setiap kali siswa selesai membaca.
UCAP: "Opinion, story, or description?"
AKSI: Tunggu respons spontan semua siswa setiap kali.`,
          bantuan     : 'Jika tidak ada yang mau: panggil nama satu sampai dua siswa yang tadi aktif di blok INTERACT, ucapkan "Can you share your first sentence?".',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Tidak ada evaluasi dari guru.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l12',
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau tulisan dua sampai tiga siswa di barisan yang belum dikunjungi.
AKSI: Untuk tulisan yang kuat, angguk atau ucapkan "Good.".
AKSI: Untuk tulisan yang sangat minimal, catat nama siswa untuk referensi TP-21.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : null,
          cue         : 'Layar ini FLEX — lewati jika sudah berkeliling penuh di Layar 7 sampai Layar 9.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l13',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today, you wrote."
AKSI: Jeda 1 detik.
UCAP: "About something that is yours."
AKSI: Jeda 1 detik.
UCAP: "An opinion. A story. A description. Or all three."
AKSI: Jeda 1 detik.
UCAP: "That is your writing. Keep it."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time, we read again."
AKSI: Jeda 1 detik.
UCAP: "But not a story. Not instructions."
AKSI: Jeda 1 detik.
UCAP: "Texts you see every day. Outside this classroom."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : '"An opinion. A story. A description. Or all three." merangkum Kluster E dan memvalidasi semua pilihan register siswa.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C20;
