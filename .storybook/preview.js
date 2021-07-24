import React from 'react';
import { css, Global } from '@emotion/core';

import { Theme } from '../src/components/Theme';
import { standard } from '../src/styles/theme';
import '../src/styles/theme.css';
import '../src/styles/base-styles.css';

export const parameters = {
  layout: 'centered',
};

const withTheme = (Story) => (
  <Theme theme={standard}>
    <Story />
  </Theme>
);

export const decorators = [withTheme];
