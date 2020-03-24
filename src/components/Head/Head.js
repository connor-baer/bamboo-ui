import { createPortal } from 'react-dom';

import { childrenPropType } from '../../util/shared-prop-types';
import { isServer } from '../../util/is-server';

const headRoot = isServer ? null : document.head;

export default function Head({ children }) {
  return headRoot ? createPortal(children, headRoot) : null;
}

Head.propTypes = {
  children: childrenPropType,
};
