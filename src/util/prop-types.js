import PropTypes from 'prop-types';

import { RIGHT, LEFT, CENTER, FULL } from '../constants/align';

export const childrenPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);

export const themePropType = PropTypes.shape({
  color: PropTypes.shape({
    white: PropTypes.string.isRequired,
    black: PropTypes.string.isRequired,
    neutral: {
      100: PropTypes.string.isRequired,
      200: PropTypes.string.isRequired,
      300: PropTypes.string.isRequired,
      400: PropTypes.string.isRequired,
      500: PropTypes.string.isRequired,
      600: PropTypes.string.isRequired,
      700: PropTypes.string.isRequired,
      800: PropTypes.string.isRequired,
      900: PropTypes.string.isRequired,
    },
    blue: {
      100: PropTypes.string.isRequired,
      200: PropTypes.string.isRequired,
      300: PropTypes.string.isRequired,
      400: PropTypes.string.isRequired,
      500: PropTypes.string.isRequired,
      600: PropTypes.string.isRequired,
      700: PropTypes.string.isRequired,
      800: PropTypes.string.isRequired,
      900: PropTypes.string.isRequired,
    },
    green: {
      100: PropTypes.string.isRequired,
      200: PropTypes.string.isRequired,
      300: PropTypes.string.isRequired,
      400: PropTypes.string.isRequired,
      500: PropTypes.string.isRequired,
      600: PropTypes.string.isRequired,
      700: PropTypes.string.isRequired,
      800: PropTypes.string.isRequired,
      900: PropTypes.string.isRequired,
    },
    yellow: {
      100: PropTypes.string.isRequired,
      200: PropTypes.string.isRequired,
      300: PropTypes.string.isRequired,
      400: PropTypes.string.isRequired,
      500: PropTypes.string.isRequired,
      600: PropTypes.string.isRequired,
      700: PropTypes.string.isRequired,
      800: PropTypes.string.isRequired,
      900: PropTypes.string.isRequired,
    },
    red: {
      100: PropTypes.string.isRequired,
      200: PropTypes.string.isRequired,
      300: PropTypes.string.isRequired,
      400: PropTypes.string.isRequired,
      500: PropTypes.string.isRequired,
      600: PropTypes.string.isRequired,
      700: PropTypes.string.isRequired,
      800: PropTypes.string.isRequired,
      900: PropTypes.string.isRequired,
    },
    primary: {
      100: PropTypes.string.isRequired,
      200: PropTypes.string.isRequired,
      300: PropTypes.string.isRequired,
      400: PropTypes.string.isRequired,
      500: PropTypes.string.isRequired,
      600: PropTypes.string.isRequired,
      700: PropTypes.string.isRequired,
      800: PropTypes.string.isRequired,
      900: PropTypes.string.isRequired,
    },
    // Misc
    shadow: PropTypes.string.isRequired,
    bodyBg: PropTypes.string.isRequired,
    bodyColor: PropTypes.string.isRequired,
    danger: PropTypes.string.isRequired,
    warning: PropTypes.string.isRequired,
    success: PropTypes.string.isRequired,
  }).isRequired,
  spacing: PropTypes.shape({
    xxs: PropTypes.string.isRequired,
    xs: PropTypes.string.isRequired,
    s: PropTypes.string.isRequired,
    m: PropTypes.string.isRequired,
    l: PropTypes.string.isRequired,
    xl: PropTypes.string.isRequired,
    xxl: PropTypes.string.isRequired,
    xxxl: PropTypes.string.isRequired,
    xxxxl: PropTypes.string.isRequired,
  }).isRequired,
  mq: PropTypes.shape({
    hand: PropTypes.string.isRequired,
    lap: PropTypes.string.isRequired,
    desk: PropTypes.string.isRequired,
    wall: PropTypes.string.isRequired,
  }),
  iconSize: PropTypes.shape({
    s: PropTypes.string.isRequired,
    m: PropTypes.string.isRequired,
    l: PropTypes.string.isRequired,
    xl: PropTypes.string.isRequired,
  }),
  borderWidth: PropTypes.shape({
    s: PropTypes.string.isRequired,
    m: PropTypes.string.isRequired,
    l: PropTypes.string.isRequired,
  }).isRequired,
  borderRadius: PropTypes.shape({
    s: PropTypes.string.isRequired,
    m: PropTypes.string.isRequired,
    l: PropTypes.string.isRequired,
    circle: PropTypes.string.isRequired,
    pill: PropTypes.string.isRequired,
  }).isRequired,
  fontStack: PropTypes.shape({
    sans: PropTypes.string.isRequired,
    serif: PropTypes.string.isRequired,
    mono: PropTypes.string.isRequired,
  }),
  fontSize: PropTypes.shape({
    s: PropTypes.string.isRequired,
    m: PropTypes.string.isRequired,
    l: PropTypes.string.isRequired,
    xl: PropTypes.string.isRequired,
    xxl: PropTypes.string.isRequired,
  }).isRequired,
  fontWeight: PropTypes.shape({
    light: PropTypes.string.isRequired,
    regular: PropTypes.string.isRequired,
    bold: PropTypes.string.isRequired,
  }).isRequired,
  lineHeight: PropTypes.shape({
    s: PropTypes.string.isRequired,
    m: PropTypes.string.isRequired,
    l: PropTypes.string.isRequired,
  }).isRequired,
  letterSpacing: PropTypes.shape({
    s: PropTypes.string.isRequired,
    m: PropTypes.string.isRequired,
    l: PropTypes.string.isRequired,
  }).isRequired,
});

export const textPropType = {
  as: PropTypes.string,
  children: childrenPropType.isRequired,
  type: PropTypes.oneOf(['sans', 'serif', 'mono']),
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl', 'xxl']),
  weight: PropTypes.oneOf(['light', 'regular', 'bold']),
  slope: PropTypes.oneOf(['normal', 'italic']),
  lineHeight: PropTypes.oneOf(['s', 'm', 'l']),
};

export const imagePropType = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  alt: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export const captionPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.element,
]);

export const alignPropType = PropTypes.oneOf([RIGHT, LEFT, CENTER, FULL]);
