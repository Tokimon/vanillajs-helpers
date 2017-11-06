import formatNumber from './formatNumber';



/**
 * Create a function that formats a number to a given currency format (eg. 1000 -> 1.000,00 €)
 */
export default function currencyFormat(thousand: string = '1.000,00 €'): Function {
  const m = /^(\D*)1(\D*)000(\D*)(\d*)(\D*)$/.exec(thousand);

  if(m) {
    const [before, thousand, comma, dec, after] = m;
    const settings = { decimals: dec.length, thousand, comma };
    return (num: number) => `${before}${formatNumber(num, settings)}${after}`;
  }

  return currencyFormat('1.000,00 €');
}
