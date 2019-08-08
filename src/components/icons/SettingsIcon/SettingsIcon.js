import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Wrench } from './svgs/wrench.svg';

function SettingsIcon({ ...props }) {
  return <Wrench {...props} />;
}

SettingsIcon.propTypes = {
  alt: PropTypes.string.isRequired
};

/**
 * @component
 */
export default SettingsIcon;
