export default function isNumber(obj) {
    if (Number.isFinite) {
        return Number.isFinite(obj);
    }
    return typeof obj === 'number' && isFinite(obj);
}
