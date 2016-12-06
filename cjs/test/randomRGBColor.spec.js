var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _randomRGBColor = require('../randomRGBColor');

var _randomRGBColor2 = _interopRequireDefault(_randomRGBColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"randomRGBColor"', () => {
  it('Should generate a random RGB color', () => {
    const rgb = (0, _randomRGBColor2.default)();
    (0, _chai2.default)(rgb.length).to.equal(3);
    (0, _chai2.default)(rgb[0]).to.satisfy(r => r >= 0 && r <= 255);
    (0, _chai2.default)(rgb[1]).to.satisfy(g => g >= 0 && g <= 255);
    (0, _chai2.default)(rgb[2]).to.satisfy(b => b >= 0 && b <= 255);
  });
});