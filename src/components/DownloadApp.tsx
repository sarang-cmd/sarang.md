import { Download, ExternalLink } from 'lucide-react';
import { isDesktop } from '../lib/desktop';
import { SUITE } from '../lib/suite';

/** A quiet "Get the app" link for the top bar. It only exists in the browser version; the desktop app is the app. */
export function DownloadPill() {
  if (isDesktop) return null;
  return <a href={SUITE.md.latestUrl} target="_blank" rel="noopener noreferrer" data-testid="download-pill" aria-label="Download the desktop app (opens GitHub)"
    data-tip="Download the desktop app for Windows"
    className="hidden h-9 shrink-0 items-center gap-1.5 rounded-full border border-line px-3 text-[12px] font-semibold text-muted transition-colors duration-200 hover:border-ink hover:text-ink xl:inline-flex">
    <Download size={14} strokeWidth={1.9} aria-hidden="true" /><span className="hidden min-[1650px]:inline">Get the app</span>
  </a>;
}

/** A card (browser version only) explaining what the desktop app adds. Used on the Focus studio and in Settings. */
export function DownloadCard({ className = 'mt-6' }: { className?: string }) {
  if (isDesktop) return null;
  return <section aria-labelledby="get-app-heading" data-testid="download-card" className={`${className} rounded-2xl border border-line bg-surface px-5 py-5 sm:px-7`}>
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="max-w-[640px]">
        <p className="section-label">Desktop app for Windows</p>
        <h2 id="get-app-heading" className="mt-2 text-[18px] font-semibold tracking-[-0.03em]">Sarang.md, outside the browser</h2>
        <p className="mt-2 text-[12.5px] leading-[1.75] text-muted">One program with its own window. The whole course, the question bank, the formula booklet and the focus corner work offline, your encrypted profile stays on your computer, and an updater keeps it current. Nothing is installed without your click.</p>
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-2">
        <a href={SUITE.md.directUrl} data-testid="download-direct" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-[13px] font-semibold text-canvas transition-opacity hover:opacity-80"><Download size={15} aria-hidden="true" />Download for Windows</a>
        <a href={SUITE.md.latestUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line px-4 text-[12px] font-semibold text-muted hover:border-ink hover:text-ink">All downloads<ExternalLink size={13} aria-hidden="true" /></a>
      </div>
    </div>
    <p className="mt-3 text-[11px] leading-relaxed text-muted">The installer is signed with a self-made certificate, so Windows SmartScreen may ask you to confirm once (More info, then Run anyway). The SHA-256 is on the release page. macOS can run the same source today; a Mac build is not published yet. Looking for ambient sound, goals and a floating timer for any subject? That is <a href={SUITE.study.landingUrl} target="_blank" rel="noopener noreferrer" className="underline">Study with Sarang</a>.</p>
  </section>;
}
