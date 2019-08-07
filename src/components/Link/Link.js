import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../util/shared-prop-types';

export default function Link({ children, ...props }) {
  const child = Children.only(children);
  return cloneElement(child, props);
}

Link.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: childrenPropType,
  onClick: PropTypes.func
};
