/**
 * =============================================================
 * FLAF — TP B12 (Jobs and Community Helpers)
 * File: docs/output-v5-faseb/tp-12-v5.js
 * Format: v5.0
 * Fase: B (Kelas 4)
 * Jenis: Biasa — Kluster D
 * Source: flaf-skenario-tp12-v2.txt (Fase B)
 * =============================================================
 */

const TP_B12 = {

  id       : 'tp-b12',
  nomor    : 12,
  kelas    : 4,
  nama     : 'Jobs and Community Helpers',
  tema     : 'Mengenal profesi anggota komunitas dan mendeskripsikan pekerjaan mereka',
  kluster  : 'D',
  jenis    : 'Biasa',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat menyebutkan nama dua profesi (doctor dan farmer) dan tempat kerja masing-masing.',
    'Peserta didik dapat menggunakan pola "She works at..." untuk mendeskripsikan tempat kerja seseorang.',
    'Peserta didik dapat menulis deskripsi lengkap satu profesi menggunakan struktur She is/works/helps/has... dan kalimat "because."',
  ],

  vocab    : ['mother', 'father', 'eyes', 'hands', 'feet', 'healthy', 'doctor', 'farmer', 'She works at...', 'because'],

  persiapan: [
    'Gambar dua profesi: dokter (di klinik/rumah sakit) dan petani (di sawah/ladang) — gambar atau sketsa di papan, disiapkan sebelum kelas',
    'Lembar kerja siswa: 1 per siswa — template A COMMUNITY HELPER I ADMIRE (lihat L8)',
    'Papan tulis + spidol untuk menulis pola "She works at…" dan kalimat deskripsi di L4 dan L6 — tidak dihapus sampai L8 selesai',
  ],

  checklist: [
    'Gambar dokter dan petani sudah disiapkan sebelum kelas — terlihat jelas dari seluruh sudut kelas',
    'Scaffold tujuh kalimat di papan dari L6 TIDAK dihapus sampai L8 selesai',
    'Penilaian formatif sudah dibuka di L8 — minimal 3 siswa sudah dinilai',
    'Referensi ke TP11 ("who helps us stay healthy? who grows our food?") sudah disampaikan di L1',
    '"She" sebagai third-person singular sudah ditunjuk eksplisit di L4 — termasuk perbedaan dengan "They"',
    'Kalimat "because" dari TP11 sudah muncul kembali di L6 dan L8 — dengan konteks profesi',
    'Siswa yang membacakan di L9 berbeda dari yang menjawab di L5',
    'Template L8 menyediakan pilihan "Her/His" dan "She/He" — siswa boleh menulis tentang laki-laki atau perempuan',
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
      'L4: Third-person singular "She works" adalah fitur grammatikal baru. Jangan habiskan lebih dari 30 detik untuk menjelaskan "She works" vs "They work" — cukup satu kalimat kontras dan lanjut. Pemahaman datang melalui penggunaan berulang di L5 dan L6.',
      'L6: Tujuh kalimat deskripsi lebih banyak dari modeling TP sebelumnya. Jika waktu ketat, kurangi ke empat kalimat — hapus "She uses her hands" dan "She has kind eyes", langsung ke "Her job is important because." Yang paling penting: kalimat pertama (She is a...), ketiga (She works at...), dan terakhir (because...).',
      'L8: Template menggunakan "Her / His" — beberapa siswa mungkin bingung. Arahkan semua siswa menggunakan "She" terlebih dahulu, kecuali mereka secara eksplisit ingin menulis tentang laki-laki. Ini lebih praktis dari menjelaskan gender agreement.',
    ],
    autonomy: [
      '"Doctor" dan "farmer" boleh diganti atau ditambah dengan profesi lokal yang lebih relevan — bidan, nelayan, pedagang pasar. Yang penting pola "She works at/in/on [tempat]" tetap bisa diaplikasikan.',
      'Gambar dokter dan petani boleh diganti dengan foto guru atau anggota keluarga siswa yang dikenal — ini membuat profesi terasa nyata, bukan abstrak.',
      'Jika ada siswa yang ingin menulis tentang profesi di luar contoh (polisi, chef, pilot) — izinkan dan bantu cari tempat kerjanya. Ini tanda siswa sudah melampaui scaffold.',
      '"Admire" di judul lembar kerja boleh diganti dengan "know" atau "like" jika terasa terlalu formal untuk siswa Kelas 4 awal.',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — jeda 3 detik diam, lanjutkan hanya setelah mereka berhenti.',
    cue    : 'TP12 adalah awal Kluster D dan awal Kelas 4. Dinamika kelas mungkin berbeda dari Kelas 3. Settling yang solid memberi sinyal bahwa ritme sesi ini sama seperti Kluster sebelumnya.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Koneksi TP11 + Chant Profesi
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali. Tanya kelas.

UCAP: "Last time — we talked about healthy habits. I eat vegetables because they are healthy. I exercise because it makes me strong."
UCAP: "Who helps us stay healthy when we are sick?"
→ Biarkan kelas menjawab dalam Bahasa apapun: "dokter!", "doctor!"
UCAP: "A doctor. And who grows the healthy food we eat — the rice, the vegetables?"
→ Kelas: "Petani!" atau "Farmer!"
UCAP: "Today — we learn about people in our community. The jobs they do. The places they work."

AKSI: Langsung masuk ke chant dengan ketukan meja.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"Doctor — farmer — they help us — GO!
She works hard — every day — GO!
Community helpers — all around — GO!
Let's learn their jobs — let's GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal chant: tangan di dada untuk "doctor," tangan menggemburkan tanah untuk "farmer." Dua gesture konkret.',
          cue    : 'Jembatan ke TP11 menggunakan dua pertanyaan retoris ("who helps us stay healthy? who grows our food?") yang jawabannya langsung mengarah ke kosakata TP12. Siswa merasakan kebutuhan kata "doctor" dan "farmer" sebelum kata-kata itu diajarkan.',
          darurat: 'Jika kelas masih gaduh setelah chant selesai: tepuk satu kali keras, ucap "Freeze — sit down — listen." Lanjut ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation — Family dan Body Parts
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tanya kelas dengan ritme cepat.

UCAP: "Family — who is in your family?"
→ Kelas menyebut: "Mother! Father!"
UCAP: "In English — ibu?"
→ Kelas: "Mother!"
UCAP: "Ayah?"
→ Kelas: "Father!"

UCAP: "Good. Now — body parts. Doctors work with the body. Let's remember."
UCAP: "What are these?" [tunjuk mata]
→ Kelas: "Eyes!"
UCAP: "These?" [tunjuk tangan]
→ Kelas: "Hands!"
UCAP: "And these?" [tunjuk kaki]
→ Kelas: "Feet!"

UCAP: "A doctor uses their eyes — to look at patients."
UCAP: "A doctor uses their hands — to help and heal."
UCAP: "That's a doctor's job. Today — we learn more."`,
          bantuan: 'Jika kelas tidak merespons nama anggota tubuh: tunjuk bagian tubuh sendiri dan tunggu kelas menjawab spontan — 3 detik per item cukup, jangan beri terlalu banyak waktu.',
          cue    : 'Koneksi "doctor uses eyes and hands" menghubungkan body parts Fase A dengan profesi TP12 secara bermakna — bukan sekadar reactivation terpisah. Ini jembatan kontekstual.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 40,

      langkah: [

        // L3 — Introduksi: Doctor dan Farmer
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo, siswa hanya mendengar dan melihat.

AKSI: Tunjukkan gambar dokter (di klinik atau rumah sakit).

UCAP: "Look at this person." [tunjuk gambar dokter]
UCAP: "She is a — doctor. Doc-tor." [ucap perlahan]
→ Jeda 3 detik.
UCAP: "A doctor helps sick people. She works at a hospital or a clinic."
UCAP: "She uses her hands and her eyes to help patients."

AKSI: Tunjukkan gambar petani (di sawah atau ladang).

UCAP: "And this person." [tunjuk gambar petani]
UCAP: "She is a — farmer. Far-mer." [ucap perlahan]
→ Jeda 3 detik.
UCAP: "A farmer grows food. She works on a farm or in the fields."
UCAP: "She uses her hands to plant rice and vegetables."

AKSI: Tunjuk kedua gambar secara bergantian.
UCAP: "Doctor — she helps sick people. Farmer — she grows our food."
UCAP: "Both are important. Both help our community."

🗣 TOGETHER
UCAP: "Say it — she is a doctor."
→ Kelas: "She is a doctor!"
UCAP: "She is a farmer."
→ Kelas: "She is a farmer!"`,
          bantuan: 'Jika siswa bingung antara "doctor" dan "farmer": tunjuk gambar dan ucap kontras singkat — "Doctor — hospital. Farmer — sawah." Dua kata per profesi cukup sebagai anchor.',
          cue    : 'Kedua profesi ini terhubung ke Kluster C — dokter ke kesehatan (TP11), petani ke makanan sehat (TP11). Sebutkan koneksi ini jika ada kesempatan: "Remember — we eat vegetables because they are healthy. The farmer grows those vegetables."',
          darurat: null,
          energi : '🔵',
        },

        // L4 — Introduksi: She Works At…
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — let's talk about where they work."
UCAP: "The doctor — she works at a hospital."
→ Tulis di papan: She works at a hospital.
→ Jeda 3 detik. Tunjuk "She" lalu tunjuk gambar dokter.

UCAP: "'She' — artinya dia perempuan. One person. She works."
UCAP: "Not 'They work' — that's many people. 'She works' — one person."

AKSI: Tambahkan contoh kedua:
UCAP: "The farmer — she works on a farm."
→ Tulis: She works on a farm.

UCAP: "And your mother — where does she work?"
→ Tunjuk 2–3 siswa. Terima jawaban dalam Bahasa apapun.
→ Bantu framing: "So — 'She works at [tempat].'"

🗣 TOGETHER
UCAP: "Say it with me — 'The doctor. She works at a hospital.'"
→ Kelas mengulang 2 kali.
UCAP: "'The farmer. She works on a farm.'"
→ Kelas mengulang.`,
          bantuan: 'Jika siswa mengucapkan "She work" tanpa -s: jangan koreksi secara keras. Cukup model kalimat yang benar dan lanjut. Ini TP pertama third-person singular — momen fasih akan datang.',
          cue    : '"She" sebagai third-person singular adalah kosakata grammatikal baru. Tunjuk eksplisit setiap kali "She works" diucapkan — sama seperti "They" di TP09. Perbedaan "She works" vs "They work" cukup ditegaskan sekali, tidak perlu berulang.',
          darurat: null,
          energi : '🔵',
        },

        // L5 — Drill — Profesi dan Tempat Kerja
        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER

AKSI: Tunjuk gambar profesi satu per satu. Kelas ucapkan kalimat penuh.

AKSI: Tunjuk gambar dokter.
UCAP: "Doctor — where does she work?"
→ Kelas: "She works at a hospital!"

AKSI: Tunjuk gambar petani.
UCAP: "Farmer — where does she work?"
→ Kelas: "She works on a farm!"

AKSI: Tambahkan dua profesi familiar lain secara lisan:
UCAP: "Teacher — where does she work?"
→ Kelas: "She works at a school!"
UCAP: "Your mother — maybe she works at — ?" [biarkan beberapa siswa menyebut tempat kerja ibu mereka]

AKSI: Balik arah — sebut tempat kerja, kelas sebut profesinya:
UCAP: "At a hospital — what job?"
→ Kelas: "Doctor!"
UCAP: "On a farm — what job?"
→ Kelas: "Farmer!"
UCAP: "At a school — what job?"
→ Kelas: "Teacher!"

AKSI: Tunjuk 2–3 siswa individual:
UCAP: "[nama] — where does a farmer work?"
→ Jawaban: "She works on a farm!"`,
          diferensiasi: {
            perluSupport: 'cukup menyebut nama profesi atau tempat — "hospital" atau "doctor" — tanpa kalimat penuh.',
            sudahBisa   : 'minta kalimat penuh + satu detail — "She works at a hospital. She helps sick people."',
          },
          bantuan: 'Jika siswa diam lebih dari 5 detik: tunjuk gambar yang relevan dan ucap awal kalimat — "She works at a..." — tunggu siswa melengkapi.',
          cue    : 'Bagian balik arah ("At a hospital — what job?") lebih penting dari bagian searah. Di sana siswa membuktikan pemahaman hubungan profesi-tempat kerja, bukan hafalan pasangan kata.',
          darurat: null,
          energi : '🟠',
        },

        // L6 — Modeling Kalimat Deskripsi Profesi Lengkap
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pelan suara. Tunggu 2 detik sebelum mulai.

👂 LISTEN FIRST — guru demo dulu.

UCAP: "Now — let's describe a person's job completely. Listen."

UCAP: "Her name is Ibu Sari."
→ Tulis di papan: Her name is Ibu Sari.
UCAP: "She is a doctor."
→ Tulis: She is a doctor.
UCAP: "She works at a hospital."
→ Tulis: She works at a hospital.
UCAP: "She helps sick people."
→ Tulis: She helps sick people.
UCAP: "She uses her hands and her eyes."
→ Tulis: She uses her hands and her eyes.
UCAP: "She has kind eyes and strong hands."
→ Tulis: She has kind eyes and strong hands.
UCAP: "Her job is important because she keeps us healthy."
→ Tulis: Her job is important because she keeps us healthy.

🗣 TOGETHER
AKSI: Tunjuk kalimat di papan satu per satu. Kelas membaca bersama guru.
→ Putaran pertama: guru tunjuk dan pimpin.
→ Putaran kedua: guru tunjuk saja — kelas baca sendiri.

UCAP: "Good. Now — you will write about one person's job."`,
          bantuan: 'Jika kelas membaca tidak sinkron di putaran kedua: biarkan. Familiarisasi dengan tujuh kalimat deskripsi lebih penting dari sinkronisasi.',
          cue    : 'Kalimat terakhir ("Her job is important because she keeps us healthy") mengintegrasikan "because" dari TP11. Tunjuk eksplisit: "\'Because\' — remember that word? From last time. Same word, new context." Ini memperkuat rantai Kluster C → D.',
          darurat: null,
          energi : '🔵',
        },

        // L7 — Pair Practice — Deskripsikan Satu Profesi [FLEX]
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelah mereka.

UCAP: "Describe one person's job to your partner. Use the structure on the board."
UCAP: "It can be a doctor, a farmer, a teacher — or anyone you know."

AKSI: Demo singkat dengan satu siswa sukarelawan:
UCAP: "[nama] — describe a farmer. Start with: 'She is a farmer.'"
→ Siswa: "She is a farmer. She works on a farm. She grows rice."
UCAP: "Good — can you add 'because'?"
→ Siswa: "Her job is important because she grows our food."
UCAP: "Perfect. Now — your turn with your partner."

AKSI: Beri waktu 4 menit — masing-masing 2 menit per arah. Circulate.`,
          diferensiasi: {
            perluSupport: 'cukup dua kalimat — "She is a [profesi]. She works at [tempat]."',
            sudahBisa   : 'tambahkan kalimat "because" — "Her job is important because ___."',
          },
          bantuan: 'Jika satu pasang tidak bisa memulai: tunjuk scaffold di papan, ucap kalimat pertama untuk mereka — "She is a..." — tunggu mereka melengkapi.',
          cue    : null,
          darurat: '[FLEX — lewati jika waktu tersisa < 18 menit atau energi kelas di bawah 🟡] Jika pair practice gaduh dalam 1 menit: hentikan. Ucap "Okay — take your pencil. Let\'s write." Lanjut ke L8 langsung.',
          energi : '🟡',
        },

        // L8 — Writing Individual — Profesi yang Saya Kagumi
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L6 (L7 dilewati) — ucap: "Okay. Take your pencil. Let's write." Jeda 3 detik. Bagikan lembar kerja.
AKSI: Bagikan lembar kerja (1 per siswa). Scaffold di papan dari L6 tetap ada.

Lembar kerja berisi template:

  A COMMUNITY HELPER I ADMIRE

  Her / His name is _________________________.

  She / He is a _________________________.

  She / He works at _________________________.

  She / He helps _________________________.

  She / He uses her / his _________________________.

  Her / His job is important because _________________________.

UCAP: "Write about one person. A real person — your mother, your doctor, anyone you know."
UCAP: "Or write about a job you think is important."

👂 LISTEN FIRST — guru demo mengisi satu template di papan:
UCAP: "Watch me. Her name is Ibu Ani. She is a farmer. She works on a farm. She grows rice for our family." [tulis]
UCAP: "And — 'She uses her...' For a farmer: 'She uses her hands and her feet.'" [tulis di bawah demo]
UCAP: "Now — your turn."

AKSI: Circulate. Bergerak ke meja siswa — jangan berdiri di depan.`,
          diferensiasi: {
            perluSupport: 'cukup isi empat baris pertama (nama, profesi, tempat kerja, helps). Baris "uses" dan "because" opsional.',
            sudahBisa   : 'setelah template selesai, tambah satu kalimat bebas — misalnya "I want to be a [profesi] when I grow up because ___."',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai. Template menggunakan "Her / His" dan "She / He" — jika siswa bingung, arahkan: "She = perempuan. He = laki-laki. Choose based on your person." Jangan masuk ke penjelasan panjang.',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai: minta siswa hanya mengisi tiga baris pertama (nama, profesi, tempat kerja). Langsung ke L10 tanpa melalui L9.',
          energi : '🔵',
        },

        // L9 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil tulisan siswa. Pilih 2 hasil — satu yang menggunakan "because" dengan alasan yang kuat, satu yang memilih profesi yang tidak umum.

UCAP: "Good. Let's hear from two friends."
→ Minta 2 siswa membacakan deskripsi profesi mereka.
→ Kelas mendengarkan.

UCAP (setelah tiap siswa membacakan): "What job did they write about?"
→ Kelas menjawab nama profesi.
UCAP: "Why is that job important — what was the reason?"
→ Kelas menjawab "because ___."

UCAP: "Say the 'because' sentence together."
→ Kelas mengulang kalimat "because" yang baru didengar.`,
          bantuan: 'Jika siswa yang diminta membaca menolak: ucap "That\'s okay" dan tunjuk siswa lain.',
          cue    : 'Pertanyaan "why is that job important?" memaksa kelas mendengarkan untuk mencari kalimat "because." Pilih siswa yang berbeda dari yang sudah menjawab di L5.',
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
UCAP: "How do we say 'dokter' in English?"
→ Kelas: "Doctor!"
UCAP: "And 'petani'?"
→ Kelas: "Farmer!"
UCAP: "How do we say 'dia bekerja di'?"
→ Kelas: "She works at!"

UCAP: "Give me two sentences about a doctor — use 'She works' and 'because.'"
→ Satu siswa atau kelas: "She works at a hospital. Her job is important because she keeps us healthy."

AKSI: Hapus papan satu bagian per satu. Kelas ucapkan yang dihapus.
Urutan hapus: because she keeps us healthy → She works at a hospital → She is a doctor → doctor → farmer`,
          bantuan: null,
          cue    : 'Hapus kalimat "because" sebelum kalimat deskripsi — ini memperkuat bahwa "because" adalah bagian dari deskripsi yang kaya, bukan sekadar kosakata tambahan.',
          darurat: null,
          energi : '🟡',
        },

        // L11 — Closure Emosional + Teaser TP13
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan.

UCAP: "Before we finish — one question."
UCAP: "Who is one person in your community that helps you — or your family?"
→ Tunjuk 1–2 siswa yang mau berbagi. Jawaban dalam Bahasa apapun diterima.
→ Bantu framing singkat jika perlu: "So — 'She is a [profesi]. She helps [siapa].'"

→ Jeda 3 detik.

UCAP: "Every community needs helpers. Doctors. Farmers. Teachers. And many more."
UCAP: "Now you can talk about them in English."

UCAP: "Next time — we talk about food and culture. The food we love. The food that makes us who we are."
[Teaser TP13 — Food, Culture, and Choices]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : 'Pertanyaan "who is one person in your community that helps you?" bersifat personal — berbeda dari pertanyaan tentang profesi secara umum. Ini membuat closure terasa nyata dan terhubung ke kehidupan siswa di luar kelas.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B12;
