import { useEffect, useRef, useState } from 'react';
import type { FormEvent, KeyboardEvent } from 'react';
import { ArrowRight, CornerDownLeft, FolderOpen, Menu, Moon, PanelLeft, Search as SearchIcon, Sun, UserRound, Waves, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCatalog } from '../context/CatalogContext';
import { useTopicSearch } from '../hooks/useTopicSearch';
import { topicPath, unitForTopic } from '../lib/catalog';
import { useVaultStore } from '../store/useVaultStore';
import { useProfileStore } from '../store/useProfileStore';
import type { Topic } from '../types';

const tabs = [
  { label: 'Home', to: '/' },
  { label: 'All Units', to: '/units' },
  { label: 'Practice', to: '/practice' },
  { label: 'Search', to: '/search' },
];

export function Header() {
  const { topics, units, status, mode } = useCatalog();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useVaultStore((state) => state.theme);
  const profileStatus = useProfileStore((state) => state.status);
  const sidebarOpen = useVaultStore((state) => state.sidebarOpen);
  const toggleSidebar = useVaultStore((state) => state.toggleSidebar);
  const toggleTheme = useVaultStore((state) => state.toggleTheme);
  const setLocalDialogOpen = useVaultStore((state) => state.setLocalDialogOpen);
  const [query, setQuery] = useState('');
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchRef = useRef<HTMLFormElement>(null);
  const suggestions = useTopicSearch(topics, query, 7);
  const activeTab = pathname === '/search' ? 3 : ['/practice', '/question-bank', '/ib-papers'].includes(pathname) ? 2 : pathname.startsWith('/units') ? 1 : pathname === '/' ? 0 : -1;
  const showSuggestions = suggestionsOpen && query.trim().length > 0;
  const multipleUnits = units.filter((entry) => entry.topics.length > 0).length > 1;

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!searchRef.current?.contains(event.target as Node)) setSuggestionsOpen(false);
    };
    document.addEventListener('mousedown', closeOnOutsideClick);
    return () => document.removeEventListener('mousedown', closeOnOutsideClick);
  }, []);

  useEffect(() => { setSuggestionsOpen(false); }, [pathname]);

  function openTopic(topic: Topic) {
    navigate(topicPath(topic));
    setSuggestionsOpen(false);
    setQuery('');
    setActiveIndex(-1);
  }

  function openFullSearch() {
    const trimmed = query.trim();
    navigate(`/search${trimmed ? `?q=${encodeURIComponent(trimmed)}` : ''}`);
    setSuggestionsOpen(false);
    setQuery('');
    setActiveIndex(-1);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const selected = suggestions[activeIndex]?.item;
    if (suggestionsOpen && selected) openTopic(selected);
    else openFullSearch();
  }

  function handleKeys(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown' && suggestions.length) {
      event.preventDefault();
      setSuggestionsOpen(true);
      setActiveIndex((previous) => Math.min(previous + 1, suggestions.length - 1));
    } else if (event.key === 'ArrowUp' && suggestions.length) {
      event.preventDefault();
      setActiveIndex((previous) => Math.max(previous - 1, -1));
    } else if (event.key === 'Escape') {
      setSuggestionsOpen(false);
      setActiveIndex(-1);
    }
  }

  return (
    <header className="sticky top-0 z-[70] h-[72px] border-b border-line bg-canvas/95 backdrop-blur-xl">
      <div className="relative flex h-full w-full items-center justify-between gap-2 px-3 sm:gap-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-4">
          <Link to="/" aria-label="Sarang.md home" className="group flex shrink-0 items-center gap-2.5 rounded-md focus-visible:outline-offset-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-ink transition-transform duration-200 group-hover:rotate-[-6deg]">
              <span className="h-[7px] w-[7px] rounded-full bg-canvas" />
            </span>
            <span className="whitespace-nowrap text-[16px] font-bold tracking-[-0.045em] sm:text-[17px]">
              <span className="hidden min-[360px]:inline min-[430px]:hidden">S.md</span><span className="hidden min-[430px]:inline">Sarang<span className="text-muted">.md</span></span>
            </span>
          </Link>
          <span className="hidden h-5 w-px bg-line sm:block" aria-hidden="true" />
          <button
            type="button"
            aria-label={sidebarOpen ? 'Hide course outline' : 'Show course outline'}
            data-tip={sidebarOpen ? 'Hide course outline' : 'Show course outline'}
            aria-controls="course-sidebar"
            aria-expanded={sidebarOpen}
            onClick={toggleSidebar}
            className={`flex h-9 w-9 items-center justify-center rounded-[10px] border transition-colors duration-200 hover:bg-raised ${sidebarOpen ? 'border-line bg-surface text-ink' : 'border-transparent text-muted'}`}
          >
            <PanelLeft size={17} strokeWidth={1.8} className="hidden lg:block" />
            {sidebarOpen ? <X size={18} strokeWidth={1.8} className="lg:hidden" /> : <Menu size={18} strokeWidth={1.8} className="lg:hidden" />}
          </button>
        </div>

        <nav aria-label="Main navigation" className="absolute left-1/2 hidden -translate-x-1/2 min-[1420px]:block">
          <div className="relative grid h-10 w-[352px] grid-cols-4 items-center rounded-full border border-line bg-raised p-1">
            <span
              aria-hidden="true"
              className={`absolute bottom-1 left-1 top-1 rounded-full bg-ink shadow-sm transition-[transform,opacity] duration-200 ease-out ${activeTab < 0 ? 'opacity-0' : ''}`}
              style={{ width: 'calc((100% - 8px) / 4)', transform: `translateX(${activeTab * 100}%)` }}
            />
            {tabs.map((tab, index) => (
              <Link
                key={tab.to}
                to={tab.to}
                aria-current={activeTab === index ? 'page' : undefined}
                className={`relative z-10 flex h-full items-center justify-center rounded-full text-[12px] font-semibold transition-colors duration-200 ${activeTab === index ? 'text-canvas' : 'text-muted hover:text-ink'}`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
          <form ref={searchRef} role="search" onSubmit={handleSubmit} className="relative w-[80px] min-[360px]:w-[100px] min-[390px]:w-[128px] sm:w-[180px] lg:w-[160px] xl:w-[220px] 2xl:w-[248px]">
            <div className="flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-3 text-muted transition-colors duration-200 focus-within:border-muted focus-within:ring-2 focus-within:ring-ink/15 hover:border-muted/70 sm:px-3.5">
              <SearchIcon size={16} strokeWidth={1.9} className="shrink-0" aria-hidden="true" />
              <input
                aria-label="Search topics"
                aria-autocomplete="list"
                aria-controls="header-search-results"
                aria-expanded={showSuggestions}
                autoComplete="off"
                type="search"
                value={query}
                onChange={(event) => { setQuery(event.target.value); setSuggestionsOpen(true); setActiveIndex(-1); }}
                onFocus={() => setSuggestionsOpen(true)}
                onKeyDown={handleKeys}
                placeholder="Search topics..."
                className="w-full min-w-0 bg-transparent text-[12px] font-medium text-ink outline-none placeholder:font-normal placeholder:text-faint sm:text-[13px]"
              />
            </div>

            {showSuggestions && (
              <div id="header-search-results" role="listbox" aria-label="Topic suggestions" className="absolute -right-[110px] top-[calc(100%+12px)] z-[90] w-[min(380px,calc(100vw-24px))] overflow-hidden rounded-xl border border-line bg-canvas p-2 shadow-float sm:right-0">
                <div className="flex items-center justify-between px-3 pb-2 pt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  <span>{suggestions.length ? 'Suggested topics' : status === 'loading' ? 'Loading index' : 'No matching topics'}</span>
                  <span>{suggestions.length ? `${suggestions.length} found` : ''}</span>
                </div>
                {suggestions.map(({ item }, index) => (
                  <button
                    key={topicPath(item)}
                    type="button"
                    role="option"
                    aria-selected={activeIndex === index}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => openTopic(item)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-150 ${activeIndex === index ? 'bg-raised' : 'hover:bg-surface'}`}
                  >
                    <span className="font-mono text-[10px] text-faint">{item.id}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[13px] font-semibold text-ink">{item.title}</span>
                      <span className="block truncate text-[11px] text-muted">{multipleUnits ? `${unitForTopic(units, item)?.title} · ` : ''}{item.category}</span>
                    </span>
                    <ArrowRight size={14} className="shrink-0 text-muted" aria-hidden="true" />
                  </button>
                ))}
                <button type="button" onClick={openFullSearch} className="mt-1 flex w-full items-center justify-between border-t border-line px-3 py-3 text-left text-[12px] font-semibold text-ink hover:text-muted">
                  <span>Search all topics</span>
                  <CornerDownLeft size={14} aria-hidden="true" />
                </button>
              </div>
            )}
          </form>

          <Link to="/focus" aria-label="Focus studio" data-tip="Focus studio" className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted hover:border-ink hover:text-ink xl:inline-flex"><Waves size={16} strokeWidth={1.7} aria-hidden="true" /></Link>
          <Link to="/profile" aria-label={`Study profile, ${profileStatus}`} aria-current={pathname === '/profile' ? 'page' : undefined} data-tip={`Study profile (${profileStatus})`}
            className={`relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors hover:border-ink hover:text-ink ${pathname === '/profile' ? 'border-ink bg-ink text-canvas' : 'border-line text-muted'}`}>
            <UserRound size={16} strokeWidth={1.7} aria-hidden="true" />{profileStatus === 'unlocked' && <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-canvas bg-ink" aria-hidden="true" />}
          </Link>

          <button
            type="button"
            role="switch"
            aria-checked={theme === 'dark'}
            aria-label="Dark mode"
            data-tip={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
            className="relative h-[38px] w-[56px] shrink-0 rounded-full border border-[#363636] bg-[#1b1b1b] transition-colors duration-200 hover:bg-[#303030] dark:border-[#666666]"
          >
            <span className={`absolute left-[4px] top-[4px] flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white text-[#1b1b1b] shadow-sm transition-transform duration-200 ease-out ${theme === 'dark' ? 'translate-x-[20px]' : 'translate-x-0'}`}>
              {theme === 'dark' ? <Moon size={14} strokeWidth={2} aria-hidden="true" /> : <Sun size={14} strokeWidth={2} aria-hidden="true" />}
            </span>
          </button>
          <button
            type="button"
            aria-label="Local Files"
            aria-pressed={mode === 'local'}
            data-tip="Choose included or local Markdown files"
            onClick={() => setLocalDialogOpen(true)}
            className={`inline-flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full border text-[11px] font-semibold transition-colors duration-200 xl:w-auto xl:px-3.5 ${mode === 'local' ? 'border-ink bg-ink text-canvas' : 'border-line bg-canvas text-muted hover:border-muted hover:bg-surface hover:text-ink'}`}
          >
            <FolderOpen size={16} strokeWidth={1.8} aria-hidden="true" /><span className="hidden xl:inline">Local Files</span>
          </button>
        </div>
      </div>
    </header>
  );
}
