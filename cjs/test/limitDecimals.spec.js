var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _limitDecimals = require('../limitDecimals');

var _limitDecimals2 = _interopRequireDefault(_limitDecimals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"limitDecimals"', () => {
  it('Should format the decimals to the default number of digits', () => {
    (0, _chai2.default)((0, _limitDecimals2.default)(0.234)).to.equal('0.23');
    (0, _chai2.default)((0, _limitDecimals2.default)(1)).to.equal('1.00');
  });

  it('Should format the decimals to a specific number of digits', () => {
    (0, _chai2.default)((0, _limitDecimals2.default)(0.234, 1)).to.equal('0.2');
    (0, _chai2.default)((0, _limitDecimals2.default)(0.234, 5)).to.equal('0.23400');
    (0, _chai2.default)((0, _limitDecimals2.default)(0.5, 0)).to.equal('1');
    (0, _chai2.default)((0, _limitDecimals2.default)(0.9999, 3)).to.equal('1.000');
  });

  it('Should format the decimals to a minimum number of digits', () => {
    (0, _chai2.default)((0, _limitDecimals2.default)(0.234, '>1')).to.equal('0.234');
    (0, _chai2.default)((0, _limitDecimals2.default)(0.234, '>4')).to.equal('0.2340');
    (0, _chai2.default)((0, _limitDecimals2.default)(1, '>4')).to.equal('1.0000');
  });

  it('Should format the decimals to a maximum number of digits', () => {
    (0, _chai2.default)((0, _limitDecimals2.default)(0.234, '<2')).to.equal('0.23');
    (0, _chai2.default)((0, _limitDecimals2.default)(0.234, '<5')).to.equal('0.234');
    (0, _chai2.default)((0, _limitDecimals2.default)(0.9999, '<3')).to.equal('1');
  });

  it('Should format 0 when a non number is specified', () => {
    (0, _chai2.default)((0, _limitDecimals2.default)(null)).to.equal('0.00');
  });
});