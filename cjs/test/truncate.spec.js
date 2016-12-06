var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _truncate = require('../truncate');

var _truncate2 = _interopRequireDefault(_truncate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"truncate"', () => {
  it('Should return the given entry when it is not a string or maxlength is not given or longer than entry', () => {
    (0, _chai2.default)((0, _truncate2.default)('This is not truncated')).to.equal('This is not truncated');
    (0, _chai2.default)((0, _truncate2.default)(1234)).to.equal(1234);
    (0, _chai2.default)((0, _truncate2.default)(1234567890, 5)).to.equal(1234567890);
    (0, _chai2.default)((0, _truncate2.default)('Short string', 20)).to.equal('Short string');
  });

  it('Should shorten a string and add "..." to the end of it', () => {
    (0, _chai2.default)((0, _truncate2.default)('Truncated string', 10)).to.equal('Truncated ...');
  });

  it('Should shorten a string and add a custom end to the end of it', () => {
    (0, _chai2.default)((0, _truncate2.default)('Truncated string', 5, '???')).to.equal('Trunc???');
    (0, _chai2.default)((0, _truncate2.default)('Truncated string', 10, '_')).to.equal('Truncated _');
  });
});