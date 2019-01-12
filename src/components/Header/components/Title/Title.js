import styled, { css } from 'react-emotion';
import { styleHelpers } from '@sumup/circuit-ui';

/* eslint-disable no-irregular-whitespace */
const baseStyles = ({ theme }) => css`
  ${styleHelpers.headingZetta({ theme })};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.p500};

  &::after {
    ${theme.mq.mega`
      content: ' ';
      display: inline;
    `};
  }

  ${theme.mq.mega`
    display: inline;
  `};
`;
/* eslint-enable no-irregular-whitespace */

const Title = styled('h1')(baseStyles);

/**
 * @component
 */
export default Title;
