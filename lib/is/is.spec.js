/* eslint-env node, mocha */

'use strict';

import is from './is';

describe('"is" module', function() {
  describe('is.isString', function() {
    it('should verify that a string is a string object', function() {
      const str = 'string';

      expect(is.isString(str)).to.be.true;
      expect(is.isString(String(str))).to.be.true;
      expect(is.isString(new String(str))).to.be.true;
      expect(is.isString(`${str}`)).to.be.true;

      expect(is.isString(123)).to.be.false;
      expect(is.isString({})).to.be.false;
      expect(is.isString(null)).to.be.false;
      expect(is.isString(undefined)).to.be.false;
    });
  });

  describe('is.isArray', function() {
    it('should verify that an array is an array object', function() {
      expect(is.isArray([])).to.be.true;
      expect(is.isArray(Array())).to.be.true;
      expect(is.isArray(new Array())).to.be.true;
      expect(is.isArray('a b c'.split(' '))).to.be.true;

      expect(is.isArray({})).to.be.false;
      expect(is.isArray('a,b,c')).to.be.false;
      expect(is.isArray(null)).to.be.false;
      expect(is.isArray(undefined)).to.be.false;
    });
  });

  describe('is.isFunc', function() {
    const varfunc = function() {};

    expect(is.isFunc(function() {})).to.be.true;
    expect(is.isFunc(() => {})).to.be.true;
    expect(is.isFunc(varfunc)).to.be.true;
    expect(is.isFunc(new Function())).to.be.true;

    expect(is.isFunc({})).to.be.false;
    expect(is.isFunc(null)).to.be.false;
    expect(is.isFunc(undefined)).to.be.false;
  });
});