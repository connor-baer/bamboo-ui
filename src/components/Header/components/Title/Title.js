import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Heading } from '../../../typography/Heading';

const baseStyles = ({ theme }) => css`
  color: ${theme.color.primary[500]};
  margin-top: ${theme.spacing.m};
`;

/* eslint-disable no-irregular-whitespace */
const withSubtitleStyles = ({ theme, hasSubtitle }) =>
  hasSubtitle &&
  css`
    ${theme.mq.hand} {
      display: inline;

      &::after {
        content: ' ';
        display: inline;
      }
    }
  `;
/* eslint-enable no-irregular-whitespace */

const StyledHeading = styled(Heading)(baseStyles, withSubtitleStyles);

export function Title(props) {
  return <StyledHeading as="h1" size="xxl" weight="bold" {...props} />;
}
