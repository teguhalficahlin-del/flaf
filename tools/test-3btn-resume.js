/**
 * Playwright test: 3-button resume prompt + breadcrumb unmount fix
 * Usage: node tools/test-3btn-resume.js
 *
 * Tests A-F as specified in the validation plan.
 */

const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8768;
const BASE_URL = `http://localhost:${PORT}`;
const SECRET_SALT = '37be0cdb29d8aa263fcb77bbec7d06c043e7c6974f95795080c64cbd705e7d43';
const ROOT = path.resolve(__dirname, '..');
const SCREENSHOT_DIR = path.join(__dirname, 'screenshots-3btn');

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

if (!fs.existsSync(SCREENSHOT_DIR)) fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

const results = {};
function report(id, pass, detail) {
  results[id] = { pass, detail };
  console.log(`\n${'='.repeat(60)}`);
  console.log(`TEST ${id}: ${pass ? 'PASS ✅' : 'FAIL ❌'}`);
  console.log(detail);
  console.log('='.repeat(60));
}

async function screenshot(page, name) {
  const p = path.join(SCREENSHOT_DIR, `${name}.png`);
  await page.screenshot({ path: p, fullPage: false });
  return p;
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

async function startSesiSD(page) {
  await page.waitForTimeout(1000);
  const rombel = page.locator('#dash-root [data-action="pilih-rombel"][data-tingkat="1"]');
  if (await rombel.count() > 0) {
    await rombel.first().click();
    await page.waitForTimeout(2000);
  } else { return false; }
  const tp = page.locator('#dash-root [data-action="pilih-tp"]');
  if (await tp.count() > 0) {
    await tp.first().click();
    await page.waitForTimeout(2000);
  } else { return false; }
  const btnNext = page.locator('#dash-root .ds-step-btn--next');
  if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(1000); }
  if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(2000); }
  const mulai = page.locator('#sr-btn-mulai');
  if (await mulai.isVisible().catch(() => false)) { await mulai.click(); await page.waitForTimeout(2000); }
  return true;
}

async function startSesiSMP(page) {
  await page.waitForTimeout(1000);
  const rombel = page.locator('#dash-root [data-action="pilih-rombel"][data-tingkat="7"]');
  if (await rombel.count() > 0) {
    await rombel.first().click();
    await page.waitForTimeout(2000);
  } else { return false; }
  const tp = page.locator('#dash-root [data-action="pilih-tp"]');
  if (await tp.count() > 0) {
    await tp.first().click();
    await page.waitForTimeout(2000);
  } else { return false; }
  const btnNext = page.locator('#dash-root .ds-step-btn--next');
  if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(1000); }
  if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(2000); }
  const mulai = page.locator('#smp-btn-mulai');
  if (await mulai.isVisible().catch(() => false)) { await mulai.click(); await page.waitForTimeout(2000); }
  return true;
}

async function getIDBKey(page, key) {
  return page.evaluate(async (k) => {
    const db = await new Promise((res, rej) => {
      const req = indexedDB.open('flaf_db');
      req.onsuccess = () => res(req.result);
      req.onerror = () => rej(req.error);
    });
    return new Promise((res, rej) => {
      const tx = db.transaction('kv', 'readonly');
      const req = tx.objectStore('kv').get(k);
      req.onsuccess = () => res(req.result !== undefined ? req.result : null);
      req.onerror = () => rej(req.error);
    });
  }, key);
}

async function checkResumeButtons(page) {
  return page.evaluate(() => {
    const title = document.querySelector('.sr-resume-title')?.textContent?.trim() || null;
    const icon = document.querySelector('.sr-resume-icon')?.textContent?.trim() || null;
    const lanjut = document.getElementById('sr-btn-lanjut')?.textContent?.trim() || null;
    const ulang = document.getElementById('sr-btn-ulang')?.textContent?.trim() || null;
    const tpBaru = document.getElementById('sr-btn-tp-baru')?.textContent?.trim() || null;
    // bp_resume variants
    const bpYa = document.getElementById('sr-bp-ya')?.textContent?.trim() || null;
    const bpUlang = document.getElementById('sr-bp-ulang')?.textContent?.trim() || null;
    const bpTpBaru = document.getElementById('sr-bp-tp-baru')?.textContent?.trim() || null;
    return { title, icon, lanjut, ulang, tpBaru, bpYa, bpUlang, bpTpBaru };
  });
}

async function run() {
  const server = await startServer();
  console.log(`[SERVER] Listening on ${PORT}`);
  const browser = await chromium.launch({ headless: true });

  // ════════════════════════════════════════════════════════════
  // TEST A1: SD resume prompt shows 3 buttons
  // ════════════════════════════════════════════════════════════
  try {
    console.log('\n--- TEST A1: SD resume prompt — 3 buttons visible ---');
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await bootApp(page);
    await navToDashboard(page);
    const started = await startSesiSD(page);
    if (!started) { report('A1', false, 'Could not start SD sesi'); await ctx.close(); }
    else {
      // Navigate away and back to trigger resume
      await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-nilai'));
      await page.waitForTimeout(1500);
      await navToDashboard(page);
      await page.waitForTimeout(2000);

      await screenshot(page, 'A1-resume-3btn');
      const btns = await checkResumeButtons(page);
      const idbBefore = await getIDBKey(page, 'sesi_aktif');

      const has3 = btns.lanjut && btns.ulang && btns.tpBaru;
      report('A1', has3 && errors.length === 0,
        `Title: "${btns.title}", Icon: "${btns.icon}"\nButtons: "${btns.lanjut}" / "${btns.ulang}" / "${btns.tpBaru}"\nsesi_aktif in IDB: ${idbBefore ? 'EXISTS' : 'null'}\nErrors: ${errors.length}${errors.length > 0 ? '\n' + errors.join('\n') : ''}`);
      await ctx.close();
    }
  } catch (e) { report('A1', false, `Exception: ${e.message}`); }

  // ════════════════════════════════════════════════════════════
  // TEST A2: SD — "Mulai awal sesi" → Materi & Persiapan same TP
  // ════════════════════════════════════════════════════════════
  try {
    console.log('\n--- TEST A2: SD "Mulai awal sesi" → Materi & Persiapan ---');
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await bootApp(page);
    await navToDashboard(page);
    await startSesiSD(page);

    await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-nilai'));
    await page.waitForTimeout(1500);
    await navToDashboard(page);
    await page.waitForTimeout(2000);

    const idbBefore = await getIDBKey(page, 'sesi_aktif');
    await screenshot(page, 'A2-before-click');

    // Click "Mulai awal sesi"
    const ulangBtn = page.locator('#sr-btn-ulang');
    await ulangBtn.click();
    await page.waitForTimeout(3000);

    await screenshot(page, 'A2-after-mulai-awal');
    const idbAfter = await getIDBKey(page, 'sesi_aktif');
    const overlay = await page.evaluate(() => !!document.querySelector('.sr-overlay'));
    const breadcrumb = await page.evaluate(() => {
      const el = document.querySelector('.ds-breadcrumb, .ds-sesi-header');
      return el ? el.textContent.trim().substring(0, 100) : null;
    });
    const stepBody = await page.evaluate(() => {
      const el = document.querySelector('#ds-step-body');
      return el ? el.textContent.trim().substring(0, 80) : null;
    });
    // Check step indicator shows step 0 (Materi)
    const stepIndicator = await page.evaluate(() => {
      const dots = document.querySelectorAll('.ds-step-dot');
      if (!dots.length) return 'no dots';
      const active = document.querySelector('.ds-step-dot--active');
      return active ? active.textContent.trim() : 'no active dot';
    });

    report('A2', idbBefore !== null && idbAfter === null && !overlay && errors.length === 0,
      `IDB sesi_aktif: ${idbBefore ? 'EXISTS' : 'null'} → ${idbAfter ? 'STILL EXISTS ❌' : 'DELETED ✅'}\n.sr-overlay: ${overlay ? 'STILL IN DOM ❌' : 'clean ✅'}\nBreadcrumb: "${breadcrumb}"\nStep body: "${stepBody}"\nStep indicator active: "${stepIndicator}"\nErrors: ${errors.length}${errors.length > 0 ? '\n' + errors.join('\n') : ''}`);
    await ctx.close();
  } catch (e) { report('A2', false, `Exception: ${e.message}`); }

  // ════════════════════════════════════════════════════════════
  // TEST A3: SD — "Mulai TP Baru" → Pilih TP, checkpoint preserved
  // ════════════════════════════════════════════════════════════
  try {
    console.log('\n--- TEST A3: SD "Mulai TP Baru" → Pilih TP, checkpoint kept ---');
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await bootApp(page);
    await navToDashboard(page);
    await startSesiSD(page);

    await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-nilai'));
    await page.waitForTimeout(1500);
    await navToDashboard(page);
    await page.waitForTimeout(2000);

    const idbBefore = await getIDBKey(page, 'sesi_aktif');
    await screenshot(page, 'A3-before-click');

    // Click "Mulai TP Baru"
    const tpBaruBtn = page.locator('#sr-btn-tp-baru');
    await tpBaruBtn.click();
    await page.waitForTimeout(3000);

    await screenshot(page, 'A3-after-tp-baru');
    const idbAfter = await getIDBKey(page, 'sesi_aktif');
    const tpList = await page.locator('#dash-root [data-action="pilih-tp"]').count();

    // Navigate back to same TP — should show resume again
    const tp = page.locator('#dash-root [data-action="pilih-tp"]');
    if (await tp.count() > 0) {
      await tp.first().click();
      await page.waitForTimeout(2000);
      // Advance to step 2 where runtime mounts
      const btnNext = page.locator('#dash-root .ds-step-btn--next');
      if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(1000); }
      if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(2000); }
    }

    const resumeAgain = await checkResumeButtons(page);
    await screenshot(page, 'A3-resume-again');

    report('A3', idbAfter !== null && tpList > 0 && resumeAgain.lanjut !== null && errors.length === 0,
      `IDB sesi_aktif: ${idbBefore ? 'EXISTS' : 'null'} → ${idbAfter ? 'PRESERVED ✅' : 'DELETED ❌'}\nTP list visible: ${tpList} items\nResume prompt re-appeared: ${resumeAgain.lanjut ? 'YES ✅' : 'NO ❌'}\nErrors: ${errors.length}${errors.length > 0 ? '\n' + errors.join('\n') : ''}`);
    await ctx.close();
  } catch (e) { report('A3', false, `Exception: ${e.message}`); }

  // ════════════════════════════════════════════════════════════
  // TEST B1-B3: SD — bp_resume (📌 "Lanjutkan sesi?")
  // ════════════════════════════════════════════════════════════
  // B1: 3 buttons visible
  try {
    console.log('\n--- TEST B1: bp_resume — 3 buttons visible ---');
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await bootApp(page);
    await navToDashboard(page);

    // Pick SD rombel + TP-04 specifically
    const rombel = page.locator('#dash-root [data-action="pilih-rombel"][data-tingkat="1"]');
    await rombel.first().click();
    await page.waitForTimeout(2000);

    // Find TP-04 (nomor=4) — click it
    const tp4 = page.locator('#dash-root [data-action="pilih-tp"][data-nomor="4"]');
    if (await tp4.count() === 0) {
      // Fallback: pick first TP
      const tp = page.locator('#dash-root [data-action="pilih-tp"]');
      await tp.first().click();
    } else {
      await tp4.first().click();
    }
    await page.waitForTimeout(2000);

    // Get the TP id that was selected
    const tpInfo = await page.evaluate(() => {
      // Read _flow.tp from dashboard
      return { flowTp: window._flow?.tp || null };
    });

    // Inject bp_resume for this TP
    await page.evaluate(async () => {
      const db = await new Promise((res, rej) => {
        const req = indexedDB.open('flaf_db');
        req.onsuccess = () => res(req.result);
        req.onerror = () => rej(req.error);
      });
      // Get sesi_aktif to find TP id (if sesi hasn't started, we use tp-04 directly)
      await new Promise((res, rej) => {
        const tx = db.transaction('kv', 'readwrite');
        tx.objectStore('kv').put({
          tpId: 'tp-04',
          rombelId: 'kls_sd1',
          langkahId: 'inti-1',
          breakpointId: 'bp-test-001',
          savedAt: Date.now(),
        }, 'bp_resume');
        tx.oncomplete = res;
        tx.onerror = () => rej(tx.error);
      });
    });

    // Navigate to step 2 to mount sesi-runtime (which will check bp_resume)
    const btnNext = page.locator('#dash-root .ds-step-btn--next');
    if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(1000); }
    if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(2000); }

    await screenshot(page, 'B1-bp-resume-3btn');
    const btns = await checkResumeButtons(page);

    const has3 = btns.bpYa && btns.bpUlang && btns.bpTpBaru;
    report('B1', has3 && errors.length === 0,
      `Title: "${btns.title}", Icon: "${btns.icon}"\nButtons: "${btns.bpYa}" / "${btns.bpUlang}" / "${btns.bpTpBaru}"\nErrors: ${errors.length}${errors.length > 0 ? '\n' + errors.join('\n') : ''}`);
    await ctx.close();
  } catch (e) { report('B1', false, `Exception: ${e.message}`); }

  // B2: bp "Mulai awal sesi" → bp_resume deleted, landing Materi
  try {
    console.log('\n--- TEST B2: bp "Mulai awal sesi" → Materi & Persiapan ---');
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await bootApp(page);
    await navToDashboard(page);

    const rombel = page.locator('#dash-root [data-action="pilih-rombel"][data-tingkat="1"]');
    await rombel.first().click();
    await page.waitForTimeout(2000);
    const tp4 = page.locator('#dash-root [data-action="pilih-tp"][data-nomor="4"]');
    if (await tp4.count() > 0) { await tp4.first().click(); }
    else { await page.locator('#dash-root [data-action="pilih-tp"]').first().click(); }
    await page.waitForTimeout(2000);

    // Inject bp_resume
    await page.evaluate(async () => {
      const db = await new Promise((res, rej) => {
        const req = indexedDB.open('flaf_db');
        req.onsuccess = () => res(req.result);
        req.onerror = () => rej(req.error);
      });
      await new Promise((res, rej) => {
        const tx = db.transaction('kv', 'readwrite');
        tx.objectStore('kv').put({
          tpId: 'tp-04', rombelId: 'kls_sd1',
          langkahId: 'inti-1', breakpointId: 'bp-test-001',
          savedAt: Date.now(),
        }, 'bp_resume');
        tx.oncomplete = res;
        tx.onerror = () => rej(tx.error);
      });
    });

    const btnNext = page.locator('#dash-root .ds-step-btn--next');
    if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(1000); }
    if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(2000); }

    const idbBefore = await getIDBKey(page, 'bp_resume');
    await screenshot(page, 'B2-before-click');

    await page.locator('#sr-bp-ulang').click();
    await page.waitForTimeout(3000);

    await screenshot(page, 'B2-after-mulai-awal');
    const idbAfter = await getIDBKey(page, 'bp_resume');
    const overlay = await page.evaluate(() => !!document.querySelector('.sr-overlay'));

    report('B2', idbBefore !== null && idbAfter === null && !overlay && errors.length === 0,
      `bp_resume: ${idbBefore ? 'EXISTS' : 'null'} → ${idbAfter ? 'STILL EXISTS ❌' : 'DELETED ✅'}\n.sr-overlay: ${overlay ? 'STILL IN DOM ❌' : 'clean ✅'}\nErrors: ${errors.length}${errors.length > 0 ? '\n' + errors.join('\n') : ''}`);
    await ctx.close();
  } catch (e) { report('B2', false, `Exception: ${e.message}`); }

  // B3: bp "Mulai TP Baru" → bp_resume preserved
  try {
    console.log('\n--- TEST B3: bp "Mulai TP Baru" → bp_resume preserved ---');
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await bootApp(page);
    await navToDashboard(page);

    const rombel = page.locator('#dash-root [data-action="pilih-rombel"][data-tingkat="1"]');
    await rombel.first().click();
    await page.waitForTimeout(2000);
    const tp4 = page.locator('#dash-root [data-action="pilih-tp"][data-nomor="4"]');
    if (await tp4.count() > 0) { await tp4.first().click(); }
    else { await page.locator('#dash-root [data-action="pilih-tp"]').first().click(); }
    await page.waitForTimeout(2000);

    await page.evaluate(async () => {
      const db = await new Promise((res, rej) => {
        const req = indexedDB.open('flaf_db');
        req.onsuccess = () => res(req.result);
        req.onerror = () => rej(req.error);
      });
      await new Promise((res, rej) => {
        const tx = db.transaction('kv', 'readwrite');
        tx.objectStore('kv').put({
          tpId: 'tp-04', rombelId: 'kls_sd1',
          langkahId: 'inti-1', breakpointId: 'bp-test-001',
          savedAt: Date.now(),
        }, 'bp_resume');
        tx.oncomplete = res;
        tx.onerror = () => rej(tx.error);
      });
    });

    const btnNext = page.locator('#dash-root .ds-step-btn--next');
    if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(1000); }
    if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(2000); }

    await page.locator('#sr-bp-tp-baru').click();
    await page.waitForTimeout(3000);

    await screenshot(page, 'B3-after-tp-baru');
    const idbAfter = await getIDBKey(page, 'bp_resume');
    const tpList = await page.locator('#dash-root [data-action="pilih-tp"]').count();

    report('B3', idbAfter !== null && tpList > 0 && errors.length === 0,
      `bp_resume: ${idbAfter ? 'PRESERVED ✅' : 'DELETED ❌'}\nTP list visible: ${tpList} items\nErrors: ${errors.length}${errors.length > 0 ? '\n' + errors.join('\n') : ''}`);
    await ctx.close();
  } catch (e) { report('B3', false, `Exception: ${e.message}`); }

  // ════════════════════════════════════════════════════════════
  // TEST C1: SMP — tp.id ADA, "Mulai awal sesi"
  // ════════════════════════════════════════════════════════════
  try {
    console.log('\n--- TEST C1: SMP "Mulai awal sesi" (tp.id via metadata.tp_id) ---');
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await bootApp(page);
    await navToDashboard(page);
    await startSesiSMP(page);

    await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-nilai'));
    await page.waitForTimeout(1500);
    await navToDashboard(page);
    await page.waitForTimeout(2000);

    const idbBefore = await getIDBKey(page, 'sesi_aktif_smp');
    await screenshot(page, 'C1-before-click');

    const ulangBtn = page.locator('#sr-btn-ulang');
    if (await ulangBtn.isVisible().catch(() => false)) {
      await ulangBtn.click();
      await page.waitForTimeout(3000);
    }

    await screenshot(page, 'C1-after-mulai-awal');
    const idbAfter = await getIDBKey(page, 'sesi_aktif_smp');
    const breadcrumb = await page.evaluate(() => {
      const el = document.querySelector('.ds-breadcrumb, .ds-sesi-header');
      return el ? el.textContent.trim().substring(0, 100) : null;
    });
    const stepBody = await page.evaluate(() => {
      const el = document.querySelector('#ds-step-body');
      return el ? el.textContent.trim().substring(0, 80) : null;
    });

    report('C1', idbBefore !== null && idbAfter === null && errors.length === 0,
      `sesi_aktif_smp: ${idbBefore ? 'EXISTS' : 'null'} → ${idbAfter ? 'STILL EXISTS ❌' : 'DELETED ✅'}\nBreadcrumb: "${breadcrumb}"\nStep body: "${stepBody}"\nErrors: ${errors.length}${errors.length > 0 ? '\n' + errors.join('\n') : ''}`);
    await ctx.close();
  } catch (e) { report('C1', false, `Exception: ${e.message}`); }

  // ════════════════════════════════════════════════════════════
  // TEST C2: SMP — tp.id TIDAK ADA (hanya metadata.tp_id)
  // This is tested implicitly by C1 since SMP TPs don't have
  // top-level .id — they only have metadata.tp_id. The fallback
  // const id = _state.tp?.id ?? _state.tp?.metadata?.tp_id ?? ''
  // is what's being exercised.
  // ════════════════════════════════════════════════════════════
  try {
    console.log('\n--- TEST C2: SMP tp.id fallback verification ---');
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await bootApp(page);
    await navToDashboard(page);
    await startSesiSMP(page);

    // Verify tp structure — confirm no top-level .id
    const tpStructure = await page.evaluate(() => {
      // Access via sr-root data if possible, or check IDB
      return new Promise(async (res) => {
        const db = await new Promise((r, j) => {
          const req = indexedDB.open('flaf_db');
          req.onsuccess = () => r(req.result);
          req.onerror = () => j(req.error);
        });
        const saved = await new Promise((r) => {
          const tx = db.transaction('kv', 'readonly');
          const rq = tx.objectStore('kv').get('sesi_aktif_smp');
          rq.onsuccess = () => r(rq.result);
        });
        res({
          hasSaved: !!saved,
          tpNomor: saved?.tpNomor || null,
        });
      });
    });

    await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-nilai'));
    await page.waitForTimeout(1500);
    await navToDashboard(page);
    await page.waitForTimeout(2000);

    await screenshot(page, 'C2-resume-visible');

    const ulangBtn = page.locator('#sr-btn-ulang');
    if (await ulangBtn.isVisible().catch(() => false)) {
      await ulangBtn.click();
      await page.waitForTimeout(3000);
    }

    await screenshot(page, 'C2-after-mulai-awal');
    const idbAfter = await getIDBKey(page, 'sesi_aktif_smp');
    // Verify we landed on Materi & Persiapan (not a blank/crash page)
    const hasStepBody = await page.evaluate(() => {
      const el = document.querySelector('#ds-step-body');
      return el ? el.textContent.trim().length > 10 : false;
    });
    const hasError = errors.some(e => e.includes('Cannot read') || e.includes('null') || e.includes('undefined'));

    report('C2', idbAfter === null && hasStepBody && !hasError && errors.length === 0,
      `tp structure: ${JSON.stringify(tpStructure)}\nsesi_aktif_smp after: ${idbAfter ? 'STILL EXISTS ❌' : 'DELETED ✅'}\nStep body has content: ${hasStepBody ? 'YES ✅' : 'NO ❌ (possible crash)'}\nNull/undefined errors: ${hasError ? 'YES ❌' : 'NO ✅'}\nAll errors: ${errors.length}${errors.length > 0 ? '\n' + errors.join('\n') : ''}`);
    await ctx.close();
  } catch (e) { report('C2', false, `Exception: ${e.message}`); }

  // ════════════════════════════════════════════════════════════
  // TEST C3: SMP "Mulai TP Baru" → checkpoint preserved
  // ════════════════════════════════════════════════════════════
  try {
    console.log('\n--- TEST C3: SMP "Mulai TP Baru" → checkpoint preserved ---');
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await bootApp(page);
    await navToDashboard(page);
    await startSesiSMP(page);

    await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-nilai'));
    await page.waitForTimeout(1500);
    await navToDashboard(page);
    await page.waitForTimeout(2000);

    const idbBefore = await getIDBKey(page, 'sesi_aktif_smp');

    const tpBaruBtn = page.locator('#sr-btn-tp-baru');
    if (await tpBaruBtn.isVisible().catch(() => false)) {
      await tpBaruBtn.click();
      await page.waitForTimeout(3000);
    }

    await screenshot(page, 'C3-after-tp-baru');
    const idbAfter = await getIDBKey(page, 'sesi_aktif_smp');
    const tpList = await page.locator('#dash-root [data-action="pilih-tp"]').count();

    report('C3', idbAfter !== null && tpList > 0 && errors.length === 0,
      `sesi_aktif_smp: ${idbBefore ? 'EXISTS' : 'null'} → ${idbAfter ? 'PRESERVED ✅' : 'DELETED ❌'}\nTP list visible: ${tpList}\nErrors: ${errors.length}${errors.length > 0 ? '\n' + errors.join('\n') : ''}`);
    await ctx.close();
  } catch (e) { report('C3', false, `Exception: ${e.message}`); }

  // ════════════════════════════════════════════════════════════
  // TEST D1: Breadcrumb "← TP" from SD runtime — unmount clean
  // Breadcrumb is hidden when sesi-runtime is fullscreen at step 2,
  // so we call dashKePilihTP() via evaluate (simulating the click).
  // ════════════════════════════════════════════════════════════
  try {
    console.log('\n--- TEST D1: dashKePilihTP() from SD runtime ---');
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await bootApp(page);
    await navToDashboard(page);
    await startSesiSD(page);

    const srMounted = await page.evaluate(() => !!document.querySelector('#sr-root[data-mounted]'));
    await screenshot(page, 'D1-before-breadcrumb');

    await page.evaluate(() => window.dashKePilihTP());
    await page.waitForTimeout(3000);

    await screenshot(page, 'D1-after-breadcrumb');
    const overlay = await page.evaluate(() => !!document.querySelector('.sr-overlay'));
    const srRoot = await page.evaluate(() => {
      const el = document.querySelector('#sr-root');
      return el ? el.innerHTML.trim().length : 0;
    });
    const tpList = await page.locator('#dash-root [data-action="pilih-tp"]').count();

    report('D1', !overlay && srRoot === 0 && tpList > 0 && errors.length === 0,
      `SR was mounted: ${srMounted}\n.sr-overlay after: ${overlay ? 'STILL IN DOM ❌' : 'clean ✅'}\nsr-root innerHTML length: ${srRoot} (0 = unmounted ✅)\nTP list visible: ${tpList}\nErrors: ${errors.length}${errors.length > 0 ? '\n' + errors.join('\n') : ''}`);
    await ctx.close();
  } catch (e) { report('D1', false, `Exception: ${e.message}`); }

  // ════════════════════════════════════════════════════════════
  // TEST D2: dashKePilihTP() from SMP runtime — unmount clean
  // ════════════════════════════════════════════════════════════
  try {
    console.log('\n--- TEST D2: dashKePilihTP() from SMP runtime ---');
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await bootApp(page);
    await navToDashboard(page);
    await startSesiSMP(page);

    await screenshot(page, 'D2-before-breadcrumb');

    await page.evaluate(() => window.dashKePilihTP());
    await page.waitForTimeout(3000);

    await screenshot(page, 'D2-after-breadcrumb');
    const overlay = await page.evaluate(() => !!document.querySelector('.sr-overlay'));
    const srRoot = await page.evaluate(() => {
      const el = document.querySelector('#sr-root');
      return el ? el.innerHTML.trim().length : 0;
    });
    const tpList = await page.locator('#dash-root [data-action="pilih-tp"]').count();

    report('D2', !overlay && srRoot === 0 && tpList > 0 && errors.length === 0,
      `.sr-overlay: ${overlay ? 'STILL IN DOM ❌' : 'clean ✅'}\nsr-root innerHTML length: ${srRoot} (0 = unmounted ✅)\nTP list visible: ${tpList}\nErrors: ${errors.length}${errors.length > 0 ? '\n' + errors.join('\n') : ''}`);
    await ctx.close();
  } catch (e) { report('D2', false, `Exception: ${e.message}`); }

  // ════════════════════════════════════════════════════════════
  // TEST D3: Breadcrumb "← TP" from step 0 — regression check
  // At step 0, breadcrumb IS visible. Use the second .ds-btn-back
  // (first = "← Rombel", second = "← TP").
  // ════════════════════════════════════════════════════════════
  try {
    console.log('\n--- TEST D3: Breadcrumb ← TP from step 0 (no runtime) ---');
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await bootApp(page);
    await navToDashboard(page);

    const rombel = page.locator('#dash-root [data-action="pilih-rombel"][data-tingkat="1"]');
    await rombel.first().click();
    await page.waitForTimeout(2000);
    const tp = page.locator('#dash-root [data-action="pilih-tp"]');
    await tp.first().click();
    await page.waitForTimeout(2000);

    await screenshot(page, 'D3-at-step0');

    // Click second .ds-btn-back ("← TP")
    const tpBack = page.locator('.ds-btn-back:has-text("TP")');
    if (await tpBack.isVisible().catch(() => false)) {
      await tpBack.click();
      await page.waitForTimeout(3000);
    }

    await screenshot(page, 'D3-after-breadcrumb');
    const tpList = await page.locator('#dash-root [data-action="pilih-tp"]').count();

    report('D3', tpList > 0 && errors.length === 0,
      `TP list visible: ${tpList}\nErrors: ${errors.length}${errors.length > 0 ? '\n' + errors.join('\n') : ''}`);
    await ctx.close();
  } catch (e) { report('D3', false, `Exception: ${e.message}`); }

  // ════════════════════════════════════════════════════════════
  // TEST E: Double-tap / rapid click on all 9 buttons
  // ════════════════════════════════════════════════════════════
  // ════════════════════════════════════════════════════════════
  // TEST E: Double-tap via dispatchEvent (bypasses Playwright's
  // actionability checks which wait for enabled state)
  // ════════════════════════════════════════════════════════════

  // Helper: rapid double-click via DOM dispatchEvent
  async function rapidDoubleClick(page, selector) {
    return page.evaluate((sel) => {
      const el = document.querySelector(sel);
      if (!el) return 'NOT_FOUND';
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      return 'OK';
    }, selector);
  }

  // E1: SD resume buttons
  try {
    console.log('\n--- TEST E1: Double-tap SD resume buttons ---');
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await bootApp(page);
    await navToDashboard(page);
    await startSesiSD(page);
    await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-nilai'));
    await page.waitForTimeout(1500);
    await navToDashboard(page);
    await page.waitForTimeout(2000);

    const r1 = await rapidDoubleClick(page, '#sr-btn-lanjut');
    await page.waitForTimeout(2000);
    const errLanjut = [...errors];
    errors.length = 0;

    // Reset for ulang
    await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-nilai'));
    await page.waitForTimeout(1500);
    await navToDashboard(page);
    await page.waitForTimeout(2000);

    const r2 = await rapidDoubleClick(page, '#sr-btn-ulang');
    await page.waitForTimeout(2000);
    const errUlang = [...errors];
    errors.length = 0;

    // Reset for tp-baru
    await startSesiSD(page);
    await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-nilai'));
    await page.waitForTimeout(1500);
    await navToDashboard(page);
    await page.waitForTimeout(2000);

    const r3 = await rapidDoubleClick(page, '#sr-btn-tp-baru');
    await page.waitForTimeout(2000);
    const errTpBaru = [...errors];

    const totalErrors = errLanjut.length + errUlang.length + errTpBaru.length;
    report('E1', totalErrors === 0,
      `Lanjut(${r1}): ${errLanjut.length} errors\nMulai awal(${r2}): ${errUlang.length} errors\nTP Baru(${r3}): ${errTpBaru.length} errors${totalErrors > 0 ? '\n' + [...errLanjut, ...errUlang, ...errTpBaru].join('\n') : ''}`);
    await ctx.close();
  } catch (e) { report('E1', false, `Exception: ${e.message}`); }

  // E2: bp_resume buttons
  try {
    console.log('\n--- TEST E2: Double-tap bp_resume buttons ---');
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    async function setupBpResume() {
      await page.evaluate(async () => {
        const db = await new Promise((res, rej) => {
          const req = indexedDB.open('flaf_db'); req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error);
        });
        await new Promise((res, rej) => {
          const tx = db.transaction('kv', 'readwrite');
          tx.objectStore('kv').put({
            tpId: 'tp-01', rombelId: 'kls_sd1',
            langkahId: 'inti-1', breakpointId: 'bp-' + Date.now(),
            savedAt: Date.now(),
          }, 'bp_resume');
          tx.oncomplete = res; tx.onerror = () => rej(tx.error);
        });
      });
    }

    await bootApp(page);
    await navToDashboard(page);

    const rombel = page.locator('#dash-root [data-action="pilih-rombel"][data-tingkat="1"]');
    await rombel.first().click();
    await page.waitForTimeout(2000);
    await page.locator('#dash-root [data-action="pilih-tp"]').first().click();
    await page.waitForTimeout(2000);
    await setupBpResume();
    const btnNext = page.locator('#dash-root .ds-step-btn--next');
    if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(1000); }
    if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(2000); }

    const r1 = await rapidDoubleClick(page, '#sr-bp-ya');
    await page.waitForTimeout(2000);
    const errBpYa = [...errors];
    errors.length = 0;

    // Reset for bp-ulang
    await page.evaluate(() => window.dashKePilihTP());
    await page.waitForTimeout(2000);
    await page.locator('#dash-root [data-action="pilih-tp"]').first().click();
    await page.waitForTimeout(2000);
    await setupBpResume();
    if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(1000); }
    if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(2000); }

    const r2 = await rapidDoubleClick(page, '#sr-bp-ulang');
    await page.waitForTimeout(2000);
    const errBpUlang = [...errors];
    errors.length = 0;

    // Reset for bp-tp-baru
    await page.evaluate(() => window.dashKePilihTP());
    await page.waitForTimeout(2000);
    await page.locator('#dash-root [data-action="pilih-tp"]').first().click();
    await page.waitForTimeout(2000);
    await setupBpResume();
    if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(1000); }
    if (await btnNext.isVisible().catch(() => false)) { await btnNext.click(); await page.waitForTimeout(2000); }

    const r3 = await rapidDoubleClick(page, '#sr-bp-tp-baru');
    await page.waitForTimeout(2000);
    const errBpTpBaru = [...errors];

    const totalErrors = errBpYa.length + errBpUlang.length + errBpTpBaru.length;
    report('E2', totalErrors === 0,
      `bp Ya(${r1}): ${errBpYa.length} errors\nbp Mulai awal(${r2}): ${errBpUlang.length} errors\nbp TP Baru(${r3}): ${errBpTpBaru.length} errors${totalErrors > 0 ? '\n' + [...errBpYa, ...errBpUlang, ...errBpTpBaru].join('\n') : ''}`);
    await ctx.close();
  } catch (e) { report('E2', false, `Exception: ${e.message}`); }

  // E3: SMP resume buttons
  try {
    console.log('\n--- TEST E3: Double-tap SMP resume buttons ---');
    const ctx = await browser.newContext({ viewport: { width: 414, height: 896 } });
    const page = await ctx.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await bootApp(page);
    await navToDashboard(page);
    await startSesiSMP(page);
    await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-nilai'));
    await page.waitForTimeout(1500);
    await navToDashboard(page);
    await page.waitForTimeout(2000);

    const r1 = await rapidDoubleClick(page, '#sr-btn-lanjut');
    await page.waitForTimeout(2000);
    const errLanjut = [...errors];
    errors.length = 0;

    await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-nilai'));
    await page.waitForTimeout(1500);
    await navToDashboard(page);
    await page.waitForTimeout(2000);

    const r2 = await rapidDoubleClick(page, '#sr-btn-ulang');
    await page.waitForTimeout(2000);
    const errUlang = [...errors];
    errors.length = 0;

    await startSesiSMP(page);
    await page.evaluate(() => window.__FLAF_NAV__?.navigateTo('s-nilai'));
    await page.waitForTimeout(1500);
    await navToDashboard(page);
    await page.waitForTimeout(2000);

    const r3 = await rapidDoubleClick(page, '#sr-btn-tp-baru');
    await page.waitForTimeout(2000);
    const errTpBaru = [...errors];

    const totalErrors = errLanjut.length + errUlang.length + errTpBaru.length;
    report('E3', totalErrors === 0,
      `SMP Lanjut(${r1}): ${errLanjut.length} errors\nSMP Mulai awal(${r2}): ${errUlang.length} errors\nSMP TP Baru(${r3}): ${errTpBaru.length} errors${totalErrors > 0 ? '\n' + [...errLanjut, ...errUlang, ...errTpBaru].join('\n') : ''}`);
    await ctx.close();
  } catch (e) { report('E3', false, `Exception: ${e.message}`); }

  // ════════════════════════════════════════════════════════════
  // SUMMARY
  // ════════════════════════════════════════════════════════════
  console.log('\n' + '═'.repeat(60));
  console.log('SUMMARY');
  console.log('═'.repeat(60));
  for (const [id, r] of Object.entries(results)) {
    console.log(`  ${id}: ${r.pass ? 'PASS ✅' : 'FAIL ❌'}`);
  }
  const allPass = Object.values(results).every(r => r.pass);
  console.log(`\nOverall: ${allPass ? 'ALL PASS ✅' : 'SOME FAILED ❌'}`);
  console.log(`Screenshots: ${SCREENSHOT_DIR}`);
  console.log('═'.repeat(60));

  await browser.close();
  server.close();
  process.exit(allPass ? 0 : 1);
}

run().catch(e => { console.error('Fatal:', e); process.exit(1); });
