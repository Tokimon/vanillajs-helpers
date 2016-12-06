Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isCollection;

var _isArray = require('./isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Determines whether a given object is a collection or not
 * (Object with length and numeric keys)
 * @param  {Mixed} coll - The object to examine
 * @return {Boolean} - Whether the object is a collection or not
 */
function isCollection(coll) {
  return !!coll && ((0, _isArray2.default)(coll) || typeof coll.length !== 'undefined');
}