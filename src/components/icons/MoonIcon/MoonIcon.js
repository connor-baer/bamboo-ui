import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Moon } from '../../../icons/moon.svg';
import { ReactComponent as MoonFull } from '../../../icons/moon-full.svg';

export function MoonIcon({ full = false, ...props }) {
  const Icon = full ? MoonFull : Moon;
  return <Icon {...props} />;
}

MoonIcon.propTypes = {
  alt: PropTypes.string.isRequired,
  full: PropTypes.bool,
};
