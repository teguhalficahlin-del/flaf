/**
 * =============================================================
 * FLAF — TP 12 (Body Parts)
 * File: docs/sesi-m7/tp-12.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Sesi M7 — Mei 2026
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[11] (v3)
 *
 * KARAKTER KHAS TP 12:
 *   - Topik RENDAH-SEDANG sensitif — bagian tubuh generik, tidak personal.
 *   - Aktivitas utama menggunakan lagu + TPR (sentuh + sebut).
 *   - Pola bahasa: "I use my [part] to [verb]" (mata untuk lihat, dll).
 *   - Pembuka hook: lagu "Head Shoulders Knees and Toes" (energi tinggi).
 *   - Inti: TPR + permainan fungsi.
 *   - Closure: jembatan ke rumah — sentuh bagian tubuh di pagi hari, sebut Inggrisnya.
 *
 * PENERAPAN PATTERN INKLUSIVITAS:
 *   - Pattern 5: `fallback.sensitif` untuk siswa dengan disabilitas fisik.
 *     Mereka dapat menunjuk atau menyebutkan — tidak wajib sentuh.
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - docs/sesi-m6/tp-11.js
 *   - docs/sesi-m4/tp-09.js
 */

const TP_12 = {

  id       : 'tp-12',
  nomor    : 12,
  kelas    : 2,
  nama     : 'Body Parts',
  tema     : 'Tubuh dan Kesehatan',
  deskripsi: `Peserta didik mengenal nama bagian tubuh utama dalam bahasa Inggris
    dan menggunakan pola "I use my [part] to [verb]" untuk mendeskripsikan fungsi.`,

  indikator: [
    'Peserta didik dapat menyebut nama 8 bagian tubuh utama (head, eyes, ears, nose, mouth, hands, legs, feet) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan fungsi bagian tubuh menggunakan pola "I use my ... to ...".',
    'Peserta didik dapat merespons instruksi "touch your ..." dengan tindakan fisik yang tepat.',
  ],

  vocab: ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'feet', 'body'],

  persiapan: ['Poster tubuh manusia', 'Kartu nama bagian tubuh'],

  media: [
    {
      id                 : 'media-poster-tubuh',
      nama               : 'Poster Tubuh Manusia',
      tipe               : 'poster_cetak',
      printable          : true,
      pdf_ref            : 'tp-12-v1.pdf',
      pdf_halaman        : 1,
      reusable_lintas_tp : true,
      keterangan         : 'Poster A3 atau lebih menunjukkan figur manusia dengan label 8 bagian tubuh (head, eyes, ears, nose, mouth, hands, legs, feet). Gambar sederhana, netral, dan jelas.',
    },
    {
      id                 : 'media-kartu-bagian-tubuh',
      nama               : 'Kartu Nama Bagian Tubuh',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'tp-12-v1.pdf',
      pdf_halaman        : 2,
      reusable_lintas_tp : true,
      keterangan         : '8 kartu A5 berisi nama dan ilustrasi bagian tubuh (head, eyes, ears, nose, mouth, hands, legs, feet). Label Inggris dengan gambar sederhana di setiap kartu.',
    },
  ],

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp12-pembuka-song',
          tipe  : 'meaningful_link',
          judul : 'Head Shoulders Knees and Toes — Lagu Hook Pembuka',
          pm    : 'joyful',

          tujuan_komunikasi : 'Membangun energi tinggi + introduce bagian tubuh melalui lagu ritme dengan TPR ringan.',
          vocab_target      : ['head', 'shoulders', 'knees', 'toes', 'eyes', 'ears', 'mouth', 'nose'],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Today we sing and move! Let us start with a famous song in English!"',
            selama  : `Ajarkan lagu "Head Shoulders Knees and Toes" baris per baris. Guru mulai, kelas menirukan + sentuh bagian tubuh sesuai lirik.
LIRIK:
"Head, shoulders, knees and toes, knees and toes.
Head, shoulders, knees and toes, knees and toes.
Eyes and ears and mouth and nose.
Head, shoulders, knees and toes, knees and toes."

Putaran 1: normal (tempo lambat). Putaran 2: cepat. Guru tunjukkan urutan sentuhan dengan jelas.`,
            penutup : '"Great! You know many body parts in English now! Let us learn more."',
          },

          audio_cue: {
            contoh_guru  : 'Head, shoulders, knees and toes! Eyes and ears and mouth and nose! Head, shoulders, knees and toes!',
            contoh_siswa : 'Head, shoulders, knees and toes! Eyes and ears and mouth and nose!',
            target_vocab : ['head', 'shoulders', 'knees', 'toes', 'eyes', 'ears', 'mouth', 'nose'],
          },

          media_dipakai : ['media-poster-tubuh'],

          mode: {
            mudah: {
              bantuan: 'Guru demo gerakan berlebihan — siswa tiru. Putaran 1 saja, tempo lambat. Tidak perlu buru-buru.',
              panjang_speaking: 'Lagu bersama (sahut kata-kata kunci saja).',
            },
            normal: {
              bantuan: 'Lagu 2 putaran: lambat → cepat. Siswa tiru gerakan guru.',
              panjang_speaking: 'Nyanyikan bersama seluruh lagu.',
            },
            tantangan: {
              bantuan: 'Tempo super cepat. Siswa boleh lead atau guru lead. Ada variasi: sentuh bagian, tunjuk bagian, sebutkan nama tanpa sentuh.',
              panjang_speaking: 'Nyanyikan + gerakan kompleks (misal: sentuh sambil berlompat).',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_tidak_bisa_sentuh : 'Boleh hanya tunjuk atau sebutkan nama bagian tubuh. Tidak wajib sentuh — fokus pada lagu dan penamaan.',
            kelas_bingung_urutan    : 'Mulai dari satu bagian saja: "Head! Head!" Ulangi sampai kelas hafal urutan.',
            energi_turun            : 'Tambah gerakan berlebihan: melompat, berputar, tepuk tangan. Buat suasana lebih ceria.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp12-pembuka-modeling',
          tipe  : 'modeling',
          judul : 'Kenalkan 8 Bagian Tubuh',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa mengenal 8 bagian tubuh dengan nama Inggris yang benar dan konteks fungsi.',
          vocab_target      : ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'feet'],

          durasi_target_detik : 360,
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : 'Tunjukkan poster tubuh. Tunjuk satu per satu bagian tubuh, ucap guru pelan, kelas ulang.',
            selama  : 'Urutan: head → eyes → ears → nose → mouth → hands → legs → feet. Untuk setiap bagian: tunjuk poster, guru ucap, kelas ulang 2×. Putaran kedua: guru tunjuk acak, kelas jawab bersama tanpa guru ucap dulu.',
            penutup : '"Eight body parts! You can name them all now!"',
          },

          audio_cue: {
            contoh_guru  : 'Head. Eyes. Ears. Nose. Mouth. Hands. Legs. Feet. Now together — head! Eyes! Ears! Nose! Mouth! Hands! Legs! Feet!',
            contoh_siswa : 'Head! Eyes! Ears! Nose! Mouth! Hands! Legs! Feet!',
            target_vocab : ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'feet'],
          },

          media_dipakai : ['media-poster-tubuh', 'media-kartu-bagian-tubuh'],

          mode: {
            mudah: {
              bantuan: 'Fokus 4 bagian pertama: head, eyes, nose, mouth. Ears, hands, legs, feet diperkenalkan tapi tidak ditarget hafal.',
              panjang_speaking: 'Sahut satu kata per bagian, bersama-sama.',
            },
            normal: {
              bantuan: '8 bagian lengkap. Tunjuk → ucap → kelas ulang. 2 putaran penuh.',
              panjang_speaking: '8 kata berurutan dan acak.',
            },
            tantangan: {
              bantuan: 'Setelah 8 bagian, guru tanyakan: "Where is your head? Show me!" Siswa tunjuk diri mereka sambil sebut nama.',
              panjang_speaking: '8 kata + lokasi tubuh sendiri.',
            },
          },

          observation: { aktif: false },

          fallback: {
            lafal_ears   : 'Untuk "ears", tekankan vokal "e" pendek: "e-rs". Bukan "irs".',
            lafal_mouth  : 'Untuk "mouth", bulatkan bibir: "m-ou-th". Demo gerakan mulut terbuka.',
            media_tidak_tersedia : 'Gambar cepat figur manusia di papan: lingkaran (kepala), dua titik (mata), dua cekikan (telinga), garis (hidung/mulut), lengan, kaki.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Nyanyikan "Head Shoulders Knees and Toes" bersama-sama. Sentuh setiap bagian tubuh saat disebutkan di lagu. Dua putaran: normal → cepat.' },
        { tipe: 'audio',     teks: 'Head, shoulders, knees and toes, knees and toes! Eyes and ears and mouth and nose!' },
        { tipe: 'instruksi', teks: 'Tunjukkan poster tubuh. Sebut 8 bagian satu per satu pelan, kelas ulang. Tunjuk ke bagian tubuh siswa sendiri saat menyebut nama.' },
        { tipe: 'audio',     teks: 'Head. Eyes. Ears. Nose. Mouth. Hands. Legs. Feet.' },
      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,

      aktivitas: [
        {
          id    : 'tp12-inti-tpr-function',
          tipe  : 'tpr_action',
          judul : 'Touch and Function — TPR Praktik',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa memperkuat nama bagian tubuh via instruksi "touch your ..." dan memahami fungsi setiap bagian.',
          vocab_target      : ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'feet'],

          durasi_target_detik : 600,
          durasi_min_detik    : 420,

          micro_script: {
            pembuka : '"Now let us touch our body parts and learn what they do!"',
            selama  : `FASE 1 — TOUCH PRACTICE (5 menit):
Guru ucap: "Touch your head!" Siswa sentuh kepala mereka. Ulangi untuk 8 bagian, lambat dulu, lalu cepat.

FASE 2 — FUNCTION (5 menit):
Ajarkan pola "I use my [part] to [verb]." Tuliskan di papan. Contoh:
- "I use my eyes to see."
- "I use my ears to hear."
- "I use my hands to write."
- "I use my legs to walk."
Kelas ulang bersama 4 contoh ini.

FASE 3 — GAME: GURU SEBUT FUNGSI (10 menit):
Guru sebut fungsi, siswa tunjuk/sentuh bagian tubuh yang tepat. Contoh:
Guru: "I use this to see. Touch it!"
Siswa: Sentuh mata mereka.
Ulangi untuk 6-8 fungsi. Tidak ada penilaian benar/salah — fokus pada pemahaman dan respons.`,
            penutup : '"Great! You know what your body parts do!"',
          },

          audio_cue: {
            contoh_guru  : 'Touch your head! Touch your eyes! Touch your nose! I use my eyes to see. I use my ears to hear. I use this to smell — touch it!',
            contoh_siswa : '',
            target_vocab : ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'feet'],
          },

          media_dipakai : ['media-poster-tubuh', 'media-kartu-bagian-tubuh'],

          mode: {
            mudah: {
              bantuan: 'Cukup fase 1 saja (touch practice untuk 4 bagian: head, eyes, nose, mouth). Fase 2 dan 3 opsional atau disederhanakan.',
              panjang_speaking: 'Tidak ada (hanya gerakan). Atau boleh sahut "yes" saat guru tanya.',
            },
            normal: {
              bantuan: '3 fase lengkap. Guru model, siswa ikut. Permainan dengan 6 fungsi.',
              panjang_speaking: 'Ulang pola "I use my..." tanpa perlu buat sendiri.',
            },
            tantangan: {
              bantuan: 'Siswa buat pola fungsi sendiri setelah demo. Contoh: "I use my mouth to speak / eat / smile." Guru bantu jika butuh.',
              panjang_speaking: 'Pola "I use my [part] to [verb]" dengan 2-3 verb per bagian.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 5,
            indikator       : ['response', 'participation', 'confidence'],
            rotasi_priority : 'belum_speaking_turn',
            tag_set         : 'standar',
          },

          fallback: {
            sensitif_disabilitas : 'Jika siswa tidak bisa sentuh (cacat fisik, trauma, dll), boleh: tunjuk bagian tubuh pada guru/poster, atau sebutkan nama saja. Tidak ada paksaan gerakan.',
            kelas_ribut          : 'Kurangi jumlah fungsi. Cukup 3 fungsi utama: mata untuk lihat, telinga untuk dengar, kaki untuk jalan.',
            siswa_pasif          : 'Guru langsung model: "Watch me. I touch my head. Say: head!" Kelas icip suara guru, lalu gerakan bersama.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp12-inti-pair-function',
          tipe  : 'pair_work',
          judul : 'I Use My ... — Pair Dialogue',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa mempraktikkan pola "I use my [part] to [verb]" berpasangan dengan kartu visual sebagai pemandu.',
          vocab_target      : ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'feet'],

          durasi_target_detik : 720,
          durasi_min_detik    : 480,

          micro_script: {
            pembuka : '"Now talk with your partner! Siswa A tunjuk kartu, Siswa B bilang apa fungsinya."',
            selama  : `DEMO GURU + SISWA (2-3 menit):
Guru ambil kartu (misal: mata). Tanyakan 1 siswa: "What do I use my eyes to do?" Siswa jawab (atau guru prompt): "See!" Guru: "Yes! I use my eyes to see."

PAIR WORK (10-12 menit):
Siswa A tunjuk 1 kartu ke Siswa B. Siswa B jawab: "I use my [part] to [verb]." Tidak perlu jawaban sempurna — guru boleh bantu.
Tukar peran setiap 3 kartu.

JEDA TENGAH (opsional):
"Stop! Everyone — I use my hands to clap. Do it!" Kelas demo 1 kalimat bersama, lalu lanjut pair.`,
            penutup : '"Excellent! You know what your body parts do!"',
          },

          audio_cue: {
            contoh_guru  : 'I use my eyes to see. I use my ears to hear. I use my hands to write. What do you use your legs to do? Walk!',
            contoh_siswa : 'I use my eyes to see. I use my mouth to eat / speak. I use my hands to write / clap.',
            target_vocab : ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'feet'],
          },

          media_dipakai : ['media-kartu-bagian-tubuh'],

          mode: {
            mudah: {
              bantuan: 'Guru model terlebih dahulu untuk setiap kartu. Siswa B hanya perlu meniru struktur: "I use my ... to ..." Boleh gubah verb (tidak harus sama dengan guru).',
              panjang_speaking: '1 pola per kartu: "I use my eyes to see."',
            },
            normal: {
              bantuan: 'Kedua peran (tunjuk kartu dan menjawab). Guru tidak perlu model setiap kartu lagi — siswa boleh improvisasi verb selama masuk akal.',
              panjang_speaking: 'Pola lengkap "I use my [part] to [verb]."',
            },
            tantangan: {
              bantuan: 'Setelah jawab, siswa tanya balik: "What do you use your [part] to do?" Pasangan jawab dengan verb berbeda.',
              panjang_speaking: 'Dialog 2 arah: "I use my eyes to see. What do you use your eyes to do?" "I use my eyes to look at pictures."',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['vocab_use', 'response', 'confidence'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'standar',
          },

          fallback: {
            sensitif_disabilitas  : 'Siswa tidak perlu menyebut aktivitas yang tidak bisa mereka lakukan. Misal, siswa dengan gangguan mobilitas bisa bilang: "I use my eyes to see." (bukan "I use my legs to walk").',
            pair_tidak_jalan      : 'Guru bantu pasangan: "Say after me — I use my eyes to see. Now your turn."',
            kartu_terbatas        : 'Kartu boleh dipakai berkali-kali dengan pasangan berbeda.',
            waktu_mepet           : 'Cukup 1 arah (siswa A tunjuk, siswa B jawab) untuk 3 kartu. Skip tukar peran.',
          },

          advance: { mode: 'timer_visible_only' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Fase TPR: Guru ucap "Touch your head!" Siswa sentuh kepala. Ulangi untuk 8 bagian, lambat → cepat.' },
        { tipe: 'audio',     teks: 'Touch your head! Touch your eyes! Touch your nose! Touch your mouth! Touch your hands! Touch your legs! Touch your feet!' },
        { tipe: 'instruksi', teks: 'Ajarkan pola fungsi: "I use my eyes to see. I use my ears to hear. I use my hands to write. I use my legs to walk." Kelas ulang bersama.' },
        { tipe: 'audio',     teks: 'I use my eyes to see. I use my ears to hear. I use my hands to write. I use my legs to walk.' },
        { tipe: 'instruksi', teks: 'Permainan: Guru sebut fungsi, siswa sentuh bagian tubuh yang tepat. [I use this to smell — touch it!]' },
        { tipe: 'instruksi', teks: 'Pair work: Siswa A tunjuk kartu, Siswa B bilang: "I use my [part] to [verb]." Tukar peran setiap 3 kartu.' },
      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp12-penutup-review',
          tipe  : 'review_quick',
          judul : 'Touch and Say — Review Cepat',
          pm    : 'joyful',

          tujuan_komunikasi : 'Recap cepat nama bagian tubuh dengan sentuhan dan penamaan untuk memastikan retensi.',
          vocab_target      : ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'feet'],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Last round — fast review! I say the body part, you touch and say it back!"',
            selama  : 'Guru sebutkan 8 bagian tubuh acak. Siswa sentuh dan sahut nama bersama. Tempo lambat dulu (1 bagian per 3 detik), naik ke cepat (1 bagian per detik). 2 putaran.',
            penutup : '"Perfect! You know all the body parts now!"',
          },

          audio_cue: {
            contoh_guru  : 'Head! Eyes! Nose! Mouth! Ears! Hands! Legs! Feet! Fast!',
            contoh_siswa : 'Head! Eyes! Nose! Mouth! Ears! Hands! Legs! Feet!',
            target_vocab : ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'feet'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Guru sebutkan, siswa tunjuk saja (tidak perlu sahut). Atau kalau bisa, boleh tunjuk + sebutkan.',
              panjang_speaking: 'Sebutkan nama bagian tubuh (tidak perlu cepat).',
            },
            normal: {
              bantuan: '8 bagian. Tempo lambat ke cepat. Siswa tunjuk + sahut.',
              panjang_speaking: 'Sebutkan 8 nama bagian tubuh.',
            },
            tantangan: {
              bantuan: 'Guru tidak sebutkan nama — hanya tunjuk ke bagian tubuh mereka sendiri (atau ke siswa). Siswa tebak nama dan ucapkan.',
              panjang_speaking: 'Sebutkan nama berdasarkan gesture guru saja.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun : 'Tambah gerakan: sentuh bagian sambil melompat, atau dengan suara dramatis: "HEEEEAD!"',
            waktu_mepet  : 'Cukup 4 bagian (head, eyes, nose, mouth) di 1 putaran. Langsung closure.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp12-penutup-closure',
          tipe  : 'closure_reinforcement',
          judul : 'Touch and Say at Home — Closing',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Memperkuat transfer ke kehidupan nyata dengan ajakan universal sentuh bagian tubuh dan sebut Inggrisnya di pagi hari di rumah.',
          vocab_target      : [],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"You learned so many body parts today!"',
            selama  : 'Demo: Guru sentuh 4 bagian (head, eyes, nose, mouth) sambil ucap Inggrisnya. Ucap: "Tomorrow morning when you wake up, touch your head and say: head! Touch your eyes and say: eyes! You can do it every day!"',
            penutup : '"Your body is amazing. Say the words in English. Goodbye class!"',
          },

          audio_cue: {
            contoh_guru  : 'Tomorrow morning, touch your head and say: head! Touch your eyes and say: eyes! Every day, speak English about your body. Goodbye class!',
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
        { tipe: 'instruksi', teks: 'Review cepat: Guru sebutkan 8 bagian tubuh acak, siswa sentuh dan sahut nama bersama. Tempo lambat ke cepat. 2 putaran.' },
        { tipe: 'audio',     teks: 'Head! Eyes! Nose! Mouth! Ears! Hands! Legs! Feet! Perfect!' },
        { tipe: 'instruksi', teks: 'Closure: Ajak siswa gunakan bahasa Inggris untuk bagian tubuh saat melakukan aktivitas di rumah. Contoh: "Sentuh kepala dan bilang: head!"' },
        { tipe: 'audio',     teks: 'Tomorrow morning, touch your head and say: head! Touch your eyes and say: eyes! Every day, speak English. Goodbye class!' },
      ],
    },

    {
      fase  : 'Penilaian',
      durasi: 6,

      aktivitas: [
        {
          id    : 'tp12-penilaian-validation',
          tipe  : 'observation_validation',
          judul : 'Validate Body Parts & Function',
          pm    : null,

          tujuan_komunikasi : 'Validasi kemampuan siswa mengenal nama bagian tubuh dan memahami fungsinya.',
          vocab_target      : ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'feet'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Sambil siswa bersiap pulang, dekati beberapa siswa yang belum sempat berbicara banyak. Beri prompt TPR atau fungsi.',
            selama  : 'Contoh prompt: "Touch your nose!" atau "What do you use your hands to do?" Amati: respons fisik benar? Bisa sebutkan nama? Bisa ucapkan pola fungsi?',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Touch your nose! Touch your ears! What do you use your eyes to do?',
            contoh_siswa : '',
            target_vocab : [],
          },

          media_dipakai : ['media-kartu-bagian-tubuh'],
          mode         : null,

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['response', 'vocab_use', 'confidence'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'standar',
          },

          fallback: {
            siswa_pasif : 'Jangan paksa. Tunjuk poster dan tanyakan: "What is this?" Siswa boleh tunjuk atau sebutkan nama. Catat tanpa tekanan.',
            sensitif_disabilitas : 'Jika siswa tidak bisa sentuh, tanya: "Can you show me with your finger?" atau cukup "What is this?" sambil tunjuk poster.',
            waktu_mepet : 'Cukup validasi 3 siswa. Fokus: bisa sebutkan 4 bagian tubuh atau pola "I use my..." minimal 1x.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Sambil siswa pulang, dekati 3–4 siswa. Instruksi TPR: "Touch your head! Touch your eyes!" atau tanya fungsi: "What do you use your hands to do?"' },
        { tipe: 'instruksi', teks: 'Nilai Listening: merespons instruksi "touch your ..." atau pertanyaan fungsi. Speaking: sebutkan nama bagian tubuh atau pola "I use my...". Response: respons fisik (sentuh, tunjuk) yang benar.' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang masih tertukar nama bagian? Siapa yang bisa pola fungsi? Siapa yang perlu bantuan lebih?' },
      ],
    },

  ],

};

export default TP_12;
