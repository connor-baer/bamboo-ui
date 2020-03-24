import { css } from '@emotion/core';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

import { textPropType } from '../../../util/prop-types';

const typeStyles = ({ theme, type }) =>
  type &&
  css`
    font-family: ${theme.fontStack[type]};
  `;

const sizeStyles = ({ theme, size = 'm' }) => css`
  font-size: ${theme.fontSize[size]};
`;

const weightStyles = ({ theme, weight = 'regular' }) => css`
  font-weight: ${theme.fontWeight[weight]};
`;

const slopeStyles = ({ slope = 'normal' }) => css`
  font-style: ${slope};
`;

const lineHeightStyles = ({ theme, lineHeight = 'm' }) => css`
  line-height: ${theme.lineHeight[lineHeight]};
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
