import isFunc from './isFunction';
export default function promisefy(fn) {
    if (!isFunc(fn)) {
        throw new TypeError('Promisefy: fn is not a function');
    }
    return (...args) => new Promise((resolve, reject) => {
        fn(...args, (err, data) => err ? reject(err) : resolve(data));
    });
}
