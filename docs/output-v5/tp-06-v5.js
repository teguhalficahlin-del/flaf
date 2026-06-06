/**
 * =============================================================
 * FLAF — TP 6 (Shapes)
 * File: tp-06-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp06-v2.txt
 * Generated: 2026-05-25
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_06 = {

  id       : 'tp-06',
  pdf_ref  : 'Modul_Ajar_V3_TP06_Shapes.docx',
  nomor    : 6,
  kelas    : 1,
  nama     : 'Shapes',
  tema     : 'Dunia di Sekitar Kita',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat menyebut nama bentuk dasar (circle, square, triangle, rectangle, star, heart) dengan lafal yang benar.',
    'Peserta didik dapat mengidentifikasi bentuk dalam gambar dan benda nyata serta menyatakan "This is a ..." atau "I see a ...".',
    'Peserta didik dapat mendeskripsikan benda menggunakan kombinasi warna dan bentuk: "The circle is red", "I have a blue square".',
  ],
  vocab    : ['circle', 'square', 'triangle', 'rectangle', 'star', 'heart',
              'diamond', 'oval', 'shape', 'this is', 'I see'],
  persiapan: ['Kartu bentuk bergambar 6 bentuk'],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp06-circle.png',    label: 'Circle' },
    { file: 'tp06-heart.png',     label: 'Heart' },
    { file: 'tp06-rectangle.png', label: 'Rectangle' },
    { file: 'tp06-square.png',    label: 'Square' },
    { file: 'tp06-star.png',      label: 'Star' },
    { file: 'tp06-triangle.png',  label: 'Triangle' },
  ],

  checklist: [
    'Kartu bentuk berwarna x6 (circle/square/triangle/rectangle/star/heart) tersedia sebelum kelas masuk',
    'Kartu bentuk belum ditunjukkan saat Layar 0',
    'Layar 0 dilakukan sebelum kelas resmi dimulai',
    'Jika kelas belum fokus: ulangi "Are you ready?" sambil berdiri diam (Layar 0)',
    'Gesture tangan bentuk dilakukan bersamaan dengan menyebut nama — sebelum kartu (Layar 1)',
    'Tunggu siswa bentuk tangan sendiri saat "what shape?" sebelum konfirmasi (Layar 1)',
    'Pause 1 detik setelah setiap bentuk saat modeling BATCH 1 dan BATCH 2 (Layar 3)',
    'Freeze mini 3 detik antara BATCH 1 dan BATCH 2 (Layar 3)',
    'Putaran "Slow voice" dilakukan setelah Full 6 (Layar 3)',
    'Sesekali putar atau ubah tinggi kartu saat surprise — cegah hafal pola gerak (Layar 4)',
    'Demo aturan dan demo permainan tebak gambar dilakukan sebelum mulai (Layar 5)',
    'Jika waktu ≤10 menit saat masuk Layar 5: lewati tebak gambar, lanjut ke Layar 7',
    'Tebak gambar dibatasi 4–5 bentuk saja (Layar 6)',
    'Prioritas tebak gambar: circle/triangle/square — heart opsional (Layar 6)',
    'Berhenti sesekali dan lihat kelas sebelum lanjut gambar (Layar 6)',
    'Reset 5 detik di akhir Layar 6 sebelum masuk Layar 7 (Layar 6)',
    'Ladder mini dua kata dulu sebelum model full sentence (Layar 7)',
    'Kurangi scaffold bertahap di kartu ke-3/4 (Layar 7)',
    'Tas ditutup dan diletakkan sebelum siswa lanjut (Layar 8)',
    'Guru demo dulu sebelum siswa cari bentuk di tas (Layar 8)',
    'Terima closest shape untuk benda ambigu — jangan debat (Layar 8)',
    '"Small voice" dimodelkan sebelum partner practice (Layar 9)',
    'Demo switch A→B sebelum partner practice dimulai (Layar 9)',
    'Diferensiasi dibatasi 30–45 detik (Layar 9)',
    'Review dibatasi 5–6 benda — pola: cepat → cepat → pause → cepat lagi (Layar 10)',
    '"Soft goodbye" dimodelkan sebelum chorus penutup (Layar 12)',
    'Kumpulkan kartu bentuk setelah sesi selesai',
    'Siswa tutup tas setelah sesi selesai',
    'Catat siswa yang kesulitan bentuk (triangle/rectangle tertukar)',
    'Catat siswa yang tidak bisa identifikasi bentuk di benda nyata',
    'Catat siswa yang belum bisa gabung warna + bentuk',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🟡',
    'L2 ⚪',
    'L3 🟡',
    'L4 🟠',
    'L5 ⚪',
    'L6 🟠',
    'L7 🟡',
    'L8 🟡',
    'L9 🟡',
    'L10 🟠',
    'L11 🔵',
    'L12 🔵',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L3: pause 1 detik setelah tiap bentuk saat modeling',
      'L4: sesekali putar atau ubah tinggi kartu — cegah hafal pola gerak',
      'L6: prioritas circle/triangle/square — heart opsional',
      'L7: ladder mini dulu (dua kata) — kurangi scaffold bertahap di kartu ke-3/4',
      'L8: tas harus ditutup — terima closest shape untuk benda ambigu',
      'L9: demo switch sebelum mulai — one turn each only',
      'L10: pola cepat → cepat → pause → cepat lagi',
    ],
    autonomy: [
      'Persingkat L3 jika kelas sudah kenal bentuk',
      'Skip L6 jika waktu mepet',
      'Skip L9 jika waktu terbatas',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Kartu bentuk belum ditunjukkan. Tunggu semua duduk tenang. UCAP: "Good morning, everyone! How are you today?" AKSI: Tunggu respons kelas. UCAP: "I'm fine, thank you!" UCAP: "Today — shapes are everywhere!" UCAP: "Are you ready?" AKSI: Tunggu respons — berdiri diam jika kelas belum fokus.`,
    bantuan: null,
    cue    : 'Layar ini pendek dan wajib. Jangan tunjukkan kartu atau mulai tunjuk benda di kelas sebelum Layar 1. Jika kelas belum fokus: ulangi "Are you ready?" sambil berdiri diam.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L1 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunggu semua duduk tenang. UCAP: "Good morning!" "Shapes are everywhere!" AKSI: Tunjuk papan tulis — gerakkan tangan membentuk persegi panjang di udara. UCAP: "Look — the board. Rectangle!" AKSI: Tunjuk jam dinding — gerakkan tangan membentuk lingkaran. UCAP: "The clock. Circle!" AKSI: Tunjuk pintu. UCAP: "The door — what shape?" UCAP: "Show me with your hands!" → Siswa bentuk tangan → guru konfirmasi: "Yes — rectangle!"`,
          bantuan: null,
          cue    : 'Gesture tangan bentuk dilakukan bersamaan dengan menyebut nama — sebelum kartu dikeluarkan. Tunggu siswa bentuk tangan sendiri saat "what shape?" sebelum konfirmasi.',
          darurat: null,
          energi : '🟡',
        },

        // L2 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Ambil kartu bentuk pertama. Tunjuk ke kelas. UCAP: "Today — six shapes!" "Let us see them all."`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '⚪',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,  // TODO: verifikasi

      langkah: [

        // L3 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tempel kartu di papan — dua batch. 👂 LISTEN FIRST — BATCH 1 AKSI: Bentuk tangan bulat — pause 1 detik. UCAP: "Circle." AKSI: Bentuk tangan kotak — pause 1 detik. UCAP: "Square." AKSI: Bentuk tangan segitiga — pause 1 detik. UCAP: "Triangle." 🗣 TOGETHER → Siswa: "Circle! Square! Triangle!" --- UCAP: "Hands down." UCAP: "Look." AKSI: Freeze mini 3 detik. 👂 LISTEN FIRST — BATCH 2 AKSI: Bentuk tangan persegi panjang — pause 1 detik. UCAP: "Rectangle." AKSI: Bentuk tangan bintang — pause 1 detik. UCAP: "Star." AKSI: Bentuk tangan hati — pause 1 detik. UCAP: "Heart." 🗣 TOGETHER → Siswa: "Rectangle! Star! Heart!" --- 🗣 FULL 6 UCAP: "All together!" → Siswa: "Circle! Square! Triangle! Rectangle! Star! Heart!" 🔁 Putaran kedua: "Slow voice!"`,
          bantuan: [
            'Jika diam: bentuk tangan + ucap "Cir-..." menggantung → tunggu.',
            'Jika salah: bentuk tangan lebih jelas → model ulang.',
          ],
          cue    : 'Pause 1 detik setelah setiap bentuk saat modeling. Freeze mini 3 detik antara BATCH 1 dan BATCH 2. Slow voice menjaga artikulasi lebih baik dari whisper.',
          darurat: null,
          energi : '🟡',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk kartu kiri ke kanan — satu putaran predictable. UCAP: "What shape?" [siswa jawab bersama] AKSI: Sebelum surprise: → "Hands on knees." → "Eyes ready." [Reset 3 detik] UCAP: "Now — surprise cards!" AKSI: Tunjuk 4–5 kartu acak cepat. 🔁 Sesekali putar kartu atau ubah tinggi saat menunjuk.`,
          bantuan: 'Jika diam: bentuk tangan → ucap suku kata pertama → tunggu.',
          cue    : 'Sesekali putar atau ubah tinggi kartu — cegah siswa hafal pola gerak guru, bukan bentuknya.',
          darurat: null,
          energi : '🟠',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan sekali. UCAP: "Hands down." UCAP: "Eyes on me." AKSI: Gambar bentuk di udara sebagai gesture visual instruksi. UCAP: "Now — a guessing game!" UCAP: "I draw slowly. You guess." UCAP: "Hands up. Mouth closed." --- AKSI: Demo aturan: → Angkat tangan sambil tutup mulut → "Like this." --- AKSI: Demo permainan: → Gambar lingkaran perlahan → siswa angkat tangan diam → pilih siswa → siswa jawab. UCAP: "Ready?"`,
          bantuan: null,
          cue    : 'Gambar bentuk di udara sambil ucapkan instruksi — gesture visual membantu pemahaman. Demo aturan dan demo permainan wajib dilakukan sebelum mulai.',
          darurat: 'Waktu ≤10 menit → lewati tebak gambar, lanjut ke Layar 7 (Warna + Bentuk).',
          energi : '⚪',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Gambar bentuk perlahan — satu garis per detik. 🔁 4–5 bentuk saja. UCAP: "What is it?" → Siswa angkat tangan → jawab nama bentuk. AKSI: Sesekali berhenti → lihat kelas → pilih siswa → baru lanjut gambar. AKSI: Setelah selesai — reset sebelum masuk Layar 7: → "Stand still." → "Deep breath." → "Sit nicely." [Reset 5 detik]`,
          bantuan: [
            'Jika tidak ada yang menjawab: selesaikan gambar → bentuk tangan → tunggu.',
            'Jika chaos: "Hands up. Mouth closed." → reset → lanjut.',
          ],
          cue    : 'Prioritas: circle, triangle, square — paling mudah dikontrol sambil awasi kelas. Heart opsional — gunakan hanya jika kelas masih terkendali. Berhenti sesekali dan lihat kelas sebelum lanjut gambar.',
          darurat: null,
          energi : '🟠',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk kartu bentuk berwarna di papan. UCAP: "Now — colour and shape!" AKSI: Ladder mini dulu: → Tunjuk lingkaran merah → "Red circle." → siswa ulang. → Guru model: "I see a red circle." → Tunjuk kotak biru → "Blue square." → siswa ulang. → Guru model: "I see a blue square." --- AKSI: Kartu ke-3/4 — tunjuk cepat: "Yellow triangle?" → biarkan siswa isi sendiri. [Kurangi support bertahap — tidak semua perlu full scaffold.] → Siswa: "Red circle!" atau "I see a red circle!" [Target utama: dua kata (colour + shape) — kalimat penuh = bonus — terima jawaban partial.]`,
          bantuan: 'Jika diam: tunjuk warna → "Red..." → tunjuk bentuk → "Circle..." → sambungkan.',
          cue    : 'Ladder mini dua kata dulu sebelum model full sentence. Kurangi scaffold bertahap di kartu ke-3/4. Target utama dua kata: colour + shape.',
          darurat: null,
          energi : '🟡',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Open bag slowly." UCAP: "One thing only." UCAP: "No talking." UCAP: "Close the bag." UCAP: "Freeze." UCAP: "Bag down." AKSI: Tunggu — tas harus ditutup dan diletakkan sebelum lanjut. --- AKSI: Guru demo dulu: "My eraser — rectangle!" UCAP: "What shape is it?" UCAP: "Best shape — closest shape." AKSI: Terima jawaban paling dekat untuk benda ambigu — jangan debat. → Siswa: "[Bentuk]!" [satu kata bentuk sudah cukup]`,
          bantuan: [
            'Jika diam: tunjuk benda siswa → bentuk tangan → ucap suku kata pertama → tunggu.',
            'Jika tidak tahu: tunjuk kartu yang mirip di papan → ajak pilih.',
          ],
          cue    : 'Tas harus ditutup dan diletakkan sebelum lanjut — fokus ke speaking. Guru demo dulu sebelum siswa cari benda. Terima closest shape untuk benda ambigu — jangan debat.',
          darurat: null,
          energi : '🟡',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Show me your empty hands." UCAP: "Eyes here." UCAP: "Turn to your partner." UCAP: "Small voice." AKSI: Guru model volume kecil. --- AKSI: Demo switch 10 detik: → A bicara → "Switch." → B bicara. --- UCAP: "One turn each only." UCAP: "Show one thing. Say the shape. Switch." UCAP: "3… 2… 1… eyes here."`,
          bantuan: null,
          diferensiasi: {
            needHelp: 'Satu kata saja "Circle!" — boleh lihat kartu di papan — guru bantu bentuk tangan.',
            ready   : 'Kalimat penuh "This is my eraser. It is a rectangle." — tambah warna "My red eraser is a rectangle." — tanya partner "What shape is it?"',
          },
          cue    : 'Demo switch A→B sebelum mulai. Aktivitas ini hanya 30–45 detik — jaga tempo.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L10 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk benda di kelas — variasi pola respons dan tempo. 🔁 5–6 benda. Pola: cepat → cepat → pause → cepat lagi. UCAP: "What shape?" [siswa jawab lisan — cepat] "Find rectangle!" [siswa tunjuk — cepat] [Pause 2 detik] "Show me circle!" [siswa tunjuk — lanjut]`,
          bantuan: 'Jika diam: bentuk tangan → ucap suku kata pertama → tunggu.',
          cue    : null,
          darurat: null,
          energi : '🟠',
        },

        // L11 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk kartu bentuk di papan. UCAP: "Which shape do you like best?" "Point to a card!" AKSI: Guru demo: tunjuk kartu bintang → "I like the star." → Siswa tunjuk satu kartu favorit — cukup menunjuk, tidak wajib ucapkan.`,
          bantuan: 'Jika bingung: tunjuk dua kartu → "This one? Or this one?"',
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

        // L12 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Hands down." UCAP: "Quiet voice." AKSI: Lambaikan tangan. UCAP: "Excellent! You know your shapes!" UCAP: "Soft goodbye..." AKSI: Guru ucap pelan sebagai model, siswa ikut. UCAP: "Goodbye, everyone!" UCAP: "See you next time!" 🗣 TOGETHER → Siswa: "Goodbye, teacher! See you!"`,
          bantuan: 'Jika diam: lambai tangan → "Good-bye..." menggantung.',
          cue    : 'Ucapkan "Soft goodbye" dulu sebelum chorus — set volume penutup yang tenang.',
          darurat: null,
          energi : '🔵',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Kumpulkan dan simpan semua material: → Kumpulkan kartu bentuk → Siswa tutup tas --- AKSI: Catat siswa yang: → Kesulitan bentuk — triangle/rectangle sering tertukar → Tidak bisa identifikasi bentuk di benda nyata → Belum bisa gabung warna + bentuk`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_06;
