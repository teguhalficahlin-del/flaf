/**
 * =============================================================
 * FLAF — TP 11 (Daily Routines)
 * File: docs/sesi-m6/tp-11.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Sesi M6 — Mei 2026
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[10] (v3)
 *
 * KARAKTER KHAS TP 11:
 *   - Topik SEDANG-TINGGI — rutinitas bisa expose kondisi keluarga.
 *   - Aktivitas utama menggunakan kartu rutinitas generik dan pretend.
 *   - Sequence words: first, then, after that. Tidak ada personal recall wajib.
 *   - Closure reinforcement universal: say English phrase when doing routine at home.
 *
 * PENERAPAN PATTERN INKLUSIVITAS:
 *   - Pattern 1: scripted micro_script inklusif Bahasa Indonesia di Pembuka.
 *   - Pattern 2: semua siswa menggunakan kartu pretend / contoh generik,
 *     tidak ada paksaan cerita rutinitas pribadi.
 *   - Pattern 5: fallback.sensitif di aktivitas pair work / presentasi.
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - docs/sesi-m5/tp-10.js
 *   - docs/sesi-m4/tp-09.js
 */

const TP_11 = {

  id       : 'tp-11',
  nomor    : 11,
  kelas    : 2,
  nama     : 'Daily Routines',
  tema     : 'Kehidupan Sehari-hari',
  deskripsi: `Peserta didik mengenal dan mengungkapkan kegiatan rutin sehari-hari
    menggunakan kalimat sederhana dan urutan kata bahasa Inggris.`,

  indikator: [
    'Peserta didik dapat menyebut kegiatan rutin harian (wake up, brush teeth, eat breakfast, go to school, study, play, eat dinner, sleep) dengan lafal yang benar.',
    'Peserta didik dapat mengungkapkan urutan kegiatan menggunakan "first, then, after that" dalam 3–4 kalimat.',
    'Peserta didik dapat merespons pertanyaan "What do you do every day?" dengan frasa rutinitas sederhana.',
  ],

  vocab: ['wake up', 'brush teeth', 'eat breakfast', 'go to school', 'study', 'play', 'eat dinner', 'sleep', 'every day', 'first', 'then', 'after that'],

  persiapan: ['Kartu gambar kegiatan rutin', 'Kartu urutan (first/then/after that)'],

  media: [
    {
      id                 : 'media-kartu-rutinitas',
      nama               : 'Kartu Gambar Rutinitas Harian',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'tp-11-v1.pdf',
      pdf_halaman        : 1,
      reusable_lintas_tp : true,
      keterangan         : '8 kartu kegiatan harian A5 (wake up, brush teeth, eat breakfast, go to school, study, play, eat dinner, sleep) dengan ilustrasi sederhana dan label Inggris di bawah gambar.',
    },
    {
      id                 : 'media-kartu-urutan',
      nama               : 'Kartu Urutan Bahasa Inggris',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'tp-11-v1.pdf',
      pdf_halaman        : 2,
      reusable_lintas_tp : true,
      keterangan         : '3 kartu urutan A5: first, then, after that. Digunakan untuk latihan menyusun cerita rutin dan memperkenalkan kata urutan.',
    },
  ],

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp11-pembuka-hook',
          tipe  : 'meaningful_link',
          judul : 'Pretend Daily Routines — Hook Pembuka',
          pm    : 'joyful',

          tujuan_komunikasi : 'Membangun minat dan inklusivitas dengan contoh rutinitas generik — semua rutinitas berbeda dan semua baik.',
          vocab_target      : ['every day', 'first', 'then'],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Tunjukkan semua kartu rutinitas. Ucapkan dalam Bahasa Indonesia: "Kegiatan pagi semua orang bisa beda. Ada yang bangun pagi, ada yang sarapan dulu. Semua rutinitas itu bagus. Hari ini kita belajar bilang kegiatan sehari-hari dalam bahasa Inggris."',
            selama  : `Guru tunjuk kartu satu per satu sambil peragakan gerakan ringan: bangun tidur, sikat gigi, makan sarapan, pergi ke sekolah, belajar, bermain, makan malam, tidur. Setiap kartu disebutkan sekali dalam Bahasa Inggris, lalu kelas sahut bersama satu kata kunci: "Wake up! Brush teeth! Eat breakfast!" Lanjutkan dengan menekankan: "This is what we do every day."`,
            penutup : '"Today we learn routine words. Every day — first, then, after that. Let us go!"',
          },

          audio_cue: {
            contoh_guru  : 'Look at these cards. Every day, some people wake up, brush teeth, and eat breakfast. First, wake up. Then, brush teeth. After that, eat breakfast! This is our daily routine.',
            contoh_siswa : 'Wake up! Brush teeth! Eat breakfast! After that! Every day!',
            target_vocab : ['every day', 'first', 'then', 'after that'],
          },

          media_dipakai : ['media-kartu-rutinitas'],

          mode: {
            mudah: {
              bantuan: 'Guru demo semua gerakan lebih lambat. Kelas hanya menirukan satu kata kunci per kartu: "Wake up! Brush teeth!" Tidak perlu menjelaskan alur sendiri.',
              panjang_speaking: 'Sahut satu kata atau frasa pendek bersama.',
            },
            normal: {
              bantuan: 'Guru tunjuk kartu, sebut frasa, kelas ulang bersama. Gunakan kata urutan setelah 2 kartu pertama: "First, wake up. Then, brush teeth."',
              panjang_speaking: 'Sahut frasa sederhana dan kata urutan.',
            },
            tantangan: {
              bantuan: 'Setelah setiap kartu, tanyakan kepada satu siswa sukarela: "What is this?" Kelas bisa jawab bersama. Tidak ada paksaan individu.',
              panjang_speaking: 'Sahut frasa lengkap: "First, wake up!"',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_ribut  : 'Kurangi energi suara guru dan minta kelas berdiri sedikit: "Ready? One, two, three — wake up!" Lanjutkan dengan tempo lebih lambat.',
            kelas_malu   : 'Guru beri contoh pertama dengan ekspresi lucu: "I wake up!" lalu ajak kelas ulang bersama. Tidak ada siswa ditunjuk jika mereka tidak siap.',
            satu_jawaban : 'Jika semua menjawab satu kata terus, guru boleh ulang dengan nada berbeda: "Now — every day! Repeat after me: every day!"',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp11-pembuka-modeling',
          tipe  : 'modeling',
          judul : 'Kenalkan 8 Kegiatan Rutin',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa mengenal 8 kegiatan rutin harian dengan lafal yang benar dan konteks gerakan.',
          vocab_target      : ['wake up', 'brush teeth', 'eat breakfast', 'go to school', 'study', 'play', 'eat dinner', 'sleep'],

          durasi_target_detik : 420,
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : 'Tempel semua kartu rutinitas di papan. Tunjuk satu per satu, ucap guru pelan, kelas ulang. Mulai dari pagi: wake up, brush teeth, eat breakfast.',
            selama  : 'Urutkan kartu: wake up → brush teeth → eat breakfast → go to school → study → play → eat dinner → sleep. Untuk setiap kartu: tunjuk, gerakkan tangan, ucap guru, kelas ulang. Ulangi dua kali. Putaran kedua: guru tunjuk acak, kelas jawab bersama.',
            penutup : '"Wake up, brush teeth, eat breakfast — this is a routine. Great!"',
          },

          audio_cue: {
            contoh_guru  : 'Wake up. Brush teeth. Eat breakfast. Go to school. Study. Play. Eat dinner. Sleep. Now together — wake up! Brush teeth! Eat breakfast!','
            contoh_siswa : 'Wake up! Brush teeth! Eat breakfast! Go to school! Study! Play! Eat dinner! Sleep!','
            target_vocab : ['wake up', 'brush teeth', 'eat breakfast', 'go to school', 'study', 'play', 'eat dinner', 'sleep'],
          },

          media_dipakai : ['media-kartu-rutinitas'],

          mode: {
            mudah: {
              bantuan: 'Fokus pada 4 kegiatan pertama: wake up, brush teeth, eat breakfast, go to school. Study, play, eat dinner, sleep diperkenalkan tetapi tidak diharuskan hafal.',
              panjang_speaking: 'Sahut frasa pendek per kartu.',
            },
            normal: {
              bantuan: 'Semua 8 kegiatan diperkenalkan. Guru tunjuk, ucap, kelas ulang. 2 putaran penuh.',
              panjang_speaking: 'Sahut frasa lengkap untuk setiap kegiatan.',
            },
            tantangan: {
              bantuan: 'Setelah kartu utama, guru sebutkan gambar tambahan seperti "play" atau "eat dinner" sekali lagi. Siswa boleh menebak makna sebelum dikonfirmasi.',
              panjang_speaking: 'Sahut frasa lengkap dan coba ingat 8 kegiatan.',
            },
          },

          observation: { aktif: false },

          fallback: {
            lafal_brush_teeth : 'Untuk "brush teeth", ucap perlahan: "brush... teeth". Tiru suara sikat gigi dengan gerakan tangan.',
            lafal_eat_dinner  : 'Untuk "eat dinner", tekankan "dinner" sebagai makan malam. Bisa ditunjukkan dengan gerakan makan malam ringan.',
            media_tidak_tersedia : 'Jika kartu tidak tersedia, guru gambar cepat di papan: orang bangun, sikat gigi, makan, sekolah, belajar, bermain, makan malam, tidur.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Tunjukkan semua kartu rutinitas. Ucapkan satu per satu, bergerak bersama. Tekankan: "This is what we do every day."' },
        { tipe: 'audio',     teks: 'Wake up. Brush teeth. Eat breakfast. Go to school. Study. Play. Eat dinner. Sleep.' },
        { tipe: 'instruksi', teks: 'Ajarkan kata urutan: tulis first, then, after that di papan. Tunjukkan contoh: "First I wake up. Then I brush my teeth. After that I eat breakfast."' },
        { tipe: 'audio',     teks: 'First, I wake up. Then, I brush my teeth. After that, I eat breakfast.' },
      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,

      aktivitas: [
        {
          id    : 'tp11-inti-sequence-practice',
          tipe  : 'chorus',
          judul : 'First, Then, After That — Sequence Practice',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa mempraktikkan kata urutan untuk menyusun rutinitas sederhana dalam bahasa Inggris.',
          vocab_target      : ['first', 'then', 'after that', 'wake up', 'brush teeth', 'eat breakfast'],

          durasi_target_detik : 360,
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : 'Tunjukkan tiga kartu urutan. Jelaskan: "First means pertama, then berarti lalu, after that berarti setelah itu."',
            selama  : `Buat 2–3 contoh dengan kartu rutinitas: "First, I wake up. Then, I brush my teeth. After that, I eat breakfast." Kelas ulang bersama.
Lalu guru minta kelas susun kembali dengan 3 kartu berbeda: "First, I go to school. Then, I study. After that, I play." Ulangi beberapa kali dengan kombinasi simple.`,
            penutup : '"Great! Now you can say the order of your routine in English — first, then, after that!"',
          },

          audio_cue: {
            contoh_guru  : 'First, I wake up. Then, I brush my teeth. After that, I eat breakfast. Now let us do another one — first, I go to school. Then, I study. After that, I play.',
            contoh_siswa : 'First, I wake up! Then, I brush my teeth! After that, I eat breakfast!',
            target_vocab : ['first', 'then', 'after that', 'wake up', 'brush teeth', 'eat breakfast', 'go to school', 'study', 'play'],
          },

          media_dipakai : ['media-kartu-rutinitas', 'media-kartu-urutan'],

          mode: {
            mudah: {
              bantuan: 'Gunakan hanya 3 kegiatan pertama. Guru ucap frasa lengkap, kelas ulang bersama. Tidak perlu memilih sendiri kombinasi baru.',
              panjang_speaking: 'Sahut frasa lengkap 3 kartu satu per satu.',
            },
            normal: {
              bantuan: 'Kelas susun 3 kegiatan memakai kata urutan. Guru bantu kalau ragu dengan pilihan kartu.',
              panjang_speaking: 'Sahut frasa urutan lengkap: "First I ___, then I ___, after that I ___."',
            },
            tantangan: {
              bantuan: 'Tambahkan 4 kegiatan satu per satu: "First I wake up. Then I eat breakfast. After that I go to school." Guru bantu transisi.',
              panjang_speaking: 'Frasa urutan 3-4 kegiatan dalam sekali alur.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_pasif    : 'Pakailah kartu visual. "Look — first, then, after that. Repeat after me: First, I wake up."',
            kelas_ribut    : 'Ajak kelas diam sejenak: "Hands on knees, look at me. First, wake up. Then, brush teeth." Lanjut dengan tempo pelan.',
            media_tidak_tersedia : 'Gunakan papan tulis untuk menulis urutan: First → Then → After that. Gambar panah untuk membantu.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp11-inti-pair-practice',
          tipe  : 'pair_work',
          judul : 'Pretend Routine Dialogue — Pair Work',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa mempraktikkan tanya jawab rutinitas sederhana dengan pasangan menggunakan contoh pretend generik.',
          vocab_target      : ['wake up', 'brush teeth', 'eat breakfast', 'go to school', 'study', 'play', 'eat dinner', 'sleep', 'first', 'then', 'after that'],

          durasi_target_detik : 900,
          durasi_min_detik    : 600,

          micro_script: {
            pembuka : 'Guru demo dengan satu siswa: "What do you do every day? First, I wake up. Then, I brush my teeth. After that, I eat breakfast."',
            selama  : `PAIR WORK:
Siswa A tunjuk 3 kartu rutinitas. Siswa A tanya ke Siswa B: "What do you do every day?" Siswa B jawab dengan urutan menggunakan first/then/after that. Contoh: "First, I wake up. Then, I brush my teeth. After that, I eat breakfast." Setelah 3 kartu, tukar peran.
Guru berkeliling dan bantu pola kalimat. Tekankan: "If you do something different, that is okay. Use the cards to help you."`,
            penutup : '"Great! You can talk about daily routines in English with your friend."',
          },

          audio_cue: {
            contoh_guru  : 'What do you do every day? First, I wake up. Then, I brush my teeth. After that, I eat breakfast. Now you try with your partner.',
            contoh_siswa : 'First, I wake up. Then, I brush my teeth. After that, I go to school.',
            target_vocab : ['what do you do every day', 'first', 'then', 'after that', 'wake up', 'brush teeth', 'eat breakfast', 'go to school', 'study', 'play', 'eat dinner', 'sleep'],
          },

          media_dipakai : ['media-kartu-rutinitas', 'media-kartu-urutan'],

          mode: {
            mudah: {
              bantuan: 'Siswa B cukup jawab dua kegiatan utama: "First, I wake up. Then, I brush my teeth." Siswa A dapat meniru pola guru tanpa membuat kalimat panjang sendiri.',
              panjang_speaking: '2-3 frasa urutan singkat.',
            },
            normal: {
              bantuan: 'Kedua siswa bertanya dan menjawab. Gunakan 3 kartu untuk membentuk urutan lengkap.',
              panjang_speaking: '3-4 frasa urutan sederhana.',
            },
            tantangan: {
              bantuan: 'Tambahkan kata "after that" dan gunakan 4 kegiatan. Siswa bisa menjelaskan rutinitas pretend yang lebih panjang.',
              panjang_speaking: 'Urutan 4 kegiatan penuh: first, then, after that, ...',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['participation', 'response', 'confidence'],
            rotasi_priority : 'belum_speaking_turn',
            tag_set         : 'standar',
          },

          fallback: {
            sensitif             : 'Jika siswa terlihat tidak nyaman, minta mereka menjawab bersama kelompok kecil: "We do this every day — first wake up, then brush teeth." Tidak perlu cerita pribadi.',
            pair_tidak_jalan     : 'Guru bantu pasangan terdiam: "Repeat after me — First, I wake up. Then, I brush my teeth." Lalu coba lagi dengan kartu yang sama.',
            kelas_diam           : 'Single chorus: guru sebut pola, kelas ulang bersama. Lalu kembali ke pair work dengan energi lebih ringan.',
            waktu_mepet          : 'Cukup satu giliran per pasangan (satu tanya, satu jawab) untuk 3 pasangan. Langsung penutup.',
          },

          advance: { mode: 'timer_visible_only' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Ajarkan kata urutan dengan contoh: "First I wake up. Then I brush my teeth. After that I eat breakfast." Minta kelas ulang bersama.' },
        { tipe: 'instruksi', teks: 'Pair work: Siswa A tunjuk 3 kartu, tanya ke Siswa B: "What do you do every day?" Siswa B jawab menggunakan first/then/after that. Tukar peran setelah 3 kartu.' },
        { tipe: 'instruksi', teks: 'Gunakan kalimat pretend generik: "Imagine this is your routine today." Tekankan bahwa semua jawaban berbeda dan tidak ada yang salah.' },
        { tipe: 'instruksi', teks: 'Jika waktu mepet, skip swap role dan cukup satu arah tanya-jawab untuk 3 pasangan.' },
      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp11-penutup-review',
          tipe  : 'review_quick',
          judul : 'Tunjuk Kartu Cepat — Review Rutinitas',
          pm    : 'joyful',

          tujuan_komunikasi : 'Recap cepat rutinitas dan kata urutan untuk memastikan retensi sebelum penutup.',
          vocab_target      : ['wake up', 'brush teeth', 'eat breakfast', 'go to school', 'study', 'play', 'eat dinner', 'sleep', 'first', 'then', 'after that'],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Last round — fast review! I point, you say the routine and the order."',
            selama  : 'Guru tunjuk kartu rutinitas acak. Kelas sahut bersama: "First, I wake up!" atau "Then, I brush my teeth!" Jika kelas kesulitan, guru bantu dengan kata urutan terlebih dahulu.',
            penutup : '"Excellent! You know daily routine words and order. Great job!"',
          },

          audio_cue: {
            contoh_guru  : 'First, I wake up! Then, I eat breakfast! After that, I go to school! Fast review! Ready?',
            contoh_siswa : 'First, I wake up! Then, I brush my teeth! After that, I play!',
            target_vocab : ['first', 'then', 'after that', 'wake up', 'brush teeth', 'eat breakfast', 'go to school', 'study', 'play', 'eat dinner', 'sleep'],
          },

          media_dipakai : ['media-kartu-rutinitas', 'media-kartu-urutan'],

          mode: {
            mudah: {
              bantuan: 'Gunakan 4 kartu utama saja. Guru sebut kata urutan, kelas jawab frasa pendek.',
              panjang_speaking: 'Frasa pendek dengan kata urutan.',
            },
            normal: {
              bantuan: 'Semua kartu ditunjuk. Kelas sahut kalimat urutan lengkap.',
              panjang_speaking: '3-4 frasa urutan singkat.',
            },
            tantangan: {
              bantuan: 'Kelas bisa menambahkan "after that" jika sudah siap. Guru minta 1 siswa sukarela menyebut 4 kegiatan.',
              panjang_speaking: '4 frasa urutan dalam satu rangkaian.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun : 'Gunakan tempo lebih cepat dengan suara dramatis: "First! Then! After that!" Biar kelas ikut semangat.',
            waktu_mepet  : 'Cukup 4 kartu di 1 putaran. Langsung penutup.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp11-penutup-closure',
          tipe  : 'closure_reinforcement',
          judul : 'Say It When You Do It — Closing',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Memperkuat transfer ke kehidupan nyata dengan ajakan universal menggunakan frasa bahasa Inggris saat melakukan rutinitas.',
          vocab_target      : [],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"You learned many routine words today!"',
            selama  : 'Tunjuk 3 kartu: wake up, brush teeth, eat dinner. Ucap: "Next time you wake up, say: wake up. Next time you brush your teeth, say: brush teeth. Next time you eat dinner, say: eat dinner. You can say it in English every day."',
            penutup : '"Daily routines are everywhere. Say them in English. Goodbye class!"',
          },

          audio_cue: {
            contoh_guru  : 'Next time you wake up, say: wake up. Next time you brush your teeth, say: brush teeth. Daily routines are everywhere. Say them in English. Goodbye class!',
            contoh_siswa : 'Goodbye, teacher!',
            target_vocab : ['goodbye'],
          },

          media_dipakai : [],
          mode         : null,
          observation  : { aktif: false },
          fallback     : {},
          advance      : { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Review cepat dengan kartu urutan. Guru tunjuk kartu dan kelas sahut bersama frasa rutinitas singkat.' },
        { tipe: 'instruksi', teks: 'Closure: ajak kelas gunakan bahasa Inggris ketika melakukan rutinitas di rumah. Contoh: "When you wake up, say wake up!"' },
        { tipe: 'audio',     teks: 'Next time you wake up, say: wake up. Next time you brush your teeth, say: brush teeth. Daily routines are everywhere. Say them in English. Goodbye class!' },
      ],
    },

    {
      fase  : 'Penilaian',
      durasi: 6,

      aktivitas: [
        {
          id    : 'tp11-penilaian-validation',
          tipe  : 'observation_validation',
          judul : 'Validate Routine Phrases',
          pm    : null,

          tujuan_komunikasi : 'Validasi kemampuan siswa merespons pertanyaan rutinitas sederhana dan menggunakan kata urutan secara benar.',
          vocab_target      : ['wake up', 'brush teeth', 'eat breakfast', 'go to school', 'sleep', 'first', 'then', 'after that'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Sambil siswa bersiap pulang, dekati beberapa siswa yang belum sempat berbicara. Beri prompt singkat dengan kartu.' ,
            selama  : 'Contoh prompt: "What do you do every day? First, I wake up. Then, I brush my teeth." Amati apakah siswa dapat merespons dengan kata urutan atau minimal menyebut kegiatan yang benar.',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'What do you do every day? First, I wake up. Then, I brush my teeth. After that, I eat breakfast.',
            contoh_siswa : '',
            target_vocab : [],
          },

          media_dipakai : ['media-kartu-rutinitas', 'media-kartu-urutan'],
          mode         : null,

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['response', 'vocab_use', 'confidence'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'standar',
          },

          fallback: {
            siswa_pasif : 'Jangan paksa. Tunjuk kartu dan ulangi prompt: "What do you do every day?" Beri waktu sejenak untuk berpikir.',
            waktu_mepet : 'Cukup validasi 3 siswa prioritas. Fokus pada pola "First... Then..." atau minimal nama kegiatan.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Sambil siswa pulang, dekati 3–4 siswa. Tunjukkan kartu dan tanyakan: "What do you do every day?" atau "First, I ... Then, I ..."' },
        { tipe: 'instruksi', teks: 'Nilai Listening: siswa memahami prompt. Speaking: siswa menggunakan kata rutinitas atau kata urutan. Reading: siswa dapat membaca nama kegiatan di kartu jika perlu.' },
        { tipe: 'instruksi', teks: 'Catat siswa yang masih ragu dengan "first/then/after that". Beri catatan untuk latihan berikutnya.' },
      ],
    },

  ],

};

export default TP_11;
