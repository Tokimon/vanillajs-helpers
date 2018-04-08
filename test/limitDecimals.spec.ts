import expect from './assets/chai';
import limitDecimals from '../limitDecimals';

describe('"limitDecimals"', () => {
  it('Should format the decimals to the default number of digits', () => {
    expect(limitDecimals(0.234)).to.equal('0.23');
    expect(limitDecimals(1)).to.equal('1.00');
  });

  it('(n) should format the decimals to a specific number of digits', () => {
    expect(limitDecimals(0.234, 1)).to.equal('0.2');
    expect(limitDecimals(0.234, 5)).to.equal('0.23400');
    expect(limitDecimals(0.5, 0)).to.equal('1');
    expect(limitDecimals(0.9999, 3)).to.equal('1.000');
  });

  it('(>n) should format the decimals to a minimum number of digits', () => {
    expect(limitDecimals(0.234, '>1')).to.equal('0.234');
    expect(limitDecimals(0.234, '>4')).to.equal('0.2340');
    expect(limitDecimals(1, '>4')).to.equal('1.0000');
  });

  it('(<n) should format the decimals to a maximum number of digits', () => {
    expect(limitDecimals(0.234, '<2')).to.equal('0.23');
    expect(limitDecimals(0.234, '<5')).to.equal('0.234');
    expect(limitDecimals(0.9999, '<3')).to.equal('1');
  });

  it('Should be able to limit decimals of strings', () => {
    expect(limitDecimals('9.678', '<2')).to.equal('9.68');
    expect(limitDecimals('9.123', null)).to.equal('9');
  });

  it('Should cut decimals if decimal indication is not defined correctly', () => {
    expect(limitDecimals(9.678, 'none')).to.equal('10');
    expect(limitDecimals(9.123, null)).to.equal('9');
  });

  it('Should format 0 when a non number is specified', () => {
    expect(limitDecimals(null)).to.equal('0.00');
    expect(limitDecimals('Not A Number')).to.equal('0.00');
  });
});
