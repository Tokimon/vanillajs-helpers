/* eslint-env node, mocha */
/* eslint-disable no-unused-expressions */

import * as sinon from 'sinon';
import expect from './assets/chai';
import eachWord from '../eachWord';

describe('"eachWord"', () => {
  it('Should iterate a phrase with words separated by default characters ("_", "-" or " ")', () => {
    const phrase = 'iterate over-this_phrase';
    const expected = ['iterate', 'over', 'this', 'phrase'];
    const cb = sinon.spy();

    eachWord(phrase, cb);

    expect(cb).to.have.been.callCount(4);
    expect(cb.firstCall).to.have.been.calledWith('iterate', 0, expected);
    expect(cb.secondCall).to.have.been.calledWith('over', 1, expected);
    expect(cb.thirdCall).to.have.been.calledWith('this', 2, expected);
    expect(cb.getCall(3)).to.have.been.calledWith('phrase', 3, expected);
  });

  it('Should iterate a phrase with words separated by a defined character', () => {
    const phrase = 'iterate over-this_phrase';
    const expected = ['iterate', 'over-this_phrase'];
    const cb = sinon.spy();

    eachWord(phrase, cb, ' ');

    expect(cb).to.have.been.calledTwice;
    expect(cb.firstCall).to.have.been.calledWith('iterate', 0, expected);
    expect(cb.secondCall).to.have.been.calledWith('over-this_phrase', 1, expected);
  });

  it('Should iterate a phrase using a regular expression', () => {
    const phrase = 'iterate over-this_phrase';
    const regex = /[ -]+/;
    const expected = ['iterate', 'over', 'this_phrase'];
    const cb = sinon.spy();

    eachWord(phrase, cb, regex);

    expect(cb).to.have.been.calledThrice;
    expect(cb.firstCall).to.have.been.calledWith('iterate', 0, expected);
    expect(cb.secondCall).to.have.been.calledWith('over', 1, expected);
    expect(cb.thirdCall).to.have.been.calledWith('this_phrase', 2, expected);
  });

  it('Should break loop if false is returned', () => {
    const phrase = 'iterate over-this_phrase';
    const expected = ['iterate', 'over', 'this', 'phrase'];
    const cb = sinon.stub();
    cb.onSecondCall().returns(false);

    eachWord(phrase, cb);

    expect(cb).to.have.been.calledTwice;
    expect(cb.firstCall).to.have.been.calledWith('iterate', 0, expected);
    expect(cb.secondCall).to.have.been.calledWith('over', 1, expected);
  });

  it('Should return the number of words in the phrase', () => {
    expect(eachWord('space separated phrase', () => {})).to.equal(3);
    expect(eachWord('space separated phrase')).to.equal(3);
  });

  it('Should return 0 if phrase is not defined', () => {
    expect(eachWord(null)).to.equal(0);
  });
});
