'use strict';

export default function limitDecimals( num, decCount ) {
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
