var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _randomId = require('../randomId');

var _randomId2 = _interopRequireDefault(_randomId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"randomId"', () => {
  it('Should generate a random id of default length', () => {
    (0, _chai2.default)(/[a-z0-9]{10}/.test((0, _randomId2.default)())).to.be.true;
  });

  it('Should generate a random id of specific length', () => {
    (0, _chai2.default)(/[a-z0-9]{100}/.test((0, _randomId2.default)(100))).to.be.true;
  });
});