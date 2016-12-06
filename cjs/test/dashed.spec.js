var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _dashed = require('../dashed');

var _dashed2 = _interopRequireDefault(_dashed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"dashed"', () => {
  it('Should transform a phrase into a dashed phrase', () => {
    (0, _chai2.default)((0, _dashed2.default)('Convert PHRASE into Dashed')).to.equal('convert-phrase-into-dashed');
    (0, _chai2.default)((0, _dashed2.default)('ABBR phrase')).to.equal('abbr-phrase');
    (0, _chai2.default)((0, _dashed2.default)('HTMLElement')).to.equal('html-element');
    (0, _chai2.default)((0, _dashed2.default)('LOOK! 99 air balloons')).to.equal('look-99-air-balloons');
    (0, _chai2.default)((0, _dashed2.default)('bool2str')).to.equal('bool2str');
    (0, _chai2.default)((0, _dashed2.default)('camelCase')).to.equal('camel-case');
    (0, _chai2.default)((0, _dashed2.default)('snake_case')).to.equal('snake-case');
  });

  it('Should always turn inputs into strings', () => {
    (0, _chai2.default)((0, _dashed2.default)(9)).to.equal('9');
    (0, _chai2.default)((0, _dashed2.default)(null)).to.equal('null');
    (0, _chai2.default)((0, _dashed2.default)()).to.equal('');
  });
});