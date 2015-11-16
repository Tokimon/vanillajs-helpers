/* eslint-env mocha, browser */
/* global expect */

'use strict';

import * as dom from './dom';

let TestParent;
let testRootNode;

describe('"DOM" module:', function() {
  before(() => {
    testRootNode = document.createElement('div');
    testRootNode.innerHTML = `<div><div id="TestParent"><div><div class="test"></div></div></div></div>`;
    testRootNode.id = 'DomTestRootNode';

    document.body.appendChild(testRootNode);

    testRootNode = document.getElementById('DomTestRootNode');
    TestParent = document.getElementById('TestParent');
  });

  after(() => { document.body.removeChild(testRootNode); });

  // --- FIND ---
  describe('dom.find', function() {
    it('should find all elements from the given css query', function() {
      const divs = dom.find('#DomTestRootNode div');
      const testDiv = dom.find('#TestParent .test');

      expect(divs.length).to.equal(4);
      expect(testDiv.length).to.equal(1);
    });

    it('should find all elements with the given css query starting from a given context', function() {
      const divs = dom.find('div', TestParent);
      const testDiv = dom.find('.test', TestParent);

      expect(divs.length).to.equal(2);
      expect(testDiv.length).to.equal(1);
    });
  });

  // --- FINDONE ---
  describe('dom.findOne', function() {
    it('should find an element from the given css query', function() {
      const div = dom.findOne('#DomTestRootNode div');
      const testDiv = dom.findOne('#TestParent .test');

      expect(div).to.not.equal(null);
      expect(testDiv).to.have.property('className', 'test');
    });

    it('should find an element from the given css query from a given context', function() {
      const div = dom.findOne('#DomTestRootNode div', TestParent);
      const testDiv = dom.findOne('.test', TestParent);

      expect(div).to.not.equal(null);
      expect(testDiv).to.have.property('className', 'test');
    });
  });

  // --- EACHNODE ---
  describe('dom.eachNode', function() {
    const spy = sinon.stub();

    beforeEach(() => { spy.reset(); });

    it('should loop over each node in a search query', function() {
      dom.eachNode('#DomTestRootNode div', spy);
      expect(spy.callCount).to.equal(4);

      spy.reset();
      dom.eachNode('.test', spy);
      expect(spy.callCount).to.equal(1);

      spy.reset();
      dom.eachNode('.not-found', spy);
      expect(spy.called).to.be.false;
    });

    it(`should loop over each node, but stop if 'return false' is called`, function() {
      spy.onCall(2).returns(false);
      dom.eachNode('#DomTestRootNode div', spy);
      expect(spy.callCount).to.not.equal(4);
    });
  });

  // --- CLASS ---
  describe('dom.class', function() {
    const div = document.createElement('div');

    beforeEach(() => { div.className = ''; });

    // --- CLASS.ADD ---
    describe('add', function() {
      it('should add a class name to an element', function() {
        dom.classname.add(div, 'test');
        expect(div.className).to.equal('test');
      });

      it('should not add class name more than once', function() {
        dom.classname.add(div, 'test');
        dom.classname.add(div, 'test');
        expect(div.className).to.equal('test');
      });

      it('should be able to add a several class names separated by space (" "), to an element', function() {
        dom.classname.add(div, 'test more');
        expect(div.className).to.equal('test more');

        dom.classname.add(div, 'even more');
        expect(div.className).to.equal('test more even');
      });
    });

    // --- CLASS.REMOVE ---
    describe('remove', function() {
      it('should remove a class name from an element', function() {
        div.className = 'test remove';
        dom.classname.remove(div, 'remove');
        expect(div.className).to.equal('test');
      });

      it('should remove duplicate class names from an element', function() {
        div.className = 'test remove remove';
        dom.classname.remove(div, 'remove');
        expect(div.className).to.equal('test');
      });

      it('should be able to remove a several class names separated by space (" "), from an element', function() {
        div.className = 'test remove';
        dom.classname.remove(div, 'test remove');
        expect(div.className).to.equal('');

        div.className = 'test remove more more';
        dom.classname.remove(div, 'remove more');
        expect(div.className).to.equal('test');
      });
    });

    // --- CLASS.HAS ---
    describe('has', function() {
      it('should indicate if a css class exists on the element', function() {
        div.className = 'test findme';
        expect(dom.classname.has(div, 'findme')).to.be.true;
      });

      it('should indicate if a list of css classes exists on the element', function() {
        div.className = 'test findme andme';
        expect(dom.classname.has(div, 'test findme andme')).to.be.true;
      });
    });

    // --- CLASS.TOGGLE ---
    describe('has', function() {
      it(`should add a css class to en element if it doesn't exist` , function() {
        dom.classname.toggle(div, 'added');
        expect(div.classList.contains('added')).to.be.true;
      });

      it('should remove a css class from en element if it exist', function() {
        div.className = 'remove';
        dom.classname.toggle(div, 'remove');
        expect(div.classList.contains('remove')).to.be.false;
      });

      it('Should toggle a list of classnames', function() {
        div.className = 'test class1 class3';

        dom.classname.toggle(div, 'class2 class3 class4');
        expect(dom.classname.has(div, 'test class1 class2 class4')).to.be.true;

        dom.classname.toggle(div, 'class1 class2 class4');
        expect(dom.classname.has(div, 'test')).to.be.true;

        dom.classname.toggle(div, 'class1 class2 class3 class4');
        expect(dom.classname.has(div, 'test class1 class2 class3 class4')).to.be.true;
      });
    });
  });

  // --- DATA ---
  describe('dom.data', function() {
    const div = document.createElement('div');

    beforeEach(() => {
      div.setAttribute('data-test', 'toto');
    });

    it(`should read the value of a 'data-' attribute`, function() {
      expect(dom.data(div, 'test')).to.equal('toto');
    });

    it(`should add the value to a 'data-' attribute`, function() {
      expect(dom.data(div, 'test', 'tata')).to.equal('toto');
      expect(div.getAttribute('data-test')).to.equal('tata');
    });

    it(`should fallback to 'dom.attr' when 'elm.dataset' is not found`, function() {
      const fake = {
        getAttribute: div.getAttribute.bind(div),
        setAttribute: div.setAttribute.bind(div)
      };

      expect(dom.data(fake, 'test')).to.equal('toto');
      expect(dom.data(fake, 'test', 'tata')).to.equal('toto');
      expect(fake.getAttribute('data-test')).to.equal('tata');
    });
  });

  // --- ATTR ---
  describe('dom.attr', function() {
    const div = document.createElement('div');

    beforeEach(() => {
      div.setAttribute('title', 'old title');
    });

    it(`should read the value of an attribute`, function() {
      expect(dom.attr(div, 'title')).to.equal('old title');
    });

    it(`should set the value of an attribute`, function() {
      expect(dom.attr(div, 'title', 'new title')).to.equal('old title');
      expect(div.getAttribute('title')).to.equal('new title');
    });
  });

  // --- CHILDREN ---
  describe('dom.children', function() {
    it('should find all child elements of an element', function() {
      expect(dom.children(TestParent).length).to.equal(1);
      expect(dom.children().length).to.equal(0);

      const mock = { childNodes: TestParent.childNodes };

      expect(dom.children(mock).length).to.equal(1);
    });
  });
});