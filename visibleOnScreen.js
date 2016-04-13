import viewSize from './viewportSize';

// TODO: Add detection of whether a HTML Element is of the left or right side of the screen
// TODO: Add detection as to whether the element is visible at all
// TODO: Create method that dertermines where element is in comparison to the screen
//       and use that for the other methods


export default function visibleOnScreen(node, threshold = 0, mode = 'visible') {
  const rect = node.getBoundingClientRect();
  const above = rect.bottom - threshold < 0;
  const below = rect.top - viewSize().height + threshold >= 0;

  return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
}

export function belowScreen(node, threshold = 0) {
  return visibleOnScreen(node, threshold, 'below');
}

export function aboveScreen(node, threshold = 0) {
  return visibleOnScreen(node, threshold, 'above');
}
