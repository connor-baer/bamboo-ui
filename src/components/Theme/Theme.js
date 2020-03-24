import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { childrenPropType } from '../../util/shared-prop-types';
import { isSaveData } from '../../util/is-save-data';
import { useMedia } from '../../hooks/use-media';
import { useComponents } from '../../hooks/use-components';
import {
  createFontFace,
  loadFonts,
  preloadFonts,
} from '../../styles/load-fonts';

import { createStaticTheme, createVariables } from './ThemeService';

export default function Theme({ theme, children }) {
  const { Head } = useComponents();
  const darkmode = useMedia('(prefers-color-scheme: dark)');

  const { fonts, breakpoints, mq, overrides, ...rest } = theme;

  const staticTheme = createStaticTheme(rest);

  const baseVariables = createVariables(rest);
  const overrideVariables = overrides.map(
    (override) => `
      ${override.condition} {
        ${createVariables(override.theme)}
      }
    `,
  );

  const fontfaceStyles = fonts.map(createFontFace);

  useEffect(() => {
    if (!isSaveData()) {
      loadFonts(theme.fonts);
    }
  }, [theme.fonts]);

  return (
    <ThemeProvider theme={{ ...staticTheme, breakpoints, mq, darkmode }}>
      <>
        <Head>
          <meta name="theme-color" content={darkmode ? '#000' : '#fff'} />
          <meta
            name="msapplication-TileColor"
            content={theme.color.primary[500]}
          />
          {preloadFonts(theme.fonts)}
        </Head>

        <Global styles={baseVariables} />
        <Global styles={overrideVariables} />
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
