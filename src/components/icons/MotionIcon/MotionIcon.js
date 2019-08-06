import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Motion } from './svgs/motion.svg';
import { ReactComponent as MotionFull } from './svgs/motion-full.svg';

function MotionIcon({ alt = 'A moving circle', full = false, ...props }) {
  const Icon = full ? MotionFull : Motion;
  return <Icon alt={alt} {...props} />;
}

MotionIcon.propTypes = {
  alt: PropTypes.string.isRequired,
  full: PropTypes.bool
};

/**
 * @component
 */
export default MotionIcon;
