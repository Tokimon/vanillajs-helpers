var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _pascalCase = require('../pascalCase');

var _pascalCase2 = _interopRequireDefault(_pascalCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"pascalCase"', () => {
  it('Should convert a phrase into a PascalCased word', () => {
    (0, _chai2.default)((0, _pascalCase2.default)('Convert PHRASE into Pascal case')).to.equal('ConvertPhraseIntoPascalCase');
    (0, _chai2.default)((0, _pascalCase2.default)('ABBR phrase')).to.equal('AbbrPhrase');
    (0, _chai2.default)((0, _pascalCase2.default)('HTMLElement')).to.equal('HtmlElement');
    (0, _chai2.default)((0, _pascalCase2.default)('LOOK! 99 air balloons')).to.equal('Look99AirBalloons');
    (0, _chai2.default)((0, _pascalCase2.default)('camelCase')).to.equal('CamelCase');
    (0, _chai2.default)((0, _pascalCase2.default)('PascalCase')).to.equal('PascalCase');
    (0, _chai2.default)((0, _pascalCase2.default)('snake_case')).to.equal('SnakeCase');
  });

  it('Should always turn inputs into strings', () => {
    (0, _chai2.default)((0, _pascalCase2.default)(9)).to.equal('9');
    (0, _chai2.default)((0, _pascalCase2.default)(null)).to.equal('Null');
    (0, _chai2.default)((0, _pascalCase2.default)()).to.equal('');
  });
});