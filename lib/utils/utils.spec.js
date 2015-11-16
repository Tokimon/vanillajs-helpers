'use strict';

import * as utils from './utils';

describe('"UTILS" module', function() {
  describe('utils.randomId', function() {
    it('should generate a random id of designated length', function() {
      expect(utils.randomId().length).to.be.above(0);
      expect(utils.randomId(5).length).to.equal(5);
      expect(utils.randomId()).to.not.equal(utils.randomId());
    });
  });

  describe('utils.limitDecimals', function() {
    it('should limit decimals to a specific number of decimals', function() {
      expect(utils.limitDecimals(0, 2)).to.equal('0.00');
      expect(utils.limitDecimals(1234.567, 2)).to.equal('1234.57');
      expect(utils.limitDecimals(1234.5, 2)).to.equal('1234.50');
      expect(utils.limitDecimals(1234.5111, 3)).to.equal('1234.511');
      expect(utils.limitDecimals(1234.5111, 0)).to.equal('1235');
    });

    it('should limit decimals to a minimum number of decimals', function() {
      expect(utils.limitDecimals(0, '>2')).to.equal('0.00');
      expect(utils.limitDecimals(1234.567, '>2')).to.equal('1234.567');
      expect(utils.limitDecimals(1234.5, '>2')).to.equal('1234.50');
      expect(utils.limitDecimals(1234.5111, '>3')).to.equal('1234.5111');
      expect(utils.limitDecimals(1234.5111, '>0')).to.equal('1234.5111');
    });

    it('should limit decimals to a maximum number of decimals', function() {
      expect(utils.limitDecimals(0, '<2')).to.equal('0');
      expect(utils.limitDecimals(1234.567, '<2')).to.equal('1234.57');
      expect(utils.limitDecimals(1234.5, '<2')).to.equal('1234.5');
      expect(utils.limitDecimals(1234.5111, '<3')).to.equal('1234.511');
      expect(utils.limitDecimals(1234.5111, '<0')).to.equal('1235');
    });
  });

  describe('utils.formatNumber', function() {
    it('should format a finite number', function() {
      expect(utils.formatNumber(0)).to.equal('0,00');
      expect(utils.formatNumber(1234567)).to.equal('1.234.567,00');
    });

    it('should format a floating number', function() {
      expect(utils.formatNumber(1234.567890)).to.equal('1.234,57');
      expect(utils.formatNumber(0.567890)).to.equal('0,57');
    });

    it('should format with a specific number of decimals', function() {
      expect(utils.formatNumber(1234567.890, 2)).to.equal('1.234.567,89');
      expect(utils.formatNumber(123.4567890, 4)).to.equal('123,4568');
      expect(utils.formatNumber(123.4567890, 10)).to.equal('123,4567890000');
      expect(utils.formatNumber(0, 10)).to.equal('0,0000000000');
    });

    it('should format with a specific separator', function() {
      expect(utils.formatNumber(1234567.890, 2, '|')).to.equal('1|234|567,89');
    });

    it('should format with a specific decimal character', function() {
      expect(utils.formatNumber(1234567.890, 2, ',', '*')).to.equal('1,234,567*89');
    });

    it('should format with a minimum number of decimals', function() {
      expect(utils.formatNumber(123.4567890, '>4')).to.equal('123,456789');
      expect(utils.formatNumber(123.45, '>6')).to.equal('123,450000');
      expect(utils.formatNumber(123.999999, '>3')).to.equal('123,999999');
      expect(utils.formatNumber(0, '>4')).to.equal('0,0000');
      expect(utils.formatNumber(0, '>0')).to.equal('0');
    });

    it('should format with a maximum number of decimals', function() {
      expect(utils.formatNumber(123.4567890, '<4')).to.equal('123,4568');
      expect(utils.formatNumber(123.45, '<6')).to.equal('123,45');
      expect(utils.formatNumber(0.12345, '<4')).to.equal('0,1235');
      expect(utils.formatNumber(123.999999, '<3')).to.equal('124');
      expect(utils.formatNumber(123.199999, '<3')).to.equal('123,2');
      expect(utils.formatNumber(123.104999, '<3')).to.equal('123,105');
      expect(utils.formatNumber(123.104099, '<3')).to.equal('123,104');
      expect(utils.formatNumber(0.1234, '<0')).to.equal('0');
      expect(utils.formatNumber(0, '<4')).to.equal('0');
    });
  });
});