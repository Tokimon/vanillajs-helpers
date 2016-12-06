var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _isBoolean = require('../isBoolean');

var _isBoolean2 = _interopRequireDefault(_isBoolean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */
/* eslint-disable no-new-wrappers */

describe('"isBoolean"', () => {
  it('Should return true for Boolean values', () => {
    (0, _chai2.default)((0, _isBoolean2.default)(true)).to.be.true;
    (0, _chai2.default)((0, _isBoolean2.default)(false)).to.be.true;
    (0, _chai2.default)((0, _isBoolean2.default)(Boolean(1))).to.be.true;
    (0, _chai2.default)((0, _isBoolean2.default)(Boolean(0))).to.be.true;
    (0, _chai2.default)((0, _isBoolean2.default)(new Boolean(0))).to.be.true;
    (0, _chai2.default)((0, _isBoolean2.default)(new Boolean(1))).to.be.true;
  });

  it('Should return false for non Boolean values', () => {
    (0, _chai2.default)((0, _isBoolean2.default)('true')).to.be.false;
    (0, _chai2.default)((0, _isBoolean2.default)('false')).to.be.false;
    (0, _chai2.default)((0, _isBoolean2.default)(0)).to.be.false;
    (0, _chai2.default)((0, _isBoolean2.default)(1)).to.be.false;
    (0, _chai2.default)((0, _isBoolean2.default)(null)).to.be.false;
    (0, _chai2.default)((0, _isBoolean2.default)()).to.be.false;
  });
});