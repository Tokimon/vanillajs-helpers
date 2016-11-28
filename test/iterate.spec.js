/* eslint-env node, mocha */

import sinon from 'sinon';
import expect from './assets/chai';
import iterate from '../iterate';

describe('"iterate"', () => {
  it('Should iterate an array', () => {
    const arr = [1, 2, 3];
    const cb = sinon.spy();

    iterate(arr, cb);

    expect(cb).to.have.been.calledThrice;
    expect(cb.firstCall).to.have.been.calledWith(1, 0, arr);
    expect(cb.secondCall).to.have.been.calledWith(2, 1, arr);
    expect(cb.thirdCall).to.have.been.calledWith(3, 2, arr);
  });

  it('Should iterate an iterable collection (like NodeList)', () => {
    const nodes = { 0: 'one', 1: 'two', 2: 'three', length: 3 };
    const cb = sinon.spy();

    iterate(nodes, cb);

    expect(cb).to.have.been.calledThrice;
    expect(cb.firstCall).to.have.been.calledWith(nodes[0], 0, nodes);
    expect(cb.secondCall).to.have.been.calledWith(nodes[1], 1, nodes);
    expect(cb.thirdCall).to.have.been.calledWith(nodes[2], 2, nodes);
  });

  it('Should iterate a single item', () => {
    const cb = sinon.spy();
    const obj = {};

    iterate(obj, cb);

    expect(cb).to.have.been.calledOnce;
    expect(cb.firstCall).to.have.been.calledWith(obj, 0, obj);
  });

  it('Should break loop if false is returned', () => {
    const arr = [1, 2, 3];
    const cb = sinon.stub();
    cb.onSecondCall().returns(false);

    iterate(arr, cb);

    expect(cb).to.have.been.calledTwice;
    expect(cb.firstCall).to.have.been.calledWith(1, 0, arr);
    expect(cb.secondCall).to.have.been.calledWith(2, 1, arr);
  });

  it('Should return the length of the collection', () => {
    expect(iterate([1, 2, 3], () => {})).to.equal(3);
  });

  it('Should return 0 if cb or iterable is not defined', () => {
    expect(iterate()).to.equal(0);
    expect(iterate([1])).to.equal(0);
    expect(iterate(null, () => {})).to.equal(0);
  });
});
