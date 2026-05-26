/**
 * =============================================================
 * FLAF — TP 15 (Feelings and Emotions)
 * File: tp-15-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp15-v2.txt
 * Generated: 2026-05-25
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_15 = {

  id       : 'tp-15',
  pdf_ref  : 'Modul_Ajar_V3_TP15_Feelings_And_Emotions.docx',
  nomor    : 15,
  kelas    : 2,
  nama     : 'Feelings and Emotions',
  tema     : 'Diri Sendiri dan Perasaan',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat menyebutkan 7 kata emosi dalam Bahasa Inggris.',
    'Peserta didik dapat menggunakan frame "I feel ___ because ___."',
    'Peserta didik dapat merespons cue emosi dengan ekspresi wajah dan gestur.',
  ],
  vocab    : ['happy', 'sad', 'angry', 'scared', 'tired', 'excited', 'bored'],
  persiapan: [
    'Kartu emosi bergambar 7 kartu (happy, sad, angry, scared, tired, excited, bored)',
    'Papan tulis: tulis "I feel ___ because ___." sebelum kelas masuk',
    'Buku/kertas exit ticket disiapkan di bawah meja siswa sebelum kelas masuk',
  ],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp15-happy.png',   label: 'Happy' },
    { file: 'tp15-sad.png',     label: 'Sad' },
    { file: 'tp15-angry.png',   label: 'Angry' },
    { file: 'tp15-scared.png',  label: 'Scared' },
    { file: 'tp15-tired.png',   label: 'Tired' },
    { file: 'tp15-excited.png', label: 'Excited' },
    { file: 'tp15-bored.png',   label: 'Bored' },
  ],

  checklist: [
    '7 kartu emosi tersedia sebelum kelas masuk',
    'Papan tulis: I feel ___ because ___ sudah tertulis sebelum kelas masuk',
    'Buku/kertas exit ticket sudah disiapkan di bawah meja siswa sebelum kelas masuk',
    'Layar 0 Greeting dilakukan',
    'Hook Layar 1: hanya 3 ekspresi guru — tidak perkenalkan semua 7',
    'Reactivation gelombang 1 dilakukan sebelum gelombang 2 masuk (L4)',
    'Gestur anchor berbeda: angry = tangan mengepal / scared = tangan di pipi',
    'Gestur anchor berbeda: tired = tangan ke dada / bored = pipi bertumpu di tangan',
    'Contrast drill angry vs scared dilakukan di Layar 3',
    'Putaran 2 Layar 3: tunjuk 2 kartu acak — bukan semua 4',
    'Kartu dilepas dari papan sebelum TPR di Layar 6',
    'Putaran acak L6 maksimal 5 cue — pasangan emosi mirip tidak berurutan',
    'Guru berhenti ikut aksi pada putaran acak L6 untuk cek retrieval mandiri',
    '"Now feelings become sentences." diucapkan sebelum frame masuk di L7',
    'Gestur dua tangan konsisten sepanjang L7–L10: tangan kiri = feeling / tangan kanan = because',
    'Kartu happy ditempel kembali sebelum L7',
    'Guru buat ekspresi dulu sebelum ucapkan kalimat di L7 dan L8',
    'Pattern L8 terjaga: guru model penuh → kelas ulang penuh → baru fill-in',
    '"Whole sentence." + gestur garis panjang dipakai saat kelas pecah jadi potongan kata di L8',
    'Whole-class QA drill "How do you feel?" dilakukan 2 putaran sebelum demo partner di L9',
    'Demo partner dilakukan sebelum partner practice',
    'Scenario dibisikkan ke Siswa A — tidak diucapkan ke kelas',
    'Instruksi partner practice L10 diucapkan dalam chunk pendek — tunjuk papan untuk frame',
    'Role bersih: Partner A = pemberi scenario + penjawab / Partner B = penanya',
    'Checkpoint L10 diucapkan dalam potongan pendek: Switch → Partner B gives → Partner A asks → Partner A answers',
    'Stop signal dilatih sebelum partner practice',
    'Total partner practice L10 tidak melebihi ±3 menit',
    'Saat circulate L10: bergerak membentuk huruf U — tidak berhenti lama di satu pasangan',
    'Saat circulate L10: cek apakah Partner B masih pakai "How do you feel?"',
    'Jika scenario absurd memecah fokus: bisik scenario konkret baru — tanpa debat',
    '"Take your pencil." diucapkan dan ditunggu sebelum instruksi exit ticket',
    'Jika siswa belum selesai: lingkari kartu emosi + ucap alasan lisan ke guru',
    'Exit ticket: ekspresi scared ditahan, satu kalimat, 45–60 detik, guru tidak ganti ekspresi',
    'Putaran 2 Layar 11 pakai discourse frame — bukan nama emosi saja',
    'Retrieval mikro dilakukan sebelum closing',
    'Setiap siswa sudah produksi minimal 1 kalimat "I feel ___ because ___."',
  ],

  energi_map: [
    'L0 🔵',
    'L1 🟠',
    'L2 🟡',
    'L3 🟠',
    'L4 🟡',
    'L5 🟠',
    'L6 🔴',
    'L7 ⚪ → 🟡',
    'L8 🟠',
    'L9 🟡',
    'L10 🔴',
    'L11 ⚪ → 🟡',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L3 Contrast: angry vs scared wajib — anchor gestur tangan lebih kuat dari penjelasan',
      'L5 Contrast: tired vs bored wajib — tired = tangan ke dada / bored = pipi di tangan',
      'L6 TPR: retrieval dari memori tubuh — guru tidak ikut, fokus observasi',
      'Fase C: tired/bored tidak berurutan, excited/happy tidak berurutan',
    ],
    autonomy: [
      'Ekspresi wajah harus exaggerated konsisten sepanjang sesi — ini anchor utama',
      'Angry vs scared: bedakan dari gestur tangan, bukan ekspresi wajah saja',
      'Excited harus paling energetik dari semua 7 emosi — anchor kontras alami',
      'Jika waktu mepet, L10 partner practice cukup 2 menit',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `UCAP: "Good morning, everyone! How are you today?" — Tunggu respons kelas. UCAP: "I'm fine, thank you! Are you ready? Let's start."`,
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
          teks   : `AKSI: Guru berdiri di tengah kelas. Tidak ada kartu dulu. → Guru buat ekspresi HAPPY — senyum lebar, angkat kedua tangan: "Look at my face. How do I feel?" [Tunggu 2–3 respons bebas — boleh Bahasa Indonesia] → Guru buat ekspresi SAD — muka murung, bahu turun: "And now?" [Tunggu 2–3 respons bebas] → Guru buat ekspresi SCARED — mata besar, tangan di pipi: "Now?" [Tunggu respons — boleh tebak-tebakan, tidak dikoreksi] UCAP: "These are feelings. Everyone has feelings. Today we learn feelings in English."`,
          bantuan: null,
          cue    : 'Guru yang berekspresi — bukan meminta siswa berekspresi dulu. Ini aktivasi konteks, bukan tes produksi. Respons bebas siswa diterima tanpa koreksi. Tiga ekspresi cukup — jangan perkenalkan semua 7 di sini.',
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
          teks   : `👂 LISTEN FIRST AKSI: Tempel 4 kartu satu per satu: happy — sad — angry — scared Setiap kartu: tunjuk kartu → buat ekspresi wajah → ucap kata. Satu detik jeda, lanjut. UCAP setelah 4 kartu terpasang: "Listen. My turn." → "Happy." [senyum lebar, tunjuk kartu] → "Sad." [muka murung, bahu turun, tunjuk kartu] → "Angry." [alis turun, bibir tegang, tunjuk kartu] → "Scared." [mata besar, tangan di pipi, tunjuk kartu] "One more time." → ulang sekali.`,
          bantuan: null,
          cue    : 'Ekspresi wajah harus exaggerated dan berbeda jelas — ini anchor utama, bukan kata-katanya. Angry dan scared paling berisiko tertukar — pastikan perbedaan tangan: angry = tangan mengepal / scared = tangan di pipi. Guru belum minta kelas produksi di layar ini.',
          darurat: null,
          energi : '🟡',
        },

        // L3 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Now together. I show — you say." → Buat ekspresi happy: kelas ucap "Happy!" → Buat ekspresi sad: "Sad!" → Buat ekspresi angry: "Angry!" → Buat ekspresi scared: "Scared!" Putaran 2: tunjuk 2 kartu acak — kelas ucap. Contrast drill — langsung setelah putaran 2 (15 detik): UCAP: "Watch." → Tunjuk kartu angry — kepal tangan: "Angry — hands tight." → Tunjuk kartu scared — tangan di pipi: "Scared — hands here." "Ready? Which one?" → "Hands tight — show me!" → kelas tunjuk kartu angry → "Hands here — show me!" → kelas tunjuk kartu scared → Ulangi 2 putaran, cepat.`,
          bantuan: 'Jika kelas tertukar angry/scared: guru berdiri diam, kepal tangan — "Angry." Tangan di pipi — "Scared." Lanjut.',
          cue    : 'Contrast drill angry vs scared wajib — ekspresi paling mirip di gelombang 1. Anchor gestur tangan lebih kuat dari penjelasan apapun. Jangan explain — cukup tunjukkan perbedaan fisik dan lanjut.',
          darurat: null,
          energi : '🟠',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI — Reactivation (15–20 detik): "Quick check." → Buat 4 ekspresi gelombang 1 berurutan — kelas ucap. → Tidak dikoreksi. Tidak diulang. Langsung lanjut. 👂 LISTEN FIRST Gelombang 2 AKSI: Tempel 3 kartu berikutnya: tired — excited — bored Setiap kartu: tunjuk kartu → buat ekspresi → ucap kata. "Listen. My turn." → "Tired." [mata sayu, kepala sedikit turun, tangan ke dada] → "Excited." [mata besar berbinar, kedua tangan terangkat] → "Bored." [muka datar, pipi bertumpu di tangan, mata menerawang] "One more time." → ulang sekali.`,
          bantuan: null,
          cue    : 'Reactivation gelombang 1 wajib — 15–20 detik, tidak dikoreksi. Tired dan bored paling berisiko tertukar — anchor gestur berbeda: tired = tangan ke dada / bored = pipi bertumpu di tangan. Excited harus paling energetik dari semua 7 emosi — anchor kontras alami.',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER Fase A — Gelombang 2 saja, lambat: "Together." → Buat ekspresi tired → excited → bored. → Kelas ucap. Lambat, tidak terburu. Fase B — Campur 7 kartu, medium: "Now — all together." → Tunjuk semua 7 kartu berurutan — medium speed. → Kelas ucap. Fase C — 4 kartu acak, cepat: "Ready? Fast — but clear." → Pilih 4 kartu acak — tunjuk cepat. → Tahan 1 detik sebelum menunjuk kartu berikutnya. → Jika energi kelas sudah naik liar setelah Fase B: langsung masuk Fase C tanpa ulang.`,
          bantuan: 'Jika kelas mulai telat: kurangi tempo, ulangi 2 kartu, lanjut.',
          cue    : 'Pisahkan pasangan emosi yang mirip di Fase C — tired/bored tidak berurutan, excited/happy tidak berurutan. Di Fase C guru tidak perlu buat ekspresi penuh — cukup tunjuk kartu, kelas produksi sendiri.',
          darurat: null,
          energi : '🟠',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru lepas kartu dari papan — simpan. Siswa tidak pegang apa-apa. UCAP: "No cards. Just me and you." → "Show me happy!" → kelas buat ekspresi happy → "Show me sad!" → kelas buat ekspresi sad → "Show me angry!" → kelas buat ekspresi angry → "Show me scared!" → kelas buat ekspresi scared → "Show me tired!" → kelas buat ekspresi tired → "Show me excited!" → kelas buat ekspresi excited → "Show me bored!" → kelas buat ekspresi bored AKSI: Putaran acak — maksimal 5 cue. Guru tidak ikut — kelas yang aksi. UCAP: "My turn to watch. You show me." → Pilih 5 cue acak. Pisahkan pasangan emosi yang mirip — tired/bored dan angry/scared tidak berurutan. → Setelah 5 cue: langsung stop. UCAP: "Stop. Good."`,
          bantuan: 'Jika kelas tertukar tired/bored: guru berdiri diam — gestur tired (tangan ke dada) → gestur bored (pipi di tangan). Lanjut.',
          cue    : 'Layar ini retrieval dari memori tubuh — bukan dari kartu. Guru tidak ikut di putaran acak — guru perlu melihat siapa yang tertukar. Maksimal 5 cue, langsung stop.',
          darurat: null,
          energi : '🔴',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — kelas freeze] UCAP: "Stop. Hands down. Sit up." [Jeda 3 detik] UCAP: "Now feelings become sentences. Watch." AKSI: Tempel kembali kartu happy. Tunjuk papan — I feel ___ because ___. "Listen. My turn." → Buat ekspresi happy — tunjuk kartu. "I feel happy — because I see my friends." [tunjuk kelas] → Buat ekspresi sad. "I feel sad — because it is raining." [gestur tangan ke atas] → Buat ekspresi scared. "I feel scared — because I see a big dog." [gestur tangan besar] "One more time." → ulang tiga kalimat.`,
          bantuan: null,
          cue    : '"Now feelings become sentences." — wajib diucapkan untuk reset mode mental kelas dari TPR ke frame kalimat. Gestur dua tangan konsisten sepanjang L7–L10: tangan kiri = feeling / tangan kanan = because. Guru selalu buat ekspresi dulu sebelum ucapkan kalimat. Alasan harus konkret dan universal — bukan personal guru. Guru tidak tanya kelas dulu di layar ini.',
          darurat: null,
          energi : '⚪ → 🟡',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Together now. Whole sentence." Tunjuk papan: I feel ___ because ___. Pattern setiap giliran: guru model penuh → kelas ulang penuh → baru fill-in. Giliran 1: → Buat ekspresi happy. → Guru: "I feel happy because I see my friends." → Kelas ulang penuh: "I feel happy because I see my friends." Giliran 2: → Buat ekspresi angry. → Guru: "I feel angry because…" [tangan kanan buka — tunggu] → Kelas isi alasan: "…someone took my pencil!" → Kelas ulang penuh: "I feel angry because someone took my pencil." Giliran 3: → Buat ekspresi excited. → Guru: "I feel excited because…" [tangan kanan buka — tunggu] → Kelas isi alasan: "…we play a game!" → Kelas ulang penuh: "I feel excited because we play a game." Giliran 4: → Buat ekspresi bored. → Guru: "I feel bored because…" [tangan kanan buka — tunggu] → Kelas isi alasan: "…the lesson is long." → Kelas ulang penuh: "I feel bored because the lesson is long."`,
          bantuan: 'Jika kelas drop "I feel": tunjuk papan — "Whole sentence." [gestur garis panjang tangan] — tunggu 2 detik, lanjut choral.',
          cue    : 'Pattern wajib: guru model penuh → kelas ulang penuh → baru fill-in. Jangan balik urutan. Tangan kiri = feeling / tangan kanan = because — konsisten setiap giliran. Jika kelas pecah jadi potongan kata: "Whole sentence." + gestur garis panjang — jangan ulang modeling dari awal.',
          darurat: null,
          energi : '🟠',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `Whole-class QA drill — sebelum demo partner (2 putaran): UCAP: "Now you ask. Ready?" → Guru buat ekspresi excited — berdiri diam. → Guru: "Ask me." → Kelas bersama: "How do you feel?" → Guru: "I feel excited because we have English today!" → Guru buat ekspresi tired — berdiri diam. → Kelas bersama: "How do you feel?" → Guru: "I feel tired because I walked a long way." UCAP: "Good. That's the question. That's the answer." Demo dengan 1 pasang siswa sukarela: "Watch them." → Guru bisik scenario ke Siswa A: "You found a toy." → Siswa B tanya: "How do you feel?" → Siswa A jawab: "I feel happy because I found a toy!" → Guru: "Good. Full sentence." Sebelum partner practice — ucapkan hal ini: "Partner voice — not shouting." "Partner A gives a scenario." "Partner B asks: How do you feel?" "Partner A answers." [tunjuk papan] Latih stop signal: "When I clap —" [tepuk 1 kali] "— stop." — latih 1x sebelum "Go." UCAP: "Go."`,
          bantuan: 'Jika kelas drop frame dan hanya ucap emosi: tunjuk papan — "I feel…" — tunggu 2 detik, tidak hentikan kelas.',
          cue    : 'Role wajib bersih — Partner A = pemberi scenario + penjawab / Partner B = penanya "How do you feel?" Saat switch: kedua role berbalik sepenuhnya. Guru bisik scenario ke Siswa A saat demo — tidak diucapkan ke kelas. QA drill 2 putaran wajib sebelum demo — kelas belum pernah produksi frame pertanyaan secara massal.',
          darurat: null,
          energi : '🟡',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          teks   : `Partner practice — siswa pakai ekspresi wajah masing-masing, tidak ada kartu. UCAP: "Partner A gives scenario. Partner B asks. Partner A answers." (tunjuk papan) "Full sentence. Go." Total ±3 menit maksimal. Checkpoint tengah (±90 detik): [Tepuk 1 kali — freeze] UCAP: "Switch. Partner B gives scenario. Partner A asks. Partner A answers." [Tepuk 1 kali — lanjut]`,
          bantuan: [
            'Pasangan diam total: dekati, bisik scenario ke Partner A. Tunjuk Partner B — gestur tanya. Jika masih diam: ucap "How do you feel?" ke Partner A, tunggu. Tidak hentikan kelas.',
            'Frame collapse — Partner B tidak tanya, langsung tebak: dekati, gestur tanya ke Partner B tanpa hentikan kelas.',
            'Scenario absurd memecah fokus kelas: bisik scenario konkret baru ke pasangan itu — tanpa debat, lanjut.',
          ],
          diferensiasi: {
            sudahBisa   : 'Ciptakan scenario sendiri, ganti emosi setiap putaran.',
            perluSupport: 'Cukup ucap emosi saja — "Happy!" — tanpa "because".',
          },
          cue    : 'Saat circulate: bergerak membentuk huruf U — jangan berhenti lama di satu pasangan. Cek apakah Partner B masih pakai "How do you feel?" — frame collapse terjadi diam-diam. Guru tidak koreksi grammar saat jalan. Total ±3 menit — jangan lewati, Fase A cepat fatigue.',
          darurat: 'Jika volume kelas naik terlalu tinggi → tepuk 1 kali, semua duduk diam 3 detik, lanjut partner practice.',
          energi : '🔴',
        },

        // L11 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — freeze] UCAP: "Stop. Look here." [Jeda 2 detik] "Together — feelings." Putaran 1: tempel kembali 7 kartu — tunjuk berurutan — lambat — kelas ucap nama. Putaran 2: guru buat ekspresi tired — kelas ucap frame penuh: "I feel tired because I ran a lot!" → buat ekspresi excited → "I feel excited because we play a game!" Cukup 2 emosi — tidak semua.`,
          bantuan: null,
          cue    : 'Putaran 2 pakai discourse frame — bukan nama emosi saja. Ini menjaga "I feel ___ because ___." tetap hidup sebelum exit ticket. Tidak perlu semua emosi — 2 contoh cukup.',
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
          teks   : `UCAP: "Take your pencil." [Tunggu — pastikan semua siswa sudah pegang pensil sebelum lanjut] AKSI: Guru buat ekspresi SCARED — berdiri diam di depan kelas, tidak bergerak. UCAP: "Last. Write one sentence." → "I feel ___ because ___." → "Look at my face." [tahan ekspresi scared] [Tunggu 45–60 detik] "Show me."`,
          bantuan: [
            'Terima: kalimat penuh, frasa parsial ("scared, big dog"), atau gambar ekspresi dengan label. Tidak ada koreksi terbuka.',
            'Jika siswa belum selesai saat waktu habis: cukup lingkari kartu emosi yang sesuai + ucapkan alasannya lisan ke guru.',
          ],
          cue    : '"Take your pencil." dulu — tunggu semua siap — baru ucap instruksi. Exit ticket = satu ekspresi tetap yang guru tahan, satu kalimat, struktur "I feel ___ because ___." Guru tidak ganti ekspresi selama siswa menulis. Pilih scared — bukan happy — karena butuh "because" yang konkret dan tidak trivial.',
          darurat: null,
          energi : '🟡',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI — Retrieval mikro: "One more time — show me happy!" → Kelas buat ekspresi happy + ucap "Happy!" "Show me excited!" → Kelas buat ekspresi excited + ucap "Excited!" AKSI: Tunjuk semua 7 kartu cepat — kelas ucap nama bersama. UCAP: "Today — feelings. Happy, sad, angry, scared, tired, excited, bored. And we say: I feel ___ because ___. Well done. See you next time."`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_15;
