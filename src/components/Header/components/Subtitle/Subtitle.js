import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Heading from '../../../Heading';

const baseStyles = ({ theme }) => css`
  color: ${theme.colors.n700};

  ${theme.mq.untilKilo} {
    font-size: ${theme.fontSizes.giga};
    margin-top: ${theme.spacings.kilo};
  }

  ${theme.mq.kilo} {
    display: inline;
    margin-top: 0;
  }
`;

const StyledHeading = styled(Heading)(baseStyles);

function Subtitle(props) {
  return <StyledHeading as="h2" size="peta" weight="light" {...props} />;
}

/**
 * @component
 */
export default Subtitle;
