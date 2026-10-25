import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';

const temp = await mkdtemp(path.join(tmpdir(), 'sarang-sound-test-'));
try {
  const output = path.join(temp, 'audio.mjs');
  await build({ entryPoints: ['src/lib/synthAmbient.ts'], outfile: output, bundle: true, platform: 'node', format: 'esm' });
  const { makeAmbientLayer } = await import(pathToFileURL(output).href);
  const sounds = ['Rainfall', 'Distant thunder', 'Shore waves', 'Wind', 'Hearth', 'Birdsong', 'Crickets', 'Café', 'Soft bells', 'White noise'];
  for (const sound of sounds) {
    let data;
    const destination = { connect: () => destination, disconnect: () => {} };
    const context = {
      sampleRate: 8000, currentTime: 0,
      createBuffer: (_channels, size) => { data = new Float32Array(size); return { getChannelData: () => data }; },
      createBufferSource: () => ({ buffer: null, loop: false, connect: () => destination, start: () => {}, stop: () => {}, disconnect: () => {} }),
      createGain: () => ({ gain: { value: 0, setValueAtTime: () => {} }, connect: () => destination, disconnect: () => {} }),
      createBiquadFilter: () => ({ type: '', frequency: { value: 0 }, connect: () => destination, disconnect: () => {} }),
    };
    const layer = makeAmbientLayer(context, sound, 20260926);
    assert.equal(data.length, 8 * 8000, `${sound} should produce an 8-second loop`);
    assert(data[0] === 0, `${sound} should start silently`);
    assert(data.at(-1) === 0, `${sound} should end silently`);
    assert(data.every(Number.isFinite), `${sound} must contain finite samples`);
    const peak = data.reduce((max, value) => Math.max(max, Math.abs(value)), 0);
    assert(peak > 0 && peak <= .721, `${sound} should remain within a quiet normalized peak, got ${peak}`);
    layer.stop();
  }
  console.log(`Verified ${sounds.length} original procedural layers: finite samples, silent loop boundaries, bounded peaks.`);
} finally { await rm(temp, { recursive: true, force: true }); }
