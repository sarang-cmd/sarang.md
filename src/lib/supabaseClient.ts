import { createClient } from '@supabase/supabase-js';

// This is a public publishable key, NOT a service-role secret. Env overrides
// allow forks to supply another project. RLS in supabase/migrations/ is the
// actual access boundary; never rely on browser checks to restrict rows.
export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ddfvaonbikugjyhwpeei.supabase.co';
export const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_gt6jZpiUXZm3Y18uUnjnYQ_3HljHwHI';
/** The address as it was when the page opened. The client below removes email-link tokens from it at once, and this app finishes those links itself (see authSetup.ts). */
export const openedWith = typeof location === 'undefined' ? '' : `${location.search}${location.hash}`;
export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: { flowType: 'pkce', autoRefreshToken: true, persistSession: true, detectSessionInUrl: true,
    storageKey: 'sarang-md-supabase-auth' },
});

/**
 * A throw-away client for the one call that must work from any device: the password reset email. The normal client uses PKCE, which only
 * accepts a link opened in the same browser that asked for it. A link made by this client works in any browser (the desktop app, a phone,
 * the website), because the proof is in the link itself.
 */
export const supabaseForEmailLinks = () => createClient(supabaseUrl, supabasePublishableKey, { auth: { flowType: 'implicit', persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } });
