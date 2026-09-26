import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { readFormulaBooklet } from '../lib/booklet';
import { hasLegacyProfile } from '../lib/legacyProfile';
import { MAX_DOCUMENTS, MAX_PROFILE_LENGTH, validateProfile } from '../lib/profileVault';
import type { PrivateDocument } from '../lib/profileVault';
import { useProfileStore } from '../store/useProfileStore';
import { useTutorStore } from '../store/useTutorStore';
import { MarkdownArticle } from '../components/MarkdownArticle';
import { CloudProfile } from '../components/CloudProfile';
import { earnedPracticeMarks, studyStreak } from '../lib/studyStats';
import { originalExamQuestions } from '../data/originalExam';
import { useCatalog } from '../context/CatalogContext';
import type { AssessmentRecord } from '../lib/profileVault';

function download(name: string, text: string, type: string) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 5000);
}
const message = (error: unknown) => error instanceof Error ? error.message : 'Something went wrong. Please try again.';
const datetime = (value: string) => new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value));

async function localAvatar(file: File): Promise<string> {
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type) || file.size > 2_000_000) throw new Error('Choose a JPG, PNG or WebP image under 2 MB.');
  const objectUrl = URL.createObjectURL(file);
  try {
    const image = new Image();
    image.src = objectUrl;
    await image.decode();
    const side = 128;
    const canvas = document.createElement('canvas'); canvas.width = side; canvas.height = side;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Image processing is unavailable in this browser.');
    context.fillStyle = '#ffffff'; context.fillRect(0, 0, side, side);
    const scale = Math.max(side / image.naturalWidth, side / image.naturalHeight);
    const w = image.naturalWidth * scale, h = image.naturalHeight * scale;
    context.drawImage(image, (side - w) / 2, (side - h) / 2, w, h);
    const resized = canvas.toDataURL('image/jpeg', 0.76);
    if (resized.length > 120000) throw new Error('The resized avatar is too large. Choose another image.');
    return resized;
  } finally { URL.revokeObjectURL(objectUrl); }
}

export function ProfilePage() {
  const vault = useProfileStore();
  const { bundledCount } = useCatalog();
  const [school, setSchool] = useState('');
  const [assessmentName, setAssessmentName] = useState('');
  const [assessmentPaper, setAssessmentPaper] = useState<AssessmentRecord['paper']>('P1');
  const [assessmentEarned, setAssessmentEarned] = useState('');
  const [assessmentAvailable, setAssessmentAvailable] = useState('');
  const [password, setPassword] = useState('');
  const [repeat, setRepeat] = useState('');
  const [name, setName] = useState('My study space');
  const [editingName, setEditingName] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [legacyPassword, setLegacyPassword] = useState('');
  const [migratedPassword, setMigratedPassword] = useState('');
  const [migratedConfirm, setMigratedConfirm] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const [backup, setBackup] = useState<File | null>(null);
  const [backupPassword, setBackupPassword] = useState('');
  const [backupBusy, setBackupBusy] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fileType, setFileType] = useState<'note' | 'formula'>('formula');
  const [fileBusy, setFileBusy] = useState(false);
  const [openDocument, setOpenDocument] = useState<string | null>(null);
  const [openChat, setOpenChat] = useState<string | null>(null);
  const privateFile = useRef<HTMLInputElement>(null);
  const profile = vault.profile;
  useEffect(() => { setSchool(profile?.school ?? ''); }, [profile?.school]);
  const streak = studyStreak(profile);
  const practiceMarks = earnedPracticeMarks(profile);
  const assessmentMarks = profile?.assessments.reduce((sum, entry) => sum + entry.earned, 0) ?? 0;
  const paperPracticeAttempted = Object.values(profile?.questions ?? {}).filter((entry) => entry.id.startsWith('aa-') && entry.attempts > 0).length;
  const classicAttempted = Object.values(profile?.questions ?? {}).filter((entry) => entry.id.startsWith('original:') && (entry.attempts > 0 || entry.lastAnswers.some(Boolean))).length;
  const legacyAvailable = hasLegacyProfile();
  const active = vault.status === 'unlocked' && profile !== null;
  const noteEntries = profile ? Object.values(profile.notes) : [];
  const questionEntries = profile ? Object.values(profile.questions) : [];
  const studied = noteEntries.filter((note) => note.studiedAt).length;
  const includedStudied = noteEntries.filter((note) => note.id.startsWith('included:') && note.studiedAt).length;
  const attempted = questionEntries.filter((entry) => entry.attempts || entry.lastAnswers.some(Boolean)).length;
  const completed = questionEntries.filter((entry) => entry.completedAt).length;
  const totalMinutes = profile ? Math.round(profile.focusSessions.reduce((sum, entry) => sum + entry.seconds, 0) / 60) : 0;
  const paperAttempted = questionEntries.filter((entry) => entry.kind === 'paper' && (entry.attempts || entry.lastAnswers.some(Boolean))).length;
  const variantsAttempted = questionEntries.filter((entry) => entry.kind === 'variant' && (entry.attempts || entry.lastAnswers.some(Boolean))).length;

  async function createOrUnlock(event: React.FormEvent) {
    event.preventDefault(); setNotice('');
    if (vault.status === 'absent' && password !== repeat) { setNotice('Passwords do not match.'); return; }
    setBusy(true);
    try {
      if (vault.status === 'absent') await vault.createVault(password, name);
      else await vault.unlockVault(password);
      setPassword(''); setRepeat(''); setNotice(vault.status === 'absent' ? 'Profile created and encrypted on this device.' : 'Welcome back. Your profile is unlocked.');
    } catch (error) { setNotice(message(error)); }
    finally { setBusy(false); }
  }

  async function migrateEarlier(event: React.FormEvent) {
    event.preventDefault(); setNotice('');
    if (migratedPassword !== migratedConfirm) { setNotice('New passwords do not match.'); return; }
    setBusy(true);
    try {
      await vault.migrateLegacyVault(legacyPassword, migratedPassword, name);
      setLegacyPassword(''); setMigratedPassword(''); setMigratedConfirm('');
      setNotice('Earlier encrypted profile migrated. Export a fresh backup for the new vault.');
    } catch (error) { setNotice(message(error)); }
    finally { setBusy(false); }
  }

  async function restore(event: React.FormEvent) {
    event.preventDefault(); setNotice('');
    if (!backup) { setNotice('Choose an encrypted profile file first.'); return; }
    if (backup.size > 3_000_000) { setNotice('This backup is too large.'); return; }
    if (vault.status !== 'absent' && !window.confirm('Importing this backup replaces the encrypted profile currently stored in this browser. Export your current profile first if you want to keep it. Continue?')) return;
    setBackupBusy(true);
    try {
      await vault.importVault(await backup.text(), backupPassword);
      setBackup(null); setBackupPassword(''); setNotice('Encrypted profile restored. This browser now holds the imported copy.');
    } catch (error) { setNotice(message(error)); }
    finally { setBackupBusy(false); }
  }

  async function exportBackup(extension: 'json' | 'txt' | 'data') {
    setNotice('');
    try {
      const data = await vault.exportEncrypted();
      const text = extension === 'txt' ? `SARANG.MD ENCRYPTED PROFILE\n${data}` : data;
      download(`sarang-profile-encrypted-${new Date().toISOString().slice(0, 10)}.${extension}`, text,
        extension === 'json' ? 'application/json' : 'text/plain');
      setNotice('Encrypted backup downloaded. Keep both your backup file and password safe.');
    } catch (error) { setNotice(message(error)); }
  }

  async function addPrivateFile(file: File) {
    setFileBusy(true); setNotice('');
    try {
      if (file.size > 1_500_000) throw new Error('Choose a file under 1.5 MB. This vault saves extracted text only.');
      const isPdf = file.name.toLowerCase().endsWith('.pdf');
      const isText = /\.(md|txt)$/i.test(file.name);
      if (!isPdf && !isText) throw new Error('Choose a PDF, Markdown, or plain-text file.');
      let pages: PrivateDocument['pages'];
      if (isPdf) {
        const parsed = await readFormulaBooklet(file);
        pages = parsed.pages;
      } else {
        const text = (await file.text()).replace(/\0/g, '').trim();
        if (!text) throw new Error('The file is empty.');
        if (text.length > 50000) throw new Error('Text files can contain at most 50,000 characters.');
        pages = [{ number: 1, text }];
      }
      const document: PrivateDocument = { id: crypto.randomUUID(), name: file.name, kind: fileType, pages, note: isPdf ? 'Machine-extracted PDF text may reorder equations. Check the original notation.' : '', addedAt: new Date().toISOString() };
      if (!profile || profile.documents.length >= MAX_DOCUMENTS) throw new Error(`The private library can hold ${MAX_DOCUMENTS} files. Remove one first.`);
      const preview = { ...profile, documents: [document, ...profile.documents] };
      validateProfile(preview);
      if (JSON.stringify(preview).length > MAX_PROFILE_LENGTH) throw new Error('The profile is full. Remove an old private file or chat before adding another.');
      vault.addDocument(document);
      if (privateFile.current) privateFile.current.value = '';
      setNotice(`Saved extracted text from ${file.name} in your encrypted profile. Original binary was not saved.`);
    } catch (error) { setNotice(message(error)); }
    finally { setFileBusy(false); }
  }

  function saveAssessment(event: React.FormEvent) {
    event.preventDefault(); setNotice('');
    const earned = Number(assessmentEarned), available = Number(assessmentAvailable);
    if (!Number.isInteger(earned) || !Number.isInteger(available) || available < 1 || available > 500 || earned < 0 || earned > available) {
      setNotice('Enter whole earned and available marks, with 0 ≤ earned ≤ available ≤ 500.'); return;
    }
    const entry: AssessmentRecord = { id: crypto.randomUUID(), name: assessmentName.trim().slice(0, 120) || 'Assessment',
      paper: assessmentPaper, source: 'manual', earned, available, questionIds: [], completedAt: new Date().toISOString() };
    vault.addAssessment(entry); setAssessmentName(''); setAssessmentEarned(''); setAssessmentAvailable('');
    setNotice('Self-reported assessment saved in your encrypted profile.');
  }

  async function changePassword(event: React.FormEvent) {
    event.preventDefault(); setNotice('');
    if (newPassword !== confirmPassword) { setNotice('New passwords do not match.'); return; }
    setBusy(true);
    try {
      await vault.changePassword(oldPassword, newPassword);
      setOldPassword(''); setNewPassword(''); setConfirmPassword('');
      setNotice('Password changed. Export a new encrypted backup. Older backups still require their original password.');
    } catch (error) { setNotice(message(error)); }
    finally { setBusy(false); }
  }

  return (
    <div className="profile-page page-shell">
      <nav className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>Profile</span></nav>
      <div className="profile-hero">
        <div><p className="eyebrow">YOUR SPACE / PRIVATE BY DESIGN</p><h1>Study profile<span className="period">.</span></h1>
          <p>Your reading, scores, focus time and tutor settings in one place. Encrypted on this device; optional cloud backup uploads ciphertext only when you choose.</p><button type="button" className="secondary-button mt-5" onClick={() => document.getElementById('cloud-profile-heading')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })}>Email, Google or GitHub sign-in ↓</button></div>
        <div className="profile-seal" aria-label={active ? 'Encrypted profile unlocked' : 'Profile locked'}><span>{active ? '◈' : '◇'}</span><small>{active ? 'UNLOCKED' : 'PRIVATE'}</small></div>
      </div>

      {(notice || vault.error) && <div className="profile-notice" role="status">{notice || vault.error}{vault.error && <button type="button" className="text-button" onClick={vault.clearError}>Dismiss</button>}</div>}

      {vault.status === 'unavailable' && <section className="profile-card"><h2>Secure storage unavailable</h2>
        <p>Encrypted profiles require a secure browser context (HTTPS or localhost), Web Crypto, and local browser storage. Existing study tools remain usable without a profile.</p></section>}

      {vault.status === 'absent' && legacyAvailable && <section className="profile-card profile-legacy-card">
        <p className="eyebrow">AN EARLIER PROFILE IS HERE</p><h2>Migrate your existing study data</h2>
        <p>This browser holds a profile saved by an earlier version. Enter its password, then choose a new password to move any saved keys and progress into the stronger encrypted vault. Nothing is changed if the old password is wrong. Once migrated, make a fresh encrypted backup.</p>
        <form className="profile-form profile-migration-form" onSubmit={migrateEarlier}>
          <label>New profile name<input value={name} onChange={(event) => setName(event.target.value)} maxLength={80} /></label>
          <label>Earlier password<input type="password" value={legacyPassword} onChange={(event) => setLegacyPassword(event.target.value)} required autoComplete="off" /></label>
          <label>New password<input type="password" value={migratedPassword} onChange={(event) => setMigratedPassword(event.target.value)} required minLength={12} maxLength={256} autoComplete="new-password" /></label>
          <label>Confirm new password<input type="password" value={migratedConfirm} onChange={(event) => setMigratedConfirm(event.target.value)} required autoComplete="new-password" /></label>
          <button type="submit" disabled={busy} className="primary-button">{busy ? 'Migrating…' : 'Migrate earlier profile'}</button>
        </form><p className="profile-fine">You can create a separate new vault instead. The earlier record stays untouched unless you migrate it.</p>
      </section>}
      {(vault.status === 'absent' || vault.status === 'locked') && <div className="profile-entry-grid">
        <section className="profile-card">
          <p className="eyebrow">{vault.status === 'absent' ? '01 / BEGIN' : '01 / WELCOME BACK'}</p>
          <h2>{vault.status === 'absent' ? 'Create your private vault' : 'Unlock your profile'}</h2>
          <p>{vault.status === 'absent' ? 'A password protects your API keys and study history. We cannot recover it for you.' : 'Unlock once each visit. Your password is never stored, and your key stays only in this tab’s memory.'}</p>
          <form onSubmit={createOrUnlock} className="profile-form">
            {vault.status === 'absent' && <label>Profile name<input value={name} onChange={(event) => setName(event.target.value)} maxLength={80} placeholder="My study space" /></label>}
            <label>Password<input type={showPassword ? 'text' : 'password'} value={password} onChange={(event) => setPassword(event.target.value)}
              minLength={vault.status === 'absent' ? 12 : 1} maxLength={256} required autoComplete={vault.status === 'absent' ? 'new-password' : 'current-password'} placeholder={vault.status === 'absent' ? 'At least 12 characters' : 'Your profile password'} /></label>
            {vault.status === 'absent' && <label>Confirm password<input type={showPassword ? 'text' : 'password'} value={repeat} onChange={(event) => setRepeat(event.target.value)} required autoComplete="new-password" /></label>}
            <label className="profile-inline-check"><input type="checkbox" checked={showPassword} onChange={(event) => setShowPassword(event.target.checked)} /> Show password</label>
            <button className="primary-button" disabled={busy} type="submit">{busy ? 'Working…' : vault.status === 'absent' ? 'Create encrypted profile' : 'Unlock profile'}</button>
          </form>
        </section>
        <section className="profile-card profile-restore">
          <p className="eyebrow">02 / TAKE IT WITH YOU</p><h2>Restore a backup</h2>
          <p>Bring an encrypted .json, .data, or .txt backup from another browser or device. Its password is required to open it.</p>
          <form onSubmit={restore} className="profile-form">
            <label>Encrypted backup<input type="file" accept=".json,.txt,.data,application/json,text/plain" onChange={(event) => setBackup(event.target.files?.[0] ?? null)} required /></label>
            <label>Backup password<input type="password" value={backupPassword} onChange={(event) => setBackupPassword(event.target.value)} required autoComplete="off" /></label>
            <button className="secondary-button" disabled={backupBusy} type="submit">{backupBusy ? 'Decrypting…' : 'Import encrypted profile'}</button>
          </form>
          {vault.status === 'locked' && <div className="profile-locked-actions"><p className="profile-fine">Import replaces the current local profile. Export it first if you want to keep a copy. There is no password recovery.</p>
            <button type="button" className="text-button" onClick={() => void exportBackup('json')}>Download the locked encrypted backup</button><br />
            <button type="button" className="text-button danger" onClick={() => {
              if (window.prompt('Type DELETE to permanently forget this browser’s encrypted profile:') === 'DELETE') { vault.deleteVault(); setNotice('Local encrypted profile removed. Previously exported backups are unaffected.'); }
            }}>Forget this browser’s profile</button></div>}
        </section>
      </div>}

      {active && <>
        <div className="profile-welcome"><div><p className="eyebrow">GOOD TO HAVE YOU HERE</p>
          {editingName ? <form className="profile-name-edit" onSubmit={(event) => { event.preventDefault(); vault.rename(name); setEditingName(false); }}>
            <label htmlFor="profile-name" className="sr-only">Profile name</label><input id="profile-name" value={name} onChange={(event) => setName(event.target.value)} maxLength={80} autoFocus />
            <button type="submit">Save</button><button type="button" onClick={() => setEditingName(false)}>Cancel</button>
          </form> : <h2>{profile.displayName} <button type="button" className="profile-edit-trigger" onClick={() => { setName(profile.displayName); setEditingName(true); }}>Edit name</button></h2>}
          <p>{profile.school ? `School: ${profile.school} · ` : ''}Local, encrypted, and yours to take with you.</p></div>
          <div className="profile-welcome-actions"><span className="profile-state-dot">{vault.saving ? 'Saving encrypted changes…' : vault.error ? 'Save needs attention' : 'Encrypted locally'}</span>
            <button type="button" className="secondary-button" onClick={async () => { try { await vault.lockVault(); setNotice('Profile locked.'); } catch (error) { setNotice(message(error)); } }}>Lock profile</button></div>
        </div>
        <div className="profile-stat-grid" aria-label="Study statistics">
          <div><strong>{studied}<small>/{noteEntries.length}</small></strong><span>notes studied</span></div>
          <div><strong>{attempted}</strong><span>questions attempted</span></div>
          <div><strong>{completed}</strong><span>marked complete</span></div>
          <div><strong>{totalMinutes}<small> min</small></strong><span>focus time</span></div>
          <div><strong>{streak}<small> days</small></strong><span>study streak (marked work or focus)</span></div>
          <div><strong>{practiceMarks}<small> pts</small></strong><span>best self-marked practice points</span></div>
        </div>
        <div className="profile-grid">
          <section className="profile-card"><p className="eyebrow">IDENTITY / ONLY IN YOUR VAULT</p><h2>School and avatar</h2><p>These stay encrypted locally. If you opt in to a cloud copy, only their ciphertext is uploaded.</p>
            <div className="mt-5 flex flex-wrap items-center gap-5"><div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-surface text-[25px] font-semibold">{profile.avatar ? <img src={profile.avatar} alt="Your profile avatar" className="h-full w-full object-cover grayscale" /> : profile.displayName.slice(0, 1).toUpperCase()}</div><div className="min-w-[180px] flex-1"><label className="block text-[11px] font-semibold">Choose a photo<input type="file" accept="image/png,image/jpeg,image/webp" className="mt-2 block w-full text-[11px]" onChange={(event) => { const file = event.currentTarget.files?.[0]; event.currentTarget.value = ''; if (file) void localAvatar(file).then((value) => { vault.setAvatar(value); setNotice('Avatar resized and saved in your encrypted profile.'); }, (error: unknown) => setNotice(message(error))); }} /></label>{profile.avatar && <button type="button" onClick={() => vault.setAvatar('')} className="text-button mt-2">Remove avatar</button>}</div></div>
            <form className="profile-form" onSubmit={(event) => { event.preventDefault(); vault.setSchool(school); setNotice('School saved in your encrypted profile.'); }}><label>School name (optional)<input value={school} onChange={(event) => setSchool(event.target.value)} maxLength={120} placeholder="Your school" /></label><button type="submit" className="secondary-button">Save school</button></form>
          </section>
          <section className="profile-card"><p className="eyebrow">ASSESSMENTS / SELF-REPORTED</p><h2>Your marked work</h2><p>{profile.assessments.length} recorded assessments · {assessmentMarks} earned marks across them. This total excludes question best-points to avoid counting a mock twice. These are not official IB grades.</p>
            <form className="profile-form" onSubmit={saveAssessment}><label>Assessment name<input value={assessmentName} onChange={(event) => setAssessmentName(event.target.value)} maxLength={120} placeholder="Unit test or past practice" required /></label><div className="grid w-full grid-cols-3 gap-2"><label className="text-[11px] font-semibold">Type<select value={assessmentPaper} onChange={(event) => setAssessmentPaper(event.target.value as AssessmentRecord['paper'])} className="mt-2 h-11 w-full rounded-lg border border-line bg-surface px-2"><option value="P1">Paper 1</option><option value="P2">Paper 2</option><option value="P3">Paper 3</option><option value="mixed">Mixed</option><option value="IA">Exploration / IA</option></select></label><label className="text-[11px] font-semibold">Earned<input type="number" min="0" max="500" required value={assessmentEarned} onChange={(event) => setAssessmentEarned(event.target.value)} className="mt-2 h-11 w-full rounded-lg border border-line bg-surface px-2" /></label><label className="text-[11px] font-semibold">Available<input type="number" min="1" max="500" required value={assessmentAvailable} onChange={(event) => setAssessmentAvailable(event.target.value)} className="mt-2 h-11 w-full rounded-lg border border-line bg-surface px-2" /></label></div><button type="submit" className="secondary-button">Record assessment</button></form>
            {profile.assessments.length ? <ul className="mt-5 divide-y divide-line border-t border-line">{profile.assessments.slice(0, 15).map((entry) => <li key={entry.id} className="flex flex-wrap items-center justify-between gap-2 py-3 text-[12px]"><span><strong>{entry.name}</strong><small className="mt-1 block text-muted">{entry.paper} · {entry.source === 'mock' ? 'Original practice mock' : 'Manual entry'} · {datetime(entry.completedAt)}</small></span><span className="font-mono">{entry.earned}/{entry.available} <button type="button" onClick={() => { if (window.confirm(`Remove ${entry.name}?`)) vault.removeAssessment(entry.id); }} className="ml-2 text-[10px] text-muted underline">Remove</button></span></li>)}</ul> : <p className="profile-empty">No marked assessments recorded yet.</p>}
          </section>
        </div>
        <div className="profile-grid">
          <section className="profile-card"><p className="eyebrow">01 / THE WORK</p><h2>Your progress</h2>
            <p>Separate tracks for the original notes and question bank, and the new IB-style archive. A visit is not automatically a completion.</p>
            <div className="profile-progress-list">
              <ProgressRow label="Included lessons and notes" value={includedStudied} total={bundledCount} to="/units" />
              <ProgressRow label="Local Markdown notes" value={noteEntries.filter((note) => note.id.startsWith('local:') && note.studiedAt).length} to="/units" />
              <ProgressRow label="Original Paper 1, 2 and 3 practice" value={paperPracticeAttempted} total={originalExamQuestions.length} to="/practice" />
              <ProgressRow label="Classic Unit 1 bank" value={classicAttempted} total={16} to="/question-bank" />
              <ProgressRow label="User-supplied transcriptions" value={paperAttempted} total={50} to="/ib-papers" />
              <ProgressRow label="Generated variants" value={variantsAttempted} to="/ib-papers" />
            </div>
            <p className="profile-fine">Question attempts include saved drafts; “complete” is a separate choice on each question.</p>
          </section>
          <section className="profile-card"><p className="eyebrow">02 / RECENTLY</p><h2>Your study trail</h2>
            {!profile.activity.length ? <p>No activity yet. Open a note, practice a question, or complete a focus session to begin.</p> :
              <ol className="profile-activity">{profile.activity.slice(0, 9).map((entry) => <li key={entry.id}>
                <span className="activity-glyph" aria-hidden="true">{entry.kind === 'focus' ? '◐' : entry.kind === 'question' ? '◇' : entry.kind === 'chat' ? '✳' : '◦'}</span>
                <div><Link to={entry.route}>{entry.label}</Link><small>{datetime(entry.at)}</small></div>
              </li>)}</ol>}
          </section>
        </div>

        <div className="profile-section-heading"><p className="eyebrow">YOUR MATERIALS</p><h2>Private library<span className="period">.</span></h2>
          <p>Import a formula booklet or a study note into your encrypted profile. Only extracted text is saved, never the original PDF binary.</p></div>
        <section className="profile-card">
          <div className="profile-file-controls"><label>Save as<select value={fileType} onChange={(event) => setFileType(event.target.value as 'formula' | 'note')}>
            <option value="formula">Formula booklet</option><option value="note">Study note</option></select></label>
            <label>PDF, Markdown, or plain text<input ref={privateFile} type="file" accept=".pdf,.md,.txt,application/pdf,text/plain,text/markdown"
              disabled={fileBusy} onChange={(event) => { const file = event.target.files?.[0]; if (file) void addPrivateFile(file); }} /></label></div>
          <p className="profile-fine">Up to 12 files, 1.5 MB each before extraction, and a total of 360,000 text characters. Image-only PDFs need OCR first. A tutor can reference your saved formula booklets when the profile is unlocked.</p>
          <div className="profile-document-list">{profile.documents.length === 0 ? <p className="profile-empty">No private files yet. Your library starts here.</p> :
            profile.documents.map((document) => <div key={document.id} className="profile-document">
              <div><small>{document.kind === 'formula' ? 'FORMULA BOOKLET' : 'STUDY NOTE'} · {document.pages.length} {document.pages.length === 1 ? 'PAGE' : 'PAGES'}</small><strong>{document.name}</strong><span>Added {datetime(document.addedAt)}</span></div>
              <div className="profile-document-actions"><button type="button" className="text-button" onClick={() => setOpenDocument(openDocument === document.id ? null : document.id)}>{openDocument === document.id ? 'Hide text' : 'View text'}</button>
                <button type="button" className="text-button" onClick={() => {
                  useTutorStore.getState().openFor({ key: `private:${document.id}`, route: '/profile', title: document.name, text: document.pages.map((page) => page.text).join('\n\n').slice(0, 6000), subject: 'Mathematics AA HL', sourceStatus: 'Your private imported document; sent to a provider only if you send a tutor message' });
                }}>Ask tutor</button>
                <button type="button" className="text-button danger" onClick={() => { if (window.confirm(`Remove ${document.name} from this encrypted profile?`)) vault.removeDocument(document.id); }}>Remove</button></div>
              {openDocument === document.id && <div className="profile-document-preview"><MarkdownArticle source={document.pages.map((page) => `### Page ${page.number}\n\n${page.text}`).join('\n\n')} /></div>}
            </div>)}</div>
        </section>

        <div className="profile-section-heading"><p className="eyebrow">A LITTLE HELP, WHEN YOU NEED IT</p><h2>Tutor & connections<span className="period">.</span></h2></div>
        <div className="profile-grid">
          <section className="profile-card"><h3>Saved connections</h3><p>Provider keys and settings live inside the encrypted vault. Configure them from the tutor’s settings.</p>
            {Object.entries(profile.providers).length === 0 ? <p className="profile-empty">No provider configured yet.</p> : <ul className="profile-connection-list">
              {Object.entries(profile.providers).map(([provider, config]) => <li key={provider}><strong>{provider}</strong><span>{config.model || 'No model'} · {config.apiKey ? 'Key saved' : 'No key saved'}</span></li>)}</ul>}
            <button type="button" className="secondary-button" onClick={() => useTutorStore.getState().openFor({ key: 'profile:tutor', route: '/profile', title: 'Your study space', text: 'Help me plan my next study step.', subject: 'Mathematics AA HL' })}>Open tutor</button>
            <p className="profile-fine">A browser-based request sends your prompt and API key to your selected provider. Some providers block direct browser calls with CORS. Use a trusted proxy if needed; no keys are shipped with the site.</p>
          </section>
          <section className="profile-card"><h3>Tutor conversations</h3><p>Recent questions and replies are saved here only while your vault is unlocked.</p>
            {!profile.chats.length ? <p className="profile-empty">Your tutor history will appear here after a conversation.</p> : <>
              <div className="profile-chat-list">{profile.chats.slice(0, 12).map((chat) => <div key={chat.id} className="profile-chat">
                <button type="button" onClick={() => setOpenChat(openChat === chat.id ? null : chat.id)}>{chat.title} <small>{chat.subject} · {datetime(chat.updatedAt)}</small></button>
                {openChat === chat.id && <div className="profile-chat-messages">{chat.messages.map((item, index) => <div key={index}><small>{item.role === 'user' ? 'YOU' : 'TUTOR'}</small><MarkdownArticle source={item.content} /></div>)}</div>}
              </div>)}</div>
              <button type="button" className="text-button danger" onClick={() => { if (window.confirm('Clear all saved tutor conversations?')) vault.clearChats(); }}>Clear chat history</button></>}
          </section>
        </div>

        <div className="profile-section-heading"><p className="eyebrow">KEEP A COPY</p><h2>Back up & move<span className="period">.</span></h2>
          <p>Take your encrypted profile to another browser. Keep its password separately. An optional Supabase account can hold a manually uploaded encrypted copy, but cannot recover a lost vault password.</p></div>
        <div className="profile-grid">
          <section className="profile-card"><h3>Encrypted backup</h3><p>Includes progress, saved API keys, private document text, and tutor history. The exported file is encrypted with your profile password.</p>
            <div className="profile-export-actions"><button type="button" className="primary-button" onClick={() => void exportBackup('json')}>Download .json</button>
              <button type="button" className="secondary-button" onClick={() => void exportBackup('data')}>.data</button>
              <button type="button" className="secondary-button" onClick={() => void exportBackup('txt')}>.txt</button></div>
            <p className="profile-fine">All three formats contain the same encrypted backup. A plain-text editor can inspect the envelope, not the secret contents.</p>
          </section>
          <section className="profile-card"><h3>Readable progress summary</h3><p>Export a plain text overview of notes, practice, and focus time. It deliberately excludes API keys, private files, and chat messages.</p>
            <button type="button" className="secondary-button" onClick={() => download(`sarang-progress-${new Date().toISOString().slice(0, 10)}.txt`, vault.exportSummary(), 'text/plain')}>Download progress .txt</button>
            <p className="profile-fine">Readable summaries cannot be imported as profiles. Use an encrypted backup to move your full profile.</p>
          </section>
        </div>
        <section className="profile-card profile-security"><p className="eyebrow">HOUSEKEEPING</p><h2>Privacy controls</h2>
          <div className="profile-grid"><div><h3>Change password</h3><form onSubmit={changePassword} className="profile-form">
            <label>Current password<input type="password" value={oldPassword} onChange={(event) => setOldPassword(event.target.value)} required autoComplete="current-password" /></label>
            <label>New password<input type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} required minLength={12} maxLength={256} autoComplete="new-password" /></label>
            <label>Confirm new password<input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required autoComplete="new-password" /></label>
            <button type="submit" className="secondary-button" disabled={busy}>Change password</button></form></div>
            <div><h3>Clean slate</h3><p>Clearing progress keeps your keys, private documents, and tutor history. Deleting the profile removes all encrypted profile data in this browser. Neither action affects exported backups or separately stored local notes and theme settings.</p>
              <button type="button" className="text-button danger" onClick={() => { if (window.confirm('Clear all saved note, question, and focus progress? This cannot be undone.')) vault.resetProgress(); }}>Clear study progress</button><br />
              <button type="button" className="text-button danger" onClick={() => {
                if (window.prompt('Type DELETE to permanently remove this local encrypted profile:') === 'DELETE') { vault.deleteVault(); setNotice('This browser’s encrypted profile was deleted. Exported backups remain wherever you saved them.'); }
              }}>Delete local profile</button></div></div>
        </section>
      </>}
      <div className="profile-section-heading"><p className="eyebrow">OPTIONAL CLOUD CONNECTION</p><h2>Take the encrypted copy with you<span className="period">.</span></h2></div>
      <CloudProfile />
    </div>
  );
}

function ProgressRow({ label, value, total, to }: { label: string; value: number; total?: number; to: string }) {
  const width = total ? Math.max(0, Math.min(100, 100 * value / total)) : Math.min(100, value * 10);
  return <Link to={to} className="profile-progress-row"><div><span>{label}</span><strong>{value}{total ? ` / ${total}` : ' explored'}</strong></div>
    <span className="profile-progress-track"><span style={{ width: `${width}%` }} /></span></Link>;
}
