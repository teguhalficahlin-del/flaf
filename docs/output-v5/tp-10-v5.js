/**
 * =============================================================
 * FLAF — TP 10 (Food and Drinks)
 * File: tp-10-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp10-v2.txt
 * Generated: 2026-05-25
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_10 = {

  id       : 'tp-10',
  pdf_ref  : 'Modul_Ajar_V3_TP10_Food_and_Drinks.docx',
  nomor    : 10,
  kelas    : 2,
  nama     : 'Food and Drinks',
  tema     : 'Kehidupan Sehari-hari',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat menyebut nama 10 makanan dan minuman umum dengan lafal yang benar.',
    'Peserta didik dapat mengungkapkan preferensi menggunakan "I like ..." dan "I do not like ..." dengan alasan sederhana.',
    'Peserta didik dapat menanyakan dan merespons preferensi makanan: "Do you like ...? Yes, I do / No, I do not."',
  ],
  vocab    : ['apple', 'banana', 'rice', 'noodles', 'bread', 'egg', 'chicken', 'fish', 'milk', 'water', 'juice', 'like', 'do not like'],
  persiapan: ['Kartu makanan bergambar 10 makanan dan minuman + lembar piring'],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp10-apple.png',           label: 'Apple' },
    { file: 'tp10-banana.png',          label: 'Banana' },
    { file: 'tp10-bread.png',           label: 'Bread' },
    { file: 'tp10-chicken.png',         label: 'Chicken' },
    { file: 'tp10-egg.png',             label: 'Egg' },
    { file: 'tp10-juice.png',           label: 'Juice' },
    { file: 'tp10-milk.png',            label: 'Milk' },
    { file: 'tp10-noodles.png',         label: 'Noodles' },
    { file: 'tp10-plate-worksheet.png', label: 'Plate Worksheet' },
    { file: 'tp10-rice.png',            label: 'Rice' },
    { file: 'tp10-water.png',           label: 'Water' },
  ],

  checklist: [
    '10 kartu printable tersedia sebelum kelas masuk',
    'Lembar piring kosong: 1 per siswa, disiapkan sebelum kelas masuk',
    'Papan tulis: I like ___ · I don\'t like ___ · Do you like ___? Yes, I do. / No, I don\'t. ditulis sebelum kelas masuk',
    'Simbol A/B sudah ditempel di papan sebelum kelas masuk',
    'Layar 0 dilakukan sebelum kelas resmi dimulai',
    'Jika kelas belum fokus di L0: ulangi "Are you ready?" sambil berdiri diam',
    'Jika kelas diam total saat ditanya sarapan di L1: guru jawab sendiri 2x, lanjut',
    'Jika siswa individual diam di L1: guru lanjut tanpa tunjuk — tidak dipaksa, tidak dikomentari',
    'L2: satu tangan tunjuk kartu, satu tangan gestur — bersamaan',
    'Reactivation gelombang 1 dilakukan sebelum gelombang 2 masuk (L4)',
    'Noodles diucapkan 2x jika terasa asing: "Noo-dles. Noodles." (L4)',
    'Juice: bunyi /dʒuːs/, bukan "jus" (L4)',
    'Cue "Now — names only" diucapkan sebelum Fase B Layar 5',
    'Fase C L5: stop setelah 5 kartu — jangan perpanjang speed round',
    'Reset L6 dilakukan — tidak diskip',
    'L6: kelas freeze + jeda 3 detik sebelum lanjut ke struktur',
    'Guru melebih-lebihkan ekspresi suka/tidak suka di L7',
    'L9: urutan wajib — question only → answer only → full dialog → whole-class drill',
    'Marker tubuh kiri/kanan konsisten di L9',
    'Jika waktu ≤10 menit saat L10: skip ke L11 langsung',
    'Demo partner dilakukan sebelum distribusi piring (L10)',
    'Instruksi 3 hal selesai sebelum piring dibagikan (L10)',
    'Piring kosong: lingkari saja, tidak digambar bebas, tidak diwarnai (L10)',
    'Countdown 5 detik dipakai saat siswa lingkari piring (L10)',
    'Stop signal dilatih 1x sebelum "Go" (L10)',
    'Partner practice dibatasi 5 kartu saja (L10)',
    'Checkpoint switch dilakukan di ±90 detik (L10)',
    'Guru tidak koreksi grammar saat practice berlangsung (L10)',
    'Survei oral L11: maksimal 3 item — tidak dihitung detail',
    'Exit ticket: 2 pilihan kartu, 45–60 detik, pilihan siswa sendiri (L12)',
    'Terima kalimat penuh, kata saja, atau lingkaran + jempol di exit ticket (L12)',
    'Retrieval mikro dilakukan sebelum closing (L13)',
    'Setiap siswa sudah produksi minimal 1 kalimat sepanjang sesi',
  ],

  energi_map: [
    'L0 🔵',
    'L1 🟠',
    'L2 🟡',
    'L3 🟠',
    'L4 🟡',
    'L5 🟠',
    'L6 ⚪',
    'L7 🟡',
    'L8 🟠',
    'L9 🟡',
    'L10 🔴',
    'L11 ⚪ → 🟡',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L5 Fase C: stop setelah 5 kartu — jangan perpanjang speed round',
      'L6 Reset: wajib — kelas belum tenang = L7 gagal',
      'L9: urutan wajib — question only → answer only → full dialog → whole-class drill',
      'L10: piring kosong dilingkari cepat (countdown 5 detik) — bukan aktivitas utama',
    ],
    autonomy: [
      'Noodles dan Juice: ucapkan lebih pelan jika terasa asing — jangan tergesa',
      'L1: jika kelas diam total saat ditanya sarapan, guru jawab sendiri 2x lalu lanjut',
      'L1: siswa individual yang diam — lanjut tanpa tunjuk, tidak dikomentari',
      'Jika waktu ≤10 menit di L10: skip ke L11 — langsung survei oral',
      'L10: partner practice dibatasi 5 kartu saja — bukan semua 10',
      'Survei oral L11: maksimal 3 item — tidak dihitung detail',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `"Good morning, everyone! How are you today?" Tunggu respons kelas. "Great! Me too. Are you ready? Let's start." mengunci perhatian kelas sebelum masuk sesi. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.`,
    bantuan: null,
    cue    : 'Layar ini pendek dan wajib. Jangan skip. Fungsinya',
    darurat: null,
    energi : '🔵',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,  // TODO: verifikasi

      langkah: [

        // L1 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berdiri tengah kelas. UCAP: UCAP: "Are you hungry?"
AKSI: Tunggu respons bebas. "What did you eat for breakfast today?" [Tunggu 2–3 respons bebas — boleh Bahasa Indonesia] UCAP: "Me too — listen. This morning I ate…" → Tunjuk diri sendiri: UCAP: "Rice!"
UCAP: "I like rice." [ekspresi senang, jempol naik] "I like rice — say it." → kelas ulang sekali. tunjuk — tidak dipaksa, tidak dikomentari. Jika kelas diam total saat ditanya sarapan: guru jawab sendiri 2x dengan makanan berbeda, lanjut.`,
          bantuan: 'Jika ada siswa individual yang diam: guru lanjut tanpa',
          cue    : 'Guru tidak koreksi apapun di sini. Ini warm-up.',
          darurat: null,
          energi : '🟠',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,  // TODO: verifikasi

      langkah: [

        // L2 — INTI
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST AKSI: Tempel 5 kartu satu per satu: rice — bread — egg — apple — banana Setiap kartu: tunjuk → gestur → nama. Satu detik jeda, lanjut. UCAP setelah 5 kartu terpasang: "Listen. My turn." → AKSI: Gestur makan nasi.
UCAP: "Rice."
→ AKSI: Gestur gigit roti.
UCAP: "Bread."
→ AKSI: Gestur pecah telur.
UCAP: "Egg."
→ AKSI: Gestur gigit apel.
UCAP: "Apple."
→ AKSI: Gestur kupas pisang.
UCAP: "Banana." ada kata lain selain nama makanan.`,
          bantuan: null,
          cue    : 'Satu tangan tunjuk kartu, satu tangan gestur. Tidak',
          darurat: null,
          energi : '🟡',
        },

        // L3 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Now together. I point — you say the name." → Tunjuk rice → bread → egg → apple → banana. → Kelas ucap nama bersama. AKSI: Ulangi sekali lagi, acak 2 kartu. UCAP: UCAP: "Now — with feeling."
UCAP: "I like…" → Tunjuk apple: kelas ucap "I like apple!" [ekspresi senang] → Tunjuk banana: kelas ucap "I like banana!" ulangi kartu itu sekali. "With feeling" = ekspresi wajah, bukan volume keras.`,
          bantuan: 'Jika kelas hanya sebagian ikut: "Everybody. Together." —',
          cue    : 'Guru demo ekspresi senang dulu sebelum kelas ikut.',
          darurat: null,
          energi : '🟠',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI — Reactivation (15–20 detik): "Quick check." → Tunjuk cepat 5 kartu gelombang 1 berurutan — kelas sebut nama saja. → Tidak dikoreksi. Tidak diulang. Langsung lanjut. 👂 LISTEN FIRST Gelombang 2 AKSI: Tempel 5 kartu berikutnya: milk — water — juice — noodles — chicken Setiap kartu: tunjuk → gestur → nama. AKSI: Gestur tuang susu.
UCAP: "Milk."
AKSI: Gestur minum air.
UCAP: "Water."
AKSI: Gestur pegang gelas jus.
UCAP: "Juice."
AKSI: Gestur makan mie dengan sumpit.
UCAP: "Noodles."
AKSI: Gestur gigit ayam.
UCAP: "Chicken." UCAP setelah 5 kartu terpasang: "Listen. My turn." → ulang kelima nama sekali. Noodles." Juice — pastikan bunyi /dʒuːs/, bukan "jus".`,
          bantuan: null,
          cue    : 'Noodles — ucapkan 2x jika terasa asing: "Noo-dles.',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER Fase A — Gelombang 2 saja, lambat: "Together." → Tunjuk milk → water → juice → noodles → chicken. → Kelas ucap nama. Lambat, tidak terburu. Fase B — Campur 10 kartu, medium: "Now — names only." → Tunjuk semua 10 kartu berurutan — medium speed. → Kelas ucap nama saja. Fase C — 5 kartu acak, cepat: "Ready? Fast." → Pilih 5 kartu acak — tunjuk cepat. → Tahan 1 detik sebelum menunjuk kartu berikutnya. ulangi 2x, lanjut.`,
          bantuan: 'Jika kelas lambat di noodles/juice: kurangi kecepatan,',
          cue    : 'Stop setelah 5 kartu — jangan perpanjang speed round.',
          darurat: null,
          energi : '🟠',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — kelas freeze] UCAP: UCAP: "Stop. Hands down. Look at me."
AKSI: Jeda 3 detik, guru berdiri diam. "Sit up. Ready." Layar 7 gagal.`,
          bantuan: null,
          cue    : 'Wajib — jangan skip. Kelas yang belum tenang =',
          darurat: null,
          energi : '⚪',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST AKSI: Tunjuk papan — I like ___. · I don't like ___. UCAP: "Listen. My turn."
AKSI: Tunjuk kartu rice, jempol naik, senyum lebar.
UCAP: "I like rice."
AKSI: Tunjuk kartu egg, ekspresi senang.
UCAP: "I like egg."
AKSI: Tunjuk kartu juice, geleng kepala, ekspresi tidak suka.
UCAP: "I don't like juice." "Listen one more time." — ulangi ketiga kalimat. ekspresi suka dan tidak suka. Tiga contoh dulu, baru kelas produksi.`,
          bantuan: null,
          cue    : 'Ekspresi wajah adalah kunci — guru harus melebih-lebihkan',
          darurat: null,
          energi : '🟡',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Together now." → Tunjuk kartu chicken: "I like…" → kelas: "…chicken!" [ekspresi senang] → Tunjuk kartu banana: "I like…" → kelas: "…banana!" → Tunjuk kartu water: "I don't like…" → kelas: "…water!" [ekspresi tidak suka] → Tunjuk kartu bread: "I don't like…" → kelas: "…bread!" UCAP: "Your turn. Pick one." → Tunjuk kartu acak: "I like…? Or I don't like…?" → Kelas pilih sendiri dan ucapkan. kartu sekaligus — "This one or this one?" — kelas pilih. "I don't like" sendiri untuk 1 kartu. Itu cukup untuk layar ini.`,
          bantuan: 'Jika kelas diam saat diminta pilih sendiri: guru tunjuk dua',
          cue    : 'Production target: kelas bisa pilih "I like" atau',
          darurat: null,
          energi : '🟠',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST AKSI: Tunjuk papan — Do you like ___? Yes, I do. / No, I don't. UCAP: "Listen. Question only first."
UCAP: "Do you like rice?"
AKSI: Badan condong kiri, posisi penanya.
AKSI: Kelas ulang bersama.
UCAP: "Do you like rice?"
AKSI: Lanjut.
UCAP: "Do you like banana?"
AKSI: Kelas ulang bersama.
UCAP: "Do you like banana?" UCAP: "Now — answer only." → Guru: "Yes, I do!" [jempol naik — badan condong kanan] → Kelas ulang: "Yes, I do!" → Guru: "No, I don't." [geleng — badan condong kanan] → Kelas ulang: "No, I don't." UCAP: "Now — together. Full dialog." → Guru [badan kiri]: "Do you like rice?" → Guru [badan kanan]: "Yes, I do!" → Guru [badan kiri]: "Do you like water?" → Guru [badan kanan]: "No, I don't." → Guru [badan kiri]: "Do you like noodles?" → Guru [badan kanan]: "Yes, I do!" UCAP: "I ask — you answer." → "Do you like rice?" → kelas: "Yes, I do!" → "Do you like water?" → kelas: "No, I don't." dialog → whole-class drill. Jangan lompat. Marker tubuh kiri/kanan harus konsisten sepanjang layar ini.`,
          bantuan: null,
          cue    : 'Urutan wajib: question only → answer only → full',
          darurat: null,
          energi : '🟡',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          teks   : `UCAP: "Watch first."
AKSI: Demo dengan 1 siswa sukarela.
UCAP: "You, you."
AKSI: Tunjuk satu siswa maju. Guru [badan kiri]: "Do you like rice?" Siswa: "Yes, I do!" / "No, I don't." Guru: "Do you like banana?" Siswa jawab. "Good. Switch." Siswa [badan kiri]: "Do you like chicken?" Guru jawab. UCAP ke kelas: "That's the game. Ask — answer — switch." Sebelum distribusi — ucapkan 3 hal ini: UCAP: "Partner voice — not shouting."
AKSI: Tunjuk simbol A/B di papan. "A asks first. B answers." UCAP: "Use these 5 cards only."
AKSI: Tunjuk rice, banana, milk, noodles, chicken. DISTRIBUSI piring kosong: Bagikan sekarang — 1 per siswa. Guru tidak bicara instruksi baru saat distribusi. UCAP: UCAP: "Circle the foods you like. Quick — no coloring."
UCAP: "5… 4… 3… 2… 1."
AKSI: Guru tetap di depan. Latih stop signal: UCAP: "When I clap —"
AKSI: Tepuk 1 kali.
UCAP: "— stop." — latih 1x. UCAP: "Now — ask your partner. Go." Checkpoint tengah (±90 detik): [Tepuk 1 kali — freeze] "Switch. Other partner asks now." [Tepuk 1 kali — lanjut] rice?" Tidak hentikan kelas. rule berlaku. Piring kosong adalah bahan bicara — bukan aktivitas utama.`,
          bantuan: 'Pasangan diam total: dekati, bisik — "Ask: Do you like',
          cue    : 'Guru tidak koreksi grammar saat practice. Acceptance',
          darurat: 'Waktu ≤10 menit: skip ke Layar 11 — lewati demo dan partner practice, langsung survei oral.',
          energi : '🔴',
        },

        // L11 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — freeze] UCAP: UCAP: "Stop. Look here."
AKSI: Jeda 2 detik. "Quick survey." → "Do you like rice?" → kelas: "Yes, I do!" [angkat tangan] atau "No, I don't." → "Do you like banana?" → kelas respon. → "Do you like water?" → kelas respon. UCAP: "Wow, many people like rice! Interesting." "many!" atau "only a few!" Fokus tetap di produksi oral, bukan numerasi.`,
          bantuan: null,
          cue    : 'Survei maksimal 3 item. Tidak dihitung detail — cukup',
          darurat: null,
          energi : '⚪ → 🟡',
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
          teks   : `AKSI: Guru pegang 2 kartu — apple dan noodles — tunjuk ke kelas.
UCAP: "Last. Choose one."
AKSI: Jeda sebentar.
UCAP: "Write one sentence — I like ... or I don't like ...."
AKSI: Jeda sebentar.
UCAP: "Choose your card. This one or this one. Write your sentence."
AKSI: Tunjuk kartu apple, lalu tunjuk kartu noodles.
AKSI: Tunggu 45–60 detik.
UCAP: "Show me."
lingkaran di piring dengan jempol naik/turun. Tidak ada koreksi terbuka. siswa sendiri. Tidak diperluas.`,
          bantuan: 'Terima: kalimat penuh, kata saja ("like apple"), atau gambar saja.',
          cue    : 'Exit ticket = 2 pilihan kartu, 1 kalimat, pilihan',
          darurat: null,
          energi : '🟡',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI — Retrieval mikro: "One more time — Do you like noodles?" → Kelas: "Yes, I do!" atau "No, I don't." AKSI: Tunjuk semua 10 kartu cepat — kelas sebut nama bersama. UCAP: "Today — food and drinks. You can say: I like… I don't like… Do you like…? Well done. See you next time."`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_10;
