import styled from '@emotion/styled';
import { css } from '@emotion/core';

const baseStyles = ({ theme }) => css`
  font-size: ${theme.fontSizes.peta};
  line-height: ${theme.lineHeights.kilo};
  font-weight: ${theme.fontWeight.light};
  color: ${theme.colors.n700};
  margin-top: ${theme.spacings.kilo};

  ${theme.mq.mega} {
    display: inline;
    margin-top: 0;
    font-size: ${theme.fontSizes.exa};
  }
`;

const Subtitle = styled('h2')(baseStyles);

/**
 * @component
 */
export default Subtitle;
