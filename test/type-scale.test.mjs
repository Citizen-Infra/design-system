import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const css = readFileSync(new URL('../tokens.css', import.meta.url), 'utf8');
const root = css.match(/:root\s*\{([^}]+)\}/)[1];
const values = Object.fromEntries([...root.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map(([, name, value]) => [name, value.trim()]));
const roles = ['caption', 'ui', 'body', 'lead', 'title', 'heading', 'page', 'display', 'wordmark'];

function range(value) {
  const clamp = /^clamp\(([\d.]+)rem,.*?,\s*([\d.]+)rem\)$/.exec(value);
  assert.ok(clamp, `Expected explicit rem-based range: ${value}`);
  return { min: Number(clamp[1]) * 16, max: Number(clamp[2]) * 16 };
}

test('all text roles retain at least 20px-equivalent floors without a fixed root font size', () => {
  for (const role of roles) assert.ok(range(values[`--cibc-text-${role}`]).min >= 20, role);
  assert.ok(range(values['--cibc-text-body']).min >= 22);
  assert.doesNotMatch(root, /(?:^|[;\n])\s*font-size\s*:/);
});

test('the selected composition has 48–88px display and 20–22px supporting type provisions', () => {
  assert.deepEqual(range(values['--cibc-text-display']), { min: 48, max: 88 });
  for (const role of ['caption', 'ui']) assert.deepEqual(range(values[`--cibc-text-${role}`]), { min: 20, max: 22 });
  assert.deepEqual(range(values['--cibc-text-body']), { min: 22, max: 24 });
  assert.deepEqual(range(values['--cibc-text-lead']), { min: 26, max: 30 });
});

test('controls grow with the larger labels rather than retaining compact legacy defaults', () => {
  assert.equal(values['--cibc-control-height'], '3.5rem');
  assert.equal(values['--cibc-control-touch'], '3.75rem');
  assert.equal(values['--cibc-control-compact'], '3rem');
});
