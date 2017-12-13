/**
 * Capitalize each word in a phrase
 *
 * ```ts
 * capitalize('capitalize this phrase'); // -> Capitalize This Phrase
 * capitalize('capitalize-This-phrase'); // -> Capitalize-This-Phrase
 * ```
 */
export default function capitalize(str: string): string {
  return `${str || ''}`
    .replace(/(^|[\s-])(\w)/g, (m, before, char) => before + char.toUpperCase());
}
