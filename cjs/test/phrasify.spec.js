var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _phrasify = require('../phrasify');

var _phrasify2 = _interopRequireDefault(_phrasify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"phrasify"', () => {
  describe('- without defined settings', () => {
    it('Should convert a word or phrase into a space separated phrase', () => {
      (0, _chai2.default)((0, _phrasify2.default)('Convert PHRASE into normal phrase')).to.equal('Convert PHRASE into normal phrase');
      (0, _chai2.default)((0, _phrasify2.default)('ABBR phrase')).to.equal('ABBR phrase');
      (0, _chai2.default)((0, _phrasify2.default)('HTMLElement')).to.equal('HTML Element');
      (0, _chai2.default)((0, _phrasify2.default)('LOOK! 99 air balloons')).to.equal('LOOK 99 air balloons');
      (0, _chai2.default)((0, _phrasify2.default)('camelCase')).to.equal('camel Case');
      (0, _chai2.default)((0, _phrasify2.default)('CamelCase')).to.equal('Camel Case');
      (0, _chai2.default)((0, _phrasify2.default)('snake_case')).to.equal('snake case');
      (0, _chai2.default)((0, _phrasify2.default)('bool2str')).to.equal('bool2str');
      (0, _chai2.default)((0, _phrasify2.default)('word')).to.equal('word');
      (0, _chai2.default)((0, _phrasify2.default)('Name')).to.equal('Name');
    });
  });

  describe('- with defined settings', () => {
    it('Should return a function if no string was given', () => {
      (0, _chai2.default)(typeof (0, _phrasify2.default)()).to.equal('function');
    });

    it('Should convert a word or phrase into a space separated phrase', () => {
      const phraser = (0, _phrasify2.default)();
      (0, _chai2.default)(phraser('Convert PHRASE into normal phrase')).to.equal('Convert PHRASE into normal phrase');
      (0, _chai2.default)(phraser('ABBR phrase')).to.equal('ABBR phrase');
      (0, _chai2.default)(phraser('HTMLElement')).to.equal('HTML Element');
      (0, _chai2.default)(phraser('LOOK! 99 air balloons')).to.equal('LOOK 99 air balloons');
      (0, _chai2.default)(phraser('camelCase')).to.equal('camel Case');
      (0, _chai2.default)(phraser('CamelCase')).to.equal('Camel Case');
      (0, _chai2.default)(phraser('snake_case')).to.equal('snake case');
      (0, _chai2.default)(phraser('bool2str')).to.equal('bool2str');
      (0, _chai2.default)(phraser('word')).to.equal('word');
      (0, _chai2.default)(phraser('Name')).to.equal('Name');
    });

    it('Should always turn inputs into strings', () => {
      const phraser = (0, _phrasify2.default)();
      (0, _chai2.default)(phraser(9)).to.equal('9');
      (0, _chai2.default)(phraser(null)).to.equal('null');
      (0, _chai2.default)(phraser('')).to.equal('');
      (0, _chai2.default)(phraser()).to.equal('');
    });

    describe('{ "numbers" : false } (default settings)', () => {
      it('Should not treat numbers', () => {
        const phraser = (0, _phrasify2.default)();
        (0, _chai2.default)(phraser('LOOK! 99 air balloons')).to.equal('LOOK 99 air balloons');
        (0, _chai2.default)(phraser('bool2str')).to.equal('bool2str');
        (0, _chai2.default)(phraser('L337phraser')).to.equal('L337phraser');
        (0, _chai2.default)(phraser('007')).to.equal('007');
        (0, _chai2.default)(phraser('007bond')).to.equal('007bond');
      });
    });

    describe('{ "numbers" : true }', () => {
      it('Should make space around numbers', () => {
        const phraser = (0, _phrasify2.default)({ numbers: true });
        (0, _chai2.default)(phraser('LOOK! 99 air balloons')).to.equal('LOOK 99 air balloons');
        (0, _chai2.default)(phraser('bool2str')).to.equal('bool 2 str');
        (0, _chai2.default)(phraser('L337phraser')).to.equal('L 337 phraser');
        (0, _chai2.default)(phraser('007')).to.equal('007');
        (0, _chai2.default)(phraser('007bond')).to.equal('007 bond');
      });
    });
  });
});