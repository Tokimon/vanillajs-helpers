import phrasify, { PhrasifySettings } from './phrasify';

/**
 * Transform phrase into a dashed phrase
 * (eg. 'camelCase' -> 'camel-case' or 'spaced phrase' -> 'spaced-phrase')
 *
 * ```ts
 * dashed('some dashed phrase'); // -> some-dashed-phrase
 * dasher('dash version1 beta', { numbers: true }); // -> dash-version-1-beta
 * ```
 */
export default function dashed(str: string, settings?: PhrasifySettings): string {
  return phrasify(settings)(str)
    .toLowerCase()
    .replace(/\s+/g, '-');
}
