import { KeyRound } from 'lucide-react';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { closeSetup, consumeEmailLink, openSetup, savePassword, usePasswordSetup } from '../lib/authSetup';
import { supabase } from '../lib/supabaseClient';
import { notify } from './ui/toast';

/** Handles email links on start and opens when an invitation or a password reset needs a new password. */
export function PasswordSetupDialog() {
  const setup = usePasswordSetup();
  const [password, setPassword] = useState('');
  const [again, setAgain] = useState('');
  const [problem, setProblem] = useState('');
  const [busy, setBusy] = useState(false);
  const first = useRef<HTMLInputElement>(null);
  useEffect(() => {
    void consumeEmailLink().then((result) => { if (result) notify({ title: result.title, message: result.message, variant: result.ok ? 'success' : 'error', id: 'email-link' }); });
    // A reset link opened in the browser that asked for it arrives as a recovery event instead.
    const { data } = supabase.auth.onAuthStateChange((event, session) => { if (event === 'PASSWORD_RECOVERY') openSetup({ kind: 'recovery', email: session?.user.email ?? '' }); });
    return () => data.subscription.unsubscribe();
  }, []);
  useEffect(() => { if (setup) first.current?.focus(); }, [setup]);
  if (!setup) return null;
  const invite = setup.kind === 'invite';
  async function submit(event: FormEvent) {
    event.preventDefault();
    if (password !== again) { setProblem('The two passwords are not the same.'); return; }
    setBusy(true); setProblem('');
    try { await savePassword(password); setPassword(''); setAgain(''); notify({ title: invite ? 'Account ready' : 'Password changed', message: 'You are signed in.', variant: 'success', id: 'password-setup' }); }
    catch (error) { setProblem(error instanceof Error ? error.message : 'Something went wrong. Try again.'); }
    finally { setBusy(false); }
  }
  return <div className="fixed inset-0 z-[128] flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm no-print">
    <form onSubmit={submit} role="dialog" aria-modal="true" aria-labelledby="password-setup-heading" data-testid="password-setup" className="w-full max-w-[420px] rounded-2xl border border-line bg-canvas p-6 shadow-2xl">
      <p className="section-label mb-2 flex items-center gap-2"><KeyRound size={13} aria-hidden="true" />{invite ? 'Invitation' : 'Reset password'}</p>
      <h2 id="password-setup-heading" className="text-[22px] font-semibold tracking-tight">{invite ? 'Choose a password' : 'Choose a new password'}</h2>
      <p className="mt-1 break-all text-[11px] text-muted">For {setup.email || 'your account'}. At least 8 characters. This is your cloud account password, not your local vault password.</p>
      <label className="mt-4 block text-[11px] font-semibold">New password<input ref={first} className="mt-1 w-full rounded-lg border border-line bg-canvas px-3 py-2 text-[12px] font-normal" type="password" required minLength={8} autoComplete="new-password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>
      <label className="mt-2 block text-[11px] font-semibold">Type it again<input className="mt-1 w-full rounded-lg border border-line bg-canvas px-3 py-2 text-[12px] font-normal" type="password" required minLength={8} autoComplete="new-password" value={again} onChange={(event) => setAgain(event.target.value)} /></label>
      {problem && <p role="alert" className="mt-3 rounded-lg border border-ink px-3 py-2 text-[11px] font-semibold">{problem}</p>}
      <div className="mt-5 flex flex-wrap gap-2">
        <button type="submit" className="studio-button studio-button-primary" disabled={busy}>{invite ? 'Create my account' : 'Save new password'}</button>
        <button type="button" className="studio-button" disabled={busy} onClick={closeSetup}>Not now</button>
      </div>
    </form>
  </div>;
}
