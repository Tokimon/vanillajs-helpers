import viewSize from './viewportSize';

export default function visibleOnScreen(node, threshold) {
  const rect = node.getBoundingClientRect();
  return !(rect.bottom - threshold < 0 || rect.top - viewSize().height - threshold >= 0);
}
