import  on from './on';

export default function onDomReady(cb) {
  if(typeof cb !== 'function') { return; }
  if(document.readyState === 'complete') { return cb(); }
  on(document, 'DOMContentLoaded', cb());
}
