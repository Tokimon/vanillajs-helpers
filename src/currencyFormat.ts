import formatNumber from './formatNumber';



export type CurrencyFomatter = (num: number) => string;



/**
 * Creates a function that formats a number to a given currency format (eg. 1000 -> 1.000,00 €)
 *
 * The template string should be the number 1000 described with before and after
 * symbols (no numbers), a thousand separator and a decimal separator followed by
 * the number of decimals defined with zeroes: `[before]1[thou.]000[dec.]00[after] -> $ 1,000.00`
 *
 * @example
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
 * const sixDecimals = currencyFormat('$ 1,000.000000');
 * sixDecimals(2345234.678); // -> '$ 2,345,234.678000'
 * sixDecimals(234.12345678); // -> '$ 234.123457'
 * ```
 *
 * @param thousand - The template for how to format a number, takes an example of 1000 in the desired curreny (eg. '1.000,00 €')
 * @return - Curried function to format a given number
 */
export default function currencyFormat(thousand = '1.000,00 €'): CurrencyFomatter {
  const m = /^(\D*)1(\D*)000(\D*)(\d*)(\D*)$/.exec(thousand);

  if (m) {
    const [, before, thousand, decimal, dec, after] = m;

    const settings = {
      decimals: dec.length,
      thousand,
      decimal
    };

    return (num: number) => `${before}${formatNumber(num, settings)}${after}`;
  }

  return currencyFormat('1.000,00 €');
}
