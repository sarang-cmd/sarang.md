import type { StoredLocalLibrary } from '../types';

const DB_NAME = 'sarang-md-private-notes';
const STORE_NAME = 'libraries';
const KEY = 'current';

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) { reject(new Error('IndexedDB is unavailable.')); return; }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE_NAME)) request.result.createObjectStore(STORE_NAME);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('Could not open local storage.'));
  });
}

async function inStore<T>(mode: IDBTransactionMode, operation: (store: IDBObjectStore, setResult: (value: T) => void) => void): Promise<T> {
  const database = await openDatabase();
  return new Promise<T>((resolve, reject) => {
    let result: T;
    const transaction = database.transaction(STORE_NAME, mode);
    transaction.oncomplete = () => { database.close(); resolve(result); };
    transaction.onerror = () => { database.close(); reject(transaction.error ?? new Error('Could not access local storage.')); };
    transaction.onabort = () => { database.close(); reject(transaction.error ?? new Error('Local storage transaction was cancelled.')); };
    operation(transaction.objectStore(STORE_NAME), (value) => { result = value; });
  });
}

export async function readStoredLibrary(): Promise<StoredLocalLibrary | null> {
  const value = await inStore<unknown>('readonly', (store, setResult) => {
    store.get(KEY).onsuccess = (event) => setResult((event.target as IDBRequest).result);
  });
  if (!value || typeof value !== 'object') return null;
  const candidate = value as Partial<StoredLocalLibrary>;
  return candidate.version === 1 && Array.isArray(candidate.units) && candidate.contents && typeof candidate.contents === 'object'
    ? candidate as StoredLocalLibrary : null;
}

export async function writeStoredLibrary(value: StoredLocalLibrary): Promise<void> {
  await inStore<void>('readwrite', (store) => { store.put(value, KEY); });
}

export async function deleteStoredLibrary(): Promise<void> {
  await inStore<void>('readwrite', (store) => { store.delete(KEY); });
}
