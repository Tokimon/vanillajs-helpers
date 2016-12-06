var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _trim = require('../trim');

var _trim2 = _interopRequireDefault(_trim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"trim"', () => {
  it('Should trim spaces and linebreaks from both ends of a string', () => {
    (0, _chai2.default)((0, _trim2.default)('   Trim me')).to.equal('Trim me');
    (0, _chai2.default)((0, _trim2.default)('Trim me    ')).to.equal('Trim me');
    (0, _chai2.default)((0, _trim2.default)('   Trim me    ')).to.equal('Trim me');
    (0, _chai2.default)((0, _trim2.default)(`
      Trim me
    `)).to.equal('Trim me');
  });

  it('Should trim a given character or string from both ends of a string', () => {
    (0, _chai2.default)((0, _trim2.default)('---Trim me', '-')).to.equal('Trim me');
    (0, _chai2.default)((0, _trim2.default)('Trim me---', '-')).to.equal('Trim me');
    (0, _chai2.default)((0, _trim2.default)('---Trim me---', '-')).to.equal('Trim me');
    (0, _chai2.default)((0, _trim2.default)('---  Trim me  ---', '-')).to.equal('  Trim me  ');
  });

  it('Should trim both ends of a string using a regular expression', () => {
    (0, _chai2.default)((0, _trim2.default)('--  Trim me', /[- ]/)).to.equal('Trim me');
    (0, _chai2.default)((0, _trim2.default)('--  Trim me', '[- ]')).to.equal('Trim me');
    (0, _chai2.default)((0, _trim2.default)('Trim me  -- -', /[- ]/)).to.equal('Trim me');
    (0, _chai2.default)((0, _trim2.default)('Trim me -- -', '[- ]')).to.equal('Trim me');
    (0, _chai2.default)((0, _trim2.default)('---  Trim me  ---', /[- ]/)).to.equal('Trim me');
    (0, _chai2.default)((0, _trim2.default)('---  Trim me  ---', '[- ]')).to.equal('Trim me');
  });

  it('Should return empty string for empty values', () => {
    (0, _chai2.default)((0, _trim2.default)('')).to.equal('');
    (0, _chai2.default)((0, _trim2.default)()).to.equal('');
    (0, _chai2.default)((0, _trim2.default)(null)).to.equal('');
    (0, _chai2.default)((0, _trim2.default)(0)).to.equal('');
    (0, _chai2.default)((0, _trim2.default)(9)).to.equal('9');
  });
});

describe('"trimLeft"', () => {
  it('Should trim spaces and linebreaks from the left side of a string', () => {
    (0, _chai2.default)((0, _trim.trimLeft)('   Trim me')).to.equal('Trim me');
    (0, _chai2.default)((0, _trim.trimLeft)('Trim me    ')).to.equal('Trim me    ');
    (0, _chai2.default)((0, _trim.trimLeft)('   Trim me    ')).to.equal('Trim me    ');
    (0, _chai2.default)((0, _trim.trimLeft)(`
      Trim me
    `)).to.equal(`Trim me
    `);
  });

  it('Should trim a given character or string from the left side of a string', () => {
    (0, _chai2.default)((0, _trim.trimLeft)('---Trim me', '-')).to.equal('Trim me');
    (0, _chai2.default)((0, _trim.trimLeft)('Trim me---', '-')).to.equal('Trim me---');
    (0, _chai2.default)((0, _trim.trimLeft)('---Trim me---', '-')).to.equal('Trim me---');
    (0, _chai2.default)((0, _trim.trimLeft)('---  Trim me  ---', '-')).to.equal('  Trim me  ---');
  });

  it('Should trim the left side of a string using a regular expression', () => {
    (0, _chai2.default)((0, _trim.trimLeft)('--  Trim me', /[- ]/)).to.equal('Trim me');
    (0, _chai2.default)((0, _trim.trimLeft)('--  Trim me', '[- ]')).to.equal('Trim me');
    (0, _chai2.default)((0, _trim.trimLeft)('---  Trim me  ---', /[- ]/)).to.equal('Trim me  ---');
    (0, _chai2.default)((0, _trim.trimLeft)('---  Trim me  ---', '[- ]')).to.equal('Trim me  ---');
  });

  it('Should return empty string for empty values', () => {
    (0, _chai2.default)((0, _trim.trimLeft)('')).to.equal('');
    (0, _chai2.default)((0, _trim.trimLeft)()).to.equal('');
    (0, _chai2.default)((0, _trim.trimLeft)(null)).to.equal('');
    (0, _chai2.default)((0, _trim.trimLeft)(0)).to.equal('');
    (0, _chai2.default)((0, _trim.trimLeft)(9)).to.equal('9');
  });
});

describe('"trimRight"', () => {
  it('Should trim spaces and linebreaks from the right side of a string', () => {
    (0, _chai2.default)((0, _trim.trimRight)('   Trim me')).to.equal('   Trim me');
    (0, _chai2.default)((0, _trim.trimRight)('Trim me    ')).to.equal('Trim me');
    (0, _chai2.default)((0, _trim.trimRight)('   Trim me    ')).to.equal('   Trim me');
    (0, _chai2.default)((0, _trim.trimRight)(`
      Trim me
    `)).to.equal(`
      Trim me`);
  });

  it('Should trim a given character or string from the right side of a string', () => {
    (0, _chai2.default)((0, _trim.trimRight)('---Trim me', '-')).to.equal('---Trim me');
    (0, _chai2.default)((0, _trim.trimRight)('Trim me---', '-')).to.equal('Trim me');
    (0, _chai2.default)((0, _trim.trimRight)('---Trim me---', '-')).to.equal('---Trim me');
    (0, _chai2.default)((0, _trim.trimRight)('---  Trim me  ---', '-')).to.equal('---  Trim me  ');
  });

  it('Should trim the right side of a string using a regular expression', () => {
    (0, _chai2.default)((0, _trim.trimRight)('Trim me - -', /[- ]/)).to.equal('Trim me');
    (0, _chai2.default)((0, _trim.trimRight)('Trim me - -', '[- ]')).to.equal('Trim me');
    (0, _chai2.default)((0, _trim.trimRight)('---  Trim me  ---', /[- ]/)).to.equal('---  Trim me');
    (0, _chai2.default)((0, _trim.trimRight)('---  Trim me  ---', '[- ]')).to.equal('---  Trim me');
  });

  it('Should return empty string for empty values', () => {
    (0, _chai2.default)((0, _trim.trimRight)('')).to.equal('');
    (0, _chai2.default)((0, _trim.trimRight)()).to.equal('');
    (0, _chai2.default)((0, _trim.trimRight)(null)).to.equal('');
    (0, _chai2.default)((0, _trim.trimRight)(0)).to.equal('');
    (0, _chai2.default)((0, _trim.trimRight)(9)).to.equal('9');
  });
});