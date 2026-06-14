const TP_C16 = {

  // METADATA
  id             : 'tp-c16',
  nomor          : 16,
  kelas          : 6,
  nama           : 'Writing: Responding to Text',
  tema           : 'Membaca Dunia',
  kluster        : 'D — Membaca Dunia',
  jenis          : 'Panen',
  text_anchor    : null,
  connector_aktif: 'and · but · because · so · when · then — semua tersedia; because dan but paling natural; tidak ada connector baru',
  recycle_fase_b : [
    'Yesterday I... (TP-05)',
    'I like... because... (TP-06/13)',
    'first, then, after that (TP-06)',
    'There is... (TP-03)',
    'On [day] I... (TP-07)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat memilih satu teks dari Kluster D dan menulis respons personal dalam minimal tiga kalimat menggunakan kalimat sendiri.',
    'Peserta didik dapat membedakan antara merangkum teks (summary) dan merespons teks (response) dalam tulisan.',
    'Peserta didik dapat menjelaskan pilihan teks dan alasan personal mereka kepada pasangan.',
  ],
  vocab     : [],
  persiapan : [
    'Brief tiga baris ditulis di papan tulis sebelum siswa masuk, tetap tampil selama sesi: "Choose one text. Write your response. Your own words."',
    'Empat judul teks ditulis di pojok papan tulis, tetap tampil selama sesi: "TP12: Menu · TP13: Announcement · TP14: Instructions · TP15: Short Story".',
    'Choice Slip satu lembar kecil per siswa, dua baris isian: "I choose: ___________" dan "I will write: ___________". Diletakkan di meja siswa saat Pre-Opening atau saat siswa masuk kelas.',
    'Kertas tulis siswa atau buku tulis yang dipakai di TP-12 sampai TP-15, untuk continuity Kluster D.',
  ],
  media     : [],
  printables: [
    { file: 'tp-c16-choice-slip.png', label: 'Choice Slip' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Tulisan TP-15', tujuan: 'Guru mengaktifkan kembali tulisan cerita siswa TP-15.' },
    { layar:  2, judul: 'Pembuka · Brief Panen', tujuan: 'Guru memperkenalkan tugas memilih dan merespons teks.' },
    { layar:  3, judul: 'Inti · INPUT · Review Teks Ingat Sebelum Memilih', tujuan: 'Guru mengingatkan empat teks Kluster D secara cepat.' },
    { layar:  4, judul: 'Inti · Demo Respons Guru', tujuan: 'Guru memodelkan respons tiga kalimat secara lisan.' },
    { layar:  5, judul: 'Inti · Choice Slip Komitmen Sebelum Menulis', tujuan: 'Guru memandu siswa menulis pilihan di Choice Slip.' },
    { layar:  6, judul: 'Inti · INTERACT · Choice Gap Pair Sharing', tujuan: 'Guru memandu siswa berbagi Choice Slip dengan pasangan.' },
    { layar:  7, judul: 'Inti · Kelas Dua Pilihan Berbagi', tujuan: 'Guru memandu dua sampai tiga siswa berbagi pilihan.' },
    { layar:  8, judul: 'Inti · OUTPUT · Individual Writing Draft Pertama', tujuan: 'Guru memandu siswa menulis draft respons.' },
    { layar:  9, judul: 'Inti · Revisi dan Extension', tujuan: 'Guru memandu siswa memeriksa dan menambah kalimat.' },
    { layar: 10, judul: 'Inti · Peer Quick Read', tujuan: 'Guru memandu siswa membaca dan merespons tulisan pasangan.' },
    { layar: 11, judul: 'Penutup · Share Satu Kalimat', tujuan: 'Guru memandu siswa membagikan satu kalimat ke semua siswa.' },
    { layar: 12, judul: 'Penutup · Circulate Akhir', tujuan: 'Guru memeriksa tulisan barisan yang belum dikunjungi.' },
    { layar: 13, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-17.' },
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
UCAP: "Today, you choose. You write."
AKSI: Tunjuk brief di papan tulis.`,
    bantuan: 'Jika tidak ada respons: angkat tangan, tunggu siswa ikut menjawab.',
    cue    : 'Brief tiga baris dan empat judul teks sudah tampil di papan tulis, Choice Slip sudah di meja siswa sebelum siswa masuk.',
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
UCAP: "Last time you wrote a story."
AKSI: Jeda 2 detik.
UCAP: "One sentence. Who remembers a sentence from their story?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk satu siswa.
AKSI: Tunggu satu siswa menyebut kalimat dari tulisan TP-15 mereka.
AKSI: Angguk dan terima.
UCAP: "Good. Today, you choose. Any text we read."
AKSI: Tunjuk pojok papan tulis dengan empat judul.`,
          bantuan     : 'Jika tidak ada yang merespons dalam 20 detik: ucapkan "Last Sunday, Budi...", tunggu siswa melanjutkan satu kata, lalu lanjut.',
          cue         : 'Reactivation di layar ini berasal dari tulisan siswa sendiri di TP-15, bukan dari text-anchor baru. Satu kalimat dari siswa cukup.',
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
UCAP: "You read four texts in this cluster."
AKSI: Tunjuk pojok papan tulis dengan empat judul.
UCAP: "A menu. An announcement. Instructions. A short story."
UCAP: "Choose one. Write what you think, because you read it."
UCAP: "But only you can write your response."
AKSI: Tunjuk satu siswa, lalu siswa lain.
UCAP: "Different people, different responses. That is the point."`,
          bantuan     : null,
          cue         : '"because you read it. But only you can write your response." menanam dua connector dalam instruksi secara natural, bukan sebagai grammar lesson.',
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
          teks        : `AKSI: Tunjuk empat judul teks di pojok papan tulis satu per satu.
UCAP: "TP12, Menu. This is nasi goreng. It costs Rp 15.000."
UCAP: "TP13, Announcement. A school event. Remember?"
AKSI: Tunggu satu respons spontan dari semua siswa.
UCAP: "TP14, Instructions. Step by step. First, then."
UCAP: "TP15, Short Story. Budi. Last Sunday. The market."
UCAP: "That is all you need to remember. Now, choose."
AKSI: Beri waktu 30 detik bagi siswa yang ingin membuka tulisan lama TP-12 sampai TP-15.`,
          bantuan     : 'Jika siswa tidak ingat satu teks: tunjuk judul teks itu di pojok papan tulis, ucapkan satu kalimat memorable dari teks tersebut.',
          cue         : 'Layar ini FLEX — lewati jika kelas sudah membawa tulisan TP-12 sampai TP-15 atau terlihat mengingat keempat teks. Ini recall cepat, bukan re-teaching.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk "TP13: Announcement" di pojok papan tulis.
UCAP: "Watch me. I choose one text, and I respond."
👂 LISTEN FIRST
UCAP: "I choose the announcement about the Book Fair."
AKSI: Jeda 1 detik.
UCAP: "I think it is interesting because I like books."
AKSI: Jeda 1 detik.
UCAP: "But I think the time is too short. Only four hours."
AKSI: Jeda 1 detik.
UCAP: "That is a response. Three sentences."
AKSI: Angkat satu jari.
UCAP: "One, what I choose."
AKSI: Angkat dua jari.
UCAP: "Two, what I think, because."
AKSI: Angkat tiga jari.
UCAP: "Three, what I disagree, but."
UCAP: "Now, think. Which text are you thinking about?"
AKSI: Jeda 3 detik.
UCAP: "Tell your neighbor, one word. Which text?"
AKSI: Beri waktu 15 detik siswa berbisik ke tetangga.
UCAP: "Good. Now, Choice Slip."`,
          bantuan     : 'Jika siswa bertanya boleh pilih TP15 atau harus berapa kalimat: jawab "Yes, any text. Three or more.", satu kalimat lalu lanjut.',
          cue         : 'Demo menggunakan TP-13 Announcement, bukan TP-15. Demo lisan saja, tidak ditulis di papan tulis.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk Choice Slip di meja siswa.
UCAP: "Take your Choice Slip. Two things to write. Don't talk yet."
UCAP: "One, which text do you choose?"
UCAP: "Two, write one sentence. What will you say about it?"
AKSI: Minta siswa menulis di Choice Slip secara individual.
AKSI: Beri waktu dua sampai tiga menit.
AKSI: Diam tanpa berkeliling dulu.`,
          bantuan     : 'Jika siswa tidak bisa menulis satu kalimat: ucapkan "Just write the name of the text. Then one word, how do you feel? Interesting? Surprising? Funny?", satu kata dulu, kalimat utuh dibentuk saat writing di Layar 8.',
          cue         : '"Don\'t talk yet." mencegah siswa mengikuti pilihan pasangan sebelum berkomitmen sendiri. Choice Slip adalah komitmen tertulis sebelum pair work.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk berpasangan, satu siswa A dengan satu siswa B.
👂 LISTEN FIRST
AKSI: Pegang Choice Slip contoh dan bicara ke satu siswa di depan.
UCAP: "I chose the announcement. I will write, I think it is interesting because I like books."
UCAP: "What did you choose?"
AKSI: Tunggu siswa menjawab dari Choice Slip mereka.
UCAP: "Good. Now ask me, why did I choose it?"
AKSI: Tunggu siswa bertanya.
UCAP: "Because I like books."
UCAP: "That is pair sharing. Now, with your partner."
AKSI: Minta siswa A menunjukkan Choice Slip ke siswa B.
AKSI: Minta siswa A membacakan pilihan dan satu alasan.
AKSI: Minta siswa B merespons dengan posisi sendiri.
AKSI: Minta siswa bergantian peran.
AKSI: Beri waktu empat menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika pasangan hanya menunjukkan Choice Slip tanpa bertanya: ucapkan ke pasangan itu "Ask, why did you choose that?", tunggu siswa bertanya sebelum pergi.',
          cue         : 'Choice Slip ditulis sebelum pair sharing, urutan ini tidak boleh dibalik. Demo 30 detik menggunakan pilihan announcement, konsisten dengan Layar 4.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, tunjuk satu pasangan di depan dan baca isi Choice Slip satu siswa keras-keras lalu siswa lain bertanya "Why?", sederhanakan ke "Just read your Choice Slip to your partner.", lalu restart selama 60 detik per arah.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau berbagi teks pilihannya.
AKSI: Tunjuk dua sampai tiga siswa yang mengangkat tangan.
UCAP: "Which text did you choose? One word, why."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Tunjuk judul teks di pojok papan tulis setiap kali siswa menyebut teks.
UCAP: "Different choices. All valid. Now, write."`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk satu sampai dua siswa yang tadi aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 20 menit sebelum akhir sesi. Variasi pilihan adalah normal dan diharapkan.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Biarkan brief tiga baris dan empat judul tetap tampil di papan tulis.
UCAP: "Now, write. Use your Choice Slip as your starting point."
UCAP: "Write your response. What you think. What you find interesting."
UCAP: "Three sentences minimum. Your way."
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan sampai sepuluh menit.
AKSI: Setelah menit ketiga, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Untuk siswa yang meringkas teks bukan merespons, dekati dan bisikkan "What do you think about it?", tunggu siswa menulis, lalu tinggalkan.
AKSI: Untuk siswa yang menyalin teks verbatim, dekati, tunjuk Choice Slip mereka, bisikkan "Your words, not the text's words.", lalu tinggalkan.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa freeze: tunjuk Choice Slip mereka, ucapkan "Start with your first line here. Write it.", tunggu satu kalimat ditulis, lalu tinggalkan.',
          cue         : 'Circulate dimulai setelah tiga menit, barisan belakang diprioritaskan pertama. Yang dilarang menyalin teks verbatim, yang diinginkan respons personal.',
          darurat     : 'Jika waktu tersisa 5 menit atau kurang dan sebagian besar siswa baru menulis satu kalimat → ucapkan "Two sentences, enough. One, which text you chose. Two, one thing you think about it.", turunkan target tanpa menghentikan writing.',
          diferensiasi: null,
          blok        : 'OUTPUT',
        },

        {
          id          : 'l9',
          tipe        : 'instruksi',
          teks        : `AKSI: Beri sinyal untuk berhenti menulis.
UCAP: "Two more minutes. Read what you wrote."
AKSI: Beri waktu siswa membaca tulisannya sendiri secara diam.
UCAP: "Check. Is this your response? Or is it a summary of the text?"
UCAP: "If you have three sentences, add one more. Use because or but."
UCAP: "If you have fewer than three, finish one more sentence first."
AKSI: Pantau hasil tulisan semua siswa, prioritaskan barisan tengah yang belum tersentuh di Layar 8.`,
          bantuan     : 'Jika siswa tidak tahu harus menambah kalimat apa: ucapkan "What did you feel when you read it? Write that.".',
          cue         : '"Is this your response? Or is it a summary?" adalah self-check yang bisa dilakukan siswa secara mandiri.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati, ingatkan demo Layar 4 secara lisan, "Remember, I think it is interesting because. Try this with your text.".',
            sudahBisa   : 'Bisikkan "Add one more sentence. I recommend this text because, then your reason.".',
          },
          blok        : null,
        },

        {
          id          : 'l10',
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa bertukar kertas dengan pasangan.
UCAP: "Read your partner's response. One minute. Silent."
AKSI: Beri waktu satu menit untuk membaca tulisan pasangan secara individual.
UCAP: "Now, one sentence to your partner."
UCAP: "I liked when you said, or I want to know more about."
AKSI: Minta siswa menyampaikan satu kalimat respons lisan ke pasangan.
AKSI: Minta siswa bergantian peran.
AKSI: Beri waktu 30 detik per arah.`,
          bantuan     : 'Jika siswa tidak tahu harus bilang apa: ucapkan "Say one thing, I liked the part about, then one part.".',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 8 menit. Ini peer response, bukan peer correction. Tidak ada koreksi grammar.',
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
          teks        : `AKSI: Tanyakan siapa yang mau membacakan satu kalimat dari responsnya.
AKSI: Tunjuk dua sampai tiga siswa yang mengangkat tangan.
UCAP: "One sentence from your response. From your seat is fine."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Tunjuk judul teks di pojok papan tulis setiap kali siswa selesai membaca.`,
          bantuan     : 'Jika tidak ada yang mau: panggil nama satu sampai dua siswa yang tadi aktif di blok INTERACT, ucapkan "Can you share your first sentence?".',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Tidak ada evaluasi dari guru.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l12',
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau tulisan dua sampai tiga siswa di barisan yang belum dikunjungi selama OUTPUT.
AKSI: Untuk tulisan yang sudah berupa respons personal, angguk atau ucapkan "Good.".
AKSI: Untuk tulisan yang masih berupa ringkasan, catat nama siswa untuk referensi TP-17 tanpa mengoreksi.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : null,
          cue         : 'Layar ini FLEX — lewati jika sudah berkeliling penuh di Layar 8 dan Layar 9. Tidak ada koreksi di penutup.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l13',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today, you chose."
AKSI: Jeda 2 detik.
UCAP: "You read four texts this month."
AKSI: Tunjuk empat judul di pojok papan tulis.
UCAP: "Today, you decided which one matters to you."
AKSI: Jeda 2 detik.
UCAP: "And you wrote why."
AKSI: Jeda 1 detik.
UCAP: "That is responding to text. Keep your writing."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time, we don't respond to someone else's text."
AKSI: Jeda 1 detik.
UCAP: "We give our own opinion. About things we see and think."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : '"You decided which one matters to you, and you wrote why." merangkum Panen, keputusan personal tentang teks yang bermakna.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C16;
