import React from 'react';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../../util/prop-types';

export function Emoji({ children, label, ...rest }) {
  return (
    <span
      role="img"
      aria-label={label}
      title={`:${label.toLowerCase().replace(' ', '-')}:`}
      {...rest}
    >
      {children}
    </span>
  );
}

Emoji.propTypes = {
  children: childrenPropType.isRequired,
  label: PropTypes.string.isRequired,
};
