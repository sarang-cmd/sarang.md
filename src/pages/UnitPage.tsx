import { ArrowRight, BookOpen, NotebookPen } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useCatalog } from '../context/CatalogContext';
import { unit as numberUnit } from '../data/unit';
import { groupTopics, topicPath } from '../lib/catalog';
import { NotFoundPage } from './NotFoundPage';

export function UnitPage() {
  const { unitSlug } = useParams<{ unitSlug: string }>();
  const { units, mode } = useCatalog();
  const course = units.find((entry) => entry.slug === unitSlug && entry.topics.length > 0);
  if (!course) return <NotFoundPage />;
  const topics = course.topics;
  const groups = groupTopics(topics);

  return (
    <div className="mx-auto w-full max-w-[1160px] px-5 pb-28 pt-9 sm:px-9 sm:pt-12 lg:px-12 xl:px-16">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'All units', to: '/units' }, { label: course.title }]} />
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label mb-5">Unit {course.number} / {mode === 'local' ? 'Your Markdown' : 'IB Mathematics AA HL'}</p>
          <h1 className="text-[clamp(3rem,5.5vw,5.4rem)] font-semibold leading-[1.06] tracking-[-0.07em]">{course.title}<span className="text-faint">.</span></h1>
          <p className="mt-6 max-w-[650px] text-[15px] leading-[1.8] text-muted sm:text-[16px]">{course.description}</p>
        </div>
        <div className="shrink-0 rounded-xl border border-line bg-surface px-5 py-4 sm:min-w-[150px]">
          <span className="section-label">In this unit</span>
          <div className="mt-3 flex items-baseline gap-2"><span className="text-[35px] font-semibold leading-none tracking-[-0.06em]">{topics.length}</span><span className="text-[12px] text-muted">topics</span></div>
          <span className="mt-2 block text-[12px] text-muted">Across {groups.length} chapters</span>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-3 border-y border-line py-5 text-[12px] text-muted sm:mt-14">
        <BookOpen size={16} strokeWidth={1.7} aria-hidden="true" /><span>A reading path from fundamentals to synthesis.</span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.12em] text-faint">Read in any order</span>
      </div>

      {course.slug === numberUnit.slug && <Link to="/question-bank" className="group mt-8 flex flex-col gap-3 rounded-xl border border-line bg-surface px-5 py-5 transition-colors hover:border-muted hover:bg-raised sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span className="flex items-start gap-3"><NotebookPen size={19} className="mt-0.5 shrink-0" strokeWidth={1.7} aria-hidden="true" /><span><strong className="block text-[14px] font-semibold">Put these ideas to the test.</strong><span className="mt-1 block text-[12px] leading-relaxed text-muted">Original sequences & series questions, with mark schemes you can reveal when you're ready.</span></span></span>
        <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line bg-canvas px-3 py-2 text-[11px] font-semibold transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-canvas sm:self-auto">Open question bank <ArrowRight size={13} aria-hidden="true" /></span>
      </Link>}

      <div className="mt-14 space-y-14">
        {groups.map(({ category, topics: entries }, index) => (
          <section key={category} aria-labelledby={`chapter-${index}`}>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div><p className="section-label mb-2">Chapter {String(index + 1).padStart(2, '0')}</p><h2 id={`chapter-${index}`} className="text-[25px] font-semibold leading-tight tracking-[-0.045em] sm:text-[29px]">{category}</h2></div>
              <span className="pb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-faint">{String(entries.length).padStart(2, '0')} topics</span>
            </div>
            <div className="overflow-hidden rounded-xl border border-line">
              {entries.map((topic, topicIndex) => (
                <Link key={topic.file} to={topicPath(topic)} className={`group flex min-h-[86px] items-center gap-3 bg-canvas px-4 py-4 transition-colors duration-150 hover:bg-surface sm:gap-5 sm:px-6 ${topicIndex > 0 ? 'border-t border-line' : ''}`}>
                  <span className="w-6 shrink-0 font-mono text-[12px] text-faint sm:w-8">{topic.id}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[14px] font-semibold leading-snug tracking-[-0.015em] sm:text-[16px]">{topic.title}</span>
                    <span className="mt-1 block text-[11px] text-muted">{topic.category}</span>
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-canvas px-3 py-2 text-[10px] font-semibold transition-colors duration-150 group-hover:border-ink group-hover:bg-ink group-hover:text-canvas sm:gap-2 sm:px-4 sm:text-[11px]">Start Topic <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="mt-16 border-t border-line pt-6 text-[12px] leading-relaxed text-muted">One note at a time is enough. <span className="text-ink">You've got this.</span></div>
    </div>
  );
}
