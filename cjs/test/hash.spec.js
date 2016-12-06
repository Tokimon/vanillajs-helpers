var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _hash = require('../hash');

var _hash2 = _interopRequireDefault(_hash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"hashCode"', () => {
  it('Should always return a positive hash code', () => {
    (0, _chai2.default)((0, _hash.hashCode)(null)).to.be.gt(0);
    (0, _chai2.default)((0, _hash.hashCode)('')).to.equal(0);
    (0, _chai2.default)((0, _hash.hashCode)(0)).to.be.gt(0);
    (0, _chai2.default)((0, _hash.hashCode)(-0)).to.be.gt(0);
    (0, _chai2.default)((0, _hash.hashCode)(-100)).to.be.gt(0);
  });

  it('Should always return a unique hash code', () => {
    (0, _chai2.default)((0, _hash.hashCode)('abcdefg!!')).to.not.equal((0, _hash.hashCode)('abcdegf!!'));
    (0, _chai2.default)((0, _hash.hashCode)('abc/de/fg')).to.not.equal((0, _hash.hashCode)('abc/d/efg'));
    (0, _chai2.default)((0, _hash.hashCode)('')).to.not.equal((0, _hash.hashCode)(0));
    (0, _chai2.default)((0, _hash.hashCode)('')).to.not.equal((0, _hash.hashCode)(null));
    (0, _chai2.default)((0, _hash.hashCode)('')).to.not.equal((0, _hash.hashCode)(undefined));

    // Special case
    (0, _chai2.default)((0, _hash.hashCode)(-0)).to.equal((0, _hash.hashCode)(0));
  });
});

describe('"hasString"', () => {
  it('Should always return a string', () => {
    (0, _chai2.default)((0, _hash2.default)(null)).to.be.a('string');
    (0, _chai2.default)((0, _hash2.default)('')).to.be.a('string').and.to.have.length(0);
    (0, _chai2.default)((0, _hash2.default)(0)).to.be.a('string');
    (0, _chai2.default)((0, _hash2.default)(-0)).to.be.a('string');
    (0, _chai2.default)((0, _hash2.default)(-100)).to.be.a('string');
  });

  it('Should always return a unique hash string', () => {
    (0, _chai2.default)((0, _hash2.default)('abcdefg!!')).to.not.equal((0, _hash2.default)('abcdegf!!'));
    (0, _chai2.default)((0, _hash2.default)('abc/de/fg')).to.not.equal((0, _hash2.default)('abc/d/efg'));
    (0, _chai2.default)((0, _hash2.default)('')).to.not.equal((0, _hash2.default)(0));
    (0, _chai2.default)((0, _hash2.default)('')).to.not.equal((0, _hash2.default)(null));
    (0, _chai2.default)((0, _hash2.default)('')).to.not.equal((0, _hash2.default)(undefined));
  });
});