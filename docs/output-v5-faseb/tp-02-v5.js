/**
 * =============================================================
 * FLAF — TP B02 (Describing People)
 * File: docs/output-v5-faseb/tp-02-v5.js
 * Format: v5.0
 * Fase: B (Kelas 3–4)
 * Source: flaf-skenario-tp02-v2.txt (Fase B)
 * =============================================================
 */

const TP_B02 = {

  id       : 'tp-b02',
  nomor    : 2,
  kelas    : 3,
  nama     : 'Describing People',
  tema     : 'Mendeskripsikan penampilan dan sifat orang',
  kluster  : 'A',
  jenis    : 'Biasa',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat menyebutkan ciri penampilan seseorang (jenis rambut: curly/straight, warna rambut) dalam kalimat sederhana bahasa Inggris.',
    'Peserta didik dapat menggunakan struktur "She has..." untuk mendeskripsikan penampilan orang lain secara lisan.',
    'Peserta didik dapat menulis kalimat deskripsi sederhana tentang seseorang menggunakan struktur "She has..." dan kata sifat karakter "kind".',
  ],

  vocab    : ['curly', 'straight', 'kind', 'She has...', 'mother', 'father', 'eyes', 'hands', 'red', 'black', 'brown', 'happy'],

  persiapan: [
    'Gambar 2 karakter sederhana: satu berambut keriting (curly), satu berambut lurus (straight) — bisa digambar di papan saat sesi berlangsung',
    'Gambar atau foto anggota keluarga yang netral (bukan foto siswa) — opsional, untuk L2',
    'Lembar kerja siswa: 1 per siswa — template kalimat deskripsi (lihat L8)',
    'Papan tulis + spidol untuk demo guru di L3, L6, dan L8',
  ],

  checklist: [
    'Gambar karakter curly dan straight sudah tersedia — digambar di papan atau disiapkan sebelum kelas',
    'Scaffold "She has…" di papan TIDAK dihapus sampai L9 selesai',
    'Siswa tidak dipaksa menulis tentang teman tertentu — pilihan bebas (teman, keluarga, atau karakter fiksi)',
    'Penilaian formatif sudah dibuka di L8 — minimal 3 siswa sudah dinilai',
    'Referensi ke TP01 (library, canteen, raise your hand) sudah muncul di L1',
    'Siswa yang membacakan di L9 berbeda dari yang menjawab di L4',
    'Closure di L11 diakhiri dengan goodbye ritual — bukan instruksi administratif',
    '"She has" vs "She is" sudah dijelaskan setidaknya satu kali (L6 atau L9)',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔴',
    'L2 🟡',
    'L3 🔵',
    'L4 🟠',
    'L5 🟡',
    'L6 🔵',
    'L7 🟡',
    'L8 🔵',
    'L9 🔵',
    'L10 🟡',
    'L11 🔵',
  ],

  catatan: {
    risiko: [
      'L3: Guru sering tergoda menjelaskan panjang. Dua kata baru (curly + straight) cukup diperkenalkan dengan gambar dan dua kalimat konteks masing-masing — sisanya dikerjakan oleh L4.',
      'L6: Scaffold di papan adalah aset terpenting sesi ini. Jika papan penuh dan harus dihapus sebagian, pertahankan minimal "She has ___ hair." dan "She is ___." — dua baris ini yang paling dibutuhkan di L8.',
      'L8: Siswa yang memilih tokoh fiksi atau orang yang tidak ada di kelas cenderung lebih berani menulis. Biarkan — pilihan ini valid dan tidak perlu dikoreksi arah.',
    ],
    autonomy: [
      'Nama karakter di L6 boleh diganti — tidak harus "Maya." Pilih nama yang akrab untuk siswa di sekolah tersebut.',
      'Chant di L1 boleh diulang di L10 jika guru ingin menutup dengan energi yang familiar.',
      'Jika kelas memiliki siswa berambut sangat beragam, L4 bisa diperluas dengan lebih banyak contoh warna — brown, black, red — tanpa menambah waktu signifikan.',
      '"He has" boleh diperkenalkan secara informal di L7 jika ada siswa yang spontan menggunakannya — tapi tidak perlu dijadikan fokus formal di TP ini.',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Sama seperti TP01 — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — beri jeda 3 detik diam, pandang bagian kelas yang paling ramai, lanjutkan hanya setelah mereka berhenti.',
    cue    : '"Sit down" dan "Listen" adalah kosakata TP01 yang sudah dipraktikkan. Ucap dengan nada yang sama — ini bukan instruksi baru, ini rutinitas yang mulai terbentuk.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Koneksi TP01 + Chant Warna
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali. Tanya kelas dengan nada ceria.

UCAP: "Last time — do you remember? We talked about our school."
UCAP: "Where do we read books?"
→ Kelas: "Library!"
UCAP: "Where do we eat?"
→ Kelas: "Canteen!"
UCAP: "And when you want to answer — what do you do?"
→ Kelas angkat tangan: "Raise your hand!"

UCAP: "Perfect. Today — we talk about people. Our friends. Our family."

AKSI: Langsung masuk ke chant warna dengan ketukan meja:

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"Red hair — black hair — brown hair — GO!
Big eyes — small eyes — kind heart — GO!
This is my friend — let's GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal chant di putaran pertama: pelankan ritme, tunjuk diri sendiri saat ucap "my friend" — gesture membantu siswa mengisi kata yang mereka tidak ingat.',
          cue    : 'Chant ini memperkenalkan konteks "rambut" dan "mata" secara lisan sebelum kosakata baru masuk di L3. Biarkan energi naik.',
          darurat: 'Jika kelas masih gaduh setelah chant selesai: tepuk satu kali keras, ucap "Freeze — sit down — listen." Lanjut ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation — Family dan Body Parts
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk diri sendiri atau gambar keluarga (jika tersedia). Tanya kelas satu per satu.

UCAP: "Who is this?" [tunjuk gambar ibu, atau ucap: "Ibu saya — in English?"]
→ Kelas: "Mother!"
UCAP: "And this?" [tunjuk gambar ayah]
→ Kelas: "Father!"

UCAP: "Good. Now — body parts." [tunjuk mata sendiri]
UCAP: "What are these?"
→ Kelas: "Eyes!"
UCAP: "And these?" [tunjuk tangan]
→ Kelas: "Hands!"

AKSI: Tunjuk warna di baju siswa atau benda di kelas.
UCAP: "What color is this?" [tunjuk benda merah]
→ Kelas: "Red!"
UCAP: "And this?" [tunjuk benda hitam atau rambut siswa yang berambut hitam — dengan sopan]
→ Kelas: "Black!"`,
          bantuan: 'Jika kelas tidak merespons "mother": tunjuk diri sendiri, ucap "My mother — ibu saya — mother." Tunggu echo. Satu putaran cukup.',
          cue    : 'Ini bukan tes — ini pengingat cepat. Jika siswa tidak ingat satu kata, ucapkan sendiri dan lanjut. Jangan berhenti lebih dari 5 detik di satu item.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 40,

      langkah: [

        // L3 — Introduksi Kosakata Baru: Curly dan Straight
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo, siswa hanya mendengar dan melihat.

AKSI: Gambar dua kepala sederhana di papan — satu dengan garis bergelombang di atas kepala (curly), satu dengan garis lurus (straight). Beri label besar di bawah masing-masing.

UCAP: "Look at this." [tunjuk gambar rambut keriting]
UCAP: "This hair is — curly. Cur-ly." [ucap perlahan, suku kata jelas]
→ Jeda 3 detik.

UCAP: "And this one." [tunjuk gambar rambut lurus]
UCAP: "This hair is — straight. Straight." [ucap dengan jelas]
→ Jeda 3 detik.

AKSI: Tunjuk rambut sendiri.
UCAP: "My hair — is it curly or straight?"
→ Tunggu kelas menjawab sesuai kondisi rambut guru.

UCAP: "Now look at your own hair. Is it curly or straight?"
→ Beri jeda 3 detik. Siswa boleh menyentuh rambut sendiri — ini anchor fisik yang membantu memori.`,
          bantuan: 'Jika siswa bingung membedakan curly dan straight: gambar spiral kecil di sebelah tulisan "curly" dan garis horizontal lurus di sebelah "straight." Kontras visual ini lebih cepat dari penjelasan verbal.',
          cue    : 'Jangan tunjuk rambut siswa tertentu tanpa izin. Pakai rambut guru sendiri sebagai contoh utama. Jika guru ingin melibatkan siswa, tanya dulu: "Can I look at your hair?" dan pilih siswa yang kelihatan mau.',
          darurat: null,
          energi : '🔵',
        },

        // L4 — Drill Kosakata — Curly, Straight, dan Warna Rambut
        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER

AKSI: Tunjuk gambar di papan secara bergantian, cepat.

UCAP: "This hair?" [tunjuk curly]
→ Kelas: "Curly!"
UCAP: "This hair?" [tunjuk straight]
→ Kelas: "Straight!"

AKSI: Percepat — bolak-balik 4–5 kali tanpa jeda panjang.

AKSI: Tambahkan warna:
UCAP: "Curly — and what color?" [tunjuk gambar curly yang sudah diberi warna hitam]
→ Kelas: "Black!"
UCAP: "Straight — what color?" [tunjuk gambar straight yang sudah diberi warna cokelat]
→ Kelas: "Brown!"

AKSI: Tunjuk 2–3 siswa secara acak:
UCAP: "[nama siswa], your hair — curly or straight?"
→ Tunggu jawaban individual.`,
          diferensiasi: {
            perluSupport: 'cukup menjawab satu kata — "curly" atau "straight."',
            sudahBisa   : 'dorong ke kalimat — "My hair is straight" atau "My hair is curly and black."',
          },
          bantuan: 'Jika siswa yang ditunjuk diam lebih dari 5 detik: tunjuk gambar di papan, ucap "Like this — or like this?" sambil tunjuk curly lalu straight. Pilihan biner lebih mudah dari produksi bebas.',
          cue    : null,
          darurat: null,
          energi : '🟠',
        },

        // L5 — Introduksi: Kind
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo dulu.

AKSI: Tunjuk diri sendiri. Senyum besar.

UCAP: "I help my students. I listen to them. I care about them."
→ Jeda.
UCAP: "I am — kind." [tepuk dada pelan sambil ucap "kind"]
→ Jeda 3 detik.
UCAP: "Kind. K-I-N-D. Kind."

AKSI: Beri contoh kontras tanpa menyebut nama siswa:
UCAP: "If someone drops their pencil — and you pick it up — you are kind."
UCAP: "If someone is sad — and you say 'are you okay?' — you are kind."

UCAP: "Is your friend kind?" [tunjuk ke kelas secara umum]
→ Tunggu respons spontan — biasanya "yes!"
UCAP: "Good. Our friends are kind."
UCAP: "Kind people make us happy." [tunjuk senyum di wajah sendiri]`,
          bantuan: 'Jika siswa tampak bingung dengan "kind": ucap dalam Bahasa Indonesia "baik hati" sekali saja, lalu kembali ke Bahasa Inggris. Jangan terjemahkan berulang — satu jangkar cukup.',
          cue    : '"Kind" adalah adjektif karakter, berbeda dari "curly" dan "straight" yang bisa dilihat. Pastikan dua contoh konkret di atas diucapkan dengan jelas — ini yang membuat kata ini bermakna bagi siswa usia 8–10.',
          darurat: null,
          energi : '🟡',
        },

        // L6 — Modeling Kalimat Deskripsi: She has…
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo dulu. Siswa hanya mendengar.

AKSI: Gambar satu karakter di papan (atau tunjuk gambar yang sudah ada). Beri nama karakter: "This is Maya."

UCAP: "Good. Now — let's put it all together."
UCAP: "Listen. I will describe Maya."

UCAP: "She has curly hair."
→ Tulis di papan: She has curly hair.
→ Jeda. Tunjuk tulisan. Tunjuk gambar.

UCAP: "She has black hair."
→ Tulis di papan: She has black hair.

UCAP: "She has big eyes."
→ Tulis di papan: She has big eyes.

UCAP: "She is kind."
→ Tulis di papan: She is kind.

AKSI: Baca semua kalimat bersama-sama sekali.

🗣 TOGETHER
UCAP: "Now — let's read together."
→ Kelas membaca empat kalimat di papan bersama guru.

UCAP: "'She has' — kita pakai untuk mendeskripsikan orang lain. Orang perempuan."
UCAP: "She has... curly hair. She has... black eyes. She has... kind heart."`,
          bantuan: 'Jika siswa membaca dengan sangat pelan atau tidak sinkron: perlambat tempo guru, tunjuk kata per kata di papan dengan spidol saat membaca. Jadikan tunjukan sebagai metronom.',
          cue    : 'Keempat kalimat di papan tetap ada sampai L8 selesai — ini scaffold utama untuk writing. Jangan hapus sebelum siswa selesai menulis.',
          darurat: null,
          energi : '🔵',
        },

        // L7 — Pair Practice — Deskripsikan Teman [FLEX]
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelah mereka.

UCAP: "Look at your partner. Look at their hair."
→ Jeda 3 detik.
UCAP: "Now — say one sentence. 'She has...' or 'He has...'"

AKSI: Demo dulu dengan siswa sukarelawan:
UCAP: "[nama siswa], can you stand up for a second? Class — look at [nama]. What can we say?"
→ Kelas atau guru: "She has straight hair. She has black hair."
UCAP: "Good. Now — you try with your partner."

AKSI: Beri waktu 3 menit untuk pair practice. Circulate — dengarkan tanpa menyela kecuali kekeliruan konsep besar.`,
          diferensiasi: {
            perluSupport: 'cukup satu kalimat — "She has curly hair."',
            sudahBisa   : 'minta dua kalimat atau lebih, termasuk "She is kind."',
          },
          bantuan: 'Jika satu pasang tidak tahu mulai dari mana: dekati, tunjuk rambut partner mereka, ucap perlahan "She has... what kind of hair?" — tunggu salah satu dari mereka melanjutkan.',
          cue    : null,
          darurat: '[FLEX — lewati jika waktu tersisa < 18 menit atau energi kelas di bawah 🟡] Jika pair practice menjadi gaduh dalam 1 menit: hentikan. Ucap "Okay — freeze. Sit down." Lanjut ke L8 langsung.',
          energi : '🟡',
        },

        // L8 — Writing Individual — Kalimat Deskripsi
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L6 (L7 dilewati) — sebelum bagikan lembar kerja, ucap: "Okay, let's take a breath. Good job, everyone." Jeda 3 detik. Lanjut.

AKSI: Bagikan lembar kerja (1 per siswa). Scaffold di papan dari L6 tetap ada.

Lembar kerja berisi template:

  This is _________________.
  She has _________________ hair.
  She has _________________ eyes.
  She is _________________.

UCAP: "Write about one person. Your friend, your mother, your sister — you choose."
UCAP: "Use the words on the board. You can also use your own ideas."

👂 LISTEN FIRST — guru demo mengisi satu template di papan dengan karakter "Maya" dari L6.

UCAP: "Watch me. 'This is Maya. She has curly hair. She has big eyes. She is kind.'" [tulis sambil ucap]
UCAP: "Now — you write about your person. You have time."

AKSI: Circulate. Bergerak ke meja siswa — jangan berdiri di depan.`,
          diferensiasi: {
            perluSupport: 'boleh menyalin struktur dari papan dan hanya mengganti kata kunci (nama dan satu adjektif).',
            sudahBisa   : 'setelah template selesai, minta tambah satu kalimat bebas — misalnya "She likes reading" atau "She is my friend."',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai di TP ini. Siswa boleh menulis tentang karakter fiksi atau tokoh dari buku — tidak harus teman sekelas. Jangan paksa siswa menulis tentang orang tertentu.',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai: minta siswa hanya isi baris 1 dan 2. Langsung ke L10 tanpa melalui L9.',
          energi : '🔵',
        },

        // L9 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil tulisan siswa. Pilih 2 hasil — satu yang lengkap dan benar, satu yang kreatif atau menggunakan kata di luar scaffold.

UCAP: "Good. Let's hear from two friends."
→ Minta 2 siswa membacakan kalimat mereka keras-keras.
→ Kelas mendengarkan.

UCAP (setelah tiap siswa membacakan): "Nice. Let's say it together."
→ Kelas ulang kalimat yang baru dibacakan.

AKSI: Tunjukkan pola di papan:
UCAP: "'She has...' — dua kata ini selalu bersama. 'She has hair. She has eyes.' Ingat — has, bukan have, untuk she."`,
          bantuan: `Jika siswa yang diminta membaca menolak: ucap "That's okay" dan tunjuk siswa lain. Tidak perlu komentar tambahan.`,
          cue    : 'Jangan koreksi "she" vs "he" secara keras — jika siswa menulis "he has" untuk tokoh perempuan, beri catatan lembut di kertas mereka, bukan di depan kelas.',
          darurat: '[FLEX — lewati jika waktu tersisa < 10 menit]',
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 8,

      langkah: [

        // L10 — Sharing dan Review Cepat
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Siswa simpan lembar kerja. Guru kembali ke depan kelas.

UCAP: "Good work today, everyone. Let's remember."
UCAP: "How do we describe hair?" [tunjuk gambar curly di papan]
→ Kelas: "Curly!" atau "Straight!"
UCAP: "And how do we say it in a sentence?"
→ Kelas atau satu siswa: "She has curly hair!"
UCAP: "And if someone is good and caring — what do we call them?"
→ Kelas: "Kind!"

AKSI: Hapus kata-kata di papan satu per satu. Kelas ucapkan kata yang dihapus.
Urutan hapus: curly → straight → kind → She has`,
          bantuan: null,
          cue    : 'Jaga ritme pelan dan tenang. Ini konsolidasi, bukan drill baru.',
          darurat: null,
          energi : '🟡',
        },

        // L11 — Closure Emosional + Teaser TP03
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan dari sebelumnya.

UCAP: "Before we finish — I want to say something."
UCAP: "Today you described people. Your friends, your family."
UCAP: "That takes courage. Good job."

→ Jeda 5 detik.

UCAP: "One question — who did you write about today?"
→ Tunjuk 1–2 siswa yang mau berbagi. Nama saja sudah cukup sebagai jawaban.

UCAP: "Next time — we will talk about places. Where do you live? What is near your house?"
[Teaser untuk TP03 — My Neighborhood]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : 'Kalimat "That takes courage" penting untuk siswa yang merasa tidak percaya diri menulis tentang orang — afirmasi ini ringan tapi bermakna.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B02;
