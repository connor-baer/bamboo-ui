import { isString, isArray, isObject } from 'lodash/fp';
import { css } from '@emotion/core';
import { directionalProperty } from 'polished';

function isTheme(args) {
  return args.theme === undefined;
}

export const getTheme = (args) => (isTheme(args) ? args : args.theme);

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

export const disableVisually = () => css`
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.7;
  filter: grayscale(33%);
`;

const sideMap = {
  top: 'Top',
  left: 'Left',
  bottom: 'Bottom',
  right: 'Right',
};

export const spacing = (opts, property = 'margin') => (args) => {
  const theme = getTheme(args);

  const getSize = (value) =>
    isString(value)
      ? theme.spacing[value]
      : `calc(${theme.spacing.gutter} * ${value})`;

  if (isArray(opts)) {
    const sizes = opts.map(getSize);
    return directionalProperty(property, ...sizes);
  }

  if (isObject(opts)) {
    return Object.keys(opts).reduce((allSides, side) => {
      const size = getSize(opts[side]);
      const name = `${property}${sideMap[side]}`;
      return { ...allSides, [name]: size };
    }, {});
  }

  return directionalProperty(property, getSize(opts));
};

export const focusOutline = (args) => {
  const theme = getTheme(args);
  return css`
    outline: 0;
    box-shadow: 0 0 0 4px ${theme.color.primary[300]};

    &::-moz-focus-inner {
      border: 0;
    }
  `;
};

export const clearfix = () => css`
  &::before,
  &::after {
    content: ' ';
    display: table;
  }
  &::after {
    clear: both;
  }
`;

export const fullWidth = (args) => {
  const theme = getTheme(args);
  return css`
    max-width: ${theme.maxWidth};
    margin-right: auto;
    margin-left: auto;

    ${theme.mq.hand} {
      padding-right: ${theme.spacing.gutter};
      padding-left: ${theme.spacing.gutter};
    }
  `;
};

export const pageWidth = (args) => {
  const theme = getTheme(args);
  return css`
    max-width: ${theme.pageWidth};
    margin-right: auto;
    margin-left: auto;
    padding-right: ${theme.spacing.gutter};
    padding-left: ${theme.spacing.gutter};
  `;
};

export const grid = (args) => {
  const theme = getTheme(args);
  return css`
    display: grid;
    grid-template-columns: repeat(12, [col-start] minmax(0, 1fr));
    grid-column-gap: ${theme.spacing.gutter};
  `;
};
