import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Heading from '../../../Heading';

const baseStyles = ({ theme }) => css`
  color: ${theme.colors.p500};
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

const Title = styled(Heading)(baseStyles, withSubtitleStyles);

Title.defaultProps = {
  as: 'h1',
  size: 'peta',
  weight: 'bold'
};

/**
 * @component
 */
export default Title;
