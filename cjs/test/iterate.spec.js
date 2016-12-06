var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _iterate = require('../iterate');

var _iterate2 = _interopRequireDefault(_iterate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('"iterate"', () => {
  it('Should iterate an array', () => {
    const arr = [1, 2, 3];
    const cb = _sinon2.default.spy();

    (0, _iterate2.default)(arr, cb);

    (0, _chai2.default)(cb).to.have.been.calledThrice;
    (0, _chai2.default)(cb.firstCall).to.have.been.calledWith(1, 0, arr);
    (0, _chai2.default)(cb.secondCall).to.have.been.calledWith(2, 1, arr);
    (0, _chai2.default)(cb.thirdCall).to.have.been.calledWith(3, 2, arr);
  });

  it('Should iterate an iterable collection (like NodeList)', () => {
    const nodes = { 0: 'one', 1: 'two', 2: 'three', length: 3 };
    const cb = _sinon2.default.spy();

    (0, _iterate2.default)(nodes, cb);

    (0, _chai2.default)(cb).to.have.been.calledThrice;
    (0, _chai2.default)(cb.firstCall).to.have.been.calledWith(nodes[0], 0, nodes);
    (0, _chai2.default)(cb.secondCall).to.have.been.calledWith(nodes[1], 1, nodes);
    (0, _chai2.default)(cb.thirdCall).to.have.been.calledWith(nodes[2], 2, nodes);
  });

  it('Should iterate a single item', () => {
    const cb = _sinon2.default.spy();
    const obj = {};

    (0, _iterate2.default)(obj, cb);

    (0, _chai2.default)(cb).to.have.been.calledOnce;
    (0, _chai2.default)(cb.firstCall).to.have.been.calledWith(obj, 0, obj);
  });

  it('Should break loop if false is returned', () => {
    const arr = [1, 2, 3];
    const cb = _sinon2.default.stub();
    cb.onSecondCall().returns(false);

    (0, _iterate2.default)(arr, cb);

    (0, _chai2.default)(cb).to.have.been.calledTwice;
    (0, _chai2.default)(cb.firstCall).to.have.been.calledWith(1, 0, arr);
    (0, _chai2.default)(cb.secondCall).to.have.been.calledWith(2, 1, arr);
  });

  it('Should return the length of the collection', () => {
    (0, _chai2.default)((0, _iterate2.default)([1, 2, 3], () => {})).to.equal(3);
  });

  it('Should return 0 if cb or iterable is not defined', () => {
    (0, _chai2.default)((0, _iterate2.default)()).to.equal(0);
    (0, _chai2.default)((0, _iterate2.default)([1])).to.equal(0);
    (0, _chai2.default)((0, _iterate2.default)(null, () => {})).to.equal(0);
  });
}); /* eslint-env node, mocha */