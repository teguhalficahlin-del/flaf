# Laporan Perbaikan SIS-3 — Tahap 2 (fix2): preOpening.cue + Pembersihan langkah.teks (TP07–TP11)

**Tugas tahap 2:**
1. (TP08–TP11) Pulihkan `preOpening.cue` yang terpotong dari TXT.
2. (TP07–TP11) Hapus fragmen menggantung di `langkah.teks` (ekor cue/bantuan yang bocor & kini ganda).
3. (TP07 L2) Perbaiki inversi makna pada `langkah.teks`.
4. (TP10 L12) Pastikan `bantuan` sudah versi TXT lengkap (bukan ringkas).

**Sumber kebenaran:** `docs/skenario/flaf-skenario-tp{07..11}-v2.txt`
**File hasil (diedit langsung, asli `-fixed.js` tidak ditimpa):** `docs/output-v5/tp-07-v5-fixed2.js … tp-11-v5-fixed2.js`

## Ringkasan & Verifikasi

| TP | preOpening.cue dipulihkan | langkah.teks dibersihkan | Catatan |
|----|---------------------------|--------------------------|---------|
| 07 | — (di luar lingkup tahap ini) | 10 langkah | termasuk perbaikan inversi L2 |
| 08 | ✅ | 10 langkah (11 penghapusan; L11 ada 3 ekor) | |
| 09 | ✅ | 12 langkah | |
| 10 | ✅ | 12 langkah | L12 bantuan sudah lengkap (diverifikasi, tanpa ubah) |
| 11 | ✅ | 12 langkah | |

Verifikasi otomatis (terhadap `-fixed.js`):
- `git diff --numstat`: TP07 10/10 · TP08 12/12 · TP09 13/14 · TP10 12/13 · TP11 13/14 (deleted > added pada TP09/10/11 karena penghapusan fragmen 1-baris-penuh di teks multi-baris).
- **Tidak ada field-label selain `teks`/`cue` yang berubah** (cek diff dengan pola berjangkar `^[+-]\s*(bantuan|darurat|energi|tipe|...)` → kosong).
- Perubahan `cue`: TP07=0, TP08–11=1 masing-masing (**hanya preOpening.cue**).
- Kelima file valid sebagai ES module (di-`import` Node berhasil; `export default` utuh).

## Catatan Penting (di luar lingkup — sengaja TIDAK diubah)

1. **`preOpening.teks` tetap memuat ekor ganda.** Lingkup hanya `langkah.teks` + `preOpening.cue`.
   Setelah `preOpening.cue` dipulihkan, ekornya yang dulu bocor masih ada di `preOpening.teks`
   (TP08: "dijaga dari sini." · TP09: "perhatian kelas sebelum masuk sesi." · TP10: "mengunci
   perhatian kelas sebelum masuk sesi." · TP11: "ulangi ... berdiri diam."). Perlu sesi terpisah.
2. **Artefak `UCAP: UCAP:` ganda tetap ada** (TP10 L1/L3/L6/L11; TP11 L1). Ini bukan "fragmen
   menggantung" melainkan duplikasi label — di luar definisi tugas. Perlu sesi terpisah.
3. **TP07 L2 — inversi sudah benar di `langkah.teks`:** fragmen `AKSI: Beri tekanan intonasi besar
   pada kalimat ini.` dihapus seluruhnya (TXT tidak memuat instruksi ini di teks). Makna yang benar
   ("ucapkan hangat, **tidak perlu** tekanan intonasi besar") sudah berada di `langkah.cue` L2
   (dipulihkan pada tahap fix sebelumnya).
4. **TP10 L12 `bantuan`** sudah versi TXT lengkap sejak tahap fix sebelumnya
   (`Terima: kalimat penuh, kata saja ("like apple"), atau lingkaran di piring dengan jempol naik/turun. Tidak ada koreksi terbuka.`)
   — diverifikasi, tidak diubah.

---

## TP-07 (My Family) — langkah.teks (10)

Format: **L{n}** — ekor dihapus → akhir teks menjadi.

- **L1** — hapus: `"That's okay — we will learn together." jawaban valid. Tujuan: membuka koneksi, bukan memeriksa struktur keluarga.` → `... → Terima semua jawaban. Angguk dan lanjut.`
- **L2** (inversi + ekor) — hapus: `AKSI: Beri tekanan intonasi besar pada kalimat ini. Dua kartu saja di Layar ini — jangan tempel dulu.` → `... UCAP: "This is my father." UCAP: "I love my family!"`
- **L3** — hapus: `UCAP: "Brother = boy." AKSI: Tunjuk kartu brother. Jangan minta echo serentak sebelum kelas mendengar semua 4 kata.` → `... 🗣 TOGETHER — Kelas echo satu per satu. Tunjuk kartu saat mengucapkan.`
- **L4** — hapus: `jangan skip. Discrimination check wajib sebelum masuk Layar 5.` → `... kelas sebutkan bersama 2 putaran.`
- **L5** — hapus: `jangan langsung tunjuk kartu.` → `... UCAP: "Fast!" — percepat 2–3 putaran terakhir.`
- **L7** — hapus: `bangun bertahap agar kelas merasakan strukturnya.` → `... 🗣 TOGETHER: "This is my father."`
- **L8** — hapus: `perpanjang demo — kelas perlu segera pegang kartu sendiri.` → `... ⚡ Tepuk-tepuk — selesai. Langsung lanjut.`
- **L9** — hapus: `siswa satunya meniru. Semua siswa pakai kartu printable dari guru — tidak perlu bawa foto dari rumah.` → `... Baru: "3… 2… 1… hands down."`
- **L11** — hapus (di tengah): `presentasi serentak.` → `... thumbs up for your friend!" ⚡ MICRO-RESET setelah presentasi terakhir: ...`
- **L12** — hapus: `Pause 2 detik antara retrieval dan sentence — jangan tergesa.` → `... → Siswa serentak — satu kartu yang sama.`

---

## TP-08 (My House) — preOpening.cue + langkah.teks (10 langkah)

**preOpening.cue**
- lama: `Jangan tunjukkan kartu denah sebelum Layar 2. Tone calm`
- baru: `Jangan tunjukkan kartu denah sebelum Layar 2. Tone calm dijaga dari sini. Jika kelas belum fokus: ulangi "Are you ready?" sambil berdiri diam.`

**langkah.teks** — ekor dihapus → akhir teks:
- **L1** — hapus: `Which one?" [tunjuk satu jari → jari lainnya] koneksi ke vocab, bukan memeriksa kondisi rumah. Jangan evaluasi besar/ kecilnya rumah.` → `... "Bedroom — yes!" "Kitchen — good!"`
- **L2** — hapus: `sesudah. Micro-pause antara bedroom/kitchen → bathroom/living room wajib.` → `... → Kelas menyimak dulu — belum diminta ulang.`
- **L3** — hapus: `"Bath-room. Bed-room. Different!" acak. Putaran pertama lambat — jangan langsung speed.` → `... ⚡ Putaran pertama lambat dulu — baru putaran kedua lebih cepat.`
- **L4** — hapus: `"Bath-room. Bed-room." → lanjut speed round. jangan langsung tunjuk kartu. Bedroom → bathroom → bedroom = wajib masuk sequence.` → `... ⚡ Sesekali tunjuk 1 siswa cepat — "What room?" — sampling individual.`
- **L6** — hapus: `dengan menyebut kata — bukan sesudah. Mini echo sekali saja per benda.` → `... 🗣 TOGETHER: "Shower."`
- **L7** — hapus: `ruangan kemudian. Kalimat terasa dibangun, bukan dihapalkan. Pause 2 detik antara model pertama dan kedua.` → `... 🗣 TOGETHER: "There is a table in the kitchen."`
- **L8** — hapus: `gesture selama volunteer bicara.` → `... ⚡ Tepuk-tepuk — selesai. Langsung lanjut.`
- **L9** — hapus: `→ tunggu 2–3 detik → siswa isi → guru lanjut jalan. bukan bersamaan. Acceptance rule berlaku — koreksi saat lewat, bukan berhenti.` → `... "3… 2… 1… hands down."`
- **L11** — hapus 3 ekor: `momentum tanpa buat siswa tertekan.` · `serentak.` · `Tunjuk langsung — jangan buka sesi tanya.` → `... → Siswa: "There is a bed in the bedroom." UCAP: "Thumbs up for your friend!"` … `... "Hands down. Take a breath. Sit nicely." — 5 detik.`
- **L12** — hapus: `Pause 2 detik antara retrieval dan sentence — jangan tergesa.` → `... → Siswa serentak — satu kartu yang sama.`

---

## TP-09 (Animals) — preOpening.cue + langkah.teks (12)

**preOpening.cue**
- lama: `Layar ini pendek dan wajib. Jangan skip. Fungsinya mengunci`
- baru: `Layar ini pendek dan wajib. Jangan skip. Fungsinya mengunci perhatian kelas sebelum masuk sesi. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.`

**langkah.teks** — ekor dihapus → akhir teks:
- **L1** — hapus: `sendiri dan lanjut.` → `... UCAP: "Frog! Today — animals. Let's go."`
- **L2** — hapus: `kata lain selain nama hewan.` (baris penuh) → `... AKSI: Lakukan gestur telinga panjang.`
- **L3** — hapus: `ulangi kartu itu sekali. Jangan buka diskusi "ikan bunyinya apa."` → `... AKSI: Ulangi urutan sekali lagi, acak 2 kartu.`
- **L4** — hapus: `terpisah. Jangan lanjut sebelum guru sendiri sudah ucapkan 2x.` → `... → Ulang kelima nama + suara sekali.`
- **L5** — hapus: `kartu itu, ulangi 2x, lanjut. Energi naik = akurasi turun.` → `... → Tahan 1 detik sebelum menunjuk kartu berikutnya.`
- **L6** — hapus: `= Layar 7 gagal.` → `... "Sit up. Ready."`
- **L7** — hapus: `hewan, bukan semua 10.` → `... "Listen one more time." — ulangi ketiga kalimat.`
- **L8** — hapus: `"Repeat after me." after me — bukan produksi mandiri.` → `... → "A snake can hiss. Say it." → kelas ulang.`
- **L9** — hapus: `tidak perlu jelaskan grammar. Gestur harus dibesar-besarkan — terutama fins dan long nose.` → `... "A rabbit has…" → Kelas: "…long ears!"`
- **L10** — hapus: `Tidak hentikan kelas. Catat, model ulang saat lewat. Acceptance rule berlaku.` → `... AKSI: Tepuk 1 kali (lanjut).`
- **L11** — hapus: `ulangi 2x, lanjut.` → `... tahan 1 detik sebelum kartu berikutnya.`
- **L12** — hapus: `Tidak ada koreksi terbuka.` → `... UCAP: "Show me."`

---

## TP-10 (Food and Drinks) — preOpening.cue + langkah.teks (12)

**preOpening.cue**
- lama: `Layar ini pendek dan wajib. Jangan skip. Fungsinya`
- baru: `Layar ini pendek dan wajib. Jangan skip. Fungsinya mengunci perhatian kelas sebelum masuk sesi. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.`

**langkah.teks** — ekor dihapus → akhir teks:
- **L1** — hapus: `tunjuk — tidak dipaksa, tidak dikomentari. Jika kelas diam total saat ditanya sarapan: guru jawab sendiri 2x dengan makanan berbeda, lanjut.` → `... "I like rice — say it." → kelas ulang sekali.`
- **L2** — hapus: `ada kata lain selain nama makanan.` → `... UCAP: "Banana."`
- **L3** — hapus: `ulangi kartu itu sekali. "With feeling" = ekspresi wajah, bukan volume keras.` → `... → Tunjuk banana: kelas ucap "I like banana!"`
- **L4** — hapus: `Noodles." Juice — pastikan bunyi /dʒuːs/, bukan "jus".` → `... → ulang kelima nama sekali.`
- **L5** — hapus: `ulangi 2x, lanjut.` → `... → Tahan 1 detik sebelum menunjuk kartu berikutnya.`
- **L6** — hapus: `Layar 7 gagal.` → `... guru berdiri diam. "Sit up. Ready."`
- **L7** — hapus: `ekspresi suka dan tidak suka. Tiga contoh dulu, baru kelas produksi.` → `... "Listen one more time." — ulangi ketiga kalimat.`
- **L8** — hapus: `kartu sekaligus — "This one or this one?" — kelas pilih. "I don't like" sendiri untuk 1 kartu. Itu cukup untuk layar ini.` → `... → Kelas pilih sendiri dan ucapkan.`
- **L9** — hapus: `dialog → whole-class drill. Jangan lompat. Marker tubuh kiri/kanan harus konsisten sepanjang layar ini.` → `... → kelas: "No, I don't."`
- **L10** — hapus: `rice?" Tidak hentikan kelas. rule berlaku. Piring kosong adalah bahan bicara — bukan aktivitas utama.` → `... [Tepuk 1 kali — lanjut]`
- **L11** — hapus: `"many!" atau "only a few!" Fokus tetap di produksi oral, bukan numerasi.` → `... UCAP: "Wow, many people like rice! Interesting."`
- **L12** — hapus (baris penuh): `lingkaran di piring dengan jempol naik/turun. Tidak ada koreksi terbuka. siswa sendiri. Tidak diperluas.` → `... UCAP: "Show me."`

**L12 bantuan (TUGAS 3):** diverifikasi sudah lengkap sesuai TXT — tidak diubah.

---

## TP-11 (Daily Routines) — preOpening.cue + langkah.teks (12)

**preOpening.cue**
- lama: `Layar ini pendek dan wajib. Jika kelas belum fokus:`
- baru: `Layar ini pendek dan wajib. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.`

**langkah.teks** — ekor dihapus → akhir teks:
- **L1** — hapus: `tunjuk — tidak dipaksa, tidak dikomentari. saat ditanya: guru lanjut monolog + gestur, kelas ikut di akhir.` → `... → Kelas: "Wake up!" [gestur bersama]`
- **L2** — hapus: `"Brush teeth" bukan "brush — teeth." Gestur harus besar dan konsisten. Eat breakfast = gestur nguap dulu, baru makan — anchor pembeda dengan eat dinner.` → `... UCAP: "Go to school."`
- **L3** — hapus: `ulangi kartu itu sekali. gestur — kelas ikut. Jangan lepas gestur meski sudah putaran kedua.` → `... AKSI: Ulangi sekali lagi, acak 2 kartu.`
- **L4** — hapus: `baru makan / dinner: capek dulu baru makan. Contrast drill wajib dilakukan di sini — jangan skip.` → `... Ulangi 2 putaran — cepat.`
- **L5** — hapus: `tempo, ulangi 2 kartu, lanjut. Untuk frasa dua kata, clarity lebih penting dari speed. Guru ayun ritme natural — jangan penggal suku kata.` → `... → Tahan 1 detik sebelum menunjuk kartu berikutnya.`
- **L6** — hapus: `Layar 7 gagal.` → `... guru berdiri diam. "Sit up. Ready."`
- **L7** — hapus: `Dua pasang contoh — bukan satu. Guru tidak tanya kelas dulu di layar ini.` → `... "Listen one more time." — ulangi dua pasang kalimat.`
- **L8** — hapus: `tunjuk papan — "First, I…" — tunggu 2 detik, lanjut choral jika tidak ada respons. Partner practice nanti butuh produksi frame utuh — bukan hanya nama kegiatan. Tunjuk papan setiap kali kelas mulai drop "First/Then."` → `... kelas bentuk kalimat sendiri dengan "First" dan "Then."`
- **L9** — hapus: `Say: First, I wake up." Tidak hentikan kelas. Guru tidak koreksi grammar. Acceptance rule berlaku — fragment diterima, model ulang saat lewat.` → `... [Tepuk 1 kali — lanjut]`
- **L10** — hapus: `Ini menjaga "First/Then" tetap hidup sebelum closing. Tidak perlu semua 8 kartu — 2 contoh cukup.` → `... Cukup 2 kartu — tidak semua.`
- **L11** — hapus: `sebelum tanya kelas. Tidak diperluas.` → `... UCAP: "Interesting! Everyone has a routine."`
- **L12** — hapus (baris penuh): `breakfast"), atau gambar dengan urutan 1–2. Urutan berbeda dari rutinitas "benar" tetap diterima — target adalah struktur, bukan akurasi rutinitas. Tidak ada koreksi terbuka. "First … Then …". Tidak diperluas.` → `... UCAP: "Show me."`

---

— Selesai tahap fix2. Total: 4 `preOpening.cue` dipulihkan (TP08–11) + 56 `langkah.teks` dibersihkan (TP07–11) + 1 inversi makna diperbaiki (TP07 L2). File asli `-fixed.js` tidak diubah; perubahan ada di `-fixed2.js`.
