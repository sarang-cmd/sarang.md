import { ArrowUpRight, Download, Globe2, Info } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SUITE } from '../lib/suite';

const domains = [
  { host: 'sarang-md.vercel.app', note: 'The main address.' },
  { host: 'sarmd.vercel.app', note: 'An alternate address for the same site.' },
  { host: 'mdsarang.vercel.app', note: 'An alternate address for the same site.' },
  { host: 'md-sarang.vercel.app', note: 'An alternate address for the same site.' },
  { host: 'sarangmd.vercel.app', note: 'An alternate address for the same site.' },
];

export function MirrorsPage() {
  return <div className="mx-auto w-full max-w-[980px] px-5 pb-28 pt-9 sm:px-9 sm:pt-12 lg:px-12 xl:px-16">
    <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Mirrors' }]} />
    <p className="section-label mb-5">Site addresses / reference links</p>
    <h1 className="text-[clamp(3rem,6vw,5rem)] font-semibold leading-[1.05] tracking-[-0.07em]">A few ways<br />to find us<span className="text-faint">.</span></h1>
    <p className="mt-6 max-w-[640px] text-[15px] leading-[1.8] text-muted">Sarang.md lives on Vercel. The first address is the main one; the others are alternates that open the same site. Study with Sarang, the focus studio, sits at the path below on the main address.</p>
    <div className="mt-12 space-y-3">{domains.map((item, index) => <a key={item.host} href={`https://${item.host}`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-xl border border-line bg-canvas p-5 transition-colors hover:border-ink hover:bg-surface sm:p-6"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface"><Globe2 size={18} strokeWidth={1.7} /></span><span className="min-w-0 flex-1"><span className="block truncate text-[15px] font-semibold tracking-tight">{item.host}</span><span className="mt-1 block text-[11px] leading-relaxed text-muted">{item.note}</span></span><span className="hidden font-mono text-[10px] text-faint sm:block">{String(index + 1).padStart(2, '0')}</span><ArrowUpRight size={17} className="shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>)}</div>
    <div className="mt-12 rounded-xl border border-line bg-surface p-5 sm:p-6"><div className="flex items-start gap-3"><Download size={20} className="mt-0.5 shrink-0" /><div><h2 className="text-[16px] font-semibold">Also on this address</h2><div className="mt-3 flex flex-col gap-2 text-[12px] font-semibold"><a href={SUITE.study.siteUrl} className="inline-flex items-center gap-1.5 underline underline-offset-4">Study with Sarang, the focus studio <ArrowUpRight size={13} className="shrink-0" /></a><a href={SUITE.md.downloadsUrl} className="inline-flex items-center gap-1.5 underline underline-offset-4">Downloads: desktop apps and the browser helper <ArrowUpRight size={13} className="shrink-0" /></a></div></div></div></div>
    <p className="mt-6 flex items-start gap-2 text-[11px] leading-relaxed text-muted"><Info size={14} className="mt-0.5 shrink-0" /> Alternate addresses can be changed or removed on Vercel at any time. The main address stays.</p>
  </div>;
}
