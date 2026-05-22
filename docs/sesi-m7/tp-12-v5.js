/**
 * =============================================================
 * FLAF — TP 12 (Body Parts)
 * File: tp-12-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp12-v2.txt
 * Generated: 2026-05-22
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_12 = {

  id       : 'tp-12',
  nomor    : 12,
  kelas    : 0,          // TODO: isi manual
  nama     : 'Body Parts',
  tema     : 'Tubuh dan Kesehatan',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat menyebut nama anggota tubuh utama (head, eyes, ears, nose, mouth, hands, legs, feet) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan fungsi anggota tubuh menggunakan "I use my ... to ...".',
    'Peserta didik dapat merespons instruksi "touch your ..." dengan tindakan yang tepat.',
  ],
  vocab    : ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'feet', 'touch', 'I use my', 'to see', 'to hear'],
  persiapan: [],         // TODO: isi manual
  media    : [],         // TODO: isi manual
  printables: [],        // TODO: isi manual

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

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L0 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] UCAP: "I'm fine, thank you! Are you ready? Let's start."`,
          bantuan: null,
          cue    : 'Layar ini pendek dan wajib. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.',
          darurat: null,
          energi : '🔵',
        },

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
          teks   : `[Tepuk 1 kali — kelas freeze] UCAP: "Stop. Hands down. Look at me." [Jeda 3 detik — guru berdiri diam] UCAP: "Good. Now — listen." → Guru sentuh kepala sendiri, ucap pelan: "Head." → Sentuh mata: "Eyes." → Sentuh telinga: "Ears." → Sentuh hidung: "Nose." UCAP: "These are body parts. Say it with me — body parts." → Kelas: "Body parts."`,
          bantuan: null,
          cue    : 'Layar ini menurunkan energi setelah lagu sebelum LISTEN FIRST masuk. Empat kata diucapkan guru saja — kelas belum diminta produksi. Gestur besar dan lambat.',
          darurat: null,
          energi : '⚪',
        },

        // L3 — INTI
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST AKSI: Tempel 4 kartu satu per satu: head — eyes — ears — nose Setiap kartu: tunjuk → sentuh bagian tubuh sendiri → ucap kata. Satu detik jeda, lanjut. UCAP setelah 4 kartu terpasang: "Listen. My turn." → "Head." [sentuh kepala] → "Eyes." [tunjuk kedua mata dengan dua jari] → "Ears." [sentuh kedua telinga dengan telapak] → "Nose." [sentuh hidung dengan satu jari] "One more time." → ulang sekali.`,
          bantuan: null,
          cue    : 'Gestur eyes dan ears harus berbeda jelas — eyes: dua jari tunjuk ke mata / ears: telapak sentuh telinga. Ini anchor contrast drill berikutnya. Guru belum minta kelas produksi di layar ini.',
          darurat: null,
          energi : '🟡',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Now together. I point — you say and touch." → Tunjuk head: kelas ucap "Head!" + sentuh kepala → Tunjuk eyes: "Eyes!" + dua jari tunjuk ke mata → Tunjuk ears: "Ears!" + telapak sentuh telinga → Tunjuk nose: "Nose!" + sentuh hidung AKSI: Ulangi sekali lagi, acak 2 kartu. Contrast drill — langsung setelah putaran acak (15 detik): UCAP: "Watch." → Guru tunjuk eyes: "Eyes — I see with these." [dua jari ke mata, buka tangan ke depan] → Guru tunjuk ears: "Ears — I hear with these." [telapak sentuh telinga, gestur tangan melengkung] "Ready? Which one?" → "I hear — touch it!" → kelas sentuh telinga → "I see — touch it!" → kelas sentuh mata → Ulangi 2 putaran, cepat.`,
          bantuan: 'Jika kelas tertukar eyes/ears: guru tunjuk sendiri dulu — "Watch me. Ears." [sentuh telinga] — lalu ulangi cue.',
          cue    : 'Contrast drill wajib — eyes dan ears adalah pasangan paling rawan konfusi di gelombang 1. Gestur harus konsisten di setiap layar sesudah ini.',
          darurat: null,
          energi : '🟠',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI — Reactivation (15–20 detik): "Quick check." → Tunjuk cepat 4 kartu gelombang 1 berurutan — kelas ucap + sentuh. → Tidak dikoreksi. Tidak diulang. Langsung lanjut. 👂 LISTEN FIRST Gelombang 2 AKSI: Tempel 4 kartu berikutnya: mouth — hands — legs — feet Setiap kartu: tunjuk → sentuh/gestur → ucap kata. "Listen. My turn." → "Mouth." [sentuh mulut] → "Hands." [angkat kedua tangan, buka telapak] → "Legs." [tepuk paha dua kali] → "Feet." [tunjuk ke bawah, angkat satu kaki] "One more time." → ulang sekali. Contrast drill — langsung setelah LISTEN FIRST selesai (15 detik): UCAP: "Watch." → "Legs." [tepuk paha] — "Up here." → "Feet." [tunjuk kaki] — "Down here." "Ready?" → "Up here — touch it!" → kelas tepuk paha → "Down here — touch it!" → kelas tunjuk kaki → Ulangi 2 putaran, cepat.`,
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
          teks   : `[Tepuk 1 kali — kelas freeze] UCAP: "Stop. Hands down. Sit up." [Jeda 3 detik] UCAP: "Good. Now listen." AKSI: Tempel kembali 4 kartu: eyes — ears — nose — mouth. Tunjuk papan — I use my ___. To ___. "Listen. My turn." → Tunjuk eyes: "I use my eyes —" [jeda 1 detik] "— to see." [dua jari ke mata, buka tangan ke depan] → Tunjuk ears: "I use my ears —" [jeda 1 detik] "— to hear." [sentuh telinga, gestur melengkung] → Tunjuk nose: "I use my nose —" [jeda 1 detik] "— to smell." [sentuh hidung, hirup napas pendek] → Tunjuk mouth: "I use my mouth —" [jeda 1 detik] "— to speak." [sentuh mulut, buka tangan ke depan] → Tunjuk hands: "I use my hands —" [jeda 1 detik] "— to write." [gestur menulis di udara] "One more time." → ulang kelima kalimat.`,
          bantuan: null,
          cue    : 'Tunjuk papan setiap kali ucapkan "I use my" dan "to ___." Jeda 1 detik antara "I use my …" dan "to …" — wajib, bantu siswa dengar dua bagian kalimat secara terpisah. Lima contoh termasuk hands — supaya domain fungsi tubuh terasa lebih luas dari sekadar wajah. Ucap natural — jangan diperlambat berlebihan. Guru tidak tanya kelas dulu di layar ini.',
          darurat: null,
          energi : '⚪ → 🟡',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Together now. Full sentence." Tunjuk papan: I use my ___. To ___. → Guru: "I use my eyes to see." → Kelas ulang penuh: "I use my eyes to see." → Guru: "I use my ears to hear." → Kelas ulang penuh: "I use my ears to hear." [Jeda 2 detik] → Tunjuk kartu nose: "I use my nose…" → Tunggu kelas: "…to smell!" → Tunjuk kartu mouth: "I use my mouth…" → Kelas: "…to speak!" → Tunjuk kartu hands: "I use my hands…" → Kelas: "…to write!" Demo dengan 1 siswa sukarela: "Watch us." → Guru tunjuk kartu eyes ke siswa: "I use my…" → Siswa: "…eyes to see!" → Guru: "Good." Lakukan sekali lagi dengan kartu ears. UCAP: "See? One card — one sentence. That's your job." Sebelum partner practice — ucapkan hal ini: "Partner voice — not shouting." "Partner A holds the card. Partner B makes the sentence." "Listener — repeat the sentence." [demo: siswa volunteer ulang kalimat] [Tunjuk 2 kartu dengan gestur tangan — tidak diucapkan] Latih stop signal: "When I clap —" [tepuk 1 kali] "— stop." — latih 1x sebelum "Go." UCAP: "Go."`,
          bantuan: 'Jika kelas drop "I use my" dan hanya sebut nama fungsi: guru tunjuk papan — "I use my…" — tunggu 2 detik, lanjut choral jika tidak ada respons.',
          cue    : 'Choral frame penuh dulu sebelum fill-in. Demo partner wajib — satu siswa sukarela, dua kartu, guru yang pandu. Listener harus punya tugas — ulang kalimat partner. "Two cards each turn" disampaikan lewat gestur — bukan instruksi verbal tambahan.',
          darurat: null,
          energi : '🟠',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          teks   : `⚠ DARURAT — Waktu ≤10 menit: skip ke Layar 11 — lewati partner practice, langsung choral body parts. AKSI: Pasang kartu eyes, ears, nose, mouth, hands di papan — 5 kartu saja. UCAP: "Use these cards. Partner A — pick a card, make a sentence. Partner B — repeat it." "Clear sentence. Go." Checkpoint tengah (±90 detik): [Tepuk 1 kali — freeze] "Switch. Partner B picks the card now." [Tepuk 1 kali — lanjut] Diferensiasi (di sisi papan, tidak dibacakan): - Sudah bisa: pakai semua 8 kartu, tambah legs dan feet - Perlu support: cukup 2 kartu — eyes dan ears`,
          bantuan: 'Pasangan diam total: dekati, bisik — "Point to eyes. Say: I use my eyes to see." Tidak hentikan kelas.',
          cue    : 'Listener harus ulang kalimat — bukan hanya diam menonton. Guru tidak koreksi grammar saat jalan. Acceptance rule berlaku — fragment diterima, model ulang saat lewat. Saat circulate, sesekali model: "I use my nose to smell." — supaya retrieval tidak collapse ke hands/write terus.',
          darurat: null,
          energi : '🔴',
        },

        // L11 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — freeze] UCAP: "Stop. Look here." [Jeda 2 detik] "Together — body parts." Putaran 1: tunjuk 8 kartu berurutan — lambat — kelas ucap nama + gestur. Putaran 2: tunjuk kartu eyes dan ears — kelas ucap dengan frame penuh: "I use my eyes to see!" → lanjut → "I use my ears to hear!" Cukup 2 kartu — tidak semua.`,
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
          teks   : `AKSI: Guru tunjuk 2 kartu ke kelas — eyes dan ears. UCAP: "Last. Write two sentences." → "I use my ___. To ___." → "Use these two cards." [tunjuk papan] [Tunggu 45–60 detik] "Show me."`,
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
