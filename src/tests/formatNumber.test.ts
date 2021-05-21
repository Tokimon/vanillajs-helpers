import expect from './assets/chai';
import formatNumber from '../formatNumber';

describe('"formatNumber"', () => {
  it('Should format number with default settings', () => {
    expect(formatNumber(1100.234)).toBe('1.100,23');
  });

  it('Should format number with a specific thousand seperator', () => {
    expect(formatNumber(1100.234, { thousand: '|' })).toBe('1|100,23');
  });

  it('Should format number with a specific decimal seperator', () => {
    expect(formatNumber(1100.234, { thousand: '.', decimal: '|' })).toBe('1.100|23');
  });

  it('Should format the decimals', () => {
    expect(formatNumber(1100.234, { decimals: 1 })).toBe('1.100,2');
    expect(formatNumber(1100.234, { decimals: 5 })).toBe('1.100,23400');
    expect(formatNumber(1100.234, { decimals: '>1' })).toBe('1.100,234');
    expect(formatNumber(1100.234, { decimals: '>5' })).toBe('1.100,23400');
    expect(formatNumber(1100.234, { decimals: '<2' })).toBe('1.100,23');
    expect(formatNumber(1100.234, { decimals: '<5' })).toBe('1.100,234');
  });
});
