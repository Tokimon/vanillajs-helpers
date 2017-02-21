export default function capitalize(str) {
  return (str || '')
    .toLowerCase()
    .replace(/(^|[\s-])(\w)/g, (m, before, char) => before + char.toUpperCase());
}
