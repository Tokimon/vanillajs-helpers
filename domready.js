/**
 * Execute a given function once the document has finished loading
 * @param  {Function} cb - Function to execute once the document has finished loading
 */
export default function domReady(once) {
  return (cb) => {
    if(typeof cb !== 'function') { return; }
    if(document.readyState === 'complete') { return cb(); }
    once(document, 'DOMContentLoaded', () => cb());
  };
}
