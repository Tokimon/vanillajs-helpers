import pascalCase from '../pascalCase';

describe('"pascalCase"', () => {
  describe('without defined settings', () => {
    it('Should convert a phrase into a PascalCased word', () => {
      expect(pascalCase('Convert PHRASE into Pascal case')).toBe('ConvertPhraseIntoPascalCase');
      expect(pascalCase('ABBR phrase')).toBe('AbbrPhrase');
      expect(pascalCase('HTMLElement')).toBe('HtmlElement');
      expect(pascalCase('LOOK! 99 air balloons')).toBe('Look99AirBalloons');
      expect(pascalCase('PascalCase')).toBe('PascalCase');
      expect(pascalCase('snake_case')).toBe('SnakeCase');
      expect(pascalCase('data-value25input')).toBe('DataValue25Input');
      expect(pascalCase('/some/path/someWhere')).toBe('SomePathSomeWhere');
    });
  });

  describe('with defined settings', () => {
    it('Should return a function if no string was given', () => {
      expect(typeof pascalCase()).toBe('function');
      expect(typeof pascalCase(undefined)).toBe('function');
      expect(typeof pascalCase('')).toBe('string');
    });

    describe('{ "abbr" : false, "numbers" : true } (default settings)', () => {
      it('Should use default settings when an empty settings object is given', () => {
        const caser = pascalCase();
        expect(caser('Convert PHRASE into Pascal case')).toBe('ConvertPhraseIntoPascalCase');
        expect(caser('ABBR phrase')).toBe('AbbrPhrase');
        expect(caser('HTMLElement')).toBe('HtmlElement');
        expect(caser('LOOK! 99 air balloons')).toBe('Look99AirBalloons');
        expect(caser('bool2str')).toBe('Bool2Str');
        expect(caser('L337caser')).toBe('L337Caser');
        expect(caser('pascalCase')).toBe('PascalCase');
        expect(caser('snake_case')).toBe('SnakeCase');
        expect(caser('word')).toBe('Word');
        expect(caser('Name')).toBe('Name');
        expect(pascalCase('data-value25input')).toBe('DataValue25Input');
      });
    });

    describe('{ "abbr" : true }', () => {
      it('Should keep abbreviations', () => {
        const caser = pascalCase({ abbr: true });
        expect(caser('Convert PHRASE into Pascal case')).toBe('ConvertPHRASEIntoPascalCase');
        expect(caser('ABBR phrase')).toBe('ABBRPhrase');
        expect(caser('HTMLElement')).toBe('HTMLElement');
      });
    });

    describe('{ "numbers" : false }', () => {
      it('Should ignore numbers', () => {
        const caser = pascalCase({ numbers: false });
        expect(caser('LOOK! 99 air balloons')).toBe('Look99AirBalloons');
        expect(caser('bool2str')).toBe('Bool2str');
        expect(caser('L337caser')).toBe('L337caser');
        expect(caser('007bond')).toBe('007bond');
        expect(caser('data-value25input')).toBe('DataValue25input');
      });
    });

    describe('{ "abbr" : true, "numbers" : false }', () => {
      it('Should keep abbreviations and ignore numbers', () => {
        const caser = pascalCase({ numbers: false, abbr: true });
        expect(caser('Convert PHRASE into Pascal case')).toBe('ConvertPHRASEIntoPascalCase');
        expect(caser('ABBR phrase')).toBe('ABBRPhrase');
        expect(caser('HTMLElement')).toBe('HTMLElement');
        expect(caser('LOOK! 99 air balloons')).toBe('LOOK99AirBalloons');
        expect(caser('bool2str')).toBe('Bool2str');
        expect(caser('L337caser')).toBe('L337caser');
        expect(caser('pascalCase')).toBe('PascalCase');
        expect(caser('snake_case')).toBe('SnakeCase');
        expect(caser('word')).toBe('Word');
        expect(caser('Name')).toBe('Name');
      });
    });
  });
});
