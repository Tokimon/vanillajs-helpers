/* eslint-env node, mocha, browser */
/* global expect, $ */

import isObject from 'vanillajs-helpers/isObject';

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
  });
});
