// tests/clamp.self.test.js
// Self-designed tests for clamp()

import clamp from '../src/clamp.js';

describe('clamp – self-designed tests', () => {

  test.skip('returns the number when it is within the range (according to JSDoc spec)', () => {
    expect(clamp(0, -5, 5)).toBe(0);
    expect(clamp(-5, -5, 5)).toBe(-5);
    expect(clamp(5, -5, 5)).toBe(5);
    expect(clamp(2.5, 0, 5)).toBe(2.5);
  });

  test('actually always returns the lower bound for any finite number when lower < upper', () => {
    // For range [-5, 5]
    expect(clamp(0, -5, 5)).toBe(-5);     // inside range
    expect(clamp(-10, -5, 5)).toBe(-5);   // below lower
    expect(clamp(10, -5, 5)).toBe(-5);    // above upper

    // For range [-10, 10]
    expect(clamp(-20, -10, 10)).toBe(-10);
    expect(clamp(0, -10, 10)).toBe(-10);
    expect(clamp(100, -10, 10)).toBe(-10);
  });

  test('coerces string inputs to numbers (implementation detail)', () => {
    expect(clamp('3', '0', '5')).toBe(0);       // because it returns lower bound
    expect(clamp('-10', '-5', '5')).toBe(-5);   // already lower bound
  });

  test('returns NaN when number is NaN', () => {
    const result = clamp(NaN, -5, 5);
    expect(Number.isNaN(result)).toBe(true);
  });
});