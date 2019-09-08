import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Heading from '../../../typography/Heading';

const baseStyles = ({ theme }) => css`
  color: ${theme.colors.p600};

  ${theme.mq.untilKilo} {
    margin-top: ${theme.spacings.mega};
  }
`;

/* eslint-disable no-irregular-whitespace */
const withSubtitleStyles = ({ theme, hasSubtitle }) =>
  hasSubtitle &&
  css`
    ${theme.mq.kilo} {
      display: inline;

      &::after {
        content: ' ';
        display: inline;
      }
    }
  `;
/* eslint-enable no-irregular-whitespace */

const StyledHeading = styled(Heading)(baseStyles, withSubtitleStyles);

function Title(props) {
  return <StyledHeading as="h1" size="exa" weight="bold" {...props} />;
}

/**
 * @component
 */
export default Title;
