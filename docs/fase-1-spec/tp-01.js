/**
 * =============================================================
 * FLAF — TP 01 (Greetings & Farewells)
 * File: data/tp-01.js
 * Format: v4 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Fase 1 — Mei 2026
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[0] (v3)
 *
 * PERUBAHAN SUBSTANSI dari v3:
 *   1. Tambah 2 aktivitas pair_work di Inti (sebelumnya tidak ada)
 *      → mandat Dok 03 §9, Dok 04 §7
 *   2. Ubah `diferensiasi` 2-mode (sudah/belum) → 3-mode (mudah/normal/tantangan)
 *      → mandat Dok 06 §3
 *   3. Mode dipilih per sesi di Preview (bukan per langkah di runtime)
 *      → kesepakatan B1
 *   4. Integrasi penilaian ke runtime via observation_window
 *      → mandat Dok 05 §9, Dok 09 §12
 *   5. Pisah micro_script (untuk guru baca) dari audio_cue (untuk sistem putar)
 *      → mandat Dok 07 §3
 *
 * STRUKTUR HYBRID:
 *   Setiap fase di skenario[] punya DUA representasi:
 *     - aktivitas[]  → unit baru, dibaca runtime baru
 *     - langkah[]    → dipertahankan dari v3, dibaca runtime lama
 *
 *   Runtime lama (dashboard.js sekarang) baca `langkah` apa adanya — tidak
 *   pecah. Runtime baru (akan dibangun di Fase 5) baca `aktivitas` dan
 *   ignore `langkah`.
 *
 * BELUM DIAKTIFKAN:
 *   File ini belum di-import oleh data/index.js. Untuk aktivasi:
 *     1. Selesaikan Fase 2 (state machine) dan Fase 3 (UI sketch)
 *     2. Buat runtime baru di Fase 5
 *     3. Edit data/index.js untuk import & override TP 01 dari fase-a.js
 *
 * REFERENSI:
 *   - SCHEMA.md (folder yang sama) untuk kontrak struktur
 *   - 12 Dokumen FLAF di docs/
 *   - fase-a.js untuk versi v3 yang digantikan
 * =============================================================
 */

const TP_01 = {

  // ════════════════════════════════════════════════════════════
  // IDENTITAS — tidak berubah dari v3
  // ════════════════════════════════════════════════════════════

  id       : 'tp-01',
  nomor    : 1,
  kelas    : 1,
  nama     : 'Greetings & Farewells',
  tema     : 'Interaksi Sosial Dasar',
  deskripsi: `Peserta didik belajar mengucapkan salam dan perpisahan dalam
    bahasa Inggris sesuai waktu dan situasi. Fokus pada interaksi lisan
    yang natural dalam rutinitas kelas.`,

  indikator: [
    'Peserta didik dapat mengucapkan salam (hello, good morning, good afternoon, good evening) dan perpisahan (goodbye, bye, see you) dengan benar sesuai waktu.',
    'Peserta didik dapat merespons salam dan perpisahan dari guru atau teman dengan ekspresi dan gestur yang tepat.',
    'Peserta didik dapat menggunakan salam dan perpisahan secara spontan dalam rutinitas kelas sehari-hari.',
  ],

  vocab: ['hello', 'hi', 'goodbye', 'bye', 'see you', 'good morning',
          'good afternoon', 'good evening', 'good night'],

  // BACKWARD COMPAT — runtime lama masih baca ini
  persiapan: ['Kartu gambar salam (pagi/siang/sore)', 'Kartu waktu (matahari/bulan)'],

  // ════════════════════════════════════════════════════════════
  // MEDIA — struktur baru terstruktur (Dok 08 §12)
  // ════════════════════════════════════════════════════════════

  media: [
    {
      id              : 'media-kartu-salam-4',
      nama            : 'Kartu Salam — 4 Waktu',
      tipe            : 'kartu_cetak',
      printable       : true,
      pdf_ref         : 'tp-01-v1.pdf',
      pdf_halaman     : 1,
      reusable_lintas_tp : true,
      keterangan      : '4 kartu A5: good morning, good afternoon, good evening, good night',
    },
    {
      id              : 'media-kartu-waktu',
      nama            : 'Kartu Waktu — Matahari/Bulan',
      tipe            : 'kartu_cetak',
      printable       : true,
      pdf_ref         : 'tp-01-v1.pdf',
      pdf_halaman     : 2,
      reusable_lintas_tp : true,
      keterangan      : '4 kartu visual: matahari pagi, matahari siang, matahari sore, bulan',
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

      // ━━━ BARU: 3 aktivitas pengganti 8 langkah ━━━
      aktivitas: [
        {
          id    : 'tp01-pembuka-sambut-pintu',
          tipe  : 'sapaan_individu',
          judul : 'Sambut di Pintu',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa terbiasa disapa secara individu dalam bahasa Inggris',
          vocab_target      : ['good morning', 'hello'],

          durasi_target_detik : 120,
          durasi_min_detik    : 60,

          micro_script: {
            pembuka : 'Berdiri di pintu. Sapa setiap siswa yang masuk.',
            selama  : '',
            penutup : 'Setelah semua duduk, lanjut sapa kelas.',
          },

          audio_cue: {
            contoh_guru  : 'Good morning! Come in, come in!',
            contoh_siswa : 'Good morning!',
            target_vocab : ['good morning', 'hello'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Sapa dengan senyum lebar. Tunggu siswa balas. Boleh bantu dengan model "Good morning?"',
              panjang_speaking: 'Cukup balas "Good morning."',
            },
            normal: {
              bantuan: 'Sapa setiap siswa, tunggu balasan singkat.',
              panjang_speaking: '"Good morning, teacher."',
            },
            tantangan: {
              bantuan: 'Sapa dengan variasi (hello / good morning). Dorong siswa balas dengan ekspresi.',
              panjang_speaking: '"Good morning, [Miss/Mister]. How are you?"',
            },
          },

          observation: {
            aktif     : true,
            n_siswa   : 5,
            indikator : ['response', 'confidence'],
            rotasi_priority : 'belum_observed',
          },

          fallback: {
            siswa_pasif         : 'Tetap senyum, lanjut ke siswa berikutnya. Catat siapa yang diam.',
            waktu_mepet         : 'Sapa cepat sambil siswa jalan ke tempat. Lewati respons individual.',
          },

          advance: {
            mode: 'manual',
          },
        },

        {
          id    : 'tp01-pembuka-sapa-kelas',
          tipe  : 'sapaan_kelas',
          judul : 'Sapa Kelas Bersama',
          pm    : 'mindful',

          tujuan_komunikasi : 'Kelas merespons sapaan kolektif dalam bahasa Inggris',
          vocab_target      : ['good morning', 'how are you'],

          durasi_target_detik : 180,
          durasi_min_detik    : 90,

          micro_script: {
            pembuka : 'Berdiri di depan kelas. Sapa semua siswa sekaligus.',
            selama  : 'Beri waktu 5 detik untuk respons. Ulangi jika belum kompak.',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Good morning, everyone! How are you today?',
            contoh_siswa : 'Good morning, teacher! I am fine, thank you!',
            target_vocab : ['good morning', 'how are you', 'I am fine'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Tulis "Good morning" di papan. Ucapkan pelan, beri ruang siswa ikuti.',
              panjang_speaking: '"Good morning, teacher!"',
            },
            normal: {
              bantuan: 'Sapa langsung tanpa papan. Tunggu respons kompak.',
              panjang_speaking: '"Good morning, teacher! I am fine, thank you!"',
            },
            tantangan: {
              bantuan: 'Tanya balik beberapa siswa: "And you?"',
              panjang_speaking: '"Good morning, teacher! I am fine. How are you?"',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_ribut : 'Tangan di pinggang, tunggu sunyi. Ulangi sapaan setelah hening.',
            siswa_pasif : 'Pisahkan respons: dorong baris depan dulu, baru semua.',
          },

          advance: {
            mode: 'manual',
          },
        },

        {
          id    : 'tp01-pembuka-kenalkan-waktu',
          tipe  : 'modeling',
          judul : 'Kenalkan Waktu (Pagi/Siang/Sore)',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa menghubungkan salam dengan waktu konkret di sekitarnya',
          vocab_target      : ['morning', 'afternoon', 'evening'],

          durasi_target_detik : 300,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Tunjukkan kartu waktu (matahari pagi). Tanya: "What time is this?"',
            selama  : 'Biarkan siswa tebak dulu. Beri petunjuk visual: tunjuk matahari, gerakan tangan.',
            penutup : 'Konfirmasi jawaban benar. Ulang untuk siang dan sore.',
          },

          audio_cue: {
            contoh_guru  : 'What time is this? Morning? Afternoon?',
            contoh_siswa : 'Morning! Good morning!',
            target_vocab : ['morning', 'afternoon', 'evening', 'night'],
          },

          media_dipakai : ['media-kartu-waktu'],

          mode: {
            mudah: {
              bantuan: 'Tunjukkan kartu, sebutkan jawaban dulu, siswa ulangi.',
              panjang_speaking: 'Ulang kata "Morning!" / "Afternoon!"',
            },
            normal: {
              bantuan: 'Tunjuk kartu, tanya, beri waktu 5 detik untuk tebak.',
              panjang_speaking: '"Morning! Good morning!"',
            },
            tantangan: {
              bantuan: 'Tanya tanpa kartu, hanya gestur. Tanyakan kapan biasanya makan/tidur.',
              panjang_speaking: 'Bisa kaitkan: "Morning, breakfast!" / "Evening, dinner!"',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_pasif         : 'Beri 1 siswa kartu, mereka tunjukkan ke kelas. Posisi tukar.',
            media_tidak_tersedia: 'Gambar matahari/bulan di papan tulis dengan cepat. Tunjuk dan tanya.',
          },

          advance: {
            mode: 'manual',
          },
        },
      ],

      // ━━━ LAMA (v3) — backward compat untuk runtime sekarang ━━━
      langkah: [
        { tipe: 'instruksi',     teks: 'Berdiri di pintu kelas, sambut siswa satu per satu saat masuk.', pm: 'joyful' },
        { tipe: 'audio',         teks: 'Good morning! Come in, come in!' },
        { tipe: 'instruksi',     teks: 'Setelah semua duduk, sapa seluruh kelas.', pm: 'mindful' },
        { tipe: 'audio',         teks: 'Good morning, everyone! How are you today?' },
        { tipe: 'respons_siswa', teks: 'Good morning, teacher! I am fine, thank you!' },
        { tipe: 'instruksi',     teks: 'Tunjukkan kartu waktu (pagi/siang/sore). Tanya siswa sambil menunjuk gambar — biarkan mereka menebak dulu sebelum memberi tahu.', pm: 'meaningful' },
        { tipe: 'audio',         teks: 'What time is this? Morning? Afternoon?' },
        { tipe: 'respons_siswa', teks: 'Morning! Good morning!' },
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
          id    : 'tp01-inti-4-kartu-salam',
          tipe  : 'chorus',
          judul : '4 Kartu Salam',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa mengenal 4 jenis salam dengan visual',
          vocab_target      : ['good morning', 'good afternoon', 'good evening', 'good night'],

          durasi_target_detik : 300,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Tempel 4 kartu salam di papan, berurutan.',
            selama  : 'Tunjuk satu per satu, kelas ucapkan bersama. Ulang 2 kali.',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Good morning. Good afternoon. Good evening. Good night.',
            contoh_siswa : 'Good morning! Good afternoon! Good evening! Good night!',
            target_vocab : ['good morning', 'good afternoon', 'good evening', 'good night'],
          },

          media_dipakai : ['media-kartu-salam-4'],

          mode: {
            mudah: {
              bantuan: 'Ucapkan setiap kartu 2 kali sebelum siswa ikuti. Tunjuk dengan jelas.',
              panjang_speaking: 'Ulang per kartu, satu per satu.',
            },
            normal: {
              bantuan: 'Tunjuk kartu, ucap sekali, siswa ikuti.',
              panjang_speaking: '4 salam berurutan tanpa jeda panjang.',
            },
            tantangan: {
              bantuan: 'Acak urutan kartu. Tunjuk cepat, siswa harus sebut salam yang tepat.',
              panjang_speaking: 'Cepat dan tepat sesuai kartu.',
            },
          },

          observation: { aktif: false },

          fallback: {
            media_tidak_tersedia : 'Tulis 4 salam di papan dengan jam analog di samping (jam 7, jam 1, jam 5, jam 8 malam).',
            kelas_ribut          : 'Tutup mata, bisik salam. Siswa harus dengar dan ulang.',
          },

          advance: {
            mode: 'manual',
          },
        },

        {
          id    : 'tp01-inti-chant',
          tipe  : 'chant',
          judul : 'Chant: Hello Hello',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa terbiasa pola salam dengan ritme dan gerak',
          vocab_target      : ['hello', 'how are you', 'I am fine'],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Berdiri. Mulai chant dengan tepuk tangan.',
            selama  : 'Setelah putaran pertama, ajak siswa ikut.',
            penutup : 'Akhiri dengan tepuk meriah.',
          },

          audio_cue: {
            contoh_guru  : 'Hello hello, how are you? I am fine, thank you!',
            contoh_siswa : 'Hello hello, how are you? I am fine, thank you!',
            target_vocab : ['hello', 'how are you', 'I am fine', 'thank you'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Ulang chant 4 kali. Boleh hanya tepuk sambil ikut nada.',
              panjang_speaking: 'Boleh hanya "Hello hello" di awal, sambung pelan.',
            },
            normal: {
              bantuan: 'Chant 3 kali, makin cepat tiap putaran.',
              panjang_speaking: 'Seluruh chant dengan tepuk.',
            },
            tantangan: {
              bantuan: 'Buat 2 kelompok, sahut-sahutan: kelompok 1 tanya, kelompok 2 jawab.',
              panjang_speaking: 'Chant lengkap + improvisasi gerak.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun : 'Naikkan tempo. Ajak tepuk lebih keras.',
            kelas_ribut  : 'Mulai sangat pelan dan bisik. Kelas akan ikut tertarik diam.',
          },

          advance: {
            mode      : 'timer_with_grace',
            grace_detik: 15,
          },
        },

        // ─── BARU: Pair Work pertama ───
        // (Tidak ada di v3 — perubahan substansi #1)
        {
          id    : 'tp01-inti-pair-sapa-teman',
          tipe  : 'pair_work',
          judul : 'Pair Work: Sapa Teman Sebangku',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa saling menyapa dalam bahasa Inggris kepada teman nyata',
          vocab_target      : ['good morning', 'hello'],

          durasi_target_detik : 240,  // 4 menit
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Turn to your partner. Say good morning."',
            selama  : 'Berkeliling. Dengar 3-4 pasangan. Beri jempol untuk pair yang aktif.',
            penutup : '"Stop. Sit down please."',
          },

          audio_cue: {
            contoh_guru  : 'Talk to your partner.',
            contoh_siswa : 'Good morning, [name]!',
            target_vocab : ['good morning', 'hello'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Demo dengan 1 pasangan di depan kelas dulu. Tulis salam di papan.',
              panjang_speaking: 'Cukup "Good morning."',
            },
            normal: {
              bantuan: 'Demo singkat, langsung pair work.',
              panjang_speaking: '"Good morning, [nama teman]."',
            },
            tantangan: {
              bantuan: 'Tanpa demo. Variasi salam sesuai waktu sekarang.',
              panjang_speaking: '"Good morning, [nama]. How are you?" + balasan.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 3,
            indikator       : ['participation', 'confidence', 'response'],
            rotasi_priority : 'belum_speaking_turn',
          },

          fallback: {
            pair_tidak_jalan : 'Demo 1 pasangan di depan kelas. Beri 30 detik, coba lagi.',
            siswa_pasif      : 'Pisahkan dari pasangan, gabung ke pair yang aktif jadi grup 3.',
            kelas_ribut      : 'Stop pair work. Kembali ke chorus 30 detik. Coba pair lagi setelah hening.',
            waktu_mepet      : 'Cukup 1 menit. Lewati ke kartu waktu permainan.',
          },

          advance: {
            mode      : 'timer_with_grace',
            grace_detik: 20,
          },
        },

        {
          id    : 'tp01-inti-permainan-kartu',
          tipe  : 'game_movement',
          judul : 'Permainan Kartu Waktu',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa cepat menghubungkan visual waktu dengan salam yang tepat',
          vocab_target      : ['good morning', 'good afternoon', 'good evening', 'good night'],

          durasi_target_detik : 420,  // 7 menit
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Stand up! I show a card — first to stand and say the right greeting wins a point."',
            selama  : 'Angkat kartu waktu. Tunjuk siswa pertama yang benar. Beri poin verbal.',
            penutup : '"Good job, sit down."',
          },

          audio_cue: {
            contoh_guru  : 'I show a card — say the greeting!',
            contoh_siswa : 'Good morning!',
            target_vocab : ['good morning', 'good afternoon', 'good evening', 'good night'],
          },

          media_dipakai : ['media-kartu-waktu'],

          mode: {
            mudah: {
              bantuan: 'Permainan dijalankan per baris, bukan kompetitif. Setiap baris dapat giliran.',
              panjang_speaking: 'Cukup ucap salam.',
            },
            normal: {
              bantuan: 'Kompetitif individual. 6-8 putaran.',
              panjang_speaking: 'Cepat dan tepat.',
            },
            tantangan: {
              bantuan: 'Permainan eliminasi. Yang salah, duduk. Tersisa 5 = juara.',
              panjang_speaking: 'Cepat + tambah variasi (Hello! / Hi!).',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_ribut  : 'Hentikan kompetisi. Lanjut ke aktivitas selanjutnya.',
            energi_turun : 'Sederhanakan: hanya 2 kartu (pagi/sore). Ulang cepat.',
            waktu_mepet  : 'Lewati permainan. Langsung ke konteks rumah.',
          },

          advance: {
            mode      : 'timer_with_grace',
            grace_detik: 30,
          },
        },

        {
          id    : 'tp01-inti-konteks-rumah',
          tipe  : 'meaningful_link',
          judul : 'Sapa Orang Tua di Rumah',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa mengaitkan salam dengan situasi nyata di rumah',
          vocab_target      : ['good morning', 'mom', 'dad'],

          durasi_target_detik : 180,
          durasi_min_detik    : 90,

          micro_script: {
            pembuka : 'Tanya: "Apa yang kalian ucapkan ke orang tua saat bangun pagi?"',
            selama  : 'Dengarkan 2-3 jawaban. Konfirmasi dengan versi Inggris.',
            penutup : 'Ajak ucap bersama: "Good morning, Mom! Good morning, Dad!"',
          },

          audio_cue: {
            contoh_guru  : 'What do you say to your parents in the morning?',
            contoh_siswa : 'Good morning, Mom! Good morning, Dad!',
            target_vocab : ['good morning', 'mom', 'dad'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Beri contoh langsung. Siswa ulang versi Inggris.',
              panjang_speaking: '"Good morning, Mom!"',
            },
            normal: {
              bantuan: 'Tanya, biarkan siswa jawab dulu (boleh Indonesia), terjemahkan.',
              panjang_speaking: 'Versi Inggris untuk ibu DAN ayah.',
            },
            tantangan: {
              bantuan: 'Tanya apa yang diucapkan ke orang lain (kakek, kakak).',
              panjang_speaking: 'Versi Inggris ke beberapa orang berbeda.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_pasif : 'Cerita dulu pengalaman guru sendiri. Lalu undang siswa cerita.',
          },

          advance: {
            mode: 'manual',
          },
        },

        // ─── BARU: Pair Work kedua (Goodbye) ───
        // Disisipkan supaya farewell juga dipraktikkan, bukan hanya greeting
        {
          id    : 'tp01-inti-pair-goodbye',
          tipe  : 'pair_work',
          judul : 'Pair Work: Bye-Bye Teman',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa berlatih perpisahan dengan teman nyata',
          vocab_target      : ['goodbye', 'bye', 'see you'],

          durasi_target_detik : 120,  // 2 menit (lebih singkat dari pair pertama)
          durasi_min_detik    : 60,

          micro_script: {
            pembuka : 'Ajarkan dulu: "goodbye, bye, see you." Tunjuk kartu sambil ucapkan.',
            selama  : '"Turn to your partner. Say goodbye in 3 different ways!"',
            penutup : '"Great! Sit down."',
          },

          audio_cue: {
            contoh_guru  : 'Goodbye! Bye! See you tomorrow!',
            contoh_siswa : 'Goodbye! Bye! See you!',
            target_vocab : ['goodbye', 'bye', 'see you'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Cukup pilih satu cara. Guru ucapkan, siswa ulang ke pasangan.',
              panjang_speaking: 'Satu jenis perpisahan.',
            },
            normal: {
              bantuan: 'Coba 3 cara berturut-turut ke pasangan yang sama.',
              panjang_speaking: '"Goodbye! Bye! See you!"',
            },
            tantangan: {
              bantuan: 'Variasikan: "See you tomorrow / See you later."',
              panjang_speaking: '3 cara + penambahan waktu.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 3,
            indikator       : ['participation', 'vocab_use'],
            rotasi_priority : 'belum_observed',  // Beda dari pair sebelumnya
          },

          fallback: {
            pair_tidak_jalan : 'Skip — langsung farewell kelas bersama.',
            waktu_mepet      : 'Cukup 30 detik per pair. Lewati ke Penutup.',
          },

          advance: {
            mode      : 'timer_with_grace',
            grace_detik: 15,
          },
        },
      ],

      // ━━━ LAMA (v3) — backward compat ━━━
      langkah: [
        { tipe: 'instruksi',     teks: 'Tempel 4 kartu salam di papan. Tunjuk satu per satu, kelas ucapkan bersama.', pm: 'mindful' },
        { tipe: 'audio',         teks: 'Good morning. Good afternoon. Good evening. Good night.' },
        { tipe: 'respons_siswa', teks: 'Good morning! Good afternoon! Good evening! Good night!' },
        { tipe: 'instruksi',     teks: 'Chant dengan tepuk tangan — guru mulai, siswa ikuti setelah putaran pertama.', pm: 'joyful' },
        { tipe: 'audio',         teks: 'Hello hello, how are you? I am fine, thank you!' },
        { tipe: 'respons_siswa', teks: 'Hello hello, how are you? I am fine, thank you!' },
        { tipe: 'instruksi',     teks: 'Permainan kartu waktu: guru angkat kartu, siswa berlomba ucapkan salam yang tepat. Siapa pertama berdiri dan benar, dapat poin.', pm: 'joyful' },
        { tipe: 'instruksi',     teks: 'Hubungkan dengan kehidupan nyata: tanya siswa apa yang mereka ucapkan saat bertemu orang tua di rumah pagi hari.', pm: 'meaningful' },
        { tipe: 'audio',         teks: 'What do you say to your parents in the morning at home?' },
        { tipe: 'respons_siswa', teks: 'Good morning, Mom! Good morning, Dad!' },
        { tipe: 'instruksi',     teks: 'Ajarkan perpisahan: goodbye, bye, see you. Tunjuk kartu, ucapkan bersama.' },
        { tipe: 'audio',         teks: 'Goodbye! Bye! See you tomorrow!' },
        { tipe: 'respons_siswa', teks: 'Goodbye! Bye! See you!' },
        { tipe: 'diferensiasi',  sudah: 'Minta siswa buat kalimat salam sendiri dengan waktu yang berbeda — tanpa kartu.', belum: 'Bimbing satu per satu dengan menunjuk kartu waktu, tidak perlu buru-buru.' },
        { tipe: 'darurat',       teks: 'Langsung ke latihan berpasangan — abaikan permainan kartu berlomba. Minta siswa saling sapa dengan teman di sampingnya.' },
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
          id    : 'tp01-penutup-review',
          tipe  : 'review_quick',
          judul : 'Review Cepat 4 Salam',
          pm    : 'mindful',

          tujuan_komunikasi : 'Konfirmasi 3-4 siswa bisa pasangkan waktu dengan salam',
          vocab_target      : ['good morning', 'good afternoon', 'good evening', 'good night'],

          durasi_target_detik : 300,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Panggil 3-4 siswa acak.',
            selama  : 'Tunjuk kartu waktu, siswa sebut salam yang tepat.',
            penutup : 'Tepuk semangat untuk semua.',
          },

          audio_cue: {
            contoh_guru  : 'What greeting do we use in the morning?',
            contoh_siswa : 'Good morning!',
            target_vocab : ['good morning', 'good afternoon', 'good evening', 'good night'],
          },

          media_dipakai : ['media-kartu-waktu', 'media-kartu-salam-4'],

          mode: {
            mudah: {
              bantuan: 'Pilih siswa yang sudah aktif tadi (kemenangan kecil).',
              panjang_speaking: 'Cukup nama salamnya.',
            },
            normal: {
              bantuan: 'Pilih campuran aktif dan diam.',
              panjang_speaking: 'Salam + konteks ("Good morning, when we wake up").',
            },
            tantangan: {
              bantuan: 'Pilih khusus siswa pemalu — beri kesempatan kemenangan akhir.',
              panjang_speaking: 'Salam + kalimat lengkap.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['response', 'vocab_use'],
            rotasi_priority : 'belum_observed',
          },

          fallback: {
            siswa_pasif : 'Skip ke refleksi bersama. Tidak ada paksaan maju.',
            waktu_mepet : 'Cukup 1-2 siswa.',
          },

          advance: {
            mode: 'manual',
          },
        },

        {
          id    : 'tp01-penutup-refleksi',
          tipe  : 'reflection',
          judul : 'Refleksi Singkat',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa sadar relevansi pembelajaran ke hidupnya',
          vocab_target      : [],

          durasi_target_detik : 180,
          durasi_min_detik    : 60,

          micro_script: {
            pembuka : 'Tanya satu siswa: "Salam favoritmu hari ini apa? Kenapa?"',
            selama  : 'Dengarkan tanpa koreksi. Beri apresiasi.',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'What is your favorite greeting today?',
            contoh_siswa : '',
            target_vocab : [],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Boleh jawab dalam bahasa Indonesia. Guru terjemahkan.',
              panjang_speaking: 'Bebas bentuk jawaban.',
            },
            normal: {
              bantuan: 'Dorong jawab pakai salam yang dibahas.',
              panjang_speaking: '"My favorite is good morning."',
            },
            tantangan: {
              bantuan: 'Tanya 2 siswa, dorong komentari jawaban temannya.',
              panjang_speaking: 'Refleksi + komentar.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_pasif : 'Skip — guru sendiri yang share favoritnya hari ini.',
          },

          advance: {
            mode: 'manual',
          },
        },

        {
          id    : 'tp01-penutup-farewell',
          tipe  : 'farewell_kelas',
          judul : 'Goodbye Bersama',
          pm    : 'joyful',

          tujuan_komunikasi : 'Kelas mengakhiri sesi dengan perpisahan bersama',
          vocab_target      : ['goodbye', 'see you'],

          durasi_target_detik : 120,
          durasi_min_detik    : 60,

          micro_script: {
            pembuka : 'Berdiri di depan. Ajak siswa berdiri.',
            selama  : 'Ucap perpisahan bersama, dengan lambaian tangan.',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'See you next time. Goodbye, everyone!',
            contoh_siswa : 'Goodbye, teacher! See you!',
            target_vocab : ['goodbye', 'see you'],
          },

          media_dipakai : [],

          // Aktivitas fundamental — tidak ada mode diferensiasi
          mode: null,

          observation: { aktif: false },

          fallback: {},

          advance: {
            mode: 'manual',
          },
        },
      ],

      langkah: [
        { tipe: 'instruksi',     teks: 'Tanya 3–4 siswa secara acak — tunjuk kartu waktu, mereka sebut salam yang tepat.', pm: 'mindful' },
        { tipe: 'audio',         teks: 'What greeting do we use in the morning?' },
        { tipe: 'respons_siswa', teks: 'Good morning!' },
        { tipe: 'instruksi',     teks: 'Refleksi singkat: tanya satu siswa apa salam favorit mereka hari ini dan mengapa.', pm: 'meaningful' },
        { tipe: 'instruksi',     teks: 'Tutup kelas bersama — guru mulai, siswa ikut.' },
        { tipe: 'audio',         teks: 'See you next time. Goodbye, everyone!' },
        { tipe: 'respons_siswa', teks: 'Goodbye, teacher! See you!' },
      ],
    },

    // ──────────────────────────────────────────────────────────
    // FASE PENILAIAN — 6 menit
    // BARU: Hanya 1 aktivitas validasi — sisanya dilakukan via
    // observation_window di Pembuka/Inti/Penutup
    // ──────────────────────────────────────────────────────────

    {
      fase  : 'Penilaian',
      durasi: 6,

      aktivitas: [
        {
          id    : 'tp01-penilaian-validasi',
          tipe  : 'observation_validation',
          judul : 'Validasi Siswa Belum Terobservasi',
          pm    : null,

          tujuan_komunikasi : 'Memastikan semua siswa terkena minimal 1 observasi di TP ini',
          vocab_target      : [],

          durasi_target_detik : 360,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Saat siswa berkemas, sapa siswa yang belum terobservasi tadi.',
            selama  : 'Sistem menampilkan daftar siswa yang belum dapat rating. Sapa 1-1.',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Good morning, [nama siswa]!',
            contoh_siswa : '',
            target_vocab : ['good morning'],
          },

          media_dipakai : [],

          mode: null,

          observation: {
            aktif           : true,
            n_siswa         : 99,                  // Semua siswa yang belum terobservasi
            indikator       : ['response', 'confidence', 'vocab_use'],
            rotasi_priority : 'belum_observed',
          },

          fallback: {
            waktu_mepet : 'Cukup 3-5 siswa prioritas. Sisanya ditarget ke sesi berikutnya.',
          },

          advance: {
            mode: 'manual',
          },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Sambil siswa berkemas, ucapkan salam ke beberapa siswa satu per satu. Amati apakah mereka merespons dengan tepat tanpa dibantu.' },
        { tipe: 'audio',     teks: 'Good morning, Ahmad!' },
        { tipe: 'instruksi', teks: 'Nilai Listening: merespons salam dengan kata yang benar. Speaking: lafal terdengar jelas. Reading: bisa baca kartu salam.' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang masih diam saat disapa? Siapa yang mencampur morning/afternoon?' },
      ],
    },

  ],

};

export default TP_01;
