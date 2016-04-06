function _hasClass(elm, classNames, any = false) {
  let oks = 0;

  const total = classNames.forEach(cn => {
    const ok = elm.classList.contains(cn);
    if(ok) { oks++; return !any; }
  });

  return any ? !!oks : total === oks;
}

export default function hasClass(elm, ...classNames) {
  return _hasClass(elm, classNames);
}

export function hasAnyClass(elm, ...classNames) {
  return _hasClass(elm, classNames, true);
}
