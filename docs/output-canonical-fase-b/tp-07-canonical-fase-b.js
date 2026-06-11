const TP_B07 = {

  // METADATA
  id     : 'tp-b07',
  nomor  : 7,
  kelas  : 3,
  nama   : 'Days, Months, and the Calendar',
  tema   : 'Menyebutkan hari, bulan, dan menggunakannya dalam konteks jadwal dan percakapan',
  kluster: 'B — Waktu, Jadwal, dan Kebiasaan',
  jenis  : 'Biasa',

  // KURIKULUM
  indikator : [
    'Peserta didik dapat menyebutkan tujuh hari dalam seminggu dan dua belas bulan dalam setahun dengan urutan yang benar.',
    'Peserta didik dapat menggunakan pola "On [day], I…" untuk menceritakan kegiatan pada hari tertentu beserta waktunya.',
    'Peserta didik dapat mengisi jadwal mingguan sederhana menggunakan nama hari, kegiatan, dan ekspresi waktu.',
  ],
  vocab     : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
               'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
               'September', 'October', 'November', 'December', 'tomorrow'],
  persiapan : [
    'Kartu tujuh hari, satu kartu besar berisi singkatan dan nama lengkap tiap hari, disiapkan sebelum kelas dimulai, untuk Layar 3.',
    'Kalender bulan berjalan, boleh kalender telepon guru yang dapat dilihat semua siswa, untuk Layar 5 dan Layar 6.',
    'Lembar kerja siswa satu per siswa, berisi tabel jadwal mingguan kosong dengan kolom hari, kegiatan, dan jam, serta dua baris isian bulan ulang tahun dan hari besok, di meja guru sebelum dibagikan.',
    'Papan tulis dan spidol untuk menulis angka, pola On Monday I, nama bulan, dan kalimat tomorrow di Layar 2, Layar 4, Layar 5, dan Layar 6.',
    'Tidak ada material lain di meja siswa sampai instruksi distribusi.',
  ],
  media     : [],
  printables: [],
  ringkasan : [
    { layar:  0, judul: 'Pre-Opening · Settling dan Transisi',                       tujuan: 'Guru mengunci perhatian dan menenangkan kelas sebelum sesi dimulai.' },
    { layar:  1, judul: 'Pembuka · Koneksi TP-06 dan Chant Hari',                    tujuan: 'Guru menghubungkan TP-06 dan memperkenalkan tujuh hari lewat chant.' },
    { layar:  2, judul: 'Pembuka · Reactivation Numbers dan Morning Afternoon',      tujuan: 'Guru meninjau angka dan penanda waktu hari.' },
    { layar:  3, judul: 'Inti · Drill Hari Monday sampai Sunday',                    tujuan: 'Guru memimpin drill nama hari.' },
    { layar:  4, judul: 'Inti · Konteks Hari On Monday I',                           tujuan: 'Guru memodelkan kalimat berkonteks hari dan jam.' },
    { layar:  5, judul: 'Inti · Introduksi Bulan Konteks Ulang Tahun',               tujuan: 'Guru memperkenalkan dua belas bulan lewat konteks ulang tahun.' },
    { layar:  6, judul: 'Inti · Introduksi Tomorrow',                                tujuan: 'Guru memperkenalkan kata tomorrow dengan hari nyata.' },
    { layar:  7, judul: 'Inti · Pair Practice Ceritakan Jadwal Satu Hari',           tujuan: 'Guru memandu latihan bercerita satu hari berpasangan.' },
    { layar:  8, judul: 'Inti · Writing Individual Jadwal Mingguan',                 tujuan: 'Guru memandu siswa menulis jadwal mingguan.' },
    { layar:  9, judul: 'Inti · Berkeliling dan Review Tulisan',                     tujuan: 'Guru meninjau hasil tulisan dan mengaktifkan kembali nama bulan.' },
    { layar: 10, judul: 'Penutup · Review dan Hapus Papan',                          tujuan: 'Guru mengonsolidasi hari, bulan, dan tomorrow lalu menghapus papan tulis.' },
    { layar: 11, judul: 'Penutup · Closure Emosional dan Teaser TP-08',              tujuan: 'Guru menutup sesi dengan refleksi dan teaser TP-08.' },
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
UCAP: "Last time, we talked about our daily schedule. First, then, after that."
UCAP: "Quick, what is the first thing you do in the morning? Use first."
AKSI: Tunjuk dua sampai tiga siswa secara acak.
AKSI: Terima jawaban dalam format apa pun.
UCAP: "Good. Today, we talk about days. Which day is it today?"
AKSI: Tunjuk dua sampai tiga siswa secara acak.
AKSI: Terima jawaban dalam format apa pun.
UCAP: "In English, the days have names. Let's learn them."
👂 LISTEN FIRST
AKSI: Ucapkan chant hari dengan ritme ketukan meja.
UCAP: "Monday, Tuesday, Wednesday, go!"
UCAP: "Thursday, Friday, the week is done, go!"
UCAP: "Saturday, Sunday, rest and play, go!"
UCAP: "Seven days, that's one whole week, go!"
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Ucapkan chant dua putaran — putaran pertama pelan, putaran kedua cepat.
UCAP: "Say it with me!"
UCAP: "Monday, Tuesday, Wednesday, go!"
UCAP: "Thursday, Friday, the week is done, go!"
UCAP: "Saturday, Sunday, rest and play, go!"
UCAP: "Seven days, that's one whole week, go!"`,
          bantuan     : 'Jika siswa tersandung di "Wednesday": ucapkan perlahan "Wednes-day" sambil ketuk meja dua kali untuk dua suku kata. Biarkan siswa mengikuti tempo, bukan kecepatan normal.',
          cue         : 'Ucapkan jembatan ke TP-06 sebelum chant dimulai, bukan sesudahnya.',
          darurat     : 'Jika kelas masih gaduh setelah chant selesai → tepuk tangan sekali, ucapkan "Freeze. Sit down. Listen.", langsung ke Layar 2.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Tulis angka 1 sampai 12 di papan tulis dengan nama Inggrisnya, seperti 1 = one, 2 = two, sampai 12 = twelve.
UCAP: "Quick review. Count with me, one to twelve."
AKSI: Tunjuk tiap angka di papan tulis satu per satu.
AKSI: Tunggu semua siswa menghitung bersama.
UCAP: "Good. Now, morning or afternoon?"
AKSI: Ucapkan "School starts in the" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Ucapkan "We go home in the" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Ucapkan "And we sleep at" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
UCAP: "Good. Today, we put days, times, and schedules together."`,
          bantuan     : 'Jika kelas tidak merespons "morning": ucapkan "Morning" sambil tunjuk jam di kelas. Konteks nyata lebih cepat daripada penjelasan.',
          cue         : 'Pertahankan angka 1 sampai 12 di papan tulis sampai Layar 5 selesai.',
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
          teks        : `AKSI: Tempel kartu tujuh hari di papan tulis dalam dua baris: Monday, Tuesday, Wednesday, Thursday di baris pertama; Friday, Saturday, Sunday di baris kedua.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk hari pertama di papan tulis.
UCAP: "Let's say the days together."
UCAP: "Say it together!"
AKSI: Tunjuk tiap hari satu per satu, tunggu semua siswa mengucapkan tiap hari.
AKSI: Ulangi sekali lebih cepat.
AKSI: Tunjuk "Wednesday" di papan tulis.
UCAP: "This one?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk "Friday" di papan tulis.
UCAP: "And this?"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk "Monday" di papan tulis.
UCAP: "This?"
AKSI: Tunggu respons semua siswa.
AKSI: Lepaskan satu kartu hari dari papan tulis.
AKSI: Tunjuk celah kosong di papan tulis.
UCAP: "Which day is missing?"
AKSI: Tunggu respons semua siswa.
AKSI: Tempel kembali kartu hari yang dilepas.
AKSI: Ulangi dua sampai tiga kali dengan hari berbeda.
AKSI: Tunjuk satu siswa.
UCAP: "What day comes after Monday?"
AKSI: Tunggu jawaban siswa yang ditunjuk.
AKSI: Tunjuk satu siswa lain.
UCAP: "What day comes before Sunday?"
AKSI: Tunggu jawaban siswa yang ditunjuk.`,
          bantuan     : 'Jika "Wednesday" masih sulit: tulis fonetik "WED-nez-day" di bawah kartunya di papan tulis, biarkan sebagai referensi. Tidak perlu dipaksakan hafal dalam satu sesi.',
          cue         : null,
          darurat     : null,
          diferensiasi: {
            perluSupport: 'Terima nama hari saat ditunjuk tanpa konteks before atau after.',
            sudahBisa   : 'Minta ucapkan hari dalam kalimat, seperti "Monday comes before Tuesday.".',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `👂 LISTEN FIRST
UCAP: "Now, let's use the days."
UCAP: "On Monday, I go to school."
AKSI: Tulis "On Monday, I go to school." di papan tulis.
AKSI: Jeda 1 detik.
AKSI: Tunjuk tulisan "On Monday" di papan tulis.
AKSI: Tunjuk tulisan "go to school" di papan tulis.
UCAP: "On Saturday, I don't go to school. I stay at home."
AKSI: Tulis "On Saturday, I stay at home." di papan tulis.
UCAP: "On Sunday, what do you do?"
AKSI: Tunjuk dua sampai tiga siswa secara acak.
AKSI: Terima jawaban dalam format apa pun.
AKSI: Jika jawaban siswa belum berbentuk kalimat, ucapkan "On Sunday, I" dan ajak mereka melanjutkan.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan "On Monday, I go to school." di papan tulis.
UCAP: "Say it with me!"
UCAP: "On Monday, I go to school."
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "On Saturday, I stay at home." di papan tulis.
UCAP: "And Saturday?"
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk tulisan "On Monday, I go to school." di papan tulis.
UCAP: "Can we add a time? On Monday, I go to school at seven o'clock."
AKSI: Tulis "On Monday, I go to school at seven o'clock." di papan tulis.
UCAP: "Or half past seven. On Monday, I go to school at half past seven."
AKSI: Tulis "On Monday, I go to school at half past seven." di papan tulis di bawah kalimat pertama.
UCAP: "O'clock, or half past. Both work."
UCAP: "Both the day and the time. That is a complete sentence."`,
          bantuan     : 'Jika siswa kesulitan membentuk kalimat "On Sunday, I": beri pilihan biner, "On Sunday, school or home?", setelah mereka memilih, bantu bentuk kalimatnya "On Sunday, I stay at home.".',
          cue         : 'Tunjuk kalimat "On Monday, I go to school at seven o\'clock." sebagai contoh kalimat lengkap yang menggabungkan hari, kegiatan, dan jam.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Turunkan volume suara.
AKSI: Jeda 2 detik.
👂 LISTEN FIRST
UCAP: "Now, months. There are twelve months in a year."
UCAP: "Listen. I will say them once."
AKSI: Ucapkan dua belas bulan satu per satu dengan tempo lambat.
UCAP: "January, February, March, April."
UCAP: "May, June, July, August."
UCAP: "September, October, November, December."
AKSI: Tulis dua belas bulan di papan tulis dalam dua kolom, January sampai June di kolom kiri, July sampai December di kolom kanan.
UCAP: "Twelve months. January is number one. December is number twelve."
AKSI: Tunjuk angka 1 sampai 12 yang masih ada di papan tulis dari Layar 2.
AKSI: Tunjuk angka dan bulan secara paralel dari satu sampai enam.
UCAP: "One, January. Two, February. Three, March."
UCAP: "Now, important question. What month is your birthday?"
AKSI: Tunjuk diri sendiri.
AKSI: Ucapkan "My birthday is in" diikuti bulan ulang tahun guru.
UCAP: "What about you?"
AKSI: Tunjuk empat sampai lima siswa satu per satu.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Untuk tiap jawaban, ucapkan nama bulan dalam Bahasa Inggris dan tunjuk bulan itu di papan tulis.`,
          bantuan     : 'Jika siswa tidak tahu bulan ulang tahunnya: tanyakan "Kamu lahir bulan berapa?", bantu konversi ke nama Inggris, lalu tunjuk bulan itu di papan tulis. Empat sampai lima jawaban sudah cukup.',
          cue         : 'Fokus pada tiga sampai empat bulan yang paling sering muncul dari jawaban kelas. Target layar ini adalah mengenali bulan ulang tahun, bukan menghafal dua belas bulan.',
          darurat     : 'Jika Layar 5 melewati 7 menit → hentikan di introduksi bulan, lewati pertanyaan ulang tahun individual, langsung ke Layar 6.',
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Good. We know the months. Now, something closer. Just one day away."
AKSI: Tunjuk hari ini di kalender bulan berjalan.
AKSI: Ucapkan "Today is" diikuti nama hari ini dalam Bahasa Inggris.
AKSI: Ucapkan "Tomorrow is" diikuti nama hari besok dalam Bahasa Inggris.
AKSI: Tulis "Tomorrow is" diikuti nama hari besok di papan tulis.
AKSI: Jeda 3 detik.
AKSI: Beri penjelasan bahwa "tomorrow" berarti besok, hari sesudah hari ini.
AKSI: Ucapkan "Today is" diikuti nama hari ini, lalu "Tomorrow is" diikuti nama hari besok.
AKSI: Tulis "Tomorrow, I will go to school." di papan tulis.
UCAP: "Tomorrow, I will go to school."
UCAP: "Now, your turn. What will you do tomorrow?"
AKSI: Tunjuk dua sampai tiga siswa secara acak.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk tulisan "Tomorrow is" di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.`,
          bantuan     : 'Jika siswa tidak tahu hari apa sekarang: tunjuk kalender bulan berjalan. Kata "today" dan "tomorrow" hanya bermakna jika dikaitkan dengan hari nyata.',
          cue         : 'Gunakan nama hari yang sebenarnya hari ini, bukan contoh abstrak.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelahnya.
UCAP: "Tell your partner about one day. Choose any day. Monday, Tuesday, Wednesday."
UCAP: "Start with: On Monday, I usually go to school."
AKSI: Tanyakan siapa yang mau menjadi contoh.
AKSI: Tunjuk satu siswa yang mengangkat tangan.
UCAP: "Tell me about your Monday."
AKSI: Tunggu jawaban siswa yang ditunjuk.
UCAP: "Good. Now, your turn."
AKSI: Beri waktu empat menit, masing-masing dua menit per arah.
AKSI: Berkeliling dan dengarkan tanpa menyela.`,
          bantuan     : 'Jika satu pasang tidak tahu harus mulai dari mana: tunjuk daftar hari di papan tulis, ucapkan "Choose one day. Which one?", setelah mereka memilih arahkan "Now say: On Monday, I".',
          cue         : null,
          darurat     : [
            'Jika waktu tersisa kurang dari 18 menit, atau energi kelas rendah → lewati layar ini, langsung ke Layar 8.',
            'Jika pair practice menjadi gaduh dalam satu menit → ucapkan "Okay. Take your pencil. Let\'s write.", langsung ke Layar 8.',
          ],
          diferensiasi: {
            perluSupport: 'Terima satu kalimat saja, "On Monday, I go to school.".',
            sudahBisa   : 'Minta ceritakan dua atau tiga kegiatan dalam satu hari dengan first, then, after that.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Okay. Take your pencil. Let's write."
AKSI: Jeda 3 detik.
AKSI: Bagikan lembar kerja, satu per siswa.
UCAP: "Fill in the table. Write what you do on each day. Write the time."
UCAP: "Look, the days are already written for you. Monday, Tuesday, Wednesday. Just fill in the activity and the time."
UCAP: "At the bottom, write your birthday month and what day tomorrow is."
👂 LISTEN FIRST
AKSI: Tulis satu baris contoh di baris Monday di papan tulis: Monday, go to school, seven o'clock.
UCAP: "Watch me. Monday, I go to school, seven o'clock."
UCAP: "Now, your turn."
AKSI: Pantau penulisan semua siswa.
AKSI: Buka overlay penilaian formatif.`,
          bantuan     : 'Jika siswa bingung dengan kolom Activity: tunjuk baris contoh Monday di papan tulis, bisikkan "What do you do on Monday? Write it here.".',
          cue         : 'Terima isian o\'clock di kolom mana pun, termasuk baris Wednesday. Jangan koreksi siswa yang belum memakai half past.',
          darurat     : 'Jika waktu tersisa 8 menit atau kurang saat layar ini dimulai → minta siswa hanya mengisi dua baris pertama dan baris bulan ulang tahun, langsung ke Layar 10 tanpa melalui Layar 9.',
          diferensiasi: {
            perluSupport: 'Izinkan mengisi hanya tiga baris pertama, Monday, Tuesday, dan Wednesday.',
            sudahBisa   : 'Setelah tabel selesai, minta tambah satu kalimat "On Saturday, I usually" dengan kegiatan akhir pekan.',
          },
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Pantau hasil tulisan semua siswa.
AKSI: Pilih dua hasil tulisan siswa — satu yang menggunakan nama hari dengan benar, satu yang menambahkan kegiatan yang tidak biasa.
AKSI: Panggil dua siswa yang sudah dipilih ke depan.
UCAP: "Good. Let's hear from two friends."
AKSI: Minta siswa pertama membacakan satu baris dari tabelnya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "Nice."
AKSI: Tulis baris yang dibacakan siswa pertama di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Minta siswa kedua membacakan satu baris dari tabelnya ke semua siswa.
AKSI: Tunggu semua siswa mendengarkan.
UCAP: "Nice."
AKSI: Tulis baris yang dibacakan siswa kedua di papan tulis.
🗣 TOGETHER
AKSI: Ajak semua siswa mengucapkan bersama.
AKSI: Tunjuk kalimat yang baru ditulis di papan tulis.
UCAP: "Say it together!"
AKSI: Tunggu respons semua siswa.
AKSI: Tunjuk diri sendiri.
UCAP: "One question for everyone. What month were you born? Raise your hand for January."
AKSI: Catat berapa siswa yang mengangkat tangan.
AKSI: Ulangi untuk dua sampai tiga bulan lain yang paling banyak muncul di kelas.`,
          bantuan     : 'Jika siswa yang diminta membaca menolak: ucapkan "That\'s okay.", lalu tunjuk siswa lain tanpa komentar tambahan.',
          cue         : 'Pilih siswa yang berbeda dari peserta Layar 3.',
          darurat     : 'Jika waktu tersisa kurang dari 10 menit → lewati layar ini, langsung ke Layar 10.',
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
UCAP: "How many days in a week?"
AKSI: Tunggu respons semua siswa.
UCAP: "What is the first day?"
AKSI: Tunggu respons semua siswa.
UCAP: "And the last day of the weekend?"
AKSI: Tunggu respons semua siswa.
UCAP: "How many months in a year?"
AKSI: Tunggu respons semua siswa.
UCAP: "What is the first month?"
AKSI: Tunggu respons semua siswa.
UCAP: "And what does tomorrow mean?"
AKSI: Tunggu respons semua siswa.
AKSI: Ucapkan "On Monday, I" dan ajak siswa melengkapi kalimat.
AKSI: Tunggu respons semua siswa.
AKSI: Hapus tulisan "Tomorrow is" dan "Tomorrow, I will go to school." dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan "tomorrow".
AKSI: Hapus nama bulan dari papan tulis.
AKSI: Tunggu semua siswa mengucapkan bulan yang dihapus.
AKSI: Lepaskan kartu hari dari papan tulis satu per satu.
AKSI: Tunggu semua siswa mengucapkan tiap hari yang dilepas.
AKSI: Hapus pola "On Monday, I" dari papan tulis.`,
          bantuan     : null,
          cue         : 'Jaga ritme review tetap cepat. Beri maksimal 5 detik per respons, lalu ucapkan jawabannya sendiri dan lanjut.',
          darurat     : null,
          diferensiasi: null,
        },

        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk tegak dan rileks.
AKSI: Turunkan volume suara.
UCAP: "Before we finish, I want to ask one thing."
UCAP: "What is your favorite day of the week? And why?"
AKSI: Tunjuk satu sampai dua siswa yang mengangkat tangan.
AKSI: Tunggu jawaban tiap siswa yang ditunjuk.
AKSI: Jeda 3 detik.
UCAP: "Good. Every day has a name. Every month has a name. Now you know them."
UCAP: "Next time, something special again. We will write our whole week schedule. Days, times, activities, all together."
UCAP: "For now, goodbye, everyone."
AKSI: Tunggu semua siswa menjawab salam.`,
          bantuan     : null,
          cue         : 'Akhiri sesi dengan ritual goodbye, bukan instruksi administratif. Ucapkan teaser TP-08 dengan nada antusias.',
          darurat     : 'Jika ada sisa waktu satu sampai dua menit → biarkan siswa merapikan meja, jangan tambahkan aktivitas baru.',
          diferensiasi: null,
        },

      ],
    },

  ],

};

export default TP_B07;
