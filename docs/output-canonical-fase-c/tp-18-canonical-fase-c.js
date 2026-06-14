const TP_C18 = {

  // METADATA
  id             : 'tp-c18',
  nomor          : 18,
  kelas          : 6,
  nama           : 'Telling a Past Experience',
  tema           : 'Memproduksi untuk Orang Lain',
  kluster        : 'E — Memproduksi untuk Orang Lain',
  jenis          : 'Kompleks',
  text_anchor    : 'Last week I went to the market with my mother. We bought vegetables and fruit.',
  connector_aktif: 'and · then — natural dalam sekuens narasi; because, but, so — semua aktif dari TP-17, tersedia untuk elaborasi; tidak ada connector baru',
  recycle_fase_b : [
    'Last week I... (TP-05 Fase B)',
    'first, then, after that (TP-06 Fase B)',
    'On [day] I... (TP-07 Fase B)',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menceritakan pengalaman pribadi di masa lalu dalam minimal empat kalimat menggunakan past tense.',
    'Peserta didik dapat menggunakan connector then dan and dalam narasi pengalaman pribadi.',
    'Peserta didik dapat menceritakan pengalaman pribadi secara verbal ke pasangan dan menjawab pertanyaan spesifik dari pasangan.',
  ],
  vocab     : ['market', 'vegetables', 'fruit', 'experience', 'remember'],
  persiapan : [
    'Text-anchor "Last week I went to the market with my mother. We bought vegetables and fruit." ditulis di papan tulis sebelum siswa masuk, tetap tampil selama sesi.',
    'Lima pasangan past tense ditulis di pojok papan tulis saat Layar 3 atau disiapkan tertutup sebelum kelas dan dibuka saat Layar 3: "went — go · bought — buy · ate — eat · saw — see · met — meet". Tetap tampil sampai akhir sesi sebagai referensi.',
    'Kertas outline satu lembar kecil per siswa atau sudut buku tulis, untuk menulis dua sampai tiga kalimat di Layar 6.',
    'Papan tulis dan spidol untuk text-anchor dan lima pasangan past tense.',
  ],
  media     : [],
  printables: [
    { file: 'tp-c18-past-tense-ref.png', label: 'Past Tense Reference' },
    { file: 'tp-c18-fruit.png', label: 'Fruit' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi dalam Bahasa Inggris.' },
    { layar:  1, judul: 'Pembuka · Reactivation Tulisan TP-17', tujuan: 'Guru menjembatani opini TP-17 ke pengalaman masa lalu.' },
    { layar:  2, judul: 'Pembuka · Perkenalan Text-anchor', tujuan: 'Guru memperkenalkan pengalaman masa lalu dan konteks lampau.' },
    { layar:  3, judul: 'Inti · INPUT · Anchor dan Past Tense Noticing', tujuan: 'Guru menandai lima pasangan bentuk lampau.' },
    { layar:  4, judul: 'Inti · Demo Cerita Guru', tujuan: 'Guru memodelkan pengalaman empat kalimat secara lisan.' },
    { layar:  5, judul: 'Inti · Micro-output Satu Kalimat Pengalaman', tujuan: 'Guru memandu siswa melafalkan satu pengalaman.' },
    { layar:  6, judul: 'Inti · Outline Siswa Tulis Dua Tiga Kalimat', tujuan: 'Guru memandu siswa menulis outline pengalaman.' },
    { layar:  7, judul: 'Inti · INTERACT · Info Gap A Cerita B Tanya', tujuan: 'Guru memandu siswa bercerita dan bertanya bergantian.' },
    { layar:  8, judul: 'Inti · INTERACT Lanjutan Ganti Pasangan', tujuan: 'Guru memandu siswa bercerita ke pasangan baru.' },
    { layar:  9, judul: 'Inti · OUTPUT · Individual Writing Pengalaman Pribadi', tujuan: 'Guru memandu siswa menulis pengalaman lengkap.' },
    { layar: 10, judul: 'Inti · Revisi dan Past Tense Check', tujuan: 'Guru memandu siswa memeriksa bentuk lampau dan connector.' },
    { layar: 11, judul: 'Inti · Peer Quick Read', tujuan: 'Guru memandu siswa membaca dan merespons cerita pasangan.' },
    { layar: 12, judul: 'Penutup · Share Satu Kalimat', tujuan: 'Guru memandu siswa membagikan satu kalimat ke semua siswa.' },
    { layar: 13, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan memberi pratinjau TP-19.' },
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
UCAP: "Today, a story. Your story."
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
UCAP: "Last time, you gave your opinion."
AKSI: Jeda 2 detik.
UCAP: "Who remembers one sentence?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk satu siswa.
AKSI: Tunggu satu siswa menyebut kalimat dari tulisan TP-17 mereka.
AKSI: Angguk dan terima.
UCAP: "Today, not what you think."
AKSI: Jeda 1 detik.
UCAP: "What happened. Something you remember."
AKSI: Tunjuk text-anchor di papan tulis.`,
          bantuan     : 'Jika tidak ada yang merespons dalam 20 detik: ucapkan "Last time you wrote, I think. Who remembers one word after because?", tunggu satu kata, lalu lanjut.',
          cue         : 'Reactivation di layar ini berasal dari tulisan siswa sendiri di TP-17, bukan dari text-anchor baru. Satu kalimat cukup.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk text-anchor di papan tulis.
UCAP: "Listen. This is a past experience."
👂 LISTEN FIRST
AKSI: Baca text-anchor perlahan.
UCAP: "Last week I went to the market with my mother."
UCAP: "We bought vegetables and fruit."
UCAP: "When did this happen?"
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "Who went?"
AKSI: Tunggu siswa menjawab dari teks.
UCAP: "What did they buy?"
AKSI: Tunggu siswa menjawab dari teks.
AKSI: Angguk.
UCAP: "This happened last week. It is finished. It is in the past."
AKSI: Jeda 1 detik.
UCAP: "Today, you will tell your past experience. Something you remember."`,
          bantuan     : 'Jika siswa tidak bisa menjawab tentang yang dibeli: tunjuk kata "vegetables and fruit" di text-anchor, ucapkan "This word, what is it?", satu kata lalu lanjut.',
          cue         : 'Tiga pertanyaan when, who, what mengakses isi anchor tanpa grammar explanation. "Something you remember" menegaskan cerita milik siswa sendiri.',
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
          teks        : `AKSI: Tunjuk kata "went" di text-anchor.
UCAP: "Went is go in the past."
AKSI: Tunjuk kata "bought" di text-anchor.
UCAP: "Bought is buy in the past."
AKSI: Jeda 1 detik.
UCAP: "This happened last week. Past."
AKSI: Tulis atau buka lima pasangan di pojok papan tulis: "went — go · bought — buy · ate — eat · saw — see · met — meet".
AKSI: Tunjuk lima pasangan satu per satu, ucapkan masing-masing satu kali.
UCAP: "These are for your story."
UCAP: "When you went somewhere, went. When you ate, ate. When you saw something, saw."
UCAP: "What did you do last week? One thing. Say it."
AKSI: Tunjuk dua sampai tiga siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.`,
          bantuan     : 'Jika siswa menjawab dengan bentuk sekarang seperti "Last week I go to": ucapkan satu kata "Went.", tunggu siswa mengulang dengan bentuk yang benar, lalu lanjut tanpa komentar tambahan.',
          cue         : 'Lima pasangan adalah referensi praktis untuk outline, INTERACT, dan writing. Tidak ada drill, tidak ada tabel, tidak ada penjelasan paradigma.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjuk pojok papan tulis dengan lima pasangan.
UCAP: "Watch me. I tell my past experience."
👂 LISTEN FIRST
UCAP: "Last Saturday, I went to a restaurant with my family."
AKSI: Jeda 1 detik.
UCAP: "We ate noodles. It was delicious."
AKSI: Jeda 1 detik.
UCAP: "I also saw my old friend there. We talked for a long time."
AKSI: Jeda 1 detik.
UCAP: "I was happy because I had not seen her for a long time."
AKSI: Jeda 1 detik.
UCAP: "Four sentences. When, what I did, what I saw, how I felt."
AKSI: Angkat empat jari satu per satu.
UCAP: "Now, think. What is your experience? Last week? Last weekend?"
AKSI: Jeda 5 detik tanpa meminta sharing.`,
          bantuan     : 'Jika siswa bertanya boleh cerita tentang sekolah: jawab "Yes, any experience. Last week, last weekend, last holiday.", satu kalimat lalu lanjut.',
          cue         : 'Demo menggunakan cerita berbeda dari anchor, bukan pasar dan bukan Budi. Demo lisan saja, tidak ditulis di papan tulis.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `UCAP: "Your turn. One sentence. What did you do last week?"
AKSI: Tunjuk tiga sampai empat siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Untuk siswa yang menjawab dengan bentuk sekarang, tunjuk pojok papan tulis, ucapkan "Past?", biarkan siswa koreksi sendiri.
UCAP: "Good. Now, write your outline."`,
          bantuan     : 'Jika siswa diam saat ditunjuk: ucapkan "Last week I went to?", tunggu siswa melengkapi satu tempat.',
          cue         : 'Layar ini FLEX — lewati jika kelas sudah spontan merespons dengan bentuk lampau di Layar 3 atau Layar 4. Ini rehearsal lisan, bukan INTERACT.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, write your outline. Two to three sentences. Your past experience."
UCAP: "What happened. Who was there. What you did or saw."
UCAP: "Use the verbs from the board."
AKSI: Tunjuk pojok papan tulis dengan lima pasangan.
UCAP: "Don't talk yet. Write first."
AKSI: Minta siswa menulis outline secara individual.
AKSI: Beri waktu tiga sampai empat menit.
AKSI: Untuk siswa yang menatap kertas kosong, bisikkan "What did you eat last week? Or where did you go? Write that.".
AKSI: Untuk siswa yang menulis dalam bentuk sekarang, tunjuk pojok papan tulis, bisikkan "Past, went.".`,
          bantuan     : 'Jika siswa tidak bisa menulis dua kalimat: ucapkan "Write one sentence first, just where you went. Last week I went to.", tunggu satu kalimat, lalu tinggalkan.',
          cue         : '"Don\'t talk yet. Write first." adalah instruksi yang tidak boleh dilanggar. Outline ini fondasi INTERACT di Layar 7.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Minta satu siswa berdiri di depan sebagai contoh.
UCAP: "Read your outline to me. Tell me what happened."
AKSI: Tunggu siswa membacakan outline mereka.
AKSI: Tunggu siswa selesai bercerita sebelum bertanya.
UCAP: "Where exactly did you go?"
AKSI: Tunggu siswa menjawab satu kalimat.
UCAP: "Did you see? I listened, then I asked. My question came from what they said."
UCAP: "Now, with your partner. A tells. B listens and asks."
AKSI: Minta siswa duduk berpasangan, satu siswa A dengan satu siswa B.
AKSI: Minta siswa A membacakan outline ke siswa B.
AKSI: Minta siswa B mendengarkan dan mengajukan satu pertanyaan yang relevan dengan isi cerita siswa A.
AKSI: Minta siswa A menjawab pertanyaan siswa B.
AKSI: Minta siswa bergantian peran.
AKSI: Beri waktu enam sampai tujuh menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa B tidak tahu harus bertanya apa: bisikkan "Ask, where did you go? or who was with you?", dua pertanyaan starter yang relevan untuk cerita apa pun.',
          cue         : 'Pertanyaan siswa B muncul dari mendengarkan, bukan dari kartu pertanyaan. Untuk koreksi past tense, bisikkan satu kata dan tunjuk pojok papan tulis tanpa koreksi publik.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, minta satu siswa membaca kalimat pertama outline keras-keras dan ajukan satu pertanyaan sebagai siswa B, sederhanakan ke "A, read just your first sentence. B, ask one question.", lalu restart selama 2 menit per arah.',
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `UCAP: "Find a new partner. Someone different."
AKSI: Minta siswa berpindah ke pasangan baru.
UCAP: "Same activity. Tell your story. Partner asks one question."
AKSI: Minta siswa bercerita ke pasangan baru satu arah.
AKSI: Minta pasangan mengajukan satu pertanyaan yang relevan.
AKSI: Beri waktu tiga sampai empat menit.
AKSI: Pantau siswa yang di Layar 7 belum mendapat giliran atau kurang lancar.`,
          bantuan     : 'Jika siswa enggan berpindah: tunjuk satu pasangan kosong, ucapkan "Sit here. Tell your story again.".',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 15 menit sebelum akhir sesi. Ini kesempatan kedua bercerita dengan lebih lancar.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l9',
          tipe        : 'instruksi',
          teks        : `AKSI: Biarkan text-anchor dan lima pasangan tetap tampil di papan tulis.
UCAP: "Now, write. Your past experience. Full sentences."
UCAP: "Use your outline. Add more."
UCAP: "Four sentences minimum. What happened, who was there, what you did or saw."
UCAP: "Use past tense. Check the board if you need."
AKSI: Tunjuk pojok papan tulis.
AKSI: Minta siswa menulis secara individual.
AKSI: Beri waktu delapan menit.
AKSI: Setelah menit ketiga, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Untuk siswa yang menulis dalam bentuk sekarang, tunjuk pojok papan tulis, bisikkan "Past, went.", lalu tinggalkan.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa freeze: tunjuk outline mereka, ucapkan "Write your first sentence from here. Exactly this.", tunggu satu kalimat ditulis, lalu tinggalkan.',
          cue         : 'Circulate dimulai setelah tiga menit, barisan belakang diprioritaskan. Koreksi past tense selalu bisikan satu kata tanpa koreksi publik.',
          darurat     : 'Jika waktu tersisa 5 menit atau kurang dan sebagian besar siswa baru menulis satu kalimat → ucapkan "Three sentences, enough. Where you went. What you did. How you felt.", turunkan target tanpa menghentikan writing.',
          diferensiasi: null,
          blok        : 'OUTPUT',
        },

        {
          id          : 'l10',
          tipe        : 'instruksi',
          teks        : `AKSI: Beri sinyal untuk berhenti menulis.
UCAP: "Two more minutes. Read your story."
AKSI: Beri waktu siswa membaca tulisannya sendiri.
UCAP: "Check, did you use past tense? Look at the board if you need."
UCAP: "Add one connector. Then, and, because, or so."
AKSI: Pantau hasil tulisan semua siswa, prioritaskan barisan tengah yang belum tersentuh di Layar 9.`,
          bantuan     : 'Jika siswa tidak bisa menemukan connector yang pas: ucapkan "Add then between two sentences. First I went, then I saw.", satu contoh konkret lalu tinggalkan.',
          cue         : 'Kalimat perasaan dengan because adalah momen narasi lampau bertemu opini dari TP-17. Sambungan lintas TP yang natural.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Tunjuk satu kata bentuk sekarang dalam tulisan siswa, tunjuk pasangan di pojok papan tulis, bisikkan "Change this, past.", tunggu siswa koreksi.',
            sudahBisa   : 'Bisikkan "Add how you felt. I was happy because. Or add one more detail. Then I also saw.".',
          },
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa bertukar kertas dengan pasangan.
UCAP: "Read your partner's story. One minute. Silent."
AKSI: Beri waktu satu menit untuk membaca tulisan pasangan.
UCAP: "Tell your partner one thing that surprised you, or one question."
AKSI: Minta siswa menyampaikan satu kalimat lisan ke pasangan.
AKSI: Minta siswa bergantian peran.
AKSI: Beri waktu 30 detik per arah.`,
          bantuan     : 'Jika siswa tidak tahu harus bilang apa: ucapkan "Say, I want to know more about, or I didn\'t know you.", dua opsi konkret.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 8 menit. Peer response berfokus pada isi cerita, bukan koreksi grammar.',
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
          teks        : `AKSI: Tanyakan siapa yang mau membacakan satu kalimat dari ceritanya.
AKSI: Tunjuk dua sampai tiga siswa yang mengangkat tangan.
UCAP: "One sentence from your story. From your seat."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "When was that?"
AKSI: Tunggu siswa menjawab setiap kali.`,
          bantuan     : 'Jika tidak ada yang mau: tunjuk satu sampai dua siswa yang tadi aktif di blok INTERACT.',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Tidak ada evaluasi tense dari guru.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l13',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today, you told a story."
AKSI: Jeda 1 detik.
UCAP: "In the past. In English."
AKSI: Jeda 1 detik.
UCAP: "Your story. Not Budi's."
AKSI: Jeda 1 detik.
UCAP: "You remembered something, and you told it."
AKSI: Jeda 1 detik.
UCAP: "Keep your writing."
AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time, not what happened."
AKSI: Jeda 1 detik.
UCAP: "What it looks like. A place. Or something you know."
UCAP: "Good work today. See you next time."`,
          bantuan     : null,
          cue         : '"Your story. Not Budi\'s." merayakan pergeseran dari cerita fiksi TP-15 ke pengalaman pribadi siswa.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C18;
