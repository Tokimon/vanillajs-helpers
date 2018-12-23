import expect from './assets/chai';
import camelCase from '../ts/camelCase';

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
      expect(camelCase('PascalCase')).to.equal('pascalCase');
      expect(camelCase('snake_case')).to.equal('snakeCase');
      expect(camelCase('word')).to.equal('word');
      expect(camelCase('Name')).to.equal('name');
      expect(camelCase('data-value25input')).to.equal('dataValue25Input');
    });

    it('Should keep empty strings empty', () => {
      expect(camelCase('')).to.equal('');
    });

    it('Should return empty string when null or undefined is passed', () => {
      expect(camelCase()).to.equal('');
      expect(camelCase(null)).to.equal('');
    });
  });

  describe('with defined settings', () => {
    describe('{ "abbr" : false, "upper" : false, "numbers" : true } (default settings)', () => {
      it('Should use default settings when an empty settings object is given', () => {
        const caser = camelCase({}) as Function;
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
        expect(camelCase('data-value25input')).to.equal('dataValue25Input');
      });
    });

    describe('{ "abbr" : true }', () => {
      it('Should keep abbriviations', () => {
        const caser = camelCase({ abbr: true }) as Function;
        expect(caser('Convert PHRASE into Camel case')).to.equal('convertPHRASEIntoCamelCase');
        expect(caser('ABBR phrase')).to.equal('ABBRPhrase');
        expect(caser('HTMLElement')).to.equal('HTMLElement');
      });
    });

    describe('{ "upper" : true }', () => {
      it('Should convert first character to upper case ', () => {
        const caser = camelCase({ upper: true }) as Function;
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
        const caser = camelCase({ numbers: false }) as Function;
        expect(caser('LOOK! 99 air balloons')).to.equal('look99AirBalloons');
        expect(caser('bool2str')).to.equal('bool2str');
        expect(caser('L337caser')).to.equal('l337caser');
        expect(caser('007bond')).to.equal('007bond');
        expect(caser('data-value25input')).to.equal('dataValue25input');
      });
    });

    describe('{ "abbr" : true, "upper" : true }', () => {
      it('Should convert first character to upper case and keep abbrivations', () => {
        const caser = camelCase({ upper: true, abbr: true }) as Function;
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
        const caser = camelCase({ numbers: false, abbr: true }) as Function;
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
        const caser = camelCase({ upper: true, numbers: false }) as Function;
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
        const caser = camelCase({ numbers: false, abbr: true, upper: true }) as Function;
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
