import React from 'react';
import { css } from '@emotion/core';
import { differenceWith, isEqual, isEmpty, pick } from 'lodash/fp';
import FontFaceObserver from 'fontfaceobserver';

import { isServer } from '../util/is-server';
import addClass from '../util/add-class';

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
      };
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
    sessionStorage.getItem('prevLoadedFonts') &&
    JSON.parse(sessionStorage.getItem('prevLoadedFonts'));

  const fontsToLoad = prevLoadedFonts
    ? differenceWith(isEqual, fonts, prevLoadedFonts)
    : fonts;

  // Optimization for repeat views
  if (isEmpty(fontsToLoad)) {
    addClass(document.documentElement, 'fonts-loaded');
    return;
  }

  const fontPromises = fonts.map(({ name, ...rest }) => {
    const config = pick(['weight', 'style', 'strech'], rest);
    const font = new FontFaceObserver(name, config);
    return font.load(null, timeout);
  });

  Promise.all(fontPromises)
    .then((loaded) => {
      // eslint-disable-next-line no-console
      console.info(
        `Loaded fonts "${loaded
          .map(({ family, style, weight }) => `${family} ${weight} ${style}`)
          .join(', ')}"`,
      );
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.warn(`Failed to load font "${e.family}"`);
    })
    .finally(() => {
      addClass(document.documentElement, 'fonts-loaded');
      // Optimization for repeat views
      sessionStorage.setItem('prevLoadedFonts', JSON.stringify(fonts));
    });
}
