/* eslint-env node, mocha */

import expect from './assets/chai.js';
import camelCase from '../camelCase';

describe('"camelCase"', () => {
  describe('without defined settings', () => {
    it('Should convert a phrase into a lower camelCased word', () => {
      expect(camelCase('Convert PHRASE into Camel case')).to.equal('convertPhraseIntoCamelCase');
      expect(camelCase('ABBR phrase')).to.equal('abbrPhrase');
      expect(camelCase('HTMLElement')).to.equal('htmlElement');
      expect(camelCase('LOOK! 99 air balloons')).to.equal('look99AirBalloons');
      expect(camelCase('bool2str')).to.equal('bool2Str');
      expect(camelCase('L337caser')).to.equal('l337Caser');
      expect(camelCase('camelCase')).to.equal('camelCase');
      expect(camelCase('CamelCase')).to.equal('camelCase');
      expect(camelCase('snake_case')).to.equal('snakeCase');
      expect(camelCase('word')).to.equal('word');
      expect(camelCase('Name')).to.equal('name');
    });

    it('Should keep empty strings empty', () => {
      expect(camelCase('')).to.equal('');
    });
  });

  describe('with defined settings', () => {
    it('Should return a function if no string was given', () => {
      expect(typeof camelCase()).to.equal('function');
    });

    it('Should always turn inputs into strings', () => {
      const caser = camelCase();
      expect(caser(9)).to.equal('9');
      expect(caser(null)).to.equal('null');
      expect(caser('')).to.equal('');
      expect(caser()).to.equal('');
    });

    describe('{ "abbr" : false, "upper" : false, "numbers" : true } (default settings)', () => {
      it('Should use default settings when an empty settings object is given', () => {
        const caser = camelCase();
        expect(caser('Convert PHRASE into Camel case')).to.equal('convertPhraseIntoCamelCase');
        expect(caser('ABBR phrase')).to.equal('abbrPhrase');
        expect(caser('HTMLElement')).to.equal('htmlElement');
        expect(caser('LOOK! 99 air balloons')).to.equal('look99AirBalloons');
        expect(caser('bool2str')).to.equal('bool2Str');
        expect(caser('L337caser')).to.equal('l337Caser');
        expect(caser('camelCase')).to.equal('camelCase');
        expect(caser('CamelCase')).to.equal('camelCase');
        expect(caser('snake_case')).to.equal('snakeCase');
        expect(caser('word')).to.equal('word');
        expect(caser('Name')).to.equal('name');
      });
    });

    describe('{ "abbr" : true }', () => {
      it('Should keep abbriviations', () => {
        const caser = camelCase({ abbr: true });
        expect(caser('Convert PHRASE into Camel case')).to.equal('convertPHRASEIntoCamelCase');
        expect(caser('ABBR phrase')).to.equal('ABBRPhrase');
        expect(caser('HTMLElement')).to.equal('HTMLElement');
      });
    });

    describe('{ "upper" : true }', () => {
      it('Should convert first character to upper case ', () => {
        const caser = camelCase({ upper: true });
        expect(caser('Convert PHRASE into Camel case')).to.equal('ConvertPhraseIntoCamelCase');
        expect(caser('ABBR phrase')).to.equal('AbbrPhrase');
        expect(caser('HTMLElement')).to.equal('HtmlElement');
        expect(caser('LOOK! 99 air balloons')).to.equal('Look99AirBalloons');
        expect(caser('bool2str')).to.equal('Bool2Str');
        expect(caser('L337caser')).to.equal('L337Caser');
        expect(caser('camelCase')).to.equal('CamelCase');
        expect(caser('CamelCase')).to.equal('CamelCase');
        expect(caser('snake_case')).to.equal('SnakeCase');
        expect(caser('word')).to.equal('Word');
        expect(caser('Name')).to.equal('Name');
      });
    });

    describe('{ "numbers" : false }', () => {
      it('Should ignore numbers', () => {
        const caser = camelCase({ numbers: false });
        expect(caser('LOOK! 99 air balloons')).to.equal('look99AirBalloons');
        expect(caser('bool2str')).to.equal('bool2str');
        expect(caser('L337caser')).to.equal('l337caser');
        expect(caser('007bond')).to.equal('007bond');
      });
    });

    describe('{ "abbr" : true, "upper" : true }', () => {
      it('Should convert first character to upper case and keep abbrivations', () => {
        const caser = camelCase({ upper: true, abbr: true });
        expect(caser('Convert PHRASE into Camel case')).to.equal('ConvertPHRASEIntoCamelCase');
        expect(caser('ABBR phrase')).to.equal('ABBRPhrase');
        expect(caser('HTMLElement')).to.equal('HTMLElement');
        expect(caser('LOOK! 99 air balloons')).to.equal('LOOK99AirBalloons');
        expect(caser('bool2str')).to.equal('Bool2Str');
        expect(caser('L337caser')).to.equal('L337Caser');
        expect(caser('camelCase')).to.equal('CamelCase');
        expect(caser('CamelCase')).to.equal('CamelCase');
        expect(caser('snake_case')).to.equal('SnakeCase');
        expect(caser('word')).to.equal('Word');
        expect(caser('Name')).to.equal('Name');
      });
    });

    describe('{ "abbr" : true, "numbers" : false }', () => {
      it('Should keep abbrivations and ignore numbers', () => {
        const caser = camelCase({ numbers: false, abbr: true });
        expect(caser('Convert PHRASE into Camel case')).to.equal('convertPHRASEIntoCamelCase');
        expect(caser('ABBR phrase')).to.equal('ABBRPhrase');
        expect(caser('HTMLElement')).to.equal('HTMLElement');
        expect(caser('LOOK! 99 air balloons')).to.equal('LOOK99AirBalloons');
        expect(caser('bool2str')).to.equal('bool2str');
        expect(caser('L337caser')).to.equal('l337caser');
        expect(caser('camelCase')).to.equal('camelCase');
        expect(caser('CamelCase')).to.equal('camelCase');
        expect(caser('snake_case')).to.equal('snakeCase');
        expect(caser('word')).to.equal('word');
        expect(caser('Name')).to.equal('name');
      });
    });

    describe('{ "upper" : true, "numbers" : false }', () => {
      it('Should convert first character to upper case and ignore numbers', () => {
        const caser = camelCase({ upper: true, numbers: false });
        expect(caser('Convert PHRASE into Camel case')).to.equal('ConvertPhraseIntoCamelCase');
        expect(caser('ABBR phrase')).to.equal('AbbrPhrase');
        expect(caser('HTMLElement')).to.equal('HtmlElement');
        expect(caser('LOOK! 99 air balloons')).to.equal('Look99AirBalloons');
        expect(caser('bool2str')).to.equal('Bool2str');
        expect(caser('L337caser')).to.equal('L337caser');
        expect(caser('camelCase')).to.equal('CamelCase');
        expect(caser('CamelCase')).to.equal('CamelCase');
        expect(caser('snake_case')).to.equal('SnakeCase');
        expect(caser('word')).to.equal('Word');
        expect(caser('Name')).to.equal('Name');
      });
    });

    describe('{ "abbr" : true, "upper" : true, "numbers" : false }', () => {
      it('Should convert first character to upper case, keep abbrivations and ignore numbers', () => {
        const caser = camelCase({ numbers: false, abbr: true, upper: true });
        expect(caser('Convert PHRASE into Camel case')).to.equal('ConvertPHRASEIntoCamelCase');
        expect(caser('ABBR phrase')).to.equal('ABBRPhrase');
        expect(caser('HTMLElement')).to.equal('HTMLElement');
        expect(caser('LOOK! 99 air balloons')).to.equal('LOOK99AirBalloons');
        expect(caser('bool2str')).to.equal('Bool2str');
        expect(caser('L337caser')).to.equal('L337caser');
        expect(caser('camelCase')).to.equal('CamelCase');
        expect(caser('CamelCase')).to.equal('CamelCase');
        expect(caser('snake_case')).to.equal('SnakeCase');
        expect(caser('word')).to.equal('Word');
        expect(caser('Name')).to.equal('Name');
      });
    });
  });
});
