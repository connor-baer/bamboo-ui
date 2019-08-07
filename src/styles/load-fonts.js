import React, { Fragment } from 'react';
import { css } from '@emotion/core';
import { curry, differenceWith, isEqual, isEmpty, pick } from 'lodash/fp';
import FontFaceObserver from 'fontfaceobserver';

import isServer from '../util/is-server';
import addClass from '../util/add-class';

export const createFontFace = curry(
  (assetPrefix, { name, weight, style, localName }) => {
    const fontPath = `${assetPrefix}/${name}-${weight}-${style}`;
    return css`
      @font-face {
        font-family: '${name}';
        font-style: ${style};
        font-weight: ${weight};
        font-display: swap;
        src:
          local('${localName || name}'),
          url('${fontPath}.woff2') format('woff2'),
          url('${fontPath}.woff') format('woff');
      };
  `;
  }
);

export const preloadFonts = curry((assetPrefix, fonts) =>
  fonts.map(({ name, weight, style }) => {
    const fullName = `${name}-${weight}-${style}`;
    const fontPath = `${assetPrefix}/${fullName}`;
    return (
      <Fragment key={fullName}>
        <link rel="preload" href={`${fontPath}.woff2`} as="font" />
        <link rel="preload" href={`${fontPath}.woff`} as="font" />
      </Fragment>
    );
  })
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
    .then(loaded => {
      // eslint-disable-next-line no-console
      console.info(
        `Loaded fonts "${loaded
          .map(({ family, style, weight }) => `${family} ${weight} ${style}`)
          .join(', ')}"`
      );
    })
    .catch(e => {
      // eslint-disable-next-line no-console
      console.warn(`Failed to load font "${e.family}"`);
    })
    .finally(() => {
      addClass(document.documentElement, 'fonts-loaded');
      // Optimization for repeat views
      sessionStorage.setItem('prevLoadedFonts', JSON.stringify(fonts));
    });
}
