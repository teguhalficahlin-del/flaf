/**
 * screens/jejak.js — FLAF Layar Jejak Mengajar
 */

import { jejak } from '../storage/jejak.js';

let _container = null;
let _session   = null;

function _escape(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function _formatTime(isoStr) {
  if (!isoStr) return '';
  const d = new Date(isoStr);
  return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

function _relativeTime(isoStr) {
  if (!isoStr) return '';
  const diff = Date.now() - new Date(isoStr).getTime();
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);
  if (mins < 1)   return 'Baru saja';
  if (mins < 60)  return `${mins} menit lalu`;
  if (hours < 24) return `${hours} jam lalu`;
  if (days === 1) return 'Kemarin';
  return `${days} hari lalu`;
}

function _streakLabel(streak) {
  if (streak === 0) return 'Belum ada aktivitas';
  if (streak < 3)   return 'Awal yang bagus!';
  if (streak < 7)   return 'Terus semangat!';
  if (streak < 14)  return 'Guru Konsisten! 🌟';
  if (streak < 30)  return 'Luar Biasa! 🏆';
  return 'Legenda Mengajar! 🔥';
}

function _streakEmoji(streak) {
  if (streak === 0) return '📚';
  if (streak < 3)   return '✨';
  if (streak < 7)   return '⚡';
  if (streak < 14)  return '🌟';
  if (streak < 30)  return '🏆';
  return '🔥';
}

function _actionLabel(action) {
  if (action === 'mulai')   return 'Mulai mengajar';
  if (action === 'selesai') return 'Selesai mengajar';
  if (action === 'reset')   return 'Reset TP';
  if (action === 'nilai')   return 'Simpan nilai';
  return action;
}

function _actionColor(action) {
  if (action === 'selesai') return '#D4AE3A';
  if (action === 'mulai')   return '#D4AE3A';
  if (action === 'reset')   return 'rgba(255,255,255,.3)';
  if (action === 'nilai')   return '#D4AE3A';
  return 'rgba(255,255,255,.3)';
}

function _buildCalendar(activeDays) {
  const today   = new Date();
  const days    = [];
  const activeSet = new Set(activeDays);
  for (let i = 34; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    days.push({ dateStr, active: activeSet.has(dateStr), isToday: i === 0 });
  }
  const cells = days.map(d => `
    <div title="${d.dateStr}" style="
      width:16px;height:16px;border-radius:3px;
      background:${d.active ? '#D4AE3A' : d.isToday ? 'rgba(212,174,58,.2)' : 'rgba(255,255,255,.06)'};
      border:${d.isToday ? '1px solid rgba(212,174,58,.4)' : 'none'};
      flex-shrink:0;
    "></div>`).join('');
  return `
    <div style="display:flex;flex-wrap:wrap;gap:4px;">${cells}</div>
    <div style="display:flex;align-items:center;gap:12px;margin-top:8px;">
      <div style="display:flex;align-items:center;gap:4px;">
        <div style="width:10px;height:10px;border-radius:2px;background:#D4AE3A;"></div>
        <span style="font-size:12px;color:rgba(255,255,255,.6);">Aktif</span>
      </div>
      <div style="display:flex;align-items:center;gap:4px;">
        <div style="width:10px;height:10px;border-radius:2px;background:rgba(255,255,255,.06);"></div>
        <span style="font-size:12px;color:rgba(255,255,255,.6);">Tidak aktif</span>
      </div>
    </div>`;
}

// Poin 20: build kendala summary card
function _buildKendalaSummaryHTML(kendalaSummary) {
  if (!kendalaSummary || kendalaSummary.length === 0) return '';
  const items = kendalaSummary.map(k =>
    `<div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.05);">
      <span style="font-size:13px;color:rgba(255,255,255,.75);">${_escape(k.kendala)}</span>
      <span style="font-size:13px;font-weight:700;color:#D4AE3A;">${k.jumlah}×</span>
    </div>`
  ).join('');
  return `
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,174,58,.2);border-radius:14px;padding:14px;">
    <div style="font-size:12px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;margin-bottom:10px;">Kendala Bulan Ini</div>
    ${items}
  </div>`;
}

function _buildJejakHTML(streak, summary, logs, kendalaSummary) {
  const recentLogs = logs.slice(0, 10);
  const emoji      = _streakEmoji(streak);
  const label      = _streakLabel(streak);

  return `
<div style="padding:16px 16px 90px;display:flex;flex-direction:column;gap:10px;">

  <!-- STREAK CARD -->
  <div style="background:rgba(212,174,58,.07);border:1px solid rgba(212,174,58,.2);border-radius:14px;padding:16px;text-align:center;position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background-image:radial-gradient(circle,rgba(212,174,58,.06) 1px,transparent 1px);background-size:18px 18px;pointer-events:none;"></div>
    <div style="position:relative;">
      <div style="font-size:48px;line-height:1;margin-bottom:6px;">${emoji}</div>
      <div style="font-size:36px;font-weight:800;color:#D4AE3A;line-height:1;">${streak}</div>
      <div style="font-size:15px;color:rgba(255,255,255,.7);margin-top:2px;">hari berturut-turut</div>
      <div style="font-size:15px;font-weight:700;color:#fff;margin-top:8px;">${label}</div>
      ${streak > 0 ? `<button onclick="jejakShare()" style="margin-top:12px;background:#D4AE3A;color:#1A1A1A;border:none;border-radius:10px;padding:10px 20px;font-size:13px;font-weight:800;letter-spacing:.06em;cursor:pointer;">📤 Bagikan Pencapaian</button>` : ''}
    </div>
  </div>

  <!-- STATISTIK BULAN INI -->
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,174,58,.2);border-radius:14px;padding:14px;">
    <div style="font-size:12px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;margin-bottom:12px;">Bulan Ini</div>
    <div style="display:flex;gap:8px;">
      <div style="flex:1;background:rgba(255,255,255,.04);border-radius:10px;padding:10px 8px;text-align:center;">
        <div style="font-size:20px;font-weight:800;color:#D4AE3A;">${summary.hari_aktif}</div>
        <div style="font-size:12px;color:rgba(255,255,255,.6);margin-top:2px;">Hari aktif</div>
      </div>
      <div style="flex:1;background:rgba(255,255,255,.04);border-radius:10px;padding:10px 8px;text-align:center;">
        <div style="font-size:20px;font-weight:800;color:#D4AE3A;">${summary.pertemuan}</div>
        <div style="font-size:12px;color:rgba(255,255,255,.6);margin-top:2px;">Pertemuan</div>
      </div>
      <div style="flex:1;background:rgba(255,255,255,.04);border-radius:10px;padding:10px 8px;text-align:center;">
        <div style="font-size:20px;font-weight:800;color:#D4AE3A;">${summary.tp_selesai}</div>
        <div style="font-size:12px;color:rgba(255,255,255,.6);margin-top:2px;">TP selesai</div>
      </div>
    </div>
  </div>

  <!-- POIN 20: KENDALA BULAN INI -->
  ${_buildKendalaSummaryHTML(kendalaSummary)}

  <!-- KALENDER AKTIVITAS -->
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,174,58,.2);border-radius:14px;padding:14px;">
    <div style="font-size:12px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;margin-bottom:12px;">35 Hari Terakhir</div>
    ${_buildCalendar(summary.active_days)}
  </div>

  <!-- RIWAYAT TERBARU -->
  <div style="background:rgba(255,255,255,.04);border:1px solid rgba(212,174,58,.2);border-radius:14px;overflow:hidden;">
    <div style="padding:12px 14px 10px;border-bottom:1px solid rgba(212,174,58,.15);display:flex;align-items:center;justify-content:space-between;">
      <div style="font-size:12px;font-weight:700;color:rgba(212,174,58,.7);letter-spacing:.08em;text-transform:uppercase;">Riwayat Terbaru</div>
      <div style="font-size:12px;color:rgba(255,255,255,.5);">${logs.length} entri</div>
    </div>
    ${recentLogs.length === 0 ? `
      <div style="padding:24px;text-align:center;">
        <div style="font-size:24px;margin-bottom:8px;">📝</div>
        <div style="font-size:15px;color:rgba(255,255,255,.6);">Belum ada aktivitas tercatat.</div>
        <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:4px;">Mulai mengajar dari Dashboard.</div>
      </div>
    ` : recentLogs.map(l => `
      <div style="display:flex;gap:12px;padding:11px 14px;border-bottom:1px solid rgba(255,255,255,.05);align-items:flex-start;">
        <div style="width:8px;height:8px;border-radius:50%;background:${_actionColor(l.action)};margin-top:4px;flex-shrink:0;"></div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:15px;font-weight:700;color:rgba(255,255,255,.8);">TP ${l.tp_nomor} — ${_escape(l.tp_nama)}</div>
          <div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:2px;">${_actionLabel(l.action)} · ${_relativeTime(l.taught_at)}</div>
          ${l.rombel_nama ? `<div style="font-size:12px;color:rgba(255,255,255,.55);margin-top:3px;">📋 ${_escape(l.rombel_nama)}${l.jumlah_siswa !== null ? ` · ${l.jumlah_siswa} siswa` : ''}</div>` : ''}
          ${l.kendala ? `<div style="font-size:12px;color:rgba(212,174,58,.5);margin-top:3px;">${{ lancar: '✅ Lancar', waktu_kurang: '⏱ Waktu kurang', kurang_kondusif: '📢 Kurang kondusif', media_tidak_ada: '🖼 Media tidak ada', lainnya: '📝 Lainnya' }[l.kendala] || ''}</div>` : ''}
          ${l.note ? `<div style="font-size:12px;color:rgba(255,255,255,.5);margin-top:4px;font-style:italic;">"${_escape(l.note)}"</div>` : ''}
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;flex-shrink:0;">
          <div style="font-size:12px;color:rgba(255,255,255,.5);">${_formatTime(l.taught_at)}</div>
          <button onclick="jejakHapusEntri('${l.id}')" style="background:transparent;border:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.4);border-radius:6px;padding:3px 8px;font-size:12px;cursor:pointer;">Hapus</button>
        </div>
      </div>
    `).join('')}
  </div>

</div>`;
}

window.jejakShare = async function() {
  const summary = await jejak.getShareSummary();
  const text = `🔥 Jejak Mengajar FLAF\n\n` +
    `📅 Streak: ${summary.streak} hari berturut-turut\n` +
    `✅ Total selesai: ${summary.total_selesai} TP\n` +
    `📚 Total pertemuan: ${summary.total_pertemuan}x\n` +
    `📆 Bulan ini: ${summary.bulan_ini.hari_aktif} hari aktif\n\n` +
    `#FLAF #GuruBahasaInggris #FaseA`;
  if (navigator.share) {
    try { await navigator.share({ title: 'Jejak Mengajar FLAF', text }); }
    catch (e) { if (e.name !== 'AbortError') _fallbackCopy(text); }
  } else { _fallbackCopy(text); }
};

function _fallbackCopy(text) {
  navigator.clipboard.writeText(text)
    .then(() => { if (window.__FLAF__?.showToast) window.__FLAF__.showToast('Teks pencapaian disalin!'); })
    .catch(() => {});
}

window.jejakHapusEntri = async function(id) {
  try {
    await jejak.hapus(id);
    if (_container) {
      const [streak, summary, logs, kendalaSummary] = await Promise.all([
        jejak.getStreak(),
        jejak.getMonthSummary(),
        jejak.getAll(),
        jejak.getKendalaSummary(),
      ]);
      _container.innerHTML = _buildJejakHTML(streak, summary, logs, kendalaSummary);
    }
  } catch (err) {
    console.error('[JEJAK] hapus entri error:', err.message);
  }
};

export async function renderJejakScreen(container, session) {
  if (!container) return;
  _container = container;
  _session   = session;

  container.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;height:60vh;">
      <div style="text-align:center;">
        <div style="font-size:32px;margin-bottom:12px;">📊</div>
        <div style="font-size:13px;color:rgba(255,255,255,.4);">Memuat jejak mengajar…</div>
      </div>
    </div>`;

  try {
    const [streak, summary, logs, kendalaSummary] = await Promise.all([
      jejak.getStreak(),
      jejak.getMonthSummary(),
      jejak.getAll(),
      jejak.getKendalaSummary(),
    ]);
    container.innerHTML = _buildJejakHTML(streak, summary, logs, kendalaSummary);
    if (session?.device_id) {
      jejak.sync(session.device_id).catch(() => {});
    }
  } catch (err) {
    console.error('[JEJAK] render error:', err);
    container.innerHTML = `
      <div style="padding:32px;text-align:center;">
        <div style="font-size:13px;color:rgba(255,255,255,.4);">Gagal memuat jejak mengajar.</div>
      </div>`;
  }
}
