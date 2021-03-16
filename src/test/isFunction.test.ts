/* eslint-disable no-unused-expressions */

import expect from './assets/chai';
import isFunction from '../isFunction';

describe('"isFunction"', () => {
  it('Should return true for Function values', () => {
    expect(isFunction(function() { void 0; })).to.be.true;
    expect(isFunction(() => { void 0; })).to.be.true;
    // eslint-disable-next-line no-new-func
    expect(isFunction(new Function())).to.be.true;
  });

  it('Should return false for non Function values', () => {
    expect(isFunction(null)).to.be.false;
    expect(isFunction('Function')).to.be.false;
    expect(isFunction(undefined)).to.be.false;
  });
});
