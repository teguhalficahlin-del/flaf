/**
 * =============================================================
 * FLAF — TP C12 (Reading a Menu)
 * File: docs/fase-c-skenario/tp-12-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 6)
 * Kluster: D — Membaca Dunia
 * Jenis: Biasa
 * Source: flaf-c-tp12-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c12 = {

  id        : 'tp-c12',
  nomor     : 12,
  kelas     : 6,
  nama      : 'Reading a Menu',
  tema      : 'Membaca Dunia',
  kluster   : 'D',
  jenis     : 'Biasa',
  deskripsi : '',

  indikator: [
    'Peserta didik dapat membaca teks menu dan mengekstrak tiga jenis informasi: nama makanan, harga, dan deskripsi singkat.',
    'Peserta didik dapat menjawab pertanyaan faktual berdasarkan teks menu (membaca untuk informasi spesifik).',
    'Peserta didik dapat menulis respons terhadap teks menu dalam bentuk pesanan menggunakan kalimat sendiri.',
  ],

  vocab: ['menu', 'price', 'costs', 'spicy', 'sweet', 'savory', 'crispy', 'cold', 'order'],

  persiapan: [
    'Menu Card A (satu per siswa versi A): kartu tercetak atau ditulis tangan dengan tiga item — 1. Nasi Goreng — Rp 15.000 — spicy / 2. Mie Goreng — Rp 12.000 — not spicy / 3. Ayam Goreng — Rp 18.000 — crispy. Dibagikan hanya ke siswa versi A.',
    'Menu Card B (satu per siswa versi B): kartu tercetak atau ditulis tangan dengan tiga item berbeda — 4. Nasi Uduk — Rp 12.000 — savory / 5. Bakso — Rp 10.000 — spicy / 6. Es Teh — Rp 5.000 — sweet and cold. Dibagikan hanya ke siswa versi B.',
    'Complete Menu Table (satu per siswa): tabel enam baris dengan kolom No · Food / Drink · Price · What is it like? — semua baris kosong. Dibagikan bersamaan dengan Menu Card di awal L6.',
    'Tampilan text-anchor di papan: "This is nasi goreng. It costs Rp 15.000. It is spicy." Tetap tampil dari L2 sampai akhir L7. Hapus atau tutup sebelum L8 dimulai.',
    'Catatan persiapan: Menu Card A berisi item 1–3; Card B berisi item 4–6. Penomoran ini dipertahankan di Complete Menu Table.',
  ],

  checklist: [
    'Reactivation L1 adalah bridge mode membaca — tidak ada pertanyaan recall; tiga kalimat saja: "Last time animals. Today — we read first."',
    'Dua pola fungsional baru ("This is..." dan "It costs...") dimodelkan dua kali di L3 — dua item berbeda',
    'L4 menggunakan sample menu berbeda dari Card A dan B — tidak ada preview konten kartu sebelum L6',
    'Menu Card A dan B dibagikan terpisah di L6 — siswa tidak melihat kartu pasangan sebelum pair work selesai',
    'Demo L6 menunjukkan baris 4–6 yang kosong secara konkret: "These three — you cannot fill without asking."',
    'Complete Menu Table terisi lengkap 6 baris sebelum OUTPUT dimulai',
    'OUTPUT menggunakan framing "You have Rp 20.000. What do you order?" — BUKAN "What can you afford?"',
    'Output siswa adalah respons terhadap teks menu — berbeda-beda berdasarkan pilihan dan kombinasi harga',
    'Text-anchor diturunkan sebelum OUTPUT (L8) — Complete Menu Table tetap sebagai scaffold',
    'Guru sudah mendekati minimal 2–3 siswa barisan belakang di L8 atau L9',
  ],

  printables: [],

  energi_map: [
    'L0 ⚪',
    'L1 🟡',
    'L2 🟡',
    'L3 🟡',
    'L4 🟡',
    'L5 🟡',
    'L6 🟡',
    'L7 🟡',
    'L8 🔵',
    'L9 🔵',
    'L10 🟡',
    'L11 🔵',
  ],

  catatan: {
    risiko: [
      'L4: Sample menu di papan harus dihapus setelah L4 selesai — sebelum distribusi Menu Card di L6. Jika tidak dihapus, siswa akan terus merujuk ke sample menu, bukan bertanya ke pasangan.',
      'L6: Urutan pengisian Complete Menu Table sangat penting. Jika siswa A tidak mengisi baris 1–3 dari kartunya sendiri sebelum bertanya ke B, tabel mereka akan kacau.',
      'L8: Siswa yang tidak menyelesaikan Complete Menu Table di L6 tidak akan bisa menulis pesanan di L8. Ijinkan mereka bertanya ke pasangan selama 1 menit tambahan sebelum menulis.',
    ],
    autonomy: [
      'Harga di Menu Card A dan B boleh disesuaikan dengan konteks harga makanan di daerah setempat — yang penting total budget Rp 20.000 masih memungkinkan kombinasi yang beragam.',
      'Nama makanan di kartu boleh diganti dengan makanan lokal yang lebih dikenal siswa.',
      'Budget "Rp 20.000" boleh dinaikkan jika harga makanan lokal lebih tinggi.',
      'Boleh skip L10 (sharing pesanan) jika kelas terlihat puas setelah menulis.',
      'Untuk kelas yang sudah familiar dengan menu Bahasa Inggris: L4 boleh dipersingkat menjadi 2–3 pertanyaan saja.',
    ],
  },

  text_anchor    : 'This is nasi goreng. It costs Rp 15.000. It is spicy.',
  connector_aktif: '— (tidak ada connector baru; semua yang sudah aktif tersedia jika muncul natural; jangan dorong connector apapun)',
  recycle_fase_b : [
    'is [adjective] (TP02, TP09 Fase C)',
    'I like... (TP13 Fase B)',
    'There is / There are... (TP03 Fase B — muncul jika siswa mendeskripsikan menu lebih lanjut)',
  ],

  breakpoints: [],

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Papan sudah bertuliskan text-anchor.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut.
UCAP: "Today — we read."
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
          teks            : `AKSI: Guru berdiri di depan kelas tanpa menunjukkan teks baru.
UCAP: "Last time — you wrote about an animal."
→ Jeda.
UCAP: "One sentence. Who remembers?"
→ Tunggu SATU siswa menyebut kalimat dari tulisan TP11 mereka sendiri.
→ Guru angguk dan terima apapun yang muncul.
UCAP: "Good. Today — we don't write first. We read first."
→ Lanjut ke L2.`,
          bantuan         : null,
          cue             : 'Satu respons sudah cukup — jangan tunggu lebih dari 20 detik. Bridge ke mode membaca lebih penting dari kedalaman reactivation di sini.',
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
UCAP: "Look at the board. This is one item from a menu."
→ Baca text-anchor perlahan, tunjuk setiap kalimat.
👂 LISTEN FIRST — siswa mendengarkan dan membaca papan.

"This is nasi goreng." [tunjuk kalimat 1]
"It costs Rp 15.000." [tunjuk kalimat 2]
"It is spicy." [tunjuk kalimat 3]

UCAP: "Three things. The name. The price. What it is like."
UCAP: "That is how a menu works."`,
          bantuan         : 'Jika siswa tidak memperhatikan papan: ketuk papan dua kali sebelum membaca kalimat berikutnya.',
          cue             : '"The name. The price. What it is like." — tiga kategori ini adalah kerangka kerja membaca menu. Guru menyebutnya secara eksplisit di sini karena siswa belum pernah membaca menu dalam Bahasa Inggris sebelumnya.',
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
          teks            : `AKSI: Guru berdiri di depan kelas. Text-anchor masih di papan.
UCAP: "Now — I will read two items from a menu. Listen."

Item pertama (dari text-anchor):
UCAP: "This is nasi goreng."
UCAP: "It costs Rp 15.000."
UCAP: "It is spicy."

→ Jeda singkat.

Item kedua (item baru):
UCAP: "This is es teh."
UCAP: "It costs Rp 5.000."
UCAP: "It is sweet and cold."

→ Jeda singkat.

UCAP: "'This is...' — the name."
UCAP: "'It costs...' — the price."
UCAP: "'It is...' — what it is like."
→ Tiga pola, tiga kalimat pendek. Tidak lebih dari ini.

AKSI: Kembali ke text-anchor.
🗣 TOGETHER — guru dan siswa baca text-anchor bersama.
UCAP: "Read with me. Ready?"
→ Baca bersama 1×. Cukup.`,
          bantuan         : 'Jika siswa tidak ikut membaca bersama: tunjuk kalimat demi kalimat sambil membaca — siswa biasanya ikut setelah kalimat pertama.',
          cue             : 'Dua pola fungsional baru — "This is..." dan "It costs..." — dimodelkan masing-masing dua kali: sekali pada item pertama, sekali pada item kedua. Ini cukup. Jangan tambahkan item ketiga atau penjelasan tambahan.',
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
          interaction_mode: 'silent_reading',
          teks            : `AKSI: Guru menulis atau menampilkan tiga item sample di papan (bukan dari Menu Card A atau B):
   Soto Ayam — Rp 13.000 — warm and savory
   Jus Jeruk — Rp 8.000 — sweet and fresh
   Nasi Putih — Rp 5.000 — plain

UCAP: "Look at these items. I will ask questions. Find the answer in the menu — read, don't guess."
UCAP: "What is the first item?" → siswa: "Soto Ayam."
UCAP: "How much is it?" → siswa: "Rp 13.000."
UCAP: "What is it like?" → siswa: "Warm and savory."

AKSI: Lanjutkan dengan item kedua dan ketiga — guru tanya, siswa jawab dari papan.
→ Ini guided reading practice: siswa membaca untuk menjawab, bukan mengingat atau menebak.

UCAP: "Good. Now you know how to read a menu."
→ Hapus sample menu dari papan setelah L4 selesai. Text-anchor tetap di papan.`,
          bantuan         : 'Jika siswa menjawab dari ingatan (bukan dari papan): ucap "Find it on the board — read it." Arahkan siswa untuk melihat papan, bukan menerka.',
          cue             : 'Sample menu di L4 berbeda dari Menu Card A dan B — ini mencegah preview konten kartu sebelum INTERACT. Siswa berlatih membaca menu SEBELUM menerima kartu yang sebenarnya.',
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
          id              : 'l5',
          tipe            : 'instruksi',
          interaction_mode: 'silent_reading',
          teks            : `AKSI: Guru menampilkan kembali sample menu dari L4 (atau menu baru yang singkat).
→ Tunjuk item secara acak. Siswa membaca harga dari papan.

UCAP: "What is the price of soto ayam?"
→ Siswa membaca: "Rp 13.000." (dari papan)
UCAP: "Which is cheaper — jus jeruk or soto ayam?"
→ Siswa membandingkan harga dari papan.
UCAP: "How much do you need for both jus jeruk and nasi putih?"
→ Siswa menghitung: "Rp 13.000."

AKSI: Lakukan 3–4 pertanyaan. Siswa selalu membaca dari papan — bukan dari ingatan.`,
          bantuan         : 'Jika siswa menebak harga tanpa membaca: tunjuk papan dan ucap "Find it here first." Tunggu siswa membaca sebelum menjawab.',
          cue             : 'Ini drill membaca dan membandingkan harga — bukan oral call-and-response dari hafalan. Di Kluster D, respons siswa bergantung pada teks, bukan ingatan.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika kelas sudah membaca harga dengan lancar di L4',
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Bagikan Menu Card A dan B — setengah kelas mendapat A, setengah mendapat B. Bagikan juga Complete Menu Table (satu per siswa, semua baris kosong).
UCAP: "Don't show your card to your partner. Keep it to yourself."

AKSI: Demonstrasi — maksimal 2 menit.
👂 LISTEN FIRST — kelas perhatikan dulu.

Guru pegang Card A:
UCAP: "I have Card A — three items."
→ Isi baris 1–3 di Complete Menu Table (tulis di papan).
→ Tunjuk baris 4–6 yang masih kosong.
UCAP: "These three — you cannot fill without asking."
→ Tunjuk satu siswa (yang punya Card B): "What is item 4? How much? What is it like?"
→ Siswa menjawab dari Card B → guru isi baris 4.
UCAP: "Now your turn."

AKSI: Siswa bekerja berpasangan — A dengan B yang berdekatan.
→ Siswa A isi baris 1–3 dari Card A. Lalu tanya B untuk baris 4–6.
→ Siswa B isi baris 4–6 dari Card B. Lalu tanya A untuk baris 1–3.
→ Menu Card masing-masing tetap di tangan sendiri — tidak diperlihatkan ke pasangan.
→ Pertanyaan: "What is item ___? How much is it? What is it like?"
→ Setelah tabel terisi: "Which item is the cheapest? Which is the most expensive?"
→ Waktu total: 5–6 menit.

AKSI: Guru circulate — cek apakah siswa benar-benar bertanya atau menebak.`,
          bantuan         : [
            'Jika siswa tidak tahu pertanyaan apa yang diucapkan: tunjuk baris 4 yang kosong di tabel mereka dan ucap "Ask: What is item 4?" — tunggu siswa meniru pertanyaan itu ke pasangannya.',
            'Jika siswa memperlihatkan kartu ke pasangan: tutup kartu dengan tangan, ucap "Don\'t show — ask." Ulangi instruksi sekali saja.',
          ],
          cue             : '"These three — you cannot fill without asking." — kalimat ini harus diucapkan saat menunjuk baris kosong secara konkret. Ini adalah momen yang membuat gap terasa nyata.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas.
2. Demo ulang: tunjuk baris 4 yang kosong di tabel, ucap "Ask: What is item 4?"
3. Sederhanakan: cukup tanya satu item saja — nama dan harga.
4. Restart — batasi 60 detik.`,
          energi          : '🟡',
          energy_level    : 'focused',
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
          teks            : `AKSI: Setelah pair work selesai, guru bertanya ke kelas.
UCAP: "Who found the cheapest item? What is it? How much?"
→ Tunggu 1–2 siswa menjawab dari tabel mereka.
UCAP: "Who found the most expensive? What is it?"
→ Tunggu 1–2 siswa menjawab.

AKSI: Guru tidak mengoreksi grammar. Angguk dan lanjut.
UCAP (opsional): "Would you order the most expensive? Why or why not?"
→ Ini membuka ruang natural untuk 'because' dari Kluster B — jangan paksa.`,
          bantuan         : 'Jika siswa tidak bisa menjawab: ucap "Look at the Price column in your table. Which number is the smallest?" — bantu siswa membaca tabel mereka sendiri.',
          cue             : 'Pertanyaan "cheapest / most expensive" hanya bisa dijawab setelah tabel terisi lengkap — ini memverifikasi bahwa pair work selesai dengan benar.',
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
          teks            : `AKSI: Hapus atau tutup text-anchor dari papan. Complete Menu Table siswa tetap di meja mereka.
UCAP: "Now — you have Rp 20.000."
UCAP: "Look at your complete menu. Choose what you want to order."
UCAP: "Write two or three sentences."

AKSI: Tunjuk cara memulai:
UCAP: "For example: 'I order nasi goreng. It costs Rp 15.000. It is spicy.'"
→ Ucapkan sekali. Tidak ditulis di papan.
UCAP: "Now you choose — your order, from your menu."

AKSI: Siswa menulis secara individual.
→ Complete Menu Table boleh dilihat dan digunakan sebagai referensi.
→ Waktu: 8–10 menit. Guru tidak mendiktekan pilihan.
→ Beri waktu start 2 menit sebelum circulate.
→ Prioritaskan barisan belakang.
→ Perhatikan: apakah total harga pesanan siswa masih di bawah Rp 20.000? Jika ada yang melebihi: tunjuk tabel, tanya "Is this more than Rp 20.000? Check the prices."`,
          bantuan         : 'Jika siswa freeze: tunjuk tabel mereka di kolom Price dan ucap "Choose one item. Write: I order [name]. It costs..." Tunggu satu kalimat. Tinggalkan.',
          cue             : 'Output bergantung pada makna — siswa membaca harga dari tabel dan membuat keputusan berdasarkan budget. Setiap siswa berpotensi menghasilkan output berbeda karena pilihan makanan dan kombinasi harga berbeda-beda. Ini output yang merespons teks, bukan template yang diisi.',
          darurat         : '⚠ DARURAT — waktu ≤ 5 menit dan sebagian besar siswa baru menulis 1 kalimat:\nUcap: "Two sentences — one item is enough for today." Turunkan target.',
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
UCAP: "Two more minutes. Read your order. Does it make sense? Is it under Rp 20.000?"

Diferensiasi:
- Perlu support: guru dekati, cek tabel siswa bersama-sama, tunjuk satu item yang belum ditulis — "Can you add this? It costs only Rp ___." Tunggu siswa menulis satu kalimat tambahan.
- Sudah bisa: tambah kalimat alasan menggunakan connector dari Kluster B — contoh: "I order mie goreng because it is not spicy." atau "I choose es teh because it is sweet and cheap."

AKSI: Guru circulate — cek total harga siswa, bukan grammar.
→ Jika connector muncul spontan — angguk, tidak perlu komentar.`,
          bantuan         : 'Jika siswa bertanya "boleh pesan lebih dari dua?": ucap "Yes — if the total is still under Rp 20.000." Arahkan siswa untuk menjumlahkan harga dari tabel.',
          cue             : 'Diferensiasi "Sudah bisa" mengacu pada preferensi personal siswa terhadap makanan yang mereka pilih — ini informasi yang berbeda-beda per siswa.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'guru dekati, cek tabel siswa bersama-sama, tunjuk satu item yang belum ditulis — "Can you add this? It costs only Rp ___." Tunggu siswa menulis satu kalimat tambahan.',
            sudahBisa   : 'tambah kalimat alasan menggunakan connector dari Kluster B — contoh: "I order mie goreng because it is not spicy." atau "I choose es teh because it is sweet and cheap."',
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
          teks            : `AKSI: Guru minta 2–3 siswa sukarela membacakan pesanan mereka.
UCAP: "Who wants to share? What did you order? From your seat is fine."
→ Terima siapapun yang mau.

AKSI: Setelah setiap siswa berbagi, guru bertanya ke kelas:
UCAP: "Did anyone order the same thing?"
→ Tangan naik — resonansi natural berdasarkan pilihan makanan.`,
          bantuan         : 'Jika tidak ada yang mau sukarela: guru tanya langsung satu siswa — "What did you order? Nasi goreng or mie goreng?" — pertanyaan pilihan lebih mudah dijawab dari pertanyaan terbuka.',
          cue             : 'Sharing pesanan di sini berbeda dari sharing di TP sebelumnya — siswa bukan menceritakan pengalaman personal, tapi melaporkan keputusan yang dibuat berdasarkan teks. Ini adalah mode baru.',
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
UCAP: "Today you read a menu. In English."
→ Jeda.
UCAP: "The name. The price. What it is like."
→ Jeda.
UCAP: "And you made a choice. Based on what you read."
→ Jeda.
UCAP: "Keep it."

AKSI: Tunjuk tulisan pesanan siswa dan Complete Menu Table di atas meja mereka.
UCAP: "Next time — we read something different."
→ Jeda singkat.
UCAP: "Not food. A school announcement."
→ Preview TP13 yang natural.

UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : '"And you made a choice. Based on what you read." — kalimat ini penting. Ia merangkum mode Kluster D: siswa tidak memproduksi dari pengalaman, mereka merespons dari teks.',
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

export default tp_c12;
