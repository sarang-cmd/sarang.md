import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Check, ChevronDown, Search } from 'lucide-react';

interface Option { value: string; label: string }
/** A high-contrast, searchable selector with a predictable dark popup. Native
 * select popups used the operating system's white menu over white text. */
export function FilterSelect({ label, value, options, onChange }: {
  label: string; value: string; options: Option[]; onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [cursor, setCursor] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const id = useId();
  const filtered = useMemo(() => options.filter((option) => option.label.toLowerCase().includes(search.trim().toLowerCase())), [options, search]);
  const selected = options.find((option) => option.value === value)?.label ?? options[0]?.label ?? 'Choose one';
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => { if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false); };
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, [open]);
  useEffect(() => { if (open && options.length > 12) searchRef.current?.focus(); }, [open, options.length]);
  function choose(option: Option) { onChange(option.value); setSearch(''); setOpen(false); ref.current?.querySelector<HTMLButtonElement>('[data-filter-trigger]')?.focus(); }
  function keyboard(event: React.KeyboardEvent) {
    if (event.key === 'Escape') { event.preventDefault(); setOpen(false); ref.current?.querySelector<HTMLButtonElement>('[data-filter-trigger]')?.focus(); }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); setOpen(true); setCursor((index) => Math.max(0, Math.min(filtered.length - 1, index + (event.key === 'ArrowDown' ? 1 : -1)))); }
    if (event.key === 'Enter' && open && filtered[cursor]) { event.preventDefault(); choose(filtered[cursor]); }
  }
  return <div ref={ref} className="relative min-w-0" onKeyDown={keyboard}>
    <button data-filter-trigger type="button" aria-label={label} aria-haspopup="listbox" aria-expanded={open} aria-controls={id} onClick={() => { setCursor(0); setSearch(''); setOpen(!open); }} className="flex h-11 w-full min-w-0 items-center justify-between gap-2 rounded-lg border border-line bg-canvas px-3 text-left text-[12px] text-ink hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1"><span className="truncate">{selected}</span><ChevronDown size={15} className={`shrink-0 text-muted transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" /></button>
    {open && <div id={id} role="listbox" aria-label={label} className="absolute left-0 top-[calc(100%+6px)] z-[92] w-full min-w-[235px] overflow-hidden rounded-xl border border-line bg-canvas p-1.5 text-ink shadow-float">
      {options.length > 12 && <label className="mb-1 flex items-center gap-2 border-b border-line px-2 py-2"><Search size={14} className="text-muted" aria-hidden="true" /><input ref={searchRef} type="search" value={search} onChange={(event) => { setSearch(event.target.value); setCursor(0); }} placeholder="Search subtopics" aria-label={`Search ${label.toLowerCase()}`} className="w-full min-w-0 bg-transparent text-[12px] text-ink outline-none placeholder:text-muted" /></label>}
      <div className="max-h-[min(290px,50vh)] overflow-y-auto">{filtered.map((option, index) => <button key={option.value} type="button" role="option" aria-selected={option.value === value} onMouseEnter={() => setCursor(index)} onClick={() => choose(option)} className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-[12px] leading-snug text-ink hover:bg-raised ${index === cursor ? 'bg-surface' : ''}`}><span>{option.label}</span>{option.value === value && <Check size={13} className="shrink-0" aria-hidden="true" />}</button>)}{!filtered.length && <p className="px-3 py-4 text-[11px] text-muted">No matching subtopic.</p>}</div>
    </div>}
  </div>;
}
