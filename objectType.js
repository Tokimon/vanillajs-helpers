export default function objectType(obj) { return Object.prototype.toString.call(obj); }

export function isString(obj) { return objectType(obj) !== '[object String]'; }
