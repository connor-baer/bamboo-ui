import openColor from 'open-color/open-color.json';
import { mapValues, isString } from 'lodash/fp';
import { toColorString } from 'polished';

import { createPalette } from './utils';

const ASSET_BASEURL = 'https://assets.connor.li';

const fonts = [
  {
    name: 'Merriweather Sans',
    localName: 'Merriweather Sans Light',
    weight: '300',
    style: 'normal',
    sources: [
      {
        url: `${ASSET_BASEURL}/fonts/merriweather-sans-v11-latin-300.woff2`,
        format: 'woff2',
      },
      {
        url: `${ASSET_BASEURL}/fonts/merriweather-sans-v11-latin-300.woff`,
        format: 'woff',
      },
    ],
  },
  {
    name: 'Merriweather Sans',
    localName: 'Merriweather Sans',
    weight: '400',
    style: 'normal',
    sources: [
      {
        url: `${ASSET_BASEURL}/fonts/merriweather-sans-v11-latin-regular.woff2`,
        format: 'woff2',
      },
      {
        url: `${ASSET_BASEURL}/fonts/merriweather-sans-v11-latin-regular.woff`,
        format: 'woff',
      },
    ],
  },
  {
    name: 'Merriweather Sans',
    localName: 'Merriweather Sans Bold',
    weight: '700',
    style: 'normal',
    sources: [
      {
        url: `${ASSET_BASEURL}/fonts/merriweather-sans-v11-latin-700.woff2`,
        format: 'woff2',
      },
      {
        url: `${ASSET_BASEURL}/fonts/merriweather-sans-v11-latin-700.woff`,
        format: 'woff',
      },
    ],
  },
  {
    name: 'Merriweather',
    localName: 'Merriweather',
    weight: '400',
    style: 'normal',
    sources: [
      {
        url: `${ASSET_BASEURL}/fonts/merriweather-v21-latin-regular.woff2`,
        format: 'woff2',
      },
      {
        url: `${ASSET_BASEURL}/fonts/merriweather-v21-latin-regular.woff`,
        format: 'woff',
      },
    ],
  },
];

const fontStack = {
  default:
    // eslint-disable-next-line max-len
    '"Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  sans:
    // eslint-disable-next-line max-len
    '"Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  serif: 'Merriweather, Georgia, Times New Roman, serif',
  mono: 'Courier New, mono-space',
};

const fontWeight = {
  light: '300',
  regular: '400',
  bold: '700',
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
};

const lineHeights = {
  bit: '1.25em',
  byte: '1.33em',
  kilo: '1.5em',
  mega: '1.75em',
  giga: '2em',
  tera: '2.5em',
};

const iconSizes = {
  byte: '12px',
  kilo: '16px',
  mega: '24px',
  giga: '36px',
};

const borderWidth = {
  kilo: '1px',
  mega: '2px',
};

const borderRadius = {
  kilo: '2px',
  mega: '4px',
  giga: '6px',
};

const zIndexes = {
  nprogress: 999,
};

const maxWidth = '80rem';
const pageWidth = '75rem';

const neutralsLight = {
  n000: openColor.gray[0],
  n100: openColor.gray[1],
  n200: openColor.gray[2],
  n300: openColor.gray[3],
  n400: openColor.gray[4],
  n500: openColor.gray[6],
  n600: openColor.gray[6],
  n700: openColor.gray[7],
  n800: openColor.gray[8],
  n900: openColor.gray[9],
};

const neutralsDark = {
  n000: openColor.gray[9],
  n100: openColor.gray[8],
  n200: openColor.gray[7],
  n300: openColor.gray[6],
  n400: openColor.gray[5],
  n500: openColor.gray[4],
  n600: openColor.gray[3],
  n700: openColor.gray[2],
  n800: openColor.gray[1],
  n900: openColor.gray[0],
};

const violets = {
  v000: openColor.violet[0],
  v100: openColor.violet[1],
  v200: openColor.violet[2],
  v300: openColor.violet[3],
  v400: openColor.violet[4],
  v500: openColor.violet[5],
  v600: openColor.violet[6],
  v700: openColor.violet[7],
  v800: openColor.violet[8],
  v900: openColor.violet[9],
};

const blues = {
  b000: openColor.blue[0],
  b100: openColor.blue[1],
  b200: openColor.blue[2],
  b300: openColor.blue[3],
  b400: openColor.blue[4],
  b500: openColor.blue[5],
  b600: openColor.blue[6],
  b700: openColor.blue[7],
  b800: openColor.blue[8],
  b900: openColor.blue[9],
};

const greens = {
  g000: openColor.green[0],
  g100: openColor.green[1],
  g200: openColor.green[2],
  g300: openColor.green[3],
  g400: openColor.green[4],
  g500: openColor.green[5],
  g600: openColor.green[6],
  g700: openColor.green[7],
  g800: openColor.green[8],
  g900: openColor.green[9],
};

const yellows = {
  y000: openColor.yellow[0],
  y100: openColor.yellow[1],
  y200: openColor.yellow[2],
  y300: openColor.yellow[3],
  y400: openColor.yellow[4],
  y500: openColor.yellow[5],
  y600: openColor.yellow[6],
  y700: openColor.yellow[7],
  y800: openColor.yellow[8],
  y900: openColor.yellow[9],
};

const oranges = {
  o000: openColor.orange[0],
  o100: openColor.orange[1],
  o200: openColor.orange[2],
  o300: openColor.orange[3],
  o400: openColor.orange[4],
  o500: openColor.orange[5],
  o600: openColor.orange[6],
  o700: openColor.orange[7],
  o800: openColor.orange[8],
  o900: openColor.orange[9],
};

const reds = {
  r000: openColor.red[0],
  r100: openColor.red[1],
  r200: openColor.red[2],
  r300: openColor.red[3],
  r400: openColor.red[4],
  r500: openColor.red[5],
  r600: openColor.red[6],
  r700: openColor.red[7],
  r800: openColor.red[8],
  r900: openColor.red[9],
};

const primary = createPalette('p', '#1fb7e3');

const breakpoints = {
  untilKilo: '(max-width: 479px)',
  kilo: 480,
  kiloToMega: '(min-width: 480px) and (max-width: 767px)',
  mega: 768,
  untilMega: '(max-width: 767px)',
  megaToGiga: '(min-width: 768px) and (max-width: 959px)',
  giga: 960,
  untilGiga: '(max-width: 959px)',
  gigaToTera: '(min-width: 960px) and (max-width: 1279px)',
  tera: 1280,
};

export function createColors(darkmode = false) {
  const danger = reds.r600;
  const success = greens.g700;
  const warning = yellows.y700;
  const shadow = '#0C0F14';
  const selectionBg = openColor.yellow[3];
  const selectionColor = openColor.black;
  const offBlack = '#15191d';
  const white = darkmode ? openColor.black : openColor.white;
  const black = darkmode ? openColor.white : openColor.black;
  const bodyBg = darkmode ? offBlack : openColor.white;
  const bodyColor = darkmode ? openColor.white : offBlack;
  const neutrals = darkmode ? neutralsDark : neutralsLight;
  const colors = {
    ...neutrals,
    ...violets,
    ...blues,
    ...greens,
    ...yellows,
    ...oranges,
    ...reds,
    ...primary,
    danger,
    success,
    warning,
    white,
    black,
    bodyBg,
    bodyColor,
    selectionBg,
    selectionColor,
    shadow,
  };
  return Object.keys(colors).reduce((acc, name) => {
    const color = colors[name];
    acc[name] = isString(color) ? color : toColorString(color);
    return acc;
  }, {});
}

function createAnimations(reducedMotion = false) {
  return {
    micro: '160ms cubic-bezier(0, 0, 0.2, 1)',
    standard: '320ms cubic-bezier(0, 0, 0.2, 1)',
    motion: reducedMotion ? '0s' : '320ms cubic-bezier(0, 0, 0.2, 1)',
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
  yotta: '6rem',
};

export const createMediaQueries = mapValues((mediaExpression) => {
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
    mq: createMediaQueries(breakpoints),
  };
}

export default { standard };
