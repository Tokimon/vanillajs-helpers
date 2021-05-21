import numberToHex from '../numberToHex';

describe('"numberToHex"', () => {
  it('Should generate a hexadecimal from a number', () => {
    expect(numberToHex(250)).toBe('fa');
  });
});
