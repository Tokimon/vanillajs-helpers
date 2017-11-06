import isArray from './isArray';
import isNumber from './isNumber';
import hex from './numberToHex';
export default function RGBToHex(r, g, b, a) {
    if (isArray(r)) {
        [r, g, b, a] = r;
    }
    const alpha = isNumber(a) ? hex((a > 1 ? a / 100 : a) * 255) : '';
    return `#${hex(r)}${hex(g)}${hex(b)}${alpha}`;
}
