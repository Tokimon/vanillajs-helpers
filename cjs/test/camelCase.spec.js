var _chai = require('./assets/chai.js');

var _chai2 = _interopRequireDefault(_chai);

var _camelCase = require('../camelCase');

var _camelCase2 = _interopRequireDefault(_camelCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"camelCase"', () => {
  describe('without defined settings', () => {
    it('Should convert a phrase into a lower camelCased word', () => {
      (0, _chai2.default)((0, _camelCase2.default)('Convert PHRASE into Camel case')).to.equal('convertPhraseIntoCamelCase');
      (0, _chai2.default)((0, _camelCase2.default)('ABBR phrase')).to.equal('abbrPhrase');
      (0, _chai2.default)((0, _camelCase2.default)('HTMLElement')).to.equal('htmlElement');
      (0, _chai2.default)((0, _camelCase2.default)('LOOK! 99 air balloons')).to.equal('look99AirBalloons');
      (0, _chai2.default)((0, _camelCase2.default)('bool2str')).to.equal('bool2Str');
      (0, _chai2.default)((0, _camelCase2.default)('L337caser')).to.equal('l337Caser');
      (0, _chai2.default)((0, _camelCase2.default)('camelCase')).to.equal('camelCase');
      (0, _chai2.default)((0, _camelCase2.default)('CamelCase')).to.equal('camelCase');
      (0, _chai2.default)((0, _camelCase2.default)('snake_case')).to.equal('snakeCase');
      (0, _chai2.default)((0, _camelCase2.default)('word')).to.equal('word');
      (0, _chai2.default)((0, _camelCase2.default)('Name')).to.equal('name');
    });

    it('Should keep empty strings empty', () => {
      (0, _chai2.default)((0, _camelCase2.default)('')).to.equal('');
    });
  });

  describe('with defined settings', () => {
    it('Should return a function if no string was given', () => {
      (0, _chai2.default)(typeof (0, _camelCase2.default)()).to.equal('function');
    });

    it('Should always turn inputs into strings', () => {
      const caser = (0, _camelCase2.default)();
      (0, _chai2.default)(caser(9)).to.equal('9');
      (0, _chai2.default)(caser(null)).to.equal('null');
      (0, _chai2.default)(caser('')).to.equal('');
      (0, _chai2.default)(caser()).to.equal('');
    });

    describe('{ "abbr" : false, "upper" : false, "numbers" : true } (default settings)', () => {
      it('Should use default settings when an empty settings object is given', () => {
        const caser = (0, _camelCase2.default)();
        (0, _chai2.default)(caser('Convert PHRASE into Camel case')).to.equal('convertPhraseIntoCamelCase');
        (0, _chai2.default)(caser('ABBR phrase')).to.equal('abbrPhrase');
        (0, _chai2.default)(caser('HTMLElement')).to.equal('htmlElement');
        (0, _chai2.default)(caser('LOOK! 99 air balloons')).to.equal('look99AirBalloons');
        (0, _chai2.default)(caser('bool2str')).to.equal('bool2Str');
        (0, _chai2.default)(caser('L337caser')).to.equal('l337Caser');
        (0, _chai2.default)(caser('camelCase')).to.equal('camelCase');
        (0, _chai2.default)(caser('CamelCase')).to.equal('camelCase');
        (0, _chai2.default)(caser('snake_case')).to.equal('snakeCase');
        (0, _chai2.default)(caser('word')).to.equal('word');
        (0, _chai2.default)(caser('Name')).to.equal('name');
      });
    });

    describe('{ "abbr" : true }', () => {
      it('Should keep abbriviations', () => {
        const caser = (0, _camelCase2.default)({ abbr: true });
        (0, _chai2.default)(caser('Convert PHRASE into Camel case')).to.equal('convertPHRASEIntoCamelCase');
        (0, _chai2.default)(caser('ABBR phrase')).to.equal('ABBRPhrase');
        (0, _chai2.default)(caser('HTMLElement')).to.equal('HTMLElement');
      });
    });

    describe('{ "upper" : true }', () => {
      it('Should convert first character to upper case ', () => {
        const caser = (0, _camelCase2.default)({ upper: true });
        (0, _chai2.default)(caser('Convert PHRASE into Camel case')).to.equal('ConvertPhraseIntoCamelCase');
        (0, _chai2.default)(caser('ABBR phrase')).to.equal('AbbrPhrase');
        (0, _chai2.default)(caser('HTMLElement')).to.equal('HtmlElement');
        (0, _chai2.default)(caser('LOOK! 99 air balloons')).to.equal('Look99AirBalloons');
        (0, _chai2.default)(caser('bool2str')).to.equal('Bool2Str');
        (0, _chai2.default)(caser('L337caser')).to.equal('L337Caser');
        (0, _chai2.default)(caser('camelCase')).to.equal('CamelCase');
        (0, _chai2.default)(caser('CamelCase')).to.equal('CamelCase');
        (0, _chai2.default)(caser('snake_case')).to.equal('SnakeCase');
        (0, _chai2.default)(caser('word')).to.equal('Word');
        (0, _chai2.default)(caser('Name')).to.equal('Name');
      });
    });

    describe('{ "numbers" : false }', () => {
      it('Should ignore numbers', () => {
        const caser = (0, _camelCase2.default)({ numbers: false });
        (0, _chai2.default)(caser('LOOK! 99 air balloons')).to.equal('look99AirBalloons');
        (0, _chai2.default)(caser('bool2str')).to.equal('bool2str');
        (0, _chai2.default)(caser('L337caser')).to.equal('l337caser');
        (0, _chai2.default)(caser('007bond')).to.equal('007bond');
      });
    });

    describe('{ "abbr" : true, "upper" : true }', () => {
      it('Should convert first character to upper case and keep abbrivations', () => {
        const caser = (0, _camelCase2.default)({ upper: true, abbr: true });
        (0, _chai2.default)(caser('Convert PHRASE into Camel case')).to.equal('ConvertPHRASEIntoCamelCase');
        (0, _chai2.default)(caser('ABBR phrase')).to.equal('ABBRPhrase');
        (0, _chai2.default)(caser('HTMLElement')).to.equal('HTMLElement');
        (0, _chai2.default)(caser('LOOK! 99 air balloons')).to.equal('LOOK99AirBalloons');
        (0, _chai2.default)(caser('bool2str')).to.equal('Bool2Str');
        (0, _chai2.default)(caser('L337caser')).to.equal('L337Caser');
        (0, _chai2.default)(caser('camelCase')).to.equal('CamelCase');
        (0, _chai2.default)(caser('CamelCase')).to.equal('CamelCase');
        (0, _chai2.default)(caser('snake_case')).to.equal('SnakeCase');
        (0, _chai2.default)(caser('word')).to.equal('Word');
        (0, _chai2.default)(caser('Name')).to.equal('Name');
      });
    });

    describe('{ "abbr" : true, "numbers" : false }', () => {
      it('Should keep abbrivations and ignore numbers', () => {
        const caser = (0, _camelCase2.default)({ numbers: false, abbr: true });
        (0, _chai2.default)(caser('Convert PHRASE into Camel case')).to.equal('convertPHRASEIntoCamelCase');
        (0, _chai2.default)(caser('ABBR phrase')).to.equal('ABBRPhrase');
        (0, _chai2.default)(caser('HTMLElement')).to.equal('HTMLElement');
        (0, _chai2.default)(caser('LOOK! 99 air balloons')).to.equal('LOOK99AirBalloons');
        (0, _chai2.default)(caser('bool2str')).to.equal('bool2str');
        (0, _chai2.default)(caser('L337caser')).to.equal('l337caser');
        (0, _chai2.default)(caser('camelCase')).to.equal('camelCase');
        (0, _chai2.default)(caser('CamelCase')).to.equal('camelCase');
        (0, _chai2.default)(caser('snake_case')).to.equal('snakeCase');
        (0, _chai2.default)(caser('word')).to.equal('word');
        (0, _chai2.default)(caser('Name')).to.equal('name');
      });
    });

    describe('{ "upper" : true, "numbers" : false }', () => {
      it('Should convert first character to upper case and ignore numbers', () => {
        const caser = (0, _camelCase2.default)({ upper: true, numbers: false });
        (0, _chai2.default)(caser('Convert PHRASE into Camel case')).to.equal('ConvertPhraseIntoCamelCase');
        (0, _chai2.default)(caser('ABBR phrase')).to.equal('AbbrPhrase');
        (0, _chai2.default)(caser('HTMLElement')).to.equal('HtmlElement');
        (0, _chai2.default)(caser('LOOK! 99 air balloons')).to.equal('Look99AirBalloons');
        (0, _chai2.default)(caser('bool2str')).to.equal('Bool2str');
        (0, _chai2.default)(caser('L337caser')).to.equal('L337caser');
        (0, _chai2.default)(caser('camelCase')).to.equal('CamelCase');
        (0, _chai2.default)(caser('CamelCase')).to.equal('CamelCase');
        (0, _chai2.default)(caser('snake_case')).to.equal('SnakeCase');
        (0, _chai2.default)(caser('word')).to.equal('Word');
        (0, _chai2.default)(caser('Name')).to.equal('Name');
      });
    });

    describe('{ "abbr" : true, "upper" : true, "numbers" : false }', () => {
      it('Should convert first character to upper case, keep abbrivations and ignore numbers', () => {
        const caser = (0, _camelCase2.default)({ numbers: false, abbr: true, upper: true });
        (0, _chai2.default)(caser('Convert PHRASE into Camel case')).to.equal('ConvertPHRASEIntoCamelCase');
        (0, _chai2.default)(caser('ABBR phrase')).to.equal('ABBRPhrase');
        (0, _chai2.default)(caser('HTMLElement')).to.equal('HTMLElement');
        (0, _chai2.default)(caser('LOOK! 99 air balloons')).to.equal('LOOK99AirBalloons');
        (0, _chai2.default)(caser('bool2str')).to.equal('Bool2str');
        (0, _chai2.default)(caser('L337caser')).to.equal('L337caser');
        (0, _chai2.default)(caser('camelCase')).to.equal('CamelCase');
        (0, _chai2.default)(caser('CamelCase')).to.equal('CamelCase');
        (0, _chai2.default)(caser('snake_case')).to.equal('SnakeCase');
        (0, _chai2.default)(caser('word')).to.equal('Word');
        (0, _chai2.default)(caser('Name')).to.equal('Name');
      });
    });
  });
});