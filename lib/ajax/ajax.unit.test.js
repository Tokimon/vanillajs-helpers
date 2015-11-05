'use strict';

import ajax from './ajax';

let server;

// FIXME: For the moment we only test for the most common types, event though more types are supported:
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#send()
const formData = new FormData();
const string = 'field1=test&field2=more testing';
const obj = { field1: 'test', field2: 'more testing' };

function initREST() {
  server.respondWith('GET', '/get',
      [200, { 'Content-Type': 'application/json' },
        '{ "status": "success" }']);

  server.respondWith('POST', '/post',
      [200, { 'Content-Type': 'application/json' },
        '{ "status": "success" }']);

  server.respondWith('PUT', '/put',
      [200, { 'Content-Type': 'application/json' },
        '{ "status": "success" }']);

  server.respondWith('DELETE', '/delete',
      [200, { 'Content-Type': 'application/json' },
        '{ "status": "success" }']);
}

function initCSRF() {
  server.respondWith('GET', '/csrfToken',
      [200, { 'Content-Type': 'application/json' },
        '{ "_csrf": "csrftoken" }']);
}

function initMalformed() {
  server.respondWith('GET', '/malformedjson',
      [200, { 'Content-Type': 'application/json' },
        `This is not JSON`]);
}

function startServer() {
  server = sinon.fakeServer.create({ respondImmediately: true });
}

function stopServer() {
  server.restore();
}

describe('"AJAX" module:', function() {
  // --- SEND ---
  describe('ajax.send', function() {

    before(() => {
      startServer();
      initREST();
      initMalformed();
    });

    after(() => {
      stopServer();
    });

    describe('REST requests', function() {
      it('should successfully execute a GET request', function() {
        return expect(ajax.send('/get', { method: 'get' })).to.eventually.have.property('status', 'success');
      });

      it('should successfully execute a POST request', function() {
        return Promise.all([
          expect(ajax.send('/post', {
            method: 'post',
            data: formData
          })).to.eventually.have.property('status', 'success'),
          expect(ajax.send('/post', { method: 'post', data: string })).to.eventually.have.property('status', 'success'),
          expect(ajax.send('/post', { method: 'post', data: obj })).to.eventually.have.property('status', 'success')
        ]);
      });

      it('should successfully execute a PUT request', function() {
        return Promise.all([
          expect(ajax.send('/put', { method: 'put', data: formData })).to.eventually.have.property('status', 'success'),
          expect(ajax.send('/put', { method: 'put', data: string })).to.eventually.have.property('status', 'success'),
          expect(ajax.send('/put', { method: 'put', data: obj })).to.eventually.have.property('status', 'success')
        ]);
      });

      it('should successfully execute a DELETE request', function() {
        return Promise.all([
          expect(ajax.send('/delete', {
            method: 'delete',
            data: formData
          })).to.eventually.have.property('status', 'success'),
          expect(ajax.send('/delete', {
            method: 'delete',
            data: string
          })).to.eventually.have.property('status', 'success'),
          expect(ajax.send('/delete', { method: 'delete', data: obj })).to.eventually.have.property('status', 'success')
        ]);
      });

      it('should successfully call the progress event of a POST request', function(done) {
        const spy = sinon.spy();
        ajax.send('/post', { method: 'post', progress: spy })
            .then(
            () => {
              expect(spy).to.have.been.called;
              done();
            },
            done
        );
      });
    });

    it('should fail (Promise.catch) when errors arise', function() {
      return Promise.all([
        expect(ajax.send('/notmapped', { method: 'get' })).to.eventually.be.rejected,
        expect(ajax.send('/malformedjson', { method: 'get' })).to.eventually.be.rejected
      ]);
    });
  });

  describe('shortcut methods:', function() {

    before(() => {
      startServer();
      initREST();
    });

    after(() => {
      stopServer();
    });

    // --- GET ---
    describe('ajax.get', function() {
      it('should perform a request using the GET method', function() {
        return Promise.all([
          expect(ajax.get('/get')).to.eventually.have.property('status', 'success'),
          expect(ajax.get('/post')).to.eventually.be.rejected
        ]);
      });
    });

    // --- POST ---
    describe('ajax.post', function() {
      it('should perform a request using the POST method', function() {
        const data = { field: 'test' };

        return Promise.all([
          expect(ajax.post('/post', { data: data })).to.eventually.have.property('status', 'success'),
          expect(ajax.post('/post', data)).to.eventually.have.property('status', 'success'),
          expect(ajax.post('/get', data)).to.eventually.be.rejected
        ]);
      });
    });

    // --- PUT ---
    describe('ajax.put', function() {
      it('should perform a request using the PUT method', function() {
        const data = { field: 'test' };

        return Promise.all([
          expect(ajax.put('/put', { data: data })).to.eventually.have.property('status', 'success'),
          expect(ajax.put('/put', data)).to.eventually.have.property('status', 'success'),
          expect(ajax.put('/post', data)).to.eventually.be.rejected
        ]);
      });
    });

    // --- DELETE ---
    describe('ajax.delete', function() {
      it('should perform a request using the DELETE method', function() {
        const data = { field: 'test' };

        return Promise.all([
          expect(ajax.delete('/delete', { data: data })).to.eventually.have.property('status', 'success'),
          expect(ajax.delete('/delete', data)).to.eventually.have.property('status', 'success'),
          expect(ajax.delete('/post', data)).to.eventually.be.rejected
        ]);
      });
    });

  });

  // --- GETCSRF ---
  describe('ajax.getCSRF', function() {

    before(() => {
      startServer();
      initREST();
      initCSRF();
    });

    after(() => {
      stopServer();
    });

    it('should successfully get CSRF token', function(done) {
      // FIXME: I couldn't really make chais-as-promised syntax to work properly with this test

      // Reset CSRF token chache
      ajax._csrf = null;

      // Get new CSRF token
      ajax.getCSRF().then((csrf) => {
        expect(csrf).to.equal('csrftoken');
        expect(ajax._csrf).to.equal('csrftoken');
        done();
      }, done);
    });

    it(`should fail if the 'csrf token url' fails`, function() {
      return expect(ajax.getCSRF({ csrfUrl: '/notTheCsrfTokenUrl' })).to.eventually.be.rejected;
    });

    describe('REST with CSRF enabled', function() {
      const conf = { csrf: true, data: 'field=test' };

      beforeEach(() => { ajax._csrf = null; });

      it('should successfully execute a GET request', function() {
        return expect(ajax.get('/get', conf)).to.eventually.have.property('status', 'success');
      });

      it('should successfully execute a POST request', function() {
        return expect(ajax.post('/post', conf)).to.eventually.have.property('status', 'success');
      });

      it('should successfully execute a PUT request', function() {
        return expect(ajax.put('/put', conf)).to.eventually.have.property('status', 'success');
      });

      it('should successfully execute a DELETE request', function() {
        return expect(ajax.delete('/delete', conf)).to.eventually.have.property('status', 'success');
      });

      it(`should fail if executed with a failing 'csrfUrl'`, function() {
        return expect(ajax.get('/get', {
          csrf: true,
          csrfUrl: '/notTheCsrfTokenUrl',
          test: 'REST failing csrf'
        })).to.eventually.be.rejected;
      });
    });
  });
});
