import expect from './assets/chai';
import numberToHex from '../ts/numberToHex';

describe('"numberToHex"', () => {
  it('Should generate a hexadecimal from a number', () => {
    expect(numberToHex(250)).to.equal('fa');
  });
});