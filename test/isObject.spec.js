/* eslint-env node, mocha */
/* eslint-disable no-new-wrappers */

import expect from './assets/chai';
import isObject from '../isObject';

describe('"isObject"', () => {
  it('Should return true for Function values', () => {
    expect(isObject({})).to.be.true;
    expect(isObject(new Object())).to.be.true;
    expect(isObject(Object.create({}))).to.be.true;
  });

  it('Should return false for non Function values', () => {
    expect(isObject(null)).to.be.false;
    expect(isObject('Object')).to.be.false;
    expect(isObject()).to.be.false;
    expect(isObject([])).to.be.false;
  });
});
