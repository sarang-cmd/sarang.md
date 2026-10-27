import { decryptProfile, deriveVaultKey, encryptProfile, newSalt, KDF_ITERATIONS, type VaultEnvelope } from './profileVault';

export const MIN_VAULT_PASSWORD = 12;
export const MAX_VAULT_PASSWORD = 256;

/**
 * Re-encrypts an envelope under a new password, on this device. The old password is required because the data can
 * only be read with it: nothing here (and nothing on the server) can recover a forgotten password.
 * It throws, and changes nothing, when the old password is wrong or the new one is not acceptable.
 */
export async function rekeyEnvelope(envelope: VaultEnvelope, oldPassword: string, newPassword: string): Promise<VaultEnvelope> {
  if (newPassword.length < MIN_VAULT_PASSWORD || newPassword.length > MAX_VAULT_PASSWORD) throw new Error(`The new password needs ${MIN_VAULT_PASSWORD} to ${MAX_VAULT_PASSWORD} characters.`);
  if (newPassword === oldPassword) throw new Error('The new password is the same as the current one.');
  const oldKey = await deriveVaultKey(oldPassword, envelope.kdf.salt, envelope.kdf.iterations);
  const profile = await decryptProfile(envelope, oldKey);
  const salt = newSalt();
  const newKey = await deriveVaultKey(newPassword, salt, KDF_ITERATIONS);
  return encryptProfile(profile, newKey, salt, envelope.createdAt);
}
