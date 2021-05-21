import expect from './assets/chai';
import currencyFormat from '../currencyFormat';

describe('"currencyFormat"', () => {
  it('Should format number to default currency format (euro)', () => {
    expect(currencyFormat()(1100.234)).toBe('1.100,23 €');
    expect(currencyFormat('')(1100.234)).toBe('1.100,23 €');
  });

  it('Should format number to a specified format', () => {
    expect(currencyFormat('$ 1,000.00')(1100.234)).toBe('$ 1,100.23');
    expect(currencyFormat('~1|000=00')(1100.234)).toBe('~1|100=23');
  });
});
