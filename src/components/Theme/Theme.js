import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import { sharedPropTypes } from '@sumup/circuit-ui';

import isServer from '../../util/is-server';
import isSaveData from '../../util/is-save-data';
import { setCookie } from '../../util/cookies';
import {
  createFontFace,
  loadFonts,
  preloadFonts
} from '../../styles/load-fonts';
import injectGlobalStyles from '../../styles/global-styles';

export default class Theme extends Component {
  static propTypes = {
    cookies: PropTypes.object,
    initialThemeId: PropTypes.string,
    themes: PropTypes.arrayOf(PropTypes.func).isRequired,
    fontBasePath: PropTypes.string,
    children: sharedPropTypes.childrenPropType
  };

  static defaultProps = {
    initialThemeId: 'standard',
    themes: {},
    cookies: {}
  };

  constructor(props) {
    super(props);

    const { cookies, fontBasePath, initialThemeId: themeId, themes } = props;
    const darkmode = cookies.darkmode === 'true';
    const reducedMotion = cookies.reducedMotion === 'true';

    const themeFn = themes[themeId];
    const theme = themeFn({ darkmode, reducedMotion });

    const custom = fontBasePath
      ? theme.fonts.map(createFontFace(fontBasePath)).join('')
      : '';
    injectGlobalStyles({ theme, custom });

    if (fontBasePath && !isSaveData()) {
      loadFonts(theme.fonts);
    }

    this.state = {
      themeId,
      darkmode,
      reducedMotion,
      isTransitioning: false
    };
  }

  componentDidMount() {
    if (isServer) {
      return;
    }

    this.motionQuery = window.matchMedia('(prefers-reduced-motion)');
    this.motionQuery.addListener(this.handleReducedMotionChange);

    if (this.motionQuery.matches) {
      setCookie('reducedMotion', true);
      this.setState({ reducedMotion: true });
    }

    this.colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.colorSchemeQuery.addListener(this.handleColorSchemeChange);

    if (this.colorSchemeQuery.matches) {
      setCookie('darkmode', true);
      this.setState({ darkmode: true });
    }
  }

  componentWillUnmount() {
    this.motionQuery.removeListener(this.handleReducedMotionChange);
    this.colorSchemeQuery.removeListener(this.handleColorSchemeChange);
  }

  handleReducedMotionChange = () => {
    const reducedMotion = this.motionQuery.matches;
    setCookie('reducedMotion', reducedMotion);
    this.animateStateChange({ reducedMotion });
  };

  handleColorSchemeChange = () => {
    const darkmode = this.colorSchemeQuery.matches;
    setCookie('darkmode', darkmode);
    this.animateStateChange({ darkmode });
  };

  animateStateChange = newState =>
    new Promise(resolve => {
      this.setState({ ...newState, isTransitioning: true }, () => {
        // Wait for transition animation to finish
        setTimeout(() => {
          this.setState({ isTransitioning: false });
          resolve();
        }, 200);
      });
    });

  toggleState = key => () => {
    const value = !this.state[key];
    setCookie(key, value);
    return this.animateStateChange({ [key]: value });
  };

  toggleDarkmode = this.toggleState('darkmode');

  toggleReducedMotion = this.toggleState('reducedMotion');

  setTheme = themeId =>
    new Promise((resolve, reject) => {
      if (themeId === this.state.themeId) {
        resolve();
        return;
      }
      if (!this.props.themes[themeId]) {
        reject();
        return;
      }
      this.animateStateChange({ themeId }).then(() => resolve());
    });

  getTheme = config => {
    const { themes } = this.props;
    const { themeId } = this.state;
    const themeFn = themes[themeId];
    return {
      ...themeFn(config),
      setTheme: this.setTheme,
      toggleDarkmode: this.toggleDarkmode,
      toggleReducedMotion: this.toggleReducedMotion
    };
  };

  render() {
    const { isTransitioning, ...config } = this.state;
    const { children, fontBasePath } = this.props;
    const theme = this.getTheme(config);
    return (
      <Fragment>
        <Head>
          <meta name="theme-color" content={theme.colors.bodyBg} />
          {preloadFonts(fontBasePath, theme.fonts)}
          {isTransitioning && (
            <style
              dangerouslySetInnerHTML={{
                __html: `transition: ${[
                  'background-color',
                  'color',
                  'fill',
                  'border-color'
                ].join(`${theme.animations.micro}, `)} !important;`
              }}
            />
          )}
        </Head>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Fragment>
    );
  }
}
