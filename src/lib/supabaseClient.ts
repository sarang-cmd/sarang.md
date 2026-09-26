import { createClient } from '@supabase/supabase-js';

// This is a public publishable key, NOT a service-role secret. Env overrides
// allow forks to supply another project. RLS in supabase/migrations/ is the
// actual access boundary; never rely on browser checks to restrict rows.
const url = import.meta.env.VITE_SUPABASE_URL || 'https://ddfvaonbikugjyhwpeei.supabase.co';
const publishable = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_gt6jZpiUXZm3Y18uUnjnYQ_3HljHwHI';
export const supabase = createClient(url, publishable, {
  auth: { flowType: 'pkce', autoRefreshToken: true, persistSession: true, detectSessionInUrl: true,
    storageKey: 'sarang-md-supabase-auth' },
});
