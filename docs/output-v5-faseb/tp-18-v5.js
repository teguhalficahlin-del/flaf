/**
 * =============================================================
 * FLAF — TP B18 (Talking About the Past)
 * File: docs/output-v5-faseb/tp-18-v5.js
 * Format: v5.0
 * Fase: B (Kelas 4)
 * Jenis: Kompleks — Kluster E
 * Source: flaf-skenario-tp18-v2.txt (Fase B)
 * =============================================================
 */

const TP_B18 = {

  id       : 'tp-b18',
  nomor    : 18,
  kelas    : 4,
  nama     : 'Talking About the Past',
  tema     : 'Menceritakan kejadian di masa lampau menggunakan bentuk kata kerja sederhana',
  kluster  : 'E',
  jenis    : 'Kompleks',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat menggunakan bentuk lampau sederhana "went," "ate," dan "played" dalam kalimat tentang kegiatan kemarin.',
    'Peserta didik dapat membentuk kalimat dengan pola "Yesterday, I…" untuk menceritakan kejadian di masa lampau.',
    'Peserta didik dapat menulis urutan kegiatan kemarin menggunakan kata penghubung "first," "then," dan "after that."',
  ],

  vocab    : ['went', 'ate', 'played', 'Yesterday, I...'],

  persiapan: [
    'Kartu kegiatan: 6 kartu — satu kegiatan per kartu dengan gambar dan kata, disiapkan dalam amplop per kelompok SEBELUM kelas dimulai (lihat L8):\n    Kartu 1: "woke up" [gambar orang bangun]\n    Kartu 2: "ate breakfast" [gambar makan pagi]\n    Kartu 3: "went to school" [gambar anak ke sekolah]\n    Kartu 4: "played football" [gambar anak bermain bola]\n    Kartu 5: "ate lunch" [gambar makan siang]\n    Kartu 6: "went to sleep" [gambar orang tidur]',
    'Lembar kerja siswa: 1 per siswa — template MY YESTERDAY (lihat L10)',
    'Papan tulis + spidol untuk dua kolom TODAY vs YESTERDAY di L3, pasangan present-past go→went / eat→ate / play→played di L4, dan pola "Yesterday, I…" di L6 — tidak dihapus sampai L10 selesai',
  ],

  checklist: [
    'Kartu kegiatan (6 kartu) sudah disiapkan dalam amplop per kelompok sebelum kelas',
    'Tiga pasang present-past (go-went, eat-ate, play-played) sudah tertulis di papan dan TIDAK dihapus sampai L10 selesai',
    'Penilaian formatif sudah dibuka di L10 — minimal 3 siswa sudah dinilai',
    'Referensi ke TP17 ("we talked about going places — now what about yesterday?") sudah disampaikan di L1',
    'Kontras TODAY vs YESTERDAY sudah dibuat visual di papan di L3 — dua kolom terpisah',
    'Koneksi ke TP06 ("first, then, after that") sudah disampaikan eksplisit di L6',
    'Cerita guru di L7 menggunakan hari yang nyata — bukan hari abstrak',
    'Overgeneralisasi "goed/eated" TIDAK dikoreksi keras selama L10 — dicatat untuk feedback individual',
  ],

  printables: [
    { file: 'tp-b18-ago.png',                    label: 'Ago' },
    { file: 'tp-b18-last-month.png',             label: 'Last Month' },
    { file: 'tp-b18-last-week.png',              label: 'Last Week' },
    { file: 'tp-b18-past-event-worksheet.png',   label: 'Past Event Worksheet' },
    { file: 'tp-b18-this-morning.png',           label: 'This Morning' },
    { file: 'tp-b18-verb-past-tense-card.png',   label: 'Verb Past Tense Card' },
    { file: 'tp-b18-yesterday.png',              label: 'Yesterday' },
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔴',
    'L2 🟡',
    'L3 🔵',
    'L4 🔵',
    'L5 🟠',
    'L6 🔵',
    'L7 🔵',
    'L8 🟡',
    'L9 🟡',
    'L10 🔵',
    'L11 🔵',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'Budget 67 menit adalah yang paling ketat di Kluster E. L9 dan L11 adalah buffer — potong keduanya jika perlu. Jika L8 (kartu kegiatan) memakan lebih dari 5 menit, potong L9 langsung ke L10.',
      'L3: Dua kolom TODAY vs YESTERDAY adalah scaffold visual kritis — jangan hapus sepanjang sesi. Siswa akan merujuk ke kolom ini di L6, L7, dan L10.',
      'L4: Mengeja went/ate/played dengan keras (W-E-N-T, A-T-E, P-L-A-Y-E-D) membantu siswa yang visual. Jangan skip langkah ini meski terasa lambat.',
      'L10: Prioritas adalah produksi lancar — bukan koreksi grammar. Jika ada siswa yang menulis "I goed to school," biarkan sampai sesi selesai. Koreksi individual setelah kelas lebih efektif dari koreksi publik.',
      'L8 kartu kegiatan membutuhkan persiapan yang sangat spesifik — amplop per kelompok. Jika tidak sempat menyiapkan, skip L8 dan tambah waktu untuk L7 (guru bercerita lebih panjang) atau mulai L9 lebih awal.',
    ],
    autonomy: [
      'Tiga kata past tense yang dipilih (went, ate, played) sengaja mencakup dua irregular (went, ate) dan satu regular (played). Ini mempersiapkan siswa untuk TP19 di mana mereka akan menemukan lebih banyak variasi.',
      'Jika ada siswa yang bertanya tentang past tense lain (seperti "slept", "studied", "watched") — tulis di pojok papan tanpa komentar. Ini adalah pengayaan organik.',
      '"Yesterday" adalah kata kunci TP18 — setiap kali guru mengucapkan kalimat past tense, kata "yesterday" harus hadir atau diimplisitkan. Ini memperkuat anchor temporal.',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — jeda 3 detik diam, lanjutkan hanya setelah mereka berhenti.',
    cue    : 'TP18 adalah TP Kompleks — lebih panjang dan lebih banyak lapisan dari TP16–17. Settling yang solid di L0 adalah investasi waktu yang penting. Setiap menit yang hilang di sini akan terasa di L10.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Koneksi TP17 + Chant Lampau
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali. Tanya kelas.

UCAP: "Last time — directions. How do I get to the school?"
UCAP: "We talked about going places — today, now."
→ Jeda.
UCAP: "But what about YESTERDAY? Where did you GO? What did you EAT? What did you PLAY?"
UCAP: "Today — we talk about the past. What happened before."

AKSI: Langsung masuk ke chant dengan ketukan meja.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"Yesterday I went — I ate — I played — GO!
First I woke up — then I went to school — GO!
After that I played — then I went to sleep — GO!
The past — let's tell it — GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal chant: tunjuk gambar atau gesture — tangan di belakang kepala untuk "yesterday", gesture tidur-bangun untuk "woke up." Tiga gesture konkret.',
          cue    : 'Jembatan ke TP17 ("we talked about going places — today, now — but what about yesterday?") menggunakan kontras temporal yang langsung. "How do I get to school" (sekarang) → "Yesterday I went to school" (kemarin). Ucap "YESTERDAY" dengan penekanan — ini adalah kata kunci TP18.',
          darurat: 'Jika kelas masih gaduh setelah chant selesai: tepuk satu kali keras, ucap "Freeze — sit down — listen." Lanjut ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation — Daily Routines dan Days
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tanya kelas dengan ritme cepat.

UCAP: "Daily routines — what do you do every day?"
→ Kelas menyebut: "Wake up! Eat breakfast! Go to school! Sleep!"
UCAP: "Good. And days — what day is today?"
→ Kelas menjawab hari yang sebenarnya.
UCAP: "And yesterday?"
→ Kelas menjawab hari kemarin.
UCAP: "Monday, Tuesday, Wednesday — you remember?"
→ Kelas: "Yes!"

UCAP: "And sequence words — first, then, after that. Remember?"
→ Tunjuk tiga jari satu per satu.
→ Kelas: "First! Then! After that!"

UCAP: "Good. Today — we use all of these to tell about YESTERDAY."`,
          bantuan: 'Jika kelas tidak ingat hari kemarin: tunjuk kalender atau HP guru. "Today is Tuesday — so yesterday was Monday."',
          cue    : 'Pertanyaan "what day is today — and yesterday?" membuat konsep "kemarin" menjadi nyata dan personal sebelum kata "yesterday" diajarkan secara formal. Jika hari ini Selasa, maka kemarin adalah Senin yang nyata — bukan hari abstrak.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 47,

      langkah: [

        // L3 — Kontras Present vs Past: Today vs Yesterday
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo, siswa hanya mendengar dan melihat.

AKSI: Buat dua kolom di papan:

  TODAY (sekarang)      YESTERDAY (kemarin)
  ──────────────────    ──────────────────

UCAP: "Listen. I will say two things — what happens today, and what happened yesterday."

UCAP: "Today — I go to school."
→ Tulis di kolom TODAY: I go to school.
UCAP: "Yesterday — I went to school."
→ Tulis di kolom YESTERDAY: I went to school.
→ Jeda 3 detik. Tunjuk "go" dan "went."
UCAP: "'Go' — today. 'Went' — yesterday. Different words."

UCAP: "Today — I eat breakfast."
→ Tulis: I eat breakfast.
UCAP: "Yesterday — I ate breakfast."
→ Tulis: I ate breakfast.
→ Tunjuk "eat" dan "ate."

UCAP: "Today — I play football."
→ Tulis: I play football.
UCAP: "Yesterday — I played football."
→ Tulis: I played football.
→ Tunjuk "play" dan "played."

UCAP: "Today — today. Yesterday — yesterday. The words change."`,
          bantuan: 'Jika siswa tampak kebingungan dengan dua kolom: tunjuk kalender, tunjuk hari ini dan hari kemarin. "Today is here. Yesterday is here. Different day — different words."',
          cue    : 'Jangan jelaskan mengapa "went" dan "ate" tidak memakai -ed tapi "played" memakai -ed. Cukup tunjukkan perbedaannya — siswa kelas 4 belajar melalui eksposur, bukan aturan grammar. Jika ada yang bertanya "kenapa \'went\' bukan \'goed\'?", jawab singkat: "In English — some past words are special. We just remember them."',
          darurat: null,
          energi : '🔵',
        },

        // L4 — Introduksi: Went, Ate, Played
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo dulu.

UCAP: "Three past words today. Listen."

UCAP: "Go — went." [ucap perlahan, tunjuk kolom YESTERDAY di papan]
→ Tulis di papan besar: go → went
→ Jeda 3 detik.
UCAP: "Went. W-E-N-T. Went."
→ Kelas echo: "Went."

UCAP: "Eat — ate."
→ Tulis: eat → ate
→ Jeda 3 detik.
UCAP: "Ate. A-T-E. Ate."
→ Kelas echo: "Ate."

UCAP: "Play — played."
→ Tulis: play → played
→ Jeda 3 detik.
UCAP: "Played. P-L-A-Y-E-D. Played."
→ Kelas echo: "Played."

🗣 TOGETHER
UCAP: "Say it — go, went."
→ Kelas: "Go — went!"
UCAP: "Eat, ate."
→ Kelas: "Eat — ate!"
UCAP: "Play, played."
→ Kelas: "Play — played!"

UCAP: "Three pairs. Remember them."`,
          bantuan: 'Jika siswa mengucapkan "goed" atau "eated": jangan koreksi keras. Ucap pasangan yang benar — "Go — went. Try: went." — dengan nada santai. Overgeneralisasi adalah tanda pemahaman, bukan kesalahan fatal.',
          cue    : 'Eja setiap kata past form dengan keras — W-E-N-T, A-T-E, P-L-A-Y-E-D. Ini membantu siswa yang visual untuk mengingat bentuk tulisannya, bukan hanya bunyi. Tetap tempelkan tiga pasang di papan sampai L10 selesai.',
          darurat: null,
          energi : '🔵',
        },

        // L5 — Drill — Pasangan Present-Past
        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER

UCAP: "Good. Now — fast. I say today's word — you say yesterday's word."

UCAP: "Go —"
→ Kelas: "Went!"
UCAP: "Eat —"
→ Kelas: "Ate!"
UCAP: "Play —"
→ Kelas: "Played!"
UCAP: "Go —"
→ Kelas: "Went!"
UCAP: "Eat —"
→ Kelas: "Ate!"

AKSI: Percepat — 8–10 pasangan secara acak selama 60 detik.

AKSI: Balik arah — guru ucap past form, kelas ucap present:
UCAP: "Went —"
→ Kelas: "Go!"
UCAP: "Ate —"
→ Kelas: "Eat!"
UCAP: "Played —"
→ Kelas: "Play!"

AKSI: Tunjuk 3 siswa individual:
UCAP: "[nama] — yesterday I ___. What's the word for 'eat' yesterday?"
→ Siswa: "Ate!"
UCAP: "Good. Say the full sentence — 'Yesterday I ate breakfast.'"
→ Siswa mengucapkan kalimat penuh.`,
          diferensiasi: {
            perluSupport: 'cukup menjawab satu kata — "went" atau "ate" — tanpa kalimat penuh.',
            sudahBisa   : 'ucap kalimat penuh — "Yesterday I went to school at seven o\'clock."',
          },
          bantuan: 'Jika kelas menjawab salah secara konsisten: hentikan drill, tunjuk tiga pasang di papan, ucap sekali lagi, lanjutkan.',
          cue    : null,
          darurat: null,
          energi : '🟠',
        },

        // L6 — Introduksi: Yesterday I… + Sequencing
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pelan suara. Tunggu 2 detik sebelum mulai.

👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — let's make sentences. 'Yesterday I…'"
→ Tulis di papan: Yesterday, I _______.

UCAP: "Yesterday, I went to school."
→ Tulis: Yesterday, I went to school.
UCAP: "Yesterday, I ate rice for breakfast."
→ Tulis: Yesterday, I ate rice for breakfast.
UCAP: "Yesterday, I played badminton after school."
→ Tulis: Yesterday, I played badminton after school.

UCAP: "And — do you remember 'first, then, after that'? From before?"
→ Tunjuk tiga jari.
UCAP: "We can use them to tell the order of yesterday."
UCAP: "First, I woke up. Then, I ate breakfast. After that, I went to school."
→ Tulis: First, I woke up. Then, I ate breakfast. After that, I went to school.

🗣 TOGETHER
UCAP: "Read with me."
→ Kelas membaca empat kalimat terakhir bersama.`,
          bantuan: 'Jika siswa tidak mengingat "first, then, after that": tunjuk tiga jari satu per satu. "Pertama — first. Kedua — then. Selanjutnya — after that." Satu jangkar Bahasa Indonesia cukup.',
          cue    : '"Do you remember \'first, then, after that\'?" adalah momen koneksi eksplisit ke TP06. Beri jeda setelah pertanyaan ini — siswa yang ingat akan merespons. Ini bukan hanya reactivation; ini membuktikan bahwa kosakata lama masih berguna dalam konteks baru.',
          darurat: null,
          energi : '🔵',
        },

        // L7 — Modeling — Guru Menceritakan Hari Kemarin
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru bercerita, siswa hanya mendengar.

UCAP: "Now — I will tell you about my yesterday. Listen."

UCAP: "Yesterday was [hari kemarin yang sebenarnya]."
UCAP: "First, I woke up at six o'clock."
UCAP: "Then, I ate breakfast. I ate rice and egg."
UCAP: "After that, I went to school."
UCAP: "At school, I played with my students."
UCAP: "In the afternoon, I went to the market."
UCAP: "I ate noodles for lunch."
UCAP: "In the evening, I went home and went to sleep."

AKSI: Setelah cerita selesai, tanya kelas:
UCAP: "What did I eat for breakfast?"
→ Kelas: "Rice and egg!"
UCAP: "Where did I go in the afternoon?"
→ Kelas: "The market!"
UCAP: "What word did I use for 'eat' yesterday?"
→ Kelas: "Ate!"`,
          bantuan: 'Jika kelas tidak bisa menjawab pertanyaan retensi: ulangi kalimat yang relevan sekali lagi dengan perlahan — bukan seluruh cerita.',
          cue    : 'Cerita guru harus menggunakan hari yang nyata — "Yesterday was Monday" bukan "Yesterday was a day." Siswa kelas 4 lebih percaya pada cerita yang terasa nyata. Gunakan orang, tempat, dan makanan yang nyata dari kehidupan guru.',
          darurat: null,
          energi : '🔵',
        },

        // L8 — Kartu Kegiatan — Siswa Susun Urutan
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Bagikan kartu kegiatan — satu set per pasang atau kelompok 3.

Kartu berisi:
  Kartu 1: "woke up" [gambar orang bangun]
  Kartu 2: "ate breakfast" [gambar makan pagi]
  Kartu 3: "went to school" [gambar anak ke sekolah]
  Kartu 4: "played football" [gambar anak bermain bola]
  Kartu 5: "ate lunch" [gambar makan siang]
  Kartu 6: "went to sleep" [gambar orang tidur]

UCAP: "Look at the cards. These are things from yesterday."
UCAP: "Put them in order — first, then, after that."
UCAP: "When you are done — say the sentences to your partner."

AKSI: Beri waktu 2 menit untuk menyusun + 2 menit untuk mengucapkan kalimat.

AKSI: Tanya 2–3 pasang:
UCAP: "[pasang] — what was first?"
→ Siswa: "First, I woke up."
UCAP: "And then?"
→ Siswa: "Then, I ate breakfast."
UCAP: "After that?"
→ Siswa: "After that, I went to school."`,
          bantuan: 'Jika kelompok tidak bisa menyusun urutan: tanya "What do you do FIRST in the morning — sleep or wake up?" — pertanyaan biner yang membantu mereka menemukan urutan logis.',
          cue    : 'Kartu harus sudah disiapkan dalam amplop per kelompok sebelum kelas. Membagikan kartu di tengah sesi akan memakan waktu 2 menit yang tidak ada dalam budget.',
          darurat: null,
          energi : '🟡',
        },

        // L9 — Pair Practice — Ceritakan Hari Kemarin [FLEX]
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa menyimpan kartu. Duduk menghadap partner.

UCAP: "Tell your partner about YOUR yesterday. Not the cards — your real yesterday."
UCAP: "Start with: 'Yesterday was [day]. First, I woke up at ___. Then...'"

AKSI: Demo singkat dengan satu siswa sukarelawan:
UCAP: "[nama] — tell me one thing from your yesterday. Use 'yesterday, I...'"
→ Siswa: "Yesterday, I ate noodles for lunch."
UCAP: "Good. Add more — first, then, after that."
→ Siswa: "First, I went to school. Then, I ate noodles."
UCAP: "Perfect. Your turn with your partner."

AKSI: Beri waktu 4 menit — masing-masing 2 menit per arah. Circulate.`,
          diferensiasi: {
            perluSupport: 'cukup dua kalimat — "Yesterday, I went to school. I ate rice."',
            sudahBisa   : 'ceritakan empat atau lima kejadian menggunakan first/then/after that.',
          },
          bantuan: 'Jika satu pasang tidak bisa memulai: tunjuk kartu kegiatan yang masih di meja, ucap — "Look at the cards. Did you do any of these yesterday? Start with that."',
          cue    : null,
          darurat: '[FLEX — lewati jika waktu tersisa < 18 menit atau energi kelas di bawah 🟡] Jika pair practice gaduh dalam 1 menit: hentikan. Ucap "Okay — take your pencil. Think about your yesterday. Let\'s write." Lanjut ke L10.',
          energi : '🟡',
        },

        // L10 — Writing Individual — Cerita Harianku Kemarin
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L8 (L9 dilewati) — ucap: "Okay. Take your pencil. Think about your yesterday. Let's write." Jeda 3 detik. Bagikan lembar kerja.
AKSI: Bagikan lembar kerja (1 per siswa). Tiga pasang present-past dan pola "Yesterday I…" di papan tetap ada.

Lembar kerja berisi template:

  MY YESTERDAY

  Yesterday was _________________________.

  First, I _________________________ at _______ o'clock.

  Then, I _________________________.

  After that, I _________________________.

  After that, I _________________________.

  In the evening, I _________________________.

  I went to sleep at _______ o'clock.

UCAP: "Write about YOUR real yesterday. Use went, ate, played."
UCAP: "Use first, then, after that to tell the order."

👂 LISTEN FIRST — guru demo mengisi dua baris pertama di papan:
UCAP: "Watch me. Yesterday was [hari]. First, I woke up at six o'clock." [tulis]
UCAP: "Then, I ate breakfast — I ate rice and egg." [tulis]
UCAP: "Now — your turn."

AKSI: Circulate. Bergerak ke meja siswa — jangan berdiri di depan.`,
          diferensiasi: {
            perluSupport: 'cukup isi empat baris pertama. Baris "In the evening" dan "went to sleep" opsional.',
            sudahBisa   : 'setelah semua baris terisi, tambah satu kalimat bebas — "The best part of my yesterday was ___."',
          },
          bantuan: null,
          cue    : 'Jika siswa menggunakan "goed" atau "eated" dalam tulisan mereka — jangan koreksi saat L10 berlangsung. Catat untuk feedback individual setelah sesi. Prioritas L10 adalah produksi lancar, bukan akurasi grammar.',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai: minta siswa hanya mengisi tiga baris pertama (yesterday, first, then). Langsung ke L12 tanpa melalui L11.',
          energi : '🔵',
        },

        // L11 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil tulisan siswa. Pilih 2 hasil — satu yang menggunakan went/ate/played dengan benar, satu yang menceritakan kejadian yang menarik atau tidak biasa.

UCAP: "Good. Let's hear from two friends."
→ Minta 2 siswa membacakan cerita kemarin mereka.
→ Kelas mendengarkan.

UCAP (setelah tiap siswa membacakan): "What did they do first?"
→ Kelas menjawab.
UCAP: "Which past word did they use — went, ate, or played?"
→ Kelas menjawab.`,
          bantuan: 'Jika siswa yang diminta membaca menolak: ucap "That\'s okay" dan tunjuk siswa lain.',
          cue    : 'Pertanyaan "which past word did they use?" memaksa kelas mendengarkan secara aktif untuk tiga kata kunci TP18. Ini adalah momen konsolidasi past tense yang paling konkret.',
          darurat: '[FLEX — lewati jika waktu tersisa < 10 menit]',
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 8,

      langkah: [

        // L12 — Review + Hapus Papan
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Siswa simpan lembar kerja. Guru kembali ke depan kelas.

UCAP: "Good work today. Let's remember."
UCAP: "How do we say 'pergi' — yesterday?"
→ Kelas: "Went!"
UCAP: "Makan — yesterday?"
→ Kelas: "Ate!"
UCAP: "Bermain — yesterday?"
→ Kelas: "Played!"
UCAP: "And how do we start a sentence about yesterday?"
→ Kelas: "Yesterday, I...!"

UCAP: "One sentence — tell me something from YOUR yesterday."
→ Satu siswa: "Yesterday, I went to school and ate noodles for lunch!"

AKSI: Hapus papan satu bagian per satu. Kelas ucapkan yang dihapus.
Urutan hapus: played → ate → went → Yesterday I… → play → eat → go`,
          bantuan: null,
          cue    : 'Hapus past form sebelum present form — urutan ini memperkuat bahwa "went/ate/played" adalah kata yang dipelajari hari ini, dan "go/eat/play" adalah yang sudah dikenal dari sebelumnya.',
          darurat: null,
          energi : '🟡',
        },

        // L13 — Closure Emosional + Teaser TP19
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan.

UCAP: "Before we finish — one question."
UCAP: "What was the best moment of your yesterday?"
→ Tunjuk 1–2 siswa yang mau berbagi. Jawaban dalam Bahasa apapun diterima.
→ Bantu framing: "So — 'Yesterday, I ___ and it was ___'"

→ Jeda 3 detik.

UCAP: "Yesterday is gone — but you can always tell its story."

UCAP: "Next time — we read a short story. Someone else's yesterday. Someone else's adventure."
[Teaser TP19 — Reading: Short Narrative Texts]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : 'Teaser TP19 ("we read a short story — someone else\'s yesterday") menghubungkan TP18 (menceritakan hari kemarin sendiri) dengan TP19 (membaca cerita orang lain) secara langsung. Ucap dengan antusias — ini adalah persiapan untuk membaca teks naratif pertama dalam Fase B.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B18;
