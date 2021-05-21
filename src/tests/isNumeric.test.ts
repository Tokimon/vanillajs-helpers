import isNumeric from '../isNumeric';

describe('"isNumeric"', () => {
  describe('Is `true` for', () => {
    it('Integers', () => {
      expect(isNumeric(9)).toBe(true);
    });

    it('Floats', () => {
      expect(isNumeric(9.5)).toBe(true);
    });

    it('Integers as string', () => {
      expect(isNumeric('9')).toBe(true);
    });

    it('Floats as string', () => {
      expect(isNumeric('9.5')).toBe(true);
    });

    it('New Number object', () => {
      // eslint-disable-next-line no-new-wrappers
      expect(isNumeric(new Number(9))).toBe(true);
    });
  });

  describe('Is `false` for', () => {
    it('null', () => {
      expect(isNumeric(null)).toBe(false);
    });

    it('undefined', () => {
      expect(isNumeric(undefined)).toBe(false);
    });

    it('Infinity', () => {
      expect(isNumeric(Infinity)).toBe(false);
    });

    it('NaN', () => {
      expect(isNumeric(NaN)).toBe(false);
    });

    it('Object (`{}`)', () => {
      expect(isNumeric({})).toBe(false);
    });

    it('Empty Array', () => {
      expect(isNumeric([])).toBe(false);
    });

    it('Empty string', () => {
      expect(isNumeric('')).toBe(false);
    });
  });
});
