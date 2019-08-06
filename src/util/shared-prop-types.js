import PropTypes from 'prop-types';

export const childrenPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node
]);

export const themePropType = PropTypes.shape({
  colors: PropTypes.shape({
    white: PropTypes.string.isRequired,
    black: PropTypes.string.isRequired,
    // Neutrals
    n100: PropTypes.string.isRequired,
    n300: PropTypes.string.isRequired,
    n500: PropTypes.string.isRequired,
    n700: PropTypes.string.isRequired,
    n900: PropTypes.string.isRequired,
    // Blues
    b100: PropTypes.string.isRequired,
    b300: PropTypes.string.isRequired,
    b500: PropTypes.string.isRequired,
    b700: PropTypes.string.isRequired,
    b900: PropTypes.string.isRequired,
    // Greens
    g100: PropTypes.string.isRequired,
    g300: PropTypes.string.isRequired,
    g500: PropTypes.string.isRequired,
    g700: PropTypes.string.isRequired,
    g900: PropTypes.string.isRequired,
    // Yellows
    y100: PropTypes.string.isRequired,
    y300: PropTypes.string.isRequired,
    y500: PropTypes.string.isRequired,
    y700: PropTypes.string.isRequired,
    y900: PropTypes.string.isRequired,
    // Reds
    r100: PropTypes.string.isRequired,
    r300: PropTypes.string.isRequired,
    r500: PropTypes.string.isRequired,
    r700: PropTypes.string.isRequired,
    r900: PropTypes.string.isRequired,
    // Primary
    p100: PropTypes.string.isRequired,
    p300: PropTypes.string.isRequired,
    p500: PropTypes.string.isRequired,
    p700: PropTypes.string.isRequired,
    p900: PropTypes.string.isRequired,
    // Misc
    shadow: PropTypes.string.isRequired,
    bodyBg: PropTypes.string.isRequired,
    bodyColor: PropTypes.string.isRequired
  }).isRequired,
  spacings: PropTypes.shape({
    bit: PropTypes.string.isRequired,
    byte: PropTypes.string.isRequired,
    kilo: PropTypes.string.isRequired,
    mega: PropTypes.string.isRequired,
    giga: PropTypes.string.isRequired,
    tera: PropTypes.string.isRequired,
    peta: PropTypes.string.isRequired,
    exa: PropTypes.string.isRequired,
    zetta: PropTypes.string.isRequired,
    yotta: PropTypes.string.isRequired
  }).isRequired,
  iconSizes: PropTypes.shape({
    kilo: PropTypes.string.isRequired,
    mega: PropTypes.string.isRequired
  }),
  borderRadius: PropTypes.shape({
    kilo: PropTypes.string.isRequired,
    mega: PropTypes.string.isRequired,
    giga: PropTypes.string.isRequired
  }).isRequired,
  fontStack: PropTypes.shape({
    default: PropTypes.string.isRequired,
    sans: PropTypes.string,
    serif: PropTypes.string,
    mono: PropTypes.string
  }),
  fontSizes: PropTypes.shape({
    bit: PropTypes.string.isRequired,
    byte: PropTypes.string.isRequired,
    kilo: PropTypes.string.isRequired,
    mega: PropTypes.string.isRequired,
    giga: PropTypes.string.isRequired,
    tera: PropTypes.string.isRequired,
    peta: PropTypes.string.isRequired,
    exa: PropTypes.string.isRequired,
    zetta: PropTypes.string.isRequired
  }).isRequired,
  fontWeight: PropTypes.shape({
    light: PropTypes.string.isRequired,
    regular: PropTypes.string.isRequired,
    bold: PropTypes.string.isRequired
  }).isRequired,
  lineHeights: PropTypes.shape({
    bit: PropTypes.string.isRequired,
    byte: PropTypes.string.isRequired,
    kilo: PropTypes.string.isRequired,
    mega: PropTypes.string.isRequired,
    giga: PropTypes.string.isRequired,
    tera: PropTypes.string.isRequired
  }).isRequired
});

export const imagePropType = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  alt: PropTypes.string.isRequired
};

export const captionPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.element
]);
