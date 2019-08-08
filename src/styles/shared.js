import { css } from '@emotion/core';

export const hideVisually = () => css`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const focusOutline = () => css`
  outline-offset: 0.25em;

  &:focus {
    outline: thin dotted currentColor;
  }
`;
