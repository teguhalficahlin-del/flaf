/**
 * =============================================================
 * FLAF — TP 14 (In the Classroom)
 * File: docs/sesi-m9/tp-14.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Sesi M9 — Mei 2026
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[13] (v3)
 *
 * KARAKTER KHAS TP 14:
 *   - Topik RENDAH sensitif — benda kelas netral, tapi asumsi akses material baik.
 *   - Aktivitas utama: benda nyata + preposisi via TPR kinesthetic + roleplay sosial.
 *   - Pola bahasa: "The [item] is [preposition] the [furniture]" + "Can I borrow your ...?"
 *   - Pembuka hook: tunjuk benda real di kelas, bukan kartu/imajinasi.
 *   - Inti: preposisi via body (on kepala) lalu abstrak (on table) + hidden object game + roleplay.
 *   - Closure: jembatan rumah — tunjuk benda di rumah, sebut lokasi pake preposisi.
 *
 * SCOPE DESIGN:
 *   - Benda: 7 item (book, pen, pencil, eraser, ruler, bag, whiteboard, table, chair)
 *   - Preposisi: 3 item (on, in, under) — "next to" di tantangan/advance only
 *   - Vocab total: 12 item (benda + preposisi + "can I borrow")
 *
 * PENERAPAN PATTERN INKLUSIVITAS:
 *   - Pattern 1: Scripted pembuka konkret — tunjuk benda asli kelas, tidak imajinasi.
 *   - Pattern 5: Fallback preposisi confusing — gunakan tubuh reference dulu (on kepala, in tangan),
 *     baru transfer ke benda. Jika siswa tidak punya benda: gunakan benda kelas/guru.
 *   - Pattern 2/4: Roleplay meminjam universal — semua bisa minta + berikan, tidak asumsi 
 *     siswa punya perlengkapan tertentu.
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - docs/sesi-m8/tp-13.js
 *   - docs/sesi-m7/tp-12.js
 */

const TP_14 = {

  id       : 'tp-14',
  nomor    : 14,
  kelas    : 2,
  nama     : 'In the Classroom',
  tema     : 'Sekolah dan Benda-benda',
  deskripsi: `Peserta didik mengenal nama benda-benda di kelas dalam bahasa Inggris
    dan menggunakan preposisi sederhana (on, in, under) untuk mendeskripsikan
    lokasi benda, serta menggunakan pola "Can I borrow your...?" dalam konteks sosial.`,

  indikator: [
    'Peserta didik dapat menyebut 7 benda kelas (book, pen, pencil, eraser, ruler, bag, whiteboard) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan lokasi benda menggunakan 3 preposisi (on, in, under) dalam pola "The [item] is [preposition] the [furniture]".',
    'Peserta didik dapat meminta sesuatu dengan polite expression "Can I borrow your...? Sure! / Sorry, I am using it."',
  ],

  vocab: ['book', 'pen', 'pencil', 'eraser', 'ruler', 'bag', 'whiteboard', 'table', 'chair', 'on', 'in', 'under'],

  persiapan: ['Benda nyata dari kelas', 'Kartu preposisi bergambar (opsional)'],

  media: [
    {
      id                 : 'media-benda-kelas-real',
      nama               : 'Benda Nyata Kelas (Real Objects)',
      tipe               : 'barang_nyata',
      printable          : false,
      pdf_ref            : null,
      pdf_halaman        : null,
      reusable_lintas_tp : true,
      keterangan         : 'Gunakan benda real dari kelas: 1-2 buku, pen, pensil, penghapus, penggaris, tas, papan tulis. Untuk TP 14 dan TP 15+, gunakan benda nyata, bukan replika.',
    },
    {
      id                 : 'media-kartu-preposisi',
      nama               : 'Kartu Preposisi (Opsional)',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'tp-14-v1.pdf',
      pdf_halaman        : 1,
      reusable_lintas_tp : true,
      keterangan         : '3 kartu A5 berisi gambar preposisi (on, in, under) dengan visual sederhana (buku on meja, pen in tas, penghapus under kursi). Opsional — bisa pakai benda real saja.',
    },
  ],

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp14-pembuka-meaningful',
          tipe  : 'meaningful_link',
          judul : 'Look Around — Benda Real Kelas',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa connect pembelajaran ke benda nyata di kelas mereka — konkret, bukan abstrak atau kartu.',
          vocab_target      : [],

          durasi_target_detik : 180,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Good morning! Look around this classroom. What do you see? Can you name things in English?"',
            selama  : `Guru tunjuk benda kelas satu per satu (acak):
- Tunjuk buku: "What is this?" Siswa jawab "book" atau bahasa Indonesia dulu.
- Tunjuk pen: "What is this?" Siswa jawab "pen" atau "pulpen" (accept both).
- Tunjuk meja: "What is this?" Siswa jawab "table" atau "meja".
Guru acknowledge: "Yes! Buku itu book. Meja itu table. Hari ini kita belajar nama-nama benda di kelas dalam Inggris!"`,
            penutup : '"You will learn many classroom words today!"',
          },

          audio_cue: {
            contoh_guru  : 'Look around! What do you see? What is this? Is it a book? Is it a table?',
            contoh_siswa : 'Book! / Pen! / Table! / Eraser!',
            target_vocab : [],
          },

          media_dipakai : ['media-benda-kelas-real'],

          mode: {
            mudah: {
              bantuan: 'Guru tunjuk dan sebut sendiri dulu: "This is a book. Book." Siswa dengarkan dan ulang kata saja.',
              panjang_speaking: 'Siswa jawab "yes" atau sebutkan benda dalam bahasa Indonesia saja.',
            },
            normal: {
              bantuan: 'Guru tanya, siswa jawab "book" atau "table" atau bahasa Indonesia. Accept both.',
              panjang_speaking: 'Coba sebutkan benda dalam Inggris dengan bantuan guru.',
            },
            tantangan: {
              bantuan: 'Guru tanya detail: "Is this a pen or a pencil? What color is it?" Siswa jawab panjang.',
              panjang_speaking: 'Sebutkan benda + warna: "This is a red pen" atau "I see a book on the table."',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_tidak_interested : 'Buat game: Guru sembunyi benda, siswa tebak: "Is it a pen?" (yes/no).',
            benda_tidak_lengkap : 'Gunakan benda yang ada saja. Jangan force. Flexibility penting.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp14-pembuka-modeling',
          tipe  : 'modeling',
          judul : 'Kenalkan 7 Benda Kelas',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa mengenal 7 benda kelas dengan nama Inggris yang benar.',
          vocab_target      : ['book', 'pen', 'pencil', 'eraser', 'ruler', 'bag', 'whiteboard'],

          durasi_target_detik : 360,
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : '"Let us learn the names of 7 classroom things!"',
            selama  : `Guru pegang/tunjuk setiap benda satu per satu, ucapkan 2x:
1. Book — "book, book!" (pegang buku)
2. Pen — "pen, pen!" (pegang pen)
3. Pencil — "pencil, pencil!" (pegang pensil)
4. Eraser — "eraser, eraser!" (pegang penghapus)
5. Ruler — "ruler, ruler!" (pegang penggaris)
6. Bag — "bag, bag!" (pegang tas)
7. Whiteboard — "whiteboard, whiteboard!" (tunjuk papan tulis)

Kelas ulang setiap kata setelah guru ucap.
Ulang seluruh 7 benda: "Book, pen, pencil, eraser, ruler, bag, whiteboard!"
Tempo: lambat (3 detik per benda), lalu cepat (2 detik per benda).`,
            penutup : '"Great! You know all classroom words!"',
          },

          audio_cue: {
            contoh_guru  : 'Book! Pen! Pencil! Eraser! Ruler! Bag! Whiteboard! Say it with me: Book — pen — pencil — eraser — ruler — bag — whiteboard!',
            contoh_siswa : 'Book! Pen! Pencil! Eraser! Ruler! Bag! Whiteboard!',
            target_vocab : ['book', 'pen', 'pencil', 'eraser', 'ruler', 'bag', 'whiteboard'],
          },

          media_dipakai : ['media-benda-kelas-real'],

          mode: {
            mudah: {
              bantuan: 'Cukup 4 benda (book, pen, pencil, eraser). Guru sebut dulu, siswa ulang.',
              panjang_speaking: 'Siswa dengarkan dan ulang setelah guru, tidak perlu lead.',
            },
            normal: {
              bantuan: '7 benda, guru model 2 tempo (lambat → cepat). Siswa ulang bersama.',
              panjang_speaking: 'Ulang nama benda bersama setelah guru.',
            },
            tantangan: {
              bantuan: '7 benda, siswa boleh sebut lebih cepat atau lead guru. Ada variasi: "I have a book. I use a pen."',
              panjang_speaking: 'Sebutkan benda tanpa menunggu guru — rapid fire.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun : 'Tambah gesture: tunjuk ke tubuh (pen itu runcing like a finger), buat mnemonic lucu.',
            kelas_lupa : 'Tidak masalah. Ulang 2-3 kali sampai familiar. Repetisi adalah kunci.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Tunjuk benda kelas acak. Siswa tebak nama Inggris atau sebut bahasa Indonesia. Guru acknowledge setiap jawab.' },
        { tipe: 'audio',     teks: 'Book? / Yes, book! Pen? / Yes, pen! Table? / Yes, table! Chair? / Yes, chair!' },
        { tipe: 'instruksi', teks: 'Pegang/tunjuk 7 benda satu per satu. Ucapkan + kelas ulang. Tempo: lambat → cepat.' },
        { tipe: 'audio',     teks: 'Book — pen — pencil — eraser — ruler — bag — whiteboard! Again: Book — pen — pencil — eraser — ruler — bag — whiteboard!' },
      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,

      aktivitas: [
        {
          id    : 'tp14-inti-tpr-preposisi',
          tipe  : 'tpr_action',
          judul : 'Preposisi Kinesthetic — Body & Object Reference',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa memahami 3 preposisi (on, in, under) via TPR dengan tubuh dulu, lalu transfer ke benda nyata.',
          vocab_target      : ['on', 'in', 'under'],

          durasi_target_detik : 480,
          durasi_min_detik    : 300,

          micro_script: {
            pembuka : '"Now let us learn where things ARE! We will use our bodies to show on, in, under."',
            selama  : `FASE 1 — BODY REFERENCE (3 menit):
Guru model preposisi dengan tubuh:
- "On!" (letakkan pen on kepala/meja) — siswa tiru
- "In!" (masukkan pen in tas/tangan) — siswa tiru
- "Under!" (letakkan pen under kursi/meja) — siswa tiru
Ulangi 3 preposisi ini 3x, tempo cepat.

FASE 2 — REAL OBJECT POSITIONING (4 menit):
Guru ambil buku, posisikan di berbagai tempat, kelas ucapkan preposisi:
- Guru: "Where is the book?" (book on meja)
- Kelas: "On!" (ulang) → "On the table!"
- Guru: "Where is the pen?" (pen in tas)
- Kelas: "In!" (ulang) → "In the bag!"
- Guru: "Where is the eraser?" (eraser under kursi)
- Kelas: "Under!" (ulang) → "Under the chair!"

FASE 3 — SISWA LEAD (3 menit):
Siswa bergantian taruh benda di posisi on/in/under, kelas sebutkan preposisi.`,
            penutup : '"Your body knows on, in, under! You are preposition experts!"',
          },

          audio_cue: {
            contoh_guru  : 'On! In! Under! Where is the book? On the table! Where is the pen? In the bag! Where is the eraser? Under the chair!',
            contoh_siswa : 'On! / In! / Under! / On the table! / In the bag! / Under the chair!',
            target_vocab : ['on', 'in', 'under'],
          },

          media_dipakai : ['media-benda-kelas-real'],

          mode: {
            mudah: {
              bantuan: 'Cukup 2 preposisi (on, in). Guru demo banyak, siswa tiru. Tidak perlu kalimat penuh — "on!" saja ok.',
              panjang_speaking: 'Siswa ucapkan preposisi saja atau gesture, tidak perlu "on the table" — "on" sudah cukup.',
            },
            normal: {
              bantuan: '3 preposisi (on, in, under), kelas sahut preposisi atau kalimat dengan bantuan guru.',
              panjang_speaking: 'Ucapkan "on", "in", "under" atau kalimat penuh "on the table" mengikuti guru.',
            },
            tantangan: {
              bantuan: 'Siswa lead positioning, kelas sebutkan preposisi. Tambah: "next to" di advance jika ada waktu.',
              panjang_speaking: 'Buat kalimat sendiri: "The book is on the table" tanpa prompt guru.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_bingung_preposisi : 'Jangan paksa kalimat penuh. Cukup sebutkan preposisi saja: "on!" Kalimat bisa ditambah nanti.',
            benda_tidak_cukup : 'Gunakan furniture kelas yang ada. Fleksibel dengan lokasi — on bisa on meja atau on kursi atau on buku besar.',
            waktu_mepet : 'Cukup Fase 1 + 2 saja. Skip Fase 3 siswa lead.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp14-inti-pair-hidden-borrow',
          tipe  : 'pair_work',
          judul : 'Hidden Object Game & "Can I Borrow?" Roleplay',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa praktik preposisi via hidden object game + menghubungkan dengan pola sosial "Can I borrow your...?".',
          vocab_target      : ['book', 'pen', 'pencil', 'eraser', 'ruler', 'bag', 'on', 'in', 'under', 'can I borrow'],

          durasi_target_detik : 600,
          durasi_min_detik    : 420,

          micro_script: {
            pembuka : '"Let us play a game and practice asking for things politely!"',
            selama  : `FASE 1 — HIDDEN OBJECT GAME (5 menit):
Siswa pasang 2 orang. Siswa A sembunyikan benda di on/in/under (meja, tas, kursi, dll).
Siswa B tanya lokasi:
- Siswa B: "Where is the pen?" atau "Is the pen on the table?"
- Siswa A: "Yes! / No!" atau "It is in the bag!"
Rotate 2-3 benda per pasangan.

FASE 2 — "CAN I BORROW?" ROLEPLAY (5 menit):
Guru model dulu dengan 1 siswa:
Guru: "Can I borrow your pencil?"
Siswa: "Sure! Here you go."
Guru: "Thank you!"
Siswa: "You are welcome!"

Siswa pasang 2 orang, practice exchange benda + pola "Can I borrow your...? Sure! / Sorry, I am using it."
Rotate 2-3 kali.

FASE 3 — CIRCLE: GURU TANYA LOKASI (3 menit):
Lingkar, guru tunjuk benda di posisi tertentu, siswa ambil giliran sebutkan lokasi:
Guru: "Where is the book?" → Siswa 1: "On the table!"
Guru: "Where is the pen?" → Siswa 2: "In the bag!"
Guru: "Where is the eraser?" → Siswa 3: "Under the chair!"
Kecil-kecil, tidak perlu perfect, fokus pada participation.`,
            penutup : '"Great! You can ask for things and find things in English!"',
          },

          audio_cue: {
            contoh_guru  : 'Where is the pen? Is the pen on the table? Can I borrow your pencil? Sure! Here you go. Thank you! You are welcome!',
            contoh_siswa : 'It is in the bag! / Yes! / Sure! / Thank you! / You are welcome!',
            target_vocab : ['on', 'in', 'under', 'can I borrow'],
          },

          media_dipakai : ['media-benda-kelas-real'],

          mode: {
            mudah: {
              bantuan: 'Cukup Fase 1 saja (hidden object game). Roleplay optional atau guru assist. Preposisi 2 item saja (on, in).',
              panjang_speaking: 'Siswa tanya "Where?" atau "Is it...?" boleh bahasa Indonesia. Guru assist jawab.',
            },
            normal: {
              bantuan: 'Fase 1 + 2. Roleplay dengan guru model dulu sebagai reference. Siswa coba ucap "Can I borrow your...?".',
              panjang_speaking: 'Sebutkan lokasi atau tanya permission dengan struktur yang dimodel.',
            },
            tantangan: {
              bantuan: 'Semua 3 fase. Siswa lead game atau ciptakan variasi roleplay sendiri (e.g., "Can I borrow your ruler?").',
              panjang_speaking: 'Buat kalimat lokasi penuh + roleplay dialog tanpa prompt guru.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_malu_roleplay : 'Tidak paksa dialog penuh. Boleh cukup tanya/jawab lokasi saja. Roleplay bisa lebih santai atau group roleplay (3 siswa).',
            sensitif_ekonomi : 'Roleplay "can I borrow" tidak berarti siswa harus punya barang. Boleh pake benda kelas/guru. Fokus pada pola, tidak pada ownership.',
            pasangan_canggung : 'Guru pair dengan siswa dulu, atau 3-orang grouping. Fokus pada confidence, bukan perfection.',
            waktu_mepet : 'Cukup Fase 1 (hidden object) saja. Roleplay bisa di penutup atau skip.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'TPR preposisi: Guru model "on", "in", "under" dengan tubuh. Siswa tiru. Ulangi dengan benda nyata: posisi on meja, in tas, under kursi. Kelas sebutkan preposisi.' },
        { tipe: 'audio',     teks: 'On! In! Under! The book is on the table. The pen is in the bag. The eraser is under the chair.' },
        { tipe: 'instruksi', teks: 'Hidden object game pasang 2 orang: Siswa A sembunyikan benda on/in/under, Siswa B tanya lokasi. Rotate 2-3x.' },
        { tipe: 'instruksi', teks: 'Model roleplay "Can I borrow your...?" dulu dengan guru. Siswa pasang 2 orang practice exchange.' },
        { tipe: 'audio',     teks: 'Can I borrow your pencil? Sure! Here you go. Thank you! You are welcome!' },
      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp14-penutup-review',
          tipe  : 'review_quick',
          judul : 'Quick Review — Benda & Preposisi',
          pm    : 'joyful',

          tujuan_komunikasi : 'Perkuat recall 7 benda + 3 preposisi sebelum closure.',
          vocab_target      : ['book', 'pen', 'pencil', 'eraser', 'ruler', 'bag', 'whiteboard', 'on', 'in', 'under'],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"One more quick round! Let us say the words again!"',
            selama  : `MINI GAME — GURU POSISI BENDA, KELAS SEBUTKAN:
Guru taruh buku on meja: "Where is it?" → Kelas: "On the table!"
Guru taruh pen in tas: "Where is it?" → Kelas: "In the bag!"
Guru taruh penghapus under kursi: "Where is it?" → Kelas: "Under the chair!"
Ulangi 3-4x dengan tempo cepat.

ALT: Guru tunjuk benda acak, kelas sebutkan nama:
"What is this?" → "Book! / Pen! / Eraser!"
Tempo: lambat (2 putaran), cepat (1 putaran).`,
            penutup : '"Perfect! You remember everything!"',
          },

          audio_cue: {
            contoh_guru  : 'Where is the book? What is this? Is this a pen?',
            contoh_siswa : 'On the table! / Book! / Yes! / Pen!',
            target_vocab : ['book', 'pen', 'pencil', 'eraser', 'ruler', 'bag', 'on', 'in', 'under'],
          },

          media_dipakai : ['media-benda-kelas-real'],

          mode: {
            mudah: {
              bantuan: 'Guru sebut dulu, siswa ulang. Cukup preposisi saja ("on!") atau nama benda saja.',
              panjang_speaking: 'Dengarkan dan ulang, tidak perlu kalimat penuh.',
            },
            normal: {
              bantuan: 'Guru tanya, siswa jawab preposisi atau nama benda dengan struktur sudah familiar.',
              panjang_speaking: 'Sebutkan preposisi + furniture atau nama benda, sesuai prompt guru.',
            },
            tantangan: {
              bantuan: 'Cepat tempo. Siswa lead game atau tunjuk benda ke guru/kelas.',
              panjang_speaking: 'Buat kalimat penuh tanpa prompt guru.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun : 'Tambah gerakan: gesture sambil jawab ("on!" sambil tunjuk ke atas).',
            waktu_mepet  : 'Cukup 3-4 round, tidak perlu panjang.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp14-penutup-closure',
          tipe  : 'closure_reinforcement',
          judul : 'Benda & Lokasi di Rumah — Closing',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Transfer pembelajaran ke rumah: minta siswa tunjuk benda di rumah + sebutkan lokasi pake preposisi (en-EN).',
          vocab_target      : [],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Before we finish, let us think about your home!"',
            selama  : `Jembatan ke rumah:
Guru: "When you go home, look around. What classroom things do you have at home? A book? A pen? A table? A chair?"
"Look at where these things are. On the table? In your bag? Under the bed?"
"Tonight, show your family and say: 'My book is on the table. My pen is in the bag. My chair is under ... (no, chair cannot be under!)'  😄"
"Every day, try to describe where your things are in English!"`,
            penutup : '"You are classroom vocabulary experts now! Goodbye class!"',
          },

          audio_cue: {
            contoh_guru  : 'At home, where is your book? Is it on the table? / On the bed? / In your bag? My book is on the table. My pen is in the bag. My schoolbag is under the table.',
            contoh_siswa : 'My book is on the table! / My pen is in the bag! / My chair is next to the table! / Goodbye, teacher!',
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
        { tipe: 'instruksi', teks: 'Review: Guru taruh benda on/in/under, siswa sebutkan lokasi atau nama benda. Tempo cepat. 3-4 round.' },
        { tipe: 'audio',     teks: 'Where is the book? / On the table! / What is this? / Pencil! / Great job!' },
        { tipe: 'instruksi', teks: 'Jembatan rumah: Minta siswa pikirkan benda di rumah (book, pen, table, chair). Sebutkan lokasi pake "on", "in", "under" dalam bahasa Inggris.' },
        { tipe: 'audio',     teks: 'My book is on the table. My pen is in the bag. My bag is under the table. Goodbye class!' },
      ],
    },

    {
      fase  : 'Penilaian',
      durasi: 6,

      aktivitas: [
        {
          id    : 'tp14-penilaian-validation',
          tipe  : 'observation_validation',
          judul : 'Validate Benda, Preposisi & "Can I Borrow?"',
          pm    : null,

          tujuan_komunikasi : 'Validasi kemampuan siswa mengenal 7 benda, 3 preposisi, dan pola "can I borrow?" dalam konteks natural.',
          vocab_target      : ['book', 'pen', 'pencil', 'eraser', 'ruler', 'bag', 'whiteboard', 'on', 'in', 'under'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Sambil siswa bersiap pulang, dekati beberapa siswa yang belum sempat berbicara banyak di Inti. Beri prompt via benda atau roleplay mini.',
            selama  : `Contoh prompt:
1. Tunjuk benda: "What is this?" (vocab recall)
2. Posisi benda: "Where is the pen?" (preposisi understanding)
3. Mini roleplay: "Can I borrow your pencil?" (pola sosial)
Amati: Bisa sebutkan nama benda? Bisa sebutkan preposisi? Bisa respond "Can I borrow?" dengan benar?`,
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'What is this? Where is the pen? Can I borrow your pencil?',
            contoh_siswa : 'Pen! / On the table! / Sure! / Sorry, I am using it.',
            target_vocab : [],
          },

          media_dipakai : ['media-benda-kelas-real'],
          mode         : null,

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['vocab_recall', 'preposisi_use', 'pola_sosial'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'standar',
          },

          fallback: {
            siswa_pasif : 'Tanya simple: "What is this?" Siswa boleh tunjuk atau sebutkan. Tidak perlu kalimat penuh.',
            waktu_mepet : 'Cukup validasi 3 siswa. Fokus: bisa sebutkan 4 benda + 2 preposisi atau pola roleplay minimal 1x.',
            preposisi_bingung : 'Tanyakan preposisi lebih simple: guru posisi benda, siswa cukup tunjuk atau sebutkan preposisi saja ("on!"), tidak perlu kalimat.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Sambil siswa pulang, dekati 3–4 siswa. Tunjuk benda: "What is this?" atau posisi benda: "Where is the pen?"' },
        { tipe: 'instruksi', teks: 'Nilai Listening: memahami pertanyaan lokasi atau "Can I borrow?" Speaking: sebutkan nama benda, preposisi, atau respond roleplay. Response: gesture/tunjuk benda yang benar.' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang masih tertukar nama benda? Siapa yang bingung on/in/under? Siapa yang bisa pola "Can I borrow?" dengan benar?' },
      ],
    },

  ],

};

export default TP_14;
