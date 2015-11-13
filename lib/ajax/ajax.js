'use strict';

import is from '../is/is';
import event from '../event/event';

const DEFAULT_CONFIG = {
  method: 'GET',
  csrf: false,
  csrfUrl: '/csrfToken',
  data: null
};

const ajax = { _csrf: null };

ajax.send = function(url, config = {}) {
  return new Promise(function(resolve, reject) {
    try {
      const xhr = new XMLHttpRequest();

      config = _config(config);
      config.url = url;

      xhr.open(config.method.toUpperCase(), url);

      _addEvents(xhr, config).then(resolve, reject);

      if(!config.csrf) {
        xhr.send(config.data);
      } else {
        _addCsrf(xhr, config)
            .then(
                csrf => { xhr.send(config.data); },
                err => { reject(`Error adding csrf token - Canceling request: ${err}`); }
        );
      }
    } catch(err) { reject(`XHR Error: ${err}`); }
  });
};

ajax.post = function(url, config = {}) {
  if(!config.data) { config = { data: config }; }

  config.method = 'POST';
  return ajax.send(url, config);
};

ajax.put = function(url, config = {}) {
  if(!config.data) { config = { data: config }; }

  config.method = 'PUT';
  return ajax.send(url, config);
};

ajax['delete'] = function(url, config = {}) {
  if(!config.data) { config = { data: config }; }

  config.method = 'DELETE';
  return ajax.send(url, config);
};

ajax.get = function(url, config = {}) {
  config.method = 'GET';
  return ajax.send(url, config);
};

ajax.getCSRF = function(config) {
  config = _config(config);
  // Enforce csrf false, otherwise we will run into a call loop
  config.csrf = false;

  return ajax.get(config.csrfUrl, config).then((csrf) => {
    ajax._csrf = is.string(csrf) ? csrf : csrf._csrf;
    return ajax._csrf;
  });
};

function _respondedWithJSON(xhr) {
  if(xhr.responseType === 'json') { return true; }

  let contentType = xhr.getResponseHeader('Content-Type');
  if(!contentType) { return false; }

  return contentType.toLowerCase().includes('application/json');
}

function _config(config) {
  return Object.assign({}, DEFAULT_CONFIG, config);
}

function _addCsrf(xhr, config) {
  const prom = new Promise(function(resolve, reject) {
    if(!config.csrf) { return resolve(); }

    let csrf = is.string(config.csrf) ? config.csrf : ajax._csrf;
    return is.string(csrf) ? resolve(csrf) : ajax.getCSRF(config).then(resolve, reject);
  });

  return config.csrf ? prom.then(_initCsrf.bind(null, xhr)) : prom;
}

function _addEvents(xhr, config) {
  if(config.progress) {
    event.on(xhr.upload, 'progress', (e) => { config.progress(e); });
  }

  return new Promise(function(resolve, reject) {
    event.on(xhr, 'load', e => {
      let res = xhr.responseText;

      if(_respondedWithJSON(xhr) && is.string(res)) {
        try {
          res = JSON.parse(res);
        } catch(ex) {
          console.warn('Malformed JSON response:', res);
          console.warn('JSON parser exception:', ex);
          return reject(`Response sent as JSON but failed to parse response`);
        }
      }
      return xhr.status !== 200 ? reject(`Request failed with the status code: ${xhr.status}, and response: ${res}`) : resolve(res);
    });

    event.on(xhr, 'error', () => { reject(`Connection error: ${xhr.responseText}`); });
  });
}

function _initCsrf(xhr, csrf) {
  xhr.withCredentials = true;
  xhr.setRequestHeader('x-csrf-token', csrf);
  return csrf;
}

export default ajax;
