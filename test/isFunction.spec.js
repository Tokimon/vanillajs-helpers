/* eslint-env node, mocha */
/* eslint-disable no-new-wrappers */

import expect from './assets/chai';
import isFunction from '../isFunction';

describe('"isFunction"', () => {
  it('Should return true for Function values', () => {
    expect(isFunction(function() {})).to.be.true;
    expect(isFunction(new Function())).to.be.true;
  });

  it('Should return false for non Function values', () => {
    expect(isFunction(null)).to.be.false;
    expect(isFunction('Function')).to.be.false;
    expect(isFunction()).to.be.false;
  });
});
