/**
 * =============================================================
 * FLAF — TP C09 (Places in My Town)
 * File: docs/fase-c-skenario/tp-09-v1.js
 * Format: Fase C Schema v1.0
 * Fase: C (Kelas 5)
 * Kluster: C — Dunia di Luar Rumah
 * Jenis: Biasa
 * Source: flaf-c-tp09-v2.txt
 * Converted: Juni 2026
 * =============================================================
 */

export const tp_c09 = {

  id        : 'tp-c09',
  nomor     : 9,
  kelas     : 5,
  nama      : 'Places in My Town',
  tema      : 'Dunia di Luar Rumah',
  kluster   : 'C',
  jenis     : 'Biasa',
  deskripsi : '',

  indikator: [
    'Peserta didik dapat mendeskripsikan satu tempat di lingkungan sekitar dalam minimal tiga kalimat menggunakan pola There is... / It is [adj] and [adj] / I go there with...',
    'Peserta didik dapat menggunakan connector and untuk menggabungkan dua kata sifat dalam deskripsi tempat (konfirmasi).',
    'Peserta didik dapat menggali informasi tempat pasangan melalui pertanyaan lisan dan menuliskannya di Partner\'s Town Card.',
  ],

  vocab: ['market', 'mosque', 'park', 'river', 'rice field', 'school', 'near', 'next to', 'big', 'busy', 'quiet', 'green'],

  persiapan: [
    'My Town Card (satu per siswa): secarik kertas kecil dengan tiga kolom — Place · Location (near/next to ___) · What is it like? (___ and ___) — untuk tiga tempat. Bisa dicetak atau siswa menyalin template dari papan di L4. Di awal L6, kartu ini diletakkan tertutup (menghadap bawah).',
    'Partner\'s Town Card (satu per siswa): kartu kosong dengan format kolom yang sama. Semua kolom kosong. Dibagikan tepat sebelum L6 dimulai.',
    'Tampilan text-anchor di papan: tulis sebelum siswa masuk. "There is a market near my school. It is big and busy. I go there with my mother." Tetap tampil dari L2 sampai akhir L7. Hapus atau tutup sebelum L8 dimulai.',
    'Pattern reminder di papan (ditulis setelah text-anchor diturunkan, tepat sebelum L8): There is ___ near ___ . It is ___ and ___ . I go there with ___ . — tiga pola sebagai petunjuk struktur, bukan template yang bisa disalin persis.',
  ],

  checklist: [
    'Framing inklusif diucapkan di L2 — mencakup "river, rice field" secara eksplisit sebelum siswa mengisi My Town Card',
    'Model guru di L3 mencakup minimal satu tempat non-urban — dan pola [adj] and [adj] dimodelkan dua kali',
    'My Town Card terisi sebelum INTERACT dimulai — kolom ketiga "What is it like?" terisi dengan dua kata sifat (cek di L4)',
    'Partner\'s Town Card dibagikan dalam keadaan kosong — My Town Card tertutup saat pair work berlangsung (L6)',
    'Text-anchor diturunkan dari papan sebelum OUTPUT dimulai (L8) — diganti pattern reminder tiga baris',
    'Output siswa mencerminkan tempat yang mereka pilih dari kartu sendiri — bukan replikasi text-anchor Rina',
    'Connector `so` dan `when` tidak muncul di skenario ini — keduanya baru di TP10',
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
      'L1: Reactivation minimal 3 menit — jangan dipersingkat meski kelas sudah kondusif. Ini jembatan Kluster B → C.',
      'L4: Kolom ketiga "What is it like?" paling sering dikosongkan siswa. Perhatikan saat circulate di menit ke-2 — jika banyak yang skip kolom ini, ucap pengingat: "Don\'t forget the last column — two words."',
      'L6: Siswa yang mendeskripsikan tempat yang sama dengan pasangan (misalnya keduanya dari sekolah yang sama) tetap bisa menjalankan pair work — informasi di kartu mereka akan berbeda karena tempat lain yang mereka pilih berbeda.',
      'L8: Pattern reminder di papan adalah fallback untuk siswa yang bingung memulai — bukan template. Jika ada siswa yang menyalin pattern persis, tunjuk kartu mereka dan tanya "What is the name of your place?"',
    ],
    autonomy: [
      'Tempat dalam model guru (L3) boleh diganti dengan tempat yang benar-benar ada di area sekolah atau desa guru — lebih autentik dan lebih mudah dipahami siswa.',
      'Pertanyaan "Do you have the same places?" di akhir INTERACT (L6) boleh diperpanjang menjadi 1 menit tambahan jika percakapan terasa hidup.',
      'Boleh memperpanjang INTERACT (L6) sampai 8 menit jika kelas kondusif.',
      'Boleh skip L10 jika waktu mepet atau kelas tampak lelah setelah writing — closure L11 tetap valid.',
      'Untuk kelas dengan mayoritas siswa rural: di L7 mini-share, guru bisa memulai dengan menyebut tempat non-urban lebih dulu.',
    ],
  },

  text_anchor    : 'There is a market near my school. It is big and busy. I go there with my mother.',
  connector_aktif: 'and — hadir di text-anchor ("big and busy"); konfirmasi dari TP01–08; tidak ada connector baru di TP09',
  recycle_fase_b : [
    'There is / There are... (TP03 Fase B)',
    'next to / across from (TP03 Fase B)',
    'I go there with... (pola movement dasar Fase A/B)',
  ],

  breakpoints: [],

  preOpening: {
    tipe   : 'instruksi',
    teks   : `Guru berdiri di depan kelas. Papan sudah bertuliskan text-anchor.

AKSI: Tunggu kelas kondusif tanpa berbicara.
UCAP: "Good morning, everyone."
→ Tunggu respons. Jika tidak ada: angkat tangan — tunggu siswa ikut menjawab.
UCAP: "Today we talk about places."
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
UCAP: "Last time you wrote about your week — everything."
→ Jeda.
UCAP: "Who remembers one sentence from that writing?"
→ Tunggu 2–3 siswa menyebut kalimat dari tulisan TP08 mereka sendiri.
→ Guru tidak mengoreksi — angguk dan terima apapun yang muncul.

AKSI: Setelah 2–3 respons, bridge ke topik hari ini.
UCAP: "Good. Today — we don't write about what we do."
→ Jeda singkat.
UCAP: "We write about where we go."`,
          bantuan         : 'Jika tidak ada yang merespons dalam 5 detik: ucap satu kalimat model dari TP08 — "I like playing football because it is fun." — lalu tanya "Who has a sentence like this from their writing?" Tunggu siswa melanjutkan dengan versi mereka sendiri.',
          cue             : 'Reactivation ini mengaktifkan tulisan produksi siswa dari TP08 — bukan text-anchor dari TP07 atau TP09. Minimal 3 menit. Jangan persingkat meski kelas kondusif — ini jembatan dari Kluster B ke konteks komunitas Kluster C.',
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
UCAP: "Look at the board. This is about a place."
→ Baca text-anchor perlahan, tunjuk setiap baris.
👂 LISTEN FIRST — siswa mendengarkan dan membaca papan.

"There is a market near my school." [tunjuk baris 1]
"It is big and busy." [tunjuk baris 2]
"I go there with my mother." [tunjuk baris 3]

UCAP: "This is about a market. But today — you can describe any place."
→ Jeda. Ucapkan perlahan.
UCAP: "A market, a mosque, a park, a river, a rice field, a school — any place near you."
UCAP: "Whatever you see on the way to school or near your house."`,
          bantuan         : 'Jika siswa bertanya "boleh tempat apa saja?": angguk dan ucap "Yes — any place. Even a rice field or a river." Tidak perlu penjelasan lebih panjang.',
          cue             : 'Framing inklusif harus mencakup tempat non-urban secara eksplisit — "a river, a rice field" — sebelum siswa mengisi My Town Card. Siswa dari daerah rural perlu mendengar bahwa tempat mereka valid dan berharga.',
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
          teks            : `AKSI: Guru berdiri di depan kelas. Text-anchor Rina masih di papan.
UCAP: "Now, my turn. Two places I know."

Tempat pertama (urban atau semi-urban):
UCAP: "There is a mosque near my house."
UCAP: "It is big and quiet."
UCAP: "I go there with my family."

→ Jeda singkat.

Tempat kedua (non-urban — wajib):
UCAP: "There is a rice field near my village."
UCAP: "It is green and peaceful."
UCAP: "I go there with my grandfather."
→ Atau gunakan sungai, lapangan, atau tempat non-urban lain yang relevan dengan guru.

UCAP: "Two places. Both are valid."
→ Ini konfirmasi implisit bahwa tempat rural dan urban sama-sama bisa dideskripsikan.

AKSI: Guru menunjuk baris 2 text-anchor: "It is big and busy."
UCAP: "Big and busy — two words. And."
→ Tunjuk model guru: "big and quiet" — "green and peaceful."
UCAP: "Two words. Connected with and."
→ Ucapkan sekali, natural. Tidak lebih dari ini.

AKSI: Kembali ke text-anchor.
🗣 TOGETHER — guru dan siswa baca text-anchor bersama.
UCAP: "Read with me. Ready?"
→ Baca bersama 1×. Cukup.`,
          bantuan         : 'Jika siswa tidak ikut membaca bersama: tunjuk baris demi baris sambil membaca — siswa biasanya ikut setelah kalimat kedua.',
          cue             : 'Pola `[place] is [adj] and [adj]` dimodelkan dua kali — "big and quiet" dan "green and peaceful." Ini mempersiapkan siswa untuk kolom ketiga My Town Card ("What is it like?"). Jangan modelkan lebih dari dua kali.',
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
          teks            : `AKSI: Bagikan My Town Card yang sudah dicetak, atau minta siswa menyalin template ke kertas kecil.
→ Jika menyalin: tulis template di papan di bawah text-anchor (sementara, hapus setelah L4):
   Place: ___   Near / next to: ___   It is ___ and ___ .

UCAP: "Fill in three places near your house or school."
UCAP: "Any place — market, mosque, river, rice field, school. Whatever is near you."
UCAP: "Three minutes. Go."
→ Guru diam — biarkan siswa mengisi kartu.

AKSI: Setelah 3 menit, tunjuk 2–3 siswa secara acak.
UCAP: "Quick — read one place. Just the name and where it is."
→ Guru tidak mengoreksi. Angguk dan lanjut.`,
          bantuan         : [
            'Jika siswa tidak tahu tempat apa yang ditulis: bisik "What do you see on the way to school? Just one place — write its name." Bantu siswa mengisi baris pertama saja.',
            'Jika siswa tidak tahu dua kata sifat untuk kolom ketiga: tunjuk papan (model guru masih ada) dan ucapkan beberapa opsi — "big, small, quiet, busy, green, old, new" — biarkan siswa memilih sendiri.',
          ],
          cue             : 'My Town Card ini digunakan di L6 (INTERACT). Pastikan setiap siswa sudah mengisi minimal dua dari tiga baris — terutama kolom ketiga "It is ___ and ___" yang dimodelkan di L3.',
          darurat         : '⚠ DARURAT — ada siswa yang masih blank setelah 3 menit:\nDekati, tunjuk baris pertama "Place," tanya dalam bahasa Indonesia jika perlu — "Dekat rumahmu ada apa?" Bantu isi nama tempat saja.',
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
          teks            : `AKSI: Guru menyebut nama tempat, siswa menjawab lokasinya menggunakan kartu mereka sendiri.
UCAP: "Quick — where is your [place]? Near what? Next to what?"
→ Tunjuk siswa secara acak — bukan yang tunjuk tangan.
→ Siswa jawab: "It is near my school." / "It is next to the mosque." / "It is across from the market."

AKSI: Lakukan dengan 4–5 siswa dari barisan berbeda — cepat.
→ Guru tidak mengoreksi grammar. Tujuannya: kolom kedua My Town Card sudah natural di mulut siswa sebelum INTERACT.`,
          bantuan         : 'Jika siswa tidak bisa menjawab: tunjuk My Town Card mereka di kolom Location dan ucap "Read from your card." Tunggu siswa membaca jawabannya.',
          cue             : 'Ini latihan kolom "Location" sebelum pair work — siswa harus bisa menjawab "near/next to ___" dengan lancar agar INTERACT tidak terhenti di pertanyaan lokasi.',
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
          teks            : `AKSI: Bagikan Partner's Town Card — satu per siswa. Semua kolom kosong.
UCAP: "This card is empty. You cannot fill it alone."
UCAP: "You need to ask your partner."

AKSI: Demonstrasi dengan satu siswa di depan — maksimal 90 detik.
👂 LISTEN FIRST — kelas perhatikan dulu.
Guru tanya ke satu siswa: "Is there a market near your house?" → jawab → isi kolom Place.
"Where exactly? Near what?" → isi Location.
"What is it like? Two words." → isi What is it like.
Lakukan untuk satu tempat saja — cukup.
UCAP: "Now your turn. Ask your partner — fill in the card."

AKSI: Siswa bekerja berpasangan.
→ My Town Card masing-masing sudah ada di meja, tertutup (menghadap bawah).
→ Siswa A bertanya ke siswa B, isi Partner's Town Card untuk B.
→ Kemudian B bertanya ke A.
→ Setelah kedua arah selesai: tanya pasangan — "Do you have the same places?"
→ Waktu total: 5–6 menit.

AKSI: Guru circulate — prioritaskan barisan belakang.`,
          bantuan         : [
            'Jika pasangan tidak tahu harus bertanya apa: tunjuk kolom pertama di Partner\'s Town Card dan ucap "Is there a market near your house?" — tunggu siswa meniru pertanyaan itu ke pasangannya.',
            'Jika siswa mengisi kartu tanpa bertanya (menebak sendiri): tutup kartu dengan tangan, ucap "Ask first. Don\'t guess." Tunjuk ke arah pasangannya.',
          ],
          cue             : 'Partner\'s Town Card harus benar-benar kosong saat dibagikan. My Town Card tertutup sampai pair work selesai. Tanpa dua kondisi ini, information gap hilang.',
          darurat         : `⚠ DARURAT — pair diam > 90 detik:
1. Hentikan seluruh kelas dengan tepukan tangan.
2. Demo ulang dengan 1 pasangan di depan — guru menjadi pasangannya.
3. Sederhanakan: cukup 1 pertanyaan — "Is there a [market / mosque / school] near your house?"
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
UCAP: "Tell me one interesting place from your partner's card. One sentence."
→ Siswa menjawab menggunakan Partner's Town Card yang sudah diisi.
→ Contoh: "There is a river near her house. It is wide and clean."

AKSI: Guru tidak mengoreksi grammar. Angguk dan lanjut.
UCAP (opsional): "Who has a rice field near their house? Who has a market?"
→ Tangan naik — resonansi natural yang tidak menstigmatisasi.`,
          bantuan         : 'Jika siswa bingung memulai: ucap "There is a..." dan tunjuk kartu partner mereka — tunggu siswa melanjutkan.',
          cue             : 'Pertanyaan "Who has a rice field?" setara validnya dengan "Who has a market?" — guru mengucapkan kedua-duanya secara sejajar untuk memperkuat bahwa semua tempat dihargai.',
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
Tulis pattern reminder di papan (tiga pola pendek):
   There is ___ near ___ .   It is ___ and ___ .   I go there with ___ .

UCAP: "Choose one place from your card. Write three sentences about it."
UCAP: "Use your card — and the pattern on the board if you need it."
→ Pattern reminder boleh dilihat tapi tidak boleh disalin persis.

AKSI: Siswa menulis secara individual.
→ Waktu: 8–10 menit. Guru tidak mendiktekan kalimat.
→ Beri waktu start 2–3 menit sebelum circulate.
→ Prioritaskan barisan belakang.
→ Perhatikan: apakah siswa menulis tentang tempat yang ada di kartu mereka sendiri, atau menyalin text-anchor Rina? Jika ya: tepuk bahu dan tanya "Is this your place or Rina's place?"`,
          bantuan         : 'Jika siswa freeze: tunjuk kartu mereka di baris pertama dan ucap "Start here. There is a [name of place] near..." — tunggu siswa menulis. Tinggalkan setelah satu kalimat.',
          cue             : 'Pattern reminder di papan adalah petunjuk struktur, bukan template. Yang membuat setiap tulisan berbeda adalah isi — nama tempat, lokasi, dan dua kata sifat — yang semuanya berasal dari kartu siswa sendiri.',
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
- Perlu support: guru dekati, tunjuk kartu siswa di baris yang belum dipakai, tanya "What is this place like? Write: It is..." — tunggu siswa menulis satu kalimat tambahan tanpa dikte.
- Sudah bisa: tambah kalimat keempat yang memperluas dengan pola dari Kluster B — contoh: "I usually go there on Sunday with my friend." atau "I like it because it is quiet and cool."

AKSI: Guru circulate — lihat tulisan siswa tanpa mengoreksi.
→ Jika connector dari Kluster B muncul spontan (`because`, `but`) — angguk, tidak perlu komentar.
→ Jika hanya `and` yang muncul — ini sudah valid untuk TP09.`,
          bantuan         : 'Jika siswa sudah selesai tapi hanya menulis 2 kalimat: tanya "Where do you go with your friends? Write: I go there with..." — tunggu siswa menulis sendiri.',
          cue             : 'Diferensiasi "Sudah bisa" mengacu pada hari dan aktivitas konkret siswa — bukan pada kemampuan grammar.',
          darurat         : null,
          energi          : '🔵',
          energy_level    : 'calm',
          diferensiasi    : {
            perluSupport: 'guru dekati, tunjuk kartu siswa di baris yang belum dipakai, tanya "What is this place like? Write: It is..." — tunggu siswa menulis satu kalimat tambahan tanpa dikte.',
            sudahBisa   : 'tambah kalimat keempat yang memperluas dengan pola dari Kluster B — contoh: "I usually go there on Sunday with my friend." atau "I like it because it is quiet and cool."',
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
          teks            : `AKSI: Guru minta 2–3 siswa sukarela membacakan 1–2 kalimat dari deskripsi tempat mereka.
UCAP: "Who wants to share? One or two sentences — from your seat is fine."
→ Terima siapapun yang mau. Tidak perlu berdiri di depan kelas.

AKSI: Setelah setiap siswa berbagi, guru bertanya ke kelas:
UCAP: "Who has a place like this near their house?"
→ Tangan naik — resonansi natural yang menghubungkan siswa satu sama lain.`,
          bantuan         : 'Jika tidak ada yang mau sukarela: tunjuk siswa yang tadi paling aktif di INTERACT — mereka sudah dalam mode berbicara tentang tempat dan lebih siap.',
          cue             : 'Pertanyaan "Who has a place like this?" lebih inklusif dari "Who has the same market?" — memungkinkan siswa dengan tempat yang serupa tapi tidak identik untuk ikut terlibat.',
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
UCAP: "Today you described a place. In English."
→ Jeda.
UCAP: "Near your school. Near your house. Your place."
→ Jeda.
UCAP: "That is your town. Keep it."

AKSI: Tunjuk tulisan siswa di atas meja mereka.
UCAP: "Next time — the sky."
→ Jeda singkat.
UCAP: "Rain. Sun. What you wear. What you do."
→ Preview TP10 yang natural dan membuat penasaran.

UCAP: "Good work today. See you next time."`,
          bantuan         : null,
          cue             : '"Your place" — bukan "Rina\'s place," bukan "the market from the board." Validasi ini penting terutama untuk siswa yang mendeskripsikan tempat non-urban yang tidak ada di contoh guru atau text-anchor.',
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

export default tp_c09;
