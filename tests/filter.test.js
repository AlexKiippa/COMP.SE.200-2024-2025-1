import filter from '../src/filter.js';

describe('filter', () => {
  test('filters numbers based on predicate', () => {
    const result = filter([1, 2, 3, 4, 5], (n) => n % 2 === 0);
    expect(result).toEqual([2, 4]);
  });

  test('returns empty array when nothing matches', () => {
    const result = filter([1, 3, 5], (n) => n % 2 === 0);
    expect(result).toEqual([]);
  });

  test('handles empty array', () => {
    const result = filter([], () => true);
    expect(result).toEqual([]);
  });

  test('throws when predicate is missing', () => {
    expect(() => filter([1, 2, 3])).toThrow(TypeError);
  });
});
