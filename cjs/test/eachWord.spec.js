var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _eachWord = require('../eachWord');

var _eachWord2 = _interopRequireDefault(_eachWord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('"eachWord"', () => {
  it('Should iterate a phrase with words separated by default characters ("_", "-" or " ")', () => {
    const phrase = 'iterate over-this_phrase';
    const expected = ['iterate', 'over', 'this', 'phrase'];
    const cb = _sinon2.default.spy();

    (0, _eachWord2.default)(phrase, cb);

    (0, _chai2.default)(cb).to.have.been.callCount(4);
    (0, _chai2.default)(cb.firstCall).to.have.been.calledWith('iterate', 0, expected);
    (0, _chai2.default)(cb.secondCall).to.have.been.calledWith('over', 1, expected);
    (0, _chai2.default)(cb.thirdCall).to.have.been.calledWith('this', 2, expected);
    (0, _chai2.default)(cb.getCall(3)).to.have.been.calledWith('phrase', 3, expected);
  });

  it('Should iterate a phrase with words separated by a defined character', () => {
    const phrase = 'iterate over-this_phrase';
    const expected = ['iterate', 'over-this_phrase'];
    const cb = _sinon2.default.spy();

    (0, _eachWord2.default)(phrase, cb, ' ');

    (0, _chai2.default)(cb).to.have.been.calledTwice;
    (0, _chai2.default)(cb.firstCall).to.have.been.calledWith('iterate', 0, expected);
    (0, _chai2.default)(cb.secondCall).to.have.been.calledWith('over-this_phrase', 1, expected);
  });

  it('Should iterate a phrase using a regular expression', () => {
    const phrase = 'iterate over-this_phrase';
    const regex = /[ -]+/;
    const expected = ['iterate', 'over', 'this_phrase'];
    const cb = _sinon2.default.spy();

    (0, _eachWord2.default)(phrase, cb, regex);

    (0, _chai2.default)(cb).to.have.been.calledThrice;
    (0, _chai2.default)(cb.firstCall).to.have.been.calledWith('iterate', 0, expected);
    (0, _chai2.default)(cb.secondCall).to.have.been.calledWith('over', 1, expected);
    (0, _chai2.default)(cb.thirdCall).to.have.been.calledWith('this_phrase', 2, expected);
  });

  it('Should break loop if false is returned', () => {
    const phrase = 'iterate over-this_phrase';
    const expected = ['iterate', 'over', 'this', 'phrase'];
    const cb = _sinon2.default.stub();
    cb.onSecondCall().returns(false);

    (0, _eachWord2.default)(phrase, cb);

    (0, _chai2.default)(cb).to.have.been.calledTwice;
    (0, _chai2.default)(cb.firstCall).to.have.been.calledWith('iterate', 0, expected);
    (0, _chai2.default)(cb.secondCall).to.have.been.calledWith('over', 1, expected);
  });

  it('Should return the number of words in the phrase', () => {
    (0, _chai2.default)((0, _eachWord2.default)('space separated phrase', () => {})).to.equal(3);
    (0, _chai2.default)((0, _eachWord2.default)('space separated phrase')).to.equal(3);
  });

  it('Should return 0 if phrase is not defined', () => {
    (0, _chai2.default)((0, _eachWord2.default)()).to.equal(0);
  });
}); /* eslint-env node, mocha */