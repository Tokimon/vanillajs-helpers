import objectType from './objectType';
export default function isString(obj) {
    return typeof obj === 'string' || objectType(obj) === 'string';
}
