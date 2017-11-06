import limitDecimals from './limitDecimals';



export interface FormatNumberSettings {
  decimals: number,
  thousand: string,
  comma: string
}



const defaultSettings: FormatNumberSettings = {
  decimals: 2,
  thousand: '.',
  comma: ','
};



/**
 * Formats a number with defined thousand and decimal separator, and a decimal limit
 * (see 'limitDecimals.js' for details on `decCount`)
 */
export default function formatNumber(num: number, settings: FormatNumberSettings) {
  const { decimals, thousand, comma } = Object.assign({}, defaultSettings, settings);

  // Format the number to the desired number of decimals and split.
  const parts = `${limitDecimals(num, decimals)}`.split('.');

  // Insert separator
  parts[0] = parts[0].replace(/(\d)(?=(\d{3})+$)/g, `$1${thousand}`);

  // Join with decimal delimiter
  return parts.join(comma);
}
