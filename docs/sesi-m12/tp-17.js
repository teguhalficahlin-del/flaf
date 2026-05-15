/**
 * =============================================================
 * FLAF — TP 17 (My Hobbies)
 * File: docs/sesi-m12/tp-17.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: UPDATED — langkah[] ditambah field mode (Fase 9)
 *
 * KARAKTER KHAS TP 17:
 *   - Topik TINGGI sensitif — hobi bisa expose kondisi ekonomi keluarga.
 *   - Desain inklusif: universal hobbies (8 item) + binary reason (fun/interesting)
 *     + voluntary presentation (ZERO forced exposure).
 *   - Aktivitas utama: hobi identification + pola practice (I like...because...)
 *     + pair dialogue + voluntary sharing.
 *   - Pembuka hook: guru model hobi sendiri (show enthusiasm, not expertise).
 *
 * SCOPE DESIGN:
 *   - Hobbies: 8 item (reading, drawing, singing, dancing, playing football,
 *     cooking, swimming, cycling)
 *   - Pola: "I like [gerund] because it is [fun / interesting]"
 *   - Reason: 2 pilihan (fun, interesting)
 *
 * PENERAPAN PATTERN INKLUSIVITAS (CONTEXT.md §Pattern Inklusivitas):
 *   - Pattern 1: Scripted micro_script untuk hobi modeling.
 *   - Pattern 2: Skip aktivitas personal expose — presentation VOLUNTARY.
 *   - Pattern 4: Pair dialogue universal.
 *   - Pattern 5: Fallback sensitif ketat.
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - docs/sesi-m11/tp-16.js (format reference)
 *   - CONTEXT.md §Pattern Inklusivitas
 */

const TP_17 = {

  id       : 'tp-17',
  nomor    : 17,
  kelas    : 2,
  nama     : 'My Hobbies',
  tema     : 'Diri Sendiri dan Perasaan',
  deskripsi: `Peserta didik belajar mengungkapkan hobi dan aktivitas waktu luang
    menggunakan pola "I like [gerund] because it is [fun/interesting]" dalam
    konteks yang universal dan inklusif. Fokus pada pattern practice dan
    voluntary sharing, bukan forced personal exposure.`,

  indikator: [
    'Peserta didik dapat menyebut dan mengenali 8 hobi dengan gerund yang benar (reading, drawing, singing, dancing, playing football, cooking, swimming, cycling).',
    'Peserta didik dapat mengungkapkan hobi dan alasan menggunakan pola "I like ... because it is fun / interesting" dengan struktur yang tepat.',
    'Peserta didik dapat menanyakan dan merespons "What do you like to do?" dalam percakapan berpasangan sederhana.',
  ],

  vocab: ['reading', 'drawing', 'singing', 'dancing', 'playing football', 'cooking', 'swimming', 'cycling', 'I like', 'because', 'fun', 'interesting'],

  persiapan: ['Kartu hobi bergambar 8 item dengan gerund form', 'Chart/tabel untuk class survey (optional)'],

  media: [
    {
      id                 : 'media-kartu-hobi',
      nama               : 'Kartu Hobi Bergambar (8 item)',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'tp-17-v1.pdf',
      pdf_halaman        : 1,
      reusable_lintas_tp : true,
      keterangan         : '8 kartu A5 dengan gambar & text: reading, drawing, singing, dancing, playing football, cooking, swimming, cycling. Ilustrasi netral & beragam. Universal framing.',
    },
  ],

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp17-pembuka-meaningful',
          tipe  : 'meaningful_link',
          judul : 'Guru Model Hobi Sendiri',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa connect hobi sebagai natural part of life. Guru model dengan enthusiasm, bukan expertise.',
          vocab_target      : [],

          durasi_target_detik : 300,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Hello class! Today we talk about hobbies. What do you do in your free time?"',
            selama  : `Guru ceritakan hobi sendiri (PERSONAL & AUTHENTIC, bukan script):
"I like reading. In my free time, I read books. Reading is fun!
I also like cooking. I cook dinner at home. Cooking is interesting because I try new recipes.
What about you? What do you like to do?"

TONE: Enthusiastic, natural, relatable.
TIDAK: "I HAVE an expensive hobby" — cukup "I like X because it is fun."

Guru: "Hobbies are things we love to do. Everyone has hobbies. Today, we learn hobbies in English!"`,
            penutup : '"Let us learn about hobbies together!"',
          },

          audio_cue: {
            contoh_guru  : 'I like reading because it is fun! I like cooking because it is interesting! What do you like to do?',
            contoh_siswa : '',
            target_vocab : [],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Guru ceritakan hobi dengan gesture/action yang jelas. Siswa dengarkan saja, tidak perlu respond.',
              panjang_speaking: 'Tidak perlu speaking di tahap ini. Listen saja.',
            },
            normal: {
              bantuan: 'Guru ceritakan, tanya "What do you like?" — siswa boleh jawab atau shrug (OK).',
              panjang_speaking: 'Optional jawab "I like..." atau sekedar nod/gesture.',
            },
            tantangan: {
              bantuan: 'Guru tanya detailed: "What hobbies do you have?" — siswa jawab panjang atau ask follow-up questions.',
              panjang_speaking: 'Coba respond "I like... because..." atau tanya balik guru.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_diam : 'Normal. Guru lanjut. Listening comprehension adalah goal utama di pembuka.',
            energi_rendah : 'Tambah gesture berlebihan (exaggerated action untuk hobi). Buat siswa tertawa.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        {
          tipe: 'instruksi',
          teks: 'Guru ceritakan hobi sendiri dengan enthusiasm. "I like reading because it is fun. I like cooking because it is interesting." Tanya siswa: "What do you like to do?" (listen, jangan push respons).',
          mode: {
            mudah:     { bantuan: 'Guru ceritakan hobi dengan gesture/action yang jelas. Siswa dengarkan saja, tidak perlu respond.' },
            normal:    { bantuan: 'Guru ceritakan, tanya "What do you like?" — siswa boleh jawab atau shrug (OK).' },
            tantangan: { bantuan: 'Guru tanya detailed: "What hobbies do you have?" — siswa jawab panjang atau ask follow-up questions.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'I like reading because it is fun! I like cooking because it is interesting! What do you like to do?',
          mode: {
            mudah:     { bantuan: 'Ucapkan pelan dengan gesture. Siswa dengarkan.' },
            normal:    { bantuan: 'Ucapkan natural. Siswa optional respond.' },
            tantangan: { bantuan: 'Ucapkan + tanya balik siswa langsung.' },
          },
        },
      ],
    },

    {
      fase  : 'Inti',
      durasi: 35,

      aktivitas: [
        {
          id    : 'tp17-inti-hobi-intro',
          tipe  : 'modeling',
          judul : 'Introduce 8 Hobbies + Gerund Structure',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa mengenal 8 hobi dengan gerund form yang benar via kartu + gesture/action.',
          vocab_target      : ['reading', 'drawing', 'singing', 'dancing', 'playing football', 'cooking', 'swimming', 'cycling'],

          durasi_target_detik : 360,
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : '"Now let me show you hobbies in English!"',
            selama  : `FASE 1 — INTRODUCE VIA CARDS + ACTION (4 menit):
Guru tunjuk kartu satu per satu, ucapkan + action/gesture:
1. READING — "reading" (gesture: membuka buku, baca)
2. DRAWING — "drawing" (gesture: pegang pensil, gambar di udara)
3. SINGING — "singing" (gesture: tangan ke mulut, nyanyi "la la la")
4. DANCING — "dancing" (gesture: gerak badan, dance)
5. PLAYING FOOTBALL — "playing football" (gesture: menendang bola)
6. COOKING — "cooking" (gesture: mengaduk, masak)
7. SWIMMING — "swimming" (gesture: gerakan berenang)
8. CYCLING — "cycling" (gesture: pegang setir, pedal)

Kelas ulang setiap gerund setelah guru ucap.
Ulangi 8 hobbies cepat: "Reading, drawing, singing, dancing, playing football, cooking, swimming, cycling!"

FASE 2 — GERUND STRUCTURE (2 menit):
"I like reading. I like drawing. I like singing. I like dancing. I like playing football. I like cooking. I like swimming. I like cycling!"
Kelas ulang setiap kalimat.
KEY: Gerund MUST digunakan — bukan "I like read" tapi "I like reading"`,
            penutup : '"You know all the hobbies now!"',
          },

          audio_cue: {
            contoh_guru  : 'Reading! Drawing! Singing! Dancing! Playing football! Cooking! Swimming! Cycling! / I like reading. I like drawing. I like singing...',
            contoh_siswa : 'Reading! / Drawing! / Singing! / Dancing! / Playing football! / Cooking! / Swimming! / Cycling!',
            target_vocab : ['reading', 'drawing', 'singing', 'dancing', 'playing football', 'cooking', 'swimming', 'cycling'],
          },

          media_dipakai : ['media-kartu-hobi'],

          mode: {
            mudah: {
              bantuan: 'Cukup 4 hobi utama (reading, drawing, singing, dancing). Guru action + gesture jelas. Siswa dengarkan & gesture mirror.',
              panjang_speaking: 'Dengarkan & mirror gesture, atau ulang setelah guru (tidak perlu sempurna).',
            },
            normal: {
              bantuan: '8 hobi, guru introduce dengan action. Siswa ulang setiap hobi setelah guru.',
              panjang_speaking: 'Sebutkan hobi & mirror gesture setelah guru cue.',
            },
            tantangan: {
              bantuan: '8 hobi, siswa boleh lead atau ciptakan gesture alternatif sendiri.',
              panjang_speaking: 'Ucapkan hobi atau lead gesture untuk teman.',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_gelisah : 'Tambah lebih banyak gesture/action — buat lebih fun, less formal.',
            siswa_lupa_gerund : 'Normal. Guru repeat "reading, not read" di context natural.',
            energi_turun : 'Do action lebih exaggerated, atau ajak siswa lead gesture 1-2 hobi.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp17-inti-reason-practice',
          tipe  : 'modeling',
          judul : 'Pola Practice — "Because It Is Fun / Interesting"',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa practice pola lengkap "I like [hobby] because it is [fun/interesting]" via modeling.',
          vocab_target      : ['I like', 'because', 'fun', 'interesting'],

          durasi_target_detik : 300,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Now we say WHY we like hobbies!"',
            selama  : `FASE 1 — INTRODUCE 2 REASON (2 menit):
Guru: "Why do we like hobbies? There are 2 reasons:
1. Because it is FUN! (gesture: smiley, happy)
2. Because it is INTERESTING! (gesture: thinking, curious eyes)"
Kelas ulang: "Fun! Interesting!"

FASE 2 — FULL POLA (3 menit):
Guru model pola lengkap dengan hobi + reason (mixed):
"I like reading because it is interesting."
"I like dancing because it is fun!"
"I like cooking because it is fun!"
"I like singing because it is interesting."
Kelas ulang setiap kalimat.
PENTING: Guru randomize — bukan semua FUN, tidak semua INTERESTING.

FASE 3 — GURU TANYA, KELAS JAWAB (1 menit):
Guru: "I like drawing. Why?" → Kelas: "Because it is fun!" atau "Because it is interesting!"`,
            penutup : '"You know why we like things!"',
          },

          audio_cue: {
            contoh_guru  : 'Why do we like hobbies? Because it is fun! Because it is interesting! / I like reading because it is interesting. I like dancing because it is fun!',
            contoh_siswa : 'Fun! / Interesting! / Because it is fun! / Because it is interesting!',
            target_vocab : ['because', 'fun', 'interesting'],
          },

          media_dipakai : ['media-kartu-hobi'],

          mode: {
            mudah: {
              bantuan: 'Cukup focus pada 1 reason dulu (fun). Guru repeat, siswa ulang. Tidak perlu both reasons.',
              panjang_speaking: 'Ulang "because it is fun" setelah guru, atau gesture only.',
            },
            normal: {
              bantuan: '2 reasons (fun/interesting). Guru model mixed, siswa ulang & answer guru questions.',
              panjang_speaking: 'Ucapkan pola "I like... because it is..." atau jawab reason saat guru tanya.',
            },
            tantangan: {
              bantuan: '2 reasons, siswa ciptakan kalimat sendiri atau elaborate alasan ("fun because I can move a lot").',
              panjang_speaking: 'Buat kalimat pola sendiri atau explain why (reason elaboration).',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_confused : 'Focus pada 1 reason saja. Interesting adalah grammar-heavy — fun lebih mudah untuk usia 7.',
            kelas_lupa : 'Ulangi cycle 2x. Repetisi adalah kunci.',
            waktu_mepet : 'Cukup Fase 1 + 2. Skip guru tanya (Fase 3).',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp17-inti-pair-dialogue',
          tipe  : 'pair_work',
          judul : 'Pair Dialogue — "What Do You Like?" Q&A',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa practice pola via pair dialogue: menanya & menjawab hobi + alasan.',
          vocab_target      : ['I like', 'because', 'fun', 'interesting', 'what do you like'],

          durasi_target_detik : 480,
          durasi_min_detik    : 360,

          micro_script: {
            pembuka : '"Now you ask each other! What do you like to do?"',
            selama  : `FASE 1 — GURU MODEL DIALOGUE (2 menit):
Guru + 1 siswa model dulu:
Guru (A): "What do you like to do?"
Siswa (B): "I like reading because it is interesting."
Guru (A): "Oh, nice! What about you? What do you like?"
Siswa (B): "I like dancing because it is fun!"

FASE 2 — PAIR PRACTICE (5 menit):
Siswa pasang 2 orang. Beri setiap pair kartu hobi.
Siswa A: "What do you like to do?"
Siswa B: "I like [hobi] because it is [fun/interesting]. What about you?"
CYCLE: 3-4 hobi pair, lalu rotate.

FASE 3 — CIRCLE (2 menit — optional):
Lingkar, guru atau siswa tanya 3-4 orang.`,
            penutup : '"You can talk about hobbies in English now!"',
          },

          audio_cue: {
            contoh_guru  : 'What do you like to do? / I like reading because it is interesting. / I like dancing because it is fun!',
            contoh_siswa : 'I like drawing because it is fun! / I like swimming because it is interesting! / What about you?',
            target_vocab : ['I like', 'because', 'fun', 'interesting'],
          },

          media_dipakai : ['media-kartu-hobi'],

          mode: {
            mudah: {
              bantuan: 'Guru model banyak. Pair practice: guru assist dengan prompt dulu. Cukup 1-2 hobi per pair.',
              panjang_speaking: 'Jawab "I like..." dengan bantuan guru atau kartu reference. Alasan boleh satu kata.',
            },
            normal: {
              bantuan: 'Guru model 1x, siswa pair practice dengan minimal prompt. 3-4 hobi per cycle.',
              panjang_speaking: 'Ucapkan "I like [hobi] because it is [fun/interesting]" sesuai kartu.',
            },
            tantangan: {
              bantuan: 'Siswa pair buat dialogue panjang atau elaborate alasan mereka.',
              panjang_speaking: 'Buat pola lengkap atau jawab follow-up questions ("Why do you like reading?").',
            },
          },

          observation: { aktif: true, n_siswa: 4, indikator: ['vocab_use', 'response', 'confidence'], rotasi_priority: 'belum_observed', tag_set: 'standar' },

          fallback: {
            pair_tidak_jalan : 'Guru pair dengan siswa itu dulu, atau 3-orang group. Model dulu sebelum peer pair.',
            siswa_malu : 'Guru jadi listener/partner. Jangan push ke peer pair jika tidak siap.',
            pair_canggung : 'Change pasangan atau format group 3. Fleksibel dengan pairing.',
            waktu_mepet : 'Cukup Fase 1 + 2 partial (2 min). Skip Circle.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp17-inti-class-survey',
          tipe  : 'game_movement',
          judul : 'Class Survey — Silent Preference (Bukan Verbal Count)',
          pm    : 'joyful',

          tujuan_komunikasi : 'Engagement activity yang SAFE — siswa express hobi preference tanpa expose atau tekanan verbal.',
          vocab_target      : [],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Let us see which hobbies everyone likes! Stand up!"',
            selama  : `REIMAGINED SURVEY (bukan verbal count):
Guru: "I will show hobi card. If you like this hobby, give me thumbs up!"
[Tunjuk READING] → Siswa thumbs up (silent, no count)
[Tunjuk DRAWING] → Thumbs up
(etc)

Guru: "Nice! So many of you have different hobbies. That is beautiful!"

ALT: MOVEMENT GAME:
Guru: "I say a hobby. If you like it, move like it!"
"Reading!" → Siswa gesture reading
"Dancing!" → Siswa gesture dancing`,
            penutup : '"Everyone likes different things! That is OK! That is normal!"',
          },

          audio_cue: {
            contoh_guru  : 'Do you like reading? Thumbs up! Do you like dancing? Thumbs up! Everyone has different hobbies!',
            contoh_siswa : '(thumbs up gestures) / (movement gestures)',
            target_vocab : [],
          },

          media_dipakai : ['media-kartu-hobi'],

          mode: {
            mudah: {
              bantuan: 'Cukup thumbs up/down — simple, clear, no verbal response needed.',
              panjang_speaking: 'Gesture saja (thumbs up, nod, movement). No speaking required.',
            },
            normal: {
              bantuan: 'Thumbs up atau movement gesture saat guru show kartu.',
              panjang_speaking: 'Gesture expression, atau optional whisper "I like..." to neighbor.',
            },
            tantangan: {
              bantuan: 'Elaborasi gesture atau tanya teman: "Why do you like swimming?" setelah survey.',
              panjang_speaking: 'Optional: share reason dengan teman sebelah.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_tidak_participate : 'OK. Guru tidak push. Berdiri saja sudah participate. Gesture optional.',
            kelas_ribut : 'Cukup thumbs up saja (lebih simple, less chaotic). Skip movement version.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        {
          tipe: 'instruksi',
          teks: 'Tunjuk kartu hobi satu per satu + gesture/action. Kelas ulang hobi (gerund form). Ulangi cepat semua 8 hobi.',
          mode: {
            mudah:     { bantuan: 'Cukup 4 hobi utama (reading, drawing, singing, dancing). Guru action + gesture jelas. Siswa dengarkan & gesture mirror.' },
            normal:    { bantuan: '8 hobi, guru introduce dengan action. Siswa ulang setiap hobi setelah guru.' },
            tantangan: { bantuan: '8 hobi, siswa boleh lead atau ciptakan gesture alternatif sendiri.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Reading! Drawing! Singing! Dancing! Playing football! Cooking! Swimming! Cycling! / I like reading. I like dancing...',
          mode: {
            mudah:     { bantuan: 'Ucapkan 4 hobi saja perlahan. Siswa mirror gesture.' },
            normal:    { bantuan: 'Ucapkan semua 8. Siswa ulang setiap hobi.' },
            tantangan: { bantuan: 'Ucapkan cepat atau acak. Siswa respond spontan.' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Guru model pola "I like... because it is fun/interesting" dengan mixed examples. Kelas ulang.',
          mode: {
            mudah:     { bantuan: 'Cukup focus pada 1 reason dulu (fun). Guru repeat, siswa ulang. Tidak perlu both reasons.' },
            normal:    { bantuan: '2 reasons (fun/interesting). Guru model mixed, siswa ulang & answer guru questions.' },
            tantangan: { bantuan: '2 reasons, siswa ciptakan kalimat sendiri atau elaborate alasan ("fun because I can move a lot").' },
          },
        },
        {
          tipe: 'audio',
          teks: 'I like reading because it is interesting. I like dancing because it is fun!',
          mode: {
            mudah:     { bantuan: 'Ucapkan 1 contoh saja (I like reading because it is fun). Siswa ulang.' },
            normal:    { bantuan: 'Ucapkan 2 contoh. Kelas ulang bersama.' },
            tantangan: { bantuan: 'Ucapkan 1x, siswa buat kalimat sendiri dengan hobi berbeda.' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Pair dialogue: Siswa A tanya "What do you like?" Siswa B jawab "I like... because...". Rotate 3-4 hobi per pair, kemudian switch roles.',
          mode: {
            mudah:     { bantuan: 'Guru model banyak. Pair practice: guru assist dengan prompt dulu. Cukup 1-2 hobi per pair.' },
            normal:    { bantuan: 'Guru model 1x, siswa pair practice dengan minimal prompt. 3-4 hobi per cycle.' },
            tantangan: { bantuan: 'Siswa pair buat dialogue panjang atau elaborate alasan mereka.' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Class survey (reimagined): Guru tunjuk kartu hobi, siswa beri thumbs up (SILENT, bukan verbal count). Atau movement gesture per hobi.',
          mode: {
            mudah:     { bantuan: 'Cukup thumbs up/down — simple, clear, no verbal response needed.' },
            normal:    { bantuan: 'Thumbs up atau movement gesture saat guru show kartu.' },
            tantangan: { bantuan: 'Elaborasi gesture atau tanya teman: "Why do you like swimming?" setelah survey.' },
          },
        },
      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp17-penutup-review',
          tipe  : 'review_quick',
          judul : 'Quick Review — 8 Hobbies',
          pm    : 'joyful',

          tujuan_komunikasi : 'Perkuat recall 8 hobi sebelum closure.',
          vocab_target      : ['reading', 'drawing', 'singing', 'dancing', 'playing football', 'cooking', 'swimming', 'cycling'],

          durasi_target_detik : 180,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Let us remember all the hobbies one more time!"',
            selama  : `MINI GAME — GURU TUNJUK KARTU ACAK, KELAS SEBUTKAN:
Guru tunjuk kartu hobi acak (shuffle), kelas sebutkan (3-4 round, cepat tempo).

ALT: GESTURE GAME:
Guru do gesture, kelas sebutkan hobi + tiru gesture.`,
            penutup : '"Perfect! You know all the hobbies!"',
          },

          audio_cue: {
            contoh_guru  : 'What hobby is this? / Reading! / Dancing! / Singing! / Cycling!',
            contoh_siswa : 'Reading! / Drawing! / Singing! / Dancing! / Playing football! / Cooking! / Swimming! / Cycling!',
            target_vocab : ['reading', 'drawing', 'singing', 'dancing', 'playing football', 'cooking', 'swimming', 'cycling'],
          },

          media_dipakai : ['media-kartu-hobi'],

          mode: {
            mudah: {
              bantuan: 'Guru sebut dulu, siswa ulang. Cukup 4 hobi. Gesture optional.',
              panjang_speaking: 'Dengarkan & ulang nama hobi saja.',
            },
            normal: {
              bantuan: 'Guru tunjuk, siswa jawab nama hobi + gesture.',
              panjang_speaking: 'Sebutkan hobi & mirror gesture.',
            },
            tantangan: {
              bantuan: 'Siswa lead game atau gesture cepat, teman tebak hobi.',
              panjang_speaking: 'Ciptakan gesture alternatif sendiri.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun : 'Ubah ke full body action: "When I say swimming, everyone swim!"',
            waktu_mepet : 'Cukup 1-2 round guru tunjuk kartu, cepat, lanjut closure.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp17-penutup-presentation',
          tipe  : 'meaningful_link',
          judul : 'Voluntary Hobby Sharing (ZERO Pressure)',
          pm    : 'joyful',

          tujuan_komunikasi : 'Optional sharing — siswa yang ingin bicara tentang hobi mereka dapat safe space.',
          vocab_target      : [],

          durasi_target_detik : 300,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Some of you might want to share your favorite hobby! You do not have to. But if you want, I love to hear!"',
            selama  : `Guru: "Raise your hand if you want to share your hobby in 1-2 sentences.
Example: 'I like drawing because it is fun.'
Anything is OK. Just do your best!"

[TUNGGU HAND RAISE — jangan force]

Jika tidak ada yang raise hand:
Guru: "That is OK! You can tell me at break time if you want.
Or just keep it in your heart. Both are beautiful."

FALLBACK KETAT:
"You do NOT have to share. No one will be angry. Sharing is volunteer."`,
            penutup : '"Thank you for being brave and kind today!"',
          },

          audio_cue: {
            contoh_guru  : 'Who wants to share their hobby? Raise your hand! You do not have to. That is OK!',
            contoh_siswa : 'My name is Budi. I like drawing because it is fun! / I like swimming! / (silence — OK)',
            target_vocab : [],
          },

          media_dipakai : [],
          mode         : null,
          observation  : { aktif: false },

          fallback: {
            tidak_ada_volunteer : 'GOOD. Tidak masalah. Guru acknowledge: "That is OK! Listening is also important. You were great listeners today."',
            siswa_malu_saat_raising_hand : 'Guru boleh encourage gentle. Tapi jika masih malu, guru respect (jangan push).',
            siswa_yang_share_gugup : 'Guru berdiri dekat, encouraging eye contact. "Take your time. No rush. You are doing great."',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp17-penutup-closure',
          tipe  : 'closure_reinforcement',
          judul : 'Hobbies Everywhere — Closing Jembatan Rumah',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Jembatan rumah: siswa perhatikan hobi di sekitar (natural curiosity), tidak ada assessment/pressure.',
          vocab_target      : [],

          durasi_target_detik : 180,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Before we finish, remember: hobbies are everywhere!"',
            selama  : `Guru: "Today we learned about hobbies.
Tonight, notice people's hobbies at home. Just notice. Observe.
'Mama likes cooking. Papa likes watching football. Sister likes drawing.'
It is fun to notice.

And remember: all hobbies are OK. Different people like different things.
That is what makes the world interesting!"

CLOSURE:
"Thank you for learning about hobbies today. You did an amazing job!
See you next time! Goodbye!"`,
            penutup : '"Everyone has hobbies. That is beautiful! Goodbye, class!"',
          },

          audio_cue: {
            contoh_guru  : 'Hobbies are everywhere. Your family has hobbies. Your friends have hobbies. Notice them! Everyone is different, and that is beautiful!',
            contoh_siswa : 'Goodbye, teacher! / Thank you!',
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
        {
          tipe: 'instruksi',
          teks: 'Review cepat: Guru tunjuk kartu hobi acak, kelas sebutkan nama. 2-3 round, tempo cepat.',
          mode: {
            mudah:     { bantuan: 'Guru sebut dulu, siswa ulang. Cukup 4 hobi. Gesture optional.' },
            normal:    { bantuan: 'Guru tunjuk, siswa jawab nama hobi + gesture.' },
            tantangan: { bantuan: 'Siswa lead game atau gesture cepat, teman tebak hobi.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Reading! Drawing! Singing! Dancing! Playing football! Cooking! Swimming! Cycling!',
          mode: {
            mudah:     { bantuan: 'Cukup 4 hobi, perlahan.' },
            normal:    { bantuan: 'Semua 8 hobi, natural.' },
            tantangan: { bantuan: 'Cepat atau siswa lead.' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Voluntary sharing: Guru tanya "Who wants to share their hobby?" Raise hand only. ZERO pressure — jika tidak ada volunteer, itu OK.',
          mode: {
            mudah:     { bantuan: 'Skip voluntary sharing jika energi kelas rendah. Langsung ke jembatan rumah.' },
            normal:    { bantuan: 'Tanya voluntary, tunggu 5 detik. Jika tidak ada, lanjut — OK.' },
            tantangan: { bantuan: 'Undang 2-3 siswa untuk share + reason.' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Jembatan rumah: Guru jelaskan bahwa hobi ada di mana-mana. Minta siswa notice hobi di rumah (silent observation, tidak ada assessment). Closure: "Different people like different things. That is beautiful."',
          mode: {
            mudah:     { bantuan: 'Pesan simple: "Di rumah kamu suka apa? Perhatikan saja." Tidak perlu respond.' },
            normal:    { bantuan: 'Guru jelaskan jembatan natural. Siswa dengarkan.' },
            tantangan: { bantuan: 'Guru invite: "Coba bilang 1 hobi yang kamu suka di rumah — besok ceritakan!" — voluntary.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Hobbies are everywhere. Notice them at home. Everyone has hobbies. That is beautiful! Goodbye, class!',
          mode: null,
        },
      ],
    },

    {
      fase  : 'Penilaian',
      durasi: 6,

      aktivitas: [
        {
          id    : 'tp17-penilaian-validation',
          tipe  : 'observation_validation',
          judul : 'Validate Hobi Gerund + Pola "I Like ... Because"',
          pm    : null,

          tujuan_komunikasi : 'Validasi kemampuan siswa: gerund recall + pola structure + reason logic.',
          vocab_target      : ['reading', 'drawing', 'singing', 'dancing', 'playing football', 'cooking', 'swimming', 'cycling', 'because'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Sambil siswa bersiap pulang, dekati beberapa siswa yang belum sempat berbicara banyak di Inti. Beri prompt hobi + reason.',
            selama  : `Contoh prompt (dengan kartu hobi):
1. Gerund recall: Tunjuk kartu — "What is this?" atau "What do you call this activity in English?"
2. Pola: "Do you like reading? Why?" atau "Tell me a hobby you like and why."
3. Follow-up: "Is that fun or interesting?"

Amati:
- Bisa sebutkan hobi dengan gerund (-ing form)?
- Bisa respond "I like... because..." dengan struktur benar?
- Reason yang diberikan logis (fun / interesting)?`,
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'What is this activity? Do you like reading? Why? Is it fun or interesting?',
            contoh_siswa : 'Reading! / I like dancing because it is fun! / Because it is interesting!',
            target_vocab : [],
          },

          media_dipakai : ['media-kartu-hobi'],
          mode         : null,

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['vocab_use', 'response', 'confidence'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'standar',
          },

          fallback: {
            siswa_pasif : 'Tanya simple: "What is this?" Tunjuk kartu. Siswa boleh tunjuk kartu atau satu kata saja.',
            siswa_salah_gerund : 'Model correct form: "Yes, reading! Not read — reading!" Lanjut tenang.',
            siswa_lupa_reason : 'Prompt: "Is it fun or interesting?" Siswa pilih, tidak perlu elaborate.',
            waktu_mepet : 'Cukup validasi 3 siswa. Focus: bisa sebutkan 3-4 hobi + respond pola minimal 1x.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Sambil siswa pulang, dekati 3–4 siswa. Tunjuk kartu hobi: "What is this?" atau tanya "Do you like reading? Why?"' },
        { tipe: 'instruksi', teks: 'Nilai Listening: paham "what do you like?" Speaking: sebutkan hobi (gerund), ucapkan pola "I like... because...". Response: gerund form + reason logic (fun/interesting).' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang kesulitan gerund (reading/swimming/cycling)? Siapa yang bisa pola lengkap? Siapa yang choose reason dengan logis?' },
      ],
    },

  ],

};

export default TP_17;
