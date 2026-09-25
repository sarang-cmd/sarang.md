import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, MessageCircleQuestion, NotebookPen } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MarkdownArticle } from '../components/MarkdownArticle';
import { StateView } from '../components/StateView';
import { useCatalog } from '../context/CatalogContext';
import { unit as numberUnit } from '../data/unit';
import { findTopicBySlug, findTopicByFile, topicPath } from '../lib/catalog';
import { NotFoundPage } from './NotFoundPage';
import { useTutorStore } from '../store/useTutorStore';
import { useProfileStore } from '../store/useProfileStore';
import { useLocation } from 'react-router-dom';

type LoadState = { key: string | null; status: 'loading' | 'ready' | 'error'; source: string };

export function TopicPage() {
  const { unitSlug, topicSlug: slug } = useParams<{ unitSlug: string; topicSlug: string }>();
  const { units, mode, revision, getMarkdown } = useCatalog();
  const course = units.find((entry) => entry.slug === unitSlug && entry.topics.length > 0);
  const topic = course && slug ? findTopicBySlug(course.topics, slug) : undefined;
  const key = topic ? `${revision}:${course?.slug}/${topic.file}` : null;
  const [loadState, setLoadState] = useState<LoadState>({ key: null, status: 'loading', source: '' });
  const [attempt, setAttempt] = useState(0);
  const { pathname } = useLocation();
  const setTutorContext = useTutorStore((state) => state.setContext);
  const openFor = useTutorStore((state) => state.openFor);
  const profileStatus = useProfileStore((state) => state.status);
  const recordNote = useProfileStore((state) => state.recordNote);
  const toggleStudied = useProfileStore((state) => state.toggleStudied);
  const progressId = topic ? `${mode === 'local' ? 'local' : 'included'}:${course?.slug}/${topic.file}` : '';
  const studiedAt = useProfileStore((state) => state.profile?.notes[progressId]?.studiedAt);

  useEffect(() => {
    if (!topic || !key) return;
    let active = true;
    setLoadState({ key, status: 'loading', source: '' });
    getMarkdown(topic).then(
      (source) => { if (active) setLoadState({ key, status: 'ready', source }); },
      () => { if (active) setLoadState({ key, status: 'error', source: '' }); },
    );
    return () => { active = false; };
  }, [topic, key, getMarkdown, attempt]);

  useEffect(() => {
    if (topic && key && loadState.key === key && loadState.status === 'ready') {
      setTutorContext({ key, route: pathname, title: topic.title, text: loadState.source, subject: 'Mathematics AA HL', sourceStatus: mode === 'local' ? 'Your local note; not uploaded by this app' : 'Included course note' });
      if (profileStatus === 'unlocked') recordNote(progressId, topic.title, pathname);
    }
  }, [topic, key, loadState, pathname, mode, setTutorContext, profileStatus, recordNote, progressId]);

  if (!course || !topic) return <NotFoundPage />;
  const previous = findTopicByFile(course.topics, topic.prev);
  const next = findTopicByFile(course.topics, topic.next);
  const current = loadState.key === key;

  return (
    <div className="mx-auto w-full max-w-[960px] px-5 pb-28 pt-9 sm:px-9 sm:pt-12 lg:px-12 xl:px-16">
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: course.title, to: `/units/${course.slug}` }, { label: topic.title }]} />
      <div className="mx-auto max-w-[760px]">
        <div className="mb-9 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-muted">{topic.category}</span>
          <span className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-muted">Topic {topic.id}</span>
          <span className="ml-auto hidden font-mono text-[10px] uppercase tracking-[0.1em] text-faint sm:inline">Unit {course.number} / {mode === 'local' ? 'Local Files' : 'IB AA HL'}</span>
        </div>
        {!current || loadState.status === 'loading' ? (
          <StateView kind="loading" title="Loading topic…" message="Getting your notes ready." />
        ) : loadState.status === 'error' ? (
          <StateView kind="error" title="Couldn't load this topic" message="The Markdown file may be unavailable. Check the folder or try again." onRetry={() => setAttempt((value) => value + 1)} />
        ) : (
          <>
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => openFor({ key: key!, route: pathname, title: topic.title, text: loadState.source, subject: 'Mathematics AA HL', sourceStatus: mode === 'local' ? 'Your local note; not uploaded by this app' : 'Included course note' })} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-[11px] font-semibold hover:border-ink"><MessageCircleQuestion size={15} aria-hidden="true" /> Ask about this note</button>
              {profileStatus === 'unlocked' ? <button type="button" aria-pressed={!!studiedAt} onClick={() => toggleStudied(progressId, topic.title, pathname)} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[11px] font-semibold hover:border-ink ${studiedAt ? 'border-ink bg-ink text-canvas' : 'border-line bg-surface'}`}>{studiedAt ? '✓ Studied' : 'Mark as studied'}</button> : <Link to="/profile" className="text-[11px] font-semibold text-muted underline underline-offset-4 hover:text-ink">Unlock profile to save progress</Link>}
            </div>
            <MarkdownArticle source={loadState.source} />
            <div className="mt-20 border-t border-line pt-8 sm:mt-24">
              <div className="mb-5 flex items-center justify-between"><span className="section-label">Keep reading</span><span className="font-mono text-[10px] text-faint">{topic.id} / {String(course.topics.length - 1).padStart(2, '0')}</span></div>
              <nav aria-label="Adjacent topics" className="grid grid-cols-2 gap-3 sm:gap-4">
                {previous ? (
                  <Link to={topicPath(previous)} className="group flex min-h-[126px] flex-col justify-between rounded-xl border border-line p-4 transition-colors duration-200 hover:bg-surface sm:p-5">
                    <span className="flex items-center gap-2 text-[11px] font-medium text-muted"><ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" aria-hidden="true" /> Previous</span>
                    <span className="text-[13px] font-semibold leading-snug tracking-[-0.02em] sm:text-[15px]">{previous.title}</span>
                  </Link>
                ) : <div aria-hidden="true" />}
                {next ? (
                  <Link to={topicPath(next)} className="group flex min-h-[126px] flex-col items-end justify-between rounded-xl border border-line p-4 text-right transition-colors duration-200 hover:bg-surface sm:p-5">
                    <span className="flex items-center gap-2 text-[11px] font-medium text-muted">Next <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
                    <span className="text-[13px] font-semibold leading-snug tracking-[-0.02em] sm:text-[15px]">{next.title}</span>
                  </Link>
                ) : <div aria-hidden="true" />}
              </nav>
              {course.slug === numberUnit.slug && <Link to="/question-bank" className="mt-8 inline-flex items-center gap-2 text-[12px] font-semibold hover:underline hover:underline-offset-4"><NotebookPen size={16} strokeWidth={1.7} aria-hidden="true" /> Try a question on sequences & series <ArrowRight size={14} aria-hidden="true" /></Link>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
