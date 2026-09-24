import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { LocalFilesDialog } from './components/LocalFilesDialog';
import { Sidebar } from './components/Sidebar';
import { StateView } from './components/StateView';
import { CatalogProvider, useCatalog } from './context/CatalogContext';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SearchPage } from './pages/SearchPage';
import { UnitPage } from './pages/UnitPage';
import { UnitsPage } from './pages/UnitsPage';
import { saveTheme, useVaultStore } from './store/useVaultStore';

// The Markdown + KaTeX reader and question bank load only when opened.
const TopicPage = lazy(() => import('./pages/TopicPage').then((module) => ({ default: module.TopicPage })));
const QuestionBankPage = lazy(() => import('./pages/QuestionBankPage').then((module) => ({ default: module.QuestionBankPage })));

function AppShell() {
  const { status, reload } = useCatalog();
  const { pathname } = useLocation();
  const theme = useVaultStore((state) => state.theme);
  const sidebarOpen = useVaultStore((state) => state.sidebarOpen);
  const setSidebarOpen = useVaultStore((state) => state.setSidebarOpen);
  const setCurrentRoute = useVaultStore((state) => state.setCurrentRoute);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b0b0b' : '#ffffff');
    saveTheme(theme);
  }, [theme]);

  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean);
    const isCourse = segments[0] === 'units' && segments.length > 1;
    setCurrentRoute(isCourse ? segments[1] : null, isCourse ? segments[2] ?? null : null);
    if (window.innerWidth < 1024) setSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [pathname, setCurrentRoute, setSidebarOpen]);

  useEffect(() => {
    if (!sidebarOpen || window.innerWidth >= 1024) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSidebarOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [sidebarOpen, setSidebarOpen]);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <button type="button" onClick={() => document.getElementById('main-content')?.focus()} className="sr-only rounded-lg bg-ink p-3 text-canvas focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100]">Skip to content</button>
      <Header />
      <div className="flex min-h-[calc(100vh-72px)] items-stretch">
        <Sidebar />
        <main id="main-content" tabIndex={-1} className="flex min-w-0 flex-1 flex-col focus:outline-none">
          <div className="flex-1">
            {status === 'loading' ? <StateView kind="loading" title="Opening the vault…" message="Putting the course in order." /> : status === 'error' ? <StateView kind="error" title="Couldn't load the course" message="Check that public/content/manifest.json is available, then try again." onRetry={reload} /> : (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/units" element={<UnitsPage />} />
                <Route path="/units/:unitSlug" element={<UnitPage />} />
                <Route path="/units/:unitSlug/:topicSlug" element={<Suspense fallback={<StateView kind="loading" title="Opening topic…" />}><TopicPage /></Suspense>} />
                <Route path="/question-bank" element={<Suspense fallback={<StateView kind="loading" title="Opening practice…" />}><QuestionBankPage /></Suspense>} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            )}
          </div>
          <footer className="border-t border-line px-5 py-6 text-[11px] text-muted sm:px-9 lg:px-12 xl:px-16">
            <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-2"><span className="font-semibold text-ink">Sarang.md <span className="font-normal text-faint">/ A space to think clearly.</span></span><span className="font-mono text-[10px] uppercase tracking-[0.1em] text-faint">Made for the love of learning</span></div>
          </footer>
        </main>
      </div>
      <LocalFilesDialog />
    </div>
  );
}

export default function App() {
  return <CatalogProvider><AppShell /></CatalogProvider>;
}
