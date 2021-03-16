import expect from './assets/chai';
import formatNumber from '../formatNumber';

describe('"formatNumber"', () => {
  it('Should format number with default settings', () => {
    expect(formatNumber(1100.234)).to.equal('1.100,23');
  });

  it('Should format number with a specific thousand seperator', () => {
    expect(formatNumber(1100.234, { thousand: '|' })).to.equal('1|100,23');
  });

  it('Should format number with a specific decimal seperator', () => {
    expect(formatNumber(1100.234, { thousand: '.', decimal: '|' })).to.equal('1.100|23');
  });

  it('Should format the decimals', () => {
    expect(formatNumber(1100.234, { decimals: 1 })).to.equal('1.100,2');
    expect(formatNumber(1100.234, { decimals: 5 })).to.equal('1.100,23400');
    expect(formatNumber(1100.234, { decimals: '>1' })).to.equal('1.100,234');
    expect(formatNumber(1100.234, { decimals: '>5' })).to.equal('1.100,23400');
    expect(formatNumber(1100.234, { decimals: '<2' })).to.equal('1.100,23');
    expect(formatNumber(1100.234, { decimals: '<5' })).to.equal('1.100,234');
  });
});
