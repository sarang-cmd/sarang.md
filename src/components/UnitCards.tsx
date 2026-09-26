import { ArrowRight, ArrowUpRight, LockKeyhole } from 'lucide-react';
import { Link } from 'react-router-dom';
import { groupTopics } from '../lib/catalog';
import type { ContentMode, CourseUnit } from '../types';

export function UnitCards({ units, mode }: { units: CourseUnit[]; mode: ContentMode }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:gap-5">
      {units.map((course) => course.topics.length > 0 ? (
        <Link
          key={course.slug}
          to={`/units/${course.slug}`}
          className="group flex min-h-[250px] flex-col justify-between rounded-xl border border-ink bg-accent p-6 text-accent-ink transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-soft sm:p-7"
        >
          <div className="flex items-start justify-between">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] opacity-65">UNIT {course.number} / {mode === 'local' ? 'YOUR NOTES' : 'AVAILABLE'}</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/35 transition-transform duration-200 group-hover:rotate-45 dark:border-black/35"><ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" /></span>
          </div>
          <div>
            <h3 className="max-w-[350px] text-[30px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-[34px]">{course.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed opacity-70">{course.note}</p>
            <div className="mt-7 flex items-center justify-between border-t border-white/25 pt-4 text-[12px] font-medium dark:border-black/25">
              <span>{course.topics.length} topics <span className="mx-1 opacity-50">·</span> {groupTopics(course.topics).length} chapters</span>
              <span className="flex items-center gap-1.5">Explore unit <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" /></span>
            </div>
          </div>
        </Link>
      ) : (
        <div key={course.slug} aria-disabled="true" className="flex min-h-[250px] cursor-not-allowed flex-col justify-between rounded-xl border border-line bg-surface/75 p-6 text-muted sm:p-7">
          <div className="flex items-start justify-between">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-faint">UNIT {course.number} / UPCOMING</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-faint"><LockKeyhole size={15} strokeWidth={1.7} aria-hidden="true" /></span>
          </div>
          <div>
            <h3 className="max-w-[350px] text-[27px] font-semibold leading-[1.15] tracking-[-0.045em] sm:text-[30px]">{course.title}</h3>
            <p className="mt-2 text-[13px] text-faint">{mode === 'local' ? 'Waiting for your Markdown files' : course.note}</p>
            <div className="mt-7 flex items-center justify-between border-t border-line pt-4 text-[12px] text-faint">
              <span>{mode === 'local' ? 'Choose a folder to add notes' : 'Notes are on their way'}</span>
              <span className="rounded-full border border-line px-3 py-1 text-[11px] font-medium">{mode === 'local' ? 'No files yet' : 'Coming soon'}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
