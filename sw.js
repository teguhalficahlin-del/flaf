// ============================================================
// FLAF — Service Worker Produksi
// WAJIB update CACHE_VERSION setiap deploy
// ============================================================

const CACHE_VERSION  = 'flaf-v52';          // ← paksa refresh cache nilai.js
const PDF_CACHE_NAME = 'flaf-pdf-v1';

const APP_SHELL = [
  './',
  './index.html',
  './app.js',
  './style.css',
  './manifest.json',
  // screens
  './screens/activation.js',
  './screens/kurikulum.js',
  './screens/dashboard.js',
  './screens/jejak.js',
  './screens/nilai.js',
  './screens/kurikulum.css',

  // storage
  './storage/db.js',
  './storage/logger.js',
  './storage/export.js',
  './storage/jejak.js',
  './storage/nilai.js',
  './storage/presensi.js',

  // data
  './data/index.js',
  './data/fase-a.js',

  // modules
  './modules/pdf-handler.js',
  './modules/pdf-generator.js',

  // assets
  './icons/icon-192.png',

  // secrets.js sengaja TIDAK masuk precache
  // karena berisi credentials Supabase — hanya dimuat saat runtime
];

const PDF_MANIFEST = [
  './pdf/tp-01-v1.pdf',
  './pdf/tp-02-v1.pdf',
  './pdf/tp-03-v1.pdf',
  './pdf/tp-04-v1.pdf',
  './pdf/tp-05-v1.pdf',
  './pdf/tp-06-v1.pdf',
  './pdf/tp-07-v1.pdf',
  './pdf/tp-08-v1.pdf',
  './pdf/tp-09-v1.pdf',
  './pdf/tp-10-v1.pdf',
  './pdf/tp-11-v1.pdf',
  './pdf/tp-12-v1.pdf',
  './pdf/tp-13-v1.pdf',
  './pdf/tp-14-v1.pdf',
  './pdf/tp-15-v1.pdf',
  './pdf/tp-16-v1.pdf',
  './pdf/tp-17-v1.pdf',
  './pdf/tp-18-v1.pdf',
];

// Network-only: Supabase + CDN eksternal (jsPDF, dll)
// CDN di-exclude agar tidak cache-miss error saat offline —
// jsPDF hanya dipakai saat aktif download, bukan fungsi inti offline
const NETWORK_ONLY_PATTERNS = [
  /supabase\.co/,
  /\.supabase\./,
  /cdnjs\.cloudflare\.com/,   // ← jsPDF CDN
  /cdn\.jsdelivr\.net/,       // CDN lain yang mungkin dipakai
  /unpkg\.com/,
];

const FONT_PATTERNS = [
  /fonts\.googleapis\.com/,
  /fonts\.gstatic\.com/,
];

const PDF_PATTERN = /\/pdf\/tp-\d{2}-v\d+\.pdf$/;
const MAX_PDF_VERSIONS = 2;

// ============================================================
// INSTALL
// ============================================================
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(async cache => {
      await cache.addAll(APP_SHELL);
      const test = await cache.match('/index.html');
      if (!test) {
        console.error('[SW] FATAL: index.html tidak masuk cache');
      }
    })
  );
  self.skipWaiting();
});

// ============================================================
// ACTIVATE
// ============================================================
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    for (const k of keys) {
      if (k !== CACHE_VERSION && k !== PDF_CACHE_NAME) {
        await caches.delete(k);
      }
    }
    await self.clients.claim();
    broadcastToClients({ type: 'SW_ACTIVATED', version: CACHE_VERSION });
  })());
});

// ============================================================
// FETCH — Routing
// ============================================================
self.addEventListener('fetch', event => {
  const { request } = event;

  if (
    request.method === 'GET' &&
    (
      request.mode === 'navigate' ||
      (request.headers.get('accept') || '').includes('text/html')
    )
  ) {
    event.respondWith(handleNavigationRequest(request));
    return;
  }

  const url = new URL(request.url);
  if (request.method !== 'GET') return;
  if (!url.protocol.startsWith('http')) return;

  // 1. Network-only: Supabase + CDN eksternal (termasuk jsPDF)
  if (NETWORK_ONLY_PATTERNS.some(p => p.test(request.url))) {
    event.respondWith(networkOnly(request));
    return;
  }

  // 2. Cache-first: Google Fonts
  if (FONT_PATTERNS.some(p => p.test(request.url))) {
    event.respondWith(cacheFirst(request, 'flaf-fonts'));
    return;
  }

  // 3. Cache-first: PDF
  if (PDF_PATTERN.test(url.pathname)) {
    event.respondWith(cacheFirstPDF(request));
    return;
  }

  // 4. Stale-while-revalidate: Data fase
  if (url.pathname.startsWith('/data/')) {
    event.respondWith(
      caches.open(CACHE_VERSION).then(async cache => {
        const cached = await cache.match(request);
        const fetchPromise = fetch(request).then(res => {
          if (res.ok) cache.put(request, res.clone());
          return res;
        }).catch(() => null);
        return cached || fetchPromise || new Response(
          JSON.stringify({ error: 'offline-data-missing', url: request.url }),
          { status: 503, headers: { 'Content-Type': 'application/json' } }
        );
      })
    );
    return;
  }

  // 5. Cache-first: semua resource lain (app shell)
  event.respondWith(cacheFirstAppShell(request));
});

// ============================================================
// STRATEGY: Network-only
// ============================================================
async function networkOnly(request) {
  try {
    return await fetch(request);
  } catch {
    return new Response(JSON.stringify({ error: 'offline', url: request.url }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// ============================================================
// STRATEGY: Cache-first (umum)
// ============================================================
async function cacheFirst(request, cacheName = CACHE_VERSION) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Offline — resource tidak tersedia', { status: 503 });
  }
}

// ============================================================
// STRATEGY: Cache-first untuk app shell
// ============================================================
async function cacheFirstAppShell(request) {
  const url = new URL(request.url);

  let cached =
    await caches.match(request) ||
    await caches.match(url.pathname) ||
    await caches.match(url.pathname.replace(/^\//, ''));

  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_VERSION);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    if (request.mode === 'navigate') {
      const fallback = await caches.match('/index.html');
      if (fallback) return fallback;
    }
    return new Response('Offline — app tidak tersedia', { status: 503 });
  }
}

// ============================================================
// STRATEGY: Cache-first PDF
// ============================================================
async function cacheFirstPDF(request) {
  const pdfCache = await caches.open(PDF_CACHE_NAME);
  const cached   = await pdfCache.match(request);

  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      await pdfCache.put(request, response.clone());
      await cleanupOldPDFVersions(pdfCache, request.url);
    }
    return response;
  } catch {
    return new Response(
      JSON.stringify({ error: 'PDF tidak tersedia offline', url: request.url }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// ============================================================
// PDF CLEANUP
// ============================================================
async function cleanupOldPDFVersions(cache, currentUrl) {
  try {
    const match = currentUrl.match(/\/pdf\/(tp-\d{2})-v\d+\.pdf$/);
    if (!match) return;

    const baseName  = match[1];
    const keys      = await cache.keys();
    const versions  = keys
      .map(req => req.url)
      .filter(url => new RegExp(`/pdf/${baseName}-v(\\d+)\\.pdf$`).test(url))
      .map(url => ({ url, version: parseInt(url.match(/v(\d+)\.pdf$/)[1]) }))
      .sort((a, b) => b.version - a.version);

    const toDelete = versions.slice(MAX_PDF_VERSIONS);
    for (const item of toDelete) {
      await cache.delete(item.url);
    }

    if (toDelete.length > 0) {
      broadcastToClients({
        type   : 'PDF_CLEANUP',
        deleted: toDelete.map(i => i.url),
        kept   : versions.slice(0, MAX_PDF_VERSIONS).map(i => i.url),
      });
    }
  } catch (err) {
    console.warn('[SW] PDF cleanup error:', err.message);
  }
}

// ============================================================
// PRECACHE ALL PDF
// Payload per progress: { current, total, filename, status }
// Konsisten dengan yang dibaca app.js _onPDFPrecacheProgress
// ============================================================
async function precacheAllPDF() {
  const pdfCache = await caches.open(PDF_CACHE_NAME);
  const total    = PDF_MANIFEST.length;
  let processed  = 0;
  let failed     = 0;

  broadcastToClients({ type: 'PDF_PRECACHE_START', total, timestamp: Date.now() });

  for (let i = 0; i < PDF_MANIFEST.length; i++) {
    const pdfPath = PDF_MANIFEST[i];
    const current = i + 1;

    const existing = await pdfCache.match(pdfPath);
    if (existing) {
      processed++;
      broadcastToClients({
        type    : 'PDF_PRECACHE_PROGRESS',
        current,
        total,
        filename: pdfPath,
        status  : 'cached',
      });
      continue;
    }

    try {
      const response = await fetch(pdfPath);
      if (response.ok) {
        await pdfCache.put(pdfPath, response.clone());
        processed++;
        broadcastToClients({
          type    : 'PDF_PRECACHE_PROGRESS',
          current,
          total,
          filename: pdfPath,
          status  : 'downloaded',
        });
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    } catch (err) {
      failed++;
      console.warn(`[SW] PDF precache gagal TP${current}:`, err.message);
      broadcastToClients({
        type    : 'PDF_PRECACHE_PROGRESS',
        current,
        total,
        filename: pdfPath,
        status  : 'failed',
        error   : err.message,
      });
    }
  }

  broadcastToClients({
    type      : 'PDF_PRECACHE_DONE',
    total,
    failed,
    allSuccess: failed === 0,
    timestamp : Date.now(),
  });
}

// ============================================================
// GET PDF CACHE STATUS
// ============================================================
async function getPDFCacheStatus() {
  try {
    const pdfCache   = await caches.open(PDF_CACHE_NAME);
    const statusList = [];

    for (let i = 0; i < PDF_MANIFEST.length; i++) {
      const pdfPath = PDF_MANIFEST[i];
      const cached  = await pdfCache.match(pdfPath);
      statusList.push({ tpNum: i + 1, path: pdfPath, isCached: !!cached });
    }

    const cachedCount = statusList.filter(s => s.isCached).length;
    return {
      total        : PDF_MANIFEST.length,
      cachedCount,
      uncachedCount: PDF_MANIFEST.length - cachedCount,
      allCached    : cachedCount === PDF_MANIFEST.length,
      items        : statusList,
    };
  } catch (err) {
    return { error: err.message };
  }
}

// ============================================================
// HARD RESET
// ============================================================
async function handleHardReset() {
  try {
    const cacheKeys = await caches.keys();
    await Promise.all(cacheKeys.map(k => caches.delete(k)));
    await self.registration.unregister();
    broadcastToClients({ type: 'HARD_RESET_DONE' });
  } catch (err) {
    console.error('[SW] Hard Reset gagal:', err.message);
    broadcastToClients({ type: 'HARD_RESET_ERROR', message: err.message });
  }
}

// ============================================================
// NAVIGATION — Cache-first (bukan network-first)
// Untuk guru di lapangan dengan koneksi tidak stabil
// ============================================================
async function handleNavigationRequest(request) {
  const cache = await caches.open(CACHE_VERSION);

  // Cache-first: sajikan dari cache jika ada
  const cachedPage = await cache.match(request) || await cache.match('/index.html');
  if (cachedPage) {
    // Revalidate di background (non-blocking)
    fetch(request).then(res => {
      if (res && res.ok) cache.put(request, res.clone());
    }).catch(() => {});
    return cachedPage;
  }

  // Tidak ada di cache — coba network
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      await cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response(
      `<html>
        <head><title>Offline</title></head>
        <body style="font-family:sans-serif;padding:20px;background:#1A1A1A;color:#fff;">
          <h1>Offline</h1>
          <p>Aplikasi belum siap offline. Buka sekali saat online agar bisa diakses offline.</p>
        </body>
      </html>`,
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
}

// ============================================================
// MESSAGE HANDLER
// ============================================================
self.addEventListener('message', event => {
  const { type } = event.data || {};

  switch (type) {
    case 'PING':
      event.source?.postMessage({
        type       : 'PONG',
        version    : CACHE_VERSION,
        pdfCacheName: PDF_CACHE_NAME,
        timestamp  : Date.now(),
      });
      break;

    case 'HARD_RESET':
      event.waitUntil(handleHardReset());
      break;

    case 'SOFT_UPDATE':
      event.source?.postMessage({
        type   : 'SOFT_UPDATE_ACK',
        message: 'Soft Update dihandle oleh app layer',
      });
      break;

    case 'GET_VERSION':
      event.source?.postMessage({
        type        : 'VERSION_INFO',
        version     : CACHE_VERSION,
        pdfCacheName: PDF_CACHE_NAME,
      });
      break;

    case 'GET_CACHE_STATS':
      event.waitUntil(getCacheStats().then(stats => {
        event.source?.postMessage({ type: 'CACHE_STATS', stats });
      }));
      break;

    case 'PRECACHE_ALL_PDF':
      event.waitUntil(precacheAllPDF());
      break;

    case 'GET_PDF_CACHE_STATUS':
      event.waitUntil(getPDFCacheStatus().then(status => {
        event.source?.postMessage({ type: 'PDF_CACHE_STATUS', status });
      }));
      break;

    case 'CLEAR_PDF_CACHE':
      event.waitUntil(
        caches.delete(PDF_CACHE_NAME).then(deleted => {
          broadcastToClients({ type: 'PDF_CACHE_CLEARED', success: deleted });
        })
      );
      break;

    default:
      console.warn(`[SW] Message tidak dikenal: ${type}`);
  }
});

// ============================================================
// HELPER: Broadcast ke semua client
// ============================================================
async function broadcastToClients(message) {
  try {
    const allClients = await clients.matchAll({ includeUncontrolled: true });
    allClients.forEach(client => client.postMessage(message));
  } catch (err) {
    console.warn('[SW] Broadcast gagal:', err.message);
  }
}

// ============================================================
// HELPER: Cache stats
// ============================================================
async function getCacheStats() {
  try {
    const appCache = await caches.open(CACHE_VERSION);
    const appKeys  = await appCache.keys();
    const pdfCache = await caches.open(PDF_CACHE_NAME);
    const pdfKeys  = await pdfCache.keys();

    return {
      version     : CACHE_VERSION,
      pdfCacheName: PDF_CACHE_NAME,
      appShell: {
        files: appKeys.length,
        list : appKeys.map(req => new URL(req.url).pathname),
      },
      pdf: {
        files       : pdfKeys.length,
        totalManifest: PDF_MANIFEST.length,
        allCached   : pdfKeys.length >= PDF_MANIFEST.length,
        list        : pdfKeys.map(req => new URL(req.url).pathname),
      },
    };
  } catch (err) {
    return { error: err.message };
  }
}
