import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { imagePropType } from '../../../util/shared-prop-types';
import RatioImage from '../RatioImage';

const wrapperStyles = ({ theme }) => css`
  border-radius: ${theme.borderRadius.giga};
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity ${theme.animations.standard};
    background: radial-gradient(transparent, ${theme.colors.shadow});
    content: '';
    opacity: 0;
  }

  a:hover &,
  a:focus & {
    &::after {
      opacity: 0.2;
    }
  }
`;

const imageStyles = ({ theme }) =>
  !theme.reducedMotion &&
  css`
    img {
      transition: transform ${theme.animations.motion};
      will-change: transform;
      backface-visibility: hidden;

      a:hover &,
      a:focus & {
        transform: scale(1.04);
      }
    }
  `;

const CoverImage = styled(RatioImage)(wrapperStyles, imageStyles);

CoverImage.propTypes = {
  ...imagePropType,
  aspectRatio: PropTypes.number,
  className: PropTypes.string
};

/**
 * @component
 */
export default CoverImage;
