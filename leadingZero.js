export default function leadingZero(num, len = 2) {
    len = Math.max(String(num).length, len);
    return `${Math.pow(10, len)}${num}`.substr(-len);
}
