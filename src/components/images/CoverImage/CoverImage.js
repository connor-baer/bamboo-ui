import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { imagePropType } from '../../../util/prop-types';
import { RatioImage } from '../RatioImage';

const wrapperStyles = ({ theme }) => css`
  border-radius: ${theme.borderRadius.m};
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity ${theme.animation.standard};
    background: radial-gradient(transparent, #000);
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
      transition: transform ${theme.animation.motion};
      will-change: transform;
      backface-visibility: hidden;

      a:hover &,
      a:focus & {
        transform: scale(1.1);
      }
    }
  `;

export const CoverImage = styled(RatioImage)(wrapperStyles, imageStyles);

CoverImage.propTypes = {
  ...imagePropType,
  aspectRatio: PropTypes.number,
};
