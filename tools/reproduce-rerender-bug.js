/**
 * Playwright script to reproduce _rerenderStep crash bug.
 * Usage: npx playwright test tools/reproduce-rerender-bug.js --headed
 *        OR: node tools/reproduce-rerender-bug.js
 *
 * Prerequisites: http-server running on port 8765
 *   npx http-server -p 8765 --cors -c-1 -s
 */

const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8765;
const BASE_URL = `http://localhost:${PORT}`;
const SECRET_SALT = '37be0cdb29d8aa263fcb77bbec7d06c043e7c6974f95795080c64cbd705e7d43';
const ROOT = path.resolve(__dirname, '..');

function startServer() {
  return new Promise((resolve) => {
    const mime = {'.html':'text/html','.js':'application/javascript','.mjs':'application/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.ico':'image/x-icon','.svg':'image/svg+xml','.woff2':'font/woff2','.webp':'image/webp','.webmanifest':'application/manifest+json'};
    const srv = http.createServer((req, res) => {
      let p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
      if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
      const ext = path.extname(p);
      fs.readFile(p, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, {'Content-Type': mime[ext] || 'application/octet-stream', 'Cache-Control': 'no-store'});
        res.end(data);
      });
    });
    srv.listen(PORT, () => { console.log(`[SERVER] Listening on ${PORT}`); resolve(srv); });
  });
}

async function run() {
  const server = await startServer();
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: { width: 414, height: 896 } });
  const page = await context.newPage();

  // Collect ALL console errors
  const consoleErrors = [];
  const consoleWarnings = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push({ text: msg.text(), location: msg.location() });
    }
    if (msg.type() === 'warning') {
      consoleWarnings.push({ text: msg.text() });
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push({ text: `PAGEERROR: ${err.message}`, stack: err.stack });
  });

  console.log('[1] Loading app...');
  await page.goto(BASE_URL, { waitUntil: 'load' });
  // Wait for IDB init and app to fully settle (SW may cause navigation)
  await page.waitForTimeout(4000);
  await page.waitForFunction(() => document.getElementById('btn-mulai'), { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1000);

  // Inject session into IDB
  console.log('[2] Injecting session into IDB...');
  await page.evaluate(async (salt) => {
    // HMAC-SHA256
    async function hmac(data, key) {
      const enc = new TextEncoder();
      const k = await crypto.subtle.importKey('raw', enc.encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
      const sig = await crypto.subtle.sign('HMAC', k, enc.encode(data));
      return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    const now = Date.now();
    // Generate device_id and store in IDB kv store (same as app does)
    const deviceId = crypto.randomUUID();

    const payload = {
      name: 'Guru Test',
      school: 'SD Test',
      code: 'TEST-CODE-0001',
      device_id: deviceId,
      issued_at: now,
      expires_at: now + 365 * 24 * 60 * 60 * 1000,
      via: 'test',
      kelas: 'all',
    };

    const sigData = `${payload.name}|${payload.school}|${payload.code}|${payload.device_id}|${payload.issued_at}`;
    const signature = await hmac(sigData, salt);

    // Write directly to IDB
    const db = await new Promise((resolve, reject) => {
      const req = indexedDB.open('flaf_db');
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });

    await new Promise((resolve, reject) => {
      const tx = db.transaction('kv', 'readwrite');
      const store = tx.objectStore('kv');
      store.put({ payload, signature }, 'session');
      store.put(deviceId, 'device_id');
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });

    localStorage.setItem('flaf_ever_activated', '1');

    // Seed kelas and siswa data
    const kelasSD = {
      id: 'kls_sd1', nama: 'Kelas 1A', tingkat: 1,
      created_at: new Date().toISOString(),
    };
    const kelasSMP = {
      id: 'kls_smp7', nama: 'Kelas 7A', tingkat: 7,
      created_at: new Date().toISOString(),
    };
    const kelasList = [kelasSD, kelasSMP];

    const siswaSD = [
      { id: 'sw_1', nomor: 1, nama: 'Andi' },
      { id: 'sw_2', nomor: 2, nama: 'Budi' },
      { id: 'sw_3', nomor: 3, nama: 'Citra' },
    ];
    const siswaSMP = [
      { id: 'sw_4', nomor: 1, nama: 'Dian' },
      { id: 'sw_5', nomor: 2, nama: 'Eka' },
      { id: 'sw_6', nomor: 3, nama: 'Fajar' },
    ];

    // Write to IDB nilai_data store
    const tx2 = db.transaction('nilai_data', 'readwrite');
    const store2 = tx2.objectStore('nilai_data');
    store2.put(kelasList, 'kelas_list');
    store2.put(siswaSD, 'siswa_kls_sd1');
    store2.put(siswaSMP, 'siswa_kls_smp7');
    await new Promise((resolve, reject) => {
      tx2.oncomplete = resolve;
      tx2.onerror = () => reject(tx2.error);
    });

    console.log('[INJECT] Session + kelas + siswa injected successfully');
  }, SECRET_SALT);

  // Reload to pick up session
  console.log('[3] Reloading to pick up session...');
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Click MULAI
  console.log('[4] Clicking MULAI...');
  const btnMulai = page.locator('#btn-mulai');
  if (await btnMulai.isVisible()) {
    await btnMulai.click();
    await page.waitForTimeout(1000);
  } else {
    console.log('  btn-mulai not visible, maybe already at s-start');
  }

  // Navigate AWAY first (to s-nilai or s-jadwal), then BACK to s-dash
  // This triggers _onScreenEnter → _initDashboard → renderDashboard naturally
  // Dump any console messages so far
  console.log(`  Console errors so far: ${consoleErrors.length}`);
  consoleErrors.forEach((e, i) => console.log(`  [boot-err-${i}] ${e.text}`));
  consoleWarnings.forEach((e, i) => console.log(`  [boot-warn-${i}] ${e.text}`));

  // Debug: check current screen state
  const activeScreen = await page.evaluate(() => {
    const active = document.querySelector('.screen-active');
    return active ? active.id : 'none';
  });
  console.log(`  Active screen: ${activeScreen}`);
  const visibleBtns = await page.evaluate(() => {
    const ids = ['btn-go-dash','btn-go-nilai','btn-go-jadwal','btn-go-jejak'];
    return ids.filter(id => {
      const el = document.getElementById(id);
      return el && !el.closest('[hidden]');
    });
  });
  console.log(`  Visible nav buttons: ${JSON.stringify(visibleBtns)}`);

  console.log('[5] Navigating to Nilai first (trigger natural screen enter)...');
  const btnNilai = page.locator('#btn-go-nilai');
  const nilaiVisible = await btnNilai.isVisible().catch(() => false);
  console.log(`  btn-go-nilai visible: ${nilaiVisible}`);
  if (nilaiVisible) {
    await btnNilai.click();
    await page.waitForTimeout(1500);
  }

  // Capture all console messages around dashboard nav
  const allMsgs = [];
  const msgHandler = msg => allMsgs.push(`[${msg.type()}] ${msg.text()}`);
  page.on('console', msgHandler);

  // Check current screen after nilai nav
  const screenAfterNilai = await page.evaluate(() => document.querySelector('.screen-active')?.id || 'none');
  console.log(`  Screen after Nilai click: ${screenAfterNilai}`);

  console.log('[5b] Now navigating to Dashboard (triggers _onScreenEnter)...');
  // From Nilai screen, use its nav bar to go to Dashboard
  const navDash = page.locator('#nilai-nav-dash');
  const navDashVisible = await navDash.isVisible().catch(() => false);
  console.log(`  #nilai-nav-dash visible: ${navDashVisible}`);
  if (navDashVisible) {
    await navDash.click();
    // Wait for renderDashboard to finish (it's async, loads data)
    await page.waitForTimeout(6000);
    const screenAfterDash = await page.evaluate(() => document.querySelector('.screen-active')?.id || 'none');
    console.log(`  Screen after Dashboard click: ${screenAfterDash}`);
  }

  // Dump all console msgs during dashboard render
  console.log(`  Console messages during dashboard render: ${allMsgs.length}`);
  allMsgs.forEach(m => console.log(`    ${m}`));
  page.off('console', msgHandler);

  // Check dashboard content
  console.log('[6] Checking dashboard after natural navigation...');
  const dashContent = await page.locator('#dash-root').innerHTML().catch(() => 'NOT FOUND');
  console.log(`  Dashboard content length: ${dashContent.length}`);

  // Look for rombel buttons WITHIN dashboard only
  const rombelBtns = page.locator('#dash-root [data-action="pilih-rombel"]');
  const rombelCount = await rombelBtns.count();
  console.log(`  Rombel buttons found: ${rombelCount}`);

  if (rombelCount === 0) {
    console.log(`  Dashboard HTML (first 500): ${dashContent.slice(0, 500)}`);
  }

  if (rombelCount > 0) {
    // Click first rombel (SD — tingkat 1)
    const sdRombel = page.locator('#dash-root [data-action="pilih-rombel"][data-tingkat="1"]').first();
    const sdExists = await sdRombel.count() > 0;
    if (sdExists) {
      console.log(`  Clicking SD rombel: ${await sdRombel.getAttribute('data-nama')}`);
      await sdRombel.click();
    } else {
      console.log(`  No SD rombel, clicking first available`);
      await rombelBtns.first().click();
    }
    await page.waitForTimeout(1500);

    await page.waitForTimeout(2000);
    // Debug: dump dash-root content after rombel click
    const afterRombel = await page.locator('#dash-root').innerHTML().catch(() => 'NOT FOUND');
    console.log(`  After rombel click HTML (first 300): ${afterRombel.slice(0, 300)}`);
    // TP items use data-action="pilih-tp"
    const tpCards = page.locator('[data-action="pilih-tp"]');
    const tpCount = await tpCards.count();
    console.log(`  TP cards found: ${tpCount}`);

    if (tpCount > 0) {
      await tpCards.first().click();
      await page.waitForTimeout(1500);
    }
  }

  // Check if stepper is visible (sesi aktif)
  const stepNav = page.locator('#ds-step-nav');
  const stepVisible = await stepNav.isVisible().catch(() => false);
  console.log(`  Step nav visible: ${stepVisible}`);

  if (stepVisible) {
    // Advance to step 2 (Pembuka — sesi-runtime mounts)
    console.log('[7] Advancing stepper to step 2 (runtime mount)...');
    // Step 0 → 1 (Presensi)
    let nextBtn = page.locator('.ds-step-btn--next');
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click();
      await page.waitForTimeout(1000);
      console.log('  Step 0→1 done');
    }
    // Step 1 → 2 (Pembuka — runtime mount!)
    nextBtn = page.locator('.ds-step-btn--next');
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click();
      await page.waitForTimeout(2000); // wait for srMount
      console.log('  Step 1→2 done (runtime should be mounted)');
    }
    // Verify sr-root exists
    const srRoot = await page.locator('#sr-root').count();
    console.log(`  #sr-root present: ${srRoot > 0}`);
    const stepIdx = await page.evaluate(() => window._skenario?.stepIndex ?? 'N/A').catch(() => 'N/A');
    console.log(`  _skenario.stepIndex: ${stepIdx}`);
  }

  // ==== SCENARIO SD: Rapid-click navigation between screens ====
  console.log('\n===== SCENARIO SD: RAPID-CLICK NAVIGATION =====');
  console.log('[8] Starting rapid-click navigation (sesi aktif di background)...');

  // Cycle: dash → nilai → dash → jadwal → dash → jejak → dash → ...
  // Key: returning to dash triggers _initDashboard → renderDashboard
  // while sesi-runtime is still conceptually active
  const screens = ['s-nilai', 's-dash', 's-jadwal', 's-dash', 's-jejak', 's-dash', 's-nilai', 's-dash'];

  // Clear errors before test
  consoleErrors.length = 0;

  // Rapid navigation 30 times with <100ms interval
  for (let i = 0; i < 30; i++) {
    const target = screens[i % screens.length];
    await page.evaluate((s) => window.__FLAF_NAV__?.navigateTo(s), target).catch(() => {});
    await page.waitForTimeout(50 + Math.random() * 50); // 50-100ms
  }

  // Wait for async errors to settle
  await page.waitForTimeout(3000);

  console.log(`\n[SD RESULTS] Console errors: ${consoleErrors.length}`);
  consoleErrors.forEach((e, i) => {
    console.log(`\n--- Error ${i + 1} ---`);
    console.log(e.text);
    if (e.stack) console.log(e.stack);
    if (e.location) console.log(`  at ${e.location.url}:${e.location.lineNumber}:${e.location.columnNumber}`);
  });

  // Save SD errors
  const sdErrors = [...consoleErrors];

  // ==== SCENARIO SMP: Need to start SMP sesi ====
  console.log('\n\n===== SCENARIO SMP: RAPID-CLICK NAVIGATION =====');
  consoleErrors.length = 0;

  // Navigate to dashboard first
  const activeNow = await page.evaluate(() => document.querySelector('.screen-active')?.id || 'none');
  console.log(`  Current screen: ${activeNow}`);
  // Navigate to dashboard via JS
  await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-dash'));
  await page.waitForTimeout(3000);

  // Go back to landing to pick SMP rombel
  await page.evaluate(() => { if (window.dashKeLanding) window.dashKeLanding(); });
  await page.waitForTimeout(1500);

  // Click SMP rombel (tingkat 7)
  const smpRombel = page.locator('#dash-root [data-action="pilih-rombel"][data-tingkat="7"]').first();
  const smpExists = await smpRombel.count() > 0;
  console.log(`  SMP rombel (tingkat 7) found: ${smpExists}`);

  if (smpExists) {
    await smpRombel.click();
    await page.waitForTimeout(2000);

    const tpCards = page.locator('[data-action="pilih-tp"]');
    const tpCount = await tpCards.count();
    console.log(`  SMP TP cards found: ${tpCount}`);

    if (tpCount > 0) {
      await tpCards.first().click();
      await page.waitForTimeout(1500);

      // Advance to runtime step
      for (let i = 0; i < 2; i++) {
        const nextBtn = page.locator('.ds-step-btn--next');
        if (await nextBtn.isVisible().catch(() => false)) {
          await nextBtn.click();
          await page.waitForTimeout(800);
        }
      }
    }

    // Rapid navigation
    for (let i = 0; i < 20; i++) {
      const target = screens[i % screens.length];
      await page.evaluate((s) => window.__FLAF_NAV__?.navigateTo(s), target).catch(() => {});
      await page.waitForTimeout(80 + Math.random() * 40);
    }
    await page.waitForTimeout(3000);
  } else {
    console.log('  No SMP rombel found — skipping SMP scenario');
  }

  const smpErrors = [...consoleErrors];
  console.log(`\n[SMP RESULTS] Console errors: ${smpErrors.length}`);
  smpErrors.forEach((e, i) => {
    console.log(`\n--- Error ${i + 1} ---`);
    console.log(e.text);
    if (e.stack) console.log(e.stack);
    if (e.location) console.log(`  at ${e.location.url}:${e.location.lineNumber}:${e.location.columnNumber}`);
  });

  // Summary
  console.log('\n\n===== SUMMARY =====');
  console.log(`SD scenario errors: ${sdErrors.length}`);
  console.log(`SMP scenario errors: ${smpErrors.length}`);
  console.log(`Total unique error messages: ${new Set([...sdErrors, ...smpErrors].map(e => e.text)).size}`);

  // Close
  console.log('\n[DONE] Closing browser and server.');
  await browser.close();
  server.close();
}

run().catch(err => {
  console.error('Script failed:', err);
  process.exit(1);
});
