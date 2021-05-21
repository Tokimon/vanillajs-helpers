import isNumber from '../isNumber';

describe('"isNumber"', () => {
  it('Should return true for Numeric values', () => {
    expect(isNumber(9)).toBe(true);
    expect(isNumber(9.9)).toBe(true);
    expect(isNumber(Number('0'))).toBe(true);
    // eslint-disable-next-line no-new-wrappers
    expect(isNumber(new Number(9))).toBe(true);
  });

  it('Should return false for non Numeric values', () => {
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(Infinity)).toBe(false);
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber('')).toBe(false);
    // eslint-disable-next-line no-new-wrappers
    expect(isNumber(new String(''))).toBe(false);
    expect(isNumber({})).toBe(false);
  });
});
