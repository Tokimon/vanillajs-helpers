export default function prefixed(str) {
  return [ `webkit${str}`, `moz${str}`, `ms${str}`, `o${str}` ];
}
