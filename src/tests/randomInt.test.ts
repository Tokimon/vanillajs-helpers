import randomInt from '../randomInt';



describe('"randomInt"', () => {
  let randomSpy: jest.SpyInstance;

  beforeAll(() => {
    randomSpy = jest.spyOn(Math, 'random');
  });

  beforeEach(() => randomSpy.mockReset());

  afterAll(() => {
    randomSpy.mockRestore();
  });



  describe('As a direct integer', () => {
    describe.each([-200, 0, 200])('%i', (num) => {
      it.each([0, 0.5, 1])('With random output: %s', (rdn) => {
        randomSpy.mockReturnValue(rdn);

        expect(randomInt(num)).toBe(rdn * num);
      });
    });
  });

  describe('As a range', () => {
    describe('num < num2', () => {
      describe.each([
        [-200, 0],
        [-200, 200],
        [0, 200],
        [100, 200],
        [-200, -100]
      ])('%i ... %i', (num, num2) => {
        it.each([
          [0, num],
          [0.5, (num + num2) / 2],
          [1, num2]
        ])('With random output: %s = %i', (rdn, result) => {
          randomSpy.mockReturnValue(rdn);

          expect(randomInt(num, num2)).toBe(result);
        });
      });
    });

    describe('num2 < num', () => {
      describe.each([
        [0, -200],
        [200, -200],
        [200, 0],
        [200, 100],
        [-100, -200]
      ])('%i ... %i', (num, num2) => {
        it.each([
          [0, num2],
          [0.5, (num + num2) / 2],
          [1, num]
        ])('With random output: %s = %i', (rdn, result) => {
          randomSpy.mockReturnValue(rdn);

          expect(randomInt(num, num2)).toBe(result);
        });
      });
    });
  });
});
