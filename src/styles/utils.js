import { isString, min } from 'lodash/fp';

export function parseRGBA(rgbaString) {
  // eslint-disable-next-line max-len
  const rgbaRegex = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d)?)\s*)?\)$/i;
  const [, r, g, b, a = 1] = rgbaRegex.exec(rgbaString);
  return [r, g, b, a];
}

export function formatRGBA(rgba) {
  const [r, g, b, a = 1] = rgba;
  return `hsla(${r}, ${g}, ${b}, ${a})`;
}

export function parseHSLA(hslaString) {
  // eslint-disable-next-line max-len
  const hslaRegex = /^hsla?\(\s*(\d+(?:\.\d)?)deg\s*,\s*(\d+(?:\.\d)?)%\s*,\s*(\d+(?:\.\d)?)%\s*(?:,\s*(\d+(?:\.\d)?)\s*)?\)$/i;
  const [, h, s, l, a = 1] = hslaRegex.exec(hslaString);
  return [Number(h), Number(s), Number(l), Number(a)];
}

export function formatHSLA(hsla) {
  const [h, s, l, a = 1] = hsla;
  return `hsla(${h}deg, ${min([s, 100])}%, ${min([l, 100])}%, ${a})`;
}

export function HEXtoRGBA(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
  const rgbaRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
  const fullHex = hex.replace(
    shorthandRegex,
    (m, r, g, b, a = '') => `${r + r + g + g + b + b + a + a}`
  );

  const [, r, g, b, a = 'FF'] = rgbaRegex.exec(fullHex);
  return r && g && b
    ? [
        parseInt(r, 16),
        parseInt(g, 16),
        parseInt(b, 16),
        +(parseInt(a, 16) / 255).toFixed(3)
      ]
    : null;
}

export function RGBAtoHSLA(rgbaString) {
  const rgba = isString(rgbaString) ? parseRGBA(rgbaString) : rgbaString;

  // Make r, g, and b fractions of 1
  const r = rgba[0] / 255;
  const g = rgba[1] / 255;
  const b = rgba[2] / 255;
  const a = rgba[3];

  // Find greatest and smallest channel values
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);

  const delta = cmax - cmin;

  let h = 0;
  let s = 0;
  let l = 0;

  if (delta === 0) {
    h = 0;
  } else if (cmax === r) {
    // Red is max
    h = ((g - b) / delta) % 6;
  } else if (cmax === g) {
    // Green is max
    h = (b - r) / delta + 2;
  } else {
    // Blue is max
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) {
    h += 360;
  }

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l, a];
}

export function HEXtoHSLA(hex) {
  const rgba = HEXtoRGBA(hex);
  return RGBAtoHSLA(rgba);
}

export function createPalette(prefix, color) {
  const [h, s, l, a] = HEXtoHSLA(color);
  return {
    // [`${prefix}000`]: formatHSLA([h, s + 40, l + 27, a]),
    [`${prefix}100`]: formatHSLA([h, s + 32, l + 24, a]),
    // [`${prefix}200`]: formatHSLA([h, s + 24, l + 18, a]),
    [`${prefix}300`]: formatHSLA([h, s + 16, l + 12, a]),
    // [`${prefix}400`]: formatHSLA([h, s + 8, l + 6, a]),
    [`${prefix}500`]: formatHSLA([h, s, l, a]),
    // [`${prefix}600`]: formatHSLA([h, s - 8, l - 6, a]),
    [`${prefix}700`]: formatHSLA([h, s - 16, l - 12, a]),
    // [`${prefix}800`]: formatHSLA([h, s - 24, l - 18, a]),
    [`${prefix}900`]: formatHSLA([h, s - 32, l - 24, a])
  };
}

export function transparentize(hsla, alpha) {
  const [h, s, l] = hsla;
  return [h, s, l, alpha];
}
