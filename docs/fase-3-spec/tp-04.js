/**
 * =============================================================
 * FLAF — TP 04 (Numbers 1–20)
 * File: data/tp-04.js
 * Format: v4.3 — Hybrid (aktivitas[] + langkah[] backward compat)
 * =============================================================
 *
 * STATUS: DRAFT Fase 3 — Mei 2026
 *
 * Migrated from: fase-a.js → tujuan_pembelajaran[3] (v3)
 *
 * KARAKTER KHAS TP 04 (berbeda dari TP 01):
 *   - Cognitive load tinggi: hafalan 20 angka, pola pembentukan belasan
 *   - Aktivitas berbasis movement & chant lebih dominan
 *   - Permainan kompetitif (race to answer)
 *   - Integrasi dengan benda nyata di kelas
 *   - "Emotional safety" eksplisit: pengakuan 11-19 itu sulit
 *
 * PERUBAHAN SUBSTANSI dari v3:
 *   1. Tambah 2 aktivitas pair_work (counting partner's items, count race)
 *      → mandat Dok 03 §9, dengan adaptasi: pair work untuk TP angka =
 *        "hitung bersama," bukan "tanya-jawab"
 *   2. Mode diferensiasi 3-tier eksplisit per aktivitas
 *   3. Permainan kompetitif "Who is fastest?" diberi mode aman (mode mudah:
 *      tidak kompetitif individual, hanya per baris) untuk emotional safety
 *   4. Aktivitas counter-real-objects dipisah dari counting drill —
 *      ini meaningful_link, beda jenis dari modeling/chorus
 *
 * STRUKTUR HYBRID:
 *   Pertahankan langkah[] v3, tambah aktivitas[] v4.
 *
 * REFERENSI:
 *   - SCHEMA.md untuk kontrak struktur
 *   - tp-01.js sebagai TP referensi pertama (greetings)
 *   - 12 Dokumen FLAF di docs/
 * =============================================================
 */

const TP_04 = {

  // ════════════════════════════════════════════════════════════
  // IDENTITAS — tidak berubah dari v3
  // ════════════════════════════════════════════════════════════

  id       : 'tp-04',
  nomor    : 4,
  kelas    : 1,
  nama     : 'Numbers 1–20',
  tema     : 'Dunia di Sekitar Kita',
  deskripsi: `Peserta didik mengenal dan menggunakan angka 1–20 dalam bahasa
    Inggris. Angka diintegrasikan dengan kegiatan menghitung benda nyata
    dan penggunaan dalam konteks sehari-hari.`,

  indikator: [
    'Peserta didik dapat menyebut dan mengurutkan angka 1–10 dengan lafal yang benar dalam aktivitas menghitung bersama.',
    'Peserta didik dapat menyebut angka 11–20 dan mengenali pola pembentukan angka belasan dalam bahasa Inggris.',
    'Peserta didik dapat menggunakan angka dalam konteks nyata: menghitung benda, menjawab "how many?", dan menyebut usia.',
  ],

  vocab: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
          'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
          'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],

  // BACKWARD COMPAT
  persiapan: ['Kartu angka 1–20', 'Benda untuk dihitung (buku, pensil, dll)'],

  // ════════════════════════════════════════════════════════════
  // MEDIA — terstruktur (Dok 08 §12)
  // ════════════════════════════════════════════════════════════

  media: [
    {
      id              : 'media-kartu-angka-1-10',
      nama            : 'Kartu Angka 1–10',
      tipe            : 'kartu_cetak',
      printable       : true,
      pdf_ref         : 'tp-04-v1.pdf',
      pdf_halaman     : 1,
      reusable_lintas_tp : true,
      keterangan      : '10 kartu A5: angka 1-10 dengan visual (titik/jari/benda)',
    },
    {
      id              : 'media-kartu-angka-11-20',
      nama            : 'Kartu Angka 11–20',
      tipe            : 'kartu_cetak',
      printable       : true,
      pdf_ref         : 'tp-04-v1.pdf',
      pdf_halaman     : 2,
      reusable_lintas_tp : true,
      keterangan      : '10 kartu A5: angka 11-20',
    },
    {
      id              : 'media-benda-hitung',
      nama            : 'Benda Sehari-hari untuk Dihitung',
      tipe            : 'objek_fisik',
      printable       : false,
      reusable_lintas_tp : true,
      keterangan      : 'Buku, pensil, penghapus, bola — apa saja yang tersedia di kelas',
    },
  ],

  // ════════════════════════════════════════════════════════════
  // SKENARIO — empat fase, hybrid structure
  // ════════════════════════════════════════════════════════════

  skenario: [

    // ──────────────────────────────────────────────────────────
    // FASE PEMBUKA — 10 menit
    // ──────────────────────────────────────────────────────────

    {
      fase  : 'Pembuka',
      durasi: 10,

      aktivitas: [
        {
          id    : 'tp04-pembuka-sapa',
          tipe  : 'sapaan_kelas',
          judul : 'Sapa & Pengantar',
          pm    : 'mindful',

          tujuan_komunikasi : 'Membuka kelas dan memberi tahu fokus pembelajaran hari ini',
          vocab_target      : [],

          durasi_target_detik : 90,
          durasi_min_detik    : 45,

          micro_script: {
            pembuka : 'Sapa kelas singkat. Beri tahu hari ini belajar angka.',
            selama  : '',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'Hello everyone! Today we learn numbers in English. Let us count together!',
            contoh_siswa : 'Hello, teacher!',
            target_vocab : [],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Ucapkan pelan. Beri jeda untuk siswa siap.',
              panjang_speaking: 'Cukup respons salam saja.',
            },
            normal: {
              bantuan: 'Ucap dengan energi, langsung masuk ke "let us count."',
              panjang_speaking: 'Salam + siap belajar angka.',
            },
            tantangan: {
              bantuan: 'Tanya siswa: "Who knows numbers in English?" — beri ruang untuk tunjuk tangan.',
              panjang_speaking: 'Salam + tunjuk pengetahuan awal.',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_ribut : 'Tangan di pinggang, tunggu sunyi. Mulai dari "Hello everyone" pelan.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp04-pembuka-chant-1-10',
          tipe  : 'chant',
          judul : 'Hitung 1-10 dengan Tepuk',
          pm    : 'joyful',

          tujuan_komunikasi : 'Siswa terbiasa lafal angka 1-10 melalui ritme tepuk',
          vocab_target      : ['one','two','three','four','five','six','seven','eight','nine','ten'],

          durasi_target_detik : 300,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Berdiri. Mulai hitung dengan tepuk tangan per angka.',
            selama  : 'Dua putaran: pertama normal, kedua lebih cepat. Ajak siswa ikut.',
            penutup : 'Akhiri dengan tepuk meriah.',
          },

          audio_cue: {
            contoh_guru  : 'One, two, three, four, five, six, seven, eight, nine, ten!',
            contoh_siswa : 'One, two, three, four, five, six, seven, eight, nine, ten!',
            target_vocab : ['one','two','three','four','five','six','seven','eight','nine','ten'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: '3 putaran semua pelan. Pakai jari ditunjuk per angka.',
              panjang_speaking: 'Boleh hanya ikuti tepuk tanpa ucap di awal, baru ucap di putaran ke-2.',
            },
            normal: {
              bantuan: '2 putaran: normal + cepat. Tepuk + ucap simultan.',
              panjang_speaking: 'Hitung lengkap 1-10.',
            },
            tantangan: {
              bantuan: '3 putaran: normal, cepat, sangat cepat. Tambah hitung mundur 10-1 sebagai bonus.',
              panjang_speaking: 'Hitung maju + mundur.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun : 'Naikkan volume. Tambah loncat per angka. Pakai seluruh tubuh.',
            kelas_ribut  : 'Mulai bisik dulu — kelas akan ikut tertarik diam.',
          },

          advance: { mode: 'timer_visible_only' },
        },
      ],

      langkah: [
        { tipe: 'audio',     teks: 'Hello everyone! Today we learn numbers in English. Let us count together!' },
        { tipe: 'audio',     teks: 'One, two, three, four, five, six, seven, eight, nine, ten!' },
        { tipe: 'instruksi', teks: 'Siswa ikuti sambil tepuk tangan per angka. Dua putaran: normal, lalu cepat. [Clap and count!]' },
      ],
    },

    // ──────────────────────────────────────────────────────────
    // FASE INTI — 35 menit
    // ──────────────────────────────────────────────────────────

    {
      fase  : 'Inti',
      durasi: 35,

      aktivitas: [
        {
          id    : 'tp04-inti-kartu-1-10',
          tipe  : 'chorus',
          judul : 'Kartu Angka 1-10',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa menghubungkan visual angka dengan lafal',
          vocab_target      : ['one','two','three','four','five','six','seven','eight','nine','ten'],

          durasi_target_detik : 300,
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Tempel kartu 1-10 di papan. Tunjuk satu per satu.',
            selama  : 'Tunjuk → kelas ucapkan bersama. Ulang 2 putaran.',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'What number is this? Say it!',
            contoh_siswa : 'One. Two. Three. Four. Five. Six. Seven. Eight. Nine. Ten.',
            target_vocab : ['one','two','three','four','five','six','seven','eight','nine','ten'],
          },

          media_dipakai : ['media-kartu-angka-1-10'],

          mode: {
            mudah: {
              bantuan: 'Tunjuk per kartu, ucap sendiri dulu, siswa ulang. Boleh urutan 1-5 dulu baru 6-10.',
              panjang_speaking: 'Per angka satu per satu.',
            },
            normal: {
              bantuan: 'Tunjuk berurutan 1-10. Tanpa contoh, langsung siswa ucap.',
              panjang_speaking: 'Lengkap 1-10.',
            },
            tantangan: {
              bantuan: 'Acak urutan tunjuk. Siswa harus cepat sebut.',
              panjang_speaking: 'Cepat dan tepat sesuai kartu.',
            },
          },

          observation: { aktif: false },

          fallback: {
            media_tidak_tersedia : 'Tulis 1-10 besar-besar di papan tulis. Tunjuk dengan spidol.',
            siswa_pasif          : 'Beri 1 siswa kartu, dia tunjuk ke kelas. Tukar siswa per kartu.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp04-inti-kartu-11-20',
          tipe  : 'chorus',
          judul : 'Kartu Angka 11-20',
          pm    : 'mindful',

          tujuan_komunikasi : 'Siswa mengenal angka belasan dengan pengakuan kesulitannya',
          vocab_target      : ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'],

          durasi_target_detik : 420,
          durasi_min_detik    : 240,

          micro_script: {
            pembuka : 'Bilang: "These are tricky — just try your best!" Tempel kartu 11-20.',
            selama  : 'Tunjuk per kartu. Ucap pelan dan jelas. Ulang yang sulit.',
            penutup : 'Beri apresiasi: "Good try, everyone!"',
          },

          audio_cue: {
            contoh_guru  : 'These are tricky — just try your best!',
            contoh_siswa : 'Eleven. Twelve. Thirteen. Fourteen. Fifteen. Sixteen. Seventeen. Eighteen. Nineteen. Twenty.',
            target_vocab : ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'],
          },

          media_dipakai : ['media-kartu-angka-11-20'],

          mode: {
            mudah: {
              bantuan: 'Fokus 11-15 saja. 16-20 hanya diperkenalkan, tidak ditarget hafal. Ulang 11-15 banyak kali.',
              panjang_speaking: 'Angka 11-15 saja.',
            },
            normal: {
              bantuan: '11-20 lengkap. Ulang yang siswa stuck (biasanya 13, 14, 15).',
              panjang_speaking: 'Lengkap 11-20.',
            },
            tantangan: {
              bantuan: '11-20 + tanya pola: "What is the pattern? Thir-TEEN, four-TEEN..." Bahas pola "-teen".',
              panjang_speaking: 'Lengkap + sadar pola pembentukan.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 4,
            indikator       : ['vocab_use', 'confidence'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'akurasi',  // Fokus pengukuran lafal angka belasan
          },

          fallback: {
            siswa_pasif    : 'Pengakuan eksplisit: "It is OK if you don\'t know yet. We learn together." Ulang pelan.',
            energi_turun   : 'Ganti aktivitas: tukar kartu posisi, siswa harus tunjuk angka yang disebut.',
            waktu_mepet    : 'Cukup 11-15. Lewati 16-20 hari ini, target di sesi berikutnya.',
          },

          advance: { mode: 'manual' },
        },

        // ─── BARU: Pair Work — counting together ───
        // (TP angka cocok pair work jenis "hitung bersama," bukan tanya-jawab)
        {
          id    : 'tp04-inti-pair-count',
          tipe  : 'pair_work',
          judul : 'Pair Work — Cooperative: Hitung Bersama Teman',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa berlatih hitung dengan dukungan teman, mengurangi rasa malu salah',
          vocab_target      : ['one','two','three','four','five','six','seven','eight','nine','ten'],

          durasi_target_detik : 240,  // 4 menit
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : '"Turn to your partner. Count to ten together — one says one, partner says two, alternating!"',
            selama  : 'Berkeliling. Dengar 3-4 pasangan. Beri jempol untuk yang bergantian rapi.',
            penutup : '"Stop. Sit down. Good teamwork!"',
          },

          audio_cue: {
            contoh_guru  : 'Count together with your partner — take turns!',
            contoh_siswa : 'Siswa A: "One!" Siswa B: "Two!" A: "Three!" B: "Four!" ...',
            target_vocab : ['one','two','three','four','five','six','seven','eight','nine','ten'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Demo 1 pasangan di depan kelas dulu. Tulis 1-10 di papan agar bisa dilihat sambil hitung.',
              panjang_speaking: 'Hitung 1-10 berdua, satu per angka.',
            },
            normal: {
              bantuan: 'Langsung pair tanpa demo. Tanpa papan.',
              panjang_speaking: 'Hitung 1-10 berdua, bisa diulang 2 kali.',
            },
            tantangan: {
              bantuan: 'Pair hitung 1-20 (kalau sudah pelajari 11-20). Atau hitung mundur 10-1.',
              panjang_speaking: 'Hitung 1-20 berdua atau hitung mundur.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 3,
            indikator       : ['participation', 'confidence', 'vocab_use'],
            rotasi_priority : 'belum_speaking_turn',
          },

          fallback: {
            pair_tidak_jalan : 'Demo 1 pasangan di depan kelas. Tunjukkan bergantian. Coba lagi setelah 30 detik.',
            siswa_pasif      : 'Untuk siswa yang diam, guru jadi "pasangan" — guru hitung 1, siswa hitung 2, dst.',
            kelas_ribut      : 'Stop. Semua duduk. Bersama hitung 1-10 keras. Coba pair lagi.',
            waktu_mepet      : 'Cukup hitung 1-5. Lewati ke permainan kartu.',
          },

          advance: { mode: 'timer_visible_only' },
        },

        {
          id    : 'tp04-inti-permainan-cepat',
          tipe  : 'game_movement',
          judul : 'Permainan Tunjuk Cepat',
          pm    : 'joyful',
          flags : ['kompetitif_safety'],  // Mode mudah harus tidak kompetitif individual

          tujuan_komunikasi : 'Siswa mengaktifkan recall angka secara cepat dalam suasana menyenangkan',
          vocab_target      : ['one','two','three','four','five','six','seven','eight','nine','ten',
                                'eleven','twelve','thirteen','fourteen','fifteen'],

          durasi_target_detik : 480,  // 8 menit
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : '"Stand up! I show a number — say it as fast as you can. Who is fastest?"',
            selama  : 'Tunjuk kartu acak. Beri poin verbal untuk yang benar pertama. Berbagai siswa diberi kesempatan.',
            penutup : '"Wow, you are so fast! Sit down."',
          },

          audio_cue: {
            contoh_guru  : 'What number is this? Quick!',
            contoh_siswa : 'Sixteen! / Twelve! / Five!',
            target_vocab : ['one','two','three','four','five','six','seven','eight','nine','ten',
                              'eleven','twelve','thirteen','fourteen','fifteen'],
          },

          media_dipakai : ['media-kartu-angka-1-10', 'media-kartu-angka-11-20'],

          mode: {
            // PENTING: mode mudah TIDAK kompetitif individual — emotional safety (Dok 03 §14)
            mudah: {
              bantuan: 'Per baris bukan kompetisi individu. Tiap baris dapat 1 kartu, mereka jawab bersama. Tidak ada "siapa pertama."',
              panjang_speaking: 'Per baris, sahut bersama.',
            },
            normal: {
              bantuan: 'Kompetisi individu. 8-10 putaran. Pastikan giliran tersebar — yang berhasil tunjuk diri sendiri lalu duduk.',
              panjang_speaking: 'Cepat dan tepat.',
            },
            tantangan: {
              bantuan: 'Eliminasi: yang salah duduk, sisa berdiri. Tersisa 3 = juara.',
              panjang_speaking: 'Cepat + tepat + tahan eliminasi.',
            },
          },

          observation: { aktif: false },

          fallback: {
            kelas_ribut    : 'Berhenti kompetisi. Ganti mode mudah: per baris saja.',
            energi_turun   : 'Tambah gerakan: yang benar harus loncat sambil sebut angkanya.',
            waktu_mepet    : 'Hanya 4-5 putaran. Lanjut ke hitung benda.',
            siswa_pasif    : 'Beri kartu khusus ke siswa diam — dia yang pegang dan tunjuk ke kelas.',
          },

          advance: { mode: 'timer_visible_only' },
        },

        {
          id    : 'tp04-inti-hitung-benda',
          tipe  : 'meaningful_link',
          judul : 'Hitung Benda di Kelas',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Siswa pakai angka untuk hitung benda nyata, jawab "how many?"',
          vocab_target      : ['one','two','three','four','five','six','seven','eight','nine','ten'],

          durasi_target_detik : 360,  // 6 menit
          durasi_min_detik    : 180,

          micro_script: {
            pembuka : 'Ambil benda di kelas (buku/pensil). Tanya: "How many books on my desk?"',
            selama  : 'Hitung bersama: "One, two, three... Let us count!" Tunjuk per benda. Ulang dengan benda berbeda 2-3 kali.',
            penutup : 'Akhiri: "Great, you can count things now!"',
          },

          audio_cue: {
            contoh_guru  : 'How many books on my desk? Let us count!',
            contoh_siswa : 'One, two, three, four, five! There are five books!',
            target_vocab : ['one', 'two', 'three', 'four', 'five'],
          },

          media_dipakai : ['media-benda-hitung'],

          mode: {
            mudah: {
              bantuan: 'Hitung jelas dan pelan. Hitung benda yang jumlahnya kecil (3-5). Bersama-sama.',
              panjang_speaking: 'Hitung bersama, tidak perlu individual.',
            },
            normal: {
              bantuan: 'Tanya: "How many?" — beri 5 detik untuk tebak, baru hitung bersama. 2-3 set benda berbeda.',
              panjang_speaking: 'Tebak + hitung + jawab "There are X."',
            },
            tantangan: {
              bantuan: 'Tunjuk 1 siswa: dia yang hitung dan jawab. Tanya "How many pencils does Ahmad have?"',
              panjang_speaking: 'Hitung sendiri + jawab lengkap.',
            },
          },

          observation: {
            aktif           : true,
            n_siswa         : 3,
            indikator       : ['response', 'vocab_use'],
            rotasi_priority : 'belum_observed',
          },

          fallback: {
            siswa_pasif       : 'Beri benda ke siswa diam, dia yang hitung di depan kelas.',
            waktu_mepet       : 'Cukup 1 set benda. Lewati ke penutup.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Tempel kartu 1–10 di papan. Tunjuk satu per satu, kelas ucapkan bersama. [What number is this? Say it!]' },
        { tipe: 'audio',     teks: 'One. Two. Three. Four. Five. Six. Seven. Eight. Nine. Ten.' },
        { tipe: 'instruksi', teks: 'Lanjut 11–20. Peringatkan: 11–19 itu sulit, tidak apa-apa kalau belum hafal hari ini. [These are tricky — just try your best!]' },
        { tipe: 'audio',     teks: 'Eleven. Twelve. Thirteen. Fourteen. Fifteen. Sixteen. Seventeen. Eighteen. Nineteen. Twenty.' },
        { tipe: 'instruksi', teks: 'Permainan: guru tunjuk angka di papan secara acak, siswa berlomba sebut. Siswa yang pertama benar angkat tangan. [Who is fastest?]' },
        { tipe: 'instruksi', teks: 'Hitung benda nyata di kelas. [How many books on my desk? Let us count!] — hitung bersama.' },
        { tipe: 'audio',     teks: 'How many? One, two, three... There are ten books!' },
        { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tantang menghitung mundur 10–1. Belum bisa: fokus 1–10 dulu, 11–20 hanya diperkenalkan saja.' },
        { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati permainan berlomba, langsung ke penutup hitung bersama.' },
      ],
    },

    // ──────────────────────────────────────────────────────────
    // FASE PENUTUP — 7 menit
    // ──────────────────────────────────────────────────────────

    {
      fase  : 'Penutup',
      durasi: 7,

      aktivitas: [
        {
          id    : 'tp04-penutup-blast-off',
          tipe  : 'chant_movement',  // bukan game (tidak kompetitif) — chant + gerakan duduk
          judul : 'Blast Off! (Hitung Mundur 10-1)',
          pm    : 'joyful',

          tujuan_komunikasi : 'Mengaktifkan hitung mundur + closure yang energetik',
          vocab_target      : ['ten','nine','eight','seven','six','five','four','three','two','one'],

          durasi_target_detik : 240,
          durasi_min_detik    : 90,

          micro_script: {
            pembuka : '"Stand up! When I say your number, sit down. We count down: 10, 9, 8..."',
            selama  : 'Hitung mundur. 10 siswa pertama yang berdiri, satu per satu duduk per angka.',
            penutup : 'Akhiri dengan "BLAST OFF!" — semua angkat tangan.',
          },

          audio_cue: {
            contoh_guru  : 'Ten, nine, eight, seven, six, five, four, three, two, one. Blast off!',
            contoh_siswa : 'Ten, nine, eight, seven, six, five, four, three, two, one. Blast off!',
            target_vocab : ['ten','nine','eight','seven','six','five','four','three','two','one'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Hitung pelan. Guru contoh duduk pertama. Semua siswa ikut tetap berdiri sampai akhir.',
              panjang_speaking: 'Hitung bersama, tidak individual.',
            },
            normal: {
              bantuan: 'Hitung normal. 10 siswa terpilih duduk satu per satu.',
              panjang_speaking: 'Bersama dengan ritme cepat.',
            },
            tantangan: {
              bantuan: 'Hitung sangat cepat. Lalu ulang dari 20-11 untuk bonus.',
              panjang_speaking: 'Hitung mundur cepat + bonus 20-11.',
            },
          },

          observation: { aktif: false },

          fallback: {
            energi_turun : 'Naikkan volume guru, tepuk per angka.',
            waktu_mepet  : 'Sekali hitung mundur saja, langsung "Great work."',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp04-penutup-review',
          tipe  : 'review_quick',
          judul : 'Review Hitung Mundur',
          pm    : 'mindful',

          tujuan_komunikasi : 'Recap angka 10–1 dan keberhasilan menghitung.',
          vocab_target      : ['ten','nine','eight','seven','six','five','four','three','two','one'],

          durasi_target_detik : 120,
          durasi_min_detik    : 60,

          micro_script: {
            pembuka : '"Let us say the numbers one more time."',
            selama  : 'Siswa hitung bersama dari sepuluh ke satu dengan tempo tenang.',
            penutup : '"Great counting! You can do it again tomorrow."',
          },

          audio_cue: {
            contoh_guru  : 'Ten, nine, eight, seven, six, five, four, three, two, one. Great counting!',
            contoh_siswa : 'Ten, nine, eight, seven, six, five, four, three, two, one.',
            target_vocab : ['ten','nine','eight','seven','six','five','four','three','two','one'],
          },

          media_dipakai : [],

          mode: {
            mudah: {
              bantuan: 'Hitung pelan bersama guru.',
              panjang_speaking: 'Sebut angka singkat.',
            },
            normal: {
              bantuan: 'Hitung bersama semua siswa.',
              panjang_speaking: 'Sebut semua angka lengkap.',
            },
            tantangan: {
              bantuan: 'Ulang dua kali cepat.',
              panjang_speaking: 'Tambah "Blast off!" di akhir.',
            },
          },

          observation: { aktif: false },

          fallback: {
            siswa_pasif : 'Hitung bersama baris depan dulu.',
          },

          advance: { mode: 'manual' },
        },

        {
          id    : 'tp04-penutup-apresiasi',
          tipe  : 'closure_reinforcement',
          judul : 'Apresiasi & Goodbye',
          pm    : 'meaningful',

          tujuan_komunikasi : 'Closure positif — siswa pulang dengan pencapaian',
          vocab_target      : [],

          durasi_target_detik : 90,
          durasi_min_detik    : 45,

          micro_script: {
            pembuka : 'Berdiri di depan. Apresiasi.',
            selama  : '"Great work today! You can count to twenty in English!"',
            penutup : '"See you next time. Goodbye!"',
          },

          audio_cue: {
            contoh_guru  : 'Great work today! You can count to twenty in English! See you next time. Goodbye!',
            contoh_siswa : 'Goodbye, teacher!',
            target_vocab : ['goodbye'],
          },

          media_dipakai : [],
          mode: null,  // Fundamental, tidak ada diferensiasi
          observation: { aktif: false },
          fallback: {},
          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Hitung mundur bersama-sama: 10 ke 1. Siswa berdiri, satu per angka duduk. [When I say your number, sit down!]' },
        { tipe: 'audio',     teks: 'Ten, nine, eight, seven, six, five, four, three, two, one. Blast off!' },
        { tipe: 'audio',     teks: 'Great work today! You can count to twenty in English!' },
      ],
    },

    // ──────────────────────────────────────────────────────────
    // FASE PENILAIAN — 6 menit
    // ──────────────────────────────────────────────────────────

    {
      fase  : 'Penilaian',
      durasi: 6,

      aktivitas: [
        {
          id    : 'tp04-penilaian-kartu-acak',
          tipe  : 'observation_validation',
          judul : 'Validasi Kartu Acak',
          pm    : null,

          tujuan_komunikasi : 'Cek kemampuan siswa yang belum terobservasi di sesi mengajar',
          vocab_target      : [],

          durasi_target_detik : 360,
          durasi_min_detik    : 120,

          micro_script: {
            pembuka : 'Sambil siswa istirahat, dekati 3-4 siswa yang belum sempat diobservasi tadi.',
            selama  : 'Tunjukkan kartu angka acak. Tanya: "What number is this?" Amati tanpa tekanan.',
            penutup : '',
          },

          audio_cue: {
            contoh_guru  : 'What number is this?',
            contoh_siswa : '',  // Bervariasi per kartu
            target_vocab : [],
          },

          media_dipakai : ['media-kartu-angka-1-10', 'media-kartu-angka-11-20'],
          mode: null,

          observation: {
            aktif           : true,
            n_siswa         : 99,
            indikator       : ['vocab_use', 'response', 'confidence'],
            rotasi_priority : 'belum_observed',
            tag_set         : 'akurasi',  // Validasi lafal angka via kartu
          },

          fallback: {
            siswa_pasif : 'Jangan paksa. Catat sebagai "perlu lebih banyak waktu," lanjut siswa lain.',
            waktu_mepet : 'Cukup 3 siswa prioritas. Sisanya untuk sesi berikutnya.',
          },

          advance: { mode: 'manual' },
        },
      ],

      langkah: [
        { tipe: 'instruksi', teks: 'Sambil siswa istirahat, tunjukkan kartu angka acak ke beberapa siswa. [What number is this?] — amati tanpa tekanan.' },
        { tipe: 'instruksi', teks: 'Nilai Listening: merespons "how many". Speaking: lafal angka. Reading: baca angka di kartu.' },
        { tipe: 'instruksi', teks: 'Catat: siapa yang masih kesulitan 11–19? Itu wajar — butuh lebih banyak latihan berulang.' },
      ],
    },

  ],

};

export default TP_04;
