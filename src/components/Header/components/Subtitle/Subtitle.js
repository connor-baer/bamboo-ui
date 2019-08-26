import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Heading from '../../../typography/Heading';

const baseStyles = ({ theme }) => css`
  color: ${theme.colors.n700};

  ${theme.mq.untilKilo} {
    font-size: ${theme.fontSizes.tera};
    line-height: ${theme.lineHeights.kilo};
    margin-top: ${theme.spacings.kilo};
  }

  ${theme.mq.kilo} {
    display: inline;
    margin-top: 0;
  }
`;

const StyledHeading = styled(Heading)(baseStyles);

function Subtitle(props) {
  return <StyledHeading as="h2" size="exa" weight="light" {...props} />;
}

/**
 * @component
 */
export default Subtitle;
