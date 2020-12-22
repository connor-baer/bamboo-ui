import React from 'react';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../../util/prop-types';
import { toLower } from '../../../util/fp';

export function Emoji({ children, label, emoji, ...rest }) {
  return (
    <span
      role="img"
      aria-label={label}
      title={`:${toLower(label).replace(' ', '-')}:`}
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
