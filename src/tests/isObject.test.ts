import isObject from '../isObject';



class TestObj {
  name = '';
  constructor(name: string) { this.name = name; }
}



describe('"isObject"', () => {
  it('Should return true for Object values', () => {
    // eslint-disable-next-line no-new-object
    const O = new Object();
    const Test = new TestObj('test');

    expect(isObject({})).toBe(true);
    expect(isObject(O)).toBe(true);
    expect(isObject(Object.create({}))).toBe(true);
    expect(isObject(Test)).toBe(true);
  });

  it('Should return false for non Object values', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject('Object')).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject(123)).toBe(false);
    expect(isObject(NaN)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(TestObj)).toBe(false);
  });
});
