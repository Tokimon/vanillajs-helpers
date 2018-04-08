/* tslint:disable:no-new-wrappers, no-unused-expression */

import expect from './assets/chai';
import isString from '../isString';

describe('"isString"', () => {
  it('Should return true for String values', () => {
    expect(isString('')).to.be.true;
    expect(isString(new String())).to.be.true;
    expect(isString(String(''))).to.be.true;
  });

  it('Should return false for non String values', () => {
    expect(isString(null)).to.be.false;
    expect(isString(9)).to.be.false;
    expect(isString(undefined)).to.be.false;
    expect(isString({})).to.be.false;
    expect(isString([])).to.be.false;
  });
});
