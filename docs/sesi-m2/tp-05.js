/**
 * =============================================================
 * FLAF — TP 05 (Colours)
 * File: data/tp-05.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Sesi M2 — Mei 2026
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[4] (v3)
 *
 * KARAKTER KHAS TP 05 (lihat COMPARISON-M2):
 *   - Visual recognition + verbal naming (mirip TP 04 angka)
 *   - Movement aktif: permainan sentuh warna di kelas
 *   - Personal expression: warna favorit
 *   - Lagu rainbow di Penutup — ikonik dan engaging
 *   - 8 warna fokus (4 primary di mode mudah, 8 di normal,
 *     variasi shade di tantangan)
 *
 * KEPUTUSAN MIGRASI:
 *   - Cakupan 8 warna: red, blue, yellow, green, black, white, orange, purple
 *     → Mode mudah: 4 primary (red, blue, yellow, green)
 *     → Mode normal: 8 lengkap
 *     → Mode tantangan: + shade variation (light/dark) atau pink/brown bonus
 *   - Permainan sentuh warna = game_movement + flags kompetitif_safety
 *     → Mode mudah versi non-kompetitif (per baris cari bersama)
 *   - Show and tell = pair_work (siswa interaksi)
 *   - Lagu rainbow = chant_movement (berirama, semua ikut)
 *   - Closure reinforcement = WAJIB di akhir Penutup (v4.3)
 *
 * PERUBAHAN SUBSTANSI dari v3:
 *   1. Show and tell yang di v3 berbentuk "tampil ke kelas" → format ulang
 *      sebagai pair_work (siswa ke pasangan), lebih aman emotionally untuk
 *      siswa pemalu, semua dapat speaking turn (Dok 03 §10)
 *   2. Permainan sentuh warna diberi mode mudah non-kompetitif
 *      → flag kompetitif_safety
 *   3. Aktivitas warna favorit dipertahankan, mode mudah = visual support
 *      tinggi (tunjuk kartu warna favorit)
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - Konsisten dengan TP 04 (pattern visual recognition)
 * =============================================================
 */

const TP_05 = {

  // ════════════════════════════════════════════════════════════
  // IDENTITAS
  // ════════════════════════════════════════════════════════════

  id       : 'tp-05',
  nomor    : 5,
  kelas    : 1,
  nama     : 'Colours',
  tema     : 'Dunia di Sekitar Kita',
  deskripsi: `Peserta didik mengenal dan menggunakan nama-nama warna dalam
    bahasa Inggris. Warna diintegrasikan dengan benda-benda di lingkungan
    kelas dan kehidupan sehari-hari.`,

  indikator: [
    'Peserta didik dapat menyebut nama 8 warna dasar (red, blue, green, yellow, orange, purple, black, white) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan warna benda menggunakan struktur "The ... is ..." atau "It is ..." dalam aktivitas show and tell.',
    'Peserta didik dapat merespons pertanyaan "What colour is it?" dan "What is your favourite colour?" dengan kalimat lengkap.',
  ],

  vocab: ['red', 'blue', 'green', 'yellow', 'orange', 'purple',
          'black', 'white', 'colour', 'favourite', 'what colour'],

  persiapan: ['Kartu warna 8 warna dasar', 'Benda berwarna dari kelas/tas siswa'],

  // ════════════════════════════════════════════════════════════
  // MEDIA
  // ════════════════════════════════════════════════════════════

  media: [
    {
      id              : 'media-kartu-warna-8',
      nama            : 'Kartu Warna — 8 Warna Dasar',
      tipe            : 'kartu_cetak',
      printable       : true,
      pdf_ref         : 'tp-05-v1.pdf',
      pdf_halaman     : 1,
      reusable_lintas_tp : true,
      keterangan      : '8 kartu A5: red, blue, yellow, green, black, white, orange, purple. Kartu polos warna penuh, dengan tulisan nama warna di bawah.',
    },
    {
      id              : 'media-benda-warna',
      nama            : 'Benda Berwarna dari Kelas',
      tipe            : 'objek_fisik',
      printable       : false,
      reusable_lintas_tp : true,
      keterangan      : 'Buku, pensil, tas, kotak pensil — apapun yang berwarna di kelas/tas siswa',
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
          id    : 'tp05-pembuka-sapa',
          tipe  : 'sapaan_kelas',
          judul : 'Sapa & Pengantar Hari Ini',
          pm    : 'mindful',

          tujuan_komunikasi : 'Membuka kelas dengan tema warna',
          vocab_target      : ['colour'],

          durasi_target_detik : 90,
          durasi_min_detik    : 45,

          micro_script: {
            pembuka : 'Sapa kelas dengan energi. Beri tahu tema hari ini: warna.',
            selama  : 'Tunjuk pakaian Anda sendiri sebagai contoh: "My shirt is [warna]!"',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Hello class! Today is a colourful day! Let us learn colours in English!',
            contoh_siswa : 'Hello, teacher!',
            target_vocab : ['colour'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Sapa pelan. Pakai gestur tunjuk pakaian sendiri sambil ucap warna pakaian.',
              panjang_speaking: 'Balas salam saja.',
            },
            normal: {
              bantuan: 'Sapa langsung. Tunjuk pakaian sambil tanya: "What colour is my shirt?"',
              panjang_speaking: 'Balas salam + siapa yang bisa tebak warna baju guru.',
            },
            tantangan: {
              bantuan: 'Tanya: "Look at your friends — how many colours do you see?"',
              panjang_speaking: 'Tebak warna baju + observasi warna di kelas.',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_ribut : 'Tangan di pinggang. Tunggu hening. Mulai pelan.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp05-pembuka-kenalkan-kartu',
          tipe  : 'modeling',
          judul : 'Kenalkan Kartu Warna (Tebak Dulu)',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa terhubung visual warna dengan nama Inggrisnya',
          vocab_target      : ['red', 'blue', 'yellow', 'green', 'black', 'white', 'orange', 'purple'],

          durasi_target_detik : 420,  // 7 menit
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : 'Tunjukkan kartu warna satu per satu. JANGAN sebut dulu. Biarkan siswa tebak.',
            selama  : 'Setelah siswa coba tebak (boleh dalam Indonesia), baru konfirmasi dalam Inggris. Tempel kartu di papan.',
            penutup : '8 kartu di papan. Ucap nama berurutan bersama sekali.',
          },

          audio_cue: {
            contoh_guru  : 'What colour is this? Do you know?',
            contoh_siswa : 'Red! Blue! Yellow! Green!',
            target_vocab : ['red', 'blue', 'yellow', 'green', 'black', 'white', 'orange', 'purple'],
          },

          media_dipakai : ['media-kartu-warna-8'],

          mode: {
            mudah: {
              bantuan: 'Hanya 4 primary dulu (red, blue, yellow, green). 4 lainnya diperkenalkan tapi tidak ditarget hafal. Ucap pelan, ulang 2x per kartu.',
              panjang_speaking: 'Per warna: tebak boleh Indonesia, ulang versi Inggris.',
            },
            normal: {
              bantuan: '8 warna lengkap. Tunjuk → siswa tebak → konfirmasi.',
              panjang_speaking: '8 warna berurutan setelah konfirmasi.',
            },
            tantangan: {
              bantuan: 'Tunjuk acak. Tanya juga: "What can be [colour]?" — siswa sebut benda berwarna itu.',
              panjang_speaking: '8 warna + 1 benda contoh per warna.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_pasif         : 'Beri kartu ke 1 siswa, dia jadi "guru" — tunjuk ke teman.',
            media_tidak_tersedia: 'Gambar lingkaran berwarna besar di papan tulis pakai spidol warna. Atau pegang benda berwarna riil di kelas.',
            waktu_mepet         : 'Cukup 4 primary. 4 lain dipindah ke pertemuan berikutnya.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'audio',     teks: 'Hello class! Today is a colourful day! Let us learn colours in English!' },
        { tipe: 'instruksi', teks: 'Tunjukkan kartu warna satu per satu — hanya tunjuk, jangan sebut dulu. Tanya siswa. [What colour is this? Do you know?]' },
        { tipe: 'audio',     teks: 'Red. Blue. Green. Yellow. Orange. Purple. Black. White.' },
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
          id    : 'tp05-inti-pola-warna',
          tipe  : 'chorus',
          judul : 'Pola "It is ___" untuk Warna',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa mengenal pola jawab "What colour is this?" → "It is ___"',
          vocab_target      : ['red', 'blue', 'yellow', 'green', 'what colour'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Tunjuk kartu di papan. Tulis di papan: "It is ___." Tanya, lalu ucap pola.',
            selama  : 'Ulang 2x per warna. "What colour is this? It is red!" Kelas ulang.',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'What colour is this? It is red! What colour is this? It is blue!',
            contoh_siswa : 'It is red! It is blue!',
            target_vocab : ['what colour', 'it is', 'red', 'blue', 'yellow', 'green'],
          },

          media_dipakai : ['media-kartu-warna-8'],

          mode: {
            mudah: {
              bantuan: '4 primary saja. Ulang 3x per warna. Pakai pola pendek: "Red!" sebelum naik ke "It is red."',
              panjang_speaking: 'Bisa hanya nama warna, atau pola lengkap.',
            },
            normal: {
              bantuan: '8 warna. Pola lengkap "It is [colour]." Acak urutan.',
              panjang_speaking: 'Pola lengkap.',
            },
            tantangan: {
              bantuan: 'Tambah variasi: "The card is red." atau "This colour is red."',
              panjang_speaking: 'Variasi 2-3 cara jawab.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['vocab_use', 'response'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'akurasi',  // Fokus akurasi lafal warna
          },

          fallback: {
            siswa_pasif : 'Per baris. Baris depan ucap warna 1, baris tengah warna 2, dst.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp05-inti-sentuh-warna',
          tipe  : 'game_movement',
          judul : 'Permainan Sentuh Warna',
          pm    : 'joyful',
          flags : ['kompetitif_safety'],

          tujuan_komunikasi : 'Siswa hubungkan warna dengan benda nyata di kelas, gerak fisik',
          vocab_target      : ['red', 'blue', 'yellow', 'green', 'black', 'white', 'orange', 'purple'],

          durasi_target_detik : 480,  // 8 menit
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Stand up! When I say a colour, find something with that colour and touch it!"',
            selama  : 'Sebut warna acak. Beri 10-15 detik untuk siswa cari & sentuh. Ulang 6-8 warna.',
            penutup : '"Wow, you found so many colours! Sit down."',
          },

          audio_cue: {
            contoh_guru  : 'Touch something red — go! Touch something blue — go!',
            contoh_siswa : '',  // Aksi fisik, tidak verbal
            target_vocab : ['red', 'blue', 'yellow', 'green', 'black', 'white', 'orange', 'purple'],
          },

          media_dipakai : ['media-benda-warna'],

          mode: {
            mudah: {
              // FLAG kompetitif_safety aktif → mode mudah non-kompetitif
              bantuan: 'Per baris bareng-bareng. Tunjuk 1 warna, semua baris depan cari benda warna itu bersama. Tidak ada "siapa pertama." Pakai 4 primary saja.',
              panjang_speaking: 'Tidak ada — aksi fisik.',
            },
            normal: {
              bantuan: '8 warna. Per siswa cari sendiri. Tidak ada eliminasi — yang berhasil tunjukkan benda ke guru.',
              panjang_speaking: 'Optional: ucap "It is red" sambil tunjukkan benda.',
            },
            tantangan: {
              bantuan: 'Tambah kondisi: "Touch something blue AND big!" atau "Touch something red that is not your pencil!"',
              panjang_speaking: 'Optional: deskripsi benda yang ditemukan.',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_ribut    : 'Stop permainan. Semua duduk. Ulang 1-2 warna dengan tunjuk benda di papan saja.',
            siswa_pasif    : 'Beri kartu warna ke siswa diam. Mereka jadi "juri" — yang menyentuh benda harus tunjukkan ke pemegang kartu.',
            energi_turun   : 'Naikkan tempo. Tambah loncat sambil cari.',
            waktu_mepet    : 'Cukup 4 putaran. Lanjut ke show and tell pair.',
          },

          advance: { mode: 'timer_visible_only' },
        },

        // ─── Show and Tell diformat sebagai pair_work ───
        {
          id    : 'tp05-inti-pair-show-tell',
          tipe  : 'pair_work',
          judul : 'Pair Work — Dialog: Show & Tell Warna',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa deskripsikan warna benda pribadi ke pasangan',
          vocab_target      : ['it is', 'this is', 'red', 'blue', 'yellow', 'green', 'black', 'white', 'orange', 'purple'],

          durasi_target_detik : 300,  // 5 menit
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Take one thing from your bag. Tell your partner: This is my [item]. It is [colour]."',
            selama  : 'Demo dengan 1 pasangan dulu di depan kelas. Lalu siswa praktik berpasangan. Berkeliling pantau 3-4 pasangan.',
            penutup : '"Stop. Sit down. Now I want to hear — who has something yellow? Show me!"',
          },

          audio_cue: {
            contoh_guru  : 'Take one thing. Tell your partner.',
            contoh_siswa : 'This is my pencil. It is yellow. This is my book. It is blue.',
            target_vocab : ['this is', 'it is', 'red', 'blue', 'yellow', 'green'],
          },

          media_dipakai : ['media-benda-warna'],

          mode: {
            mudah: {
              bantuan: 'Demo 2x di depan kelas. Boleh cukup ucap warna saja: "Yellow!" sambil tunjuk benda. Tulis pola di papan.',
              panjang_speaking: 'Cukup nama warna + tunjuk benda.',
            },
            normal: {
              bantuan: 'Demo 1x. Tukar benda dengan pasangan setelah 2 menit pertama.',
              panjang_speaking: '"This is my [item]. It is [colour]."',
            },
            tantangan: {
              bantuan: 'Tanpa demo. Tambah deskripsi: "It is big and yellow." atau "It is my favourite colour."',
              panjang_speaking: 'Deskripsi 2-3 kalimat per benda.',
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
            siswa_pasif      : 'Siswa diam gabung dengan pasangan aktif. Atau guru jadi partner — siswa praktik ke guru.',
            kelas_ribut      : 'Semua duduk. Praktik dengan teman sebangku saja, tidak perlu pindah.',
            waktu_mepet      : 'Cukup 1-2 benda per siswa. Lanjut.',
          },

          advance: { mode: 'timer_visible_only' },
        },

        {
          id    : 'tp05-inti-warna-favorit',
          tipe  : 'meaningful_link',
          judul : 'Warna Favorit Saya',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa share preferensi pribadi dengan struktur "My favourite colour is ___"',
          vocab_target      : ['favourite', 'my favourite colour is'],

          durasi_target_detik : 360,  // 6 menit
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Tulis di papan: "My favourite colour is ___." Ucap dulu warna favorit Anda. "My favourite colour is blue."',
            selama  : 'Tanya 5-6 siswa. Bantu dengan tunjuk kartu warna kalau siswa lupa kata.',
            penutup : '"So many colours! Beautiful!"',
          },

          audio_cue: {
            contoh_guru  : 'What is your favourite colour?',
            contoh_siswa : 'My favourite colour is red!',
            target_vocab : ['favourite', 'my favourite colour is'],
          },

          media_dipakai : ['media-kartu-warna-8'],

          mode: {
            mudah: {
              bantuan: 'Tanya per baris. Siswa boleh hanya sebut warna ("Red!") tanpa pola lengkap. Tunjuk kartu warna favorit mereka.',
              panjang_speaking: 'Nama warna saja cukup.',
            },
            normal: {
              bantuan: 'Tanya 5-6 siswa acak. Dorong pola lengkap.',
              panjang_speaking: '"My favourite colour is [colour]."',
            },
            tantangan: {
              bantuan: 'Tanya tambahan: "Why?" atau "What is something [colour] you have?"',
              panjang_speaking: 'Pola + alasan/contoh benda.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 3,
            indikator       : ['confidence', 'vocab_use'],
            rotasi_priority : 'belum_observed',
          },

          fallback: {
            siswa_pasif : 'Beri kartu warna untuk dipilih — siswa diam tinggal pegang kartu favorit, guru bantu ucap pola.',
            waktu_mepet : 'Cukup 3 siswa. Lanjut ke Penutup.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Tempel kartu di papan. Tunjuk, siswa ucapkan bersama. Ulangi 2× per warna. [Say it together!]' },
        { tipe: 'audio',     teks: 'What colour is this? It is red! What colour is this? It is blue!' },
        { tipe: 'instruksi', teks: 'Permainan sentuh warna: guru sebut warna, siswa berlari sentuh benda berwarna itu di kelas. [Touch something red — go!]' },
        { tipe: 'instruksi', teks: 'Show and tell: setiap siswa ambil satu benda dari tas, tunjukkan ke kelas, sebut warnanya. [What do you have? What colour is it?]' },
        { tipe: 'audio',     teks: 'This is my pencil. It is yellow. This is my book. It is blue.' },
        { tipe: 'instruksi', teks: 'Tanya warna favorit ke 5–6 siswa. [What is your favourite colour?] — bantu dengan menunjuk kartu jika siswa lupa kata.' },
        { tipe: 'audio',     teks: 'What is your favourite colour? My favourite colour is red!' },
        { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: deskripsikan dengan kalimat lengkap "My bag is blue and green". Belum bisa: cukup satu kata warna saja.' },
        { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati show and tell, langsung ke nyanyian penutup.' },
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
          id    : 'tp05-penutup-lagu-rainbow',
          tipe  : 'chant_movement',
          judul : 'Lagu "I Can Sing a Rainbow"',
          pm    : 'joyful',

          tujuan_komunikasi : 'Recap semua warna dengan ritme dan gerakan',
          vocab_target      : ['red', 'yellow', 'pink', 'green', 'orange', 'purple', 'blue'],

          durasi_target_detik : 360,  // 6 menit
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Now we sing a rainbow song!" Guru nyanyi dulu sambil tunjuk kartu warna saat namanya disebut.',
            selama  : 'Putaran 2: ajak siswa ikut. Tunjuk warna di kartu sesuai lirik.',
            penutup : 'Akhiri dengan tepuk meriah.',
          },

          audio_cue: {
            contoh_guru  : 'Red and yellow and pink and green, orange and purple and blue. I can sing a rainbow, sing a rainbow, sing a rainbow too!',
            contoh_siswa : 'Red and yellow and pink and green, orange and purple and blue. I can sing a rainbow, sing a rainbow, sing a rainbow too!',
            target_vocab : ['red', 'yellow', 'pink', 'green', 'orange', 'purple', 'blue'],
          },

          media_dipakai : ['media-kartu-warna-8'],

          mode: {
            mudah: {
              bantuan: 'Nyanyi pelan. 3 putaran. Boleh siswa hanya tepuk + ikuti melodi tanpa lirik di putaran 1.',
              panjang_speaking: 'Ikut nyanyi semampunya. Tepuk OK.',
            },
            normal: {
              bantuan: '2 putaran. Tempo normal. Tunjuk warna saat nyebut.',
              panjang_speaking: 'Nyanyi lengkap dengan tunjuk kartu.',
            },
            tantangan: {
              bantuan: '3 putaran, makin cepat. Putaran 3 tambah gerakan: tangan naik di "rainbow."',
              panjang_speaking: 'Nyanyi + gerakan.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun  : 'Naikkan volume. Berdiri semua.',
            waktu_mepet   : '1 putaran cukup.',
          },

          advance: { mode: 'timer_visible_only' },
        },

        {
          id    : 'tp05-penutup-closure',
          tipe  : 'closure_reinforcement',
          judul : 'Apresiasi & Goodbye',
          pm    : 'joyful',

          tujuan_komunikasi : 'Penguatan: siswa pulang sadar mereka tahu 8 warna dalam Inggris',
          vocab_target      : [],

          durasi_target_detik : 90,
          durasi_min_detik    : 45,

          micro_script: {
            pembuka : '"Wonderful! You know your colours in English now!"',
            selama  : '"Look at the rainbow — it is in YOUR head! Goodbye, my colourful class!"',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Wonderful! You know your colours in English now! Goodbye, my colourful class!',
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
        { tipe: 'instruksi', teks: 'Nyanyikan "I Can Sing a Rainbow" bersama. Guru nyanyi dulu, siswa ikuti di putaran kedua. [Sing with me!]' },
        { tipe: 'audio',     teks: 'Red and yellow and pink and green, orange and purple and blue. I can sing a rainbow, sing a rainbow, sing a rainbow too!' },
        { tipe: 'audio',     teks: 'Wonderful! You know your colours in English now!' },
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
          id    : 'tp05-penilaian-kartu-acak',
          tipe  : 'observation_validation',
          judul : 'Tunjuk Kartu Warna Acak',
          pm    : null,

          tujuan_komunikasi : 'Validasi siswa belum terobservasi: mampu sebut warna dengan tepat',
          vocab_target      : [],

          durasi_target_detik : 300,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Sambil siswa berkemas, dekati 4-5 siswa yang belum sempat dipanggil tadi. Tunjuk kartu warna acak.',
            selama  : 'Amati: respons langsung? Inggris atau Indonesia? Yang menukar purple/orange?',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'What colour is this?',
            contoh_siswa : '',  // Bervariasi per kartu
            target_vocab : [],
          },

          media_dipakai : ['media-kartu-warna-8'],
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
        { tipe: 'instruksi', teks: 'Tunjukkan kartu warna acak ke 5–6 siswa. [What colour is this?] — catat respons langsung mereka.' },
        { tipe: 'instruksi', teks: 'Nilai Listening: merespons "what colour is it". Speaking: lafal warna benar. Reading: baca nama warna di kartu.' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang masih menukar purple/orange atau black/brown?' },
      ],
    },

  ],

};

export default TP_05;
