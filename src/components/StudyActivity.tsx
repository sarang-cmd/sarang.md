import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';
import type { ProfileData } from '../lib/profileVault';
import { localDay, longestStudyStreak, studyActivityByDay, studyStreak } from '../lib/studyStats';

const dateLabel = (date: Date) => new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
const shade = (count: number) => count === 0 ? 'rgb(var(--raised))' : `rgb(var(--ink) / ${Math.min(.94, .23 + count * .17)})`;

/** A local-only year heat map and browseable monthly study-streak calendar. */
export function StudyActivity({ profile }: { profile: ProfileData }) {
  const counts = useMemo(() => studyActivityByDay(profile), [profile]);
  const [monthOffset, setMonthOffset] = useState(0);
  const [selected, setSelected] = useState(() => localDay(new Date()));
  const today = new Date();
  const todayKey = localDay(today);
  const month = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const start = new Date(month.getFullYear(), month.getMonth(), 1);
  start.setDate(start.getDate() - start.getDay());
  const last = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  const calendarDays = Array.from({ length: Math.ceil((last.getDate() + new Date(month.getFullYear(), month.getMonth(), 1).getDay()) / 7) * 7 }, (_, index) => {
    const date = new Date(start); date.setDate(start.getDate() + index); return date;
  });
  const firstHeat = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 364);
  firstHeat.setDate(firstHeat.getDate() - firstHeat.getDay());
  const weeks = Array.from({ length: Math.ceil((Math.round((new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime() - firstHeat.getTime()) / 86_400_000) + 1) / 7) }, (_, week) =>
    Array.from({ length: 7 }, (_, weekday) => { const date = new Date(firstHeat); date.setDate(firstHeat.getDate() + week * 7 + weekday); return date; }));
  const daysWithActivity = [...counts].filter(([day]) => day >= localDay(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 364)) && day <= todayKey).length;
  const currentStreak = studyStreak(profile, today);

  return <section className="mt-6 rounded-xl border border-line bg-canvas p-5 sm:p-7" aria-labelledby="study-activity-heading">
    <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="section-label">SHOWING UP, ONE DAY AT A TIME</p><h2 id="study-activity-heading" className="mt-2 text-[22px] font-semibold tracking-tight">Study activity</h2><p className="mt-2 text-[11px] leading-relaxed text-muted">A day counts when you mark a question, mark a note as studied, finish a focus session or record an assessment. Merely opening a page is not counted.</p></div><Flame size={22} className="text-muted" aria-hidden="true" /></div>
    <div className="mt-5 flex flex-wrap gap-5 border-b border-line pb-5 text-[11px]"><p><strong className="block text-[23px] font-semibold leading-none">{currentStreak}</strong><span className="mt-1 block text-muted">current days</span></p><p><strong className="block text-[23px] font-semibold leading-none">{longestStudyStreak(profile)}</strong><span className="mt-1 block text-muted">longest run</span></p><p><strong className="block text-[23px] font-semibold leading-none">{daysWithActivity}</strong><span className="mt-1 block text-muted">active days this year</span></p></div>
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3"><h3 className="text-[12px] font-semibold">Last 365 days</h3><span className="text-[10px] text-muted">Less <span className="mx-1 inline-block h-2 w-2 rounded-[2px] bg-raised" /><span className="mx-1 inline-block h-2 w-2 rounded-[2px] bg-ink/30" /><span className="mx-1 inline-block h-2 w-2 rounded-[2px] bg-ink/60" /><span className="mx-1 inline-block h-2 w-2 rounded-[2px] bg-ink" /> More</span></div>
    <div className="mt-3 overflow-x-auto pb-2"><div role="img" aria-label={`Study activity heat map for the last 365 days. ${daysWithActivity} active days. Current streak ${currentStreak} days.`} className="flex min-w-max gap-[3px]">
      {weeks.map((week, index) => <div key={index} className="w-[12px] shrink-0"><span className="block h-[17px] w-max text-[8px] text-muted" aria-hidden="true">{week.some((date) => date.getDate() === 1) ? new Intl.DateTimeFormat(undefined, { month: 'short' }).format(week.find((date) => date.getDate() === 1)) : ''}</span><div className="flex flex-col gap-[3px]" aria-hidden="true">{week.map((date) => { const day = localDay(date), count = counts.get(day) ?? 0; return <span key={day} title={`${dateLabel(date)}: ${day > todayKey ? 'not yet' : `${count} recorded action${count === 1 ? '' : 's'}`}`} className={`h-[11px] w-[11px] rounded-[2px] ${day > todayKey ? 'opacity-0' : ''}`} style={{ backgroundColor: shade(count) }} />; })}</div></div>)}
    </div></div>
    <div className="mt-6 border-t border-line pt-5"><div className="flex items-center justify-between gap-2"><h3 className="text-[12px] font-semibold">Streak calendar</h3><div className="flex items-center gap-3"><button type="button" onClick={() => setMonthOffset((value) => value - 1)} aria-label="Previous calendar month" className="rounded-full border border-line p-1.5 hover:border-ink"><ChevronLeft size={15} aria-hidden="true" /></button><span className="min-w-[105px] text-center text-[11px] font-semibold">{new Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' }).format(month)}</span><button type="button" onClick={() => setMonthOffset((value) => Math.min(0, value + 1))} disabled={monthOffset === 0} aria-label="Next calendar month" className="rounded-full border border-line p-1.5 hover:border-ink disabled:opacity-30"><ChevronRight size={15} aria-hidden="true" /></button></div></div>
      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-[10px] text-muted">{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => <span key={day}>{day}</span>)}</div>
      <div className="mt-2 grid grid-cols-7 gap-1">{calendarDays.map((date) => { const key = localDay(date), count = counts.get(key) ?? 0, outside = date.getMonth() !== month.getMonth(), future = key > todayKey;
        return <button type="button" key={key} disabled={outside || future} aria-pressed={selected === key} aria-label={`${dateLabel(date)}, ${count} recorded study action${count === 1 ? '' : 's'}`} onClick={() => setSelected(key)} className={`flex min-h-[36px] items-center justify-center rounded-md border text-[10px] font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${selected === key && !outside ? 'border-ink' : 'border-transparent'} ${outside || future ? 'opacity-25' : ''}`} style={{ backgroundColor: outside || future ? 'transparent' : shade(count), color: count >= 4 ? 'rgb(var(--canvas))' : 'rgb(var(--ink))' }}>{date.getDate()}</button>;
      })}</div>
      <p role="status" className="mt-3 text-[11px] text-muted">{selected}: {counts.get(selected) ?? 0} recorded study action{counts.get(selected) === 1 ? '' : 's'}. Days in the calendar reflect your local time zone.</p>
    </div>
  </section>;
}
