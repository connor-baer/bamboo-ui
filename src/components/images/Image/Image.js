import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { imagePropType } from '../../../util/prop-types';

function isTransparent(src) {
  return src && src.includes('.png');
}

const baseStyles = () => css`
  width: 100%;
  height: auto;
  vertical-align: middle;
  color: transparent;
`;

const placeholderStyles = ({ theme, src, color }) =>
  !isTransparent(src) &&
  css`
    background: ${color || theme.color.neutral[300]};
  `;

export const Image = styled('img')(baseStyles, placeholderStyles);

Image.propTypes = imagePropType;
