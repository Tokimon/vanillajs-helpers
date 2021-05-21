import leadingZero from '../leadingZero';

describe('"leadingZero"', () => {
  it('Should always return a string', () => {
    expect(leadingZero(123)).to.be.a('string');
  });

  it('Should add a zero to a value of just one character', () => {
    expect(leadingZero(1)).toBe('01');
    expect(leadingZero('1')).toBe('01');
    expect(leadingZero('|')).toBe('0|');
  });

  it('Should add a zeroes to a value until it is the desired length', () => {
    expect(leadingZero(1, 5)).toBe('00001');
    expect(leadingZero('123', 5)).toBe('00123');
  });

  it('Should return the value without zeroes if it is longer than the desired length', () => {
    expect(leadingZero(1, 1)).toBe('1');
    expect(leadingZero('123', 2)).toBe('123');
  });
});
