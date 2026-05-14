/**
 * =============================================================
 * FLAF — TP 15 (Feelings and Emotions)
 * File: docs/sesi-m10/tp-15.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Sesi M10 — Mei 2026
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[14] (v3)
 *
 * KARAKTER KHAS TP 15:
 *   - Topik TINGGI sensitif — emosi sangat personal.
 *   - Desain inklusif: Opsi A — identification + pattern practice
 *     (konteks universal, bukan pribadi expose).
 *   - Aktivitas utama: kartu emosi + scenario universal via roleplay berpasangan.
 *   - Pola bahasa: "I feel ... because ..." (dengan alasan konkret universal)
 *   - Pembuka hook: ekspresi guru → siswa guess emosi (no pressure).
 *   - Inti: model 7 emosi + scenario-driven pattern practice + pair roleplay.
 *   - Closure: jembatan rumah — perhatian emosi natural di rumah (tanpa present expose).
 *
 * SCOPE DESIGN:
 *   - Emosi: 7 item (happy, sad, angry, scared, tired, excited, bored)
 *   - Pola: "I feel ... because ..." + "How do you feel? Why?"
 *   - Vocab total: 10 item (7 emotions + "I feel", "how do you feel", "because")
 *
 * PENERAPAN PATTERN INKLUSIVITAS (CONTEXT.md §Pattern Inklusivitas):
 *   - Pattern 1: Scripted micro_script konkret — guru baca script, tidak improvisasi.
 *   - Pattern 2: Skip aktivitas personal expose — semua scenario universal,
 *     tidak ada "cerita emosi pribadi ke kelas".
 *   - Pattern 5: Fallback sensitif ketat — jika siswa terlihat sedih/nervous,
 *     guru stop activity & lanjut tenang, no forced sharing.
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - docs/sesi-m9/tp-14.js (format reference)
 *   - CONTEXT.md §Pattern Inklusivitas
 */

const TP_15 = {

  id       : 'tp-15',
  nomor    : 15,
  kelas    : 2,
  nama     : 'Feelings and Emotions',
  tema     : 'Diri Sendiri dan Perasaan',
  deskripsi: `Peserta didik belajar mengungkapkan perasaan dan emosi dasar dalam
    bahasa Inggris menggunakan pola "I feel ... because ..." dengan konteks
    universal yang inklusif. Fokus pada identification dan pattern practice,
    bukan personal expose.`,

  indikator: [
    'Peserta didik dapat menyebut dan mengenali 7 emosi dasar (happy, sad, angry, scared, tired, excited, bored) dengan lafal yang benar.',
    'Peserta didik dapat mengungkapkan perasaan menggunakan "I feel ... because ..." dan merespons "How do you feel?" dengan struktur yang tepat.',
    'Peserta didik dapat merespons scenario universal dengan emosi yang sesuai dalam roleplay berpasangan.',
  ],

  vocab: ['happy', 'sad', 'angry', 'scared', 'tired', 'excited', 'bored', 'I feel', 'how do you feel', 'because'],

  persiapan: ['Kartu emosi bergambar 7 emosi', 'Scenario card (opsional)'],

  media: [
    {
      id                 : 'media-kartu-emosi',
      nama               : 'Kartu Emosi Bergambar (7 Emosi)',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'tp-15-v1.pdf',
      pdf_halaman        : 1,
      reusable_lintas_tp : true,
      keterangan         : '7 kartu A5 berisi ekspresi wajah anak (happy, sad, angry, scared, tired, excited, bored) — ilustrasi netral & beragam (usia, penampilan, inklusi). Bisa dipakai ulang di TP-TP lain tentang emosi.',
    },
  ],

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp15-pembuka-meaningful',
          tipe  : 'meaningful_link',
          judul : 'Emosi di Sekitar Kita — Hook',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa connect dengan emosi sebagai hal natural yang setiap orang alami.',
          vocab_target      : [],

          durasi_target_detik : 180,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Good morning! Today we learn about feelings. Everyone has feelings!"',
            selama  : `Guru paparkan emosi natural yang terjadi sehari-hari (bukan cerita pribadi siswa):
"When you play with friends, you feel happy. ✓
When it rains and you cannot play outside, maybe you feel sad. ✓
When someone takes your toy, you might feel angry. ✓
When you see something scary (like a big dog), you might feel scared. ✓
When you run and play, you might feel tired. ✓
When you win a game, you feel excited. ✓
When the lesson is too long and boring, you feel bored. ✓"

Guru: "These are all normal feelings. Everyone feels happy, sad, angry, scared, tired, excited, or bored sometimes. Today we learn these words in English!"`,
            penutup : '"Let us learn to say these feelings in English!"',
          },

          audio_cue: {
            contoh_guru  : 'Everyone has feelings! Happy, sad, angry, scared, tired, excited, bored. We all feel these things!',
            contoh_siswa : '',
            target_vocab : [],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Guru ceritakan scenario dengan bahasa Indonesia jika perlu. Siswa dengarkan dan terima message bahwa semua orang punya perasaan.',
              panjang_speaking: 'Tidak perlu speaking di tahap ini. Cukup dengarkan.',
            },
            normal: {
              bantuan: 'Guru ceritakan dalam Inggris dengan gesture yang jelas. Siswa dengarkan dan identifikasi emosi yang disebutkan.',
              panjang_speaking: 'Boleh menjawab "happy!" atau "sad!" saat guru tanya.',
            },
            tantangan: {
              bantuan: 'Guru tanya siswa: "Kapan kamu merasa happy? Excited?" Siswa jawab dalam Inggris atau Indonesia.',
              panjang_speaking: 'Sebutkan satu scenario & emosi yang terkait.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_sedih_muncul : 'STOP. Jangan lanjut. Guru dekati siswa itu, pastikan dia baik-baik saja. Skip sisa pembuka jika perlu, langsung ke inti yang lebih ringan (modeling emosi positif).',
            kelas_kurang_engaged : 'Tambah gesture berlebihan (exaggerated facial expression). Buat siswa tertawa dengan ekspresi lucu guru.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp15-pembuka-modeling',
          tipe  : 'modeling',
          judul : 'Guru Demo 7 Emosi — Face & Voice',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa mengenal 7 emosi via modeling konkret (ekspresi wajah + suara guru).',
          vocab_target      : ['happy', 'sad', 'angry', 'scared', 'tired', 'excited', 'bored'],

          durasi_target_detik : 300,
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : '"Now watch me! I will show you these feelings with my face and my voice!"',
            selama  : `Guru demo satu emosi per kali:
1. HAPPY — smiley face, voice excited: "I feel happy! Yay!"
2. SAD — sad face, voice slow: "I feel sad... ohhh..."
3. ANGRY — angry face, voice loud: "I feel ANGRY! Hmph!"
4. SCARED — scared face, voice quiet shaky: "I feel scared... oooh..."
5. TIRED — tired face, voice slow: "I feel tired... so sleepy..."
6. EXCITED — excited face, voice very excited: "I feel excited! Wooow!"
7. BORED — bored face, voice flat: "I feel bored... blah..."

Ulangi 7 emosi cepat (3 detik per emosi). Guru tunjuk kartu sambil demo.
Setiap emosi, guru ucap: "[EMOTION]!" — kelas ulang.`,
            penutup : '"You see? Different feelings, different faces and voices!"',
          },

          audio_cue: {
            contoh_guru  : 'Happy! (excited) Sad! (slow) Angry! (loud) Scared! (quiet shaky) Tired! (sleepy) Excited! (very excited) Bored! (flat)',
            contoh_siswa : 'Happy! / Sad! / Angry! / Scared! / Tired! / Excited! / Bored!',
            target_vocab : ['happy', 'sad', 'angry', 'scared', 'tired', 'excited', 'bored'],
          },

          media_dipakai : ['media-kartu-emosi'],

          mode: {
            mudah: {
              bantuan: 'Guru demo 4 emosi utama saja (happy, sad, angry, scared). Cukup ekspresi wajah, tidak perlu voice variation.',
              panjang_speaking: 'Siswa dengarkan dan ulang emosi saja ("happy!"), tidak perlu kalimat.',
            },
            normal: {
              bantuan: '7 emosi, guru demo face + voice. Siswa ulang setiap emosi setelah guru.',
              panjang_speaking: 'Ulang nama emosi setelah guru ucap.',
            },
            tantangan: {
              bantuan: '7 emosi, guru demo cepat atau tunjuk kartu acak. Siswa boleh lead atau buat variasi expression.',
              panjang_speaking: 'Sebutkan emosi atau buat ekspresi sendiri sambil sebutkan nama emosi.',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_tertawa : 'Bagus! Lanjutkan. Humor membantu learning.',
            siswa_malu : 'Guru buat ekspresi lebih ringan/lucu. Jangan hanya serious sad/angry — buat exaggerated dan ketawa bersama.',
            energi_turun : 'Tambah gerakan tubuh (bukan hanya wajah): jump excited, slouch tired, hug scared.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Ceritakan bahwa semua orang punya perasaan — happy, sad, angry, scared, tired, excited, bored. Scenario natural (bermain → happy, kehujanan → sedih, dll).' },
        { tipe: 'audio',     teks: 'Everyone has feelings! Happy, sad, angry, scared, tired, excited, bored. We all feel these things!' },
        { tipe: 'instruksi', teks: 'Demo 7 emosi: ekspresi wajah + suara guru berbeda per emosi. Tunjuk kartu, kelas ulang nama emosi. Ulangi cepat.' },
        { tipe: 'audio',     teks: 'Happy! / Sad! / Angry! / Scared! / Tired! / Excited! / Bored!' },
      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,

      aktivitas: [
        {
          id    : 'tp15-inti-scenario-practice',
          tipe  : 'pair_work',
          judul : 'Scenario-Driven Roleplay — "I Feel ... Because ..."',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa practice pola "I feel ... because ..." via scenario universal (bukan cerita pribadi).',
          vocab_target      : ['happy', 'sad', 'angry', 'scared', 'tired', 'excited', 'bored', 'I feel', 'because'],

          durasi_target_detik : 900,
          durasi_min_detik    : 600,

          micro_script: {
            pembuka : '"Now we practice! I will give you situations. You tell me your feeling!"',
            selama  : `FASE 1 — GURU MODEL SCENARIO + RESPONSE (4 menit):
Guru beri scenario konkret universal, langsung model respons:
Guru: "You won a game! How do you feel?"
Guru (model respons): "I feel excited because I won!"
[Kelas ulang: "I feel excited because I won!"]

Guru: "It is raining. You cannot play outside. How do you feel?"
Guru (model): "I feel sad because I cannot play."
[Kelas ulang: "I feel sad because I cannot play."]

Guru: "You are very tired after running. How do you feel?"
Guru (model): "I feel tired because I ran a lot."
[Kelas ulang: "I feel tired because I ran a lot."]

FASE 2 — PAIR ROLEPLAY (5 menit):
Guru beri scenario card atau verbally. Siswa pasang 2 orang:
Siswa A: "The lesson is very long. How do you feel?" (baca scenario)
Siswa B: "I feel bored because the lesson is long." (respond)
Rotate: Siswa B beri scenario, Siswa A respond.

Scenario yang bagus:
- You found a toy. How do you feel? → happy/excited
- Your friend took your pencil. How do you feel? → angry
- There is a big dog! How do you feel? → scared
- You played a lot. How do you feel? → tired
- The movie is funny. How do you feel? → happy/excited
- The food is yucky. How do you feel? → sad/angry
- (Jangan scenario traumatic atau pribadi: "Your pet died", dll.)

FASE 3 — CIRCLE: GURU TANYA, SISWA RESPOND (3 menit):
Lingkar, guru tanya ulang scenario, siswa respond dengan pola.
Guru: "You win a game. How do you feel?"
Siswa 1: "I feel happy because I win!"
Guru: "The bell rings. School is over. How do you feel?"
Siswa 2: "I feel happy/excited because school is over!"
Fokus: setiap siswa dapat minimal 1 turn.`,
            penutup : '"Wonderful! You can say your feelings in English now!"',
          },

          audio_cue: {
            contoh_guru  : 'You won a game! How do you feel? The lesson is long. How do you feel? Your friend took your pencil. How do you feel?',
            contoh_siswa : 'I feel excited because I won! / I feel bored because the lesson is long! / I feel angry because my friend took my pencil!',
            target_vocab : ['happy', 'sad', 'angry', 'scared', 'tired', 'excited', 'bored', 'because'],
          },

          media_dipakai : ['media-kartu-emosi'],

          mode: {
            mudah: {
              bantuan: 'Guru model lebih banyak (setiap scenario demo 2x). Siswa pair boleh cukup jawab emosi saja: "Happy!" tanpa "because".',
              panjang_speaking: 'Jawab emosi saja ("excited!") atau dengarkan model guru & ulang.',
            },
            normal: {
              bantuan: 'Guru model 1x per scenario. Siswa pair coba ucap "I feel ... because ..." dengan bantuan guru jika lupa.',
              panjang_speaking: 'Ucapkan "I feel [emotion] because [alasan]" sesuai scenario.',
            },
            tantangan: {
              bantuan: 'Siswa dapat scenario baru yang belum dimodel guru. Siswa ciptakan "because" alasan sendiri tanpa prompt.',
              panjang_speaking: 'Buat respons lengkap "I feel ... because ..." tanpa model guru untuk scenario baru.',
            },
          },

          observation: { aktif: true, n_siswa: 4, indikator: ['vocab_use', 'response', 'confidence'], rotasi_priority: 'belum_observed', tag_set: 'standar' },

          fallback: {
            siswa_malu_pair : 'Jangan paksa. Guru pair dengan siswa itu dulu 1-2x, baru pair dengan teman. Atau 3-orang group roleplay.',
            scenario_terlalu_sensitif : 'STOP scenario itu. Ganti dengan scenario netral lain. Contoh: jangan "your parent marah", ganti "your friend tidak main sama kamu" → lebih netral.',
            siswa_sedih_muncul : 'Guru dekati, stop pair work itu. Pindah siswa ke aktivitas observer atau partner guru. Lanjut tenang.',
            waktu_mepet : 'Cukup Fase 1 + 2 saja. Skip Circle.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Model scenario universal: Guru beri situasi (menang game, hujan, dll), model respons "I feel ... because ..." — kelas ulang.' },
        { tipe: 'audio',     teks: 'You won a game! I feel excited because I won! / The lesson is long. I feel bored because it is long!' },
        { tipe: 'instruksi', teks: 'Pair work: Siswa A beri scenario, Siswa B respond "I feel ... because ...". Guru monitor & assist. Rotate 3–4x.' },
        { tipe: 'instruksi', teks: 'Circle: Guru tanya scenario, siswa respond dengan pola lengkap. Setiap siswa dapat giliran minimal 1x.' },
      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp15-penutup-review',
          tipe  : 'review_quick',
          judul : 'Quick Review — 7 Emosi & Pola',
          pm    : 'joyful',

          tujuan_komunikasi : 'Perkuat recall 7 emosi + pola "I feel ... because ..." sebelum closure.',
          vocab_target      : ['happy', 'sad', 'angry', 'scared', 'tired', 'excited', 'bored', 'because'],

          durasi_target_detik : 180,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"One more quick round! Let us remember these feelings!"',
            selama  : `MINI GAME — GURU TUNJUK KARTU, KELAS JAWAB:
Guru tunjuk kartu emosi acak, kelas sebutkan nama emosi:
Guru tunjuk happy → Kelas: "Happy!"
Guru tunjuk scared → Kelas: "Scared!"
Guru tunjuk bored → Kelas: "Bored!"
(3-4 round, cepat tempo)

ALT: GURU DEMO EKSPRESI, KELAS GUESS:
Guru buat ekspresi wajah (happy/angry/tired), kelas tebak emosi.
Tempo: lambat dulu, lalu cepat.

PENUTUP: Guru tanya satu emosi yang mereka ingat paling bagus:
"Which feeling did you like the most today? Excited? Happy? Sad?" — tunjuk kartu.
Beberapa siswa boleh angkat tangan atau hanya gesture/nod.`,
            penutup : '"Perfect! You remember all the feelings!"',
          },

          audio_cue: {
            contoh_guru  : 'What feeling is this? Happy? Sad? Angry? Scared? Tired? Excited? Bored?',
            contoh_siswa : 'Happy! / Sad! / Angry! / Scared! / Tired! / Excited! / Bored!',
            target_vocab : ['happy', 'sad', 'angry', 'scared', 'tired', 'excited', 'bored'],
          },

          media_dipakai : ['media-kartu-emosi'],

          mode: {
            mudah: {
              bantuan: 'Guru tunjuk kartu + sebutkan sendiri dulu. Siswa ulang kata saja.',
              panjang_speaking: 'Dengarkan dan ulang, atau gesture/tunjuk kartu yang benar.',
            },
            normal: {
              bantuan: 'Guru tunjuk, siswa jawab nama emosi. Guru prompt jika lupa.',
              panjang_speaking: 'Sebutkan nama emosi saat guru tunjuk kartu.',
            },
            tantangan: {
              bantuan: 'Kartu acak cepat. Siswa boleh lead game atau tunjuk kartu ke guru/kelas.',
              panjang_speaking: 'Cepat respond atau buat kalimat "I feel happy because ..." tanpa prompt.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun : 'Tambah gerakan: siswa berdiri, tangkap bola, kalimat "I feel..." bersama, lalu duduk.',
            waktu_sangat_mepet : 'Cukup 2 round tunjuk kartu, langsung ke closure.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp15-penutup-closure',
          tipe  : 'closure_reinforcement',
          judul : 'Emosi Natural di Rumah — Closing',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Jembatan rumah: siswa perhatikan emosi natural yang mereka alami, tanpa forced sharing.',
          vocab_target      : [],

          durasi_target_detik : 180,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Before we finish, remember: feelings are everywhere!"',
            selama  : `Guru: "When you go home, you will have feelings.
Maybe you feel happy when you play with your family.
Maybe you feel sad when a toy is broken.
Maybe you feel excited when you eat something yummy.
Maybe you feel bored when you wait.
Maybe you feel tired after school.
All of these are NORMAL. All of these are OK.

Tonight or tomorrow, just NOTICE your feelings. You do not need to tell anyone.
Just think: 'I feel happy.' 'I feel tired.' That is enough.
When you come back to class, you can tell me ONE feeling you noticed — just one!
Is that OK?"`,
            penutup : '"You understand feelings now! Goodbye, feelings experts!"',
          },

          audio_cue: {
            contoh_guru  : 'When you go home, notice your feelings. Happy? Sad? Excited? Tired? Bored? One feeling is enough to remember. Goodbye!',
            contoh_siswa : 'Goodbye, teacher! / I noticed I feel happy! / I noticed I feel tired!',
            target_vocab : ['goodbye'],
          },

          media_dipakai : [],
          mode         : null,
          observation  : { aktif: false },
          fallback     : {
            siswa_sedih_melihat_closure : 'Jangan paksa dia berbicara. Guru dekati, sesekali eye contact gentle, lanjut tenang. Semua anak mendapat validasi: "Semua perasaan OK."',
          },
          advance      : { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Review cepat: Guru tunjuk kartu emosi acak, kelas sebutkan nama. Tempo: lambat → cepat. 3–4 round.' },
        { tipe: 'audio',     teks: 'What feeling is this? Happy! Sad! Angry! Scared! Tired! Excited! Bored!' },
        { tipe: 'instruksi', teks: 'Jembatan rumah: Guru jelaskan bahwa emosi natural terjadi setiap hari. Minta siswa perhatikan emosi mereka (tanpa harus cerita), just notice. Satu emosi sudah cukup untuk diingat.' },
        { tipe: 'audio',     teks: 'Notice your feelings at home. Happy? Sad? Tired? Excited? One feeling is enough. Goodbye, class!' },
      ],
    },

    {
      fase  : 'Penilaian',
      durasi: 6,

      aktivitas: [
        {
          id    : 'tp15-penilaian-validation',
          tipe  : 'observation_validation',
          judul : 'Validate 7 Emosi & Pola "I Feel ... Because ..."',
          pm    : null,

          tujuan_komunikasi : 'Validasi kemampuan siswa mengenal 7 emosi + pola "I feel ... because ..." dalam konteks scenario.',
          vocab_target      : ['happy', 'sad', 'angry', 'scared', 'tired', 'excited', 'bored', 'because'],

          durasi_target_detik : 360,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Sambil siswa bersiap pulang, dekati beberapa siswa yang belum sempat berbicara banyak di Inti. Beri prompt via kartu atau scenario mini.',
            selama  : `Contoh prompt:
1. Tunjuk kartu emosi: "What feeling is this?" (vocab recall)
2. Beri scenario mini: "You won a game. How do you feel?" (pola "I feel...because")
3. Follow-up: "Why do you feel happy?" (validation reason)

Amati:
- Bisa sebutkan nama emosi saat tunjuk kartu?
- Bisa respond "I feel ... because ..." saat scenario?
- Reason yang diberikan masuk akal (logical)?`,
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'What feeling is this? You won a game. How do you feel? Why do you feel happy?',
            contoh_siswa : 'Happy! / I feel excited because I won! / Because I win!',
            target_vocab : [],
          },

          media_dipakai : ['media-kartu-emosi'],
          mode         : null,

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['vocab_use', 'response', 'confidence'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'standar',
          },

          fallback: {
            siswa_pasif : 'Tanya simple: "What feeling is this?" Siswa boleh tunjuk kartu atau gesture. Tidak perlu kalimat penuh.',
            siswa_tidak_ingat_emosi : 'Tunjuk kartu + ucap nama emosi 2x, siswa ulang. Latihan lebih dulu daripada validasi.',
            waktu_mepet : 'Cukup validasi 3 siswa. Fokus: bisa sebutkan 4 emosi + respond "I feel..." 1 scenario minimal.',
            emosi_sensitif_muncul : 'Jangan push. Guru perhatikan siswa itu dari jauh. Setelah pulang, note di sistem untuk follow-up nanti.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Sambil siswa pulang, dekati 3–4 siswa. Tunjuk kartu: "What feeling is this?" atau beri scenario: "You won. How do you feel?"' },
        { tipe: 'instruksi', teks: 'Nilai Listening: memahami "how do you feel?" Speaking: sebutkan nama emosi atau kalimat "I feel ... because ...". Response: emosi yang disebutkan sesuai scenario.' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang masih tertukar nama emosi (happy/excited, sad/bored, dll)? Siapa yang bisa "because" dengan alasan logis? Siapa yang masih diam?' },
      ],
    },

  ],

};

export default TP_15;
