import objectType from './objectType';
export default function isObject(obj) {
    return objectType(obj) === 'object' && Object(obj) === obj;
}
