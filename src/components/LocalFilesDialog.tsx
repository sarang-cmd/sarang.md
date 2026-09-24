import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, Check, FileText, FolderOpen, HardDrive, Library, LockKeyhole, Upload, X } from 'lucide-react';
import { useCatalog } from '../context/CatalogContext';
import { useVaultStore } from '../store/useVaultStore';
import type { ImportReport } from '../types';

export function LocalFilesDialog() {
  const open = useVaultStore((state) => state.localDialogOpen);
  const setOpen = useVaultStore((state) => state.setLocalDialogOpen);
  const { mode, bundledCount, localUnits, projectUnits, importedUnits, importedAt, hasLocal, setMode, importLocalFiles, removeImportedFiles } = useCatalog();
  const folderInput = useRef<HTMLInputElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [report, setReport] = useState<ImportReport | null>(null);
  const localCount = localUnits.reduce((sum, entry) => sum + entry.topics.length, 0);
  const projectCount = projectUnits.reduce((sum, entry) => sum + entry.topics.length, 0);
  const importedCount = importedUnits.reduce((sum, entry) => sum + entry.topics.length, 0);

  useEffect(() => {
    // A directory input is the cross-browser static-host-compatible folder picker.
    folderInput.current?.setAttribute('webkitdirectory', '');
    folderInput.current?.setAttribute('directory', '');
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); return; }
      if (event.key !== 'Tab') return;
      const buttons = Array.from(dialogRef.current?.querySelectorAll<HTMLButtonElement>('button:not([disabled])') ?? [])
        .filter((button) => button.getClientRects().length > 0);
      if (!buttons.length) return;
      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener('keydown', onKeyDown);
      document.querySelector<HTMLButtonElement>('button[aria-label="Local Files"]')?.focus();
    };
  }, [open, setOpen]);

  async function handleFiles(event: ChangeEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    const files = Array.from(input.files ?? []);
    if (!files.length) return;
    setBusy(true);
    setError('');
    setReport(null);
    try {
      setReport(await importLocalFiles(files, input === fileInput.current));
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : 'Could not import these files.');
    } finally {
      input.value = '';
      setBusy(false);
    }
  }

  async function removeImport() {
    if (!window.confirm('Remove the Markdown files stored in this browser? Your original files and project folders will not be deleted.')) return;
    try { await removeImportedFiles(); setReport(null); setError(''); }
    catch { setError('Could not remove the saved import. Try again after reloading.'); }
  }

  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-3 py-5 sm:px-6" role="presentation">
      <button type="button" aria-label="Close local files settings" onClick={() => setOpen(false)} className="absolute inset-0 bg-black/55 backdrop-blur-[3px]" />
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="local-dialog-title" className="relative flex max-h-[min(90dvh,780px)] w-full max-w-[590px] flex-col overflow-hidden rounded-2xl border border-line bg-canvas shadow-float">
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 pb-6 pt-7 sm:px-8 sm:pt-8">
          <div>
            <p className="section-label mb-3">Your reading room / content source</p>
            <h2 id="local-dialog-title" className="text-[28px] font-semibold leading-tight tracking-[-0.05em] sm:text-[32px]">Choose your notes<span className="text-faint">.</span></h2>
            <p className="mt-2 max-w-[435px] text-[13px] leading-relaxed text-muted">Switch between the included course and Markdown from your own folders.</p>
          </div>
          <button ref={closeButton} type="button" onClick={() => setOpen(false)} aria-label="Close settings" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors hover:bg-raised hover:text-ink"><X size={17} aria-hidden="true" /></button>
        </div>

        <div className="overflow-y-auto px-6 pb-7 pt-6 sm:px-8 sm:pb-8">
          <p className="section-label mb-3">Currently reading</p>
          <div className="grid gap-2.5 sm:grid-cols-2">
            <button type="button" onClick={() => { setMode('library'); setOpen(false); }} className={`group flex min-h-[140px] flex-col items-start justify-between rounded-xl border p-4 text-left transition-colors duration-150 ${mode === 'library' ? 'border-ink bg-surface' : 'border-line hover:border-muted hover:bg-surface'}`}>
              <span className="flex w-full items-center justify-between"><Library size={19} strokeWidth={1.7} aria-hidden="true" /><span className={`flex h-5 w-5 items-center justify-center rounded-full border ${mode === 'library' ? 'border-ink bg-ink text-canvas' : 'border-line text-transparent'}`}><Check size={12} aria-hidden="true" /></span></span>
              <span><strong className="block text-[14px] font-semibold">Included library</strong><span className="mt-1 block text-[12px] text-muted">{bundledCount} curated notes · always available</span></span>
            </button>
            <button type="button" disabled={!hasLocal} onClick={() => { setMode('local'); setOpen(false); }} className={`group flex min-h-[140px] flex-col items-start justify-between rounded-xl border p-4 text-left transition-colors duration-150 ${mode === 'local' ? 'border-ink bg-surface' : 'border-line hover:border-muted hover:bg-surface'} ${!hasLocal ? 'cursor-not-allowed opacity-55' : ''}`}>
              <span className="flex w-full items-center justify-between"><HardDrive size={19} strokeWidth={1.7} aria-hidden="true" /><span className={`flex h-5 w-5 items-center justify-center rounded-full border ${mode === 'local' ? 'border-ink bg-ink text-canvas' : 'border-line text-transparent'}`}><Check size={12} aria-hidden="true" /></span></span>
              <span><strong className="block text-[14px] font-semibold">Local Files</strong><span className="mt-1 block text-[12px] text-muted">{hasLocal ? `${localCount} notes · ${localUnits.length} unit${localUnits.length === 1 ? '' : 's'}` : 'Import a folder to get started'}</span></span>
            </button>
          </div>

          <div className="my-7 border-t border-line" />
          <div className="flex items-end justify-between gap-3"><div><p className="section-label mb-2">Add your Markdown</p><h3 className="text-[18px] font-semibold tracking-[-0.035em]">Bring your own notes</h3></div><FileText size={19} className="text-faint" aria-hidden="true" /></div>
          <p className="mt-2 text-[12px] leading-[1.7] text-muted">Choose your <span className="font-mono text-ink">Unit 1 Number and Algebra</span> folder to replace your browser import (names ending in <span className="font-mono text-ink">(2).md</span> work), or select individual Markdown files to add. Project-folder notes stay available; frontmatter is optional.</p>
          <input ref={folderInput} type="file" multiple accept=".md,.markdown,text/markdown" aria-hidden="true" tabIndex={-1} className="hidden" onChange={handleFiles} />
          <input ref={fileInput} type="file" multiple accept=".md,.markdown,text/markdown" aria-hidden="true" tabIndex={-1} className="hidden" onChange={handleFiles} />
          <div className="mt-5 flex flex-wrap gap-2.5">
            <button type="button" disabled={busy} onClick={() => folderInput.current?.click()} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-accent px-5 text-[12px] font-semibold text-accent-ink transition-opacity hover:opacity-80 disabled:opacity-50"><FolderOpen size={16} aria-hidden="true" /> {busy ? 'Importing…' : 'Choose folder'}</button>
            <button type="button" disabled={busy} onClick={() => fileInput.current?.click()} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line px-4 text-[12px] font-semibold transition-colors hover:border-ink hover:bg-surface disabled:opacity-50"><Upload size={15} aria-hidden="true" /> Choose .md files</button>
          </div>
          {error && <p role="alert" className="mt-4 rounded-lg border border-line bg-surface px-4 py-3 text-[12px] leading-relaxed text-ink">{error}</p>}
          {report && <p role="status" className="mt-4 flex items-start gap-2 rounded-lg border border-line bg-surface px-4 py-3 text-[12px] leading-relaxed"><Check size={15} className="mt-0.5 shrink-0" aria-hidden="true" /><span>Imported <strong>{report.files} notes</strong> across {report.units} unit{report.units === 1 ? '' : 's'}. Your local collection now has {report.total} notes. {report.skipped ? `${report.skipped} unrelated or unreadable file(s) skipped. ` : ''}{report.persisted ? 'Saved in this browser.' : 'Available this session only; browser storage is unavailable.'} <button type="button" onClick={() => setOpen(false)} className="font-semibold underline underline-offset-2">Start reading <ArrowRight size={12} className="inline" /></button></span></p>}

          {(projectCount > 0 || importedCount > 0) && <div className="mt-7 space-y-2 border-t border-line pt-5">
            <p className="section-label mb-3">Available local sources</p>
            {importedCount > 0 && <div className="flex items-center justify-between gap-3 rounded-lg bg-surface px-3 py-3 text-[12px]"><span><strong className="block font-semibold">Browser import · {importedCount} notes</strong><span className="mt-0.5 block text-muted">{importedAt ? `Added ${new Date(importedAt).toLocaleDateString()}` : 'Stored privately in your browser'}</span></span><button type="button" onClick={removeImport} className="shrink-0 rounded-full border border-line px-3 py-1.5 text-[11px] text-muted hover:text-ink">Remove</button></div>}
            {projectCount > 0 && <div className="flex items-center justify-between gap-3 rounded-lg bg-surface px-3 py-3 text-[12px]"><span><strong className="block font-semibold">Project folders · {projectCount} notes</strong><span className="mt-0.5 block text-muted">Synced from root folders at dev/build time</span></span><FolderOpen size={17} className="shrink-0 text-faint" aria-hidden="true" /></div>}
          </div>}
          <p className="mt-7 flex items-start gap-2 border-t border-line pt-5 text-[11px] leading-[1.65] text-muted"><LockKeyhole size={15} className="mt-0.5 shrink-0" aria-hidden="true" /><span>Files chosen in the browser never leave your device. Files placed in the project-root Unit folders are copied into the static build; do not publish private notes that way.</span></p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
