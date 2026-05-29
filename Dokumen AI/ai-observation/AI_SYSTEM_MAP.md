# AI_SYSTEM_MAP

Status: OBSERVATION DOCUMENT  
Updated: 2026-05-29  
Scope: source-code observation for FLAF runtime, storage, UI, PWA, activation/auth, and critical boundaries.  
Evidence base: `index.html`, `app.js`, `sw.js`, `manifest.json`, `package.json`, `storage/*`, `screens/*`, `data/*`, `modules/*`, `admin/*`, `secrets.js`.

---

## 1. Project Overview

### VERIFIED

| Item | Observation | Evidence |
|---|---|---|
| Application type | Static browser PWA / SPA using native ES modules. | `index.html` loads `<script type="module" src="app.js">`; `manifest.json`; `sw.js`. |
| Main user app | Teacher-facing FLAF app for Bahasa Inggris SD Fase A, kelas 1 & 2. | `manifest.json`; `data/fase-a.js`; UI sections in `index.html`. |
| Admin app | Separate admin panel for activation code management. | `admin/index.html`; `admin/admin.js`. |
| Main runtime | Browser runtime: DOM, ES modules, IndexedDB, Cache API, Service Worker, Web Crypto, Fetch API. | `app.js`; `storage/db.js`; `sw.js`; `screens/activation.js`. |
| Build system | No app bundler observed. Project is served as static files. | `package.json` contains only `devDependencies.sharp`; no build script. |
| Local-first behavior | Teaching data, grades, attendance, logs, and backups are local-first/offline-only after activation. | `storage/nilai.js`, `storage/jejak.js`, `storage/logger.js`, `app.js`. |

### INFERRED

- Architecture philosophy: static local-first PWA with explicit module boundaries:
  - `app.js` = orchestration/navigation/bootstrap.
  - `screens/*` = UI rendering and screen-specific behavior.
  - `storage/*` = persistence and data operations.
  - `data/*` + `docs/*` = curriculum content source.
  - `sw.js` = offline shell/cache/runtime asset strategy.
- The app prioritizes field usability during unstable connectivity; this is inferred from cache-first navigation, IndexedDB-first boot, PDF precache, and offline-only comments.

### UNKNOWN

- Deployment target is not explicitly defined in source.
- No test runner or CI workflow was observed from the inspected files.

---

## System Priorities

### VERIFIED

- Data integrity:
  - `app.js` blocks normal boot when `db.init()` fails, then shows an IndexedDB unavailable screen instead of continuing with unsafe persistence.
  - `storage/db.js` restricts access to `VALID_STORES` and throws on invalid store names.
  - `storage/export.js` performs pre-import backup before `db.importMerge()`.
  - `storage/db.js` excludes `kv.session` and `kv.device_id` during import merge.

- Local-first persistence:
  - Teacher runtime data is persisted in IndexedDB stores: `kv`, `nilai_data`, `presensi_log`, `teaching_log`, `penilaian_log`.
  - `storage/nilai.js`, `storage/jejak.js`, and `storage/logger.js` state offline-only/local behavior in code comments and implementation.
  - `app.js` keeps `jejak.sync()` and `nilai.sync()` as offline-only compatibility stubs through `_syncAll()`.

- Offline reliability:
  - `sw.js` precaches `APP_SHELL` during install and uses cache-first navigation with background revalidation.
  - `sw.js` keeps a separate `PDF_CACHE_NAME = 'flaf-pdf-v1'` for curriculum/exam documents.
  - `modules/pdf-handler.js` uses cache-first document download and raises explicit offline/network/invalid errors.

- Recovery capability:
  - `storage/export.js` supports manual JSON export and import.
  - Export metadata is tracked through `kv.last_export_at`, `kv.export_pending`, and `kv.export_fail_count`.
  - Import validates file type, size, JSON structure, version, timestamp, and future timestamp before merge.
  - `app.js` exposes hard reset for Cache API/service worker cleanup while preserving IndexedDB data according to confirmation text.

- Classroom usability:
  - `screens/dashboard.js` implements a teaching flow from rombel/TP selection into session steps: materi, presensi, pembuka, inti, penutup, asesmen, selesai.
  - `screens/sesi-runtime.js` persists active session resume state in `kv.sesi_aktif`.
  - `app.js` delays service worker reload when an active teaching runtime is detected.

- Low-connectivity operation:
  - `sw.js` treats Supabase/CDN as network-only but serves app shell and cached documents offline.
  - `app.js` shows offline state in dashboard connectivity UI and avoids server sync for teaching data.
  - First activation/admin flows still require Supabase network access.

### INFERRED

- Feature velocity tradeoff:
  - The code favors static ES modules, direct DOM rendering, IndexedDB wrappers, and browser-native APIs over a bundler/framework stack.
  - This likely reduces build complexity and supports static/PWA deployment, but increases coupling in large files such as `app.js`, `screens/dashboard.js`, and `screens/nilai.js`.
  - The explicit offline/local-first paths indicate reliability and data preservation are prioritized above server-backed synchronization features.

---

## Non-Goals

### INFERRED

- Cloud-first architecture:
  - FLAF runtime does not treat cloud storage as the primary data source.
  - Evidence: teaching data is stored in IndexedDB via `storage/db.js`, `storage/nilai.js`, `storage/presensi.js`, `storage/jejak.js`, and `storage/siswa-history.js`.

- Centralized cloud persistence:
  - FLAF does not persist teacher runtime data primarily to Supabase or another central backend.
  - Evidence: `storage/nilai.js`, `storage/jejak.js`, and `storage/logger.js` explicitly describe local/offline-only behavior; `_syncAll()` in `app.js` calls offline-only stubs.

- Always-online workflow:
  - FLAF is not designed to require continuous connectivity after activation.
  - Evidence: `sw.js` uses cache-first navigation/app shell/PDF strategies; `app.js` handles offline dashboard state; IndexedDB is the runtime persistence layer.

- Real-time collaboration:
  - No real-time multi-user editing, presence, conflict broadcast, WebSocket, or Supabase realtime flow was observed.
  - Evidence: no runtime dependency or module path for real-time collaboration appears in inspected `app.js`, `storage/*`, `screens/*`, or `admin/*`.

- Multi-tenant SaaS runtime:
  - The teacher app does not expose tenant switching, server workspace selection, or organization-scoped runtime data separation.
  - Evidence: teacher identity/session is local `kv.session`; class/student/teaching records are local IndexedDB data.

- Enterprise synchronization:
  - FLAF does not implement server reconciliation for grades, attendance, teaching logs, or runtime assessment history.
  - Evidence: export/import is JSON download/merge; `jejak.sync()` and `nilai.sync()` are offline-only compatibility paths.

- Server-side processing heavy workflow:
  - Core classroom operations do not depend on server-side rendering, server-generated reports, or backend job queues.
  - Evidence: UI is rendered in browser modules; reports are generated client-side in `modules/pdf-generator.js`; downloads use browser Blob/Data URI flows.

- Framework-driven modernization:
  - The observed runtime is not built around React/Vue/Svelte, a bundler, or server-rendered app framework.
  - Evidence: `index.html` loads native ES module `app.js`; `package.json` has no app framework/build scripts.

---

## Known Architectural Constraints

### VERIFIED

| Constraint | Source-grounded observation | Evidence |
|---|---|---|
| Browser storage limitation | App cannot safely operate without browser storage. Boot stops when IndexedDB init fails. | `app.js` `initApp()`; `_showIDBUnavailableScreen()`; `storage/db.js`. |
| IndexedDB limitation | Persistence depends on object stores and store names defined in `VALID_STORES`; callers outside allowed stores throw. | `storage/db.js`. |
| IndexedDB migration boundary | Observed migration creates/deletes stores only; no confirmed full record-shape migration layer. | `storage/db.js` `onupgradeneeded`. |
| Offline-first consequence | Runtime data is local; no confirmed server sync for grades, attendance, teaching logs, or assessment history. | `storage/nilai.js`; `storage/jejak.js`; `app.js` `_syncAll()`. |
| Static deployment model | Runtime is served as native static ES modules; no bundler/build pipeline observed. | `index.html`; `package.json`. |
| Service worker complexity | Offline availability depends on explicit `APP_SHELL`, `PDF_MANIFEST`, cache versioning, fetch routing, and message handling. | `sw.js`. |
| Export/import dependency | Recovery depends on browser download/file import flows and JSON merge behavior. | `storage/export.js`; `storage/db.js`; settings import/export buttons in `index.html`/`app.js`. |
| Browser capability dependency | Core runtime relies on IndexedDB, Service Worker, Cache API, Web Crypto, Fetch, DOM, Canvas, and File APIs. | `app.js`; `storage/db.js`; `screens/activation.js`; `sw.js`; `modules/pdf-generator.js`; `storage/export.js`. |
| Activation connectivity dependency | First activation requires Supabase REST/RPC connectivity; offline activation is not implemented in observed code. | `screens/activation.js`. |

### INFERRED

- Low-end school device consideration:
  - The static ES-module architecture, local persistence, cache-first navigation, and client-side document/report handling suggest the app is constrained for browser/device variability rather than server-managed sessions.
  - Large local datasets may stress low-end devices because storage modules use `getAll()` and in-memory filtering for some recap/log flows.

- Offline-first consequence:
  - Feature changes that assume central server truth, real-time sync, or always-online validation would conflict with current runtime flow.
  - Service worker cache lists must stay aligned with real file paths because missing static assets can break offline reliability.

- Export/import dependency:
  - Operational recovery depends on users successfully creating and retaining local backup files.
  - Import merge safety depends on timestamp quality and store-level compatibility.

- Static deployment model:
  - Adding dependencies that require bundling, server rendering, or runtime secrets would change the current deployment assumptions.

### UNKNOWN

- Exact browser/device minimum requirements are not declared in source.
- IndexedDB quota policy and storage pressure behavior are browser-dependent and not controlled by the app.
- Whether deployment infrastructure guarantees correct cache headers for `sw.js`, ES modules, `.docx`, and image assets is not visible in source.
- Whether all target school devices support required APIs consistently is not documented.
- Whether users have an operational backup schedule outside app reminders is not visible in source.

---

## AI Safety Notes

- No assumption without evidence:
  - Verify behavior against source files before editing.
  - Mark uncertain areas as `UNKNOWN` instead of inventing architecture.
  - Do not infer server sync, SaaS tenancy, or real-time behavior unless code evidence exists.

- No global refactor:
  - Do not rewrite `app.js`, `sw.js`, `storage/db.js`, `screens/dashboard.js`, or `screens/nilai.js` for style-only reasons.
  - Keep changes narrow to the requested behavior.
  - Avoid framework migration, bundler introduction, module reshaping, or folder reorganization without explicit approval.

- Storage schema sensitivity:
  - Treat `storage/db.js` as high-risk.
  - Do not change `DB_NAME`, `DB_VERSION`, `VALID_STORES`, store creation, or store deletion logic without migration review.
  - Do not alter `db.exportAll()` / `db.importMerge()` shape without checking backup compatibility.

- Migration review requirement:
  - Any schema/store/key change requires explicit migration plan.
  - Check old data compatibility before changing `nilai_data`, `presensi_log`, `teaching_log`, `penilaian_log`, or `kv` keys.
  - Never delete legacy data paths unless the deletion is explicitly required and documented.

- Service worker sensitivity:
  - Treat `sw.js` as release-critical.
  - Any edit to `APP_SHELL`, `PDF_MANIFEST`, `CACHE_VERSION`, fetch routing, install, activate, or message handlers can break offline use.
  - Confirm referenced files exist before adding them to cache lists.

- Offline-first constraint:
  - Do not add runtime behavior that requires continuous network access for teaching, grading, attendance, or session flow.
  - Supabase dependency is observed for activation/admin, not primary classroom data persistence.
  - Preserve cache-first and local persistence assumptions unless explicitly changing architecture.

- Activation/auth sensitivity:
  - Treat `screens/activation.js`, `admin/admin.js`, and `secrets.js` as sensitive.
  - Do not change code format validation, device id flow, HMAC session validation, Supabase RPC names, or admin auth flow without focused review.
  - Do not expose additional credential material in docs or logs.

- Backup/recovery sensitivity:
  - Treat `storage/export.js` and `storage/db.js` import/export functions as data-safety critical.
  - Preserve pre-import backup behavior.
  - Preserve exclusion of `kv.session` and `kv.device_id` during import unless a reviewed recovery design replaces it.

- Local-first persistence consequence:
  - Local browser data may be the only copy of teacher runtime data.
  - Avoid destructive cache/storage operations in code changes.
  - Hard reset behavior must not silently delete IndexedDB data unless explicitly requested and documented.

---

## Related Observation Documents

| Document | Purpose | Relationship |
| -------- | ------- | ------------ |
| `Dokumen AI/ai-observation/AI_RUNTIME_FLOW.md` | Focuses on runtime sequence, boot flow, navigation flow, screen entry behavior, and service worker message flow. | Extends `AI_SYSTEM_MAP.md` runtime overview. Overlap: entry points, boot sequence, UI navigation, offline/update behavior. Specialization: step-by-step runtime execution and event order. |
| `Dokumen AI/ai-observation/AI_STORAGE_MAP.md` | Focuses on IndexedDB stores, keys, persistence boundaries, export/import structure, and migration/storage risks. | Extends `AI_SYSTEM_MAP.md` storage summary. Overlap: `flaf_db`, `VALID_STORES`, local-first persistence, backup/import flow. Specialization: detailed storage schema and data integrity mapping. |
| `Dokumen AI/ai-observation/AI_SECURITY_AUDIT.md` | Focuses on activation/auth, credential exposure, Supabase dependency, session validation, and security-sensitive files. | Extends `AI_SYSTEM_MAP.md` activation/auth and risk sections. Overlap: `secrets.js`, `screens/activation.js`, `admin/admin.js`, Supabase REST/RPC, session signing. Specialization: security risk analysis and credential/auth boundary. |

---

## Observation Coverage

### Covered

| Area | Coverage Status | Notes |
| ---- | --------------- | ----- |
| Runtime flow | Covered | Main boot sequence, screen navigation, session check, SW registration, and public runtime globals observed in `app.js`. |
| Storage system | Covered | IndexedDB name/version/stores, persistence modules, export/import APIs, and store allowlist observed in `storage/*`. |
| Activation/auth | Covered | Teacher activation/session validation observed in `screens/activation.js`; admin auth/code management observed in `admin/admin.js`. |
| Service worker | Covered | Install/activate/fetch/message/cache/PDF precache behavior observed in `sw.js`; app-side registration/message handling observed in `app.js`. |
| Export/import | Covered | Manual export, import validation, pre-import backup, and merge behavior observed in `storage/export.js` and `storage/db.js`. |

### Partially Covered

| Area | Coverage Status | Notes |
| ---- | --------------- | ----- |
| Recovery flow | Partially Covered | Backup/export/import/hard reset behavior observed; full operational disaster recovery procedure not verified from source. |
| Migration flow | Partially Covered | Store-level IndexedDB upgrade observed; record-shape migration and historical migration path not fully verified. |
| Deployment | Partially Covered | Static runtime and cache versioning observed; deployment platform, hosting headers, and release process not verified. |
| Runtime module interaction | Partially Covered | Major imports and screen ownership observed; full line-by-line behavior of every screen branch not fully traced. |
| Offline document availability | Partially Covered | `PDF_MANIFEST` and cache-first flow observed; actual deployed file availability not verified. |

### Not Fully Covered

| Area | Coverage Status | Notes |
| ---- | --------------- | ----- |
| Testing | Not Fully Covered | No test runner, test files, or scripted test workflow observed in inspected project files. |
| CI/CD | Not Fully Covered | No CI/CD workflow files or pipeline configuration observed. |
| Production monitoring | Not Fully Covered | Logger is local/console-oriented in observed code; no external monitoring pipeline verified. |
| Browser/device compatibility matrix | Not Fully Covered | Required browser APIs identified, but minimum supported browsers/devices are not documented in source. |

### Unknown

| Area | Coverage Status | Notes |
| ---- | --------------- | ----- |
| Deployment platform | Unknown | Source does not identify hosting provider or deployment target. |
| Supabase RLS/policy safety | Unknown | Client code references Supabase tables/RPC; database policies are not present in repository source. |
| Backup retention practice | Unknown | App can export backups, but user/admin retention workflow outside app is not visible in source. |
| Data volume limits | Unknown | No verified maximum class/student/log volume or quota handling policy beyond browser storage failure handling. |
| Legacy data compatibility | Unknown | Compatibility with all pre-`DB_VERSION = 10` user data cannot be confirmed from current source alone. |

---

## Verification Trace

| File/Area | Purpose | Observation Usage |
| --------- | ------- | ----------------- |
| `index.html` | Main app HTML shell and screen root definitions. | Verified app entry, screen ids, PWA manifest link, CSS links, settings modal, and `app.js` module entry. |
| `app.js` | Main runtime orchestrator. | Verified boot flow, IndexedDB dependency, SW registration, session routing, navigation, export/import UI hooks, hard reset, PWA install, and runtime globals. |
| `sw.js` | Service worker. | Verified app shell cache, PDF manifest, install/activate lifecycle, fetch strategies, network-only patterns, PDF precache, cache stats, and hard reset message handling. |
| `manifest.json` | PWA metadata/config. | Verified standalone PWA mode, start URL, scope, orientation, icons, categories, and theme colors. |
| `package.json` | Dependency/config manifest. | Verified absence of app framework/build scripts and presence of `sharp` as dev dependency only. |
| `storage/db.js` | IndexedDB wrapper and schema boundary. | Verified `flaf_db`, `DB_VERSION`, `VALID_STORES`, store creation/deletion, readiness guards, `exportAll()`, and `importMerge()`. |
| `storage/export.js` | Backup/export/import manager. | Verified manual export, auto-export metadata, import validation, pre-import backup, JSON download flow, and recovery-related error handling. |
| `storage/nilai.js` | Class/student/grade persistence. | Verified local-only grade storage, `nilai_data` keys, class/student APIs, formative/sumative fields, recap functions, and sync removal note. |
| `storage/presensi.js` | Attendance persistence. | Verified `presensi_log` records, session id format, status map structure, and attendance recap behavior. |
| `storage/jejak.js` | Teaching log persistence. | Verified `teaching_log` entries, teaching action records, streak/summary behavior, and offline-only sync stub. |
| `storage/siswa-history.js` | Runtime assessment history persistence. | Verified `penilaian_log` key shape and per-session per-student assessment save behavior. |
| `storage/logger.js` | Local logging behavior. | Verified console/local logging orientation, sanitization, rate limit, and no external log send in observed implementation. |
| `screens/activation.js` | Teacher activation and local session validation. | Verified code format validation, Supabase activation lookup/RPC, device id flow, HMAC session signing, expiry, and session verification. |
| `admin/admin.js` | Admin activation-code panel logic. | Verified Supabase magic link auth, local admin session, service-key REST/RPC operations, code reset/generation, and audit table usage. |
| `admin/index.html` | Admin panel entry. | Verified separate admin UI entry that imports `admin/admin.js`. |
| `screens/dashboard.js` | Teaching dashboard and session launcher. | Verified dashboard dependencies, session/class/curriculum loading, runtime flow ownership, and mount relation to `screens/sesi-runtime.js`. |
| `screens/sesi-runtime.js` | Active teaching session runtime. | Verified `kv.sesi_aktif` resume state usage, runtime persistence boundary, and assessment save dependency on `storage/siswa-history.js`. |
| `screens/nilai.js` | Class management and grade/report UI. | Verified dependency on `storage/nilai.js`, `storage/presensi.js`, `storage/jejak.js`, and `modules/pdf-generator.js`. |
| `screens/kurikulum.js` | Curriculum/document UI. | Verified dependency on `data/index.js`, `storage/logger.js`, and document download callback from `app.js`. |
| `screens/jejak.js` | Teaching trace UI. | Verified dependency on `storage/jejak.js` and role as teaching-log presentation layer. |
| `data/index.js` | Active curriculum data router. | Verified `FASE_AKTIF`, registry pattern, public data API, and phase boundary. |
| `data/fase-a.js` | Active Fase A curriculum bundle. | Verified TP imports, metadata, CP/ATP structure, total TP, and validation guard. |
| `data/printables.js` | Printable HTML generator. | Verified printable generation module used by dashboard/printable flow. |
| `modules/pdf-handler.js` | Curriculum document download/cache helper. | Verified cache-first document retrieval, Cache API use, MIME validation, offline/network errors, and Blob/Data URI download behavior. |
| `modules/pdf-generator.js` | Client-side report output generator. | Verified browser-side Canvas-based report generation and no external library requirement in observed implementation. |
| `secrets.js` | Runtime credential/config source. | Verified exported Supabase URL, anon key, service key, admin email, and HMAC salt names/usage. |
| `secrets.example.js` | Secret template. | Verified expected secret/config names and emergency bypass example placeholder. |
| `docs/output-v5/*.js` | TP01-TP14 curriculum modules. | Verified as imported by `data/fase-a.js` and listed in `sw.js` app shell. |
| `docs/sesi-m10/tp-15-v5.js` through `docs/sesi-m13/tp-18-v5.js` | TP15-TP18 curriculum modules. | Verified as imported by `data/fase-a.js` and listed in `sw.js` app shell. |
| `pdf/*.docx` | Curriculum/exam document assets. | Verified as document assets listed in `sw.js` `PDF_MANIFEST` and consumed by document download flow. |
| `assets/images/printables/*` | Printable image assets. | Verified as static printable assets listed in `sw.js` `APP_SHELL`. |
| `icons/icon-192.png`, `icons/icon-512.png` | PWA icon assets. | Verified via `index.html`, `manifest.json`, and `sw.js` app shell references. |
| `style.css`, `screens/*.css` | App/screen styling. | Verified CSS entry links and screen-level CSS dependencies from `index.html` and `sw.js`. |

---

## 2. Root Structure

### VERIFIED

| Path | Role | Runtime relation |
|---|---|---|
| `index.html` | Main app HTML shell and screen containers. | Loads CSS and `app.js`. |
| `app.js` | Main app entry point and orchestrator. | Imports storage, screens, modules, and data router. |
| `sw.js` | Service worker. | Registered by `app.js`; controls cache/update/PDF messages. |
| `manifest.json` | PWA manifest. | Linked by `index.html`. |
| `style.css` | Global app styles. | Linked by `index.html`. |
| `screens/` | Screen renderers and screen CSS. | Imported by `app.js` and other screen modules. |
| `storage/` | IndexedDB wrapper and domain storage modules. | Imported by `app.js`, `screens/*`, `modules/*`. |
| `data/` | Curriculum data router and printable generator. | Imported by `app.js`, `screens/*`, `sw.js` precache list. |
| `docs/` | TP source modules and scenario/spec docs. | `data/fase-a.js` imports TP modules from `docs/output-v5` and `docs/sesi-m*`. |
| `assets/` | Printable image assets. | Listed in `sw.js` app shell; used by printable data/rendering. |
| `pdf/` | Downloadable `.docx` curriculum/exam documents. | Listed in `sw.js` `PDF_MANIFEST`; consumed via `modules/pdf-handler.js`. |
| `modules/` | PDF download/generation helpers. | Imported by screens/app. |
| `admin/` | Separate admin panel. | `admin/index.html` imports `admin/admin.js`. |
| `icons/` | PWA icons. | Referenced by `index.html`, `manifest.json`, `sw.js`. |
| `tools/` | Conversion utilities. | Not imported by main runtime in observed source. |
| `Dokumen AI/` | AI/governance/operational docs. | Documentation boundary, not runtime. |
| `node_modules/` | Installed dependency artifacts. | Not imported by runtime source observed. |

---

## 3. Entry Points

### VERIFIED

| Entry | File | Flow |
|---|---|---|
| Main HTML entry | `index.html` | Defines `s-splash`, `s-activation`, `s-start`, `s-dash`, `s-jadwal`, `s-nilai`, `s-jejak`, settings modal. |
| Main JS entry | `app.js` | Runs `initApp()` on `DOMContentLoaded` or immediately if DOM ready. |
| Service worker entry | `sw.js` | Registered by `navigator.serviceWorker.register('./sw.js')` in `app.js`. |
| Activation UI entry | `screens/activation.js` | `app.js` calls `renderActivationScreen()` when entering `s-activation`. |
| Admin HTML entry | `admin/index.html` | Imports `initAdminPanel()` from `admin/admin.js`. |
| Admin JS entry | `admin/admin.js` | Manages Supabase magic link auth, activation codes, reset, audit trail. |

### Boot Flow

1. `app.js` installs global error handlers.
2. `initApp()` calls `logger.init()`.
3. `app.js` registers `sw.js` non-blocking.
4. `app.js` calls `await db.init()`.
5. If IndexedDB fails, app shows blocking storage unavailable screen.
6. `app.js` calls `checkExistingSession()` from `screens/activation.js`.
7. `app.js` binds navigation, SW messages, connectivity, PWA install handlers.
8. If session exists, `exportManager.init()` is called.
9. Splash button routes to `s-start` or `s-activation`.

---

## 4. UI System

### VERIFIED

| Screen | DOM id | Renderer / owner | Main dependencies |
|---|---|---|---|
| Splash | `s-splash` | Static in `index.html`; activated by `app.js`. | `app.js`. |
| Activation | `s-activation` / `activation-root` | `screens/activation.js`. | `storage/db.js`, `secrets.js`, Supabase REST/RPC. |
| Start menu | `s-start` | Static HTML + populated by `app.js`. | `storage/db.js`, `storage/export.js`, navigation handlers. |
| Teaching dashboard | `s-dash` / `dash-root` | `screens/dashboard.js`. | `data/index.js`, `storage/nilai.js`, `storage/jejak.js`, `storage/presensi.js`, `screens/sesi-runtime.js`. |
| Curriculum docs | `s-jadwal` / `kurikulum-root` | `screens/kurikulum.js`. | `data/index.js`, `modules/pdf-handler.js`, `storage/logger.js`. |
| Class/grades | `s-nilai` / `nilai-root` | `screens/nilai.js`. | `storage/nilai.js`, `storage/presensi.js`, `storage/jejak.js`, `modules/pdf-generator.js`, `data/fase-a.js`. |
| Teaching trace | `s-jejak` / `jejak-root` | `screens/jejak.js`. | `storage/jejak.js`. |
| Runtime session | mounted inside dashboard | `screens/sesi-runtime.js`. | `storage/db.js`, `storage/siswa-history.js`. |

### Navigation Flow

- `app.js` owns `navigateTo(screenId, opts)`.
- Bottom navigation routes:
  - `s-start` -> `s-dash`, `s-jadwal`, `s-nilai`, `s-jejak`.
  - `s-dash`, `s-jadwal`, `s-nilai`, `s-jejak` each expose bottom nav back to the same major screens.
- Browser back is handled via `popstate`.
- `window.__FLAF_NAV__` exposes `navigateTo`, `getCurrentScreen`, `_setJejakDirty`.

### INFERRED

- UI is manually rendered with DOM strings/functions, not React/Vue/Svelte.
- Screen state is mostly module-local variables plus IndexedDB for persisted runtime state.

---

## 5. Storage System

### VERIFIED

| Item | Value / behavior | Evidence |
|---|---|---|
| Database | `flaf_db` | `storage/db.js`. |
| DB version | `10` | `storage/db.js`. |
| Store allowlist | `kv`, `log_queue`, `teacher_data`, `teaching_log`, `nilai_data`, `presensi_log`, `penilaian_log` | `storage/db.js`. |
| Init contract | `db.init()` must finish before normal callers use DB. | `storage/db.js`; `app.js`. |
| Migration mechanism | `onupgradeneeded` creates missing stores and deletes `siswa_per_kelas`, `obs_log` if present. | `storage/db.js`. |
| Export format | JSON object from `db.exportAll()`. | `storage/db.js`; `storage/export.js`. |
| Import strategy | Merge incoming backup into existing stores; excludes `kv.session` and `kv.device_id`. | `storage/db.js`. |

### Store Map

| Store | Observed keys / data | Main writers |
|---|---|---|
| `kv` | `session`, `device_id`, `sesi_aktif`, `data_version`, `last_export_at`, `export_pending`, `export_fail_count`. | `screens/activation.js`, `screens/sesi-runtime.js`, `app.js`, `storage/export.js`. |
| `teacher_data` | Exported by `db.exportAll()`; specific runtime writer not confirmed in inspected snippets. | UNKNOWN. |
| `teaching_log` | Teaching activity entries: `log_YYYYMMDD_HHmmss_tpN_*`. | `storage/jejak.js`. |
| `nilai_data` | `kelas_list`, `siswa_${kelasId}`, per-student grade records, SAS/sumatif keys. | `storage/nilai.js`. |
| `presensi_log` | Session attendance records: `sesi_YYYYMMDD_HHmmss_*_tpN_*`. | `storage/presensi.js`. |
| `penilaian_log` | Per-session per-student assessment records. | `storage/siswa-history.js`, read by `storage/nilai.js`. |
| `log_queue` | Store exists; current logger writes to console/in-memory only in observed code. | UNKNOWN active writer. |

### Persistence Flow

- App boot blocks on `db.init()`.
- Activation stores signed session in `kv.session`.
- Device identity stored in `kv.device_id`.
- Teaching runtime resume state stored in `kv.sesi_aktif`.
- Class/student/grade data stored in `nilai_data`.
- Attendance stored in `presensi_log`.
- Teaching trace stored in `teaching_log`.
- Backup metadata stored in `kv`.

### Migration Flow

- Verified only structural IndexedDB migration via `onupgradeneeded`.
- No explicit multi-step data migration function was observed.
- Store deletions observed: `siswa_per_kelas`, `obs_log`.

---

## 6. Data Flow

### Main Entities

| Entity | Source / store | Notes |
|---|---|---|
| Teacher session | `kv.session` | `{ payload, signature }`, signed with HMAC using `SECRET_SALT`. |
| Device id | `kv.device_id` | Generated via `crypto.randomUUID()` or random bytes. |
| Curriculum phase | `data/index.js` -> `data/fase-a.js` | Active phase `A`; total TP = 18. |
| TP module | `docs/output-v5/tp-01-v5.js` ... `docs/sesi-m13/tp-18-v5.js` | Imported by `data/fase-a.js`. |
| Class | `nilai_data.kelas_list` | Created/managed by `storage/nilai.js`. |
| Student | `nilai_data.siswa_${kelasId}` | Created/managed by `storage/nilai.js`. |
| Grade | per-student records in `nilai_data` | L/S/R, sumatif, formatif, catatan. |
| Attendance session | `presensi_log` | One record per class/TP/day/session. |
| Teaching log | `teaching_log` | Actions such as `mulai`, `selesai`, `reset`, `nilai`. |
| Runtime assessment log | `penilaian_log` | One key per class/TP/session/student. |

### Runtime Data Flow

1. `data/index.js` exposes active curriculum via `getFase()`, `getAllTP()`, `getTP()`, `getMeta()`.
2. `screens/dashboard.js` loads session, curriculum, class list, grade recap, teaching streak, month summary.
3. User selects class/TP; dashboard mounts `screens/sesi-runtime.js`.
4. Runtime stores resume state in `kv.sesi_aktif`.
5. Attendance is persisted through `storage/presensi.js`.
6. Assessment history is persisted through `storage/siswa-history.js`.
7. Grade/class data is persisted through `storage/nilai.js`.
8. Teaching trace is persisted through `storage/jejak.js`.
9. Export/import is handled by `storage/export.js` and `storage/db.js`.

### Export / Import Flow

| Flow | Verified behavior |
|---|---|
| Manual export | `exportManager.triggerManualExport()` calls `db.exportAll()`, serializes JSON, downloads as `FLAF-backup-{teacher}-{YYYYMMDD}.json`. |
| Auto export | `checkAndAutoExport()` exists with 7-day interval and pending/fail metadata, but main `app.js` currently shows reminder instead of observed automatic download on boot. |
| Import | `importBackup()` validates JSON, performs pre-import backup, then calls `db.importMerge()`. |
| Import safety | `db.importMerge()` excludes `kv.session` and `kv.device_id` from imported `kv`. |
| File guard | Import requires `.json`, max 10 MB, valid `version`, valid `exported_at`, not future timestamp. |

---

## 7. Activation / Auth

### Teacher Activation - VERIFIED

| Step | Behavior | File |
|---|---|---|
| Input validation | Requires name, school, code; code regex `^FLAF-2026-[A-Z0-9]{4}$`. | `screens/activation.js`. |
| Device id | Uses `kv.device_id` or generates new id. | `screens/activation.js`. |
| Server lookup | Fetches Supabase table `activation_codes` filtered by code. | `screens/activation.js`. |
| Device limit | `MAX_DEVICES = 20`. | `screens/activation.js`. |
| Device registration | Calls Supabase RPC `register_device`. | `screens/activation.js`. |
| Session save | Stores signed `{ payload, signature }` in `kv.session`. | `screens/activation.js`. |
| Session expiry | `expires_at = now + 365 days`. | `screens/activation.js`. |
| Session validation | Checks payload shape, expiry, matching device id, HMAC signature. | `screens/activation.js`. |

### Admin Auth - VERIFIED

| Item | Behavior | File |
|---|---|---|
| Auth method | Supabase magic link via `/auth/v1/otp`. | `admin/admin.js`. |
| Admin session storage | `localStorage` key `flaf_admin_session`, 7-day expiry. | `admin/admin.js`. |
| Admin data access | Direct Supabase REST/RPC using `SUPABASE_SERVICE_KEY`. | `admin/admin.js`; `secrets.js`. |
| Admin tables/RPC | `activation_codes`, `admin_actions`, `admin_reset_device`, `admin_generate_code`. | `admin/admin.js`. |

### Security Implications

- `secrets.js` contains `SECRET_SALT`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_KEY`.
- `admin/admin.js` imports `SUPABASE_SERVICE_KEY` into browser-side code.
- `screens/activation.js` imports `SECRET_SALT` into browser-side code for HMAC session signing.
- `sw.js` intentionally excludes `secrets.js` from precache, but runtime modules still import it.

---

## 8. Offline / PWA

### VERIFIED

| Area | Behavior | File |
|---|---|---|
| PWA manifest | Standalone, portrait, `start_url: ./`, scope `./`. | `manifest.json`. |
| SW registration | `app.js` registers `./sw.js`. | `app.js`. |
| App shell cache | `CACHE_VERSION = flaf-v78`; app shell list includes core JS/CSS/data/assets/icons. | `sw.js`. |
| PDF/doc cache | `PDF_CACHE_NAME = flaf-pdf-v1`; `PDF_MANIFEST` includes 18 modul `.docx` + STS/SAS `.docx`. | `sw.js`. |
| Install strategy | `install` precaches `APP_SHELL`, then `skipWaiting()`. | `sw.js`. |
| Activate strategy | Deletes old caches except current app cache and PDF cache; then `clients.claim()`. | `sw.js`. |
| Navigation strategy | Cache-first with background revalidate; offline HTML fallback if missing. | `sw.js`. |
| Supabase/CDN strategy | Network-only. | `sw.js`. |
| Google Fonts | Cache-first in `flaf-fonts`. | `sw.js`. |
| PDF requests | Cache-first in `flaf-pdf-v1`. | `sw.js`; `modules/pdf-handler.js`. |
| Updates | New SW activation triggers reload unless session runtime active; active session stores pending update flag. | `app.js`. |
| Hard reset | Deletes Cache API caches and unregisters SW; IndexedDB not deleted by app hard reset message. | `app.js`; `sw.js`. |

### UNKNOWN

- Exact deployment cache invalidation process outside `CACHE_VERSION` bump is not present in source.
- No source-level proof that all `APP_SHELL` paths always exist at deployment time.

---

## 9. Dependencies

### Runtime Dependencies

| Dependency | Usage |
|---|---|
| Browser ES modules | Native imports across `app.js`, `screens/*`, `storage/*`, `data/*`. |
| IndexedDB | Primary persistent storage via `storage/db.js`. |
| Cache API | App shell/PDF/font caching via `sw.js` and `modules/pdf-handler.js`. |
| Service Worker | Offline control, app updates, PDF precache, hard reset. |
| Web Crypto | HMAC session signing and random device id. |
| Fetch API | Supabase REST/RPC, PDF/doc fetch, data soft update. |
| Supabase REST/RPC | Activation code validation and admin operations. |
| DOM/Canvas | Manual UI rendering and PNG-style report generation in `modules/pdf-generator.js`. |
| Google Fonts | Loaded from `fonts.googleapis.com` / `fonts.gstatic.com`. |

### Build / Tool Dependencies

| Dependency | Evidence | Runtime criticality |
|---|---|---|
| `sharp` | `package.json` devDependency; `compress-png.js`. | Build/tooling only; not imported by app runtime. |

### Critical Dependencies

- Browser support for IndexedDB is critical: app boot blocks if unavailable.
- Browser support for Service Worker/Cache API is critical for offline/PWA behavior, but app can still run with reduced offline capability if SW registration fails.
- Supabase connectivity is critical for first activation and admin panel operations.

---

## 10. Critical Files

### Sensitive Files

| File | Criticality | Reason |
|---|---|---|
| `secrets.js` | CRITICAL | Contains Supabase URL, anon key, service key, and HMAC salt; imported by activation/admin flows. |
| `secrets.example.js` | MEDIUM | Defines expected secret names and emergency bypass example; not imported by runtime. |
| `admin/admin.js` | HIGH | Uses browser-side service key for admin REST/RPC operations; separate from teacher runtime but credential-sensitive. |
| `screens/activation.js` | CRITICAL | Activation validation, device registration, local session signing, and session validation. |

### High-Risk Runtime Files

| File | Criticality | Risk area |
|---|---|---|
| `storage/db.js` | CRITICAL | IndexedDB schema, migrations, import/export merge behavior; corruption can affect all local data. |
| `storage/export.js` | CRITICAL | Backup/export/import safety; recovery depends on this flow. |
| `sw.js` | CRITICAL | Offline availability, cache invalidation, update behavior; failure can break PWA/offline operation. |
| `app.js` | CRITICAL | Boot order, navigation, SW communication, hard reset, global API; failure can block app startup. |
| `storage/nilai.js` | CRITICAL | Class/student/grade persistence; data corruption affects core teacher records. |
| `storage/presensi.js` | HIGH | Attendance persistence; affects recap/report data but not app boot. |
| `storage/jejak.js` | HIGH | Teaching log persistence and streak/summary behavior; affects operational history. |
| `screens/sesi-runtime.js` | HIGH | Active teaching session resume and assessment save flow; failures can interrupt classroom workflow. |
| `data/index.js` | HIGH | Active phase router; changing `FASE_AKTIF` changes curriculum source. |
| `data/fase-a.js` | HIGH | Imports all active TP modules and validates TP structure; broken imports can break curriculum rendering. |

### Runtime Module Criticality

| Module | Criticality | Evidence-based reason |
|---|---|---|
| `app.js` | CRITICAL | Main boot entry; initializes logger, service worker, IndexedDB, session, navigation, and public runtime APIs. |
| `screens/activation.js` | CRITICAL | Required for first-use activation and existing session validation. |
| `screens/dashboard.js` | HIGH | Owns teaching dashboard flow and mounts `screens/sesi-runtime.js`; classroom flow depends on it. |
| `screens/sesi-runtime.js` | HIGH | Persists active session state in `kv.sesi_aktif` and saves runtime assessment history. |
| `screens/nilai.js` | HIGH | UI for class/student/grade operations and report generation. |
| `screens/kurikulum.js` | MEDIUM | Curriculum/document screen; important for content access but not boot-critical. |
| `screens/jejak.js` | MEDIUM | Teaching trace UI; depends on `storage/jejak.js`. |
| `modules/pdf-handler.js` | MEDIUM | Handles document download/cache retrieval; failure affects document access, not core boot. |
| `modules/pdf-generator.js` | MEDIUM | Generates local report outputs; failure affects export/report workflows, not boot. |
| `data/index.js` | HIGH | Single router for active curriculum phase consumed by app/screens. |
| `data/fase-a.js` | HIGH | Active curriculum bundle; import/validation failure can break content-dependent screens. |
| `data/printables.js` | MEDIUM | Generates printable HTML; failure affects printable materials. |

### Storage Module Criticality

| Module | Criticality | Evidence-based reason |
|---|---|---|
| `storage/db.js` | CRITICAL | All IndexedDB access, schema, allowed stores, export/import merge, and boot storage availability depend on it. |
| `storage/export.js` | CRITICAL | Manual backup, import validation, pre-import backup, and recovery metadata depend on it. |
| `storage/nilai.js` | CRITICAL | Owns class, student, formative/sumative grade records, SAS/sumatif records, and recaps. |
| `storage/presensi.js` | HIGH | Owns attendance session records used by class recaps and reports. |
| `storage/siswa-history.js` | HIGH | Saves per-session per-student assessment history into `penilaian_log`. |
| `storage/jejak.js` | HIGH | Owns teaching logs, streaks, summaries, and offline-only sync stub. |
| `storage/logger.js` | MEDIUM | Local logging/console safety and sanitization; not required for persisted teacher data integrity. |

### Service Worker Related Files

| File | Criticality | Evidence-based reason |
|---|---|---|
| `sw.js` | CRITICAL | Defines `CACHE_VERSION`, `APP_SHELL`, `PDF_MANIFEST`, fetch strategies, install/activate lifecycle, SW messages, PDF precache, and hard reset. |
| `app.js` | CRITICAL | Registers `sw.js`, listens to SW messages, handles update reloads, hard reset, and PDF cache commands. |
| `manifest.json` | HIGH | PWA install metadata; required for standalone app behavior but not app logic boot. |
| `index.html` | CRITICAL | Links manifest, icons, CSS, and `app.js`; defines screen roots expected by runtime. |
| `icons/icon-192.png` | LOW | PWA icon asset; broken icon affects install/display polish, not data/runtime. |
| `icons/icon-512.png` | LOW | PWA icon asset; broken icon affects install/display polish, not data/runtime. |
| `pdf/*.docx` | MEDIUM | Cached/downloaded curriculum/exam documents; missing files affect document access and offline PDF cache status. |
| `assets/images/printables/*` | MEDIUM | Listed in `APP_SHELL`; missing files can reduce offline printable reliability. |

### Critical Static Assets

| Asset | Criticality | Reason |
|---|---|---|
| `index.html` | CRITICAL | Main HTML shell and screen roots; missing/broken file blocks runtime. |
| `manifest.json` | HIGH | PWA install/scope/display metadata. |
| `icons/icon-192.png` | LOW | PWA icon display asset. |
| `icons/icon-512.png` | LOW | PWA icon display asset. |
| `assets/images/printables/*` | MEDIUM | Offline printable assets listed in `sw.js` app shell. |
| `pdf/*.docx` | MEDIUM | Offline/downloadable curriculum and exam document assets listed in `PDF_MANIFEST`. |
| `docs/output-v5/*.js` | HIGH | TP01-TP14 curriculum modules imported by `data/fase-a.js`. |
| `docs/sesi-m10/tp-15-v5.js` through `docs/sesi-m13/tp-18-v5.js` | HIGH | TP15-TP18 curriculum modules imported by `data/fase-a.js`. |

---

## 11. Known Risks

### Storage Risk

- IndexedDB unavailable blocks app boot.
- `storage/db.js` header says `Schema (DB_VERSION = 2)` while code uses `DB_VERSION = 10`; documentation inside code is stale.
- `teacher_data` and `log_queue` are exported/created, but active writer was not confirmed in observed snippets.
- Import merge uses timestamp fields when available; records without comparable timestamp may be kept, creating possible conflict ambiguity.

### Migration Risk

- Migration is store-level only in observed code.
- No explicit record-shape migration was observed for old `nilai_data`, `teaching_log`, `presensi_log`, or `penilaian_log`.
- `onupgradeneeded` deletes legacy stores `siswa_per_kelas` and `obs_log`.

### Credential Risk

- `secrets.js` is present in project source and contains real-looking credential values.
- `SUPABASE_SERVICE_KEY` is imported by browser-side `admin/admin.js`.
- `SECRET_SALT` is imported client-side by `screens/activation.js`, so local session signature protection is tamper-resistant only within client constraints, not server-grade secrecy.

### Offline Risk

- `sw.js` excludes `secrets.js` from `APP_SHELL`, while runtime module graph imports `secrets.js`.
- Supabase and CDN resources are network-only; activation/admin cannot work offline.
- Google Fonts are external; cached after first successful fetch only.
- PDF/docx availability offline depends on prior cache/precache success.

### Update Risk

- `sw.js` requires `CACHE_VERSION` bump for deploy according to source comment.
- `index.html` defines `window.__FLAF_VERSION__ = 'flaf-v16'`, while `sw.js` uses `CACHE_VERSION = 'flaf-v78'`; version identifiers are not aligned.
- New SW can trigger reload; `app.js` delays reload only when runtime session is detected.

### Scaling Risk

- Data is stored locally per browser/device; no confirmed server sync for teacher runtime data.
- `getAll()` patterns over full object stores are used in storage modules; large local datasets may increase runtime cost.
- Backup/export is user/browser download dependent; blocked downloads trigger `flaf:export-needed`.

---

## 12. Observation Status

### VERIFIED

- FLAF main app is a static ES-module PWA.
- Main app entry is `index.html` -> `app.js`.
- Service worker entry is `sw.js`.
- Activation screen is `screens/activation.js`.
- Admin entry is `admin/index.html` -> `admin/admin.js`.
- IndexedDB database is `flaf_db`, version `10`.
- Valid stores are `kv`, `log_queue`, `teacher_data`, `teaching_log`, `nilai_data`, `presensi_log`, `penilaian_log`.
- Active curriculum phase is `A`.
- `data/fase-a.js` imports 18 TP modules.
- Main teaching data is local-first/offline-only after activation.
- Export/import is JSON-based through `storage/export.js` and `storage/db.js`.
- Supabase is used for activation and admin operations.
- PWA cache strategy is implemented in `sw.js`.
- Runtime API globals exist: `window.__FLAF__`, `window.__FLAF_NAV__`, `window.db`.

### INFERRED

- The intended architecture is local-first/offline-first teacher workflow with server dependency limited mainly to activation/admin.
- Folder boundary is intentional: `screens` for UI, `storage` for persistence, `data/docs` for curriculum, `modules` for helpers, `sw.js` for offline.
- Operational priority appears to be preserving local teaching data and enabling offline classroom use.

### UNKNOWN

- Deployment platform and release process outside source comments.
- Complete data migration history before `DB_VERSION = 10`.
- Active writer for `teacher_data` in current runtime.
- Active writer for `log_queue` in current runtime.
- Whether `secrets.js` is intentionally committed for deployment or only present in this local workspace.
- Whether Supabase Row Level Security policies mitigate browser-side service key exposure.
- Test coverage, CI checks, and production monitoring.
