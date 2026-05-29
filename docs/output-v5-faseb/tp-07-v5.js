/**
 * =============================================================
 * FLAF — TP B07 (Days, Months, and the Calendar)
 * File: docs/output-v5-faseb/tp-07-v5.js
 * Format: v5.0
 * Fase: B (Kelas 3–4)
 * Jenis: Biasa — Kluster B
 * Source: flaf-skenario-tp07-v2.txt (Fase B)
 * =============================================================
 */

const TP_B07 = {

  id       : 'tp-b07',
  nomor    : 7,
  kelas    : 3,
  nama     : 'Days, Months, and the Calendar',
  tema     : 'Menyebutkan hari, bulan, dan menggunakannya dalam konteks jadwal dan percakapan',
  kluster  : 'B',
  jenis    : 'Biasa',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat menyebutkan tujuh hari dalam seminggu dan dua belas bulan dalam setahun dengan urutan yang benar.',
    'Peserta didik dapat menggunakan pola "On [day], I…" untuk menceritakan kegiatan pada hari tertentu beserta waktunya.',
    'Peserta didik dapat mengisi jadwal mingguan sederhana menggunakan nama hari, kegiatan, dan ekspresi waktu.',
  ],

  vocab    : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'tomorrow'],

  persiapan: [
    'Tulisan tujuh hari di papan atau kartu besar — disiapkan sebelum kelas: singkatan (Mon Tue Wed Thu Fri Sat Sun) + nama lengkap di bawahnya',
    'Kalender bulan berjalan — boleh kalender HP yang ditampilkan — untuk L5 dan L6',
    'Lembar kerja siswa: 1 per siswa — tabel jadwal mingguan Mon–Fri dengan kolom Day/Activity/Time, plus dua baris di bawah: "My birthday is in ___" dan "Tomorrow is ___"',
  ],

  checklist: [
    'Tujuh hari sudah ditulis di papan sebelum kelas — singkatan + nama lengkap, dua baris',
    'Angka 1–12 dari L2 TIDAK dihapus sampai L5 selesai — dipakai sebagai referensi urutan bulan',
    'Hari yang dipakai di L6 ("today is... tomorrow is...") adalah hari yang sebenarnya hari ini — bukan contoh abstrak',
    'Penilaian formatif sudah dibuka di L8 — minimal 3 siswa sudah dinilai',
    'Referensi ke TP06 ("first, then, after that") sudah muncul di L1 dan L4',
    'Ekspresi waktu TP05 ("o\'clock", "half past") sudah muncul dalam kalimat di L4 dan L8',
    'Siswa yang membacakan di L9 berbeda dari yang menjawab di L3',
    'Teaser TP08 disampaikan dengan nada antusias — bukan formal',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔴',
    'L2 🟡',
    'L3 🟠',
    'L4 🟡',
    'L5 🔵',
    'L6 🟡',
    'L7 🟡',
    'L8 🔵',
    'L9 🔵',
    'L10 🟡',
    'L11 🔵',
  ],

  catatan: {
    risiko: [
      'L1: Chant hari lebih panjang dari chant sebelumnya (4 baris). Jika putaran pertama terasa kacau, itu normal — terlalu banyak kata baru sekaligus. Jangan ulangi lebih dari 2 putaran; L3 akan menguatkan apa yang belum tuntas di L1.',
      'L5: Dua belas bulan adalah volume kosakata terbesar dalam satu layar di sesi ini. Tujuan bukan hafalan — tujuan adalah paparan. Siswa yang bisa menyebut bulan ulang tahunnya sudah mencapai target L5. Jangan habiskan lebih dari 5 menit.',
      'L3 dan L5 adalah dua puncak kosakata yang terpisah jelas — hari vs bulan. Jangan gabungkan. Batas layar ini kritis untuk mencegah interference antara 7 hari dan 12 bulan.',
      'L8: Demo baris pertama di papan adalah wajib, bukan opsional. Siswa mungkin bingung dengan kolom "Activity" jika tidak ada contoh konkret sebelum mulai menulis.',
    ],
    autonomy: [
      '"Wednesday" boleh dieja fonetik di papan — "WED-nez-day" — selama sesi. Ini bukan crutch; ini realita bahwa ejaan Inggris tidak selalu mencerminkan pengucapan.',
      'Bulan ulang tahun yang paling sering muncul di kelas boleh ditandai bintang di papan — ini membuat data kelas terasa hidup dan memberi guru informasi berguna untuk TP08.',
      'Jika hari ini adalah Jumat, contoh "tomorrow" di L6 adalah "Saturday — we don\'t have school" — ini lebih bermakna dari contoh hari sekolah biasa.',
      'Pair practice di L7 boleh menggunakan hari yang berbeda per pasang — satu pasang cerita tentang Monday, pasang lain tentang Wednesday. Ini mencegah semua pasang menghasilkan output yang identik.',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — beri jeda 3 detik diam, pandang bagian kelas yang paling ramai, lanjutkan hanya setelah mereka berhenti.',
    cue    : 'TP07 adalah TP terakhir sebelum Panen Kluster B. Siswa tidak perlu tahu ini sekarang — tapi guru perlu merasakan bahwa semua yang diajarkan hari ini akan dipakai langsung di TP08.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Koneksi TP06 + Chant Hari
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali. Tanya kelas.

UCAP: "Last time — we talked about our daily schedule. First, then, after that."
UCAP: "Quick — what is the first thing you do in the morning? Use 'first.'"
→ Tunjuk 2–3 siswa. Terima: "First, I wake up!" atau "First, I brush my teeth!"
UCAP: "Good. Today — we talk about days. Which day is it today?"
→ Biarkan siswa menjawab dalam bahasa apapun. Terima semua.
UCAP: "In English — the days have names. Let's learn them."

AKSI: Langsung masuk ke chant hari dengan ketukan meja.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"Monday — Tuesday — Wednesday — GO!
Thursday — Friday — the week is done — GO!
Saturday — Sunday — rest and play — GO!
Seven days — that's one whole week — GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tersandung di "Wednesday" (pengucapan tricky): ucap perlahan — "Wednes-day" — sambil ketuk dua kali untuk dua suku kata. Biarkan siswa mengikuti tempo, bukan kecepatan normal.',
          cue    : 'Chant ini memperkenalkan tujuh hari dalam urutan yang benar sebelum drill di L3. Baris ketiga ("Saturday — Sunday — rest and play") menggunakan kontras kerja/istirahat yang membantu siswa mengingat bahwa Sabtu-Minggu adalah akhir pekan.',
          darurat: 'Jika kelas masih gaduh setelah chant selesai: tepuk satu kali keras, ucap "Freeze — sit down — listen." Lanjut ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation — Angka dan Morning/Afternoon
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tulis di papan angka 1–12 dalam dua baris:
  1  2  3  4  5  6
  7  8  9  10  11  12

UCAP: "Quick review. Count with me — one to twelve."
→ Tunjuk tiap angka, kelas hitung bersama. Cepat — tidak lebih dari 20 detik.

UCAP: "Good. Now — morning or afternoon?"
UCAP: "School starts in the — ?" [jeda, biarkan kelas menjawab]
→ Kelas: "Morning!"
UCAP: "We go home in the — ?"
→ Kelas: "Afternoon!"
UCAP: "And we sleep at — ?"
→ Kelas: "Night!"

UCAP: "Good. Today — we put days, times, and schedules together."`,
          bantuan: 'Jika kelas tidak merespons "morning": ucap sambil tunjuk langit lewat jendela atau jam di kelas — "Morning — pagi. Now is morning." Konteks nyata lebih cepat dari penjelasan.',
          cue    : 'Angka 1–12 di papan dipakai di L5 (bulan) — jangan hapus sebelum L5 selesai. Morning/afternoon akan muncul lagi di L4 dan L8.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 40,

      langkah: [

        // L3 — Drill Hari — Monday sampai Sunday
        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER

AKSI: Tunjukkan atau pastikan tujuh hari sudah tertulis di papan dalam dua baris:

  Monday    Tuesday    Wednesday    Thursday
  Friday    Saturday   Sunday

UCAP: "Let's say the days together."
→ Tunjuk satu per satu, kelas ucapkan. Dua putaran — pertama pelan, kedua cepat.

AKSI: Percepat — tunjuk hari secara acak (tidak berurutan):
UCAP: "This one?" [tunjuk Wednesday]
→ Kelas: "Wednesday!"
UCAP: "And this?" [tunjuk Friday]
→ Kelas: "Friday!"
UCAP: "This?" [tunjuk Monday]
→ Kelas: "Monday!"

AKSI: Hapus satu nama hari, tunjuk celah kosong:
UCAP: "Which day is missing?"
→ Kelas menyebut hari yang dihapus.
→ Ulangi 2–3 kali dengan hari berbeda.

AKSI: Tunjuk 2–3 siswa individual:
UCAP: "[nama] — what day comes after Monday?"
→ Jawaban: "Tuesday!"
UCAP: "[nama] — what day comes before Sunday?"
→ Jawaban: "Saturday!"`,
          diferensiasi: {
            perluSupport: 'cukup menyebut nama hari saat ditunjuk — tanpa konteks "before/after."',
            sudahBisa   : 'minta mereka ucapkan hari dalam kalimat — "Monday comes before Tuesday."',
          },
          bantuan: 'Jika "Wednesday" masih sulit: tulis fonetik di bawahnya — "WED-nez-day" — dan biarkan papan sebagai referensi. Tidak perlu dipaksakan hafal dalam satu sesi.',
          cue    : 'Drill acak ("which day is missing?") membuktikan pengenalan aktif, bukan sekadar hafalan urutan. Ini lebih penting dari kemampuan menyebut urutan berurutan.',
          darurat: null,
          energi : '🟠',
        },

        // L4 — Konteks Hari: "On Monday, I…"
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — let's use the days."
UCAP: "On Monday — I go to school."
→ Tulis di papan: On Monday, I go to school.
→ Jeda. Tunjuk "On Monday" lalu "go to school."

UCAP: "On Saturday — I don't go to school. I stay at home."
→ Tulis: On Saturday, I stay at home.

UCAP: "On Sunday — what do you do?"
→ Tunjuk 2–3 siswa. Terima jawaban dalam format apapun.
→ Bantu bentuk ke kalimat: "On Sunday, I ___."

🗣 TOGETHER
UCAP: "Say it with me — 'On Monday, I go to school.'"
→ Kelas mengulang.
UCAP: "On Saturday — your turn."
→ Kelas: "On Saturday, I stay at home!"

AKSI: Tunjuk kalimat di papan. Tambahkan waktu dari TP05:
UCAP: "Can we add a time? 'On Monday, I go to school at seven o'clock.'"
→ Tulis: On Monday, I go to school at seven o'clock.
UCAP: "Or — half past seven." [tulis alternatif di bawah]
UCAP: "O'clock — or half past. Both work."
UCAP: "Both the day AND the time. That is a complete sentence."`,
          bantuan: 'Jika siswa kesulitan membentuk kalimat "On Sunday, I ___": beri pilihan biner — "On Sunday — sekolah atau di rumah?" — setelah mereka memilih, bantu bentuk kalimatnya: "So — \'On Sunday, I stay at home.\'"',
          cue    : 'Kalimat "On Monday, I go to school at seven o\'clock" adalah integrasi tiga kluster: hari (TP07) + kegiatan (TP06) + jam (TP05). Tunjuk ini secara eksplisit sebagai momen "lihat apa yang sudah kalian bisa" — siswa perlu merasakan pencapaian ini sebelum masuk ke bulan di L5.',
          darurat: null,
          energi : '🟡',
        },

        // L5 — Introduksi Bulan: Konteks Ulang Tahun
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pelan suara. Tunggu 2 detik sebelum mulai.

👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — months. There are twelve months in a year."
UCAP: "Listen — I will say them once."

AKSI: Ucapkan dua belas bulan dengan ritme pelan dan jelas:
"January — February — March — April —
May — June — July — August —
September — October — November — December."

→ Tulis di papan dalam dua kolom:
  January    July
  February   August
  March      September
  April      October
  May        November
  June       December

UCAP: "Twelve months. January is number one — December is number twelve."
AKSI: Tunjuk angka 1–12 yang masih ada di papan dari L2.
UCAP: "One — January. Two — February. Three — March..." [tunjuk angka dan bulan secara paralel]
→ Lanjutkan sampai 6. Cukup — jangan sampai 12.

UCAP: "Now — important question. What month is your birthday?"
→ Tunjuk diri sendiri: "My birthday is in [bulan]. What about you?"
→ Tunjuk 4–5 siswa. Biarkan mereka menjawab — dalam bahasa apapun jika belum tahu nama bulannya.
→ Untuk setiap jawaban, ucapkan nama bulan dalam Bahasa Inggris dan tunjuk di papan.`,
          bantuan: 'Jika siswa tidak tahu bulan ulang tahunnya: tanya "Kamu lahir bulan berapa?" dalam Bahasa Indonesia, bantu konversi ke nama Inggris, dan tunjuk di papan. Tidak perlu semua siswa menjawab — 4–5 sudah cukup.',
          cue    : 'Dua belas bulan adalah terlalu banyak untuk dihafal dalam satu sesi. Tujuan L5 bukan hafalan — tujuannya adalah siswa bisa mengenali dan menyebut bulan ulang tahun mereka. Fokuslah pada 3–4 bulan yang paling sering muncul dari jawaban kelas.',
          darurat: 'Jika L5 melewati 7 menit: hentikan di introduksi bulan. Lewati pertanyaan ulang tahun individual — lanjut ke L6. Scaffold bulan di papan sudah cukup untuk L8.',
          energi : '🔵',
        },

        // L6 — Introduksi: Tomorrow
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Good. We know the months. Now — something closer. Just one day away."

AKSI: Tunjuk kalender atau nama hari ini di papan.

UCAP: "Today is [hari ini — sebutkan hari yang sebenarnya]."
→ Tunjuk hari di papan.
UCAP: "And tomorrow — tomorrow is [hari berikutnya]."
→ Tulis di papan: Tomorrow is [hari].
→ Jeda 3 detik.

UCAP: "Tomorrow — artinya besok. The day after today."

AKSI: Berikan dua contoh natural:
UCAP: "Today is [hari ini]. Tomorrow is [hari berikutnya]."
UCAP: "Tomorrow — I will go to school." [jika besok adalah hari sekolah]
→ Tulis: Tomorrow, I will go to school.

UCAP: "Now — your turn. What will you do tomorrow?"
→ Tunjuk 2–3 siswa. Terima: "Tomorrow, I go to school" atau "Tomorrow I play."

🗣 TOGETHER
UCAP: "Say it — tomorrow is [hari besok]!"
→ Kelas mengulang.`,
          bantuan: 'Jika siswa tidak tahu hari apa sekarang: tunjuk kalender atau HP guru. Jangan lewatkan fakta ini — "today" dan "tomorrow" hanya bermakna jika dikaitkan dengan hari nyata.',
          cue    : 'Gunakan hari yang sebenarnya hari ini — jangan contoh abstrak. "Tomorrow is Wednesday" terasa nyata jika hari ini memang Selasa. Kenyataan ini yang membuat kata "tomorrow" bermakna bagi siswa kelas 3.',
          darurat: null,
          energi : '🟡',
        },

        // L7 — Pair Practice — Ceritakan Jadwal Satu Hari [FLEX]
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelah mereka.

UCAP: "Tell your partner about one day. Choose any day — Monday, Tuesday, Wednesday..."
UCAP: "Say: 'On [day], I usually...'"

AKSI: Demo singkat dengan satu siswa sukarelawan:
UCAP: "[nama] — tell me about your Monday."
→ Siswa: "On Monday, I go to school at seven o'clock. First, I..."
UCAP: "Good. Now — your turn."

AKSI: Beri waktu 4 menit — masing-masing 2 menit per arah. Circulate dan dengarkan.`,
          diferensiasi: {
            perluSupport: 'cukup satu kalimat — "On Monday, I go to school."',
            sudahBisa   : 'ceritakan dua atau tiga kegiatan dalam satu hari, gunakan "first/then/after that."',
          },
          bantuan: `Jika satu pasang tidak tahu mulai dari mana: tunjuk daftar hari di papan, ucap — "Choose one day — which one?" — setelah mereka memilih, arahkan: "Now say: 'On [day], I...'"`,
          cue    : 'Pair practice boleh menggunakan hari yang berbeda per pasang — satu pasang cerita tentang Monday, pasang lain tentang Wednesday. Ini mencegah semua pasang menghasilkan output yang identik.',
          darurat: '[FLEX — lewati jika waktu tersisa < 18 menit atau energi kelas di bawah 🟡] Jika pair practice menjadi gaduh dalam 1 menit: hentikan, ucap "Okay — take your pencil. Let\'s write." Lanjut ke L8 langsung.',
          energi : '🟡',
        },

        // L8 — Writing Individual — Jadwal Mingguan
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L6 (L7 dilewati) — ucap: "Okay. Take your pencil. Let's write." Jeda 3 detik. Bagikan lembar kerja.
AKSI: Bagikan lembar kerja (1 per siswa).

Lembar kerja berisi tabel:

  MY WEEKLY SCHEDULE

  Day        | Activity              | Time
  -----------|-----------------------|------------------
  Monday     | _____________________ | _____ o'clock
  Tuesday    | _____________________ | _____ o'clock
  Wednesday  | _____________________ | half past _____
  Thursday   | _____________________ | _____ o'clock
  Friday     | _____________________ | _____ o'clock

  My birthday is in _________________.
  Tomorrow is _________________.

UCAP: "Fill in the table. Write what you do on each day. Write the time."
UCAP: "Look — the days are already written for you. Just fill in the activity and the time."
UCAP: "At the bottom — write your birthday month and what day tomorrow is."

👂 LISTEN FIRST — guru demo mengisi satu baris di papan:
UCAP: "Watch me. Monday — I go to school — seven o'clock." [tulis di baris Monday]
UCAP: "Now — your turn."

AKSI: Circulate. Bergerak ke meja siswa — jangan berdiri di depan.`,
          diferensiasi: {
            perluSupport: 'cukup isi tiga baris pertama (Monday, Tuesday, Wednesday). Kolom birthday dan tomorrow opsional.',
            sudahBisa   : 'setelah tabel selesai, tambah satu kalimat di bawah tabel: "On Saturday, I usually..." dengan kegiatan akhir pekan.',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai di TP ini. Kolom "Time" di lembar kerja menggabungkan "o\'clock" dan "half past" — siswa yang hanya tahu "o\'clock" tidak perlu dikoreksi; kolom Wednesday ("half past") boleh diisi "o\'clock" juga.',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai: minta siswa hanya mengisi dua baris pertama dan kolom "My birthday." Langsung ke L10 tanpa melalui L9.',
          energi : '🔵',
        },

        // L9 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil tulisan siswa. Pilih 2 hasil — satu yang menggunakan nama hari dengan benar, satu yang menambahkan kegiatan yang menarik atau tidak biasa.

UCAP: "Good. Let's hear from two friends."
→ Minta 2 siswa membacakan satu baris dari tabel mereka.
→ Kelas mendengarkan.

UCAP (setelah tiap siswa membacakan): "Nice. Say it together."
→ Kelas ulang kalimat yang baru dibacakan.

UCAP: "One question for the class — what month were you born? Raise your hand for January."
→ Angkat tangan sendiri jika lahir di bulan itu, hitung tangan yang naik.
→ Lanjutkan untuk 2–3 bulan lain yang paling banyak muncul di kelas.`,
          bantuan: 'Jika siswa yang diminta membaca menolak: ucap "That\'s okay" dan tunjuk siswa lain.',
          cue    : 'Pilih siswa yang berbeda dari yang menjawab di L3. Pertanyaan "raise your hand for January" adalah cara cepat mengaktifkan kembali nama bulan tanpa meminta semua siswa berbicara — ini juga memberi data guru tentang distribusi ulang tahun di kelas.',
          darurat: '[FLEX — lewati jika waktu tersisa < 10 menit]',
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 8,

      langkah: [

        // L10 — Review + Hapus Papan
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Siswa simpan lembar kerja. Guru kembali ke depan kelas.

UCAP: "Good work today. Let's remember."
UCAP: "How many days in a week?"
→ Kelas: "Seven!"
UCAP: "What is the first day?"
→ Kelas: "Monday!"
UCAP: "And the last day of the weekend?"
→ Kelas: "Sunday!"
UCAP: "How many months in a year?"
→ Kelas: "Twelve!"
UCAP: "What is the first month?"
→ Kelas: "January!"
UCAP: "And — what does 'tomorrow' mean?"
→ Kelas: "Besok!" atau "The next day!"

UCAP: "One sentence — 'On Monday, I...?' Finish it."
→ Satu siswa atau kelas: "On Monday, I go to school at seven o'clock!"

AKSI: Hapus papan satu bagian per satu. Kelas ucapkan yang dihapus.
Urutan hapus: tomorrow → bulan-bulan → hari-hari → pola "On [day], I…"`,
          bantuan: null,
          cue    : 'Jaga ritme review tetap cepat — ini bukan drill baru. Setiap pertanyaan butuh maksimal 5 detik per respons. Jika kelas lambat menjawab satu pertanyaan, ucapkan jawabannya sendiri dan lanjut.',
          darurat: null,
          energi : '🟡',
        },

        // L11 — Closure Emosional + Teaser TP08
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan.

UCAP: "Before we finish — I want to ask one thing."
UCAP: "What day is your favorite day of the week? And why?"
→ Tunjuk 1–2 siswa yang mau berbagi. Jawaban dalam bahasa apapun diterima.
→ Bantu terjemahkan ke Bahasa Inggris secara singkat jika mereka menjawab dalam Bahasa Indonesia.

→ Jeda 3 detik setelah jawaban terakhir.

UCAP: "Good. Every day has a name. Every month has a name. Now you know them."

UCAP: "Next time — something special again. We will write our whole week schedule — days, times, activities — all together."
[Teaser TP08 — Writing: My Weekly Schedule — Panen]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : 'Teaser TP08 harus terasa seperti undangan, bukan ancaman. "Write our whole week schedule" diucapkan dengan nada antusias — bukan formal. Siswa sudah punya semua alat yang mereka butuhkan; TP08 adalah saatnya menggunakannya.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B07;
