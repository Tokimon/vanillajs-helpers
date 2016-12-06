var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _promisefy = require('../promisefy');

var _promisefy2 = _interopRequireDefault(_promisefy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"promisefy"', () => {
  it('Should make the method return a promise', () => {
    const cb = (arg, cb) => {
      if (!arg) {
        return cb('error');
      }
      return cb(null, 'success');
    };

    const promised = (0, _promisefy2.default)(cb);
    (0, _chai2.default)(promised).to.be.a('function');

    const success = promised();
    (0, _chai2.default)(success instanceof Promise).to.be.true;
    (0, _chai2.default)(success).not.to.be.rejected;

    const fail = promised(false);
    (0, _chai2.default)(fail instanceof Promise).to.be.true;
    (0, _chai2.default)(fail).to.be.rejected;
  });

  it('Should fail on non function arguments', () => {
    (0, _chai2.default)((0, _promisefy2.default)()).to.fail;
    (0, _chai2.default)((0, _promisefy2.default)(null)).to.fail;
    (0, _chai2.default)((0, _promisefy2.default)('String')).to.fail;
    (0, _chai2.default)((0, _promisefy2.default)(123)).to.fail;
    (0, _chai2.default)((0, _promisefy2.default)({})).to.fail;
  });
});