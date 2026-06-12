const TP_C15 = {

  // METADATA
  id             : 'tp-c15',
  nomor          : 15,
  kelas          : 6,
  nama           : 'Reading: Short Story',
  tema           : 'Membaca Dunia',
  kluster        : 'D — Membaca Dunia',
  jenis          : 'Kompleks',
  text_anchor    : 'Last Sunday, Budi went to the market. He bought vegetables.',
  connector_aktif: 'then · and — tersedia untuk produksi bebas dalam narasi; tidak ada connector baru',
  recycle_fase_b : [
    'Yesterday I... / Last week I... (TP-05 Fase B)',
    'He has... / She has... (TP-02 Fase B)',
    'They live / They eat (TP-09 Fase B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat membaca separuh cerita dan menceritakannya secara verbal ke pasangan menggunakan bahasa sendiri.',
    'Peserta didik dapat menulis cerita lengkap dalam past tense menggunakan pola yang sudah dikenal.',
    'Peserta didik dapat menggunakan connector then untuk menghubungkan peristiwa dalam narasi.',
  ],
  vocab     : ['market', 'vegetables', 'carry', 'walk', 'happy', 'together'],
  persiapan : [
    'Story Card A satu per siswa versi A, berisi tiga kalimat: "Last Sunday, Budi went to the market. He bought vegetables. Then he met his friend, Sari." Dipegang siswa selama INTERACT, tidak diperlihatkan ke pasangan. Dibagikan pada Layar 3.',
    'Story Card B satu per siswa versi B, berisi tiga kalimat akhir: "She helped him carry the vegetables. They walked home together. They were happy." Dipegang siswa selama INTERACT, tidak diperlihatkan ke pasangan. Dibagikan pada Layar 3.',
    'Teks cerita lengkap enam kalimat, ditulis atau ditampilkan di papan tulis setelah Layar 7 selesai, tepat sebelum Layar 8 atau Layar 9: "1. Last Sunday, Budi went to the market. 2. He bought vegetables. 3. Then he met his friend, Sari. 4. She helped him carry the vegetables. 5. They walked home together. 6. They were happy." Tetap tampil saat OUTPUT.',
    'Text-anchor dua kalimat pertama "Last Sunday, Budi went to the market. He bought vegetables." ditulis di papan tulis sebelum siswa masuk, tampil dari Layar 2, tetap tampil sebagai bagian teks lengkap saat OUTPUT.',
    'Catatan distribusi: Card A ke setengah kelas, Card B ke setengah lainnya. Setiap pasangan terdiri dari satu siswa A dan satu siswa B.',
  ],
  media     : [],
  printables: [
    { file: 'tp-c15-story-card-a.png', label: 'Story Card A' },
    { file: 'tp-c15-story-card-b.png', label: 'Story Card B' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Kluster D', tujuan: 'Guru menjembatani membaca prosedur TP-14 ke cerita.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Text-anchor Awal Cerita', tujuan: 'Guru memperkenalkan awal cerita dan membuka rasa ingin tahu.' },
    { layar:  3, judul: 'Inti · INPUT · Story Cards Baca Setengah Cerita', tujuan: 'Guru memandu siswa membaca separuh cerita dari kartu.' },
    { layar:  4, judul: 'Inti · Past Tense Satu Noticing', tujuan: 'Guru menandai dua kata bentuk lampau dari cerita.' },
    { layar:  5, judul: 'Inti · Latihan Ceritakan Kartumu', tujuan: 'Guru melatih siswa menceritakan kartu sendiri secara lisan.' },
    { layar:  6, judul: 'Inti · Chain Practice Estafet Cerita', tujuan: 'Guru memandu estafet kalimat per kelompok kartu.' },
    { layar:  7, judul: 'Inti · INTERACT · Info Gap A Punya Awal B Punya Akhir', tujuan: 'Guru memandu siswa bertukar cerita lewat berbicara.' },
    { layar:  8, judul: 'Inti · Story Check Seberapa Lengkap', tujuan: 'Guru memandu siswa membandingkan cerita dengan teks lengkap.' },
    { layar:  9, judul: 'Inti · OUTPUT · Tulis Cerita Lengkap', tujuan: 'Guru memandu siswa menulis cerita lengkap dengan kalimat sendiri.' },
    { layar: 10, judul: 'Inti · Check and Extend', tujuan: 'Guru memandu siswa memeriksa awal dan akhir cerita.' },
    { layar: 11, judul: 'Penutup · Share Satu Kalimat', tujuan: 'Guru memandu siswa membagikan satu kalimat cerita.' },
    { layar: 12, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-16.' },
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
UCAP: "Today, a story."`,
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
UCAP: "Last time you read instructions."
AKSI: Jeda 2 detik.
UCAP: "One sentence. Who remembers?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk satu siswa.
AKSI: Tunggu satu siswa menyebut kalimat dari TP-14 mereka.
AKSI: Angguk dan terima.
UCAP: "Good. Today, we read something different."
UCAP: "A story."`,
          bantuan     : 'Jika tidak ada yang merespons dalam 20 detik: ucapkan contoh "First, get the oranges.", lalu lanjut ke Layar 2.',
          cue         : 'Reactivation di layar ini berasal dari tulisan siswa sendiri di TP-14, bukan dari text-anchor baru. Satu respons cukup.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk text-anchor di papan tulis.
UCAP: "Look at the board. This is the beginning of a story."
👂 LISTEN FIRST
AKSI: Baca text-anchor perlahan sambil menunjuk tiap kalimat.
UCAP: "Last Sunday, Budi went to the market."
UCAP: "He bought vegetables."
UCAP: "Budi. Last Sunday. The market. Vegetables."
UCAP: "That is the beginning. But what happened next?"
AKSI: Jeda 2 detik tanpa menjawab.`,
          bantuan     : 'Jika siswa spontan menjawab tentang kelanjutan cerita: angguk, ucapkan "Good guess. Let\'s find out.", tidak perlu mengonfirmasi atau mengoreksi.',
          cue         : '"What happened next?" sengaja tidak dijawab di layar ini. Rasa ingin tahu ini mendorong INTERACT di Layar 7.',
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
          teks        : `AKSI: Bagikan Story Card A ke setengah siswa dan Story Card B ke setengah siswa lainnya secara bergantian.
UCAP: "You have a card. Read your card, only your card."
UCAP: "Don't show it to your partner yet."
UCAP: "Two minutes. Read it. Understand it."
AKSI: Beri waktu dua menit untuk membaca kartu secara individual.
AKSI: Tunjuk dua siswa yang memegang Card A.
UCAP: "Card A, what happened? In one sentence."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Tunjuk dua siswa yang memegang Card B.
UCAP: "Card B, what happened? In one sentence."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Angguk tanpa mengoreksi dan tanpa menyambung cerita.`,
          bantuan     : 'Jika siswa tidak mengerti kartu mereka setelah dua menit: dekati, baca kalimat pertama kartu bersama mereka, tidak perlu menerjemahkan seluruh kartu.',
          cue         : 'Siswa A hanya tahu kalimat 1 sampai 3, siswa B hanya tahu kalimat 4 sampai 6. Konten kartu yang bukan milik siswa tidak dibacakan di layar ini.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk kata "went" di text-anchor.
UCAP: "Went is go in the past."
AKSI: Jeda 1 detik.
AKSI: Tunjuk kata "bought" di text-anchor.
UCAP: "Bought is buy in the past."
AKSI: Jeda 1 detik.
UCAP: "This story happened last Sunday. So everything is in the past."
UCAP: "When you tell this story, use the past."`,
          bantuan     : 'Jika siswa kebingungan apa arti past: beri penjelasan singkat bahwa past adalah bentuk lampau, sudah terjadi kemarin atau dulu, satu kalimat lalu lanjut.',
          cue         : 'Dua noticing, dua kata, tidak ada tabel atau drill. Past tense muncul dari konteks cerita, bukan dari aturan.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Practice telling your card. Use then between sentences. Don't read, tell."
AKSI: Tunjuk text-anchor di papan tulis.
UCAP: "Budi went to the market. Then he bought vegetables. Then he met Sari."
AKSI: Beri waktu satu sampai dua menit siswa berbisik mempraktikkan kalimat dari kartu mereka.
AKSI: Pantau praktik lisan semua siswa, perhatikan penggunaan past tense.
UCAP: "Ready? You will tell your partner in a moment."`,
          bantuan     : 'Jika siswa kesulitan tidak membaca: ucapkan "Glance at your card, then look up and say it.", perbolehkan referensi ke kartu tapi dorong melihat ke atas saat berbicara.',
          cue         : 'Latihan ini mempersiapkan siswa menceritakan kartu tanpa menunjukkannya di Layar 7.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk tiga siswa yang memegang Card A satu per satu.
AKSI: Minta siswa A pertama menceritakan kalimat 1 dari kartunya.
AKSI: Minta siswa A kedua melanjutkan kalimat 2.
AKSI: Minta siswa A ketiga melanjutkan kalimat 3.
UCAP: "Good. That is Card A. Now, Card B. Different students."
AKSI: Tunjuk tiga siswa yang memegang Card B satu per satu.
AKSI: Minta tiga siswa B melanjutkan estafet tiga kalimat kartu B.`,
          bantuan     : 'Jika siswa tidak bisa melanjutkan estafet: ucapkan kata pertama kalimat tersebut, tunggu siswa melanjutkan.',
          cue         : 'Layar ini FLEX — lewati jika kelas sudah lancar menceritakan kartu di Layar 5. Setiap kelompok hanya menceritakan kartunya sendiri.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk berpasangan, satu siswa A dengan satu siswa B.
UCAP: "Now, tell your partner your half of the story."
UCAP: "Don't show your card. Tell your partner."
👂 LISTEN FIRST
AKSI: Pegang Card A dan tunjukkan ke semua siswa tanpa membacakan isinya ke satu siswa.
UCAP: "I have Card A. I will tell, not show."
AKSI: Tunjuk satu siswa yang memegang Card B.
UCAP: "Listen. Budi went to the market last Sunday. He bought vegetables. Then he met his friend, Sari."
UCAP: "Now, what is on your card?"
AKSI: Tunggu siswa menjawab dari kartunya.
UCAP: "Now I know the full story. Your turn."
AKSI: Minta siswa A menceritakan isi Card A ke siswa B.
AKSI: Minta siswa B mendengarkan dan mengajukan satu pertanyaan.
AKSI: Minta siswa A menjawab pertanyaan siswa B.
AKSI: Minta siswa B menceritakan isi Card B ke siswa A.
AKSI: Minta siswa A mendengarkan dan mengajukan satu pertanyaan.
AKSI: Minta siswa B menjawab pertanyaan siswa A.
AKSI: Beri waktu enam sampai tujuh menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa memperlihatkan kartu: tepuk bahu, ucapkan "Don\'t show, tell. Put the card face down while you talk.", tunggu siswa mengikuti.',
          cue         : 'Story Card tidak diperlihatkan ke pasangan. Informasi hanya berpindah lewat bahasa lisan.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, ceritakan satu kalimat dari Card A tanpa menunjukkan kartu, sederhanakan ke "Just say the first sentence on your card. Then stop. Let your partner ask.", lalu restart selama 60 detik per arah.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Tampilkan teks cerita lengkap enam kalimat di papan tulis.
UCAP: "Here is the complete story. Compare with what your partner told you."
AKSI: Beri waktu satu sampai dua menit untuk membaca cerita lengkap.
UCAP: "Did you get all six events? Missing anything?"
AKSI: Tunggu dua sampai tiga respons spontan dari semua siswa.`,
          bantuan     : 'Jika tidak ada yang merespons: tunjuk kalimat 4 di papan tulis, tanyakan "Did your partner tell you this part?".',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 10 menit sebelum OUTPUT. Verifikasi ini tentang kelengkapan, bukan benar atau salah.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l9',
          tipe        : 'instruksi',
          teks        : `AKSI: Biarkan teks cerita lengkap tetap tampil di papan tulis.
UCAP: "Now, write the complete story. In your own words."
UCAP: "Use past tense. Use then between events."
UCAP: "Don't copy word for word. Write it your way."
UCAP: "Listen."
AKSI: Ucapkan "Last Sunday, Budi" agar siswa melanjutkan sendiri.
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan sampai sepuluh menit.
AKSI: Setelah menit ketiga, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa menulis bentuk sekarang seperti "Budi go to the market": dekati, bisikkan "Past, went.", satu kata lalu tinggalkan.',
          cue         : 'Teks cerita lengkap tetap tampil selama OUTPUT. Yang dilarang menyalin enam kalimat persis, yang diinginkan narasi sama dalam kalimat sendiri.',
          darurat     : 'Jika waktu tersisa 5 menit atau kurang dan sebagian besar siswa baru menulis dua kalimat → ucapkan "Three events. That is enough. Budi went. He met Sari. The end.", lalu lanjut ke Layar 10.',
          diferensiasi: null,
          blok        : 'OUTPUT',
        },

        {
          id          : 'l10',
          tipe        : 'instruksi',
          teks        : `AKSI: Setelah delapan menit, beri sinyal tanpa menghentikan siswa yang masih menulis.
UCAP: "Two more minutes. Read your story. Does it have a beginning and an end?"
AKSI: Pantau hasil tulisan semua siswa tanpa mengoreksi grammar.`,
          bantuan     : 'Jika siswa sudah menulis semua enam peristiwa tapi tanpa connector: tunjuk salah satu jarak antara dua kalimat, ucapkan "Add then here.", tunggu siswa menambahkan sendiri.',
          cue         : 'Diferensiasi sudah bisa mendorong respons personal terhadap cerita, pendapat yang berbeda-beda per siswa.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Dekati, tunjuk kalimat terakhir cerita di papan tulis, tanyakan "Did you write the ending? Add this.".',
            sudahBisa   : 'Minta tambah satu kalimat opini atau reaksi personal, "I like this story because it is about helping each other.".',
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
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau membacakan satu kalimat dari cerita mereka.
AKSI: Tunjuk satu sampai tiga siswa yang mengangkat tangan.
UCAP: "One sentence from your story. From your seat is fine."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Is this from the beginning or the end?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk satu sampai dua siswa yang tadi aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Pertanyaan "Beginning or end?" menjaga kelas terhubung dengan struktur cerita.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l12',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today you read a story. In English."
AKSI: Jeda 2 detik.
UCAP: "You read half. Your partner told you the rest."
AKSI: Jeda 2 detik.
UCAP: "Then you wrote the whole story. In the past."
AKSI: Jeda 1 detik.
UCAP: "Keep it."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time, we write."
AKSI: Jeda 1 detik.
UCAP: "Not instructions. Not a story."
UCAP: "Your own response. About what you read."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : '"You read half. Your partner told you the rest." merangkum pencapaian TP-15, rekonstruksi narasi melalui komunikasi.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C15;
