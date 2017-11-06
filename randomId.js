export default function randomId(length = 10) {
    let id = '';
    while (id.length < length) {
        id += Math.random().toString(36).substr(2);
    }
    return id.substr(0, length);
}
