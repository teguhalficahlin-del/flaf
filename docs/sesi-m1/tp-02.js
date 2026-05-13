/**
 * =============================================================
 * FLAF — TP 02 (Introducing Myself)
 * File: data/tp-02.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Sesi M1 — Mei 2026
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[1] (v3)
 *
 * KARAKTER KHAS TP 02 (lihat juga COMPARISON-M1):
 *   - Interaksi sosial dengan teman (mirip TP 01 tapi konten lebih kaya)
 *   - Self-disclosure: anak share informasi tentang diri sendiri
 *   - Walk and talk — flow kontinyu, tidak dipecah jadi 2 aktivitas
 *   - Tampil di depan kelas — emotional safety penting
 *
 * KEPUTUSAN MIGRASI:
 *   - Walk and talk = 1 aktivitas pair_work_walk (bukan 2)
 *     → Anak 6-7 butuh flow kontinyu (Dok 02 §2 rentang fokus pendek)
 *   - Konteks kultural: fokus "My name is" / "I am ... years old"
 *     → Variasi "I'm", "Nice to meet you" hanya di mode tantangan
 *     → Anak fase A butuh pola berulang (Dok 02 §2, Dok 07 §5)
 *   - Tampil di depan kelas (Penutup): flags['kompetitif_safety'] TIDAK perlu
 *     karena ini sukarela. Mode mudah = boleh diam, mode tantangan = lengkap.
 *
 * PERUBAHAN SUBSTANSI dari v3:
 *   1. Walk and talk diformat sebagai 1 aktivitas pair_work dengan
 *      mode_text yang jelas tentang gerakan
 *   2. Mode diferensiasi 3-tier (mudah/normal/tantangan) per aktivitas
 *   3. Aktivitas tampil di depan kelas (Penutup) ditambah fallback eksplisit
 *      untuk siswa pemalu — boleh tampil dengan bantuan guru
 *   4. Name tag activity diberi mode (mudah: nama saja, tantangan: nama lengkap)
 *
 * REFERENSI:
 *   - SCHEMA.md v4.2 untuk kontrak struktur
 *   - tp-01.js dan tp-04.js sebagai TP referensi
 * =============================================================
 */

const TP_02 = {

  // ════════════════════════════════════════════════════════════
  // IDENTITAS — tidak berubah dari v3
  // ════════════════════════════════════════════════════════════

  id       : 'tp-02',
  nomor    : 2,
  kelas    : 1,
  nama     : 'Introducing Myself',
  tema     : 'Interaksi Sosial Dasar',
  deskripsi: `Peserta didik belajar memperkenalkan diri sendiri meliputi nama
    dan usia. Interaksi dilakukan secara berpasangan dan di depan kelas.`,

  indikator: [
    'Peserta didik dapat menyebutkan nama diri sendiri menggunakan struktur "My name is ..." atau "I am ..." dengan lafal yang jelas.',
    'Peserta didik dapat menyebutkan usia menggunakan struktur "I am ... years old" dan merespons pertanyaan "How old are you?"',
    'Peserta didik dapat memperkenalkan diri lengkap (nama + usia) kepada teman dan guru dalam situasi bermain peran.',
  ],

  vocab: ['name', 'my name is', 'I am', 'years old', 'how old',
          'nice to meet you', 'what is your name'],

  // BACKWARD COMPAT
  persiapan: ['Papan tulis + spidol', 'Kertas name tag kosong'],

  // ════════════════════════════════════════════════════════════
  // MEDIA — terstruktur
  // ════════════════════════════════════════════════════════════

  media: [
    {
      id              : 'media-name-tag-kosong',
      nama            : 'Kertas Name Tag Kosong',
      tipe            : 'kartu_cetak',
      printable       : true,
      pdf_ref         : 'tp-02-v1.pdf',
      pdf_halaman     : 1,
      reusable_lintas_tp : true,
      keterangan      : 'Kertas A6 dengan kotak nama, untuk diisi siswa sendiri',
    },
    {
      id              : 'media-papan-tulis',
      nama            : 'Papan Tulis Kelas',
      tipe            : 'objek_fisik',
      printable       : false,
      reusable_lintas_tp : true,
      keterangan      : 'Sudah tersedia di kelas',
    },
  ],

  // ════════════════════════════════════════════════════════════
  // SKENARIO — empat fase, hybrid structure
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
          id    : 'tp02-pembuka-sapa',
          tipe  : 'sapaan_kelas',
          judul : 'Sapa & Pengantar',
          pm    : 'mindful',

          tujuan_komunikasi : 'Membuka kelas dan memberi tahu fokus hari ini: belajar perkenalan',
          vocab_target      : [],

          durasi_target_detik : 120,
          durasi_min_detik    : 60,

          micro_script: {
            pembuka : 'Sapa kelas. Beri tahu hari ini belajar perkenalan diri.',
            selama  : '',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Good morning, class! Let us learn how to introduce ourselves today!',
            contoh_siswa : 'Good morning, teacher!',
            target_vocab : [],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Ucapkan pelan. Beri jeda untuk respons. Gunakan gestur "you" dan "me".',
              panjang_speaking: 'Cukup balas salam.',
            },
            normal: {
              bantuan: 'Sapa langsung, ulang sekali kalau respons belum kompak.',
              panjang_speaking: 'Balas salam dengan kompak.',
            },
            tantangan: {
              bantuan: 'Tanya juga: "How are you?" sebagai bonus warm-up.',
              panjang_speaking: 'Salam + balas "How are you" sederhana.',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_ribut : 'Tangan di pinggang. Tunggu hening. Mulai pelan.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp02-pembuka-model-guru',
          tipe  : 'modeling',
          judul : 'Guru Perkenalkan Diri (Model)',
          pm    : 'mindful',

          tujuan_komunikasi : 'Guru jadi model: cara perkenalkan diri yang sederhana dan jelas',
          vocab_target      : ['my name is', 'I am'],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Tulis nama Anda di papan sambil mengeja huruf demi huruf. Lalu perkenalkan diri.',
            selama  : 'Setelah perkenalan, tanya kelas: "What is my name?" Biarkan mereka jawab.',
            penutup : 'Konfirmasi jawaban benar dengan senyum.',
          },

          audio_cue: {
            contoh_guru  : 'Hello! My name is [nama Anda]. I am a teacher. Nice to meet you!',
            contoh_siswa : 'Your name is [nama Anda]!',
            target_vocab : ['my name is', 'name'],
          },

          media_dipakai : ['media-papan-tulis'],

          mode: {
            mudah: {
              bantuan: 'Sederhana: hanya "My name is [nama]." Ulang 2x sambil tunjuk diri.',
              panjang_speaking: 'Kelas balas hanya nama: "[Nama]!"',
            },
            normal: {
              bantuan: 'Perkenalan standar 3 kalimat: nama + profesi + nice to meet you.',
              panjang_speaking: 'Kelas balas full kalimat: "Your name is [nama]!"',
            },
            tantangan: {
              bantuan: 'Tambah info: "I love teaching English" atau "I am from [kota]".',
              panjang_speaking: 'Kelas ulang juga info tambahan.',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_ribut : 'Mulai pelan dengan suara rendah. Kelas akan ikut tenang.',
            siswa_pasif : 'Tanya per baris: "Baris depan, what is my name?"',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'audio',         teks: 'Good morning, class! Let us learn how to introduce ourselves today!' },
        { tipe: 'instruksi',     teks: 'Guru perkenalkan diri sebagai model. Tulis nama di papan sambil berbicara — pelan dan jelas.', pm: 'mindful' },
        { tipe: 'audio',         teks: 'Hello! My name is ... I am a teacher. Nice to meet you!' },
        { tipe: 'instruksi',     teks: 'Tanya kelas — biarkan mereka menjawab sebelum guru konfirmasi.' },
        { tipe: 'audio',         teks: 'Everyone — what is my name? Louder please!' },
        { tipe: 'respons_siswa', teks: 'Your name is ...!' },
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
          id    : 'tp02-inti-pola-nama',
          tipe  : 'chorus',
          judul : 'Pola "My name is ___."',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa mengenal pola dasar perkenalan nama',
          vocab_target      : ['my name is'],

          durasi_target_detik : 300,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Tulis di papan: "My name is ___." Tunjuk papan, ucap pola dulu.',
            selama  : 'Beri 3 contoh nama berbeda (Budi, Sari, Andi). Kelas ulang setelah tiap nama.',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'My name is Budi. My name is Sari. My name is Andi.',
            contoh_siswa : 'My name is Budi. My name is Sari. My name is Andi.',
            target_vocab : ['my name is'],
          },

          media_dipakai : ['media-papan-tulis'],

          mode: {
            mudah: {
              bantuan: 'Ulang 4x. Pakai gestur tangan ke dada saat ucap "My name is".',
              panjang_speaking: 'Kelas ulang per kalimat, satu per satu.',
            },
            normal: {
              bantuan: 'Ulang 2x setiap nama. Tanpa gestur.',
              panjang_speaking: '3 kalimat berturut-turut.',
            },
            tantangan: {
              bantuan: 'Tanpa pakai contoh nama. Tanya: "Who can say it?" Pilih 3 siswa.',
              panjang_speaking: 'Siswa coba sendiri tanpa model.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_pasif : 'Ulang dengan tepuk tangan di kata "name". Tepuk satu kali per kata.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp02-inti-name-tag',
          tipe  : 'meaningful_link',
          judul : 'Buat Name Tag Sendiri',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa hubungkan nama diri sendiri dengan tulisan',
          vocab_target      : ['my name is'],

          durasi_target_detik : 480,  // 8 menit
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : 'Bagikan kertas name tag. Tulis nama Anda di papan sebagai contoh.',
            selama  : 'Siswa tulis nama sendiri. Berkeliling, bantu yang belum bisa menulis.',
            penutup : 'Setelah selesai, ajak setiap siswa pegang name tag dan ucap: "My name is [nama]."',
          },

          audio_cue: {
            contoh_guru  : 'Write your name here. Then say: My name is...',
            contoh_siswa : 'My name is [nama saya]!',
            target_vocab : ['my name is', 'name'],
          },

          media_dipakai : ['media-name-tag-kosong'],

          mode: {
            mudah: {
              bantuan: 'Tulis nama panggilan saja (mis: "Budi" bukan "Budi Setiawan"). Bantu siswa yang belum lancar menulis dengan menulis tipis dulu, mereka menebali.',
              panjang_speaking: 'Cukup nama panggilan: "My name is Budi."',
            },
            normal: {
              bantuan: 'Tulis nama panggilan sendiri tanpa bantuan tipis. Ucap nama saat selesai.',
              panjang_speaking: 'Nama panggilan dalam pola lengkap.',
            },
            tantangan: {
              bantuan: 'Tulis nama lengkap. Dorong: "And what is your nickname?"',
              panjang_speaking: 'Nama lengkap + nickname.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['participation', 'confidence'],
            rotasi_priority : 'belum_observed',
          },

          fallback: {
            siswa_pasif         : 'Tulis nama bersama-sama di papan tulis terlebih dulu. Lalu siswa salin.',
            media_tidak_tersedia: 'Pakai potongan kertas biasa. Atau siswa tulis di buku tulis mereka sendiri.',
            waktu_mepet         : 'Skip menulis. Cukup setiap siswa ucap "My name is [nama]" lisan.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp02-inti-pola-usia',
          tipe  : 'chorus',
          judul : 'Pola "I am ___ years old."',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa mengenal cara menyebut usia, hubungkan dengan ulang tahun mereka',
          vocab_target      : ['I am', 'years old', 'how old'],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Tanya: "Berapa umur kalian? Ada yang ulang tahun bulan ini?" Hubungkan dengan ulang tahun.',
            selama  : 'Tulis pola di papan: "I am ___ years old." Beri contoh dengan usia siswa-siswa kelas (6 atau 7).',
            penutup : 'Ucap bersama: "I am six years old!" dan "I am seven years old!"',
          },

          audio_cue: {
            contoh_guru  : 'How old are you? I am six years old. I am seven years old.',
            contoh_siswa : 'I am six years old! I am seven years old!',
            target_vocab : ['I am', 'years old', 'how old', 'six', 'seven'],
          },

          media_dipakai : ['media-papan-tulis'],

          mode: {
            mudah: {
              bantuan: 'Sederhana: tunjuk 6 jari, lalu 7 jari. Siswa ikuti gestur dan ucap.',
              panjang_speaking: 'Cukup "Six!" atau "Seven!" saja.',
            },
            normal: {
              bantuan: 'Tanpa jari. Pola lengkap. Kelas dibagi: yang umur 6 ucap kalimat 6, yang umur 7 ucap kalimat 7.',
              panjang_speaking: 'Kalimat lengkap sesuai usia masing-masing.',
            },
            tantangan: {
              bantuan: 'Tanya tanggal ulang tahun: "When is your birthday?" Boleh dijawab dengan bulan saja.',
              panjang_speaking: 'Usia + bulan ulang tahun.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_pasif : 'Ulang dengan tunjuk jari. "Six fingers — six years old!" Buat menjadi visual.',
          },

          advance: { mode: 'manual' },
        },

        // ─── BARU/DIPERTAHANKAN: Walk and Talk (satu aktivitas tunggal) ───
        {
          id    : 'tp02-inti-walk-and-talk',
          tipe  : 'pair_work',
          judul : 'Pair Work — Walk & Talk: Perkenalan dengan 3 Teman',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa praktik perkenalan dengan beberapa teman berbeda',
          vocab_target      : ['my name is', 'I am', 'years old'],

          durasi_target_detik : 300,  // 5 menit — total termasuk demo + jalan + recall
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Stand up! Walk around. Meet 3 friends. Introduce yourself. Like this..." Demo dengan 1 siswa di depan kelas.',
            selama  : 'Berkeliling. Pantau pasangan yang macet, bantu mereka. Beri jempol untuk yang aktif.',
            penutup : '"Stop. Sit down. Now I want to know — what friend did you meet?" Panggil 2-3 siswa untuk ceritakan.',
          },

          audio_cue: {
            contoh_guru  : 'Walk around. Meet a friend. Say: Hello! My name is...',
            contoh_siswa : 'Hello! My name is [nama]. I am [usia] years old. Nice to meet you!',
            target_vocab : ['my name is', 'I am', 'years old', 'nice to meet you'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Demo dengan 2 siswa dulu di depan kelas. Boleh hanya cari 1-2 teman saja. Pegang name tag mereka.',
              panjang_speaking: 'Cukup "My name is [nama]." — usia opsional.',
            },
            normal: {
              bantuan: 'Demo cepat dengan 1 siswa. Target 3 teman.',
              panjang_speaking: '"My name is ___. I am ___ years old." Lengkap.',
            },
            tantangan: {
              bantuan: 'Tanpa demo. Tanya balik teman: "What is your favorite color?" Tukar info bonus.',
              panjang_speaking: 'Perkenalan lengkap + tambah 1 info bonus.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 3,
            indikator       : ['participation', 'confidence', 'vocab_use'],
            rotasi_priority : 'belum_speaking_turn',
          },

          fallback: {
            pair_tidak_jalan : 'Demo 1 pasangan di depan kelas. Beri 30 detik, coba lagi. Mainkan musik pelan untuk warm energy.',
            siswa_pasif      : 'Gabung ke pasangan yang aktif. Atau guru jadi "teman" untuk siswa diam — siswa praktik dengan guru.',
            kelas_ribut      : 'Stop walking. Semua kembali ke tempat duduk. Praktik perkenalan dengan teman sebangku saja.',
            waktu_mepet      : 'Cukup 1 teman saja. Atau langsung skip ke aktivitas berikutnya.',
          },

          advance: { mode: 'timer_visible_only' },
        },
      ],

      langkah: [
        { tipe: 'instruksi',     teks: 'Tulis di papan: "My name is ___." Tunjuk papan, ucapkan bersama dua kali.', pm: 'mindful' },
        { tipe: 'audio',         teks: 'My name is Budi. My name is Sari. My name is Andi.' },
        { tipe: 'respons_siswa', teks: 'My name is ...' },
        { tipe: 'instruksi',     teks: 'Bagikan kertas name tag. Siswa tulis nama sendiri. Bantu yang belum bisa menulis — tidak apa-apa kalau belum rapi.' },
        { tipe: 'instruksi',     teks: 'Ajarkan usia — hubungkan dengan ulang tahun yang pernah mereka rayakan.', pm: 'meaningful' },
        { tipe: 'audio',         teks: 'How old are you? I am six years old. I am seven years old.' },
        { tipe: 'respons_siswa', teks: 'I am six years old! I am seven years old!' },
        { tipe: 'instruksi',     teks: 'Permainan walk and talk: siswa berdiri, berjalan 2 menit, perkenalkan diri ke 3 teman berbeda. Guru pantau dan bantu.', pm: 'joyful' },
        { tipe: 'audio',         teks: 'Hello! My name is ... I am ... years old. Nice to meet you!' },
        { tipe: 'respons_siswa', teks: 'Hi! My name is ... I am ... years old. Nice to meet you too!' },
        { tipe: 'diferensiasi',  sudah: 'Dorong menambahkan "I am from ..." atau "I like ..." setelah nama dan usia.', belum: 'Boleh hanya nama saja dulu, usia bisa belakangan — tidak ada paksaan.' },
        { tipe: 'darurat',       teks: 'Batalkan permainan jalan. Latihan berpasangan di tempat duduk masing-masing — cukup saling perkenalkan nama saja.' },
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
          id    : 'tp02-penutup-tampil-depan',
          tipe  : 'review_quick',
          judul : 'Sukarela Tampil di Depan Kelas',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa berani perkenalkan diri di depan kelas dengan dukungan suportif',
          vocab_target      : ['my name is', 'I am', 'years old'],

          durasi_target_detik : 360,  // 6 menit
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Who wants to come to the front?" Panggil 3 sukarela maju. Beri tepuk semangat sebelum mereka mulai.',
            selama  : 'Setelah tiap penampilan, ajak kelas tepuk tangan meriah. Beri komentar positif: "Great job!"',
            penutup : '"You are brave! Thank you, friends." Apresiasi semua sukarela.',
          },

          audio_cue: {
            contoh_guru  : 'Come to the front — introduce yourself!',
            contoh_siswa : 'Hello! My name is [nama]. I am [usia] years old. Nice to meet you!',
            target_vocab : ['my name is', 'I am', 'years old', 'nice to meet you'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Pilih 1-2 sukarela saja (yang aktif). Guru berdiri di sebelah mereka untuk dukungan. Bantu kalau macet dengan ulang pelan.',
              panjang_speaking: 'Cukup "My name is [nama]."',
            },
            normal: {
              bantuan: '3 sukarela. Guru mundur sedikit, biarkan mereka mandiri. Beri kode "kamu bisa" dengan jempol.',
              panjang_speaking: 'Perkenalan lengkap.',
            },
            tantangan: {
              bantuan: '3 sukarela. Setelah masing-masing selesai, kelas tanya 1 pertanyaan ke yang tampil ("What is your favorite color?").',
              panjang_speaking: 'Perkenalan + jawab 1 pertanyaan kelas.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 3,
            indikator       : ['confidence', 'vocab_use'],
            rotasi_priority : 'belum_observed',
          },

          fallback: {
            siswa_pasif : 'Jangan paksa. Apresiasi yang sudah mau. Tambah motivasi: "Maybe next time?"',
            waktu_mepet : 'Cukup 1 sukarela. Tutup dengan apresiasi kelas.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp02-penutup-refleksi-teman',
          tipe  : 'reflection',
          judul : 'Refleksi: Apa yang Kamu Pelajari tentang Teman?',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa sadar mereka kenal teman baru hari ini',
          vocab_target      : [],

          durasi_target_detik : 180,
          durasi_min_detik    : 60,

          micro_script: {
            pembuka : 'Tanya: "Siapa yang tahu nama teman baru hari ini?" (boleh dalam bahasa Indonesia)',
            selama  : 'Dengar 2-3 jawaban. Apresiasi kalau ada yang sebut nama lengkap teman.',
            penutup : '"Bagus — sekarang kita kenal lebih banyak teman!"',
          },

          audio_cue: {
            contoh_guru  : 'Who knows a new friend\'s name today?',
            contoh_siswa : '',
            target_vocab : [],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Tanya 1-2 siswa dengan menunjuk. Jawaban bahasa Indonesia OK.',
              panjang_speaking: 'Sebut nama 1 teman.',
            },
            normal: {
              bantuan: 'Tanya 2-3 siswa sukarela. Dorong jawab pakai "My friend is [nama]."',
              panjang_speaking: '"My friend is [nama]."',
            },
            tantangan: {
              bantuan: 'Tanya 3 siswa. Tambah: "Tell me one thing about your friend."',
              panjang_speaking: 'Nama + 1 info tentang teman.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_pasif : 'Guru cerita sendiri tentang teman: "I met Aditia today. He likes football."',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp02-penutup-apresiasi',
          tipe  : 'closure_reinforcement',
          judul : 'Apresiasi & Goodbye',
          pm    : 'joyful',

          tujuan_komunikasi : 'Closure positif dengan pencapaian',
          vocab_target      : [],

          durasi_target_detik : 60,
          durasi_min_detik    : 30,

          micro_script: {
            pembuka : '"Great job, everyone! You can introduce yourself in English now!"',
            selama  : '"Goodbye! See you next time!"',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Great job, everyone! You can introduce yourself in English! Goodbye!',
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
        { tipe: 'instruksi',     teks: 'Panggil 3 siswa sukarela maju. Beri tepuk semangat sebelum mereka mulai.', pm: 'joyful' },
        { tipe: 'audio',         teks: 'Come to the front — introduce yourself!' },
        { tipe: 'respons_siswa', teks: 'Hello! My name is ... I am ... years old. Nice to meet you!' },
        { tipe: 'instruksi',     teks: 'Setelah tiap penampilan, ajak kelas bertepuk tangan meriah.' },
        { tipe: 'instruksi',     teks: 'Refleksi: tanya siswa — apakah mereka tahu nama lengkap teman baru yang baru dikenal hari ini?', pm: 'meaningful' },
        { tipe: 'audio',         teks: 'Great job, everyone! You can introduce yourself in English!' },
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
          id    : 'tp02-penilaian-tanya-langsung',
          tipe  : 'observation_validation',
          judul : 'Tanya Langsung 4-5 Siswa',
          pm    : null,

          tujuan_komunikasi : 'Validasi kemampuan menjawab nama dan usia secara spontan',
          vocab_target      : [],

          durasi_target_detik : 300,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Sambil siswa berkemas, dekati 4-5 siswa dan tanya langsung tanpa pemberitahuan.',
            selama  : 'Amati: respons cepat? Jawab dalam Inggris? Masih diam? Jangan beri kode lewat ekspresi.',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'What is your name? How old are you?',
            contoh_siswa : '',
            target_vocab : [],
          },

          media_dipakai : [],
          mode: null,

          observation: {
            aktif           : true,
            n_siswa         : 99,
            indikator       : ['response', 'confidence', 'vocab_use'],
            rotasi_priority : 'belum_observed',
          },

          fallback: {
            siswa_pasif : 'Jangan paksa. Catat sebagai "belum cukup percaya diri" — bukan "gagal".',
            waktu_mepet : 'Cukup 3 siswa prioritas. Sisanya di sesi berikutnya.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Sambil siswa berkemas, dekati 4–5 siswa dan tanya langsung tanpa pemberitahuan.' },
        { tipe: 'audio',     teks: 'What is your name? How old are you?' },
        { tipe: 'instruksi', teks: 'Nilai Listening: merespons pertanyaan nama/usia. Speaking: mengucapkan nama sendiri dengan jelas. Reading: bisa baca name tag.' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang hanya diam? Siapa yang menjawab dalam bahasa Indonesia? Mereka perlu latihan lebih.' },
      ],
    },

  ],

};

export default TP_02;
