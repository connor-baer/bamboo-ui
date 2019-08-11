import openColor from 'open-color/open-color.json';
import { mapValues } from 'lodash/fp';

const fonts = [
  {
    name: 'Overpass',
    localName: 'Overpass Light',
    weight: '300',
    style: 'normal'
  },
  {
    name: 'Overpass',
    localName: 'Overpass Regular',
    weight: '400',
    style: 'normal'
  },
  {
    name: 'Overpass',
    localName: 'Overpass Bold',
    weight: '700',
    style: 'normal'
  }
];

const fontStack = {
  default: 'Overpass, Helvetica, Arial, sans-serif',
  sans: 'Overpass, Helvetica, Arial, sans-serif',
  serif: 'Overpass, Helvetica, Arial, sans-serif',
  mono: 'Courier New, mono-space'
};

const fontWeight = {
  light: '300',
  regular: '400',
  bold: '700'
};

const fontSizes = {
  bit: '0.75rem',
  byte: '0.875rem',
  kilo: '1rem',
  mega: '1.25rem',
  giga: '1.5rem',
  tera: '2rem',
  peta: '2.5rem',
  exa: '3rem',
  zetta: '4rem'
};

const lineHeights = {
  bit: '125em',
  byte: '1.33em',
  kilo: '1.5em',
  mega: '1.75em',
  giga: '2em',
  tera: '2.5em'
};

const iconSizes = {
  byte: '12px',
  kilo: '16px',
  mega: '24px',
  giga: '36px'
};

const borderWidth = {
  kilo: '1px',
  mega: '2px'
};

const borderRadius = {
  kilo: '2px',
  mega: '4px',
  giga: '6px'
};

const zIndexes = {
  nprogress: 999
};

const maxWidth = '80rem';
const pageWidth = '72rem';

const neutralsLight = {
  n100: openColor.gray[1],
  n300: openColor.gray[3],
  n500: openColor.gray[6],
  n700: openColor.gray[7],
  n900: openColor.gray[9]
};

const neutralsDark = {
  n100: openColor.gray[9],
  n300: openColor.gray[7],
  n500: openColor.gray[5],
  n700: openColor.gray[3],
  n900: openColor.gray[1]
};

const violets = {
  v100: openColor.violet[1],
  v300: openColor.violet[3],
  v500: openColor.violet[5],
  v700: openColor.violet[7],
  v900: openColor.violet[9]
};

const blues = {
  b100: openColor.blue[1],
  b300: openColor.blue[3],
  b500: openColor.blue[5],
  b700: openColor.blue[7],
  b900: openColor.blue[9]
};

const greens = {
  g100: openColor.green[1],
  g300: openColor.green[3],
  g500: openColor.green[5],
  g700: openColor.green[7],
  g900: openColor.green[9]
};

const yellows = {
  y100: openColor.yellow[1],
  y300: openColor.yellow[3],
  y500: openColor.yellow[5],
  y700: openColor.yellow[7],
  y900: openColor.yellow[9]
};

const oranges = {
  o100: openColor.orange[1],
  o300: openColor.orange[3],
  o500: openColor.orange[5],
  o700: openColor.orange[7],
  o900: openColor.orange[9]
};

const reds = {
  r100: openColor.red[1],
  r300: openColor.red[3],
  r500: openColor.red[5],
  r700: openColor.red[7],
  r900: openColor.red[9]
};

const primary = {
  p100: '#00ccd2',
  p300: '#00ccd2',
  p500: '#1fb7e3',
  p700: '#1fb7e3',
  p900: '#1fb7e3'
};

const misc = {
  danger: reds.r500,
  success: greens.g700,
  warning: yellows.y700
};

const breakpoints = {
  untilKilo: '(max-width: 479px)',
  kilo: 480,
  kiloToMega: '(min-width: 480px) and (max-width: 767px)',
  mega: 768,
  untilMega: '(max-width: 767px)',
  megaToGiga: '(min-width: 768px) and (max-width: 959px)',
  giga: 960,
  gigaToTera: '(min-width: 960px) and (max-width: 1279px)',
  tera: 1280,
  peta: 1440
};

export function createColors(darkmode = false) {
  const shadow = '#0C0F14';
  const selectionBg = openColor.yellow[3];
  const selectionColor = openColor.black;
  const offBlack = '#15191d'; // '#1b1f22';
  const white = darkmode ? openColor.black : openColor.white;
  const black = darkmode ? openColor.white : openColor.black;
  const bodyBg = darkmode ? offBlack : openColor.white;
  const bodyColor = darkmode ? openColor.white : offBlack;
  const neutrals = darkmode ? neutralsDark : neutralsLight;
  return {
    white,
    black,
    bodyBg,
    bodyColor,
    selectionBg,
    selectionColor,
    shadow,
    ...neutrals,
    ...violets,
    ...blues,
    ...greens,
    ...yellows,
    ...oranges,
    ...reds,
    ...primary,
    ...misc
  };
}

function createAnimations(reducedMotion = false) {
  return {
    micro: '160ms cubic-bezier(0, 0, 0.2, 1)',
    standard: '320ms cubic-bezier(0, 0, 0.2, 1)',
    motion: reducedMotion ? '0s' : '320ms cubic-bezier(0, 0, 0.2, 1)'
  };
}

const spacings = {
  bit: '0.25rem',
  byte: '0.5rem',
  kilo: '0.75rem',
  mega: '1rem',
  giga: '1.5rem',
  tera: '2rem',
  peta: '2.5rem',
  exa: '3rem',
  zetta: '4rem',
  yotta: '5rem'
};

export const createMediaQueries = mapValues(mediaExpression => {
  const { prefix = '', suffix = '' } =
    typeof mediaExpression === 'string'
      ? {}
      : { prefix: '(min-width: ', suffix: 'px)' };

  const enhancedExpression = prefix + mediaExpression + suffix;

  return `@media ${enhancedExpression}`;
});

function standard({ darkmode, reducedMotion } = {}) {
  return {
    darkmode,
    reducedMotion,
    fonts,
    fontStack,
    fontWeight,
    fontSizes,
    lineHeights,
    iconSizes,
    borderWidth,
    borderRadius,
    breakpoints,
    spacings,
    zIndexes,
    maxWidth,
    pageWidth,
    colors: createColors(darkmode),
    animations: createAnimations(reducedMotion),
    mq: createMediaQueries(breakpoints)
  };
}

export default { standard };
