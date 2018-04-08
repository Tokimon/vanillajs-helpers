/* tslint:disable:no-new-object, no-unused-expression */

import expect from './assets/chai';
import isObject from '../isObject';

describe('"isObject"', () => {
  class TestObj {
    name = '';
    constructor(name: string) { this.name = name; }
  }

  it('Should return true for Object values', () => {
    const O = new Object();
    const Test = new TestObj('test');
    expect(isObject({})).to.be.true;
    expect(isObject(O)).to.be.true;
    expect(isObject(Object.create({}))).to.be.true;
    expect(isObject(Test)).to.be.true;
  });

  it('Should return false for non Object values', () => {
    expect(isObject(null)).to.be.false;
    expect(isObject('Object')).to.be.false;
    expect(isObject([])).to.be.false;
    expect(isObject(123)).to.be.false;
    expect(isObject(NaN)).to.be.false;
    expect(isObject(undefined)).to.be.false;
    expect(isObject(TestObj)).to.be.false;
  });
});
