/* eslint-env node, mocha */

import expect from './assets/chai';
import safeDateChange from '../safeDateChange';

describe('"eachWord"', () => {
  it('Should not change date if it is within the bounds', () => {
    let fromDate = new Date(2017, 0, 30);
    let toDate = new Date(fromDate.getTime());
    toDate.setMonth(2);

    safeDateChange(fromDate, toDate);
    expect([toDate.getMonth(), toDate.getDate()]).to.be.have.members([2, 30]);

    fromDate = new Date(2017, 0, 4);
    toDate = new Date(fromDate.getTime());
    toDate.setMonth(1);

    safeDateChange(fromDate, toDate);
    expect([toDate.getMonth(), toDate.getDate()]).to.be.have.members([1, 4]);

    fromDate = new Date(2017, 3, 30);
    toDate = new Date(fromDate.getTime());
    toDate.setMonth(4);

    safeDateChange(fromDate, toDate);
    expect([toDate.getMonth(), toDate.getDate()]).to.be.have.members([4, 30]);
  });

  it('Should change date if the month has skipped', () => {
    let fromDate = new Date(2017, 0, 30);
    let toDate = new Date(fromDate.getTime());
    toDate.setMonth(1);

    safeDateChange(fromDate, toDate);
    expect([toDate.getMonth(), toDate.getDate()]).to.be.have.members([1, 28]);

    fromDate = new Date(2016, 0, 31);
    toDate = new Date(fromDate.getTime());
    toDate.setMonth(1);

    safeDateChange(fromDate, toDate);
    expect([toDate.getMonth(), toDate.getDate()]).to.be.have.members([1, 29]);

    fromDate = new Date(2017, 4, 31);
    toDate = new Date(fromDate.getTime());
    toDate.setMonth(3);

    safeDateChange(fromDate, toDate);
    expect([toDate.getMonth(), toDate.getDate()]).to.be.have.members([3, 30]);
  });
});
