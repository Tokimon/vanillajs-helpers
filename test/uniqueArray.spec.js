/* eslint-env node, mocha */

import expect from './assets/chai';
import uniqueArray from '../uniqueArray';

describe('"uniqueArray"', () => {
  it('Should ignore non array arguments', () => {
    expect(uniqueArray()).to.be.undefined;
    expect(uniqueArray(null)).to.be.null;
    expect(uniqueArray('1,2,3')).to.equal('1,2,3');
    expect(uniqueArray(123)).to.equal(123);

    const obj = {};
    expect(uniqueArray(obj)).to.equal(obj);
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
