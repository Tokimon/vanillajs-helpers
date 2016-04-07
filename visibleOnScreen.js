import viewSize from './viewportSize';

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
