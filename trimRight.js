export default function trimRight(str, char = '[\\s]') {
  str = str || '';
  if(char.source) { char = char.source; }
  return (''+ str).replace(new RegExp(`${char}+$`, 'g'), '');
}
