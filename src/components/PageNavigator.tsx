import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { pageCount } from '../lib/pagination';

/** Accessible numbered pages with an explicit jump. Filtering and deep-link
 * resolution stay with the owning collection; this component never changes URLs. */
export function PageNavigator({ page, totalItems, pageSize, label, onChange, placement = 'bottom' }: {
  page: number; totalItems: number; pageSize: number; label: string; onChange: (page: number) => void; placement?: 'top' | 'bottom';
}) {
  const total = pageCount(totalItems, pageSize);
  const current = Math.min(Math.max(0, page), total - 1);
  const [target, setTarget] = useState(String(current + 1));
  useEffect(() => { setTarget(String(current + 1)); }, [current]);
  const windowed = useMemo(() => {
    const set = new Set([0, total - 1, current - 1, current, current + 1]);
    return [...set].filter((value) => value >= 0 && value < total).sort((a, b) => a - b);
  }, [current, total]);
  if (total < 2) return null;
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = Number(target);
    if (!Number.isInteger(next) || next < 1 || next > total) return;
    if (next - 1 !== current) onChange(next - 1);
  }
  return <nav aria-label={`${label} pages (${placement})`} className="page-navigator mt-5 rounded-xl border border-line bg-surface p-3 sm:p-4">
    <div className="flex flex-wrap items-center gap-1.5">
      <button type="button" disabled={current === 0} onClick={() => onChange(current - 1)} className="page-navigator-button gap-1.5 disabled:cursor-not-allowed disabled:opacity-35"><ArrowLeft size={14} aria-hidden="true" /> Previous</button>
      <div className="flex flex-wrap items-center gap-1" role="group" aria-label={`Page numbers for ${label}`}>
        {windowed.map((value, index) => <div key={value} className="inline-flex items-center gap-1">
          {index > 0 && value - windowed[index - 1] > 1 && <span aria-hidden="true" className="px-0.5 text-[11px] text-muted">…</span>}
          <button type="button" aria-label={`Page ${value + 1} of ${total}`} aria-current={value === current ? 'page' : undefined} onClick={() => { if (value !== current) onChange(value); }} className={`page-navigator-number ${value === current ? 'bg-ink text-canvas' : 'border border-line bg-canvas text-ink hover:border-ink'}`}>{value + 1}</button>
        </div>)}
      </div>
      <button type="button" disabled={current >= total - 1} onClick={() => onChange(current + 1)} className="page-navigator-button gap-1.5 disabled:cursor-not-allowed disabled:opacity-35">Next <ArrowRight size={14} aria-hidden="true" /></button>
      <span className="ml-auto font-mono text-[10px] text-muted">{current + 1} / {total} · {totalItems} items</span>
    </div>
    {placement === 'bottom' && <form onSubmit={submit} className="mt-3 flex flex-wrap items-center gap-2 border-t border-line pt-3 text-[11px] font-semibold">
      <label htmlFor={`jump-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-muted">Jump to page</label>
      <input id={`jump-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} type="number" inputMode="numeric" min={1} max={total} step={1} value={target} onChange={(event) => setTarget(event.target.value)} aria-label={`Jump to page in ${label}`} className="h-10 w-20 rounded-lg border border-line bg-canvas px-2.5 font-mono text-[12px] text-ink focus:border-ink" />
      <button type="submit" disabled={!/^[1-9]\d*$/.test(target) || Number(target) > total} className="min-h-10 rounded-lg border border-line bg-canvas px-3 py-2 text-ink hover:border-ink disabled:opacity-40">Go</button>
    </form>}
  </nav>;
}
