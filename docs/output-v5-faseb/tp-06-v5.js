/**
 * =============================================================
 * FLAF — TP B06 (My Daily Schedule)
 * File: docs/output-v5-faseb/tp-06-v5.js
 * Format: v5.0
 * Fase: B (Kelas 3–4)
 * Jenis: Biasa — Kluster B
 * Source: flaf-skenario-tp06-v2.txt (Fase B)
 * =============================================================
 */

const TP_B06 = {

  id       : 'tp-b06',
  nomor    : 6,
  kelas    : 3,
  nama     : 'My Daily Schedule',
  tema     : 'Menyusun dan menceritakan jadwal harian menggunakan penanda urutan',
  kluster  : 'B',
  jenis    : 'Biasa',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat menggunakan penanda urutan "first", "then", dan "after that" untuk menceritakan kegiatan harian dalam urutan yang benar.',
    'Peserta didik dapat membuat kalimat dengan "I usually..." untuk menyatakan kegiatan yang biasa dilakukan beserta waktunya.',
    'Peserta didik dapat menulis jadwal harian sederhana dalam 5–6 kalimat menggunakan penanda urutan dan ekspresi waktu.',
  ],

  vocab    : ['first', 'then', 'after that', 'I usually...', 'brush teeth', 'wake up', 'go to school', 'eat breakfast', 'sleep'],

  persiapan: [
    'Kartu jadwal guru: satu strip kertas atau papan kecil sudah ditulis jadwal pagi guru (4–5 kegiatan dengan jam) — disiapkan sebelum kelas, dipakai di L3',
    'Lembar kerja siswa: 1 per siswa — template jadwal harian dengan 6 baris (I usually wake up / First / Then / After that / After that / I usually sleep)',
    'Papan tulis + spidol untuk tabel kegiatan-jam di L2, scaffold urutan di L3, dan scaffold kalimat lengkap di L6 yang tetap ada sampai L8 selesai',
  ],

  checklist: [
    'Kartu jadwal guru sudah disiapkan sebelum kelas — bukan ditulis saat L3 berlangsung',
    'Tabel kegiatan-jam di L2 tetap terlihat di papan sampai L7 selesai',
    'Scaffold enam kalimat di L6 TIDAK dihapus sampai L8 selesai',
    'Penilaian formatif sudah dibuka di L8 — minimal 3 siswa sudah dinilai',
    'Referensi ke TP05 ("we learned to say the time — today we use those times") sudah disampaikan di L1',
    'Penanda urutan first/then/after that digunakan dengan gesture jari di L4 dan L10',
    'Siswa yang membacakan di L9 berbeda dari yang menjawab di L4',
    'Closure di L11 diakhiri dengan goodbye ritual — bukan instruksi administratif',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔴',
    'L2 🟡',
    'L3 🔵',
    'L4 🟠',
    'L5 🟡',
    'L6 🔵',
    'L7 🟡',
    'L8 🔵',
    'L9 🔵',
    'L10 🟡',
    'L11 🔵',
  ],

  catatan: {
    risiko: [
      'L3: Layar terpanjang di fase Inti awal (5 menit). Jangan diperpendek — keempat kalimat jadwal harus ditulis dan dimodelkan secara lengkap sebelum L4. Jika terasa lambat, itu normal: siswa sedang memproses pola baru.',
      'L4: Drill urutan bisa terasa mekanis jika guru hanya menunjuk tanpa variasi. Tambahkan satu kejutan — tunjuk kegiatan dari urutan terbalik dan minta kelas identifikasi penanda urutannya. Ini membuktikan pemahaman, bukan hafalan posisi.',
      'L8: Siswa mungkin menulis kegiatan yang sama berulang — "after that, I eat. after that, I eat again." Ini valid secara struktur. Jika terlihat saat circulate, bisikkan: "What else do you do? Anything different?" — bukan koreksi.',
      'L5 dan L6 bersama memakan 7 menit. Jika waktu terasa mepet setelah L4, potong L5 menjadi 2 menit — hanya satu contoh "I usually..." tanpa putaran bersama. L6 tetap harus penuh karena scaffold-nya adalah fondasi L8.',
    ],
    autonomy: [
      'Kartu jadwal guru boleh menggunakan jadwal yang benar-benar nyata — siswa akan lebih tertarik jika tahu ini adalah jadwal pagi guru yang sebenarnya.',
      'Pair practice di L7 boleh dilakukan sebagian dalam Bahasa Indonesia — yang penting penanda "first/then/after that" tetap dalam Bahasa Inggris.',
      'Jika ada siswa yang tidak memiliki rutinitas yang konsisten, dorong mereka untuk menulis jadwal "hari sekolah yang paling sering terjadi" — bukan jadwal ideal.',
      '"After that" boleh dipakai lebih dari sekali dalam jadwal yang sama — ini penggunaan yang benar dan tidak perlu dikoreksi.',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — beri jeda 3 detik diam, pandang bagian kelas yang paling ramai, lanjutkan hanya setelah mereka berhenti.',
    cue    : 'Hari ini siswa akan menceritakan jadwal mereka sendiri — aktivitas yang melibatkan pengalaman personal. Settling yang tenang memberi ruang ini terasa seperti percakapan, bukan pelajaran.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Koneksi TP05 + Chant Rutinitas
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali. Tanya kelas.

UCAP: "Last time — we learned to say the time."
UCAP: "Quick — what time do you wake up? Tell me."
→ Tunjuk 2–3 siswa acak. Terima jawaban dalam format apapun.
UCAP: "Good. Seven o'clock. Six o'clock. Half past five."
UCAP: "Today — we use those times to tell our whole day. First this, then that, after that — this."

AKSI: Langsung masuk ke chant dengan ketukan meja.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"Wake up — brush teeth — eat breakfast — GO!
Go to school — study — go home — GO!
Sleep at night — that's my day — GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal chant di putaran pertama: gesture fisik membantu — tangan di pipi untuk "sleep", tangan melambai untuk "go to school", tangan di mulut untuk "eat". Lakukan sendiri dengan berlebihan; siswa akan mengikuti.',
          cue    : 'Jembatan ke TP05 ("we learned to say the time — today we use those times") harus diucapkan sebelum chant, bukan setelah. Siswa perlu tahu konteks sebelum energi naik ke 🔴.',
          darurat: 'Jika kelas masih gaduh setelah chant selesai: tepuk satu kali keras, ucap "Freeze — sit down — listen." Lanjut ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation — Jam dan Rutinitas
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tulis di papan dua kolom:

  KEGIATAN          JAM
  wake up       → ___ o'clock / half past ___
  brush teeth   → ___ o'clock / half past ___
  eat breakfast → ___ o'clock / half past ___
  go to school  → ___ o'clock / half past ___
  sleep         → ___ o'clock / half past ___

UCAP: "You see this table. Left side — activities. Right side — time."
UCAP: "Tell me — what time do you wake up? Use o'clock or half past."
→ Tunjuk beberapa siswa. Isi kolom JAM dengan jawaban yang mereka berikan.

UCAP: "And brush teeth — when?"
→ Isi kolom dengan jawaban siswa.

UCAP: "Good. Your day has times. Today — we put those times in order."`,
          bantuan: 'Jika siswa memberikan jawaban dalam Bahasa Indonesia: terima dengan anggukan, lalu ucap versi Inggrisnya di papan. "Jam enam — six o\'clock" — tulis "six o\'clock" di kolom tanpa mengoreksi cara mereka menjawab.',
          cue    : 'Tabel di papan ini adalah scaffold utama untuk L3 dan L8. Kolom kiri (kegiatan) tetap ada sampai L8 selesai. Kolom kanan (jam) boleh diisi dengan jawaban siswa yang berbeda-beda — tidak perlu seragam.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 40,

      langkah: [

        // L3 — Modeling Jadwal: First, Then, After That
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo, siswa hanya mendengar dan melihat.

AKSI: Tunjukkan kartu jadwal guru (strip kertas yang sudah disiapkan sebelum kelas), atau tulis di papan:

  My morning schedule:
  6:00  → wake up
  6:30  → brush teeth
  7:00  → eat breakfast
  7:30  → go to school

UCAP: "Listen. I will tell you my morning."

UCAP: "First — I wake up at six o'clock."
→ Tulis di papan: First, I wake up at six o'clock.
→ Jeda. Tunjuk "First" lalu tunjuk "6:00" di kartu.

UCAP: "Then — I brush my teeth at half past six."
→ Tulis: Then, I brush my teeth at half past six.
→ Jeda. Tunjuk "Then" lalu tunjuk "6:30".

UCAP: "After that — I eat breakfast at seven o'clock."
→ Tulis: After that, I eat breakfast at seven o'clock.
→ Jeda. Tunjuk "After that" lalu tunjuk "7:00".

UCAP: "After that — I go to school at half past seven."
→ Tulis: After that, I go to school at half past seven.

AKSI: Tunjuk seluruh urutan di papan.
UCAP: "First — then — after that. This is the order."
UCAP: "First is number one. Then is number two. After that is number three, four, five..."`,
          bantuan: 'Jika siswa tampak bingung dengan perbedaan "first" dan "then": angkat satu jari untuk "first", dua jari untuk "then", tiga jari untuk "after that." Gesture nomor ini lebih konkret dari penjelasan verbal.',
          cue    : 'Tunjuk kata "First", "Then", "After that" setiap kali diucapkan — bukan tunjuk kegiatan atau jam. Siswa perlu merasakan bahwa ketiga kata ini adalah penanda urutan, bukan bagian dari nama kegiatan.',
          darurat: null,
          energi : '🔵',
        },

        // L4 — Drill Urutan — Kelas Susun Jadwal Bersama
        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER

AKSI: Hapus kalimat di papan tapi pertahankan kartu jadwal guru. Tunjuk kartu.

UCAP: "Let's say it together. I will point — you say the sentence."

AKSI: Tunjuk "6:00 → wake up".
UCAP: "First —"
→ Kelas: "First, I wake up at six o'clock!"

AKSI: Tunjuk "6:30 → brush teeth".
UCAP: "Then —"
→ Kelas: "Then, I brush my teeth at half past six!"

AKSI: Tunjuk "7:00 → eat breakfast".
UCAP: "After that —"
→ Kelas: "After that, I eat breakfast at seven o'clock!"

AKSI: Tunjuk "7:30 → go to school".
UCAP: "After that —"
→ Kelas: "After that, I go to school at half past seven!"

AKSI: Ulangi sekali lebih cepat — guru hanya menunjuk, kelas mengucapkan sendiri tanpa prompt dari guru.

AKSI: Tunjuk 2–3 siswa individual:
UCAP: "[nama] — number two. Say it."
→ Siswa: "Then, I brush my teeth at half past six!"

UCAP: "One more thing — 'then' and 'after that' mean the same. You can use either one. Both are correct."`,
          diferensiasi: {
            perluSupport: 'cukup ucapkan penanda urutan + kegiatan tanpa jam — "Then, I brush my teeth."',
            sudahBisa   : 'setelah kalimat selesai, minta tambahkan "in the morning" atau "in the afternoon."',
          },
          bantuan: 'Jika kelas mengucapkan kegiatan tanpa penanda urutan (langsung "I wake up" tanpa "First"): ulangi prompt dengan penekanan — "FIRST —" tunggu. Jika masih tidak ada, ucapkan "First, I..." dan tunggu kelas melanjutkan "wake up at six o\'clock."',
          cue    : 'Tambahkan satu kejutan di putaran kedua — tunjuk kegiatan dari urutan terbalik dan minta kelas identifikasi penanda urutannya. Ini membuktikan siswa memahami urutan, bukan sekadar menghafal posisi.',
          darurat: null,
          energi : '🟠',
        },

        // L5 — Introduksi: I Usually…
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pelan suara. Tarik napas kecil yang terlihat oleh kelas. Tunggu 2 detik sebelum mulai.

👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — one more thing."
UCAP: "I usually wake up at six o'clock."
→ Jeda. Tulis di papan: I usually wake up at six o'clock.
→ Jeda 3 detik.

UCAP: "'Usually' — artinya biasanya. Every day, almost every day."
UCAP: "I usually wake up at six o'clock — meaning: almost every day, I do this."

AKSI: Tambahkan contoh kedua:
UCAP: "I usually go to school at half past seven."
→ Tulis: I usually go to school at half past seven.

UCAP: "Now — your turn. Tell me one thing you usually do."
→ Tunggu 2–3 siswa menjawab: "I usually wake up at..." atau "I usually eat breakfast at..."`,
          bantuan: 'Jika siswa bingung dengan "usually": ucap satu kalimat Bahasa Indonesia — "Biasanya saya bangun jam enam — in English: I usually wake up at six o\'clock." Satu jangkar cukup.',
          cue    : '"I usually…" tidak perlu diajarkan sebagai grammar — cukup sebagai frasa yang dipakai. Jika ada siswa yang bertanya kenapa pakai "usually", jawab singkat: "Usually = biasanya. Itu saja." Jangan masuk ke penjelasan adverb of frequency.',
          darurat: null,
          energi : '🟡',
        },

        // L6 — Modeling Kalimat Lengkap + Baca Bersama
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Good. Now — let's put it all together. First, then, after that — plus I usually."

AKSI: Tulis scaffold lengkap di papan — ini yang akan dipakai siswa di L7 dan L8:

  I usually wake up at _______ o'clock.
  First, I _______ at _______ o'clock / half past _______.
  Then, I _______ at _______ o'clock / half past _______.
  After that, I _______ at _______ o'clock / half past _______.
  After that, I _______ at _______ o'clock / half past _______.
  I usually sleep at _______ o'clock.

UCAP: "Look at the board. This is the structure for your schedule."
UCAP: "Let's read it together — fill in the blanks with my schedule."

🗣 TOGETHER
UCAP: "I usually wake up at six o'clock."
→ Kelas membaca bersama dari papan.
UCAP: "First, I brush my teeth at half past six."
→ Kelas membaca bersama.
UCAP: "Then, I eat breakfast at seven o'clock."
→ Kelas membaca bersama.
UCAP: "After that, I go to school at half past seven."
→ Kelas membaca bersama.
UCAP: "I usually sleep at nine o'clock."
→ Kelas membaca bersama.

UCAP: "Good. Now — you will use this structure. Your schedule. Your times."`,
          bantuan: 'Jika kelas membaca tidak sinkron: perlambat tempo, tunjuk kata per kata dengan spidol. Sinkronisasi bukan tujuan — familiarisasi dengan struktur adalah tujuannya.',
          cue    : 'Scaffold di papan tetap ada sampai L8 selesai. Jangan hapus satu baris pun sebelum siswa selesai menulis. Jika papan penuh, pindahkan tabel kegiatan-jam dari L2 ke sudut kecil — prioritaskan scaffold L6 di posisi paling mudah dibaca dari semua meja.',
          darurat: null,
          energi : '🔵',
        },

        // L7 — Pair Practice — Ceritakan Jadwal Pagi [FLEX]
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelah mereka.

UCAP: "Tell your partner your morning schedule. Use first, then, after that."
UCAP: "Start with: 'I usually wake up at...'"

AKSI: Demo singkat dengan satu siswa sukarelawan:
UCAP: "[nama], tell me your morning. Start with 'I usually wake up...'"
→ Siswa: "I usually wake up at six o'clock. First, I brush my teeth..."
UCAP: "Good. Now — your turn with your partner."

AKSI: Beri waktu 4 menit — masing-masing 2 menit per arah. Circulate dan dengarkan tanpa menyela kecuali kekeliruan urutan yang sistematis (misalnya siswa menggunakan "first" berulang kali untuk semua kegiatan).`,
          diferensiasi: {
            perluSupport: 'cukup ucapkan dua kalimat — "I usually wake up at..." dan "First, I..." — tidak perlu melanjutkan ke "then" dan "after that."',
            sudahBisa   : 'setelah jadwal pagi selesai, ceritakan satu kegiatan sore atau malam — "In the afternoon, I usually..."',
          },
          bantuan: 'Jika satu pasang berbicara dalam Bahasa Indonesia sepenuhnya: dekati, tunjuk scaffold di papan, ucap kalimat pertama dengan suara pelan — "I usually wake up at..." — tunggu salah satu dari mereka melanjutkan. Satu kalimat pembuka dari guru cukup untuk memulai.',
          cue    : 'Pair practice di sini adalah latihan pertama untuk menceritakan jadwal secara lisan. Tidak ada jadwal yang "salah" selama penanda urutan dipakai — biarkan siswa menggunakan urutan kegiatan yang berbeda satu sama lain.',
          darurat: '[FLEX — lewati jika waktu tersisa < 18 menit atau energi kelas di bawah 🟡] Jika pair practice menjadi gaduh dalam 1 menit: hentikan, ucap "Okay — look at the board. Take your pencil." Lanjut ke L8 dengan "Let\'s write instead."',
          energi : '🟡',
        },

        // L8 — Writing Individual — Jadwal Harianku
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L6 (L7 dilewati) — ucap: "Okay. Take your pencil. Let's write." Jeda 3 detik. Bagikan lembar kerja.
AKSI: Bagikan lembar kerja (1 per siswa). Scaffold di papan dari L6 tetap ada.

Lembar kerja berisi template:

  My Daily Schedule

  I usually wake up at _________________.
  First, I _________________ at _________________.
  Then, I _________________ at _________________.
  After that, I _________________ at _________________.
  After that, I _________________ at _________________.
  I usually sleep at _________________.

UCAP: "Write your real schedule. Your activities. Your times."
UCAP: "Use the structure on the board. Use first, then, after that."

👂 LISTEN FIRST — guru demo mengisi baris pertama di papan:
UCAP: "Watch me. 'I usually wake up at six o'clock.'" [tulis di papan di bawah scaffold]
UCAP: "Now — your turn."

AKSI: Mundur dari depan kelas. Circulate — bergerak ke meja siswa, jangan berdiri di depan.`,
          diferensiasi: {
            perluSupport: 'boleh mengisi hanya empat baris pertama (wake up, first, then, after that sekali). Baris kelima dan keenam opsional.',
            sudahBisa   : 'setelah enam baris selesai, minta tambah satu kalimat tentang sore atau malam — "In the afternoon, I usually..."',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai di TP ini. Siswa boleh menulis kegiatan di luar tabel L2 — "I play football" atau "I watch TV" valid selama penanda urutan ada dan jam ditulis.',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai: minta siswa hanya mengisi tiga baris pertama (wake up, first, then). Langsung ke L10 tanpa melalui L9.',
          energi : '🔵',
        },

        // L9 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil tulisan siswa. Pilih 2 hasil — satu yang menggunakan "first, then, after that" dengan benar, satu yang menambahkan kegiatan di luar tabel standar.

UCAP: "Good. Let's hear from two friends."
→ Minta 2 siswa membacakan jadwal mereka keras-keras — satu kalimat per kegiatan.
→ Kelas mendengarkan.

UCAP (setelah tiap siswa membacakan): "Nice. Say it together."
→ Kelas ulang kalimat terakhir yang baru dibacakan.

AKSI: Tunjuk scaffold di papan sekali lagi:
UCAP: "First — then — after that. This is the order. Remember it for next time."`,
          bantuan: 'Jika siswa yang diminta membaca menolak: ucap "That\'s okay" dan tunjuk siswa lain. Tidak perlu komentar tambahan.',
          cue    : 'Pilih siswa yang berbeda dari yang menjawab di L4. Jika ada siswa yang menulis jadwal dengan "after that" untuk semua kalimat tanpa "first" dan "then" — tandai satu kalimat saja: "This one — try \'first\' instead of \'after that.\' Just this one."',
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

UCAP: "Good work today. Let's remember three words."
UCAP: "Number one —" [angkat satu jari]
→ Kelas: "First!"
UCAP: "Number two —" [angkat dua jari]
→ Kelas: "Then!"
UCAP: "Number three, four, five —" [angkat tiga jari, empat, lima]
→ Kelas: "After that!"

UCAP: "And how do we say 'biasanya'?"
→ Kelas: "Usually!" atau "I usually!"

UCAP: "Give me one sentence about your morning. Use 'first.'"
→ Satu siswa atau kelas: "First, I brush my teeth at half past six!"

AKSI: Hapus papan satu bagian per satu. Kelas ucapkan yang dihapus.
Urutan hapus: after that → then → first → I usually… → scaffold kalimat`,
          bantuan: null,
          cue    : 'Hapus scaffold dari bawah ke atas — kalimat terakhir dahulu, pembuka terakhir. Ini memperkuat memori urutan secara visual: siswa "melihat" jadwal runtuh dari belakang.',
          darurat: null,
          energi : '🟡',
        },

        // L11 — Closure Emosional + Teaser TP07
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan dari sebelumnya.

UCAP: "Before we finish — I want to tell you something."
UCAP: "Your schedule is yours. Nobody else wakes up at the same time, does the same things, in the same order."

→ Jeda 3 detik.

UCAP: "That is what language does — it lets you say things that are true about you."

UCAP: "One question — what is the first thing you do after you wake up? Tell your neighbor."
→ Beri 20 detik. Siswa berbisik ke tetangga. Tidak perlu kelas mendengar.

UCAP: "Next time — we will talk about days. Monday. Tuesday. The whole week."
[Teaser TP07 — Days, Months, and the Calendar]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : '"Berbisik ke tetangga" di L11 adalah aktivitas mikro yang tidak membutuhkan guru mendengar atau menilai. Ini memberi penutup yang terasa hidup — bukan hanya guru bicara — tanpa menambah waktu signifikan.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B06;
