/**
 * =============================================================
 * FLAF — TP 13 (Weather)
 * File: docs/sesi-m8/tp-13.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Sesi M8 — Mei 2026
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[12] (v3)
 *
 * KARAKTER KHAS TP 13:
 *   - Topik RENDAH sensitif — cuaca netral, universal.
 *   - Aktivitas utama: gesture cuaca + cuaca↔aktivitas matching.
 *   - Pola bahasa: "When it is [weather], I [activity]" (pola kondisional).
 *   - Pembuka hook: lihat jendela bersama, real-world weather observation.
 *   - Inti: TPR gesture (mengipas=hot, peluk=cold) + pair_work matching.
 *   - Closure: jembatan ke rumah — cerita cuaca pagi ini ke keluarga.
 *
 * PENERAPAN PATTERN INKLUSIVITAS:
 *   - Pattern 2/4: Kartu aktivitas generic (umbrella/hat/sweater) — tidak asumsi siswa punya.
 *   - Pattern 5: `fallback.sensitif` untuk siswa tanpa perlengkapan tertentu.
 *     "Jika tidak punya umbrella, bisa main di dalam rumah saat hujan."
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - docs/sesi-m7/tp-12.js
 *   - docs/sesi-m6/tp-11.js
 */

const TP_13 = {

  id       : 'tp-13',
  nomor    : 13,
  kelas    : 2,
  nama     : 'Weather',
  tema     : 'Alam dan Lingkungan',
  deskripsi: `Peserta didik mengenal kondisi cuaca utama dalam bahasa Inggris
    dan menggunakan pola "When it is [weather], I [activity]" untuk menghubungkan
    cuaca dengan aktivitas sehari-hari.`,

  indikator: [
    'Peserta didik dapat menyebut 6 kondisi cuaca (sunny, cloudy, rainy, windy, hot, cold) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan cuaca hari ini menggunakan "Today is ..." atau "The weather is ...".',
    'Peserta didik dapat menghubungkan cuaca dengan aktivitas menggunakan pola "When it is ..., I ...".',
  ],

  vocab: ['sunny', 'cloudy', 'rainy', 'windy', 'hot', 'cold', 'weather', 'today', 'umbrella', 'when it is'],

  persiapan: ['Kartu gambar 6 cuaca', 'Kalender cuaca kelas (opsional)'],

  media: [
    {
      id                 : 'media-kartu-cuaca',
      nama               : 'Kartu Gambar 6 Cuaca',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'tp-13-v1.pdf',
      pdf_halaman        : 1,
      reusable_lintas_tp : true,
      keterangan         : '6 kartu A5 berisi gambar cuaca (sunny, cloudy, rainy, windy, hot, cold) dengan label Inggris. Gambar sederhana dan jelas.',
    },
    {
      id                 : 'media-kartu-aktivitas-cuaca',
      nama               : 'Kartu Aktivitas Cuaca',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'tp-13-v1.pdf',
      pdf_halaman        : 2,
      reusable_lintas_tp : true,
      keterangan         : '6 kartu A5 berisi aktivitas yang cocok untuk setiap cuaca (sunny→play outside, rainy→use umbrella, hot→drink water, cold→wear sweater, windy→fly kite, cloudy→play indoors). Illustrasi sederhana.',
    },
  ],

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp13-pembuka-meaningful',
          tipe  : 'meaningful_link',
          judul : 'Look Outside — Cuaca Nyata Observasi',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa connect pembelajaran ke cuaca real-time di luar, membangun meaningful context sebelum vocab formal.',
          vocab_target      : [],

          durasi_target_detik : 180,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Good morning! Let us look outside the window. What do you see? What is the weather like today?"',
            selama  : `Ajak siswa ke jendela atau lihat dari tempat duduk. Tanya: "Is it sunny? Is it rainy? Is it windy?" Siswa jawab bahasa Indonesia dulu ("Cerah!", "Hujan!", dll). Guru akui: "Yes! Cerah itu sunny. Hujan itu rainy."`,
            penutup : '"Today we learn words for weather in English!"',
          },

          audio_cue: {
            contoh_guru  : 'Look outside! What is the weather today? Is it sunny? Is it rainy? Is it cloudy?',
            contoh_siswa : 'Sunny! / Rainy! / Cloudy!',
            target_vocab : [],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Guru tunjuk ke jendela dan bilang sendiri: "It is sunny today!" Siswa dengar dan ulangi kata "sunny".',
              panjang_speaking: 'Siswa jawab "yes" atau sebutkan cuaca dalam bahasa Indonesia saja.',
            },
            normal: {
              bantuan: 'Guru tanya, siswa jawab dalam bahasa Indonesia atau mulai with English words.',
              panjang_speaking: 'Siswa coba jawab "It is sunny" atau sebutkan cuaca Inggris.',
            },
            tantangan: {
              bantuan: 'Guru tanya detail: "Is it sunny or cloudy? Is it hot or cold?" Siswa jawab full pola.',
              panjang_speaking: 'Siswa susun kalimat "Today is [day]. The weather is [cuaca]."',
            },
          },

          observation: { aktif: false },

          fallback: {
            cuaca_tidak_bagus : 'Jika jendela tertutup atau cuaca membosankan, gunakan kartu cuaca. Guru: "Pretend today is like this card. What do you think?"',
            kelas_tidak_interested : 'Skip ke kartu cuaca + gesture langsung. Keep momentum tetap positif.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp13-pembuka-modeling',
          tipe  : 'modeling',
          judul : 'Kenalkan 6 Kondisi Cuaca',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa mengenal 6 kondisi cuaca (sunny, cloudy, rainy, windy, hot, cold) via kartu visual + konteks gesture.',
          vocab_target      : ['sunny', 'cloudy', 'rainy', 'windy', 'hot', 'cold'],

          durasi_target_detik : 360,
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : '"Now let us learn the words for weather. Here are 6 types of weather."',
            selama  : `Tempel atau pegang 6 kartu cuaca di depan kelas. Untuk setiap cuaca:
1. Sebut kata: "Sunny!"
2. Peragakan gesture sederhana:
   - Sunny: mengangkat tangan ke atas (terik matahari)
   - Cloudy: tutup wajah dengan tangan (awan gelap)
   - Rainy: jari jatuh ke bawah (hujan turun)
   - Windy: ayunkan lengan ke samping (angin kuat)
   - Hot: kipas wajah sendiri (panas)
   - Cold: peluk diri (dingin)
3. Kelas ulang bersama: "Sunny! Cloudy! Rainy! Windy! Hot! Cold!"
4. Ulangi 1 putaran lagi, tempo cepat.`,
            penutup : '"Great! You know all weather words now!"',
          },

          audio_cue: {
            contoh_guru  : 'Sunny! Cloudy! Rainy! Windy! Hot! Cold! Say it with me: Sunny! Cloudy! Rainy! Windy! Hot! Cold!',
            contoh_siswa : 'Sunny! Cloudy! Rainy! Windy! Hot! Cold!',
            target_vocab : ['sunny', 'cloudy', 'rainy', 'windy', 'hot', 'cold'],
          },

          media_dipakai : ['media-kartu-cuaca'],

          mode: {
            mudah: {
              bantuan: 'Cukup 3 cuaca (sunny, rainy, hot). Siswa tiru gesture, tidak perlu ulang kata.',
              panjang_speaking: 'Siswa dengarkan, boleh gerak bersama, tidak wajib ucap.',
            },
            normal: {
              bantuan: '6 cuaca, kelas ulang bersama 2x (lambat→cepat).',
              panjang_speaking: 'Ulang kata "Sunny! Cloudy! Rainy! Windy! Hot! Cold!" bersama.',
            },
            tantangan: {
              bantuan: '6 cuaca dengan gesture kompleks. Siswa boleh lead gesture atau ciptakan gesture sendiri.',
              panjang_speaking: 'Ucapkan tiap kata + gesture saat guru menunjuk kartu random.',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_lupa_gesture : 'Tidak masalah. Fokus pada ucapan kata. Gesture hanya membantu memory, bukan wajib.',
            energi_turun       : 'Tambah gerakan besar: berdiri, loncat, berputar saat sebut cuaca. Buat ceria.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Ajak siswa observasi cuaca nyata dari jendela atau ruangan. Tanya bahasa Indonesia dulu.' },
        { tipe: 'audio',     teks: 'Today is sunny! Today is rainy! Today is cloudy! Today is cold! Today is hot! Today is windy!' },
        { tipe: 'instruksi', teks: 'Tempel 6 kartu cuaca. Sebut kata + peragakan gesture untuk setiap cuaca. Ulang 2x.' },
        { tipe: 'audio',     teks: 'Sunny — hot — rainy — cold — windy — cloudy. Again: Sunny — hot — rainy — cold — windy — cloudy!' },
      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,

      aktivitas: [
        {
          id    : 'tp13-inti-tpr-gesture',
          tipe  : 'tpr_action',
          judul : 'Weather Gesture — TPR Praktik',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa memperkuat nama 6 cuaca via gesture TPR + instruksi "Show me..." untuk membangun memory kinesthetic.',
          vocab_target      : ['sunny', 'cloudy', 'rainy', 'windy', 'hot', 'cold'],

          durasi_target_detik : 480,
          durasi_min_detik    : 300,

          micro_script: {
            pembuka : '"Now, let us show the weather with our body!"',
            selama  : `FASE 1 — GURU LEAD (3 menit):
Guru sebut cuaca, kelas tiru gesture:
- Guru: "Sunny!" Kelas: mengangkat tangan ke atas
- Guru: "Rainy!" Kelas: jari turun seperti hujan
- Guru: "Hot!" Kelas: kipas wajah
- Guru: "Cold!" Kelas: peluk diri
- Guru: "Windy!" Kelas: ayunkan lengan
- Guru: "Cloudy!" Kelas: tutup wajah
Ulangi 2 putaran: lambat, lalu cepat.

FASE 2 — SISWA LEAD (3 menit):
Tunjuk siswa acak untuk lead gesture di depan, siswa lain tiru. 3-4 siswa bergantian.

FASE 3 — GAME: "SHOW ME..." (4 menit):
Guru sebut: "Show me sunny!" Kelas gesture. Guru sebut: "Show me rainy!" Kelas gesture. Acak urutan, tempo meningkat.`,
            penutup : '"Excellent! Your bodies know all the weather!"',
          },

          audio_cue: {
            contoh_guru  : 'Sunny! Rainy! Hot! Cold! Windy! Cloudy! Show me sunny! Show me rainy! Show me cold! Show me hot!',
            contoh_siswa : '[Gestures only — no speech required]',
            target_vocab : ['sunny', 'cloudy', 'rainy', 'windy', 'hot', 'cold'],
          },

          media_dipakai : ['media-kartu-cuaca'],

          mode: {
            mudah: {
              bantuan: 'Cukup 3 cuaca (sunny, rainy, hot) + 1 putaran. Fase 2 dan 3 skip.',
              panjang_speaking: 'Tidak ada (gesture only).',
            },
            normal: {
              bantuan: '6 cuaca, 3 fase semua. Siswa tiru gesture guru.',
              panjang_speaking: 'Tidak ada (gesture only). Atau boleh ucap nama cuaca saat gesture.',
            },
            tantangan: {
              bantuan: 'Siswa lead gesture di depan atau ciptakan gesture kreatif sendiri untuk setiap cuaca.',
              panjang_speaking: 'Ucapkan nama cuaca sambil gesture, tempo cepat.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_malu_lead : 'Tidak paksa. Biarkan observe dulu. Cukup gesture bersama kelas.',
            energi_turun    : 'Tambah variasi: gesture sambil loncat, berputar, atau bergerak keliling ruangan.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp13-inti-pair-weather-activity',
          tipe  : 'pair_work',
          judul : 'Cuaca & Aktivitas Matching — Pola "When it is..."',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa menghubungkan kondisi cuaca dengan aktivitas menggunakan pola "When it is [weather], I [activity]."',
          vocab_target      : ['sunny', 'cloudy', 'rainy', 'windy', 'hot', 'cold', 'weather', 'umbrella', 'when it is'],

          durasi_target_detik : 600,
          durasi_min_detik    : 420,

          micro_script: {
            pembuka : '"Now let us connect weather to what we do. When it is sunny, what do you do?"',
            selama  : `FASE 1 — GURU MODEL (4 menit):
Guru model pola penghubungan cuaca↔aktivitas:
- Guru pegang kartu "Sunny" + "Play outside": "When it is sunny, I play outside."
- Guru pegang kartu "Rainy" + "Use umbrella": "When it is rainy, I use an umbrella."
- Guru pegang kartu "Hot" + "Drink water": "When it is hot, I drink water."
- Guru pegang kartu "Cold" + "Wear sweater": "When it is cold, I wear a sweater."
Ulang 4 contoh ini 2x, kelas sahut "use umbrella", "drink water", dll.

FASE 2 — PAIR MATCHING (4 menit):
Siswa pasang 2 orang. Guru bagi kartu cuaca ke Siswa A, kartu aktivitas ke Siswa B.
- Siswa A pegang "Rainy", tanya: "What do I do when it is rainy?"
- Siswa B: "You use an umbrella!" atau tunjuk kartu aktivitas.
Rotate kartu 2-3 putaran.

FASE 3 — CIRCLE TALK (2 menit):
Lingkar, guru sebut cuaca, siswa ambil giliran: "When it is [cuaca], I..."
Tidak perlu kalimat sempurna — boleh: "When it is sunny... play!" atau just "Outside!"`,
            penutup : '"Great! You understand the connection between weather and activities!"',
          },

          audio_cue: {
            contoh_guru  : 'When it is sunny, I play outside. When it is rainy, I use an umbrella. When it is hot, I drink water. When it is cold, I wear a sweater.',
            contoh_siswa : 'When it is rainy, I use an umbrella. / Use umbrella! / Outside!',
            target_vocab : ['when it is', 'sunny', 'rainy', 'hot', 'cold', 'umbrella'],
          },

          media_dipakai : ['media-kartu-cuaca', 'media-kartu-aktivitas-cuaca'],

          mode: {
            mudah: {
              bantuan: 'Guru model dulu, siswa tunjuk/pilih kartu aktivitas yang cocok. Tidak perlu ucap pola "when it is...".',
              panjang_speaking: 'Tunjuk kartu atau sebutkan aktivitas saja (e.g., "umbrella!").',
            },
            normal: {
              bantuan: 'Pair matching + coba ucap pola "When it is [cuaca], I [aktivitas]" dengan guru model sebagai reference.',
              panjang_speaking: 'Ucapkan pola dengan bantuan guru atau kartu visual.',
            },
            tantangan: {
              bantuan: 'Siswa buat kalimat sendiri: "When it is [cuaca], I... [aktivitas lain]." Kreatif dengan aktivitas pilihan sendiri.',
              panjang_speaking: 'Ucapkan full pola tanpa kartu reference. Ciptakan variasi aktivitas sendiri.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_tidak_bisa_sentuh : 'Tidak perlu sentuh/pegang kartu. Boleh tunjuk dari tempat duduk atau sebutkan saja.',
            sensitif_ekonomi : 'Jika siswa tidak punya umbrella/sweater, tawarkan alternatif: "When it is rainy, I stay inside and play." Jangan fokus pada perlengkapan, fokus pada aktivitas.',
            pasangan_canggung : 'Pair dengan guru dulu, atau 3-orang grouping. Fokus pada confidence, tidak perlu perfect.',
            waktu_mepet : 'Cukup Fase 1 + Fase 3 (skip Fase 2 detailed matching).',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'TPR gesture: Guru sebut cuaca, siswa gesture. Ulangi 2x (lambat→cepat). 3-4 siswa bergantian lead gesture di depan.' },
        { tipe: 'audio',     teks: 'Sunny! Rainy! Hot! Cold! Windy! Cloudy! Show me sunny! Show me rainy! Show me cold!' },
        { tipe: 'instruksi', teks: 'Model pola "When it is [cuaca], I [aktivitas]." Guru pegang 2 kartu: "When it is sunny, I play outside."' },
        { tipe: 'audio',     teks: 'When it is sunny, I play outside. When it is rainy, I use an umbrella. When it is hot, I drink water. When it is cold, I wear a sweater.' },
        { tipe: 'instruksi', teks: 'Pair matching atau circle talk: Siswa praktik pola "When it is..." dengan aktivitas pilihan.' },
      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp13-penutup-review',
          tipe  : 'review_quick',
          judul : 'Quick Review — Cuaca Acak',
          pm    : 'joyful',

          tujuan_komunikasi : 'Perkuat 6 nama cuaca via flashcard cepat sebelum closure.',
          vocab_target      : ['sunny', 'cloudy', 'rainy', 'windy', 'hot', 'cold'],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Let us play one more quick game with the weather cards!"',
            selama  : `Acak 6 kartu cuaca. Tunjuk satu per satu (tempo cepat).
Siswa sebutkan nama + gesture.
Putaran 1: lambat (5 detik per kartu).
Putaran 2: cepat (3 detik per kartu).
Fokus pada ucapan yang benar, bukan sempurna.`,
            penutup : '"You are so good at weather words!"',
          },

          audio_cue: {
            contoh_guru  : 'What is this? / Show me and say!',
            contoh_siswa : 'Sunny! / Rainy! / Hot! / Cold! / Windy! / Cloudy!',
            target_vocab : ['sunny', 'cloudy', 'rainy', 'windy', 'hot', 'cold'],
          },

          media_dipakai : ['media-kartu-cuaca'],

          mode: {
            mudah: {
              bantuan: 'Guru sebut nama dulu, siswa ulang. Atau cukup gesture tanpa ucap.',
              panjang_speaking: 'Dengarkan + gesture. Tidak perlu ucap.',
            },
            normal: {
              bantuan: 'Tunjuk kartu, siswa sebutkan nama. Cukup 1 putaran.',
              panjang_speaking: 'Ucapkan nama cuaca + gesture untuk setiap kartu.',
            },
            tantangan: {
              bantuan: 'Cepat 2 putaran. Siswa boleh lead (tunjuk kartu ke kelas).',
              panjang_speaking: 'Ucapkan nama + gesture. Tempo cepat.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun : 'Tambah gerakan: sambil loncat, berputar, atau tepuk tangan. Buat energi kembali tinggi.',
            waktu_mepet  : 'Cukup tunjuk 4 kartu. Tidak perlu 2 putaran.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp13-penutup-closure',
          tipe  : 'closure_reinforcement',
          judul : 'Cuaca Rumah Hari Ini — Closing',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Transfer pembelajaran ke rumah: ajak siswa perhatikan cuaca pagi ini dan cerita ke keluarga dalam bahasa Inggris.',
          vocab_target      : [],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Before we finish, let us remember the weather outside today."',
            selama  : `Demo + jembatan rumah:
Guru: "Today is [hari], and the weather is [cuaca sekarang — lihat jendela atau recall awal pelajaran]."
"Tonight, when you go home, look at the weather again. What is it?"
"Tell your family in English: 'Today is sunny!' or 'Today is rainy!' or 'Today is cold!'"
"Setiap pagi saat bangun tidur, lihat cuaca dan bilang dalam Inggris ke keluarga atau ke cermin!"`,
            penutup : '"You are weather reporters now! Goodbye class!"',
          },

          audio_cue: {
            contoh_guru  : 'Today the weather is sunny. Tonight look outside and tell your family: The weather is sunny! / The weather is rainy! / The weather is hot! / The weather is cold!',
            contoh_siswa : 'The weather is sunny! / The weather is rainy! / Goodbye, teacher!',
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
        { tipe: 'instruksi', teks: 'Tunjuk 6 kartu cuaca acak. Siswa sebutkan nama + gesture. Putaran 1 (lambat), Putaran 2 (cepat). ~5 menit.' },
        { tipe: 'audio',     teks: 'Sunny! Rainy! Hot! Cold! Windy! Cloudy! Great job!' },
        { tipe: 'instruksi', teks: 'Jembatan rumah: Lihat jendela bersama. Tanya cuaca hari ini. Minta siswa cerita ke keluarga dalam Inggris.' },
        { tipe: 'audio',     teks: 'Today the weather is sunny! / The weather is rainy! Tell your family in English. Goodbye class!' },
      ],
    },

    {
      fase  : 'Penilaian',
      durasi: 6,

      aktivitas: [
        {
          id    : 'tp13-penilaian-validation',
          tipe  : 'observation_validation',
          judul : 'Validate Weather & Activity Connection',
          pm    : null,

          tujuan_komunikasi : 'Validasi kemampuan siswa mengenal nama 6 cuaca, gesture, dan memahami pola "when it is...".',
          vocab_target      : ['sunny', 'cloudy', 'rainy', 'windy', 'hot', 'cold'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Sambil siswa bersiap pulang, dekati beberapa siswa yang belum sempat berbicara banyak di Inti. Beri prompt via kartu atau lisan.',
            selama  : `Contoh prompt:
1. "Show me [cuaca]!" (gesture validation)
2. "What is this?" (tunjuk kartu, siswa sebutkan nama)
3. "When it is rainy, what do you do?" (pola validation — boleh Inggris atau Indonesia)
Amati: gesture benar? Bisa sebutkan nama cuaca? Bisa pola "when it is..."?`,
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Show me sunny! Show me rainy! What is this? When it is rainy, what do you do?',
            contoh_siswa : '[Gesture], Sunny!, Use umbrella! / Stay inside!',
            target_vocab : [],
          },

          media_dipakai : ['media-kartu-cuaca', 'media-kartu-aktivitas-cuaca'],
          mode         : null,

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['response_gesture', 'vocab_recall', 'pola_understanding'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'standar',
          },

          fallback: {
            siswa_pasif : 'Jangan paksa gesture. Tanya: "What is this?" sambil tunjuk kartu. Siswa boleh tunjuk atau sebutkan nama.',
            waktu_mepet : 'Cukup validasi 3 siswa. Fokus: bisa sebutkan 4 cuaca atau gesture 3 cuaca dengan benar.',
            vocab_bingung : 'Tunjuk kartu dan ucapkan nama dulu: "Rainy. Repeat: rainy." Siswa ulang. Tidak perlu forced production.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Sambil siswa pulang, dekati 3–4 siswa. Tunjuk kartu cuaca: "What is this?" atau "Show me [cuaca]!"' },
        { tipe: 'instruksi', teks: 'Nilai Listening: merespons instruksi "show me..." atau "what is this?". Speaking: sebutkan nama cuaca atau pola "when it is...". Response: gesture/tunjuk yang benar.' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang masih tertukar cloudy/rainy atau hot/cold? Siapa yang bisa pola "when it is..."? Siapa yang perlu bantuan gesture lagi?' },
      ],
    },

  ],

};

export default TP_13;
