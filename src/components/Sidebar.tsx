import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, ChevronDown, FolderOpen, NotebookPen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCatalog } from '../context/CatalogContext';
import { availableUnits, groupTopics, topicPath, topicSlug } from '../lib/catalog';
import { useVaultStore } from '../store/useVaultStore';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'All Units', to: '/units' },
  { label: 'Practice', to: '/question-bank' },
  { label: 'Search', to: '/search' },
];

export function Sidebar() {
  const { units, status, mode } = useCatalog();
  const { pathname } = useLocation();
  const sidebarOpen = useVaultStore((state) => state.sidebarOpen);
  const currentUnit = useVaultStore((state) => state.currentUnit);
  const currentTopic = useVaultStore((state) => state.currentTopic);
  const setSidebarOpen = useVaultStore((state) => state.setSidebarOpen);
  const setLocalDialogOpen = useVaultStore((state) => state.setLocalDialogOpen);
  const available = useMemo(() => availableUnits(units), [units]);
  const [collapsed, setCollapsed] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    const category = available.find((entry) => entry.slug === currentUnit)?.topics.find((topic) => topicSlug(topic) === currentTopic)?.category;
    if (category && currentUnit) setCollapsed((previous) => {
      const key = `${currentUnit}::${category}`;
      if (!previous.has(key)) return previous;
      const next = new Set(previous);
      next.delete(key);
      return next;
    });
  }, [available, currentUnit, currentTopic]);

  function navigateFromDrawer() {
    if (window.innerWidth < 1024) setSidebarOpen(false);
  }

  function toggleCategory(key: string) {
    setCollapsed((previous) => {
      const next = new Set(previous);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <>
      {sidebarOpen && <button type="button" aria-label="Close course outline" onClick={() => setSidebarOpen(false)} className="fixed inset-x-0 bottom-0 top-[72px] z-[45] bg-black/45 lg:hidden" />}
      <aside
        id="course-sidebar"
        aria-label="Course outline"
        aria-hidden={!sidebarOpen}
        className={`fixed bottom-0 left-0 top-[72px] z-[55] w-[min(306px,86vw)] shrink-0 border-r border-line bg-canvas transition-[transform,width,opacity] duration-200 ease-out lg:sticky lg:bottom-auto lg:top-[72px] lg:h-[calc(100dvh-72px)] ${sidebarOpen ? 'visible translate-x-0 lg:w-[282px] lg:opacity-100' : 'invisible -translate-x-full pointer-events-none lg:w-0 lg:translate-x-0 lg:border-r-0 lg:opacity-0'}`}
      >
        <div className="h-full w-[min(306px,86vw)] overflow-y-auto px-4 pb-10 pt-7 lg:w-[282px] lg:px-5">
          <div className="mb-7 lg:hidden">
            <p className="section-label mb-3 px-2">Navigate</p>
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {quickLinks.map((link) => {
                const active = link.to === '/' ? pathname === '/' : pathname.startsWith(link.to);
                return <Link key={link.to} to={link.to} onClick={navigateFromDrawer} aria-current={active ? 'page' : undefined} className={`rounded-lg px-3 py-2 text-[13px] font-semibold transition-colors ${active ? 'bg-ink text-canvas' : 'text-muted hover:bg-surface hover:text-ink'}`}>{link.label}</Link>;
              })}
              <button type="button" onClick={() => { setSidebarOpen(false); setLocalDialogOpen(true); }} className="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-[13px] font-semibold text-muted hover:bg-surface hover:text-ink"><FolderOpen size={15} aria-hidden="true" /> Local Files</button>
            </nav>
            <div className="mt-6 border-t border-line" />
          </div>

          <div className="mb-5 px-2">
            <p className="section-label mb-2">Course outline</p>
            <p className="text-[12px] leading-relaxed text-muted">{mode === 'local' ? 'Your own Markdown, in reading order.' : 'A quiet way through the syllabus.'}</p>
          </div>
          <Link to="/question-bank" onClick={navigateFromDrawer} className="group mb-7 flex items-center justify-between gap-3 rounded-lg border border-line bg-surface px-3 py-3 transition-colors hover:border-muted hover:bg-raised">
            <span className="flex items-center gap-2.5"><NotebookPen size={16} strokeWidth={1.7} aria-hidden="true" /><span className="text-[12px] font-semibold">Question bank</span></span><ArrowUpRight size={14} className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>

          {status === 'loading' && <p className="px-2 py-3 text-[12px] text-muted">Loading outline…</p>}
          <nav aria-label="Course topics">
            {available.map((course) => {
              const groups = groupTopics(course.topics);
              return (
                <div key={course.slug} className="mb-8">
                  <div className="mb-5 px-2">
                    <Link to={`/units/${course.slug}`} onClick={navigateFromDrawer} className="group flex items-start justify-between gap-2 rounded-md">
                      <span><span className="mb-1 block font-mono text-[11px] text-faint">UNIT {course.number}</span><span className="block text-[17px] font-semibold leading-tight tracking-[-0.04em] transition-opacity group-hover:opacity-60">{course.title}</span></span>
                      <ArrowUpRight size={16} strokeWidth={1.8} className="mt-5 shrink-0 text-muted" aria-hidden="true" />
                    </Link>
                    <p className="mt-2 text-[12px] text-muted">{course.topics.length} topics · {groups.length} chapters</p>
                  </div>
                  <div className="mb-4 border-t border-line" />
                  {groups.map(({ category, topics: entries }, index) => {
                    const key = `${course.slug}::${category}`;
                    const isCollapsed = collapsed.has(key);
                    const containsActive = currentUnit === course.slug && entries.some((entry) => topicSlug(entry) === currentTopic);
                    return (
                      <div key={key} className="mb-2">
                        <button
                          type="button"
                          aria-expanded={!isCollapsed}
                          onClick={() => toggleCategory(key)}
                          className="group flex w-full items-center gap-2 rounded-lg px-2 py-2.5 text-left transition-colors duration-150 hover:bg-surface"
                        >
                          <span className="w-5 font-mono text-[10px] text-faint">{String(index + 1).padStart(2, '0')}</span>
                          <span className={`min-w-0 flex-1 truncate text-[11px] font-bold uppercase tracking-[0.095em] group-hover:text-ink ${containsActive ? 'text-ink' : 'text-muted'}`}>{category}</span>
                          <span className="font-mono text-[10px] text-faint">{entries.length}</span>
                          <ChevronDown size={13} className={`shrink-0 text-muted transition-transform duration-200 ${isCollapsed ? '-rotate-90' : ''}`} aria-hidden="true" />
                        </button>
                        {!isCollapsed && (
                          <div className="ml-3 border-l border-line pl-2">
                            {entries.map((topic) => {
                              const active = currentUnit === course.slug && currentTopic === topicSlug(topic);
                              return (
                                <Link
                                  key={topic.file}
                                  to={topicPath(topic)}
                                  onClick={navigateFromDrawer}
                                  aria-current={active ? 'page' : undefined}
                                  className={`my-0.5 flex items-start gap-2.5 rounded-lg px-2.5 py-2 text-[12px] leading-[1.4] transition-colors duration-150 ${active ? 'bg-ink font-semibold text-canvas' : 'text-muted hover:bg-surface hover:text-ink'}`}
                                >
                                  <span className={`mt-px shrink-0 font-mono text-[10px] ${active ? 'text-canvas/60' : 'text-faint'}`}>{topic.id}</span>
                                  <span>{topic.title}</span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </nav>
          <div className="mt-8 border-t border-line pt-5 text-[11px] leading-relaxed text-faint">A little less noise.<br />A lot more understanding.</div>
        </div>
      </aside>
    </>
  );
}
