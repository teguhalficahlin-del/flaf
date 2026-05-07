/**
 * storage/export.js — FLAF Auto-Export + Import
 *
 * Penggunaan:
 *   exportManager.init({ getTeacherName: () => session?.name });
 *   await exportManager.checkAndAutoExport();
 *   await exportManager.triggerManualExport();
 *   await exportManager.importFromFile(file, { onConflict, onSummary });
 */

import { db }     from './db.js';
import { logger } from './logger.js';

const AUTO_EXPORT_INTERVAL_MS          = 7 * 24 * 60 * 60 * 1000;
const KEY_LAST_EXPORT                  = 'last_export_at';
const KEY_EXPORT_PENDING               = 'export_pending';
const KEY_EXPORT_FAIL_COUNT            = 'export_fail_count';
const MAX_EXPORT_FAIL_BEFORE_URGENT    = 2;
const BACKUP_PREFIX                    = 'FLAF-backup';
const EXPORT_FORMAT_VERSION            = 1;

const _state = {
  initialized   : false,
  getTeacherName: null,
};

// ─── PUBLIC API ───────────────────────────────────────────────────────────────

export const exportManager = {

  init({ getTeacherName }) {
    if (_state.initialized) return;
    if (typeof getTeacherName !== 'function') {
      throw new ExportError('INIT_INVALID', 'getTeacherName harus berupa function');
    }
    _state.getTeacherName = getTeacherName;
    _state.initialized    = true;
    logger.info('export', 'exportManager initialized');
  },

  async checkAndAutoExport() {
    _assertInitialized();

    const lastExportAt  = await db.get('kv', KEY_LAST_EXPORT);
    const exportPending = await db.get('kv', KEY_EXPORT_PENDING);
    const now           = Date.now();
    const isDue         = !lastExportAt || (now - lastExportAt) >= AUTO_EXPORT_INTERVAL_MS;
    const hasPending    = exportPending === true;

    if (!isDue && !hasPending) {
      return 'skipped';
    }

    try {
      await _performExport({ source: 'auto' });
      await db.set('kv', KEY_LAST_EXPORT,       now);
      await db.set('kv', KEY_EXPORT_PENDING,    false);
      await db.set('kv', KEY_EXPORT_FAIL_COUNT, 0);
      return 'exported';
    } catch (err) {
      await _handleAutoExportFailure(err);
      return 'failed';
    }
  },

  async triggerManualExport() {
    _assertInitialized();
    try {
      const result = await _performExport({ source: 'manual' });
      await db.set('kv', KEY_LAST_EXPORT,       Date.now());
      await db.set('kv', KEY_EXPORT_PENDING,    false);
      await db.set('kv', KEY_EXPORT_FAIL_COUNT, 0);
      logger.info('export', 'manual export berhasil', result);
      return { success: true, ...result };
    } catch (err) {
      logger.error('export', 'manual export gagal', { error: err?.message });
      return { success: false, error: err?.message || 'Export gagal' };
    }
  },

  // Alias untuk kompatibilitas dengan app.js yang memanggil manualExport()
  async manualExport() {
    return this.triggerManualExport();
  },

  async importBackup(file, opts = {}) {
    return this.importFromFile(file, opts);
  },

  async importFromFile(file, opts = {}) {
    _assertInitialized();
    const { onConflict = null, onSummary = null } = opts;
    const parsed = await _readAndValidateFile(file);

    let backupResult;
    try {
      backupResult = await _performExport({ source: 'pre-import-backup' });
    } catch (backupErr) {
      logger.error('export', 'pre-import backup gagal — import dibatalkan', { error: backupErr?.message });
      throw new ExportError(
        'BACKUP_FAILED',
        'Backup otomatis sebelum import gagal. Import dibatalkan untuk keamanan data Anda.'
      );
    }

    let mergeStats;
    try {
      mergeStats = await db.importMerge(parsed, onConflict);
    } catch (mergeErr) {
      logger.error('export', 'importMerge gagal', { error: mergeErr?.message });
      throw new ExportError('MERGE_FAILED', `Import gagal saat merge data: ${mergeErr?.message}`);
    }

    const result = {
      success    : true,
      merged     : mergeStats.merged,
      kept       : mergeStats.kept,
      conflicts  : mergeStats.conflicts,
      exportedAt : parsed.exported_at,
      backupFile : backupResult?.filename || null,
    };

    if (typeof onSummary === 'function') {
      try { onSummary(result); } catch {}
    }

    return result;
  },

  async getExportInfo() {
    const [lastExportAt, exportPending, failCount] = await Promise.all([
      db.get('kv', KEY_LAST_EXPORT),
      db.get('kv', KEY_EXPORT_PENDING),
      db.get('kv', KEY_EXPORT_FAIL_COUNT),
    ]);
    const now       = Date.now();
    const isDue     = !lastExportAt || (now - lastExportAt) >= AUTO_EXPORT_INTERVAL_MS;
    const daysUntil = lastExportAt ? _daysUntilNextExport(lastExportAt) : 0;
    return {
      lastExportAt  : lastExportAt || null,
      lastExportStr : lastExportAt ? _formatDate(lastExportAt) : 'Belum pernah',
      isDue,
      daysUntilNext : isDue ? 0 : daysUntil,
      exportPending : exportPending === true,
      failCount     : failCount || 0,
      isUrgent      : (failCount || 0) >= MAX_EXPORT_FAIL_BEFORE_URGENT,
    };
  },

  async resetExportState() {
    await Promise.all([
      db.remove('kv', KEY_LAST_EXPORT),
      db.remove('kv', KEY_EXPORT_PENDING),
      db.remove('kv', KEY_EXPORT_FAIL_COUNT),
    ]);
  },
};

// ─── CORE EXPORT ─────────────────────────────────────────────────────────────

async function _performExport({ source }) {
  const data = await db.exportAll();
  data.export_source = source;
  data.export_format = EXPORT_FORMAT_VERSION;

  let json;
  try {
    json = JSON.stringify(data, null, 2);
  } catch (err) {
    throw new ExportError('SERIALIZE_FAILED', `Gagal serialize data: ${err?.message}`);
  }

  const filename = _buildFilename();
  await _triggerDownload(json, filename);
  return { filename, size: json.length };
}

function _buildFilename() {
  const rawName = _state.getTeacherName?.() || 'guru';
  const safeName = rawName
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '')
    .slice(0, 30) || 'guru';
  const ts = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  return `${BACKUP_PREFIX}-${safeName}-${ts}.json`;
}

async function _triggerDownload(content, filename) {
  try {
    await _downloadViaBlobUrl(content, filename);
    return;
  } catch (blobErr) {
    logger.warn('export', 'blob URL download gagal, coba data URI', { error: blobErr?.message });
  }

  try {
    await _downloadViaDataUri(content, filename);
    return;
  } catch (dataErr) {
    logger.warn('export', 'data URI download gagal', { error: dataErr?.message });
  }

  window.dispatchEvent(new CustomEvent('flaf:export-needed', {
    detail: { filename, content, reason: 'download-blocked' },
  }));

  throw new ExportError(
    'DOWNLOAD_BLOCKED',
    'Browser memblokir download otomatis. Gunakan tombol "Simpan Backup" di layar.'
  );
}

function _downloadViaBlobUrl(content, filename) {
  return new Promise((resolve, reject) => {
    let objectUrl = null;
    let anchor    = null;
    try {
      const blob = new Blob([content], { type: 'application/json' });
      objectUrl  = URL.createObjectURL(blob);
      anchor     = document.createElement('a');
      anchor.href     = objectUrl;
      anchor.download = filename;
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.click();
      setTimeout(() => {
        if (objectUrl) URL.revokeObjectURL(objectUrl);
        if (anchor && anchor.parentNode) anchor.parentNode.removeChild(anchor);
        resolve();
      }, 1000);
    } catch (err) {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      if (anchor && anchor.parentNode) anchor.parentNode.removeChild(anchor);
      reject(err);
    }
  });
}

function _downloadViaDataUri(content, filename) {
  return new Promise((resolve, reject) => {
    let anchor = null;
    try {
      const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(content);
      anchor = document.createElement('a');
      anchor.href     = dataUri;
      anchor.download = filename;
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.click();
      setTimeout(() => {
        if (anchor && anchor.parentNode) anchor.parentNode.removeChild(anchor);
        resolve();
      }, 1000);
    } catch (err) {
      if (anchor && anchor.parentNode) anchor.parentNode.removeChild(anchor);
      reject(err);
    }
  });
}

// ─── AUTO-EXPORT FAILURE ─────────────────────────────────────────────────────

async function _handleAutoExportFailure(err) {
  logger.warn('export', 'auto-export gagal', { error: err?.message });
  const currentCount = (await db.get('kv', KEY_EXPORT_FAIL_COUNT)) || 0;
  const newCount     = currentCount + 1;

  await db.set('kv', KEY_EXPORT_PENDING,    true);
  await db.set('kv', KEY_EXPORT_FAIL_COUNT, newCount);

  const isUrgent = newCount >= MAX_EXPORT_FAIL_BEFORE_URGENT;
  window.dispatchEvent(new CustomEvent('flaf:export-needed', {
    detail: {
      failCount: newCount,
      urgent   : isUrgent,
      reason   : err?.code || 'unknown',
      message  : err?.message || 'Export otomatis gagal',
    },
  }));
}

// ─── IMPORT VALIDATION ────────────────────────────────────────────────────────

async function _readAndValidateFile(file) {
  if (!file || !(file instanceof File)) {
    throw new ExportError('IMPORT_INVALID_FILE', 'Input bukan File yang valid');
  }
  if (!file.name.endsWith('.json')) {
    throw new ExportError('IMPORT_WRONG_FORMAT', `File harus berformat .json`);
  }
  const MAX_SIZE = 10 * 1024 * 1024;
  if (file.size > MAX_SIZE) {
    throw new ExportError('IMPORT_TOO_LARGE', `File terlalu besar. Maksimal 10MB.`);
  }

  let raw;
  try {
    raw = await _readFileAsText(file);
  } catch (err) {
    throw new ExportError('IMPORT_READ_FAILED', `Gagal membaca file: ${err?.message}`);
  }

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new ExportError('IMPORT_INVALID_JSON', 'File bukan JSON yang valid.');
  }

  if (!parsed || typeof parsed !== 'object') {
    throw new ExportError('IMPORT_INVALID_STRUCTURE', 'Struktur file tidak valid');
  }
  if (!parsed.version || typeof parsed.version !== 'number') {
    throw new ExportError('IMPORT_MISSING_VERSION', 'File tidak memiliki field "version".');
  }
  if (!parsed.exported_at) {
    throw new ExportError('IMPORT_MISSING_TIMESTAMP', 'File tidak memiliki field "exported_at".');
  }

  const exportedDate = new Date(parsed.exported_at);
  if (isNaN(exportedDate.getTime())) {
    throw new ExportError('IMPORT_INVALID_TIMESTAMP', `Field "exported_at" tidak valid.`);
  }
  if (exportedDate.getTime() > Date.now() + 60_000) {
    throw new ExportError('IMPORT_FUTURE_TIMESTAMP', 'File backup memiliki tanggal di masa depan.');
  }

  return parsed;
}

function _readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader   = new FileReader();
    reader.onload  = () => resolve(reader.result);
    reader.onerror = () => reject(new Error(`FileReader error: ${reader.error?.message}`));
    reader.readAsText(file, 'UTF-8');
  });
}

// ─── UTILITY ─────────────────────────────────────────────────────────────────

function _assertInitialized() {
  if (!_state.initialized) {
    throw new ExportError('NOT_INITIALIZED', 'exportManager.init() belum dipanggil');
  }
}

function _daysUntilNextExport(lastExportAt) {
  const nextExportAt = lastExportAt + AUTO_EXPORT_INTERVAL_MS;
  const msLeft       = nextExportAt - Date.now();
  return Math.max(0, Math.ceil(msLeft / (24 * 60 * 60 * 1000)));
}

function _formatDate(ts) {
  try {
    return new Date(ts).toLocaleDateString('id-ID', {
      day: '2-digit', month: 'long', year: 'numeric',
    });
  } catch {
    return new Date(ts).toLocaleDateString();
  }
}

// ─── ERROR CLASS ──────────────────────────────────────────────────────────────

export class ExportError extends Error {
  constructor(code, message, cause = null) {
    super(message);
    this.name  = 'ExportError';
    this.code  = code;
    this.cause = cause;
  }
}

export class DBError extends Error {
  constructor(code, message, cause = null) {
    super(message);
    this.name  = 'DBError';
    this.code  = code;
    this.cause = cause;
  }
}
