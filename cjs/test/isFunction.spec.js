var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _isFunction = require('../isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */
/* eslint-disable no-new-func */

describe('"isFunction"', () => {
  it('Should return true for Function values', () => {
    (0, _chai2.default)((0, _isFunction2.default)(function () {})).to.be.true;
    (0, _chai2.default)((0, _isFunction2.default)(new Function())).to.be.true;
  });

  it('Should return false for non Function values', () => {
    (0, _chai2.default)((0, _isFunction2.default)(null)).to.be.false;
    (0, _chai2.default)((0, _isFunction2.default)('Function')).to.be.false;
    (0, _chai2.default)((0, _isFunction2.default)()).to.be.false;
  });
});