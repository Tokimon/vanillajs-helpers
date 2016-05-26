export default function isWindow(obj) {
  return typeof obj.self !== 'undefined' && obj.self === obj;
}
