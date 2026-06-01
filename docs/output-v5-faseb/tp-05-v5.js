/**
 * =============================================================
 * FLAF — TP B05 (Telling Time)
 * File: docs/output-v5-faseb/tp-05-v5.js
 * Format: v5.0
 * Fase: B (Kelas 3–4)
 * Jenis: Biasa — Kluster B
 * Source: flaf-skenario-tp05-v2.txt (Fase B)
 * =============================================================
 */

const TP_B05 = {

  id       : 'tp-b05',
  nomor    : 5,
  kelas    : 3,
  nama     : 'Telling Time',
  tema     : 'Mengenal dan menggunakan ekspresi waktu dalam percakapan sehari-hari',
  kluster  : 'B',
  jenis    : 'Biasa',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat menyebutkan jam dengan benar menggunakan ekspresi "o\'clock" dan "half past" untuk jam penuh dan setengah jam.',
    'Peserta didik dapat menanyakan dan menjawab pertanyaan waktu menggunakan "What time is it?" dan "It is ___ o\'clock / half past ___."',
    'Peserta didik dapat menulis jadwal kegiatan harian sederhana menggunakan ekspresi waktu dalam bahasa Inggris.',
  ],

  vocab    : ['o\'clock', 'half past', 'What time is it?', 'wake up', 'go to school', 'eat breakfast', 'sleep', 'morning', 'afternoon'],

  persiapan: [
    'Gambar jam analog sederhana — satu menunjukkan pukul 7.00 (untuk L3) dan satu menunjukkan pukul 6.30 (untuk L5) — bisa digambar di papan sebelum kelas atau dicetak',
    'Lembar kerja siswa: 1 per siswa — tiga gambar jam analog kosong berlabel "I wake up at ___", "I go to school at ___", "I eat breakfast at ___" + satu baris tulis di bawah masing-masing',
    'Papan tulis + spidol — angka 1–12 ditulis di L2 dan tetap ada sampai L7 selesai; dialog "What time is it?" ditulis di L6 dan tetap ada sampai L8 selesai',
  ],

  checklist: [
    'Gambar jam analog sudah disiapkan sebelum kelas — satu untuk pukul 7.00 (L3) dan satu untuk pukul 6.30 (L5)',
    'Angka 1–12 di papan TIDAK dihapus sampai L7 selesai — ini referensi visual utama seluruh sesi',
    'Dialog "What time is it?" dan dua template jawaban di papan TIDAK dihapus sampai L8 selesai',
    'Penilaian formatif sudah dibuka di L8 — minimal 3 siswa sudah dinilai',
    'Referensi ke TP04 ("she goes to the market — but what time?") sudah disampaikan di L1',
    'Siswa yang membacakan di L9 berbeda dari yang menjawab di L4',
    'Kontras "o\'clock" vs "half past" sudah ditegaskan minimal 2 kali — di L5 dan di L10',
    'Ada jam yang terlihat di kelas untuk pertanyaan "What time is it right now?" di L11',
  ],

  printables: [
    { file: 'tp-b05-clock-worksheet.png',          label: 'Clock Worksheet' },
    { file: 'tp-b05-draw-the-clock-worksheet.png', label: 'Draw The Clock Worksheet' },
    { file: 'tp-b05-half-past.png',                label: 'Half Past' },
    { file: 'tp-b05-oclock.png',                   label: 'Oclock' },
    { file: 'tp-b05-quarter-past.png',             label: 'Quarter Past' },
    { file: 'tp-b05-quarter-to.png',               label: 'Quarter To' },
    { file: 'tp-b05-time-reference-card.png',      label: 'Time Reference Card' },
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
      'L3 dan L5 adalah dua layar introduksi berurutan — masing-masing untuk satu ekspresi waktu. Jangan gabungkan. L3 harus selesai tuntas sebelum L5 dimulai. Jika L3 terasa terlalu singkat, tambahkan satu contoh angka yang belum dipakai — tetap dalam budget 4 menit.',
      'L4 adalah layar dengan energi tertinggi di sesi ini. Jika kelas terlalu gaduh setelah L4, gunakan transisi pelan ke L5 — ucap dengan suara lebih rendah dari biasanya. Perubahan volume guru adalah reset yang lebih efektif dari tepuk tangan.',
      'L8: siswa akan tergoda menulis angka saja tanpa ekspresi waktu. Ingatkan di menit pertama: "Don\'t forget — o\'clock or half past." Satu pengingat cukup — jangan diulang setiap menit.',
    ],
    autonomy: [
      'Gambar jam analog di L3 dan L5 boleh diganti dengan gambar jam digital — yang penting angka dan format "o\'clock"/"half past" tetap terlihat jelas.',
      'Jika sekolah tidak memiliki jam dinding yang terlihat dari seluruh kelas, siapkan HP guru untuk ditunjukkan di L11.',
      'Pair practice di L7 boleh dilakukan dengan kartu angka yang dibuat siswa sendiri (tulis satu angka di kertas kecil, ditunjukkan ke partner) — ini menambah elemen fisik yang membantu siswa yang kesulitan memilih angka secara verbal.',
      '"Half past" boleh diperkenalkan dengan jangkar Bahasa Indonesia "setengah [angka]" di L5 — satu kali, tidak lebih.',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sudah terbentuk sejak TP01 — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — beri jeda 3 detik diam, pandang bagian kelas yang paling ramai, lanjutkan hanya setelah mereka berhenti.',
    cue    : 'Kluster B dimulai hari ini. Topik berubah dari "siapa dan di mana" ke "kapan." Settling yang tenang memberi ruang transisi ini terasa natural.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Koneksi TP04 + Number Chant
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali. Tanya kelas.

UCAP: "Last time — we wrote a paragraph. About one person and one place."
UCAP: "Your paragraph said: 'She goes to the market.'"
→ Jeda.
UCAP: "But — what time does she go? Seven? Eight? Nine?"
→ Biarkan siswa menjawab bebas — apapun angka yang mereka sebut, terima dengan anggukan.
UCAP: "Today — we learn to say the time. So our paragraphs can be more complete."

AKSI: Langsung masuk ke number chant dengan ketukan meja.

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"One — two — three — four — FIVE!
Six — seven — eight — nine — TEN!
Eleven — twelve — what time is it? — GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal urutan angka di putaran pertama: tidak masalah — angka ini sudah dikenal dari Fase A. Perlambat ritme, tunjuk jari setiap angka, biarkan siswa mengikuti secara fisik.',
          cue    : 'Jembatan ke TP04 ("she goes to the market — but what time?") adalah kalimat terpenting di layar ini. Ucap dengan penasaran, bukan terburu-buru — ini yang membuat siswa merasakan bahwa waktu adalah informasi yang hilang dari paragraf mereka.',
          darurat: 'Jika kelas masih gaduh setelah chant selesai: tepuk satu kali keras, ucap "Freeze — sit down — listen." Lanjut ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation — Angka 1–12 dan Daily Routines
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tulis angka 1–12 di papan dalam dua baris:
  1  2  3  4  5  6
  7  8  9  10  11  12

UCAP: "Count with me — one to twelve."
→ Tunjuk tiap angka, kelas hitung bersama.
→ Ulangi sekali lebih cepat.

UCAP: "Good. Now — daily routines. What do you do in the morning?"
→ Kelas: "Wake up!" / "Eat breakfast!" / "Go to school!"
UCAP: "And at night?"
→ Kelas: "Sleep!"

AKSI: Tulis di papan di samping angka:
  wake up — eat breakfast — go to school — sleep

UCAP: "These things happen at different times. What time do you wake up?"
→ Biarkan 2–3 siswa menjawab dalam bahasa apapun. Dengarkan tanpa koreksi.
UCAP: "Good. Today — we learn how to say those times in English."`,
          bantuan: 'Jika kelas tidak merespons "wake up" atau "go to school": ucapkan sendiri sambil buat gesture — tangan di pipi untuk bangun tidur, tangan melambai untuk pergi ke sekolah. Gesture konkret mengaktifkan memori lebih cepat dari pertanyaan verbal.',
          cue    : 'Angka 1–12 di papan tetap ada sampai L6 selesai — ini referensi visual utama untuk seluruh sesi. Jangan hapus sebelum L7 dimulai.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 40,

      langkah: [

        // L3 — Introduksi: O'clock
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo, siswa hanya mendengar dan melihat.

AKSI: Gambar jam analog sederhana di papan (atau tunjukkan gambar yang sudah disiapkan) — jarum menunjukkan pukul 7.00. Tulis "7:00" di bawahnya.

UCAP: "Look at this clock." [tunjuk gambar]
UCAP: "This is — seven o'clock. Se-ven o'-clock." [ucap perlahan]
→ Tulis di papan: 7 o'clock
→ Jeda 3 detik.

UCAP: "O'clock — kita pakai untuk jam penuh. Jam tujuh tepat — seven o'clock."

AKSI: Ganti angka di gambar — hapus "7:00", tulis "8:00", ubah posisi jarum.
UCAP: "Now — eight o'clock." [ucap]
→ Tulis: 8 o'clock

AKSI: Ganti lagi ke "6:00".
UCAP: "And this one?"
→ Jeda — tunggu kelas menjawab: "Six o'clock!"
UCAP: "Yes — six o'clock."

AKSI: Tunjuk daftar daily routines di papan.
UCAP: "I wake up at six o'clock." [tunjuk "wake up" di papan, lalu tunjuk angka 6]
UCAP: "I go to school at seven o'clock." [tunjuk "go to school", lalu tunjuk angka 7]`,
          bantuan: 'Jika siswa bingung dengan kata "o\'clock": ucap perlahan — "o\' — clock" — sambil tunjuk jam di papan dua kali. Tidak perlu diterjemahkan. Biarkan pengulangan dengan konteks visual yang bekerja.',
          cue    : 'Angka di papan adalah jangkar — setiap kali mengucapkan jam, tunjuk angkanya di papan sebelum mengucapkan "o\'clock." Ini membangun koneksi visual-lisan yang kritis sebelum drill di L4.',
          darurat: null,
          energi : '🔵',
        },

        // L4 — Drill — O'clock dengan Angka
        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER

AKSI: Tunjuk angka di papan satu per satu secara acak. Kelas ucapkan jamnya.

AKSI: Tunjuk angka 9.
UCAP: "What time?" [tunjuk angka]
→ Kelas: "Nine o'clock!"

AKSI: Tunjuk angka 12.
→ Kelas: "Twelve o'clock!"

AKSI: Tunjuk angka 3.
→ Kelas: "Three o'clock!"

AKSI: Percepat — tunjuk 5–6 angka berbeda secara acak tanpa jeda panjang.

AKSI: Balik arah — ucap jam, kelas tunjuk angkanya di papan (atau angkat jari sebanyak angka itu):
UCAP: "Five o'clock — which number?"
→ Kelas tunjuk angka 5 di papan atau angkat 5 jari.

AKSI: Tunjuk 2–3 siswa individual:
UCAP: "[nama], what time do you wake up? Tell me with o'clock."
→ Jawaban yang diharapkan: "Six o'clock!" atau "Five o'clock!"`,
          diferensiasi: {
            perluSupport: 'cukup menjawab angka + o\'clock — "Seven o\'clock."',
            sudahBisa   : 'minta kalimat penuh — "I wake up at seven o\'clock."',
          },
          bantuan: 'Jika siswa yang ditunjuk diam lebih dari 5 detik: tunjuk angka di papan dan ucap separuhnya — "Seven..." — tunggu siswa melanjutkan "o\'clock!" Jika masih diam, ucap bersama kelas dan lanjut.',
          cue    : 'L4 adalah layar dengan energi tertinggi di sesi ini — biarkan kelas ramai. Kamu akan turunkan energi di L5 dengan volume suara yang lebih rendah, bukan tepuk tangan.',
          darurat: null,
          energi : '🟠',
        },

        // L5 — Introduksi: Half Past
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pelan suara. Tarik napas kecil yang terlihat oleh kelas. Tunggu 2 detik sebelum mulai. Ini cukup untuk menurunkan energi dari L4.

👂 LISTEN FIRST — guru demo dulu.

AKSI: Gambar jam baru di papan (atau tunjukkan gambar yang sudah disiapkan) — jarum menunjukkan pukul 6.30. Tulis "6:30" di bawahnya.

UCAP: "Look at this clock." [tunjuk]
UCAP: "This is — half past six. Half past six." [ucap perlahan]
→ Tulis di papan: half past 6
→ Jeda 3 detik.

UCAP: "Half past — setengah lewat. Enam lewat tiga puluh menit — half past six."

AKSI: Tunjuk angka 6 di daftar angka di papan, lalu tunjuk jam.
UCAP: "Half past six — I wake up at half past six."

AKSI: Ganti ke 7:30.
UCAP: "And this?"
→ Jeda — tunggu kelas mencoba menjawab.
UCAP: "Half past seven." [jika kelas tidak menjawab, ucapkan sendiri dulu]
→ Tulis: half past 7

AKSI: Uji kontras langsung:
UCAP: "Seven o'clock —" [tunjuk jam 7.00 yang masih ada di papan] "— atau —" [tunjuk jam 7.30]
UCAP: "Half past seven."
UCAP: "Different — yes?"
→ Kelas: "Yes!"

🗣 TOGETHER
UCAP: "Say it with me — half past six."
→ Kelas mengulang 2 kali.
UCAP: "Half past seven."
→ Kelas mengulang 2 kali.`,
          bantuan: 'Jika siswa bingung dengan "half past": ucap dalam Bahasa Indonesia sekali — "setengah tujuh — in English: half past six" — satu jangkar cukup. Lanjut ke contoh berikutnya.',
          cue    : 'Kontras antara "seven o\'clock" (tepat) dan "half past seven" (setengah) adalah konsep kritis di layar ini. Jika siswa mencampur keduanya di L7 atau L8, kembali ke kontras visual di papan — bukan penjelasan verbal.',
          darurat: 'Jika L5 melewati 6 menit dan siswa masih belum bisa mengulang "half past": lanjutkan ke L6. Scaffold di papan sudah cukup untuk L8. Tidak perlu produksi lisan yang sempurna sebelum lanjut.',
          energi : '🟡',
        },

        // L6 — Introduksi: What Time Is It? + Modeling Dialog
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo dialog dulu. Siswa hanya mendengar.

UCAP: "Now — we learn how to ask the time."
UCAP: "The question is: 'What time is it?'"
→ Tulis di papan: What time is it?
→ Jeda 3 detik.

UCAP: "And the answer — 'It is seven o'clock.' or 'It is half past six.'"
→ Tulis di papan:
    It is _______ o'clock.
    It is half past _______.

AKSI: Demo dialog dengan diri sendiri — guru pegang penggaris sebagai "jam", tunjukkan dua posisi:

UCAP: [posisi penggaris = 7.00]
"What time is it?"
"It is seven o'clock."

UCAP: [posisi penggaris = 6.30]
"What time is it?"
"It is half past six."

🗣 TOGETHER — guru tanya, kelas jawab:
AKSI: Tunjuk angka 8 di papan.
UCAP: "What time is it?"
→ Kelas: "It is eight o'clock!"

AKSI: Gambar cepat jam 9.30 di papan.
UCAP: "What time is it?"
→ Kelas: "It is half past nine!"

UCAP: "Good. Now — you will practice with a partner."`,
          bantuan: 'Jika kelas menjawab hanya angkanya saja ("Eight!") tanpa ekspresi waktu: ucap kalimat penuh dengan intonasi yang melebih-lebihkan — "It is eight o\'CLOCK!" — minta kelas ulangi dengan intonasi yang sama. Intonasi dramatis membantu siswa mengingat pola kalimat.',
          cue    : 'Dialog di papan — "What time is it?" dan dua template jawaban — tetap ada sampai L8 selesai. Ini scaffold utama untuk pair practice dan writing. Jangan hapus.',
          darurat: null,
          energi : '🔵',
        },

        // L7 — Pair Practice — Tanya-Jawab Waktu [FLEX]
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Minta siswa duduk menghadap partner di sebelah mereka.

UCAP: "Work with your partner. One person asks — 'What time is it?' The other person answers."
UCAP: "Use the clock on the board to choose a time."

AKSI: Demo sekali dengan satu siswa sukarelawan:
UCAP: "[nama], what time is it?" [tunjuk angka 10 di papan]
→ Siswa: "It is ten o'clock!"
UCAP: "Good. Now swap — you ask me."
→ Siswa: "What time is it?"
UCAP: [tunjuk gambar jam 7.30] "It is half past seven!"

UCAP: "Your turn. You have 4 minutes."

AKSI: Circulate — dengarkan tanpa menyela kecuali ada kekeliruan konsep besar (siswa mencampur o'clock dan half past secara sistematis).`,
          diferensiasi: {
            perluSupport: 'boleh menggunakan hanya "o\'clock" — skip "half past" jika terlalu berat.',
            sudahBisa   : 'setelah tanya-jawab waktu, minta tambahkan satu kalimat rutinitas — "It is seven o\'clock. I go to school."',
          },
          bantuan: 'Jika satu pasang tidak tahu mulai dari mana: dekati, tunjuk angka di papan, ucap separuh pertanyaan — "What time..." — tunggu salah satu dari mereka melanjutkan "is it?" Setelah itu arahkan yang lain untuk menjawab.',
          cue    : 'Pair practice di sini adalah latihan lisan pertama untuk "What time is it?" — biarkan energi naik sedikit. Yang penting template kalimat dipakai; intonasi yang sempurna bukan prioritas.',
          darurat: '[FLEX — lewati jika waktu tersisa < 18 menit atau energi kelas di bawah 🟡] Jika pair practice menjadi gaduh dalam 1 menit: hentikan, ucap "Okay — back to me. Look at the board." Lanjut ke L8 dengan "Take your pencil. Let\'s write."',
          energi : '🟡',
        },

        // L8 — Writing Individual — Jadwal Waktuku
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L6 (L7 dilewati) — ucap: "Okay. Take your pencil. Let's write." Jeda 3 detik. Bagikan lembar kerja.
AKSI: Bagikan lembar kerja (1 per siswa). Scaffold di papan dari L6 tetap ada.

Lembar kerja berisi:
- Tiga gambar jam analog kosong — masing-masing berlabel:
    Jam 1: I wake up at _______
    Jam 2: I go to school at _______
    Jam 3: I eat breakfast at _______
- Di bawah setiap jam: satu baris untuk menulis ekspresi waktu

UCAP: "Look at the clocks. Write the time you do each activity."
UCAP: "Use 'o'clock' or 'half past.' Your real time — not a random number."

👂 LISTEN FIRST — guru demo mengisi satu baris di papan:
UCAP: "Watch me. I wake up at — six o'clock — in the morning." [tulis "six o'clock in the morning" di papan]
UCAP: "In the morning — pagi. In the afternoon — siang."
UCAP: "If you want — add 'in the morning' or 'in the afternoon' after your time. Optional."
UCAP: "Now — your turn. Write your real times."

AKSI: Mundur dari depan kelas. Circulate — bergerak ke meja siswa, jangan berdiri di depan.`,
          diferensiasi: {
            perluSupport: 'boleh menggunakan hanya angka + o\'clock untuk semua tiga baris. Tidak perlu "half past" jika belum siap.',
            sudahBisa   : 'setelah tiga baris selesai, minta tambah satu kalimat: "I sleep at _______ o\'clock."',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai di TP ini. "Your real time" adalah instruksi yang penting — ini bukan tes. Tidak ada jawaban yang salah selama menggunakan format "o\'clock" atau "half past" dengan benar.',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai: minta siswa hanya mengisi dua baris pertama (wake up dan go to school). Langsung ke L10 tanpa melalui L9.',
          energi : '🔵',
        },

        // L9 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil tulisan siswa. Pilih 2 hasil — satu yang menggunakan "o'clock" dengan benar, satu yang menggunakan "half past" atau menambahkan rutinitas ekstra.

UCAP: "Good. Let's hear from two friends."
→ Minta 2 siswa membacakan kalimat mereka keras-keras ke kelas.
→ Kelas mendengarkan.

UCAP (setelah tiap siswa membacakan): "Nice. Let's say it together."
→ Kelas ulang kalimat yang baru dibacakan.

AKSI: Tunjuk kontras di papan sekali lagi:
UCAP: "Seven o'clock —" [tunjuk gambar jam penuh] "— half past seven —" [tunjuk gambar jam setengah]
UCAP: "Remember the difference. It will come back next time."`,
          bantuan: 'Jika siswa yang diminta membaca menolak: ucap "That\'s okay" dan tunjuk siswa lain. Tidak perlu komentar tambahan.',
          cue    : 'Pilih siswa yang berbeda dari yang sudah menjawab di L4. Jika ada siswa yang menulis angka saja tanpa "o\'clock" atau "half past" — baca kalimat mereka dengan format yang benar tanpa menyebut nama: "If I wrote \'seven\', I say \'seven o\'clock.\'"',
          darurat: '[FLEX — lewati jika waktu tersisa < 10 menit]',
          energi : '🔵',
        },

      ],
    },

    {
      fase  : 'Penutup',
      durasi: 8,

      langkah: [

        // L10 — Review + Hapus Papan
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Siswa simpan lembar kerja. Guru kembali ke depan kelas.

UCAP: "Good work today. Let's remember."
UCAP: "How do we say jam tujuh tepat?"
→ Kelas: "Seven o'clock!"
UCAP: "And jam setengah delapan?"
→ Kelas: "Half past seven!"
UCAP: "And the question — how do we ask the time?"
→ Kelas: "What time is it?"

UCAP: "Give me a sentence — I wake up at...?"
→ Satu siswa atau kelas: "I wake up at six o'clock!" atau "I wake up at half past five!"

AKSI: Hapus kata-kata di papan satu per satu. Kelas ucapkan kata yang dihapus.
Urutan hapus: o'clock → half past → What time is it? → angka 1–12`,
          bantuan: null,
          cue    : 'Hapus angka 1–12 terakhir — bukan pertama. Angka adalah fondasi; ekspresi waktu yang dibangun di atasnya dihapus lebih dulu. Urutan ini memperkuat hirarki konsep secara visual.',
          darurat: null,
          energi : '🟡',
        },

        // L11 — Closure Emosional + Teaser TP06
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan dari sebelumnya.

UCAP: "Before we finish — one question."
UCAP: "What time is it right now?" [tunjuk jam di kelas atau HP guru]
→ Tunggu siswa menjawab — dalam format apapun. Terima "nine o'clock" dan "nine-thirty" dan bahkan angka saja.
UCAP: "Good. Now you can say the time in English."

→ Jeda 3 detik.

UCAP: "Next time — we use these times to talk about our whole day. What we do first. What we do after."
[Teaser TP06 — My Daily Schedule]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : 'Pertanyaan "What time is it right now?" adalah momen ketika bahasa yang baru dipelajari langsung terasa relevan — siswa menjawab tentang waktu yang sebenarnya terjadi. Ini lebih kuat dari pertanyaan hipotetis. Pastikan ada jam yang bisa dilihat di kelas.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B05;
