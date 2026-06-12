const TP_C19 = {

  // METADATA
  id             : 'tp-c19',
  nomor          : 19,
  kelas          : 6,
  nama           : 'Describing a Place or Thing',
  tema           : 'Memproduksi untuk Orang Lain',
  kluster        : 'E — Memproduksi untuk Orang Lain',
  jenis          : 'Kompleks',
  text_anchor    : 'The library is quiet. It has many books. I go there every week because I love reading.',
  connector_aktif: 'because — ada di anchor, fokus produksi; and · but · so — semua aktif dari TP-17; tidak ada connector baru',
  recycle_fase_b : [
    'She/He has... (TP-02 Fase B)',
    'I like... because... (TP-06/13 Fase B/C)',
    'There is / There are... (TP-03 Fase B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat mendeskripsikan satu tempat atau benda yang dikenal dalam minimal empat kalimat menggunakan present tense deskriptif.',
    'Peserta didik dapat menggunakan tiga elemen deskripsi: apa yang ditampilkan, apa yang dimiliki, dan koneksi personal (why I go there).',
    'Peserta didik dapat merespons deskripsi pasangan dengan agree/disagree dan alasan personal.',
  ],
  vocab     : ['quiet', 'busy', 'clean', 'crowded', 'simple', 'owner', 'comfortable', 'peaceful'],
  persiapan : [
    'Text-anchor "The library is quiet. It has many books. I go there every week because I love reading." ditulis di papan tulis sebelum siswa masuk, tetap tampil selama sesi.',
    'Papan tulis dan spidol untuk text-anchor dan empat kata topik jika diperlukan. Tidak ada media tambahan.',
    'Kertas biasa atau buku tulis siswa untuk draft awal di Layar 6.',
  ],
  media     : [],
  printables: [
    { file: 'tp-c19-quiet-place.png', label: 'Quiet Place' },
    { file: 'tp-c19-busy-place.png', label: 'Busy Place' },
    { file: 'tp-c19-crowded-place.png', label: 'Crowded Place' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Tulisan TP-18', tujuan: 'Guru menjembatani narasi TP-18 ke deskripsi tempat.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Text-anchor', tujuan: 'Guru memperkenalkan deskripsi dan tiga elemennya.' },
    { layar:  3, judul: 'Inti · INPUT · Analisis Struktur Deskripsi dan Register', tujuan: 'Guru menjelaskan register deskripsi dan tiga elemen.' },
    { layar:  4, judul: 'Inti · Demo Deskripsi Guru', tujuan: 'Guru memodelkan deskripsi tempat secara lisan.' },
    { layar:  5, judul: 'Inti · Micro-output Nama Tempat dan Satu Kalimat', tujuan: 'Guru memandu siswa menyebut tempat dan satu deskripsi.' },
    { layar:  6, judul: 'Inti · Draft Awal Dua Tiga Kalimat Deskripsi', tujuan: 'Guru memandu siswa menulis draft deskripsi.' },
    { layar:  7, judul: 'Inti · INTERACT · Choice Gap A Describe B Responds', tujuan: 'Guru memandu siswa mendeskripsikan dan merespons.' },
    { layar:  8, judul: 'Inti · Sharing Kelas Dua Deskripsi', tujuan: 'Guru memandu dua siswa berbagi draft deskripsi.' },
    { layar:  9, judul: 'Inti · OUTPUT · Individual Writing Deskripsi Lengkap', tujuan: 'Guru memandu siswa menulis deskripsi lengkap.' },
    { layar: 10, judul: 'Inti · Revisi dan Connector Check', tujuan: 'Guru memandu siswa memeriksa connector dan koneksi personal.' },
    { layar: 11, judul: 'Inti · Peer Quick Read', tujuan: 'Guru memandu siswa membaca dan merespons deskripsi pasangan.' },
    { layar: 12, judul: 'Penutup · Share Satu Kalimat', tujuan: 'Guru memandu siswa membagikan satu kalimat ke semua siswa.' },
    { layar: 13, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-20.' },
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
UCAP: "Today, a place. Your place."
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
UCAP: "Last time, you told a story. Something that happened."
AKSI: Jeda 2 detik.
UCAP: "Who remembers one sentence?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk satu siswa.
AKSI: Tunggu satu siswa menyebut kalimat dari tulisan TP-18 mereka.
AKSI: Angguk dan terima.
UCAP: "Today, not what happened."
AKSI: Jeda 1 detik.
UCAP: "What it looks like."
AKSI: Tunjuk text-anchor di papan tulis.`,
          bantuan     : 'Jika tidak ada yang merespons dalam 20 detik: ucapkan "Last time you wrote, Last week I. Who remembers one word after that?", tunggu satu kata, lalu lanjut.',
          cue         : 'Reactivation di layar ini berasal dari tulisan siswa sendiri di TP-18, bukan dari text-anchor baru. Satu kalimat cukup.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk text-anchor di papan tulis.
UCAP: "Listen. This is a description."
👂 LISTEN FIRST
AKSI: Baca text-anchor perlahan sambil menunjuk tiap kalimat.
UCAP: "The library is quiet."
UCAP: "It has many books."
UCAP: "I go there every week because I love reading."
UCAP: "What is the library like?"
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "What does it have?"
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "Why does she go there?"
AKSI: Tunggu siswa menjawab dari teks.
AKSI: Angguk.
UCAP: "Three things. What it is like, what it has, why I go there."
AKSI: Angkat tiga jari satu per satu.`,
          bantuan     : 'Jika siswa tidak bisa menjawab tentang library: tunjuk kata "quiet" di text-anchor, ucapkan "This word, quiet. The library is?", tunggu satu kata.',
          cue         : 'Tiga pertanyaan mengakses tiga elemen deskripsi sebelum guru memberi nama eksplisit di Layar 3.',
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
          teks        : `AKSI: Tunjuk text-anchor di papan tulis.
UCAP: "This is a description, what it is like now. Not a story about the past."
UCAP: "A description has three parts."
AKSI: Tunjuk kalimat 1 di text-anchor.
UCAP: "One, what it is like."
AKSI: Tunjuk kalimat 2 di text-anchor.
UCAP: "Two, what it has."
AKSI: Tunjuk kalimat 3 di text-anchor.
UCAP: "Three, my connection, why I go there."
AKSI: Tunjuk kata "because" di kalimat 3.
UCAP: "Because, the reason."
UCAP: "Think of a place you know. One place. What is it like?"
AKSI: Tunjuk dua sampai tiga siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Untuk siswa yang menjawab dengan bentuk lampau, angguk lalu bisikkan "Now present. It is.".`,
          bantuan     : 'Jika siswa tidak bisa menyebut satu kalimat tentang tempat mereka: ucapkan "Name one place, one word. Then, it is.", tunggu dua kata, lalu lanjut.',
          cue         : '"This is a description, what it is like now. Not a story about the past." diucapkan satu kali sebelum analisis tiga elemen, tidak diulang.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk text-anchor di papan tulis.
UCAP: "Watch me. I describe a different place."
👂 LISTEN FIRST
UCAP: "I know a small warung near my house."
AKSI: Jeda 1 detik.
UCAP: "It is simple. But the food is always delicious."
AKSI: Jeda 1 detik.
UCAP: "The owner is kind. She always remembers what I like."
AKSI: Jeda 1 detik.
UCAP: "I go there every morning because it makes me feel at home."
AKSI: Jeda 1 detik.
UCAP: "What is it like? What does it have? Why I go there."
AKSI: Angkat tiga jari satu per satu.
UCAP: "Now, think. What is your place? One minute."
AKSI: Jeda 60 detik tanpa meminta sharing.`,
          bantuan     : 'Jika siswa bertanya boleh mendeskripsikan benda bukan tempat: jawab "Yes, a thing you know well. Describe it the same way.", satu kalimat lalu lanjut.',
          cue         : 'Demo menggunakan warung, bukan library dan bukan market. Demo lisan saja, tidak ditulis di papan tulis.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `UCAP: "Your place. Tell me the name. And one sentence, what is it like?"
AKSI: Tunjuk tiga sampai empat siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Untuk siswa yang menjawab dengan bentuk lampau, tunjuk text-anchor, bisikkan "Present, it is.".
UCAP: "Good. Now, write your description."`,
          bantuan     : 'Jika siswa diam saat ditunjuk: ucapkan "Name one place. Then, it is, then one word.", tunggu dua kata.',
          cue         : 'Layar ini FLEX — lewati jika kelas sudah spontan menyebut tempat mereka di Layar 3 atau Layar 4.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, choose your place. Write a short description."
UCAP: "Two to three sentences."
AKSI: Angkat tiga jari sambil menyebut tiga elemen.
UCAP: "What it is like. What it has. Why you go there."
UCAP: "Don't talk yet. Write first."
AKSI: Minta siswa menulis draft secara individual.
AKSI: Beri waktu tiga sampai empat menit.
AKSI: Setelah menit kedua, untuk siswa yang menulis narasi seperti "Last week I went to", bisikkan "Describe, what is it like? The place is.", lalu tinggalkan.
AKSI: Untuk siswa yang meniru text-anchor library persis, bisikkan "What's different about your library? Change one detail.", lalu tinggalkan.`,
          bantuan     : 'Jika siswa tidak bisa memilih tempat: ucapkan "Where do you go often? Or where do you feel comfortable? Write that place.", lalu tinggalkan.',
          cue         : '"Don\'t talk yet. Write first." mencegah siswa mengikuti pilihan pasangan. Nudge di sini tentang register, bukan tense.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk berpasangan, satu siswa A dengan satu siswa B.
👂 LISTEN FIRST
AKSI: Bicara ke satu siswa di depan dan bacakan deskripsi contoh.
UCAP: "The warung near my house is small and simple. But the food is always delicious. I go there because it makes me feel at home."
UCAP: "What do you think? Would you like a place like that? Or do you prefer something different?"
AKSI: Tunggu siswa merespons dari perspektif sendiri.
UCAP: "She listened, then gave her own opinion. That is choice gap."
UCAP: "Now, with your partner."
AKSI: Minta siswa A membacakan draft deskripsi ke siswa B.
AKSI: Minta siswa B merespons, setuju dengan kualitas tempat A atau lebih suka tempat yang berbeda, dengan alasan.
AKSI: Minta siswa bergantian peran.
AKSI: Beri waktu lima sampai enam menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa B hanya berkata "nice" tanpa elaborasi: bisikkan "Why? Do you agree?", tunggu satu kalimat.',
          cue         : 'Respons siswa B harus relevan terhadap deskripsi siswa A. Bahkan untuk jenis tempat yang sama, kualitas yang dianggap penting bisa berbeda.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, bacakan satu kalimat draft sendiri dan minta satu siswa merespons agree atau disagree, sederhanakan ke "A, read your first sentence. B, say agree or disagree. Then why.", lalu restart selama 2 menit per arah.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau membacakan dua kalimat dari draftnya.
AKSI: Tunjuk dua siswa yang mengangkat tangan.
UCAP: "Read your draft, two sentences. From your seat."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "What kind of place is this?"
AKSI: Tunggu respons satu kata dari semua siswa setiap kali.
UCAP: "Different places. Now, write more."`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk satu sampai dua siswa yang tadi aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 15 menit sebelum akhir sesi.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l9',
          tipe        : 'instruksi',
          teks        : `AKSI: Biarkan text-anchor tetap tampil di papan tulis.
UCAP: "Now, write your full description. More sentences."
UCAP: "Start from your draft. Add more."
UCAP: "Four sentences minimum. Use because."
AKSI: Tunjuk kata "because" di text-anchor.
UCAP: "Use but or so if you can."
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan menit.
AKSI: Setelah menit ketiga, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Untuk siswa yang masih menulis narasi, bisikkan "Describe, present. The place is.", lalu tinggalkan.
AKSI: Untuk siswa yang meniru text-anchor persis, bisikkan "What's different about your library? Change one detail, your words.", lalu tinggalkan.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa freeze: tunjuk draft Layar 6 mereka, ucapkan "Start from here. Write sentence one again.", tunggu satu kalimat, lalu tinggalkan.',
          cue         : 'Circulate dimulai setelah tiga menit, barisan belakang diprioritaskan. Anchor adalah model struktur, bukan template yang disalin.',
          darurat     : 'Jika waktu tersisa 5 menit atau kurang dan sebagian besar siswa baru menulis satu kalimat → ucapkan "Three sentences, enough. What it is like. What it has. Why you like it.", turunkan target tanpa menghentikan writing.',
          diferensiasi: null,
          blok        : 'OUTPUT',
        },

        {
          id          : 'l10',
          tipe        : 'instruksi',
          teks        : `AKSI: Beri sinyal untuk berhenti menulis.
UCAP: "Two more minutes. Read your description."
AKSI: Beri waktu siswa membaca tulisannya sendiri.
UCAP: "Did you use because? Try to add but or so."
UCAP: "And, add your connection. Why you go there. Or why you like it."
AKSI: Untuk siswa yang masih menulis narasi, bisikkan "Describe, present tense. It is.".
AKSI: Pantau hasil tulisan semua siswa, prioritaskan barisan tengah yang belum tersentuh di Layar 9.`,
          bantuan     : 'Jika siswa tidak bisa menambah but: ucapkan "Is there one thing that is not perfect about the place? Write that with but.", satu instruksi konkret lalu tinggalkan.',
          cue         : 'Koneksi personal membuat output berbeda secara bermakna antar siswa. Deskripsi yang hanya berisi fakta valid tapi tidak personal.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Tunjuk kalimat terakhir deskripsi, ucapkan "Why do you like it? Add, because.", tunggu siswa menulis satu kalimat.',
            sudahBisa   : 'Bisikkan "Add a contrast. But sometimes it is. Or but I wish it had.".',
          },
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa bertukar kertas dengan pasangan.
UCAP: "Read your partner's description. One minute. Silent."
AKSI: Beri waktu satu menit untuk membaca tulisan pasangan.
UCAP: "Tell your partner. Would you like to visit this place? Why?"
AKSI: Minta siswa menjawab satu kalimat ke pasangan.
AKSI: Minta siswa bergantian peran.
AKSI: Beri waktu 30 detik per arah.`,
          bantuan     : 'Jika siswa tidak tahu harus bilang apa: ucapkan "Say, I want to visit because, or I prefer a different place because.", dua opsi lalu tinggalkan.',
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
          id          : 'l12',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau membacakan satu kalimat dari deskripsinya.
AKSI: Tunjuk dua sampai tiga siswa yang mengangkat tangan.
UCAP: "One sentence from your description. From your seat."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "What kind of place is that?"
AKSI: Tunggu respons satu kata dari semua siswa setiap kali.`,
          bantuan     : 'Jika tidak ada yang mau: panggil nama satu sampai dua siswa yang tadi aktif di blok INTERACT, ucapkan "Can you share one sentence?".',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Tidak ada evaluasi dari guru.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l13',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today, you described a place."
AKSI: Jeda 1 detik.
UCAP: "You said what it is like. What it has. Why you go there."
AKSI: Jeda 1 detik.
UCAP: "In English. Your words."
AKSI: Jeda 1 detik.
UCAP: "Keep your writing."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time, everything you know."
AKSI: Jeda 1 detik.
UCAP: "Your place. Your opinion. Your experience."
AKSI: Jeda 1 detik.
UCAP: "One piece of writing."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : '"Your place. Your opinion. Your experience." merujuk ke TP-19, TP-17, dan TP-18 secara tersirat sebagai pratinjau TP-20.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C19;
