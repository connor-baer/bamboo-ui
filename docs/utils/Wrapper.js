/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';

import themes from '../../src/styles/themes';

const theme = themes.standard();

export const Wrapper = props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
