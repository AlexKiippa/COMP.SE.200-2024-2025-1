import divide from '../src/divide.js';

describe('divide', () => {
  test('divides positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides negative numbers', () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test('division by zero returns Infinity', () => {
    expect(divide(10, 0)).toBe(Infinity);
  });

  test('coerces numeric strings to numbers before dividing', () => {
    expect(divide('10', '2')).toBe(5);
  });
});
