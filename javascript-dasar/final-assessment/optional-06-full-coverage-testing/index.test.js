import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// penjumlahan normal
test('Menjumlahkan dua bilangan positif', () => {
  assert.strictEqual(sum(3, 5), 8);
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(100, 200), 300);
});

// input bukan number
test('Mengembalikan 0 jika salah satu argumen bukan number', () => {
  assert.strictEqual(sum('a', 5), 0);
  assert.strictEqual(sum(5, 'b'), 0);
  assert.strictEqual(sum('a', 'b'), 0);
  assert.strictEqual(sum(null, 5), 0);
  assert.strictEqual(sum(undefined, 10), 0);
  assert.strictEqual(sum({}, []), 0);
});

// input bilangan negatif
test('Mengembalikan 0 jika salah satu argumen bernilai negatif', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -2), 0);
  assert.strictEqual(sum(-1, -1), 0);
});
