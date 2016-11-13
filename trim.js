export default function trim(str, char) {
  str = str || '';
  if(!char) { return (''+ str).trim(); }
  if(char.source) { char = char.source; }
  return (''+ str).replace(new RegExp(`^${char}+|${char}+$`, 'g'), '');
}

export function trimLeft(str, char = '\\s') {
  str = str || '';
  if(char.source) { char = char.source; }
  return (''+ str).replace(new RegExp(`^${char}+`, 'g'), '');
}

export function trimRight(str, char = '[\\s]') {
  str = str || '';
  if(char.source) { char = char.source; }
  return (''+ str).replace(new RegExp(`${char}+$`, 'g'), '');
}
