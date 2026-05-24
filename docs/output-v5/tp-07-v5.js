/**
 * =============================================================
 * FLAF — TP 7 (My Family)
 * File: tp-07-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp07-v2.txt
 * Generated: 2026-05-24
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_07 = {

  id       : 'tp-07',
  nomor    : 7,
  kelas    : 0,          // TODO: isi manual
  nama     : 'My Family',
  tema     : 'Keluarga dan Rumah',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat menyebut anggota keluarga inti (mother, father, sister, brother, grandmother, grandfather) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan anggota keluarga menggunakan "This is my ..." dalam konteks foto atau gambar.',
    'Peserta didik dapat memperkenalkan keluarga inti dalam 3–4 kalimat sederhana.',
  ],
  vocab    : ['mother', 'father', 'sister', 'brother', 'grandmother', 'grandfather', 'family', 'this is my'],
  persiapan: ['Kartu keluarga bergambar 6 anggota keluarga'],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp07-brother.png',     label: 'Brother' },
    { file: 'tp07-father.png',      label: 'Father' },
    { file: 'tp07-grandfather.png', label: 'Grandfather' },
    { file: 'tp07-grandmother.png', label: 'Grandmother' },
    { file: 'tp07-mother.png',      label: 'Mother' },
    { file: 'tp07-sister.png',      label: 'Sister' },
  ],

  checklist: [
    'Kartu printable x6 (mother/father/sister/brother/grandmother/grandfather) tersedia sebelum kelas masuk',
    'Kartu belum ditempel/ditunjukkan saat Layar 0 dan Layar 1',
    'Layar 0 dilakukan sebelum kelas resmi dimulai',
    'Jika kelas belum fokus di L0: ulangi "Are you ready?" sambil berdiri diam',
    'Jika ada siswa diam/tidak nyaman di L1: "That\'s okay — we will learn together"',
    'Guru model 2 kartu (mother + father) di L2 sebelum minta echo',
    'Micro-freeze 3 detik antara mother/father → sister/brother (L3)',
    'Kelas echo satu per satu — bukan serentak sebelum siap (L3)',
    'Semi-echo "Grand—…" dilakukan sebelum full word (L4)',
    'Mini discrimination check grandmother vs grandfather dilakukan (L4)',
    'Half-class putaran kedua dilakukan jika masih tertukar (L4)',
    '"Hands on knees. Eyes ready." sebelum speed round (L5)',
    'Label kartu ditutup saat retrieval cepat (L5)',
    'Micro-reset 15 detik di L6 sebelum masuk produksi kalimat',
    'Vocab dulu → baru kalimat penuh (L7)',
    'Demo partner tiga langkah: pegang → tunjuk → ucap (L8)',
    'Distribusi kartu dalam diam — instruksi belakangan (L9)',
    'Semua siswa pakai kartu printable dari guru — tidak bawa foto dari rumah (L9)',
    'Demo volume partner voice sebelum mulai (L9)',
    'Jika waktu ≤12 menit saat L10: skip ke Layar 12 langsung',
    'Contoh kalimat tantangan di sisi papan — bukan tengah (L10)',
    '"Cards down." sebelum volunteer maju (L11)',
    'Jika tidak ada volunteer: tunjuk 2 siswa bersama — presentasi serentak (L11)',
    'Micro-reset 5 detik setelah presentasi terakhir (L11)',
    'Pause 2 detik antara retrieval dan sentence di exit ticket (L12)',
    'Transfer ke rumah diberikan — termasuk fallback foto/gambar (L13)',
    'Kumpulkan semua kartu printable setelah sesi selesai',
    'Catat siswa yang belum bisa beda sister/brother',
    'Catat siswa yang belum bisa beda grandmother/grandfather',
    'Catat siswa yang belum bisa produksi "This is my ___"',
  ],

  energi_map: [
    'L0 🔵',
    'L1 🔵',
    'L2 🔵',
    'L3 🟡',
    'L4 🟡',
    'L5 🟠',
    'L6 ⚪',
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
      'L3: micro-freeze 3 detik antara mother/father → sister/brother wajib',
      'L4: semi-echo "Grand—…" + discrimination check wajib sebelum lanjut',
      'L5: "Hands on knees. Eyes ready." sebelum speed round — jangan langsung tunjuk',
      'L9: distribusi kartu diam dulu, instruksi belakangan — bukan bersamaan',
      'L11: "Cards down." sebelum volunteer maju — kartu di tangan = distraksi',
      'L12: pause 2 detik antara retrieval dan sentence — jangan tergesa',
    ],
    autonomy: [
      'Persingkat L3–L4 jika kelas sudah kenal vocab keluarga',
      'Jika waktu ≤12 menit di L10: skip ke L12 langsung',
      'L11: jika tidak ada volunteer, tunjuk 2 siswa bersama — ucapkan serentak',
      'L9: jika kelas besar, bagikan kartu ke baris/kelompok secara bergilir',
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
          teks   : `AKSI: Berdiri di tengah kelas. Tangan kosong. Kartu disimpan di meja. Tunggu semua siswa duduk dan tenang — buat kontak mata sebelum bicara. UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] "I'm fine, thank you! Today is a special day. Are you ready?" [Tunggu respons — berdiri diam jika kelas belum fokus] Jangan tergesa masuk ke Layar 1. Jika kelas belum fokus: ulangi "Are you ready?" sambil berdiri diam.`,
          bantuan: null,
          cue    : 'Tone calm dijaga dari sini — TP 07 bertumpu pada koneksi personal.',
          darurat: null,
          energi : '🔵',
        },

        // L1 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Berdiri di tengah kelas. Tangan kosong. Fokus ke kontak mata dan energi kelas. UCAP: "Today — we talk about FAMILY. Who is at home with you?" [Beberapa siswa akan spontan menjawab: "Mother!" / "Grandmother!" / "My sister!"] → Terima semua jawaban. Angguk dan lanjut. "That's okay — we will learn together." jawaban valid. Tujuan: membuka koneksi, bukan memeriksa struktur keluarga.`,
          bantuan: 'Jika ada siswa yang diam atau ekspresi tidak nyaman: jangan paksa.',
          cue    : 'Jangan tunggu jawaban serentak. Pertanyaan ini terbuka — setiap',
          darurat: null,
          energi : '🔵',
        },

        // L2 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Ambil kartu mother dari meja. Tunjukkan ke kelas. UCAP: "Look. This is my mother." 👂 LISTEN FIRST — Pelan. Jangan minta siswa ulang dulu. AKSI: Ambil kartu father. UCAP: "This is my father." "I love my family!" perlu tekanan intonasi besar. Dua kartu saja di Layar ini — jangan tempel dulu.`,
          bantuan: null,
          cue    : 'Kalimat terakhir adalah emotional flavour — ucapkan hangat, tidak',
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
          teks   : `AKSI: Tempel 4 kartu di papan: mother · father · sister · brother. 👂 LISTEN FIRST — Ucapkan semua 4 dulu sebelum kelas meniru: UCAP: "Mother. Father." ⚡ MICRO-FREEZE — "Hands down. Look." Jeda 3 detik. Baru lanjut. UCAP: "Sister. Brother." UCAP: "Ready? Together — Mother!" 🗣 TOGETHER — Kelas echo satu per satu. Tunjuk kartu saat mengucapkan. "Brother = boy." [tunjuk kartu brother] Jangan minta echo serentak sebelum kelas mendengar semua 4 kata.`,
          bantuan: 'Sister/brother tertukar: "Sister = girl." [tunjuk kartu sister]',
          cue    : 'Micro-freeze 3 detik antara mother/father → sister/brother wajib.',
          darurat: null,
          energi : '🟡',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tempel 2 kartu tambahan: grandmother · grandfather. UCAP: "Listen first — Grandmother." [jeda 2 detik] "Grandfather." 🗣 TOGETHER — Semi-echo suku kata: "Grand— ... mother!" → kelas ikut "Grand— ... father!" → kelas ikut ⚡ MINI DISCRIMINATION CHECK: Tunjuk kartu cepat — "Grandmother?" → tunjuk kartu lain — "Grandfather?" ⚡ Putaran kedua — opsi half-class: Sisi kiri → "Grandmother" Sisi kanan → "Grandfather" Bantu clarity tanpa semua serentak. AKSI: Tunjuk semua 6 kartu acak — kelas sebutkan bersama 2 putaran. jangan skip. Discrimination check wajib sebelum masuk Layar 5.`,
          bantuan: 'Masih tertukar: ulang semi-echo "Grand—…" sekali lagi sebelum lanjut.',
          cue    : 'Semi-echo "Grand—…" penting untuk grandmother/grandfather —',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tutup label kartu. Tunjuk gambar saja. UCAP: "What is this?" → Kelas sebutkan serentak. ⚡ Acak urutan — bukan urutan tempel. AKSI: Sebelum speed round: → "Hands on knees." → "Eyes ready." Gesture: tunjuk mata dulu → baru tangan ke kartu. → "Wait… look… answer!" UCAP: "Fast!" — percepat 2–3 putaran terakhir. jangan langsung tunjuk kartu.`,
          bantuan: 'Jika diam: buka label setengah → kelas bantu → tutup lagi → coba ulang.',
          cue    : '"Hands on knees. Eyes ready." sebelum speed round —',
          darurat: null,
          energi : '🟠',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Okay — hands down. Take a breath." [tarik napas bersama] "Now — we make sentences. Watch me first." ⚡ Micro-reset 15 detik sebelum produksi kalimat.`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '⚪',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Ambil kartu mother. UCAP: "Mother." → Siswa: "Mother." UCAP: "This is my mother." 🗣 TOGETHER: "This is my mother." AKSI: Ganti kartu father. UCAP: "Father." → Siswa: "Father." UCAP: "This is my father." 🗣 TOGETHER: "This is my father." bangun bertahap agar kelas merasakan strukturnya.`,
          bantuan: null,
          cue    : 'Vocab dulu → baru kalimat. Jangan langsung model kalimat penuh —',
          darurat: null,
          energi : '🟡',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Ambil kartu grandfather. Pegang — model sekali: "This is my grandfather." AKSI: Berikan kartu ke 1 siswa volunteer. UCAP: "Hold. Show. Say it." → Siswa: "This is my grandfather." UCAP: "Two claps for your friend!" ⚡ Tepuk-tepuk — selesai. Langsung lanjut. perpanjang demo — kelas perlu segera pegang kartu sendiri.`,
          bantuan: null,
          cue    : 'Demo hanya tiga langkah: pegang → tunjuk → ucap. Jangan',
          darurat: null,
          energi : '🟡',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: DISTRIBUSI DULU — dalam diam: "Hands still. Wait." Bagikan 2–3 kartu printable acak per pasangan (bukan full set). Tunggu semua kartu sampai. AKSI: Baru instruksi: "Partner A — pick one card. Show. Say: 'This is my ___.' Partner B — listen. Then switch." "Three cards each. Go!" "Finished? Do it again — faster!" ⚡ DEMO VOLUME: Guru demo terlalu keras ❌ → terlalu pelan ❌ → partner voice ✅ ⚡ Guru jalan keliling. Koreksi hanya jika vocab salah total. ⚡ STOPPING SIGNAL: Tepuk 1 kali → "Freeze. Eyes here." Baru: "3… 2… 1… hands down." siswa satunya meniru. Semua siswa pakai kartu printable dari guru — tidak perlu bawa foto dari rumah.`,
          bantuan: 'Pasangan diam: guru pegang kartu, model ke salah satu siswa →',
          cue    : 'Distribusi kartu diam dulu, instruksi belakangan — bukan bersamaan.',
          darurat: null,
          energi : '🟠',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          teks   : `⚠ DARURAT — Waktu ≤12 menit: skip ke Layar 12. Belum bisa → Sebutkan vocab saja. Boleh tunjuk kartu tanpa kalimat. Normal → "This is my mother. This is my father." Tantangan → "This is my mother. She is kind." "This is my brother. He is funny." ⚡ Contoh kalimat tantangan ditempel di SISI papan — bukan tengah. Extension opsional, bukan fokus kelas.`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🟡',
        },

        // L11 — INTI
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Cards down. Eyes here." AKSI: Panggil 2–3 siswa volunteer maju. Pegang kartu pilihan mereka. UCAP: "Show the card. Tell us: This is my ___." → Siswa: "This is my mother. This is my sister." UCAP: "Everyone — thumbs up for your friend!" presentasi serentak. ⚡ MICRO-RESET setelah presentasi terakhir: "Hands down. Take a breath. Sit nicely." 5 detik — sebelum masuk exit ticket.`,
          bantuan: 'Jika tidak ada yang mau maju: tunjuk dua siswa bersama —',
          cue    : '"Cards down." sebelum volunteer maju — kartu di tangan = distraksi.',
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
          teks   : `AKSI: Tempel kembali semua 6 kartu di papan. Tutup label. UCAP: "Last check — I point, you say. Ready?" AKSI: Tunjuk acak 6 kartu — kelas sebutkan serentak. UCAP: "Good." ⚡ Pause 2 detik. AKSI: Tunjuk 1 kartu saja. UCAP: "One sentence. This is my ___. Go!" → Siswa serentak — satu kartu yang sama. Pause 2 detik antara retrieval dan sentence — jangan tergesa.`,
          bantuan: null,
          cue    : 'Satu kartu = output terkontrol. Tidak noisy, tidak pecah.',
          darurat: null,
          energi : '🟡',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Tonight — if you see your family at home, point to them." "Say: 'This is my mother. This is my father.'" "Boleh juga tunjuk foto, atau gambar siapa saja yang kamu sayangi." UCAP: "Can you try that?" → Siswa: "Yes!" UCAP: "Excellent! You can talk about your family in English now." "Goodbye, everyone! See you next time!" 🗣 TOGETHER: "Goodbye, teacher! See you!" AKSI: Kumpulkan semua kartu printable. AKSI: Catat siswa yang: → Belum bisa beda sister/brother → Belum bisa beda grandmother/grandfather → Belum bisa produksi pola "This is my ___"`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_07;
