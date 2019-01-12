import { includes } from 'lodash/fp';

export default function addClass(element, className) {
  if (includes(className, element.className)) {
    return;
  }
  // eslint-disable-next-line no-param-reassign
  element.className += ` ${className}`;
}
