import isObject from './isObject';
import isString from './isString';
import phrasify from './phrasify';
const defaultSettings = {
    upper: false,
    abbr: false,
    numbers: true
};
function caser(opts, str) {
    const regex = opts.upper ? /(?:^|\s+)(.)/g : /\s+(.)/g;
    return phrasify({ numbers: opts.numbers })(str)
        .replace(/\s+(\S+)/g, (all, word) => {
        if (opts.abbr && /^[A-Z]+$/.test(word)) {
            return word;
        }
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    });
}
export default function camelCase(input) {
    const opts = isObject(input) ? Object.assign(defaultSettings, input) : defaultSettings;
    return isString(input) ? caser(opts, input) : (str) => caser(opts, str);
}
