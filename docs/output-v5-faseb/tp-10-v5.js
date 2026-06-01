/**
 * =============================================================
 * FLAF — TP B10 (Weather and What We Wear)
 * File: docs/output-v5-faseb/tp-10-v5.js
 * Format: v5.0
 * Fase: B (Kelas 3–4)
 * Jenis: Biasa — Kluster C
 * Source: flaf-skenario-tp10-v2.txt (Fase B)
 * =============================================================
 */

const TP_B10 = {

  id       : 'tp-b10',
  nomor    : 10,
  kelas    : 3,
  nama     : 'Weather and What We Wear',
  tema     : 'Menghubungkan kondisi cuaca dengan pilihan pakaian menggunakan kalimat kondisional sederhana',
  kluster  : 'C',
  jenis    : 'Biasa',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat menyebutkan nama dua benda terkait hujan (raincoat dan umbrella) dan membedakan cara menggunakannya (wear vs carry).',
    'Peserta didik dapat menggunakan pola "When it rains/sunny/cold, I wear..." dalam kalimat lisan dan tulisan.',
    'Peserta didik dapat menulis weather report sederhana yang menghubungkan minimal dua kondisi cuaca dengan pilihan pakaian.',
  ],

  vocab    : ['sunny', 'rainy', 'cloudy', 'windy', 'hot', 'cold', 'raincoat', 'umbrella', 'When it rains...', 'I wear...'],

  persiapan: [
    'Benda nyata atau gambar: satu jas hujan (raincoat) dan satu payung (umbrella) — dibawa ke kelas atau digambar jelas di papan sebelum kelas',
    'Gambar empat kondisi cuaca: sunny, rainy, cloudy, hot — satu per kondisi, disiapkan di papan atau kartu sebelum kelas',
    'Lembar kerja siswa: 1 per siswa — template MY WEATHER REPORT (lihat L8)',
    'Papan tulis + spidol untuk menulis pola "When it rains… I wear…" di L4 dan L6 — tidak dihapus sampai L8 selesai',
  ],

  checklist: [
    'Raincoat dan umbrella sudah disiapkan — benda nyata atau gambar yang jelas terlihat dari seluruh sudut kelas',
    'Gambar empat kondisi cuaca sudah siap di papan sebelum kelas — dipakai di L2 dan L5',
    'Scaffold lima kalimat di papan dari L6 TIDAK dihapus sampai L8 selesai',
    'Penilaian formatif sudah dibuka di L8 — minimal 3 siswa sudah dinilai',
    'Referensi ke TP09 ("same weather — but now about US") sudah disampaikan di L1',
    'Pola "When it [cuaca], I wear [pakaian]" sudah diucapkan minimal 4 kali — di L4, L5, L6, dan L10',
    'Siswa yang membacakan di L9 berbeda dari yang menjawab di L5',
    '"Look outside" diucapkan di L11 — ini tidak bisa diganti dengan instruksi hipotetis',
  ],

  printables: [
    { file: 'tp-b10-cloudy.png',                    label: 'Cloudy' },
    { file: 'tp-b10-hat.png',                       label: 'Hat' },
    { file: 'tp-b10-jacket.png',                    label: 'Jacket' },
    { file: 'tp-b10-raincoat.png',                  label: 'Raincoat' },
    { file: 'tp-b10-rainy.png',                     label: 'Rainy' },
    { file: 'tp-b10-sandals.png',                   label: 'Sandals' },
    { file: 'tp-b10-shorts.png',                    label: 'Shorts' },
    { file: 'tp-b10-sunny.png',                     label: 'Sunny' },
    { file: 'tp-b10-umbrella.png',                  label: 'Umbrella' },
    { file: 'tp-b10-weather-outfit-worksheet.png',  label: 'Weather Outfit Worksheet' },
    { file: 'tp-b10-windy.png',                     label: 'Windy' },
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔴',
    'L2 🟡',
    'L3 🔵',
    'L4 🔵',
    'L5 🟠',
    'L6 🔵',
    'L7 🟡',
    'L8 🔵',
    'L9 🔵',
    'L10 🟡',
    'L11 🔵',
  ],

  catatan: {
    risiko: [
      'L4: Pola "When it rains, I wear a raincoat" adalah kondisional pertama dalam Fase B. Jangan ajarkan "when" sebagai grammar — ajarkan sebagai unit utuh. Jika ada siswa yang bertanya "kenapa \'when\' bukan \'if\'?", jawab singkat: "Both can work — today we use \'when.\' It\'s enough." Lanjut.',
      'L6: Layar ini memodelkan dua kondisi cuaca sekaligus (sunny dan rainy). Jika waktu sempit, potong putaran kedua baca bersama — satu putaran sudah cukup untuk familiarisasi sebelum L8.',
      'L8: Baris "My favorite weather is ___ because ___" adalah preview TP11. Jika siswa tidak bisa mengisi "because," terima tanpa "because" — "My favorite weather is sunny" sudah valid.',
      'L3 dan L4 berurutan dan keduanya 🔵. Tidak perlu micro-reset di antara keduanya — L3 berakhir dengan pertanyaan personal yang sudah menurunkan energi secara organik sebelum L4 dimulai.',
    ],
    autonomy: [
      'Raincoat boleh disebut "jas hujan" jika siswa lebih familiar — yang penting kata "raincoat" diperkenalkan dan ditulis di papan.',
      'Jika kelas tidak familiar dengan cuaca dingin: skip "when it\'s cold, I wear a jacket" di L6 — ganti dengan kondisi lokal yang relevan: "when it\'s very hot, I wear a thin shirt."',
      'Gambar cuaca boleh dari HP yang ditampilkan ke kelas jika tidak ada gambar cetak.',
      'Baris "because" di lembar kerja L8 boleh diisi dalam Bahasa Indonesia sepenuhnya — ini preview, bukan tuntutan. Yang penting siswa sudah terpapar kata "because" sebelum TP11.',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — beri jeda 3 detik diam, lanjutkan hanya setelah mereka berhenti.',
    cue    : 'TP10 bergerak dari dunia hewan ke dunia manusia — dari "what animals wear/eat" ke "what WE wear." Settling yang tenang memberi ruang pergeseran ini terasa natural.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Koneksi TP09 + Chant Cuaca
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali. Tanya kelas.

UCAP: "Last time — we talked about animals. Tigers live in the jungle. Elephants eat plants."
UCAP: "And we said — the jungle is hot and wet. The forest is cool."
→ Jeda.
UCAP: "Today — same weather. But now — it's about US. When it's hot, what do YOU wear? When it rains, what do YOU put on?"

AKSI: Langsung masuk ke chant cuaca dengan ketukan meja.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"Sunny — hot — I wear a shirt — GO!
Rainy — cold — I wear a coat — GO!
Cloudy — windy — what do I wear? — GO!
Weather, weather — let's find out — GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal chant di putaran pertama: gesture membantu — tunjuk matahari di luar jendela untuk "sunny", telapak tangan ke atas untuk "rainy." Lakukan sendiri; siswa akan mengikuti.',
          cue    : 'Jembatan ke TP09 ("same weather — but now about US") adalah kalimat terpenting di layar ini. Cuaca yang sama bisa dipakai dalam dua konteks berbeda: habitat hewan (TP09) dan pilihan pakaian (TP10). Ucap dengan penekanan pada "US."',
          darurat: 'Jika kelas masih gaduh setelah chant selesai: tepuk satu kali keras, ucap "Freeze — sit down — listen." Lanjut ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation — Cuaca dan Warna
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tanya kelas dengan ritme cepat.

UCAP: "What's the weather today?" [tunjuk jendela]
→ Kelas menjawab sesuai kondisi nyata.
UCAP: "Sunny — how does it feel?"
→ Kelas: "Hot!"
UCAP: "Rainy — how does it feel?"
→ Kelas: "Cold!" atau "Wet!"
UCAP: "Windy — in Bahasa Indonesia?"
→ Kelas: "Berangin!"

UCAP: "Good. Now — colors. What color is the sky when it's sunny?"
→ Kelas: "Blue!"
UCAP: "What color are rain clouds?"
→ Kelas: "Grey!" atau "Dark!" atau "Black!"
UCAP: "And your raincoat — what color is yours?" [tunjuk ke kelas secara umum]
→ Biarkan beberapa siswa menjawab. Terima semua warna.

UCAP: "Good. Today — we talk about weather and what we wear. Let's start."`,
          bantuan: 'Jika kelas tidak merespons pertanyaan cuaca hari ini: ucap "Is it sunny? Rainy? Cloudy?" sambil tunjuk simbol-simbol cuaca yang sudah ada di papan.',
          cue    : 'Pertanyaan "what color is your raincoat?" mungkin mengejutkan — beberapa siswa belum tahu kata "raincoat." Terima jawaban apapun (warna, nama benda dalam Bahasa Indonesia). Ini adalah preview yang disengaja untuk L3.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 40,

      langkah: [

        // L3 — Introduksi: Raincoat dan Umbrella
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo, siswa hanya mendengar dan melihat.

AKSI: Tunjukkan jas hujan (bawa ke kelas atau tunjuk gambar) dengan jelas.

UCAP: "Look at this." [pegang/tunjuk raincoat]
UCAP: "This is — a raincoat. Rain-coat." [ucap perlahan, suku kata jelas]
→ Jeda 3 detik.
UCAP: "We wear a raincoat when it rains. It keeps us dry."

AKSI: Tunjukkan payung (bawa ke kelas atau tunjuk gambar).
UCAP: "And this — an umbrella. Um-brel-la." [ucap perlahan]
→ Jeda 3 detik.
UCAP: "We use an umbrella when it rains too."

UCAP: "Raincoat — we wear it. Umbrella — we hold it."
→ Buat gesture: tunjuk badan sendiri untuk "wear," angkat tangan ke atas untuk "hold."

AKSI: Tunjuk siswa.
UCAP: "Do you have a raincoat at home?"
→ Biarkan 2–3 siswa menjawab yes/no. Tidak perlu kalimat penuh.
UCAP: "And an umbrella?"
→ Sama.`,
          bantuan: 'Jika siswa bingung perbedaan raincoat dan umbrella: buat gesture memakai jas (gerakan lengan masuk ke dalam) vs memegang payung (tangan menggenggam ke atas). Kontras fisik ini lebih cepat dari penjelasan verbal.',
          cue    : 'Gesture "wear" (tunjuk badan) vs "hold" (angkat tangan menggenggam) harus digunakan konsisten sampai L6 agar siswa tidak mencampur keduanya.',
          darurat: null,
          energi : '🔵',
        },

        // L4 — Introduksi: When It Rains… I Wear…
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — let's put them together."
UCAP: "When it rains — I wear a raincoat."
→ Tulis di papan: When it rains, I wear a raincoat.
→ Jeda 3 detik. Tunjuk "When it rains" lalu tunjuk "I wear a raincoat."

UCAP: "'When it rains' — ini kondisinya. Saat hujan."
UCAP: "'I wear a raincoat' — ini yang kita lakukan."
UCAP: "Condition — then action. When [this happens] — I [do this]."

AKSI: Tambahkan contoh kedua:
UCAP: "When it's sunny — I wear a hat."
→ Tulis: When it's sunny, I wear a hat.
→ Jeda.

UCAP: "When it's cold — I wear a jacket."
→ Tulis: When it's cold, I wear a jacket.

🗣 TOGETHER
UCAP: "Say it with me — When it rains, I wear a raincoat."
→ Kelas mengulang 2 kali.
UCAP: "When it's sunny, I wear a hat."
→ Kelas mengulang.`,
          bantuan: 'Jika siswa hanya mengucapkan bagian kedua ("I wear a raincoat") tanpa "When it rains": ucap "When it rains — " dengan nada menggantung, tunggu kelas melengkapi. Nada menggantung lebih efektif dari instruksi verbal.',
          cue    : 'Jangan ajarkan "when" sebagai grammar — ajarkan sebagai bagian dari frasa utuh. Siswa tidak perlu tahu ini adalah "conditional clause." Yang perlu mereka tahu: "when [cuaca] — I [pakaian]" adalah satu unit.',
          darurat: null,
          energi : '🔵',
        },

        // L5 — Drill — Cuaca dan Pakaian
        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER

AKSI: Tunjuk gambar cuaca satu per satu. Kelas ucapkan kalimat penuh.

AKSI: Tunjuk gambar hujan.
UCAP: "When it rains — ?"
→ Kelas: "I wear a raincoat!"

AKSI: Tunjuk gambar sunny/panas.
UCAP: "When it's hot — ?"
→ Kelas: "I wear a hat!" atau "I wear a shirt!" [terima variasi]

AKSI: Tunjuk gambar dingin/berangin.
UCAP: "When it's cold — ?"
→ Kelas: "I wear a jacket!" atau "I wear a sweater!"

AKSI: Percepat — tunjuk gambar secara acak 4–5 kali.

AKSI: Balik arah — sebut pakaian, kelas sebut kondisi cuacanya:
UCAP: "Raincoat — when?"
→ Kelas: "When it rains!"
UCAP: "Hat — when?"
→ Kelas: "When it's sunny!" atau "When it's hot!"

AKSI: Tunjuk 2–3 siswa individual:
UCAP: "[nama] — when it's rainy, what do you wear?"
→ Jawaban: "I wear a raincoat!" atau "I use an umbrella!"`,
          diferensiasi: {
            perluSupport: 'cukup menyebut nama pakaian — "raincoat" atau "jacket" — tanpa kalimat penuh.',
            sudahBisa   : 'minta kalimat penuh dengan warna — "When it rains, I wear my blue raincoat."',
          },
          bantuan: 'Jika siswa yang ditunjuk diam lebih dari 5 detik: tunjuk gambar cuaca di papan, ucap "When it rains — you wear a...?" Pilihan kontekstual lebih mudah dari produksi bebas.',
          cue    : 'Bagian balik arah ("Raincoat — when?") lebih penting dari bagian pertama. Di sana siswa membuktikan pemahaman hubungan cuaca-pakaian, bukan hafalan pasangan kata.',
          darurat: null,
          energi : '🟠',
        },

        // L6 — Modeling Kalimat Lengkap + Variasi Cuaca
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pelan suara. Tunggu 2 detik sebelum mulai.

👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — let's make a complete weather report. Listen."

UCAP: "Today, it is sunny."
→ Tulis di papan: Today, it is sunny.
UCAP: "When it's sunny, I wear a white shirt and a hat."
→ Tulis: When it's sunny, I wear a white shirt and a hat.
UCAP: "I also use an umbrella — to protect from the sun."
→ Tulis: I use an umbrella.

UCAP: "But when it rains —"
UCAP: "When it rains, I wear my blue raincoat."
→ Tulis: When it rains, I wear my blue raincoat.
UCAP: "And I carry an umbrella."
→ Tulis: I carry an umbrella.

🗣 TOGETHER
AKSI: Tunjuk kalimat satu per satu. Kelas membaca bersama guru.
→ Putaran pertama: guru tunjuk dan pimpin.
→ Putaran kedua: guru tunjuk saja — kelas baca sendiri.

UCAP: "Good. Now — you will write your own weather report."`,
          bantuan: 'Jika kelas membaca tidak sinkron di putaran kedua: biarkan. Familiarisasi dengan struktur lebih penting dari sinkronisasi. Lanjut ke L8 jika semua siswa sudah membaca setidaknya sekali.',
          cue    : 'Kelima kalimat di papan adalah scaffold utama untuk L8 — jangan hapus sampai L8 selesai. Dua kondisi cuaca dimodelkan (sunny dan rainy) — siswa di L8 akan menulis tentang minimal dua kondisi.',
          darurat: null,
          energi : '🔵',
        },

        // L7 — Pair Practice — Tanya-Jawab Cuaca dan Pakaian [FLEX]
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelah mereka.

UCAP: "Ask your partner: 'What do you wear when it rains?'"
UCAP: "Partner answers — then swap."

AKSI: Demo singkat dengan satu siswa sukarelawan:
UCAP: "[nama] — ask me: 'What do you wear when it rains?'"
→ Siswa: "What do you wear when it rains?"
UCAP: "I wear my green raincoat. What about you?"
→ Siswa: "I wear a blue raincoat."
UCAP: "Good. Now add one more — what about sunny weather?"

UCAP: "Your turn. You have 4 minutes."

AKSI: Circulate — dengarkan tanpa menyela kecuali ada kekeliruan konsep besar.`,
          diferensiasi: {
            perluSupport: 'cukup tanya dan jawab satu kondisi cuaca saja.',
            sudahBisa   : 'tanya dan jawab dua kondisi berbeda, gunakan warna dalam jawaban.',
          },
          bantuan: 'Jika satu pasang tidak tahu mulai: ucap kalimat tanya pertama untuk mereka — "Ask: \'What do you wear when it rains?\'" — setelah mereka mengulangi, arahkan partnernya untuk menjawab.',
          cue    : null,
          darurat: '[FLEX — lewati jika waktu tersisa < 18 menit atau energi kelas di bawah 🟡] Jika pair practice menjadi gaduh dalam 1 menit: hentikan. Ucap "Okay — take your pencil. Let\'s write." Lanjut ke L8 dengan transisi: "Take a breath. Open your worksheet."',
          energi : '🟡',
        },

        // L8 — Writing Individual — Laporan Cuacaku
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L6 (L7 dilewati) — ucap: "Okay. Take your pencil. Let's write." Jeda 3 detik. Bagikan lembar kerja.
AKSI: Bagikan lembar kerja (1 per siswa). Scaffold di papan dari L6 tetap ada.

Lembar kerja berisi template:

  MY WEATHER REPORT

  Today, it is _________________.

  When it rains, I wear _________________.
  I also carry an umbrella.

  When it's sunny, I wear _________________.

  When it's cold, I wear _________________.

  My favorite weather is _________________ because _________________.

UCAP: "Write your weather report. Use the board for help."
UCAP: "Your real clothes — not random. What do YOU actually wear?"

👂 LISTEN FIRST — guru demo mengisi baris pertama di papan:
UCAP: "Watch me. Today, it is — " [lihat cuaca nyata hari ini, tulis]
UCAP: "When it rains, I wear — my yellow raincoat." [tulis]
UCAP: "For the umbrella line — just leave it. It's already written: 'I also carry an umbrella.'"
UCAP: "Now — your turn."

AKSI: Circulate. Bergerak ke meja siswa — jangan berdiri di depan.`,
          diferensiasi: {
            perluSupport: 'cukup isi tiga baris pertama (today, when it rains, when it\'s sunny). Baris "cold" dan "favorite" opsional.',
            sudahBisa   : 'setelah semua baris terisi, tambah satu kalimat bebas — misalnya "When it\'s cloudy, I bring an umbrella just in case."',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai di TP ini. Baris "because" adalah preview TP11 — jika siswa tidak bisa mengisinya, terima tanpa "because." Yang penting tiga baris pertama.',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai: minta siswa hanya mengisi dua baris pertama (today + when it rains). Langsung ke L10 tanpa melalui L9.',
          energi : '🔵',
        },

        // L9 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil tulisan siswa. Pilih 2 hasil — satu yang menggunakan "When it rains" dengan benar, satu yang menggunakan warna dalam deskripsi pakaian.

UCAP: "Good. Let's hear from two friends."
→ Minta 2 siswa membacakan weather report mereka — semua baris.
→ Kelas mendengarkan.

UCAP (setelah tiap siswa membacakan): "What weather did they write about?"
→ Kelas menjawab kondisi cuaca yang disebutkan.
UCAP: "Say the sentence together."
→ Kelas ulang satu kalimat "When it rains..." dari yang baru dibacakan.`,
          bantuan: 'Jika siswa yang diminta membaca menolak: ucap "That\'s okay" dan tunjuk siswa lain.',
          cue    : 'Pilih siswa yang berbeda dari yang sudah menjawab di L5. Jika ada siswa yang menulis "I wear umbrella" tanpa artikel "an" — jangan koreksi secara keras. TP10 bukan TP untuk mengajarkan artikel.',
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
UCAP: "What do we wear when it rains? — two things."
→ Kelas: "Raincoat!" dan "Umbrella!"
UCAP: "How do we say 'ketika hujan, saya memakai...'?"
→ Kelas: "When it rains, I wear...!"
UCAP: "And when it's sunny?"
→ Kelas: "When it's sunny, I wear...!"

UCAP: "Give me one complete sentence about rain."
→ Satu siswa atau kelas: "When it rains, I wear my blue raincoat!"

AKSI: Hapus papan satu bagian per satu. Kelas ucapkan yang dihapus.
Urutan hapus: umbrella → raincoat → When it's sunny… → When it rains…`,
          bantuan: null,
          cue    : 'Hapus kata benda (umbrella, raincoat) sebelum menghapus pola kalimat — kosakata benda dihapus sebelum struktur. Ini menegaskan bahwa pola "When it [cuaca], I wear [pakaian]" lebih penting untuk diingat daripada dua kata benda saja.',
          darurat: null,
          energi : '🟡',
        },

        // L11 — Closure Emosional + Teaser TP11
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan.

UCAP: "Before we finish — look outside."
→ Jeda 3 detik. Biarkan semua siswa melihat ke luar jendela.
UCAP: "What's the weather right now?"
→ Kelas menjawab.
UCAP: "And what would you wear if you had to go outside right now?"
→ Tunjuk 1–2 siswa. Jawaban dalam Bahasa apapun diterima.

→ Jeda 3 detik.

UCAP: "You made a decision — based on the weather. That's what language is for. To say real things about real life."

UCAP: "Next time — we talk about our body and our health. What we eat. What we do to stay healthy."
[Teaser TP11 — Healthy Habits]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : '"Look outside" harus diucapkan sebagai instruksi konkret — cuaca yang sesungguhnya ada di luar jendela adalah konteks yang paling kuat untuk menutup sesi ini. Pastikan ada jendela yang bisa dilihat dari tempat duduk.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B10;
