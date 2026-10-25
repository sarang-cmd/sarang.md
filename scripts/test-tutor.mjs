import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { test } from 'node:test';
import { build } from 'esbuild';

const temp = await mkdtemp(path.join(tmpdir(), 'sarang-tutor-test-'));
globalThis.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
globalThis.window = { localStorage: globalThis.localStorage, addEventListener: () => {}, location: { hostname: 'localhost', origin: 'http://localhost:5173', protocol: 'http:' } };
try {
  await build({ entryPoints: ['src/lib/tutorApi.ts'], outfile: path.join(temp, 'tutor.mjs'), bundle: true, format: 'esm', platform: 'node' });
  await build({ entryPoints: ['src/lib/offlineTutor.ts'], outfile: path.join(temp, 'offline.mjs'), bundle: true, format: 'esm', platform: 'node' });
  await build({ entryPoints: ['src/lib/studyStats.ts'], outfile: path.join(temp, 'stats.mjs'), bundle: true, format: 'esm', platform: 'node' });
  const api = await import(pathToFileURL(path.join(temp, 'tutor.mjs')).href);
  const offline = await import(pathToFileURL(path.join(temp, 'offline.mjs')).href);
  const stats = await import(pathToFileURL(path.join(temp, 'stats.mjs')).href);
  const math = { subject: 'Mathematics AA HL', title: 'Geometric series', text: 'Find a common ratio.' };

  test('all hint steps and six effort settings change the actual tutor instructions', () => {
    const prompts = [1, 2, 3, 4, 5].map((level) => api.makeTutorInstructions(math, level, false, 2));
    for (const [index, mode] of ['ORIENT', 'IDENTIFY', 'PLAN', 'SET UP', 'ALMOST THERE'].entries()) assert.ok(prompts[index].includes(`Guidance: ${mode}:`));
    assert.equal(new Set(prompts).size, 5);
    const efforts = [0, 1, 2, 3, 4, 5].map((effort) => api.makeTutorInstructions(math, 3, false, effort));
    assert.equal(new Set(efforts).size, 6);
    assert.match(efforts[5], /LOCKED IN: The learner leads/);
    assert.ok(efforts.every((item) => item.includes('Never provide a final numeric answer')));
    const revealed = api.makeTutorInstructions(math, 5, true, 5);
    assert.ok(revealed.includes('REVEAL MODE'));
    assert.ok(!revealed.includes('Guidance: ALMOST THERE'));
    assert.notEqual(offline.offlineTutorPrompt('Geometric series', '', 1, 0), offline.offlineTutorPrompt('Geometric series', '', 5, 5));
  });

  test('image controls refuse unknown models and unverified endpoints', () => {
    for (const option of api.providerOptions) {
      if (option.id === 'compatible') continue;
      assert.equal(api.visionSupport({ provider: option.id, model: option.model, endpoint: option.endpoint }).supported, true, option.id);
      assert.equal(api.visionSupport({ provider: option.id, model: 'unknown-text-only', endpoint: option.endpoint }).supported, false, option.id);
      assert.equal(api.visionSupport({ provider: option.id, model: option.model, endpoint: 'https://example.org/v1/chat/completions' }).supported, false, option.id);
      assert.equal(api.visionSupport({ provider: option.id, model: option.model, endpoint: option.endpoint + '/wrong' }).supported, false, option.id);
    }
    const custom = { provider: 'compatible', model: 'someone/vision', endpoint: 'https://example.org/v1/chat/completions' };
    assert.equal(api.visionSupport(custom).supported, false);
    assert.equal(api.visionSupport(custom, true).supported, true);
    assert.equal(api.visionSupport({ ...custom, endpoint: 'https://example.org/v1/responses' }, true).supported, false);
  });

  test('formats the newest image for supported APIs and never resends old image bytes', () => {
    const image = { name: 'private.png', mimeType: 'image/png', dataUrl: 'data:image/png;base64,AAECAw==' };
    const history = [{ role: 'user', content: 'Read this diagram', image }, { role: 'assistant', content: 'What stands out?' }, { role: 'user', content: 'And next?' }];
    for (const provider of ['openai', 'openrouter', 'mistral', 'xai', 'anthropic', 'gemini', 'kimi', 'compatible']) {
      const formatted = api.formatTutorMessages([history[0]], provider);
      const json = JSON.stringify(formatted);
      assert.match(json, /AAECAw==/, provider);
      assert.ok(!JSON.stringify(api.formatTutorMessages(history, provider)).includes('AAECAw=='), provider);
      if (provider === 'gemini') assert.match(json, /inline_data/);
      else if (provider === 'anthropic') assert.match(json, /media_type/);
      else assert.match(json, /image_url/);
    }
    assert.throws(() => api.formatTutorMessages([{ role: 'user', content: 'No', image: { ...image, dataUrl: 'data:text/html;base64,AAECAw==' } }], 'openai'), /invalid or too large/);
    assert.throws(() => api.formatTutorMessages([{ role: 'assistant', content: 'No', image }], 'gemini'), /Only a learner/);
  });

  test('self-mark totals and the streak calendar use local intentional activity', () => {
    process.env.TZ = 'Europe/Berlin';
    const now = new Date('2026-09-27T10:00:00+02:00');
    const yesterday = '2026-09-26T19:00:00+02:00';
    const profile = { notes: { one: { studiedAt: yesterday } }, questions: { q1: { markedAt: yesterday, lastMarks: 3, bestMarks: 5, maximumMarks: 6 }, q2: { markedAt: now.toISOString(), lastMarks: 2, bestMarks: 2, maximumMarks: 3 } }, assessments: [], focusSessions: [], activity: [] };
    assert.deepEqual(stats.selfMarkSummary(profile), { questions: 2, latest: 5, best: 7, available: 9 });
    assert.equal(stats.studyStreak(profile, now), 2);
    assert.equal(stats.longestStudyStreak(profile), 2);
    assert.equal(stats.studyActivityByDay(profile).get('2026-09-26'), 2);
    assert.equal(stats.localDay('2026-09-26T22:30:00Z'), '2026-09-27');
    assert.equal(stats.studyStreak({ ...profile, notes: {}, questions: {} }, now), 0);
    const historyOnly = { ...profile, notes: {}, questions: {}, activity: [{ kind: 'question', label: 'Self-marked example', at: yesterday }] };
    assert.equal(stats.studyStreak(historyOnly, now), 1);
    assert.equal(stats.studyActivityByDay(historyOnly).get('2026-09-26'), 1);
  });
} finally { await rm(temp, { recursive: true, force: true }); }
