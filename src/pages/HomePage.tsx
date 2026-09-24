import { ArrowRight, ArrowUpRight, BookOpen, MoveUpRight, NotebookPen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UnitCards } from '../components/UnitCards';
import { useCatalog } from '../context/CatalogContext';
import { unit } from '../data/unit';
import { availableUnits } from '../lib/catalog';

export function HomePage() {
  const { topics, units, mode } = useCatalog();
  const ready = availableUnits(units);
  const preview = topics[2] ?? topics[0];
  const stats = [
    { value: String(topics.length).padStart(2, '0'), label: mode === 'local' ? 'Your topics' : 'Curated topics', detail: 'From first principles to practice' },
    { value: String(new Set(topics.map((topic) => topic.category)).size).padStart(2, '0'), label: 'Focused chapters', detail: 'An outline that makes sense' },
    { value: String(ready.length).padStart(2, '0'), label: ready.length === 1 ? 'Unit ready to explore' : 'Units ready to explore', detail: mode === 'local' ? 'Loaded from your Markdown' : 'More on the way' },
  ];

  return (
    <div className="mx-auto w-full max-w-[1320px] px-5 pb-24 pt-14 sm:px-9 sm:pt-20 lg:px-12 xl:px-16 xl:pt-24">
      <section className="grid items-center gap-12 xl:grid-cols-[1.08fr_.92fr] xl:gap-14" aria-labelledby="home-heading">
        <div className="max-w-[640px]">
          <p className="flex items-center gap-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-muted sm:text-[11px]">
            <span className="h-[6px] w-[6px] rounded-full bg-ink" aria-hidden="true" />
            {mode === 'local' ? 'Your Markdown · Analysis & Approaches HL' : 'IB Mathematics · Analysis & Approaches HL'}
          </p>
          <h1 id="home-heading" className="mt-8 text-[clamp(3.5rem,6.3vw,6.2rem)] font-semibold leading-[1.02] tracking-[-0.075em] sm:mt-9">
            Math, minus<br />the noise<span className="text-faint">.</span>
          </h1>
          <p className="mt-7 max-w-[485px] text-[16px] leading-[1.8] text-muted sm:text-[17px]">
            A thoughtful home for IB AA HL notes—so you can focus on understanding, one idea at a time.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link to={`/units/${ready[0]?.slug ?? unit.slug}`} className="group inline-flex h-12 items-center gap-4 rounded-full bg-accent px-6 text-[13px] font-semibold text-accent-ink transition-[transform,opacity] duration-200 hover:-translate-y-0.5 hover:opacity-85">
              Start course <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link to="/units" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-muted transition-colors hover:text-ink hover:underline hover:underline-offset-4">
              Browse the library <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-2.5 text-[12px] text-faint xl:mt-16">
            <BookOpen size={15} strokeWidth={1.7} aria-hidden="true" />
            Your space to learn, at your own pace.
          </div>
        </div>

        <div className="mx-auto w-full max-w-[480px] xl:max-w-none" aria-label="Preview of the course reader">
          <div className="rounded-2xl border border-line bg-surface p-3 shadow-soft sm:p-4">
            <div className="overflow-hidden rounded-xl border border-line bg-canvas px-6 pb-7 pt-6 sm:px-8 sm:pb-9 sm:pt-8">
              <div className="flex items-center justify-between border-b border-line pb-5">
                <div className="flex items-center gap-2"><span className="h-[6px] w-[6px] rounded-full bg-ink" /><span className="font-mono text-[10px] font-semibold tracking-[0.15em] text-muted">SARANG.MD / READING ROOM</span></div>
                <span className="font-mono text-[10px] text-faint">{preview?.id ?? '02'} / {String(topics.length).padStart(2, '0')}</span>
              </div>
              <div className="mt-9 flex items-center gap-2"><span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] text-muted">{preview?.category ?? 'Your notes'}</span><span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] text-muted">NOTE {preview?.id ?? '02'}</span></div>
              <h2 className="mt-6 max-w-[330px] text-[32px] font-semibold leading-[1.13] tracking-[-0.055em] sm:text-[38px]">{preview?.title ?? 'Your reading space'}</h2>
              <p className="mt-4 max-w-[310px] text-[13px] leading-[1.7] text-muted">Start with a pattern. Find the rule behind it. Then make it yours.</p>
              <div className="mt-8 flex min-h-[112px] items-center justify-center rounded-lg border border-line bg-surface px-4 text-center font-mono text-[18px] tracking-[-0.05em] sm:text-[21px]">
                u<sub>n</sub> = u<sub>1</sub> + (n − 1)d
              </div>
              <div className="mt-7 space-y-3 border-t border-line pt-5">
                <div className="flex items-center gap-3 text-[11px] text-muted"><span className="font-mono text-faint">01</span><span>Understand the idea</span><span className="ml-auto h-px w-9 bg-line" /></div>
                <div className="flex items-center gap-3 text-[11px] text-muted"><span className="font-mono text-faint">02</span><span>Try a worked example</span><span className="ml-auto h-px w-9 bg-line" /></div>
                <div className="flex items-center gap-3 text-[11px] text-muted"><span className="font-mono text-faint">03</span><span>Put it into practice</span><MoveUpRight size={13} className="ml-auto" aria-hidden="true" /></div>
              </div>
            </div>
            <div className="flex items-center justify-between px-2 pb-0.5 pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-faint sm:px-3"><span>Clear notes. Clear mind.</span><span>IB AA HL ↗</span></div>
          </div>
        </div>
      </section>

      <section aria-label="Course at a glance" className="mt-20 grid grid-cols-1 border-y border-line sm:mt-28 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <div key={stat.label} className={`py-7 sm:py-9 ${index > 0 ? 'border-t border-line sm:border-l sm:border-t-0 sm:pl-7 xl:pl-10' : ''}`}>
            <p className="text-[39px] font-semibold leading-none tracking-[-0.065em]">{stat.value}</p>
            <p className="mt-3 text-[13px] font-semibold">{stat.label}</p>
            <p className="mt-1 text-[12px] text-muted">{stat.detail}</p>
          </div>
        ))}
      </section>

      <section aria-labelledby="library-heading" className="pt-20 sm:pt-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
          <div><p className="section-label mb-3">01 / The library</p><h2 id="library-heading" className="text-[36px] font-semibold leading-tight tracking-[-0.055em] sm:text-[44px]">Find your starting point.</h2><p className="mt-3 text-[14px] leading-relaxed text-muted">{mode === 'local' ? 'Your own files, organized into a reading path.' : 'The foundations are here. The rest is coming together.'}</p></div>
          <Link to="/units" className="inline-flex items-center gap-1.5 pb-1 text-[12px] font-semibold text-ink hover:underline hover:underline-offset-4">See all units <ArrowRight size={14} aria-hidden="true" /></Link>
        </div>
        <UnitCards units={units} mode={mode} />
      </section>

      <section aria-labelledby="practice-heading" className="mt-6 flex flex-col gap-7 rounded-xl border border-line bg-surface px-7 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-9 sm:py-9">
        <div className="flex items-start gap-5"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-canvas"><NotebookPen size={20} strokeWidth={1.7} aria-hidden="true" /></span><div><p className="section-label mb-2">02 / Practice space</p><h2 id="practice-heading" className="text-[24px] font-semibold tracking-[-0.045em] sm:text-[27px]">Make it stick.</h2><p className="mt-1 max-w-[510px] text-[13px] leading-relaxed text-muted">Original IB-style sequences & series questions, with step-by-step mark schemes when you're ready to check.</p></div></div>
        <Link to="/question-bank" className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-ink px-5 text-[12px] font-semibold transition-colors hover:bg-ink hover:text-canvas sm:self-auto">Open question bank <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></Link>
      </section>
    </div>
  );
}
