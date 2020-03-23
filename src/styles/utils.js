import { saturate, desaturate, lighten, darken } from 'polished';

const palette = [
  { saturation: -0.4, luminance: -0.3 },
  { saturation: -0.32, luminance: -0.24 },
  { saturation: -0.24, luminance: -0.18 },
  { saturation: -0.16, luminance: -0.12 },
  { saturation: -0.08, luminance: -0.06 },
  { saturation: 0, luminance: 0 },
  { saturation: 0.08, luminance: 0.06 },
  { saturation: 0.16, luminance: 0.12 },
  { saturation: 0.24, luminance: 0.18 },
  { saturation: 0.32, luminance: 0.24 },
];

export function createPalette(prefix, color) {
  return palette.reduce((acc, { saturation, luminance }, index) => {
    const saturateFn = saturation > 0 ? saturate : desaturate;
    const luminanceFn = luminance > 0 ? darken : lighten;
    const key = `${prefix}${index}00`;
    return {
      ...acc,
      [key]: saturateFn(
        Math.abs(saturation),
        luminanceFn(Math.abs(luminance), color),
      ),
    };
  }, {});
}

export function transparentize(hsla, alpha) {
  const [h, s, l] = hsla;
  return [h, s, l, alpha];
}
