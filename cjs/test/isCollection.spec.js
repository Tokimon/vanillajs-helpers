var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _isCollection = require('../isCollection');

var _isCollection2 = _interopRequireDefault(_isCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */
/* eslint-disable no-array-constructor */

describe('"isCollection"', () => {
  it('Should return true for Arrays', () => {
    (0, _chai2.default)((0, _isCollection2.default)([])).to.be.true;
    (0, _chai2.default)((0, _isCollection2.default)(new Array())).to.be.true;
  });

  it('Should return true for objects with a length value', () => {
    (0, _chai2.default)((0, _isCollection2.default)({ length: 0 })).to.be.true;
  });

  it('Should return false for non Collections', () => {
    (0, _chai2.default)((0, _isCollection2.default)({ 0: 1, 1: 2 })).to.be.false;
    (0, _chai2.default)((0, _isCollection2.default)(1)).to.be.false;
    (0, _chai2.default)((0, _isCollection2.default)(null)).to.be.false;
    (0, _chai2.default)((0, _isCollection2.default)()).to.be.false;
  });
});