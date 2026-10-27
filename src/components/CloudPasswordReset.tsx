import { useState } from 'react';
import { KeyRound, Trash2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { MAX_VAULT_PASSWORD, MIN_VAULT_PASSWORD, rekeyEnvelope } from '../lib/cloudVault';
import { parseEnvelope, type VaultEnvelope } from '../lib/profileVault';
import { useProfileStore } from '../store/useProfileStore';
import { notify } from './ui/toast';

export type CloudCopyRow = { envelope: VaultEnvelope; revision: string; updated_at: string };
const describe = (error: unknown) => (error instanceof Error ? error.message : typeof (error as { message?: unknown })?.message === 'string' ? String((error as { message: string }).message) : 'Could not complete the request.');

/** Change the password of the encrypted cloud copy, or remove the copy when the password is lost. */
export function CloudPasswordReset({ userId, copy, onChanged, disabled }: { userId: string; copy: CloudCopyRow | null; onChanged: (copy: CloudCopyRow | null) => void; disabled?: boolean }) {
  const vault = useProfileStore();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [alsoLocal, setAlsoLocal] = useState(true);
  const [typed, setTyped] = useState('');
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState('');
  const say = (text: string, ok: boolean) => { setNote(text); notify({ title: ok ? 'Cloud copy updated' : 'Cloud copy not changed', message: text.slice(0, 200), variant: ok ? 'success' : 'error', id: 'cloud-password' }); };
  const unlocked = vault.status === 'unlocked';

  async function change(event: React.FormEvent) {
    event.preventDefault(); setNote('');
    if (newPassword !== confirm) { setNote('The new passwords do not match.'); return; }
    setBusy(true);
    try {
      const { data, error } = await supabase.from('private_vaults').select('envelope, revision, updated_at').eq('user_id', userId).maybeSingle();
      if (error) throw new Error(`Could not read your cloud copy: ${error.message}`);
      if (!data) throw new Error('There is no cloud copy to change. Upload one first.');
      const latest = data as CloudCopyRow;
      const next = await rekeyEnvelope(parseEnvelope(JSON.stringify(latest.envelope)), oldPassword, newPassword);
      const saved = await supabase.rpc('save_private_vault', { p_envelope: next, p_expected_revision: latest.revision }).single();
      if (saved.error) throw saved.error;
      const row = saved.data as { saved_revision: string; saved_at: string } | null;
      if (!row) throw new Error('The cloud did not confirm the change. Reload and check.');
      onChanged({ envelope: next, revision: row.saved_revision, updated_at: row.saved_at });
      let local = '';
      if (alsoLocal && unlocked) {
        try { await vault.changePassword(oldPassword, newPassword); local = ' This browser\'s saved profile uses the new password too.'; }
        catch { local = ' This browser\'s saved profile still uses its own password, because it did not match the old one you typed.'; }
      } else if (vault.status === 'locked') local = ' The profile saved in this browser still uses the old password until you change it under Change password.';
      setOldPassword(''); setNewPassword(''); setConfirm('');
      say(`The cloud copy now needs the new password. Only ciphertext was uploaded.${local}`, true);
    } catch (problem) { say(describe(problem), false); }
    finally { setBusy(false); }
  }

  async function remove() {
    if (typed.trim().toUpperCase() !== 'DELETE') return;
    if (!window.confirm('Delete the encrypted copy in the cloud? This cannot be undone. Your cloud account and the profile on this device are not touched.')) return;
    setBusy(true); setNote('');
    try {
      const { error } = await supabase.rpc('delete_private_vault');
      if (error) throw new Error(/function .*delete_private_vault|schema cache/i.test(error.message) ? 'The delete step is not installed in this Supabase project yet (migration 202610270001_delete_private_vault.sql).' : error.message);
      setTyped(''); onChanged(null);
      say('The cloud copy was deleted. Upload a new one from a device that still has your unlocked profile, or start a new profile.', true);
    } catch (problem) { say(describe(problem), false); }
    finally { setBusy(false); }
  }

  return <div className="border-t border-line pt-5" data-testid="cloud-password-reset">
    <h3 className="flex items-center gap-2"><KeyRound size={15} /> Change the password of the cloud copy</h3>
    <p>The cloud copy is locked with your <strong>vault password</strong> on your device. It can be changed here, but it cannot be reset by email: the password never leaves your device, so nobody (Supabase, this site, its owner) can open the copy for you.</p>
    {note && <p role="status" data-testid="cloud-password-note" className="mt-3 rounded-lg border border-line bg-surface p-3 text-[12px] leading-relaxed">{note}</p>}
    <details className="mt-3 rounded-lg border border-line bg-surface p-3" data-testid="cloud-change-details">
      <summary className="cursor-pointer text-[12px] font-semibold">I know the current password</summary>
      <form className="profile-form mt-3" onSubmit={(event) => void change(event)}>
        <label>Current vault password<input type="password" required autoComplete="current-password" value={oldPassword} onChange={(event) => setOldPassword(event.target.value)} /></label>
        <label>New vault password ({MIN_VAULT_PASSWORD} to {MAX_VAULT_PASSWORD} characters)<input type="password" required minLength={MIN_VAULT_PASSWORD} maxLength={MAX_VAULT_PASSWORD} autoComplete="new-password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} /></label>
        <label>Repeat the new password<input type="password" required autoComplete="new-password" value={confirm} onChange={(event) => setConfirm(event.target.value)} /></label>
        {unlocked && <label className="flex items-start gap-2 text-[11px] leading-relaxed"><input type="checkbox" checked={alsoLocal} onChange={(event) => setAlsoLocal(event.target.checked)} />Also change the password of the profile saved in this browser (keeps both the same)</label>}
        <button type="submit" disabled={busy || disabled || !copy} className="primary-button">{busy ? 'Working...' : 'Change the cloud copy password'}</button>
        {!copy && <span className="profile-fine">There is no cloud copy yet.</span>}
        <span className="profile-fine">Done on this device: the copy is decrypted with the current password, locked again with the new one and uploaded. Older exported backups keep their old password.</span>
      </form>
    </details>
    <details className="mt-3 rounded-lg border border-line bg-surface p-3" data-testid="cloud-forgot-details">
      <summary className="cursor-pointer text-[12px] font-semibold">I forgot the password</summary>
      <p className="mt-3">There is no way to recover it, by design. What you can do:</p>
      <ol className="mt-2 list-decimal space-y-1 pl-5 text-[11.5px] leading-relaxed"><li>If any browser or device still has your profile unlocked, keep it open, change its password under Change password on this page, and upload a new copy.</li><li>Otherwise delete the cloud copy below and start a new profile. The old data stays unreadable.</li></ol>
      <label className="profile-form mt-3 block">Type DELETE to confirm<input value={typed} onChange={(event) => setTyped(event.target.value)} autoComplete="off" data-testid="cloud-delete-input" /></label>
      <button type="button" data-testid="cloud-delete" disabled={busy || disabled || !copy || typed.trim().toUpperCase() !== 'DELETE'} onClick={() => void remove()} className="mt-3 inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2 text-[12px] font-semibold disabled:opacity-40"><Trash2 size={13} />Delete the cloud copy</button>
    </details>
  </div>;
}
