/* eslint-env node, mocha */

import expect from './assets/chai';
import isNumber from '../isNumber';

describe('"isNumber"', () => {
  it('Should return true for Numeric values', () => {
    expect(isNumber(9)).to.be.true;
    expect(isNumber(9.9)).to.be.true;
    expect(isNumber(Number('0'))).to.be.true;
  });

  it('Should fallback to traditional "isFinite" if "Number.isFinite" is not supported', () => {
    const oldNumberIsFinite = Number.isFinite;
    Number.isFinite = undefined;

    expect(isNumber(9)).to.be.true;
    expect(isNumber(Infinity)).to.be.false;
    expect(isNumber(NaN)).to.be.false;
    expect(isNumber('String')).to.be.false;

    Number.isFinite = oldNumberIsFinite;
  });

  it('Should return false for non Numeric values', () => {
    expect(isNumber(null)).to.be.false;
    expect(isNumber(undefined)).to.be.false;
    expect(isNumber(Infinity)).to.be.false;
    expect(isNumber(NaN)).to.be.false;
    expect(isNumber('')).to.be.false;
    expect(isNumber(new String(''))).to.be.false;
    expect(isNumber(new Number(9))).to.be.false;
    expect(isNumber({})).to.be.false;
  });
});
