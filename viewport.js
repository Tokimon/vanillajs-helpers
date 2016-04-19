// Expose the determined viewport element
const viewport = document.scrollingElement || (document.compatMode === 'BackCompat' ? document.body : document.documentElement);
export default viewport;
