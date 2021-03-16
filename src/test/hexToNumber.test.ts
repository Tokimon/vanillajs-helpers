import expect from './assets/chai';
import hexToNumber from '../hexToNumber';

describe('"hexToNumber"', () => {
  it('Should return 0 on empty strings', () => {
    expect(hexToNumber('')).to.equal(0);
  });

  it('Should generate a number from hexadecimal', () => {
    expect(hexToNumber('fa')).to.equal(250);
  });
});
