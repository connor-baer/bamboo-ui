import styled from '@emotion/styled';
import { css } from '@emotion/core';

/* eslint-disable no-irregular-whitespace */
const baseStyles = ({ theme }) => css`
  font-size: ${theme.fontSizes.peta};
  font-weight: ${theme.fontWeight.bold};
  line-height: ${theme.lineHeights.byte};
  color: ${theme.colors.p500};

  &::after {
    ${theme.mq.mega} {
      content: ' ';
      display: inline;
    }
  }

  ${theme.mq.mega} {
    font-size: ${theme.fontSizes.exa};
    display: inline;
  }
`;
/* eslint-enable no-irregular-whitespace */

const Title = styled('h1')(baseStyles);

/**
 * @component
 */
export default Title;
