const TP_B18 = {

  // METADATA
  id     : 'tp-b18',
  nomor  : 18,
  kelas  : 4,
  nama   : 'Talking About the Past',
  tema   : 'Menceritakan kejadian di masa lampau menggunakan bentuk kata kerja sederhana',
  kluster: 'E — Aksi, Arah, dan Cerita',
  jenis  : 'Kompleks',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menggunakan bentuk lampau sederhana "went," "ate," dan "played" dalam kalimat tentang kegiatan kemarin.',
    'Peserta didik dapat membentuk kalimat dengan pola "Yesterday, I…" untuk menceritakan kejadian di masa lampau.',
    'Peserta didik dapat menulis urutan kegiatan kemarin menggunakan kata penghubung "first," "then," dan "after that."',
  ],
  vocab     : ['went', 'ate', 'played', 'Yesterday, I...'],
  persiapan : [
    'Kartu kegiatan enam kartu dalam satu amplop per kelompok tiga siswa, tiap kartu berisi satu kegiatan dengan gambar dan kata: woke up, ate breakfast, went to school, played football, ate lunch, went to sleep, disiapkan sebelum kelas dimulai, untuk Layar 8.',
    'Lembar kerja siswa satu per siswa, berisi template "My Yesterday" dengan baris rumpang untuk hari, kegiatan dengan first, then, after that, dan waktu tidur, di meja guru sebelum dibagikan, untuk Layar 10.',
    'Papan tulis dan spidol untuk menulis dua kolom TODAY dan YESTERDAY, tiga pasangan present-past, dan pola "Yesterday, I" di Layar 3, Layar 4, dan Layar 6.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi', tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi TP-17 dan Chant Lampau', tujuan: 'Guru menghubungkan TP-17 dan menyalakan energi lewat chant masa lampau.' },
    { layar:  2, judul: 'Pembuka · Reactivation Daily Routines dan Days', tujuan: 'Guru meninjau rutinitas harian dan hari sebelum konsep kemarin.' },
    { layar:  3, judul: 'Inti · Kontras Present vs Past Today vs Yesterday', tujuan: 'Guru membuat kontras visual antara hari ini dan kemarin.' },
    { layar:  4, judul: 'Inti · Introduksi Went Ate Played', tujuan: 'Guru memperkenalkan tiga kata kerja lampau.' },
    { layar:  5, judul: 'Inti · Drill Pasangan Present-Past', tujuan: 'Guru memimpin drill pasangan present-past.' },
    { layar:  6, judul: 'Inti · Introduksi Yesterday I dan Sequencing', tujuan: 'Guru memperkenalkan pola kalimat lampau dan urutan kejadian.' },
    { layar:  7, judul: 'Inti · Modeling Guru Menceritakan Hari Kemarin', tujuan: 'Guru memodelkan cerita hari kemarin.' },
    { layar:  8, judul: 'Inti · Kartu Kegiatan Siswa Susun Urutan', tujuan: 'Guru memandu siswa menyusun urutan kegiatan kemarin.' },
    { layar:  9, judul: 'Inti · Pair Practice Ceritakan Hari Kemarin', tujuan: 'Guru memandu latihan bercerita hari kemarin berpasangan.' },
    { layar: 10, judul: 'Inti · Writing Individual Cerita Harianku Kemarin', tujuan: 'Guru memandu siswa menulis cerita hari kemarin.' },
    { layar: 11, judul: 'Inti · Berkeliling dan Review Tulisan', tujuan: 'Guru meninjau hasil tulisan dan mengonsolidasi kata lampau.' },
    { layar: 12, judul: 'Penutup · Review dan Hapus Papan', tujuan: 'Guru mengonsolidasi kata lampau lalu menghapus papan tulis.' },
    { layar: 13, judul: 'Penutup · Closure Emosional dan Teaser TP-19', tujuan: 'Guru menutup sesi dengan refleksi dan teaser TP-19.' },
  ],

  // PRE-OPENING
  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas.
AKSI: Tunggu sampai semua siswa duduk dan tenang.
UCAP: "Good morning, everyone."
AKSI: Tunggu respons semua siswa.
UCAP: "Sit down, please."
UCAP: "Listen."
UCAP: "We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh: jeda 3 detik dalam diam, pandang bagian kelas yang paling ramai, lanjut hanya setelah mereka berhenti.',
    cue    : 'Jangan mulai Layar 1 sebelum minimal 80 persen siswa menatap ke depan.',
    darurat: null,
  },

  // SKENARIO
  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,
      langkah: [

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tepuk tangan dua kali untuk menarik perhatian.
UCAP: "Last time, directions. How do I get to the school?"
UCAP: "We talked about going places, today, now."
AKSI: Jeda 1 detik.
UCAP: "But what about yesterday? Where did you go? What did you eat? What did you play?"
UCAP: "Today, we talk about the past. What happened before."
👂 LISTEN FIRST
AKSI: Ucapkan chant dengan ritme ketukan meja.
UCAP: "Yesterday I went, I ate, I played, go!"
UCAP: "First I woke up, then I went to school, go!"
UCAP: "After that I played, then I went to sleep, go!"
UCAP: "The past, let's tell it, go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "Yesterday I went, I ate, I played, go!"
UCAP: "First I woke up, then I went to school, go!"
UCAP: "After that I played, then I went to sleep, go!"
UCAP: "The past, let's tell it, go!"`,
          bantuan     : 'Jika siswa tidak hafal chant: tunjukkan tiga gestur — tangan di belakang kepala untuk yesterday, gerakan tidur lalu bangun untuk woke up, tangan mengayun untuk played. Tiga gestur yang dipakai sepanjang sesi.',
          cue         : 'Jembatan ke TP-17 hadir sebelum chant dimulai, bukan sesudahnya. Kata "yesterday" diberi penekanan saat diucapkan.',
          darurat     : 'Jika kelas masih gaduh setelah chant selesai → tepuk tangan sekali, ucapkan "Freeze. Sit down. Listen.", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan rutinitas harian ke semua siswa.
UCAP: "Daily routines. What do you do every day?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. And days. What day is today?"
AKSI: Tunggu respons semua siswa.
UCAP: "And yesterday? What day was yesterday?"
AKSI: Tunggu respons semua siswa.
UCAP: "Monday, Tuesday, Wednesday. You remember?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tiga jari satu per satu.
UCAP: "And sequence words. First, then, after that. Remember?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Today, we use all of these to tell about yesterday."`,
          bantuan     : 'Jika kelas tidak ingat hari kemarin: tunjuk kalender di dinding kelas, ucapkan "Today is Tuesday, so yesterday was Monday.".',
          cue         : 'Satu pertanyaan diberikan tiap lima detik.',
          darurat     : 'Jika semua siswa tidak bisa menjawab dua pertanyaan atau lebih → jangan ulang pengajaran, langsung ke Layar 3.',
          diferensiasi: null,
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,
      langkah: [

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
AKSI: Buat dua kolom di papan tulis.
AKSI: Tulis "TODAY" di atas kolom kiri.
AKSI: Tulis "YESTERDAY" di atas kolom kanan.
UCAP: "Listen. I will say two things. What happens today, and what happened yesterday."
UCAP: "Today, I go to school."
AKSI: Tulis "I go to school." di kolom TODAY.
UCAP: "Yesterday, I went to school."
AKSI: Tulis "I went to school." di kolom YESTERDAY.
AKSI: Jeda 3 detik.
AKSI: Tunjuk kata "go" di kolom TODAY.
AKSI: Tunjuk kata "went" di kolom YESTERDAY.
UCAP: "Go, today. Went, yesterday. Different words."
UCAP: "Today, I eat breakfast."
AKSI: Tulis "I eat breakfast." di kolom TODAY.
UCAP: "Yesterday, I ate breakfast."
AKSI: Tulis "I ate breakfast." di kolom YESTERDAY.
AKSI: Tunjuk kata "eat" di kolom TODAY.
AKSI: Tunjuk kata "ate" di kolom YESTERDAY.
UCAP: "Today, I play football."
AKSI: Tulis "I play football." di kolom TODAY.
UCAP: "Yesterday, I played football."
AKSI: Tulis "I played football." di kolom YESTERDAY.
AKSI: Tunjuk kata "play" di kolom TODAY.
AKSI: Tunjuk kata "played" di kolom YESTERDAY.
UCAP: "Today, today. Yesterday, yesterday. The words change."
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
UCAP: "Today, go. Yesterday?"
AKSI: Tunggu respons semua siswa.
UCAP: "Today, eat. Yesterday?"
AKSI: Tunggu respons semua siswa.
UCAP: "Today, play. Yesterday?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa kebingungan dengan dua kolom: tunjuk kalender, tunjuk hari ini lalu hari kemarin, ucapkan "Today is here. Yesterday is here. Different day, different words.".',
          cue         : 'Perbedaan went, ate, dan played cukup ditunjukkan, tanpa aturan grammar. Dua kolom TODAY dan YESTERDAY tetap di papan tulis sepanjang sesi.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
UCAP: "Three past words today. Listen."
AKSI: Turunkan tempo suara.
AKSI: Tunjuk kolom YESTERDAY di papan tulis.
UCAP: "Go, went."
AKSI: Tulis pasangan "go - went" di papan tulis.
AKSI: Jeda 3 detik.
UCAP: "Went. W, E, N, T. Went."
AKSI: Tunggu semua siswa mengulang.
UCAP: "Eat, ate."
AKSI: Tulis pasangan "eat - ate" di papan tulis.
AKSI: Jeda 3 detik.
UCAP: "Ate. A, T, E. Ate."
AKSI: Tunggu semua siswa mengulang.
UCAP: "Play, played."
AKSI: Tulis pasangan "play - played" di papan tulis.
AKSI: Jeda 3 detik.
UCAP: "Played. P, L, A, Y, E, D. Played."
AKSI: Tunggu semua siswa mengulang.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it with me!"
UCAP: "Go, went."
AKSI: Tunggu respons semua siswa.
UCAP: "Eat, ate."
AKSI: Tunggu respons semua siswa.
UCAP: "Play, played."
AKSI: Tunggu respons semua siswa.
UCAP: "Three pairs. Remember them."`,
          bantuan     : 'Jika siswa mengucapkan "goed" atau "eated": jangan koreksi keras, ucapkan pasangan yang benar dengan tempo lambat, "Go, went. Try: went.".',
          cue         : 'Tiga pasangan present-past tetap di papan tulis sampai Layar 10 selesai. Tiap bentuk lampau dieja dengan keras saat pertama kali muncul di layar ini.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
UCAP: "Say it together!"
UCAP: "I say today's word, you say yesterday's word."
UCAP: "Go?"
AKSI: Tunggu respons semua siswa.
UCAP: "Eat?"
AKSI: Tunggu respons semua siswa.
UCAP: "Play?"
AKSI: Tunggu respons semua siswa.
AKSI: Ucapkan delapan sampai sepuluh pasangan secara acak dalam 60 detik.
AKSI: Balik arah, ucapkan bentuk lampau, minta semua siswa ucapkan bentuk sekarang.
UCAP: "Went?"
AKSI: Tunggu respons semua siswa.
UCAP: "Ate?"
AKSI: Tunggu respons semua siswa.
UCAP: "Played?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk satu siswa.
UCAP: "What is the past word for eat?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Good. Say the full sentence. Yesterday I ate breakfast."
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Ulangi dengan dua siswa lain, ganti kata kerja menjadi go dan play.`,
          bantuan     : 'Jika kelas menjawab salah berulang: hentikan drill, tunjuk tiga pasangan di papan tulis, ucapkan tiap pasangan sekali lagi, lalu lanjutkan.',
          cue         : null,
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima jawaban satu kata, "went" atau "ate".',
            sudahBisa   : 'Minta kalimat penuh, "Yesterday I went to school at seven o\'clock.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Turunkan volume suara.
AKSI: Jeda 2 detik.
👂 LISTEN FIRST
UCAP: "Now, let's make sentences about yesterday."
AKSI: Tulis "Yesterday, I _______." di papan tulis.
UCAP: "Yesterday, I went to school."
AKSI: Tulis "Yesterday, I went to school." di papan tulis.
UCAP: "Yesterday, I ate rice for breakfast."
AKSI: Tulis "Yesterday, I ate rice for breakfast." di papan tulis.
UCAP: "Yesterday, I played badminton after school."
AKSI: Tulis "Yesterday, I played badminton after school." di papan tulis.
AKSI: Tunjuk tiga jari satu per satu.
UCAP: "And do you remember first, then, after that? From before?"
AKSI: Tunggu respons semua siswa.
UCAP: "We can use them to tell the order of yesterday."
UCAP: "First, I woke up. Then, I ate breakfast. After that, I went to school."
AKSI: Tulis "First, I woke up. Then, I ate breakfast. After that, I went to school." di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa membaca bersama.
AKSI: Tunjuk empat kalimat terakhir di papan tulis.
UCAP: "Read with me."
UCAP: "Say it with me!"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa tidak mengingat first, then, after that: tunjuk tiga jari satu per satu, ucapkan "Pertama, first. Kedua, then. Selanjutnya, after that.". Satu jangkar Bahasa Indonesia cukup.',
          cue         : 'Ada jeda setelah pertanyaan koneksi "first, then, after that" sebelum melanjutkan.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
UCAP: "Now, I will tell you about my yesterday. Listen."
AKSI: Sebutkan nama hari kemarin yang sebenarnya saat memulai cerita.
UCAP: "First, I woke up at six o'clock."
UCAP: "Then, I ate breakfast. I ate rice and egg."
UCAP: "After that, I went to school."
UCAP: "At school, I played with my students."
UCAP: "In the afternoon, I went to the market."
UCAP: "I ate noodles for lunch."
UCAP: "In the evening, I went home and went to sleep."
AKSI: Tanyakan tiga pertanyaan retensi ke semua siswa.
UCAP: "What did I eat for breakfast?"
AKSI: Tunggu respons semua siswa.
UCAP: "Where did I go in the afternoon?"
AKSI: Tunggu respons semua siswa.
UCAP: "What word did I use for eat yesterday?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika kelas tidak bisa menjawab pertanyaan retensi: ulangi satu kalimat yang relevan sekali lagi dengan tempo lambat, bukan seluruh cerita.',
          cue         : 'Cerita guru memakai hari yang nyata, bukan hari abstrak. Gunakan orang, tempat, dan makanan yang nyata.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Bagikan satu amplop kartu kegiatan untuk tiap kelompok tiga siswa.
UCAP: "Look at the cards. These are things from yesterday."
UCAP: "Put them in order. First, then, after that."
UCAP: "When you are done, say the sentences to someone in your group."
AKSI: Beri waktu dua menit untuk menyusun urutan.
AKSI: Beri waktu dua menit untuk mengucapkan kalimat ke partner.
AKSI: Tunjuk satu kelompok.
UCAP: "What was first?"
AKSI: Tunggu jawaban kelompok yang ditunjuk.
UCAP: "And then?"
AKSI: Tunggu jawaban kelompok yang ditunjuk.
UCAP: "After that?"
AKSI: Tunggu jawaban kelompok yang ditunjuk.
AKSI: Ulangi dengan satu kelompok lain.`,
          bantuan     : 'Jika kelompok tidak bisa menyusun urutan: tanyakan "What do you do first in the morning, sleep or wake up?", lalu lanjut dengan pertanyaan dua pilihan berikutnya.',
          cue         : 'Kartu kegiatan sudah dalam amplop per kelompok sebelum kelas dimulai.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa menyimpan kartu di dalam amplop di meja.
AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Tell your partner about your yesterday. Not the cards, your real yesterday."
UCAP: "Start like this. First, I woke up. Then, I ate breakfast. After that, I went to school."
AKSI: Tanyakan siapa yang mau menjadi contoh.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "Tell me one thing from your yesterday. Use yesterday, I."
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Good. Add more. First, then, after that."
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Perfect. Your turn with your partner."
AKSI: Beri waktu empat menit, masing-masing dua menit per arah.
AKSI: Berkeliling dan dengarkan tanpa menyela.`,
          bantuan     : 'Jika satu pasang tidak bisa memulai: minta mereka membuka amplop kartu, ucapkan "Look at the cards. Did you do any of these yesterday? Start with that.".',
          cue         : null,
          darurat     : [
            'Jika waktu tersisa kurang dari 18 menit, atau energi kelas rendah → lewati layar ini, langsung ke Layar 10.',
            'Jika pair practice menjadi gaduh dalam satu menit → ucapkan "Okay. Take your pencil. Think about your yesterday. Let\'s write.", langsung ke Layar 10.',
          ],
          diferensiasi: {
            perluSupport: 'Cukup dua kalimat, "Yesterday, I went to school. I ate rice.".',
            sudahBisa   : 'Ceritakan empat atau lima kejadian memakai first, then, after that.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Okay. Take your pencil. Think about your yesterday. Let's write."
AKSI: Jeda 3 detik.
AKSI: Bagikan lembar kerja, satu per siswa.
UCAP: "Write about your real yesterday. Use went, ate, played."
UCAP: "Use first, then, after that to tell the order."
👂 LISTEN FIRST
AKSI: Sebutkan nama hari kemarin yang sebenarnya saat menulis baris pertama.
AKSI: Tulis "First, I woke up at six o'clock." di papan tulis.
UCAP: "Watch me. First, I woke up at six o'clock."
AKSI: Tulis "Then, I ate breakfast. I ate rice and egg." di papan tulis.
UCAP: "Then, I ate breakfast. I ate rice and egg."
UCAP: "If you forget what day yesterday was, look at the calendar or ask a friend."
UCAP: "Now, your turn."
AKSI: Pantau penulisan semua siswa dari meja ke meja.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa menulis "goed" atau "eated": jangan koreksi saat layar ini, catat untuk feedback individual setelah sesi.',
          cue         : 'Bentuk salah seperti goed atau eated tidak dikoreksi selama layar ini. Tiga pasangan present-past dan pola "Yesterday, I" tetap di papan tulis selama layar ini.',
          darurat     : 'Jika waktu tersisa 8 menit atau kurang saat layar ini dimulai → minta siswa hanya mengisi tiga baris pertama, langsung ke Layar 12 tanpa melalui Layar 11.',
          diferensiasi: {
            perluSupport: 'Cukup isi empat baris pertama.',
            sudahBisa   : 'Setelah semua baris terisi, tambah satu kalimat bebas, "The best part of my yesterday was ___.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tulisan semua siswa.
AKSI: Pilih dua hasil lembar kerja siswa — satu yang memakai went, ate, played dengan benar, satu yang menceritakan kejadian menarik.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good. Let's hear from two friends."
AKSI: Minta siswa pertama membacakan cerita kemarinnya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What did they do first?"
AKSI: Tunggu respons semua siswa.
UCAP: "Which past word did they use, went, ate, or played?"
AKSI: Tunggu respons semua siswa.
AKSI: Minta siswa kedua membacakan cerita kemarinnya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What did they do first?"
AKSI: Tunggu respons semua siswa.
UCAP: "Which past word did they use, went, ate, or played?"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa yang diminta membaca menolak: ucapkan "That\'s okay.", lalu tunjuk siswa lain tanpa komentar tambahan.',
          cue         : 'Pilih siswa yang berbeda dari peserta Layar 5.',
          darurat     : 'Jika waktu tersisa kurang dari 10 menit → lewati layar ini, langsung ke Layar 12.',
          diferensiasi: null,
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,
      langkah: [

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa menyimpan lembar kerja di dalam tas.
AKSI: Berdiri kembali di depan kelas.
UCAP: "Good work today. Let's remember."
AKSI: Tanyakan bentuk lampau dari kata "pergi".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan bentuk lampau dari kata "makan".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan bentuk lampau dari kata "bermain".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
UCAP: "And how do we start a sentence about yesterday?"
AKSI: Tunggu respons semua siswa.
UCAP: "Give me one sentence. Tell me something from your yesterday."
AKSI: Tunggu respons semua siswa.
AKSI: Hapus tulisan "played" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "played".
AKSI: Hapus tulisan "ate" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "ate".
AKSI: Hapus tulisan "went" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "went".
AKSI: Hapus pola "Yesterday, I" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "Yesterday, I".
AKSI: Hapus tulisan "play", "eat", dan "go" dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan tiap kata yang dihapus.`,
          bantuan     : null,
          cue         : 'Hapus bentuk lampau sebelum bentuk sekarang.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, one question."
UCAP: "What was the best moment of your yesterday?"
AKSI: Tunjuk satu sampai dua siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Ucapkan "Yesterday, I" dan ajak siswa melengkapi kalimat.
AKSI: Jeda 3 detik.
UCAP: "Yesterday is gone, but you can always tell its story."
UCAP: "Next time, we read a short story. Someone else's yesterday. Someone else's adventure."
UCAP: "For now, goodbye, everyone."
AKSI: Tunggu semua siswa menjawab salam.`,
          bantuan     : null,
          cue         : 'Akhiri sesi dengan ritual goodbye, bukan instruksi administratif.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → biarkan siswa merapikan meja, jangan tambahkan aktivitas baru.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B18;
