/**
 * =============================================================
 * FLAF — TP 13 (Weather and Seasons)
 * File: tp-13-v5.js
 * Format: v5.0
 * Source: flaf-skenario-tp13-v2.txt
 * Generated: 2026-05-24
 * TODO: kelas / deskripsi / indikator / vocab / persiapan / media / printables
 *        tidak dapat diparsing dari txt — isi manual sebelum digunakan.
 * =============================================================
 */

const TP_13 = {

  id       : 'tp-13',
  nomor    : 13,
  kelas    : 0,          // TODO: isi manual
  nama     : 'Weather and Seasons',
  tema     : 'Alam dan Lingkungan',
  deskripsi: '',         // TODO: isi manual

  indikator: [
    'Peserta didik dapat menyebut kondisi cuaca (sunny, cloudy, rainy, windy, hot, cold) dengan lafal yang benar.',
    'Peserta didik dapat mendeskripsikan cuaca hari ini menggunakan "Today is ..." dan "The weather is ...".',
    'Peserta didik dapat menghubungkan cuaca dengan aktivitas: "When it is rainy, I use an umbrella."',
  ],
  vocab    : ['sunny', 'cloudy', 'rainy', 'windy', 'hot', 'cold', 'weather', 'today', 'umbrella', 'when it is'],
  persiapan: ['Kartu cuaca bergambar 6 kondisi cuaca'],
  media    : [],         // TODO: isi manual
  printables: [
    { file: 'tp13-cloudy.png', label: 'Cloudy' },
    { file: 'tp13-cold.png',   label: 'Cold' },
    { file: 'tp13-hot.png',    label: 'Hot' },
    { file: 'tp13-rainy.png',  label: 'Rainy' },
    { file: 'tp13-sunny.png',  label: 'Sunny' },
    { file: 'tp13-windy.png',  label: 'Windy' },
  ],

  checklist: [
    '6 kartu printable tersedia dan bernomor urut sebelum kelas masuk',
    'Papan tulis: Today is ___. The weather is ___. / When it is ___, I ___ tertulis sebelum kelas masuk',
    'Layar 0 dilakukan sebelum kelas resmi dimulai',
    'Jika kelas belum fokus di L0: ulangi "Are you ready?" sambil berdiri diam',
    'Guru yang ke jendela saat hook L1 — bukan siswa',
    'Respons bebas L1 diterima tanpa koreksi — boleh Bahasa Indonesia',
    'Satu kata anchor "weather" diucapkan kelas sekali setelah L1',
    'Guru belum minta kelas produksi di Layar 2',
    'Gestur berbeda: sunny = tangan buka ke atas / rainy = jari turun / windy = tiup + tangan ayun',
    'Gestur windy memakai arah ayun yang sama sepanjang sesi',
    'Contrast drill sunny/rainy dilakukan di Layar 3 — bukan sunny/cloudy',
    'Reactivation gelombang 1 dilakukan sebelum gelombang 2 masuk (15–20 detik, tidak dikoreksi)',
    'Contrast drill hot/cold dilakukan di Layar 4 dengan anchor arah gestur berlawanan',
    'Fase A–B–C Layar 5 dilakukan berurutan: lambat → medium → cepat acak',
    'Hot dan cold tidak berurutan di Fase C Layar 5',
    'Kartu dilepas dari papan sebelum TPR di Layar 6',
    'Putaran acak L6 maksimal 5 cue — hot dan cold tidak berurutan',
    'Guru berhenti modeling gestur pada putaran acak L6 untuk cek retrieval mandiri',
    'Tepuk 1 kali freeze sebelum L7 reset',
    'Jeda 3 detik setelah "Stop. Hands down." di L7',
    'Kartu ditempel kembali sebelum L7',
    'Dua struktur "Today is …" dan "The weather is …" selalu berpasangan di L7–L8',
    'Tiga pasang contoh kalimat dimodelkan di L7',
    'Transfer cuaca nyata di L8 dilakukan secara choral — bukan tanya individual',
    'Jeda 1 detik antara "When it is ___" dan "I ___" dilakukan saat modeling L9',
    'Demo partner dilakukan sebelum partner practice',
    'Instruksi listener: "repeat the sentence" diucapkan sebelum partner practice',
    '"Two cards each turn" disampaikan lewat gestur — bukan instruksi verbal',
    'Stop signal dilatih 1x sebelum "Go" di partner practice',
    'Jika waktu ≤10 menit saat L10: skip ke Layar 11 langsung',
    'Partner practice L10 dibatasi 4 kartu: rainy, sunny, cold, hot',
    'Checkpoint switch dilakukan di tengah partner practice',
    'Putaran 2 Layar 11 pakai discourse frame — bukan nama kartu saja',
    'Retrieval mikro dilakukan sebelum closing',
    'Exit ticket: rainy + sunny, 2 kartu pasangan contrast, 2 kalimat, 45–60 detik',
    'Setiap siswa sudah produksi minimal 1 kalimat "When it is …, I …"',
  ],

  energi_map: [
    'L0 🔵',
    'L1 🟠',
    'L2 🟡',
    'L3 🟠',
    'L4 🟡',
    'L5 🟠',
    'L6 🔴',
    'L7 ⚪ → 🟡',
    'L8 🟠',
    'L9 🟡',
    'L10 🔴',
    'L11 ⚪ → 🟡',
    'L12 🟡',
    'L13 🔵',
  ],

  catatan: {
    risiko: [
      'L1 Hook: guru yang ke jendela — bukan siswa, kelas tetap di kursi',
      'L3 Contrast: sunny vs rainy — bukan sunny vs cloudy (gestur terlalu mirip)',
      'L4 Contrast: hot vs cold wajib — gestur berlawanan arah, ini anchor utama',
      'L6 TPR: putaran acak maksimal 5 cue — jangan letakkan hot dan cold berurutan',
      'L10 DARURAT: jika waktu ≤10 menit, skip partner practice — langsung ke L11',
    ],
    autonomy: [
      'Windy: gestur tiup napas + tangan ayun — pakai arah yang sama sepanjang sesi',
      'Jika kelas tertukar hot/cold: kipas tangan "Hot." Peluk diri "Cold." — lanjut',
      'L1: cukup 1–2 kalimat tentang cuaca hari ini — jangan diperpanjang',
      'Jika waktu mepet, L10 partner practice cukup 2 menit',
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
          teks   : `UCAP: "Good morning, everyone! How are you today?" [Tunggu respons kelas] UCAP: "I'm fine, thank you! Are you ready? Let's start."`,
          bantuan: null,
          cue    : 'Layar ini pendek dan wajib. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.',
          darurat: null,
          energi : '🔵',
        },

        // L1 — PEMBUKA
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru berdiri tengah kelas. Tidak ada kartu dulu. UCAP: "Before we start — look at me." → Guru berjalan ke arah jendela, berdiri, lihat ke luar sebentar. → Kembali ke tengah. UCAP: "Outside — what do you see?" [Tunggu 2–3 respons bebas — boleh Bahasa Indonesia] → Guru gestur sesuai cuaca nyata hari ini: Jika cerah: "Sunny!" [tangan buka ke atas, wajah ke langit] Jika mendung: "Cloudy!" [tangan melambai pelan di atas kepala] Jika hujan: "Rainy!" [jari-jari turun seperti tetes hujan] UCAP: "That's the weather. Today's weather. Remember that word — weather." → Kelas: "Weather."`,
          bantuan: null,
          cue    : 'Guru yang ke jendela — bukan siswa. Ini menjaga kelas tetap di kursi. Respons bebas siswa diterima tanpa koreksi — tujuannya aktivasi, bukan akurasi. Satu kata anchor: "weather" — kelas ucap sekali, cukup.',
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
          teks   : `👂 LISTEN FIRST AKSI: Tempel 4 kartu satu per satu: sunny — cloudy — rainy — windy Setiap kartu: tunjuk → gestur → ucap kata. Satu detik jeda, lanjut. UCAP setelah 4 kartu terpasang: "Listen. My turn." → "Sunny." [tangan buka ke atas, wajah ke atas — hangat] → "Cloudy." [tangan melambai pelan di atas kepala — lambat] → "Rainy." [jari-jari turun seperti tetes hujan] → "Windy." [tiup napas pelan, tangan ayun ke satu arah] "One more time." → ulang sekali.`,
          bantuan: null,
          cue    : 'Windy — gestur tiup napas + tangan ayun harus konsisten di setiap layar sesudah ini. Gunakan arah ayun yang sama sepanjang sesi — jangan ganti arah antar layar. Ini satu-satunya anchor fisik untuk kata yang tidak punya referensi benda konkret. Guru belum minta kelas produksi di layar ini.',
          darurat: null,
          energi : '🟡',
        },

        // L3 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Now together. I point — you say and do the action." → Tunjuk sunny: kelas ucap "Sunny!" + gestur tangan buka ke atas → Tunjuk cloudy: "Cloudy!" + tangan lambai pelan → Tunjuk rainy: "Rainy!" + jari turun → Tunjuk windy: "Windy!" + tiup + tangan ayun AKSI: Ulangi sekali lagi, acak 2 kartu. Contrast drill — langsung setelah putaran acak (15 detik): UCAP: "Watch." → Guru tunjuk sunny: "Sunny — nice day!" [tangan buka, senyum lebar] → Guru tunjuk rainy: "Rainy — wet day!" [jari turun, wajah berkerut] "Ready? Which one?" → "Wet day — show me!" → kelas gestur rainy → "Nice day — show me!" → kelas gestur sunny → Ulangi 2 putaran, cepat.`,
          bantuan: 'Jika kelas tertukar sunny/cloudy: guru tunjuk sendiri — "Sunny — bright." [tangan ke atas] / "Cloudy — grey." [tangan lambai] — lanjut.',
          cue    : 'Contrast drill sunny vs rainy — bukan sunny vs cloudy. Sunny dan cloudy terlalu dekat gesturnya untuk jadi pasangan contrast di putaran ini. Rainy punya gestur yang paling berbeda — kontras lebih tajam. Saat circulate, sesekali model ulang windy tanpa menghentikan kelas.',
          darurat: null,
          energi : '🟠',
        },

        // L4 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI — Reactivation (15–20 detik): "Quick check." → Tunjuk cepat 4 kartu gelombang 1 berurutan — kelas ucap + gestur. → Tidak dikoreksi. Tidak diulang. Langsung lanjut. 👂 LISTEN FIRST Gelombang 2 AKSI: Tempel 2 kartu: hot — cold Setiap kartu: tunjuk → gestur → ucap kata. "Listen. My turn." → "Hot." [kipas tangan ke wajah, wajah berkeringat] → "Cold." [peluk diri sendiri, bahu naik, menggigil pelan] "One more time." → ulang sekali. Contrast drill — langsung setelah LISTEN FIRST selesai (15 detik): UCAP: "Watch." → "Hot." [kipas tangan] / "Cold." [peluk diri] "Ready?" → "Hot — show me!" → kelas kipas tangan → "Cold — show me!" → kelas peluk diri → Ulangi 2 putaran, cepat.`,
          bantuan: null,
          cue    : 'Reactivation gelombang 1 wajib — 15–20 detik, tidak dikoreksi. Contrast drill hot/cold wajib di sini — keduanya pasangan langsung. Hot: kipas ke luar / Cold: peluk ke dalam — arah gestur berlawanan, ini anchor utama.',
          darurat: null,
          energi : '🟡',
        },

        // L5 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER Fase A — Gelombang 2 saja, lambat: "Together." → Tunjuk hot → cold. → Kelas ucap + gestur. Lambat. Fase B — Campur 6 kartu, medium: "Now — all together." → Tunjuk semua 6 kartu berurutan — medium speed. → Kelas ucap + gestur. Fase C — 4 kartu acak, cepat: "Ready? Fast — but clear." → Pilih 4 kartu acak — tunjuk cepat. → Tahan 1 detik sebelum menunjuk kartu berikutnya.`,
          bantuan: 'Jika kelas mulai telat atau gestur tidak sinkron: kurangi tempo, ulangi 2 kartu, lanjut.',
          cue    : 'Gestur wajib ikut sepanjang seluruh fase. Jangan letakkan hot dan cold berurutan di Fase C — interference tinggi setelah contrast drill baru selesai.',
          darurat: null,
          energi : '🟠',
        },

        // L6 — INTI
        {
          tipe   : 'instruksi',
          teks   : `AKSI: Guru lepas kartu dari papan — simpan. Siswa tidak pegang apa-apa. UCAP: "No cards. Just me and you." → "Show me sunny!" → kelas gestur sunny → "Show me rainy!" → kelas gestur rainy → "Show me cold!" → kelas peluk diri → "Show me windy!" → kelas tiup + tangan ayun → "Show me hot!" → kelas kipas tangan → "Show me cloudy!" → kelas tangan lambai AKSI: Putaran acak — maksimal 5 cue. Guru tidak ikut gestur — kelas yang aksi. UCAP: "My turn to watch. You do it." → Pilih 5 cue acak. Jangan letakkan hot dan cold berurutan. → Setelah 5 cue: langsung stop. UCAP: "Stop. Good."`,
          bantuan: 'Jika kelas tertukar hot/cold: guru berhenti, kipas tangan — "Hot." Peluk diri — "Cold." Lanjut.',
          cue    : 'Kartu sudah dilepas — retrieval dari memori. Guru tidak ikut gestur di putaran acak — guru perlu melihat siapa yang tertukar. Putaran acak maksimal 5 cue, langsung stop — jangan improvisasi lebih lama. Hot dan cold tidak boleh berurutan di putaran acak.',
          darurat: null,
          energi : '🔴',
        },

        // L7 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — kelas freeze] UCAP: "Stop. Hands down. Sit up." [Jeda 3 detik] UCAP: "Good. Now listen." AKSI: Tempel kembali 6 kartu. Tunjuk papan — Today is ___. The weather is ___. "Listen. My turn." → Tunjuk kartu sunny: "Today is sunny." [gestur tangan buka ke atas] → "The weather is sunny." [tunjuk papan — The weather is ___] [Jeda 2 detik] → Tunjuk kartu rainy: "Today is rainy." [gestur jari turun] → "The weather is rainy." [tunjuk papan] [Jeda 2 detik] → Tunjuk kartu cloudy: "Today is cloudy." → "The weather is cloudy." "One more time." → ulang tiga pasang kalimat.`,
          bantuan: null,
          cue    : 'Tunjuk papan setiap kali ucapkan "Today is" dan "The weather is." Dua struktur selalu berpasangan — tidak dipisah. Tiga contoh pasang kalimat — bukan satu. Jaga tempo ringkas — jangan explain, jangan improv. Guru tidak tanya kelas dulu di layar ini.',
          darurat: null,
          energi : '⚪ → 🟡',
        },

        // L8 — INTI
        {
          tipe   : 'instruksi',
          teks   : `🗣 TOGETHER UCAP: "Together now. Full sentence." Tunjuk papan: Today is ___. The weather is ___. → Guru: "Today is sunny." → Kelas ulang penuh: "Today is sunny." → Guru: "The weather is sunny." → Kelas ulang penuh: "The weather is sunny." [Jeda 2 detik] → Tunjuk kartu rainy: "Today is…" → Tunggu kelas: "…rainy!" → "The weather is…" → Kelas: "…rainy!" → Tunjuk kartu cold: "Today is…" → Kelas: "…cold!" → "The weather is…" → Kelas: "…cold!" UCAP: "Now — what is the weather today? Really. Look outside." → Guru tunjuk kartu yang sesuai cuaca nyata. → Kelas bentuk dua kalimat bersama: "Today is ___. The weather is ___."`,
          bantuan: 'Jika kelas drop "The weather is" dan hanya ucap nama cuaca: guru tunjuk papan — "The weather is…" — tunggu 2 detik, lanjut choral.',
          cue    : 'Dua struktur selalu berpasangan — jangan terpisah. Transfer ke cuaca nyata di akhir layar dilakukan secara choral, bukan tanya individual — menjaga tempo kelas tidak drop. Momen ini adalah transfer pertama ke konteks real.',
          darurat: null,
          energi : '🟠',
        },

        // L9 — INTI
        {
          tipe   : 'instruksi',
          teks   : `👂 LISTEN FIRST AKSI: Tunjuk papan — When it is ___, I ___. "Listen. My turn." → Tunjuk kartu rainy: "When it is rainy —" [jeda 1 detik] "— I use an umbrella." [gestur buka payung] → Tunjuk kartu sunny: "When it is sunny —" [jeda 1 detik] "— I wear a hat." [gestur taruh topi] → Tunjuk kartu cold: "When it is cold —" [jeda 1 detik] "— I wear a jacket." [gestur pakai jaket] → Tunjuk kartu hot: "When it is hot —" [jeda 1 detik] "— I drink water." [gestur minum] "One more time." → ulang keempat kalimat. Demo dengan 1 siswa sukarela: "Watch us." → Guru tunjuk kartu rainy ke siswa: "When it is rainy…" → Siswa: "…I use an umbrella!" → Guru: "Good." Lakukan sekali lagi dengan kartu sunny. UCAP: "See? One card — one sentence. When it is ___, I ___." Sebelum partner practice — ucapkan hal ini: "Partner voice — not shouting." "Partner A picks the card. Partner B makes the sentence." "Listener — repeat the sentence." [demo: siswa volunteer ulang kalimat] [Tunjuk 2 kartu dengan gestur tangan — tidak diucapkan] Latih stop signal: "When I clap —" [tepuk 1 kali] "— stop." — latih 1x sebelum "Go." UCAP: "Go."`,
          bantuan: 'Jika kelas drop "When it is" dan hanya sebut nama cuaca + benda: guru tunjuk papan — "When it is…" — tunggu 2 detik, lanjut choral jika tidak ada respons.',
          cue    : 'Jeda 1 detik antara "When it is ___" dan "I ___" — bantu siswa dengar dua bagian kalimat terpisah. Demo partner wajib sebelum partner practice. Listener harus ulang kalimat — bukan hanya diam. "Two cards each turn" lewat gestur — bukan instruksi verbal. Jangan explain benda seperti umbrella/jacket/hat — target utama adalah discourse frame, bukan vocab benda.',
          darurat: null,
          energi : '🟡',
        },

        // L10 — INTI
        {
          tipe   : 'instruksi',
          teks   : `⚠ DARURAT — Waktu ≤10 menit: skip ke Layar 11 — lewati partner practice, langsung choral weather. AKSI: Pasang 4 kartu di papan: rainy, sunny, cold, hot. UCAP: "Use these cards. Partner A — pick a card, make a sentence. Partner B — repeat it." "Clear sentence. Go." Checkpoint tengah (±90 detik): [Tepuk 1 kali — freeze] "Switch. Partner B picks the card now." [Tepuk 1 kali — lanjut] Diferensiasi (di sisi papan, tidak dibacakan): - Sudah bisa: pakai semua 6 kartu, buat 3 kalimat berbeda - Perlu support: cukup 2 kartu — rainy dan sunny`,
          bantuan: 'Pasangan diam total: dekati, bisik — "Point to rainy. Say: When it is rainy, I use an umbrella." Tidak hentikan kelas.',
          cue    : 'Listener harus ulang kalimat — bukan hanya diam menonton. Guru tidak koreksi grammar saat jalan. Acceptance rule berlaku — fragment diterima, model ulang saat lewat. Saat circulate, sesekali model: "When it is cold, I wear a jacket." — supaya retrieval tidak collapse ke rainy/umbrella terus.',
          darurat: null,
          energi : '🔴',
        },

        // L11 — INTI
        {
          tipe   : 'instruksi',
          teks   : `[Tepuk 1 kali — freeze] UCAP: "Stop. Look here." [Jeda 2 detik] "Together — weather." Putaran 1: tunjuk 6 kartu berurutan — lambat — kelas ucap nama + gestur. Putaran 2: tunjuk kartu rainy dan sunny — kelas ucap dengan frame penuh: "When it is rainy, I use an umbrella!" → lanjut → "When it is sunny, I wear a hat!" Cukup 2 kartu — tidak semua.`,
          bantuan: null,
          cue    : 'Putaran 2 pakai discourse frame — bukan nama kartu saja. Ini menjaga "When it is …, I …" tetap hidup sebelum exit ticket. Tidak perlu semua 6 kartu — 2 contoh cukup.',
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
          teks   : `AKSI: Guru tunjuk 2 kartu ke kelas — rainy dan sunny. UCAP: "Last. Write two sentences." → "When it is ___, I ___." → "Use these two cards." [tunjuk papan] [Tunggu 45–60 detik] "Show me."`,
          bantuan: 'Terima: dua kalimat penuh, frasa parsial ("rainy — umbrella"), atau gambar dengan label. Tidak ada koreksi terbuka.',
          cue    : 'Exit ticket = 2 kartu pasangan contrast (rainy + sunny), 2 kalimat, struktur "When it is …, I …". Tidak diperluas.',
          darurat: null,
          energi : '🟡',
        },

        // L13 — PENUTUP
        {
          tipe   : 'instruksi',
          teks   : `AKSI — Retrieval mikro: "One more time — show me rainy!" → Kelas gestur rainy + ucap "Rainy!" "Show me sunny!" → Kelas gestur sunny + ucap "Sunny!" AKSI: Tunjuk semua 6 kartu cepat — kelas ucap nama + gestur bersama. UCAP: "Today — weather. When it is rainy, I use an umbrella. When it is sunny, I wear a hat. Well done. See you next time."`,
          bantuan: null,
          cue    : null,
          darurat: null,
          energi : '🔵',
        },

      ],
    },

  ],

};

export default TP_13;
