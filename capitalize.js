export default function capitalize(str) {
    return `${str || ''}`
        .replace(/(^|[\s-])(\w)/g, (m, before, char) => before + char.toUpperCase());
}
