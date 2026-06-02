/**
 * =============================================================
 * FLAF — TP C10 (Weather and What We Wear)
 * File: docs/fase-c-skenario/tp-10-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 5)
 * Kluster: C — Dunia di Luar Rumah
 * Jenis: Biasa
 * Source: flaf-c-tp10-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c10 = {

  id        : 'tp-c10',
  nomor     : 10,
  kelas     : 5,
  nama      : 'Weather and What We Wear',
  tema      : 'Dunia di Luar Rumah',
  kluster   : 'C',
  jenis     : 'Biasa',
  deskripsi : '',

  indikator: [
    'Peserta didik dapat mendeskripsikan dua situasi cuaca dan respons yang sesuai dalam minimal tiga kalimat menggunakan pola When it is [weather], I wear... / So I stay...',
    'Peserta didik dapat menggunakan pasangan connector when...so sebagai kondisi→akibat (exposure pertama).',
    'Peserta didik dapat menggali informasi kebiasaan cuaca pasangan melalui pertanyaan lisan dan menuliskannya di Partner\'s Weather Card.',
  ],

  vocab: ['rainy', 'hot', 'windy', 'cloudy', 'raincoat', 'umbrella', 'jacket', 't-shirt', 'dry', 'cool', 'warm'],

  persiapan: [
    'My Weather Card (satu per siswa): secarik kertas kecil dengan dua kolom — Weather · I wear... / I bring... — dan dua baris untuk dua situasi cuaca berbeda. Diisi siswa di L4. Di awal L6, diletakkan tertutup (menghadap bawah).',
    'Partner\'s Weather Card (satu per siswa): kartu kosong dengan format kolom yang sama — dua baris, semua kosong. Dibagikan tepat sebelum L6 dimulai.',
    'Tampilan text-anchor di papan: tulis sebelum siswa masuk. "When it is rainy, I wear a raincoat. So I stay dry. I also bring an umbrella." Tetap tampil dari L2 sampai akhir L7. Hapus atau tutup sebelum L8 dimulai.',
  ],

  checklist: [
    'when dan so dimodelkan sebagai pasangan kondisi→akibat di L3 — dua kali, dua situasi cuaca; tidak dipisahkan',
    'Satu noticing saja di L3: "When... so... — one situation, one result." — tidak lebih dari ini',
    'Model guru L3 selesai dalam 5 menit — 6 kalimat + 1 noticing + choral read',
    'Framing inklusif diucapkan di L2: "rainy, hot, windy, cloudy — or any weather near you"',
    'My Weather Card terisi sebelum INTERACT dimulai — kolom kedua harus terisi (cek di L4)',
    'Partner\'s Weather Card dibagikan dalam keadaan kosong — My Weather Card tertutup saat pair work (L6)',
    'Text-anchor diturunkan dari papan sebelum OUTPUT (L8) — tidak ada pattern reminder tambahan',
    'Output siswa menggunakan konten dari Weather Card sendiri — bukan replikasi text-anchor Rina',
    'so tidak dipaksakan di OUTPUT — ini exposure, fokus produksi baru di TP17',
    'Guru sudah mendekati minimal 2–3 siswa barisan belakang di L8 atau L9',
  ],

  printables: [],

  energi_map: [
    'L0 ⚪',
    'L1 🟡',
    'L2 🟡',
    'L3 🟡',
    'L4 🟡',
    'L5 🟠',
    'L6 🟠',
    'L7 🟡',
    'L8 🔵',
    'L9 🔵',
    'L10 🟡',
    'L11 🔵',
  ],

  catatan: {
    risiko: [
      'L3: Lima menit adalah batas keras untuk model guru. Jika guru merasa perlu "memastikan siswa mengerti when dan so," itu tanda akan melewati batas. Percayakan pada konteks — dua situasi cuaca yang jelas sudah cukup.',
      'L4: Kolom kedua (I wear... / I bring...) adalah yang paling sering dikosongkan. Cek di menit ke-2 saat circulate — jika banyak yang skip, ucap pengingat: "Don\'t forget what you wear."',
      'L6: Pertanyaan penutup "Do we do the same thing?" membutuhkan waktu ~30 detik untuk dua arah — jangan dipotong karena ini momen paling genuine di skenario ini.',
      'L8: Tanpa pattern reminder di papan, beberapa siswa akan berhenti di kalimat pertama. BANTUAN di L8 (tunjuk kartu, ucap starter) harus digunakan lebih aktif di TP ini dibandingkan TP sebelumnya.',
    ],
    autonomy: [
      'Cuaca dalam model guru (L3) boleh disesuaikan dengan cuaca yang benar-benar relevan untuk daerah tersebut — jika kelas di daerah yang selalu panas, gunakan "hot" dan "very hot" sebagai dua situasi.',
      'Boleh menambahkan satu cuaca lokal yang tidak ada dalam daftar standar — misalnya "foggy" atau "dusty".',
      'Boleh memperpanjang INTERACT (L6) sampai 8 menit jika pertukaran terasa hidup.',
      'Boleh skip L7 (mini-share) jika kelas terlihat antusias untuk langsung menulis setelah INTERACT.',
      'TP10 adalah TP terakhir sebelum TP11 (Animals) yang menutup Kluster C. Tidak ada Panen di Kluster C.',
    ],
  },

  text_anchor    : 'When it is rainy, I wear a raincoat. So I stay dry. I also bring an umbrella.',
  connector_aktif: 'when (pertama muncul di Fase C; exposure TP10; fokus produksi TP14) · so (pertama muncul di TP10; fokus produksi TP17) — keduanya muncul sebagai pasangan kondisi→akibat',
  recycle_fase_b : [
    'When it..., I... (TP10 Fase B)',
    'I also... (pola adverb dasar Fase A/B)',
  ],

  breakpoints: [],

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Papan sudah bertuliskan text-anchor.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut menjawab.
UCAP: "Today — the weather."
→ Tidak perlu diterjemahkan. Lanjut ke L1.`,
    bantuan: null,
    cue    : null,
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 8,

      langkah: [

        {
          id              : 'l1',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru tidak menunjukkan teks apapun — bertanya dari ingatan siswa.
UCAP: "Last time — you described a place near your house or school."
→ Jeda.
UCAP: "Who remembers one sentence from that writing?"
→ Tunggu 2–3 siswa menyebut kalimat dari tulisan TP09 mereka sendiri.
→ Guru tidak mengoreksi — angguk dan terima apapun yang muncul.

AKSI: Setelah 2–3 respons, bridge ke topik hari ini.
UCAP: "Good. Today — the place is the same."
→ Jeda singkat.
UCAP: "But the sky is different."`,
          bantuan         : 'Jika tidak ada yang merespons dalam 5 detik: ucap kalimat model dari TP09 — "There is a market near my house. It is big and busy. Who has a sentence like this from last time?" — tunggu siswa melanjutkan dengan versi mereka sendiri.',
          cue             : 'Bridge "The place is the same, but the sky is different" menghubungkan TP09 (tempat) ke TP10 (cuaca) secara alami — siswa membayangkan tempat yang sudah mereka deskripsikan kemarin, lalu bertanya apa yang terjadi di sana ketika cuaca berubah.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : null,
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l2',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru menunjuk text-anchor di papan.
UCAP: "Look at the board. This is about weather — and what we do."
→ Baca text-anchor perlahan, tunjuk setiap baris.
👂 LISTEN FIRST — siswa mendengarkan dan membaca papan.

"When it is rainy, I wear a raincoat." [tunjuk baris 1]
"So I stay dry." [tunjuk baris 2]
"I also bring an umbrella." [tunjuk baris 3]

UCAP: "This is about rain. But today — you describe your weather."
→ Jeda.
UCAP: "Rainy, hot, windy, cloudy — or any weather near you."
UCAP: "Any weather is valid. Your weather."`,
          bantuan         : 'Jika siswa bertanya "boleh cuaca apa saja?": angguk dan ucap "Yes — hot, rainy, windy, any weather you know." Tidak perlu penjelasan lebih panjang.',
          cue             : 'Framing "any weather near you" penting untuk siswa dari daerah dengan variasi cuaca terbatas. "Hot" dan "cloudy" harus terasa sama validnya dengan "rainy."',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : null,
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 37,

      langkah: [

        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas. Text-anchor masih di papan sebagai referensi.
UCAP: "Now, my turn. Two weather situations."

Situasi pertama:
UCAP: "When it is rainy, I wear a raincoat."
UCAP: "So I stay dry."
UCAP: "I also bring an umbrella."

→ Jeda singkat sebelum situasi kedua.

Situasi kedua (cuaca berbeda):
UCAP: "When it is hot, I wear a t-shirt."
UCAP: "So I feel cool."
UCAP: "I also drink a lot of water."

→ Jeda singkat.

Satu noticing:
UCAP: "When... so... — one situation, one result."
→ Ucapkan sekali. Tidak lebih.

AKSI: Kembali ke text-anchor.
🗣 TOGETHER — guru dan siswa baca text-anchor bersama.
UCAP: "Read with me. Ready?"
→ Baca bersama 1×. Cukup.`,
          bantuan         : 'Jika siswa tidak ikut membaca bersama: tunjuk baris demi baris di papan sambil membaca — siswa biasanya ikut setelah kalimat kedua.',
          cue             : 'Dua situasi cuaca = 6 kalimat total. Satu noticing. Satu choral read. Ini harus selesai dalam 5 menit. Jangan tambahkan situasi ketiga atau elaborasi. 'when' dan 'so' harus selalu muncul sebagai pasangan kondisi→akibat, bukan terpisah.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l4',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Bagikan My Weather Card yang sudah dicetak, atau minta siswa membuat sendiri di kertas kecil dengan dua kolom dan dua baris.
UCAP: "Fill in your card. Two weather situations near you."
UCAP: "What weather do you know? What do you wear or bring?"
UCAP: "Rainy, hot, windy — any weather. Two minutes. Go."
→ Guru diam — biarkan siswa mengisi kartu.

AKSI: Setelah 2 menit, tunjuk 2–3 siswa secara acak.
UCAP: "Quick — read one row. What weather, and what do you wear?"
→ Guru tidak mengoreksi. Angguk dan lanjut.`,
          bantuan         : [
            'Jika siswa tidak tahu cuaca apa yang ditulis: ucap "What is the weather like near your house? Hot? Rainy?" — tunggu siswa menyebut satu kata. Bantu tulis di baris pertama.',
            'Jika siswa tidak tahu kata benda untuk pakaian/perlengkapan: ucapkan beberapa opsi — "raincoat, umbrella, jacket, t-shirt, hat" — biarkan siswa memilih.',
          ],
          cue             : 'My Weather Card ini digunakan di L6 (INTERACT) sebagai sumber informasi. Pastikan setiap siswa sudah mengisi minimal satu baris — kolom kedua ("I wear... / I bring...") harus terisi karena ini yang ditanyakan di pair work.',
          darurat         : '⚠ DARURAT — ada siswa yang masih blank setelah 2 menit:\nDekati, tunjuk baris pertama kolom "Weather," tanya dalam bahasa Indonesia — "Sekarang cuacanya apa?" Bantu isi satu kata.',
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l5',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru ucap weather starter, siswa lanjutkan secara spontan menggunakan kartu mereka.
→ Cepat — tidak ada yang benar atau salah.

"When it is rainy..." → siswa: "I wear a raincoat." / "I bring an umbrella." / "I stay at home."
"When it is hot..." → siswa: "I wear a t-shirt." / "I drink water." / "I use a fan."
"So I stay dry..." → siswa: jawaban natural dari konteks sebelumnya.
"When it is windy..." → siswa: "I wear a jacket." / "I close the window."

AKSI: Lakukan 4–5 starter, cepat, dari barisan berbeda. Tidak ada koreksi.`,
          bantuan         : 'Jika kelas tidak merespons starter pertama: guru jawab sendiri — "I wear a raincoat" — lalu ulangi starter yang sama dan tunjuk satu siswa untuk menjawab.',
          cue             : 'Tujuan drill ini bukan menghafalkan kalimat — tapi memastikan pasangan 'when...' → `I...` sudah terasa natural di mulut siswa sebelum mereka masuk ke pair work dan writing.',
          darurat         : null,
          energi          : '🟠',
          energy_level    : 'active',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 10 menit sebelum INTERACT',
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Bagikan Partner's Weather Card — satu per siswa. Semua kolom kosong.
UCAP: "This card is empty. You cannot fill it alone."
UCAP: "You need to ask your partner."

AKSI: Demonstrasi dengan satu siswa di depan — maksimal 90 detik.
👂 LISTEN FIRST — kelas perhatikan dulu.
Guru tanya ke satu siswa: "What do you wear when it is rainy?" → jawab → isi baris 1 kolom kanan.
"What else do you bring?" → isi.
"What about hot weather — what do you wear?" → isi baris 2.
UCAP: "Now your turn. Ask your partner — fill in the card."

AKSI: Siswa bekerja berpasangan.
→ My Weather Card masing-masing tertutup (menghadap bawah).
→ Siswa A bertanya ke B, isi Partner's Weather Card untuk B.
→ Kemudian B bertanya ke A.
→ Setelah kedua arah selesai: tanya pasangan — "Do we do the same thing in the same weather?"
→ Waktu total: 5–6 menit.

AKSI: Guru circulate — prioritaskan barisan belakang.`,
          bantuan         : [
            'Jika pasangan tidak tahu harus bertanya apa: tunjuk baris pertama kartu dan ucap "What do you wear when it is rainy?" — tunggu siswa meniru pertanyaan itu ke pasangannya.',
            'Jika siswa mengisi kartu tanpa bertanya: tutup kartu dengan tangan, ucap "Ask first. Don\'t guess." Tunjuk ke arah pasangannya.',
          ],
          cue             : 'Pertanyaan penutup "Do we do the same thing?" adalah momen yang paling mungkin menghasilkan genuine curiosity — cuaca yang sama bisa menghasilkan pilihan yang berbeda. Jangan lewatkan momen ini.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas dengan tepukan tangan.
2. Demo ulang dengan 1 pasangan di depan — guru menjadi pasangannya.
3. Sederhanakan: cukup 1 pertanyaan — "What do you wear when it rains?"
4. Restart pair work — batasi 60 detik.`,
          energi          : '🟠',
          energy_level    : 'active',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INTERACT',
          assessment_overlay: {
            recommended: true,
            priority   : 'belum_dinilai',
          },
          interact_contract: {
            gap_type         : 'information',
            artifact_required: false,
            artifact_type    : null,
            collapse_signal  : 'pair diam > 90 detik',
          },
          artifact: null,
        },

        {
          id              : 'l7',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Setelah pair work selesai, guru tunjuk 2–3 pasangan.
UCAP: "Did you find anything different? Same weather — different choices?"
→ Siswa menjawab berdasarkan kartu yang sudah diisi.
→ Contoh: "We both wear a raincoat when it rains." atau "She wears a jacket. I wear a t-shirt."

AKSI: Guru tidak mengoreksi grammar. Angguk dan lanjut.
UCAP (opsional): "Interesting. Why different?"
→ Ini membuka ruang natural untuk 'because' dari Kluster B — jangan paksa, tapi terima jika muncul spontan.`,
          bantuan         : 'Jika siswa tidak bisa menjawab apakah ada perbedaan: ucap "Just read one row from the card — what does your partner wear?" Siswa membacakan fakta, bukan membuat perbandingan.',
          cue             : '"Same weather — different choices" adalah framing yang membuat sharing terasa bermakna, bukan sekadar membacakan kartu.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 12 menit',
          blok            : 'INTERACT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l8',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Hapus atau tutup text-anchor dari papan.
UCAP: "Now — write about your weather. Use your card."
UCAP: "At least three sentences. When it is [weather], you do something. What happens? What else do you bring?"
→ My Weather Card boleh dilihat kembali sekarang.
→ Tidak ada pattern reminder di papan — siswa mengingat pola dari INPUT dan menggunakan kartu mereka sebagai konten.

AKSI: Siswa menulis secara individual.
→ Waktu: 8–10 menit. Guru tidak mendiktekan kalimat.
→ Beri waktu start 2–3 menit sebelum circulate.
→ Prioritaskan barisan belakang.
→ Perhatikan: apakah siswa menulis tentang cuaca dari kartu mereka sendiri, atau menyalin text-anchor Rina? Jika ya: tepuk bahu dan tanya "Is this your weather or Rina's weather?"`,
          bantuan         : 'Jika siswa freeze: tunjuk kartu mereka di baris pertama dan ucap "Start here — When it is [weather], I..." Tunggu siswa menulis satu kalimat. Tinggalkan setelah satu kalimat.',
          cue             : 'Tidak ada pattern reminder di papan. Siswa mengandalkan kartu mereka sebagai konten dan pola dari INPUT sebagai struktur. Output tidak perlu sempurna — kalimat `When it is rainy, I bring an umbrella` tanpa 'so' tetap valid di TP10.',
          darurat         : '⚠ DARURAT — waktu ≤ 5 menit dan sebagian besar siswa baru menulis 1 kalimat:\nUcap: "Two sentences — that is enough for today." Turunkan target dan lanjut ke L9.',
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'OUTPUT',
          assessment_overlay: {
            recommended: true,
            priority   : 'barisan_belakang',
          },
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l9',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Setelah 8 menit, guru memberi sinyal tanpa menghentikan siswa yang masih menulis.
UCAP: "Two more minutes. Read your sentences. Can you add one more?"

Diferensiasi:
- Perlu support: guru dekati, tunjuk baris kedua di kartu siswa, ucap "What about this weather — when it is [weather from row 2]?" Tunggu siswa menulis kalimat tambahan tanpa dikte.
- Sudah bisa: tambahkan kalimat yang menghubungkan cuaca dengan akibat menggunakan 'so' — contoh: "When it is windy, I wear a jacket. So I feel warm outside." Atau tambahkan kalimat pendapat dengan 'because': "I like rainy days because I can stay at home and read."

AKSI: Guru circulate — lihat tulisan siswa tanpa mengoreksi.
→ Jika 'so' muncul spontan — angguk, tidak perlu komentar.
→ Jika 'so' tidak muncul — tidak perlu dipaksakan. Ini exposure, bukan produksi wajib.`,
          bantuan         : 'Jika siswa sudah selesai tapi hanya menulis 2 kalimat: tanya "What else do you bring when it rains?" — tunggu siswa menulis kalimat tambahan sendiri.',
          cue             : 'Diferensiasi "Sudah bisa" menawarkan dua opsi — 'so' sebagai connector baru, atau 'because' sebagai konfirmasi Kluster B. Keduanya valid. Siswa memilih yang paling natural bagi mereka.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'guru dekati, tunjuk baris kedua di kartu siswa, ucap "What about this weather — when it is [weather from row 2]?" Tunggu siswa menulis kalimat tambahan tanpa dikte.',
            sudahBisa   : 'tambahkan kalimat yang menghubungkan cuaca dengan akibat menggunakan 'so' — contoh: "When it is windy, I wear a jacket. So I feel warm outside."',
          },
          flex            : false,
          flex_kondisi    : null,
          blok            : 'OUTPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 9,

      langkah: [

        {
          id              : 'l10',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru minta 2–3 siswa sukarela membacakan 1–2 kalimat dari tulisan mereka.
UCAP: "Who wants to share? One sentence — when and what you wear. From your seat is fine."
→ Terima siapapun yang mau. Tidak perlu berdiri.

AKSI: Setelah setiap siswa berbagi, guru bertanya ke kelas:
UCAP: "Who does the same thing when it rains?"
→ Tangan naik — resonansi natural yang menghubungkan siswa satu sama lain.`,
          bantuan         : 'Jika tidak ada yang mau sukarela: tunjuk siswa yang tadi paling aktif di INTERACT — mereka sudah dalam mode berbicara tentang cuaca.',
          cue             : 'Pertanyaan "Who does the same thing?" lebih menarik dari "Did you understand?" — ini menciptakan komunitas kecil di kelas berdasarkan kebiasaan cuaca yang sama.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 5 menit',
          blok            : null,
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l11',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas.
UCAP: "Today you described weather. What you wear. What you bring."
→ Jeda.
UCAP: "When it changes — you know what to do."
→ Jeda.
UCAP: "Keep it."

AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time — animals."
→ Jeda singkat.
UCAP: "Cats. Birds. Cows. What they do. Where they live."
→ Preview TP11 yang natural dan membuat penasaran.

UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : '"When it changes — you know what to do." adalah kalimat closure yang merangkum TP10 secara fungsional — bukan recap materi, tapi validasi bahwa pengetahuan ini berguna di dunia nyata.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : null,
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

      ],
    },

  ],

};

export default tp_c10;
