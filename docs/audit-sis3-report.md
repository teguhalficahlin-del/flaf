# Verifikasi SIS-3 — Perbandingan `cue`/`bantuan` JS vs TXT Sumber (TP07–TP11)

**Tujuan:** memverifikasi temuan SIS-3 (cue/bantuan terpotong) dengan membandingkan field
`langkah.cue` dan `langkah.bantuan` di file JS terhadap teks sumber di file skenario TXT.
**File tidak diubah.**

Sumber JS: `docs/output-v5/tp-07-v5.js … tp-11-v5.js`
Sumber TXT: `docs/skenario/flaf-skenario-tp07-v2.txt … tp11-v2.txt`
Pemetaan: `⚡ Cue kritis:` (TXT) → `cue` (JS) · `BANTUAN ▸` (TXT) → `bantuan` (JS).

---

## 1. Jawaban Ringkas

**YA — ada teks terpotong/tidak lengkap, dan sangat masif.** Pada TP07–TP11, **hampir semua**
`cue` dan `bantuan` yang berisi (non-null) **tidak lengkap** dibanding TXT sumber. Dua bentuk:

- **TERPOTONG** — string JS berhenti di tengah kalimat (berakhir pada kata/`—`/`:`/`→`/kutip terbuka).
- **TIDAK LENGKAP** — kalimat pertama utuh, tetapi 1+ kalimat lanjutan dari TXT hilang.

Pada hampir semua kasus, **ekor yang hilang justru tertanam di `langkah.teks`** langkah yang
sama (artefak konversi batch). Ditemukan pula **1 inversi makna** (TP07 L2): TXT
"ucapkan hangat, **tidak perlu** tekanan intonasi besar" berubah di JS `teks` menjadi
"AKSI: **Beri** tekanan intonasi besar pada kalimat ini" — kebalikan instruksi.

### Rekap jumlah (field berisi saja; `null` tidak dihitung)

| TP | cue/bantuan berisi | TERPOTONG | TIDAK LENGKAP | LENGKAP (cocok) | Catatan |
|----|--------------------|-----------|----------------|------------------|---------|
| 07 | 17 | 9 | 5 | 3 | + inversi makna di L2 (field `teks`) |
| 08 | 17 | 15 | 0 | 2 | paling parah |
| 09 | 18 | 12 | 4 | 2 | |
| 10 | 18 | 14 | 3 | 1 | + L12.bantuan diringkas/diubah |
| 11 | 18 | 12 | 6 | 0 | |
| **Total** | **88** | **62** | **18** | **8** | |

**Kesimpulan:** 80 dari 88 field `cue`/`bantuan` berisi (≈91%) tidak utuh. SIS-3 **terkonfirmasi**.
Perbaikan bersifat mekanis: gabungkan kembali ekor dari `teks` ke `cue`/`bantuan` (rujuk TXT).

---

## 2. TP-07 (My Family)

**TERPOTONG (berhenti di tengah kalimat):**

- **L1 · cue**
  - JS: `Jangan tunggu jawaban serentak. Pertanyaan ini terbuka — setiap`
  - TXT: `Jangan tunggu jawaban serentak. Pertanyaan ini terbuka — setiap jawaban valid. Tujuan: membuka koneksi, bukan memeriksa struktur keluarga.`
  - Ekor (`jawaban valid. Tujuan: ...`) ada di `L1.teks`.
- **L2 · cue**
  - JS: `Kalimat terakhir adalah emotional flavour — ucapkan hangat, tidak`
  - TXT: `Kalimat terakhir adalah emotional flavour — ucapkan hangat, tidak perlu tekanan intonasi besar. Dua kartu saja di Layar ini — jangan tempel dulu.`
  - ⚠️ **INVERSI MAKNA:** ekor di `L2.teks` menjadi `AKSI: Beri tekanan intonasi besar pada kalimat ini.` — bertolak belakang dengan TXT (`tidak perlu tekanan intonasi besar`).
- **L3 · bantuan**
  - JS: `Sister/brother tertukar: "Sister = girl." [tunjuk kartu sister]`
  - TXT: `Sister/brother tertukar: "Sister = girl." [tunjuk kartu sister] "Brother = boy." [tunjuk kartu brother]`
  - Bagian `"Brother = boy." ...` dipindah ke `L3.teks` (sebagai UCAP).
- **L4 · cue**
  - JS: `Semi-echo "Grand—…" penting untuk grandmother/grandfather —`
  - TXT: `Semi-echo "Grand—…" penting untuk grandmother/grandfather — jangan skip. Discrimination check wajib sebelum masuk Layar 5.`
- **L5 · cue**
  - JS: `"Hands on knees. Eyes ready." sebelum speed round —`
  - TXT: `"Hands on knees. Eyes ready." sebelum speed round — jangan langsung tunjuk kartu.`
- **L7 · cue**
  - JS: `Vocab dulu → baru kalimat. Jangan langsung model kalimat penuh —`
  - TXT: `Vocab dulu → baru kalimat. Jangan langsung model kalimat penuh — bangun bertahap agar kelas merasakan strukturnya.`
- **L8 · cue**
  - JS: `Demo hanya tiga langkah: pegang → tunjuk → ucap. Jangan`
  - TXT: `Demo hanya tiga langkah: pegang → tunjuk → ucap. Jangan perpanjang demo — kelas perlu segera pegang kartu sendiri.`
- **L9 · bantuan**
  - JS: `Pasangan diam: guru pegang kartu, model ke salah satu siswa →`
  - TXT: `Pasangan diam: guru pegang kartu, model ke salah satu siswa → siswa satunya meniru.`
- **L11 · bantuan**
  - JS: `Jika tidak ada yang mau maju: tunjuk dua siswa bersama —`
  - TXT: `Jika tidak ada yang mau maju: tunjuk dua siswa bersama — presentasi serentak.`

**TIDAK LENGKAP (kalimat lanjutan hilang, ada di `teks`):**

- **preOpening · cue** — JS: `Tone calm dijaga dari sini — TP 07 bertumpu pada koneksi personal.` · TXT lanjut: `Jangan tergesa masuk ke Layar 1. Jika kelas belum fokus: ulangi "Are you ready?" sambil berdiri diam.`
- **L1 · bantuan** — JS: `Jika ada siswa yang diam atau ekspresi tidak nyaman: jangan paksa.` · TXT lanjut: `"That's okay — we will learn together."`
- **L3 · cue** — JS: `Micro-freeze 3 detik antara mother/father → sister/brother wajib.` · TXT lanjut: `Jangan minta echo serentak sebelum kelas mendengar semua 4 kata.`
- **L9 · cue** — JS: `Distribusi kartu diam dulu, instruksi belakangan — bukan bersamaan.` · TXT lanjut: `Semua siswa pakai kartu printable dari guru — tidak perlu bawa foto dari rumah.`
- **L12 · cue** — JS: `Satu kartu = output terkontrol. Tidak noisy, tidak pecah.` · TXT lanjut: `Pause 2 detik antara retrieval dan sentence — jangan tergesa.`

**LENGKAP (cocok dengan TXT):** L4 · bantuan · `Masih tertukar: ulang semi-echo "Grand—…" sekali lagi sebelum lanjut.` — L5 · bantuan · `Jika diam: buka label setengah → kelas bantu → tutup lagi → coba ulang.` — L11 · cue · `"Cards down." sebelum volunteer maju — kartu di tangan = distraksi.`

---

## 3. TP-08 (My House)

**TERPOTONG:**

- **preOpening · cue** — JS: `Jangan tunjukkan kartu denah sebelum Layar 2. Tone calm` · TXT: `... Tone calm dijaga dari sini. Jika kelas belum fokus: ulangi "Are you ready?" sambil berdiri diam.` (ekor `dijaga dari sini ...` ada di preOpening.teks)
- **L1 · cue** — JS: `Pertanyaan ini terbuka — setiap jawaban valid. Tujuannya` · TXT: `... Tujuannya koneksi ke vocab, bukan memeriksa kondisi rumah. Jangan evaluasi besar/kecilnya rumah.`
- **L1 · bantuan** — JS: `Jika ada siswa yang diam atau bingung: "Bedroom? Kitchen?` · TXT: `... "Bedroom? Kitchen? Which one?" [tunjuk satu jari → jari lainnya]`
- **L2 · cue** — JS: `Gesture "living room" dilakukan saat menyebut — bukan` · TXT: `... saat menyebut — bukan sesudah. Micro-pause antara bedroom/kitchen → bathroom/living room wajib.`
- **L3 · cue** — JS: `Contrast check bedroom vs bathroom wajib sebelum putaran` · TXT: `... wajib sebelum putaran acak. Putaran pertama lambat — jangan langsung speed.`
- **L3 · bantuan** — JS: `Bathroom/bedroom masih tertukar: tunjuk dua kartu berdampingan →` · TXT: `... berdampingan → "Bath-room. Bed-room. Different!"`
- **L4 · cue** — JS: `"Hands on knees. Eyes ready." sebelum speed round —` · TXT: `... sebelum speed round — jangan langsung tunjuk kartu. Bedroom → bathroom → bedroom = wajib masuk sequence.`
- **L4 · bantuan** — JS: `Jika masih tertukar: kembali ke contrast check sebentar →` · TXT: `... sebentar → "Bath-room. Bed-room." → lanjut speed round.`
- **L6 · cue** — JS: `Gesture untuk "sofa" dan "shower" dilakukan bersamaan` · TXT: `... dilakukan bersamaan dengan menyebut kata — bukan sesudah. Mini echo sekali saja per benda.`
- **L7 · cue** — JS: `Chunking gesture wajib — tunjuk benda dulu, tunjuk` · TXT: `... tunjuk benda dulu, tunjuk ruangan kemudian. Kalimat terasa dibangun, bukan dihapalkan. Pause 2 detik antara model pertama dan kedua.`
- **L8 · cue** — JS: `Demo tiga langkah: pegang → tunjuk → ucap. Guru tetap` · TXT: `... Guru tetap gesture selama volunteer bicara.`
- **L9 · cue** — JS: `Distribusi kartu diam dulu, instruksi belakangan —` · TXT: `... instruksi belakangan — bukan bersamaan. Acceptance rule berlaku — koreksi saat lewat, bukan berhenti.`
- **L9 · bantuan** — JS: `Pasangan diam/freeze: guru pegang kartu, ucap "There is a…"` · TXT: `... ucap "There is a…" → tunggu 2–3 detik → siswa isi → guru lanjut jalan.`
- **L11 · bantuan[0]** — JS: `Jika volunteer freeze: guru whisper "There is a…" — jaga` · TXT: `Jika volunteer freeze: guru whisper "There is a…" — jaga momentum tanpa buat siswa tertekan.`
- **L11 · bantuan[1]** — JS: `Jika tidak ada yang siap: tunjuk 2 siswa bersama — ucapkan` · TXT: `Jika tidak ada yang siap: tunjuk 2 siswa bersama — ucapkan serentak.`

**LENGKAP:** L11 · cue · `"Cards down." + tunggu 2 detik sebelum volunteer mulai.` (TXT punya kalimat tambahan `Tunjuk langsung — jangan buka sesi tanya.` → secara teknis **TIDAK LENGKAP**, ekor ada di L11.teks). — L12 · cue · `Satu kartu = output terkontrol. Tidak noisy, tidak pecah.` (TXT lanjut `Pause 2 detik ...` → juga **TIDAK LENGKAP**).

> Catatan TP-08: dua "LENGKAP" di atas sebenarnya juga kehilangan kalimat lanjutan; jadi praktis **seluruh** cue/bantuan TP-08 tidak utuh.

---

## 4. TP-09 (Animals)

**TERPOTONG:**

- **preOpening · cue** — JS: `Layar ini pendek dan wajib. Jangan skip. Fungsinya mengunci` · TXT: `... Fungsinya mengunci perhatian kelas sebelum masuk sesi. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.`
- **L1 · cue** — JS: `Jangan buka kartu dulu. Jika kelas diam total, guru jawab` · TXT: `... guru jawab sendiri dan lanjut.`
- **L2 · cue** — JS: `Satu tangan tunjuk kartu, satu tangan gestur. Tidak ada` · TXT: `... Tidak ada kata lain selain nama hewan.`
- **L3 · bantuan** — JS: `Jika kelas hanya sebagian ikut: "Everybody. Together." —` · TXT: `... "Everybody. Together." — ulangi kartu itu sekali.`
- **L4 · cue** — JS: `Elephant paling berat — ucapkan dua kali, suku kata` · TXT: `... suku kata terpisah. Jangan lanjut sebelum guru sendiri sudah ucapkan 2x.`
- **L5 · bantuan** — JS: `Jika kelas lambat di elephant/rabbit: kurangi kecepatan di` · TXT: `... kurangi kecepatan di kartu itu, ulangi 2x, lanjut.`
- **L6 · cue** — JS: `Reset ini wajib — jangan skip. Kelas yang belum tenang` · TXT: `... Kelas yang belum tenang = Layar 7 gagal.`
- **L7 · cue** — JS: `Tiga contoh dulu — guru tidak tanya kelas. Hanya 3` · TXT: `... Hanya 3 hewan, bukan semua 10.`
- **L8 · bantuan** — JS: `Jika kelas diam di produksi mandiri: kembali ke choral —` · TXT: `... kembali ke choral — "Repeat after me."`
- **L8 · cue** — JS: `Production target hanya bird dan lion. Sisanya repeat` · TXT: `... Sisanya repeat after me — bukan produksi mandiri.`
- **L9 · cue** — JS: `"An elephant" — bukan "A elephant." Ucapkan natural,` · TXT: `... Ucapkan natural, tidak perlu jelaskan grammar. Gestur harus dibesar-besarkan — terutama fins dan long nose.`
- **L11 · cue** — JS: `Tidak ada koreksi di sini. Jika 1 kartu banyak salah —` · TXT: `... Jika 1 kartu banyak salah — ulangi 2x, lanjut.`

**TIDAK LENGKAP:**

- **L3 · cue** — JS: `Momen fish — angkat bahu, senyum, langsung lanjut.` · TXT lanjut: `Jangan buka diskusi "ikan bunyinya apa."`
- **L5 · cue** — JS: `Stop setelah 5 kartu — jangan perpanjang speed round.` · TXT lanjut: `Energi naik = akurasi turun.`
- **L10 · bantuan** — JS: `Pasangan diam total: dekati, bisik — "It can jump. Say that."` · TXT lanjut: `Tidak hentikan kelas.`
- **L10 · cue** — JS: `Guru tidak koreksi kalimat saat practice berlangsung.` · TXT lanjut: `Catat, model ulang saat lewat. Acceptance rule berlaku.`

**LENGKAP:** L12 · cue · `Exit ticket = 1 kartu, 1 output, 30 detik. Tidak diperluas.` — L12 · bantuan praktis **TIDAK LENGKAP** (JS: `Terima: tulisan "lion", huruf awal "l", atau gambar singa.` · TXT lanjut: `Tidak ada koreksi terbuka.`).

---

## 5. TP-10 (Food and Drinks)

**TERPOTONG:**

- **preOpening · cue** — JS: `Layar ini pendek dan wajib. Jangan skip. Fungsinya` · TXT: `... Fungsinya mengunci perhatian kelas sebelum masuk sesi. Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.`
- **L1 · bantuan** — JS: `Jika ada siswa individual yang diam: guru lanjut tanpa` · TXT: `... guru lanjut tanpa tunjuk — tidak dipaksa, tidak dikomentari.`
- **L2 · cue** — JS: `Satu tangan tunjuk kartu, satu tangan gestur. Tidak` · TXT: `... Tidak ada kata lain selain nama makanan.`
- **L3 · bantuan** — JS: `Jika kelas hanya sebagian ikut: "Everybody. Together." —` · TXT: `... "Everybody. Together." — ulangi kartu itu sekali.`
- **L4 · cue** — JS: `Noodles — ucapkan 2x jika terasa asing: "Noo-dles.` · TXT: `Noodles — ucapkan 2x jika terasa asing: "Noo-dles. Noodles." Juice — pastikan bunyi /dʒuːs/, bukan "jus".`
- **L5 · bantuan** — JS: `Jika kelas lambat di noodles/juice: kurangi kecepatan,` · TXT: `... kurangi kecepatan, ulangi 2x, lanjut.`
- **L6 · cue** — JS: `Wajib — jangan skip. Kelas yang belum tenang =` · TXT: `... Kelas yang belum tenang = Layar 7 gagal.`
- **L7 · cue** — JS: `Ekspresi wajah adalah kunci — guru harus melebih-lebihkan` · TXT: `... guru harus melebih-lebihkan ekspresi suka dan tidak suka. Tiga contoh dulu, baru kelas produksi.`
- **L8 · bantuan** — JS: `Jika kelas diam saat diminta pilih sendiri: guru tunjuk dua` · TXT: `... guru tunjuk dua kartu sekaligus — "This one or this one?" — kelas pilih.`
- **L8 · cue** — JS: `Production target: kelas bisa pilih "I like" atau` · TXT: `... kelas bisa pilih "I like" atau "I don't like" sendiri untuk 1 kartu. Itu cukup untuk layar ini.`
- **L9 · cue** — JS: `Urutan wajib: question only → answer only → full` · TXT: `... → full dialog → whole-class drill. Jangan lompat. Marker tubuh kiri/kanan harus konsisten sepanjang layar ini.`
- **L10 · bantuan** — JS: `Pasangan diam total: dekati, bisik — "Ask: Do you like` · TXT: `... bisik — "Ask: Do you like rice?" Tidak hentikan kelas.`
- **L10 · cue** — JS: `Guru tidak koreksi grammar saat practice. Acceptance` · TXT: `... Acceptance rule berlaku. Piring kosong adalah bahan bicara — bukan aktivitas utama.`
- **L11 · cue** — JS: `Survei maksimal 3 item. Tidak dihitung detail — cukup` · TXT: `... Tidak dihitung detail — cukup "many!" atau "only a few!" Fokus tetap di produksi oral, bukan numerasi.`
- **L12 · cue** — JS: `Exit ticket = 2 pilihan kartu, 1 kalimat, pilihan` · TXT: `... 1 kalimat, pilihan siswa sendiri. Tidak diperluas.`

**TIDAK LENGKAP:**

- **L1 · cue** — JS: `Guru tidak koreksi apapun di sini. Ini warm-up.` · TXT lanjut: `Jika kelas diam total saat ditanya sarapan: guru jawab sendiri 2x dengan makanan berbeda, lanjut.`
- **L3 · cue** — JS: `Guru demo ekspresi senang dulu sebelum kelas ikut.` · TXT lanjut: `"With feeling" = ekspresi wajah, bukan volume keras.`
- **L12 · bantuan** — ⚠️ **DIRINGKAS/DIUBAH:** JS: `Terima: kalimat penuh, kata saja ("like apple"), atau gambar saja.` · TXT: `Terima: kalimat penuh, kata saja ("like apple"), atau lingkaran di piring dengan jempol naik/turun. Tidak ada koreksi terbuka.` (frasa `lingkaran di piring dengan jempol naik/turun. Tidak ada koreksi terbuka.` malah pindah ke L12.teks; di bantuan diganti `gambar saja`.)

**LENGKAP:** L5 · cue · `Stop setelah 5 kartu — jangan perpanjang speed round.`

---

## 6. TP-11 (Daily Routines)

**TERPOTONG:**

- **preOpening · cue** — JS: `Layar ini pendek dan wajib. Jika kelas belum fokus:` · TXT: `... Jika kelas belum fokus: ulangi "Are you ready?" sekali lagi sambil berdiri diam.`
- **L1 · bantuan** — JS: `Jika ada siswa individual yang diam: guru lanjut tanpa` · TXT: `... guru lanjut tanpa tunjuk — tidak dipaksa, tidak dikomentari.`
- **L1 · cue** — JS: `Gestur dulu, kata belakangan. Jika kelas diam total` · TXT: `... Jika kelas diam total saat ditanya: guru lanjut monolog + gestur, kelas ikut di akhir.`
- **L3 · bantuan** — JS: `Jika kelas hanya sebagian ikut: "Everybody. Together." —` · TXT: `... "Everybody. Together." — ulangi kartu itu sekali.`
- **L3 · cue** — JS: `Gestur wajib ikut sepanjang putaran ini. Guru terus` · TXT: `... Guru terus gestur — kelas ikut. Jangan lepas gestur meski sudah putaran kedua.`
- **L4 · cue** — JS: `Dua gestur inti harus berbeda — breakfast: nguap dulu` · TXT: `... breakfast: nguap dulu baru makan / dinner: capek dulu baru makan. Contrast drill wajib dilakukan di sini — jangan skip.`
- **L5 · bantuan** — JS: `Jika kelas mulai telat atau gestur tidak sinkron: kurangi` · TXT: `... kurangi tempo, ulangi 2 kartu, lanjut.`
- **L6 · cue** — JS: `Wajib — jangan skip. Kelas yang belum tenang =` · TXT: `... Kelas yang belum tenang = Layar 7 gagal.`
- **L8 · bantuan** — JS: `Jika kelas drop connector dan hanya sebut nama frasa: guru` · TXT: `... guru tunjuk papan — "First, I…" — tunggu 2 detik, lanjut choral jika tidak ada respons.`
- **L9 · bantuan** — JS: `Pasangan diam total: dekati, bisik — "Point to wake up.` · TXT: `... bisik — "Point to wake up. Say: First, I wake up." Tidak hentikan kelas.`
- **L9 · cue** — JS: `Listener harus punya tugas — tunjuk kartu saat partner` · TXT: `... tunjuk kartu saat partner cerita. Tanpa ini setengah kelas mental-off. Guru tidak koreksi grammar. Acceptance rule berlaku — fragment diterima, model ulang saat lewat.`
- **L11 · cue** — JS: `Survei maksimal 2 pertanyaan. Guru model jawaban` · TXT: `... Guru model jawaban sebelum tanya kelas. Tidak diperluas.`
- **L12 · cue** — JS: `Exit ticket = 2 kartu adjacent, 2 kalimat, struktur` · TXT: `... 2 kalimat, struktur "First … Then …". Tidak diperluas.`

**TIDAK LENGKAP:**

- **L2 · cue** — JS: `Frasa dua kata — ucapkan natural, tidak dipenggal.` · TXT lanjut: `"Brush teeth" bukan "brush — teeth." Gestur harus besar dan konsisten. Eat breakfast = gestur nguap dulu, baru makan — anchor pembeda dengan eat dinner.`
- **L5 · cue** — JS: `"Fast — but clear" — bukan makin cepat makin bagus.` · TXT lanjut: `Untuk frasa dua kata, clarity lebih penting dari speed. Guru ayun ritme natural — jangan penggal suku kata.`
- **L7 · cue** — JS: `Tunjuk papan setiap kali ucapkan "First" dan "Then."` · TXT lanjut: `Dua pasang contoh — bukan satu. Guru tidak tanya kelas dulu di layar ini.`
- **L8 · cue** — JS: `Choral frame penuh dulu sebelum fill-in-the-blank.` · TXT lanjut: `Partner practice nanti butuh produksi frame utuh — bukan hanya nama kegiatan. Tunjuk papan setiap kali kelas mulai drop "First/Then."`
- **L10 · cue** — JS: `Putaran 2 pakai discourse frame — bukan nama frasa saja.` · TXT lanjut: `Ini menjaga "First/Then" tetap hidup sebelum closing. Tidak perlu semua 8 kartu — 2 contoh cukup.`
- **L12 · bantuan** — JS: `Terima: dua kalimat penuh, frasa saja ("first eat breakfast"), atau gambar dengan urutan 1–2.` · TXT lanjut: `Urutan berbeda dari rutinitas "benar" tetap diterima — target adalah struktur, bukan akurasi rutinitas. Tidak ada koreksi terbuka.`

**LENGKAP:** —

---

## 7. Pola & Rekomendasi (di luar lingkup ubah-file)

1. **Pola seragam:** konverter batch memotong tiap catatan — awal tertinggal di `cue`/`bantuan`,
   ekornya menempel di akhir `langkah.teks` langkah yang sama (sering tanpa penanda AKSI/UCAP).
2. **Perbaikan mekanis:** untuk tiap langkah, pindahkan kembali fragmen ekor dari `teks` ke
   `cue`/`bantuan`, gunakan TXT (`docs/skenario/flaf-skenario-tp{NN}-v2.txt`) sebagai acuan teks lengkap.
3. **Perhatian khusus (bukan sekadar potong):**
   - **TP07 L2** — inversi makna: `teks` JS berbunyi `Beri tekanan intonasi besar`, padahal TXT
     `tidak perlu tekanan intonasi besar`. Wajib dikoreksi maknanya, bukan hanya digabung.
   - **TP10 L12 · bantuan** — diringkas jadi `gambar saja`, berbeda dari TXT
     (`lingkaran di piring dengan jempol naik/turun`).
4. Verifikasi ini hanya memeriksa `cue` dan `bantuan` (sesuai permintaan). Field lain tidak dinilai.

— Selesai. Tidak ada file yang diubah.
