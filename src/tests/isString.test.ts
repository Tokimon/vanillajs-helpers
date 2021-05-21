import isString from '../isString';

describe('"isString"', () => {
  it('Should return true for String values', () => {
    expect(isString('')).toBe(true);
    // eslint-disable-next-line no-new-wrappers
    expect(isString(new String())).toBe(true);
    expect(isString(String(''))).toBe(true);
  });

  it('Should return false for non String values', () => {
    expect(isString(null)).toBe(false);
    expect(isString(9)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
  });
});
