const TP_C22 = {

  // METADATA
  id             : 'tp-c22',
  nomor          : 22,
  kelas          : 6,
  nama           : 'My World Project',
  tema           : 'Capstone',
  kluster        : '— (Capstone)',
  jenis          : 'Capstone',
  text_anchor    : null,
  connector_aktif: 'semua connector TP-01 sampai TP-20 tersedia; because paling natural; tidak ada connector baru',
  recycle_fase_b : [
    'semua pola TP-01 sampai TP-20 tersedia; pola yang muncul ditentukan pilihan topik siswa, bukan instruksi guru',
  ],

  // KURIKULUM
  indikator : [
    'Peserta didik dapat memproduksi teks komunikatif minimal tiga kalimat dalam register dan tipe pilihan sendiri (opinion/story/description/combination).',
    'Peserta didik dapat memproduksi visual yang relevan dengan teks (gambar, diagram, peta, atau deskripsi visual).',
    'Peserta didik dapat menjelaskan proyek mereka secara lisan dalam 2–3 kalimat kepada guru ketika diminta.',
  ],
  vocab     : ['opinion', 'story', 'description', 'combination', 'topic', 'visual', 'project', 'register', 'informal', 'formal'],
  persiapan : [
    'Papan kiri ditulis sebelum siswa masuk, tetap tampil selama sesi: "Opinion · Story · Description · Combination".',
    'Rubrik empat kriteria ditulis di pojok papan tulis saat Layar 5, tetap tampil sampai akhir sesi, empat baris terpisah bukan tabel: "1. Text: is there a communicative text? 2. Content: is it about your own topic? 3. Visual: does the image support the text? 4. Oral: can you explain your project in 2-3 sentences?".',
    'Choice Card satu per siswa, empat bagian: "My topic: ___", "Register: informal atau formal", "Visual: drawing, diagram, map, atau photo description", "My first sentence: ___". Dibagikan pada Layar 6, tidak sebelumnya.',
    'Poster mini demo guru disiapkan sebelum kelas, satu lembar kertas dengan gambar tangan warung dan tulisan "Warung Pak Hendra" plus tiga kalimat: "I think Warung Pak Hendra is the best warung near my school. Last week I went there with my friends and we had mie ayam. It is small but the food is always delicious." Gambar terlihat dibuat tangan. Setelah Layar 4 selesai, poster diletakkan menjauh dan tidak ditampilkan lagi.',
    'Papan tulis dan spidol. Tidak ada kalimat contoh di papan tulis selama produksi.',
  ],
  media     : [],
  printables: [
    { file: 'tp-c22-choice-card.png', label: 'Project Choice Card' },
  ],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Kelas Siap', tujuan: 'Guru menenangkan kelas dan membuka sesi terakhir.' },
    { layar:  1, judul: 'Pembuka · Reactivation Tulisan TP-21', tujuan: 'Guru menjembatani membaca teks dunia nyata ke memproduksi teks sendiri.' },
    { layar:  2, judul: 'Pembuka · My World Project', tujuan: 'Guru memperkenalkan proyek dan empat jenis teks.' },
    { layar:  3, judul: 'Inti · INPUT · Orientasi Empat Jenis Teks', tujuan: 'Guru memberi label empat jenis teks.' },
    { layar:  4, judul: 'Inti · Demo Guru Poster Mini Warung Pak Hendra', tujuan: 'Guru memodelkan proyek lengkap secara lisan.' },
    { layar:  5, judul: 'Inti · Rubrik Empat Kriteria', tujuan: 'Guru menjelaskan empat kriteria proyek.' },
    { layar:  6, judul: 'Inti · INTERACT · Choice Card Rencanakan Proyekmu', tujuan: 'Guru memandu siswa merencanakan proyek di Choice Card.' },
    { layar:  7, judul: 'Inti · Share Choice Card dengan Pasangan', tujuan: 'Guru memandu siswa berbagi dan bertanya rencana proyek.' },
    { layar:  8, judul: 'Inti · Micro-output Kalimat Pertama Lisan', tujuan: 'Guru memandu siswa melafalkan kalimat pertama.' },
    { layar:  9, judul: 'Inti · OUTPUT · Produksi Teks', tujuan: 'Guru memandu siswa menulis teks proyek.' },
    { layar: 10, judul: 'Inti · Produksi Visual', tujuan: 'Guru memandu siswa membuat visual proyek.' },
    { layar: 11, judul: 'Inti · Circulate dan Rubrik Check', tujuan: 'Guru memandu siswa memeriksa proyek dengan rubrik.' },
    { layar: 12, judul: 'Penutup · Sampling Lisan', tujuan: 'Guru mendekati siswa individual menanyakan proyek.' },
    { layar: 13, judul: 'Penutup · Gallery Walk', tujuan: 'Guru memandu siswa membaca proyek teman.' },
    { layar: 14, judul: 'Penutup · Share Satu Kalimat', tujuan: 'Guru memandu siswa membagikan satu kalimat ke semua siswa.' },
    { layar: 15, judul: 'Penutup · Closure', tujuan: 'Guru menutup sesi dan menutup Fase C.' },
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
UCAP: "Today is the last day."
AKSI: Jeda 2 detik.`,
    bantuan: 'Jika tidak ada respons: angkat tangan, tunggu siswa ikut menjawab.',
    cue    : 'Papan kiri sudah bertuliskan empat jenis teks sebelum siswa masuk. Choice Card belum dibagikan.',
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
UCAP: "Last time, you read texts from the real world."
AKSI: Jeda 2 detik.
UCAP: "Who remembers one sentence from their response?"
AKSI: Tunggu siswa mengangkat tangan.
AKSI: Tunjuk satu siswa.
AKSI: Tunggu satu siswa menyebut kalimat dari tulisan TP-21 mereka.
AKSI: Angguk dan terima.
UCAP: "Today, last time."
AKSI: Jeda 1 detik.
UCAP: "You don't read someone else's text."
AKSI: Jeda 1 detik.
UCAP: "You create your own."`,
          bantuan     : 'Jika tidak ada yang merespons dalam 20 detik: ucapkan "Last time you wrote about a real text. Who remembers one word?", tunggu satu kata, lalu lanjut.',
          cue         : 'Reactivation di layar ini berasal dari tulisan siswa sendiri di TP-21, bukan dari text-anchor baru. Satu kalimat cukup.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l2',
          tipe        : 'instruksi',
          teks        : `UCAP: "This is My World Project."
AKSI: Tulis di tengah papan tulis: "MY WORLD PROJECT".
UCAP: "One project. Your topic. Your words. Your image."
AKSI: Jeda 1 detik.
UCAP: "By the end, you have something real."
AKSI: Tunjuk sisi kiri papan tulis dengan empat jenis teks.
UCAP: "Four types. You choose."
AKSI: Jeda 1 detik.
UCAP: "Let me show you first."`,
          bantuan     : null,
          cue         : 'Layar ini FLEX — lewati jika kelas sudah responsif di Layar 1 dan waktu tersisa kurang dari 55 menit.',
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
          teks        : `AKSI: Tunjuk sisi kiri papan tulis dengan empat jenis teks.
UCAP: "Four types of text. Look at the board."
UCAP: "Opinion, what you think. I think, then because."
UCAP: "Story, what happened. Last week I."
UCAP: "Description, what something looks like or is. It is, there is."
UCAP: "Combination, two or more types together."
AKSI: Jeda 1 detik.
UCAP: "One type is best for your topic. You will choose."
AKSI: Tunjuk papan tulis sekali lagi.
UCAP: "These stay on the board all day."`,
          bantuan     : null,
          cue         : 'Empat jenis teks diperkenalkan minimal, satu kalimat per tipe. Tidak ada drill, tidak ada pertanyaan kelas.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INPUT',
        },

        {
          id          : 'l4',
          tipe        : 'instruksi',
          teks        : `AKSI: Ambil poster mini warung Pak Hendra yang sudah disiapkan.
AKSI: Tunjukkan poster ke semua siswa.
👂 LISTEN FIRST
UCAP: "This is my project."
UCAP: "I chose Warung Pak Hendra. Near my school."
AKSI: Tunjuk gambar tangan di poster.
UCAP: "This is my drawing. Not perfect, that's okay."
AKSI: Jeda 1 detik.
AKSI: Tunjuk teks di poster.
UCAP: "I think Warung Pak Hendra is the best warung near my school."
AKSI: Jeda 1 detik.
UCAP: "Last week I went there with my friends and we had mie ayam."
AKSI: Jeda 1 detik.
UCAP: "It is small but the food is always delicious."
AKSI: Jeda 1 detik.
UCAP: "Three sentences."
AKSI: Tunjuk tiga kalimat satu per satu.
UCAP: "Opinion. Story. Description."
AKSI: Tunjuk label "Combination" di papan tulis.
UCAP: "That is Combination."
UCAP: "One image. Three sentences. Your topic. That is the project."
AKSI: Letakkan poster menjauh dan tidak menampilkannya lagi selama produksi.`,
          bantuan     : 'Jika siswa bertanya harus tiga kalimat: ucapkan "Minimum three. More is fine.", satu kalimat lalu lanjut.',
          cue         : 'Demo ini satu-satunya model sebelum produksi. Setelah poster diletakkan menjauh, poster tidak ditampilkan lagi.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l5',
          tipe        : 'instruksi',
          teks        : `AKSI: Tulis empat kriteria di pojok papan tulis sebagai empat baris terpisah: "1. Text: is there a communicative text? 2. Content: is it about your own topic? 3. Visual: does the image support the text? 4. Oral: can you explain your project in 2-3 sentences?".
UCAP: "These are the four things I will check."
AKSI: Tunjuk rubrik.
UCAP: "One, you have a text. Not a title, a text."
UCAP: "Two, it is your topic. Not the warung. Not any example."
UCAP: "Three, your image matches your words."
UCAP: "Four, you can explain your project to me."
AKSI: Jeda 1 detik.
UCAP: "I will come to each of you and ask, tell me about your project."
AKSI: Jeda 1 detik.
UCAP: "These stay on the board. Check when you finish."`,
          bantuan     : null,
          cue         : 'Rubrik empat baris dibiarkan di pojok papan tulis sampai akhir sesi. Kriteria keempat disampaikan sebelum produksi dimulai.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l6',
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan Choice Card, satu per siswa.
UCAP: "Fill in your card. Four things."
AKSI: Tunjuk keempat bagian di kartu.
UCAP: "One, your topic. Choose something you know well. Your life, your place, your experience."
UCAP: "Two, register. Informal, like talking to a friend. Formal, like a notice or announcement."
UCAP: "Three, visual. What image will you make?"
UCAP: "Four, your first sentence. Write it now."
AKSI: Jeda 1 detik.
UCAP: "Five minutes. Silent. Think first, then write."
AKSI: Minta siswa mengisi Choice Card secara individual.
AKSI: Beri waktu lima menit.
AKSI: Untuk siswa yang menulis topik satu kata umum seperti "life", "world", "happiness", atau "everything", bisikkan "Something you can see or touch in your life.", lalu tinggalkan.`,
          bantuan     : 'Jika siswa tidak bisa memilih topik setelah dua menit: bisikkan "What did you write about in TP17, 18, or 19? Start from there, or choose something different.", lalu tinggalkan.',
          cue         : '"Choose something you know well." adalah instruksi terpenting. Topik unik adalah nilai, bukan kesalahan.',
          darurat     : null,
          diferensiasi: null,
          blok        : 'INTERACT',
        },

        {
          id          : 'l7',
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk berpasangan, satu siswa A dengan satu siswa B.
👂 LISTEN FIRST
AKSI: Bacakan keempat elemen Choice Card contoh ke satu siswa.
UCAP: "My topic, Warung Pak Hendra."
UCAP: "Register, informal."
UCAP: "Visual, hand drawing."
UCAP: "First sentence, I think Warung Pak Hendra is the best warung near my school."
UCAP: "What type of text is that?"
AKSI: Tunggu siswa menjawab.
UCAP: "What will my visual look like?"
AKSI: Tunggu siswa menjawab.
UCAP: "You heard four things. You can predict the project."
UCAP: "Now, share your card with your partner."
AKSI: Minta siswa A membacakan keempat elemen Choice Card ke siswa B.
AKSI: Minta siswa B mengajukan satu pertanyaan berdasarkan keempat elemen yang didengar.
AKSI: Minta siswa A menjawab.
AKSI: Minta siswa bergantian peran.
AKSI: Beri waktu empat sampai lima menit untuk dua arah.
AKSI: Pantau kerja berpasangan semua siswa, prioritaskan barisan belakang.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa B tidak bertanya sama sekali: bisikkan "Ask A one question about the card.", lalu tinggalkan.',
          cue         : 'Setiap siswa mengajukan pertanyaan yang hanya bisa ditanyakan setelah mendengar keempat elemen pasangan.',
          darurat     : 'Jika satu pasangan diam lebih dari 90 detik → tepuk tangan sekali, bacakan keempat elemen kartu sendiri dan minta satu siswa bertanya satu pertanyaan, sederhanakan ke "Just ask one thing, why did you choose that topic?", lalu restart selama 90 detik per arah.',
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l8',
          tipe        : 'instruksi',
          teks        : `UCAP: "Before we write, say your first sentence. To your partner. Now."
AKSI: Minta siswa A mengucapkan kalimat pertama Choice Card ke siswa B.
AKSI: Minta siswa B mengucapkan kalimat pertama Choice Card ke siswa A.
AKSI: Beri waktu satu menit tanpa evaluasi atau koreksi.
UCAP: "Good. Keep that sentence. Start from there."`,
          bantuan     : 'Jika siswa belum punya kalimat pertama: tunjuk papan tulis, ucapkan "Opinion, story, or description? Start with that type.".',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit sebelum Breakpoint atau kelas sudah antusias. Tidak ada umpan balik grammar di sini.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l9',
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, write."
AKSI: Tunjuk papan tulis dengan empat jenis teks dan rubrik.
UCAP: "Look at your Choice Card. Start from your first sentence."
UCAP: "Write minimum three sentences. In English."
UCAP: "No model on the board. Use what you know."
AKSI: Jeda 1 detik.
UCAP: "Eight minutes. Start."
AKSI: Minta siswa menulis teks secara individual.
AKSI: Beri waktu delapan menit.
AKSI: Setelah menit ketiga, pantau penulisan semua siswa, prioritaskan barisan belakang.
AKSI: Untuk siswa yang menyalin kalimat demo guru, bisikkan "Your topic is different. Cross that and start from your own topic.", lalu tinggalkan.
AKSI: Untuk siswa yang menulis dalam Bahasa Indonesia, bisikkan "In English. Use what you know. First sentence first.", lalu tinggalkan.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa minta contoh kalimat: ucapkan "Look at what you wrote in TP17, 18, or 19.", tidak memberi contoh baru, lalu tinggalkan.',
          cue         : 'Tidak ada kalimat model di papan tulis. Kalimat dari tulisan siswa sendiri di TP-17, TP-18, TP-19 adalah model paling kuat.',
          darurat     : 'Jika waktu tersisa 3 menit atau kurang dan sebagian besar siswa baru menulis satu kalimat → ucapkan "Two sentences, enough for now. We continue next.", turunkan target dan lanjut ke Layar 10.',
          diferensiasi: null,
          blok        : 'OUTPUT',
        },

        {
          id          : 'l10',
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, your image."
AKSI: Tunjuk Choice Card siswa.
UCAP: "What visual did you choose? Make it now."
UCAP: "Simple is fine. One image that matches your text."
UCAP: "Your image must match your text. That's the only rule."
AKSI: Jeda 1 detik.
UCAP: "Five minutes."
AKSI: Minta siswa membuat visual proyek mereka.
AKSI: Beri waktu lima menit.
AKSI: Untuk siswa yang visualnya tidak relevan dengan teks, bisikkan "What does your text say? Your image should show that, not something else.", lalu tinggalkan.
AKSI: Untuk siswa yang membuat visual terlalu kompleks, bisikkan "Simple is enough, just one image that matches.", lalu tinggalkan.`,
          bantuan     : 'Jika siswa memilih photo description tapi tidak punya foto: ucapkan "Describe it in words. What does it look like? Write, this is a photo of.", lalu tinggalkan.',
          cue         : 'Visual valid jika orang bisa menebak topik dari gambar tanpa membaca teks. Kualitas artistik tidak dinilai, hanya relevansi.',
          darurat     : 'Jika waktu tersisa 1 menit dan siswa belum mulai visual → ucapkan "Draw one shape, just one thing that shows your topic.", turunkan target ke satu objek sederhana.',
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l11',
          tipe        : 'instruksi',
          teks        : `UCAP: "Look at the rubric. Check your own work."
AKSI: Tunjuk pojok papan tulis dengan empat kriteria.
UCAP: "One, is there a text, not just a title?"
UCAP: "Two, is it your topic, your words?"
UCAP: "Three, does your image match your text?"
AKSI: Beri waktu 30 detik siswa memeriksa sendiri.
UCAP: "If something is missing, fix it now. Two minutes."
AKSI: Untuk siswa yang teksnya masih satu sampai dua kalimat, bisikkan "One more sentence, what else about your topic?", lalu tinggalkan.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa yang teksnya banyak tapi visual belum ada: bisikkan "Quick drawing, just one thing.".',
          cue         : 'Teks tiga kalimat yang koheren sudah valid. Jangan mendorong penambahan kalimat hanya untuk menambah volume.',
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Tunjuk kalimat terakhir siswa, bisikkan "What do you think about this topic? Write, I think, then because.", lalu tinggalkan.',
            sudahBisa   : 'Bisikkan "Can you add one more sentence, something personal? What does this topic mean to you?", lalu tinggalkan.',
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
          id          : 'l12',
          tipe        : 'instruksi',
          teks        : `UCAP: "Now, I will come to you."
AKSI: Jeda 1 detik.
UCAP: "Keep working while I walk around."
AKSI: Dekati lima sampai delapan siswa secara individual tanpa memanggil ke depan kelas.
AKSI: Mulai dari barisan belakang atau tengah.
AKSI: Untuk setiap siswa yang didekati, ucapkan pelan.
UCAP: "Tell me about your project. What is it about and why did you choose this topic?"
AKSI: Dengarkan jawaban siswa maksimal 30 detik.
AKSI: Untuk siswa yang bisa menjelaskan dengan dua sampai tiga kalimat, angguk dan ucapkan "Thank you.".`,
          bantuan     : 'Jika mayoritas dari lima sampai delapan siswa tidak bisa menjelaskan: hentikan sampling, ucapkan "Three more minutes. Read your project. Prepare 2-3 sentences to explain it.", lalu mulai sampling kembali.',
          cue         : 'Guru mendekati siswa individual, tidak memanggil ke depan. Ketidakmampuan menjelaskan adalah data untuk guru, bukan momen koreksi publik.',
          darurat     : 'Jika siswa tidak bisa menjelaskan dalam 30 detik → ucapkan "Thank you, keep working.", lanjut ke siswa berikutnya tanpa menunggu, tanpa mengoreksi, tanpa membantu.',
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l13',
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa menaruh proyek di meja masing-masing dengan teks dan visual menghadap ke atas.
UCAP: "Walk around. Read two projects, not your partner's."
UCAP: "One minute per project. Silent."
AKSI: Beri waktu tiga sampai empat menit untuk membaca proyek teman.
UCAP: "Back to your seat."
AKSI: Pilih satu sampai dua proyek yang menarik secara topik, bukan yang paling rapi.
UCAP: "I noticed one project about something I had not thought of."
AKSI: Jeda 1 detik tanpa membandingkan.`,
          bantuan     : 'Jika siswa membaca proyek pasangannya sendiri: arahkan ke proyek lain, ucapkan "Read someone else\'s, not your partner\'s.".',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 8 menit. Gallery walk bukan kompetisi, guru tidak memilih proyek terbaik.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l14',
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan siapa yang mau membacakan satu kalimat dari proyeknya.
AKSI: Tunjuk dua sampai tiga siswa yang mengangkat tangan.
UCAP: "One sentence from your project. From your seat."
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
UCAP: "Opinion? Story? Description?"
AKSI: Tunggu respons spontan semua siswa setiap kali.`,
          bantuan     : 'Jika tidak ada yang mau: panggil nama satu sampai dua siswa yang tadi aktif di blok INTERACT, ucapkan "Can you share one sentence?".',
          cue         : 'Layar ini FLEX — lewati jika waktu tersisa kurang dari 5 menit. Jenis teks bisa tumpang tindih, tidak ada jawaban benar atau salah.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

        {
          id          : 'l15',
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri di depan kelas.
UCAP: "Today, you made something."
AKSI: Jeda 2 detik.
UCAP: "Your topic. Your words. Your image."
AKSI: Jeda 2 detik.
UCAP: "Keep it."
AKSI: Jeda 2 detik.
UCAP: "Show it to someone outside this classroom."
AKSI: Jeda 2 detik.
UCAP: "That is the end."`,
          bantuan     : null,
          cue         : 'Lima kalimat closure diucapkan dengan tenang dan lambat. Jeda di antara setiap kalimat adalah bagian dari penutupan Fase C.',
          darurat     : null,
          diferensiasi: null,
          blok        : null,
        },

      ],
    },

  ],

};

export default TP_C22;
