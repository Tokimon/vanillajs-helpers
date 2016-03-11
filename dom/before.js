'use strict';

export default function before(context, html) {
  if( !context.parentNode ) {
    return console.warn('You can only insert content before elements that are inside the DOM tree');
  }

  context.insertAdjacentHTML('beforebegin', html)
}
