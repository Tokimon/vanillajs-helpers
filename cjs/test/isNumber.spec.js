var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _isNumber = require('../isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('"isNumber"', () => {
  it('Should return true for Numeric values', () => {
    (0, _chai2.default)((0, _isNumber2.default)(9)).to.be.true;
    (0, _chai2.default)((0, _isNumber2.default)(9.9)).to.be.true;
    (0, _chai2.default)((0, _isNumber2.default)(Number('0'))).to.be.true;
  });

  it('Should fallback to traditional "isFinite" if "Number.isFinite" is not supported', () => {
    const oldNumberIsFinite = Number.isFinite;
    Number.isFinite = undefined;
    _sinon2.default.spy(global, 'isFinite');

    (0, _chai2.default)((0, _isNumber2.default)(9)).to.be.true;
    (0, _chai2.default)(isFinite).to.have.been.called;

    global.isFinite.restore();
    Number.isFinite = oldNumberIsFinite;
  });

  it('Should return false for non Numeric values', () => {
    (0, _chai2.default)((0, _isNumber2.default)(null)).to.be.false;
    (0, _chai2.default)((0, _isNumber2.default)(Infinity)).to.be.false;
    (0, _chai2.default)((0, _isNumber2.default)(NaN)).to.be.false;
    (0, _chai2.default)((0, _isNumber2.default)('')).to.be.false;
    (0, _chai2.default)((0, _isNumber2.default)(String())).to.be.false;
    (0, _chai2.default)((0, _isNumber2.default)(new Number())).to.be.false;
    (0, _chai2.default)((0, _isNumber2.default)({})).to.be.false;
    (0, _chai2.default)((0, _isNumber2.default)()).to.be.false;
  });
}); /* eslint-env node, mocha */
/* eslint-disable no-new-wrappers */