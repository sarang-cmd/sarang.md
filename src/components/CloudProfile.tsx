import { useCallback, useEffect, useRef, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { Cloud, CloudDownload, CloudUpload, Github, LogOut, Mail, ShieldCheck } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { linkTarget, sendReset, verifyResetCode } from '../lib/authSetup';
import { useProfileStore } from '../store/useProfileStore';
import type { VaultEnvelope } from '../lib/profileVault';
import { notify } from './ui/toast';

type CloudCopy = { envelope: VaultEnvelope; revision: string; updated_at: string };
const describe = (error: unknown) => error instanceof Error ? error.message : 'Could not complete the request.';

export function CloudProfile() {
  const [session, setSession] = useState<Session | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vaultPassword, setVaultPassword] = useState('');
  const [copy, setCopy] = useState<CloudCopy | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [copyLoading, setCopyLoading] = useState(false);
  const [copyError, setCopyError] = useState('');
  const readToken = useRef(0);
  const [busy, setBusy] = useState(false);
  const [message, setMessageState] = useState('');
  function setMessage(value: string) {
    setMessageState(value);
    if (!value) return;
    const success = /^(?:Cloud account connected|Account created|If this email has|Redirecting to|Encrypted cloud copy saved|Cloud ciphertext decrypted|Signed out of Supabase)/i.test(value);
    notify({ title: success ? 'Cloud account updated' : 'Cloud action needs attention', message: value.slice(0, 200), variant: success ? 'success' : 'error', id: 'cloud-action' });
  }
  const [consent, setConsent] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [resetCode, setResetCode] = useState('');
  const vaultStatus = useProfileStore((state) => state.status);
  const vault = useProfileStore();
  const uploadReason = busy ? 'Another cloud action is in progress.' : !loaded ? copyError ? 'Cloud copy check failed. Retry it below before uploading.' : 'Checking the cloud copy first.' :
    vaultStatus !== 'unlocked' ? 'Unlock your local profile on this page before uploading.' : !consent ? 'Tick the consent box to confirm what the encrypted copy contains.' : '';
  const restoreReason = busy ? 'Another cloud action is in progress.' : !loaded ? copyError ? 'Cloud copy check failed. Retry it below before restoring.' : 'Checking the cloud copy first.' :
    !copy ? 'No cloud copy exists for this signed-in account. Upload one from a device with an unlocked vault first.' : !vaultPassword ? 'Enter your local vault password. Cloud sign-in alone cannot decrypt your copy.' : '';

  useEffect(() => {
    let alive = true;
    void supabase.auth.getSession().then(({ data, error }) => {
      if (!alive) return;
      if (error) setMessage(error.message);
      else setSession(data.session);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, next) => { if (alive) setSession(next); });
    return () => { alive = false; listener.subscription.unsubscribe(); };
  }, []);

  const readCopy = useCallback(async (userId: string): Promise<CloudCopy | null> => {
    const { data, error } = await supabase.from('private_vaults').select('envelope, revision, updated_at').eq('user_id', userId).maybeSingle();
    if (error) throw new Error(`Could not check your cloud copy: ${error.message}. Check this account's access and ask the site owner to verify the cloud setup if it persists.`);
    if (data && (typeof data.revision !== 'string' || !data.envelope)) throw new Error('Cloud copy is incomplete. Ask the site owner to verify the storage setup.');
    return data as CloudCopy | null;
  }, []);
  const refreshCopy = useCallback(async (userId: string) => {
    const token = ++readToken.current;
    setCopyLoading(true); setCopyError(''); setLoaded(false);
    try {
      const value = await readCopy(userId);
      if (readToken.current === token) { setCopy(value); setLoaded(true); setMessageState(''); }
    } catch (problem) {
      if (readToken.current === token) { setCopy(null); setCopyError(describe(problem)); setLoaded(false); }
    } finally { if (readToken.current === token) setCopyLoading(false); }
  }, [readCopy]);
  useEffect(() => {
    const id = session?.user.id;
    if (!id) { readToken.current++; setCopy(null); setCopyLoading(false); setCopyError(''); setLoaded(false); return; }
    void refreshCopy(id);
    return () => { readToken.current++; };
  }, [session?.user.id, refreshCopy]);

  async function authenticate(mode: 'signIn' | 'signUp') {
    setMessage(''); setBusy(true);
    try {
      if (password.length < 8) throw new Error('The cloud account password needs at least 8 characters. Use a different password from your local vault.');
      const response = mode === 'signIn' ? await supabase.auth.signInWithPassword({ email: email.trim(), password }) :
        await supabase.auth.signUp({ email: email.trim(), password, options: { emailRedirectTo: linkTarget() } });
      if (response.error) throw response.error;
      setPassword('');
      setMessage(response.data.session ? 'Cloud account connected. Your local vault has not been uploaded.' : 'Account created. Check your email if this project requires confirmation, then sign in.');
    } catch (error) { setMessage(describe(error)); }
    finally { setBusy(false); }
  }
  async function resetPassword() {
    if (!email.trim() || !email.includes('@')) { setMessage('Enter your account email first.'); return; }
    setMessage(''); setBusy(true);
    try {
      if (!resetSent) { await sendReset(email); setResetSent(true); setMessage('If this email has a cloud account, a reset email is on its way. Open the link in it (it opens the website, where you choose a new password), or type the code below if the email shows one.'); }
      else { await verifyResetCode(email, resetCode); setResetCode(''); setResetSent(false); setResetting(false); }
    } catch (problem) { setMessage(describe(problem)); }
    finally { setBusy(false); }
  }
  async function sendEmailLink() {
    if (!email.trim() || !email.includes('@')) { setMessage('Enter your account email to request a sign-in link.'); return; }
    setMessage(''); setBusy(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({ email: email.trim(), options: {
        emailRedirectTo: linkTarget(), shouldCreateUser: false,
      } });
      if (error) throw error;
      setMessage('If this email has a cloud account, a sign-in link is on its way. Open it on this device.');
    } catch (problem) { setMessage(describe(problem)); }
    finally { setBusy(false); }
  }
  async function signInWithProvider(provider: 'google' | 'github') {
    setMessage(''); setBusy(true);
    try {
      const redirectTo = `${location.origin}${location.pathname}#/profile`;
      const { error } = await supabase.auth.signInWithOAuth({ provider, options: { redirectTo } });
      if (error) throw error;
      setMessage(`Redirecting to ${provider === 'google' ? 'Google' : 'GitHub'} to sign in. Return here after authorizing.`);
    } catch (problem) { setMessage(describe(problem)); }
    finally { setBusy(false); }
  }
  async function upload() {
    if (!session || !loaded || vaultStatus !== 'unlocked' || !consent) return;
    if (copy && !window.confirm('Replace the cloud copy with your current encrypted local vault? The old cloud copy cannot be restored after replacement.')) return;
    setMessage(''); setBusy(true);
    try {
      const envelope: VaultEnvelope = JSON.parse(await vault.exportEncrypted());
      // Only the AES-GCM envelope leaves the browser. No password, CryptoKey,
      // decrypted name, score, private note, chat or provider key is transmitted.
      const { data, error } = await supabase.rpc('save_private_vault', {
        p_envelope: envelope, p_expected_revision: copy?.revision ?? null,
      }).single();
      if (error) throw error;
      const saved = data as { saved_revision: string; saved_at: string } | null;
      if (!saved) throw new Error('Cloud write returned no revision. Reload before uploading again.');
      setCopy({ envelope, revision: saved.saved_revision, updated_at: saved.saved_at });
      setMessage('Encrypted cloud copy saved. Only ciphertext and account-linked metadata were uploaded.');
    } catch (error) { setMessage(`${describe(error)} Reload the cloud copy if another device updated it.`); }
    finally { setBusy(false); }
  }
  async function download() {
    if (!session || !vaultPassword) return;
    if (vaultStatus !== 'absent' && !window.confirm('Restoring the cloud copy replaces the encrypted profile on this browser. Export your current local vault first if needed. Continue?')) return;
    setBusy(true); setMessage('');
    try {
      const latest = await readCopy(session.user.id);
      if (!latest) throw new Error('No encrypted cloud copy is available for this account.');
      await vault.importVault(JSON.stringify(latest.envelope), vaultPassword);
      setCopy(latest); setLoaded(true); setVaultPassword('');
      setMessage('Cloud ciphertext decrypted with your local vault password. This browser now holds the restored vault.');
    } catch (error) { setMessage(describe(error)); }
    finally { setBusy(false); }
  }

  return <section className="profile-card" aria-labelledby="cloud-profile-heading">
    <p className="eyebrow">OPTIONAL / SUPABASE AUTH</p><h2 id="cloud-profile-heading" className="flex items-center gap-2"><Cloud size={24} /> Encrypted cloud copy</h2>
    <p>Connect an account, then explicitly upload or restore an <strong>AES-GCM encrypted</strong> local vault. Cloud login and local vault unlock are separate. Your vault password and decrypted contents never go to Supabase. Sync is manual so you can resolve conflicts rather than silently overwriting progress.</p>
    <p className="profile-fine">This feature needs the included RLS migration installed in your Supabase project. A public publishable key alone cannot create the table or confirm that RLS is active. Do not upload until policies have been installed and tested.</p>
    {message && <p role="status" className="mt-4 rounded-lg border border-line bg-surface p-3 text-[12px] leading-relaxed">{message}</p>}
    {!session && resetting ? <form className="profile-form" onSubmit={(event) => { event.preventDefault(); void resetPassword(); }}>
      <h3 className="text-[14px] font-semibold">Reset your cloud account password</h3>
      <label>Account email<input type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} /></label>
      {resetSent && <label>Code from the email (if it shows one)<input inputMode="numeric" autoComplete="one-time-code" required value={resetCode} onChange={(event) => setResetCode(event.target.value.replace(/\D/g, ''))} /></label>}
      <div className="flex flex-wrap gap-2"><button type="submit" disabled={busy} className="primary-button">{resetSent ? 'Check the code' : 'Email me a reset link'}</button><button type="button" disabled={busy} onClick={() => { setResetting(false); setResetSent(false); }} className="secondary-button">Back to sign in</button></div>
      <span className="profile-fine">This resets only the cloud account password. Your local vault password is never sent anywhere and cannot be reset this way.</span>
    </form> : !session ? <form className="profile-form" onSubmit={(event) => { event.preventDefault(); void authenticate('signIn'); }}>
      <label>Account email<input type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} /></label>
      <label>Cloud account password<input type="password" required minLength={8} autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>
      <div className="flex flex-wrap gap-2"><button type="submit" disabled={busy} className="primary-button">Sign in</button><button type="button" disabled={busy} onClick={() => { if (email.includes('@')) void authenticate('signUp'); else setMessage('Enter an email before creating an account.'); }} className="secondary-button">Create cloud account</button><button type="button" disabled={busy} onClick={() => void sendEmailLink()} className="secondary-button"><Mail size={14} className="mr-2" /> Email a sign-in link</button><button type="button" data-testid="forgot-password" disabled={busy} onClick={() => { setResetting(true); setMessage(''); }} className="secondary-button">Forgot password?</button></div>
      <span className="profile-fine">The account password is sent to Supabase Auth over HTTPS. It is not your local vault password and is not saved inside the profile.</span>
      <div className="w-full border-t border-line pt-5"><p className="mb-3 text-[11px] font-semibold">Or use a connected sign-in provider</p><div className="flex flex-wrap gap-2"><button type="button" disabled={busy} onClick={() => void signInWithProvider('google')} className="secondary-button"><span aria-hidden="true" className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-line font-bold">G</span> Continue with Google</button><button type="button" disabled={busy} onClick={() => void signInWithProvider('github')} className="secondary-button"><Github size={15} className="mr-2" /> Continue with GitHub</button></div><p className="profile-fine mt-3 flex items-center gap-2"><Mail size={14} aria-hidden="true" /> Email sign-in is available above. These three methods authenticate a cloud account; none unlocks your separate local vault.</p></div>
    </form> : <div className="mt-5 space-y-5 text-[12px]">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-line bg-surface p-3"><span><ShieldCheck size={15} className="mr-1 inline" /> Signed in as <strong>{session.user.email}</strong><br /><span className="text-muted">{copyError ? 'Cloud copy check failed' : copyLoading ? 'Checking for a cloud copy...' : loaded ? (copy ? `Cloud copy saved ${new Date(copy.updated_at).toLocaleString()}` : 'No cloud copy yet') : 'Waiting to check for a cloud copy'}</span></span><button type="button" onClick={() => { void supabase.auth.signOut().then(({ error }) => setMessage(error ? error.message : 'Signed out of Supabase. The local vault remains here.')); }} className="text-button"><LogOut size={13} className="mr-1 inline" /> Sign out</button></div>
      {copyError && <div role="alert" className="rounded-lg border border-line bg-surface p-3"><p className="!mt-0 text-[11px] font-semibold">Cloud status could not be checked.</p><p className="break-words text-[11px]">{copyError}</p><button type="button" onClick={() => void refreshCopy(session.user.id)} className="secondary-button mt-3">Retry cloud check</button></div>}
      <div className="border-t border-line pt-5"><h3>Upload an encrypted copy</h3><p>Includes encrypted progress, provider keys, private document text, chats, school and avatar. Supabase receives only ciphertext, a random salt/IV and account-linked timestamps.</p><label className="mt-4 flex items-start gap-2 text-[11px] leading-relaxed"><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-1 accent-ink" /> I understand the encrypted vault includes my private profile, and this upload replaces an older cloud copy only after confirmation.</label><button type="button" disabled={!!uploadReason} title={uploadReason || 'Send the encrypted envelope to this cloud account'} onClick={() => void upload()} className="secondary-button mt-4"><CloudUpload size={14} className="mr-2" /> Upload encrypted vault</button><p role="status" className="profile-fine">{uploadReason || 'Ready to upload. A stored cloud copy will require confirmation before replacement.'}</p></div>
      <div className="border-t border-line pt-5"><h3>Restore from the cloud</h3><p>Enter your <strong>local vault password</strong>, not your cloud account password. Restoring replaces this browser's encrypted vault after confirmation.</p><label className="profile-form"><span className="text-[11px] font-semibold">Local vault password</span><input type="password" value={vaultPassword} onChange={(event) => setVaultPassword(event.target.value)} autoComplete="off" placeholder="Password used for your encrypted profile" /></label><button type="button" disabled={!!restoreReason} title={restoreReason || 'Decrypt the latest copy using your local password'} onClick={() => void download()} className="secondary-button mt-4"><CloudDownload size={14} className="mr-2" /> Restore encrypted copy</button><p role="status" className="profile-fine">{restoreReason || 'Ready to restore. You will confirm replacing any local vault.'}</p></div>
    </div>}
  </section>;
}
