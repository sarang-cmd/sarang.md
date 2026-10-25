import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const sql = (await readFile('supabase/migrations/202609250001_private_vaults.sql', 'utf8')).replace(/--[^\n]*/g, '');
for (const [field, keys] of [
  ['kdf', 'name\x27,\x27hash\x27,\x27iterations\x27,\x27salt'],
  ['cipher', 'name\x27,\x27iv\x27,\x27ciphertext'],
]) {
  const expression = `(envelope->'${field}') - ARRAY['${keys}']::text[]`;
  assert.ok(sql.includes(expression), `${field} JSONB subtraction needs an explicitly typed array and parenthesized JSONB extraction`);
  assert.ok(!new RegExp(`envelope->'${field}'\\s*-\\s*ARRAY\\[`).test(sql), `${field} subtraction must not group the array on the right side of ->`);
}
assert.ok(sql.includes("(envelope - ARRAY['format','version','kdf','cipher','createdAt','savedAt']::text[])"));
console.log('PostgreSQL JSONB array subtraction types and operator precedence checked.');
