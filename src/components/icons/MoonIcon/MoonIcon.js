import React from 'react';
import PropTypes from 'prop-types';

import Moon from './svgs/moon.svg';
import MoonFull from './svgs/moon-full.svg';

function MoonIcon({ full, ...props }) {
  const Icon = full ? MoonFull : Moon;
  return <Icon {...props} />;
}

MoonIcon.propTypes = {
  alt: PropTypes.string.isRequired,
  full: PropTypes.bool
};

MoonIcon.defaultProps = {
  alt: 'A half-moon',
  full: false
};

/**
 * @component
 */
export default MoonIcon;
