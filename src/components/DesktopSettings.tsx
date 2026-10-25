import { Download, MonitorSmartphone, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { desktop } from '../lib/desktop';
import type { DesktopInfo } from '../lib/desktop';
import { megabytes, updateApi, useUpdate } from '../lib/update';
import { DownloadCard } from './DownloadApp';

const ago = (time: number) => {
  if (!time) return 'not checked yet';
  const minutes = Math.round((Date.now() - time) / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.round(minutes / 60);
  return hours < 24 ? `${hours} h ago` : `${Math.round(hours / 24)} d ago`;
};

function Row({ label, hint, checked, disabled, onChange }: { label: string; hint: string; checked: boolean; disabled?: boolean; onChange: (value: boolean) => void }) {
  return <button type="button" role="switch" aria-checked={checked} disabled={disabled} onClick={() => onChange(!checked)} className="flex w-full items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3.5 text-left text-[13px] font-semibold hover:border-ink disabled:opacity-50">
    <span>{label}<small className="mt-1 block text-[11px] font-normal text-muted">{hint}</small></span>
    <span aria-hidden="true" className={`flex h-6 w-11 shrink-0 items-center rounded-full px-1 ${checked ? 'bg-ink' : 'bg-muted'}`}><span className={`h-4 w-4 rounded-full bg-canvas transition-transform ${checked ? 'translate-x-5' : ''}`} /></span>
  </button>;
}

/** In a browser: the download card. In the desktop app: window behaviour and updates. */
export function DesktopSettings() {
  const [info, setInfo] = useState<DesktopInfo | null>(null);
  const [repo, setRepo] = useState('');
  const update = useUpdate();
  useEffect(() => { void desktop?.getInfo().then(setInfo); }, []);
  useEffect(() => { if (update) setRepo((value) => (value === '' ? update.repo : value)); }, [update?.repo]); // eslint-disable-line react-hooks/exhaustive-deps
  if (!desktop) return <DownloadCard className="mt-5" />;
  if (!info) return null;
  const set = async (patch: Partial<DesktopInfo['behavior']>) => { await desktop?.setBehavior(patch); setInfo({ ...info, behavior: { ...info.behavior, ...patch } }); };
  const busy = update?.status === 'checking' || update?.status === 'downloading' || update?.status === 'launching';
  const available = update?.status === 'available';
  const line = !update ? '' : update.status === 'unconfigured' ? 'Enter the GitHub repository below to turn update checks on.'
    : update.status === 'checking' ? 'Checking...'
    : update.status === 'uptodate' ? `You have the latest version (${update.current}). Checked ${ago(update.checkedAt)}.`
    : update.status === 'available' ? `Version ${update.latest} is available${update.size ? ` (${megabytes(update.size)})` : ''}.`
    : update.status === 'downloading' ? `Downloading and checking the file, ${update.progress}%`
    : update.status === 'launching' ? 'Starting the installer. The app closes and reopens by itself.'
    : update.status === 'error' ? update.error : `Version ${update.current}. Last checked ${ago(update.checkedAt)}.`;
  return <section aria-labelledby="desktop-heading" data-testid="desktop-settings" className="mt-5 rounded-2xl border border-line bg-canvas p-6 sm:p-7">
    <div className="flex items-center gap-2"><MonitorSmartphone size={19} /><h2 id="desktop-heading" className="text-[19px] font-semibold">Desktop app</h2><span className="ml-auto font-mono text-[10px] text-muted">v{info.version}</span></div>
    <p className="mt-2 max-w-[640px] text-[12px] leading-relaxed text-muted">How the window behaves on this computer. Everything is optional and nothing runs in the background unless you turn it on.</p>
    <div className="mt-5 grid gap-3 lg:grid-cols-2">
      <Row label="Keep running in the tray when I close the window" hint="Off means closing the window quits the app." checked={info.behavior.closeToTray} onChange={(value) => void set({ closeToTray: value })} />
      <Row label="Always on top" hint="Keeps the window above other windows, handy next to a paper." checked={info.behavior.alwaysOnTop} onChange={(value) => void set({ alwaysOnTop: value })} />
      <Row label="Remember window size and position" hint="Reopens where you left it." checked={info.behavior.rememberPosition} onChange={(value) => void set({ rememberPosition: value })} />
      {info.canAutostart && <Row label="Open at login" hint="Starts the app when you sign in to Windows." checked={info.behavior.openAtLogin} onChange={(value) => void set({ openAtLogin: value })} />}
      {info.canAutostart && info.behavior.openAtLogin && <Row label="Start hidden in the tray" hint="Only applies when it opens at login. It needs the tray option above to stay reachable." checked={info.behavior.startHidden} onChange={(value) => void set({ startHidden: value })} />}
    </div>
    {update && !update.disabled && <div className="mt-6 border-t border-line pt-5">
      <h3 className="text-[14px] font-semibold">Updates</h3>
      <p role="status" className={`mt-3 rounded-xl border bg-canvas px-3.5 py-2.5 text-[11px] ${update.status === 'error' ? 'border-ink' : 'border-line'}`}>{line}</p>
      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <Row label="Check in the background" hint="At start and every few hours. It only asks you; nothing installs without a click." checked={update.auto} disabled={!update.configured} onChange={(value) => void updateApi.setConfig({ auto: value })} />
        <label className="block rounded-xl border border-line bg-surface px-4 py-3">
          <span className="block text-[12px] font-semibold">GitHub repository</span>
          <span className="mt-0.5 block text-[10px] leading-snug text-muted">Written as owner/repository. The latest release needs <code>Sarang-md-x.y.z.exe</code> and a matching <code>.sha256</code> file.</span>
          <span className="mt-2 flex gap-2">
            <input className="min-w-0 flex-1 rounded-lg border border-line bg-canvas px-3 py-2 text-[12px]" value={repo} onChange={(event) => setRepo(event.target.value)} placeholder="owner/repository" spellCheck={false} autoCapitalize="off" aria-label="GitHub repository" />
            <button type="button" className="studio-button" disabled={repo.trim() === update.repo} onClick={() => void updateApi.setConfig({ repo: repo.trim() })}>Save</button>
          </span>
        </label>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" className="studio-button" disabled={busy || !update.configured} onClick={() => void updateApi.check()}><RefreshCw size={13} className={update.status === 'checking' ? 'animate-spin' : ''} />Check now</button>
        {available && <button type="button" className="studio-button studio-button-primary" disabled={busy} onClick={() => void updateApi.install()}><Download size={13} />{update.canUpdate ? `Update to ${update.latest}` : 'Open release page'}</button>}
      </div>
      {!update.canSelfUpdate && <p className="mt-3 text-[10px] leading-relaxed text-muted">This copy was not installed with the setup, so it can tell you about updates but cannot replace itself. Run the new exe to install it.</p>}
    </div>}
  </section>;
}
