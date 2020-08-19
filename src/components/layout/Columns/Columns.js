import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const baseStyles = ({ theme, columnCount = 2 }) => css`
  column-gap: ${theme.spacing.gutter};
  column-count: 1;
  column-fill: balance;
  column-break-inside: avoid;
  break-inside: avoid;

  > * {
    display: inline-block;
    width: 100%;
  }

  ${theme.mq.hand} {
    column-count: ${columnCount};
  }
`;

// HACK: Fix webkit (i.e. Safari and Chrome) bugs related to multi column layout.
const bugfixStyles = () => css`
  perspective: 1;

  > * {
    -webkit-transform: translate3d(0, 0, 0);
  }
`;

/**
 * Display content in multiple columns on wide viewports.
 */
export const Columns = styled('div')(baseStyles, bugfixStyles);

Columns.propTypes = {
  columnCount: PropTypes.number,
};
