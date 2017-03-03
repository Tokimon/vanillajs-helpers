/* eslint-env node, mocha */
/* eslint-disable no-new-object, no-unused-expressions */

import expect from './assets/chai';
import isObject from '../isObject';

describe('"isObject"', () => {
  function Obj(name) { if(this) { this.name = name; } }

  it('Should return true for Object values', () => {
    expect(isObject({})).to.be.true;
    expect(isObject(new Object())).to.be.true;
    expect(isObject(Object.create({}))).to.be.true;
    expect(isObject(new Obj('test'))).to.be.true;
  });

  it('Should return false for non Object values', () => {
    expect(isObject(null)).to.be.false;
    expect(isObject('Object')).to.be.false;
    expect(isObject()).to.be.false;
    expect(isObject([])).to.be.false;
    expect(isObject(123)).to.be.false;
    expect(isObject(NaN)).to.be.false;
    expect(isObject(undefined)).to.be.false;
    expect(isObject(Obj)).to.be.false;
    expect(isObject(Obj('test'))).to.be.false;
  });
});
