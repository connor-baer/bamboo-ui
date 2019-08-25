import React, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isBoolean } from 'lodash/fp';
import { css, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { childrenPropType } from '../../util/shared-prop-types';
import isSaveData from '../../util/is-save-data';
import { getAllCookies, setCookie } from '../../util/cookies';
import useComponents from '../../hooks/use-components';
import useMedia from '../../hooks/use-media';
import {
  createFontFace,
  loadFonts,
  preloadFonts
} from '../../styles/load-fonts';

const TRANSITION_DURATION = 200; // milliseconds

const transitionStyles = theme => css`
  *,
  *::before,
  *::after {
    transition: background-color ${theme.animations.micro},
      color ${theme.animations.micro}, fill ${theme.animations.micro},
      border-color ${theme.animations.micro},
      text-shadow ${theme.animations.micro} !important;
  }
`;

export default function Theme({
  initialThemeId = 'standard',
  themes = {},
  assetPrefix,
  children
}) {
  const cookies = getAllCookies();
  const { Head } = useComponents();
  const [darkmode, setDarkmode] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isTransitioning, setTransitioning] = useState(false);
  const [themeId, setThemeId] = useState(initialThemeId);
  const timerId = useRef(null);

  const animate = callback => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    } else {
      setTransitioning(true);
    }

    callback();

    timerId.current = setTimeout(() => {
      setTransitioning(false);
      timerId.current = null;
    }, TRANSITION_DURATION);
  };

  const updateReducedMotion = useCallback(isReducedMotion => {
    setCookie('reducedMotion', isReducedMotion);
    setReducedMotion(isReducedMotion);
  }, []);

  const updateDarkmode = useCallback(isDark => {
    animate(() => {
      setCookie('darkmode', isDark);
      setDarkmode(isDark);
    });
  }, []);

  useMedia('(prefers-color-scheme: dark)', updateDarkmode);
  useMedia('(prefers-reduced-motion)', updateReducedMotion);

  useEffect(() => {
    const hasDarkmodeCookie = cookies.darkmode === 'true';
    if (hasDarkmodeCookie !== darkmode) {
      updateDarkmode(hasDarkmodeCookie);
    }
  });
  useEffect(() => {
    const hasReducedMotionCookie = cookies.reducedMotion === 'true';
    if (hasReducedMotionCookie !== reducedMotion) {
      updateReducedMotion(hasReducedMotionCookie);
    }
  });

  const toggleDarkmode = value =>
    updateDarkmode(isBoolean(value) ? value : !darkmode);
  const toggleReducedMotion = value =>
    updateReducedMotion(isBoolean(value) ? value : !reducedMotion);
  const setTheme = newThemeId =>
    new Promise((resolve, reject) => {
      if (newThemeId === themeId) {
        resolve();
        return;
      }
      if (!themes[newThemeId]) {
        reject();
        return;
      }
      setThemeId(newThemeId);
      resolve();
    });

  const themeFn = themes[themeId] || themes.standard;
  const theme = {
    ...themeFn({ darkmode, reducedMotion }),
    setTheme,
    toggleDarkmode,
    toggleReducedMotion
  };

  const globalStyles = theme.fonts.map(createFontFace(assetPrefix));

  useEffect(() => {
    if (assetPrefix && !isSaveData()) {
      loadFonts(theme.fonts);
    }
  }, [assetPrefix, theme.fonts]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <meta name="theme-color" content={theme.colors.bodyBg} />
          <meta name="msapplication-TileColor" content={theme.colors.p500} />
          {preloadFonts(theme.fonts)}
        </Head>

        <Global styles={globalStyles} />
        {isTransitioning && <Global styles={transitionStyles} />}

        {children}
      </>
    </ThemeProvider>
  );
}

Theme.propTypes = {
  initialThemeId: PropTypes.string,
  themes: PropTypes.object.isRequired,
  assetPrefix: PropTypes.string,
  children: childrenPropType
};
