'use strict';

export function randomId(length) {
  return Math.random().toString(36).substr(2, length);
}



function limitDecimals( num, decCount ) {
  const countMatch = /^([<>])?(\d+)/.exec(decCount);
  let parts = `${num}`.split('.');
  let decLen = parts[1] ? parts[1].length : 0;

  decCount = countMatch ? +countMatch[2] : 0;

  // minimum number of decimals
  if( countMatch[1] === '>' && decLen > decCount ) {
    decCount = decLen;
  }

  // maximum number of decimals
  if( countMatch[1] === '<' ) {
    if(decLen < decCount) {
      decCount = decLen;
    } else {
      num = +num.toFixed(decCount);
      parts =`${num}`.split('.');
      decLen = parts[1] ? parts[1].length : 0;

      decCount = decLen < decCount ? decLen : decCount;
    }
  }

  return num.toFixed(decCount);
}

export function formatNumber(num, decCount=2, sep='.', dec=',') {
  if( isNaN(num) ) { num = 0; }

  // Format the number to the desired number of decimals and split.
  const parts = `${limitDecimals(num, decCount)}`.split('.');

  // insert separator
  parts[0] = parts[0].replace(/(\d)(?=(\d{3})+$)/g, `$1${sep}`);

  // join with decimal delimiter
  return parts.join(dec);
}

