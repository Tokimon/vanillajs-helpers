export default function trim(str, char) {
  str = str || '';
  if(!char) { return (''+ str).trim(); }
  if(char.source) { char = char.source; }
  return (''+ str).replace(new RegExp(`^${char}+|${char}+$`, 'g'), '');
}
