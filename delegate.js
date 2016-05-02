import matches from './matches';

// Internal helper function to return a delegate function
function delegateCb(delegation, handler) {
  return (e) => {
    let target = e.target;

    // The target matches the delegation selector, so execute the handler
    if(matches(target, delegation)) { return handler.call(target, e); }

    // Taget is a child of the delegation selector target, so loop up the parents
    // to find the right target
    if(matches(target, `${delegation} *`)) {
      target = target.parentNode;
      while(!matches(target, delegation)) { target = target.parentNode; }
      handler.call(target, e);
    }
  };
}

export default function delegate(on) {
  return (elm, eventNames, delegation, handler) =>
            on(elm, eventNames, delegateCb(delegation, handler));
}
