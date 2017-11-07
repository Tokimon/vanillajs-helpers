/* eslint-env node, mocha */

import expect from './assets/chai';
import numberToHex from '../ts/numberToHex';

describe('"numberToHex"', () => {
  it('Should return 00 on falsy values', () => {
    expect(numberToHex(null)).to.equal('00');
    expect(numberToHex(undefined)).to.equal('00');
  });

  it('Should generate a hexadecimal from a number', () => {
    expect(numberToHex(250)).to.equal('fa');
  });
});
