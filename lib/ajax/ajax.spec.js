'use strict';

import request from './ajax.request';
import { get, post, put, del } from './ajax.rest';
import csrf_request, { getCrsfToken, csrf_get, csrf_post, csrf_put, csrf_del } from './ajax.csrf';


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

  server.respondWith('GET', '/csrfTokenTwo',
      [200, { 'Content-Type': 'application/json' },
        '{ "_csrf": "csrftokentwo" }']);
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
  describe('#request', function() {

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
        return expect(request('/get', { method: 'get' })).to.eventually.have.property('status', 'success');
      });

      it('should successfully execute a POST request', function() {
        return Promise.all([
          expect(request('/post', { method: 'post', data: formData })).to.eventually.have.property('status', 'success'),
          expect(request('/post', { method: 'post', data: string })).to.eventually.have.property('status', 'success'),
          expect(request('/post', { method: 'post', data: obj })).to.eventually.have.property('status', 'success')
        ]);
      });

      it('should successfully execute a PUT request', function() {
        return Promise.all([
          expect(request('/put', { method: 'put', data: formData })).to.eventually.have.property('status', 'success'),
          expect(request('/put', { method: 'put', data: string })).to.eventually.have.property('status', 'success'),
          expect(request('/put', { method: 'put', data: obj })).to.eventually.have.property('status', 'success')
        ]);
      });

      it('should successfully execute a DELETE request', function() {
        return Promise.all([
          expect(request('/delete', { method: 'delete', data: formData })).to.eventually.have.property('status', 'success'),
          expect(request('/delete', { method: 'delete', data: string })).to.eventually.have.property('status', 'success'),
          expect(request('/delete', { method: 'delete', data: obj })).to.eventually.have.property('status', 'success')
        ]);
      });

      it('should successfully call the progress event of a POST request', function(done) {
        const spy = sinon.spy();
        request('/post', { method: 'post', progress: spy })
            .then( () => {
              expect(spy).to.have.been.called;
              done();
            })
            .catch(done);
      });
    });

    it('should fail (Promise.catch) when errors arise', function() {
      return Promise.all([
        expect(request('/notmapped', { method: 'get' })).to.eventually.be.rejected,
        expect(request('/malformedjson', { method: 'get' })).to.eventually.be.rejected
      ]);
    });
  });

  describe('REST shortcut methods:', function() {

    before(() => {
      startServer();
      initREST();
    });

    after(() => {
      stopServer();
    });

    // --- GET ---
    describe('#get', function() {
      it('should perform a request using the GET method', function() {
        return Promise.all([
          expect(get('/get')).to.eventually.have.property('status', 'success'),
          expect(get('/post')).to.eventually.be.rejected
        ]);
      });
    });

    // --- POST ---
    describe('#post', function() {
      it('should perform a request using the POST method', function() {
        const data = { field: 'test' };

        return Promise.all([
          expect(post('/post', { data: data })).to.eventually.have.property('status', 'success'),
          expect(post('/post', data)).to.eventually.have.property('status', 'success'),
          expect(post('/get', data)).to.eventually.be.rejected
        ]);
      });
    });

    // --- PUT ---
    describe('#put', function() {
      it('should perform a request using the PUT method', function() {
        const data = { field: 'test' };

        return Promise.all([
          expect(put('/put', { data: data })).to.eventually.have.property('status', 'success'),
          expect(put('/put', data)).to.eventually.have.property('status', 'success'),
          expect(put('/post', data)).to.eventually.be.rejected
        ]);
      });
    });

    // --- DELETE ---
    describe('#del', function() {
      it('should perform a request using the DELETE method', function() {
        const data = { field: 'test' };

        return Promise.all([
          expect(del('/delete', { data: data })).to.eventually.have.property('status', 'success'),
          expect(del('/delete', data)).to.eventually.have.property('status', 'success'),
          expect(del('/post', data)).to.eventually.be.rejected
        ]);
      });
    });

  });

  // --- CSRF ---
  describe('CSRF', function() {

    before(() => {
      startServer();
      initREST();
      initCSRF();
    });

    after(() => {
      stopServer();
    });

    describe('#getCrsfToken', function() {
      it('should successfully get CSRF token', function() {
        return Promise.all([
          expect(getCrsfToken({})).to.eventually.have.property('csrf', 'csrftoken'),
          expect(getCrsfToken({ csrfUrl: '/csrfTokenTwo' })).to.eventually.have.property('csrf', 'csrftokentwo')
        ]);
      });

      it(`should fail if the 'csrf token url' fails`, function() {
        return expect(getCrsfToken({ csrfUrl: '/notTheCsrfTokenUrl' })).to.eventually.be.rejected;
      });
    });


    describe('#csrf_request', function() {
      it('should sucessfully perform a request', function() {
        return expect(csrf_request('/get', { method: 'get' })).to.eventually.have.property('status', 'success');
      });
    });

    describe('CSRF REST', function() {

      const conf = { data: 'field=test' };

      it('should successfully execute a GET request', function() {
        return expect(csrf_get('/get')).to.eventually.have.property('status', 'success');
      });

      it('should successfully execute a POST request', function() {
        return expect(csrf_post('/post', conf)).to.eventually.have.property('status', 'success');
      });

      it('should successfully execute a PUT request', function() {
        return expect(csrf_put('/put', conf)).to.eventually.have.property('status', 'success');
      });

      it('should successfully execute a DELETE request', function() {
        return expect(csrf_del('/delete', conf)).to.eventually.have.property('status', 'success');
      });

      it(`should fail if executed with a failing 'csrfUrl'`, function() {
        return expect(csrf_get('/get', { csrfUrl: '/notTheCsrfTokenUrl' })).to.eventually.be.rejected;
      });
    });
  });
});
