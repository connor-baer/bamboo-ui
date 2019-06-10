import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Motion } from './svgs/motion.svg';
import { ReactComponent as MotionFull } from './svgs/motion-full.svg';

function MotionIcon({ full, ...props }) {
  const Icon = full ? MotionFull : Motion;
  return <Icon {...props} />;
}

MotionIcon.propTypes = {
  alt: PropTypes.string.isRequired,
  full: PropTypes.bool
};

MotionIcon.defaultProps = {
  alt: 'A moving circle',
  full: false
};

/**
 * @component
 */
export default MotionIcon;
