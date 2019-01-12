/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';

import { standard } from '../../src/styles/theme';

const theme = standard();

export const Wrapper = props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
