import React from 'react';
import styled from '@emotion/styled';
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .sbdocs & {
    min-height: auto;
    background-color: ${(p) => p.theme.color.bodyBg};
  }
`;

export default function Story({ children }) {
  return (
    <Wrapper>
      <BaseStyles />
      <Global styles={globalStyles} />
      {children}
    </Wrapper>
  );
}
