import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sum } from './index.js';

test('Menjumlahkan dua angka positif', () => {
  assert.strictEqual(sum(1, 2), 3);
});

test('Menjumlahkan angka positif dan negatif', () => {
  assert.strictEqual(sum(10, -7), 3);
});

test('Menjumlahkan dua angka negatif', () => {
  assert.strictEqual(sum(-3, -7), -10);
});

test('Menjumlahkan dengan angka nol', () => {
  assert.strictEqual(sum(0, 3), 3);
});
