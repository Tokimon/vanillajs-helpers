import safeDateChange from '../safeDateChange';



describe('"safeDateChange"', () => {
  it('Does not change the from date', () => {
    const from = new Date(2021, 0, 1);
    const to = new Date(from);
    to.setMonth(1);

    safeDateChange(from, to);

    expect(from.toLocaleDateString()).toBe('01/01/2021');
    expect(to.toLocaleDateString()).toBe('01/02/2021');
  });

  describe('Does not change date when within the bounds of the new date month', () => {
    it('Going from a month with 30 days to one with 31 days', () => {
      const from = new Date(2021, 3, 30);
      const to = new Date(from);
      to.setMonth(4);

      safeDateChange(from, to);

      expect(to.toLocaleDateString()).toBe('30/05/2021');
    });

    it('Going from 15th February to Marts', () => {
      const from = new Date(2021, 1, 15);
      const to = new Date(from);
      to.setMonth(2);

      safeDateChange(from, to);

      expect(to.toLocaleDateString()).toBe('15/03/2021');
    });

    it('Going from 31st Dec to January', () => {
      const from = new Date(2020, 11, 31);
      const to = new Date(from);
      to.setFullYear(2021);
      to.setMonth(0);

      safeDateChange(from, to);

      expect(to.toLocaleDateString()).toBe('31/01/2021');
    });

    it('Going back several months', () => {
      const from = new Date(2021, 7, 31);
      const to = new Date(from);
      to.setMonth(0);

      safeDateChange(from, to);

      expect(to.toLocaleDateString()).toBe('31/01/2021');
    });
  });

  describe('Corrects the day to the last in the given month, when it is out of bounds', () => {
    it('Going from a month with 31 days to one with 30 days', () => {
      const from = new Date(2021, 2, 31);
      const to = new Date(from);
      to.setMonth(3);

      safeDateChange(from, to);

      expect(to.toLocaleDateString()).toBe('30/04/2021');
    });

    it('Going from January to February', () => {
      const from = new Date(2021, 0, 31);
      const to = new Date(from);
      to.setMonth(1);

      safeDateChange(from, to);

      expect(to.toLocaleDateString()).toBe('28/02/2021');
    });

    it('Going from January to February on a leap year', () => {
      const from = new Date(2020, 0, 31);
      const to = new Date(from);
      to.setMonth(1);

      safeDateChange(from, to);

      expect(to.toLocaleDateString()).toBe('29/02/2020');
    });

    it('Going to February from December', () => {
      const from = new Date(2021, 11, 31);
      const to = new Date(from);
      to.setMonth(1);

      safeDateChange(from, to);

      expect(to.toLocaleDateString()).toBe('28/02/2021');
    });
  });
});
