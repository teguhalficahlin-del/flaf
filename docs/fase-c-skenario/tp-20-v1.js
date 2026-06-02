/**
 * =============================================================
 * FLAF — TP C20 (Writing: My Experience)
 * File: docs/fase-c-skenario/tp-20-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 6)
 * Kluster: E — Memproduksi untuk Orang Lain
 * Jenis: Panen
 * Source: flaf-c-tp20-v2.txt
 * Converted: Juni 2026
 * =============================================================
 *
 * Panen keempat dan terakhir sebelum Capstone.
 * Tiga register tersedia: Opinion (TP17) · Story (TP18) · Description (TP19).
 * Tidak ada text-anchor. Tidak ada vocab baru. Tidak ada template.
 * Guru tidak mendominasi lebih dari 40% layar.
 * =============================================================
 */

export const tp_c20 = {

  // ── Identitas ─────────────────────────────────────────────────────────
  id        : 'tp-c20',
  nomor     : 20,
  kelas     : 6,
  nama      : 'Writing: My Experience',
  tema      : 'Memproduksi untuk Orang Lain',
  kluster   : 'E',
  jenis     : 'Panen',
  deskripsi : `Siswa memproduksi teks tulis mandiri dalam register pilihan sendiri
    (opini, cerita, deskripsi, atau kombinasi) tanpa scaffold template.
    Topik dipilih siswa sendiri berdasarkan pengalaman dari TP17–19.
    Tiga register tersedia di pojok papan sepanjang sesi.
    Commitment (topik + register + kalimat pertama) ditulis di L5
    sebelum pair sharing dan sebelum produksi utama.`,

  // ── Indikator ─────────────────────────────────────────────────────────
  indikator: [
    'Peserta didik dapat memproduksi teks tulis dalam minimal satu register (opini, cerita, atau deskripsi) menggunakan kosakata Fase C tanpa scaffold template.',
    'Peserta didik dapat menggunakan minimal satu connector (because, but, and, so) yang terintegrasi natural dalam tulisan mandiri.',
    'Peserta didik dapat menjelaskan pilihan topik dan register mereka secara lisan kepada pasangan dalam 1–2 kalimat.',
  ],

  // ── Vocab & Persiapan ─────────────────────────────────────────────────
  vocab: [],
  // Panen — tidak ada vocab baru. Semua kosakata dari TP17–19.

  persiapan: [
    'Brief di papan (3 baris — ditulis sebelum kelas masuk, tetap tampil selama sesi): "Write about something you know —" / "because only you can write this." / "But it must be yours."',
    'Tiga register di pojok papan (ditulis sebelum kelas masuk, tetap tampil selama sesi): "Opinion · Story · Description"',
    'Kertas atau buku tulis siswa — dipakai langsung untuk commitment (L5) dan writing (L7–L9). Tidak perlu disiapkan khusus.',
    'Tidak ada kartu, tidak ada media distribusi. Seluruh persiapan hanya board setup.',
  ],

  // ── Checklist ─────────────────────────────────────────────────────────
  checklist: [
    'L1 reactivation: "Last time — you described a place. Who remembers one sentence from their description?" — satu kalimat dari tulisan TP19; "Today — everything you know. You choose what to write." diucapkan setelah respons',
    'Brief L2: tiga baris di papan termasuk "because only you can write this." dan "But it must be yours." — dua connector tertanam natural dalam instruksi',
    'Tiga register di pojok papan: "Opinion · Story · Description" — sudah tampil dari L0, dibaca bersama di L2, dirujuk di L3 dan seterusnya',
    'L3 review: tiga pertanyaan (opinion topic, story event, description place) — masing-masing 30 detik, total tidak lebih dari 4 menit; stop setelah "Or something new."',
    'L4 demo (jika dijalankan): tiga kalimat persis — "Last Saturday I went to the market near my house. It is always busy and full of colors. I like it because it reminds me of my grandmother." — lisan only, tidak ditulis di papan',
    'L5 commitment: tiga elemen (topik + register + satu kalimat) ditulis SEBELUM pair sharing; "Don\'t talk yet. Write first." diucapkan eksplisit',
    'L6 INTERACT: demo 30 detik dijalankan dengan commitment "story + description + opinion about market" (konsisten dengan L4 jika L4 dijalankan)',
    'L7 circulate: dimulai setelah 4 menit (bukan langsung) — barisan belakang diprioritaskan; siswa yang menyalin TP17/18/19 mendapat nudge "Same topic — new words? Or different angle."',
    'BREAKPOINT ALAMI: "Stop where you are. Save your work. Next time we start from Layar 9 — revision." — dioperasikan jika sesi tidak cukup',
    'Guru tidak mendominasi lebih dari 40% layar — L0, L2, L3, L13 dominan = 4 dari 14 layar = 28%',
    'Closure L13: "Next time — we read again. But not a story. Not instructions. Texts you see every day. Outside this classroom." — verbatim',
  ],

  // ── Printables ────────────────────────────────────────────────────────
  printables: [],
  // Tidak ada media cetak di TP ini — board setup saja.

  // ── Energi Map ────────────────────────────────────────────────────────
  energi_map: [
    'L0 ⚪',
    'L1 🟡',
    'L2 🟡',
    'L3 🟡',
    'L4 🟡',
    'L5 🔵',
    'L6 🟡',
    'L7 🔵',
    'L8 🔵',
    'L9 🔵',
    'L10 🔵',
    'L11 🟡',
    'L12 🟡',
    'L13 🔵',
  ],

  // ── Catatan ───────────────────────────────────────────────────────────
  catatan: {
    risiko: [
      'L3: Risiko review merayap jadi re-teaching tiga register. Tiga pertanyaan, 30 detik per register — total 3 menit. Stop di "Or something new." Jangan elaborasi lebih lanjut.',
      'L5: Risiko commitment terlalu panjang (siswa ingin menulis seluruh tulisan di sini). Batasi: tiga elemen saja — topik, register, satu kalimat. Jika siswa sudah menulis lebih: "Good — save that for L7."',
      'L7: Risiko circulate terlalu dini (menit 1–2). Ini adalah sesi yang paling butuh "guru tidak mengganggu" di seluruh Fase C. Beri 4 menit sebelum circulate. Flow menulis harus terbentuk sendiri.',
      'L9: Risiko connector check menjadi grammar audit menyeluruh. Cukup satu connector per siswa — bukan koreksi semua kalimat.',
    ],
    autonomy: [
      'Kalimat demo L4 boleh diganti dengan cerita personal yang berbeda — yang penting tetap menggabungkan ketiga register dalam tiga kalimat terpisah (story + description + opinion).',
      'Guru boleh mengizinkan siswa yang selesai lebih awal untuk memilih SATU kalimat favorit dan menulis ulang dengan lebih presisi — bukan memulai tulisan baru dari nol.',
      'Jika kelas terlihat sangat produktif di L7 dan tidak ada yang perlu diintervensi: guru boleh diam dan hanya circulate mengamati — tidak wajib memberi komentar ke setiap siswa.',
      'Jika banyak siswa memilih topik yang sama persis: bisik ke beberapa siswa di L9 "What is different about YOUR [topik]? Add that." — output yang hampir identik adalah sinyal yang perlu ditangkap saat revisi.',
      'Guru boleh membiarkan siswa menulis tentang topik di luar TP17/18/19 — kebebasan TP20 mencakup topik baru yang belum pernah ditulis sebelumnya.',
    ],
  },

  // ── Fase C — Field Baru ───────────────────────────────────────────────
  text_anchor    : null,
  // TP Panen — tidak ada text-anchor by design.

  connector_aktif: 'and · but · because · so · when · then — semua tersedia; tidak ada connector baru; because dan but tertanam natural dalam brief di papan',

  recycle_fase_b: [
    'I think... because... (TP13 Fase B / TP06 Fase C)',
    'Last week I... / Yesterday I... (TP05 Fase B)',
    'It has... / It is... dari She/He has... (TP02 Fase B)',
    'There is / There are... (TP03 Fase B)',
    'first, then, after that (TP06 Fase B)',
  ],

  // ── Breakpoints ───────────────────────────────────────────────────────
  breakpoints: [
    {
      type             : 'breakpoint',
      id               : 'bp-tp-c20-1',
      kind             : 'natural',
      after_langkah_id : 'l7',
      resume_at        : 'l9',
      // resume_at adalah l9, bukan l8 — karena l8 adalah FLEX dengan kondisi
      // "lewati jika Breakpoint diaktifkan" sehingga tidak relevan saat resume.
      text             : 'Stop where you are. Save your work.\nNext time we start from Layar 9 — revision.',
      recommended      : true,
      persist_state    : true,
      preserve_context : {
        artifacts       : true,
        // Commitment yang ditulis di L5 perlu dipertahankan saat sesi dilanjutkan —
        // siswa tidak perlu membuat commitment baru di sesi berikutnya.
        assessment_state: true,
        // Overlay penilaian mungkin sudah dibuka di L6 atau L7 sebelum breakpoint.
        // Menyimpan state mencegah duplikasi penilaian di sesi berikutnya.
        pairing_state   : false,
        // Pair exchange L6 sudah selesai sebelum breakpoint diaktifkan (breakpoint
        // ada setelah L7). Pasangan tidak perlu dipertahankan untuk sesi lanjutan.
      },
      ui: {
        primary_action  : 'Simpan & keluar',
        secondary_action: 'Lanjut mengajar',
      },
    },
  ],

  // ── PreOpening (L0) ───────────────────────────────────────────────────
  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Brief 3 baris dan tiga register sudah tampil di papan.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut.
UCAP: "Today — you write. About yourself. About your world."
→ Tunjuk brief di papan. Tidak perlu diterjemahkan. Lanjut ke L1.`,
    bantuan: null,
    cue    : null,
    darurat: null,
    energi : '⚪',
  },

  // ── Skenario ──────────────────────────────────────────────────────────
  skenario: [

    // ══════════════════════════════════════════════════════════════════
    // FASE PEMBUKA
    // ══════════════════════════════════════════════════════════════════
    {
      fase  : 'Pembuka',
      durasi: 8,

      langkah: [

        // L1 — Reactivation: Dari Tulisan TP19
        {
          id              : 'l1',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas tanpa menunjukkan teks baru.
UCAP: "Last time — you described a place."
→ Jeda.
UCAP: "Who remembers one sentence from their description?"
→ Tunggu SATU siswa menyebut kalimat dari tulisan TP19 — contoh: "The library is quiet and clean." atau "I go there every week because I feel calm there." atau versi kalimat siswa sendiri.
→ Guru angguk dan terima.
UCAP: "Today — everything you know."
→ Jeda.
UCAP: "You choose what to write."
→ Tunjuk brief dan tiga register di papan.
→ Lanjut ke L2.`,
          bantuan         : 'Jika tidak ada yang merespons dalam 10 detik: ucap "Last time you wrote \'The [place] is...\' — who remembers one word?" Tunggu satu kata. Terima, angguk, lanjut.',
          cue             : 'Reactivation mengaktifkan descriptive register dari TP19 — salah satu dari tiga register yang tersedia hari ini. Satu kalimat sudah cukup. "You choose what to write." adalah momen yang memvalidasi otonomi siswa sebelum brief dibacakan.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : null,
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L2 — Brief Panen
        {
          id              : 'l2',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru tunjuk brief di papan (3 baris).
UCAP: "Read this with me."
🗣 TOGETHER — baca tiga baris bersama kelas:
"Write about something you know —"
"because only you can write this."
"But it must be yours."
→ Jeda.

UCAP: "And look at the corner."
→ Tunjuk pojok papan: "Opinion · Story · Description"
UCAP: "You can use one — or more than one."
→ Jeda.
UCAP: "Your topic. Your choice."
→ Jeda.
UCAP: "Today — you write everything you know."`,
          bantuan         : null,
          cue             : '"because only you can write this." dan "But it must be yours." — dua connector tertanam natural dalam kalimat instruksi. "You can use one — or more than one." adalah izin untuk kombinasi register tanpa menyebutnya sebagai aturan. Tiga register di pojok papan tidak perlu dijelaskan — siswa sudah kenal ketiganya dari TP17/18/19.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : null,
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

      ],
    },

    // ══════════════════════════════════════════════════════════════════
    // FASE INTI
    // ══════════════════════════════════════════════════════════════════
    {
      fase  : 'Inti',
      durasi: 39,

      langkah: [

        // ── BLOK INPUT ────────────────────────────────────────────────

        // L3 — Portfolio Micro-Review  [INPUT · CORE]
        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `UCAP: "Before you write — remember."
→ Tunjuk pojok papan: "Opinion · Story · Description"

UCAP: "Opinion — TP17. What topic did you write about? Football? Cooking?"
→ Tunggu 1–2 siswa menyebut topik TP17 mereka. Guru angguk. Tidak mengoreksi.

UCAP: "Story — TP18. What happened? One sentence."
→ Tunggu 1–2 siswa menyebut satu kalimat dari cerita TP18 mereka. Guru angguk.

UCAP: "Description — TP19. What place did you describe?"
→ Tunggu 1–2 siswa menyebut nama tempat TP19 mereka. Guru angguk.

UCAP: "All of these — available today. Use any of them. Or something new."
→ Jeda singkat.
UCAP: "What do YOU want to write?"
→ Jeda 5 detik — biarkan siswa berpikir. Tidak perlu menjawab sekarang. Lanjut ke L4 atau L5.`,
          bantuan         : 'Jika tidak ada yang merespons ke pertanyaan tertentu: terima dengan anggukan, lanjut ke pertanyaan berikutnya. Ini bukan assessment — tidak ada benar atau salah.',
          cue             : 'Review ini bukan re-teaching — ini activating memory. Tiga pertanyaan (opinion topic, story event, description place) mengaktifkan tiga register yang tersedia. Total tidak lebih dari 4 menit. "Or something new." memvalidasi bahwa siswa boleh keluar dari apa yang pernah mereka tulis.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L4 — Demo Guru: Tiga Register, Satu Tulisan  [INPUT · FLEX]
        {
          id              : 'l4',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `UCAP: "Watch me. Three sentences. Three registers. One piece of writing."
→ Guru tidak menulis. Demo lisan sepenuhnya.

👂 LISTEN FIRST — siswa mendengarkan.
UCAP (perlahan, natural):
"Last Saturday I went to the market near my house."
→ Jeda.
"It is always busy and full of colors."
→ Jeda.
"I like it because it reminds me of my grandmother."
→ Jeda.

UCAP: "Three sentences."
→ Tunjuk tiga jari secara berurutan:
"Story. Description. Opinion."
→ Tidak ada label grammar. Tidak ada penjelasan lebih lanjut.
UCAP: "You don't have to use all three. But you can."`,
          bantuan         : null,
          cue             : 'Demo ini adalah satu-satunya momen di seluruh Fase C di mana tiga register muncul dalam satu tulisan. Tiga kalimat — tiga register — satu tulisan yang utuh. "You don\'t have to use all three. But you can." memvalidasi bahwa satu register pun valid, sementara mengundang siswa yang sudah mampu untuk bereksperimen.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika kelas sudah jelas arahnya setelah L3',
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L5 — Commitment: Topik + Register + Satu Kalimat  [INPUT · CORE]
        {
          id              : 'l5',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `UCAP: "Now — write your commitment."
UCAP: "Three things:"
UCAP: "One: your topic."
UCAP: "Two: your register — opinion, story, description, or mix."
UCAP: "Three: your first sentence."
UCAP: "Don't talk yet. Write first."
→ Siswa menulis. Waktu: 3–4 menit.
→ Guru diam. Tidak circulate dulu.`,
          bantuan         : [
            'Jika siswa tidak bisa memilih topik: ucap "What did you write about in TP17? Use that topic. Or try something new." Satu kalimat, tinggalkan.',
            'Jika siswa tidak bisa memilih register: ucap "Pick one from the corner — any one." Tunjuk pojok papan. Tinggalkan.',
            'Jika siswa tidak bisa menulis first sentence: ucap "Write your topic word. Then add \'is\' or \'I went\'." Dua kata, tinggalkan.',
          ],
          cue             : 'Commitment ini adalah fondasi INTERACT L6 — paralel dengan Choice Slip TP16 dan Outline TP18. Tiga elemen (topik + register + satu kalimat) memastikan siswa masuk pair sharing dengan arah yang sudah terbentuk. "Don\'t talk yet. Write first." mencegah pengaruh pasangan sebelum komitmen personal terbentuk.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact: {
            type                    : 'commitment',
            fields                  : ['topik', 'register', 'kalimat_pertama'],
            required_before_interact: true,
          },
        },

        // ── BLOK INTERACT ─────────────────────────────────────────────

        // L6 — Choice Gap: Pair Sharing Komitmen  [INTERACT · CORE]
        {
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Demo — maksimal 30 detik.
👂 LISTEN FIRST — kelas perhatikan.
Guru tunjuk commitment imajiner sendiri, bicara ke satu siswa di depan:
UCAP: "I will write a story about the market — with description and opinion. My first sentence: 'Last Saturday I went to the market near my house.' — What will YOU write?"
→ Siswa menjawab dari commitment mereka.
→ Guru: "Interesting. Why that topic?"
→ Siswa menjawab satu kalimat.
→ Guru (ke kelas): "Now — with your partner."

AKSI: Siswa bekerja berpasangan.
UCAP: "Show your commitment to your partner. Read your three things."
UCAP: "Partner: ask one question — 'Why that topic?' or 'Why that register?'"
→ Siswa pertama share commitment + menjawab pertanyaan. Lalu berganti.
→ Total: 4–5 menit.

AKSI: Guru circulate dan dengarkan.
→ Perhatikan: siapa yang tidak punya first sentence, siapa yang topiknya masih terlalu umum ("anything" atau "something").
→ Untuk siswa yang belum punya first sentence yang konkret: bisik "What is your first sentence? Start with that." Tinggalkan.`,
          bantuan         : 'Jika pasangan tidak tahu harus bertanya apa: ucap "Ask: \'Why did you choose that topic?\'" Satu pertanyaan, tunggu jawaban.',
          cue             : 'Gap ini nyata karena setiap siswa memiliki kombinasi topik + register yang berbeda. Bahkan jika dua siswa memilih topik yang sama, register dan sudut pandang yang berbeda menghasilkan produk yang genuinely berbeda. Pair sharing membantu siswa memverifikasi arah mereka sebelum OUTPUT dimulai.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas.
2. Demo ulang: minta satu siswa membaca tiga elemen commitment mereka keras-keras.
3. Sederhanakan: "Just read your three things to your partner. That is enough."
4. Restart — batasi 60 detik per arah.`,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INTERACT',
          assessment_overlay: {
            recommended: true,
            priority   : 'belum_dinilai',
          },
          interact_contract: {
            gap_type         : 'choice',
            artifact_required: true,
            artifact_type    : 'commitment',
            collapse_signal  : 'pair diam > 90 detik',
          },
          artifact: null,
        },

        // ── BLOK OUTPUT ───────────────────────────────────────────────

        // L7 — Individual Writing: Blok Pertama  [OUTPUT · CORE]
        {
          id              : 'l7',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Brief dan tiga register tetap di papan.
UCAP: "Now — write. Start from your first sentence."
UCAP: "Your topic. Your register. Your words."
→ Jeda.
UCAP: "Write."
→ Siswa menulis secara individual. Waktu: 10 menit.
→ Beri waktu 4 menit start sebelum circulate — ini Panen, siswa butuh ruang untuk menemukan alur tulisan sendiri. Jangan intervensi terlalu awal.

AKSI: Circulate setelah 4 menit.
→ Mulai dari barisan belakang.
→ Perhatikan tiga hal:
   1. Apakah ini produksi baru, atau menyalin dari TP17/18/19? Jika copy: bisik "Same topic — new words? Or try a different angle." Satu kalimat, tinggalkan.
   2. Apakah siswa menggunakan register yang mereka komitkan? Jika switch: boleh — output tetap valid.
   3. Connector dipakai? Jika belum: biarkan. L9 akan address.
→ Untuk siswa yang sudah selesai sebelum 10 menit: bisik "Can you add a second register? Look at the corner." Tunjuk pojok papan.`,
          bantuan         : [
            'Jika siswa freeze: tunjuk commitment L5 mereka, ucap "Write your first sentence — just that one." Tunggu satu kalimat. Tinggalkan.',
            'Jika siswa bertanya "Boleh ganti topik?": jawab "Yes — your choice." Satu kata, lanjut.',
          ],
          cue             : 'Menit 4–7 adalah periode paling produktif di blok ini. Guru yang circulate terlalu awal (menit 1–2) mengganggu proses pembentukan tulisan. Beri ruang — ini sesi yang paling membutuhkan "guru yang tidak mengganggu" di seluruh Fase C.',
          darurat         : '⚠ DARURAT — waktu ≤ 5 menit dan sebagian besar siswa baru menulis 1 kalimat:\nUcap: "Write three sentences. One opinion. One story. One description. Just three — that is your writing." Turunkan target drastis, jangan stop writing.',
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'OUTPUT',
          assessment_overlay: {
            recommended: true,
            priority   : 'barisan_belakang',
          },
          interact_contract: null,
          artifact        : null,
        },

        // L8 — Continuation: Blok Kedua  [OUTPUT · FLEX]
        {
          id              : 'l8',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `UCAP: "Continue. Add more — or start adding connectors."
UCAP: "Can you add a second register? Look at the corner."
→ Tunjuk pojok papan.
→ Siswa melanjutkan menulis. 4–5 menit.
→ Guru circulate — fokus pada siswa yang belum menggunakan dua register atau belum punya minimal 4 kalimat.`,
          bantuan         : null,
          cue             : 'L8 adalah kesempatan siswa untuk melampaui satu register. Ini momen di mana tulisan yang baik bisa menjadi lebih kaya. Tapi jika breakpoint sudah diaktifkan atau waktu tidak cukup, skip tanpa ragu.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika Breakpoint diaktifkan atau waktu tersisa < 10 menit',
          blok            : 'OUTPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L9 — Revisi + Connector Check  [OUTPUT · CORE]
        {
          id              : 'l9',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Guru memberi sinyal untuk berhenti menulis.
UCAP: "Two more minutes. Read your writing."
→ Jeda — biarkan siswa membaca tulisannya sendiri.
UCAP: "Did you use because? And? But? Or so?"
→ Jeda singkat.
UCAP: "Add one connector between two sentences that don't have one yet."
→ Jeda.

AKSI: Circulate — prioritaskan barisan tengah yang belum tersentuh di L7.`,
          bantuan         : 'Jika siswa sudah punya connector di setiap kalimat: ucap "Good. Read it once more. Is there anything you want to change?" Tinggalkan — jangan tambahkan instruksi baru.',
          cue             : '"Add one connector" adalah instruksi minimal — bukan audit seluruh tulisan. Satu connector yang ditambahkan dengan genuine lebih bermakna dari semua connector yang dipaksa. "How you FEEL about this topic" adalah kalimat yang membuat output genuinely personal.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'tunjuk dua kalimat yang berdampingan, bisik "Connect these — use \'and\' or \'because\'." Tunggu siswa menambahkan satu connector. Tinggalkan.',
            sudahBisa   : 'bisik "Can you add how you FEEL about this topic — one sentence? \'I think... because...\' or \'I love it because...\'" Kalimat perasaan yang personal tidak bisa sama antar siswa.',
          },
          flex            : false,
          flex_kondisi    : null,
          blok            : 'OUTPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L10 — Peer Quick Read  [OUTPUT · FLEX]
        {
          id              : 'l10',
          tipe            : 'instruksi',
          interaction_mode: 'peer_review',
          teks            : `AKSI: Siswa bertukar kertas dengan pasangan.
UCAP: "Read your partner's writing. One minute. Silent."
→ Siswa membaca tulisan pasangan. Waktu: 1 menit.

UCAP: "Tell your partner: one thing you want to know more about."
→ Masing-masing satu kalimat ke pasangan. Berganti.
→ Waktu: 30 detik per arah.`,
          bantuan         : 'Jika siswa tidak tahu harus bilang apa: ucap "Say: \'I want to know more about...\'" dan tunjuk satu bagian dari tulisan pasangan. Satu kalimat, tinggalkan.',
          cue             : '"One thing you want to know more about" adalah respons pembaca genuine — bukan evaluasi teknis. Ini mengaktifkan siswa sebagai audiens dari tulisan orang lain, bukan hanya sebagai penulis. Pertanyaan ini juga tidak bisa dijawab tanpa benar-benar membaca.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 8 menit',
          blok            : 'OUTPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

      ],
    },

    // ══════════════════════════════════════════════════════════════════
    // FASE PENUTUP
    // ══════════════════════════════════════════════════════════════════
    {
      fase  : 'Penutup',
      durasi: 11,

      langkah: [

        // L11 — Share Satu Kalimat  [FLEX]
        {
          id              : 'l11',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Siswa duduk di tempat masing-masing dengan tulisan di tangan.
UCAP: "Who wants to share? One sentence from your writing. From your seat."
→ Terima 2–3 sukarela. Masing-masing baca satu kalimat.
→ Setelah setiap kalimat: tunjuk pojok papan — UCAP "Opinion, story, or description?"
→ Kelas menebak secara spontan. Biarkan energy natural muncul.
→ Tidak ada evaluasi dari guru.`,
          bantuan         : 'Jika tidak ada yang sukarela: tunjuk 1–2 siswa yang tadi aktif di INTERACT. Ucap: "[Nama], can you share your first sentence?"',
          cue             : null,
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 5 menit',
          blok            : null,
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        // L12 — Circulate Akhir  [FLEX]
        {
          id              : 'l12',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berjalan pelan ke barisan yang belum sempat dikunjungi.
→ Lihat 2–3 tulisan siswa — tidak perlu komentar panjang.
→ Untuk tulisan yang kuat: angguk atau ucap "Good." (satu kata saja).
→ Untuk tulisan yang sangat minimal: catat nama siswa untuk referensi TP21.`,
          bantuan         : null,
          cue             : null,
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika sudah circulate penuh di L7–L9',
          blok            : null,
          assessment_overlay: {
            recommended: true,
            priority   : 'barisan_belakang',
          },
          interact_contract: null,
          artifact         : null,
        },

        // L13 — Closure  [CORE]
        {
          id              : 'l13',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas.
UCAP: "Today — you wrote."
→ Jeda.
UCAP: "About something that is yours."
→ Jeda.
UCAP: "An opinion. A story. A description. Or all three."
→ Jeda.
UCAP: "That is your writing. Keep it."
→ Jeda singkat.
UCAP: "Next time — we read again."
→ Jeda.
UCAP: "But not a story. Not instructions."
→ Jeda.
UCAP: "Texts you see every day. Outside this classroom."
→ Jeda — biarkan siswa membayangkan.
UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : '"An opinion. A story. A description. Or all three." — merangkum seluruh Kluster E dalam satu kalimat dan memvalidasi semua pilihan register yang dibuat siswa. "Texts you see every day. Outside this classroom." membuka TP21 dengan cara yang membangkitkan imajinasi — siswa mulai membayangkan teks apa yang mereka lihat setiap hari tanpa menyadari mereka sudah membacanya.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : null,
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

      ],
    },

  ],

};

export default tp_c20;

/*
 * =============================================================
 * CATATAN KONVERSI — tp-20-v1.js
 * =============================================================
 *
 * Field yang tidak bisa diisi dari .txt (diisi default):
 *   - indikator[]: derived — .txt tidak punya section "Indikator" eksplisit.
 *     Tiga indikator diturunkan dari tujuan Panen dan instruksi skenario.
 *   - vocab[]: kosong — Panen; .txt menyatakan "tidak ada vocab baru".
 *   - printables[]: kosong — .txt menyatakan "tidak ada kartu, tidak ada
 *     media distribusi."
 *   - deskripsi: derived — diturunkan dari konteks header .txt.
 *   - preOpening.bantuan: null — tidak ada BANTUAN di L0 pada .txt.
 *   - preOpening.cue: null — tidak ada ⚡ Cue kritis di L0 pada .txt.
 *
 * Keputusan ambiguitas:
 *   1. interaction_mode L9 (Revisi + Connector Check): aktivitas utamanya
 *      adalah membaca ulang tulisan sendiri (reflection) lalu menambah
 *      connector (writing). Dipilih 'writing' karena aksi utama yang terukur
 *      adalah penambahan konten, bukan hanya refleksi.
 *
 *   2. interaction_mode L11 (Share Satu Kalimat): aktivitas ini melibatkan
 *      sharing sukarela yang difasilitasi guru. Tidak ada 'sharing' dalam enum
 *      interaction_mode. Dipilih 'teacher_input' karena guru yang mengundang
 *      dan merespons, bukan aktivitas mandiri siswa.
 *
 *   3. L4 blok: ditetapkan 'INPUT' berdasarkan CATATAN RUNTIME GURU di .txt:
 *      "INPUT: L3–L5". Konsisten meski L4 adalah FLEX.
 *
 *   4. preOpening tidak memiliki id: konsisten dengan Fase B v5.0 dan
 *      instruksi Tugas 3 ("preOpening: tidak punya id").
 *
 *   5. assessment_overlay L12 priority: ditetapkan 'barisan_belakang'.
 *      .txt menyebut "Catat siswa yang belum sempat dinilai untuk referensi
 *      TP21" tanpa menyebutkan 'belum_dinilai' atau 'barisan_belakang' secara
 *      eksplisit. Dipilih 'barisan_belakang' karena konteks L12 adalah
 *      circulate ke barisan yang belum sempat dikunjungi — bukan prioritas
 *      siswa yang belum pernah dinilai sama sekali di TP ini.
 *
 * =============================================================
 */
