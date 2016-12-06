var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _formatNumber = require('../formatNumber');

var _formatNumber2 = _interopRequireDefault(_formatNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"formatNumber"', () => {
  it('Should format number with a specific thousand seperator', () => {
    (0, _chai2.default)((0, _formatNumber2.default)(1100.234, 2, '|')).to.equal('1|100,23');
  });

  it('Should format number with a specific decimal seperator', () => {
    (0, _chai2.default)((0, _formatNumber2.default)(1100.234, 2, '.', '|')).to.equal('1.100|23');
  });

  it('Should format the decimals', () => {
    (0, _chai2.default)((0, _formatNumber2.default)(1100.234, 1)).to.equal('1.100,2');
    (0, _chai2.default)((0, _formatNumber2.default)(1100.234, 5)).to.equal('1.100,23400');
    (0, _chai2.default)((0, _formatNumber2.default)(1100.234, '>1')).to.equal('1.100,234');
    (0, _chai2.default)((0, _formatNumber2.default)(1100.234, '>4')).to.equal('1.100,2340');
    (0, _chai2.default)((0, _formatNumber2.default)(1100.234, '<2')).to.equal('1.100,23');
    (0, _chai2.default)((0, _formatNumber2.default)(1100.234, '<5')).to.equal('1.100,234');
  });

  it('Should should format 0 when a non number is specified', () => {
    (0, _chai2.default)((0, _formatNumber2.default)(null)).to.equal('0,00');
  });
});