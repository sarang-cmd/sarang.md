import { useEffect, useRef } from 'react';
import { ArrowRight, Search as SearchIcon, SearchX, X } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useCatalog } from '../context/CatalogContext';
import { useTopicSearch, visibleTags } from '../hooks/useTopicSearch';
import { groupTopics, topicPath, unitForTopic } from '../lib/catalog';

export function SearchPage() {
  const { topics, units, mode } = useCatalog();
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const results = useTopicSearch(topics, query, topics.length);
  const inputRef = useRef<HTMLInputElement>(null);
  const categories = groupTopics(topics).map((group) => group.category);
  const multipleUnits = units.filter((entry) => entry.topics.length).length > 1;

  useEffect(() => { inputRef.current?.focus(); }, []);

  function updateQuery(value: string) {
    setParams(value ? { q: value } : {}, { replace: true });
  }

  return (
    <div className="mx-auto w-full max-w-[1060px] px-5 pb-28 pt-9 sm:px-9 sm:pt-12 lg:px-12 xl:px-16">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Search' }]} />
      <p className="section-label mb-4">Find your way / {mode === 'local' ? 'your Markdown' : 'all topics'}</p>
      <h1 className="text-[clamp(3rem,5.8vw,5rem)] font-semibold leading-[1.07] tracking-[-0.07em]">Looking for something<span className="text-faint">?</span></h1>
      <p className="mt-5 text-[15px] leading-relaxed text-muted">Find a concept, a chapter, or a place to begin.</p>
      <div className="mt-9 flex h-[66px] items-center gap-4 rounded-xl border border-line bg-surface px-5 transition-colors focus-within:border-muted focus-within:ring-2 focus-within:ring-ink/15 sm:mt-11 sm:h-[72px] sm:px-6">
        <SearchIcon size={21} strokeWidth={1.8} className="shrink-0 text-muted" aria-hidden="true" />
        <input ref={inputRef} aria-label="Search all topics" type="search" value={query} onChange={(event) => updateQuery(event.target.value)} placeholder="Search topics, tags, or chapters…" className="min-w-0 flex-1 bg-transparent text-[16px] text-ink outline-none placeholder:text-faint sm:text-[19px]" />
        {query && <button type="button" onClick={() => { updateQuery(''); inputRef.current?.focus(); }} aria-label="Clear search" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-raised hover:text-ink"><X size={17} aria-hidden="true" /></button>}
      </div>
      <div className="mb-4 mt-9 flex items-center justify-between border-b border-line pb-4 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted sm:mt-12">
        <span>{query.trim() ? `Results for “${query.trim()}”` : 'Search the collection'}</span>
        <span>{query.trim() ? `${results.length} ${results.length === 1 ? 'result' : 'results'}` : `${topics.length} topics indexed`}</span>
      </div>

      {!query.trim() ? (
        <div className="rounded-xl border border-dashed border-line px-6 py-14 text-center sm:py-20">
          <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-muted"><SearchIcon size={20} strokeWidth={1.7} aria-hidden="true" /></span>
          <h2 className="text-[19px] font-semibold tracking-[-0.03em]">Start typing to search all {topics.length} topics.</h2>
          <p className="mt-2 text-[13px] text-muted">Or jump into a chapter:</p>
          <div className="mx-auto mt-6 flex max-w-[580px] flex-wrap justify-center gap-2">
            {categories.map((category) => <button key={category} type="button" onClick={() => { updateQuery(category); inputRef.current?.focus(); }} className="rounded-full border border-line px-3 py-1.5 text-[11px] font-medium text-muted transition-colors duration-150 hover:border-ink hover:text-ink">{category}</button>)}
          </div>
        </div>
      ) : results.length === 0 ? (
        <div className="rounded-xl border border-dashed border-line px-6 py-16 text-center" role="status">
          <SearchX size={29} strokeWidth={1.4} className="mx-auto mb-4 text-muted" aria-hidden="true" />
          <h2 className="text-[19px] font-semibold tracking-[-0.03em]">No results found.</h2>
          <p className="mt-2 text-[13px] text-muted">Try a different keyword or browse the unit outline.</p>
          <Link to="/units" className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold hover:underline hover:underline-offset-4">Browse units <ArrowRight size={14} aria-hidden="true" /></Link>
        </div>
      ) : (
        <div className="space-y-2">
          {results.map((result) => (
            <Link key={topicPath(result.item)} to={topicPath(result.item)} className="group flex items-center gap-3 rounded-xl border border-line bg-canvas px-4 py-5 transition-[background-color,border-color] duration-150 hover:border-muted hover:bg-surface sm:gap-5 sm:px-6">
              <span className="w-6 shrink-0 self-start pt-1 font-mono text-[11px] text-faint sm:w-8">{result.item.id}</span>
              <div className="min-w-0 flex-1">
                <h2 className="text-[16px] font-semibold tracking-[-0.025em] transition-colors group-hover:text-muted sm:text-[18px]">{result.item.title}</h2>
                <p className="mt-1 text-[12px] text-muted">{multipleUnits ? `${unitForTopic(units, result.item)?.title} · ` : ''}{result.item.category}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">{visibleTags(result).map((tag) => <span key={tag} className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[10px] text-muted">#{tag}</span>)}</div>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-canvas"><ArrowRight size={15} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
