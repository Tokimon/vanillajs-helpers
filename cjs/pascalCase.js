Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pascalCase;

var _camelCase = require('./camelCase');

var _camelCase2 = _interopRequireDefault(_camelCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Transform a phrase into a PascalCased word (eg. 'pascal case' -> 'PascalCase')
 * @param {String} str - String to transform
 * @param {String=" "} separator - Separator between words
 * @return {String} - Transformed string
 */
function pascalCase(str) {
  return (0, _camelCase2.default)({ upper: true })(str);
}