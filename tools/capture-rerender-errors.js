/*
 * SNIPPET CAPTURE ERROR — paste ke DevTools Console browser
 *
 * INSTRUKSI UNTUK ROMO:
 *
 * 1. Buka FLAF di browser (Chrome/Edge), login seperti biasa.
 *
 * 2. Tekan F12 → buka tab Console. Paste SELURUH isi snippet ini,
 *    tekan Enter. Akan muncul pesan "✅ Error capture aktif".
 *
 * 3. Mulai sesi mengajar (pilih rombel → pilih TP → klik Lanjut
 *    sampai masuk langkah Pembuka/Inti/Penutup — layar sesi aktif).
 *
 * 4. TANPA menutup sesi, klik cepat-cepat (rapid click) tombol
 *    navigasi bawah — berpindah antar layar Dashboard ↔ Nilai ↔
 *    Kurikulum ↔ Jejak. Lakukan minimal 10-15x klik secepat mungkin.
 *
 * 5. Setelah selesai klik-klik, ketik di Console:
 *      __dumpErrors()
 *    lalu Enter. Kalau ada error tertangkap, salin hasilnya
 *    (klik kanan → Copy All) dan kirim ke Claude.
 *    Kalau kosong, akan muncul "Tidak ada error tertangkap."
 */

// --- MULAI SNIPPET (paste dari sini) ---

(function() {
  if (window.__capturedErrors) {
    console.log('⚠️ Capture sudah aktif, reset array.');
    window.__capturedErrors = [];
    return;
  }

  window.__capturedErrors = [];

  // Wrap console.error — tetap log normal + capture
  const _origError = console.error;
  console.error = function(...args) {
    _origError.apply(console, args);
    window.__capturedErrors.push({
      type: 'console.error',
      message: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '),
      stack: new Error().stack,
      timestamp: new Date().toISOString(),
    });
  };

  // Sync errors
  window.addEventListener('error', function(e) {
    window.__capturedErrors.push({
      type: 'window.onerror',
      message: e.message,
      filename: e.filename,
      lineno: e.lineno,
      colno: e.colno,
      stack: e.error?.stack || '(no stack)',
      timestamp: new Date().toISOString(),
    });
  });

  // Async / Promise rejection
  window.addEventListener('unhandledrejection', function(e) {
    const reason = e.reason;
    window.__capturedErrors.push({
      type: 'unhandledrejection',
      message: reason?.message || String(reason),
      stack: reason?.stack || '(no stack)',
      timestamp: new Date().toISOString(),
    });
  });

  // Dump function
  window.__dumpErrors = function() {
    const errs = window.__capturedErrors;
    if (errs.length === 0) {
      console.log('Tidak ada error tertangkap.');
      return;
    }
    console.log(`=== ${errs.length} ERROR TERTANGKAP ===`);
    errs.forEach((e, i) => {
      console.log(`\n--- Error ${i + 1} [${e.type}] ${e.timestamp} ---`);
      console.log('Message:', e.message);
      if (e.filename) console.log(`File: ${e.filename}:${e.lineno}:${e.colno}`);
      console.log('Stack:', e.stack);
    });
    console.log('\n=== JSON (untuk copy-paste) ===');
    console.log(JSON.stringify(errs, null, 2));
  };

  console.log('✅ Error capture aktif. Setelah reproduce, ketik: __dumpErrors()');
})();

// --- AKHIR SNIPPET ---
