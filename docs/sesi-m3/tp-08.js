/**
 * =============================================================
 * FLAF — TP 08 (My House)
 * File: data/tp-08.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Sesi M3 — Mei 2026
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[7] (v3 placeholder/v2)
 *
 * KARAKTER KHAS TP 08 (berbeda dari TP 07):
 *   - Topik PERSONAL TAPI LESS-AFEKTIF dari TP 07 (rumah lebih netral)
 *   - Vocab 2-tier: ruangan (besar) + benda (kecil, tantangan only)
 *   - Pola target: "This is the ___" (paralel TP 07)
 *   - SENSITIVITAS KONDISI RUMAH: banyak siswa Kelas 1 di daerah
 *     tinggal di rumah sederhana tanpa living room, sofa, kamar
 *     terpisah. Vocab dan aktivitas HARUS universal & inklusif.
 *
 * KEPUTUSAN MIGRASI (Sesi M3):
 *   - Q1c: Core vocab = Bedroom, Kitchen, Bathroom + Door, Window.
 *         "Living room" v3 DIHAPUS — tidak universal. Door & window
 *         dipilih karena ada di SEMUA rumah, konkret, mudah ditunjuk
 *         langsung di kelas (zero-prep visual).
 *   - Q2c: Pola HYBRID. "This is the [room]" untuk semua mode (paralel
 *         TP 07). "There is a [thing] in the [room]" hanya di mode
 *         tantangan, untuk siswa yang sudah siap 2-slot pattern.
 *   - Q3b: Aktivitas v3 "gambar rumah sendiri" DIGANTI dengan
 *         "Walk Through the House" — pretend tour TPR-like. Guru
 *         tempel 5 kartu di 5 sudut kelas, ucap "Let's go to the
 *         kitchen!", siswa jalan ke kartu kitchen. Inklusif, aktif,
 *         tidak menyinggung kondisi rumah pribadi.
 *   - Q4c: Benda dalam ruangan (bed, table, chair) HANYA di mode
 *         tantangan pair_work. Tidak masuk vocab utama, tidak di
 *         indikator. Vocab list inti tetap 5: bedroom, kitchen,
 *         bathroom, door, window.
 *
 * AKTIVITAS BARU di Inti (tidak ada di v3):
 *   - tpr_action "Walk Through the House": pretend tour rumah
 *     pakai kartu di sudut kelas. Energi tinggi, eksekusi sederhana
 *     untuk guru fasilitas minimal.
 *
 * PERUBAHAN SUBSTANSI dari v3:
 *   1. "Living room" dihapus dari core vocab → diganti door/window
 *   2. Aktivitas gambar denah rumah DIHAPUS → diganti "Walk Through"
 *   3. Pola "there is a X in the Y" dipindah ke mode tantangan saja
 *   4. Benda dalam ruangan (bed/sofa/table/chair) tidak lagi vocab utama
 *   5. Closure jadi transfer skill (tunjuk ruangan di rumah malam ini)
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - Pattern struktur: TP 07 (BUKAN TP 06 — TP 08 ada sensitivitas
 *     personal mirip TP 07)
 *   - Recycle vocab: tidak ada vocab TP sebelumnya yang relevan
 * =============================================================
 */

const TP_08 = {

  // ════════════════════════════════════════════════════════════
  // IDENTITAS
  // ════════════════════════════════════════════════════════════

  id       : 'tp-08',
  nomor    : 8,
  kelas    : 1,
  nama     : 'My House',
  tema     : 'Keluarga dan Rumah',
  deskripsi: `Peserta didik mengenal ruangan utama dan elemen umum rumah
    (door, window) dalam bahasa Inggris dengan pendekatan inklusif untuk
    semua bentuk rumah.`,

  indikator: [
    'Peserta didik dapat menyebut nama ruangan utama (bedroom, kitchen, bathroom) dan elemen rumah (door, window) dengan lafal yang benar.',
    'Peserta didik dapat menyatakan "This is the [room/element]" sambil menunjuk kartu atau benda nyata.',
    'Peserta didik dapat mengidentifikasi ruangan/elemen rumah yang disebut guru dengan tepat (listening response).',
  ],

  vocab: ['bedroom', 'kitchen', 'bathroom', 'door', 'window',
          'house', 'this is the'],

  persiapan: ['Kartu nama ruangan (5 kartu: bedroom, kitchen, bathroom, door, window)'],

  // ════════════════════════════════════════════════════════════
  // MEDIA
  // ════════════════════════════════════════════════════════════

  media: [
    {
      id              : 'media-kartu-rumah',
      nama            : 'Kartu Ruangan & Elemen Rumah',
      tipe            : 'kartu_cetak',
      printable       : true,
      pdf_ref         : 'tp-08-v1.pdf',
      pdf_halaman     : 1,
      reusable_lintas_tp : true,
      keterangan      : '5 kartu A5: bedroom, kitchen, bathroom (ilustrasi sederhana & netral, tanpa furnitur mewah supaya inklusif), door, window. Door & window juga bisa ditunjuk langsung di kelas.',
    },
    {
      id              : 'media-benda-kelas',
      nama            : 'Door & Window Kelas',
      tipe            : 'objek_fisik',
      printable       : false,
      reusable_lintas_tp : true,
      keterangan      : 'Pintu dan jendela kelas sendiri — ditunjuk saat mengajar untuk koneksi konkret.',
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
          id    : 'tp08-pembuka-sapa-rumah',
          tipe  : 'meaningful_link',
          judul : 'Sapa & Bicara Tentang Rumah',
          pm    : 'mindful',

          tujuan_komunikasi : 'Sapa kelas + bangun koneksi ke topik rumah dengan pendekatan inklusif untuk semua kondisi rumah',
          vocab_target      : ['house'],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Sapa kelas. "Today we talk about our house. Every house is special!" Tunggu perhatian terkumpul.',
            selama  : 'INKLUSIVITAS — ucap pelan dalam Bahasa Indonesia: "Rumah kalian semua berbeda. Ada yang besar, ada yang kecil. Ada yang banyak kamarnya, ada yang sedikit. Semua rumah bagus karena itu rumahmu." Lalu kembali ke Inggris: "Every house has a door. Every house has a window. Let\'s learn!"',
            penutup : '"Today we learn about house in English. Are you ready?"',
          },

          audio_cue: {
            contoh_guru  : 'Hello class! Today we talk about our house. Every house is special!',
            contoh_siswa : 'Yes!',
            target_vocab : ['house'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Pelan dan tenang. Pakai Bahasa Indonesia penuh untuk frasa inklusivitas. Tidak perlu tanya jawab individu.',
              panjang_speaking: 'Respons singkat: "Yes!" atau anggukan.',
            },
            normal: {
              bantuan: 'Setelah frasa inklusivitas, tanya ke kelas: "Do you have a door at home? Do you have a window?" — semua siswa pasti bisa jawab "Yes!"',
              panjang_speaking: 'Sebut "Yes!" atau gestur anggukan.',
            },
            tantangan: {
              bantuan: 'Tanya 1-2 siswa sukarela: "What is in your house?" Terima jawaban apa pun (kasur, dapur, kamar, dll — boleh Indonesia).',
              panjang_speaking: '1 kata atau frasa pendek.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_pasif    : 'Wajar. Topik rumah bisa membuat anak terbayang situasi rumah. Lanjut tenang.',
            kelas_ribut    : 'Mulai dengan bisik: "Shhh... every house is special..." Tunggu fokus.',
            sensitif       : 'Jika ada siswa tampak tidak nyaman, jangan tunjuk dia. Frasa "every house is special" diucapkan pelan & penuh — itu sudah cukup.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp08-pembuka-kenalkan-ruangan',
          tipe  : 'modeling',
          judul : 'Kenalkan 5 Vocab: 3 Ruangan + Door & Window',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa mengenal 5 vocab utama dengan visual kartu + benda nyata di kelas',
          vocab_target      : ['bedroom', 'kitchen', 'bathroom', 'door', 'window'],

          durasi_target_detik : 300,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Tempel 3 kartu ruangan dulu (bedroom, kitchen, bathroom) di papan. Ucap pelan, kelas ulang.',
            selama  : 'Untuk door & window: TIDAK perlu kartu. Tunjuk langsung pintu kelas → "Door!" → kelas ulang. Tunjuk jendela kelas → "Window!" → kelas ulang. Tempel kartu door & window di samping pintu/jendela kelas.',
            penutup : 'Tunjuk berurutan 5 vocab, kelas ucap bersama. Lalu acak.',
          },

          audio_cue: {
            contoh_guru  : 'This is the bedroom. This is the kitchen. This is the bathroom. This is the door! This is the window!',
            contoh_siswa : 'Bedroom! Kitchen! Bathroom! Door! Window!',
            target_vocab : ['bedroom', 'kitchen', 'bathroom', 'door', 'window'],
          },

          media_dipakai : ['media-kartu-rumah', 'media-benda-kelas'],

          mode: {
            mudah: {
              bantuan: '3 ruangan dulu (bedroom, kitchen, bathroom). Door & window diperkenalkan dengan tunjuk benda nyata, tapi tidak ditarget hafal.',
              panjang_speaking: 'Per kata satu per satu.',
            },
            normal: {
              bantuan: '5 vocab lengkap. Tunjuk → ucap → kelas ulang. Ulang 2x.',
              panjang_speaking: '5 kata berurutan + acak.',
            },
            tantangan: {
              bantuan: 'Tambah pola pendek: tunjuk kartu/benda, siswa langsung sebut "This is the bedroom." (bukan hanya "bedroom").',
              panjang_speaking: 'Pola lengkap "This is the [room/element]".',
            },
          },

          observation: { aktif: false },

          fallback: {
            media_tidak_tersedia : 'Gambar bentuk sederhana di papan: 3 kotak untuk ruangan + simbol pintu (persegi panjang) + simbol jendela (kotak).',
            siswa_pasif          : 'Beri 1 kartu ke siswa, dia tunjuk ke kelas dan kelas tebak ruangannya.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'audio',     teks: 'Hello class! Today we talk about our house. Every house is special!' },
        { tipe: 'instruksi', teks: 'Pelan: "Rumah kalian semua berbeda. Ada yang besar, ada yang kecil. Semua rumah bagus karena itu rumahmu. Every house has a door and a window." Pendekatan inklusif scripted.' },
        { tipe: 'instruksi', teks: 'Tempel 3 kartu ruangan (bedroom, kitchen, bathroom) di papan. Untuk door & window: tunjuk pintu/jendela KELAS langsung — koneksi konkret.' },
        { tipe: 'audio',     teks: 'This is the bedroom. This is the kitchen. This is the bathroom. This is the door! This is the window!' },
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
          id    : 'tp08-inti-pola-this-is-the',
          tipe  : 'chorus',
          judul : 'Pola "This is the ___"',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa hafal pola memperkenalkan ruangan & elemen rumah',
          vocab_target      : ['this is the', 'bedroom', 'kitchen', 'bathroom', 'door', 'window'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Tulis pola di papan: "This is the ___." Tunjuk kartu bedroom → ucap "This is the bedroom." Kelas ulang.',
            selama  : 'Ulang untuk 5 vocab. Variasi: "What is this? This is the kitchen!" Acak urutan. Selingi tunjuk pintu/jendela KELAS untuk door & window.',
            penutup : 'Putaran cepat: tunjuk kartu/benda acak, kelas sahut langsung dengan pola lengkap.',
          },

          audio_cue: {
            contoh_guru  : 'This is the bedroom. This is the kitchen. What is this? This is the bathroom!',
            contoh_siswa : 'This is the bedroom! This is the door!',
            target_vocab : ['this is the', 'bedroom', 'kitchen', 'bathroom', 'door', 'window'],
          },

          media_dipakai : ['media-kartu-rumah', 'media-benda-kelas'],

          mode: {
            mudah: {
              bantuan: '3 ruangan saja. Boleh ucap pola pendek dulu: "Kitchen!" sebelum pola lengkap "This is the kitchen."',
              panjang_speaking: 'Nama atau pola lengkap.',
            },
            normal: {
              bantuan: '5 vocab. Pola lengkap "This is the ___." Acak urutan.',
              panjang_speaking: '"This is the [room/element]."',
            },
            tantangan: {
              bantuan: 'Perkenalkan pola 2-slot: "There is a bed in the bedroom." atau "There is a table in the kitchen." Siswa boleh pilih pola pendek atau pola 2-slot.',
              panjang_speaking: '"This is the [room]." atau "There is a [thing] in the [room]."',
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
            siswa_pasif : 'Per baris. Tiap baris dapat 1 ruangan.',
            lafal_sulit : 'Pecah suku kata: "bath-room", "bed-room". Ulang pelan 3x.',
            confusi_th  : 'Untuk "th" di "the": cukup ucap "duh" — pendekatan praktis Kelas 1.',
          },

          advance: { mode: 'manual' },
        },

        // ─── Walk Through the House: pretend tour TPR-like ───
        {
          id    : 'tp08-inti-walk-through',
          tipe  : 'tpr_action',
          judul : 'Walk Through the House — Pretend Tour',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa identifikasi ruangan dari instruksi verbal + gerakan fisik (listening response + kinestetik)',
          vocab_target      : ['bedroom', 'kitchen', 'bathroom', 'door', 'window'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Stand up! Now we walk through a pretend house! I will tell you where to go!"',
            selama  : 'SETUP: tempel 5 kartu di 5 sudut/dinding kelas (bedroom, kitchen, bathroom, door, window) — gunakan kartu yang sudah ada di papan + tunjuk pintu/jendela kelas. Ucap: "Let\'s go to the kitchen!" — siswa jalan ke arah kartu kitchen. "Let\'s go to the bedroom!" — siswa jalan ke kartu bedroom. Ulang dengan tempo bertahap naik.',
            penutup : '"Great tour! Sit down. You walked through the house!"',
          },

          audio_cue: {
            contoh_guru  : 'Let\'s go to the kitchen! Let\'s go to the bedroom! Let\'s go to the bathroom! Touch the door! Touch the window!',
            contoh_siswa : '',  // TPR — siswa BERTINDAK
            target_vocab : ['bedroom', 'kitchen', 'bathroom', 'door', 'window'],
          },

          media_dipakai : ['media-kartu-rumah', 'media-benda-kelas'],

          mode: {
            mudah: {
              bantuan: '3 ruangan dulu (skip door/window untuk gerakan). Tempo lambat. Guru tunjuk dulu sambil ucap, siswa ikut.',
              panjang_speaking: 'Tidak ada — aksi fisik.',
            },
            normal: {
              bantuan: '5 vocab lengkap. Untuk door/window: "Touch the door!" / "Touch the window!" — siswa sentuh pintu/jendela kelas. Tempo bertahap.',
              panjang_speaking: 'Tidak ada — aksi fisik.',
            },
            tantangan: {
              bantuan: 'Tempo cepat + acak. Atau: ucap 2 perintah berurutan "Go to the kitchen, then touch the window!" Siswa harus ingat urutan.',
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
            kelas_sempit    : 'Tidak perlu seluruh kelas jalan. Siswa berdiri di tempat dan TUNJUK ke arah kartu. Lebih sederhana, tetap kinestetik.',
            siswa_pasif     : 'Per baris bergantian. Baris depan dulu, lalu baris belakang. Tukar.',
            energi_turun    : 'Tambah cerita: "Oh! Someone is in the kitchen! Let\'s go check!" Dramatis.',
            kelas_ribut     : 'Stop. Semua duduk. Mulai dengan satu baris saja dulu, perlahan tambah.',
          },

          advance: { mode: 'manual' },
        },

        // ─── Pair work: tour rumah ke teman ───
        {
          id    : 'tp08-inti-pair-tour',
          tipe  : 'pair_work',
          judul : 'Pair Work: Tour Rumah ke Teman',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa praktik perkenalkan ruangan/elemen rumah ke teman pakai kartu (low-stakes speaking turn)',
          vocab_target      : ['this is the', 'bedroom', 'kitchen', 'bathroom', 'door', 'window'],

          durasi_target_detik : 540,  // 9 menit
          durasi_min_detik    : 300,

          micro_script: {
            pembuka : '"Now turn to your partner. Give them a tour of your pretend house using the cards! Say: This is the kitchen. This is the bedroom."',
            selama  : 'Demo dengan 1 siswa di depan kelas (guru jadi partner contoh). Bagikan kartu kepada pasangan (atau pakai kartu di papan jika kartu terbatas). Berkeliling pantau. Beri 5-6 menit.',
            penutup : '"Stop. Wonderful house tours!" Beri apresiasi general — JANGAN panggil individu untuk presentasi.',
          },

          audio_cue: {
            contoh_guru  : 'Give your partner a tour. This is the kitchen. This is the bedroom. This is the door.',
            contoh_siswa : 'This is the bedroom. This is the kitchen. This is the bathroom.',
            target_vocab : ['this is the', 'bedroom', 'kitchen', 'bathroom', 'door', 'window'],
          },

          media_dipakai : ['media-kartu-rumah'],

          mode: {
            mudah: {
              bantuan: 'Demo 2x. Cukup 2-3 ruangan. Boleh hanya sebut nama ruangan tanpa pola lengkap. Tidak ada tekanan untuk "mirip rumah sendiri" — ini rumah pretend.',
              panjang_speaking: '2-3 kalimat sederhana.',
            },
            normal: {
              bantuan: 'Demo 1x. Pola lengkap "This is the ___" untuk 4-5 vocab.',
              panjang_speaking: '"This is the [room/element]" untuk 4-5 vocab.',
            },
            tantangan: {
              bantuan: 'Tambah pola 2-slot: "There is a bed in the bedroom." atau "There is a table in the kitchen." Benda yang boleh dipakai: bed, table, chair. Siswa pilih sendiri ruangan & benda.',
              panjang_speaking: 'Pola lengkap + 1-2 kalimat "There is a [thing] in the [room]".',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 5,
            indikator       : ['participation', 'confidence', 'vocab_use'],
            rotasi_priority : 'belum_speaking_turn',
          },

          fallback: {
            pair_tidak_jalan       : 'Demo 1 pasangan di depan kelas. Beri 30 detik, coba lagi.',
            siswa_pasif            : 'Siswa diam gabung dengan pasangan aktif (jadi trio). Atau guru jadi partner.',
            sensitif               : 'INGATKAN siswa: ini rumah PRETEND pakai kartu. Bukan harus rumah kalian sendiri. Semua siswa pakai kartu yang sama.',
            kartu_terbatas         : 'Pasangan tour kartu di papan secara bergantian. Atau guru gambar 3 kotak ruangan di papan, pasangan ke depan bergantian.',
            kelas_sangat_aktif     : 'JIKA kelas energi tinggi dan banyak sukarela: boleh tanya "Who wants to share?" — TERIMA SUKARELA SAJA, jangan tunjuk paksa. Maksimal 2-3 siswa, masing-masing 30 detik.',
            waktu_mepet            : 'Cukup pair work 4-5 menit. Skip diferensiasi tantangan. Lanjut penutup.',
          },

          advance: { mode: 'timer_visible_only' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Tulis pola "This is the ___" di papan. Tunjuk kartu/pintu/jendela, ucap pola, kelas ulang. Acak 5 vocab.' },
        { tipe: 'audio',     teks: 'This is the bedroom. This is the kitchen. This is the bathroom. This is the door. This is the window.' },
        { tipe: 'instruksi', teks: 'Walk Through the House: tempel 5 kartu di 5 sudut kelas (atau gunakan pintu/jendela kelas). Ucap "Let\'s go to the kitchen!" siswa jalan/tunjuk ke arah kartu.' },
        { tipe: 'audio',     teks: 'Let\'s go to the kitchen! Touch the door! Go to the bedroom!' },
        { tipe: 'instruksi', teks: 'Pair work: siswa berpasangan, kasih "tour rumah pretend" ke teman pakai kartu. [Tell your partner: This is the kitchen!]' },
        { tipe: 'instruksi', teks: 'TIDAK ADA pemaksaan cerita rumah sendiri — semua siswa pakai kartu PRETEND yang sama. Inklusif untuk semua kondisi rumah.' },
        { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: pola 2-slot "There is a bed in the bedroom." (benda: bed/table/chair). Belum bisa: cukup pola "This is the ___" untuk 2-3 ruangan.' },
        { tipe: 'instruksi', teks: 'JANGAN panggil individu untuk presentasi ke kelas — pair work sudah cukup.' },
        { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: persingkat pair work jadi 4-5 menit. Lanjut penutup.' },
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
          id    : 'tp08-penutup-tunjuk-kartu',
          tipe  : 'review_quick',
          judul : 'Tunjuk Kartu/Benda — Sebut Ruangan',
          pm    : 'mindful',

          tujuan_komunikasi : 'Recap cepat: konfirmasi siswa kenal 5 vocab dengan tempo cepat',
          vocab_target      : ['bedroom', 'kitchen', 'bathroom', 'door', 'window'],

          durasi_target_detik : 360,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Last round — fast! I show or point, you say what it is!"',
            selama  : 'Tunjuk kartu ruangan acak ATAU tunjuk pintu/jendela kelas. Kelas sahut bersama. Tempo dari lambat ke cepat.',
            penutup : '"Excellent! You know your house in English!"',
          },

          audio_cue: {
            contoh_guru  : 'What is this? Quick!',
            contoh_siswa : 'Bedroom! Kitchen! Door! Window!',
            target_vocab : ['bedroom', 'kitchen', 'bathroom', 'door', 'window'],
          },

          media_dipakai : ['media-kartu-rumah', 'media-benda-kelas'],

          mode: {
            mudah: {
              bantuan: 'Tempo lambat. 3 vocab saja (bedroom, kitchen, bathroom). Door & window optional.',
              panjang_speaking: 'Nama saja.',
            },
            normal: {
              bantuan: '5 vocab. Tempo bertahap dari lambat ke cepat. 2 putaran.',
              panjang_speaking: 'Nama cepat.',
            },
            tantangan: {
              bantuan: 'Siswa harus sebut PAKAI POLA: "This is the kitchen!" — bukan hanya "Kitchen".',
              panjang_speaking: 'Pola lengkap cepat.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun  : 'Pakai suara teatrikal: "And THIS is...?" dramatis sebelum tunjuk.',
            waktu_mepet   : 'Cukup 4 vocab. Lanjut closure.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp08-penutup-closure',
          tipe  : 'closure_reinforcement',
          judul : 'Transfer ke Rumah & Goodbye',
          pm    : 'joyful',

          tujuan_komunikasi : 'Penguatan: apply 5 vocab di rumah malam ini — tunjuk ruangan & sebut Inggrisnya',
          vocab_target      : [],

          durasi_target_detik : 90,
          durasi_min_detik    : 45,

          micro_script: {
            pembuka : '"Now you can name your house in English!"',
            selama  : '"Tonight at home — try this! Touch your door and say: door! Touch your window and say: window! Walk to your kitchen and say: kitchen!" Demo singkat dengan gestur menunjuk.',
            penutup : '"Every house is special. Speak English at home tonight! Goodbye class!"',
          },

          audio_cue: {
            contoh_guru  : 'Tonight, touch your door, say door! Touch your window, say window! Try it at home! Goodbye class!',
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
        { tipe: 'instruksi', teks: 'Tunjuk kartu ruangan acak ATAU tunjuk pintu/jendela kelas — kelas sebut bersama. Cepat.' },
        { tipe: 'audio',     teks: 'Excellent! You know your house in English!' },
        { tipe: 'instruksi', teks: 'Closure transfer: ajak siswa praktik di rumah malam ini — tunjuk pintu/jendela/dapur di rumah masing-masing & sebut Inggrisnya.' },
        { tipe: 'audio',     teks: 'Tonight, touch your door, say door! Touch your window, say window! Goodbye class!' },
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
          id    : 'tp08-penilaian-kartu-acak',
          tipe  : 'observation_validation',
          judul : 'Tunjuk Kartu Rumah Acak',
          pm    : null,

          tujuan_komunikasi : 'Validasi siswa belum terobservasi: mampu sebut ruangan/elemen rumah dengan tepat',
          vocab_target      : [],

          durasi_target_detik : 300,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Sambil siswa berkemas, dekati 4-5 siswa yang belum sempat dipanggil. Tunjuk kartu rumah ATAU pintu/jendela kelas.',
            selama  : 'Amati: respons langsung? Yang masih tertukar kitchen/bathroom? Yang tidak ingat door/window?',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'What is this?',
            contoh_siswa : '',
            target_vocab : [],
          },

          media_dipakai : ['media-kartu-rumah', 'media-benda-kelas'],
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
        { tipe: 'instruksi', teks: 'Tunjuk kartu rumah acak ATAU pintu/jendela kelas ke beberapa siswa yang belum diobservasi. [What is this?]' },
        { tipe: 'instruksi', teks: 'Nilai Listening: merespons "what is this". Speaking: lafal vocab. Reading: baca label di kartu.' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang masih tertukar kitchen/bathroom atau lupa door/window?' },
      ],
    },

  ],

};

export default TP_08;
