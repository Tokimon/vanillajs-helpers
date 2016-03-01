'use strict';

import request from './ajax.request';

export function post(url, config = {}) {
  if(!config.data) { config = { data: config }; }

  config.method = 'POST';
  return request(url, config);
}

export function put(url, config = {}) {
  if(!config.data) { config = { data: config }; }

  config.method = 'PUT';
  return request(url, config);
}

export function del(url, config = {}) {
  if(!config.data) { config = { data: config }; }

  config.method = 'DELETE';
  return request(url, config);
}

export function get(url, config = {}) {
  config.method = 'GET';
  return request(url, config);
}
