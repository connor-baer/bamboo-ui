import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import { ReactComponent as Loading } from './svgs/loading.svg';

function LoadingIcon({ width = 48, height = 48, color }) {
  const theme = useTheme();
  const stroke = color || theme.color.bodyColor;
  return <Loading width={width} height={height} stroke={stroke} />;
}

LoadingIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

/**
 * @component
 */
export default LoadingIcon;
