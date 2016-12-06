var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _objectType = require('../objectType');

var _objectType2 = _interopRequireDefault(_objectType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"objectType"', () => {
  it('Should return the name of the given object', () => {
    (0, _chai2.default)((0, _objectType2.default)({})).to.equal('object');
    (0, _chai2.default)((0, _objectType2.default)(null)).to.equal('null');
    (0, _chai2.default)((0, _objectType2.default)()).to.equal('undefined');
    (0, _chai2.default)((0, _objectType2.default)('')).to.equal('string');
    (0, _chai2.default)((0, _objectType2.default)(0)).to.equal('number');
  });
});