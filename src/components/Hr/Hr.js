import styled from '@emotion/styled';
import { css } from '@emotion/core';

const baseStyles = ({ theme }) => css`
  border: ${theme.borderWidth.kilo} solid ${theme.colors.n300};
  margin-top: ${theme.spacings.mega};
  margin-bottom: ${theme.spacings.mega};
`;

/**
 * A horizontal rule to visually and semantically separate text.
 */
const Hr = styled('hr')(baseStyles);

/**
 * @component
 */
export default Hr;
