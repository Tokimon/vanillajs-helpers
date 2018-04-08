import expect from './assets/chai';
import uniqueArray from '../uniqueArray';

describe('"uniqueArray"', () => {
  it('Should filter out duplicate items in the array (Empty)', () => {
    expect(uniqueArray([])).to.be.an('array').and.to.have.lengthOf(0);
  });

  it('Should filter out duplicate items in the array (Numbers)', () => {
    expect(uniqueArray([1, 2, 1, 3, 3, 2, 1])).to.deep.equals([1, 2, 3]);
  });

  it('Should filter out duplicate items in the array (Strings)', () => {
    expect(uniqueArray(['a', 'c', 'b', 'c', 'a'])).to.deep.equals(['a', 'c', 'b']);
  });

  it('Should filter out duplicate items in the array (Mixed values)', () => {
    expect(uniqueArray([[1, 2], 1, 'a', 'a', {}, {}])).to.deep.equals([[1, 2], 1, 'a', {}, {}]);
  });

  it('Should filter out duplicate items in the array (No deep check)', () => {
    expect(uniqueArray([[1, 2, 1], [1, 2, 2], [1, 2, 3]])).to.deep.equals([[1, 2, 1], [1, 2, 2], [1, 2, 3]]);
  });

  it('Should filter out duplicate items in the array (Objects)', () => {
    const obj = {};
    expect(uniqueArray([obj, obj, obj, {}, {}])).to.deep.equals([obj, {}, {}]);
  });
});
