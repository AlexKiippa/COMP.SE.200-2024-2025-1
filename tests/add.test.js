import add from '../src/add.js';

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('returns the provided operand when the other operand is missing', () => {
    expect(add(5)).toBe(5);
    expect(add(undefined, 5)).toBe(5);
  });

  test('concatenates when either operand is a string', () => {
    expect(add('2', '3')).toBe('23');
    expect(add('hello ', 'world')).toBe('hello world');
  });
});
