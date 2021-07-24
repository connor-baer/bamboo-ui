import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { childrenPropType } from '../../util/prop-types';
import { isSaveData } from '../../util/is-save-data';
import { useMedia } from '../../hooks/useMedia';
import { useComponents } from '../../hooks/useComponents';
import {
  createFontFace,
  loadFonts,
  preloadFonts,
} from '../../styles/load-fonts';

export function Theme({ theme, children }) {
  const { Head } = useComponents();
  const darkmode = useMedia('(prefers-color-scheme: dark)');

  const { fonts, overrides, ...rest } = theme;

  const fontfaceStyles = fonts.map(createFontFace);

  useEffect(() => {
    if (!isSaveData()) {
      loadFonts(theme.fonts);
    }
  }, [theme.fonts]);

  return (
    <ThemeProvider theme={{ ...rest, darkmode }}>
      <>
        <Head>
          <meta name="theme-color" content={darkmode ? '#000' : '#fff'} />
          <meta
            name="msapplication-TileColor"
            content={theme.color.primary[500]}
          />
          {preloadFonts(theme.fonts)}
        </Head>

        <Global styles={fontfaceStyles} />

        {children}
      </>
    </ThemeProvider>
  );
}

Theme.propTypes = {
  theme: PropTypes.object.isRequired,
  children: childrenPropType,
};
