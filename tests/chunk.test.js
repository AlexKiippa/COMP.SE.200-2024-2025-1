import chunk from '../src/chunk.js';

describe('chunk', () => {
  test('chunks an array into given size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test('returns empty array for empty input', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('returns full array as single chunk when size >= length', () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  test('handles size 1 as array of singletons', () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  test('returns empty array when size is 0 or negative', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([]);
    expect(chunk([1, 2, 3], -2)).toEqual([]);
  });
});
