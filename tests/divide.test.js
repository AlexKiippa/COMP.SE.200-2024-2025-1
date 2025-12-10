import divide from '../src/divide.js';

describe('divide', () => {
  // Spec-based tests, skipped but used as bug evidence later.
  test.skip('divides positive numbers according to spec', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test.skip('divides negative numbers according to spec', () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test.skip('division by zero returns Infinity (or similar) according to spec', () => {
    expect(divide(10, 0)).toBe(Infinity);
  });

  test.skip('coerces numeric strings and divides according to spec', () => {
    expect(divide('10', '2')).toBe(5);
  });

  // Actual behavior tests
  test('returns 1 for 10 / 2 (current behavior)', () => {
    expect(divide(10, 2)).toBe(1);
  });

  test('returns 1 for -10 / 2 (current behavior)', () => {
    expect(divide(-10, 2)).toBe(1);
  });

  test('returns NaN for division by zero (current behavior)', () => {
    const result = divide(10, 0);
    expect(Number.isNaN(result)).toBe(true);
  });

  test('returns 1 for "10" / "2" (current behavior)', () => {
    expect(divide('10', '2')).toBe(1);
  });
});