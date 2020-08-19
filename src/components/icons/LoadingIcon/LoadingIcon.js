import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

import { ReactComponent as Loading } from '../../../icons/loading.svg';

export function LoadingIcon({ width = 48, height = 48, color, ...rest }) {
  const theme = useTheme();
  const stroke = color || theme.color.bodyColor;
  return <Loading width={width} height={height} stroke={stroke} {...rest} />;
}

LoadingIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
