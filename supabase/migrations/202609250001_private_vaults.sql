-- Run in the trusted Supabase SQL editor, not in the browser.
-- Safe to rerun after a partial installation. The public publishable key cannot
-- install this schema. Only ciphertext and envelope metadata are stored here.
CREATE TABLE IF NOT EXISTS public.private_vaults (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  envelope jsonb NOT NULL,
  revision uuid NOT NULL DEFAULT gen_random_uuid(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- PostgreSQL overloads jsonb - text and jsonb - text[]. An untyped chain such
-- as jsonb - 'name' - 'hash' is ambiguous (SQLSTATE 42725). Use an explicitly
-- typed text[] once. Parenthesize each JSONB extraction before subtracting:
-- PostgreSQL parses envelope->'kdf' - ARRAY[...] as envelope->('kdf' - ARRAY[...]).
-- Replacing this named constraint repairs a partial install
-- without deleting encrypted vaults. Existing rows must satisfy it.
ALTER TABLE public.private_vaults DROP CONSTRAINT IF EXISTS encrypted_envelope_only;
ALTER TABLE public.private_vaults ADD CONSTRAINT encrypted_envelope_only CHECK (
  jsonb_typeof(envelope) = 'object'
  AND envelope ?& ARRAY['format','version','kdf','cipher','createdAt','savedAt']::text[]
  AND COALESCE(envelope->>'format' = 'sarang-md-encrypted-profile', false)
  AND COALESCE(envelope->'version' = '1'::jsonb, false)
  AND jsonb_typeof(envelope->'kdf') = 'object'
  AND jsonb_typeof(envelope->'cipher') = 'object'
  AND (envelope->'kdf') ?& ARRAY['name','hash','iterations','salt']::text[]
  AND (envelope->'cipher') ?& ARRAY['name','iv','ciphertext']::text[]
  AND COALESCE(envelope->'cipher'->>'name' = 'AES-GCM', false)
  AND COALESCE(envelope->'kdf'->>'name' = 'PBKDF2', false)
  AND COALESCE(envelope->'kdf'->>'hash' = 'SHA-256', false)
  AND ((envelope->'kdf') - ARRAY['name','hash','iterations','salt']::text[]) = '{}'::jsonb
  AND ((envelope->'cipher') - ARRAY['name','iv','ciphertext']::text[]) = '{}'::jsonb
  AND jsonb_typeof(envelope->'kdf'->'iterations') = 'number'
  AND jsonb_typeof(envelope->'kdf'->'salt') = 'string'
  AND jsonb_typeof(envelope->'cipher'->'iv') = 'string'
  AND jsonb_typeof(envelope->'cipher'->'ciphertext') = 'string'
  AND COALESCE(envelope->'kdf'->>'salt' ~ '^[A-Za-z0-9+/]+={0,2}$', false)
  AND COALESCE(envelope->'cipher'->>'iv' ~ '^[A-Za-z0-9+/]+={0,2}$', false)
  AND COALESCE(envelope->'cipher'->>'ciphertext' ~ '^[A-Za-z0-9+/]+={0,2}$', false)
  AND jsonb_typeof(envelope->'createdAt') = 'string'
  AND jsonb_typeof(envelope->'savedAt') = 'string'
  AND (envelope - ARRAY['format','version','kdf','cipher','createdAt','savedAt']::text[]) = '{}'::jsonb
  AND octet_length(envelope::text) < 3000000
);

ALTER TABLE public.private_vaults ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.private_vaults FORCE ROW LEVEL SECURITY;
REVOKE ALL ON public.private_vaults FROM PUBLIC, anon, authenticated;
GRANT SELECT ON public.private_vaults TO authenticated;

DROP POLICY IF EXISTS "Own encrypted vault only" ON public.private_vaults;
CREATE POLICY "Own encrypted vault only" ON public.private_vaults
  FOR SELECT TO authenticated
  USING ((select auth.uid()) = user_id);

-- Clients may SELECT only their own row. All INSERT/UPDATE operations go
-- through this compare-and-swap RPC. Create it in the privileged SQL editor;
-- the browser cannot install functions or use a service-role key.
CREATE OR REPLACE FUNCTION public.save_private_vault(p_envelope jsonb, p_expected_revision uuid DEFAULT NULL)
RETURNS TABLE(saved_revision uuid, saved_at timestamptz)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = ''
AS $$
DECLARE v_revision uuid;
DECLARE v_time timestamptz;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'Sign in before syncing.'; END IF;
  IF p_envelope IS NULL THEN RAISE EXCEPTION 'An encrypted envelope is required.'; END IF;
  IF p_expected_revision IS NULL THEN
    INSERT INTO public.private_vaults (user_id, envelope)
    VALUES (auth.uid(), p_envelope)
    ON CONFLICT (user_id) DO NOTHING
    RETURNING revision, updated_at INTO v_revision, v_time;
  ELSE
    UPDATE public.private_vaults
       SET envelope = p_envelope, revision = gen_random_uuid(), updated_at = now()
     WHERE user_id = auth.uid() AND revision = p_expected_revision
    RETURNING revision, updated_at INTO v_revision, v_time;
  END IF;
  IF v_revision IS NULL THEN
    RAISE EXCEPTION 'Cloud copy changed. Reload and compare before uploading again.' USING ERRCODE = '40001';
  END IF;
  RETURN QUERY SELECT v_revision, v_time;
END;
$$;
REVOKE ALL ON FUNCTION public.save_private_vault(jsonb, uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.save_private_vault(jsonb, uuid) TO authenticated;

-- Dashboard verification after deployment:
-- (1) As anon, SELECT and RPC writes must fail or return no rows.
-- (2) Two distinct signed-in users must not SELECT/UPDATE each other's rows.
-- (3) A stale revision must raise a conflict, not overwrite the newer row.
-- (4) Changing local vault passwords creates a new encrypted envelope and
--     requires a new explicit upload; the cloud never knows the password.
