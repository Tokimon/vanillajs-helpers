/* eslint-env node, mocha */
/* eslint-disable no-unused-expressions */

import * as sinon from 'sinon';
import expect from './assets/chai';
import indexLoop, { ArrayLike } from '../ts/indexLoop';

describe('"indexLoop"', () => {
  it('Should indexLoop an array', () => {
    const arr = [1, 2, 3];
    const cb = sinon.spy();

    indexLoop(arr, cb);

    expect(cb).to.have.been.calledThrice;
    expect(cb.firstCall).to.have.been.calledWith(1, 0, arr);
    expect(cb.secondCall).to.have.been.calledWith(2, 1, arr);
    expect(cb.thirdCall).to.have.been.calledWith(3, 2, arr);
  });

  it('Should indexLoop an iterable collection (like NodeList)', () => {
    const nodes = { 0: 'one', 1: 'two', 2: 'three', length: 3 };
    const cb = sinon.spy();

    indexLoop(nodes, cb);

    expect(cb).to.have.been.calledThrice;
    expect(cb.firstCall).to.have.been.calledWith(nodes[0], 0, nodes);
    expect(cb.secondCall).to.have.been.calledWith(nodes[1], 1, nodes);
    expect(cb.thirdCall).to.have.been.calledWith(nodes[2], 2, nodes);
  });

  it('Should indexLoop a single item', () => {
    const cb = sinon.spy();
    const obj = {} as ArrayLike;

    indexLoop(obj, cb);

    expect(cb).to.have.been.calledOnce;
    expect(cb.firstCall).to.have.been.calledWith(obj, 0, obj);
  });

  it('Should break loop if false is returned', () => {
    const arr = [1, 2, 3];
    const cb = sinon.stub();
    cb.onSecondCall().returns(false);

    indexLoop(arr, cb);

    expect(cb).to.have.been.calledTwice;
    expect(cb.firstCall).to.have.been.calledWith(1, 0, arr);
    expect(cb.secondCall).to.have.been.calledWith(2, 1, arr);
  });

  it('Should return the length of the collection', () => {
    expect(indexLoop([1, 2, 3], () => {})).to.equal(3);
  });

  it('Should return 0 if cb or iterable is not defined', () => {
    expect(indexLoop([], null)).to.equal(0);
    expect(indexLoop(null, () => {})).to.equal(0);
    expect(indexLoop(null, null)).to.equal(0);
  });
});