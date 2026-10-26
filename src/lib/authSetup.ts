import { useSyncExternalStore } from 'react';
import { openedWith, supabase, supabaseForEmailLinks } from './supabaseClient';

/**
 * Email links (invitation, password reset, confirmation, magic link, new address) and the password setup that two of them need.
 * The emails link to this site with `?token_hash=...&type=...`. The page then checks the token with one POST, so an email program that
 * opens links ahead of you cannot use it up, and a code typed by hand works the same way.
 */
export type SetupKind = 'invite' | 'recovery';
export interface Setup { kind: SetupKind; email: string }

let current: Setup | null = null;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((listener) => listener());
export const openSetup = (setup: Setup) => { current = setup; emit(); };
export const closeSetup = () => { current = null; emit(); };
export const usePasswordSetup = () => useSyncExternalStore((listener) => { listeners.add(listener); return () => { listeners.delete(listener); }; }, () => current);

export interface LinkResult { title: string; message: string; ok: boolean }
const TYPES = new Set(['signup', 'invite', 'magiclink', 'recovery', 'email_change', 'email']);

/** Reads `?token_hash=&type=` from the address, removes it at once, and checks it. Returns null when the address has no email link. */
export async function consumeEmailLink(): Promise<LinkResult | null> {
  if (typeof location === 'undefined') return null;
  // Links made for any device arrive as `#access_token=...&refresh_token=...&type=recovery` (or `#error_code=otp_expired`).
  const fromHash = new URLSearchParams(openedWith.slice(openedWith.indexOf('#') + 1).replace(/^\//, ''));
  if (openedWith.includes('#') && (fromHash.get('error_code') || fromHash.get('error_description'))) {
    const expired = /expired|invalid/i.test(`${fromHash.get('error_description') ?? ''} ${fromHash.get('error_code') ?? ''}`);
    try { history.replaceState(null, '', `${location.pathname}#/profile`); } catch { /* Not critical. */ }
    return { ok: false, title: 'That email link did not work', message: expired ? 'It may have expired or been opened already (some email programs open links ahead of you). Ask for a new email and open the link straight away.' : 'Ask for a new email and try again.' };
  }
  const access = fromHash.get('access_token'), refresh = fromHash.get('refresh_token'), kind = fromHash.get('type') ?? '';
  if (openedWith.includes('#') && access && refresh && TYPES.has(kind)) {
    try { history.replaceState(null, '', `${location.pathname}#/profile`); } catch { /* Not critical. */ }
    const { data, error } = await supabase.auth.setSession({ access_token: access, refresh_token: refresh });
    if (error || !data.session) return { ok: false, title: 'That email link did not work', message: 'It may have expired or been used already. Ask for a new email and try again.' };
    const who = data.session.user.email ?? '';
    if (kind === 'invite' || kind === 'recovery') { openSetup({ kind, email: who }); return { ok: true, title: kind === 'invite' ? 'Invitation accepted' : 'Link confirmed', message: 'Choose a password to finish.' }; }
    return { ok: true, title: 'Done', message: kind === 'email_change' ? 'Your new email address is confirmed.' : 'Email confirmed. You are signed in.' };
  }
  const params = new URLSearchParams(location.search);
  const tokenHash = params.get('token_hash'); const type = params.get('type') ?? '';
  if (!tokenHash || !TYPES.has(type)) return null;
  try { history.replaceState(null, '', `${location.pathname}${location.hash || '#/profile'}`); } catch { /* Not critical. */ }
  const { data, error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type: type as 'signup' | 'invite' | 'magiclink' | 'recovery' | 'email_change' | 'email' });
  if (error || !data.session) return { ok: false, title: 'That email link did not work', message: 'It may have expired or been used already. Ask for a new email and try again.' };
  const email = data.session.user.email ?? '';
  if (type === 'invite' || type === 'recovery') { openSetup({ kind: type, email }); return { ok: true, title: type === 'invite' ? 'Invitation accepted' : 'Link confirmed', message: 'Choose a password to finish.' }; }
  const text: Record<string, string> = { signup: 'Email confirmed. You are signed in.', magiclink: 'You are signed in.', email_change: 'Your new email address is confirmed.', email: 'You are signed in.' };
  return { ok: true, title: 'Done', message: text[type] ?? 'You are signed in.' };
}

/** Saves the new password for the signed-in person (the one the link proved), then closes the setup. */
export async function savePassword(password: string) {
  if (password.length < 8) throw new Error('Use a password of at least 8 characters.');
  const { error } = await supabase.auth.updateUser({ password });
  if (error) throw error;
  closeSetup();
}

/** Sends the reset email (a link and a code). The answer never reveals whether an address has an account. */
export const HOSTED_URL = 'https://sarang-md.vercel.app/';
/** Where an email link should land: this page on the website, or the website itself when this is the desktop app or a local preview (they cannot receive links). */
export function linkTarget(): string {
  const { protocol, hostname, origin, pathname } = location;
  if (!/^https?:$/.test(protocol) || hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('.localhost')) return HOSTED_URL;
  return `${origin}${pathname}`;
}
export async function sendReset(email: string) {
  const { error } = await supabaseForEmailLinks().auth.resetPasswordForEmail(email.trim(), { redirectTo: linkTarget() });
  if (error && !/not found/i.test(error.message)) throw error;
}
/** Checks the code from the reset email. On success the password setup opens. */
export async function verifyResetCode(email: string, token: string) {
  const { data, error } = await supabase.auth.verifyOtp({ email: email.trim(), token: token.trim(), type: 'recovery' });
  if (error || !data.session) throw new Error('That code did not work or has expired. Ask for a new one.');
  openSetup({ kind: 'recovery', email: data.session.user.email ?? email.trim() });
}
