/* eslint-env node, mocha */

type NeutralObject = { [key: string]: any };
declare var global: NeutralObject

import * as sinon from 'sinon';
import expect from './assets/chai';
import isNumber from '../ts/isNumber';

describe('"isNumber"', () => {
  it('Should return true for Numeric values', () => {
    expect(isNumber(9)).to.be.true;
    expect(isNumber(9.9)).to.be.true;
    expect(isNumber(Number('0'))).to.be.true;
  });

  it('Should fallback to traditional "isFinite" if "Number.isFinite" is not supported', () => {
    const oldNumberIsFinite = Number.isFinite;
    Number.isFinite = undefined;
    const oldIsFinite = isFinite;
    global.isFinite = sinon.spy();

    expect(isNumber(9)).to.be.true;
    expect(isFinite).to.have.been.called;

    global.isFinite = oldIsFinite;
    Number.isFinite = oldNumberIsFinite;
  });

  it('Should return false for non Numeric values', () => {
    expect(isNumber(null)).to.be.false;
    expect(isNumber(Infinity)).to.be.false;
    expect(isNumber(NaN)).to.be.false;
    expect(isNumber('')).to.be.false;
    expect(isNumber(String())).to.be.false;
    expect(isNumber(new Number())).to.be.false;
    expect(isNumber({})).to.be.false;
    expect(isNumber(undefined)).to.be.false;
  });
});
