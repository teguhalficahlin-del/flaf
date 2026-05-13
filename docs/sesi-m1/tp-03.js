/**
 * =============================================================
 * FLAF — TP 03 (Classroom Instructions)
 * File: data/tp-03.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Sesi M1 — Mei 2026
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[2] (v3)
 *
 * KARAKTER KHAS TP 03 (TPR-dominant — lihat COMPARISON-M1):
 *   - Total Physical Response (TPR) dominan: siswa bertindak, bukan ucap
 *   - Input verbal → output fisik
 *   - Permainan ikonik "Simon Says" dengan trap mechanic
 *   - Siswa jadi pemimpin (peran terbalik) di Inti
 *
 * KEPUTUSAN MIGRASI:
 *   - Tipe `tpr_action` BARU di schema v4.2
 *     → 4 aktivitas TP 03 pakai tipe ini (bukan modeling/chorus)
 *     → audio_cue.contoh_siswa kosong di semua TPR
 *   - "Simon Says" dipertahankan dengan flags: ['kompetitif_safety']
 *     → Mode mudah = TPR biasa tanpa trap
 *     → Mode normal/tantangan = trap mechanic aktif
 *   - Siswa jadi pemimpin (TP 03 v3) dipertahankan, beri mode diferensiasi jelas
 *
 * PERUBAHAN SUBSTANSI dari v3:
 *   1. Tipe TPR eksplisit (sebelumnya tersamar di instruksi)
 *   2. Simon Says diberi mode mudah non-trap (emotional safety)
 *   3. Aktivitas "siswa jadi pemimpin" diberi fallback eksplisit
 *      untuk siswa pemalu (boleh pakai kartu sebagai bantuan)
 *   4. Permainan dua langkah dipisah sebagai aktivitas tersendiri
 *      (lebih kompleks, butuh ruang)
 *
 * REFERENSI:
 *   - SCHEMA.md v4.2 (tipe tpr_action baru)
 *   - SCHEMA-CHANGELOG.md (entry v4.2)
 * =============================================================
 */

const TP_03 = {

  // ════════════════════════════════════════════════════════════
  // IDENTITAS — tidak berubah dari v3
  // ════════════════════════════════════════════════════════════

  id       : 'tp-03',
  nomor    : 3,
  kelas    : 1,
  nama     : 'Classroom Instructions',
  tema     : 'Interaksi Sosial Dasar',
  deskripsi: `Peserta didik memahami dan merespons instruksi kelas yang sering
    digunakan guru. Fokus pada pemahaman mendengar dan respons fisik (TPR).`,

  indikator: [
    'Peserta didik dapat merespons instruksi satu langkah (sit down, stand up, open your book, close your book, listen, look) dengan tindakan yang benar.',
    'Peserta didik dapat merespons instruksi dua langkah sederhana (open your book and read, listen and repeat) dengan urutan tindakan yang tepat.',
    'Peserta didik dapat mengucapkan instruksi kelas dasar untuk memimpin teman dalam aktivitas terbimbing.',
  ],

  vocab: ['sit down', 'stand up', 'open', 'close', 'listen', 'look',
          'repeat', 'read', 'write', 'draw', 'stop', 'go'],

  // BACKWARD COMPAT
  persiapan: ['Kartu instruksi bergambar (sit/stand/open/close)', 'Poster TPR'],

  // ════════════════════════════════════════════════════════════
  // MEDIA — terstruktur
  // ════════════════════════════════════════════════════════════

  media: [
    {
      id              : 'media-kartu-instruksi',
      nama            : 'Kartu Instruksi Bergambar',
      tipe            : 'kartu_cetak',
      printable       : true,
      pdf_ref         : 'tp-03-v1.pdf',
      pdf_halaman     : 1,
      reusable_lintas_tp : true,
      keterangan      : '6 kartu A5: sit, stand, open book, close book, listen, look — dengan ilustrasi anak melakukan aksi',
    },
    {
      id              : 'media-poster-tpr',
      nama            : 'Poster Instruksi TPR Lengkap',
      tipe            : 'kartu_cetak',
      printable       : true,
      pdf_ref         : 'tp-03-v1.pdf',
      pdf_halaman     : 2,
      reusable_lintas_tp : true,
      keterangan      : 'Poster A4 dengan 12 instruksi + ilustrasi — bisa ditempel di kelas',
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
          id    : 'tp03-pembuka-sapa',
          tipe  : 'sapaan_kelas',
          judul : 'Sapa & Pengantar',
          pm    : 'mindful',

          tujuan_komunikasi : 'Membuka kelas, beri tahu hari ini latihan respon cepat',
          vocab_target      : [],

          durasi_target_detik : 90,
          durasi_min_detik    : 45,

          micro_script: {
            pembuka : 'Sapa kelas dengan energi tinggi: "Are you ready?"',
            selama  : '',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Good morning! Today we learn classroom instructions. Are you ready?',
            contoh_siswa : 'Yes!',
            target_vocab : [],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Sapa pelan. Beri ruang untuk respon.',
              panjang_speaking: 'Cukup "Yes!" atau angguk.',
            },
            normal: {
              bantuan: 'Energi tinggi. "Are you ready?" ulang 2x.',
              panjang_speaking: '"Yes!" dengan kompak.',
            },
            tantangan: {
              bantuan: 'Tambah: "How ready? Very ready?" Siswa boleh teriak "Very ready!"',
              panjang_speaking: '"Yes! Very ready!"',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_ribut : 'Tangan di pinggang. Tunggu hening. Mulai dengan suara rendah.',
          },

          advance: { mode: 'manual' },
        },

        // ─── TPR pertama: Stand Up / Sit Down ───
        {
          id    : 'tp03-pembuka-stand-sit',
          tipe  : 'tpr_action',
          judul : 'TPR: Stand Up & Sit Down',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa merespons instruksi 2 aksi paling dasar dengan gerakan tepat',
          vocab_target      : ['stand up', 'sit down'],

          durasi_target_detik : 360,  // 6 menit — termasuk percepatan
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Langsung demonstrasi tanpa penjelasan. Lakukan gerakan sebelum berkata: berdiri → "Stand up!" Duduk → "Sit down!"',
            selama  : 'Ulang 3 putaran. Putaran 1: pelan. Putaran 2: normal. Putaran 3: percepat tempo — siswa akan tertawa, itu bagus.',
            penutup : 'Setelah selesai, "Wow, you are fast!"',
          },

          audio_cue: {
            contoh_guru  : 'Stand up! Sit down! Stand up! Sit down!',
            // TPR — siswa BERTINDAK, tidak ucap kembali
            contoh_siswa : '',
            target_vocab : ['stand up', 'sit down'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Tempo lambat semua 3 putaran. Tunjuk gerakan dulu sebelum ucap. Boleh siswa baris depan duluan.',
              panjang_speaking: 'Tidak ada — TPR fisik.',
            },
            normal: {
              bantuan: '3 putaran dengan tempo bertahap. Tunjuk gerakan + ucap bersamaan.',
              panjang_speaking: 'Tidak ada — TPR fisik.',
            },
            tantangan: {
              bantuan: 'Hanya pakai suara, tanpa gerakan guru. Siswa harus dengar saja.',
              panjang_speaking: 'Tidak ada — TPR fisik.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['response', 'participation'],
            rotasi_priority : 'belum_observed',
          },

          fallback: {
            siswa_pasif : 'Sapa per nama: "[Nama], stand up!" Beri waktu, beri jempol kalau berhasil.',
            energi_turun: 'Naikkan tempo. Tambah "Jump!" sebagai bonus aksi.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'audio',     teks: 'Good morning! Today we learn classroom instructions. Are you ready?' },
        { tipe: 'instruksi', teks: 'Langsung demonstrasikan tanpa penjelasan — lakukan gerakan sebelum berkata. [Stand up!] — berdiri. [Sit down!] — duduk. Ulangi 3×.' },
        { tipe: 'audio',     teks: 'Stand up! Sit down! Stand up! Sit down!' },
        { tipe: 'instruksi', teks: 'Percepat tempo di putaran ketiga. Siswa akan tertawa — itu bagus, pertanda mereka terlibat.' },
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
          id    : 'tp03-inti-kartu-instruksi',
          tipe  : 'tpr_action',
          judul : 'TPR: Kenalkan Kartu Instruksi',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa hubungkan visual kartu dengan aksi: listen, look, open, close, write, draw',
          vocab_target      : ['listen', 'look', 'open', 'close', 'write', 'draw'],

          durasi_target_detik : 420,  // 7 menit
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : 'Perkenalkan kartu satu per satu. Tunjuk gambar dulu, JANGAN sebut. Biarkan siswa menebak.',
            selama  : 'Setelah siswa coba tebak, baru ucap. Lakukan aksinya, siswa ikuti. Ulang sampai 6 kartu kenal.',
            penutup : 'Recap cepat: tunjuk semua kartu acak, siswa lakukan aksi yang sesuai.',
          },

          audio_cue: {
            contoh_guru  : 'Listen. Look. Open your book. Close your book. Write. Draw.',
            contoh_siswa : '',  // TPR
            target_vocab : ['listen', 'look', 'open', 'close', 'write', 'draw', 'book'],
          },

          media_dipakai : ['media-kartu-instruksi'],

          mode: {
            mudah: {
              bantuan: 'Hanya 4 kartu dulu (listen, look, open, close). Pakai gestur jelas tiap kartu. Ulang setiap kartu 2x.',
              panjang_speaking: 'Tidak ada — TPR fisik.',
            },
            normal: {
              bantuan: '6 kartu. Tunjuk lalu siswa tebak. Setelah konfirmasi, lakukan aksi.',
              panjang_speaking: 'Tidak ada — TPR fisik.',
            },
            tantangan: {
              bantuan: 'Acak urutan kartu. Tunjuk cepat. Siswa harus respons tanpa demo guru.',
              panjang_speaking: 'Tidak ada — TPR fisik.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['response', 'vocab_use'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'akurasi',  // Akurasi respons fisik per instruksi
          },

          fallback: {
            media_tidak_tersedia : 'Gambar simbol cepat di papan tulis: buku terbuka, telinga, mata, dst.',
            siswa_pasif          : 'Per baris atau berkelompok dulu. Boleh meniru baris depan.',
          },

          advance: { mode: 'manual' },
        },

        // ─── Simon Says — permainan ikonik dengan trap mechanic ───
        {
          id    : 'tp03-inti-simon-says',
          tipe  : 'tpr_action',
          judul : 'Permainan: Simon Says',
          pm    : 'joyful',
          flags : ['kompetitif_safety'],  // Mode mudah = versi non-trap

          tujuan_komunikasi : 'Siswa latih fokus dengerin + respons cepat melalui permainan trap',
          vocab_target      : ['stand up', 'sit down', 'open', 'close', 'listen', 'look'],

          durasi_target_detik : 480,  // 8 menit
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : '"Now we play a game — Simon Says! Listen carefully. If I say Simon says, you do it. If I don\'t say Simon says, you stay still!"',
            selama  : 'Mulai pelan. Beri 2-3 contoh dengan "Simon says". Lalu mulai trap: "Sit down!" — yang duduk, harus duduk (tertawa). Lanjut permainan ringan.',
            penutup : '"Great game! You are smart listeners!"',
          },

          audio_cue: {
            contoh_guru  : 'Simon says, stand up! Simon says, open your book! Sit down! [trap]',
            contoh_siswa : '',  // TPR
            target_vocab : ['stand up', 'sit down', 'open', 'close', 'listen', 'look'],
          },

          media_dipakai : ['media-kartu-instruksi'],

          mode: {
            mudah: {
              // FLAG kompetitif_safety: mode mudah = versi non-trap
              bantuan: 'TANPA trap mechanic. Semua instruksi dilakukan — "Simon says" tidak dipakai sebagai jebakan, hanya warming up. Suasana riang tanpa "kalah".',
              panjang_speaking: 'Tidak ada — TPR fisik.',
            },
            normal: {
              bantuan: 'Trap mechanic aktif. Pakai tone ringan dan menyenangkan. Yang "kena trap" duduk dengan tawa, tidak malu. Ulang sampai semua tertawa.',
              panjang_speaking: 'Tidak ada — TPR fisik.',
            },
            tantangan: {
              bantuan: 'Trap lebih sering. Tambah instruksi yang mirip ("Listen!" vs "Look!"). Siswa yang "kena" duduk tapi tetap ikut sebagai juri.',
              panjang_speaking: 'Tidak ada — TPR fisik.',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_ribut    : 'Stop permainan. Kembali ke TPR biasa (tanpa Simon Says) sampai tenang.',
            siswa_pasif    : 'Untuk siswa pemalu, jadikan "juri" — mereka tunjuk ke yang kena trap. Mereka tetap engaged tanpa harus jadi target.',
            waktu_mepet    : 'Cukup 5 putaran. Lanjut ke aktivitas berikutnya.',
          },

          advance: { mode: 'manual' },  // Permainan dinamis — biar guru kontrol durasi
        },

        {
          id    : 'tp03-inti-dua-langkah',
          tipe  : 'tpr_action',
          judul : 'TPR Dua Langkah',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa respons instruksi 2 langkah dalam urutan yang tepat',
          vocab_target      : ['open', 'read', 'listen', 'repeat', 'look', 'write'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Now harder — two steps! Open your book AND read. Ready?"',
            selama  : 'Mulai pelan. Demo dulu: buka buku, lalu pura-pura baca. Siswa ikuti. Lalu pakai tempo normal.',
            penutup : 'Coba 3-4 instruksi dua langkah. Apresiasi yang berhasil ikuti urutan.',
          },

          audio_cue: {
            contoh_guru  : 'Open your book and read. Listen and repeat. Look and write.',
            contoh_siswa : '',  // TPR
            target_vocab : ['open', 'read', 'listen', 'repeat', 'look', 'write'],
          },

          media_dipakai : ['media-kartu-instruksi'],

          mode: {
            mudah: {
              bantuan: 'Demo setiap instruksi 2x. Beri jeda di antara langkah 1 dan langkah 2. Jangan acak.',
              panjang_speaking: 'Tidak ada — TPR fisik.',
            },
            normal: {
              bantuan: 'Demo sekali. Beri jeda kecil. Lakukan 4 instruksi dua langkah berbeda.',
              panjang_speaking: 'Tidak ada — TPR fisik.',
            },
            tantangan: {
              bantuan: 'Tanpa demo. Lakukan tanpa jeda — siswa harus ingat urutan.',
              panjang_speaking: 'Tidak ada — TPR fisik.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 3,
            indikator       : ['response', 'vocab_use'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'akurasi',
          },

          fallback: {
            siswa_pasif : 'Buat lebih sederhana: ganti dengan instruksi 1 langkah dulu sebentar.',
            waktu_mepet : 'Cukup 2 instruksi dua langkah. Lanjut.',
          },

          advance: { mode: 'manual' },
        },

        // ─── Siswa jadi pemimpin (peran terbalik) ───
        {
          id    : 'tp03-inti-siswa-pemimpin',
          tipe  : 'pair_work',  // Bukan TPR — siswa UCAP instruksi, kelas BERTINDAK
          judul : 'Pair Work — Role Reversal: Siswa Jadi Guru',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa berani mengucap instruksi sebagai pemimpin',
          vocab_target      : ['sit down', 'stand up', 'open', 'close', 'listen', 'look'],

          durasi_target_detik : 420,  // 7 menit
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Now YOU are the teacher! Who wants to come?" Panggil siswa sukarela maju ke depan.',
            selama  : 'Siswa pemimpin beri instruksi, kelas (termasuk guru) lakukan. Ganti 3-4 siswa pemimpin berbeda.',
            penutup : '"Great teachers! Sit down please."',
          },

          audio_cue: {
            contoh_guru  : 'Come here — you are the teacher now!',
            contoh_siswa : 'Stand up! Open your book! Listen!',  // Siswa pemimpin UCAP
            target_vocab : ['sit down', 'stand up', 'open', 'close', 'listen', 'look'],
          },

          media_dipakai : ['media-kartu-instruksi'],

          mode: {
            mudah: {
              bantuan: 'Sukarela saja, jangan paksa. Beri kartu instruksi — siswa pemimpin tinggal pegang kartu, baca, dan kelas lakukan. Jangan harus ingat sendiri.',
              panjang_speaking: 'Siswa pemimpin: baca dari kartu, 1-2 instruksi saja.',
            },
            normal: {
              bantuan: '3 siswa sukarela. Tanpa kartu. Mereka pilih instruksi sendiri (boleh ulang yang sudah dibahas).',
              panjang_speaking: 'Siswa pemimpin: 3-4 instruksi tanpa bantuan.',
            },
            tantangan: {
              bantuan: 'Siswa pemimpin coba instruksi dua langkah ("Listen and repeat").',
              panjang_speaking: 'Instruksi dua langkah.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 3,
            indikator       : ['confidence', 'vocab_use'],
            rotasi_priority : 'belum_observed',
          },

          fallback: {
            pair_tidak_jalan : 'Kalau tidak ada sukarela: guru pilih 1 siswa yang biasanya aktif. Beri kartu, posisikan sebagai team-teach: "We are teachers together!"',
            siswa_pasif      : 'Jangan paksa siswa pemalu. Apresiasi yang sudah berani. Ajak kelas tepuk untuk semua.',
            waktu_mepet      : 'Cukup 1 siswa pemimpin. Lanjut.',
          },

          advance: { mode: 'timer_visible_only' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Perkenalkan kartu instruksi satu per satu. Tunjuk gambar dulu, jangan sebut — biarkan siswa menebak. [What is this? Listen. Listen!]' },
        { tipe: 'audio',     teks: 'Listen. Look. Open your book. Close your book. Write. Draw.' },
        { tipe: 'instruksi', teks: 'Simon Says — guru beri instruksi. Siswa lakukan hanya jika didahului "Simon says". Kalau tidak ada "Simon says", yang bergerak duduk dulu. [Simon says, stand up!]' },
        { tipe: 'audio',     teks: 'Simon says, stand up! Simon says, open your book! Sit down!' },
        { tipe: 'instruksi', teks: 'Instruksi dua langkah — pelan dulu, lalu makin cepat. [Open your book AND read. Ready?]' },
        { tipe: 'audio',     teks: 'Open your book and read. Listen and repeat. Look and write.' },
        { tipe: 'instruksi', teks: 'Giliran siswa jadi pemimpin: panggil satu siswa maju. [Come here — you are the teacher now!] Siswa beri instruksi ke kelas.' },
        { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: beri instruksi dua langkah. Belum bisa: cukup instruksi satu langkah, tidak apa-apa kalau sedikit terlambat merespons.' },
        { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati giliran siswa jadi pemimpin, langsung review cepat 5 instruksi di penutup.' },
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
          id    : 'tp03-penutup-review-cepat',
          tipe  : 'tpr_action',
          judul : 'Review Cepat 5 Instruksi',
          pm    : 'mindful',

          tujuan_komunikasi : 'Recap kemampuan respons TPR di tempo cepat',
          vocab_target      : ['sit down', 'stand up', 'open', 'close', 'listen', 'look'],

          durasi_target_detik : 240,
          durasi_min_detik    : 90,

          micro_script: {
            pembuka : '"Last round — fast! Ready?" Tanpa kartu, langsung instruksi acak.',
            selama  : 'Ucap 5 instruksi berbeda secara cepat. Siswa lakukan. Tempo bertahap dari normal ke cepat.',
            penutup : '"Wow, you are fast learners! Well done!"',
          },

          audio_cue: {
            contoh_guru  : 'Stand up! Sit down! Open your book! Close your book! Listen!',
            contoh_siswa : '',  // TPR
            target_vocab : ['sit down', 'stand up', 'open', 'close', 'listen'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Tempo lambat. 3 instruksi saja (yang paling dasar: sit/stand/listen).',
              panjang_speaking: 'Tidak ada — TPR fisik.',
            },
            normal: {
              bantuan: '5 instruksi. Tempo bertahap.',
              panjang_speaking: 'Tidak ada — TPR fisik.',
            },
            tantangan: {
              bantuan: 'Tambah 1 instruksi dua langkah di tengah review.',
              panjang_speaking: 'Tidak ada — TPR fisik.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun : 'Pakai suara teatrikal — lambat & dramatis lalu cepat. Siswa akan tertawa.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp03-penutup-farewell',
          tipe  : 'closure_reinforcement',
          judul : 'Apresiasi & Goodbye',
          pm    : 'joyful',

          tujuan_komunikasi : 'Closure positif dengan apresiasi',
          vocab_target      : [],

          durasi_target_detik : 90,
          durasi_min_detik    : 45,

          micro_script: {
            pembuka : '"Well done! Now you know classroom instructions in English!"',
            selama  : '"Goodbye, everyone! See you next time!"',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Well done! Now you know classroom instructions in English! Goodbye, everyone! See you next time!',
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
        { tipe: 'instruksi', teks: 'Review cepat: ucapkan 5 instruksi tanpa kartu, siswa lakukan. [Ready? Fast!]' },
        { tipe: 'audio',     teks: 'Well done! Now you know classroom instructions in English!' },
        { tipe: 'audio',     teks: 'Goodbye, everyone! See you next time!' },
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
          id    : 'tp03-penilaian-instruksi-acak',
          tipe  : 'observation_validation',
          judul : 'Instruksi Acak ke Siswa Belum Terobservasi',
          pm    : null,

          tujuan_komunikasi : 'Validasi respons fisik terhadap instruksi spontan',
          vocab_target      : [],

          durasi_target_detik : 360,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Sambil siswa berkemas, ucap 5 instruksi acak. Amati respons.',
            selama  : 'Yang langsung bergerak vs yang menunggu teman lebih dulu. Catat tanpa kasih kode.',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Stand up! Open your book! Close your book! Listen! Sit down!',
            contoh_siswa : '',  // TPR
            target_vocab : ['sit down', 'stand up', 'open', 'close', 'listen'],
          },

          media_dipakai : [],
          mode: null,

          observation: {
            aktif           : true,
            n_siswa         : 99,
            indikator       : ['response', 'vocab_use'],
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
        { tipe: 'instruksi', teks: 'Ucapkan 5 instruksi berbeda secara acak. Amati: siapa yang langsung bergerak? Siapa yang menunggu melihat teman dulu?' },
        { tipe: 'instruksi', teks: 'Nilai Listening: respons fisik benar/salah. Speaking: bisa ucapkan instruksi. Reading: bisa baca kartu instruksi.' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang masih bingung open/close atau sit/stand?' },
      ],
    },

  ],

};

export default TP_03;
