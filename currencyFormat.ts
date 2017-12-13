import formatNumber from './formatNumber';



export type CurrencyFomatter = (num: number) => string;



/**
 * Creates a function that formats a number to a given currency format (eg. 1000 -> 1.000,00 €)
 *
 * The template string should be the number 1000 described with before and after
 * symbols (no numbers), a thousand separator and a decimal separator followed by
 * the number of decimals defined with zeroes: `[before]1[thou.]000[dec.]00[after] -> $ 1,000.00`
 *
 * ```ts
 * // Format number to default currency format (euro)
 * const euro = currencyFormat();
 * euro(2345234.678); // -> '2.345.234,68 €'
 *
 * // Format number to USD currency format
 * const usd = currencyFormat('$ 1,000.00');
 * usd(2345234.678); // -> '$ 2,345,234.68'
 *
 * // Format number to custom currency format
 * const custom = currencyFormat('# 1-000;00 ¤');
 * custom(2345234.678); // -> '# 2-345-234;68 ¤'
 *
 * // Specifying number of decimals
 * const sixdecimals = currencyFormat('$ 1,000.000000');
 * sixdecimals(2345234.678); // -> '$ 2,345,234.678000'
 * sixdecimals(234.12345678); // -> '$ 234.123457'
 * ```
 */
export default function currencyFormat(thousand: string = '1.000,00 €'): CurrencyFomatter {
  const m = /^(\D*)1(\D*)000(\D*)(\d*)(\D*)$/.exec(thousand);

  if (m) {
    const [, before, thousandSep, decimalSep, dec, after] = m;
    const settings = { decimals: dec.length, thousandSep, decimalSep };
    return (num: number) => `${before}${formatNumber(num, settings)}${after}`;
  }

  return currencyFormat('1.000,00 €');
}
