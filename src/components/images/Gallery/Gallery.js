import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { isEmpty, omit } from 'lodash/fp';

import {
  imagePropType,
  captionPropType
} from '../../../util/shared-prop-types';
import Align from '../../layout/Align';
import RatioImage from '../RatioImage';
import Caption from '../Caption';

function getSizes(theme, align) {
  const gigaMap = {
    [Align.RIGHT]: '360px',
    [Align.LEFT]: '360px',
    [Align.CENTER]: '755px',
    [Align.FULL]: '1155px'
  };
  const gigaSize = `(min-width: ${theme.breakpoints.giga}px) ${gigaMap[align]}`;

  const megaMap = {
    [Align.RIGHT]: '380px',
    [Align.LEFT]: '380px',
    [Align.CENTER]: '790px',
    [Align.FULL]: '950px'
  };
  const megaSize = `(min-width: ${theme.breakpoints.mega}px) ${megaMap[align]}`;

  const mobileSize = '100vw';

  return [gigaSize, megaSize, mobileSize].join(', ');
}

const containerStyles = () => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ImagesContainer = styled('div')(containerStyles);

const singleStyles = ({ numberOfImages }) =>
  numberOfImages === 1 &&
  css`
    width: 100%;
  `;

const multipleStyles = ({ theme, numberOfImages, align }) => {
  if (numberOfImages === 1) {
    return null;
  }

  if (align === Align.CENTER || align === Align.FULL) {
    return css`
      width: calc((100% / ${numberOfImages}) - ${theme.spacings.mega});
    `;
  }

  return css`
    width: calc(50% - ${theme.spacings.kilo});
    margin-bottom: ${theme.spacings.giga};

    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }
  `;
};

const ImageWrapper = styled('div')(singleStyles, multipleStyles);

function Gallery({ caption, align, images, theme }) {
  if (isEmpty(images)) {
    return null;
  }

  const sizes = getSizes(theme, align);

  return (
    <Align align={align}>
      <ImagesContainer>
        {images.map((image, i) => (
          <ImageWrapper key={i} align={align} numberOfImages={images.length}>
            <RatioImage
              {...omit('toString', image)}
              sizes={sizes}
              aspectRatio={1 / 1}
            />
          </ImageWrapper>
        ))}
      </ImagesContainer>
      {caption && <Caption>{caption}</Caption>}
    </Align>
  );
}

Gallery.RIGHT = Align.RIGHT;
Gallery.LEFT = Align.LEFT;
Gallery.CENTER = Align.CENTER;
Gallery.FULL = Align.FULL;

Gallery.propTypes = {
  caption: captionPropType,
  align: PropTypes.oneOf([
    Gallery.RIGHT,
    Gallery.LEFT,
    Gallery.CENTER,
    Gallery.FULL
  ]),
  images: PropTypes.arrayOf(PropTypes.shape(imagePropType)),
  theme: PropTypes.object
};

Gallery.defaultProps = {
  align: Align.LEFT,
  images: []
};

/**
 * @component
 */
export default Gallery;
