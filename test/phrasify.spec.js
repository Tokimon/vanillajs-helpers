/* eslint-env node, mocha, browser */
/* global expect, $ */
import phrasify from 'vanillajs-helpers/phrasify';

describe('"phrasify"', () => {
  describe('- without defined settings', () => {
    it('Should convert a word or phrase into a space separated phrase', () => {
      expect(phrasify('Convert PHRASE into normal phrase')).to.equal('Convert PHRASE into normal phrase');
      expect(phrasify('ABBR phrase')).to.equal('ABBR phrase');
      expect(phrasify('HTMLElement')).to.equal('HTML Element');
      expect(phrasify('LOOK! 99 air balloons')).to.equal('LOOK 99 air balloons');
      expect(phrasify('camelCase')).to.equal('camel Case');
      expect(phrasify('CamelCase')).to.equal('Camel Case');
      expect(phrasify('snake_case')).to.equal('snake case');
      expect(phrasify('bool2str')).to.equal('bool2str');
      expect(phrasify('word')).to.equal('word');
      expect(phrasify('Name')).to.equal('Name');
    });
  });

  describe('- with defined settings', () => {
    it('Should return a function if no string was given', () => {
      expect(typeof phrasify()).to.equal('function');
    });

    it('Should convert a word or phrase into a space separated phrase', () => {
      const phraser = phrasify();
      expect(phraser('Convert PHRASE into normal phrase')).to.equal('Convert PHRASE into normal phrase');
      expect(phraser('ABBR phrase')).to.equal('ABBR phrase');
      expect(phraser('HTMLElement')).to.equal('HTML Element');
      expect(phraser('LOOK! 99 air balloons')).to.equal('LOOK 99 air balloons');
      expect(phraser('camelCase')).to.equal('camel Case');
      expect(phraser('CamelCase')).to.equal('Camel Case');
      expect(phraser('snake_case')).to.equal('snake case');
      expect(phraser('bool2str')).to.equal('bool2str');
      expect(phraser('word')).to.equal('word');
      expect(phraser('Name')).to.equal('Name');
    });

    it('Should always turn inputs into strings', () => {
      const phraser = phrasify();
      expect(phraser(9)).to.equal('9');
      expect(phraser(null)).to.equal('null');
      expect(phraser('')).to.equal('');
      expect(phraser()).to.equal('');
    });

    describe('{ "numbers" : false } (default settings)', () => {
      it('Should not treat numbers', () => {
        const phraser = phrasify();
        expect(phraser('LOOK! 99 air balloons')).to.equal('LOOK 99 air balloons');
        expect(phraser('bool2str')).to.equal('bool2str');
        expect(phraser('L337phraser')).to.equal('L337phraser');
        expect(phraser('007')).to.equal('007');
        expect(phraser('007bond')).to.equal('007bond');
      });
    });

    describe('{ "numbers" : true }', () => {
      it('Should make space around numbers', () => {
        const phraser = phrasify({ numbers: true });
        expect(phraser('LOOK! 99 air balloons')).to.equal('LOOK 99 air balloons');
        expect(phraser('bool2str')).to.equal('bool 2 str');
        expect(phraser('L337phraser')).to.equal('L 337 phraser');
        expect(phraser('007')).to.equal('007');
        expect(phraser('007bond')).to.equal('007 bond');
      });
    });
  });
});
