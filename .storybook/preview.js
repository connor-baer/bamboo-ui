import React from 'react';
import { css, Global } from '@emotion/core';

import { Theme } from '../src/components/Theme';
import { standard } from '../src/styles/theme';
import { BaseStyles } from '../src/styles/base-styles';

export const parameters = {
  layout: 'centered',
};

const globalStyles = (theme) => css`
  html {
    background-color: transparent;
  }

  body,
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: ${theme.fontStack.sans} !important;
  }
`;

const withTheme = (Story) => (
  <Theme theme={standard}>
    <BaseStyles />
    <Global styles={globalStyles} />
    <Story />
  </Theme>
);

export const decorators = [withTheme];
