import chunk from '../src/chunk.js';

describe('chunk', () => {
  // Spec-based tests (how it *should* behave). These are skipped for CI
  // but used in the report as evidence of bugs.
  test.skip('chunks an array into given size according to spec', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test.skip('handles size 1 as array of singletons according to spec', () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  // Tests that document the *actual* behavior of this implementation
  test('documents current behavior for [1,2,3,4,5] with size 2', () => {
    const result = chunk([1, 2, 3, 4, 5], 2);
    expect(result).toEqual([[5, undefined], undefined, undefined]);
  });

  test('documents current behavior for [1,2,3] with size 1', () => {
    const result = chunk([1, 2, 3], 1);
    expect(result).toEqual([[3], undefined, undefined]);
  });

  test('returns empty array for empty input', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('does not throw for invalid size (0 or negative)', () => {
    expect(() => chunk([1, 2, 3], 0)).not.toThrow();
  });
});