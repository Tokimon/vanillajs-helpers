/**
 * Is the given object is a finite Number
 */
export default function isNumber(obj: any): boolean {
  if(Number.isFinite) { return Number.isFinite(obj); }
  return typeof obj === 'number' && isFinite(obj);
}
