import PropTypes from 'prop-types';
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

const placeholderStyles = ({ theme, colors, src }) =>
  !isTransparent(src) &&
  css`
    background: ${colors ? colors[0] : theme.colors.n300};
  `;

const Image = styled('img')(baseStyles, placeholderStyles);

Image.propTypes = {
  ...imagePropType,
  sizes: PropTypes.string
};

/**
 * @component
 */
export default Image;
