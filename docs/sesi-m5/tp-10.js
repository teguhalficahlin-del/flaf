/**
 * =============================================================
 * FLAF — TP 10 (Food and Drinks)
 * File: data/tp-10.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Sesi M5 — Mei 2026
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[9] (v3)
 *
 * KARAKTER KHAS TP 10 (berbeda dari TP 09):
 *   - Topik SEDANG — makanan berpotensi expose kondisi ekonomi keluarga
 *   - Vocab 2-tier: 6 core (makanan/minuman umum) + 4 tantangan
 *   - Pola bahasa baru: "I like / I do not like" +
 *     "Do you like...? Yes, I do / No, I do not."
 *   - Pembuka v3 ("What did you eat for breakfast?") DIGANTI hook
 *     inklusif "Yummy or Yucky?" — tidak expose kondisi pribadi
 *   - Aktivitas "piring kosong" v3 DIHAPUS — diganti Dialogue Practice
 *     (pair Q&A) — tidak ada komponen personal
 *   - Pattern Inklusivitas: Pattern 1, 4, 5 diterapkan
 *
 * KEPUTUSAN MIGRASI (Sesi M5):
 *   - Q1 (vocab split): 9 vocab v3 → split 6 core + 4 tantangan.
 *         Core: rice, bread, egg, milk, water, juice — paling universal
 *         untuk konteks SD Indonesia.
 *         Tantangan: noodles, fish, chicken, cake.
 *         Catatan: 'chicken' muncul juga di TP 09 (sebagai hewan) —
 *         dual-context sah (hewan vs makanan), bukan konflik.
 *   - Q2 ('like'/'do not like'): dikeluarkan dari vocab[] — bukan
 *         lexical item melainkan pola bahasa. Masuk via micro_script
 *         dan audio_cue sebagai target pattern.
 *   - Q3 (Pembuka hook): "What did you eat for breakfast?" (v3) →
 *         "Yummy or Yucky?" hook. Guru tunjuk kartu → kelas sahut
 *         reaksi kolektif. Tidak ada pertanyaan personal.
 *   - Q4 (piring kosong): aktivitas v3 dihapus → diganti Dialogue
 *         Practice pair: "Do you like [food]? Yes, I do / No, I do not."
 *   - Q5 (Inti A1): Class Survey — guru model pola I like/don't like
 *         dengan ekspresi + survei kolektif (angkat tangan). Tidak ada
 *         siswa yang di-spotlight.
 *
 * AKTIVITAS BARU di Inti (tidak ada di v3):
 *   - tp10-inti-class-survey: tipe survey — guru model + kelas respond
 *     kolektif "Who likes milk? Raise your hand!" Tidak ada spotlight.
 *   - tp10-inti-dialogue-practice: tipe dialogue_practice — pair Q&A
 *     terstruktur. Siswa A tunjuk kartu → tanya → Siswa B jawab.
 *     Tukar peran setiap 3 kartu.
 *
 * PERUBAHAN SUBSTANSI dari v3:
 *   1. 'like' & 'do not like' dikeluarkan dari vocab[]
 *   2. Pembuka personal diganti hook kolektif Yummy/Yucky
 *   3. "Piring kosong" dihapus — diganti pair dialogue practice
 *   4. Penutup v3 (tanya 3 siswa favorit) → closure universal:
 *      "Next time you eat — say it in English!"
 *   5. Durasi diselaraskan: 10+30+10+6 = 56 menit (dari 58 menit v3)
 *
 * INKLUSIVITAS YANG DITERAPKAN:
 *   - Pattern 1: scripted micro_script inklusivitas di Pembuka A1
 *   - Pattern 4: hook universal Yummy/Yucky (tidak expose kondisi pribadi)
 *   - Pattern 5: fallback.sensitif di Class Survey
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - Pattern struktur: TP 09 (format file terbaru)
 *   - Recycle vocab: tidak ada vocab TP sebelumnya yang relevan
 *     (kecuali 'chicken' — dual-context, bukan konflik)
 * =============================================================
 */

const TP_10 = {

  // ════════════════════════════════════════════════════════════
  // IDENTITAS
  // ════════════════════════════════════════════════════════════

  id       : 'tp-10',
  nomor    : 10,
  kelas    : 2,
  nama     : 'Food and Drinks',
  tema     : 'Kehidupan Sehari-hari',
  deskripsi: `Peserta didik mengenal nama makanan dan minuman umum dalam
    bahasa Inggris serta mengungkapkan preferensi menggunakan pola
    "I like / I do not like" dan "Do you like...? Yes, I do / No, I do not."`,

  indikator: [
    'Peserta didik dapat menyebut nama 6 makanan dan minuman core (rice, bread, egg, milk, water, juice) dengan lafal yang benar.',
    'Peserta didik dapat mengungkapkan preferensi menggunakan "I like ..." dan "I do not like ..." dengan ekspresi yang sesuai.',
    'Peserta didik dapat menanyakan dan merespons preferensi makanan: "Do you like ...? Yes, I do / No, I do not." berpasangan.',
  ],

  vocab: ['rice', 'bread', 'egg', 'milk', 'water', 'juice', 'food'],

  persiapan: ['Kartu gambar makanan dan minuman (minimal 6 core: rice, bread, egg, milk, water, juice)'],

  // ════════════════════════════════════════════════════════════
  // MEDIA
  // ════════════════════════════════════════════════════════════

  media: [
    {
      id                 : 'media-kartu-makanan',
      nama               : 'Kartu Gambar Makanan & Minuman',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'tp-10-v1.pdf',
      pdf_halaman        : 1,
      reusable_lintas_tp : true,
      keterangan         : '6 kartu core A5 (rice, bread, egg, milk, water, juice) + 4 kartu tantangan (noodles, fish, chicken, cake). Ilustrasi sederhana & jelas — item tunggal dengan latar polos. Label nama Inggris di bawah gambar. Kartu bisa dipakai kembali di TP lain yang relevan.',
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
          id    : 'tp10-pembuka-yummy-yucky',
          tipe  : 'meaningful_link',
          judul : 'Yummy or Yucky? — Hook Pembuka',
          pm    : 'joyful',

          tujuan_komunikasi : 'Bangun antusiasme + koneksi ke topik makanan via reaksi kolektif sebelum vocab diperkenalkan — tanpa pertanyaan personal',
          vocab_target      : ['food'],

          durasi_target_detik : 180,
          durasi_min_detik    : 90,

          micro_script: {
            pembuka : '"Look at this! What is it?" Guru angkat kartu pertama (rice) dengan ekspresi penasaran.',
            selama  : `Guru tunjuk kartu satu per satu — 6 kartu core. Tiap kartu: tunjuk → ekspresi dramatis → kelas sahut "Yummy!" atau "Yucky!" bersama. Guru tidak tanya jawaban "benar/salah" — semua reaksi valid.

Sebelum mulai, ucap konkret dalam Bahasa Indonesia: "Makanan semua orang berbeda ya! Ada yang suka nasi, ada yang tidak. Ada yang suka susu, ada yang tidak. Tidak ada yang salah — semua boleh!" Lalu lanjut dalam Inggris.

Setelah 6 kartu: "All of these are FOOD! Food — repeat after me: food!" Kelas ulang bersama.`,
            penutup : '"Today we learn about food and drinks in English! Food — drinks — let\'s go!"',
          },

          audio_cue: {
            contoh_guru  : 'Look at this — rice! Yummy or yucky? What about milk? Yummy or yucky? These are food! Food!',
            contoh_siswa : 'Yummy! / Yucky! / Food!',
            target_vocab : ['food'],
          },

          media_dipakai : ['media-kartu-makanan'],

          mode: {
            mudah: {
              bantuan: 'Guru beri contoh reaksi dulu: tunjuk kartu → ekspresi berlebihan → "Yummy!" atau "Yucky!" Kelas tiru. Kelas tidak perlu memutuskan sendiri — cukup tiru reaksi guru.',
              panjang_speaking: 'Sahut "Yummy!" atau "Yucky!" kolektif.',
            },
            normal: {
              bantuan: 'Guru tunjuk kartu → diam → tunggu reaksi kelas dulu, baru guru bereaksi. Kelas yang memimpin.',
              panjang_speaking: '"Yummy!" atau "Yucky!" — opsional tambah nama makanan.',
            },
            tantangan: {
              bantuan: 'Setelah sahut, tanya 1 siswa sukarela: "What is it? Do you know the name in English?" — tidak wajib menjawab.',
              panjang_speaking: '"Yummy! Rice!" — reaksi + nama makanan.',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_ribut  : 'Satu kartu satu reaksi — beri jeda. "Shhh — yummy or yucky? Whisper!" Bisik bersama lebih tenang.',
            kelas_malu   : 'Guru tunjuk diri sendiri: "Me? Yummy!" ekspresi lebay. Kelas biasanya ikut tertawa dan bergabung.',
            satu_jawaban : 'Wajar jika semua sahut "Yummy!" terus. Guru boleh pura-pura "Yucky!" sendiri untuk variasi — tidak ada koreksi.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp10-pembuka-kenalkan-vocab',
          tipe  : 'modeling',
          judul : 'Kenalkan 6 Vocab Core: Rice, Bread, Egg, Milk, Water, Juice',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa mengenal dan dapat mengucapkan 6 nama makanan/minuman core dengan lafal yang benar',
          vocab_target      : ['rice', 'bread', 'egg', 'milk', 'water', 'juice'],

          durasi_target_detik : 420,
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : 'Tempel 6 kartu core di papan berurutan. Tunjuk satu per satu — ucap pelan, kelas ulang. Mulai dari yang paling pendek: rice, egg, bread.',
            selama  : 'Urutan: rice → bread → egg → milk → water → juice. Setiap item: tunjuk kartu → ucap guru → kelas ulang → ulang sekali lagi. Untuk "juice": ucap /dʒuːs/ — bukan "jus". Untuk "bread": vokal pendek "e" — bukan "brid". Putaran 2: tunjuk acak, kelas sahut. Putaran 3: guru tunjuk, diam — kelas sahut tanpa bantuan guru.',
            penutup : 'Tunjuk berurutan cepat. "Food — rice, bread, egg! Drinks — milk, water, juice! Amazing!"',
          },

          audio_cue: {
            contoh_guru  : 'Rice. Bread. Egg. Milk. Water. Juice. Now together — rice!',
            contoh_siswa : 'Rice! Bread! Egg! Milk! Water! Juice!',
            target_vocab : ['rice', 'bread', 'egg', 'milk', 'water', 'juice'],
          },

          media_dipakai : ['media-kartu-makanan'],

          mode: {
            mudah: {
              bantuan: '3 item dulu (rice, egg, milk). Bread, water, juice diperkenalkan tapi tidak ditarget hafal di fase ini.',
              panjang_speaking: 'Per kata satu per satu.',
            },
            normal: {
              bantuan: '6 vocab lengkap. Tunjuk → ucap → kelas ulang. 3 putaran.',
              panjang_speaking: '6 kata berurutan dan acak.',
            },
            tantangan: {
              bantuan: 'Perkenalkan 4 vocab tantangan (noodles, fish, chicken, cake) di akhir — tempel kartu tambahan, ucap sekali, kelas ulang sekali. Tidak ada target hafal.',
              panjang_speaking: 'Nama makanan core + coba vocab tantangan.',
            },
          },

          observation: { aktif: false },

          fallback: {
            lafal_juice          : '"Juice" — bukan "jus". Ucap pelan: j-u-i-c-e. Ulangi 3× bersama.',
            lafal_bread          : '"Bread" — vokal pendek "e". Bukan "brid". Demo mulut terbuka lebih lebar untuk "e".',
            media_tidak_tersedia : 'Gambar outline sederhana di papan: lingkaran untuk rice/egg/bread, gelas untuk milk/water/juice. Label ditulis di sebelahnya.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Angkat kartu makanan satu per satu. Tunjuk → ekspresi guru → kelas sahut "Yummy!" atau "Yucky!" bersama. Sebelum mulai ucapkan: "Makanan semua orang berbeda — tidak ada yang salah." Akhir hook: [Food! Repeat: food!]' },
        { tipe: 'audio',     teks: 'Look at this — rice! Yummy or yucky? What about milk? These are food! Food!' },
        { tipe: 'instruksi', teks: 'Tempel 6 kartu core di papan (rice, bread, egg, milk, water, juice). Tunjuk satu per satu — ucap pelan, kelas ulang. Lakukan 3 putaran: pelan → acak → siswa sahut tanpa bantuan guru.' },
        { tipe: 'audio',     teks: 'Rice. Bread. Egg. Milk. Water. Juice. Now together — rice! Bread! Egg!' },
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
          id    : 'tp10-inti-class-survey',
          tipe  : 'survey',
          judul : 'Class Survey — I Like / I Do Not Like',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa memahami dan memproduksi pola "I like / I do not like" via survei kolektif — tidak ada siswa yang di-spotlight secara individu',
          vocab_target      : ['rice', 'bread', 'egg', 'milk', 'water', 'juice'],

          durasi_target_detik : 720,
          durasi_min_detik    : 480,

          micro_script: {
            pembuka : '"Now — do you like food? Let\'s find out!" Guru tunjuk diri sendiri dulu.',
            selama  : `FASE MODEL — GURU DEMO (3–4 menit):
Guru tunjuk kartu rice → ekspresi suka besar → "I like rice! I LIKE rice!" Kelas ulang bersama.
Guru tunjuk kartu bread → ekspresi ragu/tidak suka → "I do not like bread." Kelas ulang bersama.
Lakukan untuk 4 kartu (2 suka, 2 tidak suka). Guru boleh berekspresi lebay — semakin dramatis semakin jelas.

FASE SURVEI (5–6 menit):
Guru tunjuk kartu rice: "Who likes rice? Raise your hand — say: I like rice!" Hitung tangan yang terangkat bersama: "One, two, three..." Lalu: "Who does NOT like rice? Raise your hand — say: I do not like rice!" Ulangi untuk 5–6 kartu.
Kelas respond kolektif (angkat tangan + sahut kalimat). Tidak ada 1 siswa yang ditunjuk untuk menjawab sendiri.`,
            penutup : '"We all like different food — and that\'s great! I like — I do not like. Say it with me!"',
          },

          audio_cue: {
            contoh_guru  : 'I like rice! I like rice! I do not like bread. Who likes milk? Raise your hand — I like milk!',
            contoh_siswa : 'I like rice! / I do not like bread. / (tangan terangkat)',
            target_vocab : ['rice', 'bread', 'egg', 'milk', 'water', 'juice'],
          },

          media_dipakai : ['media-kartu-makanan'],

          mode: {
            mudah: {
              bantuan: 'Fase model saja — kelas ulang kalimat guru bersama. Skip fase survei jika kelas belum siap produksi mandiri.',
              panjang_speaking: '"I like ___." — 1 kalimat, isi blank dari kartu yang ditunjuk.',
            },
            normal: {
              bantuan: 'Fase model + survei. Kelas angkat tangan + sahut kalimat kolektif.',
              panjang_speaking: '"I like ___." dan "I do not like ___." — sahut kolektif.',
            },
            tantangan: {
              bantuan: 'Setelah survei, minta 2–3 siswa sukarela sahut dengan alasan: "I like milk because it is delicious!" Alasan tidak wajib — murni opt-in.',
              panjang_speaking: '"I like ___ because it is ___." — kalimat + alasan singkat.',
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
            sensitif              : 'Jika ada siswa terlihat tidak nyaman saat kartu makanan tertentu muncul, jangan tunjuk siswa itu. Lanjut ke kartu berikutnya tanpa komentar.',
            kelas_diam            : 'Kembali ke model: guru sahut sendiri dengan ekspresi besar, kelas tiru. "Follow me — I like rice! I like rice!" Ulangi sampai ada yang ikut.',
            tangan_tidak_mau_naik : 'Ganti: "Everyone say — I like rice! Say it!" Kolektif verbal dulu, tangan tidak wajib.',
            waktu_mepet           : 'Skip fase survei. Cukup model 4 kalimat (2 like, 2 do not like) bersama — langsung lanjut ke dialogue practice.',
          },

          advance: { mode: 'timer_visible_only' },
        },

        {
          id    : 'tp10-inti-dialogue-practice',
          tipe  : 'dialogue_practice',
          judul : 'Do You Like This? — Pair Dialogue',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa mempraktikkan pola tanya-jawab preferensi makanan berpasangan: "Do you like [food]? Yes, I do / No, I do not."',
          vocab_target      : ['rice', 'bread', 'egg', 'milk', 'water', 'juice'],

          durasi_target_detik : 900,
          durasi_min_detik    : 600,

          micro_script: {
            pembuka : '"Now — talk to your partner! I will show you how." Guru demo dengan 1 siswa sukarela di depan.',
            selama  : `DEMO GURU + SISWA (2–3 menit):
Guru tunjuk kartu rice ke siswa: "Do you like rice?"
Siswa: "Yes, I do!" / "No, I do not."
Guru: "I like rice too!" / "Oh, you do not like rice? That's okay!"
Guru tunjuk kartu lain, ulangi sekali. Lalu: "Now with your partner — go!"

PAIR WORK (10–12 menit):
Siswa A tunjuk 1 kartu ke Siswa B → tanya "Do you like [food]?" → Siswa B jawab "Yes, I do" / "No, I do not."
Tukar peran setelah 3 kartu. Ulangi dengan kartu berbeda.
Guru berkeliling: amati lafal, bantu siswa yang bingung pola kalimat.

JEDA TENGAH (opsional jika kelas butuh reset energi):
"Stop! Everyone — Do you like bread? Yes, I do!" Kelas echo 1×, lalu lanjut pair.`,
            penutup : '"Great job! You can talk about food in English with your friends!"',
          },

          audio_cue: {
            contoh_guru  : 'Do you like rice? Yes, I do! Do you like bread? No, I do not. Do you like milk?',
            contoh_siswa : 'Do you like egg? Yes, I do! / No, I do not. Do you like juice?',
            target_vocab : ['rice', 'bread', 'egg', 'milk', 'water', 'juice'],
          },

          media_dipakai : ['media-kartu-makanan'],

          mode: {
            mudah: {
              bantuan: 'Cukup jawab "Yes" atau "No" — guru bantu tambahkan "I do / I do not" secara bertahap. Siswa A tidak perlu formulasi tanya — guru yang tanya, siswa jawab saja.',
              panjang_speaking: '"Yes, I do." atau "No, I do not." — cukup jawaban.',
            },
            normal: {
              bantuan: 'Kedua peran: tanya dan jawab. Boleh lihat kartu untuk nama makanan. Bantu siswa ingat pola: "Do you like ___?"',
              panjang_speaking: '"Do you like ___?" dan "Yes, I do / No, I do not."',
            },
            tantangan: {
              bantuan: 'Tambah follow-up setelah "Yes, I do": "I like ___ because it is ___!" Atau pakai kartu tantangan (noodles, fish, chicken, cake). Boleh improvisasi.',
              panjang_speaking: '"Do you like ___?" "Yes, I do! I like ___ because it is delicious!"',
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
            pair_tidak_bisa_formulasi : 'Guru dekati pasangan: "Say after me — Do you like rice? Say it!" Siswa tiru guru, lalu ulang sendiri ke pasangan.',
            kelas_ribut               : 'Pause. "Everyone stop — Do you like milk? Yes, I do!" Kelas echo 1×. Lanjut pair dengan lebih tenang.',
            kartu_habis               : 'Kartu boleh dipakai ulang — siswa tanya ulang kartu yang sama dengan pasangan berbeda jika sudah pindah giliran.',
            waktu_mepet               : 'Skip tukar peran. Cukup 1 arah — Siswa A tanya, Siswa B jawab untuk 3 kartu. Langsung penutup.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'CLASS SURVEY — Guru model: tunjuk kartu → ekspresi suka/tidak suka → "I like rice!" / "I do not like bread." Kelas ulang bersama. Lakukan 4 kalimat (2 like, 2 do not like).' },
        { tipe: 'audio',     teks: 'I like rice! I like rice! I do not like bread. I do not like bread. Now together!' },
        { tipe: 'instruksi', teks: 'Survei kolektif: "Who likes milk? Raise your hand — say: I like milk!" Hitung tangan bersama. Ulangi untuk 5–6 kartu. Jangan tunjuk siswa individu — semua respond kolektif.' },
        { tipe: 'instruksi', teks: 'FALLBACK SENSITIF: Jika ada siswa terlihat tidak nyaman saat makanan tertentu muncul — skip kartu itu, lanjut ke berikutnya tanpa komentar.' },
        { tipe: 'instruksi', teks: 'DIALOGUE PRACTICE — Demo dulu dengan 1 siswa sukarela: [Do you like rice? Yes, I do!] Lalu pair work: Siswa A tunjuk kartu → tanya → Siswa B jawab. Tukar peran setelah 3 kartu.' },
        { tipe: 'audio',     teks: 'Do you like rice? Yes, I do! Do you like bread? No, I do not.' },
        { tipe: 'instruksi', teks: 'DIFERENSIASI — Tantangan: tambah alasan "because it is delicious/healthy". Belum bisa: jawab "Yes" atau "No" dulu — guru bantu tambahkan "I do / I do not".' },
        { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: skip tukar peran di pair. Langsung penutup.' },
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
          id    : 'tp10-penutup-kartu-cepat',
          tipe  : 'review_quick',
          judul : 'Tunjuk Kartu Cepat — Sahut Nama Makanan',
          pm    : 'joyful',

          tujuan_komunikasi : 'Recap cepat: konfirmasi retensi 6 vocab core dengan tempo meningkat',
          vocab_target      : ['rice', 'bread', 'egg', 'milk', 'water', 'juice'],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Last round — fast! I show the card, you say the food. Ready? Go!"',
            selama  : 'Tunjuk kartu acak. Kelas sahut bersama. Mulai lambat (1 kartu per 3 detik), naik ke cepat (1 kartu per detik). 2 putaran acak. Di putaran 2: guru tidak ucap, hanya tunjuk kartu — kelas sahut sendiri.',
            penutup : '"Excellent! Rice, bread, egg, milk, water, juice — you know them all!"',
          },

          audio_cue: {
            contoh_guru  : 'Ready? What is this? Fast!',
            contoh_siswa : 'Rice! Milk! Bread! Egg! Juice! Water!',
            target_vocab : ['rice', 'bread', 'egg', 'milk', 'water', 'juice'],
          },

          media_dipakai : ['media-kartu-makanan'],

          mode: {
            mudah: {
              bantuan: 'Tempo lambat konstan. 4 vocab (rice, egg, milk, water). Bread & juice opsional.',
              panjang_speaking: 'Nama makanan.',
            },
            normal: {
              bantuan: '6 vocab. Tempo lambat → cepat. 2 putaran.',
              panjang_speaking: 'Nama makanan cepat.',
            },
            tantangan: {
              bantuan: 'Siswa sahut dengan pola: "I like rice!" atau "I do not like bread!" — bukan hanya nama. Pilihan siswa sendiri.',
              panjang_speaking: '"I like ___!" atau "I do not like ___!" — nama + preferensi.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun : 'Guru tunjuk kartu dengan dramatis: tutup setengah dulu, reveal perlahan. "Hmm... is this rice or bread?" Beri efek suspen.',
            waktu_mepet  : 'Cukup 4 vocab di 1 putaran. Langsung closure.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp10-penutup-closure',
          tipe  : 'closure_reinforcement',
          judul : 'Say It When You Eat & Goodbye',
          pm    : 'joyful',

          tujuan_komunikasi : 'Penguatan transfer: apply vocab saat makan di mana saja — frame universal, tidak assume makanan spesifik siswa',
          vocab_target      : [],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"You know food and drinks in English now!"',
            selama  : '"Next time — when you eat or drink — say it in English! Eating rice? Say: rice! Drinking milk? Say: milk! Drinking water? Say: water! You can do it!" Demo sambil tunjuk kartu masing-masing.',
            penutup : '"Food and drinks — everywhere, every day. Speak English! Goodbye class!"',
          },

          audio_cue: {
            contoh_guru  : 'Next time you eat rice — say: rice! Drink milk? Say: milk! Food is everywhere — speak English! Goodbye class!',
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
        { tipe: 'instruksi', teks: 'Tunjuk kartu makanan acak — kelas sahut nama bersama. Tempo lambat ke cepat. 2 putaran. Putaran 2: guru diam, hanya tunjuk kartu.' },
        { tipe: 'audio',     teks: 'Excellent! Rice, bread, egg, milk, water, juice — you know them all!' },
        { tipe: 'instruksi', teks: 'Closure universal: "Next time you eat or drink — say it in English! Rice? Say rice! Milk? Say milk!" Tunjuk kartu satu per satu saat sebut. Tidak ada referensi ke makanan spesifik siswa.' },
        { tipe: 'audio',     teks: 'Food and drinks — everywhere, every day. Speak English! Goodbye class!' },
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
          id    : 'tp10-penilaian-preferensi',
          tipe  : 'observation_validation',
          judul : 'Do You Like This? — Validasi Individual',
          pm    : null,

          tujuan_komunikasi : 'Validasi siswa belum terobservasi: mampu merespons "Do you like [food]?" dengan jawaban lengkap "Yes, I do / No, I do not."',
          vocab_target      : [],

          durasi_target_detik : 300,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Sambil siswa berkemas, dekati 4–5 siswa yang belum sempat diobservasi. Tunjuk 1 kartu dan tanya langsung.',
            selama  : '"Do you like milk?" Amati: jawaban lengkap ("Yes, I do" / "No, I do not") atau hanya "yes/no"? Lafal vocab? Yang masih tertukar nama makanan? Jika tidak ada respons setelah 5 detik — tunjuk kartu sambil tanya ulang: "Milk — do you like it?"',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Do you like milk? Do you like rice? Do you like juice?',
            contoh_siswa : '',
            target_vocab : [],
          },

          media_dipakai : ['media-kartu-makanan'],
          mode          : null,

          observation: {
            aktif           : true,
            n_siswa         : 99,
            indikator       : ['vocab_use', 'response', 'confidence'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'akurasi',
          },

          fallback: {
            siswa_pasif : 'Jangan paksa. Tunjuk kartu — amati apakah siswa bisa sebut nama saat lihat visual. Catat "perlu waktu lebih" — bukan "gagal".',
            waktu_mepet : 'Cukup 3 siswa prioritas yang paling belum terpantau.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Sambil siswa berkemas, dekati 4–5 siswa yang belum diobservasi. Tunjuk kartu → tanya: [Do you like milk?] atau [Do you like rice?]' },
        { tipe: 'instruksi', teks: 'Nilai Listening: merespons pertanyaan preferensi. Speaking: kalimat "Yes, I do / No, I do not." dengan lafal yang benar. Reading: baca nama makanan di label kartu (opsional).' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang masih menjawab hanya "yes/no" tanpa "I do / I do not"? Siapa yang masih tertukar nama vocab?' },
      ],
    },

  ],

};

export default TP_10;
