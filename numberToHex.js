import leadingZero from './leadingZero';
export default function numberToHex(num = 0) {
    return leadingZero(Math.round(num).toString(16));
}
;
