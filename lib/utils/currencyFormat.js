'use strict';

import formatNumber from './formatNumber';

export default function currencyFormat( thousand = '1.000,00 €') {
  const m = /^(\D*)1(\D*)000(\D*)(\d*)(\D*)$/.exec(thousand);

  if( !m ) {
    console.warn('Currency Format: "Thousand" template mal formatted (serving default format):', thousand);
    return (num) => formatNumber(num) + ' €';
  }

  return (function(before, decLen, thou, dec, after) => {
    return (num) => before + formatNumber(num, decLen, thou, dec) + after;
  })(m[5], m[4].length, m[2], m[3], m[5]);
}
