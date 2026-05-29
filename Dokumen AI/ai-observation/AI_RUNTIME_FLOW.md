# AI_RUNTIME_FLOW

Status: RUNTIME OBSERVATION DOCUMENT  
Updated: 2026-05-29  
Scope: observed runtime lifecycle of FLAF based on source code.  
Reference document: `Dokumen AI/ai-observation/AI_SYSTEM_MAP.md`  
Primary source files: `index.html`, `app.js`, `sw.js`, `storage/db.js`, `storage/export.js`, `screens/activation.js`, `screens/dashboard.js`, `screens/sesi-runtime.js`, `storage/nilai.js`, `storage/presensi.js`, `storage/jejak.js`, `storage/siswa-history.js`.

---

## 1. Application Boot Flow

### VERIFIED

| Step | Runtime event | Source |
|---|---|---|
| 1 | Browser loads `index.html`. | `index.html` |
| 2 | HTML links PWA/config/assets: `manifest.json`, `favicon.ico`, `icons/icon-192.png`, Google Fonts, `style.css`, screen CSS. | `index.html` |
| 3 | HTML defines screen roots: `s-splash`, `s-activation`, `s-start`, `s-jejak`, `s-nilai`, `s-dash`, `s-jadwal`, settings modal. | `index.html` |
| 4 | HTML loads `app.js` as native ES module. | `index.html` |
| 5 | `app.js` imports storage, logger, export manager, screen renderers, PDF handler, teaching trace, grades, and curriculum data. | `app.js` |
| 6 | `app.js` installs global `window.onerror` and `window.onunhandledrejection` handlers. | `app.js` |
| 7 | `app.js` exposes `window.db = db`. | `app.js` |
| 8 | `initApp()` runs on `DOMContentLoaded`, or immediately if `document.readyState !== 'loading'`. | `app.js` |

### Boot Sequence

1. `initApp()` calls `logger.init()`.
2. `initApp()` normalizes initial `#app-viewport` locked/unlocked state based on active screen.
3. `initApp()` calls `_registerServiceWorker()` non-blocking.
4. `initApp()` calls `await db.init()`.
5. If `db.init()` fails, `_showIDBUnavailableScreen()` runs and boot stops.
6. If DB succeeds, `checkExistingSession()` is called from `screens/activation.js`.
7. `session` is set to active session data or `null`.
8. `initApp()` binds navigation, SW messages, connectivity, and PWA install handlers:
   - `_bindNavigation()`
   - `_listenToSW()`
   - `_bindConnectivity()`
   - `_bindPWAInstall()`
9. If session exists, `exportManager.init({ getTeacherName })` runs.
10. Splash button `btn-mulai` is enabled.
11. User taps splash start:
   - active session -> `navigateTo('s-start')`
   - no session -> `navigateTo('s-activation')`

### INFERRED

- `logger.init()` is intentionally before `db.init()` so early runtime errors can be logged to console even if DB is unavailable.
- Service worker registration is non-blocking because app boot continues to `db.init()` and session check without awaiting SW activation.

### UNKNOWN

- Exact browser loading order for external Google Fonts under poor connectivity depends on browser behavior and network state.
- Deployment headers for `app.js`, `sw.js`, and ES modules are not visible in source.

---

## 2. Screen Lifecycle Flow

### VERIFIED

| Screen | DOM root | Runtime owner | Mount trigger |
|---|---|---|---|
| Splash | `#s-splash` | static HTML + `app.js` | Initial HTML state. |
| Activation | `#s-activation`, `#activation-root` | `screens/activation.js` | `navigateTo('s-activation')` -> `_onScreenEnter()`. |
| Start menu | `#s-start` | static HTML + `app.js` | `navigateTo('s-start')` -> `_populateStartScreen()`. |
| Dashboard | `#s-dash`, `#dash-root` | `screens/dashboard.js` | `navigateTo('s-dash')` -> `_initDashboard()`. |
| Curriculum | `#s-jadwal`, `#kurikulum-root` | `screens/kurikulum.js` | `navigateTo('s-jadwal')` -> `renderKurikulum()`. |
| Grades/class | `#s-nilai`, `#nilai-root` | `screens/nilai.js` | `navigateTo('s-nilai')` -> `renderNilaiScreen()`. |
| Teaching trace | `#s-jejak`, `#jejak-content` | `screens/jejak.js` | `navigateTo('s-jejak')` and `_jejakDirty === true`. |
| Active teaching runtime | `#sr-root` inside dashboard step body | `screens/sesi-runtime.js` | Dashboard step 2-4 -> `srMount()`. |

### Screen Switching

1. `navigateTo(screenId, opts)` gets previous screen from `currentScreen`.
2. Previous screen:
   - removes `screen-active`
   - adds `screen-exit`
   - after 220 ms sets `hidden`
3. Next screen:
   - removes `screen-active` / `screen-exit`
   - adds `screen-entering`
   - removes `hidden`
   - after two `requestAnimationFrame()` calls adds `screen-active`
4. `#app-viewport.scrollTop` resets to `0`.
5. `viewport-locked` toggles for screens with `.screen-with-nav`, except `s-dash` has runtime-specific handling.
6. `currentScreen` is updated.
7. `history.pushState({ screen: screenId })` runs unless `opts.skipHistory`.
8. `_onScreenEnter(screenId, opts)` runs unless `opts.skipRender`.

### Renderer Ownership

| Function | File | Runtime role |
|---|---|---|
| `navigateTo()` | `app.js` | Global screen switch controller. |
| `_onScreenEnter()` | `app.js` | Dispatches screen-specific render/init. |
| `renderActivationScreen()` | `screens/activation.js` | Renders activation form once per root via `dataset.rendered`. |
| `renderDashboard()` | `screens/dashboard.js` | Renders dashboard landing and owns teaching flow. |
| `renderKurikulum()` | `screens/kurikulum.js` | Renders curriculum/document screen once per root via `dataset.rendered`. |
| `renderNilaiScreen()` | `screens/nilai.js` | Renders class/grades screen on entry. |
| `renderJejakScreen()` | `screens/jejak.js` | Renders teaching trace when `_jejakDirty` is true. |
| `mount()` / `unmount()` | `screens/sesi-runtime.js` | Mounts/cleans active teaching runtime. |

### Cleanup Behavior

- `navigateTo()` clears dashboard inline height/overflow when leaving `s-dash`.
- Dashboard `_rerenderStep()` calls `srUnmount()` when leaving runtime steps 2-4.
- `screens/sesi-runtime.js` `unmount()`:
  - stops speech synthesis via `_ttsStop()`
  - removes `.sr-overlay`
  - clears `_root`
- Runtime `_render()` also stops TTS and removes `.sr-overlay` on each render.

### UNKNOWN

- No centralized route registry exists beyond `_bindNavigation()` and `_onScreenEnter()`.
- Full cleanup coverage for every dynamically attached inline `window.*` handler in dashboard was not exhaustively traced.

---

## 3. Activation Runtime Flow

### VERIFIED

| Flow | Runtime behavior | Source |
|---|---|---|
| Activation screen entry | `app.js` enters `s-activation`, calls `renderActivationScreen(root, _onActivationSuccess)` if root not already rendered. | `app.js`, `screens/activation.js` |
| Existing session check | `checkExistingSession()` reads `kv.session` after DB is ready. | `screens/activation.js` |
| Device id | `_getOrCreateDeviceId()` reads/writes `kv.device_id`; uses `crypto.randomUUID()` or random bytes fallback. | `screens/activation.js` |
| Session signature | `_signSession()` signs payload using HMAC SHA-256 and `SECRET_SALT`. | `screens/activation.js`, `secrets.js` |
| Session validation | Checks payload types, expiry, matching device id, and signature validity. | `screens/activation.js` |
| Session expiry | Expired session triggers `clearSession()` and returns inactive. | `screens/activation.js` |
| Activation request | `activate()` validates input, normalizes code/name/school, then calls Supabase. | `screens/activation.js` |
| Supabase lookup | `_supabaseSelect('activation_codes', { code })`. | `screens/activation.js` |
| Device registration | `_supabaseRpc('register_device', { p_code, p_device_id, p_name, p_school })`. | `screens/activation.js` |
| Session persistence | `_finalizeActivation()` stores `{ payload, signature }` in `kv.session`. | `screens/activation.js` |

### Activation Sequence

1. User enters name, school, activation code.
2. `activate({ name, school, code })` validates required fields.
3. Code must match `CODE_REGEX = /^FLAF-2026-[A-Z0-9]{4}$/`.
4. DB must be ready; otherwise returns `DB_UNAVAILABLE`.
5. Device id is loaded or generated.
6. Supabase table `activation_codes` is queried.
7. If code not found -> `CODE_WRONG`.
8. If device already registered -> `_finalizeActivation()` via `supabase_known_device`.
9. If `record.device_count >= MAX_DEVICES` -> `CODE_FULL`.
10. Otherwise Supabase RPC `register_device` is called.
11. `_finalizeActivation()` creates 365-day session and stores it in IndexedDB.
12. `app.js` `_onActivationSuccess()` sets in-memory `session`, initializes export manager, navigates to `s-start`, then tries background PDF precache if online.

### Activation Failure Flow

| Error code | Trigger |
|---|---|
| `INPUT_EMPTY` | Missing name, school, or code. |
| `FORMAT_INVALID` | Code does not match `CODE_REGEX`. |
| `DB_UNAVAILABLE` | `db.isReady()` is false. |
| `CODE_WRONG` | Supabase returns no row. |
| `CODE_FULL` | Device count reaches `MAX_DEVICES`. |
| `SUPABASE_DOWN` | Supabase fetch/RPC throws or fails. |

### INFERRED

- First activation is network-dependent because no offline bypass path was observed in `screens/activation.js`.

### UNKNOWN

- Supabase table policy/RLS behavior is not present in repository source.
- No source-level confirmation of server-side `register_device` implementation.

---

## 4. Storage Runtime Flow

### VERIFIED

| Runtime point | Behavior | Source |
|---|---|---|
| DB init timing | `db.init()` runs during `initApp()` before session check and navigation binding. | `app.js`, `storage/db.js` |
| DB name | `flaf_db`. | `storage/db.js` |
| DB version | `10`. | `storage/db.js` |
| Stores | `kv`, `log_queue`, `teacher_data`, `teaching_log`, `nilai_data`, `presensi_log`, `penilaian_log`. | `storage/db.js` |
| Migration timing | `onupgradeneeded` runs during IndexedDB open. | `storage/db.js` |
| Migration behavior | Creates missing stores; deletes `siswa_per_kelas` and `obs_log` if present. | `storage/db.js` |
| Blocking failure | If `db.init()` fails, boot displays storage unavailable screen and returns. | `app.js` |

### Persistence Timing

| Data | Save trigger | Store |
|---|---|---|
| Device id | Activation/session validation via `_getOrCreateDeviceId()`. | `kv.device_id` |
| Teacher session | Successful activation via `_saveSession()`. | `kv.session` |
| Runtime resume state | `screens/sesi-runtime.js` `_transition()` -> `_persistState()`. | `kv.sesi_aktif` |
| Class list | `nilai.tambahKelas()` / class operations. | `nilai_data.kelas_list` |
| Student list | `nilai.tambahSiswa()` / batch/import-like UI operations. | `nilai_data.siswa_${kelasId}` |
| Grades | `storage/nilai.js` setters. | `nilai_data` |
| Attendance | Dashboard `_doSelesaiSesi()` -> `presensi.simpan()`. | `presensi_log` |
| Teaching log | Dashboard `_doSelesaiSesi()` -> `jejak.log()`. | `teaching_log` |
| Progress per TP | Dashboard `_doSelesaiSesi()` -> `db.set('teacher_data', progress_tp_N, ...)`. | `teacher_data` |
| Runtime assessment | `screens/sesi-runtime.js` overlay save -> `savePenilaian()`. | `penilaian_log` |
| Export metadata | `exportManager.triggerManualExport()` / `checkAndAutoExport()`. | `kv.last_export_at`, `kv.export_pending`, `kv.export_fail_count` |

### Export / Import Storage Flow

1. Export calls `db.exportAll()`.
2. `db.exportAll()` reads stores into object maps:
   - `kv`
   - `teacher_data`
   - `nilai_data`
   - `teaching_log`
   - `presensi_log`
   - `penilaian_log`
3. Import calls `_readAndValidateFile()`.
4. Import performs pre-import backup through `_performExport({ source: 'pre-import-backup' })`.
5. Import calls `db.importMerge(parsed, onConflict)`.
6. `importMerge()` excludes `kv.session` and `kv.device_id`.
7. Existing records compare `updated_at` or `issued_at` when available.

### UNKNOWN

- Active runtime writer for `log_queue` was not confirmed.
- Historical data migration behavior before current `DB_VERSION = 10` cannot be fully verified from current source.

---

## 5. Session Runtime Flow

### VERIFIED

| Flow | Runtime behavior | Source |
|---|---|---|
| Dashboard start | `renderDashboard()` loads session, phase data, class list, recaps, streak, month summary. | `screens/dashboard.js` |
| Runtime mount | Dashboard step 2-4 creates `#sr-root` and calls `srMount(srRoot, tpData, rombel, siswaList, _onSesiDone)`. | `screens/dashboard.js` |
| Runtime state | `screens/sesi-runtime.js` uses module-level `_state`. | `screens/sesi-runtime.js` |
| Resume key | Runtime resume state is stored under `kv.sesi_aktif`. | `screens/sesi-runtime.js` |
| Resume window | `RESUME_MAX_MS = 4 * 60 * 60 * 1000`. | `screens/sesi-runtime.js` |
| Runtime states | `preview`, `resume`, `entering`, `running`, `selesai`, `closure` are documented in source comments; render switch observes preview/resume/entering/running/selesai. | `screens/sesi-runtime.js` |
| State persistence | `_transition()` calls `_persistState()` then `_render()`. | `screens/sesi-runtime.js` |
| Runtime completion | `_nextFase()` removes `kv.sesi_aktif` when scenario is complete, then calls `_onDone(...)`. | `screens/sesi-runtime.js` |

### Teaching Session Sequence

1. User enters dashboard (`s-dash`).
2. `renderDashboard()` prepares landing and class/TP context.
3. User selects rombel and TP.
4. Dashboard stepper enters steps:
   - `0 = Materi`
   - `1 = Presensi`
   - `2 = Pembuka`
   - `3 = Inti`
   - `4 = Penutup`
   - `5 = Asesmen`
   - `6 = Selesai`
5. For steps 2-4, dashboard hides stepper chrome and mounts `screens/sesi-runtime.js`.
6. Runtime checks `kv.sesi_aktif` for matching TP and rombel:
   - if recent -> state `resume`
   - if expired -> removes resume key
7. Runtime transitions persist `faseIdx`, `langkahIdx`, `sesiId`, and timestamp.
8. Runtime completion removes `kv.sesi_aktif` and calls dashboard `_onSesiDone`.
9. Dashboard final save flow persists:
   - attendance via `presensi.simpan()`
   - teaching log via `jejak.log()`
   - progress marker via `db.set('teacher_data', progress_tp_N, ...)`

### Assessment Persistence

1. Assessment overlay collects entries per student.
2. If `_state.sesiId` does not exist, it generates one using timestamp + random suffix.
3. `savePenilaian(kelasId, tpNomor, sesiId, modePenilaian, entries)` runs.
4. `storage/siswa-history.js` writes one record per student into `penilaian_log`.
5. Save failure logs error and shows inline "Gagal menyimpan. Coba lagi." message.

### INFERRED

- Session resume is designed to protect against accidental navigation/reload during the active teaching runtime.

### UNKNOWN

- Full behavior of dashboard helper functions and all `window.dash*` handlers was not exhaustively traced.

---

## 6. Offline / PWA Runtime Flow

### Service Worker Lifecycle

| Lifecycle | Runtime behavior | Source |
|---|---|---|
| Register | `app.js` calls `navigator.serviceWorker.register('./sw.js')`. | `app.js` |
| Install | `sw.js` opens `CACHE_VERSION`, `cache.addAll(APP_SHELL)`, then `self.skipWaiting()`. | `sw.js` |
| Activate | Deletes caches except `CACHE_VERSION` and `PDF_CACHE_NAME`, calls `clients.claim()`, broadcasts `SW_ACTIVATED`. | `sw.js` |
| Fetch | Routes navigation, network-only patterns, fonts, document/PDF cache, data paths, and app shell. | `sw.js` |
| Message | Handles `PING`, `HARD_RESET`, `SOFT_UPDATE`, `GET_VERSION`, `GET_CACHE_STATS`, `PRECACHE_ALL_PDF`, `GET_PDF_CACHE_STATUS`, `CLEAR_PDF_CACHE`. | `sw.js` |

### Cache Strategy

| Request category | Strategy |
|---|---|
| Navigation / HTML | Cache-first; background revalidate; offline HTML fallback if no cache. |
| Supabase/CDN | Network-only. |
| Google Fonts | Cache-first in `flaf-fonts`. |
| `/pdf/*.docx` | Cache-first in `flaf-pdf-v1`. |
| `/data/` | Stale-while-revalidate-style behavior with offline JSON 503 fallback. |
| Other app shell | Cache-first. |

### Update Flow

1. `_registerServiceWorker()` listens to `swReg.updatefound`.
2. New worker state changes to `activated`.
3. App checks active teaching runtime:
   - `document.querySelector('#sesi-runtime-root') !== null`
   - or `document.body.classList.contains('sr-active')`
4. If session active:
   - `sessionStorage.setItem('sw_pending_update', '1')`
   - toast says update will apply after session.
5. If no active session:
   - `sessionStorage.sw_reloaded` prevents reload loop.
   - `location.reload()` applies SW update.

### Hard Reset Flow

1. User triggers `window.__FLAF__.hardReset()` from settings.
2. `hardReset()` requires `navigator.onLine`.
3. User confirms warning that cache/PDF are deleted and IndexedDB progress is not deleted.
4. If SW controller exists, app posts `{ type: 'HARD_RESET' }`.
5. `sw.js` `handleHardReset()` deletes all Cache API caches and unregisters SW.
6. SW broadcasts `HARD_RESET_DONE`.
7. App receives message, shows toast, reloads.
8. If no SW controller exists, `app.js` fallback deletes caches and unregisters service workers directly.

### Offline Behavior

- Dashboard connectivity badge shows offline state through `_updateDashConnectivity()`.
- Hard reset button is disabled when offline.
- PDF precache button requires online state before sending `PRECACHE_ALL_PDF`.
- Supabase activation/admin operations are network-only.

### UNKNOWN

- App sets `sw_pending_update`, but exact later consumption of that flag was not confirmed in inspected snippets.
- Offline availability depends on all `APP_SHELL` files existing at deployment; runtime source cannot prove deployed assets exist.

---

## 7. Export / Import Runtime Flow

### VERIFIED

| Flow | Runtime behavior | Source |
|---|---|---|
| Export manager init | `exportManager.init({ getTeacherName })` runs after activation success or existing session boot. | `app.js`, `storage/export.js` |
| Manual export | Settings/export buttons call `exportManager.triggerManualExport()`. | `app.js`, `storage/export.js` |
| Auto export function | `checkAndAutoExport()` exists and uses 7-day interval plus pending flag. | `storage/export.js` |
| Boot reminder | `app.js` calls `getExportInfo()` and shows reminder if backup is due. | `app.js` |
| Import | File input change calls `exportManager.importBackup(file)`. | `app.js`, `storage/export.js` |

### Manual Export Sequence

1. UI event calls `exportManager.triggerManualExport()`.
2. `_assertInitialized()` verifies export manager init.
3. `_performExport({ source: 'manual' })` calls `db.exportAll()`.
4. Exported data receives:
   - `export_source`
   - `export_format`
5. JSON is serialized.
6. Filename is built as `FLAF-backup-{safeTeacherName}-{YYYYMMDD}.json`.
7. Download attempts:
   - Blob URL
   - data URI
   - `flaf:export-needed` event on blocked download
8. On success:
   - `kv.last_export_at = Date.now()`
   - `kv.export_pending = false`
   - `kv.export_fail_count = 0`

### Auto Export Behavior

- `checkAndAutoExport()`:
  - reads `last_export_at`
  - reads `export_pending`
  - exports if due or pending
  - marks success/failure in `kv`
- `app.js` observed behavior on boot:
  - initializes export manager if session exists
  - calls `getExportInfo()`
  - displays reminder if backup is due
- No confirmed boot call to `checkAndAutoExport()` was observed in `app.js`.

### Import Sequence

1. User clicks import button.
2. Hidden file input opens.
3. File selection calls `exportManager.importBackup(file)`.
4. `_readAndValidateFile()` checks:
   - input is `File`
   - filename ends with `.json`
   - size <= 10 MB
   - JSON parses
   - object structure exists
   - `version` exists and is number
   - `exported_at` exists and is valid
   - timestamp is not more than 60 seconds in the future
5. Pre-import backup is attempted.
6. If pre-import backup fails, import is cancelled with `BACKUP_FAILED`.
7. `db.importMerge(parsed, onConflict)` runs.
8. UI toast reports merged count.
9. `dashboardRendered = false`; if current screen is dashboard, `_initDashboard()` reruns.

### Failure Handling

| Failure | Behavior |
|---|---|
| Export serialization failure | Throws `ExportError('SERIALIZE_FAILED')`. |
| Download blocked | Dispatches `flaf:export-needed`; returns failure. |
| Auto export failure | Sets `export_pending = true`, increments `export_fail_count`, dispatches `flaf:export-needed`. |
| Import invalid file | Throws specific `ExportError`. |
| Pre-import backup failure | Import cancelled. |
| Merge failure | Throws `MERGE_FAILED`. |

---

## 8. Error / Failure Flow

### VERIFIED

| Failure area | Runtime behavior | Source |
|---|---|---|
| Global JS error | `window.onerror` creates blocking overlay with reload button. | `app.js` |
| Unhandled promise rejection | `window.onunhandledrejection` forwards to `window.onerror`. | `app.js` |
| IndexedDB unavailable | `db.init()` failure sets `idbOk = false`; `_showIDBUnavailableScreen()` runs; boot returns. | `app.js` |
| Service worker unsupported | `_registerServiceWorker()` logs warning and returns. | `app.js` |
| Service worker registration failure | Caught and logged through `logger.error()`. | `app.js` |
| Activation failure | `activate()` returns explicit error codes consumed by activation UI. | `screens/activation.js` |
| Supabase down | Activation returns `SUPABASE_DOWN`. | `screens/activation.js` |
| Export failure | Manual export catches error, logs, and returns `{ success: false }`. | `storage/export.js` |
| Import failure | App catches import error and shows toast `Import gagal: ...`. | `app.js` |
| Offline hard reset | `hardReset()` refuses when `navigator.onLine` is false. | `app.js` |
| Offline PDF/document miss | `modules/pdf-handler.js` throws `PDFOfflineError`; `sw.js` returns 503 JSON for PDF miss. | `modules/pdf-handler.js`, `sw.js` |
| Update interruption | SW update reload is delayed if active teaching runtime is detected. | `app.js` |
| Runtime assessment save failure | Overlay shows inline failure message and re-enables save button. | `screens/sesi-runtime.js` |

### UNKNOWN

- Full user-facing handling for every `screens/dashboard.js` internal error path was not exhaustively traced.
- Exact behavior if IndexedDB quota is exceeded during class/session use is browser-dependent and not fully specified.

---

## 9. Runtime Dependency Chain

### VERIFIED

| Dependency type | Runtime dependency | Blocking level | Evidence |
|---|---|---|---|
| Boot-critical | `index.html` -> `app.js` | Blocking | Main module entry. |
| Boot-critical | `storage/db.js` / IndexedDB | Blocking | `initApp()` stops on failed `db.init()`. |
| Boot-critical | DOM screen roots | Blocking for related screens | `app.js` queries IDs defined in `index.html`. |
| Session-critical | `screens/activation.js` | Blocking for activation/session validation | `checkExistingSession()` and activation renderer. |
| Persistence-critical | `storage/db.js` | Blocking for local data | All storage modules depend on it. |
| Persistence-critical | `storage/nilai.js` | Critical for class/student/grade data | Dashboard/nilai depend on it. |
| Persistence-critical | `storage/presensi.js` | Critical for attendance completion | Dashboard final save. |
| Persistence-critical | `storage/jejak.js` | Critical for teaching trace/history | Dashboard final save and jejak screen. |
| Recovery-critical | `storage/export.js` | Critical for backup/import | Settings export/import. |
| Offline-critical | `sw.js` | Critical for PWA/offline reliability | SW install/fetch/message lifecycle. |
| Optional/degraded | Service Worker support | Non-blocking for app boot | `_registerServiceWorker()` logs and returns if unsupported. |
| Network dependency | Supabase REST/RPC | Blocking for first activation/admin | `screens/activation.js`, `admin/admin.js`. |
| Browser capability | Web Crypto | Critical for session signing/validation | `screens/activation.js`. |
| Browser capability | Cache API | Critical for offline document/app shell behavior | `sw.js`, `modules/pdf-handler.js`. |
| Browser capability | Canvas | Required for report generation only | `modules/pdf-generator.js`. |

### Dependency Chain Map

```text
index.html
  -> app.js
    -> logger.init()
    -> _registerServiceWorker()
      -> sw.js
    -> db.init()
      -> storage/db.js
    -> checkExistingSession()
      -> screens/activation.js
      -> secrets.js
    -> _bindNavigation()
    -> screen renderers
      -> screens/dashboard.js
        -> data/index.js
        -> storage/nilai.js
        -> storage/jejak.js
        -> storage/presensi.js
        -> screens/sesi-runtime.js
          -> storage/siswa-history.js
      -> screens/kurikulum.js
        -> modules/pdf-handler.js
      -> screens/nilai.js
        -> modules/pdf-generator.js
    -> storage/export.js
```

---

## 10. Critical Runtime Boundaries

### VERIFIED

| Boundary | Files | Why boundary matters |
|---|---|---|
| Boot-critical files | `index.html`, `app.js`, `storage/db.js` | App shell, main runtime, and blocking DB init. |
| Persistence-critical files | `storage/db.js`, `storage/nilai.js`, `storage/presensi.js`, `storage/jejak.js`, `storage/siswa-history.js` | Local-first classroom data depends on these modules. |
| Activation-critical files | `screens/activation.js`, `secrets.js`, `admin/admin.js` | Session validation, Supabase activation, admin code management. |
| Update-critical files | `sw.js`, `app.js`, `manifest.json` | Service worker registration, cache lifecycle, PWA update/install behavior. |
| Session-critical files | `screens/dashboard.js`, `screens/sesi-runtime.js`, `storage/presensi.js`, `storage/jejak.js`, `storage/siswa-history.js` | Teaching session flow, resume, completion, attendance, assessment, trace. |
| Recovery-critical files | `storage/export.js`, `storage/db.js`, `app.js` | Export/import, merge safety, UI triggers, backup metadata. |

---

## Runtime State Ownership

### VERIFIED

| Runtime State | Owner | Mutation Authority | Persistence | Runtime Impact |
| ------------- | ----- | ------------------ | ----------- | -------------- |
| `currentScreen` | `app.js` | `navigateTo(screenId, opts)` mutates it after screen transition setup. | In-memory only; browser history gets `{ screen }` through `history.pushState()`. | Controls active screen routing; incorrect mutation can desync visible screen, history, and `_onScreenEnter()`. |
| `session` | `app.js` runtime variable; persisted source is `kv.session` via `screens/activation.js`. | `initApp()` sets from `checkExistingSession()`; `_onActivationSuccess(teacherData)` sets after activation. | Persisted as signed `{ payload, signature }` in `kv.session`; in-memory copy in `app.js`. | Determines splash destination, start screen identity, export manager teacher name, connectivity sync calls, and screen render context. |
| `dashboardRendered` | `app.js` | `_initDashboard()` and import flow mutate it. | In-memory only. | Prevents repeated dashboard render; set false after import so dashboard reloads data. |
| `_jejakDirty` | `app.js` | Initialized true; `_setJejakDirty()` via `window.__FLAF_NAV__`; `_onScreenEnter('s-jejak')` resets false after render. | In-memory only. | Controls whether `renderJejakScreen()` reruns; stale value can skip teaching trace refresh. |
| `deferredInstallPrompt` | `app.js` | `_bindPWAInstall()` captures `beforeinstallprompt`; `_promptInstall()` clears it. | In-memory only; install status also uses `localStorage.flaf_pwa_installed`. | Controls PWA install CTA and prompt availability. |
| `swReg` | `app.js` | `_registerServiceWorker()` sets registration object. | Browser-managed SW registration; variable is in-memory. | Used for SW update/cache stats behavior; null registration limits SW-related UI/control. |
| `exportManager` internal `_state` | `storage/export.js` | `exportManager.init({ getTeacherName })` sets `initialized` and `getTeacherName`. | In-memory only; export metadata persists in `kv`. | Export/import methods throw if not initialized; filename teacher name depends on getter. |
| Export metadata state | `storage/export.js` + `storage/db.js` | `triggerManualExport()`, `checkAndAutoExport()`, `_handleAutoExportFailure()`, `resetExportState()`. | `kv.last_export_at`, `kv.export_pending`, `kv.export_fail_count`. | Drives backup due/urgent state and export reminder behavior. |
| Activation form state | `screens/activation.js` | `renderActivationScreen()` creates DOM; `_attachActivationListeners()` and `activate()` handle submitted values. | Submitted activation success persists `kv.session` and `kv.device_id`. | Invalid mutation can break first-use activation or session creation. |
| Device id state | `screens/activation.js` + `storage/db.js` | `_getOrCreateDeviceId()` creates or reads `kv.device_id`. | `kv.device_id`. | Session validation requires payload device id to match current device id. |
| Dashboard flow `_flow` | `screens/dashboard.js` | Dashboard internal handlers mutate selected view, rombel, TP, status map, siswa list, nilai cache. | Mostly in-memory; final outputs persist through storage modules. | Owns teaching dashboard progression; cross-module mutation can break rombel/TP/session context. |
| Dashboard scenario `_skenario` | `screens/dashboard.js` | Dashboard stepper handlers mutate `stepIndex`, `langkahIndex`, mood/kendala, paging, assessment flags. | In-memory only. | Controls dashboard stepper and transition into `screens/sesi-runtime.js`. |
| Dashboard phase cache `_faseData` | `screens/dashboard.js` | `_loadFaseData()` and `resetDashboard()` mutate. | In-memory cache of `data/index.js` result. | Stale or invalid cache affects curriculum/TP rendering in dashboard. |
| Active session `_state` | `screens/sesi-runtime.js` | `mount()` initializes; `_transition()` mutates; assessment overlay may set `sesiId`; `unmount()` clears root but not full object. | Resume subset persists to `kv.sesi_aktif`; assessment persists via `penilaian_log`. | Owns active teaching runtime state machine; external mutation risks lost resume, wrong phase/step, or assessment mis-keying. |
| Runtime resume state | `screens/sesi-runtime.js` + `storage/db.js` | `_persistState()` writes; `mount()` reads; `_nextFase()` and resume reset remove. | `kv.sesi_aktif`. | Enables recovery of interrupted teaching session within `RESUME_MAX_MS`. |
| Renderer rendered flags | `app.js` + DOM roots | `_onScreenEnter()` sets `root.dataset.rendered` for activation and curriculum roots. | DOM dataset only. | Prevents duplicate render/mount; incorrect reset can duplicate listeners or prevent rerender. |
| Nilai/class state | `storage/nilai.js` | Public `nilai.*` APIs mutate class, student, grade, SAS/sumatif data. | `nilai_data`. | Core class/student/grade records; corruption affects recaps and reports. |
| Attendance state | `storage/presensi.js` | `presensi.simpan()` and `presensi.hapus()` mutate. | `presensi_log`. | Drives attendance recap and reports. |
| Teaching log state | `storage/jejak.js` | `jejak.log()` and `jejak.hapus()` mutate. | `teaching_log`. | Drives teaching trace, streaks, summaries. |
| Assessment history state | `storage/siswa-history.js` | `savePenilaian()` mutates. | `penilaian_log`. | Stores per-session per-student assessment history; wrong keying can fragment assessment records. |
| Service worker cache state | `sw.js` | SW lifecycle and message handlers mutate Cache API entries. | Cache API: `CACHE_VERSION`, `PDF_CACHE_NAME`, `flaf-fonts`. | Controls offline availability, update behavior, PDF/document cache status. |

### INFERRED

| Runtime State | Owner | Mutation Authority | Persistence | Runtime Impact |
| ------------- | ----- | ------------------ | ----------- | -------------- |
| Screen renderer state | Individual `screens/*.js` modules | Only owning renderer module should mutate its module-local state and DOM root. | Usually in-memory/DOM; selected outputs persist via `storage/*`. | Cross-screen mutation can desync UI from persisted data because no global state manager exists. |
| Navigation history state | Browser History API via `app.js` | `navigateTo()` writes; `popstate` reads and calls `navigateTo(..., { skipHistory: true })`. | Browser session history. | Manual mutation outside `navigateTo()` can cause back-button mismatch. |
| Offline/update pending state | `app.js` + browser `sessionStorage` | `_registerServiceWorker()` sets `sw_pending_update` / `sw_reloaded`. | `sessionStorage`. | Prevents reload loops and delays updates during active runtime; later consumption of `sw_pending_update` is not fully confirmed. |

### UNKNOWN

| Runtime State | Owner | Mutation Authority | Persistence | Runtime Impact |
| ------------- | ----- | ------------------ | ----------- | -------------- |
| Complete dashboard inline global handler state | `screens/dashboard.js` | Multiple `window.dash*` handlers observed, but full mutation map not exhaustively traced. | Mixed in-memory + storage writes. | Requires local source review before editing dashboard state transitions. |
| `teacher_data` full ownership | `screens/dashboard.js` confirmed writes `progress_tp_N`; other writers not fully verified. | Confirmed mutation via `db.set('teacher_data', progress_tp_N, ...)`; additional mutation authority unknown. | `teacher_data`. | Used for progress; broader semantics require further source verification. |
| `log_queue` active ownership | `storage/db.js` creates store; active writer not confirmed in observed runtime. | UNKNOWN. | `log_queue`. | Do not remove or repurpose without full repository verification. |

---

## 11. Observation Status

### VERIFIED

- `index.html` loads the static screen shell and `app.js`.
- `app.js` owns boot, navigation, SW registration, session check, and runtime globals.
- `db.init()` is boot-blocking.
- Existing session check occurs after DB init.
- Activation requires DB readiness and Supabase network flow.
- Runtime session state persists to `kv.sesi_aktif`.
- Attendance is saved at dashboard session completion.
- Assessment history is saved during runtime overlay save.
- Teaching logs are saved at dashboard session completion.
- Service worker install/activate/fetch/message flows are defined in `sw.js`.
- Manual export/import flows are implemented in `storage/export.js` and exposed through `app.js`.

### INFERRED

- Runtime design prioritizes local continuity during classroom use over server-backed real-time state.
- The active teaching runtime is treated as an update-sensitive area because SW reload is delayed when it is detected.

### UNKNOWN

- Full behavior of all dashboard inline global handlers was not exhaustively traced.
- Production deployment headers and SW update timing outside browser defaults are unknown.
- Supabase server-side RPC/table policy behavior is unknown from repository source.
- Exact recovery process after user loses local backup files is not represented in source.
