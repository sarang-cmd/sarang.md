import { ArrowUpRight, Github, Globe2, Info } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';

const domains = [
  { host: 'sarang-md.vercel.app', note: 'Canonical destination shown by the redirect in the supplied screenshot.' },
  { host: 'sarmd.vercel.app', note: 'Alternate address shown in the supplied screenshot.' },
  { host: 'mdsarang.vercel.app', note: 'Alternate address shown in the supplied screenshot.' },
  { host: 'md-sarang.vercel.app', note: 'Alternate address shown in the supplied screenshot.' },
  { host: 'sarangmd.vercel.app', note: 'The screenshot showed a redirect to sarang-md.vercel.app.' },
];

export function MirrorsPage() {
  return <div className="mx-auto w-full max-w-[980px] px-5 pb-28 pt-9 sm:px-9 sm:pt-12 lg:px-12 xl:px-16">
    <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Mirrors' }]} />
    <p className="section-label mb-5">Site addresses / reference links</p>
    <h1 className="text-[clamp(3rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.07em]">A few ways<br />to find us<span className="text-faint">.</span></h1>
    <p className="mt-6 max-w-[640px] text-[15px] leading-[1.8] text-muted">The Vercel hostnames below were shown in the screenshot provided for this project. External addresses can change, and this downloadable update will not appear on them until a new version is deployed.</p>
    <div className="mt-12 space-y-3">{domains.map((item, index) => <a key={item.host} href={`https://${item.host}`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-xl border border-line bg-canvas p-5 transition-colors hover:border-ink hover:bg-surface sm:p-6"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface"><Globe2 size={18} strokeWidth={1.7} /></span><span className="min-w-0 flex-1"><span className="block truncate text-[15px] font-semibold tracking-tight">{item.host}</span><span className="mt-1 block text-[11px] leading-relaxed text-muted">{item.note}</span></span><span className="hidden font-mono text-[10px] text-faint sm:block">{String(index + 1).padStart(2, '0')}</span><ArrowUpRight size={17} className="shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>)}</div>
    <div className="mt-12 rounded-xl border border-line bg-surface p-5 sm:p-6"><div className="flex items-start gap-3"><Github size={20} className="mt-0.5 shrink-0" /><div><h2 className="text-[16px] font-semibold">Project repository</h2><a href="https://github.com/sarang-cmd/sarang.md" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1.5 break-all text-[12px] font-semibold underline underline-offset-4">github.com/sarang-cmd/sarang.md <ArrowUpRight size={13} className="shrink-0" /></a><p className="mt-3 text-[11px] leading-relaxed text-muted">This working GitHub repository URL was provided for the project and verified as reachable. The links above are separately hosted addresses; a repository update does not prove that those sites have been redeployed.</p></div></div></div>
    <p className="mt-6 flex items-start gap-2 text-[11px] leading-relaxed text-muted"><Info size={14} className="mt-0.5 shrink-0" /> These links are references to addresses, not proof of ownership, future uptime or deployment status.</p>
  </div>;
}
