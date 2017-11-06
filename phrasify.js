import isObject from './isObject';
import isString from './isString';
const defaultSettings = { numbers: false };
function convert(opts, str = '') {
    str = `${str}`.replace(/([A-Z])([a-z])/g, (m) => ` ${m}`);
    if (opts.numbers) {
        str = str.replace(/(\d+)/g, ' $1 ');
    }
    return str.replace(/[^a-z\d]+/gi, ' ').trim();
}
export default function phrasify(input = {}) {
    const opts = isObject(input) ? Object.assign(defaultSettings, input) : defaultSettings;
    return isString(input) ? convert(opts, input) : (str) => convert(opts, str);
}
