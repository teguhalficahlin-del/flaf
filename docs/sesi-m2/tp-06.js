/**
 * =============================================================
 * FLAF — TP 06 (Shapes)
 * File: data/tp-06.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Sesi M2 — Mei 2026
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[5] (v3)
 *
 * KARAKTER KHAS TP 06 (lihat COMPARISON-M2):
 *   - Visual recognition bentuk geometris
 *   - Menggambar bentuk di udara (TPR) — bukan di kertas
 *   - Integrasi dengan benda nyata di kelas (pintu, jam, papan)
 *   - Bonus: gabungan warna + bentuk (kombinasi TP 05 + TP 06)
 *   - 6 bentuk dasar fokus: circle, square, triangle, rectangle, star, heart
 *
 * KEPUTUSAN MIGRASI:
 *   - Menggambar bentuk → `tpr_action` di udara, BUKAN di kertas
 *     → Zero-cost media, kinestetik tinggi, konsisten dengan TP 03
 *     → Tidak perlu schema extension untuk "drawing"
 *   - Permainan "guru gambar perlahan di papan" → game_movement
 *     (anak coba tebak — engaging tapi tidak kompetitif individual)
 *   - Show & tell bentuk dari tas → pair_work cooperative
 *   - Aktivitas integrasi warna + bentuk = bonus untuk mode tantangan
 *   - Closure reinforcement WAJIB di akhir Penutup (v4.3)
 *
 * PERUBAHAN SUBSTANSI dari v3:
 *   1. Menggambar bentuk dirancang sebagai TPR di udara
 *      (di v3 tidak eksplisit; menjadi visual recognition murni)
 *   2. Show and tell benda dari tas diformat sebagai pair_work
 *      (di v3 bentuknya tampil ke seluruh kelas)
 *   3. Gabungan warna + bentuk tetap ada di mode normal/tantangan
 *      (di v3 jadi aktivitas terpisah; di v4 jadi bagian Inti)
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - Konsisten dengan TP 03 (TPR) + TP 05 (visual identification)
 * =============================================================
 */

const TP_06 = {

  // ════════════════════════════════════════════════════════════
  // IDENTITAS
  // ════════════════════════════════════════════════════════════

  id       : 'tp-06',
  nomor    : 6,
  kelas    : 1,
  nama     : 'Shapes',
  tema     : 'Dunia di Sekitar Kita',
  deskripsi: `Peserta didik mengenal bentuk geometri dasar dalam bahasa Inggris
    dan menghubungkannya dengan benda-benda nyata di sekitar mereka.`,

  indikator: [
    'Peserta didik dapat menyebut nama bentuk dasar (circle, square, triangle, rectangle, star, heart) dengan lafal yang benar.',
    'Peserta didik dapat mengidentifikasi bentuk dalam gambar dan benda nyata serta menyatakan "This is a ..." atau "I see a ...".',
    'Peserta didik dapat mendeskripsikan benda menggunakan kombinasi warna dan bentuk: "The circle is red", "I have a blue square".',
  ],

  vocab: ['circle', 'square', 'triangle', 'rectangle', 'star', 'heart',
          'shape', 'this is', 'I see'],

  persiapan: ['Kartu bentuk berwarna', 'Benda berbentuk dari kelas/tas siswa'],

  // ════════════════════════════════════════════════════════════
  // MEDIA
  // ════════════════════════════════════════════════════════════

  media: [
    {
      id              : 'media-kartu-bentuk',
      nama            : 'Kartu Bentuk Dasar',
      tipe            : 'kartu_cetak',
      printable       : true,
      pdf_ref         : 'tp-06-v1.pdf',
      pdf_halaman     : 1,
      reusable_lintas_tp : true,
      keterangan      : '6 kartu A5: circle, square, triangle, rectangle, star, heart. Berwarna (cocok untuk integrasi TP 05 colours).',
    },
    {
      id              : 'media-benda-bentuk-kelas',
      nama            : 'Benda Berbentuk di Kelas',
      tipe            : 'objek_fisik',
      printable       : false,
      reusable_lintas_tp : true,
      keterangan      : 'Pintu (rectangle), jam (circle), papan (rectangle), buku (rectangle), penghapus, dll — tunjukkan saat mengajar',
    },
  ],

  // ════════════════════════════════════════════════════════════
  // SKENARIO
  // ════════════════════════════════════════════════════════════

  skenario: [

    // ──────────────────────────────────────────────────────────
    // FASE PEMBUKA — 10 menit
    // ──────────────────────────────────────────────────────────

    {
      fase  : 'Pembuka',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp06-pembuka-look-around',
          tipe  : 'meaningful_link',
          judul : 'Sapa & Look Around',
          pm    : 'mindful',

          tujuan_komunikasi : 'Sapa kelas + ajak siswa sadar bentuk ada di sekitar',
          vocab_target      : ['shape'],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Sapa kelas. Beri tahu hari ini belajar bentuk. Tanya: "Look around! What do you see?"',
            selama  : 'Tunjuk benda nyata: pintu (rectangle), jam (circle), papan (rectangle). Beri nama bentuk dalam Inggris.',
            penutup : 'Konfirmasi: "Yes! Shapes are everywhere!"',
          },

          audio_cue: {
            contoh_guru  : 'Hello class! Can you see shapes around you? Look around! What do you see?',
            contoh_siswa : 'Door! Clock! Window!',
            target_vocab : ['shape', 'door', 'clock', 'window'],
          },

          media_dipakai : ['media-benda-bentuk-kelas'],

          mode: {
            mudah: {
              bantuan: 'Tunjuk 2 benda saja (pintu + jam). Beri nama bentuknya pelan. Siswa boleh tunjuk balik.',
              panjang_speaking: 'Cukup tunjuk benda yang familiar.',
            },
            normal: {
              bantuan: 'Tunjuk 4-5 benda di kelas. Tanya "what shape?" untuk masing-masing.',
              panjang_speaking: 'Nama bentuk untuk tiap benda.',
            },
            tantangan: {
              bantuan: 'Siswa tunjuk benda mereka sendiri di kelas dan sebut bentuknya.',
              panjang_speaking: 'Siswa proaktif tunjuk + sebut bentuk.',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_ribut : 'Mulai pelan. "Look at the door!" — semua harus melihat pintu dulu sebelum lanjut.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp06-pembuka-kenalkan-kartu',
          tipe  : 'modeling',
          judul : 'Kenalkan 6 Bentuk Dasar',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa mengenal 6 bentuk dasar dengan visual kartu',
          vocab_target      : ['circle', 'square', 'triangle', 'rectangle', 'star', 'heart'],

          durasi_target_detik : 300,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Tunjukkan kartu bentuk satu per satu. JANGAN sebut dulu. Biarkan siswa tebak.',
            selama  : 'Setelah tebakan, konfirmasi dalam Inggris. Tempel di papan.',
            penutup : '6 kartu di papan. Tunjuk berurutan, kelas ucap bersama.',
          },

          audio_cue: {
            contoh_guru  : 'What shape is this? Do you know?',
            contoh_siswa : 'Circle! Square! Triangle!',
            target_vocab : ['circle', 'square', 'triangle', 'rectangle', 'star', 'heart'],
          },

          media_dipakai : ['media-kartu-bentuk'],

          mode: {
            mudah: {
              bantuan: '4 bentuk dasar dulu (circle, square, triangle, rectangle). Star + heart diperkenalkan tapi tidak ditarget hafal.',
              panjang_speaking: 'Per bentuk satu per satu.',
            },
            normal: {
              bantuan: '6 bentuk lengkap. Tunjuk → tebak → konfirmasi.',
              panjang_speaking: '6 bentuk berurutan.',
            },
            tantangan: {
              bantuan: 'Tunjuk acak. Tanya: "Where do you see [shape]?" — siswa cari di kelas.',
              panjang_speaking: 'Nama bentuk + tunjuk contoh di kelas.',
            },
          },

          observation: { aktif: false },

          fallback: {
            media_tidak_tersedia : 'Gambar bentuk besar di papan tulis. Tunjuk dengan jelas.',
            siswa_pasif          : 'Beri 1 kartu ke siswa, dia tunjuk ke kelas.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'audio',     teks: 'Hello class! Can you see shapes around you? Look around! What do you see?' },
        { tipe: 'instruksi', teks: 'Tunjuk benda di kelas — pintu (rectangle), jam (circle), papan tulis (rectangle). Tanya siswa bentuknya apa.' },
        { tipe: 'audio',     teks: 'What shape is the door? What shape is the clock?' },
      ],
    },

    // ──────────────────────────────────────────────────────────
    // FASE INTI — 30 menit
    // ──────────────────────────────────────────────────────────

    {
      fase  : 'Inti',
      durasi: 30,

      aktivitas: [
        {
          id    : 'tp06-inti-pola-bentuk',
          tipe  : 'chorus',
          judul : 'Pola "This is a ___" untuk Bentuk',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa hafal pola jawab pertanyaan tentang bentuk',
          vocab_target      : ['this is', 'circle', 'square', 'triangle', 'rectangle'],

          durasi_target_detik : 300,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Tunjuk kartu. Tulis pola di papan: "This is a ___." Ucap pola dulu, kelas ulang.',
            selama  : 'Ulang 2x per bentuk. Variasi: "This is a circle." "What is this? It is a square!"',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'What is this? This is a circle. What is this? This is a square.',
            contoh_siswa : 'This is a circle! This is a square!',
            target_vocab : ['this is', 'circle', 'square', 'triangle', 'rectangle', 'star', 'heart'],
          },

          media_dipakai : ['media-kartu-bentuk'],

          mode: {
            mudah: {
              bantuan: '4 bentuk. Ulang 3x per bentuk. Boleh pakai pola pendek: "Circle!" sebelum pola lengkap.',
              panjang_speaking: 'Nama bentuk atau pola lengkap.',
            },
            normal: {
              bantuan: '6 bentuk. Pola lengkap. Acak urutan.',
              panjang_speaking: '"This is a [shape]."',
            },
            tantangan: {
              bantuan: 'Tambah: "I see a [shape]." sebagai variasi. Siswa pilih cara jawab.',
              panjang_speaking: '2 variasi cara jawab.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['vocab_use', 'response'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'akurasi',
          },

          fallback: {
            siswa_pasif : 'Per baris. Tiap baris dapat 1 bentuk.',
          },

          advance: { mode: 'manual' },
        },

        // ─── TPR di udara: gambar bentuk dengan tangan ───
        {
          id    : 'tp06-inti-tpr-gambar-udara',
          tipe  : 'tpr_action',
          judul : 'TPR: Gambar Bentuk di Udara',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa hubungkan instruksi verbal dengan gerakan tangan membentuk bentuk',
          vocab_target      : ['circle', 'square', 'triangle', 'rectangle'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Stand up! Use your hands to draw shapes in the air with me!"',
            selama  : 'Ucap bentuk + lakukan gerakan tangan besar di udara. Siswa ikuti. Ulang 4-6 bentuk.',
            penutup : '"Wonderful drawing! Sit down."',
          },

          audio_cue: {
            contoh_guru  : 'Draw a circle in the air! Draw a square! Draw a triangle!',
            contoh_siswa : '',  // TPR — siswa BERTINDAK, tidak ucap
            target_vocab : ['circle', 'square', 'triangle', 'rectangle'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Pelan dan besar. Guru contoh dulu gerakan tangan untuk setiap bentuk. 4 bentuk dasar saja.',
              panjang_speaking: 'Tidak ada — aksi fisik.',
            },
            normal: {
              bantuan: '6 bentuk. Guru contoh setengah, lalu hanya ucap (tanpa gestur) untuk paruh kedua.',
              panjang_speaking: 'Tidak ada — aksi fisik.',
            },
            tantangan: {
              bantuan: 'Ucap berturut-turut tanpa contoh: "Triangle, circle, square!" — siswa harus ingat urutan gambar.',
              panjang_speaking: 'Tidak ada — aksi fisik.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 3,
            indikator       : ['response', 'participation'],
            rotasi_priority : 'belum_observed',
          },

          fallback: {
            siswa_pasif    : 'Per baris: baris depan gambar dulu, baris belakang amati. Lalu tukar.',
            energi_turun   : 'Buat lebih besar dan dramatis. "Draw a HUGE circle!" Pakai seluruh tubuh.',
            kelas_ribut    : 'Mulai dengan bisik. Bentuk yang dramatis menarik perhatian kembali.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp06-inti-game-tebak',
          tipe  : 'game_movement',
          judul : 'Permainan Tebak Bentuk',
          pm    : 'joyful',
          flags : ['kompetitif_safety'],

          tujuan_komunikasi : 'Siswa identifikasi bentuk sebelum gambar selesai',
          vocab_target      : ['circle', 'square', 'triangle', 'rectangle', 'star', 'heart'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"I will draw a shape — guess it BEFORE I finish! Who is fast?"',
            selama  : 'Gambar pelan di papan, satu garis per detik. Siswa angkat tangan begitu yakin. Beri kesempatan tebak.',
            penutup : '"Wow, you are fast guessers!"',
          },

          audio_cue: {
            contoh_guru  : 'What is it? Watch carefully!',
            contoh_siswa : 'Triangle! Star! Heart!',
            target_vocab : ['circle', 'square', 'triangle', 'rectangle', 'star', 'heart'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Bentuk yang dipilih cuma 4 dasar. Gambar pelan, tunggu sampai banyak tangan diangkat baru pilih satu untuk jawab.',
              panjang_speaking: 'Nama bentuk saja.',
            },
            normal: {
              bantuan: '6 bentuk. Gambar tempo normal. Pilih siswa pertama yang angkat tangan.',
              panjang_speaking: '"It is a [shape]!"',
            },
            tantangan: {
              bantuan: 'Gambar cepat, hanya 2-3 garis. Yang salah duduk dulu sebentar (game elimination ringan).',
              panjang_speaking: 'Cepat + tepat.',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_ribut    : 'Stop. Gambar lebih pelan. Yang ribut tidak dapat giliran.',
            siswa_pasif    : 'Untuk siswa yang tidak pernah angkat tangan, panggil langsung dengan ramah saat bentuk sederhana muncul.',
            waktu_mepet    : 'Cukup 4 putaran. Lanjut ke aktivitas berikutnya.',
          },

          advance: { mode: 'timer_visible_only' },
        },

        // ─── Pair work: cari bentuk dari tas (cooperative) ───
        {
          id    : 'tp06-inti-pair-cari-bentuk',
          tipe  : 'pair_work',
          judul : 'Pair Work — Cooperative: Cari Bentuk di Tas',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa cari benda berbentuk + share dengan pasangan',
          vocab_target      : ['this is', 'circle', 'square', 'triangle', 'rectangle'],

          durasi_target_detik : 360,  // 6 menit
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Look in your bag! Find 3 things with shapes. Show your partner: This is a [shape]!"',
            selama  : 'Demo dengan 1 siswa dulu. Siswa praktik berpasangan. Berkeliling pantau.',
            penutup : '"Stop. Show me — who found a triangle?"',
          },

          audio_cue: {
            contoh_guru  : 'Find 3 things. Tell your partner: This is a [shape]!',
            contoh_siswa : 'This is a rectangle (my book). This is a circle (my eraser).',
            target_vocab : ['this is', 'circle', 'square', 'triangle', 'rectangle'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Demo 2x. Cukup cari 1-2 benda. Boleh hanya sebut bentuk tanpa pola lengkap.',
              panjang_speaking: 'Nama bentuk + tunjuk benda.',
            },
            normal: {
              bantuan: 'Demo 1x. 3 benda dalam pola lengkap.',
              panjang_speaking: '"This is a [shape]" untuk 3 benda.',
            },
            tantangan: {
              bantuan: 'Tambah warna: "This is a blue square." Integrasi TP 05 + TP 06.',
              panjang_speaking: 'Warna + bentuk + benda.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 3,
            indikator       : ['participation', 'confidence', 'vocab_use'],
            rotasi_priority : 'belum_speaking_turn',
          },

          fallback: {
            pair_tidak_jalan : 'Demo 1 pasangan di depan kelas. Beri 30 detik, coba lagi.',
            siswa_pasif      : 'Siswa diam gabung dengan pasangan aktif. Atau guru jadi partner.',
            kelas_ribut      : 'Semua duduk. Cari hanya dengan teman sebangku.',
            waktu_mepet      : 'Cukup 1-2 benda per siswa. Lanjut.',
          },

          advance: { mode: 'timer_visible_only' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Tempel kartu bentuk di papan. Tunjuk, ucapkan bersama. [What shape is this? Circle!]' },
        { tipe: 'audio',     teks: 'Circle. Square. Triangle. Rectangle. Star. Heart.' },
        { tipe: 'instruksi', teks: 'Permainan tebak bentuk: guru gambar bentuk perlahan di papan (satu garis per detik), siswa tebak sebelum selesai. [What is it?]' },
        { tipe: 'instruksi', teks: 'Gabungkan warna + bentuk. Guru tunjuk kartu, siswa buat kalimat. [The circle is red! The square is blue!]' },
        { tipe: 'audio',     teks: 'I see a red circle. I see a blue square. I see a yellow triangle.' },
        { tipe: 'instruksi', teks: 'Siswa cari 3 benda berbentuk dari tas/kelas mereka, sebut ke teman. [What shape is your eraser?]' },
        { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: buat kalimat gabungan warna + bentuk + benda "My red eraser is a rectangle". Belum bisa: cukup sebut nama bentuk saja.' },
        { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati aktivitas mencari benda, langsung review 5 bentuk di penutup.' },
      ],
    },

    // ──────────────────────────────────────────────────────────
    // FASE PENUTUP — 10 menit
    // ──────────────────────────────────────────────────────────

    {
      fase  : 'Penutup',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp06-penutup-tunjuk-kelas',
          tipe  : 'review_quick',
          judul : 'Tunjuk Benda di Kelas — Sebut Bentuknya',
          pm    : 'mindful',

          tujuan_komunikasi : 'Recap: hubungkan bentuk dengan benda nyata dengan tempo cepat',
          vocab_target      : ['circle', 'square', 'triangle', 'rectangle'],

          durasi_target_detik : 360,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Last round — fast! I point, you say the shape!"',
            selama  : 'Tunjuk benda nyata di kelas (jam, pintu, buku, papan, jendela). Siswa sahut bersama.',
            penutup : '"Excellent! You know shapes everywhere!"',
          },

          audio_cue: {
            contoh_guru  : 'What shape is this? Quick!',
            contoh_siswa : 'Circle! Rectangle! Square!',
            target_vocab : ['circle', 'square', 'triangle', 'rectangle'],
          },

          media_dipakai : ['media-benda-bentuk-kelas'],

          mode: {
            mudah: {
              bantuan: 'Tempo lambat. 4-5 benda saja. Tunjuk benda yang bentuknya jelas (pintu, jam, papan).',
              panjang_speaking: 'Nama bentuk saja.',
            },
            normal: {
              bantuan: '7-8 benda. Tempo bertahap dari lambat ke cepat.',
              panjang_speaking: 'Nama bentuk cepat.',
            },
            tantangan: {
              bantuan: 'Tambah variasi: tunjuk benda yang bentuknya tidak biasa (mis: kipas = circle, kotak pensil = rectangle). Diskusi singkat.',
              panjang_speaking: 'Nama bentuk + komentar.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun  : 'Pakai suara teatrikal: "Hmmm... what is THIS?" dramatis sebelum tunjuk.',
            waktu_mepet   : 'Cukup 4 benda.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp06-penutup-closure',
          tipe  : 'closure_reinforcement',
          judul : 'Apresiasi & Goodbye',
          pm    : 'joyful',

          tujuan_komunikasi : 'Penguatan: siswa pulang sadar mereka kenal 6 bentuk dalam Inggris',
          vocab_target      : [],

          durasi_target_detik : 90,
          durasi_min_detik    : 45,

          micro_script: {
            pembuka : '"Excellent! You can name shapes in English!"',
            selama  : '"Shapes are everywhere! Look at home tonight — what shapes do you see? Goodbye everyone!"',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Excellent! You can name shapes in English! Goodbye everyone! See you next time!',
            contoh_siswa : 'Goodbye, teacher!',
            target_vocab : ['goodbye'],
          },

          media_dipakai : [],
          mode: null,
          observation: { aktif: false },
          fallback: {},
          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Guru tunjuk benda di kelas — siswa sebut bentuknya. Cepat dan bergantian.' },
        { tipe: 'audio',     teks: 'Excellent! You can name shapes in English!' },
        { tipe: 'audio',     teks: 'Goodbye everyone! See you next time!' },
      ],
    },

    // ──────────────────────────────────────────────────────────
    // FASE PENILAIAN — 6 menit
    // ──────────────────────────────────────────────────────────

    {
      fase  : 'Penilaian',
      durasi: 6,

      aktivitas: [
        {
          id    : 'tp06-penilaian-kartu-acak',
          tipe  : 'observation_validation',
          judul : 'Tunjuk Kartu Bentuk Acak',
          pm    : null,

          tujuan_komunikasi : 'Validasi siswa belum terobservasi: mampu sebut bentuk dengan tepat',
          vocab_target      : [],

          durasi_target_detik : 300,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Sambil siswa berkemas, dekati 4-5 siswa yang belum sempat dipanggil tadi. Tunjuk kartu bentuk acak.',
            selama  : 'Amati: respons langsung? Yang masih bingung triangle vs rectangle?',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'What shape is this?',
            contoh_siswa : '',
            target_vocab : [],
          },

          media_dipakai : ['media-kartu-bentuk'],
          mode: null,

          observation: {
            aktif           : true,
            n_siswa         : 99,
            indikator       : ['vocab_use', 'response', 'confidence'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'akurasi',
          },

          fallback: {
            siswa_pasif : 'Jangan paksa. Catat "perlu lebih banyak waktu" — bukan "gagal".',
            waktu_mepet : 'Cukup 3 siswa prioritas.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Tunjukkan kartu bentuk acak ke beberapa siswa. [What shape is this?]' },
        { tipe: 'instruksi', teks: 'Nilai Listening: merespons "what shape is it". Speaking: lafal bentuk benar. Reading: baca nama bentuk di kartu.' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang masih tertukar triangle/rectangle atau circle/oval?' },
      ],
    },

  ],

};

export default TP_06;
