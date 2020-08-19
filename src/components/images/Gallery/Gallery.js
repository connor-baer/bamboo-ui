import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { isEmpty } from 'lodash/fp';

import {
  imagePropType,
  captionPropType,
  alignPropType,
} from '../../../util/prop-types';
import { useComponents } from '../../../hooks/use-components';
import { RatioImage } from '../RatioImage';
import { Caption } from '../Caption';

import { RIGHT, LEFT, CENTER, FULL } from '../../../constants/align';

function getSizes(theme, align) {
  const lapMap = {
    [RIGHT]: '360px',
    [LEFT]: '360px',
    [CENTER]: '755px',
    [FULL]: '1155px',
  };
  const lapSize = `(min-width: ${theme.breakpoints.lap}) ${lapMap[align]}`;

  const handMap = {
    [RIGHT]: '380px',
    [LEFT]: '380px',
    [CENTER]: '790px',
    [FULL]: '950px',
  };
  const handSize = `(min-width: ${theme.breakpoints.hand}) ${handMap[align]}`;

  const mobileSize = '100vw';

  return [lapSize, handSize, mobileSize].join(', ');
}

const containerStyles = () => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ImagesContainer = styled('div')(containerStyles);

const wrapperStyles = ({ theme, numberOfImages, align }) => {
  if (numberOfImages === 1) {
    return css`
      width: 100%;
    `;
  }

  if (align === CENTER || align === FULL) {
    return css`
      width: calc((100% / ${numberOfImages}) - (${theme.spacing.gutter} / 2));
    `;
  }

  return css`
    width: calc(50% - (${theme.spacing.gutter} / 4));
    margin-bottom: calc(${theme.spacing.gutter} / 2);

    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }
  `;
};

const ImageWrapper = styled('div')(wrapperStyles);

export function Gallery({ images, align = LEFT, caption }) {
  const theme = useTheme();
  const { Align } = useComponents();

  if (isEmpty(images)) {
    return null;
  }

  const sizes = getSizes(theme, align);

  return (
    <Align align={align}>
      <ImagesContainer>
        {images.map((image, i) => (
          <ImageWrapper key={i} align={align} numberOfImages={images.length}>
            <RatioImage {...image} sizes={sizes} aspectRatio={1 / 1} />
          </ImageWrapper>
        ))}
      </ImagesContainer>
      {caption && <Caption>{caption}</Caption>}
    </Align>
  );
}

Gallery.RIGHT = RIGHT;
Gallery.LEFT = LEFT;
Gallery.CENTER = CENTER;
Gallery.FULL = FULL;

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape(imagePropType)),
  align: alignPropType,
  caption: captionPropType,
};
