var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _isArray = require('../isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */
/* eslint-disable no-new-wrappers */

describe('"isArray"', () => {
  it('Should return true for Array values', () => {
    (0, _chai2.default)((0, _isArray2.default)([])).to.be.true;
    (0, _chai2.default)((0, _isArray2.default)(Array(3))).to.be.true;
    (0, _chai2.default)((0, _isArray2.default)(new Array(3))).to.be.true;
  });

  it('Should return false for non Array values', () => {
    (0, _chai2.default)((0, _isArray2.default)(null)).to.be.false;
    (0, _chai2.default)((0, _isArray2.default)({ 0: 1, length: 1 })).to.be.false;
    (0, _chai2.default)((0, _isArray2.default)('Array')).to.be.false;
    (0, _chai2.default)((0, _isArray2.default)()).to.be.false;
  });
});