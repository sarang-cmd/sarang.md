import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { desktop } from '../lib/desktop';
import { buildActivity, DISCORD_LOGO, effectiveAppId, isAppId, setDiscord, useDiscordSettings, type DiscordSettings } from '../lib/discord';
import { SUITE } from '../lib/suite';

const LABEL: Record<string, string> = { off: 'Off', connecting: 'Connecting to Discord...', waiting: 'Waiting for the Discord app. Open it on this computer.', connected: 'Connected', error: 'Problem' };

function Row({ label, hint, checked, disabled, onChange }: { label: string; hint: string; checked: boolean; disabled?: boolean; onChange: (value: boolean) => void }) {
  return <button type="button" role="switch" aria-checked={checked} disabled={disabled} onClick={() => onChange(!checked)} className="flex w-full items-center justify-between gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-left text-[13px] font-semibold disabled:opacity-50">
    <span>{label}<small className="mt-0.5 block text-[11px] font-normal text-muted">{hint}</small></span>
    <span aria-hidden="true" className={`flex h-6 w-11 shrink-0 items-center rounded-full px-1 ${checked ? 'bg-ink' : 'bg-muted'}`}><span className={`h-4 w-4 rounded-full bg-canvas transition-transform ${checked ? 'translate-x-5' : ''}`} /></span>
  </button>;
}

/** Desktop app: the Discord status settings. Browser: what it is and why it needs the app. */
export function DiscordCard() {
  const settings = useDiscordSettings();
  const [live, setLive] = useState({ status: 'off', detail: '' });
  useEffect(() => desktop?.onDiscordStatus?.((next) => setLive(next)), []);
  const set = (patch: Partial<DiscordSettings>) => setDiscord(patch);
  const id = effectiveAppId(settings);
  const idOk = settings.appId === '' || isAppId(settings.appId);
  const preview = buildActivity({ ...settings, enabled: true }, { place: 'textbook', topic: 'SL 4.7 Regression', examEndsAt: 0, timerRunning: true, timerPhase: 'work', timerEndsAt: Date.now() + 1450_000 });
  const needsId = settings.enabled && id === '';
  return <section aria-labelledby="discord-heading" data-testid="discord-card" className="mt-5 rounded-2xl border border-line bg-canvas p-6 sm:p-7">
    <div className="flex items-center gap-2"><MessageCircle size={19} aria-hidden="true" /><h2 id="discord-heading" className="text-[19px] font-semibold tracking-[-0.03em]">Discord status</h2>{!desktop && <span className="ml-auto font-mono text-[10px] text-muted">DESKTOP APP</span>}</div>
    <p className="mt-2 max-w-[640px] text-[12px] leading-relaxed text-muted">Shows what you choose on your own Discord profile while you study, with the Sarang.md logo. Off by default. The app talks to the Discord app on your computer; nothing goes to any server of ours.</p>
    {!desktop ? <p className="mt-4 rounded-xl border border-line bg-surface px-4 py-3 text-[12px] leading-relaxed text-muted" data-testid="discord-web-note">A web page cannot talk to the Discord app on your computer, so this switch only exists in the desktop app. <a className="font-semibold text-ink underline underline-offset-2" href={SUITE.md.downloadsUrl}>Get the desktop app</a>, then turn it on here.</p> : <>
      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <Row label="Show my study status on Discord" hint="Open the Discord app on this computer too." checked={settings.enabled} onChange={(enabled) => set({ enabled })} />
        <Row label="What I am doing" hint="Reading, practising, mock exam. Off shows only Studying IB Maths." checked={settings.showActivity} onChange={(showActivity) => set({ showActivity })} />
        <Row label="The chapter I am reading" hint="Off by default because it can be personal." checked={settings.showTopic} onChange={(showTopic) => set({ showTopic })} />
        <Row label="A live timer" hint="Time left in a study block or a mock exam." checked={settings.showTimer} onChange={(showTimer) => set({ showTimer })} />
        <Row label="Keep my status during breaks" hint="Off clears your status while a break runs." checked={settings.showBreaks} onChange={(showBreaks) => set({ showBreaks })} />
        <Row label="Show Browsing when I am not studying" hint="Off clears your status on the home page and settings." checked={settings.showIdle} onChange={(showIdle) => set({ showIdle })} />
        <Row label="Add an Open Sarang.md button" hint="Other people see it, you do not." checked={settings.button} onChange={(button) => set({ button })} />
      </div>
      <p role="status" data-testid="discord-status" className={`mt-4 rounded-xl border px-3.5 py-2.5 text-[11px] ${(live.status === 'error' || needsId) && settings.enabled ? 'border-ink font-semibold' : 'border-line text-muted'}`}>
        {needsId ? 'Needs an Application ID. Add it below (one minute, once).' : !settings.enabled ? 'Off' : `${LABEL[live.status] ?? live.status}${live.status === 'connected' && live.detail ? ` as ${live.detail}` : ''}${live.status === 'error' && live.detail ? `: ${live.detail}` : ''}`}
      </p>
      <div className="mt-3 flex items-center gap-3 rounded-xl border border-line px-3.5 py-3 text-[11px]" role="group" aria-label="Preview of your status" data-testid="discord-preview">
        <img src={`${import.meta.env.BASE_URL}app-icon-512.png`} alt="" width={44} height={44} className="rounded-lg" />
        <div><p className="font-mono text-[10px] uppercase tracking-wider text-muted">Preview, while a study block runs</p><p className="mt-1 font-semibold">{preview?.details}</p>{preview?.state && <p className="text-muted">{preview.state}</p>}{preview?.timestamps && <p className="text-muted">24:10 left</p>}</div>
      </div>
      <details className="mt-4 rounded-xl border border-line bg-surface px-4 py-3" open={needsId || !idOk}>
        <summary className="cursor-pointer text-[13px] font-semibold">Application ID (so Discord says "Sarang.md")</summary>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-[11px] leading-relaxed text-muted">
          <li>Open discord.com/developers/applications and press New Application. Name it <strong>Sarang.md</strong>. That name is what your profile shows after "Playing".</li>
          <li>On General Information, upload the app logo as the application icon: <a className="font-semibold text-ink underline underline-offset-2" href={DISCORD_LOGO} target="_blank" rel="noreferrer">sarang-md.vercel.app/app-icon-512.png</a>. The picture inside the status already uses this logo with no upload.</li>
          <li>Copy the Application ID and paste it below.</li>
        </ol>
        <label className="mt-3 block text-[11px] font-semibold">Application ID
          <input className="mt-1.5 w-full rounded-lg border border-line bg-canvas px-3 py-2 font-mono text-[12px] font-normal" inputMode="numeric" autoComplete="off" spellCheck={false} maxLength={20} value={settings.appId} onChange={(event) => set({ appId: event.target.value })} placeholder="17 to 20 digits" aria-invalid={!idOk} />
        </label>
        {!idOk && <p className="mt-1 text-[10px] text-muted">An Application ID is 17 to 20 digits.</p>}
      </details>
    </>}
  </section>;
}
