/* eslint-disable no-unused-expressions */

import expect from './assets/chai';
import isNumeric from '../isNumeric';

describe('"isNumeric"', () => {
  describe('Is `true` for', () => {
    it('Integers', () => {
      expect(isNumeric(9)).to.be.true;
    });

    it('Floats', () => {
      expect(isNumeric(9.5)).to.be.true;
    });

    it('Integers as string', () => {
      expect(isNumeric('9')).to.be.true;
    });

    it('Floats as string', () => {
      expect(isNumeric('9.5')).to.be.true;
    });

    it('New Number object', () => {
      // eslint-disable-next-line no-new-wrappers
      expect(isNumeric(new Number(9))).to.be.true;
    });
  });

  describe('Is `false` for', () => {
    it('null', () => {
      expect(isNumeric(null)).to.be.false;
    });

    it('undefined', () => {
      expect(isNumeric(undefined)).to.be.false;
    });

    it('Infinity', () => {
      expect(isNumeric(Infinity)).to.be.false;
    });

    it('NaN', () => {
      expect(isNumeric(NaN)).to.be.false;
    });

    it('Object (`{}`)', () => {
      expect(isNumeric({})).to.be.false;
    });

    it('Empty Array', () => {
      expect(isNumeric([])).to.be.false;
    });

    it('Empty string', () => {
      expect(isNumeric('')).to.be.false;
    });
  });
});
