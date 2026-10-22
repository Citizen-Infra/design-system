import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import test from 'node:test';
import { brandCopy } from '../brand/content.js';

const root = new URL('../', import.meta.url);
const read = path => readFileSync(new URL(path, root));
const text = path => read(path).toString('utf8');
const pkg = JSON.parse(text('package.json'));
const provenance = JSON.parse(text('brand/provenance.json'));

test('registry publication is guarded and the package has no install hooks or runtime dependencies', () => {
  assert.equal(pkg.private, true);
  assert.equal(pkg.license, 'MIT');
  assert.deepEqual(Object.keys(pkg.scripts), ['test']);
  assert.equal(pkg.dependencies, undefined);
  assert.equal(pkg.devDependencies, undefined);
  for (const [key, path] of Object.entries(pkg.exports)) {
    if (!key.includes('*')) assert.ok(existsSync(new URL(path, root)), `${path} must exist`);
  }
  assert.ok(!pkg.files.includes('test/'));
  assert.ok(!pkg.files.includes('scripts/'));
});

test('font sources are local, correctly packaged and retain their separate licence', () => {
  const css = text('fonts.css');
  assert.doesNotMatch(css, /https?:|@import/);
  const paths = [...css.matchAll(/url\('([^']+)'\)/g)].map(match => match[1]);
  assert.equal(paths.length, 2);
  for (const path of paths) assert.equal(read(path).toString('ascii', 0, 4), 'wOF2');
  assert.match(text('fonts/OFL-Public-Sans.txt'), /SIL OPEN FONT LICENSE/i);
  assert.match(text('THIRD_PARTY.md'), /not relicensed under MIT/i);
  assert.match(text('LICENSE'), /MIT License/);
});

test('packaged font inputs and the approved headline match provenance', () => {
  assert.equal(createHash('sha256').update(read(provenance.font)).digest('hex'), provenance.fontSHA256);
  assert.equal(brandCopy.headline, provenance.headline);
  assert.ok(existsSync(new URL(provenance.renderer, root)));
  assert.ok(existsSync(new URL(provenance.paletteSource, root)));
});

test('brand PNGs retain declared dimensions and original procedural provenance', () => {
  for (const image of provenance.images) {
    const data = read(image.file);
    assert.deepEqual([...data.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
    assert.equal(data.readUInt32BE(16), image.width);
    assert.equal(data.readUInt32BE(20), image.height);
    assert.ok(data.includes(Buffer.from('Original procedural')), `${image.file}: authored source must remain embedded`);
  }
});

test('the asset authoring script resolves packaged inputs rather than another checkout', () => {
  const source = text('scripts/render-brand-assets.mjs');
  assert.match(source, /from '\.\.\/brand\/content\.js'/);
  assert.match(source, /resolve\(root, 'tokens\.css'\)/);
  assert.match(source, /resolve\(root, 'fonts\/public-sans-latin-normal\.woff2'\)/);
  assert.doesNotMatch(source, /\/Users\/|cibc-website\/|\.\.\/src\/data/);
});
