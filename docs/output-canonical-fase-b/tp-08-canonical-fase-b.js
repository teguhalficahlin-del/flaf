const TP_B08 = {

  // METADATA
  id     : 'tp-b08',
  nomor  : 8,
  kelas  : 3,
  nama   : 'Writing: My Weekly Schedule',
  tema   : 'Menulis jadwal mingguan lengkap menggunakan semua kosakata Kluster B',
  kluster: 'B — Waktu, Jadwal, dan Kebiasaan',
  jenis  : 'Panen',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat merencanakan dan menulis jadwal mingguan (minimal 3 hari) menggunakan nama hari, ekspresi waktu, dan kegiatan dari Kluster B.',
    'Peserta didik dapat mengintegrasikan penanda urutan "first, then, after that" dan ekspresi "I usually..." dalam kalimat jadwal yang koheren.',
    'Peserta didik dapat membacakan satu bagian jadwal mingguan mereka sendiri di depan kelas.',
  ],
  vocab     : ['o\'clock', 'half past', 'first', 'then', 'after that', 'I usually...',
               'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'tomorrow'],
  persiapan : [
    'Lembar kerja siswa satu per siswa, berisi Bagian A Planning Sheet berupa tabel lima hari dan Bagian B Writing Space berupa tabel jadwal dan ruang narasi, dalam satu lembar, di meja guru sebelum dibagikan.',
    'Contoh jadwal mingguan guru, ditulis di kertas besar atau papan kecil sebelum kelas dimulai, berisi tiga hari contoh, kalimat penutup My favorite day, bulan ulang tahun guru, dan hari besok, untuk Layar 5.',
    'Papan tulis dan spidol untuk menulis judul orientasi dan struktur pengingat di Layar 3 dan Layar 6.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi',                          tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Reconnect Chant Gabungan Kluster B',                 tujuan: 'Guru menyalakan energi lewat chant gabungan tiga TP.' },
    { layar:  2, judul: 'Pembuka · Warm-Up Review Kosakata TP-05 sampai TP-07',         tujuan: 'Guru memanaskan memori lewat tanya jawab cepat.' },
    { layar:  3, judul: 'Pembuka · Orientasi Panen',                                    tujuan: 'Guru menjelaskan target menulis jadwal mingguan.' },
    { layar:  4, judul: 'Inti · Planning Memilih Lima Hari dan Kegiatan',               tujuan: 'Guru memandu siswa mengisi Planning Sheet.' },
    { layar:  5, judul: 'Inti · Modeling Jadwal Mingguan Lengkap',                      tujuan: 'Guru memodelkan contoh jadwal dan strukturnya.' },
    { layar:  6, judul: 'Inti · Writing Draft Jadwal Mingguan',                         tujuan: 'Guru memandu siswa menulis draf jadwal mingguan.' },
    { layar:  7, judul: 'Inti · Berkeliling dan Penilaian Formatif',                    tujuan: 'Guru berkeliling menilai dan mendampingi penulisan.' },
    { layar:  8, judul: 'Inti · Silent Reread Garis Bawahi Hari Favorit',               tujuan: 'Guru memandu siswa membaca ulang dan menandai bagian favorit.' },
    { layar:  9, judul: 'Inti · Peer Sharing Baca Satu Hari ke Partner',               tujuan: 'Guru memandu siswa membaca satu hari ke partner.' },
    { layar: 10, judul: 'Inti · Mini Self-Check Days dan Time Expressions',             tujuan: 'Guru memandu siswa menemukan hari dan ekspresi waktu di tulisan mereka.' },
    { layar: 11, judul: 'Penutup · Gallery Sharing Dua Suara',                          tujuan: 'Guru memandu dua siswa membacakan satu hari.' },
    { layar: 12, judul: 'Penutup · Closure Emosional Refleksi Kluster B',               tujuan: 'Guru menutup sesi dengan refleksi Kluster B dan teaser TP-09.' },
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
    cue    : 'Jangan mulai Layar 1 sebelum minimal 80 persen siswa menatap ke depan. Ucapkan "Today is a special day, again." dengan tulus, bukan terburu-buru.',
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
UCAP: "O'clock, half past, what time is it, go!"
UCAP: "First, then, after that, I usually, go!"
UCAP: "Monday, Tuesday, Wednesday, tomorrow, go!"
UCAP: "This is our week, let's write it, go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "O'clock, half past, what time is it, go!"
UCAP: "First, then, after that, I usually, go!"
UCAP: "Monday, Tuesday, Wednesday, tomorrow, go!"
UCAP: "This is our week, let's write it, go!"`,
          bantuan     : 'Jika siswa tidak hafal semua kata di putaran pertama: perlambat ritme, ucapkan tiap baris sendiri dengan suara besar, biarkan siswa menyusul di putaran kedua.',
          cue         : 'Biarkan energi kelas naik selama chant, tetapi jaga suasana kelas agar tetap terkendali.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tanyakan padanan Inggris dari "jam tujuh tepat".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "jam setengah delapan".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
UCAP: "How do we ask the time?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "Senin".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "Minggu".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "Januari".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "besok".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
AKSI: Tanyakan padanan Inggris dari "bangun tidur".
UCAP: "How do we say it in English?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good. You remember everything. Today, we put it all in one place."`,
          bantuan     : 'Jika kelas stagnan di satu pertanyaan lebih dari 5 detik: ucapkan jawabannya sendiri dengan lantang, minta semua siswa echo, lanjut ke pertanyaan berikutnya.',
          cue         : 'Jaga ritme cepat, satu pertanyaan tiap 5 detik. Ini pemanasan memori, bukan penilaian.',
          darurat     : 'Jika semua siswa tidak bisa menjawab dua pertanyaan atau lebih → jangan ulang pengajaran, langsung ke Layar 3.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Berdiri kembali di depan kelas.
AKSI: Turunkan volume suara.
UCAP: "Today, we write. Not one sentence. Not one day."
AKSI: Jeda 1 detik.
UCAP: "We write our whole week. Five days, or more."
AKSI: Tulis "MY WEEKLY SCHEDULE" di papan tulis.
AKSI: Tulis "days, activities, times" di bawahnya di papan tulis.
UCAP: "You choose which days. You choose what you do. You choose what time."
UCAP: "Let me show you first. Then you write your own."`,
          bantuan     : null,
          cue         : 'Tidak ada jawaban yang salah selama hari, kegiatan, dan waktu ditulis dengan benar.',
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
UCAP: "Fill in Part A. Choose five days. For each day, one main activity and one time."
UCAP: "Just key words, not full sentences yet."
AKSI: Pantau pengisian Planning Sheet semua siswa.`,
          bantuan     : [
            'Jika ada siswa yang tampak bingung dengan instruksi Planning Sheet: dekati dan beri bantuan. Jangan intervensi siswa yang sedang menulis.',
            'Jika siswa duduk diam tidak menulis apa pun setelah satu menit: dekati, tunjuk kolom Day, ucapkan pelan "Which day do you like? Monday? Friday?", setelah mereka menyebut satu hari arahkan "Write it here."',
          ],
          cue         : 'Siswa boleh menulis kegiatan dalam Bahasa Indonesia jika belum tahu Inggrisnya. Satu hari, satu kegiatan, satu waktu per baris.',
          darurat     : 'Jika sebagian besar kelas tidak mengerti instruksi Planning Sheet → bacakan tiap kolom dengan keras sambil mengisi contoh di papan tulis, maksimal 2 menit ekstra, lalu lanjut ke Layar 5.',
          diferensiasi: {
            perluSupport: 'Tanyakan "Hari apa kamu paling suka?", tunggu jawaban lisan, lalu arahkan tangan mereka ke kertas.',
            sudahBisa   : 'Setelah lima baris terisi, minta tambah satu kolom perasaan dengan satu kata Inggris, seperti happy, tired, atau excited.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Hapus tulisan di papan tulis.
AKSI: Tunjukkan contoh jadwal mingguan guru yang sudah disiapkan ke semua siswa.
AKSI: Tempel contoh jadwal mingguan guru di papan tulis.
UCAP: "Listen. I will read my weekly schedule."
AKSI: Baca seluruh contoh jadwal ke semua siswa.
UCAP: "Now, let's look at the structure."
AKSI: Tunjuk baris pertama contoh jadwal.
AKSI: Beri penjelasan bahwa kalimat pertama dimulai dengan nama hari.
UCAP: "On Monday, I usually. This starts with a day."
AKSI: Tunjuk baris kedua dan ketiga contoh jadwal.
AKSI: Beri penjelasan bahwa baris ini menyebut urutan kegiatan.
UCAP: "First. After that. This is the order of activities."
AKSI: Tunjuk baris terakhir contoh jadwal.
AKSI: Beri penjelasan bahwa kalimat terakhir adalah kalimat penutup bebas.
UCAP: "My favorite day is. This is a free closing sentence."
UCAP: "You don't need to write about every day. Choose three or four, or more. Your choice."
UCAP: "End with one free sentence. Anything true about your week."`,
          bantuan     : 'Jika siswa tampak kewalahan melihat panjang contoh: tunjuk hanya baris pertama tiap bagian hari, "On Monday" dan "On Saturday", lalu ucapkan "Start with this. Just the first sentence for each day. You can add more later.".',
          cue         : 'Contoh jadwal guru harus sudah disiapkan sebelum kelas. Jangan menulis contoh di depan siswa saat Layar 5 berlangsung.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa membuka Bagian B, Writing Space.
UCAP: "Now, your turn. Use your Planning Sheet. Write your weekly schedule."
UCAP: "For each day, start with On Monday, I usually."
UCAP: "Add times. Add first, then, after that if you want."
UCAP: "End with one free sentence. Your choice."
AKSI: Tulis pengingat struktur di papan tulis dengan baris berikut: "Start: On ___, I usually ___ at ___.", "Add: First, Then, After that, I ___.", "Close: My favorite day is ___.", "Optional: My birthday is in ___.".
UCAP: "The board helps you. But your sentences, your ideas. Your real week."
AKSI: Mundur dari depan kelas.
AKSI: Pantau penulisan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa bertanya kosakata yang tidak ada di TP-05 sampai TP-07: tulis kata itu di pojok papan tulis tanpa komentar.',
          cue         : 'Jangan potong Layar 6 lebih awal dari 8 menit. Selama Layar 6 guru mengamati dan mencatat, bukan mengajar.',
          darurat     : 'Jika setelah 5 menit lebih dari separuh kelas belum menulis kalimat pertama → minta semua siswa membaca bersama baris pertama contoh guru sekali, lalu lanjutkan menulis.',
          diferensiasi: {
            perluSupport: 'Terima dua hari saja, satu kalimat per hari, seperti "On Monday, I go to school at seven o\'clock. On Saturday, I stay at home.".',
            sudahBisa   : 'Minta tulis lima hari atau lebih dengan first, then, after that, lalu tambah kalimat penutup bebas.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Lanjutkan berkeliling dari Layar 6.
UCAP: "Keep writing. I will come to you."
AKSI: Kunjungi tiap meja siswa.
AKSI: Baca dua sampai tiga kalimat pertama tiap siswa dalam diam.
AKSI: Lanjutkan penilaian formatif untuk siswa yang belum dinilai.`,
          bantuan     : [
            'Jika struktur kalimat siswa sudah benar: angguk, ucapkan pelan "Good, keep going.".',
            'Jika tidak ada nama hari sama sekali: tunjuk Planning Sheet mereka, ucapkan pelan "Use your plan. Which day first?". Jangan tulis ulang kalimat mereka.',
            'Jika siswa menulis satu kalimat lalu berhenti: duduk di sebelahnya, baca kalimat yang ada, tanya pelan "And what about Saturday? What do you do?", tunggu jawaban lisan, lalu ucapkan "Write that.".',
          ],
          cue         : 'Jangan perbaiki ejaan. Fokus hanya pada dua hal: ada nama hari yang disebut dan ada satu kegiatan untuk hari itu.',
          darurat     : 'Jika menit ke-52 tercapai sebelum Layar 7 selesai → hentikan berkeliling, lewati Layar 8, Layar 9, dan Layar 10, langsung ke Layar 11.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Stop for a moment. Put your pen down."
AKSI: Jeda 3 detik.
AKSI: Tunggu semua pena diletakkan.
UCAP: "Read your schedule from the beginning. Just for yourself."
AKSI: Jeda 30 detik.
UCAP: "Now, find the day you wrote the most about. Underline that section."
AKSI: Jeda 30 detik.
UCAP: "That day is your favorite part of your schedule."`,
          bantuan     : 'Jika siswa bingung bagian mana yang harus digaris bawahi: bisikkan pelan "Hari mana yang paling banyak kamu tulis?", setelah mereka menunjuk ucapkan "Underline that part.".',
          cue         : 'Ini momen privat. Guru cukup berdiri di depan dan menjaga ruang tetap tenang.',
          darurat     : 'Jika waktu tersisa kurang dari 15 menit → lewati layar ini, langsung ke Layar 9.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Read the part you underlined, or your favorite day, to your partner."
UCAP: "Partner, listen. Then say: I like the part about Monday."
AKSI: Beri waktu tiga menit, masing-masing 90 detik per arah.
AKSI: Berkeliling dan dengarkan tanpa menyela.
UCAP: "Good. Now, you can go back and add or change one thing."
AKSI: Beri waktu 1 menit untuk perubahan kecil.`,
          bantuan     : 'Jika partner tidak tahu harus berkata apa setelah mendengar: berikan contoh, ucapkan "You can say: I like the part about Saturday.".',
          cue         : 'Instruksi sengaja positif. Minta siswa menyebut satu hal yang disukai, bukan koreksi.',
          darurat     : [
            'Jika waktu tersisa kurang dari 10 menit, atau draf siswa rata-rata kurang dari dua hari tertulis → lewati layar ini, langsung ke Layar 10.',
            'Jika peer sharing menjadi gaduh dalam satu menit → ucapkan "Okay. Back to your own paper.", langsung ke Layar 10.',
          ],
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Look at your writing one more time."
UCAP: "Circle all the days you wrote. Monday, Tuesday, any day."
AKSI: Beri waktu 20 detik.
UCAP: "Now, underline one time expression. O'clock. Half past. Anything with a time."
AKSI: Beri waktu 20 detik.
UCAP: "Good. You can see your days and your times, right there in your writing."`,
          bantuan     : 'Jika siswa tidak menemukan ekspresi waktu di tulisan mereka: dekati pelan, tunjuk satu kalimat yang ada angkanya, bisikkan "This. Is this a time? Underline it.".',
          cue         : 'Guru tidak mengumpulkan atau menilai hasil melingkari dan menggaris bawahi. Ini self-check siswa, bukan evaluasi.',
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
UCAP: "Who wants to read one day from their schedule?"
AKSI: Tunggu sukarelawan selama 5 detik.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
AKSI: Minta siswa itu membacakan satu bagian hari dari jadwalnya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "Thank you. What day did they write about?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk siswa lain yang mengangkat tangan.
AKSI: Minta siswa itu membacakan bagian hari yang berbeda ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "Thank you. What time did they mention?"
AKSI: Tunggu respons semua siswa.
UCAP: "Good listening, everyone."`,
          bantuan     : 'Jika tidak ada sukarelawan setelah 10 detik: panggil nama satu siswa yang menulis dengan baik dari observasi Layar 7, ucapkan dengan hangat "I read your schedule. It\'s really complete. Can you share one day?".',
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
UCAP: "A few weeks ago, you learned to say the time. Seven o'clock. Half past six."
UCAP: "Then, first, then, after that. Your daily schedule."
UCAP: "Then, Monday, Tuesday, Wednesday. The days of the week."
UCAP: "Today, you put it all in one place. Your whole week, in English."
AKSI: Jeda 3 detik.
UCAP: "That schedule is yours. Nobody else has the same week."
UCAP: "Next time, we start something new. Plants. Animals. Weather. The natural world."
UCAP: "But today, well done."
UCAP: "For now, goodbye, everyone."
AKSI: Tunggu semua siswa menjawab salam.`,
          bantuan     : null,
          cue         : 'Ucapkan "Nobody else has the same week." dengan tulus. Akhiri sesi dengan ritual goodbye, bukan instruksi administratif.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → minta siswa menulis nama mereka besar di bagian atas lembar kerja.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B08;
