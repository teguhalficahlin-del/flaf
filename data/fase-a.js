/**
 * =============================================================
 * FLAF — DATA KURIKULUM FASE A
 * File: data/fase-a.js
 * =============================================================
 * Terakhir direvisi: Mei 2026 — Revisi skenario v3
 *
 * Standar tipe langkah:
 *   instruksi     — panduan aksi guru (teks murni, tanpa embed kalimat ucap)
 *   audio         — kalimat guru yang diucapkan ke siswa (bisa diputar TTS)
 *   respons_siswa — contoh kalimat yang diharapkan dari siswa (bisa TTS)
 *   diferensiasi  — dua jalur: field `sudah` dan `belum`
 *   darurat       — langkah cadangan jika waktu tersisa ≤10 menit
 *
 * Tag PM (Pembelajaran Mendalam) — opsional pada tiap langkah:
 *   pm: 'mindful'    — mendorong kesadaran & refleksi siswa
 *   pm: 'meaningful' — mengaitkan dengan konteks nyata / kehidupan
 *   pm: 'joyful'     — aktivitas yang memicu semangat & rasa ingin tahu
 *
 * TP 1, 2, 18 sudah direvisi ke standar v3.
 * TP 3–17 masih format v2 (akan direvisi bertahap).
 * =============================================================
 */

import TP_15 from '../docs/sesi-m10/tp-15.js';
import TP_16 from '../docs/sesi-m11/tp-16.js';
import TP_17 from '../docs/sesi-m12/tp-17.js';
import TP_18 from '../docs/sesi-m13/tp-18.js';

const FASE_A = {

  meta: {
    fase          : 'A',
    kelas         : '1 & 2 SD',
    mata_pelajaran: 'Bahasa Inggris',
    data_version  : '2026-05-v3',
    total_tp      : 18,
  },

  cp: {
    menyimak_berbicara: `Pada akhir Fase A, peserta didik menggunakan bahasa Inggris
      sederhana untuk berinteraksi dalam situasi sosial dan kelas seperti berkenalan,
      memberikan informasi diri, mengucapkan salam dan perpisahan, serta merespons
      instruksi sederhana. Mereka memahami dan menggunakan kosakata dasar terkait
      lingkungan sekitar, anggota keluarga, warna, bentuk, angka, dan rutinitas
      sehari-hari. Peserta didik mampu menyanyikan lagu dan melakukan chant sederhana
      dalam bahasa Inggris.`,
    membaca_memirsa: `Pada akhir Fase A, peserta didik mampu memahami teks sangat
      sederhana berupa kata, frasa, dan kalimat pendek yang disertai gambar. Mereka
      dapat mengenali huruf, membaca nyaring kata-kata yang sudah dikenal, dan
      memahami makna kata-kata tersebut dalam konteks bergambar.`,
    menulis_mempresentasikan: `Pada akhir Fase A, peserta didik mampu menulis kata
      dan kalimat sangat sederhana dengan bantuan gambar atau model. Mereka dapat
      menyalin kata-kata yang sudah dikenal dan menulis label sederhana untuk
      benda-benda di sekitar mereka.`,
  },

  atp: {
    deskripsi: `ATP Fase A Bahasa Inggris disusun secara spiral dan tematik.
      TP 1–6 membangun fondasi interaksi dasar. TP 7–12 memperluas kosakata
      tematik. TP 13–18 mengintegrasikan kemampuan dalam konteks yang lebih
      kompleks dan bermakna.`,
    total_tp: 18,
  },

  tujuan_pembelajaran: [

    // ─── TP 1 — REVISI v3 ────────────────────────────────────────────────────
    {
      id       : 'tp-01',
      nomor    : 1,
      kelas    : 1,
      nama     : 'Greetings & Farewells',
      tema     : 'Interaksi Sosial Dasar',
      deskripsi: `Peserta didik belajar mengucapkan salam dan perpisahan dalam
        bahasa Inggris sesuai waktu dan situasi. Fokus pada interaksi lisan
        yang natural dalam rutinitas kelas.`,
      indikator: [
        'Peserta didik dapat mengucapkan salam (hello, good morning, good afternoon, good evening) dan perpisahan (goodbye, bye, see you) dengan benar sesuai waktu.',
        'Peserta didik dapat merespons salam dan perpisahan dari guru atau teman dengan ekspresi dan gestur yang tepat.',
        'Peserta didik dapat menggunakan salam dan perpisahan secara spontan dalam rutinitas kelas sehari-hari.',
      ],
      vocab: ['hello', 'hi', 'goodbye', 'bye', 'see you', 'good morning',
              'good afternoon', 'good evening', 'good night'],
      persiapan: ['Kartu gambar salam (pagi/siang/sore)', 'Kartu waktu (matahari/bulan)'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            {
              tipe: 'instruksi',
              teks: 'Berdiri di pintu kelas, sambut siswa satu per satu saat masuk.',
              pm: 'joyful',
              mode: {
                mudah: { bantuan: 'Sambut satu per satu pelan dan beri contoh salam pertama. Fokus pada kata hello/good morning saja.' },
                normal: { bantuan: 'Sambut masuk siswa dengan ramah dan ajak mereka menjawab salam singkat.' },
                tantangan: { bantuan: 'Ajak siswa menyapa kembali teman di samping mereka setelah masuk.' },
              },
            },
            {
              tipe: 'audio',
              teks: 'Good morning! Come in, come in!',
              mode: {
                mudah: { bantuan: 'Ucapkan pelan dengan intonasi hangat. Siswa cukup mendengarkan.' },
                normal: { bantuan: 'Ucapkan jelas dan ajak siswa ulang bersama.' },
                tantangan: { bantuan: 'Ucapkan agak cepat dan minta satu siswa mengulang sekali lagi.' },
              },
            },
            {
              tipe: 'instruksi',
              teks: 'Setelah semua duduk, sapa seluruh kelas.',
              pm: 'mindful',
              mode: {
                mudah: { bantuan: 'Sapa kelas dengan satu salam, beri jeda dan ulang jika perlu.' },
                normal: { bantuan: 'Sapa kelas lalu ajak kelas menjawab bersama.' },
                tantangan: { bantuan: 'Tambahkan pertanyaan singkat "How are you today?" untuk kelas jawab bersama.' },
              },
            },
            {
              tipe: 'audio',
              teks: 'Good morning, everyone! How are you today?',
              mode: {
                mudah: { bantuan: 'Ucapkan pelan dan ulang jika kelas belum bisa menjawab.' },
                normal: { bantuan: 'Ucapkan natural dan tunggu respons dari kelas.' },
                tantangan: { bantuan: 'Tingkatkan intonasi di akhir kalimat supaya kelas lebih antusias menjawab.' },
              },
            },
            {
              tipe: 'respons_siswa',
              teks: 'Good morning, teacher! I am fine, thank you!',
              mode: {
                mudah: { bantuan: 'Minta siswa mengulang kalimat setelah guru secara berkelompok.' },
                normal: { bantuan: 'Minta satu siswa atau beberapa siswa menjawab sendiri.' },
                tantangan: { bantuan: 'Minta siswa tambah "And you?" setelah kalimat utama.' },
              },
            },
            {
              tipe: 'instruksi',
              teks: 'Tunjukkan kartu waktu (pagi/siang/sore). Tanya siswa sambil menunjuk gambar — biarkan mereka menebak dulu sebelum memberi tahu.',
              pm: 'meaningful',
              mode: {
                mudah: { bantuan: 'Tunjukkan kartu satu per satu dan sebutkan nama waktu dalam bahasa Indonesia atau Inggris. Boleh bantu menebak.' },
                normal: { bantuan: 'Tunjukkan kartu, minta siswa sebut waktu dalam Inggris.' },
                tantangan: { bantuan: 'Minta siswa sebutkan salam yang cocok untuk setiap kartu waktu.' },
              },
            },
            {
              tipe: 'audio',
              teks: 'What time is this? Morning? Afternoon?',
              mode: {
                mudah: { bantuan: 'Ucapkan perlahan dan tunjuk kartu waktu yang sesuai.' },
                normal: { bantuan: 'Ucapkan jelas, lalu beri waktu bagi siswa menjawab.' },
                tantangan: { bantuan: 'Tambahkan pilihan "Evening?" untuk kelas bandingkan.' },
              },
            },
            {
              tipe: 'respons_siswa',
              teks: 'Morning! Good morning!',
              mode: {
                mudah: { bantuan: 'Minta siswa ulang kata "Morning" dan "Good morning" bersama.' },
                normal: { bantuan: 'Minta beberapa siswa menyebutkan jawaban dengan suara lebih kuat.' },
                tantangan: { bantuan: 'Minta siswa gabungkan jawaban menjadi "Good morning, teacher!" secara penuh.' },
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
              teks: 'Tempel 4 kartu salam di papan. Tunjuk satu per satu, kelas ucapkan bersama.',
              pm: 'mindful',
              mode: {
                mudah: { bantuan: 'Tunjuk satu kartu dulu dan sebutkan salam sebelum kelas ulang.' },
                normal: { bantuan: 'Tunjuk kartu dan minta kelas ucapkan bersama each salam.' },
                tantangan: { bantuan: 'Tunjuk dua kartu acak lalu minta kelas pilih salam yang tepat.' },
              },
            },
            {
              tipe: 'audio',
              teks: 'Good morning. Good afternoon. Good evening. Good night.',
              mode: {
                mudah: { bantuan: 'Ucapkan pelan dengan jeda antar salam agar siswa bisa mengikuti.' },
                normal: { bantuan: 'Ucapkan dengan intonasi jelas, lalu ajak kelas mengulang.' },
                tantangan: { bantuan: 'Ucapkan cepat pada putaran kedua untuk tantangan listening.' },
              },
            },
            {
              tipe: 'respons_siswa',
              teks: 'Good morning! Good afternoon! Good evening! Good night!',
              mode: {
                mudah: { bantuan: 'Minta kelas ulang bersama setelah guru, satu demi satu.' },
                normal: { bantuan: 'Minta kelompok kecil atau seluruh kelas jawab bersama.' },
                tantangan: { bantuan: 'Minta satu siswa memimpin pengucapan setiap salam.' },
              },
            },
            {
              tipe: 'instruksi',
              teks: 'Chant dengan tepuk tangan — guru mulai, siswa ikuti setelah putaran pertama.',
              pm: 'joyful',
              mode: {
                mudah: { bantuan: 'Lakukan chant pelan dengan tepuk tangan sederhana.' },
                normal: { bantuan: 'Lakukan chant dengan ritme, siswa ikut setelah guru mulai.' },
                tantangan: { bantuan: 'Percepat chant di putaran kedua untuk energi lebih.' },
              },
            },
            {
              tipe: 'audio',
              teks: 'Hello hello, how are you? I am fine, thank you!',
              mode: {
                mudah: { bantuan: 'Ucapkan sekali pelan, lalu ajak siswa ulang bagian-bagian pendek.' },
                normal: { bantuan: 'Ucapkan dengan ritme dan ajak siswa ikut ketika siap.' },
                tantangan: { bantuan: 'Minta siswa bilang jawaban lengkap secara tepuk tangan.' },
              },
            },
            {
              tipe: 'respons_siswa',
              teks: 'Hello hello, how are you? I am fine, thank you!',
              mode: {
                mudah: { bantuan: 'Bagi menjadi dua bagian: "Hello hello" dan "I am fine". Siswa ulang masing-masing.' },
                normal: { bantuan: 'Ajak kelas mengulang kalimat lengkap bersama.' },
                tantangan: { bantuan: 'Minta siswa coba jawab "I am fine, thank you!" satu per satu.' },
              },
            },
            {
              tipe: 'instruksi',
              teks: 'Permainan kartu waktu: guru angkat kartu, siswa berlomba ucapkan salam yang tepat. Siapa pertama berdiri dan benar, dapat poin.',
              pm: 'joyful',
              mode: {
                mudah: { bantuan: 'Gunakan hanya dua kartu dulu agar permainan sederhana.' },
                normal: { bantuan: 'Gunakan semua kartu waktu dan salam yang tepat.' },
                tantangan: { bantuan: 'Tambahkan aturan cepat: sebut salam sebelum duduk untuk poin ekstra.' },
              },
            },
            {
              tipe: 'instruksi',
              teks: 'Hubungkan dengan kehidupan nyata: tanya siswa apa yang mereka ucapkan saat bertemu orang tua di rumah pagi hari.',
              pm: 'meaningful',
              mode: {
                mudah: { bantuan: 'Berikan contoh satu situasi sederhana sebelum siswa menjawab.' },
                normal: { bantuan: 'Tanya siswa dan biarkan mereka sebutkan salam yang cocok.' },
                tantangan: { bantuan: 'Minta siswa sebutkan dua salam berbeda untuk dua situasi.' },
              },
            },
            {
              tipe: 'audio',
              teks: 'What do you say to your parents in the morning at home?',
              mode: {
                mudah: { bantuan: 'Ucapkan perlahan dan jelaskan arti "parents" jika perlu.' },
                normal: { bantuan: 'Ucapkan natural dan tunggu respons siswa.' },
                tantangan: { bantuan: 'Minta siswa ulang pertanyaan sebelum menjawab.' },
              },
            },
            {
              tipe: 'respons_siswa',
              teks: 'Good morning, Mom! Good morning, Dad!',
              mode: {
                mudah: { bantuan: 'Minta siswa ulang kalimat bersama atau satu per satu.' },
                normal: { bantuan: 'Minta beberapa siswa menjawab dengan siapa yang dituju.' },
                tantangan: { bantuan: 'Minta siswa menambahkan "How are you?" jika bisa.' },
              },
            },
            {
              tipe: 'instruksi',
              teks: 'Ajarkan perpisahan: goodbye, bye, see you. Tunjuk kartu, ucapkan bersama.',
              mode: {
                mudah: { bantuan: 'Tunjuk kartu satu per satu dan sebut salam perpisahan perlahan.' },
                normal: { bantuan: 'Tunjuk kartu lalu ajak kelas ucapkan bersama setiap salam.' },
                tantangan: { bantuan: 'Ajak siswa sebutkan kapan mereka menggunakan setiap perpisahan.' },
              },
            },
            {
              tipe: 'audio',
              teks: 'Goodbye! Bye! See you tomorrow!',
              mode: {
                mudah: { bantuan: 'Ucapkan pelan satu per satu dan ulang dua kali.' },
                normal: { bantuan: 'Ucapkan dengan intonasi ramah dan ajak kelas ikut.' },
                tantangan: { bantuan: 'Minta siswa jawab "See you tomorrow!" dengan semangat.' },
              },
            },
            {
              tipe: 'respons_siswa',
              teks: 'Goodbye! Bye! See you!',
              mode: {
                mudah: { bantuan: 'Minta kelas ulang bersama satu per satu.' },
                normal: { bantuan: 'Minta beberapa siswa mengatakan kalimat penuh.' },
                tantangan: { bantuan: 'Minta siswa bebas tambahkan "See you later!" jika bisa.' },
              },
            },
            { tipe: 'diferensiasi',  sudah: 'Minta siswa buat kalimat salam sendiri dengan waktu yang berbeda — tanpa kartu.', belum: 'Bimbing satu per satu dengan menunjuk kartu waktu, tidak perlu buru-buru.' },
            { tipe: 'darurat',       teks: 'Langsung ke latihan berpasangan — abaikan permainan kartu berlomba. Minta siswa saling sapa dengan teman di sampingnya.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            {
              tipe: 'instruksi',
              teks: 'Tanya 3–4 siswa secara acak — tunjuk kartu waktu, mereka sebut salam yang tepat.',
              pm: 'mindful',
              mode: {
                mudah: { bantuan: 'Tunjuk kartu dan bantu siswa menyebut salam yang tepat.' },
                normal: { bantuan: 'Pilih siswa secara acak dan minta mereka sebut salam yang cocok.' },
                tantangan: { bantuan: 'Minta siswa tambahkan "Good morning" atau "Good afternoon" sesuai kartu.' },
              },
            },
            {
              tipe: 'audio',
              teks: 'What greeting do we use in the morning?',
              mode: {
                mudah: { bantuan: 'Ucapkan pertanyaan perlahan dan ulang jika perlu.' },
                normal: { bantuan: 'Ucapkan natural dan tunggu respon siswa.' },
                tantangan: { bantuan: 'Tambahkan pertanyaan kedua: "Why?" untuk respons lebih panjang.' },
              },
            },
            {
              tipe: 'respons_siswa',
              teks: 'Good morning!',
              mode: {
                mudah: { bantuan: 'Minta seluruh kelas jawab bersama dengan gesture.' },
                normal: { bantuan: 'Minta beberapa siswa menjawab sendiri.' },
                tantangan: { bantuan: 'Minta satu siswa jawab lengkap dengan "Good morning, teacher!"' },
              },
            },
            {
              tipe: 'instruksi',
              teks: 'Refleksi singkat: tanya satu siswa apa salam favorit mereka hari ini dan mengapa.',
              pm: 'meaningful',
              mode: {
                mudah: { bantuan: 'Beri pilihan jawaban sederhana seperti "morning" atau "bye".' },
                normal: { bantuan: 'Dorong siswa menjawab dengan satu atau dua kata.' },
                tantangan: { bantuan: 'Minta siswa jelaskan dengan kalimat pendek.' },
              },
            },
            {
              tipe: 'instruksi',
              teks: 'Tutup kelas bersama — guru mulai, siswa ikut.',
              mode: {
                mudah: { bantuan: 'Guru ucapkan satu salam penutup, kelas ulang bersama.' },
                normal: { bantuan: 'Guru mulai lalu ajak kelas ikut bergantian.' },
                tantangan: { bantuan: 'Ajak kelas menambahkan "See you!" di akhir.' },
              },
            },
            {
              tipe: 'audio',
              teks: 'See you next time. Goodbye, everyone!',
              mode: {
                mudah: { bantuan: 'Ucapkan pelan dan hangat, biarkan siswa mendengar semua kata.' },
                normal: { bantuan: 'Ucapkan natural dan ajak kelas mengulang di akhir.' },
                tantangan: { bantuan: 'Minta siswa bilang "Goodbye, teacher!" setelah guru.' },
              },
            },
            {
              tipe: 'respons_siswa',
              teks: 'Goodbye, teacher! See you!',
              mode: {
                mudah: { bantuan: 'Minta kelas ulang bersama kalimat tersebut.' },
                normal: { bantuan: 'Minta beberapa siswa yang lebih berani menjawab sendiri.' },
                tantangan: { bantuan: 'Minta satu siswa jawab dengan intonasi ramah.' },
              },
            },
          ],
        },
      ],
    },

    // ─── TP 2 — REVISI v3 ────────────────────────────────────────────────────
    {
      id       : 'tp-02',
      nomor    : 2,
      kelas    : 1,
      nama     : 'Introducing Myself',
      tema     : 'Interaksi Sosial Dasar',
      deskripsi: `Peserta didik belajar memperkenalkan diri sendiri meliputi nama
        dan usia. Interaksi dilakukan secara berpasangan dan di depan kelas.`,
      indikator: [
        'Peserta didik dapat menyebutkan nama diri sendiri menggunakan struktur "My name is ..." atau "I am ..." dengan lafal yang jelas.',
        'Peserta didik dapat menyebutkan usia menggunakan struktur "I am ... years old" dan merespons pertanyaan "How old are you?"',
        'Peserta didik dapat memperkenalkan diri lengkap (nama + usia) kepada teman dan guru dalam situasi bermain peran.',
      ],
      vocab: ['name', 'my name is', 'I am', 'years old', 'how old',
              'nice to meet you', 'what is your name'],
      persiapan: ['Papan tulis + spidol', 'Kertas name tag kosong'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',         teks: 'Good morning, class! Let us learn how to introduce ourselves today!',
              mode: {
                mudah: { bantuan: 'Ulangi setelah guru 2×; dengarkan dengan mata tertutup dulu.' },
                normal: { bantuan: 'Dengarkan sambil lihat guru; perhatikan ekspresi wajah dan intonasi.' },
                tantangan: { bantuan: 'Tebak berapa kata yang diucapkan guru; tulis 3 kata penting yang didengar.' },
              } },
            { tipe: 'instruksi',     teks: 'Guru perkenalkan diri sebagai model. Tulis nama di papan sambil berbicara — pelan dan jelas.', pm: 'mindful',
              mode: {
                mudah: { bantuan: 'Guru berbicara pelan; siswa lihat di papan sambil mendengarkan; boleh tunjuk nama di papan.' },
                normal: { bantuan: 'Guru berbicara normal; siswa dengarkan dan amati gerakan mulut guru saat mengucapkan nama.' },
                tantangan: { bantuan: 'Siswa tutup mata saat guru berbicara; buka saat diajak lihat tulisan di papan; prediksi nama sebelum ditulis.' },
              } },
            { tipe: 'audio',         teks: 'Hello! My name is ... I am a teacher. Nice to meet you!',
              mode: {
                mudah: { bantuan: 'Dengarkan kalimat pendek: "My name is ..."; minta guru ulangi 3×.' },
                normal: { bantuan: 'Dengarkan kalimat utuh; hitung jumlah kalimat yang diucapkan guru.' },
                tantangan: { bantuan: 'Dengarkan dan identifikasi apa pekerjaan guru; tebak berapa teman sekelas yang sudah kenal guru.' },
              } },
            { tipe: 'instruksi',     teks: 'Tanya kelas — biarkan mereka menjawab sebelum guru konfirmasi.',
              mode: {
                mudah: { bantuan: 'Guru tanya pertanyaan yes/no: "Is my name ...?"; siswa angkat tangan atau angguk saja.' },
                normal: { bantuan: 'Guru tanya: "What is my name?"; siswa jawab dengan 1–2 kata; guru tunggu 10 detik.' },
                tantangan: { bantuan: 'Guru tanya: "What is my name and what do I do?"; siswa jawab kalimat lengkap; guru catat jawaban berbeda.' },
              } },
            { tipe: 'audio',         teks: 'Everyone — what is my name? Louder please!',
              mode: {
                mudah: { bantuan: 'Guru mengucapkan nama guru sendiri terlebih dahulu; siswa ulangi pelan.' },
                normal: { bantuan: 'Siswa jawab pertanyaan bersama-sama; guru dorong untuk berbicara keras dan jelas.' },
                tantangan: { bantuan: 'Guru tanya ulang dengan intonasi berbeda; siswa coba tiru intonasi guru yang beragam.' },
              } },
            { tipe: 'respons_siswa', teks: 'Your name is ...!',
              mode: {
                mudah: { bantuan: 'Siswa hanya menunjuk guru atau angguk saja; tidak perlu berbicara.' },
                normal: { bantuan: 'Siswa berbicara "Your name is [nama guru]" dengan suara sedang; guru terima semua variasi.' },
                tantangan: { bantuan: 'Siswa berbicara "Your name is [nama guru]. You are a teacher!" dengan lafal jelas dan suara keras.' },
              } },
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi',     teks: 'Tulis di papan: "My name is ___." Tunjuk papan, ucapkan bersama dua kali.', pm: 'mindful',
              mode: {
                mudah: { bantuan: 'Guru tulis nama guru sendiri di dalam garis kosong; siswa lihat dan dengarkan guru ucapkan 3× pelan.' },
                normal: { bantuan: 'Guru tulis nama contoh; siswa lihat papan dan ucapkan bersama guru 2× dengan ritme normal.' },
                tantangan: { bantuan: 'Guru tulis garis kosong dulu; siswa prediksi kalimat apa; baru guru tulis nama; siswa ucapkan dengan variasi intonasi.' },
              } },
            { tipe: 'audio',         teks: 'My name is Budi. My name is Sari. My name is Andi.',
              mode: {
                mudah: { bantuan: 'Guru ucapkan 1 nama saja dulu; siswa dengarkan dan tunjuk gambar atau kartu nama yang sesuai.' },
                normal: { bantuan: 'Guru ucapkan 3 nama; siswa dengarkan dan ucapkan nama-nama itu setelah guru selesai.' },
                tantangan: { bantuan: 'Guru ucapkan 3 nama; siswa dengarkan dan tulis atau gambar huruf pertama setiap nama yang didengar.' },
              } },
            { tipe: 'respons_siswa', teks: 'My name is ...',
              mode: {
                mudah: { bantuan: 'Siswa hanya mengucapkan nama sendiri saja, tanpa kalimat lengkap: "Budi" atau "Sari".' },
                normal: { bantuan: 'Siswa ucapkan "My name is [nama sendiri]" dengan suara pelan atau sedang; boleh lihat teman sebagai model.' },
                tantangan: { bantuan: 'Siswa ucapkan "My name is [nama sendiri]" dengan suara keras dan jelas; guru catat siapa yang berbicara tanpa ragu.' },
              } },
            { tipe: 'instruksi',     teks: 'Bagikan kertas name tag. Siswa tulis nama sendiri. Bantu yang belum bisa menulis — tidak apa-apa kalau belum rapi.',
              mode: {
                mudah: { bantuan: 'Guru sediakan name tag pre-printed; siswa hanya baca nama mereka sendiri; tidak ada tulis-menulis.' },
                normal: { bantuan: 'Siswa tulis nama sendiri dengan bantuan guru; guru beri garis panduan atau contoh huruf; boleh cetak atau tulisan tangan.' },
                tantangan: { bantuan: 'Siswa tulis nama sendiri tanpa bantuan; bisa tambah usia atau kota di name tag; guru minta siswa baca kembali tulisan mereka sendiri.' },
              } },
            { tipe: 'instruksi',     teks: 'Ajarkan usia — hubungkan dengan ulang tahun yang pernah mereka rayakan.', pm: 'meaningful',
              mode: {
                mudah: { bantuan: 'Guru tanya: "Siapa yang berulang tahun bulan depan?"; siswa angkat tangan; hubungkan dengan usia dengan gambar atau jari.' },
                normal: { bantuan: 'Guru ajak siswa cerita ulang tahun mereka; tanya usia yang akan datang; siswa jawab dengan angka atau jari-jari.' },
                tantangan: { bantuan: 'Guru tanya: "Berapa usia sekarang? Kapan ulang tahun kamu? Berapa usia nanti?" Siswa diskusi berpasangan lalu laporkan.' },
              } },
            { tipe: 'audio',         teks: 'How old are you? I am six years old. I am seven years old.',
              mode: {
                mudah: { bantuan: 'Guru ucapkan "I am six" + tunjuk jari 6; siswa tiru jari; guru ulangi "I am seven" + jari 7 sebagai model.' },
                normal: { bantuan: 'Guru ucapkan pertanyaan dan jawaban; siswa dengarkan; guru tanya ulang: "How old are you?" siswa jawab dengan nomor atau jari.' },
                tantangan: { bantuan: 'Guru ucapkan variasi: "I am six" / "I am six years old" / "I\'m six"; siswa identifikasi perbedaan; tebak usia guru.' },
              } },
            { tipe: 'respons_siswa', teks: 'I am six years old! I am seven years old!',
              mode: {
                mudah: { bantuan: 'Siswa tunjuk jari usia; guru bantu ucapkan: "I am ... years old"; siswa terima segala jawaban.' },
                normal: { bantuan: 'Siswa ucapkan "I am [usia] years old" dengan suara sedang; boleh lihat jari sebagai bantuan penghitung.' },
                tantangan: { bantuan: 'Siswa ucapkan "I am [usia] years old" dengan suara keras; guru tanya follow-up: "When is your birthday?" siswa jawab dengan bulan.' },
              } },
            { tipe: 'instruksi',     teks: 'Permainan walk and talk: siswa berdiri, berjalan 2 menit, perkenalkan diri ke 3 teman berbeda. Guru pantau dan bantu.', pm: 'joyful',
              mode: {
                mudah: { bantuan: 'Guru bentuk pasangan untuk siswa; siswa berdiri di depan teman, guru beri model dahulu; hanya tukar nama saja.' },
                normal: { bantuan: 'Siswa berdiri dan berjalan sambil menghitung 1–60 (2 menit); guru kasih signal saat waktunya bicara; siswa perkenalkan diri ke partner.' },
                tantangan: { bantuan: 'Siswa bebas berjalan dan memilih 3 teman berbeda; perkenalkan diri lengkap; guru catat siapa yang malu dan siapa yang percaya diri.' },
              } },
            { tipe: 'audio',         teks: 'Hello! My name is ... I am ... years old. Nice to meet you!',
              mode: {
                mudah: { bantuan: 'Guru ucapkan perlahan dengan jeda; siswa dengarkan dan tunjuk: "Itu siapa?" Guru ulangi 2× tanpa siswa harus balas.' },
                normal: { bantuan: 'Guru model kalimat lengkap; siswa dengarkan semuanya; guru tanya: "Siapa namanya?" siswa jawab satu kata.' },
                tantangan: { bantuan: 'Guru ucapkan; siswa ulang kalimat lengkap; guru tanya: "Berapa umurnya?" siswa jawab detail; guru tulis nama dan usia di papan.' },
              } },
            { tipe: 'respons_siswa', teks: 'Hi! My name is ... I am ... years old. Nice to meet you too!',
              mode: {
                mudah: { bantuan: 'Siswa hanya balas "Hi!" atau ngomong nama; guru bantu ucapkan sisanya sambil pegang tangan siswa.' },
                normal: { bantuan: 'Siswa ucapkan sebagian: "My name is ..." + usia terpisah; guru terima jawaban tidak lengkap.' },
                tantangan: { bantuan: 'Siswa ucapkan kalimat lengkap dengan "too" di akhir; guru dorong siswa yang gugup untuk bicara lebih keras dan percaya diri.' },
              } },
            { tipe: 'diferensiasi',  sudah: 'Dorong menambahkan "I am from ..." atau "I like ..." setelah nama dan usia.', belum: 'Boleh hanya nama saja dulu, usia bisa belakangan — tidak ada paksaan.' },
            { tipe: 'darurat',       teks: 'Batalkan permainan jalan. Latihan berpasangan di tempat duduk masing-masing — cukup saling perkenalkan nama saja.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi',     teks: 'Panggil 3 siswa sukarela maju. Beri tepuk semangat sebelum mereka mulai.', pm: 'joyful',
              mode: {
                mudah: { bantuan: 'Guru menunjuk siswa yang terlihat siap; guru beri tepuk tangan dan dorongan; siswa berdiri saja di depan sudah cukup bagus.' },
                normal: { bantuan: 'Guru minta sukarelawan; siswa berdiri di depan kelas; guru dan teman diberi salam atau pertanyaan simpl dari guru.' },
                tantangan: { bantuan: 'Guru minta sukarelawan dengan tantangan: "Siapa yang berani perkenalkan diri di depan?" Guru catat kepercayaan diri tiap siswa.' },
              } },
            { tipe: 'audio',         teks: 'Come to the front — introduce yourself!',
              mode: {
                mudah: { bantuan: 'Guru ucapkan pelan: "Come to the front"; siswa berdiri; guru bantu katakan "Introduce yourself" sambil tunjuk siswa.' },
                normal: { bantuan: 'Guru ucapkan instruksi normal; siswa berdiri maju ke depan; guru tunggu siswa siap sebelum lanjut.' },
                tantangan: { bantuan: 'Guru ucapkan dengan intonasi enthusiastis; siswa berdiri, maju, dan langsung mulai bicara tanpa bantuan guru.' },
              } },
            { tipe: 'respons_siswa', teks: 'Hello! My name is ... I am ... years old. Nice to meet you!',
              mode: {
                mudah: { bantuan: 'Siswa boleh mengucapkan hanya nama saja atau sekadar senyum; guru dan teman tepuk tangan untuk memberikan semangat.' },
                normal: { bantuan: 'Siswa ucapkan nama dan usia; boleh lihat papan tulis atau kartu bantuan; guru terima dengan ramah.' },
                tantangan: { bantuan: 'Siswa ucapkan kalimat lengkap dengan suara keras, mata kontak ke teman, dan senyuman; guru catat elemen presentasi yang baik.' },
              } },
            { tipe: 'instruksi',     teks: 'Setelah tiap penampilan, ajak kelas bertepuk tangan meriah.',
              mode: {
                mudah: { bantuan: 'Guru memulai tepuk tangan; semua ikut tepuk tangan; guru minta siswa yang tampil duduk dan dikasih stiker atau pujian tertulis.' },
                normal: { bantuan: 'Guru instruksikan: "Mari tepuk tangan!" semua tepuk meriah; guru bilang "Great job, [nama]!".' },
                tantangan: { bantuan: 'Guru minta siswa yang belum tampil untuk tepuk tangan dan minta mereka bilang "Good job, [nama]!" atau berikan ucapan lain dalam bahasa Inggris.' },
              } },
            { tipe: 'instruksi',     teks: 'Refleksi: tanya siswa — apakah mereka tahu nama lengkap teman baru yang baru dikenal hari ini?', pm: 'meaningful',
              mode: {
                mudah: { bantuan: 'Guru tanya: "Teman siapa yang sudah kenal namanya?" Siswa angkat tangan; guru catat siapa yang menjawab.' },
                normal: { bantuan: 'Guru tanya: "Sebutkan nama satu teman yang baru dikenal hari ini." Siswa menjawab 1–2 nama; guru validasi.' },
                tantangan: { bantuan: 'Guru tanya: "Berapa teman baru yang sudah kenal nama dan usia? Siapa yang paling sulit dikenal? Mengapa?" Siswa refleksi dalam kelompok kecil.' },
              } },
            { tipe: 'audio',         teks: 'Great job, everyone! You can introduce yourself in English!',
              mode: {
                mudah: { bantuan: 'Guru ucapkan pelan dengan senyuman; siswa dengarkan dan merasa termotivasi; guru tidak perlu minta respons.' },
                normal: { bantuan: 'Guru ucapkan dengan suara ceria; siswa dengarkan dan boleh bertepuk tangan atau bersorak merayakan pencapaian kelas.' },
                tantangan: { bantuan: 'Guru ucapkan dengan penuh apresiasi; siswa bisa bilang "Thank you, teacher!" atau mulai bernyanyi lagu penutup bersama-sama.' },
              } },
          ],
        },
      ],
    },

    // ─── TP 3 ───────────────────────────────────────────────────────────────
    {
      id       : 'tp-03',
      nomor    : 3,
      kelas    : 1,
      nama     : 'Classroom Instructions',
      tema     : 'Interaksi Sosial Dasar',
      deskripsi: `Peserta didik memahami dan merespons instruksi kelas yang sering
        digunakan guru. Fokus pada pemahaman mendengar dan respons fisik (TPR).`,
      indikator: [
        'Peserta didik dapat merespons instruksi satu langkah (sit down, stand up, open your book, close your book, listen, look) dengan tindakan yang benar.',
        'Peserta didik dapat merespons instruksi dua langkah sederhana (open your book and read, listen and repeat) dengan urutan tindakan yang tepat.',
        'Peserta didik dapat mengucapkan instruksi kelas dasar untuk memimpin teman dalam aktivitas terbimbing.',
      ],
      vocab: ['sit down', 'stand up', 'open', 'close', 'listen', 'look',
              'repeat', 'read', 'write', 'draw', 'stop', 'go'],
      persiapan: ['Kartu instruksi bergambar (sit/stand/open/close)', 'Poster TPR'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            {
              tipe: 'audio',
              teks: 'Good morning! Today we learn classroom instructions. Are you ready?',
              mode: {
                mudah: { bantuan: 'Ucapkan pelan dan ramah sebagai sambutan awal. Siswa cukup mendengarkan.' },
                normal: { bantuan: 'Ucapkan jelas dan tunggu respons antusiasme dari siswa.' },
                tantangan: { bantuan: 'Tanya siswa "Who is ready?" dan minta mereka angkat tangan.' },
              },
            },
            {
              tipe: 'instruksi',
              teks: 'Langsung demonstrasikan tanpa penjelasan — lakukan gerakan sebelum berkata. [Stand up!] — berdiri. [Sit down!] — duduk. Ulangi 3×.',
              mode: {
                mudah: { bantuan: 'Lakukan gerakan pelan dan jelas, beri jeda setiap siklus.' },
                normal: { bantuan: 'Lakukan dengan ritme natural, siswa ikuti gerakan dengan melihat.' },
                tantangan: { bantuan: 'Percepat putaran ketiga hingga siswa merasa tertantang.' },
              },
            },
            {
              tipe: 'audio',
              teks: 'Stand up! Sit down! Stand up! Sit down!',
              mode: {
                mudah: { bantuan: 'Ucapkan pelan dengan pause jelas antara instruksi untuk siswa ikut.' },
                normal: { bantuan: 'Ucapkan dengan ritme yang konsisten dan jelas.' },
                tantangan: { bantuan: 'Ucapkan dengan tempo cepat dan energi tinggi di putaran akhir.' },
              },
            },
            {
              tipe: 'instruksi',
              teks: 'Percepat tempo di putaran ketiga. Siswa akan tertawa — itu bagus, pertanda mereka terlibat.',
              mode: {
                mudah: { bantuan: 'Jelaskan tujuan kepada siswa sebelum memulai percepatan.' },
                normal: { bantuan: 'Percepat secara bertahap tanpa peringatan khusus.' },
                tantangan: { bantuan: 'Percepat drastis dan tambahkan variasi gerakan (jongkok, loncat).' },
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
              teks: 'Perkenalkan kartu instruksi satu per satu. Tunjuk gambar dulu, jangan sebut — biarkan siswa menebak. [What is this? Listen. Listen!]',
              mode: {
                mudah: { bantuan: 'Tunjuk kartu dan sebutkan kata sebelum menebak. Terima semua tebakan.' },
                normal: { bantuan: 'Tunjuk kartu, beri jeda untuk tebakan, lalu sebutkan jawaban.' },
                tantangan: { bantuan: 'Tunjuk kartu dan tanya "What action is this?" untuk respons lebih kompleks.' },
              },
            },
            {
              tipe: 'audio',
              teks: 'Listen. Look. Open your book. Close your book. Write. Draw.',
              mode: {
                mudah: { bantuan: 'Ucapkan pelan, satu kata dengan pause jelas, ulang jika perlu.' },
                normal: { bantuan: 'Ucapkan dengan intonasi yang menunjukkan setiap instruksi berbeda.' },
                tantangan: { bantuan: 'Ucapkan dengan tempo lebih cepat untuk tantangan listening.' },
              },
            },
            {
              tipe: 'instruksi',
              teks: 'Simon Says — guru beri instruksi. Siswa lakukan hanya jika didahului "Simon says". Kalau tidak ada "Simon says", yang bergerak duduk dulu. [Simon says, stand up!]',
              mode: {
                mudah: { bantuan: 'Mainkan dengan instruksi jelas dan jangan cepat-cepat.' },
                normal: { bantuan: 'Mainkan dengan fokus pada pemahaman "Simon says" vs instruksi biasa.' },
                tantangan: { bantuan: 'Beri instruksi dengan tempo cepat dan tambahkan trik verbal.' },
              },
            },
            {
              tipe: 'audio',
              teks: 'Simon says, stand up! Simon says, open your book! Sit down!',
              mode: {
                mudah: { bantuan: 'Ucapkan perlahan dengan penekanan pada "Simon says".' },
                normal: { bantuan: 'Ucapkan dengan jelas pembedaan antara "Simon says" dan instruksi tanpa.' },
                tantangan: { bantuan: 'Ucapkan dengan tempo cepat untuk menguji fokus siswa.' },
              },
            },
            {
              tipe: 'instruksi',
              teks: 'Instruksi dua langkah — pelan dulu, lalu makin cepat. [Open your book AND read. Ready?]',
              mode: {
                mudah: { bantuan: 'Berikan instruksi satu per satu, bukan digabung.' },
                normal: { bantuan: 'Berikan instruksi dua langkah dengan jeda sedang, lalu percepat.' },
                tantangan: { bantuan: 'Berikan instruksi dua langkah dengan tempo cepat di awal.' },
              },
            },
            {
              tipe: 'audio',
              teks: 'Open your book and read. Listen and repeat. Look and write.',
              mode: {
                mudah: { bantuan: 'Ucapkan tiap instruksi dengan pause dan ulangi jika perlu.' },
                normal: { bantuan: 'Ucapkan dengan intonasi yang menunjukkan hubungan kedua tindakan.' },
                tantangan: { bantuan: 'Ucapkan dengan tempo cepat untuk tantangan pemahaman.' },
              },
            },
            {
              tipe: 'instruksi',
              teks: 'Giliran siswa jadi pemimpin: panggil satu siswa maju. [Come here — you are the teacher now!] Siswa beri instruksi ke kelas.',
              mode: {
                mudah: { bantuan: 'Bantu siswa dengan memberikan contoh instruksi sebelum giliran mereka.' },
                normal: { bantuan: 'Siswa beri instruksi sendiri tanpa bantuan atau dengan bantuan minimal.' },
                tantangan: { bantuan: 'Siswa beri 2-3 instruksi berurutan, atau instruksi dengan "Simon says".' },
              },
            },
            { tipe: 'diferensiasi',  sudah: 'Minta siswa beri instruksi dua langkah atau instruksi dengan "Simon says".', belum: 'Bimbing siswa dengan memberikan instruksi satu per satu yang sudah dikenal.' },
            { tipe: 'darurat',       teks: 'Langsung ke latihan berpasangan — abaikan giliran siswa jadi pemimpin, minta siswa saling memberi instruksi ke teman sampingnya.' },
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            {
              tipe: 'instruksi',
              teks: 'Review cepat: ucapkan 5 instruksi tanpa kartu, siswa lakukan. [Ready? Fast!]',
              mode: {
                mudah: { bantuan: 'Ucapkan instruksi pelan dengan jeda untuk siswa merespons.' },
                normal: { bantuan: 'Ucapkan instruksi dengan tempo natural dan amati respons siswa.' },
                tantangan: { bantuan: 'Ucapkan instruksi dengan tempo cepat sebagai final challenge.' },
              },
            },
            {
              tipe: 'audio',
              teks: 'Well done! Now you know classroom instructions in English!',
              mode: {
                mudah: { bantuan: 'Ucapkan dengan pujian hangat dan ramah.' },
                normal: { bantuan: 'Ucapkan dengan intonasi yang merefleksikan pencapaian siswa.' },
                tantangan: { bantuan: 'Tambahkan "Let\'s try harder next time!" untuk motivasi.' },
              },
            },
            {
              tipe: 'audio',
              teks: 'Goodbye, everyone! See you next time!',
              mode: {
                mudah: { bantuan: 'Ucapkan pelan dan ramah sambil membuat gesture goodbye.' },
                normal: { bantuan: 'Ucapkan dengan intonasi perpisahan yang natural.' },
                tantangan: { bantuan: 'Minta siswa ulang dan tambahkan gesture group wave.' },
              },
            },
          ],
        },
      ],
    },

    // ─── TP 4 ───────────────────────────────────────────────────────────────
    {
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
              'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'how many'],
      persiapan: ['Kartu angka 1–20', 'Benda untuk dihitung (buku, pensil, dll)'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello everyone! Today we learn numbers in English. Let us count together!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
            { tipe: 'audio',     teks: 'One, two, three, four, five, six, seven, eight, nine, ten!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
            { tipe: 'instruksi', teks: 'Siswa ikuti sambil tepuk tangan per angka. Dua putaran: normal, lalu cepat. [Clap and count!]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          ],
        },
        {
          fase  : 'Inti',
          durasi: 35,
          langkah: [
            { tipe: 'instruksi', teks: 'Tempel kartu 1–10 di papan. Tunjuk satu per satu, kelas ucapkan bersama. [What number is this? Say it!]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'audio',     teks: 'One. Two. Three. Four. Five. Six. Seven. Eight. Nine. Ten.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
            { tipe: 'instruksi', teks: 'Lanjut 11–20. Peringatkan: 11–19 itu sulit, tidak apa-apa kalau belum hafal hari ini. [These are tricky — just try your best!]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'audio',     teks: 'Eleven. Twelve. Thirteen. Fourteen. Fifteen. Sixteen. Seventeen. Eighteen. Nineteen. Twenty.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
            { tipe: 'instruksi', teks: 'Permainan: guru tunjuk angka di papan secara acak, siswa berlomba sebut. Siswa yang pertama benar angkat tangan. [Who is fastest?]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'instruksi', teks: 'Hitung benda nyata di kelas. [How many books on my desk? Let us count!] — hitung bersama.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'audio',     teks: 'How many? One, two, three... There are ten books!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tantang menghitung mundur 10–1. Belum bisa: fokus 1–10 dulu, 11–20 hanya diperkenalkan saja.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati permainan berlomba, langsung ke penutup hitung bersama.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 7,
          langkah: [
            { tipe: 'instruksi', teks: 'Hitung mundur bersama-sama: 10 ke 1. Siswa berdiri, satu per angka duduk. [When I say your number, sit down!]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'audio',     teks: 'Ten, nine, eight, seven, six, five, four, three, two, one. Blast off!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
            { tipe: 'audio',     teks: 'Great work today! You can count to twenty in English!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          ],
        },
      ],
    },

    // ─── TP 5 ───────────────────────────────────────────────────────────────
    {
      id       : 'tp-05',
      nomor    : 5,
      kelas    : 1,
      nama     : 'Colours',
      tema     : 'Dunia di Sekitar Kita',
      deskripsi: `Peserta didik mengenal dan menggunakan nama-nama warna dalam
        bahasa Inggris. Warna diintegrasikan dengan benda-benda di lingkungan
        kelas dan kehidupan sehari-hari.`,
      indikator: [
        'Peserta didik dapat menyebut nama 8 warna dasar (red, blue, green, yellow, orange, purple, black, white) dengan lafal yang benar.',
        'Peserta didik dapat mendeskripsikan warna benda menggunakan struktur "The ... is ..." atau "It is ..." dalam aktivitas show and tell.',
        'Peserta didik dapat merespons pertanyaan "What colour is it?" dan "What is your favourite colour?" dengan kalimat lengkap.',
      ],
      vocab: ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink',
              'black', 'white', 'brown', 'colour', 'favourite', 'what colour'],
      persiapan: ['Kartu warna 8 warna dasar', 'Benda berwarna dari kelas/tas siswa'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Today is a colourful day! Let us learn colours in English!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
            { tipe: 'instruksi', teks: 'Tunjukkan kartu warna satu per satu — hanya tunjuk, jangan sebut dulu. Tanya siswa. [What colour is this? Do you know?]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'audio',     teks: 'Red. Blue. Green. Yellow. Orange. Purple. Black. White.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Tempel kartu di papan. Tunjuk, siswa ucapkan bersama. Ulangi 2× per warna. [Say it together!]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'audio',     teks: 'What colour is this? It is red! What colour is this? It is blue!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
            { tipe: 'instruksi', teks: 'Permainan sentuh warna: guru sebut warna, siswa berlari sentuh benda berwarna itu di kelas. [Touch something red — go!]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'instruksi', teks: 'Show and tell: setiap siswa ambil satu benda dari tas, tunjukkan ke kelas, sebut warnanya. [What do you have? What colour is it?]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'audio',     teks: 'This is my pencil. It is yellow. This is my book. It is blue.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
            { tipe: 'instruksi', teks: 'Tanya warna favorit ke 5–6 siswa. [What is your favourite colour?] — bantu dengan menunjuk kartu jika siswa lupa kata.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'audio',     teks: 'What is your favourite colour? My favourite colour is red!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: deskripsikan dengan kalimat lengkap "My bag is blue and green". Belum bisa: cukup satu kata warna saja.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati show and tell, langsung ke nyanyian penutup.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Nyanyikan "I Can Sing a Rainbow" bersama. Guru nyanyi dulu, siswa ikuti di putaran kedua. [Sing with me!]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'audio',     teks: 'Red and yellow and pink and green, orange and purple and blue. I can sing a rainbow, sing a rainbow, sing a rainbow too!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
            { tipe: 'audio',     teks: 'Wonderful! You know your colours in English now!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          ],
        },
      ],
    },

    // ─── TP 6 ───────────────────────────────────────────────────────────────
    {
      id       : 'tp-06',
      nomor    : 6,
      kelas    : 1,
      nama     : 'Shapes',
      tema     : 'Dunia di Sekitar Kita',
      deskripsi: `Peserta didik mengenal bentuk geometri dasar dalam bahasa Inggris
        dan menghubungkannya dengan benda-benda nyata di sekitar mereka.`,
      indikator: [
        'Peserta didik dapat menyebut nama bentuk dasar (circle, square, triangle, rectangle, star, heart) dengan lafal yang benar.',
        'Peserta didik dapat mengidentifikasi bentuk dalam gambar dan benda nyata serta menyatakan "This is a ..." atau "I see a ...".',
        'Peserta didik dapat mendeskripsikan benda menggunakan kombinasi warna dan bentuk: "The circle is red", "I have a blue square".',
      ],
      vocab: ['circle', 'square', 'triangle', 'rectangle', 'star', 'heart',
              'diamond', 'oval', 'shape', 'this is', 'I see'],
      persiapan: ['Kartu bentuk berwarna', 'Gunting + kertas warna (opsional)'],
      skenario: [
        {
          fase  : 'Pembuka',
          durasi: 10,
          langkah: [
            { tipe: 'audio',     teks: 'Hello class! Can you see shapes around you? Look around! What do you see?' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
            { tipe: 'instruksi', teks: 'Tunjuk benda di kelas — pintu (rectangle), jam (circle), papan tulis (rectangle). Tanya siswa bentuknya apa.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'audio',     teks: 'What shape is the door? What shape is the clock?' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          ],
        },
        {
          fase  : 'Inti',
          durasi: 30,
          langkah: [
            { tipe: 'instruksi', teks: 'Tempel kartu bentuk di papan. Tunjuk, ucapkan bersama. [What shape is this? Circle!]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'audio',     teks: 'Circle. Square. Triangle. Rectangle. Star. Heart.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
            { tipe: 'instruksi', teks: 'Permainan tebak bentuk: guru gambar bentuk perlahan di papan (satu garis per detik), siswa tebak sebelum selesai. [What is it?]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'instruksi', teks: 'Gabungkan warna + bentuk. Guru tunjuk kartu, siswa buat kalimat. [The circle is red! The square is blue!]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'audio',     teks: 'I see a red circle. I see a blue square. I see a yellow triangle.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
            { tipe: 'instruksi', teks: 'Siswa cari 3 benda berbentuk dari tas/kelas mereka, sebut ke teman. [What shape is your eraser?]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: buat kalimat gabungan warna + bentuk + benda "My red eraser is a rectangle". Belum bisa: cukup sebut nama bentuk saja.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati aktivitas mencari benda, langsung review 5 bentuk di penutup.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          ],
        },
        {
          fase  : 'Penutup',
          durasi: 10,
          langkah: [
            { tipe: 'instruksi', teks: 'Guru tunjuk benda di kelas — siswa sebut bentuknya. Cepat dan bergantian.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
            { tipe: 'audio',     teks: 'Excellent! You can name shapes in English!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
            { tipe: 'audio',     teks: 'Goodbye everyone! See you next time!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          ],
        },
      ],
    },

    // ─── TP 7–17: placeholder — belum direvisi ke v3 ─────────────────────────
    // Format masih v2, akan direvisi bertahap.
    // TP 7 ────────────────────────────────────────────────────────────────────
    {
      id: 'tp-07', nomor: 7, kelas: 1,
      nama: 'My Family', tema: 'Keluarga dan Rumah',
      deskripsi: 'Peserta didik mengenal anggota keluarga inti dan memperkenalkan keluarga menggunakan struktur sederhana.',
      indikator: [
        'Peserta didik dapat menyebut anggota keluarga inti (mother, father, sister, brother, grandmother, grandfather) dengan lafal yang benar.',
        'Peserta didik dapat mendeskripsikan anggota keluarga menggunakan "This is my ..." dalam konteks foto atau gambar.',
        'Peserta didik dapat memperkenalkan keluarga inti dalam 3–4 kalimat sederhana.',
      ],
      vocab: ['mother', 'father', 'sister', 'brother', 'grandmother', 'grandfather', 'family', 'this is my'],
      persiapan: ['Gambar keluarga dari majalah/buku', 'Foto keluarga guru (opsional)'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Hello everyone! Today we talk about family. Do you love your family?' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Tunjukkan foto/gambar keluarga guru. Perkenalkan satu per satu sebagai model. [This is my mother. This is my father.]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'This is my family. This is my mother. This is my father. I love my family!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},
        { fase: 'Inti', durasi: 35, langkah: [
          { tipe: 'instruksi', teks: 'Tempel kartu gambar anggota keluarga di papan. Tunjuk satu per satu, kelas ucapkan bersama.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Mother. Father. Sister. Brother. Grandmother. Grandfather.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Siswa ambil gambar keluarga yang sudah disiapkan. Ceritakan ke teman di sampingnya. [Tell your friend about your family!]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'This is my mother. She is kind. This is my brother. He is funny!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Tanya 3–4 siswa maju, ceritakan keluarga mereka ke kelas.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambahkan sifat (kind, funny, tall, smart). Belum bisa: cukup "This is my ..." saja.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati presentasi ke kelas, cukup latihan berpasangan.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
        ]},
        { fase: 'Penutup', durasi: 7, langkah: [
          { tipe: 'instruksi', teks: 'Tanya beberapa siswa: siapa anggota keluarga favorit mereka dan kenapa?' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'I love my family so much! Goodbye everyone!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},

    // TP 8 ────────────────────────────────────────────────────────────────────
    {
      id: 'tp-08', nomor: 8, kelas: 1,
      nama: 'My House', tema: 'Keluarga dan Rumah',
      deskripsi: 'Peserta didik mengenal ruangan dan benda-benda dalam rumah menggunakan bahasa Inggris.',
      indikator: [
        'Peserta didik dapat menyebut nama ruangan utama (bedroom, kitchen, bathroom, living room) dengan lafal yang benar.',
        'Peserta didik dapat menyebut benda-benda umum dalam setiap ruangan menggunakan "There is a ... in the ...".',
        'Peserta didik dapat mendeskripsikan rumah mereka dalam 3–4 kalimat sederhana.',
      ],
      vocab: ['bedroom', 'kitchen', 'bathroom', 'living room', 'bed', 'table', 'chair', 'sofa', 'there is', 'in the'],
      persiapan: ['Gambar denah rumah sederhana', 'Kartu nama ruangan'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Hello class! Let us talk about our homes today! What rooms do you have at home?' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Gambar denah rumah sederhana di papan: 4 kotak berlabel. Tanya siswa ruangan mana yang mereka punya.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Bedroom. Kitchen. Bathroom. Living room.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},
        { fase: 'Inti', durasi: 35, langkah: [
          { tipe: 'instruksi', teks: 'Tunjuk setiap ruangan di gambar, ucapkan bersama. Tanya benda apa yang ada di sana.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'In the bedroom, there is a bed. In the kitchen, there is a table.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Siswa gambar rumah mereka sendiri — 4 kotak, tulis nama ruangan. Bantu yang kesulitan menulis.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'Pasangkan siswa. Ceritakan rumah mereka ke teman. [Tell your friend about your house!]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'My house has a bedroom, a kitchen, and a bathroom. In my bedroom, there is a bed.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambahkan 2 benda per ruangan. Belum bisa: cukup sebut nama ruangan saja.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: skip menggambar, langsung latihan lisan berpasangan.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
        ]},
        { fase: 'Penutup', durasi: 7, langkah: [
          { tipe: 'instruksi', teks: 'Tanya 3 siswa: ruangan favorit mereka di rumah dan alasannya.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Wonderful! You can talk about your house in English!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},

    // TP 9 ────────────────────────────────────────────────────────────────────
    {
      id: 'tp-09', nomor: 9, kelas: 1,
      nama: 'Animals', tema: 'Alam dan Lingkungan',
      deskripsi: 'Peserta didik mengenal nama hewan umum dan suara yang mereka hasilkan.',
      indikator: [
        'Peserta didik dapat menyebut nama 10 hewan umum (cat, dog, bird, fish, rabbit, cow, chicken, elephant, monkey, snake) dengan lafal yang benar.',
        'Peserta didik dapat mendeskripsikan hewan menggunakan "A ... can ..." dan "A ... has ...".',
        'Peserta didik dapat mengidentifikasi hewan berdasarkan deskripsi sederhana yang diucapkan guru.',
      ],
      vocab: ['cat', 'dog', 'bird', 'fish', 'rabbit', 'cow', 'chicken', 'elephant', 'monkey', 'snake', 'can', 'has'],
      persiapan: ['Kartu gambar hewan', 'Poster hewan'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Hello everyone! Do you like animals? What is your favourite animal?' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Tiru suara hewan tanpa memperlihatkan kartu. Siswa tebak hewannya. [What animal is this? Listen!]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Meow! Woof! Moo! Cluck cluck!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},
        { fase: 'Inti', durasi: 35, langkah: [
          { tipe: 'instruksi', teks: 'Tempel kartu hewan di papan satu per satu. Ucapkan bersama + tiru suaranya.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Cat. Dog. Bird. Fish. Rabbit. Cow. Chicken. Elephant. Monkey. Snake.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Ajarkan struktur deskripsi. Tulis di papan: "A cat can meow. A cat has four legs."' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'A dog can run. A bird can fly. An elephant has a long nose.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Tebak hewan: guru beri 2 petunjuk, siswa tebak. [It can fly. It has two wings. What is it?]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'Siswa buat teka-teki hewan sendiri dalam pasangan.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: buat 3 kalimat deskripsi per hewan. Belum bisa: cukup sebut nama + satu suara hewan.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati teka-teki siswa, langsung review nama hewan di penutup.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
        ]},
        { fase: 'Penutup', durasi: 7, langkah: [
          { tipe: 'instruksi', teks: 'Guru tunjuk kartu hewan — siswa sebut nama + suaranya bersamaan.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Fantastic! You know so many animals in English!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},

    // TP 10 ───────────────────────────────────────────────────────────────────
    {
      id: 'tp-10', nomor: 10, kelas: 2,
      nama: 'Food and Drinks', tema: 'Kehidupan Sehari-hari',
      deskripsi: 'Peserta didik mengenal makanan dan minuman dalam bahasa Inggris dan mengungkapkan preferensi makanan.',
      indikator: [
        'Peserta didik dapat menyebut nama 10 makanan dan minuman umum dengan lafal yang benar.',
        'Peserta didik dapat mengungkapkan preferensi menggunakan "I like ..." dan "I do not like ..." dengan alasan sederhana.',
        'Peserta didik dapat menanyakan dan merespons preferensi makanan: "Do you like ...? Yes, I do / No, I do not."',
      ],
      vocab: ['rice', 'noodles', 'bread', 'egg', 'chicken', 'fish', 'milk', 'water', 'juice', 'like', 'do not like'],
      persiapan: ['Kartu gambar makanan/minuman', 'Gambar piring kosong'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Good morning! Are you hungry? What did you eat for breakfast today?' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Guru ceritakan sarapan hari ini sebagai model. [This morning I ate rice and egg. I love rice!]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'I ate rice for breakfast. Rice is delicious! What about you?' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},
        { fase: 'Inti', durasi: 35, langkah: [
          { tipe: 'instruksi', teks: 'Tempel kartu makanan/minuman di papan. Ucapkan bersama.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Rice. Noodles. Bread. Egg. Chicken. Fish. Milk. Water. Juice.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Ajarkan "I like" dan "I do not like". Guru contohkan dengan ekspresi wajah.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'I like rice! I do not like... hmm... I do not like very spicy food!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Siswa isi "piring kosong" mereka — gambar/tulis 3 makanan yang mereka suka.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Do you like rice? Yes, I do! Do you like bread? No, I do not.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Survei kelas: angkat tangan siapa yang suka nasi? Susu? Hitung bersama.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambahkan alasan "because it is delicious / healthy". Belum bisa: cukup "I like ..." tanpa alasan.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati survei, langsung ke penutup.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
        ]},
        { fase: 'Penutup', durasi: 7, langkah: [
          { tipe: 'instruksi', teks: 'Tanya 3 siswa: makanan favorit mereka dan kenapa.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Delicious! You can talk about food in English now!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},

    // TP 11 ───────────────────────────────────────────────────────────────────
    {
      id: 'tp-11', nomor: 11, kelas: 2,
      nama: 'Daily Routines', tema: 'Kehidupan Sehari-hari',
      deskripsi: 'Peserta didik mengenal dan mengungkapkan kegiatan rutin sehari-hari menggunakan kalimat sederhana.',
      indikator: [
        'Peserta didik dapat menyebut kegiatan rutin harian (wake up, brush teeth, eat breakfast, go to school, study, sleep) dengan lafal yang benar.',
        'Peserta didik dapat mengungkapkan urutan kegiatan menggunakan "first, then, after that" dalam 3–4 kalimat.',
        'Peserta didik dapat menanyakan dan merespons "What do you do every day?" dengan kalimat rutin lengkap.',
      ],
      vocab: ['wake up', 'brush teeth', 'eat breakfast', 'go to school', 'study', 'play', 'eat dinner', 'sleep', 'every day', 'first', 'then'],
      persiapan: ['Kartu gambar kegiatan rutin', 'Kartu urutan (first/then/after that)'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Good morning! What did you do before coming to school today?' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Guru ceritakan rutinitas pagi sambil peragakan gerakan. [First I wake up. Then I brush my teeth. Then I eat breakfast!]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Every morning, I wake up, brush my teeth, and eat breakfast. Then I go to school!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},
        { fase: 'Inti', durasi: 35, langkah: [
          { tipe: 'instruksi', teks: 'Tempel kartu kegiatan rutin di papan berurutan. Ucapkan + peragakan bersama.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Wake up. Brush teeth. Eat breakfast. Go to school. Study. Play. Eat dinner. Sleep.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Ajarkan kata urutan. Tulis di papan: First ... Then ... After that ...' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'First, I wake up. Then, I brush my teeth. After that, I eat breakfast.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Siswa susun kartu kegiatan dalam urutan rutinitas mereka sendiri.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'Pasangkan siswa — ceritakan rutinitas pagi masing-masing.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: tambahkan waktu "At 6 o\'clock, I wake up". Belum bisa: cukup 3 kegiatan dengan "first" dan "then".' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati presentasi berpasangan, langsung penutup.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
        ]},
        { fase: 'Penutup', durasi: 7, langkah: [
          { tipe: 'instruksi', teks: 'Tanya 3 siswa: kegiatan pertama yang mereka lakukan setiap pagi.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Great! You can talk about your daily routine in English!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},

    // TP 12 ───────────────────────────────────────────────────────────────────
    {
      id: 'tp-12', nomor: 12, kelas: 2,
      nama: 'Body Parts', tema: 'Tubuh dan Kesehatan',
      deskripsi: 'Peserta didik mengenal nama anggota tubuh dan menggunakannya dalam konteks deskripsi dan lagu.',
      indikator: [
        'Peserta didik dapat menyebut nama anggota tubuh utama (head, eyes, ears, nose, mouth, hands, legs, feet) dengan lafal yang benar.',
        'Peserta didik dapat mendeskripsikan fungsi anggota tubuh menggunakan "I use my ... to ...".',
        'Peserta didik dapat merespons instruksi "touch your ..." dengan tindakan yang tepat.',
      ],
      vocab: ['head', 'eyes', 'ears', 'nose', 'mouth', 'hands', 'legs', 'feet', 'touch', 'I use my', 'to see', 'to hear'],
      persiapan: ['Poster tubuh manusia', 'Kartu nama anggota tubuh'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Hello class! Let us sing! Head, shoulders, knees and toes!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Nyanyikan Head Shoulders Knees and Toes sambil sentuh bagian tubuh. Ulangi 2× — makin cepat di putaran kedua.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Head, shoulders, knees and toes, knees and toes! Eyes and ears and mouth and nose!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},
        { fase: 'Inti', durasi: 30, langkah: [
          { tipe: 'instruksi', teks: 'Tunjuk poster tubuh. Sebut nama anggota tubuh, siswa sentuh bagian tubuh mereka sendiri.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Touch your head! Touch your nose! Touch your ears! Touch your eyes!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Ajarkan fungsi: "I use my eyes to see. I use my ears to hear." Tanya siswa secara bergantian.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'I use my eyes to see. I use my ears to hear. I use my mouth to speak. I use my hands to write.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Permainan: guru sebut fungsi, siswa sentuh anggota tubuh yang tepat. [I use this to smell — touch it!]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: buat kalimat fungsi sendiri tanpa bantuan. Belum bisa: cukup sentuh saat nama disebutkan.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: langsung ke lagu penutup, skip permainan fungsi.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
        ]},
        { fase: 'Penutup', durasi: 10, langkah: [
          { tipe: 'instruksi', teks: 'Nyanyikan Head Shoulders Knees and Toes sekali lagi — kali ini sekencang mungkin.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Wonderful! You know your body parts in English!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},

    // TP 13 ───────────────────────────────────────────────────────────────────
    {
      id: 'tp-13', nomor: 13, kelas: 2,
      nama: 'Weather and Seasons', tema: 'Alam dan Lingkungan',
      deskripsi: 'Peserta didik mengenal kondisi cuaca dan musim dalam bahasa Inggris serta menghubungkannya dengan aktivitas sehari-hari.',
      indikator: [
        'Peserta didik dapat menyebut kondisi cuaca (sunny, cloudy, rainy, windy, hot, cold) dengan lafal yang benar.',
        'Peserta didik dapat mendeskripsikan cuaca hari ini menggunakan "Today is ..." dan "The weather is ...".',
        'Peserta didik dapat menghubungkan cuaca dengan aktivitas: "When it is rainy, I use an umbrella."',
      ],
      vocab: ['sunny', 'cloudy', 'rainy', 'windy', 'hot', 'cold', 'weather', 'today', 'umbrella', 'when it is'],
      persiapan: ['Kartu gambar cuaca', 'Kalender cuaca kelas (opsional)'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Good morning! Look outside the window. What is the weather like today?' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Ajak siswa lihat ke jendela. Tanya mereka mendeskripsikan cuaca hari ini.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Is it sunny today? Or is it cloudy? What do you think?' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},
        { fase: 'Inti', durasi: 35, langkah: [
          { tipe: 'instruksi', teks: 'Tempel kartu cuaca di papan. Ucapkan + peragakan gerakan (mengipas jika hot, peluk diri jika cold).' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Sunny. Cloudy. Rainy. Windy. Hot. Cold.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Ajarkan "Today is ..." dan "The weather is ...". Siswa deskripsikan cuaca hari ini bersama.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Today is Monday. The weather is sunny. It is hot!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Hubungkan cuaca dengan aktivitas. [When it is rainy, what do you bring?]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'When it is rainy, I use an umbrella. When it is sunny, I wear a hat.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Siswa gambar cuaca favorit + 1 aktivitas yang mereka lakukan saat cuaca itu.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: buat 3 kalimat cuaca + aktivitas. Belum bisa: cukup sebut nama cuaca + benda yang dipakai.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: lewati menggambar, langsung tanya-jawab cuaca.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
        ]},
        { fase: 'Penutup', durasi: 7, langkah: [
          { tipe: 'instruksi', teks: 'Tanya siswa: cuaca favorit mereka dan mengapa.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Great! Now you can talk about the weather in English!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},

    // TP 14 ───────────────────────────────────────────────────────────────────
    {
      id: 'tp-14', nomor: 14, kelas: 2,
      nama: 'In the Classroom', tema: 'Sekolah dan Benda-benda',
      deskripsi: 'Peserta didik mengenal nama benda-benda di kelas dan menggunakannya dalam percakapan.',
      indikator: [
        'Peserta didik dapat menyebut benda-benda kelas (book, pen, pencil, eraser, ruler, bag, table, chair, whiteboard) dengan lafal yang benar.',
        'Peserta didik dapat mendeskripsikan lokasi benda menggunakan preposisi sederhana (on, in, under, next to).',
        'Peserta didik dapat meminjam benda menggunakan ekspresi "Can I borrow your ...? Sure! / Sorry, I am using it."',
      ],
      vocab: ['book', 'pen', 'pencil', 'eraser', 'ruler', 'bag', 'whiteboard', 'on', 'in', 'under', 'next to', 'can I borrow'],
      persiapan: ['Benda nyata dari kelas', 'Kartu preposisi bergambar'],
      skenario: [
        { fase: 'Pembuka', durasi: 10, langkah: [
          { tipe: 'audio',     teks: 'Good morning! Look around. What do you see in this classroom? Name it in English!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Guru tunjuk benda di kelas secara acak — siswa tebak nama Inggrisnya.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'What is this? Is it a book? Is it a pen? What do you call this in English?' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},
        { fase: 'Inti', durasi: 30, langkah: [
          { tipe: 'instruksi', teks: 'Angkat setiap benda satu per satu. Ucapkan bersama.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Book. Pen. Pencil. Eraser. Ruler. Bag. Whiteboard.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Ajarkan preposisi dengan benda nyata. Taruh buku di atas meja, di dalam tas, di bawah kursi.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'The book is on the table. The pen is in the bag. The eraser is under the chair.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'Permainan: guru sembunyikan benda, siswa tebak lokasinya. [Where is the eraser? Is it on the table?]' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'Roleplay meminjam benda — latih dalam pasangan.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Can I borrow your pencil? Sure! Here you go. Thank you! You are welcome.' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
          { tipe: 'instruksi', teks: 'DIFERENSIASI — Sudah bisa: buat kalimat 2 preposisi "The book is on the table next to my bag". Belum bisa: cukup 1 preposisi per kalimat.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'instruksi', teks: 'JIKA WAKTU TERSISA ≤10 MENIT: skip roleplay, langsung review nama benda.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
        ]},
        { fase: 'Penutup', durasi: 10, langkah: [
          { tipe: 'instruksi', teks: 'Guru taruh benda di posisi tertentu. Siswa buat kalimat preposisi.' ,
  mode: {
    mudah: { bantuan: 'Gunakan model guru dan contoh visual. Bantu siswa ulang kata/aksi.' },
    normal: { bantuan: 'Instruksi jelas, minta siswa praktek berulang secara berkelompok.' },
    tantangan: { bantuan: 'Tantang siswa memimpin atau elaborasi jawaban lebih panjang.' },
  }},
          { tipe: 'audio',     teks: 'Excellent! You can talk about things in your classroom!' ,
  mode: {
    mudah: { bantuan: 'Ucapkan pelan dengan gesture; siswa cukup dengarkan atau ulang pendek.' },
    normal: { bantuan: 'Ucapkan natural dan beri waktu untuk siswa mengulang jawaban.' },
    tantangan: { bantuan: 'Ucapkan cepat/variasi intonasi untuk challenge listening.' },
  }},
        ]},

    TP_15,

    TP_16,

    TP_17,

    TP_18,

  ],

};

(function validateFaseA() {
  const { tujuan_pembelajaran: tps, meta } = FASE_A;
  if (!Array.isArray(tps)) throw new Error('[FLAF] fase-a.js: tujuan_pembelajaran harus berupa array');
  if (tps.length !== meta.total_tp) throw new Error(`[FLAF] fase-a.js: jumlah TP harus ${meta.total_tp}, ditemukan ${tps.length}`);
  tps.forEach((tp, i) => {
    const num = i + 1;
    if (!tp.id)        throw new Error(`[FLAF] fase-a.js: TP ${num} tidak punya id`);
    if (!tp.nama)      throw new Error(`[FLAF] fase-a.js: TP ${num} tidak punya nama`);
    if (!Array.isArray(tp.indikator) || tp.indikator.length !== 3)
      throw new Error(`[FLAF] fase-a.js: TP ${num} harus punya tepat 3 indikator`);
    if (!Array.isArray(tp.vocab) || tp.vocab.length === 0)
      throw new Error(`[FLAF] fase-a.js: TP ${num} vocab tidak boleh kosong`);
    if (!Array.isArray(tp.skenario) || tp.skenario.length === 0)
      throw new Error(`[FLAF] fase-a.js: TP ${num} skenario tidak boleh kosong`);
  });
})();

export default FASE_A;
