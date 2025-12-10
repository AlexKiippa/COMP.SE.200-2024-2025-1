// tests/get.self.test.js
// Self-designed tests for get()
// Spec from JSDoc: gets value at path of object, or defaultValue if result is undefined.

import get from '../src/get.js';

describe('get – self-designed tests', () => {
  test('gets a shallow property', () => {
    const obj = { a: 1, b: 2 };
    expect(get(obj, 'a')).toBe(1);
    expect(get(obj, 'b')).toBe(2);
  });

  test('gets a nested property with dot + bracket notation', () => {
    const obj = { a: [{ b: { c: 3 } }] };
    expect(get(obj, 'a[0].b.c')).toBe(3);
  });

  test('gets a nested property with path array', () => {
    const obj = { a: [{ b: { c: 3 } }] };
    expect(get(obj, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('returns undefined for missing path without defaultValue', () => {
    const obj = { a: { b: 2 } };
    expect(get(obj, 'a.b.c')).toBeUndefined();
  });

  test('returns defaultValue when resolved value is undefined', () => {
    const obj = { a: { b: undefined } };
    expect(get(obj, 'a.b', 'default')).toBe('default');
  });

  test('returns defaultValue when path is missing', () => {
    const obj = { a: { b: 2 } };
    expect(get(obj, 'a.x.y', 'fallback')).toBe('fallback');
  });

  test('handles null or undefined object', () => {
    expect(get(null, 'a.b', 'default')).toBe('default');
    expect(get(undefined, 'a.b', 'default')).toBe('default');
    expect(get(null, 'a.b')).toBeUndefined();
  });

  test('can read from arrays using numeric index in path array', () => {
    const arr = [10, 20, 30];
    expect(get(arr, [1])).toBe(20);
  });
});