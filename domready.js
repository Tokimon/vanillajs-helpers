import  on from './on';

let domReady = false;
let evtsSet = false;
const handlers = [];

function DOMContentLoaded() {
  handlers.forEach((cb) => cb());
  domReady = true;
}

export default function onDomReady(cb) {
  if(typeof cb !== 'function') { return; }

  domReady = domReady || document.readyState === 'complete';
  if(domReady) { return cb(); }

  handlers.push(cb);

  if(!evtsSet) {
    on(document, 'DOMContentLoaded', DOMContentLoaded());
    on(window, 'load', DOMContentLoaded());
    evtsSet = true;
  }
}
