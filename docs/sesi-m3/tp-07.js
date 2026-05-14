/**
 * =============================================================
 * FLAF — TP 07 (My Family)
 * File: data/tp-07.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Sesi M3 — Mei 2026 (revisi 2)
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[6] (v3 placeholder/v2)
 *
 * KARAKTER KHAS TP 07 (berbeda dari TP 06):
 *   - Topik PERSONAL/AFEKTIF — keluarga bukan benda netral
 *   - Vocab gendered + generational: mother/father/sister/brother/
 *     grandmother/grandfather
 *   - Pola target: "This is my ___" (possessive personal)
 *   - Sensitivitas: struktur keluarga siswa bervariasi
 *     (single parent, yatim, tinggal dgn kakek-nenek, dll)
 *   - Transfer skill ke rumah dengan recycle salam TP 01
 *
 * KEPUTUSAN MIGRASI (Sesi M3 — revisi 2):
 *   - Q1c (refined): INKLUSIF + SCRIPTED. Guru tidak improvisasi.
 *         Frasa kunci: "Siapa yang tinggal bersamamu di rumah?
 *         Itu keluargamu." Ditulis konkret di micro_script.
 *   - Q2c: SKIP presentasi ke kelas. Pair_work = primary speaking turn.
 *         Anak 6-7 tahun belum siap tampil di depan kelas dalam
 *         bahasa asing. Presentasi hanya di fallback untuk kelas
 *         yang sangat aktif (opt-in by class temperature).
 *   - Q3a: KARTU GENERIK SAJA. Foto dari rumah bergantung pada
 *         kondisi rumah → tidak bisa dijamin. Zero-prep, konsisten
 *         dengan TP 06. Guru fasilitas minimal tetap bisa jalankan.
 *   - Q4b (refined): TRANSFER = recycle salam TP 01. Bukan struktur
 *         baru ("This is my mother tonight"). Cukup: "Tonight say
 *         Good night to your family! Tomorrow morning say Good
 *         morning!" — 2 momen nyata di rumah.
 *
 * AKTIVITAS BARU di Inti (tidak ada di v3):
 *   - chant ritmis (tipe: tpr_action): clap-clap-mother pattern.
 *     Lebih sederhana dari gerakan per-anggota — semua siswa bisa
 *     ikut tanpa hafal gerakan khusus. Energi kinestetik tetap ada,
 *     eksekusinya mudah untuk guru fasilitas minimal.
 *
 * PERUBAHAN SUBSTANSI dari v3:
 *   1. Presentasi individual DIHAPUS dari main flow → ke fallback
 *   2. Pendekatan inklusif scripted (bukan dari improvisasi guru)
 *   3. Chant ritmis aktivitas baru di Inti
 *   4. Closure = transfer dgn recycle salam TP 01 (zero vocab baru)
 *   5. Media disederhanakan: 1 entri (kartu generik saja)
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - Pattern struktur: TP 06
 *   - Recycle vocab: TP 01 (Good morning, Good night)
 * =============================================================
 */

const TP_07 = {

  // ════════════════════════════════════════════════════════════
  // IDENTITAS
  // ════════════════════════════════════════════════════════════

  id       : 'tp-07',
  nomor    : 7,
  kelas    : 1,
  nama     : 'My Family',
  tema     : 'Keluarga dan Rumah',
  deskripsi: `Peserta didik mengenal anggota keluarga dan memperkenalkan keluarga
    menggunakan pola "This is my ___" secara sederhana dan inklusif.`,

  indikator: [
    'Peserta didik dapat menyebut anggota keluarga (mother, father, sister, brother, grandmother, grandfather) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan anggota keluarga menggunakan "This is my ..." dengan kartu sebagai konteks.',
    'Peserta didik dapat memperkenalkan keluarga mereka dalam 2–3 kalimat sederhana ke teman.',
  ],

  vocab: ['mother', 'father', 'sister', 'brother', 'grandmother', 'grandfather',
          'family', 'this is my'],

  persiapan: ['Kartu gambar anggota keluarga (6 kartu generik)'],

  // ════════════════════════════════════════════════════════════
  // MEDIA
  // ════════════════════════════════════════════════════════════

  media: [
    {
      id              : 'media-kartu-keluarga',
      nama            : 'Kartu Anggota Keluarga',
      tipe            : 'kartu_cetak',
      printable       : true,
      pdf_ref         : 'tp-07-v1.pdf',
      pdf_halaman     : 1,
      reusable_lintas_tp : true,
      keterangan      : '6 kartu A5 generik: mother, father, sister, brother, grandmother, grandfather. Ilustrasi netral (beragam usia & penampilan) supaya inklusif untuk semua bentuk keluarga.',
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
          id    : 'tp07-pembuka-sapa-keluarga',
          tipe  : 'meaningful_link',
          judul : 'Sapa & Bicara Tentang Keluarga',
          pm    : 'mindful',

          tujuan_komunikasi : 'Sapa kelas + bangun koneksi afektif ke topik keluarga dengan pendekatan inklusif',
          vocab_target      : ['family'],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Sapa kelas. "Today we talk about family! Family is special." Tunggu perhatian terkumpul.',
            selama  : 'INKLUSIVITAS — ucap pelan dalam Bahasa Indonesia: "Coba pikir. Siapa yang tinggal bersamamu di rumah? Itu keluargamu. Bisa papa, mama, kakak, adik, kakek, nenek, om, tante — siapa pun. Semua itu keluarga." Jangan tunjuk siswa untuk menjawab — biarkan mereka berpikir dalam hati.',
            penutup : 'Kembali ke Inggris: "Today we learn family in English. Are you ready?"',
          },

          audio_cue: {
            contoh_guru  : 'Hello class! Today we talk about family. Family is special. Are you ready?',
            contoh_siswa : 'Yes!',
            target_vocab : ['family'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Pelan dan tenang. Pakai Bahasa Indonesia untuk frasa inklusivitas. Tidak perlu tanya jawab.',
              panjang_speaking: 'Respons singkat: "Yes!" atau anggukan.',
            },
            normal: {
              bantuan: 'Setelah frasa inklusivitas, tanya ke kelas (bukan individu): "Who lives with you at home?" — terima jawaban apa pun.',
              panjang_speaking: 'Sebut 1-2 nama anggota keluarga (boleh dalam Indonesia).',
            },
            tantangan: {
              bantuan: 'Tanya 1-2 siswa sukarela: "Tell me one person in your family." Cukup nama atau "papa", "nenek", dll.',
              panjang_speaking: '1 frasa pendek.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_pasif    : 'Wajar — topik personal butuh waktu. Lanjut saja.',
            kelas_ribut    : 'Mulai dengan bisik: "Shhh... family is special..." Tunggu fokus.',
            sensitif       : 'Jika ada siswa terlihat sedih atau menarik diri, jangan tunjuk dia untuk bicara. Lanjut ke aktivitas berikutnya dengan tenang.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp07-pembuka-kenalkan-anggota',
          tipe  : 'modeling',
          judul : 'Kenalkan 6 Anggota Keluarga',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa mengenal nama 6 anggota keluarga dalam Inggris dengan visual kartu',
          vocab_target      : ['mother', 'father', 'sister', 'brother', 'grandmother', 'grandfather'],

          durasi_target_detik : 300,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Tempel 6 kartu di papan satu per satu. Ucap pelan, tunggu kelas ulang.',
            selama  : 'Pasangkan: mother & father → sister & brother → grandmother & grandfather. Ulang 2x per pasangan. Tunjuk kartu, ucap, kelas ulang.',
            penutup : 'Tunjuk berurutan, kelas ucap bersama. Lalu acak.',
          },

          audio_cue: {
            contoh_guru  : 'This is mother. This is father. This is sister. This is brother. This is grandmother. This is grandfather.',
            contoh_siswa : 'Mother! Father! Sister! Brother! Grandmother! Grandfather!',
            target_vocab : ['mother', 'father', 'sister', 'brother', 'grandmother', 'grandfather'],
          },

          media_dipakai : ['media-kartu-keluarga'],

          mode: {
            mudah: {
              bantuan: '4 anggota dulu (mother, father, sister, brother). Grandmother + grandfather diperkenalkan tapi tidak ditarget hafal.',
              panjang_speaking: 'Per kata satu per satu.',
            },
            normal: {
              bantuan: '6 anggota lengkap. Tunjuk → ucap → kelas ulang. Ulang 2x per pasangan.',
              panjang_speaking: '6 kata berurutan + acak.',
            },
            tantangan: {
              bantuan: 'Tambah pola pendek: tunjuk kartu, siswa langsung sebut "This is mother." (bukan hanya "mother").',
              panjang_speaking: 'Pola lengkap "This is [member]".',
            },
          },

          observation: { aktif: false },

          fallback: {
            media_tidak_tersedia : 'Gambar wajah sederhana di papan tulis (stick figure) + tulis nama di bawah.',
            siswa_pasif          : 'Beri 1 kartu ke siswa, dia tunjuk ke kelas dan kelas tebak.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'audio',     teks: 'Hello class! Today we talk about family. Family is special.' },
        { tipe: 'instruksi', teks: 'Pelan: "Siapa yang tinggal bersamamu di rumah? Itu keluargamu. Bisa papa, mama, kakak, adik, kakek, nenek, om, tante — siapa pun." Pendekatan inklusif scripted.' },
        { tipe: 'instruksi', teks: 'Tempel 6 kartu keluarga di papan satu per satu, berpasangan. Ucap dalam Inggris, kelas ulang. [Mother. Father. Sister. Brother. Grandmother. Grandfather.]' },
        { tipe: 'audio',     teks: 'This is mother. This is father. This is sister. This is brother.' },
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
          id    : 'tp07-inti-pola-this-is-my',
          tipe  : 'chorus',
          judul : 'Pola "This is my ___"',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa hafal pola memperkenalkan anggota keluarga',
          vocab_target      : ['this is my', 'mother', 'father', 'sister', 'brother'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Tulis pola di papan: "This is my ___." Tunjuk kartu mother → ucap "This is my mother." Kelas ulang.',
            selama  : 'Ulang untuk 6 anggota. Variasi: "Who is this? This is my father!" Acak urutan.',
            penutup : 'Putaran cepat: tunjuk kartu acak, kelas sahut langsung dengan pola lengkap.',
          },

          audio_cue: {
            contoh_guru  : 'This is my mother. This is my father. Who is this? This is my sister!',
            contoh_siswa : 'This is my mother! This is my brother!',
            target_vocab : ['this is my', 'mother', 'father', 'sister', 'brother', 'grandmother', 'grandfather'],
          },

          media_dipakai : ['media-kartu-keluarga'],

          mode: {
            mudah: {
              bantuan: '4 anggota saja. Boleh ucap pola pendek dulu: "Mother!" sebelum pola lengkap.',
              panjang_speaking: 'Nama atau pola lengkap.',
            },
            normal: {
              bantuan: '6 anggota. Pola lengkap "This is my ___." Acak urutan.',
              panjang_speaking: '"This is my [member]."',
            },
            tantangan: {
              bantuan: 'Tambah variasi: "I love my mother." atau "My father is kind." Siswa pilih variasi.',
              panjang_speaking: 'Pola + sifat sederhana.',
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
            siswa_pasif : 'Per baris. Tiap baris dapat 1 anggota.',
            lafal_sulit : 'Pecah suku kata: "grand-mo-ther". Ulang pelan 3x.',
          },

          advance: { mode: 'manual' },
        },

        // ─── Chant ritmis dengan tepuk tangan ───
        {
          id    : 'tp07-inti-chant-ritmis',
          tipe  : 'tpr_action',
          judul : 'Chant Ritmis: Tepuk-Tepuk Anggota Keluarga',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa hafal 6 anggota keluarga melalui ritme + tepuk tangan (energi tinggi, eksekusi sederhana)',
          vocab_target      : ['mother', 'father', 'sister', 'brother', 'grandmother', 'grandfather'],

          durasi_target_detik : 300,
          durasi_min_detik    : 150,

          micro_script: {
            pembuka : '"Stand up! Now we make a family chant. Clap-clap, then say a family word!"',
            selama  : 'Demo pola: tepuk-tepuk → "Mother!" → tepuk-tepuk → "Father!" → tepuk-tepuk → "Sister!" → terus sampai 6 anggota. Tempo: lambat → normal → cepat. Ulang 2-3 putaran.',
            penutup : '"Excellent chanters! Sit down."',
          },

          audio_cue: {
            contoh_guru  : '[clap-clap] Mother! [clap-clap] Father! [clap-clap] Sister! [clap-clap] Brother!',
            contoh_siswa : '[clap-clap] Mother! [clap-clap] Father!',
            target_vocab : ['mother', 'father', 'sister', 'brother', 'grandmother', 'grandfather'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: '4 anggota dulu. Tempo lambat. Guru contoh tepuk + ucap, siswa ikut. Ulang putaran sama.',
              panjang_speaking: 'Nama anggota saja.',
            },
            normal: {
              bantuan: '6 anggota. Tempo mulai lambat, bertahap naik. 2 putaran.',
              panjang_speaking: 'Nama anggota.',
            },
            tantangan: {
              bantuan: 'Tempo cepat. Tambah variasi pola: "stomp-stomp-clap-Mother!" atau acak urutan anggota tiap putaran.',
              panjang_speaking: 'Nama anggota cepat.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 3,
            indikator       : ['response', 'participation'],
            rotasi_priority : 'belum_observed',
          },

          fallback: {
            siswa_pasif    : 'Per baris bergantian — baris depan dulu, lalu baris belakang. Tukar.',
            energi_turun   : 'Naikkan tempo dan suara. "Louder! Faster! Mother!" Buat dramatis.',
            kelas_ribut    : 'Mulai dengan bisik + tepuk pelan. Bertahap naik volumenya.',
            ritme_kacau    : 'Stop. "Listen first!" Guru ucap pola tanpa siswa ikut sekali. Lalu mulai lagi.',
          },

          advance: { mode: 'manual' },
        },

        // ─── Pair work: cerita keluarga (TANPA presentasi di main flow) ───
        {
          id    : 'tp07-inti-pair-cerita',
          tipe  : 'pair_work',
          judul : 'Pair Work: Cerita Keluarga ke Teman',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa praktik perkenalkan keluarga ke teman dalam konteks personal (low-stakes speaking turn)',
          vocab_target      : ['this is my', 'mother', 'father', 'sister', 'brother', 'grandmother', 'grandfather'],

          durasi_target_detik : 540,  // 9 menit
          durasi_min_detik    : 300,

          micro_script: {
            pembuka : '"Now turn to your partner. Use the cards. Tell your partner about your family. Say: This is my mother. This is my father."',
            selama  : 'Demo dengan 1 siswa di depan kelas (guru jadi partner contoh). Lalu siswa berpasangan. Berkeliling pantau. Beri 5-6 menit.',
            penutup : '"Stop. Wonderful family stories!" Beri apresiasi general — JANGAN panggil individu untuk presentasi.',
          },

          audio_cue: {
            contoh_guru  : 'Tell your partner about your family. This is my mother. This is my father.',
            contoh_siswa : 'This is my mother. This is my brother. This is my grandmother.',
            target_vocab : ['this is my', 'mother', 'father', 'sister', 'brother'],
          },

          media_dipakai : ['media-kartu-keluarga'],

          mode: {
            mudah: {
              bantuan: 'Demo 2x. Siswa boleh cerita siapa saja yang dianggap keluarga (om, tante, sepupu). Cukup 1-2 anggota. Boleh hanya sebut nama anggota tanpa pola lengkap.',
              panjang_speaking: '1-2 kalimat sederhana.',
            },
            normal: {
              bantuan: 'Demo 1x. Pola lengkap "This is my ___" untuk 3-4 anggota. Cerita ke pasangan.',
              panjang_speaking: '"This is my [member]" untuk 3-4 anggota.',
            },
            tantangan: {
              bantuan: 'Tambah sifat sederhana: "This is my mother. She is kind." atau "My brother is funny."',
              panjang_speaking: 'Pola lengkap + 1 sifat per anggota.',
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
            sensitif               : 'Jika siswa tampak tidak nyaman bicara tentang keluarga sendiri, izinkan dia pakai kartu generik dan cerita "keluarga umum" — bukan harus keluarga personal.',
            kelas_sangat_aktif     : 'JIKA kelas energi tinggi dan banyak yang sudah selesai pair work + sukarela: boleh tanya "Who wants to share?" — TERIMA SUKARELA SAJA, jangan tunjuk paksa. Maksimal 2-3 siswa, masing-masing 30 detik.',
            waktu_mepet            : 'Cukup pair work 4-5 menit. Skip diferensiasi tantangan. Lanjut penutup.',
          },

          advance: { mode: 'timer_visible_only' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Tulis pola "This is my ___" di papan. Tunjuk kartu, ucap pola, kelas ulang. Acak 6 anggota. [What is this? This is my mother!]' },
        { tipe: 'audio',     teks: 'This is my mother. This is my father. This is my sister. This is my brother.' },
        { tipe: 'instruksi', teks: 'Chant ritmis: berdiri. Pola [tepuk-tepuk-nama]. Mother! Father! Sister! Brother! Grandmother! Grandfather! Tempo lambat → cepat.' },
        { tipe: 'audio',     teks: '[clap-clap] Mother! [clap-clap] Father! [clap-clap] Sister!' },
        { tipe: 'instruksi', teks: 'Pair work: siswa berpasangan, cerita keluarga ke teman pakai kartu. [Tell your partner: This is my mother!]' },
        { tipe: 'instruksi', teks: 'JANGAN panggil individu untuk presentasi ke kelas — anak 6-7 tahun belum siap. Pair work sudah cukup.' },
        { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambah sifat sederhana "She is kind". Belum bisa: cukup nama anggota saja.' },
        { tipe: 'instruksi', teks: 'INKLUSIVITAS — Siswa boleh cerita siapa pun yang dianggap keluarga. Jangan paksa pola "papa-mama" yang sama untuk semua.' },
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
          id    : 'tp07-penutup-tunjuk-kartu',
          tipe  : 'review_quick',
          judul : 'Tunjuk Kartu — Sebut Anggota',
          pm    : 'mindful',

          tujuan_komunikasi : 'Recap cepat: konfirmasi semua siswa kenal 6 anggota dengan tempo cepat',
          vocab_target      : ['mother', 'father', 'sister', 'brother', 'grandmother', 'grandfather'],

          durasi_target_detik : 360,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Last round — fast! I show a card, you say who it is!"',
            selama  : 'Tunjuk kartu acak. Kelas sahut bersama. Tempo dari lambat ke cepat.',
            penutup : '"Excellent! You know your family in English!"',
          },

          audio_cue: {
            contoh_guru  : 'Who is this? Quick!',
            contoh_siswa : 'Mother! Father! Grandmother!',
            target_vocab : ['mother', 'father', 'sister', 'brother', 'grandmother', 'grandfather'],
          },

          media_dipakai : ['media-kartu-keluarga'],

          mode: {
            mudah: {
              bantuan: 'Tempo lambat. 4 kartu saja. Tunjuk yang mudah dulu (mother, father).',
              panjang_speaking: 'Nama anggota saja.',
            },
            normal: {
              bantuan: '6 kartu. Tempo bertahap dari lambat ke cepat. 2 putaran.',
              panjang_speaking: 'Nama anggota cepat.',
            },
            tantangan: {
              bantuan: 'Tambah variasi: tunjuk kartu, siswa harus sebut PAKAI POLA: "This is my grandmother!"',
              panjang_speaking: 'Pola lengkap cepat.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun  : 'Pakai suara teatrikal: "And THIS is...?" dramatis sebelum tunjuk.',
            waktu_mepet   : 'Cukup 4 kartu. Lanjut closure.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp07-penutup-closure',
          tipe  : 'closure_reinforcement',
          judul : 'Transfer ke Rumah & Goodbye',
          pm    : 'joyful',

          tujuan_komunikasi : 'Penguatan: recycle salam TP 01 untuk apply ke keluarga (zero vocab baru, 2 momen nyata)',
          vocab_target      : [],

          durasi_target_detik : 90,
          durasi_min_detik    : 45,

          micro_script: {
            pembuka : '"Now you know your family in English! Let\'s practice at home."',
            selama  : '"Tonight before sleep, say Good night to your family! Tomorrow morning, say Good morning to your family! Two times — easy!" Demo singkat: "Good night, mama! Good morning, papa!"',
            penutup : '"Family is special. Goodbye class — see you next time!"',
          },

          audio_cue: {
            contoh_guru  : 'Tonight say Good night to your family! Tomorrow say Good morning! Two times — easy! Goodbye class!',
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
        { tipe: 'instruksi', teks: 'Tunjuk kartu anggota keluarga acak — kelas sebut bersama. Cepat.' },
        { tipe: 'audio',     teks: 'Excellent! You know your family in English!' },
        { tipe: 'instruksi', teks: 'Closure: recycle salam TP 01. Demo: "Tonight say Good night to your family! Tomorrow morning say Good morning!" Dua momen nyata, zero vocab baru.' },
        { tipe: 'audio',     teks: 'Good night, mama! Good morning, papa! Goodbye class!' },
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
          id    : 'tp07-penilaian-kartu-acak',
          tipe  : 'observation_validation',
          judul : 'Tunjuk Kartu Keluarga Acak',
          pm    : null,

          tujuan_komunikasi : 'Validasi siswa belum terobservasi: mampu sebut anggota keluarga dengan tepat',
          vocab_target      : [],

          durasi_target_detik : 300,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Sambil siswa berkemas, dekati 4-5 siswa yang belum sempat dipanggil. Tunjuk kartu keluarga acak.',
            selama  : 'Amati: respons langsung? Yang masih tertukar grandmother/grandfather atau sister/brother?',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Who is this?',
            contoh_siswa : '',
            target_vocab : [],
          },

          media_dipakai : ['media-kartu-keluarga'],
          mode: null,

          observation: {
            aktif           : true,
            n_siswa         : 99,
            indikator       : ['vocab_use', 'response', 'confidence'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'akurasi',
          },

          fallback: {
            siswa_pasif : 'Jangan paksa. Catat "perlu lebih banyak waktu" — bukan "gagal". Topik keluarga bisa sensitif.',
            waktu_mepet : 'Cukup 3 siswa prioritas.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Tunjuk kartu keluarga acak ke beberapa siswa yang belum diobservasi. [Who is this?]' },
        { tipe: 'instruksi', teks: 'Nilai Listening: merespons "who is this". Speaking: lafal nama anggota. Reading: baca kata di kartu.' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang masih tertukar grandmother/grandfather atau sister/brother?' },
      ],
    },

  ],

};

export default TP_07;
