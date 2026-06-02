/**
 * =============================================================
 * FLAF — TP C19 (Describing a Place or Thing)
 * File: docs/fase-c-skenario/tp-19-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 6)
 * Kluster: E — Memproduksi untuk Orang Lain
 * Jenis: Kompleks
 * Source: flaf-c-tp19-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c19 = {

  id        : 'tp-c19',
  nomor     : 19,
  kelas     : 6,
  nama      : 'Describing a Place or Thing',
  tema      : 'Memproduksi untuk Orang Lain',
  kluster   : 'E',
  jenis     : 'Kompleks',
  deskripsi : `TP Kompleks kedua di Kluster E.
Pergeseran register dari narasi TP18 (past tense) ke deskripsi TP19 (present tense).
Ini bukan hanya pergeseran tense — ini pergeseran register.
Tiga elemen deskripsi: (1) what it is like, (2) what it has, (3) my connection.
Kriteria Kompleks: perubahan register, produksi lebih dari satu kalimat, integrasi skill di L7, inferensi dari deskripsi pasangan.`,

  indikator: [
    'Peserta didik dapat mendeskripsikan satu tempat atau benda yang dikenal dalam minimal empat kalimat menggunakan present tense deskriptif.',
    'Peserta didik dapat menggunakan tiga elemen deskripsi: apa yang ditampilkan, apa yang dimiliki, dan koneksi personal (why I go there).',
    'Peserta didik dapat merespons deskripsi pasangan dengan agree/disagree dan alasan personal.',
  ],

  vocab: ['quiet', 'busy', 'clean', 'crowded', 'simple', 'owner', 'comfortable', 'peaceful'],

  persiapan: [
    'Text-anchor di papan (ditulis sebelum kelas masuk, tetap tampil selama sesi): "The library is quiet. It has many books. I go there every week because I love reading."',
    'Catatan: TP19 tidak menggunakan kartu atau kertas distribusi khusus. Draft awal di L6 ditulis di kertas biasa atau buku tulis siswa.',
  ],

  checklist: [
    'L1 reactivation: "Last time — you told a story. Something that happened. Who remembers one sentence?" — satu kalimat dari tulisan TP18; "Today — not what happened. What it looks like." diucapkan setelah respons',
    'L3 orientasi register: "This is a description — what it is like NOW. Not a story about the past." — diucapkan SATU KALI sebelum analisis tiga elemen',
    'Tiga elemen deskripsi di L3: (1) what it is like, (2) what it has, (3) my connection/why I go there',
    'L4 demo: menggunakan warung (atau tempat personal serupa) — BUKAN library, BUKAN market; demo lisan only',
    'L6 draft awal: "Don\'t talk yet. Write first." diucapkan eksplisit; siswa menulis 2–3 kalimat sebelum INTERACT L7',
    'Nudge register di L6 jika narasi: bisik "Describe — what is it like? \'The [place] is...\'" — BUKAN koreksi tense',
    'L7 demo: guru membaca dari deskripsi, siswa B merespons dengan posisi sendiri',
    'L7: kedua arah dicakup dalam satu layar (A→B, lalu B→A)',
    'L9 circulate: dimulai setelah 3 menit — barisan belakang diprioritaskan; siswa yang menyalin anchor mendapat nudge "Change one detail — your words"',
    'Closure L13: "Next time — everything you know. Your place. Your opinion. Your experience. One piece of writing." — verbatim',
  ],

  printables: [],

  energi_map: [
    'L0 ⚪',
    'L1 🟡',
    'L2 🟡',
    'L3 🟡',
    'L4 🟡',
    'L5 🟡',
    'L6 🔵',
    'L7 🟡',
    'L8 🟡',
    'L9 🔵',
    'L10 🔵',
    'L11 🔵',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L3: Risiko orientasi register berkembang menjadi penjelasan grammar "past vs present tense." Instruksi: satu kalimat, lanjut. Tidak diulang.',
      'L6: Risiko dua hal: (1) siswa masih menulis narasi — nudge register; (2) siswa menyalin anchor verbatim — nudge personal.',
      'L7: Risiko B merespons "nice" tanpa elaborasi — sinyal B tidak mendengarkan.',
      'L9: Risiko siswa menyalin anchor. Kata kunci circulate: "Your words. Your place."',
    ],
    autonomy: [
      'Demo guru di L4 boleh menggunakan tempat selain warung — yang penting bukan library (sudah di anchor) dan bukan market.',
      'Siswa yang ingin mendeskripsikan BENDA (bukan tempat) boleh — selama tiga elemen terpenuhi.',
      'Guru boleh memperpanjang L7 sampai 8 menit.',
      'Jika ada siswa yang memilih tempat yang sama dengan gurunya di L4: valid — tapi dorong untuk menemukan detail personal yang berbeda.',
    ],
  },

  text_anchor    : 'The library is quiet. It has many books. I go there every week because I love reading.',
  connector_aktif: 'because — ada di anchor, fokus produksi · and · but · so — semua aktif dari TP17; tidak ada connector baru',
  recycle_fase_b : [
    'She/He has... (TP02) — "It has many books"',
    'I like... because... (TP06/13) — "because I love reading"',
    'There is / There are... (TP03) — available dalam produksi siswa',
    'next to / across from (TP03) — location language available',
  ],

  breakpoints: [],

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Text-anchor sudah tampil di papan.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut.
UCAP: "Today — a place. Your place."
→ Tunjuk text-anchor di papan. Tidak perlu diterjemahkan. Lanjut ke L1.`,
    bantuan: null,
    cue    : null,
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 7,

      langkah: [

        {
          id              : 'l1',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas tanpa menunjukkan teks baru.
UCAP: "Last time — you told a story. Something that happened."
→ Jeda.
UCAP: "Who remembers one sentence?"
→ Tunggu SATU siswa menyebut kalimat dari tulisan TP18.
→ Guru angguk dan terima.
UCAP: "Today — not what happened."
→ Jeda.
UCAP: "What it looks like."
→ Tunjuk text-anchor di papan.
→ Lanjut ke L2.`,
          bantuan         : 'Jika tidak ada yang merespons dalam 10 detik: ucap "Last time you wrote \'Last week I...\' — who remembers one word after that?" Tunggu satu kata.',
          cue             : 'Reactivation mengaktifkan past tense narrative dari TP18 — lalu bridge ke "what it looks like" yang mempersiapkan present tense descriptive.',
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
          teks            : `AKSI: Guru tunjuk text-anchor di papan.
UCAP: "Listen. This is a description."
👂 LISTEN FIRST — siswa mendengarkan dan membaca papan.
Baca perlahan: "The library is quiet. It has many books. I go there every week because I love reading."
→ Baca sekali lagi, lebih perlahan, tunjuk setiap kalimat.

UCAP: "What is the library like?"
→ Tunggu: "Quiet."
UCAP: "What does it have?"
→ Tunggu: "Many books."
UCAP: "Why does she go there?"
→ Tunggu: "Because she loves reading."
→ Guru angguk.

UCAP: "Three things: what it is like, what it has, why I go there."
→ Tunjuk tiga jari. Tidak ada label. Lanjut ke L3.`,
          bantuan         : 'Jika siswa tidak bisa menjawab "What is the library like?": tunjuk kata "quiet" di anchor.',
          cue             : 'Tiga pertanyaan mengakses tiga ELEMEN deskripsi sebelum guru memberi nama eksplisit di L3.',
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
      durasi: 50,

      langkah: [

        {
          id              : 'l3',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru tunjuk anchor di papan.
UCAP: "This is a description — what it is like NOW. Not a story about the past."
→ Satu kalimat. Tidak lebih.

UCAP: "A description has three parts."
→ Tunjuk kalimat 1 di anchor: "The library is quiet."
UCAP: "One: what it is like."
→ Tunjuk kalimat 2: "It has many books."
UCAP: "Two: what it has."
→ Tunjuk kalimat 3: "I go there every week because I love reading."
UCAP: "Three: my connection — why I go there."
→ Tunjuk kata "because" di kalimat 3.
UCAP: "Because — the reason."

UCAP: "Think of a place YOU know. One place. What is it like?"
→ Tunggu 2–3 siswa merespons spontan — masing-masing satu kalimat tentang tempat mereka.
→ Jika present tense: angguk lebih kuat. Jika past tense: angguk lalu bisik "Now — present. 'It is...'"`,
          bantuan         : 'Jika siswa tidak bisa menyebut satu kalimat tentang tempat mereka: ucap "Name one place — one word. Then: \'It is...\'"',
          cue             : '"This is a description — what it is like NOW. Not a story about the past." adalah satu kalimat orientasi register yang diucapkan SEBELUM analisis tiga elemen.',
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
          teks            : `AKSI: Guru tunjuk anchor di papan.
UCAP: "Watch me. I describe a different place."
→ Guru tidak menulis apapun. Demo lisan sepenuhnya.

👂 LISTEN FIRST — siswa mendengarkan.
UCAP (perlahan, natural, bukan membaca):
"I know a small warung near my house."
→ Jeda.
"It is simple. But the food is always delicious."
→ Jeda.
"The owner is kind. She always remembers what I like."
→ Jeda.
"I go there every morning because it makes me feel at home."
→ Jeda.

UCAP: "What is it like? What does it have? Why I go there."
→ Tunjuk tiga jari secara berurutan.

UCAP: "Now — think. What is YOUR place? One minute."
→ Jeda 60 detik. Biarkan siswa berpikir diam-diam.`,
          bantuan         : [
            'Jika siswa langsung bertanya "Boleh tempat yang jauh?": jawab "Yes — any place you know well."',
            'Jika siswa bertanya "Boleh describe sesuatu, bukan tempat?": jawab "Yes — a thing you know well."',
          ],
          cue             : 'Demo menggunakan warung — bukan library (sudah di anchor), bukan market (sudah di TP12 dan TP15). "But the food is always delicious" menanam `but` secara natural.',
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
          teks            : `UCAP: "Your place — tell me the name. And one sentence: what is it like?"
→ Tunggu 3–4 siswa merespons — masing-masing nama tempat + satu kalimat deskripsi.
→ Jika present tense: angguk. Jika past tense: tunjuk anchor, bisik "Present — 'It is...'"

UCAP: "Good. Now — write your description."
→ Lanjut ke L6.`,
          bantuan         : null,
          cue             : 'Verbalisasi singkat sebelum menulis membantu siswa yang punya konsep tapi belum punya kata. Jika kelas sudah aktif di L3–L4, lewati layar ini.',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika kelas sudah spontan menyebut tempat mereka di L3 atau L4',
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l6',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `UCAP: "Now — choose your place. Write a short description."
UCAP: "Two to three sentences."
→ Tunjuk tiga jari sambil menyebut:
"What it is like. What it has. Why you go there."
UCAP: "Don't talk yet. Write first."
→ Siswa menulis. Waktu: 3–4 menit.
→ Guru diam. Tidak circulate dulu.

AKSI: Circulate diam-diam setelah 2 menit.
→ Perhatikan tiga hal:
   1. Register — narasi atau deskripsi? Jika siswa menulis "Last week I went to...": bisik "Describe — what is it like? 'The [place] is...'" Satu kalimat, tinggalkan.
   2. Hanya daftar adjective tanpa koneksi personal: biarkan di draft ini — L10 akan address.
   3. Memilih library dan meniru anchor verbatim: bisik "What's different about YOUR library? Change one detail." Satu kalimat, tinggalkan.`,
          bantuan         : [
            'Jika siswa tidak bisa memilih tempat: ucap "Where do you go often? Or where do you feel comfortable? Write that place."',
            'Jika siswa tidak bisa menulis dua kalimat: ucap "Write one: \'The [place] is...\'"',
          ],
          cue             : 'Draft ini adalah fondasi INTERACT L7. "Don\'t talk yet. Write first." mencegah siswa mengikuti pilihan pasangan. Nudge di sini adalah tentang REGISTER, bukan tentang tense.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : false,
          flex_kondisi    : null,
          blok            : 'INPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l7',
          tipe            : 'instruksi',
          interaction_mode: 'pairwork',
          teks            : `AKSI: Demo — maksimal 45 detik.
👂 LISTEN FIRST — kelas perhatikan.
Guru bicara ke satu siswa di depan (guru jadi A):
UCAP: "The warung near my house is small and simple. But the food is always delicious. I go there because it makes me feel at home."
→ Guru ke siswa: "What do you think? Would you like a place like that? Or do you prefer something different?"
→ Siswa merespons dari perspektif sendiri: "I agree..." atau "I prefer a bigger place because..."
→ Guru (ke kelas): "She listened — then gave her own opinion. That is choice gap."
UCAP: "Now — with your partner."

AKSI: Siswa bekerja berpasangan.
UCAP: "A — read your draft. Describe your place."
UCAP: "B — listen. Then respond: do you agree with A's place, or do you prefer something different? Say why."
→ A membacakan draft. B mendengarkan → merespons dengan posisi sendiri.
→ Lalu peran berganti.
→ Total: 5–6 menit.

AKSI: Guru circulate dan dengarkan.
→ Jika B hanya berkata "nice" tanpa elaborasi: bisik ke B: "Why? Because..." Tunggu satu kalimat.`,
          bantuan         : [
            'Jika B tidak tahu cara merespons: bisik "Say: \'I agree because...\' or \'I prefer [different kind] because...\'"',
            'Jika pair hanya berkata "nice" tanpa elaborasi: ucap "Say more — WHY? Do you agree?"',
          ],
          cue             : 'Gap ini nyata karena B tidak tahu tempat mana yang dipilih A sampai mendengar. Bahkan jika keduanya memilih jenis tempat yang sama, kualitas yang dianggap paling penting bisa berbeda.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas.
2. Demo ulang: guru membaca satu kalimat draft sendiri. Satu siswa merespons "I agree/I prefer..."
3. Sederhanakan: "A: read your first sentence. B: say agree or disagree. Then why."
4. Restart — batasi 2 menit per arah.`,
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
            gap_type         : 'choice',
            artifact_required: false,
            artifact_type    : null,
            collapse_signal  : 'pair diam > 90 detik',
          },
          artifact: null,
        },

        {
          id              : 'l8',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Setelah pair sharing selesai.
UCAP: "Who wants to share? Read your draft — two sentences. From your seat."
→ Terima 2 siswa sukarela. Masing-masing baca dua kalimat dari draft.
→ Setelah setiap draft: UCAP "What kind of place is this?" → kelas merespons satu kata.

UCAP: "Different places. Now — write more."
→ Transisi langsung ke OUTPUT.`,
          bantuan         : null,
          cue             : 'L8 berfungsi sebagai transisi energi dari 🟡 (INTERACT) ke 🔵 (OUTPUT).',
          darurat         : null,
          energi          : '🟡',
          energy_level    : 'focused',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 15 menit sebelum akhir sesi',
          blok            : 'INTERACT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l9',
          tipe            : 'instruksi',
          interaction_mode: 'writing',
          teks            : `AKSI: Text-anchor tetap di papan.
UCAP: "Now — write your full description. More sentences."
UCAP: "Start from your draft. Add more."
→ Jeda.
UCAP: "Four sentences minimum. Use because."
→ Tunjuk kata "because" di anchor.
UCAP: "Use but or so if you can."
→ Siswa menulis secara individual. Waktu: 8 menit.
→ Beri waktu 3 menit start sebelum circulate.

AKSI: Circulate setelah 3 menit.
→ Mulai dari barisan belakang.
→ Perhatikan tiga hal:
   1. Register — narasi atau deskripsi? Jika masih "Last week I went...": bisik "Describe — present. 'The [place] is...'"
   2. Koneksi personal — apakah ada "I go there because..."? Catat untuk L10.
   3. Siswa yang memilih library dan meniru anchor verbatim: bisik "What's different about YOUR library? Change one detail — your words."`,
          bantuan         : [
            'Jika siswa freeze: tunjuk draft L6 mereka, ucap "Start from here — write sentence one again."',
            'Jika siswa menulis tentang sesuatu (bukan tempat) dan tidak yakin boleh: ucap "Yes — describe it the same way."',
          ],
          cue             : 'Anchor tetap di papan sebagai model struktur — bukan template yang disalin. Siswa yang menyalin persis perlu nudge satu kalimat.',
          darurat         : '⚠ DARURAT — waktu ≤ 5 menit dan sebagian besar siswa baru menulis 1 kalimat:\nUcap: "Three sentences — enough. What it is like. What it has. Why you like it."',
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
          teks            : `AKSI: Guru memberi sinyal untuk berhenti menulis.
UCAP: "Two more minutes. Read your description."
→ Jeda — biarkan siswa membaca tulisannya sendiri.
UCAP: "Did you use because? Try to add but or so."
→ Jeda singkat.
UCAP: "And — add your connection. Why YOU go there. Or why YOU like it."

AKSI: Circulate — prioritaskan barisan tengah yang belum tersentuh di L9.
→ Siswa yang masih dalam narasi: nudge register terakhir.

Diferensiasi:
- Perlu support: tunjuk kalimat terakhir deskripsi siswa, ucap "Why do you like it? Add: 'because...'" — tunggu siswa menulis satu kalimat.
- Sudah bisa: bisik "Add a contrast — 'But sometimes it is...' or 'But I wish it had...'"`,
          bantuan         : 'Jika siswa tidak bisa menambah `but`: ucap "Is there one thing that is NOT perfect about the place? Write that with \'but\'."',
          cue             : '"Add your connection — why YOU go there / why YOU like it" adalah instruksi paling penting di L10. Deskripsi yang hanya berisi fakta valid tapi tidak personal.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'tunjuk kalimat terakhir deskripsi siswa, ucap "Why do you like it? Add: \'because...\'" — tunggu siswa menulis satu kalimat.',
            sudahBisa   : 'bisik "Add a contrast — \'But sometimes it is...\' or \'But I wish it had...\'"',
          },
          flex            : false,
          flex_kondisi    : null,
          blok            : 'OUTPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

        {
          id              : 'l11',
          tipe            : 'instruksi',
          interaction_mode: 'peer_review',
          teks            : `AKSI: Siswa bertukar kertas dengan pasangan.
UCAP: "Read your partner's description. One minute. Silent."
→ Siswa membaca tulisan pasangan. Waktu: 1 menit.

UCAP: "Tell your partner: 'Would you like to visit this place? Why?'"
→ Masing-masing menjawab satu kalimat ke pasangan. Lalu berganti.
→ Waktu: 30 detik per arah.`,
          bantuan         : 'Jika siswa tidak tahu harus bilang apa: ucap "Say: \'I want to visit because...\' or \'I prefer a different place because...\'"',
          cue             : '"Would you like to visit this place?" adalah pertanyaan yang lebih natural dari "Did you like the description?" — ini juga mengaktifkan kembali opinion-giving dari TP17.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : null,
          flex            : true,
          flex_kondisi    : 'lewati jika waktu tersisa < 8 menit',
          blok            : 'OUTPUT',
          assessment_overlay: null,
          interact_contract : null,
          artifact          : null,
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 8,

      langkah: [

        {
          id              : 'l12',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Siswa duduk di tempat masing-masing dengan tulisan di tangan.
UCAP: "Who wants to share? One sentence from your description. From your seat."
→ Terima 2–3 sukarela.
→ Setelah setiap kalimat: UCAP "What kind of place is that?" → kelas merespons satu kata.`,
          bantuan         : 'Jika tidak ada yang sukarela: tunjuk 1–2 siswa yang tadi aktif di INTERACT.',
          cue             : null,
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
          id              : 'l13',
          tipe            : 'instruksi',
          interaction_mode: 'teacher_input',
          teks            : `AKSI: Guru berdiri di depan kelas.
UCAP: "Today — you described a place."
→ Jeda.
UCAP: "You said what it is like. What it has. Why you go there."
→ Jeda.
UCAP: "In English. Your words."
→ Jeda.
UCAP: "Keep your writing."
→ Jeda singkat.
UCAP: "Next time — everything you know."
→ Jeda.
UCAP: "Your place. Your opinion. Your experience."
→ Jeda.
UCAP: "One piece of writing."
→ Jeda — biarkan siswa bertanya-tanya.
UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : '"Your place. Your opinion. Your experience." — tiga elemen merujuk ke TP19 (place), TP17 (opinion), TP18 (experience) secara tersirat dan natural.',
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

export default tp_c19;
