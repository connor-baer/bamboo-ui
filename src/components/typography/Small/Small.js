import styled from '@emotion/styled';
import { css } from '@emotion/core';

const baseStyles = ({ theme }) => css`
  color: ${theme.color.neutral[700]};
  letter-spacing: 0.2px;
  display: inline-block;
  font-size: ${theme.fontSize.s};

  &::after {
    content: '·';
    display: inline-block;
    font-weight: ${theme.fontWeight.bold};
    padding-right: ${theme.spacing.s};
    padding-left: ${theme.spacing.s};
  }

  &:last-of-type::after {
    display: none;
    content: '';
  }
`;

export const Small = styled('small')(baseStyles);
