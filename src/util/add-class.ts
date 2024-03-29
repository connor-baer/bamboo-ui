import { includes } from './fp';

export default function addClass(element: Element, className: string): void {
  if (includes(className, element.className)) {
    return;
  }
  // eslint-disable-next-line no-param-reassign
  element.className += ` ${className}`;
}
