/**
 * =============================================================
 * FLAF — TP 16 (Simple Story Retelling)
 * File: docs/sesi-m11/tp-16.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: UPDATED — langkah[] ditambah field mode (Fase 9)
 *
 * KARAKTER KHAS TP 16:
 *   - Topik RENDAH sensitif — cerita bergambar generic.
 *   - Fokus: listening comprehension + sequential thinking + retelling dengan scaffold.
 *   - Desain: pre-defined cerita standard (3–5 panel) → semua siswa same story.
 *   - Aktivitas utama: prediction → story listening → comprehension Q&A →
 *     sequencing vocab (first/then/after/finally) → pair retelling (card-assisted) →
 *     character emotion mindful reflection (no forced exposure).
 *   - Closure: jembatan rumah — siswa perhatikan cerita di rumah/media (natural curiosity).
 *
 * SCOPE DESIGN:
 *   - Cerita: 1 pre-defined simple story (3–5 halaman, karakter positif, ending baik)
 *   - Vocab urutan: 4 item (first, then, after that, finally)
 *   - Comprehension: who/what/where questions
 *   - Retelling: card-assisted di semua mode (mudah-normal-tantangan)
 *
 * PENERAPAN PATTERN INKLUSIVITAS (CONTEXT.md):
 *   - Pattern 1: Scripted micro_script untuk story reading.
 *   - Pattern 4: Pair retelling universal — semua bisa ceritakan dengan kartu support.
 *   - Pattern 5: Fallback untuk siswa yang kesulitan ingat cerita atau gugup saat pair.
 *   - Character emotion reflection: MINDFUL ONLY.
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - docs/sesi-m10/tp-15.js (format reference)
 *   - CONTEXT.md §Pattern Inklusivitas
 */

const TP_16 = {

  id       : 'tp-16',
  nomor    : 16,
  kelas    : 2,
  nama     : 'Simple Story Retelling',
  tema     : 'Literasi Awal',
  deskripsi: `Peserta didik menyimak cerita bergambar sederhana yang sama untuk
    semua siswa, memahami isi cerita, dan menceritakan kembali menggunakan
    kata urutan (first, then, after that, finally) dengan dukungan kartu.
    Fokus pada comprehension dan sequential thinking, bukan memorization.`,

  indikator: [
    'Peserta didik dapat memahami cerita bergambar sederhana dan menjawab pertanyaan "who, what, where" tentang isi cerita.',
    'Peserta didik dapat menceritakan kembali isi cerita dalam 3–4 kalimat menggunakan kata urutan (first, then, after that, finally) dengan bantuan kartu.',
    'Peserta didik dapat mengidentifikasi perasaan tokoh cerita secara mindful (without forced personal exposure).',
  ],

  vocab: ['story', 'character', 'first', 'then', 'after that', 'finally', 'who', 'what', 'where', 'because', 'I think'],

  persiapan: ['Buku cerita bergambar sederhana pre-defined (3–5 halaman)', 'Kartu urutan 4 item (first, then, after that, finally)'],

  media: [
    {
      id                 : 'media-cerita-sederhana',
      nama               : 'Buku Cerita Bergambar Pre-defined',
      tipe               : 'buku_cetak',
      printable          : true,
      pdf_ref            : 'tp-16-story-v1.pdf',
      pdf_halaman        : '1–5',
      reusable_lintas_tp : false,
      keterangan         : 'Satu cerita standard (3–5 halaman) yang sama untuk semua kelas. Cerita: karakter positif, urutan jelas, ending baik. Contoh: "Ani finds a lost cat → she helps it → the cat finds home."',
    },
    {
      id                 : 'media-kartu-urutan',
      nama               : 'Kartu Urutan Cerita (4 item)',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'tp-16-v1.pdf',
      pdf_halaman        : 2,
      reusable_lintas_tp : true,
      keterangan         : '4 kartu A5 dengan text + visual: "First" (start icon), "Then" (arrow), "After that" (continuation), "Finally" (end icon). Untuk scaffold pair retelling.',
    },
  ],

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp16-pembuka-meaningful',
          tipe  : 'meaningful_link',
          judul : 'Prediction — What Will Happen?',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa activate prior knowledge & create anticipation sebelum listening.',
          vocab_target      : [],

          durasi_target_detik : 300,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Today we have a story! Are you ready to listen? I will show you the cover first!"',
            selama  : `Guru tunjuk sampul cerita (jangan buka halaman dalam):
"Look at this cover. What do you see? Who is in the picture? (tanya 2-3 siswa, tunggu jawab)
What do you think will happen in this story? (tanya lagi, dengarkan prediksi mereka)
Good thinking! Now let us listen to the story and see if your prediction is right!"

Guru NOT sebutkan cerita title atau plot — keep surprise!`,
            penutup : '"Let us start the story now. Sit comfortably and listen carefully!"',
          },

          audio_cue: {
            contoh_guru  : 'Look at the cover. Who is in the picture? What do you think will happen in the story?',
            contoh_siswa : 'A cat! / A girl and a cat! / They play together! / The cat goes home!',
            target_vocab : [],
          },

          media_dipakai : ['media-cerita-sederhana'],

          mode: {
            mudah: {
              bantuan: 'Guru tanya simple: "Who is in the picture?" Siswa boleh jawab dalam bahasa Indonesia atau gesture/tunjuk gambar.',
              panjang_speaking: 'Siswa jawab satu kata atau gesture pointing.',
            },
            normal: {
              bantuan: 'Guru tanya who/what in cover, siswa jawab dalam Inggris atau Indonesian mix.',
              panjang_speaking: 'Sebutkan character atau predict dengan frasa singkat ("Cat" / "Girl and cat" / "They play").',
            },
            tantangan: {
              bantuan: 'Guru tanya lebih detail: "What do you see? What is the girl doing?" Siswa jawab kalimat.',
              panjang_speaking: 'Buat predicted sentence: "The girl and the cat will play together" atau serupa.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_diam : 'Tidak apa-apa. Guru lanjut cerita. Prediction adalah optional — listening comprehension yang utama.',
            energi_rendah : 'Tambah gerakan: siswa berdiri, tunjuk kartu saat predict, baru duduk.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        {
          tipe: 'instruksi',
          teks: 'Tunjuk cover cerita. Tanya siswa: siapa yang ada di gambar? Apa yang akan terjadi? Tunggu prediksi mereka (boleh bahasa Indonesia).',
          mode: {
            mudah:     { bantuan: 'Guru tanya simple: "Who is in the picture?" Siswa boleh jawab dalam bahasa Indonesia atau gesture/tunjuk gambar.' },
            normal:    { bantuan: 'Guru tanya who/what in cover, siswa jawab dalam Inggris atau Indonesian mix.' },
            tantangan: { bantuan: 'Guru tanya lebih detail: "What do you see? What is the girl doing?" Siswa jawab kalimat.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Look at the cover. Who is in the picture? What do you think will happen in this story?',
          mode: {
            mudah:     { bantuan: 'Ucapkan pelan, tunjuk gambar. Siswa boleh jawab satu kata atau gesture.' },
            normal:    { bantuan: 'Tanya natural, tunggu prediksi siswa.' },
            tantangan: { bantuan: 'Tanya + follow up "Why do you think so?"' },
          },
        },
      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,

      aktivitas: [
        {
          id    : 'tp16-inti-story-listening',
          tipe  : 'modeling',
          judul : 'Story Listening — Guru Baca Ekspresif',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa dengarkan & comprehend cerita via expressive reading + visual support (halaman demi halaman).',
          vocab_target      : ['story', 'character', 'first', 'then', 'finally'],

          durasi_target_detik : 300,
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : '"Here is the story! Listen carefully!"',
            selama  : `Guru baca cerita halaman per halaman dengan intonasi & ekspresi natural:
- TONE: Natural, tidak over-dramatic, tapi jelas & engaging.
- PACING: Lambat, beri waktu siswa visualize setiap halaman.
- GESTURE: Tunjuk gambar, gesture untuk action.
- STOP POINTS: Di 1-2 tempat, berhenti & tanya prediksi: "What do you think happens next?"

Contoh script (asumsi cerita "Ani Finds Cat"):
Page 1: "Once upon a time, there was a girl named Ani. One day, she was walking in the park..."
[tunjuk Ani di halaman]
"What do you think she will find?"
[tunggu jawab, lanjut]
Page 2: "Suddenly, she heard a sound: 'Meow! Meow!' Oh! There was a small cat! The cat looked sad."
Page 3: "Ani said: 'Do not cry! I will help you!' She gave the cat some water and food."
Page 4: "Together, they looked for the cat's home. Finally, they found the house! A family was so happy!"

END: Cerita selesai. Beri pause untuk siswa process.`,
            penutup : '"That is the end of the story! Did you like it?"',
          },

          audio_cue: {
            contoh_guru  : 'Once upon a time... What do you think happens next? / She found a cat! / The cat looked sad. / Finally, they found the home!',
            contoh_siswa : 'A cat! / A dog! / They play! / The cat is happy!',
            target_vocab : ['story', 'character'],
          },

          media_dipakai : ['media-cerita-sederhana'],

          mode: {
            mudah: {
              bantuan: 'Guru baca lebih lambat, gesture lebih jelas. Jangan tanya prediksi — cukup listening saja.',
              panjang_speaking: 'Siswa dengarkan saja. No speaking required.',
            },
            normal: {
              bantuan: 'Guru baca dengan normal pace, gesture natural. Tanya 1 prediksi di tengah.',
              panjang_speaking: 'Dengarkan & optional jawab prediksi (satu kata/frasa).',
            },
            tantangan: {
              bantuan: 'Guru baca natural pace, tanya 2 prediksi. Siswa boleh tanya pertanyaan tentang cerita.',
              panjang_speaking: 'Jawab prediksi panjang atau ask clarifying questions tentang cerita.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_gelisah : 'Guru baca lebih cepat (jangan drag), atau skip 1 halaman jika perlu. Fokus di 3 halaman utama saja, bukan semua 5.',
            siswa_tidak_paham : 'Normal untuk usia 7 — oral processing butuh time. Lanjut ke comprehension Q&A next, akan jelas dengan visual kartu.',
            waktu_mepet : 'Baca 3 halaman saja (opening, climax, ending). Skip supporting halaman.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp16-inti-comprehension',
          tipe  : 'pair_work',
          judul : 'Comprehension Q&A — Who/What/Where',
          pm    : 'mindful',

          tujuan_komunikasi : 'Validasi listening comprehension via simple questions (who/what/where) + reinforce character & plot.',
          vocab_target      : ['story', 'character', 'who', 'what', 'where'],

          durasi_target_detik : 300,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Now let us check if you understand the story!"',
            selama  : `FASE 1 — GURU TANYA, KELAS JAWAB (3 menit):
Guru tanya 3 comprehension questions (tunjuk halaman relevant saat tanya):
1. WHO: "Who is the main character in the story?"
   Kelas jawab: "Ani!" / "A girl!" / "The girl!"
2. WHAT: "What did she find in the park?"
   Kelas jawab: "A cat!" / "A kitten!"
3. WHERE: "Where did they find the cat's home?"
   Kelas jawab: "In the park!" / "Next to the park!" (etc)

Guru accept any reasonable answer (bahasa Indonesia + English mix = OK).

FASE 2 — PAIR DIALOGUE (4 menit):
Guru model dulu:
Guru (A): "Who is the main character?"
Guru (B, modeling): "Ani!"

Siswa pasang 2 orang, practice cycle 3 questions:
Siswa A tanya: "Who is the main character?"
Siswa B jawab: "Ani!"
Siswa A: "What did she find?"
Siswa B: "A cat!"
Siswa A: "Where did they find the home?"
Siswa B: "In the park!"
Rotate: Siswa B jadi yang tanya.`,
            penutup : '"Good! You understand the story very well!"',
          },

          audio_cue: {
            contoh_guru  : 'Who is the main character? / What did she find? / Where did they find the home?',
            contoh_siswa : 'Ani! / A girl! / A cat! / In the park!',
            target_vocab : ['character', 'who', 'what', 'where'],
          },

          media_dipakai : ['media-cerita-sederhana'],

          mode: {
            mudah: {
              bantuan: 'Guru tanya, kelas jawab bersama. Pair practice: guru assist dengan repetition dulu. Boleh cukup 1 question saja.',
              panjang_speaking: 'Jawab satu kata atau gesture pointing ke halaman cerita.',
            },
            normal: {
              bantuan: 'Guru model, siswa pair practice 3 questions dengan minimal prompt.',
              panjang_speaking: 'Jawab one-word atau frasa: "Ani" / "A cat" / "In the park".',
            },
            tantangan: {
              bantuan: 'Siswa pair buat pertanyaan sendiri (who/what/where) atau follow-up "Why did she help the cat?"',
              panjang_speaking: 'Jawab panjang atau tanya back: "Because the cat was sad" atau "Where did she find food for the cat?"',
            },
          },

          observation: { aktif: false },

          fallback: {
            pair_tidak_jalan : 'Guru pair dengan siswa itu dulu. Atau group 3 orang: Guru + 2 siswa model dulu.',
            siswa_lupa_cerita : 'Tunjuk halaman visual reference. "Look at the picture. Who is this?" Siswa visual cues membantu recall.',
            waktu_mepet : 'Cukup guru tanya saja (Fase 1), skip pair practice. Lanjut ke sequencing vocab.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp16-inti-sequencing',
          tipe  : 'modeling',
          judul : 'Sequencing Vocab — First/Then/After That/Finally',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa mengenal 4 kata urutan & apply ke cerita (cognitive scaffold untuk retelling).',
          vocab_target      : ['first', 'then', 'after that', 'finally'],

          durasi_target_detik : 240,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Now we learn how to tell the story in order! We use 4 magic words!"',
            selama  : `PHASE 1 — INTRODUCE 4 VOCAB (2 menit):
Guru tunjuk kartu urutan satu per satu:
1. "First" — gerakan: pointing ke awal cerita (halaman 1)
2. "Then" — gerakan: gerakan ke depan (panah)
3. "After that" — gerakan: lanjut depan
4. "Finally" — gerakan: ke ending (end marker)

Kelas ulang setiap kata + cerita sambil dengarkan guru.
Ulangi 4 urutan cepat: "First, then, after that, finally!"

PHASE 2 — APPLY KE CERITA (2 menit):
Guru susun kartu urutan di papan (left to right):
[First] [Then] [After that] [Finally]
Guru tunjuk setiap kartu sambil cerita garis besar ulang.`,
            penutup : '"You know the magic words! First, then, after that, finally!"',
          },

          audio_cue: {
            contoh_guru  : 'First! Then! After that! Finally! / First, Ani walked in the park. Then, she found a cat. After that, she helped the cat. Finally, they found the home!',
            contoh_siswa : 'First! / Then! / After that! / Finally! / (ulang bersama guru)',
            target_vocab : ['first', 'then', 'after that', 'finally'],
          },

          media_dipakai : ['media-cerita-sederhana', 'media-kartu-urutan'],

          mode: {
            mudah: {
              bantuan: 'Cukup 2 kata urutan (first, then). Guru model banyak, siswa ulang saja. Visual kartu jelas.',
              panjang_speaking: 'Dengarkan & ulang after guru, tidak perlu buat kalimat sendiri.',
            },
            normal: {
              bantuan: '4 kata, guru model + apply ke cerita. Siswa ulang & prepare untuk pair retelling next.',
              panjang_speaking: 'Ulang "First, then, after that, finally" + cerita garis besar dengan bantuan guru.',
            },
            tantangan: {
              bantuan: '4 kata, siswa boleh lead atau create alternative story order.',
              panjang_speaking: 'Buat kalimat sendiri per urutan card: "First, the girl walked..." tanpa guru prompt.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_confused : 'Focus pada 2 kata saja (first/finally). "Beginning" dan "ending" cukup untuk retelling dasar.',
            kelas_lupa : 'Ulangi cycle 2x. Repetisi adalah kunci untuk usia 7.',
            waktu_mepet : 'Cukup introduce 4 vocab + 1 apply cycle. Lanjut langsung ke pair retelling dengan kartu di tangan.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp16-inti-pair-retelling',
          tipe  : 'pair_work',
          judul : 'Pair Retelling — Card-Assisted Ceritakan Kembali',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa ceritakan ulang cerita dengan struktur sequential (first/then/after/finally) & kartu support.',
          vocab_target      : ['first', 'then', 'after that', 'finally', 'story', 'character'],

          durasi_target_detik : 480,
          durasi_min_detik    : 360,

          micro_script: {
            pembuka : '"Now you try! You will tell the story to your partner!"',
            selama  : `FASE 1 — GURU MODEL RETELLING (2 menit):
Guru + 1 siswa model dulu. Guru jadi Siswa A, volunteer jadi Siswa B:
Guru: "I tell you the story. [pegang kartu First] First, Ani was walking in the park. [Next kartu Then] Then, she found a sad cat. [Next kartu After] After that, Ani helped the cat. [Next kartu Finally] Finally, they found the home!"
Siswa B: "Thank you! That was a good story!"

FASE 2 — PAIR RETELLING (5 menit):
Siswa pasang 2 orang. Beri setiap pair 1 set kartu urutan.
Siswa A: ceritakan ulang cerita (bisa lihat halaman cerita + kartu di tangan).
Siswa B: dengarkan.
Guru walk around, listen & support.

FASE 3 — ROTATE & REVERSE (3 menit):
Siswa B sekarang jadi storyteller, Siswa A jadi listener.`,
            penutup : '"Wonderful! You are great storytellers!"',
          },

          audio_cue: {
            contoh_guru  : 'First, Ani was walking in the park. Then, she found a cat. After that, she helped the cat. Finally, they found the home!',
            contoh_siswa : 'First, the girl walked. Then, she saw a cat. After that, she gave food. Finally, they went home!',
            target_vocab : ['first', 'then', 'after that', 'finally'],
          },

          media_dipakai : ['media-cerita-sederhana', 'media-kartu-urutan'],

          mode: {
            mudah: {
              bantuan: 'Kartu di tangan + halaman cerita visible. Guru assist: tunjuk kartu, siswa baca/cerita halaman. 2 kartu saja (first, finally) jika perlu.',
              panjang_speaking: 'Cerita 2-3 kalimat sederhana dengan guide kartu + visual halaman.',
            },
            normal: {
              bantuan: 'Kartu + halaman cerita (as memory trigger). Siswa cerita 3-4 kalimat dengan struktur "First...then...after...finally".',
              panjang_speaking: 'Ucapkan 3-4 kalimat urutan sesuai cerita, dengan kartu sebagai scaffold.',
            },
            tantangan: {
              bantuan: 'Kartu urutan saja (tidak buka halaman). Siswa cerita 4+ kalimat dari memory + kartu sequence guide.',
              panjang_speaking: 'Ceritakan 4 kalimat panjang tanpa visual halaman reference (kartu sequence saja).',
            },
          },

          observation: { aktif: true, n_siswa: 4, indikator: ['vocab_use', 'response', 'confidence'], rotasi_priority: 'belum_observed', tag_set: 'standar' },

          fallback: {
            siswa_malu : 'Guru pair dengan siswa itu dulu, atau 3-orang group. Jangan paksa 1:1 pair jika shy.',
            siswa_lupa_cerita : 'Kartu + halaman cerita both visible — tidak masalah. Fokus pada attempting sequence, bukan memorization.',
            pasangan_canggung : 'Rotate pasangan atau format group 3.',
            waktu_mepet : 'Cukup Fase 1 (model) + Fase 2 partial (2 min). Skip full rotation.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp16-inti-emotion-reflection',
          tipe  : 'reflection',
          judul : 'Character Emotion — Mindful Reflection (No Forced Exposure)',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa identify & reflect on character emotion secara mindful — cognitive linking WITHOUT personal share demand.',
          vocab_target      : ['because', 'happy', 'sad'],

          durasi_target_detik : 240,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Let us think about the feelings in the story!"',
            selama  : `Guru tanya tentang karakter emosi (MINDFUL REFLECTION ONLY — no hand up, no forced share):
"In the story, the cat felt sad at first. Why was the cat sad?
Yes, the cat was lost. The cat was alone.
Later, Ani helped the cat. How did the cat feel then?
Happy! Yes, the cat was happy because Ani helped.

And Ani? How did Ani feel?
When we help someone, we feel happy inside.
That is normal. That is beautiful."

REFLECTION (not sharing):
"Did this story remind you of a time YOU helped someone?
[PAUSE — no hand up]
You do not need to tell me. Just think quietly."`,
            penutup : '"The characters had feelings. You have feelings too. That is normal and beautiful!"',
          },

          audio_cue: {
            contoh_guru  : 'Why was the cat sad? / The cat was lost. / How did Ani feel? / Happy because she helped.',
            contoh_siswa : 'The cat was sad! / Lost! / Ani was happy! / (silent reflection)',
            target_vocab : ['because', 'happy', 'sad'],
          },

          media_dipakai : ['media-cerita-sederhana'],
          mode         : null,
          observation  : { aktif: false },

          fallback: {
            siswa_sedih_muncul : 'STOP. Jangan lanjut. Guru dekati quiet, eye contact gentle. "It is OK. You can take a break." Lanjut tenang, skip sisa reflection.',
            silence_awkward : 'Normal di usia 7. Guru bisa isi dengan: "Some of you might be thinking... that is good."',
            siswa_ingin_share : 'Gentle redirect: "Thank you for thinking about that. You can tell me later at break time if you want."',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        {
          tipe: 'instruksi',
          teks: 'Guru baca cerita halaman per halaman dengan ekspresi. Tunjuk gambar, gesture untuk action. Berhenti 1-2x untuk tanya prediksi (short).',
          mode: {
            mudah:     { bantuan: 'Guru baca lebih lambat, gesture lebih jelas. Jangan tanya prediksi — cukup listening saja.' },
            normal:    { bantuan: 'Guru baca dengan normal pace, gesture natural. Tanya 1 prediksi di tengah.' },
            tantangan: { bantuan: 'Guru baca natural pace, tanya 2 prediksi. Siswa boleh tanya pertanyaan tentang cerita.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Once upon a time... What do you think happens next? / Finally, they found the home!',
          mode: {
            mudah:     { bantuan: 'Fokus pada storytelling saja, tidak perlu tanya prediksi.' },
            normal:    { bantuan: 'Baca + tanya "What happens next?" di 1 titik.' },
            tantangan: { bantuan: 'Baca + tanya 2x, siswa boleh jawab kalimat.' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Tanya comprehension: Who/what/where? Kelas jawab, lalu pair practice 3 questions.',
          mode: {
            mudah:     { bantuan: 'Guru tanya, kelas jawab bersama. Pair practice: guru assist dengan repetition dulu. Boleh cukup 1 question saja.' },
            normal:    { bantuan: 'Guru model, siswa pair practice 3 questions dengan minimal prompt.' },
            tantangan: { bantuan: 'Siswa pair buat pertanyaan sendiri atau follow-up "Why did she help the cat?"' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Introduce sequencing vocab via kartu: First, Then, After that, Finally. Guru model apply ke cerita.',
          mode: {
            mudah:     { bantuan: 'Kenalkan 2 vocab dulu (First, Finally). Guru demo apply ke 2 titik cerita.' },
            normal:    { bantuan: '4 vocab sequencing. Guru model, siswa ulang.' },
            tantangan: { bantuan: 'Siswa coba apply vocab ke cerita sendiri tanpa prompt guru.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'First, Ani walked in the park. Then, she found a cat. After that, she helped the cat. Finally, they found the home!',
          mode: {
            mudah:     { bantuan: 'Ucapkan perlahan, tunjuk halaman cerita per kalimat.' },
            normal:    { bantuan: 'Ucapkan natural, kelas ulang bersama.' },
            tantangan: { bantuan: 'Ucapkan 1x, siswa coba retell sendiri.' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Pair retelling: Guru model dulu. Siswa pasang 2 orang, cerita ulang dengan kartu urutan + halaman cerita sebagai support. Rotate.',
          mode: {
            mudah:     { bantuan: 'Guru model 2x. Pair boleh baca dari halaman cerita langsung. Cukup 2 kalimat.' },
            normal:    { bantuan: 'Guru model 1x. Siswa pair retell dengan kartu urutan sebagai support.' },
            tantangan: { bantuan: 'Siswa retell tanpa melihat halaman cerita. Spontan dengan sequencing vocab.' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Character emotion reflection: Tanya perasaan Ani & kucing. Siswa think quietly (NO hand up, NO forced sharing). Guru: "It is OK to feel things. That is normal."',
          mode: {
            mudah:     { bantuan: 'Guru sebutkan emosi Ani dulu ("She feels happy"). Siswa dengarkan dan nod.' },
            normal:    { bantuan: 'Guru tanya, siswa think quietly. Optional 1-2 siswa share jika mau.' },
            tantangan: { bantuan: 'Siswa boleh reflect dan share: "I think Ani feels... because..."' },
          },
        },
      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp16-penutup-review',
          tipe  : 'review_quick',
          judul : 'Quick Review — 4 Sequencing Vocab',
          pm    : 'joyful',

          tujuan_komunikasi : 'Perkuat recall 4 vocab urutan sebelum closure.',
          vocab_target      : ['first', 'then', 'after that', 'finally'],

          durasi_target_detik : 180,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Let us remember the magic words one more time!"',
            selama  : `MINI GAME — GURU TUNJUK KARTU, KELAS SEBUTKAN:
Guru tunjuk kartu urutan acak, kelas sebutkan nama:
[Tunjuk First] → Kelas: "First!"
[Tunjuk Finally] → Kelas: "Finally!"
[Tunjuk Then] → Kelas: "Then!"
[Tunjuk After that] → Kelas: "After that!"
Ulangi 2-3 round, cepat tempo.

ALT: SISWA SUSUN KARTU URUTAN ACAK JADI SEQUENCE BENAR.`,
            penutup : '"Great! You know the sequencing words!"',
          },

          audio_cue: {
            contoh_guru  : 'What is this card? First! Then! After that! Finally!',
            contoh_siswa : 'First! / Then! / After that! / Finally!',
            target_vocab : ['first', 'then', 'after that', 'finally'],
          },

          media_dipakai : ['media-kartu-urutan'],

          mode: {
            mudah: {
              bantuan: 'Guru sebut dulu, siswa ulang. Cukup 2 kartu (first, finally).',
              panjang_speaking: 'Dengarkan & ulang nama kartu.',
            },
            normal: {
              bantuan: 'Guru tunjuk, siswa jawab nama kartu. Atau angkat kartu saat guru cerita.',
              panjang_speaking: 'Sebutkan nama kartu urutan.',
            },
            tantangan: {
              bantuan: 'Siswa susun kartu dari acak. Atau lead game (guru tunjuk, siswa jawab cepat).',
              panjang_speaking: 'Buat kalimat singkat per kartu: "First, she walked" dll.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun : 'Ubah ke movement: "When I say First, jump! When I say Then, clap!"',
            waktu_mepet : 'Cukup 1 round guru tunjuk kartu, cepat, lanjut closure.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp16-penutup-closure',
          tipe  : 'closure_reinforcement',
          judul : 'Stories Around You — Closing Jembatan Rumah',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Jembatan rumah: siswa perhatikan cerita natural di rumah/media (curiosity activation), tidak ada pressure.',
          vocab_target      : [],

          durasi_target_detik : 180,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Before we finish, remember: stories are everywhere!"',
            selama  : `Guru: "The story we read today — about Ani and the cat — that is one story.
But there are many more stories in the world.
Stories in your home. Stories in your family. Stories you see in books, or movies.

Tonight when you go home, maybe your parent will tell you a story.
Or maybe you will see a story on TV.
When you hear or see a story, remember the words: First... then... after that... finally.

You do not have to study it. Just notice it. Just remember."

CLOSURE:
"Thank you for listening to Ani's story today.
You are amazing storytellers and thinkers!
See you next time! Goodbye!"`,
            penutup : '"Keep stories in your heart. Goodbye, class!"',
          },

          audio_cue: {
            contoh_guru  : 'Stories are everywhere. You will hear more stories at home. First, then, after that, finally. Goodbye, class!',
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
          teks: 'Review cepat: Guru tunjuk kartu urutan acak, kelas sebutkan nama. 2-3 round, tempo cepat. Atau siswa susun kartu jadi sequence benar.',
          mode: {
            mudah:     { bantuan: 'Guru sebut dulu, siswa ulang. Cukup 2 kartu (first, finally).' },
            normal:    { bantuan: 'Guru tunjuk, siswa jawab nama kartu. Atau angkat kartu saat guru cerita.' },
            tantangan: { bantuan: 'Siswa susun kartu dari acak. Atau lead game (guru tunjuk, siswa jawab cepat).' },
          },
        },
        {
          tipe: 'audio',
          teks: 'First! Then! After that! Finally!',
          mode: {
            mudah:     { bantuan: 'Ucapkan pelan, siswa ulang per kata.' },
            normal:    { bantuan: 'Ucapkan natural, siswa ulang bersama.' },
            tantangan: { bantuan: 'Siswa lead: sebutkan sendiri atau buat kalimat per vocab.' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Jembatan rumah: Guru jelaskan bahwa cerita ada di mana-mana (rumah, buku, TV). Minta siswa perhatikan cerita natural (tanpa pressure). Closure: "Goodbye, amazing storytellers!"',
          mode: {
            mudah:     { bantuan: 'Pesan simple: "Di rumah ada banyak cerita. Dengarkan saja." Tidak perlu siswa respond.' },
            normal:    { bantuan: 'Guru jelaskan jembatan natural. Siswa dengarkan.' },
            tantangan: { bantuan: 'Guru invite: "Cerita apa yang kamu suka di rumah?" — voluntary sharing.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Stories are everywhere. You are great listeners and thinkers. Goodbye, class!',
          mode: null,
        },
      ],
    },

    {
      fase  : 'Penilaian',
      durasi: 6,

      aktivitas: [
        {
          id    : 'tp16-penilaian-validation',
          tipe  : 'observation_validation',
          judul : 'Validate Comprehension & Retelling Quality',
          pm    : null,

          tujuan_komunikasi : 'Validasi kemampuan siswa: comprehension (who/what/where) + retelling dengan sequencing vocab + emotion identification.',
          vocab_target      : ['first', 'then', 'after that', 'finally', 'who', 'what', 'where'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Sambil siswa bersiap pulang, dekati beberapa siswa yang belum sempat berbicara banyak di Inti. Beri prompt comprehension + retelling.',
            selama  : `Contoh prompt (dengan kartu urutan & halaman cerita di tangan):
1. Comprehension: "Who is the main character? / What did she find? / Where did they find the home?"
2. Retelling: "Can you tell me the story again? Use first, then, after that, finally."
3. Emotion: "How did Ani feel when she helped the cat? Why?"

Amati:
- Bisa jawab 2-3 comprehension questions dengan benar?
- Bisa ceritakan kembali dengan minimal 2 sequencing vocab?
- Bisa identify character emotion & reason?`,
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Who is the main character? / What did she find? / Can you tell the story again? / How did Ani feel?',
            contoh_siswa : 'Ani! / A cat! / First, she walked. Then, she found a cat. Finally, they found home! / Happy because she helped!',
            target_vocab : [],
          },

          media_dipakai : ['media-cerita-sederhana', 'media-kartu-urutan'],
          mode         : null,

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['vocab_use', 'response', 'confidence'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'standar',
          },

          fallback: {
            siswa_pasif : 'Tanya simple: "Who is in the story?" + tunjuk halaman. Siswa tunjuk atau jawab satu kata OK.',
            siswa_lupa_detail : 'Tunjuk halaman sebagai cue. "Look at page 2. What is this?" Visual memory trigger membantu.',
            waktu_mepet : 'Cukup validasi 3 siswa. Focus: bisa jawab 2 dari 3 comprehension questions + retelling minimal 2 vocab urutan.',
            siswa_sedih : 'Note untuk follow-up nanti. Skip validation itu, lanjut siswa lain.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Sambil siswa pulang, dekati 3–4 siswa. Tanya comprehension: "Who/what/where in the story?" Lalu tanya ceritakan ulang dengan sequencing words.' },
        { tipe: 'instruksi', teks: 'Nilai Listening: memahami cerita & menjawab who/what/where. Speaking: retelling dengan first/then/after/finally. Emotion: identify karakter perasaan & alasan.' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang bisa retelling dengan 3+ sequencing vocab? Siapa yang cukup 2 vocab? Siapa yang masih perlu visual support (halaman cerita)?' },
      ],
    },

  ],

};

export default TP_16;
