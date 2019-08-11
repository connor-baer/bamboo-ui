import React from 'react';
import PropTypes from 'prop-types';

import {
  imagePropType,
  captionPropType
} from '../../../util/shared-prop-types';
import useTheme from '../../../hooks/use-theme';
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

function Figure({ image = {}, align = Align.LEFT, caption, ...rest }) {
  const theme = useTheme();

  if (!image.src) {
    return null;
  }

  const sizes = getSizes(theme, align);

  return (
    <Align align={align} {...rest}>
      <RatioImage {...image} sizes={sizes} />
      {caption && <Caption>{caption}</Caption>}
    </Align>
  );
}

Figure.RIGHT = Align.RIGHT;
Figure.LEFT = Align.LEFT;
Figure.CENTER = Align.CENTER;
Figure.FULL = Align.FULL;

Figure.propTypes = {
  image: PropTypes.shape(imagePropType),
  caption: captionPropType,
  align: PropTypes.oneOf([
    Figure.RIGHT,
    Figure.LEFT,
    Figure.CENTER,
    Figure.FULL
  ])
};

/**
 * @component
 */
export default Figure;
