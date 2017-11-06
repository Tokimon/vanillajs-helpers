/* eslint-env node, mocha */

import expect from './assets/chai';
import uniqueArray from '../uniqueArray';

describe('"uniqueArray"', () => {
  it('Should return empty array for falsy values', () => {
    expect(uniqueArray()).to.eql([]);
    expect(uniqueArray(null)).to.eql([]);
  });

  it('Should return an array containing the given value if it is not an array', () => {
    const obj = {};
    expect(uniqueArray(obj)).to.eql([obj]);
    expect(uniqueArray('1,2,3')).to.eql(['1,2,3']);
    expect(uniqueArray(123)).to.eql([123]);
  });

  it('Should filter out duplicate items in the array', () => {
    // Empty array
    expect(uniqueArray([])).to.be.an('array').and.to.have.lengthOf(0);

    // Numbers
    expect(uniqueArray([1, 2, 1, 3, 3, 2, 1])).to.deep.equals([1, 2, 3]);

    // Strings
    expect(uniqueArray(['a', 'c', 'b', 'c', 'a'])).to.deep.equals(['a', 'c', 'b']);

    // Mixed values
    expect(uniqueArray([[1, 2], 1, 'a', {}, {}])).to.deep.equals([[1, 2], 1, 'a', {}, {}]);

    // Doesn't perform deep check
    expect(uniqueArray([[1, 2, 1], [1, 2, 2], [1, 2, 3]])).to.deep.equals([[1, 2, 1], [1, 2, 2], [1, 2, 3]]);

    const obj = {};
    // Same object
    expect(uniqueArray([obj, obj, obj])).to.deep.equals([obj]);

    // Mixed objects
    expect(uniqueArray([obj, {}, {}, obj])).to.deep.equals([obj, {}, {}]);
  });
});
