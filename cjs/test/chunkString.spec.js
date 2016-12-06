var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _chunkString = require('../chunkString');

var _chunkString2 = _interopRequireDefault(_chunkString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"chunkString"', () => {
  it('Should return an array of strings', () => {
    let chunks = (0, _chunkString2.default)('abcd');
    (0, _chai2.default)(chunks).to.be.an('array').and.to.have.length(2);
    (0, _chai2.default)(chunks.every(str => typeof str === 'string')).to.be.true;

    chunks = (0, _chunkString2.default)(123456789);
    (0, _chai2.default)(chunks).to.be.an('array').and.to.have.length(5);
    (0, _chai2.default)(chunks.every(str => typeof str === 'string')).to.be.true;
  });

  it('Should return an array of strings of a given length', () => {
    let chunks = (0, _chunkString2.default)('abcd', 4);
    (0, _chai2.default)(chunks).to.be.an('array').and.to.have.length(1);
    (0, _chai2.default)(chunks.every(str => typeof str === 'string')).to.be.true;

    chunks = (0, _chunkString2.default)(123456789, 4);
    (0, _chai2.default)(chunks).to.be.an('array').and.to.have.length(3);
    (0, _chai2.default)(chunks.every(str => typeof str === 'string')).to.be.true;
  });

  it('Should return empty Array for empty values', () => {
    (0, _chai2.default)((0, _chunkString2.default)()).to.be.an('array').and.to.have.length(0);
    (0, _chai2.default)((0, _chunkString2.default)('')).to.be.an('array').and.to.have.length(0);
    (0, _chai2.default)((0, _chunkString2.default)(0)).to.be.an('array').and.to.have.length(0);
    (0, _chai2.default)((0, _chunkString2.default)(null)).to.be.an('array').and.to.have.length(0);
  });
});