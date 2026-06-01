/**
 * =============================================================
 * FLAF — TP B16 (Sports and Physical Activities)
 * File: docs/output-v5-faseb/tp-16-v5.js
 * Format: v5.0
 * Fase: B (Kelas 4)
 * Jenis: Biasa (extended — 12 langkah) — Kluster E
 * Source: flaf-skenario-tp16-v2.txt (Fase B)
 * =============================================================
 */

const TP_B16 = {

  id       : 'tp-b16',
  nomor    : 16,
  kelas    : 4,
  nama     : 'Sports and Physical Activities',
  tema     : 'Mendeskripsikan olahraga dan aktivitas fisik menggunakan ekspresi kemampuan dan frekuensi',
  kluster  : 'E',
  jenis    : 'Biasa',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat menggunakan "always" dan "sometimes" untuk mendeskripsikan frekuensi aktivitas fisik dalam kalimat sederhana.',
    'Peserta didik dapat menggunakan pola "I can..." untuk mengekspresikan kemampuan fisik yang dimiliki.',
    'Peserta didik dapat menulis deskripsi olahraga favorit yang mencakup nama olahraga, frekuensi, kemampuan, dan alasan menyukainya.',
  ],

  vocab    : ['football', 'badminton', 'swimming', 'always', 'sometimes', 'I can...', 'legs', 'feet', 'arms', 'hands', 'healthy', 'exercise'],

  persiapan: [
    'Gambar atau sketsa tiga olahraga: football, badminton, renang — disiapkan sebelum kelas atau digambar di papan',
    'Lembar kerja siswa: 1 per siswa — template MY SPORT (lihat L9)',
    'Papan tulis + spidol untuk always/sometimes di L4 dan scaffold lima kalimat di L7 — jangan hapus sampai L9 selesai',
  ],

  checklist: [
    'Gambar tiga olahraga (football, badminton, renang) sudah disiapkan sebelum kelas',
    'Scaffold lima kalimat di papan dari L7 TIDAK dihapus sampai L9 selesai',
    'Penilaian formatif sudah dibuka di L9 — minimal 3 siswa sudah dinilai',
    'Referensi ke TP15 ("exercise is healthy — remember?") sudah disampaikan di L1',
    '"Always" dan "sometimes" sudah dikontraskan dengan contoh di L4 — bukan hanya didrill',
    '"I can" sudah diperkenalkan dengan gesture di L6 — bukan sebagai grammar formal',
    'Siswa yang membacakan di L10 berbeda dari yang menjawab di L5',
    'Demo guru di L9 menggunakan badminton — bukan football — untuk memberi contoh yang berbeda dari modeling L7',
  ],

  printables: [
    { file: 'tp-b16-badminton.png',               label: 'Badminton' },
    { file: 'tp-b16-cycling.png',                 label: 'Cycling' },
    { file: 'tp-b16-football.png',                label: 'Football' },
    { file: 'tp-b16-martial-arts.png',            label: 'Martial Arts' },
    { file: 'tp-b16-running.png',                 label: 'Running' },
    { file: 'tp-b16-sports-survey-worksheet.png', label: 'Sports Survey Worksheet' },
    { file: 'tp-b16-swimming.png',                label: 'Swimming' },
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔴',
    'L2 🟡',
    'L3 🔵',
    'L4 🟡',
    'L5 🟠',
    'L6 🔵',
    'L7 🔵',
    'L8 🟡',
    'L9 🔵',
    'L10 🔵',
    'L11 🟡',
    'L12 🔵',
  ],

  catatan: {
    risiko: [
      'L4: "Always" dan "sometimes" bisa menjebak — beberapa siswa mungkin memakai "always" untuk semua kalimat. Ini bukan kesalahan serius; yang penting mereka menggunakan salah satunya. Koreksi ke "sometimes" hanya jika konteks nyata jelas tidak memungkinkan.',
      'L6: "I can" adalah modal verb pertama Fase B. Budget hanya 3 menit — cukup tiga contoh + dua kali echo. Jangan tergoda memperluas ke "I can\'t" atau "Can you?" — itu territory TP lain.',
      'L7: Lima kalimat lebih sedikit dari modeling TP12–15. Ini disengaja — TP pertama Kluster E, siswa perlu merasa berhasil dengan scaffold yang lebih ringan.',
      'L9: Demo guru menggunakan "badminton" sebagai pilihan berbeda dari "football" di L7. Ini mencegah semua siswa menulis tentang football dan memberi sinyal bahwa semua olahraga valid.',
    ],
    autonomy: [
      '"Football" merujuk ke sepak bola. Di beberapa konteks Indonesia, "futsal" lebih familiar — keduanya valid. Tulis kedua nama di papan jika perlu.',
      '"Badminton" adalah olahraga nasional Indonesia — boleh dijadikan anchor utama pengganti football untuk beberapa konteks daerah.',
      'Jika ada siswa yang tidak suka olahraga apapun: arahkan ke aktivitas fisik yang lebih luas — berjalan kaki, menari, membantu di dapur. "Physical activity" bukan hanya "sport."',
      '"I can" bisa diperluas secara natural oleh siswa yang lebih maju: "I can swim fast," "I can run 5 kilometers." Terima semua variasi selama "I can" dipakai.',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — jeda 3 detik diam, lanjutkan hanya setelah mereka berhenti.',
    cue    : 'Kluster E dimulai hari ini. Setelah Panen besar tentang negara, topik kembali ke sesuatu yang sangat personal dan fisik — olahraga dan gerakan tubuh. Ini adalah reset yang disambut — siswa sudah siap untuk topik yang lebih ringan dan energetik.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Koneksi TP15 + Chant Olahraga
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali. Tanya kelas.

UCAP: "Last time — we wrote about our country. Jobs, food, celebrations."
UCAP: "We talked about being healthy. Exercise is healthy, remember?"
→ Jeda.
UCAP: "Today — we talk about sports. What sports do you play? What can you do?"

AKSI: Langsung masuk ke chant dengan ketukan meja.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"Football — swimming — let's play — GO!
Always, sometimes — every day — GO!
I can run — I can jump — I can play — GO!
Sports and bodies — let's GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal chant: gesture membantu — kaki menendang untuk "football", tangan mengayuh untuk "swimming", loncat kecil untuk "jump". Tiga gesture yang menyenangkan.',
          cue    : 'Jembatan ke TP15 ("exercise is healthy — remember?") menggunakan kosakata dari TP11 yang muncul kembali dalam konteks olahraga. Ini memperkuat rantai: TP11 (healthy habits) → TP15 (my country) → TP16 (sports). Ucap sebelum chant, bukan setelah.',
          darurat: 'Jika kelas masih gaduh setelah chant selesai: tepuk satu kali keras, ucap "Freeze — sit down — listen." Lanjut ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation — Hobbies dan Body Parts
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tanya kelas dengan ritme cepat.

UCAP: "Hobbies — what do you like to do?"
→ Kelas menyebut 3–4 hobi. Tulis di papan.
UCAP: "Reading — do you like reading?"
→ Kelas: "Yes! / Sometimes!"
UCAP: "Swimming?"
→ Kelas menjawab bervariasi.
UCAP: "Playing — playing what?"
→ Kelas: "Football! Badminton! Basketball!"

UCAP: "Good. Now — body parts. Sports use the body."
UCAP: "What do you use to run?" [tunjuk kaki sendiri]
→ Kelas: "Legs! Feet!"
UCAP: "To swim?" [gerakan tangan mengayuh]
→ Kelas: "Arms! Hands!"
UCAP: "To kick a ball?"
→ Kelas: "Feet! Legs!"

UCAP: "Good. Sports need the whole body. Today — we talk about sports we love and what we can do."`,
          bantuan: 'Jika kelas tidak menyebut olahraga apapun: tunjuk gambar atau buat gesture olahraga sederhana — menendang, berlari, melompat — dan tanya "What sport is this?"',
          cue    : 'Hobi yang disebutkan kelas di bagian bebas dipakai di L5 dan L9. Tulis 3–4 nama olahraga di papan — ini membuat contoh di L7 lebih personal. Body parts akan muncul kembali di L7 dan L9 dalam konteks deskripsi olahraga.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 42,

      langkah: [

        // L3 — Introduksi: Football dan Olahraga Lain
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo, siswa hanya mendengar dan melihat.

AKSI: Tunjukkan gambar atau sketsa football.

UCAP: "Look at this sport." [tunjuk gambar]
UCAP: "This is — football. Foot-ball." [ucap perlahan]
→ Jeda 3 detik.
UCAP: "In football — you kick a ball with your feet and legs."
UCAP: "Football is a popular sport in Indonesia and around the world."

AKSI: Tunjuk gambar badminton.
UCAP: "And this — badminton. Bad-min-ton."
→ Jeda 3 detik.
UCAP: "In badminton — you use your arms and hands to hit a shuttlecock."

AKSI: Tunjuk gambar renang.
UCAP: "And swimming — you use your arms, legs, and whole body."

AKSI: Tunjuk ketiga gambar secara bergantian.
UCAP: "Football — legs and feet. Badminton — arms and hands. Swimming — whole body."

🗣 TOGETHER
UCAP: "Say it — football."
→ Kelas: "Football!"
UCAP: "Badminton."
→ Kelas: "Badminton!"
UCAP: "Swimming."
→ Kelas: "Swimming!"`,
          bantuan: 'Jika siswa tidak familiar dengan badminton: buat gesture memukul shuttlecock dengan raket imajiner. Semua siswa Indonesia familiar dengan olahraga ini — gesture saja cukup sebagai anchor.',
          cue    : 'Tiga olahraga dipilih karena masing-masing menggunakan bagian tubuh yang berbeda — ini menghubungkan body parts dari L2 dengan nama olahraga secara bermakna. Jika ada olahraga lokal yang lebih relevan (pencak silat, catur, lari), tambahkan sebagai opsi keempat.',
          darurat: null,
          energi : '🔵',
        },

        // L4 — Introduksi: Always dan Sometimes
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — how often do you do sports?"
UCAP: "I play football — every day. Always."
→ Tulis di papan: ALWAYS — every day, all the time
→ Jeda 3 detik.
UCAP: "'Always' — artinya selalu. Every day or almost every day."

UCAP: "But swimming — only on weekends. Sometimes."
→ Tulis di papan: SOMETIMES — not every day, only occasionally
→ Jeda 3 detik.
UCAP: "'Sometimes' — artinya kadang-kadang. Not every day."

AKSI: Berikan contoh kalimat dengan kedua kata:
UCAP: "I always eat breakfast." [tunjuk ALWAYS]
→ Tulis: I always eat breakfast.
UCAP: "I sometimes play football." [tunjuk SOMETIMES]
→ Tulis: I sometimes play football.

🗣 TOGETHER
UCAP: "Say it — I always eat breakfast."
→ Kelas mengulang.
UCAP: "I sometimes play football."
→ Kelas mengulang.

UCAP: "Now — think about YOUR sports. Always or sometimes?"
→ Tunjuk 2–3 siswa: "Football — always or sometimes for you?"
→ Siswa menjawab: "Sometimes!" atau "Always!"`,
          bantuan: 'Jika siswa bingung membedakan always dan sometimes: tunjuk dua jari untuk "always" (setiap hari) dan satu jari untuk "sometimes" (sesekali). Gesture sederhana yang membedakan frekuensi secara visual.',
          cue    : 'Contoh "I always eat breakfast" menggunakan daily routine dari Fase A — ini adalah anchor yang familiar sebelum siswa mengaplikasikan "always/sometimes" ke olahraga yang baru.',
          darurat: null,
          energi : '🟡',
        },

        // L5 — Drill — Frekuensi Olahraga
        {
          tipe        : 'instruksi',
          teks        : `UCAP: "Good. Now — let's practice together. Fast."

🗣 TOGETHER

AKSI: Guru menyebut satu aktivitas, kelas menjawab "always" atau "sometimes."

UCAP: "Eating breakfast — always or sometimes?"
→ Kelas: "Always!" [sebagian besar]
UCAP: "Playing football — always or sometimes?"
→ Kelas: bervariasi.
UCAP: "Swimming — always or sometimes?"
→ Kelas: bervariasi.

AKSI: Tunjuk 3 siswa individual:
UCAP: "[nama] — swimming. Always or sometimes for you?"
→ Siswa: "Sometimes!"
UCAP: "Say the full sentence."
→ Siswa: "I sometimes swim."

AKSI: Balik arah — guru sebut frekuensi, kelas sebut aktivitasnya:
UCAP: "Tell me something you ALWAYS do."
→ Kelas: "I always eat breakfast!" atau "I always go to school!"
UCAP: "Tell me something you SOMETIMES do."
→ Kelas: "I sometimes play football!" atau "I sometimes swim!"`,
          diferensiasi: {
            perluSupport: 'cukup menjawab satu kata — "always" atau "sometimes."',
            sudahBisa   : 'minta kalimat penuh + alasan — "I sometimes play football because I love it."',
          },
          bantuan: 'Jika siswa menjawab "always" untuk semua aktivitas: terima, lalu tanya dengan senyum — "Really? Every day? Wow — you are very active!" Jangan koreksi — lanjut ke siswa berikutnya.',
          cue    : 'Bagian balik arah ("Tell me something you ALWAYS do") lebih penting dari bagian pertama. Di sana siswa menghasilkan kalimat sendiri dari pengalaman mereka — bukan hanya mengulang pasangan aktivitas-frekuensi yang dicontohkan.',
          darurat: null,
          energi : '🟠',
        },

        // L6 — Introduksi: I Can…
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pelan suara. Tunggu 2 detik sebelum mulai.

👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — one more thing. What CAN you do?"
UCAP: "I can swim." [sambil buat gesture berenang]
→ Tulis di papan: I can swim.
→ Jeda 3 detik.
UCAP: "'I can' — artinya saya bisa. Kemampuan yang kamu punya."

UCAP: "I can run fast." [gesture berlari]
→ Tulis: I can run fast.
UCAP: "I can kick a ball." [gesture menendang]
→ Tulis: I can kick a ball.

UCAP: "Now — what CAN you do? Tell me."
→ Tunjuk 2–3 siswa: "What can YOU do?"
→ Siswa: "I can swim!" atau "I can play badminton!" atau "I can jump!"

🗣 TOGETHER
UCAP: "Say it — I can swim."
→ Kelas: "I can swim!"
UCAP: "I can run fast."
→ Kelas: "I can run fast!"`,
          bantuan: 'Jika siswa mengucapkan "I can to swim" dengan "to": jangan koreksi keras. Ucap kembali kalimat yang benar — "I can swim — no \'to\' needed" — dengan nada santai, lanjut.',
          cue    : '"I can" adalah modal verb pertama dalam Fase B. Jangan ajarkan sebagai grammar — ajarkan sebagai ekspresi kemampuan yang konkret. Tiga detik gesture untuk setiap contoh lebih efektif dari penjelasan panjang.',
          darurat: null,
          energi : '🔵',
        },

        // L7 — Modeling Kalimat Lengkap + Baca Bersama
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — let's put it all together. Listen."

UCAP: "My favorite sport is football."
→ Tulis di papan: My favorite sport is football.
UCAP: "I sometimes play football with my friends."
→ Tulis: I sometimes play football with my friends.
UCAP: "I like football because it is fun and exciting."
→ Tulis: I like football because it is fun and exciting.
UCAP: "I can kick a ball and run fast."
→ Tulis: I can kick a ball and run fast.
UCAP: "Football is good for my legs and my health."
→ Tulis: Football is good for my legs and my health.

🗣 TOGETHER
AKSI: Tunjuk kalimat di papan satu per satu. Kelas membaca bersama guru.
→ Putaran pertama: guru tunjuk dan pimpin.
→ Putaran kedua: guru tunjuk saja — kelas baca sendiri.

UCAP: "Good. Now — you will write about your own favorite sport."`,
          bantuan: 'Jika kelas membaca tidak sinkron di putaran kedua: biarkan. Familiarisasi dengan lima kalimat lebih penting dari sinkronisasi.',
          cue    : 'Kelima kalimat di papan adalah scaffold utama untuk writing di L9 — jangan hapus sampai L9 selesai. Kalimat terakhir ("Football is good for my legs and my health") mengintegrasikan body parts (L3) dengan healthy (TP11). Tunjuk eksplisit: "Remember \'healthy\' from before? Sports keep us healthy."',
          darurat: null,
          energi : '🔵',
        },

        // L8 — Pair Practice — Ceritakan Olahraga Favorit [FLEX]
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelah mereka.

UCAP: "Tell your partner about your favorite sport."
UCAP: "Use: 'My favorite sport is ___. I always/sometimes ___. I can ___. I like it because ___'"

AKSI: Demo singkat dengan satu siswa sukarelawan:
UCAP: "[nama] — what is your favorite sport?"
→ Siswa menyebut olahraga.
UCAP: "Always or sometimes?"
→ Siswa: "Sometimes!"
UCAP: "And what can you do?"
→ Siswa: "I can kick a ball!"
UCAP: "Perfect. Tell your partner all of it."

AKSI: Beri waktu 4 menit — masing-masing 2 menit per arah. Circulate.`,
          diferensiasi: {
            perluSupport: 'cukup dua kalimat — "My favorite sport is ___. I sometimes ___."',
            sudahBisa   : 'tambahkan kalimat "because" + body part — "I like it because it makes my legs strong."',
          },
          bantuan: 'Jika satu pasang tidak bisa memulai: tunjuk scaffold di papan, ucap kalimat pertama untuk mereka — "My favorite sport is..." — tunggu mereka melengkapi.',
          cue    : null,
          darurat: '[FLEX — lewati jika waktu tersisa < 18 menit atau energi kelas di bawah 🟡] Jika pair practice gaduh dalam 1 menit: hentikan. Ucap "Okay — take your pencil. Let\'s write." Lanjut ke L9 langsung.',
          energi : '🟡',
        },

        // L9 — Writing Individual — Olahragaku
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L7 (L8 dilewati) — ucap: "Okay. Take your pencil. Think about your favorite sport. Let's write." Jeda 3 detik. Bagikan lembar kerja.
AKSI: Bagikan lembar kerja (1 per siswa). Scaffold di papan dari L7 tetap ada.

Lembar kerja berisi template:

  MY SPORT

  My favorite sport is _________________________.

  I always / sometimes _________________________.

  I like it because _________________________.

  I can _________________________.

  This sport is good for my _________________ [body part].

  One more thing: I also like _________________________.

UCAP: "Write about your favorite sport. Use always or sometimes. Use I can."
UCAP: "Your real sport — not random."

👂 LISTEN FIRST — guru demo mengisi satu template di papan:
UCAP: "Watch me. My favorite sport is badminton." [tulis]
UCAP: "I sometimes play badminton with my family." [tulis]
UCAP: "I can hit the shuttlecock. It is good for my arms." [tulis]
UCAP: "For line two — write 'I always play football' or 'I sometimes swim.' Use your sport's own verb."
UCAP: "Now — your turn."

AKSI: Circulate. Bergerak ke meja siswa — jangan berdiri di depan.`,
          diferensiasi: {
            perluSupport: 'cukup isi empat baris pertama. Baris "One more thing" opsional.',
            sudahBisa   : 'setelah semua baris terisi, tambah satu kalimat bebas — "I want to learn ___ because ___."',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai. Siswa boleh menulis tentang olahraga apapun — futsal, renang, lari, pencak silat, berjalan kaki. TP16 tentang aktivitas fisik yang bermakna bagi siswa, bukan olahraga yang "benar." Jangan arahkan pilihan olahraga.',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai: minta siswa hanya mengisi tiga baris pertama (nama olahraga, frekuensi, because). Langsung ke L11 tanpa melalui L10.',
          energi : '🔵',
        },

        // L10 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil tulisan siswa. Pilih 2 hasil — satu yang menggunakan "I can" dengan kemampuan yang menarik, satu yang memilih olahraga yang tidak umum.

UCAP: "Good. Let's hear from two friends."
→ Minta 2 siswa membacakan tentang olahraga favorit mereka.
→ Kelas mendengarkan.

UCAP (setelah tiap siswa membacakan): "What sport was that?"
→ Kelas menjawab nama olahraga.
UCAP: "What can they do?"
→ Kelas menjawab kalimat "I can ___" yang baru didengar.`,
          bantuan: 'Jika siswa yang diminta membaca menolak: ucap "That\'s okay" dan tunjuk siswa lain.',
          cue    : 'Pilih siswa yang berbeda dari yang sudah menjawab di L5. Pertanyaan "what can they do?" memaksa kelas mendengarkan secara aktif untuk kalimat "I can" — ini memperkuat ekspresi kemampuan sebagai inti TP16.',
          darurat: '[FLEX — lewati jika waktu tersisa < 10 menit]',
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 8,

      langkah: [

        // L11 — Review + Hapus Papan
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Siswa simpan lembar kerja. Guru kembali ke depan kelas.

UCAP: "Good work today. Let's remember."
UCAP: "How do we say 'selalu'?"
→ Kelas: "Always!"
UCAP: "Dan 'kadang-kadang'?"
→ Kelas: "Sometimes!"
UCAP: "How do we say 'saya bisa'?"
→ Kelas: "I can!"

UCAP: "Give me one sentence — I always or sometimes do something — and I can something."
→ Satu siswa: "I sometimes play football and I can kick the ball!"

AKSI: Hapus papan satu bagian per satu. Kelas ucapkan yang dihapus.
Urutan hapus: I can kick a ball → I sometimes play football → sometimes → always → football`,
          bantuan: null,
          cue    : 'Hapus kalimat "I can" sebelum kalimat "I sometimes/always" — urutan ini memperkuat bahwa "I can" adalah lapisan kemampuan yang ada di dalam aktivitas, bukan sekadar kosakata tambahan.',
          darurat: null,
          energi : '🟡',
        },

        // L12 — Closure Emosional + Teaser TP17
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan.

UCAP: "Before we finish — one question."
UCAP: "What sport or activity makes you feel the most alive? The most yourself?"
→ Tunjuk 1–2 siswa yang mau berbagi. Jawaban dalam Bahasa apapun diterima.
→ Bantu framing: "So — 'I love ___ because ___. I can ___.'"

→ Jeda 3 detik.

UCAP: "Sports are not just exercise. They are part of who you are."

UCAP: "Next time — we talk about getting around. Directions. How to go from one place to another."
[Teaser TP17 — Getting Around: Directions]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : 'Pertanyaan "what makes you feel the most alive?" adalah pertanyaan yang lebih dalam dari biasanya — sesuai untuk siswa kelas 4 yang sudah melewati TP01–15. Ini bukan tentang olahraga saja, tapi tentang identitas. Beri ruang yang cukup untuk jawabannya.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B16;
