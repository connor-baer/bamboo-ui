import { createPortal } from 'react-dom';

import { childrenPropType } from '../../util/prop-types';
import { isServer } from '../../util/is-server';

const headRoot = isServer ? null : document.head;

export function Head({ children }) {
  return headRoot ? createPortal(children, headRoot) : null;
}

Head.propTypes = {
  children: childrenPropType,
};
