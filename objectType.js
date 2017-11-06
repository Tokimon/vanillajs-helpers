export default function objectType(obj) {
    return Object.prototype.toString.call(obj).toLowerCase().match(/(\w+)]$/)[1];
}
