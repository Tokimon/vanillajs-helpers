var _chai = require('./assets/chai');

var _chai2 = _interopRequireDefault(_chai);

var _uniqueArray = require('../uniqueArray');

var _uniqueArray2 = _interopRequireDefault(_uniqueArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env node, mocha */

describe('"uniqueArray"', () => {
    it('Should ignore non array arguments', () => {
        (0, _chai2.default)((0, _uniqueArray2.default)()).to.be.undefined;
        (0, _chai2.default)((0, _uniqueArray2.default)(null)).to.be.null;
        (0, _chai2.default)((0, _uniqueArray2.default)('1,2,3')).to.equal('1,2,3');
        (0, _chai2.default)((0, _uniqueArray2.default)(123)).to.equal(123);

        const obj = {};
        (0, _chai2.default)((0, _uniqueArray2.default)(obj)).to.equal(obj);
    });

    it('Should filter out duplicate items in the array', () => {
        // Empty array
        (0, _chai2.default)((0, _uniqueArray2.default)([])).to.be.an('array').and.to.have.lengthOf(0);

        // Numbers
        (0, _chai2.default)((0, _uniqueArray2.default)([1, 2, 1, 3, 3, 2, 1])).to.deep.equals([1, 2, 3]);

        // Strings
        (0, _chai2.default)((0, _uniqueArray2.default)(['a', 'c', 'b', 'c', 'a'])).to.deep.equals(['a', 'c', 'b']);

        // Mixed values
        (0, _chai2.default)((0, _uniqueArray2.default)([[1, 2], 1, 'a', {}, {}])).to.deep.equals([[1, 2], 1, 'a', {}, {}]);

        // Doesn't perform deep check
        (0, _chai2.default)((0, _uniqueArray2.default)([[1, 2, 1], [1, 2, 2], [1, 2, 3]])).to.deep.equals([[1, 2, 1], [1, 2, 2], [1, 2, 3]]);

        const obj = {};
        // Same object
        (0, _chai2.default)((0, _uniqueArray2.default)([obj, obj, obj])).to.deep.equals([obj]);

        // Mixed objects
        (0, _chai2.default)((0, _uniqueArray2.default)([obj, {}, {}, obj])).to.deep.equals([obj, {}, {}]);
    });
});