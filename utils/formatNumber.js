'use strict';

import limitDecimals from './limitDecimals';

export default function formatNumber(num, decCount=2, sep='.', dec=',') {
  if( isNaN(num) ) { num = 0; }

  // Format the number to the desired number of decimals and split.
  const parts = `${limitDecimals(num, decCount)}`.split('.');

  // insert separator
  parts[0] = parts[0].replace(/(\d)(?=(\d{3})+$)/g, `$1${sep}`);

  // join with decimal delimiter
  return parts.join(dec);
}
