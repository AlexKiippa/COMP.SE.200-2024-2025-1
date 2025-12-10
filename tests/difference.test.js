import difference from '../src/difference.js';

describe('difference', () => {
  test('returns items from first array not present in second', () => {
    expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
  });

  test('returns full array when there is no overlap', () => {
    expect(difference([1, 2], [3, 4])).toEqual([1, 2]);
  });

  test('returns empty array when all elements overlap', () => {
    expect(difference([1, 2], [2, 1])).toEqual([]);
  });

  test('handles empty second array', () => {
    expect(difference([1, 2], [])).toEqual([1, 2]);
  });

  test('handles empty first array', () => {
    expect(difference([], [1, 2])).toEqual([]);
  });
});