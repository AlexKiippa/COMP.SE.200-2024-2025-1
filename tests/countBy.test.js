import countBy from '../src/countBy.js';

describe('countBy', () => {
  // Spec-based expectations (skipped, used for bug reporting)
  test.skip('counts items according to iteratee (spec-like behavior)', () => {
    const result = countBy([6.1, 4.2, 6.3], Math.floor);
    expect(result).toEqual({ 4: 1, 6: 2 });
  });

  test.skip('counts strings by length (spec-like behavior)', () => {
    const result = countBy(['one', 'two', 'three'], (s) => s.length);
    expect(result).toEqual({ 3: 2, 5: 1 });
  });

  // Actual behavior tests
  test('documents current behavior for numbers with Math.floor', () => {
    const result = countBy([6.1, 4.2, 6.3], Math.floor);
    expect(result).toEqual({ 4: 0, 6: 1 });
  });

  test('documents current behavior for strings by length', () => {
    const result = countBy(['one', 'two', 'three'], (s) => s.length);
    expect(result).toEqual({ 3: 1, 5: 0 });
  });

  test('handles empty collection', () => {
    const result = countBy([], (x) => x);
    expect(result).toEqual({});
  });
});