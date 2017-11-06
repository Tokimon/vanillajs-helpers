export default function limitDecimals(num, decCount = 2) {
    num = parseFloat(num);
    if (isNaN(num)) {
        num = 0;
    }
    const countMatch = /^([<>])?(\d+)/.exec(decCount);
    let parts = `${num}`.split('.');
    let decLen = parts[1] ? parts[1].length : 0;
    decCount = countMatch ? Number(countMatch[2]) : 0;
    if (countMatch[1] === '>' && decLen > decCount) {
        decCount = decLen;
    }
    if (countMatch[1] === '<') {
        if (decLen < decCount) {
            decCount = decLen;
        }
        else {
            num = Number(num.toFixed(decCount));
            parts = `${num}`.split('.');
            decLen = parts[1] ? parts[1].length : 0;
            decCount = decLen < decCount ? decLen : decCount;
        }
    }
    return num.toFixed(decCount);
}
