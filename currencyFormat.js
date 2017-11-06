import formatNumber from './formatNumber';
export default function currencyFormat(thousand = '1.000,00 €') {
    const m = /^(\D*)1(\D*)000(\D*)(\d*)(\D*)$/.exec(thousand);
    if (m) {
        const [before, thousand, comma, dec, after] = m;
        const settings = { decimals: dec.length, thousand, comma };
        return (num) => `${before}${formatNumber(num, settings)}${after}`;
    }
    return currencyFormat('1.000,00 €');
}
