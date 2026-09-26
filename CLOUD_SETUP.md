# Optional encrypted cloud backup setup

Sarang.md works without a cloud account. Its local vault remains encrypted in your browser. The optional Supabase integration adds a manually uploaded, per-account copy of the **encrypted vault envelope**, not online editing or automatic conflict merging. Nothing in the static build can install a database migration by itself.

## 1. Install the server-side policy

Using **your own trusted Supabase dashboard / SQL editor**, execute `supabase/migrations/202609250001_private_vaults.sql` in the project addressed by `VITE_SUPABASE_URL` in `.env.example`. This creates `public.private_vaults`, turns on and forces row-level security (RLS), grants authenticated users read access to their own ciphertext only, and creates the definer-owned `save_private_vault` compare-and-swap function as the sole write path. Run it under the trusted SQL editor's privileged database role, not from the browser. Its definer privilege is restricted to an authenticated call that writes at `auth.uid()`; the function accepts no caller-supplied owner ID.

**Do not deploy the cloud backup UI as if it were operational before you install and test this migration.** A browser publishable key cannot do that. Never add a service-role key, database password, or a private tutor-provider key to `.env`, the repository, or any `VITE_` variable. The supplied `sb_publishable_...` value is a public browser key. You may override it and the project URL in an untracked `.env.local` for your own Supabase project.

## 2. Configure Auth redirects

In Supabase Auth settings, add the actual **Site URL** and permitted **Redirect URLs** for each origin where the app will run, for example `http://localhost:5173/**` during local development and the exact HTTPS GitHub Pages or other deployment path for production. The profile sign-up uses the current page's base path followed by `#/profile`, compatible with this site's HashRouter. Email/password, a passwordless email sign-in link for an existing account, Google OAuth and GitHub OAuth are available in the profile. You said all three providers are enabled in your Supabase project. Google and GitHub open the external provider's consent flow and return to `#/profile`; they still need the Supabase provider callback `https://<project-ref>.supabase.co/auth/v1/callback` configured in each provider dashboard, client IDs/secrets saved only in Supabase, and this deployment's exact app redirect URL allowed in Supabase Auth. An email account may require email confirmation. Cloud account passwords and local vault passwords are separate. The browser's Supabase Auth session is stored by the Auth client in local browser storage; that session is separate from the encrypted study vault.

## 3. Verify isolation before relying on it

1. Check in the Supabase dashboard that `private_vaults` has RLS enabled and the **Own encrypted vault only** SELECT policy is present. Check that anonymous access to the table and RPC is denied or returns no data.
2. Create two distinct test accounts, A and B, in separate browser profiles. Give each a distinct local encrypted vault. Manually upload an encrypted copy for A, then confirm B cannot read, modify, or erase A's row, even by querying the REST API directly with B's access token.
3. Confirm direct table INSERT, UPDATE and DELETE fail for an authenticated user, including on that user's own row. Only the RPC may write. Confirm a second upload from an out-of-date tab fails with a revision-conflict message rather than overwriting the newer cloud copy.
4. Export an encrypted file before restoring over a browser that already has a vault. Restore with the local vault password. Wrong passwords and tampered files must be rejected without replacing the existing local profile. Verify that a fresh account starts with no cloud copy.

## Privacy and limitations

Uploading is **opt-in** via the profile page's confirmation checkbox and button. The uploaded JSON contains a random KDF salt, an AES-GCM nonce, ciphertext, format metadata, and timestamps. Supabase also knows the Auth account ID and update time. Provider credentials, chats, grades, private document text, school and avatar are inside the ciphertext if present in your vault. Keep a strong, unique local password and separate offline backups: a weak vault password can still be guessed offline by an attacker with a stolen envelope. An account password reset cannot decrypt a vault or restore its local password.

Sync is **manual**. A password change on one device does not automatically change an earlier cloud backup. Browser course-file imports, video links, theme, and video files live outside the encrypted vault and are not included in cloud copies. Supabase deployment, Auth configuration, RLS behavior, and cross-device restoration have **not** been live-tested from this workspace because no authorized dashboard or migration credentials were available.
