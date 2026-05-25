/**
 * =============================================================
 * FLAF — TP 8 (My House)
 * File: tp-08-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp08-v2.txt
 * Generated: 2026-05-25
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_08 = {

  id       : 'tp-08',
  pdf_ref  : 'Modul_Ajar_V3_TP08_My_House.docx',
  nomor    : 8,
  kelas    : 1,
  nama     : 'My House',
  tema     : 'Keluarga dan Rumah',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat menyebut nama ruangan utama (bedroom, kitchen, bathroom, living room) dengan lafal yang benar.',
    'Peserta didik dapat menyebut benda-benda umum dalam setiap ruangan menggunakan "There is a ... in the ...".',
    'Peserta didik dapat mendeskripsikan rumah mereka dalam 3–4 kalimat sederhana.',
  ],
  vocab    : ['bedroom', 'kitchen', 'bathroom', 'living room', 'bed', 'table', 'chair', 'sofa', 'there is', 'in the'],
  persiapan: ['Kartu ruangan bergambar 6 ruangan rumah'],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp08-bathroom.png',   label: 'Bathroom' },
    { file: 'tp08-bedroom.png',    label: 'Bedroom' },
    { file: 'tp08-floor-plan.png', label: 'Floor Plan' },
    { file: 'tp08-garage.png',     label: 'Garage' },
    { file: 'tp08-kitchen.png',    label: 'Kitchen' },
    { file: 'tp08-living-room.png',label: 'Living Room' },
  ],

  checklist: [
    'Kartu printable x6 tersedia sebelum kelas masuk (bedroom, kitchen, bathroom, living room, garage, floor plan)',
    'Kartu denah dan kartu ruangan belum ditunjukkan saat L0–L1',
    'Layar 0 dilakukan sebelum kelas resmi dimulai',
    'Jika kelas belum fokus di L0: ulangi "Are you ready?" sambil berdiri diam',
    'Guru model kartu floor plan di L2 sebelum echo ruangan',
    'Micro-pause 2–3 detik antara "Bedroom. Kitchen." dan "Bathroom. Living room." (L2)',
    'Gesture "living room" dilakukan bersamaan dengan menyebut kata (L2/L3)',
    'Mini contrast check bedroom vs bathroom dilakukan sebelum putaran acak (L3)',
    'Putaran pertama lambat dulu — baru putaran kedua lebih cepat (L3)',
    '"Hands on knees. Eyes ready." sebelum retrieval cepat (L4)',
    'Label kartu ditutup saat retrieval (L4)',
    'Tahan kartu 1 detik sebelum menunjuk kelas (L4)',
    'Sequence bedroom → bathroom → bedroom dimasukkan ke putaran retrieval (L4)',
    'Reset tarik napas dilakukan di L5',
    'Gesture konkret di L5: tunjuk kotak ruangan → benda di dalamnya',
    'Gesture "sofa" (duduk santai) dilakukan saat echo L6',
    'Gesture "shower" (mandi cepat) dilakukan saat echo L6',
    'Chunking gesture di L7: tunjuk benda dulu → tunjuk ruangan kemudian (L7)',
    'Pause 2 detik antara model pertama dan kedua (L7)',
    'Demo partner: guru pilihkan benda secara eksplisit — bukan pilihan terbuka (L8)',
    'Guru tetap gesture saat volunteer bicara (L8)',
    'Distribusi kartu dalam diam — instruksi belakangan (L9)',
    'Acceptance rule diterapkan: "Bed — bedroom!" diterima, model ulang saat lewat (L9)',
    'Jika waktu ≤12 menit saat L9: skip ke L11 langsung',
    '"Change voice" untuk pasangan yang sudah selesai lebih cepat (L9)',
    'Contoh kalimat tantangan di SISI papan — tidak dimodelkan full-class (L10)',
    '"Cards down." + tunggu 2 detik sebelum volunteer mulai (L11)',
    'Tunjuk langsung 2–3 siswa — jangan buka sesi tanya (L11)',
    'Jika volunteer freeze: whisper "There is a…" — jangan biarkan diam terlalu lama (L11)',
    'Micro-reset 5 detik setelah presentasi terakhir (L11)',
    'Fleksibilitas L12: 2 kartu + teacher-led choral jika kelas lelah',
    'Pause 2 detik antara retrieval dan sentence di exit ticket (L12)',
    'Transfer ke rumah diberikan (L13)',
    'Kumpulkan semua kartu printable setelah sesi selesai',
    'Catat siswa yang masih tertukar bedroom/bathroom',
    'Catat siswa yang belum bisa produksi "There is a ___ in the ___"',
  ],

  energi_map: [
    'L0 🔵',
    'L1 🔵',
    'L2 🔵',
    'L3 🟡',
    'L4 🟠',
    'L5 ⚪',
    'L6 🟡',
    'L7 🟡',
    'L8 🟡',
    'L9 🟠',
    'L10 🟡',
    'L11 🔴',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L3: contrast bedroom vs bathroom wajib — putaran pertama lambat dulu',
      'L4: tahan kartu 1 detik — cegah tebakan visual awal',
      'L7: chunking gesture wajib — tunjuk benda → ruangan',
      'L9: distribusi diam dulu, instruksi belakangan',
      'L11: "Cards down." + 2 detik sebelum volunteer mulai',
    ],
    autonomy: [
      'L3–L4: bedroom vs bathroom harus dibedakan konsisten — ulang contrast',
      'L9: "change voice" untuk pasangan cepat selesai — lebih aman dari',
      'Jika waktu ≤12 menit di L9: skip ke L11 langsung',
      'L12: 2 kartu + teacher-led choral jika kelas lelah — tetap ada rasa',
    ],
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L0 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Berdiri di tengah kelas. Tangan kosong. Kartu denah dan kartu ruangan belum ditunjukkan. Tunggu semua duduk tenang — buat kontak mata sebelum bicara. UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] "I'm fine, thank you! Today — we talk about your house. Are you ready?" [Tunggu respons — berdiri diam jika kelas belum fokus] dijaga dari sini. Jika kelas belum fokus: ulangi "Are you ready?" sambil berdiri diam.`,
          bantuan: null,
          cue    : 'Jangan tunjukkan kartu denah sebelum Layar 2. Tone calm',
          darurat: null,
          energi : '🔵',
        },

        // L1 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Berdiri di tengah kelas. Tangan kosong. UCAP: "Today — we talk about YOUR HOUSE." "What rooms do you have at home?" [Terima semua jawaban: "Bedroom!" / "Kitchen!" / acungkan tangan / diam] → Angguk dan ulangi singkat: "Bedroom — yes!" "Kitchen — good!" Which one?" [tunjuk satu jari → jari lainnya] koneksi ke vocab, bukan memeriksa kondisi rumah. Jangan evaluasi besar/ kecilnya rumah.`,
          bantuan: 'Jika ada siswa yang diam atau bingung: "Bedroom? Kitchen?',
          cue    : 'Pertanyaan ini terbuka — setiap jawaban valid. Tujuannya',
          darurat: null,
          energi : '🔵',
        },

        // L2 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Ambil kartu floor plan dari meja. Tunjukkan ke kelas dengan dua tangan. UCAP: "Look — this is a house. It has rooms." 👂 LISTEN FIRST — tunjuk tiap kotak di denah satu per satu: UCAP: "Bedroom. Kitchen." ⚡ Micro-pause 2–3 detik. UCAP: "Bathroom." "Living room." [gesture: dua tangan membuka lebar — seperti menunjuk ruang santai] → Kelas menyimak dulu — belum diminta ulang. sesudah. Micro-pause antara bedroom/kitchen → bathroom/living room wajib.`,
          bantuan: null,
          cue    : 'Gesture "living room" dilakukan saat menyebut — bukan',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,  // TODO: verifikasi

      langkah: [

        // L3 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tempel 4 kartu ruangan di papan: bedroom · kitchen · bathroom · living room. 🗣 TOGETHER — tunjuk satu per satu, kelas echo: "Bedroom! Kitchen! Bathroom! Living room!" ⚡ MINI CONTRAST CHECK sebelum putaran acak: Tunjuk bedroom → "Bed-room." Tunjuk bathroom → "Bath-room." → Kelas ulang pelan. Bedakan dulu sebelum retrieval cepat. 🔁 Putaran acak — tunjuk kartu, kelas sebutkan. ⚡ Putaran pertama lambat dulu — baru putaran kedua lebih cepat. "Bath-room. Bed-room. Different!" acak. Putaran pertama lambat — jangan langsung speed.`,
          bantuan: 'Bathroom/bedroom masih tertukar: tunjuk dua kartu berdampingan →',
          cue    : 'Contrast check bedroom vs bathroom wajib sebelum putaran',
          darurat: null,
          energi : '🟡',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tutup label kartu. Tunjuk gambar saja. UCAP: "What room is this?" AKSI: Sebelum speed round: → "Hands on knees." → "Eyes ready." Gesture: tunjuk mata → tunjuk kartu → kelas jawab. → "Wait… look… answer!" → Kelas sebutkan serentak. 2–3 putaran acak. UCAP: "Fast round — go!" ⚡ Tahan kartu 1 detik penuh sebelum menunjuk kelas. Kelas 1 impulsif sering menjawab dari tebakan visual awal — tahan dulu. ⚡ Sengaja tunjuk bedroom → bathroom → bedroom berurutan dua kali. Discrimination diperkuat saat recall, bukan hanya saat echo. ⚡ Sesekali tunjuk 1 siswa cepat — "What room?" — sampling individual. "Bath-room. Bed-room." → lanjut speed round. jangan langsung tunjuk kartu. Bedroom → bathroom → bedroom = wajib masuk sequence.`,
          bantuan: 'Jika masih tertukar: kembali ke contrast check sebentar →',
          cue    : '"Hands on knees. Eyes ready." sebelum speed round —',
          darurat: null,
          energi : '🟠',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Good. Hands down. Take a breath." [tarik napas bersama] "Now — what is INSIDE the rooms? Watch." ⚡ Gesture konkret: tunjuk kotak ruangan di kartu denah → lalu tunjuk gambar benda di dalamnya. Visual relation dulu sebelum vocab benda.`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '⚪',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk kartu bedroom. UCAP: "Bedroom — bed." 🗣 TOGETHER: "Bed!" AKSI: Tunjuk kartu kitchen. UCAP: "Kitchen — table." 🗣 TOGETHER: "Table!" AKSI: Tunjuk kartu living room. UCAP: "Living room — sofa." [gesture duduk santai sekali] 🗣 TOGETHER: "Sofa!" ⚡ Repetisi gesture "sofa/living room" lintas layar membantu retention tanpa aktivitas baru. AKSI: Tunjuk kartu bathroom. UCAP: "Bathroom — shower." [gesture mandi cepat] 🗣 TOGETHER: "Shower." dengan menyebut kata — bukan sesudah. Mini echo sekali saja per benda.`,
          bantuan: null,
          cue    : 'Gesture untuk "sofa" dan "shower" dilakukan bersamaan',
          darurat: null,
          energi : '🟡',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk kartu bedroom. UCAP: "Bedroom." → kelas: "Bedroom." "Bed." → kelas: "Bed." UCAP: "There is…" [tunjuk kartu] "a bed…" [tunjuk gambar kasur] "in the bedroom." [tunjuk kartu ruangan] 🗣 TOGETHER: "There is a bed in the bedroom." UCAP: "Good." ⚡ Pause 2 detik. Processing gap sebelum model kedua. AKSI: Ganti kartu kitchen. UCAP: "There is…" [tunjuk] "a table…" [tunjuk meja] "in the kitchen." [tunjuk kartu dapur] 🗣 TOGETHER: "There is a table in the kitchen." ruangan kemudian. Kalimat terasa dibangun, bukan dihapalkan. Pause 2 detik antara model pertama dan kedua.`,
          bantuan: null,
          cue    : 'Chunking gesture wajib — tunjuk benda dulu, tunjuk',
          darurat: null,
          energi : '🟡',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Ambil kartu living room. Pegang — model sekali: "There is a sofa in the living room." AKSI: Berikan kartu bathroom ke 1 siswa volunteer. UCAP: "Listen first." "Loud enough for your friends." "Say: There is a shower in the bathroom." ⚡ Pilihkan benda secara eksplisit — jangan beri pilihan terbuka. Tujuan demo adalah mekanisme, bukan kreativitas. → Siswa: "There is a shower in the bathroom." ⚡ Saat volunteer bicara — guru tetap gesture: tunjuk benda → tunjuk ruangan. Perhatian kelas ke struktur kalimat, bukan ke siapa yang maju. UCAP: "Two claps for your friend!" ⚡ Tepuk-tepuk — selesai. Langsung lanjut. gesture selama volunteer bicara.`,
          bantuan: null,
          cue    : 'Demo tiga langkah: pegang → tunjuk → ucap. Guru tetap',
          darurat: null,
          energi : '🟡',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: DISTRIBUSI DULU — dalam diam: "Hands still. Wait." Bagikan 2 kartu ruangan acak per pasangan. Tunggu semua kartu sampai. AKSI: Baru instruksi: "Partner A — point to a room. Say: 'There is a ___ in the ___.' Partner B — listen. Then switch." "Two cards each. Go!" "Finished? Do it again — faster! But partner voice." UCAP: "Change voice — robot voice! Slow voice! Tiny voice!" ⚡ Lebih aman daripada tambah task baru atau tukar kartu. ⚡ ACCEPTANCE RULE: pasangan yang hanya bilang "Bed — bedroom!" tetap diterima sementara. Guru model ulang saat lewat tanpa menghentikan flow: Siswa: "Bed — bedroom." Guru: "Yes! There is a bed in the bedroom." → lanjut jalan. ⚡ SCAFFOLD PARSIAL — hanya setelah jeda 2–3 detik atau pasangan benar-benar freeze: Guru: "There is a…" → siswa isi. Jangan terlalu cepat membantu. ⚡ DEMO VOLUME: keras ❌ → pelan ❌ → partner voice ✅ ⚡ STOPPING SIGNAL: Tepuk 1 kali → "Freeze. Eyes here." "3… 2… 1… hands down." → tunggu 2–3 detik → siswa isi → guru lanjut jalan. bukan bersamaan. Acceptance rule berlaku — koreksi saat lewat, bukan berhenti.`,
          bantuan: 'Pasangan diam/freeze: guru pegang kartu, ucap "There is a…"',
          cue    : 'Distribusi kartu diam dulu, instruksi belakangan —',
          darurat: 'Waktu ≤12 menit: skip ke Layar 11.',
          energi : '🟠',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          teks   : `Belum bisa → Sebutkan nama ruangan saja: "Bedroom. Kitchen." Normal → "There is a bed in the bedroom." Tantangan → "In my bedroom, there is a bed and a lamp." ⚡ Contoh kalimat tantangan di SISI papan — tidak dibacakan keras, tidak dimodelkan full-class. Untuk mayoritas kelas 1 biasa, extension ini bonus murni — tidak perlu merasa harus tersentuh.`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🟡',
        },

        // L11 — INTI
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Cards down." ⚡ Tunggu 2 detik — baru volunteer mulai. Benda di tangan = distraksi. AKSI: Tunjuk langsung 2–3 siswa: "You, you." — jangan buka sesi tanya siapa mau maju. ⚡ Sesekali pilih siswa medium-confidence, bukan selalu yang paling aktif. UCAP: "Show your card. Tell us one sentence." → Siswa: "There is a bed in the bedroom." momentum tanpa buat siswa tertekan. UCAP: "Thumbs up for your friend!" serentak. ⚡ MICRO-RESET setelah presentasi terakhir: "Hands down. Take a breath. Sit nicely." — 5 detik. Tunjuk langsung — jangan buka sesi tanya.`,
          bantuan: [
            'Jika volunteer freeze: guru whisper "There is a…" — jaga',
            'Jika tidak ada yang siap: tunjuk 2 siswa bersama — ucapkan',
          ],
          cue    : '"Cards down." + tunggu 2 detik sebelum volunteer mulai.',
          darurat: null,
          energi : '🔴',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L12 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk kartu ruangan di papan — label tertutup. UCAP: "What room?" → Kelas sebutkan serentak. ⚡ FLEKSIBILITAS RUNTIME: Jika kelas masih segar → 4 kartu retrieval + 1 sentence bebas. Jika kelas lelah → cukup 2 kartu, lanjut teacher-led choral sekali: Guru: "There is a bed…" → kelas: "…in the bedroom." Lalu siswa isi penuh sekali lagi — tetap ada rasa "kami bisa". UCAP: "Good job." ⚡ Senyum. Pause 2 detik. AKSI: Tunjuk 1 kartu saja. UCAP: "One sentence. There is a ___ in the ___. Go!" → Siswa serentak — satu kartu yang sama. Pause 2 detik antara retrieval dan sentence — jangan tergesa.`,
          bantuan: null,
          cue    : 'Satu kartu = output terkontrol. Tidak noisy, tidak pecah.',
          darurat: null,
          energi : '🟡',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Tonight — walk around your house." "Point to each room. Say: 'This is the bedroom. This is the kitchen.'" "Can you do that?" → Siswa: "Yes!" UCAP: "Wonderful! You can talk about your house in English now." "Goodbye, everyone! See you next time!" 🗣 TOGETHER: "Goodbye, teacher! See you!" AKSI: Kumpulkan semua kartu printable. AKSI: Catat siswa yang: → Masih tertukar bedroom/bathroom setelah contrast check berulang → Belum bisa produksi pola "There is a ___ in the ___" → Hanya bisa sebut nama ruangan tanpa kalimat`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_08;
