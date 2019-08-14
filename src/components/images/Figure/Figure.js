import React from 'react';
import PropTypes from 'prop-types';

import {
  imagePropType,
  captionPropType
} from '../../../util/shared-prop-types';
import useTheme from '../../../hooks/use-theme';
import useComponents from '../../../hooks/use-components';
import RatioImage from '../RatioImage';
import Caption from '../Caption';

const RIGHT = 'right';
const LEFT = 'left';
const CENTER = 'center';
const FULL = 'full';

function getSizes(theme, align) {
  const gigaMap = {
    [RIGHT]: '360px',
    [LEFT]: '360px',
    [CENTER]: '755px',
    [FULL]: '1155px'
  };
  const gigaSize = `(min-width: ${theme.breakpoints.giga}px) ${gigaMap[align]}`;

  const megaMap = {
    [RIGHT]: '380px',
    [LEFT]: '380px',
    [CENTER]: '790px',
    [FULL]: '950px'
  };
  const megaSize = `(min-width: ${theme.breakpoints.mega}px) ${megaMap[align]}`;

  const mobileSize = '100vw';

  return [gigaSize, megaSize, mobileSize].join(', ');
}

function Figure({ image = {}, align = LEFT, caption, ...rest }) {
  const theme = useTheme();
  const { Align } = useComponents();

  if (!image.src) {
    return null;
  }

  const sizes = getSizes(theme, align);

  return (
    <Align {...rest} align={align} as="figure">
      <RatioImage {...image} sizes={sizes} />
      {caption && <Caption>{caption}</Caption>}
    </Align>
  );
}

Figure.RIGHT = RIGHT;
Figure.LEFT = LEFT;
Figure.CENTER = CENTER;
Figure.FULL = FULL;

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
