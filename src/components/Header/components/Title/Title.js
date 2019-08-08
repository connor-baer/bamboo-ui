import styled from '@emotion/styled';
import { css } from '@emotion/core';

const baseStyles = ({ theme }) => css`
  font-size: ${theme.fontSizes.peta};
  font-weight: ${theme.fontWeight.bold};
  line-height: ${theme.lineHeights.byte};
  color: ${theme.colors.p500};

  ${theme.mq.mega} {
    font-size: ${theme.fontSizes.exa};
  }
`;

/* eslint-disable no-irregular-whitespace */
const withSubtitleStyles = ({ theme, hasSubtitle }) =>
  hasSubtitle &&
  css`
    font-size: ${theme.fontSizes.tera};

    ${theme.mq.mega} {
      font-size: ${theme.fontSizes.peta};
      display: inline;

      &::after {
        content: ' ';
        display: inline;
      }
    }
  `;
/* eslint-enable no-irregular-whitespace */

const Title = styled('h1')(baseStyles, withSubtitleStyles);

/**
 * @component
 */
export default Title;
