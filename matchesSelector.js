import prefixed from './prefixed';

// Determine the supported method of 'matches' (with or without prefixes)
const html = document.documentElement;
const _matchMethod = html.matches || prefixed('MatchesSelector').filter((method) => !!html[method])[0];

/**
 * Determines whether or not a HTML Element matches a given CSS query selector
 * @param  {HTML Element} elm - the HTML Element in question
 * @param  {String} selector - CSS query selector
 * @return {Boolean} - Whether or not the {elm} matched the selector
 */
export default function matchesSelector(elm, selector) {
  return _matchMethod.call(elm, selector);
}
