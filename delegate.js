import on from './on';
import matches from './matches';

// Internal helper function to return a delegate function
export function delegateHandler(delegation, handler) {
  return (e) => {
    let target = e.target;

    // The target matches the delegation selector, so execute the handler
    if(matches(target, delegation)) { return handler.call(target, e); }

    // Taget is a child of the delegation selector target, so loop up the parents
    // to find the right target
    if(matches(target, `${delegation} *`)) {
      target = target.parentElement;
      while(!matches(target, delegation)) { target = target.parentElement; }
      handler.call(target, e);
    }
  };
}

export default function delegate(elm, eventNames, delegation, handler)  {
  const delHandler = delegateHandler(delegation, handler);
  on(elm, eventNames, delHandler);
  // We return the delegation handler so you might unbind it again
  return delhandler;
}
