import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { captionPropType } from '../../../util/shared-prop-types';

const baseStyles = ({ theme }) => css`
  display: block;
  margin-top: ${theme.spacings.giga};
  font-size: ${theme.fontSizes.byte};
  line-height: ${theme.lineHeights.mega};
  letter-spacing: 0.2px;
  color: ${theme.colors.n700};
`;

const Caption = styled('figcaption')(baseStyles);

Caption.propTypes = {
  children: captionPropType
};

/**
 * @component
 */
export default Caption;
