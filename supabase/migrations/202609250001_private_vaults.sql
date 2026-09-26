-- Run in the Supabase SQL editor or through an authenticated migration workflow.
-- The public publishable key cannot install this schema. No plaintext profile
-- fields, API keys, avatar files, scores or documents are stored in columns.
CREATE TABLE IF NOT EXISTS public.private_vaults (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  envelope jsonb NOT NULL,
  revision uuid NOT NULL DEFAULT gen_random_uuid(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT encrypted_envelope_only CHECK (
    envelope->>'format' = 'sarang-md-encrypted-profile'
    AND envelope->>'version' = '1'
    AND envelope->'cipher'->>'name' = 'AES-GCM'
    AND envelope->'kdf'->>'name' = 'PBKDF2'
    AND envelope->'kdf'->>'hash' = 'SHA-256'
    AND jsonb_typeof(envelope->'kdf') = 'object'
    AND jsonb_typeof(envelope->'cipher') = 'object'
    AND (envelope->'kdf' - 'name' - 'hash' - 'iterations' - 'salt') = '{}'::jsonb
    AND (envelope->'cipher' - 'name' - 'iv' - 'ciphertext') = '{}'::jsonb
    AND envelope->'kdf'->>'salt' IS NOT NULL
    AND envelope->'cipher'->>'iv' IS NOT NULL
    AND envelope->'cipher'->>'ciphertext' IS NOT NULL
    AND envelope->'cipher'->>'ciphertext' ~ '^[A-Za-z0-9+/]+={0,2}$'
    AND envelope - 'format' - 'version' - 'kdf' - 'cipher' - 'createdAt' - 'savedAt' = '{}'::jsonb
    AND octet_length(envelope::text) < 3000000
  )
);

ALTER TABLE public.private_vaults ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.private_vaults FORCE ROW LEVEL SECURITY;
REVOKE ALL ON public.private_vaults FROM PUBLIC, anon, authenticated;
GRANT SELECT ON public.private_vaults TO authenticated;

DROP POLICY IF EXISTS "Own encrypted vault only" ON public.private_vaults;
CREATE POLICY "Own encrypted vault only" ON public.private_vaults
  FOR SELECT TO authenticated
  USING ((select auth.uid()) = user_id);

-- Clients may SELECT their own row but cannot write directly. A definer-owned
-- RPC performs every write after checking auth.uid(), so direct REST requests
-- cannot bypass the compare-and-swap revision rule. Create this migration in
-- the Supabase SQL editor as the privileged table/function owner. FORCE RLS
-- still protects ordinary callers; the definer's write privilege is confined
-- to this audited function. Never accept a caller-supplied user_id.
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

-- Dashboard verification after deploying:
-- (1) As anon, SELECT and RPC writes must fail or return no rows.
-- (2) Two distinct signed-in users must not SELECT/UPDATE each other's rows.
-- (3) A stale revision must raise a conflict, not overwrite the newer row.
-- (4) Changing local vault passwords creates a new encrypted envelope and
--     requires a new explicit upload; the cloud never knows the password.
