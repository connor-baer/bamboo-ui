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

export const fullWidth = ({ theme }) => css`
  max-width: ${theme.maxWidth};
  margin-right: auto;
  margin-left: auto;

  ${theme.mq.kilo} {
    padding-right: ${theme.spacings.tera};
    padding-left: ${theme.spacings.tera};
  }
`;

export const pageWidth = ({ theme }) => css`
  max-width: ${theme.pageWidth};
  margin-right: auto;
  margin-left: auto;
  padding-right: ${theme.spacings.mega};
  padding-left: ${theme.spacings.mega};

  ${theme.mq.kilo} {
    padding-right: ${theme.spacings.tera};
    padding-left: ${theme.spacings.tera};
  }
`;

export const grid = ({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(12, [col-start] minmax(0, 1fr));
  grid-column-gap: ${theme.spacings.mega};

  ${theme.mq.kilo} {
    grid-column-gap: ${theme.spacings.tera};
  }
`;
