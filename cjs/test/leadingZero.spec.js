var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _leadingZero = require('../leadingZero');

var _leadingZero2 = _interopRequireDefault(_leadingZero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"leadingZero"', () => {
  it('Should always return a string', () => {
    (0, _chai2.default)((0, _leadingZero2.default)(123)).to.be.a('string');
    (0, _chai2.default)((0, _leadingZero2.default)({})).to.be.a('string');
    (0, _chai2.default)((0, _leadingZero2.default)(null)).to.be.a('string');
    (0, _chai2.default)((0, _leadingZero2.default)()).to.be.a('string');
  });

  it('Should add a zero to a value of just one character', () => {
    (0, _chai2.default)((0, _leadingZero2.default)(1)).to.equal('01');
    (0, _chai2.default)((0, _leadingZero2.default)('1')).to.equal('01');
    (0, _chai2.default)((0, _leadingZero2.default)('|')).to.equal('0|');
  });

  it('Should add a zeroes to a value until it is the desired length', () => {
    (0, _chai2.default)((0, _leadingZero2.default)(1, 5)).to.equal('00001');
    (0, _chai2.default)((0, _leadingZero2.default)('123', 5)).to.equal('00123');
    (0, _chai2.default)((0, _leadingZero2.default)(null, 5)).to.equal('0null');
  });

  it('Should return the value without zeroes if it is longer than the desired length', () => {
    (0, _chai2.default)((0, _leadingZero2.default)(1, 1)).to.equal('1');
    (0, _chai2.default)((0, _leadingZero2.default)('123', 2)).to.equal('123');
    (0, _chai2.default)((0, _leadingZero2.default)(null)).to.equal('null');
    (0, _chai2.default)((0, _leadingZero2.default)()).to.equal('undefined');
  });
});