import openColor from 'open-color/open-color.json';

import { createMediaQueries } from './utils';

const ASSET_BASEURL = 'https://assets.connor.li';

// NOTE: Pixel annotations assume a root font-size of 16px.

const fonts = [
  {
    name: 'Merriweather Sans',
    localName: 'Merriweather Sans Light',
    weight: '300',
    style: 'normal',
    sources: [
      `${ASSET_BASEURL}/fonts/merriweather-sans-v11-latin-300.woff2`,
      `${ASSET_BASEURL}/fonts/merriweather-sans-v11-latin-300.woff`,
    ],
  },
  {
    name: 'Merriweather Sans',
    localName: 'Merriweather Sans',
    weight: '400',
    style: 'normal',
    sources: [
      `${ASSET_BASEURL}/fonts/merriweather-sans-v11-latin-regular.woff2`,
      `${ASSET_BASEURL}/fonts/merriweather-sans-v11-latin-regular.woff`,
    ],
  },
  {
    name: 'Merriweather Sans',
    localName: 'Merriweather Sans Bold',
    weight: '700',
    style: 'normal',
    sources: [
      `${ASSET_BASEURL}/fonts/merriweather-sans-v11-latin-700.woff2`,
      `${ASSET_BASEURL}/fonts/merriweather-sans-v11-latin-700.woff`,
    ],
  },
  {
    name: 'Merriweather',
    localName: 'Merriweather',
    weight: '400',
    style: 'normal',
    sources: [
      `${ASSET_BASEURL}/fonts/merriweather-v21-latin-regular.woff2`,
      `${ASSET_BASEURL}/fonts/merriweather-v21-latin-regular.woff`,
    ],
  },
];

const fontStack = {
  sans:
    '"Merriweather Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  serif: 'Merriweather, Georgia, Times New Roman, serif',
  mono: 'Courier New, mono-space',
};

const fontSize = {
  s: '0.8125rem', // 13px
  m: '1rem', // 16px
  l: '1.3125rem', // 21px
  xl: '1.75rem', // 28px
  xxl: '2.25rem', // 36px
};

const fontWeight = {
  light: '300',
  regular: '400',
  bold: '700',
};

const lineHeight = {
  s: '1.2',
  m: '1.6',
  l: '2.2',
};

const letterSpacing = {
  s: '1px',
  m: '2px',
  l: '3px',
};

// We use `em` units for breakpoints since they respect a user's root font-size
// and avoid bugs in Safari that affect the `rem` unit.
// https://zellwk.com/blog/media-query-units/
const breakpoints = {
  hand: '37.5em', // 600px
  lap: '37.5em', // 900px
  desk: '75em', // 1200px
  wall: '100em', // 1600px
};

const mq = {
  ...createMediaQueries(breakpoints),
  darkmode: '@media screen and (prefers-color-scheme: dark)',
  reducedMotion: '@media screen and (prefers-reduced-motion: reduce)',
};

const spacing = {
  xxs: '0.25rem', // 4px
  xs: '0.5rem', // 8px
  s: '0.75rem', // 12px
  m: '1rem', // 16px
  l: '1.5rem', // 24px
  xl: '2rem', // 32px
  xxl: '2.5rem', // 40px
  xxxl: '3rem', // 48px
  xxxxl: '4rem', // 54px
  gutter: '1rem', // 16px
};

const iconSize = {
  s: '0.75rem', // 12px
  m: '1rem', // 16px
  l: '1.5rem', // 24px
  xl: '3rem', // 36px
};

const borderWidth = {
  s: '1px',
  m: '2px',
  l: '4px',
};

const borderRadius = {
  s: '0.25rem', // 4px
  m: '0.5rem', // 8px
  l: '1rem', // 16px
  circle: '100%',
  pill: '999999px', // HACK: By providing a very large absolut size, the browser picks the maximum size in one dimension.
};

const zIndex = {
  nprogress: 999,
};

const maxWidth = '80rem';
const pageWidth = '75rem';

const primary = {
  100: '#eaf7fb',
  300: '#b6e4f2',
  500: '#1aabd6',
  700: '#097493',
  900: '#1d3844',
};

const neutral = {
  100: openColor.gray[1],
  300: openColor.gray[3],
  500: openColor.gray[6],
  700: openColor.gray[7],
  900: openColor.gray[9],
};

const violet = {
  100: openColor.violet[0],
  300: openColor.violet[2],
  500: openColor.violet[5],
  700: openColor.violet[7],
  900: openColor.violet[9],
};

const blue = {
  100: openColor.blue[0],
  300: openColor.blue[2],
  500: openColor.blue[5],
  700: openColor.blue[7],
  900: openColor.blue[9],
};

const green = {
  100: openColor.green[0],
  300: openColor.green[2],
  500: openColor.green[5],
  700: openColor.green[7],
  900: openColor.green[9],
};

const yellow = {
  100: openColor.yellow[0],
  300: openColor.yellow[2],
  500: openColor.yellow[5],
  700: openColor.yellow[7],
  900: openColor.yellow[9],
};

const orange = {
  100: openColor.orange[0],
  300: openColor.orange[2],
  500: openColor.orange[5],
  700: openColor.orange[7],
  900: openColor.orange[9],
};

const red = {
  100: openColor.red[0],
  300: openColor.red[2],
  500: openColor.red[5],
  700: openColor.red[7],
  900: openColor.red[9],
};

const danger = red[500];
const success = green[700];
const warning = yellow[700];
const shadow = 'rgba(12, 15, 20, 0.2)';
const selectionBg = '#ffe066';
const selectionColor = openColor.black;
const offBlack = '#15191d';
const { white } = openColor;
const { black } = openColor;
const bodyBg = openColor.white;
const bodyColor = '#15191d';

const animation = {
  micro: '160ms cubic-bezier(0, 0, 0.2, 1)',
  standard: '320ms cubic-bezier(0, 0, 0.2, 1)',
  motion: '320ms cubic-bezier(0, 0, 0.2, 1)',
};

const overrides = [
  {
    condition: mq.lap,
    theme: {
      spacing: {
        gutter: '1.5rem', // 24px
      },
      fontSize: {
        s: '0.875rem', // 14px
        m: '1.125rem', // 18px
        l: '1.625rem', // 26px
        xl: '2.25rem', // 36px
        xxl: '3rem', // 48px
      },
    },
  },
  {
    condition: mq.desk,
    theme: {
      spacing: {
        gutter: '2rem', // 32px
      },
    },
  },
  {
    condition: mq.darkmode,
    theme: {
      color: {
        neutral: {
          100: openColor.gray[8],
          300: openColor.gray[6],
          500: openColor.gray[4],
          700: openColor.gray[2],
          900: openColor.gray[0],
        },
        white: openColor.black,
        black: openColor.white,
        bodyBg: offBlack,
        bodyColor: openColor.white,
      },
    },
  },
  {
    condition: mq.reducedMotion,
    theme: {
      animation: {
        motion: '0s',
      },
    },
  },
];

export const standard = {
  fonts,
  fontStack,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  breakpoints,
  mq,
  spacing,
  iconSize,
  maxWidth,
  pageWidth,
  borderWidth,
  borderRadius,
  zIndex,
  color: {
    primary,
    neutral,
    violet,
    blue,
    green,
    yellow,
    orange,
    red,
    danger,
    success,
    warning,
    shadow,
    selectionBg,
    selectionColor,
    offBlack,
    white,
    black,
    bodyBg,
    bodyColor,
  },
  animation,
  overrides,
};
