var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _isObject = require('../isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */
/* eslint-disable no-new-object */

describe('"isObject"', () => {
  it('Should return true for Function values', () => {
    (0, _chai2.default)((0, _isObject2.default)({})).to.be.true;
    (0, _chai2.default)((0, _isObject2.default)(new Object())).to.be.true;
    (0, _chai2.default)((0, _isObject2.default)(Object.create({}))).to.be.true;
  });

  it('Should return false for non Function values', () => {
    (0, _chai2.default)((0, _isObject2.default)(null)).to.be.false;
    (0, _chai2.default)((0, _isObject2.default)('Object')).to.be.false;
    (0, _chai2.default)((0, _isObject2.default)()).to.be.false;
    (0, _chai2.default)((0, _isObject2.default)([])).to.be.false;
  });
});