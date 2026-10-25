import { useMemo, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import type { Topic } from '../types';
import type { AuthoredQuestion, ExamPaper } from '../data/originalExam';
import { knownUnits } from '../data/unit';

export function PracticeTopicRail({ topics, questions, paper, unit, code, setUnit, setCode }: {
  topics: Topic[]; questions: AuthoredQuestion[]; paper: ExamPaper | 'mock'; unit: string; code: string;
  setUnit: (value: string) => void; setCode: (value: string) => void;
}) {
  const [query, setQuery] = useState('');
  const [closed, setClosed] = useState<string[]>([]);
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const question of questions) if (paper === 'mock' || question.paper === paper)
      for (const id of question.codes) map.set(id, (map.get(id) ?? 0) + 1);
    return map;
  }, [questions, paper]);
  const total = paper === 'mock' ? questions.length : questions.filter((item) => item.paper === paper).length;
  return <aside aria-label="Syllabus topic filters" className="question-topic-rail rounded-xl border border-line bg-surface p-4">
    <div className="flex items-center justify-between"><h2 className="text-[16px] font-semibold">Topics</h2><span className="font-mono text-[10px] text-muted">83 codes</span></div><p className="mt-1 text-[11px] leading-relaxed text-muted">Filter by the supplied AA outline.</p>
    <label className="mt-4 flex h-9 items-center gap-2 rounded-lg border border-line bg-canvas px-3"><Search size={13} className="text-muted" /><input type="search" aria-label="Search syllabus topics" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a topic" className="w-full min-w-0 bg-transparent text-[11px] text-ink placeholder:text-muted" /></label>
    <button type="button" onClick={() => { setUnit('all'); setCode('all'); }} aria-pressed={unit === 'all' && code === 'all'} className={`mt-4 flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[11px] font-semibold ${unit === 'all' && code === 'all' ? 'bg-ink text-canvas' : 'hover:bg-raised'}`}><span>All topics</span><span>{total}</span></button>
    <div className="mt-2 max-h-[min(64vh,690px)] overflow-y-auto pr-1">{knownUnits.map((group) => {
      const children = topics.filter((item) => item.unitSlug === group.slug && `${item.id} ${item.title}`.toLowerCase().includes(query.trim().toLowerCase()));
      if (!children.length && query) return null;
      const count = [...counts.entries()].reduce((sum, [id, value]) => sum + (topics.some((item) => item.unitSlug === group.slug && item.id === id) ? value : 0), 0);
      const collapsed = closed.includes(group.slug) && !query;
      return <div key={group.slug} className="border-t border-line py-2"><div className="flex items-center gap-1"><button type="button" aria-pressed={unit === group.slug && code === 'all'} onClick={() => { setUnit(group.slug); setCode('all'); }} className={`min-w-0 flex-1 rounded-md px-2 py-2 text-left text-[11px] font-semibold ${unit === group.slug && code === 'all' ? 'bg-ink text-canvas' : 'hover:bg-raised'}`}>{group.title}<span className="ml-1.5 font-mono text-[10px] opacity-65">{count}</span></button><button type="button" aria-label={`${collapsed ? 'Expand' : 'Collapse'} ${group.title}`} aria-expanded={!collapsed} onClick={() => setClosed((old) => collapsed ? old.filter((slug) => slug !== group.slug) : [...old, group.slug])} className="rounded-md p-2 hover:bg-raised"><ChevronDown size={14} className={collapsed ? '-rotate-90' : ''} /></button></div>
        {!collapsed && <div className="mt-1 border-l border-line pl-2">{children.map((item) => <button key={item.id} type="button" aria-pressed={code === item.id} onClick={() => { setUnit(group.slug); setCode(item.id); }} className={`flex w-full items-center justify-between gap-2 rounded-md px-2 py-1.5 text-left text-[11px] ${code === item.id ? 'bg-ink text-canvas' : 'text-muted hover:bg-raised hover:text-ink'}`}><span className="min-w-0 truncate"><span className="mr-1 font-mono text-[9px] opacity-75">{item.id.replace('AA_', '')}</span>{item.title}</span><span className="shrink-0 font-mono text-[10px] opacity-75">{counts.get(item.id) ?? 0}</span></button>)}</div>}</div>;
    })}</div>
  </aside>;
}
