import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
  test('converts numeric string to number', () => {
    expect(toNumber('42')).toBe(42);
  });

  test('returns same number when input is number', () => {
    expect(toNumber(3.14)).toBeCloseTo(3.14);
  });

  test('handles leading and trailing whitespace', () => {
    expect(toNumber('  10  ')).toBe(10);
  });

  test('returns NaN for clearly non-numeric string', () => {
    const result = toNumber('hello');
    expect(Number.isNaN(result)).toBe(true);
  });

  test('handles null and undefined', () => {
    expect(toNumber(null)).toBe(0);
    expect(Number.isNaN(toNumber(undefined))).toBe(true);
  });
});
