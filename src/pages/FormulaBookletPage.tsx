import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { BookOpen, ExternalLink, FileUp, ShieldCheck, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { notify } from '../components/ui/toast';

const DRIVE_URL = 'https://drive.google.com/file/d/10UbYST423weqzjxFxLx0P6PNJw1x7U_A/view?usp=sharing';
const PREVIEW_URL = 'https://drive.google.com/file/d/10UbYST423weqzjxFxLx0P6PNJw1x7U_A/preview';

/** The owner-provided Drive link is never copied into the static build as a PDF. */
export function FormulaBookletPage() {
  const [view, setView] = useState<'drive' | 'private'>('drive');
  const [driveLoaded, setDriveLoaded] = useState(false);
  const [privateName, setPrivateName] = useState('');
  const [privateUrl, setPrivateUrl] = useState('');
  const [error, setError] = useState('');
  const objectUrl = useRef('');
  useEffect(() => () => { if (objectUrl.current) URL.revokeObjectURL(objectUrl.current); }, []);

  async function choose(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = '';
    if (!file) return;
    setError('');
    try {
      if (!/\.pdf$/i.test(file.name) || file.size < 5 || file.size > 25 * 1024 * 1024)
        throw new Error('Choose a PDF smaller than 25 MB.');
      const signature = new TextDecoder().decode(await file.slice(0, 5).arrayBuffer());
      if (signature !== '%PDF-') throw new Error('This file does not start with a PDF header. Choose a different PDF.');
      const next = URL.createObjectURL(new Blob([file], { type: 'application/pdf' }));
      if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
      objectUrl.current = next;
      setPrivateUrl(next); setPrivateName(file.name.slice(0, 180)); setView('private');
      notify({ title: 'Private PDF opened', message: 'The file stays in this browser tab and was not uploaded.', variant: 'success', id: 'booklet-file' });
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : 'This PDF could not be opened.');
      notify({ title: 'Booklet not opened', message: 'Choose a valid PDF under 25 MB.', variant: 'error', id: 'booklet-file' });
    }
  }

  function clear() {
    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    objectUrl.current = ''; setPrivateUrl(''); setPrivateName(''); setView('drive');
    notify({ title: 'Private PDF closed', message: 'This visit no longer holds your selected PDF.', variant: 'success', id: 'booklet-file' });
  }

  return <div className="mx-auto w-full max-w-[1250px] px-5 pb-24 pt-9 text-ink sm:px-9 lg:px-12">
    <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Formula booklet' }]} />
    <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-8">
      <div><p className="section-label mb-3">A reference beside your work</p><h1 className="text-[clamp(2.4rem,5vw,4.5rem)] font-semibold tracking-[-0.07em]">Formula booklet<span className="text-faint">.</span></h1>
        <p className="mt-3 max-w-[680px] text-[13px] leading-relaxed text-muted">Use the owner-provided Google Drive preview or choose your own PDF just for this visit. Check the edition and printed page for your course.</p></div>
      <BookOpen size={32} className="text-muted" aria-hidden="true" />
    </div>
    <div className="mt-7 flex flex-wrap items-center gap-2" role="group" aria-label="Booklet source">
      <button type="button" aria-pressed={view === 'drive'} onClick={() => setView('drive')} className={`rounded-full border px-4 py-2 text-[12px] font-semibold ${view === 'drive' ? 'border-ink bg-ink text-canvas' : 'border-line bg-surface'}`}>Provided Drive link</button>
      {privateUrl && <button type="button" aria-pressed={view === 'private'} onClick={() => setView('private')} className={`rounded-full border px-4 py-2 text-[12px] font-semibold ${view === 'private' ? 'border-ink bg-ink text-canvas' : 'border-line bg-surface'}`}>My PDF</button>}
      <label className="ml-auto inline-flex cursor-pointer items-center gap-2 rounded-full border border-line bg-canvas px-4 py-2 text-[12px] font-semibold hover:border-ink focus-within:ring-2 focus-within:ring-ink"><FileUp size={15} aria-hidden="true" /> Choose a PDF
        <input type="file" accept=".pdf,application/pdf" onChange={(event) => void choose(event)} className="sr-only" aria-label="Choose a private PDF formula booklet" />
      </label>
    </div>
    {error && <p role="alert" className="mt-4 rounded-lg border border-line bg-surface p-3 text-[12px]">{error}</p>}
    {view === 'drive' ? <section className="mt-6 rounded-2xl border border-line bg-surface p-3 sm:p-5" aria-label="Owner-provided Google Drive booklet">
      <div className="flex flex-wrap items-center justify-between gap-2"><p className="text-[12px] font-semibold">Provided booklet preview</p><a href={DRIVE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] font-semibold underline underline-offset-2">Open the original in Drive <ExternalLink size={13} aria-hidden="true" /></a></div>
      <p className="mt-3 text-[11px] leading-relaxed text-muted">Google may show its own toolbar, sign-in prompts, or download controls inside the viewer. This site cannot remove controls from a cross-origin Drive frame. Loading it connects your browser directly to Google.</p>
      {driveLoaded ? <iframe src={PREVIEW_URL} title="Provided formula booklet in Google Drive" className="mt-5 h-[min(75dvh,850px)] min-h-[400px] w-full rounded-lg border border-line bg-canvas" allow="fullscreen" referrerPolicy="strict-origin-when-cross-origin" /> :
        <div className="mt-5 flex min-h-[330px] flex-col items-center justify-center rounded-lg border border-dashed border-line bg-canvas p-6 text-center"><BookOpen size={28} aria-hidden="true" /><h2 className="mt-4 text-[16px] font-semibold">Ready when you are</h2><p className="mt-2 max-w-[400px] text-[12px] leading-relaxed text-muted">The third-party preview loads only after you choose to open it. If the embed is blocked, use the original Drive link above.</p><button type="button" onClick={() => setDriveLoaded(true)} className="mt-5 rounded-full bg-ink px-5 py-2.5 text-[12px] font-semibold text-canvas">Load Drive preview</button></div>}
    </section> : <section className="mt-6 rounded-2xl border border-line bg-surface p-3 sm:p-5" aria-label="Private booklet viewer">
      <div className="flex flex-wrap items-center justify-between gap-2"><p className="break-all text-[12px] font-semibold">{privateName}</p><button type="button" onClick={clear} className="inline-flex items-center gap-1.5 text-[11px] font-semibold underline"><X size={13} aria-hidden="true" /> Close private PDF</button></div>
      <p className="mt-3 flex items-start gap-2 text-[11px] leading-relaxed text-muted"><ShieldCheck size={15} className="mt-0.5 shrink-0" aria-hidden="true" /> This viewer uses a temporary browser object URL. The PDF is not added to the source archive, profile, cloud copy, or tutor request. Your browser's PDF viewer may offer its own controls.</p>
      <iframe src={privateUrl} title={`Your private booklet: ${privateName}`} className="mt-5 h-[min(75dvh,850px)] min-h-[400px] w-full rounded-lg border border-line bg-canvas" />
      <a href={privateUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-[11px] font-semibold underline">Open this PDF in a new tab if the preview is unavailable</a>
    </section>}
    <p className="mt-6 max-w-[780px] text-[11px] leading-relaxed text-muted">Viewing a PDF here does not give the tutor access to its pages. To let the tutor use extracted passages, choose a booklet separately in Tutor settings or your <Link to="/profile" className="font-semibold underline">private library</Link>. PDF extraction can reorder mathematical symbols; verify the printed page yourself.</p>
  </div>;
}
