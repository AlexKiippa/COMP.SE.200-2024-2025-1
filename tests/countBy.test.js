import countBy from '../src/countBy.js';

describe('countBy', () => {
  test('counts items according to iteratee', () => {
    const result = countBy([6.1, 4.2, 6.3], Math.floor);
    // Example Lodash output: { '4': 1, '6': 2 }
    expect(result).toEqual({ 4: 1, 6: 2 });
  });

  test('counts strings by length', () => {
    const result = countBy(['one', 'two', 'three'], (s) => s.length);
    expect(result).toEqual({ 3: 2, 5: 1 });
  });

  test('handles empty collection', () => {
    const result = countBy([], (x) => x);
    expect(result).toEqual({});
  });
});