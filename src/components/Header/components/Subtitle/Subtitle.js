import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Heading from '../../../typography/Heading';

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

const StyledHeading = styled(Heading)(baseStyles);

function Subtitle(props) {
  return <StyledHeading as="h2" weight="light" {...props} />;
}

/**
 * @component
 */
export default Subtitle;
