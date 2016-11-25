/* eslint-env node, mocha, browser */
/* global expect, $ */

import isArray from 'vanillajs-helpers/isArray';

describe('"isArray"', () => {
  it('Should return true for Array values', () => {
    expect(isArray([])).to.be.true;
    expect(isArray(Array(3))).to.be.true;
    expect(isArray(new Array(3))).to.be.true;
  });

  it('Should return false for non Array values', () => {
    expect(isArray(null)).to.be.false;
    expect(isArray({0:1, length:1})).to.be.false;
    expect(isArray('Array')).to.be.false;
    expect(isArray()).to.be.false;
  });
});
