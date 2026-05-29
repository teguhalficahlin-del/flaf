/**
 * =============================================================
 * FLAF — TP B03 (My Neighborhood)
 * File: docs/output-v5-faseb/tp-03-v5.js
 * Format: v5.0
 * Fase: B (Kelas 3–4)
 * Source: flaf-skenario-tp03-v2.txt (Fase B)
 * =============================================================
 */

const TP_B03 = {

  id       : 'tp-b03',
  nomor    : 3,
  kelas    : 3,
  nama     : 'My Neighborhood',
  tema     : 'Mendeskripsikan tempat dan posisi di lingkungan sekitar',
  kluster  : 'A',
  jenis    : 'Biasa',
  deskripsi: '',

  indikator: [
    'Peserta didik dapat menyebutkan nama tempat di lingkungan sekitar (market dan mosque) dalam kalimat sederhana bahasa Inggris.',
    'Peserta didik dapat menggunakan preposisi posisi "next to" dan "across from" untuk mendeskripsikan letak tempat secara lisan.',
    'Peserta didik dapat menulis kalimat sederhana tentang lingkungan tempat tinggal menggunakan preposisi posisi dan kosakata tempat.',
  ],

  vocab    : ['market', 'mosque', 'next to', 'across from', 'door', 'window', 'near', 'in front of', 'house', 'school', 'big', 'fish'],

  persiapan: [
    'Gambar atau sketsa sederhana sebuah jalan dengan dua bangunan berdampingan — untuk demo L5',
    'Gambar atau sketsa dengan dua bangunan berhadapan di sisi jalan berbeda — untuk demo L6',
    'Lembar kerja siswa: 1 per siswa — template peta lingkungan kosong (lihat L8)',
    'Papan tulis + spidol untuk menggambar peta dan menulis kalimat di L5, L6, L7, dan L8',
  ],

  checklist: [
    'Gambar peta dengan SCHOOL, MARKET, dan MOSQUE sudah digambar di papan sebelum L5 — atau sudah disiapkan sebagai gambar terpisah',
    'Gesture "next to" (berdampingan) dan "across from" (berseberangan) digunakan konsisten di L5, L6, L7, dan L8',
    'Scaffold kelima kalimat di papan TIDAK dihapus sampai L8 selesai',
    'Penilaian formatif sudah dibuka di L8 — minimal 3 siswa sudah dinilai',
    'Referensi ke TP02 (curly/straight/kind/She has) sudah muncul di L1',
    'Siswa yang membacakan di L9 berbeda dari yang menjawab di L4',
    'Siswa yang menulis nama tempat dalam Bahasa Indonesia di L8 tidak dikoreksi — tetap diterima',
    'Closure di L11 diakhiri dengan goodbye ritual — bukan instruksi administratif',
    'Teaser TP04 sudah disampaikan dengan framing "sesuatu yang spesial" — bukan sekadar nama topik',
  ],

  energi_map: [
    'L0 ⚪',
    'L1 🔴',
    'L2 🟡',
    'L3 🔵',
    'L4 🟠',
    'L5 🟡',
    'L6 🟡',
    'L7 🔵',
    'L8 🔵',
    'L9 🔵',
    'L10 🟡',
    'L11 🔵',
  ],

  catatan: {
    risiko: [
      'L5 dan L6: Dua layar preposisi posisi berurutan adalah bagian paling berat sesi ini. Jangan gabungkan — keduanya butuh waktu sendiri. Jika L5 memakan lebih dari 5 menit, potong L6 ke gesture dan satu kalimat saja — sisanya akan tercover oleh scaffold di papan saat L8.',
      'L8: Aktivitas menggambar peta bisa menjadi pengalih — siswa yang terlalu fokus menggambar lupa menulis kalimat. Ingatkan di menit ke-4: "Don\'t forget to write your sentences."',
      'L7: Kalimat keempat di papan ("The market is near my house") menggunakan "near" — kosakata Fase A yang sudah dikenal. Jika siswa bertanya kenapa tidak "next to", jelaskan dengan santai: "Both are okay — \'near\' means close, \'next to\' means right beside."',
    ],
    autonomy: [
      'Market dan mosque adalah pilihan default karena paling universal untuk konteks Indonesia. Jika sekolah berada di lingkungan yang dominan gereja, klenteng, atau tempat ibadah lain — ganti "mosque" dengan tempat ibadah yang lebih relevan.',
      'Lembar kerja peta boleh digambar oleh guru di papan sebagai template bersama jika lembar kerja cetak tidak tersedia — minta siswa menyalin template ke buku mereka sendiri.',
      'Jika ada siswa yang tidak tahu apa yang ada di dekat rumahnya (misalnya baru pindah) — arahkan ke lingkungan sekolah: "What is near our school?" Valid dan tidak memerlukan pengetahuan personal.',
    ],
  },

  preOpening: {
    tipe   : 'instruksi',
    teks   : `AKSI: Berdiri di depan kelas. Tunggu siswa duduk dan tenang. Rutinitas yang sama seperti TP01 dan TP02 — tunggu 80% fokus sebelum mulai.

UCAP: "Good morning, everyone."
→ Tunggu respons kelas.
UCAP: "Sit down, please. Listen. We start now."`,
    bantuan: 'Jika ada siswa yang masih gaduh — beri jeda 3 detik diam, pandang bagian kelas yang paling ramai, lanjutkan hanya setelah mereka berhenti.',
    cue    : '"Sit down" dan "Listen" sekarang sudah menjadi rutinitas tiga TP. Jika kelas merespons lebih cepat dari sebelumnya — itu tanda rutinitas mulai bekerja. Tidak perlu dikomentari, cukup lanjut.',
    darurat: null,
    energi : '⚪',
  },

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [

        // L1 — Koneksi TP02 + Chant Lingkungan
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tepuk tangan dua kali. Tanya kelas dengan nada ceria.

UCAP: "Last time — we talked about people. How do we describe hair?"
→ Kelas: "Curly! Straight!"
UCAP: "And if someone is good and caring?"
→ Kelas: "Kind!"
UCAP: "Good. And how do we say it?"
→ Satu siswa atau kelas: "She has curly hair!"

UCAP: "Great. Today — we talk about our neighborhood. The places near our house."

AKSI: Langsung masuk ke chant dengan ketukan meja:

👂 LISTEN FIRST — guru demo sekali.

UCAP (ketuk meja 1×1):
"House — school — door — window — GO!
Near my house — near my school — GO!
This is my neighborhood — let's GO!"

🗣 TOGETHER — ulangi 2 putaran. Putaran kedua lebih cepat.`,
          bantuan: 'Jika siswa tidak hafal chant di putaran pertama: pelankan ritme, tunjuk pintu kelas saat ucap "door", tunjuk jendela saat ucap "window" — gesture konkret membantu siswa mengisi kata yang tidak mereka ingat.',
          cue    : 'Chant ini mengaktifkan kosakata Fase A yang akan jadi fondasi L2 dan L5–L7. Biarkan energi naik penuh di sini — ini satu-satunya momen 🔴 di sesi ini.',
          darurat: 'Jika kelas masih gaduh setelah chant selesai: tepuk satu kali keras, ucap "Freeze — sit down — listen." Lanjut ke L2 langsung.',
          energi : '🔴',
        },

        // L2 — Reactivation — House, School, Door, Window
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Tunjuk benda nyata di kelas — pintu dan jendela. Tanya kelas.

UCAP: "What is this?" [tunjuk pintu kelas]
→ Kelas: "Door!"
UCAP: "And this?" [tunjuk jendela kelas]
→ Kelas: "Window!"

UCAP: "Good. Now — what is this building?" [tunjuk sekeliling kelas]
→ Kelas: "School!"
UCAP: "And where do you sleep at night? Where is your family?"
→ Kelas: "House!"

UCAP: "Is our school big or small?"
→ Kelas menjawab sesuai kondisi nyata sekolah.
UCAP: "And your house — big or small?"
→ Biarkan beberapa siswa menjawab berbeda-beda — "big!", "small!" — ini normal dan tidak perlu disamakan.

UCAP: "What is near your house?" [tunjuk ke kelas secara umum — pertanyaan terbuka]
→ Biarkan 2–3 siswa menjawab bebas dalam Bahasa apapun. Dengarkan tanpa koreksi.
UCAP: "Good. Today — we learn the words for those places."`,
          bantuan: 'Jika kelas tidak merespons "near your house": ubah pertanyaan ke Bahasa Indonesia sekali — "Di dekat rumah kalian ada apa?" — setelah siswa menjawab dalam Bahasa Indonesia, lanjut ke L3 tanpa memaksa terjemahan.',
          cue    : 'Pertanyaan terakhir ("What is near your house?") adalah jembatan ke L3. Jawaban siswa — apapun bahasanya — memberi guru petunjuk apa yang relevan untuk kelas ini.',
          darurat: null,
          energi : '🟡',
        },

      ],
    },

    {
      fase  : 'Inti',
      durasi: 40,

      langkah: [

        // L3 — Introduksi Kosakata Baru: Market dan Mosque
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo, siswa hanya mendengar dan melihat.

AKSI: Gambar dua bangunan sederhana di papan — satu dengan atap biasa berlabel "MARKET", satu dengan kubah berlabel "MOSQUE". Label ditulis besar dan jelas.

UCAP: "Look at this." [tunjuk gambar market]
UCAP: "This is — the market. Mar-ket." [ucap perlahan, suku kata jelas]
→ Jeda 3 detik.
UCAP: "In the market, we buy food. We buy vegetables. We buy fish."

UCAP: "And this." [tunjuk gambar mosque]
UCAP: "This is — the mosque. Mosque." [ucap dengan jelas]
→ Jeda 3 detik.
UCAP: "In the mosque, we pray. It has a big door."

AKSI: Tunjuk gambar market lalu mosque sekali lagi.
UCAP: "Market — mosque. These are places in our neighborhood."`,
          bantuan: 'Jika siswa bingung dengan "market" (mungkin lebih mengenal "pasar"): tunjuk gambar, ucap "pasar — in English: market." Satu jangkar cukup. Jangan ulang terjemahan di layar berikutnya.',
          cue    : '"Mosque" adalah kata yang sangat dekat dengan konteks keseharian siswa. Gunakan ini — bukan hindari. Kata yang bermakna secara personal lebih mudah diingat.',
          darurat: null,
          energi : '🔵',
        },

        // L4 — Drill Kosakata — Market dan Mosque
        {
          tipe        : 'instruksi',
          teks        : `🗣 TOGETHER

AKSI: Tunjuk gambar di papan secara bergantian, cepat.

UCAP: "This place?" [tunjuk market]
→ Kelas: "Market!"
UCAP: "This place?" [tunjuk mosque]
→ Kelas: "Mosque!"

AKSI: Percepat — bolak-balik 4–5 kali tanpa jeda panjang.

AKSI: Tambahkan konteks:
UCAP: "Where do we buy food?" [tanpa tunjuk gambar — dari memori]
→ Kelas: "Market!"
UCAP: "Where do we pray?"
→ Kelas: "Mosque!"

AKSI: Tunjuk 2–3 siswa secara acak:
UCAP: "[nama siswa] — where do you buy fish?"
→ Jawaban yang diharapkan: "Market!"
UCAP: "[nama siswa lain] — what is near your house — market or mosque?"
→ Jawaban bebas — terima apapun yang benar.`,
          diferensiasi: {
            perluSupport: 'jawaban satu kata diterima penuh — "market" atau "mosque."',
            sudahBisa   : 'dorong ke kalimat — "The market is near my house."',
          },
          bantuan: 'Jika siswa yang ditunjuk diam lebih dari 5 detik: tunjuk gambar, ucap awal kata — "mar..." — tunggu. Jika masih diam, ucap bersama kelas dan lanjut tanpa komentar.',
          cue    : null,
          darurat: null,
          energi : '🟠',
        },

        // L5 — Introduksi: Next To
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo dulu.

AKSI: Gambar peta sederhana di papan — satu jalan horizontal, dua bangunan berdampingan di sisi yang sama. Beri label: "SCHOOL" dan "MARKET".

UCAP: "Look at this map." [tunjuk gambar]
UCAP: "Where is the market?" [tunjuk bangunan market di peta]
→ Jeda — siswa belum tahu jawabannya, ini tujuannya.
UCAP: "The market is — next to — the school." [ucap pelan, tunjuk posisi di peta]
→ Tulis di papan: The market is next to the school.
→ Jeda 3 detik. Tunjuk tulisan. Tunjuk gambar.

UCAP: "Next to — artinya di sebelah. Side by side." [gerakkan dua tangan berdampingan]
→ Jeda.
UCAP: "The market is next to the school." [ulangi sekali]

🗣 TOGETHER
UCAP: "Say it with me — the market is next to the school."
→ Kelas mengulang bersama 2 kali.

AKSI: Ganti contoh — tunjuk pintu dan jendela kelas yang berdekatan (jika ada):
UCAP: "The door is next to the window."
→ Kelas: "The door is next to the window!"`,
          bantuan: 'Jika kelas tidak merespons kalimat bersama: ucap satu kata satu per satu sambil tunjuk gambar — "The — market — is — next to — the — school." Minta kelas echo tiap kata sebelum minta kalimat penuh.',
          cue    : 'Gesture dua tangan berdampingan adalah anchor fisik untuk "next to." Gunakan gesture ini setiap kali kata ini muncul — di L5, L6, L7, dan L8. Konsistensi gesture membantu siswa yang belum bisa membaca kalimat panjang.',
          darurat: 'Jika L5 melewati 6 menit dan siswa masih belum bisa mengulang kalimat: lanjutkan ke L6. Scaffold peta di papan dan kalimat tertulis sudah cukup sebagai referensi di L8 — tidak perlu produksi lisan yang sempurna sebelum lanjut.',
          energi : '🟡',
        },

        // L6 — Introduksi: Across From
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST — guru demo dulu.

AKSI: Perluas peta di papan — tambahkan bangunan di sisi jalan berlawanan dari yang sudah ada. Beri label: "MOSQUE" di sisi berseberangan dari "SCHOOL".

UCAP: "Look at the map again." [tunjuk]
UCAP: "The mosque — where is it?"
→ Jeda — siswa melihat peta.
UCAP: "The mosque is — across from — the school." [ucap pelan, tunjuk jalan di tengah peta sebagai pemisah]
→ Tulis di papan: The mosque is across from the school.
→ Jeda 3 detik.

UCAP: "Across from — artinya di seberang. On the other side of the road." [rentangkan dua tangan ke arah berlawanan]
→ Jeda.
UCAP: "The mosque is across from the school." [ulangi]

🗣 TOGETHER
UCAP: "Say it with me — the mosque is across from the school."
→ Kelas mengulang bersama 2 kali.

AKSI: Uji pemahaman kontras langsung:
UCAP: "The market is next to the school." [gesture berdampingan]
→ Kelas ulang.
UCAP: "The mosque is across from the school." [gesture berseberangan]
→ Kelas ulang.

UCAP: "Next to — " [gesture berdampingan]
→ Kelas: buat gesture yang sama.
UCAP: "Across from — " [gesture berseberangan]
→ Kelas: buat gesture yang sama.`,
          bantuan: 'Jika siswa masih mencampur "next to" dan "across from": kembali ke peta di papan, tunjuk jalan di tengah. Ucap: "Across from — ada jalan di tengah. Next to — tidak ada jalan." Satu kalimat konkret ini lebih efektif dari penjelasan panjang.',
          cue    : 'Kontras gesture antara "next to" dan "across from" adalah pembeda paling efektif untuk dua preposisi ini. Jika hanya mengandalkan penjelasan verbal, siswa akan tercampur. Pastikan gesture dipakai konsisten sampai L8.',
          darurat: null,
          energi : '🟡',
        },

        // L7 — Modeling Kalimat Posisi + Baca Bersama
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Pastikan peta di papan sudah lengkap dengan semua label: SCHOOL, MARKET (next to school), MOSQUE (across from school). Kalimat di papan sekarang ada dua:
  The market is next to the school.
  The mosque is across from the school.

UCAP: "Good. Now — let's add more."

AKSI: Tulis tiga kalimat tambahan di papan:
  The school has a big door.
  The market is near my house.
  The mosque is in front of the market.

UCAP: "Five sentences. Let's read them all together."

🗣 TOGETHER
AKSI: Tunjuk kalimat satu per satu. Kelas membaca bersama guru.
→ Putaran pertama: guru tunjuk dan pimpin.
→ Putaran kedua: guru tunjuk saja — kelas baca sendiri tanpa dipimpin.

UCAP: "Good." [tunjuk kalimat 'The school has a big door.']
UCAP: "Look at this one — 'The school has a big door.'"
UCAP: "Remember last time? 'She has curly hair.' Same word — has."
UCAP: "She has curly hair. The school has a big door. Has — same pattern."
→ Jeda 3 detik. Biarkan koneksi itu mendarat.

UCAP: "These are the sentences we use today."
UCAP: "In a moment — you will write about your own neighborhood. Your house. Your market. Your mosque."`,
          bantuan: 'Jika kelas membaca tidak sinkron di putaran kedua: jangan paksa sinkronisasi. Biarkan tiap siswa membaca dalam tempo sendiri — yang penting semua membaca. Sinkronisasi bukan tujuan di layar ini, familiarisasi adalah tujuannya.',
          cue    : 'Kelima kalimat di papan tetap ada sampai L8 selesai. Ini scaffold utama untuk writing. Jangan hapus apapun sebelum siswa selesai menulis. Kalimat "The school has a big door" adalah jembatan ke TP02 — jika siswa bertanya "has itu apa?", jawab: "Ingat \'She has curly hair\'? Sama."',
          darurat: null,
          energi : '🔵',
        },

        // L8 — Writing Individual — Peta Lingkunganku
        {
          tipe        : 'instruksi',
          teks        : `AKSI: Jika datang langsung dari L7 — ucap: "Okay. Take your pencil. Let's write." Langsung bagikan lembar kerja.

AKSI: Bagikan lembar kerja (1 per siswa). Scaffold di papan dari L7 tetap ada.

Lembar kerja berisi:
- Kotak peta kosong berlabel "MY NEIGHBORHOOD" — kotak "MY HOUSE" sudah terisi di tengah
- Tiga kotak kosong di sekitarnya untuk siswa isi sendiri
- Template kalimat di bawah peta:

  _________________ is next to my house.
  _________________ is across from my house.
  My house has a _________________ door.
  The _________________ is near my house.

UCAP: "Draw the places near your house. Write their names in the boxes."
UCAP: "Then complete the sentences. Use the words on the board."

👂 LISTEN FIRST — guru demo mengisi satu kotak di papan dulu.

UCAP: "Watch me. Near my house — there is a market." [gambar kotak di sebelah MY HOUSE di peta papan, tulis "MARKET"]
UCAP: "The market is next to my house." [tulis di baris pertama template di papan]
UCAP: "Now — you draw your neighborhood. Your places. Your sentences."

AKSI: Circulate. Bergerak ke meja siswa — jangan berdiri di depan.`,
          diferensiasi: {
            perluSupport: 'cukup isi dua kalimat pertama saja dan gambar dua tempat. Boleh menyalin kalimat dari papan dengan mengganti satu kata.',
            sudahBisa   : 'isi semua empat kalimat dan tambah satu kalimat bebas tentang lingkungannya.',
          },
          bantuan: null,
          cue    : 'Ini waktu yang tepat untuk buka overlay penilaian formatif — prioritaskan siswa yang belum pernah dinilai di TP ini. Siswa boleh menggambar tempat lain selain market dan mosque — warung, lapangan, sungai, apapun yang nyata di lingkungan mereka. Kosakata yang tidak ada di papan boleh ditulis dalam Bahasa Indonesia dulu — yang penting struktur kalimatnya menggunakan "next to" atau "across from."',
          darurat: 'Jika waktu tersisa ≤ 8 menit saat layar ini dimulai, ATAU energi kelas terlihat jatuh sebelum menit ke-4: lewati aktivitas menggambar peta. Minta siswa langsung mengisi dua kalimat pertama saja di template. Langsung ke L10 tanpa melalui L9.',
          energi : '🔵',
        },

        // L9 — Circulation + Review Tulisan [FLEX]
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berkeliling melihat hasil tulisan siswa. Pilih 2 hasil — satu yang menggunakan "next to" dengan benar, satu yang menggunakan "across from" atau menambahkan tempat di luar market dan mosque.

UCAP: "Good. Let's hear from two friends."
→ Minta 2 siswa membacakan kalimat mereka keras-keras.
→ Kelas mendengarkan.

UCAP (setelah tiap siswa membacakan): "Nice. Let's say it together."
→ Kelas ulang kalimat yang baru dibacakan.

AKSI: Tunjuk perbedaan gesture di papan sekali lagi:
UCAP: "'Next to' —" [gesture berdampingan] "— 'across from' —" [gesture berseberangan]
UCAP: "Remember these two. They are different."`,
          bantuan: `Jika siswa yang diminta membaca menolak: ucap "That's okay" dan tunjuk siswa lain. Tidak perlu komentar tambahan.`,
          cue    : 'Pilih siswa yang berbeda dari yang sudah menjawab di L4. Jika ada siswa yang menulis nama tempat dalam Bahasa Indonesia — baca dengan bangga, bukan dikoreksi: "Great — and in English we can say \'market\' or \'mosque\' or your word."',
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
UCAP: "What is the word for pasar?" [tunjuk gambar market di papan]
→ Kelas: "Market!"
UCAP: "And for masjid?"
→ Kelas: "Mosque!"

UCAP: "Now — next to or across from?" [buat gesture berdampingan]
→ Kelas: "Next to!"
UCAP: "And this?" [buat gesture berseberangan]
→ Kelas: "Across from!"

UCAP: "Give me a sentence — the market is...?"
→ Satu siswa atau kelas: "The market is next to the school!" atau "The market is next to my house!"

AKSI: Hapus kata-kata di papan satu per satu. Kelas ucapkan kata yang dihapus.
Urutan hapus: market → mosque → next to → across from`,
          bantuan: null,
          cue    : 'Jaga ritme pelan dan tenang. Hapus papan adalah ritual penutup — bukan drill baru. Jika kelas tidak bisa mengucapkan kata yang dihapus, ucapkan bersama dan lanjut. Tidak ada penilaian di momen ini.',
          darurat: null,
          energi : '🟡',
        },

        // L11 — Closure Emosional + Teaser TP04
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Minta siswa duduk tegak dan rileks. Suara guru lebih pelan dari sebelumnya.

UCAP: "Before we finish — I want to ask you something."
UCAP: "What place did you draw today? What is near your house?"
→ Tunjuk 1–2 siswa yang mau berbagi. Nama tempat dalam Bahasa apapun diterima.

→ Jeda 5 detik setelah siswa menjawab.

UCAP: "I like that. Your neighborhood is your world."

UCAP: "Next time — something special. We will use everything we learned — school, people, neighborhood — and write about it all together."
[Teaser untuk TP04 — Writing: Who and Where. Ini Panen — siswa perlu tahu ada sesuatu yang besar datang.]

UCAP: "For now — goodbye, everyone."
→ Tunggu kelas menjawab: "Goodbye!"

AKSI: Jika ada sisa waktu 1–2 menit: biarkan siswa merapikan meja. Jangan isi dengan aktivitas baru.`,
          bantuan: null,
          cue    : 'Kalimat "Your neighborhood is your world" adalah closure afektif yang menghubungkan pengalaman siswa dengan bahasa yang baru mereka pelajari. Ucap dengan tulus — bukan terburu-buru.',
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_B03;
