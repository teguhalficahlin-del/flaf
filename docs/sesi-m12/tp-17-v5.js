/**
 * =============================================================
 * FLAF — TP 17 (My Hobbies)
 * File: docs/sesi-m12/tp-17-v5.js
 * Format: v5.0
 * Source: docs/skenario/flaf-skenario-tp17-v2.txt
 * =============================================================
 */

const TP_17 = {

  id       : 'tp-17',
  nomor    : 17,
  kelas    : 2,
  nama     : 'My Hobbies',
  tema     : 'Diri Sendiri dan Perasaan',
  deskripsi: `Peserta didik belajar mengungkapkan hobi dan aktivitas waktu luang
    menggunakan pola "I like [gerund] because it is [fun/interesting]" dalam
    konteks yang universal dan inklusif. Fokus pada pattern practice dan
    voluntary sharing, bukan forced personal exposure.`,

  indikator: [
    'Peserta didik dapat menyebut dan mengenali 8 hobi dengan gerund yang benar (reading, drawing, singing, dancing, playing football, cooking, swimming, cycling).',
    'Peserta didik dapat mengungkapkan hobi dan alasan menggunakan pola "I like ... because it is fun / interesting" dengan struktur yang tepat.',
    'Peserta didik dapat menanyakan dan merespons "What do you like to do?" dalam percakapan berpasangan sederhana.',
  ],

  vocab: ['reading', 'drawing', 'singing', 'dancing', 'playing football', 'cooking', 'swimming', 'cycling', 'I like', 'because', 'fun', 'interesting'],

  persiapan: ['Kartu hobi bergambar 8 item dengan gerund form'],

  media: [
    {
      id                 : 'media-kartu-hobi',
      nama               : 'Kartu Hobi Bergambar (8 item)',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'Modul_Ajar_V3_TP17_My_Hobbies.docx',
      pdf_halaman        : 1,
      reusable_lintas_tp : true,
      keterangan         : '8 kartu A5 dengan gambar & text: reading, drawing, singing, dancing, playing football, cooking, swimming, cycling. Ilustrasi netral & beragam. Universal framing.',
    },
  ],

  printables: [
    { file: 'tp17-cooking.png',          label: 'Cooking' },
    { file: 'tp17-cycling.png',          label: 'Cycling' },
    { file: 'tp17-dancing.png',          label: 'Dancing' },
    { file: 'tp17-drawing.png',          label: 'Drawing' },
    { file: 'tp17-playing-football.png', label: 'Playing Football' },
    { file: 'tp17-reading.png',          label: 'Reading' },
    { file: 'tp17-singing.png',          label: 'Singing' },
    { file: 'tp17-swimming.png',         label: 'Swimming' },
  ],

  checklist: [
    '8 kartu hobi tersedia sebelum kelas masuk',
    'Papan tulis: I like ___ because it is ___ sudah tertulis sebelum kelas masuk',
    'Buku/kertas exit ticket sudah disiapkan di bawah meja siswa sebelum kelas masuk',
    'Layar 0 Greeting dilakukan',
    'Hook L1: hanya 3 hobi guru — tidak perkenalkan semua 8',
    'Kartu ditempel sesuai gelombang — tidak semua sekaligus',
    'LISTEN FIRST dilakukan sebelum produksi per gelombang (L2, L4)',
    'Reactivation gelombang 1 dilakukan sebelum gelombang 2 masuk (L4) — 15–20 detik, tidak dikoreksi',
    'Gesture anchor berbeda: reading = tangan diam / drawing = tangan bergerak',
    'Gesture anchor berbeda: swimming = lengan ke samping / cycling = setir + kaki',
    'Contrast drill reading vs drawing dilakukan di L3',
    'Contrast drill swimming vs cycling dilakukan di L5',
    'Jika satu item lambat di L4: ulang item itu saja — tidak restart semua 4',
    'Jika energi turun setelah Fase C L5: langsung masuk contrast drill tanpa repeat',
    'Reading dan drawing tidak berurutan di putaran acak L5 dan L6',
    'Swimming dan cycling tidak berurutan di putaran acak L5 dan L6',
    'Semua kartu dilepas dari papan sebelum TPR di L6',
    'Putaran acak L6 maksimal 5 cue — guru tidak ikut',
    'Freeze dilakukan setelah L6 sebelum frame kalimat masuk',
    '"Hobbies become sentences." diucapkan sebelum frame masuk di L7',
    'Jeda 2 detik setelah contoh pertama di L7 — wajib sebelum contoh kedua',
    'Guru randomize fun/interesting di L7 dan L8 — tidak semua satu pilihan',
    'Pattern L8 terjaga: guru model penuh → kelas ulang penuh → baru fill-in',
    '"Whole sentence." + gestur garis panjang dipakai saat kelas pecah jadi potongan kata di L8',
    'Whole-class QA drill "What do you like to do?" dilakukan 2 putaran sebelum demo partner di L9',
    'Demo partner dilakukan sebelum pair practice',
    'Hobi dibisikkan ke Siswa A saat demo — tidak diucapkan ke kelas',
    'Tugas Listener: "Raise the card when you hear the hobby" — bukan "hold"',
    'Distribusi kartu selesai sebelum instruksi practice di L10',
    'Stop signal dilatih sebelum pair practice',
    'Instruksi pair practice L10 diucapkan dalam chunk pendek',
    'Total pair dialogue L10 tidak melebihi ±4 menit',
    'Checkpoint switch: Switch → Partner B picks card → Partner A asks and raises',
    'Saat circulate L10: bergerak huruf U — cek Partner B angkat kartu setelah mendengar, bukan sebelum',
    'Fokus pada produksi bahasa — tidak verifikasi apakah hobi benar-benar dilakukan siswa',
    'Pasangan selesai cepat: "Pick another card. Switch again."',
    'Survey L11: "thumbs close to your chest" — tidak perlu tinggi',
    'Survey L11 maksimal 5 kartu — tidak ada hitung jumlah, tidak ada komentar komparatif',
    'Kalimat penutup survey cukup "People like different hobbies." — tidak perlu elaborasi',
    'Putaran 1 L12: tahan 1 detik per kartu — retrieval genuine, bukan chanting otomatis',
    'Putaran 2 L12 pakai discourse frame — bukan nama hobi saja, cukup 2 contoh',
    '"Take your pencil." diucapkan dan ditunggu sebelum instruksi exit ticket',
    'Exit ticket: gesture cycling ditahan, satu kalimat, 45–60 detik, guru tidak ganti gesture',
    'Jika siswa belum selesai: gesture hobi + ucap lisan ke guru',
    'Retrieval mikro dilakukan sebelum closing',
    'Setiap siswa sudah produksi minimal 1 kalimat "I like ___ because it is ___."',
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
    'L11 ⚪ → 🟠',
    'L12 🟡',
    'L13 🟡',
    'L14 🔵',
  ],

  catatan: {
    risiko: [
      'L3 Contrast: reading vs drawing wajib — reading = tangan diam / drawing = tangan bergerak',
      'L5 Contrast: swimming vs cycling wajib — swimming = lengan ke samping / cycling = pegang setir + kaki mengayuh',
      'L6 TPR: guru tidak ikut di putaran acak — fokus observasi',
      'Fase C L5: swimming dan cycling tidak boleh berurutan — interference tinggi',
    ],
    autonomy: [
      'Gesture harus exaggerated dan berbeda konsisten sepanjang sesi',
      '"Playing football" tiga kata — ucap pelan, tidak terburu',
      'Jika kelas lambat di satu item: ulang item itu saja, tidak restart semua',
      'L11 Thumbs Up Survey: maksimal 5 kartu — tidak diperluas',
    ],
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L0 — PEMBUKA KELAS · Greeting
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Good morning, everyone! How are you today?" — Tunggu respons kelas. UCAP: "I'm fine, thank you! Are you ready? Let's start."`,
          bantuan: null,
          cue    : 'Layar ini pendek dan wajib. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.',
          darurat: null,
          energi : '🔵',
        },

        // L1 — PEMBUKA · Hook Guru Model Hobi
        {
          tipe   : 'instruksi',
          teks   : `Berdiri di tengah kelas — tidak ada kartu. Gesture membuka buku, pura-pura membaca: "I like reading!" [tunggu 2–3 detik]. Gesture mengaduk masakan: "I like cooking!" [tunggu 2–3 detik]. Gesture menendang bola: "I like playing football!" [tunggu 2–3 detik]. UCAP: "These are hobbies. Things we love to do. Today — hobbies in English." [Tunggu respons bebas — tidak dikoreksi, tidak dikonfirmasi]`,
          bantuan: null,
          cue    : 'Guru yang perform — bukan meminta siswa respond dulu. Tiga hobi cukup — jangan perkenalkan semua 8 di sini. Pilih hobi yang gesturenya sangat berbeda satu sama lain. Respons bebas siswa diterima tanpa koreksi.',
          darurat: null,
          energi : '🟠',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 35,

      langkah: [

        // L2 — INTI · LISTEN FIRST Gelombang 1
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — Tempel 4 kartu satu per satu: reading → drawing → singing → dancing. Setiap kartu: tunjuk kartu → buat gesture → ucap gerund → jeda 1 detik. UCAP: "Listen. My turn." → "Reading." [gesture membuka buku, mata ke bawah — tunjuk kartu] → "Drawing." [gesture pegang pensil, gambar di udara — tunjuk kartu] → "Singing." [gesture tangan ke mulut, kepala sedikit naik — tunjuk kartu] → "Dancing." [gesture gerak badan kiri kanan — tunjuk kartu]. UCAP: "One more time." → ulang sekali.`,
          bantuan: null,
          cue    : 'Gesture harus exaggerated dan berbeda jelas — ini anchor utama. Reading dan drawing berisiko tertukar — pastikan perbedaan: reading = mata ke bawah, tangan diam / drawing = tangan bergerak di udara. Guru belum minta kelas produksi di layar ini.',
          darurat: null,
          energi : '🟡',
        },

        // L3 — INTI · Produksi Bersama G1 + Contrast Drill
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER — UCAP: "Now together. I show — you say." → Gesture membuka buku: kelas ucap "Reading!" → Gesture pensil di udara: "Drawing!" → Gesture tangan ke mulut: "Singing!" → Gesture gerak badan: "Dancing!" Putaran 2: tunjuk 2 kartu acak — kelas ucap. Contrast drill langsung setelah putaran 2 (15 detik): UCAP: "Watch." → Gesture reading — mata ke bawah, tangan diam: "Reading — hands still." → Gesture drawing — tangan bergerak di udara: "Drawing — hands move." UCAP: "Ready? Which one?" → "Hands still — show me!" [kelas gesture reading] → "Hands move — show me!" [kelas gesture drawing] → ulangi 2 putaran, cepat.`,
          bantuan: 'Jika kelas tertukar reading/drawing: guru berdiri diam — gesture reading (tangan diam) → gesture drawing (tangan bergerak). Lanjut.',
          cue    : 'Contrast drill reading vs drawing wajib — gesture paling mirip di gelombang 1. Anchor perbedaan: reading = tangan diam / drawing = tangan bergerak. Jangan explain — tunjukkan perbedaan fisik dan lanjut.',
          darurat: null,
          energi : '🟠',
        },

        // L4 — INTI · Reactivation G1 + LISTEN FIRST Gelombang 2
        {
          tipe   : 'instruksi',
          teks   : `Reactivation G1 (15–20 detik): UCAP: "Quick check." → Guru gesture 4 hobi gelombang 1 berurutan — kelas ucap. Tidak dikoreksi, tidak diulang, langsung lanjut. 👂 LISTEN FIRST G2 — Tempel 4 kartu berikutnya: playing football → cooking → swimming → cycling. Setiap kartu: tunjuk kartu → gesture → ucap gerund. UCAP: "Listen. My turn." → "Playing football." [gesture menendang bola — tunjuk kartu] → "Cooking." [gesture mengaduk panci — tunjuk kartu] → "Swimming." [gesture lengan berenang ke samping — tunjuk kartu] → "Cycling." [gesture pegang setir + kaki mengayuh — tunjuk kartu]. UCAP: "One more time." → ulang sekali.`,
          bantuan: 'Jika kelas mulai lambat di "playing football": jangan ulang semua 4 item dari awal — ulang item itu saja, lanjut.',
          cue    : 'Reactivation gelombang 1 wajib — 15–20 detik, tidak dikoreksi. Swimming dan cycling berisiko tertukar — anchor berbeda: swimming = kedua lengan bergerak ke samping / cycling = tangan pegang setir + kaki mengayuh. "Playing football" tiga kata — ucap pelan, tidak terburu. Jika satu item lambat: ulang item itu saja, tidak restart semua 4.',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI · Produksi Gabungan 8 Hobi + Contrast Drill G2
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER — Fase A (gelombang 2, lambat): UCAP: "Together." → Gesture menendang: "Playing football!" → Gesture mengaduk: "Cooking!" → Gesture lengan ke samping: "Swimming!" → Gesture pegang setir: "Cycling!" Fase B (campur 8 kartu, medium): UCAP: "Now — all together." → Tunjuk semua 8 kartu berurutan — kelas ucap. Fase C (4 kartu acak, cepat): UCAP: "Ready? Fast — but clear." → Pilih 4 kartu acak, tahan 1 detik sebelum lanjut. Jika energi kelas naik liar setelah Fase B: langsung masuk Fase C tanpa ulang. Contrast drill swimming vs cycling langsung setelah Fase C (15 detik): UCAP: "Watch." → Gesture swimming — kedua lengan ke samping: "Swimming — arms out." → Gesture cycling — tangan setir + kaki: "Cycling — hands and feet." UCAP: "Which one? Arms out — show me!" [kelas gesture swimming] "Hands and feet — show me!" [kelas gesture cycling] → ulangi 2 putaran, cepat.`,
          bantuan: 'Jika kelas mulai telat di Fase B/C: kurangi tempo, ulangi 2 kartu, lanjut.',
          cue    : 'Contrast drill swimming vs cycling wajib — gesture paling mirip di gelombang 2. Jika energi turun setelah Fase C: langsung masuk drill tanpa repeat. Di Fase C guru tidak perlu buat gesture penuh — cukup tunjuk kartu. Jangan letakkan swimming dan cycling berurutan di Fase C.',
          darurat: null,
          energi : '🟠',
        },

        // L6 — INTI · TPR "Show Me …"
        {
          tipe   : 'instruksi',
          teks   : `Lepas semua kartu dari papan — simpan. UCAP: "No cards. Just me and you." → "Show me reading!" [kelas gesture reading] → "Show me drawing!" [kelas gesture drawing] → "Show me singing!" → "Show me dancing!" → "Show me playing football!" → "Show me cooking!" → "Show me swimming!" → "Show me cycling!" Putaran acak — maksimal 5 cue. UCAP: "My turn to watch. You show me." → Pilih 5 cue acak, pisahkan pasangan mirip: reading/drawing tidak berurutan, swimming/cycling tidak berurutan. Setelah 5 cue: langsung stop. UCAP: "Stop. Good." [Tepuk 1 kali — freeze] UCAP: "Sit down. Hands down." [Jeda 3 detik]`,
          bantuan: 'Jika kelas tertukar swimming/cycling: guru berdiri diam — gesture swimming (lengan ke samping) → gesture cycling (setir + kaki). Lanjut.',
          cue    : 'Layar ini retrieval dari memori tubuh. Guru tidak ikut di putaran acak — guru perlu melihat siapa yang tertukar. Maksimal 5 cue, langsung stop. Freeze wajib setelah layar ini sebelum masuk frame kalimat.',
          darurat: null,
          energi : '🔴',
        },

        // L7 — RESET + LISTEN FIRST · Frame "I like … because it is …"
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Good. Now — hobbies become sentences. Watch." Tempel kembali kartu reading dan dancing. Tunjuk papan — I like ___ because it is ___. UCAP: "Listen. My turn." → Gesture reading — tunjuk kartu: "I like reading — because it is interesting." [gesture curious eyes] [Jeda 2 detik] → Gesture dancing — tunjuk kartu: "I like dancing — because it is fun!" [gesture senyum lebar, tangan naik] [Jeda 2 detik] → Gesture cooking — tunjuk kartu cooking: "I like cooking — because it is fun!" UCAP: "One more time." → ulang tiga kalimat.`,
          bantuan: null,
          cue    : '"Hobbies become sentences." — wajib diucapkan untuk reset mode mental kelas dari TPR ke frame kalimat. Jeda 2 detik setelah contoh pertama wajib — beri waktu kelas menangkap pola sebelum contoh berikutnya. Tunjuk papan setiap kali ucap frame. Guru randomize reason — bukan semua "fun", bukan semua "interesting." Guru tidak tanya kelas dulu di layar ini.',
          darurat: null,
          energi : '⚪ → 🟡',
        },

        // L8 — INTI · Produksi Bersama Frame Kalimat
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER — UCAP: "Together now. Whole sentence." Tunjuk papan: I like ___ because it is ___. Giliran 1: Gesture reading → Guru: "I like reading because it is interesting." → Kelas ulang penuh. Giliran 2: Gesture singing → Guru: "I like singing because it is…" [tangan buka — tunggu] → Kelas isi: "…fun!" → Kelas ulang penuh. Giliran 3: Gesture playing football → Guru: "I like playing football because it is…" [tangan buka — tunggu] → Kelas isi: "…fun!" → Kelas ulang penuh. Giliran 4: Gesture swimming → Guru: "I like swimming because it is…" [tangan buka — tunggu] → Kelas isi: "…interesting!" → Kelas ulang penuh.`,
          bantuan: 'Jika kelas drop "I like": tunjuk papan — "Whole sentence." [gestur garis panjang tangan] — tunggu 2 detik, lanjut choral.',
          cue    : 'Pattern wajib: guru model penuh → kelas ulang penuh → baru fill-in. Jangan balik urutan. Guru randomize fun/interesting — jangan semua satu pilihan. Tunjuk papan setiap kali kelas drop "I like." "Playing football" tiga kata — ucap pelan, kelas pasti menyingkat. Koreksi via model ulang saat lewat, bukan teguran terbuka.',
          darurat: null,
          energi : '🟠',
        },

        // L9 — INTI · Whole-Class QA Drill + Demo Partner
        {
          tipe   : 'instruksi',
          teks   : `Whole-class QA drill (2 putaran): UCAP: "Now you ask. Ready?" → Guru gesture reading — berdiri diam → Guru: "Ask me." → Kelas bersama: "What do you like to do?" → Guru: "I like reading because it is interesting!" Putaran 2: Guru gesture dancing → Kelas: "What do you like to do?" → Guru: "I like dancing because it is fun!" UCAP: "Good. That's the question. That's the answer." Demo partner sukarela: UCAP: "Watch them." → Bisik ke Siswa A: "You like cooking." → Siswa A pegang kartu cooking → Siswa B: "What do you like to do?" → Siswa A: "I like cooking because it is fun!" → Guru: "Good. Full sentence." Instruksi sebelum practice (chunk pendek): "Partner voice — not shouting." "Partner A holds a card — face down." "Partner B asks: What do you like to do?" "Partner A answers: I like ___ because it is ___." [tunjuk papan] "Partner B: raise the card when you hear the hobby." Latih stop signal: "When I clap —" [tepuk 1 kali] "— stop." — latih 1x. UCAP: "Go."`,
          bantuan: null,
          cue    : 'Whole-class QA drill 2 putaran wajib — kelas belum pernah produksi frame tanya secara massal. Guru bisik hobi ke Siswa A saat demo — tidak diucapkan ke kelas. Tugas Listener diucapkan eksplisit: "Raise the card when you hear the hobby." — bukan "hold" yang ambigu.',
          darurat: null,
          energi : '🟡',
        },

        // L10 — INTI · Pair Dialogue
        {
          tipe   : 'instruksi',
          teks   : `Distribusi kartu hobi — 1 set per pasang. Tunggu semua siap sebelum instruksi. UCAP dalam chunk pendek: "Partner A picks a card — holds it face down." "Partner B asks: What do you like to do?" "Partner A answers: I like ___ because it is ___." [tunjuk papan] "Partner B: raise the card when you hear the hobby." "Full sentence. Go." Total durasi: ±4 menit maksimal. Checkpoint tengah (±2 menit): [Tepuk 1 kali — freeze] UCAP: "Switch." "Partner B picks a card." "Partner A asks and raises." [Tepuk 1 kali — lanjut]`,
          bantuan: [
            'Pasangan diam total: dekati, tunjuk kartu di tangan Partner A — bisik: "I like…" Tunggu Partner A lanjut. Tidak hentikan kelas.',
            'Partner B tidak angkat kartu: dekati, gesture angkat kartu ke Partner B — tanpa bicara. Tidak hentikan kelas.',
            'Pasangan selesai terlalu cepat: "Pick another card. Switch again."',
          ],
          cue    : 'Distribusi kartu wajib selesai sebelum instruksi practice. Saat circulate: bergerak huruf U — cek apakah Partner B mengangkat kartu setelah mendengar hobby, bukan sebelum. Fokus pada produksi bahasa — jangan verifikasi apakah hobi yang disebut benar-benar dilakukan siswa. Guru tidak koreksi grammar. Total ±4 menit — jangan lewati.',
          darurat: 'Jika volume kelas naik terlalu tinggi → tepuk 1 kali, duduk diam 3 detik, lanjut.',
          energi : '🔴',
        },

        // L11 — RESET · Thumbs Up Survey
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — freeze] UCAP: "Stop. Look here." [Jeda 2 detik] UCAP: "Quick survey. Thumbs up if you like it — thumbs close to your chest." → Tunjuk kartu reading: "Reading?" [kelas thumbs up dekat dada / diam] → Tunjuk kartu singing: "Singing?" → Tunjuk kartu dancing: "Dancing?" → Tunjuk kartu playing football: "Playing football?" → Tunjuk kartu swimming: "Swimming?" UCAP: "People like different hobbies." [Lanjut]`,
          bantuan: null,
          cue    : '"Thumbs close to your chest" — instruksi eksplisit ini mengurangi exposure sosial. Tidak ada hitung jumlah, tidak ada komentar komparatif, tidak ada "siapa yang paling banyak." Diam diterima sama seperti thumbs up — tidak dikomentari. Kalimat penutup cukup "People like different hobbies." — tidak perlu moral elaboration. Maksimal 5 kartu.',
          darurat: null,
          energi : '⚪ → 🟠',
        },

        // L12 — RETRIEVAL · Choral Hobi + Frame
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Together — hobbies." Putaran 1: tempel kembali semua 8 kartu — tunjuk berurutan — lambat — kelas ucap nama hobi. Tahan 1 detik sebelum tunjuk kartu berikutnya — jangan biarkan kelas chant otomatis. Putaran 2: Guru gesture reading — kelas ucap frame penuh: "I like reading because it is interesting!" → Gesture dancing: "I like dancing because it is fun!" Cukup 2 hobi — tidak semua.`,
          bantuan: null,
          cue    : 'Putaran 2 pakai discourse frame — bukan nama hobi saja. Tahan 1 detik per kartu di Putaran 1 — retrieval harus genuine, bukan chanting otomatis. Cukup 2 contoh di Putaran 2 — tidak perlu semua 8.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,

      langkah: [

        // L13 — PENUTUP · Exit Ticket
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Take your pencil." [Tunggu — pastikan semua siswa sudah pegang pensil] Guru gesture cycling — tahan posisi. Tunjuk papan. UCAP: "Last. Write one sentence." → "I like ___ because it is ___." → "Look at my gesture." [tahan gesture cycling] [Tunggu 45–60 detik] UCAP: "Show me."`,
          bantuan: [
            'Terima: kalimat penuh, frasa parsial ("cycling, fun"), atau gambar hobi dengan label. Tidak ada koreksi terbuka.',
            'Jika siswa belum selesai saat waktu habis: gesture hobi yang mereka suka + ucap kalimat lisan ke guru.',
          ],
          cue    : 'Pilih cycling — bukan reading atau singing yang paling mudah. Cycling membutuhkan siswa mengingat hobi gelombang 2 yang lebih menantang. Guru tahan gesture selama siswa menulis — tidak ganti gesture. Satu hobi, satu kalimat, satu reason.',
          darurat: null,
          energi : '🟡',
        },

        // L14 — PENUTUP · Closing
        {
          tipe   : 'instruksi',
          teks   : `Retrieval mikro: UCAP: "One more time — show me reading!" → Kelas gesture reading + ucap "Reading!" UCAP: "Show me dancing!" → Kelas gesture dancing + ucap "Dancing!" Tunjuk semua 8 kartu cepat — kelas ucap nama hobi bersama. UCAP: "Today — hobbies. Reading, drawing, singing, dancing, playing football, cooking, swimming, cycling. And we say: I like ___ because it is fun or interesting. Well done. See you next time."`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_17;
