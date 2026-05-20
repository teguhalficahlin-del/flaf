/**
 * =============================================================
 * FLAF — TP 18 (Integrative Project — My World)
 * File: docs/sesi-m13/tp-18.js
 * Format: v4.3 — langkah[] only
 * =============================================================
 *
 * STATUS: UPDATED — langkah[] ditambah field mode (Fase 9)
 *
 * KARAKTER KHAS TP 18:
 *   - Tipe CAPSTONE — penutup Fase A, integrative project + culminating assessment.
 *   - Desain: mandatory presentation (semua siswa) + guru support untuk pemalu.
 *   - Media: template poster standardized (in-class creation, 10 menit).
 *   - Assessment: portfolio-based — presentasi adalah satu-satunya bukti belajar.
 *   - Tone: CELEBRATORY — ini hari terakhir Fase A.
 *   - Closure: Refleksi + applause + goodbye (emotional closure untuk phase).
 *
 * SCOPE DESIGN:
 *   - Poster content: nama → keluarga → rumah → hobi (recycle dari TP 01–17)
 *   - Speaking target: 2–5 kalimat integration dari TP 01–17
 *   - Assessment: Listening, Speaking, Reading (baca poster sendiri)
 *
 * PENERAPAN PATTERN INKLUSIVITAS (CONTEXT.md):
 *   - Pattern 1: Scripted calm tone — guru set expectation aman.
 *   - Pattern 2: Mandatory BUT supported — semua siswa present, guru assist pemalu.
 *   - Pattern 5: Fallback sensitif — guru boleh start kalimat, adjust vocabulary.
 *   - CELEBRATION: Final emotional closure untuk Fase A.
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - docs/sesi-m12/tp-17.js (format reference)
 *   - CONTEXT.md §Pattern Inklusivitas
 */

const TP_18 = {

  id       : 'tp-18',
  nomor    : 18,
  kelas    : 2,
  nama     : 'Integrative Project — My World',
  tema     : 'Proyek Integratif',
  deskripsi: `TP penutup Fase A. Peserta didik mengintegrasikan seluruh kemampuan
    dari TP 01–17 dalam proyek "My World" yang mencakup presentasi personal
    dengan dukungan guru penuh. Format: in-class poster creation + mandatory
    presentation (guru assist untuk pemalu) + celebration + portfolio assessment.`,

  indikator: [
    'Peserta didik dapat membuat poster sederhana yang menampilkan informasi diri (nama, usia), keluarga, rumah, dan hobi menggunakan kalimat-kalimat dari TP 1–17.',
    'Peserta didik dapat mempresentasikan "My World" dalam 2–5 kalimat dengan lafal yang jelas dan dengan dukungan guru jika diperlukan.',
    'Peserta didik dapat merespons pertanyaan sederhana dari guru tentang isi presentasi mereka, serta mendengarkan dan mengapresiasi presentasi teman-teman.',
  ],

  vocab: ['my world', 'this is me', 'my family', 'my house', 'I like', 'every day', 'my hobby', 'present', 'poster', 'project'],

  persiapan: ['Template poster "My World" (1 per siswa, disiapkan di meja terbalik sebelum kelas masuk)', 'Spidol warna atau pensil warna (1 set per siswa)'],

  media: [
    {
      id                 : 'media-poster-template',
      nama               : 'Template Poster "My World" (Standardized)',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'Modul_Ajar_V3_TP18_Integrative_Project_My_World.docx',
      pdf_halaman        : 1,
      reusable_lintas_tp : false,
      keterangan         : 'Template poster A4 folded (atau kartu A5) dengan sections: "My name", "My family", "My house", "My hobby" + space untuk drawing. Pre-printed untuk semua siswa (standardized, fair).',
    },
    {
      id                 : 'media-reference-sentences',
      nama               : 'Reference Sentences — Presentation Support',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'Modul_Ajar_V3_TP18_Integrative_Project_My_World.docx',
      pdf_halaman        : 2,
      reusable_lintas_tp : false,
      keterangan         : 'Kartu support: "Hello! My name is ___. I am ___ years old. I have a ___ family. I live in a house. I like ___ because it is ___." (untuk guru assist jika siswa lupa).',
    },
  ],

  printables: [
    { file: 'tp18-poster-template.png', label: 'Poster Template' },
    { file: 'tp18-reference-card.png',  label: 'Reference Card' },
  ],

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L0 — Greeting
        {
          tipe: 'instruksi', pm: 'mindful',
          teks: 'Berdiri di depan kelas. Ucap: "Good morning, everyone! How are you today?" — tunggu respons kelas. Ucap: "I\'m fine, thank you! Today is a very special day. Are you ready? Let\'s start." Cue kritis: "Today is a very special day" adalah anchor emosional pertama untuk tone capstone — wajib diucapkan. Jika kelas belum fokus: berdiri diam, tunggu, ulangi "Are you ready?" sekali lagi.',
          mode: {
            solo : { teks: 'Guru ucap greeting, tunggu respons, lanjut.', bantuan: '' },
            duo  : { teks: 'Guru ucap greeting, tunggu respons, lanjut.', bantuan: '' },
            grup : { teks: 'Guru ucap greeting, tunggu respons kelas, lanjut.', bantuan: '' },
          },
        },
        { tipe: 'audio', teks: 'Good morning, everyone! How are you today? / I\'m fine, thank you! Today is a very special day. Are you ready? Let\'s start.' },

        // L1 — Set Tone Perayaan
        {
          tipe: 'instruksi', pm: 'mindful',
          teks: 'Berdiri di depan kelas — tenang, senyum lebar. Ucap: "Today — this is the LAST day of Phase A English." [Jeda 3 detik — biarkan kelas merasakan momen. Jeda ini wajib.] Ucap pelan dan hangat, satu kalimat per napas: "Today is not a test. It is a celebration." "You may feel nervous. That is OK." "You may forget words. That is OK." "I will help you." [Stop di sini — tidak perlu kalimat tambahan tentang merayakan atau keberanian.] [Pause — tunggu anggukan atau respons.] Ucap: "Are you ready?" — tunggu respons, lanjut.',
          mode: {
            solo : { teks: 'Ucap set tone script pelan. Jeda 3 detik setelah "last day" wajib. 4 kalimat pendek — stop setelah "I will help you."', bantuan: 'Jika ada siswa terlihat sangat nervous sebelum mulai: dekati diam-diam, kontak mata lembut — "You will do great. I will help you."' },
            duo  : { teks: 'Ucap set tone script pelan. Jeda 3 detik setelah "last day" wajib. 4 kalimat pendek — stop setelah "I will help you."', bantuan: 'Jika ada siswa terlihat sangat nervous sebelum mulai: dekati diam-diam, kontak mata lembut — "You will do great. I will help you."' },
            grup : { teks: 'Ucap set tone script pelan ke seluruh kelas. Jeda 3 detik setelah "last day" wajib. 4 kalimat pendek — stop setelah "I will help you."', bantuan: 'Jika ada siswa terlihat sangat nervous sebelum mulai: dekati diam-diam, kontak mata lembut — "You will do great. I will help you."' },
          },
        },

        // L2 — Demo Template Poster
        {
          tipe: 'instruksi', pm: 'meaningful',
          teks: 'Ambil satu template poster contoh — tunjuk ke kelas, hadap kelas. Ucap: "Look at this. This is the template. Four sections." → Tunjuk Section 1: "My name — write your name here." → Tunjuk Section 2: "My family — write about your family." → Tunjuk Section 3: "My house — write about your house." → Tunjuk Section 4: "My hobby — write about your hobby." Ucap: "Now — I show you what to say." Tunjuk papan (Hello! My name is ___. I have a ___ family. I live in a house. I like ___ because it is ___.) → model sambil tunjuk papan setiap kalimat: "Hello! My name is [nama guru]." [tunjuk papan] "I have a big family." [tunjuk papan] "I live in a house." [tunjuk papan] "I like reading because it is fun!" [tunjuk papan] "That is my world!" Ucap: "Simple. You know all these words. You learned them in Phase A." Cue kritis: tunjuk section per section — bukan bacakan semuanya sekaligus. Template harus terlihat jelas dari belakang kelas. Tunjuk papan setiap kali model kalimat — ini anchor untuk siswa yang lupa struktur. Demo cukup 5 kalimat. Contoh keluarga: "big family" — netral, jangan ganti dengan "happy family" atau "complete family."',
          mode: {
            solo : { teks: 'Tunjuk template section per section (4 section), ucap label tiap section. Model 5 kalimat sambil tunjuk papan.', bantuan: '' },
            duo  : { teks: 'Tunjuk template section per section (4 section), ucap label tiap section. Model 5 kalimat sambil tunjuk papan.', bantuan: '' },
            grup : { teks: 'Tunjuk template section per section (4 section), ucap label tiap section. Model 5 kalimat sambil tunjuk papan ke seluruh kelas.', bantuan: '' },
          },
        },
        { tipe: 'audio', teks: 'Hello! My name is... / I have a big family. / I live in a house. / I like reading because it is fun! / That is my world!' },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 45,

      langkah: [

        // L3 — Pembuatan Poster
        {
          tipe: 'instruksi', pm: 'meaningful',
          teks: 'Ucap: "Now — flip your poster. Face up." [Tunggu semua siswa balik poster — pastikan semua siap sebelum lanjut.] Ucap: "Section 1 — write your name. Start now." [Timer 10 menit dimulai.] Guru circulate sepanjang pembuatan. Checkpoint menit ke-5 wajib: "Check — Section 1 and 2 done? Good. Move to Section 3 and 4." Checkpoint menit ke-7: "2 more minutes. Finish your favorite part." Ucap saat waktu habis: "Time! Posters face down. Look here." Cue kritis: jangan berikan instruksi apapun sambil siswa masih membalik poster — tunggu semua siap. Checkpoint menit ke-5 wajib. "2 more minutes" di menit ke-7 lebih efektif dari timer abstrak untuk kelas 1. Spelling bukan prioritas — drawing + writing keduanya diterima. Guru scribe adalah keputusan benar, bukan kemudahan berlebihan.',
          mode: {
            solo : { teks: 'Ucap flip instruction, tunggu semua siap, timer mulai. Checkpoint menit ke-5 dan ke-7. Circulate — prioritaskan siswa stuck dan freeze.', bantuan: 'Fast finisher: "Draw pictures! Make it beautiful!" | Siswa stuck: dekati, bisik "What is your hobby? Tell me." — guru scribe jika perlu. | Siswa panik: "You are doing great. Take your time." | Scribe support (menit ke-8, poster masih banyak kosong): guru scribe — siswa bicara, guru tulis. | Poster kosong total / freeze: guru pegang poster bersama siswa, Q&A: "What is your name?" → tulis. "What do you like?" → tulis — tidak perlu siswa menulis sendiri. | Jika belum selesai saat waktu habis: lanjut ke presentasi dengan poster yang ada — guru bantu lengkapi saat siswa maju.' },
            duo  : { teks: 'Ucap flip instruction, tunggu semua siap, timer mulai. Checkpoint menit ke-5 dan ke-7. Masing-masing guru circulate separuh kelas — prioritaskan siswa stuck dan freeze.', bantuan: 'Fast finisher: "Draw pictures! Make it beautiful!" | Siswa stuck: dekati, bisik "What is your hobby? Tell me." — guru scribe jika perlu. | Siswa panik: "You are doing great. Take your time." | Scribe support (menit ke-8, poster masih banyak kosong): guru scribe — siswa bicara, guru tulis. | Poster kosong total / freeze: guru pegang poster bersama siswa, Q&A: "What is your name?" → tulis. "What do you like?" → tulis — tidak perlu siswa menulis sendiri. | Jika belum selesai saat waktu habis: lanjut ke presentasi dengan poster yang ada — guru bantu lengkapi saat siswa maju.' },
            grup : { teks: 'Ucap flip instruction, tunggu semua siap, timer mulai. Checkpoint menit ke-5 dan ke-7. Circulate kelas — prioritaskan siswa stuck dan freeze.', bantuan: 'Fast finisher: "Draw pictures! Make it beautiful!" | Siswa stuck: dekati, bisik "What is your hobby? Tell me." — guru scribe jika perlu. | Siswa panik: "You are doing great. Take your time." | Scribe support (menit ke-8, poster masih banyak kosong): guru scribe — siswa bicara, guru tulis. | Poster kosong total / freeze: guru pegang poster bersama siswa, Q&A: "What is your name?" → tulis. "What do you like?" → tulis — tidak perlu siswa menulis sendiri. | Jika belum selesai saat waktu habis: lanjut ke presentasi dengan poster yang ada — guru bantu lengkapi saat siswa maju.' },
          },
        },

        // L4 — Demo Presentasi Guru
        {
          tipe: 'instruksi', pm: 'meaningful',
          teks: 'Ambil poster contoh — berdiri di depan kelas. Ucap: "Watch me. I present first." Pegang poster menghadap kelas → model 5 kalimat sambil tunjuk poster: "Hello! My name is [nama guru]." "I have a big family." "I live in a house." "I like reading because it is fun!" "That is my world! Thank you!" [Guru beri applause untuk diri sendiri — tunggu kelas ikut.] Ucap: "See? Simple. 4–5 sentences. That is all." Ucap: "Now — before we start: when someone finishes, we do this." [tunjuk gesture thumbs up] "Thumbs up — means: I heard you. Well done." [Minta kelas latih thumbs up sekali — tunggu semua respond.] Ucap: "I will start from this side." [tunjuk baris atau deretan pertama.] Cue kritis: demo guru wajib sebelum sesi presentasi dimulai. Guru applause untuk diri sendiri dulu — ini mengajarkan cara kelas merespons. Perkenalkan dan latih thumbs up sebelum sesi dimulai — jangan pertama kali dipakai saat presenter sudah selesai. Urutan dari baris/deretan adalah default — tidak menunggu volunteer. Presentasi dari tempat duduk tetap dihitung penuh.',
          mode: {
            solo : { teks: 'Demo 5 kalimat sambil tunjuk poster. Applause untuk diri sendiri. Perkenalkan thumbs up → latih sekali. Tunjuk urutan baris.', bantuan: '' },
            duo  : { teks: 'Demo 5 kalimat sambil tunjuk poster. Applause untuk diri sendiri. Perkenalkan thumbs up → latih sekali. Tunjuk urutan baris.', bantuan: '' },
            grup : { teks: 'Demo 5 kalimat sambil tunjuk poster. Applause untuk diri sendiri. Perkenalkan thumbs up → latih sekali. Tunjuk urutan baris.', bantuan: '' },
          },
        },
        { tipe: 'respons_siswa', teks: 'Kelas latih thumbs up sekali — semua angkat jempol bersamaan. Tidak dikoreksi, tidak dikonfirmasi secara verbal.' },

        // L5 — Sesi Presentasi
        {
          tipe: 'instruksi', pm: 'joyful',
          teks: 'Ucap ke penonton sebelum presenter pertama: "Posters on lap. Eyes front." [Wajib — poster di tangan penonton adalah distraksi utama.] Siswa presentasi satu per satu — dari tempat duduk atau maju ke depan, fleksibel. Setiap siswa: berdiri atau tetap duduk → pegang poster menghadap kelas → ucap 2–5 kalimat → selesai → guru: "Thank you!" → kelas thumbs up → guru langsung panggil nama berikutnya — tanpa jeda panjang. Batas ±20 detik per presenter — jika melewati ini, guru bantu akselerasi. Monitor energi kelas mulai dari presenter ke-6, bukan ke-10. Jika fokus mulai turun, akselerasi lebih awal: "Quick round — just your name and one hobby. Go!" Guru tidak koreksi grammar. Fokus pada courage dan attempt — bukan perfection. Presentasi dari tempat duduk tetap dihitung penuh.',
          mode: {
            solo : { teks: 'Ucap "Posters on lap. Eyes front." Panggil urut baris. Jaga tempo: ±20 detik per presenter, panggil nama segera setelah thumbs up. Monitor dari presenter ke-6.', bantuan: 'Siswa gugup tapi mau coba: guru berdiri di samping, bisik kalimat pertama — "Hello, my name is…" — tunggu siswa lanjut. | Siswa blank: Q&A singkat — "What is your name?" → "What do you like?" → guru announce: "This is [nama]. [Nama] likes drawing!" → thumbs up → lanjut — tetap dihitung presentasi. | Siswa sangat nervous saat menunggu giliran: dekati sebelum namanya dipanggil — bisik: "I will stand next to you. You will be fine."' },
            duo  : { teks: 'Ucap "Posters on lap. Eyes front." Panggil urut baris. Jaga tempo: ±20 detik per presenter, panggil nama segera setelah thumbs up. Monitor dari presenter ke-6.', bantuan: 'Siswa gugup tapi mau coba: guru berdiri di samping, bisik kalimat pertama — "Hello, my name is…" — tunggu siswa lanjut. | Siswa blank: Q&A singkat — "What is your name?" → "What do you like?" → guru announce: "This is [nama]. [Nama] likes drawing!" → thumbs up → lanjut — tetap dihitung presentasi. | Siswa sangat nervous saat menunggu giliran: dekati sebelum namanya dipanggil — bisik: "I will stand next to you. You will be fine."' },
            grup : { teks: 'Ucap "Posters on lap. Eyes front." Panggil urut baris. Jaga tempo: ±20 detik per presenter, panggil nama segera setelah thumbs up. Monitor dari presenter ke-6.', bantuan: 'Siswa gugup tapi mau coba: guru berdiri di samping, bisik kalimat pertama — "Hello, my name is…" — tunggu siswa lanjut. | Siswa blank: Q&A singkat — "What is your name?" → "What do you like?" → guru announce: "This is [nama]. [Nama] likes drawing!" → thumbs up → lanjut — tetap dihitung presentasi. | Siswa sangat nervous saat menunggu giliran: dekati sebelum namanya dipanggil — bisik: "I will stand next to you. You will be fine."' },
          },
        },
        { tipe: 'darurat', teks: 'Jika waktu tidak cukup untuk semua siswa: "You will present at break time or tomorrow. I promise. No one is left out."' },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,

      langkah: [

        // L6 — Reset Jeda Setelah Presentasi
        {
          tipe: 'instruksi',
          teks: 'Tepuk 1 kali — kelas freeze. Ucap: "Stop. Everyone — well done." [Jeda 3 detik — diam bersama.] Ucap: "You all presented your world. That was brave." [Jeda 2 detik — tidak tanya apa-apa.] Cue kritis: jeda reset ini wajib sebelum celebration — kelas perlu satu momen tenang setelah energi presentasi sebelum masuk puncak perayaan. Dua kalimat saja — tidak lebih. Jangan loncat langsung ke celebration.',
          mode: {
            solo : { teks: 'Tepuk 1 kali, ucap 2 kalimat dengan jeda wajib, biarkan momen diam.', bantuan: '' },
            duo  : { teks: 'Tepuk 1 kali, ucap 2 kalimat dengan jeda wajib, biarkan momen diam.', bantuan: '' },
            grup : { teks: 'Tepuk 1 kali, ucap 2 kalimat dengan jeda wajib, biarkan momen diam.', bantuan: '' },
          },
        },

        // L7 — Celebration
        {
          tipe: 'instruksi', pm: 'joyful',
          teks: 'Ucap: "Now — stand up!" [Kelas berdiri.] Ucap satu kalimat per napas, jeda setelah masing-masing: "You were brave." "You tried." "You spoke English." "That is AMAZING." Ucap: "Now — clap for yourself!" [Guru lead tepuk tangan dengan gesture jelas — tunggu kelas ikut penuh.] Ucap: "And clap for your friends!" [Guru lead tepuk tangan lagi.] [Setelah tepuk tangan kedua: guru angkat tangan ke atas — sinyal tangan turun.] Ucap: "You finished Phase A. All of you. Together." Cue kritis: "Clap for yourself" dulu — baru "clap for your friends." Urutan ini wajib: self-recognition dulu, baru community recognition. Guru lead tepuk tangan dengan gesture jelas — bukan hanya instruksi verbal. Setelah tepuk tangan kedua: sinyal tangan turun sebelum kalimat penutup — supaya loud tidak carry over ke ritual closure.',
          mode: {
            solo : { teks: 'Ucap "stand up", 4 kalimat satu per napas, "clap for yourself" → gesture tepuk, "clap for your friends" → gesture tepuk, sinyal tangan turun, ucap kalimat penutup.', bantuan: '' },
            duo  : { teks: 'Ucap "stand up", 4 kalimat satu per napas, "clap for yourself" → gesture tepuk, "clap for your friends" → gesture tepuk, sinyal tangan turun, ucap kalimat penutup.', bantuan: '' },
            grup : { teks: 'Ucap "stand up", 4 kalimat satu per napas, "clap for yourself" → gesture tepuk, "clap for your friends" → gesture tepuk, sinyal tangan turun, ucap kalimat penutup.', bantuan: '' },
          },
        },

        // L8 — Closure Ritual
        {
          tipe: 'instruksi', pm: 'meaningful',
          teks: '[Tepuk 1 kali — kelas diam.] Ucap: "Repeat after me." Ritual baris per baris — ucapkan satu baris, tunggu kelas ulang, lanjut ke baris berikutnya: → "Thank you, Phase A!" → kelas ulang. → "I learned!" → kelas ulang. → "I tried!" → kelas ulang. → "I was brave!" → kelas ulang. → "Goodbye, Phase A!" → kelas ulang. → "Hello, Phase B!" → kelas ulang. [Jeda 3 detik — diam bersama. Jeda ini wajib — ini emotional closure, bukan transisi ke aktivitas berikutnya.] Ucap: "Well done. See you next time." Cue kritis: ritual wajib baris per baris — jangan diucapkan sekaligus. Guru tidak tambahkan komentar apapun setelah jeda — biarkan momen itu selesai sendiri. Guru yang bicara lagi setelah jeda akan memecah closure.',
          mode: {
            solo : { teks: 'Tepuk 1 kali, ucap "Repeat after me", lakukan 6 baris satu per satu tunggu kelas ulang, jeda 3 detik wajib, tutup dengan "Well done. See you next time."', bantuan: '' },
            duo  : { teks: 'Tepuk 1 kali, ucap "Repeat after me", lakukan 6 baris satu per satu tunggu kelas ulang, jeda 3 detik wajib, tutup dengan "Well done. See you next time."', bantuan: '' },
            grup : { teks: 'Tepuk 1 kali, ucap "Repeat after me", lakukan 6 baris satu per satu tunggu kelas ulang, jeda 3 detik wajib, tutup dengan "Well done. See you next time."', bantuan: '' },
          },
        },
        { tipe: 'respons_siswa', teks: 'Kelas ulang setiap baris satu per satu: "Thank you, Phase A!" / "I learned!" / "I tried!" / "I was brave!" / "Goodbye, Phase A!" / "Hello, Phase B!" — baris per baris, tunggu guru ucapkan dulu.' },
        { tipe: 'audio', teks: 'Thank you, Phase A! / I learned! / I tried! / I was brave! / Goodbye, Phase A! / Hello, Phase B! / Well done. See you next time.' },

      ],
    },

  ],

};

export default TP_18;
