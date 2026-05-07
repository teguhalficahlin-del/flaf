/**
 * FLAF — Secrets Template
 * ========================
 * File ini adalah TEMPLATE. Jangan diisi nilai nyata di sini.
 *
 * Sebelum deploy produksi:
 * 1. Salin file ini menjadi secrets.js (jangan commit ke repo)
 * 2. Isi semua nilai di bawah dengan nilai produksi yang sebenarnya
 * 3. Pastikan secrets.js masuk ke .gitignore
 *
 * Untuk development, nilai placeholder di activation.js sudah cukup.
 */

export const SECRET_SALT = 'GANTI_DENGAN_STRING_ACAK_MIN_32_KARAKTER';

export const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
export const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

export const ADMIN_EMAIL = 'admin@yourdomain.com';

// Emergency bypass — dipegang Admin saja, tidak pernah didistribusikan
export const EMERGENCY_BYPASS_CODE = 'FLAF-BYPASS-XXXX-XXXX';
