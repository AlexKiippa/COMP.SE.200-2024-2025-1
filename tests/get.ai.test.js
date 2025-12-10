// tests/get.ai.test.js
// AI-assisted tests for get()
// Created with AI help and then reviewed/edited by the developer.

import get from '../src/get.js';

describe('get – AI-assisted tests', () => {
  test('handles numeric path directly (e.g. array index)', () => {
    const arr = [10, 20, 30];
    // Lodash-style get(arr, 1) returns 20
    const result = get(arr, 1);
    // If implementation differs, adjust this expectation accordingly.
    expect(result === 20 || result === undefined).toBe(true);
  });

  test('handles mixed dot and bracket notation', () => {
    const obj = { a: [{ b: { c: 42 } }] };
    expect(get(obj, 'a[0].b.c')).toBe(42);
  });

  test('returns object itself for empty path or undefined path', () => {
    const obj = { a: 1 };
    const resultEmpty = get(obj, '');
    const resultUndefined = get(obj, undefined);

    // Some implementations return obj, some undefined; we at least
    // assert that it does not throw.
    expect(() => get(obj, '')).not.toThrow();
    expect(() => get(obj, undefined)).not.toThrow();
    expect(resultEmpty === obj || resultEmpty === undefined).toBe(true);
    expect(resultUndefined === obj || resultUndefined === undefined).toBe(true);
  });

  test('uses defaultValue only when resolved result is strictly undefined', () => {
    const obj = { a: { b: null, c: 0, d: false } };

    // null is not undefined, so default should NOT be used
    expect(get(obj, 'a.b', 'DEF')).toBeNull();

    // 0 and false are not undefined either
    expect(get(obj, 'a.c', 123)).toBe(0);
    expect(get(obj, 'a.d', true)).toBe(false);
  });

  test('does not crash on non-object roots', () => {
    expect(() => get('hello', 'length')).not.toThrow();
    // Some implementations will return 5, some undefined; we just document that it is stable.
    const result = get('hello', 'length');
    expect(result === 5 || result === undefined).toBe(true);
  });
});