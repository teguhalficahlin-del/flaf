const TP_C21 = {

  // METADATA
  id             : 'tp-c21',
  nomor          : 21,
  kelas          : 6,
  nama           : 'Reading: Texts from the Real World',
  tema           : 'Capstone',
  kluster        : '— (Capstone)',
  jenis          : 'Capstone',
  text_anchor    : null,
  connector_aktif: 'semua connector TP-01 sampai TP-20 tersedia; because paling natural; tidak ada connector baru',
  recycle_fase_b : [
    'I think... because... (TP-17/TP-06)',
    'There is... (TP-03/TP-09)',
    'On [day]... / At [time]... (TP-07)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat membaca empat jenis teks fungsional (poster, menu, jadwal, notice) dan mengidentifikasi PURPOSE masing-masing teks.',
    'Peserta didik dapat mendeskripsikan isi teks secara verbal ke pasangan dan menjawab pertanyaan spesifik.',
    'Peserta didik dapat menulis respons terhadap satu teks pilihan dalam tiga kalimat: jenis teks, isi/tujuan, dan opini personal.',
  ],
  vocab     : ['poster', 'menu', 'schedule', 'notice', 'announcement', 'price', 'information', 'register'],
  persiapan : [
    'Teks A — Poster: "ENGLISH READING COMPETITION. Open for all students, Class 4, 5, and 6. Date: Saturday, 14 June 2025. Time: 08.00 – 12.00. Place: School Hall. No registration fee. Register before 10 June. See Mrs. Ani in the Teacher\'s Room." Dicetak satu per siswa bernomor ganjil. Dibagikan pada Layar 3.',
    'Teks B — Menu: "WARUNG PAK HENDRA. Nasi goreng Rp 8.000. Nasi uduk Rp 7.000. Mie ayam Rp 9.000. Soto ayam Rp 10.000. Es teh manis Rp 3.000. Jus buah Rp 5.000. Air putih GRATIS. Open every day: 06.00 – 14.00." Dicetak satu per siswa bernomor genap. Dibagikan pada Layar 4.',
    'Teks C — Jadwal: "BUS SCHEDULE, Bandung to Cimahi. 05.30 / 07.00 / 09.00 / 12.00 / 15.00. Student ticket with ID: Rp 3.000. Adult ticket: Rp 5.000. Buy at station only. No ticket, no seat." Ditulis di papan tulis saat Layar 5.',
    'Teks D — Notice: "NOTICE, School Library. Library CLOSED: Monday 2 June and Tuesday 3 June. Reason: renovation. Books available in Room 7 during closure. Open again: Wednesday, 4 June. Library Staff." Ditulis di papan tulis saat Layar 6.',
    'Papan tulis dan spidol untuk menampilkan Teks A dan B ke seluruh kelas, dan menulis Teks C dan D.',
    'Catatan distribusi: siswa ganjil mendapat Teks A, siswa genap mendapat Teks B. Setiap pasangan INTERACT terdiri dari satu siswa ganjil dan satu siswa genap.',
  ],
  media     : [],
  printables: [
    { file: 'tp-c21-text-a-poster.png', label: 'Competition Poster' },
    { file: 'tp-c21-text-b-menu.png', label: 'Warung Menu' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Tulisan TP-20', tujuan: 'Guru mengaktifkan kembali tulisan bebas siswa TP-20.' },
    { layar:  2, judul: 'Pembuka · Orientasi Teks Dunia Nyata', tujuan: 'Guru memperkenalkan empat jenis teks dan pertanyaan kunci.' },
    { layar:  3, judul: 'Inti · INPUT · Teks 1 Poster', tujuan: 'Guru memandu siswa membaca tujuan poster.' },
    { layar:  4, judul: 'Inti · Teks 2 Menu', tujuan: 'Guru memandu siswa memindai dan membaca tujuan menu.' },
    { layar:  5, judul: 'Inti · Teks 3 Jadwal', tujuan: 'Guru memandu siswa membaca tujuan jadwal.' },
    { layar:  6, judul: 'Inti · Teks 4 Notice', tujuan: 'Guru memandu siswa membaca tujuan notice.' },
    { layar:  7, judul: 'Inti · INTERACT · Info Gap A Cerita Teks B Bertanya', tujuan: 'Guru memandu siswa berbagi teks dan bertanya.' },
    { layar:  8, judul: 'Inti · Kelas Teks Mana Paling Berguna', tujuan: 'Guru memandu siswa membandingkan kegunaan teks.' },
    { layar:  9, judul: 'Inti · OUTPUT · Pilih Satu Teks dan Tulis Respons', tujuan: 'Guru memandu siswa menulis respons terhadap teks.' },
    { layar: 10, judul: 'Inti · Revisi dan Pertanyaan Kunci', tujuan: 'Guru memandu siswa memeriksa opini personal dan connector.' },
    { layar: 11, judul: 'Inti · Peer Quick Read', tujuan: 'Guru memandu siswa membaca dan merespons tulisan pasangan.' },
    { layar: 12, judul: 'Penutup · Share Satu Kalimat', tujuan: 'Guru memandu siswa membagikan satu kalimat ke semua siswa.' },
    { layar: 13, judul: 'Penutup · Guru Circulate Akhir', tujuan: 'Guru memeriksa tulisan barisan yang belum dikunjungi.' },
    { layar: 14, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-22.' },
  ],

  // BREAKPOINTS
  breakpoints: [
    { id: 'bp-1', after_langkah_id: 'l6', resume_at: 'l7' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas memegang tumpukan Teks A dan Teks B yang belum dibagi.
AKSI: Tunggu sampai kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
AKSI: Tunggu respons semua siswa.
UCAP: "Today, we read. Different texts. From the real world."
AKSI: Tunjuk tumpukan Teks A dan Teks B di tangan.`,
    bantuan: 'Jika tidak ada respons: angkat tangan, tunggu siswa ikut menjawab.',
    cue    : 'Teks A dan Teks B sudah disiapkan di tangan guru, belum dibagikan.',
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
          teks        : `AKSI: Berdiri di depan kelas tanpa menunjukkan teks.
UCAP: "Last time, you wrote. Your topic, your words."
AKSI: Jeda 2 detik.
UCAP: "Who remembers one sentence?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk satu siswa.
AKSI: Tunggu satu siswa menyebut kalimat dari tulisan TP-20 mereka.
AKSI: Angguk dan terima.
UCAP: "Today, we read again. But different."
AKSI: Jeda 1 detik.
UCAP: "Texts from outside this classroom."
AKSI: Tunjuk tumpukan teks di tangan.`,
          bantuan     : 'Jika tidak ada yang merespons dalam 20 detik: ucapkan "Last time you wrote about something you know. Who remembers one word?", tunggu satu kata, lalu lanjut.',
          cue         : 'Reactivation di layar ini berasal dari tulisan siswa sendiri di TP-20, bukan dari text-anchor baru. Satu kalimat cukup.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `UCAP: "Today, four kinds of texts."
AKSI: Tulis di pojok papan tulis: "Poster · Menu · Schedule · Notice".
UCAP: "You see these texts every day. Outside this classroom."
AKSI: Jeda 1 detik.
UCAP: "For each text, one question."
AKSI: Tulis di papan tulis: "What does this text WANT you to do?".
UCAP: "That is the most important question for real-world texts."
AKSI: Jeda 1 detik.
UCAP: "Let's start."`,
          bantuan     : null,
          cue         : '"What does this text WANT you to do?" adalah pertanyaan universal yang dipakai kembali di Layar 3 sampai Layar 6. Bukan comprehension quiz.',
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
          teks        : `AKSI: Bagikan Teks A ke siswa bernomor ganjil.
AKSI: Tampilkan Teks A di papan tulis untuk seluruh kelas.
UCAP: "Ganjil, this is your text. Read it carefully."
UCAP: "Genap, read the board."
AKSI: Beri waktu satu menit untuk membaca.
UCAP: "What does this poster want you to do?"
AKSI: Tunggu respons semua siswa dari teks.
UCAP: "And what information do you need to know first before you can join?"
AKSI: Tunggu dua sampai tiga respons dari teks.
AKSI: Angguk.
UCAP: "A poster wants you to do something. It gives you what you need to know."`,
          bantuan     : 'Jika siswa kesulitan menjawab: tunjuk judul poster, ucapkan "What is this about? And what should you do?", tunggu satu kata, lalu tinggalkan.',
          cue         : 'Distribusi Teks A dilakukan di layar ini, bukan sebelum kelas. Dua pertanyaan mengarahkan siswa ke purpose teks, bukan ke fakta individual.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan Teks B ke siswa bernomor genap.
AKSI: Tampilkan Teks B di papan tulis untuk seluruh kelas.
UCAP: "Genap, this is your text. Read it carefully."
UCAP: "Ganjil, read the board."
AKSI: Beri waktu satu menit untuk membaca.
UCAP: "What is the cheapest item on this menu?"
AKSI: Tunggu siswa memindai dan menjawab dari teks.
UCAP: "Good. And what does this menu want you to do?"
AKSI: Tunggu dua sampai tiga respons dari teks.
UCAP: "A menu gives you information so you can decide what to buy."`,
          bantuan     : 'Jika siswa tidak tahu cara membaca menu: tunjuk kolom harga, ucapkan "Find the smallest number here.", tunggu siswa menemukan, lalu lanjut.',
          cue         : '"What is the cheapest item?" adalah pertanyaan scanning. Siswa mencari informasi spesifik, bukan membaca seluruh teks.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Tulis Teks C di papan tulis.
UCAP: "Read this schedule. One minute."
AKSI: Beri waktu satu menit untuk membaca.
UCAP: "When does the first bus leave?"
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "And what does this schedule want you to do?"
AKSI: Tunggu dua sampai tiga respons dari teks.
UCAP: "A schedule gives you times so you can plan."`,
          bantuan     : 'Jika siswa bingung dengan format jadwal: tunjuk kolom waktu, ucapkan "Read from top to bottom. The first time is the first bus.".',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 20 menit sebelum akhir sesi. Jadwal dibaca dari atas ke bawah, bukan kiri ke kanan.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Tulis Teks D di papan tulis.
UCAP: "Read this notice. One minute."
AKSI: Beri waktu satu menit untuk membaca.
UCAP: "Who is this notice for?"
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "And what does this notice want you to know?"
AKSI: Tunggu dua sampai tiga respons dari teks.
UCAP: "A notice tells you something important so you can change your plan."`,
          bantuan     : 'Jika siswa tidak menemukan solusi alternatif di notice: tunjuk baris "Room 7", ucapkan "Where can you find books now?".',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 16 menit sebelum akhir sesi. Notice memberi solusi bersama informasinya.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Atur setiap pasangan terdiri dari satu siswa ganjil yang memegang Teks A dan satu siswa genap yang memegang Teks B.
👂 LISTEN FIRST
AKSI: Pegang Teks A dan bicara ke satu siswa genap.
UCAP: "My text is a poster. It is about an English Reading Competition."
UCAP: "It is on Saturday, 14 June. You need to register before June 10. It is free."
UCAP: "What question do you have?"
AKSI: Tunggu siswa bertanya.
AKSI: Baca jawaban dari Teks A.
UCAP: "It is in the school hall. Any student in class 4, 5, or 6 can join."
UCAP: "That is the info gap. B asks, A answers from the text."
UCAP: "Now, with your partner. A goes first."
AKSI: Minta siswa A mendeskripsikan teks A ke siswa B.
AKSI: Minta siswa B mengajukan satu pertanyaan konkret.
AKSI: Minta siswa A menjawab pertanyaan dari teks A.
AKSI: Minta siswa bergantian peran.
AKSI: Beri waktu enam sampai tujuh menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa B hanya membaca teks A langsung tanpa bertanya: bisikkan "Ask A, don\'t read. Listen first.".',
          cue         : 'Siswa B mengajukan minimal satu pertanyaan konkret setelah mendengar cerita siswa A. Siswa B tidak boleh hanya mengambil dan membaca teks A.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, deskripsikan poster dalam satu kalimat dan minta satu siswa bertanya tentang waktu, sederhanakan ke "A, say one thing your text says. B, ask about that thing.", lalu restart selama 2 menit per arah.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `UCAP: "Quick question. Which text was most useful for you?"
AKSI: Tunjuk pojok papan tulis dengan empat jenis teks.
AKSI: Tunjuk tiga sampai empat siswa satu per satu.
UCAP: "Which one? Why?"
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Angguk setiap respons tanpa menilai benar atau salah.
UCAP: "Different texts, different uses. Now, write."`,
          bantuan     : 'Jika tidak ada yang mau menjawab: tunjuk satu sampai dua siswa yang tadi aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 15 menit sebelum akhir sesi. Tidak ada jawaban benar atau salah.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l9',
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, choose one text. The one you found most interesting."
UCAP: "Write three things."
UCAP: "One, what kind of text it is."
UCAP: "Two, what it says. What does it want you to do?"
UCAP: "Three, what do you think about it. Use because."
UCAP: "Three sentences. Your words, not the text's words."
AKSI: Minta siswa memilih satu teks dan menulis secara individual.
AKSI: Beri waktu tujuh menit.
AKSI: Setelah menit ketiga, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Untuk siswa yang menyalin teks verbatim, bisikkan "In your words, what does this text want you to do?", lalu tinggalkan.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa freeze: ucapkan "What kind of text is this? Write that first. This is a poster, or this is a menu.", tunggu satu kalimat, lalu tinggalkan.',
          cue         : 'Kalimat ketiga adalah opini personal dengan because, bukan salinan teks. Circulate dimulai setelah tiga menit.',
          darurat     : 'Jika waktu tersisa 5 menit atau kurang dan sebagian besar siswa baru menulis satu kalimat → ucapkan "Two sentences, enough. What kind of text. What it says.", turunkan target tanpa menghentikan writing.',
          diferensiasi: null,
          blok        : 'OUTPUT',
        },

        {
          id          : 'l10',
          tipe        : 'instruksi',
          teks        : `AKSI: Beri sinyal untuk berhenti menulis.
UCAP: "Two more minutes. Read your response."
UCAP: "Check, is sentence three your opinion? Not the text's words?"
UCAP: "Did you use because? If not, add it now."
AKSI: Pantau hasil tulisan semua siswa, prioritaskan barisan tengah yang belum tersentuh di Layar 9.`,
          bantuan     : 'Jika siswa tidak bisa menambah because: ucapkan "Why do you think that? Add, because.", satu kata lalu tinggalkan.',
          cue         : 'Kalimat intention seperti "I will join the competition." adalah respons paling genuine terhadap teks fungsional.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Tunjuk kalimat terakhir siswa, bisikkan "This is what the text says. But what do you think about it? Start with I think.", tunggu satu kalimat.',
            sudahBisa   : 'Bisikkan "Can you add, what will you do because of this text? I will, or I want to.".',
          },
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa bertukar kertas dengan pasangan.
UCAP: "Read your partner's response. One minute. Silent."
AKSI: Beri waktu satu menit untuk membaca tulisan pasangan.
UCAP: "Tell your partner, I understand your text. It wants you to. Complete the sentence."
AKSI: Minta siswa melengkapi kalimat ke pasangan.
AKSI: Minta siswa bergantian peran.
AKSI: Beri waktu 30 detik per arah.`,
          bantuan     : 'Jika siswa tidak bisa melengkapi kalimat: tunjuk kalimat kedua respons pasangan, ucapkan "Read sentence two again. That should answer it.".',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 8 menit. Ini verifikasi bahwa respons menyampaikan purpose teks dengan jelas.',
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
          teks        : `AKSI: Tanyakan siapa yang mau membacakan satu kalimat dari responsnya.
AKSI: Tunjuk dua sampai tiga siswa yang mengangkat tangan.
UCAP: "One sentence from your response. From your seat."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Which text? Poster? Menu? Schedule? Notice?"
AKSI: Tunggu respons spontan semua siswa setiap kali.`,
          bantuan     : 'Jika tidak ada yang mau: panggil nama satu sampai dua siswa yang tadi aktif di blok INTERACT, ucapkan "Can you share one sentence?".',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Tidak ada evaluasi dari guru.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l13',
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau tulisan dua sampai tiga siswa di barisan yang belum dikunjungi, fokus pada kalimat ketiga.
AKSI: Untuk respons yang sudah punya opini personal, angguk atau ucapkan "Good.".
AKSI: Untuk respons yang masih dua kalimat fakta, catat nama siswa untuk referensi TP-22.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : null,
          cue         : 'Layar ini FLEX — lewati jika sudah berkeliling penuh di Layar 9 dan Layar 10.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l14',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today, you read four texts."
AKSI: Jeda 1 detik.
UCAP: "Posters. Menus. Schedules. Notices."
AKSI: Jeda 1 detik.
UCAP: "You found what each text wants you to do."
AKSI: Jeda 1 detik.
UCAP: "These are texts from your world."
AKSI: Jeda 1 detik.
UCAP: "You will see them again, outside this classroom."
AKSI: Jeda 1 detik.
UCAP: "Next time, last time."
AKSI: Jeda 1 detik.
UCAP: "Everything."
AKSI: Jeda 1 detik.
UCAP: "You will show what you know."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : '"You will see them again, outside this classroom." memperluas makna sesi ke dunia nyata siswa. "Last time. Everything." membuka TP-22 tanpa membocorkan format.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C21;
