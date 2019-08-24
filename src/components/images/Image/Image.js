import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { imagePropType } from '../../../util/shared-prop-types';

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
    background: ${color || theme.colors.n300};
  `;

const Image = styled('img')(baseStyles, placeholderStyles);

Image.propTypes = imagePropType;

/**
 * @component
 */
export default Image;
