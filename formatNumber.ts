import limitDecimals from './limitDecimals';



export interface FormatNumberSettings {
  decimals?: number|string;
  thousandSep?: string;
  decimalSep?: string;
}



const defaultSettings: FormatNumberSettings = {
  decimals: 2,
  thousandSep: '.',
  decimalSep: ','
};



/**
 * Formats a number with defined thousand and decimal separator, and a decimal limit
 * (see `limitDecimals` for details on `decCount`)
 *
 * ```ts
 * // Default format
 * formatNumber(123456); // -> 123.456,00
 *
 * // Custom format
 * formatNumber(123456, { decimals: '>3', thousandSep: '-', decimalSep: ':' }); // -> 123-456:000
 * ```
 */
export default function formatNumber(num: number, settings?: FormatNumberSettings): string {
  const { decimals, thousandSep, decimalSep } = Object.assign({}, defaultSettings, settings);

  // Format the number to the desired number of decimals and split.
  const parts = limitDecimals(num, decimals).split('.');

  // Insert separator
  parts[0] = parts[0].replace(/(\d)(?=(\d{3})+$)/g, `$1${thousandSep}`);

  // Join with decimal delimiter
  return parts.join(decimalSep);
}
