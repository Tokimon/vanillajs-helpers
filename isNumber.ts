/**
 * Is the given object is a finite Number
 */
export default function isNumber(num: any): boolean {
  if(Number.isFinite) { return Number.isFinite(num); }
  return (typeof num === 'number' || num instanceof Number) && isFinite(<any> num);
}
