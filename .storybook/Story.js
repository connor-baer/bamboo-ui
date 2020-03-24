import React from 'react';
import { css, Global } from '@emotion/core';

import { BaseStyles } from '../src/styles/base-styles';

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

export default function Story({ children }) {
  return (
    <div>
      <BaseStyles />
      <Global styles={globalStyles} />
      {children}
    </div>
  );
}
