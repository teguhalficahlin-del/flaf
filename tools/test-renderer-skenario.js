const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const BASE = 'http://localhost:3000/test-skenario.html';

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', err => consoleErrors.push('[pageerror] ' + err.message));

  const results = [];

  function pass(tc, note = '') { results.push({ tc, status: 'PASS', note }); }
  function fail(tc, note)       { results.push({ tc, status: 'FAIL', note }); }

  // ── Load page ──────────────────────────────────────────────────────
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  // TC-1: Renderer skenario aktif
  try {
    // Check skenarioMode indicator or skenario-specific elements
    const hasSkenarioEl = await page.locator('[class*="sk-"], [data-skenario], .skenario-block, .sk-step, .sk-intro, .sk-instruksi').count();
    const hasStepHeader = await page.locator('text=/PERSIAPAN|SIAPKAN KELAS|MODEL|REPEAT|CHANGE|INTERACT|SHARE|CHECK|BOOST/i').count();
    const statusText = await page.locator('#status').textContent().catch(() => '');
    const bodyText = await page.locator('body').textContent();

    // Check no old runtime[] fallback is primary (old runtime uses .langkah-item or .step-card)
    const hasOldRuntime = await page.locator('.langkah-item, .step-card').count();

    const skenarioActive = hasSkenarioEl > 0 || hasStepHeader > 0 || bodyText.includes('skenario') || statusText.includes('skenario');

    if (skenarioActive) pass('TC-1', `Skenario renderer aktif. Elemen: ${hasSkenarioEl}, header: ${hasStepHeader}`);
    else fail('TC-1', `Tidak ada indikator renderer skenario. Status: "${statusText.slice(0,100)}"`);

    if (hasOldRuntime > 0) fail('TC-1b', `Ditemukan elemen runtime[] lama: ${hasOldRuntime} elemen`);
    else pass('TC-1b', 'Tidak ada elemen runtime[] lama sebagai primary');
  } catch (e) {
    fail('TC-1', e.message);
  }

  // TC-2: UCAP transisi deterministik
  try {
    // Navigate to CHANGE step — look for nav button or step navigation
    // First check current text on page for the deterministik UCAP
    let bodyText = await page.locator('body').textContent();

    // Navigate through steps to reach CHANGE
    // Try clicking "Lanjut" / next button repeatedly up to 10 times
    let found = false;
    for (let i = 0; i < 15; i++) {
      bodyText = await page.locator('body').textContent();
      if (bodyText.includes('Stay where you are. I will show you your partner') ||
          bodyText.includes('Stay where you are. I will show you your group')) {
        found = true;
        break;
      }
      // Check for bad string
      if (bodyText.includes('Now find a partner') || bodyText.includes('Now form a group of three or four')) {
        fail('TC-2', `UCAP non-deterministik masih ditemukan: "${bodyText.match(/Now find a partner|Now form a group of three or four/)?.[0]}"`);
        found = 'bad';
        break;
      }
      // Try next step
      const nextBtn = page.locator('button').filter({ hasText: /lanjut|next|→|▶/i }).first();
      const hasNext = await nextBtn.count();
      if (hasNext) await nextBtn.click();
      else {
        // Try clicking any navigation forward
        const anyBtn = page.locator('button[onclick*="_nextStep"], button[onclick*="next"]').first();
        if (await anyBtn.count()) await anyBtn.click();
        else break;
      }
      await page.waitForTimeout(400);
    }

    if (found === true) pass('TC-2', 'Teks deterministik ditemukan: "Stay where you are. I will show you your partner/group."');
    else if (found !== 'bad') fail('TC-2', 'Teks deterministik tidak ditemukan setelah 15 navigasi — langkah CHANGE belum tercapai atau teks tidak tampil di DOM');
  } catch (e) {
    fail('TC-2', e.message);
  }

  // Reload untuk TC-3..6 dari awal
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  // TC-3: TTS button per UCAP
  try {
    const ttsButtons = await page.locator('button').filter({ hasText: '🔊' }).count();
    const ttsButtons2 = await page.locator('.smp-tts-btn').count();
    const total = ttsButtons + ttsButtons2;

    if (total > 0) pass('TC-3', `Ditemukan ${total} tombol TTS 🔊 (button:${ttsButtons}, .smp-tts-btn:${ttsButtons2})`);
    else fail('TC-3', `Tidak ada tombol TTS (class smp-tts-btn atau 🔊) di langkah pertama`);
  } catch (e) {
    fail('TC-3', e.message);
  }

  // TC-4: REPEAT navigasi — navigasi ke step REPEAT
  try {
    let found = false;
    for (let i = 0; i < 10; i++) {
      const bodyText = await page.locator('body').textContent();
      // Counter kalimat pola "1 / 3" atau "Kalimat 1"
      if (/\b1\s*\/\s*\d\b|Kalimat\s+1|kalimat ke/i.test(bodyText)) {
        // Check prev/next buttons
        const navBtns = await page.locator('button[onclick*="RepeatNav"], button[onclick*="repeatNav"], button').filter({ hasText: /←|→|prev|next|sebelum|lanjut/i }).count();
        pass('TC-4', `Counter kalimat ditemukan. Tombol navigasi: ${navBtns}`);
        found = true;
        break;
      }
      const nextBtn = page.locator('button').filter({ hasText: /lanjut|next|→/i }).first();
      if (await nextBtn.count()) await nextBtn.click();
      else break;
      await page.waitForTimeout(400);
    }
    if (!found) fail('TC-4', 'Tidak menemukan counter kalimat REPEAT setelah 10 navigasi');
  } catch (e) {
    fail('TC-4', e.message);
  }

  // TC-5: CHECK dua jalur
  try {
    // Reload and navigate to CHECK step
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);

    let found = false;
    for (let i = 0; i < 20; i++) {
      const bodyText = await page.locator('body').textContent();
      if (/jalur.*lancar|lancar.*jalur|belum lancar|sudah lancar/i.test(bodyText) ||
          bodyText.includes('Lancar') && bodyText.includes('Belum') ||
          /CHECK/i.test(bodyText) && /jalur/i.test(bodyText)) {
        const btnLancar = await page.locator('button').filter({ hasText: /lancar/i }).count();
        pass('TC-5', `Dua jalur CHECK ditemukan. Tombol jalur: ${btnLancar}`);
        found = true;
        break;
      }
      const nextBtn = page.locator('button').filter({ hasText: /lanjut|next|→/i }).first();
      if (await nextBtn.count()) await nextBtn.click();
      else break;
      await page.waitForTimeout(300);
    }
    if (!found) fail('TC-5', 'Langkah CHECK dengan dua jalur tidak tercapai setelah 20 navigasi');
  } catch (e) {
    fail('TC-5', e.message);
  }

  // TC-6: Console errors
  if (consoleErrors.length === 0) pass('TC-6', '0 console error');
  else fail('TC-6', `${consoleErrors.length} console error:\n  ${consoleErrors.slice(0,5).join('\n  ')}`);

  // ── Report ──────────────────────────────────────────────────────────
  console.log('\n=== LAPORAN TEST RENDERER SKENARIO FASE D ===\n');
  for (const r of results) {
    const icon = r.status === 'PASS' ? '✅' : '❌';
    console.log(`${icon} ${r.tc}: ${r.status}`);
    if (r.note) console.log(`   Catatan: ${r.note}`);
  }
  const passed = results.filter(r => r.status === 'PASS').length;
  const failed = results.filter(r => r.status === 'FAIL').length;
  console.log(`\nTotal: ${passed} PASS, ${failed} FAIL`);

  await browser.close();
  process.exit(failed > 0 ? 1 : 0);
})();
