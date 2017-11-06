/* eslint-env node, mocha */

import expect from './assets/chai';
import formatNumber from '../formatNumber';

describe('"formatNumber"', () => {
  it('Should format number with a specific thousand seperator', () => {
    expect(formatNumber(1100.234, 2, '|')).to.equal('1|100,23');
  });

  it('Should format number with a specific decimal seperator', () => {
    expect(formatNumber(1100.234, 2, '.', '|')).to.equal('1.100|23');
  });

  it('Should format the decimals', () => {
    expect(formatNumber(1100.234, 1)).to.equal('1.100,2');
    expect(formatNumber(1100.234, 5)).to.equal('1.100,23400');
    expect(formatNumber(1100.234, '>1')).to.equal('1.100,234');
    expect(formatNumber(1100.234, '>4')).to.equal('1.100,2340');
    expect(formatNumber(1100.234, '<2')).to.equal('1.100,23');
    expect(formatNumber(1100.234, '<5')).to.equal('1.100,234');
  });

  it('Should should format 0 when a non number is specified', () => {
    expect(formatNumber(null)).to.equal('0,00');
  });
});
