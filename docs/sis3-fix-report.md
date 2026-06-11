# Laporan Perbaikan SIS-3 — Pemulihan `cue`/`bantuan` (TP07–TP11)

**Tugas:** memulihkan field `langkah.cue` dan `langkah.bantuan` yang terpotong/tidak lengkap,
menggunakan teks lengkap dari TXT skenario sebagai sumber kebenaran.
**Sumber kebenaran:** `docs/skenario/flaf-skenario-tp{07..11}-v2.txt`
**File hasil (baru, asli tidak ditimpa):** `docs/output-v5/tp-07-v5-fixed.js … tp-11-v5-fixed.js`

## Ringkasan & Verifikasi

| TP | Field dipulihkan | Catatan |
|----|------------------|---------|
| 07 | 13 | termasuk L2 (gunakan makna TXT, lihat catatan penting) |
| 08 | 16 | termasuk L11 bantuan array (2 item) |
| 09 | 16 | |
| 10 | 17 | termasuk L12 bantuan (versi ringkas → lengkap TXT) |
| 11 | 18 | |
| **Total** | **80** | |

Verifikasi otomatis:
- Jumlah baris file asli = file `-fixed` (281/316/324/342/340) → **tidak ada perubahan struktur**.
- `git diff --numstat`: added == deleted == jumlah field per TP → **hanya penggantian nilai 1 baris**.
- Seluruh baris yang berubah adalah `cue`/`bantuan` (tidak ada `teks`/`darurat`/`energi`/`tipe` tersentuh).
- Kelima file `-fixed.js` **valid** sebagai ES module (di-`import` Node berhasil; `export default` utuh).
- Apostrof di-escape benar untuk string single-quote: `That\'s`, `don\'t`.

## Catatan Penting (di luar lingkup ubah-file)

1. **TP07 L2 — inversi makna:** field `cue` sudah dipulihkan ke versi TXT yang benar
   (`...ucapkan hangat, tidak perlu tekanan intonasi besar...`). **Namun** teks inversi
   `AKSI: Beri tekanan intonasi besar pada kalimat ini.` **masih ada di `langkah.teks` L2**
   karena `teks` di luar lingkup tugas. Perlu koreksi `teks` terpisah.
2. **Fragmen menggantung tetap di `teks`:** karena hanya `cue`/`bantuan` yang dipulihkan,
   ekor yang dulu "bocor" ke `teks` **tidak dihapus**. Akibatnya sebagian teks ekor kini
   muncul **dua kali** (di `cue`/`bantuan` yang sudah utuh dan di `teks`). Pembersihan `teks`
   adalah pekerjaan terpisah.
3. **`preOpening.cue` TIDAK diubah.** Aturan keras membatasi ke `langkah.cue`/`langkah.bantuan`;
   `preOpening.cue` bukan `langkah.cue`. Field ini terpotong di TP08, TP09, TP10, TP11 (dan
   tidak lengkap di TP07) menurut laporan SIS-3, tetapi **sengaja dilewati**. Beri tahu bila
   ingin `preOpening.cue` ikut dipulihkan.

---

## TP-07 (My Family) — 13 field

**L1 · cue**
- lama: `Jangan tunggu jawaban serentak. Pertanyaan ini terbuka — setiap`
- baru: `Jangan tunggu jawaban serentak. Pertanyaan ini terbuka — setiap jawaban valid. Tujuan: membuka koneksi, bukan memeriksa struktur keluarga.`

**L1 · bantuan**
- lama: `Jika ada siswa yang diam atau ekspresi tidak nyaman: jangan paksa.`
- baru: `Jika ada siswa yang diam atau ekspresi tidak nyaman: jangan paksa. "That's okay — we will learn together."`

**L2 · cue** ⚠ (gunakan makna TXT, bukan teks JS yang terinversi)
- lama: `Kalimat terakhir adalah emotional flavour — ucapkan hangat, tidak`
- baru: `Kalimat terakhir adalah emotional flavour — ucapkan hangat, tidak perlu tekanan intonasi besar. Dua kartu saja di Layar ini — jangan tempel dulu.`

**L3 · cue**
- lama: `Micro-freeze 3 detik antara mother/father → sister/brother wajib.`
- baru: `Micro-freeze 3 detik antara mother/father → sister/brother wajib. Jangan minta echo serentak sebelum kelas mendengar semua 4 kata.`

**L3 · bantuan**
- lama: `Sister/brother tertukar: "Sister = girl." [tunjuk kartu sister]`
- baru: `Sister/brother tertukar: "Sister = girl." [tunjuk kartu sister] "Brother = boy." [tunjuk kartu brother]`

**L4 · cue**
- lama: `Semi-echo "Grand—…" penting untuk grandmother/grandfather —`
- baru: `Semi-echo "Grand—…" penting untuk grandmother/grandfather — jangan skip. Discrimination check wajib sebelum masuk Layar 5.`

**L5 · cue**
- lama: `"Hands on knees. Eyes ready." sebelum speed round —`
- baru: `"Hands on knees. Eyes ready." sebelum speed round — jangan langsung tunjuk kartu.`

**L7 · cue**
- lama: `Vocab dulu → baru kalimat. Jangan langsung model kalimat penuh —`
- baru: `Vocab dulu → baru kalimat. Jangan langsung model kalimat penuh — bangun bertahap agar kelas merasakan strukturnya.`

**L8 · cue**
- lama: `Demo hanya tiga langkah: pegang → tunjuk → ucap. Jangan`
- baru: `Demo hanya tiga langkah: pegang → tunjuk → ucap. Jangan perpanjang demo — kelas perlu segera pegang kartu sendiri.`

**L9 · cue**
- lama: `Distribusi kartu diam dulu, instruksi belakangan — bukan bersamaan.`
- baru: `Distribusi kartu diam dulu, instruksi belakangan — bukan bersamaan. Semua siswa pakai kartu printable dari guru — tidak perlu bawa foto dari rumah.`

**L9 · bantuan**
- lama: `Pasangan diam: guru pegang kartu, model ke salah satu siswa →`
- baru: `Pasangan diam: guru pegang kartu, model ke salah satu siswa → siswa satunya meniru.`

**L11 · bantuan**
- lama: `Jika tidak ada yang mau maju: tunjuk dua siswa bersama —`
- baru: `Jika tidak ada yang mau maju: tunjuk dua siswa bersama — presentasi serentak.`

**L12 · cue**
- lama: `Satu kartu = output terkontrol. Tidak noisy, tidak pecah.`
- baru: `Satu kartu = output terkontrol. Tidak noisy, tidak pecah. Pause 2 detik antara retrieval dan sentence — jangan tergesa.`

> Tidak diubah (sudah cocok dengan TXT): L4 · bantuan, L5 · bantuan, L11 · cue.

---

## TP-08 (My House) — 16 field

**L1 · cue**
- lama: `Pertanyaan ini terbuka — setiap jawaban valid. Tujuannya`
- baru: `Pertanyaan ini terbuka — setiap jawaban valid. Tujuannya koneksi ke vocab, bukan memeriksa kondisi rumah. Jangan evaluasi besar/kecilnya rumah.`

**L1 · bantuan**
- lama: `Jika ada siswa yang diam atau bingung: "Bedroom? Kitchen?`
- baru: `Jika ada siswa yang diam atau bingung: "Bedroom? Kitchen? Which one?" [tunjuk satu jari → jari lainnya]`

**L2 · cue**
- lama: `Gesture "living room" dilakukan saat menyebut — bukan`
- baru: `Gesture "living room" dilakukan saat menyebut — bukan sesudah. Micro-pause antara bedroom/kitchen → bathroom/living room wajib.`

**L3 · cue**
- lama: `Contrast check bedroom vs bathroom wajib sebelum putaran`
- baru: `Contrast check bedroom vs bathroom wajib sebelum putaran acak. Putaran pertama lambat — jangan langsung speed.`

**L3 · bantuan**
- lama: `Bathroom/bedroom masih tertukar: tunjuk dua kartu berdampingan →`
- baru: `Bathroom/bedroom masih tertukar: tunjuk dua kartu berdampingan → "Bath-room. Bed-room. Different!"`

**L4 · cue**
- lama: `"Hands on knees. Eyes ready." sebelum speed round —`
- baru: `"Hands on knees. Eyes ready." sebelum speed round — jangan langsung tunjuk kartu. Bedroom → bathroom → bedroom = wajib masuk sequence.`

**L4 · bantuan**
- lama: `Jika masih tertukar: kembali ke contrast check sebentar →`
- baru: `Jika masih tertukar: kembali ke contrast check sebentar → "Bath-room. Bed-room." → lanjut speed round.`

**L6 · cue**
- lama: `Gesture untuk "sofa" dan "shower" dilakukan bersamaan`
- baru: `Gesture untuk "sofa" dan "shower" dilakukan bersamaan dengan menyebut kata — bukan sesudah. Mini echo sekali saja per benda.`

**L7 · cue**
- lama: `Chunking gesture wajib — tunjuk benda dulu, tunjuk`
- baru: `Chunking gesture wajib — tunjuk benda dulu, tunjuk ruangan kemudian. Kalimat terasa dibangun, bukan dihapalkan. Pause 2 detik antara model pertama dan kedua.`

**L8 · cue**
- lama: `Demo tiga langkah: pegang → tunjuk → ucap. Guru tetap`
- baru: `Demo tiga langkah: pegang → tunjuk → ucap. Guru tetap gesture selama volunteer bicara.`

**L9 · cue**
- lama: `Distribusi kartu diam dulu, instruksi belakangan —`
- baru: `Distribusi kartu diam dulu, instruksi belakangan — bukan bersamaan. Acceptance rule berlaku — koreksi saat lewat, bukan berhenti.`

**L9 · bantuan**
- lama: `Pasangan diam/freeze: guru pegang kartu, ucap "There is a…"`
- baru: `Pasangan diam/freeze: guru pegang kartu, ucap "There is a…" → tunggu 2–3 detik → siswa isi → guru lanjut jalan.`

**L11 · bantuan [item 1]**
- lama: `Jika volunteer freeze: guru whisper "There is a…" — jaga`
- baru: `Jika volunteer freeze: guru whisper "There is a…" — jaga momentum tanpa buat siswa tertekan.`

**L11 · bantuan [item 2]**
- lama: `Jika tidak ada yang siap: tunjuk 2 siswa bersama — ucapkan`
- baru: `Jika tidak ada yang siap: tunjuk 2 siswa bersama — ucapkan serentak.`

**L11 · cue**
- lama: `"Cards down." + tunggu 2 detik sebelum volunteer mulai.`
- baru: `"Cards down." + tunggu 2 detik sebelum volunteer mulai. Tunjuk langsung — jangan buka sesi tanya.`

**L12 · cue**
- lama: `Satu kartu = output terkontrol. Tidak noisy, tidak pecah.`
- baru: `Satu kartu = output terkontrol. Tidak noisy, tidak pecah. Pause 2 detik antara retrieval dan sentence — jangan tergesa.`

---

## TP-09 (Animals) — 16 field

**L1 · cue**
- lama: `Jangan buka kartu dulu. Jika kelas diam total, guru jawab`
- baru: `Jangan buka kartu dulu. Jika kelas diam total, guru jawab sendiri dan lanjut.`

**L2 · cue**
- lama: `Satu tangan tunjuk kartu, satu tangan gestur. Tidak ada`
- baru: `Satu tangan tunjuk kartu, satu tangan gestur. Tidak ada kata lain selain nama hewan.`

**L3 · bantuan**
- lama: `Jika kelas hanya sebagian ikut: "Everybody. Together." —`
- baru: `Jika kelas hanya sebagian ikut: "Everybody. Together." — ulangi kartu itu sekali.`

**L3 · cue**
- lama: `Momen fish — angkat bahu, senyum, langsung lanjut.`
- baru: `Momen fish — angkat bahu, senyum, langsung lanjut. Jangan buka diskusi "ikan bunyinya apa."`

**L4 · cue**
- lama: `Elephant paling berat — ucapkan dua kali, suku kata`
- baru: `Elephant paling berat — ucapkan dua kali, suku kata terpisah. Jangan lanjut sebelum guru sendiri sudah ucapkan 2x.`

**L5 · bantuan**
- lama: `Jika kelas lambat di elephant/rabbit: kurangi kecepatan di`
- baru: `Jika kelas lambat di elephant/rabbit: kurangi kecepatan di kartu itu, ulangi 2x, lanjut.`

**L5 · cue**
- lama: `Stop setelah 5 kartu — jangan perpanjang speed round.`
- baru: `Stop setelah 5 kartu — jangan perpanjang speed round. Energi naik = akurasi turun.`

**L6 · cue**
- lama: `Reset ini wajib — jangan skip. Kelas yang belum tenang`
- baru: `Reset ini wajib — jangan skip. Kelas yang belum tenang = Layar 7 gagal.`

**L7 · cue**
- lama: `Tiga contoh dulu — guru tidak tanya kelas. Hanya 3`
- baru: `Tiga contoh dulu — guru tidak tanya kelas. Hanya 3 hewan, bukan semua 10.`

**L8 · bantuan**
- lama: `Jika kelas diam di produksi mandiri: kembali ke choral —`
- baru: `Jika kelas diam di produksi mandiri: kembali ke choral — "Repeat after me."`

**L8 · cue**
- lama: `Production target hanya bird dan lion. Sisanya repeat`
- baru: `Production target hanya bird dan lion. Sisanya repeat after me — bukan produksi mandiri.`

**L9 · cue**
- lama: `"An elephant" — bukan "A elephant." Ucapkan natural,`
- baru: `"An elephant" — bukan "A elephant." Ucapkan natural, tidak perlu jelaskan grammar. Gestur harus dibesar-besarkan — terutama fins dan long nose.`

**L10 · bantuan**
- lama: `Pasangan diam total: dekati, bisik — "It can jump. Say that."`
- baru: `Pasangan diam total: dekati, bisik — "It can jump. Say that." Tidak hentikan kelas.`

**L10 · cue**
- lama: `Guru tidak koreksi kalimat saat practice berlangsung.`
- baru: `Guru tidak koreksi kalimat saat practice berlangsung. Catat, model ulang saat lewat. Acceptance rule berlaku.`

**L11 · cue**
- lama: `Tidak ada koreksi di sini. Jika 1 kartu banyak salah —`
- baru: `Tidak ada koreksi di sini. Jika 1 kartu banyak salah — ulangi 2x, lanjut.`

**L12 · bantuan**
- lama: `Terima: tulisan "lion", huruf awal "l", atau gambar singa.`
- baru: `Terima: tulisan "lion", huruf awal "l", atau gambar singa. Tidak ada koreksi terbuka.`

> Tidak diubah (sudah cocok dengan TXT): L12 · cue.

---

## TP-10 (Food and Drinks) — 17 field

**L1 · bantuan**
- lama: `Jika ada siswa individual yang diam: guru lanjut tanpa`
- baru: `Jika ada siswa individual yang diam: guru lanjut tanpa tunjuk — tidak dipaksa, tidak dikomentari.`

**L1 · cue**
- lama: `Guru tidak koreksi apapun di sini. Ini warm-up.`
- baru: `Guru tidak koreksi apapun di sini. Ini warm-up. Jika kelas diam total saat ditanya sarapan: guru jawab sendiri 2x dengan makanan berbeda, lanjut.`

**L2 · cue**
- lama: `Satu tangan tunjuk kartu, satu tangan gestur. Tidak`
- baru: `Satu tangan tunjuk kartu, satu tangan gestur. Tidak ada kata lain selain nama makanan.`

**L3 · bantuan**
- lama: `Jika kelas hanya sebagian ikut: "Everybody. Together." —`
- baru: `Jika kelas hanya sebagian ikut: "Everybody. Together." — ulangi kartu itu sekali.`

**L3 · cue**
- lama: `Guru demo ekspresi senang dulu sebelum kelas ikut.`
- baru: `Guru demo ekspresi senang dulu sebelum kelas ikut. "With feeling" = ekspresi wajah, bukan volume keras.`

**L4 · cue**
- lama: `Noodles — ucapkan 2x jika terasa asing: "Noo-dles.`
- baru: `Noodles — ucapkan 2x jika terasa asing: "Noo-dles. Noodles." Juice — pastikan bunyi /dʒuːs/, bukan "jus".`

**L5 · bantuan**
- lama: `Jika kelas lambat di noodles/juice: kurangi kecepatan,`
- baru: `Jika kelas lambat di noodles/juice: kurangi kecepatan, ulangi 2x, lanjut.`

**L6 · cue**
- lama: `Wajib — jangan skip. Kelas yang belum tenang =`
- baru: `Wajib — jangan skip. Kelas yang belum tenang = Layar 7 gagal.`

**L7 · cue**
- lama: `Ekspresi wajah adalah kunci — guru harus melebih-lebihkan`
- baru: `Ekspresi wajah adalah kunci — guru harus melebih-lebihkan ekspresi suka dan tidak suka. Tiga contoh dulu, baru kelas produksi.`

**L8 · bantuan**
- lama: `Jika kelas diam saat diminta pilih sendiri: guru tunjuk dua`
- baru: `Jika kelas diam saat diminta pilih sendiri: guru tunjuk dua kartu sekaligus — "This one or this one?" — kelas pilih.`

**L8 · cue**
- lama: `Production target: kelas bisa pilih "I like" atau`
- baru: `Production target: kelas bisa pilih "I like" atau "I don't like" sendiri untuk 1 kartu. Itu cukup untuk layar ini.`

**L9 · cue**
- lama: `Urutan wajib: question only → answer only → full`
- baru: `Urutan wajib: question only → answer only → full dialog → whole-class drill. Jangan lompat. Marker tubuh kiri/kanan harus konsisten sepanjang layar ini.`

**L10 · bantuan**
- lama: `Pasangan diam total: dekati, bisik — "Ask: Do you like`
- baru: `Pasangan diam total: dekati, bisik — "Ask: Do you like rice?" Tidak hentikan kelas.`

**L10 · cue**
- lama: `Guru tidak koreksi grammar saat practice. Acceptance`
- baru: `Guru tidak koreksi grammar saat practice. Acceptance rule berlaku. Piring kosong adalah bahan bicara — bukan aktivitas utama.`

**L11 · cue**
- lama: `Survei maksimal 3 item. Tidak dihitung detail — cukup`
- baru: `Survei maksimal 3 item. Tidak dihitung detail — cukup "many!" atau "only a few!" Fokus tetap di produksi oral, bukan numerasi.`

**L12 · bantuan** ⚠ (versi JS diringkas → dipulihkan ke TXT lengkap)
- lama: `Terima: kalimat penuh, kata saja ("like apple"), atau gambar saja.`
- baru: `Terima: kalimat penuh, kata saja ("like apple"), atau lingkaran di piring dengan jempol naik/turun. Tidak ada koreksi terbuka.`

**L12 · cue**
- lama: `Exit ticket = 2 pilihan kartu, 1 kalimat, pilihan`
- baru: `Exit ticket = 2 pilihan kartu, 1 kalimat, pilihan siswa sendiri. Tidak diperluas.`

> Tidak diubah (sudah cocok dengan TXT): L5 · cue.

---

## TP-11 (Daily Routines) — 18 field

**L1 · bantuan**
- lama: `Jika ada siswa individual yang diam: guru lanjut tanpa`
- baru: `Jika ada siswa individual yang diam: guru lanjut tanpa tunjuk — tidak dipaksa, tidak dikomentari.`

**L1 · cue**
- lama: `Gestur dulu, kata belakangan. Jika kelas diam total`
- baru: `Gestur dulu, kata belakangan. Jika kelas diam total saat ditanya: guru lanjut monolog + gestur, kelas ikut di akhir.`

**L2 · cue**
- lama: `Frasa dua kata — ucapkan natural, tidak dipenggal.`
- baru: `Frasa dua kata — ucapkan natural, tidak dipenggal. "Brush teeth" bukan "brush — teeth." Gestur harus besar dan konsisten. Eat breakfast = gestur nguap dulu, baru makan — anchor pembeda dengan eat dinner.`

**L3 · bantuan**
- lama: `Jika kelas hanya sebagian ikut: "Everybody. Together." —`
- baru: `Jika kelas hanya sebagian ikut: "Everybody. Together." — ulangi kartu itu sekali.`

**L3 · cue**
- lama: `Gestur wajib ikut sepanjang putaran ini. Guru terus`
- baru: `Gestur wajib ikut sepanjang putaran ini. Guru terus gestur — kelas ikut. Jangan lepas gestur meski sudah putaran kedua.`

**L4 · cue**
- lama: `Dua gestur inti harus berbeda — breakfast: nguap dulu`
- baru: `Dua gestur inti harus berbeda — breakfast: nguap dulu baru makan / dinner: capek dulu baru makan. Contrast drill wajib dilakukan di sini — jangan skip.`

**L5 · bantuan**
- lama: `Jika kelas mulai telat atau gestur tidak sinkron: kurangi`
- baru: `Jika kelas mulai telat atau gestur tidak sinkron: kurangi tempo, ulangi 2 kartu, lanjut.`

**L5 · cue**
- lama: `"Fast — but clear" — bukan makin cepat makin bagus.`
- baru: `"Fast — but clear" — bukan makin cepat makin bagus. Untuk frasa dua kata, clarity lebih penting dari speed. Guru ayun ritme natural — jangan penggal suku kata.`

**L6 · cue**
- lama: `Wajib — jangan skip. Kelas yang belum tenang =`
- baru: `Wajib — jangan skip. Kelas yang belum tenang = Layar 7 gagal.`

**L7 · cue**
- lama: `Tunjuk papan setiap kali ucapkan "First" dan "Then."`
- baru: `Tunjuk papan setiap kali ucapkan "First" dan "Then." Dua pasang contoh — bukan satu. Guru tidak tanya kelas dulu di layar ini.`

**L8 · bantuan**
- lama: `Jika kelas drop connector dan hanya sebut nama frasa: guru`
- baru: `Jika kelas drop connector dan hanya sebut nama frasa: guru tunjuk papan — "First, I…" — tunggu 2 detik, lanjut choral jika tidak ada respons.`

**L8 · cue**
- lama: `Choral frame penuh dulu sebelum fill-in-the-blank.`
- baru: `Choral frame penuh dulu sebelum fill-in-the-blank. Partner practice nanti butuh produksi frame utuh — bukan hanya nama kegiatan. Tunjuk papan setiap kali kelas mulai drop "First/Then."`

**L9 · bantuan**
- lama: `Pasangan diam total: dekati, bisik — "Point to wake up.`
- baru: `Pasangan diam total: dekati, bisik — "Point to wake up. Say: First, I wake up." Tidak hentikan kelas.`

**L9 · cue**
- lama: `Listener harus punya tugas — tunjuk kartu saat partner`
- baru: `Listener harus punya tugas — tunjuk kartu saat partner cerita. Tanpa ini setengah kelas mental-off. Guru tidak koreksi grammar. Acceptance rule berlaku — fragment diterima, model ulang saat lewat.`

**L10 · cue**
- lama: `Putaran 2 pakai discourse frame — bukan nama frasa saja.`
- baru: `Putaran 2 pakai discourse frame — bukan nama frasa saja. Ini menjaga "First/Then" tetap hidup sebelum closing. Tidak perlu semua 8 kartu — 2 contoh cukup.`

**L11 · cue**
- lama: `Survei maksimal 2 pertanyaan. Guru model jawaban`
- baru: `Survei maksimal 2 pertanyaan. Guru model jawaban sebelum tanya kelas. Tidak diperluas.`

**L12 · bantuan**
- lama: `Terima: dua kalimat penuh, frasa saja ("first eat breakfast"), atau gambar dengan urutan 1–2.`
- baru: `Terima: dua kalimat penuh, frasa saja ("first eat breakfast"), atau gambar dengan urutan 1–2. Urutan berbeda dari rutinitas "benar" tetap diterima — target adalah struktur, bukan akurasi rutinitas. Tidak ada koreksi terbuka.`

**L12 · cue**
- lama: `Exit ticket = 2 kartu adjacent, 2 kalimat, struktur`
- baru: `Exit ticket = 2 kartu adjacent, 2 kalimat, struktur "First … Then …". Tidak diperluas.`

---

— Selesai. 80 field `cue`/`bantuan` dipulihkan di 5 file `-fixed.js`. File asli `tp-07-v5.js … tp-11-v5.js` tidak diubah.
