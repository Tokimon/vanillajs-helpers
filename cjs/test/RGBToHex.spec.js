var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _RGBToHex = require('../RGBToHex');

var _RGBToHex2 = _interopRequireDefault(_RGBToHex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"RGBToHex"', () => {
  it('Should generate a hex color from a RGB array', () => {
    (0, _chai2.default)((0, _RGBToHex2.default)([255, 0, 0])).to.equal('#ff0000');
  });

  it('Should generate a hex color from a RGB entries', () => {
    (0, _chai2.default)((0, _RGBToHex2.default)(0, 0, 255)).to.equal('#0000ff');
  });
});