/**
 * =============================================================
 * FLAF — TP C15 (Reading: Short Story)
 * File: docs/fase-c-skenario/tp-15-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 6)
 * Kluster: D — Membaca Dunia
 * Jenis: Kompleks
 * Source: flaf-c-tp15-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c15 = {

  id        : 'tp-c15',
  nomor     : 15,
  kelas     : 6,
  nama      : 'Reading: Short Story',
  tema      : 'Membaca Dunia',
  kluster   : 'D',
  jenis     : 'Kompleks',
  deskripsi : `TP Kompleks kedua di Kluster D.
Siswa membaca separuh cerita (Card A atau Card B), lalu berbagi secara verbal
ke pasangan untuk merekonstruksi cerita lengkap.
Past tense production pertama kalinya tentang karakter fiksi.
Kriteria Kompleks: past tense production, reading + writing, integrasi skill di L7, inferensi konteks.`,

  indikator: [
    'Peserta didik dapat membaca separuh cerita dan menceritakannya secara verbal ke pasangan menggunakan bahasa sendiri.',
    'Peserta didik dapat menulis cerita lengkap dalam past tense menggunakan pola yang sudah dikenal.',
    'Peserta didik dapat menggunakan connector then untuk menghubungkan peristiwa dalam narasi.',
  ],

  vocab: ['market', 'vegetables', 'carry', 'walk', 'happy', 'together'],

  persiapan: [
    'Story Card A (satu per siswa versi A): kartu tercetak atau ditulis tangan berisi — "Last Sunday, Budi went to the market. He bought vegetables. Then he met his friend, Sari." Dipegang siswa selama INTERACT; tidak diperlihatkan ke pasangan.',
    'Story Card B (satu per siswa versi B): kartu terpisah berisi — "She helped him carry the vegetables. They walked home together. They were happy." Dipegang siswa selama INTERACT; tidak diperlihatkan ke pasangan.',
    'Teks cerita lengkap di papan (6 kalimat): ditulis atau ditampilkan setelah L7 selesai — tepat sebelum L8 atau L9. Ditampilkan sebagai verifikasi + scaffold OUTPUT.',
    'Text-anchor di papan (dua kalimat pertama): "Last Sunday, Budi went to the market. He bought vegetables." — tampil dari L2.',
    'Catatan distribusi: Card A ke setengah kelas (barisan kiri atau nomor ganjil), Card B ke setengah lainnya.',
  ],

  checklist: [
    'L1 menggunakan pola Kluster D: "Last time you read instructions. One sentence. Who remembers?" → satu kalimat dari TP14 → "Today — a story."',
    'Distribusi kartu: Card A ke setengah kelas, Card B ke setengah lainnya — setiap pasangan terdiri dari satu siswa A dan satu siswa B',
    'Past tense noticing di L4: MAKSIMAL dua kata ("went" dan "bought") — tidak ada tabel, tidak ada drill',
    'Demo L7: guru berbicara DARI kartu, tidak MENUNJUKKAN kartu — "Don\'t show — tell" diucapkan eksplisit',
    'Story Card tidak diperlihatkan ke pasangan selama L7 — informasi hanya ditransfer secara verbal',
    'Teks cerita lengkap (6 kalimat) ditampilkan di papan sebelum atau saat OUTPUT (L8/L9) — konsisten Kluster D',
    'Output siswa menggunakan past tense minimal sekali — kalimat sendiri, bukan menyalin verbatim',
    'Preview L12: "Next time — we write. Not instructions. Not a story. Your own response. About what you read." — tanpa kata "Panen"',
    'Guru sudah mendekati minimal 2–3 siswa barisan belakang di L9 atau L10',
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
    'L8 🟡',
    'L9 🔵',
    'L10 🔵',
    'L11 🟡',
    'L12 🔵',
  ],

  catatan: {
    risiko: [
      'L3: Distribusi kartu harus bergantian A-B — jika dua siswa A berpasangan, INTERACT collapse.',
      'L4: Risiko terbesar di TP15 adalah past tense noticing yang "merayap" menjadi grammar lesson. Dua kata noticing, dua kalimat — stop.',
      'L7: "Don\'t show your card" harus diucapkan sebelum pair work dimulai dan diperkuat jika terlihat ada siswa yang menunjukkan kartu.',
      'L9: Teks cerita lengkap di papan bisa menjadi "teks yang disalin." Monitor saat circulate.',
    ],
    autonomy: [
      'Nama "Budi" dan "Sari" boleh diganti dengan nama yang lebih relevan untuk kelas.',
      'Topik cerita boleh disesuaikan dengan konteks lokal selama cerita tetap 6 kalimat dengan struktur awal + akhir yang memungkinkan info gap.',
      'Jika kartu fisik tidak bisa disiapkan: tulis kalimat 1–3 di papan kiri dan kalimat 4–6 di papan kanan.',
      'Boleh memperpanjang L7 sampai 9 menit jika pair exchange terasa hidup.',
    ],
  },

  text_anchor    : 'Last Sunday, Budi went to the market. He bought vegetables.',
  connector_aktif: 'then · and — tersedia untuk produksi bebas dalam narasi; tidak ada connector baru',
  recycle_fase_b : [
    'Yesterday I... / Last week I... → Last Sunday, Budi... (TP05 Fase B)',
    'He has... / She has... → He bought / She helped (TP02 Fase B)',
    'They live / They eat → They walked / They were (TP09 Fase B)',
  ],

  breakpoints: [],

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Text-anchor sudah tampil di papan.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut.
UCAP: "Today — a story."
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
UCAP: "Last time you read instructions."
→ Jeda.
UCAP: "One sentence. Who remembers?"
→ Tunggu SATU siswa menyebut kalimat dari TP14.
→ Guru angguk dan terima.
UCAP: "Good. Today — we read something different."
UCAP: "A story."
→ Lanjut ke L2.`,
          bantuan         : null,
          cue             : 'Satu respons sudah cukup — jangan tunggu lebih dari 20 detik.',
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
          interaction_mode: 'silent_reading',
          teks            : `AKSI: Guru menunjuk text-anchor di papan.
UCAP: "Look at the board. This is the beginning of a story."
→ Baca text-anchor perlahan, tunjuk setiap kalimat.
👂 LISTEN FIRST — siswa mendengarkan dan membaca papan.

"Last Sunday, Budi went to the market." [tunjuk kalimat 1]
"He bought vegetables." [tunjuk kalimat 2]

UCAP: "Budi. Last Sunday. The market. Vegetables."
UCAP: "That is the beginning. But what happened next?"
→ Jeda. Biarkan siswa penasaran — tidak langsung dijawab.`,
          bantuan         : 'Jika siswa spontan menjawab "what happened next": angguk dan ucap "Good guess. Let\'s find out."',
          cue             : '"What happened next?" adalah pertanyaan yang sengaja tidak dijawab di layar ini. Rasa ingin tahu ini yang akan mendorong INTERACT di L7.',
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
      durasi: 49,

      langkah: [

        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'silent_reading',
          teks            : `AKSI: Bagikan Story Cards — Card A ke setengah kelas, Card B ke setengah lainnya. Pastikan setiap pasangan terdiri dari satu siswa A dan satu siswa B.
UCAP: "You have a card. Read your card — only your card. Don't show it to your partner yet."
UCAP: "Two minutes. Read it. Understand it."
→ Siswa membaca kartu mereka secara individual. Guru diam.

AKSI: Setelah 2 menit, tunjuk 2 siswa A dan 2 siswa B secara terpisah.
UCAP (ke siswa A): "Card A — what happened? In one sentence."
→ Siswa A: "Budi went to the market." atau serupa.
UCAP (ke siswa B): "Card B — what happened? In one sentence."
→ Siswa B: "Sari helped Budi." atau serupa.
→ Guru angguk — tidak mengoreksi, tidak menyambung cerita.`,
          bantuan         : 'Jika siswa tidak mengerti kartu mereka setelah 2 menit: dekati dan baca kalimat pertama kartu bersama mereka.',
          cue             : 'Siswa A hanya tahu kalimat 1–3. Siswa B hanya tahu kalimat 4–6. Jangan tunjukkan atau bacakan konten dari kartu yang bukan milik mereka di layar ini.',
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
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru menunjuk text-anchor di papan.
UCAP: "Look at these words."
→ Tunjuk "went": UCAP: "Went — that is 'go' in the past."
→ Jeda singkat.
→ Tunjuk "bought": UCAP: "Bought — that is 'buy' in the past."
→ Jeda.
UCAP: "This story happened last Sunday. So everything is in the past."
→ Tunjuk seluruh text-anchor sebagai contoh.
UCAP: "When you tell this story — use the past."

→ Tidak ada tabel, tidak ada drill, tidak ada penjelasan lebih panjang.`,
          bantuan         : 'Jika siswa kebingungan "apa artinya past": ucap dalam bahasa Indonesia jika perlu — "Bentuk lampau — artinya sudah terjadi, kemarin atau dulu." Satu kalimat, lanjut.',
          cue             : 'Dua noticing. Dua kalimat. Stop. Past tense muncul karena konteks cerita — bukan karena diajarkan. Jika siswa bertanya tentang past tense irregular lainnya: jawab sekali saja dan lanjut.',
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
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru minta siswa A dan siswa B masing-masing berlatih menceritakan kartu mereka secara oral — sendiri dulu, bukan ke pasangan.
UCAP: "Practice telling your card. Use "then" between sentences. Don't read — tell."

→ Guru tunjukkan contoh dengan text-anchor:
UCAP: "Budi went to the market. Then he bought vegetables. Then he met Sari."
→ Ini untuk siswa A. Siswa B tidak tahu ini secara detail.

AKSI: Beri waktu 1–2 menit siswa berbisik mempraktikkan kalimat dari kartu mereka.
→ Guru circulate dan dengarkan.

UCAP: "Ready? You will tell your partner in a moment."`,
          bantuan         : 'Jika siswa kesulitan tidak membaca: ucap "Glance at your card, then look up and say it." Perbolehkan referensi ke kartu tapi dorong untuk melihat ke atas saat berbicara.',
          cue             : 'Latihan ini mempersiapkan siswa untuk L7 — mereka harus bisa menceritakan kartunya TANPA menunjukkannya. "Don\'t read — tell" adalah persiapan untuk instruksi "Don\'t show your card" di L7.',
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
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru pilih 3 siswa A dan 3 siswa B bergantian.
→ Siswa A1 menceritakan kalimat 1 dari kartunya.
→ Siswa A2 melanjutkan kalimat 2.
→ Siswa A3 melanjutkan kalimat 3.
→ Berhenti di sini — siswa B tidak menceritakan kartunya di layar ini.
UCAP: "Good. That is Card A. Now — Card B. Different students."
→ Pilih 3 siswa B, estafet 3 kalimat kartu B.`,
          bantuan         : null,
          cue             : 'Setiap kelompok hanya menceritakan kartunya sendiri — tidak ada yang mendengar seluruh cerita dari satu kelompok tertentu.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika kelas sudah lancar menceritakan kartu di L5',
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l7',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Siswa sudah dalam pasangan A-B. Setiap siswa memegang kartunya sendiri.
UCAP: "Now — tell your partner your half of the story."
UCAP: "But — don't show your card. Tell your partner."
→ Tekankan: "Don't show — tell."

AKSI: Demonstrasi — maksimal 90 detik.
👂 LISTEN FIRST — kelas perhatikan.
Guru pegang Card A (tunjukkan ke kelas, TIDAK ke satu siswa A):
UCAP: "I have Card A. I will tell — not show."
UCAP (ke satu siswa B di depan): "Listen. Budi went to the market last Sunday. He bought vegetables. Then he met his friend, Sari. — Now: what is on YOUR card?"
→ Siswa B menjawab dari kartunya.
→ Guru: "Now I know the full story."
UCAP: "Now — your turn. Tell your partner. Ask your partner. Take notes if you want."

AKSI: Siswa bekerja berpasangan.
→ Siswa A menceritakan Card A ke B. Siswa B mendengarkan dan boleh bertanya.
→ Siswa B menceritakan Card B ke A. Siswa A mendengarkan dan boleh bertanya.
→ Siswa boleh mencatat fakta dari cerita pasangan di kertas kecil.
→ Waktu total: 6–7 menit.

AKSI: Guru circulate — pastikan tidak ada siswa yang menunjukkan kartu ke pasangan.`,
          bantuan         : [
            'Jika siswa tidak tahu harus bertanya apa: ucap "Ask: Who is in the story? What did they do? How did it end?"',
            'Jika siswa memperlihatkan kartu: tepuk bahu, ucap "Don\'t show — tell. Put the card face down while you talk."',
          ],
          cue             : '"Don\'t show your card — tell your partner" adalah instruksi yang membedakan INTERACT ini dari sekadar bertukar kartu. Informasi hanya berpindah melalui bahasa lisan.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas.
2. Demo ulang: guru bicara dari Card A tanpa menunjukkan kartu — satu kalimat saja.
3. Sederhanakan: "Just say the first sentence on your card. Then stop. Let your partner ask."
4. Restart — batasi 60 detik per arah.`,
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
          id              : 'l8',
          tipe            : 'instruksi',
          interaction_mode: 'silent_reading',
          teks            : `AKSI: Setelah INTERACT selesai, guru tampilkan cerita lengkap di papan (6 kalimat).
UCAP: "Here is the complete story. Compare with what your partner told you."
→ Siswa membaca cerita lengkap. Waktu: 1–2 menit.

UCAP: "Did you get all six events? Missing anything?"
→ Terima 2–3 respons spontan dari kelas — "I missed sentence 4." atau "I knew all of them."`,
          bantuan         : null,
          cue             : 'Verifikasi ini bukan tentang benar/salah — ini tentang kelengkapan. Teks lengkap di papan adalah scaffold untuk OUTPUT berikutnya.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 10 menit sebelum OUTPUT',
          blok            : 'INTERACT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l9',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Teks cerita lengkap (6 kalimat) tetap di papan.
UCAP: "Now — write the complete story. In your own words."
UCAP: "Use past tense. Use "then" between events."
UCAP: "Don't copy word for word — write it your way."

AKSI: Tunjukkan cara memulai (ucap sekali, tidak ditulis):
UCAP: "Last Sunday, Budi..." — stop. Siswa lanjutkan sendiri.

AKSI: Siswa menulis secara individual.
→ Teks di papan boleh dirujuk untuk akurasi — tapi output harus dalam kalimat sendiri.
→ Waktu: 8–10 menit.
→ Beri waktu start 2–3 menit sebelum circulate.
→ Prioritaskan barisan belakang.
→ Perhatikan: apakah past tense dipakai? Jika siswa menulis "Budi go to the market": dekati, bisik "Past — went." Satu kata, satu detik. Tinggalkan.`,
          bantuan         : 'Jika siswa freeze: tunjuk kalimat 1 di papan, ucap "Start here — \'Last Sunday, Budi...\'" Tunggu siswa menulis satu kalimat. Tinggalkan.',
          cue             : 'Teks cerita lengkap tetap di papan — siswa butuh referensi untuk akurasi past tense dan detail cerita. Yang dilarang: menyalin enam kalimat persis.',
          darurat         : '⚠ DARURAT — waktu ≤ 5 menit dan sebagian besar siswa baru menulis 2 kalimat:\nUcap: "Three events — that is enough. Budi went. He met Sari. The end." Turunkan target.',
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
          id              : 'l10',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Setelah 8 menit, guru memberi sinyal.
UCAP: "Two more minutes. Read your story. Does it have a beginning and an end?"

Diferensiasi:
- Perlu support: guru dekati, tunjuk kalimat terakhir cerita di papan ("They were happy."), tanya "Did you write the ending? Add this." — tunggu siswa menulis satu kalimat penutup.
- Sudah bisa: tambah satu kalimat opini atau reaksi personal — contoh: "I think Budi was lucky to have a good friend." atau "I like this story because it is about helping each other."

AKSI: Guru circulate — cek apakah cerita punya awal dan akhir.
→ Jika connector "then" belum ada: tunjuk jarak antara dua kalimat, bisik "Then?" — tunggu siswa menambahkan.`,
          bantuan         : 'Jika siswa sudah menulis semua 6 peristiwa tapi tanpa connector: tunjuk salah satu jarak dan ucap "Add \'then\' here." Tidak perlu menunjukkan semua celah.',
          cue             : 'Diferensiasi "Sudah bisa" mendorong respons personal terhadap cerita — pendapat yang berbeda-beda per siswa.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'guru dekati, tunjuk kalimat terakhir cerita di papan ("They were happy."), tanya "Did you write the ending? Add this."',
            sudahBisa   : 'tambah satu kalimat opini atau reaksi personal — contoh: "I think Budi was lucky to have a good friend." atau "I like this story because it is about helping each other."',
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
          id              : 'l11',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru minta 2–3 siswa sukarela membacakan SATU kalimat dari cerita mereka.
UCAP: "Who wants to share? One sentence from your story. From your seat is fine."
→ Terima siapapun yang mau.

AKSI: Setelah setiap siswa berbagi:
UCAP: "Is this from the beginning or the end?"
→ Siswa lain menebak: "Beginning." / "End." — resonansi natural.`,
          bantuan         : 'Jika tidak ada yang mau sukarela: tunjuk 1–2 siswa yang tadi aktif di INTERACT.',
          cue             : 'Pertanyaan "Beginning or end?" membuat kelas tetap terhubung dengan struktur cerita.',
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
          id              : 'l12',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas.
UCAP: "Today you read a story. In English."
→ Jeda.
UCAP: "You read half. Your partner told you the rest."
→ Jeda.
UCAP: "Then you wrote the whole story. In the past."
→ Jeda.
UCAP: "Keep it."

AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time — we write. Not instructions. Not a story."
→ Jeda singkat.
UCAP: "Your own response. About what you read."
→ Preview TP16 Panen yang natural — tanpa menyebut kata "Panen."

UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : '"You read half. Your partner told you the rest." — merangkum pencapaian spesifik TP15: rekonstruksi narasi melalui komunikasi.',
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

export default tp_c15;
