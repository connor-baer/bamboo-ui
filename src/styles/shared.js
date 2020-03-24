import { isString, isArray, isObject } from 'lodash/fp';
import { css } from '@emotion/core';
import { directionalProperty } from 'polished';

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

const sideMap = {
  top: 'Top',
  left: 'Left',
  bottom: 'Bottom',
  right: 'Right',
};

export const spacing = (opts, property = 'margin') => (props) => {
  const { theme = props } = props;

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

export const focusOutline = ({ theme }) => css`
  outline-radius: ${theme.borderRadius.s};
  outline-offset: 0.25em;

  &:focus-visible {
    outline: thin dotted currentColor;
  }
`;

export const fullWidth = ({ theme }) => css`
  max-width: ${theme.maxWidth};
  margin-right: auto;
  margin-left: auto;

  ${theme.mq.hand} {
    padding-right: ${theme.spacing.gutter};
    padding-left: ${theme.spacing.gutter};
  }
`;

export const pageWidth = ({ theme }) => css`
  max-width: ${theme.pageWidth};
  margin-right: auto;
  margin-left: auto;
  padding-right: ${theme.spacing.gutter};
  padding-left: ${theme.spacing.gutter};
`;

export const grid = ({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(12, [col-start] minmax(0, 1fr));
  grid-column-gap: ${theme.spacing.gutter};
`;
