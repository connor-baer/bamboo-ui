import { css } from '@emotion/core';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

import { textPropType } from '../../../util/shared-prop-types';

const typeStyles = ({ theme, type }) =>
  type &&
  css`
    font-family: ${theme.fontStack[type]};
  `;

const sizeStyles = ({ theme, size = 'kilo' }) => css`
  font-size: ${theme.fontSizes[size]};
`;

const weightStyles = ({ theme, weight = 'regular' }) => css`
  font-weight: ${theme.fontWeight[weight]};
`;

const slopeStyles = ({ slope = 'normal' }) => css`
  font-style: ${slope};
`;

const lineHeightStyles = ({ theme, lineHeight = 'kilo' }) => css`
  line-height: ${theme.lineHeights[lineHeight]};
`;

const Text = styled('span', {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && prop !== 'type' && prop !== 'slope',
})(typeStyles, sizeStyles, weightStyles, slopeStyles, lineHeightStyles);

Text.propTypes = textPropType;

/**
 * @component
 */
export default Text;
