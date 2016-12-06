var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _currencyFormat = require('../currencyFormat');

var _currencyFormat2 = _interopRequireDefault(_currencyFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */
describe('"currencyFormat"', () => {
  it('Should format number to default currency format', () => {
    (0, _chai2.default)((0, _currencyFormat2.default)()(1100.234)).to.equal('1.100,23 €');
    (0, _chai2.default)((0, _currencyFormat2.default)('')(1100.234)).to.equal('1.100,23 €');
    (0, _chai2.default)((0, _currencyFormat2.default)(null)(1100.234)).to.equal('1.100,23 €');
    (0, _chai2.default)((0, _currencyFormat2.default)({})(1100.234)).to.equal('1.100,23 €');
  });

  it('Should format number to a specified format', () => {
    (0, _chai2.default)((0, _currencyFormat2.default)('$ 1,000.00')(1100.234)).to.equal('$ 1,100.23');
    (0, _chai2.default)((0, _currencyFormat2.default)('~1|000=00')(1100.234)).to.equal('~1|100=23');
  });

  it('Should should format 0 when a non number is specified', () => {
    (0, _chai2.default)((0, _currencyFormat2.default)()(null)).to.equal('0,00 €');
    (0, _chai2.default)((0, _currencyFormat2.default)()('')).to.equal('0,00 €');
    (0, _chai2.default)((0, _currencyFormat2.default)()()).to.equal('0,00 €');
    (0, _chai2.default)((0, _currencyFormat2.default)()({})).to.equal('0,00 €');
  });
});