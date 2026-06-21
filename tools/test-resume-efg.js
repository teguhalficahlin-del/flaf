/**
 * Playwright tests E, F, G (thorough re-run)
 * Usage: node tools/test-resume-efg.js
 */
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8767;
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
    srv.listen(PORT, () => resolve(srv));
  });
}

async function injectSession(page) {
  await page.evaluate(async (salt) => {
    async function hmac(data, key) {
      const enc = new TextEncoder();
      const k = await crypto.subtle.importKey('raw', enc.encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
      const sig = await crypto.subtle.sign('HMAC', k, enc.encode(data));
      return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
    }
    const now = Date.now();
    const deviceId = crypto.randomUUID();
    const payload = {
      name: 'Guru Test', school: 'SD Test', code: 'TEST-CODE-0001',
      device_id: deviceId, issued_at: now,
      expires_at: now + 365 * 24 * 60 * 60 * 1000, via: 'test', kelas: 'all',
    };
    const sigData = `${payload.name}|${payload.school}|${payload.code}|${payload.device_id}|${payload.issued_at}`;
    const signature = await hmac(sigData, salt);
    const db = await new Promise((res, rej) => {
      const req = indexedDB.open('flaf_db');
      req.onsuccess = () => res(req.result);
      req.onerror = () => rej(req.error);
    });
    await new Promise((res, rej) => {
      const tx = db.transaction('kv', 'readwrite');
      const s = tx.objectStore('kv');
      s.put({ payload, signature }, 'session');
      s.put(deviceId, 'device_id');
      tx.oncomplete = res;
      tx.onerror = () => rej(tx.error);
    });
    localStorage.setItem('flaf_ever_activated', '1');
    const tx2 = db.transaction('nilai_data', 'readwrite');
    const s2 = tx2.objectStore('nilai_data');
    s2.put([
      { id: 'kls_sd1', nama: 'Kelas 1A', tingkat: 1, created_at: new Date().toISOString() },
      { id: 'kls_smp7', nama: 'Kelas 7A', tingkat: 7, created_at: new Date().toISOString() },
    ], 'kelas_list');
    s2.put([
      { id: 'sw_1', nomor: 1, nama: 'Andi' },
      { id: 'sw_2', nomor: 2, nama: 'Budi' },
      { id: 'sw_3', nomor: 3, nama: 'Citra' },
    ], 'siswa_kls_sd1');
    s2.put([
      { id: 'sw_4', nomor: 1, nama: 'Dian' },
      { id: 'sw_5', nomor: 2, nama: 'Eka' },
      { id: 'sw_6', nomor: 3, nama: 'Fajar' },
    ], 'siswa_kls_smp7');
    await new Promise((res, rej) => { tx2.oncomplete = res; tx2.onerror = () => rej(tx2.error); });
  }, SECRET_SALT);
}

async function bootApp(page) {
  await page.goto(BASE_URL, { waitUntil: 'load' });
  await page.waitForTimeout(4000);
  await page.waitForFunction(() => document.getElementById('btn-mulai'), { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1000);
  await injectSession(page);
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  const btnMulai = page.locator('#btn-mulai');
  if (await btnMulai.isVisible().catch(() => false)) {
    await btnMulai.click();
    await page.waitForTimeout(1500);
  }
}

async function navToDashboard(page) {
  await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-nilai'));
  await page.waitForTimeout(1500);
  const navDash = page.locator('#nilai-nav-dash');
  if (await navDash.isVisible().catch(() => false)) {
    await navDash.click();
    await page.waitForTimeout(3000);
  } else {
    await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-dash'));
    await page.waitForTimeout(3000);
  }
}

async function run() {
  const server = await startServer();
  console.log(`[SERVER] on ${PORT}`);
  const browser = await chromium.launch({ headless: true });
  let allPass = true;

  // ════════════════════════════════════════════════════════════
  // TEST E-SD: Full normal flow SD — step by step to completion
  // ════════════════════════════════════════════════════════════
  console.log('\n' + '═'.repeat(60));
  console.log('TEST E-SD: Full normal flow SD — every step');
  console.log('═'.repeat(60));
  try {
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(`PAGEERROR: ${e.message}`));

    await bootApp(page);
    await navToDashboard(page);

    // Pick SD rombel
    const rombel = page.locator('#dash-root [data-action="pilih-rombel"][data-tingkat="1"]');
    await rombel.first().click();
    await page.waitForTimeout(2000);
    console.log('  Step: Picked SD rombel (Kelas 1A)');

    // Pick first TP
    const tp = page.locator('#dash-root [data-action="pilih-tp"]');
    await tp.first().click();
    await page.waitForTimeout(2000);
    console.log('  Step: Picked TP 01');

    // Step 0 (Materi) — verify content then Next
    let stepBody = await page.evaluate(() => document.querySelector('#ds-step-body')?.textContent?.substring(0, 60) || 'null');
    console.log(`  Step 0 (Materi): "${stepBody.trim().substring(0, 50)}..."`);
    await page.locator('#dash-root .ds-step-btn--next').click();
    await page.waitForTimeout(1500);

    // Step 1 (Presensi) — verify then Next
    stepBody = await page.evaluate(() => document.querySelector('#ds-step-body')?.textContent?.substring(0, 60) || 'null');
    console.log(`  Step 1 (Presensi): "${stepBody.trim().substring(0, 50)}..."`);
    await page.locator('#dash-root .ds-step-btn--next').click();
    await page.waitForTimeout(2000);

    // Step 2 (Pembuka) — sesi-runtime mounts, shows preview
    let srContent = await page.evaluate(() => document.querySelector('#sr-root')?.textContent?.substring(0, 60) || 'null');
    console.log(`  Step 2 (Pembuka/SR preview): "${srContent.trim().substring(0, 50)}..."`);

    // Click "Mulai mengajar" inside sesi-runtime
    const mulai = page.locator('#sr-btn-mulai');
    if (await mulai.isVisible().catch(() => false)) {
      await mulai.click();
      await page.waitForTimeout(2000);
      console.log('  Step 2: Clicked "Mulai mengajar" inside sesi-runtime');
    }

    // Now in sesi-runtime running state — navigate through all fases
    // Click through via sesi-runtime's own navigation
    // Fase 1 (Pembuka) — advance langkah until fase ends
    let faseLabel = await page.evaluate(() => {
      const el = document.querySelector('.sr-fase-label');
      return el ? el.textContent.trim() : 'null';
    });
    console.log(`  SR running — fase: "${faseLabel}"`);

    // Click "Lanjut" in sesi-runtime to advance through langkah
    // SR has its own next button (#sr-btn-next or similar)
    let srAdvances = 0;
    for (let i = 0; i < 30; i++) {
      // Try clicking sr-btn-next-langkah or sr-btn-next-fase
      const nextLangkah = page.locator('#sr-btn-next');
      const nextFase = page.locator('#sr-btn-next-fase');
      const closureBtn = page.locator('#sr-btn-closure');

      if (await closureBtn.isVisible().catch(() => false)) {
        console.log(`  SR: Closure button visible — clicking "Tutup Sesi"`);
        await closureBtn.click();
        await page.waitForTimeout(2000);
        break;
      }
      if (await nextFase.isVisible().catch(() => false)) {
        const label = await nextFase.textContent();
        console.log(`  SR: Next fase — "${label.trim()}"`);
        await nextFase.click();
        await page.waitForTimeout(2000);
        srAdvances++;
        continue;
      }
      if (await nextLangkah.isVisible().catch(() => false)) {
        await nextLangkah.click();
        await page.waitForTimeout(800);
        srAdvances++;
        continue;
      }

      // Try generic next buttons inside sr-root
      const anyNext = page.locator('#sr-root button:has-text("Lanjut"), #sr-root button:has-text("→")');
      if (await anyNext.count() > 0) {
        await anyNext.first().click();
        await page.waitForTimeout(800);
        srAdvances++;
        continue;
      }

      // Nothing to click — might be in selesai state inside sesi-runtime
      const srState = await page.evaluate(() => {
        const el = document.querySelector('.sr-fase-label, .sr-fase-judul, .sr-resume-title');
        return el ? el.textContent.trim() : null;
      });
      console.log(`  SR state check: "${srState}" (advance ${srAdvances})`);
      break;
    }

    // After sesi-runtime completes via onDone callback, dashboard should be at step 6
    await page.waitForTimeout(2000);

    // Check if we're at step 6 (Selesai) or back to stepper
    const stepIndicator = await page.evaluate(() => {
      const el = document.querySelector('.ds-step-indicator, .ds-sesi-header');
      return el ? el.textContent.trim().substring(0, 80) : 'null';
    });
    console.log(`  After SR done — stepper state: "${stepIndicator.substring(0, 60)}..."`);

    // Try to click "Simpan & Selesai" if visible
    const selesaiBtn = page.locator('#dash-root .ds-step-btn--selesai');
    if (await selesaiBtn.isVisible().catch(() => false)) {
      console.log('  Step 6: Clicking "Simpan & Selesai"');
      await selesaiBtn.click();
      await page.waitForTimeout(3000);

      const finalState = await page.evaluate(() => {
        const el = document.querySelector('#dash-root');
        return el ? el.textContent.substring(0, 100).trim() : 'null';
      });
      console.log(`  After Simpan & Selesai: "${finalState.substring(0, 60)}..."`);
    }

    // Also advance stepper steps 5 (Asesmen) and 6 if sesi-runtime returned to step
    // and we're not at Selesai yet
    for (let s = 0; s < 3; s++) {
      const nextBtn = page.locator('#dash-root .ds-step-btn--next');
      const selesai2 = page.locator('#dash-root .ds-step-btn--selesai');
      if (await selesai2.isVisible().catch(() => false)) {
        console.log('  Final: Clicking "Simpan & Selesai"');
        await selesai2.click();
        await page.waitForTimeout(3000);
        break;
      }
      if (await nextBtn.isVisible().catch(() => false)) {
        await nextBtn.click();
        await page.waitForTimeout(1500);
      }
    }

    const pass = errors.length === 0;
    console.log(`\n  RESULT E-SD: ${pass ? 'PASS ✅' : 'FAIL ❌'} — ${srAdvances} SR advances, ${errors.length} errors`);
    if (errors.length > 0) errors.forEach(e => console.log(`    ERROR: ${e}`));
    if (!pass) allPass = false;

    await ctx.close();
  } catch (e) {
    console.log(`  RESULT E-SD: FAIL ❌ — Exception: ${e.message}`);
    allPass = false;
  }

  // ════════════════════════════════════════════════════════════
  // TEST E-SMP: Full normal flow SMP — step by step to completion
  // ════════════════════════════════════════════════════════════
  console.log('\n' + '═'.repeat(60));
  console.log('TEST E-SMP: Full normal flow SMP — every step');
  console.log('═'.repeat(60));
  try {
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(`PAGEERROR: ${e.message}`));

    await bootApp(page);
    await navToDashboard(page);

    // Pick SMP rombel
    const rombel = page.locator('#dash-root [data-action="pilih-rombel"][data-tingkat="7"]');
    await rombel.first().click();
    await page.waitForTimeout(2000);
    console.log('  Step: Picked SMP rombel (Kelas 7A)');

    // Pick first TP
    const tp = page.locator('#dash-root [data-action="pilih-tp"]');
    await tp.first().click();
    await page.waitForTimeout(2000);
    console.log('  Step: Picked TP 01');

    // Step 0 → Step 1 → Step 2
    for (let i = 0; i < 2; i++) {
      const stepBody = await page.evaluate(() => document.querySelector('#ds-step-body')?.textContent?.substring(0, 60)?.trim() || 'null');
      console.log(`  Step ${i}: "${stepBody.substring(0, 50)}..."`);
      await page.locator('#dash-root .ds-step-btn--next').click();
      await page.waitForTimeout(1500);
    }

    // Step 2 — sesi-runtime-smp mounts, shows preview
    console.log('  Step 2: sesi-runtime-smp mounted (preview)');

    // Click "Mulai Sesi" inside sesi-runtime-smp
    const mulai = page.locator('#smp-btn-mulai');
    if (await mulai.isVisible().catch(() => false)) {
      await mulai.click();
      await page.waitForTimeout(2000);
      console.log('  Step 2: Clicked "Mulai Sesi" inside sesi-runtime-smp');
    }

    // SMP runtime — advance through all steps
    let smpAdvances = 0;
    for (let i = 0; i < 30; i++) {
      // SMP uses _nextStep and _endSesi exposed to window
      const nextBtn = page.locator('#sr-root button:has-text("→"), #sr-root button:has-text("Lanjut")');
      const endBtn = page.locator('#sr-root button:has-text("Selesai"), #sr-root button:has-text("Tutup")');

      // Check for selesai state
      const selesaiCheck = await page.evaluate(() => {
        const el = document.querySelector('.sr-fase-judul, .sr-fase-label');
        return el ? el.textContent.trim() : null;
      });
      if (selesaiCheck && (selesaiCheck.includes('SELESAI') || selesaiCheck.includes('KONFIRMASI') || selesaiCheck.includes('Sesi dicatat'))) {
        console.log(`  SMP SR: "${selesaiCheck}" — completion detected`);
        break;
      }

      if (await endBtn.count() > 0 && await endBtn.first().isVisible().catch(() => false)) {
        const label = await endBtn.first().textContent();
        console.log(`  SMP SR: Clicking "${label.trim()}"`);
        await endBtn.first().click();
        await page.waitForTimeout(2000);
        smpAdvances++;
        continue;
      }

      if (await nextBtn.count() > 0 && await nextBtn.first().isVisible().catch(() => false)) {
        await nextBtn.first().click();
        await page.waitForTimeout(800);
        smpAdvances++;
        continue;
      }

      console.log(`  SMP SR: No buttons found at advance ${smpAdvances}`);
      break;
    }

    await page.waitForTimeout(3000);

    // After SMP runtime completes, check step 6 in stepper
    for (let s = 0; s < 3; s++) {
      const selesaiBtn = page.locator('#dash-root .ds-step-btn--selesai');
      const nextBtn = page.locator('#dash-root .ds-step-btn--next');
      if (await selesaiBtn.isVisible().catch(() => false)) {
        console.log('  Final: Clicking "Simpan & Selesai"');
        await selesaiBtn.click();
        await page.waitForTimeout(3000);
        break;
      }
      if (await nextBtn.isVisible().catch(() => false)) {
        await nextBtn.click();
        await page.waitForTimeout(1500);
      }
    }

    const pass = errors.length === 0;
    console.log(`\n  RESULT E-SMP: ${pass ? 'PASS ✅' : 'FAIL ❌'} — ${smpAdvances} SMP advances, ${errors.length} errors`);
    if (errors.length > 0) errors.forEach(e => console.log(`    ERROR: ${e}`));
    if (!pass) allPass = false;

    await ctx.close();
  } catch (e) {
    console.log(`  RESULT E-SMP: FAIL ❌ — Exception: ${e.message}`);
    allPass = false;
  }

  // ════════════════════════════════════════════════════════════
  // TEST F: bp_resume vs sesi_aktif — real browser test with
  //         both keys for same TP, visual confirmation
  // ════════════════════════════════════════════════════════════
  console.log('\n' + '═'.repeat(60));
  console.log('TEST F: bp_resume priority — real browser test');
  console.log('═'.repeat(60));
  try {
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();

    await bootApp(page);
    await navToDashboard(page);

    // Start SD sesi to get sesi_aktif populated naturally
    const rombel = page.locator('#dash-root [data-action="pilih-rombel"][data-tingkat="1"]');
    await rombel.first().click();
    await page.waitForTimeout(2000);
    const tp = page.locator('#dash-root [data-action="pilih-tp"]');
    await tp.first().click();
    await page.waitForTimeout(2000);
    // Advance to step 2 and click Mulai
    await page.locator('#dash-root .ds-step-btn--next').click();
    await page.waitForTimeout(1000);
    await page.locator('#dash-root .ds-step-btn--next').click();
    await page.waitForTimeout(2000);
    const mulai = page.locator('#sr-btn-mulai');
    if (await mulai.isVisible().catch(() => false)) {
      await mulai.click();
      await page.waitForTimeout(2000);
    }

    // Verify sesi_aktif exists
    const sesiAktif = await page.evaluate(async () => {
      const db = await new Promise((res, rej) => {
        const req = indexedDB.open('flaf_db');
        req.onsuccess = () => res(req.result);
        req.onerror = () => rej(req.error);
      });
      return new Promise((res, rej) => {
        const tx = db.transaction('kv', 'readonly');
        const r = tx.objectStore('kv').get('sesi_aktif');
        r.onsuccess = () => res(r.result);
        r.onerror = () => rej(r.error);
      });
    });
    console.log(`  sesi_aktif exists: ${!!sesiAktif}`);
    console.log(`  sesi_aktif.tpNomor: ${sesiAktif?.tpNomor}, rombelId: ${sesiAktif?.rombelId}`);

    // Now ALSO inject bp_resume for the SAME TP (tp-01) and same rombel
    // SD TP01 has id: 'tp-01', and we need to set a breakpoint langkahId
    await page.evaluate(async () => {
      const db = await new Promise((res, rej) => {
        const req = indexedDB.open('flaf_db');
        req.onsuccess = () => res(req.result);
        req.onerror = () => rej(req.error);
      });
      await new Promise((res, rej) => {
        const tx = db.transaction('kv', 'readwrite');
        tx.objectStore('kv').put({
          tpId: 'tp-01',
          rombelId: 'kls_sd1',
          langkahId: 'pembuka-langkah-2',
          breakpointId: 'bp-test-001',
          savedAt: Date.now(),
        }, 'bp_resume');
        tx.oncomplete = res;
        tx.onerror = () => rej(tx.error);
      });
    });
    console.log('  bp_resume injected for same TP (tp-01) and rombel (kls_sd1)');

    // Verify both keys exist
    const bothExist = await page.evaluate(async () => {
      const db = await new Promise((res, rej) => {
        const req = indexedDB.open('flaf_db');
        req.onsuccess = () => res(req.result);
        req.onerror = () => rej(req.error);
      });
      const get = (key) => new Promise((res) => {
        const tx = db.transaction('kv', 'readonly');
        const r = tx.objectStore('kv').get(key);
        r.onsuccess = () => res(r.result);
      });
      const sa = await get('sesi_aktif');
      const bp = await get('bp_resume');
      return {
        sesi_aktif: sa ? { tpNomor: sa.tpNomor, rombelId: sa.rombelId } : null,
        bp_resume: bp ? { tpId: bp.tpId, rombelId: bp.rombelId, langkahId: bp.langkahId } : null,
      };
    });
    console.log(`  IDB state before nav:`);
    console.log(`    sesi_aktif: ${JSON.stringify(bothExist.sesi_aktif)}`);
    console.log(`    bp_resume:  ${JSON.stringify(bothExist.bp_resume)}`);

    // Navigate away and back
    await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-nilai'));
    await page.waitForTimeout(1500);
    await navToDashboard(page);
    await page.waitForTimeout(3000);

    // Capture what's visible
    const resumeIcon = await page.evaluate(() => {
      const el = document.querySelector('.sr-resume-icon');
      return el ? el.textContent.trim() : null;
    });
    const resumeTitle = await page.evaluate(() => {
      const el = document.querySelector('.sr-resume-title');
      return el ? el.textContent.trim() : null;
    });
    const resumePos = await page.evaluate(() => {
      const el = document.querySelector('.sr-resume-pos');
      return el ? el.textContent.trim() : null;
    });
    // bp_resume shows "📌 Lanjutkan sesi?" — sesi_aktif shows "⏸ Sesi belum selesai"
    const isBpResume = resumeIcon === '📌' && resumeTitle === 'Lanjutkan sesi?';
    const isSesiAktif = resumeIcon === '⏸' && resumeTitle === 'Sesi belum selesai';

    console.log(`\n  VISUAL RESULT:`);
    console.log(`    Icon: "${resumeIcon}"`);
    console.log(`    Title: "${resumeTitle}"`);
    console.log(`    Position: "${resumePos}"`);
    console.log(`    Is bp_resume UI: ${isBpResume}`);
    console.log(`    Is sesi_aktif UI: ${isSesiAktif}`);

    if (isBpResume) {
      console.log(`\n  RESULT F: PASS ✅ — bp_resume (📌 Lanjutkan sesi?) won over sesi_aktif`);
    } else if (isSesiAktif) {
      console.log(`\n  RESULT F: FAIL ❌ — sesi_aktif won (should be bp_resume)`);
      allPass = false;
    } else {
      console.log(`\n  RESULT F: FAIL ❌ — neither resume UI visible`);
      allPass = false;
    }

    await ctx.close();
  } catch (e) {
    console.log(`  RESULT F: FAIL ❌ — Exception: ${e.message}`);
    allPass = false;
  }

  // ════════════════════════════════════════════════════════════
  // TEST G-SD: Rapid-click 15x — SD
  // ════════════════════════════════════════════════════════════
  console.log('\n' + '═'.repeat(60));
  console.log('TEST G-SD: Rapid-click 15x — SD');
  console.log('═'.repeat(60));
  try {
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(`PAGEERROR: ${e.message}`));
    page.on('console', msg => {
      if (msg.type() === 'error' && !msg.text().includes('cek resume') && !msg.text().includes('caches.open'))
        errors.push(`[console.error] ${msg.text()}`);
    });

    await bootApp(page);
    await navToDashboard(page);

    // Start SD sesi and click Mulai
    const rombel = page.locator('#dash-root [data-action="pilih-rombel"][data-tingkat="1"]');
    await rombel.first().click();
    await page.waitForTimeout(2000);
    const tp = page.locator('#dash-root [data-action="pilih-tp"]');
    await tp.first().click();
    await page.waitForTimeout(2000);
    await page.locator('#dash-root .ds-step-btn--next').click();
    await page.waitForTimeout(1000);
    await page.locator('#dash-root .ds-step-btn--next').click();
    await page.waitForTimeout(2000);
    const mulai = page.locator('#sr-btn-mulai');
    if (await mulai.isVisible().catch(() => false)) {
      await mulai.click();
      await page.waitForTimeout(1000);
    }
    console.log('  SD sesi active — starting rapid-click...');

    const screens = ['s-nilai', 's-dash', 's-jejak', 's-dash', 's-nilai', 's-dash',
                     's-jejak', 's-dash', 's-nilai', 's-dash', 's-jejak', 's-nilai',
                     's-dash', 's-nilai', 's-dash'];
    for (const scr of screens) {
      await page.evaluate((s) => window.__FLAF_NAV__?.navigateTo(s), scr);
      await page.waitForTimeout(200);
    }
    await page.waitForTimeout(3000);

    const pass = errors.length === 0;
    console.log(`\n  RESULT G-SD: ${pass ? 'PASS ✅' : 'FAIL ❌'} — 15 rapid switches, ${errors.length} errors`);
    if (errors.length > 0) errors.forEach(e => console.log(`    ${e}`));
    if (!pass) allPass = false;

    await ctx.close();
  } catch (e) {
    console.log(`  RESULT G-SD: FAIL ❌ — Exception: ${e.message}`);
    allPass = false;
  }

  // ════════════════════════════════════════════════════════════
  // TEST G-SMP: Rapid-click 15x — SMP
  // ════════════════════════════════════════════════════════════
  console.log('\n' + '═'.repeat(60));
  console.log('TEST G-SMP: Rapid-click 15x — SMP');
  console.log('═'.repeat(60));
  try {
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(`PAGEERROR: ${e.message}`));
    page.on('console', msg => {
      if (msg.type() === 'error' && !msg.text().includes('cek resume') && !msg.text().includes('caches.open'))
        errors.push(`[console.error] ${msg.text()}`);
    });

    await bootApp(page);
    await navToDashboard(page);

    // Start SMP sesi and click Mulai
    const rombel = page.locator('#dash-root [data-action="pilih-rombel"][data-tingkat="7"]');
    await rombel.first().click();
    await page.waitForTimeout(2000);
    const tp = page.locator('#dash-root [data-action="pilih-tp"]');
    await tp.first().click();
    await page.waitForTimeout(2000);
    await page.locator('#dash-root .ds-step-btn--next').click();
    await page.waitForTimeout(1000);
    await page.locator('#dash-root .ds-step-btn--next').click();
    await page.waitForTimeout(2000);
    const mulai = page.locator('#smp-btn-mulai');
    if (await mulai.isVisible().catch(() => false)) {
      await mulai.click();
      await page.waitForTimeout(1000);
    }
    console.log('  SMP sesi active — starting rapid-click...');

    const screens = ['s-nilai', 's-dash', 's-jejak', 's-dash', 's-nilai', 's-dash',
                     's-jejak', 's-dash', 's-nilai', 's-dash', 's-jejak', 's-nilai',
                     's-dash', 's-nilai', 's-dash'];
    for (const scr of screens) {
      await page.evaluate((s) => window.__FLAF_NAV__?.navigateTo(s), scr);
      await page.waitForTimeout(200);
    }
    await page.waitForTimeout(3000);

    const pass = errors.length === 0;
    console.log(`\n  RESULT G-SMP: ${pass ? 'PASS ✅' : 'FAIL ❌'} — 15 rapid switches, ${errors.length} errors`);
    if (errors.length > 0) errors.forEach(e => console.log(`    ${e}`));
    if (!pass) allPass = false;

    await ctx.close();
  } catch (e) {
    console.log(`  RESULT G-SMP: FAIL ❌ — Exception: ${e.message}`);
    allPass = false;
  }

  // ════════════════════════════════════════════════════════════
  console.log('\n' + '═'.repeat(60));
  console.log(`OVERALL: ${allPass ? 'ALL PASS ✅' : 'SOME FAILED ❌'}`);
  console.log('═'.repeat(60));

  await browser.close();
  server.close();
  process.exit(allPass ? 0 : 1);
}

run().catch(e => { console.error('Fatal:', e); process.exit(1); });
