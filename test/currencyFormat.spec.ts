import expect from './assets/chai';
import currencyFormat from '../ts/currencyFormat';

describe('"currencyFormat"', () => {
  it('Should format number to default currency format', () => {
    expect(currencyFormat()(1100.234)).to.equal('1.100,23 €');
    expect(currencyFormat('')(1100.234)).to.equal('1.100,23 €');
    expect(currencyFormat(null)(1100.234)).to.equal('1.100,23 €');
  });

  it('Should format number to a specified format', () => {
    expect(currencyFormat('$ 1,000.00')(1100.234)).to.equal('$ 1,100.23');
    expect(currencyFormat('~1|000=00')(1100.234)).to.equal('~1|100=23');
  });

  it('Should format 0 when a non number is specified', () => {
    expect(currencyFormat()(null)).to.equal('0,00 €');
    expect(currencyFormat()(undefined)).to.equal('0,00 €');
  });
});
