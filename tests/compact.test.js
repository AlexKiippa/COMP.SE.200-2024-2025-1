import compact from '../src/compact.js';

describe('compact', () => {
  test('removes falsy values', () => {
    const input = [0, 1, false, 2, '', 3, null, undefined, NaN];
    const result = compact(input);
    expect(result).toEqual([1, 2, 3]);
  });

  test('returns empty array when all values are falsy', () => {
    const input = [0, false, '', null, undefined, NaN];
    expect(compact(input)).toEqual([]);
  });

  test('returns identical array when no values are falsy', () => {
    const input = [1, 2, 3];
    expect(compact(input)).toEqual([1, 2, 3]);
  });
});