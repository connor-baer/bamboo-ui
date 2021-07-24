import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Heading } from '../../../typography/Headline';

const baseStyles = ({ theme }) => css`
  color: ${theme.color.primary[900]};
  font-size: ${theme.fontSize.xl};
  line-height: ${theme.lineHeight.s};
  margin-top: ${theme.spacing.s};

  ${theme.mq.hand} {
    display: inline;
    font-size: ${theme.fontSize.xxl};
    margin-top: 0;
  }

  ${theme.mq.darkmode} {
    color: ${theme.color.primary[100]};
  }
`;

const sizeStyles = ({ theme, size }) =>
  size === 'xl' &&
  css`
    font-size: ${theme.fontSize.l};
    margin-top: 0;

    ${theme.mq.hand} {
      font-size: ${theme.fontSize.xl};
    }
  `;

const StyledHeading = styled(Heading)(baseStyles, sizeStyles);

export function Subtitle(props) {
  return <StyledHeading as="h2" weight="regular" {...props} />;
}
