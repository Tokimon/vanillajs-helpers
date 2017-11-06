export default function isBoolean(obj) {
    return obj === true || obj === false || obj instanceof Boolean;
}
