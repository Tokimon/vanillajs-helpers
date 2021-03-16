import expect from './assets/chai';
import pascalCase from '../pascalCase';

describe('"pascalCase"', () => {
  describe('without defined settings', () => {
    it('Should convert a phrase into a PascalCased word', () => {
      expect(pascalCase('Convert PHRASE into Pascal case')).to.equal('ConvertPhraseIntoPascalCase');
      expect(pascalCase('ABBR phrase')).to.equal('AbbrPhrase');
      expect(pascalCase('HTMLElement')).to.equal('HtmlElement');
      expect(pascalCase('LOOK! 99 air balloons')).to.equal('Look99AirBalloons');
      expect(pascalCase('PascalCase')).to.equal('PascalCase');
      expect(pascalCase('snake_case')).to.equal('SnakeCase');
      expect(pascalCase('data-value25input')).to.equal('DataValue25Input');
      expect(pascalCase('/some/path/someWhere')).to.equal('SomePathSomeWhere');
    });
  });

  describe('with defined settings', () => {
    it('Should return a function if no string was given', () => {
      expect(typeof pascalCase()).to.equal('function');
      expect(typeof pascalCase(undefined)).to.equal('function');
      expect(typeof pascalCase('')).to.equal('string');
    });

    describe('{ "abbr" : false, "numbers" : true } (default settings)', () => {
      it('Should use default settings when an empty settings object is given', () => {
        const caser = pascalCase();
        expect(caser('Convert PHRASE into Pascal case')).to.equal('ConvertPhraseIntoPascalCase');
        expect(caser('ABBR phrase')).to.equal('AbbrPhrase');
        expect(caser('HTMLElement')).to.equal('HtmlElement');
        expect(caser('LOOK! 99 air balloons')).to.equal('Look99AirBalloons');
        expect(caser('bool2str')).to.equal('Bool2Str');
        expect(caser('L337caser')).to.equal('L337Caser');
        expect(caser('pascalCase')).to.equal('PascalCase');
        expect(caser('snake_case')).to.equal('SnakeCase');
        expect(caser('word')).to.equal('Word');
        expect(caser('Name')).to.equal('Name');
        expect(pascalCase('data-value25input')).to.equal('DataValue25Input');
      });
    });

    describe('{ "abbr" : true }', () => {
      it('Should keep abbriviations', () => {
        const caser = pascalCase({ abbr: true });
        expect(caser('Convert PHRASE into Pascal case')).to.equal('ConvertPHRASEIntoPascalCase');
        expect(caser('ABBR phrase')).to.equal('ABBRPhrase');
        expect(caser('HTMLElement')).to.equal('HTMLElement');
      });
    });

    describe('{ "numbers" : false }', () => {
      it('Should ignore numbers', () => {
        const caser = pascalCase({ numbers: false });
        expect(caser('LOOK! 99 air balloons')).to.equal('Look99AirBalloons');
        expect(caser('bool2str')).to.equal('Bool2str');
        expect(caser('L337caser')).to.equal('L337caser');
        expect(caser('007bond')).to.equal('007bond');
        expect(caser('data-value25input')).to.equal('DataValue25input');
      });
    });

    describe('{ "abbr" : true, "numbers" : false }', () => {
      it('Should keep abbrivations and ignore numbers', () => {
        const caser = pascalCase({ numbers: false, abbr: true });
        expect(caser('Convert PHRASE into Pascal case')).to.equal('ConvertPHRASEIntoPascalCase');
        expect(caser('ABBR phrase')).to.equal('ABBRPhrase');
        expect(caser('HTMLElement')).to.equal('HTMLElement');
        expect(caser('LOOK! 99 air balloons')).to.equal('LOOK99AirBalloons');
        expect(caser('bool2str')).to.equal('Bool2str');
        expect(caser('L337caser')).to.equal('L337caser');
        expect(caser('pascalCase')).to.equal('PascalCase');
        expect(caser('snake_case')).to.equal('SnakeCase');
        expect(caser('word')).to.equal('Word');
        expect(caser('Name')).to.equal('Name');
      });
    });
  });
});
