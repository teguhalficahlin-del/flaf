# FLAF v2 — Spesifikasi Skema Layer 0 (Konten/Pedagogis)

**Lingkup**: Skema data untuk lapisan konten dan pedagogis FLAF — CP, TP, Modul Ajar, Langkah Pembelajaran, Asesmen, Diferensiasi. **Tidak mencakup** infrastruktur PWA (Service Worker, IndexedDB caching mechanics, sistem aktivasi) — itu tetap dipakai dari FLAF eksisting.

**Status**: DESIGN — siap diterjemahkan ke implementasi (TypeScript/IndexedDB schema), belum di-build.

---

## Prinsip Desain — setiap keputusan di bawah ini punya jejak ke temuan riset

1. **CP adalah anchor yang tidak pernah disalin, hanya direferensikan** — mencegah duplikasi/divergensi teks CP di banyak tempat (pelajaran dari riwayat FLAF: data yang terduplikasi rawan tidak sinkron).
2. **Struktur PM (4 komponen, siklus M-M-M) tetap di semua fase** — divalidasi dari "Panduan Pembelajaran dan Asesmen 2025", bukan asumsi.
3. **Provenance eksplisit di level TP dan Modul** — supaya status kepercayaan konten (resmi vs turunan) tidak hilang setelah masuk database, sesuatu yang nyaris terjadi kalau kita tidak hati-hati sepanjang riset ini.
4. **Field opsional benar-benar opsional di tipe data** (`?:` bukan field wajib kosong) — Kemitraan Pembelajaran dan Pemanfaatan Digital ditandai eksplisit opsional di sumber resmi, schema harus mencerminkan itu, bukan memaksa semua modul mengisinya.
5. **Identity key tunggal, konsisten lintas fase** — pelajaran langsung dari masalah `pattern_id` di FLAF lama: satu skema ID, bukan berbeda per fase.

### Riwayat Revisi

- **v1**: Desain awal, diuji terhadap pilot Fase C (konten yang saya susun sendiri) — lolos tanpa friksi.
- **v2** (revisi ini): Diuji ulang terhadap konten resmi independen (Fase D "Speak Your Mind") — ditemukan 2 friksi nyata. `identifikasi_kesiapan` dilonggarkan jadi opsional (sering menyatu dengan `asesmen.awal` di modul resmi), `lingkungan_pembelajaran` diubah dari 3 sub-field wajib-terpisah menjadi 1 field teks bebas + sub-field opsional. **Pelajaran metodologis**: uji skema terhadap konten yang skema itu sendiri tidak bentuk jauh lebih bernilai daripada uji terhadap konten buatan sendiri.
- **v3** (revisi ini): Stress test sengaja dengan data paling minim (Fase A) — ditemukan 2 masalah desain: (1) `elemen: null` menghasilkan ID kontradiktif (CP-A-MP padahal elemen-nya null) — dihapus, diganti `FaseMetadata.elemen_tidak_berlaku` di level fase, bukan row CP palsu. (2) Field numerik wajib (`alokasi_waktu_jp`, `jumlah_pertemuan`) tidak punya jalan keluar jujur untuk data tidak lengkap — dijadikan opsional, ditambah field baru `status_kelengkapan` di level ModulAjar supaya modul kerangka-kosong tidak tercampur dengan modul siap pakai.

---

## Entitas Inti

```typescript
type Fase = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'F-LANJUT';
type Jenjang = 'SD' | 'SMP' | 'SMA' | 'SMK';
type Elemen = 'menyimak-berbicara' | 'membaca-memirsa' | 'menulis-mempresentasikan';

// ── CP: invariant, tidak boleh diedit lewat alur konten ──
// CATATAN REVISI v3: HANYA buat instance CapaianPembelajaran untuk elemen yang benar-benar punya CP.
// JANGAN buat row dengan elemen:null untuk elemen yang tidak berlaku (mis. Menulis-Mempresentasikan di Fase A)
// — itu menciptakan ID kontradiktif (CP-A-MP padahal elemen-nya null). Sebagai gantinya, pakai FaseMetadata.
interface CapaianPembelajaran {
  id: string;                 // format: CP-{fase}-{elemen}, e.g. "CP-C-MB"
  fase: Fase;
  elemen: Elemen;             // TIDAK lagi nullable — kalau elemen tidak berlaku, jangan buat row sama sekali
  teks_id: string;            // verbatim Bahasa Indonesia, tidak boleh diparafrase
  teks_en: string;            // verbatim English
  sumber_regulasi: string;    // "Kepala BSKAP No. 046/H/KR/2025"
  schemaVersion: number;
}

// BARU di v3: catat elemen yang sengaja tidak ada, di level fase — bukan row CP palsu
interface FaseMetadata {
  fase: Fase;
  elemen_tidak_berlaku: {
    elemen: Elemen;
    alasan: string;            // verbatim alasan dari sumber resmi, e.g. "Belum menjadi fokus pembelajaran pada fase ini..."
  }[];
}

// ── TP: diturunkan dari CP, provenance wajib ──
type ProvenanceTP =
  | 'resmi_BSKAP'              // langsung dari Panduan Mapel
  | 'resmi_platform_guru'      // dikurasi guru.kemendikdasmen.go.id / static.perangkat-ajar
  | 'turunan_MGMP'             // tim guru lintas sekolah, tertelusur
  | 'turunan_komunitas'        // agregator (Modul Guruku, dll)
  | 'disusun_FLAF';            // diturunkan FLAF pakai metodologi resmi (Alternatif 1/2/3)

interface TujuanPembelajaran {
  id: string;                  // format: TP-{fase}-{kelas}-{nomor}
  fase: Fase;
  kelas: string;                // "5", "VII", "X", dst — bebas karena penamaan kelas beda per jenjang
  elemen: Elemen[];
  teks: string;                 // format Kompetensi + Konten (sesuai metodologi resmi)
  cp_ref: string;                // FK -> CapaianPembelajaran.id, BUKAN salinan teks
  provenance: ProvenanceTP;
  catatan_validasi?: string;     // contoh nyata: "future tense, tidak ada jangkar eksplisit di CP — pengayaan opsional"
  metode_pengurutan?: 'konkret-abstrak' | 'deduktif' | 'mudah-sulit' | 'hierarki' | 'prosedural' | 'scaffolding';
  urutan: number;                // posisi dalam ATP fase ini
}

type DimensiProfilLulusan =
  | 'keimanan_ketakwaan' | 'kewargaan' | 'penalaran_kritis' | 'kreativitas'
  | 'kolaborasi' | 'kemandirian' | 'kesehatan' | 'komunikasi';
  // 8 nilai tetap, divalidasi dari Panduan Pembelajaran dan Asesmen 2025 — JANGAN tambah/kurang tanpa regulasi baru
```

## Modul Ajar — satu siklus pembelajaran utuh

```typescript
interface ModulAjar {
  id: string;
  schemaVersion: number;

  // A. Identitas — wajib ada & wajib sama strukturnya
  identitas: {
    judul: string;
    fase: Fase;
    kelas: string;
    jenjang: Jenjang;
    mapel: string;                 // default "Bahasa Inggris", field tetap generik untuk mapel lain di masa depan
    alokasi_waktu_jp?: number;     // OPSIONAL (direvisi v3) — data sering belum tersedia di tahap awal riset
    jumlah_pertemuan?: number;     // OPSIONAL (direvisi v3)
    semester: 1 | 2;
  };

  // BARU di v3: status eksplisit, supaya modul "kerangka kosong" tidak tercampur dengan modul siap pakai
  status_kelengkapan: 'draft_kerangka' | 'draft_isi_sebagian' | 'siap_review' | 'siap_pakai';

  cp_refs: string[];               // FK[] -> CapaianPembelajaran — REFERENSI, bukan salinan teks
  tp_refs: string[];               // FK[] -> TujuanPembelajaran

  dimensi_profil_lulusan: DimensiProfilLulusan[];   // minimal 1, bebas pilih dari 8

  identifikasi_kesiapan?: {         // OPSIONAL (direvisi v2) — di banyak modul resmi, info ini menyatu dengan asesmen.awal, bukan berdiri sendiri. Kalau kosong di sini, CEK asesmen.awal dulu sebelum dianggap data hilang.
    pengetahuan_awal?: string;
    minat?: string;
    kebutuhan_belajar?: string;
    bentuk_diagnostik?: string;     // opsional: cara cek kesiapan (kuis, observasi, dll)
  };

  praktik_pedagogis: string[];      // wajib slot, isi bebas, e.g. ["genre-based-approach", "mini-survey"]

  // Kerangka Pembelajaran — sub-komponen dgn opsionalitas eksplisit sesuai sumber resmi
  kemitraan_pembelajaran?: {        // OPSIONAL — jangan dipaksa wajib
    lingkungan_sekolah?: string;
    lingkungan_luar_sekolah?: string;
    mitra_lain?: string;
  };
  lingkungan_pembelajaran: {        // WAJIB slot, tapi struktur dilonggarkan (direvisi v2)
    deskripsi: string;              // field utama — teks bebas, selalu bisa diisi langsung dari sumber tanpa dipaksa dipecah
    ruang_fisik?: string;           // opsional — isi HANYA kalau sumber memang memilah eksplisit
    ruang_virtual?: string;         // opsional
    budaya_belajar?: string;        // opsional — JANGAN disimpulkan/dikarang dari deskripsi kalau sumber tidak menyebutnya eksplisit
  };
  pemanfaatan_digital?: string[];   // OPSIONAL

  // Langkah Pembelajaran — INTI RUNTIME, struktur 3-tahap TETAP, urutan tidak boleh berubah
  langkah_pembelajaran: {
    memahami: TahapPembelajaran;
    mengaplikasi: TahapPembelajaran;
    merefleksi: TahapPembelajaran;
  };

  asesmen: {
    awal?: AsesmenAwal;             // OPSIONAL — sumber resmi menandainya eksplisit opsional
    proses: AsesmenProses[];
    akhir: AsesmenAkhir;
  };

  provenance: {
    sumber_konten: ProvenanceTP;
    disusun_oleh?: string;
    tanggal_disusun: string;
    catatan_koreksi?: string[];     // log perbaikan dari sumber asli (pola dari pilot Fase C: 2 kejanggalan dicatat di sini, bukan dihapus diam-diam)
  };
}

interface TahapPembelajaran {
  prinsip: ('berkesadaran' | 'bermakna' | 'menggembirakan')[];  // minimal 1, sesuai label resmi tiap pertemuan
  pertemuan_ke: number[];
  aktivitas: Aktivitas[];
}

interface Aktivitas {
  id: string;
  deskripsi: string;
  durasi_menit?: number;
  bahan?: string[];
  diferensiasi?: DiferensiasiAktivitas;
  tp_terukur?: string[];            // FK[] -> TujuanPembelajaran, aktivitas ini melatih/mengukur TP yang mana
}
```

## Diferensiasi — resolusi item keputusan yang sebelumnya terbuka

**Keputusan**: Opsi Hibrid (Opsi C dari catatan keputusan sebelumnya). Simpan granularitas penuh sesuai rubrik resmi, sediakan simplifikasi terkomputasi untuk UI guru yang butuh sinyal cepat.

```typescript
type KategoriResmi = 'MB' | 'BSH' | 'SB';  // Mulai Berkembang | Berkembang Sesuai Harapan | Sangat Berkembang

interface DiferensiasiAktivitas {
  rubrik: {                          // definisi kategori spesifik untuk aktivitas ini
    MB: string;
    BSH: string;
    SB: string;
  };

  kategori_per_murid?: Record<string, KategoriResmi>;  // muridId -> kategori, data TIDAK dikompresi di titik penyimpanan

  // Aturan simplifikasi untuk tampilan/trigger UI — default disediakan, BOLEH di-override per modul/satuan pendidikan
  aturan_simplifikasi?: {
    perlu_bantuan: KategoriResmi[];  // default: ['MB']
    sudah_bisa: KategoriResmi[];     // default: ['BSH', 'SB']
  };
}
```

**Kenapa ini, bukan tetap 2-field atau pindah total ke 3-field**: data 3-level resmi tidak pernah hilang (selesaikan kekhawatiran utama dari item keputusan), tapi guru yang ingin UI sederhana tetap dapat sinyal biner lewat `aturan_simplifikasi` — dan kalau satu satuan pendidikan merasa BSH perlu diperlakukan beda dari SB, mereka bisa override aturan tanpa mengubah skema.

## Asesmen — sub-struktur

```typescript
interface AsesmenAwal {
  bentuk: string;             // "kuis singkat", "observasi", dll
  pertanyaan_pemantik?: string[];
  hasil_dipetakan_ke: 'kategori_resmi';  // selalu pakai KategoriResmi, konsisten dgn Diferensiasi
}

interface AsesmenProses {
  tp_ref: string;              // FK -> TujuanPembelajaran yang diukur
  teknik: string;               // observasi, tanya-jawab, dll
  rubrik: Record<KategoriResmi, string>;
}

interface AsesmenAkhir {
  tp_refs: string[];            // bisa mengukur lebih dari 1 TP sekaligus
  bentuk: string;
  instrumen: {
    deskripsi: string;
    rubrik?: Record<KategoriResmi, string>;
  }[];
  validasi_cakupan: {           // WAJIB diisi — pelajaran dari verifikasi pilot Fase C
    tp_id: string;
    instrumen_cocok: boolean;
    catatan?: string;           // contoh nyata: "terjemahan ≠ menyusun kalimat sendiri, kurang tepat untuk TP ini"
  }[];
}
```

---

## Identity Key — aturan tunggal lintas fase

Format seragam: `{tipe}-{fase}-{kelas}-{nomor}` untuk TP, `{tipe}-{fase}-{elemen}` untuk CP. **Tidak ada lagi `pattern_id` vs `tp_id` vs `tp.id` yang berbeda makna** — satu field `id`, satu makna, di semua fase A-F tanpa kecuali.

---

## Yang sengaja TIDAK termasuk di skema ini

- Mekanisme offline-first / Service Worker caching — tetap pakai infrastruktur FLAF eksisting
- Sistem aktivasi & lisensi komersial — tetap pakai infrastruktur FLAF eksisting
- UI/komponen rendering spesifik — itu lapisan terpisah yang mengonsumsi skema ini, bukan bagian dari skema data

---

## Validasi terhadap pilot yang sudah kita bangun

Skema ini diuji **tiga kali** dengan karakter data yang sengaja berbeda-beda:

1. **Pilot Fase C Unit 1** (konten yang saya susun sendiri, data lengkap) — lolos tanpa friksi struktural.
2. **Referensi resmi Fase D "Speak Your Mind"** (konten independen resmi, data kaya) — 2 friksi struktural ditemukan & diperbaiki (v2).
3. **Fase A** (data paling minim yang ada, stress test sengaja) — 2 masalah desain ditemukan & diperbaiki (v3): penanganan elemen yang tidak berlaku, dan field wajib yang tidak realistis untuk data tidak lengkap.

Tiga uji dengan tiga karakter kegagalan berbeda (data buatan sendiri / data resmi kaya / data minim-tidak-lengkap) memberi keyakinan jauh lebih tinggi dibanding satu uji tunggal. Skema v3 ini sudah teruji terhadap rentang kondisi data nyata yang realistis akan ditemui saat membangun konten A-F sungguhan.
