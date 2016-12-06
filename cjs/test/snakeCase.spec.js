var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _snakeCase = require('../snakeCase');

var _snakeCase2 = _interopRequireDefault(_snakeCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"snakeCase"', () => {
  it('Should transform a phrase into a snake_case phrase', () => {
    (0, _chai2.default)((0, _snakeCase2.default)('Convert PHRASE into Snake')).to.equal('convert_phrase_into_snake');
    (0, _chai2.default)((0, _snakeCase2.default)('ABBR phrase')).to.equal('abbr_phrase');
    (0, _chai2.default)((0, _snakeCase2.default)('HTMLElement')).to.equal('html_element');
    (0, _chai2.default)((0, _snakeCase2.default)('LOOK! 99 air balloons')).to.equal('look_99_air_balloons');
    (0, _chai2.default)((0, _snakeCase2.default)('camelCase')).to.equal('camel_case');
    (0, _chai2.default)((0, _snakeCase2.default)('snake_case')).to.equal('snake_case');
  });

  it('Should always turn inputs into strings', () => {
    (0, _chai2.default)((0, _snakeCase2.default)(9)).to.equal('9');
    (0, _chai2.default)((0, _snakeCase2.default)(null)).to.equal('null');
    (0, _chai2.default)((0, _snakeCase2.default)()).to.equal('');
  });
});