/**
 * =============================================================
 * FLAF — TP 15 (Feelings and Emotions)
 * File: docs/sesi-m10/tp-15.js
 * Format: v4.3
 * =============================================================
 *
 * STATUS: UPDATED — langkah[] ditambah field mode (Fase 9)
 *
 * KARAKTER KHAS TP 15:
 *   - Topik TINGGI sensitif — emosi sangat personal.
 *   - Desain inklusif: Opsi A — identification + pattern practice
 *     (konteks universal, bukan pribadi expose).
 *   - Aktivitas utama: kartu emosi + scenario universal via roleplay berpasangan.
 *   - Pola bahasa: "I feel ... because ..." (dengan alasan konkret universal)
 *   - Pembuka hook: ekspresi guru → siswa guess emosi (no pressure).
 *   - Inti: model 7 emosi + scenario-driven pattern practice + pair roleplay.
 *   - Closure: jembatan rumah — perhatian emosi natural di rumah (tanpa present expose).
 *
 * SCOPE DESIGN:
 *   - Emosi: 7 item (happy, sad, angry, scared, tired, excited, bored)
 *   - Pola: "I feel ... because ..." + "How do you feel? Why?"
 *   - Vocab total: 10 item (7 emotions + "I feel", "how do you feel", "because")
 *
 * PENERAPAN PATTERN INKLUSIVITAS (CONTEXT.md §Pattern Inklusivitas):
 *   - Pattern 1: Scripted micro_script konkret — guru baca script, tidak improvisasi.
 *   - Pattern 2: Skip aktivitas personal expose — semua scenario universal,
 *     tidak ada "cerita emosi pribadi ke kelas".
 *   - Pattern 5: Fallback sensitif ketat — jika siswa terlihat sedih/nervous,
 *     guru stop activity & lanjut tenang, no forced sharing.
 *
 * REFERENSI:
 *   - SCHEMA.md v4.3
 *   - docs/sesi-m9/tp-14.js (format reference)
 *   - CONTEXT.md §Pattern Inklusivitas
 */

const TP_15 = {

  id       : 'tp-15',
  nomor    : 15,
  kelas    : 2,
  nama     : 'Feelings and Emotions',
  tema     : 'Diri Sendiri dan Perasaan',
  deskripsi: `Peserta didik belajar mengungkapkan perasaan dan emosi dasar dalam
    bahasa Inggris menggunakan pola "I feel ... because ..." dengan konteks
    universal yang inklusif. Fokus pada identification dan pattern practice,
    bukan personal expose.`,

  indikator: [
    'Peserta didik dapat menyebut dan mengenali 7 emosi dasar (happy, sad, angry, scared, tired, excited, bored) dengan lafal yang benar.',
    'Peserta didik dapat mengungkapkan perasaan menggunakan "I feel ... because ..." dan merespons "How do you feel?" dengan struktur yang tepat.',
    'Peserta didik dapat merespons scenario universal dengan emosi yang sesuai dalam roleplay berpasangan.',
  ],

  vocab: ['happy', 'sad', 'angry', 'scared', 'tired', 'excited', 'bored', 'I feel', 'how do you feel', 'because'],

  persiapan: ['Kartu emosi bergambar 7 emosi'],

  media: [
    {
      id                 : 'media-kartu-emosi',
      nama               : 'Kartu Emosi Bergambar (7 Emosi)',
      tipe               : 'kartu_cetak',
      printable          : true,
      pdf_ref            : 'Modul_Ajar_V3_TP15_Feelings_and_Emotions.docx',
      pdf_halaman        : 1,
      reusable_lintas_tp : true,
      keterangan         : '7 kartu A5 berisi ekspresi wajah anak (happy, sad, angry, scared, tired, excited, bored) — ilustrasi netral & beragam (usia, penampilan, inklusi). Bisa dipakai ulang di TP-TP lain tentang emosi.',
    },
  ],

  printables: [
    { file: 'tp15-happy.png',   label: 'Happy' },
    { file: 'tp15-sad.png',     label: 'Sad' },
    { file: 'tp15-angry.png',   label: 'Angry' },
    { file: 'tp15-scared.png',  label: 'Scared' },
    { file: 'tp15-bored.png',   label: 'Bored' },
    { file: 'tp15-excited.png', label: 'Excited' },
    { file: 'tp15-tired.png',   label: 'Tired' },
  ],

  skenario: [

    {
      fase  : 'Pembuka',
      durasi: 10,

      langkah: [
        {
          tipe: 'instruksi',
          teks: 'Ceritakan bahwa semua orang punya perasaan — happy, sad, angry, scared, tired, excited, bored. Scenario natural (bermain → happy, kehujanan → sedih, dll).',
          mode: {
            mudah:     { bantuan: 'Guru ceritakan scenario dengan bahasa Indonesia jika perlu. Siswa dengarkan dan terima message bahwa semua orang punya perasaan.' },
            normal:    { bantuan: 'Guru ceritakan dalam Inggris dengan gesture yang jelas. Siswa dengarkan dan identifikasi emosi yang disebutkan.' },
            tantangan: { bantuan: 'Guru tanya siswa: "Kapan kamu merasa happy? Excited?" Siswa jawab dalam Inggris atau Indonesia.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Everyone has feelings! Happy, sad, angry, scared, tired, excited, bored. We all feel these things!',
          mode: {
            mudah:     { bantuan: 'Ucapkan pelan dengan gesture per emosi. Siswa cukup dengarkan.' },
            normal:    { bantuan: 'Ucapkan natural dengan ekspresi wajah berbeda per emosi.' },
            tantangan: { bantuan: 'Ucapkan cepat, tunjuk siswa untuk tebak emosi berikutnya.' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Demo 7 emosi: ekspresi wajah + suara guru berbeda per emosi. Tunjuk kartu, kelas ulang nama emosi. Ulangi cepat.',
          mode: {
            mudah:     { bantuan: 'Guru demo 4 emosi utama saja (happy, sad, angry, scared). Cukup ekspresi wajah, tidak perlu voice variation.' },
            normal:    { bantuan: '7 emosi, guru demo face + voice. Siswa ulang setiap emosi setelah guru.' },
            tantangan: { bantuan: '7 emosi, guru demo cepat atau tunjuk kartu acak. Siswa boleh lead atau buat variasi expression.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Happy! / Sad! / Angry! / Scared! / Tired! / Excited! / Bored!',
          mode: {
            mudah:     { bantuan: 'Ucapkan 4 emosi saja perlahan. Siswa dengarkan & ulang kata saja.' },
            normal:    { bantuan: 'Ucapkan semua 7. Siswa ulang setiap emosi.' },
            tantangan: { bantuan: 'Ucapkan cepat atau acak urutan. Siswa respond spontan.' },
          },
        },
      ],
    },

    {
      fase  : 'Inti',
      durasi: 30,

      langkah: [
        {
          tipe: 'instruksi',
          teks: 'Model scenario universal: Guru beri situasi (menang game, hujan, dll), model respons "I feel ... because ..." — kelas ulang.',
          mode: {
            mudah:     { bantuan: 'Guru model lebih banyak (setiap scenario demo 2x). Siswa pair boleh cukup jawab emosi saja: "Happy!" tanpa "because".' },
            normal:    { bantuan: 'Guru model 1x per scenario. Siswa pair coba ucap "I feel ... because ..." dengan bantuan guru jika lupa.' },
            tantangan: { bantuan: 'Siswa dapat scenario baru yang belum dimodel guru. Siswa ciptakan "because" alasan sendiri tanpa prompt.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'You won a game! I feel excited because I won! / The lesson is long. I feel bored because it is long!',
          mode: {
            mudah:     { bantuan: 'Ucapkan pelan, ulangi 2x. Siswa cukup ulang emosi saja.' },
            normal:    { bantuan: 'Ucapkan normal, kelas ulang pola lengkap.' },
            tantangan: { bantuan: 'Ucapkan 1x, siswa langsung coba buat kalimat serupa dengan scenario berbeda.' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Pair work: Siswa A beri scenario, Siswa B respond "I feel ... because ...". Guru monitor & assist. Rotate 3–4x.',
          mode: {
            mudah:     { bantuan: 'Guru pair dengan siswa dulu 1-2x. Siswa boleh jawab emosi saja tanpa "because".' },
            normal:    { bantuan: 'Siswa pair mandiri. Guru monitor & assist jika stuck.' },
            tantangan: { bantuan: 'Siswa buat scenario sendiri (bukan dari guru). Pair buat dialogue panjang.' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Circle: Guru tanya scenario, siswa respond dengan pola lengkap. Setiap siswa dapat giliran minimal 1x.',
          mode: {
            mudah:     { bantuan: 'Guru give prompt scenario + first word ("I feel..."). Siswa complete.' },
            normal:    { bantuan: 'Guru tanya scenario, siswa respond pola lengkap. Prompt jika needed.' },
            tantangan: { bantuan: 'Siswa boleh buat scenario untuk teman (reverse role).' },
          },
        },
      ],
    },

    {
      fase  : 'Penutup',
      durasi: 10,

      langkah: [
        {
          tipe: 'instruksi',
          teks: 'Review cepat: Guru tunjuk kartu emosi acak, kelas sebutkan nama. Tempo: lambat → cepat. 3–4 round.',
          mode: {
            mudah:     { bantuan: 'Guru tunjuk kartu + sebutkan sendiri dulu. Siswa ulang kata saja.' },
            normal:    { bantuan: 'Guru tunjuk, siswa jawab nama emosi. Guru prompt jika lupa.' },
            tantangan: { bantuan: 'Kartu acak cepat. Siswa boleh lead game atau tunjuk kartu ke guru/kelas.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'What feeling is this? Happy! Sad! Angry! Scared! Tired! Excited! Bored!',
          mode: {
            mudah:     { bantuan: 'Ucapkan nama emosi dulu, siswa ulang.' },
            normal:    { bantuan: 'Tunjuk kartu, siswa jawab spontan.' },
            tantangan: { bantuan: 'Cepat, atau siswa yang memimpin.' },
          },
        },
        {
          tipe: 'instruksi',
          teks: 'Jembatan rumah: Guru jelaskan bahwa emosi natural terjadi setiap hari. Minta siswa perhatikan emosi mereka (tanpa harus cerita), just notice. Satu emosi sudah cukup untuk diingat.',
          mode: {
            mudah:     { bantuan: 'Pesan simple: "Nanti di rumah, kamu pasti punya perasaan. Itu normal." Tidak perlu siswa respond.' },
            normal:    { bantuan: 'Guru jelaskan jembatan rumah dengan natural. Siswa dengarkan.' },
            tantangan: { bantuan: 'Guru invite: "Siapa yang mau cerita 1 emosi yang dia rasakan hari ini?" — voluntary only.' },
          },
        },
        {
          tipe: 'audio',
          teks: 'Notice your feelings at home. Happy? Sad? Tired? Excited? One feeling is enough. Goodbye, class!',
          mode: null,
        },
      ],
    },

  ],

};

export default TP_15;
