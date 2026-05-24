/**
 * =============================================================
 * FLAF — TP 11 (Daily Routines)
 * File: tp-11-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp11-v2.txt
 * Generated: 2026-05-24
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_11 = {

  id       : 'tp-11',
  nomor    : 11,
  kelas    : 2,
  nama     : 'Daily Routines',
  tema     : 'Kehidupan Sehari-hari',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat menyebut kegiatan rutin harian (wake up, brush teeth, eat breakfast, go to school, study, sleep) dengan lafal yang benar.',
    'Peserta didik dapat mengungkapkan urutan kegiatan menggunakan "first, then, after that" dalam 3–4 kalimat.',
    'Peserta didik dapat menanyakan dan merespons "What do you do every day?" dengan kalimat rutin lengkap.',
  ],
  vocab    : ['wake up', 'brush teeth', 'eat breakfast', 'go to school', 'study', 'play', 'eat dinner', 'sleep', 'every day', 'first', 'then'],
  persiapan: ['Kartu rutinitas bergambar 8 kegiatan harian'],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp11-brush-teeth.png',   label: 'Brush Teeth' },
    { file: 'tp11-eat-breakfast.png', label: 'Eat Breakfast' },
    { file: 'tp11-eat-dinner.png',    label: 'Eat Dinner' },
    { file: 'tp11-go-to-school.png',  label: 'Go To School' },
    { file: 'tp11-play.png',          label: 'Play' },
    { file: 'tp11-sleep.png',         label: 'Sleep' },
    { file: 'tp11-study.png',         label: 'Study' },
    { file: 'tp11-wake-up.png',       label: 'Wake Up' },
  ],

  checklist: [
    '8 kartu printable tersedia sebelum kelas masuk',
    'Papan tulis: First, I ___. Then, I ___ ditulis sebelum kelas masuk',
    'Layar 0 dilakukan sebelum kelas resmi dimulai',
    'Jika kelas belum fokus di L0: ulangi "Are you ready?" sambil berdiri diam',
    'Jika siswa individual diam di L1: guru lanjut tanpa tunjuk — tidak dipaksa, tidak dikomentari',
    'Jika kelas diam total di L1: guru lanjut monolog + gestur, kelas ikut di akhir',
    'L2: frasa dua kata diucapkan natural — tidak dipenggal',
    'L2: gestur eat breakfast = nguap dulu + makan (bukan hanya makan)',
    'Reactivation gelombang 1 dilakukan sebelum gelombang 2 masuk (L4)',
    'L4: gestur eat dinner = capek dulu + makan — berbeda dari eat breakfast',
    'Contrast drill morning/night dilakukan langsung setelah LISTEN FIRST L4',
    'Fase C L5: "Fast — but clear" — stop setelah 4 kartu',
    'Reset L6 dilakukan — tidak diskip',
    'L6: kelas freeze + jeda 3 detik sebelum lanjut ke struktur',
    'L7: tunjuk papan setiap kali ucapkan "First" dan "Then"',
    'L7: dua pasang contoh diberikan — bukan satu pasang',
    'L8: choral frame penuh dulu sebelum fill-in-the-blank',
    'L8: tunjuk papan setiap kali kelas mulai drop "First/Then"',
    'Jika waktu ≤10 menit saat L9: skip ke L10 langsung',
    'L9: demo guru (sekuens 4 kartu + gerak tangan kanan) dilakukan sebelum demo partner',
    'L9: instruksi listener "point to the cards" diucapkan sebelum partner practice',
    'L9: "Not fast. In order." diucapkan sebelum partner practice dimulai',
    'Stop signal dilatih 1x sebelum "Go" (L9)',
    'Checkpoint switch dilakukan di ±90 detik (L9)',
    'Guru tidak koreksi grammar saat practice berlangsung (L9)',
    'L10 putaran 2: pakai discourse frame First/Then — bukan nama frasa saja',
    'Guru model jawaban dilakukan sebelum survei "before sleep" (L11)',
    'Survei oral L11: maksimal 2 pertanyaan — tidak diperluas',
    'Exit ticket: eat breakfast + go to school, 2 kalimat, 45–60 detik (L12)',
    'Terima kalimat penuh, frasa saja, atau gambar urutan di exit ticket (L12)',
    'Retrieval mikro dilakukan sebelum closing (L13)',
    'Setiap siswa sudah produksi minimal 1 pasang kalimat sepanjang sesi',
  ],

  energi_map: [
    'L0 🔵',
    'L1 🟠',
    'L2 🟡',
    'L3 🟠',
    'L4 🟡',
    'L5 🟠',
    'L6 ⚪',
    'L7 🟡',
    'L8 🟠',
    'L9 🔴',
    'L10 ⚪ → 🟡',
    'L11 🟠',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L4 Contrast drill morning/night: wajib dilakukan — jangan skip',
      'L6 Reset: wajib — kelas belum tenang = L7 gagal',
      'L9: instruksi listener "point to the cards" wajib diucapkan sebelum mulai',
      'L9: "Not fast. In order." diucapkan sebelum partner practice dimulai',
    ],
    autonomy: [
      'Gestur eat breakfast ≠ eat dinner harus berbeda konsisten sepanjang sesi',
      '"Fast — but clear" — clarity lebih penting dari speed untuk frasa dua kata',
      'L1: siswa individual yang diam — lanjut tanpa tunjuk, tidak dikomentari',
      'Jika waktu ≤10 menit di L9: skip ke L10 — langsung choral rutinitas',
      'L10 putaran 2: pakai discourse frame First/Then — bukan nama frasa saja',
      'Jika waktu mepet, L11 survei cukup 1 pertanyaan + model guru',
    ],
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L0 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] UCAP: "I'm fine, thank you! Are you ready? Let's start." ulangi "Are you ready?" sekali lagi sambil berdiri diam.`,
          bantuan: null,
          cue    : 'Layar ini pendek dan wajib. Jika kelas belum fokus:',
          darurat: null,
          energi : '🔵',
        },

        // L1 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berdiri tengah kelas. Tidak ada kartu dulu. UCAP: "Before school today — what did you do?" [Tunggu 2–3 respons bebas — boleh Bahasa Indonesia] UCAP: "Me too — listen." → Guru peragakan gerakan sambil ucapkan: "I wake up —" [gestur bangun tidur] "I brush my teeth —" [gestur sikat gigi] "I eat breakfast —" [gestur sendok ke mulut] "Then — I go to school!" [gestur jalan] "That's my morning. Say it with me — wake up!" → Kelas: "Wake up!" [gestur bersama] tunjuk — tidak dipaksa, tidak dikomentari. saat ditanya: guru lanjut monolog + gestur, kelas ikut di akhir.`,
          bantuan: 'Jika ada siswa individual yang diam: guru lanjut tanpa',
          cue    : 'Gestur dulu, kata belakangan. Jika kelas diam total',
          darurat: null,
          energi : '🟠',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,  // TODO: verifikasi

      langkah: [

        // L2 — INTI
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST AKSI: Tempel 4 kartu satu per satu: wake up — brush teeth — eat breakfast — go to school Setiap kartu: tunjuk → gestur → ucap frasa. Satu detik jeda, lanjut. UCAP setelah 4 kartu terpasang: "Listen. My turn." → "Wake up." [gestur bangun, tangan tepuk pipi] → "Brush teeth." [gestur sikat gigi] → "Eat breakfast." [gestur nguap + sendok ke mulut — pagi] → "Go to school." [gestur jalan, tangan ayun] "Brush teeth" bukan "brush — teeth." Gestur harus besar dan konsisten. Eat breakfast = gestur nguap dulu, baru makan — anchor pembeda dengan eat dinner.`,
          bantuan: null,
          cue    : 'Frasa dua kata — ucapkan natural, tidak dipenggal.',
          darurat: null,
          energi : '🟡',
        },

        // L3 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Now together. I point — you say and do the action." → Tunjuk wake up: kelas ucap "Wake up!" + gestur → Tunjuk brush teeth: "Brush teeth!" + gestur → Tunjuk eat breakfast: "Eat breakfast!" + gestur nguap + makan → Tunjuk go to school: "Go to school!" + gestur jalan AKSI: Ulangi sekali lagi, acak 2 kartu. ulangi kartu itu sekali. gestur — kelas ikut. Jangan lepas gestur meski sudah putaran kedua.`,
          bantuan: 'Jika kelas hanya sebagian ikut: "Everybody. Together." —',
          cue    : 'Gestur wajib ikut sepanjang putaran ini. Guru terus',
          darurat: null,
          energi : '🟠',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI — Reactivation (15–20 detik): "Quick check." → Tunjuk cepat 4 kartu gelombang 1 berurutan — kelas ucap + gestur. → Tidak dikoreksi. Tidak diulang. Langsung lanjut. 👂 LISTEN FIRST Gelombang 2 AKSI: Tempel 4 kartu berikutnya: study — play — eat dinner — sleep Setiap kartu: tunjuk → gestur → ucap frasa. "Study." [gestur buka buku] "Play." [gestur lempar bola] "Eat dinner." [gestur capek + sendok ke mulut — malam] "Sleep." [gestur tangan di pipi, mata tutup] UCAP setelah 4 kartu terpasang: "Listen. My turn." → ulang keempat frasa sekali. Contrast drill — langsung setelah LISTEN FIRST selesai (10 detik): "Morning?" → kelas: "Eat breakfast!" [gestur nguap + makan] "Night?" → kelas: "Eat dinner!" [gestur capek + makan] Ulangi 2 putaran — cepat. baru makan / dinner: capek dulu baru makan. Contrast drill wajib dilakukan di sini — jangan skip.`,
          bantuan: null,
          cue    : 'Dua gestur inti harus berbeda — breakfast: nguap dulu',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER Fase A — Gelombang 2 saja, lambat: "Together." → Tunjuk study → play → eat dinner → sleep. → Kelas ucap + gestur. Lambat, tidak terburu. Fase B — Campur 8 kartu, medium: "Now — all together." → Tunjuk semua 8 kartu berurutan — medium speed. → Kelas ucap + gestur. Fase C — 4 kartu acak, cepat: "Ready? Fast — but clear." → Pilih 4 kartu acak — tunjuk cepat. → Tahan 1 detik sebelum menunjuk kartu berikutnya. tempo, ulangi 2 kartu, lanjut. Untuk frasa dua kata, clarity lebih penting dari speed. Guru ayun ritme natural — jangan penggal suku kata.`,
          bantuan: 'Jika kelas mulai telat atau gestur tidak sinkron: kurangi',
          cue    : '"Fast — but clear" — bukan makin cepat makin bagus.',
          darurat: null,
          energi : '🟠',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — kelas freeze] UCAP: "Stop. Hands down. Look at me." [Jeda 3 detik — guru berdiri diam] "Sit up. Ready." Layar 7 gagal.`,
          bantuan: null,
          cue    : 'Wajib — jangan skip. Kelas yang belum tenang =',
          darurat: null,
          energi : '⚪',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST AKSI: Tunjuk papan — First, I ___. Then, I ___. "Listen. My turn." → Tunjuk kartu wake up: "First, I wake up." [gestur bangun] → Tunjuk kartu brush teeth: "Then, I brush my teeth." [gestur sikat gigi] [Jeda 2 detik] → Tunjuk kartu eat breakfast: "First, I eat breakfast." [gestur nguap + makan] → Tunjuk kartu go to school: "Then, I go to school." [gestur jalan] "Listen one more time." — ulangi dua pasang kalimat. Dua pasang contoh — bukan satu. Guru tidak tanya kelas dulu di layar ini.`,
          bantuan: null,
          cue    : 'Tunjuk papan setiap kali ucapkan "First" dan "Then."',
          darurat: null,
          energi : '🟡',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Together now. Full sentence." AKSI: Tunjuk papan: First, I ___. Then, I ___. → Guru: "First, I wake up." → Kelas ulang penuh: "First, I wake up." → Guru: "Then, I brush my teeth." → Kelas ulang penuh: "Then, I brush my teeth." [Jeda 2 detik] → Tunjuk kartu study: "First, I…" → Tunggu kelas: "…study!" → Tunjuk kartu play: "Then, I…" → Kelas: "…play!" UCAP: "Your turn. Two cards." → Tunjuk 2 kartu berurutan — kelas bentuk kalimat sendiri dengan "First" dan "Then." tunjuk papan — "First, I…" — tunggu 2 detik, lanjut choral jika tidak ada respons. Partner practice nanti butuh produksi frame utuh — bukan hanya nama kegiatan. Tunjuk papan setiap kali kelas mulai drop "First/Then."`,
          bantuan: 'Jika kelas drop connector dan hanya sebut nama frasa: guru',
          cue    : 'Choral frame penuh dulu sebelum fill-in-the-blank.',
          darurat: null,
          energi : '🟠',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `⚠ DARURAT — Waktu ≤10 menit: skip ke Layar 10 — lewati demo dan partner practice, langsung choral rutinitas. UCAP: "Watch me. My morning routine." → Guru tunjuk kartu satu per satu sambil gerak tangan ke kanan tiap langkah: "First, I wake up." [gerak tangan kanan] "Then, I brush my teeth." [gerak tangan kanan] "Then, I eat breakfast." [gerak tangan kanan] "Then, I go to school." [gerak tangan kanan] UCAP: "See? First — then — then — then." [gerak tangan ke kanan 4 langkah] Demo dengan 1 siswa sukarela: "You, you." — tunjuk satu siswa maju. "Tell me your morning. Use the cards. In order." Siswa tunjuk kartu dan cerita. Jika siswa beku: guru bisik — "First, I…" dan tunjuk kartu wake up. Kelas menonton. Sebelum partner practice — ucapkan 4 hal ini: "Partner voice — not shouting." "Partner A tells first. Partner B listens." "Listener — point to the cards." [demo: tunjuk kartu saat partner cerita] "Use 3 cards in order." [gerak tangan ke kanan 3 langkah] UCAP: "Not fast. In order. Go." Latih stop signal: "When I clap —" [tepuk 1 kali] "— stop." — latih 1x sebelum "Go." Checkpoint tengah (±90 detik): [Tepuk 1 kali — freeze] "Switch. Partner B tells now." [Tepuk 1 kali — lanjut] Say: First, I wake up." Tidak hentikan kelas. Diferensiasi (di sisi papan, tidak dibacakan): - Sudah bisa: cerita 5–6 kartu + "then" berulang - Perlu support: cukup 2 kartu — "First … Then …" cerita. Tanpa ini setengah kelas mental-off. Guru tidak koreksi grammar. Acceptance rule berlaku — fragment diterima, model ulang saat lewat.`,
          bantuan: 'Pasangan diam total: dekati, bisik — "Point to wake up.',
          cue    : 'Listener harus punya tugas — tunjuk kartu saat partner',
          darurat: null,
          energi : '🔴',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — freeze] UCAP: "Stop. Look here." [Jeda 2 detik] "Together — routine." Putaran 1: tunjuk 8 kartu berurutan — lambat — kelas ucap nama + gestur. Putaran 2: tunjuk kartu study dan play — kelas ucap dengan frame penuh: "First, I study!" → lanjut → "Then, I play!" Cukup 2 kartu — tidak semua. Ini menjaga "First/Then" tetap hidup sebelum closing. Tidak perlu semua 8 kartu — 2 contoh cukup.`,
          bantuan: null,
          cue    : 'Putaran 2 pakai discourse frame — bukan nama frasa saja.',
          darurat: null,
          energi : '⚪ → 🟡',
        },

        // L11 — INTI
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Quick question." → "What do you do first in the morning?" → Tunjuk kartu wake up: "Wake up? Raise your hand." → Tunjuk kartu eat breakfast: "Eat breakfast first? Raise your hand." → Guru model dulu: "Before sleep… I eat dinner." → "What do you do before sleep?" → Kelas respon — 2–3 respons, boleh satu kata. UCAP: "Interesting! Everyone has a routine." sebelum tanya kelas. Tidak diperluas.`,
          bantuan: null,
          cue    : 'Survei maksimal 2 pertanyaan. Guru model jawaban',
          darurat: null,
          energi : '🟠',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L12 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru tunjuk 2 kartu ke kelas — eat breakfast dan go to school. UCAP: "Last. Write two sentences." → "First, I ___. Then, I ___." → "Use these two cards." [tunjuk papan] [Tunggu 45–60 detik] "Show me." breakfast"), atau gambar dengan urutan 1–2. Urutan berbeda dari rutinitas "benar" tetap diterima — target adalah struktur, bukan akurasi rutinitas. Tidak ada koreksi terbuka. "First … Then …". Tidak diperluas.`,
          bantuan: 'Terima: dua kalimat penuh, frasa saja ("first eat',
          cue    : 'Exit ticket = 2 kartu adjacent, 2 kalimat, struktur',
          darurat: null,
          energi : '🟡',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI — Retrieval mikro: "One more time — what do you do first?" → Kelas: "Wake up!" [gestur bersama] AKSI: Tunjuk semua 8 kartu cepat — kelas ucap nama + gestur bersama. UCAP: "Today — daily routines. First… then… Well done. See you next time."`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_11;
