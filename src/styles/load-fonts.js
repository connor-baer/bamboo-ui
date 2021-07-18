import React from 'react';
import { css } from '@emotion/core';
import FontFaceObserver from 'fontfaceobserver';

import { isEmpty, isNil, not } from '../util/fp';
import { isServer } from '../util/is-server';
import addClass from '../util/add-class';

const LOADED_FONTS = '@cb/fonts-loaded';

export const createFontFace = (font) => {
  const { name, weight, style, localName, sources } = font;
  const urls = sources
    .map(({ url, format }) => `url('${url}') format('${format}')`)
    .join(', ');
  return css`
    @font-face {
      font-family: '${name}';
      font-style: ${style};
      font-weight: ${weight};
      font-display: swap;
      src: local('${localName || name}'), ${urls};
    } ;
  `;
};

export const preloadFonts = (fonts) =>
  fonts.map(({ sources }) =>
    sources.map(({ url }) => (
      <link key={url} href={url} rel="preload" as="font" />
    )),
  );

export function loadFonts(fonts, timeout = 3000) {
  if (isServer || isEmpty(fonts)) {
    return;
  }

  const prevLoadedFonts =
    sessionStorage.getItem(LOADED_FONTS) &&
    JSON.parse(sessionStorage.getItem(LOADED_FONTS));

  const fontsToLoad = prevLoadedFonts
    ? fonts.filter((font) => {
        const key = createFontKey(font);
        return !prevLoadedFonts[key];
      })
    : fonts;

  // Optimization for repeat views
  if (isEmpty(fontsToLoad)) {
    addClass(document.documentElement, 'fonts-loaded');
    return;
  }

  const fontPromises = fonts.map(({ name, weight, style, stretch }) => {
    const config = { weight, style, stretch };
    const font = new FontFaceObserver(name, config);
    return font.load(null, timeout);
  });

  Promise.all(fontPromises)
    .then((loaded) => {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.info(
          `Loaded fonts "${loaded
            .map(({ family, style, weight }) => `${family} ${weight} ${style}`)
            .join(', ')}"`,
        );
      }
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.warn(`Failed to load font "${e.family}"`);
    })
    .finally(() => {
      addClass(document.documentElement, 'fonts-loaded');
      // Optimization for repeat views
      sessionStorage.setItem(
        LOADED_FONTS,
        JSON.stringify(
          fonts.reduce((acc, font) => {
            const key = createFontKey(font);
            acc[key] = true;
            return acc;
          }, {}),
        ),
      );
    });
}

function createFontKey({ name, weight, style, stretch }) {
  return [name, weight, style, stretch].filter(not(isNil)).join(' ');
}
