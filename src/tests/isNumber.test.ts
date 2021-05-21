/* eslint-disable no-unused-expressions */

import expect from './assets/chai';
import isNumber from '../isNumber';

describe('"isNumber"', () => {
  it('Should return true for Numeric values', () => {
    expect(isNumber(9)).to.be.true;
    expect(isNumber(9.9)).to.be.true;
    expect(isNumber(Number('0'))).to.be.true;
    // eslint-disable-next-line no-new-wrappers
    expect(isNumber(new Number(9))).to.be.true;
  });

  it('Should return false for non Numeric values', () => {
    expect(isNumber(null)).to.be.false;
    expect(isNumber(undefined)).to.be.false;
    expect(isNumber(Infinity)).to.be.false;
    expect(isNumber(NaN)).to.be.false;
    expect(isNumber('')).to.be.false;
    // eslint-disable-next-line no-new-wrappers
    expect(isNumber(new String(''))).to.be.false;
    expect(isNumber({})).to.be.false;
  });
});
