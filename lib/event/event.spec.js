/* eslint-env mocha, browser */
/* global expect, _triggerEvent */

'use strict';

import event from './event';

let div;
const clickSpy = sinon.spy();
const evtData = { extra: 'data' };

function click(elm) {
  _triggerEvent(elm, 'click');
}

describe('"event" module:', function() {
  beforeEach(() => {
    div = document.createElement('div');
    clickSpy.reset();
  });

  describe('event.on', function() {
    it('should bind an event handler to a given node', function() {
      expect(clickSpy.called).to.be.false;
      event.on(div, 'click', clickSpy);
      click(div);
      expect(clickSpy.called).to.be.true;
    });
  });

  describe('event.off', function() {
    it('should remove an event handler from a given node', function() {
      expect(clickSpy.called).to.be.false;
      event.off(div, 'click', clickSpy);
      click(div);
      expect(clickSpy.called).to.be.false;
    });
  });

  describe('event.trigger', function() {
    it('should trigger the event handlers on a given node', function() {
      expect(clickSpy.called).to.be.false;
      div.addEventListener('click', clickSpy, true);
      event.trigger(div, 'click');
      expect(clickSpy.called).to.be.true;
    });

    it('should be able to add custom data to the event method', function() {
      expect(clickSpy.called).to.be.false;
      div.addEventListener('click', clickSpy, true);
      event.trigger(div, 'click', evtData);
      expect(clickSpy.called).to.be.true;
      expect(clickSpy.firstCall.args[0].detail).to.eql(evtData);
    });

    it('should fallback to old event creation method', function() {
      expect(clickSpy.called).to.be.false;

      const CE = window.CustomEvent;
      window.CustomEvent = null;

      div.addEventListener('click', clickSpy, true);
      event.trigger(div, 'click', evtData);

      window.CustomEvent = CE;

      expect(clickSpy.called).to.be.true;
      expect(clickSpy.firstCall.args[0].detail).to.eql(evtData);
    });
  });
});