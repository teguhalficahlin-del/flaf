/**
 * =============================================================
 * FLAF — PDF HANDLER
 * File: modules/pdf-handler.js
 * =============================================================
 *
 * FUNGSI:
 *   Menangani unduh PDF modul ajar dengan strategi cache-first.
 *   SW sudah mengatur cleanup (maks 2 versi per file) — handler
 *   ini hanya bertugas mengambil dan men-trigger download.
 *
 * STRATEGI:
 *   1. Cek Cache API (SW cache) — serve langsung jika ada
 *   2. Jika miss & online → fetch dari server → simpan ke cache → download
 *   3. Jika miss & offline → lempar PDFOfflineError
 *   4. Jika browser tidak support Cache API → langsung fetch & download
 *
 * PUBLIC API:
 *   downloadPDF(tpId, pdfFilename) → Promise<void>
 *   getPDFCacheStatus(pdfFilename)  → Promise<'cached'|'not-cached'|'unavailable'>
 *
 * KONTRAK INTEGRASI (di app.js atau kurikulum.js):
 *   import { downloadPDF } from './modules/pdf-handler.js';
 *
 *   renderKurikulum({
 *     onDownloadPDF: (tpId, pdfFile) => downloadPDF(tpId, pdfFile)
 *   });
 *
 * Terakhir direvisi : April 2026
 * =============================================================
 */

import { logger } from '../storage/logger.js';

// ----------------------------------------------------------
// KONSTANTA
// ----------------------------------------------------------
const SCREEN        = 's-jadwal';
const PDF_BASE_PATH = '/pdf/';                // path relatif dari root PWA
const CACHE_NAME    = 'flaf-pdf-v1';              // harus sinkron dengan sw.js PDF_CACHE_NAME
const VALID_MIME    = 'application/pdf';
const MAX_PDF_SIZE  = 10 * 1024 * 1024;           // 10 MB — guard ukuran wajar

// ----------------------------------------------------------
// ERROR CLASSES
// ----------------------------------------------------------

export class PDFOfflineError extends Error {
  constructor(filename) {
    super(`File ${filename} belum tersedia offline. Buka koneksi internet dan coba lagi.`);
    this.name = 'PDFOfflineError';
    this.filename = filename;
  }
}

export class PDFNetworkError extends Error {
  constructor(filename, status) {
    super(`Gagal mengambil ${filename} dari server (HTTP ${status}).`);
    this.name = 'PDFNetworkError';
    this.filename = filename;
    this.status = status;
  }
}

export class PDFInvalidError extends Error {
  constructor(filename, reason) {
    super(`File ${filename} tidak valid: ${reason}`);
    this.name = 'PDFInvalidError';
    this.filename = filename;
    this.reason = reason;
  }
}

// ----------------------------------------------------------
// PUBLIC API
// ----------------------------------------------------------

/**
 * downloadPDF(tpId, pdfFilename)
 *
 * Mengambil PDF dari cache atau server, lalu trigger download
 * ke device user. Melempar error spesifik kalau gagal.
 *
 * @param {string} tpId        — contoh: 'tp-01'
 * @param {string} pdfFilename — contoh: 'tp-01-v1.pdf'
 * @returns {Promise<void>}
 * @throws {PDFOfflineError | PDFNetworkError | PDFInvalidError | Error}
 */
export async function downloadPDF(tpId, pdfFilename) {
  _validateArgs(tpId, pdfFilename);

  const url = `${PDF_BASE_PATH}${pdfFilename}`;

  logger.info(SCREEN, '[pdf] unduh dimulai', { tpId, pdfFilename });

  // ── Cek Cache API tersedia ────────────────────────────────
  if (!_isCacheAPIAvailable()) {
    logger.warn(SCREEN, '[pdf] Cache API tidak tersedia, fallback ke fetch langsung', { tpId });
    return _fetchAndDownload(url, pdfFilename, tpId, false);
  }

  // ── Cache-first ───────────────────────────────────────────
  try {
    const cachedResponse = await _getFromCache(url);

    if (cachedResponse) {
      logger.info(SCREEN, '[pdf] serve dari cache', { tpId, pdfFilename });
      const blob = await cachedResponse.blob();
      _triggerDownload(blob, pdfFilename);
      return;
    }
  } catch (cacheErr) {
    // Cache read gagal — lanjut ke network, jangan crash
    logger.warn(SCREEN, '[pdf] gagal baca cache, lanjut ke network', {
      tpId,
      error: cacheErr.message,
    });
  }

  // ── Cache miss → network ──────────────────────────────────
  if (!navigator.onLine) {
    logger.warn(SCREEN, '[pdf] offline dan tidak ada cache', { tpId, pdfFilename });
    throw new PDFOfflineError(pdfFilename);
  }

  return _fetchAndDownload(url, pdfFilename, tpId, true);
}

/**
 * getPDFCacheStatus(pdfFilename)
 *
 * Cek apakah PDF sudah ada di cache — dipakai untuk
 * menampilkan indikator "tersedia offline" di UI.
 *
 * @param {string} pdfFilename — contoh: 'tp-01-v1.pdf'
 * @returns {Promise<'cached'|'not-cached'|'unavailable'>}
 */
export async function getPDFCacheStatus(pdfFilename) {
  if (!_isCacheAPIAvailable()) return 'unavailable';

  try {
    const url      = `${PDF_BASE_PATH}${pdfFilename}`;
    const response = await _getFromCache(url);
    return response ? 'cached' : 'not-cached';
  } catch {
    return 'unavailable';
  }
}

// ----------------------------------------------------------
// INTERNAL — FETCH & CACHE
// ----------------------------------------------------------

async function _fetchAndDownload(url, pdfFilename, tpId, saveToCache) {
  let response;

  try {
    response = await fetch(url, {
      method : 'GET',
      headers: { 'Accept': 'application/pdf' },
    });
  } catch (networkErr) {
    // fetch() sendiri melempar error saat offline atau DNS fail
    logger.warn(SCREEN, '[pdf] fetch gagal (network error)', {
      tpId,
      error: networkErr.message,
    });
    throw new PDFOfflineError(pdfFilename);
  }

  // ── Validasi HTTP status ──────────────────────────────────
  if (!response.ok) {
    logger.error(SCREEN, '[pdf] server error', { tpId, status: response.status });
    throw new PDFNetworkError(pdfFilename, response.status);
  }

  // ── Validasi content-type ─────────────────────────────────
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('pdf')) {
    logger.error(SCREEN, '[pdf] content-type bukan PDF', { tpId, contentType });
    throw new PDFInvalidError(pdfFilename, `content-type: ${contentType}`);
  }

  // ── Clone sebelum consume ─────────────────────────────────
  // Response hanya bisa dibaca sekali — clone untuk cache,
  // original untuk blob download.
  const responseForCache = saveToCache ? response.clone() : null;

  // ── Baca blob ─────────────────────────────────────────────
  const blob = await response.blob();

  // ── Validasi ukuran ──────────────────────────────────────
  if (blob.size === 0) {
    throw new PDFInvalidError(pdfFilename, 'file kosong (0 bytes)');
  }
  if (blob.size > MAX_PDF_SIZE) {
    logger.warn(SCREEN, '[pdf] ukuran file besar', {
      tpId,
      size: blob.size,
      max: MAX_PDF_SIZE,
    });
    // Tidak throw — tetap download, hanya warn
  }

  // ── Simpan ke cache (async, tidak blocking download) ─────
  if (saveToCache && responseForCache) {
    _saveToCache(url, responseForCache, tpId).catch(err => {
      logger.warn(SCREEN, '[pdf] gagal simpan ke cache', {
        tpId,
        error: err.message,
      });
    });
  }

  // ── Trigger download ──────────────────────────────────────
  _triggerDownload(blob, pdfFilename);

  logger.info(SCREEN, '[pdf] unduh berhasil', {
    tpId,
    pdfFilename,
    size     : blob.size,
    fromCache: !saveToCache,
  });
}

// ----------------------------------------------------------
// INTERNAL — CACHE OPERATIONS
// ----------------------------------------------------------

async function _getFromCache(url) {
  const cache = await caches.open(CACHE_NAME);
  const match = await cache.match(url);
  return match || null;
}

async function _saveToCache(url, response, tpId) {
  const cache = await caches.open(CACHE_NAME);
  await cache.put(url, response);
  logger.info(SCREEN, '[pdf] disimpan ke cache', { tpId, url });
}

// ----------------------------------------------------------
// INTERNAL — TRIGGER DOWNLOAD
// ----------------------------------------------------------

/**
 * _triggerDownload(blob, filename)
 *
 * Cascade strategy:
 *   1. Blob URL + <a download> — paling reliable di Chrome/Android
 *   2. data: URI + <a download> — fallback untuk browser lama
 *   3. window.open(blobUrl)    — last resort (beberapa Android blokir auto-click)
 */
function _triggerDownload(blob, filename) {
  // Pastikan MIME type benar
  const pdfBlob = blob.type === VALID_MIME
    ? blob
    : new Blob([blob], { type: VALID_MIME });

  // Strategy 1: Blob URL
  if (window.URL && window.URL.createObjectURL) {
    const blobUrl = URL.createObjectURL(pdfBlob);
    const a       = document.createElement('a');

    a.href     = blobUrl;
    a.download = filename;
    a.style.display = 'none';

    document.body.appendChild(a);

    try {
      a.click();
    } catch (clickErr) {
      // Strategy 3: open di tab baru kalau click programmatic gagal
      window.open(blobUrl, '_blank');
    } finally {
      // Cleanup — tunda sedikit agar browser sempat mulai download
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      }, 2000);
    }
    return;
  }

  // Strategy 2: data: URI (fallback untuk browser yang tidak support createObjectURL)
  const reader = new FileReader();
  reader.onloadend = () => {
    const a   = document.createElement('a');
    a.href    = reader.result;
    a.download = filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => document.body.removeChild(a), 2000);
  };
  reader.readAsDataURL(pdfBlob);
}

// ----------------------------------------------------------
// INTERNAL — VALIDASI & UTILITY
// ----------------------------------------------------------

function _validateArgs(tpId, pdfFilename) {
  if (typeof tpId !== 'string' || !tpId.trim()) {
    throw new Error('[FLAF] downloadPDF: tpId harus string non-kosong');
  }
  if (typeof pdfFilename !== 'string' || !pdfFilename.endsWith('.pdf')) {
    throw new Error('[FLAF] downloadPDF: pdfFilename harus string berakhiran .pdf');
  }
  // Guard path traversal
  if (pdfFilename.includes('/') || pdfFilename.includes('..')) {
    throw new Error('[FLAF] downloadPDF: pdfFilename tidak boleh mengandung path');
  }
}

function _isCacheAPIAvailable() {
  return typeof caches !== 'undefined' && typeof caches.open === 'function';
}
