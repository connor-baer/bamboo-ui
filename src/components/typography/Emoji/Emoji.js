import React from 'react';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../../util/prop-types';

export function Emoji({ children, label, emoji, ...rest }) {
  return (
    <span
      role="img"
      aria-label={label}
      title={`:${label.toLowerCase().replace(' ', '-')}:`}
      {...rest}
    >
      {emoji || children}
    </span>
  );
}

Emoji.propTypes = {
  children: childrenPropType,
  emoji: PropTypes.string,
  label: PropTypes.string.isRequired,
};
