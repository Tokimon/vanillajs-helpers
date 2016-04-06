/* eslint no-empty: "off" */
export default function iterate(iterable, cb) {
  const len = iterable.length;
  let i = -1;

  while(++i < len && cb(iterable[i], i, iterable) !== false) {}
  return len;
}
