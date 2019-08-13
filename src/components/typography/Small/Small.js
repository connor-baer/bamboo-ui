import styled from '@emotion/styled';
import { css } from '@emotion/core';

const baseStyles = ({ theme }) => css`
  color: ${theme.colors.n700};
  letter-spacing: 0.2px;
  display: inline-block;
  font-size: ${theme.fontSizes.byte};

  &::after {
    content: '·';
    display: inline-block;
    font-weight: ${theme.fontWeight.bold};
    padding-right: ${theme.spacings.kilo};
    padding-left: ${theme.spacings.kilo};
  }

  &:last-of-type::after {
    display: none;
    content: '';
  }
`;

const Small = styled('small')(baseStyles);

/**
 * @component
 */
export default Small;
