/**
 * Capitalize each word in a phrase
 */
export default function capitalize(str?: string): string {
  return `${str || ''}`
    .replace(/(^|[\s-])(\w)/g, (m, before, char) => before + char.toUpperCase());
}
