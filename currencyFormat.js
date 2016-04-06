import formatNumber from './formatNumber';

export default function currencyFormat(thousand = '1.000,00 €') {
  const m = /^(\D*)1(\D*)000(\D*)(\d*)(\D*)$/.exec(thousand);

  if(m) { return (num) => `${m[1]}${formatNumber(num, m[4].length, m[2], m[3])}${m[5]}`; }

  console.warn('Incorrect "thousand" currency Format: "%s" - serving default format:', thousand);
  return currencyFormat('1.000,00 €');
}
