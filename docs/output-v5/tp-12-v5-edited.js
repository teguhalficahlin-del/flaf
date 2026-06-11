/**
 * =============================================================
 * FLAF — TP 12 (Body Parts)
 * File: tp-12-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp12-v2.txt
 * Generated: 2026-05-25
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_12 = {

  id       : 'tp-12',
  pdf_ref  : 'Modul_Ajar_V3_TP12_Body_Parts.docx',
  nomor    : 12,
  kelas    : 2,
  nama     : 'Body Parts',
  tema     : 'Tubuh dan Kesehatan',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat menyebut nama anggota tubuh utama (head, eyes, ears, nose, mouth, hands, legs, feet) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan fungsi anggota tubuh menggunakan "I use my ... to ...".',
    'Peserta didik dapat merespons instruksi "touch your ..." dengan tindakan yang tepat.',
  ],
  vocab    : ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'feet', 'touch', 'I use my', 'to see', 'to hear'],
  persiapan: ['Kartu anggota tubuh bergambar 8 bagian tubuh'],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp12-ears.png',  label: 'Ears' },
    { file: 'tp12-eyes.png',  label: 'Eyes' },
    { file: 'tp12-feet.png',  label: 'Feet' },
    { file: 'tp12-hands.png', label: 'Hands' },
    { file: 'tp12-head.png',  label: 'Head' },
    { file: 'tp12-legs.png',  label: 'Legs' },
    { file: 'tp12-mouth.png', label: 'Mouth' },
    { file: 'tp12-nose.png',  label: 'Nose' },
  ],

  checklist: [
    '8 kartu printable tersedia sebelum kelas masuk',
    'Papan tulis: I use my ___. To ___ sudah tertulis sebelum kelas masuk',
    'Kartu bernomor urut di belakang — tempel sesuai gelombang',
    'Layar 0 dilakukan sebelum kelas resmi dimulai',
    'Jika kelas belum fokus di L0: ulangi "Are you ready?" sambil berdiri diam',
    'Lagu L1 diperlakukan sebagai energizer — tidak berhenti koreksi lafal',
    'Putaran lagu kedua lebih cepat dari putaran pertama',
    'Tepuk 1 kali untuk freeze sebelum L2 reset',
    'Jeda 3 detik setelah "Stop. Hands down." di L2',
    'Gestur berbeda: eyes = dua jari ke mata / ears = telapak sentuh telinga — wajib konsisten sepanjang sesi',
    'Guru belum minta kelas produksi di Layar 3',
    'Contrast drill eyes/ears dilakukan di Layar 4',
    'Reactivation gelombang 1 dilakukan sebelum gelombang 2 masuk (15–20 detik)',
    'Contrast drill legs/feet dilakukan di Layar 5 dengan anchor "up here / down here"',
    'Fase A–B–C Layar 6 dilakukan berurutan: lambat → medium → cepat acak',
    'Kartu dilepas dari papan sebelum TPR di Layar 7',
    'Putaran acak L7 maksimal 5 cue — legs dan feet tidak berurutan',
    'Guru berhenti modeling gestur pada putaran acak L7 untuk cek retrieval mandiri',
    'Jika ada siswa tidak bisa menyentuh di L7: "Point if you can\'t touch" — tunjuk saja diterima',
    'Kartu eyes–ears–nose–mouth–hands ditempel kembali sebelum L8',
    'Tunjuk papan "I use my ___. To ___." setiap kali modeling di L8',
    'Jeda 1 detik antara "I use my …" dan "to …" dilakukan saat modeling L8',
    'Lima contoh kalimat dimodelkan di L8 termasuk "I use my hands to write"',
    'Choral frame penuh dilakukan sebelum fill-in-the-blank di Layar 9',
    'Demo partner dilakukan sebelum partner practice',
    'Instruksi listener: "repeat the sentence" diucapkan sebelum partner practice',
    '"Two cards each turn" disampaikan lewat gestur — bukan instruksi verbal',
    'Jika waktu ≤10 menit saat L10: skip ke Layar 11 langsung',
    'Partner practice L10 dibatasi 5 kartu: eyes, ears, nose, mouth, hands',
    'Checkpoint switch dilakukan di tengah partner practice',
    'Putaran 2 Layar 11 pakai discourse frame — bukan nama kartu saja',
    'Retrieval mikro dilakukan sebelum closing',
    'Exit ticket: eyes + ears, 2 kartu pasangan contrast, 2 kalimat, 45–60 detik',
    'Setiap siswa sudah produksi minimal 1 kalimat "I use my … to …"',
  ],

  energi_map: [
    'L0 🔵',
    'L1 🔴',
    'L2 ⚪',
    'L3 🟡',
    'L4 🟠',
    'L5 🟡',
    'L6 🟠',
    'L7 🔴',
    'L8 ⚪ → 🟡',
    'L9 🟠',
    'L10 🔴',
    'L11 ⚪ → 🟡',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L1 Lagu: energizer bukan vocab source — jangan berhenti koreksi lafal',
      'L3 Contrast: eyes vs ears wajib — gestur harus berbeda konsisten sepanjang sesi',
      'L5 Reactivation: contrast legs/feet wajib — anchor "up here/down here"',
      'L7 TPR: guru tidak ikut di putaran acak — fokus observasi siapa yang tertukar',
      'L10 DARURAT: jika waktu ≤10 menit, skip partner practice — langsung ke L11',
    ],
    autonomy: [
      'Gestur eyes dan ears harus berbeda jelas dan konsisten di setiap layar',
      'L8 Reset wajib — jangan langsung masuk modeling "I use my" setelah TPR',
      'Jika kelas mulai gestur tanpa kata: ingatkan "say it and do it" dengan model',
      'Jika waktu mepet, L10 partner practice cukup 2 menit',
      'Siswa yang tidak bisa menyentuh: terima "Point if you can\'t touch" sebagai partisipasi penuh',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `"Good morning, everyone! How are you today?" Tunggu respons kelas. "I'm fine, thank you! Are you ready? Let's start."`,
    bantuan: null,
    cue    : 'Layar ini pendek dan wajib. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.',
    darurat: null,
    energi : '🔵',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L1 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berdiri tengah kelas. Tidak ada kartu dulu. UCAP: "Before we start — let's sing!" → Guru nyanyikan Head Shoulders Knees and Toes sambil sentuh bagian tubuh. → Putaran 1: lambat — guru besar, kelas ikut. → Putaran 2: lebih cepat — kelas ikut penuh. UCAP setelah lagu: "Good! Sit down."`,
          bantuan: null,
          cue    : 'Lagu ini hook energi dan exposure awal — bukan LISTEN FIRST. Guru tidak berhenti untuk koreksi lafal. Jangan berhenti di kata shoulders/knees/toes — treat lagu sebagai energizer, bukan vocab source. Jika kelas belum sinkron di putaran 1: lanjut saja, putaran 2 lebih kuat.',
          darurat: null,
          energi : '🔴',
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
          teks   : `AKSI: Tepuk 1 kali, kelas freeze.
UCAP: "Stop. Hands down. Look at me."
AKSI: Jeda 3 detik, guru berdiri diam.
UCAP: "Good. Now — listen."
AKSI: Sentuh kepala sendiri, ucap pelan.
AKSI: Sentuh mata.
AKSI: Sentuh telinga.
AKSI: Sentuh hidung.
UCAP: "These are body parts. Say it with me — body parts."
→ Kelas: "Body parts."`,
          bantuan: null,
          cue    : 'Layar ini menurunkan energi setelah lagu sebelum LISTEN FIRST masuk. Empat kata diucapkan guru saja — kelas belum diminta produksi. Gestur besar dan lambat.',
          darurat: null,
          energi : '⚪',
        },

        // L3 — INTI
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST
AKSI: Tempel 4 kartu satu per satu: head — eyes — ears — nose. Setiap kartu: tunjuk → sentuh bagian tubuh sendiri → ucap kata. Satu detik jeda, lanjut.
UCAP: "Listen. My turn."
AKSI: Sentuh kepala.
UCAP: "Head."
AKSI: Tunjuk kedua mata dengan dua jari.
UCAP: "Eyes."
AKSI: Sentuh kedua telinga dengan telapak.
UCAP: "Ears."
AKSI: Sentuh hidung dengan satu jari.
UCAP: "Nose."
AKSI: Jeda sebentar.
UCAP: "One more time."
AKSI: Ulang sekali.`,
          bantuan: null,
          cue    : 'Gestur eyes dan ears harus berbeda jelas — eyes: dua jari tunjuk ke mata / ears: telapak sentuh telinga. Ini anchor contrast drill berikutnya. Guru belum minta kelas produksi di layar ini.',
          darurat: null,
          energi : '🟡',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Now together. I point — you say and touch." → Tunjuk head: kelas ucap "Head!" + sentuh kepala → Tunjuk eyes: "Eyes!" + dua jari tunjuk ke mata → Tunjuk ears: "Ears!" + telapak sentuh telinga → Tunjuk nose: "Nose!" + sentuh hidung AKSI: Ulangi sekali lagi, acak 2 kartu. Contrast drill — langsung setelah putaran acak (15 detik): UCAP: "Watch."
AKSI: Tunjuk kartu eyes.
UCAP: "Eyes — I see with these."
AKSI: Dua jari ke mata, buka tangan ke depan.
AKSI: Tunjuk kartu ears.
UCAP: "Ears — I hear with these."
AKSI: Telapak sentuh telinga, gestur tangan melengkung.
UCAP: "Ready? Which one?"
UCAP: "I hear — touch it!"
AKSI: Kelas sentuh telinga.
UCAP: "I see — touch it!"
AKSI: Kelas sentuh mata.
AKSI: Ulangi 2 putaran, cepat.`,
          bantuan: 'Jika kelas tertukar eyes/ears: guru tunjuk sendiri dulu — "Watch me. Ears." [sentuh telinga] — lalu ulangi cue.',
          cue    : 'Contrast drill wajib — eyes dan ears adalah pasangan paling rawan konfusi di gelombang 1. Gestur harus konsisten di setiap layar sesudah ini.',
          darurat: null,
          energi : '🟠',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI — Reactivation (15–20 detik): "Quick check." → Tunjuk cepat 4 kartu gelombang 1 berurutan — kelas ucap + sentuh. → Tidak dikoreksi. Tidak diulang. Langsung lanjut. 👂 LISTEN FIRST Gelombang 2 AKSI: Tempel 4 kartu berikutnya: mouth — hands — legs — feet Setiap kartu: tunjuk → sentuh/gestur → ucap kata. "Listen. My turn." → AKSI: Sentuh mulut.
UCAP: "Mouth." → AKSI: Angkat kedua tangan, buka telapak.
UCAP: "Hands." → AKSI: Tepuk paha dua kali.
UCAP: "Legs." → AKSI: Tunjuk ke bawah, angkat satu kaki.
UCAP: "Feet." "One more time." → ulang sekali. Contrast drill — langsung setelah LISTEN FIRST selesai (15 detik): UCAP: "Watch."
AKSI: Tepuk paha.
UCAP: "Legs."
UCAP: "Up here."
AKSI: Tunjuk kaki.
UCAP: "Feet."
UCAP: "Down here."
UCAP: "Ready?"
UCAP: "Up here — touch it!"
AKSI: Kelas tepuk paha.
UCAP: "Down here — touch it!"
AKSI: Kelas tunjuk kaki.
AKSI: Ulangi 2 putaran, cepat.`,
          bantuan: null,
          cue    : 'Reactivation gelombang 1 wajib — 15–20 detik, tidak dikoreksi. Contrast drill legs/feet wajib dilakukan di sini. Anchor spatial "up here / down here" — pakai kata ini, bukan hanya nama vocab.',
          darurat: null,
          energi : '🟡',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER Fase A — Gelombang 2 saja, lambat: "Together." → Tunjuk mouth → hands → legs → feet. → Kelas ucap + gestur. Lambat, tidak terburu. Fase B — Campur 8 kartu, medium: "Now — all together." → Tunjuk semua 8 kartu berurutan — medium speed. → Kelas ucap + gestur. Fase C — 4 kartu acak, cepat: "Ready? Fast — but clear." → Pilih 4 kartu acak — tunjuk cepat. → Tahan 1 detik sebelum menunjuk kartu berikutnya.`,
          bantuan: 'Jika kelas mulai telat atau gestur tidak sinkron: kurangi tempo, ulangi 2 kartu, lanjut.',
          cue    : 'Gestur wajib ikut sepanjang seluruh fase. Jika ada siswa yang hanya bicara tanpa gestur: guru model ulang sambil jalan melewati mereka — tidak berhenti kelas.',
          darurat: null,
          energi : '🟠',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru lepas kartu dari papan — simpan. Siswa tidak pegang apa-apa. UCAP: "Now — no cards. Just me and you." → "Touch your head!" [guru sentuh kepala sendiri] → "Touch your nose!" [guru sentuh hidung] → "Touch your mouth!" [guru sentuh mulut] → "Touch your hands!" [guru angkat tangan] → "Touch your ears!" [guru sentuh telinga] → "Touch your eyes!" [guru tunjuk mata] → "Touch your legs!" [guru tepuk paha] → "Touch your feet!" [guru tunjuk kaki] AKSI: Putaran acak — maksimal 5 cue. Guru tidak ikut gestur — kelas yang aksi. UCAP: "My turn to watch. You do it." → Pilih 5 cue acak. Jangan letakkan legs dan feet berurutan. → Setelah 5 cue: langsung stop. UCAP: "Stop. Good."`,
          bantuan: [
            'Jika kelas tertukar legs/feet: guru berhenti, sentuh paha sendiri — "Legs — here." Sentuh kaki — "Feet — here." Lanjut.',
            'Jika ada siswa yang tidak bisa menyentuh: guru ucap "Point if you can\'t touch" — tunjuk saja, tidak harus sentuh.',
          ],
          cue    : 'Kartu sudah dilepas — retrieval dari memori, bukan dari kartu. Guru tidak ikut gestur di putaran acak — guru perlu melihat siapa yang tertukar. Putaran acak maksimal 5 cue, lalu langsung stop — jangan improvisasi lebih lama. Legs dan feet tidak boleh berurutan di putaran acak.',
          darurat: null,
          energi : '🔴',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk 1 kali, kelas freeze.
UCAP: "Stop. Hands down. Sit up."
AKSI: Jeda 3 detik.
UCAP: "Good. Now listen."
AKSI: Tempel kembali 4 kartu: eyes — ears — nose — mouth.
AKSI: Tunjuk papan — I use my ___. To ___.
UCAP: "Listen. My turn."
AKSI: Tunjuk kartu eyes.
UCAP: "I use my eyes —"
AKSI: Jeda 1 detik.
UCAP: "— to see."
AKSI: Dua jari ke mata, buka tangan ke depan.
AKSI: Tunjuk kartu ears.
UCAP: "I use my ears —"
AKSI: Jeda 1 detik.
UCAP: "— to hear."
AKSI: Sentuh telinga, gestur melengkung.
AKSI: Tunjuk kartu nose.
UCAP: "I use my nose —"
AKSI: Jeda 1 detik.
UCAP: "— to smell."
AKSI: Sentuh hidung, hirup napas pendek.
AKSI: Tunjuk kartu mouth.
UCAP: "I use my mouth —"
AKSI: Jeda 1 detik.
UCAP: "— to speak."
AKSI: Sentuh mulut, buka tangan ke depan.
AKSI: Tunjuk kartu hands.
UCAP: "I use my hands —"
AKSI: Jeda 1 detik.
UCAP: "— to write."
AKSI: Gestur menulis di udara.
UCAP: "One more time."
AKSI: Ulang kelima kalimat.`,
          bantuan: null,
          cue    : 'Tunjuk papan setiap kali ucapkan "I use my" dan "to ___." Jeda 1 detik antara "I use my …" dan "to …" — wajib, bantu siswa dengar dua bagian kalimat secara terpisah. Lima contoh termasuk hands — supaya domain fungsi tubuh terasa lebih luas dari sekadar wajah. Ucap natural — jangan diperlambat berlebihan. Guru tidak tanya kelas dulu di layar ini.',
          darurat: null,
          energi : '⚪ → 🟡',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER
UCAP: "Together now. Full sentence."
AKSI: Tunjuk papan: I use my ___. To ___.
→ Guru: "I use my eyes to see."
→ Kelas ulang penuh: "I use my eyes to see."
→ Guru: "I use my ears to hear."
→ Kelas ulang penuh: "I use my ears to hear."
AKSI: Jeda 2 detik.
AKSI: Tunjuk kartu nose.
UCAP: "I use my nose…"
→ Tunggu kelas: "…to smell!"
AKSI: Tunjuk kartu mouth.
UCAP: "I use my mouth…"
→ Kelas: "…to speak!"
AKSI: Tunjuk kartu hands.
UCAP: "I use my hands…"
→ Kelas: "…to write!"
UCAP: "Watch us."
AKSI: Guru tunjuk kartu eyes ke siswa.
UCAP: "I use my…"
→ Siswa: "…eyes to see!"
UCAP: "Good."
AKSI: Lakukan sekali lagi dengan kartu ears.
UCAP: "See? One card — one sentence. That's your job."
AKSI: Sebelum partner practice — ucapkan hal ini.
UCAP: "Partner voice — not shouting."
UCAP: "Partner A holds the card. Partner B makes the sentence."
UCAP: "Listener — repeat the sentence."
AKSI: Demo — siswa volunteer ulang kalimat.
AKSI: Tunjuk 2 kartu dengan gestur tangan, tidak diucapkan.
AKSI: Latih stop signal.
UCAP: "When I clap —"
AKSI: Tepuk 1 kali.
UCAP: "— stop."
AKSI: Latih 1x.
UCAP: "Go."`,
          bantuan: 'Jika kelas drop "I use my" dan hanya sebut nama fungsi: guru tunjuk papan — "I use my…" — tunggu 2 detik, lanjut choral jika tidak ada respons.',
          cue    : 'Choral frame penuh dulu sebelum fill-in. Demo partner wajib — satu siswa sukarela, dua kartu, guru yang pandu. Listener harus punya tugas — ulang kalimat partner. "Two cards each turn" disampaikan lewat gestur — bukan instruksi verbal tambahan.',
          darurat: null,
          energi : '🟠',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pasang kartu eyes, ears, nose, mouth, hands di papan — 5 kartu saja. UCAP: "Use these cards. Partner A — pick a card, make a sentence. Partner B — repeat it."
UCAP: "Clear sentence. Go." Checkpoint tengah (±90 detik): [Tepuk 1 kali — freeze] "Switch. Partner B picks the card now." [Tepuk 1 kali — lanjut]`,
          bantuan: 'Pasangan diam total: dekati, bisik — "Point to eyes. Say: I use my eyes to see." Tidak hentikan kelas.',
          diferensiasi: {
            needHelp: 'Cukup 2 kartu — eyes dan ears.',
            ready   : 'Pakai semua 8 kartu, tambah legs dan feet.',
          },
          cue    : 'Listener harus ulang kalimat — bukan hanya diam menonton. Guru tidak koreksi grammar saat jalan. Acceptance rule berlaku — fragment diterima, model ulang saat lewat. Saat circulate, sesekali model: "I use my nose to smell." — supaya retrieval tidak collapse ke hands/write terus.',
          darurat: 'Waktu ≤10 menit: skip ke Layar 11 — lewati partner practice, langsung choral body parts.',
          energi : '🔴',
        },

        // L11 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — freeze] UCAP: UCAP: "Stop. Look here."
AKSI: Jeda 2 detik. "Together — body parts." Putaran 1: tunjuk 8 kartu berurutan — lambat — kelas ucap nama + gestur. Putaran 2: tunjuk kartu eyes dan ears — kelas ucap dengan frame penuh: "I use my eyes to see!" → lanjut → "I use my ears to hear!" Cukup 2 kartu — tidak semua.`,
          bantuan: null,
          cue    : 'Putaran 2 pakai discourse frame — bukan nama kartu saja. Ini menjaga "I use my … to …" tetap hidup sebelum exit ticket. Tidak perlu semua 8 kartu — 2 contoh cukup.',
          darurat: null,
          energi : '⚪ → 🟡',
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
          teks   : `AKSI: Guru tunjuk 2 kartu ke kelas — eyes dan ears.
UCAP: "Last. Write two sentences."
AKSI: Jeda sebentar.
UCAP: "I use my .... To ...."
AKSI: Jeda sebentar.
UCAP: "Use these two cards."
AKSI: Tunjuk papan.
AKSI: Tunggu 45–60 detik.
UCAP: "Show me."`,
          bantuan: 'Terima: dua kalimat penuh, frasa parsial ("use eyes — see"), atau gambar dengan label. Tidak ada koreksi terbuka.',
          cue    : 'Exit ticket = 2 kartu pasangan contrast (eyes + ears), 2 kalimat, struktur "I use my … to …". Tidak diperluas.',
          darurat: null,
          energi : '🟡',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI — Retrieval mikro: "One more time — touch your eyes!" → Kelas sentuh mata + ucap "Eyes!" "Touch your ears!" → Kelas sentuh telinga + ucap "Ears!" AKSI: Tunjuk semua 8 kartu cepat — kelas ucap nama + gestur bersama. UCAP: "Today — body parts. I use my eyes to see. I use my ears to hear. Well done. See you next time."`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_12;
