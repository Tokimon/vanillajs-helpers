var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _isString = require('../isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */
/* eslint-disable no-new-wrappers */

describe('"isString"', () => {
  it('Should return true for String values', () => {
    (0, _chai2.default)((0, _isString2.default)('')).to.be.true;
    (0, _chai2.default)((0, _isString2.default)(new String())).to.be.true;
    (0, _chai2.default)((0, _isString2.default)(String(''))).to.be.true;
  });

  it('Should return false for non String values', () => {
    (0, _chai2.default)((0, _isString2.default)(null)).to.be.false;
    (0, _chai2.default)((0, _isString2.default)(9)).to.be.false;
    (0, _chai2.default)((0, _isString2.default)()).to.be.false;
    (0, _chai2.default)((0, _isString2.default)({})).to.be.false;
    (0, _chai2.default)((0, _isString2.default)([])).to.be.false;
  });
});