'use strict';

export default function after(context, html) {
  if( !context.parentNode ) {
    return console.warn('You can only insert content after elements that are inside the DOM tree');
  }

  context.insertAdjacentHTML('afterend', html)
}
