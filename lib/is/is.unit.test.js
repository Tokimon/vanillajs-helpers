/* eslint-env node, mocha */

'use strict';

import is from './is';

describe('"is" module', function() {
  describe('is.string', function() {
    it('should verify that a string is a string object', function() {
      const str = 'string';

      expect(is.string(str)).to.be.true;
      expect(is.string(String(str))).to.be.true;
      expect(is.string(new String(str))).to.be.true;
      expect(is.string(`${str}`)).to.be.true;

      expect(is.string(123)).to.be.false;
      expect(is.string({})).to.be.false;
      expect(is.string(null)).to.be.false;
      expect(is.string(undefined)).to.be.false;
    });
  });

  describe('is.array', function() {
    it('should verify that an array is an array object', function() {
      expect(is.array([])).to.be.true;
      expect(is.array(Array())).to.be.true;
      expect(is.array(new Array())).to.be.true;
      expect(is.array('a b c'.split(' '))).to.be.true;

      expect(is.array({})).to.be.false;
      expect(is.array('a,b,c')).to.be.false;
      expect(is.array(null)).to.be.false;
      expect(is.array(undefined)).to.be.false;
    });
  });

  describe('is.func', function() {
    const varfunc = function() {};

    expect(is.func(function() {})).to.be.true;
    expect(is.func(() => {})).to.be.true;
    expect(is.func(varfunc)).to.be.true;

    expect(is.func({})).to.be.false;
    expect(is.func(null)).to.be.false;
    expect(is.func(undefined)).to.be.false;
  });
});