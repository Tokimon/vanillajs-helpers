export default function chunkWord(str = '', size = 2) {
  return str.match(new RegExp(`.{1,${size}}(?=\\B|$)`, 'g'));
}
