const TP_B20 = {

  // METADATA
  id     : 'tp-b20',
  nomor  : 20,
  kelas  : 4,
  nama   : 'Writing: My Story',
  tema   : 'Menulis cerita naratif tentang hari kemarin menggunakan kosakata past tense dan struktur naratif',
  kluster: 'E — Aksi, Arah, dan Cerita',
  jenis  : 'Panen',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat merencanakan dan menulis cerita naratif pendek (minimal 5 kalimat) tentang hari kemarin menggunakan kata kerja bentuk lampau (went, ate, played, woke up) dari Kluster E.',
    'Peserta didik dapat menggunakan kata penghubung narasi (first, then, after that) untuk menyusun urutan kejadian dalam cerita yang koheren.',
    'Peserta didik dapat membacakan cerita yang ditulis sendiri dengan percaya diri sebagai bentuk berbagi dengan kelas.',
  ],
  vocab     : ['went', 'ate', 'played', 'Yesterday, I...', 'woke up', 'first', 'then', 'after that', 'football', 'always', 'sometimes', 'I can', 'go to school', 'eat breakfast', 'sleep', 'school', 'friends', 'once upon a time', 'the end'],
  persiapan : [
    'Lembar kerja siswa satu per siswa, berisi Bagian A Planning Sheet "My Story Plan" dan Bagian B Writing Space, dalam satu lembar, di meja guru sebelum dibagikan, untuk Layar 4 dan Layar 6.',
    'Cerita contoh guru "My Yesterday", ditulis di kertas besar atau papan kecil dengan hari yang nyata sudah terisi sebelum kelas dimulai, untuk Layar 5.',
    'Teks "Budi\'s Day" dari TP-19, ditempel di papan tulis sebagai referensi model, untuk Layar 3.',
    'Papan tulis dan spidol untuk menulis struktur "MY STORY" dan struktur pengingat menulis di Layar 3 dan Layar 6.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi', tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Reconnect Chant Gabungan Kluster E', tujuan: 'Guru menyalakan energi lewat chant gabungan empat TP.' },
    { layar:  2, judul: 'Pembuka · Warm-Up Review Kosakata TP-16 sampai TP-19', tujuan: 'Guru memanaskan memori lewat tanya jawab cepat.' },
    { layar:  3, judul: 'Pembuka · Orientasi Panen Apa yang Kita Tulis', tujuan: 'Guru menjelaskan target menulis cerita sendiri.' },
    { layar:  4, judul: 'Inti · Planning Siswa Pilih Kejadian dari Hari Kemarin', tujuan: 'Guru memandu siswa mengisi Planning Sheet.' },
    { layar:  5, judul: 'Inti · Modeling Guru Demo Cerita My Yesterday', tujuan: 'Guru memodelkan cerita contoh dan strukturnya.' },
    { layar:  6, judul: 'Inti · Writing Draft Cerita My Yesterday', tujuan: 'Guru memandu siswa menulis draf cerita.' },
    { layar:  7, judul: 'Inti · Berkeliling dan Penilaian Formatif', tujuan: 'Guru berkeliling menilai dan mendampingi penulisan.' },
    { layar:  8, judul: 'Inti · Silent Reread Underline Favorite Sentence', tujuan: 'Guru memandu siswa membaca ulang dan menandai kalimat favorit.' },
    { layar:  9, judul: 'Inti · Peer Sharing Baca Satu Bagian ke Partner', tujuan: 'Guru memandu siswa membaca bagian favorit ke partner.' },
    { layar: 10, judul: 'Inti · Mini Self-Check Lingkari Kata Past Tense', tujuan: 'Guru memandu siswa menemukan kata past tense di cerita mereka.' },
    { layar: 11, judul: 'Penutup · Gallery Sharing Dua Suara', tujuan: 'Guru memandu dua siswa membacakan satu bagian.' },
    { layar: 12, judul: 'Penutup · Closure Emosional Refleksi Kluster E dan Fase B', tujuan: 'Guru menutup sesi dengan refleksi Kluster E dan Fase B.' },
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
UCAP: "Today is a special day, again."`,
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
👂 LISTEN FIRST
AKSI: Ucapkan chant dengan ritme ketukan meja.
UCAP: "I can run, I can play, I can go, go!"
UCAP: "Turn left, go straight, I went there, go!"
UCAP: "Yesterday I ate, I played, I woke, go!"
UCAP: "My story, let's write it, go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "I can run, I can play, I can go, go!"
UCAP: "Turn left, go straight, I went there, go!"
UCAP: "Yesterday I ate, I played, I woke, go!"
UCAP: "My story, let's write it, go!"`,
          bantuan     : 'Jika siswa tidak hafal semua kata: ulangi baris ketiga "Yesterday I ate, I played, I woke" jika perlu, baris ini yang paling penting.',
          cue         : 'Biarkan energi kelas naik selama chant, tetapi jaga tetap terkendali. Baris terakhir adalah framing Panen.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan review kosakata ke semua siswa.
UCAP: "Go, yesterday?"
AKSI: Tunggu respons semua siswa.
UCAP: "Eat, yesterday?"
AKSI: Tunggu respons semua siswa.
UCAP: "Play, yesterday?"
AKSI: Tunggu respons semua siswa.
UCAP: "How do we start a story about yesterday?"
AKSI: Tunggu respons semua siswa.
UCAP: "First, then, after that. Remember?"
AKSI: Tunggu respons semua siswa.
UCAP: "And what sport can you play?"
AKSI: Tunggu respons semua siswa.
UCAP: "How do you get to school, left, right, or straight?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. You remember everything. Today, you write your story."`,
          bantuan     : 'Jika kelas stagnan di satu pertanyaan: ucapkan jawabannya sendiri, minta semua siswa echo, lanjut ke pertanyaan berikutnya.',
          cue         : 'Satu pertanyaan diberikan tiap lima detik. Warm-up adalah aktivasi, bukan tes.',
          darurat     : 'Jika semua siswa tidak bisa menjawab dua pertanyaan atau lebih → jangan ulang pengajaran, langsung ke Layar 3.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri kembali di depan kelas.
AKSI: Turunkan volume suara.
UCAP: "Today, we write a story. A real story."
AKSI: Jeda 1 detik.
UCAP: "Remember Budi's Day? Yesterday was Monday. First, he ate breakfast. He played football."
AKSI: Tunjuk teks "Budi's Day" di papan tulis.
UCAP: "Look at Budi's story. Now, imagine your own version."
UCAP: "Same structure. But different person, and different day."
UCAP: "Today, you are the character. Your day. Your story."
AKSI: Tulis "MY STORY" di papan tulis.
AKSI: Tulis "Yesterday, I" di bawahnya di papan tulis.
AKSI: Tulis "First, Then, After that" di bawahnya di papan tulis.
AKSI: Tulis "I can, I always, I sometimes" di bawahnya di papan tulis.
AKSI: Tulis "The end." di bawahnya di papan tulis.
UCAP: "Your story. Your yesterday. Your words."
UCAP: "Let me show you first."`,
          bantuan     : null,
          cue         : 'Penekanan ada pada kata "you" saat menyebut "you are the character".',
          darurat     : null,
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
          teks        : `AKSI: Bagikan lembar kerja, satu per siswa.
AKSI: Minta siswa membuka Bagian A, Planning Sheet.
UCAP: "Fill in Part A. Just key words, not sentences yet."
UCAP: "What day was yesterday? What did you do?"
AKSI: Pantau pengisian Planning Sheet semua siswa.`,
          bantuan     : 'Jika siswa duduk diam tidak menulis apa pun setelah satu menit: dekati, tunjuk baris pertama, ucapkan "What day was yesterday? Monday? Tuesday?", setelah mereka menjawab arahkan "Write it here.".',
          cue         : 'Hari kemarin yang biasa tetap cerita yang valid. Siswa tidak perlu kejadian yang istimewa.',
          darurat     : 'Jika sebagian besar kelas tidak mengerti instruksi Planning Sheet → bacakan tiap baris dengan keras sambil mengisi contoh di papan tulis, maksimal 2 menit ekstra, lalu lanjut ke Layar 5.',
          diferensiasi: {
            perluSupport: 'Tanyakan "Kemarin pagi kamu melakukan apa?", lalu arahkan tangan mereka ke kertas.',
            sudahBisa   : 'Setelah tiga kejadian terisi, minta tambah satu kejadian keempat, "One more special moment from yesterday.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tunjukkan cerita contoh guru "My Yesterday" yang sudah disiapkan ke semua siswa.
AKSI: Tempel cerita contoh "My Yesterday" di papan tulis.
UCAP: "Listen. I will read my story."
AKSI: Baca seluruh cerita contoh ke semua siswa.
UCAP: "Now, let's look at the structure."
AKSI: Tunjuk kalimat pertama cerita contoh.
AKSI: Beri penjelasan bahwa kalimat pertama menyebut kapan kejadian terjadi.
UCAP: "Part one. When. Yesterday was a day."
AKSI: Tunjuk bagian kejadian berurutan di cerita contoh.
AKSI: Beri penjelasan bahwa bagian ini adalah kejadian berurutan dengan first, then, after that.
UCAP: "Then, the events. First, then, after that."
AKSI: Tunjuk kalimat "I always go to the market" di cerita contoh.
AKSI: Beri penjelasan bahwa kata "always" dari TP-16 bisa hadir dalam cerita lampau.
UCAP: "I also use always. I always go to the market."
AKSI: Tunjuk kalimat terakhir cerita contoh.
AKSI: Beri penjelasan bahwa kalimat terakhir menyebut perasaan dengan because.
UCAP: "The last sentence. How you felt. Because."
UCAP: "Same structure as Budi's Day, but this is my story."
UCAP: "Now, yours."`,
          bantuan     : 'Jika siswa tampak kewalahan melihat panjang cerita: tunjuk hanya empat kalimat pertama, ucapkan "Cukup ini dulu. Tambah nanti.".',
          cue         : 'Cerita contoh guru sudah disiapkan sebelum kelas dan memakai hari yang nyata. Jangan menulis cerita di depan siswa saat Layar 5 berlangsung.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa membuka Bagian B, Writing Space.
UCAP: "Now, your turn. Use your Planning Sheet. Write your story."
AKSI: Tulis pengingat struktur di papan tulis dengan baris berikut: "Start: Yesterday was a day.", "Add: First, Then, After that, I went.", "Extra: I always, I sometimes, I can.", "Close: It was a good day. I felt happy because.".
UCAP: "Use went, ate, played, and any other past word you know."
UCAP: "Your story. Your day. Your words."
AKSI: Mundur dari depan kelas.
AKSI: Pantau penulisan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa menulis dalam Bahasa Indonesia untuk bagian yang sulit: tulis kata kunci Bahasa Inggrisnya di pojok papan tulis tanpa komentar.',
          cue         : 'Jangan potong Layar 6 lebih awal dari 8 menit. Pertahankan struktur pengingat di papan tulis sampai Layar 7 selesai.',
          darurat     : 'Jika setelah 5 menit lebih dari separuh kelas belum menulis kalimat pertama → minta semua siswa membaca bersama baris pertama cerita guru sekali, lalu lanjutkan menulis.',
          diferensiasi: {
            perluSupport: 'Cukup tulis empat kalimat, "Yesterday was a day. First I woke up. Then I went to school. It was a good day.".',
            sudahBisa   : 'Tulis enam kalimat atau lebih memakai always, sometimes, dan I can, lalu tambah satu kalimat tentang arah.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Lanjutkan memantau penulisan semua siswa dari Layar 6.
UCAP: "Keep writing. I will come to you."
AKSI: Kunjungi tiap meja siswa.
AKSI: Baca dua sampai tiga kalimat pertama tiap siswa dalam diam.
AKSI: Lanjutkan penilaian formatif untuk siswa yang belum dinilai.
AKSI: Untuk siswa yang sudah memakai past tense, angguk, ucapkan pelan "Good, keep going.".
AKSI: Untuk siswa yang belum memakai past tense, tunjuk papan tulis, ucapkan pelan "Use went or ate. Look at the board.".`,
          bantuan     : 'Jika menemukan siswa yang hanya menulis satu kalimat lalu berhenti: duduk di sebelahnya, baca yang sudah ada, tanya pelan "And then? What did you do next?", tunggu jawaban lisan, lalu ucapkan "Write that.".',
          cue         : 'Cek satu hal saja: apakah ada minimal satu kata past tense di tiga kalimat pertama. Grammar lain diabaikan.',
          darurat     : 'Jika menit ke-54 tercapai sebelum Layar 7 selesai → hentikan berkeliling, lewati Layar 8, Layar 9, dan Layar 10, langsung ke Layar 11.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Stop for a moment. Put your pen down."
AKSI: Jeda 3 detik.
AKSI: Tunggu semua pena diletakkan.
UCAP: "Read your story from the beginning. Just for yourself."
AKSI: Jeda 30 detik.
UCAP: "Now, find your favorite sentence. The one that feels most like you. Underline it."
AKSI: Jeda 20 detik.
UCAP: "That sentence is the heart of your story."`,
          bantuan     : 'Jika siswa tampak bingung: bisikkan pelan "Kalimat mana yang paling kamu suka? Yang paling terasa seperti kamu?".',
          cue         : 'Ini momen privat. Guru cukup berdiri di depan dan menjaga ruang tetap tenang.',
          darurat     : 'Jika waktu tersisa kurang dari 15 menit → lewati layar ini, langsung ke Layar 9.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Read the sentence you underlined, or your favorite part, to your partner."
UCAP: "Partner, listen. Then say: I like your story because you played football."
AKSI: Beri waktu tiga menit, masing-masing 90 detik per arah.
AKSI: Berkeliling dan dengarkan tanpa menyela.
UCAP: "Good. You can go back and add or change one thing."
AKSI: Beri waktu 1 menit untuk perubahan kecil.`,
          bantuan     : 'Jika partner tidak tahu harus berkata apa: berikan contoh, ucapkan "You can say: I like your story because you played football, or because it is funny.".',
          cue         : 'Minta partner menyebut satu alasan singkat, bukan koreksi.',
          darurat     : [
            'Jika waktu tersisa kurang dari 10 menit, atau cerita siswa rata-rata kurang dari tiga kalimat → lewati layar ini, langsung ke Layar 10.',
            'Jika peer sharing menjadi gaduh dalam satu menit → ucapkan "Okay. Back to your own paper.", langsung ke Layar 10.',
          ],
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Look at your story one more time."
UCAP: "Circle every past tense word. Went, ate, played, woke up, or any past word you used."
AKSI: Beri waktu 30 detik.
UCAP: "How many circles do you have? Count."
AKSI: Tunggu dua sampai tiga siswa menjawab jumlah lingkaran mereka.
UCAP: "Good. Every circle is a past tense word. You used the past tense to write your story."`,
          bantuan     : 'Jika siswa tidak menemukan kata past tense: dekati pelan, tunjuk satu kalimat, bisikkan "Is went in here? Or ate? Circle it.".',
          cue         : 'Guru tidak menghitung atau menilai jumlah lingkaran. Ini self-check siswa.',
          darurat     : 'Jika waktu tersisa kurang dari 8 menit → lewati layar ini, langsung ke Layar 11.',
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
          teks        : `AKSI: Minta semua siswa meletakkan pena.
AKSI: Berdiri kembali di depan kelas.
UCAP: "We are almost done. I want to hear from two people."
UCAP: "Who wants to read one part of their story?"
AKSI: Tunggu sukarelawan selama 5 detik.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
AKSI: Minta siswa itu membacakan satu bagian ceritanya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What past tense word did they use?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk siswa lain yang mengangkat tangan.
AKSI: Minta siswa itu membacakan bagian yang berbeda ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "What happened in their story?"
AKSI: Tunggu respons semua siswa.
UCAP: "Two different stories. Two different yesterdays. Both are real."`,
          bantuan     : 'Jika tidak ada sukarelawan setelah 10 detik: panggil nama satu siswa yang menulis dengan baik dari observasi Layar 7, ucapkan dengan hangat "I read your story. It\'s very interesting. Can you share one sentence?".',
          cue         : 'Pilih siswa yang berbeda dari peserta paling aktif di Layar 2.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa memegang lembar kerja mereka.
AKSI: Turunkan volume suara.
UCAP: "Look at what you wrote today."
AKSI: Jeda 5 detik.
UCAP: "In Kluster E, you learned to play sports in English."
UCAP: "You learned to find your way. Turn left, go straight."
UCAP: "You learned to talk about the past. Went, ate, played."
UCAP: "And today, you wrote your story. In English."
AKSI: Jeda 3 detik.
UCAP: "That story is yours. Nobody else has the same yesterday."
UCAP: "You have traveled far. From hello to my story. That is not a small thing."
AKSI: Minta siswa menulis nama mereka besar di bagian atas lembar kerja.
UCAP: "For now, goodbye, everyone."
AKSI: Tunggu semua siswa menjawab salam.`,
          bantuan     : null,
          cue         : 'Kalimat "Nobody else has the same yesterday." adalah penutup yang tulus dan lambat. Akhiri sesi dengan ritual goodbye, bukan instruksi administratif.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → biarkan siswa merapikan meja, jangan tambahkan aktivitas baru.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B20;
