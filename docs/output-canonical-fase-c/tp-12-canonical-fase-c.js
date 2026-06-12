const TP_C12 = {

  // METADATA
  id             : 'tp-c12',
  nomor          : 12,
  kelas          : 6,
  nama           : 'Reading a Menu',
  tema           : 'Membaca Dunia',
  kluster        : 'D — Membaca Dunia',
  jenis          : 'Biasa',
  text_anchor    : '(gambar menu) + "This is nasi goreng. It costs Rp 15.000. It is spicy."',
  connector_aktif: '— (tidak ada connector baru; semua yang sudah aktif tersedia jika muncul natural; tidak didorong)',
  recycle_fase_b : [
    'is [adjective] (TP-02, TP-09 Fase C)',
    'I like... (TP-13 Fase B)',
    'There is / There are... (TP-03 Fase B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat membaca teks menu dan mengekstrak tiga jenis informasi: nama makanan, harga, dan deskripsi singkat.',
    'Peserta didik dapat menjawab pertanyaan faktual berdasarkan teks menu (membaca untuk informasi spesifik).',
    'Peserta didik dapat menulis respons terhadap teks menu dalam bentuk pesanan menggunakan kalimat sendiri.',
  ],
  vocab     : ['menu', 'price', 'costs', 'spicy', 'sweet', 'savory', 'crispy', 'cold', 'order'],
  persiapan : [
    'Menu Card A satu per siswa versi A, berisi tiga item: 1. Nasi Goreng — Rp 15.000 — spicy; 2. Mie Goreng — Rp 12.000 — not spicy; 3. Ayam Goreng — Rp 18.000 — crispy. Dicetak atau ditulis tangan sebelum kelas dimulai, dibagikan hanya ke siswa versi A pada awal Layar 6.',
    'Menu Card B satu per siswa versi B, berisi tiga item berbeda: 4. Nasi Uduk — Rp 12.000 — savory; 5. Bakso — Rp 10.000 — spicy; 6. Es Teh — Rp 5.000 — sweet and cold. Dicetak atau ditulis tangan sebelum kelas dimulai, dibagikan hanya ke siswa versi B pada awal Layar 6.',
    'Complete Menu Table satu per siswa, tabel enam baris dengan kolom No, Food / Drink, Price, dan What is it like?, semua baris kosong. Dibagikan bersama Menu Card pada awal Layar 6. Tetap di meja siswa sebagai scaffold sampai akhir sesi.',
    'Text-anchor "This is nasi goreng. It costs Rp 15.000. It is spicy." ditulis di papan tulis sebelum siswa masuk, tetap tampil dari Layar 2 sampai akhir sesi. Tidak dihapus sebelum OUTPUT.',
    'Sample menu untuk Layar 4: Soto Ayam — Rp 13.000 — warm and savory; Jus Jeruk — Rp 8.000 — sweet and fresh; Nasi Putih — Rp 5.000 — plain. Ditulis di papan tulis di Layar 4, dihapus setelah Layar 4 selesai.',
    'Papan tulis dan spidol untuk menulis sample menu dan jawaban demo tabel di Layar 4 dan Layar 6.',
  ],
  media     : [],
  printables: [
    { file: 'tp-c12-menu-card-a.png', label: 'Menu Card A' },
    { file: 'tp-c12-menu-card-b.png', label: 'Menu Card B' },
    { file: 'tp-c12-menu-table.png', label: 'Complete Menu Table' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Tulisan TP-11', tujuan: 'Guru menjembatani tulisan hewan TP-11 ke mode membaca.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Text-anchor Ini Menu', tujuan: 'Guru memperkenalkan satu item menu dan tiga kategori membaca.' },
    { layar:  3, judul: 'Inti · INPUT · Model Guru Dua Item Menu', tujuan: 'Guru memodelkan pola This is, It costs, It is.' },
    { layar:  4, judul: 'Inti · Membaca Menu Bersama', tujuan: 'Guru memandu siswa membaca menu untuk menjawab.' },
    { layar:  5, judul: 'Inti · Drill Membaca Harga', tujuan: 'Guru melatih membaca dan membandingkan harga dari papan tulis.' },
    { layar:  6, judul: 'Inti · INTERACT · Complete Menu Table Information Gap', tujuan: 'Guru memandu siswa melengkapi tabel menu lewat bertanya.' },
    { layar:  7, judul: 'Inti · Mini-Share Termurah dan Termahal', tujuan: 'Guru memandu siswa melaporkan item termurah dan termahal.' },
    { layar:  8, judul: 'Inti · OUTPUT · Write Your Order', tujuan: 'Guru memandu siswa menulis pesanan dari tabel menu.' },
    { layar:  9, judul: 'Inti · Check and Extend', tujuan: 'Guru memandu siswa memeriksa total harga dan menambah kalimat.' },
    { layar: 10, judul: 'Penutup · Sharing Pesanan', tujuan: 'Guru memandu siswa membagikan pesanan ke semua siswa.' },
    { layar: 11, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-13.' },
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
UCAP: "Today, we read."`,
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
          teks        : `AKSI: Berdiri di depan kelas tanpa menunjukkan teks apa pun.
UCAP: "Last time, you wrote about an animal."
AKSI: Jeda 2 detik.
UCAP: "One sentence. Who remembers?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk satu siswa.
AKSI: Tunggu satu siswa menyebut kalimat dari tulisan TP-11 mereka.
AKSI: Angguk dan terima apa pun yang muncul.
UCAP: "Good. Today, we don't write first."
AKSI: Jeda 1 detik.
UCAP: "We read first."`,
          bantuan     : 'Jika tidak ada yang merespons dalam 20 detik: ucapkan contoh "A cat eats fish.", lalu lanjut ke Layar 2.',
          cue         : 'Reactivation di layar ini berasal dari tulisan siswa sendiri di TP-11, bukan dari text-anchor baru. Satu respons cukup.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk text-anchor di papan tulis.
UCAP: "Look at the board. This is one item from a menu."
👂 LISTEN FIRST
AKSI: Baca text-anchor perlahan sambil menunjuk tiap kalimat.
UCAP: "This is nasi goreng."
UCAP: "It costs Rp 15.000."
UCAP: "It is spicy."
UCAP: "Three things. The name. The price. What it is like."
UCAP: "That is how a menu works."`,
          bantuan     : 'Jika siswa tidak memperhatikan papan tulis: ketuk papan tulis dua kali sebelum membaca kalimat berikutnya.',
          cue         : 'Tiga kategori name, price, dan what it is like adalah kerangka membaca menu. Tunjuk tiap kalimat saat menyebut kategorinya.',
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
          teks        : `AKSI: Berdiri di depan kelas. Text-anchor tetap di papan tulis.
UCAP: "Now, I will read two items from a menu. Listen."
UCAP: "This is nasi goreng."
UCAP: "It costs Rp 15.000."
UCAP: "It is spicy."
AKSI: Jeda 1 detik.
UCAP: "This is es teh."
UCAP: "It costs Rp 5.000."
UCAP: "It is sweet and cold."
AKSI: Jeda 1 detik.
UCAP: "This is — the name."
UCAP: "It costs — the price."
UCAP: "It is — what it is like."
AKSI: Tunjuk text-anchor di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa membaca text-anchor bersama.
UCAP: "Read with me. Ready?"
UCAP: "Say it with me!"
AKSI: Tunggu semua siswa membaca text-anchor bersama.`,
          bantuan     : 'Jika siswa tidak ikut membaca bersama: tunjuk kalimat demi kalimat di papan tulis sambil membaca.',
          cue         : 'Dua pola This is dan It costs dimodelkan dua kali, sekali per item. Jangan tambahkan item ketiga atau penjelasan.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Tulis tiga item sample di papan tulis: "Soto Ayam — Rp 13.000 — warm and savory; Jus Jeruk — Rp 8.000 — sweet and fresh; Nasi Putih — Rp 5.000 — plain.".
UCAP: "Look at these items. I will ask questions."
UCAP: "Find the answer in the menu. Read, don't guess."
UCAP: "What is the first item?"
AKSI: Tunggu siswa menjawab dari papan tulis.
UCAP: "How much is it?"
AKSI: Tunggu siswa menjawab dari papan tulis.
UCAP: "What is it like?"
AKSI: Tunggu siswa menjawab dari papan tulis.
AKSI: Ulangi tanya jawab dengan item kedua dan item ketiga, siswa membaca jawaban dari papan tulis.
UCAP: "Good. Now you know how to read a menu."
AKSI: Hapus sample menu dari papan tulis.`,
          bantuan     : 'Jika siswa menjawab dari ingatan bukan dari papan tulis: ucapkan "Find it on the board. Read it.", tunggu siswa membaca sebelum menjawab.',
          cue         : 'Sample menu di layar ini berbeda dari Menu Card A dan B. Hapus sample menu sebelum Menu Card dibagikan di Layar 6. Text-anchor tetap di papan tulis.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Tulis kembali sample menu Layar 4 di papan tulis: "Soto Ayam — Rp 13.000; Jus Jeruk — Rp 8.000; Nasi Putih — Rp 5.000.".
UCAP: "What is the price of soto ayam?"
AKSI: Tunggu siswa membaca harga dari papan tulis.
UCAP: "Which is cheaper, jus jeruk or soto ayam?"
AKSI: Tunggu siswa membandingkan harga dari papan tulis.
UCAP: "How much do you need for jus jeruk and nasi putih together?"
AKSI: Tunggu siswa menghitung dari papan tulis.
AKSI: Ulangi satu pertanyaan harga lagi, siswa selalu membaca dari papan tulis.
AKSI: Hapus sample menu dari papan tulis.`,
          bantuan     : 'Jika siswa menebak harga tanpa membaca: tunjuk papan tulis, ucapkan "Find it here first.", tunggu siswa membaca sebelum menjawab.',
          cue         : 'Layar ini FLEX — lewati jika kelas sudah membaca harga dengan lancar di Layar 4. Respons siswa selalu dari teks, bukan dari ingatan.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan Menu Card A ke setengah siswa dan Menu Card B ke setengah siswa lainnya.
AKSI: Bagikan Complete Menu Table satu per siswa, semua baris kosong.
UCAP: "Don't show your card to your partner. Keep it to yourself."
👂 LISTEN FIRST
AKSI: Pegang satu Menu Card A.
UCAP: "I have Card A. Three items."
AKSI: Isi baris 1 sampai 3 pada Complete Menu Table di papan tulis dari Card A.
AKSI: Tunjuk baris 4 sampai 6 yang masih kosong di papan tulis.
UCAP: "These three, you cannot fill without asking."
AKSI: Tunjuk satu siswa yang memegang Card B.
UCAP: "What is item 4? How much? What is it like?"
AKSI: Tunggu siswa menjawab dari Card B.
AKSI: Isi baris 4 di papan tulis dari jawaban siswa.
UCAP: "Now your turn."
AKSI: Minta siswa duduk berpasangan, satu siswa A dengan satu siswa B yang berdekatan.
AKSI: Minta siswa A mengisi baris 1–3 dari Menu Card A.
AKSI: Minta siswa A bertanya ke siswa B untuk baris 4–6.
AKSI: Minta siswa A mengisi baris 4–6 berdasarkan jawaban siswa B.
AKSI: Minta siswa B mengisi baris 4–6 dari Menu Card B.
AKSI: Minta siswa B bertanya ke siswa A untuk baris 1–3.
AKSI: Minta siswa B mengisi baris 1–3 berdasarkan jawaban siswa A.
UCAP: "Which item is the cheapest? Which is the most expensive?"
AKSI: Beri waktu lima sampai enam menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa tidak tahu pertanyaan apa yang diucapkan: tunjuk baris 4 yang kosong di tabel mereka, ucapkan "Ask, what is item 4?", tunggu siswa meniru pertanyaan itu ke pasangannya.',
          cue         : 'Tunjuk baris 4 sampai 6 yang kosong secara konkret saat mengucapkan kalimat tentang asking. Menu Card tetap di tangan masing-masing, tidak diperlihatkan ke pasangan.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, demo ulang dengan menunjuk baris 4 yang kosong, sederhanakan ke satu item nama dan harga saja, lalu restart selama 60 detik.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang menemukan item termurah.
AKSI: Tunjuk satu sampai dua siswa yang mengangkat tangan.
UCAP: "What is the cheapest item? How much?"
AKSI: Tunggu jawaban tiap siswa yang ditunjuk dari tabel mereka.
AKSI: Tanyakan siapa yang menemukan item termahal.
AKSI: Tunjuk satu sampai dua siswa yang mengangkat tangan.
UCAP: "What is the most expensive item?"
AKSI: Tunggu jawaban tiap siswa yang ditunjuk dari tabel mereka.
AKSI: Angguk tanpa mengoreksi grammar.`,
          bantuan     : 'Jika siswa tidak bisa menjawab: ucapkan "Look at the Price column in your table. Which number is the smallest?", bantu siswa membaca tabel mereka sendiri.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 12 menit. Pertanyaan termurah dan termahal hanya bisa dijawab setelah tabel terisi lengkap.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Biarkan text-anchor tetap tampil di papan tulis.
AKSI: Biarkan Complete Menu Table tetap di meja siswa.
UCAP: "Now, you have Rp 20.000."
UCAP: "Look at your complete menu. Choose what you want to order."
UCAP: "Write two or three sentences."
UCAP: "Listen. I order nasi goreng."
UCAP: "It costs Rp 15.000."
UCAP: "It is spicy."
UCAP: "Now you choose. Your order, from your menu."
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan sampai sepuluh menit.
AKSI: Setelah menit kedua, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa freeze: tunjuk kolom Price di tabel mereka, ucapkan "Choose one item. Write, I order, then the name. It costs...", tunggu satu kalimat, lalu tinggalkan.',
          cue         : 'Text-anchor dan Complete Menu Table tetap tampil selama OUTPUT. Pilihan tiap siswa berbeda berdasarkan makanan dan kombinasi harga.',
          darurat     : 'Jika waktu tersisa 5 menit atau kurang dan sebagian besar siswa baru menulis satu kalimat → ucapkan "Two sentences. One item is enough for today.", lalu lanjut ke Layar 9.',
          diferensiasi: null,
          blok        : 'OUTPUT',
        },

        {
          id          : 'l9',
          tipe        : 'instruksi',
          teks        : `AKSI: Setelah delapan menit, beri sinyal tanpa menghentikan siswa yang masih menulis.
UCAP: "Two more minutes. Read your order. Does it make sense? Is it under Rp 20.000?"
AKSI: Pantau total harga pesanan semua siswa tanpa mengoreksi grammar.`,
          bantuan     : 'Jika siswa bertanya boleh pesan lebih dari dua: ucapkan "Yes, if the total is still under Rp 20.000.", arahkan siswa menjumlahkan harga dari tabel.',
          cue         : 'Connector yang muncul spontan diterima, tetapi tidak ada connector yang didorong di TP-12.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati, cek tabel siswa bersama-sama, tunjuk satu item yang belum ditulis, tanyakan "Can you add this? It costs only a little.".',
            sudahBisa   : 'Minta tambah satu kalimat alasan dengan connector, "I order mie goreng because it is not spicy.".',
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
          teks        : `AKSI: Tanyakan siapa yang mau membacakan pesanan mereka.
AKSI: Tunjuk satu sampai tiga siswa yang mengangkat tangan.
UCAP: "What did you order? From your seat is fine."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Did anyone order the same thing?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk satu siswa, ucapkan "What did you order? Nasi goreng or mie goreng?".',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Siswa melaporkan keputusan berdasarkan teks, bukan pengalaman personal.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today you read a menu. In English."
AKSI: Jeda 2 detik.
UCAP: "The name. The price. What it is like."
AKSI: Jeda 2 detik.
UCAP: "And you made a choice. Based on what you read."
AKSI: Jeda 1 detik.
UCAP: "Keep it."
AKSI: Tunjuk tulisan pesanan siswa dan Complete Menu Table di atas meja mereka.
UCAP: "Next time, we read something different."
AKSI: Jeda 1 detik.
UCAP: "Not food. A school announcement."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : '"And you made a choice. Based on what you read." merangkum mode Kluster D, merespons teks bukan memproduksi dari pengalaman.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C12;
