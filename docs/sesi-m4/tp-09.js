/**
 * =============================================================
 * FLAF — TP 09 (Animals)
 * File: data/tp-09.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Sesi M4 — Mei 2026
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[8] (v2 placeholder)
 *
 * KARAKTER KHAS TP 09 (berbeda dari TP 07 & 08):
 *   - Topik NETRAL PENUH — sensitivitas RENDAH
 *   - Vocab 2-tier: 6 core (peliharaan/ternak umum) + 4 tantangan
 *   - Suara binatang: HANYA audio_cue, tidak diujikan, tidak di vocab[]
 *   - Aktivitas Inti: chant + guessing_game (BUKAN tpr_action —
 *     sengaja divariasikan dari TP 05/06/07/08 yang dominan tpr/pair)
 *   - Tidak ada sensitivitas kepemilikan hewan — closure dirancang
 *     universal ("lihat hewan di mana saja, sebut namanya")
 *
 * KEPUTUSAN MIGRASI (Sesi M4):
 *   - Q1 (vocab): 10 vocab v3 → split 6 core + 4 tantangan.
 *         Core: cat, dog, bird, fish, cow, chicken — hewan yang
 *         paling umum dikenal siswa SD Kelas 1 konteks Indonesia.
 *         Tantangan: rabbit, elephant, monkey, snake.
 *   - Q2 (suara): meow/woof/moo/cluck → audio_cue ONLY.
 *         Tidak masuk vocab[], tidak diujikan di penilaian.
 *         Alasan: onomatopoeia bukan lexical item produktif di Fase A.
 *   - Q3 (aktivitas Inti): v3 pakai drill + tebak guru + pair riddle.
 *         Diganti: chant berirama (anchor vocab + suara) →
 *         guessing_game terstruktur (siswa buat clue berpasangan).
 *         Sengaja hindari tpr_action — variasikan dari TP 08.
 *   - Q4 (pola bahasa):
 *         Mode mudah  : nama hewan saja → "Cat!"
 *         Mode normal : nama + suara   → "A cat! Meow!"
 *         Mode tantangan: deskripsi 1-slot → "A cat can meow."
 *                                            "A cow has four legs."
 *   - Q5 (closure): inklusif — tidak asumsikan siswa punya hewan
 *         peliharaan. Frame: "next time kamu lihat hewan di mana
 *         saja, sebut Inggrisnya."
 *
 * AKTIVITAS BARU di Inti (tidak ada di v3):
 *   - chant "Animal Chant": ritme 4-beat, nama + suara. 2 putaran
 *     (putaran 2 tanpa kartu). Tepuk tangan guru sebagai anchor.
 *   - guessing_game: guru beri 2 clue → kelas tebak → balik: siswa
 *     buat clue sendiri berpasangan → pasangan lain tebak.
 *
 * PERUBAHAN SUBSTANSI dari v3:
 *   1. rabbit/elephant/monkey/snake dipindah ke mode tantangan saja
 *   2. Suara binatang diturunkan dari vocab → audio_cue only
 *   3. Aktivitas Inti diganti chant + guessing_game (tidak ada drill
 *      "A cat can meow" di mode normal — hanya tantangan)
 *   4. Closure diubah dari "ceritakan hewan peliharaanmu" ke frame
 *      universal observasi hewan di lingkungan sekitar
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - Pattern struktur: TP 08 (format file terbaru)
 *   - Recycle vocab: tidak ada vocab TP sebelumnya yang relevan
 * =============================================================
 */

const TP_09 = {

  // ════════════════════════════════════════════════════════════
  // IDENTITAS
  // ════════════════════════════════════════════════════════════

  id       : 'tp-09',
  nomor    : 9,
  kelas    : 1,
  nama     : 'Animals',
  tema     : 'Alam dan Lingkungan',
  deskripsi: `Peserta didik mengenal nama hewan umum dalam bahasa Inggris
    dan mengidentifikasi hewan berdasarkan clue sederhana. Fokus pada
    6 hewan core yang akrab di konteks Indonesia.`,

  indikator: [
    'Peserta didik dapat menyebut nama 6 hewan core (cat, dog, bird, fish, cow, chicken) dengan lafal yang benar.',
    'Peserta didik dapat mengidentifikasi hewan berdasarkan 2 clue sederhana yang diucapkan guru atau teman.',
    'Peserta didik dapat membuat clue sederhana tentang hewan dan menyampaikannya kepada teman (mode normal–tantangan).',
  ],

  vocab: ['cat', 'dog', 'bird', 'fish', 'cow', 'chicken',
          'animal'],

  persiapan: ['Kartu gambar hewan (minimal 6: cat, dog, bird, fish, cow, chicken)'],

  // ════════════════════════════════════════════════════════════
  // MEDIA
  // ════════════════════════════════════════════════════════════

  media: [
    {
      id              : 'media-kartu-hewan',
      nama            : 'Kartu Gambar Hewan',
      tipe            : 'kartu_cetak',
      printable       : true,
      pdf_ref         : 'tp-09-v1.pdf',
      pdf_halaman     : 1,
      reusable_lintas_tp : true,
      keterangan      : '6 kartu core A5 (cat, dog, bird, fish, cow, chicken) + 4 kartu tantangan (rabbit, elephant, monkey, snake). Ilustrasi sederhana & jelas — hewan tunggal dengan latar polos. Kartu bisa dipakai kembali di TP lain yang relevan.',
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
          id    : 'tp09-pembuka-tebak-suara',
          tipe  : 'meaningful_link',
          judul : 'Tebak Suara Hewan — Hook Pembuka',
          pm    : 'joyful',

          tujuan_komunikasi : 'Bangun antusiasme + koneksi ke topik hewan via tebak-suara sebelum vocab diperkenalkan',
          vocab_target      : ['animal'],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Close your eyes! Listen carefully — what animal is this?" Guru tiru suara hewan tanpa memperlihatkan kartu. Mulai dari yang paling mudah.',
            selama  : 'Urutan: meow → woof → moo → cluck cluck. Setiap tebakan benar: reveal kartu, sebut nama Inggrisnya. "Yes! A cat! Meow!" Jika salah: "Good try! Listen again..." — ulang suara, reveal. Maksimal 4 hewan di hook ini (cukup untuk energi pembuka).',
            penutup : '"Great! Today we learn about animals in English! Animals — repeat after me: animals!" Kelas ulang bersama.',
          },

          audio_cue: {
            contoh_guru  : 'Close your eyes! What animal is this? Meow! Yes! A cat! Today we learn about animals!',
            contoh_siswa : 'Cat! Dog! Cow!',
            target_vocab : ['animal'],
          },

          media_dipakai : ['media-kartu-hewan'],

          mode: {
            mudah: {
              bantuan: 'Tunjuk kartu BERSAMAAN dengan suara (tidak perlu tebak murni). "Listen and look — a cat! Meow!" Kelas ulang nama hewannya.',
              panjang_speaking: 'Nama hewan saja.',
            },
            normal: {
              bantuan: 'Tebak suara dulu, reveal kartu setelah ada jawaban. Terima jawaban Indonesia jika siswa tahu hewannya tapi tidak tahu nama Inggrisnya — langsung kasih nama Inggrisnya.',
              panjang_speaking: 'Nama hewan dalam Inggris.',
            },
            tantangan: {
              bantuan: 'Setelah tebak, tanya: "What sound does a dog make?" — siswa sebut sendiri.',
              panjang_speaking: 'Nama + suara: "A dog! Woof!"',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_ribut      : 'Kurangi suara — bisikkan suara hewan. Siswa harus diam untuk mendengar. Efek dramatis sekaligus menenangkan kelas.',
            siswa_pasif      : 'Wajar di awal. Lanjut reveal kartu tanpa tunggu jawaban lisan — kelas sahut bersama nama hewannya.',
            tidak_ada_jawaban: '"Hmm, it says meow. Meow! Do you know?" Tunjuk kartu segera. Tidak perlu tunggu lama.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp09-pembuka-kenalkan-hewan',
          tipe  : 'modeling',
          judul : 'Kenalkan 6 Vocab Core: Cat, Dog, Bird, Fish, Cow, Chicken',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa mengenal dan dapat mengucapkan 6 nama hewan core dengan lafal yang benar',
          vocab_target      : ['cat', 'dog', 'bird', 'fish', 'cow', 'chicken'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Tempel 6 kartu core di papan berurutan. Tunjuk satu per satu — ucap pelan, kelas ulang. Mulai dari yang paling pendek/mudah: cat, dog, fish.',
            selama  : 'Urutan: cat → dog → bird → fish → cow → chicken. Setiap hewan: tunjuk kartu → ucap guru → kelas ulang → ulang sekali lagi. Untuk "chicken": pecah suku kata "chick-en" jika diperlukan. Putaran 2: tunjuk acak, kelas sahut. Putaran 3: guru tunjuk, diam — siswa sahut TANPA bantuan guru.',
            penutup : 'Tunjuk berurutan cepat. "How many animals? Let\'s count! One — cat! Two — dog!" Hitung bersama sampai 6.',
          },

          audio_cue: {
            contoh_guru  : 'Cat. Dog. Bird. Fish. Cow. Chicken. Now together — cat!',
            contoh_siswa : 'Cat! Dog! Bird! Fish! Cow! Chicken!',
            target_vocab : ['cat', 'dog', 'bird', 'fish', 'cow', 'chicken'],
          },

          media_dipakai : ['media-kartu-hewan'],

          mode: {
            mudah: {
              bantuan: '3 hewan dulu (cat, dog, bird). Fish, cow, chicken diperkenalkan tapi tidak ditarget hafal di fase ini.',
              panjang_speaking: 'Per kata satu per satu.',
            },
            normal: {
              bantuan: '6 vocab lengkap. Tunjuk → ucap → kelas ulang. 3 putaran.',
              panjang_speaking: '6 kata berurutan dan acak.',
            },
            tantangan: {
              bantuan: 'Perkenalkan 4 vocab tantangan (rabbit, elephant, monkey, snake) di akhir — tempel kartu tambahan, ucap sekali, kelas ulang sekali. Tidak ada target hafal.',
              panjang_speaking: 'Nama hewan core + coba vocab tantangan.',
            },
          },

          observation: { aktif: false },

          fallback: {
            lafal_chicken : '"Chick-en" — pecah suku kata. Ulangi 3× bersama. Jangan buru-buru.',
            lafal_bird    : 'Huruf "r" di "bird" tidak perlu sempurna — cukup "berd" jika siswa kesulitan.',
            media_tidak_tersedia : 'Gambar outline sederhana di papan: kucing (telinga lancip), anjing (telinga turun), burung (sayap), ikan (sirip), sapi (tanduk), ayam (jengger). Siswa bisa langsung tebak.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Minta kelas tutup mata. Tiru suara hewan satu per satu: meow → woof → moo → cluck. Setiap tebakan benar, reveal kartu. [What animal is this? Listen!]' },
        { tipe: 'audio',     teks: 'Close your eyes! What animal is this? Meow! Yes! A cat! Today we learn about animals!' },
        { tipe: 'instruksi', teks: 'Tempel 6 kartu core di papan (cat, dog, bird, fish, cow, chicken). Tunjuk satu per satu — ucap pelan, kelas ulang. Lakukan 3 putaran: pelan → acak → siswa sahut tanpa bantuan guru.' },
        { tipe: 'audio',     teks: 'Cat. Dog. Bird. Fish. Cow. Chicken. Now together — cat! Dog! Bird!' },
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
          id    : 'tp09-inti-chant-hewan',
          tipe  : 'chant',
          judul : 'Animal Chant — Nama + Suara',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa anchor 6 vocab core via ritme + suara hewan — memorisasi kinestetik tanpa drilling kering',
          vocab_target      : ['cat', 'dog', 'bird', 'fish', 'cow', 'chicken'],

          durasi_target_detik : 600,  // 10 menit — termasuk 2 putaran + variasi
          durasi_min_detik    : 360,

          micro_script: {
            pembuka : '"Now we make music with animals! Clap with me!" Guru mulai tepuk 4 ketukan, kelas ikuti. Setelah kelas ikut tepuk, mulai chant.',
            selama  : `TEKS CHANT (guru ucap dulu, kelas ikuti baris per baris):
"Cat cat cat — meow meow!
Dog dog dog — woof woof!
Bird bird bird — tweet tweet!
Fish fish fish — swim swim!
Cow cow cow — moo moo!
Chicken chicken chicken — cluck cluck!"

PUTARAN 1: kartu di papan terbuka. Guru ucap + tepuk, kelas ikuti.
PUTARAN 2: TANPA kartu (kartu dibalik/ditutup). Dari ingatan. Siapa yang masih hafal?
VARIASI (jika waktu cukup): ganti tepuk dengan gerakan — act out hewannya saat nama disebut (siswa bebas pilih gerakan sendiri untuk tiap hewan).`,
            penutup : '"Amazing! You are all animals! Sit down." Tunjuk kartu acak — kelas sahut nama hewannya dari chant.',
          },

          audio_cue: {
            contoh_guru  : 'Cat cat cat — meow meow! Dog dog dog — woof woof! Bird bird bird — tweet tweet! Fish fish fish — swim swim!',
            contoh_siswa : 'Cat cat cat — meow meow! Dog dog dog — woof woof! Fish fish fish — swim swim!',
            target_vocab : ['cat', 'dog', 'bird', 'fish', 'cow', 'chicken'],
          },

          media_dipakai : ['media-kartu-hewan'],

          mode: {
            mudah: {
              bantuan: 'Chant 3 baris dulu (cat, dog, bird). Fish, cow, chicken ditambah di putaran 2 jika kelas sudah siap. Kartu tetap terbuka di putaran 2.',
              panjang_speaking: 'Nama hewan saja — bagian suara opsional.',
            },
            normal: {
              bantuan: '6 baris lengkap. Putaran 2 tanpa kartu.',
              panjang_speaking: 'Nama + suara penuh.',
            },
            tantangan: {
              bantuan: 'Tambah baris tantangan di akhir: "Elephant elephant elephant — trumpet!" atau "Monkey monkey monkey — ooh ooh!" Siswa boleh improvisasi suara.',
              panjang_speaking: 'Nama + suara + vocab tantangan.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['participation', 'vocab_use'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'akurasi',
          },

          fallback: {
            kelas_tidak_ikut_chant  : 'Mulai hanya guru 1 putaran penuh sambil tepuk. Siswa dengar dulu. Putaran 2 guru + ajak baris depan. Putaran 3 seluruh kelas.',
            ritme_tidak_selaras     : 'Drop suara binatang — chant nama saja: "Cat, dog, bird, fish, cow, chicken!" 4 ketukan. Suara ditambah belakangan.',
            waktu_mepet             : 'Cukup 1 putaran dengan kartu terbuka. Skip putaran tanpa kartu dan variasi gerak.',
          },

          advance: { mode: 'timer_visible_only' },
        },

        {
          id    : 'tp09-inti-tebak-hewan',
          tipe  : 'guessing_game',
          judul : 'Tebak Hewan — Guru Beri Clue, Siswa Tebak',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa memahami deskripsi hewan sederhana (listening) dan membuat clue sendiri (speaking) dalam konteks bermain',
          vocab_target      : ['cat', 'dog', 'bird', 'fish', 'cow', 'chicken'],

          durasi_target_detik : 720,  // 12 menit — guru demo + pair
          durasi_min_detik    : 480,

          micro_script: {
            pembuka : '"Now — detective time! I give you clues, you guess the animal. Ready? Listen carefully!"',
            selama  : `FASE 1 — GURU BERI CLUE, KELAS TEBAK (4-5 menit):
Guru beri 2 clue per hewan. Kelas tebak serentak. Contoh:
• "It says meow. It has four legs. What is it?" → "A cat!"
• "It can swim. It lives in water. What is it?" → "A fish!"
• "It says woof. It is your friend. What is it?" → "A dog!"
• "It says moo. It is big and white. What is it?" → "A cow!"
• "It can fly. It says tweet. What is it?" → "A bird!"
• "It says cluck. We eat its eggs. What is it?" → "A chicken!"

Setelah setiap tebakan: konfirmasi + reveal kartu. Beri tepukan singkat.

FASE 2 — SISWA BUAT CLUE BERPASANGAN (6-7 menit):
"Now YOU are the detective! Make clues for your partner."
• Satu siswa ambil/pilih kartu (atau guru tunjuk kartu ke 1 siswa, pasangan tidak lihat)
• Siswa itu beri 1-2 clue → pasangan tebak
• Tukar peran
Guru berkeliling, bantu siswa yang bingung merumuskan clue.`,
            penutup : '"Brilliant detectives! You can describe animals in English!"',
          },

          audio_cue: {
            contoh_guru  : 'It says meow. It has four legs. What is it? A cat! Correct!',
            contoh_siswa : 'It can fly. It says tweet. What is it? A bird!',
            target_vocab : ['cat', 'dog', 'bird', 'fish', 'cow', 'chicken'],
          },

          media_dipakai : ['media-kartu-hewan'],

          mode: {
            mudah: {
              bantuan: 'Fase 1 saja. Clue disertai gestur guru (pura-pura terbang untuk bird, pura-pura berenang untuk fish). Kelas tebak nama hewan saja — tidak perlu kalimat lengkap.',
              panjang_speaking: 'Nama hewan saja: "Cat!" / "Bird!"',
            },
            normal: {
              bantuan: 'Fase 1 + Fase 2. Clue berpasangan boleh 1 clue saja. Guru bantu formulasi: "What does it say? Does it have legs?"',
              panjang_speaking: '"It says [suara]." atau "It can [aksi]." — 1 kalimat clue, nama tebakan.',
            },
            tantangan: {
              bantuan: 'Siswa buat 2 clue penuh pakai kalimat "A ___ can ___." dan "A ___ has ___." Boleh pakai vocab tantangan (rabbit, elephant, monkey, snake) jika sudah hafal dari putaran chant.',
              panjang_speaking: '"A cat can meow. A cat has four legs. What is it?" — clue 2 kalimat penuh.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 5,
            indikator       : ['vocab_use', 'response', 'confidence'],
            rotasi_priority : 'belum_speaking_turn',
            tag_set         : 'akurasi',
          },

          fallback: {
            pair_tidak_bisa_buat_clue : 'Guru tunjuk satu fitur dari kartu: "Look — does it fly? Does it swim?" Siswa pilih ya/tidak, lalu rangkai jadi kalimat dengan bantuan guru.',
            kelas_ribut               : 'Kembali ke Fase 1 — guru yang beri clue, kelas tebak serentak. Lebih terstruktur.',
            waktu_mepet               : 'Skip Fase 2. Lanjut 2-3 clue guru, langsung ke penutup.',
            vocab_tantangan_muncul    : 'Jika siswa spontan sebut rabbit/elephant dari putaran chant sebelumnya: apresiasi, konfirmasi nama, lanjut. Tidak perlu koreksi — justru bagus.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'CHANT: Guru mulai tepuk 4 ketukan. Teks chant: "Cat cat cat — meow meow! Dog dog dog — woof woof! Bird bird bird — tweet tweet! Fish fish fish — swim swim! Cow cow cow — moo moo! Chicken chicken chicken — cluck cluck!" Lakukan 2 putaran. Putaran 2 tanpa lihat kartu.' },
        { tipe: 'audio',     teks: 'Cat cat cat — meow meow! Dog dog dog — woof woof! Bird bird bird — tweet tweet! Fish fish fish — swim swim! Cow cow cow — moo moo! Chicken chicken chicken — cluck cluck!' },
        { tipe: 'instruksi', teks: 'GUESSING GAME Fase 1: guru beri 2 clue per hewan, kelas tebak bersama. Contoh: "It says meow. It has four legs. What is it?" Reveal kartu setelah tebakan.' },
        { tipe: 'audio',     teks: 'It says meow. It has four legs. What is it? A cat! Correct!' },
        { tipe: 'instruksi', teks: 'GUESSING GAME Fase 2: siswa berpasangan. Satu beri clue, satu tebak. Tukar peran. Guru berkeliling bantu. [Make a clue for your partner — what animal is it?]' },
        { tipe: 'audio',     teks: 'It can fly. It says tweet. What is it? A bird!' },
        { tipe: 'instruksi', teks: 'DIFERENSIASI — Tantangan: clue pakai kalimat "A ___ can ___." / "A ___ has ___." Boleh coba vocab rabbit, elephant, monkey, snake. Belum bisa: 1 clue saja + nama hewan, boleh Indonesia untuk clue-nya.' },
        { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: skip Fase 2 pair. Lanjutkan 2-3 clue guru, langsung penutup.' },
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
          id    : 'tp09-penutup-kartu-cepat',
          tipe  : 'review_quick',
          judul : 'Tunjuk Kartu Cepat — Sahut Nama Hewan',
          pm    : 'joyful',

          tujuan_komunikasi : 'Recap cepat: konfirmasi retensi 6 vocab core dengan tempo meningkat',
          vocab_target      : ['cat', 'dog', 'bird', 'fish', 'cow', 'chicken'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Last round — fast! I show the card, you say the animal. Ready? Go!"',
            selama  : 'Tunjuk kartu acak. Kelas sahut bersama. Mulai lambat (1 kartu per 3 detik), naik ke cepat (1 kartu per detik). 2 putaran acak. Di putaran 2: guru tidak ucap, hanya tunjuk kartu — kelas sahut sendiri.',
            penutup : '"Excellent! You know 6 animals in English! Cat, dog, bird, fish, cow, chicken — amazing!"',
          },

          audio_cue: {
            contoh_guru  : 'Ready? What is this? Fast!',
            contoh_siswa : 'Cat! Bird! Fish! Dog! Cow! Chicken!',
            target_vocab : ['cat', 'dog', 'bird', 'fish', 'cow', 'chicken'],
          },

          media_dipakai : ['media-kartu-hewan'],

          mode: {
            mudah: {
              bantuan: 'Tempo lambat konstan. 4 vocab (cat, dog, bird, fish). Cow & chicken opsional.',
              panjang_speaking: 'Nama hewan.',
            },
            normal: {
              bantuan: '6 vocab. Tempo lambat → cepat. 2 putaran.',
              panjang_speaking: 'Nama hewan cepat.',
            },
            tantangan: {
              bantuan: 'Siswa harus sahut dengan pola: "A cat!" (bukan hanya "Cat!"). Atau sahut langsung dengan suara hewan: guru tunjuk kartu → siswa sahut suara ("Meow!") → lalu sebut nama.',
              panjang_speaking: '"A cat!" atau nama + suara.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun : 'Guru tunjuk kartu dengan dramatis: tutup setengah dulu, reveal perlahan. "Hmm, what is this...?" Beri efek suspen.',
            waktu_mepet  : 'Cukup 4 vocab di 1 putaran. Lanjut closure.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp09-penutup-closure',
          tipe  : 'closure_reinforcement',
          judul : 'Spot Animals Anywhere & Goodbye',
          pm    : 'joyful',

          tujuan_komunikasi : 'Penguatan transfer: apply vocab di luar kelas — hewan bisa ditemukan di mana saja, bukan hanya yang punya peliharaan',
          vocab_target      : [],

          durasi_target_detik : 90,
          durasi_min_detik    : 45,

          micro_script: {
            pembuka : '"You know 6 animals in English now!"',
            selama  : '"Next time — anywhere — you see an animal: say it in English! See a cat on the street? Say: cat! See a bird on the tree? Say: bird! See a fish at the market? Say: fish! You can do it!" Demo sambil tunjuk kartu masing-masing hewan.',
            penutup : '"Animals are everywhere. Speak English when you see them! Goodbye class!"',
          },

          audio_cue: {
            contoh_guru  : 'Next time you see a cat, say: cat! See a bird? Say: bird! Animals are everywhere — speak English! Goodbye class!',
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
        { tipe: 'instruksi', teks: 'Tunjuk kartu hewan acak — kelas sahut nama bersama. Tempo lambat ke cepat. 2 putaran. Putaran 2: guru diam, hanya tunjuk kartu.' },
        { tipe: 'audio',     teks: 'Excellent! You know 6 animals in English! Cat, dog, bird, fish, cow, chicken — amazing!' },
        { tipe: 'instruksi', teks: 'Closure inklusif: "Next time you see an animal anywhere — say it in English! See a cat? Say cat! See a bird? Say bird!" Tunjuk kartu satu per satu saat sebut.' },
        { tipe: 'audio',     teks: 'Animals are everywhere. Speak English when you see them! Goodbye class!' },
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
          id    : 'tp09-penilaian-clue-individual',
          tipe  : 'observation_validation',
          judul : 'Beri Clue ke Siswa — Tebak & Sebut Nama Hewan',
          pm    : null,

          tujuan_komunikasi : 'Validasi siswa belum terobservasi: mampu identifikasi hewan dari clue + sebut nama dengan tepat',
          vocab_target      : [],

          durasi_target_detik : 300,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Sambil siswa berkemas, dekati 4-5 siswa yang belum sempat diobservasi. Beri 1 clue sederhana dan amati respons.',
            selama  : '"It says meow — what is it?" Amati: respons langsung? Lafal? Yang masih tertukar cow/chicken? Tunjuk kartu jika tidak ada respons setelah 5 detik — catat sebagai "perlu lebih banyak latihan".',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'It says meow — what is it? It can fly — what is it?',
            contoh_siswa : '',
            target_vocab : [],
          },

          media_dipakai : ['media-kartu-hewan'],
          mode: null,

          observation: {
            aktif           : true,
            n_siswa         : 99,
            indikator       : ['vocab_use', 'response', 'confidence'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'akurasi',
          },

          fallback: {
            siswa_pasif : 'Jangan paksa. Tunjuk kartu — catat apakah siswa bisa sebut nama saat lihat visual. Catat "perlu waktu lebih" — bukan "gagal".',
            waktu_mepet : 'Cukup 3 siswa prioritas yang paling belum terpantau.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Sambil siswa berkemas, dekati 4-5 siswa yang belum diobservasi. Beri 1 clue sederhana: [It says meow — what is it?] atau [It can fly — what is it?]' },
        { tipe: 'instruksi', teks: 'Nilai Listening: merespons clue verbal. Speaking: lafal nama hewan. Reading: baca label di kartu (jika dipakai sebagai prompt).' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang masih tertukar cow/chicken? Siapa yang perlu clue visual (kartu) untuk merespons?' },
      ],
    },

  ],

};

export default TP_09;
