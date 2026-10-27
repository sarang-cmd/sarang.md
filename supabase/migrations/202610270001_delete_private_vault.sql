-- Lets a signed-in user remove their OWN encrypted cloud copy (for example after forgetting the vault password,
-- which nobody can recover). The table stays SELECT-only for clients; this is the only delete path.
CREATE OR REPLACE FUNCTION public.delete_private_vault()
RETURNS boolean
LANGUAGE plpgsql SECURITY DEFINER SET search_path = ''
AS $$
DECLARE v_count integer;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'Sign in first.'; END IF;
  DELETE FROM public.private_vaults WHERE user_id = auth.uid();
  GET DIAGNOSTICS v_count = ROW_COUNT;
  RETURN v_count > 0;
END;
$$;
REVOKE ALL ON FUNCTION public.delete_private_vault() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.delete_private_vault() TO authenticated;
