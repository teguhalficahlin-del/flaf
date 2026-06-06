/**
 * =============================================================
 * FLAF — TP 14 (In the Classroom)
 * File: tp-14-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp14-v2.txt
 * Generated: 2026-05-25
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_14 = {

  id       : 'tp-14',
  pdf_ref  : 'Modul_Ajar_V3_TP14_In_the_Classroom.docx',
  nomor    : 14,
  kelas    : 2,
  nama     : 'In the Classroom',
  tema     : 'Sekolah dan Benda-benda',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat menyebut benda-benda kelas (book, pen, pencil, eraser, ruler, bag, table, chair, whiteboard) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan lokasi benda menggunakan preposisi sederhana (on, in, under, next to).',
    'Peserta didik dapat meminjam benda menggunakan ekspresi "Can I borrow your ...? Sure! / Sorry, I am using it."',
  ],
  vocab    : ['book', 'pen', 'pencil', 'eraser', 'ruler', 'bag', 'whiteboard', 'on', 'in', 'under', 'next to', 'can I borrow'],
  persiapan: ['Kartu benda kelas bergambar 6 benda'],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp14-bag.png',    label: 'Bag' },
    { file: 'tp14-book.png',   label: 'Book' },
    { file: 'tp14-eraser.png', label: 'Eraser' },
    { file: 'tp14-pen.png',    label: 'Pen' },
    { file: 'tp14-pencil.png', label: 'Pencil' },
    { file: 'tp14-ruler.png',  label: 'Ruler' },
  ],

  checklist: [
    'Kartu benda kelas tersedia dan bernomor urut sebelum kelas masuk',
    'Kartu benda kelas tertempel di papan saat akhir sesi untuk referensi penutup',
    'Papan tulis: The ___ is ___ the ___ tertulis sebelum kelas masuk',
    'Benda nyata tersedia: buku, pensil, penghapus, penggaris, tas guru',
    'Layar 0 dilakukan sebelum kelas resmi dimulai',
    'Jika kelas belum fokus di L0: ulangi "Are you ready?" sambil berdiri diam',
    'Guru yang menunjuk dan menyebut di L1 — bukan meminta siswa tebak',
    'Respons bebas L1 diterima tanpa koreksi — boleh Bahasa Indonesia',
    'Satu kata anchor "classroom" diucapkan kelas sekali setelah L1',
    'Guru belum minta kelas produksi di Layar 2',
    'Gestur berbeda: pen = menulis mengalir / pencil = ujung runcing menekan',
    'Contrast drill pen/pencil dilakukan di Layar 3 dengan anchor "ink vs wood"',
    '"Ink vs wood" dipakai sebagai anchor — tidak diexplain artinya',
    'Reactivation gelombang 1 dilakukan sebelum gelombang 2 masuk (15–20 detik, tidak dikoreksi)',
    'Eraser: gestur menghapus besar dan jelas — tangan kiri-kanan di udara',
    'Fase A–B–C Layar 5 dilakukan berurutan: lambat → medium → cepat acak',
    'Pen dan pencil tidak berurutan di Fase C L5',
    'Kartu dilepas dari papan sebelum TPR di Layar 6',
    'Putaran acak L6 maksimal 5 cue — pen dan pencil tidak berurutan',
    'Guru berhenti ikut aksi pada putaran acak L6 untuk cek retrieval mandiri',
    'Tepuk 1 kali freeze sebelum L7 reset',
    'Jeda 3 detik setelah "Stop. Hands down." di L7',
    'Kartu book ditempel kembali sebelum L7',
    'Demonstrasi fisik tiga preposisi dilakukan di L7 dengan benda nyata',
    'Semua modeling posisi terlihat jelas dari belakang kelas',
    'Gestur preposisi konsisten: on = tangan datar di atas / in = tangan masuk / under = tangan ke bawah',
    'Benda fisik selalu digerakkan sebelum kalimat diucapkan di L8',
    'Choral frame penuh dilakukan sebelum fill-in di L8',
    'Guru model permainan dua putaran sebelum whole-class QA drill di L9',
    'Whole-class QA drill "Where is the ___?" dilakukan sebelum demo partner di L9',
    'Partner game L9 memakai satu benda per putaran — bukan beberapa benda sekaligus',
    'Demo partner dilakukan sebelum partner practice',
    'Instruksi listener: "Where is the ___?" diucapkan sebelum partner practice',
    '"Two objects each turn" disampaikan lewat gestur — bukan instruksi verbal',
    'Stop signal dilatih 1x sebelum "Go" di partner practice',
    'Jika waktu ≤10 menit saat L10: skip ke Layar 11 langsung',
    'Tas demonstrasi guru dipakai untuk modeling "in" — siswa cukup satu tas per pasangan',
    'Posisi under tetap terlihat pasangan — tidak disembunyikan terlalu dalam',
    'Checkpoint switch dilakukan di tengah partner practice',
    'Saat circulate L10, guru sesekali model ulang gestur preposisi tanpa menghentikan kelas',
    'Putaran 2 Layar 11 pakai discourse frame — bukan nama benda saja',
    'Retrieval mikro dilakukan sebelum closing',
    'Exit ticket: satu posisi tetap, satu kalimat, 45–60 detik, guru tidak ganti posisi benda',
    'Setiap siswa sudah produksi minimal 1 kalimat "The ___ is ___ the ___."',
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
      'L3 Contrast: pen vs pencil wajib — anchor "ink vs wood" lebih kuat dari penjelasan',
      'L6 TPR: retrieval dari benda nyata di meja — bukan dari kartu',
      'L6 putaran acak: pen dan pencil tidak boleh berurutan — interference tinggi',
      'L7 Reset: wajib — kelas belum tenang = L8 gagal',
      'L10 DARURAT: jika waktu ≤10 menit, skip partner practice — langsung ke L11',
    ],
    autonomy: [
      'Pen vs pencil: gestur berbeda konsisten — pen: tangan bebas / pencil: menekan',
      'Guru tidak ikut di putaran acak L6 — fokus observasi siapa yang tertukar',
      'Jika waktu mepet, L10 partner practice cukup 2 menit',
      'L11: choral retrieval cukup 4–5 benda, tidak semua 6',
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
          teks   : `AKSI: Guru berdiri tengah kelas. Tidak ada kartu dulu.
UCAP: "Look around. What do you see?"
AKSI: Tunggu 2–3 respons bebas. Respons boleh Bahasa Indonesia.
AKSI: Tunjuk meja sendiri, angkat buku.
UCAP: "I see — a book."
AKSI: Tunjuk meja siswa terdekat, tunjuk pensil.
UCAP: "I see — a pencil."
AKSI: Tunjuk sudut kelas, tunjuk tas.
UCAP: "I see — a bag."
UCAP: "These are classroom things. Say it with me — classroom."
→ Kelas: "Classroom."`,
          bantuan: null,
          cue    : 'Guru yang menunjuk dan menyebut — bukan meminta siswa tebak. Ini aktivasi konteks, bukan tes produksi. Respons bebas siswa diterima tanpa koreksi. Satu kata anchor: "classroom" — kelas ucap sekali, cukup.',
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
          teks   : `👂 LISTEN FIRST
AKSI: Tempel 3 kartu satu per satu: book — pen — pencil. Setiap kartu: tunjuk kartu → tunjuk benda nyata di kelas → ucap kata. Satu detik jeda, lanjut.
UCAP: "Listen. My turn."
AKSI: Angkat buku, tunjuk kartu.
UCAP: "Book."
AKSI: Tunjuk pena, gestur menulis mengalir.
UCAP: "Pen."
AKSI: Tunjuk pensil, gestur menulis ujung runcing menekan.
UCAP: "Pencil."
AKSI: Jeda sebentar.
UCAP: "One more time."
AKSI: Ulang sekali.`,
          bantuan: null,
          cue    : 'Pen dan pencil — gestur harus berbeda. Pen: gestur menulis mengalir, tangan bebas. Pencil: gestur menulis dengan ujung runcing, tangan sedikit menekan. Ini anchor contrast drill berikutnya. Guru belum minta kelas produksi di layar ini.',
          darurat: null,
          energi : '🟡',
        },

        // L3 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER
UCAP: "Now together. I point — you say."
AKSI: Tunjuk book.
→ Kelas: "Book!"
AKSI: Tunjuk pen.
→ Kelas: "Pen!" + gestur menulis mengalir.
AKSI: Tunjuk pencil.
→ Kelas: "Pencil!" + gestur ujung runcing menekan.
AKSI: Ulangi sekali lagi, acak 2 kartu.
UCAP: "Watch."
AKSI: Tunjuk kartu pen, gestur menulis mengalir.
UCAP: "Pen — ink."
AKSI: Tunjuk kartu pencil, gestur ujung runcing, tunjuk ujung pensil nyata.
UCAP: "Pencil — wood."
UCAP: "Ready? Which one?"
UCAP: "Ink — show me!"
AKSI: Kelas tunjuk kartu pen.
UCAP: "Wood — show me!"
AKSI: Kelas tunjuk kartu pencil.
AKSI: Ulangi 2 putaran, cepat.`,
          bantuan: 'Jika kelas tertukar pen/pencil: guru tunjuk pensil nyata — "Pencil — longer word, longer thing." — lanjut.',
          cue    : 'Contrast drill pen vs pencil wajib — bunyi dan fungsi paling mirip di gelombang 1. Anchor "ink" vs "wood" lebih kuat dari penjelasan apapun. Jangan explain arti ink/wood — cukup jadi anchor contrast. Guru tidak perlu explain lebih lanjut.',
          darurat: null,
          energi : '🟠',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI — Reactivation (15–20 detik):
UCAP: "Quick check."
AKSI: Tunjuk cepat 3 kartu gelombang 1 berurutan — kelas ucap. Tidak dikoreksi. Tidak diulang. Langsung lanjut.
👂 LISTEN FIRST Gelombang 2
AKSI: Tempel 3 kartu berikutnya: eraser — ruler — bag. Setiap kartu: tunjuk kartu → tunjuk benda nyata → ucap kata.
UCAP: "Listen. My turn."
AKSI: Ambil penghapus, gestur menghapus kiri-kanan di udara.
UCAP: "Eraser."
AKSI: Ambil penggaris, gestur mengukur garis lurus.
UCAP: "Ruler."
AKSI: Tunjuk tas guru, gestur angkat tali tas di bahu.
UCAP: "Bag."
UCAP: "One more time."
AKSI: Ulang sekali.`,
          bantuan: null,
          cue    : 'Reactivation gelombang 1 wajib — 15–20 detik, tidak dikoreksi. Eraser — gestur menghapus harus besar dan jelas: tangan bergerak kiri-kanan di udara. Ini anchor terkuat untuk kata yang bunyinya asing bagi siswa Indonesia.',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER
Fase A — Gelombang 2 saja, lambat:
UCAP: "Together."
AKSI: Tunjuk eraser → ruler → bag. Kelas ucap. Lambat, tidak terburu.
Fase B — Campur 6 kartu, medium:
UCAP: "Now — all together."
AKSI: Tunjuk semua 6 kartu berurutan — medium speed. Kelas ucap.
Fase C — 4 kartu acak, cepat:
UCAP: "Ready?"
UCAP: "Fast — but clear."
AKSI: Pilih 4 kartu acak — tunjuk cepat. Tahan 1 detik sebelum menunjuk kartu berikutnya.`,
          bantuan: 'Jika kelas mulai telat: kurangi tempo, ulangi 2 kartu, lanjut.',
          cue    : 'Jangan letakkan pen dan pencil berurutan di Fase C — interference masih tinggi setelah contrast drill baru selesai. Guru tidak perlu gestur penuh di Fase C — cukup tunjuk kartu, kelas produksi sendiri.',
          darurat: null,
          energi : '🟠',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru lepas kartu dari papan — simpan. Siswa tidak pegang apa-apa.
UCAP: "No cards. Just me and you."
---
→ "Show me book!" → kelas angkat buku masing-masing → "Show me pencil!" → kelas angkat pensil → "Show me eraser!" → kelas angkat penghapus → "Show me bag!" → kelas tunjuk tas → "Show me ruler!" → kelas angkat penggaris → "Show me pen!" → kelas angkat pena
---
AKSI: Putaran acak — maksimal 5 cue. Guru tidak ikut — kelas yang aksi.
UCAP: "My turn to watch. You do it."
→ Pilih 5 cue acak. Jangan letakkan pen dan pencil berurutan.
→ Setelah 5 cue: langsung stop.
---
UCAP: "Stop. Good."`,
          bantuan: 'Jika kelas tertukar pen/pencil: guru berdiri diam, tunjuk pensil nyata — "Pencil." Tunjuk pena — "Pen." Lanjut.',
          cue    : 'Layar ini retrieval dari benda nyata di meja siswa — bukan dari kartu. Guru tidak ikut di putaran acak — guru perlu melihat siapa yang tertukar. Maksimal 5 cue, langsung stop. Pen dan pencil tidak boleh berurutan.',
          darurat: null,
          energi : '🔴',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk 1 kali, kelas freeze.
UCAP: "Stop. Hands down. Sit up."
AKSI: Jeda 3 detik.
UCAP: "Good. Now watch."
AKSI: Tempel kembali kartu book. Ambil buku nyata. Tunjuk papan — The ___ is ___ the ___.
UCAP: "Listen. My turn."
AKSI: Taruh buku di atas meja. Tunjuk kartu book.
UCAP: "On."
AKSI: Gestur tangan datar di atas.
UCAP: "On the table."
AKSI: Taruh buku di dalam tas guru. Tunjuk kartu bag.
UCAP: "In."
AKSI: Gestur tangan masuk ke dalam.
UCAP: "In the bag."
AKSI: Taruh buku di bawah kursi guru. Tunjuk kartu.
UCAP: "Under."
AKSI: Gestur tangan ke bawah.
UCAP: "Under the chair."
UCAP: "One more time."
AKSI: Ulang tiga demonstrasi.`,
          bantuan: null,
          cue    : 'Demonstrasi fisik wajib — bukan hanya ucapkan kata. Setiap preposisi harus punya gestur tangan yang berbeda dan konsisten: on = tangan datar di atas / in = tangan masuk ke dalam / under = tangan ke bawah. Semua modeling posisi harus terlihat dari belakang kelas — gunakan benda besar dan posisi yang jelas. Guru tidak tanya kelas dulu di layar ini.',
          darurat: null,
          energi : '⚪ → 🟡',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Together now. Full sentence." Tunjuk papan: The ___ is ___ the ___. → Taruh buku di atas meja. → Guru: "The book is on the table." → Kelas ulang penuh: "The book is on the table." → Taruh penghapus di dalam tas guru. → Guru: "The eraser is in the bag." → Kelas ulang penuh: "The eraser is in the bag." [Jeda 2 detik] → Taruh penggaris di bawah kursi. → Guru: "The ruler is…" → Tunggu kelas: "…under the chair!" → Taruh pensil di atas buku. → Guru: "The pencil is…" → Kelas: "…on the book!"`,
          bantuan: 'Jika kelas drop "The ___ is" dan hanya ucap preposisi: guru tunjuk papan — "The book is…" — tunggu 2 detik, lanjut choral.',
          cue    : 'Guru selalu gerakkan benda fisik dulu sebelum ucapkan kalimat — benda bergerak adalah cue untuk kelas bahwa kalimat baru akan muncul. Choral frame penuh dulu sebelum fill-in. Tunjuk papan setiap kali kelas mulai drop "The ___ is." Semua modeling posisi harus terlihat dari belakang kelas.',
          darurat: null,
          energi : '🟠',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru sembunyikan penghapus di bawah kursi guru. UCAP: "Where is my eraser?" → Kelas: "Under the chair!" → Guru: "The eraser is under the chair. Yes! Full sentence." → Kelas ulang: "The eraser is under the chair!" Ulangi sekali — taruh penggaris di dalam tas guru. UCAP: "Where is my ruler?" → Kelas: "In the bag!" → Guru: "The ruler is in the bag. Together." → Kelas ulang: "The ruler is in the bag!" Mini whole-class QA drill — sebelum demo partner (1 putaran): UCAP: "Now you ask. Ready?" → Guru taruh buku di atas meja. → Guru: "Ask me." → Kelas bersama: "Where is the book?" → Guru: "The book is on the table!" UCAP: "Good. That's the question. That's the answer." Demo dengan 1 pasang siswa sukarela: "Watch them." → Siswa A sembunyikan pensil di bawah buku. → Siswa B: "Where is the pencil?" → Siswa A: "The pencil is under the book!" → Guru: "Good. Full sentence." Sebelum partner practice — ucapkan hal ini: "Partner voice — not shouting." "Partner A hides the object. Partner B asks: Where is the ___?" "Partner A answers: The ___ is ___ the ___." [tunjuk papan] [Tunjuk 2 benda dengan gestur tangan — tidak diucapkan] Latih stop signal: "When I clap —" [tepuk 1 kali] "— stop." — latih 1x sebelum "Go." UCAP: "Go."`,
          bantuan: 'Jika kelas drop frame dan hanya ucap preposisi: guru tunjuk papan — "The ___ is…" — tunggu 2 detik, tidak hentikan kelas.',
          cue    : 'Guru model permainan dua putaran dulu sebelum whole-class QA drill. Mini QA drill wajib — kelas belum pernah produksi frame pertanyaan secara massal. Demo partner wajib setelah drill. Keep the game moving — one object only. Listener harus bertanya dengan "Where is the ___?" — bukan hanya menebak. "Two objects each turn" lewat gestur — bukan instruksi verbal.',
          darurat: null,
          energi : '🟡',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Siswa pakai benda di meja masing-masing — buku, pensil, penghapus. UCAP: "Use your own things. Partner A hides — Partner B asks and answers." "Full sentence. Go." Checkpoint tengah (±90 detik): [Tepuk 1 kali — freeze] "Switch. Partner B hides now." [Tepuk 1 kali — lanjut]`,
          bantuan: 'Pasangan diam total: dekati, bisik — "Hide your eraser. Now ask: Where is the eraser?" Tidak hentikan kelas.',
          diferensiasi: {
            needHelp: 'Cukup 1 preposisi — on atau in.',
            ready   : 'Pakai 3 preposisi berbeda, ganti benda setiap putaran.',
          },
          cue    : 'Siswa pakai benda nyata di meja sendiri — ini transfer ke konteks real. Gunakan tas demonstrasi guru untuk modeling "in" — siswa cukup pakai satu tas terdekat per pasangan, tidak perlu semua buka tas sendiri. Listener harus bertanya dengan "Where is the ___?" — bukan hanya menebak. Hide — but visible: benda disembunyikan tapi masih terlihat oleh partner. Guru tidak koreksi grammar saat jalan. Saat circulate, sesekali model ulang gestur preposisi tanpa menghentikan kelas.',
          darurat: 'Waktu ≤10 menit: skip ke Layar 11 — lewati partner practice, langsung choral benda kelas.',
          energi : '🔴',
        },

        // L11 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — freeze] UCAP: "Stop. Look here." [Jeda 2 detik] "Together — classroom things." Putaran 1: tempel kembali 6 kartu — tunjuk berurutan — lambat — kelas ucap nama. Putaran 2: guru taruh buku di atas penghapus — kelas ucap frame penuh: "The book is on the eraser!" → taruh pensil di dalam tas → "The pencil is in the bag!" Cukup 2 posisi — tidak semua.`,
          bantuan: null,
          cue    : 'Putaran 2 pakai discourse frame — bukan nama benda saja. Ini menjaga "The ___ is ___ the ___." tetap hidup sebelum exit ticket. Tidak perlu semua kombinasi — 2 contoh cukup.',
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
          teks   : `AKSI: Guru taruh buku di atas penghapus di meja guru — diam, tidak bergerak.
UCAP: "Last. Write one sentence."
AKSI: Jeda sebentar.
UCAP: "The ... is ... the ..."
AKSI: Jeda sebentar.
UCAP: "Look at this."
AKSI: Tunjuk posisi benda.
AKSI: Tunggu 45–60 detik.
UCAP: "Show me."`,
          bantuan: 'Terima: kalimat penuh, frasa parsial ("book on eraser"), atau gambar dengan label posisi. Tidak ada koreksi terbuka.',
          cue    : 'Exit ticket = satu posisi tetap yang guru tunjukkan, satu kalimat, struktur "The ___ is ___ the ___." Guru tidak ganti posisi benda selama siswa menulis. Tidak diperluas.',
          darurat: null,
          energi : '🟡',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI — Retrieval mikro: "One more time — show me your book!" → Kelas angkat buku + ucap "Book!" "Show me your pencil!" → Kelas angkat pensil + ucap "Pencil!" AKSI: Tunjuk semua 6 kartu cepat — kelas ucap nama bersama. UCAP: "Today — classroom things. The book is on the table. The eraser is in the bag. Well done. See you next time."`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_14;
