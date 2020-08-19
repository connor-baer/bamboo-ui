import styled from '@emotion/styled';
import { css } from '@emotion/core';

const baseStyles = ({ theme }) => css`
  border: ${theme.borderWidth.s} solid ${theme.color.neutral[300]};
  margin-top: ${theme.spacing.gutter};
  margin-bottom: ${theme.spacing.gutter};
`;

/**
 * A horizontal rule to visually and semantically separate text.
 */
export const Hr = styled.hr(baseStyles);
