import expect from './assets/chai';
import phrasify from '../phrasify';

describe('"phrasify"', () => {
  describe('- without defined settings', () => {
    it('Should convert a word or phrase into a space separated phrase', () => {
      expect(phrasify('Convert PHRASE into  normal phrase')).toBe('Convert PHRASE into normal phrase');
      expect(phrasify('ABBR phrase')).toBe('ABBR phrase');
      expect(phrasify('HTMLElement')).toBe('HTML Element');
      expect(phrasify('LOOK! 99 air balloons')).toBe('LOOK 99 air balloons');
      expect(phrasify('camelCase')).toBe('camel Case');
      expect(phrasify('CamelCase')).toBe('Camel Case');
      expect(phrasify('snake_case')).toBe('snake case');
      expect(phrasify('bool2str')).toBe('bool2str');
      expect(phrasify('word')).toBe('word');
      expect(phrasify('Name')).toBe('Name');
      expect(phrasify('data-value25input')).toBe('data value25input');
      expect(phrasify('/some/path/someWhere')).toBe('some path some Where');
    });
  });

  describe('- with defined settings', () => {
    it('Should return a function if no string was given', () => {
      expect(typeof phrasify()).toBe('function');
    });

    it('Should convert a word or phrase into a space separated phrase', () => {
      const phraser = phrasify();
      expect(phraser('Convert PHRASE  into normal phrase')).toBe('Convert PHRASE into normal phrase');
      expect(phraser('ABBR phrase')).toBe('ABBR phrase');
      expect(phraser('HTMLElement')).toBe('HTML Element');
      expect(phraser('LOOK! 99 air balloons')).toBe('LOOK 99 air balloons');
      expect(phraser('camelCase')).toBe('camel Case');
      expect(phraser('CamelCase')).toBe('Camel Case');
      expect(phraser('snake_case')).toBe('snake case');
      expect(phraser('bool2str')).toBe('bool2str');
      expect(phraser('word')).toBe('word');
      expect(phraser('Name')).toBe('Name');
    });

    describe('{ "numbers" : false }', () => {
      it('Should not treat numbers', () => {
        const phraser = phrasify({ numbers: false });
        expect(phraser('LOOK! 99 air balloons')).toBe('LOOK 99 air balloons');
        expect(phraser('bool2str')).toBe('bool2str');
        expect(phraser('L337phraser')).toBe('L337phraser');
        expect(phraser('007')).toBe('007');
        expect(phraser('007bond')).toBe('007bond');
      });
    });

    describe('{ "numbers" : true }', () => {
      it('Should make space around numbers', () => {
        const phraser = phrasify({ numbers: true });
        expect(phraser('LOOK! 99 air balloons')).toBe('LOOK 99 air balloons');
        expect(phraser('bool2str')).toBe('bool 2 str');
        expect(phraser('L337phraser')).toBe('L 337 phraser');
        expect(phraser('007')).toBe('007');
        expect(phraser('007bond')).toBe('007 bond');
        expect(phraser('data-value25input')).toBe('data value 25 input');
      });
    });
  });
});
