import expect from './assets/chai';
import hexToNumber from '../hexToNumber';

describe('"hexToNumber"', () => {
  it('Should return 0 on empty strings', () => {
    expect(hexToNumber('')).toBe(0);
  });

  it('Should generate a number from hexadecimal', () => {
    expect(hexToNumber('fa')).toBe(250);
  });
});
