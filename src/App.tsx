import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { FocusMiniPlayer } from './components/FocusMiniPlayer';
import { SoundWindow } from './components/SoundWindow';
import { ContextMenu } from './components/ContextMenu';
import { ContextSuggestions } from './components/ContextSuggestions';
import { TooltipOverlay } from './components/TooltipOverlay';
import { TutorLauncher } from './components/TutorLauncher';
import { LocalFilesDialog } from './components/LocalFilesDialog';
import { Sidebar } from './components/Sidebar';
import { StateView } from './components/StateView';
import { CatalogProvider, useCatalog } from './context/CatalogContext';
import { FocusProvider } from './context/FocusContext';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SearchPage } from './pages/SearchPage';
import { UnitPage } from './pages/UnitPage';
import { UnitsPage } from './pages/UnitsPage';
import { saveTheme, useVaultStore } from './store/useVaultStore';
import { useTutorStore } from './store/useTutorStore';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

// The Markdown + KaTeX reader and question bank load only when opened.
const TopicPage = lazy(() => import('./pages/TopicPage').then((module) => ({ default: module.TopicPage })));
const QuestionBankPage = lazy(() => import('./pages/QuestionBankPage').then((module) => ({ default: module.QuestionBankPage })));
const PracticePage = lazy(() => import('./pages/PracticePage').then((module) => ({ default: module.PracticePage })));
const IBPapersPage = lazy(() => import('./pages/IBPapersPage').then((module) => ({ default: module.IBPapersPage })));
const FocusPage = lazy(() => import('./pages/FocusPage').then((module) => ({ default: module.FocusPage })));
const MirrorsPage = lazy(() => import('./pages/MirrorsPage').then((module) => ({ default: module.MirrorsPage })));
const ProfilePage = lazy(() => import('./pages/ProfilePage').then((module) => ({ default: module.ProfilePage })));
const TutorPanel = lazy(() => import('./components/TutorPanel').then((module) => ({ default: module.TutorPanel }))); 

function AppShell() {
  const { status, reload } = useCatalog();
  const { pathname } = useLocation();
  const theme = useVaultStore((state) => state.theme);
  const sidebarOpen = useVaultStore((state) => state.sidebarOpen);
  const setSidebarOpen = useVaultStore((state) => state.setSidebarOpen);
  const setCurrentRoute = useVaultStore((state) => state.setCurrentRoute);
  const tutorOpen = useTutorStore((state) => state.open);
  const tutorDocked = useTutorStore((state) => state.open && !state.minimized && state.docked);
  const [tutorLoaded, setTutorLoaded] = useState(tutorOpen);
  useEffect(() => { if (tutorOpen) setTutorLoaded(true); }, [tutorOpen]);
  const independentPage = ['/ib-papers', '/practice', '/focus', '/mirrors', '/profile'].includes(pathname);

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
        <main id="main-content" tabIndex={-1} className={`flex min-w-0 flex-1 flex-col focus:outline-none ${tutorDocked ? 'lg:mr-[380px]' : ''}`}>
          <div className="flex-1">
            {status === 'loading' && !independentPage ? <StateView kind="loading" title="Opening the vault…" message="Putting the course in order." /> : status === 'error' && !independentPage ? <StateView kind="error" title="Couldn't load the course" message="Check that public/content/manifest.json is available, then try again." onRetry={reload} /> : (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/units" element={<UnitsPage />} />
                <Route path="/units/:unitSlug" element={<UnitPage />} />
                <Route path="/units/:unitSlug/:topicSlug" element={<Suspense fallback={<StateView kind="loading" title="Opening topic…" />}><TopicPage /></Suspense>} />
                <Route path="/question-bank" element={<Suspense fallback={<StateView kind="loading" title="Opening practice…" />}><QuestionBankPage /></Suspense>} />
                <Route path="/practice" element={<Suspense fallback={<StateView kind="loading" title="Opening original papers…" />}><PracticePage /></Suspense>} />
                <Route path="/ib-papers" element={<Suspense fallback={<StateView kind="loading" title="Opening paper bank..." />}><IBPapersPage /></Suspense>} />
                <Route path="/focus" element={<Suspense fallback={<StateView kind="loading" title="Opening focus studio..." />}><FocusPage /></Suspense>} />
                <Route path="/mirrors" element={<Suspense fallback={<StateView kind="loading" title="Opening mirrors..." />}><MirrorsPage /></Suspense>} />
                <Route path="/profile" element={<Suspense fallback={<StateView kind="loading" title="Opening profile..." />}><ProfilePage /></Suspense>} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            )}
          </div>
          <footer className="border-t border-line px-5 py-6 text-[11px] text-muted sm:px-9 lg:px-12 xl:px-16">
            <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-2"><span className="font-semibold text-ink">Sarang.md <span className="font-normal text-faint">/ A space to think clearly.</span></span><span className="flex flex-wrap items-center gap-4"><Link to="/profile" className="hover:text-ink hover:underline">Profile</Link><Link to="/mirrors" className="hover:text-ink hover:underline">Mirrors</Link><a href="https://github.com/sarang-cmd/sarang.md" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-ink hover:underline"><Github size={13} aria-hidden="true" /> GitHub</a><span className="font-mono text-[10px] uppercase tracking-[0.1em] text-faint">Made for the love of learning</span></span></div>
          </footer>
        </main>
      </div>
      <LocalFilesDialog />
      <FocusMiniPlayer />
      <SoundWindow />
      <ContextSuggestions />
      <ContextMenu />
      <TooltipOverlay />
      {tutorLoaded ? <Suspense fallback={<TutorLauncher />}><TutorPanel /></Suspense> : <TutorLauncher />}
    </div>
  );
}

export default function App() {
  return <CatalogProvider><FocusProvider><AppShell /></FocusProvider></CatalogProvider>;
}
